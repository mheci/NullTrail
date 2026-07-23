// Production metadata guard — verifies release-critical consistency:
// version strings agree across userscript/README/CHANGELOG, update URLs are
// well-formed, and required grants/directives are present.
"use strict";
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const script = fs.readFileSync(path.join(root, "NullTrail.user.js"), "utf8");
const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
const changelog = fs.readFileSync(path.join(root, "CHANGELOG.md"), "utf8");

const failures = [];
function ok(cond, name) {
    if (cond) { console.log("  PASS  " + name); }
    else { console.log("  FAIL  " + name); failures.push(name); }
}

const metaBlock = script.slice(0, script.indexOf("==/UserScript=="));
const version = /\/\/ @version\s+(\S+)/.exec(metaBlock);
ok(!!version, "@version present (got " + (version && version[1]) + ")");
const v = version[1];

ok(readme.includes("Version-" + v + "-teal"), "README badge matches @version " + v);
const changelogTop = /## \[(\d+\.\d+\.\d+)\]/.exec(changelog);
ok(changelogTop && changelogTop[1] === v, "CHANGELOG top entry matches @version (got " + (changelogTop && changelogTop[1]) + ")");
ok(script.includes("\"v" + v + "\""), "dashboard header string matches @version");

const up = /\/\/ @updateURL\s+(\S+)/.exec(metaBlock);
const dl = /\/\/ @downloadURL\s+(\S+)/.exec(metaBlock);
ok(!!up && up[1] === "https://raw.githubusercontent.com/mheci/NullTrail/main/NullTrail.user.js", "@updateURL points at canonical raw file");
ok(!!dl && dl[1] === up[1], "@downloadURL matches @updateURL (self-update works)");
ok(/\/\/ @run-at\s+document-start/.test(metaBlock), "@run-at document-start");
ok(/\/\/ @noframes/.test(metaBlock), "@noframes present (top-frame only)");
ok(/\/\/ @grant\s+unsafeWindow/.test(metaBlock), "@grant unsafeWindow present");
ok(/\/\/ @grant\s+GM_xmlhttpRequest/.test(metaBlock), "@grant GM_xmlhttpRequest present");
ok(/\/\/ @connect\s+rules1\.clearurls\.xyz/.test(metaBlock) && /\/\/ @connect\s+rules2\.clearurls\.xyz/.test(metaBlock), "@connect rules feeds present");
ok(script.indexOf("warmupTargetServer") === -1, "speculative warmup fully removed");
ok((script.match(/v2\.4\.0/g) || []).length >= 1, "v2.4.0 annotations present");

// v2.6.0 guards
ok(/\/\/ @match\s+\*:\/\/\*\.cdn\.ampproject\.org\/\*/.test(metaBlock), "@match covers cdn.ampproject.org (AMP viewer unwrap active)");
ok(script.indexOf("recordRuleResult") !== -1 && script.indexOf("rulesLastResult") !== -1,
    "update checker reports truthful persisted results (v2.6.0 contract)");
ok(!/return decodeURIComponent\(m\[1\]\)/.test(script), "no unguarded decodeURIComponent on the sanitize hot path");
ok(!/if \(!u \|\| !\/duckduckgo\\\.com\$\//.test(script), "unwrapDDG host pattern has a domain boundary");

// v3.0.0 guards (proposal-merge release)
ok(script.indexOf("rulesCanary") !== -1 && script.indexOf("applyRulesVerified") !== -1, "boot canary self-test present (#3)");
ok(script.indexOf("hashQuorum") !== -1, "rule-feed quorum acceptance present (#5)");
ok(script.indexOf("maybeActivatePending") !== -1 && script.indexOf("rulesPending") !== -1, "staged rule rollout present (#4)");
ok(script.indexOf("PRECISION_RULE_OVERRIDES") !== -1, "precision rule overrides present (amazon th/psc)");
ok(script.indexOf("consentClassifierPass") !== -1, "multilingual consent classifier present (#10)");
ok(script.indexOf("IntersectionObserver") !== -1 && script.indexOf("drainIOPending") !== -1, "viewport-first cleaning present (#29)");
ok(script.indexOf("nt:bfcache") !== -1, "BFCache resurrection hook present (#28)");

console.log("\n== Summary ==");
if (failures.length) { console.log(failures.length + " failure(s)"); process.exit(1); }
console.log("All metadata checks passed");
process.exit(0);
