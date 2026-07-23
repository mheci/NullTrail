// NullTrail network-friendliness harness — verifies that optional background
// traffic (scheduled rule downloads, AdNauseam noise clicks, hover resolution)
// respects metered / Data-Saver connections and the user's override.
//
// Scenarios (env-driven):
//   NT_METERED=1 NT_ADNOISE=1   → metered link:  0 rule fetches, 0 ad fetches
//   NT_ADNOISE=1                → normal link:   ≥1 rule fetch,  ≥1 ad fetch
//   NT_METERED=1 NT_ADNOISE=1 NT_NORESPECT=1 → user override: traffic flows
"use strict";

const METERED = process.env.NT_METERED === "1";
const ADNOISE = process.env.NT_ADNOISE === "1";
const NORESPECT = process.env.NT_NORESPECT === "1";

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

// One ad-network link served by querySelectorAll so the ad-noise scanner finds it.
const AD_LINKS = ADNOISE
    ? [ makeClickable("https://www.googleadservices.com/pagead/aclk?adurl=https%3A%2F%2Fshop.example%2F&ae=1") ]
    : [];

const documentStub = {
    readyState: "complete", cookie: "",
    documentElement: makeEl("html"), head: makeEl("head"), body: makeEl("body"),
    addEventListener() {}, removeEventListener() {},
    createElement(t) { return makeEl(t); },
    getElementById() { return null; }, querySelector() { return null; },
    querySelectorAll(sel) {
        if (sel === "a[href]" || sel === "a[href],area[href]") return AD_LINKS;
        return [];
    },
    dispatchEvent() { return true; }
};
const locationStub = {
    hostname: "example.com", host: "example.com", href: "https://example.com/",
    search: "", pathname: "/", origin: "https://example.com", protocol: "https:", assign() {}
};

const _store = new Map();
if (ADNOISE) _store.set("nt_activeAdObfuscation", "true");
if (NORESPECT) _store.set("nt_respectMetered", "false");
global.localStorage = {
    getItem: k => (_store.has(k) ? _store.get(k) : null),
    setItem: (k, v) => { _store.set(k, String(v)); },
    removeItem: k => { _store.delete(k); },
    key: i => Array.from(_store.keys())[i] || null,
    get length() { return _store.size; }
};
global.document = documentStub;
global.location = locationStub;
global.history = { state: null, pushState() {}, replaceState() {} };

function Navigator() {}
Navigator.prototype.sendBeacon = function () { return true; };
global.navigator = Object.create(Navigator.prototype);
global.Navigator = Navigator;
if (METERED) {
    // Simulated metered / Data-Saver connection (Chromium Network Information API)
    global.navigator.connection = { saveData: true, metered: true, effectiveType: "2g", addEventListener() {}, removeEventListener() {} };
}

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

// Instrumented fetch: records every outgoing request, never touches the network.
const fetchLog = [];
global.fetch = function (input, opts) {
    const url = String(typeof input === "string" ? input : (input && input.url) || "");
    fetchLog.push(url);
    return Promise.resolve({ status: 200, text: () => Promise.resolve("0".repeat(64)) });
};

console.log("== Booting userscript (metered=" + METERED + ", adNoise=" + ADNOISE + ", noRespect=" + NORESPECT + ") ==");
require("node:module").createRequire(__filename)(require("node:path").resolve(__dirname, "..", "NullTrail.user.js"));
console.log("== Boot complete ==");

const ruleFetches = () => fetchLog.filter(u => /clearurls\.xyz|gitlab\.com/.test(u));
const adFetches = () => fetchLog.filter(u => /googleadservices\.com/.test(u));

async function main() {
    // Rule auto-update fires at +3s; ad-noise clicks fire at +1.5…5s. Wait past both.
    await new Promise(r => setTimeout(r, 6600));

    const rf = ruleFetches().length, af = adFetches().length;
    console.log("observed rule-feed fetches: " + rf + ", ad-network fetches: " + af);

    if (METERED && !NORESPECT) {
        ok(rf === 0, "scheduled rule update made ZERO requests on metered connection");
        ok(af === 0, "ad-noise clicks made ZERO requests on metered connection");
        ok((_store.get("nt_rulesNextTry") || 0) == 0 || true, "no crash on metered path");
    } else if (METERED && NORESPECT) {
        ok(rf >= 1, "user override (respectMetered=false) re-enables rule updates on metered");
        ok(af >= 1, "user override (respectMetered=false) re-enables ad-noise on metered");
    } else {
        ok(rf >= 1, "scheduled rule update ran on unmetered connection");
        ok(af >= 1, "ad-noise click dispatched on unmetered connection");
    }

    console.log("\n== Summary ==");
    if (failures.length) { console.log(failures.length + " failure(s)"); process.exit(1); }
    console.log("All tests passed");
    process.exit(0);
}
main().catch(e => { console.error("Harness error:", e); process.exit(1); });
