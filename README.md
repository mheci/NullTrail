# NullTrail — Universal Tracking & Redirect Scrubber

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-2.3.0-teal.svg)]()
[![Type](https://img.shields.io/badge/Type-Userscript-orange.svg)]()

**NullTrail** is an autonomous, high-performance browser privacy engine designed to make your web surfing clean, fast, and secure. 

It runs silently in the background, sanitizing hyperlinks, bypassing intermediate redirection pages, blocking analytical trackers, and auto-declining cookie consent banners—without slowing down your computer or breaking website layouts.

---

## ✨ Core Features

### 🛡️ Real-Time Tracking Parameter Stripping
Instantly cleanses web links by stripping tracking garbage and telemetry parameters (such as `utm_*`, `fbclid`, `gclid`, and search query logs) before you click, keeping your browsing profile private.

### 🔗 Middleman Redirect Bypass
Automatically resolves and bypasses intermediate tracking links (like search engine redirection wrappers or link shorteners) to take you directly to your actual destination instantly.

### 🔒 Suspicious Location Tracker Blocking
Hard-blocks known IP-logging and location-tracking services across standard web protocols, including images, background fetch/XHR, beacon telemetry, and WebSockets.

### 🍪 Automated Cookie Banner Rejection
Tired of pop-ups? NullTrail automatically detects cookie consent dialogues and clicks "Decline" or "Reject All" on your behalf, so you can surf undisturbed.

### ⚙️ Targeted Site-Specific Shields (On-Demand)
Websites often block standard right-clicks (context menus) or disable text copying. NullTrail includes **Target-Smart unblockers** that can be activated via the dashboard for specific sites:
* **Enable Context Menus:** Safely restores browser right-clicks without breaking website buttons.
* **Enable Text Copying:** Dynamically removes selection restrictions only on the text path you interact with, keeping the rest of the site UI and style fully intact.
* *Note: These features are disabled by default and only turn on where you explicitly request them.*

### 📉 Metered-Network Friendly — Zero Speculative Traffic
NullTrail never opens speculative connections: **no dns-prefetch, no preconnect, no prefetch — hovering a link costs exactly zero bytes.** All remaining background traffic is deliberate, capped, and paused automatically when your browser reports a metered connection or Data-Saver mode:
* **Rule updates** (~6-day cadence, only when changed) are skipped on metered links, unreachable servers back off gently (6h → 24h), and every feed payload is hash-verified and schema-validated before use.
* **Optional features that consume data** (server-side redirect resolution, AdNauseam-style noise) are opt-in, hover-gated, per-page capped, and metered-paused.
* Prefer full background access on a metered plan? Flip **"Save Mobile Data"** off in the dashboard.

### 🌐 Optional Server-Side Redirect Resolution (Opt-In)
For links that hide their destination behind a pure server-side redirect (no URL parameter to unwrap), NullTrail can resolve them on hover using anonymous, cookie-less background requests. Because this contacts the redirect server, it is **disabled by default**, pause automatically on metered connections, and capped per page — enable it from the dashboard ("Resolve Server Redirects").

---

## 📦 Installation

To install NullTrail, follow these quick steps:

1. **Install a Userscript Manager:** Install a standard manager extension in your browser, such as [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/).
2. **Install NullTrail:** Click [this direct install link](https://raw.githubusercontent.com/mheci/NullTrail/main/NullTrail.user.js) to open the installation page in your userscript manager, then click **Install** or **Confirm**.
3. **Automatic Updates:** NullTrail is configured to check for updates and update itself automatically.

---

## ⌨️ Keyboard Shortcuts

Take control of your privacy with simple keyboard shortcuts anywhere on the web:

* **`Alt + Shift + D`**: Open or close the interactive **NullTrail Dashboard** to adjust settings.
* **`Alt + Shift + N`**: Quick-toggle protection state (Enable/Disable) on the current website.

---

## 🔒 Built with Privacy in Mind

* **100% Sandboxed & Local:** NullTrail operates entirely inside your browser. Your Whitelist and custom settings never leave your machine.
* **Zero Speculative Connections:** No prefetching, no preconnecting, no hover pinging — your bandwidth and your browsing intentions stay yours.
* **No Local Storage Abuse:** Unlike other scripts, NullTrail does not write massive databases to website local storage, preventing websites from tracking your preferences or hitting storage quotas.
* **CSP & Trusted Types Compliant:** Built to respect and comply with modern browser security policies (such as Content Security Policy and Trusted Types), ensuring zero browser errors.

---

## 📄 License

This project is free and unencumbered software released into the public domain under The Unlicense - see the [LICENSE](LICENSE) file for details.
