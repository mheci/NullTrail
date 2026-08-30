# NullTrail

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](LICENSE)
[![Latest release](https://img.shields.io/github/v/release/mheci/NullTrail)](https://github.com/mheci/NullTrail/releases/latest)
[![Type](https://img.shields.io/badge/Type-Userscript-orange.svg)](https://raw.githubusercontent.com/mheci/NullTrail/main/NullTrail.user.js)

NullTrail is a userscript that cleans tracking out of the links you click. It removes tracking parameters, unwraps redirect pages, blocks IP-logger and location trackers, and rejects cookie consent banners, all before they can add to your browsing profile.

It runs in the background on over 450 sites. Nothing is sent anywhere; rules, settings, and stats stay in your browser.

> Personal project, experimental. Anything can change or break without notice.

## Install

1. Install a userscript manager, such as [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/).
2. Open [this install link](https://raw.githubusercontent.com/mheci/NullTrail/main/NullTrail.user.js) and click Install or Confirm.
3. Done. Updates arrive automatically through your manager.

## What it does

- **Link cleaning** - strips tracking parameters such as `utm_*`, `fbclid`, and `gclid` from links before you click them
- **Redirect bypass** - unwraps search-engine redirect pages, AMP viewer pages, and link shorteners to take you straight to the destination
- **Tracker blocking** - stops known IP-logging and location-tracking resources, including images, fetch/XHR, beacons, and WebSockets
- **Cookie banner rejection** - auto-clicks Decline or Reject All inside genuine consent banners, in 12 languages, and only inside real consent dialogs
- **Site-specific shields** - optional unblockers that restore right-clicks and text copying on sites that break them, disabled by default
- **Dashboard** - press `Alt+Shift+D` for settings, per-site overrides, activity, stats, and rule feed health

## Keyboard shortcuts

| Shortcut | Action |
| --- | --- |
| `Alt+Shift+D` | Open or close the dashboard |
| `Alt+Shift+N` | Enable or disable protection on the current site |
| `Alt+Shift+C` | Copy a cleaned URL of the current page |

Shortcuts never fire while you are typing in a text field.

## Updates

The userscript self-updates through your manager. Every `v*` tag is validated by CI against the version it declares, and the release asset is published to the latest-release channel, so `releases/latest/download` always serves the newest stable build. Release notes for each version live on the [Releases](https://github.com/mheci/NullTrail/releases) page.

The rule database refreshes about every six days and only when the upstream hash changes. Each payload is SHA-256 verified and schema validated before use, with a staged rollout and one-click rollback, and the dashboard reports every check honestly: installed, already current, or failed with retry.

## Privacy

- Runs fully inside your browser; whitelist and settings never leave the machine
- No speculative connections: no prefetch, preconnect, or hover pinging
- Respects Content Security Policy and Trusted Types
- Pauses automatically on metered connections

Found a bug or want a feature? Open an [issue](https://github.com/mheci/NullTrail/issues).

## License

Released into the public domain under the Unlicense. See [LICENSE](LICENSE).