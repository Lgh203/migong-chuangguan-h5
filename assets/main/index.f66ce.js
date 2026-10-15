window.__require = function r(e, t, n) {
function o(u, p) {
if (!t[u]) {
if (!e[u]) {
var c = u.split("/");
c = c[c.length - 1];
if (!e[c]) {
var f = "function" == typeof __require && __require;
if (!p && f) return f(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + u + "'");
}
u = c;
}
var a = t[u] = {
exports: {}
};
e[u][0].call(a.exports, function(r) {
return o(e[u][1][r] || r);
}, a, a.exports, r, e, t, n);
}
return t[u].exports;
}
for (var i = "function" == typeof __require && __require, u = 0; u < n.length; u++) o(n[u]);
return o;
}({
app: [ function(r, e) {
"use strict";
cc._RF.push(e, "e76ecdtx3JA75/GFOFUgkz0", "app");
r("./resources/PPSDK/framework/Application");
cc._RF.pop();
}, {
"./resources/PPSDK/framework/Application": void 0
} ]
}, {}, [ "app" ]);