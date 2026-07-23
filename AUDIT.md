# NullTrail Audit Ledger

## Round 4 — v3.0.0 (PROPOSALS merge: all 30 implemented)

Round 4 was a consolidation round: implement **all 30** proposals from
PROPOSALS.md, each verified against the prime directive (precision first, zero
speculative traffic, no churn). Table = implementation & verification status.

### A. Protection engine

| # | Proposal | Status | Verification |
|---|---|---|---|
| 1 | Confidence-tiered classification | **MERGED** | `_clsFunctional`/`_clsUnknown` counters on the global provider only (no double-count); Activity tab renders; corpus test proves unknowns untouched |
| 2 | Regex-fusion compiler | **MERGED** | chunked alternation (64) + per-chunk per-rule fallback; perf canary: 90µs → 58µs cold (−35%) |
| 3 | Boot canary self-test | **MERGED** | 4 invariant fixtures incl. referral-allow contract; recovery chain new→prev→embedded; `rulesCanaryFail` surfaces in Rules tab |
| 4 | Staged rule rollout | **MERGED** | `rulesPending` with 72h `activateAt`; boot + "activate now" paths share `activateRules()`; status "staged" is honest in the update contract |
| 5 | 2-of-3 feed quorum | **MERGED** | `hashQuorum()` majority; <2 agreeing hashes ⇒ honest "failed" + backoff |
| 6 | Ruleset rollback | **MERGED** | prev snapshot at activation; rollback re-verified by canary before going live |
| 7 | JS-navigation unwrap | **MERGED** | `location.assign/replace` wrapped (camouflaged); `Location.href` setter best-effort ([Unforgeable] engines degrade silently); whitelist/active respected via `realLink` |
| 8 | SPA hash-fragment strip | **MERGED** | quick pass reuses `parseHashFragments`; non-param fragments (`#!/path`) provably unmangled; smoke Test 11 |
| 9 | Tracker-respawn watcher | **MERGED** | MW `Storage.setItem` + `Document.cookie` hooks, pattern pushed via cfg meta; strict mode opt-in (default report-only) |
| 10 | Multilingual consent classifier | **MERGED** | 12-language wording; accept-veto; buttons-only; mandatory consent scope + reject wording (score ≥6); pre-ticked/hidden skip stands |

### B. Coverage

| # | Proposal | Status | Verification |
|---|---|---|---|
| 11 | Same-origin iframe cleaning | **MERGED (opt-in)** | top-document driven — `@noframes` kept; cross-origin `contentDocument` throws ⇒ skipped; ≤10 frames, WeakSet-observed |
| 12 | Open shadow-root cleaning | **MERGED** | `attachShadow` hook registers OPEN roots only (dashboard's closed root unaffected); roots WeakSet-deduped, observed with shared observer |
| 13 | Metered prefetch neutralizer | **MERGED** | metered-only; ad/logger hosts only; first-party hints untouched |
| 14 | Entropy candidate discovery | **MERGED (suggestion-only)** | ≥16-char high-entropy values, 200-key cap; promotion adds personal provider; rebuilds rules + clears LRU on promote/remove |
| 15 | AMP→canonical redirect | **MERGED (per-site opt-in)** | requires AMP signature + canonical link + per-host flag; one-shot per page |

### C. Transparency & UX

| # | Proposal | Status | Verification |
|---|---|---|---|
| 16 | Explainability buffer | **MERGED** | 60-entry memory ring; query strings NEVER recorded; statistics-off ⇒ zero traces |
| 17 | Per-site dry-run | **MERGED** | rewrites skipped, activity/HUD still count; IP-logger neutralization stays active (safety) |
| 18 | Timed pause + auto-resume | **MERGED** | `pauseUntil` persisted, `_sessionPaused` per-tab; expiry clears itself inside `isPaused()`; Sites tab shows countdown + resume |
| 19 | Per-site overrides | **MERGED** | `eff()` wrapper; UI: inherit/on/off for 3 keys; storage schema accepts any toggle key (future-proof) |
| 20 | Alt+Shift+C copy clean URL | **MERGED** | async Clipboard API + legacy fallback; transient HUD confirm |
| 21 | Rules diff viewer | **MERGED** | compact summary persisted at activation; Rules tab renders providers/rules ± |
| 22 | Personas | **MERGED** | three presets over existing toggles only (ad-noise never force-enabled) |
| 23 | Import/export | **MERGED** | export via Blob download; import type-checked + host-key-regex filtered (`__proto__`-safe) + regex-validated personal rules |
| 24 | Stats sparkline & hygiene | **MERGED** | daily buckets pruned >90d; Trusted-Types-safe fallback rendering |
| 25 | Dark-pattern auditor | **MERGED (report-only)** | pre-ticked boxes / no-reject-path detection, bounded scan (40 boxes), stat-only |

### D. Engineering & ops

| # | Proposal | Status | Verification |
|---|---|---|---|
| 26 | Precision-budget CI corpus | **MERGED** | 22 must-not-change + 4 must-clean fixtures; **caught a real upstream FP (amazon `th`/`psc`)** — durable override added |
| 27 | Nightly E2E lane | **SCAFFOLDED** | Playwright spec + nightly workflow (continue-on-error while maturing; cannot run browsers in the dev sandbox) |
| 28 | BFCache handling | **MERGED** | pageshow/persisted → config re-push, `nt:bfcache` re-arms MW latch, SERP re-strip, stat flush |
| 29 | Viewport-first + shedding | **MERGED** | IO unshifts visible links; bounded iterator drains (no O(n²)); deep-queue shed skips dataset scrub |
| 30 | Perf health + p-budgets | **MERGED** | debug counters in About; CI p-budgets: cold ≤500µs, repeat ≤100µs per clean |

**Regression matrix (15 processes)**: smoke (30 assertions), 5 engine cases +
whitelist mode, 3 network modes, perf canary w/ budgets, precision corpus,
meta-check — all green. `node --check` clean.

## Round 3 — v2.6.0 (10-pass hunt)

Third full iteration over the codebase, again with fresh themes per pass
(update-checker truthfulness, unwrapper precision, engine strip-list vs.
functional query params, exception safety, lifecycle, accessibility, `@match`
coverage, mock-API completeness, async hardening, full re-review).

### Pass 1 — Update checker truthfulness (headline fix)

| # | Finding | Resolution |
|---|---|---|
| F1 | **The update checker lied.** `updateRules()` converted every failure (all 3 feeds down, SHA-256 mismatch, unparseable payload, structural rejection) into a *resolved* promise with no payload — so the dashboard "Check for updates now" button always showed **"Updated successfully"**, and the GM menu item was fire-and-forget. A user could believe their rules were fresh while running month-old embedded ones | **FIXED** — result-string contract (`updated`/`current`/`failed`/`busy`/`skipped`) threaded through the whole promise chain; button renders the real outcome with matching colors; manual feeds share the failure backoff honestly |
| F2 | No persisted evidence of updater health — after closing the dashboard there was no way to know when the last check ran or what it did | **FIXED** — new `rulesLastCheck` + `rulesLastResult` keys, surfaced as "Last Update Check" / "Last Update Result" rows in the Rules tab; included in factory reset |
| F3 | Users can't tell how the *userscript itself* updates | **FIXED** — Rules tab now explains manager-driven updates from the GitHub feed (no new network traffic introduced); `@updateURL`/`@downloadURL` re-verified canonical, still guarded by `meta-check.js` |
| F4 | Anomalous empty status value could self-label as success | **FIXED** — defensive `status || "failed"` (empty never masquerades as success) |

### Pass 2 — Unwrapper host-boundary precision

| # | Finding | Resolution |
|---|---|---|
| F1 | `unwrapDDG` host test `/duckduckgo\.com$/i` lacked a boundary → matched `notduckduckgo.com`. Real exposure was the **main-world** href setter/window.open path (content world is engine-gated and was already safe) | **FIXED** — `/(?:^|\.)duckduckgo\.com$/i` in both copies; regression tests drive the MW setter with lookalike + genuine hosts |
| F2 | `unwrapYahoo` `\.?search\.yahoo\.` matched `evilsearch.yahoo.*`; MW `realYahoo` same | **FIXED** — start/dot boundary in both copies |
| F3 | `unwrapYandex` `\.?yandex\.[a-z]{2,}$` matched `xyandex.com` (defense-in-depth; engine gate already bounded) | **FIXED** — boundary required |
| F4 | ReDoS fuzz on the 3 replacement tokenizer regexes (200KB inputs) | **VERIFIED OK** — 1ms |

### Pass 3 — Engine strip-list vs. functional query parameters (round's highest user-impact find)

| # | Finding | Resolution |
|---|---|---|
| F1 | **Perplexity strip-list contained `q` — its QUERY parameter.** `stripSERPBar`/pushState wrapping removed it from the URL bar → reload = empty search; shared links destroyed. ("One broken website is worse than ten missed trackers.") | **FIXED** — `q` removed from list; `NT_CASE=perplexity` regression test locks `q` preservation while `s`/`rq`/`copilot` are stripped |
| F2 | **Walla strip-list contained `q` (same breakage)** | **FIXED** — `q` removed; `NT_CASE=walla` test added; both wired into CI |
| F3 | Systematic review of all 40+ engine lists against each engine's real query param (google `q`, bing `q`, yahoo `p`, ddg `q`, yandex `text`, baidu `wd`, kagi `q`, metager `eingabe`, goo `MT` (case-sensitive vs `mt`), …) | **VERIFIED OK** — no further collisions |

### Pass 4 — Exception safety on the sanitize hot path

| # | Finding | Resolution |
|---|---|---|
| F1 | `extractGoogleRedirect` called raw `decodeURIComponent` on 14 captures — a malformed escape (`%E0%A4` truncated by a lazy CMS) throws `URIError`, propagating through `sanitizeHrefRaw` | **FIXED** — all decodes via `safeDecode` (content world) / `safeDec` (main world); `meta-check.js` now forbids the raw pattern regressing |
| F2 | One throwing anchor inside `processBatchQueue` killed the whole idle loop: `isCleanupScheduled` stayed latched and **all future cleaning silently stopped for the page's lifetime** | **FIXED** — per-element try/catch in the queue loop plus a guarded `sanitizeHref` call inside `cleanAnchor` |
| F3 | Harness test: click pipeline driven with malformed google `/url?q=` wrapper | **VERIFIED** — no throw, link survives |

### Pass 5 — Lifecycle & per-page budgets

| # | Finding | Resolution |
|---|---|---|
| F1 | Hover resolver's GM HEAD request had **no timeout** — a hung request latched `_nt_resolving` forever and permanently burned one of the 25-per-page budget slots | **FIXED** — `timeout: 10000` + `ontimeout` resets the flag |
| F2 | Pending stat deltas (1.5s debounce) were lost when a tab closed/navigated right after cleaning | **FIXED** — `flushStats()` extracted and called on `pagehide` and `visibilitychange=hidden` |
| F3 | Stats tab showed counters as-of page load, ignoring other tabs | **FIXED** — renders fresh storage + this tab's pending deltas |

### Pass 6 — Dashboard accessibility & UX

| # | Finding | Resolution |
|---|---|---|
| F1 | No dialog semantics: screen readers saw a styleless div soup | **FIXED** — `role=dialog`, `aria-modal`, `aria-label`, `role=tablist/tab/tabpanel`, `aria-selected` state sync |
| F2 | No focus management — focus stayed on the page behind the modal and was lost on close | **FIXED** — focus moves to the close button on open; every close path (button/Esc/backdrop/reset) routes through one helper that restores the pre-dialog focus |
| F3 | Close button was a bare lowercase "x" with no accessible name | **FIXED** — `×` glyph + `aria-label` + tooltip |

### Pass 7 — `@match` coverage vs. handled hosts

| # | Finding | Resolution |
|---|---|---|
| F1 | `extractGoogleRedirect` unwreps `*.cdn.ampproject.org` AMP viewer URLs, but **no `@match` covered it** — landing directly on an AMP cache URL never ran NullTrail | **FIXED** — two `@match` lines added; `meta-check.js` guard added |
| F2 | `googleweblight.com`/`bing-amp.com` handlers reference defunct services | **KEPT (deliberate)** — zero-cost inert code paths; removing them saves nothing measurable and keeps upstream-familiar behavior |

### Pass 8 — Blocked-API mock completeness

| # | Finding | Resolution |
|---|---|---|
| F1 | Blocked `EventSource` returned `Object.create(prototype)` — inherited `addEventListener` threw "Illegal invocation" on the shell | **FIXED** — no-op `add/removeEventListener/dispatchEvent/onX` surface |
| F2 | Blocked `WebSocket` returned a bare `{}` — pages calling `.send()/.close()/.addEventListener()` crashed | **FIXED** — full spec-shaped closed-socket stub (`readyState: 3`, no-op methods) |

### Pass 9 — Async hardening & new regression/perf gates

| # | Finding | Resolution |
|---|---|---|
| F1 | Unhandled-promise sweep across `gmFetch`/`firstOK`/`sha256Hex`/dashboard/menu/ad-noise | **VERIFIED OK** — every chain terminates in a rejection branch |
| F2 | No automated perf canary existed to catch an O(n²) sneaking back into per-link paths | **ADDED** — `tests/perf-check.js`: 3,000 cold cleans + 30,000 LRU hits through the real click listener; current baseline ≈ 90µs cold / 5µs repeat; wired into CI |
| F3 | `meta-check.js` didn't guard this round's contracts | **ADDED** — AMP `@match`, update-checker contract keys, decode-safety, DDG boundary |

### Pass 10 — Full codebase re-review (4,500+ lines, final pass)

| # | Finding | Resolution |
|---|---|---|
| F1 | `isGoogleHost` first clause `h === location.hostname` makes `cfg.google` always true, keeping relative `/gen_204` blocking armed on ALL sites | **KEPT (deliberate)** — `gen_204` is Google's telemetry endpoint wherever it appears; restricting it would *reduce* protection. The clause also enables `/url?q=` unwrap on redirect-wrapping forums — destination-preserving, precision-safe |
| F2 | DDG engine list strips settings params (`kp`,`kl`) — user prefs in URL | **KEPT (deliberate)** — matches upstream ClearURLs-derived lists since v1; reverting needs user research, not a silent flip |
| F3 | GM4 lacks sync `GM_getValue` (falls back to localStorage); Greasemonkey-specific | **DOCUMENTED** — known platform limit, unchanged |
| F4 | All 10 passes re-run against the final tree; 14 test processes green (core, 5 engine cases, 3 network modes, perf, meta) | **VERIFIED OK** |

## Round 2 — v2.5.0 (10-pass hunt)

Second full iteration over the codebase with fresh themes per pass.

### Pass 1 — Regex correctness sweep

| # | Finding | Resolution |
|---|---|---|
| F1 | Automated ReDoS sweep of the heaviest patterns (IP_LOGGERS, GA, TRACKER_STORAGE, BOUNCE_TRACKERS, Yahoo RU lookahead, base64 redirect probe, consent/scope regexes) against 2–4KB adversarial strings | **VERIFIED OK** — worst 50-iteration batch: 0.37ms; no catastrophic backtracking, all literals parse (`node --check`) |

### Pass 2 — Listener / timer / collection leak audit

| # | Finding | Resolution |
|---|---|---|
| F1 | Every `WeakMap`/`WeakSet` collection (PROCESSED, QUEUED, LOCK, RESOLVED_MAP, XHR blockMap, camouflageMap, consents) | **VERIFIED OK** — entries die with their elements |
| F2 | Strong collections bounded: `_lruCache` 384, `_clickedAdURLs` ≤ 5, engine cache per host | **VERIFIED OK** |
| F3 | `gt` self-clears after 30 ticks; `whenReady` capped at 5s; `mdh` re-registrations are platform-deduped (same fn reference + `once`) | **VERIFIED OK** |
| F4 | Dashboard `Esc` listener self-removes when container disconnects | **VERIFIED OK** |

### Pass 3 — Rules pipeline round 2

| # | Finding | Resolution |
|---|---|---|
| F1 | `activeRuleRes` reallocated the concatenated referral rule array on **every** cleaned URL when referral stripping was on | **FIXED** — memoized per provider (`p._allRes`) |
| F2 | Delete-during-`forEach` in `stripQuickUTM` | **VERIFIED OK** — `URLSearchParams.forEach` iterates a live but safely-defined sequence per spec |
| F3 | `rawRules` with `g` flag reused across replaces | **VERIFIED OK** — `String.replace` resets `lastIndex` |

### Pass 4 — Main-world shims round 2

| # | Finding | Resolution |
|---|---|---|
| F1 | `ysmm` getter returned the **string** `"undefined"` — adfly-style `typeof ysmm` checks saw `"string"` and could detect the shim | **FIXED** — returns real `undefined` |
| F2 | Blocked-XHR response surface incomplete (`statusText`, `responseURL` missing) | **FIXED** — full mocked surface |

### Pass 5 — Persistence correctness

| # | Finding | Resolution |
|---|---|---|
| F1 | **Cross-tab stat clobbering**: flush wrote absolute counters loaded at boot — concurrent tabs silently discarded each other's stats | **FIXED** — delta-merge at flush (read→add→write) |
| F2 | Up to 4s of stats lost when a tab closes right after cleaning | **FIXED** — flush window 4s → 1.5s; reset also zeroes pending deltas |

### Pass 6 — Dashboard/state round 2

| # | Finding | Resolution |
|---|---|---|
| F1 | Whitelist textarea ↔ per-site toggle sync | **VERIFIED OK** — both paths update the other |
| F2 | Metered rows + toggles recomputed live per render | **VERIFIED OK** |

### Pass 7 — Consent auto-reject precision (round's highest-risk find)

| # | Finding | Resolution |
|---|---|---|
| F1 | **`a[href*=reject i]` auto-clicked ANY link whose URL contains "reject"** — e.g. `/news/mayor-rejects-budget` — navigating users away mid-read. Worse than any tracker. | **FIXED** — selectors split into trusted/generic; generic matches now require BOTH a consent-scoped ancestor (6-level walk) AND reject-style wording in the element's own text. Skips disabled/hidden elements. Regression test covers the malicious fixture (article link) and the genuine decline button |

### Pass 8 — Cookie operations

| # | Finding | Resolution |
|---|---|---|
| F1 | GA-cookie purge missed **parent-domain** cookies (set on `.example.com`, visited from `sub.example.com`) | **FIXED** — hostname is walked upward; browsers reject public suffixes harmlessly, no suffix list needed |
| F2 | Preset cookies set without `Secure` on HTTPS | **FIXED** — `;Secure` appended on secure origins |

### Pass 9 — UX safety

| # | Finding | Resolution |
|---|---|---|
| F1 | Alt+Shift+D/N shortcuts fired even while typing in inputs/textareas/contenteditable (and Alt+Shift is the Windows IME switch combo) | **FIXED** — shortcuts ignored when any ancestor of the target is editable |

### Pass 10 — Release engineering

| # | Finding | Resolution |
|---|---|---|
| F1 | Update checker re-verified: `@updateURL`/`@downloadURL` canonical + CI-enforced; rule updater metered-gated, hash-gated, payload-validated, timed out at 20s, with 6h–24h backoff | **VERIFIED OK** |
| F2 | Regression net grew to 23 core assertions incl. consent-precision fixtures | **FIXED** — CI unchanged, runs all suites + meta guard |

---

## Round 1 — v2.4.0 (10-pass hunt)

## Pass 1 — Main-world interception hooks (fetch / XHR / beacon / WS / ES / img / href)

| # | Finding | Resolution |
|---|---|---|
| F1 | `loadCfg()` ran `getElementById` + attribute read on **every** intercepted fetch/beacon/XHR/href-set — hundreds of extra DOM queries per busy page | **FIXED** — dirty-flag memoization; the existing `nt:cfg` event invalidates; stays dirty until the config meta appears (document-start race safe) |
| F2 | `Request.keepalive` is read-only — `input.keepalive = false` silently no-opped; keepalive was never stripped from `fetch(new Request(...))` calls | **FIXED** — rebuild via `new Request(input, {keepalive:false})` |
| F3 | Blocked XHR never fired `loadend` (libraries awaiting it could hang) | **FIXED** — dispatch `loadend` + call `onloadend` |
| F4 | `decodeURIEncodedMod()` defined but never called | **FIXED** — deleted dead code |

## Pass 2 — URL sanitization pipeline (redirect extraction, removeFields, LRU, intent)

| # | Finding | Resolution |
|---|---|---|
| F1 | `removeFields` rebuilt URLs from `URL.origin`, which **drops `user:pass@` credentials** on any param-stripped URL | **FIXED** — rebuild preserves userinfo (+ regression test) |
| F2 | Already-clean links still received a processing pass | **VERIFIED OK** — memo short-circuits; added explicit regression test |
| F3 | `extractFFRedirect` base64 heuristic false-positive risk | **REVIEWED–NO CHANGE** — decoded result must parse as http(s) AND pass `isGoodLink` (private-IP/protocol gates) |

## Pass 3 — Engines, SERP stripping, bounce monitoring

| # | Finding | Resolution |
|---|---|---|
| F1 | If every remote provider failed to compile, `PROVIDERS=[]` silently disabled **all** stripping until next update | **FIXED** — keep existing ruleset when compile count is 0 |
| F2 | Provider sort | already fixed 2.2.0 (deterministic comparator) |
| F3 | `monitorBounce` only covers SPA `pushState` not full navigations | **REVIEWED–NO CHANGE** — anchor-level bounce links (out.reddit, href.li, t.umblr) are already unwrapped via the generic `url=` extractor during cleaning; `t.co`-style path tokens can't be resolved without server calls (opt-in resolver covers those) |
| F4 | `stripSERPBar` ↔ `wrapNav` recursion | **REVIEWED–NO CHANGE** — `_serpBusy` + no-change short-circuit bound it correctly |

## Pass 4 — Storage, config flow, enable/disable propagation

| # | Finding | Resolution |
|---|---|---|
| F1 | **Whitelisting a site did NOT disable main-world protections** — beacons/GA/referrer overrides continued (payload had no active flag) | **FIXED** — payload carries `active`; `shouldBlock`, `policy()`, `realLink()` all no-op when inactive (config is memoized, so the gate is free) |
| F2 | `Alt+Shift+N` whitelist toggle never pushed config to the page world | **FIXED** — calls `pushConfigToPage()` |
| F3 | GM menus / whitelist persistence | **VERIFIED OK** |

## Pass 5 — DOM pipeline (cleanAnchor, dataset, observer, consent, copy)

| # | Finding | Resolution |
|---|---|---|
| F1 | click + auxclick IP-logger handlers were the identical 10-line walk | **FIXED** — unified handler; auxclick guards middle-button |
| F2 | duplicate `contextmenu`/`dragstart` listeners (different jobs) | **REVIEWED–NO CHANGE** — distinct concerns, both cheap |
| F3 | dataset writes (`data-cthref`) re-triggering observer | **VERIFIED OK** — href memo absorbs re-queue, no loop |

## Pass 6 — Dashboard / UX code

| # | Finding | Resolution |
|---|---|---|
| F1 | `attachShadow` failure (legacy engines) = dashboard never opens | **FIXED** — graceful fallback to un-isolated container |
| F2 | no way to dismiss dashboard except buttons | **FIXED** — Escape closes; listener self-cleans |
| F3 | bare `confirm()`/`alert()` throw in sandboxed frames | **FIXED** — `window.*` + try/catch |
| F4 | Stats/Rules duplication | already fixed 2.2.0 |

## Pass 7 — Network layer & metered policy

| # | Finding | Resolution |
|---|---|---|
| F1 | `gmFetch`'s plain-`fetch` fallback had **no timeout** — a hung request would pin `_updatingRules` forever and silently end all future rule updates | **FIXED** — `AbortController` 20s timeout, timer cleared on settle |
| F2 | backoff persistence semantics (`rulesNextTry`) | **VERIFIED OK** — reset only on success, manual force bypasses |
| F3 | ad-noise / hover-resolution metered gates | already added 2.3.0 |

## Pass 8 — Security sweep

| # | Finding | Resolution |
|---|---|---|
| F1 | `_engineCache` plain `{}` keyed by attacker-influenced hostnames — prototype-pollution-adjacent (`__proto__` style keys) | **FIXED** — `Object.create(null)` |
| F2 | Full engine (GM reads + MutationObserver) ran inside **every matching ad iframe** (`googlesyndication`, `doubleclick` matches) — observer multiplication on ad-heavy pages | **FIXED** — `@noframes` (top frame only); ad-frame links aren't trusted user content |
| F3 | Remote rules feed = potential ReDoS via crafted regexes | **REVIEWED–NO CHANGE** — pinned trusted origin, HTTPS, hash-verified, per-provider compile try/catch, empty-guard (P3-F1) |
| F4 | No `postMessage` listeners → no origin-validation surface | **VERIFIED OK** |
| F5 | Trusted Types policy object never exposed to page | **VERIFIED OK** — captured in closure only |

## Pass 9 — Browser compatibility sweep

| # | Finding | Resolution |
|---|---|
| F1 | modern-only syntax check (`?.`, `??`, `.at()`, `replaceAll`, `structuredClone`, `for…of`) | **VERIFIED OK** — none in code paths |
| F2 | `attachShadow`, `AbortController`, `requestIdleCallback`, `navigator.connection`, `keyCode`, `GM_*` absence | **VERIFIED OK** — all guarded/fallback (Greasemonkey: no legacy `GM_getValue` → localStorage path engages) |
| F3 | manual DOM walks instead of `closest()` | **VERIFIED OK** — SVG/parent-safe |

## Pass 10 — Release engineering & update checker

| # | Finding | Resolution |
|---|---|---|
| F1 | Version consistency (metadata ↔ README badge ↔ CHANGELOG ↔ dashboard) had drift risk | **FIXED** — `tests/meta-check.js` enforces agreement in CI |
| F2 | `@updateURL`/`@downloadURL` verified canonical; missing `@supportURL` | **FIXED** — added `@supportURL`; both URLs checked by CI |
| F3 | No automated guard that removed features stay removed | **FIXED** — meta-check asserts `warmupTargetServer` stays deleted |

---

**Result:** all suites green (core 23 assertions, 4 engine contexts incl.
whitelisted-site, 3 network scenarios, metadata guard). Shipped as v2.4.0.
