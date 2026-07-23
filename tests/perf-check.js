// NullTrail performance guard — boots the userscript with stubbed browser
// globals and times bulk link cleaning through the real click pipeline.
// Purpose: catch accidental complexity regressions (e.g. an O(n) scan
// reintroduced into a per-link hot path). The threshold is deliberately
// generous so it never flakes on loaded CI runners — it exists to catch
// ORDERS-OF-MAGNITUDE regressions, not micro-jitter.
"use strict";

const failures = [];
function ok(cond, name) {
    if (cond) { console.log("  PASS  " + name); }
    else { console.log("  FAIL  " + name); failures.push(name); }
}

function makeEl(tag) {
    const el = {
        tagName: (tag || "div").toUpperCase(),
        style: { cssText: "", setProperty() {} },
        attrs: {}, children: [], dataset: {}, parentElement: null, target: "",
        isConnected: true, nodeType: 1,
        setAttribute(k, v) { this.attrs[k] = String(v); },
        getAttribute(k) { return Object.prototype.hasOwnProperty.call(this.attrs, k) ? this.attrs[k] : null; },
        hasAttribute(k) { return Object.prototype.hasOwnProperty.call(this.attrs, k); },
        removeAttribute(k) { delete this.attrs[k]; },
        appendChild(c) { this.children.push(c); return c; },
        insertBefore(c) { this.children.unshift(c); return c; },
        remove() { this.isConnected = false; },
        addEventListener() {}, removeEventListener() {}, getClientRects() { return []; }, click() {},
        textContent: "", title: "", id: "", nonce: "", rel: "", crossOrigin: "", referrerPolicy: ""
    };
    return el;
}
function makeClickable(href) {
    const el = makeEl("a");
    el.attrs["href"] = href;
    Object.defineProperty(el, "href", {
        get() { return this.attrs.href; },
        set(v) { this.attrs.href = String(v); }
    });
    return el;
}

const listeners = [];
global.document = {
    readyState: "complete", cookie: "",
    documentElement: makeEl("html"), head: makeEl("head"), body: makeEl("body"),
    addEventListener(type, fn, opts) { listeners.push({ type, fn, capture: !!opts }); },
    removeEventListener() {}, createElement(t) { return makeEl(t); },
    getElementById() { return null; }, querySelector() { return null; },
    querySelectorAll() { return []; }, dispatchEvent() { return true; }
};
global.location = { hostname: "example.com", host: "example.com", href: "https://example.com/", search: "", pathname: "/", origin: "https://example.com", protocol: "https:", assign() {} };
global.history = { state: null, pushState() {}, replaceState() {} };
const _store = new Map();
global.localStorage = {
    getItem: k => (_store.has(k) ? _store.get(k) : null),
    setItem: (k, v) => { _store.set(k, String(v)); },
    removeItem: k => { _store.delete(k); },
    key: i => Array.from(_store.keys())[i] || null,
    get length() { return _store.size; }
};
function Navigator() {}
Navigator.prototype.sendBeacon = function () { return true; };
global.navigator = Object.create(Navigator.prototype);
global.Navigator = Navigator;
global.Element = function () {};
global.Element.prototype.getAttribute = function () { return null; };
global.Element.prototype.setAttribute = function () {};
global.Element.prototype.removeAttribute = function () {};
global.HTMLAnchorElement = function () {};
Object.setPrototypeOf(global.HTMLAnchorElement.prototype, global.Element.prototype);
Object.defineProperty(global.HTMLAnchorElement.prototype, "href", {
    configurable: true, get() { return this._hrefStore || ""; }, set(v) { this._hrefStore = String(v); }
});
global.HTMLImageElement = function () {};
Object.setPrototypeOf(global.HTMLImageElement.prototype, global.Element.prototype);
global.XMLHttpRequest = function () {};
global.XMLHttpRequest.prototype.open = function () {};
global.XMLHttpRequest.prototype.send = function () {};
global.WebSocket = function () {};
global.EventSource = function () {};
global.CanvasRenderingContext2D = function () {};
global.CanvasRenderingContext2D.prototype.getImageData = function () { return { data: new Uint8ClampedArray(4) }; };
global.MutationObserver = class { constructor(cb) {} observe() {} };
global.CustomEvent = class { constructor(t) { this.type = t; } };
global.Event = class { constructor(t) { this.type = t; } };
global.dispatchEvent = () => true;
global.addEventListener = () => {};
global.window = global;

require("node:module").createRequire(__filename)(require("node:path").resolve(__dirname, "..", "NullTrail.user.js"));

function fire(type, event, capture) {
    const matches = listeners.filter(l => l.type === type && l.capture === capture);
    if (!matches.length) throw new Error("no listener captured for " + type);
    for (const l of matches) l.fn(event);
}
function clickEvent(el) {
    return { button: 0, target: el, eventPhase: 3, preventDefault() {}, stopPropagation() {} };
}

// ---------------------------------------------------------------------------
// Benchmark 1: 3,000 distinct dirty links through the click pipeline (LRU misses)
// ---------------------------------------------------------------------------
const N1 = 3000;
const anchors = [];
for (let i = 0; i < N1; i++) {
    anchors.push(makeClickable("https://track.example.net/p" + i + "?utm_source=n&utm_medium=e&id=" + i + "&fbclid=z" + i));
}
let t0 = process.hrtime.bigint();
for (let i = 0; i < N1; i++) fire("click", clickEvent(anchors[i]), true);
let ms1 = Number(process.hrtime.bigint() - t0) / 1e6;
console.log("  INFO  " + N1 + " cold cleans (LRU miss): " + ms1.toFixed(1) + "ms => " + (ms1 * 1000 / N1).toFixed(1) + "us/clean");
ok(anchors[N1 - 1].href.indexOf("utm_") === -1 && anchors[N1 - 1].href.indexOf("id=") > -1, "bulk clean correctness (trackers stripped, id kept)");
ok(ms1 < 5000, "cold-clean throughput under budget (" + ms1.toFixed(0) + "ms < 5000ms)");

// ---------------------------------------------------------------------------
// Benchmark 2: 30,000 repeat lookups on the same links (LRU hits)
// ---------------------------------------------------------------------------
const N2 = 30000;
t0 = process.hrtime.bigint();
for (let i = 0; i < N2; i++) fire("click", clickEvent(anchors[i % N1]), true);
const ms2 = Number(process.hrtime.bigint() - t0) / 1e6;
console.log("  INFO  " + N2 + " repeat cleans (LRU hit): " + ms2.toFixed(1) + "ms => " + (ms2 * 1000 / N2).toFixed(2) + "us/clean");
ok(ms2 < 5000, "repeat-clean throughput under budget (" + ms2.toFixed(0) + "ms < 5000ms)");

console.log("\n== Summary ==");
if (failures.length) { console.log(failures.length + " failure(s)"); process.exit(1); }
console.log("All performance checks passed");
process.exit(0);
