# Changelog

All notable changes to NullTrail are documented in this file.

## [2.6.0] — 2026-07-23

**Theme: third 10-pass audit round** — fresh themes per pass (update-checker
truthfulness, unwrapper precision, engine strip-list query-param collisions,
exception safety, lifecycle, accessibility, `@match` coverage, API mock
completeness, async hardening, full re-review). Full ledger in
[AUDIT.md](AUDIT.md) (Round 3).

### Fixed
- **The update checker now tells the truth.** `updateRules()` previously
  swallowed every failure path and resolved vacuously, so the dashboard's
  "Check for updates now" button always reported *"Updated successfully"* —
  even when all three rule feeds were unreachable, the SHA-256 verification
  failed, or the payload was rejected. It now resolves with an explicit result
  (`updated` / `current` / `failed` / `busy` / `skipped`), the button renders
  the real outcome, and the Rules tab shows *Last Update Check* and *Last
  Update Result* rows so you can verify the updater's health at a glance.
- **Engine strip-lists were deleting the search query itself.** Walla
  (`search.walla.co.il`) and Perplexity both listed `q` — the engine's query
  parameter — in their strip lists, emptying the search on reload and
  destroying shared result links. `q` is now preserved on both engines;
  regression tests lock it in.
- **Lookalike-host unwrapping precision**: the DuckDuckGo, Yahoo, and Yandex
  unwrapper regexes lacked proper domain boundaries (`/duckduckgo\.com$/`
  matched `notduckduckgo.com`). All now require a start/dot boundary, in both
  the content world and the main-world copies.
- **Malformed percent-encoding could crash cleaning**: `extractGoogleRedirect`
  ran raw `decodeURIComponent` on attacker-controlled captures — a truncated
  escape (`%E0%A4`) throws `URIError`, killing the sanitize pass. All decodes
  on the hot path now go through `safeDecode`, and the idle-queue loop plus
  per-anchor sanitize are individually exception-isolated so one bad link can
  never stop cleaning for the rest of the page.
- **Hover redirect-resolver leak**: the GM HEAD request had no timeout — a hung
  request permanently consumed one of the 25-per-page budget slots.
- **Statistics lost on tab close**: pending counter deltas (1.5 s debounce
  window) are now flushed on `pagehide` and on backgrounding
  (`visibilitychange`), and the Stats tab reads fresh cross-tab storage merged
  with pending deltas instead of page-load-time counters.

### Improved / hardened
- **AMP cache coverage**: added `@match` for `cdn.ampproject.org` — the AMP
  viewer unwrapper existed but never ran when landing on an AMP URL directly.
- **Dashboard accessibility**: real dialog semantics (`role=dialog`,
  `aria-modal`, labelled tabs with `aria-selected`), focus moves into the
  dialog on open and returns to your place on close, and the close button is a
  proper `×` with an accessible name. Esc/backdrop close still work.
- **Blocked-request mocks are crash-proof**: the fake `EventSource` and
  `WebSocket` objects returned for blocked endpoints now expose no-op
  `addEventListener`/`send`/`close` surfaces — sites attaching handlers to a
  blocked stream no longer hit "Illegal invocation".
- **Testing**: new cases for malformed-encoding robustness, lookalike-host
  precision, Perplexity/Walla query preservation, a perf guard benchmark
  (~90µs/cold clean, ~5µs/repeat), and stricter release metadata checks
  (update-checker contract, AMP match, decode safety, regex boundaries) — all
  wired into CI.

## [2.5.0] — 2026-07-23

**Theme: second 10-pass hardening round** — fresh themes per pass (regex safety,
leak audit, consent precision, persistence, cookie ops, UX safety). Full ledger
in [AUDIT.md](AUDIT.md) (Round 2).

### Fixed
- **Consent auto-reject could navigate you away**: the generic
  `a[href*=reject]` selector matched ordinary article URLs containing "reject"
  (e.g. `/news/governor-rejects-budget`) and auto-clicked them. Consent
  selectors are now split trusted/generic — generic matches require BOTH a
  consent-scoped ancestor AND reject-style wording in the element itself.
  Regression-tested against the malicious fixture.
- **Cross-tab statistics clobbering**: flushes now delta-merge into storage
  instead of writing absolute counters; flush window shortened 4s → 1.5s (less
  loss on tab close); pending deltas cleared on manual reset.
- **`ysmm` shim detectability**: getter returned the string `"undefined"`;
  adfly-style `typeof` checks could detect it. Now returns real `undefined`.
- **GA cookie purge missed parent-domain cookies**: hostname is walked upward;
  browsers reject public suffixes safely, so no suffix list is required.
- **Keyboard shortcuts hijacked typing**: Alt+Shift+D/N are ignored inside
  inputs, textareas, selects, and contenteditable regions.

### Improved / hardened
- Consent clicks now skip disabled and invisible elements.
- Blocked-XHR mock responses complete (`statusText`, `responseURL`).
- Rule-regex concatenation memoized (no per-URL array allocation when referral
  stripping is enabled).
- Preset cookies carry `;Secure` on HTTPS origins.
- Verified, no change needed: all heavy regexes ReDoS-free (worst 50-batch
  0.37ms), every listener/timer/weak-collection bounded, dashboard state sync.

### Update checker status
Re-verified end to end: `@updateURL`/`@downloadURL` canonical and CI-enforced;
rule updater metered-gated, hash-gated, payload-validated, 20s-timed-out, with
persisted 6h–24h failure backoff.

## [2.4.0] — 2026-07-23

**Theme: 10-pass production-hardening audit.** A structured hunt across every
subsystem (full per-pass findings ledger: [AUDIT.md](AUDIT.md)). 9 real bugs
fixed, 5 hardenings, and a CI-enforced release-consistency guard. Suite count:
23 core + 4 engine + 3 network + metadata assertions — all green.

### Fixed
- **fetch keepalive actually stripped now** — `Request.keepalive` is read-only;
  the old silent no-op is replaced by rebuilding the Request (`keepalive:false`).
- **Blocked XHRs fire `loadend`** — libraries awaiting loadend no longer hang.
- **Main-world config re-read per intercepted call eliminated** — dirty-flag
  memoization driven by the `nt:cfg` event (was a `getElementById` + attribute
  read on every fetch/beacon/XHR/href-set on busy pages).
- **URL userinfo preserved** — `removeFields` no longer drops `user:pass@`
  credentials from cleaned URLs (was rebuilding from `URL.origin`).
- **Whitelisting now truly disables main-world protections** — the config
  payload carries `active`; blocking, unwrapping, and referrer overrides all
  no-op on disabled sites; `Alt+Shift+N` propagates immediately.
- **Empty remote ruleset can no longer nuke protection** — a ruleset that
  compiles to zero providers is rejected, keeping the previous working one.
- **`gmFetch` fallback timeout** — hung fetch no longer pins the update
  in-flight flag forever (AbortController, 20s).
- **Dashboard opens on legacy engines** (`attachShadow` fallback), closes on
  **Escape**, and reset survives sandboxed frames (`confirm`/`alert` guarded).
- **Prototype-pollution-adjacent engine cache** — `Object.create(null)`.

### Changed / hardened
- **`@noframes`** — the engine no longer boots inside every matching ad iframe
  (googlesyndication/doubleclick): removes the biggest remaining observer
  overhead on ad-heavy pages. Top-frame protections are unchanged.
- Unified duplicated IP-logger click/auxclick handlers.
- Removed dead `decodeURIEncodedMod()`.
- Added `@supportURL` metadata.
- `tests/meta-check.js` + CI: version, update URLs, and removed-feature guards.
- Whitelisted-site engine test: asserts **zero** rewrites when disabled.

## [2.3.0] — 2026-07-23

**Theme: zero speculative traffic and metered-network friendliness, plus a UX
pass on the dashboard.** Every byte of optional background traffic is now
deliberate, capped, and automatically paused on metered / Data-Saver
connections. No breaking changes.

Verification: the regression suite grew a network-friendliness harness
(`tests/smoke-network.js`) with an instrumented `fetch` — it proves **zero
requests** are made on a simulated metered connection, that normal connections
behave as before, and that the user override works. All suites green in CI.

### 🔴 Removed

1. **Speculative hover warmup deleted entirely** (`warmupTargetServer`).
   - *Problem:* On every anchor hover, NullTrail injected `dns-prefetch` and
     `preconnect` hints — opening speculative connections to servers the user
     might never visit. Wasted bandwidth and a hover-intent leak, worst
     precisely on the metered/limited networks that can least afford it.
     (v2.2.0 had only capped the DOM leak; the traffic itself remained.)
   - *Fix:* Feature removed. **Guarantee: hovering a link costs zero bytes.**
     Bytes only flow after deliberate user actions (a click, or an explicitly
     enabled opt-in feature).
   - *Side effects:* Clicking a link may cost up to ~100–300ms of connection
     setup on cold origins — the correct trade for bandwidth and privacy.
   - *Risk:* None (removal). Verified no dangling references.

### 🟢 Metered-network gating (new policy checkpoint)

2. **`respectMetered` setting (default ON)** + `isMeteredConnection()` /
   `backgroundDataAllowed()` helpers reading the Network Information API
   (`navigator.connection.saveData` / `.metered`). All optional background
   traffic now flows through this single checkpoint:
   - **Scheduled rule updates** — skipped entirely on metered links (a manual
     "Check for updates now" is user intent and always runs).
   - **Hover server-redirect resolution** — paused on metered links even when
     opted in, and now also capped at **25 resolutions per page** so infinite
     SERPs can't generate unbounded traffic.
   - **AdNauseam-style ad-noise clicks** — paused on metered links even when
     opted in (this feature *deliberately* generates traffic, so it yields
     first).
   - *Firefox note:* the Network Information API is Chromium-only; where it is
     absent, detection reports "unknown" and behavior stays conservative by
     default (everything heavy is opt-in anyway). The toggle remains available
     for explicit control.

3. **Failed rule updates now back off gently** (`rulesNextTry`).
   - *Problem:* Any outage/offline period caused a fresh retry on every matched
     page load (plus the 6-hour interval).
   - *Fix:* Capped exponential backoff for *scheduled* updates (6h → 12h → 24h),
     persisted across page loads, reset on the first reachable response or
     manual update.

### 🔵 UX / usability pass (friendlier by design)

4. **Plain-language tooltips on every dashboard toggle** (`TOGGLE_HINTS`) —
   hovering any option explains in one sentence what it does, and options that
   consume data say so in their label ("uses extra data", "uses a little data").
5. **Up-front reassurance** in the Settings tab: "All processing happens
   locally on your device — nothing is ever uploaded."
6. **Network transparency in the Stats tab**: live rows showing whether a
   metered/Data-Saver connection is detected and whether optional background
   downloads are currently allowed or paused.
7. Clearer labels: "Auto-update cleaning rules (paused on metered)",
   "Save Mobile Data (metered-network friendly)".
8. "Reset all settings" now also clears `respectMetered` and the
   `rulesNextTry` backoff marker.

### ⚪ Tests & docs

9. `tests/smoke-network.js` — 3 scenarios (metered / unmetered / override)
   wired into CI. README documents the zero-speculative-traffic guarantee and
   the new metered behavior.

[2.2.0]: full-repo audit release below.

## [2.2.0] — 2026-07-23

This release is the result of a full repository-wide audit (every execution path,
hook, observer, and network interception). The theme: **fix broken protections,
remove hidden overhead, and keep privacy-preserving defaults**. No public APIs or
user workflows were changed; all fixes preserve the project's
"least intrusive possible" philosophy.

Verification: a new Node-based regression harness (`tests/`) boots the real
userscript with stubbed browser globals and drives realistic interactions
(clicks, mutations, SERP visits, main-world assignments). 19 assertions + 3
search-engine contexts; all pass. The harness runs in CI on every push.

---

### 🔴 Critical bug fixes (broken features restored)

1. **Bing / Ecosia redirect unwrapping was 100% broken** (`unwrapBing`,
   `realBing`).
   - *Problem:* The base64 buffer was declared `const` and then padded in-place
     (`while (core.length % 4) core += "="`). In strict mode this throws
     `TypeError: Assignment to constant variable`, which was swallowed upstream —
     so every Bing `/ck/a` click-through (i.e. every Bing search result link)
     silently failed to unwrap whenever padding was needed (the common case).
     The Ecosia engine entry additionally referenced `unwrapBing` whose host gate
     only allowed `bing.com`, making it dead config.
   - *Fix:* Mutable `let` + host gate extended to `ecosia.org` (both worlds).
   - *Impact:* Bing/Ecosia result links now unwrap as designed. No side effects;
     lower risk than before (no exception thrown per link).
   - *Risk:* None — restores intended behavior. Covered by regression tests 1 & 3.

2. **"Text selection unblock" dashboard toggle could never work**
   (`unblockTextSelectionSites`).
   - *Problem:* Copy-paste error left the string `"activeAdObfuscation"` as both
     the `GV()` default and the `SV()` value. Under `"use strict"`, assigning a
     site key onto the string primitive threw, and persistence saved the wrong
     value anyway.
   - *Fix:* Default is now `{}`; persistence saves the actual site map.
   - *Impact:* The site-specific "Enable Text Copying" feature works as
     documented. No privacy/compatibility impact.
   - *Risk:* None.

3. **Four cookie-preset rules were dead code** (`applyPrivacyPresets`).
   - *Problem:* Double-escaped dots (`\\.`) in regex literals match a literal
     backslash + any character, never a hostname dot. The Twitter/X, TikTok,
     Spotify, and LinkedIn privacy presets could **never** fire.
   - *Fix:* Single-escaped dots; verified with positive/negative matching tests.
   - *Impact:* Those presets now apply. Slight privacy gain on those sites.
   - *Risk:* Low — presets only set/clear documented cookies, consistent with
     the already-working presets for other sites.

4. **Meta-refresh rewriting corrupted refresh tags** (`scanSpecial`).
   - *Problem:* The rewrite assigned `parts[1].replace(/url\s*=\s*.+/i, …)` —
     searching for `url=` *inside the URL itself*, which (a) never matched valid
     content and (b) dropped the `delay;url=` prefix when it did, mangling the
     tag.
   - *Fix:* Capture the prefix group and rebuild `content = prefix + resolved`.
   - *Impact:* Meta refresh redirect unwrapping works without corrupting pages.
   - *Risk:* None — strict improvement.

5. **Main-world `href` setter resolved the wrong URL** (page-context hook).
   - *Problem:* On every assignment, the hook unwrapped the element's *current*
     href (stale) instead of the value *being assigned*, which could overwrite a
     newly assigned URL with a redirect extracted from the old one.
   - *Fix:* Parse the assigned value with `new URL(v, location.href)` and
     resolve that.
   - *Impact:* Correct unwrapping for page-assigned hrefs; removes a class of
     wrong-destination bugs on SPAs.
   - *Risk:* Low — the failure mode only triggered on wrapped assignments.

6. **Stale `data-nt-orig-href` marker after page-side re-assignment.**
   - *Problem:* When a SPA re-assigned `href`/`setAttribute("href", …)` on an
     anchor NullTrail had already cleaned, the getter kept returning the *old*
     stored original URL — page JS would read a destination that no longer
     existed.
   - *Fix:* The main-world setter now clears the marker on every assignment;
     the content world re-applies the (fresh) marker *after* its own assigns.
   - *Impact:* Eliminates stale-URL reads on long-lived SPA links.
   - *Risk:* Low — ordering verified by regression test 3b.

7. **Dashboard Stats/Rules tabs duplicated rows on re-render.**
   - *Problem:* `renderStats()` (after Reset) and `renderRules()` (after Update)
     appended fresh content below the stale content.
   - *Fix:* Both renderers clear the container first.
   - *Risk:* None (UI only).

8. **Bare `google.com` never recognized as a Google SERP** (`ENGINES`).
   - *Problem:* The engine host regex required a subdomain prefix, so
     `https://google.com/search?...` got no SERP parameter stripping.
   - *Fix:* `(?:^|\.)` prefix gate. Verified by the `google` harness case.

9. **Provider sort used an inconsistent comparator** (`setRules`).
   - *Problem:* Returned `-1` for nearly every pair — order was engine-dependent
     (V8 sort with an inconsistent comparator is implementation-defined).
   - *Fix:* Weight-based comparator (global `.*` provider deterministically last).

### 🟠 Performance & memory

10. **Main-world bootstrapper was not idempotent.**
    - *Problem:* It ran 2–3 times per page (script injection + unsafeWindow
      direct call + nonce retry), stacking duplicate wrappers on `fetch`, `XHR`,
      `sendBeacon`, and every anchor `href` access — real per-call overhead on
      the hottest APIs of every page.
    - *Fix:* Non-enumerable `__ntMWBooted` realm marker; second entry returns
      immediately. The CSP fallback path still boots when injection failed.

11. **Observer queue: dead memo + duplicate entries.**
    - `PROCESSED` was written but never read; `QUEUED` never used. Every
      re-queued anchor re-ran the full sanitize + attribute sweep, and the same
      anchor could stack dozens of queue copies during mutation bursts.
    - *Fix:* `PROCESSED` is now an href memo (skip if unchanged since last pass);
      `QUEUED` dedupes queue entries. Largest win on infinite-scroll sites.

12. **Idle-queue fallback had no time budget.**
    - The `setTimeout` fallback returned a constant `8ms` forever, draining the
      whole queue in one tick (jank on Safari which lacks `requestIdleCallback`).
    - *Fix:* Measure real elapsed time against the 8ms budget.

13. **Hover warmup leaked DOM nodes.**
    - Two `<link>` nodes were appended to `<head>` on *every* hover of *any*
      anchor, forever. Preconnects also used `crossOrigin="anonymous"`, which
      navigations (credentialed socket pool) never reuse — pure waste.
    - *Fix:* Warm each origin at most once (cap 64), skip same-origin, drop the
      `crossOrigin` attribute.

14. **Sanitize LRU was O(n) per operation.**
    - Array `indexOf`/`splice`/`shift` on every cache hit.
    - *Fix:* `Map`-backed LRU — O(1) get/set/evict; also immune to `__proto__`-key
      oddities of plain objects.

15. **Rule updates always downloaded the ~200 KB payload; could run twice.**
    - *Fix:* Skip the download entirely when the remote hash matches the cached
      one; added an in-flight guard so boot + interval + manual updates can't
      duplicate downloads; structurally validate the payload (`providers`
      non-empty) before replacing a working ruleset; tolerate missing
      `crypto.subtle` on insecure origins (the hash file ships from the same
      trusted origin as the data — verification is transport-equivalent there).

16. **Deduplicated SERP parameter stripping.**
    - The exact strip loop existed twice (`stripSERPBar` and the history
      wrapper). Now a single `stripEngineSearchParams()` helper.

### 🟢 Privacy

17. **Referrer meta now enforced at `document-start`.**
    - Previously first enforced at `DOMContentLoaded`, after early subresource
      requests (stylesheets, preloads) had already left with the site's default
      referrer. The `DOMContentLoaded` call remains as an idempotent catch-up.

18. **Server-side redirect resolution is now opt-in and actually works.**
    - *Problem:* `preResolveServerRedirect` was triple-broken:
      `maxRedirects: 0` is not a supported `GM_xmlhttpRequest` option (silently
      ignored → chains followed), `response.headers` doesn't exist (GM exposes
      `responseHeaders` as a raw string), and there was no guard for missing
      `GM_xmlhttpRequest`. Worse, it fired hover-triggered requests at arbitrary
      third-party servers by default — leaking hover intent.
    - *Fix:* New `serverRedirectResolution` setting (**default off**), a
      dashboard toggle, redirect detection via `response.finalUrl` with a
      correct `responseHeaders` fallback, transport guard, and a precision gate
      (`REDIRECT_HINT_RE`) so only links that still look like redirect wrappers
      are ever probed.

19. **Anti-fingerprint camouflage completed.**
    - The `toString` camouflage map now also covers the patched `href`/`src`
      descriptor accessors and the `EventSource`/`WebSocket` proxies, matching
      the design in `EXPANSIONS.md` (prototype tamper detection).

### ⚪ Compatibility / maintenance

20. **Tests + CI.** Added `tests/smoke.js` (19 assertions: boot, unwrap chains,
    param stripping, main-world hooks, camouflage, IP-logger neutralization,
    observer pipeline, stale-marker invalidation) and `tests/smoke-engines.js`
    (Bing / Google apex / DuckDuckGo SERP contexts, incl. the DDG `ia`
    functional-param regression guard). The GitHub workflow now runs both.

### Deliberately NOT changed (and why)

- **History double-wrap** (`monitorBounce` vs the nav listener): both layers
  have distinct jobs and are cheap; merging risks regressions for churn's sake.
- **Behavioral/ML tracker classification:** the project's precision-first design
  (static rules + tight heuristics) is what keeps its false-positive rate low.
  A speculative scoring engine without a measurement infrastructure would
  violate the "one broken website is worse than ten missed trackers" rule.
- **`referrerPolicy` alternation:** unchanged; no evidence of breakage.
