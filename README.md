# NullTrail — Universal Tracking & Redirect Scrubber (Optimized)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-14.0.0--optimized-teal.svg)]()
[![Type](https://img.shields.io/badge/Type-Userscript-orange.svg)]()

**NullTrail** is an autonomous, high-performance browser privacy engine that intercepts, scrubs, and cleanses the web in real-time. It seamlessly merges the capabilities of *Don't Track Me Google*, *ClearURLs*, and *FastForward* to remove tracking parameters, bypass redirect middlemen, block analytical beacons, and auto-reject cookie consent forms—all while running silently in the background.

This version is a fully optimized, audited, and refactored release of NullTrail, designed from first principles to optimize memory usage, rendering speed, and network efficiency.

---

## 🚀 Key Optimizations & Improvements (v14.0.0-optimized)

### 1. 🛡️ Unified API Hooking (Memory & CPU Consolidation)
In previous versions, analytical APIs and network interfaces (such as `window.fetch`, `XMLHttpRequest`, `Navigator.prototype.sendBeacon`, and `HTMLImageElement.prototype.src`) were overridden multiple times across different closure scopes. This nesting created multiple layers of execution wrappers, increasing call stack overhead and risk of infinite loops.
* **Consolidated Descriptors:** All network wrappers are consolidated into exactly **one** property descriptor/method proxy per API.
* **Zero Stack Bloat:** All blockers share a unified match machine, speeding up hot-path operations like image and fetch loading.

### 2. 🐛 Safe URL Decoding (No Delimiter Corruption or URI Errors)
Previously, URL validation would call `decodeURI` directly on raw link strings. This introduced two critical failure modes:
1. It crashed on malformed percentage-encoded URLs (e.g., URLs containing literal `%` characters that aren't valid hexadecimal encodings), bypassing the scrubbing logic entirely.
2. It prematurely decoded encoded delimiters (like `%3F` for `?` or `%26` for `&`) inside redirection query parameters. This corrupted the URL structure and caused native URL parsers to misidentify the query arguments.
* **The Fix:** Raw URLs are parsed safely using the browser's native `new URL` constructor first, and parameter values are decoded individually only when necessary.

### 3. 🔒 Safe & Sandboxed Local Storage Fallbacks
If run in an environment without privileged `GM_setValue` / `GM_getValue` managers, NullTrail fell back to writing the entire 300KB ClearURLs rules database into the site's own `localStorage`. This presented serious security and resource issues:
1. It leaked user configuration, whitelisted domains, and usage stats to the website's own scripts, violating privacy.
2. It heavily consumed the website's 5MB `localStorage` quota, breaking page functionality on heavy sites.
* **The Fix:** The script is optimized to **never** save the massive rule cache in a webpage's local storage. Only tiny, non-sensitive options like `globalStatus` are written, while rules remain securely in memory.

### 4. 📋 Smart Clipboard & Selection-Safe Text Copying
The legacy copy listener intercepted any copy event inside a link and replaced the entire clipboard text with the link's URL. This broke standard browser functionality, preventing users from copying text fragments inside links.
* **The Fix:** Redesigned from scratch:
  * If the user selects exactly a URL string, the clipboard receives the fully sanitized URL.
  * If the user copies a rich text selection spanning across links, it clones the selection and sanitizes **only the underlying link targets (`href`)** in both plain text and HTML formats, keeping the selected text fully intact.

### 5. ⚡ Automated & Multi-Step Cookie Consent Rejection
Previously, a single global boolean `_consentClicked` stopped the auto-reject engine after clicking one button. This failed to handle modern multi-step consent dialogs or dynamic, newly rendered banners.
* **The Fix:** Implemented a modern `WeakSet` of clicked elements. This allows the script to handle dynamic forms, newly spawned overlays, or sub-dialog rejection buttons perfectly.

### 6. 🌐 Enhanced Rule Syncing & Failovers
* **Failover Mirroring:** Added the official GitLab raw repository to `RULE_URLS` and `HASH_URLS` as a fallback. If the primary `clearurls.xyz` domain is down or rate-limited, NullTrail automatically falls back to GitLab to update rule definitions seamlessly.

### 7. 🎨 Zero-Jargon User Friendly Dashboard
All technical, developer-centric terminology in the GUI has been redesigned to be fully accessible and friendly to non-technical users, without changing any of the robust underlying variables:
* *Before:* "SERP parameter cleanup" ➔ **After:** "Clean Search Engine Result Links"
* *Before:* "Block GA/GTM beacons" ➔ **After:** "Block Web Analytics & Tracking Beacons"
* *Before:* "Block Privacy Sandbox APIs" ➔ **After:** "Block Google Ad Interest Tracking"
* *Before:* "Strip anchor ping" ➔ **After:** "Block Link Click Auditing & Beacons"
* *Before:* "Add rel=noopener" ➔ **After:** "Secure Multi-tab Browsing"

### 8. 🛠️ Robust isolated-world bindings
Corrected domain-specific bypass rules (such as `xlink.cc`) that looked for global variables (like `bootstrapData`) in the isolated userscript scope. The code now safely bridges boundaries via `unsafeWindow` where available.

---

## 📦 Installation

1. Install a userscript manager like [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/) in your browser.
2. Click on the raw file link of `NullTrail.user.js` in this repository or copy and paste it as a new userscript in your manager.
3. Save, and enjoy a cleaner, safer, and faster web!

---

## ⚙️ Keyboard Shortcuts

* **`Alt + Shift + N`**: Toggle NullTrail protection active state on the current site.
* **`Alt + Shift + D`**: Open or close the interactive settings dashboard.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
