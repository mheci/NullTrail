// NullTrail PRECISION-BUDGET CI (#26) — the project's prime directive as code:
// "One broken website is worse than ten missed trackers."
// Every URL below is a REAL-WORLD FUNCTIONAL pattern that must pass through the
// sanitizer BYTE-IDENTICAL. Any change = build failure, no exceptions.
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
global.IntersectionObserver = class { constructor(cb) {} observe() {} unobserve() {} };

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
// MUST-NOT-CHANGE corpus: functional URLs that must survive Byte-Identical.
// ---------------------------------------------------------------------------
const MUST_NOT_CHANGE = [
    // OAuth / login flows (mangling = login breakage)
    "https://accounts.google.com/o/oauth2/v2/auth?client_id=abc123.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fapp.example%2Fcallback&response_type=code&scope=openid%20email&state=xyz789&nonce=n-0S6_WzA2Mj",
    "https://github.com/login/oauth/authorize?client_id=deadbeef01&redirect_uri=https%3A%2F%2Fci.example%2Fauth&state=af0ifjsldkj",
    "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=11112222&response_type=code&redirect_uri=https%3A%2F%2Fportal.example%2Fsignin-oidc&scope=User.Read&state=OpenIdConnect",
    // Shared search links (the query IS the content)
    "https://www.google.com/search?q=cats+and+dogs",
    "https://www.bing.com/search?q=age+of+empires&setlang=en",
    "https://duckduckgo.com/?q=privacy+tools&ia=web",
    "https://search.walla.co.il/?q=%D7%97%D7%96%D7%A8%D7%94",
    "https://www.perplexity.ai/search?q=quantum+computing",
    "https://yandex.com/search/?text=privacy",
    "https://www.baidu.com/s?wd=%E9%9A%90%E7%A7%81",
    // Article URLs containing precision-trigger words
    "https://news.example.com/world/mayor-rejects-budget-2026",
    "https://blog.example.org/decline-of-the-roman-empire",
    "https://example.com/docs/refund-policy",
    // Functional anchors & fragments
    "https://docs.example.com/guide#section-2",
    "https://app.example.com/#/settings/profile",
    // E-commerce functional params
    "https://www.amazon.com/dp/B08N5WRWNW?th=1&psc=1",
    "https://example-shop.com/product?id=42&color=blue&size=M",
    // Media timestamps / deep links
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=42s",
    "https://example.com/video?t=120",
    // Email / tel links are not anchors to clean
    "https://webmail.example.com/compose?to=a@b.example&subject=Hello%20there",
    // API calls with tokens (stripping = auth failure)
    "https://api.github.com/user?access_token=gho_example16charsxx",
    "https://graph.example.com/v2/me?fields=id,name&session_id=s3ss10n"
];

let changed = 0;
MUST_NOT_CHANGE.forEach((u, i) => {
    const a = makeClickable(u);
    fire("click", clickEvent(a), true);
    if (a.href !== u) {
        changed++;
        console.log("   ... altered #" + i + ":\n       in : " + u + "\n       out: " + a.href);
    }
});
ok(changed === 0, "precision budget: " + MUST_NOT_CHANGE.length + " functional URLs — " + changed + " altered (must be 0)");

// ---------------------------------------------------------------------------
// MUST-CLEAN corpus: sanity that the engine still strips real trackers (the
// budget must not become an excuse to stop cleaning).
// ---------------------------------------------------------------------------
const MUST_CLEAN = [
    [ "https://example.com/article?utm_source=newsletter&id=7", "https://example.com/article?id=7" ],
    [ "https://example.com/x?fbclid=IwAR0abc&page=2", "https://example.com/x?page=2" ],
    [ "https://example.com/y?gclid=EAIaIQob&utm_medium=cpc", "https://example.com/y" ],
    [ "https://example.com/app#section=2&utm_source=social", "https://example.com/app#section=2" ]
];
let cleanFails = 0;
MUST_CLEAN.forEach(pair => {
    const a = makeClickable(pair[0]);
    fire("click", clickEvent(a), true);
    if (a.href !== pair[1]) {
        cleanFails++;
        console.log("   ... clean fail:\n       in : " + pair[0] + "\n       got: " + a.href + "\n       want: " + pair[1]);
    }
});
ok(cleanFails === 0, "must-clean: " + MUST_CLEAN.length + " tracker URLs cleaned (incl. SPA hash params)");

console.log("\n== Summary ==");
if (failures.length) { console.log(failures.length + " failure(s)"); process.exit(1); }
console.log("Precision budget passed");
process.exit(0);
