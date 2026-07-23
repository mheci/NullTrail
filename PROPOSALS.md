# NullTrail — 30 Innovation Proposals (v2.7.0+ design space)

> **STATUS (v3.0.0, 2026-07-23): ALL 30 MERGED.** Each section header is
> annotated with the shipped status; verification details live in
> [AUDIT.md](AUDIT.md) Round 4 and [CHANGELOG.md](CHANGELOG.md) [3.0.0].

Thirty distinct, non-overlapping ways to advance the codebase, each mapped to
real modules and graded for false-positive (FP) risk, respecting the project's
prime directive: **one broken website is worse than ten missed trackers.**
Nothing here requires new background traffic; anything ML-flavored is
suggestion-tier only — never auto-act.

Risk legend: 🟢 zero meaningful FP risk · 🟡 gated/opt-in, bounded risk ·
🔴 needs measurement before auto-action (ship as suggestion-tier first)

---

## A. Protection & cleaning engine (the core)

### 1. Confidence-tiered classification pipeline 🟢
Replace binary strip/keep with three tiers: `definite tracker` (provider rule),
`definite functional` (allowlist: q, wd, query, text, ia, qft…), `unknown`
(left untouched, counted). Unknowns are **never** stripped — they feed the
dashboard as candidates. This is the formalization of the project's
"classification over deletion" philosophy, and it makes every future rule
auditable. Anchor: `removeFields()`, `stripEngineSearchParams()`. Effort: M.

### 2. Regex-fusion compiler for provider rules 🟢
Today: N providers × M params × one regex test each. Compile each provider's
`ruleRes[]` into ONE anchored alternation regex (`^(?:r1|r2|…)$`, case-flagged,
capped at ~64 alternants per segment with chunking) at `compileProvider()`
time. Expected 3–10× param-matching speedup on rule-heavy feeds with
byte-identical semantics; perf canary (`tests/perf-check.js`) proves it in CI.
FP risk: none if compilation is verified against the unfused matcher in the
canary. Effort: M.

### 3. Boot-time canary self-test with auto-fallback 🟢
After `setRules()` (cached or fresh), run ~8 in-memory invariant fixtures
(Bing b64 unwrap, DDG `uddg`, `utm_` strip, `q` preservation on Google/Walla).
On failure: silently revert to `EMBEDDED_RULES`, mark Rules tab "canary failed
— safe rules restored". Self-healing against a corrupt upstream rule push.
Anchor: boot sequence + Rules tab. Effort: S.

### 4. Staged rule rollout (local canary period) 🟢
New downloaded rules activate after a configurable soak (default 72h) unless
the user opts into "immediately". A bad upstream push gets caught by the
community (or by #3) before it reaches conservative users. Anchor:
`updateRules()` accept path + Rules tab countdown. Effort: S.

### 5. Rule-feed quorum acceptance 🟢
Require 2-of-3 independent feeds (rules1, rules2, GitLab) to agree on the
SHA-256 before installing a new ruleset. Defeats single-feed compromise or
stale-mirror poisoning at trivial extra cost (two tiny hash files, and only at
update time — never speculative). Anchor: `firstOK()`/`updateRules()`.
Effort: S.

### 6. One-click ruleset rollback 🟢
Keep `rulesDataPrev` (previous working set) alongside `rulesData`. Rules tab
gets "Restore previous database" + auto-rollback when #3's canary fails twice.
Anchor: storage layer, Rules tab. Effort: S.

### 7. JS-navigation unwrap (location.assign/replace/href setter) 🟡
Today unwraps cover anchors, pushState and window.open — but a page doing
`location.assign("https://google.com/url?q=…")` sails through. Wrap
`Location.prototype.assign/replace` and the `href` setter in the main world to
run the same `extractRedirect` logic. Precision-safe: same destination, just
skips the hop; gated behind existing `forceRedirection`. Anchor:
`ntMainWorldBoot()` hook section. Effort: M.

### 8. SPA hash-fragment stripping in the quick pass 🟢
`removeFields()` cleans `#` params for provider rules, but `stripQuickUTM()`
(the STRIP_PARAMS_RE quick pass) only inspects `searchParams`. Extend it to
hash fragments, using the existing `parseHashFragments()` writer — covers
SPA-router URLs like `#/view?utm_source=…`. Real, confirmed coverage gap.
Effort: S.

### 9. Tracker-respawn watcher 🟡
After `purgeTrackerStorage()`/`purgeGACookies()` run, install a main-world
`localStorage.setItem` + `document.cookie` observer that counts immediate
re-creation of purged keys ("respawn attempts" in Stats). Optional strict mode:
keep re-purging in a bounded loop (≤5/page). Report-only by default. Effort: M.

### 10. Multilingual scored consent classifier 🟡
Extend consent auto-reject beyond CSS selectors: score candidate buttons by
token tables (EN/DE/FR/ES/IT/PL/NL/PT/AR/JA/KO reject-words), container
heuristics (fixed/sticky, high z-index, bottom-anchored), size/color contrast
vs. the accept button. Click **only** above a strict high-watermark;
mid-scores are counted, never clicked. Extends coverage to thousands of CMPs
the selector list can't know — precision-first by construction. Anchor:
`autoRejectConsent()`, `looksLikeConsentChoice()`. Effort: L.

---

## B. Coverage extensions (places NullTrail doesn't see today)

### 11. Opt-in same-origin iframe deep mode 🟡
`@noframes` means iframe content is untouched. Add an opt-in global toggle
`deepFrames` using `@match` + `@all-frames`-style second script block (or
manager-level `@noframes` removal scoped by a runtime same-origin check):
clean only if `iframe.contentDocument` is same-origin-reachable. Cross-origin
frames stay excluded to avoid FP storms. Effort: M.

### 12. Open shadow-root piercing cleaner 🟢
`MutationObserver` can't see open shadow trees. Wrap
`Element.prototype.attachShadow` (main world, camouflaged like the other
hooks) to register returned roots with the content-world observer when `mode:
"open"`. Closed roots remain respected (privacy boundary + we use one
ourselves for the dashboard). Effort: M.

### 13. Page-generated speculative-traffic neutralizer 🟡
NullTrail guarantees zero speculative traffic *itself* — extend the courtesy
to the metered user by stripping `<link rel="prefetch|prerender|preconnect">`
that point at known tracker/ad domains only (same host lists as
`AD_TRACKER_HOSTS_RE`/`IP_LOGGERS`), and only while `respectMetered` reports a
metered link. Functional preconnects to first-party/CDN hosts stay untouched.
Effort: S.

### 14. Candidate-discovery mode (entropy-scored, human-approved) 🔴
Passive analyzer: params with high-entropy values (long, base64-ish,
session-unique) on tracker-adjacent hosts get *proposed* in a dashboard
"Candidates" tab with live examples — the user promotes them to personal strip
rules (stored locally, survives feed updates). Zero auto-stripping; this is
the measurement infrastructure that unlocks future classification work without
violating the precision directive. Effort: M.

### 15. AMP→canonical redirect (opt-in) 🟡
We already unwrap AMP *viewer wrappers*. Add: on `amp.`/`-amp.` article pages
with `<link rel="canonical">`, offer a per-site toggle to swap
`location.href` to the canonical (better privacy, no AMP ping). Off by
default; navigation-changing, so per-site opt-in only. Effort: S.

---

## C. Precision, transparency & UX

### 16. Explainability ring buffer — "why was this touched?" 🟢
In-memory ring of the last ~60 actions: `{kind: stripped|unwrapped|blocked,
url (origin+path only), rule-name, engine, timestamp}` rendered in a
"Recent activity" dashboard tab. Memory-only, never persisted, never leaves
the tab. Massive trust/debug win; also feeds future FPs a diagnosis path.
Effort: M.

### 17. Per-site dry-run (log-only) mode 🟢
Dashboard toggle per host: NullTrail classifies and counts everything but
rewrites nothing. Lets a cautious user validate precision on *their* sites
before trusting the engine — and makes bug reports 10× better ("dry-run said
it would strip `next`"). Anchor: `isActive()`/`cleanAnchor()` gate. Effort: S.

### 18. Timed pause with auto-resume 🟢
The #1 self-inflicted privacy failure: user disables protection "for a
minute", forgets, stays naked forever. Add "Pause for 1 hour / this session"
beside disable; countdown row in the dashboard; auto-resume re-pushes config
via existing `pushConfigToPage()`. Effort: S.

### 19. Per-site config profiles 🟡
Generalize the existing per-site unblock maps (`unblockContextMenuSites`) into
a full override matrix: any dashboard toggle overridable per origin
(e.g., `serverRedirectResolution` ON only for search engines, consent
auto-click OFF for the bank). Sites tab becomes a profile editor. Effort: L.

### 20. Alt+Shift+C — copy a clean URL of this page 🟢
One keystroke runs the current location through `sanitizeHref()` +
engine-strip and puts it on the clipboard with a transient HUD confirmation.
The daily-driver feature users will feel constantly. Effort: XS.

### 21. Ruleset diff viewer 🟢
At update time, shallow-diff old-vs-new providers (added/removed rule names,
new providers) and render it in the Rules tab ("this update added 3 cleaners,
12 params"). Transparency about what just changed under you. Effort: S.

### 22. One-click personas: Gentle / Balanced / Paranoid 🟢
Preset mapping over existing toggles (Gentle = everything risky off,
guaranteed precision-first; Balanced = current defaults; Paranoid = all
opt-ins on incl. ad-noise with metered warning). Kills configuration fatigue
without removing granularity. Effort: S.

### 23. Offline settings import/export 🟢
Export `{toggles, whitelist, profiles}` as pretty JSON to file/clipboard;
import with schema validation + version field. Multi-browser users staple.
File is user-initiated — zero network involvement. Effort: S.

### 24. Stats: daily buckets, sparkline, 90-day hygiene 🟢
Store per-day `{cleaned, blocked}` buckets (local only), render an inline-SVG
sparkline in Stats, split session/lifetime counters, auto-expire buckets older
than 90 days (local-data minimization principle). Effort: M.

### 25. Dark-pattern consent auditor (report-only) 🟢
Detect and *report* — never auto-fix — banners with pre-ticked boxes, hidden
reject paths, or contrast-manipulated accept buttons (computed-style signals).
Stats row + optional HUD badge. Nudges awareness with literally zero
interaction risk. Effort: M.

---

## D. Engineering, testing & release ops

### 26. Precision-budget CI corpus 🟢
A fixtures file of ~200 *must-stay-byte-identical* URLs: OAuth flows, banking
links, shared search links (`q=`, `wd=`, `query=`), campaign-free article
URLs, consent-form actions. CI runs the real cleaner over them and fails the
build on ANY diff — the philosophy, operationalized. Complements the existing
"malicious fixture" tests. Effort: M.

### 27. Recorded-page E2E lane (nightly Playwright) 🟡
Static HAR/HTML fixtures of top SERPs + CMP banners loaded in headless
Chromium/Firefox with the script injected: assert links cleaned, zero FP
clicks, no console errors. Nightly (not per-PR) to keep CI cheap; runs the
production artifact, catching what node stubs can't. Effort: L.

### 28. BFCache state-resurrection handling 🟢
On `pageshow` with `persisted=true`: reset main-world `_navigatedMW`, re-push
config, re-run stripSERPBar, and re-baseline the stat flush — bfcache restores
stale closures that assume a fresh document. Cheap, correctness-flavored.
Effort: S.

### 29. Viewport-first cleaning + adaptive idle shedding 🟢
`IntersectionObserver` ranks queued anchors: visible links clean first;
below-fold cleans on scroll-idle. When the queue exceeds a watermark, the idle
loop sheds low-priority work (dataset scrub) and keeps href cleaning —
guaranteeing the links a user can *actually click right now* are always clean
first, on any device. Anchor: `scheduleElementCleanup()`. Effort: M.

### 30. Production perf histograms + gated release budgets 🟢
Debug mode samples `sanitizeHref`/observer-batch durations into in-memory
percentile counters (p50/p95/p99) shown in About → "engine health"; the CI
perf canary (added in v2.6.0) gets explicit p-budgets so a release can't ship
with a hot-path regression. Measurement before optimization — always. Effort: S.

---

## Explicitly rejected (staying rejected)

- **Any speculative network feature** (link-health checks, prefetching,
  server-side resolution by default) — violates the zero-bytes guarantee.
- **Behavioral/ML tracker scoring that auto-acts** — FP risk without
  measurement infra; #14 is the sanctioned, suggestion-only path.
- **Session-ID/“login-token in URL” stripping** — unbounded FP blast radius.
- **Cross-origin frame injection by default** — consent and security boundary.

## Suggested sequencing

1. **v2.7.0 (foundation)**: #1, #2, #3, #20, #16-lite, #26 — classification
   spine + perf canary + the feature users will touch daily.
2. **v2.8.0 (trust & recovery)**: #4, #5, #6, #21, #17, #18, #23.
3. **v2.9.0 (coverage)**: #7, #8, #11, #12, #13, #15.
4. **v3.0.0 (intelligence, measurement-backed)**: #10, #14, #24, #25, #9,
   #19, #22, #27–#30 rolled in per release budget.
