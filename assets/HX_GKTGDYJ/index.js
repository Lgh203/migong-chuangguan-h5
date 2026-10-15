window.__require = function t(e, i, o) {
function a(n, s) {
if (!i[n]) {
if (!e[n]) {
var l = n.split("/");
l = l[l.length - 1];
if (!e[l]) {
var c = "function" == typeof __require && __require;
if (!s && c) return c(l, !0);
if (r) return r(l, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = l;
}
var h = i[n] = {
exports: {}
};
e[n][0].call(h.exports, function(t) {
return a(e[n][1][t] || t);
}, h, h.exports, t, e, i, o);
}
return i[n].exports;
}
for (var r = "function" == typeof __require && __require, n = 0; n < o.length; n++) a(o[n]);
return a;
}({
HX_GKTGDYJ_AssetsManager: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "752d2TVbtlNGrt6ck1N+osZ", "HX_GKTGDYJ_AssetsManager");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.AssetsManager = void 0;
var o = t("./HX_GKTGDYJ_DataManager"), a = function() {
function t() {}
t.projectName = o.default.getInstance().name;
t.m_resBuffer = [];
return t;
}();
i.AssetsManager = a;
cc._RF.pop();
}, {
"./HX_GKTGDYJ_DataManager": "HX_GKTGDYJ_DataManager"
} ],
HX_GKTGDYJ_AudioManager: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "fe59751B7dPK7JkPoJygmO9", "HX_GKTGDYJ_AudioManager");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, o) {
var a, r = arguments.length, n = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, i, o); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (n = (r < 3 ? a(n) : r > 3 ? a(e, i, n) : a(e, i)) || n);
return r > 3 && n && Object.defineProperty(e, i, n), n;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("./HX_GKTGDYJ_DataManager"), s = cc._decorator, l = s.ccclass, c = (s.property, 
function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.playMusic = function(t) {
if (PPSDK.musicState) return PPSDK.playMusic("audio/" + t, n.default.getInstance().name);
};
e.playAudio = function(t) {
if (PPSDK.sfxState) return PPSDK.playSfx("audio/" + t, n.default.getInstance().name);
};
e.playVibrate = function(t) {
void 0 === t && (t = !1);
if (PPSDK.vibrateState) return PPSDK.vibrate(t);
};
e.audio_buffer = [];
return r([ l ], e);
}(cc.Component));
i.default = c;
cc._RF.pop();
}, {
"./HX_GKTGDYJ_DataManager": "HX_GKTGDYJ_DataManager"
} ],
HX_GKTGDYJ_DataManager: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "fe111TvO+ZOQYT4BsU5gb7g", "HX_GKTGDYJ_DataManager");
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = function() {
function t() {
this.puzzleDataFile = "Data/mapdata";
this.ycdata1 = null;
this.ycdata2 = null;
this.mode = 0;
this.name = "HX_GKTGDYJ";
this.jsq = null;
this.user = null;
this.rank = [];
}
t.getInstance = function() {
null == t._instance && (t._instance = new t());
return t._instance;
};
t.prototype.initArgs = function() {
var t = this;
null == this.jsq && (this.jsq = setInterval(function() {
t.sytime();
}, 1e3));
};
t.prototype.loadData = function(t) {
var e = this;
if (0 == t) {
if (null != this.ycdata1) {
this._allPuzzledatas = this.ycdata1;
console.log("000");
return;
}
} else if (null != this.ycdata2) {
this._allPuzzledatas = this.ycdata2;
console.log("111");
return;
}
this.puzzleDataFile.length > 0 && cc.assetManager.loadBundle(this.name, function(i, o) {
i ? console.log(i) : o.load(e.puzzleDataFile + t, cc.Asset, function(t, i) {
e.onMapDataFinish(t, i);
});
});
};
t.prototype.getRemoteData = function() {};
t.prototype.getRandomInt = function(t, e) {
return Math.floor(Math.random() * (e - t + 1)) + t;
};
t.prototype.onMapDataFinish = function(t, e) {
if (t) cc.error(t); else {
var i = e.text;
this._allPuzzledatas = JSON.parse(i);
}
};
t.prototype.getCurrentLevelDataString = function() {
var t = this.getCurrentLevelIndex();
return t >= 0 && t < this._allPuzzledatas.length ? this._allPuzzledatas[t] : t >= this._allPuzzledatas.length ? this._allPuzzledatas[this.getRandomInt(0, this._allPuzzledatas.length - 1)] : this._allPuzzledatas[0];
};
t.prototype.getCurrentLevelIndex = function() {
var t = cc.sys.localStorage.getItem(this.name + "level_index" + this.mode);
if (t && t.length > 0) return parseInt(t);
cc.sys.localStorage.setItem(this.name + "level_index" + this.mode, "0");
return 0;
};
t.prototype.nextLevelAction = function() {
var t = cc.sys.localStorage.getItem(this.name + "level_index" + this.mode);
if (t && t.length > 0) {
var e = parseInt(t) + 1;
cc.sys.localStorage.setItem(this.name + "level_index" + this.mode, e.toString());
return e;
}
cc.sys.localStorage.setItem(this.name + "level_index" + this.mode, "0");
return 0;
};
t.prototype.specifyLevelAction = function(t) {
cc.sys.localStorage.setItem(this.name + "level_index" + this.mode, t.toString());
};
t.prototype.cleanLevelIndex = function() {
cc.sys.localStorage.setItem(this.name + "level_index" + this.mode, "0");
};
t.prototype.propBackOut = function(t) {
t.scale = 0;
cc.tween(t).to(.2, {
scale: 1
}, {
easing: "backOut"
}).start();
};
t.prototype.propBackIn = function(t) {
cc.tween(t).to(.19, {
scale: 0
}, {
easing: "backIn"
}).start();
};
t.prototype.sytime = function() {
var t = Math.floor(new Date().getTime() / 1e3), e = cc.sys.localStorage.getItem(this.name + "tltime"), i = cc.sys.localStorage.getItem(this.name + "tili");
if (0 != Number(e) && 5 != Number(i)) {
var o = Number(e) - t;
if (o <= 0) {
var a = Math.floor(Math.abs(o) / 300);
Number(i) + 1 + a >= 5 ? cc.sys.localStorage.setItem(this.name + "tili", 5) : cc.sys.localStorage.setItem(this.name + "tili", Number(i) + 1 + a);
i = cc.sys.localStorage.getItem(this.name + "tili");
Number(i) >= 5 ? cc.sys.localStorage.setItem(this.name + "tltime", 0) : cc.sys.localStorage.setItem(this.name + "tltime", Number(e) + 300);
}
}
};
t.prototype.secondToTime = function(t) {
return {
minute: Math.floor(t / 60),
second: t % 60
};
};
t.prototype.secondToStr = function(t) {
t < 0 && (t = 0);
var e = this.secondToTime(t), i = e.minute, o = e.second;
return i + ":" + (o < 10 ? "0" + o : o);
};
t.prototype.setScore = function(t) {
window.wx && wx.postMessage({
event: "setScore",
score: t
});
};
t.prototype.getRank = function() {
window.wx && wx.postMessage({
event: "getRank",
callFunc: function(t) {
console.log(t);
}
});
};
t._instance = null;
return t;
}();
i.default = o;
cc._RF.pop();
}, {} ],
HX_GKTGDYJ_EditGameView: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "80ff3sN7s9OX6heatRfswQT", "HX_GKTGDYJ_EditGameView");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, o) {
var a, r = arguments.length, n = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, i, o); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (n = (r < 3 ? a(n) : r > 3 ? a(e, i, n) : a(e, i)) || n);
return r > 3 && n && Object.defineProperty(e, i, n), n;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("./HX_GKTGDYJ_GameMapData"), s = cc._decorator, l = s.ccclass, c = s.property, h = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.default_size_arr = [ [ 9, 15 ], [ 15, 25 ], [ 21, 35 ], [ 30, 50 ], [ 42, 70 ] ];
e.default_color_arr = [ "#1ba784", "#ed5126", "#2A52BE", "#96c24e", "#f9595c", "#fc8c23", "#4A7856", "#C77DFF", "#577590", "#F9C74F", "#43AA8B", "#E63946", "#4CC9F0", "#194B96", "#FFD166", "#7209B7", "#F72585" ];
e.map_data = null;
e.dataString = null;
e.runoutArray = [];
e.color_mode = 0;
e.gird_display_mode = 1;
e.animate_gird_len = 4;
e.animate_duration = .01;
e.grapGrid = null;
e.bgError = null;
e.messageNode = null;
e.total_dt = 0;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_START, function(t) {
this.onTouchStart(t);
}, this);
};
e.prototype.setGameViewDisplay = function(t) {
this.dataString = t;
this.initMapData();
this.node.active = !0;
this.updateDisplay();
};
e.prototype.update = function(t) {
this.total_dt += t;
if (this.total_dt > this.animate_duration) {
this.total_dt = 0;
this.updateRunoutDisplay();
}
};
e.prototype.onBackBtnClick = function(t, e) {
console.log("onBackBtnClick: " + e);
this.node.active = !1;
};
e.prototype.onDownloadBtnClick = function(t, e) {
console.log("onDownloadBtnClick: " + e);
this.saveToJsonFile();
};
e.prototype.onColorBtnClick = function(t, e) {
console.log("onColorBtnClick: " + e);
var i = parseInt(e);
this.color_mode = i;
this.updateDisplay();
};
e.prototype.onGirdDisplayBtnClick = function(t, e) {
console.log("onGirdDisplayBtnClick: " + e);
var i = parseInt(e);
this.gird_display_mode = i;
this.updateDisplay();
};
e.prototype.onResetBtnClick = function(t, e) {
console.log("onResetBtnClick: " + e);
this.initMapData();
this.updateDisplay();
};
e.prototype.onAutoNextAction = function(t, e) {
console.log("onAutoNextAction: " + e);
var i = this.map_data.getRandomNextArrowOnePointIndex();
this.userAction(i);
};
e.prototype.initMapData = function() {
this.map_data = n.default.CreateMapByStr(this.dataString);
this.runoutArray = new Array();
};
e.prototype.updateDisplay = function() {
this.updateMapDisplay();
};
e.prototype.updateRunoutDisplay = function() {
if (this.runoutArray.length > 0) {
this.updateMapDisplay();
this.drawRunoutPathArrow(this.map_data.getArrowDataArray());
}
};
e.prototype.updateMapDisplay = function() {
this.grapGrid.node.active = !0;
this.grapGrid.clear();
1 == this.gird_display_mode && this.drawGirdPoint();
this.drawPathArrow(this.map_data.getArrowDataArray());
};
e.prototype.userAction = function(t) {
if (this.map_data.isViablePositionIndex(t)) {
var e = this.map_data.userAction(t);
if (e >= 0) {
var i = this.map_data.arrowRunOut(e);
null != i && this.runoutArray.push(i);
this.updateDisplay();
} else if (-1 == e) ; else if (-99 == e) {
this.bgError.active = !0;
this.scheduleOnce(function() {
this.bgError.active = !1;
}, .3);
cc.log("箭头有冲突，无法挪开箭头！！！");
}
}
if (this.map_data.hasFinished()) {
this.showMessage("游戏成功！");
cc.log("游戏成功通关！！！");
}
};
e.prototype.onTouchStart = function(t) {
console.log("Mouse onTouchStart:");
var e = this.grapGrid.node.convertToNodeSpaceAR(t.getLocation()), i = this.locationGirdIndex(e);
-1 != i && this.userAction(i);
};
e.prototype.locationGirdIndex = function(t) {
var e = this.map_data.width, i = this.map_data.height, o = e, a = this.grapGrid.node.width, r = this.grapGrid.node.height, n = Math.min(.98 * a / o, .33 * a), s = n, l = .5 * (a - n * e), c = .5 * (r - s * i), h = new cc.Vec2(-this.grapGrid.node.width / 2, this.grapGrid.node.height / 2), d = t.x - h.x, u = h.y - t.y, p = Math.floor((d - l) / n), g = Math.floor((u - c) / s);
return p >= 0 && p < e && g >= 0 && g < i ? g * e + p : -1;
};
e.prototype.drawGirdPoint = function() {
if (null != this.grapGrid) {
new cc.Color().fromHEX("#2EA5FF");
var t = this.map_data.width, e = this.map_data.height, i = t, o = this.grapGrid.node.width, a = this.grapGrid.node.height, r = Math.min(.98 * o / i, .33 * o), n = r, s = .5 * (o - r * t), l = .5 * (a - n * e), c = new cc.Vec2(-this.grapGrid.node.width / 2, this.grapGrid.node.height / 2), h = 3;
Math.max(t, e) >= 30 && (h = 2);
this.grapGrid.strokeColor = cc.Color.GRAY.clone();
this.grapGrid.fillColor = cc.Color.GRAY.clone();
this.grapGrid.lineWidth = h;
for (var d = 0; d < e; d++) for (var u = 0; u < t; u++) {
var p = n * (d + .5) + l, g = r * (u + .5) + s + c.x, m = c.y - p, y = h;
this.grapGrid.circle(g, m, y);
this.grapGrid.fill();
}
this.grapGrid.stroke();
} else cc.log("grapGrid is null drawGrid");
};
e.prototype.drawPathArrow = function(t) {
if (null != this.grapGrid) {
new cc.Color().fromHEX("#2EA5FF");
var e = this.map_data.width, i = this.map_data.height, o = e, a = this.grapGrid.node.width, r = this.grapGrid.node.height, n = Math.min(.98 * a / o, .33 * a), s = n, l = .5 * (a - n * e), c = .5 * (r - s * i), h = new cc.Vec2(-this.grapGrid.node.width / 2, this.grapGrid.node.height / 2), d = Math.min(Math.max(.2 * n, 5), 10), u = Math.min(Math.max(.25 * n, 6), 12);
this.grapGrid.strokeColor = cc.Color.BLACK.clone();
this.grapGrid.fillColor = cc.Color.BLACK.clone();
this.grapGrid.lineWidth = d;
for (var p = 0; p < t.length; p++) {
var g = t[p], m = g.path, y = g.direction;
if (!g.has_runout) {
if (1 == this.color_mode) {
var f = this.default_color_arr[p % this.default_color_arr.length], _ = new cc.Color().fromHEX(f);
this.grapGrid.strokeColor = _;
this.grapGrid.fillColor = _;
}
for (var v = 0; v < m.length; v++) {
var C = m[v], N = C[0], w = s * (C[1] + .5) + c, G = n * (N + .5) + l + h.x, B = h.y - w;
0 == v ? this.grapGrid.moveTo(G, B) : this.grapGrid.lineTo(G, B);
this.grapGrid.stroke();
if (v == m.length - 1) {
var D = this.calcArrowPoints(y, new cc.Vec2(G, B), u);
this.grapGrid.moveTo(G, B);
this.grapGrid.lineTo(D[0].x, D[0].y);
this.grapGrid.lineTo(D[1].x, D[1].y);
this.grapGrid.close();
this.grapGrid.fill();
}
this.grapGrid.stroke();
}
}
}
} else cc.log("grapGrid is null drawGrid");
};
e.prototype.calcArrowPoints = function(t, e, i) {
var o = cc.v2(e.x, e.y), a = cc.v2(e.x, e.y), r = i / 2;
switch (t) {
case 0:
o.x -= r;
o.y -= i;
a.x += r;
a.y -= i;
break;

case 1:
o.x -= i;
o.y -= r;
a.x -= i;
a.y += r;
break;

case 2:
o.x -= r;
o.y += i;
a.x += r;
a.y += i;
break;

case 3:
o.x += i;
o.y -= r;
a.x += i;
a.y += r;
}
return [ o, a ];
};
e.prototype.drawRunoutPathArrow = function(t) {
if (null != this.grapGrid) {
var e = this.map_data.width, i = this.map_data.height, o = e, a = this.grapGrid.node.width, r = this.grapGrid.node.height, n = Math.min(.98 * a / o, .33 * a), s = n, l = .5 * (a - n * e), c = .5 * (r - s * i), h = new cc.Vec2(-this.grapGrid.node.width / 2, this.grapGrid.node.height / 2), d = Math.min(Math.max(.2 * n, 5), 10), u = Math.min(Math.max(.25 * n, 6), 12);
this.animate_gird_len;
this.grapGrid.strokeColor = cc.Color.BLACK.clone();
this.grapGrid.fillColor = cc.Color.BLACK.clone();
this.grapGrid.lineWidth = d;
for (var p = 0; p < t.length; p++) {
var g = t[p];
if (-1 != this.runoutArray.indexOf(g)) {
var m = g.path, y = g.direction, f = g.animation_index;
g.animation_index = f + 1;
var _ = Math.floor(f / this.animate_gird_len), v = f % this.animate_gird_len / this.animate_gird_len;
if (1 == this.color_mode) {
var C = this.default_color_arr[p % this.default_color_arr.length], N = new cc.Color().fromHEX(C);
this.grapGrid.strokeColor = N;
this.grapGrid.fillColor = N;
}
if (_ < m.length - 1) for (var w = _; w < m.length; w++) {
var G = m[w], B = m[w + 1], D = G[0], S = G[1];
if (w == _) {
var I = this.map_data.getDirection(G, B);
D = (T = this.getSubGirdPoint(G, v, I))[0];
S = T[1];
} else if (w == m.length - 1) {
var T, b = f / this.animate_gird_len;
D = (T = this.getSubGirdPoint(G, b, y))[0];
S = T[1];
}
var A = s * (S + .5) + c, x = n * (D + .5) + l + h.x, P = h.y - A;
w == _ ? this.grapGrid.moveTo(x, P) : this.grapGrid.lineTo(x, P);
this.grapGrid.stroke();
if (w == m.length - 1) {
var M = this.calcArrowPoints(y, new cc.Vec2(x, P), u);
this.grapGrid.moveTo(x, P);
this.grapGrid.lineTo(M[0].x, M[0].y);
this.grapGrid.lineTo(M[1].x, M[1].y);
this.grapGrid.close();
this.grapGrid.fill();
}
this.grapGrid.stroke();
} else if (_ >= m.length - 1) {
D = (G = m[m.length - 1])[0], S = G[1];
var k = f / this.animate_gird_len - m.length + 1, z = f / this.animate_gird_len, O = this.getSubGirdPoint(G, k, y), L = this.getSubGirdPoint(G, z, y), E = O[0], R = O[1], F = L[0], H = L[1], j = s * (R + .5) + c, V = n * (E + .5) + l + h.x, K = h.y - j, X = s * (H + .5) + c, Y = n * (F + .5) + l + h.x, J = h.y - X;
this.grapGrid.moveTo(V, K);
this.grapGrid.lineTo(Y, J);
this.grapGrid.stroke();
M = this.calcArrowPoints(y, new cc.Vec2(Y, J), u);
this.grapGrid.moveTo(Y, J);
this.grapGrid.lineTo(M[0].x, M[0].y);
this.grapGrid.lineTo(M[1].x, M[1].y);
this.grapGrid.close();
this.grapGrid.fill();
this.grapGrid.stroke();
var U = new cc.Vec2(V, K);
if (!this.grapGrid.node.getBoundingBox().contains(U)) {
this.runoutArray.splice(this.runoutArray.indexOf(g), 1);
this.updateMapDisplay();
}
}
}
}
} else cc.log("grapGrid is null drawGrid");
};
e.prototype.getSubGirdPoint = function(t, e, i) {
return 0 == i ? [ t[0], t[1] - e ] : 1 == i ? [ t[0] + e, t[1] ] : 2 == i ? [ t[0], t[1] + e ] : 3 == i ? [ t[0] - e, t[1] ] : void 0;
};
e.prototype.showMessage = function(t) {
this.messageNode.active = !0;
this.messageNode.getChildByName("msgLabel").getComponent(cc.Label).string = t;
this.scheduleOnce(function() {
this.messageNode.active = !1;
}, 1);
};
e.prototype.saveToJsonFile = function() {
var t = {
puzzle_data: this.dataString
}, e = JSON.stringify(t, null, 2);
if (cc.sys.isNative) {
var i = jsb.fileUtils.getWritablePath() + "mapData.json";
jsb.fileUtils.writeStringToFile(e, i);
cc.log("数据已保存到: " + i);
} else {
var o = new Blob([ e ], {
type: "application/json"
}), a = URL.createObjectURL(o), r = document.createElement("a");
r.href = a;
r.download = "mapdata.json";
r.click();
URL.revokeObjectURL(a);
cc.log("数据已下载为 mapData.json");
}
};
r([ c(cc.Graphics) ], e.prototype, "grapGrid", void 0);
r([ c(cc.Node) ], e.prototype, "bgError", void 0);
r([ c(cc.Node) ], e.prototype, "messageNode", void 0);
return r([ l ], e);
}(cc.Component);
i.default = h;
cc._RF.pop();
}, {
"./HX_GKTGDYJ_GameMapData": "HX_GKTGDYJ_GameMapData"
} ],
HX_GKTGDYJ_GameMapData: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "bd839yG8MdCDK0FLX1dP8xF", "HX_GKTGDYJ_GameMapData");
var o = this && this.__decorate || function(t, e, i, o) {
var a, r = arguments.length, n = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, i, o); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (n = (r < 3 ? a(n) : r > 3 ? a(e, i, n) : a(e, i)) || n);
return r > 3 && n && Object.defineProperty(e, i, n), n;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("./HX_GKTGDYJ_DataManager"), r = cc._decorator, n = r.ccclass, s = (r.property, 
function() {
function t() {
this.width = 0;
this.height = 0;
this.currentDataString = "";
this.user_data = [];
this.default_data = new Array();
this.arrowDataArray = [];
this.max_life = 3;
this.current_life = 3;
this.sbarry = [];
}
e = t;
t.CreateObjectByStr = function(t) {
if (t.length < 1) return null;
var e = t.split(";");
if (3 == e.length) {
for (var i = parseInt(e[0]), o = parseInt(e[1]), a = new Array(), r = e[2].split("|"), n = 0; n < r.length; n++) {
var s = r[n].split(",");
if (s.length > 0) {
for (var l = new Array(), c = 0; c < s.length; c++) {
var h = parseInt(s[c]), d = Math.floor(h % i), u = Math.floor(h / i);
l.push([ d, u ]);
}
a.push(l);
}
}
return {
width: i,
height: o,
arrow_arr: a
};
}
return null;
};
t.CreateMapByStr = function(t) {
if (null == t || t.length < 1) return null;
var i = t.split(";");
if (3 == i.length) {
var o = parseInt(i[0]), a = parseInt(i[1]), r = new e();
r.currentDataString = t;
r.width = o;
r.height = a;
r.loadData();
return r;
}
console.error("CreateMapByArgs: data_str format error!");
return null;
};
t.prototype.loadData = function(t) {
void 0 === t && (t = !0);
this.user_data = new Array();
this.arrowDataArray = new Array();
for (var e = 0; e < this.height; e++) {
this.user_data.push([]);
for (var i = 0; i < this.width; i++) this.user_data[e].push(0);
}
var o = this.currentDataString.split(";");
if (3 == o.length) {
for (var a = parseInt(o[0]), r = (parseInt(o[1]), new Array()), n = o[2].split("|"), s = 0; s < n.length; s++) {
var l = n[s].split(",");
if (l.length > 0) {
for (var c = new Array(), h = 0; h < l.length; h++) {
var d = parseInt(l[h]);
i = Math.floor(d % a), e = Math.floor(d / a);
c.push([ i, e ]);
}
if (c.length >= 2) {
var u = {
path: c,
direction: this.getDirection(c[c.length - 2], c[c.length - 1]),
has_runout: !1,
animation_index: 0
};
r.push(u);
}
}
}
this.arrowDataArray = r;
}
this.updateUserDataFromArrowData();
this.default_data = this.copyData(this.user_data);
this.current_life = this.max_life;
};
t.prototype.isViablePosition = function(t, e) {
return t >= 0 && t < this.width && e >= 0 && e < this.height;
};
t.prototype.isViablePositionIndex = function(t) {
return t >= 0 && t < this.width * this.height;
};
t.prototype.printData = function() {
cc.log("user_data: " + this.user_data);
};
t.prototype.printArray = function(t) {
cc.log("=====printArray====");
for (var e = 0; e < t.length; e++) cc.log(t[e]);
};
t.prototype.isConnect = function(t, e, i, o) {
return !(t == i && e == o || t != i && e != o);
};
t.prototype.userAction = function(t) {
var e = Math.floor(t % this.width), i = Math.floor(t / this.width);
if (this.isViablePosition(e, i)) {
var o = this.user_data[i][e] - 1e4;
if (o >= 0 && o < this.arrowDataArray.length) {
var r = this.arrowDataArray[o], n = r.path, s = r.direction;
if (r.has_runout) return -1;
var l = n[n.length - 1];
if (this.canRunOut(l, s, this.user_data)) {
for (var c = 0; c < n.length; c++) this.user_data[n[c][1]][n[c][0]] = 0;
return o;
}
console.log(this.sbarry.length);
0 == a.default.getInstance().mode && this.current_life--;
return -99;
}
}
return -1;
};
t.prototype.getuser = function(t) {
var e = Math.floor(t % this.width), i = Math.floor(t / this.width);
if (this.isViablePosition(e, i)) {
var o = this.user_data[i][e] - 1e4;
if (o >= 0 && o < this.arrowDataArray.length) return o;
}
return -1;
};
t.prototype.getUserData = function(t, e) {
return this.isViablePosition(t, e) ? this.user_data[e][t] : 0;
};
t.prototype.getMaxLife = function() {
return this.max_life;
};
t.prototype.getCurrentLife = function() {
return this.current_life;
};
t.prototype.getTargetDataFormatString = function() {
new Array();
for (var t = new Array(), e = 0; e < this.arrowDataArray.length; e++) {
for (var i = this.arrowDataArray[e], o = i.path, a = (i.direction, new Array()), r = 0; r < o.length; r++) {
var n = o[r], s = n[0], l = n[1] * this.width + s;
a.push(l.toString());
}
t.push(a.join(","));
}
var c = this.width + ";" + this.height + ";" + t.join("|");
cc.log("========== getTargetDataFormatString: " + c);
return c;
};
t.prototype.getArrowDataArray = function() {
return this.arrowDataArray;
};
t.prototype.updateUserDataFromArrowData = function() {
for (var t = 0; t < this.height; t++) for (var e = 0; e < this.width; e++) this.user_data[t][e] = 0;
for (var i = 0; i < this.arrowDataArray.length; i++) {
var o = this.arrowDataArray[i], a = o.path;
if (!o.has_runout) for (var r = 0; r < a.length; r++) {
var n = a[r], s = n[0], l = n[1];
this.user_data[l][s] = 1e4 + i;
}
}
};
t.prototype.getRandomNextArrowOnePointIndex = function() {
for (var t = 0; t < this.arrowDataArray.length; t++) {
var e = this.arrowDataArray[t], i = e.path, o = e.direction;
if (!e.has_runout) {
var a = i[i.length - 1];
if (this.canRunOut(a, o, this.user_data)) return a[0] + a[1] * this.width;
}
}
return -1;
};
t.prototype.hasFailed = function() {
return this.current_life <= 0;
};
t.prototype.hasFinished = function() {
for (var t = 0; t < this.arrowDataArray.length; t++) {
var e = this.arrowDataArray[t];
e.path, e.direction;
if (!e.has_runout) return !1;
}
return !0;
};
t.prototype.testCurrentData = function(t, e, i) {
var o = this.copyData(t), a = new Array();
a.push(e);
for (var r = 0; r < i.length; r++) a.push(i[r]);
for (;0 != a.length; ) {
var n = !1;
for (r = 0; r < a.length; ) {
var s = a[r], l = s.path, c = s.direction, h = l[l.length - 1];
if (this.canRunOut(h, c, o)) {
this.arrowRunOut(l);
a.splice(r, 1);
n = !0;
} else r++;
}
if (!n) break;
}
return a.length;
};
t.prototype.getDirection = function(t, e) {
var i = t[0], o = t[1], a = e[0], r = e[1];
return i == a ? o > r ? 0 : 2 : o == r ? i > a ? 3 : 1 : -1;
};
t.prototype.canRunOut = function(t, e, i) {
if (!t || 2 != t.length) return !1;
var o = t[0], a = t[1], r = [];
if (0 == e) {
if (0 == a) return !0;
for (var n = a - 1; n >= 0; n--) {
(l = []).push(o);
l.push(n);
r.push(l);
if (i[n][o] > 0) {
this.sbarry = r;
return !1;
}
}
} else if (1 == e) {
if (o == this.width - 1) return !0;
for (var s = o + 1; s < this.width; s++) {
(l = []).push(s);
l.push(a);
r.push(l);
if (i[a][s] > 0) {
this.sbarry = r;
return !1;
}
}
} else if (2 == e) {
if (a == this.height - 1) return !0;
for (n = a + 1; n < this.height; n++) {
(l = []).push(o);
l.push(n);
r.push(l);
if (i[n][o] > 0) {
this.sbarry = r;
return !1;
}
}
} else if (3 == e) {
if (0 == o) return !0;
for (s = o - 1; s >= 0; s--) {
var l;
(l = []).push(s);
l.push(a);
r.push(l);
if (i[a][s] > 0) {
this.sbarry = r;
return !1;
}
}
}
return !0;
};
t.prototype.arrowRunOut = function(t) {
if (t < 0 || t >= this.arrowDataArray.length) return null;
var e = this.arrowDataArray[t];
e.has_runout = !0;
this.updateUserDataFromArrowData();
return e;
};
t.prototype.arrowRunOut2 = function(t) {
return t < 0 || t >= this.arrowDataArray.length ? null : this.arrowDataArray[t];
};
t.prototype.getCurrentEmptyPointArray = function(t) {
for (var e = new Array(), i = 0; i < this.height; i++) for (var o = 0; o < this.width; o++) 0 == t[i][o] && e.push([ o, i ]);
return e;
};
t.prototype.copyData = function(t) {
for (var e = new Array(), i = 0; i < this.height; i++) {
e.push([]);
for (var o = 0; o < this.width; o++) e[i].push(t[i][o]);
}
return e;
};
var e;
return e = o([ n ], t);
}());
i.default = s;
cc._RF.pop();
}, {
"./HX_GKTGDYJ_DataManager": "HX_GKTGDYJ_DataManager"
} ],
HX_GKTGDYJ_GameScene: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "a7b00jA+PZLZLN0vKJTwAmY", "HX_GKTGDYJ_GameScene");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, o) {
var a, r = arguments.length, n = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, i, o); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (n = (r < 3 ? a(n) : r > 3 ? a(e, i, n) : a(e, i)) || n);
return r > 3 && n && Object.defineProperty(e, i, n), n;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("./HX_GKTGDYJ_GameView"), s = cc._decorator, l = s.ccclass, c = s.property, h = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.default_size_arr = [ [ 9, 15 ], [ 15, 25 ], [ 21, 35 ], [ 30, 50 ], [ 42, 70 ] ];
e.map_data = null;
e.grapGrid = null;
e.gameView = null;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {
var t = this;
this.scheduleOnce(function() {
t.gameView.getComponent(n.default).initGameView();
t.gameView.getComponent(n.default).qjh = t.gameView.getComponent(n.default).grapGrid.node.height;
t.gameView.getComponent(n.default).qjw = t.gameView.getComponent(n.default).grapGrid.node.width;
console.log(t.gameView.getComponent(n.default).qjh, t.gameView.getComponent(n.default).qjw);
}, .1);
};
r([ c(cc.Graphics) ], e.prototype, "grapGrid", void 0);
r([ c(cc.Node) ], e.prototype, "gameView", void 0);
return r([ l ], e);
}(cc.Component);
i.default = h;
cc._RF.pop();
}, {
"./HX_GKTGDYJ_GameView": "HX_GKTGDYJ_GameView"
} ],
HX_GKTGDYJ_GameView: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c71039l7M1OxLRbAOcGFsH5", "HX_GKTGDYJ_GameView");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, o) {
var a, r = arguments.length, n = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, i, o); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (n = (r < 3 ? a(n) : r > 3 ? a(e, i, n) : a(e, i)) || n);
return r > 3 && n && Object.defineProperty(e, i, n), n;
}, n = this && this.__awaiter || function(t, e, i, o) {
return new (i || (i = Promise))(function(a, r) {
function n(t) {
try {
l(o.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
l(o.throw(t));
} catch (t) {
r(t);
}
}
function l(t) {
t.done ? a(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(n, s);
var e;
}
l((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var i, o, a, r, n = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return l([ t, e ]);
};
}
function l(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (i = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
n.label++;
return {
value: r[1],
done: !1
};

case 5:
n.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(a = n.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
n = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
n.label = r[1];
break;
}
if (6 === r[0] && n.label < a[1]) {
n.label = a[1];
a = r;
break;
}
if (a && n.label < a[2]) {
n.label = a[2];
n.ops.push(r);
break;
}
a[2] && n.ops.pop();
n.trys.pop();
continue;
}
r = e.call(t, n);
} catch (t) {
r = [ 6, t ];
o = 0;
} finally {
i = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var l = t("./HX_GKTGDYJ_AudioManager"), c = t("./HX_GKTGDYJ_DataManager"), h = t("./HX_GKTGDYJ_GameMapData"), d = cc._decorator, u = d.ccclass, p = d.property, g = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.default_size_arr = [ [ 9, 15 ], [ 15, 25 ], [ 21, 35 ], [ 30, 50 ], [ 42, 70 ], [ 30, 30 ], [ 42, 42 ], [ 32, 18 ], [ 48, 27 ] ];
e.default_color_arr = [ "#00d2fe", "#ff00e4", "#ff7800", "#00ff1c", "#ffafaf", "#ffffff", "#e51763", "#9d7fff", "#ffd3a7", "#9b9b9b", "#186a24" ];
e.map_data = null;
e.dataString = null;
e.runoutArray = [];
e.runoutArray2 = [];
e.color_mode = 1;
e.gird_display_mode = 1;
e.animate_gird_len = 4;
e.animate_duration = .01;
e.ljnum = 0;
e.grapGrid = null;
e.bgError = null;
e.succeedNode = null;
e.fuhuoNode = null;
e.fuhuoNode2 = null;
e.failedNode = null;
e.silder = null;
e.dqcolor = [];
e.grapGirdArray = [];
e.redidx = [];
e.qjscl = 1;
e.fps = 0;
e.qjh = 0;
e.qjw = 0;
e.clicknum = 0;
e.isqj = !0;
e.bcdian = [];
e.DanArray = [];
e.dianPool = new cc.NodePool();
e.djstime = 10;
e.isClick = !1;
e.isSuccess = !1;
e.isFuhuo = !1;
e.isFail = !1;
e.fhdjs = 5;
e.ys = 0;
e.djssound = 1;
e.djssound2 = 1.4;
e.isStrat = !1;
e.isStop = !1;
e.csdj = 0;
e.sbarr = [];
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_START, function(t) {
this.onTouchStart(t);
}, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.onTouchMove(t);
}, this);
this.node.on(cc.Node.EventType.TOUCH_END, function(t) {
this.onTouchEnd(t);
}, this);
this.node.getChildByName("TopNode").getChildByName("gk").on(cc.Node.EventType.TOUCH_END, function() {
this.csdj++;
this.csdj >= 15 && (this.nbcs.active = !0);
}, this);
cc.tween(this.node.getChildByName("tips")).to(.4, {
scale: 1
}).to(.4, {
scale: .8
}).union().repeatForever().start();
this.nbcs.active = !1;
this.csdj = 0;
};
e.prototype.initGameView = function() {
this.dataString = c.default.getInstance().getCurrentLevelDataString();
this.ljnum = 0;
this.qjscl = 1;
this.csdj = 0;
this.ys = 0;
this.isSuccess = !1;
this.isStop = !1;
this.isFuhuo = !1;
this.isFail = !1;
this.node.getChildByName("zoom").getChildByName("root").scale = 1;
this.node.getChildByName("zoom").getChildByName("root").x = 0;
this.node.getChildByName("zoom").getChildByName("root").y = 0;
this.silder.progress = 0;
if (1 == c.default.getInstance().mode) {
0 == c.default.getInstance().getCurrentLevelIndex() ? this.node.getChildByName("tip").active = !0 : this.node.getChildByName("tip").active = !1;
2 == c.default.getInstance().getCurrentLevelIndex() ? this.node.getChildByName("fdtip").active = !0 : this.node.getChildByName("fdtip").active = !1;
}
this.initMapData();
this.updateDisplay();
lieyou_SdkManager.hideBanner();
lieyou_SdkManager.gameBeginLevel(c.default.getInstance().getCurrentLevelIndex() + 1, "HX_GKTGDYJ_" + c.default.getInstance().mode);
};
e.prototype.setGameViewDisplay = function(t) {
this.dataString = t;
this.initMapData();
this.node.active = !0;
this.updateDisplay();
};
e.prototype.update = function(t) {
if (this.isStrat && !this.isStop) {
this.djssound2 += t;
this.djssound += t;
if (1 == c.default.getInstance().mode && !this.isFuhuo && !this.isFail && !this.isSuccess) {
this.djstime -= t;
if (this.djstime <= 10 && this.djssound2 >= 1.4) {
this.djssound2 = 0;
l.default.playAudio("djs");
}
if (this.djstime < 0) {
this.djstime = 0;
this.djssound = 1;
this.isFuhuo = !0;
this.fuhuoNode2.active = !0;
cc.tween(this.fuhuoNode2.getChildByName("root").getChildByName("djs")).to(.2, {
scale: 1.2
}).to(.2, {
scale: 1
}).delay(.6).to(.2, {
scale: 1.2
}).to(.2, {
scale: 1
}).delay(.6).to(.2, {
scale: 1.2
}).to(.2, {
scale: 1
}).delay(.6).to(.2, {
scale: 1.2
}).to(.2, {
scale: 1
}).delay(.6).to(.2, {
scale: 1.2
}).to(.2, {
scale: 1
}).start();
this.fhdjs = 5;
c.default.getInstance().propBackOut(this.fuhuoNode2.getChildByName("root"));
}
var e = Math.floor(this.djstime / 60), i = Math.floor(this.djstime) % 60;
this.node.getChildByName("TopNode").getChildByName("time").getComponentInChildren(cc.Label).string = i >= 10 ? "0" + e + ":" + i : "0" + e + ":0" + i;
}
if (1 == c.default.getInstance().mode && this.isFuhuo) {
this.fhdjs -= t;
if (this.djssound >= 1) {
this.djssound = 0;
l.default.playAudio("xintiao");
}
this.fuhuoNode2.getChildByName("root").getChildByName("djs").getComponent(cc.Label).string = "" + Math.ceil(this.fhdjs);
this.fuhuoNode2.getChildByName("root").getChildByName("jd").getComponent(cc.Sprite).fillRange = this.fhdjs / 5;
if (this.fhdjs <= 0) {
this.isFuhuo = !1;
this.isFail = !0;
this.onFail();
}
}
1 != c.default.getInstance().mode || this.isSuccess || (this.ys += t);
this.clicknum += t;
this.updateRunoutDisplay();
}
if (1 == c.default.getInstance().mode) if (this.succeedNode.active || this.failedNode.active) {
this.node.getChildByName("tl").active = !0;
var o = Math.floor(new Date().getTime() / 1e3), a = cc.sys.localStorage.getItem(c.default.getInstance().name + "tltime"), r = cc.sys.localStorage.getItem(c.default.getInstance().name + "tili");
if (0 != Number(a) && Number(r) < 5) {
var n = Number(a) - o;
this.node.getChildByName("tl").getChildByName("time").active = !0;
this.node.getChildByName("tl").getChildByName("time").getComponent(cc.Label).string = c.default.getInstance().secondToStr(n);
this.node.getChildByName("tl").getChildByName("num").getComponent(cc.Label).string = "" + Number(r);
} else {
this.node.getChildByName("tl").getChildByName("time").active = !1;
this.node.getChildByName("tl").getChildByName("num").getComponent(cc.Label).string = "" + Number(r);
}
} else this.node.getChildByName("tl").active = !1;
};
e.prototype.SilderScale = function() {
this.node.getChildByName("zoom").getChildByName("root").scale = this.silder.progress * (2 - this.qjscl) + 1;
var t = (this.node.getChildByName("zoom").getChildByName("root").scale - .7) * (this.node.getChildByName("zoom").width / 2), e = -(this.node.getChildByName("zoom").getChildByName("root").scale - .7) * (this.node.getChildByName("zoom").width / 2), i = (this.node.getChildByName("zoom").getChildByName("root").scale - .7) * (this.grapGrid.node.height / 2), o = -(this.node.getChildByName("zoom").getChildByName("root").scale - .7) * (this.grapGrid.node.height / 2);
this.node.getChildByName("fdtip").active = !1;
this.node.getChildByName("zoom").getChildByName("root").x > t && (this.node.getChildByName("zoom").getChildByName("root").x = t);
this.node.getChildByName("zoom").getChildByName("root").x < e && (this.node.getChildByName("zoom").getChildByName("root").x = e);
this.node.getChildByName("zoom").getChildByName("root").y > i && (this.node.getChildByName("zoom").getChildByName("root").y = i);
this.node.getChildByName("zoom").getChildByName("root").y < o && (this.node.getChildByName("zoom").getChildByName("root").y = o);
};
e.prototype.onBackBtnClick = function(t, e) {
console.log("onBackBtnClick: " + e);
l.default.playAudio("button");
cc.director.loadScene(c.default.getInstance().name + "_Main");
};
e.prototype.onColorBtnClick = function(t, e) {
console.log("onColorBtnClick: " + e);
var i = parseInt(e);
this.color_mode = i;
this.updateDisplay();
};
e.prototype.onGirdDisplayBtnClick = function(t, e) {
console.log("onGirdDisplayBtnClick: " + e);
var i = parseInt(e);
this.gird_display_mode = i;
this.updateDisplay();
};
e.prototype.onResetBtnClick = function(t, e) {
var i = this;
l.default.playAudio("button");
if (!this.isSuccess) {
console.log("onResetBtnClick: " + e);
if (this.failedNode.active) {
this.node.getChildByName("click").active = !0;
var o = cc.sys.localStorage.getItem(c.default.getInstance().name + "tili");
if (1 == c.default.getInstance().mode) {
if (Number(o) <= 0) {
var a = cc.instantiate(this.node.getChildByName("tips"));
a.parent = this.node;
a.active = !0;
a.getComponent(cc.Label).string = "体力不足";
cc.tween(a).to(1, {
position: new cc.Vec3(a.x, a.y + 100)
}).call(function() {
a.removeFromParent();
}, this).start();
this.node.getChildByName("click").active = !0;
return;
}
if (Number(o) <= 5 && 0 == Number(cc.sys.localStorage.getItem(c.default.getInstance().name + "tltime"))) {
var r = Math.floor(new Date().getTime() / 1e3) + 300;
cc.sys.localStorage.setItem(c.default.getInstance().name + "tltime", r);
}
cc.sys.localStorage.setItem(c.default.getInstance().name + "tili", Number(o) - 1);
var n = cc.v2(this.node.getChildByName("tl").x, this.node.getChildByName("tl").y), s = cc.v2(this.failedNode.getChildByName("root").getChildByName("rest").x, this.failedNode.getChildByName("root").getChildByName("rest").y), h = cc.v2(n.x + 100, n.y), d = cc.instantiate(this.node.getChildByName("tlnode"));
d.active = !0;
d.parent = this.node;
d.x = n.x;
d.y = n.y;
cc.tween(d).bezierTo(1, n, h, s).to(.1, {
scale: .3
}).to(.2, {
opacity: 0
}).call(function() {
d.removeFromParent();
i.node.getChildByName("zoom").getChildByName("root").scale = 1;
i.node.getChildByName("zoom").getChildByName("root").x = 0;
i.node.getChildByName("zoom").getChildByName("root").y = 0;
i.silder.progress = 0;
i.ys = 0;
i.isFail = !1;
i.initMapData();
i.updateDisplay();
c.default.getInstance().propBackIn(i.failedNode.getChildByName("root"));
i.scheduleOnce(function() {
i.succeedNode.active = !1;
i.failedNode.active = !1;
i.node.getChildByName("click").active = !1;
}, .2);
}).removeSelf().start();
} else {
this.node.getChildByName("zoom").getChildByName("root").scale = 1;
this.node.getChildByName("zoom").getChildByName("root").x = 0;
this.node.getChildByName("zoom").getChildByName("root").y = 0;
this.silder.progress = 0;
this.ys = 0;
this.isFail = !1;
this.initMapData();
this.updateDisplay();
c.default.getInstance().propBackIn(this.failedNode.getChildByName("root"));
this.scheduleOnce(function() {
i.succeedNode.active = !1;
i.failedNode.active = !1;
i.node.getChildByName("click").active = !1;
}, .2);
}
} else {
lieyou_SdkManager.gameFailLevel(c.default.getInstance().getCurrentLevelIndex() + 1, "HX_GKTGDYJ_" + c.default.getInstance().mode);
this.node.getChildByName("zoom").getChildByName("root").scale = 1;
this.node.getChildByName("zoom").getChildByName("root").x = 0;
this.node.getChildByName("zoom").getChildByName("root").y = 0;
this.silder.progress = 0;
this.ys = 0;
this.isFail = !1;
this.initMapData();
this.updateDisplay();
if (this.fuhuoNode.active) {
lieyou_SdkManager.gameFailLevel(c.default.getInstance().getCurrentLevelIndex() + 1, "HX_GKTGDYJ_" + c.default.getInstance().mode);
c.default.getInstance().propBackIn(this.fuhuoNode.getChildByName("root"));
this.scheduleOnce(function() {
i.fuhuoNode.active = !1;
}, .2);
}
lieyou_SdkManager.gameBeginLevel(c.default.getInstance().getCurrentLevelIndex() + 1, "HX_GKTGDYJ_" + c.default.getInstance().mode);
}
}
};
e.prototype.onResurrectionBtnClick = function(t, e) {
var i = this;
console.log("onResurrectionBtnClick: " + e);
l.default.playAudio("button");
lieyou_SdkManager.showRewardedVideoAd(function(t) {
if (t) {
i.succeedNode.active = !1;
i.failedNode.active = !1;
i.fuhuoNode.active = !1;
i.map_data.current_life = 3;
i.updateTopNodeDisplay();
}
});
};
e.prototype.hqtl = function() {
lieyou_SdkManager.showRewardedVideoAd(function(t) {
if (t) {
var e = cc.sys.localStorage.getItem(c.default.getInstance().name + "tili");
cc.sys.localStorage.setItem(c.default.getInstance().name + "tili", Number(e) + 1);
}
});
};
e.prototype.onResurrectionBtnClick2 = function(t, e) {
var i = this;
console.log("onResurrectionBtnClick: " + e);
l.default.playAudio("button");
lieyou_SdkManager.showRewardedVideoAd(function(t) {
if (t) {
i.succeedNode.active = !1;
i.failedNode.active = !1;
i.fuhuoNode.active = !1;
i.fuhuoNode2.active = !1;
i.djstime = 60;
i.djssound2 = 1.4;
i.isFuhuo = !1;
i.isFail = !1;
i.updateTopNodeDisplay();
}
});
};
e.prototype.onResurrectionBtnClick3 = function(t, e) {
var i = this;
console.log("onResurrectionBtnClick: " + e);
l.default.playAudio("button");
lieyou_SdkManager.showRewardedVideoAd(function(t) {
if (t) {
i.succeedNode.active = !1;
i.failedNode.active = !1;
i.fuhuoNode.active = !1;
i.fuhuoNode2.active = !1;
i.djstime = 30;
i.djssound2 = 1.4;
i.isFuhuo = !1;
i.isFail = !1;
i.updateTopNodeDisplay();
}
});
};
e.prototype.onFail = function() {
l.default.playAudio("fail");
this.fuhuoNode.active = !1;
this.fuhuoNode2.active = !1;
this.failedNode.active = !0;
var t = cc.sys.localStorage.getItem(c.default.getInstance().name + "tili");
if (Number(t) <= 0) {
this.failedNode.getChildByName("root").getChildByName("rest").active = !1;
this.failedNode.getChildByName("root").getChildByName("next2").active = !0;
} else {
this.failedNode.getChildByName("root").getChildByName("rest").active = !0;
this.failedNode.getChildByName("root").getChildByName("next2").active = !1;
}
cc.sys.localStorage.setItem("HX_GKTGDYJls", 0);
c.default.getInstance().propBackOut(this.failedNode.getChildByName("root"));
lieyou_SdkManager.gameFailLevel(c.default.getInstance().getCurrentLevelIndex() + 1, "HX_GKTGDYJ_" + c.default.getInstance().mode);
lieyou_SdkManager.showSpotByFinish();
};
e.prototype.onNextAction = function(t, e) {
var i = this;
console.log("onAutoNextAction: " + e);
l.default.playAudio("button");
var o = cc.sys.localStorage.getItem(c.default.getInstance().name + "tili");
if (1 == c.default.getInstance().mode && Number(o) <= 0) {
var a = cc.instantiate(this.node.getChildByName("tips"));
a.parent = this.node;
a.active = !0;
a.getComponent(cc.Label).string = "体力不足";
cc.tween(a).to(1, {
position: new cc.Vec3(a.x, a.y + 100)
}).call(function() {
a.removeFromParent();
}, this).start();
} else if (!this.isClick) {
this.isClick = !0;
this.grapGrid.node.scale = 1;
this.grapGrid.node.width = this.qjw;
this.grapGrid.node.height = this.qjh;
this.bcdian = [];
if (1 == c.default.getInstance().mode) {
if (Number(o) <= 5 && 0 == Number(cc.sys.localStorage.getItem(c.default.getInstance().name + "tltime"))) {
var r = Math.floor(new Date().getTime() / 1e3) + 300;
cc.sys.localStorage.setItem(c.default.getInstance().name + "tltime", r);
}
cc.sys.localStorage.setItem(c.default.getInstance().name + "tili", Number(o) - 1);
var n = cc.v2(this.node.getChildByName("tl").x, this.node.getChildByName("tl").y), s = cc.v2(this.succeedNode.getChildByName("root").getChildByName("next").x, this.succeedNode.getChildByName("root").getChildByName("next").y), h = cc.v2(n.x + 100, n.y), d = cc.instantiate(this.node.getChildByName("tlnode"));
d.active = !0;
d.parent = this.node;
d.x = n.x;
d.y = n.y;
cc.tween(d).bezierTo(1, n, h, s).to(.1, {
scale: .3
}).to(.2, {
opacity: 0
}).call(function() {
d.removeFromParent();
i.initGameView();
c.default.getInstance().propBackIn(i.succeedNode.getChildByName("root"));
i.scheduleOnce(function() {
i.succeedNode.active = !1;
i.failedNode.active = !1;
}, .22);
}).removeSelf().start();
} else {
this.initGameView();
c.default.getInstance().propBackIn(this.succeedNode.getChildByName("root"));
this.scheduleOnce(function() {
i.succeedNode.active = !1;
i.failedNode.active = !1;
}, .22);
}
}
};
e.prototype.onAutoNextAction = function(t, e) {
var i = this;
console.log("onAutoNextAction: " + e);
l.default.playAudio("button");
lieyou_SdkManager.showRewardedVideoAd(function(t) {
if (t) for (var e = 0; e < 3; e++) {
var o = i.map_data.getRandomNextArrowOnePointIndex();
i.userAction(o, !1);
}
});
};
e.prototype.onSpecify = function() {
var t = Number(this.nbcs.getChildByName("edit").getComponent(cc.EditBox).string);
c.default.getInstance().specifyLevelAction(t - 1);
this.initGameView();
};
e.prototype.initMapData = function() {
this.map_data = h.default.CreateMapByStr(this.dataString);
this.runoutArray = new Array();
this.runoutArray2 = new Array();
this.redidx = [];
this.djstime = 120 * Math.floor(this.map_data.getArrowDataArray().length / 20);
this.djstime < 180 && (this.djstime = 180);
this.djssound2 = 1.4;
this.isStrat = !0;
};
e.prototype.qhcolor = function() {
l.default.playAudio("button");
if (0 == this.color_mode) {
this.node.getChildByName("Buttom").getChildByName("color").getComponent(cc.Sprite).spriteFrame = this.dqcolor[0];
this.color_mode = 1;
} else {
this.node.getChildByName("Buttom").getChildByName("color").getComponent(cc.Sprite).spriteFrame = this.dqcolor[1];
this.color_mode = 0;
}
this.updateDisplay(3);
};
e.prototype.onSetting = function() {
l.default.playAudio("button");
this.node.getChildByName("Setting").active = !0;
this.isStop = !0;
c.default.getInstance().propBackOut(this.node.getChildByName("Setting").getChildByName("root"));
this.Settinit();
};
e.prototype.closeSetting = function() {
var t = this;
l.default.playAudio("button");
c.default.getInstance().propBackIn(this.node.getChildByName("Setting").getChildByName("root"));
this.scheduleOnce(function() {
t.node.getChildByName("Setting").active = !1;
t.isStop = !1;
}, .2);
};
e.prototype.Settinit = function() {
this.node.getChildByName("Setting").getChildByName("root").getChildByName("muic_on").active = PPSDK.musicState;
this.node.getChildByName("Setting").getChildByName("root").getChildByName("muic_off").active = !PPSDK.musicState;
this.node.getChildByName("Setting").getChildByName("root").getChildByName("sound_on").active = PPSDK.sfxState;
this.node.getChildByName("Setting").getChildByName("root").getChildByName("sound_off").active = !PPSDK.sfxState;
this.node.getChildByName("Setting").getChildByName("root").getChildByName("shake_on").active = PPSDK.vibrateState;
this.node.getChildByName("Setting").getChildByName("root").getChildByName("shake_off").active = !PPSDK.vibrateState;
};
e.prototype.musicClick = function() {
l.default.playAudio("button");
PPSDK.musicState = !PPSDK.musicState;
PPSDK.musicState ? l.default.playMusic("bgm") : PPSDK.stopMusic();
this.Settinit();
};
e.prototype.soundClick = function() {
l.default.playAudio("button");
PPSDK.sfxState = !PPSDK.sfxState;
this.Settinit();
};
e.prototype.vibrateClick = function() {
l.default.playAudio("button");
PPSDK.vibrateState = !PPSDK.vibrateState;
this.Settinit();
};
e.prototype.updateDisplay = function(t) {
void 0 === t && (t = 0);
this.updateMapDisplay(t);
this.updateTopNodeDisplay();
};
e.prototype.updateTopNodeDisplay = function() {
var t = this.node.getChildByName("TopNode").getChildByName("titleLabel").getComponent(cc.Label), e = (this.node.getChildByName("TopNode").getChildByName("lifeLabel").getComponent(cc.Label), 
c.default.getInstance().getCurrentLevelIndex());
t.string = "第" + (e + 1) + "关";
var i = this.map_data.getCurrentLife();
if (0 == c.default.getInstance().mode) for (var o = 1; o < 4; o++) {
this.node.getChildByName("TopNode").getChildByName("hp" + o).active = !0;
this.node.getChildByName("TopNode").getChildByName("hp" + o).children[0].active = !1;
o <= i && (this.node.getChildByName("TopNode").getChildByName("hp" + o).children[0].active = !0);
} else this.node.getChildByName("TopNode").getChildByName("time").active = !0;
var a = 0, r = this.map_data.getArrowDataArray();
for (o = 0; o < r.length; o++) r[o].has_runout || a++;
this.node.getChildByName("TopNode").getChildByName("linenum").getComponentInChildren(cc.Label).string = "" + a;
};
e.prototype.updateRunoutDisplay = function() {
if (this.runoutArray.length > 0) {
this.updateMapDisplay(1);
for (var t = 0; t < 2; t++) this.drawRunoutPathArrow(this.map_data.getArrowDataArray());
}
if (this.runoutArray2.length > 0) {
this.updateMapDisplay2(1);
for (t = 0; t < 2; t++) this.drawRunoutPathArrow2(this.map_data.getArrowDataArray());
}
};
e.prototype.updateMapDisplay = function(t) {
void 0 === t && (t = 0);
this.grapGrid.node.active = !0;
for (var e = this.map_data.getArrowDataArray(), i = 0; i < e.length; i++) -1 != this.runoutArray.indexOf(e[i]) && null != this.grapGirdArray[i] && this.grapGirdArray[i].clear();
if (0 == t || t >= 2) {
this.drawPathArrow(e, t);
if (1 == this.gird_display_mode && 0 == t) {
this.grapGrid.clear();
this.drawGirdPoint(t);
}
}
};
e.prototype.updateMapDisplay2 = function(t) {
void 0 === t && (t = 0);
this.grapGrid.node.active = !0;
for (var e = this.map_data.getArrowDataArray(), i = 0; i < e.length; i++) if (this.redidx.includes(i)) {
for (var o = !1, a = 0; a < this.runoutArray2.length; a++) if (i == this.runoutArray2[a].id) {
o = !0;
this.runoutArray2[a];
}
o && null != this.grapGirdArray[i] && this.grapGirdArray[i].clear();
}
};
e.prototype.userAction = function(t, e) {
var i = this;
void 0 === e && (e = !0);
if (!this.isSuccess && !this.isFuhuo) {
if (this.map_data.isViablePositionIndex(t)) {
this.node.getChildByName("fdtip").active = !1;
var o = this.map_data.userAction(t);
if (o >= 0) {
this.node.getChildByName("tip").active = !1;
var a = this.map_data.arrowRunOut(o);
null != a && this.runoutArray.push(a);
l.default.playVibrate();
if (e) {
l.default.playAudio("" + (this.ljnum + 1));
this.ljnum++;
this.ljnum > 7 && (this.ljnum = 0);
}
this.updateDisplay(1);
} else if (-1 == o) ; else if (-99 == o) {
l.default.playAudio("zhuangji");
l.default.playVibrate();
this.map_data.getuser(t) >= 0 && (this.redidx.includes(this.map_data.getuser(t)) || this.redidx.push(this.map_data.getuser(t)));
for (var r = !1, n = 0; n < this.runoutArray2.length; n++) this.map_data.getuser(t) == this.runoutArray2[n].id && (r = !0);
r || this.runoutArray2.push({
id: this.map_data.getuser(t),
len: this.map_data.sbarry.length,
move: 0
});
this.bgError.active = !0;
this.scheduleOnce(function() {
this.bgError.active = !1;
}, .3);
cc.log("箭头有冲突，无法挪开箭头！！！");
this.updateDisplay(2);
if (1 == c.default.getInstance().mode) {
this.djstime -= 10;
var s = cc.instantiate(this.node.getChildByName("tips"));
s.parent = this.node;
s.active = !0;
s.scale = 1;
s.getComponent(cc.Label).string = "错误-10s";
cc.tween(s).to(1, {
position: new cc.Vec3(s.x, s.y + 100)
}).call(function() {
s.removeFromParent();
}, this).start();
}
}
}
if (this.map_data.hasFinished()) {
this.isSuccess = !0;
this.node.getChildByName("cg").active = !0;
cc.tween(this.node.getChildByName("cg")).to(.15, {
scale: 1
}).call(function() {
i.kuosan();
}).start();
l.default.playAudio("guzhang");
this.node.getChildByName("right").active = !0;
this.node.getChildByName("right").getComponent(sp.Skeleton).setAnimation(0, "show", !1);
this.node.getChildByName("left").active = !0;
this.node.getChildByName("left").getComponent(sp.Skeleton).setAnimation(0, "show", !1);
this.scheduleOnce(function() {
i.node.getChildByName("cg").active = !1;
i.node.getChildByName("right").active = !1;
i.node.getChildByName("left").active = !1;
i.onSuccess();
}, 1.5);
lieyou_SdkManager.gameFinishLevel(c.default.getInstance().getCurrentLevelIndex() + 1, "HX_GKTGDYJ_" + c.default.getInstance().mode);
cc.log("游戏成功通关！！！");
} else if (this.map_data.hasFailed()) {
c.default.getInstance().propBackOut(this.fuhuoNode.getChildByName("root"));
this.fuhuoNode.active = !0;
}
}
};
e.prototype.onSuccess = function() {
var t = this;
lieyou_SdkManager.showSpotByFinish();
c.default.getInstance().nextLevelAction();
c.default.getInstance().setScore(c.default.getInstance().getCurrentLevelIndex() + 1);
if (1 == c.default.getInstance().mode) {
cc.sys.localStorage.setItem("HX_GKTGDYJls", Number(cc.sys.localStorage.getItem("HX_GKTGDYJls")) + 1);
var e = cc.sys.localStorage.getItem(c.default.getInstance().name + "tili");
cc.sys.localStorage.setItem(c.default.getInstance().name + "tili", Number(e) + 1);
}
this.isClick = !1;
this.succeedNode.active = !0;
l.default.playAudio("success");
this.succeedNode.getChildByName("root").scale = 1;
this.succeedNode.getChildByName("root").getChildByName("quan").scale = 0;
this.succeedNode.getChildByName("root").getChildByName("ys").getChildByName("fz").getComponent(cc.Label).string = "" + Math.floor(this.ys / 60);
this.succeedNode.getChildByName("root").getChildByName("ys").getChildByName("s").getComponent(cc.Label).string = "" + Math.floor(this.ys % 60);
this.ys < 120 ? this.succeedNode.getChildByName("root").getChildByName("ys").getChildByName("bf").getComponent(cc.Label).string = c.default.getInstance().getRandomInt(91, 99) + "%" : this.ys >= 120 && this.ys < 240 ? this.succeedNode.getChildByName("root").getChildByName("ys").getChildByName("bf").getComponent(cc.Label).string = c.default.getInstance().getRandomInt(81, 89) + "%" : this.ys >= 240 && this.ys < 360 ? this.succeedNode.getChildByName("root").getChildByName("ys").getChildByName("bf").getComponent(cc.Label).string = c.default.getInstance().getRandomInt(61, 69) + "%" : this.succeedNode.getChildByName("root").getChildByName("ys").getChildByName("bf").getComponent(cc.Label).string = c.default.getInstance().getRandomInt(1, 9) + "%";
if (0 == c.default.getInstance().mode) {
this.succeedNode.getChildByName("root").getChildByName("next").y = -419;
this.succeedNode.getChildByName("root").getChildByName("next2").y = -272;
this.succeedNode.getChildByName("root").getChildByName("share").y = -419;
this.succeedNode.getChildByName("root").getChildByName("ys").active = !1;
} else {
this.succeedNode.getChildByName("root").getChildByName("ys").getChildByName("ls").getComponentInChildren(cc.Label).string = cc.sys.localStorage.getItem("HX_GKTGDYJls");
this.succeedNode.getChildByName("root").getChildByName("next").y = -419;
this.succeedNode.getChildByName("root").getChildByName("next2").y = -417;
this.succeedNode.getChildByName("root").getChildByName("share").y = -419;
this.succeedNode.getChildByName("root").getChildByName("ys").active = !0;
this.succeedNode.getChildByName("root").getChildByName("ys").scale = 0;
cc.tween(this.succeedNode.getChildByName("root").getChildByName("ys")).delay(.15).to(.15, {
scale: 1
}).start();
}
this.succeedNode.getChildByName("root").getChildByName("popBg").scale = 0;
this.succeedNode.getChildByName("root").getChildByName("title").scale = 0;
this.succeedNode.getChildByName("root").getChildByName("next").getComponent(cc.Button).enabled = !1;
this.succeedNode.getChildByName("root").getChildByName("next").scale = 0;
this.succeedNode.getChildByName("root").getChildByName("next").active = !0;
cc.tween(this.succeedNode.getChildByName("root").getChildByName("next")).delay(.3).to(.15, {
scale: 1
}).call(function() {
t.succeedNode.getChildByName("root").getChildByName("next").getComponent(cc.Button).enabled = !0;
}).start();
this.succeedNode.getChildByName("root").getChildByName("share").getComponent(cc.Button).enabled = !1;
this.succeedNode.getChildByName("root").getChildByName("share").scale = 0;
cc.tween(this.succeedNode.getChildByName("root").getChildByName("share")).delay(.3).to(.15, {
scale: 1
}).call(function() {
t.succeedNode.getChildByName("root").getChildByName("share").getComponent(cc.Button).enabled = !0;
}).start();
cc.tween(this.succeedNode.getChildByName("root").getChildByName("title")).to(.15, {
scale: 1
}).start();
cc.tween(this.succeedNode.getChildByName("root").getChildByName("quan")).delay(.15).to(.15, {
scale: 1
}).start();
cc.tween(this.succeedNode.getChildByName("root").getChildByName("popBg")).delay(.15).to(.15, {
scale: 1
}).start();
};
e.prototype.onShare = function() {
0 == Number(cc.sys.localStorage.getItem(c.default.getInstance().name + "_share")) && cc.sys.localStorage.setItem(c.default.getInstance().name + "_share", 1);
};
e.prototype.kuosan = function() {
for (var t = this, e = this.DanArray.length % 2 == 0 ? this.DanArray.length / 2 - 1 : Math.ceil(this.DanArray.length / 2) - 1, i = this.DanArray[0].length % 2 == 0 ? this.DanArray[0].length / 2 - 1 : Math.ceil(this.DanArray[0].length / 2) - 1, o = function(o) {
for (var r = function(r) {
null != a.DanArray[o][r] && cc.tween(a.DanArray[o][r]).delay(1.25 * (e - o + i - r) / e).to(.25, {
scale: 2,
opacity: 0
}).call(function() {
t.DanArray[o][r].active = !1;
}).start();
}, n = i; n >= 0; n--) r(n);
}, a = this, r = e; r >= 0; r--) o(r);
var n = this.DanArray[0].length % 2 == 0 ? this.DanArray[0].length / 2 : Math.ceil(this.DanArray[0].length / 2) - 1, s = function(i) {
for (var o = function(o) {
null != l.DanArray[i][o] && cc.tween(l.DanArray[i][o]).delay(1.25 * (e - i + o - n) / e).to(.25, {
scale: 2,
opacity: 0
}).call(function() {
t.DanArray[i][o].active = !1;
}).start();
}, a = n; a < l.DanArray[0].length; a++) o(a);
}, l = this;
for (r = e; r >= 0; r--) s(r);
var c = this.DanArray.length % 2 == 0 ? this.DanArray.length / 2 : Math.ceil(this.DanArray.length / 2) - 1, h = function(o) {
for (var a = function(a) {
null != d.DanArray[o][a] && cc.tween(d.DanArray[o][a]).delay(1.25 * (o - c + i - a) / e).to(.25, {
scale: 2,
opacity: 0
}).call(function() {
t.DanArray[o][a].active = !1;
}).start();
}, r = i; r >= 0; r--) a(r);
}, d = this;
for (r = c; r < this.DanArray.length; r++) h(r);
var u = function(i) {
for (var o = function(o) {
null != p.DanArray[i][o] && cc.tween(p.DanArray[i][o]).delay(1.25 * (i - c + o - n) / e).to(.25, {
scale: 2,
opacity: 0
}).call(function() {
t.DanArray[i][o].active = !1;
}).start();
}, a = n; a < p.DanArray[0].length; a++) o(a);
}, p = this;
for (r = c; r < this.DanArray.length; r++) u(r);
};
e.prototype.onTouchStart = function(t) {
this.clicknum = 0;
var e = t.getTouches();
if (1 == e.length) this.startPos = this.node.convertToNodeSpaceAR(e[0].getLocation()); else if (2 == e.length) {
var i = this.node.convertToNodeSpaceAR(e[0].getLocation()), o = this.node.convertToNodeSpaceAR(e[1].getLocation());
this.pointsDis = i.sub(o).mag();
}
};
e.prototype.onTouchMove = function(t) {
var e = t.getTouches();
if (1 == e.length) {
var i = this.node.convertToNodeSpaceAR(e[0].getLocation());
this.node.getChildByName("zoom").getChildByName("root").x -= this.startPos.x - i.x;
this.node.getChildByName("zoom").getChildByName("root").y -= this.startPos.y - i.y;
this.startPos = i;
} else if (2 == e.length) {
var o = this.node.convertToNodeSpaceAR(e[0].getLocation()), a = this.node.convertToNodeSpaceAR(e[1].getLocation()), r = o.sub(a).mag();
this.pointsDis || (this.pointsDis = 0);
if (r > this.pointsDis) {
if (this.node.getChildByName("zoom").getChildByName("root").scale >= 1 - this.qjscl + 2) {
this.node.getChildByName("zoom").getChildByName("root").scale = 1 - this.qjscl + 2;
return;
}
this.pointsDis = r;
this.node.getChildByName("zoom").getChildByName("root").scale += .05;
} else if (r < this.pointsDis) {
if (this.node.getChildByName("zoom").getChildByName("root").scale <= 1) {
this.node.getChildByName("zoom").getChildByName("root").scale = 1;
return;
}
this.pointsDis = r;
this.node.getChildByName("zoom").getChildByName("root").scale -= .05;
}
this.silder.progress = (this.node.getChildByName("zoom").getChildByName("root").scale - 1) / (2 - this.qjscl);
this.node.getChildByName("fdtip").active = !1;
}
var n = (this.node.getChildByName("zoom").getChildByName("root").scale - .7) * (this.node.getChildByName("zoom").width / 2), s = -(this.node.getChildByName("zoom").getChildByName("root").scale - .7) * (this.node.getChildByName("zoom").width / 2), l = (this.node.getChildByName("zoom").getChildByName("root").scale - .7) * (this.grapGrid.node.height / 2), c = -(this.node.getChildByName("zoom").getChildByName("root").scale - .7) * (this.grapGrid.node.height / 2);
this.node.getChildByName("zoom").getChildByName("root").x > n && (this.node.getChildByName("zoom").getChildByName("root").x = n);
this.node.getChildByName("zoom").getChildByName("root").x < s && (this.node.getChildByName("zoom").getChildByName("root").x = s);
this.node.getChildByName("zoom").getChildByName("root").y > l && (this.node.getChildByName("zoom").getChildByName("root").y = l);
this.node.getChildByName("zoom").getChildByName("root").y < c && (this.node.getChildByName("zoom").getChildByName("root").y = c);
};
e.prototype.onTouchEnd = function(t) {
if (!(this.clicknum > .18)) {
console.log("Mouse onTouchStart:");
var e = this.grapGrid.node.convertToNodeSpaceAR(t.getLocation()), i = this.locationGirdIndex(e);
-1 != i && this.userAction(i);
}
};
e.prototype.locationGirdIndex = function(t) {
var e = this.map_data.width, i = this.map_data.height, o = e, a = this.grapGrid.node.width, r = this.grapGrid.node.height, n = Math.min(.98 * a / o, .33 * a), s = n, l = .5 * (a - n * e), c = .5 * (r - s * i), h = new cc.Vec2(-this.grapGrid.node.width / 2, this.grapGrid.node.height / 2), d = t.x - h.x, u = h.y - t.y, p = Math.floor((d - l) / n), g = Math.floor((u - c) / s);
return p >= 0 && p < e && g >= 0 && g < i ? g * e + p : -1;
};
e.prototype.drawGirdPoint = function(t) {
void 0 === t && (t = 0);
if (null != this.grapGrid) {
if (0 == t) {
for (var e = 0; e < this.DanArray.length; e++) for (var i = 0; i < this.DanArray[e].length; i++) null != this.DanArray[e][i] && this.dianPool.put(this.DanArray[e][i]);
this.DanArray = [];
}
new cc.Color().fromHEX("#2EA5FF");
var o = this.map_data.width, a = this.map_data.height, r = o, n = this.grapGrid.node.width, s = this.grapGrid.node.height, l = Math.min(.98 * n / r, .33 * n), c = l, h = .5 * (n - l * o), d = .5 * (s - c * a), u = new cc.Vec2(-this.grapGrid.node.width / 2, this.grapGrid.node.height / 2), p = 3;
Math.max(o, a) >= 30 && (p = 2);
2 * Math.abs(u.y - (.5 * c + d)) > s && (this.qjscl = s / (2 * Math.abs(u.y - (.5 * c + d))));
this.grapGrid.node.scale = this.qjscl;
this.grapGrid.strokeColor = cc.Color.GRAY.clone();
this.grapGrid.fillColor = cc.Color.GRAY.clone();
this.grapGrid.lineWidth = p;
for (var g = 0; g < a; g++) {
for (var m = [], y = 0; y < o; y++) {
var f = c * (g + .5) + d, _ = l * (y + .5) + h + u.x, v = u.y - f;
if (this.bcdian.includes(Math.ceil(100 * _ + v))) {
if (0 == t) {
var C = void 0;
(C = this.dianPool.size() > 0 ? this.dianPool.get() : cc.instantiate(this.node.getChildByName("dian"))).active = !0;
C.parent = this.grapGrid.node;
C.opacity = 180;
C.scale = 1;
C.width = 2 * p;
C.height = 2 * p;
C.position = cc.v3(_, v, 0);
m.push(C);
}
} else m.push(null);
}
0 == t && this.DanArray.push(m);
}
this.grapGrid.node.active = !1;
this.grapGrid.node.active = !0;
} else cc.log("grapGrid is null drawGrid");
};
e.prototype.clearGrapArray = function() {
for (var t = this.grapGirdArray.length - 1; t >= 0; t--) null != this.grapGirdArray[t] && this.grapGirdArray[t].node.removeFromParent();
};
e.prototype.drawPathArrow = function(t, e) {
void 0 === e && (e = 0);
return n(this, void 0, void 0, function() {
var i, o, a, r, n, l, c, h, d, u, p, g, m, y, f, _, v, C, N, w, G, B, D, S, I, T, b, A, x, P, M, k;
return s(this, function() {
if (null == this.grapGrid) {
cc.log("grapGrid is null drawGrid");
return [ 2 ];
}
if (0 == e) {
this.clearGrapArray();
this.grapGirdArray = [];
}
i = this.map_data.width;
o = this.map_data.height;
a = i;
r = this.grapGrid.node.width;
n = this.grapGrid.node.height;
l = Math.min(.98 * r / a, .33 * r);
h = .5 * (r - l * i);
d = .5 * (n - (c = l) * o);
u = new cc.Vec2(-this.grapGrid.node.width / 2, this.grapGrid.node.height / 2);
2 * Math.abs(u.y - (.5 * c + d)) > n && (this.qjscl = n / (2 * Math.abs(u.y - (.5 * c + d))));
p = Math.min(Math.max(.24 * l, 5), 10);
g = Math.min(Math.max(.25 * l, 6), 12);
for (m = 0; m < t.length; m++) if (!(2 == e && this.redidx.length > 0) || this.redidx.includes(m)) {
y = t[m];
f = y.path;
_ = y.direction;
if (y.has_runout) this.grapGirdArray.push(null); else {
v = void 0;
C = void 0;
if (0 == e) {
(v = new cc.Node()).scale = this.qjscl;
v.parent = this.node.getChildByName("zoom").getChildByName("root");
v.position = this.grapGrid.node.position;
v.setSiblingIndex(2);
C = v.addComponent(cc.Graphics);
} else C = this.grapGirdArray[m];
C.strokeColor = new cc.Color().fromHEX("#dbe3fa");
C.fillColor = new cc.Color().fromHEX("#dbe3fa");
C.lineWidth = p;
if (1 == this.color_mode) {
N = this.default_color_arr[m % this.default_color_arr.length];
w = new cc.Color().fromHEX(N);
C.strokeColor = w;
C.fillColor = w;
}
if (this.redidx.length > 0 && this.redidx.includes(m)) {
C.strokeColor = cc.Color.RED.clone();
C.fillColor = cc.Color.RED.clone();
}
for (G = 0; G < f.length; G++) {
B = f[G];
D = B[0];
S = B[1];
I = c * (S + .5) + d;
T = l * (D + .5) + h + u.x;
b = u.y - I;
this.bcdian.includes(Math.ceil(100 * T + b)) || this.bcdian.push(Math.ceil(100 * T + b));
}
if (0 == e) {
this.drawTwArrow(C, f, l, c, h, d, u, _, g);
this.grapGirdArray.push(C);
} else for (G = 0; G < f.length; G++) {
B = f[G];
D = B[0];
S = B[1];
I = c * (S + .5) + d;
T = l * (D + .5) + h + u.x;
b = u.y - I;
if (0 == G) {
A = f[G + 1];
x = A[0];
P = A[1];
M = 3;
Math.max(i, o) >= 30 && (M = 2);
P - S > 0 && (b += 1.7 * M);
P - S < 0 && (b -= 1.7 * M);
x - D > 0 && (T -= 1.7 * M);
x - D < 0 && (T += 1.7 * M);
C.moveTo(T, b);
} else C.lineTo(T, b);
C.stroke();
if (G == f.length - 1) {
k = this.calcArrowPoints(_, new cc.Vec2(T, b), g);
C.moveTo(T, b);
C.lineTo(k[0].x, k[0].y);
C.lineTo(k[1].x, k[1].y);
C.close();
C.fill();
C.stroke();
}
}
}
}
return [ 2 ];
});
});
};
e.prototype.drawTwArrow = function(t, e, i, o, a, r, l, c, h) {
return n(this, void 0, void 0, function() {
var n, d, u, p, g, m, y, f, _, v, C, N;
return s(this, function(s) {
switch (s.label) {
case 0:
n = 0;
s.label = 1;

case 1:
if (!(n < e.length)) return [ 3, 4 ];
d = e[n];
u = d[0];
p = d[1];
g = o * (p + .5) + r;
m = i * (u + .5) + a + l.x;
y = l.y - g;
if (0 == n) {
f = e[n + 1];
_ = f[0];
v = f[1];
C = 3;
Math.max(this.map_data.width, this.map_data.height) >= 30 && (C = 2);
v - p > 0 && (y += 1.7 * C);
v - p < 0 && (y -= 1.7 * C);
_ - u > 0 && (m -= 1.7 * C);
_ - u < 0 && (m += 1.7 * C);
t.moveTo(m, y);
} else t.lineTo(m, y);
t.stroke();
if (n == e.length - 1) {
N = this.calcArrowPoints(c, new cc.Vec2(m, y), h);
t.moveTo(m, y);
t.lineTo(N[0].x, N[0].y);
t.lineTo(N[1].x, N[1].y);
t.close();
t.fill();
t.stroke();
}
return [ 4, this.delay(15) ];

case 2:
s.sent();
s.label = 3;

case 3:
n++;
return [ 3, 1 ];

case 4:
return [ 2 ];
}
});
});
};
e.prototype.delay = function(t) {
return new Promise(function(e) {
return setTimeout(e, t);
});
};
e.prototype.calcArrowPoints = function(t, e, i) {
var o = cc.v2(e.x, e.y), a = cc.v2(e.x, e.y), r = i / 2;
switch (t) {
case 0:
o.x -= r;
o.y -= i;
a.x += r;
a.y -= i;
break;

case 1:
o.x -= i;
o.y -= r;
a.x -= i;
a.y += r;
break;

case 2:
o.x -= r;
o.y += i;
a.x += r;
a.y += i;
break;

case 3:
o.x += i;
o.y -= r;
a.x += i;
a.y += r;
}
return [ o, a ];
};
e.prototype.drawRunoutPathArrow = function(t) {
if (null != this.grapGrid) for (var e = this.map_data.width, i = this.map_data.height, o = e, a = this.grapGrid.node.width, r = this.grapGrid.node.height, n = Math.min(.98 * a / o, .33 * a), s = n, l = .5 * (a - n * e), c = .5 * (r - s * i), h = new cc.Vec2(-this.grapGrid.node.width / 2, this.grapGrid.node.height / 2), d = Math.min(Math.max(.24 * n, 5), 10), u = Math.min(Math.max(.25 * n, 6), 12), p = (this.animate_gird_len, 
0); p < t.length; p++) {
var g = t[p];
if (-1 != this.runoutArray.indexOf(g)) {
var m = this.grapGirdArray[p];
if (null != m) {
m.strokeColor = new cc.Color().fromHEX("#dbe3fa");
m.fillColor = new cc.Color().fromHEX("#dbe3fa");
m.lineWidth = d;
var y = g.path, f = g.direction, _ = g.animation_index;
g.animation_index = _ + 1;
var v = Math.floor(_ / this.animate_gird_len), C = _ % this.animate_gird_len / this.animate_gird_len;
if (1 == this.color_mode) {
var N = this.default_color_arr[p % this.default_color_arr.length], w = new cc.Color().fromHEX(N);
m.strokeColor = w;
m.fillColor = w;
}
if (v < y.length - 1) for (var G = v; G < y.length; G++) {
var B = y[G], D = y[G + 1], S = B[0], I = B[1];
if (G == v) {
var T = this.map_data.getDirection(B, D);
S = (b = this.getSubGirdPoint(B, C, T))[0];
I = b[1];
} else if (G == y.length - 1) {
var b, A = _ / this.animate_gird_len;
S = (b = this.getSubGirdPoint(B, A, f))[0];
I = b[1];
}
var x = s * (I + .5) + c, P = n * (S + .5) + l + h.x, M = h.y - x;
G == v ? m.moveTo(P, M) : m.lineTo(P, M);
m.stroke();
if (G == y.length - 1) {
var k = this.calcArrowPoints(f, new cc.Vec2(P, M), u);
m.moveTo(P, M);
m.lineTo(k[0].x, k[0].y);
m.lineTo(k[1].x, k[1].y);
m.close();
m.fill();
}
m.stroke();
} else if (v >= y.length - 1) {
S = (B = y[y.length - 1])[0], I = B[1];
var z = _ / this.animate_gird_len - y.length + 1, O = _ / this.animate_gird_len, L = this.getSubGirdPoint(B, z, f), E = this.getSubGirdPoint(B, O, f), R = L[0], F = L[1], H = E[0], j = E[1], V = s * (F + .5) + c, K = n * (R + .5) + l + h.x, X = h.y - V, Y = s * (j + .5) + c, J = n * (H + .5) + l + h.x, U = h.y - Y;
m.moveTo(K, X);
m.lineTo(J, U);
m.stroke();
k = this.calcArrowPoints(f, new cc.Vec2(J, U), u);
m.moveTo(J, U);
m.lineTo(k[0].x, k[0].y);
m.lineTo(k[1].x, k[1].y);
m.close();
m.fill();
m.stroke();
var q = new cc.Vec2(K, X);
if (!this.node.getBoundingBox().contains(q)) {
this.runoutArray.splice(this.runoutArray.indexOf(g), 1);
this.grapGirdArray[p].clear();
this.updateMapDisplay(1);
}
}
}
}
} else cc.log("grapGrid is null drawGrid");
};
e.prototype.drawRunoutPathArrow2 = function(t) {
if (null != this.grapGrid) for (var e = this.map_data.width, i = this.map_data.height, o = e, a = this.grapGrid.node.width, r = this.grapGrid.node.height, n = Math.min(.98 * a / o, .33 * a), s = n, l = .5 * (a - n * e), c = .5 * (r - s * i), h = new cc.Vec2(-this.grapGrid.node.width / 2, this.grapGrid.node.height / 2), d = Math.min(Math.max(.24 * n, 5), 10), u = Math.min(Math.max(.25 * n, 6), 12), p = (this.animate_gird_len, 
0); p < t.length; p++) {
var g = t[p];
if (this.redidx.includes(p)) {
for (var m = !1, y = null, f = 0; f < this.runoutArray2.length; f++) if (p == this.runoutArray2[f].id) {
m = !0;
y = this.runoutArray2[f];
}
if (m) {
var _ = this.grapGirdArray[p];
if (null != _) {
_.strokeColor = new cc.Color().fromHEX("#dbe3fa");
_.fillColor = new cc.Color().fromHEX("#dbe3fa");
_.lineWidth = d;
console.log(y);
var v = g.path, C = g.direction, N = g.animation_index;
if (0 == y.move) {
g.animation_index = N + 1;
N + 1 > 4 * y.len - 1 && (y.move = 1);
} else {
g.animation_index = N - 1;
g.animation_index - 1 < -1 && 1 == y.move && this.runoutArray2.splice(this.runoutArray2.indexOf(y), 1);
}
g.animation_index < 0 && (g.animation_index = 0);
var w = Math.floor(N / this.animate_gird_len), G = N % this.animate_gird_len / this.animate_gird_len;
if (1 == this.color_mode) {
var B = this.default_color_arr[p % this.default_color_arr.length], D = new cc.Color().fromHEX(B);
_.strokeColor = D;
_.fillColor = D;
}
if (1 == y.move) {
_.strokeColor = cc.Color.RED.clone();
_.fillColor = cc.Color.RED.clone();
}
if (w < v.length - 1) for (var S = w; S < v.length; S++) {
var I = v[S], T = v[S + 1], b = I[0], A = I[1];
if (S == w) {
var x = this.map_data.getDirection(I, T);
b = (P = this.getSubGirdPoint(I, G, x))[0];
A = P[1];
} else if (S == v.length - 1) {
var P, M = N / this.animate_gird_len;
b = (P = this.getSubGirdPoint(I, M, C))[0];
A = P[1];
}
var k = s * (A + .5) + c, z = n * (b + .5) + l + h.x, O = h.y - k;
if (S == w) {
if (0 == S) {
var L = v[S + 1], E = L[0], R = L[1], F = 3;
Math.max(e, i) >= 30 && (F = 2);
R - A > 0 && (O += 1.7 * F);
R - A < 0 && (O -= 1.7 * F);
E - b > 0 && (z -= 1.7 * F);
E - b < 0 && (z += 1.7 * F);
_.moveTo(z, O);
}
_.moveTo(z, O);
} else _.lineTo(z, O);
_.stroke();
if (S == v.length - 1) {
var H = this.calcArrowPoints(C, new cc.Vec2(z, O), u);
_.moveTo(z, O);
console.log(z);
_.lineTo(H[0].x, H[0].y);
_.lineTo(H[1].x, H[1].y);
_.close();
_.fill();
}
_.stroke();
} else if (w >= v.length - 1) {
b = (I = v[v.length - 1])[0], A = I[1];
var j = N / this.animate_gird_len - v.length + 1, V = N / this.animate_gird_len, K = this.getSubGirdPoint(I, j, C), X = this.getSubGirdPoint(I, V, C), Y = K[0], J = K[1], U = X[0], q = X[1], W = s * (J + .5) + c, Z = n * (Y + .5) + l + h.x, Q = h.y - W, $ = s * (q + .5) + c, tt = n * (U + .5) + l + h.x, et = h.y - $;
_.moveTo(Z, Q);
_.lineTo(tt, et);
_.stroke();
H = this.calcArrowPoints(C, new cc.Vec2(tt, et), u);
_.moveTo(tt, et);
_.lineTo(H[0].x, H[0].y);
_.lineTo(H[1].x, H[1].y);
_.close();
_.fill();
_.stroke();
}
}
}
}
} else cc.log("grapGrid is null drawGrid");
};
e.prototype.getSubGirdPoint = function(t, e, i) {
return 0 == i ? [ t[0], t[1] - e ] : 1 == i ? [ t[0] + e, t[1] ] : 2 == i ? [ t[0], t[1] + e ] : 3 == i ? [ t[0] - e, t[1] ] : void 0;
};
r([ p(cc.Graphics) ], e.prototype, "grapGrid", void 0);
r([ p(cc.Node) ], e.prototype, "bgError", void 0);
r([ p(cc.Node) ], e.prototype, "succeedNode", void 0);
r([ p(cc.Node) ], e.prototype, "fuhuoNode", void 0);
r([ p(cc.Node) ], e.prototype, "fuhuoNode2", void 0);
r([ p(cc.Node) ], e.prototype, "failedNode", void 0);
r([ p(cc.Slider) ], e.prototype, "silder", void 0);
r([ p(cc.SpriteFrame) ], e.prototype, "dqcolor", void 0);
r([ p(cc.Node) ], e.prototype, "nbcs", void 0);
return r([ u ], e);
}(cc.Component);
i.default = g;
cc._RF.pop();
}, {
"./HX_GKTGDYJ_AudioManager": "HX_GKTGDYJ_AudioManager",
"./HX_GKTGDYJ_DataManager": "HX_GKTGDYJ_DataManager",
"./HX_GKTGDYJ_GameMapData": "HX_GKTGDYJ_GameMapData"
} ],
HX_GKTGDYJ_ListItem: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "2e228m9vgBCSJKekK4kEIgl", "HX_GKTGDYJ_ListItem");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, o) {
var a, r = arguments.length, n = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, i, o); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (n = (r < 3 ? a(n) : r > 3 ? a(e, i, n) : a(e, i)) || n);
return r > 3 && n && Object.defineProperty(e, i, n), n;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n, s = cc._decorator, l = s.ccclass, c = s.property, h = s.disallowMultiple, d = s.menu, u = s.executionOrder;
(function(t) {
t[t.NONE = 0] = "NONE";
t[t.TOGGLE = 1] = "TOGGLE";
t[t.SWITCH = 2] = "SWITCH";
})(n || (n = {}));
var p = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.icon = null;
e.title = null;
e.selectedMode = n.NONE;
e.selectedFlag = null;
e.selectedSpriteFrame = null;
e._unselectedSpriteFrame = null;
e.adaptiveSize = !1;
e._selected = !1;
e._eventReg = !1;
return e;
}
Object.defineProperty(e.prototype, "selected", {
get: function() {
return this._selected;
},
set: function(t) {
this._selected = t;
if (this.selectedFlag) switch (this.selectedMode) {
case n.TOGGLE:
this.selectedFlag.active = t;
break;

case n.SWITCH:
var e = this.selectedFlag.getComponent(cc.Sprite);
e && (e.spriteFrame = t ? this.selectedSpriteFrame : this._unselectedSpriteFrame);
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "btnCom", {
get: function() {
this._btnCom || (this._btnCom = this.node.getComponent(cc.Button));
return this._btnCom;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
if (this.selectedMode == n.SWITCH) {
var t = this.selectedFlag.getComponent(cc.Sprite);
this._unselectedSpriteFrame = t.spriteFrame;
}
};
e.prototype.onDestroy = function() {
this.node.off(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
};
e.prototype._registerEvent = function() {
if (!this._eventReg) {
this.btnCom && this.list.selectedMode > 0 && this.btnCom.clickEvents.unshift(this.createEvt(this, "onClickThis"));
this.adaptiveSize && this.node.on(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
this._eventReg = !0;
}
};
e.prototype._onSizeChange = function() {
this.list._onItemAdaptive(this.node);
};
e.prototype.createEvt = function(t, e, i) {
void 0 === i && (i = null);
if (t.isValid) {
t.comName = t.comName || t.name.match(/\<(.*?)\>/g).pop().replace(/\<|>/g, "");
var o = new cc.Component.EventHandler();
o.target = i || t.node;
o.component = t.comName;
o.handler = e;
return o;
}
};
e.prototype.showAni = function(t, e, i) {
var o, a = this;
switch (t) {
case 0:
o = cc.tween(a.node).to(.2, {
scale: .7
}).by(.3, {
y: 2 * a.node.height
});
break;

case 1:
o = cc.tween(a.node).to(.2, {
scale: .7
}).by(.3, {
x: 2 * a.node.width
});
break;

case 2:
o = cc.tween(a.node).to(.2, {
scale: .7
}).by(.3, {
y: -2 * a.node.height
});
break;

case 3:
o = cc.tween(a.node).to(.2, {
scale: .7
}).by(.3, {
x: -2 * a.node.width
});
break;

default:
o = cc.tween(a.node).to(.3, {
scale: .1
});
}
(e || i) && o.call(function() {
if (i) {
a.list._delSingleItem(a.node);
for (var t = a.list.displayData.length - 1; t >= 0; t--) if (a.list.displayData[t].id == a.listId) {
a.list.displayData.splice(t, 1);
break;
}
}
e();
});
o.start();
};
e.prototype.onClickThis = function() {
this.list.selectedId = this.listId;
};
r([ c({
type: cc.Sprite,
tooltip: !1
}) ], e.prototype, "icon", void 0);
r([ c({
type: cc.Node,
tooltip: !1
}) ], e.prototype, "title", void 0);
r([ c({
type: cc.Enum(n),
tooltip: !1
}) ], e.prototype, "selectedMode", void 0);
r([ c({
type: cc.Node,
tooltip: !1,
visible: function() {
return this.selectedMode > n.NONE;
}
}) ], e.prototype, "selectedFlag", void 0);
r([ c({
type: cc.SpriteFrame,
tooltip: !1,
visible: function() {
return this.selectedMode == n.SWITCH;
}
}) ], e.prototype, "selectedSpriteFrame", void 0);
r([ c({
tooltip: !1
}) ], e.prototype, "adaptiveSize", void 0);
return r([ l, h(), d("自定义组件/List Item"), u(-5001) ], e);
}(cc.Component);
i.default = p;
cc._RF.pop();
}, {} ],
HX_GKTGDYJ_List: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c1cfbFFamFL37auqhSWu9/V", "HX_GKTGDYJ_List");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, o) {
var a, r = arguments.length, n = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, i, o); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (n = (r < 3 ? a(n) : r > 3 ? a(e, i, n) : a(e, i)) || n);
return r > 3 && n && Object.defineProperty(e, i, n), n;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n, s, l, c = t("./HX_GKTGDYJ_ListItem"), h = cc._decorator, d = h.ccclass, u = h.property, p = h.disallowMultiple, g = h.menu, m = h.executionOrder, y = h.requireComponent;
(function(t) {
t[t.NODE = 1] = "NODE";
t[t.PREFAB = 2] = "PREFAB";
})(n || (n = {}));
(function(t) {
t[t.NORMAL = 1] = "NORMAL";
t[t.ADHERING = 2] = "ADHERING";
t[t.PAGE = 3] = "PAGE";
})(s || (s = {}));
(function(t) {
t[t.NONE = 0] = "NONE";
t[t.SINGLE = 1] = "SINGLE";
t[t.MULT = 2] = "MULT";
})(l || (l = {}));
var f = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.templateType = n.NODE;
e.tmpNode = null;
e.tmpPrefab = null;
e._slideMode = s.NORMAL;
e.pageDistance = .3;
e.pageChangeEvent = new cc.Component.EventHandler();
e._virtual = !0;
e.cyclic = !1;
e.lackCenter = !1;
e.lackSlide = !1;
e._updateRate = 0;
e.frameByFrameRenderNum = 0;
e.renderEvent = new cc.Component.EventHandler();
e.selectedMode = l.NONE;
e.repeatEventSingle = !1;
e.selectedEvent = new cc.Component.EventHandler();
e._selectedId = -1;
e._forceUpdate = !1;
e._updateDone = !0;
e._numItems = 0;
e._inited = !1;
e._needUpdateWidget = !1;
e._aniDelRuning = !1;
e._doneAfterUpdate = !1;
e.adhering = !1;
e._adheringBarrier = !1;
e.curPageNum = 0;
return e;
}
Object.defineProperty(e.prototype, "slideMode", {
get: function() {
return this._slideMode;
},
set: function(t) {
this._slideMode = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "virtual", {
get: function() {
return this._virtual;
},
set: function(t) {
null != t && (this._virtual = t);
0 != this._numItems && this._onScrolling();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "updateRate", {
get: function() {
return this._updateRate;
},
set: function(t) {
t >= 0 && t <= 6 && (this._updateRate = t);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "selectedId", {
get: function() {
return this._selectedId;
},
set: function(t) {
var e, i = this;
switch (i.selectedMode) {
case l.SINGLE:
if (!i.repeatEventSingle && t == i._selectedId) return;
e = i.getItemByListId(t);
var o = void 0;
i._selectedId >= 0 ? i._lastSelectedId = i._selectedId : i._lastSelectedId = null;
i._selectedId = t;
e && ((o = e.getComponent(c.default)).selected = !0);
if (i._lastSelectedId >= 0 && i._lastSelectedId != i._selectedId) {
var a = i.getItemByListId(i._lastSelectedId);
a && (a.getComponent(c.default).selected = !1);
}
i.selectedEvent && cc.Component.EventHandler.emitEvents([ i.selectedEvent ], e, t % this._actualNumItems, null == i._lastSelectedId ? null : i._lastSelectedId % this._actualNumItems);
break;

case l.MULT:
if (!(e = i.getItemByListId(t))) return;
o = e.getComponent(c.default);
i._selectedId >= 0 && (i._lastSelectedId = i._selectedId);
i._selectedId = t;
var r = !o.selected;
o.selected = r;
var n = i.multSelected.indexOf(t);
r && n < 0 ? i.multSelected.push(t) : !r && n >= 0 && i.multSelected.splice(n, 1);
i.selectedEvent && cc.Component.EventHandler.emitEvents([ i.selectedEvent ], e, t % this._actualNumItems, null == i._lastSelectedId ? null : i._lastSelectedId % this._actualNumItems, r);
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "numItems", {
get: function() {
return this._actualNumItems;
},
set: function(t) {
var e = this;
if (e.checkInited(!1)) if (null == t || t < 0) cc.error("numItems set the wrong::", t); else {
e._actualNumItems = e._numItems = t;
e._forceUpdate = !0;
if (e._virtual) {
e._resizeContent();
e.cyclic && (e._numItems = e._cyclicNum * e._numItems);
e._onScrolling();
e.frameByFrameRenderNum || e.slideMode != s.PAGE || (e.curPageNum = e.nearestListId);
} else {
if (e.cyclic) {
e._resizeContent();
e._numItems = e._cyclicNum * e._numItems;
}
var i = e.content.getComponent(cc.Layout);
i && (i.enabled = !0);
e._delRedundantItem();
e.firstListId = 0;
if (e.frameByFrameRenderNum > 0) {
for (var o = e.frameByFrameRenderNum > e._numItems ? e._numItems : e.frameByFrameRenderNum, a = 0; a < o; a++) e._createOrUpdateItem2(a);
if (e.frameByFrameRenderNum < e._numItems) {
e._updateCounter = e.frameByFrameRenderNum;
e._updateDone = !1;
}
} else {
for (a = 0; a < e._numItems; a++) e._createOrUpdateItem2(a);
e.displayItemNum = e._numItems;
}
}
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "scrollView", {
get: function() {
return this._scrollView;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
this._init();
};
e.prototype.onDestroy = function() {
var t = this;
cc.isValid(t._itemTmp) && t._itemTmp.destroy();
cc.isValid(t.tmpNode) && t.tmpNode.destroy();
t._pool && t._pool.clear();
};
e.prototype.onEnable = function() {
this._registerEvent();
this._init();
if (this._aniDelRuning) {
this._aniDelRuning = !1;
if (this._aniDelItem) {
if (this._aniDelBeforePos) {
this._aniDelItem.position = this._aniDelBeforePos;
delete this._aniDelBeforePos;
}
if (this._aniDelBeforeScale) {
this._aniDelItem.scale = this._aniDelBeforeScale;
delete this._aniDelBeforeScale;
}
delete this._aniDelItem;
}
if (this._aniDelCB) {
this._aniDelCB();
delete this._aniDelCB;
}
}
};
e.prototype.onDisable = function() {
this._unregisterEvent();
};
e.prototype._registerEvent = function() {
var t = this;
t.node.on(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, !0);
t.node.on("touch-up", t._onTouchUp, t);
t.node.on(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, !0);
t.node.on("scroll-began", t._onScrollBegan, t, !0);
t.node.on("scroll-ended", t._onScrollEnded, t, !0);
t.node.on("scrolling", t._onScrolling, t, !0);
t.node.on(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
};
e.prototype._unregisterEvent = function() {
var t = this;
t.node.off(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, !0);
t.node.off("touch-up", t._onTouchUp, t);
t.node.off(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, !0);
t.node.off("scroll-began", t._onScrollBegan, t, !0);
t.node.off("scroll-ended", t._onScrollEnded, t, !0);
t.node.off("scrolling", t._onScrolling, t, !0);
t.node.off(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
};
e.prototype._init = function() {
var t = this;
if (!t._inited) {
t._scrollView = t.node.getComponent(cc.ScrollView);
t.content = t._scrollView.content;
if (t.content) {
t._layout = t.content.getComponent(cc.Layout);
t._align = t._layout.type;
t._resizeMode = t._layout.resizeMode;
t._startAxis = t._layout.startAxis;
t._topGap = t._layout.paddingTop;
t._rightGap = t._layout.paddingRight;
t._bottomGap = t._layout.paddingBottom;
t._leftGap = t._layout.paddingLeft;
t._columnGap = t._layout.spacingX;
t._lineGap = t._layout.spacingY;
t._colLineNum;
t._verticalDir = t._layout.verticalDirection;
t._horizontalDir = t._layout.horizontalDirection;
t.setTemplateItem(cc.instantiate(t.templateType == n.PREFAB ? t.tmpPrefab : t.tmpNode));
if (t._slideMode == s.ADHERING || t._slideMode == s.PAGE) {
t._scrollView.inertia = !1;
t._scrollView._onMouseWheel = function() {};
}
t.virtual || (t.lackCenter = !1);
t._lastDisplayData = [];
t.displayData = [];
t._pool = new cc.NodePool();
t._forceUpdate = !1;
t._updateCounter = 0;
t._updateDone = !0;
t.curPageNum = 0;
if (t.cyclic) {
t._scrollView._processAutoScrolling = this._processAutoScrolling.bind(t);
t._scrollView._startBounceBackIfNeeded = function() {
return !1;
};
}
switch (t._align) {
case cc.Layout.Type.HORIZONTAL:
switch (t._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
t._alignCalcType = 1;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
t._alignCalcType = 2;
}
break;

case cc.Layout.Type.VERTICAL:
switch (t._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
t._alignCalcType = 3;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
t._alignCalcType = 4;
}
break;

case cc.Layout.Type.GRID:
switch (t._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
switch (t._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
t._alignCalcType = 3;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
t._alignCalcType = 4;
}
break;

case cc.Layout.AxisDirection.VERTICAL:
switch (t._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
t._alignCalcType = 1;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
t._alignCalcType = 2;
}
}
}
t.content.removeAllChildren();
t._inited = !0;
} else cc.error(t.node.name + "'s cc.ScrollView unset content!");
}
};
e.prototype._processAutoScrolling = function(t) {
this._scrollView._autoScrollAccumulatedTime += 1 * t;
var e = Math.min(1, this._scrollView._autoScrollAccumulatedTime / this._scrollView._autoScrollTotalTime);
if (this._scrollView._autoScrollAttenuate) {
var i = e - 1;
e = i * i * i * i * i + 1;
}
var o = this._scrollView._autoScrollStartPosition.add(this._scrollView._autoScrollTargetDelta.mul(e)), a = this._scrollView.getScrollEndedEventTiming(), r = Math.abs(e - 1) <= a;
if (Math.abs(e - 1) <= this._scrollView.getScrollEndedEventTiming() && !this._scrollView._isScrollEndedWithThresholdEventFired) {
this._scrollView._dispatchEvent("scroll-ended-with-threshold");
this._scrollView._isScrollEndedWithThresholdEventFired = !0;
}
r && (this._scrollView._autoScrolling = !1);
var n = o.sub(this._scrollView.getContentPosition());
this._scrollView._moveContent(this._scrollView._clampDelta(n), r);
this._scrollView._dispatchEvent("scrolling");
if (!this._scrollView._autoScrolling) {
this._scrollView._isBouncing = !1;
this._scrollView._scrolling = !1;
this._scrollView._dispatchEvent("scroll-ended");
}
};
e.prototype.setTemplateItem = function(t) {
if (t) {
var e = this;
e._itemTmp = t;
e._resizeMode == cc.Layout.ResizeMode.CHILDREN ? e._itemSize = e._layout.cellSize : e._itemSize = cc.size(t.width, t.height);
var i = t.getComponent(c.default), o = !1;
i || (o = !0);
o && (e.selectedMode = l.NONE);
(i = t.getComponent(cc.Widget)) && i.enabled && (e._needUpdateWidget = !0);
e.selectedMode == l.MULT && (e.multSelected = []);
switch (e._align) {
case cc.Layout.Type.HORIZONTAL:
e._colLineNum = 1;
e._sizeType = !1;
break;

case cc.Layout.Type.VERTICAL:
e._colLineNum = 1;
e._sizeType = !0;
break;

case cc.Layout.Type.GRID:
switch (e._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
var a = e.content.width - e._leftGap - e._rightGap;
e._colLineNum = Math.floor((a + e._columnGap) / (e._itemSize.width + e._columnGap));
e._sizeType = !0;
break;

case cc.Layout.AxisDirection.VERTICAL:
var r = e.content.height - e._topGap - e._bottomGap;
e._colLineNum = Math.floor((r + e._lineGap) / (e._itemSize.height + e._lineGap));
e._sizeType = !1;
}
}
}
};
e.prototype.checkInited = function(t) {
void 0 === t && (t = !0);
if (!this._inited) {
t && cc.error("List initialization not completed!");
return !1;
}
return !0;
};
e.prototype._resizeContent = function() {
var t, e = this;
switch (e._align) {
case cc.Layout.Type.HORIZONTAL:
if (e._customSize) {
var i = e._getFixedSize(null);
t = e._leftGap + i.val + e._itemSize.width * (e._numItems - i.count) + e._columnGap * (e._numItems - 1) + e._rightGap;
} else t = e._leftGap + e._itemSize.width * e._numItems + e._columnGap * (e._numItems - 1) + e._rightGap;
break;

case cc.Layout.Type.VERTICAL:
if (e._customSize) {
i = e._getFixedSize(null);
t = e._topGap + i.val + e._itemSize.height * (e._numItems - i.count) + e._lineGap * (e._numItems - 1) + e._bottomGap;
} else t = e._topGap + e._itemSize.height * e._numItems + e._lineGap * (e._numItems - 1) + e._bottomGap;
break;

case cc.Layout.Type.GRID:
e.lackCenter && (e.lackCenter = !1);
switch (e._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
var o = Math.ceil(e._numItems / e._colLineNum);
t = e._topGap + e._itemSize.height * o + e._lineGap * (o - 1) + e._bottomGap;
break;

case cc.Layout.AxisDirection.VERTICAL:
var a = Math.ceil(e._numItems / e._colLineNum);
t = e._leftGap + e._itemSize.width * a + e._columnGap * (a - 1) + e._rightGap;
}
}
var r = e.content.getComponent(cc.Layout);
r && (r.enabled = !1);
e._allItemSize = t;
e._allItemSizeNoEdge = e._allItemSize - (e._sizeType ? e._topGap + e._bottomGap : e._leftGap + e._rightGap);
if (e.cyclic) {
var n = e._sizeType ? e.node.height : e.node.width;
e._cyclicPos1 = 0;
n -= e._cyclicPos1;
e._cyclicNum = Math.ceil(n / e._allItemSizeNoEdge) + 1;
var s = e._sizeType ? e._lineGap : e._columnGap;
e._cyclicPos2 = e._cyclicPos1 + e._allItemSizeNoEdge + s;
e._cyclicAllItemSize = e._allItemSize + e._allItemSizeNoEdge * (e._cyclicNum - 1) + s * (e._cyclicNum - 1);
e._cycilcAllItemSizeNoEdge = e._allItemSizeNoEdge * e._cyclicNum;
e._cycilcAllItemSizeNoEdge += s * (e._cyclicNum - 1);
}
e._lack = !e.cyclic && e._allItemSize < (e._sizeType ? e.node.height : e.node.width);
var l = e._lack && e.lackCenter || !e.lackSlide ? .1 : 0, c = e._lack ? (e._sizeType ? e.node.height : e.node.width) - l : e.cyclic ? e._cyclicAllItemSize : e._allItemSize;
c < 0 && (c = 0);
e._sizeType ? e.content.height = c : e.content.width = c;
};
e.prototype._onScrolling = function(t) {
void 0 === t && (t = null);
null == this.frameCount && (this.frameCount = this._updateRate);
if (!this._forceUpdate && t && "scroll-ended" != t.type && this.frameCount > 0) this.frameCount--; else {
this.frameCount = this._updateRate;
if (!this._aniDelRuning) {
if (this.cyclic) {
var e = this.content.getPosition();
e = this._sizeType ? e.y : e.x;
var i = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap), o = this._sizeType ? cc.v2(0, i) : cc.v2(i, 0);
switch (this._alignCalcType) {
case 1:
if (e > -this._cyclicPos1) {
this.content.x = -this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(o));
} else if (e < -this._cyclicPos2) {
this.content.x = -this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(o));
}
break;

case 2:
if (e < this._cyclicPos1) {
this.content.x = this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(o));
} else if (e > this._cyclicPos2) {
this.content.x = this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(o));
}
break;

case 3:
if (e < this._cyclicPos1) {
this.content.y = this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(o));
} else if (e > this._cyclicPos2) {
this.content.y = this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(o));
}
break;

case 4:
if (e > -this._cyclicPos1) {
this.content.y = -this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(o));
} else if (e < -this._cyclicPos2) {
this.content.y = -this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(o));
}
}
}
this._calcViewPos();
var a, r, n, s;
if (this._sizeType) {
a = this.viewTop;
n = this.viewBottom;
} else {
r = this.viewRight;
s = this.viewLeft;
}
if (this._virtual) {
this.displayData = [];
var l = void 0, c = 0, h = this._numItems - 1;
if (this._customSize) for (var d = !1; c <= h && !d; c++) {
l = this._calcItemPos(c);
switch (this._align) {
case cc.Layout.Type.HORIZONTAL:
l.right >= s && l.left <= r ? this.displayData.push(l) : 0 != c && this.displayData.length > 0 && (d = !0);
break;

case cc.Layout.Type.VERTICAL:
l.bottom <= a && l.top >= n ? this.displayData.push(l) : 0 != c && this.displayData.length > 0 && (d = !0);
break;

case cc.Layout.Type.GRID:
switch (this._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
l.bottom <= a && l.top >= n ? this.displayData.push(l) : 0 != c && this.displayData.length > 0 && (d = !0);
break;

case cc.Layout.AxisDirection.VERTICAL:
l.right >= s && l.left <= r ? this.displayData.push(l) : 0 != c && this.displayData.length > 0 && (d = !0);
}
}
} else {
var u = this._itemSize.width + this._columnGap, p = this._itemSize.height + this._lineGap;
switch (this._alignCalcType) {
case 1:
c = (s - this._leftGap) / u;
h = (r - this._leftGap) / u;
break;

case 2:
c = (-r - this._rightGap) / u;
h = (-s - this._rightGap) / u;
break;

case 3:
c = (-a - this._topGap) / p;
h = (-n - this._topGap) / p;
break;

case 4:
c = (n - this._bottomGap) / p;
h = (a - this._bottomGap) / p;
}
c = Math.floor(c) * this._colLineNum;
h = Math.ceil(h) * this._colLineNum;
c < 0 && (c = 0);
--h >= this._numItems && (h = this._numItems - 1);
for (;c <= h; c++) this.displayData.push(this._calcItemPos(c));
}
this._delRedundantItem();
if (this.displayData.length <= 0 || !this._numItems) {
this._lastDisplayData = [];
return;
}
this.firstListId = this.displayData[0].id;
this.displayItemNum = this.displayData.length;
var g = this._lastDisplayData.length, m = this.displayItemNum != g;
if (m) {
this.frameByFrameRenderNum > 0 && this._lastDisplayData.sort(function(t, e) {
return t - e;
});
m = this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[g - 1];
}
if (this._forceUpdate || m) if (this.frameByFrameRenderNum > 0) if (this._numItems > 0) {
this._updateDone ? this._updateCounter = 0 : this._doneAfterUpdate = !0;
this._updateDone = !1;
} else {
this._updateCounter = 0;
this._updateDone = !0;
} else {
this._lastDisplayData = [];
for (var y = 0; y < this.displayItemNum; y++) this._createOrUpdateItem(this.displayData[y]);
this._forceUpdate = !1;
}
this._calcNearestItem();
}
}
}
};
e.prototype._calcViewPos = function() {
var t = this.content.getPosition();
switch (this._alignCalcType) {
case 1:
this.elasticLeft = t.x > 0 ? t.x : 0;
this.viewLeft = (t.x < 0 ? -t.x : 0) - this.elasticLeft;
this.viewRight = this.viewLeft + this.node.width;
this.elasticRight = this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0;
this.viewRight += this.elasticRight;
break;

case 2:
this.elasticRight = t.x < 0 ? -t.x : 0;
this.viewRight = (t.x > 0 ? -t.x : 0) + this.elasticRight;
this.viewLeft = this.viewRight - this.node.width;
this.elasticLeft = this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0;
this.viewLeft -= this.elasticLeft;
break;

case 3:
this.elasticTop = t.y < 0 ? Math.abs(t.y) : 0;
this.viewTop = (t.y > 0 ? -t.y : 0) + this.elasticTop;
this.viewBottom = this.viewTop - this.node.height;
this.elasticBottom = this.viewBottom < -this.content.height ? Math.abs(this.viewBottom + this.content.height) : 0;
this.viewBottom += this.elasticBottom;
break;

case 4:
this.elasticBottom = t.y > 0 ? Math.abs(t.y) : 0;
this.viewBottom = (t.y < 0 ? -t.y : 0) - this.elasticBottom;
this.viewTop = this.viewBottom + this.node.height;
this.elasticTop = this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0;
this.viewTop -= this.elasticTop;
}
};
e.prototype._calcItemPos = function(t) {
var e, i, o, a, r, n, s, l;
switch (this._align) {
case cc.Layout.Type.HORIZONTAL:
switch (this._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
if (this._customSize) {
var c = this._getFixedSize(t);
r = this._leftGap + (this._itemSize.width + this._columnGap) * (t - c.count) + (c.val + this._columnGap * c.count);
e = (h = this._customSize[t]) > 0 ? h : this._itemSize.width;
} else {
r = this._leftGap + (this._itemSize.width + this._columnGap) * t;
e = this._itemSize.width;
}
if (this.lackCenter) {
r -= this._leftGap;
r += this.content.width / 2 - this._allItemSizeNoEdge / 2;
}
return {
id: t,
left: r,
right: n = r + e,
x: r + this._itemTmp.anchorX * e,
y: this._itemTmp.y
};

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
if (this._customSize) {
c = this._getFixedSize(t);
n = -this._rightGap - (this._itemSize.width + this._columnGap) * (t - c.count) - (c.val + this._columnGap * c.count);
e = (h = this._customSize[t]) > 0 ? h : this._itemSize.width;
} else {
n = -this._rightGap - (this._itemSize.width + this._columnGap) * t;
e = this._itemSize.width;
}
if (this.lackCenter) {
n += this._rightGap;
n -= this.content.width / 2 - this._allItemSizeNoEdge / 2;
}
return {
id: t,
right: n,
left: r = n - e,
x: r + this._itemTmp.anchorX * e,
y: this._itemTmp.y
};
}
break;

case cc.Layout.Type.VERTICAL:
switch (this._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
if (this._customSize) {
c = this._getFixedSize(t);
o = -this._topGap - (this._itemSize.height + this._lineGap) * (t - c.count) - (c.val + this._lineGap * c.count);
i = (h = this._customSize[t]) > 0 ? h : this._itemSize.height;
} else {
o = -this._topGap - (this._itemSize.height + this._lineGap) * t;
i = this._itemSize.height;
}
if (this.lackCenter) {
o += this._topGap;
o -= this.content.height / 2 - this._allItemSizeNoEdge / 2;
}
return {
id: t,
top: o,
bottom: a = o - i,
x: this._itemTmp.x,
y: a + this._itemTmp.anchorY * i
};

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
if (this._customSize) {
var h;
c = this._getFixedSize(t);
a = this._bottomGap + (this._itemSize.height + this._lineGap) * (t - c.count) + (c.val + this._lineGap * c.count);
i = (h = this._customSize[t]) > 0 ? h : this._itemSize.height;
} else {
a = this._bottomGap + (this._itemSize.height + this._lineGap) * t;
i = this._itemSize.height;
}
if (this.lackCenter) {
a -= this._bottomGap;
a += this.content.height / 2 - this._allItemSizeNoEdge / 2;
}
return {
id: t,
top: o = a + i,
bottom: a,
x: this._itemTmp.x,
y: a + this._itemTmp.anchorY * i
};
}

case cc.Layout.Type.GRID:
var d = Math.floor(t / this._colLineNum);
switch (this._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
switch (this._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
l = (a = (o = -this._topGap - (this._itemSize.height + this._lineGap) * d) - this._itemSize.height) + this._itemTmp.anchorY * this._itemSize.height;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
o = (a = this._bottomGap + (this._itemSize.height + this._lineGap) * d) + this._itemSize.height;
l = a + this._itemTmp.anchorY * this._itemSize.height;
}
s = this._leftGap + t % this._colLineNum * (this._itemSize.width + this._columnGap);
switch (this._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
s += this._itemTmp.anchorX * this._itemSize.width;
s -= this.content.anchorX * this.content.width;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
s += (1 - this._itemTmp.anchorX) * this._itemSize.width;
s -= (1 - this.content.anchorX) * this.content.width;
s *= -1;
}
return {
id: t,
top: o,
bottom: a,
x: s,
y: l
};

case cc.Layout.AxisDirection.VERTICAL:
switch (this._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
n = (r = this._leftGap + (this._itemSize.width + this._columnGap) * d) + this._itemSize.width;
s = r + this._itemTmp.anchorX * this._itemSize.width;
s -= this.content.anchorX * this.content.width;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
s = (r = (n = -this._rightGap - (this._itemSize.width + this._columnGap) * d) - this._itemSize.width) + this._itemTmp.anchorX * this._itemSize.width;
s += (1 - this.content.anchorX) * this.content.width;
}
l = -this._topGap - t % this._colLineNum * (this._itemSize.height + this._lineGap);
switch (this._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
l -= (1 - this._itemTmp.anchorY) * this._itemSize.height;
l += (1 - this.content.anchorY) * this.content.height;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
l -= this._itemTmp.anchorY * this._itemSize.height;
l += this.content.anchorY * this.content.height;
l *= -1;
}
return {
id: t,
left: r,
right: n,
x: s,
y: l
};
}
}
};
e.prototype._calcExistItemPos = function(t) {
var e = this.getItemByListId(t);
if (!e) return null;
var i = {
id: t,
x: e.x,
y: e.y
};
if (this._sizeType) {
i.top = e.y + e.height * (1 - e.anchorY);
i.bottom = e.y - e.height * e.anchorY;
} else {
i.left = e.x - e.width * e.anchorX;
i.right = e.x + e.width * (1 - e.anchorX);
}
return i;
};
e.prototype.getItemPos = function(t) {
return this._virtual ? this._calcItemPos(t) : this.frameByFrameRenderNum ? this._calcItemPos(t) : this._calcExistItemPos(t);
};
e.prototype._getFixedSize = function(t) {
if (!this._customSize) return null;
null == t && (t = this._numItems);
var e = 0, i = 0;
for (var o in this._customSize) if (parseInt(o) < t) {
e += this._customSize[o];
i++;
}
return {
val: e,
count: i
};
};
e.prototype._onScrollBegan = function() {
this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
};
e.prototype._onScrollEnded = function() {
var t = this;
t.curScrollIsTouch = !1;
if (null != t.scrollToListId) {
var e = t.getItemByListId(t.scrollToListId);
t.scrollToListId = null;
e && cc.tween(e).to(.1, {
scale: 1.06
}).to(.1, {
scale: 1
}).start();
}
t._onScrolling();
t._slideMode != s.ADHERING || t.adhering ? t._slideMode == s.PAGE && (null != t._beganPos && t.curScrollIsTouch ? this._pageAdhere() : t.adhere()) : t.adhere();
};
e.prototype._onTouchStart = function(t, e) {
if (!this._scrollView.hasNestedViewGroup(t, e)) {
this.curScrollIsTouch = !0;
if (t.eventPhase !== cc.Event.AT_TARGET || t.target !== this.node) {
for (var i = t.target; null == i._listId && i.parent; ) i = i.parent;
this._scrollItem = null != i._listId ? i : t.target;
}
}
};
e.prototype._onTouchUp = function() {
var t = this;
t._scrollPos = null;
if (t._slideMode == s.ADHERING) {
this.adhering && (this._adheringBarrier = !0);
t.adhere();
} else t._slideMode == s.PAGE && (null != t._beganPos ? this._pageAdhere() : t.adhere());
this._scrollItem = null;
};
e.prototype._onTouchCancelled = function(t, e) {
var i = this;
if (!i._scrollView.hasNestedViewGroup(t, e) && !t.simulate) {
i._scrollPos = null;
if (i._slideMode == s.ADHERING) {
i.adhering && (i._adheringBarrier = !0);
i.adhere();
} else i._slideMode == s.PAGE && (null != i._beganPos ? i._pageAdhere() : i.adhere());
this._scrollItem = null;
}
};
e.prototype._onSizeChanged = function() {
this.checkInited(!1) && this._onScrolling();
};
e.prototype._onItemAdaptive = function(t) {
if (!this._sizeType && t.width != this._itemSize.width || this._sizeType && t.height != this._itemSize.height) {
this._customSize || (this._customSize = {});
var e = this._sizeType ? t.height : t.width;
if (this._customSize[t._listId] != e) {
this._customSize[t._listId] = e;
this._resizeContent();
this.updateAll();
if (null != this._scrollToListId) {
this._scrollPos = null;
this.unschedule(this._scrollToSo);
this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - new Date().getTime() / 1e3));
}
}
}
};
e.prototype._pageAdhere = function() {
var t = this;
if (t.cyclic || !(t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) {
var e = t._sizeType ? t.viewTop : t.viewLeft, i = (t._sizeType ? t.node.height : t.node.width) * t.pageDistance;
if (Math.abs(t._beganPos - e) > i) switch (t._alignCalcType) {
case 1:
case 4:
t._beganPos > e ? t.prePage(.5) : t.nextPage(.5);
break;

case 2:
case 3:
t._beganPos < e ? t.prePage(.5) : t.nextPage(.5);
} else t.elasticTop <= 0 && t.elasticRight <= 0 && t.elasticBottom <= 0 && t.elasticLeft <= 0 && t.adhere();
t._beganPos = null;
}
};
e.prototype.adhere = function() {
var t = this;
if (t.checkInited() && !(t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) {
t.adhering = !0;
t._calcNearestItem();
var e = (t._sizeType ? t._topGap : t._leftGap) / (t._sizeType ? t.node.height : t.node.width);
t.scrollTo(t.nearestListId, .7, e);
}
};
e.prototype.update = function() {
if (!(this.frameByFrameRenderNum <= 0 || this._updateDone)) if (this._virtual) {
for (var t = this._updateCounter + this.frameByFrameRenderNum > this.displayItemNum ? this.displayItemNum : this._updateCounter + this.frameByFrameRenderNum, e = this._updateCounter; e < t; e++) {
var i = this.displayData[e];
i && this._createOrUpdateItem(i);
}
if (this._updateCounter >= this.displayItemNum - 1) if (this._doneAfterUpdate) {
this._updateCounter = 0;
this._updateDone = !1;
this._doneAfterUpdate = !1;
} else {
this._updateDone = !0;
this._delRedundantItem();
this._forceUpdate = !1;
this._calcNearestItem();
this.slideMode == s.PAGE && (this.curPageNum = this.nearestListId);
} else this._updateCounter += this.frameByFrameRenderNum;
} else if (this._updateCounter < this._numItems) {
for (t = this._updateCounter + this.frameByFrameRenderNum > this._numItems ? this._numItems : this._updateCounter + this.frameByFrameRenderNum, 
e = this._updateCounter; e < t; e++) this._createOrUpdateItem2(e);
this._updateCounter += this.frameByFrameRenderNum;
} else {
this._updateDone = !0;
this._calcNearestItem();
this.slideMode == s.PAGE && (this.curPageNum = this.nearestListId);
}
};
e.prototype._createOrUpdateItem = function(t) {
var e = this.getItemByListId(t.id);
if (e) {
if (this._forceUpdate && this.renderEvent) {
e.setPosition(cc.v2(t.x, t.y));
this._resetItemSize(e);
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], e, t.id % this._actualNumItems);
}
} else {
var i = this._pool.size() > 0;
e = i ? this._pool.get() : cc.instantiate(this._itemTmp);
if (!i || !cc.isValid(e)) {
e = cc.instantiate(this._itemTmp);
i = !1;
}
if (e._listId != t.id) {
e._listId = t.id;
e.setContentSize(this._itemSize);
}
e.setPosition(cc.v2(t.x, t.y));
this._resetItemSize(e);
this.content.addChild(e);
if (i && this._needUpdateWidget) {
var o = e.getComponent(cc.Widget);
o && o.updateAlignment();
}
e.setSiblingIndex(this.content.childrenCount - 1);
var a = e.getComponent(c.default);
e.listItem = a;
if (a) {
a.listId = t.id;
a.list = this;
a._registerEvent();
}
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], e, t.id % this._actualNumItems);
}
this._resetItemSize(e);
this._updateListItem(e.listItem);
this._lastDisplayData.indexOf(t.id) < 0 && this._lastDisplayData.push(t.id);
};
e.prototype._createOrUpdateItem2 = function(t) {
var e, i = this.content.children[t];
if (i) {
if (this._forceUpdate && this.renderEvent) {
i._listId = t;
e && (e.listId = t);
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], i, t % this._actualNumItems);
}
} else {
(i = cc.instantiate(this._itemTmp))._listId = t;
this.content.addChild(i);
e = i.getComponent(c.default);
i.listItem = e;
if (e) {
e.listId = t;
e.list = this;
e._registerEvent();
}
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], i, t % this._actualNumItems);
}
this._updateListItem(e);
this._lastDisplayData.indexOf(t) < 0 && this._lastDisplayData.push(t);
};
e.prototype._updateListItem = function(t) {
if (t && this.selectedMode > l.NONE) {
var e = t.node;
switch (this.selectedMode) {
case l.SINGLE:
t.selected = this.selectedId == e._listId;
break;

case l.MULT:
t.selected = this.multSelected.indexOf(e._listId) >= 0;
}
}
};
e.prototype._resetItemSize = function() {};
e.prototype._updateItemPos = function(t) {
var e = isNaN(t) ? t : this.getItemByListId(t), i = this.getItemPos(e._listId);
e.setPosition(i.x, i.y);
};
e.prototype.setMultSelected = function(t, e) {
var i = this;
if (i.checkInited()) {
Array.isArray(t) || (t = [ t ]);
if (null == e) i.multSelected = t; else {
var o = void 0, a = void 0;
if (e) for (var r = t.length - 1; r >= 0; r--) {
o = t[r];
(a = i.multSelected.indexOf(o)) < 0 && i.multSelected.push(o);
} else for (r = t.length - 1; r >= 0; r--) {
o = t[r];
(a = i.multSelected.indexOf(o)) >= 0 && i.multSelected.splice(a, 1);
}
}
i._forceUpdate = !0;
i._onScrolling();
}
};
e.prototype.getMultSelected = function() {
return this.multSelected;
};
e.prototype.hasMultSelected = function(t) {
return this.multSelected && this.multSelected.indexOf(t) >= 0;
};
e.prototype.updateItem = function(t) {
if (this.checkInited()) {
Array.isArray(t) || (t = [ t ]);
for (var e = 0, i = t.length; e < i; e++) {
var o = t[e], a = this.getItemByListId(o);
a && cc.Component.EventHandler.emitEvents([ this.renderEvent ], a, o % this._actualNumItems);
}
}
};
e.prototype.updateAll = function() {
this.checkInited() && (this.numItems = this.numItems);
};
e.prototype.getItemByListId = function(t) {
if (this.content) for (var e = this.content.childrenCount - 1; e >= 0; e--) {
var i = this.content.children[e];
if (i._listId == t) return i;
}
};
e.prototype._getOutsideItem = function() {
for (var t, e = [], i = this.content.childrenCount - 1; i >= 0; i--) {
t = this.content.children[i];
this.displayData.find(function(e) {
return e.id == t._listId;
}) || e.push(t);
}
return e;
};
e.prototype._delRedundantItem = function() {
if (this._virtual) for (var t = this._getOutsideItem(), e = t.length - 1; e >= 0; e--) {
var i = t[e];
if (!this._scrollItem || i._listId != this._scrollItem._listId) {
i.isCached = !0;
this._pool.put(i);
for (var o = this._lastDisplayData.length - 1; o >= 0; o--) if (this._lastDisplayData[o] == i._listId) {
this._lastDisplayData.splice(o, 1);
break;
}
}
} else for (;this.content.childrenCount > this._numItems; ) this._delSingleItem(this.content.children[this.content.childrenCount - 1]);
};
e.prototype._delSingleItem = function(t) {
t.removeFromParent();
t.destroy && t.destroy();
t = null;
};
e.prototype.aniDelItem = function(t, e, i) {
var o = this;
if (!o.checkInited() || o.cyclic || !o._virtual) return cc.error("This function is not allowed to be called!");
if (!e) return cc.error("CallFunc are not allowed to be NULL, You need to delete the corresponding index in the data array in the CallFunc!");
if (o._aniDelRuning) return cc.warn("Please wait for the current deletion to finish!");
var a, r = o.getItemByListId(t);
if (r) {
a = r.getComponent(c.default);
o._aniDelRuning = !0;
o._aniDelCB = e;
o._aniDelItem = r;
o._aniDelBeforePos = r.position;
o._aniDelBeforeScale = r.scale;
var n = o.displayData[o.displayData.length - 1].id, s = a.selected;
a.showAni(i, function() {
var i, a, c;
n < o._numItems - 2 && (i = n + 1);
if (null != i) {
var h = o._calcItemPos(i);
o.displayData.push(h);
o._virtual ? o._createOrUpdateItem(h) : o._createOrUpdateItem2(i);
} else o._numItems--;
if (o.selectedMode == l.SINGLE) s ? o._selectedId = -1 : o._selectedId - 1 >= 0 && o._selectedId--; else if (o.selectedMode == l.MULT && o.multSelected.length) {
var d = o.multSelected.indexOf(t);
d >= 0 && o.multSelected.splice(d, 1);
for (var u = o.multSelected.length - 1; u >= 0; u--) (m = o.multSelected[u]) >= t && o.multSelected[u]--;
}
if (o._customSize) {
o._customSize[t] && delete o._customSize[t];
var p = {}, g = void 0;
for (var m in o._customSize) {
g = o._customSize[m];
var y = parseInt(m);
p[y - (y >= t ? 1 : 0)] = g;
}
o._customSize = p;
}
for (u = null != i ? i : n; u >= t + 1; u--) if (r = o.getItemByListId(u)) {
var f = o._calcItemPos(u - 1);
a = cc.tween(r).to(.2333, {
position: cc.v2(f.x, f.y)
});
if (u <= t + 1) {
c = !0;
a.call(function() {
o._aniDelRuning = !1;
e(t);
delete o._aniDelCB;
});
}
a.start();
}
if (!c) {
o._aniDelRuning = !1;
e(t);
o._aniDelCB = null;
}
}, !0);
} else e(t);
};
e.prototype.scrollTo = function(t, e, i, o) {
void 0 === e && (e = .5);
void 0 === i && (i = null);
void 0 === o && (o = !1);
var a = this;
if (a.checkInited(!1)) {
null == e ? e = .5 : e < 0 && (e = 0);
t < 0 ? t = 0 : t >= a._numItems && (t = a._numItems - 1);
!a._virtual && a._layout && a._layout.enabled && a._layout.updateLayout();
var r, n, s = a.getItemPos(t);
if (!s) return !1;
switch (a._alignCalcType) {
case 1:
r = s.left;
r -= null != i ? a.node.width * i : a._leftGap;
s = cc.v2(r, 0);
break;

case 2:
r = s.right - a.node.width;
r += null != i ? a.node.width * i : a._rightGap;
s = cc.v2(r + a.content.width, 0);
break;

case 3:
n = s.top;
n += null != i ? a.node.height * i : a._topGap;
s = cc.v2(0, -n);
break;

case 4:
n = s.bottom + a.node.height;
n -= null != i ? a.node.height * i : a._bottomGap;
s = cc.v2(0, -n + a.content.height);
}
var l = a.content.getPosition();
l = Math.abs(a._sizeType ? l.y : l.x);
var c = a._sizeType ? s.y : s.x;
if (Math.abs((null != a._scrollPos ? a._scrollPos : l) - c) > .5) {
a._scrollView.scrollToOffset(s, e);
a._scrollToListId = t;
a._scrollToEndTime = new Date().getTime() / 1e3 + e;
a._scrollToSo = a.scheduleOnce(function() {
a._adheringBarrier || (a.adhering = a._adheringBarrier = !1);
a._scrollPos = a._scrollToListId = a._scrollToEndTime = a._scrollToSo = null;
if (o) {
var e = a.getItemByListId(t);
e && cc.tween(e).to(.1, {
scale: 1.05
}).to(.1, {
scale: 1
}).start();
}
}, e + .1);
e <= 0 && a._onScrolling();
}
}
};
e.prototype._calcNearestItem = function() {
var t, e, i, o, a, r, n = this;
n.nearestListId = null;
n._virtual && n._calcViewPos();
i = n.viewTop;
o = n.viewRight;
a = n.viewBottom;
r = n.viewLeft;
for (var s = !1, l = 0; l < n.content.childrenCount && !s; l += n._colLineNum) if (t = n._virtual ? n.displayData[l] : n._calcExistItemPos(l)) {
e = n._sizeType ? (t.top + t.bottom) / 2 : e = (t.left + t.right) / 2;
switch (n._alignCalcType) {
case 1:
if (t.right >= r) {
n.nearestListId = t.id;
r > e && (n.nearestListId += n._colLineNum);
s = !0;
}
break;

case 2:
if (t.left <= o) {
n.nearestListId = t.id;
o < e && (n.nearestListId += n._colLineNum);
s = !0;
}
break;

case 3:
if (t.bottom <= i) {
n.nearestListId = t.id;
i < e && (n.nearestListId += n._colLineNum);
s = !0;
}
break;

case 4:
if (t.top >= a) {
n.nearestListId = t.id;
a > e && (n.nearestListId += n._colLineNum);
s = !0;
}
}
}
if ((t = n._virtual ? n.displayData[n.displayItemNum - 1] : n._calcExistItemPos(n._numItems - 1)) && t.id == n._numItems - 1) {
e = n._sizeType ? (t.top + t.bottom) / 2 : e = (t.left + t.right) / 2;
switch (n._alignCalcType) {
case 1:
o > e && (n.nearestListId = t.id);
break;

case 2:
r < e && (n.nearestListId = t.id);
break;

case 3:
a < e && (n.nearestListId = t.id);
break;

case 4:
i > e && (n.nearestListId = t.id);
}
}
};
e.prototype.prePage = function(t) {
void 0 === t && (t = .5);
this.checkInited() && this.skipPage(this.curPageNum - 1, t);
};
e.prototype.nextPage = function(t) {
void 0 === t && (t = .5);
this.checkInited() && this.skipPage(this.curPageNum + 1, t);
};
e.prototype.skipPage = function(t, e) {
var i = this;
if (i.checkInited()) {
if (i._slideMode != s.PAGE) return cc.error("This function is not allowed to be called, Must SlideMode = PAGE!");
if (!(t < 0 || t >= i._numItems) && i.curPageNum != t) {
i.curPageNum = t;
i.pageChangeEvent && cc.Component.EventHandler.emitEvents([ i.pageChangeEvent ], t);
i.scrollTo(t, e);
}
}
};
e.prototype.calcCustomSize = function(t) {
var e = this;
if (e.checkInited()) {
if (!e._itemTmp) return cc.error("Unset template item!");
if (!e.renderEvent) return cc.error("Unset Render-Event!");
e._customSize = {};
var i = cc.instantiate(e._itemTmp);
e.content.addChild(i);
for (var o = 0; o < t; o++) {
cc.Component.EventHandler.emitEvents([ e.renderEvent ], i, o);
i.height == e._itemSize.height && i.width == e._itemSize.width || (e._customSize[o] = e._sizeType ? i.height : i.width);
}
Object.keys(e._customSize).length || (e._customSize = null);
i.removeFromParent();
i.destroy && i.destroy();
return e._customSize;
}
};
r([ u({
type: cc.Enum(n),
tooltip: !1
}) ], e.prototype, "templateType", void 0);
r([ u({
type: cc.Node,
tooltip: !1,
visible: function() {
return this.templateType == n.NODE;
}
}) ], e.prototype, "tmpNode", void 0);
r([ u({
type: cc.Prefab,
tooltip: !1,
visible: function() {
return this.templateType == n.PREFAB;
}
}) ], e.prototype, "tmpPrefab", void 0);
r([ u() ], e.prototype, "_slideMode", void 0);
r([ u({
type: cc.Enum(s),
tooltip: !1
}) ], e.prototype, "slideMode", null);
r([ u({
type: cc.Float,
range: [ 0, 1, .1 ],
tooltip: !1,
slide: !0,
visible: function() {
return this._slideMode == s.PAGE;
}
}) ], e.prototype, "pageDistance", void 0);
r([ u({
type: cc.Component.EventHandler,
tooltip: !1,
visible: function() {
return this._slideMode == s.PAGE;
}
}) ], e.prototype, "pageChangeEvent", void 0);
r([ u() ], e.prototype, "_virtual", void 0);
r([ u({
type: cc.Boolean,
tooltip: !1
}) ], e.prototype, "virtual", null);
r([ u({
tooltip: !1,
visible: function() {
var t = this.slideMode == s.NORMAL;
t || (this.cyclic = !1);
return t;
}
}) ], e.prototype, "cyclic", void 0);
r([ u({
tooltip: !1,
visible: function() {
return this.virtual;
}
}) ], e.prototype, "lackCenter", void 0);
r([ u({
tooltip: !1,
visible: function() {
var t = this.virtual && !this.lackCenter;
t || (this.lackSlide = !1);
return t;
}
}) ], e.prototype, "lackSlide", void 0);
r([ u({
type: cc.Integer
}) ], e.prototype, "_updateRate", void 0);
r([ u({
type: cc.Integer,
range: [ 0, 6, 1 ],
tooltip: !1,
slide: !0
}) ], e.prototype, "updateRate", null);
r([ u({
type: cc.Integer,
range: [ 0, 12, 1 ],
tooltip: !1,
slide: !0
}) ], e.prototype, "frameByFrameRenderNum", void 0);
r([ u({
type: cc.Component.EventHandler,
tooltip: !1
}) ], e.prototype, "renderEvent", void 0);
r([ u({
type: cc.Enum(l),
tooltip: !1
}) ], e.prototype, "selectedMode", void 0);
r([ u({
tooltip: !1,
visible: function() {
return this.selectedMode == l.SINGLE;
}
}) ], e.prototype, "repeatEventSingle", void 0);
r([ u({
type: cc.Component.EventHandler,
tooltip: !1,
visible: function() {
return this.selectedMode > l.NONE;
}
}) ], e.prototype, "selectedEvent", void 0);
r([ u({
serializable: !1
}) ], e.prototype, "_numItems", void 0);
return r([ d, p(), g("自定义组件/List"), y(cc.ScrollView), m(-5e3) ], e);
}(cc.Component);
i.default = f;
cc._RF.pop();
}, {
"./HX_GKTGDYJ_ListItem": "HX_GKTGDYJ_ListItem"
} ],
HX_GKTGDYJ_Loading: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "1d2d9BF+A1JpazFtB942pFr", "HX_GKTGDYJ_Loading");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, o) {
var a, r = arguments.length, n = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, i, o); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (n = (r < 3 ? a(n) : r > 3 ? a(e, i, n) : a(e, i)) || n);
return r > 3 && n && Object.defineProperty(e, i, n), n;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = cc._decorator, s = n.ccclass, l = n.property, c = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.dhicon = [];
e.dwicon = [];
e.jd = 0;
e.dhtime = 0;
e.dwtime = 0;
return e;
}
e.prototype.onLoad = function() {
var t = this, e = cc.sys.localStorage.getItem("HX_GKTGDYJtili");
"" != e && null != e || cc.sys.localStorage.setItem("HX_GKTGDYJtili", 5);
var i = cc.sys.localStorage.getItem("HX_GKTGDYJls");
"" != i && null != i || cc.sys.localStorage.setItem("HX_GKTGDYJls", 0);
cc.assetManager.loadBundle("HX_GKTGDYJ", function(e) {
e ? console.log(e) : t.scheduleOnce(function() {
t.jd = 99;
cc.director.loadScene("HX_GKTGDYJ_Main");
}, .5);
});
};
e.prototype.update = function(t) {
this.dhtime += t;
if (this.dhtime > .6) {
this.dhtime = 0;
this.node.getChildByName("dh").getComponent(cc.Sprite).spriteFrame = this.dhicon[this.getRandomInt(0, 3)];
}
this.dwtime += t;
if (this.dwtime > .4) {
this.dwtime = 0;
this.node.getChildByName("dw").getComponent(cc.Sprite).spriteFrame = this.dwicon[this.getRandomInt(0, 5)];
}
this.jd += 80 * t;
this.jd > 99 && (this.jd = 99);
this.node.getChildByName("jz").getComponent(cc.Label).string = Math.ceil(this.jd) + "%";
this.node.getChildByName("bar").getComponent(cc.ProgressBar).progress = Math.ceil(this.jd) / 100;
};
e.prototype.getRandomInt = function(t, e) {
return Math.floor(Math.random() * (e - t + 1)) + t;
};
r([ l(cc.SpriteFrame) ], e.prototype, "dhicon", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "dwicon", void 0);
return r([ s ], e);
}(cc.Component);
i.default = c;
cc._RF.pop();
}, {} ],
HX_GKTGDYJ_Main: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "bd732h3LfpBTYJoPOHOfI1A", "HX_GKTGDYJ_Main");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, o) {
var a, r = arguments.length, n = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, i, o); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (n = (r < 3 ? a(n) : r > 3 ? a(e, i, n) : a(e, i)) || n);
return r > 3 && n && Object.defineProperty(e, i, n), n;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("./HX_GKTGDYJ_AudioManager"), s = t("./HX_GKTGDYJ_DataManager"), l = t("./HX_GKTGDYJ_MapEditData"), c = cc._decorator, h = c.ccclass, d = c.property, u = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.dhicon = [];
e.dwicon = [];
e.isClick = !1;
e.dhtime = 0;
e.dwtime = 0;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {
var t = this;
this.isClick = !1;
n.default.playMusic("bgm");
s.default.getInstance().initArgs();
s.default.getInstance().mode = 1;
s.default.getInstance().getRemoteData();
this.node.getChildByName("startBtn").getComponentInChildren(cc.Label).string = "" + (s.default.getInstance().getCurrentLevelIndex() + 1);
lieyou_SdkManager.showBannerByBottom();
cc.tween(this.line1).delay(.8).to(.6, {
x: 201
}).call(function() {
t.line1.x = -200;
}).union().repeatForever().start();
cc.tween(this.line2).to(.8, {
x: 230
}).call(function() {
t.line2.x = -235;
}).to(.6, {
opacity: 255
}).union().repeatForever().start();
cc.tween(this.node.getChildByName("free").getChildByName("red")).delay(1).by(.05, {
angle: 15
}).by(.1, {
angle: -30
}).by(.1, {
angle: 30
}).by(.1, {
angle: -30
}).by(.1, {
angle: 30
}).by(.05, {
angle: -15
}).union().repeatForever().start();
cc.tween(this.node.getChildByName("startBtn")).to(.2, {
scale: 1.1
}).to(.2, {
scale: 1
}).to(.2, {
scale: 1.1
}).to(.2, {
scale: 1
}).to(.6, {
scale: 1
}).union().repeatForever().start();
var e = new Date(), i = new Date(e.getFullYear(), e.getMonth(), e.getDate());
if (cc.sys.localStorage.getItem(s.default.getInstance().name + "CurChaglleTime") != i.getTime().toString()) {
cc.sys.localStorage.setItem(s.default.getInstance().name + "eveyday", 0);
cc.sys.localStorage.setItem(s.default.getInstance().name + "CurChaglleTime", i.getTime().toString());
cc.sys.localStorage.setItem(s.default.getInstance().name + "_yxq", 0);
cc.sys.localStorage.setItem(s.default.getInstance().name + "_xcx", 0);
cc.sys.localStorage.setItem(s.default.getInstance().name + "_share", 0);
cc.sys.localStorage.setItem(s.default.getInstance().name + "_addzm", 0);
}
};
e.prototype.update = function(t) {
this.dhtime += t;
if (this.dhtime > .6) {
this.dhtime = 0;
this.node.getChildByName("dh").getComponent(cc.Sprite).spriteFrame = this.dhicon[s.default.getInstance().getRandomInt(0, 3)];
}
this.dwtime += t;
if (this.dwtime > .4) {
this.dwtime = 0;
this.node.getChildByName("dw").getComponent(cc.Sprite).spriteFrame = this.dwicon[s.default.getInstance().getRandomInt(0, 5)];
}
var e = Math.floor(new Date().getTime() / 1e3), i = cc.sys.localStorage.getItem(s.default.getInstance().name + "tltime"), o = cc.sys.localStorage.getItem(s.default.getInstance().name + "tili");
if (0 != Number(i) && Number(o) < 5) {
var a = Number(i) - e;
this.node.getChildByName("tl").getChildByName("time").active = !0;
this.node.getChildByName("tl").getChildByName("time").getComponent(cc.Label).string = s.default.getInstance().secondToStr(a);
this.node.getChildByName("tl").getChildByName("num").getComponent(cc.Label).string = "" + Number(o);
} else {
this.node.getChildByName("tl").getChildByName("time").active = !1;
this.node.getChildByName("tl").getChildByName("num").getComponent(cc.Label).string = "" + Number(o);
}
};
e.prototype.onBtnClick01 = function(t, e) {
console.log("onBtnClick: " + e);
cc.director.loadScene("HX_GKTGDYJ_MapEdit");
};
e.prototype.onBtnClick02 = function(t, e) {
console.log("onBtnClick: " + e);
cc.director.loadScene("HX_GKTGDYJ_MapEditCustom");
};
e.prototype.onYxq = function() {};
e.prototype.onStartBtnClick = function(t, e) {
n.default.playAudio("button");
var i = cc.sys.localStorage.getItem(s.default.getInstance().name + "tili");
if (Number(i) <= 0) {
var o = cc.instantiate(this.node.getChildByName("tips"));
o.parent = this.node;
o.active = !0;
o.getComponent(cc.Label).string = "体力不足";
cc.tween(o).to(1, {
position: new cc.Vec3(o.x, o.y + 100)
}).call(function() {
o.removeFromParent();
}, this).start();
} else {
console.log("onBtnClick: " + e);
if (!this.isClick) {
this.isClick = !0;
if (Number(i) <= 5 && 0 == Number(cc.sys.localStorage.getItem(s.default.getInstance().name + "tltime"))) {
var a = Math.floor(new Date().getTime() / 1e3) + 300;
cc.sys.localStorage.setItem(s.default.getInstance().name + "tltime", a);
}
cc.sys.localStorage.setItem(s.default.getInstance().name + "tili", Number(i) - 1);
s.default.getInstance().mode = 1;
s.default.getInstance().loadData(1);
var r = cc.v2(this.node.getChildByName("tl").x, this.node.getChildByName("tl").y), l = cc.v2(this.node.getChildByName("startBtn").x, this.node.getChildByName("startBtn").y), c = cc.v2(r.x + 100, r.y), h = cc.instantiate(this.node.getChildByName("tlnode"));
h.active = !0;
h.parent = this.node;
h.x = r.x;
h.y = r.y;
cc.tween(h).bezierTo(1, r, c, l).to(.1, {
scale: .3
}).to(.2, {
opacity: 0
}).call(function() {
cc.director.loadScene(s.default.getInstance().name + "_GameScene");
}).removeSelf().start();
}
}
};
e.prototype.hqtl = function() {
n.default.playAudio("button");
lieyou_SdkManager.showRewardedVideoAd(function(t) {
if (t) {
var e = cc.sys.localStorage.getItem(s.default.getInstance().name + "tili");
cc.sys.localStorage.setItem(s.default.getInstance().name + "tili", Number(e) + 1);
}
});
};
e.prototype.openRank = function() {
n.default.playAudio("button");
this.node.getChildByName("rank").active = !0;
s.default.getInstance().propBackOut(this.node.getChildByName("rank").getChildByName("root"));
};
e.prototype.onEveyDayBtnClick = function(t, e) {
n.default.playAudio("button");
if (!this.isClick) {
this.isClick = !0;
if (s.default.getInstance().getCurrentLevelIndex() >= 3) {
console.log("onBtnClick: " + e);
s.default.getInstance().mode = 0;
s.default.getInstance().loadData(0);
cc.director.loadScene(s.default.getInstance().name + "_GameScene");
} else {
var i = cc.instantiate(this.node.getChildByName("tips"));
i.parent = this.node;
i.active = !0;
i.getComponent(cc.Label).string = "第三关解锁";
cc.tween(i).to(1, {
position: new cc.Vec3(i.x, i.y + 100)
}).call(function() {
i.removeFromParent();
}, this).start();
this.isClick = !1;
}
}
};
e.prototype.onDy = function() {};
e.prototype.openxcxtip = function() {
n.default.playAudio("button");
this.node.getChildByName("xcxtip").active = !0;
};
e.prototype.closexcxtip = function() {
n.default.playAudio("button");
this.node.getChildByName("xcxtip").active = !1;
};
e.prototype.openaddzmtip = function() {
n.default.playAudio("button");
this.node.getChildByName("addzmtip").active = !0;
};
e.prototype.closeaddzmtip = function() {
n.default.playAudio("button");
this.node.getChildByName("addzmtip").active = !1;
};
e.prototype.onClicklq = function(t, e) {
n.default.playAudio("button");
if (!this.isClick) {
this.isClick = !0;
cc.sys.localStorage.setItem(s.default.getInstance().name + "_" + e, 2);
var i = cc.sys.localStorage.getItem(s.default.getInstance().name + "tili");
cc.sys.localStorage.setItem(s.default.getInstance().name + "tili", Number(i) + 1);
this.fulinit();
}
};
e.prototype.onCleanBtnClick = function(t, e) {
console.log("onBtnClick: " + e);
s.default.getInstance().cleanLevelIndex();
};
e.prototype.onHome = function() {
PPSDK && PPSDK.subGame.goHome();
};
e.prototype.onbtnClick03 = function() {
var t = l.default.CreateMapDataByStr("9;15;93,94,103,102,111,112,113,104,95,96,97,106,107|65,66,75,74,83,84,85,86,77,68,67,58,49|60,59,50,41,40,39,38,37,28,19,10,11,2|43,44,35,34,33,42,51,52,61,70,71|25,24,23,22,31,30,29,20,21,12,13,4,3|26,17,16,7,6,15,14|130,129,120,121,122,131,132,123,114,105|56,57,48,47,46,55,54,45,36,27,18|62,53|64,73,72,63|92,91,100,101,110,119|82,81|90,99,108,117,118,127|133,134,125,124,115|98,89,88|87,78,79,80|1,0");
cc.log(t);
};
e.prototype.onSetting = function() {
n.default.playAudio("button");
this.node.getChildByName("Setting").active = !0;
s.default.getInstance().propBackOut(this.node.getChildByName("Setting").getChildByName("root"));
this.Settinit();
};
e.prototype.onFuli = function() {
n.default.playAudio("button");
this.node.getChildByName("fuli").active = !0;
s.default.getInstance().propBackOut(this.node.getChildByName("fuli").getChildByName("root"));
this.fulinit();
};
e.prototype.closeSetting = function() {
var t = this;
n.default.playAudio("button");
s.default.getInstance().propBackIn(this.node.getChildByName("Setting").getChildByName("root"));
this.scheduleOnce(function() {
t.node.getChildByName("Setting").active = !1;
}, .2);
};
e.prototype.closefuli = function() {
var t = this;
n.default.playAudio("button");
s.default.getInstance().propBackIn(this.node.getChildByName("fuli").getChildByName("root"));
this.scheduleOnce(function() {
t.node.getChildByName("fuli").active = !1;
}, .2);
};
e.prototype.Settinit = function() {
this.node.getChildByName("Setting").getChildByName("root").getChildByName("muic_on").active = PPSDK.musicState;
this.node.getChildByName("Setting").getChildByName("root").getChildByName("muic_off").active = !PPSDK.musicState;
this.node.getChildByName("Setting").getChildByName("root").getChildByName("sound_on").active = PPSDK.sfxState;
this.node.getChildByName("Setting").getChildByName("root").getChildByName("sound_off").active = !PPSDK.sfxState;
this.node.getChildByName("Setting").getChildByName("root").getChildByName("shake_on").active = PPSDK.vibrateState;
this.node.getChildByName("Setting").getChildByName("root").getChildByName("shake_off").active = !PPSDK.vibrateState;
};
e.prototype.fulinit = function() {
for (var t = cc.sys.localStorage.getItem(s.default.getInstance().name + "_yxq"), e = cc.sys.localStorage.getItem(s.default.getInstance().name + "_dy"), i = cc.sys.localStorage.getItem(s.default.getInstance().name + "_xcx"), o = cc.sys.localStorage.getItem(s.default.getInstance().name + "_share"), a = cc.sys.localStorage.getItem(s.default.getInstance().name + "_addzm"), r = 0; r < this.node.getChildByName("fuli").getChildByName("root").getChildByName("yxq").children.length; r++) this.node.getChildByName("fuli").getChildByName("root").getChildByName("yxq").children[r].active = !1;
for (r = 0; r < this.node.getChildByName("fuli").getChildByName("root").getChildByName("dy").children.length; r++) this.node.getChildByName("fuli").getChildByName("root").getChildByName("dy").children[r].active = !1;
for (r = 0; r < this.node.getChildByName("fuli").getChildByName("root").getChildByName("xcx").children.length; r++) this.node.getChildByName("fuli").getChildByName("root").getChildByName("xcx").children[r].active = !1;
for (r = 0; r < this.node.getChildByName("fuli").getChildByName("root").getChildByName("share").children.length; r++) this.node.getChildByName("fuli").getChildByName("root").getChildByName("share").children[r].active = !1;
for (r = 0; r < this.node.getChildByName("fuli").getChildByName("root").getChildByName("addzm").children.length; r++) this.node.getChildByName("fuli").getChildByName("root").getChildByName("addzm").children[r].active = !1;
switch (Number(t)) {
case 0:
this.node.getChildByName("fuli").getChildByName("root").getChildByName("yxq").children[0].active = !0;
break;

case 1:
this.node.getChildByName("fuli").getChildByName("root").getChildByName("yxq").children[1].active = !0;
break;

case 2:
this.node.getChildByName("fuli").getChildByName("root").getChildByName("yxq").children[2].active = !0;
}
switch (Number(e)) {
case 0:
this.node.getChildByName("fuli").getChildByName("root").getChildByName("dy").children[0].active = !0;
break;

case 1:
this.node.getChildByName("fuli").getChildByName("root").getChildByName("dy").children[1].active = !0;
break;

case 2:
this.node.getChildByName("fuli").getChildByName("root").getChildByName("dy").children[2].active = !0;
}
switch (Number(i)) {
case 0:
this.node.getChildByName("fuli").getChildByName("root").getChildByName("xcx").children[0].active = !0;
break;

case 1:
this.node.getChildByName("fuli").getChildByName("root").getChildByName("xcx").children[1].active = !0;
break;

case 2:
this.node.getChildByName("fuli").getChildByName("root").getChildByName("xcx").children[2].active = !0;
}
switch (Number(o)) {
case 0:
this.node.getChildByName("fuli").getChildByName("root").getChildByName("share").children[0].active = !0;
break;

case 1:
this.node.getChildByName("fuli").getChildByName("root").getChildByName("share").children[1].active = !0;
break;

case 2:
this.node.getChildByName("fuli").getChildByName("root").getChildByName("share").children[2].active = !0;
}
switch (Number(a)) {
case 0:
this.node.getChildByName("fuli").getChildByName("root").getChildByName("addzm").children[0].active = !0;
break;

case 1:
this.node.getChildByName("fuli").getChildByName("root").getChildByName("addzm").children[1].active = !0;
break;

case 2:
this.node.getChildByName("fuli").getChildByName("root").getChildByName("addzm").children[2].active = !0;
}
this.isClick = !1;
};
e.prototype.onShare = function() {
var t = this;
n.default.playAudio("button");
0 == Number(cc.sys.localStorage.getItem(s.default.getInstance().name + "_share")) && cc.sys.localStorage.setItem(s.default.getInstance().name + "_share", 1);
this.scheduleOnce(function() {
t.fulinit();
}, .5);
};
e.prototype.musicClick = function() {
n.default.playAudio("button");
PPSDK.musicState = !PPSDK.musicState;
PPSDK.musicState ? n.default.playMusic("bgm") : PPSDK.stopMusic();
this.Settinit();
};
e.prototype.soundClick = function() {
n.default.playAudio("button");
PPSDK.sfxState = !PPSDK.sfxState;
this.Settinit();
};
e.prototype.vibrateClick = function() {
n.default.playAudio("button");
PPSDK.vibrateState = !PPSDK.vibrateState;
this.Settinit();
};
r([ d(cc.SpriteFrame) ], e.prototype, "icon", void 0);
r([ d(cc.SpriteFrame) ], e.prototype, "dhicon", void 0);
r([ d(cc.SpriteFrame) ], e.prototype, "dwicon", void 0);
r([ d(cc.Node) ], e.prototype, "line1", void 0);
r([ d(cc.Node) ], e.prototype, "line2", void 0);
return r([ h ], e);
}(cc.Component);
i.default = u;
cc._RF.pop();
}, {
"./HX_GKTGDYJ_AudioManager": "HX_GKTGDYJ_AudioManager",
"./HX_GKTGDYJ_DataManager": "HX_GKTGDYJ_DataManager",
"./HX_GKTGDYJ_MapEditData": "HX_GKTGDYJ_MapEditData"
} ],
HX_GKTGDYJ_MapEditCustom: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "9f65dt8ZMFDdY2owC9VNdMA", "HX_GKTGDYJ_MapEditCustom");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, o) {
var a, r = arguments.length, n = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, i, o); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (n = (r < 3 ? a(n) : r > 3 ? a(e, i, n) : a(e, i)) || n);
return r > 3 && n && Object.defineProperty(e, i, n), n;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("./HX_GKTGDYJ_MapEditData"), s = cc._decorator, l = s.ccclass, c = s.property, h = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.default_size_arr = [ [ 9, 15 ], [ 15, 25 ], [ 21, 35 ], [ 30, 50 ], [ 42, 70 ], [ 30, 30 ], [ 42, 42 ], [ 32, 18 ], [ 48, 27 ] ];
e.default_color_arr = [ "#1ba784", "#ed5126", "#2A52BE", "#96c24e", "#f9595c", "#fc8c23", "#4A7856", "#C77DFF", "#577590", "#F9C74F", "#43AA8B", "#E63946", "#4CC9F0", "#194B96", "#FFD166", "#7209B7", "#F72585" ];
e.map_data = null;
e.puzzle_width = 0;
e.puzzle_height = 0;
e.current_action_type = 0;
e.is_move_action = !1;
e.start_touch_pos = null;
e.selectedIndex = -1;
e.color_mode = 0;
e.puzzle_control_mode = 0;
e.user_gird_size = 1;
e.symmetry_mode = 0;
e.edit_mode = 1;
e.grapGrid = null;
e.gameView = null;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_START, function(t) {
this.onTouchStart(t);
}, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.onTouchMove(t);
}, this);
this.node.on(cc.Node.EventType.TOUCH_END, function(t) {
this.onTouchEnd(t);
}, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(t) {
this.onTouchCancel(t);
}, this);
this.updateBottomDisplay();
this.onPuzzleSizeBtnClick(null, "0");
};
e.prototype.onBackBtnClick = function(t, e) {
console.log("onBtnClick: " + e);
cc.director.loadScene("HX_GKTGDYJ_Main");
};
e.prototype.onPuzzleSizeBtnClick = function(t, e) {
console.log("onBtnClick: " + e);
var i = parseInt(e);
if (i >= 0 && i < this.default_size_arr.length) {
var o = this.default_size_arr[i];
this.puzzle_width = o[0];
this.puzzle_height = o[1];
this.map_data = n.default.CreateMapByArgs(o[0], o[1]);
this.map_data.loadData(!1);
this.edit_mode = 1;
this.current_action_type = -1;
this.updateBottomDisplay();
this.updateEditMapDisplay();
}
};
e.prototype.onActionTypeBtnClick = function(t, e) {
console.log("onActionTypeBtnClick: " + e);
var i = parseInt(e);
-2 == i ? this.map_data.reverseUserData() : this.current_action_type = i;
this.updateDisplay();
};
e.prototype.onBottomBtnClick = function(t, e) {
console.log("onBtnClick: " + e);
var i = parseInt(e);
if (0 == i) {
this.edit_mode = 0;
this.map_data.createArrowDataWithUserData(this.puzzle_control_mode);
this.map_data.getTargetDataFormatString();
} else 1 == i ? this.edit_mode = 1 : 2 == i && this.gameView.getComponent("EditGameView").setGameViewDisplay(this.map_data.getTargetDataFormatString());
this.updateDisplay();
};
e.prototype.onColorBtnClick = function(t, e) {
console.log("onBtnClick: " + e);
var i = parseInt(e);
this.color_mode = i;
this.updateDisplay();
};
e.prototype.onPuzzleControllBtnClick = function(t, e) {
console.log("onBtnClick: " + e);
var i = parseInt(e);
this.puzzle_control_mode = i;
this.updateDisplay();
};
e.prototype.onUserGirdSizeBtnClick = function(t, e) {
console.log("onBtnClick: " + e);
var i = parseInt(e);
this.user_gird_size = i;
this.updateDisplay();
};
e.prototype.onSymmetryBtnClick = function(t, e) {
console.log("onBtnClick: " + e);
var i = parseInt(e);
this.symmetry_mode = i;
this.updateDisplay();
};
e.prototype.updateDisplay = function() {
0 == this.edit_mode ? this.updateMapDisplay() : this.updateEditMapDisplay();
this.updateBottomDisplay();
};
e.prototype.updateEditMapDisplay = function() {
this.grapGrid.node.active = !0;
this.grapGrid.clear();
this.drawLine();
this.drawGirdPoint();
this.drawEditData();
this.drawPathArrow(this.map_data.getEditArrowDataArray());
};
e.prototype.updateMapDisplay = function() {
this.grapGrid.node.active = !0;
this.grapGrid.clear();
this.drawGirdPoint();
this.drawPathArrow(this.map_data.getArrowDataArray());
};
e.prototype.updateBottomDisplay = function() {
var t = this;
if (0 == this.edit_mode) {
this.node.getChildByName("bottomNode").getChildByName("btn00").active = !1;
this.node.getChildByName("bottomNode").getChildByName("btn04").active = !0;
this.node.getChildByName("bottomNode").getChildByName("btn05").active = !0;
this.node.getChildByName("bottomNode").getChildByName("btn06").active = !0;
this.node.getChildByName("bottomNode").getChildByName("toggle01").active = !1;
this.node.getChildByName("bottomNode").getChildByName("toggle02").active = !0;
} else {
this.node.getChildByName("bottomNode").getChildByName("btn00").active = !0;
this.node.getChildByName("bottomNode").getChildByName("btn04").active = !0;
this.node.getChildByName("bottomNode").getChildByName("btn05").active = !1;
this.node.getChildByName("bottomNode").getChildByName("btn06").active = !1;
this.node.getChildByName("bottomNode").getChildByName("toggle01").active = !0;
this.node.getChildByName("bottomNode").getChildByName("toggle02").active = !1;
var e = -1;
this.node.getChildByName("bottomNode").getChildByName("toggle01").getComponent(cc.ToggleContainer).toggleItems.forEach(function(i) {
e == t.current_action_type ? i.isChecked = !0 : i.isChecked = !1;
e++;
});
}
};
e.prototype.drawLine = function() {
if (null != this.grapGrid) {
var t = new cc.Color().fromHEX("#2EA5FF"), e = this.map_data.width, i = this.map_data.height, o = e, a = this.grapGrid.node.width, r = this.grapGrid.node.height, n = Math.min(.98 * a / o, .33 * a), s = n, l = .5 * (a - n * e), c = .5 * (r - s * i), h = new cc.Vec2(-this.grapGrid.node.width / 2, this.grapGrid.node.height / 2);
this.grapGrid.strokeColor = t;
this.grapGrid.fillColor = cc.Color.YELLOW.clone();
this.grapGrid.lineWidth = 3;
for (var d = 0; d <= e; d++) {
var u = c, p = y = n * d + l + h.x, g = (f = h.y - u) - s * i;
this.grapGrid.moveTo(y, f + 1.5);
this.grapGrid.lineTo(y, g - 1.5);
this.grapGrid.stroke();
}
for (var m = 0; m <= i; m++) {
var y, f;
u = s * m + c, p = (y = l + h.x) + n * e, g = f = h.y - u;
this.grapGrid.moveTo(y - 1.5, f);
this.grapGrid.lineTo(p + 1.5, f);
this.grapGrid.stroke();
}
} else cc.log("grapGrid is null drawGrid");
};
e.prototype.drawGirdPoint = function() {
if (null != this.grapGrid) {
new cc.Color().fromHEX("#2EA5FF");
var t = this.map_data.width, e = this.map_data.height, i = t, o = this.grapGrid.node.width, a = this.grapGrid.node.height, r = Math.min(.98 * o / i, .33 * o), n = r, s = .5 * (o - r * t), l = .5 * (a - n * e), c = new cc.Vec2(-this.grapGrid.node.width / 2, this.grapGrid.node.height / 2), h = 3;
Math.max(t, e) >= 30 && (h = 2);
this.grapGrid.strokeColor = cc.Color.GRAY.clone();
this.grapGrid.fillColor = cc.Color.GRAY.clone();
this.grapGrid.lineWidth = h;
for (var d = 0; d < e; d++) for (var u = 0; u < t; u++) {
var p = n * (d + .5) + l, g = r * (u + .5) + s + c.x, m = c.y - p, y = h;
this.grapGrid.circle(g, m, y);
this.grapGrid.fill();
}
this.grapGrid.stroke();
} else cc.log("grapGrid is null drawGrid");
};
e.prototype.drawPathArrow = function(t) {
if (null != this.grapGrid) {
new cc.Color().fromHEX("#2EA5FF");
var e = this.map_data.width, i = this.map_data.height, o = e, a = this.grapGrid.node.width, r = this.grapGrid.node.height, n = Math.min(.98 * a / o, .33 * a), s = n, l = .5 * (a - n * e), c = .5 * (r - s * i), h = new cc.Vec2(-this.grapGrid.node.width / 2, this.grapGrid.node.height / 2), d = Math.min(Math.max(.2 * n, 5), 10), u = Math.min(Math.max(.25 * n, 6), 12);
this.grapGrid.strokeColor = cc.Color.BLACK.clone();
this.grapGrid.fillColor = cc.Color.BLACK.clone();
this.grapGrid.lineWidth = d;
for (var p = 0; p < t.length; p++) {
var g = t[p], m = g.path, y = g.direction;
if (1 == this.color_mode) {
var f = this.default_color_arr[p % this.default_color_arr.length], _ = new cc.Color().fromHEX(f);
this.grapGrid.strokeColor = _;
this.grapGrid.fillColor = _;
}
for (var v = 0; v < m.length; v++) {
var C = m[v], N = C[0], w = s * (C[1] + .5) + c, G = n * (N + .5) + l + h.x, B = h.y - w;
0 == v ? this.grapGrid.moveTo(G, B) : this.grapGrid.lineTo(G, B);
this.grapGrid.stroke();
if (v == m.length - 1) {
var D = this.calcArrowPoints(y, new cc.Vec2(G, B), u);
this.grapGrid.moveTo(G, B);
this.grapGrid.lineTo(D[0].x, D[0].y);
this.grapGrid.lineTo(D[1].x, D[1].y);
this.grapGrid.close();
this.grapGrid.fill();
}
this.grapGrid.stroke();
}
}
} else cc.log("grapGrid is null drawGrid");
};
e.prototype.calcArrowPoints = function(t, e, i) {
var o = cc.v2(e.x, e.y), a = cc.v2(e.x, e.y), r = i / 2;
switch (t) {
case 0:
o.x -= r;
o.y -= i;
a.x += r;
a.y -= i;
break;

case 1:
o.x -= i;
o.y -= r;
a.x -= i;
a.y += r;
break;

case 2:
o.x -= r;
o.y += i;
a.x += r;
a.y += i;
break;

case 3:
o.x += i;
o.y -= r;
a.x += i;
a.y += r;
}
return [ o, a ];
};
e.prototype.drawEditData = function() {
if (null != this.grapGrid) {
new cc.Color().fromHEX("#2EA5FF");
var t = this.map_data.width, e = this.map_data.height, i = t, o = this.grapGrid.node.width, a = this.grapGrid.node.height, r = Math.min(.98 * o / i, .33 * o), n = r, s = .5 * (o - r * t), l = .5 * (a - n * e), c = new cc.Vec2(-this.grapGrid.node.width / 2, this.grapGrid.node.height / 2);
this.grapGrid.strokeColor = cc.Color.BLACK.clone();
this.grapGrid.fillColor = cc.Color.BLACK.clone();
this.grapGrid.lineWidth = 3;
for (var h = 0; h < e; h++) for (var d = 0; d < t; d++) {
var u = n * h + l, p = r * d + s + c.x, g = c.y - u;
if (-1 == this.map_data.getUserData(d, h)) {
this.grapGrid.rect(p + .05 * r, g - n + .05 * n, .9 * r, .9 * n);
this.grapGrid.fill();
}
}
this.grapGrid.stroke();
} else cc.log("grapGrid is null drawGrid");
};
e.prototype.onTouchStart = function(t) {
if (0 != this.edit_mode) {
console.log("Mouse onTouchStart:");
var e = this.grapGrid.node.convertToNodeSpaceAR(t.getLocation()), i = this.locationGirdIndex(e);
this.selectedIndex = i;
this.is_move_action = !1;
this.start_touch_pos = this.node.convertToNodeSpaceAR(t.getLocation());
if (-1 != this.selectedIndex) {
this.map_data.userAction(this.selectedIndex, this.current_action_type, this.user_gird_size, this.symmetry_mode);
this.updateDisplay();
}
}
};
e.prototype.onTouchMove = function(t) {
if (0 != this.edit_mode) {
this.is_move_action = !0;
var e = this.grapGrid.node.convertToNodeSpaceAR(t.getLocation()), i = this.locationGirdIndex(e);
if (-1 != i && i != this.selectedIndex) {
this.map_data.userAction(i, this.current_action_type, this.user_gird_size, this.symmetry_mode);
1 == this.current_action_type && this.map_data.userArrowAction(this.selectedIndex, i);
this.selectedIndex = i;
this.updateDisplay();
}
}
};
e.prototype.onTouchEnd = function() {
console.log("Mouse onTouchEnd:");
};
e.prototype.onTouchCancel = function() {
console.log("Mouse onTouchCancel:");
};
e.prototype.locationGirdIndex = function(t) {
var e = this.map_data.width, i = this.map_data.height, o = e, a = this.grapGrid.node.width, r = this.grapGrid.node.height, n = Math.min(.98 * a / o, .33 * a), s = n, l = .5 * (a - n * e), c = .5 * (r - s * i), h = new cc.Vec2(-this.grapGrid.node.width / 2, this.grapGrid.node.height / 2), d = t.x - h.x, u = h.y - t.y, p = Math.floor((d - l) / n), g = Math.floor((u - c) / s);
return p >= 0 && p < e && g >= 0 && g < i ? g * e + p : -1;
};
r([ c(cc.Graphics) ], e.prototype, "grapGrid", void 0);
r([ c(cc.Node) ], e.prototype, "gameView", void 0);
return r([ l ], e);
}(cc.Component);
i.default = h;
cc._RF.pop();
}, {
"./HX_GKTGDYJ_MapEditData": "HX_GKTGDYJ_MapEditData"
} ],
HX_GKTGDYJ_MapEditData: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "798b9qKdxdJ1KbQVI8k3V5O", "HX_GKTGDYJ_MapEditData");
var o = this && this.__decorate || function(t, e, i, o) {
var a, r = arguments.length, n = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, i, o); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (n = (r < 3 ? a(n) : r > 3 ? a(e, i, n) : a(e, i)) || n);
return r > 3 && n && Object.defineProperty(e, i, n), n;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, r = a.ccclass, n = (a.property, function() {
function t() {
this.width = 0;
this.height = 0;
this.currentDataString = "";
this.max_arrow_lenght = -1;
this.user_data = [];
this.default_data = new Array();
this.arrowDataArray = [];
this.current_selected_arrow_index = -1;
this.eidtArrowDataArray = [];
this.puzzle_control_mode = 0;
}
e = t;
t.CreateMapDataByStr = function(t) {
if (t.length < 1) return null;
var e = t.split(";");
if (3 == e.length) {
for (var i = parseInt(e[0]), o = parseInt(e[1]), a = new Array(), r = e[2].split("|"), n = 0; n < r.length; n++) {
var s = r[n].split(",");
if (s.length > 0) {
for (var l = new Array(), c = 0; c < s.length; c++) {
var h = parseInt(s[c]), d = Math.floor(h % i), u = Math.floor(h / i);
l.push([ d, u ]);
}
a.push(l);
}
}
return {
width: i,
height: o,
arrow_arr: a
};
}
return null;
};
t.CreateMapByArgs = function(t, i, o) {
void 0 === o && (o = -1);
var a = new e();
a.currentDataString = "";
a.width = t;
a.height = i;
a.max_arrow_lenght = o;
a.max_arrow_lenght < 0 && (a.max_arrow_lenght = (t + i) / 2);
return a;
};
t.prototype.loadData = function(t) {
void 0 === t && (t = !0);
this.width, this.height;
this.user_data = new Array();
this.default_data = new Array();
this.arrowDataArray = new Array();
this.eidtArrowDataArray = new Array();
for (var e = 0; e < this.height; e++) {
this.user_data.push([]);
this.default_data.push([]);
for (var i = 0; i < this.width; i++) {
this.user_data[e].push(0);
this.default_data[e].push(0);
}
}
t && this.createArrowData();
};
t.prototype.isViablePosition = function(t, e) {
return t >= 0 && t < this.width && e >= 0 && e < this.height;
};
t.prototype.isViablePositionIndex = function(t) {
return t >= 0 && t < this.width * this.height;
};
t.prototype.printData = function() {
cc.log("user_data: " + this.user_data);
};
t.prototype.printArray = function(t) {
cc.log("=====printArray====");
for (var e = 0; e < t.length; e++) cc.log(t[e]);
};
t.prototype.isConnect = function(t, e, i, o) {
return !(t == i && e == o || t != i && e != o);
};
t.prototype.setAllUserData = function(t) {
for (var e = 0; e < this.height; e++) for (var i = 0; i < this.width; i++) this.user_data[e][i] = t;
};
t.prototype.reverseUserData = function() {
for (var t = 0; t < this.height; t++) for (var e = 0; e < this.width; e++) 0 != this.user_data[t][e] && -1 != this.user_data[t][e] || (this.user_data[t][e] = 0 - (this.user_data[t][e] + 1));
};
t.prototype.setUserData = function(t, e, i, o) {
void 0 === o && (o = 1);
for (var a = Math.floor(o / 2), r = -a; r <= a; r++) for (var n = -a; n <= a; n++) this.isViablePosition(t + r, e + n) && (this.user_data[e + n][t + r] = i);
};
t.prototype.userAction = function(t, e, i, o) {
void 0 === i && (i = 1);
void 0 === o && (o = 0);
var a = Math.floor(t % this.width), r = Math.floor(t / this.width);
if (e >= -1 && e <= 0) {
this.setUserData(a, r, e, i);
1 == o ? this.setUserData(this.width - a - 1, r, e, i) : 2 == o && this.setUserData(a, this.height - r - 1, e, i);
this.checkUserArrowValid(t, e);
} else 1 == e && (this.user_data[r][a] = e);
return !1;
};
t.prototype.userArrowAction = function(t, e) {
var i = Math.floor(t % this.width), o = Math.floor(t / this.width), a = Math.floor(e % this.width), r = Math.floor(e / this.width);
if (this.isConnect(i, o, a, r)) {
for (var n = 0; n < this.eidtArrowDataArray.length; n++) {
var s = this.eidtArrowDataArray[n].path, l = this.eidtArrowDataArray[n].direction;
if (0 != s.length) {
var c = s[0], h = c[0], d = c[1], u = s[s.length - 1], p = u[0], g = u[1];
if (h == i && d == o) {
s.unshift([ a, r ]);
return;
}
if (p == i && g == o) {
s.push([ a, r ]);
-1 != (l = this.getDirection(s[s.length - 2], s[s.length - 1])) && (this.eidtArrowDataArray[n].direction = l);
return;
}
for (var m = 1; m < s.length - 1; m++) {
var y = s[m], f = y[0], _ = y[1];
if (f == i && _ == o) return;
}
}
}
var v = [ [ i, o ], [ a, r ] ], C = this.getDirection(v[0], v[1]);
-1 != C && this.eidtArrowDataArray.push({
path: v,
direction: C
});
}
};
t.prototype.checkUserArrowValid = function(t, e) {
if (0 == e || -1 == e) for (var i = Math.floor(t % this.width), o = Math.floor(t / this.width), a = 0; a < this.eidtArrowDataArray.length; a++) for (var r = this.eidtArrowDataArray[a].path, n = (this.eidtArrowDataArray[a].direction, 
0); n < r.length; n++) {
var s = r[n], l = s[0], c = s[1];
if (l == i && c == o) {
r.splice(0, n + 1);
1 == r.length && this.eidtArrowDataArray.splice(a, 1);
break;
}
}
};
t.prototype.getUserData = function(t, e) {
return this.isViablePosition(t, e) ? this.user_data[e][t] : 0;
};
t.prototype.getTargetDataFormatString = function(t) {
void 0 === t && (t = !0);
new Array();
for (var e = new Array(), i = 0; i < this.arrowDataArray.length; i++) {
for (var o = this.arrowDataArray[i], a = o.path, r = (o.direction, new Array()), n = 0; n < a.length; n++) {
var s = a[n], l = s[0], c = s[1] * this.width + l;
r.push(c.toString());
}
e.push(r.join(","));
}
var h = this.width + ";" + this.height + ";" + e.join("|");
t && cc.log("========== getTargetDataFormatString: \n" + h);
return h;
};
t.prototype.getArrowDataArray = function() {
return this.arrowDataArray;
};
t.prototype.getEditArrowDataArray = function() {
return this.eidtArrowDataArray;
};
t.prototype.createArrowDataWithUserData = function(t) {
void 0 === t && (t = 0);
this.puzzle_control_mode = t;
this.default_data = this.copyData(this.user_data);
this.arrowDataArray = new Array();
for (var e = 0; e < this.eidtArrowDataArray.length; e++) {
var i = this.eidtArrowDataArray[e].path, o = this.eidtArrowDataArray[e].direction;
if (0 != i.length) {
for (var a = new Array(), r = !0, n = 0; n < i.length; n++) {
if (!(d = i[n]) || 2 != d.length) {
r = !1;
break;
}
var s = d[0], l = d[1];
a.push([ s, l ]);
}
if (r) {
var c = {
path: a,
direction: o
};
this.arrowDataArray.push(c);
}
}
}
var h = new Array();
for (l = 0; l < this.height; l++) {
h.push([]);
for (s = 0; s < this.width; s++) this.user_data[l][s] <= 0 ? h[l].push(this.user_data[l][s]) : h[l].push(0);
}
for (e = 0; e < this.arrowDataArray.length; e++) {
i = this.arrowDataArray[e].path, o = this.arrowDataArray[e].direction;
if (0 != i.length) for (n = 0; n < i.length; n++) {
var d;
if ((d = i[n]) && 2 == d.length) {
s = d[0];
h[l = d[1]][s] = 1;
}
}
}
this.default_data = h;
this.createArrowData();
};
t.prototype.createArrowData = function() {
for (var t = 0; ;) {
var e = this.createOneLineData();
if (null == e) {
if (++t > 6e3) break;
} else {
var i = e.path, o = e.new_data, a = {
path: i,
direction: e.direction
}, r = this.testCurrentData(o, a, this.arrowDataArray);
if (0 == this.puzzle_control_mode) {
if (0 == r) {
this.arrowDataArray.push(a);
this.default_data = o;
}
} else if (this.arrowDataArray.length < 2) {
if (0 == r) {
this.arrowDataArray.push(a);
this.default_data = o;
}
} else if (r >= 2 && r < 6) {
this.arrowDataArray.push(a);
this.default_data = o;
}
}
}
};
t.prototype.testCurrentData = function(t, e, i) {
var o = this.copyData(t), a = new Array();
a.push(e);
for (var r = 0; r < i.length; r++) a.push(i[r]);
for (;0 != a.length; ) {
var n = !1;
for (r = 0; r < a.length; ) {
var s = a[r], l = s.path, c = s.direction, h = l[l.length - 1];
if (this.canRunOut(h, c, o)) {
this.arrowRunOut(l, o);
a.splice(r, 1);
n = !0;
} else r++;
}
if (!n) break;
}
return a.length;
};
t.prototype.createOneLineData = function() {
var t = this.copyData(this.default_data), e = new Array(), i = this.getLineStartPoint(t);
if (null == i) return null;
t[i[1]][i[0]] = 1;
e.push(i);
for (;;) {
var o = this.getNextPoint(i, t);
if (null == o || e.length > this.max_arrow_lenght) break;
e.unshift(o);
t[o[1]][o[0]] = 1;
i = o;
}
if (1 == e.length) {
t[i[1]][i[0]] = -1;
return null;
}
if (e.length <= 1) return null;
var a = this.getDirection(e[e.length - 2], e[e.length - 1]);
if (-1 == a) return null;
if (!this.isSelfValidPath(e, a)) return null;
t[e[e.length - 1][1]][e[e.length - 1][0]] = 100 + a;
var r = this.canRunOut(e[e.length - 1], a, t);
return !r && this.isArrowConflictArrow(e[e.length - 1], a, t) ? null : {
path: e,
direction: a,
canRunOut: r,
new_data: t
};
};
t.prototype.getNextPoint = function(t, e) {
var i = t[0], o = t[1], a = new Array();
i > 0 && 0 == e[o][i - 1] && a.push([ i - 1, o ]);
i < this.width - 1 && 0 == e[o][i + 1] && a.push([ i + 1, o ]);
o > 0 && 0 == e[o - 1][i] && a.push([ i, o - 1 ]);
o < this.height - 1 && 0 == e[o + 1][i] && a.push([ i, o + 1 ]);
return 0 == a.length ? null : a[Math.floor(Math.random() * a.length)];
};
t.prototype.getDirection = function(t, e) {
var i = t[0], o = t[1], a = e[0], r = e[1];
return i == a ? o > r ? 0 : 2 : o == r ? i > a ? 3 : 1 : -1;
};
t.prototype.isSelfValidPath = function(t, e) {
if (t.length < 2) return !1;
for (var i = new Array(), o = 0; o < this.height; o++) {
i.push([]);
for (var a = 0; a < this.width; a++) i[o].push(0);
}
for (var r = 0; r < t.length; r++) {
var n = t[r];
i[n[1]][n[0]] = 1;
}
return this.canRunOut(t[t.length - 1], e, i);
};
t.prototype.isArrowConflictArrow = function(t, e, i) {
var o = t[0], a = t[1];
if (0 == e) {
if (0 == a) return !1;
for (var r = a - 1; r >= 0; r--) if (102 == i[r][o]) return !0;
} else if (1 == e) {
if (o == this.width - 1) return !1;
for (var n = o + 1; n < this.width; n++) if (103 == i[a][n]) return !0;
} else if (2 == e) {
if (a == this.height - 1) return !1;
for (r = a + 1; r < this.height; r++) if (100 == i[r][o]) return !0;
} else if (3 == e) {
if (0 == o) return !1;
for (n = o - 1; n >= 0; n--) if (101 == i[a][n]) return !0;
}
return !1;
};
t.prototype.canRunOut = function(t, e, i) {
if (!t || 2 != t.length) return !1;
var o = t[0], a = t[1];
if (0 == e) {
if (0 == a) return !0;
for (var r = a - 1; r >= 0; r--) if (i[r][o] > 0) return !1;
} else if (1 == e) {
if (o == this.width - 1) return !0;
for (var n = o + 1; n < this.width; n++) if (i[a][n] > 0) return !1;
} else if (2 == e) {
if (a == this.height - 1) return !0;
for (r = a + 1; r < this.height; r++) if (i[r][o] > 0) return !1;
} else if (3 == e) {
if (0 == o) return !0;
for (n = o - 1; n >= 0; n--) if (i[a][n] > 0) return !1;
}
return !0;
};
t.prototype.arrowRunOut = function(t, e) {
for (var i = 0; i < t.length; i++) {
var o = t[i];
e[o[1]][o[0]] = 0;
}
};
t.prototype.getLineStartPoint = function(t) {
var e = this.getCurrentEmptyPointArray(t);
return 0 == e.length ? null : e[Math.floor(Math.random() * e.length)];
};
t.prototype.getCurrentEmptyPointArray = function(t) {
for (var e = new Array(), i = 0; i < this.height; i++) for (var o = 0; o < this.width; o++) 0 == t[i][o] && e.push([ o, i ]);
return e;
};
t.prototype.copyData = function(t) {
for (var e = new Array(), i = 0; i < this.height; i++) {
e.push([]);
for (var o = 0; o < this.width; o++) e[i].push(t[i][o]);
}
return e;
};
var e;
return e = o([ r ], t);
}());
i.default = n;
cc._RF.pop();
}, {} ],
HX_GKTGDYJ_MapEdit: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "fe989rKeJtB8LEcQJDDeuPv", "HX_GKTGDYJ_MapEdit");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, o) {
var a, r = arguments.length, n = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, i, o); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (n = (r < 3 ? a(n) : r > 3 ? a(e, i, n) : a(e, i)) || n);
return r > 3 && n && Object.defineProperty(e, i, n), n;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("./HX_GKTGDYJ_MapEditData"), s = cc._decorator, l = s.ccclass, c = s.property, h = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.default_size_arr = [ [ 9, 15 ], [ 15, 25 ], [ 21, 35 ], [ 30, 50 ], [ 42, 70 ] ];
e.map_data = null;
e.grapGrid = null;
e.gameView = null;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {
this.onBtnClick02(null, "0");
};
e.prototype.onBtnClick01 = function(t, e) {
console.log("onBtnClick: " + e);
cc.director.loadScene("HX_GKTGDYJ_Main");
};
e.prototype.onBtnClick02 = function(t, e) {
console.log("onBtnClick: " + e);
var i = parseInt(e);
if (i >= 0 && i < this.default_size_arr.length) {
var o = this.default_size_arr[i];
this.map_data = n.default.CreateMapByArgs(o[0], o[1]);
this.map_data.loadData();
this.updateMapDisplay();
this.map_data.getTargetDataFormatString();
}
};
e.prototype.onBottomBtnClick = function(t, e) {
console.log("onBtnClick: " + e);
var i = parseInt(e);
if (0 == i) {
var o = {
puzzle_data: this.map_data.getTargetDataFormatString()
};
this.saveToJsonFile(o);
} else if (1 == i) {
this.updateDownloadButtonTitle("生成中, 请等待15秒");
this.scheduleOnce(function() {
this.downloadMultiDatas(100);
}, .3);
} else 2 == i && this.gameView.getComponent("EditGameView").setGameViewDisplay(this.map_data.getTargetDataFormatString());
this.updateMapDisplay();
};
e.prototype.updateMapDisplay = function() {
this.drawGirdPoint();
this.drawPathArrow();
};
e.prototype.drawGirdPoint = function() {
if (null != this.grapGrid) {
new cc.Color().fromHEX("#2EA5FF");
var t = this.map_data.width, e = this.map_data.height, i = t, o = this.grapGrid.node.width, a = this.grapGrid.node.height;
cc.log("drawGirdPoint: " + o + ", " + a);
var r = Math.min(.98 * o / i, .33 * o), n = r, s = .5 * (o - r * t), l = .5 * (a - n * e), c = new cc.Vec2(-this.grapGrid.node.width / 2, this.grapGrid.node.height / 2);
this.grapGrid.node.active = !0;
this.grapGrid.clear();
this.grapGrid.strokeColor = cc.Color.GRAY.clone();
this.grapGrid.fillColor = cc.Color.GRAY.clone();
this.grapGrid.lineWidth = 3;
for (var h = 0; h < e; h++) for (var d = 0; d < t; d++) {
var u = n * (h + .5) + l, p = r * (d + .5) + s + c.x, g = c.y - u;
this.grapGrid.circle(p, g, 3);
this.grapGrid.fill();
}
this.grapGrid.stroke();
} else cc.log("grapGrid is null drawGrid");
};
e.prototype.drawPathArrow = function() {
if (null != this.grapGrid) {
new cc.Color().fromHEX("#2EA5FF");
var t = this.map_data.width, e = this.map_data.height, i = t, o = this.grapGrid.node.width, a = this.grapGrid.node.height, r = Math.min(.98 * o / i, .33 * o), n = r, s = .5 * (o - r * t), l = .5 * (a - n * e), c = new cc.Vec2(-this.grapGrid.node.width / 2, this.grapGrid.node.height / 2);
this.grapGrid.strokeColor = cc.Color.BLACK.clone();
this.grapGrid.fillColor = cc.Color.BLACK.clone();
this.grapGrid.lineWidth = 5;
for (var h = this.map_data.getArrowDataArray(), d = 0; d < h.length; d++) for (var u = h[d], p = u.path, g = u.direction, m = 0; m < p.length; m++) {
var y = p[m], f = y[0], _ = n * (y[1] + .5) + l, v = r * (f + .5) + s + c.x, C = c.y - _;
0 == m ? this.grapGrid.moveTo(v, C) : this.grapGrid.lineTo(v, C);
this.grapGrid.stroke();
if (m == p.length - 1) {
var N = this.calcArrowPoints(g, new cc.Vec2(v, C), 10);
this.grapGrid.moveTo(v, C);
this.grapGrid.lineTo(N[0].x, N[0].y);
this.grapGrid.lineTo(N[1].x, N[1].y);
this.grapGrid.close();
this.grapGrid.fill();
}
this.grapGrid.stroke();
}
} else cc.log("grapGrid is null drawGrid");
};
e.prototype.calcArrowPoints = function(t, e, i) {
var o = cc.v2(e.x, e.y), a = cc.v2(e.x, e.y), r = i / 2;
switch (t) {
case 0:
o.x -= r;
o.y -= i;
a.x += r;
a.y -= i;
break;

case 1:
o.x -= i;
o.y -= r;
a.x -= i;
a.y += r;
break;

case 2:
o.x -= r;
o.y += i;
a.x += r;
a.y += i;
break;

case 3:
o.x += i;
o.y -= r;
a.x += i;
a.y += r;
}
return [ o, a ];
};
e.prototype.updateDownloadButtonTitle = function(t) {
void 0 === t && (t = "批量下载 100 关");
this.node.getChildByName("bottomNode").getChildByName("btn05").getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = t;
};
e.prototype.downloadMultiDatas = function(t) {
for (var e = this.map_data.width, i = this.map_data.height, o = [], a = 0; a < t; a++) {
var r = n.default.CreateMapByArgs(e, i);
r.loadData();
o.push(r.getTargetDataFormatString(!1));
}
this.updateDownloadButtonTitle("批量下载 100 关");
this.saveToJsonFile(o);
};
e.prototype.saveToJsonFile = function(t) {
var e = JSON.stringify(t, null, 2);
if (cc.sys.isNative) {
var i = jsb.fileUtils.getWritablePath() + "mapData.json";
jsb.fileUtils.writeStringToFile(e, i);
cc.log("数据已保存到: " + i);
} else {
var o = new Blob([ e ], {
type: "application/json"
}), a = URL.createObjectURL(o), r = document.createElement("a");
r.href = a;
r.download = "mapdata.json";
r.click();
URL.revokeObjectURL(a);
cc.log("数据已下载为 mapData.json");
}
};
r([ c(cc.Graphics) ], e.prototype, "grapGrid", void 0);
r([ c(cc.Node) ], e.prototype, "gameView", void 0);
return r([ l ], e);
}(cc.Component);
i.default = h;
cc._RF.pop();
}, {
"./HX_GKTGDYJ_MapEditData": "HX_GKTGDYJ_MapEditData"
} ],
HX_GKTGDYJ_RankManager: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "8706aGt4MdEP4ZfiVErmwc/", "HX_GKTGDYJ_RankManager");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, o) {
var a, r = arguments.length, n = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, i, o); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (n = (r < 3 ? a(n) : r > 3 ? a(e, i, n) : a(e, i)) || n);
return r > 3 && n && Object.defineProperty(e, i, n), n;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("./HX_GKTGDYJ_AudioManager"), s = t("./HX_GKTGDYJ_DataManager"), l = cc._decorator, c = l.ccclass, h = l.property, d = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tg = [];
return e;
}
e.prototype.onEnable = function() {
var t = this;
this.tg[0].isChecked = !0;
this.Init();
this.node.getChildByName("root").getChildByName("friend").active = !1;
this.scheduleOnce(function() {
t.node.getChildByName("root").getChildByName("friend").active = !0;
}, .1);
};
e.prototype.Init = function() {
this.tg[0].isChecked && s.default.getInstance().getRank();
};
e.prototype.close = function() {
var t = this;
n.default.playAudio("button");
s.default.getInstance().propBackIn(this.node.getChildByName("root"));
this.scheduleOnce(function() {
t.node.active = !1;
}, .2);
};
r([ h(cc.Toggle) ], e.prototype, "tg", void 0);
return r([ c ], e);
}(cc.Component);
i.default = d;
cc._RF.pop();
}, {
"./HX_GKTGDYJ_AudioManager": "HX_GKTGDYJ_AudioManager",
"./HX_GKTGDYJ_DataManager": "HX_GKTGDYJ_DataManager"
} ],
HX_GKTGDYJ_subGame: [ function(t, e) {
"use strict";
cc._RF.push(e, "921c2QWcZ1CtKQNQePfbrNH", "HX_GKTGDYJ_subGame");
PPSDK.subGame.addSub({
name: "HX_GKTGDYJ",
group: {
"start-scene": "d2ce2aee-a398-4f93-a686-cb8921ab4c06",
"group-list": [ "default", "screenshot" ],
"last-module-event-record-time": 1725006408431,
"collision-matrix": [ [ !0 ], [ !1, !1 ] ],
"excluded-modules": [ "Physics", "VideoPlayer", "3D", "3D Primitive", "3D Physics/cannon.js", "3D Physics/Builtin", "3D Particle" ],
"preview-port": 7456,
"design-resolution-width": 960,
"design-resolution-height": 640,
"fit-width": !1,
"fit-height": !0,
"use-project-simulator-setting": !1,
"simulator-orientation": !1,
"use-customize-simulator": !0,
"simulator-resolution": {
width: 960,
height: 640
},
"clear-simulator-cache": !0,
facebook: {
enable: !1,
appID: "",
live: {
enable: !1
},
audience: {
enable: !1
}
},
"migrate-history": [ "cloud-function" ]
},
goGame: function() {
return new Promise(function(t) {
cc.director.loadScene("HX_CGXXGJ_loading", function() {
t();
});
});
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "HX_GKTGDYJ_Loading", "HX_GKTGDYJ_AssetsManager", "HX_GKTGDYJ_AudioManager", "HX_GKTGDYJ_DataManager", "HX_GKTGDYJ_EditGameView", "HX_GKTGDYJ_GameMapData", "HX_GKTGDYJ_GameScene", "HX_GKTGDYJ_GameView", "HX_GKTGDYJ_List", "HX_GKTGDYJ_ListItem", "HX_GKTGDYJ_Main", "HX_GKTGDYJ_MapEdit", "HX_GKTGDYJ_MapEditCustom", "HX_GKTGDYJ_MapEditData", "HX_GKTGDYJ_RankManager", "HX_GKTGDYJ_subGame" ]);