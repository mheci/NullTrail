# Changelog

All notable changes to NullTrail are documented in this file.

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
