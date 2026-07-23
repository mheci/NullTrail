// NullTrail engine-context harness — boots the userscript as if running on a
// search engine SERP and asserts tracking params are stripped from the URL bar.
// Usage: NT_CASE=bing node tests/smoke-engines.js   (or: google)
"use strict";

const CASE = process.env.NT_CASE || "bing";
const failures = [];
function ok(cond, name) {
    if (cond) { console.log("  PASS  " + name); }
    else { console.log("  FAIL  " + name); failures.push(name); }
}

const CASES = {
    bing: {
        hostname: "www.bing.com",
        pathname: "/search",
        search: "?q=cats&form=QBLH&cvid=abc123&qft=+filters",
        // form/cvid are tracking params and must go; qft encodes active search
        // FILTERS (functional) and must be preserved for the SERP to stay correct.
        expect: "https://www.bing.com/search?q=cats&qft=+filters"
    },
    google: {
        // bare apex domain: locks in the v2.2.0 ENGINES host-regex fix
        hostname: "google.com",
        pathname: "/search",
        search: "?q=cats&ved=xyz123&sqi=1&sca_esv=999",
        expect: "https://google.com/search?q=cats"
    },
    duckduckgo: {
        hostname: "duckduckgo.com",
        pathname: "/",
        search: "?q=cats&kp=-1&ia=web",
        // ia is a functional routing parameter and must be preserved
        expect: "https://duckduckgo.com/?q=cats&ia=web"
    }
};

function makeEl(tag) {
    return {
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
}

const c = CASES[CASE];
const documentStub = {
    readyState: "complete", cookie: "",
    documentElement: makeEl("html"), head: makeEl("head"), body: makeEl("body"),
    addEventListener() {}, removeEventListener() {},
    createElement(t) { return makeEl(t); },
    getElementById() { return null; }, querySelector() { return null; },
    querySelectorAll() { return []; }, dispatchEvent() { return true; }
};
const origin = "https://" + c.hostname;
const locationStub = {
    hostname: c.hostname, host: c.hostname,
    href: origin + c.pathname + c.search, search: c.search,
    pathname: c.pathname, origin: origin, protocol: "https:", assign() {}
};

const replacedUrls = [];
global.history = {
    state: null,
    pushState() {},
    replaceState(st, ti, url) { replacedUrls.push(url); }
};

const _store = new Map();
// Simulate the site being whitelisted (protection disabled)
if (process.env.NT_WHITELISTED === "1") _store.set("nt_whitelist", CASES[CASE].hostname);
global.localStorage = {
    getItem: k => (_store.has(k) ? _store.get(k) : null),
    setItem: (k, v) => { _store.set(k, String(v)); },
    removeItem: k => { _store.delete(k); },
    key: i => Array.from(_store.keys())[i] || null,
    get length() { return _store.size; }
};
global.document = documentStub;
global.location = locationStub;

function Navigator() {}
Navigator.prototype.sendBeacon = function () { return true; };
global.navigator = Object.create(Navigator.prototype);
global.Navigator = Navigator;
global.Element = function () {};
global.Element.prototype.getAttribute = function () { return null; };
global.Element.prototype.setAttribute = function () {};
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
global.CustomEvent = class { constructor(t, o) { this.type = t; } };
global.Event = class { constructor(t) { this.type = t; } };
global.dispatchEvent = () => true;
global.addEventListener = () => {};
global.window = global;

console.log("== Booting userscript on " + c.hostname + c.pathname + c.search + " ==");
require("node:module").createRequire(__filename)(require("node:path").resolve(__dirname, "..", "NullTrail.user.js"));
console.log("== Boot complete ==");

// stripSERPBar() ran during boot (readyState "complete" branch)
const last = replacedUrls[replacedUrls.length - 1];
if (process.env.NT_WHITELISTED === "1") {
    ok(replacedUrls.length === 0, "whitelisted site: ZERO URL rewrites (got: " + replacedUrls.length + ") [got: " + last + "]");
} else {
    ok(last === c.expect, "SERP bar stripped to " + c.expect + " (got: " + last + ")");
}

console.log("\n== Summary ==");
if (failures.length) { console.log(failures.length + " failure(s)"); process.exit(1); }
console.log("All tests passed");
process.exit(0);
