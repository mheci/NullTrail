// NullTrail regression harness — boots the real userscript in Node with stubbed
// browser globals and drives realistic interactions through the captured listeners.
// Context: generic site (example.com).
"use strict";

const failures = [];
function ok(cond, name) {
    if (cond) { console.log("  PASS  " + name); }
    else { console.log("  FAIL  " + name); failures.push(name); }
}

// ---------------------------------------------------------------------------
// Browser global stubs
// ---------------------------------------------------------------------------
function makeEl(tag) {
    const el = {
        tagName: (tag || "div").toUpperCase(),
        style: { cssText: "", setProperty() {}, },
        attrs: {},
        children: [],
        dataset: {},
        parentElement: null,
        target: "",
        isConnected: true,
        nodeType: 1,
        setAttribute(k, v) { this.attrs[k] = String(v); },
        getAttribute(k) { return Object.prototype.hasOwnProperty.call(this.attrs, k) ? this.attrs[k] : null; },
        hasAttribute(k) { return Object.prototype.hasOwnProperty.call(this.attrs, k); },
        removeAttribute(k) { delete this.attrs[k]; },
        appendChild(c) { this.children.push(c); return c; },
        insertBefore(c) { this.children.unshift(c); return c; },
        remove() { this.isConnected = false; },
        addEventListener() {},
        removeEventListener() {},
        getClientRects() { return []; },
        click() {},
        textContent: "",
        title: "",
        id: "",
        nonce: "",
        rel: "",
        crossOrigin: "",
        referrerPolicy: ""
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
// Consent auto-reject fixtures (Test 8): a dangerous generic match (article link
// whose href contains "reject") vs. a genuine cookie-decline button.
const _consentFixture = { malEl: null, goodEl: null };
function buildConsentFixtures() {
    const articleSection = makeEl("section");
    articleSection.attrs["class"] = "article-body";
    const mal = makeClickable("https://example.com/news/mayor-rejects-budget");
    mal.textContent = "Mayor rejects budget";
    mal.parentElement = articleSection;
    mal.offsetParent = articleSection;
    mal.click = function () { this.clicked = (this.clicked || 0) + 1; };

    const banner = makeEl("div");
    banner.id = "cookie-consent";
    const good = makeEl("button");
    good.attrs["class"] = "opt-out";
    good.textContent = "Reject all cookies";
    good.parentElement = banner;
    good.offsetParent = banner;
    good.click = function () { this.clicked = (this.clicked || 0) + 1; };

    _consentFixture.malEl = mal;
    _consentFixture.goodEl = good;
}

const documentStub = {
    readyState: "complete",
    cookie: "",
    documentElement: makeEl("html"),
    head: makeEl("head"),
    body: makeEl("body"),
    addEventListener(type, fn, opts) { listeners.push({ target: "document", type, fn, capture: !!opts }); },
    removeEventListener() {},
    createElement(tag) { return makeEl(tag); },
    getElementById() { return null; },
    querySelector() { return null; },
    querySelectorAll(sel) {
        if (sel === "a[href*=reject i], button[class*=opt-out i]") return [ _consentFixture.malEl, _consentFixture.goodEl ];
        return [];
    },
    dispatchEvent() { return true; }
};
buildConsentFixtures();

const locationStub = {
    hostname: "example.com",
    host: "example.com",
    href: "https://example.com/",
    search: "",
    pathname: "/",
    origin: "https://example.com",
    protocol: "https:",
    assign() {}
};

// localStorage fallback path (no GM_* present on purpose)
const _store = new Map();
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

// Constructors needed by the main-world bootstrapper
function Navigator() {}
Navigator.prototype.sendBeacon = function () { return true; };
global.navigator = Object.create(Navigator.prototype);
global.Navigator = Navigator;

global.Element = function () {};
global.Element.prototype.getAttribute = function (k) { return this._attrs && this._attrs[k] != null ? this._attrs[k] : null; };
global.Element.prototype.setAttribute = function (k, v) { (this._attrs = this._attrs || {})[k] = String(v); };
global.Element.prototype.removeAttribute = function (k) { if (this._attrs) delete this._attrs[k]; };
global.HTMLAnchorElement = function () {};
Object.setPrototypeOf(global.HTMLAnchorElement.prototype, global.Element.prototype);
Object.defineProperty(global.HTMLAnchorElement.prototype, "href", {
    configurable: true,
    get() { return this._hrefStore || ""; },
    set(v) { this._hrefStore = String(v); }
});
global.HTMLImageElement = function () {};
Object.setPrototypeOf(global.HTMLImageElement.prototype, global.Element.prototype);

global.XMLHttpRequest = function () {};
global.XMLHttpRequest.prototype.open = function () {};
global.XMLHttpRequest.prototype.send = function () {};
global.WebSocket = function () {};
global.EventSource = function () {};
global.CanvasRenderingContext2D = function () {};
global.CanvasRenderingContext2D.prototype.getImageData = function () {
    return { data: new Uint8ClampedArray(4 * 20 * 20) };
};
global.MutationObserver = class {
    constructor(cb) { this.cb = cb; global.MutationObserver.instances.push(this); }
    observe() {}
};
global.MutationObserver.instances = [];
global.CustomEvent = class { constructor(type, opts) { this.type = type; this.detail = opts && opts.detail; } };
global.Event = class { constructor(type) { this.type = type; } };
global.dispatchEvent = () => true;
global.addEventListener = () => {};
global.window = global; // window === globalThis, like a browser

// Capture pre-boot originals so the camouflage assertions can compare exactly.
const PRE_BOOT = {
    hrefGetter: Object.getOwnPropertyDescriptor(global.HTMLAnchorElement.prototype, "href").get,
    hrefSetter: Object.getOwnPropertyDescriptor(global.HTMLAnchorElement.prototype, "href").set,
    hrefGetterSrc: Object.getOwnPropertyDescriptor(global.HTMLAnchorElement.prototype, "href").get.toString(),
    hrefSetterSrc: Object.getOwnPropertyDescriptor(global.HTMLAnchorElement.prototype, "href").set.toString(),
    EventSource: global.EventSource,
    EventSourceSrc: global.EventSource.toString(),
    WebSocketSrc: global.WebSocket.toString()
};

console.log("== Booting userscript ==");
require("node:module").createRequire(__filename)(require("node:path").resolve(__dirname, "..", "NullTrail.user.js"));
console.log("== Boot complete ==");

function fire(type, event, capture) {
    const matches = listeners.filter(l => l.type === type && l.capture === capture);
    if (!matches.length) throw new Error("no listener captured for " + type + " capture=" + capture);
    for (const l of matches) l.fn(event);
}

function clickEvent(el) {
    return {
        button: 0,
        target: el,
        eventPhase: 3,
        prevented: false,
        preventDefault() { this.prevented = true; },
        stopPropagation() {}
    };
}

async function main() {
    // -----------------------------------------------------------------------
    // Test 1: Bing /ck/a redirect unwrap (content world) via click listener
    // -----------------------------------------------------------------------
    console.log("\n== Test 1: Bing click-through unwrap ==");
    const dest = "https://example.com/article?x=1";
    const b64url = Buffer.from(dest, "utf8").toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    const wrappedBing = "https://www.bing.com/ck/a?u=" + encodeURIComponent("a1" + b64url);
    // ensure the padding path (core.length % 4 !== 0) is exercised
    ok((b64url.length % 4) !== 0, "fixture exercises base64 padding path (len%4=" + (b64url.length % 4) + ")");

    const a1 = makeClickable(wrappedBing);
    try {
        fire("click", clickEvent(a1), true);
        ok(a1.href === dest, "bing link unwrapped to destination (got: " + a1.href + ")");
        ok(a1.getAttribute("data-nt-orig-href") === wrappedBing, "original href preserved in data-nt-orig-href");
    } catch (e) {
        ok(false, "bing link unwrapped to destination (threw: " + e.message + ")");
    }

    // -----------------------------------------------------------------------
    // Test 2: Tracking parameter stripping on a plain link
    // -----------------------------------------------------------------------
    console.log("\n== Test 2: tracking param strip ==");
    const a2 = makeClickable("https://example.com/page?utm_source=news&id=5&fbclid=zzz");
    try {
        fire("click", clickEvent(a2), true);
        ok(a2.href === "https://example.com/page?id=5", "utm/fbclid stripped, id kept (got: " + a2.href + ")");
    } catch (e) {
        ok(false, "utm/fbclid stripped, id kept (threw: " + e.message + ")");
    }
    // Regression (v2.4.0): userinfo must survive param cleaning
    const a2b = makeClickable("https://user:s3cret@example.com/private?utm_campaign=x&view=grid");
    fire("click", clickEvent(a2b), true);
    ok(a2b.href === "https://user:s3cret@example.com/private?view=grid",
        "URL userinfo preserved during cleaning (got: " + a2b.href + ")");
    // Regression: non-anchor / unchanged links are left fully intact
    const a2c = makeClickable("https://example.com/noop?id=1");
    fire("click", clickEvent(a2c), true);
    ok(a2c.href === "https://example.com/noop?id=1" && a2c.getAttribute("data-nt-orig-href") === null,
        "already-clean link untouched, no marker written");

    // -----------------------------------------------------------------------
    // Test 3: Main-world href setter unwraps the value being assigned
    // -----------------------------------------------------------------------
    console.log("\n== Test 3: main-world href assignment unwrap ==");
    ok(global.__ntMWBooted === true, "main-world boot marker set (idempotency guard)");
    const a3 = Object.create(global.HTMLAnchorElement.prototype);
    a3.tagName = "A";
    try {
        a3.href = wrappedBing;
        ok(a3._hrefStore === dest, "main-world href setter stores unwrapped destination (got: " + a3._hrefStore + ")");
    } catch (e) {
        ok(false, "main-world href setter stores unwrapped destination (threw: " + e.message + ")");
    }
    // Stale-marker invalidation: simulate a NullTrail clean (marker set), then a
    // page-side re-assignment — the stale original must be discarded.
    const a3b = Object.create(global.HTMLAnchorElement.prototype);
    a3b.tagName = "A";
    a3b.href = "https://cleaned.example/";
    a3b.setAttribute("data-nt-orig-href", "https://stale-original.example/");
    a3b.href = "https://fresh.example/page";
    ok(a3b._attrs["data-nt-orig-href"] === undefined || a3b._attrs["data-nt-orig-href"] === null,
        "fresh assignment clears stale data-nt-orig-href marker");

    // -----------------------------------------------------------------------
    // Test 4: toString camouflage on patched APIs. In a real browser the stored
    // camouflage string is the *native* source; here it equals our stub source.
    // Either way, the patched function must report the ORIGINAL's string.
    // -----------------------------------------------------------------------
    console.log("\n== Test 4: prototype camouflage ==");
    const hrefDesc = Object.getOwnPropertyDescriptor(global.HTMLAnchorElement.prototype, "href");
    const preGetSrc = PRE_BOOT.hrefGetterSrc, preSetSrc = PRE_BOOT.hrefSetterSrc;
    ok(hrefDesc.get !== PRE_BOOT.hrefGetter, "href getter was replaced");
    ok(hrefDesc.get.toString() === preGetSrc, "href getter toString returns original source");
    ok(hrefDesc.set.toString() === preSetSrc, "href setter toString returns original source");
    ok(global.EventSource !== PRE_BOOT.EventSource, "EventSource was replaced with proxy");
    ok(global.EventSource.toString() === PRE_BOOT.EventSourceSrc, "EventSource toString returns original source");
    ok(global.WebSocket.toString() === PRE_BOOT.WebSocketSrc, "WebSocket toString returns original source");

    // -----------------------------------------------------------------------
    // Test 5: DDG + Yahoo unwrappers, end-to-end via click listener
    // -----------------------------------------------------------------------
    console.log("\n== Test 5: DDG / Yahoo unwrap ==");
    const ddgDest = "https://blog.example.org/post?utm_medium=social";
    const a5 = makeClickable("https://duckduckgo.com/l/?uddg=" + encodeURIComponent(ddgDest));
    fire("click", clickEvent(a5), true);
    ok(a5.href === "https://blog.example.org/post", "DDG uddg unwrapped + utm stripped (got: " + a5.href + ")");

    const a6 = makeClickable("https://search.yahoo.com/RU=" + encodeURIComponent("https://example.net/page?a=1") + "/RK=2/RS=xyz");
    fire("click", clickEvent(a6), true);
    ok(a6.href === "https://example.net/page?a=1", "Yahoo RU= unwrapped (got: " + a6.href + ")");

    // -----------------------------------------------------------------------
    // Test 6: IP-logger click is neutralized (both listeners)
    // -----------------------------------------------------------------------
    console.log("\n== Test 6: IP-logger protection ==");
    const a7 = makeClickable("https://grabify.link/ABC123");
    const ev7 = clickEvent(a7);
    fire("click", ev7, true);
    ok(a7.getAttribute("data-nt-iplogger") === "true" || a7.getAttribute("data-nt-blocked-iplogger") === "true",
        "IP-logger anchor marked");
    ok(ev7.prevented, "IP-logger navigation preventDefault()ed");

    // -----------------------------------------------------------------------
    // Test 7: MutationObserver → idle queue → cleaned (async setTimeout path)
    // -----------------------------------------------------------------------
    console.log("\n== Test 7: observer queue pipeline ==");
    ok(global.MutationObserver.instances.length >= 1, "MutationObserver instantiated");
    const a8 = makeClickable("https://example.org/landing?utm_campaign=big&id=9");
    const obs = global.MutationObserver.instances[0];
    obs.cb([ { type: "childList", addedNodes: [ a8 ] } ]);
    // duplicate re-queue must be deduped (QUEUED)
    obs.cb([ { type: "childList", addedNodes: [ a8 ] } ]);
    await new Promise(r => setTimeout(r, 150)); // fallback scheduler runs at ~40ms
    ok(a8.href === "https://example.org/landing?id=9", "queued anchor cleaned via fallback budget (got: " + a8.href + ")");

    // -----------------------------------------------------------------------
    // Test 8: consent auto-reject precision gate (boot runs it synchronously;
    // also fires at +1s — verify no double-click and zero false positives)
    // -----------------------------------------------------------------------
    console.log("\n== Test 8: consent precision ==");
    await new Promise(r => setTimeout(r, 1300));
    ok((_consentFixture.goodEl.clicked || 0) === 1, "genuine decline button clicked once (got: " + (_consentFixture.goodEl.clicked || 0) + ")");
    ok((_consentFixture.malEl.clicked || 0) === 0, "article link containing 'reject' NEVER auto-clicked (got: " + (_consentFixture.malEl.clicked || 0) + ")");

    console.log("\n== Summary ==");
    if (failures.length) {
        console.log(failures.length + " failure(s)");
        process.exit(1);
    }
    console.log("All tests passed");
    process.exit(0);
}

main().catch(e => { console.error("Harness error:", e); process.exit(1); });
