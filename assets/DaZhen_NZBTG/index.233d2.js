window.__require = function e(t, n, o) {
function i(a, r) {
if (!n[a]) {
if (!t[a]) {
var x = a.split("/");
x = x[x.length - 1];
if (!t[x]) {
var s = "function" == typeof __require && __require;
if (!r && s) return s(x, !0);
if (y) return y(x, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = x;
}
var l = n[a] = {
exports: {}
};
t[a][0].call(l.exports, function(e) {
return i(t[a][1][e] || e);
}, l, l.exports, e, t, n, o);
}
return n[a].exports;
}
for (var y = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
DaZhen_NZBTG_AdapterSdk: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "141e2mMpZhFmLluEBhwiG+Z", "DaZhen_NZBTG_AdapterSdk");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../GUI/Extensions/DaZhen_NZBTG_WExchangePos"), r = e("../DaZhen_NZBTG_Sdk"), x = e("../DaZhen_NZBTG_SdkConfig"), s = e("./DaZhen_NZBTG_BaseSdkE"), l = e("./DaZhen_NZBTG_EPlatform"), c = cc._decorator, _ = c.ccclass, h = c.property, u = c.menu, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._platform = x.Pf.wx;
t._bottomAlign = null;
t._clearAll = !1;
t._isbn = !1;
t._moreGameDrawerl = null;
t._bannerMoreGameMiddle = null;
t._bannerNative = null;
t._bannerNative_mini = null;
t._bannerClick = null;
t._bannerPosFree = !1;
t._banner = !1;
t._bannerHeight = -1;
t._jumpApp = !1;
t.interType = x.InterType.None;
t._singleGrids = [];
t._horizontalGrids = [];
t._verticalGrids = [];
t._matrixGrid = !1;
return t;
}
t.prototype._checkPlatforms = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
return e.includes(this._platform);
};
t.prototype.onLoad = function() {
if (!r.default.IsPfNs(x.PfN.oppo)) {
this._moreGameDrawerl = null;
this._bannerNative_mini = null;
this._bannerClick = null;
this._bannerPosFree = null;
}
r.default.IsPfNs(x.PfN.vivo, x.PfN.wx, x.PfN.qq) || (this._bannerMoreGameMiddle = null);
if (!r.default.IsPfNs(x.PfN.wx, x.PfN.qq)) {
this._singleGrids.length = 0;
this._horizontalGrids.length = 0;
this._verticalGrids.length = 0;
this._matrixGrid = null;
}
r.default.IsPfNs(x.PfN.qq) || (this._jumpApp = null);
if (!r.default.IsPfNs(x.PfN.native)) {
this._isbn = null;
this._bannerNative = null;
}
this.node.parent.getComponent(l.default) && (this._nodesBind = this.node.parent.getComponent(l.default).getNodesBind());
};
t.prototype._getBottom = function() {
var e = this._bottomAlign || this.node, t = e.convertToWorldSpaceAR(cc.v2()), n = Math.floor(t.y - e.scaleY * e.anchorY * e.height);
console.log("bottom--高度: ", n);
return n;
};
t.prototype._getBannerLimit = function() {
var e = lieyou_SdkManager.getParamByKey({
key: "banner_show_height",
defaultValue: 115
});
this._bannerHeight > 0 && (e = this._bannerHeight);
r.default.IsPfNs(x.PfN.wx) ? e = 180 : r.default.IsPfNs(x.PfN.qq) ? e = 150 : r.default.IsPfNs(x.PfN.tt) ? e = 150 : r.default.IsPfNs(x.PfN.native) && (e = 150);
console.log("banner-limit:", e);
return e;
};
t.prototype._canShowMoreGameMiddle = function() {
var e = r.default.IsPfNs(x.PfN.vivo) ? 300 : 183;
if (this._getBottom() < e) {
console.log("一行互推--高度不足limit:", e);
return !1;
}
return !0;
};
t.prototype._canShowBannerNative = function() {
var e = this._getBottom();
r.default.IsPfNs(x.PfN.oppo) && (e = Math.min(e, 350));
var t = r.default.IsPfNs(x.PfN.oppo) ? 180 : 120;
if (e < t) {
console.log("Native banner--高度不足,limit:", t);
return !1;
}
return e;
};
t.prototype._canShowBanner = function() {
if (this._getBottom() < this._getBannerLimit()) {
console.log("banner--高度不足");
return !1;
}
return !0;
};
t.prototype.needCloseBanner = function() {
return !(!this._bannerMoreGameMiddle && !this._bannerNative_mini && this._banner && !this._bannerHeight && this._canShowBanner());
};
t.prototype.needShowBanner = function() {
return !this._banner || !this._canShowBanner();
};
t.prototype.show = function(e) {
console.warn("广告 展示===:", this.node.parent.parent.name);
if (this._isbn) {
console.log("展示 底部原生软著信息");
r.default.ShowIsbn() || (this._isbn = null);
}
if (this._moreGameDrawerl) {
console.log("展示 一排侧边栏互推");
lieyou_SdkManager.createGameDrawerl({
node: this._moreGameDrawerl
});
}
var t = !1;
if (r.default.IsPfNs(x.PfN.native)) if (this.interType == x.InterType.Other) {
console.log("展示 其它插屏");
t = !0;
lieyou_SdkManager.showSpotByOther();
} else if (this.interType == x.InterType.Pause) {
console.log("展示 暂停插屏");
t = !0;
lieyou_SdkManager.showSpotByPause();
} else if (this.interType == x.InterType.Finish) {
console.log("展示 结束插屏");
t = !0;
lieyou_SdkManager.showSpotByFinish();
}
var n = !1;
if (this._bannerMoreGameMiddle) {
if (!this._isbn && this._canShowMoreGameMiddle()) {
(c = this._bannerMoreGameMiddle).setContentSize(600, 183);
c.x = 0;
c.y = -(cc.winSize.height - c.height) / 2;
n = lieyou_SdkManager.showMoreGameMiddle_one({
node: c
});
}
this._bannerMoreGameMiddle.active = n;
console.log("展示 一行互推:", n);
}
if (this._bannerNative) {
if (!this._isbn) {
var o = this._canShowBannerNative();
if (o) {
(c = this._bannerNative).setContentSize(500, o);
c.x = 0;
c.y = -(cc.winSize.height - c.height) / 2;
c.setContentSize(cc.winSize.width, o);
var i = t ? 1 : 0;
lieyou_SdkManager.addNativeAd(c, i);
}
}
this._bannerNative.active = !0;
console.log("展示 banner 原生");
}
var y = !1;
if (this._bannerNative_mini) {
if (!this._isbn) {
var l = this._canShowBannerNative();
if (l || this._bannerPosFree) {
var c = this._bannerNative_mini, _ = this._bannerClick ? this._bannerClick : c, h = c.width, u = c.height;
if (!this._bannerPosFree) {
h = 700;
c.setContentSize(h, u);
c.x = 0;
c.y = -(cc.winSize.height - c.height) / 2;
h = h;
u = l;
}
y = lieyou_SdkManager.showNativeAd_2({
node: c,
width: h,
height: u - 80,
bgPath: "SDK/lieyou_sdkRes/installShortcut/whiteBg",
clickNode: _,
destroyCallBack: function() {
_.active = !1;
}
});
}
console.log("展示 banner 原生-小游戏：", y);
}
if (this._bannerClick) {
this._bannerClick.scale = y ? 1 : 0;
var p = this._bannerClick.getComponent(a.default);
p && (y ? p.exchange() : p.reset());
}
this._bannerNative_mini.active = y;
}
if (this._banner && !this._isbn && !n && !y && e && this._canShowBanner()) {
var f = {
bannerHeight: u = this._getBannerLimit()
};
r.default.ShowBanner(f);
console.log("展示 banner");
}
if (this._jumpApp) {
console.log("展示 跳转app");
lieyou_SdkManager.isShenhe() || lieyou_SdkManager.newJumpApp({
afterCB: function() {
lieyou_SdkManager.showSpotByFinish();
}
});
}
if (!t) if (this.interType == x.InterType.Other) {
console.log("展示 其它插屏");
lieyou_SdkManager.showSpotByOther();
} else if (this.interType == x.InterType.Pause) {
console.log("展示 暂停插屏");
lieyou_SdkManager.showSpotByPause();
} else if (this.interType == x.InterType.Finish) {
console.log("展示 结束插屏");
lieyou_SdkManager.showSpotByFinish();
}
if (0 != this._singleGrids.length) {
console.log("展示 单个 格子");
this._singleGrids.forEach(function(e, t) {
if (e) {
console.log("单个 格子--index:", t);
e.removeAllChildren();
e.active = !0;
var n = new cc.Node("singleGrid");
n.parent = e;
lieyou_SdkManager.showMoreGameByIcon({
node: n
});
}
});
}
if (0 != this._horizontalGrids.length) {
console.log("展示 横向 格子");
this._horizontalGrids.forEach(function(e) {
if (e) {
e.removeAllChildren();
e.active = !0;
var t = new cc.Node("horizontalGrid");
t.parent = e;
lieyou_SdkManager.showMoreGameMiddle_one({
node: t,
isDiyY: !0
});
}
});
}
if (0 != this._verticalGrids.length) {
console.log("展示 竖向 格子");
this._verticalGrids.forEach(function(e) {
if (e) {
e.removeAllChildren();
e.active = !0;
var t = new cc.Node("verticalGrid");
t.parent = e;
lieyou_SdkManager.showMoreGameMiddle_one({
node: t,
isPortrait: !0,
orientation: "vertical",
num: 3
});
}
});
}
if (this._matrixGrid) {
console.log("展示 矩阵 格子");
lieyou_SdkManager.showGamePortalAd();
}
this._nodesBind && this._nodesBind.forEach(function(e) {
e && e.getComponent(s.default) && e.getComponent(s.default).show();
});
};
t.prototype.close = function(e) {
console.warn("广告 关闭===:", this.node.parent.parent.name);
if (this._isbn) {
console.log("关闭 底部原生软著信息");
r.default.HideIsbn();
}
if (this._moreGameDrawerl) {
console.log("关闭 一排侧边栏互推");
lieyou_SdkManager.hideGameDrawerl();
}
if (this._bannerMoreGameMiddle) {
console.log("关闭 一行互推");
lieyou_SdkManager.closeBoxBanner();
this._bannerMoreGameMiddle.active = !1;
}
if (this._bannerNative) {
console.log("关闭 原生banner");
this._bannerNative.active = !1;
}
if (this._bannerNative_mini) {
console.log("关闭 自定义banner");
this._bannerNative_mini.active = !1;
this._bannerClick && (this._bannerClick.active = !1);
}
if (this._banner && e) {
console.log("关闭 banner");
r.default.HideBanner();
}
this.interType == x.InterType.Other ? console.log("关闭 其它插屏") : this.interType == x.InterType.Pause ? console.log("关闭 暂停插屏") : this.interType == x.InterType.Finish && console.log("关闭 结束插屏");
if (0 != this._singleGrids.length) {
console.log("关闭 单个 格子");
this._singleGrids.forEach(function(e, t) {
if (e) {
console.log("关闭单个 格子--index:", t);
e.destroyAllChildren();
e.active = !1;
}
});
}
if (0 != this._horizontalGrids.length) {
console.log("关闭 横向 格子");
this._horizontalGrids.forEach(function(e) {
if (e) {
e.destroyAllChildren();
e.active = !1;
}
});
}
if (0 != this._verticalGrids.length) {
console.log("关闭 竖向 格子");
this._verticalGrids.forEach(function(e) {
if (e) {
e.destroyAllChildren();
e.active = !1;
}
});
}
if (this._matrixGrid) {
console.log("关闭 矩阵格子");
lieyou_SdkManager.closeBoxPortalAd();
}
this._nodesBind && this._nodesBind.forEach(function(e) {
e && e.getComponent(s.default) && e.getComponent(s.default).close();
});
};
t.prototype.getIsClearAll = function() {
return this._clearAll;
};
y([ h({
tooltip: "广告平台",
type: cc.Enum(x.Pf),
visible: !0
}) ], t.prototype, "_platform", void 0);
y([ h({
tooltip: "底部对齐节点,此节点距离屏幕底部太近，不允许展示底部广告（banner，一行互推等）",
type: cc.Node,
visible: !0
}) ], t.prototype, "_bottomAlign", void 0);
y([ h({
tooltip: "广告前 清除所有广告",
visible: !0
}) ], t.prototype, "_clearAll", void 0);
y([ h({
tooltip: "native-软著信息",
visible: function() {
return this._checkPlatforms(x.Pf.native);
}
}) ], t.prototype, "_isbn", void 0);
y([ h({
tooltip: "一排侧边栏互推",
type: cc.Node,
visible: function() {
return this._checkPlatforms(x.Pf.oppo);
}
}) ], t.prototype, "_moreGameDrawerl", void 0);
y([ h({
tooltip: "一行互推",
type: cc.Node,
visible: function() {
return this._checkPlatforms(x.Pf.oppo, x.Pf.wx, x.Pf.qq);
}
}) ], t.prototype, "_bannerMoreGameMiddle", void 0);
y([ h({
tooltip: "banner 原生",
type: cc.Node,
visible: function() {
return this._checkPlatforms(x.Pf.native);
}
}) ], t.prototype, "_bannerNative", void 0);
y([ h({
tooltip: "banner 原生-小游戏",
type: cc.Node,
visible: function() {
return this._checkPlatforms(x.Pf.oppo);
}
}) ], t.prototype, "_bannerNative_mini", void 0);
y([ h({
tooltip: "banner 原生-小游戏 点击按钮",
type: cc.Node,
visible: function() {
return this._checkPlatforms(x.Pf.oppo) && this._bannerNative_mini;
}
}) ], t.prototype, "_bannerClick", void 0);
y([ h({
tooltip: "banner 原生-小游戏 位置自由，不限制在底部",
visible: function() {
return this._checkPlatforms(x.Pf.oppo) && this._bannerNative_mini;
}
}) ], t.prototype, "_bannerPosFree", void 0);
y([ h({
tooltip: "banner 普通",
visible: !0
}) ], t.prototype, "_banner", void 0);
y([ h({
tooltip: "banner 普通高度",
visible: function() {
return !1;
}
}) ], t.prototype, "_bannerHeight", void 0);
y([ h({
tooltip: "跳转游戏",
visible: function() {
return this._checkPlatforms(x.Pf.qq);
}
}) ], t.prototype, "_jumpApp", void 0);
y([ h({
tooltip: "插屏类型",
type: cc.Enum(x.InterType)
}) ], t.prototype, "interType", void 0);
y([ h({
tooltip: "wx-单个 格子",
type: cc.Node,
visible: function() {
return this._checkPlatforms(x.Pf.wx, x.Pf.qq);
}
}) ], t.prototype, "_singleGrids", void 0);
y([ h({
tooltip: "wx-多个横排 格子",
type: cc.Node,
visible: function() {
return this._checkPlatforms(x.Pf.wx, x.Pf.qq);
}
}) ], t.prototype, "_horizontalGrids", void 0);
y([ h({
tooltip: "wx-多个竖排 格子",
type: cc.Node,
visible: function() {
return this._checkPlatforms(x.Pf.wx, x.Pf.qq);
}
}) ], t.prototype, "_verticalGrids", void 0);
y([ h({
tooltip: "wx-矩阵 格子",
visible: function() {
return this._checkPlatforms(x.Pf.wx, x.Pf.qq);
}
}) ], t.prototype, "_matrixGrid", void 0);
return y([ _, u("Sdk/DaZhen_NZBTG_AdapterSdk") ], t);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {
"../../GUI/Extensions/DaZhen_NZBTG_WExchangePos": "DaZhen_NZBTG_WExchangePos",
"../DaZhen_NZBTG_Sdk": "DaZhen_NZBTG_Sdk",
"../DaZhen_NZBTG_SdkConfig": "DaZhen_NZBTG_SdkConfig",
"./DaZhen_NZBTG_BaseSdkE": "DaZhen_NZBTG_BaseSdkE",
"./DaZhen_NZBTG_EPlatform": "DaZhen_NZBTG_EPlatform"
} ],
DaZhen_NZBTG_ArrayUtil: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "63224CTpA1LZJ07lfRC34Fn", "DaZhen_NZBTG_ArrayUtil");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_ArrayUtil = void 0;
var o = e("./DaZhen_NZBTG_MathUtil"), i = function() {
function e() {}
e.Confusion = function(e) {
return e.sort(function() {
return Math.random() - .5;
});
};
e.Random = function(e) {
return e[o.DaZhen_NZBTG_MathUtil.RandomInt(0, e.length)];
};
e.Add = function(e, t) {
var n = !1;
if (-1 == e.indexOf(t)) {
e.push(t);
n = !0;
}
return n;
};
e.Delete = function(e, t) {
var n = !1, o = e.indexOf(t);
if (-1 != o) {
e.splice(o, 1);
n = !0;
}
return n;
};
return e;
}();
n.DaZhen_NZBTG_ArrayUtil = i;
cc._RF.pop();
}, {
"./DaZhen_NZBTG_MathUtil": "DaZhen_NZBTG_MathUtil"
} ],
DaZhen_NZBTG_AssetAni: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6a22c4+kwhKga3W+5SEtJ2g", "DaZhen_NZBTG_AssetAni");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a, r = e("../../Utils/DaZhen_NZBTG_MathUtil");
(function(e) {
e[e.Circle = 0] = "Circle";
e[e.Jump = 1] = "Jump";
e[e.Straight = 2] = "Straight";
})(a || (a = {}));
var x = cc._decorator, s = x.ccclass, l = x.property, c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._aniTypePick = a.Circle;
t._aniTypeUse = a.Circle;
t._root = null;
t._countPick = 10;
t._countUse = 10;
t._unitPre = null;
return t;
}
t.prototype.show = function(e, t, n, o, i, y, a) {
var r = {
taskId: this._taskId++,
isUse: t,
count: cc.misc.clampf(e, 1, 10),
countDone: 0,
startPos: this._root.convertToNodeSpaceAR(n),
endPos: this._root.convertToNodeSpaceAR(o),
onProgressArrive: i,
onProgressHide: y,
onDone: a
};
this._taskMap.set(r.taskId, r);
this._runTask(r);
};
t.prototype.start = function() {
this._init();
};
t.prototype._init = function() {
this._taskId = 0;
this._taskMap = new Map();
this._pool = new cc.NodePool();
for (var e = 0; e < 20; e++) {
var t = cc.instantiate(this._unitPre);
this._pool.put(t);
}
};
t.prototype._runTask = function(e) {
for (var t = 0; t < e.count; t++) {
var n = this._getNode();
n.scale = 0;
n.opacity = 0;
n.parent = this._root;
this._doAni(n, t, e);
}
};
t.prototype._getNode = function() {
return this._pool.size() > 0 ? this._pool.get() : cc.instantiate(this._unitPre);
};
t.prototype._putNode = function(e) {
this._pool.put(e);
};
t.prototype._doAni = function(e, t, n) {
switch (n.isUse ? this._aniTypeUse : this._aniTypePick) {
case a.Circle:
this._doCircle(e, t, n);
break;

case a.Jump:
this._doJump(e, t, n);
break;

case a.Straight:
this._doStraight(e, t, n);
}
};
t.prototype._doCircle = function(e, t, n) {
var o = this, i = n.startPos, y = 2 * Math.PI * t / n.count, a = r.DaZhen_NZBTG_MathUtil.CirclePos(i, 100, y);
a.x += r.DaZhen_NZBTG_MathUtil.RandomInt(-30, 30);
a.y += r.DaZhen_NZBTG_MathUtil.RandomInt(-30, 30);
var x = n.endPos, s = n.isUse ? .35 : .5;
cc.tween(e).set({
scale: 1,
opacity: 255,
position: cc.v3(a.x, a.y)
}).delay(s * (1 + .3 * Math.random())).to(s, {
position: cc.v3(x.x, x.y)
}).call(function() {
n.onProgressArrive && n.onProgressArrive();
}).to(s, {
scale: 0,
opacity: 0
}).call(function() {
o._callback(e, n);
}).start();
};
t.prototype._doJump = function(e, t, n) {
var o = this, i = cc.v2(n.startPos);
i.x += r.DaZhen_NZBTG_MathUtil.RandomInt(-200, 200);
i.y += r.DaZhen_NZBTG_MathUtil.RandomInt(-150, 150);
var y = n.endPos, a = n.isUse ? .35 : .5;
cc.tween(e).set({
scale: 1,
opacity: 255,
position: cc.v3(n.startPos)
}).to(a / 4, {
scale: 1,
position: cc.v3((i.x + n.startPos.x) / 2, i.y + 100)
}).to(a / 4, {
scale: 1,
position: cc.v3(i.x, i.y)
}).delay(a * (1 + .1 * t)).to(a, {
position: cc.v3(y.x, y.y)
}).call(function() {
n.onProgressArrive && n.onProgressArrive();
}).to(a, {
scale: 0,
opacity: 0
}).call(function() {
o._callback(e, n);
}).start();
};
t.prototype._doStraight = function(e, t, n) {
var o = this, i = n.startPos, y = n.endPos, a = n.isUse ? .35 : .5;
cc.tween(e).set({
scale: 1,
opacity: 255,
position: cc.v3(i)
}).to(a, {
position: cc.v3(y)
}).call(function() {
n.onProgressArrive && n.onProgressArrive();
}).to(a, {
scale: 0,
opacity: 0
}).call(function() {
o._callback(e, n);
}).start();
};
t.prototype._callback = function(e, t) {
this._putNode(e);
t.countDone++;
t.onProgressHide && t.onProgressHide(t.countDone / t.count);
t.countDone == t.count && t.onDone && t.onDone();
};
y([ l({
type: cc.Enum(a),
visible: !0
}) ], t.prototype, "_aniTypePick", void 0);
y([ l({
type: cc.Enum(a),
visible: !0
}) ], t.prototype, "_aniTypeUse", void 0);
y([ l({
type: cc.Node,
visible: !0
}) ], t.prototype, "_root", void 0);
y([ l({
type: cc.Integer,
visible: !0
}) ], t.prototype, "_countPick", void 0);
y([ l({
type: cc.Integer,
visible: !0
}) ], t.prototype, "_countUse", void 0);
y([ l({
type: cc.Prefab,
visible: !0
}) ], t.prototype, "_unitPre", void 0);
return y([ s ], t);
}(cc.Component);
n.default = c;
cc._RF.pop();
}, {
"../../Utils/DaZhen_NZBTG_MathUtil": "DaZhen_NZBTG_MathUtil"
} ],
DaZhen_NZBTG_AssetsNS: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "bdd3ejpcexIBbvTVpfDfu0e", "DaZhen_NZBTG_AssetsNS");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = e("../Config/DaZhen_NZBTG_Constant"), i = e("../GUI/DaZhen_NZBTG_GUI"), y = e("../GUI/DaZhen_NZBTG_GUIConfig"), a = e("../Main/DaZhen_NZBTG_Debug"), r = e("../Utils/DaZhen_NZBTG_DateUtil"), x = e("../Utils/DaZhen_NZBTG_EventUtil"), s = e("./DaZhen_NZBTG_Data"), l = e("./DaZhen_NZBTG_DataConfig"), c = function() {
function e() {
this._init();
}
Object.defineProperty(e, "ins", {
get: function() {
e._ins || (e._ins = new e());
return e._ins;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "energyAdCountMax", {
get: function() {
return 3;
},
enumerable: !1,
configurable: !0
});
e.prototype._init = function() {
this._coin = s.LastingData.Coin;
this._energy = s.LastingData.Energy;
this._heart = s.LastingData.Heart;
this._limitlessRecord = s.LastingData.LimitlessRecord;
this._limitlessShowType = s.LastingData.LimitlessShowType;
this.initDaily(!1);
this.getCanRefreshLimitless() && this.clearLimitlessShowType();
};
e.prototype.initDaily = function(e) {
this._energyAdCount = s.DailyData.EnergyAdCount;
this._isShareEnergy = s.DailyData.IsShareEnergy;
if (e) {
this._energy = l.DaZhen_NZBTG_DataConfig.EnergyMax;
s.LastingData.Energy = this._energy;
x.DaZhen_NZBTG_EventUtil.Emit(y.GUIEvent.UpdateAsset, y.AssetType.Energy);
x.DaZhen_NZBTG_EventUtil.Emit(y.GUIEvent.LimitlessAsset, y.AssetType.Energy);
}
};
e.prototype.getValue = function(e) {
return e == y.AssetType.Coin ? this._coin : e == y.AssetType.Energy ? this._energy : e == y.AssetType.Heart ? this._heart : void 0;
};
e.prototype.getAdPrize = function(e) {
return e == y.AssetType.Coin ? 199 : e == y.AssetType.Energy ? 10 : e == y.AssetType.Heart ? 10 : void 0;
};
e.prototype.getSharePrize = function(e) {
return e == y.AssetType.Coin ? 100 : e == y.AssetType.Energy ? 1 : e == y.AssetType.Heart ? 1 : void 0;
};
e.prototype.getIsShare = function(e) {
return e != y.AssetType.Coin && (e == y.AssetType.Energy ? this._isShareEnergy : e != y.AssetType.Heart && void 0);
};
e.prototype.getIsLimitless = function(e) {
return e != y.AssetType.Coin && (e == y.AssetType.Energy ? this._energyAdCount >= this.energyAdCountMax : e != y.AssetType.Heart && void 0);
};
e.prototype.getCanRefreshLimitless = function() {
var e = this._limitlessRecord, t = Date.now();
return r.DaZhen_NZBTG_DateUtil.BetweenSecond(t, e) >= l.DaZhen_NZBTG_DataConfig.LimitlessRefresh;
};
e.prototype.getLimitlessShowType = function() {
return this._limitlessShowType;
};
e.prototype.getAdCount = function(e) {
var t = 0, n = 0;
if (e == y.AssetType.Coin) ; else if (e == y.AssetType.Energy) {
t = this._energyAdCount;
n = this.energyAdCountMax;
} else y.AssetType.Heart;
return {
count: t = cc.misc.clampf(t, 0, n),
max: n
};
};
e.prototype.setIsShare = function(e) {
if (e == y.AssetType.Coin) ; else if (e == y.AssetType.Energy) {
this._isShareEnergy = !0;
s.DailyData.IsShareEnergy = this._isShareEnergy;
} else y.AssetType.Heart;
x.DaZhen_NZBTG_EventUtil.Emit(y.GUIEvent.ShareAsset, e);
};
e.prototype.setLimitlessShowType = function() {
var e = null;
if (Math.random() < .33 || a.default.GetIns().showLimitlessType) {
this.getIsLimitless(y.AssetType.Energy) || (e = y.AssetType.Energy);
this._limitlessRecord = Date.now();
this._limitlessShowType = e;
s.LastingData.LimitlessRecord = this._limitlessRecord;
s.LastingData.LimitlessShowType = this._limitlessShowType;
x.DaZhen_NZBTG_EventUtil.Emit(y.GUIEvent.LimitlessShow);
}
console.log("刷新无限显示为：", e);
};
e.prototype.clearLimitlessShowType = function() {
this._limitlessShowType = null;
s.LastingData.LimitlessShowType = this._limitlessShowType;
x.DaZhen_NZBTG_EventUtil.Emit(y.GUIEvent.LimitlessShow);
console.log("清除无限显示");
};
e.prototype.addAdCount = function(e) {
if (e == y.AssetType.Coin) ; else if (e == y.AssetType.Energy) {
this._energyAdCount++;
s.DailyData.EnergyAdCount = this._energyAdCount;
} else y.AssetType.Heart;
x.DaZhen_NZBTG_EventUtil.Emit(y.GUIEvent.AdCountAsset, e);
if (this.getIsLimitless(e)) {
x.DaZhen_NZBTG_EventUtil.Emit(y.GUIEvent.UpdateAsset, e);
x.DaZhen_NZBTG_EventUtil.Emit(y.GUIEvent.LimitlessAsset, e);
}
};
e.prototype.check = function(e, t) {
return !!this.getIsLimitless(e) || (e == y.AssetType.Coin ? !!a.default.GetIns().isLimitlessCoin || this._coin >= t : e == y.AssetType.Energy ? !!a.default.GetIns().isLimitlessEnergy || this._energy >= t : e == y.AssetType.Heart ? !!a.default.GetIns().isLimitlessHeart || this._heart >= t : void 0);
};
e.prototype.deal = function(e, t) {
if (t < 0) {
if (this.getIsLimitless(e)) return;
if (!this.check(e, Math.abs(t))) return;
}
if (e == y.AssetType.Coin) {
this._coin += t;
s.LastingData.Coin = this._coin;
} else if (e == y.AssetType.Energy) {
this._energy += t;
s.LastingData.Energy = this._energy;
} else if (e == y.AssetType.Heart) {
this._heart += t;
s.LastingData.Heart = this._heart;
}
x.DaZhen_NZBTG_EventUtil.Emit(y.GUIEvent.UpdateAsset, e);
};
e.prototype.dealAni = function(e, t, n, a, r) {
var s = t < 0 && e == y.AssetType.Energy;
if (o.DaZhen_NZBTG_Constant.IsOpenEnergy || !s) {
var l = function() {
a && a();
s && i.default.CloseBlockInput();
};
s && i.default.ShowBlockInput();
if (t > 0) if (y.AssetType.Energy == e) x.DaZhen_NZBTG_EventUtil.Emit(y.GUIEvent.AddAsset, e, t, n, l); else {
this.deal(e, t);
l();
} else {
t = Math.abs(t);
if (this.check(e, t)) if (y.AssetType.Energy == e) x.DaZhen_NZBTG_EventUtil.Emit(y.GUIEvent.UseAsset, e, t, n, l); else {
this.deal(e, t);
l();
} else {
e == y.AssetType.Coin ? i.default.ShowToast("金币不足") : e == y.AssetType.Energy ? i.default.ShowToast("体力不足") : e == y.AssetType.Heart && i.default.ShowToast("爱心不足");
(function() {
r && r();
s && i.default.CloseBlockInput();
})();
}
}
} else a && a();
};
return e;
}();
n.default = c;
cc._RF.pop();
}, {
"../Config/DaZhen_NZBTG_Constant": "DaZhen_NZBTG_Constant",
"../GUI/DaZhen_NZBTG_GUI": "DaZhen_NZBTG_GUI",
"../GUI/DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig",
"../Main/DaZhen_NZBTG_Debug": "DaZhen_NZBTG_Debug",
"../Utils/DaZhen_NZBTG_DateUtil": "DaZhen_NZBTG_DateUtil",
"../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"./DaZhen_NZBTG_Data": "DaZhen_NZBTG_Data",
"./DaZhen_NZBTG_DataConfig": "DaZhen_NZBTG_DataConfig"
} ],
DaZhen_NZBTG_Assets: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ad79473AnlHloC1cDpU6pcv", "DaZhen_NZBTG_Assets");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Datas/DaZhen_NZBTG_DataConfig"), r = e("../DaZhen_NZBTG_GUIConfig"), x = e("../../Utils/DaZhen_NZBTG_DateUtil"), s = e("../../Utils/DaZhen_NZBTG_EventUtil"), l = e("../Core/Base/DaZhen_NZBTG_BaseUI"), c = e("../Animations/DaZhen_NZBTG_AssetAni"), _ = e("../../Utils/DaZhen_NZBTG_CoordinateUtil"), h = e("../../Datas/DaZhen_NZBTG_AssetsNS"), u = e("../../Utils/DaZhen_NZBTG_MathUtil"), p = e("../DaZhen_NZBTG_GUI"), f = e("../../Audio/DaZhen_NZBTG_AudioU"), d = e("../../Audio/DaZhen_NZBTG_AudioName"), Z = e("../Panels/DaZhen_NZBTG_PanelEnergy"), g = e("../../Config/DaZhen_NZBTG_Constant"), v = cc._decorator, T = v.ccclass, m = v.property, G = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._nodeCoin = null;
t._nodeEnergy = null;
t._nodeHeart = null;
t._imgAddEnergy = null;
t._labelCoin = null;
t._labelEnergy = null;
t._labelEnergyCd = null;
t._labelHeart = null;
t._iconCoin = null;
t._iconEnergy = null;
t._iconHeart = null;
t._coinAni = null;
t._energyAni = null;
t._heartAni = null;
t._nodeEnergyLimitless = null;
return t;
}
t.prototype.start = function() {
s.DaZhen_NZBTG_EventUtil.Emit(r.GUIEvent.UpdateAsset, r.AssetType.Coin);
s.DaZhen_NZBTG_EventUtil.Emit(r.GUIEvent.UpdateAsset, r.AssetType.Energy);
s.DaZhen_NZBTG_EventUtil.Emit(r.GUIEvent.UpdateAsset, r.AssetType.Heart);
s.DaZhen_NZBTG_EventUtil.Emit(r.GUIEvent.LimitlessAsset, r.AssetType.Energy);
s.DaZhen_NZBTG_EventUtil.Emit(r.GUIEvent.ShowAsset, [ r.AssetType.Energy ]);
};
t.prototype.listenOn = function() {
s.DaZhen_NZBTG_EventUtil.On(r.GUIEvent.ShowAsset, this._onShowAsset, this);
s.DaZhen_NZBTG_EventUtil.On(r.GUIEvent.UpdateAsset, this._onUpdateAsset, this);
s.DaZhen_NZBTG_EventUtil.On(r.GUIEvent.EnergyCd, this._onEnergyCd, this);
s.DaZhen_NZBTG_EventUtil.On(r.GUIEvent.LimitlessAsset, this._onLimitlessAsset, this);
s.DaZhen_NZBTG_EventUtil.On(r.GUIEvent.AddAsset, this._onAddAsset, this);
s.DaZhen_NZBTG_EventUtil.On(r.GUIEvent.UseAsset, this._onUseAsset, this);
};
t.prototype.listenOff = function() {
s.DaZhen_NZBTG_EventUtil.Off(r.GUIEvent.ShowAsset, this._onShowAsset, this);
s.DaZhen_NZBTG_EventUtil.Off(r.GUIEvent.UpdateAsset, this._onUpdateAsset, this);
s.DaZhen_NZBTG_EventUtil.Off(r.GUIEvent.EnergyCd, this._onEnergyCd, this);
s.DaZhen_NZBTG_EventUtil.Off(r.GUIEvent.LimitlessAsset, this._onLimitlessAsset, this);
s.DaZhen_NZBTG_EventUtil.Off(r.GUIEvent.AddAsset, this._onAddAsset, this);
s.DaZhen_NZBTG_EventUtil.Off(r.GUIEvent.UseAsset, this._onUseAsset, this);
};
t.prototype.ocb_Coin = function() {};
t.prototype.ocb_Energy = function() {
h.default.ins.getIsLimitless(r.AssetType.Energy) ? p.default.ShowToast("本日已获得无限体力") : p.default.ShowPopup(r.PanelPath.PanelEnergy, Z.default);
};
t.prototype.ocb_Heart = function() {};
t.prototype._onShowAsset = function(e) {
var t = this;
if (e) {
this._nodeCoin.active = !1;
this._nodeEnergy.active = !1;
this._nodeHeart.active = !1;
e.forEach(function(e) {
e == r.AssetType.Coin ? t._nodeCoin.active = !0 : e == r.AssetType.Energy && g.DaZhen_NZBTG_Constant.IsOpenEnergy ? t._nodeEnergy.active = !0 : e == r.AssetType.Heart && (t._nodeHeart.active = !0);
});
}
};
t.prototype._onUpdateAsset = function(e) {
var t = h.default.ins.getValue(e);
if (e == r.AssetType.Coin) this._labelCoin.string = "" + t; else if (e == r.AssetType.Energy) {
this._labelEnergy.string = t + "/" + a.DaZhen_NZBTG_DataConfig.EnergyMax;
this._labelEnergyCd.node.opacity = t < a.DaZhen_NZBTG_DataConfig.EnergyMax ? 255 : 0;
} else e == r.AssetType.Heart && (this._labelHeart.string = "" + t);
};
t.prototype._onEnergyCd = function(e) {
this._labelEnergyCd.string = x.DaZhen_NZBTG_DateUtil.FormatMS(e);
};
t.prototype._onLimitlessAsset = function(e) {
if (e == r.AssetType.Energy) {
var t = h.default.ins.getIsLimitless(r.AssetType.Energy);
this._labelEnergy.node.active = !t;
this._labelEnergyCd.node.active = !1;
this._imgAddEnergy.active = !t;
this._nodeEnergyLimitless.active = t;
}
};
t.prototype._onAddAsset = function(e, t, n, o) {
this._showAssetAni(e, t, n, o);
};
t.prototype._onUseAsset = function(e, t, n, o) {
this._showAssetAni(e, -t, n, o);
};
t.prototype._showAssetAni = function(e, t, n, o) {
var i, y, a, x, s = t < 0;
if (e == r.AssetType.Coin) {
i = this._coinAni;
y = this._iconCoin;
} else if (e == r.AssetType.Energy) {
i = this._energyAni;
y = this._iconEnergy;
a = d.DaZhen_NZBTG_AudioName.bonus_heart;
x = d.DaZhen_NZBTG_AudioName.bonus_heart;
} else if (e == r.AssetType.Heart) {
i = this._heartAni;
y = this._iconHeart;
}
var l = Math.abs(t), c = s ? _.DaZhen_NZBTG_CoordinateUtil.NodeToWorld(y) : n, p = s ? n : _.DaZhen_NZBTG_CoordinateUtil.NodeToWorld(y), Z = h.default.ins.getValue(e), g = Z + t, v = Z, T = Z;
s && h.default.ins.deal(e, t);
i.show(l, s, c, p, function() {
s ? f.default.PlayEffect(x) : f.default.PlayEffect(a);
}, function(t) {
if (!s) {
T = Math.floor(u.DaZhen_NZBTG_MathUtil.Lerp(Z, g, t));
if (v != T) {
h.default.ins.deal(e, T - v);
v = T;
}
}
}, function() {
o && o();
});
};
y([ m({
type: cc.Node,
visible: !0
}) ], t.prototype, "_nodeCoin", void 0);
y([ m({
type: cc.Node,
visible: !0
}) ], t.prototype, "_nodeEnergy", void 0);
y([ m({
type: cc.Node,
visible: !0
}) ], t.prototype, "_nodeHeart", void 0);
y([ m({
type: cc.Node,
visible: !0
}) ], t.prototype, "_imgAddEnergy", void 0);
y([ m({
type: cc.Label,
visible: !0
}) ], t.prototype, "_labelCoin", void 0);
y([ m({
type: cc.Label,
visible: !0
}) ], t.prototype, "_labelEnergy", void 0);
y([ m({
type: cc.Label,
visible: !0
}) ], t.prototype, "_labelEnergyCd", void 0);
y([ m({
type: cc.Label,
visible: !0
}) ], t.prototype, "_labelHeart", void 0);
y([ m({
type: cc.Node,
visible: !0
}) ], t.prototype, "_iconCoin", void 0);
y([ m({
type: cc.Node,
visible: !0
}) ], t.prototype, "_iconEnergy", void 0);
y([ m({
type: cc.Node,
visible: !0
}) ], t.prototype, "_iconHeart", void 0);
y([ m({
type: c.default,
visible: !0
}) ], t.prototype, "_coinAni", void 0);
y([ m({
type: c.default,
visible: !0
}) ], t.prototype, "_energyAni", void 0);
y([ m({
type: c.default,
visible: !0
}) ], t.prototype, "_heartAni", void 0);
y([ m({
type: cc.Node,
visible: !0
}) ], t.prototype, "_nodeEnergyLimitless", void 0);
return y([ T ], t);
}(l.default);
n.default = G;
cc._RF.pop();
}, {
"../../Audio/DaZhen_NZBTG_AudioName": "DaZhen_NZBTG_AudioName",
"../../Audio/DaZhen_NZBTG_AudioU": "DaZhen_NZBTG_AudioU",
"../../Config/DaZhen_NZBTG_Constant": "DaZhen_NZBTG_Constant",
"../../Datas/DaZhen_NZBTG_AssetsNS": "DaZhen_NZBTG_AssetsNS",
"../../Datas/DaZhen_NZBTG_DataConfig": "DaZhen_NZBTG_DataConfig",
"../../Utils/DaZhen_NZBTG_CoordinateUtil": "DaZhen_NZBTG_CoordinateUtil",
"../../Utils/DaZhen_NZBTG_DateUtil": "DaZhen_NZBTG_DateUtil",
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../../Utils/DaZhen_NZBTG_MathUtil": "DaZhen_NZBTG_MathUtil",
"../Animations/DaZhen_NZBTG_AssetAni": "DaZhen_NZBTG_AssetAni",
"../Core/Base/DaZhen_NZBTG_BaseUI": "DaZhen_NZBTG_BaseUI",
"../DaZhen_NZBTG_GUI": "DaZhen_NZBTG_GUI",
"../DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig",
"../Panels/DaZhen_NZBTG_PanelEnergy": "DaZhen_NZBTG_PanelEnergy"
} ],
DaZhen_NZBTG_AttributeAniBase: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "621cacdNTFHIaOwSQA4p+0r", "DaZhen_NZBTG_AttributeAniBase");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, r = a.ccclass, x = (a.property, a.menu), s = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
this._init();
};
t.prototype.start = function() {
this._doAni();
};
t.prototype._init = function() {
this._rigidBody = this.node.getComponent(cc.RigidBody);
this._collider = this.node.getComponent(cc.PhysicsCollider);
if (this._rigidBody && this._collider) {
this._rigidBody.type = cc.RigidBodyType.Animated;
this._collider.apply();
}
};
t.prototype._doAni = function() {};
return y([ r, x("Game/Item/DaZhen_NZBTG_AttributeAniBase") ], t);
}(cc.Component);
n.default = s;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_AttributeAniMove: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d22e7LKeotKipcec0fIbS33", "DaZhen_NZBTG_AttributeAniMove");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("./DaZhen_NZBTG_AttributeAniBase"), r = cc._decorator, x = r.ccclass, s = r.property, l = r.menu, c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.targetPos = cc.v2();
t.speed = 200;
t.timeDelay = 0;
t.timePaddingTarget = 0;
t.timePaddingOrigin = 0;
return t;
}
t.prototype._init = function() {
e.prototype._init.call(this);
this._originPos = this.node.getPosition();
};
t.prototype._doAni = function() {
var e = this;
if (0 != this.speed) {
var t = this.node, n = this.targetPos.sub(this._originPos).mag() / this.speed;
this.scheduleOnce(function() {
cc.tween(t).repeatForever(cc.tween(t).to(n, {
position: cc.v3(e.targetPos)
}).delay(e.timePaddingTarget).to(n, {
position: cc.v3(e._originPos)
}).delay(e.timePaddingOrigin)).start();
}, this.timeDelay);
}
};
y([ s({
tooltip: "目标位置"
}) ], t.prototype, "targetPos", void 0);
y([ s({
tooltip: "速度 /s",
min: 1
}) ], t.prototype, "speed", void 0);
y([ s({
tooltip: "开始 时间 延迟",
min: 0
}) ], t.prototype, "timeDelay", void 0);
y([ s({
tooltip: "移动到目标后 时间 间隔 ",
min: 0
}) ], t.prototype, "timePaddingTarget", void 0);
y([ s({
tooltip: "返回到原位置 时间 间隔",
min: 0
}) ], t.prototype, "timePaddingOrigin", void 0);
return y([ x, l("Game/Item/DaZhen_NZBTG_AttributeAniMove") ], t);
}(a.default);
n.default = c;
cc._RF.pop();
}, {
"./DaZhen_NZBTG_AttributeAniBase": "DaZhen_NZBTG_AttributeAniBase"
} ],
DaZhen_NZBTG_AttributeAniRota: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "95f52XEPGJJRImxK1xa2yLF", "DaZhen_NZBTG_AttributeAniRota");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("./DaZhen_NZBTG_AttributeAniBase"), r = cc._decorator, x = r.ccclass, s = r.property, l = r.menu, c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.speed = -360;
return t;
}
t.prototype._doAni = function() {
if (0 != this.speed) {
var e = this.node, t = this.speed;
cc.tween(e).repeatForever(cc.tween().by(1, {
angle: t
})).start();
}
};
y([ s({
tooltip: "速度 /s"
}) ], t.prototype, "speed", void 0);
return y([ x, l("Game/Item/DaZhen_NZBTG_AttributeAniRota") ], t);
}(a.default);
n.default = c;
cc._RF.pop();
}, {
"./DaZhen_NZBTG_AttributeAniBase": "DaZhen_NZBTG_AttributeAniBase"
} ],
DaZhen_NZBTG_AttributeAniScale: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "86b77WrpOhMxqsJywPxTz6E", "DaZhen_NZBTG_AttributeAniScale");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("./DaZhen_NZBTG_AttributeAniBase"), r = cc._decorator, x = r.ccclass, s = r.property, l = r.menu, c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.targetScale = 1;
t.speed = .1;
t.timeDelay = 0;
t.timePaddingTarget = 0;
t.timePaddingOrigin = 0;
return t;
}
t.prototype._init = function() {
e.prototype._init.call(this);
this._originScale = this.node.scale;
};
t.prototype._doAni = function() {
var e = this;
if (0 != this.speed) {
var t = this.node, n = Math.floor(this.targetScale - this._originScale) / this.speed;
this.scheduleOnce(function() {
cc.tween(t).repeatForever(cc.tween(t).to(n, {
scale: e.targetScale
}).delay(e.timePaddingTarget).to(n, {
scale: e._originScale
}).delay(e.timePaddingOrigin)).start();
}, this.timeDelay);
}
};
y([ s({
tooltip: "目标大小"
}) ], t.prototype, "targetScale", void 0);
y([ s({
tooltip: "速度 /s",
min: 0
}) ], t.prototype, "speed", void 0);
y([ s({
tooltip: "开始 时间 延迟",
min: 0
}) ], t.prototype, "timeDelay", void 0);
y([ s({
tooltip: "缩放到目标后 时间 间隔 ",
min: 0
}) ], t.prototype, "timePaddingTarget", void 0);
y([ s({
tooltip: "缩放到原大小 时间 间隔",
min: 0
}) ], t.prototype, "timePaddingOrigin", void 0);
return y([ x, l("Game/Item/DaZhen_NZBTG_AttributeAniScale") ], t);
}(a.default);
n.default = c;
cc._RF.pop();
}, {
"./DaZhen_NZBTG_AttributeAniBase": "DaZhen_NZBTG_AttributeAniBase"
} ],
DaZhen_NZBTG_AttributeAniSwing: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f3be2Bg2p5FPIPxHmBdtDX4", "DaZhen_NZBTG_AttributeAniSwing");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Main/DaZhen_NZBTG_Res"), r = e("./DaZhen_NZBTG_AttributeAniBase"), x = cc._decorator, s = x.ccclass, l = x.property, c = x.menu, _ = x.executeInEditMode, h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.range = 45;
t.speed = -90;
return t;
}
Object.defineProperty(t.prototype, "reset", {
get: function() {
return !1;
},
set: function() {
this._init();
},
enumerable: !1,
configurable: !0
});
t.prototype._doAni = function() {
if (0 != this.speed) {
var e = this.node, t = Math.abs(360 / this.speed) * Math.abs(this.range / 360), n = this.range;
e.angle = 0;
cc.tween(e).repeatForever(cc.tween().by(t, {
angle: n
}).by(2 * t, {
angle: -2 * n
}).by(t, {
angle: n
})).start();
}
};
t.prototype._init = function() {
var t = this;
e.prototype._init.call(this);
this._nodeLine = cc.find("Line", this.node);
this._nodeBall = cc.find("Ball", this.node);
if (this._nodeLine && this._nodeBall) {
var n = this.node.height;
this._nodeLine.width = 17;
this._nodeLine.height = n;
this._nodeBall.y = -n;
this._collider.offset = cc.v2(0, -n);
a.default.LoadSpriteFrame("Game/Item/Swing_Line", function(e) {
var n = t._nodeLine.getComponent(cc.Sprite);
n.spriteFrame = null;
n.spriteFrame = e;
n.type = cc.Sprite.Type.TILED;
n.sizeMode = cc.Sprite.SizeMode.CUSTOM;
});
}
};
y([ l({
tooltip: "摇摆幅度"
}) ], t.prototype, "range", void 0);
y([ l({
tooltip: "速度 /s"
}) ], t.prototype, "speed", void 0);
y([ l() ], t.prototype, "reset", null);
return y([ s, _, c("Game/Item/DaZhen_NZBTG_AttributeAniSwing") ], t);
}(r.default);
n.default = h;
cc._RF.pop();
}, {
"../../Main/DaZhen_NZBTG_Res": "DaZhen_NZBTG_Res",
"./DaZhen_NZBTG_AttributeAniBase": "DaZhen_NZBTG_AttributeAniBase"
} ],
DaZhen_NZBTG_AttributeAniTouchMove: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a6b5cnEwKhKyr7YUhu9sRuf", "DaZhen_NZBTG_AttributeAniTouchMove");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Main/DaZhen_NZBTG_Res"), r = e("../DaZhen_NZBTG_GameConfig"), x = e("./DaZhen_NZBTG_AttributeAniBase"), s = cc._decorator, l = s.ccclass, c = s.property, _ = s.menu, h = s.executeInEditMode, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.moveDir = r.TouchMoveDir.Horizontal;
t.originPos = cc.v2();
t.targetPos = cc.v2();
t.nodeLine = null;
return t;
}
Object.defineProperty(t.prototype, "reset", {
get: function() {
return !1;
},
set: function() {
this._init();
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
e.prototype.onLoad.call(this);
this.listenOn();
};
t.prototype.onDestroy = function() {
this.listenOff();
};
t.prototype._onMoveTouchMove = function(e) {
var t = e.getDelta();
if (this.moveDir == r.TouchMoveDir.Horizontal) {
this.node.x += t.x;
this.node.x = cc.misc.clampf(this.node.x, this.originPos.x, this.targetPos.x);
} else if (this.moveDir == r.TouchMoveDir.Vertical) {
this.node.y += t.y;
this.node.y = cc.misc.clampf(this.node.y, this.originPos.y, this.targetPos.y);
}
};
t.prototype._init = function() {
var t = this;
if (this.nodeLine) {
e.prototype._init.call(this);
this._nodeDir = cc.find("Dir", this.node);
if (this.moveDir == r.TouchMoveDir.Horizontal) {
this._nodeDir.angle = 0;
this.node.x = cc.misc.clampf(this.node.x, this.originPos.x, this.targetPos.x);
this.nodeLine.width = Math.abs(this.targetPos.sub(this.originPos).x);
this.nodeLine.height = 5;
this.nodeLine.y = this.node.y;
this.nodeLine.x = (this.originPos.x + this.targetPos.x) / 2;
} else if (this.moveDir == r.TouchMoveDir.Vertical) {
this._nodeDir.angle = 90;
this.node.y = cc.misc.clampf(this.node.y, this.originPos.y, this.targetPos.y);
this.nodeLine.width = 5;
this.nodeLine.height = Math.abs(this.targetPos.sub(this.originPos).y);
this.nodeLine.x = this.node.x;
this.nodeLine.y = (this.originPos.y + this.targetPos.y) / 2;
}
this.nodeLine.getChildByName("Line").setContentSize(this.nodeLine.getContentSize());
a.default.LoadSpriteFrame("Game/Item/TouchMove_Dir", function(e) {
var n = t._nodeDir.getComponent(cc.Sprite);
n.spriteFrame = null;
n.spriteFrame = e;
n.sizeMode = cc.Sprite.SizeMode.TRIMMED;
});
} else this.node.destroy();
};
t.prototype.listenOn = function() {
this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onMoveTouchMove, this);
};
t.prototype.listenOff = function() {
this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onMoveTouchMove, this);
};
y([ c({
type: cc.Enum(r.TouchMoveDir),
tooltip: "移动方向"
}) ], t.prototype, "moveDir", void 0);
y([ c({
tooltip: "起始位置"
}) ], t.prototype, "originPos", void 0);
y([ c({
tooltip: "目标位置"
}) ], t.prototype, "targetPos", void 0);
y([ c({
type: cc.Node,
tooltip: "辅助线"
}) ], t.prototype, "nodeLine", void 0);
y([ c() ], t.prototype, "reset", null);
return y([ l, h, _("Game/Item/DaZhen_NZBTG_AttributeAniTouchMove") ], t);
}(x.default);
n.default = u;
cc._RF.pop();
}, {
"../../Main/DaZhen_NZBTG_Res": "DaZhen_NZBTG_Res",
"../DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig",
"./DaZhen_NZBTG_AttributeAniBase": "DaZhen_NZBTG_AttributeAniBase"
} ],
DaZhen_NZBTG_AttributeFakeStatic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "16f73kC6rdBv4dQ24ur/7/H", "DaZhen_NZBTG_AttributeFakeStatic");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, r = a.ccclass, x = (a.property, a.menu), s = (a.requireComponent, 
function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
this._init();
};
t.prototype.onBeginContact = function(e, t, n) {
t.node, n.node;
this.scheduleOnce(this._setDynamic);
};
t.prototype._init = function() {
this._rigidBody = this.node.getComponent(cc.RigidBody);
this._collider = this.node.getComponent(cc.PhysicsCollider);
if (this._rigidBody && this._collider) {
this._rigidBody.type = cc.RigidBodyType.Static;
this._collider.apply();
}
};
t.prototype._setDynamic = function() {
if (this._rigidBody && this._collider && this._rigidBody.type != cc.RigidBodyType.Dynamic) {
this._rigidBody.type = cc.RigidBodyType.Dynamic;
this._collider.apply();
}
};
return y([ r, x("Game/Item/DaZhen_NZBTG_AttributeFakeStatic") ], t);
}(cc.Component));
n.default = s;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_AttributeSize: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a9ba1W9IxROwYwS9KmJqv8k", "DaZhen_NZBTG_AttributeSize");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, r = a.ccclass, x = a.property, s = a.menu, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.nodeSub = null;
return t;
}
Object.defineProperty(t.prototype, "reset", {
get: function() {
return !1;
},
set: function() {
this._init();
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
this._init();
};
t.prototype._init = function() {
this._collider = this.node.getComponent(cc.PhysicsBoxCollider);
var e = this.node.getContentSize();
this.nodeSub && this.nodeSub.setContentSize(e);
if (this._collider) {
this._collider.size = e;
this._collider.apply();
}
};
y([ x(cc.Node) ], t.prototype, "nodeSub", void 0);
y([ x() ], t.prototype, "reset", null);
return y([ r, s("Game/Item/DaZhen_NZBTG_AttributeSize") ], t);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_AttributeStyle: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "febd1DJH+RMDJiN7SoCDTie", "DaZhen_NZBTG_AttributeStyle");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Main/DaZhen_NZBTG_Res"), r = cc._decorator, x = r.ccclass, s = r.property, l = r.menu, c = r.executeInEditMode, _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.pathSprite = "Sprite";
t.pathTexture = "Game/Item/";
t.index = 0;
t.vertexes = [];
return t;
}
Object.defineProperty(t.prototype, "reset", {
get: function() {
return !1;
},
set: function() {
this._setSprite(!0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "syncPoint", {
get: function() {
return !1;
},
set: function() {
this.vertexes = this._collider.points;
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
this._init();
};
t.prototype._init = function() {
this._sprite = cc.find(this.pathSprite, this.node).getComponent(cc.Sprite);
this._collider = this.node.getComponent(cc.PhysicsPolygonCollider);
this._setSprite(!1);
this._setCollider();
};
t.prototype._setSprite = function(e) {
var t = this, n = this.pathTexture + this.index;
a.default.LoadSpriteFrame(n, function(n) {
t._sprite.spriteFrame = null;
t._sprite.spriteFrame = n;
var o = t._sprite.node.getContentSize();
t.node.setContentSize(o);
e && t._resetPoints(n);
});
};
t.prototype._setCollider = function() {
if (this._collider) {
this._collider.points = this.vertexes;
this._collider.apply();
}
};
t.prototype._resetPoints = function() {};
y([ s({
tooltip: "sprite节点的路径",
readonly: !0
}) ], t.prototype, "pathSprite", void 0);
y([ s({
tooltip: "图片资源路径",
readonly: !0
}) ], t.prototype, "pathTexture", void 0);
y([ s({
type: cc.Integer,
min: 0,
tooltip: "图片资源下标"
}) ], t.prototype, "index", void 0);
y([ s({
type: cc.Vec2,
tooltip: "多边形顶点数组",
readonly: !0
}) ], t.prototype, "vertexes", void 0);
y([ s() ], t.prototype, "reset", null);
y([ s() ], t.prototype, "syncPoint", null);
return y([ x, c, l("Game/Item/DaZhen_NZBTG_AttributeStyle") ], t);
}(cc.Component);
n.default = _;
cc._RF.pop();
}, {
"../../Main/DaZhen_NZBTG_Res": "DaZhen_NZBTG_Res"
} ],
DaZhen_NZBTG_AudioConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e5d6eOiuiNAKI7d0CPnHKbP", "DaZhen_NZBTG_AudioConfig");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_AudioConfig = void 0;
n.DaZhen_NZBTG_AudioConfig = [ "bonus-heart", "click", "clock", "cutting", "death", "ding", "game_bgm", "lose", "victory" ];
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_AudioName: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "2a16awWltRI6KZWx5TaJJ85", "DaZhen_NZBTG_AudioName");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_AudioName = void 0;
(function(e) {
e.game_bgm = "game_bgm";
e.click = "click";
e.clock = "clock";
e.cutting = "cutting";
e.death = "death";
e.ding = "ding";
e.lose = "lose";
e.victory = "victory";
e.bonus_heart = "bonus-heart";
})(n.DaZhen_NZBTG_AudioName || (n.DaZhen_NZBTG_AudioName = {}));
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_AudioU: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "2369dGcRuJDFLZlbueb4wN6", "DaZhen_NZBTG_AudioU");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = e("../Main/DaZhen_NZBTG_Res"), i = e("../Datas/DaZhen_NZBTG_SettingNS"), y = e("../Sdk/DaZhen_NZBTG_Sdk"), a = e("../SubGame/DaZhen_NZBTG_SubGameUtil"), r = function() {
function e() {}
e.Init = function() {
e._ClipMap = new Map();
e._IDMap = new Map();
e._ParamsMap = new Map();
cc.game.on(cc.game.EVENT_HIDE, e._OnHide);
cc.game.on(cc.game.EVENT_SHOW, e._OnShow);
};
e.Exit = function() {
cc.game.off(cc.game.EVENT_HIDE, e._OnHide);
cc.game.off(cc.game.EVENT_SHOW, e._OnShow);
e.StopAll();
};
e.PlayMusic = function(t, n) {
void 0 === n && (n = 1);
if (i.default.ins.getIsOpenMusic()) {
e.StopMusic();
e._Play(t, !0, n);
e._MusicName = t;
}
};
e.PlayEffect = function(t, n, o) {
void 0 === n && (n = !1);
void 0 === o && (o = 1);
i.default.ins.getIsOpenEffect() && e._Play(t, n, o);
};
e.StopMusic = function() {
e._Stop(e._MusicName, !0);
};
e.StopEffect = function(t) {
e._Stop(t, !0);
};
e.PauseAll = function() {
if (!e._IsPause) {
e._IsPause = !0;
console.log("PauseAll");
e._IDMap.forEach(function(t, n) {
var o = n;
e._Stop(o, !1);
});
}
};
e.ResumeAll = function() {
if (!y.default.IsShowVideo && e._IsPause) {
e._IsPause = !1;
console.log("ResumeAll");
var t = [];
e._IDMap.forEach(function(e, n) {
t.push(n);
});
e._IDMap.clear();
t.forEach(function(t) {
var n = e._ParamsMap.get(t), o = n.audioName, i = n.loop, y = n.volume;
i && (o == e._MusicName ? e.PlayMusic(o, y) : e.PlayEffect(o, i, y));
});
}
};
e.StopAll = function() {
e._IDMap.forEach(function(t, n) {
var o = n;
e._Stop(o, !0);
});
e._IDMap.clear();
e._ParamsMap.clear();
};
e._Play = function(t, n, i) {
if (!a.default.IsExit && !y.default.IsShowVideo) {
var r = o.default.GetCacheAudio(t);
if (r) {
var x = cc.audioEngine.play(r, n, i);
e._ParamsMap.set(t, {
audioName: t,
loop: n,
volume: i
});
e._IDMap.set(t, x);
} else console.log("音频 不存在：", t);
}
};
e._Stop = function(t, n) {
if (e._IDMap.has(t)) {
var o = e._IDMap.get(t);
cc.audioEngine.stop(o);
if (n) {
e._IDMap.delete(t);
e._ParamsMap.delete(t);
}
}
};
e._OnHide = function() {
console.warn("进入后台----------------------\x3e");
e.PauseAll();
};
e._OnShow = function() {
console.warn("回到游戏----------------------\x3e");
setTimeout(function() {
e.ResumeAll();
}, 100);
};
return e;
}();
n.default = r;
cc._RF.pop();
}, {
"../Datas/DaZhen_NZBTG_SettingNS": "DaZhen_NZBTG_SettingNS",
"../Main/DaZhen_NZBTG_Res": "DaZhen_NZBTG_Res",
"../Sdk/DaZhen_NZBTG_Sdk": "DaZhen_NZBTG_Sdk",
"../SubGame/DaZhen_NZBTG_SubGameUtil": "DaZhen_NZBTG_SubGameUtil"
} ],
DaZhen_NZBTG_BannerClick_mini: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "378c2s17shC469YrEWL+f8P", "DaZhen_NZBTG_BannerClick_mini");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../DaZhen_NZBTG_SdkConfig"), r = e("./DaZhen_NZBTG_BaseSdkE"), x = cc._decorator, s = x.ccclass, l = (x.property, 
x.menu), c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.pfns = [ a.PfN.oppo ];
t.extensionName = "查看广告";
return t;
}
return y([ s, l("Sdk/DaZhen_NZBTG_BannerClick_mini") ], t);
}(r.default);
n.default = c;
cc._RF.pop();
}, {
"../DaZhen_NZBTG_SdkConfig": "DaZhen_NZBTG_SdkConfig",
"./DaZhen_NZBTG_BaseSdkE": "DaZhen_NZBTG_BaseSdkE"
} ],
DaZhen_NZBTG_BannerNative_mini: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f5e8emRPXpMfaaXC0THQaXH", "DaZhen_NZBTG_BannerNative_mini");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../DaZhen_NZBTG_SdkConfig"), r = e("./DaZhen_NZBTG_BaseSdkE"), x = cc._decorator, s = x.ccclass, l = x.property, c = x.menu, _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._clickNode = null;
t.pfns = [ a.PfN.oppo ];
t.extensionName = "banner 原生小游戏";
return t;
}
t.prototype.setBanner = function(e) {
if (this.isWork) {
this.nodeSub && this.nodeSub.destroy();
this.node.height = e;
var t, n = new cc.Node(), o = this._clickNode ? this._clickNode : n;
n.y = e / 2;
n.parent = this.node;
n.setContentSize(this.node.getContentSize());
t = lieyou_SdkManager.showNativeAd_2({
node: n,
width: n.width - 20,
height: n.height - 90,
bgPath: "SDK/lieyou_sdkRes/installShortcut/whiteBg",
bgOpacity: 0,
clickNode: o,
destroyCallBack: function() {
o.active = !1;
}
});
this._clickNode && (this._clickNode.scale = t ? 1 : 0);
this.nodeSub = n;
this.node.active = t;
console.log("banner 原生小游戏:", t);
}
};
y([ l({
tooltip: "banner 原生小游戏 点击按钮",
type: cc.Node,
visible: !0
}) ], t.prototype, "_clickNode", void 0);
return y([ s, c("Sdk/DaZhen_NZBTG_BannerNative_mini") ], t);
}(r.default);
n.default = _;
cc._RF.pop();
}, {
"../DaZhen_NZBTG_SdkConfig": "DaZhen_NZBTG_SdkConfig",
"./DaZhen_NZBTG_BaseSdkE": "DaZhen_NZBTG_BaseSdkE"
} ],
DaZhen_NZBTG_BaseBlockInput: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f80e63hJ0hGCJpZ5zv+Tv0a", "DaZhen_NZBTG_BaseBlockInput");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("./DaZhen_NZBTG_BaseUI"), r = cc._decorator, x = r.ccclass, s = (r.property, 
function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
n = t;
t.prototype.start = function() {
this.initOnce();
};
t.prototype.onDestroy = function() {
n.BBI = null;
};
t.prototype.initOnce = function() {
this.node.active = !1;
this.node.setContentSize(cc.winSize);
};
t.prototype.show = function() {
e.prototype.show.call(this);
this.node.active = !0;
};
t.prototype.close = function() {
e.prototype.close.call(this);
this.node.active = !1;
};
var n;
t.BBI = null;
return n = y([ x ], t);
}(a.default));
n.default = s;
cc._RF.pop();
}, {
"./DaZhen_NZBTG_BaseUI": "DaZhen_NZBTG_BaseUI"
} ],
DaZhen_NZBTG_BasePanel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "cb38a+JNGtMm5a5y3OpJzte", "DaZhen_NZBTG_BasePanel");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../Utils/DaZhen_NZBTG_EventUtil"), r = e("../../../Sdk/DaZhen_NZBTG_Sdk"), x = e("../../Animations/DaZhen_NZBTG_PlaneAni"), s = e("../../DaZhen_NZBTG_GUIConfig"), l = e("./DaZhen_NZBTG_BaseUI"), c = cc._decorator, _ = c.ccclass, h = (c.property, 
function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.initPanel = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
};
t.prototype.show = function() {
e.prototype.show.call(this);
a.DaZhen_NZBTG_EventUtil.Emit(s.GUIEvent.ShowPopup, this);
};
t.prototype.close = function() {
e.prototype.close.call(this);
a.DaZhen_NZBTG_EventUtil.Emit(s.GUIEvent.ClosePopup, this);
};
t.prototype.showPanel = function() {
this.isShowing = !0;
this.node.getComponent(x.default).show(this.onShowPanel.bind(this));
};
t.prototype.closePanel = function() {
this.isShowing = !1;
this.node.getComponent(x.default).close(this.onClosePanel.bind(this));
};
t.prototype.pausePanel = function() {
this.isShowing = !1;
this.onPausePanel();
};
t.prototype.resumePanel = function() {
this.isShowing = !0;
this.onResumePanel();
};
t.prototype.initOncePanel = function() {
r.default.AdapterOnOff(this.node, !1, !0);
};
t.prototype.onShowPanel = function() {
console.log(this.node.name + " : onShowPanel");
r.default.AdapterOnOff(this.node, !0);
};
t.prototype.onClosePanel = function() {
console.log(this.node.name + " : onClosePanel");
r.default.AdapterOnOff(this.node, !1);
};
t.prototype.onPausePanel = function() {
console.log(this.node.name + " : onPausePanel");
};
t.prototype.onResumePanel = function() {
console.log(this.node.name + " : onResumePanel");
};
t.prototype.checkClose = function() {
return !0;
};
t.prototype.ocb_Close = function() {
this.checkClose() && this.close();
};
return y([ _ ], t);
}(l.default));
n.default = h;
cc._RF.pop();
}, {
"../../../Sdk/DaZhen_NZBTG_Sdk": "DaZhen_NZBTG_Sdk",
"../../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../../Animations/DaZhen_NZBTG_PlaneAni": "DaZhen_NZBTG_PlaneAni",
"../../DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig",
"./DaZhen_NZBTG_BaseUI": "DaZhen_NZBTG_BaseUI"
} ],
DaZhen_NZBTG_BaseSdkE: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9c83bDOrXFNdLKOT99j7H1y", "DaZhen_NZBTG_BaseSdkE");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../DaZhen_NZBTG_Sdk"), r = cc._decorator, x = r.ccclass, s = (r.property, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.pfns = [];
t.extensionName = "BaseSdkE";
return t;
}
t.prototype.onLoad = function() {
this.check();
this.listenOn();
};
t.prototype.onDestroy = function() {
this.listenOff();
};
t.prototype.check = function() {
this.isWork = a.default.IsPfNs.apply(a.default, this.pfns);
this.node.active = !1;
};
t.prototype.listenOn = function() {};
t.prototype.listenOff = function() {};
t.prototype.init = function() {};
t.prototype.show = function() {
if (this.isWork) {
this.node.active = !0;
this.init();
console.log("组件展示 " + this.extensionName);
}
};
t.prototype.close = function() {
if (this.isWork) {
this.node.active = !1;
console.log("组件关闭 " + this.extensionName);
}
};
return y([ x ], t);
}(cc.Component));
n.default = s;
cc._RF.pop();
}, {
"../DaZhen_NZBTG_Sdk": "DaZhen_NZBTG_Sdk"
} ],
DaZhen_NZBTG_BaseToast: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7f408w0kAFDvK8cyWobWdkK", "DaZhen_NZBTG_BaseToast");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("./DaZhen_NZBTG_BaseUI"), r = cc._decorator, x = r.ccclass, s = r.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._label = null;
return t;
}
n = t;
t.prototype.init = function(e) {
this._label.string = e;
e != n._Msg ? n._Msg = e : this.node.destroy();
};
t.prototype.show = function() {
e.prototype.show.call(this);
this._doShow();
};
t.prototype._doShow = function() {
var e = this;
cc.tween(this.node).set({
scale: .6,
opacity: 100,
y: 100
}).to(.2, {
scale: 1,
opacity: 255
}).delay(1).to(.6, {
y: 200,
opacity: 50
}).set({
opacity: 0
}).call(function() {
n._Msg = null;
e.node.destroy();
}).start();
};
var n;
y([ s({
type: cc.Label,
visible: !0
}) ], t.prototype, "_label", void 0);
return n = y([ x ], t);
}(a.default);
n.default = l;
cc._RF.pop();
}, {
"./DaZhen_NZBTG_BaseUI": "DaZhen_NZBTG_BaseUI"
} ],
DaZhen_NZBTG_BaseTransition: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d5b3f+IqD1IU6SXNf1OkQHo", "DaZhen_NZBTG_BaseTransition");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../Utils/DaZhen_NZBTG_CoordinateUtil"), r = e("./DaZhen_NZBTG_BaseUI"), x = cc._decorator, s = x.ccclass, l = x.property, c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._maskNode = null;
t._spriteNode = null;
return t;
}
t.prototype.start = function() {
this.initOnce();
};
t.prototype.initOnce = function() {
this.node.active = !1;
this._sizeMin = cc.size(0, 0);
this._sizeMid = cc.size(250, 250);
this._sizeMax = cc.size(2.5 * cc.winSize.width, 2.5 * cc.winSize.width);
this._spriteNode.setContentSize(cc.winSize);
};
t.prototype.init = function(e, t, n) {
var o = a.DaZhen_NZBTG_CoordinateUtil.WorldToLocal(e, this._maskNode.parent);
this._maskNode.setPosition(o);
t ? this._maskNode.setContentSize(this._sizeMax) : this._maskNode.setContentSize(this._sizeMin);
o = a.DaZhen_NZBTG_CoordinateUtil.NodeToNode(this.node, this._spriteNode.parent);
this._spriteNode.setPosition(o);
this._onDone = n;
t ? this._doEnter() : this._doExit();
};
t.prototype._doEnter = function() {
var e = this;
this.node.active = !0;
this._tween && this._tween.stop();
var t = this._sizeMin;
this._tween = cc.tween(this._maskNode).to(.6, {
width: this._sizeMid.width,
height: this._sizeMid.height
}).delay(.5).to(.6, {
width: t.width,
height: t.height
}).call(function() {
e._onDone && e._onDone();
}).start();
};
t.prototype._doExit = function() {
var e = this;
this._tween && this._tween.stop();
var t = this._sizeMax;
this._tween = cc.tween(this._maskNode).to(.6, {
width: this._sizeMid.width,
height: this._sizeMid.height
}).delay(.5).to(.6, {
width: t.width,
height: t.height
}).call(function() {
e._onDone && e._onDone();
e.node.active = !1;
}).start();
};
y([ l({
type: cc.Node,
visible: !0
}) ], t.prototype, "_maskNode", void 0);
y([ l({
type: cc.Node,
visible: !0
}) ], t.prototype, "_spriteNode", void 0);
return y([ s ], t);
}(r.default);
n.default = c;
cc._RF.pop();
}, {
"../../../Utils/DaZhen_NZBTG_CoordinateUtil": "DaZhen_NZBTG_CoordinateUtil",
"./DaZhen_NZBTG_BaseUI": "DaZhen_NZBTG_BaseUI"
} ],
DaZhen_NZBTG_BaseUI: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "459492KzP9BdbbX3spi1QJR", "DaZhen_NZBTG_BaseUI");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, r = a.ccclass, x = (a.property, function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.init = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
};
t.prototype.show = function() {};
t.prototype.close = function() {};
t.prototype.onLoad = function() {
this.listenOn();
};
t.prototype.onDestroy = function() {
this.listenOff();
};
t.prototype.listenOn = function() {};
t.prototype.listenOff = function() {};
t.prototype.onShow = function() {};
t.prototype.onClose = function() {};
t.prototype.initOnce = function() {};
return y([ r ], t);
}(cc.Component));
n.default = x;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_BaseUnit: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e27fc2twWpAy55DZSKynGsI", "DaZhen_NZBTG_BaseUnit");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("./DaZhen_NZBTG_BaseUI"), r = cc._decorator, x = r.ccclass, s = (r.property, 
function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
Object.defineProperty(t.prototype, "dataIndex", {
get: function() {
return this._dataIndex;
},
enumerable: !1,
configurable: !0
});
t.prototype.setDataIndex = function(e) {
this._dataIndex = e;
};
t.prototype.setData = function(e) {
this._data = e;
};
t.prototype.getData = function() {
return this._data;
};
return y([ x ], t);
}(a.default));
n.default = s;
cc._RF.pop();
}, {
"./DaZhen_NZBTG_BaseUI": "DaZhen_NZBTG_BaseUI"
} ],
DaZhen_NZBTG_BaseWaiting: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b7f9c3hPCBEtrviMGlAvOOO", "DaZhen_NZBTG_BaseWaiting");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("./DaZhen_NZBTG_BaseUI"), r = cc._decorator, x = r.ccclass, s = r.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._label = null;
return t;
}
t.prototype.onLoad = function() {
this.node.y = cc.winSize.height / 2 + 150;
};
t.prototype.init = function(e) {
this._label.string = e;
};
t.prototype.show = function() {
e.prototype.show.call(this);
this._doShow();
};
t.prototype._doShow = function() {
var e = this;
this._tween && this._tween.stop();
this._tween = cc.tween(this.node).to(.3, {
y: cc.winSize.height / 2 - 150
}).delay(1).to(.3, {
y: cc.winSize.height / 2 + 150
}).call(function() {
e.node.destroy();
}).start();
};
y([ s({
type: cc.Label,
visible: !0
}) ], t.prototype, "_label", void 0);
return y([ x ], t);
}(a.default);
n.default = l;
cc._RF.pop();
}, {
"./DaZhen_NZBTG_BaseUI": "DaZhen_NZBTG_BaseUI"
} ],
DaZhen_NZBTG_BinaryTree: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "07b2f/DrMNP866vfe+JIxCj", "DaZhen_NZBTG_BinaryTree");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_BinaryTree = void 0;
var o = function(e, t) {
this.depth = e;
this.data = t;
}, i = function() {
function e() {}
e.prototype.insert = function(e) {
var t = new o(e.depth, e);
this._root ? this.insertNode(this._root, t) : this._root = t;
};
e.prototype.insertNode = function(e, t) {
if (e.depth > t.depth) {
if (e.leftNode) {
this.insertNode(e.leftNode, t);
return;
}
e.leftNode = t;
} else {
if (e.rightNode) {
this.insertNode(e.rightNode, t);
return;
}
e.rightNode = t;
}
};
e.prototype.inOrderTraversal = function(e, t) {
if (e) {
this.inOrderTraversal(e.leftNode, t);
t.push(e.data);
this.inOrderTraversal(e.rightNode, t);
}
return t;
};
e.prototype.preOrderTraversal = function(e, t) {
if (e) {
t.push(e.data);
this.preOrderTraversal(e.leftNode, t);
this.preOrderTraversal(e.rightNode, t);
}
return t;
};
e.prototype.postOrderTraversal = function(e, t) {
if (e) {
this.postOrderTraversal(e.leftNode, t);
this.postOrderTraversal(e.rightNode, t);
t.push(e.data);
}
return t;
};
e.prototype.treeDepth = function(e) {
return void 0 === e || null === e.data ? 0 : Math.max(this.treeDepth(e.leftNode), this.treeDepth(e.rightNode)) + 1;
};
e.prototype.minDepth = function(e) {
if (void 0 === e || null === e.data) return 0;
var t = this.minDepth(e.leftNode), n = this.minDepth(e.rightNode);
return t && n ? 1 + Math.min(t, n) : 1 + t + n;
};
return e;
}();
n.DaZhen_NZBTG_BinaryTree = i;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_BtnAge: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c3d28htzS5Dc49x25dfXagD", "DaZhen_NZBTG_BtnAge");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../DaZhen_NZBTG_SdkConfig"), r = e("./DaZhen_NZBTG_BaseSdkE"), x = cc._decorator, s = x.ccclass, l = (x.property, 
x.menu), c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.pfns = [ a.PfN.native, a.PfN.oppo, a.PfN.vivo, a.PfN.wx, a.PfN.qq, a.PfN.tt ];
t.extensionName = "适龄提醒";
return t;
}
t.prototype.init = function() {
if (this.isWork) {
this.nodeSub && this.nodeSub.destroy();
var e = new cc.Node();
e.parent = this.node;
this.nodeSub = e;
lieyou_SdkManager.showAge({
node: e
});
}
};
return y([ s, l("Sdk/DaZhen_NZBTG_BtnAge") ], t);
}(r.default);
n.default = c;
cc._RF.pop();
}, {
"../DaZhen_NZBTG_SdkConfig": "DaZhen_NZBTG_SdkConfig",
"./DaZhen_NZBTG_BaseSdkE": "DaZhen_NZBTG_BaseSdkE"
} ],
DaZhen_NZBTG_BtnAppBox: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e3446NmqKlERp5eBbXu8msb", "DaZhen_NZBTG_BtnAppBox");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../DaZhen_NZBTG_SdkConfig"), r = e("./DaZhen_NZBTG_BaseSdkE"), x = cc._decorator, s = x.ccclass, l = (x.property, 
x.menu), c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.pfns = [ a.PfN.qq ];
t.extensionName = "qq 盒子";
return t;
}
t.prototype.init = function() {
if (this.isWork) {
this.nodeSub && this.nodeSub.destroy();
var e = new cc.Node();
e.parent = this.node;
this.nodeSub = e;
lieyou_SdkManager.showAppBox({
node: e,
isPersist: !0
});
}
};
return y([ s, l("Sdk/DaZhen_NZBTG_BtnAppBox") ], t);
}(r.default);
n.default = c;
cc._RF.pop();
}, {
"../DaZhen_NZBTG_SdkConfig": "DaZhen_NZBTG_SdkConfig",
"./DaZhen_NZBTG_BaseSdkE": "DaZhen_NZBTG_BaseSdkE"
} ],
DaZhen_NZBTG_BtnLuPing: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "92fe1t4ESRKwJykZigQSgMZ", "DaZhen_NZBTG_BtnLuPing");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Utils/DaZhen_NZBTG_EventUtil"), r = e("../DaZhen_NZBTG_Sdk"), x = e("../DaZhen_NZBTG_SdkConfig"), s = e("./DaZhen_NZBTG_BaseSdkE"), l = cc._decorator, c = l.ccclass, _ = (l.property, 
l.menu), h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.pfns = [ x.PfN.tt ];
t.extensionName = "按钮 录屏";
return t;
}
t.prototype.obc_Click = function() {
if (this.isWork) {
console.log("点击录屏");
r.default.GetIsLP() ? a.DaZhen_NZBTG_EventUtil.Emit(x.LuPingEvent.LuPingEnd, !0) : a.DaZhen_NZBTG_EventUtil.Emit(x.LuPingEvent.LuPingStart, x.LuPingStart.Manual, !0);
}
};
t.prototype._onLuPingStart = function() {
var e = this.node.getChildByName("Start"), t = this.node.getChildByName("End");
e.active = !1;
t.active = !0;
cc.Tween.stopAllByTarget(t);
cc.tween(t).repeatForever(cc.tween().to(.8, {
opacity: 0
}).to(.8, {
opacity: 255
})).start();
};
t.prototype._onLuPingPause = function() {
lieyou_SdkManager.pauseLuPing();
};
t.prototype._onLuPingResume = function() {
lieyou_SdkManager.resumeLuPing();
};
t.prototype._onLuPingEnd = function() {
var e = this.node.getChildByName("Start"), t = this.node.getChildByName("End");
e.active = !0;
t.active = !1;
cc.Tween.stopAllByTarget(t);
};
t.prototype.listenOn = function() {
if (this.isWork) {
a.DaZhen_NZBTG_EventUtil.On(x.LuPingEvent.LuPingStart, this._onLuPingStart, this);
a.DaZhen_NZBTG_EventUtil.On(x.LuPingEvent.LuPingPause, this._onLuPingPause, this);
a.DaZhen_NZBTG_EventUtil.On(x.LuPingEvent.LuPingResume, this._onLuPingResume, this);
a.DaZhen_NZBTG_EventUtil.On(x.LuPingEvent.LuPingEnd, this._onLuPingEnd, this);
}
};
t.prototype.listenOff = function() {
if (this.isWork) {
a.DaZhen_NZBTG_EventUtil.Off(x.LuPingEvent.LuPingStart, this._onLuPingStart, this);
a.DaZhen_NZBTG_EventUtil.Off(x.LuPingEvent.LuPingPause, this._onLuPingPause, this);
a.DaZhen_NZBTG_EventUtil.Off(x.LuPingEvent.LuPingResume, this._onLuPingResume, this);
a.DaZhen_NZBTG_EventUtil.Off(x.LuPingEvent.LuPingEnd, this._onLuPingEnd, this);
}
};
return y([ c, _("Sdk/DaZhen_NZBTG_BtnLuPing") ], t);
}(s.default);
n.default = h;
cc._RF.pop();
}, {
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../DaZhen_NZBTG_Sdk": "DaZhen_NZBTG_Sdk",
"../DaZhen_NZBTG_SdkConfig": "DaZhen_NZBTG_SdkConfig",
"./DaZhen_NZBTG_BaseSdkE": "DaZhen_NZBTG_BaseSdkE"
} ],
DaZhen_NZBTG_BtnMoreGameSide: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "30b41S7H8NHxKJmE1QzLP8d", "DaZhen_NZBTG_BtnMoreGameSide");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../DaZhen_NZBTG_SdkConfig"), r = e("./DaZhen_NZBTG_BaseSdkE"), x = cc._decorator, s = x.ccclass, l = (x.property, 
x.menu), c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.pfns = [ a.PfN.wx ];
t.extensionName = "wx 侧边栏互推";
return t;
}
t.prototype.init = function() {
if (this.isWork) {
this.nodeSub && this.nodeSub.destroy();
var e = new cc.Node();
e.parent = this.node;
this.nodeSub = e;
lieyou_SdkManager.showMoreGameSide({
isPersist: !0,
sideType_right: !1,
y: -100
});
}
};
return y([ s, l("Sdk/DaZhen_NZBTG_BtnMoreGameSide") ], t);
}(r.default);
n.default = c;
cc._RF.pop();
}, {
"../DaZhen_NZBTG_SdkConfig": "DaZhen_NZBTG_SdkConfig",
"./DaZhen_NZBTG_BaseSdkE": "DaZhen_NZBTG_BaseSdkE"
} ],
DaZhen_NZBTG_BtnMoreGame_oppo: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a2fddlWtARBuLHl8HviluOs", "DaZhen_NZBTG_BtnMoreGame_oppo");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../GUI/DaZhen_NZBTG_GUI"), r = e("../DaZhen_NZBTG_SdkConfig"), x = e("./DaZhen_NZBTG_BaseSdkE"), s = cc._decorator, l = s.ccclass, c = s.property, _ = s.menu, h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.isCustom = !1;
t.pfns = [ r.PfN.oppo ];
t.extensionName = "更多游戏";
return t;
}
t.prototype.obc_Click = function() {
if (this.isWork && this.isCustom) {
console.log("点击 更多游戏");
var e = this._getMoreGameFunc();
e ? e() : a.default.ShowToast("暂未开放");
}
};
t.prototype._getMoreGameFunc = function() {
return this._moreGameObj && "function" == typeof this._moreGameObj.oppoTouchCallBack ? this._moreGameObj.oppoTouchCallBack : null;
};
t.prototype.init = function() {
if (this.isWork) {
var e = new cc.Node();
e.parent = this.node;
this.isCustom && (e.active = !1);
this._moreGameObj = {
node: e
};
this.nodeSub = e;
lieyou_SdkManager.showMoreGameByIcon(this._moreGameObj);
}
};
y([ c({
tooltip: "带图片"
}) ], t.prototype, "isCustom", void 0);
return y([ l, _("Sdk/BtnMoreGame") ], t);
}(x.default);
n.default = h;
cc._RF.pop();
}, {
"../../GUI/DaZhen_NZBTG_GUI": "DaZhen_NZBTG_GUI",
"../DaZhen_NZBTG_SdkConfig": "DaZhen_NZBTG_SdkConfig",
"./DaZhen_NZBTG_BaseSdkE": "DaZhen_NZBTG_BaseSdkE"
} ],
DaZhen_NZBTG_BtnMoreGame_vivo: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3783cXTWpFGNpfijT92Yu9k", "DaZhen_NZBTG_BtnMoreGame_vivo");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../DaZhen_NZBTG_SdkConfig"), r = e("./DaZhen_NZBTG_BaseSdkE"), x = cc._decorator, s = x.ccclass, l = (x.property, 
x.menu), c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.pfns = [ a.PfN.vivo ];
t.extensionName = "vivo 更多游戏";
return t;
}
t.prototype.init = function() {
this.isWork && lieyou_SdkManager.showMoreGameByIcon();
};
return y([ s, l("Sdk/DaZhen_NZBTG_BtnMoreGame_vivo") ], t);
}(r.default);
n.default = c;
cc._RF.pop();
}, {
"../DaZhen_NZBTG_SdkConfig": "DaZhen_NZBTG_SdkConfig",
"./DaZhen_NZBTG_BaseSdkE": "DaZhen_NZBTG_BaseSdkE"
} ],
DaZhen_NZBTG_BtnYHXY: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "772cfgnrdxFK5/xQe+h2BMX", "DaZhen_NZBTG_BtnYHXY");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../DaZhen_NZBTG_Sdk"), r = e("../DaZhen_NZBTG_SdkConfig"), x = e("./DaZhen_NZBTG_BaseSdkE"), s = cc._decorator, l = s.ccclass, c = (s.property, 
s.menu), _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.pfns = [ r.PfN.oppo, r.PfN.vivo, r.PfN.tt, r.PfN.qq ];
t.extensionName = "用户协议";
return t;
}
t.prototype.obc_Click = function() {
this.isWork && a.default.ShowYHXY();
};
return y([ l, c("Sdk/DaZhen_NZBTG_BtnYHXY") ], t);
}(x.default);
n.default = _;
cc._RF.pop();
}, {
"../DaZhen_NZBTG_Sdk": "DaZhen_NZBTG_Sdk",
"../DaZhen_NZBTG_SdkConfig": "DaZhen_NZBTG_SdkConfig",
"./DaZhen_NZBTG_BaseSdkE": "DaZhen_NZBTG_BaseSdkE"
} ],
DaZhen_NZBTG_BtnYSZC: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "4947euvdaVHipp74kcFBv2U", "DaZhen_NZBTG_BtnYSZC");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../DaZhen_NZBTG_Sdk"), r = e("../DaZhen_NZBTG_SdkConfig"), x = e("./DaZhen_NZBTG_BaseSdkE"), s = cc._decorator, l = s.ccclass, c = (s.property, 
s.menu), _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.pfns = [ r.PfN.oppo, r.PfN.vivo, r.PfN.qq ];
t.extensionName = "隐私政策";
return t;
}
t.prototype.obc_Click = function() {
this.isWork && a.default.ShowYSZC();
};
return y([ l, c("Sdk/DaZhen_NZBTG_BtnYSZC") ], t);
}(x.default);
n.default = _;
cc._RF.pop();
}, {
"../DaZhen_NZBTG_Sdk": "DaZhen_NZBTG_Sdk",
"../DaZhen_NZBTG_SdkConfig": "DaZhen_NZBTG_SdkConfig",
"./DaZhen_NZBTG_BaseSdkE": "DaZhen_NZBTG_BaseSdkE"
} ],
DaZhen_NZBTG_Camera: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f764cbhotRAlomOWV7O9PPk", "DaZhen_NZBTG_Camera");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../Utils/DaZhen_NZBTG_EventUtil"), r = e("./DaZhen_NZBTG_GameConfig"), x = cc._decorator, s = x.ccclass, l = x.property, c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.cameraGameBgNode = null;
t.cameraGameNode = null;
t.cameraUINode = null;
t.cameraMainNode = null;
return t;
}
n = t;
t.prototype.onLoad = function() {
this._init();
this.listenOn();
};
t.prototype.onDestroy = function() {
this.listenOff();
};
t.prototype._onRoleMove = function() {};
t.prototype._init = function() {
n.CameraGameBg = this.cameraGameBgNode.getComponent(cc.Camera);
n.CameraGame = this.cameraGameNode.getComponent(cc.Camera);
n.CameraUI = this.cameraUINode.getComponent(cc.Camera);
n.CameraMain = this.cameraMainNode.getComponent(cc.Camera);
var e = new cc.RenderTexture();
e.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc.gfx.RB_FMT_S8);
n.CameraGame.targetTexture = e;
n.TextureGame = e;
};
t.prototype.listenOn = function() {
a.DaZhen_NZBTG_EventUtil.Off(r.EventType.RoleMove, this._onRoleMove, this);
};
t.prototype.listenOff = function() {
a.DaZhen_NZBTG_EventUtil.Off(r.EventType.RoleMove, this._onRoleMove, this);
};
var n;
y([ l(cc.Node) ], t.prototype, "cameraGameBgNode", void 0);
y([ l(cc.Node) ], t.prototype, "cameraGameNode", void 0);
y([ l(cc.Node) ], t.prototype, "cameraUINode", void 0);
y([ l(cc.Node) ], t.prototype, "cameraMainNode", void 0);
return n = y([ s ], t);
}(cc.Component);
n.default = c;
cc._RF.pop();
}, {
"../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"./DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig"
} ],
DaZhen_NZBTG_Config: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "09c3ag29JBMXqIPNUtZQNAc", "DaZhen_NZBTG_Config");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.BundleName = n.Group = void 0;
(function(e) {
e.default = "default";
e.UI = "UI";
e.Game = "Game";
e.Role = "Role";
})(n.Group || (n.Group = {}));
(function(e) {
e.LevelEdit = "LevelEdit";
e.Audio = "Audio";
e.Texture = "Texture";
e.Prefab = "Prefab";
})(n.BundleName || (n.BundleName = {}));
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_Constant: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "1af84Ri7n9DXJISZh8lSaOo", "DaZhen_NZBTG_Constant");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_Constant = void 0;
var o = function() {
function e() {}
e.GameName = "DaZhen_NZBTG";
e.IsOpenEnergy = !1;
return e;
}();
n.DaZhen_NZBTG_Constant = o;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_ControlTarget: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3d148/y3fJOB7+rIOTx/4fY", "DaZhen_NZBTG_ControlTarget");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../DaZhen_NZBTG_GameConfig"), r = e("../../Utils/DaZhen_NZBTG_EventUtil"), x = cc._decorator, s = x.ccclass, l = x.property, c = x.menu, _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.targetPos = cc.v2();
t.speed = 200;
return t;
}
t.prototype.onLoad = function() {
this._init();
r.DaZhen_NZBTG_EventUtil.On(a.EventType.ControlTarget, this._onControlTarget, this);
};
t.prototype.onDestroy = function() {
r.DaZhen_NZBTG_EventUtil.Off(a.EventType.ControlTarget, this._onControlTarget, this);
};
t.prototype._onControlTarget = function(e, t) {
if (e == this.node && this._isOpen != t) {
this._isOpen = t;
cc.Tween.stopAllByTarget(this.node);
var n = this.node.getPosition(), o = t ? this.targetPos : this._originPos, i = o.sub(n).mag() / this.speed;
i < .1 || cc.tween(this.node).to(i, {
position: cc.v3(o)
}).start();
}
};
t.prototype._init = function() {
this._originPos = this.node.getPosition();
};
y([ l({
tooltip: "控制器打开 后移动到固定位置"
}) ], t.prototype, "targetPos", void 0);
y([ l({
tooltip: "移动速度 /s",
min: 1
}) ], t.prototype, "speed", void 0);
return y([ s, c("Game/Item/DaZhen_NZBTG_ControlTarget") ], t);
}(cc.Component);
n.default = _;
cc._RF.pop();
}, {
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig"
} ],
DaZhen_NZBTG_ControllerUD: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7f12aCE2G1DVqi1jEwhYncM", "DaZhen_NZBTG_ControllerUD");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../DaZhen_NZBTG_GameConfig"), r = e("../../Utils/DaZhen_NZBTG_EventUtil"), x = cc._decorator, s = x.ccclass, l = x.property, c = x.menu, _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.target = null;
return t;
}
t.prototype.onLoad = function() {
this._init();
r.DaZhen_NZBTG_EventUtil.On(a.EventType.ControllerUD, this._onControllerUD, this);
};
t.prototype.onDestroy = function() {
r.DaZhen_NZBTG_EventUtil.Off(a.EventType.ControllerUD, this._onControllerUD, this);
};
t.prototype.onBeginContact = function(e, t, n) {
t.node;
n.node.name == a.ItemNameG.FloorCut && 0 == t.tag && r.DaZhen_NZBTG_EventUtil.Emit(a.EventType.ControllerUD, this.node, !0);
};
t.prototype._onControllerUD = function(e, t) {
if (e == this.node && this._isOpen != t) {
this._isOpen = t;
cc.Tween.stopAllByTarget(this._topNode);
var n = t ? 25 : 38;
cc.tween(this._topNode).to(.1, {
height: n
}).start();
r.DaZhen_NZBTG_EventUtil.Emit(a.EventType.ControlTarget, this.target, t);
}
};
t.prototype._init = function() {
this._topNode = cc.find("Top", this.node);
if (!this.target) {
console.log("PickKey--不存在对应的控制目标");
this.node.destroy();
}
};
y([ l({
type: cc.Node,
tooltip: "被控制的目标"
}) ], t.prototype, "target", void 0);
return y([ s, c("Game/Item/DaZhen_NZBTG_ControllerUD") ], t);
}(cc.Component);
n.default = _;
cc._RF.pop();
}, {
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig"
} ],
DaZhen_NZBTG_CoordinateUtil: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8f498MZaHlNa5CdjVmSO9aL", "DaZhen_NZBTG_CoordinateUtil");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_CoordinateUtil = void 0;
var o = function() {
function e() {}
Object.defineProperty(e, "WorldMid", {
get: function() {
e._WorldMid || (e._WorldMid = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2));
return e._WorldMid;
},
enumerable: !1,
configurable: !0
});
e.LocalToWorld = function(e, t) {
var n = cc.v2();
e.convertToWorldSpaceAR(t, n);
return n;
};
e.NodeToWorld = function(t) {
return e.LocalToWorld(t, cc.v2());
};
e.NodeToNode = function(t, n) {
return n.convertToNodeSpaceAR(e.NodeToWorld(t));
};
e.NodeSubNode = function(t, n, o) {
void 0 === o && (o = !1);
var i = cc.v2(), y = e.NodeToWorld(t), a = e.NodeToWorld(n);
y.sub(a, i);
o && i.normalizeSelf();
return i;
};
e.WorldToLocal = function(e, t) {
var n = cc.v2();
t.convertToNodeSpaceAR(e, n);
return n;
};
e.ScreenToWorld = function(e, t) {
var n = cc.v2();
t.getScreenToWorldPoint(e, n);
return n;
};
e.WorldToScreen = function(e, t) {
var n = cc.v2();
t.getWorldToScreenPoint(e, n);
return n;
};
e.NodeToScreen = function(t, n) {
var o = e.NodeToWorld(t);
return e.WorldToScreen(o, n);
};
e.IsInScreen = function(t, n) {
var o = e.NodeToWorld(n.node);
return t.getBoundingBoxToWorld().intersects(new cc.Rect(o.x - cc.winSize.width / 2 - 150, o.y - cc.winSize.height / 2 - 100, cc.winSize.width + 300, cc.winSize.height + 200));
};
return e;
}();
n.DaZhen_NZBTG_CoordinateUtil = o;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_CountUtil: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "383c17QQZ1HgoV/lZZ8GGcY", "DaZhen_NZBTG_CountUtil");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_CountUtil = void 0;
var o = function() {
function e() {}
e.AddCount = function(e, t) {
var n = !1;
if (e) {
e.count++;
if ((t || 0 == t) && e.count >= t) {
e.count = 0;
n = !0;
}
}
return n;
};
e.AddTime = function(e, t, n) {
var o = !1;
if (e) {
e.time += t;
if (e.time >= n) {
e.time = 0;
o = !0;
}
}
return o;
};
return e;
}();
n.DaZhen_NZBTG_CountUtil = o;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_DataConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e1069OF9alKcaNG1mC3s2+Z", "DaZhen_NZBTG_DataConfig");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_DataConfig = n.DailyKey = n.LastingKey = void 0;
var o = e("../Config/DaZhen_NZBTG_Constant"), i = o.DaZhen_NZBTG_Constant.GameName + "_", y = o.DaZhen_NZBTG_Constant.GameName + "_Daily_", a = function() {
function e() {}
e.RecordTime = i + "RecordTime";
e.Coin = i + "Coin";
e.Energy = i + "Energy";
e.EnergyTime = i + "EnergyTime";
e.Heart = i + "Heart";
e.LimitlessRecord = i + "LimitlessRecord";
e.LimitlessShowType = i + "LimitlessShowType";
e.SkinAdCount = i + "SkinAdCount";
e.SkinUnlock = i + "SkinUnlock";
e.SkinEquip = i + "SkinEquip";
e.SignInConfig = i + "SignInConfig";
e.SignInTime = i + "SignInTime";
e.SignInTimes = i + "SignInTimes";
e.LotteryTimes = i + "LotteryTimes";
e.Level = i + "Level";
e.LevelData = i + "LevelData";
e.LevelPageAd = i + "LevelPageAd";
e.IsOpenMusic = i + "IsOpenMusic";
e.IsOpenEffect = i + "IsOpenEffect";
e.IsOpenVibrate = i + "IsOpenVibrate";
e.IsOldUser = i + "IsOldUser";
return e;
}();
n.LastingKey = a;
var r = function() {
function e() {}
e.RecordTime = y + "RecordTime";
e.Coin = y + "Coin";
e.EnergyAdCount = y + "EnergyAdCount";
e.IsShareEnergy = y + "IsShareEnergy";
return e;
}();
n.DailyKey = r;
var x = function() {
function e() {}
e.DefCoin = 0;
e.DefEnergy = 20;
e.EnergyMax = 20;
e.EnergyRecover = 600;
e.DefHeart = 3;
e.LimitlessRefresh = 1800;
e.DefLotteryTimes = 3;
e.DefLevel = 1;
e.DefMusic = !0;
e.DefEffect = !0;
e.DefVibrate = !0;
return e;
}();
n.DaZhen_NZBTG_DataConfig = x;
cc._RF.pop();
}, {
"../Config/DaZhen_NZBTG_Constant": "DaZhen_NZBTG_Constant"
} ],
DaZhen_NZBTG_DataStruct: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "1735aHkIpBEbq/8LIzHm5Xs", "DaZhen_NZBTG_DataStruct");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.LevelData = n.SkinInfo = n.StorageData = void 0;
var o = function() {
function e() {}
Object.defineProperty(e.prototype, "total", {
get: function() {
return this._total;
},
set: function(e) {
this._total = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "daily", {
get: function() {
return this._daily;
},
set: function(e) {
this._daily = e;
},
enumerable: !1,
configurable: !0
});
return e;
}();
n.StorageData = o;
n.SkinInfo = function() {};
n.LevelData = function(e) {
this.level = e;
this.starNum = 0;
this.isPass = !1;
};
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_Data: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "cec2bryOYFCnbv/VLr71wpp", "DaZhen_NZBTG_Data");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.TempData = n.DailyData = n.LastingData = void 0;
var o = e("../GUI/DaZhen_NZBTG_GUIConfig"), i = e("../Structs/DaZhen_NZBTG_Struct"), y = e("../Utils/DaZhen_NZBTG_DateUtil"), a = e("../Utils/DaZhen_NZBTG_EventUtil"), r = e("../Utils/DaZhen_NZBTG_MathUtil"), x = e("../Utils/DaZhen_NZBTG_StorageUtil"), s = e("./DaZhen_NZBTG_DataConfig"), l = e("./DaZhen_NZBTG_AssetsNS"), c = new i.Timer(function() {
var e, t, n = Date.now();
if (u.LimitlessShowType) {
t = u.LimitlessRecord;
n = Date.now();
e = y.DaZhen_NZBTG_DateUtil.BetweenSecond(n, t);
a.DaZhen_NZBTG_EventUtil.Emit(o.GUIEvent.LimitlessCd, r.DaZhen_NZBTG_MathUtil.ReverseMod(e, s.DaZhen_NZBTG_DataConfig.LimitlessRefresh));
e >= s.DaZhen_NZBTG_DataConfig.LimitlessRefresh && l.default.ins.clearLimitlessShowType();
}
h.Init();
}), _ = function() {
function e() {}
Object.defineProperty(e, "RecordTime", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.LastingKey.RecordTime, 0);
},
set: function(e) {
u.RecordTime = e;
x.DaZhen_NZBTG_StorageUtil.SetItem(s.LastingKey.RecordTime, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "Coin", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.LastingKey.Coin, s.DaZhen_NZBTG_DataConfig.DefCoin);
},
set: function(e) {
x.DaZhen_NZBTG_StorageUtil.SetItem(s.LastingKey.Coin, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "Energy", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.LastingKey.Energy, s.DaZhen_NZBTG_DataConfig.DefEnergy);
},
set: function(t) {
e.Energy >= s.DaZhen_NZBTG_DataConfig.EnergyMax && t < s.DaZhen_NZBTG_DataConfig.EnergyMax && (e.RecordTime = Date.now());
u.Energy = t;
x.DaZhen_NZBTG_StorageUtil.SetItem(s.LastingKey.Energy, t);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "EnergyTime", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.LastingKey.EnergyTime, 0);
},
set: function(e) {
x.DaZhen_NZBTG_StorageUtil.SetItem(s.LastingKey.EnergyTime, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "Heart", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.LastingKey.Heart, s.DaZhen_NZBTG_DataConfig.DefHeart);
},
set: function(e) {
x.DaZhen_NZBTG_StorageUtil.SetItem(s.LastingKey.Heart, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "LimitlessRecord", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.LastingKey.LimitlessRecord, 0);
},
set: function(e) {
u.LimitlessRecord = e;
x.DaZhen_NZBTG_StorageUtil.SetItem(s.LastingKey.LimitlessRecord, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "LimitlessShowType", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.LastingKey.LimitlessShowType, null);
},
set: function(e) {
u.LimitlessShowType = e;
x.DaZhen_NZBTG_StorageUtil.SetItem(s.LastingKey.LimitlessShowType, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "SkinAdCount", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.LastingKey.SkinAdCount, {});
},
set: function(e) {
x.DaZhen_NZBTG_StorageUtil.SetItem(s.LastingKey.SkinAdCount, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "SkinUnlock", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.LastingKey.SkinUnlock, []);
},
set: function(e) {
x.DaZhen_NZBTG_StorageUtil.SetItem(s.LastingKey.SkinUnlock, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "SkinEquip", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.LastingKey.SkinEquip, null);
},
set: function(e) {
x.DaZhen_NZBTG_StorageUtil.SetItem(s.LastingKey.SkinEquip, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "SignInConfig", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.LastingKey.SignInConfig, null);
},
set: function(e) {
x.DaZhen_NZBTG_StorageUtil.SetItem(s.LastingKey.SignInConfig, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "SignInTime", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.LastingKey.SignInTime, 0);
},
set: function(e) {
x.DaZhen_NZBTG_StorageUtil.SetItem(s.LastingKey.SignInTime, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "SignInTimes", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.LastingKey.SignInTimes, 0);
},
set: function(e) {
x.DaZhen_NZBTG_StorageUtil.SetItem(s.LastingKey.SignInTimes, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "LotteryTimes", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.LastingKey.LotteryTimes, s.DaZhen_NZBTG_DataConfig.DefLotteryTimes);
},
set: function(e) {
x.DaZhen_NZBTG_StorageUtil.SetItem(s.LastingKey.LotteryTimes, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "Level", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.LastingKey.Level, s.DaZhen_NZBTG_DataConfig.DefLevel);
},
set: function(e) {
x.DaZhen_NZBTG_StorageUtil.SetItem(s.LastingKey.Level, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "LevelData", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.LastingKey.LevelData, []);
},
set: function(e) {
x.DaZhen_NZBTG_StorageUtil.SetItem(s.LastingKey.LevelData, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "IsOpenMusic", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.LastingKey.IsOpenMusic, s.DaZhen_NZBTG_DataConfig.DefMusic);
},
set: function(e) {
x.DaZhen_NZBTG_StorageUtil.SetItem(s.LastingKey.IsOpenMusic, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "IsOpenEffect", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.LastingKey.IsOpenEffect, s.DaZhen_NZBTG_DataConfig.DefEffect);
},
set: function(e) {
x.DaZhen_NZBTG_StorageUtil.SetItem(s.LastingKey.IsOpenEffect, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "IsOpenVibrate", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.LastingKey.IsOpenVibrate, s.DaZhen_NZBTG_DataConfig.DefVibrate);
},
set: function(e) {
x.DaZhen_NZBTG_StorageUtil.SetItem(s.LastingKey.IsOpenVibrate, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "IsOldUser", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.LastingKey.IsOldUser, !1);
},
set: function(e) {
x.DaZhen_NZBTG_StorageUtil.SetItem(s.LastingKey.IsOldUser, e);
},
enumerable: !1,
configurable: !0
});
e.Init = function() {
u.RecordTime = e.RecordTime;
u.LimitlessRecord = e.LimitlessRecord;
u.LimitlessShowType = e.LimitlessShowType;
u.Energy = e.Energy;
c.onOff(!0);
};
return e;
}();
n.LastingData = _;
var h = function() {
function e() {}
Object.defineProperty(e, "RecordTime", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.DailyKey.RecordTime, 0);
},
set: function(e) {
x.DaZhen_NZBTG_StorageUtil.SetItem(s.DailyKey.RecordTime, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "Coin", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.DailyKey.Coin, 0);
},
set: function(e) {
x.DaZhen_NZBTG_StorageUtil.SetItem(s.DailyKey.Coin, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "EnergyAdCount", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.DailyKey.EnergyAdCount, 0);
},
set: function(e) {
x.DaZhen_NZBTG_StorageUtil.SetItem(s.DailyKey.EnergyAdCount, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "IsShareEnergy", {
get: function() {
return x.DaZhen_NZBTG_StorageUtil.GetItem(s.DailyKey.IsShareEnergy, !1);
},
set: function(e) {
x.DaZhen_NZBTG_StorageUtil.SetItem(s.DailyKey.IsShareEnergy, e);
},
enumerable: !1,
configurable: !0
});
e.Init = function() {
var t = e.RecordTime, n = Date.now(), o = !y.DaZhen_NZBTG_DateUtil.IsSameDay(t, n);
if (o) {
console.warn("清除昨日数据");
e.RecordTime = n;
e.Coin = 0;
e.EnergyAdCount = 0;
e.IsShareEnergy = !1;
l.default.ins.initDaily(!0);
}
u.IsNewDay = o;
};
return e;
}();
n.DailyData = h;
var u = function() {
function e() {}
e.IsNewDay = !1;
e.IsGameToMenu = !1;
e.RecordTime = 0;
e.LimitlessRecord = 0;
e.LimitlessShowType = null;
e.Energy = 0;
return e;
}();
n.TempData = u;
cc._RF.pop();
}, {
"../GUI/DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig",
"../Structs/DaZhen_NZBTG_Struct": "DaZhen_NZBTG_Struct",
"../Utils/DaZhen_NZBTG_DateUtil": "DaZhen_NZBTG_DateUtil",
"../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../Utils/DaZhen_NZBTG_MathUtil": "DaZhen_NZBTG_MathUtil",
"../Utils/DaZhen_NZBTG_StorageUtil": "DaZhen_NZBTG_StorageUtil",
"./DaZhen_NZBTG_AssetsNS": "DaZhen_NZBTG_AssetsNS",
"./DaZhen_NZBTG_DataConfig": "DaZhen_NZBTG_DataConfig"
} ],
DaZhen_NZBTG_DateUtil: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d8bcauSmPBI9LzwW+pdyuUB", "DaZhen_NZBTG_DateUtil");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_DateUtil = void 0;
var o = e("./DaZhen_NZBTG_StringUtil"), i = function() {
function e() {}
e.IsSameDay = function(e, t) {
return new Date(e).setHours(0, 0, 0, 0) === new Date(t).setHours(0, 0, 0, 0);
};
e.IsSameHour = function(e, t) {
var n = new Date(e), o = new Date(t);
return n.setHours(n.getHours(), 0, 0, 0) === o.setHours(o.getHours(), 0, 0, 0);
};
e.IsToday = function(t) {
return e.IsSameDay(Date.now(), t);
};
e.BetweenDay = function(e, t) {
var n = new Date(e).setHours(0, 0, 0, 0), o = new Date(t).setHours(0, 0, 0, 0);
return Math.abs((n - o) / 1e3 / 3600 / 24);
};
e.BetweenHour = function(e, t) {
return Math.floor(Math.abs((e - t) / 1e3 / 3600));
};
e.BetweenSecond = function(e, t) {
return Math.floor(Math.abs((e - t) / 1e3));
};
e.FormatMD = function(e) {
var t = new Date(e);
return t.getMonth() + 1 + "月" + t.getDate() + "日";
};
e.FormatYMD = function(e) {
var t = new Date(e);
return t.getFullYear() + "." + (t.getMonth() + 1) + "." + t.getDate();
};
e.FormatHMS = function(e) {
var t = Math.floor(e / 60 / 60), n = Math.floor(e / 60) % 60, i = e % 60;
return o.DaZhen_NZBTG_StringUtil.FillTwoZero(t) + ":" + o.DaZhen_NZBTG_StringUtil.FillTwoZero(n) + ":" + o.DaZhen_NZBTG_StringUtil.FillTwoZero(i);
};
e.FormatMS = function(e) {
var t = Math.floor(e / 60), n = e % 60;
return o.DaZhen_NZBTG_StringUtil.FillTwoZero(t) + ":" + o.DaZhen_NZBTG_StringUtil.FillTwoZero(n);
};
return e;
}();
n.DaZhen_NZBTG_DateUtil = i;
cc._RF.pop();
}, {
"./DaZhen_NZBTG_StringUtil": "DaZhen_NZBTG_StringUtil"
} ],
DaZhen_NZBTG_Debug: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "cfc28JKH4JEK41uLds8CR+r", "DaZhen_NZBTG_Debug");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../Game/DaZhen_NZBTG_GameConfig"), r = e("../Sdk/DaZhen_NZBTG_SdkConfig"), x = cc._decorator, s = x.ccclass, l = x.property, c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.isDebugDraw = !1;
t.isQuicklyFinish = !1;
t.gameResult = a.GameResult.Fail;
t.failState = a.FailState.Timeout;
t.isLimitlessCoin = !1;
t.isLimitlessEnergy = !1;
t.isLimitlessHeart = !1;
t.showLimitlessType = !1;
t.isUnlockAllSkin = !1;
t.isNoAd = !1;
t.isDebugPlatform = !1;
t.platform = r.Pf.standard;
return t;
}
n = t;
t.GetIns = function() {
return n._Ins;
};
t.prototype.onLoad = function() {
n._Ins = this;
};
var n;
y([ l({
tooltip: "物理调试信息"
}) ], t.prototype, "isDebugDraw", void 0);
y([ l({
tooltip: "快速结束关卡"
}) ], t.prototype, "isQuicklyFinish", void 0);
y([ l({
tooltip: "关卡结束结果",
type: cc.Enum(a.GameResult),
visible: function() {
return this.isQuicklyFinish;
}
}) ], t.prototype, "gameResult", void 0);
y([ l({
tooltip: "失败状态",
type: cc.Enum(a.FailState),
visible: function() {
return this.isQuicklyFinish && this.gameResult == a.GameResult.Fail;
}
}) ], t.prototype, "failState", void 0);
y([ l({
tooltip: "无限金币"
}) ], t.prototype, "isLimitlessCoin", void 0);
y([ l({
tooltip: "无限体力"
}) ], t.prototype, "isLimitlessEnergy", void 0);
y([ l({
tooltip: "无限爱心"
}) ], t.prototype, "isLimitlessHeart", void 0);
y([ l({
tooltip: "展示 无限类型"
}) ], t.prototype, "showLimitlessType", void 0);
y([ l({
tooltip: "解锁所有皮肤"
}) ], t.prototype, "isUnlockAllSkin", void 0);
y([ l({
tooltip: "无广告"
}) ], t.prototype, "isNoAd", void 0);
y([ l({
tooltip: "调试平台"
}) ], t.prototype, "isDebugPlatform", void 0);
y([ l({
tooltip: "选择平台",
type: cc.Enum(r.Pf),
visible: function() {
return this.isDebugPlatform;
}
}) ], t.prototype, "platform", void 0);
return n = y([ s ], t);
}(cc.Component);
n.default = c;
cc._RF.pop();
}, {
"../Game/DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig",
"../Sdk/DaZhen_NZBTG_SdkConfig": "DaZhen_NZBTG_SdkConfig"
} ],
DaZhen_NZBTG_DoorLock: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9c408cav9BAKI2+gZryZ2+7", "DaZhen_NZBTG_DoorLock");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Utils/DaZhen_NZBTG_EventUtil"), r = e("../DaZhen_NZBTG_GameConfig"), x = cc._decorator, s = x.ccclass, l = (x.property, 
x.menu), c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
this._init();
a.DaZhen_NZBTG_EventUtil.On(r.EventType.DoorLock, this._onDoorLock, this);
};
t.prototype.onDestroy = function() {
a.DaZhen_NZBTG_EventUtil.Off(r.EventType.DoorLock, this._onDoorLock, this);
};
t.prototype._onDoorLock = function(e) {
if (e == this.node && !this._isWork) {
this._isWork = !0;
this._doHide();
}
};
t.prototype._init = function() {
this._isWork = !1;
};
t.prototype._doHide = function() {
var e = this, t = this.node.getChildByName("Sprite").getComponent(cc.Sprite);
cc.tween(t).to(.5, {
fillRange: 0
}).call(function() {
e.node.destroy();
}).start();
};
return y([ s, l("Game/Item/DaZhen_NZBTG_DoorLock") ], t);
}(cc.Component);
n.default = c;
cc._RF.pop();
}, {
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig"
} ],
DaZhen_NZBTG_EPlatformMulti: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "18c50juMGBCH4ajIloOaqiI", "DaZhen_NZBTG_EPlatformMulti");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../DaZhen_NZBTG_Sdk"), r = cc._decorator, x = r.ccclass, s = r.property, l = r.menu, c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._platformList = [];
return t;
}
t.prototype.onLoad = function() {
var e = this._platformList;
this.node.active = a.default.IsPfNs.apply(a.default, e);
};
y([ s({
type: cc.String,
visible: !0
}) ], t.prototype, "_platformList", void 0);
return y([ x, l("Sdk/DaZhen_NZBTG_EPlatformMulti") ], t);
}(cc.Component);
n.default = c;
cc._RF.pop();
}, {
"../DaZhen_NZBTG_Sdk": "DaZhen_NZBTG_Sdk"
} ],
DaZhen_NZBTG_EPlatform: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "2b5fa5wztNP05QP7GodVrvX", "DaZhen_NZBTG_EPlatform");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../DaZhen_NZBTG_Sdk"), r = e("../../Utils/DaZhen_NZBTG_CoordinateUtil"), x = cc._decorator, s = x.ccclass, l = x.property, c = x.menu, _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._syncSize = !1;
t._syncPos = !1;
t._nodesBind = [];
return t;
}
t.prototype.onLoad = function() {
this.node.children.forEach(function(e) {
e.active = !1;
});
var e = this.getSelect();
if (e) {
e.active = !0;
this._syncSize && this.node.setContentSize(e.scale * e.width, e.scaleY * e.height);
if (this._syncPos) {
var t = r.DaZhen_NZBTG_CoordinateUtil.NodeToNode(e, this.node.parent);
e.setPosition(cc.v2(0, 0));
this.node.setPosition(t);
}
}
};
t.prototype.getSelect = function() {
var e = a.default.GetPfN(), t = this.node.getChildByName(e);
t || (t = this.node.getChildByName("standard"));
return t;
};
t.prototype.getNodesBind = function() {
return this._nodesBind;
};
y([ l({
visible: !0,
tooltip: "需要同步大小"
}) ], t.prototype, "_syncSize", void 0);
y([ l({
visible: !0,
tooltip: "需要同步位置"
}) ], t.prototype, "_syncPos", void 0);
y([ l({
tooltip: "绑定的节点--",
type: cc.Node,
visible: !0
}) ], t.prototype, "_nodesBind", void 0);
return y([ s, c("Sdk/DaZhen_NZBTG_EPlatform") ], t);
}(cc.Component);
n.default = _;
cc._RF.pop();
}, {
"../../Utils/DaZhen_NZBTG_CoordinateUtil": "DaZhen_NZBTG_CoordinateUtil",
"../DaZhen_NZBTG_Sdk": "DaZhen_NZBTG_Sdk"
} ],
DaZhen_NZBTG_Edit: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "bfa39FR6LtJYY40tXgNBj1m", "DaZhen_NZBTG_Edit");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
e("../Config/DaZhen_NZBTG_Config"), e("../Config/DaZhen_NZBTG_Constant");
var a = cc._decorator, r = a.ccclass, x = a.property, s = a.executeInEditMode, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.isPreview = !1;
t.previewLevel = 0;
t.isSaveConfig = !1;
t.isSaveOnce = !1;
t.saveRange = cc.Vec2.ZERO;
return t;
}
n = t;
t.GetIns = function() {
return n._Ins;
};
t.prototype.onLoad = function() {
n._Ins = this;
};
t.prototype.setIsSaveOnce = function() {
this.isSaveOnce = !1;
};
t.prototype.getRouter = function(e) {
var t = "";
t = "Normal/Level";
e && (t += e);
return t;
};
t.prototype.getSaveName = function() {
return "LevelNormalConfig";
};
var n;
y([ x({
tooltip: "需要直接预览关卡"
}) ], t.prototype, "isPreview", void 0);
y([ x({
type: cc.Integer,
tooltip: "直接预览的关卡id"
}) ], t.prototype, "previewLevel", void 0);
y([ x({
tooltip: "需要保存关卡"
}) ], t.prototype, "isSaveConfig", void 0);
y([ x({
tooltip: "需要保存一次"
}) ], t.prototype, "isSaveOnce", void 0);
y([ x({
tooltip: "需要保存关卡范围"
}) ], t.prototype, "saveRange", void 0);
return n = y([ r, s ], t);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"../Config/DaZhen_NZBTG_Config": "DaZhen_NZBTG_Config",
"../Config/DaZhen_NZBTG_Constant": "DaZhen_NZBTG_Constant"
} ],
DaZhen_NZBTG_EffWin: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0289ajQ1NVPlrUsml2c1xcL", "DaZhen_NZBTG_EffWin");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../Core/Base/DaZhen_NZBTG_BaseUI"), r = cc._decorator, x = r.ccclass, s = (r.property, 
r.menu), l = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.init = function(e) {
this._callback = e;
};
t.prototype.show = function() {
this._doShow();
};
t.prototype._doShow = function() {
var e = this, t = cc.find("Par0", this.node).getComponent(cc.ParticleSystem), n = cc.find("Par1", this.node).getComponent(cc.ParticleSystem);
cc.tween(this.node).call(function() {
t.resetSystem();
}).delay(.5).call(function() {
n.resetSystem();
}).delay(.1).call(function() {
t.resetSystem();
}).delay(3).call(function() {
e._callback && e._callback();
e.node.destroy();
}).start();
};
return y([ x, s("GUI/Eff/DaZhen_NZBTG_EffWin") ], t);
}(a.default);
n.default = l;
cc._RF.pop();
}, {
"../Core/Base/DaZhen_NZBTG_BaseUI": "DaZhen_NZBTG_BaseUI"
} ],
DaZhen_NZBTG_EventUtil: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d50f1Hd20RBnJ7jnvIPrtjP", "DaZhen_NZBTG_EventUtil");
var o = this && this.__spreadArrays || function() {
for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
var o = Array(e), i = 0;
for (t = 0; t < n; t++) for (var y = arguments[t], a = 0, r = y.length; a < r; a++, 
i++) o[i] = y[a];
return o;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_EventUtil = void 0;
var i = function() {
function e() {}
e.On = function(e, t, n, o) {
this._map.has(e) || this._map.set(e, new Map());
var i = this._map.get(e);
i.has(t) || i.set(t, []);
var y = i.get(t);
y.includes(n) || y.push(n);
o && t.call(n);
};
e.Off = function(e, t, n) {
if (this._map.has(e)) {
var o = this._map.get(e);
if (o.has(t)) {
var i = o.get(t), y = i.indexOf(n);
-1 != y && i.splice(y, 1);
}
}
};
e.Emit = function(e) {
for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
if (this._map.has(e)) {
var i = this._map.get(e);
i.forEach(function(e, n) {
e.forEach(function(e) {
n.call.apply(n, o([ e ], t));
});
});
}
};
e.ClearByEvent = function(e) {
this._map.has(e) && this._map.delete(e);
};
e.ClearByCallback = function(e) {
this._map.forEach(function(t) {
t.has(e) && t.delete(e);
});
};
e.ClearByContext = function(e) {
this._map.forEach(function(t) {
t.forEach(function(t) {
var n = t.indexOf(e);
-1 != n && t.splice(n, 1);
});
});
};
e.ClearAll = function() {
this._map.clear();
};
e._map = new Map();
return e;
}();
n.DaZhen_NZBTG_EventUtil = i;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_FinishTarget: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "09c13rGZ89NobZiYKyzfRRC", "DaZhen_NZBTG_FinishTarget");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../DaZhen_NZBTG_GameConfig"), r = e("../../Utils/DaZhen_NZBTG_EventUtil"), x = e("../DaZhen_NZBTG_GameData"), s = e("../DaZhen_NZBTG_GameConst"), l = cc._decorator, c = l.ccclass, _ = (l.property, 
l.menu), h = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
this._init();
r.DaZhen_NZBTG_EventUtil.On(a.EventType.FinishTarget, this._onFinishTarget, this);
r.DaZhen_NZBTG_EventUtil.On(a.EventType.LevelFinish, this._onLevelFinish, this);
};
t.prototype.start = function() {};
t.prototype.onDestroy = function() {
r.DaZhen_NZBTG_EventUtil.Off(a.EventType.FinishTarget, this._onFinishTarget, this);
r.DaZhen_NZBTG_EventUtil.Off(a.EventType.LevelFinish, this._onLevelFinish, this);
};
t.prototype._onFinishTarget = function() {
if (!this._isWork) {
this._isWork = !0;
r.DaZhen_NZBTG_EventUtil.Emit(a.EventType.LevelFinish, a.GameResult.Win);
}
};
t.prototype._onLevelFinish = function(e) {
e == a.GameResult.Win && (this.node.active = !1);
};
t.prototype._init = function() {
this._isWork = !1;
var e = cc.winSize, t = s.DaZhen_NZBTG_GameConst.CaptureSize, n = this.node.getPosition();
n.x = cc.misc.clampf(n.x, -(e.width - t.width) / 2, (e.width - t.width) / 2);
n.y = cc.misc.clampf(n.y, -(e.height - t.height) / 2, (e.height - t.height) / 2);
x.DaZhen_NZBTG_GameData.CameraPos = n;
x.DaZhen_NZBTG_GameData.TargetPos = this.node.getPosition();
};
return y([ c, _("Game/Item/DaZhen_NZBTG_FinishTarget") ], t);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig",
"../DaZhen_NZBTG_GameConst": "DaZhen_NZBTG_GameConst",
"../DaZhen_NZBTG_GameData": "DaZhen_NZBTG_GameData"
} ],
DaZhen_NZBTG_FloorCut: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "2ccd60MSiBHzZSIfzokxdne", "DaZhen_NZBTG_FloorCut");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Main/DaZhen_NZBTG_Res"), r = e("../../Plugins/DaZhen_NZBTG_PolyBoolUtil"), x = e("../../Utils/DaZhen_NZBTG_CoordinateUtil"), s = e("../../Utils/DaZhen_NZBTG_EventUtil"), l = e("../DaZhen_NZBTG_GameConfig"), c = e("./DaZhen_NZBTG_Floor"), _ = cc._decorator, h = _.ccclass, u = (_.property, 
_.executeInEditMode), p = _.menu, f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._frameWidthSmall = 3.5;
t._frameWidthBig = 2;
t._frameColorSmall = "#7B3808";
return t;
}
n = t;
t.prototype.onLoad = function() {
e.prototype.onLoad.call(this);
this.listenOn();
};
t.prototype.onDestroy = function() {
this.listenOff();
};
t.prototype._onCut = function(e, t) {
var n = this;
if (0 != e.length && this._collider == e[0].collider) {
var o = t.map(function(e) {
return x.DaZhen_NZBTG_CoordinateUtil.WorldToLocal(e, n.node);
}), i = r.DaZhen_NZBTG_PolyBoolUtil.pathsToPolygon([ o ]), y = r.DaZhen_NZBTG_PolyBoolUtil.pathsToPolygon([ this.vertexes ]), a = PolyBool.difference(y, i), s = r.DaZhen_NZBTG_PolyBoolUtil.polygonToPaths(a), l = this._getPathSelf(s);
this._setCollider2(s, l);
}
};
t.prototype._getPathSelf = function(e) {
var t = [];
e.forEach(function(e) {
(0 == t.length || r.DaZhen_NZBTG_PolyBoolUtil.getTop(e) > r.DaZhen_NZBTG_PolyBoolUtil.getTop(t)) && (t = e);
});
return t;
};
t.prototype._setCollider2 = function(e, t) {
var n = this, o = this._collider;
this.vertexes = t;
this._init();
o.body;
var i = this.node.angle, y = this.node.getPosition();
e.forEach(function(e) {
e.length < 3 || e != t && n._copyFloor(e, y, i);
});
};
t.prototype._setBody = function() {
this._isCopy && (this._rigidBody.type = cc.RigidBodyType.Dynamic);
};
t.prototype._drawFrame = function() {
this._frameNode.destroyAllChildren();
var e = this.vertexes, t = this._createGraphics(this._frameColorSmall, this._frameWidthSmall);
this._drawGraphics(t, e, !0);
};
t.prototype._copyFloor = function(e, t, o) {
var i = a.default.GetCachePrefab("Game/Item/FloorCut"), y = this.node.parent, r = cc.instantiate(i);
r.getComponent(n).init(e);
r.position = cc.v3(t);
r.angle = o;
r.parent = y;
r.setSiblingIndex(this.node.getSiblingIndex());
};
t.prototype.listenOn = function() {
s.DaZhen_NZBTG_EventUtil.On(l.EventType.Cut, this._onCut, this);
};
t.prototype.listenOff = function() {
s.DaZhen_NZBTG_EventUtil.Off(l.EventType.Cut, this._onCut, this);
};
t.prototype.init = function(e) {
this._isCopy = !0;
this.vertexes = e;
};
var n;
return n = y([ h, u, p("Game/Item/DaZhen_NZBTG_FloorCut") ], t);
}(c.default);
n.default = f;
cc._RF.pop();
}, {
"../../Main/DaZhen_NZBTG_Res": "DaZhen_NZBTG_Res",
"../../Plugins/DaZhen_NZBTG_PolyBoolUtil": "DaZhen_NZBTG_PolyBoolUtil",
"../../Utils/DaZhen_NZBTG_CoordinateUtil": "DaZhen_NZBTG_CoordinateUtil",
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig",
"./DaZhen_NZBTG_Floor": "DaZhen_NZBTG_Floor"
} ],
DaZhen_NZBTG_Floor: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ac2ecJGhAVGmaUlPMDVAxhw", "DaZhen_NZBTG_Floor");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Config/DaZhen_NZBTG_Config"), r = e("../../Utils/DaZhen_NZBTG_MathUtil"), x = cc._decorator, s = x.ccclass, l = x.property, c = x.executeInEditMode, _ = x.menu, h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.vertexes = [];
t.trimThreshold = .05;
t._rigidBody = null;
t._mask = null;
t._frameNode = null;
t._spriteNode = null;
t._spriteX = cc.Vec2.ZERO;
t._spriteY = cc.Vec2.ZERO;
t._frameWidthSmall = 3;
t._frameWidthBig = 16;
t._frameColorSmall = "#085407";
t._frameColorBig = "#35EF31";
return t;
}
Object.defineProperty(t.prototype, "reset", {
get: function() {
return !1;
},
set: function() {
this._trim();
this._init();
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
this._init();
};
t.prototype._init = function() {
this._rigidBody = this.node.getComponent(cc.RigidBody);
this._collider = this.node.getComponent(cc.PhysicsPolygonCollider);
this._mask = cc.find("Mask", this.node).getComponent(cc.Mask);
this._frameNode = cc.find("Frame", this.node);
this._spriteNode = cc.find("Mask/Sprite", this.node);
this._setMask();
this._drawFrame();
this._setBody();
this._setCollider();
};
t.prototype._getMeshPoints = function() {
return this._collider.points;
};
t.prototype._getFramePoints = function() {
var e, t, n, o, i, y, a = this.vertexes, x = this._frameWidthBig / 2 - 1, s = [], l = [];
a.forEach(function(e, t) {
l[t] = [];
});
for (var c, _, h, u = a.length, p = 0; p < a.length; p++) {
t = p == u - 1 ? 0 : p + 1;
n = a[e = p];
i = (o = a[t]).sub(n).rotate(Math.PI / 2).normalizeSelf();
y = n.add(o).mulSelf(.5).add(i.mul(x));
if (cc.Intersection.pointInPolygon(y, a)) {
l[e].push(n.add(i.mul(x)));
l[e].push(o.add(i.mul(x)));
} else {
l[e].push(n.add(i.neg().mul(x)));
l[e].push(o.add(i.neg().mul(x)));
}
}
for (p = 0; p < l.length; p++) {
t = p == u - 1 ? 0 : p + 1;
c = l[e = p];
_ = l[t];
h = r.DaZhen_NZBTG_MathUtil.CrossPoint(c, _);
s[t] = h;
}
return s;
};
t.prototype._setSpriteXY = function() {
var e = this;
this.vertexes.forEach(function(t) {
r.DaZhen_NZBTG_MathUtil.CheckRange(e._spriteX, t.x);
r.DaZhen_NZBTG_MathUtil.CheckRange(e._spriteY, t.y);
});
};
t.prototype._setSpriteSize = function() {
this._spriteNode.width = r.DaZhen_NZBTG_MathUtil.CheckRange(this._spriteX);
this._spriteNode.height = r.DaZhen_NZBTG_MathUtil.CheckRange(this._spriteY);
this._spriteNode.x = (this._spriteX.x + this._spriteX.y) / 2;
this._spriteNode.y = (this._spriteY.x + this._spriteY.y) / 2;
};
t.prototype._setSprite = function() {};
t.prototype._setMask = function() {
var e = this, t = this.vertexes, n = this._mask._graphics;
this._mask._updateGraphics = function() {
n.clear(!1);
n.lineCap = cc.Graphics.LineCap.ROUND;
n.lineJoin = cc.Graphics.LineJoin.ROUND;
e._drawGraphics(n, t);
};
this._mask._updateGraphics();
};
t.prototype._setCollider = function() {
var e = this.vertexes, t = this._collider;
t.enabled = !0;
t.points = e;
t.apply();
};
t.prototype._setBody = function() {};
t.prototype._createGraphics = function(e, t) {
var n = new cc.Node("Frame"), o = n.addComponent(cc.Graphics);
n.parent = this._frameNode;
n.group = a.Group.Game;
o.clear(!1);
o.lineCap = cc.Graphics.LineCap.ROUND;
o.lineJoin = cc.Graphics.LineJoin.ROUND;
o.lineWidth = t;
o.strokeColor.fromHEX(e);
return o;
};
t.prototype._drawFrame = function() {
this._frameNode.destroyAllChildren();
var e = this._getFramePoints(), t = this.vertexes, n = this._createGraphics(this._frameColorBig, this._frameWidthBig), o = this._createGraphics(this._frameColorSmall, this._frameWidthSmall);
this._drawGraphics(n, e, !0);
this._drawGraphics(o, t, !0);
};
t.prototype._drawGraphics = function(e, t, n) {
for (var o, i = 0; i < t.length; i++) {
o = t[i];
0 != i ? e.lineTo(o.x, o.y) : e.moveTo(o.x, o.y);
}
e.close();
e.stroke();
n || e.fill();
};
t.prototype._trim = function() {
for (var e = this.vertexes, t = 0, n = 0, o = cc.v2(), i = cc.v2(), y = cc.v2(), a = this.trimThreshold, r = 0; r < e.length; r++) {
n = (t = r) == e.length - 1 ? 0 : t + 1;
o = e[t];
y = (i = e[n]).sub(o).normalize();
Math.abs(y.y) <= a ? i.y = o.y : Math.abs(y.x) <= a && (i.x = o.x);
}
};
y([ l({
type: cc.Vec2,
tooltip: "多边形顶点数组",
readonly: !0
}) ], t.prototype, "vertexes", void 0);
y([ l({
tooltip: "修剪阈值"
}) ], t.prototype, "trimThreshold", void 0);
y([ l({
tooltip: "修剪"
}) ], t.prototype, "reset", null);
return y([ s, c, _("Game/Item/DaZhen_NZBTG_Floor") ], t);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../../Config/DaZhen_NZBTG_Config": "DaZhen_NZBTG_Config",
"../../Utils/DaZhen_NZBTG_MathUtil": "DaZhen_NZBTG_MathUtil"
} ],
DaZhen_NZBTG_GUIConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e242eZ6QENCwbtKTyRgKdyH", "DaZhen_NZBTG_GUIConfig");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ShowHideUseCase = n.AssetType = n.UnlockType = n.GUIEvent = n.PanelPath = n.GUIPath = n.GUILayer = void 0;
(function(e) {
e.Panel = "Panel";
e.Popup = "Popup";
e.Asset = "Asset";
e.Toast = "Toast";
e.Waiting = "Waiting";
e.Animation = "Animation";
e.Effect = "Effect";
e.Transition = "Transition";
e.BlockInput = "BlockInput";
})(n.GUILayer || (n.GUILayer = {}));
(function(e) {
e.GUI = "GUI/UIBase/GUI";
e.Assets = "GUI/UIBase/Assets";
e.Toast = "GUI/UIBase/Toast";
e.Waiting = "GUI/UIBase/Waiting";
e.Transition = "GUI/UIBase/Transition";
e.BlockInput = "GUI/UIBase/BlockInput";
})(n.GUIPath || (n.GUIPath = {}));
(function(e) {
e.PanelMenu = "GUI/Panels/PanelMenu";
e.PanelSetting = "GUI/Panels/PanelSetting";
e.PanelAsset = "GUI/Panels/PanelAsset";
e.PanelEnergy = "GUI/Panels/PanelEnergy";
e.PanelEnergyLimitless = "GUI/Panels/PanelEnergyLimitless";
e.PanelSkin = "GUI/Panels/PanelSkin";
e.PanelSkinUnlock = "GUI/Panels/PanelSkinUnlock";
e.PanelSkinTry = "GUI/Panels/PanelSkinTry";
e.PanelMessage = "GUI/Panels/PanelMessage";
e.PanelLevelSelect = "GUI/Panels/PanelLevelSelect";
e.PanelLevelUnlock = "GUI/Panels/PanelLevelUnlock";
e.PanelLuPingShare = "GUI/Panels/PanelLuPingShare";
e.PanelFail = "GUI/Panels/PanelFail";
e.PanelFailTt = "GUI/Panels/PanelFailTt";
e.PanelWin = "GUI/Panels/PanelWin";
e.PanelWinTt = "GUI/Panels/PanelWinTt";
})(n.PanelPath || (n.PanelPath = {}));
(function(e) {
e.Loading = "Loading";
e.ShowPopup = "ShowPopup";
e.ClosePopup = "ClosePopup";
e.ShowAsset = "ShowAsset";
e.UpdateAsset = "UpdateAsset";
e.EnergyCd = "EnergyCd";
e.LimitlessAsset = "LimitlessAsset";
e.AddAsset = "AddAsset";
e.UseAsset = "UseAsset";
e.AdCountAsset = "AdCountAsset";
e.ShareAsset = "ShareAsset";
e.LimitlessCd = "LimitlessCd";
e.LimitlessShow = "LimitlessShow";
e.LevelUnlock = "UnlockLevel";
e.LevelPass = "LevelPass";
e.SkinAdCount = "SkinAdCount";
e.SkinUnlock = "SkinUnlock";
e.SkinEquip = "SkinEquip";
e.SkinTry = "SkinTry";
e.SkinLook = "SkinLook";
e.ShowHideNode = "ShowHideNode";
})(n.GUIEvent || (n.GUIEvent = {}));
(function(e) {
e[e.Coin = 1] = "Coin";
e[e.Ad = 2] = "Ad";
})(n.UnlockType || (n.UnlockType = {}));
(function(e) {
e.Coin = "Coin";
e.Energy = "Energy";
e.Heart = "Heart";
})(n.AssetType || (n.AssetType = {}));
(function(e) {
e[e.Menu = 0] = "Menu";
e[e.Game = 1] = "Game";
})(n.ShowHideUseCase || (n.ShowHideUseCase = {}));
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_GUIConst: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "efa35sFzGBJ6bhAb8JfCOnv", "DaZhen_NZBTG_GUIConst");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_GUIConst = void 0;
var o = function() {
function e() {}
e.LevelPageSize = 12;
e.EnergyConsume = 1;
e.LotteryTimesAd = 3;
e.DelayMenu = .2;
return e;
}();
n.DaZhen_NZBTG_GUIConst = o;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_GUIStruct: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f618aZeyHBDgZexKlmI3cl6", "DaZhen_NZBTG_GUIStruct");
Object.defineProperty(n, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_GUI: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "2dd9bFOcb5MyYwrxU3wGxNn", "DaZhen_NZBTG_GUI");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = e("./Core/Base/DaZhen_NZBTG_BaseToast"), i = e("../Utils/DaZhen_NZBTG_EventUtil"), y = e("./Core/Base/DaZhen_NZBTG_BaseWaiting"), a = e("../Structs/DaZhen_NZBTG_Queue"), r = e("../Structs/DaZhen_NZBTG_Stack"), x = e("./DaZhen_NZBTG_GUIConfig"), s = e("./Core/Base/DaZhen_NZBTG_BaseBlockInput"), l = e("./Assets/DaZhen_NZBTG_Assets"), c = e("./Core/Base/DaZhen_NZBTG_BaseTransition"), _ = e("../Main/DaZhen_NZBTG_Res"), h = function() {
function e() {}
e.Init = function(t) {
e._ZIndex = 100;
e._LayerMap = new Map();
e._PopupParamsQueue = new a.DaZhen_NZBTG_Queue();
e._PopupStack = new r.DaZhen_NZBTG_Stack();
i.DaZhen_NZBTG_EventUtil.On(x.GUIEvent.ShowPopup, e._OnShowPopup);
i.DaZhen_NZBTG_EventUtil.On(x.GUIEvent.ClosePopup, e._OnClosePopup);
_.default.LoadPrefab(x.GUIPath.GUI, function(n) {
var o = cc.instantiate(n), i = o.getChildByName("Layers");
o.parent = cc.find("Canvas/RootGUI");
for (var y in x.GUILayer) {
var a = i.getChildByName(y);
e._LayerMap.set(y, a);
}
e._Root = o;
Promise.all([ e._ShowUIPromise(x.GUIPath.BlockInput, x.GUILayer.BlockInput, s.default, !0), e._ShowUIPromise(x.GUIPath.Transition, x.GUILayer.Transition, c.default, !0), e._ShowUIPromise(x.GUIPath.Assets, x.GUILayer.Asset, l.default, !0) ]).then(function() {
console.log("GUI初始化完毕");
setTimeout(t, 500);
});
});
};
e.ShowUI = function(t, n, o, i, y) {
_.default.LoadPrefab(t, function(a) {
var r, x = t.split("/").pop(), s = e.GetLayer(n);
i && (r = s.getChildByName(x));
r || (r = cc.instantiate(a));
var l = r.getComponent(o);
r.name = x;
r.parent = s;
r.zIndex = e._ZIndex++;
l.show();
y && y(l);
});
};
e.ShowPopup = function(t, n, o) {
var i = {
path: t,
UIClass: n,
callback: o
};
e._PopupParamsQueue.add(i);
e._ShowPopup();
};
e.ShowToast = function(t) {
e.ShowUI(x.GUIPath.Toast, x.GUILayer.Toast, o.default, !1, function(e) {
e.init(t);
});
};
e.ShowWaiting = function(t) {
e.ShowUI(x.GUIPath.Waiting, x.GUILayer.Waiting, y.default, !0, function(e) {
t && e.init(t);
});
};
e.ShowBlockInput = function(t) {
console.log("ShowBlockInput");
if (s.default.BBI) {
s.default.BBI.show();
t && t();
} else e.ShowUI(x.GUIPath.BlockInput, x.GUILayer.BlockInput, s.default, !0, function(e) {
s.default.BBI = e;
t && t();
});
};
e.ShowTransition = function(t, n, o) {
e.ShowUI(x.GUIPath.Transition, x.GUILayer.Transition, c.default, !0, function(e) {
e.init(t, n, o);
});
};
e.CloseBlockInput = function() {
console.log("CloseBlockInput");
s.default.BBI && s.default.BBI.close();
};
e.GetLayer = function(t) {
return e._LayerMap.get(t) || e._Root;
};
e.ExitOnePopup = function() {
i.DaZhen_NZBTG_EventUtil.Emit(x.GUIEvent.ClosePopup);
};
e.HasPopup = function() {
return !e._PopupStack.isEmpty;
};
e.IsTopPopup = function(t) {
return !e._PopupStack.isEmpty && e._PopupStack.top == t;
};
e.IsBottomPopup = function(t) {
return !e._PopupStack.isEmpty && e._PopupStack.bottom == t;
};
e.ClearAll = function() {
for (;!e._PopupStack.isEmpty; ) i.DaZhen_NZBTG_EventUtil.Emit(x.GUIEvent.ClosePopup);
};
e._ShowPopup = function() {
if (!e._PopupParamsQueue.isEmpty && !e._IsShowingPopup) {
var t = x.GUILayer.Popup, n = e._PopupParamsQueue.current;
e._IsShowingPopup = !0;
e.ShowBlockInput();
e.ShowUI(n.path, t, n.UIClass, !0, function(t) {
e._PopupParamsQueue.delete();
e._IsShowingPopup = !1;
n.callback && n.callback(t);
e.CloseBlockInput();
e._ShowPopup();
});
}
};
e._ShowUIPromise = function(t, n, o, i) {
return new Promise(function(y) {
e.ShowUI(t, n, o, i, function(e) {
y(e);
});
});
};
e._OnShowPopup = function(t) {
var n = !1;
if (!e._PopupStack.isEmpty) {
var o = e._PopupStack.top;
o.pausePanel();
n = o == t;
}
n || e._PopupStack.add(t);
e._PopupStack.top.showPanel();
};
e._OnClosePopup = function() {
e._PopupStack.isEmpty || e._PopupStack.delete().closePanel();
e._PopupStack.isEmpty || e._PopupStack.top.resumePanel();
};
e._Root = null;
e._ZIndex = null;
e._LayerMap = null;
e._PopupParamsQueue = null;
e._PopupStack = null;
return e;
}();
n.default = h;
cc._RF.pop();
}, {
"../Main/DaZhen_NZBTG_Res": "DaZhen_NZBTG_Res",
"../Structs/DaZhen_NZBTG_Queue": "DaZhen_NZBTG_Queue",
"../Structs/DaZhen_NZBTG_Stack": "DaZhen_NZBTG_Stack",
"../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"./Assets/DaZhen_NZBTG_Assets": "DaZhen_NZBTG_Assets",
"./Core/Base/DaZhen_NZBTG_BaseBlockInput": "DaZhen_NZBTG_BaseBlockInput",
"./Core/Base/DaZhen_NZBTG_BaseToast": "DaZhen_NZBTG_BaseToast",
"./Core/Base/DaZhen_NZBTG_BaseTransition": "DaZhen_NZBTG_BaseTransition",
"./Core/Base/DaZhen_NZBTG_BaseWaiting": "DaZhen_NZBTG_BaseWaiting",
"./DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig"
} ],
DaZhen_NZBTG_GameConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "bcd04yJAi5OSJfQQXNzAEJk", "DaZhen_NZBTG_GameConfig");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.GameEnter = n.RoleAni = n.RoleSMState = n.ItemNameG = n.GameResult = n.FailState = n.GameStatus = n.TouchMoveDir = n.EventType = void 0;
(function(e) {
e.LevelCreate = "LevelCreate";
e.LevelReady = "LevelReady";
e.LevelStart = "LevelStart";
e.LevelFinish = "LevelFinish";
e.LevelSettle = "LevelSettle";
e.LevelDestroy = "LevelDestroy";
e.Help = "Help";
e.Guide = "Guide";
e.Cut = "Cut";
e.RoleMove = "RoleMove";
e.RoleSpine = "RoleSpine";
e.FinishTarget = "FinishTarget";
e.TriggerMove = "TriggerMove";
e.PickKey = "PickKey";
e.DoorLock = "DoorLock";
e.ControlTarget = "ControlTarget";
e.ControllerUD = "ControllerUD";
e.ToolBounce = "ToolBounce";
e.ToolBounceRes = "ToolBounceRes";
})(n.EventType || (n.EventType = {}));
(function(e) {
e[e.Horizontal = 0] = "Horizontal";
e[e.Vertical = 1] = "Vertical";
})(n.TouchMoveDir || (n.TouchMoveDir = {}));
(function(e) {
e[e.Ready = 1] = "Ready";
e[e.Running = 2] = "Running";
e[e.Pause = 3] = "Pause";
e[e.Finish = 4] = "Finish";
})(n.GameStatus || (n.GameStatus = {}));
(function(e) {
e[e.Timeout = 1] = "Timeout";
e[e.Fall = 2] = "Fall";
})(n.FailState || (n.FailState = {}));
(function(e) {
e[e.Fail = 1] = "Fail";
e[e.Win = 2] = "Win";
})(n.GameResult || (n.GameResult = {}));
(function(e) {
e.Floor = "Floor";
e.FloorCut = "FloorCut";
e.PickKey = "PickKey";
e.ControllerUD = "ControllerUD";
e.ToolBounceTop = "ToolBounceTop";
e.TriggerMove = "TriggerMove";
e.FinishTarget = "FinishTarget";
})(n.ItemNameG || (n.ItemNameG = {}));
(function(e) {
e[e.Idle = 1] = "Idle";
e[e.Move = 2] = "Move";
e[e.Finish = 3] = "Finish";
})(n.RoleSMState || (n.RoleSMState = {}));
(function(e) {
e.daiji = "1daiji";
e.walk = "2pao";
e.huanfu = "2huanfu";
})(n.RoleAni || (n.RoleAni = {}));
(function(e) {
e[e.Menu = 0] = "Menu";
e[e.LevelSelect = 1] = "LevelSelect";
e[e.Fail = 2] = "Fail";
e[e.Win = 3] = "Win";
})(n.GameEnter || (n.GameEnter = {}));
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_GameConst: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "27f3e1/n4NJYZSQNZcB4jsC", "DaZhen_NZBTG_GameConst");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_GameConst = void 0;
var o = function() {
function e() {}
e.GravityScale = 5;
e.SpeedMove = 300;
e.ClimbThreshold = 10;
e.AngleClimb = 360 * 2.7;
e.AngleFall = 80;
e.AngleMax = 60;
e.LineWidth = 6;
e.CaptureSize = cc.size(500, 500);
e.TimesCut = 3;
e.CountDown = 5;
e.TimeHelp = 1.5;
e.DelayMove = 1;
e.DelayFailTimeout = .1;
e.DelayFailFall = 1.5;
e.DelayWin = 1.5;
return e;
}();
n.DaZhen_NZBTG_GameConst = o;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_GameData: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "be546AJReVMJ4hdWzZXTd1z", "DaZhen_NZBTG_GameData");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_GameData = void 0;
var o = e("./DaZhen_NZBTG_GameConfig"), i = e("./DaZhen_NZBTG_GameConst"), y = function() {
function e() {}
e.Init = function(t, n) {
e.Status = o.GameStatus.Ready;
e.Result = null;
e.Level = t;
e.Enter = n;
e.TimesCut = i.DaZhen_NZBTG_GameConst.TimesCut;
e.CountDown = i.DaZhen_NZBTG_GameConst.CountDown;
e.IsCountDown = !1;
e.IsHelp = !1;
e.IndexHelp = 0;
e.IndexGuide = 0;
e.IndexHelpMax = 0;
e.IndexGuideMax = 0;
e.TriggerMoveTotal = 0;
e.TriggerMoveWork = 0;
e.TouchStart = null;
e.TouchEnd = null;
e.CameraPos = cc.v2();
e.TargetPos = cc.v2();
};
return e;
}();
n.DaZhen_NZBTG_GameData = y;
cc._RF.pop();
}, {
"./DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig",
"./DaZhen_NZBTG_GameConst": "DaZhen_NZBTG_GameConst"
} ],
DaZhen_NZBTG_GameSetting: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "62e3edE5J1N9Zz6u5ZkVlRN", "DaZhen_NZBTG_GameSetting");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_GameSetting = void 0;
var o = e("../Config/DaZhen_NZBTG_Config"), i = e("../Main/DaZhen_NZBTG_Debug"), y = e("./DaZhen_NZBTG_GameConst"), a = function() {
function e() {}
e.Init = function() {
r.Init();
};
e.ResetToEngine = function() {
r.ResetToEngine();
};
e.OnOff = function(e) {
r.OnOff(e);
console.log("碰撞世界--打开状态--:", e);
};
return e;
}();
n.DaZhen_NZBTG_GameSetting = a;
var r = function() {
function e() {}
e.Init = function() {
e._RayCast = cc.PhysicsManager.prototype.rayCast;
e._ReportFixture = cc.PhysicsAABBQueryCallback.prototype.ReportFixture;
if (i.default.GetIns().isDebugDraw) {
var t = cc.PhysicsManager.DrawBits;
cc.director.getPhysicsManager().debugDrawFlags = t.e_shapeBit | t.e_jointBit;
cc.find("PHYSICS_MANAGER_DEBUG_DRAW").group = o.Group.Game;
}
cc.director.getPhysicsManager().gravity = cc.v2(0, -320 * y.DaZhen_NZBTG_GameConst.GravityScale);
cc.PhysicsManager.prototype.rayCast = function(e, t, n) {
if (e.equals(t)) return [];
var o = new b2.Vec2(), i = new b2.Vec2();
n = n || cc.RayCastType.Closest;
o.x = e.x / 32;
o.y = e.y / 32;
i.x = t.x / 32;
i.y = t.y / 32;
var y = this._raycastQueryCallback;
y.init(n);
this._world.RayCast(y, o, i);
var a = y.getFixtures();
if (a.length > 0) {
for (var r = y.getPoints(), x = y.getNormals(), s = y.getFractions(), l = [], c = 0, _ = a.length; c < _; c++) {
var h = a[c], u = h.collider;
if (u) {
if (n === cc.RayCastType.AllClosest) {
var p = l.find(function(e) {
return e.collider === u;
});
if (p) {
if (s[c] < p.fraction) {
p.fixtureIndex = u._getFixtureIndex(h);
p.point.x = 32 * r[c].x;
p.point.y = 32 * r[c].y;
p.normal.x = x[c].x;
p.normal.y = x[c].y;
p.fraction = s[c];
}
continue;
}
}
l.push({
collider: u,
fixtureIndex: u._getFixtureIndex(h),
point: cc.v2(32 * r[c].x, 32 * r[c].y),
normal: cc.v2(x[c]),
fraction: s[c]
});
}
}
return l;
}
return [];
};
cc.PhysicsAABBQueryCallback.prototype.ReportFixture = function(e) {
if (this._isPoint) {
if (e.TestPoint(this._point)) {
this._fixtures.push(e);
return !1;
}
} else this._fixtures.push(e);
return !0;
};
};
e.ResetToEngine = function() {
console.log("物理世界 重置为引擎默认参数");
cc.director.getPhysicsManager().enabledAccumulator = !0;
cc.PhysicsManager.FIXED_TIME_STEP = 1 / 60;
cc.PhysicsManager.VELOCITY_ITERATIONS = 10;
cc.PhysicsManager.POSITION_ITERATIONS = 10;
cc.director.getPhysicsManager().gravity = cc.v2(0, -320);
cc.PhysicsManager.prototype.rayCast = e._RayCast;
cc.PhysicsAABBQueryCallback.prototype.ReportFixture = e._ReportFixture;
};
e.OnOff = function(e) {
cc.director.getPhysicsManager().enabled = e;
console.log("物理世界--打开状态--:", e);
};
return e;
}();
(function() {
function e() {}
e.Init = function() {
i.default.GetIns().isDebugDraw && (cc.director.getCollisionManager().enabledDebugDraw = !0);
};
e.ResetToEngine = function() {};
e.OnOff = function(e) {
cc.director.getCollisionManager().enabled = e;
console.log("碰撞世界--打开状态--:", e);
};
})();
cc._RF.pop();
}, {
"../Config/DaZhen_NZBTG_Config": "DaZhen_NZBTG_Config",
"../Main/DaZhen_NZBTG_Debug": "DaZhen_NZBTG_Debug",
"./DaZhen_NZBTG_GameConst": "DaZhen_NZBTG_GameConst"
} ],
DaZhen_NZBTG_GameStruct: [ function(e, t) {
"use strict";
cc._RF.push(t, "cddbfcyCNdIw5oHapyhMNVw", "DaZhen_NZBTG_GameStruct");
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_Game: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "62a35VfeSJBurCweB6OCnXK", "DaZhen_NZBTG_Game");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../Audio/DaZhen_NZBTG_AudioName"), r = e("../Audio/DaZhen_NZBTG_AudioU"), x = e("./DaZhen_NZBTG_GameConfig"), s = e("../Datas/DaZhen_NZBTG_LevelNS"), l = e("../GUI/DaZhen_NZBTG_GUI"), c = e("../GUI/DaZhen_NZBTG_GUIConfig"), _ = e("../Main/DaZhen_NZBTG_Debug"), h = e("../Main/DaZhen_NZBTG_LevelData"), u = e("../Sdk/DaZhen_NZBTG_Sdk"), p = e("../Utils/DaZhen_NZBTG_EventUtil"), f = e("./DaZhen_NZBTG_GameConst"), d = e("./DaZhen_NZBTG_GameData"), Z = e("../Config/DaZhen_NZBTG_Config"), g = e("../Sdk/DaZhen_NZBTG_SdkConfig"), v = e("../Utils/DaZhen_NZBTG_CoordinateUtil"), T = e("../Main/DaZhen_NZBTG_Res"), m = e("../GUI/Panels/DaZhen_NZBTG_PanelFailTt"), G = e("../GUI/Panels/DaZhen_NZBTG_PanelWinTt"), D = e("../GUI/Panels/DaZhen_NZBTG_PanelFail"), N = e("../GUI/Panels/DaZhen_NZBTG_PanelWin"), B = e("../GUI/Panels/DaZhen_NZBTG_PanelMenu"), P = e("./DaZhen_NZBTG_Camera"), S = e("../GUI/Eff/DaZhen_NZBTG_EffWin"), b = e("./Eff/DaZhen_NZBTG_Hand"), C = e("../GUI/Panels/DaZhen_NZBTG_PanelLevelSelect"), U = e("./DaZhen_NZBTG_GameSetting"), E = .1;
function O(e, t) {
return e.fraction > t.fraction ? 1 : e.fraction < t.fraction ? -1 : 0;
}
function F(e, t, n) {
void 0 === n && (n = E);
return Math.abs(e - t) < n;
}
var w = cc._decorator, L = w.ccclass, I = w.property, R = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.rootLevel = null;
t.rootEff = null;
t.touchArea = null;
t.graphics = null;
t.imgRender = null;
t.textTimesCut = null;
t.textCountDown = null;
t.spCountDown = null;
return t;
}
t.prototype.onLoad = function() {
this.imgRender.spriteFrame = new cc.SpriteFrame(P.default.TextureGame);
this.listenOn();
U.DaZhen_NZBTG_GameSetting.OnOff(!0);
U.DaZhen_NZBTG_GameSetting.Init();
u.default.AdapterOnOff(this.node, !1, !0);
};
t.prototype.onDestroy = function() {
this.listenOff();
};
t.prototype.ocb_Skip = function() {
d.DaZhen_NZBTG_GameData.IsCountDown || d.DaZhen_NZBTG_GameData.Status == x.GameStatus.Running && (s.default.ins.levelMax != d.DaZhen_NZBTG_GameData.Level ? u.default.ShowVideo(function(e) {
if (e) {
s.default.ins.pass(3);
s.default.ins.next();
var t = s.default.ins.getIsEdit(), n = s.default.ins.getLevel(!1), o = d.DaZhen_NZBTG_GameData.Enter;
p.DaZhen_NZBTG_EventUtil.Emit(x.EventType.LevelCreate, n, t, !1, o);
}
}) : l.default.ShowToast("已是最后一关"));
};
t.prototype.ocb_Restart = function() {
if (d.DaZhen_NZBTG_GameData.Status == x.GameStatus.Running) {
var e = s.default.ins.getIsEdit(), t = e ? s.default.ins.getLevel(!0) : s.default.ins.getLevel(!1), n = d.DaZhen_NZBTG_GameData.Enter;
p.DaZhen_NZBTG_EventUtil.Emit(x.EventType.LevelCreate, t, e, !0, n);
}
};
t.prototype.ocb_Help = function() {
d.DaZhen_NZBTG_GameData.IsCountDown || d.DaZhen_NZBTG_GameData.Status == x.GameStatus.Running && (d.DaZhen_NZBTG_GameData.IsHelp ? l.default.ShowToast("已使用提示") : u.default.ShowVideo(function(e) {
if (e) {
d.DaZhen_NZBTG_GameData.IsHelp = !0;
p.DaZhen_NZBTG_EventUtil.Emit(x.EventType.Help, !0, d.DaZhen_NZBTG_GameData.IndexHelp);
}
}));
};
t.prototype.ocb_Back = function() {
if (d.DaZhen_NZBTG_GameData.Status == x.GameStatus.Running) {
d.DaZhen_NZBTG_GameData.Enter == x.GameEnter.LevelSelect ? l.default.ShowPopup(c.PanelPath.PanelLevelSelect, C.default) : l.default.ShowPopup(c.PanelPath.PanelMenu, B.default);
u.default.GetIsLP() ? u.default.GetIsManualLP() ? p.DaZhen_NZBTG_EventUtil.Emit(g.LuPingEvent.LuPingStart, g.LuPingStart.Manual, !0) : p.DaZhen_NZBTG_EventUtil.Emit(g.LuPingEvent.LuPingEnd, !1) : u.default.GetIsManualLP() && !u.default.GetHadShareLP() && p.DaZhen_NZBTG_EventUtil.Emit(g.LuPingEvent.LuPingShare);
p.DaZhen_NZBTG_EventUtil.Emit(x.EventType.LevelDestroy);
}
};
t.prototype._onTouchStart = function(e) {
if (0 != d.DaZhen_NZBTG_GameData.TimesCut) {
var t = e.getLocation();
d.DaZhen_NZBTG_GameData.TouchStart = t;
}
};
t.prototype._onTouchMove = function(e) {
if (0 != d.DaZhen_NZBTG_GameData.TimesCut) {
var t = e.getLocation();
d.DaZhen_NZBTG_GameData.TouchEnd = t;
this._draw(d.DaZhen_NZBTG_GameData.TouchStart, d.DaZhen_NZBTG_GameData.TouchEnd);
}
};
t.prototype._onTouchEnd = function(e) {
if (0 != d.DaZhen_NZBTG_GameData.TimesCut) {
var t = e.getLocation();
d.DaZhen_NZBTG_GameData.TouchEnd = t;
this.graphics.clear();
this._cut(d.DaZhen_NZBTG_GameData.TouchStart, d.DaZhen_NZBTG_GameData.TouchEnd);
d.DaZhen_NZBTG_GameData.IsHelp = !1;
}
};
t.prototype._onLevelCreate = function(e, t, n, o) {
var i = this;
p.DaZhen_NZBTG_EventUtil.Emit(x.EventType.LevelDestroy);
s.default.ins.setLevel(e, t);
d.DaZhen_NZBTG_GameData.Init(e, o);
p.DaZhen_NZBTG_EventUtil.Emit(c.GUIEvent.ShowHideNode, c.ShowHideUseCase.Game, !1);
var y = function(e) {
e.parent = i.rootLevel;
p.DaZhen_NZBTG_EventUtil.Emit(x.EventType.LevelReady);
};
t ? h.default.CreateEditPreviewLevel(e, y) : h.default.CreateLevel(e, y);
};
t.prototype._onLevelReady = function() {
d.DaZhen_NZBTG_GameData.Status = x.GameStatus.Ready;
this._setTimesCut();
this._countDownOnOff(!1);
r.default.PlayMusic(a.DaZhen_NZBTG_AudioName.game_bgm);
U.DaZhen_NZBTG_GameSetting.OnOff(!0);
u.default.AdapterOnOff(this.node, !0);
u.default.Report({
level: d.DaZhen_NZBTG_GameData.Level,
isBegin: !0
});
p.DaZhen_NZBTG_EventUtil.Emit(c.GUIEvent.ShowAsset, []);
p.DaZhen_NZBTG_EventUtil.Emit(c.GUIEvent.ShowHideNode, c.ShowHideUseCase.Game, !0);
p.DaZhen_NZBTG_EventUtil.Emit(x.EventType.Guide, !0, d.DaZhen_NZBTG_GameData.IndexGuide);
p.DaZhen_NZBTG_EventUtil.Emit(x.EventType.LevelStart);
};
t.prototype._onLevelStart = function() {
d.DaZhen_NZBTG_GameData.Status = x.GameStatus.Running;
p.DaZhen_NZBTG_EventUtil.Emit(g.LuPingEvent.LuPingStart, g.LuPingStart.Auto, !1);
_.default.GetIns().isQuicklyFinish && p.DaZhen_NZBTG_EventUtil.Emit(x.EventType.LevelFinish, _.default.GetIns().gameResult, _.default.GetIns().failState);
};
t.prototype._onLevelFinish = function(e, t) {
if (d.DaZhen_NZBTG_GameData.Status != x.GameStatus.Finish) {
d.DaZhen_NZBTG_GameData.Status = x.GameStatus.Finish;
d.DaZhen_NZBTG_GameData.Result = e;
console.log("游戏完成：", e == x.GameResult.Win ? "成功" : "失败");
if (e == x.GameResult.Win) {
t = null;
this._showWin();
r.default.PlayEffect(a.DaZhen_NZBTG_AudioName.victory);
} else if (e == x.GameResult.Fail) {
r.default.PlayEffect(a.DaZhen_NZBTG_AudioName.lose);
p.DaZhen_NZBTG_EventUtil.Emit(g.LuPingEvent.LuPingEnd, !1);
}
t == x.FailState.Timeout ? r.default.PlayEffect(a.DaZhen_NZBTG_AudioName.ding) : t == x.FailState.Fall && r.default.PlayEffect(a.DaZhen_NZBTG_AudioName.death);
u.default.Vibrate();
u.default.Report({
level: d.DaZhen_NZBTG_GameData.Level,
isWin: e == x.GameResult.Win
});
p.DaZhen_NZBTG_EventUtil.Emit(x.EventType.Guide, !1);
p.DaZhen_NZBTG_EventUtil.Emit(x.EventType.Help, !1);
this._countDownOnOff(!1);
var n = e == x.GameResult.Win ? f.DaZhen_NZBTG_GameConst.DelayWin : t == x.FailState.Timeout ? f.DaZhen_NZBTG_GameConst.DelayFailTimeout : t == x.FailState.Fall ? f.DaZhen_NZBTG_GameConst.DelayFailFall : f.DaZhen_NZBTG_GameConst.DelayFailTimeout;
this.scheduleOnce(function() {
u.default.IsPfNs(g.PfN.tt) ? p.DaZhen_NZBTG_EventUtil.Emit(g.LuPingEvent.LuPingShare, function() {
p.DaZhen_NZBTG_EventUtil.Emit(x.EventType.LevelSettle);
}) : p.DaZhen_NZBTG_EventUtil.Emit(x.EventType.LevelSettle);
}, n);
}
};
t.prototype._onLevelSettle = function() {
U.DaZhen_NZBTG_GameSetting.OnOff(!1);
l.default.ClearAll();
u.default.IsPfNs(g.PfN.tt) ? d.DaZhen_NZBTG_GameData.Result == x.GameResult.Fail ? l.default.ShowPopup(c.PanelPath.PanelFailTt, m.default) : l.default.ShowPopup(c.PanelPath.PanelWinTt, G.default) : d.DaZhen_NZBTG_GameData.Result == x.GameResult.Fail ? l.default.ShowPopup(c.PanelPath.PanelFail, D.default) : l.default.ShowPopup(c.PanelPath.PanelWin, N.default, function(e) {
e.initPanel();
});
};
t.prototype._onLevelDestroy = function() {
this._countDownOnOff(!1);
this.unscheduleAllCallbacks();
this.rootLevel.destroyAllChildren();
};
t.prototype._onRoleMove = function() {
this._countDownOnOff(!0, function() {
p.DaZhen_NZBTG_EventUtil.Emit(x.EventType.LevelFinish, x.GameResult.Fail, x.FailState.Timeout);
});
};
t.prototype._setTimesCut = function() {
this.textTimesCut.string = "" + d.DaZhen_NZBTG_GameData.TimesCut;
};
t.prototype._setCountDown = function() {
this.textCountDown.string = "" + d.DaZhen_NZBTG_GameData.CountDown;
};
t.prototype._countDownCb = function() {
d.DaZhen_NZBTG_GameData.CountDown--;
this._setCountDown();
if (0 == d.DaZhen_NZBTG_GameData.CountDown) {
this._onCountDownDone && this._onCountDownDone();
this._onCountDownDone = null;
this.unschedule(this._countDownCb);
}
};
t.prototype._countDownOnOff = function(e, t) {
var n = this.textCountDown, o = this.spCountDown, i = n.node.parent;
i.active = e;
this._onCountDownDone = t;
if (e) {
if (d.DaZhen_NZBTG_GameData.IsCountDown) return;
d.DaZhen_NZBTG_GameData.IsCountDown = !0;
d.DaZhen_NZBTG_GameData.CountDown = f.DaZhen_NZBTG_GameConst.CountDown;
r.default.PlayEffect(a.DaZhen_NZBTG_AudioName.clock);
this._setCountDown();
cc.Tween.stopAllByTarget(i);
cc.Tween.stopAllByTarget(this.spCountDown);
o.fillRange = 1;
i.scale = 0;
cc.tween(o).to(d.DaZhen_NZBTG_GameData.CountDown, {
fillRange: 0
}).start();
cc.tween(i).to(.2, {
scale: 1
}).start();
this.schedule(this._countDownCb, 1, d.DaZhen_NZBTG_GameData.CountDown - 1);
} else {
r.default.StopEffect(a.DaZhen_NZBTG_AudioName.clock);
cc.Tween.stopAllByTarget(i);
cc.Tween.stopAllByTarget(this.spCountDown);
this.unschedule(this._countDownCb);
}
};
t.prototype._draw = function(e, t) {
var n = this;
if (_.default.GetIns().isDebugDraw) {
var o, i = this._graphicsDebug;
if (!i) {
var y = new cc.Node("Frame");
y.parent = this.node;
y.group = Z.Group.UI;
(i = y.addComponent(cc.Graphics)).lineCap = cc.Graphics.LineCap.ROUND;
i.lineJoin = cc.Graphics.LineJoin.ROUND;
i.lineWidth = 6;
i.strokeColor.fromHEX("#000000");
this._graphicsDebug = i;
}
i.clear(!1);
this._rayCast(e, t).forEach(function(e) {
o = v.DaZhen_NZBTG_CoordinateUtil.WorldToLocal(e.point, n.node);
i.circle(o.x, o.y, 3);
});
i.stroke();
}
var a = this.graphics, r = v.DaZhen_NZBTG_CoordinateUtil.WorldToLocal(e, a.node), x = v.DaZhen_NZBTG_CoordinateUtil.WorldToLocal(t, a.node).sub(r), s = x.mag();
if (!(s <= 5)) {
var l = x.normalize(), c = cc.v2(r);
a.lineWidth = f.DaZhen_NZBTG_GameConst.LineWidth;
a.clear();
a.moveTo(c.x, c.y);
for (;s > 0; ) {
s > 25 ? c.addSelf(l.mul(25)) : c.addSelf(l.mul(s));
a.lineTo(c.x, c.y);
c.addSelf(l.mul(10));
a.moveTo(c.x, c.y);
s -= 35;
}
a.stroke();
}
};
t.prototype._cut = function(e, t) {
var n = this;
if (!F(e.sub(t).magSqr(), 0)) {
var o = this._rayCast(e, t);
this._getPairs(o).forEach(function(o) {
p.DaZhen_NZBTG_EventUtil.Emit(x.EventType.Cut, o, n._getTouchBox(e, t));
});
r.default.PlayEffect(a.DaZhen_NZBTG_AudioName.cutting);
d.DaZhen_NZBTG_GameData.TimesCut--;
this._setTimesCut();
if (0 == d.DaZhen_NZBTG_GameData.TimesCut) {
console.log("剪刀消耗完毕");
this.scheduleOnce(function() {
p.DaZhen_NZBTG_EventUtil.Emit(x.EventType.RoleMove);
}, f.DaZhen_NZBTG_GameConst.DelayMove);
}
}
};
t.prototype._rayCast = function(e, t) {
var n = e, o = t, i = cc.director.getPhysicsManager(), y = i.rayCast(n, o, cc.RayCastType.All), a = i.rayCast(o, n, cc.RayCastType.All);
a.forEach(function(e) {
e.fraction = 1 - e.fraction;
});
return y.concat(a);
};
t.prototype._getTouchBox = function(e, t) {
var n = [], o = t.sub(e).rotate(-Math.PI / 2).normalizeSelf().mulSelf(.5 * f.DaZhen_NZBTG_GameConst.LineWidth);
n.push(e.add(o.neg()));
n.push(t.add(o.neg()));
n.push(t.add(o));
n.push(e.add(o));
return n;
};
t.prototype._getPairs = function(e) {
for (var t = [], n = function(n) {
for (var o = !1, i = e[n], y = 0; y < t.length; y++) {
var a = t[y];
if (a[0] && i.collider === a[0].collider) {
o = !0;
var r = a.find(function(e) {
return e.point.sub(i.point).magSqr() <= 5;
});
r ? a.splice(a.indexOf(r), 1) : a.push(i);
break;
}
}
o || t.push([ i ]);
}, o = 0; o < e.length; o++) n(o);
t.forEach(function(e) {
e.sort(O);
});
return t;
};
t.prototype._showWin = function() {
var e = v.DaZhen_NZBTG_CoordinateUtil.LocalToWorld(this.rootLevel, d.DaZhen_NZBTG_GameData.TargetPos);
e = cc.v2(e.x, e.y + 30);
var t = "Game/Item/RoleWin";
T.default.GetNode(t, e, this.rootLevel);
e = cc.v2(cc.winSize.width / 2, e.y + 100);
t = "Game/Eff/Hand";
T.default.GetNode(t, e, this.rootLevel).getComponent(b.default).init({
callback: function() {
t = "GUI/Eff/EffWin";
var e = function() {
p.DaZhen_NZBTG_EventUtil.Emit(g.LuPingEvent.LuPingEnd, !1);
};
l.default.ShowUI(t, c.GUILayer.Effect, S.default, !1, function(t) {
return t.init(e);
});
}
});
};
t.prototype.listenOn = function() {
this.touchArea.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
this.touchArea.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
this.touchArea.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
this.touchArea.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
p.DaZhen_NZBTG_EventUtil.On(x.EventType.LevelCreate, this._onLevelCreate, this);
p.DaZhen_NZBTG_EventUtil.On(x.EventType.LevelReady, this._onLevelReady, this);
p.DaZhen_NZBTG_EventUtil.On(x.EventType.LevelStart, this._onLevelStart, this);
p.DaZhen_NZBTG_EventUtil.On(x.EventType.LevelFinish, this._onLevelFinish, this);
p.DaZhen_NZBTG_EventUtil.On(x.EventType.LevelSettle, this._onLevelSettle, this);
p.DaZhen_NZBTG_EventUtil.On(x.EventType.LevelDestroy, this._onLevelDestroy, this);
p.DaZhen_NZBTG_EventUtil.On(x.EventType.RoleMove, this._onRoleMove, this);
};
t.prototype.listenOff = function() {
this.touchArea.off(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
this.touchArea.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
this.touchArea.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
this.touchArea.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
p.DaZhen_NZBTG_EventUtil.Off(x.EventType.LevelCreate, this._onLevelCreate, this);
p.DaZhen_NZBTG_EventUtil.Off(x.EventType.LevelReady, this._onLevelReady, this);
p.DaZhen_NZBTG_EventUtil.Off(x.EventType.LevelStart, this._onLevelStart, this);
p.DaZhen_NZBTG_EventUtil.Off(x.EventType.LevelFinish, this._onLevelFinish, this);
p.DaZhen_NZBTG_EventUtil.Off(x.EventType.LevelSettle, this._onLevelSettle, this);
p.DaZhen_NZBTG_EventUtil.Off(x.EventType.LevelDestroy, this._onLevelDestroy, this);
p.DaZhen_NZBTG_EventUtil.Off(x.EventType.RoleMove, this._onRoleMove, this);
};
y([ I(cc.Node) ], t.prototype, "rootLevel", void 0);
y([ I(cc.Node) ], t.prototype, "rootEff", void 0);
y([ I(cc.Node) ], t.prototype, "touchArea", void 0);
y([ I(cc.Graphics) ], t.prototype, "graphics", void 0);
y([ I(cc.Sprite) ], t.prototype, "imgRender", void 0);
y([ I(cc.Label) ], t.prototype, "textTimesCut", void 0);
y([ I(cc.Label) ], t.prototype, "textCountDown", void 0);
y([ I(cc.Sprite) ], t.prototype, "spCountDown", void 0);
return y([ L ], t);
}(cc.Component);
n.default = R;
cc._RF.pop();
}, {
"../Audio/DaZhen_NZBTG_AudioName": "DaZhen_NZBTG_AudioName",
"../Audio/DaZhen_NZBTG_AudioU": "DaZhen_NZBTG_AudioU",
"../Config/DaZhen_NZBTG_Config": "DaZhen_NZBTG_Config",
"../Datas/DaZhen_NZBTG_LevelNS": "DaZhen_NZBTG_LevelNS",
"../GUI/DaZhen_NZBTG_GUI": "DaZhen_NZBTG_GUI",
"../GUI/DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig",
"../GUI/Eff/DaZhen_NZBTG_EffWin": "DaZhen_NZBTG_EffWin",
"../GUI/Panels/DaZhen_NZBTG_PanelFail": "DaZhen_NZBTG_PanelFail",
"../GUI/Panels/DaZhen_NZBTG_PanelFailTt": "DaZhen_NZBTG_PanelFailTt",
"../GUI/Panels/DaZhen_NZBTG_PanelLevelSelect": "DaZhen_NZBTG_PanelLevelSelect",
"../GUI/Panels/DaZhen_NZBTG_PanelMenu": "DaZhen_NZBTG_PanelMenu",
"../GUI/Panels/DaZhen_NZBTG_PanelWin": "DaZhen_NZBTG_PanelWin",
"../GUI/Panels/DaZhen_NZBTG_PanelWinTt": "DaZhen_NZBTG_PanelWinTt",
"../Main/DaZhen_NZBTG_Debug": "DaZhen_NZBTG_Debug",
"../Main/DaZhen_NZBTG_LevelData": "DaZhen_NZBTG_LevelData",
"../Main/DaZhen_NZBTG_Res": "DaZhen_NZBTG_Res",
"../Sdk/DaZhen_NZBTG_Sdk": "DaZhen_NZBTG_Sdk",
"../Sdk/DaZhen_NZBTG_SdkConfig": "DaZhen_NZBTG_SdkConfig",
"../Utils/DaZhen_NZBTG_CoordinateUtil": "DaZhen_NZBTG_CoordinateUtil",
"../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"./DaZhen_NZBTG_Camera": "DaZhen_NZBTG_Camera",
"./DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig",
"./DaZhen_NZBTG_GameConst": "DaZhen_NZBTG_GameConst",
"./DaZhen_NZBTG_GameData": "DaZhen_NZBTG_GameData",
"./DaZhen_NZBTG_GameSetting": "DaZhen_NZBTG_GameSetting",
"./Eff/DaZhen_NZBTG_Hand": "DaZhen_NZBTG_Hand"
} ],
DaZhen_NZBTG_Hand: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "28de95rKyRAvJcAut6RA7Ez", "DaZhen_NZBTG_Hand");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../DaZhen_NZBTG_GameData"), r = cc._decorator, x = r.ccclass, s = (r.property, 
r.menu), l = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.init = function(e) {
var t = e.callback;
this._callback = t;
this._doShow();
};
t.prototype._doShow = function() {
var e = this.node, t = cc.v2(a.DaZhen_NZBTG_GameData.TargetPos);
t.y += 45;
e.opacity = 0;
cc.tween(e).to(.35, {
opacity: 255
}).to(.7, {
position: cc.v3(t),
angle: 12
}).call(this._callback).start();
};
return y([ x, s("Game/Eff/DaZhen_NZBTG_Hand") ], t);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"../DaZhen_NZBTG_GameData": "DaZhen_NZBTG_GameData"
} ],
DaZhen_NZBTG_Help: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8d66cpR1xtJua0YGY3Q5vcy", "DaZhen_NZBTG_Help");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../DaZhen_NZBTG_GameConfig"), r = e("../../Utils/DaZhen_NZBTG_EventUtil"), x = e("../DaZhen_NZBTG_GameConst"), s = e("../DaZhen_NZBTG_GameData"), l = cc._decorator, c = l.ccclass, _ = l.property, h = l.menu, u = l.executeInEditMode, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.isGuide = !1;
t.index = 0;
t.pointStart = cc.v2();
t.pointEnd = cc.v2();
return t;
}
Object.defineProperty(t.prototype, "reset", {
get: function() {
return !1;
},
set: function() {
this.pointStart = cc.v2(this._nodeStart.getPosition());
this.pointEnd = cc.v2(this._nodeEnd.getPosition());
this._init();
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
this._init();
r.DaZhen_NZBTG_EventUtil.On(a.EventType.Guide, this._onGuide, this);
r.DaZhen_NZBTG_EventUtil.On(a.EventType.Help, this._onHelp, this);
};
t.prototype.onDestroy = function() {
r.DaZhen_NZBTG_EventUtil.Off(a.EventType.Guide, this._onGuide, this);
r.DaZhen_NZBTG_EventUtil.Off(a.EventType.Help, this._onHelp, this);
};
t.prototype.update = function(e) {
if (this._isWork) {
this._time += e;
var t = !1;
if (this._time > x.DaZhen_NZBTG_GameConst.TimeHelp) {
this._time = 0;
t = !0;
}
this._point = this.pointStart.lerp(this.pointEnd, this._time / x.DaZhen_NZBTG_GameConst.TimeHelp);
this._nodeHand.setPosition(this._point);
this._draw(this.pointStart, this._point);
if (t) if (this.isGuide) {
s.DaZhen_NZBTG_GameData.IndexGuide == s.DaZhen_NZBTG_GameData.IndexGuideMax ? s.DaZhen_NZBTG_GameData.IndexGuide = 0 : s.DaZhen_NZBTG_GameData.IndexGuide++;
r.DaZhen_NZBTG_EventUtil.Emit(a.EventType.Guide, !0, s.DaZhen_NZBTG_GameData.IndexGuide);
} else {
s.DaZhen_NZBTG_GameData.IndexHelp == s.DaZhen_NZBTG_GameData.IndexHelpMax ? s.DaZhen_NZBTG_GameData.IndexHelp = 0 : s.DaZhen_NZBTG_GameData.IndexHelp++;
r.DaZhen_NZBTG_EventUtil.Emit(a.EventType.Help, !0, s.DaZhen_NZBTG_GameData.IndexHelp);
}
}
};
t.prototype._onGuide = function(e, t) {
if (this.isGuide) {
t != this.index && (e = !1);
if (this._isWork != e) {
this._isWork = e;
this._time = 0;
this._point = this.pointStart;
this._graphics.clear();
this.node.opacity = e ? 255 : 0;
}
}
};
t.prototype._onHelp = function(e, t) {
if (!this.isGuide) {
t != this.index && (e = !1);
if (this._isWork != e) {
this._isWork = e;
this._time = 0;
this._point = this.pointStart;
this._graphics.clear();
this.node.opacity = e ? 255 : 0;
}
}
};
t.prototype._init = function() {
this._nodeHand = cc.find("Hand", this.node);
this._nodeStart = cc.find("PointStart", this.node);
this._nodeEnd = cc.find("PointEnd", this.node);
this._graphics = cc.find("Graphics", this.node).getComponent(cc.Graphics);
this._applyPoints();
this._draw(this.pointStart, this.pointEnd);
this._isWork = !1;
this.node.opacity = 0;
this.isGuide ? this.index > s.DaZhen_NZBTG_GameData.IndexGuideMax && (s.DaZhen_NZBTG_GameData.IndexGuideMax = this.index) : this.index > s.DaZhen_NZBTG_GameData.IndexHelpMax && (s.DaZhen_NZBTG_GameData.IndexHelpMax = this.index);
};
t.prototype._applyPoints = function() {
this._time = 0;
this._point = this.pointStart;
this._nodeHand.setPosition(this._point);
this._nodeStart.setPosition(this.pointStart);
this._nodeEnd.setPosition(this.pointEnd);
};
t.prototype._draw = function(e, t) {
var n = this._graphics, o = t.sub(e), i = o.mag();
if (!(i <= 5)) {
var y = o.normalize(), a = cc.v2(e);
n.clear();
n.moveTo(a.x, a.y);
for (;i > 0; ) {
i > 20 ? a.addSelf(y.mul(20)) : a.addSelf(y.mul(i));
n.lineTo(a.x, a.y);
a.addSelf(y.mul(10));
n.moveTo(a.x, a.y);
i -= 30;
}
n.stroke();
}
};
y([ _({
tooltip: "引导类型，直接显示"
}) ], t.prototype, "isGuide", void 0);
y([ _({
tooltip: "顺序下标"
}) ], t.prototype, "index", void 0);
y([ _() ], t.prototype, "pointStart", void 0);
y([ _() ], t.prototype, "pointEnd", void 0);
y([ _() ], t.prototype, "reset", null);
return y([ c, u, h("Game/Item/DaZhen_NZBTG_Help") ], t);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig",
"../DaZhen_NZBTG_GameConst": "DaZhen_NZBTG_GameConst",
"../DaZhen_NZBTG_GameData": "DaZhen_NZBTG_GameData"
} ],
DaZhen_NZBTG_HttpUtil: [ function (require, module, exports) {
function Http() {}
Http.prototype.get = function(url, callback, context) { if (callback) setTimeout(function() { callback.call(context, -1, null); }, 0); };
Http.prototype.post = function(url, body, callback, context) { this.get(url, callback, context); };
exports.Http = Http;
exports.DaZhen_NZBTG_HttpUtil = { Get: function(url, callback, context) { new Http().get(url, callback, context); }, Post: function(url, body, callback, context) { new Http().post(url, body, callback, context); }};
}, {} ],
DaZhen_NZBTG_IGUI: [ function(e, t) {
"use strict";
cc._RF.push(t, "c909cZy+bNLCJ/TZ8IpZAw3", "DaZhen_NZBTG_IGUI");
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_IconNative_mini: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f8b01DP6etDdK1f225tfR8a", "DaZhen_NZBTG_IconNative_mini");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../DaZhen_NZBTG_SdkConfig"), r = e("./DaZhen_NZBTG_BaseSdkE"), x = cc._decorator, s = x.ccclass, l = (x.property, 
x.menu), c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.pfns = [ a.PfN.oppo ];
t.extensionName = "icon 原生小游戏";
return t;
}
t.prototype.init = function() {
if (this.isWork) {
this.nodeSub && this.nodeSub.destroy();
var e = new cc.Node();
e.parent = this.node;
this.nodeSub = e;
lieyou_SdkManager.showNativeAd_4({
node: e,
iconNode: e
});
}
};
return y([ s, l("Sdk/DaZhen_NZBTG_IconNative_mini") ], t);
}(r.default);
n.default = c;
cc._RF.pop();
}, {
"../DaZhen_NZBTG_SdkConfig": "DaZhen_NZBTG_SdkConfig",
"./DaZhen_NZBTG_BaseSdkE": "DaZhen_NZBTG_BaseSdkE"
} ],
DaZhen_NZBTG_LevelData: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ebaf85+2ANFOZ83uPVGBNQu", "DaZhen_NZBTG_LevelData");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = e("../Config/DaZhen_NZBTG_Constant"), i = e("../Config/DaZhen_NZBTG_PrefabConfig"), y = e("./DaZhen_NZBTG_Res"), a = e("./DaZhen_NZBTG_Edit"), r = e("../Datas/DaZhen_NZBTG_LevelNS"), x = e("../Config/DaZhen_NZBTG_Config"), s = e("../SubGame/DaZhen_NZBTG_SubGameUtil"), l = {
Floor: [ "vertexes" ],
Help: [ "isGuide", "index", "pointStart", "pointEnd" ],
ControllerUD: [ "target" ],
ControlTarget: [ "targetPos", "speed" ],
PickKey: [ "target" ],
ToolBounce: [ "speed" ],
AttributeAniScale: [ "targetScale", "speed", "timeDelay", "timePaddingTarget", "timePaddingOrigin" ],
AttributeAniMove: [ "targetPos", "speed", "timeDelay", "timePaddingTarget", "timePaddingOrigin" ],
AttributeAniTouchMove: [ "moveDir", "originPos", "targetPos", "nodeLine" ],
AttributeAniRota: [ "speed" ],
AttributeAniSwing: [ "range", "speed" ],
AttributeStyle: [ "pathSprite", "pathTexture", "index", "vertexes" ]
}, c = function() {
function e() {}
e.Init = function() {
var t = i.DaZhen_NZBTG_PrefabConfig.filter(function(e) {
return e.includes("Game/Item");
}).map(function(e) {
return y.default.GetCachePrefab(e);
});
e._OriginPrefabData = [];
e._OriginPrefabs = t;
e._LoadEditSaveRangeNum = 0;
e._GetOriginPrefabData(t);
};
e.GetEditLevelRangeData = function() {
e._LoadEditSaveRangeNum = 0;
for (var t = {}, n = Date.now(), o = a.default.GetIns().saveRange, i = function(o) {
e._GetEditLevelData(o, function(i) {
t[o] = JSON.stringify(i);
e._CheckEditLevelRangeDone(t, n);
});
}, y = o.x; y < o.y + 1; y++) i(y);
};
e.CreateLevel = function(t, n) {
var o = r.default.ins.getInfo(t);
console.log("关卡:", o);
e._CreateLevelFromData(o, n);
};
e.CreateEditPreviewLevel = function(t, n) {
e._GetEditLevelData(t, function(t) {
console.log("预览关卡:", t);
e._CreateLevelFromData(t, n);
});
};
e._CreateLevelFromData = function(t, n) {
e._LoadGameItem(t.name, function(o) {
t.ch && t.ch.forEach(function(i) {
e._LoadGameItem(i.name, function(i) {
o.addChild(i);
e._CheckCreateLevelDone(o, t, n);
});
});
});
};
e._CheckCreateLevelDone = function(t, n, o) {
if (t.children.length == n.ch.length) {
console.log("--加载数据完成--");
e._SetNodeData(t, n);
o(t);
}
};
e._GetOriginPrefabData = function(t) {
for (var n = 0; n < t.length; n++) {
var o = t[n], i = {};
e._ToJsonData(o.data, i);
e._OriginPrefabData.push(i);
}
};
e._LoadGameItem = function(e, t) {
var n = y.default.GetCachePrefab("Game/Item/" + e), o = cc.instantiate(n);
t && t(o);
};
e._LoadEditLevel = function(e, t) {
console.log("--加载编辑的关卡预制体--");
y.default.Load(x.BundleName.LevelEdit, e, cc.Prefab, function(e) {
var n = cc.instantiate(e);
t && t(n);
});
};
e._GetEditLevelData = function(t, n) {
var o = a.default.GetIns().getRouter(t);
e._LoadEditLevel(o, function(t) {
var o = e._ToJsonData(t, {});
n && n(o);
t.destroy();
});
};
e._CheckEditLevelRangeDone = function(t, n) {
e._LoadEditSaveRangeNum++;
var i = a.default.GetIns().saveRange, y = i.y - i.x + 1;
if (e._LoadEditSaveRangeNum == y) {
var r = " \n ";
for (var x in t) r += t[x] + ", \n ";
cc.log("--获取关卡预制体信息完成--关卡数为" + y + "--耗时为" + (Date.now() - n) + "ms--");
var s = a.default.GetIns().getSaveName();
Editor.assetdb.createOrSave("db://assets/" + o.DaZhen_NZBTG_Constant.GameName + "/Script/Config/" + s + ".ts", "export const " + s + " = [" + r + "]", function(e) {
e ? cc.log(e) : cc.log("--关卡数据成功写入Config/" + s + ".ts中--");
});
}
};
e._GetNodeById = function(e, t) {
for (var n, o = 0, i = e.parent.children; o < i.length; o++) {
var y = i[o];
if (y.getSiblingIndex() === t) {
n = y;
break;
}
}
return n;
};
e._SetNodeData = function(t, n) {
for (var o in n) "object" != typeof n[o] && (t[o] = n[o]);
e._SetComponents(t, n);
if (n.ch) for (var i = 0, y = 0, a = n.ch; y < a.length; y++) {
var r = a[y];
e._SetNodeData(t.children[i++], r);
}
};
e._ToJsonData = function(t, n) {
n.name = t.name;
n.x = Math.floor(t.x);
n.y = Math.floor(t.y);
n.width = Math.floor(t.width);
n.height = Math.floor(t.height);
n.angle = t.angle;
n.scaleX = t.scaleX;
n.scaleY = t.scaleY;
e._GetComponents(t, n);
for (var o = 0, i = e._OriginPrefabData; o < i.length; o++) {
var y = i[o];
if (n.name == y.name) {
e._Redundance(n, y);
n.name = t.name;
break;
}
}
if (t.name.startsWith("Level")) {
n.ch = [];
for (var a = 0, r = t.children; a < r.length; a++) {
var x = r[a], s = e._ToJsonData(x, {});
e._OriginPrefabs.find(function(e) {
return e.data.name == s.name;
}) && n.ch.push(s);
}
}
return n;
};
e._Redundance = function(t, n) {
var o = !1;
t.nodeId && (o = !0);
Array.isArray(n) && 0 == n.length && (o = !0);
for (var i in t) t[i] && t[i] instanceof cc.Vec2 && delete t[i].z;
for (var i in n) if (t[i] === n[i]) Array.isArray(n) || delete t[i]; else if ("object" == typeof t[i]) if (t[i] && t[i] instanceof cc.Vec2) t[i].equals(n[i]) || (o = !0); else {
var y = e._Redundance(t[i], n[i]);
y || delete t[i];
!o && y && (o = !0);
} else o = !0;
return o;
};
e._GetComponents = function(e, t) {
for (var n in l) {
var o = s.default.GameName + "_" + n, i = e.getComponents(o);
if (0 != i.length) {
var y = l[n];
t[n] = [];
for (var a = 0, r = 0, x = i; r < x.length; r++) {
var c = x[r];
t[n][a] = {};
for (var _ = 0, h = y; _ < h.length; _++) {
var u = h[_], p = c[u];
if (p && "object" == typeof p) if (Array.isArray(p)) {
t[n][a][u] = [];
p.forEach(function(e, o) {
switch (e.__classname__) {
case "cc.Node":
t[n][a][u][o] = {};
t[n][a][u][o].nodeId = e.getSiblingIndex();
break;

default:
t[n][a][u][o] = e;
}
});
} else switch (p.__classname__) {
case "cc.Node":
t[n][a][u] = {};
t[n][a][u].nodeId = p.getSiblingIndex();
break;

default:
t[n][a][u] = p;
} else t[n][a][u] = p;
}
a++;
}
}
}
};
e._SetComponents = function(t, n) {
for (var o in l) {
var i = s.default.GameName + "_" + o;
if (n[o]) {
for (var y = t.getComponents(i); y.length < n[o].length; ) {
t.addComponent(i);
y = t.getComponents(i);
}
for (var a = 0, r = 0, x = y; r < x.length; r++) {
var c = x[r], _ = n[o][a++];
for (var h in _) if (void 0 !== _[h]) if ("object" == typeof _[h]) {
if (void 0 !== c[h]) {
var u = !1, p = !1;
if (Array.isArray(c[h])) {
var f = _[h][0];
p = e._CheckIsNode(f);
u = e._CheckIsVec2(f);
for (var d in _[h]) if (null != _[h][d]) if (p) (Z = e._GetNodeById(t, _[h][d].nodeId)) && (c[h][d] = Z); else if (u) {
c[h][d] = cc.Vec2.ZERO;
c[h][d].x = _[h][d].x;
c[h][d].y = _[h][d].y;
} else c[h][d] = _[h][d];
} else {
p = e._CheckIsNode(_[h]);
u = e._CheckIsVec2(_[h]);
if (p) {
var Z;
(Z = e._GetNodeById(t, _[h].nodeId)) && (c[h] = Z);
} else if (u) {
c[h] = cc.Vec2.ZERO;
c[h].x = _[h].x;
c[h].y = _[h].y;
} else c[h] = _[h];
}
}
} else c[h] = _[h];
}
}
}
};
e._CheckIsNode = function(e) {
var t = !1;
e && void 0 !== e.nodeId && (t = !0);
return t;
};
e._CheckIsVec2 = function(e) {
var t = !1;
e && null != e.x && null != e.y && (t = !0);
return t;
};
return e;
}();
n.default = c;
cc._RF.pop();
}, {
"../Config/DaZhen_NZBTG_Config": "DaZhen_NZBTG_Config",
"../Config/DaZhen_NZBTG_Constant": "DaZhen_NZBTG_Constant",
"../Config/DaZhen_NZBTG_PrefabConfig": "DaZhen_NZBTG_PrefabConfig",
"../Datas/DaZhen_NZBTG_LevelNS": "DaZhen_NZBTG_LevelNS",
"../SubGame/DaZhen_NZBTG_SubGameUtil": "DaZhen_NZBTG_SubGameUtil",
"./DaZhen_NZBTG_Edit": "DaZhen_NZBTG_Edit",
"./DaZhen_NZBTG_Res": "DaZhen_NZBTG_Res"
} ],
DaZhen_NZBTG_LevelNS: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "bb800PKCdBFG4v405lO53k2", "DaZhen_NZBTG_LevelNS");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = e("../Config/DaZhen_NZBTG_LevelNormalConfig"), i = e("../GUI/DaZhen_NZBTG_GUIConfig"), y = e("../GUI/DaZhen_NZBTG_GUIConst"), a = e("../Utils/DaZhen_NZBTG_EventUtil"), r = e("./DaZhen_NZBTG_Data"), x = e("./DaZhen_NZBTG_DataStruct"), s = function() {
function e() {
this._init();
}
Object.defineProperty(e, "ins", {
get: function() {
e._ins || (e._ins = new e());
return e._ins;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "levelMax", {
get: function() {
return this._levelMaxNormal;
},
enumerable: !1,
configurable: !0
});
e.prototype._init = function() {
this._configNormal = o.DaZhen_NZBTG_LevelNormalConfig;
this._levelMaxNormal = o.DaZhen_NZBTG_LevelNormalConfig.length;
this._levelNormal = r.LastingData.Level;
this._levelData = r.LastingData.LevelData;
0 == this._levelData.length && this.unlock(1);
};
e.prototype.getLevel = function(e) {
void 0 === e && (e = !1);
return this.getIsBeyond() && !e ? this.levelMax : this._levelNormal;
};
e.prototype.getLevelUnlockNew = function() {
var e = 1;
this._levelData.forEach(function(t) {
e = t.level;
});
e > this.levelMax && (e = this.levelMax);
return e;
};
e.prototype.getLevelUnitIndex = function(e) {
var t = y.DaZhen_NZBTG_GUIConst.LevelPageSize;
return e % t == 0 ? t : e % t;
};
e.prototype.getLevelPageIndex = function(e) {
var t = y.DaZhen_NZBTG_GUIConst.LevelPageSize;
return Math.floor((e - 1) / t);
};
e.prototype.getLevelInPage = function(e, t) {
var n = e;
return (n += y.DaZhen_NZBTG_GUIConst.LevelPageSize * t) + 1;
};
e.prototype.getInfo = function(e) {
var t = e - 1;
return this._configNormal[t];
};
e.prototype.getData = function(e) {
return this._levelData.find(function(t) {
return t.level == e;
});
};
e.prototype.getIsBeyond = function(e) {
e || (e = this._levelNormal);
return e > this._levelMaxNormal;
};
e.prototype.getIsUnlock = function(e) {
var t = !1;
this.getData(e) && (t = !0);
return t;
};
e.prototype.getIsPass = function(e) {
var t = !1, n = this.getData(e);
n && (t = n.isPass);
return t;
};
e.prototype.getPassStar = function(e) {
var t = 0, n = this.getData(e);
n && (t = n.starNum);
return t;
};
e.prototype.getIsEdit = function() {
return this._isEdit;
};
e.prototype.setLevel = function(e, t) {
this._isEdit = t;
this._levelNormal = e;
r.LastingData.Level = this._levelNormal;
};
e.prototype.unlock = function(e) {
if (!this.getIsUnlock(e)) {
var t = new x.LevelData(e);
this._levelData.push(t);
r.LastingData.LevelData = this._levelData;
}
a.DaZhen_NZBTG_EventUtil.Emit(i.GUIEvent.LevelUnlock, e);
};
e.prototype.pass = function(e) {
var t = this.getLevel();
if (!this.getIsPass(t)) {
var n = this.getData(t);
if (n) {
n.starNum < e && (n.starNum = e);
n.isPass = !0;
}
r.LastingData.LevelData = this._levelData;
}
a.DaZhen_NZBTG_EventUtil.Emit(i.GUIEvent.LevelPass, t);
};
e.prototype.next = function() {
var e;
e = this.getLevel() + 1;
this.unlock(e);
this._levelNormal = e;
r.LastingData.Level = this._levelNormal;
};
return e;
}();
n.default = s;
cc._RF.pop();
}, {
"../Config/DaZhen_NZBTG_LevelNormalConfig": "DaZhen_NZBTG_LevelNormalConfig",
"../GUI/DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig",
"../GUI/DaZhen_NZBTG_GUIConst": "DaZhen_NZBTG_GUIConst",
"../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"./DaZhen_NZBTG_Data": "DaZhen_NZBTG_Data",
"./DaZhen_NZBTG_DataStruct": "DaZhen_NZBTG_DataStruct"
} ],
DaZhen_NZBTG_LevelNormalConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8e6c2+4+OZMdpszZiEkrDlb", "DaZhen_NZBTG_LevelNormalConfig");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_LevelNormalConfig = void 0;
n.DaZhen_NZBTG_LevelNormalConfig = [ {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -100
}, {
x: 260,
y: -100
}, {
x: 144,
y: -154
}, {
x: 92,
y: -358
}, {
x: -98,
y: -358
}, {
x: -149,
y: -74
}, {
x: -277,
y: -29
}, {
x: -1002,
y: -29
} ]
} ],
name: "Floor"
}, {
x: 285,
y: -63,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -278,
y: 877
}, {
x: 463,
y: 877
}, {
x: 213,
y: 625
}, {
x: 276,
y: 457
}, {
x: 130,
y: 308
}, {
x: 89,
y: 106
}, {
x: -92,
y: 106
}, {
x: -135,
y: 386
}, {
x: -278,
y: 526
} ]
} ],
name: "FloorCut"
}, {
Help: [ {
isGuide: !0,
pointStart: {
x: -249.815,
y: 429.009
},
pointEnd: {
x: 179.713,
y: 294
}
} ],
name: "Help"
}, {
y: -296,
name: "TriggerMove"
}, {
x: -316,
y: -39,
name: "Role"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1006,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -126
}, {
x: 190,
y: -126
}, {
x: 190,
y: -368
}, {
x: -185,
y: -368
}, {
x: -185,
y: -126
}, {
x: -1006,
y: -126
} ]
} ],
name: "Floor"
}, {
x: 282,
y: -78,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -431,
y: 785
}, {
x: 469,
y: 785
}, {
x: 469,
y: 600
}, {
x: 185,
y: 277
}, {
x: 185,
y: 34
}, {
x: -180,
y: 34
}, {
x: -180,
y: 273
}, {
x: -431,
y: 574
} ]
} ],
name: "FloorCut"
}, {
Help: [ {
isGuide: !0,
pointStart: {
x: -269.228,
y: 276
},
pointEnd: {
x: 250.532,
y: 276
}
} ],
name: "Help"
}, {
y: -306,
width: 400,
name: "TriggerMove"
}, {
x: -260,
y: -127,
name: "Role"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -204
}, {
x: 219,
y: -204
}, {
x: 215,
y: -225
}, {
x: 209,
y: -237
}, {
x: 189,
y: -252
}, {
x: 159,
y: -260
}, {
x: 92,
y: -267
}, {
x: 89,
y: -293
}, {
x: 79,
y: -301
}, {
x: 71,
y: -299
}, {
x: 59,
y: -299
}, {
x: 48,
y: -302
}, {
x: 40,
y: -298
}, {
x: 30,
y: -274
}, {
x: 6,
y: -272
}, {
x: 1,
y: -301
}, {
x: -9,
y: -301
}, {
x: -20,
y: -294
}, {
x: -33,
y: -297
}, {
x: -37,
y: -303
}, {
x: -46,
y: -304
}, {
x: -57,
y: -291
}, {
x: -62,
y: -266
}, {
x: -87,
y: -253
}, {
x: -92,
y: -246
}, {
x: -96,
y: -234
}, {
x: -107,
y: -234
}, {
x: -119,
y: -226
}, {
x: -132,
y: -205
}, {
x: -1e3,
y: -203
} ]
} ],
name: "Floor"
}, {
x: 282,
y: -150,
height: 112,
name: "FinishTarget"
}, {
x: 41,
y: 430,
Floor: [ {
vertexes: [ {
x: -26,
y: 145
}, {
x: -34,
y: 143
}, {
x: -43,
y: 139
}, {
x: -53,
y: 123
}, {
x: -71,
y: 129
}, {
x: -81,
y: 131
}, {
x: -92,
y: 130
}, {
x: -111,
y: 119
}, {
x: -123,
y: 98
}, {
x: -142,
y: 95
}, {
x: -154,
y: 84
}, {
x: -158,
y: 75
}, {
x: -157,
y: 63
}, {
x: -157,
y: 54
}, {
x: -167,
y: 47
}, {
x: -174,
y: 32
}, {
x: -176,
y: 16
}, {
x: -175,
y: 1
}, {
x: -170,
y: -11
}, {
x: -163,
y: -18
}, {
x: -165,
y: -27
}, {
x: -168,
y: -40
}, {
x: -160,
y: -60
}, {
x: -154,
y: -65
}, {
x: -147,
y: -68
}, {
x: -137,
y: -69
}, {
x: -133,
y: -81
}, {
x: -126,
y: -89
}, {
x: -99,
y: -101
}, {
x: -96,
y: -125
}, {
x: -92,
y: -132
}, {
x: -85,
y: -137
}, {
x: -79,
y: -137
}, {
x: -74,
y: -133
}, {
x: -70,
y: -100
}, {
x: -63,
y: -102
}, {
x: -63,
y: -115
}, {
x: -60,
y: -129
}, {
x: -55,
y: -134
}, {
x: -48,
y: -137
}, {
x: -44,
y: -136
}, {
x: -39,
y: -124
}, {
x: -36,
y: -106
}, {
x: -10,
y: -108
}, {
x: -5,
y: -125
}, {
x: 0,
y: -134
}, {
x: 6,
y: -137
}, {
x: 14,
y: -136
}, {
x: 18,
y: -133
}, {
x: 22,
y: -124
}, {
x: 29,
y: -134
}, {
x: 36,
y: -137
}, {
x: 41,
y: -135
}, {
x: 47,
y: -129
}, {
x: 50,
y: -103
}, {
x: 84,
y: -99
}, {
x: 118,
y: -96
}, {
x: 149,
y: -87
}, {
x: 170,
y: -71
}, {
x: 174,
y: -62
}, {
x: 174,
y: -42
}, {
x: 169,
y: -29
}, {
x: 150,
y: -15
}, {
x: 148,
y: 20
}, {
x: 144,
y: 46
}, {
x: 132,
y: 87
}, {
x: 125,
y: 91
}, {
x: 113,
y: 82
}, {
x: 99,
y: 90
}, {
x: 77,
y: 93
}, {
x: 70,
y: 108
}, {
x: 56,
y: 121
}, {
x: 41,
y: 127
}, {
x: 30,
y: 127
}, {
x: 18,
y: 124
}, {
x: -7,
y: 142
}, {
x: -16,
y: 145
} ]
} ],
name: "FloorCut"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -185.547,
y: 405.322
},
pointEnd: {
x: 239.59,
y: 399.918
}
} ],
name: "Help"
}, {
x: -248,
y: -203,
name: "Role"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 64,
y: -200
}, {
x: 61,
y: -454
}, {
x: -62,
y: -452
}, {
x: -65,
y: -200
}, {
x: -1e3,
y: -200
} ]
} ],
name: "Floor"
}, {
Floor: [ {
vertexes: [ {
x: -664,
y: 896
}, {
x: 664,
y: 896
}, {
x: 52,
y: 432
}, {
x: 52,
y: 192
}, {
x: -50,
y: 192
}, {
x: -50,
y: 432
} ]
} ],
name: "FloorCut"
}, {
x: 287,
y: -150,
height: 112,
name: "FinishTarget"
}, {
x: -250,
y: 48,
width: 220,
AttributeAniMove: [ {
targetPos: {
x: -150,
y: 48
},
speed: 100
} ],
name: "Move"
}, {
x: 250,
y: 48,
width: 220,
AttributeAniMove: [ {
targetPos: {
x: 150,
y: 48
},
speed: 100
} ],
name: "Move"
}, {
y: -406,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -176.128,
y: 433.965
},
pointEnd: {
x: 176.537,
y: 433.965
}
} ],
name: "Help"
}, {
x: -290,
y: -204,
name: "Role"
} ]
}, {
name: "Level",
ch: [ {
x: -13,
y: 290,
Floor: [ {
vertexes: [ {
x: -44,
y: 217
}, {
x: -43,
y: 209
}, {
x: -46,
y: 205
}, {
x: -55,
y: 198
}, {
x: -68,
y: 193
}, {
x: -85,
y: 188
}, {
x: -97,
y: 184
}, {
x: -108,
y: 175
}, {
x: -116,
y: 159
}, {
x: -121,
y: 139
}, {
x: -121,
y: -12
}, {
x: -119,
y: -22
}, {
x: -113,
y: -29
}, {
x: -102,
y: -34
}, {
x: -94,
y: -33
}, {
x: -86,
y: -32
}, {
x: -81,
y: -26
}, {
x: -77,
y: -18
}, {
x: -77,
y: 104
}, {
x: -71,
y: 110
}, {
x: -65,
y: 110
}, {
x: -63,
y: 107
}, {
x: -63,
y: -191
}, {
x: -61,
y: -203
}, {
x: -53,
y: -213
}, {
x: -44,
y: -218
}, {
x: -22,
y: -216
}, {
x: -12,
y: -208
}, {
x: -6,
y: -194
}, {
x: -6,
y: -39
}, {
x: -5,
y: -34
}, {
x: 1,
y: -34
}, {
x: 7,
y: -38
}, {
x: 7,
y: -199
}, {
x: 11,
y: -205
}, {
x: 15,
y: -210
}, {
x: 25,
y: -216
}, {
x: 42,
y: -216
}, {
x: 52,
y: -211
}, {
x: 60,
y: -203
}, {
x: 64,
y: -194
}, {
x: 64,
y: 109
}, {
x: 72,
y: 110
}, {
x: 76,
y: 104
}, {
x: 76,
y: -21
}, {
x: 82,
y: -32
}, {
x: 92,
y: -37
}, {
x: 103,
y: -37
}, {
x: 111,
y: -34
}, {
x: 118,
y: -27
}, {
x: 121,
y: -23
}, {
x: 123,
y: -18
}, {
x: 123,
y: 144
}, {
x: 120,
y: 154
}, {
x: 114,
y: 167
}, {
x: 107,
y: 179
}, {
x: 102,
y: 185
}, {
x: 95,
y: 188
}, {
x: 82,
y: 190
}, {
x: 57,
y: 195
}, {
x: 43,
y: 205
}, {
x: 42,
y: 217
}, {
x: 42,
y: 228
}, {
x: 56,
y: 246
}, {
x: 77,
y: 257
}, {
x: 150,
y: 284
}, {
x: 271,
y: 304
}, {
x: 494,
y: 330
}, {
x: 494,
y: 544
}, {
x: -404,
y: 544
}, {
x: -404,
y: 324
}, {
x: -167,
y: 285
}, {
x: -95,
y: 266
}, {
x: -69,
y: 249
}, {
x: -57,
y: 240
}, {
x: -47,
y: 228
} ]
} ],
name: "FloorCut"
}, {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -127
}, {
x: 112,
y: -127
}, {
x: 112,
y: -281
}, {
x: 104,
y: -290
}, {
x: 96,
y: -295
}, {
x: 87,
y: -297
}, {
x: 76,
y: -297
}, {
x: 63,
y: -293
}, {
x: 63,
y: -160
}, {
x: 61,
y: -160
}, {
x: 61,
y: -455
}, {
x: 57,
y: -461
}, {
x: 45,
y: -469
}, {
x: 33,
y: -476
}, {
x: 21,
y: -478
}, {
x: 10,
y: -476
}, {
x: -1,
y: -470
}, {
x: -12,
y: -462
}, {
x: -12,
y: -300
}, {
x: -16,
y: -300
}, {
x: -16,
y: -462
}, {
x: -28,
y: -473
}, {
x: -39,
y: -478
}, {
x: -52,
y: -480
}, {
x: -66,
y: -476
}, {
x: -75,
y: -467
}, {
x: -81,
y: -452
}, {
x: -81,
y: -158
}, {
x: -84,
y: -158
}, {
x: -84,
y: -287
}, {
x: -96,
y: -295
}, {
x: -107,
y: -300
}, {
x: -121,
y: -301
}, {
x: -128,
y: -297
}, {
x: -136,
y: -293
}, {
x: -141,
y: -280
}, {
x: -141,
y: -127
}, {
x: -1e3,
y: -127
} ]
} ],
name: "Floor"
}, {
y: -467,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -228.402,
y: 420
},
pointEnd: {
x: 228.402,
y: 420
}
} ],
name: "Help"
}, {
x: 256,
y: -81,
height: 112,
name: "FinishTarget"
}, {
x: -246,
y: -125,
name: "Role"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -135
}, {
x: 241,
y: -135
}, {
x: 241,
y: -248
}, {
x: -241,
y: -248
}, {
x: -241,
y: -135
}, {
x: -1e3,
y: -135
} ]
} ],
name: "Floor"
}, {
x: 305,
y: -86,
height: 112,
name: "FinishTarget"
}, {
x: 56,
y: 439,
Floor: [ {
vertexes: [ {
x: -225,
y: 212
}, {
x: -237,
y: 170
}, {
x: -252,
y: 118
}, {
x: -269,
y: 59
}, {
x: -277,
y: 28
}, {
x: -282,
y: 13
}, {
x: -284,
y: 4
}, {
x: -289,
y: -15
}, {
x: -290,
y: -26
}, {
x: -272,
y: -30
}, {
x: -247,
y: -31
}, {
x: -158,
y: -31
}, {
x: -159,
y: -88
}, {
x: -272,
y: -88
}, {
x: -274,
y: -86
}, {
x: -267,
y: -111
}, {
x: -260,
y: -127
}, {
x: -256,
y: -136
}, {
x: -252,
y: -142
}, {
x: -249,
y: -147
}, {
x: -239,
y: -164
}, {
x: -232,
y: -172
}, {
x: -222,
y: -186
}, {
x: -213,
y: -194
}, {
x: -194,
y: -206
}, {
x: 97,
y: -206
}, {
x: 118,
y: -201
}, {
x: 130,
y: -194
}, {
x: 136,
y: -189
}, {
x: 142,
y: -182
}, {
x: 169,
y: -98
}, {
x: 169,
y: -88
}, {
x: -100,
y: -88
}, {
x: -100,
y: -33
}, {
x: 58,
y: -31
}, {
x: 91,
y: -25
}, {
x: 86,
y: -5
}, {
x: 75,
y: 37
}, {
x: 48,
y: 104
}, {
x: 43,
y: 118
}, {
x: 26,
y: 158
}, {
x: 18,
y: 177
}, {
x: 5,
y: 212
}, {
x: -124,
y: 549
} ]
} ],
name: "FloorCut"
}, {
x: 178,
y: -253,
ControllerUD: [ {
target: {
nodeId: 4
}
} ],
name: "ControllerUD"
}, {
x: -134,
y: -236,
ControlTarget: [ {
targetPos: {
x: -133.337,
y: -153.516
}
} ],
name: "ControlTarget"
}, {
Help: [ {
pointStart: {
x: 0,
y: 388.582
},
pointEnd: {
x: 0,
y: 201.036
}
} ],
name: "Help"
}, {
x: -300,
y: -142,
name: "Role"
}, {
x: 184,
y: -203,
width: 112,
name: "TriggerMove"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 147,
y: -200
}, {
x: 121,
y: -224
}, {
x: 121,
y: -482
}, {
x: -137,
y: -482
}, {
x: -137,
y: -234
}, {
x: -220,
y: -234
}, {
x: -220,
y: -202
}, {
x: -1e3,
y: -202
} ]
} ],
name: "Floor"
}, {
x: -4,
y: 372,
width: 400,
height: 400,
Floor: [ {
vertexes: [ {
x: -145,
y: 200
}, {
x: -162,
y: 182
}, {
x: -171,
y: 167
}, {
x: -194,
y: 139
}, {
x: -195,
y: 124
}, {
x: -200,
y: 118
}, {
x: -200,
y: 112
}, {
x: -191,
y: 104
}, {
x: -176,
y: 103
}, {
x: -169,
y: 95
}, {
x: -151,
y: 94
}, {
x: -146,
y: 86
}, {
x: -125,
y: 84
}, {
x: -116,
y: 74
}, {
x: -94,
y: 76
}, {
x: -84,
y: 68
}, {
x: -65,
y: 69
}, {
x: -53,
y: 65
}, {
x: -61,
y: 29
}, {
x: -58,
y: 4
}, {
x: -56,
y: -22
}, {
x: -52,
y: -62
}, {
x: -52,
y: -77
}, {
x: -50,
y: -87
}, {
x: -41,
y: -174
}, {
x: -31,
y: -193
}, {
x: -18,
y: -200
}, {
x: -8,
y: -199
}, {
x: 3,
y: -183
}, {
x: 1,
y: -160
}, {
x: -15,
y: -87
}, {
x: -15,
y: -36
}, {
x: -15,
y: -26
}, {
x: -9,
y: 61
}, {
x: 0,
y: 62
}, {
x: 7,
y: 60
}, {
x: 8,
y: 56
}, {
x: 38,
y: -67
}, {
x: 42,
y: -87
}, {
x: 42,
y: -127
}, {
x: 42,
y: -157
}, {
x: 39,
y: -189
}, {
x: 43,
y: -194
}, {
x: 57,
y: -194
}, {
x: 74,
y: -186
}, {
x: 80,
y: -174
}, {
x: 83,
y: -161
}, {
x: 89,
y: -161
}, {
x: 93,
y: -157
}, {
x: 93,
y: -146
}, {
x: 91,
y: -122
}, {
x: 82,
y: -109
}, {
x: 75,
y: -84
}, {
x: 74,
y: -69
}, {
x: 73,
y: -59
}, {
x: 73,
y: -6
}, {
x: 58,
y: 34
}, {
x: 55,
y: 67
}, {
x: 62,
y: 68
}, {
x: 78,
y: 65
}, {
x: 86,
y: 67
}, {
x: 91,
y: 73
}, {
x: 108,
y: 73
}, {
x: 115,
y: 79
}, {
x: 139,
y: 79
}, {
x: 145,
y: 89
}, {
x: 161,
y: 87
}, {
x: 170,
y: 89
}, {
x: 174,
y: 94
}, {
x: 185,
y: 93
}, {
x: 200,
y: 99
}, {
x: 192,
y: 131
}, {
x: 183,
y: 145
}, {
x: 166,
y: 161
}, {
x: 159,
y: 175
}, {
x: 150,
y: 187
}, {
x: 143,
y: 200
}, {
x: 110,
y: 253
}, {
x: 102,
y: 282
}, {
x: 89,
y: 357
}, {
x: 89,
y: 396
}, {
x: 242,
y: 547
}, {
x: -237,
y: 546
}, {
x: -86,
y: 397
}, {
x: -88,
y: 352
}, {
x: -103,
y: 283
}, {
x: -116,
y: 247
} ]
} ],
name: "FloorCut"
}, {
x: 219,
y: -158,
height: 112,
name: "FinishTarget"
}, {
x: 16,
y: -404,
name: "TriggerMove"
}, {
x: -185,
y: -238,
name: "ToolBounce"
}, {
x: -283,
y: -210,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -222.118,
y: 458
},
pointEnd: {
x: 223.091,
y: 458
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -997,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -220
}, {
x: 77,
y: -220
}, {
x: 77,
y: -290
}, {
x: -28,
y: -290
}, {
x: -28,
y: -179
}, {
x: -997,
y: -179
} ]
} ],
name: "Floor"
}, {
x: 222,
y: -171,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -580,
y: 855
}, {
x: 548,
y: 855
}, {
x: 66,
y: 367
}, {
x: 66,
y: 258
}, {
x: -16,
y: 258
}, {
x: -16,
y: 367
} ]
} ],
name: "FloorCut"
}, {
x: 15,
y: 429,
width: 20,
height: 300,
AttributeAniSwing: [ {
speed: -75
} ],
name: "Swing"
}, {
x: 25,
y: -285,
width: 122,
name: "TriggerMove"
}, {
x: -191,
y: -181,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -105.075,
y: 362.036
},
pointEnd: {
x: 105.075,
y: 362.036
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -172
}, {
x: 196,
y: -172
}, {
x: 190,
y: -179
}, {
x: 190,
y: -218
}, {
x: 181,
y: -254
}, {
x: 165,
y: -284
}, {
x: 141,
y: -319
}, {
x: 114,
y: -348
}, {
x: 85,
y: -366
}, {
x: 49,
y: -381
}, {
x: 3,
y: -391
}, {
x: -43,
y: -384
}, {
x: -78,
y: -374
}, {
x: -114,
y: -355
}, {
x: -146,
y: -328
}, {
x: -167,
y: -300
}, {
x: -190,
y: -250
}, {
x: -198,
y: -216
}, {
x: -201,
y: -185
}, {
x: -206,
y: -179
}, {
x: -1e3,
y: -179
} ]
} ],
name: "Floor"
}, {
x: 259,
y: -126,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -444,
y: 829
}, {
x: 459,
y: 829
}, {
x: 459,
y: 280
}, {
x: 180,
y: 280
}, {
x: 177,
y: 276
}, {
x: 171,
y: 220
}, {
x: 161,
y: 184
}, {
x: 148,
y: 156
}, {
x: 126,
y: 123
}, {
x: 99,
y: 99
}, {
x: 72,
y: 84
}, {
x: 51,
y: 75
}, {
x: 24,
y: 69
}, {
x: 0,
y: 68
}, {
x: -26,
y: 69
}, {
x: -50,
y: 73
}, {
x: -75,
y: 80
}, {
x: -96,
y: 92
}, {
x: -121,
y: 111
}, {
x: -140,
y: 131
}, {
x: -155,
y: 154
}, {
x: -169,
y: 180
}, {
x: -177,
y: 204
}, {
x: -183,
y: 229
}, {
x: -186,
y: 254
}, {
x: -187,
y: 280
}, {
x: -445,
y: 280
} ]
} ],
name: "FloorCut"
}, {
y: -364,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
isGuide: !0,
pointStart: {
x: -227.788,
y: 262.535
},
pointEnd: {
x: 6,
y: 323.021
}
} ],
name: "Help"
}, {
Help: [ {
isGuide: !0,
index: 1,
pointStart: {
x: 227.788,
y: 262.535
},
pointEnd: {
x: 6,
y: 323.021
}
} ],
name: "Help"
}, {
x: 2,
y: -68,
PickKey: [ {
target: {
nodeId: 7
}
} ],
name: "PickKey"
}, {
x: 200,
y: -74,
name: "DoorLock"
}, {
x: -259,
y: -180,
name: "Role"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -999,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -354
}, {
x: 218,
y: -354
}, {
x: 218,
y: -378
}, {
x: 195,
y: -378
}, {
x: 192,
y: -424
}, {
x: 122,
y: -455
}, {
x: 118,
y: -498
}, {
x: 49,
y: -498
}, {
x: 41,
y: -442
}, {
x: 9,
y: -438
}, {
x: -10,
y: -350
}, {
x: -10,
y: -534
}, {
x: -126,
y: -534
}, {
x: -126,
y: -348
}, {
x: -129,
y: -339
}, {
x: -138,
y: -336
}, {
x: -999,
y: -336
} ]
} ],
name: "Floor"
}, {
x: 297,
y: -310,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -119,
y: 829
}, {
x: 202,
y: 829
}, {
x: 202,
y: 277
}, {
x: 199,
y: 271
}, {
x: 203,
y: 224
}, {
x: 181,
y: 223
}, {
x: 179,
y: 175
}, {
x: 108,
y: 141
}, {
x: 103,
y: 110
}, {
x: 55,
y: 108
}, {
x: 48,
y: 154
}, {
x: 3,
y: 160
}, {
x: 1,
y: 242
}, {
x: -2,
y: 251
}, {
x: -9,
y: 251
}, {
x: -15,
y: 176
}, {
x: -91,
y: 199
}, {
x: -119,
y: 246
} ]
} ],
name: "FloorCut"
}, {
x: 108,
y: -426,
width: 237,
name: "TriggerMove"
}, {
x: 82,
y: -502,
ControllerUD: [ {
target: {
nodeId: 5
}
} ],
name: "ControllerUD"
}, {
x: -69,
y: -522,
scaleX: .55,
scaleY: .75,
ControlTarget: [ {
targetPos: {
x: -68.776,
y: -350.544
}
} ],
name: "ControlTarget"
}, {
x: -230,
y: -344,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -3.373,
y: 247.936
},
pointEnd: {
x: 232.756,
y: 247.936
}
} ],
name: "Help"
} ]
}, {
y: 1,
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 164,
y: -200
}, {
x: 164,
y: -280
}, {
x: -164,
y: -280
}, {
x: -164,
y: -200
}, {
x: -1e3,
y: -200
} ]
} ],
name: "Floor"
}, {
x: 259,
y: -156,
height: 112,
name: "FinishTarget"
}, {
y: 401,
Floor: [ {
vertexes: [ {
x: 88,
y: 163
}, {
x: 62,
y: 152
}, {
x: 53,
y: 142
}, {
x: 49,
y: 131
}, {
x: 48,
y: -8
}, {
x: 45,
y: -48
}, {
x: 33,
y: -62
}, {
x: 31,
y: -62
}, {
x: 23,
y: -69
}, {
x: 6,
y: -74
}, {
x: -20,
y: -75
}, {
x: -30,
y: -73
}, {
x: -43,
y: -62
}, {
x: -50,
y: -51
}, {
x: -52,
y: -27
}, {
x: -56,
y: 118
}, {
x: -58,
y: 134
}, {
x: -63,
y: 146
}, {
x: -71,
y: 154
}, {
x: -84,
y: 160
}, {
x: -117,
y: 160
}, {
x: -130,
y: 154
}, {
x: -141,
y: 143
}, {
x: -146,
y: 134
}, {
x: -149,
y: 122
}, {
x: -146,
y: -57
}, {
x: -143,
y: -70
}, {
x: -132,
y: -95
}, {
x: -128,
y: -97
}, {
x: -128,
y: -100
}, {
x: -119,
y: -110
}, {
x: -119,
y: -113
}, {
x: -104,
y: -127
}, {
x: -102,
y: -127
}, {
x: -93,
y: -136
}, {
x: -90,
y: -136
}, {
x: -89,
y: -139
}, {
x: -71,
y: -149
}, {
x: -67,
y: -149
}, {
x: -50,
y: -157
}, {
x: -17,
y: -164
}, {
x: 37,
y: -162
}, {
x: 70,
y: -153
}, {
x: 85,
y: -145
}, {
x: 87,
y: -143
}, {
x: 97,
y: -138
}, {
x: 100,
y: -134
}, {
x: 102,
y: -134
}, {
x: 120,
y: -116
}, {
x: 120,
y: -113
}, {
x: 130,
y: -103
}, {
x: 140,
y: -80
}, {
x: 144,
y: -66
}, {
x: 148,
y: 86
}, {
x: 146,
y: 134
}, {
x: 140,
y: 147
}, {
x: 124,
y: 159
}, {
x: 111,
y: 163
} ]
} ],
name: "FloorCut"
}, {
y: -128,
PickKey: [ {
target: {
nodeId: 5
}
} ],
name: "PickKey"
}, {
y: -253,
name: "TriggerMove"
}, {
x: 176,
y: -101,
name: "DoorLock"
}, {
x: -283,
y: -209,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -170.377,
y: 304.938
},
pointEnd: {
x: 170.377,
y: 304.938
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -78
}, {
x: 191,
y: -78
}, {
x: 186,
y: -142
}, {
x: 177,
y: -228
}, {
x: 167,
y: -279
}, {
x: 160,
y: -313
}, {
x: 147,
y: -336
}, {
x: 133,
y: -346
}, {
x: 112,
y: -352
}, {
x: 99,
y: -361
}, {
x: 75,
y: -388
}, {
x: 58,
y: -408
}, {
x: 44,
y: -435
}, {
x: 30,
y: -441
}, {
x: -16,
y: -445
}, {
x: -47,
y: -445
}, {
x: -78,
y: -437
}, {
x: -107,
y: -425
}, {
x: -133,
y: -407
}, {
x: -158,
y: -375
}, {
x: -171,
y: -349
}, {
x: -188,
y: -314
}, {
x: -200,
y: -277
}, {
x: -208,
y: -211
}, {
x: -210,
y: -166
}, {
x: -211,
y: -125
}, {
x: -1e3,
y: -125
} ]
} ],
name: "Floor"
}, {
x: 251,
y: -24,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -236,
y: 885
}, {
x: 238,
y: 885
}, {
x: 190,
y: 531
}, {
x: 176,
y: 434
}, {
x: 172,
y: 361
}, {
x: 162,
y: 254
}, {
x: 155,
y: 213
}, {
x: 148,
y: 192
}, {
x: 142,
y: 175
}, {
x: 133,
y: 168
}, {
x: 110,
y: 159
}, {
x: 95,
y: 148
}, {
x: 81,
y: 134
}, {
x: 63,
y: 111
}, {
x: 48,
y: 94
}, {
x: 29,
y: 67
}, {
x: 6,
y: 65
}, {
x: -25,
y: 64
}, {
x: -53,
y: 68
}, {
x: -79,
y: 73
}, {
x: -97,
y: 78
}, {
x: -118,
y: 92
}, {
x: -133,
y: 106
}, {
x: -150,
y: 129
}, {
x: -165,
y: 167
}, {
x: -180,
y: 225
}, {
x: -187,
y: 272
}, {
x: -190,
y: 307
}, {
x: -190,
y: 385
}, {
x: -193,
y: 417
}, {
x: -198,
y: 464
}, {
x: -213,
y: 548
}, {
x: -222,
y: 629
}, {
x: -234,
y: 813
} ]
} ],
name: "FloorCut"
}, {
x: -254,
y: -127,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -252.103,
y: 360
},
pointEnd: {
x: 218.173,
y: 443.372
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -129
}, {
x: 196,
y: -129
}, {
x: 192,
y: -194
}, {
x: 181,
y: -246
}, {
x: 159,
y: -326
}, {
x: 159,
y: -407
}, {
x: 149,
y: -504
}, {
x: 58,
y: -504
}, {
x: 30,
y: -406
}, {
x: 6,
y: -336
}, {
x: -18,
y: -328
}, {
x: -71,
y: -308
}, {
x: -94,
y: -272
}, {
x: -112,
y: -134
}, {
x: -120,
y: -67
}, {
x: -188,
y: -67
}, {
x: -188,
y: -31
}, {
x: -1e3,
y: -31
} ]
} ],
name: "Floor"
}, {
x: 262,
y: -76,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -346,
y: 951
}, {
x: 444,
y: 951
}, {
x: 232,
y: 597
}, {
x: 225,
y: 599
}, {
x: 195,
y: 544
}, {
x: 197,
y: 521
}, {
x: 180,
y: 498
}, {
x: 180,
y: 481
}, {
x: 173,
y: 415
}, {
x: 158,
y: 347
}, {
x: 144,
y: 306
}, {
x: 144,
y: 143
}, {
x: 138,
y: 137
}, {
x: 114,
y: 132
}, {
x: 84,
y: 130
}, {
x: 68,
y: 132
}, {
x: 65,
y: 137
}, {
x: 39,
y: 244
}, {
x: 21,
y: 293
}, {
x: 11,
y: 304
}, {
x: -39,
y: 457
}, {
x: -47,
y: 462
}, {
x: -74,
y: 470
}, {
x: -118,
y: 477
}, {
x: -251,
y: 584
}, {
x: -305,
y: 682
}, {
x: -334,
y: 778
} ]
} ],
name: "FloorCut"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
x: -158,
y: -70,
name: "ToolBounce"
}, {
x: -248,
y: -31,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -101.352,
y: 395
},
pointEnd: {
x: 306.174,
y: 575
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -267
}, {
x: 297,
y: -267
}, {
x: 291,
y: -279
}, {
x: 285,
y: -321
}, {
x: 277,
y: -349
}, {
x: 265,
y: -389
}, {
x: 250,
y: -420
}, {
x: 239,
y: -427
}, {
x: 213,
y: -431
}, {
x: 189,
y: -427
}, {
x: 167,
y: -421
}, {
x: 150,
y: -324
}, {
x: 128,
y: -253
}, {
x: 107,
y: -221
}, {
x: 88,
y: -193
}, {
x: 58,
y: -182
}, {
x: 42,
y: -178
}, {
x: 19,
y: -173
}, {
x: -4,
y: -172
}, {
x: -13,
y: -173
}, {
x: -19,
y: -177
}, {
x: -27,
y: -224
}, {
x: -33,
y: -297
}, {
x: -46,
y: -358
}, {
x: -66,
y: -397
}, {
x: -79,
y: -409
}, {
x: -102,
y: -417
}, {
x: -120,
y: -419
}, {
x: -138,
y: -417
}, {
x: -161,
y: -407
}, {
x: -197,
y: -341
}, {
x: -211,
y: -290
}, {
x: -223,
y: -232
}, {
x: -237,
y: -173
}, {
x: -247,
y: -88
}, {
x: -1e3,
y: -88
} ]
} ],
name: "Floor"
}, {
x: 325,
y: -222,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -306,
y: 840
}, {
x: 482,
y: 840
}, {
x: 347,
y: 624
}, {
x: 290,
y: 374
}, {
x: 282,
y: 338
}, {
x: 272,
y: 286
}, {
x: 259,
y: 231
}, {
x: 243,
y: 194
}, {
x: 231,
y: 190
}, {
x: 213,
y: 186
}, {
x: 186,
y: 186
}, {
x: 178,
y: 193
}, {
x: 171,
y: 206
}, {
x: 166,
y: 225
}, {
x: 155,
y: 273
}, {
x: 147,
y: 314
}, {
x: 138,
y: 352
}, {
x: 123,
y: 387
}, {
x: 109,
y: 412
}, {
x: 91,
y: 428
}, {
x: 37,
y: 449
}, {
x: -10,
y: 459
}, {
x: -21,
y: 457
}, {
x: -28,
y: 448
}, {
x: -33,
y: 428
}, {
x: -41,
y: 326
}, {
x: -51,
y: 267
}, {
x: -61,
y: 235
}, {
x: -70,
y: 222
}, {
x: -87,
y: 210
}, {
x: -119,
y: 206
}, {
x: -137,
y: 205
}, {
x: -151,
y: 207
}, {
x: -165,
y: 221
}, {
x: -177,
y: 239
}, {
x: -190,
y: 267
}, {
x: -196,
y: 292
}, {
x: -204,
y: 322
}, {
x: -210,
y: 365
}, {
x: -222,
y: 440
}, {
x: -230,
y: 533
} ]
} ],
name: "FloorCut"
}, {
x: 2,
y: 82,
width: 401,
name: "TouchMoveLine"
}, {
x: -199,
y: 82,
AttributeAniTouchMove: [ {
originPos: {
x: -198.526,
y: 82.364
},
targetPos: {
x: 203.256,
y: 82.364
},
nodeLine: {
nodeId: 3
}
} ],
name: "TouchMove"
}, {
x: -122,
y: -317,
width: 223,
name: "TriggerMove"
}, {
x: 210,
y: -354,
width: 223,
name: "TriggerMove"
}, {
x: -295,
y: -85,
name: "Role"
}, {
Help: [ {
isGuide: !0,
pointStart: {
x: -195.024,
y: 84.793
},
pointEnd: {
x: 45.862,
y: 84.793
}
} ],
name: "Help"
}, {
Help: [ {
pointStart: {
x: -279.816,
y: 495.366
},
pointEnd: {
x: 6.435,
y: 446.567
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: 59.888,
y: 422.432
},
pointEnd: {
x: 334.7,
y: 354.027
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -996,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -155
}, {
x: 100,
y: -155
}, {
x: 90,
y: -232
}, {
x: 105,
y: -355
}, {
x: 91,
y: -476
}, {
x: 115,
y: -594
}, {
x: 107,
y: -611
}, {
x: -67,
y: -611
}, {
x: -85,
y: -568
}, {
x: -85,
y: -449
}, {
x: -74,
y: -374
}, {
x: -66,
y: -344
}, {
x: -62,
y: -324
}, {
x: -67,
y: -311
}, {
x: -85,
y: -294
}, {
x: -153,
y: -178
}, {
x: -153,
y: -137
}, {
x: -217,
y: -130
}, {
x: -996,
y: -130
} ]
} ],
name: "Floor"
}, {
x: 190,
y: -118,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: 107,
y: 725
}, {
x: 153,
y: 629
}, {
x: 157,
y: 619
}, {
x: 162,
y: 607
}, {
x: 163,
y: 601
}, {
x: 163,
y: 595
}, {
x: 161,
y: 589
}, {
x: 153,
y: 583
}, {
x: 145,
y: 579
}, {
x: 134,
y: 577
}, {
x: 129,
y: 575
}, {
x: 109,
y: 531
}, {
x: 105,
y: 508
}, {
x: 86,
y: 465
}, {
x: 69,
y: 434
}, {
x: 68,
y: 421
}, {
x: 59,
y: 409
}, {
x: 64,
y: 362
}, {
x: 73,
y: 314
}, {
x: 73,
y: 281
}, {
x: 62,
y: 192
}, {
x: 34,
y: 62
}, {
x: 36,
y: 37
}, {
x: 42,
y: 12
}, {
x: 55,
y: -15
}, {
x: 66,
y: -25
}, {
x: 63,
y: -33
}, {
x: 29,
y: -33
}, {
x: 22,
y: -31
}, {
x: 18,
y: -29
}, {
x: 16,
y: -27
}, {
x: 19,
y: -20
}, {
x: 19,
y: -11
}, {
x: 16,
y: -8
}, {
x: 10,
y: 8
}, {
x: 5,
y: 11
}, {
x: 0,
y: 11
}, {
x: -5,
y: 9
}, {
x: -7,
y: 6
}, {
x: -8,
y: 1
}, {
x: -8,
y: -5
}, {
x: -12,
y: -6
}, {
x: -10,
y: -11
}, {
x: -8,
y: -20
}, {
x: 8,
y: -27
}, {
x: 16,
y: -37
}, {
x: 13,
y: -42
}, {
x: -37,
y: -42
}, {
x: -54,
y: -31
}, {
x: -57,
y: -15
}, {
x: -55,
y: -5
}, {
x: -50,
y: 4
}, {
x: -50,
y: 26
}, {
x: -59,
y: 50
}, {
x: -62,
y: 56
}, {
x: -61,
y: 61
}, {
x: -55,
y: 67
}, {
x: -42,
y: 77
}, {
x: -37,
y: 86
}, {
x: -33,
y: 150
}, {
x: -33,
y: 181
}, {
x: -31,
y: 208
}, {
x: -24,
y: 246
}, {
x: -12,
y: 271
}, {
x: -8,
y: 281
}, {
x: -8,
y: 291
}, {
x: -10,
y: 301
}, {
x: -13,
y: 305
}, {
x: -72,
y: 360
}, {
x: -105,
y: 404
}, {
x: -129,
y: 433
}, {
x: -144,
y: 452
}, {
x: -151,
y: 469
}, {
x: -152,
y: 488
}, {
x: -150,
y: 508
}, {
x: -141,
y: 527
}, {
x: -127,
y: 540
}, {
x: -114,
y: 551
}, {
x: -103,
y: 556
}, {
x: -70,
y: 564
}, {
x: -32,
y: 582
}, {
x: -11,
y: 617
}, {
x: 14,
y: 685
}, {
x: 35,
y: 725
} ]
} ],
name: "FloorCut"
}, {
x: -255,
y: -140,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -202.031,
y: 430
},
pointEnd: {
x: 202.031,
y: 430
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 149,
y: -200
}, {
x: 149,
y: -431
}, {
x: -146,
y: -431
}, {
x: -146,
y: -239
}, {
x: -213,
y: -239
}, {
x: -213,
y: -203
}, {
x: -1e3,
y: -203
} ]
} ],
name: "Floor"
}, {
x: 245,
y: -150,
height: 112,
name: "FinishTarget"
}, {
y: -368,
width: 400,
name: "TriggerMove"
}, {
y: 340,
Floor: [ {
vertexes: [ {
x: -56,
y: 235
}, {
x: -65,
y: 231
}, {
x: -70,
y: 225
}, {
x: -73,
y: 216
}, {
x: -73,
y: 206
}, {
x: -72,
y: 198
}, {
x: -66,
y: 189
}, {
x: -57,
y: 180
}, {
x: -57,
y: 172
}, {
x: -88,
y: 108
}, {
x: -94,
y: 81
}, {
x: -94,
y: 46
}, {
x: -85,
y: 16
}, {
x: -58,
y: -16
}, {
x: -51,
y: -20
}, {
x: -47,
y: -34
}, {
x: -35,
y: -35
}, {
x: -31,
y: -32
}, {
x: -30,
y: -36
}, {
x: -53,
y: -109
}, {
x: -88,
y: -182
}, {
x: -99,
y: -197
}, {
x: -136,
y: -218
}, {
x: -142,
y: -224
}, {
x: -143,
y: -232
}, {
x: -119,
y: -235
}, {
x: -73,
y: -232
}, {
x: -66,
y: -223
}, {
x: -64,
y: -211
}, {
x: -11,
y: -135
}, {
x: -1,
y: -114
}, {
x: 3,
y: -113
}, {
x: 7,
y: -103
}, {
x: 48,
y: -52
}, {
x: 52,
y: -59
}, {
x: 52,
y: -69
}, {
x: 47,
y: -110
}, {
x: 38,
y: -133
}, {
x: 28,
y: -191
}, {
x: 23,
y: -200
}, {
x: 22,
y: -210
}, {
x: 28,
y: -216
}, {
x: 50,
y: -220
}, {
x: 94,
y: -217
}, {
x: 99,
y: -209
}, {
x: 96,
y: -200
}, {
x: 65,
y: -185
}, {
x: 64,
y: -182
}, {
x: 77,
y: -139
}, {
x: 108,
y: -79
}, {
x: 126,
y: -25
}, {
x: 133,
y: -16
}, {
x: 141,
y: -16
}, {
x: 144,
y: -12
}, {
x: 141,
y: -3
}, {
x: 141,
y: 26
}, {
x: 124,
y: 55
}, {
x: 124,
y: 101
}, {
x: 108,
y: 137
}, {
x: 87,
y: 164
}, {
x: 85,
y: 182
}, {
x: 92,
y: 191
}, {
x: 96,
y: 198
}, {
x: 98,
y: 202
}, {
x: 98,
y: 207
}, {
x: 98,
y: 213
}, {
x: 97,
y: 215
}, {
x: 96,
y: 219
}, {
x: 94,
y: 223
}, {
x: 93,
y: 227
}, {
x: 89,
y: 230
}, {
x: 85,
y: 233
}, {
x: 78,
y: 235
}, {
x: 68,
y: 234
}, {
x: 59,
y: 231
}, {
x: 46,
y: 234
}, {
x: 36,
y: 236
}, {
x: 26,
y: 237
}, {
x: 13,
y: 237
}, {
x: 2,
y: 235
}, {
x: -7,
y: 233
}, {
x: -17,
y: 229
}, {
x: -36,
y: 234
}, {
x: -47,
y: 235
} ]
} ],
name: "FloorCut"
}, {
x: 2,
y: 0,
width: 436,
name: "TouchMoveLine"
}, {
x: 0,
y: 0,
AttributeAniTouchMove: [ {
originPos: {
x: -215.991,
y: 0
},
targetPos: {
x: 220.554,
y: 0
},
nodeLine: {
nodeId: 4
}
} ],
name: "TouchMove"
}, {
x: -181,
y: -243,
name: "ToolBounce"
}, {
x: -274,
y: -203,
name: "Role"
}, {
Help: [ {
pointStart: {
x: 0,
y: 0
},
pointEnd: {
x: 224.568,
y: 0
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: -136.242,
y: 350
},
pointEnd: {
x: 169.284,
y: 350
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 998,
y: -127
}, {
x: 195,
y: -125
}, {
x: 196,
y: -152
}, {
x: 137,
y: -239
}, {
x: 137,
y: -368
}, {
x: -133,
y: -369
}, {
x: -135,
y: -242
}, {
x: -192,
y: -153
}, {
x: -201,
y: -125
}, {
x: -999,
y: -119
} ]
} ],
name: "Floor"
}, {
x: 251,
y: -77,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: 95,
y: 563
}, {
x: -390,
y: 559
}, {
x: -391,
y: 887
}, {
x: 458,
y: 886
}, {
x: 462,
y: 563
}, {
x: 183,
y: 564
}, {
x: 182,
y: 271
}, {
x: 132,
y: 198
}, {
x: 125,
y: 181
}, {
x: 125,
y: 62
}, {
x: -123,
y: 62
}, {
x: -124,
y: 184
}, {
x: -151,
y: 230
}, {
x: -180,
y: 271
}, {
x: -190,
y: 289
}, {
x: -194,
y: 304
}, {
x: -194,
y: 316
}, {
x: -193,
y: 321
}, {
x: -191,
y: 325
}, {
x: -185,
y: 329
}, {
x: -180,
y: 331
}, {
x: -171,
y: 333
}, {
x: 13,
y: 334
}, {
x: 50,
y: 339
}, {
x: 76,
y: 346
}, {
x: 88,
y: 356
}, {
x: 94,
y: 365
} ]
} ],
name: "FloorCut"
}, {
y: -305,
width: 400,
name: "TriggerMove"
}, {
x: -253,
y: -129,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -235.579,
y: 302
},
pointEnd: {
x: 235.579,
y: 302
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -142
}, {
x: 184,
y: -142
}, {
x: 184,
y: -425
}, {
x: 98,
y: -425
}, {
x: 98,
y: -172
}, {
x: 46,
y: -172
}, {
x: 46,
y: -425
}, {
x: -54,
y: -425
}, {
x: -54,
y: -172
}, {
x: -99,
y: -172
}, {
x: -99,
y: -425
}, {
x: -192,
y: -425
}, {
x: -192,
y: -142
}, {
x: -1e3,
y: -142
} ]
} ],
name: "Floor"
}, {
x: 261,
y: -95,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -36,
y: 843
}, {
x: 46,
y: 843
}, {
x: 46,
y: 573
}, {
x: 55,
y: 565
}, {
x: 77,
y: 559
}, {
x: 102,
y: 548
}, {
x: 122,
y: 533
}, {
x: 140,
y: 516
}, {
x: 157,
y: 494
}, {
x: 168,
y: 474
}, {
x: 175,
y: 453
}, {
x: 172,
y: 443
}, {
x: 172,
y: 176
}, {
x: 167,
y: 171
}, {
x: 163,
y: 167
}, {
x: 157,
y: 162
}, {
x: 150,
y: 159
}, {
x: 137,
y: 157
}, {
x: 127,
y: 158
}, {
x: 121,
y: 160
}, {
x: 113,
y: 164
}, {
x: 103,
y: 172
}, {
x: 103,
y: 416
}, {
x: 96,
y: 422
}, {
x: 40,
y: 418
}, {
x: 36,
y: 413
}, {
x: 36,
y: 179
}, {
x: 27,
y: 169
}, {
x: 10,
y: 160
}, {
x: 1,
y: 157
}, {
x: -12,
y: 157
}, {
x: -21,
y: 159
}, {
x: -29,
y: 164
}, {
x: -37,
y: 169
}, {
x: -42,
y: 174
}, {
x: -44,
y: 184
}, {
x: -44,
y: 411
}, {
x: -49,
y: 418
}, {
x: -79,
y: 421
}, {
x: -108,
y: 421
}, {
x: -111,
y: 417
}, {
x: -111,
y: 173
}, {
x: -120,
y: 164
}, {
x: -131,
y: 160
}, {
x: -145,
y: 158
}, {
x: -157,
y: 158
}, {
x: -166,
y: 162
}, {
x: -176,
y: 170
}, {
x: -180,
y: 176
}, {
x: -182,
y: 181
}, {
x: -182,
y: 441
}, {
x: -187,
y: 455
}, {
x: -177,
y: 485
}, {
x: -163,
y: 502
}, {
x: -148,
y: 519
}, {
x: -131,
y: 531
}, {
x: -112,
y: 541
}, {
x: -97,
y: 548
}, {
x: -69,
y: 559
}, {
x: -41,
y: 568
}, {
x: -36,
y: 575
} ]
} ],
name: "FloorCut"
}, {
x: -27,
y: 82,
width: 311,
name: "TouchMoveLine"
}, {
x: 129,
y: 82,
AttributeAniTouchMove: [ {
originPos: {
x: 129.882,
y: 82.036
},
targetPos: {
x: -181.962,
y: 82.036
},
nodeLine: {
nodeId: 3
}
} ],
name: "TouchMove"
}, {
x: -76,
y: -391,
width: 277,
name: "TriggerMove"
}, {
x: 148,
y: -391,
width: 150,
name: "TriggerMove"
}, {
x: -264,
y: -146,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -223.046,
y: 414.254
},
pointEnd: {
x: 70.686,
y: 414.254
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: 134.715,
y: 82.121
},
pointEnd: {
x: -182.696,
y: 82.121
}
} ],
name: "Help"
}, {
Help: [ {
index: 2,
pointStart: {
x: 74.921,
y: 405.464
},
pointEnd: {
x: 202.417,
y: 455
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -143
}, {
x: 170,
y: -148
}, {
x: 169,
y: -174
}, {
x: 163,
y: -215
}, {
x: 154,
y: -262
}, {
x: 138,
y: -297
}, {
x: 110,
y: -330
}, {
x: 65,
y: -354
}, {
x: 18,
y: -366
}, {
x: -23,
y: -366
}, {
x: -67,
y: -354
}, {
x: -105,
y: -333
}, {
x: -129,
y: -311
}, {
x: -142,
y: -290
}, {
x: -149,
y: -275
}, {
x: -157,
y: -255
}, {
x: -161,
y: -241
}, {
x: -170,
y: -220
}, {
x: -173,
y: -203
}, {
x: -1e3,
y: -203
} ]
} ],
name: "Floor"
}, {
x: 245,
y: -99,
height: 112,
name: "FinishTarget"
}, {
y: 331,
Floor: [ {
vertexes: [ {
x: 100,
y: 165
}, {
x: 75,
y: 154
}, {
x: 56,
y: 136
}, {
x: 43,
y: 138
}, {
x: 27,
y: 144
}, {
x: -13,
y: 146
}, {
x: -36,
y: 143
}, {
x: -55,
y: 136
}, {
x: -61,
y: 131
}, {
x: -68,
y: 128
}, {
x: -74,
y: 128
}, {
x: -87,
y: 139
}, {
x: -96,
y: 149
}, {
x: -106,
y: 154
}, {
x: -124,
y: 154
}, {
x: -127,
y: 151
}, {
x: -130,
y: 136
}, {
x: -130,
y: 104
}, {
x: -125,
y: 93
}, {
x: -125,
y: 87
}, {
x: -132,
y: 75
}, {
x: -135,
y: 71
}, {
x: -140,
y: 63
}, {
x: -144,
y: 55
}, {
x: -148,
y: 48
}, {
x: -156,
y: 32
}, {
x: -160,
y: 2
}, {
x: -160,
y: -40
}, {
x: -156,
y: -57
}, {
x: -146,
y: -84
}, {
x: -136,
y: -100
}, {
x: -130,
y: -110
}, {
x: -127,
y: -113
}, {
x: -122,
y: -118
}, {
x: -114,
y: -126
}, {
x: -104,
y: -134
}, {
x: -85,
y: -144
}, {
x: -79,
y: -147
}, {
x: -66,
y: -155
}, {
x: -39,
y: -163
}, {
x: -20,
y: -166
}, {
x: 17,
y: -166
}, {
x: 60,
y: -156
}, {
x: 68,
y: -153
}, {
x: 78,
y: -147
}, {
x: 91,
y: -140
}, {
x: 104,
y: -134
}, {
x: 110,
y: -129
}, {
x: 132,
y: -107
}, {
x: 142,
y: -92
}, {
x: 155,
y: -59
}, {
x: 160,
y: -17
}, {
x: 155,
y: 29
}, {
x: 148,
y: 52
}, {
x: 139,
y: 68
}, {
x: 139,
y: 104
}, {
x: 136,
y: 130
}, {
x: 124,
y: 155
}, {
x: 121,
y: 159
}, {
x: 115,
y: 163
} ]
} ],
name: "FloorCut"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
x: -248,
y: -203,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -222.574,
y: 290
},
pointEnd: {
x: 197.444,
y: 410
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -150
}, {
x: 186,
y: -151
}, {
x: 185,
y: -401
}, {
x: 175,
y: -417
}, {
x: 97,
y: -432
}, {
x: 36,
y: -438
}, {
x: -11,
y: -433
}, {
x: -39,
y: -423
}, {
x: -123,
y: -430
}, {
x: -154,
y: -430
}, {
x: -177,
y: -427
}, {
x: -182,
y: -420
}, {
x: -182,
y: -84
}, {
x: -1e3,
y: -84
} ]
} ],
name: "Floor"
}, {
x: 255,
y: -103,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -231,
y: 834
}, {
x: 250,
y: 810
}, {
x: 188,
y: 598
}, {
x: 180,
y: 451
}, {
x: 167,
y: 364
}, {
x: 168,
y: 289
}, {
x: 166,
y: 286
}, {
x: 94,
y: 279
}, {
x: 16,
y: 277
}, {
x: -7,
y: 280
}, {
x: -21,
y: 283
}, {
x: -84,
y: 280
}, {
x: -94,
y: 284
}, {
x: -150,
y: 280
}, {
x: -158,
y: 288
} ]
} ],
name: "FloorCut"
}, {
y: -254,
width: 400,
name: "TriggerMove"
}, {
x: 85,
y: 31,
name: "FakeStatic"
}, {
x: -87,
y: -111,
name: "FakeStatic"
}, {
x: 80,
y: -279,
name: "FakeStatic"
}, {
x: -247,
y: -90,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -220,
y: 440
},
pointEnd: {
x: 220,
y: 440
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 972,
y: -70
}, {
x: 191,
y: -70
}, {
x: 2,
y: -333
}, {
x: -187,
y: -70
}, {
x: -997,
y: -70
} ]
} ],
name: "Floor"
}, {
x: 251,
y: -23,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -63,
y: 807
}, {
x: 62,
y: 807
}, {
x: 34,
y: 614
}, {
x: 19,
y: 462
}, {
x: 25,
y: 415
}, {
x: 167,
y: 370
}, {
x: 186,
y: 293
}, {
x: 2,
y: 33
}, {
x: -183,
y: 296
}, {
x: -166,
y: 368
}, {
x: -19,
y: 416
}, {
x: -18,
y: 457
}, {
x: -31,
y: 616
} ]
} ],
name: "FloorCut"
}, {
y: -224,
width: 400,
name: "TriggerMove"
}, {
x: -242,
y: -75,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -251.743,
y: 293.458
},
pointEnd: {
x: 251.743,
y: 293.458
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -165
}, {
x: 214,
y: -164
}, {
x: 211,
y: -228
}, {
x: 211,
y: -284
}, {
x: 68,
y: -286
}, {
x: 64,
y: -233
}, {
x: 57,
y: -168
}, {
x: -1002,
y: -171
} ]
} ],
name: "Floor"
}, {
x: 300,
y: -115,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: 11,
y: 855
}, {
x: 268,
y: 855
}, {
x: 242,
y: 667
}, {
x: 229,
y: 614
}, {
x: 203,
y: 545
}, {
x: 203,
y: 421
}, {
x: 75,
y: 421
}, {
x: 75,
y: 546
} ]
} ],
name: "FloorCut"
}, {
x: 156,
y: -242,
width: 400,
name: "TriggerMove"
}, {
x: 261,
y: 330,
scaleX: 1.2,
scaleY: 1.2,
AttributeAniRota: [ {
speed: 200
} ],
name: "Gear"
}, {
x: 22,
y: 330,
scaleX: 1.2,
scaleY: 1.2,
AttributeAniRota: [ {
speed: 200
} ],
name: "Gear"
}, {
x: 142,
y: 330,
scaleX: 1.2,
scaleY: 1.2,
AttributeAniRota: [ {
speed: 200
} ],
name: "Gear"
}, {
x: -58,
y: 69,
scaleX: 1.2,
scaleY: 1.2,
AttributeAniRota: [ {
speed: -200
} ],
name: "Gear"
}, {
x: -293,
y: 69,
scaleX: 1.2,
scaleY: 1.2,
AttributeAniRota: [ {
speed: -200
} ],
name: "Gear"
}, {
x: -177,
y: 69,
scaleX: 1.2,
scaleY: 1.2,
AttributeAniRota: [ {
speed: -200
} ],
name: "Gear"
}, {
x: -118,
y: -174,
name: "Role"
}, {
Help: [ {
pointStart: {
x: 20.17,
y: 533
},
pointEnd: {
x: 259.247,
y: 533
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 995,
y: -144
}, {
x: 208,
y: -126
}, {
x: 197,
y: -137
}, {
x: 198,
y: -402
}, {
x: -190,
y: -131
}, {
x: -999,
y: -130
} ]
} ],
name: "Floor"
}, {
x: 279,
y: -80,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -468,
y: 956
}, {
x: 495,
y: 955
}, {
x: 490,
y: 607
}, {
x: 188,
y: 606
}, {
x: 192,
y: 73
}, {
x: -177,
y: 336
}, {
x: -178,
y: 606
}, {
x: -467,
y: 606
} ]
} ],
name: "FloorCut"
}, {
x: -238,
y: -136,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -238.084,
y: 335.891
},
pointEnd: {
x: 238.084,
y: 335.891
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -997,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -177
}, {
x: 229,
y: -177
}, {
x: 190,
y: -227
}, {
x: 142,
y: -326
}, {
x: 138,
y: -335
}, {
x: 81,
y: -335
}, {
x: 62,
y: -325
}, {
x: 53,
y: -386
}, {
x: 53,
y: -498
}, {
x: -2,
y: -510
}, {
x: -63,
y: -516
}, {
x: -117,
y: -516
}, {
x: -155,
y: -510
}, {
x: -173,
y: -496
}, {
x: -209,
y: -216
}, {
x: -220,
y: -202
}, {
x: -997,
y: -202
} ]
} ],
name: "Floor"
}, {
x: 256,
y: -137,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -421,
y: 807
}, {
x: 460,
y: 807
}, {
x: 460,
y: 572
}, {
x: 203,
y: 529
}, {
x: 123,
y: 510
}, {
x: 86,
y: 463
}, {
x: 58,
y: 405
}, {
x: 41,
y: 342
}, {
x: 35,
y: 329
}, {
x: 35,
y: 294
}, {
x: 30,
y: 267
}, {
x: 16,
y: 222
}, {
x: 16,
y: 69
}, {
x: 11,
y: 57
}, {
x: -119,
y: 45
}, {
x: -165,
y: 50
}, {
x: -185,
y: 59
}, {
x: -198,
y: 96
}, {
x: -219,
y: 337
}, {
x: -227,
y: 376
}, {
x: -235,
y: 392
}, {
x: -324,
y: 399
}, {
x: -386,
y: 408
}, {
x: -421,
y: 422
} ]
} ],
name: "FloorCut"
}, {
x: 104,
y: -351,
name: "ToolBounce"
}, {
x: -270,
y: -215,
name: "Role"
}, {
x: -47,
y: -437,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -239.339,
y: 197.793
},
pointEnd: {
x: 79.946,
y: 250.099
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 998,
y: -183
}, {
x: 188,
y: -186
}, {
x: 111,
y: -213
}, {
x: 88,
y: -212
}, {
x: 66,
y: -425
}, {
x: -63,
y: -427
}, {
x: -87,
y: -213
}, {
x: -107,
y: -216
}, {
x: -189,
y: -188
}, {
x: -999,
y: -190
} ]
} ],
name: "Floor"
}, {
x: 270,
y: -137,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -444,
y: 821
}, {
x: 464,
y: 821
}, {
x: 464,
y: 632
}, {
x: 182,
y: 632
}, {
x: 104,
y: 454
}, {
x: 81,
y: 454
}, {
x: 57,
y: 241
}, {
x: -55,
y: 241
}, {
x: -79,
y: 454
}, {
x: -102,
y: 454
}, {
x: -184,
y: 633
}, {
x: -444,
y: 633
} ]
} ],
name: "FloorCut"
}, {
y: -350,
width: 400,
name: "TriggerMove"
}, {
x: -200,
y: 45,
AttributeAniMove: [ {
targetPos: {
x: -45,
y: 45
},
speed: 135
} ],
name: "Move"
}, {
x: 200,
y: 45,
AttributeAniMove: [ {
targetPos: {
x: 45,
y: 45
},
speed: 135
} ],
name: "Move"
}, {
x: -258,
y: -191,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -165.213,
y: 457
},
pointEnd: {
x: 165.213,
y: 457
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 991,
y: -381
}, {
x: 73,
y: -388
}, {
x: 63,
y: -396
}, {
x: 66,
y: -492
}, {
x: -121,
y: -410
}, {
x: -120,
y: -247
}, {
x: -130,
y: -240
}, {
x: -998,
y: -239
} ]
} ],
name: "Floor"
}, {
x: 238,
y: -340,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -417,
y: 826
}, {
x: 422,
y: 823
}, {
x: 423,
y: 678
}, {
x: 48,
y: 499
}, {
x: 47,
y: 256
}, {
x: -106,
y: 331
}, {
x: -109,
y: 508
}, {
x: -414,
y: 667
} ]
} ],
name: "FloorCut"
}, {
y: -425,
width: 400,
name: "TriggerMove"
}, {
x: -283,
y: 527,
width: 20,
height: 320,
AttributeAniSwing: [ {
speed: -60
} ],
name: "Swing"
}, {
x: 238,
y: 428,
width: 20,
height: 320,
AttributeAniSwing: [ {
speed: 60
} ],
name: "Swing"
}, {
x: -210,
y: -248,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -153.1,
y: 457
},
pointEnd: {
x: 107.103,
y: 354
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -225
}, {
x: 246,
y: -225
}, {
x: 246,
y: -350
}, {
x: 19,
y: -350
}, {
x: 19,
y: -225
}, {
x: -33,
y: -225
}, {
x: -33,
y: -350
}, {
x: -231,
y: -350
}, {
x: -231,
y: -225
}, {
x: -997,
y: -225
} ]
} ],
name: "Floor"
}, {
x: 310,
y: -177,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -438,
y: 846
}, {
x: 452,
y: 853
}, {
x: 438,
y: 657
}, {
x: 216,
y: 546
}, {
x: 219,
y: 454
}, {
x: 190,
y: 386
}, {
x: 175,
y: 375
}, {
x: 150,
y: 364
}, {
x: 102,
y: 364
}, {
x: 103,
y: 243
}, {
x: 38,
y: 243
}, {
x: 36,
y: 292
}, {
x: 32,
y: 355
}, {
x: 25,
y: 362
}, {
x: -43,
y: 362
}, {
x: -48,
y: 356
}, {
x: -51,
y: 343
}, {
x: -56,
y: 269
}, {
x: -62,
y: 244
}, {
x: -132,
y: 244
}, {
x: -135,
y: 257
}, {
x: -140,
y: 357
}, {
x: -144,
y: 364
}, {
x: -186,
y: 364
}, {
x: -202,
y: 382
}, {
x: -211,
y: 404
}, {
x: -214,
y: 426
}, {
x: -212,
y: 497
}, {
x: -208,
y: 532
}, {
x: -201,
y: 570
}, {
x: -437,
y: 720
} ]
} ],
name: "FloorCut"
}, {
x: 0,
y: 0,
width: 400,
name: "TouchMoveLine"
}, {
x: 0,
y: 0,
width: 175,
height: 170,
AttributeAniTouchMove: [ {
originPos: {
x: -200,
y: 0
},
targetPos: {
x: 200,
y: 0
},
nodeLine: {
nodeId: 3
}
} ],
AttributeStyle: [ {
index: 1,
vertexes: [ {
x: -66.5,
y: 85
}, {
x: -87.5,
y: 64
}, {
x: -87.5,
y: 56
}, {
x: -31.5,
y: 1
}, {
x: -29.5,
y: 1
}, {
x: -29.5,
y: -1
}, {
x: -31.5,
y: -1
}, {
x: -87.5,
y: -56
}, {
x: -87.5,
y: -64
}, {
x: -73.5,
y: -77
}, {
x: -73.5,
y: -79
}, {
x: -68.5,
y: -84
}, {
x: -58.5,
y: -85
}, {
x: -.5,
y: -28
}, {
x: 17.5,
y: -46
}, {
x: 19.5,
y: -46
}, {
x: 42.5,
y: -70
}, {
x: 44.5,
y: -70
}, {
x: 58.5,
y: -85
}, {
x: 68.5,
y: -84
}, {
x: 73.5,
y: -79
}, {
x: 73.5,
y: -77
}, {
x: 87.5,
y: -64
}, {
x: 86.5,
y: -54
}, {
x: 79.5,
y: -47
}, {
x: 77.5,
y: -47
}, {
x: 55.5,
y: -24
}, {
x: 53.5,
y: -24
}, {
x: 31.5,
y: -1
}, {
x: 29.5,
y: -1
}, {
x: 29.5,
y: 1
}, {
x: 31.5,
y: 1
}, {
x: 87.5,
y: 56
}, {
x: 87.5,
y: 64
}, {
x: 73.5,
y: 77
}, {
x: 73.5,
y: 79
}, {
x: 68.5,
y: 84
}, {
x: 58.5,
y: 85
}, {
x: 44.5,
y: 70
}, {
x: 42.5,
y: 70
}, {
x: 19.5,
y: 46
}, {
x: 17.5,
y: 46
}, {
x: -.5,
y: 28
}, {
x: -58.5,
y: 85
} ]
} ],
name: "TouchMove"
}, {
x: -80,
y: -355,
ControllerUD: [ {
target: {
nodeId: 6
}
} ],
name: "ControllerUD"
}, {
x: -184,
y: -343,
scaleX: .5,
scaleY: .65,
ControlTarget: [ {
targetPos: {
x: -177.437,
y: -236.264
},
speed: 150
} ],
name: "ControlTarget"
}, {
x: 170,
y: -343,
scaleX: .65,
scaleY: .65,
ControlTarget: [ {
targetPos: {
x: 170.909,
y: -236.264
},
speed: 150
} ],
name: "ControlTarget"
}, {
x: 53,
y: -355,
ControllerUD: [ {
target: {
nodeId: 7
}
} ],
name: "ControllerUD"
}, {
Help: [ {
pointStart: {
x: 0,
y: 0
},
pointEnd: {
x: 209.444,
y: 0
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: -169.59,
y: 357.307
},
pointEnd: {
x: -21.82,
y: 357.307
}
} ],
name: "Help"
}, {
Help: [ {
index: 2,
pointStart: {
x: 15.695,
y: 357.307
},
pointEnd: {
x: 156.058,
y: 357.307
}
} ],
name: "Help"
}, {
x: -303,
y: -230,
name: "Role"
}, {
x: -129,
y: -297,
width: 232,
name: "TriggerMove"
}, {
x: 131,
y: -297,
width: 252,
name: "TriggerMove"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -150
}, {
x: 100,
y: -150
}, {
x: 100,
y: -436
}, {
x: -112,
y: -436
}, {
x: -112,
y: -201
}, {
x: -1e3,
y: -201
} ]
} ],
name: "Floor"
}, {
x: -2,
y: 360,
width: 400,
height: 400,
Floor: [ {
vertexes: [ {
x: 9,
y: 239
}, {
x: -41,
y: 237
}, {
x: -50,
y: 234
}, {
x: -58,
y: 224
}, {
x: -59,
y: 192
}, {
x: -53,
y: 179
}, {
x: -54,
y: 165
}, {
x: -61,
y: 144
}, {
x: -83,
y: 110
}, {
x: -94,
y: 86
}, {
x: -97,
y: 6
}, {
x: -97,
y: -195
}, {
x: -94,
y: -210
}, {
x: -87,
y: -222
}, {
x: -75,
y: -231
}, {
x: -58,
y: -235
}, {
x: -14,
y: -239
}, {
x: 40,
y: -237
}, {
x: 74,
y: -231
}, {
x: 86,
y: -222
}, {
x: 92,
y: -212
}, {
x: 95,
y: -196
}, {
x: 95,
y: 82
}, {
x: 78,
y: 119
}, {
x: 55,
y: 153
}, {
x: 52,
y: 181
}, {
x: 57,
y: 191
}, {
x: 58,
y: 215
}, {
x: 54,
y: 230
}, {
x: 43,
y: 237
} ]
} ],
name: "FloorCut"
}, {
y: -388,
name: "TriggerMove"
}, {
x: 294,
y: -93,
height: 112,
name: "FinishTarget"
}, {
x: -263,
y: -206,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -109.136,
y: 354.807
},
pointEnd: {
x: 102.521,
y: 405
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -999,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -232
}, {
x: 186,
y: -232
}, {
x: 152,
y: -242
}, {
x: 152,
y: -443
}, {
x: 55,
y: -443
}, {
x: 55,
y: -320
}, {
x: -66,
y: -320
}, {
x: -66,
y: -443
}, {
x: -160,
y: -443
}, {
x: -160,
y: -238
}, {
x: -197,
y: -236
}, {
x: -999,
y: -236
} ]
} ],
name: "Floor"
}, {
x: 246,
y: -189,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -447,
y: 850
}, {
x: 415,
y: 850
}, {
x: 413,
y: 533
}, {
x: 54,
y: 529
}, {
x: 190,
y: 423
}, {
x: 188,
y: 271
}, {
x: 142,
y: 271
}, {
x: 142,
y: 44
}, {
x: 65,
y: 44
}, {
x: 64,
y: 270
}, {
x: -76,
y: 270
}, {
x: -77,
y: 44
}, {
x: -149,
y: 44
}, {
x: -152,
y: 271
}, {
x: -196,
y: 271
}, {
x: -199,
y: 422
}, {
x: -63,
y: 529
}, {
x: -444,
y: 536
} ]
} ],
name: "FloorCut"
}, {
x: -114,
y: -454,
ControllerUD: [ {
target: {
nodeId: 4
}
} ],
name: "ControllerUD"
}, {
x: -7,
y: -319,
scaleX: .6,
scaleY: .7,
ControlTarget: [ {
targetPos: {
x: -6.284,
y: -243.195
},
speed: 100
} ],
name: "ControlTarget"
}, {
x: -122,
y: -357,
width: 156,
name: "TriggerMove"
}, {
x: 100,
y: -357,
width: 156,
name: "TriggerMove"
}, {
x: -252,
y: -249,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -230.671,
y: 245
},
pointEnd: {
x: 212.841,
y: 245
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -230
}, {
x: 213,
y: -230
}, {
x: 213,
y: -486
}, {
x: -171,
y: -486
}, {
x: -171,
y: -230
}, {
x: -1e3,
y: -230
} ]
} ],
name: "Floor"
}, {
x: 290,
y: -185,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -160,
y: 800
}, {
x: 202,
y: 800
}, {
x: 202,
y: 92
}, {
x: 169,
y: 92
}, {
x: 169,
y: 349
}, {
x: -128,
y: 349
}, {
x: -128,
y: 92
}, {
x: -160,
y: 92
} ]
} ],
name: "FloorCut"
}, {
x: -132,
y: -436,
width: 135,
name: "TriggerMove"
}, {
x: -144,
y: -500,
ControllerUD: [ {
target: {
nodeId: 5
}
} ],
name: "ControllerUD"
}, {
x: -47,
y: -478,
scaleX: .65,
ControlTarget: [ {
targetPos: {
x: -46.42,
y: -246
},
speed: 300
} ],
name: "ControlTarget"
}, {
x: 185,
y: -500,
ControllerUD: [ {
target: {
nodeId: 7
}
} ],
name: "ControllerUD"
}, {
x: 87,
y: -478,
scaleX: .65,
ControlTarget: [ {
targetPos: {
x: 87.963,
y: -246
},
speed: 300
} ],
name: "ControlTarget"
}, {
x: 186,
y: -436,
width: 135,
name: "TriggerMove"
}, {
x: -248,
y: -238,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -204.623,
y: 348.955
},
pointEnd: {
x: 245.44,
y: 348.955
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 99,
y: -200
}, {
x: 99,
y: -400
}, {
x: -99,
y: -400
}, {
x: -99,
y: -201
}, {
x: -1e3,
y: -201
} ]
} ],
name: "Floor"
}, {
x: -2,
y: 260,
width: 400,
height: 400,
Floor: [ {
vertexes: [ {
x: -14,
y: 202
}, {
x: -23,
y: 199
}, {
x: -34,
y: 186
}, {
x: -34,
y: 163
}, {
x: -21,
y: 140
}, {
x: -25,
y: 139
}, {
x: -31,
y: 146
}, {
x: -40,
y: 145
}, {
x: -43,
y: 143
}, {
x: -42,
y: 134
}, {
x: -54,
y: 130
}, {
x: -62,
y: 112
}, {
x: -64,
y: 95
}, {
x: -74,
y: 76
}, {
x: -73,
y: 65
}, {
x: -68,
y: 59
}, {
x: -56,
y: 59
}, {
x: -46,
y: 69
}, {
x: -44,
y: 61
}, {
x: -57,
y: -6
}, {
x: -57,
y: -17
}, {
x: -53,
y: -22
}, {
x: -85,
y: -68
}, {
x: -61,
y: -153
}, {
x: -66,
y: -156
}, {
x: -64,
y: -163
}, {
x: -67,
y: -166
}, {
x: -87,
y: -169
}, {
x: -92,
y: -172
}, {
x: -93,
y: -178
}, {
x: -81,
y: -181
}, {
x: -26,
y: -181
}, {
x: -27,
y: -163
}, {
x: -39,
y: -136
}, {
x: -51,
y: -81
}, {
x: -28,
y: -49
}, {
x: -7,
y: -36
}, {
x: -2,
y: -39
}, {
x: 0,
y: -46
}, {
x: 0,
y: -83
}, {
x: 5,
y: -97
}, {
x: 38,
y: -137
}, {
x: 55,
y: -169
}, {
x: 55,
y: -174
}, {
x: 48,
y: -184
}, {
x: 27,
y: -189
}, {
x: 23,
y: -198
}, {
x: 28,
y: -201
}, {
x: 59,
y: -201
}, {
x: 92,
y: -196
}, {
x: 90,
y: -176
}, {
x: 58,
y: -114
}, {
x: 46,
y: -99
}, {
x: 39,
y: -75
}, {
x: 39,
y: -17
}, {
x: 46,
y: -10
}, {
x: 60,
y: -5
}, {
x: 54,
y: 30
}, {
x: 69,
y: 55
}, {
x: 70,
y: 72
}, {
x: 41,
y: 135
}, {
x: 18,
y: 140
}, {
x: 5,
y: 147
}, {
x: 10,
y: 166
}, {
x: 10,
y: 186
}, {
x: 2,
y: 197
} ]
} ],
name: "FloorCut"
}, {
y: -374,
name: "TriggerMove"
}, {
x: 287,
y: -144,
height: 112,
name: "FinishTarget"
}, {
x: -287,
y: -203,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -83.778,
y: 281.906
},
pointEnd: {
x: 78.474,
y: 274.231
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 995,
y: -93
}, {
x: 227,
y: -95
}, {
x: 222,
y: -103
}, {
x: 260,
y: -190
}, {
x: 240,
y: -309
}, {
x: 240,
y: -388
}, {
x: 254,
y: -456
}, {
x: 250,
y: -471
}, {
x: 212,
y: -473
}, {
x: 163,
y: -467
}, {
x: 138,
y: -448
}, {
x: 125,
y: -248
}, {
x: 74,
y: -248
}, {
x: 61,
y: -298
}, {
x: 61,
y: -363
}, {
x: 60,
y: -421
}, {
x: 44,
y: -461
}, {
x: 18,
y: -468
}, {
x: -21,
y: -458
}, {
x: -35,
y: -450
}, {
x: -40,
y: -437
}, {
x: -41,
y: -327
}, {
x: -94,
y: -327
}, {
x: -94,
y: -431
}, {
x: -105,
y: -443
}, {
x: -127,
y: -452
}, {
x: -153,
y: -446
}, {
x: -170,
y: -433
}, {
x: -198,
y: -271
}, {
x: -211,
y: -231
}, {
x: -999,
y: -232
} ]
} ],
name: "Floor"
}, {
x: 302,
y: -50,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -445,
y: 803
}, {
x: 434,
y: 803
}, {
x: 434,
y: 585
}, {
x: 281,
y: 575
}, {
x: 187,
y: 473
}, {
x: 168,
y: 469
}, {
x: 112,
y: 459
}, {
x: 92,
y: 451
}, {
x: 76,
y: 437
}, {
x: 66,
y: 419
}, {
x: 60,
y: 388
}, {
x: 48,
y: 275
}, {
x: 42,
y: 264
}, {
x: -86,
y: 264
}, {
x: -98,
y: 258
}, {
x: -102,
y: 231
}, {
x: -102,
y: 117
}, {
x: -106,
y: 80
}, {
x: -111,
y: 75
}, {
x: -121,
y: 72
}, {
x: -141,
y: 72
}, {
x: -156,
y: 80
}, {
x: -167,
y: 104
}, {
x: -173,
y: 134
}, {
x: -178,
y: 188
}, {
x: -178,
y: 269
}, {
x: -198,
y: 298
}, {
x: -198,
y: 387
}, {
x: -206,
y: 408
}, {
x: -216,
y: 417
}, {
x: -330,
y: 428
}, {
x: -445,
y: 572
} ]
} ],
name: "FloorCut"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
x: 104,
y: -251,
name: "ToolBounce"
}, {
x: 10,
y: -130,
PickKey: [ {
target: {
nodeId: 6
}
} ],
name: "PickKey"
}, {
x: 241,
y: 2,
name: "DoorLock"
}, {
x: -272,
y: -237,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -246.981,
y: 238.96
},
pointEnd: {
x: 93.651,
y: 341.65
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -201
}, {
x: 224,
y: -201
}, {
x: 224,
y: -499
}, {
x: 152,
y: -499
}, {
x: 152,
y: -201
}, {
x: 1,
y: -201
}, {
x: 1,
y: -499
}, {
x: -204,
y: -499
}, {
x: -204,
y: -201
}, {
x: -1e3,
y: -201
} ]
} ],
name: "Floor"
}, {
x: 69,
y: 180,
width: 400,
height: 400,
Floor: [ {
vertexes: [ {
x: 150,
y: 20
}, {
x: 150,
y: 823
}, {
x: -546,
y: 823
}, {
x: -542,
y: 771
}, {
x: 103,
y: 771
}, {
x: 103,
y: 20
} ]
} ],
name: "FloorCut"
}, {
x: 317,
y: -452,
name: "TriggerMove"
}, {
x: 303,
y: -145,
height: 112,
name: "FinishTarget"
}, {
x: -101,
y: -488,
ControlTarget: [ {
targetPos: {
x: -100.529,
y: -218.537
},
speed: 400
} ],
name: "ControlTarget"
}, {
x: 189,
y: -504,
ControllerUD: [ {
target: {
nodeId: 4
}
} ],
name: "ControllerUD"
}, {
x: -282,
y: -203,
name: "Role"
}, {
Help: [ {
pointStart: {
x: 139.298,
y: 485
},
pointEnd: {
x: 270.786,
y: 485
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -201
}, {
x: 162,
y: -201
}, {
x: 162,
y: -427
}, {
x: -133,
y: -427
}, {
x: -133,
y: -202
}, {
x: -1e3,
y: -202
} ]
} ],
name: "Floor"
}, {
x: 183,
y: 75,
width: 400,
height: 400,
Floor: [ {
vertexes: [ {
x: -25,
y: 72
}, {
x: -74,
y: 215
}, {
x: 30,
y: 329
}, {
x: -104,
y: 329
}, {
x: -170,
y: 478
}, {
x: -240,
y: 328
}, {
x: -369,
y: 328
}, {
x: -262,
y: 218
}, {
x: -291,
y: 71
}, {
x: -163,
y: 144
} ]
} ],
name: "FloorCut"
}, {
x: 21,
y: -324,
name: "TriggerMove"
}, {
x: 303,
y: -145,
height: 112,
name: "FinishTarget"
}, {
x: 22,
y: -12,
name: "FakeStatic"
}, {
x: -264,
y: -201,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -128.034,
y: 328
},
pointEnd: {
x: 161.155,
y: 328
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -230
}, {
x: 223,
y: -230
}, {
x: 208,
y: -238
}, {
x: 195,
y: -264
}, {
x: 181,
y: -277
}, {
x: 157,
y: -289
}, {
x: 135,
y: -299
}, {
x: 11,
y: -299
}, {
x: 11,
y: -488
}, {
x: -137,
y: -488
}, {
x: -137,
y: -215
}, {
x: -151,
y: -202
}, {
x: -1e3,
y: -202
} ]
} ],
name: "Floor"
}, {
x: -64,
y: 260,
width: 400,
height: 400,
Floor: [ {
vertexes: [ {
x: -11,
y: 180
}, {
x: -28,
y: 175
}, {
x: -31,
y: 172
}, {
x: -41,
y: 166
}, {
x: -49,
y: 158
}, {
x: -57,
y: 146
}, {
x: -65,
y: 125
}, {
x: -60,
y: 62
}, {
x: -46,
y: -5
}, {
x: -38,
y: -21
}, {
x: -38,
y: -55
}, {
x: -32,
y: -72
}, {
x: -34,
y: -90
}, {
x: -42,
y: -107
}, {
x: -42,
y: -131
}, {
x: -53,
y: -164
}, {
x: -52,
y: -176
}, {
x: 1,
y: -181
}, {
x: 44,
y: -181
}, {
x: 55,
y: -176
}, {
x: 53,
y: -157
}, {
x: 51,
y: -152
}, {
x: 48,
y: -152
}, {
x: 44,
y: -135
}, {
x: 42,
y: -117
}, {
x: 43,
y: -108
}, {
x: 36,
y: -91
}, {
x: 33,
y: -73
}, {
x: 41,
y: -18
}, {
x: 44,
y: -5
}, {
x: 52,
y: 40
}, {
x: 58,
y: 51
}, {
x: 57,
y: 56
}, {
x: 60,
y: 60
}, {
x: 63,
y: 73
}, {
x: 63,
y: 112
}, {
x: 60,
y: 139
}, {
x: 52,
y: 154
}, {
x: 47,
y: 161
}, {
x: 43,
y: 165
}, {
x: 28,
y: 175
}, {
x: 11,
y: 180
} ]
} ],
name: "FloorCut"
}, {
x: 248,
y: -186,
height: 112,
name: "FinishTarget"
}, {
x: 116,
y: -37,
width: 367,
name: "TouchMoveLine"
}, {
x: -68,
y: -37,
AttributeAniTouchMove: [ {
originPos: {
x: -67.236,
y: -36.843
},
targetPos: {
x: 300,
y: -36.843
},
nodeLine: {
nodeId: 3
}
} ],
name: "TouchMove"
}, {
x: 96,
y: -304,
name: "ToolBounce"
}, {
x: -60,
y: -451,
width: 236,
name: "TriggerMove"
}, {
x: -248,
y: -201,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -67.236,
y: -39.327
},
pointEnd: {
x: 148.426,
y: -39.327
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: -174.464,
y: 374.81
},
pointEnd: {
x: 32.525,
y: 299.127
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -201
}, {
x: 235,
y: -201
}, {
x: 235,
y: -395
}, {
x: 94,
y: -201
}, {
x: 29,
y: -399
}, {
x: -34,
y: -202
}, {
x: -174,
y: -406
}, {
x: -174,
y: -202
}, {
x: -1e3,
y: -202
} ]
} ],
name: "Floor"
}, {
x: 33,
y: 197,
Floor: [ {
vertexes: [ {
x: -486,
y: 800
}, {
x: 500,
y: 800
}, {
x: 200,
y: 344
}, {
x: 200,
y: 0
}, {
x: 62,
y: 203
}, {
x: -1,
y: 2
}, {
x: -64,
y: 203
}, {
x: -200,
y: 0
}, {
x: -200,
y: 351
} ]
} ],
name: "FloorCut"
}, {
x: 16,
y: -308,
name: "TriggerMove"
}, {
x: 303,
y: -145,
height: 112,
name: "FinishTarget"
}, {
x: -122,
y: -120,
PickKey: [ {
target: {
nodeId: 5
}
} ],
name: "PickKey"
}, {
x: 244,
y: -99,
name: "DoorLock"
}, {
x: -264,
y: -201,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -197.842,
y: 406
},
pointEnd: {
x: 290.07,
y: 410
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
x: 7,
y: -231,
Floor: [ {
vertexes: [ {
x: 595,
y: -715
}, {
x: -545,
y: -715
}, {
x: -545,
y: 29
}, {
x: -123,
y: 29
}, {
x: -123,
y: -12
}, {
x: -117,
y: -36
}, {
x: -108,
y: -53
}, {
x: -95,
y: -70
}, {
x: -74,
y: -80
}, {
x: -60,
y: -82
}, {
x: -60,
y: -125
}, {
x: 58,
y: -125
}, {
x: 58,
y: -81
}, {
x: 76,
y: -78
}, {
x: 96,
y: -68
}, {
x: 109,
y: -53
}, {
x: 116,
y: -32
}, {
x: 120,
y: -8
}, {
x: 118,
y: 29
}, {
x: 595,
y: 29
} ]
} ],
name: "Floor"
}, {
x: 6,
y: 243,
Floor: [ {
vertexes: [ {
x: 0,
y: 124
}, {
x: -110,
y: 14
}, {
x: -120,
y: -13
}, {
x: -119,
y: -35
}, {
x: -111,
y: -54
}, {
x: -96,
y: -70
}, {
x: -75,
y: -80
}, {
x: -50,
y: -81
}, {
x: -31,
y: -75
}, {
x: -21,
y: -68
}, {
x: -5,
y: -49
}, {
x: -21,
y: -95
}, {
x: -33,
y: -110
}, {
x: -55,
y: -124
}, {
x: 56,
y: -124
}, {
x: 38,
y: -114
}, {
x: 24,
y: -99
}, {
x: 12,
y: -74
}, {
x: 6,
y: -49
}, {
x: 21,
y: -68
}, {
x: 38,
y: -78
}, {
x: 50,
y: -81
}, {
x: 79,
y: -79
}, {
x: 99,
y: -68
}, {
x: 112,
y: -53
}, {
x: 120,
y: -31
}, {
x: 119,
y: -7
}, {
x: 106,
y: 19
} ]
} ],
name: "FloorCut"
}, {
x: 303,
y: -145,
height: 112,
name: "FinishTarget"
}, {
Help: [ {
pointStart: {
x: -152.685,
y: 258
},
pointEnd: {
x: 158.672,
y: 258
}
} ],
name: "Help"
}, {
x: -240,
y: -203,
name: "Role"
}, {
x: 6,
y: -280,
width: 251,
name: "TriggerMove"
} ]
}, {
name: "Level",
ch: [ {
x: 7,
y: -231,
Floor: [ {
vertexes: [ {
x: 595,
y: -751
}, {
x: -555,
y: -751
}, {
x: -555,
y: 29
}, {
x: -89,
y: 29
}, {
x: -89,
y: -107
}, {
x: 77,
y: -107
}, {
x: 77,
y: 29
}, {
x: 595,
y: 29
} ]
} ],
name: "Floor"
}, {
y: 309,
Floor: [ {
vertexes: [ {
x: -200,
y: 686
}, {
x: 203,
y: 686
}, {
x: 203,
y: 0
}, {
x: 77,
y: 0
}, {
x: 77,
y: 135
}, {
x: -59,
y: 135
}, {
x: -59,
y: -1
}, {
x: -200,
y: -1
} ]
} ],
name: "FloorCut"
}, {
x: 8,
y: -271,
width: 400,
name: "TriggerMove"
}, {
x: 303,
y: -145,
height: 112,
name: "FinishTarget"
}, {
x: -149,
y: -15,
name: "Gear"
}, {
x: 141,
y: -15,
AttributeAniRota: [ {
speed: 360
} ],
name: "Gear"
}, {
x: -264,
y: -200,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -246.103,
y: 434
},
pointEnd: {
x: -22.262,
y: 434
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
x: 7,
y: -256,
Floor: [ {
vertexes: [ {
x: -140,
y: 55
}, {
x: -136,
y: 20
}, {
x: -124,
y: 1
}, {
x: -1,
y: -113
}, {
x: 129,
y: 10
}, {
x: 137,
y: 24
}, {
x: 142,
y: 55
}, {
x: 692,
y: 55
}, {
x: 692,
y: -600
}, {
x: -606,
y: -600
}, {
x: -606,
y: 55
} ]
} ],
name: "Floor"
}, {
x: 6,
y: 311,
Floor: [ {
vertexes: [ {
x: -69,
y: 113
}, {
x: -88,
y: 110
}, {
x: -104,
y: 102
}, {
x: -121,
y: 85
}, {
x: -132,
y: 56
}, {
x: -129,
y: 22
}, {
x: -119,
y: 5
}, {
x: -1,
y: -113
}, {
x: 121,
y: 8
}, {
x: 129,
y: 24
}, {
x: 132,
y: 40
}, {
x: 131,
y: 60
}, {
x: 121,
y: 84
}, {
x: 103,
y: 102
}, {
x: 89,
y: 109
}, {
x: 63,
y: 113
}, {
x: 33,
y: 105
}, {
x: 12,
y: 87
}, {
x: -1,
y: 56
}, {
x: -4,
y: 72
}, {
x: -21,
y: 96
}, {
x: -43,
y: 109
} ]
} ],
name: "FloorCut"
}, {
x: 14,
y: -309,
width: 400,
name: "TriggerMove"
}, {
x: 303,
y: -145,
height: 112,
name: "FinishTarget"
}, {
x: 284,
y: 64,
height: 200,
AttributeAniMove: [ {
targetPos: {
x: -261.942,
y: 64.962
}
} ],
name: "Move"
}, {
Help: [ {
pointStart: {
x: -170.993,
y: 360
},
pointEnd: {
x: 179.759,
y: 360
}
} ],
name: "Help"
}, {
x: -224,
y: -200,
name: "Role"
}, {
x: 31,
y: -343,
name: "TriggerMove"
} ]
}, {
name: "Level",
ch: [ {
x: 7,
y: -231,
Floor: [ {
vertexes: [ {
x: 595,
y: -751
}, {
x: -555,
y: -751
}, {
x: -555,
y: 29
}, {
x: -215,
y: 29
}, {
x: -215,
y: -180
}, {
x: -63,
y: -180
}, {
x: -63,
y: 29
}, {
x: 62,
y: 29
}, {
x: 62,
y: -177
}, {
x: 199,
y: -177
}, {
x: 199,
y: 29
}, {
x: 595,
y: 29
} ]
} ],
name: "Floor"
}, {
y: 174,
Floor: [ {
vertexes: [ {
x: -200,
y: 686
}, {
x: 203,
y: 686
}, {
x: 203,
y: 0
}, {
x: 77,
y: 0
}, {
x: 77,
y: 233
}, {
x: -59,
y: 233
}, {
x: -59,
y: -1
}, {
x: -200,
y: -1
} ]
} ],
name: "FloorCut"
}, {
x: 303,
y: -155,
height: 112,
name: "FinishTarget"
}, {
x: 8,
y: 196,
width: 20,
height: 275,
AttributeAniSwing: [ {
speed: -70
} ],
name: "Swing"
}, {
Help: [ {
pointStart: {
x: -248.262,
y: 385
},
pointEnd: {
x: -17.031,
y: 385
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: 25.152,
y: 385
},
pointEnd: {
x: 235.953,
y: 385
}
} ],
name: "Help"
}, {
x: -286,
y: -213,
name: "Role"
}, {
x: -126,
y: -333,
width: 227,
name: "TriggerMove"
}, {
x: 139,
y: -333,
width: 227,
name: "TriggerMove"
} ]
}, {
name: "Level",
ch: [ {
x: 7,
y: -231,
Floor: [ {
vertexes: [ {
x: 595,
y: -751
}, {
x: -555,
y: -751
}, {
x: -555,
y: 29
}, {
x: -263,
y: 29
}, {
x: -263,
y: -287
}, {
x: 246,
y: -287
}, {
x: 246,
y: 28
}, {
x: 595,
y: 28
} ]
} ],
name: "Floor"
}, {
y: 337,
Floor: [ {
vertexes: [ {
x: -3,
y: 250
}, {
x: -11,
y: 243
}, {
x: -12,
y: 223
}, {
x: -59,
y: 218
}, {
x: -100,
y: 206
}, {
x: -135,
y: 189
}, {
x: -180,
y: 158
}, {
x: -180,
y: 155
}, {
x: -185,
y: 153
}, {
x: -208,
y: 128
}, {
x: -225,
y: 104
}, {
x: -242,
y: 74
}, {
x: -252,
y: 48
}, {
x: -252,
y: 42
}, {
x: -245,
y: 34
}, {
x: -212,
y: 41
}, {
x: -175,
y: 41
}, {
x: -146,
y: 33
}, {
x: -129,
y: 21
}, {
x: -125,
y: 22
}, {
x: -126,
y: 20
}, {
x: -118,
y: 20
}, {
x: -104,
y: 28
}, {
x: -73,
y: 37
}, {
x: -12,
y: 42
}, {
x: -12,
y: -203
}, {
x: -16,
y: -213
}, {
x: -25,
y: -222
}, {
x: -36,
y: -226
}, {
x: -50,
y: -224
}, {
x: -60,
y: -218
}, {
x: -65,
y: -210
}, {
x: -69,
y: -178
}, {
x: -77,
y: -173
}, {
x: -85,
y: -174
}, {
x: -92,
y: -184
}, {
x: -91,
y: -210
}, {
x: -85,
y: -225
}, {
x: -74,
y: -238
}, {
x: -53,
y: -249
}, {
x: -26,
y: -249
}, {
x: -6,
y: -239
}, {
x: 4,
y: -228
}, {
x: 11,
y: -213
}, {
x: 13,
y: 42
}, {
x: 84,
y: 34
}, {
x: 121,
y: 19
}, {
x: 130,
y: 21
}, {
x: 146,
y: 33
}, {
x: 176,
y: 41
}, {
x: 209,
y: 41
}, {
x: 238,
y: 34
}, {
x: 245,
y: 34
}, {
x: 252,
y: 40
}, {
x: 252,
y: 49
}, {
x: 244,
y: 72
}, {
x: 218,
y: 116
}, {
x: 200,
y: 138
}, {
x: 167,
y: 168
}, {
x: 156,
y: 174
}, {
x: 155,
y: 178
}, {
x: 152,
y: 177
}, {
x: 139,
y: 188
}, {
x: 127,
y: 192
}, {
x: 128,
y: 194
}, {
x: 91,
y: 210
}, {
x: 34,
y: 223
}, {
x: 13,
y: 223
}, {
x: 12,
y: 243
}, {
x: 7,
y: 249
} ]
} ],
name: "FloorCut"
}, {
x: -31,
y: -452,
name: "TriggerMove"
}, {
x: 303,
y: -145,
height: 112,
name: "FinishTarget"
}, {
x: -197,
AttributeAniMove: [ {
targetPos: {
x: -318.8,
y: 0
},
speed: 100,
timePaddingTarget: .5,
timePaddingOrigin: .5
} ],
name: "Move"
}, {
x: 200,
AttributeAniMove: [ {
targetPos: {
x: 318.976,
y: 0
},
speed: 100,
timePaddingTarget: .5,
timePaddingOrigin: .5
} ],
name: "Move"
}, {
x: 264,
y: -101,
name: "DoorLock"
}, {
y: -81,
scaleX: .7,
scaleY: .6,
PickKey: [ {
target: {
nodeId: 6
}
} ],
name: "PickKey"
}, {
x: -287,
y: -200,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -236.458,
y: 410
},
pointEnd: {
x: .521,
y: 455
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: 231.994,
y: 412
},
pointEnd: {
x: -2.017,
y: 461.7
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
x: 7,
y: -231,
Floor: [ {
vertexes: [ {
x: -126,
y: 30
}, {
x: -122,
y: -28
}, {
x: -114,
y: -48
}, {
x: -101,
y: -66
}, {
x: -82,
y: -78
}, {
x: -69,
y: -80
}, {
x: -56,
y: -124
}, {
x: 60,
y: -124
}, {
x: 72,
y: -80
}, {
x: 93,
y: -71
}, {
x: 111,
y: -56
}, {
x: 120,
y: -42
}, {
x: 125,
y: -26
}, {
x: 590,
y: -26
}, {
x: 590,
y: -618
}, {
x: -663,
y: -618
}, {
x: -663,
y: 30
} ]
} ],
name: "Floor"
}, {
x: 8,
y: 318,
Floor: [ {
vertexes: [ {
x: -9,
y: 120
}, {
x: -33,
y: 112
}, {
x: -53,
y: 92
}, {
x: -61,
y: 66
}, {
x: -57,
y: 43
}, {
x: -80,
y: 42
}, {
x: -100,
y: 32
}, {
x: -115,
y: 15
}, {
x: -122,
y: -6
}, {
x: -121,
y: -28
}, {
x: -112,
y: -48
}, {
x: -99,
y: -64
}, {
x: -80,
y: -75
}, {
x: -68,
y: -78
}, {
x: -38,
y: -75
}, {
x: -17,
y: -62
}, {
x: -5,
y: -46
}, {
x: -10,
y: -68
}, {
x: -20,
y: -91
}, {
x: -36,
y: -110
}, {
x: -54,
y: -121
}, {
x: 56,
y: -121
}, {
x: 39,
y: -111
}, {
x: 24,
y: -95
}, {
x: 13,
y: -72
}, {
x: 6,
y: -45
}, {
x: 13,
y: -56
}, {
x: 31,
y: -71
}, {
x: 52,
y: -78
}, {
x: 70,
y: -78
}, {
x: 92,
y: -70
}, {
x: 109,
y: -55
}, {
x: 117,
y: -41
}, {
x: 121,
y: -26
}, {
x: 119,
y: -1
}, {
x: 104,
y: 25
}, {
x: 82,
y: 40
}, {
x: 64,
y: 44
}, {
x: 51,
y: 43
}, {
x: 55,
y: 59
}, {
x: 54,
y: 73
}, {
x: 43,
y: 98
}, {
x: 19,
y: 116
} ]
} ],
name: "FloorCut"
}, {
x: -4,
y: -332,
name: "TriggerMove"
}, {
x: 282,
y: -202,
height: 112,
name: "FinishTarget"
}, {
x: -287,
y: -200,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -135.209,
y: 354.658
},
pointEnd: {
x: 140.43,
y: 357.012
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 194,
y: -200
}, {
x: 191,
y: -223
}, {
x: 179,
y: -269
}, {
x: 171,
y: -284
}, {
x: 161,
y: -301
}, {
x: 148,
y: -316
}, {
x: 130,
y: -330
}, {
x: 98,
y: -346
}, {
x: 73,
y: -353
}, {
x: 45,
y: -359
}, {
x: -26,
y: -359
}, {
x: -54,
y: -356
}, {
x: -105,
y: -342
}, {
x: -132,
y: -328
}, {
x: -154,
y: -306
}, {
x: -164,
y: -286
}, {
x: -186,
y: -239
}, {
x: -196,
y: -201
}, {
x: -1e3,
y: -201
} ]
} ],
name: "Floor"
}, {
x: 278,
y: -150,
height: 112,
name: "FinishTarget"
}, {
y: -304,
width: 400,
name: "TriggerMove"
}, {
y: -23,
Floor: [ {
vertexes: [ {
x: -177,
y: 543
}, {
x: -163,
y: 547
}, {
x: -144,
y: 543
}, {
x: -117,
y: 525
}, {
x: -91,
y: 511
}, {
x: -79,
y: 529
}, {
x: -64,
y: 543
}, {
x: -45,
y: 553
}, {
x: -23,
y: 558
}, {
x: -276,
y: 672
}, {
x: -401,
y: 747
}, {
x: -469,
y: 874
}, {
x: 421,
y: 874
}, {
x: 335,
y: 745
}, {
x: 253,
y: 656
}, {
x: 176,
y: 619
}, {
x: 21,
y: 560
}, {
x: 52,
y: 550
}, {
x: 73,
y: 536
}, {
x: 92,
y: 510
}, {
x: 113,
y: 512
}, {
x: 153,
y: 539
}, {
x: 165,
y: 547
}, {
x: 171,
y: 549
}, {
x: 180,
y: 548
}, {
x: 184,
y: 543
}, {
x: 189,
y: 536
}, {
x: 191,
y: 527
}, {
x: 193,
y: 517
}, {
x: 193,
y: 500
}, {
x: 193,
y: 482
}, {
x: 191,
y: 462
}, {
x: 189,
y: 438
}, {
x: 185,
y: 422
}, {
x: 182,
y: 411
}, {
x: 176,
y: 391
}, {
x: 169,
y: 378
}, {
x: 161,
y: 367
}, {
x: 155,
y: 356
}, {
x: 146,
y: 345
}, {
x: 126,
y: 331
}, {
x: 110,
y: 322
}, {
x: 86,
y: 312
}, {
x: 65,
y: 307
}, {
x: 44,
y: 303
}, {
x: 27,
y: 303
}, {
x: -25,
y: 303
}, {
x: -56,
y: 307
}, {
x: -75,
y: 312
}, {
x: -104,
y: 320
}, {
x: -124,
y: 331
}, {
x: -138,
y: 342
}, {
x: -152,
y: 356
}, {
x: -163,
y: 373
}, {
x: -177,
y: 403
}, {
x: -184,
y: 424
}, {
x: -190,
y: 446
}, {
x: -194,
y: 469
}, {
x: -194,
y: 497
}, {
x: -194,
y: 521
}, {
x: -190,
y: 534
} ]
} ],
name: "FloorCut"
}, {
x: -263,
y: -203,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -237.236,
y: 436
},
pointEnd: {
x: 237.236,
y: 436
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 140,
y: -200
}, {
x: 140,
y: -412
}, {
x: 24,
y: -412
}, {
x: 23,
y: -243
}, {
x: -42,
y: -243
}, {
x: -43,
y: -412
}, {
x: -185,
y: -412
}, {
x: -185,
y: -203
}, {
x: -1e3,
y: -203
} ]
} ],
name: "Floor"
}, {
x: 245,
y: -150,
height: 112,
name: "FinishTarget"
}, {
y: 512,
Floor: [ {
vertexes: [ {
x: -3,
y: 282
}, {
x: -8,
y: 280
}, {
x: -13,
y: 277
}, {
x: -15,
y: 273
}, {
x: -16,
y: 268
}, {
x: -16,
y: 27
}, {
x: -24,
y: 26
}, {
x: -34,
y: 24
}, {
x: -52,
y: 20
}, {
x: -67,
y: 13
}, {
x: -83,
y: 4
}, {
x: -91,
y: -1
}, {
x: -99,
y: -7
}, {
x: -106,
y: -13
}, {
x: -113,
y: -20
}, {
x: -124,
y: -33
}, {
x: -133,
y: -46
}, {
x: -141,
y: -61
}, {
x: -148,
y: -77
}, {
x: -153,
y: -94
}, {
x: -155,
y: -112
}, {
x: -156,
y: -130
}, {
x: -155,
y: -149
}, {
x: -151,
y: -166
}, {
x: -146,
y: -183
}, {
x: -141,
y: -195
}, {
x: -133,
y: -208
}, {
x: -127,
y: -219
}, {
x: -118,
y: -229
}, {
x: -108,
y: -240
}, {
x: -99,
y: -248
}, {
x: -90,
y: -255
}, {
x: -78,
y: -263
}, {
x: -66,
y: -269
}, {
x: -53,
y: -274
}, {
x: -40,
y: -278
}, {
x: -27,
y: -281
}, {
x: -12,
y: -283
}, {
x: 3,
y: -283
}, {
x: 15,
y: -282
}, {
x: 27,
y: -281
}, {
x: 40,
y: -278
}, {
x: 53,
y: -274
}, {
x: 64,
y: -269
}, {
x: 77,
y: -263
}, {
x: 89,
y: -255
}, {
x: 98,
y: -248
}, {
x: 109,
y: -239
}, {
x: 117,
y: -230
}, {
x: 125,
y: -220
}, {
x: 133,
y: -208
}, {
x: 139,
y: -196
}, {
x: 145,
y: -183
}, {
x: 149,
y: -172
}, {
x: 152,
y: -160
}, {
x: 154,
y: -146
}, {
x: 155,
y: -133
}, {
x: 155,
y: -118
}, {
x: 153,
y: -103
}, {
x: 150,
y: -87
}, {
x: 146,
y: -74
}, {
x: 141,
y: -62
}, {
x: 134,
y: -49
}, {
x: 126,
y: -37
}, {
x: 117,
y: -25
}, {
x: 106,
y: -14
}, {
x: 95,
y: -5
}, {
x: 84,
y: 4
}, {
x: 71,
y: 11
}, {
x: 56,
y: 18
}, {
x: 44,
y: 22
}, {
x: 29,
y: 25
}, {
x: 15,
y: 27
}, {
x: 15,
y: 268
}, {
x: 14,
y: 273
}, {
x: 12,
y: 276
}, {
x: 10,
y: 279
}, {
x: 4,
y: 282
}, {
x: 2,
y: 282
} ]
} ],
name: "FloorCut"
}, {
x: -15,
y: -396,
width: 400,
name: "TriggerMove"
}, {
x: -11,
y: -249,
name: "ToolBounce"
}, {
x: -114,
y: -410,
scaleX: .7,
scaleY: .75,
ControlTarget: [ {
targetPos: {
x: -113.64,
y: -216.622
},
speed: 250
} ],
name: "ControlTarget"
}, {
x: 80,
y: -418,
ControllerUD: [ {
target: {
nodeId: 5
}
} ],
name: "ControllerUD"
}, {
x: 80,
y: -99,
PickKey: [ {
target: {
nodeId: 8
}
} ],
name: "PickKey"
}, {
x: 178,
y: -102,
name: "DoorLock"
}, {
x: -276,
y: -203,
name: "Role"
}, {
Help: [ {
pointStart: {
x: 45,
y: 198.423
},
pointEnd: {
x: 45,
y: 402
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: 45,
y: 402
},
pointEnd: {
x: 207.45,
y: 402
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 278,
y: -200
}, {
x: 270,
y: -219
}, {
x: 219,
y: -258
}, {
x: 137,
y: -305
}, {
x: 70,
y: -360
}, {
x: 38,
y: -372
}, {
x: 11,
y: -367
}, {
x: -15,
y: -415
}, {
x: -35,
y: -412
}, {
x: -74,
y: -394
}, {
x: -102,
y: -376
}, {
x: -120,
y: -361
}, {
x: -142,
y: -329
}, {
x: -139,
y: -203
}, {
x: -1e3,
y: -203
} ]
} ],
name: "Floor"
}, {
x: 312,
y: -150,
height: 112,
name: "FinishTarget"
}, {
x: 67,
y: 346,
Floor: [ {
vertexes: [ {
x: -159,
y: 202
}, {
x: -182,
y: 195
}, {
x: -194,
y: 187
}, {
x: -202,
y: 177
}, {
x: -201,
y: 171
}, {
x: -176,
y: 147
}, {
x: -176,
y: 140
}, {
x: -172,
y: 137
}, {
x: -169,
y: 126
}, {
x: -169,
y: 88
}, {
x: -191,
y: 13
}, {
x: -193,
y: -23
}, {
x: -183,
y: -58
}, {
x: -168,
y: -81
}, {
x: -203,
y: -109
}, {
x: -208,
y: -118
}, {
x: -187,
y: -147
}, {
x: -165,
y: -166
}, {
x: -136,
y: -185
}, {
x: -103,
y: -199
}, {
x: -82,
y: -202
}, {
x: -58,
y: -155
}, {
x: -28,
y: -158
}, {
x: -1,
y: -147
}, {
x: 69,
y: -93
}, {
x: 143,
y: -50
}, {
x: 178,
y: -26
}, {
x: 201,
y: -7
}, {
x: 207,
y: 7
}, {
x: 204,
y: 24
}, {
x: 189,
y: 34
}, {
x: 159,
y: 32
}, {
x: 130,
y: 20
}, {
x: 133,
y: 47
}, {
x: 125,
y: 70
}, {
x: 106,
y: 84
}, {
x: 85,
y: 85
}, {
x: 82,
y: 99
}, {
x: 69,
y: 118
}, {
x: 52,
y: 127
}, {
x: 35,
y: 128
}, {
x: 29,
y: 142
}, {
x: 12,
y: 154
}, {
x: -12,
y: 155
}, {
x: -36,
y: 145
}, {
x: -60,
y: 117
}, {
x: -79,
y: 79
}, {
x: -84,
y: 74
}, {
x: -88,
y: 75
}, {
x: -95,
y: 85
}, {
x: -92,
y: 140
}, {
x: -102,
y: 170
}, {
x: -109,
y: 180
}, {
x: -127,
y: 195
}, {
x: -140,
y: 200
} ]
} ],
name: "FloorCut"
}, {
x: -248,
y: -203,
name: "Role"
}, {
y: -309,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -165.292,
y: 355
},
pointEnd: {
x: 304.823,
y: 358
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -99
}, {
x: 191,
y: -99
}, {
x: 191,
y: -160
}, {
x: 183,
y: -178
}, {
x: 172,
y: -191
}, {
x: 149,
y: -196
}, {
x: 133,
y: -192
}, {
x: 118,
y: -186
}, {
x: 111,
y: -198
}, {
x: 93,
y: -214
}, {
x: 71,
y: -218
}, {
x: 54,
y: -209
}, {
x: 42,
y: -209
}, {
x: 34,
y: -221
}, {
x: 19,
y: -231
}, {
x: -9,
y: -231
}, {
x: -25,
y: -219
}, {
x: -25,
y: -348
}, {
x: -34,
y: -362
}, {
x: -49,
y: -372
}, {
x: -66,
y: -374
}, {
x: -84,
y: -368
}, {
x: -98,
y: -356
}, {
x: -107,
y: -341
}, {
x: -107,
y: -188
}, {
x: -182,
y: -114
}, {
x: -185,
y: -101
}, {
x: -1e3,
y: -101
} ]
} ],
name: "Floor"
}, {
x: 243,
y: -55,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -446,
y: 804
}, {
x: 385,
y: 804
}, {
x: 237,
y: 683
}, {
x: 144,
y: 632
}, {
x: 126,
y: 622
}, {
x: 108,
y: 604
}, {
x: 100,
y: 594
}, {
x: 96,
y: 581
}, {
x: 96,
y: 572
}, {
x: 104,
y: 558
}, {
x: 154,
y: 519
}, {
x: 170,
y: 497
}, {
x: 183,
y: 467
}, {
x: 183,
y: 269
}, {
x: 178,
y: 258
}, {
x: 172,
y: 248
}, {
x: 159,
y: 238
}, {
x: 146,
y: 236
}, {
x: 135,
y: 240
}, {
x: 121,
y: 252
}, {
x: 112,
y: 268
}, {
x: 109,
y: 241
}, {
x: 100,
y: 226
}, {
x: 89,
y: 219
}, {
x: 67,
y: 219
}, {
x: 57,
y: 225
}, {
x: 50,
y: 233
}, {
x: 46,
y: 241
}, {
x: 41,
y: 251
}, {
x: 40,
y: 235
}, {
x: 33,
y: 216
}, {
x: 18,
y: 207
}, {
x: 5,
y: 207
}, {
x: -5,
y: 210
}, {
x: -16,
y: 215
}, {
x: -24,
y: 224
}, {
x: -30,
y: 239
}, {
x: -30,
y: 93
}, {
x: -36,
y: 77
}, {
x: -46,
y: 69
}, {
x: -57,
y: 64
}, {
x: -68,
y: 64
}, {
x: -81,
y: 67
}, {
x: -90,
y: 74
}, {
x: -96,
y: 81
}, {
x: -99,
y: 91
}, {
x: -99,
y: 243
}, {
x: -171,
y: 314
}, {
x: -176,
y: 330
}, {
x: -104,
y: 510
}, {
x: -58,
y: 554
}, {
x: -52,
y: 566
}, {
x: -55,
y: 588
}, {
x: -68,
y: 608
}, {
x: -101,
y: 630
} ]
} ],
name: "FloorCut"
}, {
x: -227,
y: -110,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -217.191,
y: 331
},
pointEnd: {
x: 224.574,
y: 331
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -999,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -187
}, {
x: 172,
y: -187
}, {
x: 149,
y: -320
}, {
x: 132,
y: -338
}, {
x: 48,
y: -374
}, {
x: 24,
y: -391
}, {
x: -64,
y: -550
}, {
x: -82,
y: -554
}, {
x: -97,
y: -551
}, {
x: -202,
y: -385
}, {
x: -224,
y: -269
}, {
x: -242,
y: -49
}, {
x: -999,
y: -49
} ]
} ],
name: "Floor"
}, {
x: 274,
y: -140,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -318,
y: 824
}, {
x: 264,
y: 824
}, {
x: 148,
y: 464
}, {
x: -11,
y: 387
}, {
x: -53,
y: 298
}, {
x: -49,
y: 291
}, {
x: -34,
y: 287
}, {
x: 85,
y: 287
}, {
x: 95,
y: 285
}, {
x: 93,
y: 276
}, {
x: 88,
y: 268
}, {
x: 23,
y: 204
}, {
x: 5,
y: 174
}, {
x: -12,
y: 166
}, {
x: -36,
y: 163
}, {
x: -95,
y: 167
}, {
x: -181,
y: 167
}, {
x: -184,
y: 178
}, {
x: -189,
y: 255
}, {
x: -202,
y: 294
}, {
x: -213,
y: 346
}, {
x: -219,
y: 405
}, {
x: -225,
y: 515
} ]
} ],
name: "FloorCut"
}, {
x: -299,
y: -48,
name: "Role"
}, {
x: -26,
y: -391,
width: 400,
name: "TriggerMove"
}, {
x: -95,
y: -181,
width: 178,
height: 149,
AttributeStyle: [ {
index: 1,
vertexes: [ {
x: -85,
y: 74.5
}, {
x: -89,
y: 70.5
}, {
x: -88,
y: 60.5
}, {
x: -86,
y: 59.5
}, {
x: -85,
y: 55.5
}, {
x: -83,
y: 54.5
}, {
x: -83,
y: 52.5
}, {
x: -81,
y: 51.5
}, {
x: -81,
y: 49.5
}, {
x: -79,
y: 48.5
}, {
x: -79,
y: 46.5
}, {
x: -77,
y: 45.5
}, {
x: -77,
y: 43.5
}, {
x: -75,
y: 42.5
}, {
x: -75,
y: 40.5
}, {
x: -73,
y: 39.5
}, {
x: -73,
y: 37.5
}, {
x: -71,
y: 36.5
}, {
x: -71,
y: 34.5
}, {
x: -69,
y: 33.5
}, {
x: -69,
y: 31.5
}, {
x: -67,
y: 30.5
}, {
x: -67,
y: 28.5
}, {
x: -65,
y: 27.5
}, {
x: -57,
y: 13.5
}, {
x: -54,
y: 11.5
}, {
x: -54,
y: 9.5
}, {
x: -52,
y: 8.5
}, {
x: -44,
y: -5.5
}, {
x: -41,
y: -7.5
}, {
x: -41,
y: -9.5
}, {
x: -39,
y: -10.5
}, {
x: -39,
y: -12.5
}, {
x: -37,
y: -13.5
}, {
x: -37,
y: -15.5
}, {
x: -35,
y: -16.5
}, {
x: -35,
y: -18.5
}, {
x: -33,
y: -19.5
}, {
x: -33,
y: -21.5
}, {
x: -31,
y: -22.5
}, {
x: -31,
y: -24.5
}, {
x: -29,
y: -25.5
}, {
x: -21,
y: -39.5
}, {
x: -19,
y: -40.5
}, {
x: -18,
y: -44.5
}, {
x: -14,
y: -48.5
}, {
x: -13,
y: -52.5
}, {
x: -9,
y: -56.5
}, {
x: -1,
y: -72.5
}, {
x: 2,
y: -74.5
}, {
x: 10,
y: -74.5
}, {
x: 14,
y: -70.5
}, {
x: 27,
y: -44.5
}, {
x: 29,
y: -43.5
}, {
x: 33,
y: -33.5
}, {
x: 35,
y: -32.5
}, {
x: 39,
y: -22.5
}, {
x: 41,
y: -21.5
}, {
x: 45,
y: -11.5
}, {
x: 47,
y: -10.5
}, {
x: 51,
y: -.5
}, {
x: 53,
y: .5
}, {
x: 56,
y: 8.5
}, {
x: 58,
y: 9.5
}, {
x: 72,
y: 36.5
}, {
x: 74,
y: 37.5
}, {
x: 75,
y: 41.5
}, {
x: 77,
y: 42.5
}, {
x: 78,
y: 46.5
}, {
x: 80,
y: 47.5
}, {
x: 80,
y: 49.5
}, {
x: 82,
y: 50.5
}, {
x: 83,
y: 54.5
}, {
x: 85,
y: 55.5
}, {
x: 86,
y: 59.5
}, {
x: 89,
y: 62.5
}, {
x: 89,
y: 70.5
}, {
x: 85,
y: 74.5
} ]
} ],
name: "FakeStatic"
}, {
Help: [ {
pointStart: {
x: -284.847,
y: 466.663
},
pointEnd: {
x: 200.019,
y: 466.663
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -997,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -125
}, {
x: 113,
y: -125
}, {
x: 107,
y: -153
}, {
x: 100,
y: -161
}, {
x: 100,
y: -413
}, {
x: 4,
y: -505
}, {
x: -100,
y: -411
}, {
x: -100,
y: -161
}, {
x: -107,
y: -153
}, {
x: -113,
y: -125
}, {
x: -997,
y: -125
} ]
} ],
name: "Floor"
}, {
x: 193,
y: -81,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: 400,
y: 850
}, {
x: 400,
y: 637
}, {
x: 215,
y: 630
}, {
x: 105,
y: 618
}, {
x: 65,
y: 609
}, {
x: 35,
y: 595
}, {
x: 30,
y: 590
}, {
x: 29,
y: 586
}, {
x: 30,
y: 580
}, {
x: 32,
y: 577
}, {
x: 48,
y: 560
}, {
x: 56,
y: 543
}, {
x: 64,
y: 521
}, {
x: 68,
y: 502
}, {
x: 64,
y: 487
}, {
x: 58,
y: 473
}, {
x: 49,
y: 464
}, {
x: 49,
y: 369
}, {
x: 103,
y: 369
}, {
x: 111,
y: 356
}, {
x: 109,
y: 342
}, {
x: 106,
y: 323
}, {
x: 93,
y: 309
}, {
x: 93,
y: 61
}, {
x: 3,
y: -23
}, {
x: -85,
y: 61
}, {
x: -85,
y: 308
}, {
x: -99,
y: 322
}, {
x: -103,
y: 343
}, {
x: -103,
y: 358
}, {
x: -97,
y: 370
}, {
x: -43,
y: 370
}, {
x: -43,
y: 460
}, {
x: -57,
y: 487
}, {
x: -61,
y: 500
}, {
x: -61,
y: 514
}, {
x: -55,
y: 534
}, {
x: -35,
y: 566
}, {
x: -27,
y: 576
}, {
x: -24,
y: 584
}, {
x: -27,
y: 594
}, {
x: -39,
y: 604
}, {
x: -90,
y: 621
}, {
x: -152,
y: 630
}, {
x: -271,
y: 637
}, {
x: -400,
y: 637
}, {
x: -400,
y: 850
} ]
} ],
name: "FloorCut"
}, {
x: -176,
y: -129,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -154.654,
y: 356
},
pointEnd: {
x: 154.654,
y: 356
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 151,
y: -201
}, {
x: 150,
y: -276
}, {
x: 136,
y: -309
}, {
x: 101,
y: -306
}, {
x: 95,
y: -412
}, {
x: 13,
y: -416
}, {
x: 4,
y: -340
}, {
x: -12,
y: -338
}, {
x: -25,
y: -340
}, {
x: -26,
y: -403
}, {
x: -36,
y: -413
}, {
x: -134,
y: -414
}, {
x: -134,
y: -295
}, {
x: -143,
y: -270
}, {
x: -148,
y: -236
}, {
x: -151,
y: -200
}, {
x: -1e3,
y: -200
} ]
} ],
name: "Floor"
}, {
x: 278,
y: -150,
height: 112,
name: "FinishTarget"
}, {
y: 308,
Floor: [ {
vertexes: [ {
x: -14,
y: 220
}, {
x: -42,
y: 216
}, {
x: -70,
y: 208
}, {
x: -94,
y: 184
}, {
x: -105,
y: 151
}, {
x: -112,
y: 144
}, {
x: -126,
y: 136
}, {
x: -134,
y: 112
}, {
x: -134,
y: 36
}, {
x: -142,
y: -10
}, {
x: -143,
y: -28
}, {
x: -143,
y: -40
}, {
x: -141,
y: -64
}, {
x: -138,
y: -74
}, {
x: -135,
y: -84
}, {
x: -128,
y: -99
}, {
x: -116,
y: -111
}, {
x: -102,
y: -184
}, {
x: -110,
y: -192
}, {
x: -118,
y: -204
}, {
x: -114,
y: -216
}, {
x: -34,
y: -216
}, {
x: -26,
y: -208
}, {
x: -26,
y: -144
}, {
x: -11,
y: -142
}, {
x: 6,
y: -144
}, {
x: 10,
y: -154
}, {
x: 15,
y: -171
}, {
x: 20,
y: -190
}, {
x: 15,
y: -204
}, {
x: 17,
y: -218
}, {
x: 59,
y: -219
}, {
x: 92,
y: -214
}, {
x: 96,
y: -108
}, {
x: 104,
y: -105
}, {
x: 132,
y: -107
}, {
x: 140,
y: -75
}, {
x: 142,
y: 0
}, {
x: 138,
y: 52
}, {
x: 122,
y: 81
}, {
x: 112,
y: 82
}, {
x: 102,
y: 80
}, {
x: 91,
y: 141
}, {
x: 86,
y: 159
}, {
x: 74,
y: 188
}, {
x: 50,
y: 212
} ]
} ],
name: "FloorCut"
}, {
y: -380,
width: 400,
name: "TriggerMove"
}, {
y: -122,
PickKey: [ {
target: {
nodeId: 5
}
} ],
name: "PickKey"
}, {
x: 198,
y: -107,
name: "DoorLock"
}, {
x: -248,
y: -203,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -189.328,
y: 300
},
pointEnd: {
x: 191.131,
y: 300
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -227
}, {
x: 223,
y: -227
}, {
x: 215,
y: -237
}, {
x: 215,
y: -402
}, {
x: -176,
y: -604
}, {
x: -176,
y: -235
}, {
x: -180,
y: -226
}, {
x: -1e3,
y: -226
} ]
} ],
name: "Floor"
}, {
x: 297,
y: -180,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -460,
y: 844
}, {
x: 472,
y: 844
}, {
x: 472,
y: 559
}, {
x: 285,
y: 509
}, {
x: 203,
y: 402
}, {
x: 203,
y: 229
}, {
x: -161,
y: 42
}, {
x: -161,
y: 404
}, {
x: -276,
y: 442
}, {
x: -460,
y: 591
} ]
} ],
name: "FloorCut"
}, {
x: 17,
y: -403,
width: 400,
name: "TriggerMove"
}, {
x: -98,
y: -293,
name: "FakeStatic"
}, {
x: 22,
y: -234,
name: "FakeStatic"
}, {
x: 146,
y: -170,
name: "FakeStatic"
}, {
x: -251,
y: -229,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -212.844,
y: 284
},
pointEnd: {
x: 249.978,
y: 284
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -999,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -258
}, {
x: 178,
y: -258
}, {
x: 165,
y: -306
}, {
x: 140,
y: -317
}, {
x: 130,
y: -340
}, {
x: 108,
y: -362
}, {
x: 86,
y: -370
}, {
x: 64,
y: -369
}, {
x: 47,
y: -361
}, {
x: 47,
y: -546
}, {
x: 48,
y: -566
}, {
x: 43,
y: -576
}, {
x: 35,
y: -582
}, {
x: 26,
y: -588
}, {
x: 15,
y: -588
}, {
x: 2,
y: -586
}, {
x: -5,
y: -580
}, {
x: -15,
y: -571
}, {
x: -18,
y: -556
}, {
x: -27,
y: -564
}, {
x: -38,
y: -571
}, {
x: -53,
y: -570
}, {
x: -73,
y: -562
}, {
x: -83,
y: -552
}, {
x: -93,
y: -539
}, {
x: -98,
y: -519
}, {
x: -94,
y: -296
}, {
x: -139,
y: -247
}, {
x: -139,
y: -177
}, {
x: -999,
y: -177
} ]
} ],
name: "Floor"
}, {
x: 266,
y: -210,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -72,
y: 827
}, {
x: 123,
y: 827
}, {
x: 123,
y: 574
}, {
x: 140,
y: 552
}, {
x: 144,
y: 538
}, {
x: 170,
y: 356
}, {
x: 166,
y: 345
}, {
x: 158,
y: 331
}, {
x: 147,
y: 320
}, {
x: 139,
y: 317
}, {
x: 124,
y: 319
}, {
x: 115,
y: 326
}, {
x: 115,
y: 290
}, {
x: 105,
y: 278
}, {
x: 93,
y: 268
}, {
x: 78,
y: 259
}, {
x: 64,
y: 262
}, {
x: 53,
y: 267
}, {
x: 34,
y: 278
}, {
x: 39,
y: 87
}, {
x: 33,
y: 64
}, {
x: 26,
y: 53
}, {
x: 10,
y: 42
}, {
x: -2,
y: 42
}, {
x: -13,
y: 52
}, {
x: -21,
y: 65
}, {
x: -28,
y: 89
}, {
x: -40,
y: 84
}, {
x: -49,
y: 81
}, {
x: -61,
y: 80
}, {
x: -71,
y: 80
}, {
x: -80,
y: 90
}, {
x: -85,
y: 105
}, {
x: -88,
y: 160
}, {
x: -88,
y: 331
}, {
x: -129,
y: 374
}, {
x: -125,
y: 462
}, {
x: -119,
y: 496
}, {
x: -108,
y: 521
}, {
x: -72,
y: 576
} ]
} ],
name: "FloorCut"
}, {
x: -220,
y: -186,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -173.528,
y: 462
},
pointEnd: {
x: 219.336,
y: 357
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 164,
y: -200
}, {
x: 164,
y: -270
}, {
x: 113,
y: -270
}, {
x: 100,
y: -288
}, {
x: 99,
y: -359
}, {
x: 20,
y: -359
}, {
x: 6,
y: -373
}, {
x: 6,
y: -479
}, {
x: -6,
y: -495
}, {
x: -43,
y: -496
}, {
x: -56,
y: -485
}, {
x: -56,
y: -229
}, {
x: -96,
y: -199
}, {
x: -193,
y: -200
}, {
x: -1e3,
y: -200
} ]
} ],
name: "Floor"
}, {
x: 270,
y: -150,
height: 112,
name: "FinishTarget"
}, {
y: 328,
Floor: [ {
vertexes: [ {
x: 0,
y: 143
}, {
x: -22,
y: 159
}, {
x: -19,
y: 165
}, {
x: -17,
y: 171
}, {
x: -20,
y: 177
}, {
x: -24,
y: 181
}, {
x: -43,
y: 186
}, {
x: -48,
y: 193
}, {
x: -59,
y: 196
}, {
x: -70,
y: 193
}, {
x: -86,
y: 179
}, {
x: -122,
y: 108
}, {
x: -128,
y: 84
}, {
x: -123,
y: 94
}, {
x: -127,
y: 77
}, {
x: -114,
y: 95
}, {
x: -120,
y: 72
}, {
x: -140,
y: 46
}, {
x: -124,
y: 58
}, {
x: -137,
y: 18
}, {
x: -108,
y: 45
}, {
x: -111,
y: 8
}, {
x: -70,
y: 51
}, {
x: -75,
y: 22
}, {
x: -104,
y: -54
}, {
x: -103,
y: -80
}, {
x: -99,
y: -81
}, {
x: -84,
y: -56
}, {
x: -78,
y: -71
}, {
x: -73,
y: -71
}, {
x: -81,
y: -47
}, {
x: -75,
y: -21
}, {
x: -38,
y: 37
}, {
x: -31,
y: 83
}, {
x: -24,
y: 91
}, {
x: -7,
y: 76
}, {
x: -1,
y: 65
}, {
x: 0,
y: 48
}, {
x: -32,
y: 22
}, {
x: -41,
y: 6
}, {
x: -43,
y: -4
}, {
x: -43,
y: -16
}, {
x: -39,
y: -29
}, {
x: -31,
y: -39
}, {
x: -27,
y: -46
}, {
x: -24,
y: -136
}, {
x: -31,
y: -150
}, {
x: -37,
y: -171
}, {
x: -36,
y: -246
}, {
x: -51,
y: -254
}, {
x: -51,
y: -266
}, {
x: -32,
y: -304
}, {
x: -15,
y: -309
}, {
x: -22,
y: -280
}, {
x: -16,
y: -264
}, {
x: -12,
y: -194
}, {
x: 12,
y: -124
}, {
x: 19,
y: -45
}, {
x: 24,
y: -39
}, {
x: 37,
y: -41
}, {
x: 95,
y: -43
}, {
x: 84,
y: -52
}, {
x: 79,
y: -58
}, {
x: 40,
y: -132
}, {
x: 29,
y: -131
}, {
x: 26,
y: -146
}, {
x: 54,
y: -175
}, {
x: 58,
y: -170
}, {
x: 53,
y: -153
}, {
x: 130,
y: -50
}, {
x: 137,
y: -38
}, {
x: 135,
y: -30
}, {
x: 124,
y: -17
}, {
x: 47,
y: 7
}, {
x: 42,
y: 14
}, {
x: 42,
y: 30
}, {
x: 52,
y: 81
}, {
x: 60,
y: 85
}, {
x: 66,
y: 88
}, {
x: 70,
y: 95
}, {
x: 70,
y: 103
}, {
x: 68,
y: 109
}, {
x: 63,
y: 114
}, {
x: 50,
y: 121
}, {
x: 27,
y: 125
}, {
x: 28,
y: 133
}, {
x: 88,
y: 161
}, {
x: 91,
y: 164
}, {
x: 91,
y: 168
}, {
x: 52,
y: 245
}, {
x: 45,
y: 247
}, {
x: 35,
y: 246
}, {
x: 33,
y: 235
}, {
x: 54,
y: 218
}, {
x: 70,
y: 171
} ]
} ],
name: "FloorCut"
}, {
x: -248,
y: -203,
name: "Role"
}, {
y: -365,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -51.084,
y: 320
},
pointEnd: {
x: 134.331,
y: 320
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -996,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -230
}, {
x: 182,
y: -230
}, {
x: 153,
y: -265
}, {
x: 133,
y: -284
}, {
x: 102,
y: -296
}, {
x: 79,
y: -300
}, {
x: 53,
y: -300
}, {
x: 30,
y: -294
}, {
x: 16,
y: -284
}, {
x: -6,
y: -256
}, {
x: -39,
y: -303
}, {
x: -82,
y: -332
}, {
x: -119,
y: -343
}, {
x: -158,
y: -340
}, {
x: -186,
y: -322
}, {
x: -197,
y: -300
}, {
x: -201,
y: -266
}, {
x: -996,
y: -266
} ]
} ],
name: "Floor"
}, {
x: 247,
y: -189,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -590,
y: 850
}, {
x: 525,
y: 850
}, {
x: 525,
y: 350
}, {
x: 252,
y: 334
}, {
x: 182,
y: 311
}, {
x: 182,
y: 142
}, {
x: 179,
y: 118
}, {
x: 172,
y: 98
}, {
x: 160,
y: 80
}, {
x: 128,
y: 53
}, {
x: 97,
y: 40
}, {
x: 73,
y: 35
}, {
x: 41,
y: 38
}, {
x: 18,
y: 51
}, {
x: 5,
y: 71
}, {
x: 4,
y: 90
}, {
x: 6,
y: 103
}, {
x: 17,
y: 127
}, {
x: 35,
y: 147
}, {
x: 52,
y: 160
}, {
x: 75,
y: 173
}, {
x: 99,
y: 181
}, {
x: 125,
y: 181
}, {
x: 149,
y: 179
}, {
x: 169,
y: 167
}, {
x: 169,
y: 289
}, {
x: -16,
y: 289
}, {
x: -16,
y: 71
}, {
x: -24,
y: 57
}, {
x: -33,
y: 44
}, {
x: -42,
y: 31
}, {
x: -62,
y: 15
}, {
x: -87,
y: 1
}, {
x: -114,
y: -7
}, {
x: -140,
y: -8
}, {
x: -158,
y: -5
}, {
x: -176,
y: 5
}, {
x: -186,
y: 16
}, {
x: -193,
y: 33
}, {
x: -193,
y: 56
}, {
x: -181,
y: 82
}, {
x: -163,
y: 103
}, {
x: -140,
y: 120
}, {
x: -113,
y: 133
}, {
x: -83,
y: 138
}, {
x: -54,
y: 138
}, {
x: -30,
y: 124
}, {
x: -30,
y: 310
}, {
x: -111,
y: 333
}, {
x: -590,
y: 333
} ]
} ],
name: "FloorCut"
}, {
x: -264,
y: -275,
name: "Role"
}, {
x: -25,
y: -286,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -238.033,
y: 62
},
pointEnd: {
x: 226.081,
y: 112
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 244,
y: -201
}, {
x: 236,
y: -222
}, {
x: 219,
y: -241
}, {
x: 203,
y: -248
}, {
x: 177,
y: -242
}, {
x: 158,
y: -222
}, {
x: 154,
y: -200
}, {
x: 108,
y: -200
}, {
x: 108,
y: -450
}, {
x: -85,
y: -450
}, {
x: -85,
y: -200
}, {
x: -1e3,
y: -200
} ]
} ],
name: "Floor"
}, {
x: 42,
y: 371,
width: 400,
height: 400,
Floor: [ {
vertexes: [ {
x: 1,
y: 232
}, {
x: -19,
y: 220
}, {
x: -29,
y: 208
}, {
x: -23,
y: 188
}, {
x: -13,
y: 174
}, {
x: -45,
y: 157
}, {
x: -60,
y: 155
}, {
x: -72,
y: 142
}, {
x: -77,
y: 128
}, {
x: -141,
y: 72
}, {
x: -202,
y: -2
}, {
x: -202,
y: -21
}, {
x: -198,
y: -27
}, {
x: -185,
y: -29
}, {
x: -176,
y: -14
}, {
x: -166,
y: -23
}, {
x: -158,
y: 22
}, {
x: -114,
y: 58
}, {
x: -103,
y: 57
}, {
x: -106,
y: 15
}, {
x: -92,
y: -78
}, {
x: -93,
y: -95
}, {
x: -104,
y: -117
}, {
x: -109,
y: -142
}, {
x: -110,
y: -173
}, {
x: -118,
y: -200
}, {
x: -116,
y: -229
}, {
x: -101,
y: -233
}, {
x: -84,
y: -229
}, {
x: -89,
y: -207
}, {
x: -87,
y: -179
}, {
x: -76,
y: -160
}, {
x: -66,
y: -127
}, {
x: -45,
y: -92
}, {
x: -52,
y: -50
}, {
x: -45,
y: -15
}, {
x: 0,
y: -79
}, {
x: 9,
y: -100
}, {
x: 3,
y: -171
}, {
x: -8,
y: -207
}, {
x: 26,
y: -218
}, {
x: 62,
y: -219
}, {
x: 60,
y: -208
}, {
x: 42,
y: -198
}, {
x: 26,
y: -178
}, {
x: 53,
y: -112
}, {
x: 54,
y: -95
}, {
x: 34,
y: -34
}, {
x: 10,
y: 12
}, {
x: 10,
y: 34
}, {
x: 4,
y: 51
}, {
x: 23,
y: 75
}, {
x: 52,
y: 95
}, {
x: 121,
y: 78
}, {
x: 149,
y: 63
}, {
x: 138,
y: 60
}, {
x: 122,
y: 44
}, {
x: 118,
y: 32
}, {
x: 120,
y: 12
}, {
x: 137,
y: -8
}, {
x: 162,
y: -13
}, {
x: 177,
y: -8
}, {
x: 196,
y: 10
}, {
x: 202,
y: 55
}, {
x: 198,
y: 68
}, {
x: 173,
y: 86
}, {
x: 91,
y: 120
}, {
x: 77,
y: 141
}, {
x: 37,
y: 161
}, {
x: 47,
y: 189
}, {
x: 60,
y: 195
}, {
x: 58,
y: 216
}, {
x: 28,
y: 232
} ]
} ],
name: "FloorCut"
}, {
x: 295,
y: -144,
height: 112,
name: "FinishTarget"
}, {
x: 10,
y: -298,
width: 229,
name: "TriggerMove"
}, {
x: 197,
y: -216,
width: 127,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -91.15,
y: 390
},
pointEnd: {
x: 91.15,
y: 390
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: 131,
y: 397.997
},
pointEnd: {
x: 261.745,
y: 397.997
}
} ],
name: "Help"
}, {
x: -247,
y: -204,
name: "Role"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -999,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -164
}, {
x: 33,
y: -164
}, {
x: 33,
y: -383
}, {
x: 19,
y: -390
}, {
x: 10,
y: -394
}, {
x: -5,
y: -395
}, {
x: -17,
y: -392
}, {
x: -31,
y: -383
}, {
x: -44,
y: -379
}, {
x: -60,
y: -380
}, {
x: -88,
y: -385
}, {
x: -134,
y: -392
}, {
x: -188,
y: -400
}, {
x: -188,
y: -166
}, {
x: -999,
y: -164
} ]
} ],
name: "Floor"
}, {
x: 211,
y: -121,
height: 112,
name: "FinishTarget"
}, {
y: 388,
Floor: [ {
vertexes: [ {
x: -64,
y: 119
}, {
x: -78,
y: 115
}, {
x: -103,
y: 111
}, {
x: -118,
y: 110
}, {
x: -140,
y: 110
}, {
x: -149,
y: 101
}, {
x: -159,
y: 96
}, {
x: -160,
y: 95
}, {
x: -173,
y: 93
}, {
x: -173,
y: 92
}, {
x: -180,
y: -120
}, {
x: -165,
y: -120
}, {
x: -142,
y: -118
}, {
x: -115,
y: -116
}, {
x: -104,
y: -114
}, {
x: -93,
y: -112
}, {
x: -78,
y: -108
}, {
x: -61,
y: -106
}, {
x: -45,
y: -106
}, {
x: -36,
y: -107
}, {
x: -25,
y: -112
}, {
x: -21,
y: -114
}, {
x: -19,
y: -117
}, {
x: -16,
y: -119
}, {
x: -1,
y: -121
}, {
x: 12,
y: -119
}, {
x: 18,
y: -116
}, {
x: 25,
y: -110
}, {
x: 36,
y: -107
}, {
x: 46,
y: -106
}, {
x: 71,
y: -107
}, {
x: 92,
y: -113
}, {
x: 100,
y: -114
}, {
x: 126,
y: -118
}, {
x: 174,
y: -121
}, {
x: 180,
y: -120
}, {
x: 174,
y: 91
}, {
x: 172,
y: 92
}, {
x: 162,
y: 92
}, {
x: 159,
y: 94
}, {
x: 156,
y: 96
}, {
x: 149,
y: 100
}, {
x: 140,
y: 109
}, {
x: 118,
y: 109
}, {
x: 103,
y: 110
}, {
x: 84,
y: 114
}, {
x: 62,
y: 120
}, {
x: 49,
y: 121
}, {
x: 35,
y: 120
}, {
x: 25,
y: 118
}, {
x: 10,
y: 112
}, {
x: 1,
y: 104
}, {
x: -2,
y: 104
}, {
x: -6,
y: 109
}, {
x: -11,
y: 113
}, {
x: -23,
y: 117
}, {
x: -34,
y: 120
}, {
x: -48,
y: 120
} ]
} ],
name: "FloorCut"
}, {
x: -260,
y: -171,
name: "Role"
}, {
x: -51,
y: -367,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: 30,
y: 537.234
},
pointEnd: {
x: 30,
y: 219.014
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 172,
y: -201
}, {
x: 159,
y: -224
}, {
x: 52,
y: -289
}, {
x: 52,
y: -364
}, {
x: -90,
y: -363
}, {
x: -112,
y: -331
}, {
x: -109,
y: -204
}, {
x: -1e3,
y: -201
} ]
} ],
name: "Floor"
}, {
x: 245,
y: -150,
height: 112,
name: "FinishTarget"
}, {
x: 13,
y: 395,
Floor: [ {
vertexes: [ {
x: -92,
y: 138
}, {
x: -87,
y: 130
}, {
x: -79,
y: 125
}, {
x: -74,
y: 115
}, {
x: -60,
y: 94
}, {
x: -50,
y: 78
}, {
x: -27,
y: 41
}, {
x: 21,
y: -35
}, {
x: 26,
y: -47
}, {
x: -17,
y: -75
}, {
x: -30,
y: -99
}, {
x: -30,
y: -106
}, {
x: 12,
y: -168
}, {
x: 39,
y: -167
}, {
x: 146,
y: -100
}, {
x: 159,
y: -77
}, {
x: 158,
y: -65
}, {
x: 118,
y: -3
}, {
x: 92,
y: -4
}, {
x: 51,
y: -30
}, {
x: 48,
y: -30
}, {
x: 42,
y: -24
}, {
x: -5,
y: 49
}, {
x: -60,
y: 136
}, {
x: -63,
y: 147
}, {
x: -70,
y: 152
}, {
x: -75,
y: 156
}, {
x: -92,
y: 145
} ]
} ],
name: "FloorCut"
}, {
y: -246,
width: 400,
name: "TriggerMove"
}, {
x: -7,
y: 137,
AttributeStyle: [ {
vertexes: [ {
x: -11,
y: 59
}, {
x: -24,
y: 55
}, {
x: -33,
y: 50
}, {
x: -34,
y: 48
}, {
x: -36,
y: 48
}, {
x: -38,
y: 45
}, {
x: -40,
y: 45
}, {
x: -52,
y: 30
}, {
x: -57,
y: 19
}, {
x: -59,
y: 11
}, {
x: -59,
y: -11
}, {
x: -55,
y: -24
}, {
x: -50,
y: -33
}, {
x: -48,
y: -34
}, {
x: -48,
y: -36
}, {
x: -45,
y: -38
}, {
x: -45,
y: -40
}, {
x: -30,
y: -52
}, {
x: -19,
y: -57
}, {
x: -11,
y: -59
}, {
x: 11,
y: -59
}, {
x: 19,
y: -57
}, {
x: 30,
y: -52
}, {
x: 45,
y: -40
}, {
x: 45,
y: -38
}, {
x: 48,
y: -36
}, {
x: 48,
y: -34
}, {
x: 50,
y: -33
}, {
x: 55,
y: -24
}, {
x: 59,
y: -11
}, {
x: 59,
y: 11
}, {
x: 57,
y: 19
}, {
x: 52,
y: 30
}, {
x: 44,
y: 39
}, {
x: 44,
y: 41
}, {
x: 30,
y: 52
}, {
x: 19,
y: 57
}, {
x: 11,
y: 59
} ]
} ],
name: "FakeStatic"
}, {
x: -248,
y: -203,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -39.727,
y: 280
},
pointEnd: {
x: 221.335,
y: 330.3
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -999,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 171,
y: -200
}, {
x: 171,
y: -440
}, {
x: 113,
y: -440
}, {
x: 116,
y: -395
}, {
x: 109,
y: -338
}, {
x: 109,
y: -307
}, {
x: 103,
y: -288
}, {
x: 70,
y: -254
}, {
x: 64,
y: -243
}, {
x: 50,
y: -228
}, {
x: 30,
y: -219
}, {
x: 14,
y: -220
}, {
x: -33,
y: -253
}, {
x: -51,
y: -270
}, {
x: -67,
y: -277
}, {
x: -78,
y: -307
}, {
x: -86,
y: -341
}, {
x: -98,
y: -397
}, {
x: -98,
y: -437
}, {
x: -152,
y: -437
}, {
x: -152,
y: -215
}, {
x: -999,
y: -215
} ]
} ],
name: "Floor"
}, {
x: 268,
y: -150,
height: 112,
name: "FinishTarget"
}, {
y: 312,
Floor: [ {
vertexes: [ {
x: 80,
y: 264
}, {
x: 62,
y: 261
}, {
x: 46,
y: 254
}, {
x: 39,
y: 239
}, {
x: 42,
y: 210
}, {
x: -2,
y: 206
}, {
x: -34,
y: 189
}, {
x: -65,
y: 151
}, {
x: -86,
y: 118
}, {
x: -88,
y: 110
}, {
x: -80,
y: 95
}, {
x: -59,
y: 72
}, {
x: -41,
y: 62
}, {
x: -37,
y: 55
}, {
x: -30,
y: 51
}, {
x: -30,
y: 38
}, {
x: -46,
y: 29
}, {
x: -52,
y: -1
}, {
x: -88,
y: -42
}, {
x: -104,
y: -74
}, {
x: -112,
y: -83
}, {
x: -122,
y: -115
}, {
x: -130,
y: -198
}, {
x: -134,
y: -210
}, {
x: -133,
y: -216
}, {
x: -127,
y: -218
}, {
x: -128,
y: -230
}, {
x: -136,
y: -252
}, {
x: -145,
y: -256
}, {
x: -149,
y: -264
}, {
x: -104,
y: -264
}, {
x: -104,
y: -226
}, {
x: -84,
y: -167
}, {
x: -79,
y: -135
}, {
x: -72,
y: -113
}, {
x: -65,
y: -102
}, {
x: -52,
y: -96
}, {
x: -36,
y: -79
}, {
x: -8,
y: -59
}, {
x: 15,
y: -46
}, {
x: 31,
y: -45
}, {
x: 47,
y: -54
}, {
x: 63,
y: -70
}, {
x: 71,
y: -83
}, {
x: 108,
y: -116
}, {
x: 111,
y: -128
}, {
x: 111,
y: -167
}, {
x: 123,
y: -225
}, {
x: 117,
y: -265
}, {
x: 168,
y: -265
}, {
x: 166,
y: -259
}, {
x: 154,
y: -254
}, {
x: 146,
y: -228
}, {
x: 147,
y: -218
}, {
x: 151,
y: -214
}, {
x: 153,
y: -173
}, {
x: 153,
y: -129
}, {
x: 149,
y: -112
}, {
x: 151,
y: -100
}, {
x: 146,
y: -95
}, {
x: 137,
y: -70
}, {
x: 120,
y: -40
}, {
x: 119,
y: -24
}, {
x: 97,
y: -3
}, {
x: 86,
y: 18
}, {
x: 86,
y: 21
}, {
x: 90,
y: 18
}, {
x: 95,
y: 19
}, {
x: 102,
y: 29
}, {
x: 110,
y: 33
}, {
x: 122,
y: 56
}, {
x: 128,
y: 76
}, {
x: 127,
y: 96
}, {
x: 130,
y: 106
}, {
x: 126,
y: 140
}, {
x: 101,
y: 177
}, {
x: 108,
y: 191
}, {
x: 120,
y: 199
}, {
x: 124,
y: 227
}, {
x: 109,
y: 251
} ]
} ],
name: "FloorCut"
}, {
y: -370,
width: 400,
name: "TriggerMove"
}, {
x: -248,
y: -227,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -130.934,
y: 242
},
pointEnd: {
x: 162.437,
y: 302
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 218,
y: -200
}, {
x: 201,
y: -222
}, {
x: 146,
y: -231
}, {
x: 124,
y: -221
}, {
x: 88,
y: -277
}, {
x: 88,
y: -311
}, {
x: 84,
y: -340
}, {
x: -27,
y: -340
}, {
x: -27,
y: -236
}, {
x: -164,
y: -236
}, {
x: -164,
y: -200
}, {
x: -1e3,
y: -200
} ]
} ],
name: "Floor"
}, {
x: 282,
y: -150,
height: 112,
name: "FinishTarget"
}, {
y: 378,
Floor: [ {
vertexes: [ {
x: -214,
y: 166
}, {
x: -214,
y: 157
}, {
x: -206,
y: 145
}, {
x: -187,
y: 133
}, {
x: -174,
y: 118
}, {
x: -160,
y: 113
}, {
x: -124,
y: 77
}, {
x: -108,
y: 67
}, {
x: -95,
y: 64
}, {
x: -89,
y: 58
}, {
x: -76,
y: 52
}, {
x: -47,
y: 22
}, {
x: -32,
y: 13
}, {
x: -16,
y: 10
}, {
x: -16,
y: -111
}, {
x: -19,
y: -126
}, {
x: -19,
y: -149
}, {
x: -25,
y: -167
}, {
x: 82,
y: -167
}, {
x: 79,
y: -145
}, {
x: 82,
y: -138
}, {
x: 82,
y: -105
}, {
x: 95,
y: -90
}, {
x: 101,
y: -77
}, {
x: 114,
y: -61
}, {
x: 123,
y: -44
}, {
x: 146,
y: -57
}, {
x: 167,
y: -57
}, {
x: 198,
y: -51
}, {
x: 205,
y: -47
}, {
x: 214,
y: -34
}, {
x: 213,
y: -27
}, {
x: 194,
y: 12
}, {
x: 166,
y: 43
}, {
x: 159,
y: 55
}, {
x: 155,
y: 58
}, {
x: 132,
y: 59
}, {
x: 117,
y: 57
}, {
x: 112,
y: 41
}, {
x: 112,
y: 32
}, {
x: 114,
y: 31
}, {
x: 113,
y: 23
}, {
x: 115,
y: 21
}, {
x: 121,
y: 24
}, {
x: 127,
y: 23
}, {
x: 130,
y: 30
}, {
x: 148,
y: 37
}, {
x: 154,
y: 32
}, {
x: 159,
y: 21
}, {
x: 164,
y: -3
}, {
x: 157,
y: 3
}, {
x: 154,
y: 4
}, {
x: 153,
y: 4
}, {
x: 150,
y: 3
}, {
x: 142,
y: -2
}, {
x: 134,
y: 6
}, {
x: 126,
y: 11
}, {
x: 117,
y: 13
}, {
x: 101,
y: 12
}, {
x: 82,
y: 27
}, {
x: 82,
y: 38
}, {
x: 95,
y: 58
}, {
x: 97,
y: 78
}, {
x: 91,
y: 94
}, {
x: 79,
y: 107
}, {
x: 63,
y: 108
}, {
x: 47,
y: 101
}, {
x: 32,
y: 77
}, {
x: 32,
y: 73
}, {
x: 30,
y: 66
}, {
x: 27,
y: 59
}, {
x: 27,
y: 53
}, {
x: 25,
y: 50
}, {
x: 12,
y: 59
}, {
x: -24,
y: 64
}, {
x: -49,
y: 82
}, {
x: -65,
y: 85
}, {
x: -83,
y: 100
}, {
x: -108,
y: 111
}, {
x: -120,
y: 112
}, {
x: -180,
y: 150
} ]
} ],
name: "FloorCut"
}, {
x: 57,
y: -294,
width: 400,
name: "TriggerMove"
}, {
x: -133,
y: -237,
name: "ToolBounce"
}, {
x: -248,
y: -203,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -53.437,
y: 348.174
},
pointEnd: {
x: 257.557,
y: 348.174
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 217,
y: -200
}, {
x: 213,
y: -219
}, {
x: 202,
y: -243
}, {
x: 182,
y: -274
}, {
x: 159,
y: -294
}, {
x: 131,
y: -312
}, {
x: 100,
y: -327
}, {
x: 67,
y: -336
}, {
x: 67,
y: -355
}, {
x: 47,
y: -360
}, {
x: 26,
y: -363
}, {
x: -8,
y: -363
}, {
x: -8,
y: -205
}, {
x: -1e3,
y: -205
} ]
} ],
name: "Floor"
}, {
x: 278,
y: -150,
height: 112,
name: "FinishTarget"
}, {
y: 400,
Floor: [ {
vertexes: [ {
x: -5,
y: 238
}, {
x: -9,
y: 230
}, {
x: -9,
y: 209
}, {
x: -37,
y: 209
}, {
x: -57,
y: 204
}, {
x: -61,
y: 201
}, {
x: -61,
y: 178
}, {
x: -84,
y: 174
}, {
x: -113,
y: 166
}, {
x: -138,
y: 153
}, {
x: -169,
y: 130
}, {
x: -187,
y: 110
}, {
x: -200,
y: 90
}, {
x: -211,
y: 65
}, {
x: -216,
y: 43
}, {
x: -216,
y: 11
}, {
x: -211,
y: -13
}, {
x: -200,
y: -38
}, {
x: -180,
y: -65
}, {
x: -155,
y: -88
}, {
x: -128,
y: -105
}, {
x: -93,
y: -119
}, {
x: -61,
y: -128
}, {
x: -61,
y: -147
}, {
x: -42,
y: -151
}, {
x: -20,
y: -153
}, {
x: -9,
y: -154
}, {
x: 0,
y: -154
}, {
x: 10,
y: -154
}, {
x: 37,
y: -152
}, {
x: 54,
y: -150
}, {
x: 67,
y: -146
}, {
x: 67,
y: -126
}, {
x: 97,
y: -117
}, {
x: 117,
y: -109
}, {
x: 146,
y: -93
}, {
x: 169,
y: -76
}, {
x: 186,
y: -57
}, {
x: 201,
y: -35
}, {
x: 211,
y: -11
}, {
x: 216,
y: 17
}, {
x: 216,
y: 45
}, {
x: 208,
y: 72
}, {
x: 196,
y: 97
}, {
x: 177,
y: 121
}, {
x: 156,
y: 140
}, {
x: 125,
y: 160
}, {
x: 108,
y: 168
}, {
x: 67,
y: 177
}, {
x: 67,
y: 201
}, {
x: 65,
y: 203
}, {
x: 42,
y: 208
}, {
x: 12,
y: 208
}, {
x: 12,
y: 222
}, {
x: 10,
y: 234
}, {
x: 6,
y: 240
}, {
x: 383,
y: 369
}, {
x: 383,
y: 495
}, {
x: -481,
y: 495
}, {
x: -481,
y: 393
} ]
} ],
name: "FloorCut"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
x: -248,
y: -203,
name: "Role"
}, {
Help: [ {
pointStart: {
x: 0,
y: 220.767
},
pointEnd: {
x: 0,
y: 408.702
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: 0,
y: 408.702
},
pointEnd: {
x: 251.069,
y: 408.702
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -995,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 188,
y: -200
}, {
x: 182,
y: -206
}, {
x: 177,
y: -215
}, {
x: 174,
y: -225
}, {
x: 174,
y: -398
}, {
x: 95,
y: -398
}, {
x: 95,
y: -364
}, {
x: -160,
y: -364
}, {
x: -176,
y: -358
}, {
x: -189,
y: -349
}, {
x: -194,
y: -335
}, {
x: -198,
y: -314
}, {
x: -198,
y: -166
}, {
x: -995,
y: -166
} ]
} ],
name: "Floor"
}, {
x: 310,
y: -150,
height: 112,
name: "FinishTarget"
}, {
x: -15,
y: 383,
Floor: [ {
vertexes: [ {
x: -52,
y: 172
}, {
x: -75,
y: 169
}, {
x: -90,
y: 164
}, {
x: -105,
y: 157
}, {
x: -122,
y: 145
}, {
x: -139,
y: 124
}, {
x: -148,
y: 104
}, {
x: -152,
y: 85
}, {
x: -183,
y: 78
}, {
x: -211,
y: 77
}, {
x: -214,
y: 74
}, {
x: -212,
y: 67
}, {
x: -205,
y: 59
}, {
x: -171,
y: 34
}, {
x: -174,
y: 32
}, {
x: -177,
y: 28
}, {
x: -177,
y: 26
}, {
x: -175,
y: 23
}, {
x: -140,
y: 19
}, {
x: -128,
y: 15
}, {
x: -125,
y: 10
}, {
x: -126,
y: -3
}, {
x: -137,
y: -14
}, {
x: -157,
y: -26
}, {
x: -170,
y: -39
}, {
x: -179,
y: -56
}, {
x: -183,
y: -73
}, {
x: -184,
y: -89
}, {
x: -181,
y: -90
}, {
x: -181,
y: -97
}, {
x: -184,
y: -98
}, {
x: -180,
y: -119
}, {
x: -170,
y: -139
}, {
x: -156,
y: -154
}, {
x: -138,
y: -165
}, {
x: -113,
y: -172
}, {
x: 49,
y: -172
}, {
x: 51,
y: -169
}, {
x: 57,
y: -169
}, {
x: 60,
y: -172
}, {
x: 106,
y: -172
}, {
x: 126,
y: -167
}, {
x: 148,
y: -154
}, {
x: 165,
y: -136
}, {
x: 183,
y: -111
}, {
x: 204,
y: -69
}, {
x: 214,
y: -28
}, {
x: 214,
y: -7
}, {
x: 209,
y: 14
}, {
x: 201,
y: 28
}, {
x: 193,
y: 36
}, {
x: 179,
y: 43
}, {
x: 156,
y: 43
}, {
x: 144,
y: 38
}, {
x: 134,
y: 29
}, {
x: 121,
y: 22
}, {
x: 100,
y: 17
}, {
x: 0,
y: 19
}, {
x: 24,
y: 43
}, {
x: 34,
y: 63
}, {
x: 38,
y: 83
}, {
x: 38,
y: 99
}, {
x: 34,
y: 119
}, {
x: 22,
y: 141
}, {
x: 2,
y: 159
}, {
x: -10,
y: 164
}, {
x: -25,
y: 170
} ]
} ],
name: "FloorCut"
}, {
x: -16,
y: -331,
width: 400,
name: "TriggerMove"
}, {
x: 125,
y: -305,
PickKey: [ {
target: {
nodeId: 5
}
} ],
name: "PickKey"
}, {
x: 241,
y: -106,
name: "DoorLock"
}, {
x: 134,
y: -400,
name: "ToolBounce"
}, {
x: -260,
y: -177,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -234.132,
y: 305.476
},
pointEnd: {
x: 89.433,
y: 190.922
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -999,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -237
}, {
x: 148,
y: -237
}, {
x: 144,
y: -250
}, {
x: 129,
y: -262
}, {
x: 46,
y: -262
}, {
x: 44,
y: -278
}, {
x: 39,
y: -290
}, {
x: 31,
y: -302
}, {
x: 12,
y: -313
}, {
x: -13,
y: -313
}, {
x: -30,
y: -305
}, {
x: -45,
y: -283
}, {
x: -49,
y: -262
}, {
x: -134,
y: -262
}, {
x: -142,
y: -257
}, {
x: -147,
y: -247
}, {
x: -150,
y: -233
}, {
x: -999,
y: -233
} ]
} ],
name: "Floor"
}, {
x: 245,
y: -192,
height: 112,
name: "FinishTarget"
}, {
y: 361,
Floor: [ {
vertexes: [ {
x: -6,
y: 178
}, {
x: -10,
y: 176
}, {
x: -16,
y: 169
}, {
x: -18,
y: 162
}, {
x: -17,
y: 151
}, {
x: -37,
y: 146
}, {
x: -53,
y: 137
}, {
x: -58,
y: 133
}, {
x: -75,
y: 114
}, {
x: -85,
y: 95
}, {
x: -90,
y: 76
}, {
x: -90,
y: 34
}, {
x: -93,
y: 15
}, {
x: -101,
y: -26
}, {
x: -108,
y: -46
}, {
x: -120,
y: -70
}, {
x: -130,
y: -85
}, {
x: -146,
y: -101
}, {
x: -146,
y: -109
}, {
x: -142,
y: -119
}, {
x: -136,
y: -125
}, {
x: -130,
y: -128
}, {
x: -46,
y: -128
}, {
x: -45,
y: -140
}, {
x: -41,
y: -153
}, {
x: -29,
y: -169
}, {
x: -24,
y: -173
}, {
x: -14,
y: -178
}, {
x: 9,
y: -178
}, {
x: 23,
y: -173
}, {
x: 35,
y: -161
}, {
x: 43,
y: -145
}, {
x: 45,
y: -128
}, {
x: 129,
y: -128
}, {
x: 135,
y: -125
}, {
x: 141,
y: -119
}, {
x: 145,
y: -110
}, {
x: 145,
y: -101
}, {
x: 135,
y: -92
}, {
x: 125,
y: -82
}, {
x: 121,
y: -73
}, {
x: 107,
y: -46
}, {
x: 101,
y: -29
}, {
x: 95,
y: -4
}, {
x: 91,
y: 23
}, {
x: 91,
y: 77
}, {
x: 84,
y: 95
}, {
x: 77,
y: 107
}, {
x: 71,
y: 118
}, {
x: 68,
y: 122
}, {
x: 52,
y: 137
}, {
x: 31,
y: 148
}, {
x: 16,
y: 151
}, {
x: 16,
y: 161
}, {
x: 16,
y: 167
}, {
x: 14,
y: 171
}, {
x: 10,
y: 175
}, {
x: 5,
y: 178
}, {
x: 162,
y: 369
}, {
x: 232,
y: 425
}, {
x: 303,
y: 516
}, {
x: -376,
y: 516
}, {
x: -260,
y: 388
} ]
} ],
name: "FloorCut"
}, {
x: -248,
y: -244,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -185,
y: 263.475
},
pointEnd: {
x: 185,
y: 263.475
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -998,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -215
}, {
x: 226,
y: -215
}, {
x: 226,
y: -244
}, {
x: 221,
y: -249
}, {
x: 197,
y: -249
}, {
x: 197,
y: -287
}, {
x: 191,
y: -301
}, {
x: 180,
y: -312
}, {
x: 161,
y: -319
}, {
x: 141,
y: -319
}, {
x: 125,
y: -310
}, {
x: 117,
y: -301
}, {
x: 110,
y: -285
}, {
x: 110,
y: -249
}, {
x: 64,
y: -249
}, {
x: 64,
y: -412
}, {
x: -75,
y: -412
}, {
x: -75,
y: -249
}, {
x: -107,
y: -249
}, {
x: -108,
y: -289
}, {
x: -125,
y: -313
}, {
x: -141,
y: -321
}, {
x: -172,
y: -321
}, {
x: -187,
y: -313
}, {
x: -197,
y: -303
}, {
x: -201,
y: -287
}, {
x: -203,
y: -253
}, {
x: -998,
y: -253
} ]
} ],
name: "Floor"
}, {
x: 289,
y: -171,
height: 112,
name: "FinishTarget"
}, {
y: 270,
Floor: [ {
vertexes: [ {
x: -95,
y: 175
}, {
x: -108,
y: 171
}, {
x: -123,
y: 163
}, {
x: -136,
y: 151
}, {
x: -142,
y: 143
}, {
x: -149,
y: 123
}, {
x: -171,
y: 35
}, {
x: -186,
y: 35
}, {
x: -201,
y: 29
}, {
x: -216,
y: 16
}, {
x: -224,
y: 2
}, {
x: -225,
y: -5
}, {
x: -225,
y: -102
}, {
x: -222,
y: -106
}, {
x: -197,
y: -106
}, {
x: -197,
y: -144
}, {
x: -191,
y: -158
}, {
x: -183,
y: -167
}, {
x: -180,
y: -170
}, {
x: -173,
y: -173
}, {
x: -163,
y: -176
}, {
x: -142,
y: -175
}, {
x: -128,
y: -168
}, {
x: -121,
y: -161
}, {
x: -114,
y: -147
}, {
x: -113,
y: -106
}, {
x: 112,
y: -106
}, {
x: 112,
y: -143
}, {
x: 115,
y: -152
}, {
x: 118,
y: -158
}, {
x: 120,
y: -161
}, {
x: 127,
y: -168
}, {
x: 141,
y: -175
}, {
x: 162,
y: -176
}, {
x: 172,
y: -173
}, {
x: 179,
y: -170
}, {
x: 182,
y: -167
}, {
x: 190,
y: -158
}, {
x: 194,
y: -151
}, {
x: 196,
y: -145
}, {
x: 196,
y: -106
}, {
x: 221,
y: -106
}, {
x: 225,
y: -102
}, {
x: 225,
y: -5
}, {
x: 222,
y: 5
}, {
x: 217,
y: 13
}, {
x: 216,
y: 16
}, {
x: 200,
y: 29
}, {
x: 185,
y: 35
}, {
x: 170,
y: 35
}, {
x: 145,
y: 133
}, {
x: 137,
y: 148
}, {
x: 126,
y: 161
}, {
x: 124,
y: 161
}, {
x: 122,
y: 163
}, {
x: 108,
y: 171
}, {
x: 94,
y: 175
}, {
x: 21,
y: 175
}, {
x: 390,
y: 394
}, {
x: 455,
y: 600
}, {
x: -375,
y: 600
}, {
x: -329,
y: 406
}, {
x: -13,
y: 175
} ]
} ],
name: "FloorCut"
}, {
x: -157,
y: -279,
width: 115,
name: "TriggerMove"
}, {
x: 155,
y: -282,
width: 115,
name: "TriggerMove"
}, {
x: -6,
y: -401,
scaleX: .7,
scaleY: .7,
ControlTarget: [ {
targetPos: {
x: -5.585,
y: -261.775
}
} ],
name: "ControlTarget"
}, {
x: -156,
y: -336,
ControllerUD: [ {
target: {
nodeId: 5
}
} ],
name: "ControllerUD"
}, {
x: -285,
y: -261,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -214.511,
y: 160.883
},
pointEnd: {
x: -91.786,
y: 160.883
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: 88.127,
y: 155.531
},
pointEnd: {
x: 241.791,
y: 203
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 165,
y: -200
}, {
x: 165,
y: -245
}, {
x: 50,
y: -245
}, {
x: 50,
y: -201
}, {
x: -1e3,
y: -201
} ]
} ],
name: "Floor"
}, {
x: 273,
y: -150,
height: 112,
name: "FinishTarget"
}, {
y: 452,
Floor: [ {
vertexes: [ {
x: -3,
y: 136
}, {
x: -9,
y: 128
}, {
x: -3,
y: 120
}, {
x: -12,
y: 109
}, {
x: -23,
y: 102
}, {
x: -101,
y: 93
}, {
x: -111,
y: 96
}, {
x: -115,
y: 92
}, {
x: -120,
y: 96
}, {
x: -129,
y: 97
}, {
x: -135,
y: 92
}, {
x: -136,
y: 86
}, {
x: -135,
y: 81
}, {
x: -132,
y: 77
}, {
x: -125,
y: 75
}, {
x: -116,
y: 78
}, {
x: -114,
y: 72
}, {
x: -163,
y: -40
}, {
x: -162,
y: -50
}, {
x: -147,
y: -59
}, {
x: -124,
y: -62
}, {
x: -83,
y: -62
}, {
x: -59,
y: -54
}, {
x: -54,
y: -41
}, {
x: -103,
y: 72
}, {
x: -103,
y: 83
}, {
x: -24,
y: 87
}, {
x: -20,
y: 82
}, {
x: -11,
y: 82
}, {
x: -6,
y: 20
}, {
x: -15,
y: -48
}, {
x: -24,
y: -79
}, {
x: -51,
y: -112
}, {
x: -52,
y: -119
}, {
x: -49,
y: -127
}, {
x: -41,
y: -133
}, {
x: -20,
y: -137
}, {
x: 20,
y: -137
}, {
x: 46,
y: -131
}, {
x: 50,
y: -122
}, {
x: 51,
y: -111
}, {
x: 25,
y: -80
}, {
x: 16,
y: -51
}, {
x: 7,
y: 22
}, {
x: 7,
y: 82
}, {
x: 19,
y: 82
}, {
x: 25,
y: 88
}, {
x: 101,
y: 102
}, {
x: 102,
y: 88
}, {
x: 53,
y: -25
}, {
x: 54,
y: -31
}, {
x: 73,
y: -42
}, {
x: 128,
y: -42
}, {
x: 159,
y: -37
}, {
x: 163,
y: -30
}, {
x: 114,
y: 89
}, {
x: 112,
y: 102
}, {
x: 120,
y: 97
}, {
x: 132,
y: 99
}, {
x: 135,
y: 106
}, {
x: 134,
y: 115
}, {
x: 127,
y: 120
}, {
x: 120,
y: 119
}, {
x: 114,
y: 112
}, {
x: 24,
y: 106
}, {
x: 9,
y: 112
}, {
x: 3,
y: 120
}, {
x: 8,
y: 128
}, {
x: 2,
y: 136
}, {
x: 255,
y: 273
}, {
x: 321.1,
y: 400
}, {
x: -234,
y: 400
}, {
x: -185,
y: 278
} ]
} ],
name: "FloorCut"
}, {
x: 150,
y: -227,
width: 400,
name: "TriggerMove"
}, {
x: -59,
y: 137,
AttributeAniRota: [ {
speed: -270
} ],
name: "Gear"
}, {
x: -248,
y: -203,
name: "Role"
}, {
Help: [ {
pointStart: {
x: 46.448,
y: 457
},
pointEnd: {
x: 178.379,
y: 457
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -171
}, {
x: 197,
y: -171
}, {
x: 191,
y: -218
}, {
x: 184,
y: -234
}, {
x: 171,
y: -246
}, {
x: 153,
y: -251
}, {
x: 144,
y: -251
}, {
x: 131,
y: -247
}, {
x: 122,
y: -254
}, {
x: 107,
y: -257
}, {
x: 86,
y: -250
}, {
x: 76,
y: -254
}, {
x: 48,
y: -257
}, {
x: 19,
y: -248
}, {
x: 10,
y: -257
}, {
x: -4,
y: -266
}, {
x: -34,
y: -269
}, {
x: -63,
y: -260
}, {
x: -81,
y: -245
}, {
x: -93,
y: -245
}, {
x: -104,
y: -237
}, {
x: -116,
y: -245
}, {
x: -146,
y: -249
}, {
x: -165,
y: -243
}, {
x: -181,
y: -227
}, {
x: -191,
y: -211
}, {
x: -193,
y: -200
}, {
x: -1e3,
y: -200
} ]
} ],
name: "Floor"
}, {
x: 295,
y: -126,
height: 112,
name: "FinishTarget"
}, {
y: 348,
Floor: [ {
vertexes: [ {
x: 9,
y: 97
}, {
x: -7,
y: 91
}, {
x: -14,
y: 87
}, {
x: -21,
y: 80
}, {
x: -41,
y: 85
}, {
x: -57,
y: 84
}, {
x: -73,
y: 80
}, {
x: -93,
y: 68
}, {
x: -102,
y: 59
}, {
x: -109,
y: 48
}, {
x: -121,
y: 50
}, {
x: -137,
y: 46
}, {
x: -148,
y: 38
}, {
x: -157,
y: 25
}, {
x: -164,
y: 22
}, {
x: -176,
y: 12
}, {
x: -184,
y: 1
}, {
x: -189,
y: -15
}, {
x: -190,
y: -22
}, {
x: -190,
y: -29
}, {
x: -188,
y: -41
}, {
x: -179,
y: -57
}, {
x: -166,
y: -69
}, {
x: -158,
y: -74
}, {
x: -146,
y: -77
}, {
x: -133,
y: -78
}, {
x: -116,
y: -74
}, {
x: -104,
y: -66
}, {
x: -96,
y: -72
}, {
x: -91,
y: -74
}, {
x: -85,
y: -74
}, {
x: -78,
y: -74
}, {
x: -70,
y: -83
}, {
x: -60,
y: -90
}, {
x: -50,
y: -94
}, {
x: -37,
y: -97
}, {
x: -20,
y: -97
}, {
x: -5,
y: -94
}, {
x: 9,
y: -86
}, {
x: 19,
y: -76
}, {
x: 32,
y: -82
}, {
x: 50,
y: -86
}, {
x: 72,
y: -84
}, {
x: 87,
y: -79
}, {
x: 89,
y: -81
}, {
x: 97,
y: -85
}, {
x: 108,
y: -87
}, {
x: 122,
y: -83
}, {
x: 131,
y: -76
}, {
x: 145,
y: -80
}, {
x: 154,
y: -80
}, {
x: 170,
y: -75
}, {
x: 182,
y: -65
}, {
x: 186,
y: -57
}, {
x: 189,
y: -47
}, {
x: 190,
y: -38
}, {
x: 189,
y: -32
}, {
x: 188,
y: -27
}, {
x: 178,
y: -11
}, {
x: 165,
y: -2
}, {
x: 156,
y: 0
}, {
x: 152,
y: 6
}, {
x: 146,
y: 10
}, {
x: 132,
y: 12
}, {
x: 129,
y: 25
}, {
x: 118,
y: 43
}, {
x: 105,
y: 56
}, {
x: 95,
y: 63
}, {
x: 82,
y: 69
}, {
x: 70,
y: 72
}, {
x: 59,
y: 84
}, {
x: 46,
y: 92
}, {
x: 32,
y: 97
}, {
x: 65,
y: 188
}, {
x: 68,
y: 250
}, {
x: 197,
y: 289
}, {
x: 391,
y: 465
}, {
x: -341,
y: 465
}, {
x: -91,
y: 257
} ]
} ],
name: "FloorCut"
}, {
y: -233,
width: 400,
name: "TriggerMove"
}, {
x: 218,
y: -83,
name: "DoorLock"
}, {
x: 83,
y: -94,
scaleX: .7,
scaleY: .7,
PickKey: [ {
target: {
nodeId: 4
}
} ],
name: "PickKey"
}, {
x: -248,
y: -203,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -223.41,
y: 315
},
pointEnd: {
x: 166.546,
y: 365
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -999,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -109
}, {
x: 176,
y: -109
}, {
x: 176,
y: -304
}, {
x: 172,
y: -310
}, {
x: 166,
y: -309
}, {
x: 145,
y: -298
}, {
x: 130,
y: -326
}, {
x: 109,
y: -348
}, {
x: 74,
y: -368
}, {
x: 51,
y: -376
}, {
x: 32,
y: -386
}, {
x: -1,
y: -411
}, {
x: -34,
y: -386
}, {
x: -51,
y: -376
}, {
x: -78,
y: -367
}, {
x: -109,
y: -351
}, {
x: -131,
y: -326
}, {
x: -146,
y: -297
}, {
x: -164,
y: -310
}, {
x: -173,
y: -310
}, {
x: -178,
y: -306
}, {
x: -179,
y: -297
}, {
x: -179,
y: -148
}, {
x: -250,
y: -148
}, {
x: -250,
y: -116
}, {
x: -999,
y: -116
} ]
} ],
name: "Floor"
}, {
x: 288,
y: -67,
height: 112,
name: "FinishTarget"
}, {
y: 370,
Floor: [ {
vertexes: [ {
x: -10,
y: 204
}, {
x: -25,
y: 195
}, {
x: -32,
y: 185
}, {
x: -34,
y: 176
}, {
x: -34,
y: 165
}, {
x: -32,
y: 157
}, {
x: -27,
y: 149
}, {
x: -19,
y: 143
}, {
x: -19,
y: 133
}, {
x: -30,
y: 128
}, {
x: -43,
y: 116
}, {
x: -50,
y: 101
}, {
x: -144,
y: 101
}, {
x: -152,
y: 98
}, {
x: -156,
y: 91
}, {
x: -156,
y: 80
}, {
x: -145,
y: 72
}, {
x: -52,
y: 72
}, {
x: -40,
y: 49
}, {
x: -19,
y: 35
}, {
x: -19,
y: -123
}, {
x: -21,
y: -128
}, {
x: -26,
y: -133
}, {
x: -32,
y: -136
}, {
x: -40,
y: -136
}, {
x: -52,
y: -132
}, {
x: -81,
y: -117
}, {
x: -100,
y: -100
}, {
x: -109,
y: -81
}, {
x: -83,
y: -82
}, {
x: -79,
y: -77
}, {
x: -79,
y: -73
}, {
x: -145,
y: 0
}, {
x: -152,
y: 0
}, {
x: -156,
y: -4
}, {
x: -176,
y: -93
}, {
x: -175,
y: -101
}, {
x: -172,
y: -104
}, {
x: -165,
y: -104
}, {
x: -145,
y: -91
}, {
x: -130,
y: -121
}, {
x: -108,
y: -143
}, {
x: -76,
y: -162
}, {
x: -52,
y: -170
}, {
x: -31,
y: -181
}, {
x: 0,
y: -205
}, {
x: 30,
y: -181
}, {
x: 52,
y: -170
}, {
x: 75,
y: -162
}, {
x: 108,
y: -143
}, {
x: 129,
y: -121
}, {
x: 144,
y: -91
}, {
x: 167,
y: -104
}, {
x: 172,
y: -104
}, {
x: 175,
y: -100
}, {
x: 155,
y: -4
}, {
x: 151,
y: 0
}, {
x: 144,
y: 0
}, {
x: 78,
y: -73
}, {
x: 78,
y: -77
}, {
x: 82,
y: -82
}, {
x: 108,
y: -81
}, {
x: 99,
y: -100
}, {
x: 80,
y: -117
}, {
x: 52,
y: -132
}, {
x: 41,
y: -135
}, {
x: 31,
y: -136
}, {
x: 25,
y: -133
}, {
x: 20,
y: -128
}, {
x: 18,
y: -123
}, {
x: 18,
y: 35
}, {
x: 40,
y: 49
}, {
x: 51,
y: 72
}, {
x: 144,
y: 72
}, {
x: 155,
y: 80
}, {
x: 156,
y: 91
}, {
x: 151,
y: 98
}, {
x: 143,
y: 101
}, {
x: 49,
y: 101
}, {
x: 42,
y: 116
}, {
x: 29,
y: 128
}, {
x: 18,
y: 133
}, {
x: 18,
y: 143
}, {
x: 26,
y: 149
}, {
x: 31,
y: 158
}, {
x: 33,
y: 165
}, {
x: 33,
y: 175
}, {
x: 31,
y: 185
}, {
x: 24,
y: 195
}, {
x: 17,
y: 200
}, {
x: 7,
y: 204
}, {
x: 77,
y: 292
}, {
x: 121,
y: 312
}, {
x: 251,
y: 427
}, {
x: -259,
y: 427
}, {
x: -164,
y: 333
}, {
x: -111,
y: 314
}, {
x: -76,
y: 270
} ]
} ],
name: "FloorCut"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
x: -217,
y: -152,
ToolBounce: [ {
speed: 600
} ],
name: "ToolBounce"
}, {
x: -292,
y: -126,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -180.512,
y: 460
},
pointEnd: {
x: 180.512,
y: 460
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -134
}, {
x: 192,
y: -134
}, {
x: 142,
y: -244
}, {
x: 141,
y: -258
}, {
x: 150,
y: -269
}, {
x: 151,
y: -284
}, {
x: 125,
y: -288
}, {
x: 100,
y: -279
}, {
x: 84,
y: -266
}, {
x: 73,
y: -270
}, {
x: 71,
y: -280
}, {
x: 63,
y: -289
}, {
x: -117,
y: -289
}, {
x: -137,
y: -281
}, {
x: -145,
y: -252
}, {
x: -155,
y: -240
}, {
x: -163,
y: -222
}, {
x: -165,
y: -209
}, {
x: -1e3,
y: -209
} ]
} ],
name: "Floor"
}, {
x: 262,
y: -93,
height: 112,
name: "FinishTarget"
}, {
x: 34,
y: 370,
Floor: [ {
vertexes: [ {
x: 52,
y: 262
}, {
x: 38,
y: 247
}, {
x: 26,
y: 217
}, {
x: 47,
y: 199
}, {
x: 64,
y: 176
}, {
x: 82,
y: 140
}, {
x: 89,
y: 110
}, {
x: 70,
y: 161
}, {
x: 59,
y: 178
}, {
x: 37,
y: 201
}, {
x: 9,
y: 217
}, {
x: -7,
y: 221
}, {
x: -29,
y: 222
}, {
x: -43,
y: 216
}, {
x: -43,
y: 188
}, {
x: -29,
y: 147
}, {
x: -19,
y: 130
}, {
x: -4,
y: 113
}, {
x: 26,
y: 87
}, {
x: 6,
y: 71
}, {
x: -8,
y: 46
}, {
x: -52,
y: 29
}, {
x: -89,
y: 8
}, {
x: -114,
y: -11
}, {
x: -142,
y: -41
}, {
x: -159,
y: -70
}, {
x: -169,
y: -101
}, {
x: -172,
y: -127
}, {
x: -170,
y: -163
}, {
x: -180,
y: -168
}, {
x: -188,
y: -181
}, {
x: -188,
y: -193
}, {
x: -182,
y: -209
}, {
x: -171,
y: -220
}, {
x: -158,
y: -227
}, {
x: -162,
y: -250
}, {
x: -151,
y: -259
}, {
x: -81,
y: -263
}, {
x: 28,
y: -261
}, {
x: 35,
y: -253
}, {
x: 34,
y: -246
}, {
x: 27,
y: -239
}, {
x: 8,
y: -230
}, {
x: 24,
y: -200
}, {
x: 37,
y: -210
}, {
x: 51,
y: -236
}, {
x: 67,
y: -251
}, {
x: 91,
y: -260
}, {
x: 112,
y: -256
}, {
x: 110,
y: -243
}, {
x: 100,
y: -235
}, {
x: 101,
y: -218
}, {
x: 148,
y: -123
}, {
x: 158,
y: -84
}, {
x: 158,
y: -53
}, {
x: 154,
y: -30
}, {
x: 169,
y: -17
}, {
x: 181,
y: -1
}, {
x: 187,
y: 13
}, {
x: 188,
y: 33
}, {
x: 179,
y: 53
}, {
x: 153,
y: 82
}, {
x: 135,
y: 96
}, {
x: 110,
y: 105
}, {
x: 114,
y: 137
}, {
x: 104,
y: 185
}, {
x: 76,
y: 241
}, {
x: 59,
y: 261
} ]
} ],
name: "FloorCut"
}, {
x: -248,
y: -221,
name: "Role"
}, {
y: -259,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -184.615,
y: 188
},
pointEnd: {
x: 220.813,
y: 272
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -999,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -138
}, {
x: 153,
y: -138
}, {
x: 153,
y: -316
}, {
x: 146,
y: -327
}, {
x: 129,
y: -339
}, {
x: 97,
y: -339
}, {
x: 97,
y: -412
}, {
x: 94,
y: -418
}, {
x: 83,
y: -432
}, {
x: 76,
y: -435
}, {
x: 56,
y: -436
}, {
x: 47,
y: -430
}, {
x: 38,
y: -423
}, {
x: 33,
y: -410
}, {
x: 33,
y: -339
}, {
x: -5,
y: -339
}, {
x: -5,
y: -415
}, {
x: -9,
y: -422
}, {
x: -17,
y: -430
}, {
x: -26,
y: -435
}, {
x: -40,
y: -436
}, {
x: -50,
y: -435
}, {
x: -57,
y: -430
}, {
x: -66,
y: -421
}, {
x: -70,
y: -412
}, {
x: -69,
y: -339
}, {
x: -94,
y: -339
}, {
x: -111,
y: -334
}, {
x: -123,
y: -316
}, {
x: -121,
y: -139
}, {
x: -999,
y: -139
} ]
} ],
name: "Floor"
}, {
x: 257,
y: -95,
height: 112,
name: "FinishTarget"
}, {
x: 15,
y: 336,
Floor: [ {
vertexes: [ {
x: -91,
y: 250
}, {
x: -91,
y: 244
}, {
x: -66,
y: 202
}, {
x: -75,
y: 198
}, {
x: -103,
y: 172
}, {
x: -119,
y: 152
}, {
x: -133,
y: 114
}, {
x: -135,
y: 92
}, {
x: -135,
y: 81
}, {
x: -192,
y: 81
}, {
x: -202,
y: 77
}, {
x: -208,
y: 68
}, {
x: -210,
y: 53
}, {
x: -208,
y: -86
}, {
x: -201,
y: -97
}, {
x: -191,
y: -103
}, {
x: -178,
y: -105
}, {
x: -166,
y: -102
}, {
x: -157,
y: -94
}, {
x: -150,
y: -82
}, {
x: -150,
y: 51
}, {
x: -135,
y: 51
}, {
x: -135,
y: -127
}, {
x: -133,
y: -134
}, {
x: -127,
y: -142
}, {
x: -119,
y: -149
}, {
x: -111,
y: -152
}, {
x: -83,
y: -152
}, {
x: -83,
y: -226
}, {
x: -80,
y: -234
}, {
x: -73,
y: -242
}, {
x: -65,
y: -248
}, {
x: -55,
y: -249
}, {
x: -42,
y: -248
}, {
x: -33,
y: -243
}, {
x: -26,
y: -236
}, {
x: -23,
y: -229
}, {
x: -22,
y: -153
}, {
x: 20,
y: -152
}, {
x: 20,
y: -225
}, {
x: 24,
y: -236
}, {
x: 28,
y: -240
}, {
x: 34,
y: -245
}, {
x: 41,
y: -249
}, {
x: 48,
y: -249
}, {
x: 60,
y: -248
}, {
x: 66,
y: -246
}, {
x: 70,
y: -242
}, {
x: 78,
y: -231
}, {
x: 80,
y: -226
}, {
x: 80,
y: -152
}, {
x: 114,
y: -152
}, {
x: 122,
y: -146
}, {
x: 129,
y: -141
}, {
x: 133,
y: -134
}, {
x: 136,
y: -128
}, {
x: 136,
y: 55
}, {
x: 150,
y: 55
}, {
x: 150,
y: -80
}, {
x: 154,
y: -91
}, {
x: 164,
y: -101
}, {
x: 176,
y: -104
}, {
x: 189,
y: -104
}, {
x: 203,
y: -95
}, {
x: 210,
y: -82
}, {
x: 210,
y: 57
}, {
x: 206,
y: 69
}, {
x: 193,
y: 78
}, {
x: 184,
y: 81
}, {
x: 137,
y: 81
}, {
x: 137,
y: 92
}, {
x: 132,
y: 119
}, {
x: 115,
y: 157
}, {
x: 85,
y: 188
}, {
x: 65,
y: 201
}, {
x: 91,
y: 246
}, {
x: 89,
y: 250
}, {
x: 83,
y: 250
}, {
x: 59,
y: 206
}, {
x: 41,
y: 214
}, {
x: 9,
y: 220
}, {
x: 40,
y: 313
}, {
x: 386,
y: 548
}, {
x: -415,
y: 536
}, {
x: -63,
y: 330
}, {
x: -23,
y: 218
}, {
x: -61,
y: 206
}, {
x: -83,
y: 248
} ]
} ],
name: "FloorCut"
}, {
x: -248,
y: -151,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -123.271,
y: 383.279
},
pointEnd: {
x: 165.158,
y: 383.279
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 254,
y: -200
}, {
x: 254,
y: -262
}, {
x: 247,
y: -268
}, {
x: -174,
y: -268
}, {
x: -180,
y: -264
}, {
x: -180,
y: -202
}, {
x: -1e3,
y: -202
} ]
} ],
name: "Floor"
}, {
x: 313,
y: -150,
height: 112,
name: "FinishTarget"
}, {
x: 37,
y: 309,
Floor: [ {
vertexes: [ {
x: -210,
y: 250
}, {
x: -215,
y: 245
}, {
x: -214,
y: 217
}, {
x: -210,
y: 214
}, {
x: -180,
y: 214
}, {
x: -178,
y: 177
}, {
x: -173,
y: 147
}, {
x: -163,
y: 113
}, {
x: -147,
y: 79
}, {
x: -143,
y: 72
}, {
x: -132,
y: 55
}, {
x: -123,
y: 43
}, {
x: -118,
y: 37
}, {
x: -94,
y: 13
}, {
x: -89,
y: 9
}, {
x: -75,
y: -1
}, {
x: -89,
y: -9
}, {
x: -108,
y: -26
}, {
x: -118,
y: -37
}, {
x: -129,
y: -51
}, {
x: -143,
y: -72
}, {
x: -147,
y: -79
}, {
x: -163,
y: -113
}, {
x: -173,
y: -147
}, {
x: -178,
y: -177
}, {
x: -180,
y: -214
}, {
x: -212,
y: -215
}, {
x: -215,
y: -219
}, {
x: -214,
y: -247
}, {
x: -210,
y: -250
}, {
x: 211,
y: -250
}, {
x: 215,
y: -246
}, {
x: 215,
y: -219
}, {
x: 212,
y: -215
}, {
x: 180,
y: -214
}, {
x: 178,
y: -177
}, {
x: 173,
y: -147
}, {
x: 163,
y: -113
}, {
x: 145,
y: -78
}, {
x: 141,
y: -71
}, {
x: 132,
y: -55
}, {
x: 119,
y: -40
}, {
x: 92,
y: -13
}, {
x: 75,
y: 0
}, {
x: 88,
y: 8
}, {
x: 94,
y: 13
}, {
x: 119,
y: 38
}, {
x: 127,
y: 48
}, {
x: 132,
y: 55
}, {
x: 140,
y: 67
}, {
x: 146,
y: 77
}, {
x: 163,
y: 113
}, {
x: 173,
y: 147
}, {
x: 178,
y: 177
}, {
x: 180,
y: 214
}, {
x: 212,
y: 215
}, {
x: 215,
y: 219
}, {
x: 215,
y: 246
}, {
x: 211,
y: 250
}, {
x: 40,
y: 250
}, {
x: 408,
y: 613
}, {
x: -391,
y: 617
}, {
x: -109,
y: 250
} ]
} ],
name: "FloorCut"
}, {
x: -273,
y: -203,
name: "Role"
}, {
x: 32,
y: -247,
width: 465,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -180.752,
y: 130
},
pointEnd: {
x: 245.529,
y: 130
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 175,
y: -200
}, {
x: 171,
y: -221
}, {
x: 170,
y: -238
}, {
x: 168,
y: -251
}, {
x: 165,
y: -262
}, {
x: 158,
y: -274
}, {
x: 145,
y: -288
}, {
x: 126,
y: -300
}, {
x: 101,
y: -311
}, {
x: 70,
y: -321
}, {
x: 40,
y: -326
}, {
x: 9,
y: -328
}, {
x: -22,
y: -328
}, {
x: -57,
y: -322
}, {
x: -81,
y: -315
}, {
x: -110,
y: -304
}, {
x: -129,
y: -292
}, {
x: -145,
y: -280
}, {
x: -157,
y: -264
}, {
x: -166,
y: -247
}, {
x: -173,
y: -223
}, {
x: -175,
y: -201
}, {
x: -1e3,
y: -201
} ]
} ],
name: "Floor"
}, {
x: 245,
y: -150,
height: 112,
name: "FinishTarget"
}, {
y: 396,
Floor: [ {
vertexes: [ {
x: 44,
y: 220
}, {
x: 34,
y: 217
}, {
x: 17,
y: 208
}, {
x: 12,
y: 207
}, {
x: 3,
y: 208
}, {
x: -8,
y: 215
}, {
x: -15,
y: 218
}, {
x: -20,
y: 218
}, {
x: -27,
y: 218
}, {
x: -36,
y: 213
}, {
x: -49,
y: 198
}, {
x: -53,
y: 195
}, {
x: -57,
y: 194
}, {
x: -62,
y: 195
}, {
x: -66,
y: 196
}, {
x: -76,
y: 206
}, {
x: -81,
y: 208
}, {
x: -84,
y: 208
}, {
x: -88,
y: 207
}, {
x: -94,
y: 201
}, {
x: -98,
y: 195
}, {
x: -99,
y: 190
}, {
x: -99,
y: 182
}, {
x: -97,
y: 173
}, {
x: -93,
y: 163
}, {
x: -84,
y: 146
}, {
x: -69,
y: 124
}, {
x: -71,
y: 119
}, {
x: -74,
y: 101
}, {
x: -75,
y: 88
}, {
x: -90,
y: 76
}, {
x: -108,
y: 56
}, {
x: -122,
y: 36
}, {
x: -137,
y: 9
}, {
x: -151,
y: -20
}, {
x: -161,
y: -47
}, {
x: -168,
y: -72
}, {
x: -171,
y: -95
}, {
x: -170,
y: -118
}, {
x: -167,
y: -130
}, {
x: -164,
y: -140
}, {
x: -156,
y: -157
}, {
x: -144,
y: -172
}, {
x: -129,
y: -185
}, {
x: -108,
y: -197
}, {
x: -82,
y: -207
}, {
x: -54,
y: -215
}, {
x: -21,
y: -220
}, {
x: 10,
y: -221
}, {
x: 40,
y: -218
}, {
x: 71,
y: -213
}, {
x: 100,
y: -204
}, {
x: 125,
y: -193
}, {
x: 144,
y: -181
}, {
x: 152,
y: -173
}, {
x: 157,
y: -167
}, {
x: 163,
y: -157
}, {
x: 167,
y: -145
}, {
x: 169,
y: -132
}, {
x: 170,
y: -116
}, {
x: 168,
y: -102
}, {
x: 166,
y: -88
}, {
x: 156,
y: -58
}, {
x: 138,
y: -20
}, {
x: 107,
y: 35
}, {
x: 96,
y: 51
}, {
x: 82,
y: 67
}, {
x: 69,
y: 79
}, {
x: 57,
y: 88
}, {
x: 55,
y: 99
}, {
x: 55,
y: 105
}, {
x: 54,
y: 113
}, {
x: 84,
y: 148
}, {
x: 97,
y: 165
}, {
x: 103,
y: 175
}, {
x: 108,
y: 188
}, {
x: 107,
y: 199
}, {
x: 103,
y: 206
}, {
x: 97,
y: 210
}, {
x: 93,
y: 210
}, {
x: 84,
y: 207
}, {
x: 79,
y: 206
}, {
x: 60,
y: 218
}, {
x: 51,
y: 220
} ]
} ],
name: "FloorCut"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
x: -256,
y: 100,
AttributeAniMove: [ {
targetPos: {
x: 285.194,
y: 100.346
},
speed: 250,
timePaddingTarget: .1,
timePaddingOrigin: .1
} ],
name: "Move"
}, {
x: -248,
y: -203,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -215.414,
y: 300
},
pointEnd: {
x: 215.414,
y: 300
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 151,
y: -200
}, {
x: 151,
y: -356
}, {
x: -153,
y: -356
}, {
x: -153,
y: -201
}, {
x: -1e3,
y: -201
} ]
} ],
name: "Floor"
}, {
x: 245,
y: -150,
height: 112,
name: "FinishTarget"
}, {
y: 372,
Floor: [ {
vertexes: [ {
x: -138,
y: 250
}, {
x: -156,
y: 246
}, {
x: -175,
y: 237
}, {
x: -198,
y: 215
}, {
x: -212,
y: 184
}, {
x: -213,
y: 151
}, {
x: -202,
y: 121
}, {
x: -188,
y: 101
}, {
x: -182,
y: 97
}, {
x: -174,
y: 98
}, {
x: -132,
y: 130
}, {
x: -124,
y: 123
}, {
x: -124,
y: 120
}, {
x: -158,
y: 86
}, {
x: -179,
y: 50
}, {
x: -191,
y: 15
}, {
x: -196,
y: -35
}, {
x: -188,
y: -86
}, {
x: -173,
y: -123
}, {
x: -146,
y: -161
}, {
x: -109,
y: -192
}, {
x: -127,
y: -228
}, {
x: -126,
y: -240
}, {
x: -113,
y: -249
}, {
x: -105,
y: -250
}, {
x: -96,
y: -245
}, {
x: -79,
y: -209
}, {
x: -57,
y: -217
}, {
x: -21,
y: -224
}, {
x: 33,
y: -222
}, {
x: 77,
y: -209
}, {
x: 97,
y: -248
}, {
x: 110,
y: -249
}, {
x: 123,
y: -241
}, {
x: 125,
y: -230
}, {
x: 107,
y: -191
}, {
x: 127,
y: -177
}, {
x: 147,
y: -157
}, {
x: 163,
y: -136
}, {
x: 178,
y: -108
}, {
x: 192,
y: -56
}, {
x: 193,
y: -13
}, {
x: 186,
y: 25
}, {
x: 168,
y: 67
}, {
x: 146,
y: 98
}, {
x: 122,
y: 122
}, {
x: 130,
y: 130
}, {
x: 171,
y: 99
}, {
x: 183,
y: 98
}, {
x: 202,
y: 124
}, {
x: 212,
y: 156
}, {
x: 211,
y: 180
}, {
x: 206,
y: 197
}, {
x: 197,
y: 214
}, {
x: 181,
y: 231
}, {
x: 147,
y: 248
}, {
x: 117,
y: 250
}, {
x: 94,
y: 244
}, {
x: 76,
y: 234
}, {
x: 60,
y: 219
}, {
x: 46,
y: 199
}, {
x: 46,
y: 191
}, {
x: 50,
y: 186
}, {
x: 97,
y: 153
}, {
x: 90,
y: 142
}, {
x: 54,
y: 157
}, {
x: 17,
y: 164
}, {
x: 60,
y: 378
}, {
x: 317,
y: 505
}, {
x: -304,
y: 505
}, {
x: -41,
y: 368
}, {
x: -16,
y: 165
}, {
x: -40,
y: 161
}, {
x: -66,
y: 154
}, {
x: -92,
y: 142
}, {
x: -99,
y: 153
}, {
x: -53,
y: 185
}, {
x: -48,
y: 191
}, {
x: -48,
y: 199
}, {
x: -61,
y: 218
}, {
x: -87,
y: 240
}, {
x: -112,
y: 249
} ]
} ],
name: "FloorCut"
}, {
y: -265,
width: 400,
name: "TriggerMove"
}, {
x: -55,
y: 11,
scaleX: .8,
scaleY: .8,
name: "FakeStatic"
}, {
x: 50,
y: 11,
scaleX: .8,
scaleY: .8,
name: "FakeStatic"
}, {
x: -248,
y: -203,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -227.097,
y: 215
},
pointEnd: {
x: 227.097,
y: 215
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 106,
y: -200
}, {
x: 0,
y: -298
}, {
x: -107,
y: -202
}, {
x: -1e3,
y: -202
} ]
} ],
name: "Floor"
}, {
x: 245,
y: -156,
height: 112,
name: "FinishTarget"
}, {
y: -10,
Floor: [ {
vertexes: [ {
x: -404,
y: 831
}, {
x: 445,
y: 831
}, {
x: 445,
y: 583
}, {
x: 45,
y: 583
}, {
x: 21,
y: 478
}, {
x: 105,
y: 374
}, {
x: 0,
y: 280
}, {
x: -105,
y: 374
}, {
x: -20,
y: 476
}, {
x: -45,
y: 574
}, {
x: -391,
y: 597
} ]
} ],
name: "FloorCut"
}, {
y: -241,
width: 400,
name: "TriggerMove"
}, {
x: -209,
y: 486,
height: 300,
AttributeAniSwing: [ {
speed: -45
} ],
name: "Swing"
}, {
x: 208,
y: 486,
height: 300,
AttributeAniSwing: [ {
speed: 45
} ],
name: "Swing"
}, {
x: -248,
y: -209,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -152.425,
y: 369.379
},
pointEnd: {
x: 127.947,
y: 369.379
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
x: 43,
y: 401,
Floor: [ {
vertexes: [ {
x: 166,
y: 173
}, {
x: 156,
y: 166
}, {
x: 139,
y: 167
}, {
x: 122,
y: 160
}, {
x: 94,
y: 123
}, {
x: 77,
y: 114
}, {
x: 40,
y: 121
}, {
x: 13,
y: 122
}, {
x: 3,
y: 119
}, {
x: 30,
y: 247
}, {
x: 227,
y: 518
}, {
x: -309,
y: 518
}, {
x: -69,
y: 257
}, {
x: -10,
y: 116
}, {
x: -18,
y: 114
}, {
x: -35,
y: 109
}, {
x: -63,
y: 114
}, {
x: -89,
y: 107
}, {
x: -122,
y: 86
}, {
x: -243,
y: 39
}, {
x: -265,
y: 8
}, {
x: -262,
y: -14
}, {
x: -245,
y: -38
}, {
x: -222,
y: -51
}, {
x: -189,
y: -61
}, {
x: -222,
y: -46
}, {
x: -244,
y: -28
}, {
x: -249,
y: -11
}, {
x: -238,
y: -1
}, {
x: -136,
y: -1
}, {
x: -74,
y: -28
}, {
x: -71,
y: -38
}, {
x: -129,
y: -68
}, {
x: -149,
y: -112
}, {
x: -149,
y: -129
}, {
x: -130,
y: -170
}, {
x: -127,
y: -158
}, {
x: -119,
y: -160
}, {
x: -104,
y: -166
}, {
x: -110,
y: -157
}, {
x: -98,
y: -156
}, {
x: -117,
y: -137
}, {
x: -113,
y: -95
}, {
x: -103,
y: -85
}, {
x: -83,
y: -84
}, {
x: -89,
y: -100
}, {
x: -78,
y: -131
}, {
x: -78,
y: -169
}, {
x: -67,
y: -177
}, {
x: -58,
y: -177
}, {
x: -54,
y: -168
}, {
x: -15,
y: -172
}, {
x: -14,
y: -164
}, {
x: -3,
y: -165
}, {
x: -6,
y: -157
}, {
x: -46,
y: -144
}, {
x: -63,
y: -111
}, {
x: -53,
y: -84
}, {
x: -32,
y: -70
}, {
x: -15,
y: -27
}, {
x: 48,
y: -7
}, {
x: 70,
y: -25
}, {
x: 72,
y: -22
}, {
x: 64,
y: -10
}, {
x: 67,
y: -8
}, {
x: 66,
y: -6
}, {
x: 59,
y: -6
}, {
x: 57,
y: -3
}, {
x: 74,
y: 1
}, {
x: 92,
y: -13
}, {
x: 119,
y: -15
}, {
x: 124,
y: -22
}, {
x: 126,
y: -21
}, {
x: 124,
y: -9
}, {
x: 127,
y: -7
}, {
x: 127,
y: -6
}, {
x: 106,
y: -7
}, {
x: 88,
y: 3
}, {
x: 102,
y: 33
}, {
x: 130,
y: 44
}, {
x: 158,
y: 68
}, {
x: 223,
y: 45
}, {
x: 235,
y: 48
}, {
x: 245,
y: 57
}, {
x: 243,
y: 61
}, {
x: 238,
y: 63
}, {
x: 237,
y: 70
}, {
x: 233,
y: 66
}, {
x: 231,
y: 66
}, {
x: 232,
y: 73
}, {
x: 228,
y: 68
}, {
x: 226,
y: 69
}, {
x: 225,
y: 78
}, {
x: 220,
y: 72
}, {
x: 220,
y: 78
}, {
x: 217,
y: 75
}, {
x: 208,
y: 88
}, {
x: 206,
y: 97
}, {
x: 206,
y: 111
}, {
x: 211,
y: 122
}, {
x: 227,
y: 120
}, {
x: 229,
y: 113
}, {
x: 232,
y: 122
}, {
x: 236,
y: 114
}, {
x: 238,
y: 123
}, {
x: 240,
y: 124
}, {
x: 242,
y: 116
}, {
x: 243,
y: 125
}, {
x: 245,
y: 126
}, {
x: 247,
y: 119
}, {
x: 249,
y: 128
}, {
x: 255,
y: 122
}, {
x: 255,
y: 132
}, {
x: 264,
y: 137
}, {
x: 258,
y: 158
}, {
x: 236,
y: 170
}, {
x: 192,
y: 168
}, {
x: 177,
y: 174
} ]
} ],
name: "FloorCut"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Floor: [ {
vertexes: [ {
x: -999,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 190,
y: -200
}, {
x: 173,
y: -252
}, {
x: 167,
y: -255
}, {
x: 160,
y: -248
}, {
x: 135,
y: -246
}, {
x: 125,
y: -239
}, {
x: 116,
y: -244
}, {
x: 114,
y: -258
}, {
x: 90,
y: -239
}, {
x: 65,
y: -250
}, {
x: 43,
y: -386
}, {
x: 41,
y: -398
}, {
x: 30,
y: -397
}, {
x: 30,
y: -405
}, {
x: -11,
y: -400
}, {
x: -14,
y: -409
}, {
x: -25,
y: -409
}, {
x: -38,
y: -399
}, {
x: -38,
y: -376
}, {
x: -46,
y: -376
}, {
x: -49,
y: -390
}, {
x: -59,
y: -399
}, {
x: -83,
y: -390
}, {
x: -86,
y: -406
}, {
x: -106,
y: -367
}, {
x: -108,
y: -361
}, {
x: -112,
y: -245
}, {
x: -999,
y: -245
} ]
} ],
name: "Floor"
}, {
x: 288,
y: -150,
height: 112,
name: "FinishTarget"
}, {
Help: [ {
pointStart: {
x: -113.94,
y: 388
},
pointEnd: {
x: 175.094,
y: 441.204
}
} ],
name: "Help"
}, {
x: -230,
y: -251,
name: "Role"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -124
}, {
x: 227,
y: -124
}, {
x: 226,
y: -217
}, {
x: 195,
y: -225
}, {
x: 195,
y: -311
}, {
x: 191,
y: -328
}, {
x: 186,
y: -335
}, {
x: 175,
y: -346
}, {
x: 163,
y: -351
}, {
x: 142,
y: -349
}, {
x: 129,
y: -342
}, {
x: 121,
y: -329
}, {
x: 121,
y: -281
}, {
x: -45,
y: -281
}, {
x: -49,
y: -314
}, {
x: -51,
y: -326
}, {
x: -56,
y: -336
}, {
x: -72,
y: -349
}, {
x: -98,
y: -352
}, {
x: -119,
y: -335
}, {
x: -124,
y: -315
}, {
x: -130,
y: -122
}, {
x: -1e3,
y: -122
} ]
} ],
name: "Floor"
}, {
x: 289,
y: -79,
height: 112,
name: "FinishTarget"
}, {
y: 353,
Floor: [ {
vertexes: [ {
x: -213,
y: 189
}, {
x: -218,
y: 187
}, {
x: -225,
y: 178
}, {
x: -225,
y: 166
}, {
x: -217,
y: 156
}, {
x: -212,
y: 154
}, {
x: -153,
y: 154
}, {
x: -152,
y: 152
}, {
x: -105,
y: -65
}, {
x: -119,
y: -92
}, {
x: -122,
y: -102
}, {
x: -121,
y: -109
}, {
x: -117,
y: -116
}, {
x: -111,
y: -120
}, {
x: -94,
y: -120
}, {
x: -106,
y: -125
}, {
x: -113,
y: -131
}, {
x: -119,
y: -140
}, {
x: -122,
y: -154
}, {
x: -117,
y: -173
}, {
x: -109,
y: -182
}, {
x: -101,
y: -187
}, {
x: -94,
y: -189
}, {
x: -72,
y: -187
}, {
x: -59,
y: -177
}, {
x: -53,
y: -167
}, {
x: -51,
y: -154
}, {
x: -54,
y: -140
}, {
x: -62,
y: -129
}, {
x: -79,
y: -120
}, {
x: 149,
y: -120
}, {
x: 138,
y: -124
}, {
x: 126,
y: -135
}, {
x: 121,
y: -147
}, {
x: 122,
y: -166
}, {
x: 130,
y: -179
}, {
x: 144,
y: -188
}, {
x: 164,
y: -189
}, {
x: 174,
y: -185
}, {
x: 185,
y: -175
}, {
x: 189,
y: -168
}, {
x: 191,
y: -150
}, {
x: 183,
y: -132
}, {
x: 175,
y: -125
}, {
x: 163,
y: -120
}, {
x: 180,
y: -120
}, {
x: 189,
y: -112
}, {
x: 191,
y: -99
}, {
x: 183,
y: -88
}, {
x: 176,
y: -86
}, {
x: 175,
y: -67
}, {
x: 224,
y: -56
}, {
x: 224,
y: 143
}, {
x: 222,
y: 149
}, {
x: 215,
y: 154
}, {
x: -117,
y: 154
}, {
x: -121,
y: 177
}, {
x: -130,
y: 188
}, {
x: -124,
y: 428
}, {
x: 77,
y: 472
}, {
x: 383,
y: 582
}, {
x: -546,
y: 582
}, {
x: -368,
y: 481
}, {
x: -219,
y: 444
} ]
} ],
name: "FloorCut"
}, {
x: -259,
y: -129,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -214.863,
y: 392
},
pointEnd: {
x: 255.371,
y: 392
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 211,
y: -200
}, {
x: 211,
y: -355
}, {
x: 57,
y: -355
}, {
x: 59,
y: -204
}, {
x: 10,
y: -220
}, {
x: -8,
y: -220
}, {
x: -39,
y: -256
}, {
x: -46,
y: -302
}, {
x: -47,
y: -310
}, {
x: -66,
y: -310
}, {
x: -66,
y: -326
}, {
x: -126,
y: -326
}, {
x: -125,
y: -310
}, {
x: -140,
y: -310
}, {
x: -140,
y: -204
}, {
x: -1e3,
y: -204
} ]
} ],
name: "Floor"
}, {
x: 283,
y: -150,
height: 112,
name: "FinishTarget"
}, {
x: -17,
y: 357,
Floor: [ {
vertexes: [ {
x: -121,
y: 134
}, {
x: -121,
y: 126
}, {
x: -105,
y: 126
}, {
x: -105,
y: 29
}, {
x: -143,
y: 29
}, {
x: -187,
y: 81
}, {
x: -212,
y: 81
}, {
x: -217,
y: 76
}, {
x: -217,
y: 29
}, {
x: -211,
y: 29
}, {
x: -211,
y: 22
}, {
x: -180,
y: 22
}, {
x: -180,
y: 20
}, {
x: -225,
y: 15
}, {
x: -225,
y: -16
}, {
x: -180,
y: -21
}, {
x: -180,
y: -23
}, {
x: -211,
y: -23
}, {
x: -211,
y: -30
}, {
x: -217,
y: -30
}, {
x: -217,
y: -77
}, {
x: -212,
y: -82
}, {
x: -187,
y: -82
}, {
x: -143,
y: -30
}, {
x: -105,
y: -30
}, {
x: -105,
y: -127
}, {
x: -121,
y: -127
}, {
x: -121,
y: -135
}, {
x: -32,
y: -135
}, {
x: -30,
y: -130
}, {
x: -35,
y: -128
}, {
x: -61,
y: -126
}, {
x: 8,
y: -45
}, {
x: 26,
y: -45
}, {
x: 78,
y: -30
}, {
x: 157,
y: -24
}, {
x: 204,
y: -12
}, {
x: 216,
y: -8
}, {
x: 225,
y: -2
}, {
x: 225,
y: 1
}, {
x: 216,
y: 7
}, {
x: 162,
y: 22
}, {
x: 78,
y: 29
}, {
x: 25,
y: 45
}, {
x: 8,
y: 45
}, {
x: -61,
y: 126
}, {
x: -34,
y: 127
}, {
x: -30,
y: 129
}, {
x: -32,
y: 134
}, {
x: -56,
y: 134
}, {
x: -75,
y: 134
}, {
x: 319,
y: 392
}, {
x: -335,
y: 392
}, {
x: -91,
y: 134
} ]
} ],
name: "FloorCut"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
x: -97,
y: -333,
ControllerUD: [ {
target: {
nodeId: 5
}
} ],
name: "ControllerUD"
}, {
x: 134,
y: -350,
scaleX: .75,
scaleY: .75,
ControlTarget: [ {
targetPos: {
x: 134.042,
y: -215.154
}
} ],
name: "ControlTarget"
}, {
x: -248,
y: -203,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -141.506,
y: 323.579
},
pointEnd: {
x: 76.122,
y: 323.579
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -999,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -75
}, {
x: 150,
y: -75
}, {
x: 150,
y: -120
}, {
x: 48,
y: -120
}, {
x: 48,
y: -75
}, {
x: -43,
y: -75
}, {
x: -150,
y: -190
}, {
x: -164,
y: -203
}, {
x: -175,
y: -206
}, {
x: -188,
y: -204
}, {
x: -198,
y: -196
}, {
x: -201,
y: -189
}, {
x: -201,
y: -75
}, {
x: -999,
y: -75
} ]
} ],
name: "Floor"
}, {
x: 265,
y: -31,
height: 112,
name: "FinishTarget"
}, {
y: 57,
Floor: [ {
vertexes: [ {
x: -199,
y: 500
}, {
x: -199,
y: 831
}, {
x: 200,
y: 831
}, {
x: 200,
y: 391
}, {
x: 149,
y: 391
}, {
x: 149,
y: 300
}, {
x: 50,
y: 300
}, {
x: 50,
y: 391
}, {
x: -43,
y: 391
}, {
x: -149,
y: 275
}, {
x: -163,
y: 264
}, {
x: -170,
y: 261
}, {
x: -175,
y: 260
}, {
x: -187,
y: 262
}, {
x: -195,
y: 268
}, {
x: -198,
y: 276
}, {
x: -199,
y: 288
} ]
} ],
name: "FloorCut"
}, {
x: -161,
y: -163,
width: 126,
name: "TriggerMove"
}, {
x: 97,
y: -104,
width: 126,
name: "TriggerMove"
}, {
x: -293,
y: -80,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -221.689,
y: 443.475
},
pointEnd: {
x: -28.163,
y: 443.475
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: 33.084,
y: 405
},
pointEnd: {
x: 170.785,
y: 405
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -316
}, {
x: 177,
y: -316
}, {
x: 133,
y: -230
}, {
x: 129,
y: -265
}, {
x: 121,
y: -284
}, {
x: 110,
y: -300
}, {
x: 91,
y: -308
}, {
x: 60,
y: -305
}, {
x: 29,
y: -292
}, {
x: 7,
y: -290
}, {
x: -16,
y: -292
}, {
x: -42,
y: -297
}, {
x: -75,
y: -310
}, {
x: -91,
y: -310
}, {
x: -103,
y: -305
}, {
x: -118,
y: -290
}, {
x: -131,
y: -262
}, {
x: -134,
y: -233
}, {
x: -148,
y: -233
}, {
x: -159,
y: -249
}, {
x: -169,
y: -255
}, {
x: -182,
y: -253
}, {
x: -193,
y: -244
}, {
x: -198,
y: -236
}, {
x: -200,
y: -227
}, {
x: -200,
y: -214
}, {
x: -204,
y: -201
}, {
x: -1e3,
y: -201
} ]
} ],
name: "Floor"
}, {
x: 198,
y: -272,
height: 112,
name: "FinishTarget"
}, {
y: 456,
Floor: [ {
vertexes: [ {
x: -92,
y: 105
}, {
x: -106,
y: 97
}, {
x: -116,
y: 85
}, {
x: -126,
y: 62
}, {
x: -130,
y: 37
}, {
x: -132,
y: 29
}, {
x: -152,
y: 30
}, {
x: -156,
y: 37
}, {
x: -159,
y: 42
}, {
x: -168,
y: 48
}, {
x: -177,
y: 50
}, {
x: -184,
y: 49
}, {
x: -190,
y: 45
}, {
x: -198,
y: 30
}, {
x: -200,
y: 22
}, {
x: -198,
y: 15
}, {
x: -193,
y: 2
}, {
x: -195,
y: -3
}, {
x: -198,
y: -11
}, {
x: -198,
y: -25
}, {
x: -196,
y: -33
}, {
x: -190,
y: -41
}, {
x: -180,
y: -48
}, {
x: -169,
y: -49
}, {
x: -160,
y: -45
}, {
x: -148,
y: -28
}, {
x: -132,
y: -28
}, {
x: -128,
y: -58
}, {
x: -116,
y: -85
}, {
x: -102,
y: -100
}, {
x: -90,
y: -105
}, {
x: -76,
y: -105
}, {
x: -42,
y: -91
}, {
x: -15,
y: -87
}, {
x: 7,
y: -86
}, {
x: 30,
y: -88
}, {
x: 60,
y: -100
}, {
x: 92,
y: -103
}, {
x: 108,
y: -95
}, {
x: 120,
y: -80
}, {
x: 126,
y: -62
}, {
x: 132,
y: -25
}, {
x: 150,
y: -23
}, {
x: 160,
y: -40
}, {
x: 168,
y: -45
}, {
x: 178,
y: -45
}, {
x: 188,
y: -40
}, {
x: 196,
y: -30
}, {
x: 197,
y: -23
}, {
x: 198,
y: -15
}, {
x: 198,
y: -7
}, {
x: 194,
y: 2
}, {
x: 198,
y: 12
}, {
x: 198,
y: 17
}, {
x: 199,
y: 22
}, {
x: 198,
y: 29
}, {
x: 198,
y: 35
}, {
x: 188,
y: 50
}, {
x: 176,
y: 53
}, {
x: 164,
y: 52
}, {
x: 156,
y: 45
}, {
x: 152,
y: 35
}, {
x: 132,
y: 35
}, {
x: 120,
y: 72
}, {
x: 103,
y: 91
}, {
x: 84,
y: 102
}, {
x: 66,
y: 102
}, {
x: 54,
y: 97
}, {
x: 24,
y: 85
}, {
x: 15,
y: 82
}, {
x: 103,
y: 216
}, {
x: 157,
y: 279
}, {
x: 248,
y: 374
}, {
x: -299,
y: 374
}, {
x: -246,
y: 271
}, {
x: -137,
y: 216
}, {
x: -12,
y: 80
}, {
x: -22,
y: 80
}, {
x: -48,
y: 90
}, {
x: -72,
y: 105
} ]
} ],
name: "FloorCut"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
x: -275,
y: -203,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -227.404,
y: 469.109
},
pointEnd: {
x: 153.467,
y: 425
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -197
}, {
x: 151,
y: -197
}, {
x: 151,
y: -347
}, {
x: 97,
y: -347
}, {
x: 97,
y: -247
}, {
x: 48,
y: -247
}, {
x: 48,
y: -196
}, {
x: -75,
y: -196
}, {
x: -75,
y: -248
}, {
x: -125,
y: -248
}, {
x: -125,
y: -297
}, {
x: -177,
y: -297
}, {
x: -177,
y: -201
}, {
x: -1e3,
y: -201
} ]
} ],
name: "Floor"
}, {
x: 245,
y: -150,
height: 112,
name: "FinishTarget"
}, {
y: -78,
Floor: [ {
vertexes: [ {
x: -515,
y: 913
}, {
x: 429,
y: 913
}, {
x: 429,
y: 549
}, {
x: 150,
y: 549
}, {
x: 150,
y: 399
}, {
x: 99,
y: 399
}, {
x: 99,
y: 499
}, {
x: 50,
y: 499
}, {
x: 50,
y: 549
}, {
x: -125,
y: 549
}, {
x: -125,
y: 499
}, {
x: -76,
y: 499
}, {
x: -76,
y: 449
}, {
x: -126,
y: 449
}, {
x: -126,
y: 400
}, {
x: -175,
y: 400
}, {
x: -175,
y: 549
}, {
x: -515,
y: 549
} ]
} ],
name: "FloorCut"
}, {
x: -128,
y: -256,
width: 149,
name: "TriggerMove"
}, {
x: 130,
y: -256,
width: 149,
name: "TriggerMove"
}, {
x: -14,
y: 186,
width: 334,
name: "TouchMoveLine"
}, {
x: -181,
y: 186,
AttributeAniTouchMove: [ {
originPos: {
x: -180.432,
y: 186.822
},
targetPos: {
x: 154.3,
y: 186.822
},
nodeLine: {
nodeId: 5
}
} ],
name: "TouchMove"
}, {
x: -248,
y: -203,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -174.266,
y: 187.586
},
pointEnd: {
x: 0,
y: 187.586
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: -213.012,
y: 424.475
},
pointEnd: {
x: -108.594,
y: 424.475
}
} ],
name: "Help"
}, {
Help: [ {
index: 2,
pointStart: {
x: 35.917,
y: 472.096
},
pointEnd: {
x: 175.187,
y: 472.096
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -162
}, {
x: 212,
y: -162
}, {
x: -117,
y: -307
}, {
x: -134,
y: -314
}, {
x: -148,
y: -309
}, {
x: -152,
y: -299
}, {
x: -174,
y: -184
}, {
x: -1e3,
y: -184
} ]
} ],
name: "Floor"
}, {
x: 315,
y: -120,
height: 112,
name: "FinishTarget"
}, {
x: -10,
y: 347,
Floor: [ {
vertexes: [ {
x: 182,
y: 200
}, {
x: -190,
y: -14
}, {
x: -200,
y: -24
}, {
x: -200,
y: -33
}, {
x: -195,
y: -41
}, {
x: -86,
y: -86
}, {
x: -86,
y: -192
}, {
x: -77,
y: -200
}, {
x: -63,
y: -199
}, {
x: 5,
y: -124
}, {
x: 123,
y: -172
}, {
x: 136,
y: -171
}, {
x: 141,
y: -166
}, {
x: 144,
y: -158
}, {
x: 200,
y: 178
}, {
x: 200,
y: 190
}, {
x: 198,
y: 193
}, {
x: 192,
y: 199
} ]
} ],
name: "FloorCut"
}, {
x: -248,
y: -194,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -7.259,
y: 205.193
},
pointEnd: {
x: 193.082,
y: 558.939
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -997,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -209
}, {
x: 92,
y: -209
}, {
x: -18,
y: -320
}, {
x: -39,
y: -332
}, {
x: -64,
y: -339
}, {
x: -86,
y: -339
}, {
x: -107,
y: -333
}, {
x: -123,
y: -325
}, {
x: -140,
y: -312
}, {
x: -153,
y: -294
}, {
x: -162,
y: -275
}, {
x: -164,
y: -259
}, {
x: -164,
y: -239
}, {
x: -997,
y: -239
} ]
} ],
name: "Floor"
}, {
x: 245,
y: -165,
height: 112,
name: "FinishTarget"
}, {
x: 43,
y: 382,
Floor: [ {
vertexes: [ {
x: 104,
y: 204
}, {
x: 33,
y: 135
}, {
x: 32,
y: 69
}, {
x: 10,
y: 77
}, {
x: -16,
y: 79
}, {
x: -39,
y: 74
}, {
x: -58,
y: 64
}, {
x: -187,
y: -63
}, {
x: -199,
y: -83
}, {
x: -205,
y: -107
}, {
x: -205,
y: -129
}, {
x: -202,
y: -144
}, {
x: -195,
y: -161
}, {
x: -181,
y: -180
}, {
x: -165,
y: -192
}, {
x: -149,
y: -200
}, {
x: -129,
y: -205
}, {
x: -107,
y: -205
}, {
x: -83,
y: -199
}, {
x: -63,
y: -187
}, {
x: 54,
y: -71
}, {
x: 69,
y: -50
}, {
x: 78,
y: -23
}, {
x: 78,
y: 5
}, {
x: 69,
y: 32
}, {
x: 135,
y: 33
}, {
x: 204,
y: 104
}, {
x: 204,
y: 108
}, {
x: 196,
y: 110
}, {
x: 109,
y: 109
}, {
x: 110,
y: 196
}, {
x: 108,
y: 204
} ]
} ],
name: "FloorCut"
}, {
x: -248,
y: -252,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -193.117,
y: 275
},
pointEnd: {
x: 107.287,
y: 310
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -134
}, {
x: 158,
y: -134
}, {
x: 128,
y: -156
}, {
x: 109,
y: -198
}, {
x: 106,
y: -233
}, {
x: 45,
y: -233
}, {
x: 34,
y: -216
}, {
x: -5,
y: -325
}, {
x: -26,
y: -348
}, {
x: -76,
y: -351
}, {
x: -89,
y: -344
}, {
x: -99,
y: -327
}, {
x: -116,
y: -218
}, {
x: -175,
y: -199
}, {
x: -1e3,
y: -199
} ]
} ],
name: "Floor"
}, {
x: 257,
y: -89,
height: 112,
name: "FinishTarget"
}, {
x: 87,
y: -101,
Floor: [ {
vertexes: [ {
x: -519,
y: 950
}, {
x: 587,
y: 950
}, {
x: 549,
y: 684
}, {
x: 467,
y: 618
}, {
x: 405,
y: 570
}, {
x: 344,
y: 547
}, {
x: 220,
y: 520
}, {
x: 181,
y: 490
}, {
x: 132,
y: 484
}, {
x: 93,
y: 484
}, {
x: 64,
y: 495
}, {
x: 32,
y: 517
}, {
x: -2,
y: 519
}, {
x: -38,
y: 511
}, {
x: -54,
y: 498
}, {
x: -94,
y: 390
}, {
x: -114,
y: 367
}, {
x: -164,
y: 364
}, {
x: -175,
y: 370
}, {
x: -186,
y: 388
}, {
x: -203,
y: 497
}, {
x: -262,
y: 515
}, {
x: -294,
y: 550
}, {
x: -305,
y: 573
}, {
x: -367,
y: 583
}, {
x: -422,
y: 653
}, {
x: -484,
y: 713
}, {
x: -511,
y: 782
} ]
} ],
name: "FloorCut"
}, {
x: 71,
y: -242,
name: "ToolBounce"
}, {
x: -248,
y: -203,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -161.668,
y: 400
},
pointEnd: {
x: 54.935,
y: 392.397
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -998,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -235
}, {
x: 258,
y: -235
}, {
x: 258,
y: -254
}, {
x: 253,
y: -289
}, {
x: 243,
y: -310
}, {
x: 230,
y: -316
}, {
x: 208,
y: -306
}, {
x: 170,
y: -278
}, {
x: 137,
y: -287
}, {
x: 126,
y: -307
}, {
x: 110,
y: -325
}, {
x: 64,
y: -352
}, {
x: -11,
y: -381
}, {
x: -80,
y: -399
}, {
x: -118,
y: -399
}, {
x: -144,
y: -392
}, {
x: -163,
y: -373
}, {
x: -183,
y: -319
}, {
x: -208,
y: -245
}, {
x: -998,
y: -245
} ]
} ],
name: "Floor"
}, {
x: 316,
y: -188,
height: 112,
name: "FinishTarget"
}, {
x: 39,
y: 351,
Floor: [ {
vertexes: [ {
x: -98,
y: 221
}, {
x: -108,
y: 217
}, {
x: -116,
y: 205
}, {
x: -114,
y: 161
}, {
x: -96,
y: 149
}, {
x: -62,
y: 149
}, {
x: -62,
y: 145
}, {
x: -66,
y: 145
}, {
x: -100,
y: 115
}, {
x: -102,
y: 99
}, {
x: -90,
y: 85
}, {
x: -76,
y: 83
}, {
x: -56,
y: 91
}, {
x: -24,
y: 115
}, {
x: -24,
y: 87
}, {
x: -36,
y: 73
}, {
x: -36,
y: 57
}, {
x: -28,
y: 43
}, {
x: -10,
y: 35
}, {
x: -12,
y: 17
}, {
x: -26,
y: 3
}, {
x: -68,
y: -25
}, {
x: -86,
y: -43
}, {
x: -96,
y: -59
}, {
x: -102,
y: -79
}, {
x: -102,
y: -193
}, {
x: -98,
y: -203
}, {
x: -78,
y: -219
}, {
x: 72,
y: -221
}, {
x: 92,
y: -209
}, {
x: 104,
y: -191
}, {
x: 112,
y: -165
}, {
x: 116,
y: -129
}, {
x: 114,
y: -57
}, {
x: 106,
y: 3
}, {
x: 90,
y: 53
}, {
x: 72,
y: 81
}, {
x: 62,
y: 87
}, {
x: 64,
y: 121
}, {
x: 108,
y: 155
}, {
x: 116,
y: 171
}, {
x: 114,
y: 183
}, {
x: 108,
y: 189
}, {
x: 74,
y: 207
}, {
x: 42,
y: 215
}, {
x: -4,
y: 221
} ]
} ],
name: "FloorCut"
}, {
x: -268,
y: -251,
name: "Role"
}, {
x: -93,
y: -384,
width: 232,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -25,
y: 115.494
},
pointEnd: {
x: 89.134,
y: 608.043
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -997,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 211,
y: -200
}, {
x: 179,
y: -248
}, {
x: 53,
y: -381
}, {
x: 29,
y: -401
}, {
x: -26,
y: -401
}, {
x: -151,
y: -267
}, {
x: -997,
y: -267
} ]
} ],
name: "Floor"
}, {
x: 295,
y: -150,
height: 112,
name: "FinishTarget"
}, {
y: 360,
Floor: [ {
vertexes: [ {
x: -208,
y: 169
}, {
x: -207,
y: 25
}, {
x: -144,
y: -48
}, {
x: -52,
y: -149
}, {
x: -26,
y: -171
}, {
x: 30,
y: -171
}, {
x: 48,
y: -158
}, {
x: 132,
y: -71
}, {
x: 179,
y: -18
}, {
x: 209,
y: 26
}, {
x: 209,
y: 169
} ]
} ],
name: "FloorCut"
}, {
x: -323,
y: -275,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -177,
y: 318
},
pointEnd: {
x: 230.771,
y: 390.452
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -997,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -230
}, {
x: 202,
y: -230
}, {
x: 198,
y: -379
}, {
x: 191,
y: -396
}, {
x: 180,
y: -413
}, {
x: 165,
y: -426
}, {
x: 149,
y: -433
}, {
x: 125,
y: -437
}, {
x: 105,
y: -437
}, {
x: 74,
y: -426
}, {
x: 55,
y: -407
}, {
x: 50,
y: -389
}, {
x: 50,
y: -366
}, {
x: 33,
y: -265
}, {
x: 23,
y: -260
}, {
x: 5,
y: -255
}, {
x: -16,
y: -255
}, {
x: -32,
y: -259
}, {
x: -48,
y: -267
}, {
x: -48,
y: -368
}, {
x: -55,
y: -394
}, {
x: -60,
y: -409
}, {
x: -73,
y: -423
}, {
x: -89,
y: -430
}, {
x: -103,
y: -433
}, {
x: -131,
y: -433
}, {
x: -162,
y: -425
}, {
x: -178,
y: -412
}, {
x: -190,
y: -390
}, {
x: -196,
y: -367
}, {
x: -196,
y: -255
}, {
x: -997,
y: -255
} ]
} ],
name: "Floor"
}, {
x: 269,
y: -187,
height: 112,
name: "FinishTarget"
}, {
y: 291,
Floor: [ {
vertexes: [ {
x: -130,
y: 222
}, {
x: -176,
y: 206
}, {
x: -189,
y: 193
}, {
x: -194,
y: 179
}, {
x: -188,
y: 101
}, {
x: -194,
y: -153
}, {
x: -188,
y: -176
}, {
x: -176,
y: -197
}, {
x: -160,
y: -210
}, {
x: -132,
y: -219
}, {
x: -104,
y: -218
}, {
x: -89,
y: -215
}, {
x: -74,
y: -208
}, {
x: -61,
y: -194
}, {
x: -56,
y: -180
}, {
x: -54,
y: -155
}, {
x: -65,
y: -110
}, {
x: -66,
y: -90
}, {
x: -62,
y: -70
}, {
x: -53,
y: -58
}, {
x: -44,
y: -51
}, {
x: -30,
y: -45
}, {
x: -15,
y: -41
}, {
x: 6,
y: -41
}, {
x: 26,
y: -46
}, {
x: 38,
y: -53
}, {
x: 47,
y: -63
}, {
x: 53,
y: -76
}, {
x: 56,
y: -92
}, {
x: 57,
y: -117
}, {
x: 52,
y: -151
}, {
x: 52,
y: -174
}, {
x: 57,
y: -192
}, {
x: 75,
y: -211
}, {
x: 106,
y: -220
}, {
x: 125,
y: -222
}, {
x: 149,
y: -218
}, {
x: 164,
y: -211
}, {
x: 179,
y: -198
}, {
x: 189,
y: -179
}, {
x: 192,
y: -159
}, {
x: 174,
y: 2
}, {
x: 174,
y: 70
}, {
x: 183,
y: 161
}, {
x: 170,
y: 197
}, {
x: 145,
y: 215
}, {
x: 117,
y: 222
}, {
x: 87,
y: 221
}, {
x: 60,
y: 209
}, {
x: 50,
y: 199
}, {
x: 43,
y: 178
}, {
x: 51,
y: 122
}, {
x: 51,
y: 96
}, {
x: 46,
y: 82
}, {
x: 36,
y: 67
}, {
x: 22,
y: 59
}, {
x: 2,
y: 53
}, {
x: -22,
y: 53
}, {
x: -46,
y: 64
}, {
x: -59,
y: 84
}, {
x: -60,
y: 169
}, {
x: -71,
y: 198
}, {
x: -96,
y: 217
} ]
} ],
name: "FloorCut"
}, {
x: -127,
y: -297,
width: 220,
name: "TriggerMove"
}, {
x: 117,
y: -297,
width: 220,
name: "TriggerMove"
}, {
y: 230,
height: 300,
AttributeAniSwing: [ {
range: 75,
speed: 150
} ],
name: "Swing"
}, {
x: -282,
y: -265,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -229.551,
y: 249.193
},
pointEnd: {
x: 0,
y: 249.193
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: 3.683,
y: 238.144
},
pointEnd: {
x: 200.091,
y: 290
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -997,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -236
}, {
x: 123,
y: -236
}, {
x: 117,
y: -273
}, {
x: 110,
y: -282
}, {
x: 95,
y: -294
}, {
x: 87,
y: -296
}, {
x: 85,
y: -306
}, {
x: 84,
y: -322
}, {
x: 77,
y: -334
}, {
x: 58,
y: -343
}, {
x: -60,
y: -343
}, {
x: -72,
y: -339
}, {
x: -82,
y: -330
}, {
x: -85,
y: -315
}, {
x: -83,
y: -305
}, {
x: -86,
y: -295
}, {
x: -97,
y: -293
}, {
x: -113,
y: -282
}, {
x: -117,
y: -266
}, {
x: -125,
y: -238
}, {
x: -997,
y: -238
} ]
} ],
name: "Floor"
}, {
x: 245,
y: -191,
height: 112,
name: "FinishTarget"
}, {
y: 378,
Floor: [ {
vertexes: [ {
x: -53,
y: 153
}, {
x: -53,
y: 132
}, {
x: -4,
y: 133
}, {
x: -4,
y: 106
}, {
x: -64,
y: 106
}, {
x: -71,
y: 102
}, {
x: -77,
y: 95
}, {
x: -82,
y: 86
}, {
x: -82,
y: 67
}, {
x: -77,
y: 56
}, {
x: -98,
y: 52
}, {
x: -112,
y: 43
}, {
x: -116,
y: 34
}, {
x: -114,
y: 12
}, {
x: -107,
y: 5
}, {
x: -122,
y: 0
}, {
x: -128,
y: -6
}, {
x: -133,
y: -10
}, {
x: -135,
y: -20
}, {
x: -134,
y: -33
}, {
x: -130,
y: -43
}, {
x: -123,
y: -50
}, {
x: -107,
y: -57
}, {
x: -112,
y: -67
}, {
x: -115,
y: -77
}, {
x: -111,
y: -92
}, {
x: -96,
y: -102
}, {
x: -76,
y: -106
}, {
x: -81,
y: -116
}, {
x: -82,
y: -125
}, {
x: -81,
y: -133
}, {
x: -79,
y: -140
}, {
x: -70,
y: -148
}, {
x: -59,
y: -153
}, {
x: 58,
y: -152
}, {
x: 68,
y: -148
}, {
x: 76,
y: -143
}, {
x: 82,
y: -133
}, {
x: 81,
y: -117
}, {
x: 76,
y: -105
}, {
x: 86,
y: -105
}, {
x: 95,
y: -103
}, {
x: 100,
y: -99
}, {
x: 109,
y: -91
}, {
x: 114,
y: -84
}, {
x: 114,
y: -73
}, {
x: 106,
y: -57
}, {
x: 115,
y: -53
}, {
x: 123,
y: -48
}, {
x: 132,
y: -35
}, {
x: 134,
y: -27
}, {
x: 133,
y: -16
}, {
x: 130,
y: -11
}, {
x: 122,
y: 0
}, {
x: 107,
y: 4
}, {
x: 111,
y: 11
}, {
x: 113,
y: 18
}, {
x: 115,
y: 26
}, {
x: 113,
y: 34
}, {
x: 110,
y: 41
}, {
x: 102,
y: 49
}, {
x: 95,
y: 51
}, {
x: 76,
y: 52
}, {
x: 75,
y: 58
}, {
x: 79,
y: 66
}, {
x: 79,
y: 82
}, {
x: 70,
y: 96
}, {
x: 58,
y: 106
}, {
x: 5,
y: 106
}, {
x: 6,
y: 133
}, {
x: 55,
y: 133
}, {
x: 55,
y: 153
} ]
} ],
name: "FloorCut"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -197.903,
y: 335
},
pointEnd: {
x: 151.803,
y: 335
}
} ],
name: "Help"
}, {
x: -200,
y: 140,
AttributeAniMove: [ {
targetPos: {
x: 200,
y: 140
},
speed: 300,
timePaddingTarget: .25,
timePaddingOrigin: .25
} ],
name: "Move"
}, {
x: 200,
y: -20,
AttributeAniMove: [ {
targetPos: {
x: -200,
y: -20
},
speed: 300,
timePaddingTarget: .25,
timePaddingOrigin: .25
} ],
name: "Move"
}, {
x: -248,
y: -245,
name: "Role"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -140
}, {
x: 220,
y: -140
}, {
x: 220,
y: -176
}, {
x: 145,
y: -176
}, {
x: 145,
y: -232
}, {
x: 130,
y: -252
}, {
x: 117,
y: -259
}, {
x: -55,
y: -261
}, {
x: -72,
y: -256
}, {
x: -89,
y: -240
}, {
x: -96,
y: -230
}, {
x: -96,
y: -140
}, {
x: -1e3,
y: -140
} ]
} ],
name: "Floor"
}, {
x: 321,
y: -92,
height: 112,
name: "FinishTarget"
}, {
x: 46,
y: 364,
Floor: [ {
vertexes: [ {
x: -100,
y: 200
}, {
x: -112,
y: 189
}, {
x: -122,
y: 174
}, {
x: -126,
y: 158
}, {
x: -142,
y: 151
}, {
x: -160,
y: 136
}, {
x: -169,
y: 116
}, {
x: -167,
y: 88
}, {
x: -161,
y: 71
}, {
x: -151,
y: 59
}, {
x: -143,
y: 53
}, {
x: -140,
y: 42
}, {
x: -140,
y: -177
}, {
x: -134,
y: -187
}, {
x: -117,
y: -202
}, {
x: -102,
y: -207
}, {
x: 70,
y: -205
}, {
x: 82,
y: -199
}, {
x: 91,
y: -188
}, {
x: 97,
y: -179
}, {
x: 96,
y: -122
}, {
x: 172,
y: -122
}, {
x: 172,
y: -89
}, {
x: 150,
y: -89
}, {
x: 150,
y: -106
}, {
x: 96,
y: -106
}, {
x: 96,
y: 3
}, {
x: 103,
y: 7
}, {
x: 124,
y: 7
}, {
x: 137,
y: 7
}, {
x: 149,
y: -7
}, {
x: 150,
y: -87
}, {
x: 172,
y: -87
}, {
x: 172,
y: -7
}, {
x: 160,
y: 10
}, {
x: 151,
y: 18
}, {
x: 139,
y: 25
}, {
x: 95,
y: 26
}, {
x: 95,
y: 43
}, {
x: 128,
y: 59
}, {
x: 136,
y: 74
}, {
x: 140,
y: 87
}, {
x: 141,
y: 99
}, {
x: 137,
y: 121
}, {
x: 120,
y: 144
}, {
x: 103,
y: 153
}, {
x: 78,
y: 153
}, {
x: 63,
y: 177
}, {
x: 40,
y: 190
}, {
x: 18,
y: 196
}, {
x: -7,
y: 196
}, {
x: -20,
y: 205
}, {
x: -39,
y: 212
}, {
x: -66,
y: 212
}, {
x: -90,
y: 206
} ]
} ],
name: "FloorCut"
}, {
x: -248,
y: -150,
name: "Role"
}, {
y: -194,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -146.694,
y: 276.076
},
pointEnd: {
x: 259.675,
y: 276.076
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 193,
y: -200
}, {
x: 187,
y: -308
}, {
x: 121,
y: -321
}, {
x: 119,
y: -337
}, {
x: 62,
y: -337
}, {
x: 58,
y: -346
}, {
x: 58,
y: -359
}, {
x: 5,
y: -362
}, {
x: 1,
y: -368
}, {
x: -2,
y: -388
}, {
x: -88,
y: -388
}, {
x: -98,
y: -330
}, {
x: -103,
y: -326
}, {
x: -162,
y: -326
}, {
x: -191,
y: -201
}, {
x: -1e3,
y: -201
} ]
} ],
name: "Floor"
}, {
x: 276,
y: -150,
height: 112,
name: "FinishTarget"
}, {
y: 390,
Floor: [ {
vertexes: [ {
x: -106,
y: 246
}, {
x: -84,
y: 61
}, {
x: -192,
y: -31
}, {
x: -158,
y: -184
}, {
x: -97,
y: -184
}, {
x: -84,
y: -247
}, {
x: -12,
y: -247
}, {
x: -3,
y: -240
}, {
x: 2,
y: -218
}, {
x: 58,
y: -215
}, {
x: 58,
y: -197
}, {
x: 117,
y: -197
}, {
x: 121,
y: -193
}, {
x: 123,
y: -177
}, {
x: 184,
y: -166
}, {
x: 189,
y: -85
}, {
x: 189,
y: 39
}, {
x: 168,
y: 57
}, {
x: 189,
y: 244
}, {
x: 299,
y: 544
}, {
x: -181,
y: 544
} ]
} ],
name: "FloorCut"
}, {
x: -271,
y: -203,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -224.433,
y: 328
},
pointEnd: {
x: 225.745,
y: 328
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -997,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -214
}, {
x: 227.7,
y: -215.9
}, {
x: 217.2,
y: -219.3
}, {
x: 211.2,
y: -224.1
}, {
x: 205.2,
y: -235.2
}, {
x: 203.3,
y: -251.5
}, {
x: 197,
y: -266
}, {
x: 183,
y: -284
}, {
x: 164,
y: -291
}, {
x: -163,
y: -291
}, {
x: -179,
y: -288
}, {
x: -191,
y: -279
}, {
x: -196,
y: -270
}, {
x: -197.4,
y: -259.5
}, {
x: -203.3,
y: -255
}, {
x: -997,
y: -255
} ]
} ],
name: "Floor"
}, {
x: 262,
y: -172,
height: 112,
name: "FinishTarget"
}, {
y: 385,
Floor: [ {
vertexes: [ {
x: -73,
y: 202
}, {
x: -85,
y: 192
}, {
x: -86,
y: 181
}, {
x: -83,
y: 175
}, {
x: -73,
y: 168
}, {
x: -51,
y: 168
}, {
x: -51,
y: 63
}, {
x: -188,
y: -148
}, {
x: -195,
y: -167
}, {
x: -194,
y: -182
}, {
x: -189,
y: -190
}, {
x: -178,
y: -199
}, {
x: -163,
y: -203
}, {
x: 162,
y: -203
}, {
x: 183,
y: -196
}, {
x: 194,
y: -179
}, {
x: 193,
y: -162
}, {
x: 187,
y: -148
}, {
x: 50,
y: 63
}, {
x: 50,
y: 168
}, {
x: 72,
y: 168
}, {
x: 78,
y: 171
}, {
x: 85,
y: 180
}, {
x: 83,
y: 194
}, {
x: 72,
y: 202
} ]
} ],
name: "FloorCut"
}, {
x: -248,
y: -260,
name: "Role"
}, {
y: -276,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -224.776,
y: 216.451
},
pointEnd: {
x: 208.125,
y: 273.34
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 263,
y: -200
}, {
x: 252,
y: -217
}, {
x: 247,
y: -289
}, {
x: 194,
y: -244
}, {
x: 172,
y: -209
}, {
x: -69,
y: -209
}, {
x: -69,
y: -270
}, {
x: -74,
y: -301
}, {
x: -91,
y: -314
}, {
x: -114,
y: -314
}, {
x: -140,
y: -305
}, {
x: -232,
y: -232
}, {
x: -242,
y: -202
}, {
x: -1e3,
y: -202
} ]
} ],
name: "Floor"
}, {
x: 303,
y: -150,
height: 112,
name: "FinishTarget"
}, {
x: 7,
y: 450,
Floor: [ {
vertexes: [ {
x: -124,
y: 110
}, {
x: -169,
y: 95
}, {
x: -203,
y: 74
}, {
x: -233,
y: 42
}, {
x: -244,
y: 20
}, {
x: -213,
y: 1
}, {
x: -244,
y: -12
}, {
x: -237,
y: -30
}, {
x: -146,
y: -101
}, {
x: -120,
y: -110
}, {
x: -99,
y: -110
}, {
x: -82,
y: -98
}, {
x: -79,
y: -68
}, {
x: -84,
y: -7
}, {
x: -65,
y: -7
}, {
x: -60,
y: -68
}, {
x: -55,
y: -7
}, {
x: -30,
y: -7
}, {
x: -25,
y: -80
}, {
x: -20,
y: -7
}, {
x: 5,
y: -7
}, {
x: 10,
y: -98
}, {
x: 16,
y: -7
}, {
x: 40,
y: -7
}, {
x: 44,
y: -80
}, {
x: 51,
y: -7
}, {
x: 75,
y: -7
}, {
x: 80,
y: -67
}, {
x: 86,
y: -7
}, {
x: 110,
y: -7
}, {
x: 115,
y: -49
}, {
x: 121,
y: -7
}, {
x: 145,
y: -7
}, {
x: 150,
y: -38
}, {
x: 156,
y: -7
}, {
x: 166,
y: -7
}, {
x: 189,
y: -42
}, {
x: 244,
y: -86
}, {
x: 224,
y: -7
}, {
x: 230,
y: 29
}, {
x: 244,
y: 92
}, {
x: 187,
y: 42
}, {
x: 165,
y: 7
}, {
x: 156,
y: 7
}, {
x: 150,
y: 42
}, {
x: 145,
y: 7
}, {
x: 120,
y: 7
}, {
x: 116,
y: 55
}, {
x: 110,
y: 7
}, {
x: 86,
y: 7
}, {
x: 81,
y: 74
}, {
x: 76,
y: 8
}, {
x: 51,
y: 7
}, {
x: 44,
y: 86
}, {
x: 40,
y: 7
}, {
x: 16,
y: 7
}, {
x: 10,
y: 98
}, {
x: 5,
y: 7
}, {
x: -20,
y: 7
}, {
x: -24,
y: 86
}, {
x: -30,
y: 7
}, {
x: -55,
y: 7
}, {
x: -59,
y: 73
}, {
x: -65,
y: 7
}, {
x: -84,
y: 7
}, {
x: -80,
y: 94
}, {
x: -95,
y: 109
} ]
} ],
name: "FloorCut"
}, {
x: -298,
y: -211,
name: "Role"
}, {
x: -125,
y: -290,
width: 164,
name: "TriggerMove"
}, {
x: 250,
y: -259,
width: 164,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -253.882,
y: 445.841
},
pointEnd: {
x: -59.859,
y: 445.841
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: 173.714,
y: 445.841
},
pointEnd: {
x: 240.03,
y: 445.841
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 113,
y: -200
}, {
x: 101,
y: -217
}, {
x: 26,
y: -278
}, {
x: 3,
y: -289
}, {
x: -17,
y: -296
}, {
x: -41,
y: -300
}, {
x: -61,
y: -300
}, {
x: -96,
y: -293
}, {
x: -117,
y: -277
}, {
x: -123,
y: -261
}, {
x: -123,
y: -252
}, {
x: -143,
y: -243
}, {
x: -159,
y: -228
}, {
x: -166,
y: -212
}, {
x: -166,
y: -200
}, {
x: -1e3,
y: -200
} ]
} ],
name: "Floor"
}, {
x: 245,
y: -150,
height: 112,
name: "FinishTarget"
}, {
y: 390,
Floor: [ {
vertexes: [ {
x: 32,
y: 192
}, {
x: 15,
y: 184
}, {
x: 2,
y: 170
}, {
x: -5,
y: 140
}, {
x: -15,
y: 140
}, {
x: -22,
y: 136
}, {
x: -28,
y: 130
}, {
x: -30,
y: 93
}, {
x: -35,
y: 62
}, {
x: -44,
y: 41
}, {
x: -55,
y: 22
}, {
x: -66,
y: 11
}, {
x: -75,
y: 5
}, {
x: -98,
y: -5
}, {
x: -118,
y: -12
}, {
x: -125,
y: -17
}, {
x: -130,
y: -25
}, {
x: -131,
y: -36
}, {
x: -130,
y: -43
}, {
x: -147,
y: -50
}, {
x: -158,
y: -60
}, {
x: -163,
y: -77
}, {
x: -164,
y: -86
}, {
x: -163,
y: -103
}, {
x: -159,
y: -114
}, {
x: -156,
y: -122
}, {
x: -142,
y: -133
}, {
x: -121,
y: -143
}, {
x: -121,
y: -153
}, {
x: -115,
y: -168
}, {
x: -108,
y: -175
}, {
x: -95,
y: -183
}, {
x: -81,
y: -188
}, {
x: -62,
y: -191
}, {
x: -43,
y: -191
}, {
x: -17,
y: -186
}, {
x: 0,
y: -180
}, {
x: 25,
y: -168
}, {
x: 52,
y: -149
}, {
x: 99,
y: -108
}, {
x: 130,
y: -73
}, {
x: 147,
y: -43
}, {
x: 162,
y: 5
}, {
x: 165,
y: 35
}, {
x: 165,
y: 95
}, {
x: 161,
y: 111
}, {
x: 157,
y: 122
}, {
x: 147,
y: 137
}, {
x: 135,
y: 150
}, {
x: 120,
y: 155
}, {
x: 107,
y: 157
}, {
x: 98,
y: 171
}, {
x: 87,
y: 182
}, {
x: 72,
y: 189
}, {
x: 60,
y: 192
}, {
x: 43,
y: 193
} ]
} ],
name: "FloorCut"
}, {
x: -248,
y: -203,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -194.999,
y: 303
},
pointEnd: {
x: 156.234,
y: 297
}
} ],
name: "Help"
}, {
y: -297,
width: 400,
name: "TriggerMove"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1001,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -192
}, {
x: 203,
y: -192
}, {
x: 201,
y: -220
}, {
x: 199,
y: -239
}, {
x: 189,
y: -265
}, {
x: 165,
y: -288
}, {
x: 125,
y: -305
}, {
x: 77,
y: -310
}, {
x: 77,
y: -379
}, {
x: 33,
y: -379
}, {
x: 33,
y: -312
}, {
x: 3,
y: -312
}, {
x: 3,
y: -379
}, {
x: -41,
y: -379
}, {
x: -41,
y: -311
}, {
x: -126,
y: -311
}, {
x: -126,
y: -264
}, {
x: -191,
y: -264
}, {
x: -191,
y: -238
}, {
x: -1001,
y: -238
} ]
} ],
name: "Floor"
}, {
x: 297,
y: -150,
height: 112,
name: "FinishTarget"
}, {
x: 38,
y: 330,
Floor: [ {
vertexes: [ {
x: -78,
y: 225
}, {
x: -78,
y: 157
}, {
x: -162,
y: 157
}, {
x: -162,
y: 112
}, {
x: -123,
y: 111
}, {
x: -113,
y: 105
}, {
x: -108,
y: 94
}, {
x: -108,
y: -92
}, {
x: -111,
y: -100
}, {
x: -117,
y: -105
}, {
x: -154,
y: -106
}, {
x: -162,
y: -155
}, {
x: -78,
y: -156
}, {
x: -78,
y: -225
}, {
x: -37,
y: -225
}, {
x: -37,
y: -157
}, {
x: -4,
y: -158
}, {
x: -4,
y: -225
}, {
x: 37,
y: -225
}, {
x: 37,
y: -156
}, {
x: 86,
y: -151
}, {
x: 128,
y: -134
}, {
x: 150,
y: -110
}, {
x: 159,
y: -88
}, {
x: 162,
y: -71
}, {
x: 162,
y: -42
}, {
x: 153,
y: -15
}, {
x: 130,
y: 7
}, {
x: 104,
y: 17
}, {
x: 127,
y: 36
}, {
x: 137,
y: 60
}, {
x: 137,
y: 96
}, {
x: 125,
y: 123
}, {
x: 113,
y: 135
}, {
x: 90,
y: 147
}, {
x: 65,
y: 154
}, {
x: 37,
y: 157
}, {
x: 37,
y: 225
}, {
x: -4,
y: 225
}, {
x: -4,
y: 159
}, {
x: -37,
y: 159
}, {
x: -37,
y: 225
} ]
} ],
name: "FloorCut"
}, {
y: -354,
width: 400,
name: "TriggerMove"
}, {
x: -160,
y: -274,
name: "ToolBounce"
}, {
x: 72,
y: -64,
scaleX: .7,
scaleY: .7,
PickKey: [ {
target: {
nodeId: 6
}
} ],
name: "PickKey"
}, {
x: 244,
y: -108,
name: "DoorLock"
}, {
x: -248,
y: -250,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -156.812,
y: 348.472
},
pointEnd: {
x: 218.466,
y: 348.472
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -325
}, {
x: 125,
y: -325
}, {
x: 113,
y: -416
}, {
x: 100,
y: -428
}, {
x: 75,
y: -437
}, {
x: 23,
y: -444
}, {
x: -22,
y: -444
}, {
x: -55,
y: -441
}, {
x: -92,
y: -432
}, {
x: -114,
y: -419
}, {
x: -116,
y: -412
}, {
x: -129,
y: -294
}, {
x: -132,
y: -292
}, {
x: -138,
y: -237
}, {
x: -1e3,
y: -237
} ]
} ],
name: "Floor"
}, {
x: 245,
y: -278,
height: 112,
name: "FinishTarget"
}, {
y: 315,
Floor: [ {
vertexes: [ {
x: -21,
y: 246
}, {
x: -81,
y: 240
}, {
x: -121,
y: 228
}, {
x: -134,
y: 215
}, {
x: -134,
y: 202
}, {
x: -157,
y: 192
}, {
x: -167,
y: 180
}, {
x: -167,
y: 128
}, {
x: -151,
y: 110
}, {
x: -145,
y: 54
}, {
x: -147,
y: 53
}, {
x: -130,
y: -96
}, {
x: -127,
y: -97
}, {
x: -114,
y: -216
}, {
x: -112,
y: -223
}, {
x: -103,
y: -229
}, {
x: -92,
y: -235
}, {
x: -55,
y: -244
}, {
x: -24,
y: -247
}, {
x: 22,
y: -247
}, {
x: 74,
y: -240
}, {
x: 99,
y: -231
}, {
x: 112,
y: -220
}, {
x: 128,
y: -97
}, {
x: 130,
y: -97
}, {
x: 146,
y: 54
}, {
x: 144,
y: 54
}, {
x: 151,
y: 113
}, {
x: 166,
y: 128
}, {
x: 166,
y: 181
}, {
x: 157,
y: 191
}, {
x: 133,
y: 202
}, {
x: 132,
y: 217
}, {
x: 122,
y: 226
}, {
x: 97,
y: 236
}, {
x: 64,
y: 242
}, {
x: 19,
y: 246
} ]
} ],
name: "FloorCut"
}, {
x: -248,
y: -244,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -174.59,
y: 290
},
pointEnd: {
x: 157.376,
y: 180
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -294
}, {
x: 161,
y: -294
}, {
x: 147,
y: -324
}, {
x: 125,
y: -345
}, {
x: 106,
y: -357
}, {
x: 89,
y: -361
}, {
x: 89,
y: -389
}, {
x: -120,
y: -389
}, {
x: -120,
y: -360
}, {
x: -139,
y: -360
}, {
x: -163,
y: -350
}, {
x: -180,
y: -334
}, {
x: -190,
y: -318
}, {
x: -199,
y: -289
}, {
x: -203,
y: -258
}, {
x: -209,
y: -253
}, {
x: -217,
y: -246
}, {
x: -220,
y: -235
}, {
x: -220,
y: -221
}, {
x: -223,
y: -201
}, {
x: -1e3,
y: -201
} ]
} ],
name: "Floor"
}, {
x: -19,
y: 394,
Floor: [ {
vertexes: [ {
x: 87,
y: 189
}, {
x: 69,
y: 184
}, {
x: 54,
y: 174
}, {
x: 41,
y: 158
}, {
x: 35,
y: 141
}, {
x: 15,
y: 142
}, {
x: 11,
y: 137
}, {
x: 10,
y: 130
}, {
x: 12,
y: 125
}, {
x: 16,
y: 122
}, {
x: 75,
y: 122
}, {
x: 79,
y: 123
}, {
x: 83,
y: 127
}, {
x: 83,
y: 136
}, {
x: 80,
y: 139
}, {
x: 75,
y: 142
}, {
x: 62,
y: 142
}, {
x: 69,
y: 153
}, {
x: 77,
y: 159
}, {
x: 86,
y: 164
}, {
x: 99,
y: 164
}, {
x: 112,
y: 163
}, {
x: 125,
y: 152
}, {
x: 131,
y: 145
}, {
x: 134,
y: 132
}, {
x: 134,
y: 0
}, {
x: -174,
y: 0
}, {
x: -189,
y: -5
}, {
x: -199,
y: -23
}, {
x: -199,
y: -37
}, {
x: -196,
y: -46
}, {
x: -189,
y: -53
}, {
x: -181,
y: -59
}, {
x: -178,
y: -89
}, {
x: -170,
y: -118
}, {
x: -159,
y: -135
}, {
x: -142,
y: -150
}, {
x: -120,
y: -158
}, {
x: -98,
y: -159
}, {
x: -98,
y: -182
}, {
x: -96,
y: -186
}, {
x: -90,
y: -189
}, {
x: -84,
y: -188
}, {
x: -80,
y: -186
}, {
x: -77,
y: -183
}, {
x: -77,
y: -160
}, {
x: 83,
y: -162
}, {
x: 84,
y: -182
}, {
x: 86,
y: -186
}, {
x: 91,
y: -189
}, {
x: 99,
y: -188
}, {
x: 103,
y: -185
}, {
x: 105,
y: -180
}, {
x: 106,
y: -160
}, {
x: 124,
y: -157
}, {
x: 143,
y: -145
}, {
x: 164,
y: -124
}, {
x: 176,
y: -92
}, {
x: 179,
y: -57
}, {
x: 193,
y: -48
}, {
x: 197,
y: -37
}, {
x: 198,
y: -25
}, {
x: 194,
y: -14
}, {
x: 188,
y: -7
}, {
x: 175,
y: -1
}, {
x: 161,
y: 0
}, {
x: 159,
y: 133
}, {
x: 153,
y: 156
}, {
x: 144,
y: 169
}, {
x: 130,
y: 181
}, {
x: 106,
y: 189
} ]
} ],
name: "FloorCut"
}, {
x: 277,
y: -250,
height: 112,
name: "FinishTarget"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
x: -293,
y: -203,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -240.035,
y: 408.599
},
pointEnd: {
x: 187.673,
y: 296.992
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -999,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -122
}, {
x: 237,
y: -122
}, {
x: 150,
y: -105
}, {
x: 67,
y: -86
}, {
x: -23,
y: -53
}, {
x: -37,
y: -134
}, {
x: -42,
y: -160
}, {
x: -52,
y: -177
}, {
x: -67,
y: -191
}, {
x: -81,
y: -199
}, {
x: -97,
y: -203
}, {
x: -126,
y: -203
}, {
x: -148,
y: -193
}, {
x: -163,
y: -179
}, {
x: -175,
y: -155
}, {
x: -178,
y: -136
}, {
x: -224,
y: -136
}, {
x: -234,
y: -54
}, {
x: -999,
y: -54
} ]
} ],
name: "Floor"
}, {
x: 277,
y: -75,
height: 112,
name: "FinishTarget"
}, {
y: 377,
Floor: [ {
vertexes: [ {
x: -64,
y: 184
}, {
x: -75,
y: 173
}, {
x: -75,
y: 117
}, {
x: -124,
y: 117
}, {
x: -139,
y: 111
}, {
x: -204,
y: 45
}, {
x: -209,
y: 25
}, {
x: -208,
y: -84
}, {
x: -216,
y: -85
}, {
x: -223,
y: -91
}, {
x: -223,
y: -112
}, {
x: -214,
y: -118
}, {
x: -175,
y: -118
}, {
x: -173,
y: -139
}, {
x: -161,
y: -161
}, {
x: -146,
y: -175
}, {
x: -125,
y: -184
}, {
x: -97,
y: -185
}, {
x: -82,
y: -181
}, {
x: -68,
y: -173
}, {
x: -54,
y: -159
}, {
x: -45,
y: -143
}, {
x: -41,
y: -118
}, {
x: 58,
y: -118
}, {
x: 63,
y: -146
}, {
x: 81,
y: -170
}, {
x: 104,
y: -183
}, {
x: 136,
y: -185
}, {
x: 161,
y: -176
}, {
x: 177,
y: -162
}, {
x: 189,
y: -141
}, {
x: 192,
y: -118
}, {
x: 214,
y: -118
}, {
x: 225,
y: -108
}, {
x: 223,
y: 177
}, {
x: 214,
y: 184
} ]
} ],
name: "FloorCut"
}, {
x: -297,
y: -67,
name: "Role"
}, {
x: -60,
y: -166,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -33.498,
y: 223.026
},
pointEnd: {
x: -33.498,
y: 370
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: -231.119,
y: 345
},
pointEnd: {
x: 10,
y: 345
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 220,
y: -200
}, {
x: 217,
y: -207
}, {
x: 211,
y: -220
}, {
x: 195,
y: -239
}, {
x: 179,
y: -249
}, {
x: 167,
y: -252
}, {
x: 155,
y: -252
}, {
x: 133,
y: -247
}, {
x: 119,
y: -236
}, {
x: 106,
y: -218
}, {
x: 97,
y: -193
}, {
x: 92,
y: -186
}, {
x: 85,
y: -182
}, {
x: 48,
y: -173
}, {
x: 20,
y: -173
}, {
x: -20,
y: -175
}, {
x: -65,
y: -186
}, {
x: -81,
y: -193
}, {
x: -113,
y: -233
}, {
x: -132,
y: -249
}, {
x: -153,
y: -257
}, {
x: -171,
y: -257
}, {
x: -189,
y: -250
}, {
x: -208,
y: -238
}, {
x: -217,
y: -220
}, {
x: -220,
y: -200
}, {
x: -1e3,
y: -200
} ]
} ],
name: "Floor"
}, {
x: 283,
y: -154,
height: 112,
name: "FinishTarget"
}, {
y: 476,
Floor: [ {
vertexes: [ {
x: -165,
y: 110
}, {
x: -182,
y: 106
}, {
x: -196,
y: 96
}, {
x: -211,
y: 74
}, {
x: -220,
y: 48
}, {
x: -220,
y: 34
}, {
x: -216,
y: 22
}, {
x: -208,
y: 9
}, {
x: -191,
y: -4
}, {
x: -207,
y: -30
}, {
x: -214,
y: -46
}, {
x: -217,
y: -56
}, {
x: -215,
y: -76
}, {
x: -206,
y: -92
}, {
x: -188,
y: -104
}, {
x: -170,
y: -110
}, {
x: -154,
y: -111
}, {
x: -133,
y: -104
}, {
x: -114,
y: -88
}, {
x: -81,
y: -47
}, {
x: -65,
y: -40
}, {
x: -20,
y: -29
}, {
x: 21,
y: -26
}, {
x: 48,
y: -27
}, {
x: 86,
y: -36
}, {
x: 93,
y: -40
}, {
x: 99,
y: -48
}, {
x: 108,
y: -73
}, {
x: 120,
y: -90
}, {
x: 135,
y: -101
}, {
x: 154,
y: -106
}, {
x: 167,
y: -106
}, {
x: 179,
y: -103
}, {
x: 194,
y: -93
}, {
x: 210,
y: -74
}, {
x: 216,
y: -62
}, {
x: 219,
y: -48
}, {
x: 218,
y: -36
}, {
x: 214,
y: -25
}, {
x: 205,
y: -12
}, {
x: 190,
y: 1
}, {
x: 211,
y: 36
}, {
x: 215,
y: 52
}, {
x: 213,
y: 65
}, {
x: 196,
y: 87
}, {
x: 175,
y: 100
}, {
x: 159,
y: 104
}, {
x: 143,
y: 104
}, {
x: 124,
y: 100
}, {
x: 109,
y: 89
}, {
x: 80,
y: 57
}, {
x: 61,
y: 50
}, {
x: 6,
y: 41
}, {
x: -65,
y: 40
}, {
x: -89,
y: 43
}, {
x: -99,
y: 47
}, {
x: -105,
y: 55
}, {
x: -114,
y: 80
}, {
x: -126,
y: 94
}, {
x: -148,
y: 108
} ]
} ],
name: "FloorCut"
}, {
x: -280,
y: -212,
name: "Role"
}, {
x: -117,
y: -233,
width: 225,
name: "TriggerMove"
}, {
x: 156,
y: -233,
width: 225,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -259.943,
y: 430
},
pointEnd: {
x: 260.941,
y: 430
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -227
}, {
x: 199,
y: -227
}, {
x: 196,
y: -230
}, {
x: 188,
y: -241
}, {
x: 175,
y: -250
}, {
x: 163,
y: -256
}, {
x: 146,
y: -259
}, {
x: 127,
y: -260
}, {
x: 110,
y: -258
}, {
x: 102,
y: -254
}, {
x: 71,
y: -272
}, {
x: 46,
y: -277
}, {
x: 20,
y: -280
}, {
x: -18,
y: -282
}, {
x: -45,
y: -280
}, {
x: -71,
y: -275
}, {
x: -89,
y: -266
}, {
x: -100,
y: -255
}, {
x: -103,
y: -249
}, {
x: -118,
y: -250
}, {
x: -153,
y: -250
}, {
x: -170,
y: -246
}, {
x: -187,
y: -236
}, {
x: -196,
y: -227
}, {
x: -202,
y: -217
}, {
x: -204,
y: -200
}, {
x: -1e3,
y: -200
} ]
} ],
name: "Floor"
}, {
x: 269,
y: -180,
height: 112,
name: "FinishTarget"
}, {
y: 480,
Floor: [ {
vertexes: [ {
x: -21,
y: 104
}, {
x: -44,
y: 101
}, {
x: -64,
y: 85
}, {
x: -72,
y: 65
}, {
x: -74,
y: 43
}, {
x: -88,
y: 25
}, {
x: -96,
y: 0
}, {
x: -125,
y: 14
}, {
x: -154,
y: 21
}, {
x: -175,
y: 19
}, {
x: -188,
y: 12
}, {
x: -197,
y: 2
}, {
x: -202,
y: -12
}, {
x: -200,
y: -27
}, {
x: -194,
y: -37
}, {
x: -185,
y: -46
}, {
x: -169,
y: -56
}, {
x: -152,
y: -60
}, {
x: -118,
y: -60
}, {
x: -101,
y: -58
}, {
x: -98,
y: -65
}, {
x: -87,
y: -76
}, {
x: -70,
y: -83
}, {
x: -44,
y: -88
}, {
x: -18,
y: -90
}, {
x: 22,
y: -88
}, {
x: 46,
y: -85
}, {
x: 71,
y: -79
}, {
x: 90,
y: -69
}, {
x: 101,
y: -62
}, {
x: 110,
y: -65
}, {
x: 130,
y: -68
}, {
x: 147,
y: -67
}, {
x: 163,
y: -64
}, {
x: 175,
y: -58
}, {
x: 187,
y: -49
}, {
x: 195,
y: -39
}, {
x: 198,
y: -30
}, {
x: 199,
y: -21
}, {
x: 199,
y: -13
}, {
x: 196,
y: -5
}, {
x: 187,
y: 6
}, {
x: 173,
y: 13
}, {
x: 157,
y: 15
}, {
x: 144,
y: 13
}, {
x: 96,
y: -7
}, {
x: 91,
y: 21
}, {
x: 84,
y: 34
}, {
x: 70,
y: 48
}, {
x: 66,
y: 70
}, {
x: 57,
y: 89
}, {
x: 35,
y: 102
}, {
x: 17,
y: 104
}, {
x: 182,
y: 234
}, {
x: 256,
y: 389
}, {
x: -260,
y: 389
}, {
x: -153,
y: 217
} ]
} ],
name: "FloorCut"
}, {
x: -248,
y: -203,
name: "Role"
}, {
y: -245,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -221.295,
y: 474
},
pointEnd: {
x: 219.055,
y: 446.582
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -152
}, {
x: 189,
y: -152
}, {
x: 171,
y: -198
}, {
x: 148,
y: -234
}, {
x: 130,
y: -255
}, {
x: 109,
y: -269
}, {
x: 92,
y: -274
}, {
x: 78,
y: -274
}, {
x: 60,
y: -270
}, {
x: 35,
y: -262
}, {
x: 14,
y: -258
}, {
x: 0,
y: -258
}, {
x: -18,
y: -262
}, {
x: -68,
y: -276
}, {
x: -84,
y: -273
}, {
x: -110,
y: -260
}, {
x: -142,
y: -221
}, {
x: -155,
y: -200
}, {
x: -1e3,
y: -200
} ]
} ],
name: "Floor"
}, {
x: 255,
y: -107,
height: 112,
name: "FinishTarget"
}, {
y: 383,
Floor: [ {
vertexes: [ {
x: 81,
y: 225
}, {
x: 45,
y: 211
}, {
x: 20,
y: 190
}, {
x: 3,
y: 159
}, {
x: -4,
y: 126
}, {
x: -4,
y: 112
}, {
x: -20,
y: 109
}, {
x: -55,
y: 118
}, {
x: -76,
y: 120
}, {
x: -88,
y: 120
}, {
x: -107,
y: 117
}, {
x: -124,
y: 111
}, {
x: -144,
y: 97
}, {
x: -167,
y: 70
}, {
x: -180,
y: 44
}, {
x: -187,
y: 10
}, {
x: -189,
y: -7
}, {
x: -189,
y: -25
}, {
x: -188,
y: -41
}, {
x: -178,
y: -90
}, {
x: -167,
y: -122
}, {
x: -145,
y: -163
}, {
x: -122,
y: -193
}, {
x: -107,
y: -210
}, {
x: -82,
y: -223
}, {
x: -67,
y: -225
}, {
x: -54,
y: -223
}, {
x: -17,
y: -211
}, {
x: 0,
y: -207
}, {
x: 14,
y: -207
}, {
x: 35,
y: -211
}, {
x: 60,
y: -219
}, {
x: 80,
y: -223
}, {
x: 92,
y: -223
}, {
x: 109,
y: -218
}, {
x: 129,
y: -204
}, {
x: 147,
y: -184
}, {
x: 169,
y: -149
}, {
x: 182,
y: -119
}, {
x: 187,
y: -104
}, {
x: 178,
y: -100
}, {
x: 163,
y: -90
}, {
x: 143,
y: -67
}, {
x: 132,
y: -46
}, {
x: 127,
y: -25
}, {
x: 127,
y: 3
}, {
x: 135,
y: 31
}, {
x: 145,
y: 48
}, {
x: 175,
y: 79
}, {
x: 161,
y: 94
}, {
x: 146,
y: 106
}, {
x: 119,
y: 120
}, {
x: 90,
y: 123
}, {
x: 62,
y: 119
}, {
x: 40,
y: 112
}, {
x: 25,
y: 116
}, {
x: 45,
y: 130
}, {
x: 64,
y: 149
}, {
x: 80,
y: 176
}, {
x: 86,
y: 196
}, {
x: 86,
y: 222
}, {
x: 86,
y: 225
} ]
} ],
name: "FloorCut"
}, {
x: -248,
y: -207,
name: "Role"
}, {
y: -239,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -174.446,
y: 237
},
pointEnd: {
x: 205.727,
y: 292.348
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -146
}, {
x: 229,
y: -146
}, {
x: 214,
y: -157
}, {
x: 205,
y: -174
}, {
x: 203,
y: -200
}, {
x: 203,
y: -228
}, {
x: 197,
y: -242
}, {
x: 189,
y: -254
}, {
x: 192,
y: -266
}, {
x: 193,
y: -280
}, {
x: 190,
y: -292
}, {
x: 182,
y: -307
}, {
x: 184,
y: -326
}, {
x: 181,
y: -340
}, {
x: 177,
y: -350
}, {
x: 173,
y: -356
}, {
x: 168,
y: -361
}, {
x: 168,
y: -377
}, {
x: 166,
y: -391
}, {
x: 157,
y: -407
}, {
x: 157,
y: -490
}, {
x: -69,
y: -490
}, {
x: -69,
y: -201
}, {
x: -105,
y: -201
}, {
x: -105,
y: -395
}, {
x: -191,
y: -395
}, {
x: -201,
y: -390
}, {
x: -203,
y: -386
}, {
x: -205,
y: -379
}, {
x: -205,
y: -199
}, {
x: -1e3,
y: -199
} ]
} ],
name: "Floor"
}, {
x: 266,
y: -102,
height: 112,
name: "FinishTarget"
}, {
y: 388,
Floor: [ {
vertexes: [ {
x: -203,
y: -147
}, {
x: -201,
y: -153
}, {
x: -199,
y: -157
}, {
x: -194,
y: -160
}, {
x: -190,
y: -162
}, {
x: -68,
y: -162
}, {
x: -59,
y: -163
}, {
x: 4,
y: -183
}, {
x: 25,
y: -189
}, {
x: 55,
y: -194
}, {
x: 86,
y: -195
}, {
x: 111,
y: -195
}, {
x: 129,
y: -192
}, {
x: 144,
y: -185
}, {
x: 156,
y: -174
}, {
x: 165,
y: -158
}, {
x: 167,
y: -145
}, {
x: 167,
y: -129
}, {
x: 172,
y: -123
}, {
x: 176,
y: -117
}, {
x: 180,
y: -107
}, {
x: 183,
y: -94
}, {
x: 181,
y: -75
}, {
x: 189,
y: -60
}, {
x: 192,
y: -48
}, {
x: 191,
y: -35
}, {
x: 188,
y: -22
}, {
x: 196,
y: -10
}, {
x: 201,
y: 4
}, {
x: 201,
y: 16
}, {
x: 201,
y: 27
}, {
x: 197,
y: 38
}, {
x: 191,
y: 46
}, {
x: 185,
y: 53
}, {
x: 175,
y: 59
}, {
x: 167,
y: 62
}, {
x: 159,
y: 64
}, {
x: 83,
y: 65
}, {
x: 89,
y: 79
}, {
x: 97,
y: 94
}, {
x: 101,
y: 104
}, {
x: 104,
y: 122
}, {
x: 105,
y: 137
}, {
x: 103,
y: 152
}, {
x: 100,
y: 162
}, {
x: 97,
y: 169
}, {
x: 91,
y: 179
}, {
x: 83,
y: 186
}, {
x: 72,
y: 191
}, {
x: 60,
y: 193
}, {
x: 50,
y: 194
}, {
x: 44,
y: 193
}, {
x: 38,
y: 190
}, {
x: 32,
y: 183
}, {
x: 26,
y: 172
}, {
x: 22,
y: 157
}, {
x: 16,
y: 129
}, {
x: 8,
y: 112
}, {
x: -3,
y: 101
}, {
x: -35,
y: 61
}, {
x: -57,
y: 37
}, {
x: -65,
y: 32
}, {
x: -190,
y: 32
}, {
x: -195,
y: 29
}, {
x: -200,
y: 24
}, {
x: -203,
y: 19
} ]
} ],
name: "FloorCut"
}, {
x: -154,
y: -415,
ControllerUD: [ {
target: {
nodeId: 4
}
} ],
name: "ControllerUD"
}, {
x: 43,
y: -481,
scaleX: 1.1,
ControlTarget: [ {
targetPos: {
x: 43.968,
y: -410.291
},
speed: 100
} ],
name: "ControlTarget"
}, {
x: -284,
y: -203,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -105,
y: 446.029
},
pointEnd: {
x: -105,
y: 194.331
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: -61.122,
y: 198.648
},
pointEnd: {
x: -61.122,
y: 395.122
}
} ],
name: "Help"
}, {
Help: [ {
index: 2,
pointStart: {
x: 225.913,
y: 435
},
pointEnd: {
x: -61.122,
y: 395.122
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -999,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -255
}, {
x: 125,
y: -246
}, {
x: 119,
y: -298
}, {
x: 105,
y: -325
}, {
x: 78,
y: -355
}, {
x: 60,
y: -369
}, {
x: 45,
y: -376
}, {
x: 42,
y: -389
}, {
x: 36,
y: -395
}, {
x: 26,
y: -398
}, {
x: 15,
y: -397
}, {
x: 8,
y: -393
}, {
x: -2,
y: -396
}, {
x: -15,
y: -392
}, {
x: -21,
y: -387
}, {
x: -25,
y: -372
}, {
x: -50,
y: -361
}, {
x: -76,
y: -342
}, {
x: -98,
y: -316
}, {
x: -111,
y: -283
}, {
x: -115,
y: -247
}, {
x: -140,
y: -238
}, {
x: -164,
y: -215
}, {
x: -170,
y: -201
}, {
x: -170,
y: -175
}, {
x: -999,
y: -175
} ]
} ],
name: "Floor"
}, {
x: 245,
y: -206,
height: 112,
name: "FinishTarget"
}, {
y: 341,
Floor: [ {
vertexes: [ {
x: -80,
y: 234
}, {
x: -80,
y: 225
}, {
x: -23,
y: 156
}, {
x: -23,
y: 138
}, {
x: -59,
y: 126
}, {
x: -83,
y: 102
}, {
x: -92,
y: 84
}, {
x: -122,
y: 67
}, {
x: -138,
y: 47
}, {
x: -143,
y: 27
}, {
x: -161,
y: 4
}, {
x: -168,
y: -13
}, {
x: -168,
y: -39
}, {
x: -162,
y: -52
}, {
x: -138,
y: -74
}, {
x: -113,
y: -85
}, {
x: -109,
y: -120
}, {
x: -96,
y: -152
}, {
x: -75,
y: -178
}, {
x: -49,
y: -197
}, {
x: -23,
y: -209
}, {
x: -19,
y: -224
}, {
x: -14,
y: -228
}, {
x: -1,
y: -232
}, {
x: 9,
y: -229
}, {
x: 16,
y: -233
}, {
x: 26,
y: -234
}, {
x: 35,
y: -231
}, {
x: 41,
y: -226
}, {
x: 44,
y: -213
}, {
x: 60,
y: -205
}, {
x: 77,
y: -191
}, {
x: 104,
y: -162
}, {
x: 118,
y: -135
}, {
x: 124,
y: -83
}, {
x: 162,
y: -53
}, {
x: 166,
y: -39
}, {
x: 163,
y: 0
}, {
x: 140,
y: 58
}, {
x: 121,
y: 86
}, {
x: 101,
y: 93
}, {
x: 93,
y: 89
}, {
x: 70,
y: 144
}, {
x: 109,
y: 201
}, {
x: 115,
y: 220
}, {
x: 115,
y: 234
}, {
x: 49,
y: 225
}, {
x: 4,
y: 221
}, {
x: -29,
y: 225
} ]
} ],
name: "FloorCut"
}, {
x: -252,
y: -184,
name: "Role"
}, {
y: -324,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -194.653,
y: 338
},
pointEnd: {
x: 142.083,
y: 257
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -164
}, {
x: 203,
y: -164
}, {
x: 203,
y: -278
}, {
x: 195,
y: -288
}, {
x: 179,
y: -288
}, {
x: 87,
y: -196
}, {
x: 87,
y: -241
}, {
x: 78,
y: -266
}, {
x: 65,
y: -281
}, {
x: 46,
y: -293
}, {
x: 30,
y: -296
}, {
x: -149,
y: -296
}, {
x: -166,
y: -292
}, {
x: -180,
y: -283
}, {
x: -195,
y: -265
}, {
x: -205,
y: -239
}, {
x: -205,
y: -201
}, {
x: -1e3,
y: -201
} ]
} ],
name: "Floor"
}, {
x: 289,
y: -118,
height: 112,
name: "FinishTarget"
}, {
y: 427,
Floor: [ {
vertexes: [ {
x: -148,
y: 145
}, {
x: -170,
y: 138
}, {
x: -189,
y: 121
}, {
x: -199,
y: 104
}, {
x: -203,
y: 90
}, {
x: -203,
y: -90
}, {
x: -194,
y: -116
}, {
x: -179,
y: -133
}, {
x: -164,
y: -142
}, {
x: -148,
y: -146
}, {
x: 31,
y: -146
}, {
x: 45,
y: -143
}, {
x: 63,
y: -132
}, {
x: 77,
y: -117
}, {
x: 82,
y: -106
}, {
x: 86,
y: -92
}, {
x: 86,
y: -44
}, {
x: 180,
y: -138
}, {
x: 195,
y: -138
}, {
x: 202,
y: -129
}, {
x: 202,
y: 128
}, {
x: 198,
y: 135
}, {
x: 192,
y: 138
}, {
x: 180,
y: 136
}, {
x: 86,
y: 43
}, {
x: 86,
y: 92
}, {
x: 82,
y: 105
}, {
x: 71,
y: 124
}, {
x: 52,
y: 139
}, {
x: 32,
y: 145
} ]
} ],
name: "FloorCut"
}, {
x: -1,
y: -138,
scaleX: .7,
scaleY: .7,
PickKey: [ {
target: {
nodeId: 4
}
} ],
name: "PickKey"
}, {
x: 232,
y: -73,
name: "DoorLock"
}, {
x: -248,
y: -203,
name: "Role"
}, {
x: -59,
y: -245,
width: 301,
name: "TriggerMove"
}, {
x: 174,
y: -245,
width: 130,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -250.241,
y: 375
},
pointEnd: {
x: 241.818,
y: 417
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -998,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -147.9
}, {
x: 193.1,
y: -147.9
}, {
x: 191,
y: -162
}, {
x: 110,
y: -242
}, {
x: 9,
y: -298
}, {
x: -7,
y: -316
}, {
x: -35,
y: -338
}, {
x: -63,
y: -348
}, {
x: -91,
y: -350
}, {
x: -127,
y: -342
}, {
x: -156,
y: -322
}, {
x: -173,
y: -304
}, {
x: -183,
y: -285
}, {
x: -193,
y: -245
}, {
x: -193,
y: -147.9
}, {
x: -998,
y: -147.9
} ]
} ],
name: "Floor"
}, {
x: 278,
y: -98,
height: 112,
name: "FinishTarget"
}, {
y: 342,
Floor: [ {
vertexes: [ {
x: -110,
y: 205
}, {
x: -150,
y: 185
}, {
x: -168,
y: 165
}, {
x: -181,
y: 144
}, {
x: -191,
y: 117
}, {
x: -190,
y: -103
}, {
x: -181,
y: -144
}, {
x: -171,
y: -162
}, {
x: -155,
y: -179
}, {
x: -126,
y: -199
}, {
x: -91,
y: -207
}, {
x: -63,
y: -205
}, {
x: -36,
y: -196
}, {
x: -8,
y: -174
}, {
x: 8,
y: -156
}, {
x: 108,
y: -101
}, {
x: 187,
y: -22
}, {
x: 189,
y: -17
}, {
x: 189,
y: -7
}, {
x: 184,
y: 0
}, {
x: 150,
y: 2
}, {
x: 190,
y: 54
}, {
x: 193,
y: 65
}, {
x: 191,
y: 74
}, {
x: 186,
y: 79
}, {
x: 140,
y: 92
}, {
x: 173,
y: 141
}, {
x: 176,
y: 153
}, {
x: 172,
y: 162
}, {
x: 166,
y: 165
}, {
x: 118,
y: 165
}, {
x: 129,
y: 180
}, {
x: 132,
y: 190
}, {
x: 131,
y: 202
}, {
x: 119,
y: 207
}, {
x: 111,
y: 206
}, {
x: 8,
y: 155
}, {
x: -39,
y: 199
}, {
x: 363,
y: 478
}, {
x: -348,
y: 475
}, {
x: -80,
y: 207
} ]
} ],
name: "FloorCut"
}, {
x: -277,
y: -159,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: 208.853,
y: 339.63
},
pointEnd: {
x: -221.039,
y: 339.63
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 225,
y: -200
}, {
x: 172,
y: -224
}, {
x: 120,
y: -241
}, {
x: 55,
y: -254
}, {
x: -1,
y: -342
}, {
x: -11,
y: -346
}, {
x: -129,
y: -346
}, {
x: -142,
y: -342
}, {
x: -151,
y: -313
}, {
x: -146,
y: -301
}, {
x: -102.4,
y: -258.8
}, {
x: -121.5,
y: -200.7
}, {
x: -1e3,
y: -200
} ]
} ],
name: "Floor"
}, {
x: 302,
y: -150,
height: 112,
name: "FinishTarget"
}, {
x: 10,
y: 275,
Floor: [ {
vertexes: [ {
x: 186,
y: 225
}, {
x: 144,
y: 220
}, {
x: 115,
y: 213
}, {
x: 91,
y: 204
}, {
x: 60,
y: 187
}, {
x: 13,
y: 150
}, {
x: -50,
y: 81
}, {
x: -160,
y: 74
}, {
x: -225,
y: -36
}, {
x: -223,
y: -47
}, {
x: -205,
y: -65
}, {
x: -199,
y: -67
}, {
x: -120,
y: -43
}, {
x: -43,
y: -120
}, {
x: -66,
y: -194
}, {
x: -65,
y: -205
}, {
x: -44,
y: -225
}, {
x: -31,
y: -223
}, {
x: 70,
y: -164
}, {
x: 76,
y: -156
}, {
x: 81,
y: -51
}, {
x: 131,
y: -7
}, {
x: 167,
y: 33
}, {
x: 199,
y: 83
}, {
x: 214,
y: 122
}, {
x: 223,
y: 167
}, {
x: 225,
y: 224
} ]
} ],
name: "FloorCut"
}, {
x: -248,
y: -203,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -101.785,
y: 185.455
},
pointEnd: {
x: 253.657,
y: 387
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -155
}, {
x: 234.9,
y: -155
}, {
x: 224.6,
y: -163.7
}, {
x: 221,
y: -186
}, {
x: 215,
y: -208
}, {
x: 204,
y: -227
}, {
x: 190,
y: -241
}, {
x: 165,
y: -254
}, {
x: 130,
y: -256
}, {
x: 90,
y: -251
}, {
x: 17,
y: -230
}, {
x: -35,
y: -234
}, {
x: -37,
y: -254
}, {
x: -36,
y: -279
}, {
x: -90,
y: -279
}, {
x: -98,
y: -263
}, {
x: -109,
y: -253
}, {
x: -122,
y: -247
}, {
x: -144,
y: -247
}, {
x: -155,
y: -241
}, {
x: -166,
y: -230
}, {
x: -180,
y: -202
}, {
x: -1e3,
y: -202
} ]
} ],
name: "Floor"
}, {
x: 281,
y: -109,
height: 112,
name: "FinishTarget"
}, {
x: 22,
y: 415,
Floor: [ {
vertexes: [ {
x: 65,
y: 174
}, {
x: 46,
y: 169
}, {
x: 18,
y: 151
}, {
x: -6,
y: 125
}, {
x: -46,
y: 67
}, {
x: -70,
y: 40
}, {
x: -123,
y: 3
}, {
x: -187,
y: -31
}, {
x: -197,
y: -42
}, {
x: -203,
y: -62
}, {
x: -202,
y: -96
}, {
x: -187,
y: -127
}, {
x: -176,
y: -138
}, {
x: -165,
y: -144
}, {
x: -144,
y: -144
}, {
x: -130,
y: -150
}, {
x: -119,
y: -160
}, {
x: -111,
y: -175
}, {
x: -58,
y: -175
}, {
x: -63,
y: -152
}, {
x: -61,
y: -126
}, {
x: -5,
y: -125
}, {
x: 69,
y: -145
}, {
x: 108,
y: -151
}, {
x: 142,
y: -149
}, {
x: 167,
y: -136
}, {
x: 180,
y: -122
}, {
x: 191,
y: -104
}, {
x: 198,
y: -82
}, {
x: 202,
y: -55
}, {
x: 202,
y: -7
}, {
x: 190,
y: 47
}, {
x: 172,
y: 90
}, {
x: 140,
y: 136
}, {
x: 109,
y: 162
}, {
x: 88,
y: 171
} ]
} ],
name: "FloorCut"
}, {
x: -248,
y: -209,
name: "Role"
}, {
y: -256,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -196.36,
y: 312
},
pointEnd: {
x: 243.556,
y: 371
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 164,
y: -200
}, {
x: 164,
y: -250
}, {
x: -164,
y: -250
}, {
x: -164,
y: -200
}, {
x: -1e3,
y: -200
} ]
} ],
name: "Floor"
}, {
x: 245,
y: -150,
height: 112,
name: "FinishTarget"
}, {
Floor: [ {
vertexes: [ {
x: -78,
y: 460
}, {
x: -375,
y: 832
}, {
x: 363,
y: 832
}, {
x: 79,
y: 450
}, {
x: 109,
y: 435
}, {
x: 119,
y: 420
}, {
x: 118,
y: 408
}, {
x: 116,
y: 386
}, {
x: 157,
y: 386
}, {
x: 176,
y: 381
}, {
x: 192,
y: 372
}, {
x: 196,
y: 356
}, {
x: 197,
y: 340
}, {
x: 194,
y: 322
}, {
x: 182,
y: 303
}, {
x: 165,
y: 288
}, {
x: 140,
y: 274
}, {
x: 115,
y: 268
}, {
x: 128,
y: 256
}, {
x: 133,
y: 249
}, {
x: 130,
y: 238
}, {
x: 126,
y: 231
}, {
x: 77,
y: 213
}, {
x: -13,
y: 205
}, {
x: -103,
y: 205
}, {
x: -157,
y: 219
}, {
x: -183,
y: 232
}, {
x: -189,
y: 241
}, {
x: -187,
y: 251
}, {
x: -170,
y: 263
}, {
x: -141,
y: 272
}, {
x: -158,
y: 297
}, {
x: -168,
y: 321
}, {
x: -175,
y: 353
}, {
x: -179,
y: 401
}, {
x: -173,
y: 427
}, {
x: -145,
y: 445
} ]
} ],
name: "FloorCut"
}, {
x: -248,
y: -203,
name: "Role"
}, {
y: -222,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -225.768,
y: 255
},
pointEnd: {
x: 151.615,
y: 255
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 47,
y: -200
}, {
x: 44,
y: -231
}, {
x: 29,
y: -250
}, {
x: 17,
y: -275
}, {
x: -2,
y: -323
}, {
x: -20,
y: -274
}, {
x: -29,
y: -255
}, {
x: -47,
y: -231
}, {
x: -49,
y: -200
}, {
x: -1e3,
y: -200
} ]
} ],
name: "Floor"
}, {
x: 245,
y: -150,
height: 112,
name: "FinishTarget"
}, {
y: 385,
Floor: [ {
vertexes: [ {
x: -1,
y: 208
}, {
x: -18,
y: 158
}, {
x: -29,
y: 137
}, {
x: -44,
y: 119
}, {
x: -39,
y: 110
}, {
x: -39,
y: 101
}, {
x: -42,
y: 92
}, {
x: -49,
y: 85
}, {
x: -58,
y: 82
}, {
x: -70,
y: 84
}, {
x: -78,
y: 90
}, {
x: -82,
y: 97
}, {
x: -105,
y: 93
}, {
x: -128,
y: 94
}, {
x: -181,
y: 104
}, {
x: -148,
y: 65
}, {
x: -134,
y: 43
}, {
x: -125,
y: 21
}, {
x: -116,
y: 21
}, {
x: -108,
y: 17
}, {
x: -102,
y: 11
}, {
x: -99,
y: 2
}, {
x: -101,
y: -10
}, {
x: -107,
y: -18
}, {
x: -115,
y: -22
}, {
x: -125,
y: -22
}, {
x: -135,
y: -46
}, {
x: -147,
y: -66
}, {
x: -181,
y: -105
}, {
x: -130,
y: -95
}, {
x: -102,
y: -94
}, {
x: -82,
y: -97
}, {
x: -78,
y: -91
}, {
x: -69,
y: -84
}, {
x: -59,
y: -83
}, {
x: -51,
y: -85
}, {
x: -43,
y: -92
}, {
x: -39,
y: -100
}, {
x: -39,
y: -109
}, {
x: -44,
y: -120
}, {
x: -29,
y: -139
}, {
x: -17,
y: -162
}, {
x: -1,
y: -209
}, {
x: 15,
y: -163
}, {
x: 28,
y: -138
}, {
x: 43,
y: -119
}, {
x: 38,
y: -110
}, {
x: 38,
y: -101
}, {
x: 41,
y: -92
}, {
x: 49,
y: -85
}, {
x: 58,
y: -83
}, {
x: 66,
y: -84
}, {
x: 74,
y: -87
}, {
x: 80,
y: -97
}, {
x: 101,
y: -94
}, {
x: 129,
y: -95
}, {
x: 180,
y: -105
}, {
x: 146,
y: -66
}, {
x: 135,
y: -47
}, {
x: 124,
y: -22
}, {
x: 116,
y: -22
}, {
x: 107,
y: -18
}, {
x: 101,
y: -12
}, {
x: 98,
y: -4
}, {
x: 98,
y: 5
}, {
x: 103,
y: 14
}, {
x: 113,
y: 21
}, {
x: 124,
y: 21
}, {
x: 133,
y: 44
}, {
x: 146,
y: 65
}, {
x: 180,
y: 104
}, {
x: 127,
y: 94
}, {
x: 104,
y: 93
}, {
x: 81,
y: 97
}, {
x: 76,
y: 89
}, {
x: 68,
y: 83
}, {
x: 57,
y: 82
}, {
x: 48,
y: 85
}, {
x: 41,
y: 92
}, {
x: 38,
y: 101
}, {
x: 38,
y: 111
}, {
x: 43,
y: 119
}, {
x: 28,
y: 138
}, {
x: 16,
y: 159
} ]
} ],
name: "FloorCut"
}, {
x: -228,
y: 408,
height: 300,
AttributeAniSwing: [ {
speed: -75
} ],
name: "Swing"
}, {
x: 245,
y: 408,
height: 300,
AttributeAniSwing: [ {
speed: -75
} ],
name: "Swing"
}, {
x: -248,
y: -203,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -62.805,
y: 297.044
},
pointEnd: {
x: 66.747,
y: 297.044
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -113
}, {
x: 170,
y: -113
}, {
x: 171,
y: -131
}, {
x: 163,
y: -129
}, {
x: 163,
y: -144
}, {
x: 154,
y: -137
}, {
x: 154,
y: -149
}, {
x: 142,
y: -137
}, {
x: 132,
y: -133
}, {
x: 132,
y: -163
}, {
x: 142,
y: -184
}, {
x: 142,
y: -210
}, {
x: 137,
y: -230
}, {
x: 127,
y: -249
}, {
x: 127,
y: -307
}, {
x: 124,
y: -316
}, {
x: 109,
y: -316
}, {
x: 105,
y: -322
}, {
x: 102,
y: -328
}, {
x: 80,
y: -323
}, {
x: 60,
y: -323
}, {
x: 54,
y: -316
}, {
x: 51,
y: -306
}, {
x: 33,
y: -292
}, {
x: 31,
y: -272
}, {
x: 11,
y: -272
}, {
x: 11,
y: -322
}, {
x: 10,
y: -334
}, {
x: -11,
y: -322
}, {
x: -17,
y: -322
}, {
x: -19,
y: -336
}, {
x: -24,
y: -341
}, {
x: -29,
y: -341
}, {
x: -36,
y: -332
}, {
x: -37,
y: -323
}, {
x: -42,
y: -322
}, {
x: -59,
y: -337
}, {
x: -66,
y: -339
}, {
x: -67,
y: -324
}, {
x: -71,
y: -267
}, {
x: -90,
y: -261
}, {
x: -123,
y: -245
}, {
x: -160,
y: -219
}, {
x: -176,
y: -202
}, {
x: -1e3,
y: -202
} ]
} ],
name: "Floor"
}, {
x: 275,
y: -69,
height: 112,
name: "FinishTarget"
}, {
y: 363,
Floor: [ {
vertexes: [ {
x: 45,
y: 120
}, {
x: 40,
y: 110
}, {
x: 36,
y: 94
}, {
x: 34,
y: 73
}, {
x: 30,
y: 59
}, {
x: 21,
y: 40
}, {
x: 5,
y: 19
}, {
x: -14,
y: 0
}, {
x: -28,
y: -10
}, {
x: -53,
y: -23
}, {
x: -78,
y: -29
}, {
x: -99,
y: -29
}, {
x: -109,
y: -28
}, {
x: -126,
y: -24
}, {
x: -143,
y: -18
}, {
x: -158,
y: -11
}, {
x: -176,
y: 1
}, {
x: -193,
y: 18
}, {
x: -200,
y: 23
}, {
x: -207,
y: 23
}, {
x: -214,
y: 11
}, {
x: -214,
y: -16
}, {
x: -207,
y: -44
}, {
x: -193,
y: -73
}, {
x: -175,
y: -98
}, {
x: -158,
y: -115
}, {
x: -121,
y: -141
}, {
x: -88,
y: -158
}, {
x: -46,
y: -171
}, {
x: -47,
y: -179
}, {
x: -56,
y: -188
}, {
x: -54,
y: -212
}, {
x: -65,
y: -223
}, {
x: -64,
y: -235
}, {
x: -60,
y: -234
}, {
x: -42,
y: -219
}, {
x: -35,
y: -220
}, {
x: -34,
y: -229
}, {
x: -28,
y: -238
}, {
x: -24,
y: -238
}, {
x: -20,
y: -233
}, {
x: -18,
y: -219
}, {
x: -9,
y: -219
}, {
x: 9,
y: -230
}, {
x: 9,
y: -220
}, {
x: 2,
y: -207
}, {
x: -14,
y: -198
}, {
x: -26,
y: -185
}, {
x: -4,
y: -179
}, {
x: 11,
y: -168
}, {
x: 31,
y: -169
}, {
x: 40,
y: -174
}, {
x: 40,
y: -177
}, {
x: 35,
y: -183
}, {
x: 35,
y: -189
}, {
x: 53,
y: -203
}, {
x: 56,
y: -215
}, {
x: 61,
y: -221
}, {
x: 81,
y: -220
}, {
x: 102,
y: -225
}, {
x: 104,
y: -220
}, {
x: 100,
y: -213
}, {
x: 123,
y: -213
}, {
x: 123,
y: -207
}, {
x: 116,
y: -201
}, {
x: 86,
y: -196
}, {
x: 67,
y: -181
}, {
x: 99,
y: -172
}, {
x: 114,
y: -162
}, {
x: 127,
y: -146
}, {
x: 136,
y: -127
}, {
x: 141,
y: -108
}, {
x: 140,
y: -82
}, {
x: 132,
y: -61
}, {
x: 131,
y: -29
}, {
x: 144,
y: -34
}, {
x: 153,
y: -44
}, {
x: 153,
y: -32
}, {
x: 162,
y: -39
}, {
x: 161,
y: -24
}, {
x: 169,
y: -27
}, {
x: 162,
y: -9
}, {
x: 151,
y: 4
}, {
x: 134,
y: 13
}, {
x: 119,
y: 17
}, {
x: 113,
y: 39
}, {
x: 122,
y: 40
}, {
x: 161,
y: 27
}, {
x: 176,
y: 29
}, {
x: 182,
y: 36
}, {
x: 180,
y: 45
}, {
x: 162,
y: 42
}, {
x: 150,
y: 54
}, {
x: 136,
y: 51
}, {
x: 131,
y: 56
}, {
x: 126,
y: 67
}, {
x: 133,
y: 58
}, {
x: 155,
y: 60
}, {
x: 163,
y: 49
}, {
x: 179,
y: 53
}, {
x: 187,
y: 44
}, {
x: 191,
y: 44
}, {
x: 203,
y: 57
}, {
x: 209,
y: 68
}, {
x: 213,
y: 78
}, {
x: 213,
y: 94
}, {
x: 205,
y: 112
}, {
x: 196,
y: 120
}, {
x: 162,
y: 128
}, {
x: 163,
y: 146
}, {
x: 161,
y: 155
}, {
x: 153,
y: 152
}, {
x: 145,
y: 144
}, {
x: 135,
y: 152
}, {
x: 115,
y: 150
}, {
x: 104,
y: 149
}, {
x: 32,
y: 226
} ]
} ],
name: "FloorCut"
}, {
x: -253,
y: -203,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -199.13,
y: 255
},
pointEnd: {
x: 129.867,
y: 388.159
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -999,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -67
}, {
x: 174,
y: -67
}, {
x: 154,
y: -105
}, {
x: 80,
y: -176
}, {
x: 55,
y: -190
}, {
x: 24,
y: -197
}, {
x: 13,
y: -187
}, {
x: -56,
y: -190
}, {
x: -112,
y: -175
}, {
x: -999,
y: -175
} ]
} ],
name: "Floor"
}, {
x: 280,
y: -21,
height: 112,
name: "FinishTarget"
}, {
x: -22,
y: 427,
Floor: [ {
vertexes: [ {
x: 62,
y: 137
}, {
x: 14,
y: 125
}, {
x: -30,
y: 91
}, {
x: -52,
y: 51
}, {
x: -52,
y: -11
}, {
x: -54,
y: -20
}, {
x: -60,
y: -25
}, {
x: -72,
y: -28
}, {
x: -84,
y: -22
}, {
x: -94,
y: -7
}, {
x: -99,
y: 5
}, {
x: -95,
y: 21
}, {
x: -91,
y: 15
}, {
x: -82,
y: 12
}, {
x: -73,
y: 13
}, {
x: -68,
y: 21
}, {
x: -73,
y: 44
}, {
x: -81,
y: 54
}, {
x: -92,
y: 63
}, {
x: -102,
y: 65
}, {
x: -112,
y: 65
}, {
x: -129,
y: 56
}, {
x: -136,
y: 47
}, {
x: -157,
y: 47
}, {
x: -172,
y: 43
}, {
x: -186,
y: 32
}, {
x: -193,
y: 18
}, {
x: -197,
y: 0
}, {
x: -194,
y: -23
}, {
x: -183,
y: -32
}, {
x: -167,
y: -31
}, {
x: -163,
y: -22
}, {
x: -163,
y: -12
}, {
x: -158,
y: -8
}, {
x: -148,
y: -51
}, {
x: -130,
y: -83
}, {
x: -88,
y: -117
}, {
x: -34,
y: -131
}, {
x: 36,
y: -127
}, {
x: 48,
y: -137
}, {
x: 76,
y: -131
}, {
x: 100,
y: -117
}, {
x: 174,
y: -47
}, {
x: 194,
y: -9
}, {
x: 198,
y: 33
}, {
x: 186,
y: 75
}, {
x: 150,
y: 115
}, {
x: 112,
y: 133
} ]
} ],
name: "FloorCut"
}, {
x: 79,
y: -30,
scaleX: .7,
scaleY: .7,
PickKey: [ {
target: {
nodeId: 4
}
} ],
name: "PickKey"
}, {
x: 207,
y: 22,
name: "DoorLock"
}, {
x: -248,
y: -181,
name: "Role"
}, {
y: -161,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -134.541,
y: 305
},
pointEnd: {
x: 198.886,
y: 435
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 145,
y: -200
}, {
x: 143,
y: -306
}, {
x: 142,
y: -318
}, {
x: 135,
y: -325
}, {
x: 125,
y: -325
}, {
x: 115,
y: -315
}, {
x: 106,
y: -298
}, {
x: 53,
y: -309
}, {
x: 51,
y: -352
}, {
x: 43,
y: -358
}, {
x: 42,
y: -374
}, {
x: 33,
y: -381
}, {
x: 26,
y: -382
}, {
x: 25,
y: -396
}, {
x: 18,
y: -403
}, {
x: 6,
y: -405
}, {
x: 4,
y: -418
}, {
x: -8,
y: -416
}, {
x: -9,
y: -405
}, {
x: -26,
y: -397
}, {
x: -25,
y: -382
}, {
x: -33,
y: -381
}, {
x: -43,
y: -375
}, {
x: -44,
y: -358
}, {
x: -51,
y: -352
}, {
x: -50,
y: -311
}, {
x: -105,
y: -299
}, {
x: -110,
y: -309
}, {
x: -124,
y: -322
}, {
x: -135,
y: -325
}, {
x: -142,
y: -319
}, {
x: -142,
y: -201
}, {
x: -1e3,
y: -201
} ]
} ],
name: "Floor"
}, {
x: 245,
y: -150,
height: 112,
name: "FinishTarget"
}, {
y: 347,
Floor: [ {
vertexes: [ {
x: -6,
y: 243
}, {
x: -13,
y: 237
}, {
x: -19,
y: 221
}, {
x: -19,
y: 188
}, {
x: -36,
y: 180
}, {
x: -46,
y: 174
}, {
x: -46,
y: 162
}, {
x: -132,
y: 125
}, {
x: -135,
y: 125
}, {
x: -164,
y: 157
}, {
x: -177,
y: 154
}, {
x: -182,
y: 143
}, {
x: -181,
y: 134
}, {
x: -175,
y: 125
}, {
x: -163,
y: 125
}, {
x: -159,
y: 135
}, {
x: -147,
y: 122
}, {
x: -143,
y: 105
}, {
x: -120,
y: -100
}, {
x: -120,
y: -116
}, {
x: -129,
y: -129
}, {
x: -140,
y: -135
}, {
x: -140,
y: -146
}, {
x: -134,
y: -152
}, {
x: -125,
y: -150
}, {
x: -111,
y: -137
}, {
x: -105,
y: -125
}, {
x: -31,
y: -141
}, {
x: -30,
y: -147
}, {
x: -49,
y: -180
}, {
x: -38,
y: -188
}, {
x: -41,
y: -202
}, {
x: -32,
y: -208
}, {
x: -23,
y: -209
}, {
x: -24,
y: -224
}, {
x: -7,
y: -232
}, {
x: -6,
y: -243
}, {
x: 3,
y: -244
}, {
x: 5,
y: -232
}, {
x: 17,
y: -230
}, {
x: 24,
y: -224
}, {
x: 23,
y: -209
}, {
x: 33,
y: -208
}, {
x: 41,
y: -202
}, {
x: 39,
y: -188
}, {
x: 49,
y: -180
}, {
x: 30,
y: -146
}, {
x: 31,
y: -141
}, {
x: 107,
y: -125
}, {
x: 117,
y: -143
}, {
x: 127,
y: -152
}, {
x: 135,
y: -152
}, {
x: 141,
y: -146
}, {
x: 141,
y: -135
}, {
x: 121,
y: -118
}, {
x: 120,
y: -98
}, {
x: 144,
y: 112
}, {
x: 159,
y: 133
}, {
x: 165,
y: 125
}, {
x: 172,
y: 124
}, {
x: 181,
y: 135
}, {
x: 181,
y: 146
}, {
x: 174,
y: 157
}, {
x: 161,
y: 154
}, {
x: 148,
y: 137
}, {
x: 132,
y: 125
}, {
x: 46,
y: 161
}, {
x: 46,
y: 172
}, {
x: 38,
y: 179
}, {
x: 19,
y: 188
}, {
x: 19,
y: 220
}, {
x: 15,
y: 235
}, {
x: 6,
y: 243
} ]
} ],
name: "FloorCut"
}, {
x: -248,
y: -203,
name: "Role"
}, {
y: -338,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -178.281,
y: 320
},
pointEnd: {
x: 164.698,
y: 320
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 222.1,
y: -201.7
}, {
x: 218.8,
y: -427
}, {
x: -170.6,
y: -425.9
}, {
x: -169.7,
y: -200.6
}, {
x: -1e3,
y: -200
} ]
} ],
name: "Floor"
}, {
x: 283,
y: -150,
height: 112,
name: "FinishTarget"
}, {
x: 27,
y: 418,
Floor: [ {
vertexes: [ {
x: -35,
y: 196
}, {
x: -43,
y: 188
}, {
x: -46,
y: 180
}, {
x: -45,
y: 172
}, {
x: -42,
y: 167
}, {
x: -22,
y: 169
}, {
x: -12,
y: 163
}, {
x: -6,
y: 149
}, {
x: -4,
y: 118
}, {
x: -14,
y: 113
}, {
x: -33,
y: 120
}, {
x: -42,
y: 123
}, {
x: -59,
y: 124
}, {
x: -78,
y: 118
}, {
x: -101,
y: 116
}, {
x: -125,
y: 108
}, {
x: -147,
y: 96
}, {
x: -162,
y: 83
}, {
x: -176,
y: 64
}, {
x: -187,
y: 40
}, {
x: -194,
y: 19
}, {
x: -198,
y: -12
}, {
x: -198,
y: -55
}, {
x: -196,
y: -75
}, {
x: -185,
y: -114
}, {
x: -175,
y: -132
}, {
x: -159,
y: -152
}, {
x: -138,
y: -168
}, {
x: -116,
y: -177
}, {
x: -96,
y: -181
}, {
x: -74,
y: -182
}, {
x: -49,
y: -190
}, {
x: -14,
y: -192
}, {
x: 2,
y: -196
}, {
x: 61,
y: -190
}, {
x: 86,
y: -181
}, {
x: 114,
y: -177
}, {
x: 136,
y: -168
}, {
x: 150,
y: -159
}, {
x: 166,
y: -144
}, {
x: 176,
y: -128
}, {
x: 185,
y: -110
}, {
x: 192,
y: -87
}, {
x: 198,
y: -34
}, {
x: 195,
y: 2
}, {
x: 186,
y: 40
}, {
x: 174,
y: 64
}, {
x: 155,
y: 88
}, {
x: 136,
y: 102
}, {
x: 106,
y: 114
}, {
x: 88,
y: 117
}, {
x: 66,
y: 123
}, {
x: 53,
y: 123
}, {
x: 40,
y: 120
}, {
x: 27,
y: 115
}, {
x: 24,
y: 124
}, {
x: 17,
y: 157
}, {
x: 6,
y: 178
}, {
x: -4,
y: 188
}, {
x: -13,
y: 192
}, {
x: -23,
y: 196
} ]
} ],
name: "FloorCut"
}, {
x: -73,
y: 145,
name: "FakeStatic"
}, {
x: 94,
y: 145,
name: "FakeStatic"
}, {
x: -248,
y: -203,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -191.087,
y: 346.191
},
pointEnd: {
x: 246.925,
y: 346.191
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -175
}, {
x: 214,
y: -175
}, {
x: 206,
y: -217
}, {
x: 195,
y: -238
}, {
x: 165,
y: -263
}, {
x: 137,
y: -269
}, {
x: 125,
y: -267
}, {
x: 107.1,
y: -256.4
}, {
x: 98,
y: -251
}, {
x: 89.4,
y: -255.9
}, {
x: -25,
y: -321
}, {
x: -43,
y: -327
}, {
x: -69,
y: -320
}, {
x: -83,
y: -304
}, {
x: -100,
y: -246
}, {
x: -117,
y: -201
}, {
x: -1e3,
y: -201
} ]
} ],
name: "Floor"
}, {
x: 293,
y: -131,
height: 112,
name: "FinishTarget"
}, {
x: 1,
y: 385,
Floor: [ {
vertexes: [ {
x: -72,
y: 186
}, {
x: -98,
y: 180
}, {
x: -123,
y: 166
}, {
x: -138,
y: 151
}, {
x: -150,
y: 129
}, {
x: -150,
y: 96
}, {
x: -141,
y: 78
}, {
x: -131,
y: 70
}, {
x: -131,
y: 64
}, {
x: -188,
y: -63
}, {
x: -188,
y: -95
}, {
x: -173,
y: -114
}, {
x: -152,
y: -122
}, {
x: -59,
y: -140
}, {
x: 3,
y: -161
}, {
x: 60,
y: -186
}, {
x: 81,
y: -186
}, {
x: 102,
y: -171
}, {
x: 109,
y: -155
}, {
x: 135,
y: -14
}, {
x: 165,
y: -3
}, {
x: 174,
y: 4
}, {
x: 187,
y: 28
}, {
x: 187,
y: 67
}, {
x: 178,
y: 88
}, {
x: 150,
y: 121
}, {
x: 123,
y: 141
}, {
x: 76,
y: 163
}, {
x: 30,
y: 178
}, {
x: -11,
y: 186
} ]
} ],
name: "FloorCut"
}, {
x: -248,
y: -203,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -62,
y: 216.694
},
pointEnd: {
x: 167.039,
y: 521.794
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 195,
y: -200
}, {
x: 195,
y: -230
}, {
x: 187,
y: -258
}, {
x: 178,
y: -274
}, {
x: 170,
y: -284
}, {
x: 159,
y: -293
}, {
x: 145,
y: -300
}, {
x: 129,
y: -305
}, {
x: -164,
y: -305
}, {
x: -164,
y: -200
}, {
x: -1e3,
y: -200
} ]
} ],
name: "Floor"
}, {
x: 280,
y: -150,
height: 112,
name: "FinishTarget"
}, {
y: 338,
Floor: [ {
vertexes: [ {
x: -100,
y: 228
}, {
x: -114,
y: 223
}, {
x: -129,
y: 210
}, {
x: -142,
y: 184
}, {
x: -121,
y: 179
}, {
x: -113,
y: 196
}, {
x: -104,
y: 205
}, {
x: -97,
y: 207
}, {
x: -88,
y: 207
}, {
x: -79,
y: 206
}, {
x: -68,
y: 198
}, {
x: -88,
y: 192
}, {
x: -86,
y: 162
}, {
x: -116,
y: 155
}, {
x: -137,
y: 131
}, {
x: -141,
y: 112
}, {
x: -140,
y: 94
}, {
x: -134,
y: 80
}, {
x: -122,
y: 66
}, {
x: -130,
y: 61
}, {
x: -136,
y: 57
}, {
x: -141,
y: 44
}, {
x: -142,
y: 33
}, {
x: -161,
y: 27
}, {
x: -167,
y: 16
}, {
x: -180,
y: 14
}, {
x: -180,
y: 1
}, {
x: -190,
y: -10
}, {
x: -188,
y: -23
}, {
x: -193,
y: -31
}, {
x: -185,
y: -42
}, {
x: -185,
y: -66
}, {
x: -168,
y: -50
}, {
x: -153,
y: -53
}, {
x: -141,
y: -40
}, {
x: -129,
y: -43
}, {
x: -119,
y: -27
}, {
x: -110,
y: -28
}, {
x: -105,
y: -12
}, {
x: -96,
y: -6
}, {
x: -96,
y: -158
}, {
x: -94,
y: -171
}, {
x: -85,
y: -192
}, {
x: -69,
y: -210
}, {
x: -47,
y: -222
}, {
x: -30,
y: -228
}, {
x: 129,
y: -227
}, {
x: 145,
y: -222
}, {
x: 158,
y: -215
}, {
x: 169,
y: -206
}, {
x: 177,
y: -197
}, {
x: 186,
y: -181
}, {
x: 192,
y: -154
}, {
x: 187,
y: -122
}, {
x: 177,
y: -106
}, {
x: 165,
y: -91
}, {
x: 149,
y: -80
}, {
x: 127,
y: -74
}, {
x: 93,
y: -73
}, {
x: 93,
y: 54
}, {
x: 105,
y: 57
}, {
x: 114,
y: 61
}, {
x: 125,
y: 67
}, {
x: 132,
y: 78
}, {
x: 136,
y: 84
}, {
x: 139,
y: 94
}, {
x: 140,
y: 106
}, {
x: 140,
y: 118
}, {
x: 136,
y: 129
}, {
x: 130,
y: 141
}, {
x: 118,
y: 151
}, {
x: 104,
y: 159
}, {
x: 104,
y: 171
}, {
x: 76,
y: 178
}, {
x: 95,
y: 182
}, {
x: 117,
y: 179
}, {
x: 133,
y: 168
}, {
x: 141,
y: 159
}, {
x: 149,
y: 143
}, {
x: 150,
y: 113
}, {
x: 171,
y: 113
}, {
x: 171,
y: 143
}, {
x: 158,
y: 172
}, {
x: 136,
y: 192
}, {
x: 110,
y: 202
}, {
x: 73,
y: 200
}, {
x: 47,
y: 186
}, {
x: 43,
y: 210
}, {
x: 35,
y: 217
}, {
x: -44,
y: 203
}, {
x: -67,
y: 224
} ]
} ],
name: "FloorCut"
}, {
y: -273,
width: 400,
name: "TriggerMove"
}, {
x: 64,
y: -315,
ControllerUD: [ {
target: {
nodeId: 5
}
} ],
name: "ControllerUD"
}, {
x: -100,
y: -298,
scaleX: .6,
scaleY: .7,
ControlTarget: [ {
targetPos: {
x: -105.365,
y: -212.835
}
} ],
name: "ControlTarget"
}, {
x: -248,
y: -203,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -30.508,
y: 81.148
},
pointEnd: {
x: -30.508,
y: 210
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: 221.623,
y: 210
},
pointEnd: {
x: -27,
y: 210
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -258
}, {
x: 174,
y: -258
}, {
x: 150,
y: -286
}, {
x: 124,
y: -300
}, {
x: 100,
y: -310
}, {
x: 37,
y: -322
}, {
x: -38,
y: -322
}, {
x: -88,
y: -312
}, {
x: -112,
y: -304
}, {
x: -137,
y: -290
}, {
x: -153,
y: -279
}, {
x: -172,
y: -259
}, {
x: -182,
y: -242
}, {
x: -188,
y: -223
}, {
x: -190,
y: -187
}, {
x: -1e3,
y: -187
} ]
} ],
name: "Floor"
}, {
x: 257,
y: -214,
height: 112,
name: "FinishTarget"
}, {
y: 401,
Floor: [ {
vertexes: [ {
x: -12,
y: 186
}, {
x: -30,
y: 181
}, {
x: -45,
y: 174
}, {
x: -65,
y: 159
}, {
x: -85,
y: 138
}, {
x: -130,
y: 82
}, {
x: -162,
y: 30
}, {
x: -181,
y: -15
}, {
x: -188,
y: -50
}, {
x: -186,
y: -87
}, {
x: -180,
y: -105
}, {
x: -170,
y: -122
}, {
x: -151,
y: -142
}, {
x: -136,
y: -153
}, {
x: -111,
y: -167
}, {
x: -87,
y: -175
}, {
x: -37,
y: -185
}, {
x: 37,
y: -185
}, {
x: 99,
y: -173
}, {
x: 123,
y: -164
}, {
x: 150,
y: -149
}, {
x: 174,
y: -123
}, {
x: 184,
y: -100
}, {
x: 187,
y: -83
}, {
x: 186,
y: -52
}, {
x: 177,
y: -14
}, {
x: 156,
y: 30
}, {
x: 131,
y: 72
}, {
x: 90,
y: 123
}, {
x: 48,
y: 163
}, {
x: 20,
y: 181
}, {
x: 3,
y: 186
} ]
} ],
name: "FloorCut"
}, {
x: -264,
y: -200,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -219.905,
y: 364.414
},
pointEnd: {
x: 205.795,
y: 270
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -999,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 197,
y: -200
}, {
x: 195,
y: -230
}, {
x: 191,
y: -242
}, {
x: 184,
y: -247
}, {
x: 170,
y: -249
}, {
x: 133,
y: -233
}, {
x: 135,
y: -249
}, {
x: 127,
y: -274
}, {
x: 113,
y: -295
}, {
x: 99,
y: -308
}, {
x: 73,
y: -321
}, {
x: 44,
y: -330
}, {
x: -49,
y: -340
}, {
x: -184,
y: -340
}, {
x: -201,
y: -332
}, {
x: -203,
y: -327
}, {
x: -208,
y: -325
}, {
x: -999,
y: -325
} ]
} ],
name: "Floor"
}, {
x: 245,
y: -150,
height: 112,
name: "FinishTarget"
}, {
x: 10,
y: 440,
Floor: [ {
vertexes: [ {
x: 45,
y: 155
}, {
x: 35,
y: 150
}, {
x: 30,
y: 139
}, {
x: 32,
y: 121
}, {
x: 41,
y: 107
}, {
x: 17,
y: 110
}, {
x: -14,
y: 98
}, {
x: -49,
y: 70
}, {
x: -81,
y: 26
}, {
x: -129,
y: -51
}, {
x: -170,
y: -143
}, {
x: -170,
y: -151
}, {
x: -167,
y: -154
}, {
x: -150,
y: -154
}, {
x: -22,
y: -109
}, {
x: 61,
y: -69
}, {
x: 85,
y: -51
}, {
x: 104,
y: -30
}, {
x: 113,
y: -13
}, {
x: 119,
y: 10
}, {
x: 118,
y: 36
}, {
x: 110,
y: 53
}, {
x: 152,
y: 51
}, {
x: 164,
y: 57
}, {
x: 168,
y: 63
}, {
x: 168,
y: 74
}, {
x: 162,
y: 85
}, {
x: 148,
y: 92
}, {
x: 134,
y: 93
}, {
x: 151,
y: 114
}, {
x: 152,
y: 137
}, {
x: 147,
y: 146
}, {
x: 138,
y: 153
}, {
x: 117,
y: 154
}, {
x: 95,
y: 144
}, {
x: 80,
y: 123
}, {
x: 75,
y: 139
}, {
x: 65,
y: 150
} ]
} ],
name: "FloorCut"
}, {
x: -255,
y: -336,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -174.394,
y: 291.791
},
pointEnd: {
x: 175.722,
y: 550.744
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -150
}, {
x: 208.6,
y: -150
}, {
x: 201.1,
y: -156.2
}, {
x: 197.8,
y: -163.6
}, {
x: 197,
y: -174
}, {
x: 15,
y: -223
}, {
x: 16,
y: -227
}, {
x: 14,
y: -233
}, {
x: 9,
y: -240
}, {
x: 1,
y: -244
}, {
x: -5,
y: -244
}, {
x: -12,
y: -239
}, {
x: -17,
y: -232
}, {
x: -17,
y: -223
}, {
x: -198,
y: -174
}, {
x: -200.3,
y: -161.8
}, {
x: -205.2,
y: -153.8
}, {
x: -215.3,
y: -150
}, {
x: -1e3,
y: -150
} ]
} ],
name: "Floor"
}, {
x: 289,
y: -105,
height: 112,
name: "FinishTarget"
}, {
y: 458,
Floor: [ {
vertexes: [ {
x: -3,
y: 119
}, {
x: -13,
y: 114
}, {
x: -28,
y: 118
}, {
x: -39,
y: 110
}, {
x: -54,
y: 111
}, {
x: -66,
y: 102
}, {
x: -79,
y: 101
}, {
x: -89,
y: 90
}, {
x: -103,
y: 86
}, {
x: -112,
y: 73
}, {
x: -125,
y: 68
}, {
x: -132,
y: 54
}, {
x: -145,
y: 46
}, {
x: -150,
y: 30
}, {
x: -161,
y: 22
}, {
x: -164,
y: 7
}, {
x: -175,
y: -5
}, {
x: -177,
y: -22
}, {
x: -185,
y: -34
}, {
x: -185,
y: -47
}, {
x: -195,
y: -46
}, {
x: -196,
y: -49
}, {
x: -194,
y: -51
}, {
x: -15,
y: -100
}, {
x: -15,
y: -108
}, {
x: -13,
y: -113
}, {
x: -10,
y: -116
}, {
x: -5,
y: -120
}, {
x: 2,
y: -120
}, {
x: 8,
y: -117
}, {
x: 12,
y: -111
}, {
x: 14,
y: -105
}, {
x: 14,
y: -101
}, {
x: 191,
y: -52
}, {
x: 195,
y: -48
}, {
x: 192,
y: -45
}, {
x: 184,
y: -47
}, {
x: 184,
y: -34
}, {
x: 175,
y: -22
}, {
x: 174,
y: -5
}, {
x: 164,
y: 6
}, {
x: 160,
y: 22
}, {
x: 149,
y: 31
}, {
x: 144,
y: 45
}, {
x: 131,
y: 54
}, {
x: 123,
y: 68
}, {
x: 110,
y: 74
}, {
x: 102,
y: 86
}, {
x: 88,
y: 90
}, {
x: 78,
y: 101
}, {
x: 64,
y: 102
}, {
x: 53,
y: 111
}, {
x: 38,
y: 110
}, {
x: 27,
y: 118
}, {
x: 11,
y: 114
} ]
} ],
name: "FloorCut"
}, {
x: -267,
y: -160,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -223.945,
y: 426.382
},
pointEnd: {
x: 211.293,
y: 426.382
}
} ],
name: "Help"
}, {
y: -209,
width: 400,
name: "TriggerMove"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -114
}, {
x: 152,
y: -114
}, {
x: 145,
y: -112
}, {
x: 121,
y: -134
}, {
x: 114,
y: -138
}, {
x: 114,
y: -253
}, {
x: 110,
y: -260
}, {
x: 95,
y: -261
}, {
x: 47,
y: -253
}, {
x: 41,
y: -248
}, {
x: -10,
y: -239
}, {
x: -50,
y: -244
}, {
x: -82,
y: -257
}, {
x: -112,
y: -260
}, {
x: -120,
y: -201
}, {
x: -1e3,
y: -201
} ]
} ],
name: "Floor"
}, {
x: 245,
y: -72,
height: 112,
name: "FinishTarget"
}, {
y: 414,
height: 683,
Floor: [ {
vertexes: [ {
x: 22,
y: 200
}, {
x: 9,
y: 183
}, {
x: -4,
y: 153
}, {
x: -16,
y: 102
}, {
x: -15,
y: 65
}, {
x: -38,
y: 7
}, {
x: -54,
y: 19
}, {
x: -55,
y: 26
}, {
x: -59,
y: 22
}, {
x: -62,
y: 28
}, {
x: -65,
y: 22
}, {
x: -69,
y: 27
}, {
x: -70,
y: 22
}, {
x: -76,
y: 23
}, {
x: -74,
y: 19
}, {
x: -80,
y: 18
}, {
x: -77,
y: 14
}, {
x: -74,
y: -7
}, {
x: -56,
y: -76
}, {
x: -82,
y: -86
}, {
x: -70,
y: -38
}, {
x: -103,
y: -51
}, {
x: -88,
y: 13
}, {
x: -72,
y: 57
}, {
x: -96,
y: 54
}, {
x: -151,
y: 38
}, {
x: -197,
y: 20
}, {
x: -220,
y: 7
}, {
x: -208,
y: -38
}, {
x: -192,
y: -70
}, {
x: -160,
y: -43
}, {
x: -127,
y: -24
}, {
x: -139,
y: -93
}, {
x: -99,
y: -72
}, {
x: -105,
y: -116
}, {
x: -78,
y: -105
}, {
x: -79,
y: -115
}, {
x: -94,
y: -143
}, {
x: -94,
y: -159
}, {
x: -85,
y: -173
}, {
x: -112,
y: -192
}, {
x: -110,
y: -200
}, {
x: -81,
y: -197
}, {
x: -50,
y: -184
}, {
x: -9,
y: -179
}, {
x: 42,
y: -188
}, {
x: 48,
y: -194
}, {
x: 95,
y: -201
}, {
x: 110,
y: -200
}, {
x: 111,
y: -195
}, {
x: 107,
y: -190
}, {
x: 88,
y: -181
}, {
x: 95,
y: -163
}, {
x: 95,
y: -150
}, {
x: 89,
y: -136
}, {
x: 74,
y: -118
}, {
x: 75,
y: -96
}, {
x: 121,
y: -74
}, {
x: 145,
y: -52
}, {
x: 151,
y: -52
}, {
x: 148,
y: -45
}, {
x: 151,
y: -43
}, {
x: 149,
y: -41
}, {
x: 152,
y: -37
}, {
x: 149,
y: -34
}, {
x: 151,
y: -29
}, {
x: 144,
y: -28
}, {
x: 143,
y: -22
}, {
x: 139,
y: -25
}, {
x: 106,
y: -27
}, {
x: 106,
y: -2
}, {
x: 112,
y: 22
}, {
x: 110,
y: 41
}, {
x: 151,
y: 43
}, {
x: 203,
y: 54
}, {
x: 220,
y: 61
}, {
x: 220,
y: 72
}, {
x: 190,
y: 79
}, {
x: 156,
y: 79
}, {
x: 128,
y: 76
}, {
x: 91,
y: 66
}, {
x: 77,
y: 75
}, {
x: 59,
y: 81
}, {
x: 33,
y: 84
}, {
x: 13,
y: 82
}, {
x: 29,
y: 177
}, {
x: 29,
y: 195
}, {
x: 26,
y: 200
} ]
} ],
name: "FloorCut"
}, {
x: -248,
y: -203,
name: "Role"
}, {
y: -236,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -126.283,
y: 271.668
},
pointEnd: {
x: 169.167,
y: 371.261
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -300
}, {
x: 172,
y: -300
}, {
x: 162,
y: -317
}, {
x: 142,
y: -341
}, {
x: 103,
y: -365
}, {
x: 63,
y: -377
}, {
x: 26,
y: -379
}, {
x: -12,
y: -372
}, {
x: -49,
y: -355
}, {
x: -70,
y: -340
}, {
x: -91,
y: -319
}, {
x: -119,
y: -306
}, {
x: -138,
y: -287
}, {
x: -153,
y: -259
}, {
x: -160,
y: -220
}, {
x: -168,
y: -209
}, {
x: -186,
y: -200
}, {
x: -189,
y: -177
}, {
x: -1e3,
y: -177
} ]
} ],
name: "Floor"
}, {
x: 283,
y: -256,
height: 112,
name: "FinishTarget"
}, {
x: 28,
y: 406,
Floor: [ {
vertexes: [ {
x: 6,
y: 141
}, {
x: -3,
y: 136
}, {
x: -8,
y: 129
}, {
x: -6,
y: 116
}, {
x: -40,
y: 110
}, {
x: -68,
y: 97
}, {
x: -75,
y: 90
}, {
x: -77,
y: 80
}, {
x: -93,
y: 69
}, {
x: -112,
y: 49
}, {
x: -129,
y: 17
}, {
x: -133,
y: 18
}, {
x: -154,
y: 47
}, {
x: -174,
y: 57
}, {
x: -196,
y: 56
}, {
x: -208,
y: 50
}, {
x: -214,
y: 43
}, {
x: -213,
y: 37
}, {
x: -196,
y: 28
}, {
x: -187,
y: 17
}, {
x: -180,
y: -22
}, {
x: -165,
y: -50
}, {
x: -146,
y: -68
}, {
x: -120,
y: -80
}, {
x: -98,
y: -103
}, {
x: -77,
y: -118
}, {
x: -40,
y: -135
}, {
x: -3,
y: -142
}, {
x: 33,
y: -140
}, {
x: 74,
y: -128
}, {
x: 112,
y: -104
}, {
x: 132,
y: -81
}, {
x: 142,
y: -60
}, {
x: 163,
y: -44
}, {
x: 189,
y: -14
}, {
x: 210,
y: 26
}, {
x: 213,
y: 44
}, {
x: 212,
y: 71
}, {
x: 205,
y: 86
}, {
x: 194,
y: 96
}, {
x: 181,
y: 101
}, {
x: 163,
y: 101
}, {
x: 148,
y: 97
}, {
x: 137,
y: 90
}, {
x: 129,
y: 81
}, {
x: 123,
y: 73
}, {
x: 116,
y: 57
}, {
x: 96,
y: 80
}, {
x: 93,
y: 91
}, {
x: 86,
y: 99
}, {
x: 66,
y: 109
}, {
x: 27,
y: 116
}, {
x: 30,
y: 123
}, {
x: 27,
y: 134
}, {
x: 19,
y: 140
} ]
} ],
name: "FloorCut"
}, {
x: -276,
y: -186,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -204.993,
y: 472.882
},
pointEnd: {
x: 195.219,
y: 340.493
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 190,
y: -200
}, {
x: 189,
y: -201
}, {
x: 188,
y: -212
}, {
x: 183,
y: -224
}, {
x: 175,
y: -233
}, {
x: 166,
y: -241
}, {
x: 152,
y: -248
}, {
x: 139,
y: -252
}, {
x: 127,
y: -253
}, {
x: 112,
y: -252
}, {
x: 99,
y: -248
}, {
x: 95,
y: -246
}, {
x: 89,
y: -284
}, {
x: 87,
y: -303
}, {
x: 83,
y: -320
}, {
x: 76,
y: -332
}, {
x: 67,
y: -341
}, {
x: 55,
y: -350
}, {
x: 43,
y: -354
}, {
x: 29,
y: -354
}, {
x: 14,
y: -348
}, {
x: 3,
y: -337
}, {
x: -4,
y: -337
}, {
x: -11,
y: -344
}, {
x: -20,
y: -351
}, {
x: -36,
y: -354
}, {
x: -50,
y: -353
}, {
x: -61,
y: -348
}, {
x: -71,
y: -340
}, {
x: -82,
y: -325
}, {
x: -87,
y: -313
}, {
x: -89,
y: -302
}, {
x: -90,
y: -290
}, {
x: -91,
y: -243
}, {
x: -99,
y: -247
}, {
x: -115,
y: -251
}, {
x: -133,
y: -253
}, {
x: -145,
y: -251
}, {
x: -160,
y: -246
}, {
x: -172,
y: -239
}, {
x: -181,
y: -229
}, {
x: -189,
y: -216
}, {
x: -192,
y: -205
}, {
x: -192,
y: -199
}, {
x: -1e3,
y: -199
} ]
} ],
name: "Floor"
}, {
x: 245,
y: -150,
height: 112,
name: "FinishTarget"
}, {
y: 420,
Floor: [ {
vertexes: [ {
x: -41,
y: 188
}, {
x: -62,
y: 181
}, {
x: -80,
y: 162
}, {
x: -87,
y: 139
}, {
x: -86,
y: 112
}, {
x: -78,
y: 88
}, {
x: -65,
y: 67
}, {
x: -3,
y: 2
}, {
x: -67,
y: 64
}, {
x: -90,
y: 78
}, {
x: -111,
y: 85
}, {
x: -136,
y: 87
}, {
x: -161,
y: 79
}, {
x: -180,
y: 63
}, {
x: -189,
y: 40
}, {
x: -188,
y: 27
}, {
x: -183,
y: 15
}, {
x: -174,
y: 5
}, {
x: -163,
y: 0
}, {
x: -176,
y: -8
}, {
x: -186,
y: -20
}, {
x: -189,
y: -33
}, {
x: -189,
y: -42
}, {
x: -187,
y: -52
}, {
x: -180,
y: -64
}, {
x: -170,
y: -74
}, {
x: -159,
y: -81
}, {
x: -145,
y: -86
}, {
x: -132,
y: -88
}, {
x: -116,
y: -87
}, {
x: -99,
y: -82
}, {
x: -82,
y: -74
}, {
x: -56,
y: -55
}, {
x: -3,
y: -3
}, {
x: -59,
y: -60
}, {
x: -74,
y: -80
}, {
x: -81,
y: -95
}, {
x: -84,
y: -102
}, {
x: -87,
y: -118
}, {
x: -88,
y: -128
}, {
x: -87,
y: -140
}, {
x: -85,
y: -149
}, {
x: -80,
y: -161
}, {
x: -75,
y: -168
}, {
x: -69,
y: -176
}, {
x: -60,
y: -183
}, {
x: -49,
y: -188
}, {
x: -40,
y: -189
}, {
x: -30,
y: -189
}, {
x: -21,
y: -186
}, {
x: -12,
y: -180
}, {
x: -5,
y: -173
}, {
x: 0,
y: -163
}, {
x: 6,
y: -175
}, {
x: 15,
y: -183
}, {
x: 29,
y: -189
}, {
x: 43,
y: -189
}, {
x: 55,
y: -185
}, {
x: 66,
y: -177
}, {
x: 75,
y: -168
}, {
x: 82,
y: -156
}, {
x: 86,
y: -140
}, {
x: 87,
y: -121
}, {
x: 82,
y: -102
}, {
x: 75,
y: -85
}, {
x: 55,
y: -57
}, {
x: 3,
y: -3
}, {
x: 65,
y: -64
}, {
x: 87,
y: -78
}, {
x: 100,
y: -83
}, {
x: 113,
y: -87
}, {
x: 127,
y: -88
}, {
x: 140,
y: -87
}, {
x: 152,
y: -83
}, {
x: 165,
y: -77
}, {
x: 174,
y: -69
}, {
x: 182,
y: -60
}, {
x: 187,
y: -49
}, {
x: 188,
y: -38
}, {
x: 187,
y: -27
}, {
x: 182,
y: -14
}, {
x: 174,
y: -6
}, {
x: 162,
y: -1
}, {
x: 176,
y: 7
}, {
x: 185,
y: 19
}, {
x: 188,
y: 35
}, {
x: 186,
y: 51
}, {
x: 169,
y: 74
}, {
x: 144,
y: 86
}, {
x: 112,
y: 85
}, {
x: 80,
y: 73
}, {
x: 54,
y: 53
}, {
x: 2,
y: 3
}, {
x: 53,
y: 53
}, {
x: 74,
y: 80
}, {
x: 86,
y: 113
}, {
x: 85,
y: 143
}, {
x: 73,
y: 169
}, {
x: 51,
y: 186
}, {
x: 33,
y: 188
}, {
x: 19,
y: 185
}, {
x: 7,
y: 176
}, {
x: -1,
y: 162
}, {
x: -6,
y: 174
}, {
x: -16,
y: 183
}, {
x: -28,
y: 187
} ]
} ],
name: "FloorCut"
}, {
x: -248,
y: -203,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -215.671,
y: 388
},
pointEnd: {
x: 216.54,
y: 388
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -210
}, {
x: 116,
y: -210
}, {
x: 112,
y: -286
}, {
x: 104,
y: -305
}, {
x: 95,
y: -318
}, {
x: 79,
y: -325
}, {
x: 50,
y: -330
}, {
x: -37,
y: -330
}, {
x: -80,
y: -325
}, {
x: -96,
y: -318
}, {
x: -105,
y: -305
}, {
x: -105,
y: -287
}, {
x: -109,
y: -210
}, {
x: -1e3,
y: -210
} ]
} ],
name: "Floor"
}, {
x: 245,
y: -160,
height: 112,
name: "FinishTarget"
}, {
y: 403,
Floor: [ {
vertexes: [ {
x: -22,
y: 217
}, {
x: -84,
y: 201
}, {
x: -143,
y: 165
}, {
x: -169,
y: 140
}, {
x: -194,
y: 107
}, {
x: -209,
y: 78
}, {
x: -219,
y: 47
}, {
x: -219,
y: 4
}, {
x: -211,
y: -15
}, {
x: -194,
y: -34
}, {
x: -151,
y: -54
}, {
x: -72,
y: -66
}, {
x: -80,
y: -119
}, {
x: -103,
y: -177
}, {
x: -103,
y: -193
}, {
x: -94,
y: -206
}, {
x: -78,
y: -213
}, {
x: -36,
y: -218
}, {
x: 50,
y: -217
}, {
x: 78,
y: -213
}, {
x: 94,
y: -206
}, {
x: 103,
y: -194
}, {
x: 103,
y: -176
}, {
x: 80,
y: -119
}, {
x: 72,
y: -66
}, {
x: 135,
y: -58
}, {
x: 181,
y: -42
}, {
x: 207,
y: -21
}, {
x: 220,
y: 12
}, {
x: 218,
y: 47
}, {
x: 199,
y: 97
}, {
x: 173,
y: 135
}, {
x: 143,
y: 165
}, {
x: 103,
y: 192
}, {
x: 64,
y: 208
}, {
x: 20,
y: 217
} ]
} ],
name: "FloorCut"
}, {
y: 320,
height: 300,
AttributeAniSwing: [ {
range: 90,
speed: -180
} ],
name: "Swing"
}, {
x: -248,
y: -214,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -115.671,
y: 310
},
pointEnd: {
x: 119.916,
y: 310
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 168,
y: -200
}, {
x: 168,
y: -362
}, {
x: 29,
y: -362
}, {
x: 29,
y: -202
}, {
x: -1e3,
y: -202
} ]
} ],
name: "Floor"
}, {
x: 265,
y: -150,
height: 112,
name: "FinishTarget"
}, {
y: 353,
Floor: [ {
vertexes: [ {
x: -1,
y: 208
}, {
x: -191,
y: 8
}, {
x: -191,
y: 6
}, {
x: -156,
y: 6
}, {
x: -156,
y: -193
}, {
x: -167,
y: -193
}, {
x: -167,
y: -209
}, {
x: 167,
y: -209
}, {
x: 167,
y: -194
}, {
x: 155,
y: -194
}, {
x: 155,
y: 6
}, {
x: 190,
y: 6
}, {
x: 190,
y: 9
}, {
x: 133,
y: 67
}, {
x: 133,
y: 134
}, {
x: 143,
y: 134
}, {
x: 143,
y: 158
}, {
x: 84,
y: 158
}, {
x: 84,
y: 134
}, {
x: 94,
y: 134
}, {
x: 94,
y: 109
} ]
} ],
name: "FloorCut"
}, {
x: -248,
y: -203,
name: "Role"
}, {
y: -297,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: 39.372,
y: 112.322
},
pointEnd: {
x: 39.372,
y: 308
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: 197,
y: 308
},
pointEnd: {
x: 39.372,
y: 308
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -200
}, {
x: 116,
y: -200
}, {
x: 112,
y: -228
}, {
x: 99,
y: -248
}, {
x: 75,
y: -268
}, {
x: 37,
y: -283
}, {
x: 21,
y: -299
}, {
x: 10,
y: -303
}, {
x: -1,
y: -305
}, {
x: -15,
y: -304
}, {
x: -29,
y: -296
}, {
x: -42,
y: -284
}, {
x: -82,
y: -265
}, {
x: -98,
y: -255
}, {
x: -113,
y: -239
}, {
x: -121,
y: -220
}, {
x: -124,
y: -201
}, {
x: -1e3,
y: -201
} ]
} ],
name: "Floor"
}, {
x: 245,
y: -150,
height: 112,
name: "FinishTarget"
}, {
y: 398,
Floor: [ {
vertexes: [ {
x: -132,
y: 172
}, {
x: -165,
y: 158
}, {
x: -185,
y: 136
}, {
x: -193,
y: 112
}, {
x: -193,
y: 87
}, {
x: -188,
y: 70
}, {
x: -174,
y: 49
}, {
x: -152,
y: 33
}, {
x: -133,
y: 27
}, {
x: -107,
y: 27
}, {
x: -117,
y: 4
}, {
x: -122,
y: -16
}, {
x: -121,
y: -48
}, {
x: -116,
y: -71
}, {
x: -118,
y: -88
}, {
x: -111,
y: -106
}, {
x: -97,
y: -121
}, {
x: -82,
y: -131
}, {
x: -42,
y: -150
}, {
x: -27,
y: -163
}, {
x: -14,
y: -170
}, {
x: -1,
y: -171
}, {
x: 10,
y: -169
}, {
x: 20,
y: -165
}, {
x: 37,
y: -150
}, {
x: 74,
y: -135
}, {
x: 98,
y: -116
}, {
x: 110,
y: -96
}, {
x: 113,
y: -74
}, {
x: 119,
y: -44
}, {
x: 117,
y: -14
}, {
x: 103,
y: 28
}, {
x: 131,
y: 27
}, {
x: 160,
y: 38
}, {
x: 181,
y: 60
}, {
x: 192,
y: 91
}, {
x: 188,
y: 126
}, {
x: 169,
y: 154
}, {
x: 137,
y: 171
}, {
x: 108,
y: 172
}, {
x: 79,
y: 162
}, {
x: 57,
y: 139
}, {
x: 46,
y: 108
}, {
x: 49,
y: 78
}, {
x: 15,
y: 87
}, {
x: -19,
y: 87
}, {
x: -50,
y: 78
}, {
x: -47,
y: 94
}, {
x: -48,
y: 116
}, {
x: -63,
y: 147
}, {
x: -95,
y: 169
} ]
} ],
name: "FloorCut"
}, {
x: -248,
y: -203,
name: "Role"
}, {
y: -282,
width: 400,
name: "TriggerMove"
}, {
Help: [ {
pointStart: {
x: -161.082,
y: 331
},
pointEnd: {
x: 170.082,
y: 331
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -995,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -173
}, {
x: 169,
y: -173
}, {
x: 161,
y: -193
}, {
x: 129,
y: -217
}, {
x: 90,
y: -219
}, {
x: 66,
y: -210
}, {
x: 44,
y: -172
}, {
x: -20,
y: -172
}, {
x: -45,
y: -213
}, {
x: -93,
y: -220
}, {
x: -125,
y: -201
}, {
x: -143,
y: -166
}, {
x: -995,
y: -166
} ]
} ],
name: "Floor"
}, {
x: 282,
y: -127,
height: 112,
name: "FinishTarget"
}, {
x: 13,
y: 358,
Floor: [ {
vertexes: [ {
x: -14,
y: 85
}, {
x: -14,
y: 66
}, {
x: 19,
y: 66
}, {
x: 29,
y: 50
}, {
x: -24,
y: 50
}, {
x: -24,
y: 66
}, {
x: -80,
y: 68
}, {
x: -80,
y: 50
}, {
x: -48,
y: 50
}, {
x: -64,
y: 28
}, {
x: -80,
y: 34
}, {
x: -112,
y: 32
}, {
x: -142,
y: 8
}, {
x: -150,
y: -13
}, {
x: -150,
y: -41
}, {
x: -130,
y: -73
}, {
x: -106,
y: -85
}, {
x: -62,
y: -79
}, {
x: -40,
y: -57
}, {
x: -34,
y: -33
}, {
x: -4,
y: -35
}, {
x: 43,
y: 30
}, {
x: 51,
y: 18
}, {
x: 33,
y: -11
}, {
x: 33,
y: -41
}, {
x: 55,
y: -75
}, {
x: 77,
y: -85
}, {
x: 113,
y: -83
}, {
x: 139,
y: -63
}, {
x: 150,
y: -41
}, {
x: 150,
y: -11
}, {
x: 131,
y: 20
}, {
x: 103,
y: 34
}, {
x: 65,
y: 30
}, {
x: 31,
y: 85
} ]
} ],
name: "FloorCut"
}, {
x: -74,
y: -205,
width: 147,
name: "TriggerMove"
}, {
x: 108,
y: -205,
width: 147,
name: "TriggerMove"
}, {
x: -260,
y: -177,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -146.62,
y: 323
},
pointEnd: {
x: -14.388,
y: 320
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: 34.069,
y: 325
},
pointEnd: {
x: 176.823,
y: 325
}
} ],
name: "Help"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -992,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -173
}, {
x: 98,
y: -173
}, {
x: 92,
y: -184
}, {
x: 88,
y: -189
}, {
x: 88,
y: -210
}, {
x: 82,
y: -226
}, {
x: 78,
y: -228
}, {
x: 76,
y: -249
}, {
x: 72,
y: -258
}, {
x: 53,
y: -275
}, {
x: 41,
y: -279
}, {
x: 4,
y: -279
}, {
x: -53,
y: -259
}, {
x: -57,
y: -289
}, {
x: -129,
y: -289
}, {
x: -129,
y: -258
}, {
x: -992,
y: -258
} ]
} ],
name: "Floor"
}, {
x: 287,
y: -130,
height: 112,
name: "FinishTarget"
}, {
x: 13,
y: 264,
Floor: [ {
vertexes: [ {
x: -10,
y: 130
}, {
x: -22,
y: 121
}, {
x: -40,
y: 85
}, {
x: -62,
y: 60
}, {
x: -62,
y: 56
}, {
x: -76,
y: 44
}, {
x: -140,
y: 42
}, {
x: -148,
y: 34
}, {
x: -150,
y: -96
}, {
x: -140,
y: -108
}, {
x: -80,
y: -108
}, {
x: -10,
y: -130
}, {
x: 27,
y: -130
}, {
x: 39,
y: -126
}, {
x: 57,
y: -110
}, {
x: 61,
y: -102
}, {
x: 63,
y: -80
}, {
x: 67,
y: -78
}, {
x: 73,
y: -63
}, {
x: 73,
y: -41
}, {
x: 77,
y: -37
}, {
x: 79,
y: -21
}, {
x: 123,
y: -21
}, {
x: 143,
y: -5
}, {
x: 150,
y: 8
}, {
x: 150,
y: 34
}, {
x: 137,
y: 54
}, {
x: 119,
y: 65
}, {
x: 45,
y: 65
}, {
x: 49,
y: 75
}, {
x: 49,
y: 97
}, {
x: 43,
y: 111
}, {
x: 23,
y: 127
} ]
} ],
name: "FloorCut"
}, {
Help: [ {
pointStart: {
x: 111.64,
y: 239.636
},
pointEnd: {
x: -19.911,
y: 239.636
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: -46.15,
y: 126.473
},
pointEnd: {
x: -46.15,
y: 242.511
}
} ],
name: "Help"
}, {
x: -99,
y: -201,
scaleX: .8,
scaleY: .8,
PickKey: [ {
target: {
nodeId: 7
}
} ],
name: "PickKey"
}, {
x: -93,
y: -293,
ToolBounce: [ {
speed: 1e3
} ],
name: "ToolBounce"
}, {
x: 111,
y: -74,
name: "DoorLock"
}, {
x: -260,
y: -270,
name: "Role"
}, {
x: 23,
y: -269,
width: 140,
name: "TriggerMove"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -995,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -173
}, {
x: 181,
y: -173
}, {
x: 179,
y: -256
}, {
x: 76,
y: -256
}, {
x: 76,
y: -304
}, {
x: -47,
y: -304
}, {
x: -47,
y: -256
}, {
x: -174,
y: -254
}, {
x: -174,
y: -170
}, {
x: -995,
y: -170
} ]
} ],
name: "Floor"
}, {
x: 279,
y: -118,
height: 112,
name: "FinishTarget"
}, {
x: 13,
y: 280,
Floor: [ {
vertexes: [ {
x: -182,
y: -50
}, {
x: 162,
y: -50
}, {
x: 162,
y: 50
}, {
x: 30,
y: 50
}, {
x: 30,
y: 970
}, {
x: -28,
y: 989
}, {
x: -28,
y: 50
}, {
x: -182,
y: 50
} ]
} ],
name: "FloorCut"
}, {
x: -29,
y: 94,
width: 343,
name: "TouchMoveLine"
}, {
x: 143,
y: 94,
AttributeAniTouchMove: [ {
originPos: {
x: 143,
y: 0
},
targetPos: {
x: -200,
y: -300
},
nodeLine: {
nodeId: 3
}
} ],
name: "TouchMove"
}, {
Help: [ {
pointStart: {
x: 145.266,
y: 97.889
},
pointEnd: {
x: -157.502,
y: 93.194
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: 75.872,
y: 334.47
},
pointEnd: {
x: 75.688,
y: 223.688
}
} ],
name: "Help"
}, {
x: 15,
y: -302,
name: "ToolBounce"
}, {
x: 16,
y: -215,
PickKey: [ {
target: {
nodeId: 9
}
} ],
name: "PickKey"
}, {
x: 199,
y: -71,
name: "DoorLock"
}, {
x: -260,
y: -177,
name: "Role"
}, {
x: 128,
y: -249,
width: 100,
name: "TriggerMove"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -995,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -173
}, {
x: 144,
y: -173
}, {
x: 144,
y: -242
}, {
x: 65,
y: -242
}, {
x: 66,
y: -218
}, {
x: 48,
y: -172
}, {
x: 48,
y: -238
}, {
x: 27,
y: -249
}, {
x: 12,
y: -231
}, {
x: 14,
y: -270
}, {
x: 25,
y: -277
}, {
x: 26,
y: -291
}, {
x: -30,
y: -291
}, {
x: -30,
y: -277
}, {
x: -19,
y: -270
}, {
x: -17,
y: -231
}, {
x: -36,
y: -250
}, {
x: -56,
y: -240
}, {
x: -56,
y: -169
}, {
x: -71,
y: -230
}, {
x: -71,
y: -249
}, {
x: -144,
y: -248
}, {
x: -143,
y: -174
}, {
x: -995,
y: -174
} ]
} ],
name: "Floor"
}, {
x: 279,
y: -118,
height: 112,
name: "FinishTarget"
}, {
x: -3,
y: 251,
Floor: [ {
vertexes: [ {
x: -5,
y: 150
}, {
x: -11,
y: 143
}, {
x: -9,
y: 105
}, {
x: -33,
y: 129
}, {
x: -49,
y: 121
}, {
x: -47,
y: 109
}, {
x: -9,
y: 71
}, {
x: -9,
y: 21
}, {
x: -55,
y: 45
}, {
x: -75,
y: 101
}, {
x: -83,
y: 103
}, {
x: -95,
y: 95
}, {
x: -85,
y: 63
}, {
x: -117,
y: 81
}, {
x: -130,
y: 75
}, {
x: -125,
y: 57
}, {
x: -99,
y: 45
}, {
x: -127,
y: 37
}, {
x: -129,
y: 17
}, {
x: -65,
y: 25
}, {
x: -23,
y: 1
}, {
x: -65,
y: -26
}, {
x: -129,
y: -18
}, {
x: -127,
y: -38
}, {
x: -99,
y: -46
}, {
x: -127,
y: -60
}, {
x: -130,
y: -76
}, {
x: -117,
y: -82
}, {
x: -85,
y: -64
}, {
x: -95,
y: -96
}, {
x: -79,
y: -104
}, {
x: -71,
y: -96
}, {
x: -55,
y: -46
}, {
x: -9,
y: -22
}, {
x: -9,
y: -72
}, {
x: -47,
y: -110
}, {
x: -49,
y: -122
}, {
x: -33,
y: -130
}, {
x: -9,
y: -106
}, {
x: -7,
y: -150
}, {
x: 6,
y: -150
}, {
x: 10,
y: -144
}, {
x: 8,
y: -106
}, {
x: 32,
y: -130
}, {
x: 48,
y: -122
}, {
x: 46,
y: -110
}, {
x: 8,
y: -70
}, {
x: 8,
y: -22
}, {
x: 56,
y: -48
}, {
x: 74,
y: -102
}, {
x: 84,
y: -104
}, {
x: 94,
y: -96
}, {
x: 84,
y: -64
}, {
x: 116,
y: -82
}, {
x: 130,
y: -76
}, {
x: 126,
y: -60
}, {
x: 98,
y: -46
}, {
x: 126,
y: -38
}, {
x: 128,
y: -18
}, {
x: 64,
y: -26
}, {
x: 22,
y: -2
}, {
x: 64,
y: 25
}, {
x: 128,
y: 17
}, {
x: 126,
y: 37
}, {
x: 98,
y: 45
}, {
x: 124,
y: 57
}, {
x: 130,
y: 75
}, {
x: 116,
y: 81
}, {
x: 84,
y: 63
}, {
x: 94,
y: 95
}, {
x: 82,
y: 103
}, {
x: 74,
y: 101
}, {
x: 56,
y: 47
}, {
x: 8,
y: 21
}, {
x: 8,
y: 69
}, {
x: 46,
y: 109
}, {
x: 48,
y: 121
}, {
x: 32,
y: 129
}, {
x: 8,
y: 105
}, {
x: 10,
y: 143
}, {
x: 6,
y: 150
} ]
} ],
name: "FloorCut"
}, {
Help: [ {
pointStart: {
x: -36.947,
y: 178.663
},
pointEnd: {
x: 29.013,
y: 181.866
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: -81.185,
y: 243.401
},
pointEnd: {
x: -50.093,
y: 194.117
}
} ],
name: "Help"
}, {
Help: [ {
index: 2,
pointStart: {
x: 72.172,
y: 248.048
},
pointEnd: {
x: 44.594,
y: 185.984
}
} ],
name: "Help"
}, {
x: 128,
y: -249,
width: 100,
name: "TriggerMove"
}, {
x: -115,
y: -164,
scaleX: .5,
scaleY: .5,
ControlTarget: [ {
targetPos: {
x: -4.772,
y: -182.759
}
} ],
name: "ControlTarget"
}, {
x: -2,
y: -291,
ControllerUD: [ {
target: {
nodeId: 7
}
} ],
name: "ControllerUD"
}, {
x: -260,
y: -177,
name: "Role"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -995,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -125
}, {
x: 212,
y: -125
}, {
x: 63,
y: -180
}, {
x: 144,
y: -271
}, {
x: 151,
y: -287
}, {
x: 157,
y: -303
}, {
x: 153,
y: -312
}, {
x: 133,
y: -320
}, {
x: 123,
y: -317
}, {
x: 107,
y: -285
}, {
x: 79,
y: -260
}, {
x: 35,
y: -240
}, {
x: -15,
y: -180
}, {
x: -73,
y: -180
}, {
x: -93,
y: -276
}, {
x: -94,
y: -351
}, {
x: -102,
y: -359
}, {
x: -122,
y: -360
}, {
x: -132,
y: -351
}, {
x: -127,
y: -319
}, {
x: -131,
y: -245
}, {
x: -158,
y: -179
}, {
x: -995,
y: -179
} ]
} ],
name: "Floor"
}, {
x: 286,
y: -71,
height: 112,
name: "FinishTarget"
}, {
x: -39,
y: 386,
Floor: [ {
vertexes: [ {
x: -5,
y: 193
}, {
x: -14,
y: 182
}, {
x: -19,
y: 188
}, {
x: -29,
y: 188
}, {
x: -44,
y: 160
}, {
x: -41,
y: 131
}, {
x: -27,
y: 113
}, {
x: -61,
y: 96
}, {
x: -59,
y: 125
}, {
x: -66,
y: 141
}, {
x: -51,
y: 149
}, {
x: -53,
y: 157
}, {
x: -94,
y: 138
}, {
x: -83,
y: 72
}, {
x: -73,
y: 65
}, {
x: -61,
y: 65
}, {
x: -33,
y: 82
}, {
x: -27,
y: 82
}, {
x: -25,
y: 77
}, {
x: -25,
y: 58
}, {
x: -45,
y: 48
}, {
x: -56,
y: 38
}, {
x: -68,
y: 25
}, {
x: -75,
y: 11
}, {
x: -76,
y: -5
}, {
x: -81,
y: -71
}, {
x: -86,
y: -83
}, {
x: -82,
y: -142
}, {
x: -83,
y: -168
}, {
x: -88,
y: -193
}, {
x: -82,
y: -198
}, {
x: -65,
y: -198
}, {
x: -59,
y: -193
}, {
x: -58,
y: -118
}, {
x: -45,
y: -60
}, {
x: -34,
y: -11
}, {
x: -31,
y: -12
}, {
x: -30,
y: -13
}, {
x: -29,
y: -13
}, {
x: -27,
y: -13
}, {
x: -16,
y: -42
}, {
x: 2,
y: -88
}, {
x: 38,
y: -123
}, {
x: 51,
y: -147
}, {
x: 56,
y: -160
}, {
x: 54,
y: -193
}, {
x: 60,
y: -198
}, {
x: 79,
y: -198
}, {
x: 85,
y: -193
}, {
x: 85,
y: -178
}, {
x: 75,
y: -161
}, {
x: 70,
y: -130
}, {
x: 63,
y: -107
}, {
x: 46,
y: -83
}, {
x: 29,
y: -67
}, {
x: 18,
y: 32
}, {
x: 22,
y: 45
}, {
x: 27,
y: 51
}, {
x: 32,
y: 54
}, {
x: 35,
y: 60
}, {
x: 35,
y: 65
}, {
x: 34,
y: 71
}, {
x: 31,
y: 76
}, {
x: 31,
y: 87
}, {
x: 77,
y: 87
}, {
x: 85,
y: 89
}, {
x: 93,
y: 100
}, {
x: 87,
y: 162
}, {
x: 76,
y: 174
}, {
x: 73,
y: 171
}, {
x: 59,
y: 196
}, {
x: 52,
y: 194
}, {
x: 56,
y: 186
}, {
x: 46,
y: 167
}, {
x: 51,
y: 160
}, {
x: 55,
y: 164
}, {
x: 61,
y: 154
}, {
x: 53,
y: 153
}, {
x: 53,
y: 149
}, {
x: 60,
y: 139
}, {
x: 65,
y: 114
}, {
x: 33,
y: 114
}, {
x: 33,
y: 126
}, {
x: 39,
y: 134
}, {
x: 39,
y: 144
}, {
x: 47,
y: 145
}, {
x: 47,
y: 153
}, {
x: 37,
y: 179
}, {
x: 28,
y: 188
}, {
x: 15,
y: 186
}, {
x: 13,
y: 183
}, {
x: 7,
y: 181
}, {
x: 1,
y: 182
}, {
x: -2,
y: 185
}, {
x: 3,
y: 187
}, {
x: 7,
y: 187
}, {
x: 11,
y: 188
}, {
x: 7,
y: 195
}, {
x: 3,
y: 196
}, {
x: -1,
y: 195
} ]
} ],
name: "FloorCut"
}, {
Help: [ {
pointStart: {
x: -146.041,
y: 369.232
},
pointEnd: {
x: -68.797,
y: 369.525
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: -67.889,
y: 368.549
},
pointEnd: {
x: -9.646,
y: 351.091
}
} ],
name: "Help"
}, {
x: -116,
y: -340,
width: 100,
name: "TriggerMove"
}, {
x: 126,
y: -286,
width: 100,
name: "TriggerMove"
}, {
x: 211,
y: 376,
height: 300,
AttributeAniSwing: [ {
speed: -60
} ],
name: "Swing"
}, {
x: -276,
y: 370,
height: 300,
AttributeAniSwing: [ {
speed: -60
} ],
name: "Swing"
}, {
x: -260,
y: -177,
name: "Role"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -192
}, {
x: 229,
y: -192
}, {
x: 229,
y: -328
}, {
x: 76,
y: -202
}, {
x: -42,
y: -202
}, {
x: -200,
y: -321
}, {
x: -200,
y: -190
}, {
x: -1e3,
y: -190
} ]
} ],
name: "Floor"
}, {
x: 293,
y: -136,
height: 112,
name: "FinishTarget"
}, {
x: 15,
y: 327,
Floor: [ {
vertexes: [ {
x: -84,
y: 129
}, {
x: -116,
y: 119
}, {
x: -139,
y: 97
}, {
x: -147,
y: 79
}, {
x: -150,
y: 63
}, {
x: -147,
y: 27
}, {
x: -137,
y: 5
}, {
x: -120,
y: -18
}, {
x: -4,
y: -129
}, {
x: 4,
y: -129
}, {
x: 12,
y: -123
}, {
x: 120,
y: -18
}, {
x: 141,
y: 12
}, {
x: 150,
y: 40
}, {
x: 149,
y: 71
}, {
x: 139,
y: 97
}, {
x: 127,
y: 111
}, {
x: 108,
y: 123
}, {
x: 85,
y: 129
}, {
x: 54,
y: 128
}, {
x: 29,
y: 117
}, {
x: -1,
y: 94
}, {
x: -23,
y: 113
}, {
x: -45,
y: 125
}, {
x: -59,
y: 129
} ]
} ],
name: "FloorCut"
}, {
x: -260,
y: -190,
name: "Role"
}, {
Help: [ {
isGuide: !0,
pointStart: {
x: 13.779,
y: 190.791
},
pointEnd: {
x: 16.97,
y: 361.799
}
} ],
name: "Help"
}, {
Help: [ {
pointStart: {
x: -135.389,
y: 332.358
},
pointEnd: {
x: 177.483,
y: 333.381
}
} ],
name: "Help"
}, {
x: -179,
y: -296,
width: 100,
name: "TriggerMove"
}, {
x: 220,
y: -306,
width: 100,
name: "TriggerMove"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -192
}, {
x: 202,
y: -192
}, {
x: 108,
y: -261
}, {
x: 73,
y: -195
}, {
x: -1e3,
y: -195
} ]
} ],
name: "Floor"
}, {
x: 293,
y: -136,
height: 112,
name: "FinishTarget"
}, {
x: 15,
y: 327,
Floor: [ {
vertexes: [ {
x: -161,
y: -76
}, {
x: 130,
y: -76
}, {
x: -15,
y: 143
} ]
} ],
name: "FloorCut"
}, {
Help: [ {
pointStart: {
x: 99.218,
y: 330.277
},
pointEnd: {
x: -8.364,
y: 246.453
}
} ],
name: "Help"
}, {
x: 117,
y: -230,
width: 100,
name: "TriggerMove"
}, {
x: 132,
y: 130,
AttributeAniRota: [ {
speed: 360
} ],
name: "Gear"
}, {
x: -29,
y: 4,
name: "Gear"
}, {
x: -260,
y: -190,
name: "Role"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -192
}, {
x: 93,
y: -192
}, {
x: 91,
y: -209
}, {
x: 64,
y: -238
}, {
x: 64,
y: -293
}, {
x: 54,
y: -294
}, {
x: 14,
y: -273
}, {
x: -6,
y: -285
}, {
x: -26,
y: -294
}, {
x: -35,
y: -294
}, {
x: -37,
y: -282
}, {
x: -36,
y: -240
}, {
x: -63,
y: -210
}, {
x: -65,
y: -198
}, {
x: -1e3,
y: -198
} ]
} ],
name: "Floor"
}, {
x: 293,
y: -136,
height: 112,
name: "FinishTarget"
}, {
x: 15,
y: 235,
Floor: [ {
vertexes: [ {
x: -3,
y: 71
}, {
x: -25,
y: 27
}, {
x: -68,
y: 21
}, {
x: -73,
y: 20
}, {
x: -75,
y: 18
}, {
x: -74,
y: 11
}, {
x: -41,
y: -20
}, {
x: -42,
y: -32
}, {
x: -48,
y: -61
}, {
x: -47,
y: -72
}, {
x: -41,
y: -72
}, {
x: -23,
y: -63
}, {
x: -22,
y: -61
}, {
x: -6,
y: -54
}, {
x: -1,
y: -50
}, {
x: 40,
y: -72
}, {
x: 46,
y: -72
}, {
x: 47,
y: -61
}, {
x: 40,
y: -20
}, {
x: 53,
y: -7
}, {
x: 55,
y: -7
}, {
x: 74,
y: 13
}, {
x: 74,
y: 18
}, {
x: 72,
y: 20
}, {
x: 24,
y: 27
}, {
x: 4,
y: 69
}, {
x: 2,
y: 71
} ]
} ],
name: "FloorCut"
}, {
x: -260,
y: -190,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -16.302,
y: 266.437
},
pointEnd: {
x: 43.316,
y: 264.693
}
} ],
name: "Help"
}, {
x: 14,
y: -262,
width: 100,
name: "TriggerMove"
} ]
}, {
name: "Level",
ch: [ {
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -192
}, {
x: 136,
y: -193
}, {
x: 132,
y: -231
}, {
x: 124,
y: -256
}, {
x: 110,
y: -267
}, {
x: 86,
y: -273
}, {
x: 65,
y: -268
}, {
x: -49,
y: -206
}, {
x: -1e3,
y: -206
} ]
} ],
name: "Floor"
}, {
x: 293,
y: -136,
height: 112,
name: "FinishTarget"
}, {
x: -80,
y: 276,
Floor: [ {
vertexes: [ {
x: 9,
y: 140
}, {
x: 1,
y: 136
}, {
x: -14,
y: 120
}, {
x: -30,
y: 50
}, {
x: -46,
y: 110
}, {
x: -54,
y: 120
}, {
x: -70,
y: 128
}, {
x: -90,
y: 128
}, {
x: -106,
y: 120
}, {
x: -114,
y: 110
}, {
x: -116,
y: 98
}, {
x: -136,
y: 92
}, {
x: -150,
y: 72
}, {
x: -150,
y: 48
}, {
x: -132,
y: -18
}, {
x: -128,
y: -60
}, {
x: -116,
y: -108
}, {
x: -106,
y: -130
}, {
x: -90,
y: -140
}, {
x: 43,
y: -140
}, {
x: 55,
y: -134
}, {
x: 59,
y: -128
}, {
x: 63,
y: -128
}, {
x: 67,
y: -122
}, {
x: 71,
y: -122
}, {
x: 75,
y: -116
}, {
x: 79,
y: -116
}, {
x: 83,
y: -110
}, {
x: 87,
y: -110
}, {
x: 91,
y: -104
}, {
x: 95,
y: -104
}, {
x: 99,
y: -98
}, {
x: 103,
y: -98
}, {
x: 107,
y: -92
}, {
x: 111,
y: -92
}, {
x: 115,
y: -86
}, {
x: 119,
y: -86
}, {
x: 125,
y: -78
}, {
x: 129,
y: -78
}, {
x: 141,
y: -68
}, {
x: 150,
y: -52
}, {
x: 150,
y: -28
}, {
x: 139,
y: -10
}, {
x: 121,
y: 0
}, {
x: 97,
y: 0
}, {
x: 73,
y: -16
}, {
x: 93,
y: 62
}, {
x: 91,
y: 86
}, {
x: 77,
y: 104
}, {
x: 59,
y: 110
}, {
x: 53,
y: 128
}, {
x: 43,
y: 136
}, {
x: 35,
y: 140
} ]
} ],
name: "FloorCut"
}, {
x: -260,
y: -203,
name: "Role"
}, {
Help: [ {
pointStart: {
x: 5,
y: 277.435
},
pointEnd: {
x: -50,
y: 101.633
}
} ],
name: "Help"
}, {
x: 14,
y: -262,
width: 100,
name: "TriggerMove"
} ]
}, {
name: "Level",
ch: [ {
x: 76,
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -165
}, {
x: 140,
y: -165
}, {
x: 145,
y: -210
}, {
x: 120,
y: -254
}, {
x: 97,
y: -268
}, {
x: 83,
y: -260
}, {
x: 83,
y: -197
}, {
x: 55,
y: -181
}, {
x: 25,
y: -202
}, {
x: 24,
y: -265
}, {
x: -4,
y: -256
}, {
x: -25,
y: -222
}, {
x: -35,
y: -164
}, {
x: -1e3,
y: -164
} ]
} ],
name: "Floor"
}, {
x: 302,
y: -116,
height: 112,
name: "FinishTarget"
}, {
x: -208,
y: 226,
Floor: [ {
vertexes: [ {
x: 49,
y: 150
}, {
x: 21,
y: 137
}, {
x: 13,
y: 127
}, {
x: 7,
y: 125
}, {
x: 7,
y: 121
}, {
x: -2,
y: 115
}, {
x: -2,
y: 111
}, {
x: -8,
y: 105
}, {
x: -14,
y: 87
}, {
x: -16,
y: 65
}, {
x: -13,
y: 39
}, {
x: -87,
y: -34
}, {
x: -414,
y: 686
}, {
x: -112,
y: -58
}, {
x: -151,
y: -97
}, {
x: -151,
y: -118
}, {
x: -117,
y: -151
}, {
x: -94,
y: -151
}, {
x: 41,
y: -13
}, {
x: 61,
y: -16
}, {
x: 87,
y: -14
}, {
x: 105,
y: -8
}, {
x: 107,
y: -4
}, {
x: 123,
y: 5
}, {
x: 141,
y: 27
}, {
x: 150,
y: 47
}, {
x: 147,
y: 67
}, {
x: 139,
y: 67
}, {
x: 127,
y: 61
}, {
x: 125,
y: 57
}, {
x: 117,
y: 55
}, {
x: 115,
y: 51
}, {
x: 97,
y: 43
}, {
x: 95,
y: 39
}, {
x: 87,
y: 39
}, {
x: 81,
y: 45
}, {
x: 55,
y: 57
}, {
x: 55,
y: 95
}, {
x: 71,
y: 103
}, {
x: 73,
y: 107
}, {
x: 89,
y: 113
}, {
x: 91,
y: 117
}, {
x: 107,
y: 123
}, {
x: 113,
y: 129
}, {
x: 113,
y: 137
}, {
x: 85,
y: 150
} ]
} ],
name: "FloorCut"
}, {
x: -275,
y: -160,
name: "Role"
}, {
Help: [ {
pointStart: {
x: -241.511,
y: 350.458
},
pointEnd: {
x: -115.677,
y: 177.966
}
} ],
name: "Help"
}, {
x: 130,
y: -240,
width: 100,
name: "TriggerMove"
} ]
}, {
name: "Level",
ch: [ {
x: 76,
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -165
}, {
x: 123,
y: -165
}, {
x: 123,
y: -262
}, {
x: 115,
y: -271
}, {
x: 82,
y: -271
}, {
x: 73,
y: -261
}, {
x: 73,
y: -164
}, {
x: 64,
y: -164
}, {
x: -38,
y: -269
}, {
x: -54,
y: -274
}, {
x: -54,
y: -163
}, {
x: -61,
y: -163
}, {
x: -167,
y: -269
}, {
x: -183,
y: -272
}, {
x: -183,
y: -166
}, {
x: -1e3,
y: -166
} ]
} ],
name: "Floor"
}, {
x: 302,
y: -106,
height: 112,
name: "FinishTarget"
}, {
x: 46,
y: 276,
Floor: [ {
vertexes: [ {
x: -149,
y: 128
}, {
x: -149,
y: -128
}, {
x: -139,
y: -126
}, {
x: -23,
y: -8
}, {
x: -21,
y: -128
}, {
x: -11,
y: -126
}, {
x: 103,
y: -10
}, {
x: 105,
y: -120
}, {
x: 113,
y: -128
}, {
x: 143,
y: -128
}, {
x: 149,
y: -122
}, {
x: 149,
y: 122
}, {
x: 145,
y: 128
}, {
x: 113,
y: 128
}, {
x: 105,
y: 122
}, {
x: 105,
y: 10
}, {
x: 27,
y: 88
}, {
x: 23,
y: 88
}, {
x: 19,
y: 96
}, {
x: -13,
y: 128
}, {
x: -21,
y: 128
}, {
x: -21,
y: 8
}, {
x: -141,
y: 128
} ]
} ],
name: "FloorCut"
}, {
x: 25,
y: 72,
width: 350,
name: "TouchMoveLine"
}, {
x: 200,
y: 72,
AttributeAniTouchMove: [ {
originPos: {
x: 200,
y: 0
},
targetPos: {
x: -150,
y: -300
},
nodeLine: {
nodeId: 3
}
} ],
name: "TouchMove"
}, {
Help: [ {
pointStart: {
x: -146.661,
y: 249.824
},
pointEnd: {
x: 138.799,
y: 248.525
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: 202.666,
y: 71.691
},
pointEnd: {
x: -148.065,
y: 71.548
}
} ],
name: "Help"
}, {
Help: [ {
index: 2,
pointStart: {
x: 119.383,
y: 248.668
},
pointEnd: {
x: 241.746,
y: 246.546
}
} ],
name: "Help"
}, {
x: -99,
y: -257,
width: 100,
name: "TriggerMove"
}, {
x: 37,
y: -259,
width: 100,
name: "TriggerMove"
}, {
x: 173,
y: -257,
width: 100,
name: "TriggerMove"
}, {
x: -275,
y: -166,
name: "Role"
} ]
}, {
name: "Level",
ch: [ {
x: 34,
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -183
}, {
x: -32,
y: -183
}, {
x: -38,
y: -311
}, {
x: -211,
y: -311
}, {
x: -216,
y: -181
}, {
x: -1e3,
y: -181
} ]
} ],
name: "Floor"
}, {
x: 300,
y: -129,
height: 112,
name: "FinishTarget"
}, {
x: 4,
y: 468,
Floor: [ {
vertexes: [ {
x: -19,
y: 100
}, {
x: -24,
y: 71
}, {
x: -36,
y: 67
}, {
x: -54,
y: 82
}, {
x: -67,
y: 77
}, {
x: -83,
y: 59
}, {
x: -83,
y: 53
}, {
x: -68,
y: 35
}, {
x: -72,
y: 23
}, {
x: -100,
y: 18
}, {
x: -100,
y: -19
}, {
x: -75,
y: -23
}, {
x: -68,
y: -35
}, {
x: -82,
y: -52
}, {
x: -82,
y: -62
}, {
x: -60,
y: -83
}, {
x: -51,
y: -82
}, {
x: -37,
y: -70
}, {
x: -24,
y: -72
}, {
x: -19,
y: -100
}, {
x: 18,
y: -100
}, {
x: 23,
y: -72
}, {
x: 35,
y: -68
}, {
x: 53,
y: -83
}, {
x: 65,
y: -79
}, {
x: 82,
y: -60
}, {
x: 82,
y: -54
}, {
x: 67,
y: -36
}, {
x: 71,
y: -25
}, {
x: 100,
y: -19
}, {
x: 100,
y: 18
}, {
x: 74,
y: 22
}, {
x: 67,
y: 34
}, {
x: 81,
y: 51
}, {
x: 81,
y: 61
}, {
x: 59,
y: 82
}, {
x: 50,
y: 81
}, {
x: 35,
y: 67
}, {
x: 23,
y: 71
}, {
x: 18,
y: 100
}, {
x: 7,
y: 100
}, {
x: 7,
y: 666
}, {
x: -11,
y: 666
}, {
x: -11,
y: 100
} ]
} ],
name: "FloorCut"
}, {
Help: [ {
pointStart: {
x: -88.61,
y: 436.415
},
pointEnd: {
x: 94.846,
y: 435.116
}
} ],
name: "Help"
}, {
Help: [ {
index: 1,
pointStart: {
x: -92.498,
y: 497.585
},
pointEnd: {
x: 61.137,
y: 496.239
}
} ],
name: "Help"
}, {
Help: [ {
index: 2,
pointStart: {
x: 55.017,
y: 496.578
},
pointEnd: {
x: 53.585,
y: 413.671
}
} ],
name: "Help"
}, {
x: -99,
y: -257,
width: 100,
name: "TriggerMove"
}, {
x: 37,
y: -259,
width: 100,
name: "TriggerMove"
}, {
x: 173,
y: -257,
width: 100,
name: "TriggerMove"
}, {
x: -164,
y: 247,
scaleX: 2,
scaleY: 2,
AttributeAniRota: [ {
speed: -100
} ],
name: "Gear"
}, {
x: 151,
y: 43,
scaleX: 2,
scaleY: 2,
AttributeAniRota: [ {
speed: -100
} ],
name: "Gear"
}, {
x: -295,
y: -181,
name: "Role"
} ]
}, {
name: "Level",
ch: [ {
x: 34,
Floor: [ {
vertexes: [ {
x: -1e3,
y: -800
}, {
x: 1e3,
y: -800
}, {
x: 1e3,
y: -183
}, {
x: 66,
y: -183
}, {
x: 41,
y: -218
}, {
x: 3,
y: -250
}, {
x: -29,
y: -265
}, {
x: -46,
y: -268
}, {
x: -80,
y: -264
}, {
x: -104,
y: -256
}, {
x: -135,
y: -240
}, {
x: -194,
y: -264
}, {
x: -210,
y: -257
}, {
x: -222,
y: -243
}, {
x: -221,
y: -230
}, {
x: -162,
y: -211
}, {
x: -166,
y: -185
}, {
x: -1e3,
y: -185
} ]
} ],
name: "Floor"
}, {
x: 300,
y: -129,
height: 112,
name: "FinishTarget"
}, {
x: -113,
y: 290,
Floor: [ {
vertexes: [ {
x: -52,
y: 186
}, {
x: -56,
y: 184
}, {
x: -58,
y: 172
}, {
x: -66,
y: 161
}, {
x: -71,
y: 151
}, {
x: -73,
y: 145
}, {
x: -73,
y: 141
}, {
x: -71,
y: 141
}, {
x: -73,
y: 140
}, {
x: -72,
y: 138
}, {
x: -73,
y: 139
}, {
x: -74,
y: 134
}, {
x: -74,
y: 125
}, {
x: -84,
y: 113
}, {
x: -86,
y: 108
}, {
x: -87,
y: 108
}, {
x: -89,
y: 103
}, {
x: -89,
y: 98
}, {
x: -84,
y: 90
}, {
x: -78,
y: 87
}, {
x: -67,
y: 86
}, {
x: -63,
y: 79
}, {
x: -65,
y: 1
}, {
x: -62,
y: -15
}, {
x: -63,
y: -57
}, {
x: -73,
y: -64
}, {
x: -99,
y: -73
}, {
x: -105,
y: -79
}, {
x: -106,
y: -85
}, {
x: -103,
y: -90
}, {
x: -90,
y: -91
}, {
x: -81,
y: -85
}, {
x: -69,
y: -82
}, {
x: -63,
y: -79
}, {
x: -63,
y: -89
}, {
x: -69,
y: -100
}, {
x: -76,
y: -103
}, {
x: -85,
y: -104
}, {
x: -104,
y: -111
}, {
x: -107,
y: -116
}, {
x: -107,
y: -121
}, {
x: -104,
y: -130
}, {
x: -100,
y: -131
}, {
x: -61,
y: -101
}, {
x: -64,
y: -106
}, {
x: -95,
y: -135
}, {
x: -95,
y: -140
}, {
x: -93,
y: -143
}, {
x: -71,
y: -139
}, {
x: -47,
y: -107
}, {
x: -38,
y: -109
}, {
x: -22,
y: -108
}, {
x: -17,
y: -110
}, {
x: -4,
y: -110
}, {
x: 3,
y: -112
}, {
x: 5,
y: -114
}, {
x: 5,
y: -128
}, {
x: 3,
y: -137
}, {
x: 1,
y: -158
}, {
x: -5,
y: -170
}, {
x: -7,
y: -180
}, {
x: -4,
y: -184
}, {
x: 2,
y: -187
}, {
x: 15,
y: -183
}, {
x: 16,
y: -181
}, {
x: 22,
y: -179
}, {
x: 25,
y: -175
}, {
x: 26,
y: -160
}, {
x: 29,
y: -147
}, {
x: 28,
y: -123
}, {
x: 31,
y: -115
}, {
x: 38,
y: -105
}, {
x: 41,
y: -105
}, {
x: 65,
y: -89
}, {
x: 86,
y: -68
}, {
x: 93,
y: -57
}, {
x: 103,
y: -37
}, {
x: 107,
y: -16
}, {
x: 106,
y: 10
}, {
x: 94,
y: 44
}, {
x: 91,
y: 62
}, {
x: 86,
y: 74
}, {
x: 70,
y: 98
}, {
x: 52,
y: 114
}, {
x: 48,
y: 120
}, {
x: 48,
y: 122
}, {
x: 45,
y: 125
}, {
x: 36,
y: 149
}, {
x: 27,
y: 162
}, {
x: 23,
y: 165
}, {
x: 18,
y: 172
}, {
x: 13,
y: 175
}, {
x: -1,
y: 177
}, {
x: -7,
y: 179
}, {
x: -41,
y: 181
}, {
x: -45,
y: 185
} ]
} ],
name: "FloorCut"
}, {
Help: [ {
pointStart: {
x: -137.492,
y: 172.747
},
pointEnd: {
x: -20.694,
y: 406.972
}
} ],
name: "Help"
}, {
x: -67,
y: -227,
width: 300,
name: "TriggerMove"
}, {
x: -295,
y: -181,
name: "Role"
} ]
} ];
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_LevelSelectUnit: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "20e40iNwdpE3a3J6SUc2F4a", "DaZhen_NZBTG_LevelSelectUnit");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Game/DaZhen_NZBTG_GameConfig"), r = e("../../Datas/DaZhen_NZBTG_AssetsNS"), x = e("../../Datas/DaZhen_NZBTG_LevelNS"), s = e("../../Utils/DaZhen_NZBTG_CoordinateUtil"), l = e("../../Utils/DaZhen_NZBTG_EventUtil"), c = e("../Core/Base/DaZhen_NZBTG_BaseUnit"), _ = e("../Extensions/DaZhen_NZBTG_WYOrN"), h = e("../DaZhen_NZBTG_GUI"), u = e("../DaZhen_NZBTG_GUIConfig"), p = e("../DaZhen_NZBTG_GUIConst"), f = e("../Panels/DaZhen_NZBTG_PanelEnergy"), d = e("../../Main/DaZhen_NZBTG_Res"), Z = cc._decorator, g = Z.ccclass, v = Z.property, T = Z.menu, m = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.spriteBg = null;
t.textLevelLock = null;
t.sOpen = null;
t.sUnlock = null;
t.sPass = null;
t.unitIndex = 1;
return t;
}
t.prototype.listenOn = function() {
e.prototype.listenOn.call(this);
l.DaZhen_NZBTG_EventUtil.On(u.GUIEvent.LevelUnlock, this._onLevelUnlock, this);
l.DaZhen_NZBTG_EventUtil.On(u.GUIEvent.LevelPass, this._onLevelPass, this);
};
t.prototype.listenOff = function() {
e.prototype.listenOff.call(this);
l.DaZhen_NZBTG_EventUtil.Off(u.GUIEvent.LevelUnlock, this._onLevelUnlock, this);
l.DaZhen_NZBTG_EventUtil.Off(u.GUIEvent.LevelPass, this._onLevelPass, this);
};
t.prototype._onLevelUnlock = function(e) {
this.level == e && this._setStatus();
};
t.prototype._onLevelPass = function(e) {
this.level == e && this._setStatus();
};
t.prototype.ocb_Click = function() {
var e = this;
if (x.default.ins.getIsBeyond(this.level)) h.default.ShowToast("暂未开放"); else if (x.default.ins.getIsUnlock(this.level)) {
var t = s.DaZhen_NZBTG_CoordinateUtil.NodeToWorld(this.node);
r.default.ins.dealAni(u.AssetType.Energy, -p.DaZhen_NZBTG_GUIConst.EnergyConsume, t, function() {
e._createLevel();
}, function() {
console.log("体力不足");
h.default.ShowPopup(u.PanelPath.PanelEnergy, f.default);
});
} else h.default.ShowToast("暂未解锁");
};
t.prototype._setStatus = function() {
var e = x.default.ins.getIsBeyond(this.level), t = x.default.ins.getIsUnlock(this.level) && !e, n = x.default.ins.getIsPass(this.level) && t;
this.sOpen.setStatus(!e);
this.sUnlock.setStatus(t);
this.sPass.setStatus(n);
var o;
o = t ? "UI/LevelSelect/bg_unlock_" + this.unitIndex % 3 : "UI/LevelSelect/bg_lock";
this.spriteBg.spriteFrame = d.default.GetCacheSpriteFrame(o);
};
t.prototype._createLevel = function() {
var e = this.level, t = a.GameEnter.LevelSelect;
h.default.ClearAll();
l.DaZhen_NZBTG_EventUtil.Emit(a.EventType.LevelCreate, e, !1, !1, t);
};
t.prototype.init = function(e, t) {
this.unitIndex = e;
this.pageIndex = t;
this.level = x.default.ins.getLevelInPage(e, t);
this.textLevelLock.string = "" + this.level;
this._setStatus();
};
y([ v(cc.Sprite) ], t.prototype, "spriteBg", void 0);
y([ v(cc.Label) ], t.prototype, "textLevelLock", void 0);
y([ v(_.default) ], t.prototype, "sOpen", void 0);
y([ v(_.default) ], t.prototype, "sUnlock", void 0);
y([ v(_.default) ], t.prototype, "sPass", void 0);
return y([ g, T("GUI/Unit/DaZhen_NZBTG_LevelSelectUnit") ], t);
}(c.default);
n.default = m;
cc._RF.pop();
}, {
"../../Datas/DaZhen_NZBTG_AssetsNS": "DaZhen_NZBTG_AssetsNS",
"../../Datas/DaZhen_NZBTG_LevelNS": "DaZhen_NZBTG_LevelNS",
"../../Game/DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig",
"../../Main/DaZhen_NZBTG_Res": "DaZhen_NZBTG_Res",
"../../Utils/DaZhen_NZBTG_CoordinateUtil": "DaZhen_NZBTG_CoordinateUtil",
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../Core/Base/DaZhen_NZBTG_BaseUnit": "DaZhen_NZBTG_BaseUnit",
"../DaZhen_NZBTG_GUI": "DaZhen_NZBTG_GUI",
"../DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig",
"../DaZhen_NZBTG_GUIConst": "DaZhen_NZBTG_GUIConst",
"../Extensions/DaZhen_NZBTG_WYOrN": "DaZhen_NZBTG_WYOrN",
"../Panels/DaZhen_NZBTG_PanelEnergy": "DaZhen_NZBTG_PanelEnergy"
} ],
DaZhen_NZBTG_LimitList: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "76702h0QLhF0qxb6GQA75wY", "DaZhen_NZBTG_LimitList");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_LimitList = void 0;
var o = function() {
function e(e) {
this._list = [];
this._limit = 10;
this._limit = e;
}
Object.defineProperty(e.prototype, "size", {
get: function() {
return this._list.length;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "head", {
get: function() {
return this._list[0];
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "last", {
get: function() {
return this._list[this.size - 1];
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "list", {
get: function() {
return this._list;
},
enumerable: !1,
configurable: !0
});
e.prototype.add = function(e) {
if (this._limit <= 0) console.warn("限制长度为：" + this._limit + "  需重新设置"); else {
this.size == this._limit && this._delete();
this._list.push(e);
}
};
e.prototype.clear = function() {
this._list = [];
};
e.prototype._delete = function() {
return this._list.shift();
};
return e;
}();
n.DaZhen_NZBTG_LimitList = o;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_LinkList: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f8070JsHC1La5f2PTXA0pWQ", "DaZhen_NZBTG_LinkList");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_LinkList = void 0;
var o = function(e, t, n, o) {
this.param = e;
this.dataIndex = t;
this.preNode = n;
this.nextNode = o;
}, i = function() {
function e() {
this._list = [];
}
Object.defineProperty(e.prototype, "size", {
get: function() {
return this._list.length;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isEmpty", {
get: function() {
return 0 == this.size;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "head", {
get: function() {
return this._list[0];
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "last", {
get: function() {
return this._list[this.size - 1];
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "mid", {
get: function() {
var e = Math.floor((this.size - 1) / 2);
return this._list[e];
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "nodeArray", {
get: function() {
return this._list;
},
enumerable: !1,
configurable: !0
});
e.prototype.add = function(e) {
var t = this.isEmpty ? null : this.last, n = this.isEmpty ? null : this.head, i = t ? t.dataIndex + 1 : 0, y = new o(e, i, t, n);
t && (t.nextNode = y);
n && (n.preNode = y);
this._list.push(y);
};
e.prototype.insert = function(e, t, n) {
var i = n ? t : t.preNode, y = n ? t.nextNode : t, a = n ? t.dataIndex + 1 : t.dataIndex - 1, r = new o(e, a, i, y);
i.nextNode = r;
y.preNode = r;
this._list.push(r);
return r;
};
e.prototype.delete = function(e) {
if (!this.isEmpty) {
var t = this._list.indexOf(e);
if (-1 != t) {
this._list.splice(t, 1);
var n = e.preNode, o = e.nextNode;
n && (n.nextNode = o);
o && (o.preNode = n);
var i = e.dataIndex;
this._list.forEach(function(e) {
e.dataIndex > i && e.dataIndex--;
});
}
}
};
e.prototype.forward = function() {
var e = this._list.shift();
e.dataIndex += this.size + 1;
this._list.push(e);
};
e.prototype.back = function() {
var e = this._list.pop();
e.dataIndex -= this.size + 1;
this._list.unshift(e);
};
e.prototype.emptyList = function() {
this._list = [];
};
return e;
}();
n.DaZhen_NZBTG_LinkList = i;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_LoadUtil: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c20497oTY9NwpEfKFPZo8nZ", "DaZhen_NZBTG_LoadUtil");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_LoadUtil = void 0;
var o = function() {
function e() {}
e.LoadScene = function(e, t) {
this._LoadScene(e, t);
};
e.LoadBundle = function(e, t) {
cc.assetManager.loadBundle(e, function(n, o) {
if (n) {
console.error("LoadBundle:", e, n);
t && t(null);
} else t && t(o);
});
};
e.LoadBundleScene = function(e, t, n) {
this._LoadBundleScene(e, t, n);
};
e.LoadUuid = function(e, t, n) {
this._LoadUuid(e, t, n);
};
e.LoadAsset = function(e, t, n, o) {
this._Load(e, t, n, o);
};
e.LoadDir = function(e, t, n, o) {
this._LoadDir(e, t, n, o);
};
e.LoadJson = function(e, t, n) {
this._Load(e, t, cc.JsonAsset, n);
};
e.LoadTexture = function(e, t, n) {
this._Load(e, t, cc.Texture2D, n);
};
e.LoadPrefab = function(e, t, n) {
this._Load(e, t, cc.Prefab, n);
};
e.LoadAudioClip = function(e, t, n) {
this._Load(e, t, cc.AudioClip, n);
};
e.LoadResAsset = function(e, t, n) {
this._LoadRes(e, t, n);
};
e.LoadResDir = function(e, t, n) {
this._LoadResDir(e, t, n);
};
e.LoadResJson = function(e, t) {
this._LoadRes(e, cc.JsonAsset, t);
};
e.LoadResTexture = function(e, t) {
this._LoadRes(e, cc.Texture2D, t);
};
e.LoadResPrefab = function(e, t) {
this._LoadRes(e, cc.Prefab, t);
};
e.LoadResAudioClip = function(e, t) {
this._LoadRes(e, cc.AudioClip, t);
};
e.LoadRemote = function(e, t, n) {
this._LoadRemote(e, t, n);
};
e.LoadBundlePromise = function(e) {
var t = this;
return new Promise(function(n, o) {
t.LoadBundle(e, function(e) {
e ? n(e) : o(e);
});
});
};
e.LoadScenePromise = function(e) {
var t = this;
return new Promise(function(n) {
t.LoadScene(e, function() {
n();
});
});
};
e.LoadBundleScenePromise = function(e, t) {
var n = this;
return new Promise(function(o, i) {
n.LoadBundleScene(e, t, function(e) {
e ? o(e) : i(e);
});
});
};
e.LoadUuidPromise = function(e, t) {
var n = this;
return new Promise(function(o, i) {
n.LoadUuid(e, t, function(e) {
e ? o(e) : i(e);
});
});
};
e.LoadAssetPromise = function(e, t, n) {
var o = this;
return new Promise(function(i, y) {
o.LoadAsset(e, t, n, function(e) {
e ? i(e) : y(e);
});
});
};
e.LoadDirPromise = function(e, t, n) {
var o = this;
return new Promise(function(i, y) {
o.LoadDir(e, t, n, function(e) {
e ? i(e) : y(e);
});
});
};
e.LoadJsonPromise = function(e, t) {
var n = this;
return new Promise(function(o, i) {
n.LoadJson(e, t, function(e) {
e ? o(e) : i(e);
});
});
};
e.LoadTexturePromise = function(e, t) {
var n = this;
return new Promise(function(o, i) {
n.LoadTexture(e, t, function(e) {
e ? o(e) : i(e);
});
});
};
e.LoadPrefabPromise = function(e, t) {
var n = this;
return new Promise(function(o, i) {
n.LoadPrefab(e, t, function(e) {
e ? o(e) : i(e);
});
});
};
e.LoadAudioClipPromise = function(e, t) {
var n = this;
return new Promise(function(o, i) {
n.LoadAudioClip(e, t, function(e) {
e ? o(e) : i(e);
});
});
};
e.LoadResAssetPromise = function(e, t) {
var n = this;
return new Promise(function(o, i) {
n.LoadResAsset(e, t, function(e) {
e ? o(e) : i(e);
});
});
};
e.LoadResDirPromise = function(e, t) {
var n = this;
return new Promise(function(o, i) {
n.LoadResDir(e, t, function(e) {
e ? o(e) : i(e);
});
});
};
e.LoadResJsonPromise = function(e) {
var t = this;
return new Promise(function(n, o) {
t.LoadResJson(e, function(e) {
e ? n(e) : o(e);
});
});
};
e.LoadResTexturePromise = function(e) {
var t = this;
return new Promise(function(n, o) {
t.LoadResTexture(e, function(e) {
e ? n(e) : o(e);
});
});
};
e.LoadResPrefabPromise = function(e) {
var t = this;
return new Promise(function(n, o) {
t.LoadResPrefab(e, function(e) {
e ? n(e) : o(e);
});
});
};
e.LoadResAudioClipPromise = function(e) {
var t = this;
return new Promise(function(n, o) {
t.LoadResAudioClip(e, function(e) {
e ? n(e) : o(e);
});
});
};
e.LoadRemotePromise = function(e, t) {
var n = this;
return new Promise(function(o, i) {
n.LoadRemote(e, t, function(e) {
e ? o(e) : i(e);
});
});
};
e._LoadUuid = function(e, t, n) {
cc.assetManager.loadAny({
uuid: e,
type: t
}, function(t, o) {
if (t) {
console.error("LoadUuid:", e, ":", t);
n && n(null);
} else n && n(o);
});
};
e._Load = function(e, t, n, o) {
this.LoadBundle(e, function(i) {
i.load(t, n, function(n, i) {
if (n) {
console.error("_Load:", e, ":", t, n);
o && o(null);
} else o && o(i);
});
});
};
e._LoadScene = function(e, t) {
cc.director.preloadScene(e, null, function(n) {
if (n) {
console.error("_LoadScene--sceneName:", e, n);
t && t(null);
} else t && t(null);
});
};
e._LoadBundleScene = function(e, t, n) {
this.LoadBundle(e, function(o) {
o.loadScene(t, function(o, i) {
if (o) {
console.error("_LoadBundleScene:", e, ":", t, o);
n && n(null);
} else n && n(i);
});
});
};
e._LoadDir = function(e, t, n, o) {
this.LoadBundle(e, function(i) {
i.loadDir(t, n, function(n, i) {
if (n) {
console.error("_LoadDir:", e, ":", t, n);
o && o(null);
} else o && o(i);
});
});
};
e._LoadRes = function(e, t, n) {
cc.resources.load(e, t, function(t, o) {
if (t) {
console.error("_LoadResAny:", e, t);
n && n(null);
} else n && n(o);
});
};
e._LoadResDir = function(e, t, n) {
cc.resources.loadDir(e, t, function(t, o) {
if (t) {
console.error("_LoadResDir:", e, t);
n && n(null);
} else n && n(o);
});
};
e._LoadRemote = function(e, t, n) { if (n) setTimeout(function() { n(null); }, 0); };
return e;
}();
n.DaZhen_NZBTG_LoadUtil = o;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_LogUtil: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0b906pAvRZNYI1zSriVv30a", "DaZhen_NZBTG_LogUtil");
var o = this && this.__spreadArrays || function() {
for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
var o = Array(e), i = 0;
for (t = 0; t < n; t++) for (var y = arguments[t], a = 0, r = y.length; a < r; a++, 
i++) o[i] = y[a];
return o;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.LogHelp = void 0;
var i = {
Log: [ "color:yellow", "background:green", "border-radius:3px 3px 3px 3px" ].join(";"),
Warn: [ "color:black", "background:yellow", "border-radius:3px 3px 3px 3px" ].join(";"),
Error: [ "color:white", "background:red", "border-radius:3px 3px 3px 3px" ].join(";")
}, y = function() {
function e() {}
e.Log = function() {
for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
e.DebugLogStatus.Log && e._Log.apply(e, o([ i.Log ], t));
};
e.Warn = function() {
for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
e.DebugLogStatus.Warn && e._Log.apply(e, o([ i.Warn ], t));
};
e.Error = function() {
for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
e.DebugLogStatus.Error && e._Log.apply(e, o([ i.Error ], t));
};
e._GetType = function(e) {
var t = "%c";
e.forEach(function(e) {
t += "string" == typeof e ? "%s" : "%o";
t = "string" == typeof e ? " " + t + " " : t;
});
return t;
};
e._Log = function(t) {
for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
e.DebugLogStatus.IsOpen && console.log.apply(console, o([ e._GetType(n), t ], n));
};
e.DebugLogStatus = {
IsOpen: !0,
Log: !0,
Warn: !0,
Error: !0
};
return e;
}();
n.LogHelp = y;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_Main: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "672bdtGCitJ7qL47PoQ0p9P", "DaZhen_NZBTG_Main");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../Audio/DaZhen_NZBTG_AudioU"), r = e("../Game/DaZhen_NZBTG_GameConfig"), x = e("../Datas/DaZhen_NZBTG_Data"), s = e("../GUI/DaZhen_NZBTG_GUI"), l = e("../GUI/DaZhen_NZBTG_GUIConfig"), c = e("../GUI/Panels/DaZhen_NZBTG_PanelMenu"), _ = e("../Sdk/DaZhen_NZBTG_Sdk"), h = e("../Utils/DaZhen_NZBTG_EventUtil"), u = e("./DaZhen_NZBTG_Edit"), p = e("./DaZhen_NZBTG_LevelData"), f = e("./DaZhen_NZBTG_Res"), d = e("./DaZhen_NZBTG_Debug"), Z = e("../Datas/DaZhen_NZBTG_SkinNS"), g = cc._decorator, v = g.ccclass, T = g.property, m = g.executeInEditMode, G = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.rootGame = null;
t.loadingNode = null;
t.progressBar = null;
t.textProgress = null;
return t;
}
t.prototype.onLoad = function() {
h.DaZhen_NZBTG_EventUtil.On(l.GUIEvent.Loading, this._onLoading, this);
};
t.prototype.onDestroy = function() {
h.DaZhen_NZBTG_EventUtil.Off(l.GUIEvent.Loading, this._onLoading, this);
};
t.prototype.start = function() {
var e = this;
x.LastingData.Init();
x.DailyData.Init();
f.default.Init(function() {
p.default.Init();
_.default.Init();
a.default.Init();
s.default.Init(function() {
if (u.default.GetIns().isPreview) {
e._createLevel();
e.loadingNode.active = !1;
} else s.default.ShowPopup(l.PanelPath.PanelMenu, c.default, function() {
e.loadingNode.active = !1;
});
});
d.default.GetIns().isUnlockAllSkin && Z.default.ins.unlockAll();
e._initGame();
console.log("当前平台为：", _.default.GetPfN());
});
};
t.prototype._onLoading = function(e) {
this.textProgress.string = e + "%";
this.progressBar.progress = e / 100;
};
t.prototype._initGame = function() {
var e = f.default.GetCachePrefab("Game/Game");
cc.instantiate(e).parent = this.rootGame;
};
t.prototype._createLevel = function() {
var e = u.default.GetIns().previewLevel, t = r.GameEnter.Menu;
h.DaZhen_NZBTG_EventUtil.Emit(r.EventType.LevelCreate, e, !0, !1, t);
};
y([ T(cc.Node) ], t.prototype, "rootGame", void 0);
y([ T(cc.Node) ], t.prototype, "loadingNode", void 0);
y([ T(cc.ProgressBar) ], t.prototype, "progressBar", void 0);
y([ T(cc.Label) ], t.prototype, "textProgress", void 0);
return y([ v, m ], t);
}(cc.Component);
n.default = G;
cc._RF.pop();
}, {
"../Audio/DaZhen_NZBTG_AudioU": "DaZhen_NZBTG_AudioU",
"../Datas/DaZhen_NZBTG_Data": "DaZhen_NZBTG_Data",
"../Datas/DaZhen_NZBTG_SkinNS": "DaZhen_NZBTG_SkinNS",
"../GUI/DaZhen_NZBTG_GUI": "DaZhen_NZBTG_GUI",
"../GUI/DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig",
"../GUI/Panels/DaZhen_NZBTG_PanelMenu": "DaZhen_NZBTG_PanelMenu",
"../Game/DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig",
"../Sdk/DaZhen_NZBTG_Sdk": "DaZhen_NZBTG_Sdk",
"../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"./DaZhen_NZBTG_Debug": "DaZhen_NZBTG_Debug",
"./DaZhen_NZBTG_Edit": "DaZhen_NZBTG_Edit",
"./DaZhen_NZBTG_LevelData": "DaZhen_NZBTG_LevelData",
"./DaZhen_NZBTG_Res": "DaZhen_NZBTG_Res"
} ],
DaZhen_NZBTG_MathUtil: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ae8325OnyhG+4xxCqJkhuth", "DaZhen_NZBTG_MathUtil");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_MathUtil = void 0;
var o = function() {
function e() {}
e.Random = function(e, t, n) {
void 0 === n && (n = !1);
var o = Math.random() * (t - e) + e, i = Math.random() * (e - t) + t;
return n ? Math.random() < .5 ? o : i : o;
};
e.RandomInt = function(e, t, n) {
void 0 === n && (n = !1);
return Math.floor(this.Random(e, t, n));
};
e.RandomPNOne = function() {
return 2 * Math.round(Math.random()) - 1;
};
e.TrueOrFalse = function() {
return Math.random() < .5;
};
e.Sign = function(e) {
return e >= 0 ? 1 : -1;
};
e.Lerp = function(t, n, o) {
return t + (n - t) * e.Clamp01(o);
};
e.Clamp = function(e, t, n) {
var o = t < n ? t : n, i = t < n ? n : t;
return e >= i ? i : e <= o ? o : e;
};
e.Clamp01 = function(t) {
return e.Clamp(t, 0, 1);
};
e.Int = function(e) {
return Math.floor(e);
};
e.Fract = function(e) {
return e - Math.floor(e);
};
e.Mod = function(e, t) {
return e - Math.floor(e / t) * t;
};
e.ReverseMod = function(t, n) {
return n - e.Mod(t, n);
};
e.Step = function(e, t) {
return e >= t ? 1 : 0;
};
e.SmoothStep = function(t, n, o) {
var i = n < o ? n : o, y = n < o ? o : n;
if (t >= y) return 1;
if (t <= i) return 0;
var a = e.Clamp01((t - i) / (y - i));
return a * a * (3 - 2 * a);
};
e.CheckRange = function(e, t) {
if (t) if (t instanceof cc.Vec2) {
t.x < e.x && (e.x = t.x);
t.y > e.y && (e.y = t.y);
} else t < e.x ? e.x = t : t > e.y && (e.y = t);
return e.y - e.x;
};
e.Percent = function(e) {
return Math.floor(e * Math.pow(10, 2));
};
e.AngleToRadian = function(e) {
return e * Math.PI / 180;
};
e.RadianToAngle = function(e) {
return 180 * e / Math.PI;
};
e.Radian = function(e, t) {
return t ? Math.atan2(t.y - e.y, t.x - e.x) : Math.atan2(e.y, e.x);
};
e.Angle = function(t, n) {
var o = e.Radian(t, n);
return e.RadianToAngle(o);
};
e.Distance = function(e, t) {
return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
};
e.LinePos = function(e, t) {
var n = cc.v2();
n.x = e;
n.y = t * e;
return n;
};
e.CirclePos = function(e, t, n) {
var o = cc.v2();
o.x = Math.cos(n) * t;
o.y = Math.sin(n) * t;
return o.add(e);
};
e.EllipsePos = function(e, t, n, o) {
var i = 1;
(o = this.Mod(o, 2 * Math.PI)) >= Math.PI / 2 && o <= 3 * Math.PI / 2 && (i = -1);
var y = cc.v2();
y.x = i * Math.sqrt(1 / (1 / Math.pow(t, 2) + Math.pow(Math.tan(o), 2) / Math.pow(n, 2)));
y.y = y.x * Math.tan(o);
return y.add(e);
};
e.CrossPoint = function(e, t) {
var n = function(e) {
return e[0].x - e[1].x == 0 ? null : (e[0].y - e[1].y) / (e[0].x - e[1].x);
}, o = function(e, t) {
return e[0].y - t * e[0].x;
}, i = cc.v2(), y = n(e), a = n(t), r = 0, x = 0;
if (null == y && null == a) return null;
if (null == y) {
x = o(t, a);
i.x = e[0].x;
i.y = a * i.x + x;
} else if (null == a) {
r = o(e, y);
i.x = t[0].x;
i.y = y * i.x + r;
} else {
r = o(e, y);
x = o(t, a);
i.x = -(r - x) / (y - a);
i.y = i.x * y + r;
}
return i;
};
return e;
}();
n.DaZhen_NZBTG_MathUtil = o;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_PanelEnergyLimitless: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c5408DOQGNKk5f+DOheiTZR", "DaZhen_NZBTG_PanelEnergyLimitless");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Datas/DaZhen_NZBTG_AssetsNS"), r = e("../../Sdk/DaZhen_NZBTG_Sdk"), x = e("../../Utils/DaZhen_NZBTG_EventUtil"), s = e("../Core/Base/DaZhen_NZBTG_BasePanel"), l = e("../DaZhen_NZBTG_GUI"), c = e("../DaZhen_NZBTG_GUIConfig"), _ = cc._decorator, h = _.ccclass, u = _.property, p = _.menu, f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.textAdCount = null;
return t;
}
t.prototype.listenOn = function() {
e.prototype.listenOn.call(this);
x.DaZhen_NZBTG_EventUtil.On(c.GUIEvent.AdCountAsset, this._onAdCountAsset, this);
};
t.prototype.listenOff = function() {
e.prototype.listenOff.call(this);
x.DaZhen_NZBTG_EventUtil.Off(c.GUIEvent.AdCountAsset, this._onAdCountAsset, this);
};
t.prototype.onShowPanel = function() {
e.prototype.onShowPanel.call(this);
x.DaZhen_NZBTG_EventUtil.Emit(c.GUIEvent.AdCountAsset, c.AssetType.Energy);
};
t.prototype.ocb_Ad = function() {
r.default.ShowVideo(function(e) {
e && a.default.ins.addAdCount(c.AssetType.Energy);
});
};
t.prototype._onAdCountAsset = function(e) {
if (e == c.AssetType.Energy) {
var t = a.default.ins.getAdCount(c.AssetType.Energy), n = t.count, o = t.max;
this.textAdCount.string = "(" + n + "/" + o + ")";
if (a.default.ins.getIsLimitless(c.AssetType.Energy)) {
this.close();
l.default.ShowToast("获得本日无限体力");
}
}
};
y([ u(cc.Label) ], t.prototype, "textAdCount", void 0);
return y([ h, p("GUI/Panel/DaZhen_NZBTG_PanelEnergyLimitless") ], t);
}(s.default);
n.default = f;
cc._RF.pop();
}, {
"../../Datas/DaZhen_NZBTG_AssetsNS": "DaZhen_NZBTG_AssetsNS",
"../../Sdk/DaZhen_NZBTG_Sdk": "DaZhen_NZBTG_Sdk",
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../Core/Base/DaZhen_NZBTG_BasePanel": "DaZhen_NZBTG_BasePanel",
"../DaZhen_NZBTG_GUI": "DaZhen_NZBTG_GUI",
"../DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig"
} ],
DaZhen_NZBTG_PanelEnergy: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7bb46jeU4lP65+40Nc3yTId", "DaZhen_NZBTG_PanelEnergy");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Datas/DaZhen_NZBTG_AssetsNS"), r = e("../../Sdk/DaZhen_NZBTG_Sdk"), x = e("../../Utils/DaZhen_NZBTG_CoordinateUtil"), s = e("../Core/Base/DaZhen_NZBTG_BasePanel"), l = e("../DaZhen_NZBTG_GUIConfig"), c = cc._decorator, _ = c.ccclass, h = (c.property, 
c.menu), u = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.start = function() {
this.initOncePanel();
};
t.prototype.initOncePanel = function() {
e.prototype.initOncePanel.call(this);
};
t.prototype.onClosePanel = function() {
e.prototype.onClosePanel.call(this);
this._closeCb && this._closeCb(this._isCancel);
this._closeCb = null;
};
t.prototype.listenOn = function() {
e.prototype.listenOn.call(this);
};
t.prototype.listenOff = function() {
e.prototype.listenOff.call(this);
};
t.prototype.ocb_Ad = function() {
var e = this;
r.default.ShowVideo(function(t) {
if (t) {
var n = a.default.ins.getAdPrize(l.AssetType.Energy), o = x.DaZhen_NZBTG_CoordinateUtil.NodeToWorld(e.node);
a.default.ins.dealAni(l.AssetType.Energy, n, o);
e._isCancel = !1;
e.close();
}
});
};
t.prototype.initPanel = function(e) {
this._isCancel = !0;
this._closeCb = e;
};
return y([ _, h("GUI/Panel/DaZhen_NZBTG_PanelEnergy") ], t);
}(s.default);
n.default = u;
cc._RF.pop();
}, {
"../../Datas/DaZhen_NZBTG_AssetsNS": "DaZhen_NZBTG_AssetsNS",
"../../Sdk/DaZhen_NZBTG_Sdk": "DaZhen_NZBTG_Sdk",
"../../Utils/DaZhen_NZBTG_CoordinateUtil": "DaZhen_NZBTG_CoordinateUtil",
"../Core/Base/DaZhen_NZBTG_BasePanel": "DaZhen_NZBTG_BasePanel",
"../DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig"
} ],
DaZhen_NZBTG_PanelFailTt: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "da3bbb3yhdMSZYvW1nHugpY", "DaZhen_NZBTG_PanelFailTt");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("./DaZhen_NZBTG_PanelFail"), r = cc._decorator, x = r.ccclass, s = (r.property, 
r.menu), l = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return y([ x, s("GUI/Panel/DaZhen_NZBTG_PanelFailTt") ], t);
}(a.default);
n.default = l;
cc._RF.pop();
}, {
"./DaZhen_NZBTG_PanelFail": "DaZhen_NZBTG_PanelFail"
} ],
DaZhen_NZBTG_PanelFail: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "83b34y+ym9FZapVjrxVe7A0", "DaZhen_NZBTG_PanelFail");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Datas/DaZhen_NZBTG_LevelNS"), r = e("../../Sdk/DaZhen_NZBTG_Sdk"), x = e("../../Utils/DaZhen_NZBTG_EventUtil"), s = e("../Core/Base/DaZhen_NZBTG_BasePanel"), l = e("../DaZhen_NZBTG_GUI"), c = e("../DaZhen_NZBTG_GUIConfig"), _ = e("../../Game/DaZhen_NZBTG_GameConfig"), h = cc._decorator, u = h.ccclass, p = (h.property, 
h.menu), f = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onShowPanel = function() {
e.prototype.onShowPanel.call(this);
x.DaZhen_NZBTG_EventUtil.Emit(c.GUIEvent.ShowAsset, [ c.AssetType.Energy ]);
};
t.prototype.onResumePanel = function() {
e.prototype.onResumePanel.call(this);
x.DaZhen_NZBTG_EventUtil.Emit(c.GUIEvent.ShowAsset, [ c.AssetType.Energy ]);
};
t.prototype.ocb_Replay = function() {
var e = a.default.ins.getIsEdit(), t = e ? a.default.ins.getLevel(!0) : a.default.ins.getLevel(!1), n = _.GameEnter.Fail;
l.default.ClearAll();
x.DaZhen_NZBTG_EventUtil.Emit(_.EventType.LevelCreate, t, e, !0, n);
};
t.prototype.ocb_Skip = function() {
r.default.ShowVideo(function() {
a.default.ins.pass(0);
a.default.ins.next();
var e = a.default.ins.getIsEdit(), t = a.default.ins.getLevel(!1), n = _.GameEnter.Fail;
l.default.ClearAll();
x.DaZhen_NZBTG_EventUtil.Emit(_.EventType.LevelCreate, t, e, !1, n);
});
};
return y([ u, p("GUI/Panel/DaZhen_NZBTG_PanelFail") ], t);
}(s.default);
n.default = f;
cc._RF.pop();
}, {
"../../Datas/DaZhen_NZBTG_LevelNS": "DaZhen_NZBTG_LevelNS",
"../../Game/DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig",
"../../Sdk/DaZhen_NZBTG_Sdk": "DaZhen_NZBTG_Sdk",
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../Core/Base/DaZhen_NZBTG_BasePanel": "DaZhen_NZBTG_BasePanel",
"../DaZhen_NZBTG_GUI": "DaZhen_NZBTG_GUI",
"../DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig"
} ],
DaZhen_NZBTG_PanelLevelSelect: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "17ae3YwiEtG45cXrbqPz5AG", "DaZhen_NZBTG_PanelLevelSelect");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Datas/DaZhen_NZBTG_AssetsNS"), r = e("../../Datas/DaZhen_NZBTG_LevelNS"), x = e("../../Game/DaZhen_NZBTG_GameConfig"), s = e("../../Utils/DaZhen_NZBTG_CoordinateUtil"), l = e("../../Utils/DaZhen_NZBTG_EventUtil"), c = e("../Core/Base/DaZhen_NZBTG_BasePanel"), _ = e("../DaZhen_NZBTG_GUI"), h = e("../DaZhen_NZBTG_GUIConfig"), u = e("../DaZhen_NZBTG_GUIConst"), p = e("../Units/DaZhen_NZBTG_LevelSelectUnit"), f = e("./DaZhen_NZBTG_PanelEnergy"), d = e("./DaZhen_NZBTG_PanelMenu"), Z = cc._decorator, g = Z.ccclass, v = Z.property, T = Z.menu, m = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.textLevel = null;
t.textPage = null;
t.btnLeft = null;
t.btnRight = null;
t.pageViewNode = null;
t.unitPagePre = null;
t.unitLevelPre = null;
return t;
}
t.prototype.start = function() {
this.initOncePanel();
};
t.prototype.listenOn = function() {
e.prototype.listenOn.call(this);
this.pageViewNode.on("page-turning", this._onPageTurning, this);
};
t.prototype.listenOff = function() {
e.prototype.listenOff.call(this);
this.pageViewNode.off("page-turning", this._onPageTurning, this);
};
t.prototype.onShowPanel = function() {
e.prototype.onShowPanel.call(this);
this.textLevel.string = "第" + r.default.ins.getLevel() + "关";
this._pageView.scrollToPage(this._curPageIndex, .2);
l.DaZhen_NZBTG_EventUtil.Emit(h.GUIEvent.ShowAsset, [ h.AssetType.Energy ]);
};
t.prototype.initOncePanel = function() {
e.prototype.initOncePanel.call(this);
for (var t = r.default.ins.levelMax, n = u.DaZhen_NZBTG_GUIConst.LevelPageSize, o = Math.ceil(t / n), i = this.pageViewNode.getComponent(cc.PageView), y = 0; y < o; y++) {
for (var a = cc.instantiate(this.unitPagePre), x = 0; x < n; x++) {
var s = cc.instantiate(this.unitLevelPre), l = s.getComponent(p.default);
s.parent = a;
l.init(x, y);
}
i.addPage(a);
}
this._pageView = i;
this._curPageIndex = this._pageView.getCurrentPageIndex();
this._onPageTurning(this._pageView);
};
t.prototype.ocb_Back = function() {
if (_.default.IsBottomPopup(this)) {
this.close();
_.default.ShowPopup(h.PanelPath.PanelMenu, d.default);
} else this.close();
};
t.prototype.ocb_Start = function(e) {
var t = s.DaZhen_NZBTG_CoordinateUtil.NodeToWorld(e.target);
a.default.ins.dealAni(h.AssetType.Energy, -u.DaZhen_NZBTG_GUIConst.EnergyConsume, t, function() {
var e = r.default.ins.getIsEdit(), t = r.default.ins.getLevel(!1), n = x.GameEnter.LevelSelect;
_.default.ClearAll();
l.DaZhen_NZBTG_EventUtil.Emit(x.EventType.LevelCreate, t, e, !1, n);
}, function() {
console.log("体力不足");
_.default.ShowPopup(h.PanelPath.PanelEnergy, f.default);
});
};
t.prototype.ocb_Left = function() {
var e = this._pageView.getCurrentPageIndex() - 1;
e >= 0 && this._pageView.scrollToPage(e, .3);
};
t.prototype.ocb_Right = function() {
var e = this._pageView.getCurrentPageIndex() + 1;
e < this._pageView.getPages().length && this._pageView.scrollToPage(e, .3);
};
t.prototype._onPageTurning = function() {
var e = this._pageView.getCurrentPageIndex(), t = this._pageView.getPages().length;
this._pageView.getPages().forEach(function(t, n) {
t.opacity = Math.abs(n - e) <= 1 ? 255 : 0;
});
this._curPageIndex = e;
this.textPage.string = e + 1 + "/" + t;
if (t < 2) {
this.btnLeft.active = !1;
this.btnRight.active = !1;
} else if (0 == e) {
this.btnLeft.active = !1;
this.btnRight.active = !0;
} else if (e == t - 1) {
this.btnLeft.active = !0;
this.btnRight.active = !1;
} else {
this.btnLeft.active = !0;
this.btnRight.active = !0;
}
};
y([ v(cc.Label) ], t.prototype, "textLevel", void 0);
y([ v(cc.Label) ], t.prototype, "textPage", void 0);
y([ v(cc.Node) ], t.prototype, "btnLeft", void 0);
y([ v(cc.Node) ], t.prototype, "btnRight", void 0);
y([ v(cc.Node) ], t.prototype, "pageViewNode", void 0);
y([ v(cc.Prefab) ], t.prototype, "unitPagePre", void 0);
y([ v(cc.Prefab) ], t.prototype, "unitLevelPre", void 0);
return y([ g, T("GUI/Panel/DaZhen_NZBTG_PanelLevelSelect") ], t);
}(c.default);
n.default = m;
cc._RF.pop();
}, {
"../../Datas/DaZhen_NZBTG_AssetsNS": "DaZhen_NZBTG_AssetsNS",
"../../Datas/DaZhen_NZBTG_LevelNS": "DaZhen_NZBTG_LevelNS",
"../../Game/DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig",
"../../Utils/DaZhen_NZBTG_CoordinateUtil": "DaZhen_NZBTG_CoordinateUtil",
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../Core/Base/DaZhen_NZBTG_BasePanel": "DaZhen_NZBTG_BasePanel",
"../DaZhen_NZBTG_GUI": "DaZhen_NZBTG_GUI",
"../DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig",
"../DaZhen_NZBTG_GUIConst": "DaZhen_NZBTG_GUIConst",
"../Units/DaZhen_NZBTG_LevelSelectUnit": "DaZhen_NZBTG_LevelSelectUnit",
"./DaZhen_NZBTG_PanelEnergy": "DaZhen_NZBTG_PanelEnergy",
"./DaZhen_NZBTG_PanelMenu": "DaZhen_NZBTG_PanelMenu"
} ],
DaZhen_NZBTG_PanelLuPingShare: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "debe9UPdK9Cdq0uxDjsBrZA", "DaZhen_NZBTG_PanelLuPingShare");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Datas/DaZhen_NZBTG_AssetsNS"), r = e("../../Game/DaZhen_NZBTG_Camera"), x = e("../../Game/DaZhen_NZBTG_GameData"), s = e("../../Utils/DaZhen_NZBTG_CoordinateUtil"), l = e("../Core/Base/DaZhen_NZBTG_BasePanel"), c = e("../DaZhen_NZBTG_GUI"), _ = e("../DaZhen_NZBTG_GUIConfig"), h = cc._decorator, u = h.ccclass, p = h.property, f = h.menu, d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.imgRender = null;
return t;
}
t.prototype.onClosePanel = function() {
e.prototype.onClosePanel.call(this);
this._closeCb && this._closeCb();
this._closeCb = null;
};
t.prototype.ocb_Share = function() {
var e = this;
lieyou_SdkManager.shareVd(function(t) {
console.log("shareVd:", t);
if (4 == t) console.log("分享页面关闭"); else if (3 == t) c.default.ShowToast("没有录屏"); else if (2 == t) c.default.ShowToast("录屏时间过短"); else if (1 == t) {
var n = s.DaZhen_NZBTG_CoordinateUtil.NodeToWorld(e.node), o = a.default.ins.getSharePrize(_.AssetType.Energy);
a.default.ins.dealAni(_.AssetType.Energy, o, n);
c.default.ShowToast("分享录屏成功");
} else 0 == t && c.default.ShowToast("分享失败");
});
};
t.prototype.initPanel = function(e) {
this._closeCb = e;
this.imgRender.spriteFrame = new cc.SpriteFrame(r.default.TextureGame);
this.imgRender.node.setPosition(x.DaZhen_NZBTG_GameData.CameraPos.neg());
};
y([ p(cc.Sprite) ], t.prototype, "imgRender", void 0);
return y([ u, f("GUI/Panel/DaZhen_NZBTG_PanelLuPingShare") ], t);
}(l.default);
n.default = d;
cc._RF.pop();
}, {
"../../Datas/DaZhen_NZBTG_AssetsNS": "DaZhen_NZBTG_AssetsNS",
"../../Game/DaZhen_NZBTG_Camera": "DaZhen_NZBTG_Camera",
"../../Game/DaZhen_NZBTG_GameData": "DaZhen_NZBTG_GameData",
"../../Utils/DaZhen_NZBTG_CoordinateUtil": "DaZhen_NZBTG_CoordinateUtil",
"../Core/Base/DaZhen_NZBTG_BasePanel": "DaZhen_NZBTG_BasePanel",
"../DaZhen_NZBTG_GUI": "DaZhen_NZBTG_GUI",
"../DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig"
} ],
DaZhen_NZBTG_PanelMenu: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "46518rB4yVHGpjLduJbTAPD", "DaZhen_NZBTG_PanelMenu");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Audio/DaZhen_NZBTG_AudioName"), r = e("../../Audio/DaZhen_NZBTG_AudioU"), x = e("../../Game/DaZhen_NZBTG_GameConfig"), s = e("../../Datas/DaZhen_NZBTG_AssetsNS"), l = e("../../Datas/DaZhen_NZBTG_Data"), c = e("../../Datas/DaZhen_NZBTG_LevelNS"), _ = e("../../Datas/DaZhen_NZBTG_SkinNS"), h = e("../../Utils/DaZhen_NZBTG_CoordinateUtil"), u = e("../../Utils/DaZhen_NZBTG_EventUtil"), p = e("../Core/Base/DaZhen_NZBTG_BasePanel"), f = e("../DaZhen_NZBTG_GUI"), d = e("../DaZhen_NZBTG_GUIConfig"), Z = e("../DaZhen_NZBTG_GUIConst"), g = e("./DaZhen_NZBTG_PanelEnergyLimitless"), v = e("./DaZhen_NZBTG_PanelLevelSelect"), T = e("./DaZhen_NZBTG_PanelSetting"), m = e("./DaZhen_NZBTG_PanelSkin"), G = e("./DaZhen_NZBTG_PanelEnergy"), D = e("../../SubGame/DaZhen_NZBTG_SubGameUtil"), N = e("../../Config/DaZhen_NZBTG_Constant"), B = cc._decorator, P = B.ccclass, S = B.property, b = B.menu, C = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.textLevel = null;
t.nodeFloor = null;
t.nodeRole = null;
t.btnEnergyLimitless = null;
return t;
}
t.prototype.start = function() {
this.initOncePanel();
};
t.prototype.initOncePanel = function() {
e.prototype.initOncePanel.call(this);
this.btnEnergyLimitless.active = N.DaZhen_NZBTG_Constant.IsOpenEnergy;
};
t.prototype.showPanel = function() {
e.prototype.showPanel.call(this);
this.nodeRole.x = -cc.winSize.width / 2 - 100;
u.DaZhen_NZBTG_EventUtil.Emit(d.GUIEvent.ShowHideNode, d.ShowHideUseCase.Menu, !1);
};
t.prototype.onShowPanel = function() {
var t = this;
e.prototype.onShowPanel.call(this);
this.textLevel.string = "第" + c.default.ins.getLevel() + "关";
u.DaZhen_NZBTG_EventUtil.Emit(d.GUIEvent.ShowAsset, [ d.AssetType.Energy ]);
_.default.ins.look(_.default.ins.getEquipId());
r.default.PlayMusic(a.DaZhen_NZBTG_AudioName.game_bgm);
lieyou_SdkManager.gameMain();
this._doFloorAni(function() {
t._doRoleAni(function() {
u.DaZhen_NZBTG_EventUtil.Emit(d.GUIEvent.ShowHideNode, d.ShowHideUseCase.Menu, !0);
});
});
};
t.prototype.onResumePanel = function() {
e.prototype.onResumePanel.call(this);
u.DaZhen_NZBTG_EventUtil.Emit(d.GUIEvent.ShowAsset, [ d.AssetType.Energy ]);
_.default.ins.look(_.default.ins.getEquipId());
};
t.prototype.ocb_EnergyLimitless = function() {
s.default.ins.getIsLimitless(d.AssetType.Energy) ? f.default.ShowToast("本日已获得无限体力") : f.default.ShowPopup(d.PanelPath.PanelEnergyLimitless, g.default);
};
t.prototype.ocb_Skin = function() {
f.default.ShowPopup(d.PanelPath.PanelSkin, m.default);
};
t.prototype.ocb_Setting = function() {
f.default.ShowPopup(d.PanelPath.PanelSetting, T.default);
};
t.prototype.ocb_Start = function(e) {
var t = h.DaZhen_NZBTG_CoordinateUtil.NodeToWorld(e.target);
s.default.ins.dealAni(d.AssetType.Energy, -Z.DaZhen_NZBTG_GUIConst.EnergyConsume, t, function() {
t = h.DaZhen_NZBTG_CoordinateUtil.WorldMid;
l.LastingData.IsOldUser = !0;
var e = c.default.ins.getLevelUnlockNew(), n = x.GameEnter.Menu;
f.default.ClearAll();
u.DaZhen_NZBTG_EventUtil.Emit(x.EventType.LevelCreate, e, !1, !1, !1, n);
}, function() {
console.log("体力不足");
f.default.ShowPopup(d.PanelPath.PanelEnergy, G.default);
});
};
t.prototype.ocb_LevelSelect = function() {
f.default.ShowPopup(d.PanelPath.PanelLevelSelect, v.default);
};
t.prototype.ocb_ExitSub = function() {
D.default.Exit();
};
t.prototype._doFloorAni = function(e) {
var t = this.nodeFloor;
t.y = -cc.winSize.height / 2;
cc.tween(t).to(.25, {
y: -220
}).call(e).start();
};
t.prototype._doRoleAni = function(e) {
u.DaZhen_NZBTG_EventUtil.Emit(x.EventType.RoleSpine, x.RoleAni.walk, !0);
var t = this.nodeRole;
t.x = -cc.winSize.width / 2 - 100;
cc.tween(t).to(1, {
x: 0
}).call(function() {
u.DaZhen_NZBTG_EventUtil.Emit(x.EventType.RoleSpine, x.RoleAni.daiji, !0);
e && e();
}).start();
};
y([ S(cc.Label) ], t.prototype, "textLevel", void 0);
y([ S(cc.Node) ], t.prototype, "nodeFloor", void 0);
y([ S(cc.Node) ], t.prototype, "nodeRole", void 0);
y([ S(cc.Node) ], t.prototype, "btnEnergyLimitless", void 0);
return y([ P, b("GUI/Panel/DaZhen_NZBTG_PanelMenu") ], t);
}(p.default);
n.default = C;
cc._RF.pop();
}, {
"../../Audio/DaZhen_NZBTG_AudioName": "DaZhen_NZBTG_AudioName",
"../../Audio/DaZhen_NZBTG_AudioU": "DaZhen_NZBTG_AudioU",
"../../Config/DaZhen_NZBTG_Constant": "DaZhen_NZBTG_Constant",
"../../Datas/DaZhen_NZBTG_AssetsNS": "DaZhen_NZBTG_AssetsNS",
"../../Datas/DaZhen_NZBTG_Data": "DaZhen_NZBTG_Data",
"../../Datas/DaZhen_NZBTG_LevelNS": "DaZhen_NZBTG_LevelNS",
"../../Datas/DaZhen_NZBTG_SkinNS": "DaZhen_NZBTG_SkinNS",
"../../Game/DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig",
"../../SubGame/DaZhen_NZBTG_SubGameUtil": "DaZhen_NZBTG_SubGameUtil",
"../../Utils/DaZhen_NZBTG_CoordinateUtil": "DaZhen_NZBTG_CoordinateUtil",
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../Core/Base/DaZhen_NZBTG_BasePanel": "DaZhen_NZBTG_BasePanel",
"../DaZhen_NZBTG_GUI": "DaZhen_NZBTG_GUI",
"../DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig",
"../DaZhen_NZBTG_GUIConst": "DaZhen_NZBTG_GUIConst",
"./DaZhen_NZBTG_PanelEnergy": "DaZhen_NZBTG_PanelEnergy",
"./DaZhen_NZBTG_PanelEnergyLimitless": "DaZhen_NZBTG_PanelEnergyLimitless",
"./DaZhen_NZBTG_PanelLevelSelect": "DaZhen_NZBTG_PanelLevelSelect",
"./DaZhen_NZBTG_PanelSetting": "DaZhen_NZBTG_PanelSetting",
"./DaZhen_NZBTG_PanelSkin": "DaZhen_NZBTG_PanelSkin"
} ],
DaZhen_NZBTG_PanelMessage: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d4428DkjdxJSr1rE4XgIwPg", "DaZhen_NZBTG_PanelMessage");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Utils/DaZhen_NZBTG_EventUtil"), r = e("../Core/Base/DaZhen_NZBTG_BasePanel"), x = e("../DaZhen_NZBTG_GUIConfig"), s = cc._decorator, l = s.ccclass, c = s.property, _ = s.menu, h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.text = null;
return t;
}
t.prototype.onShowPanel = function() {
e.prototype.onShowPanel.call(this);
a.DaZhen_NZBTG_EventUtil.Emit(x.GUIEvent.ShowAsset, []);
};
t.prototype.ocb_Confirm = function() {
this.close();
};
t.prototype.initPanel = function(e) {
this.text.string = e;
};
y([ c(cc.Label) ], t.prototype, "text", void 0);
return y([ l, _("GUI/Panel/DaZhen_NZBTG_PanelMessage") ], t);
}(r.default);
n.default = h;
cc._RF.pop();
}, {
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../Core/Base/DaZhen_NZBTG_BasePanel": "DaZhen_NZBTG_BasePanel",
"../DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig"
} ],
DaZhen_NZBTG_PanelSetting: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e7708tKnIRCY7bIA19Nn6R+", "DaZhen_NZBTG_PanelSetting");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Datas/DaZhen_NZBTG_SettingNS"), r = e("../../Utils/DaZhen_NZBTG_EventUtil"), x = e("../Core/Base/DaZhen_NZBTG_BasePanel"), s = e("../Extensions/DaZhen_NZBTG_WYOrN"), l = e("../DaZhen_NZBTG_GUIConfig"), c = cc._decorator, _ = c.ccclass, h = c.property, u = c.menu, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.sMusic = null;
t.sEffect = null;
t.sVibrate = null;
return t;
}
t.prototype.start = function() {
this.initOncePanel();
};
t.prototype.show = function() {
e.prototype.show.call(this);
r.DaZhen_NZBTG_EventUtil.Emit(l.GUIEvent.ShowAsset, []);
};
t.prototype.initOncePanel = function() {
e.prototype.initOncePanel.call(this);
this.sMusic.setStatus(a.default.ins.getIsOpenMusic());
this.sEffect.setStatus(a.default.ins.getIsOpenEffect());
this.sVibrate.setStatus(a.default.ins.getIsOpenVibrate());
};
t.prototype.ocb_Music = function() {
a.default.ins.setMusicOnOff(!a.default.ins.getIsOpenMusic());
this.sMusic.setStatus(a.default.ins.getIsOpenMusic());
};
t.prototype.ocb_Effect = function() {
a.default.ins.setEffectOnOff(!a.default.ins.getIsOpenEffect());
this.sEffect.setStatus(a.default.ins.getIsOpenEffect());
};
t.prototype.ocb_Vibrate = function() {
a.default.ins.setVibrateOnOff(!a.default.ins.getIsOpenVibrate());
this.sVibrate.setStatus(a.default.ins.getIsOpenVibrate());
};
y([ h(s.default) ], t.prototype, "sMusic", void 0);
y([ h(s.default) ], t.prototype, "sEffect", void 0);
y([ h(s.default) ], t.prototype, "sVibrate", void 0);
return y([ _, u("GUI/Panel/DaZhen_NZBTG_PanelSetting") ], t);
}(x.default);
n.default = p;
cc._RF.pop();
}, {
"../../Datas/DaZhen_NZBTG_SettingNS": "DaZhen_NZBTG_SettingNS",
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../Core/Base/DaZhen_NZBTG_BasePanel": "DaZhen_NZBTG_BasePanel",
"../DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig",
"../Extensions/DaZhen_NZBTG_WYOrN": "DaZhen_NZBTG_WYOrN"
} ],
DaZhen_NZBTG_PanelSkinTry: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0bee43nUPxNPIBtYFVoscj9", "DaZhen_NZBTG_PanelSkinTry");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Datas/DaZhen_NZBTG_SkinNS"), r = e("../../Main/DaZhen_NZBTG_Res"), x = e("../../Sdk/DaZhen_NZBTG_Sdk"), s = e("../Core/Base/DaZhen_NZBTG_BasePanel"), l = e("../DaZhen_NZBTG_GUI"), c = cc._decorator, _ = c.ccclass, h = c.property, u = c.menu, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.icon = null;
t.shadow = null;
return t;
}
t.prototype.ocb_Try = function() {
var e = this;
x.default.ShowVideo(function(t) {
if (t) {
a.default.ins.try(e._skinId, !0);
l.default.ShowToast("试用皮肤");
}
});
this.close();
};
t.prototype.initPanel = function(e) {
this._skinId = e.skinId;
this._skinInfo = e;
this.icon.spriteFrame = r.default.GetCacheSpriteFrame(a.default.ins.getIconRouter(e.skinId));
};
y([ h(cc.Sprite) ], t.prototype, "icon", void 0);
y([ h(cc.Node) ], t.prototype, "shadow", void 0);
return y([ _, u("GUI/Panel/DaZhen_NZBTG_PanelSkinTry") ], t);
}(s.default);
n.default = p;
cc._RF.pop();
}, {
"../../Datas/DaZhen_NZBTG_SkinNS": "DaZhen_NZBTG_SkinNS",
"../../Main/DaZhen_NZBTG_Res": "DaZhen_NZBTG_Res",
"../../Sdk/DaZhen_NZBTG_Sdk": "DaZhen_NZBTG_Sdk",
"../Core/Base/DaZhen_NZBTG_BasePanel": "DaZhen_NZBTG_BasePanel",
"../DaZhen_NZBTG_GUI": "DaZhen_NZBTG_GUI"
} ],
DaZhen_NZBTG_PanelSkinUnlock: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5721dmRtsFBMpeA8rAIV1Yh", "DaZhen_NZBTG_PanelSkinUnlock");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Datas/DaZhen_NZBTG_AssetsNS"), r = e("../../Datas/DaZhen_NZBTG_SkinNS"), x = e("../../Main/DaZhen_NZBTG_Res"), s = e("../../Utils/DaZhen_NZBTG_CoordinateUtil"), l = e("../Core/Base/DaZhen_NZBTG_BasePanel"), c = e("../DaZhen_NZBTG_GUIConfig"), _ = cc._decorator, h = _.ccclass, u = _.property, p = _.menu, f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.btnUnlock = null;
t.icon = null;
t.shadow = null;
t.textCost = null;
return t;
}
t.prototype.ocb_Unlock = function() {
var e = this, t = s.DaZhen_NZBTG_CoordinateUtil.NodeToWorld(this.btnUnlock);
a.default.ins.dealAni(c.AssetType.Coin, -this._skinInfo.cost, t, function() {
r.default.ins.unlock(e._skinId);
r.default.ins.equip(e._skinId);
e.close();
}, function() {
console.log("金币不足");
});
};
t.prototype.initPanel = function(e) {
this._skinId = e.skinId;
this._skinInfo = e;
this.textCost.string = "" + e.cost;
this.icon.spriteFrame = x.default.GetCacheSpriteFrame(r.default.ins.getIconRouter(e.skinId));
};
y([ u(cc.Node) ], t.prototype, "btnUnlock", void 0);
y([ u(cc.Sprite) ], t.prototype, "icon", void 0);
y([ u(cc.Node) ], t.prototype, "shadow", void 0);
y([ u(cc.Label) ], t.prototype, "textCost", void 0);
return y([ h, p("GUI/Panel/DaZhen_NZBTG_PanelSkinUnlock") ], t);
}(l.default);
n.default = f;
cc._RF.pop();
}, {
"../../Datas/DaZhen_NZBTG_AssetsNS": "DaZhen_NZBTG_AssetsNS",
"../../Datas/DaZhen_NZBTG_SkinNS": "DaZhen_NZBTG_SkinNS",
"../../Main/DaZhen_NZBTG_Res": "DaZhen_NZBTG_Res",
"../../Utils/DaZhen_NZBTG_CoordinateUtil": "DaZhen_NZBTG_CoordinateUtil",
"../Core/Base/DaZhen_NZBTG_BasePanel": "DaZhen_NZBTG_BasePanel",
"../DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig"
} ],
DaZhen_NZBTG_PanelSkin: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ae48cbko89PJ7SMLpCSbNQ+", "DaZhen_NZBTG_PanelSkin");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Datas/DaZhen_NZBTG_SkinNS"), r = e("../../Sdk/Extensions/DaZhen_NZBTG_BannerNative_mini"), x = e("../../Utils/DaZhen_NZBTG_EventUtil"), s = e("../Core/Base/DaZhen_NZBTG_BasePanel"), l = e("../DaZhen_NZBTG_GUIConfig"), c = e("../Units/DaZhen_NZBTG_SkinUnit"), _ = cc._decorator, h = _.ccclass, u = _.property, p = _.menu, f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.sv = null;
t.content = null;
t.unitPre = null;
t.bannerPre = null;
return t;
}
t.prototype.start = function() {
this.initOncePanel();
};
t.prototype.onShowPanel = function() {
e.prototype.onShowPanel.call(this);
this.initPanel();
x.DaZhen_NZBTG_EventUtil.Emit(l.GUIEvent.ShowAsset, [ l.AssetType.Coin ]);
};
t.prototype.initOncePanel = function() {
e.prototype.initOncePanel.call(this);
for (var t = a.default.ins.skinMax, n = [], o = 0; o < t; o++) {
var i = cc.instantiate(this.unitPre);
i.parent = this.content;
n.push(i);
}
var y = cc.instantiate(this.bannerPre);
y.parent = this.content;
this._nodeBanner = y;
this._unitList = n;
};
t.prototype.initPanel = function() {
var e = a.default.ins.getOneInfoList(!0);
this._unitList.forEach(function(t, n) {
var o = t.getComponent(c.default);
o && (n < e.length ? o.init(e[n]) : o.init(null));
});
this._nodeBanner.setSiblingIndex(5);
this._nodeBanner.getComponent(r.default).setBanner(230);
this.sv.stopAutoScroll();
this.sv.scrollToLeft();
};
y([ u(cc.ScrollView) ], t.prototype, "sv", void 0);
y([ u(cc.Node) ], t.prototype, "content", void 0);
y([ u(cc.Prefab) ], t.prototype, "unitPre", void 0);
y([ u(cc.Prefab) ], t.prototype, "bannerPre", void 0);
return y([ h, p("GUI/Panel/DaZhen_NZBTG_PanelSkin") ], t);
}(s.default);
n.default = f;
cc._RF.pop();
}, {
"../../Datas/DaZhen_NZBTG_SkinNS": "DaZhen_NZBTG_SkinNS",
"../../Sdk/Extensions/DaZhen_NZBTG_BannerNative_mini": "DaZhen_NZBTG_BannerNative_mini",
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../Core/Base/DaZhen_NZBTG_BasePanel": "DaZhen_NZBTG_BasePanel",
"../DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig",
"../Units/DaZhen_NZBTG_SkinUnit": "DaZhen_NZBTG_SkinUnit"
} ],
DaZhen_NZBTG_PanelWinTt: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "478d9phiCBCGIqESTcRqbpT", "DaZhen_NZBTG_PanelWinTt");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("./DaZhen_NZBTG_PanelWin"), r = cc._decorator, x = r.ccclass, s = (r.property, 
r.menu), l = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.initPanel = function() {};
return y([ x, s("GUI/Panel/DaZhen_NZBTG_PanelWinTt") ], t);
}(a.default);
n.default = l;
cc._RF.pop();
}, {
"./DaZhen_NZBTG_PanelWin": "DaZhen_NZBTG_PanelWin"
} ],
DaZhen_NZBTG_PanelWin: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e82c5m/5R1LXZoZlF+fm+II", "DaZhen_NZBTG_PanelWin");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Datas/DaZhen_NZBTG_AssetsNS"), r = e("../../Datas/DaZhen_NZBTG_LevelNS"), x = e("../../Utils/DaZhen_NZBTG_CoordinateUtil"), s = e("../../Utils/DaZhen_NZBTG_EventUtil"), l = e("../Core/Base/DaZhen_NZBTG_BasePanel"), c = e("../DaZhen_NZBTG_GUI"), _ = e("../DaZhen_NZBTG_GUIConfig"), h = e("../DaZhen_NZBTG_GUIConst"), u = e("../../Game/DaZhen_NZBTG_GameConfig"), p = e("../../Game/DaZhen_NZBTG_GameData"), f = e("../../Game/DaZhen_NZBTG_Camera"), d = e("./DaZhen_NZBTG_PanelEnergy"), Z = e("./DaZhen_NZBTG_PanelLevelSelect"), g = e("./DaZhen_NZBTG_PanelMenu"), v = cc._decorator, T = v.ccclass, m = v.property, G = v.menu, D = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.imgRender = null;
return t;
}
t.prototype.onShowPanel = function() {
e.prototype.onShowPanel.call(this);
s.DaZhen_NZBTG_EventUtil.Emit(_.GUIEvent.ShowAsset, [ _.AssetType.Energy ]);
r.default.ins.pass(3);
r.default.ins.next();
};
t.prototype.onResumePanel = function() {
e.prototype.onResumePanel.call(this);
s.DaZhen_NZBTG_EventUtil.Emit(_.GUIEvent.ShowAsset, [ _.AssetType.Energy ]);
};
t.prototype.ocb_Replay = function() {
this._createLevel();
};
t.prototype.ocb_Next = function(e) {
var t = r.default.ins.getLevel(!1);
if (r.default.ins.getIsBeyond()) c.default.ShowToast("本关为最后一关!"); else {
var n = x.DaZhen_NZBTG_CoordinateUtil.NodeToWorld(e.target);
a.default.ins.dealAni(_.AssetType.Energy, -h.DaZhen_NZBTG_GUIConst.EnergyConsume, n, function() {
var e = r.default.ins.getIsEdit(), n = u.GameEnter.Win;
c.default.ClearAll();
s.DaZhen_NZBTG_EventUtil.Emit(u.EventType.LevelCreate, t, e, !1, n);
}, function() {
console.log("体力不足");
c.default.ShowPopup(_.PanelPath.PanelEnergy, d.default, function(e) {
e.initPanel(function(e) {
if (e) {
c.default.ClearAll();
p.DaZhen_NZBTG_GameData.Enter == u.GameEnter.LevelSelect ? c.default.ShowPopup(_.PanelPath.PanelLevelSelect, Z.default) : c.default.ShowPopup(_.PanelPath.PanelMenu, g.default);
}
});
});
});
}
};
t.prototype._createLevel = function() {
var e = r.default.ins.getIsEdit(), t = p.DaZhen_NZBTG_GameData.Level, n = u.GameEnter.Win;
c.default.ClearAll();
s.DaZhen_NZBTG_EventUtil.Emit(u.EventType.LevelCreate, t, e, !0, n);
};
t.prototype.initPanel = function() {
this.imgRender.spriteFrame = new cc.SpriteFrame(f.default.TextureGame);
this.imgRender.node.setPosition(p.DaZhen_NZBTG_GameData.CameraPos.neg());
};
y([ m(cc.Sprite) ], t.prototype, "imgRender", void 0);
return y([ T, G("GUI/Panel/DaZhen_NZBTG_PanelWin") ], t);
}(l.default);
n.default = D;
cc._RF.pop();
}, {
"../../Datas/DaZhen_NZBTG_AssetsNS": "DaZhen_NZBTG_AssetsNS",
"../../Datas/DaZhen_NZBTG_LevelNS": "DaZhen_NZBTG_LevelNS",
"../../Game/DaZhen_NZBTG_Camera": "DaZhen_NZBTG_Camera",
"../../Game/DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig",
"../../Game/DaZhen_NZBTG_GameData": "DaZhen_NZBTG_GameData",
"../../Utils/DaZhen_NZBTG_CoordinateUtil": "DaZhen_NZBTG_CoordinateUtil",
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../Core/Base/DaZhen_NZBTG_BasePanel": "DaZhen_NZBTG_BasePanel",
"../DaZhen_NZBTG_GUI": "DaZhen_NZBTG_GUI",
"../DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig",
"../DaZhen_NZBTG_GUIConst": "DaZhen_NZBTG_GUIConst",
"./DaZhen_NZBTG_PanelEnergy": "DaZhen_NZBTG_PanelEnergy",
"./DaZhen_NZBTG_PanelLevelSelect": "DaZhen_NZBTG_PanelLevelSelect",
"./DaZhen_NZBTG_PanelMenu": "DaZhen_NZBTG_PanelMenu"
} ],
DaZhen_NZBTG_PickKey: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c1b93SyiTdGWLgCqFgJeLe1", "DaZhen_NZBTG_PickKey");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Utils/DaZhen_NZBTG_EventUtil"), r = e("../DaZhen_NZBTG_GameConfig"), x = cc._decorator, s = x.ccclass, l = x.property, c = x.menu, _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.target = null;
return t;
}
t.prototype.onLoad = function() {
this._init();
a.DaZhen_NZBTG_EventUtil.On(r.EventType.PickKey, this._onPickKey, this);
};
t.prototype.onDestroy = function() {
a.DaZhen_NZBTG_EventUtil.Off(r.EventType.PickKey, this._onPickKey, this);
};
t.prototype._onPickKey = function(e) {
if (e == this.node && !this._isWork) {
this._isWork = !0;
this.node.destroy();
a.DaZhen_NZBTG_EventUtil.Emit(r.EventType.DoorLock, this.target);
}
};
t.prototype._init = function() {
this._isWork = !1;
if (!this.target) {
console.log("PickKey--不存在对应的门");
this.node.destroy();
}
};
y([ l({
type: cc.Node,
tooltip: "对应的门"
}) ], t.prototype, "target", void 0);
return y([ s, c("Game/Item/DaZhen_NZBTG_PickKey") ], t);
}(cc.Component);
n.default = _;
cc._RF.pop();
}, {
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig"
} ],
DaZhen_NZBTG_PlaneAni: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c320e0LKDZFc7sejn6AUBl0", "DaZhen_NZBTG_PlaneAni");
var o, i, y, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
(function(e) {
e[e.None = 0] = "None";
e[e.Scale = 1] = "Scale";
e[e.Fade = 2] = "Fade";
e[e.LeftIn = 3] = "LeftIn";
e[e.RightIn = 4] = "RightIn";
e[e.TopIn = 5] = "TopIn";
e[e.BottomIn = 6] = "BottomIn";
e[e.Blink = 7] = "Blink";
})(i || (i = {}));
(function(e) {
e[e.Disable = 0] = "Disable";
e[e.Destroy = 1] = "Destroy";
})(y || (y = {}));
var x = cc._decorator, s = x.ccclass, l = x.property, c = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._aniType = i.Scale;
t._closeModel = y.Destroy;
t._time = .3;
t._mask = null;
t._root = null;
return t;
}
t.prototype.show = function(e) {
this._onShow = e;
this._mask = cc.find("Mask", this.node);
this._root = cc.find("Root", this.node);
this._mask.active = !0;
this._root.active = !0;
this.node.active = !0;
this._doAni(!0);
};
t.prototype.close = function(e) {
var t = this;
this._mask.active = !1;
this._onClose = function() {
e && e();
switch (t._closeModel) {
case y.Disable:
t.node.active = !1;
break;

case y.Destroy:
t.node.destroy();
}
};
this._doAni(!1);
};
t.prototype._doAni = function(e) {
switch (this._aniType) {
case i.None:
this._doNone(e);
break;

case i.Scale:
this._doScale(e);
break;

case i.Fade:
this._doFade(e);
break;

case i.LeftIn:
this._doLeftIn(e);
break;

case i.RightIn:
this._doRightIn(e);
break;

case i.TopIn:
this._doTopIn(e);
break;

case i.BottomIn:
this._doBottomIn(e);
break;

case i.Blink:
this._doBlink(e);
}
};
t.prototype._doNone = function(e) {
var t = this._root, n = e ? this._onShow : this._onClose;
t.active = e;
cc.tween(t).delay(this._time).call(n).start();
};
t.prototype._doScale = function(e) {
var t = this._root, n = e ? 0 : 1, o = e ? 1 : 0, i = e ? this._onShow : this._onClose, y = e ? cc.easing.sineOut : cc.easing.sineIn;
cc.tween(t).set({
scale: n
}).to(this._time, {
scale: o
}, {
easing: y
}).call(i).start();
};
t.prototype._doFade = function(e) {
var t = this._root, n = e ? 0 : 255, o = e ? 255 : 0, i = e ? this._onShow : this._onClose;
cc.tween(t).set({
opacity: n
}).to(this._time, {
opacity: o
}).call(i).start();
};
t.prototype._doLeftIn = function(e) {
var t = this._root, n = e ? -cc.winSize.width : 0, o = e ? 0 : -cc.winSize.width, i = e ? this._onShow : this._onClose;
cc.tween(t).set({
x: n
}).to(this._time, {
x: o
}).call(i).start();
};
t.prototype._doRightIn = function(e) {
var t = this._root, n = e ? cc.winSize.width : 0, o = e ? 0 : cc.winSize.width, i = e ? this._onShow : this._onClose;
cc.tween(t).set({
x: n
}).to(this._time, {
x: o
}).call(i).start();
};
t.prototype._doTopIn = function(e) {
var t = this._root, n = t.y, o = e ? cc.winSize.height / 2 : 0, i = e ? 0 : cc.winSize.height / 2, y = e ? this._onShow : this._onClose, a = Math.abs((i - n) / (i - o)) * this._time;
cc.Tween.stopAllByTarget(t);
cc.tween(t).to(a, {
y: i
}).call(y).start();
};
t.prototype._doBottomIn = function(e) {
var t = this._root, n = t.y, o = e ? -cc.winSize.height / 2 : 0, i = e ? 0 : -cc.winSize.height / 2, y = e ? this._onShow : this._onClose, a = Math.abs((i - n) / (i - o)) * this._time;
cc.Tween.stopAllByTarget(t);
cc.tween(t).to(a, {
y: i
}).call(y).start();
};
t.prototype._doBlink = function(e) {
var t = this.node.getChildByName("Blink"), n = e ? this._onShow : this._onClose, o = this._time;
cc.Tween.stopAllByTarget(t);
e ? cc.tween(t).set({
opacity: 0
}).to(o, {
opacity: 255
}).to(o, {
opacity: 0
}).call(n).start() : cc.tween(t).set({
opacity: 0
}).delay(o).call(n).start();
};
r([ l({
type: cc.Enum(i),
visible: !0
}) ], t.prototype, "_aniType", void 0);
r([ l({
type: cc.Enum(y),
visible: !0
}) ], t.prototype, "_closeModel", void 0);
r([ l({
visible: !0,
min: 0
}) ], t.prototype, "_time", void 0);
return r([ s ], t);
}(cc.Component);
n.default = c;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_PolyBoolUtil: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b8136WtZyJFM7fxWM7fXoD+", "DaZhen_NZBTG_PolyBoolUtil");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_PolyBoolUtil = void 0;
var o = function() {
function e() {}
e.pathsToPolygon = function(e) {
var t = [];
e.forEach(function(e) {
var n = [];
e.forEach(function(e) {
n.push([ e.x, e.y ]);
});
t.push(n);
});
return {
regions: t,
inverted: !1
};
};
e.polygonToPaths = function(e) {
var t = [];
e.regions.forEach(function(e) {
var n = [];
e.forEach(function(e) {
n.push(cc.v2(e[0], e[1]));
});
t.push(n);
});
return t;
};
e.getCenter = function(e) {
var t = cc.v2(), n = 0, o = 0;
e.forEach(function(e) {
n += e.x;
o += e.y;
});
if (0 != e.length) {
t.x = n / e.length;
t.y = o / e.length;
}
return t;
};
e.getTop = function(e) {
var t = -1e3;
e.forEach(function(e) {
e.y > t && (t = e.y);
});
return t;
};
return e;
}();
n.DaZhen_NZBTG_PolyBoolUtil = o;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_PrefabConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "99303614qJLa5fRXt2KtP2P", "DaZhen_NZBTG_PrefabConfig");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_PrefabConfig = void 0;
n.DaZhen_NZBTG_PrefabConfig = [ "Game/Eff/Hand", "Game/Game", "Game/Item/ControllerUD", "Game/Item/ControlTarget", "Game/Item/DoorLock", "Game/Item/FakeStatic", "Game/Item/FinishTarget", "Game/Item/Floor", "Game/Item/FloorCut", "Game/Item/Gear", "Game/Item/Help", "Game/Item/Level", "Game/Item/Move", "Game/Item/PickKey", "Game/Item/Role", "Game/Item/RoleWin", "Game/Item/Swing", "Game/Item/ToolBounce", "Game/Item/TouchMove", "Game/Item/TouchMoveLine", "Game/Item/TriggerMove", "Game/Spine/SpineBoy", "Game/Spine/SpineGirl", "GUI/Assets/CoinUnit", "GUI/Assets/EnergyUnit", "GUI/Assets/HeartUnit", "GUI/Eff/EffWin", "GUI/Panels/PanelEnergy", "GUI/Panels/PanelEnergyLimitless", "GUI/Panels/PanelFail", "GUI/Panels/PanelFailTt", "GUI/Panels/PanelLevelSelect", "GUI/Panels/PanelLuPingShare", "GUI/Panels/PanelMenu", "GUI/Panels/PanelMessage", "GUI/Panels/PanelSetting", "GUI/Panels/PanelSkin", "GUI/Panels/PanelSkinTry", "GUI/Panels/PanelSkinUnlock", "GUI/Panels/PanelWin", "GUI/Panels/PanelWinTt", "GUI/Spines/SpineRole", "GUI/UIBase/Assets", "GUI/UIBase/BlockInput", "GUI/UIBase/GUI", "GUI/UIBase/Toast", "GUI/UIBase/Transition", "GUI/UIBase/Waiting", "GUI/Units/BannerNative_miniUnit", "GUI/Units/LevelPageUnit", "GUI/Units/LevelSelectUnit", "GUI/Units/SkinUnit" ];
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_PromiseUtil: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8b198ijKXREJbMgGWcDWpV0", "DaZhen_NZBTG_PromiseUtil");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_PromiseUtil = void 0;
var o = function() {
function e() {}
e.New = function(e) {
return new Promise(e);
};
return e;
}();
n.DaZhen_NZBTG_PromiseUtil = o;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_Queue: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "faf85am/EJHxbNQbKBAQavC", "DaZhen_NZBTG_Queue");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_Queue = void 0;
var o = function() {
function e() {
this._list = [];
}
Object.defineProperty(e.prototype, "size", {
get: function() {
return this._list.length;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isEmpty", {
get: function() {
return 0 == this.size;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "current", {
get: function() {
return this._list[0];
},
enumerable: !1,
configurable: !0
});
e.prototype.add = function(e) {
this._list.push(e);
};
e.prototype.delete = function() {
return this._list.shift();
};
e.prototype.emptyQueue = function() {
this._list = [];
};
return e;
}();
n.DaZhen_NZBTG_Queue = o;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_Res: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "992e1wNk7dKSKjkf7uYx6qE", "DaZhen_NZBTG_Res");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = e("../Config/DaZhen_NZBTG_PrefabConfig"), i = (e("./DaZhen_NZBTG_Edit"), 
e("../Utils/DaZhen_NZBTG_LoadUtil"), e("../Utils/DaZhen_NZBTG_MathUtil")), y = e("../Utils/DaZhen_NZBTG_CoordinateUtil"), a = e("../Config/DaZhen_NZBTG_TextureConfig"), r = e("../Utils/DaZhen_NZBTG_EventUtil"), x = e("../GUI/DaZhen_NZBTG_GUIConfig"), s = e("../Config/DaZhen_NZBTG_AudioConfig"), l = e("../Config/DaZhen_NZBTG_Config"), c = e("../SubGame/DaZhen_NZBTG_SubGameUtil"), _ = function() {
function e() {}
e._LoadAllPrefab = function() {
o.DaZhen_NZBTG_PrefabConfig.forEach(function(t) {
e._Load(l.BundleName.Prefab, t, cc.Prefab);
});
};
e._LoadAllTexture = function() {
a.DaZhen_NZBTG_TextureConfig.forEach(function(t) {
e._Load(l.BundleName.Texture, t, cc.Texture2D);
});
};
e._LoadAllSpriteFrame = function() {
a.DaZhen_NZBTG_TextureConfig.forEach(function(t) {
e._Load(l.BundleName.Texture, t, cc.SpriteFrame);
});
};
e._LoadAllAudio = function() {
s.DaZhen_NZBTG_AudioConfig.forEach(function(t) {
e._Load(l.BundleName.Audio, t, cc.AudioClip);
});
};
e._Load = function(t, n, o) {
var i = e._GetCacheKey(t, n, o);
e._LoadTotalNum++;
e._KeyLoad.push(i);
e.Load(t, n, o, function(t) {
e._KeyLoadDone.push(i);
e._CacheMap.set(i, t);
e._LoadDoneNum++;
e._CheckLoadDone();
});
};
e._CheckLoadDone = function() {
var t = i.DaZhen_NZBTG_MathUtil.Percent(e._LoadDoneNum / e._LoadTotalNum);
r.DaZhen_NZBTG_EventUtil.Emit(x.GUIEvent.Loading, t);
if (e._LoadDoneNum == e._LoadTotalNum) {
e._Callback && e._Callback();
console.log("加载完毕");
}
};
e._GetCacheKey = function(e, t, n) {
var o = e + "/" + t;
n == cc.Texture2D ? o += "Texture2D" : n == cc.SpriteFrame && (o += "SpriteFrame");
return o;
};
e._GetCache = function(t, n, o) {
var i, y = e._GetCacheKey(t, n, o);
e._CacheMap.has(y) && (i = e._CacheMap.get(y));
return i;
};
e.Init = function(t) {
e._LoadTotalNum = 0;
e._LoadDoneNum = 0;
e._CacheMap = new Map();
e._Callback = t;
e._LoadAllPrefab();
e._LoadAllSpriteFrame();
e._LoadAllAudio();
};
e.GetNode = function(t, n, o) {
var i = e.GetCachePrefab(t), a = cc.instantiate(i);
if (o) {
n = y.DaZhen_NZBTG_CoordinateUtil.WorldToLocal(n, o);
a.setPosition(n);
a.parent = o;
}
return a;
};
e.GetCachePrefab = function(t) {
return e._GetCache(l.BundleName.Prefab, t, cc.Prefab);
};
e.GetCacheTexture = function(t) {
return e._GetCache(l.BundleName.Texture, t, cc.Texture2D);
};
e.GetCacheSpriteFrame = function(t) {
return e._GetCache(l.BundleName.Texture, t, cc.SpriteFrame);
};
e.GetCacheAudio = function(t) {
return e._GetCache(l.BundleName.Audio, t, cc.AudioClip);
};
e.Load = function(t, n, o, i) {
var y = e._GetCache(t, n, o);
if (y && y.isValid) y && i(y); else {
t == l.BundleName.Audio || t == l.BundleName.Texture || t != l.BundleName.Prefab && l.BundleName.LevelEdit;
c.default.Load(t, n, o, i);
}
};
e.LoadPromise = function(t, n, o) {
return new Promise(function(i) {
e.Load(t, n, o, function(e) {
i(e);
});
});
};
e.LoadPrefab = function(t, n) {
e.Load(l.BundleName.Prefab, t, cc.Prefab, n);
};
e.LoadTexture = function(t, n) {
e.Load(l.BundleName.Texture, t, cc.Texture2D, n);
};
e.LoadSpriteFrame = function(t, n) {
e.Load(l.BundleName.Texture, t, cc.SpriteFrame, n);
};
e.LoadPrefabPromise = function(t) {
return e.LoadPromise(l.BundleName.Prefab, t, cc.Prefab);
};
e.LoadTexturePromise = function(t) {
return e.LoadPromise(l.BundleName.Texture, t, cc.Texture2D);
};
e.LoadSpriteFramePromise = function(t) {
return e.LoadPromise(l.BundleName.Texture, t, cc.SpriteFrame);
};
e._CacheMap = new Map();
e._KeyLoad = [];
e._KeyLoadDone = [];
return e;
}();
n.default = _;
cc._RF.pop();
}, {
"../Config/DaZhen_NZBTG_AudioConfig": "DaZhen_NZBTG_AudioConfig",
"../Config/DaZhen_NZBTG_Config": "DaZhen_NZBTG_Config",
"../Config/DaZhen_NZBTG_PrefabConfig": "DaZhen_NZBTG_PrefabConfig",
"../Config/DaZhen_NZBTG_TextureConfig": "DaZhen_NZBTG_TextureConfig",
"../GUI/DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig",
"../SubGame/DaZhen_NZBTG_SubGameUtil": "DaZhen_NZBTG_SubGameUtil",
"../Utils/DaZhen_NZBTG_CoordinateUtil": "DaZhen_NZBTG_CoordinateUtil",
"../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../Utils/DaZhen_NZBTG_LoadUtil": "DaZhen_NZBTG_LoadUtil",
"../Utils/DaZhen_NZBTG_MathUtil": "DaZhen_NZBTG_MathUtil",
"./DaZhen_NZBTG_Edit": "DaZhen_NZBTG_Edit"
} ],
DaZhen_NZBTG_RoleSM: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "994c2Q2NMRMnZLwAK0ColbU", "DaZhen_NZBTG_RoleSM");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("./DaZhen_NZBTG_GameConfig"), r = e("../Utils/DaZhen_NZBTG_EventUtil"), x = cc._decorator, s = x.ccclass, l = (x.property, 
function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype._doAni = function(e, t) {
void 0 === t && (t = !1);
if (e) {
this._aniName = e;
r.DaZhen_NZBTG_EventUtil.Emit(a.EventType.RoleSpine, e, t);
}
};
t.prototype.getAniName = function() {
return this._aniName;
};
t.prototype.getState = function() {
return this._state;
};
t.prototype.getIsState = function(e) {
return e == this._state;
};
t.prototype.setState = function(e, t) {
if (!this.getIsState(e)) {
this._state = e;
var n, o = !1;
switch (e) {
default:
case a.RoleSMState.Idle:
n = a.RoleAni.daiji;
o = !0;
break;

case a.RoleSMState.Move:
n = a.RoleAni.walk;
o = !0;
break;

case a.RoleSMState.Finish:
o = !0;
}
t && (n = t);
this._doAni(n, o);
}
};
return y([ s ], t);
}(cc.Component));
n.default = l;
cc._RF.pop();
}, {
"../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"./DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig"
} ],
DaZhen_NZBTG_RoleSpine: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "4f703VvaZxKbbMVQrSTatTF", "DaZhen_NZBTG_RoleSpine");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../Utils/DaZhen_NZBTG_EventUtil"), r = e("./DaZhen_NZBTG_GameConfig"), x = e("../Utils/DaZhen_NZBTG_SpineUtil"), s = e("../GUI/DaZhen_NZBTG_GUIConfig"), l = e("../Datas/DaZhen_NZBTG_SkinNS"), c = cc._decorator, _ = c.ccclass, h = (c.property, 
function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
this._init();
a.DaZhen_NZBTG_EventUtil.On(s.GUIEvent.SkinLook, this._onSkinLook, this);
a.DaZhen_NZBTG_EventUtil.On(s.GUIEvent.SkinTry, this._onSkinTry, this);
a.DaZhen_NZBTG_EventUtil.On(r.EventType.RoleSpine, this._onRoleSpine, this);
};
t.prototype.start = function() {
var e = l.default.ins.getEquipId();
l.default.ins.look(e);
if (l.default.ins.getCanTry()) {
var t = l.default.ins.getTryId();
l.default.ins.try(t, !1);
}
};
t.prototype.onDestroy = function() {
a.DaZhen_NZBTG_EventUtil.Off(s.GUIEvent.SkinLook, this._onSkinLook, this);
a.DaZhen_NZBTG_EventUtil.Off(s.GUIEvent.SkinTry, this._onSkinTry, this);
a.DaZhen_NZBTG_EventUtil.Off(r.EventType.RoleSpine, this._onRoleSpine, this);
};
t.prototype._onSkinLook = function() {};
t.prototype._onSkinTry = function() {};
t.prototype._onRoleSpine = function(e, t, n) {
x.DaZhen_NZBTG_SpineUtil.Play(this._spine, e, t, n);
};
t.prototype._init = function() {
this._spine = this.node.getComponent(sp.Skeleton);
};
return y([ _ ], t);
}(cc.Component));
n.default = h;
cc._RF.pop();
}, {
"../Datas/DaZhen_NZBTG_SkinNS": "DaZhen_NZBTG_SkinNS",
"../GUI/DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig",
"../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../Utils/DaZhen_NZBTG_SpineUtil": "DaZhen_NZBTG_SpineUtil",
"./DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig"
} ],
DaZhen_NZBTG_RoleWin: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0f43bJEbWxNIa4Rg3wJ80ra", "DaZhen_NZBTG_RoleWin");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, r = a.ccclass, x = (a.property, a.menu), s = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
this._init();
};
t.prototype.start = function() {
this._doAni();
};
t.prototype._init = function() {
this._nodeSoul = cc.find("Soul", this.node);
};
t.prototype._doAni = function() {
var e = this._nodeSoul.getComponent(cc.Sprite);
cc.tween(e).delay(.7).to(.5, {
fillRange: 1
}).start();
};
return y([ r, x("Game/Item/DaZhen_NZBTG_RoleWin") ], t);
}(cc.Component);
n.default = s;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_Role: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9b66bzYpM5DDrgY68GgEZ2B", "DaZhen_NZBTG_Role");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../Utils/DaZhen_NZBTG_EventUtil"), r = e("../Utils/DaZhen_NZBTG_MathUtil"), x = e("./DaZhen_NZBTG_GameConfig"), s = e("./DaZhen_NZBTG_GameConst"), l = e("./DaZhen_NZBTG_RoleSM"), c = cc._decorator, _ = c.ccclass, h = (c.property, 
function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
this._init();
this.listenOn();
};
t.prototype.onDestroy = function() {
this.listenOff();
};
t.prototype.start = function() {
this._sm.setState(x.RoleSMState.Idle);
};
t.prototype.lateUpdate = function() {
this._sm.getIsState(x.RoleSMState.Move) && this._doMove();
};
t.prototype.onBeginContact = function(e, t, n) {
t.node;
var o = n.node;
o.name == x.ItemNameG.PickKey ? a.DaZhen_NZBTG_EventUtil.Emit(x.EventType.PickKey, o) : o.name == x.ItemNameG.ToolBounceTop ? a.DaZhen_NZBTG_EventUtil.Emit(x.EventType.ToolBounce, o) : o.name == x.ItemNameG.FinishTarget && a.DaZhen_NZBTG_EventUtil.Emit(x.EventType.FinishTarget);
};
t.prototype._onToolBounceRes = function(e) {
this._doJump(e);
};
t.prototype._onRoleMove = function() {
this._sm.setState(x.RoleSMState.Move);
};
t.prototype._onLevelFinish = function(e) {
e == x.GameResult.Win && (this.node.active = !1);
this._sm.setState(x.RoleSMState.Finish);
};
t.prototype._init = function() {
this._sm = this.node.getComponentInChildren(l.default);
this._rigidBody = this.node.getComponent(cc.RigidBody);
this._collider = this.node.getComponent(cc.PhysicsCollider);
this._rigidBody.enabledContactListener = !0;
this._rigidBody.fixedRotation = !1;
this._rigidBody.allowSleep = !1;
this._collider.density = .1;
this._collider.apply();
};
t.prototype._doMove = function() {
var e = this, t = this.node.angle, n = this._rigidBody.angularVelocity, o = this._rigidBody.linearVelocity, i = this._rigidBody.getMass(), y = this._rigidBody.getWorldCenter();
Math.abs(t) > s.DaZhen_NZBTG_GameConst.AngleFall && a.DaZhen_NZBTG_EventUtil.Emit(x.EventType.LevelFinish, x.GameResult.Fail, x.FailState.Fall);
if (cc.director.getPhysicsManager().testAABB(this.node.getBoundingBoxToWorld()).filter(function(t) {
return t != e._collider;
}).length > 0) {
var l = r.DaZhen_NZBTG_MathUtil.AngleToRadian(t), c = cc.v2(Math.cos(l), Math.sin(l)).mul(s.DaZhen_NZBTG_GameConst.SpeedMove / 60);
c.x = (s.DaZhen_NZBTG_GameConst.SpeedMove - o.x) / 10;
c = c.mul(i);
this._rigidBody.applyLinearImpulse(c, y, !0);
if (o.x < s.DaZhen_NZBTG_GameConst.ClimbThreshold) {
n = r.DaZhen_NZBTG_MathUtil.Lerp(s.DaZhen_NZBTG_GameConst.AngleClimb, 0, o.x / s.DaZhen_NZBTG_GameConst.SpeedMove);
this._rigidBody.applyAngularImpulse(i * n, !0);
}
this._rigidBody.angularVelocity = r.DaZhen_NZBTG_MathUtil.Clamp(this._rigidBody.angularVelocity, -s.DaZhen_NZBTG_GameConst.AngleClimb, s.DaZhen_NZBTG_GameConst.AngleMax);
}
};
t.prototype._doJump = function(e) {
var t = cc.v2(0, 1), n = this._rigidBody.getMass(), o = t.mul(e).mul(n), i = this._rigidBody.getWorldCenter();
this._rigidBody.applyLinearImpulse(o, i, !0);
};
t.prototype.listenOn = function() {
a.DaZhen_NZBTG_EventUtil.On(x.EventType.ToolBounceRes, this._onToolBounceRes, this);
a.DaZhen_NZBTG_EventUtil.On(x.EventType.RoleMove, this._onRoleMove, this);
a.DaZhen_NZBTG_EventUtil.On(x.EventType.LevelFinish, this._onLevelFinish, this);
};
t.prototype.listenOff = function() {
a.DaZhen_NZBTG_EventUtil.Off(x.EventType.ToolBounceRes, this._onToolBounceRes, this);
a.DaZhen_NZBTG_EventUtil.Off(x.EventType.RoleMove, this._onRoleMove, this);
a.DaZhen_NZBTG_EventUtil.Off(x.EventType.LevelFinish, this._onLevelFinish, this);
};
return y([ _ ], t);
}(cc.Component));
n.default = h;
cc._RF.pop();
}, {
"../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../Utils/DaZhen_NZBTG_MathUtil": "DaZhen_NZBTG_MathUtil",
"./DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig",
"./DaZhen_NZBTG_GameConst": "DaZhen_NZBTG_GameConst",
"./DaZhen_NZBTG_RoleSM": "DaZhen_NZBTG_RoleSM"
} ],
DaZhen_NZBTG_SdkConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b785bPa+h1O061B+xVBsxZe", "DaZhen_NZBTG_SdkConfig");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ReportEvent = n.LuPingStart = n.LuPingEvent = n.InterType = n.AdEvent = n.PfN = n.Pf = void 0;
(function(e) {
e[e.qq = 0] = "qq";
e[e.wx = 1] = "wx";
e[e.tt = 2] = "tt";
e[e.oppo = 3] = "oppo";
e[e.vivo = 4] = "vivo";
e[e.xiaomi = 5] = "xiaomi";
e[e.native = 6] = "native";
e[e.web = 7] = "web";
e[e.huawei = 8] = "huawei";
e[e.lieyouH5 = 9] = "lieyouH5";
e[e.oppoH5 = 10] = "oppoH5";
e[e.xiaoMiH5 = 11] = "xiaoMiH5";
e[e.QuTouTiaoH5 = 12] = "QuTouTiaoH5";
e[e.MagicH5 = 13] = "MagicH5";
e[e.baidu = 14] = "baidu";
e[e.facebook = 15] = "facebook";
e[e.standard = 16] = "standard";
})(n.Pf || (n.Pf = {}));
(function(e) {
e.qq = "qq";
e.wx = "wx";
e.tt = "tt";
e.oppo = "oppo";
e.vivo = "vivo";
e.xiaomi = "xiaomi";
e.native = "native";
e.web = "web";
e.huawei = "huawei";
e.lieyouH5 = "lieyouH5";
e.oppoH5 = "oppoH5";
e.xiaoMiH5 = "xiaoMiH5";
e.QuTouTiaoH5 = "QuTouTiaoH5";
e.MagicH5 = "MagicH5";
e.baidu = "baidu";
e.facebook = "facebook";
e.standard = "standard";
})(n.PfN || (n.PfN = {}));
(function(e) {
e.AdShow = "AdShow";
e.AdClose = "AdClose";
e.AdRefresh = "AdRefresh";
})(n.AdEvent || (n.AdEvent = {}));
(function(e) {
e[e.None = 0] = "None";
e[e.Other = 1] = "Other";
e[e.Pause = 2] = "Pause";
e[e.Finish = 3] = "Finish";
})(n.InterType || (n.InterType = {}));
(function(e) {
e.LuPingStart = "LuPingStart";
e.LuPingPause = "LuPingPause";
e.LuPingResume = "LuPingResume";
e.LuPingEnd = "LuPingEnd";
e.LuPingShare = "LuPingShare";
})(n.LuPingEvent || (n.LuPingEvent = {}));
(function(e) {
e.Auto = "Auto";
e.Manual = "Manual";
})(n.LuPingStart || (n.LuPingStart = {}));
(function(e) {
e.AdUnlockLevel = "UnlockLevel";
e.AdUnlockSkin = "UnlockSkin";
e.AdLottery = "UnlockSkin";
e.AdCoin = "AdCoin";
e.AdEnergy = "AdEnergy";
e.AdHeart = "AdHeart";
e.Restart = "Restart";
})(n.ReportEvent || (n.ReportEvent = {}));
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_Sdk: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7e2acgBMA1KXqkscIHKwvKG", "DaZhen_NZBTG_Sdk");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = e("../Audio/DaZhen_NZBTG_AudioU"), i = e("../Datas/DaZhen_NZBTG_SettingNS"), y = e("./Extensions/DaZhen_NZBTG_EPlatform"), a = e("../GUI/DaZhen_NZBTG_GUI"), r = e("../GUI/DaZhen_NZBTG_GUIConfig"), x = e("../GUI/Panels/DaZhen_NZBTG_PanelLuPingShare"), s = e("../Main/DaZhen_NZBTG_Debug"), l = e("../Structs/DaZhen_NZBTG_Stack"), c = e("../Utils/DaZhen_NZBTG_EventUtil"), _ = e("./Extensions/DaZhen_NZBTG_AdapterSdk"), h = e("./DaZhen_NZBTG_SdkConfig"), u = e("../Config/DaZhen_NZBTG_Constant"), p = function() {
function e() {}
Object.defineProperty(e, "IsShowVideo", {
get: function() {
return e._IsShowVideo;
},
enumerable: !1,
configurable: !0
});
e.Init = function(t) {
e._StackAdapter = new l.DaZhen_NZBTG_Stack();
lieyou_SdkManager.init({
initDataComplete: function() {}
});
e.IsPfNs(h.PfN.native) ? lieyou_SdkManager.addListenerBackKey({
node: cc.find("Canvas")
}) : e.IsPfNs(h.PfN.wx) ? lieyou_SdkManager.showMoreGameSide({
isPersist: !0,
sideType_right: !1,
y: -100
}) : e.IsPfNs(h.PfN.qq) ? lieyou_SdkManager.showAppBox({
node: void 0,
isPersist: !0
}) : e.IsPfNs(h.PfN.vivo) && lieyou_SdkManager.showMoreGameByIcon();
window.oppoMoreGameClickCallback = function(e) {
console.log("oppoMoreGameClickCallback:", e);
e || a.default.ShowToast("加载失败");
};
e.GetUserInfo();
t && t();
c.DaZhen_NZBTG_EventUtil.On(h.AdEvent.AdShow, e._OnAdShow);
c.DaZhen_NZBTG_EventUtil.On(h.AdEvent.AdClose, e._OnAdClose);
c.DaZhen_NZBTG_EventUtil.On(h.AdEvent.AdRefresh, e._OnAdRefresh);
if (e.IsPfNs(h.PfN.tt)) {
c.DaZhen_NZBTG_EventUtil.On(h.LuPingEvent.LuPingStart, e._OnLuPingStart);
c.DaZhen_NZBTG_EventUtil.On(h.LuPingEvent.LuPingPause, e._OnLuPingPause);
c.DaZhen_NZBTG_EventUtil.On(h.LuPingEvent.LuPingResume, e._OnLuPingResume);
c.DaZhen_NZBTG_EventUtil.On(h.LuPingEvent.LuPingEnd, e._OnLuPingEnd);
c.DaZhen_NZBTG_EventUtil.On(h.LuPingEvent.LuPingShare, e._OnLuPingShare);
}
};
e.Exit = function() {
c.DaZhen_NZBTG_EventUtil.Off(h.AdEvent.AdShow, e._OnAdShow);
c.DaZhen_NZBTG_EventUtil.Off(h.AdEvent.AdClose, e._OnAdClose);
c.DaZhen_NZBTG_EventUtil.Off(h.AdEvent.AdRefresh, e._OnAdRefresh);
if (e.IsPfNs(h.PfN.tt)) {
c.DaZhen_NZBTG_EventUtil.Off(h.LuPingEvent.LuPingStart, e._OnLuPingStart);
c.DaZhen_NZBTG_EventUtil.Off(h.LuPingEvent.LuPingPause, e._OnLuPingPause);
c.DaZhen_NZBTG_EventUtil.Off(h.LuPingEvent.LuPingResume, e._OnLuPingResume);
c.DaZhen_NZBTG_EventUtil.Off(h.LuPingEvent.LuPingEnd, e._OnLuPingEnd);
c.DaZhen_NZBTG_EventUtil.Off(h.LuPingEvent.LuPingShare, e._OnLuPingShare);
}
};
e.GetPfN = function() {
var e = lieyou_SdkManager.getSysPlatformName();
if (s.default.GetIns().isDebugPlatform) {
var t = s.default.GetIns().platform;
e = h.Pf[t];
}
return e;
};
e.IsPfNs = function() {
for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
var o = e.GetPfN(), i = t.includes(o);
return i;
};
e.GetIsManualLP = function() {
return e._LuPingStart == h.LuPingStart.Manual;
};
e.GetIsLP = function() {
return e._IsLuPing;
};
e.GetHadShareLP = function() {
return e._HadShareLP;
};
e.CanShare = function() {
return e.IsPfNs(h.PfN.wx, h.PfN.qq, h.PfN.tt, h.PfN.native);
};
e.HasShareCb = function() {
return e.IsPfNs(h.PfN.wx, h.PfN.tt, h.PfN.native);
};
e.HasSubContext = function() {
return e.IsPfNs(h.PfN.wx, h.PfN.qq, h.PfN.tt);
};
e.GetUserInfo = function() {
if (e.IsPfNs(h.PfN.wx, h.PfN.qq, h.PfN.tt)) {
var t = function(e) {
console.log("GetUserInfo:", e.userInfo);
e.userInfo.nickName, e.userInfo.avatarUrl, e.userInfo.gender;
}, n = function() {
wx.getUserInfo({
success: function(e) {
t(e);
},
fail: function(e) {
console.log("wx.getUserProfile fail", e);
}
});
};
wx.getSetting({
success: function(e) {
console.log("getSetting:", e.authSetting);
e.authSetting && e.authSetting["scope.userInfo"] ? n() : wx.authorize({
scope: "scope.userInfo",
success: function() {
console.log("用户授权成功 ");
n();
},
fail: function(e) {
console.log("wx.authorize fail", e);
wx.getUserProfile({
desc: "用于完善个人资料",
success: function(e) {
t(e);
},
fail: function(e) {
console.log("wx.getUserProfile fail", e);
}
});
}
});
}
});
}
};
e.ShowYHXY = function() {
lieyou_interface.showBodyYS("1");
};
e.ShowYSZC = function() {
lieyou_interface.showBodyYS();
};
e.Vibrate = function(e) {
void 0 === e && (e = !1);
i.default.ins.getIsOpenVibrate() && (e ? lieyou_SdkManager.vibrateLong() : lieyou_SdkManager.vibrateShort());
};
e.Report = function(e) {
var t = e.level, n = e.isSpecial, o = e.isBegin, i = e.isWin, y = e.custom, a = n ? "special" : "standard";
if (y) {
var r = t ? a + "_" + t + "_" + y : y;
lieyou_SdkManager.gameCustomEvents(r);
} else o ? lieyou_SdkManager.gameBeginLevel(t, a) : i ? lieyou_SdkManager.gameFinishLevel(t, a) : lieyou_SdkManager.gameFailLevel(t, a);
};
e.Share = function(t, n) {
if (s.default.GetIns().isNoAd) t && t(!0); else if (e.CanShare()) if (e.HasShareCb()) {
o.default.PauseAll();
e._IsShowVideo = !0;
lieyou_SdkManager.share({
name: u.DaZhen_NZBTG_Constant.GameName.toLowerCase(),
title: n,
success: function(n) {
var i = 1 == n;
i || a.default.ShowToast("分享失败");
console.log("分享成功:", i);
e._IsShowVideo = !1;
setTimeout(function() {
o.default.ResumeAll();
t && t(i);
}, 100);
}
});
} else lieyou_SdkManager.share({
name: u.DaZhen_NZBTG_Constant.GameName.toLowerCase(),
title: n
}); else a.default.ShowToast("该平台不支持分享");
};
e.ShowVideo = function(t) {
if (s.default.GetIns().isNoAd) t(!0); else {
o.default.PauseAll();
e._IsShowVideo = !0;
var n = function(n) {
e._IsShowVideo = !1;
setTimeout(function() {
o.default.ResumeAll();
t && t(n);
}, 100);
};
if (lieyou_SdkManager.getHaveVideo() || e.IsPfNs(h.PfN.wx)) lieyou_SdkManager.showRewardedVideoAd(function(e) {
e || a.default.ShowToast("视频播放失败");
console.log("激励视频:", !!e);
n(e);
}); else {
a.default.ShowToast("暂无视频");
n(!1);
}
}
};
e.ShowVideoWithoutAdIcon = function(t) {
console.log("展示 无广告标 视频按钮");
if (e.IsPfNs(h.PfN.wx)) {
o.default.PauseAll();
e._IsShowVideo = !0;
var n = function(n) {
e._IsShowVideo = !1;
setTimeout(function() {
o.default.ResumeAll();
t && t(n);
}, 100);
};
lieyou_SdkManager.showVideoWithoutAdIcon(function() {
n(!0);
}, function() {
n(!1);
});
} else t && t(!0);
};
e.ShowRelax = function(t, n) {
console.log("展示 休息一下");
e.AdClear();
lieyou_SdkManager.showGameOverPanl({
callfun: n,
isWin: t
});
};
e.ShowIsbn = function() {
if (e._HadShowIsbn) return !1;
e._HadShowIsbn = !0;
lieyou_SdkManager.showISBN({
size: 30
});
return !0;
};
e.HideIsbn = function() {
if (!e._HadHideIsbn) {
e._HadHideIsbn = !0;
lieyou_SdkManager.hideISBN();
}
};
e.ShowBanner = function(e) {
e.bannerHeight;
lieyou_SdkManager.showBannerByBottom(e);
};
e.HideBanner = function() {
lieyou_SdkManager.hideBanner();
};
e.AdClear = function() {
e._StackAdapter.size > 0 && e._StackAdapter.delete().close(!0);
e._StackAdapter.clear();
};
e.AdapterOnOff = function(e, t, n) {
var o = e.getChildByName("AdapterPlatform");
if (o) {
o.active = t;
if (!n) {
var i = o.getComponent(y.default).getSelect();
if (i) {
var a = i.getComponent(_.default);
a && (t ? c.DaZhen_NZBTG_EventUtil.Emit(h.AdEvent.AdShow, a, a.getIsClearAll()) : c.DaZhen_NZBTG_EventUtil.Emit(h.AdEvent.AdClose, a));
}
}
}
};
e._OnAdShow = function(t, n) {
var o = e._StackAdapter.isEmpty ? null : e._StackAdapter.top;
if (e._StackAdapter.size > 0 && e._StackAdapter.top == t) console.log("广告适配器 已展示--\x3e不再重复展示"); else {
n && e._StackAdapter.clear();
e._StackAdapter.add(t);
var i = t && t.needCloseBanner(), y = i || o && o.needShowBanner();
console.log("广告进入:", i, y);
o && o.close(i);
t && t.show(y);
}
};
e._OnAdClose = function(t) {
if ((e._StackAdapter.isEmpty ? null : e._StackAdapter.top) == t) {
e._StackAdapter.delete();
var n = e._StackAdapter.isEmpty ? null : e._StackAdapter.top, o = !n || n && n.needCloseBanner(), i = o || t && t.needShowBanner();
console.log("广告退出:", o, i);
t && t.close(o);
n && n.show(i);
}
};
e._OnAdRefresh = function() {
var t = e._StackAdapter.isEmpty ? null : e._StackAdapter.top;
t && t.show(!0);
};
e._OnLuPingStart = function(t, n) {
console.log("_onLuPingStart:", t, n);
var o = e._IsLuPing;
e._IsLuPing = !0;
e._NeedShareLP = n;
if (!o) {
e._LuPingStart = t;
lieyou_SdkManager.beginLuPing(300, function(t) {
if (t) {
console.log("needShare：", e._NeedShareLP);
e._IsLuPing = !1;
c.DaZhen_NZBTG_EventUtil.Emit(h.LuPingEvent.LuPingEnd, n);
}
});
}
};
e._OnLuPingPause = function() {
lieyou_SdkManager.pauseLuPing();
};
e._OnLuPingResume = function() {
lieyou_SdkManager.resumeLuPing();
};
e._OnLuPingEnd = function(t) {
console.log("_onLuPingEnd:", t);
var n = e._IsLuPing;
e._IsLuPing = !1;
e._HadShareLP = !1;
e._NeedShareLP = t;
console.log("luPing:", n);
n ? lieyou_SdkManager.stopLuPing() : t && c.DaZhen_NZBTG_EventUtil.Emit(h.LuPingEvent.LuPingShare);
};
e._OnLuPingShare = function(t) {
console.log("_onLuPingShare:", !!t);
e._LuPingStart = null;
e._HadShareLP = !0;
a.default.ShowPopup(r.PanelPath.PanelLuPingShare, x.default, function(e) {
e.initPanel(t);
});
};
return e;
}();
n.default = p;
cc._RF.pop();
}, {
"../Audio/DaZhen_NZBTG_AudioU": "DaZhen_NZBTG_AudioU",
"../Config/DaZhen_NZBTG_Constant": "DaZhen_NZBTG_Constant",
"../Datas/DaZhen_NZBTG_SettingNS": "DaZhen_NZBTG_SettingNS",
"../GUI/DaZhen_NZBTG_GUI": "DaZhen_NZBTG_GUI",
"../GUI/DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig",
"../GUI/Panels/DaZhen_NZBTG_PanelLuPingShare": "DaZhen_NZBTG_PanelLuPingShare",
"../Main/DaZhen_NZBTG_Debug": "DaZhen_NZBTG_Debug",
"../Structs/DaZhen_NZBTG_Stack": "DaZhen_NZBTG_Stack",
"../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"./DaZhen_NZBTG_SdkConfig": "DaZhen_NZBTG_SdkConfig",
"./Extensions/DaZhen_NZBTG_AdapterSdk": "DaZhen_NZBTG_AdapterSdk",
"./Extensions/DaZhen_NZBTG_EPlatform": "DaZhen_NZBTG_EPlatform"
} ],
DaZhen_NZBTG_SettingNS: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "778a07cuWNHgbxyrqR0AUoe", "DaZhen_NZBTG_SettingNS");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = e("../Audio/DaZhen_NZBTG_AudioU"), i = e("../Audio/DaZhen_NZBTG_AudioName"), y = e("../Sdk/DaZhen_NZBTG_Sdk"), a = e("./DaZhen_NZBTG_Data"), r = e("../SubGame/DaZhen_NZBTG_SubGameUtil"), x = function() {
function e() {
this._init();
}
Object.defineProperty(e, "ins", {
get: function() {
e._ins || (e._ins = new e());
return e._ins;
},
enumerable: !1,
configurable: !0
});
e.prototype._init = function() {
this._isOpenMusic = a.LastingData.IsOpenMusic;
this._isOpenEffect = a.LastingData.IsOpenEffect;
this._isOpenVibrate = a.LastingData.IsOpenVibrate;
};
e.prototype.getIsOpenMusic = function() {
return r.default.musicState;
};
e.prototype.getIsOpenEffect = function() {
return r.default.sfxState;
};
e.prototype.getIsOpenVibrate = function() {
return r.default.vibrateState;
};
e.prototype.setMusicOnOff = function(e) {
var t = r.default.musicState;
r.default.musicState = e;
!t && e ? o.default.PlayMusic(i.DaZhen_NZBTG_AudioName.game_bgm) : t && !e && o.default.StopMusic();
};
e.prototype.setEffectOnOff = function(e) {
var t = r.default.sfxState;
r.default.sfxState = e;
!t && e && o.default.PlayEffect(i.DaZhen_NZBTG_AudioName.click);
};
e.prototype.setVibrateOnOff = function(e) {
var t = r.default.vibrateState;
r.default.vibrateState = e;
!t && e && y.default.Vibrate();
};
return e;
}();
n.default = x;
cc._RF.pop();
}, {
"../Audio/DaZhen_NZBTG_AudioName": "DaZhen_NZBTG_AudioName",
"../Audio/DaZhen_NZBTG_AudioU": "DaZhen_NZBTG_AudioU",
"../Sdk/DaZhen_NZBTG_Sdk": "DaZhen_NZBTG_Sdk",
"../SubGame/DaZhen_NZBTG_SubGameUtil": "DaZhen_NZBTG_SubGameUtil",
"./DaZhen_NZBTG_Data": "DaZhen_NZBTG_Data"
} ],
DaZhen_NZBTG_SkinConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3ffa682nKtLLrQ1ahkzWPG9", "DaZhen_NZBTG_SkinConfig");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_SkinConfig = void 0;
var o = e("../GUI/DaZhen_NZBTG_GUIConfig");
n.DaZhen_NZBTG_SkinConfig = [ {
skinId: "Cattle1",
cost: 0,
unlockType: o.UnlockType.Coin
}, {
skinId: "Cattle2",
cost: 1688,
unlockType: o.UnlockType.Coin
}, {
skinId: "Cattle3",
cost: 1e3,
unlockType: o.UnlockType.Coin
}, {
skinId: "Cattle4",
cost: 1e3,
unlockType: o.UnlockType.Coin
}, {
skinId: "Cattle5",
cost: 1e3,
unlockType: o.UnlockType.Coin
}, {
skinId: "Cattle6",
cost: 1e3,
unlockType: o.UnlockType.Coin
}, {
skinId: "Cattle7",
cost: 1e3,
unlockType: o.UnlockType.Coin
}, {
skinId: "Cattle8",
cost: 1e3,
unlockType: o.UnlockType.Coin
}, {
skinId: "Cattle9",
cost: 1e3,
unlockType: o.UnlockType.Coin
}, {
skinId: "Cattle10",
cost: 1e3,
unlockType: o.UnlockType.Coin
}, {
skinId: "Cattle11",
cost: 1e3,
unlockType: o.UnlockType.Coin
}, {
skinId: "Cattle12",
cost: 1e3,
unlockType: o.UnlockType.Coin
}, {
skinId: "Cattle13",
cost: 1e3,
unlockType: o.UnlockType.Coin
}, {
skinId: "Cattle14",
cost: 1e3,
unlockType: o.UnlockType.Coin
}, {
skinId: "Cattle15",
cost: 1e3,
unlockType: o.UnlockType.Coin
}, {
skinId: "Cattle16",
cost: 1e3,
unlockType: o.UnlockType.Coin
}, {
skinId: "Cattle17",
cost: 1e3,
unlockType: o.UnlockType.Coin
}, {
skinId: "Cattle18",
cost: 1e3,
unlockType: o.UnlockType.Coin
}, {
skinId: "Cattle19",
cost: 1e3,
unlockType: o.UnlockType.Coin
}, {
skinId: "Cattle20",
cost: 1999,
unlockType: o.UnlockType.Coin
} ];
cc._RF.pop();
}, {
"../GUI/DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig"
} ],
DaZhen_NZBTG_SkinNS: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9de08tZBuxFTokYbT9rO1y9", "DaZhen_NZBTG_SkinNS");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = e("../Config/DaZhen_NZBTG_SkinConfig"), i = e("../GUI/DaZhen_NZBTG_GUIConfig"), y = e("../Utils/DaZhen_NZBTG_ArrayUtil"), a = e("../Utils/DaZhen_NZBTG_EventUtil"), r = e("./DaZhen_NZBTG_Data"), x = function() {
function e() {
this._init();
}
Object.defineProperty(e, "ins", {
get: function() {
e._ins || (e._ins = new e());
return e._ins;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "configSrc", {
get: function() {
return o.DaZhen_NZBTG_SkinConfig;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "skinMax", {
get: function() {
return this._countMax;
},
enumerable: !1,
configurable: !0
});
e.prototype._init = function() {
var e = this;
this._countMax = 0;
this._tryCount = 0;
this._dataUnlock = r.LastingData.SkinUnlock;
this._equipId = r.LastingData.SkinEquip;
var t = 0 == this._dataUnlock.length;
this.configSrc.forEach(function(n) {
if (t && 0 == n.cost && n.unlockType == i.UnlockType.Coin) {
e.unlock(n.skinId);
e.equip(n.skinId);
}
});
this._countMax = this.configSrc.length;
};
e.prototype._sortOne = function(e) {
var t = this, n = [], o = [];
e.forEach(function(e) {
t.getIsUnlock(e.skinId) ? n.push(e) : o.push(e);
});
return n.reverse().concat(o);
};
e.prototype.getIconRouter = function(e) {
return "UI/Skin/" + e;
};
e.prototype.getInfo = function(e) {
return this.configSrc.find(function(t) {
return t.skinId == e;
});
};
e.prototype.getOneInfoList = function(e) {
void 0 === e && (e = !1);
var t = this.configSrc;
e && (t = this._sortOne(t));
return t;
};
e.prototype.getLockInfoList = function() {
var e = this;
return this.getOneInfoList().filter(function(t) {
return !e.getIsUnlock(t.skinId);
});
};
e.prototype.getOneLockInfo = function() {
var e = this.getLockInfoList();
return y.DaZhen_NZBTG_ArrayUtil.Random(e);
};
e.prototype.getTryId = function() {
return this._tryId;
};
e.prototype.getCanTry = function() {
return this._tryCount < 2;
};
e.prototype.getIsUnlock = function(e) {
return this._dataUnlock.includes(e);
};
e.prototype.getIsEquip = function(e) {
return this._equipId.includes(e);
};
e.prototype.getEquipId = function() {
return this._equipId;
};
e.prototype.addTryCount = function() {
this._tryCount++;
};
e.prototype.unlockAll = function() {
var e = this;
this.configSrc.forEach(function(t) {
e.unlock(t.skinId);
});
};
e.prototype.unlock = function(e) {
var t = this._dataUnlock;
if (!t.includes(e)) {
t.push(e);
r.LastingData.SkinUnlock = t;
}
a.DaZhen_NZBTG_EventUtil.Emit(i.GUIEvent.SkinUnlock, e);
};
e.prototype.equip = function(e) {
this._equipId = e;
r.LastingData.SkinEquip = this._equipId;
a.DaZhen_NZBTG_EventUtil.Emit(i.GUIEvent.SkinEquip, e);
this.look(e);
this.try(null, !0);
};
e.prototype.look = function(e) {
a.DaZhen_NZBTG_EventUtil.Emit(i.GUIEvent.SkinLook, e);
};
e.prototype.try = function(e, t) {
this._tryId = e;
t ? this._tryCount = 1 : this._tryCount++;
a.DaZhen_NZBTG_EventUtil.Emit(i.GUIEvent.SkinTry, e);
};
return e;
}();
n.default = x;
cc._RF.pop();
}, {
"../Config/DaZhen_NZBTG_SkinConfig": "DaZhen_NZBTG_SkinConfig",
"../GUI/DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig",
"../Utils/DaZhen_NZBTG_ArrayUtil": "DaZhen_NZBTG_ArrayUtil",
"../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"./DaZhen_NZBTG_Data": "DaZhen_NZBTG_Data"
} ],
DaZhen_NZBTG_SkinUnit: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "38e8cXyFrdK4JH7d+pB1bZF", "DaZhen_NZBTG_SkinUnit");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Datas/DaZhen_NZBTG_SkinNS"), r = e("../../Main/DaZhen_NZBTG_Res"), x = e("../../Sdk/DaZhen_NZBTG_Sdk"), s = e("../../Utils/DaZhen_NZBTG_EventUtil"), l = e("../Core/Base/DaZhen_NZBTG_BaseUnit"), c = e("../Extensions/DaZhen_NZBTG_WYOrN"), _ = e("../DaZhen_NZBTG_GUI"), h = e("../DaZhen_NZBTG_GUIConfig"), u = e("../Panels/DaZhen_NZBTG_PanelSkinUnlock"), p = cc._decorator, f = p.ccclass, d = p.property, Z = p.menu, g = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.icon = null;
t.shadow = null;
t.select = null;
t.selectLight = null;
t.textCost = null;
t.textAdCount = null;
t.sAd = null;
t.sUnlock = null;
t.sEquip = null;
return t;
}
t.prototype.listenOn = function() {
e.prototype.listenOn.call(this);
s.DaZhen_NZBTG_EventUtil.On(h.GUIEvent.SkinUnlock, this._onSkinUnlock, this);
s.DaZhen_NZBTG_EventUtil.On(h.GUIEvent.SkinEquip, this._onSkinEquip, this);
s.DaZhen_NZBTG_EventUtil.On(h.GUIEvent.SkinLook, this._onSkinLook, this);
};
t.prototype.listenOff = function() {
e.prototype.listenOff.call(this);
s.DaZhen_NZBTG_EventUtil.Off(h.GUIEvent.SkinUnlock, this._onSkinUnlock, this);
s.DaZhen_NZBTG_EventUtil.Off(h.GUIEvent.SkinEquip, this._onSkinEquip, this);
s.DaZhen_NZBTG_EventUtil.Off(h.GUIEvent.SkinLook, this._onSkinLook, this);
};
t.prototype._onSkinUnlock = function(e) {
if (this._skinInfo && this._skinId == e) {
var t = a.default.ins.getIsUnlock(this._skinId);
this.sUnlock.setStatus(t);
}
};
t.prototype._onSkinEquip = function() {
if (this._skinInfo) {
var e = a.default.ins.getIsEquip(this._skinId);
this.sEquip.setStatus(e);
}
};
t.prototype._onSkinLook = function(e) {
if (this._skinInfo) {
var t = this._skinId == e;
this._isSelect != t && this._setSelect(t);
}
};
t.prototype.ocb_Unlock = function() {
var e = this;
_.default.ShowPopup(h.PanelPath.PanelSkinUnlock, u.default, function(t) {
t.initPanel(e._skinInfo);
});
};
t.prototype.ocb_UnlockAd = function() {
var e = this;
x.default.ShowVideo(function(t) {
t && a.default.ins.unlock(e._skinId);
});
};
t.prototype.ocb_Equip = function() {
a.default.ins.equip(this._skinId);
};
t.prototype.ocb_Equiped = function() {
_.default.ShowToast("已使用该皮肤");
};
t.prototype.ocb_Look = function() {
a.default.ins.look(this._skinId);
};
t.prototype._setStatus = function() {
var e = this._skinId, t = a.default.ins.getIsUnlock(e), n = a.default.ins.getIsEquip(e);
this.sAd.setStatus(this._skinInfo.unlockType == h.UnlockType.Ad);
this.sUnlock.setStatus(t);
this.sEquip.setStatus(n);
this._setSelect(n);
};
t.prototype._setSelect = function(e) {
this._isSelect = e;
this.select.active = e;
if (e) {
var t = this.selectLight;
cc.Tween.stopAllByTarget(t);
cc.tween(t).repeatForever(cc.tween().to(1, {
opacity: 0
}).to(1, {
opacity: 255
})).start();
}
};
t.prototype.init = function(e) {
if (e) {
this.node.active = !0;
this._skinId = e.skinId;
this._skinInfo = e;
this._isSelect = a.default.ins.getIsEquip(e.skinId);
this.textCost.string = "" + e.cost;
this.icon.spriteFrame = r.default.GetCacheSpriteFrame(a.default.ins.getIconRouter(e.skinId));
this._setStatus();
} else {
this._skinId = null;
this._skinInfo = null;
this.node.active = !1;
}
};
y([ d(cc.Sprite) ], t.prototype, "icon", void 0);
y([ d(cc.Node) ], t.prototype, "shadow", void 0);
y([ d(cc.Node) ], t.prototype, "select", void 0);
y([ d(cc.Node) ], t.prototype, "selectLight", void 0);
y([ d(cc.Label) ], t.prototype, "textCost", void 0);
y([ d(cc.Label) ], t.prototype, "textAdCount", void 0);
y([ d(c.default) ], t.prototype, "sAd", void 0);
y([ d(c.default) ], t.prototype, "sUnlock", void 0);
y([ d(c.default) ], t.prototype, "sEquip", void 0);
return y([ f, Z("GUI/Unit/DaZhen_NZBTG_SkinUnit") ], t);
}(l.default);
n.default = g;
cc._RF.pop();
}, {
"../../Datas/DaZhen_NZBTG_SkinNS": "DaZhen_NZBTG_SkinNS",
"../../Main/DaZhen_NZBTG_Res": "DaZhen_NZBTG_Res",
"../../Sdk/DaZhen_NZBTG_Sdk": "DaZhen_NZBTG_Sdk",
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../Core/Base/DaZhen_NZBTG_BaseUnit": "DaZhen_NZBTG_BaseUnit",
"../DaZhen_NZBTG_GUI": "DaZhen_NZBTG_GUI",
"../DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig",
"../Extensions/DaZhen_NZBTG_WYOrN": "DaZhen_NZBTG_WYOrN",
"../Panels/DaZhen_NZBTG_PanelSkinUnlock": "DaZhen_NZBTG_PanelSkinUnlock"
} ],
DaZhen_NZBTG_SpineRole: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9aa46T7Q5pPkoHivWsHQLAe", "DaZhen_NZBTG_SpineRole");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Utils/DaZhen_NZBTG_EventUtil"), r = e("../../Game/DaZhen_NZBTG_GameConfig"), x = e("../../Utils/DaZhen_NZBTG_SpineUtil"), s = e("../DaZhen_NZBTG_GUIConfig"), l = (e("../../Datas/DaZhen_NZBTG_SkinNS"), 
cc._decorator), c = l.ccclass, _ = l.property, h = l.menu, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.canTry = !1;
return t;
}
t.prototype.onLoad = function() {
this._init();
this.listenOn();
};
t.prototype.start = function() {};
t.prototype.onDestroy = function() {
this.listenOff();
};
t.prototype._onSkinLook = function() {};
t.prototype._onSkinTry = function() {};
t.prototype._onRoleSpine = function(e, t, n) {
x.DaZhen_NZBTG_SpineUtil.Play(this._spine, e, t, n);
};
t.prototype._init = function() {
this._spine = this.node.getComponent(sp.Skeleton);
};
t.prototype.listenOn = function() {
a.DaZhen_NZBTG_EventUtil.On(s.GUIEvent.SkinLook, this._onSkinLook, this);
a.DaZhen_NZBTG_EventUtil.On(s.GUIEvent.SkinTry, this._onSkinTry, this);
a.DaZhen_NZBTG_EventUtil.On(r.EventType.RoleSpine, this._onRoleSpine, this);
};
t.prototype.listenOff = function() {
a.DaZhen_NZBTG_EventUtil.Off(s.GUIEvent.SkinLook, this._onSkinLook, this);
a.DaZhen_NZBTG_EventUtil.Off(s.GUIEvent.SkinTry, this._onSkinTry, this);
a.DaZhen_NZBTG_EventUtil.Off(r.EventType.RoleSpine, this._onRoleSpine, this);
};
y([ _({
tooltip: "可以试用"
}) ], t.prototype, "canTry", void 0);
return y([ c, h("GUI/Spines/DaZhen_NZBTG_SpineRole") ], t);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../../Datas/DaZhen_NZBTG_SkinNS": "DaZhen_NZBTG_SkinNS",
"../../Game/DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig",
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../../Utils/DaZhen_NZBTG_SpineUtil": "DaZhen_NZBTG_SpineUtil",
"../DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig"
} ],
DaZhen_NZBTG_SpineUtil: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c95d3aBAVFHRa1TEpatlcMC", "DaZhen_NZBTG_SpineUtil");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_SpineUtil = void 0;
var o = function() {
function e() {}
e.Play = function(e, t, n, o) {
e.setAnimation(0, t, n);
e.setCompleteListener(o);
};
e.PlayTimes = function(e, t, n) {
e.setAnimation(0, t, !1);
for (var o = 1; o < n; o++) e.addAnimation(0, t, !1);
};
e.AddAnimation = function(e, t, n) {
e.addAnimation(0, t, n);
};
e.ResetBones = function(e) {
e.setBonesToSetupPose();
};
return e;
}();
n.DaZhen_NZBTG_SpineUtil = o;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_Stack: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c515amKkylNDI1CiJa5Q3EN", "DaZhen_NZBTG_Stack");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_Stack = void 0;
var o = function() {
function e() {
this._list = [];
}
Object.defineProperty(e.prototype, "size", {
get: function() {
return this._list.length;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isEmpty", {
get: function() {
return 0 == this.size;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "top", {
get: function() {
return this._list[this.size - 1];
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "bottom", {
get: function() {
return this._list[0];
},
enumerable: !1,
configurable: !0
});
e.prototype.add = function(e) {
this._list.push(e);
};
e.prototype.delete = function() {
return this._list.pop();
};
e.prototype.clear = function() {
this._list = [];
};
return e;
}();
n.DaZhen_NZBTG_Stack = o;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_StorageUtil: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "78023Wgzb9D2Y3zGcudDMBS", "DaZhen_NZBTG_StorageUtil");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_StorageUtil = void 0;
var o = function() {
function e() {}
e.GetItem = function(e, t) {
var n = cc.sys.localStorage.getItem(e);
return null != n && "" !== n ? JSON.parse(n) : t;
};
e.SetItem = function(e, t) {
var n = t;
null != t && "" !== t && (n = JSON.stringify(t));
cc.sys.localStorage.setItem(e, n);
};
e.Remove = function(e) {
cc.sys.localStorage.removeItem(e);
};
e.RemoveAll = function() {
cc.sys.localStorage.clear();
};
return e;
}();
n.DaZhen_NZBTG_StorageUtil = o;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_StringUtil: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ad6d28UZitNhJEETvkY33lK", "DaZhen_NZBTG_StringUtil");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_StringUtil = void 0;
var o = function() {
function e() {}
e.Format = function(e) {
for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
if (!e || 0 == t.length) return e;
for (var o = 0; o < t.length; o++) {
var i = new RegExp("\\{" + o + "\\}", "gm");
e = e.replace(i, t[o]);
}
return e;
};
e.FillTwoZero = function(e) {
return e.toString().padStart(2, "0");
};
return e;
}();
n.DaZhen_NZBTG_StringUtil = o;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_Struct: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7c861u5betMuaNt1gIgfkIK", "DaZhen_NZBTG_Struct");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Timer = n.DecoratorWithParam = n.Decorator = n.Assign = void 0;
n.Assign = function(e, t) {
Object.assign(e.prototype, t);
};
n.Decorator = function(e) {
e.test = 1e3;
};
n.DecoratorWithParam = function(e) {
return function(t) {
t.test = e;
};
};
var o = function() {
function e(e, t, n) {
var o = this;
void 0 === t && (t = 1);
void 0 === n && (n = !1);
this._count = 0;
this._timer = -1;
this._interval = t;
this._callback = function() {
o._count += o._interval;
e && e(o._count);
};
n && this.onOff(!0);
}
e.prototype.onOff = function(e) {
clearInterval(this._timer);
this._timer = -1;
e && (this._timer = setInterval(this._callback, 1e3 * this._interval));
};
return e;
}();
n.Timer = o;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_SubGameUtil: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "44cf5a/2Y9JI6zobiMOe/+Q", "DaZhen_NZBTG_SubGameUtil");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = e("../Audio/DaZhen_NZBTG_AudioU"), i = e("../Game/DaZhen_NZBTG_GameSetting"), y = function() {
function e() {}
Object.defineProperty(e, "musicState", {
get: function() {
return PPSDK.musicState;
},
set: function(e) {
PPSDK.musicState = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "sfxState", {
get: function() {
return PPSDK.sfxState;
},
set: function(e) {
PPSDK.sfxState = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "vibrateState", {
get: function() {
return PPSDK.vibrateState;
},
set: function(e) {
PPSDK.vibrateState = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "coin", {
get: function() {
var e = window.lieyou.Key_Gold, t = cc.sys.localStorage.getItem(e), n = 0;
if (null === t || "" === t || void 0 === t) {
cc.sys.localStorage.setItem(e, 0);
n = 0;
} else n = Number(t);
return n;
},
set: function(e) {
var t = window.lieyou.Key_Gold;
cc.sys.localStorage.setItem(t, String(e));
},
enumerable: !1,
configurable: !0
});
e.Enter = function() {
console.log("进入子游戏：", e.GameName);
PPSDK && PPSDK.subGame.addSub({
name: e.GameName,
group: {
"group-list": [ "default", "UI", "GameBg", "Game", "Role", "Test" ],
"collision-matrix": [ [ !1 ], [ !1, !1 ], [ !1, !1, !1, !1, !1 ], [ !1, !1, !1, !0, !0, !1 ], [ !1, !1, !1, !0, !0, !1 ], [ !1, !1, !1, !1, !1, !1 ] ]
},
goGame: function() {
return new Promise(function(t) {
e.IsExit = !1;
cc.director.loadScene(e.LoadingName, function() {
t();
});
});
}
});
};
e.Exit = function() {
console.log("退出子游戏：", e.GameName);
PPSDK.subGame.goHome();
e.IsExit = !0;
o.default.StopAll();
i.DaZhen_NZBTG_GameSetting.ResetToEngine();
};
e.Load = function(t, n, o, i) {
var y = this, a = "Bundle/" + t + "/" + n;
PPSDK.cacheManager.getCacheByAsync(a, o, e.GameName).then(function(e) {
y.IsExit || (e ? i && i(e) : i && i(null));
});
};
e.LoadDir = function(t, n, o, i) {
var y = this, a = "Bundle/" + t + "/" + n;
PPSDK.assetManager.loadDir({
bundle: e.GameName,
path: a,
type: o,
onComplete: function(e) {
y.IsExit || i(e.data);
}
});
};
e.GameName = "DaZhen_NZBTG";
e.LoadingName = "DaZhen_NZBTG";
e.IsExit = !1;
return e;
}();
n.default = y;
y.Enter();
cc._RF.pop();
}, {
"../Audio/DaZhen_NZBTG_AudioU": "DaZhen_NZBTG_AudioU",
"../Game/DaZhen_NZBTG_GameSetting": "DaZhen_NZBTG_GameSetting"
} ],
DaZhen_NZBTG_TestBanner: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "40331zbXSRCpYw+DJZ8Io00", "DaZhen_NZBTG_TestBanner");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, r = a.ccclass, x = (a.property, a.menu), s = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.show = function(e) {
this.node.width = 700;
this.node.height = e;
this.node.y = -(cc.winSize.height - e) / 2;
this.node.getChildByName("Text").getComponent(cc.Label).string = "TestBanner:" + e;
this.node.active = !0;
};
t.prototype.close = function() {
this.node.active = !1;
};
return y([ r, x("Sdk/DaZhen_NZBTG_TestBanner") ], t);
}(cc.Component);
n.default = s;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_TextureConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6ec2fogg5ZEw6u+FWJI6ESL", "DaZhen_NZBTG_TextureConfig");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaZhen_NZBTG_TextureConfig = void 0;
n.DaZhen_NZBTG_TextureConfig = [ "Modes/NZBTG/ControllerUD_Bottom", "Modes/NZBTG/ControllerUD_Top", "Modes/NZBTG/ControlTarget", "Modes/NZBTG/DoorLock", "Modes/NZBTG/FakeStatic_0", "Modes/NZBTG/FakeStatic_1", "Modes/NZBTG/FinishTarget", "Modes/NZBTG/Floor", "Modes/NZBTG/Gear", "Modes/NZBTG/Hand", "Modes/NZBTG/Help", "Modes/NZBTG/Move", "Modes/NZBTG/PickKey", "Modes/NZBTG/RoleWinBoy", "Modes/NZBTG/RoleWinGirl", "Modes/NZBTG/Soul", "Modes/NZBTG/Swing_Ball", "Modes/NZBTG/Swing_Line", "Modes/NZBTG/ToolBounce", "Modes/NZBTG/TouchMove_0", "Modes/NZBTG/TouchMove_1", "Modes/NZBTG/TouchMove_Dir", "UI/LevelSelect/bg_lock", "UI/LevelSelect/bg_unlock_0", "UI/LevelSelect/bg_unlock_1", "UI/LevelSelect/bg_unlock_2", "UI/Prize/Coin", "UI/Prize/CoinMore", "UI/Prize/Energy", "UI/Prize/Heart", "UI/Prize/HeartMore", "UI/Prize/Lottery", "UI/Prize/Skin", "UI/Skin/Cattle1", "UI/Skin/Cattle2", "UI/Skin/Cattle3" ];
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_ToolBounce: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d80cdTYUdxKTbA+Mp5Oj/Nl", "DaZhen_NZBTG_ToolBounce");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../DaZhen_NZBTG_GameConfig"), r = e("../../Utils/DaZhen_NZBTG_EventUtil"), x = cc._decorator, s = x.ccclass, l = x.property, c = x.menu, _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.speed = 800;
return t;
}
t.prototype.onLoad = function() {
this._init();
r.DaZhen_NZBTG_EventUtil.On(a.EventType.ToolBounce, this._onToolBounce, this);
};
t.prototype.onDestroy = function() {
r.DaZhen_NZBTG_EventUtil.Off(a.EventType.ToolBounce, this._onToolBounce, this);
};
t.prototype._onToolBounce = function(e) {
var t = this;
if (e == this._topNode && !this._isWork) {
this._isWork = !0;
cc.Tween.stopAllByTarget(this._topNode);
cc.tween(this._topNode).to(.1, {
scaleY: .9
}).to(.1, {
scaleY: 1
}).call(function() {
t._isWork = !1;
}).start();
r.DaZhen_NZBTG_EventUtil.Emit(a.EventType.ToolBounceRes, this.speed);
}
};
t.prototype._init = function() {
this._topNode = cc.find("ToolBounceTop", this.node);
};
y([ l({
tooltip: "弹起速度",
min: 0
}) ], t.prototype, "speed", void 0);
return y([ s, c("Game/Item/DaZhen_NZBTG_ToolBounce") ], t);
}(cc.Component);
n.default = _;
cc._RF.pop();
}, {
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig"
} ],
DaZhen_NZBTG_TriggerMove: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b1e7eAKm1xMCKUXz/l2q2Pr", "DaZhen_NZBTG_TriggerMove");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../DaZhen_NZBTG_GameConfig"), r = e("../../Utils/DaZhen_NZBTG_EventUtil"), x = e("../DaZhen_NZBTG_GameData"), s = cc._decorator, l = s.ccclass, c = (s.property, 
s.menu), _ = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
this._init();
r.DaZhen_NZBTG_EventUtil.On(a.EventType.TriggerMove, this._onTriggerMove, this);
};
t.prototype.start = function() {};
t.prototype.onDestroy = function() {
r.DaZhen_NZBTG_EventUtil.Off(a.EventType.TriggerMove, this._onTriggerMove, this);
};
t.prototype.onBeginContact = function(e, t, n) {
var o = t.node;
n.node.name == a.ItemNameG.FloorCut && r.DaZhen_NZBTG_EventUtil.Emit(a.EventType.TriggerMove, o);
};
t.prototype._onTriggerMove = function(e) {
if (e == this.node && !this._isWork) {
this._isWork = !0;
x.DaZhen_NZBTG_GameData.TriggerMoveWork++;
x.DaZhen_NZBTG_GameData.TriggerMoveWork == x.DaZhen_NZBTG_GameData.TriggerMoveTotal && r.DaZhen_NZBTG_EventUtil.Emit(a.EventType.RoleMove);
}
};
t.prototype._init = function() {
this._isWork = !1;
x.DaZhen_NZBTG_GameData.TriggerMoveTotal++;
};
return y([ l, c("Game/Item/DaZhen_NZBTG_TriggerMove") ], t);
}(cc.Component);
n.default = _;
cc._RF.pop();
}, {
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../DaZhen_NZBTG_GameConfig": "DaZhen_NZBTG_GameConfig",
"../DaZhen_NZBTG_GameData": "DaZhen_NZBTG_GameData"
} ],
DaZhen_NZBTG_UnitShowHide: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c94262Pg2hEs6+I7EqbZXRB", "DaZhen_NZBTG_UnitShowHide");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Utils/DaZhen_NZBTG_EventUtil"), r = e("../Core/Base/DaZhen_NZBTG_BaseUnit"), x = e("../DaZhen_NZBTG_GUIConfig"), s = cc._decorator, l = s.ccclass, c = s.property, _ = s.menu, h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.type = x.ShowHideUseCase.Menu;
t.timeDelay = 0;
return t;
}
t.prototype.onLoad = function() {
e.prototype.onLoad.call(this);
};
t.prototype.listenOn = function() {
e.prototype.listenOn.call(this);
a.DaZhen_NZBTG_EventUtil.On(x.GUIEvent.ShowHideNode, this._onShowHideNode, this);
};
t.prototype.listenOff = function() {
e.prototype.listenOff.call(this);
a.DaZhen_NZBTG_EventUtil.Off(x.GUIEvent.ShowHideNode, this._onShowHideNode, this);
};
t.prototype._onShowHideNode = function(e, t) {
if (e == this.type) {
var n = this.node;
cc.Tween.stopAllByTarget(n);
n.getComponent(cc.Button) && (n.getComponent(cc.Button).enabled = t);
t ? cc.tween(n).delay(this.timeDelay).to(.5, {
scale: 1
}, {
easing: cc.easing.elasticOut
}).start() : n.scale = 0;
}
};
y([ c({
type: cc.Enum(x.ShowHideUseCase)
}) ], t.prototype, "type", void 0);
y([ c({
tooltip: "延迟 s",
min: 0
}) ], t.prototype, "timeDelay", void 0);
return y([ l, _("GUI/Unit/DaZhen_NZBTG_UnitShowHide") ], t);
}(r.default);
n.default = h;
cc._RF.pop();
}, {
"../../Utils/DaZhen_NZBTG_EventUtil": "DaZhen_NZBTG_EventUtil",
"../Core/Base/DaZhen_NZBTG_BaseUnit": "DaZhen_NZBTG_BaseUnit",
"../DaZhen_NZBTG_GUIConfig": "DaZhen_NZBTG_GUIConfig"
} ],
DaZhen_NZBTG_WAniFade: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "63f3aje3MlCwJBfas/9uS+K", "DaZhen_NZBTG_WAniFade");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Utils/DaZhen_NZBTG_MathUtil"), r = cc._decorator, x = r.ccclass, s = r.property, l = r.menu, c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._range = 50;
t._dur = .5;
t._randDelay = cc.v2(0, 0);
t._randPadding = cc.v2(0, 0);
return t;
}
t.prototype.onLoad = function() {
this._srcOpacity = this.node.opacity;
};
t.prototype.start = function() {
this._doAni();
};
t.prototype._doAni = function() {
var e = this.node, t = this._range, n = this._dur, o = a.DaZhen_NZBTG_MathUtil.Random(this._randDelay.x, this._randDelay.y), i = a.DaZhen_NZBTG_MathUtil.Random(this._randPadding.x, this._randPadding.y), y = cc.tween().by(n, {
opacity: t
}).by(n, {
opacity: -t
});
e.opacity = this._srcOpacity;
cc.tween(e).repeatForever(cc.tween().delay(o).repeat(2, y).delay(i)).start();
};
y([ s({
tooltip: "幅度",
visible: !0
}) ], t.prototype, "_range", void 0);
y([ s({
tooltip: "时长",
visible: !0
}) ], t.prototype, "_dur", void 0);
y([ s({
tooltip: "开始延时",
visible: !0
}) ], t.prototype, "_randDelay", void 0);
y([ s({
tooltip: "结束间隔",
visible: !0
}) ], t.prototype, "_randPadding", void 0);
return y([ x, l("WoodLai/DaZhen_NZBTG_WAniFade") ], t);
}(cc.Component);
n.default = c;
cc._RF.pop();
}, {
"../../Utils/DaZhen_NZBTG_MathUtil": "DaZhen_NZBTG_MathUtil"
} ],
DaZhen_NZBTG_WAniFloat: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "29689m97I1I7K3pTY4GIb5B", "DaZhen_NZBTG_WAniFloat");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a, r = e("../../Utils/DaZhen_NZBTG_MathUtil");
(function(e) {
e[e.L_R = 0] = "L_R";
e[e.T_B = 1] = "T_B";
})(a || (a = {}));
var x = cc._decorator, s = x.ccclass, l = x.property, c = x.menu, _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._dir = a.T_B;
t._range = 50;
t._dur = .5;
t._randDelay = cc.v2(0, 0);
t._randPadding = cc.v2(0, 0);
return t;
}
t.prototype.onLoad = function() {
this._srcPos = this.node.getPosition();
};
t.prototype.start = function() {
this._doAni();
};
t.prototype._doAni = function() {
var e, t = this.node, n = this._range, o = this._dur, i = r.DaZhen_NZBTG_MathUtil.Random(this._randDelay.x, this._randDelay.y), y = r.DaZhen_NZBTG_MathUtil.Random(this._randPadding.x, this._randPadding.y);
e = this._dir == a.L_R ? cc.tween().by(o, {
x: n
}).by(2 * o, {
x: -2 * n
}).by(o, {
x: n
}) : cc.tween().by(o, {
y: n
}).by(2 * o, {
y: -2 * n
}).by(o, {
y: n
});
t.setPosition(this._srcPos);
cc.tween(t).repeatForever(cc.tween().delay(i).repeat(2, e).delay(y)).start();
};
y([ l({
tooltip: "方向",
type: cc.Enum(a),
visible: !0
}) ], t.prototype, "_dir", void 0);
y([ l({
tooltip: "幅度",
visible: !0
}) ], t.prototype, "_range", void 0);
y([ l({
tooltip: "时长",
visible: !0
}) ], t.prototype, "_dur", void 0);
y([ l({
tooltip: "开始延时",
visible: !0
}) ], t.prototype, "_randDelay", void 0);
y([ l({
tooltip: "结束间隔",
visible: !0
}) ], t.prototype, "_randPadding", void 0);
return y([ s, c("WoodLai/DaZhen_NZBTG_WAniFloat") ], t);
}(cc.Component);
n.default = _;
cc._RF.pop();
}, {
"../../Utils/DaZhen_NZBTG_MathUtil": "DaZhen_NZBTG_MathUtil"
} ],
DaZhen_NZBTG_WAniRota: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e379bepX8lMf5/ISl96DJl4", "DaZhen_NZBTG_WAniRota");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Utils/DaZhen_NZBTG_MathUtil"), r = cc._decorator, x = r.ccclass, s = r.property, l = r.menu, c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._isOneDir = !1;
t._range = 50;
t._dur = .25;
t._randDelay = cc.v2(0, 0);
t._randPadding = cc.v2(0, 0);
return t;
}
t.prototype.onLoad = function() {
this._srcAngle = this.node.angle;
};
t.prototype.start = function() {
this._doAni();
};
t.prototype._doAni = function() {
var e = this.node, t = this._range, n = this._dur, o = a.DaZhen_NZBTG_MathUtil.Random(this._randDelay.x, this._randDelay.y), i = a.DaZhen_NZBTG_MathUtil.Random(this._randPadding.x, this._randPadding.y);
e.angle = this._srcAngle;
this._isOneDir ? cc.tween(e).repeatForever(cc.tween().delay(o).by(n, {
angle: t
}).delay(i)).start() : cc.tween(e).repeatForever(cc.tween().delay(o).repeat(2, cc.tween().by(n, {
angle: t
}).by(2 * n, {
angle: -2 * t
}).by(n, {
angle: t
})).delay(i)).start();
};
y([ s({
tooltip: "一个方向",
visible: !0
}) ], t.prototype, "_isOneDir", void 0);
y([ s({
tooltip: "幅度",
visible: !0
}) ], t.prototype, "_range", void 0);
y([ s({
tooltip: "时长",
visible: !0
}) ], t.prototype, "_dur", void 0);
y([ s({
tooltip: "开始延时",
visible: !0
}) ], t.prototype, "_randDelay", void 0);
y([ s({
tooltip: "结束间隔",
visible: !0
}) ], t.prototype, "_randPadding", void 0);
return y([ x, l("WoodLai/DaZhen_NZBTG_WAniRota") ], t);
}(cc.Component);
n.default = c;
cc._RF.pop();
}, {
"../../Utils/DaZhen_NZBTG_MathUtil": "DaZhen_NZBTG_MathUtil"
} ],
DaZhen_NZBTG_WAniScale: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b26ddvrGARC0J+YApapLpC/", "DaZhen_NZBTG_WAniScale");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Utils/DaZhen_NZBTG_MathUtil"), r = e("./DaZhen_NZBTG_WShenhe"), x = cc._decorator, s = x.ccclass, l = x.property, c = x.menu, _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._range = .1;
t._dur = .25;
t._randDelay = cc.v2(0, 0);
t._randPadding = cc.v2(0, 0);
return t;
}
t.prototype.onLoad = function() {
this._srcScale = this.node.scale;
};
t.prototype.start = function() {
this.getComponent(r.default) && lieyou_SdkManager.isShenhe() || this._doAni();
};
t.prototype._doAni = function() {
var e = this.node, t = this._srcScale, n = this._srcScale + this._range, o = this._dur, i = a.DaZhen_NZBTG_MathUtil.Random(this._randDelay.x, this._randDelay.y), y = a.DaZhen_NZBTG_MathUtil.Random(this._randPadding.x, this._randPadding.y);
e.scale = this._srcScale;
cc.tween(e).repeatForever(cc.tween().delay(i).repeat(2, cc.tween().to(o, {
scale: n
}).to(o, {
scale: t
})).delay(y)).start();
};
y([ l({
tooltip: "幅度",
visible: !0
}) ], t.prototype, "_range", void 0);
y([ l({
tooltip: "时长",
visible: !0
}) ], t.prototype, "_dur", void 0);
y([ l({
tooltip: "开始延时",
visible: !0
}) ], t.prototype, "_randDelay", void 0);
y([ l({
tooltip: "结束间隔",
visible: !0
}) ], t.prototype, "_randPadding", void 0);
return y([ s, c("WoodLai/DaZhen_NZBTG_WAniScale") ], t);
}(cc.Component);
n.default = _;
cc._RF.pop();
}, {
"../../Utils/DaZhen_NZBTG_MathUtil": "DaZhen_NZBTG_MathUtil",
"./DaZhen_NZBTG_WShenhe": "DaZhen_NZBTG_WShenhe"
} ],
DaZhen_NZBTG_WClickEffect: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a2c34LYKm1ErriFsRxjaNyH", "DaZhen_NZBTG_WClickEffect");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a, r = e("../../Audio/DaZhen_NZBTG_AudioName"), x = e("../../Audio/DaZhen_NZBTG_AudioU");
(function(e) {
e[e.click = 0] = "click";
})(a || (a = {}));
var s = cc._decorator, l = s.ccclass, c = s.property, _ = s.menu, h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._effect = a.click;
return t;
}
t.prototype.onLoad = function() {
this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
};
t.prototype.onDestroy = function() {
this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
};
t.prototype._onTouchEnd = function() {
var e = a[this._effect];
e = r.DaZhen_NZBTG_AudioName[e];
x.default.PlayEffect(e);
};
y([ c({
type: cc.Enum(a),
visible: !1
}) ], t.prototype, "_effect", void 0);
return y([ l, _("WoodLai/DaZhen_NZBTG_WClickEffect") ], t);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../../Audio/DaZhen_NZBTG_AudioName": "DaZhen_NZBTG_AudioName",
"../../Audio/DaZhen_NZBTG_AudioU": "DaZhen_NZBTG_AudioU"
} ],
DaZhen_NZBTG_WExchangePos: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "98e0fUaiTNN+bjkU6gbZdf/", "DaZhen_NZBTG_WExchangePos");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../Utils/DaZhen_NZBTG_CoordinateUtil"), r = cc._decorator, x = r.ccclass, s = r.property, l = r.menu, c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._target = null;
t._isOnce = !1;
return t;
}
t.prototype.onLoad = function() {
this._init();
};
t.prototype._init = function() {
if (!this._src_Pos) {
this._src_Pos = this.node.getPosition();
this._src_targetPos = this._target.getPosition();
}
};
t.prototype.exchange = function() {
if (this._target && (!this._isOnce || !this._hadExchange)) {
this._init();
var e = a.DaZhen_NZBTG_CoordinateUtil.NodeToNode(this.node, this._target.parent), t = a.DaZhen_NZBTG_CoordinateUtil.NodeToNode(this._target, this.node.parent);
this.node.setPosition(t);
this._target.setPosition(e);
this._hadExchange = !0;
}
};
t.prototype.reset = function() {
if (this._target) {
this._init();
this.node.setPosition(this._src_Pos);
this._target.setPosition(this._src_targetPos);
}
};
y([ s({
type: cc.Node,
tooltip: "交换目标",
visible: !0
}) ], t.prototype, "_target", void 0);
y([ s({
tooltip: "只交换一次",
visible: !0
}) ], t.prototype, "_isOnce", void 0);
return y([ x, l("WoodLai/DaZhen_NZBTG_WExchangePos") ], t);
}(cc.Component);
n.default = c;
cc._RF.pop();
}, {
"../../Utils/DaZhen_NZBTG_CoordinateUtil": "DaZhen_NZBTG_CoordinateUtil"
} ],
DaZhen_NZBTG_WLabel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0de9e7JzmhGdI3xYwUkALri", "DaZhen_NZBTG_WLabel");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, r = a.ccclass, x = a.property, s = a.menu, l = (a.inspector, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._label = null;
return t;
}
t.prototype.setContext = function(e) {
this.unscheduleAllCallbacks();
this._setLabel(e);
};
t.prototype.lerp = function(e, t, n, o) {
var i = this;
this.unscheduleAllCallbacks();
cc.tween(this._label.node).to(Math.min(.1, .1 * o), {
scale: 1.3
}).start();
var y = Math.floor(o / n), a = e, r = 0;
this.schedule(function() {
r++;
a = Math.floor(cc.misc.lerp(e, t, r / y));
i._setLabel(a.toString());
r == y && cc.tween(i._label.node).to(Math.min(.1, .1 * o), {
scale: 1
}).start();
}, n, y - 1);
};
t.prototype.print = function(e, t) {
var n = this;
this.unscheduleAllCallbacks();
var o = e.length, i = 0;
this.schedule(function() {
i++;
n._setLabel(e.slice(0, i));
}, t, o - 1);
};
t.prototype._setLabel = function(e) {
this._label.string = e;
};
y([ x({
type: cc.Label,
visible: !0
}) ], t.prototype, "_label", void 0);
return y([ r, s("WoodLai/DaZhen_NZBTG_WLabel") ], t);
}(cc.Component));
n.default = l;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_WShenhe: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a0975bh3Q9ArYlY9jLR9f8j", "DaZhen_NZBTG_WShenhe");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, r = a.ccclass, x = (a.property, a.menu), s = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return y([ r, x("WoodLai/DaZhen_NZBTG_WShenhe") ], t);
}(cc.Component);
n.default = s;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_WWidget: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e47dcGPtnxMEYIkKiAFgvYY", "DaZhen_NZBTG_WWidget");
var o, i, y = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
(function(e) {
e[e.Full = 0] = "Full";
e[e.Left = 1] = "Left";
e[e.Right = 2] = "Right";
e[e.Up = 3] = "Up";
e[e.Bottom = 4] = "Bottom";
})(i || (i = {}));
var r = cc._decorator, x = r.ccclass, s = r.property, l = r.menu, c = (r.inspector, 
function(e) {
y(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._type = i.Full;
return t;
}
t.prototype.onLoad = function() {
var e = this._type, t = this.node;
switch (e) {
case i.Full:
this.node.setContentSize(cc.winSize);
break;

case i.Left:
t.x += cc.view.getDesignResolutionSize().width / 2 - cc.winSize.width / 2;
break;

case i.Right:
t.x += -(cc.view.getDesignResolutionSize().width / 2 - cc.winSize.width / 2);
break;

case i.Up:
this.node.y += -(cc.view.getDesignResolutionSize().height / 2 - cc.winSize.height / 2);
break;

case i.Bottom:
this.node.y += cc.view.getDesignResolutionSize().height / 2 - cc.winSize.height / 2;
}
};
a([ s({
type: cc.Enum(i),
visible: !0
}) ], t.prototype, "_type", void 0);
return a([ x, l("WoodLai/DaZhen_NZBTG_WWidget") ], t);
}(cc.Component));
n.default = c;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_WYOrN: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "daf9b7m1JFJUZ4E3csW9cmu", "DaZhen_NZBTG_WYOrN");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), y = this && this.__decorate || function(e, t, n, o) {
var i, y = arguments.length, a = y < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (a = (y < 3 ? i(a) : y > 3 ? i(t, n, a) : i(t, n)) || a);
return y > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, r = a.ccclass, x = a.property, s = a.menu, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._nList = [];
t._yList = [];
t._status = !1;
return t;
}
Object.defineProperty(t.prototype, "status", {
get: function() {
return this._status;
},
enumerable: !1,
configurable: !0
});
t.prototype.setStatus = function(e) {
this._status = e;
this._nList.forEach(function(t) {
t.active = !e;
});
this._yList.forEach(function(t) {
t.active = e;
});
};
y([ x({
type: cc.Node,
tooltip: "false状态",
visible: !0
}) ], t.prototype, "_nList", void 0);
y([ x({
type: cc.Node,
tooltip: "true状态",
visible: !0
}) ], t.prototype, "_yList", void 0);
return y([ r, s("WoodLai/DaZhen_NZBTG_WYOrN") ], t);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
DaZhen_NZBTG_fixed_tween: [ function(e, t) {
"use strict";
cc._RF.push(t, "3be61VI8MhOapfqeZvpbBHy", "DaZhen_NZBTG_fixed_tween");
for (var n = cc.Tween, o = {
repeat: cc.repeat,
repeatForever: function(e) {
return cc.repeat(e, 1e9);
},
reverseTime: cc.reverseTime
}, i = Object.keys(o), y = function(e) {
var t = i[e];
n.prototype[t] = function() {
var e = this._actions, n = arguments[arguments.length - 1], i = arguments.length - 1;
if (n instanceof cc.Tween) n = n._union(); else if (!(n instanceof cc.Action)) {
n = e[e.length - 1];
e.length -= 1;
i += 1;
}
for (var y = [ n ], a = 0; a < i; a++) y.push(arguments[a]);
n = o[t].apply(this, y);
e.push(n);
return this;
};
}, a = 0; a < i.length; a++) y(a);
console.log("fixed-Tween");
cc._RF.pop();
}, {} ],
"DaZhen_NZBTG_polybool.min": [ function(e, t) {
"use strict";
cc._RF.push(t, "64be8xll/xOvaCclYpkWP2Z", "DaZhen_NZBTG_polybool.min");
(function t(n, o, i) {
function y(r, x) {
if (!o[r]) {
if (!n[r]) {
var s = "function" == typeof e && e;
if (!x && s) return s(r, !0);
if (a) return a(r, !0);
var l = new Error("Cannot find module '" + r + "'");
throw l.code = "MODULE_NOT_FOUND", l;
}
var c = o[r] = {
exports: {}
};
n[r][0].call(c.exports, function(e) {
return y(n[r][1][e] || e);
}, c, c.exports, t, n, o, i);
}
return o[r].exports;
}
for (var a = "function" == typeof e && e, r = 0; r < i.length; r++) y(i[r]);
return y;
})({
1: [ function(e, t) {
var n, o = e("./lib/build-log"), i = e("./lib/epsilon"), y = e("./lib/intersecter"), a = e("./lib/segment-chainer"), r = e("./lib/segment-selector"), x = e("./lib/geojson"), s = !1, l = i();
n = {
buildLog: function(e) {
!0 === e ? s = o() : !1 === e && (s = !1);
return !1 !== s && s.list;
},
epsilon: function(e) {
return l.epsilon(e);
},
segments: function(e) {
var t = y(!0, l, s);
e.regions.forEach(t.addRegion);
return {
segments: t.calculate(e.inverted),
inverted: e.inverted
};
},
combine: function(e, t) {
return {
combined: y(!1, l, s).calculate(e.segments, e.inverted, t.segments, t.inverted),
inverted1: e.inverted,
inverted2: t.inverted
};
},
selectUnion: function(e) {
return {
segments: r.union(e.combined, s),
inverted: e.inverted1 || e.inverted2
};
},
selectIntersect: function(e) {
return {
segments: r.intersect(e.combined, s),
inverted: e.inverted1 && e.inverted2
};
},
selectDifference: function(e) {
return {
segments: r.difference(e.combined, s),
inverted: e.inverted1 && !e.inverted2
};
},
selectDifferenceRev: function(e) {
return {
segments: r.differenceRev(e.combined, s),
inverted: !e.inverted1 && e.inverted2
};
},
selectXor: function(e) {
return {
segments: r.xor(e.combined, s),
inverted: e.inverted1 !== e.inverted2
};
},
polygon: function(e) {
return {
regions: a(e.segments, l, s),
inverted: e.inverted
};
},
polygonFromGeoJSON: function(e) {
return x.toPolygon(n, e);
},
polygonToGeoJSON: function(e) {
return x.fromPolygon(n, l, e);
},
union: function(e, t) {
return c(e, t, n.selectUnion);
},
intersect: function(e, t) {
return c(e, t, n.selectIntersect);
},
difference: function(e, t) {
return c(e, t, n.selectDifference);
},
differenceRev: function(e, t) {
return c(e, t, n.selectDifferenceRev);
},
xor: function(e, t) {
return c(e, t, n.selectXor);
}
};
function c(e, t, o) {
var i = n.segments(e), y = n.segments(t), a = o(n.combine(i, y));
return n.polygon(a);
}
"object" == typeof window && (window.PolyBool = n);
t.exports = n;
}, {
"./lib/build-log": 2,
"./lib/epsilon": 3,
"./lib/geojson": 4,
"./lib/intersecter": 5,
"./lib/segment-chainer": 7,
"./lib/segment-selector": 8
} ],
2: [ function(e, t) {
t.exports = function() {
var e, t = 0, n = !1;
function o(t, n) {
e.list.push({
type: t,
data: n ? JSON.parse(JSON.stringify(n)) : void 0
});
return e;
}
return e = {
list: [],
segmentId: function() {
return t++;
},
checkIntersection: function(e, t) {
return o("check", {
seg1: e,
seg2: t
});
},
segmentChop: function(e, t) {
o("div_seg", {
seg: e,
pt: t
});
return o("chop", {
seg: e,
pt: t
});
},
statusRemove: function(e) {
return o("pop_seg", {
seg: e
});
},
segmentUpdate: function(e) {
return o("seg_update", {
seg: e
});
},
segmentNew: function(e, t) {
return o("new_seg", {
seg: e,
primary: t
});
},
segmentRemove: function(e) {
return o("rem_seg", {
seg: e
});
},
tempStatus: function(e, t, n) {
return o("temp_status", {
seg: e,
above: t,
below: n
});
},
rewind: function(e) {
return o("rewind", {
seg: e
});
},
status: function(e, t, n) {
return o("status", {
seg: e,
above: t,
below: n
});
},
vert: function(t) {
if (t === n) return e;
n = t;
return o("vert", {
x: t
});
},
log: function(e) {
"string" != typeof e && (e = JSON.stringify(e, !1, "  "));
return o("log", {
txt: e
});
},
reset: function() {
return o("reset");
},
selected: function(e) {
return o("selected", {
segs: e
});
},
chainStart: function(e) {
return o("chain_start", {
seg: e
});
},
chainRemoveHead: function(e, t) {
return o("chain_rem_head", {
index: e,
pt: t
});
},
chainRemoveTail: function(e, t) {
return o("chain_rem_tail", {
index: e,
pt: t
});
},
chainNew: function(e, t) {
return o("chain_new", {
pt1: e,
pt2: t
});
},
chainMatch: function(e) {
return o("chain_match", {
index: e
});
},
chainClose: function(e) {
return o("chain_close", {
index: e
});
},
chainAddHead: function(e, t) {
return o("chain_add_head", {
index: e,
pt: t
});
},
chainAddTail: function(e, t) {
return o("chain_add_tail", {
index: e,
pt: t
});
},
chainConnect: function(e, t) {
return o("chain_con", {
index1: e,
index2: t
});
},
chainReverse: function(e) {
return o("chain_rev", {
index: e
});
},
chainJoin: function(e, t) {
return o("chain_join", {
index1: e,
index2: t
});
},
done: function() {
return o("done");
}
};
};
}, {} ],
3: [ function(e, t) {
t.exports = function(e) {
"number" != typeof e && (e = 1e-10);
var t = {
epsilon: function(t) {
"number" == typeof t && (e = t);
return e;
},
pointAboveOrOnLine: function(t, n, o) {
var i = n[0], y = n[1], a = o[0], r = o[1], x = t[0];
return (a - i) * (t[1] - y) - (r - y) * (x - i) >= -e;
},
pointBetween: function(t, n, o) {
var i = t[1] - n[1], y = o[0] - n[0], a = t[0] - n[0], r = o[1] - n[1], x = a * y + i * r;
return !(x < e || x - (y * y + r * r) > -e);
},
pointsSameX: function(t, n) {
return Math.abs(t[0] - n[0]) < e;
},
pointsSameY: function(t, n) {
return Math.abs(t[1] - n[1]) < e;
},
pointsSame: function(e, n) {
return t.pointsSameX(e, n) && t.pointsSameY(e, n);
},
pointsCompare: function(e, n) {
return t.pointsSameX(e, n) ? t.pointsSameY(e, n) ? 0 : e[1] < n[1] ? -1 : 1 : e[0] < n[0] ? -1 : 1;
},
pointsCollinear: function(t, n, o) {
var i = t[0] - n[0], y = t[1] - n[1], a = n[0] - o[0], r = n[1] - o[1];
return Math.abs(i * r - a * y) < e;
},
linesIntersect: function(t, n, o, i) {
var y = n[0] - t[0], a = n[1] - t[1], r = i[0] - o[0], x = i[1] - o[1], s = y * x - a * r;
if (Math.abs(s) < e) return !1;
var l = t[0] - o[0], c = t[1] - o[1], _ = (r * c - x * l) / s, h = (y * c - a * l) / s, u = {
alongA: 0,
alongB: 0,
pt: [ t[0] + _ * y, t[1] + _ * a ]
};
u.alongA = _ <= -e ? -2 : _ < e ? -1 : _ - 1 <= -e ? 0 : _ - 1 < e ? 1 : 2;
u.alongB = h <= -e ? -2 : h < e ? -1 : h - 1 <= -e ? 0 : h - 1 < e ? 1 : 2;
return u;
},
pointInsideRegion: function(t, n) {
for (var o = t[0], i = t[1], y = n[n.length - 1][0], a = n[n.length - 1][1], r = !1, x = 0; x < n.length; x++) {
var s = n[x][0], l = n[x][1];
l - i > e != a - i > e && (y - s) * (i - l) / (a - l) + s - o > e && (r = !r);
y = s;
a = l;
}
return r;
}
};
return t;
};
}, {} ],
4: [ function(e, t) {
var n = {
toPolygon: function(e, t) {
function n(t) {
if (t.length <= 0) return e.segments({
inverted: !1,
regions: []
});
function n(t) {
var n = t.slice(0, t.length - 1);
return e.segments({
inverted: !1,
regions: [ n ]
});
}
for (var o = n(t[0]), i = 1; i < t.length; i++) o = e.selectDifference(e.combine(o, n(t[i])));
return o;
}
if ("Polygon" === t.type) return e.polygon(n(t.coordinates));
if ("MultiPolygon" === t.type) {
for (var o = e.segments({
inverted: !1,
regions: []
}), i = 0; i < t.coordinates.length; i++) o = e.selectUnion(e.combine(o, n(t.coordinates[i])));
return e.polygon(o);
}
throw new Error("PolyBool: Cannot convert GeoJSON object to PolyBool polygon");
},
fromPolygon: function(e, t, n) {
n = e.polygon(e.segments(n));
function o(e, n) {
return t.pointInsideRegion([ .5 * (e[0][0] + e[1][0]), .5 * (e[0][1] + e[1][1]) ], n);
}
function i(e) {
return {
region: e,
children: []
};
}
var y = i(null);
function a(e, t) {
for (var n = 0; n < e.children.length; n++) if (o(t, (r = e.children[n]).region)) {
a(r, t);
return;
}
var y = i(t);
for (n = 0; n < e.children.length; n++) {
var r;
if (o((r = e.children[n]).region, t)) {
y.children.push(r);
e.children.splice(n, 1);
n--;
}
}
e.children.push(y);
}
for (var r = 0; r < n.regions.length; r++) {
var x = n.regions[r];
x.length < 3 || a(y, x);
}
function s(e, t) {
for (var n = 0, o = e[e.length - 1][0], i = e[e.length - 1][1], y = [], a = 0; a < e.length; a++) {
var r = e[a][0], x = e[a][1];
y.push([ r, x ]);
n += x * o - r * i;
o = r;
i = x;
}
n < 0 !== t && y.reverse();
y.push([ y[0][0], y[0][1] ]);
return y;
}
var l = [];
function c(e) {
var t = [ s(e.region, !1) ];
l.push(t);
for (var n = 0; n < e.children.length; n++) t.push(_(e.children[n]));
}
function _(e) {
for (var t = 0; t < e.children.length; t++) c(e.children[t]);
return s(e.region, !0);
}
for (r = 0; r < y.children.length; r++) c(y.children[r]);
return l.length <= 0 ? {
type: "Polygon",
coordinates: []
} : 1 == l.length ? {
type: "Polygon",
coordinates: l[0]
} : {
type: "MultiPolygon",
coordinates: l
};
}
};
t.exports = n;
}, {} ],
5: [ function(e, t) {
var n = e("./linked-list");
t.exports = function(e, t, o) {
function i(e, t, n) {
return {
id: o ? o.segmentId() : -1,
start: e,
end: t,
myFill: {
above: n.myFill.above,
below: n.myFill.below
},
otherFill: null
};
}
var y = n.create();
function a(e, n, o, i, y, a) {
var r = t.pointsCompare(n, y);
return 0 !== r ? r : t.pointsSame(o, a) ? 0 : e !== i ? e ? 1 : -1 : t.pointAboveOrOnLine(o, i ? y : a, i ? a : y) ? 1 : -1;
}
function r(e, t) {
y.insertBefore(e, function(n) {
return a(e.isStart, e.pt, t, n.isStart, n.pt, n.other.pt) < 0;
});
}
function x(e, t) {
var o = n.node({
isStart: !0,
pt: e.start,
seg: e,
primary: t,
other: null,
status: null
});
r(o, e.end);
return o;
}
function s(e, t, o) {
var i = n.node({
isStart: !1,
pt: t.end,
seg: t,
primary: o,
other: e,
status: null
});
e.other = i;
r(i, e.pt);
}
function l(e, t) {
var n = x(e, t);
s(n, e, t);
return n;
}
function c(e, t) {
o && o.segmentChop(e.seg, t);
e.other.remove();
e.seg.end = t;
e.other.pt = t;
r(e.other, e.pt);
}
function _(e, t) {
var n = i(t, e.seg.end, e.seg);
c(e, t);
return l(n, e.primary);
}
function h(i, a) {
var r = n.create();
function x(e, n) {
var o = e.seg.start, i = e.seg.end, y = n.seg.start, a = n.seg.end;
return t.pointsCollinear(o, y, a) ? t.pointsCollinear(i, y, a) ? 1 : t.pointAboveOrOnLine(i, y, a) ? 1 : -1 : t.pointAboveOrOnLine(o, y, a) ? 1 : -1;
}
function s(e) {
return r.findTransition(function(t) {
return x(e, t.ev) > 0;
});
}
function l(e, n) {
var i = e.seg, y = n.seg, a = i.start, r = i.end, x = y.start, s = y.end;
o && o.checkIntersection(i, y);
var l = t.linesIntersect(a, r, x, s);
if (!1 === l) {
if (!t.pointsCollinear(a, r, x)) return !1;
if (t.pointsSame(a, s) || t.pointsSame(r, x)) return !1;
var c = t.pointsSame(a, x), h = t.pointsSame(r, s);
if (c && h) return n;
var u = !c && t.pointBetween(a, x, s), p = !h && t.pointBetween(r, x, s);
if (c) {
p ? _(n, r) : _(e, s);
return n;
}
if (u) {
h || (p ? _(n, r) : _(e, s));
_(n, a);
}
} else {
0 === l.alongA && (-1 === l.alongB ? _(e, x) : 0 === l.alongB ? _(e, l.pt) : 1 === l.alongB && _(e, s));
0 === l.alongB && (-1 === l.alongA ? _(n, a) : 0 === l.alongA ? _(n, l.pt) : 1 === l.alongA && _(n, r));
}
return !1;
}
for (var c = []; !y.isEmpty(); ) {
var h = y.getHead();
o && o.vert(h.pt[0]);
if (h.isStart) {
o && o.segmentNew(h.seg, h.primary);
var u = s(h), p = u.before ? u.before.ev : null, f = u.after ? u.after.ev : null;
o && o.tempStatus(h.seg, !!p && p.seg, !!f && f.seg);
var d = function() {
if (p) {
var e = l(h, p);
if (e) return e;
}
return !!f && l(h, f);
}();
if (d) {
e ? (Z = null === h.seg.myFill.below || h.seg.myFill.above !== h.seg.myFill.below) && (d.seg.myFill.above = !d.seg.myFill.above) : d.seg.otherFill = h.seg.myFill;
o && o.segmentUpdate(d.seg);
h.other.remove();
h.remove();
}
if (y.getHead() !== h) {
o && o.rewind(h.seg);
continue;
}
if (e) {
var Z;
Z = null === h.seg.myFill.below || h.seg.myFill.above !== h.seg.myFill.below;
h.seg.myFill.below = f ? f.seg.myFill.above : i;
h.seg.myFill.above = Z ? !h.seg.myFill.below : h.seg.myFill.below;
} else if (null === h.seg.otherFill) {
var g;
g = f ? h.primary === f.primary ? f.seg.otherFill.above : f.seg.myFill.above : h.primary ? a : i;
h.seg.otherFill = {
above: g,
below: g
};
}
o && o.status(h.seg, !!p && p.seg, !!f && f.seg);
h.other.status = u.insert(n.node({
ev: h
}));
} else {
var v = h.status;
if (null === v) throw new Error("PolyBool: Zero-length segment detected; your epsilon is probably too small or too large");
r.exists(v.prev) && r.exists(v.next) && l(v.prev.ev, v.next.ev);
o && o.statusRemove(v.ev.seg);
v.remove();
if (!h.primary) {
var T = h.seg.myFill;
h.seg.myFill = h.seg.otherFill;
h.seg.otherFill = T;
}
c.push(h.seg);
}
y.getHead().remove();
}
o && o.done();
return c;
}
return e ? {
addRegion: function(e) {
for (var n, i, y, a = e[e.length - 1], r = 0; r < e.length; r++) {
n = a;
a = e[r];
var x = t.pointsCompare(n, a);
0 !== x && l((i = x < 0 ? n : a, y = x < 0 ? a : n, {
id: o ? o.segmentId() : -1,
start: i,
end: y,
myFill: {
above: null,
below: null
},
otherFill: null
}), !0);
}
},
calculate: function(e) {
return h(e, !1);
}
} : {
calculate: function(e, t, n, o) {
e.forEach(function(e) {
l(i(e.start, e.end, e), !0);
});
n.forEach(function(e) {
l(i(e.start, e.end, e), !1);
});
return h(t, o);
}
};
};
}, {
"./linked-list": 6
} ],
6: [ function(e, t) {
t.exports = {
create: function() {
var e = {
root: {
root: !0,
next: null
},
exists: function(t) {
return null !== t && t !== e.root;
},
isEmpty: function() {
return null === e.root.next;
},
getHead: function() {
return e.root.next;
},
insertBefore: function(t, n) {
for (var o = e.root, i = e.root.next; null !== i; ) {
if (n(i)) {
t.prev = i.prev;
t.next = i;
i.prev.next = t;
i.prev = t;
return;
}
o = i;
i = i.next;
}
o.next = t;
t.prev = o;
t.next = null;
},
findTransition: function(t) {
for (var n = e.root, o = e.root.next; null !== o && !t(o); ) {
n = o;
o = o.next;
}
return {
before: n === e.root ? null : n,
after: o,
insert: function(e) {
e.prev = n;
e.next = o;
n.next = e;
null !== o && (o.prev = e);
return e;
}
};
}
};
return e;
},
node: function(e) {
e.prev = null;
e.next = null;
e.remove = function() {
e.prev.next = e.next;
e.next && (e.next.prev = e.prev);
e.prev = null;
e.next = null;
};
return e;
}
};
}, {} ],
7: [ function(e, t) {
t.exports = function(e, t, n) {
var o = [], i = [];
e.forEach(function(e) {
var y = e.start, a = e.end;
if (t.pointsSame(y, a)) console.warn("PolyBool: Warning: Zero-length segment detected; your epsilon is probably too small or too large"); else {
n && n.chainStart(e);
for (var r = {
index: 0,
matches_head: !1,
matches_pt1: !1
}, x = {
index: 0,
matches_head: !1,
matches_pt1: !1
}, s = r, l = 0; l < o.length; l++) {
var c = (g = o[l])[0], _ = (g[1], g[g.length - 1]);
g[g.length - 2];
if (t.pointsSame(c, y)) {
if (D(l, !0, !0)) break;
} else if (t.pointsSame(c, a)) {
if (D(l, !0, !1)) break;
} else if (t.pointsSame(_, y)) {
if (D(l, !1, !0)) break;
} else if (t.pointsSame(_, a) && D(l, !1, !1)) break;
}
if (s !== r) if (s !== x) {
var h = r.index, u = x.index;
n && n.chainConnect(h, u);
var p = o[h].length < o[u].length;
if (r.matches_head) if (x.matches_head) if (p) {
N(h);
B(h, u);
} else {
N(u);
B(u, h);
} else B(u, h); else if (x.matches_head) B(h, u); else if (p) {
N(h);
B(u, h);
} else {
N(u);
B(h, u);
}
} else {
n && n.chainMatch(r.index);
var f = r.index, d = r.matches_pt1 ? a : y, Z = r.matches_head, g = o[f], v = Z ? g[0] : g[g.length - 1], T = Z ? g[1] : g[g.length - 2], m = Z ? g[g.length - 1] : g[0], G = Z ? g[g.length - 2] : g[1];
if (t.pointsCollinear(T, v, d)) {
if (Z) {
n && n.chainRemoveHead(r.index, d);
g.shift();
} else {
n && n.chainRemoveTail(r.index, d);
g.pop();
}
v = T;
}
if (t.pointsSame(m, d)) {
o.splice(f, 1);
if (t.pointsCollinear(G, m, v)) if (Z) {
n && n.chainRemoveTail(r.index, v);
g.pop();
} else {
n && n.chainRemoveHead(r.index, v);
g.shift();
}
n && n.chainClose(r.index);
i.push(g);
return;
}
if (Z) {
n && n.chainAddHead(r.index, d);
g.unshift(d);
} else {
n && n.chainAddTail(r.index, d);
g.push(d);
}
} else {
o.push([ y, a ]);
n && n.chainNew(y, a);
}
}
function D(e, t, n) {
s.index = e;
s.matches_head = t;
s.matches_pt1 = n;
if (s === r) {
s = x;
return !1;
}
s = null;
return !0;
}
function N(e) {
n && n.chainReverse(e);
o[e].reverse();
}
function B(e, i) {
var y = o[e], a = o[i], r = y[y.length - 1], x = y[y.length - 2], s = a[0], l = a[1];
if (t.pointsCollinear(x, r, s)) {
n && n.chainRemoveTail(e, r);
y.pop();
r = x;
}
if (t.pointsCollinear(r, s, l)) {
n && n.chainRemoveHead(i, s);
a.shift();
}
n && n.chainJoin(e, i);
o[e] = y.concat(a);
o.splice(i, 1);
}
});
return i;
};
}, {} ],
8: [ function(e, t) {
function n(e, t, n) {
var o = [];
e.forEach(function(e) {
var i = (e.myFill.above ? 8 : 0) + (e.myFill.below ? 4 : 0) + (e.otherFill && e.otherFill.above ? 2 : 0) + (e.otherFill && e.otherFill.below ? 1 : 0);
0 !== t[i] && o.push({
id: n ? n.segmentId() : -1,
start: e.start,
end: e.end,
myFill: {
above: 1 === t[i],
below: 2 === t[i]
},
otherFill: null
});
});
n && n.selected(o);
return o;
}
var o = {
union: function(e, t) {
return n(e, [ 0, 2, 1, 0, 2, 2, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0 ], t);
},
intersect: function(e, t) {
return n(e, [ 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 1, 0, 2, 1, 0 ], t);
},
difference: function(e, t) {
return n(e, [ 0, 0, 0, 0, 2, 0, 2, 0, 1, 1, 0, 0, 0, 1, 2, 0 ], t);
},
differenceRev: function(e, t) {
return n(e, [ 0, 2, 1, 0, 0, 0, 1, 1, 0, 2, 0, 2, 0, 0, 0, 0 ], t);
},
xor: function(e, t) {
return n(e, [ 0, 2, 1, 0, 2, 0, 0, 1, 1, 0, 0, 2, 0, 1, 2, 0 ], t);
}
};
t.exports = o;
}, {} ]
}, {}, [ 1 ]);
console.log("polybool.min");
cc._RF.pop();
}, {
"./lib/build-log": void 0,
"./lib/epsilon": void 0,
"./lib/geojson": void 0,
"./lib/intersecter": void 0,
"./lib/segment-chainer": void 0,
"./lib/segment-selector": void 0,
"./linked-list": void 0
} ],
DaZhen_NZBTG_woodlai: [ function(e, t) {
"use strict";
cc._RF.push(t, "a6c98oOAcZAp7tzex5+qJg7", "DaZhen_NZBTG_woodlai");
cc._RF.pop();
}, {} ]
}, {}, [ "DaZhen_NZBTG_AudioName", "DaZhen_NZBTG_AudioU", "DaZhen_NZBTG_AudioConfig", "DaZhen_NZBTG_Config", "DaZhen_NZBTG_Constant", "DaZhen_NZBTG_LevelNormalConfig", "DaZhen_NZBTG_PrefabConfig", "DaZhen_NZBTG_SkinConfig", "DaZhen_NZBTG_TextureConfig", "DaZhen_NZBTG_AssetsNS", "DaZhen_NZBTG_Data", "DaZhen_NZBTG_DataConfig", "DaZhen_NZBTG_DataStruct", "DaZhen_NZBTG_LevelNS", "DaZhen_NZBTG_SettingNS", "DaZhen_NZBTG_SkinNS", "DaZhen_NZBTG_AssetAni", "DaZhen_NZBTG_PlaneAni", "DaZhen_NZBTG_Assets", "DaZhen_NZBTG_BaseBlockInput", "DaZhen_NZBTG_BasePanel", "DaZhen_NZBTG_BaseToast", "DaZhen_NZBTG_BaseTransition", "DaZhen_NZBTG_BaseUI", "DaZhen_NZBTG_BaseUnit", "DaZhen_NZBTG_BaseWaiting", "DaZhen_NZBTG_IGUI", "DaZhen_NZBTG_GUI", "DaZhen_NZBTG_GUIConfig", "DaZhen_NZBTG_GUIConst", "DaZhen_NZBTG_GUIStruct", "DaZhen_NZBTG_EffWin", "DaZhen_NZBTG_WAniFade", "DaZhen_NZBTG_WAniFloat", "DaZhen_NZBTG_WAniRota", "DaZhen_NZBTG_WAniScale", "DaZhen_NZBTG_WClickEffect", "DaZhen_NZBTG_WExchangePos", "DaZhen_NZBTG_WLabel", "DaZhen_NZBTG_WShenhe", "DaZhen_NZBTG_WWidget", "DaZhen_NZBTG_WYOrN", "DaZhen_NZBTG_PanelEnergy", "DaZhen_NZBTG_PanelEnergyLimitless", "DaZhen_NZBTG_PanelFail", "DaZhen_NZBTG_PanelFailTt", "DaZhen_NZBTG_PanelLevelSelect", "DaZhen_NZBTG_PanelLuPingShare", "DaZhen_NZBTG_PanelMenu", "DaZhen_NZBTG_PanelMessage", "DaZhen_NZBTG_PanelSetting", "DaZhen_NZBTG_PanelSkin", "DaZhen_NZBTG_PanelSkinTry", "DaZhen_NZBTG_PanelSkinUnlock", "DaZhen_NZBTG_PanelWin", "DaZhen_NZBTG_PanelWinTt", "DaZhen_NZBTG_SpineRole", "DaZhen_NZBTG_LevelSelectUnit", "DaZhen_NZBTG_SkinUnit", "DaZhen_NZBTG_UnitShowHide", "DaZhen_NZBTG_Camera", "DaZhen_NZBTG_Game", "DaZhen_NZBTG_GameConfig", "DaZhen_NZBTG_GameConst", "DaZhen_NZBTG_GameData", "DaZhen_NZBTG_GameSetting", "DaZhen_NZBTG_GameStruct", "DaZhen_NZBTG_Role", "DaZhen_NZBTG_RoleSM", "DaZhen_NZBTG_RoleSpine", "DaZhen_NZBTG_Hand", "DaZhen_NZBTG_AttributeAniBase", "DaZhen_NZBTG_AttributeAniMove", "DaZhen_NZBTG_AttributeAniRota", "DaZhen_NZBTG_AttributeAniScale", "DaZhen_NZBTG_AttributeAniSwing", "DaZhen_NZBTG_AttributeAniTouchMove", "DaZhen_NZBTG_AttributeFakeStatic", "DaZhen_NZBTG_AttributeSize", "DaZhen_NZBTG_AttributeStyle", "DaZhen_NZBTG_ControlTarget", "DaZhen_NZBTG_ControllerUD", "DaZhen_NZBTG_DoorLock", "DaZhen_NZBTG_FinishTarget", "DaZhen_NZBTG_Floor", "DaZhen_NZBTG_FloorCut", "DaZhen_NZBTG_Help", "DaZhen_NZBTG_PickKey", "DaZhen_NZBTG_RoleWin", "DaZhen_NZBTG_ToolBounce", "DaZhen_NZBTG_TriggerMove", "DaZhen_NZBTG_Debug", "DaZhen_NZBTG_Edit", "DaZhen_NZBTG_LevelData", "DaZhen_NZBTG_Main", "DaZhen_NZBTG_Res", "DaZhen_NZBTG_PolyBoolUtil", "DaZhen_NZBTG_fixed_tween", "DaZhen_NZBTG_polybool.min", "DaZhen_NZBTG_woodlai", "DaZhen_NZBTG_Sdk", "DaZhen_NZBTG_SdkConfig", "DaZhen_NZBTG_AdapterSdk", "DaZhen_NZBTG_BannerClick_mini", "DaZhen_NZBTG_BannerNative_mini", "DaZhen_NZBTG_BaseSdkE", "DaZhen_NZBTG_BtnAge", "DaZhen_NZBTG_BtnAppBox", "DaZhen_NZBTG_BtnLuPing", "DaZhen_NZBTG_BtnMoreGameSide", "DaZhen_NZBTG_BtnMoreGame_oppo", "DaZhen_NZBTG_BtnMoreGame_vivo", "DaZhen_NZBTG_BtnYHXY", "DaZhen_NZBTG_BtnYSZC", "DaZhen_NZBTG_EPlatform", "DaZhen_NZBTG_EPlatformMulti", "DaZhen_NZBTG_IconNative_mini", "DaZhen_NZBTG_TestBanner", "DaZhen_NZBTG_BinaryTree", "DaZhen_NZBTG_LimitList", "DaZhen_NZBTG_LinkList", "DaZhen_NZBTG_Queue", "DaZhen_NZBTG_Stack", "DaZhen_NZBTG_Struct", "DaZhen_NZBTG_SubGameUtil", "DaZhen_NZBTG_ArrayUtil", "DaZhen_NZBTG_CoordinateUtil", "DaZhen_NZBTG_CountUtil", "DaZhen_NZBTG_DateUtil", "DaZhen_NZBTG_EventUtil", "DaZhen_NZBTG_HttpUtil", "DaZhen_NZBTG_LoadUtil", "DaZhen_NZBTG_LogUtil", "DaZhen_NZBTG_MathUtil", "DaZhen_NZBTG_PromiseUtil", "DaZhen_NZBTG_SpineUtil", "DaZhen_NZBTG_StorageUtil", "DaZhen_NZBTG_StringUtil" ]);