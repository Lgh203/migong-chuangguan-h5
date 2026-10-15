window.__require = function e(t, o, n) {
function i(a, c) {
if (!o[a]) {
if (!t[a]) {
var s = a.split("/");
s = s[s.length - 1];
if (!t[s]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = s;
}
var u = o[a] = {
exports: {}
};
t[a][0].call(u.exports, function(e) {
return i(t[a][1][e] || e);
}, u, u.exports, e, t, o, n);
}
return o[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
return i;
}({
G1_BP_AniTween: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c3d664ePVFJyrUGwVOlxAa6", "G1_BP_AniTween");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, l = (a.menu, function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.ani = null;
t.progress = 0;
t.tween = null;
return t;
}
t.prototype.play = function(e) {
var t = this;
void 0 === e && (e = {});
var o = e.time, n = e.onEnd;
this.tween && this.tween.stop();
var i = 1 - this.progress, r = (null != o ? o : this.ani.defaultClip.duration) * i;
this.ani.play();
this.tween = cc.tween(this).to(r, {
progress: 1
}, {
progress: function(e, o, n, i) {
var r = e + (o - e) * i;
t.ani.setCurrentTime(t.ani.defaultClip.duration * r);
return r;
}
}).call(function() {
t.tween = null;
n && n();
}).start();
};
t.prototype.reverse = function(e) {
var t = this;
void 0 === e && (e = {});
var o = e.time, n = e.onEnd;
this.tween && this.tween.stop();
var i = this.progress, r = (null != o ? o : this.ani.defaultClip.duration) * i;
this.ani.play();
this.ani.pause();
this.tween = cc.tween(this).to(r, {
progress: 0
}, {
progress: function(e, o, n, i) {
var r = e + (o - e) * i;
t.ani.setCurrentTime(t.ani.defaultClip.duration * r);
return r;
}
}).call(function() {
t.tween = null;
n && n();
}).start();
};
r([ s(cc.Animation) ], t.prototype, "ani", void 0);
return r([ c ], t);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {} ],
G1_BP_BasePlatform: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c3d66ovw0pA2JYgVZp2b1HA", "G1_BP_BasePlatform");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.BasePlatform = void 0;
var n = function() {
function e() {}
e.prototype.onDestroy = function() {};
return e;
}();
o.BasePlatform = n;
cc._RF.pop();
}, {} ],
G1_BP_ButtonScale: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c3d66tzvXVH/oWT68jJbYjL", "G1_BP_ButtonScale");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, a.menu, function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
cc.tween(this.node).to(1, {
scale: 1.05
}).to(1, {
scale: .95
}).union().repeatForever().start();
};
return r([ c ], t);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
G1_BP_Common: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c3d66NKS35PwawYdT7EWwno", "G1_BP_Common");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
s(n.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(n.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
e(t);
})).then(a, c);
var t;
}
s((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Common = void 0;
var r = e("./G1_BP_ServerTime");
(function(e) {
e.showBottom = function() {
"tt" != lieyou_SdkManager.getSysPlatformName() && ("wx" == lieyou_SdkManager.getSysPlatformName() ? (t(), 
lieyou_SdkManager.showBannerByBottom({
scale: .8
})) : lieyou_SdkManager.showBannerByBottom());
};
function t() {
return cc.winSize.height / cc.winSize.width > 2;
}
e.isLongPhone = t;
e.showSpotByPause = function(e) {
lieyou_SdkManager.setSpotReward && lieyou_SdkManager.setSpotReward(function(t) {
t && e && e();
lieyou_SdkManager.removeSpotReward();
});
lieyou_SdkManager.showSpotByPause();
};
e.showSpotByFinish = function(e) {
lieyou_SdkManager.setSpotReward && lieyou_SdkManager.setSpotReward(function(t) {
t && e && e();
lieyou_SdkManager.removeSpotReward();
});
lieyou_SdkManager.showSpotByFinish();
};
e.showVideo = function(t) {
if (o()) {
e.delay().then(function() {
t.success && t.success({
type: 2
});
Userdefault.setDataForKey("shareOrVideoCountDaily", Userdefault.getIntForKey("shareOrVideoCountDaily", 0) + 1);
cc.game.emit("shareOrVideoSuccess");
t.completed && t.completed();
});
return 2;
}
if ("wx" != lieyou_SdkManager.getSysPlatformName() || t.justVideo) {
PPSDK.sdkHelper.shareOrVideoCallback({
success: function() {
t.success && t.success({
type: 2
});
t.completed && t.completed();
},
fail: function() {
t.fail ? t.fail() : PPSDK.showToast("视频未完播");
t.completed && t.completed();
},
notExistCall: function() {
t.fail ? t.fail() : PPSDK.showToast("暂无视频");
t.completed && t.completed();
}
});
return 2;
}
return lieyou_SdkManager.doShareOrVideo({
success: function(e) {
t.success && t.success(e);
},
fail: t.fail,
complete: t.completed
});
};
e.share = function(e) {
lieyou_SdkManager.shareTo({
location: e.location,
isInvite: e.type,
complete: function() {
e.success && e.success();
},
fail: e.fail
});
};
e.setButtonMusic = function(e, t) {
cc.Button.prototype._onTouchBegan = function(o) {
var n;
if (this.interactable && this.enabledInHierarchy) {
this._pressed = !0;
var i = null === (n = null == this ? void 0 : this.node) || void 0 === n ? void 0 : n.name;
if (i) if (i.indexOf("$") >= 0) {
var r = i.substring(i.indexOf("$") + 1);
r && PPSDK.playSfx(r, e);
} else i.indexOf("!") >= 0 || PPSDK.playSfx(t, e); else PPSDK.playSfx(t, e);
this._updateState();
o.stopPropagation();
}
};
};
e.formatTime = function(e, t) {
void 0 === t && (t = !1);
var o = e / 1e3, n = 0, i = 0;
if (o > 60) {
n = o / 60;
o %= 60;
if (n > 60 && t) {
i = n / 60;
n %= 60;
}
}
var r = "";
t && (r += PPSDK.utils.padding(Math.floor(i)) + ":");
return r + (PPSDK.utils.padding(Math.floor(n)) + ":") + PPSDK.utils.padding(Math.floor(o));
};
e.formatDate = function(e) {
var t = new Date(e), o = t.getFullYear(), n = t.getMonth() + 1, i = t.getDate();
return o + "/" + PPSDK.utils.padding(n, 2) + "/" + PPSDK.utils.padding(i, 2);
};
e.getWeightIndex = function(e) {
var t = 0;
e.forEach(function(e) {
t += e;
});
for (var o = Math.random() * t, n = 0, i = 0; i < e.length; i++) if (o < (n += e[i])) return i;
return e.length - 1;
};
e.secretDebug = !1;
function o() {
return e.secretDebug || !1;
}
e.isDebug = o;
e.isPayDebug = function() {
return o();
};
e.vibrate = function(e) {
void 0 === e && (e = !1);
PPSDK.settingStorage.vibrateState && ("wx" == lieyou_SdkManager.getSysPlatformName() ? window.wx && window.wx.vibrateShort({
type: e ? "heavy" : "light"
}) : PPSDK.vibrate(e));
};
e.getLoginData = function() {
if ("native" == lieyou_SdkManager.getSysPlatformName()) {
var e = "{}";
if (e && "string" == typeof e) try {
if ((e = JSON.parse(e)).data && 200 == e.code) return e.data;
} catch (e) {
return {};
}
}
return {};
};
e.delay = function(e, t) {
void 0 === e && (e = 0);
return n(this, void 0, void 0, function() {
return i(this, function() {
return [ 2, new Promise(function(o) {
t ? t.scheduleOnce(function() {
o();
}, e) : cc.Canvas.instance.scheduleOnce(function() {
o();
}, e);
}) ];
});
});
};
e.uniformScale = function(e, t, o) {
if (e && e.spriteFrame) {
var n = e.spriteFrame.getOriginalSize(), i = n.width, r = n.height, a = i / t, c = r / o;
if (a >= c) {
e.node.width = i / a;
e.node.height = r / a;
} else {
e.node.width = i / c;
e.node.height = r / c;
}
}
};
e.getNow = function() {
return r.default.getServerTime();
};
e.timeToDate = function(e) {
var t = new Date(e);
return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
};
e.tiemToDateDetail = function(e) {
var t = new Date(e);
return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + " " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
};
e.getSetting = function(e) {
return "undefined" == typeof wx ? Promise.reject() : new Promise(function(t, o) {
var n = wx.getSetting;
n ? n({
success: function(n) {
console.log("getSetting success:", n);
n.authSetting ? e in n.authSetting == 0 ? t({
result: !1,
type: 0
}) : 0 == n.authSetting[e] ? t({
result: !1,
type: 1
}) : t({
result: !0
}) : o();
},
fail: function(e) {
console.error("getSetting fail:", e);
o(e);
}
}) : o();
});
};
e.authorize = function(e) {
var t = this;
return "undefined" == typeof wx ? Promise.reject() : new Promise(function(o, n) {
wx.requirePrivacyAuthorize({
success: function() {
t.getSetting(e).then(function(t) {
console.log("setting Res:", e, t);
if (0 == t.result) {
if (0 == t.type) {
var i = wx.authorize;
i ? i({
scope: e,
success: function(e) {
console.log("authorize success:", e);
o();
},
fail: function(e) {
console.error("authorize fail:", e);
n(e);
}
}) : o();
} else if (1 == t.type) {
var r = wx.openSetting;
r ? r({
success: function(t) {
t.authSetting ? e in t.authSetting == 0 ? n() : 0 == t.authSetting[e] ? n() : o() : n();
},
fail: function(e) {
console.error("openSetting fail:", e);
n(e);
}
}) : n();
}
} else o();
}).catch(function() {
n();
});
},
fail: n
});
});
};
e.generateRandomString = function(e) {
for (var t = "", o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = 0; n < e; n++) t += o.charAt(Math.floor(Math.random() * o.length));
return t;
};
e.formatNickName = function(e, t) {
void 0 === t && (t = 10);
return e.length <= t ? e : e.substring(0, t) + "...";
};
e.getCurrencyStr = function(e, t) {
var o = 1;
"CNY" == e && (o = 100);
"USD" == e && (o = 1);
return ("CNY" == e ? "￥" : "$") + " " + t / o;
};
})(o.Common || (o.Common = {}));
window.decodeStorage = function(e) {
for (var t in e) if ("Key_Gold" != t) {
var o = e[t];
"string" == typeof o && (e[t] = window.BitEncrypt.decode(o, "VuxiAKihQ0VR9WRe"));
e[t] = JSON.parse(e[t]);
}
console.log(e);
};
cc._RF.pop();
}, {
"./G1_BP_ServerTime": "G1_BP_ServerTime"
} ],
G1_BP_FitScale: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c3d66LeDNtH5bAd7mLfzHpD", "G1_BP_FitScale");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
this.node.scale = Math.min(1, cc.winSize.width / cc.view.getDesignResolutionSize().width);
};
return r([ c ], t);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
G1_BP_GameConst: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c3d66Euz3pAv78+MFyVKv1/", "G1_BP_GameConst");
var n = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, r = i.ccclass, a = (i.property, function() {
function e() {
this.share_cebianlan_reward = 100;
this.share_haoyou_reward = 100;
this.next_video_coin = 100;
this.reward_luping_coin = 100;
this.sheweichangyong_coin = 100;
this.tianjiazhuomian_coin = 100;
}
t = e;
e.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
var t;
e._instance = null;
return t = n([ r ], e);
}());
o.default = a;
window.G1_BP_GameConst = a;
cc._RF.pop();
}, {} ],
G1_BP_Ks_AD: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c3d66BIRhhCeqJu+uu6irWy", "G1_BP_Ks_AD");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../script/G1_BP_GameConst"), c = e("./G1_BP_commonFun"), s = cc._decorator, l = s.ccclass, u = s.property, p = (s.menu, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.panel_swcy = null;
t.node_tjzm = null;
t.node_swcy = null;
return t;
}
t.prototype.onLoad = function() {
var e = this.node_tjzm.parent.children[1].getChildByName("label_sc_num");
e && (e.getComponent(cc.Label).string = a.default.getInstance().tianjiazhuomian_coin + "奖励");
var t = this.node_swcy.parent.children[1].getChildByName("label_sc_num");
t && (t.getComponent(cc.Label).string = a.default.getInstance().sheweichangyong_coin + "奖励");
c.default.loadSwcyNode(this.panel_swcy);
c.default.swcy_Ks_AD = this;
this.checkHasCommonUse();
this.checkHasInstalled();
};
t.prototype.start = function() {};
t.prototype.checkHasCommonUse = function() {
if ("kuaishou" == lieyou_SdkManager.getSysPlatformName()) {
var e = this.node_swcy.parent;
window.ks && window.ks.checkCommonUse && window.ks.checkCommonUse({
success: function(t) {
(null == t ? void 0 : t.isCommonUse) ? e && (e.active = !1) : e && (e.active = !0);
},
fail: function() {
e && (e.active = !0);
}
});
this.changeSpriteState("swcy_" + window.kuaishou_AppId);
} else this.node_swcy.parent.active = !1;
};
t.prototype.clickswcyBtn = function() {
if (c.default.swcy_com) {
c.default.swcy_com.node.parent = cc.director.getScene();
c.default.swcy_com.showView();
}
};
t.prototype.clickswcyBtn1 = function() {
var e = this, t = this;
lieyou_SdkManager.addCommonUse(function(o) {
if (o) {
e.node_swcy.parent.active = !1;
if (!Userdefault.getBoolForKey("swcy_" + window.kuaishou_AppId, !1)) {
Userdefault.setBoolForKey("swcy_" + window.kuaishou_AppId, !0);
c.default.getInstance().setCoinFun(a.default.getInstance().sheweichangyong_coin);
t.changeSpriteState("swcy_" + window.kuaishou_AppId);
}
}
});
};
t.prototype.checkHasInstalled = function() {
var e = this;
if ("kuaishou" == lieyou_SdkManager.getSysPlatformName()) {
lieyou_SdkManager.hasInstalled && lieyou_SdkManager.hasInstalled(function(t) {
cc.sys.os != cc.sys.OS_IOS && (e.node_tjzm.parent.active = !t);
});
this.changeSpriteState("tjzm_" + window.kuaishou_AppId);
} else this.node_tjzm.parent.active = !1;
};
t.prototype.clicktjzmBtn = function(e) {
var t = this;
lieyou_SdkManager.installShortcut(function(o) {
if (o) {
e.target.active = !1;
if (!Userdefault.getBoolForKey("tjzm_" + window.kuaishou_AppId, !1)) {
Userdefault.setBoolForKey("tjzm_" + window.kuaishou_AppId, !0);
c.default.getInstance().setCoinFun(a.default.getInstance().tianjiazhuomian_coin);
t.changeSpriteState("tjzm_" + window.kuaishou_AppId);
}
}
});
if (cc.sys.os == cc.sys.OS_IOS && !Userdefault.getBoolForKey("tjzm_" + window.kuaishou_AppId, !1)) {
Userdefault.setBoolForKey("tjzm_" + window.kuaishou_AppId, !0);
c.default.getInstance().setCoinFun(a.default.getInstance().tianjiazhuomian_coin);
t.changeSpriteState("tjzm_" + window.kuaishou_AppId);
}
};
t.prototype.changeSpriteState = function(e) {
console.log(e + ">>>>>>>>>>>>>>>>>>>>>>>>" + !Userdefault.getBoolForKey(e, !1));
if (Userdefault.getBoolForKey(e, !1)) if (e == "tjzm_" + window.kuaishou_AppId) {
console.log(">>>>>>>>>>>>>>>>>>>>>>>> 添加桌面切换为不带金币样式的图标");
this.node_tjzm.active = !0;
this.node_tjzm.parent.children[1].active = !1;
} else if (e == "swcy_" + window.kuaishou_AppId) {
console.log(">>>>>>>>>>>>>>>>>>>>>>>> 设为常用切换为不带金币样式的图标");
this.node_swcy.active = !0;
this.node_swcy.parent.children[1].active = !1;
}
};
r([ u(cc.Prefab) ], t.prototype, "panel_swcy", void 0);
r([ u({
displayName: "添加桌面(非带金币样式)",
type: cc.Node
}) ], t.prototype, "node_tjzm", void 0);
r([ u({
displayName: "设为常用(非带金币样式)",
type: cc.Node
}) ], t.prototype, "node_swcy", void 0);
return r([ l ], t);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {
"../../script/G1_BP_GameConst": "G1_BP_GameConst",
"./G1_BP_commonFun": "G1_BP_commonFun"
} ],
G1_BP_PlatformButton: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c3d66FrvthNcbVC/kqotJHP", "G1_BP_PlatformButton");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("./G1_BP_PlatformCommon"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._button = null;
t._onTap = null;
return t;
}
t.prototype.onLoad = function() {
this.node.getComponent(cc.Widget) && this.node.getComponent(cc.Widget).updateAlignment();
this.node.on("position-changed", this.resizeButton, this);
this.node.on("size-changed", this.resizeButton, this);
};
t.prototype.start = function() {
var e = this;
this.node.active && this.scheduleOnce(function() {
e._button = e.createButton();
e._button && e._button.onTap(function(t) {
e._onTap && e._onTap(t);
});
e.resizeButton();
});
};
t.prototype.onEnable = function() {
this.show();
};
t.prototype.onDisable = function() {
this.hide();
};
t.prototype.onDestroy = function() {
var e, t;
this.node.off("position-changed", this.resizeButton, this);
this.node.off("size-changed", this.resizeButton, this);
if (this._button) {
null === (t = null === (e = this._button) || void 0 === e ? void 0 : e.destroy) || void 0 === t || t.call(e);
this._button = null;
}
};
t.prototype.createButton = function() {
return null;
};
t.prototype.show = function() {
var e, t;
this._button && (null === (t = null === (e = this._button) || void 0 === e ? void 0 : e.show) || void 0 === t || t.call(e));
};
t.prototype.hide = function() {
var e, t;
this._button && (null === (t = null === (e = this._button) || void 0 === e ? void 0 : e.hide) || void 0 === t || t.call(e));
};
t.prototype.resizeButton = function() {
if (this._button) {
var e = this._button, t = a.PlatformCommon.getNodeToFrameRect(this.node), o = t.left, n = t.top, i = t.width, r = t.height;
e.style.left = o;
e.style.top = n;
e.style.width = i;
e.style.height = r;
}
};
t.prototype.addButtonCallback = function(e) {
this._onTap = e;
};
return r([ s ], t);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {
"./G1_BP_PlatformCommon": "G1_BP_PlatformCommon"
} ],
G1_BP_PlatformCommon: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c3d66zX0p9BFqfFf76orzos", "G1_BP_PlatformCommon");
var n = this && this.__assign || function() {
return (n = Object.assign || function(e) {
for (var t, o = 1, n = arguments.length; o < n; o++) {
t = arguments[o];
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
}
return e;
}).apply(this, arguments);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.PlatformCommon = void 0;
(function(e) {
e.getFrame2WorldPos = function(e, t) {
var o = cc.view.getFrameSize(), n = e / o.width, i = t / o.height, r = n * cc.winSize.width, a = i * cc.winSize.height;
return cc.v2(r, a);
};
e.getFrameSize2WorldSize = function(e, t) {
var o = cc.view.getFrameSize(), n = cc.winSize.width / o.width, i = cc.winSize.height / o.height;
return cc.size(e * n, t * i);
};
e.getNodePos2FramePos = function(e) {
var o = cc.mat4();
e.getWorldMatrix(o);
var n = cc.v3(), i = cc.v3(), r = e.width, a = e.height;
o.getTranslation(n);
o.getScale(i);
var c = i.x, s = cc.v2(n).add(cc.v2((0 - e.anchorX) * r * c, (1 - e.anchorY) * a * c));
return t(s.x, s.y);
};
function t(e, t) {
var o = cc.view.getFrameSize(), n = cc.misc.clamp01(e / cc.winSize.width), i = cc.misc.clamp01(1 - t / cc.winSize.height);
return {
left: o.width * n,
top: o.height * i
};
}
e.getWorld2FramePos = t;
function o(e, t) {
var o = cc.view.getFrameSize(), n = o.width / cc.winSize.width, i = o.height / cc.winSize.height;
return cc.size(e * n, t * i);
}
e.getWorldSize2FrameSize = o;
e.getNodeToFrameRect = function(e) {
var i = cc.mat4();
e.getWorldMatrix(i);
var r = cc.v3(), a = cc.v3(), c = e.width, s = e.height;
i.getTranslation(r);
i.getScale(a);
var l = a.x, u = cc.v2(r).add(cc.v2((0 - e.anchorX) * c * l, (1 - e.anchorY) * s * l)), p = t(u.x, u.y), d = o(c * l, s * l);
return n(n({}, p), {
width: d.width,
height: d.height
});
};
})(o.PlatformCommon || (o.PlatformCommon = {}));
cc._RF.pop();
}, {} ],
G1_BP_ServerTime: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c3d665TclZBvrba5rHiAMUb", "G1_BP_ServerTime");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.serverTime = 0;
return t;
}
t.createServerTimeCom = function() {
if (!t._instance) {
var e = new cc.Node("ServerTime"), o = e.addComponent(t);
cc.director.getScene().addChild(e);
return o.initTime();
}
return Promise.resolve();
};
t.getInstance = function() {
return t._instance ? t._instance : null;
};
t.getServerTime = function() {
return t._instance ? t._instance.getServerTime() : Date.now();
};
t.prototype.onLoad = function() {
if (t._instance) this.node.destroy(); else {
t._instance = this;
cc.game.addPersistRootNode(this.node);
this.listenGameShow();
}
};
t.prototype.onDestroy = function() {
t._instance = null;
};
t.prototype.getServerTime = function() {
return this.serverTime;
};
t.prototype.initTime = function() {
var e = this;
return new Promise(function(t) {
e.getTimestampAsync(function(o) {
e.serverTime = o;
t(o);
});
});
};
t.prototype.listenGameShow = function() {
var e = this;
lieyou_SdkManager.onShow(function() {
cc.isValid(e) && e.initTime();
});
};
t.prototype.getTimestampAsync = function(e) { e(Date.now()); };
t.prototype.getLocalTime = function() {
return Date.now();
};
t.prototype.update = function(e) {
this.serverTime += Math.round(1e3 * e);
};
t._instance = null;
return t;
}(cc.Component);
o.default = r;
cc._RF.pop();
}, {} ],
G1_BP_SideBar: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c3d66D3hdJFhrTAQ+2LimtW", "G1_BP_SideBar");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../swcy/script/G1_BP_commonFun"), c = e("../G1_BP_GameConst"), s = cc._decorator, l = s.ccclass, u = s.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.iconFrameArr = [];
t.nameStr = "";
t.iconA = null;
return t;
}
t.prototype.onLoad = function() {
if ("qgame_6406ecbfd64e6861394334a2" == window.oppoGetOnlineDataId) {
this.iconA = this.iconFrameArr[0];
this.nameStr = "菜狗闯关";
}
};
t.prototype.start = function() {
lieyou_SdkManager.showSideBar && lieyou_SdkManager.showSideBar({
node: this.node,
gameName: this.nameStr,
gameIcon: this.iconA,
onReward: function() {
a.default.getInstance().setCoinFun(c.default.getInstance().share_cebianlan_reward);
}
});
};
r([ u([ cc.SpriteFrame ]) ], t.prototype, "iconFrameArr", void 0);
return r([ l ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../swcy/script/G1_BP_commonFun": "G1_BP_commonFun",
"../G1_BP_GameConst": "G1_BP_GameConst"
} ],
G1_BP_Swcy: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c3d66gud5hC1ZYuSsgSm7Rm", "G1_BP_Swcy");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("./G1_BP_commonFun"), c = cc._decorator, s = c.ccclass, l = c.property, u = (c.menu, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.image = null;
t.gameName = null;
t.iconArr = [];
return t;
}
t.prototype.onLoad = function() {
this.node.zIndex = 9999;
this.initIcon();
};
t.prototype.initIcon = function() {
if ("qgame_6476e9f3e31d6071ec466713" == window.oppoGetOnlineDataId) this.image.spriteFrame = this.iconArr[0]; else if ("qgame_5e60da74570df38d3b000019" == window.oppoGetOnlineDataId) {
this.image.spriteFrame = this.iconArr[1];
this.image.node.width = 50;
this.image.node.height = 50;
this.gameName.string = "通关我在行";
} else if ("qgame_64daf34f894c2c300b7c1c39" == window.oppoGetOnlineDataId) {
this.image.spriteFrame = this.iconArr[2];
this.image.node.width = 50;
this.image.node.height = 50;
this.gameName.string = "快找厕所";
} else if ("qgame_64ec4eec8efadc41dccdd6bb" == window.oppoGetOnlineDataId) {
this.image.spriteFrame = this.iconArr[3];
this.image.node.width = 50;
this.image.node.height = 50;
this.gameName.string = "滚就完事了";
} else if ("qgame_5b20af53f43e480cb600000f" == window.oppoGetOnlineDataId) {
this.image.spriteFrame = this.iconArr[4];
this.image.node.width = 50;
this.image.node.height = 50;
this.gameName.string = "连连画线";
} else if ("qgame_5b30af7a8f4a9d6c1500000f" == window.oppoGetOnlineDataId) {
this.image.spriteFrame = this.iconArr[5];
this.image.node.width = 50;
this.image.node.height = 50;
this.gameName.string = "我来通关了";
} else if ("qgame_5e8e8e750cafb273c3000663" == window.oppoGetOnlineDataId) {
this.image.spriteFrame = this.iconArr[6];
this.image.node.width = 50;
this.image.node.height = 50;
this.gameName.string = "有亿点菜";
} else if ("qgame_5ed638d4570df38bbc000013" == window.oppoGetOnlineDataId) {
this.image.spriteFrame = this.iconArr[7];
this.image.node.width = 50;
this.image.node.height = 50;
this.gameName.string = "完美逃脱";
} else this.image.spriteFrame = this.iconArr[0];
};
t.prototype.showView = function() {
this.node.active = !0;
a.default.showUIAnima(this.node, !0);
};
t.prototype.hideView = function() {
var e = this;
a.default.showUIAnima(this.node, !1, function() {
e.node.active = !1;
});
};
t.prototype.swcyFun = function() {
a.default.swcy_Ks_AD && a.default.swcy_Ks_AD.clickswcyBtn1();
this.hideView();
};
t.prototype.btnClick = function(e, t) {
switch (t) {
case "btn_giveup":
this.hideView();
}
};
r([ l(cc.Sprite) ], t.prototype, "image", void 0);
r([ l(cc.Label) ], t.prototype, "gameName", void 0);
r([ l([ cc.SpriteFrame ]) ], t.prototype, "iconArr", void 0);
return r([ s ], t);
}(cc.Component));
o.default = u;
cc._RF.pop();
}, {
"./G1_BP_commonFun": "G1_BP_commonFun"
} ],
G1_BP_TTPlatform: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c3d66fmFtRBHbptbI/oOx5b", "G1_BP_TTPlatform");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.TTPlatform = void 0;
var r = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.recorderManager = null;
t.isRcording = !1;
t.clipIndexList = [];
t.stopToShare = !1;
t.videoPath = "";
t.onRecordPause = null;
t.onRecordResume = null;
t.onRecordStop = null;
t.onShareRecordFail = null;
t.onShareRecordSuccess = null;
return t;
}
t.prototype.canIUse = function(e) {
return !!window.tt && !!window.tt[e];
};
t.prototype.getAPI = function(e, t) {
if (this.canIUse(e)) return window.tt[e];
var o = e + " not support";
console.error(o);
t && t({
errMsg: o
});
};
t.prototype.startRecord = function(e) {
void 0 === e && (e = {});
PPSDK.sdkHelper.beginLupin();
};
t.prototype.stopRecord = function(e) {
void 0 === e && (e = {});
PPSDK.sdkHelper.stopLupin();
};
t.prototype.pauseRecord = function(e) {
void 0 === e && (e = {});
PPSDK.sdkHelper.pauseLupin();
};
t.prototype.resumeRecord = function(e) {
void 0 === e && (e = {});
PPSDK.sdkHelper.resumeLupin();
};
t.prototype.recordeClip = function(e) {
var t, o = this;
void 0 === e && (e = {});
this.recorderManager && this.recorderManager.recordClip({
timeRange: null !== (t = e.timeRange) && void 0 !== t ? t : [ 3, 3 ],
success: function(t) {
o.clipIndexList.push(t.index);
e.success && e.success(t);
},
fail: function(t) {
e.fail && e.fail(t);
}
});
};
t.prototype.shareVideo = function(e) {
void 0 === e && (e = {});
PPSDK.sdkHelper.shareVideo({
success: function() {
e.success && e.success(null);
}
});
};
t.prototype.login = function(e) {
var t, o;
null === (t = this.getAPI("login", e.fail)) || void 0 === t || t({
force: null === (o = e.force) || void 0 === o || o,
success: function(t) {
console.log("login success:", t);
e.success && e.success(t);
},
fail: function(t) {
console.error("login fail:", t);
e.fail && e.fail(t);
},
complete: function(t) {
e.complete && e.complete(t);
}
});
};
t.prototype.getRankEnabled = function() {
return this.canIUse("setImRankData");
};
t.prototype.setImRankData = function(e) {
var t, o, n, i = this.getAPI("setImRankData", e.fail);
i && i({
dataType: null !== (t = e.dataType) && void 0 !== t ? t : 0,
value: String(e.value),
priority: null !== (o = e.priority) && void 0 !== o ? o : 0,
extra: null !== (n = e.extra) && void 0 !== n ? n : "",
success: function(t) {
console.log("setImRankData success:", t);
e.success && e.success(t);
},
fail: function(t) {
console.error("setImRankData fail:", t);
e.fail && e.fail(t);
}
});
};
t.prototype.getImRankList = function(e) {
var t = this;
this.login({
success: function(o) {
var n, i, r, a, c, s;
o.isLogin ? null === (n = t.getAPI("getImRankList", e.fail)) || void 0 === n || n({
rankType: null !== (i = e.rankType) && void 0 !== i ? i : "all",
dataType: null !== (r = e.dataType) && void 0 !== r ? r : 0,
relationType: null !== (a = e.relationType) && void 0 !== a ? a : "default",
suffix: null !== (c = e.suffix) && void 0 !== c ? c : "",
rankTitle: null !== (s = e.rankTitle) && void 0 !== s ? s : "",
success: function(t) {
console.log("getImRankList success:", t);
e.success && e.success(t);
},
fail: function(t) {
console.error("getImRankList fail:", t);
e.fail && e.fail(t);
}
}) : e.fail && e.fail({
errMsg: "getImRankList fail:not login"
});
},
fail: function() {
e.fail && e.fail({
errMsg: "getImRankList fail:not login"
});
}
});
};
t.prototype.onDestroy = function() {
this.recorderManager && this.isRcording && this.recorderManager.stop();
this.recorderManager = null;
};
return t;
}(e("./G1_BP_BasePlatform").BasePlatform);
o.TTPlatform = r;
cc._RF.pop();
}, {
"./G1_BP_BasePlatform": "G1_BP_BasePlatform"
} ],
G1_BP_commonFun: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c3d66TJxpVNw4g1kFw5rLNP", "G1_BP_commonFun");
var n = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.BUNDLE = void 0;
var i = e("../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control"), r = e("./G1_BP_Swcy");
o.BUNDLE = {
name: "G1_BP_AD"
};
var a = cc._decorator, c = a.ccclass, s = (a.property, function() {
function e() {}
t = e;
e.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
e.changeImg = function(e, t, n) {
PPSDK.cacheManager.getCacheByAsync("/" + t, cc.SpriteFrame, o.BUNDLE.name).then(function(t) {
if (e && e.getComponent(cc.Sprite)) {
e.getComponent(cc.Sprite).spriteFrame = t;
n && n();
}
});
};
e.prototype.setCoinFun = function(e) {
void 0 === e && (e = 0);
e < 0 && (e = 0);
var t = i.TG_LMSJ_Control.getCoinCount();
t += e;
i.TG_LMSJ_Control.setCoinCount(t);
PPSDK.showToast("恭喜获得" + e + "金币");
};
e.loadBundle = function(e, t) {
void 0 === e && (e = "");
PPSDK.bundleManager.loadBundle({
bundle: e,
completed: function() {
t && t(!0);
}
});
};
e.getBundle = function(e, t) {
void 0 === e && (e = "");
PPSDK.bundleManager.getBundle(e).loadScene(e, function(e, o) {
cc.director.runScene(o, function() {}, function() {
t && t();
});
});
};
e.loadSwcyNode = function(e, t) {
void 0 === t && (t = null);
if (this.swcy_node && this.swcy_node.parent) {
this.swcy_com = this.swcy_node.getComponent(r.default);
t && t(this.swcy_node);
} else {
this.swcy_node = cc.instantiate(e);
this.swcy_com = this.swcy_node.getComponent(r.default);
}
};
e.loadPrefab = function(e, t) {
Manager.cacheManager.getCacheByAsync(e, cc.Prefab, o.BUNDLE.name).then(function(e) {
if (e) {
t && t(e);
return e;
}
});
};
var t;
e.swcy_Ks_AD = null;
e.swcy_com = null;
e.swcy_node = null;
e._instance = null;
e.showUIAnima = function(e, t, o) {
e.active = !0;
var n = cc.find("panel", e), i = cc.find("bg", e);
if (t) {
i.opacity = 0;
n.scale = .4;
n.opacity = 0;
cc.tween(i).to(.3, {
opacity: 216.75
}).call(function() {
"function" == typeof o && o();
}).start();
cc.tween(n).to(.2, {
scale: 1.1,
opacity: 255
}, {
easing: "sineOut"
}).to(.1, {
scale: 1
}, {
easing: "sineOut"
}).start();
} else {
cc.tween(i).to(.3, {
opacity: 0
}).start();
cc.tween(n).to(.1, {
scale: 1.1
}, {
easing: "sineOut"
}).to(.2, {
scale: Math.max(.4, .4),
opacity: 0
}, {
easing: "sineOut"
}).call(function() {
"function" == typeof o && o();
}).start();
}
};
return t = n([ c ], e);
}());
o.default = s;
window.G1_BP_commonFun = s;
cc._RF.pop();
}, {
"../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control": "TG_LMSJ_Control",
"./G1_BP_Swcy": "G1_BP_Swcy"
} ],
TG_DWLYF_CommonFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6c136flfe5P8bcqO4j1qgAN", "TG_DWLYF_CommonFunc");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function e() {}
e.getInstance = function() {
null == this._instance && (this._instance = new e());
return this._instance;
};
e.prototype.loadRemoteConfig = function() {
if (0 != window.videoTagOnlineFlag && 1 != window.videoTagOnlineFlag && lieyou_SdkManager.getGameCustomParams) {
var e = lieyou_SdkManager.getGameCustomParams();
console.log("====================================================remote GameCustom:", JSON.stringify(e));
"object" == typeof e && null != e ? window.videoTagOnlineFlag = e.videoTagOnlineFlag : "string" == typeof e && null != e && (window.videoTagOnlineFlag = JSON.parse(e).videoTagOnlineFlag);
"object" == typeof e && null != e ? window.rateOnlineVideo = e.rateOnlineVideo : "string" == typeof e && null != e && (window.rateOnlineVideo = JSON.parse(e).rateOnlineVideo);
window.rateOnlineVideo = isNaN(window.rateOnlineVideo) || null == window.rateOnlineVideo ? 0 : window.rateOnlineVideo;
}
};
e._instance = null;
return e;
}();
o.default = n;
cc._RF.pop();
}, {} ],
TG_DWLYF_InitRemoteData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7073d3hMTBEfbcMb1abzqbu", "TG_DWLYF_InitRemoteData");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("./TG_DWLYF_CommonFunc"), c = cc._decorator, s = c.ccclass, l = (c.property, 
c.menu, function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
a.default.getInstance().loadRemoteConfig();
};
return r([ s ], t);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {
"./TG_DWLYF_CommonFunc": "TG_DWLYF_CommonFunc"
} ],
TG_DWLYF_UIVideoTagOnline: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6c136I9OQNFyI6W/9V5whAY", "TG_DWLYF_UIVideoTagOnline");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.TG_DWLYF_UIVideoTagOnline_EnumName = void 0;
var a, c = e("../script/G1_BP_GameConst"), s = e("../swcy/script/G1_BP_commonFun"), l = cc._decorator, u = l.ccclass, p = l.property, d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.videoNode = null;
t.backNode = null;
t.btn_kuaishou_toggle = null;
t.checkmark = null;
t.icon_jiantou = null;
return t;
}
t.prototype.start = function() {
var e = this;
this.scheduleOnce(function() {
e.initStyle();
});
};
t.prototype.initStyle = function() {
this.icon_jiantou.active = 0 != window.rateOnlineVideo;
this.btn_kuaishou_toggle.active = !1;
if (0 == window.videoTagOnlineFlag) {
this.backNode.active = !0;
this.videoNode.active = !0;
} else if (1 == window.videoTagOnlineFlag) {
this.backNode.active = !1;
this.videoNode.active = !0;
this.videoNode.x = 0;
this.btn_kuaishou_toggle.active = !0;
this.btn_kuaishou_toggle.on(cc.Node.EventType.TOUCH_END, this.OnThochStart, this);
}
PPSDK.on(a.videoTagOnlineEvent, this.all, this);
};
t.prototype.all = function() {
this.videoNode.active = !1;
this.backNode.active = !0;
this.btn_kuaishou_toggle.active = !1;
};
t.prototype.OnThochStart = function() {
var e = this;
this.checkmark && (this.checkmark.active = !this.checkmark.active);
this.backNode.x = 0;
this.videoNode.x = 0;
this.backNode.opacity = 0;
this.backNode.getComponent(cc.Widget) && (this.backNode.getComponent(cc.Widget).enabled = !1);
this.scheduleOnce(function() {
e.backNode.y = e.videoNode.y;
e.backNode.opacity = 255;
});
this.backNode.active = !this.checkmark.active;
this.videoNode.active = this.checkmark.active;
if (0 == this.videoNode.active) {
var t = window.rateOnlineVideo > Math.random();
console.log("本次是否播放视频", t, window.rateOnlineVideo);
t && lieyou_SdkManager.showRewardedVideoAd(function(e) {
e && s.default.getInstance().setCoinFun(c.default.getInstance().next_video_coin);
});
}
};
t.prototype.converNodePos = function(e, t) {
void 0 === t && (t = null);
var o = e.convertToWorldSpaceAR(new cc.Vec2(0, 0));
return t ? t.convertToNodeSpaceAR(o) : o;
};
r([ p(cc.Node) ], t.prototype, "videoNode", void 0);
r([ p(cc.Node) ], t.prototype, "backNode", void 0);
r([ p(cc.Node) ], t.prototype, "btn_kuaishou_toggle", void 0);
r([ p(cc.Node) ], t.prototype, "checkmark", void 0);
r([ p(cc.Node) ], t.prototype, "icon_jiantou", void 0);
return r([ u ], t);
}(cc.Component);
o.default = d;
(function(e) {
e.videoTagOnlineEvent = "videoTagOnlineEvent";
})(a = o.TG_DWLYF_UIVideoTagOnline_EnumName || (o.TG_DWLYF_UIVideoTagOnline_EnumName = {}));
cc._RF.pop();
}, {
"../script/G1_BP_GameConst": "G1_BP_GameConst",
"../swcy/script/G1_BP_commonFun": "G1_BP_commonFun"
} ],
TG_LMSJ_AdvertisingManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1e353WdrsFOB4+MsvFuXNBn", "TG_LMSJ_AdvertisingManager");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.hideISBN = o.showISBN = o.stopLuPing = o.beginLuPing = o.showUserAgreementSp = o.isShenhe = o.showAge = o.getHaveVideo = o.showSpotByOther = o.showSpotByPause = o.showSpotByFinish = o.hideBanner = o.showBannerByTop = o.showBannerByBottom = o.showMoreGameMiddle_one = o.showMoreGameByIcon = o.showNativeAd_2 = o.showNativeAd_4 = o.showNativeAd_big = o.showNativeAd_small = o.addNativeAd = o.showRewardedVideoAd = void 0;
o.showRewardedVideoAd = function(e) {
e.eventCode && lieyou_SdkManager.gameEvent("video_" + e.eventCode);
lieyou_SdkManager.showRewardedVideoAd(function(t) {
if (t) {
e.success && e.success();
e.eventCode && lieyou_SdkManager.gameEvent("video_success_" + e.eventCode);
} else e.fail && e.fail();
});
};
o.addNativeAd = function(e, t, o, n) {
void 0 === n && (n = 0);
if (1 == lieyou_SdkManager.getSysPlatform()) {
var i = e.convertToWorldSpaceAR(cc.v2()), r = o.convertToNodeSpaceAR(i);
r.y -= e.height / 2;
var a = cc.winSize.height / 2 + r.y >= cc.winSize.height / 2 ? cc.winSize.height / 2 : cc.winSize.height / 2 + r.y;
t.height = a;
t.width = cc.winSize.width;
t.setPosition(cc.v2(0, (a - cc.winSize.height) / 2));
lieyou_SdkManager.addNativeAd(t, n);
}
};
o.showNativeAd_small = function(e) {
return 0 != lieyou_SdkManager.getSysPlatform() && lieyou_SdkManager.showNativeAd_small({
node: e,
bgPath: "test.png",
scale: 1,
titleColor: cc.color(46, 46, 46),
descColor: cc.color(46, 46, 46),
insetTop: 0,
insetBottom: 0,
insetLeft: 0,
insetRight: 0
});
};
o.showNativeAd_big = function(e) {
return 0 != lieyou_SdkManager.getSysPlatform() && lieyou_SdkManager.showNativeAd_big({
node: e,
bgPath: "test.png",
scale: 1,
titleColor: cc.color(46, 46, 46),
descColor: cc.color(46, 46, 46),
insetTop: 0,
insetBottom: 0,
insetLeft: 0,
insetRight: 0
});
};
o.showNativeAd_4 = function(e, t, o, n) {
void 0 === o && (o = 100);
void 0 === n && (n = 100);
var i = !1;
3 != lieyou_SdkManager.getSysPlatform() && 4 != lieyou_SdkManager.getSysPlatform() || (i = lieyou_SdkManager.showNativeAd_4({
node: e,
iconNode: t,
iconWidth: o,
iconHeight: n
}));
return i;
};
o.showNativeAd_2 = function(e, t) {
var o = !1;
3 != lieyou_SdkManager.getSysPlatform() && 4 != lieyou_SdkManager.getSysPlatform() || (o = lieyou_SdkManager.showNativeAd_2({
node: e,
bgPath: "test.png",
clickNode: t,
scale: 1,
titleColor: cc.color(46, 46, 46),
descColor: cc.color(46, 46, 46),
insetTop: 0,
insetBottom: 0,
insetLeft: 0,
insetRight: 0,
destroyCallBack: Function
}));
return o;
};
o.showMoreGameByIcon = function(e, t) {
void 0 === t && (t = 130);
0 != lieyou_SdkManager.getSysPlatform() && lieyou_SdkManager.showMoreGameByIcon({
node: e,
side: t
});
};
o.showMoreGameMiddle_one = function(e) {
return lieyou_SdkManager.showMoreGameMiddle_one({
node: e,
isPortrait: !0
});
};
o.showBannerByBottom = function(e) {
void 0 === e && (e = {});
lieyou_SdkManager.showBannerByBottom(e);
};
o.showBannerByTop = function() {
lieyou_SdkManager.showBannerByTop();
};
o.hideBanner = function() {
lieyou_SdkManager.hideBanner();
};
o.showSpotByFinish = function() {
lieyou_SdkManager.showSpotByFinish();
};
o.showSpotByPause = function() {
lieyou_SdkManager.showSpotByPause();
};
o.showSpotByOther = function() {
lieyou_SdkManager.showSpotByOther();
};
o.getHaveVideo = function() {
return 0 == lieyou_SdkManager.getSysPlatform() || lieyou_SdkManager.getHaveVideo();
};
o.showAge = function(e) {
lieyou_SdkManager.showAge({
node: e
});
};
o.isShenhe = function() {
return lieyou_SdkManager.isShenhe();
};
o.showUserAgreementSp = function(e) {
3 != lieyou_SdkManager.getSysPlatform() && 4 != lieyou_SdkManager.getSysPlatform() || lieyou_SdkManager.showUserAgreementSp(e);
};
o.beginLuPing = function() {
cc.sys.BYTEDANCE_GAME == cc.sys.platform && lieyou_SdkManager.beginLuPing();
};
o.stopLuPing = function() {
cc.sys.BYTEDANCE_GAME == cc.sys.platform && lieyou_SdkManager.stopLuPing();
};
o.showISBN = function() {
lieyou_SdkManager.showISBN();
};
o.hideISBN = function() {
lieyou_SdkManager.hideISBN();
};
cc._RF.pop();
}, {} ],
TG_LMSJ_ArrowGuideBuild: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "27f1agm8Y1G9a63PEL2q4QV", "TG_LMSJ_ArrowGuideBuild");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.buildByNode = function(e) {
if (e) {
this.node.width = e.width;
this.node.height = e.height;
this.node.x = e.x;
this.node.y = e.y;
var t = this.node.getComponent(cc.BoxCollider);
t.size.width = e.width;
t.size.height = e.height;
}
};
t.prototype.exportData = function() {
return {
width: this.node.width,
height: this.node.height,
x: this.node.x,
y: this.node.y,
name: this.node.name
};
};
return r([ c ], t);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
TG_LMSJ_ArrowGuide: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f99b3/bsZBBLKK7qGaIA/O5", "TG_LMSJ_ArrowGuide");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../TG_LMSJ_Enum"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onCollisionEnter = function(e) {
"Role" == e.node.group && PPSDK.emit(a.TG_LMSJ_EventName.touch_guide, this.node);
};
return r([ s ], t);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {
"../TG_LMSJ_Enum": "TG_LMSJ_Enum"
} ],
TG_LMSJ_Arrow: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "89d74UQ7rFILIdJm/CwU39f", "TG_LMSJ_Arrow");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.showAni = function() {
this.node.stopAllActions();
this.node.y += 20;
cc.tween(this.node).repeatForever(cc.tween(this.node).by(.5, {
position: cc.v3(0, -20)
}).by(.5, {
position: cc.v3(0, 20)
})).start();
};
return r([ c ], t);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
TG_LMSJ_Bubble: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3370fsTtF5CBrnshLfNue1n", "TG_LMSJ_Bubble");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../TG_LMSJ_GameConfig"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.closeCall = null;
t.moveSpeed = cc.v2();
return t;
}
t.prototype.init = function(e, t) {
this.node.angle = e;
var o = 150;
1 == t && (o = -o);
this.moveSpeed = 0 == e || 180 == e ? cc.v2(0, o) : cc.v2(o, 0);
};
t.prototype.update = function(e) {
var t = a.TG_LMSJ_GameConfig.getIns();
if (!t.gameEnd && !t.gamePause) {
this.node.x += this.moveSpeed.x * e;
this.node.y += this.moveSpeed.y * e;
}
};
t.prototype.onCollisionEnter = function(e) {
var t = e.node;
if (-1 != [ "Wall", "Toilet", "Stone", "Role" ].indexOf(t.group)) {
this.closeCall && this.closeCall();
this.node.destroy();
}
};
return r([ s ], t);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {
"../TG_LMSJ_GameConfig": "TG_LMSJ_GameConfig"
} ],
TG_LMSJ_CateLevelBuilder: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "49d2cyAlZJMcbmF9HETGmFz", "TG_LMSJ_CateLevelBuilder");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config"), c = e("../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control"), s = e("../MapItem/TG_LMSJ_ArrowGuideBuild"), l = e("../MapItem/TG_LMSJ_CoinBuild"), u = e("../MapItem/TG_LMSJ_FireBuild"), p = e("../MapItem/TG_LMSJ_HoleBuild"), d = e("../MapItem/TG_LMSJ_MountBuild"), _ = e("../MapItem/TG_LMSJ_PropGuideBuild"), h = e("../MapItem/TG_LMSJ_RoleBuild"), f = e("../MapItem/TG_LMSJ_StoneBuild"), y = e("../MapItem/TG_LMSJ_SwitchBuild"), g = e("../MapItem/TG_LMSJ_SwitchWallBuild"), S = e("../MapItem/TG_LMSJ_ThornBuild"), m = e("../MapItem/TG_LMSJ_ToiletBuild"), v = e("../MapItem/TG_LMSJ_TransferBuild"), T = e("../MapItem/TG_LMSJ_WallBuild"), M = e("../TG_LMSJ_Enum"), L = e("./TG_LMSJ_CateLevelConfig"), G = e("./TG_LMSJ_GameMap"), w = cc._decorator, P = w.ccclass, b = w.property, C = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.roleLayer = null;
t.toiletLayer = null;
t.wallLayer = null;
t.switchLayer = null;
t.switchWallLayer = null;
t.hurtLayer = null;
t.transferLayer = null;
t.guideLayer = null;
t.allRolePrefab = [];
t.allToiletPrefab = [];
t.allWallPrefab = [];
t.allSwitchPrefab = [];
t.allSwitchWallPrefab = [];
t.allHurtPrefab = [];
t.allTransferPrefab = [];
t.allGuidePrefab = [];
return t;
}
t.prototype.onLoad = function() {
PPSDK.on(M.TG_LMSJ_EventName.create_level, this.buildLevel, this);
};
t.prototype.onDestroy = function() {
PPSDK.off(this);
};
t.prototype.buildLevel = function(e) {
var t = this, o = c.TG_LMSJ_Control.getSelectPart();
if (null != o && null != o) {
L.default.loadLevelConfig(o).then(function(o) {
t.generate(o, e);
var n = t.node.getComponent(G.default);
n && n.initAllItem();
});
cc.assetManager.getBundle(a.TG_LMSJ_Config.getIns().bundleName).load(a.TG_LMSJ_Config.getIns().gameName + "/Res/config/level" + o, cc.JsonAsset, function(e, t) {
e || null == t ? console.log(e) : console.log("Res/config/level" + o + "预加载完成");
});
}
};
t.prototype.generate = function(e) {
if (e.toilets) for (var t = 0, o = e.toilets; t < o.length; t++) {
for (var n = o[t], i = null, r = 0, a = this.allToiletPrefab; r < a.length; r++) if ((me = a[r]).name == n.name) {
i = cc.instantiate(me);
break;
}
i.getComponent(m.default).buildByNode(n);
this.toiletLayer.addChild(i);
}
if (e.roles) for (var c = 0, M = e.roles; c < M.length; c++) {
n = M[c], i = null;
for (var L = 0, G = this.allRolePrefab; L < G.length; L++) if ((me = G[L]).name == n.name) {
i = cc.instantiate(me);
break;
}
i.getComponent(h.default).buildByNode(n);
this.roleLayer.addChild(i);
}
if (e.walls) for (var w = 0, P = e.walls; w < P.length; w++) {
n = P[w], i = null;
for (var b = 0, C = this.allWallPrefab; b < C.length; b++) if ((me = C[b]).name == n.name) {
i = cc.instantiate(me);
break;
}
i.getComponent(T.default).buildByNode(n);
this.wallLayer.addChild(i);
}
if (e.switchs) for (var J = 0, O = e.switchs; J < O.length; J++) {
n = O[J], i = null;
for (var N = 0, A = this.allSwitchPrefab; N < A.length; N++) if ((me = A[N]).name == n.name) {
i = cc.instantiate(me);
break;
}
i.getComponent(y.default).buildByNode(n);
this.switchLayer.addChild(i);
}
if (e.switchWalls) for (var R = 0, D = e.switchWalls; R < D.length; R++) {
n = D[R], i = null;
for (var B = 0, j = this.allSwitchWallPrefab; B < j.length; B++) if ((me = j[B]).name == n.name) {
i = cc.instantiate(me);
break;
}
i.getComponent(g.default).buildByNode(n);
this.switchWallLayer.addChild(i);
}
if (e.holes) for (var k = 0, I = e.holes; k < I.length; k++) {
n = I[k], i = null;
for (var F = 0, x = this.allHurtPrefab; F < x.length; F++) if ((me = x[F]).name == n.name) {
i = cc.instantiate(me);
break;
}
i.getComponent(p.default).buildByNode(n);
this.hurtLayer.addChild(i);
}
if (e.transfers) for (var E = 0, W = e.transfers; E < W.length; E++) {
n = W[E], i = null;
for (var K = 0, U = this.allTransferPrefab; K < U.length; K++) if ((me = U[K]).name == n.name) {
i = cc.instantiate(me);
break;
}
i.getComponent(v.default).buildByNode(n);
this.transferLayer.addChild(i);
}
if (e.stones) for (var H = 0, V = e.stones; H < V.length; H++) {
n = V[H], i = null;
for (var z = 0, Y = this.allWallPrefab; z < Y.length; z++) if ((me = Y[z]).name == n.name) {
i = cc.instantiate(me);
break;
}
i.getComponent(f.default).buildByNode(n);
this.wallLayer.addChild(i);
}
if (e.mounts) for (var X = 0, q = e.mounts; X < q.length; X++) {
n = q[X], i = null;
for (var Z = 0, Q = this.allHurtPrefab; Z < Q.length; Z++) if ((me = Q[Z]).name == n.name) {
i = cc.instantiate(me);
break;
}
i.getComponent(d.default).buildByNode(n);
this.hurtLayer.addChild(i);
}
if (e.coins) for (var $ = 0, ee = e.coins; $ < ee.length; $++) {
n = ee[$], i = null;
for (var te = 0, oe = this.allToiletPrefab; te < oe.length; te++) if ((me = oe[te]).name == n.name) {
i = cc.instantiate(me);
break;
}
i.getComponent(l.default).buildByNode(n);
this.toiletLayer.addChild(i);
}
if (e.fires) for (var ne = 0, ie = e.fires; ne < ie.length; ne++) {
n = ie[ne], i = null;
for (var re = 0, ae = this.allHurtPrefab; re < ae.length; re++) if ((me = ae[re]).name == n.name) {
i = cc.instantiate(me);
break;
}
i.getComponent(u.default).buildByNode(n);
this.hurtLayer.addChild(i);
}
if (e.thorns) for (var ce = 0, se = e.thorns; ce < se.length; ce++) {
n = se[ce], i = null;
for (var le = 0, ue = this.allHurtPrefab; le < ue.length; le++) if ((me = ue[le]).name == n.name) {
i = cc.instantiate(me);
break;
}
i.getComponent(S.default).buildByNode(n);
this.hurtLayer.addChild(i);
}
if (e.propGuides) for (var pe = 0, de = e.propGuides; pe < de.length; pe++) {
n = de[pe], i = null;
for (var _e = 0, he = this.allGuidePrefab; _e < he.length; _e++) if ((me = he[_e]).name == n.name) {
i = cc.instantiate(me);
break;
}
i.getComponent(_.default).buildByNode(n);
this.guideLayer.addChild(i);
}
if (e.arrowGuides) for (var fe = 0, ye = e.arrowGuides; fe < ye.length; fe++) {
n = ye[fe], i = null;
for (var ge = 0, Se = this.allGuidePrefab; ge < Se.length; ge++) {
var me;
if ((me = Se[ge]).name == n.name) {
i = cc.instantiate(me);
break;
}
}
i.getComponent(s.default).buildByNode(n);
this.guideLayer.addChild(i);
}
};
r([ b(cc.Node) ], t.prototype, "roleLayer", void 0);
r([ b(cc.Node) ], t.prototype, "toiletLayer", void 0);
r([ b(cc.Node) ], t.prototype, "wallLayer", void 0);
r([ b(cc.Node) ], t.prototype, "switchLayer", void 0);
r([ b(cc.Node) ], t.prototype, "switchWallLayer", void 0);
r([ b(cc.Node) ], t.prototype, "hurtLayer", void 0);
r([ b(cc.Node) ], t.prototype, "transferLayer", void 0);
r([ b(cc.Node) ], t.prototype, "guideLayer", void 0);
r([ b(cc.Prefab) ], t.prototype, "allRolePrefab", void 0);
r([ b(cc.Prefab) ], t.prototype, "allToiletPrefab", void 0);
r([ b(cc.Prefab) ], t.prototype, "allWallPrefab", void 0);
r([ b(cc.Prefab) ], t.prototype, "allSwitchPrefab", void 0);
r([ b(cc.Prefab) ], t.prototype, "allSwitchWallPrefab", void 0);
r([ b(cc.Prefab) ], t.prototype, "allHurtPrefab", void 0);
r([ b(cc.Prefab) ], t.prototype, "allTransferPrefab", void 0);
r([ b(cc.Prefab) ], t.prototype, "allGuidePrefab", void 0);
return r([ P ], t);
}(cc.Component);
o.default = C;
cc._RF.pop();
}, {
"../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config": "TG_LMSJ_Config",
"../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control": "TG_LMSJ_Control",
"../MapItem/TG_LMSJ_ArrowGuideBuild": "TG_LMSJ_ArrowGuideBuild",
"../MapItem/TG_LMSJ_CoinBuild": "TG_LMSJ_CoinBuild",
"../MapItem/TG_LMSJ_FireBuild": "TG_LMSJ_FireBuild",
"../MapItem/TG_LMSJ_HoleBuild": "TG_LMSJ_HoleBuild",
"../MapItem/TG_LMSJ_MountBuild": "TG_LMSJ_MountBuild",
"../MapItem/TG_LMSJ_PropGuideBuild": "TG_LMSJ_PropGuideBuild",
"../MapItem/TG_LMSJ_RoleBuild": "TG_LMSJ_RoleBuild",
"../MapItem/TG_LMSJ_StoneBuild": "TG_LMSJ_StoneBuild",
"../MapItem/TG_LMSJ_SwitchBuild": "TG_LMSJ_SwitchBuild",
"../MapItem/TG_LMSJ_SwitchWallBuild": "TG_LMSJ_SwitchWallBuild",
"../MapItem/TG_LMSJ_ThornBuild": "TG_LMSJ_ThornBuild",
"../MapItem/TG_LMSJ_ToiletBuild": "TG_LMSJ_ToiletBuild",
"../MapItem/TG_LMSJ_TransferBuild": "TG_LMSJ_TransferBuild",
"../MapItem/TG_LMSJ_WallBuild": "TG_LMSJ_WallBuild",
"../TG_LMSJ_Enum": "TG_LMSJ_Enum",
"./TG_LMSJ_CateLevelConfig": "TG_LMSJ_CateLevelConfig",
"./TG_LMSJ_GameMap": "TG_LMSJ_GameMap"
} ],
TG_LMSJ_CateLevelConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ec6969qSRhL/YKjxLoLD4u9", "TG_LMSJ_CateLevelConfig");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config"), i = function() {
function e() {}
e.loadLevelConfig = function(e) {
return new Promise(function(t, o) {
var i = cc.assetManager.getBundle(n.TG_LMSJ_Config.getIns().bundleName);
null != i ? i.load(n.TG_LMSJ_Config.getIns().gameName + "/Res/config/level" + e, cc.JsonAsset, function(e, n) {
if (e) {
console.error(e);
return o();
}
var i = n.json;
t(i);
}) : console.log(n.TG_LMSJ_Config.getIns().gameName + "bundle加载出错");
});
};
return e;
}();
o.default = i;
cc._RF.pop();
}, {
"../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config": "TG_LMSJ_Config"
} ],
TG_LMSJ_CcConvert: [ function(e, t) {
"use strict";
cc._RF.push(t, "8d3baN70uROX7zoJNXmCwiV", "TG_LMSJ_CcConvert");
cc.Mask.prototype.clearDraw = function(e) {
void 0 === e && (e = !1);
this._graphics.clear(e);
};
cc.Mask.prototype.drawPolygon = function(e) {
this._graphics.clear(!1);
var t = this._graphics;
t.moveTo(e[0].x, e[0].y);
for (var o = 1; o < e.length; ++o) {
var n = e[o];
t.lineTo(n.x, n.y);
}
t.close();
t.fill();
};
cc.Mask.prototype.drawCircle = function(e, t, o, i) {
void 0 === i && (i = 32);
for (var r = this._graphics, a = n(cc.v2(e, t), o, i), c = 0; c < a.length; ++c) {
var s = a[c];
0 === c ? r.moveTo(s.x, s.y) : r.lineTo(s.x, s.y);
}
r.close();
r.fill();
};
var o = [];
function n(e, t, n) {
o.length = 0;
for (var i = 2 * Math.PI / n, r = 0; r < n; ++r) {
var a = cc.v2(t.x * Math.cos(i * r) + e.x, t.y * Math.sin(i * r) + e.y);
o.push(a);
}
return o;
}
cc._RF.pop();
}, {} ],
TG_LMSJ_CoinAniNodes: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "12b63BBgtNMiZC5qSPM3l+W", "TG_LMSJ_CoinAniNodes");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a, c = e("./TG_LMSJ_MyPool"), s = cc._decorator, l = s.ccclass, u = s.property;
(function(e) {
e[e.FLY_OPEN = 0] = "FLY_OPEN";
e[e.FLY_OPEN_SMOOTH = 1] = "FLY_OPEN_SMOOTH";
e[e.FLY_ORDER = 2] = "FLY_ORDER";
e[e.FLY_BEZIER = 3] = "FLY_BEZIER";
})(a || (a = {}));
var p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.coinPrefab = null;
t.coinFlyType = a.FLY_OPEN;
t.coinPool = null;
return t;
}
o = t;
t.prototype.onLoad = function() {
cc.game.isPersistRootNode(this.node) || cc.game.addPersistRootNode(this.node);
this.node.zIndex = 600;
o._instance = this;
};
t.prototype.start = function() {
var e = new c.default(this.coinPrefab);
e.create(10);
this.coinPool = e;
};
t.prototype.onDestroy = function() {
o._instance = null;
cc.game.removePersistRootNode(this.node);
};
t.prototype.changePosToCoinNode = function(e) {
var t = e.convertToWorldSpaceAR(cc.v2(0, 0));
return this.node.convertToNodeSpaceAR(t);
};
t.prototype.showAni = function(e, t, o, n) {
var i, r;
e instanceof cc.Node ? i = PPSDK.utils.getNodePos(e, this.node) : e instanceof cc.Vec2 && (i = e);
r = t instanceof cc.Node ? PPSDK.utils.getNodePos(t, this.node) : t;
this.coinFlyType === a.FLY_OPEN ? this._flyOpen(i, r, !1, o, n) : this.coinFlyType === a.FLY_OPEN_SMOOTH ? this._flyOpen(i, r, !0, o, n) : this.coinFlyType === a.FLY_ORDER ? this._flyOrder(i, r, o, n) : this.coinFlyType == a.FLY_BEZIER && this._flyBezier(i, r, o, n);
};
t.prototype._flyOpen = function(e, t, o, n, i) {
for (var r = this, a = 0, c = function(c) {
var l = s.coinPool.get();
s.node.addChild(l, 20);
l.scale = 1;
l.position = e;
var u, p = 24 * c, d = cc.misc.degreesToRadians(p), _ = cc.v2(Math.cos(d), Math.sin(d));
u = o ? 120 : Math.getRandom(100, 200);
var h = e.add(_.mul(u)), f = t.sub(h).mag() / 1e3;
cc.tween(l).to(.3, {
position: cc.v3(h.x, h.y, 0)
}, {
easing: "sineOut"
}).to(f, {
position: cc.v3(t.x, t.y, 0)
}, {
easing: "sineIn"
}).to(.1, {
scale: 0
}).call(function() {
r.coinPool.put(l);
a++;
n && n(a);
a >= 15 && i && i();
}).start();
}, s = this, l = 0; l < 15; l++) c(l);
};
t.prototype._flyBezier = function(e, t, o, n) {
for (var i = this, r = 0, a = function(a) {
var s = c.coinPool.get();
c.node.addChild(s, 20);
s.scale = 0;
s.position = e;
var l = t.sub(e).mag() / 500;
cc.tween(s).delay(.08 * a + Math.getRandom(0, .1)).then(cc.spawn(cc.bezierTo(l, [ e, cc.v2((t.x + e.x) / 2 + Math.getRandom(-150, 150), (t.y + e.y) / 2 + Math.getRandom(-150, 150)), t ]).easing(cc.easeOut(.5)), cc.scaleTo(.5, 1).easing(cc.easeCircleActionOut()))).to(.1, {
scale: 0
}).call(function() {
i.coinPool.put(s);
r++;
o && o(r);
r >= 15 && n && n();
}).start();
}, c = this, s = 0; s < 15; s++) a(s);
};
t.prototype._flyOrder = function(e, t, o, n) {
for (var i = this, r = 0, a = function(a) {
var s = c.coinPool.get();
s.position = cc.v3(e);
c.node.addChild(s, 20);
s.scale = 0;
var l = cc.v2(Math.getRandom(-1, 1), Math.getRandom(-1, 1)).normalize(), u = Math.getRandom(10, 50), p = e.add(l.mul(u)), d = t.sub(p).mag() / 1e3;
cc.tween(s).delay(.08 * a).to(.2, {
position: cc.v3(p.x, p.y),
scale: 1.2
}, {
easing: cc.easeCircleActionOut().easing
}).to(.4, {
scale: 1
}, {
easing: cc.easeCircleActionIn().easing
}).to(d, {
position: cc.v3(t.x, t.y, 0)
}, {
easing: "sineIn"
}).to(.1, {
scale: 0
}).call(function() {
i.coinPool.put(s);
r++;
o && o(r);
r >= 15 && n && n();
}).start();
}, c = this, s = 0; s < 15; s++) a(s);
};
var o;
t._instance = null;
r([ u(cc.Prefab) ], t.prototype, "coinPrefab", void 0);
r([ u({
tooltip: "飞币类型",
type: cc.Enum(a)
}) ], t.prototype, "coinFlyType", void 0);
return o = r([ l ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./TG_LMSJ_MyPool": "TG_LMSJ_MyPool"
} ],
TG_LMSJ_CoinBuild: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3d685NfFt1LnKDh1orhnpwi", "TG_LMSJ_CoinBuild");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.buildByNode = function(e) {
if (e) {
this.node.x = e.x;
this.node.y = e.y;
this.node.scaleX = e.scaleX;
this.node.scaleY = e.scaleY;
}
};
t.prototype.exportData = function() {
return {
x: this.node.x,
y: this.node.y,
scaleX: this.node.scaleX,
scaleY: this.node.scaleY,
name: this.node.name
};
};
return r([ c ], t);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
TG_LMSJ_Coin: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "910ddFz0/FCv4WONkb2+mWM", "TG_LMSJ_Coin");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config"), c = e("../TG_LMSJ_Enum"), s = e("../TG_LMSJ_GameConfig"), l = cc._decorator, u = l.ccclass, p = l.property, d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.spine = null;
t.rolePickCall = null;
return t;
}
t.prototype.start = function() {
var e = this;
this.node.stopAllActions();
this.spine.animation = "";
var t = .5 * Math.random();
this.scheduleOnce(function() {
e.spine.setAnimation(0, "JBDH", !0);
}, t);
};
t.prototype.onCollisionEnter = function(e) {
var t = this;
if ("Role" == e.node.group) {
a.TG_LMSJ_Config.playAudio(c.TG_LMSJ_AudioName.game_get_coin);
var o = this.spine.setAnimation(0, "JBDH2", !1);
this.spine.setTrackCompleteListener(o, function() {
t.rolePickCall && t.rolePickCall();
s.TG_LMSJ_GameConfig.getIns().pickCoinCount += 1;
t.node.destroy();
});
}
};
r([ p({
displayName: "spine动画",
type: sp.Skeleton
}) ], t.prototype, "spine", void 0);
return r([ u ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config": "TG_LMSJ_Config",
"../TG_LMSJ_Enum": "TG_LMSJ_Enum",
"../TG_LMSJ_GameConfig": "TG_LMSJ_GameConfig"
} ],
TG_LMSJ_Common: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b4a5crUGvhH2IFsx0b33Z5J", "TG_LMSJ_Common");
var n = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("./TG_LMSJ_Config"), r = cc._decorator, a = r.ccclass, c = (r.property, 
function() {
function e() {
this.mainGroup = {
"collision-matrix": [ [ !1 ], [ !1, !1, !0, !0, !0, !0, !0, !0, !0, !0, !0 ], [ !1, !0, !1, !0, !1, null, null, null, !0 ], [ !1, !0, !0, !1, null, null, null, null, !0 ], [ !1, !0, !1, !1, !1, null, null, null, !0 ], [ !1, !0, !1, !1, !1, !1 ], [ !1, !0, !1, !1, !1, !1, !1, null, !1 ], [ !1, !0, !1, !1, !1, !1, !1, !1 ], [ !1, !0, !0, !0, !0, !1, !1, !1, !1 ], [ !1, !0, !1, !1, !1, !1, !1, !1, !1, !1 ], [ !1, !0, !1, !1, !1, !1, !1, !1, !1, !1, !1 ] ],
"excluded-modules": [ "3D", "3D Primitive", "3D Physics/cannon.js", "3D Physics/Builtin", "3D Particle" ],
"group-list": [ "default", "Role", "Wall", "Stone", "Toilet", "Hurt", "Switch", "Transfer", "bubble", "Coin", "Tip" ],
"start-scene": "46743c47-3f7f-48c8-b92a-17e329222e54",
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
"last-module-event-record-time": 1676966084471,
"assets-sort-type": "name",
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
"preview-port": 7456,
"clear-simulator-cache": !0,
"migrate-history": [ "cloud-function" ]
};
this.showLoading = function() {
return new Promise(function(e) {
e && e();
});
};
this.hideLoading = function() {
return new Promise(function(e) {
e && e();
});
};
this.goHome = function() {
return new Promise(function(e) {
var t = i.TG_LMSJ_Config.getIns().bundleName, o = cc.assetManager.getBundle(t);
null != o && o.loadScene(i.TG_LMSJ_Config.getIns().hallName, function(t, o) {
if (!t && null != o) {
e && e();
cc.director.runScene(o);
}
});
});
};
}
return n([ a ], e);
}());
o.default = c;
cc._RF.pop();
}, {
"./TG_LMSJ_Config": "TG_LMSJ_Config"
} ],
TG_LMSJ_Config: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a2b03yEZypKDJ3mmpClQzMb", "TG_LMSJ_Config");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.TG_LMSJ_Config = void 0;
var n = function() {
function e() {
this.bundleName = "TG_LMSJ";
this.loadingName = "TG_LMSJ_Loading";
this.hallName = "TG_LMSJ_Hall";
this.gameName = "TG_LMSJ_Game";
this.onButtonBeginCall = null;
this.onButtonEndCall = null;
this.toiletTableData = null;
this.passCount = 0;
}
e.getIns = function() {
null == this._ins && (this._ins = new e());
return this._ins;
};
e.playAudio = function(e, t, o, n) {
void 0 === t && (t = !1);
void 0 === o && (o = "TG_LMSJ_Game");
void 0 === n && (n = 1);
if (null != cc.assetManager.getBundle(this._ins.bundleName)) {
var i = o + "/Res/Audio/" + e;
return PPSDK.playSfx(i, this._ins.bundleName, {
volume: n,
loop: t
});
}
};
e._ins = null;
return e;
}();
o.TG_LMSJ_Config = n;
cc._RF.pop();
}, {} ],
TG_LMSJ_Control: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "615baMhc7VHjbdZpVKjz1Hp", "TG_LMSJ_Control");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.TG_LMSJ_Control = void 0;
var n = e("./TG_LMSJ_LocalData"), i = function() {
function e() {}
e.initData = function() {
n.TG_LMSJ_LocalData.createLocalData();
};
e.getCoinCount = function() {
return n.TG_LMSJ_LocalData.getCoinCount();
};
e.setCoinCount = function(e) {
if (!(e < 0 || null == e || null == e)) {
n.TG_LMSJ_LocalData.setCoinCount(e);
PPSDK.emit("TG_LMSJ_UpdateCoin");
}
};
e.getMaxPassPart = function() {
return n.TG_LMSJ_LocalData.getMaxPassPart();
};
e.setMaxPassPart = function(e) {
null != e && null != e && (e <= this.getMaxPassPart() || n.TG_LMSJ_LocalData.setMaxPassPart(e));
};
e.getSelectPart = function() {
return n.TG_LMSJ_LocalData.getSelectPart();
};
e.setSelectPart = function(e) {
if (!(e <= 0 || null == e || null == e || e > this.getMaxPassPart() + 1)) {
e = Math.min(e, this.maxPart);
n.TG_LMSJ_LocalData.setSelectPart(e);
}
};
e.getHaveToiletIDArr = function() {
return n.TG_LMSJ_LocalData.getHaveToiletIDArr();
};
e.setHaveToiletIDArr = function(e) {
null == e || null == e || e.length <= 0 || this.getHaveToiletIDArr().length >= e.length || n.TG_LMSJ_LocalData.setHaveToiletIDArr(e);
};
e.getUseToiletID = function() {
return n.TG_LMSJ_LocalData.getUseToiletID();
};
e.setUseToiletID = function(e) {
null != e && null != e && -1 != this.getHaveToiletIDArr().indexOf(e) && n.TG_LMSJ_LocalData.setUseToiletID(e);
};
e.getHaveMapIDArr = function() {
return n.TG_LMSJ_LocalData.getHaveMapIDArr();
};
e.setHaveMapIDArr = function(e) {
null == e || null == e || e.length <= 0 || this.getHaveMapIDArr().length >= e.length || n.TG_LMSJ_LocalData.setHaveMapIDArr(e);
};
e.getUseMapID = function() {
return n.TG_LMSJ_LocalData.getUseMapID();
};
e.setUseMapID = function(e) {
null != e && null != e && -1 != this.getHaveMapIDArr().indexOf(e) && n.TG_LMSJ_LocalData.setUseMapID(e);
};
e.getGuideFinishLevel = function() {
return n.TG_LMSJ_LocalData.getGuideFinishLevel();
};
e.setGuideFinishLevel = function(e) {
if (!(null == e || e.length < 0)) {
var t = this.getGuideFinishLevel();
if (!(e.length <= t.length)) {
for (var o = 0, i = t; o < i.length; o++) {
var r = i[o];
if (-1 == e.indexOf(r)) return;
}
n.TG_LMSJ_LocalData.setGuideFinishLevel(e);
}
}
};
e.maxPart = 110;
return e;
}();
o.TG_LMSJ_Control = i;
cc._RF.pop();
}, {
"./TG_LMSJ_LocalData": "TG_LMSJ_LocalData"
} ],
TG_LMSJ_Enum: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7c13dxerNxFopjE8i5aOoSf", "TG_LMSJ_Enum");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.TG_LMSJ_AudioName = o.TG_LMSJ_EventName = void 0;
(function(e) {
e.create_level = "TG_LMSJ_CreateLevel";
e.game_end = "TG_LMSJ_gameEnd";
e.game_pause = "TG_LMSJ_gamePause";
e.game_fail = "TG_LMSJ_GameFail";
e.game_win = "TG_LMSJ_GameWin";
e.game_reset = "TG_LMSJ_GameReset";
e.game_next = "TG_LMSJ_GameNext";
e.touch_switch = "TG_LMSJ_TouchSwitch";
e.touch_transter = "TG_LMSJ_TouchTranster";
e.touch_guide = "TG_LMSJ_TouchGuide";
e.guide_touch = "TG_LMSJ_GuideTouch";
})(o.TG_LMSJ_EventName || (o.TG_LMSJ_EventName = {}));
(function(e) {
e.throw_ice = "IceBullet";
e.throw_fire = "fireBullet";
e.game_get_coin = "eatCoin";
e.transfer = "transfer";
e.thron_hurt = "thron";
e.end_get_coin = "collectCoin";
e.open_door = "openDoor";
e.role_dead = "dead";
e.fireworks = "fireworks";
e.man_win = "manWin";
e.woman_win = "womanWin";
e.draw_line = "drawLine";
})(o.TG_LMSJ_AudioName || (o.TG_LMSJ_AudioName = {}));
cc._RF.pop();
}, {} ],
TG_LMSJ_FireBuild: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4c7b5jkYiRIrqJAueduChhm", "TG_LMSJ_FireBuild");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.buildByNode = function(e) {
if (e) {
this.node.x = e.x;
this.node.y = e.y;
this.node.scaleX = e.scaleX;
this.node.scaleY = e.scaleY;
}
};
t.prototype.exportData = function() {
return {
x: this.node.x,
y: this.node.y,
scaleX: this.node.scaleX,
scaleY: this.node.scaleY,
name: this.node.name
};
};
return r([ c ], t);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
TG_LMSJ_GameConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "cf7e9m6GE1Mxrnii1aitcMh", "TG_LMSJ_GameConfig");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.TG_LMSJ_GameConfig = void 0;
var n = function() {
function e() {
this.gamePause = !1;
this.gameEnd = !1;
this.winShowRoleID = 0;
this.pickCoinCount = 0;
this.coinLevelArr = [ 9, 20, 31, 42, 53, 64, 75, 86, 97, 108 ];
this.timeLevelArr = [ 2, 5, 9, 20, 24, 31, 35, 42, 48, 49, 53, 56, 58, 59, 64, 66, 75, 77, 82, 86, 88, 90, 94, 97, 102, 108 ];
this.timeCountArr = [ 40, 50, 60, 60, 70, 60, 60, 60, 65, 75, 80, 65, 50, 75, 120, 50, 120, 80, 80, 150, 80, 80, 80, 170, 100, 200 ];
this.needGuideLevel = [ 1, 3, 4, 8, 11, 13, 25, 27, 30 ];
this.isShowPropGuide = !1;
}
e.getIns = function() {
null == this._ins && (this._ins = new e());
return this._ins;
};
e._ins = null;
return e;
}();
o.TG_LMSJ_GameConfig = n;
cc._RF.pop();
}, {} ],
TG_LMSJ_GameFailPop: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9c1f656GWtH1oyXmPkk30QN", "TG_LMSJ_GameFailPop");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../TG_LMSJ_Loading/TScript/TG_LMSJ_AdvertisingManager"), c = e("../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config"), s = e("../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control"), l = e("../TG_LMSJ_Enum"), u = cc._decorator, p = u.ccclass, d = u.property, _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.contentNode = null;
t.topNode = null;
t.btnNode = null;
t.coinLabel = null;
t.bgSprite = null;
t.bgSFArr = [];
return t;
}
t.prototype.start = function() {
this.showAni();
lieyou_SdkManager.gameFailLevel(s.TG_LMSJ_Control.getSelectPart(), c.TG_LMSJ_Config.getIns().bundleName);
a.showSpotByFinish();
this.coinLabel.string = "" + s.TG_LMSJ_Control.getCoinCount();
};
t.prototype.showAni = function() {
var e = this;
this.contentNode.active = !1;
this.topNode.active = !1;
this.btnNode.active = !1;
this.contentNode.active = !0;
this.contentNode.opacity = 0;
this.contentNode.scale = .5;
this.contentNode.stopAllActions();
cc.tween(this.contentNode).to(.2, {
scale: 1,
opacity: 255
}).call(function() {
e.topNode.active = !0;
e.btnNode.active = !0;
e.btnNode.opacity = 0;
e.btnNode.scale = .5;
e.btnNode.stopAllActions();
cc.tween(e.btnNode).to(.2, {
scale: 1,
opacity: 255
}).start();
}).start();
};
t.prototype.clickReset = function() {
PPSDK.emit(l.TG_LMSJ_EventName.game_reset, 1);
};
t.prototype.clickVideoNext = function() {
a.showRewardedVideoAd({
success: function() {
var e = s.TG_LMSJ_Control.getSelectPart();
s.TG_LMSJ_Control.setMaxPassPart(e);
e += 1;
s.TG_LMSJ_Control.setSelectPart(e);
PPSDK.emit(l.TG_LMSJ_EventName.game_next);
},
fail: function() {
PPSDK.showToast(PPSDK.languageManager.getLabel(c.TG_LMSJ_Config.getIns().bundleName, "视频播放失败"));
}
});
};
r([ d({
displayName: "content节点",
type: cc.Node
}) ], t.prototype, "contentNode", void 0);
r([ d({
displayName: "top节点",
type: cc.Node
}) ], t.prototype, "topNode", void 0);
r([ d({
displayName: "按钮节点",
type: cc.Node
}) ], t.prototype, "btnNode", void 0);
r([ d({
displayName: "金币数量",
type: cc.Label
}) ], t.prototype, "coinLabel", void 0);
r([ d({
displayName: "背景图片",
type: cc.Sprite
}) ], t.prototype, "bgSprite", void 0);
r([ d({
displayName: "背景图片合集",
type: cc.SpriteFrame
}) ], t.prototype, "bgSFArr", void 0);
return r([ p ], t);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {
"../../../TG_LMSJ_Loading/TScript/TG_LMSJ_AdvertisingManager": "TG_LMSJ_AdvertisingManager",
"../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config": "TG_LMSJ_Config",
"../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control": "TG_LMSJ_Control",
"../TG_LMSJ_Enum": "TG_LMSJ_Enum"
} ],
TG_LMSJ_GameMap: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "aadd0/tcDhBSJnG57LToTVC", "TG_LMSJ_GameMap");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control"), c = e("../MapItem/TG_LMSJ_Coin"), s = e("../MapItem/TG_LMSJ_Role"), l = e("../MapItem/TG_LMSJ_Transfer"), u = e("../TG_LMSJ_Enum"), p = e("../TG_LMSJ_GameConfig"), d = e("../TG_LMSJ_MapTouchDraw"), _ = e("../TG_LMSJ_Util"), h = cc._decorator, f = h.ccclass, y = h.property, g = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.drawPrefab = null;
t.drawLayer = null;
t.touchDrawNode = null;
t.fireworksPrefab = null;
t.deadPrefab = null;
t.roleLayer = null;
t.toiletLayer = null;
t.wallLayer = null;
t.switchLayer = null;
t.switchWallLayer = null;
t.hurtLayer = null;
t.transferLayer = null;
t.guideLayer = null;
t.fireworksLayer = null;
t.roleTs = null;
t.touchDrawTs = null;
t.draw = null;
t.drawWorldPosArr = [];
t.allTransferTs = [];
t.isCoinLevel = !1;
t.coinCount = 0;
return t;
}
t.prototype.start = function() {
this.roleLayer = this.node.getChildByName("roleLayer");
this.toiletLayer = this.node.getChildByName("toiletLayer");
this.wallLayer = this.node.getChildByName("wallLayer");
this.switchLayer = this.node.getChildByName("switchLayer");
this.switchWallLayer = this.node.getChildByName("switchWallLayer");
this.hurtLayer = this.node.getChildByName("hurtLayer");
this.transferLayer = this.node.getChildByName("transferLayer");
this.guideLayer = this.node.getChildByName("guideLayer");
this.fireworksLayer = this.node.getChildByName("fireworksLayer");
this.touchDrawTs = this.touchDrawNode.getComponent(d.default);
this.touchDrawTs.drawLine = this.drawLine.bind(this);
this.touchDrawTs.canDraw = this.canMovePos.bind(this);
var e = this;
this.touchDrawTs.getMoveLastPos = function() {
return e.drawWorldPosArr[e.drawWorldPosArr.length - 1];
};
this.touchDrawNode.active = !1;
this.drawWorldPosArr = [];
PPSDK.on(u.TG_LMSJ_EventName.game_end, this.gameEnd, this);
};
t.prototype.onDestroy = function() {
PPSDK.off(this);
};
t.prototype.initAllItem = function() {
this.touchDrawNode.active = !1;
var e = this.roleLayer.children[0];
this.roleTs = e.getComponent(s.default);
this.roleTs.drawCall = this.drawLine.bind(this);
this.roleTs.moveEndCall = this.roleMoveEnd.bind(this);
this.roleTs.canDraw = this.canMovePos.bind(this);
this.roleTs.isTouchToilet = this.isTouchToilet.bind(this);
this.roleTs.failCall = this.showRoleDead.bind(this);
this.allTransferTs = [];
if (this.transferLayer.childrenCount > 0) for (var t = 0, o = this.transferLayer.children; t < o.length; t++) if (null != (g = o[t])) {
var n = g.getComponent(l.default);
n.transferCall = this.transferCall.bind(this);
n.touchSuccessCall = this.isTouchTransfer.bind(this);
n && this.allTransferTs.push(n);
}
var i = cc.instantiate(this.drawPrefab);
i.setParent(this.drawLayer);
i.setPosition(cc.v2());
this.draw = i.getComponent(cc.Graphics);
this.draw.clear();
var r = Math.abs(this.roleTs.node.scale);
this.draw.lineWidth = 4 + 8 * r;
this.drawWorldPosArr = [];
var u = p.TG_LMSJ_GameConfig.getIns(), d = a.TG_LMSJ_Control.getSelectPart();
if (-1 == u.coinLevelArr.indexOf(d)) {
this.isCoinLevel = !1;
this.coinCount = 0;
} else {
this.isCoinLevel = !0;
for (var _ = function(e) {
if ("TG_LMSJ_Coin" == e.name) {
h.coinCount += 1;
var t = e.getComponent(c.default), o = h;
t.rolePickCall = function() {
o.coinCount -= 1;
};
}
}, h = this, f = 0, y = this.toiletLayer.children; f < y.length; f++) {
var g;
_(g = y[f]);
}
}
};
t.prototype.update = function() {
var e = p.TG_LMSJ_GameConfig.getIns();
if (!e.gameEnd && !e.gamePause && this.isCoinLevel && this.toiletLayer.childrenCount <= 0) {
this.isCoinLevel = !1;
PPSDK.emit(u.TG_LMSJ_EventName.game_end);
PPSDK.emit(u.TG_LMSJ_EventName.game_win);
}
};
t.prototype.clearAllItem = function() {
for (var e = 0, t = [ this.roleLayer, this.toiletLayer, this.wallLayer, this.switchLayer, this.switchWallLayer, this.hurtLayer, this.transferLayer, this.guideLayer ]; e < t.length; e++) t[e].removeAllChildren();
this.draw.clear();
this.touchDrawNode.active = !1;
};
t.prototype.drawLine = function(e, t) {
if (null != e && null != t) {
var o = this.node.convertToNodeSpaceAR(e), n = this.roleTs.lineColor;
this.draw.strokeColor = n;
if (0 == t) {
this.draw.moveTo(o.x, o.y);
this.drawWorldPosArr.push(e);
this.roleTs.drawPosArr.push(e);
} else {
var i = this.drawWorldPosArr[this.drawWorldPosArr.length - 1];
if (e.sub(i).len() > 5 || 2 == t) {
this.draw.lineTo(o.x, o.y);
this.drawWorldPosArr.push(e);
this.roleTs.drawPosArr.push(e);
this.draw.stroke();
}
}
if (2 == t) {
this.touchDrawNode.active = !0;
var r = this.node.convertToNodeSpaceAR(e);
this.touchDrawNode.setPosition(r);
}
3 == t && this.roleTs.walkPosArr.push(e);
}
};
t.prototype.roleMoveEnd = function() {
this.draw && this.draw.clear();
this.touchDrawNode && (this.touchDrawNode.active = !1);
};
t.prototype.getInitWorldPos = function(e, t) {
if (null != e) {
for (var o = [], n = 0, i = [ this.wallLayer, this.switchWallLayer ]; n < i.length; n++) (c = i[n]).childrenCount > 0 && o.push(c);
if (!(o.length <= 0)) {
for (var r = 0, a = o; r < a.length; r++) {
var c;
if (!((c = a[r]).childrenCount < 0)) for (var s = 0, l = c.children; s < l.length; s++) {
var u = l[s];
u.convertToNodeSpaceAR(e), u.convertToNodeSpaceAR(t);
if (_.TG_LMSJ_Util.lineRect([ t, e ], u)) {
var p = e.sub(t);
p.normalize(), p.len();
return;
}
}
}
return e;
}
}
};
t.prototype.canMovePos = function(e) {
if (null == e) return !1;
for (var t = this.drawWorldPosArr[this.drawWorldPosArr.length - 1], o = [], n = 0, i = [ this.wallLayer, this.switchWallLayer ]; n < i.length; n++) (c = i[n]).childrenCount > 0 && o.push(c);
if (!(o.length <= 0)) {
for (var r = 0, a = o; r < a.length; r++) {
var c;
if (!((c = a[r]).childrenCount < 0)) for (var s = 0, l = c.children; s < l.length; s++) {
var u = l[s];
if (0 != u.opacity) {
var p = u.convertToNodeSpaceAR(e);
u.convertToNodeSpaceAR(t), Math.abs(p.y), u.height, Math.abs(p.x), u.width;
if (_.TG_LMSJ_Util.pointInNode(e, u)) return !0;
if (_.TG_LMSJ_Util.lineRect([ e, t ], u)) return !0;
}
}
}
return !1;
}
};
t.prototype.transferCall = function(e, t, o) {
var n = null;
if (!(this.transferLayer.childrenCount <= 0)) {
for (var i = 0, r = this.allTransferTs; i < r.length; i++) {
var a = r[i];
if (a.spriteID == e && t != a.node) {
n = a;
break;
}
}
if (null != n) {
this.roleTs.stopMove();
n.canCollider = !1;
var c = n.node.convertToWorldSpaceAR(cc.v2()), s = o.parent.convertToNodeSpaceAR(c);
o.setPosition(s);
}
}
};
t.prototype.showFireworkAni = function(e) {
if (null != e) {
var t = this.roleLayer.children;
if (!(t.length <= 0)) for (var o = !0, n = 0, i = t; n < i.length; n++) {
var r = i[n];
if (null == r) return;
var a = r.convertToWorldSpaceAR(cc.v2()), c = this.fireworksLayer.convertToNodeSpaceAR(a), s = cc.instantiate(this.fireworksPrefab);
if (null == s) return;
s.setPosition(c);
s.setParent(this.fireworksLayer);
var l = s.getComponent(sp.Skeleton);
if (l) {
var u = l.setAnimation(0, "show", !1);
l.setTrackCompleteListener(u, function() {
if (o) {
o = !1;
e && e();
}
});
}
}
}
};
t.prototype.isTouchToilet = function(e) {
if (null == e) return !1;
if (this.toiletLayer.childrenCount <= 0) return !1;
for (var t = 0, o = this.toiletLayer.children; t < o.length; t++) {
var n = o[t];
if (null != n && _.TG_LMSJ_Util.pointInNode(e, n)) return !0;
}
return !1;
};
t.prototype.isTouchTransfer = function(e) {
if (null == this.roleTs) return !1;
var t = this.roleTs.drawPosArr[0];
return null != t && _.TG_LMSJ_Util.pointInNode(t, e);
};
t.prototype.showRoleDead = function() {
var e = cc.instantiate(this.deadPrefab);
if (null != e) {
e.setParent(this.roleLayer);
e.setPosition(this.roleTs.node.getPosition());
var t = e.getComponent(sp.Skeleton), o = t.setAnimation(0, "animation", !1);
t.setTrackCompleteListener(o, function() {
PPSDK.emit(u.TG_LMSJ_EventName.game_fail);
});
}
};
t.prototype.gameEnd = function() {
this.isCoinLevel = !1;
};
r([ y({
displayName: "绘画预制体",
type: cc.Prefab
}) ], t.prototype, "drawPrefab", void 0);
r([ y({
displayName: "绘画父节点",
type: cc.Node
}) ], t.prototype, "drawLayer", void 0);
r([ y({
displayName: "可绘制节点",
type: cc.Node
}) ], t.prototype, "touchDrawNode", void 0);
r([ y({
displayName: "烟花预设",
type: cc.Prefab
}) ], t.prototype, "fireworksPrefab", void 0);
r([ y({
displayName: "死亡预设",
type: cc.Prefab
}) ], t.prototype, "deadPrefab", void 0);
return r([ f ], t);
}(cc.Component);
o.default = g;
cc._RF.pop();
}, {
"../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control": "TG_LMSJ_Control",
"../MapItem/TG_LMSJ_Coin": "TG_LMSJ_Coin",
"../MapItem/TG_LMSJ_Role": "TG_LMSJ_Role",
"../MapItem/TG_LMSJ_Transfer": "TG_LMSJ_Transfer",
"../TG_LMSJ_Enum": "TG_LMSJ_Enum",
"../TG_LMSJ_GameConfig": "TG_LMSJ_GameConfig",
"../TG_LMSJ_MapTouchDraw": "TG_LMSJ_MapTouchDraw",
"../TG_LMSJ_Util": "TG_LMSJ_Util"
} ],
TG_LMSJ_GameSub: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "06c9eLspWpI0IkF9Tid3XnM", "TG_LMSJ_GameSub");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.TG_LMSJ_GameSub = void 0;
var n = e("../../../../resources/PPSDK/framework/common/subGame/SubGame"), i = e("../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config"), r = e("../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control"), a = function() {
this.name = "TG_LMSJ_Game";
this.group = {
"collision-matrix": [ [ !1 ], [ !1, !1, !0, !0, !0, !0, !0, !0, !0, !0, !0 ], [ !1, !0, !1, !0, !1, null, null, null, !0 ], [ !1, !0, !0, !1, null, null, null, null, !0 ], [ !1, !0, !1, !1, !1, null, null, null, !0 ], [ !1, !0, !1, !1, !1, !1 ], [ !1, !0, !1, !1, !1, !1, !1, null, !1 ], [ !1, !0, !1, !1, !1, !1, !1, !1 ], [ !1, !0, !0, !0, !0, !1, !1, !1, !1 ], [ !1, !0, !1, !1, !1, !1, !1, !1, !1, !1 ], [ !1, !0, !1, !1, !1, !1, !1, !1, !1, !1, !1 ] ],
"excluded-modules": [ "3D", "3D Primitive", "3D Physics/cannon.js", "3D Physics/Builtin", "3D Particle" ],
"group-list": [ "default", "Role", "Wall", "Stone", "Toilet", "Hurt", "Switch", "Transfer", "bubble", "Coin", "Tip" ],
"start-scene": "46743c47-3f7f-48c8-b92a-17e329222e54",
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
"last-module-event-record-time": 1676966084471,
"assets-sort-type": "name",
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
"preview-port": 7456,
"clear-simulator-cache": !0,
"migrate-history": [ "cloud-function" ]
};
this.getUnlockLevel = function() {
return r.TG_LMSJ_Control.getMaxPassPart();
};
this.goGame = function() {
return new Promise(function(e) {
var t = i.TG_LMSJ_Config.getIns().bundleName, o = cc.assetManager.getBundle(t);
null != o && o.loadScene(i.TG_LMSJ_Config.getIns().gameName, function(t, o) {
if (!t && null != o) {
e && e();
cc.director.runScene(o);
}
});
});
};
};
o.TG_LMSJ_GameSub = a;
n.SubGame.addSub(new a(), i.TG_LMSJ_Config.getIns().bundleName);
cc._RF.pop();
}, {
"../../../../resources/PPSDK/framework/common/subGame/SubGame": void 0,
"../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config": "TG_LMSJ_Config",
"../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control": "TG_LMSJ_Control"
} ],
TG_LMSJ_GameUI: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "47859urJ2JHfY6NxkjvAPN1", "TG_LMSJ_GameUI");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../TG_LMSJ_Loading/TScript/TG_LMSJ_AdvertisingManager"), c = e("../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config"), s = e("../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control"), l = e("./TG_LMSJ_Enum"), u = e("./TG_LMSJ_GameConfig"), p = e("./UI/TG_LMSJ_GameFailPop"), d = e("./UI/TG_LMSJ_GameWinPop"), _ = cc._decorator, h = _.ccclass, f = _.property, y = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.curLabel = null;
t.winPopPrefab = null;
t.failPopPrfab = null;
t.popLayer = null;
t.uiLayer = null;
t.getPrefab = null;
t.timeNode = null;
t.winCall = null;
t.failCall = null;
t.minLabel = null;
t.secLabel = null;
t.toiletTime = 10;
return t;
}
t.prototype.onLoad = function() {
this.node.scale = Math.min(Math.min(cc.winSize.width / cc.view.getDesignResolutionSize().width, 1), Math.min(cc.winSize.height / cc.view.getDesignResolutionSize().height, 1));
this.node.scale > 1 && (this.node.scale = 1);
PPSDK.on("TG_LMSJ_CreateRewardPop", this.showGetPop, this);
PPSDK.on(l.TG_LMSJ_EventName.game_end, this.gameEnd, this);
this.minLabel = this.timeNode.getChildByName("minTime").getComponent(cc.Label);
this.secLabel = this.timeNode.getChildByName("secTime").getComponent(cc.Label);
this.timeNode.active = !1;
this.toiletTime = 10;
};
t.prototype.onDestroy = function() {
PPSDK.off(this);
};
t.prototype.update = function(e) {
var t = u.TG_LMSJ_GameConfig.getIns();
if (null != t && this.timeNode.active) {
if (t.gameEnd) return;
if (t.gamePause) return;
this.toiletTime -= e;
if (this.toiletTime <= 0) {
var o = s.TG_LMSJ_Control.getSelectPart();
PPSDK.emit(l.TG_LMSJ_EventName.game_end);
if (-1 != t.coinLevelArr.indexOf(o)) {
PPSDK.emit(l.TG_LMSJ_EventName.game_win);
this.timeNode.active = !1;
} else {
PPSDK.emit(l.TG_LMSJ_EventName.game_fail);
this.timeNode.active = !1;
}
return;
}
this.updateRemainTime();
}
};
t.prototype.enterNewGame = function() {
var e = s.TG_LMSJ_Control.getSelectPart();
this.curLabel.string = "" + e;
this.popLayer.childrenCount > 0 && this.popLayer.destroyAllChildren();
this.uiLayer.childrenCount > 0 && this.uiLayer.destroyAllChildren();
var t = u.TG_LMSJ_GameConfig.getIns(), o = t.timeLevelArr.indexOf(e);
if (-1 != o) {
this.timeNode.active = !0;
var n = t.timeCountArr[o];
this.toiletTime = n;
this.updateRemainTime();
} else this.timeNode.active = !1;
};
t.prototype.showWinPop = function() {
var e = cc.instantiate(this.winPopPrefab);
if (null != e) {
e.setPosition(cc.v2());
e.setParent(this.uiLayer);
var t = e.getComponent(d.default);
this.winCall = t.clickNext.bind(t);
}
};
t.prototype.showFailPop = function() {
var e = cc.instantiate(this.failPopPrfab);
if (null != e) {
e.setPosition(cc.v2());
e.setParent(this.uiLayer);
var t = e.getComponent(p.default);
this.failCall = t.clickReset.bind(t);
}
};
t.prototype.clickSkipBtn = function() {
var e = this;
a.showRewardedVideoAd({
success: function() {
u.TG_LMSJ_GameConfig.getIns().gamePause = !0;
PPSDK.emit(l.TG_LMSJ_EventName.game_end);
PPSDK.emit(l.TG_LMSJ_EventName.game_pause);
e.showWinPop();
},
fail: function() {
PPSDK.showToast(PPSDK.languageManager.getLabel(c.TG_LMSJ_Config.getIns().bundleName, "视频播放失败"));
}
});
};
t.prototype.showGetPop = function(e) {
if (null != e) {
e.state;
cc.instantiate(this.getPrefab).setParent(this.popLayer);
}
};
t.prototype.updateRemainTime = function() {
var e, t = Math.ceil(this.toiletTime), o = Math.floor(t / 60), n = Math.ceil(this.toiletTime - 60 * o);
e = o < 10 ? "0" + o : "" + o;
this.minLabel.string = e;
var i;
i = n < 10 ? "0" + n : "" + n;
this.secLabel.string = i;
};
t.prototype.gameEnd = function() {
PPSDK.vibrate(!0);
this.timeNode.active = !1;
};
r([ f({
displayName: "当前关卡Label",
type: cc.Label
}) ], t.prototype, "curLabel", void 0);
r([ f({
displayName: "胜利弹窗",
type: cc.Prefab
}) ], t.prototype, "winPopPrefab", void 0);
r([ f({
displayName: "失败弹窗",
type: cc.Prefab
}) ], t.prototype, "failPopPrfab", void 0);
r([ f({
displayName: "弹窗父节点",
type: cc.Node
}) ], t.prototype, "popLayer", void 0);
r([ f({
displayName: "界面父节点",
type: cc.Node
}) ], t.prototype, "uiLayer", void 0);
r([ f({
displayName: "获得界面",
type: cc.Prefab
}) ], t.prototype, "getPrefab", void 0);
r([ f({
displayName: "时间节点",
type: cc.Node
}) ], t.prototype, "timeNode", void 0);
return r([ h ], t);
}(cc.Component);
o.default = y;
cc._RF.pop();
}, {
"../../TG_LMSJ_Loading/TScript/TG_LMSJ_AdvertisingManager": "TG_LMSJ_AdvertisingManager",
"../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config": "TG_LMSJ_Config",
"../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control": "TG_LMSJ_Control",
"./TG_LMSJ_Enum": "TG_LMSJ_Enum",
"./TG_LMSJ_GameConfig": "TG_LMSJ_GameConfig",
"./UI/TG_LMSJ_GameFailPop": "TG_LMSJ_GameFailPop",
"./UI/TG_LMSJ_GameWinPop": "TG_LMSJ_GameWinPop"
} ],
TG_LMSJ_GameWinPop: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7a387hRB8BB/7IKZwoo/kI/", "TG_LMSJ_GameWinPop");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../TG_LMSJ_Hall/TScript/TG_LMSJ_CoinAniNodes"), c = e("../../../TG_LMSJ_Loading/TScript/TG_LMSJ_AdvertisingManager"), s = e("../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config"), l = e("../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control"), u = e("../TG_LMSJ_Enum"), p = e("../TG_LMSJ_GameConfig"), d = cc._decorator, _ = d.ccclass, h = d.property, f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.contentNode = null;
t.topNode = null;
t.btnNode = null;
t.coinLabel = null;
t.coinPrefab = null;
t.coinLayer = null;
t.manSpine = null;
t.womanSpine = null;
t.bgSprite = null;
t.bgSFArr = [];
t.barSprite = null;
t.roleVideoMask = null;
t.barParent = null;
t.canGetCoinLabel = null;
t.isDouble = !1;
t.coinLayerPosArr = [ cc.v2(0, -175), cc.v2(15, -159) ];
t.coinLayerAngleArr = [ 0, 5 ];
t.addcoin = 0;
return t;
}
t.prototype.start = function() {
c.showSpotByFinish();
this.showAni();
var e = p.TG_LMSJ_GameConfig.getIns().winShowRoleID;
if (0 == e) {
this.manSpine.node.active = !1;
this.womanSpine.node.active = !1;
this.barParent.active = !1;
} else {
this.barParent.active = !0;
if (e <= 5) {
this.manSpine.node.active = !0;
this.womanSpine.node.active = !1;
this.manSpine.setSkin("skin" + e);
} else {
e -= 5;
this.manSpine.node.active = !1;
this.womanSpine.node.active = !0;
this.womanSpine.setSkin("skin" + e);
}
s.TG_LMSJ_Config.getIns().passCount += 1;
var t = s.TG_LMSJ_Config.getIns().passCount;
if (t > 5) {
s.TG_LMSJ_Config.getIns().passCount = 1;
t = 1;
}
this.barSprite.fillRange = t / 5;
this.roleVideoMask.active = !0;
var o = this.manSpine.node.parent;
o.stopAllActions();
o.angle = 0;
if (this.barSprite.fillRange >= 1) {
this.roleVideoMask.active = !1;
cc.tween(o).repeatForever(cc.tween(o).to(.2, {
angle: 20
}).to(.4, {
angle: -20
}).to(.2, {
angle: 0
}).to(.2, {
angle: 20
}).to(.4, {
angle: -20
}).to(.2, {
angle: 0
}).delay(2)).start();
}
}
this.coinLabel.string = "" + l.TG_LMSJ_Control.getCoinCount();
this.isDouble = !1;
lieyou_SdkManager.gameFinishLevel(l.TG_LMSJ_Control.getSelectPart(), s.TG_LMSJ_Config.getIns().bundleName);
var n = l.TG_LMSJ_Control.getSelectPart();
l.TG_LMSJ_Control.setMaxPassPart(n);
this.addcoin = this.getCoinValue();
this.canGetCoinLabel.string = "" + this.addcoin;
};
t.prototype.showAni = function() {
var e = this;
this.contentNode.active = !1;
this.topNode.active = !1;
this.btnNode.active = !1;
this.contentNode.active = !0;
this.contentNode.opacity = 0;
this.contentNode.scale = .5;
this.contentNode.stopAllActions();
cc.tween(this.contentNode).to(.2, {
scale: 1,
opacity: 255
}).call(function() {
e.topNode.active = !0;
e.btnNode.active = !0;
e.btnNode.opacity = 0;
e.btnNode.scale = .5;
e.btnNode.stopAllActions();
cc.tween(e.btnNode).to(.2, {
scale: 1,
opacity: 255
}).start();
}).start();
};
t.prototype.clickDouble = function() {
var e = this, t = this;
c.showRewardedVideoAd({
success: function() {
t.isDouble = !0;
e.clickNext();
},
fail: function() {
PPSDK.showToast(PPSDK.languageManager.getLabel(s.TG_LMSJ_Config.getIns().bundleName, "视频播放失败"));
}
});
};
t.prototype.clickNext = function() {
var e = this;
if ("oppo" == lieyou_SdkManager.getSysPlatformName() || "huawei" == lieyou_SdkManager.getSysPlatformName()) {
console.log("弹出插屏和banner");
lieyou_SdkManager.showBannerByBottom();
lieyou_SdkManager.showSpotByOther();
}
this.btnNode.getChildByName("nextBtn").convertToWorldSpaceAR(cc.v2());
this.isDouble && this.btnNode.getChildByName("doubleBtn").convertToWorldSpaceAR(cc.v2());
this.coinLabel.node.parent.convertToWorldSpaceAR(cc.v2()).x -= 10;
s.TG_LMSJ_Config.playAudio(u.TG_LMSJ_AudioName.end_get_coin);
a.default._instance.showAni(this.canGetCoinLabel.node.parent, this.coinLabel.node.parent, null, function() {
var t = l.TG_LMSJ_Control.getCoinCount();
e.isDouble && (e.addcoin *= 2);
t += e.addcoin;
l.TG_LMSJ_Control.setCoinCount(t);
e.coinLabel.string = "" + t;
e.scheduleOnce(function() {
PPSDK.emit(u.TG_LMSJ_EventName.game_next);
}, .2);
});
var t = l.TG_LMSJ_Control.getSelectPart();
t += 1;
l.TG_LMSJ_Control.setSelectPart(t);
};
t.prototype.clickVideoBtn = function() {
this.roleVideoMask.active;
};
t.prototype.getCoinValue = function() {
var e = l.TG_LMSJ_Control.getSelectPart(), t = p.TG_LMSJ_GameConfig.getIns();
return (-1 == t.coinLevelArr.indexOf(e) ? 100 : 50) + 5 * t.pickCoinCount;
};
r([ h({
displayName: "content节点",
type: cc.Node
}) ], t.prototype, "contentNode", void 0);
r([ h({
displayName: "top节点",
type: cc.Node
}) ], t.prototype, "topNode", void 0);
r([ h({
displayName: "按钮节点",
type: cc.Node
}) ], t.prototype, "btnNode", void 0);
r([ h({
displayName: "金币数量",
type: cc.Label
}) ], t.prototype, "coinLabel", void 0);
r([ h({
displayName: "金币预设",
type: cc.Prefab
}) ], t.prototype, "coinPrefab", void 0);
r([ h({
displayName: "金币父节点",
type: cc.Node
}) ], t.prototype, "coinLayer", void 0);
r([ h({
displayName: "男角色Spine",
type: sp.Skeleton
}) ], t.prototype, "manSpine", void 0);
r([ h({
displayName: "女角色Spine",
type: sp.Skeleton
}) ], t.prototype, "womanSpine", void 0);
r([ h({
displayName: "背景图片",
type: cc.Sprite
}) ], t.prototype, "bgSprite", void 0);
r([ h({
displayName: "背景图片合集",
type: cc.SpriteFrame
}) ], t.prototype, "bgSFArr", void 0);
r([ h({
displayName: "进度条",
type: cc.Sprite
}) ], t.prototype, "barSprite", void 0);
r([ h({
displayName: "角色视频遮罩节点",
type: cc.Node
}) ], t.prototype, "roleVideoMask", void 0);
r([ h({
displayName: "进度父节点",
type: cc.Node
}) ], t.prototype, "barParent", void 0);
r([ h({
displayName: "能获取的金币Label",
type: cc.Label
}) ], t.prototype, "canGetCoinLabel", void 0);
return r([ _ ], t);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../../../TG_LMSJ_Hall/TScript/TG_LMSJ_CoinAniNodes": "TG_LMSJ_CoinAniNodes",
"../../../TG_LMSJ_Loading/TScript/TG_LMSJ_AdvertisingManager": "TG_LMSJ_AdvertisingManager",
"../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config": "TG_LMSJ_Config",
"../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control": "TG_LMSJ_Control",
"../TG_LMSJ_Enum": "TG_LMSJ_Enum",
"../TG_LMSJ_GameConfig": "TG_LMSJ_GameConfig"
} ],
TG_LMSJ_Game: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4da49WoWhhIGIHwsNcp9k53", "TG_LMSJ_Game");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../../resources/PPSDK/framework/common/subGame/SubGame"), c = e("../../TG_LMSJ_Loading/TScript/TG_LMSJ_AdvertisingManager"), s = e("../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config"), l = e("../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control"), u = e("./MapEditor/TG_LMSJ_GameMap"), p = e("./TG_LMSJ_Enum"), d = e("./TG_LMSJ_GameConfig"), _ = e("./TG_LMSJ_GameUI"), h = e("./TG_LMSJ_GuideManager"), f = cc._decorator, y = f.ccclass, g = f.property, S = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.gameUI = null;
t.gameMap = null;
t.guideManager = null;
t.maskNode = null;
t.maskTime = 1;
return t;
}
t.prototype.onLoad = function() {
var e = this, t = cc.director.getCollisionManager();
t.enabled = !0;
t.enabledDebugDraw = !1;
var o = cc.director.getPhysicsManager();
o.enabled = !0;
o.debugDrawFlags = 0;
this.addAdver();
this.maskNode.active = !1;
PPSDK.on(p.TG_LMSJ_EventName.game_fail, this.gameFail, this);
PPSDK.on(p.TG_LMSJ_EventName.game_win, this.gameWin, this);
PPSDK.on(p.TG_LMSJ_EventName.game_reset, this.gameReset, this);
PPSDK.on(p.TG_LMSJ_EventName.game_next, this.gameNext, this);
var n = s.TG_LMSJ_Config.getIns(), i = n.gameName + "/Res/Audio/gameBgm";
PPSDK.playMusic(i, n.bundleName, {
loop: !0,
volume: .75
});
lieyou_SdkManager.addListenerBackKey({
node: this.node,
callBack: function() {
e.gameUI.popLayer.childrenCount > 0 ? e.gameUI.popLayer.removeAllChildren() : e.gameUI.uiLayer.childrenCount > 0 ? -1 == e.gameUI.uiLayer.children[0].name.indexOf("Win") ? e.gameUI.failCall && e.gameUI.failCall() : e.gameUI.winCall && e.gameUI.winCall() : e.returnHall();
}
});
};
t.prototype.onDestroy = function() {
PPSDK.stopMusic();
PPSDK.off(this);
cc.audioEngine.stopAllEffects();
};
t.prototype.addAdver = function() {
c.showBannerByBottom();
};
t.prototype.start = function() {
this.createLevel();
};
t.prototype.touchGuide = function() {
this.guideManager.node.active && d.TG_LMSJ_GameConfig.getIns().isShowPropGuide && PPSDK.emit(p.TG_LMSJ_EventName.guide_touch);
};
t.prototype.createLevel = function() {
var e = this;
if (!(l.TG_LMSJ_Control.getSelectPart() < 1)) {
var t = d.TG_LMSJ_GameConfig.getIns();
t.gameEnd = !1;
t.gamePause = !1;
t.pickCoinCount = 0;
PPSDK.emit(p.TG_LMSJ_EventName.create_level);
this.gameUI.enterNewGame();
lieyou_SdkManager.gameBeginLevel(l.TG_LMSJ_Control.getSelectPart(), s.TG_LMSJ_Config.getIns().bundleName);
this.scheduleOnce(function() {
e.guideManager.init();
});
}
};
t.prototype.gameFail = function() {
d.TG_LMSJ_GameConfig.getIns().gamePause = !0;
PPSDK.emit(p.TG_LMSJ_EventName.game_pause);
s.TG_LMSJ_Config.playAudio("fail");
this.gameUI.showFailPop();
};
t.prototype.gameWin = function() {
var e = this;
d.TG_LMSJ_GameConfig.getIns().gamePause = !0;
PPSDK.emit(p.TG_LMSJ_EventName.game_pause);
s.TG_LMSJ_Config.playAudio(p.TG_LMSJ_AudioName.fireworks);
this.gameMap.showFireworkAni(function() {
s.TG_LMSJ_Config.playAudio("victory");
e.gameUI.showWinPop();
});
};
t.prototype.gameReset = function(e) {
var t = this;
1 != e && lieyou_SdkManager.gameFailLevel(l.TG_LMSJ_Control.getSelectPart(), s.TG_LMSJ_Config.getIns().bundleName);
cc.audioEngine.stopAllEffects();
d.TG_LMSJ_GameConfig.getIns().gamePause = !1;
this.maskNode.active = !0;
this.maskNode.opacity = 0;
this.maskNode.stopAllActions();
cc.tween(this.maskNode).to(this.maskTime, {
opacity: 255
}).call(function() {
t.gameMap.clearAllItem();
t.createLevel();
}).delay(this.maskTime / 4).to(this.maskTime, {
opacity: 0
}).call(function() {
t.maskNode.active = !1;
}).start();
};
t.prototype.gameNext = function() {
var e = this;
d.TG_LMSJ_GameConfig.getIns().gamePause = !1;
this.maskNode.active = !0;
this.maskNode.opacity = 255;
this.maskNode.stopAllActions();
this.gameMap.clearAllItem();
this.createLevel();
cc.tween(this.maskNode).delay(this.maskTime / 4).to(this.maskTime, {
opacity: 0
}).call(function() {
e.maskNode.active = !1;
}).start();
};
t.prototype.clickTipBtn = function() {};
t.prototype.returnHall = function() {
lieyou_SdkManager.gameFailLevel(l.TG_LMSJ_Control.getSelectPart(), s.TG_LMSJ_Config.getIns().bundleName);
a.SubGame.getCommon(s.TG_LMSJ_Config.getIns().hallName).goHome();
};
r([ g({
displayName: "游戏UI脚本",
type: _.default
}) ], t.prototype, "gameUI", void 0);
r([ g({
displayName: "游戏地图脚本",
type: u.default
}) ], t.prototype, "gameMap", void 0);
r([ g({
displayName: "引导管理脚本",
type: h.default
}) ], t.prototype, "guideManager", void 0);
r([ g({
displayName: "遮罩节点",
type: cc.Node
}) ], t.prototype, "maskNode", void 0);
return r([ y ], t);
}(cc.Component);
o.default = S;
cc._RF.pop();
}, {
"../../../../resources/PPSDK/framework/common/subGame/SubGame": void 0,
"../../TG_LMSJ_Loading/TScript/TG_LMSJ_AdvertisingManager": "TG_LMSJ_AdvertisingManager",
"../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config": "TG_LMSJ_Config",
"../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control": "TG_LMSJ_Control",
"./MapEditor/TG_LMSJ_GameMap": "TG_LMSJ_GameMap",
"./TG_LMSJ_Enum": "TG_LMSJ_Enum",
"./TG_LMSJ_GameConfig": "TG_LMSJ_GameConfig",
"./TG_LMSJ_GameUI": "TG_LMSJ_GameUI",
"./TG_LMSJ_GuideManager": "TG_LMSJ_GuideManager"
} ],
TG_LMSJ_GuideManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1231aB1ESNFAbsfdDbwEvL0", "TG_LMSJ_GuideManager");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control"), c = e("./MapItem/TG_LMSJ_PropGuideBuild"), s = e("./TG_LMSJ_Arrow"), l = e("./TG_LMSJ_Enum"), u = e("./TG_LMSJ_GameConfig"), p = e("./TG_LMSJ_PencilLine"), d = e("./TG_LMSJ_PropMask"), _ = cc._decorator, h = _.ccclass, f = _.property, y = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.textPrefab = null;
t.maskPrefab = null;
t.arrowPrefab = null;
t.drawLinePrefab = null;
t.touchNode = null;
t.maskNode = null;
t.textNode = null;
t.drawLineNode = null;
t.arrowNode = null;
t.arrowGuideArr = [];
return t;
}
t.prototype.start = function() {
PPSDK.on(l.TG_LMSJ_EventName.touch_guide, this.touchGuideNode, this);
PPSDK.on(l.TG_LMSJ_EventName.guide_touch, this.hidePropGuide, this);
};
t.prototype.init = function() {
var e = this;
u.TG_LMSJ_GameConfig.getIns().isShowPropGuide = !1;
var t = a.TG_LMSJ_Control.getGuideFinishLevel(), o = a.TG_LMSJ_Control.getSelectPart();
this.node.active = !1;
this.touchNode.active = !1;
if (-1 != u.TG_LMSJ_GameConfig.getIns().needGuideLevel.indexOf(o) && -1 == t.indexOf(o)) {
this.node.active = !0;
this.touchNode.active = !0;
this.touchNode.on(cc.Node.EventType.TOUCH_START, this.hidePropGuide, this);
this.scheduleOnce(function() {
var t = a.TG_LMSJ_Control.getGuideFinishLevel().clone();
t.push(o);
a.TG_LMSJ_Control.setGuideFinishLevel(t);
e.dealPropGuide();
e.dealArrowGuide();
}, .02);
u.TG_LMSJ_GameConfig.getIns().isShowPropGuide = !0;
}
};
t.prototype.dealPropGuide = function() {
var e = this.node.getChildByName("TG_LMSJ_PropGuide");
if (null != e) {
var t = e.getComponent(c.default);
if (null != t) {
if (t.isShowMask) {
this.maskNode = cc.instantiate(this.maskPrefab);
if (null == this.maskNode) return;
this.maskNode.setParent(this.node);
var o = this.maskNode.getComponent(d.default);
if (null == o) return;
t.maskMove ? o.init(t.maskRadius, t.maskPos, t.maskMovePos) : o.init(t.maskRadius, t.maskPos);
}
if (t.isShowText) {
this.textNode = cc.instantiate(this.textPrefab);
if (null == this.textNode) return;
this.textNode.setParent(this.node);
this.textNode.setPosition(cc.v2(0, 400));
}
}
}
};
t.prototype.dealArrowGuide = function() {
this.arrowGuideArr = [];
this.arrowNode = null;
var e = this.node.children;
if (!(e.length <= 0)) {
for (var t = 0; t < e.length; t++) {
var o = e[t];
"TG_LMSJ_ArrowGuide" == o.name && this.arrowGuideArr.push(o);
}
if (!(this.arrowGuideArr.length <= 0)) {
this.arrowNode = cc.instantiate(this.arrowPrefab);
this.arrowNode.setParent(this.node);
this.arrowNode.setPosition(this.arrowGuideArr[0].getPosition());
this.arrowNode.getComponent(s.default).showAni();
if (1 == a.TG_LMSJ_Control.getSelectPart()) {
var n = cc.instantiate(this.drawLinePrefab);
if (null == n) return;
this.drawLineNode = n;
n.setParent(this.node);
n.setPosition(cc.v2(-145, 177));
var i = this.node.convertToWorldSpaceAR(cc.v2(160, 177));
n.getComponent(p.default).drawLine(i, 100, 50);
}
}
}
};
t.prototype.hidePropGuide = function() {
u.TG_LMSJ_GameConfig.getIns().isShowPropGuide = !1;
this.touchNode.off(cc.Node.EventType.TOUCH_START, this.hidePropGuide, this);
this.touchNode.active = !1;
if (this.maskNode) {
this.maskNode.destroy();
this.maskNode = null;
}
if (this.textNode) {
this.textNode.destroy();
this.textNode = null;
}
if (this.drawLineNode) {
this.drawLineNode.destroy();
this.drawLineNode = null;
}
};
t.prototype.touchGuideNode = function(e) {
if (null != e) {
var t = this.arrowGuideArr.indexOf(e);
if (-1 == t) this.arrowGuideArr.shift().destroy(); else {
this.arrowGuideArr.splice(t, 1);
e.destroy();
}
if (this.arrowGuideArr.length <= 0) this.arrowNode.destroy(); else {
this.arrowNode.setPosition(this.arrowGuideArr[0].getPosition());
this.arrowNode.getComponent(s.default).showAni();
}
}
};
t.prototype.showGuide = function() {};
t.prototype.onDestroy = function() {
PPSDK.off(this);
};
r([ f({
displayName: "文本预设",
type: cc.Prefab
}) ], t.prototype, "textPrefab", void 0);
r([ f({
displayName: "黑色遮罩节点",
type: cc.Prefab
}) ], t.prototype, "maskPrefab", void 0);
r([ f({
displayName: "箭头预设",
type: cc.Prefab
}) ], t.prototype, "arrowPrefab", void 0);
r([ f({
displayName: "画线预设",
type: cc.Prefab
}) ], t.prototype, "drawLinePrefab", void 0);
r([ f({
displayName: "触碰节点",
type: cc.Node
}) ], t.prototype, "touchNode", void 0);
return r([ h ], t);
}(cc.Component);
o.default = y;
cc._RF.pop();
}, {
"../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control": "TG_LMSJ_Control",
"./MapItem/TG_LMSJ_PropGuideBuild": "TG_LMSJ_PropGuideBuild",
"./TG_LMSJ_Arrow": "TG_LMSJ_Arrow",
"./TG_LMSJ_Enum": "TG_LMSJ_Enum",
"./TG_LMSJ_GameConfig": "TG_LMSJ_GameConfig",
"./TG_LMSJ_PencilLine": "TG_LMSJ_PencilLine",
"./TG_LMSJ_PropMask": "TG_LMSJ_PropMask"
} ],
TG_LMSJ_HallSetPop: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "aa0873lJmpIe4wU3WFpnH7g", "TG_LMSJ_HallSetPop");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("./TG_LMSJ_PopBase"), c = cc._decorator, s = c.ccclass, l = c.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.sfxSprite = null;
t.musicSprite = null;
t.shakeSprite = null;
t.stateSFArr = [];
return t;
}
t.prototype.start = function() {
this.showAni(null, 1);
this.updateMusicState();
};
t.prototype.clickAudio = function() {
var e = PPSDK.musicState;
e = !e;
PPSDK.musicState = e;
this.updateMusicState();
};
t.prototype.clickEffect = function() {
var e = PPSDK.sfxState;
e = !e;
PPSDK.sfxState = e;
this.updateMusicState();
};
t.prototype.clickShake = function() {
var e = PPSDK.vibrateState;
e = !e;
PPSDK.vibrateState = e;
this.updateMusicState();
};
t.prototype.updateMusicState = function() {
PPSDK.musicState ? this.musicSprite.spriteFrame = this.stateSFArr[0] : this.musicSprite.spriteFrame = this.stateSFArr[1];
PPSDK.sfxState ? this.sfxSprite.spriteFrame = this.stateSFArr[0] : this.sfxSprite.spriteFrame = this.stateSFArr[1];
PPSDK.vibrateState ? this.shakeSprite.spriteFrame = this.stateSFArr[0] : this.shakeSprite.spriteFrame = this.stateSFArr[1];
};
t.prototype.clickClose = function() {
var e = this;
this.hideAni(function() {
e.node.destroy();
});
};
r([ l({
displayName: "音效状态图片",
type: cc.Sprite
}) ], t.prototype, "sfxSprite", void 0);
r([ l({
displayName: "音乐状态图片",
type: cc.Sprite
}) ], t.prototype, "musicSprite", void 0);
r([ l({
displayName: "震动状态图片",
type: cc.Sprite
}) ], t.prototype, "shakeSprite", void 0);
r([ l({
displayName: "状态图片合集",
type: cc.SpriteFrame
}) ], t.prototype, "stateSFArr", void 0);
return r([ s ], t);
}(a.default);
o.default = u;
cc._RF.pop();
}, {
"./TG_LMSJ_PopBase": "TG_LMSJ_PopBase"
} ],
TG_LMSJ_Hall: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "39037Vy271DNquSXPsy0SLF", "TG_LMSJ_Hall");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../../resources/PPSDK/framework/common/subGame/SubGame"), c = e("../../TG_LMSJ_Loading/TScript/TG_LMSJ_AdvertisingManager"), s = e("../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config"), l = e("../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control"), u = e("./TG_LMSJ_PopBase"), p = e("./TG_LMSJ_RewardPop"), d = e("./TG_LMSJ_ShopUI"), _ = cc._decorator, h = _.ccclass, f = _.property, y = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.coinLabel = null;
t.levelLabel = null;
t.uiLayer = null;
t.popLayer = null;
t.setPrefab = null;
t.shopPrefab = null;
t.getRewardPrefab = null;
t.iconSpine = null;
t.startBtn = null;
t.huawei_logooff = null;
return t;
}
t.prototype.onLoad = function() {
var e = this;
if ("TG_LMSJ" == window.miniMainGame) {
lieyou_SdkManager.showAge({
node: this.node.getChildByName("ageNode")
});
lieyou_SdkManager.showISBN();
lieyou_SdkManager.showUserAgreementSp(cc.find("sp", this.node));
cc.find("topLayer/hallBtn", this.node).active = !1;
if ("oppo" == lieyou_SdkManager.getSysPlatformName() || "huawei" == lieyou_SdkManager.getSysPlatformName()) {
console.log("弹出插屏和banner");
lieyou_SdkManager.showBannerByBottom();
}
}
"kuaishou" == lieyou_SdkManager.getSysPlatformName() ? "qgame_5e60da74570df38d3b000019" == window.oppoGetOnlineDataId ? cc.find("topLayer/Icon", this.node).active = !1 : cc.find("topLayer/Icon", this.node).active = !0 : "huawei" == lieyou_SdkManager.getSysPlatformName() ? "67e4e61265c707471a2d2d0e" == window.oppoGetOnlineDataId && (cc.find("topLayer/Icon", this.node).active = !1) : cc.find("topLayer/Icon", this.node).active = !0;
this.node.scale = Math.min(Math.min(cc.winSize.width / cc.view.getDesignResolutionSize().width, 1), Math.min(cc.winSize.height / cc.view.getDesignResolutionSize().height, 1));
this.node.scale > 1 && (this.node.scale = 1);
PPSDK.on("TG_LMSJ_UpdateCoin", this.updateCoin, this);
PPSDK.on("TG_LMSJ_CreateRewardPop", this.createRewardPop, this);
this.addAdver();
var t = s.TG_LMSJ_Config.getIns(), o = t.hallName + "/Res/Audio/hallBgm";
PPSDK.playMusic(o, t.bundleName, {
loop: !0,
volume: .75
});
lieyou_SdkManager.addListenerBackKey({
node: this.node,
callBack: function() {
if (e.popLayer.childrenCount > 0) for (var t = 0, o = e.popLayer.children; t < o.length; t++) {
(r = o[t]).getComponent(u.default);
r.destroy();
} else if (e.uiLayer.childrenCount > 0) for (var n = 0, i = e.uiLayer.children; n < i.length; n++) {
var r;
(r = i[n]).destroy();
} else e.onBack();
}
});
cc.find("topLayer/Icon", this.node).active = !1;
this.addHaWeiLogOff();
};
t.prototype.addHaWeiLogOff = function() {
if ("huawei" == lieyou_SdkManager.getSysPlatformName()) {
lieyou_SdkManager.showSpotByOther();
lieyou_SdkManager.addLogOff({
btnNode: this.huawei_logooff
});
}
};
t.prototype.addAdver = function() {
c.showBannerByBottom();
};
t.prototype.start = function() {
this.updateCoin();
this.showIcon();
};
t.prototype.showIcon = function() {
this.startBtn.stopAllActions();
this.startBtn.scale = 1;
this.startBtn.setPosition(cc.v2(0, -114));
cc.tween(this.startBtn).repeatForever(cc.tween(this.startBtn).to(1, {
scale: .9
}).to(2, {
scale: 1.1
}).to(1, {
scale: 1
})).start();
};
t.prototype.updateCoin = function() {
var e = l.TG_LMSJ_Control.getCoinCount();
this.coinLabel.string = "" + e;
var t = l.TG_LMSJ_Control.getSelectPart();
this.levelLabel.string = t + "/110";
};
t.prototype.onDestroy = function() {
PPSDK.stopMusic();
PPSDK.off(this);
};
t.prototype.clickSetBtn = function() {
if ("oppo" == lieyou_SdkManager.getSysPlatformName() || "huawei" == lieyou_SdkManager.getSysPlatformName()) {
console.log("弹出插屏和banner");
lieyou_SdkManager.showBannerByBottom();
lieyou_SdkManager.showSpotByOther();
}
var e = cc.instantiate(this.setPrefab);
e.setPosition(cc.v2());
e.setParent(this.popLayer);
};
t.prototype.clickShopBtn = function() {
if ("oppo" == lieyou_SdkManager.getSysPlatformName() || "huawei" == lieyou_SdkManager.getSysPlatformName()) {
console.log("弹出插屏和banner");
lieyou_SdkManager.showBannerByBottom();
lieyou_SdkManager.showSpotByOther();
}
var e = cc.instantiate(this.shopPrefab);
e.setPosition(cc.v2());
e.setParent(this.uiLayer);
e.getComponent(d.default).closeCall = this.showIcon.bind(this);
};
t.prototype.createRewardPop = function(e) {
if ("oppo" == lieyou_SdkManager.getSysPlatformName() || "huawei" == lieyou_SdkManager.getSysPlatformName()) {
console.log("弹出插屏和banner");
lieyou_SdkManager.showBannerByBottom();
lieyou_SdkManager.showSpotByOther();
}
if (null != e) {
var t = e.state, o = cc.instantiate(this.getRewardPrefab);
o.setParent(this.popLayer);
o.getComponent(p.default).init(t, e.spriteFrame, e.id);
}
};
t.prototype.startGame = function() {
if ("oppo" == lieyou_SdkManager.getSysPlatformName() || "huawei" == lieyou_SdkManager.getSysPlatformName()) {
console.log("弹出插屏和banner");
lieyou_SdkManager.showBannerByBottom();
lieyou_SdkManager.showSpotByOther();
}
this.startBtn.stopAllActions();
this.startBtn.scale = 1;
cc.tween(this.startBtn).to(.1, {
scale: .85
}).call(function() {
a.SubGame.goGame(s.TG_LMSJ_Config.getIns().gameName, null, {}, {}, s.TG_LMSJ_Config.getIns().bundleName);
}).start();
};
t.prototype.onBack = function() {
if ("oppo" == lieyou_SdkManager.getSysPlatformName() || "huawei" == lieyou_SdkManager.getSysPlatformName()) {
console.log("弹出插屏和banner");
lieyou_SdkManager.showBannerByBottom();
lieyou_SdkManager.showSpotByOther();
}
cc.Button.prototype._onTouchBegan = s.TG_LMSJ_Config.getIns().onButtonBeginCall;
cc.Button.prototype._onTouchEnded = s.TG_LMSJ_Config.getIns().onButtonEndCall;
cc.director.getCollisionManager().enabled = !1;
cc.audioEngine.stopAll();
a.SubGame.getCommon().goHome();
};
r([ f({
displayName: "金币数量",
type: cc.Label
}) ], t.prototype, "coinLabel", void 0);
r([ f({
displayName: "关卡Label",
type: cc.Label
}) ], t.prototype, "levelLabel", void 0);
r([ f({
displayName: "界面父节点",
type: cc.Node
}) ], t.prototype, "uiLayer", void 0);
r([ f({
displayName: "弹窗父节点",
type: cc.Node
}) ], t.prototype, "popLayer", void 0);
r([ f({
displayName: "设置弹窗预设",
type: cc.Prefab
}) ], t.prototype, "setPrefab", void 0);
r([ f({
displayName: "商店界面",
type: cc.Prefab
}) ], t.prototype, "shopPrefab", void 0);
r([ f({
displayName: "获取奖励弹窗",
type: cc.Prefab
}) ], t.prototype, "getRewardPrefab", void 0);
r([ f({
displayName: "iconSpine",
type: sp.Skeleton
}) ], t.prototype, "iconSpine", void 0);
r([ f({
displayName: "开始按钮",
type: cc.Node
}) ], t.prototype, "startBtn", void 0);
r([ f(cc.Node) ], t.prototype, "huawei_logooff", void 0);
return r([ h ], t);
}(cc.Component);
o.default = y;
cc._RF.pop();
}, {
"../../../../resources/PPSDK/framework/common/subGame/SubGame": void 0,
"../../TG_LMSJ_Loading/TScript/TG_LMSJ_AdvertisingManager": "TG_LMSJ_AdvertisingManager",
"../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config": "TG_LMSJ_Config",
"../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control": "TG_LMSJ_Control",
"./TG_LMSJ_PopBase": "TG_LMSJ_PopBase",
"./TG_LMSJ_RewardPop": "TG_LMSJ_RewardPop",
"./TG_LMSJ_ShopUI": "TG_LMSJ_ShopUI"
} ],
TG_LMSJ_HoleBuild: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6e7edmJ26FEd4L7sztym/b/", "TG_LMSJ_HoleBuild");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.buildByNode = function(e) {
if (e) {
this.node.x = e.x;
this.node.y = e.y;
this.node.scaleX = e.scaleX;
this.node.scaleY = e.scaleY;
}
};
t.prototype.exportData = function() {
return {
x: this.node.x,
y: this.node.y,
scaleX: this.node.scaleX,
scaleY: this.node.scaleY,
name: this.node.name
};
};
return r([ c ], t);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
TG_LMSJ_Hole: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3ec79T/CuBF+40PMRs48kDO", "TG_LMSJ_Hole");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.start = function() {
this.node.stopAllActions();
this.node.angle = 0;
};
return r([ c ], t);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
TG_LMSJ_Loading: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e16bdkxAyFG6bmUORHSViES", "TG_LMSJ_Loading");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../../resources/PPSDK/framework/common/subGame/SubGame"), c = e("./TG_LMSJ_Common"), s = e("./TG_LMSJ_Config"), l = e("./TG_LMSJ_Control"), u = cc._decorator, p = u.ccclass, d = u.property, _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.toiletJson = null;
return t;
}
t.prototype.onLoad = function() {
if ("TG_LMSJ" == window.miniMainGame) {
lieyou_SdkManager.showAge({
node: this.node.getChildByName("ageNode")
});
lieyou_SdkManager.showISBN();
if ("oppo" == lieyou_SdkManager.getSysPlatformName() || "huawei" == lieyou_SdkManager.getSysPlatformName()) {
console.log("弹出插屏和banner");
lieyou_SdkManager.showBannerByBottom();
}
}
this.node.scale = Math.min(Math.min(cc.winSize.width / cc.view.getDesignResolutionSize().width, 1), Math.min(cc.winSize.height / cc.view.getDesignResolutionSize().height, 1));
this.node.scale > 1 && (this.node.scale = 1);
PPSDK.languageManager.registerLanguage(s.TG_LMSJ_Config.getIns().bundleName, s.TG_LMSJ_Config.getIns().bundleName);
setTimeout(function() {
cc.assetManager.getBundle(s.TG_LMSJ_Config.getIns().bundleName).loadScene(s.TG_LMSJ_Config.getIns().hallName, null, function(e, t) {
e || cc.director.runScene(t);
});
}, "TG_LMSJ" == window.miniMainGame ? 2e3 : 300);
a.SubGame.setCommon(new c.default(), s.TG_LMSJ_Config.getIns().hallName);
l.TG_LMSJ_Control.initData();
s.TG_LMSJ_Config.getIns().onButtonBeginCall = cc.Button.prototype._onTouchBegan;
s.TG_LMSJ_Config.getIns().onButtonEndCall = cc.Button.prototype._onTouchEnded;
cc.Button.prototype._onTouchBegan = function(e) {
if (this.interactable && this.enabledInHierarchy) {
this._pressed = !0;
this._updateState();
e.stopPropagation();
s.TG_LMSJ_Config.playAudio("ButtonClick", !1, "TG_LMSJ_Hall");
}
};
cc.Button.prototype._onTouchEnded = function(e) {
if (this.interactable && this.enabledInHierarchy) {
if (this._pressed) {
cc.Component.EventHandler.emitEvents(this.clickEvents, e);
this.node.emit("click", this);
}
this._pressed = !1;
this._updateState();
e.stopPropagation();
}
};
s.TG_LMSJ_Config.getIns().toiletTableData = this.toiletJson.json;
};
r([ d({
displayName: "厕所表数据",
type: cc.JsonAsset
}) ], t.prototype, "toiletJson", void 0);
return r([ p ], t);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {
"../../../../resources/PPSDK/framework/common/subGame/SubGame": void 0,
"./TG_LMSJ_Common": "TG_LMSJ_Common",
"./TG_LMSJ_Config": "TG_LMSJ_Config",
"./TG_LMSJ_Control": "TG_LMSJ_Control"
} ],
TG_LMSJ_LocalData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8bf8eAuK2VCAbylJQGhUUU1", "TG_LMSJ_LocalData");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.TG_LMSJ_LocalData = o.initLocalData = void 0;
var r = e("../../../../resources/PPSDK/framework/core/storage/StorageClass"), a = e("./TG_LMSJ_Config");
o.initLocalData = {
version: "1.0.0",
maxPassPart: 0,
selectPart: 1,
useToiletID: 1,
haveToiletIDArr: [ 1 ],
useMapID: 1,
haveMapIDArr: [ 1 ],
guideFinishLevel: []
};
var c = {
version: "",
maxPassPart: 0,
selectPart: 1,
useToiletID: 1,
haveToiletIDArr: null,
useMapID: 1,
haveMapIDArr: null,
guideFinishLevel: null
}, s = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onInit = function() {
this.initStorage(c);
};
t.bundle = a.TG_LMSJ_Config.getIns().bundleName;
t.key = "localData";
return t;
}(r.StorageClass), l = function() {
function e() {}
e._getData = function() {
return PPSDK.localManager.getStorageClass(a.TG_LMSJ_Config.getIns().bundleName, "localData");
};
e._initAllData = function() {};
e.createLocalData = function() {
var e = PPSDK.localManager.getStorageClass(s), t = this.getVersion();
"" != t && null != t && null != t || this._initAllData(e);
e.version || (e.version = o.initLocalData.version);
e.maxPassPart || (e.maxPassPart = o.initLocalData.maxPassPart);
e.selectPart || (e.selectPart = o.initLocalData.selectPart);
e.useToiletID || (e.useToiletID = o.initLocalData.useToiletID);
e.haveToiletIDArr || (e.haveToiletIDArr = o.initLocalData.haveToiletIDArr);
e.useMapID || (e.useMapID = o.initLocalData.useMapID);
e.haveMapIDArr || (e.haveMapIDArr = o.initLocalData.haveMapIDArr);
e.guideFinishLevel || (e.guideFinishLevel = o.initLocalData.guideFinishLevel);
};
e.getVersion = function() {
return this._getData().version;
};
e.setVersion = function(e) {
this._getData().version = e;
};
e.getCoinCount = function() {
var e = localStorage.getItem(lieyou.Key_Gold);
return null == e ? 0 : Number(e);
};
e.setCoinCount = function(e) {
null != e && null != e && "number" == typeof e && localStorage.setItem(lieyou.Key_Gold, String(e));
};
e.getMaxPassPart = function() {
return this._getData().maxPassPart;
};
e.setMaxPassPart = function(e) {
this._getData().maxPassPart = e;
};
e.getSelectPart = function() {
return this._getData().selectPart;
};
e.setSelectPart = function(e) {
this._getData().selectPart = e;
};
e.getUseToiletID = function() {
return this._getData().useToiletID;
};
e.setUseToiletID = function(e) {
this._getData().useToiletID = e;
};
e.getHaveToiletIDArr = function() {
return this._getData().haveToiletIDArr;
};
e.setHaveToiletIDArr = function(e) {
this._getData().haveToiletIDArr = e;
};
e.getUseMapID = function() {
return this._getData().useMapID;
};
e.setUseMapID = function(e) {
this._getData().useMapID = e;
};
e.getHaveMapIDArr = function() {
return this._getData().haveMapIDArr;
};
e.setHaveMapIDArr = function(e) {
this._getData().haveMapIDArr = e;
};
e.getGuideFinishLevel = function() {
return this._getData().guideFinishLevel;
};
e.setGuideFinishLevel = function(e) {
this._getData().guideFinishLevel = e;
};
return e;
}();
o.TG_LMSJ_LocalData = l;
cc._RF.pop();
}, {
"../../../../resources/PPSDK/framework/core/storage/StorageClass": void 0,
"./TG_LMSJ_Config": "TG_LMSJ_Config"
} ],
TG_LMSJ_MapTouchDraw: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ae72548Wb9DQa6RRvJ1SNfv", "TG_LMSJ_MapTouchDraw");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config"), c = e("./TG_LMSJ_Enum"), s = cc._decorator, l = s.ccclass, u = (s.property, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.drawLine = null;
t.canDraw = null;
t.getMoveLastPos = null;
t.drawLineAudioTag = 0;
t.audioTime = .2;
t.drawLineTime = .2;
t.allTag = [];
return t;
}
t.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
PPSDK.on(c.TG_LMSJ_EventName.game_end, this.gameEnd, this);
this.allTag = [];
this.drawLineAudioTag = -1;
this.drawLineTime = this.audioTime;
};
t.prototype.onDestroy = function() {
this.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
};
t.prototype.touchStart = function(e) {
var t = this;
if (0 != this.node.active && null != e) {
var o = e.getLocation();
if (!this.canDraw || !this.canDraw(o)) {
this.drawLine && this.drawLine(o, 3);
a.TG_LMSJ_Config.playAudio(c.TG_LMSJ_AudioName.draw_line, !0, "TG_LMSJ_Game", .7).then(function(e) {
if (e.success) {
t.drawLineAudioTag = e.id;
t.allTag.push(t.drawLineAudioTag);
t.drawLineTime = t.audioTime;
}
});
}
}
};
t.prototype.touchMove = function(e) {
var t = this;
if (null != e) {
var o = e.getLocation();
if (!this.canDraw || !this.canDraw(o)) {
this.drawLine && this.drawLine(o, 3);
-1 == this.drawLineAudioTag ? a.TG_LMSJ_Config.playAudio(c.TG_LMSJ_AudioName.draw_line, !0, "TG_LMSJ_Game", .7).then(function(e) {
t.drawLineAudioTag = e.id;
t.allTag.push(t.drawLineAudioTag);
t.drawLineTime = t.audioTime;
}) : this.drawLineTime = this.audioTime;
}
}
};
t.prototype.touchEnd = function(e) {
if (null != e) {
for (var t = 0, o = this.allTag; t < o.length; t++) {
var n = o[t];
cc.audioEngine.stopEffect(n);
}
this.allTag = [];
this.drawLineAudioTag = -1;
var i = e.getLocation();
if (this.canDraw && this.canDraw(i)) {
var r = this.getMoveLastPos(), a = this.node.parent.convertToNodeSpaceAR(r);
this.node.setPosition(a);
} else {
this.drawLine && this.drawLine(i, 3);
var c = this.node.parent.convertToNodeSpaceAR(i);
this.node.setPosition(c);
}
}
};
t.prototype.update = function(e) {
if (this.drawLineAudioTag >= 0) {
this.drawLineTime -= e;
if (this.drawLineTime <= 0) {
for (var t = 0, o = this.allTag; t < o.length; t++) {
var n = o[t];
cc.audioEngine.stopEffect(n);
}
this.allTag = [];
this.drawLineAudioTag = -1;
}
}
};
t.prototype.gameEnd = function() {
if (this.allTag && this.allTag.length > 0) for (var e = 0, t = this.allTag; e < t.length; e++) {
var o = t[e];
cc.audioEngine.stopEffect(o);
}
this.allTag = [];
this.drawLineAudioTag = -1;
};
return r([ l ], t);
}(cc.Component));
o.default = u;
cc._RF.pop();
}, {
"../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config": "TG_LMSJ_Config",
"./TG_LMSJ_Enum": "TG_LMSJ_Enum"
} ],
TG_LMSJ_MountBuild: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "13ad4pXSoBCWYwAep8++WZD", "TG_LMSJ_MountBuild");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("./TG_LMSJ_Mount"), c = cc._decorator, s = c.ccclass, l = c.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.state = 0;
return t;
}
t.prototype.buildByNode = function(e) {
if (e) {
this.node.x = e.x;
this.node.y = e.y;
this.node.scaleX = e.scaleX;
this.node.scaleY = e.scaleY;
this.node.angle = e.angle;
this.node.getComponent(a.default).state = e.state;
}
};
t.prototype.exportData = function() {
return {
x: this.node.x,
y: this.node.y,
scaleX: this.node.scaleX,
scaleY: this.node.scaleY,
angle: this.node.angle,
name: this.node.name,
state: this.state
};
};
r([ l({
tooltip: "状态 0速度为+, 1速度为-"
}) ], t.prototype, "state", void 0);
return r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./TG_LMSJ_Mount": "TG_LMSJ_Mount"
} ],
TG_LMSJ_Mount: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "82096LqTUhOmo0hdh57VL2o", "TG_LMSJ_Mount");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config"), c = e("../TG_LMSJ_Enum"), s = e("../TG_LMSJ_GameConfig"), l = e("./TG_LMSJ_Bubble"), u = cc._decorator, p = u.ccclass, d = u.property, _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bubblePrefab = null;
t.birthNode = null;
t.isFireMount = !0;
t.remainTime = 3;
t.bubbleNode = null;
t.state = 0;
return t;
}
t.prototype.start = function() {
this.remainTime = 3;
this.bubbleNode = null;
this.node.zIndex = 10;
};
t.prototype.update = function(e) {
var t = s.TG_LMSJ_GameConfig.getIns();
if (!t.gameEnd && !t.gamePause && null == this.bubbleNode) {
this.remainTime -= e;
this.remainTime <= 0 && this.createBubble();
}
};
t.prototype.createBubble = function() {
this.isFireMount ? a.TG_LMSJ_Config.playAudio(c.TG_LMSJ_AudioName.throw_fire) : a.TG_LMSJ_Config.playAudio(c.TG_LMSJ_AudioName.throw_ice);
this.remainTime = 3;
var e = cc.instantiate(this.bubblePrefab);
e.setParent(this.node.parent);
var t = this.birthNode.convertToWorldSpaceAR(cc.v2()), o = this.node.parent.convertToNodeSpaceAR(t);
e.setPosition(o);
e.angle = this.node.angle;
var n = e.getComponent(l.default);
this.bubbleNode = e;
n.init(this.node.angle, this.state);
var i = this;
n.closeCall = function() {
i.bubbleNode = null;
};
};
r([ d({
displayName: "子弹预设",
type: cc.Prefab
}) ], t.prototype, "bubblePrefab", void 0);
r([ d({
displayName: "出生节点",
type: cc.Node
}) ], t.prototype, "birthNode", void 0);
r([ d({
displayName: "是否是火山"
}) ], t.prototype, "isFireMount", void 0);
return r([ p ], t);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {
"../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config": "TG_LMSJ_Config",
"../TG_LMSJ_Enum": "TG_LMSJ_Enum",
"../TG_LMSJ_GameConfig": "TG_LMSJ_GameConfig",
"./TG_LMSJ_Bubble": "TG_LMSJ_Bubble"
} ],
TG_LMSJ_MyPool: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b5b81l35XdNjIpFaFofElb+", "TG_LMSJ_MyPool");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function e(e, t) {
this.prefab = null;
this.pool = null;
this.prefab = e;
t && (this.component = t);
this.pool = new cc.NodePool(t);
}
e.prototype.create = function(e) {
void 0 === e && (e = 0);
for (var t, o = 0; o < e; o++) {
t = cc.instantiate(this.prefab);
this.pool.put(t);
}
};
e.prototype.size = function() {
return this.pool.size();
};
e.prototype.get = function() {
return this.size() > 0 ? this.pool.get() : cc.instantiate(this.prefab);
};
e.prototype.put = function(e) {
this.pool.put(e);
};
e.prototype.clear = function() {
this.pool.clear();
};
e.prototype.getWithComponent = function() {
return this.component ? this.get().getComponent(this.component) : null;
};
return e;
}();
o.default = n;
cc._RF.pop();
}, {} ],
TG_LMSJ_PencilLine: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "52116f5EEpETJUlK8S58IeJ", "TG_LMSJ_PencilLine");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.draw = null;
t.lineNode = null;
t.pencilNode = null;
return t;
}
t.prototype.drawLine = function(e) {
var t = this, o = this.node.convertToNodeSpaceAR(e);
this.pencilNode.stopAllActions();
cc.tween(this.pencilNode).repeatForever(cc.tween(this.pencilNode).to(1.5, {
position: cc.v3(o.x, o.y, 0)
}).delay(.5).call(function() {
t.pencilNode.setPosition(cc.v2());
})).start();
this.draw.clear();
this.lineNode.stopAllActions();
this.lineNode.width = 0;
cc.tween(this.lineNode).repeatForever(cc.tween(this.lineNode).to(1.5, {
width: 305
}).delay(.5).call(function() {
t.lineNode.width = 0;
})).start();
};
r([ s({
displayName: "绘画组件",
type: cc.Graphics
}) ], t.prototype, "draw", void 0);
r([ s({
displayName: "线节点",
type: cc.Node
}) ], t.prototype, "lineNode", void 0);
r([ s({
displayName: "铅笔节点",
type: cc.Node
}) ], t.prototype, "pencilNode", void 0);
return r([ c ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
TG_LMSJ_PopBase: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6053emFJi9EhKj4H2GQyoZE", "TG_LMSJ_PopBase");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../TG_LMSJ_Loading/TScript/TG_LMSJ_AdvertisingManager"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._animationDuration = .3;
t.bgOpacity = 150;
t.canClick = !1;
t.closeCall = null;
return t;
}
t.prototype.showAni = function(e, t) {
var o = this;
void 0 === t && (t = 0);
switch (t) {
case 0:
a.showSpotByOther();
break;

case 1:
a.showSpotByPause();
break;

case 2:
a.showSpotByFinish();
}
this.canClick = !1;
var n = this.node.getChildByName("bg"), i = this.node.getChildByName("board");
if (n) {
this.node.active = !0;
n.active = !0;
n.opacity = 0;
cc.tween(n).to(.5 * this._animationDuration, {
opacity: this.bgOpacity
}).start();
}
if (i) {
i.active = !0;
i.scale = .5;
i.opacity = 0;
cc.tween(i).to(this._animationDuration, {
scale: 1,
opacity: 255
}, {
easing: "backOut"
}).call(function() {
o.canClick = !0;
e && e();
}).start();
} else e && e();
};
t.prototype.hideAni = function(e) {
var t = this.node.getChildByName("bg"), o = this.node.getChildByName("board");
this.canClick = !1;
t && cc.tween(t).delay(.5 * this._animationDuration).to(.5 * this._animationDuration, {
opacity: 0
}).start();
o ? cc.tween(o).to(this._animationDuration, {
scale: .5,
opacity: 0
}, {
easing: "backIn"
}).call(function() {
e && e();
}).start() : e && e();
};
return r([ s ], t);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {
"../../TG_LMSJ_Loading/TScript/TG_LMSJ_AdvertisingManager": "TG_LMSJ_AdvertisingManager"
} ],
TG_LMSJ_PropGuideBuild: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "78407rBobtDPL0RJoQkHk8P", "TG_LMSJ_PropGuideBuild");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.isShowMask = !0;
t.isShowText = !0;
t.maskPos = cc.v2();
t.textPos = cc.v2();
t.textScale = 1;
t.maskRadius = 100;
t.maskMove = !1;
t.maskMovePos = cc.v2();
return t;
}
t.prototype.buildByNode = function(e) {
if (e) {
this.isShowMask = e.isShowMask;
this.isShowText = e.isShowText;
this.maskPos = e.maskPos;
this.textPos = e.textPos;
this.maskRadius = e.maskRadius;
this.maskMove = e.maskMove;
this.maskMovePos = e.maskMovePos;
this.textScale = e.textScale;
}
};
t.prototype.exportData = function() {
return {
isShowMask: this.isShowMask,
isShowText: this.isShowText,
maskPos: this.maskPos,
textPos: this.textPos,
name: this.node.name,
maskRadius: this.maskRadius,
maskMove: this.maskMove,
maskMovePos: this.maskMovePos,
textScale: this.textScale
};
};
r([ s({
tooltip: "是否需要展示遮罩"
}) ], t.prototype, "isShowMask", void 0);
r([ s({
tooltip: "是否需要展示文本"
}) ], t.prototype, "isShowText", void 0);
r([ s({
tooltip: "遮罩展示坐标"
}) ], t.prototype, "maskPos", void 0);
r([ s({
tooltip: "文本展示坐标"
}) ], t.prototype, "textPos", void 0);
r([ s({
tooltip: "文本scale"
}) ], t.prototype, "textScale", void 0);
r([ s({
tooltip: "遮罩的半径"
}) ], t.prototype, "maskRadius", void 0);
r([ s({
tooltip: "遮罩是否需要移动"
}) ], t.prototype, "maskMove", void 0);
r([ s({
tooltip: "遮罩移动下一个位置"
}) ], t.prototype, "maskMovePos", void 0);
return r([ c ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
TG_LMSJ_PropMask: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bcbd3gM0VBAY4HuRm16R7vu", "TG_LMSJ_PropMask");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.init = function(e, t, o) {
void 0 === o && (o = null);
this.node.setPosition(t);
var n = this.node.getChildByName("mask");
n.width = e;
n.height = e;
if (null != o) {
this.node.stopAllActions();
cc.tween(this.node).repeatForever(cc.tween(this.node).to(1.5, {
position: cc.v3(o.x, o.y, 0)
}).delay(.2).to(1.5, {
position: cc.v3(t.x, t.y, 0)
}).delay(.2)).start();
}
};
return r([ c ], t);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
TG_LMSJ_PropText: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "97cbfty7v1E6rZnCm13xFzP", "TG_LMSJ_PropText");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control"), c = e("./TG_LMSJ_GameConfig"), s = cc._decorator, l = s.ccclass, u = s.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.textSprite = null;
t.label = null;
t.allStr = [ "", "推开挡路的石块！", "避开吃人的旋涡！", "经过传送门避开路障！", "避开发射的火球！", "点击开关，打开通道门！", "避开燃烧的火焰！", "避开弹出的地刺！", "避开危险的冰锥！" ];
t.allEnStr = [ "", "Push away the rocks!", "Avoid vortex", "Through the portal", "Avoid the firing fireball!", "Click switch to open the door", "Avoid the burning flames!", "Avoid the popping spines!", "Avoid dangerous ice picks!" ];
t.initScale = .8;
return t;
}
t.prototype.start = function() {
var e = a.TG_LMSJ_Control.getSelectPart(), t = null, o = this.node.getChildByName("bg");
if (1 == e) {
o.active = !1;
this.textSprite.node.active = !0;
t = this.textSprite.node;
} else {
o.active = !0;
this.textSprite.node.active = !1;
var n = c.TG_LMSJ_GameConfig.getIns().needGuideLevel.indexOf(e);
"zh" == PPSDK.languageManager.getLanguage() ? this.label.string = this.allStr[n] : this.label.string = this.allEnStr[n];
t = o;
}
var i = this.initScale, r = 1.1 * i, s = .9 * i;
t.stopAllActions();
t.scale = i;
cc.tween(t).repeatForever(cc.tween(t).to(.4, {
scale: s
}).to(.8, {
scale: r
}).to(.4, {
scale: i
})).start();
};
r([ u({
displayName: "文本Sprite",
type: cc.Sprite
}) ], t.prototype, "textSprite", void 0);
r([ u({
displayName: "描述文本",
type: cc.Label
}) ], t.prototype, "label", void 0);
return r([ l ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control": "TG_LMSJ_Control",
"./TG_LMSJ_GameConfig": "TG_LMSJ_GameConfig"
} ],
TG_LMSJ_RewardPop: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "abf38gCZzNKtYD7YlqyamAc", "TG_LMSJ_RewardPop");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("./TG_LMSJ_PopBase"), c = cc._decorator, s = c.ccclass, l = c.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.lightNode = null;
t.toiletSprite = null;
t.mapSprite = null;
return t;
}
t.prototype.init = function(e, t) {
var o = this;
this.showAni(function() {
o.lightNode.stopAllActions();
o.lightNode.angle = 0;
cc.tween(o.lightNode).repeatForever(cc.tween(o.lightNode).to(2, {
angle: 360
}).call(function() {
o.lightNode.angle = 0;
})).start();
});
if (null != t) if (0 == e) {
this.toiletSprite.node.active = !0;
this.mapSprite.node.active = !1;
this.toiletSprite.spriteFrame = t;
} else if (1 == e) {
this.toiletSprite.node.active = !1;
this.mapSprite.node.active = !0;
this.mapSprite.spriteFrame = t;
}
};
t.prototype.clickClose = function() {
var e = this;
this.hideAni(function() {
e.node.destroy();
});
};
r([ l({
displayName: "光节点",
type: cc.Node
}) ], t.prototype, "lightNode", void 0);
r([ l({
displayName: "马桶Sprite",
type: cc.Sprite
}) ], t.prototype, "toiletSprite", void 0);
r([ l({
displayName: "地图sprite",
type: cc.Sprite
}) ], t.prototype, "mapSprite", void 0);
return r([ s ], t);
}(a.default);
o.default = u;
cc._RF.pop();
}, {
"./TG_LMSJ_PopBase": "TG_LMSJ_PopBase"
} ],
TG_LMSJ_RoleBuild: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c73f13r8adAqpi8WDFmfPnV", "TG_LMSJ_RoleBuild");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.buildByNode = function(e) {
if (e) {
this.node.x = e.x;
this.node.y = e.y;
this.node.scaleX = e.scaleX;
this.node.scaleY = e.scaleY;
}
};
t.prototype.exportData = function() {
return {
x: this.node.x,
y: this.node.y,
scaleX: this.node.scaleX,
scaleY: this.node.scaleY,
name: this.node.name
};
};
return r([ c ], t);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
TG_LMSJ_Role: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6c68b4mwUhKkL3XeGJO2wsR", "TG_LMSJ_Role");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config"), c = e("../TG_LMSJ_Enum"), s = e("../TG_LMSJ_GameConfig"), l = e("./TG_LMSJ_Toilet"), u = cc._decorator, p = u.ccclass, d = u.property, _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.spine = null;
t.lineColor = cc.Color.WHITE;
t.drawStartNode = null;
t.touchNode = null;
t.isBoy = !0;
t.walkPosArr = [];
t.drawPosArr = [];
t.drawCall = null;
t.moveEndCall = null;
t.canDraw = null;
t.getInitWorldPos = null;
t.isTouchToilet = null;
t.failCall = null;
t.isRoleMove = !1;
t.initDrawFail = !1;
t.speed = 0;
t.isStart = !1;
t.drawLineAudioTag = 0;
t.allTag = [];
t.audioTime = .2;
t.drawLineTime = .2;
return t;
}
t.prototype.initData = function() {
this.walkPosArr = [];
this.isRoleMove = !1;
this.drawPosArr = [];
this.initDrawFail = !1;
this.drawLineAudioTag = -1;
this.drawLineTime = this.audioTime;
this.allTag = [];
};
t.prototype.start = function() {
this.initData();
this.spine.animation = "idle";
this.touchNode.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
this.touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
this.touchNode.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
this.touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
this.speed = 500 * this.node.scale;
this.speed = Math.abs(this.speed);
PPSDK.on(c.TG_LMSJ_EventName.game_end, this.gameEnd, this);
this.isStart = !1;
};
t.prototype.onDestroy = function() {
this.touchNode.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
this.touchNode.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
this.touchNode.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
this.touchNode.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
PPSDK.off(this);
};
t.prototype.touchStart = function(e) {
var t = this;
if (null != e && !this.isRoleMove && !s.TG_LMSJ_GameConfig.getIns().gameEnd) {
this.walkPosArr = [];
this.drawPosArr = [];
var o = this.drawStartNode.convertToWorldSpaceAR(cc.v2());
this.walkPosArr.push(o);
this.drawCall && this.drawCall(o, 0);
var n = e.getLocation();
if (this.canDraw && this.canDraw(n)) this.initDrawFail = !0; else {
this.isStart = !0;
this.initDrawFail = !1;
this.walkPosArr.push(n);
this.drawCall && this.drawCall(n, 1);
a.TG_LMSJ_Config.playAudio(c.TG_LMSJ_AudioName.draw_line, !0, "TG_LMSJ_Game", .7).then(function(e) {
if (e.success) {
t.drawLineAudioTag = e.id;
t.allTag.push(t.drawLineAudioTag);
t.drawLineTime = t.audioTime;
}
});
}
}
};
t.prototype.touchMove = function(e) {
var t = this;
if (null != e && !this.isRoleMove && this.isStart && !s.TG_LMSJ_GameConfig.getIns().gameEnd) {
var o = e.getLocation();
if (!this.canDraw || !this.canDraw(o)) {
this.initDrawFail && (this.initDrawFail = !1);
this.walkPosArr.push(o);
this.drawCall && this.drawCall(o, 1);
-1 == this.drawLineAudioTag ? a.TG_LMSJ_Config.playAudio(c.TG_LMSJ_AudioName.draw_line, !0, "TG_LMSJ_Game", .7).then(function(e) {
t.drawLineAudioTag = e.id;
t.allTag.push(t.drawLineAudioTag);
t.drawLineTime = t.audioTime;
}) : this.drawLineTime = this.audioTime;
}
}
};
t.prototype.touchEnd = function(e) {
if (null != e && !this.isRoleMove && this.isStart) {
this.initDrawFail && this.moveEndCall && this.moveEndCall();
for (var t = 0, o = this.allTag; t < o.length; t++) {
var n = o[t];
cc.audioEngine.stopEffect(n);
}
this.allTag = [];
this.drawLineAudioTag = -1;
if (!s.TG_LMSJ_GameConfig.getIns().gameEnd) {
var i = e.getLocation();
if (this.canDraw && this.canDraw(i)) {
this.drawCall && this.drawCall(this.drawPosArr[this.drawPosArr.length - 1], 2);
this.roleMove();
} else {
this.walkPosArr.push(i);
this.drawCall && this.drawCall(i, 2);
this.roleMove();
this.isStart = !1;
}
}
}
};
t.prototype.update = function(e) {
if (this.drawLineAudioTag >= 0) {
this.drawLineTime -= e;
if (this.drawLineTime <= 0) {
for (var t = 0, o = this.allTag; t < o.length; t++) {
var n = o[t];
cc.audioEngine.stopEffect(n);
}
this.allTag = [];
this.drawLineAudioTag = -1;
}
}
};
t.prototype.onCollisionEnter = function(e) {
var t = e.node;
if ("Hurt" == t.group || "bubble" == t.group) {
s.TG_LMSJ_GameConfig.getIns().gameEnd = !0;
PPSDK.emit(c.TG_LMSJ_EventName.game_end);
a.TG_LMSJ_Config.playAudio(c.TG_LMSJ_AudioName.role_dead);
this.failCall && this.failCall();
this.node.destroy();
} else if ("Toilet" == t.group) {
var o = this.drawPosArr[0];
if (!this.isTouchToilet(o)) return;
this.roleTouchToiletCall(t);
}
};
t.prototype.onCollisionStay = function(e) {
if (!s.TG_LMSJ_GameConfig.getIns().gameEnd) {
var t = e.node;
if ("Toilet" == t.group) {
var o = this.drawPosArr[0];
if (!this.isTouchToilet(o)) return;
this.roleTouchToiletCall(t);
}
}
};
t.prototype.roleTouchToiletCall = function(e) {
this.isBoy ? a.TG_LMSJ_Config.playAudio(c.TG_LMSJ_AudioName.man_win) : a.TG_LMSJ_Config.playAudio(c.TG_LMSJ_AudioName.woman_win);
s.TG_LMSJ_GameConfig.getIns().gameEnd = !0;
PPSDK.emit(c.TG_LMSJ_EventName.game_end);
var t = e.getComponent(l.default).sitWorldPos.clone(), o = this.node.parent.convertToNodeSpaceAR(t);
this.node.setPosition(o);
this.spine.setAnimation(0, "set", !0);
this.node.scaleX = Math.abs(this.node.scaleX);
PPSDK.emit(c.TG_LMSJ_EventName.game_win);
};
t.prototype.roleMove = function() {
var e = this;
if (0 != this.walkPosArr.length) {
this.spine.animation = "walk";
this.spine.loop = !0;
this.isRoleMove = !0;
var t = function() {
if (e.drawPosArr.length <= 0) {
e.isRoleMove = !1;
e.spine.animation = "idle";
e.moveEndCall && e.moveEndCall();
} else {
var o = e.drawPosArr.shift(), n = e.node.parent.convertToNodeSpaceAR(o), i = e.node.getPosition(), r = n.sub(i).len() / e.speed;
Math.abs(i.x - n.x) > 2 && (i.x > n.x ? e.node.scaleX = -Math.abs(e.node.scaleX) : e.node.scaleX = Math.abs(e.node.scaleX));
cc.tween(e.node).to(r, {
position: cc.v3(n.x, n.y)
}).call(function() {
e.drawPosArr.length >= 0 && t && t();
}).start();
}
};
t && t();
}
};
t.prototype.stopMove = function() {
this.moveEndCall && this.moveEndCall();
this.isRoleMove = !1;
this.spine.setAnimation(0, "idle", !0);
this.node.stopAllActions();
this.drawPosArr = [];
};
t.prototype.gameEnd = function() {
if (this.allTag && this.allTag.length > 0) for (var e = 0, t = this.allTag; e < t.length; e++) {
var o = t[e];
cc.audioEngine.stopEffect(o);
}
this.allTag = [];
this.drawLineAudioTag = -1;
this.moveEndCall && this.moveEndCall();
this.node.stopAllActions();
this.drawPosArr = [];
};
r([ d({
displayName: "spine动画",
type: sp.Skeleton
}) ], t.prototype, "spine", void 0);
r([ d({
displayName: "画线颜色"
}) ], t.prototype, "lineColor", void 0);
r([ d({
displayName: "绘画起点",
type: cc.Node
}) ], t.prototype, "drawStartNode", void 0);
r([ d({
displayName: "触摸节点",
type: cc.Node
}) ], t.prototype, "touchNode", void 0);
r([ d({
displayName: "是否是男生"
}) ], t.prototype, "isBoy", void 0);
return r([ p ], t);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {
"../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config": "TG_LMSJ_Config",
"../TG_LMSJ_Enum": "TG_LMSJ_Enum",
"../TG_LMSJ_GameConfig": "TG_LMSJ_GameConfig",
"./TG_LMSJ_Toilet": "TG_LMSJ_Toilet"
} ],
TG_LMSJ_ShopItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "460b75cl7FLmrn6qhEONrSM", "TG_LMSJ_ShopItem");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../TG_LMSJ_Loading/TScript/TG_LMSJ_AdvertisingManager"), c = e("../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config"), s = e("../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control"), l = cc._decorator, u = l.ccclass, p = l.property, d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bgSprite = null;
t.bgSFArr = [];
t.usingNode = null;
t.grayUseNode = null;
t.checkNode = null;
t.manSpine = null;
t.womanSpine = null;
t.toiletSprite = null;
t.toiletSFArr = [];
t.videoBtn = null;
t.coinBtn = null;
t.coinLabel = null;
t.tableData = null;
t.skinID = 0;
t.toiletID = 0;
t.updateAllItemCall = null;
return t;
}
t.prototype.init = function(e) {
if (null != e) {
this.toiletID = 0;
this.skinID = e;
this.toiletSprite.node.active = !1;
this.updateSkinUse();
}
};
t.prototype.initToilet = function(e) {
this.toiletID = e;
this.skinID = 0;
this.toiletSprite.node.active = !0;
this.manSpine.node.active = !1;
this.womanSpine.node.active = !1;
this.toiletSprite.spriteFrame = this.toiletSFArr[e - 1];
this.updateToiletUse();
this.bgSprite.spriteFrame = this.bgSFArr[0];
};
t.prototype.updateSkinUse = function() {};
t.prototype.updateToiletUse = function() {
if (-1 == s.TG_LMSJ_Control.getHaveToiletIDArr().indexOf(this.toiletID)) {
this.usingNode.active = !1;
this.grayUseNode.active = !1;
this.checkNode.active = !1;
var e = null, t = c.TG_LMSJ_Config.getIns().toiletTableData;
for (var o in t) {
var n = t[o];
n.id == this.toiletID && (e = n);
}
if (1 == e.unlockStyle) {
var i = e.unlockCount;
this.coinBtn.active = !0;
this.videoBtn.active = !1;
this.coinLabel.string = "" + i;
} else if (2 == e.unlockStyle) {
this.coinBtn.active = !1;
this.videoBtn.active = !0;
}
} else {
this.videoBtn.active = !1;
this.coinBtn.active = !1;
if (s.TG_LMSJ_Control.getUseToiletID() == this.toiletID) {
this.checkNode.active = !0;
this.usingNode.active = !0;
this.grayUseNode.active = !1;
} else {
this.checkNode.active = !1;
this.usingNode.active = !1;
this.grayUseNode.active = !0;
}
}
};
t.prototype.clickUse = function() {
if (this.skinID > 0) ; else if (this.toiletID > 0) {
if (-1 == s.TG_LMSJ_Control.getHaveToiletIDArr().indexOf(this.toiletID)) return;
s.TG_LMSJ_Control.setUseToiletID(this.toiletID);
}
this.updateAllItemCall && this.updateAllItemCall();
};
t.prototype.clickVideo = function() {
var e = this;
a.showRewardedVideoAd({
success: function() {
e.skinID > 0 ? e.addSkinID() : e.addToiletID();
},
fail: function() {
PPSDK.showToast(PPSDK.languageManager.getLabel(c.TG_LMSJ_Config.getIns().bundleName, "视频播放失败"));
}
});
};
t.prototype.clickCoinBtn = function() {
var e = parseInt(this.coinLabel.string), t = s.TG_LMSJ_Control.getCoinCount();
if (t < e) PPSDK.showToast(PPSDK.languageManager.getLabel(c.TG_LMSJ_Config.getIns().bundleName, "金币不足")); else {
t -= e;
s.TG_LMSJ_Control.setCoinCount(t);
this.skinID > 0 ? this.addSkinID() : this.addToiletID();
}
};
t.prototype.addSkinID = function() {};
t.prototype.addToiletID = function() {
var e = s.TG_LMSJ_Control.getHaveToiletIDArr();
e.push(this.toiletID);
s.TG_LMSJ_Control.setHaveToiletIDArr(e);
s.TG_LMSJ_Control.setUseToiletID(this.toiletID);
this.updateAllItemCall && this.updateAllItemCall();
PPSDK.emit("TG_LMSJ_CreateRewardPop", {
state: 0,
spriteFrame: this.toiletSprite.spriteFrame,
id: null
});
};
r([ p({
displayName: "背景精灵",
type: cc.Sprite
}) ], t.prototype, "bgSprite", void 0);
r([ p({
displayName: "背景精灵集合",
type: cc.SpriteFrame
}) ], t.prototype, "bgSFArr", void 0);
r([ p({
displayName: "使用中节点",
type: cc.Node
}) ], t.prototype, "usingNode", void 0);
r([ p({
displayName: "灰色使用按钮",
type: cc.Node
}) ], t.prototype, "grayUseNode", void 0);
r([ p({
displayName: "使用勾选节点",
type: cc.Node
}) ], t.prototype, "checkNode", void 0);
r([ p({
displayName: "男spine",
type: sp.Skeleton
}) ], t.prototype, "manSpine", void 0);
r([ p({
displayName: "女spine",
type: sp.Skeleton
}) ], t.prototype, "womanSpine", void 0);
r([ p({
displayName: "厕所精灵",
type: cc.Sprite
}) ], t.prototype, "toiletSprite", void 0);
r([ p({
displayName: "厕所图片合集",
type: cc.SpriteFrame
}) ], t.prototype, "toiletSFArr", void 0);
r([ p({
displayName: "视频解锁按钮",
type: cc.Node
}) ], t.prototype, "videoBtn", void 0);
r([ p({
displayName: "金币按钮",
type: cc.Node
}) ], t.prototype, "coinBtn", void 0);
r([ p({
displayName: "金币数量",
type: cc.Label
}) ], t.prototype, "coinLabel", void 0);
return r([ u ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../TG_LMSJ_Loading/TScript/TG_LMSJ_AdvertisingManager": "TG_LMSJ_AdvertisingManager",
"../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config": "TG_LMSJ_Config",
"../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control": "TG_LMSJ_Control"
} ],
TG_LMSJ_ShopUI: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8ba3dTsGCpFzbv48aBW6svL", "TG_LMSJ_ShopUI");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../TG_LMSJ_Loading/TScript/TG_LMSJ_AdvertisingManager"), c = e("../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config"), s = e("../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control"), l = e("./TG_LMSJ_CoinAniNodes"), u = e("./TG_LMSJ_ShopItem"), p = cc._decorator, d = p.ccclass, _ = p.property, h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.coinLabel = null;
t.bgSFArr = [];
t.skinSprite = null;
t.toiletSprite = null;
t.skinLabelNode = null;
t.toiletLabelNode = null;
t.itemPrefab = null;
t.itemLayer = null;
t.scrollView = null;
t.videoGetCoin = null;
t.isShowAni = !1;
t.showState = 0;
t.closeCall = null;
return t;
}
t.prototype.start = function() {
var e = this, t = this.node.getChildByName("topLayer"), o = this.node.getChildByName("centralLayer");
this.isShowAni = !0;
t.getComponent(cc.Widget).updateAlignment();
var n = t.getPosition().clone();
t.y += 300;
t.stopAllActions();
t.opacity = 0;
this.scheduleOnce(function() {
t.opacity = 255;
});
cc.tween(t).to(.5, {
position: cc.v3(n.x, n.y)
}, {
easing: ""
}).call(function() {
e.isShowAni = !1;
}).start();
o.stopAllActions();
o.scale = .2;
cc.tween(o).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
this.updateCoinNum();
this.showState = 1;
this.updateShowContent();
PPSDK.on("TG_LMSJ_UpdateCoin", this.updateCoinNum, this);
};
t.prototype.clickChange = function(e, t) {
var o = parseInt(t);
this.showState = o;
this.updateShowContent();
};
t.prototype.updateShowContent = function() {
this.itemLayer.destroyAllChildren();
if (0 == this.showState) ; else {
this.skinSprite.spriteFrame = this.bgSFArr[1];
this.toiletSprite.spriteFrame = this.bgSFArr[0];
this.skinLabelNode.color = cc.Color.GRAY;
this.toiletLabelNode.color = cc.Color.BLACK;
var e = c.TG_LMSJ_Config.getIns().toiletTableData;
for (var t in e) {
var o = cc.instantiate(this.itemPrefab);
if (null != o) {
var n = e[t];
o.setParent(this.itemLayer);
var i = o.getComponent(u.default);
i.initToilet(n.id);
i.updateAllItemCall = this.updateAllToiletItem.bind(this);
}
}
}
this.scrollView.stopAutoScroll();
this.itemLayer.setPosition(cc.v2(0, 255));
};
t.prototype.updateAllSkinItem = function() {
if (!(this.itemLayer.childrenCount <= 0)) for (var e = 0, t = this.itemLayer.children; e < t.length; e++) {
var o = t[e];
null != o && o.getComponent(u.default).updateSkinUse();
}
};
t.prototype.updateAllToiletItem = function() {
if (!(this.itemLayer.childrenCount <= 0)) for (var e = 0, t = this.itemLayer.children; e < t.length; e++) {
var o = t[e];
null != o && o.getComponent(u.default).updateToiletUse();
}
};
t.prototype.onDestroy = function() {
PPSDK.off(this);
};
t.prototype.updateCoinNum = function() {
var e = s.TG_LMSJ_Control.getCoinCount();
this.coinLabel.string = "" + e;
};
t.prototype.clickVideoBtn = function() {
var e = this;
a.showRewardedVideoAd({
success: function() {
e.videoGetCoin.convertToWorldSpaceAR(cc.v2()), e.coinLabel.node.parent.convertToWorldSpaceAR(cc.v2());
l.default._instance.showAni(e.videoGetCoin, e.coinLabel.node.parent, null, function() {
var e = s.TG_LMSJ_Control.getCoinCount();
e += 500;
s.TG_LMSJ_Control.setCoinCount(e);
});
},
fail: function() {
PPSDK.showToast(PPSDK.languageManager.getLabel(c.TG_LMSJ_Config.getIns().bundleName, "视频播放失败"));
}
});
};
t.prototype.clickBack = function() {
this.closeCall && this.closeCall();
this.node.destroy();
};
r([ _({
displayName: "金币数量",
type: cc.Label
}) ], t.prototype, "coinLabel", void 0);
r([ _({
displayName: "背景图片合集",
type: cc.SpriteFrame
}) ], t.prototype, "bgSFArr", void 0);
r([ _({
displayName: "皮肤背景图片",
type: cc.Sprite
}) ], t.prototype, "skinSprite", void 0);
r([ _({
displayName: "卫生间背景图片",
type: cc.Sprite
}) ], t.prototype, "toiletSprite", void 0);
r([ _({
displayName: "皮肤Label节点",
type: cc.Node
}) ], t.prototype, "skinLabelNode", void 0);
r([ _({
displayName: "卫生间Label节点",
type: cc.Node
}) ], t.prototype, "toiletLabelNode", void 0);
r([ _({
displayName: "item预设",
type: cc.Prefab
}) ], t.prototype, "itemPrefab", void 0);
r([ _({
displayName: "item父节点",
type: cc.Node
}) ], t.prototype, "itemLayer", void 0);
r([ _({
displayName: "scrollView节点",
type: cc.ScrollView
}) ], t.prototype, "scrollView", void 0);
r([ _({
displayName: "视频获取金币节点",
type: cc.Node
}) ], t.prototype, "videoGetCoin", void 0);
return r([ d ], t);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../../TG_LMSJ_Loading/TScript/TG_LMSJ_AdvertisingManager": "TG_LMSJ_AdvertisingManager",
"../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config": "TG_LMSJ_Config",
"../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control": "TG_LMSJ_Control",
"./TG_LMSJ_CoinAniNodes": "TG_LMSJ_CoinAniNodes",
"./TG_LMSJ_ShopItem": "TG_LMSJ_ShopItem"
} ],
TG_LMSJ_SpriteLanguageMgr: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8f5c6/Q0BdC/rEioSaiYa0Q", "TG_LMSJ_SpriteLanguageMgr");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../../resources/PPSDK/framework/core/language/LanguageSprite"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.key = "TG_LMSJ";
return t;
}
return r([ s ], t);
}(a.default));
o.default = l;
cc._RF.pop();
}, {
"../../../../resources/PPSDK/framework/core/language/LanguageSprite": void 0
} ],
TG_LMSJ_StoneBuild: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "32ec38EistJhZNhYVwu15WR", "TG_LMSJ_StoneBuild");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("./TG_LMSJ_Stone"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.buildByNode = function(e) {
if (e) {
this.node.x = e.x;
this.node.y = e.y;
this.node.scaleX = e.scaleX;
this.node.scaleY = e.scaleY;
this.node.getComponent(a.default).init();
}
};
t.prototype.exportData = function() {
return {
x: this.node.x,
y: this.node.y,
scaleX: this.node.scaleX,
scaleY: this.node.scaleY,
name: this.node.name
};
};
return r([ s ], t);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {
"./TG_LMSJ_Stone": "TG_LMSJ_Stone"
} ],
TG_LMSJ_Stone: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b6acfhrJ9lL6LXHXdtZZBQm", "TG_LMSJ_Stone");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("./TG_LMSJ_Role"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.canMove = !0;
return t;
}
t.prototype.init = function() {
this.canMove = !0;
};
t.prototype.update = function() {};
t.prototype.onCollisionEnter = function(e) {
var t = this.node.getComponent(cc.RigidBody);
if (!(Math.abs(t.linearVelocity.x) > 0 || Math.abs(t.linearVelocity.y) > 0)) {
var o = e.node;
if ("Role" == o.group) {
o.getComponent(a.default).stopMove();
var n = o.convertToWorldSpaceAR(cc.v2()), i = this.node.convertToWorldSpaceAR(cc.v2()), r = Math.abs(n.y - i.y), c = Math.abs(n.x - i.x);
n.y > i.y ? n.x > i.x ? t.linearVelocity = r > c ? cc.v2(0, -200) : cc.v2(-200, 0) : t.linearVelocity = r > c ? cc.v2(0, -200) : cc.v2(200, 0) : n.x > i.x ? t.linearVelocity = r > c ? cc.v2(0, 200) : cc.v2(-200, 0) : t.linearVelocity = r > c ? cc.v2(0, 200) : cc.v2(200, 0);
}
}
};
return r([ s ], t);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {
"./TG_LMSJ_Role": "TG_LMSJ_Role"
} ],
TG_LMSJ_Sub: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f4758lWKYBIfauK8+e0Awa1", "TG_LMSJ_Sub");
var n = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../../../../resources/PPSDK/framework/common/subGame/SubGame"), r = e("./TG_LMSJ_Config"), a = e("./TG_LMSJ_Control"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function() {
function e() {
this.name = r.TG_LMSJ_Config.getIns().bundleName;
this.group = {
"collision-matrix": [ [ !1 ], [ !1, !1, !0, !0, !0, !0, !0, !0, !0, !0, !0 ], [ !1, !0, !1, !0, !1, null, null, null, !0 ], [ !1, !0, !0, !1, null, null, null, null, !0 ], [ !1, !0, !1, !1, !1, null, null, null, !0 ], [ !1, !0, !1, !1, !1, !1 ], [ !1, !0, !1, !1, !1, !1, !1, null, !1 ], [ !1, !0, !1, !1, !1, !1, !1, !1 ], [ !1, !0, !0, !0, !0, !1, !1, !1, !1 ], [ !1, !0, !1, !1, !1, !1, !1, !1, !1, !1 ], [ !1, !0, !1, !1, !1, !1, !1, !1, !1, !1, !1 ] ],
"excluded-modules": [ "3D", "3D Primitive", "3D Physics/cannon.js", "3D Physics/Builtin", "3D Particle" ],
"group-list": [ "default", "Role", "Wall", "Stone", "Toilet", "Hurt", "Switch", "Transfer", "bubble", "Coin", "Tip" ],
"start-scene": "46743c47-3f7f-48c8-b92a-17e329222e54",
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
"last-module-event-record-time": 1676966084471,
"assets-sort-type": "name",
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
"preview-port": 7456,
"clear-simulator-cache": !0,
"migrate-history": [ "cloud-function" ]
};
this.getUnlockLevel = function() {
return a.TG_LMSJ_Control.getMaxPassPart();
};
this.goGame = function() {
return new Promise(function(e) {
var t = r.TG_LMSJ_Config.getIns().bundleName;
cc.assetManager.getBundle(t).loadScene(r.TG_LMSJ_Config.getIns().loadingName, function(t, o) {
if (!t && null != o) {
e && e();
cc.director.runScene(o);
}
});
});
};
}
return n([ s ], e);
}());
o.default = l;
i.SubGame.addSub(new l());
cc._RF.pop();
}, {
"../../../../resources/PPSDK/framework/common/subGame/SubGame": void 0,
"./TG_LMSJ_Config": "TG_LMSJ_Config",
"./TG_LMSJ_Control": "TG_LMSJ_Control"
} ],
TG_LMSJ_SwitchBuild: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4724fGoSCtNV7N6st1Yo6Um", "TG_LMSJ_SwitchBuild");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("./TG_LMSJ_Switch"), c = cc._decorator, s = c.ccclass, l = c.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.spriteID = 0;
return t;
}
t.prototype.buildByNode = function(e) {
if (e) {
this.node.x = e.x;
this.node.y = e.y;
this.node.scaleX = e.scaleX;
this.node.scaleY = e.scaleY;
this.node.angle = e.angle;
var t = this.node.getComponent(a.default);
t && t.initSprite(e.spriteID);
}
};
t.prototype.exportData = function() {
return {
x: this.node.x,
y: this.node.y,
scaleX: this.node.scaleX,
scaleY: this.node.scaleY,
angle: this.node.angle,
name: this.node.name,
spriteID: this.spriteID
};
};
r([ l({
tooltip: "开关ID"
}) ], t.prototype, "spriteID", void 0);
return r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./TG_LMSJ_Switch": "TG_LMSJ_Switch"
} ],
TG_LMSJ_SwitchWallBuild: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f474fyaH3xAa7u7mvjulCb6", "TG_LMSJ_SwitchWallBuild");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("./TG_LMSJ_SwitchWall"), c = cc._decorator, s = c.ccclass, l = c.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.spriteID = 0;
return t;
}
t.prototype.buildByNode = function(e) {
if (e) {
this.node.x = e.x;
this.node.y = e.y;
this.node.scaleX = e.scaleX;
this.node.scaleY = e.scaleY;
this.node.angle = e.angle;
var t = this.node.getComponent(a.default);
t && t.initSprite(e.spriteID);
}
};
t.prototype.exportData = function() {
return {
x: this.node.x,
y: this.node.y,
scaleX: this.node.scaleX,
scaleY: this.node.scaleY,
angle: this.node.angle,
name: this.node.name,
spriteID: this.spriteID
};
};
r([ l({
tooltip: "开关ID"
}) ], t.prototype, "spriteID", void 0);
return r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./TG_LMSJ_SwitchWall": "TG_LMSJ_SwitchWall"
} ],
TG_LMSJ_SwitchWall: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f01213E6PNKVpZuWYad8X2F", "TG_LMSJ_SwitchWall");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../TG_LMSJ_Enum"), c = cc._decorator, s = c.ccclass, l = c.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.switchWallSprite = null;
t.switchWallSFArr = [];
t.spriteID = null;
return t;
}
t.prototype.initSprite = function(e) {
if (null != e) {
this.switchWallSprite.spriteFrame = this.switchWallSFArr[e];
this.spriteID = e;
this.switchWallSprite.fillRange = 1;
this.node.getComponent(cc.BoxCollider).enabled = !0;
}
};
t.prototype.start = function() {
PPSDK.on(a.TG_LMSJ_EventName.touch_switch, this.hideAni, this);
};
t.prototype.onDestroy = function() {
PPSDK.off(this);
};
t.prototype.hideAni = function(e) {
var t = this;
if (this.spriteID == e) {
this.switchWallSprite.fillRange = 1;
this.node.getComponent(cc.BoxCollider).enabled = !1;
cc.tween(this.switchWallSprite).to(.2, {
fillRange: .2
}).call(function() {
t.node.destroy();
}).start();
}
};
r([ l({
displayName: "墙图片",
type: cc.Sprite
}) ], t.prototype, "switchWallSprite", void 0);
r([ l({
displayName: "所有开关墙图片",
type: cc.SpriteFrame
}) ], t.prototype, "switchWallSFArr", void 0);
return r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../TG_LMSJ_Enum": "TG_LMSJ_Enum"
} ],
TG_LMSJ_Switch: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "14fabS0fwJNaLgTXp8b9J7o", "TG_LMSJ_Switch");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config"), c = e("../TG_LMSJ_Enum"), s = cc._decorator, l = s.ccclass, u = s.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.switchSprite = null;
t.switchSFArr = [];
t.spriteId = 0;
t.canCollider = !0;
return t;
}
t.prototype.initSprite = function(e) {
if (null != e) {
this.spriteId = e;
this.switchSprite.spriteFrame = this.switchSFArr[e];
}
};
t.prototype.start = function() {
this.switchSprite.fillRange = 1;
this.canCollider = !0;
};
t.prototype.onCollisionEnter = function(e) {
if (this.canCollider && "Role" == e.node.group) {
PPSDK.emit(c.TG_LMSJ_EventName.touch_switch, this.spriteId);
this.canCollider = !1;
a.TG_LMSJ_Config.playAudio(c.TG_LMSJ_AudioName.open_door);
this.switchSprite.node.stopAllActions();
cc.tween(this.switchSprite).to(.5, {
fillRange: 0
}).start();
}
};
r([ u({
displayName: "开关精灵",
type: cc.Sprite
}) ], t.prototype, "switchSprite", void 0);
r([ u({
displayName: "所有开关精灵图片",
type: cc.SpriteFrame
}) ], t.prototype, "switchSFArr", void 0);
return r([ l ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config": "TG_LMSJ_Config",
"../TG_LMSJ_Enum": "TG_LMSJ_Enum"
} ],
TG_LMSJ_ThornBuild: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9600aVRjg9IHZCSiew4zbbP", "TG_LMSJ_ThornBuild");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("./TG_LMSJ_Thorn"), c = cc._decorator, s = c.ccclass, l = c.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.isShow = !0;
return t;
}
t.prototype.buildByNode = function(e) {
if (e) {
this.node.x = e.x;
this.node.y = e.y;
this.node.scaleX = e.scaleX;
this.node.scaleY = e.scaleY;
this.node.getComponent(a.default).init(e.isShow);
}
};
t.prototype.exportData = function() {
return {
x: this.node.x,
y: this.node.y,
scaleX: this.node.scaleX,
scaleY: this.node.scaleY,
name: this.node.name,
isShow: this.isShow
};
};
r([ l({
tooltip: "默认是否展示尖刺"
}) ], t.prototype, "isShow", void 0);
return r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./TG_LMSJ_Thorn": "TG_LMSJ_Thorn"
} ],
TG_LMSJ_Thorn: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "da5425l369FYLrm90IvULfr", "TG_LMSJ_Thorn");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../TG_LMSJ_GameConfig"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.delayTime = 3;
t.state = 0;
t.spine = null;
return t;
}
t.prototype.start = function() {};
t.prototype.init = function(e) {
var t = this, o = this.node.getChildByName("spine");
this.spine = o.getComponent(sp.Skeleton);
if (e) {
this.node.getComponent(cc.BoxCollider).enabled = !0;
this.state = 0;
this.scheduleOnce(function() {
t.spine.setAnimation(0, "xijing1", !0);
});
this.delayTime = 3;
} else {
this.state = 1;
this.node.getComponent(cc.BoxCollider).enabled = !1;
this.scheduleOnce(function() {
t.spine.setAnimation(0, "xijing2", !0);
});
this.delayTime = 3;
}
};
t.prototype.update = function(e) {
var t = a.TG_LMSJ_GameConfig.getIns();
if (null != t && !t.gameEnd && !t.gamePause) {
if (0 == this.state) {
this.delayTime -= e;
this.delayTime <= 0 && this.closeThron();
}
if (1 == this.state) {
this.delayTime -= e;
this.delayTime <= 0 && this.showThron();
}
}
};
t.prototype.closeThron = function() {
var e = this;
this.state = 2;
this.delayTime = 3;
var t = this.spine.setAnimation(0, "guodu2", !1);
this.spine.setTrackCompleteListener(t, function() {
e.spine.setAnimation(0, "xijing2", !0);
e.state = 1;
e.node.getComponent(cc.BoxCollider).enabled = !1;
});
};
t.prototype.showThron = function() {
var e = this;
this.state = 2;
this.delayTime = 3;
this.node.getComponent(cc.BoxCollider).enabled = !0;
var t = this.spine.setAnimation(0, "guodu", !1);
this.spine.setTrackCompleteListener(t, function() {
e.spine.setAnimation(0, "xijing1", !0);
e.state = 0;
});
};
return r([ s ], t);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {
"../TG_LMSJ_GameConfig": "TG_LMSJ_GameConfig"
} ],
TG_LMSJ_ToiletBuild: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0f8e3fX6tREpY6ezBSt1JCL", "TG_LMSJ_ToiletBuild");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.buildByNode = function(e) {
if (e) {
this.node.x = e.x;
this.node.y = e.y;
this.node.scaleX = e.scaleX;
this.node.scaleY = e.scaleY;
}
};
t.prototype.exportData = function() {
return {
x: this.node.x,
y: this.node.y,
scaleX: this.node.scaleX,
scaleY: this.node.scaleY,
name: this.node.name
};
};
return r([ c ], t);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
TG_LMSJ_Toilet: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6799cEo8wVNyJPN04Fkg+Gs", "TG_LMSJ_Toilet");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control"), c = cc._decorator, s = c.ccclass, l = c.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.sitNode = null;
t.toiletSFArr = [];
t.toiletSprite = null;
t.sitWorldPos = cc.v2();
return t;
}
t.prototype.start = function() {
this.sitWorldPos = this.sitNode.convertToWorldSpaceAR(cc.v2());
var e = a.TG_LMSJ_Control.getUseToiletID();
this.toiletSprite.spriteFrame = this.toiletSFArr[e - 1];
};
r([ l({
displayName: "坐下节点",
type: cc.Node
}) ], t.prototype, "sitNode", void 0);
r([ l({
displayName: "当前所有的厕所图片",
type: cc.SpriteFrame
}) ], t.prototype, "toiletSFArr", void 0);
r([ l({
displayName: "厕所Sprite",
type: cc.Sprite
}) ], t.prototype, "toiletSprite", void 0);
return r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Control": "TG_LMSJ_Control"
} ],
TG_LMSJ_TransferBuild: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "222a4bRCOlHE57sm5N9Wds0", "TG_LMSJ_TransferBuild");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("./TG_LMSJ_Transfer"), c = cc._decorator, s = c.ccclass, l = c.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.spriteID = 0;
return t;
}
t.prototype.buildByNode = function(e) {
if (e) {
this.node.x = e.x;
this.node.y = e.y;
this.node.scaleX = e.scaleX;
this.node.scaleY = e.scaleY;
var t = this.node.getComponent(a.default);
t && t.initSprite(e.spriteID);
}
};
t.prototype.exportData = function() {
return {
x: this.node.x,
y: this.node.y,
scaleX: this.node.scaleX,
scaleY: this.node.scaleY,
name: this.node.name,
spriteID: this.spriteID
};
};
r([ l({
tooltip: "传送阵ID"
}) ], t.prototype, "spriteID", void 0);
return r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./TG_LMSJ_Transfer": "TG_LMSJ_Transfer"
} ],
TG_LMSJ_Transfer: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9fed0jwuYdNyIolzmacHn6v", "TG_LMSJ_Transfer");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config"), c = e("../TG_LMSJ_Enum"), s = cc._decorator, l = s.ccclass, u = s.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.spine = null;
t.spriteID = 0;
t.transferCall = null;
t.touchSuccessCall = null;
t.canCollider = !1;
t.aniStr = [ "idle_green", "idle_purple", "idle_bule" ];
return t;
}
t.prototype.initSprite = function(e) {
var t = this;
this.spriteID = e;
this.scheduleOnce(function() {
t.spine.setAnimation(0, t.aniStr[e], !0);
});
};
t.prototype.start = function() {
this.node.stopAllActions();
this.node.angle = 0;
this.canCollider = !0;
};
t.prototype.onCollisionEnter = function() {};
t.prototype.onCollisionStay = function(e) {
if (this.canCollider) {
var t = e.node;
if ("Role" == t.group && this.touchSuccessCall(this.node)) {
this.transferCall && this.transferCall(this.spriteID, this.node, t);
a.TG_LMSJ_Config.playAudio(c.TG_LMSJ_AudioName.transfer);
this.canCollider = !1;
}
}
};
t.prototype.onCollisionExit = function(e) {
"Role" == e.node.group && (this.canCollider || (this.canCollider = !0));
};
r([ u({
displayName: "spine动画",
type: sp.Skeleton
}) ], t.prototype, "spine", void 0);
return r([ l ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../../TG_LMSJ_Loading/TScript/TG_LMSJ_Config": "TG_LMSJ_Config",
"../TG_LMSJ_Enum": "TG_LMSJ_Enum"
} ],
TG_LMSJ_Util: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3201asySMlAMLEipkgaL8eR", "TG_LMSJ_Util");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.TG_LMSJ_Util = void 0;
var n = function() {
function e() {}
e.compareVersion = function(e, t) {
var o, n, i = /(\d+)\.(\d+)\.(\d+)/;
try {
if (4 !== e.match(i).length || 4 !== t.match(i).length) {
console.log("Error compareVersion", "param");
return;
}
} catch (e) {
console.log("Error compareVersion", "param");
return;
}
o = e.match(i).slice(1, 4);
n = t.match(i).slice(1, 4);
for (var r = 0; r < 3; r++) if (o[r] < n[r]) return !1;
return !0;
};
e.uuid = function() {
var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), o = [];
for (e = 0; e < 32; e++) o[e] = t[0 | 16 * Math.random()];
return o.join("");
};
e.isToday = function(e) {
console.log(new Date(e).toDateString());
console.log(new Date().toDateString());
return new Date(e).toDateString() === new Date().toDateString();
};
e.isEqualElementsArray = function(e, t) {
if (null == e && null == t) return !0;
if (0 == e.length && 0 == t.length) return !0;
for (var o = !0, n = 0; n < e.length; n++) if (e[n] !== t[n]) {
o = !1;
break;
}
return o;
};
e.getDistance = function(e, t) {
return null == e || null == t ? 0 : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
};
e.getRandomNum = function(e, t) {
if (e == t) return e;
var o = e > t ? t : e, n = (e > t ? e + 1 : t + 1) - o;
return Math.floor(Math.random() * n) + o;
};
e.getRandomFloatNum = function(e, t) {
return e + (t - e) * Math.random();
};
e.getAngle = function(e, t) {
return null == e || null == t ? 0 : Math.atan2(e.y - t.y, e.x - t.x) * (180 / Math.PI);
};
e.getVectorsAngle = function(e, t) {
return null == e || null == t ? 0 : t.signAngle(e) * (180 / Math.PI);
};
e.rotateAngle = function(e, t) {
if (null == e) return cc.v2();
var o = Math.PI / 180 * t, n = Math.sin(o), i = Math.cos(o), r = e.x * i + e.y * n, a = -e.x * n + e.y * i;
return cc.v2(r, a);
};
e.getRandomIndexInChanceArray = function(e, t) {
void 0 === t && (t = 1);
if (null == e || e.length <= 0) return null;
for (var o = Math.random() * t, n = 0, i = 0, r = 0, a = e; r < a.length; r++) {
if (o <= (i += a[r])) return n;
n++;
}
return 0;
};
e.getRandomValueFromArray = function(e) {
if (null == e || e.length <= 0) return null;
var t = e.length, o = Math.random();
return e[Math.floor(o * t)];
};
e.getRandomArrayValue = function(e, t) {
for (var o = e.slice(0), n = e.length, i = n - t, r = null, a = null; n-- > i; ) {
r = o[a = Math.floor((n + 1) * Math.random())];
o[a] = o[n];
o[n] = r;
}
return o.slice(i);
};
e.getRandomArrayElements = function(e, t) {
if (!(null == e || e.length <= 0 || t > e.length || t <= 0)) {
var o = e.concat([]);
o.sort(function() {
return Math.random() > .5 ? 1 : -1;
});
return o.slice(0, t);
}
};
e.arrayIntersection = function(e, t) {
if (null == e || null == t || e.length <= 0 || t.length <= 0) return [];
var o = new Array();
e.forEach(function(e) {
-1 != t.indexOf(e) && o.push(e);
});
return o;
};
e.arrayRemoveRepeatElements = function(e) {
if (null == e || e.length <= 0) return [];
for (var t = [], o = {}, n = 0, i = e; n < i.length; n++) {
var r = i[n];
if (!o[r]) {
t.push(r);
o[r] = 1;
}
}
return t;
};
e.getBoneWorldRotation = function(e) {
if (null != e && null != e.rotation) {
for (var t = e.rotation, o = 0; o < 999 && null != e.parent; o++) {
var n = e.parent;
if (null == n.rotation) break;
t += n.rotation;
e = n;
}
return t;
}
};
e.getDayInterval = function(e, t) {
var o = new Date(e), n = new Date(t), i = o.setHours(0, 0, 0, 0), r = n.setHours(0, 0, 0, 0) - i;
r = Math.abs(r);
return Math.floor(r / 864e5);
};
e.getNumberSuffixStr = function(e, t) {
for (var o = "", n = t, i = 0, r = 10, a = 0; a < t; a++) {
n--;
if (e >= i && e < r) break;
i *= 10;
r *= 10;
}
o += e;
for (a = 0; a < n; a++) o = "0" + o;
return o;
};
e.getNumStr = function(e) {
var t = null;
if (e <= 9999) t = e; else if (e > 9999 && e < 999999) (o = Math.floor(e / 1e3)) > 0 && (t = o + "K"); else {
var o;
(o = Math.floor(e / 1e5)) > 0 && (t = o + "M");
}
return t;
};
e.getTimeCutDownString = function(e) {
if (null == e || e <= 0) return "00:00:00";
var t = Math.floor(e / 36e5), o = Math.floor((e - 36e5 * t) / 6e4), n = Math.floor((e - 36e5 * t - 6e4 * o) / 1e3);
return (t >= 10 ? t + "" : "0" + t) + ":" + (o >= 10 ? o + "" : "0" + o) + ":" + (n >= 10 ? n + "" : "0" + n);
};
e.getCurTime = function() {
var e = new Date(), t = e.getFullYear(), o = e.getMonth() + 1, n = e.getDate();
e.getHours(), e.getMinutes(), e.getSeconds();
return n + "-" + o + "-" + t;
};
e.pointInNode = function(e, t) {
if (null == e || null == t) return !1;
var o = t.convertToNodeSpaceAR(e), n = t.getComponent(cc.BoxCollider);
if (n) {
var i = n.size.width, r = n.size.height, a = Math.abs(o.y) < r / 2;
return !!(Math.abs(o.x) < i / 2 && a);
}
var c = t.getComponent(cc.CircleCollider);
return !!c && o.len() < c.radius;
};
e.lineIntersect = function(e, t) {
return null != e && null != t && 2 == e.length && 2 == t.length && cc.Intersection.lineLine(e[0], e[1], t[0], t[1]);
};
e.lineRect = function(e, t) {
if (null == e || null == t || 2 != e.length) return !1;
if (this.pointInNode(e[0], t)) return !0;
if (this.pointInNode(e[1], t)) return !0;
if (t.getComponent(cc.BoxCollider)) {
var o = [], n = [], i = t.convertToWorldSpaceAR(cc.v2()), r = t.width / 2, a = t.height / 2, c = Math.PI * t.angle / 180, s = Math.sin(c), l = Math.cos(c), u = cc.v2(-r * l - a * s, -r * s + a * l), p = cc.v2(r * l - a * s, r * s + a * l), d = cc.v2(-r * l + a * s, -r * s - a * l), _ = cc.v2(r * l + a * s, r * s - a * l), h = cc.instantiate(t);
h.setParent(t.parent);
h.opacity = 0;
h.setPosition(t.getPosition());
h.angle = 0;
u = h.convertToWorldSpaceAR(u);
p = h.convertToWorldSpaceAR(p);
d = h.convertToWorldSpaceAR(d);
_ = h.convertToWorldSpaceAR(_);
h.destroy();
o.push(u);
o.push(_);
if (this.lineIntersect(e, o)) return !0;
n.push(p);
n.push(d);
return !!this.lineIntersect(e, n);
}
var f = t.getComponent(cc.CircleCollider);
if (f) {
i = t.convertToWorldSpaceAR(cc.v2());
return this.getPointToLine(i, e) < f.radius * t.scale;
}
return !1;
};
e.getPointToLine = function(e, t) {
var o = e.x, n = e.y, i = t[0].x, r = t[0].y, a = t[1].x, c = t[1].y, s = (a - i) * (o - i) + (c - r) * (n - r);
if (s <= 0) return Math.sqrt(Math.pow(o - i, 2) + Math.pow(n - r, 2));
var l = (a - i) * (a - i) + (c - r) * (c - r);
if (s >= l) return Math.sqrt(Math.pow(o - a, 2) + Math.pow(n - c, 2));
var u = s / l, p = i + (a - i) * u, d = r + (c - r) * u;
return Math.sqrt(Math.pow(o - p, 2) + Math.pow(n - d, 2));
};
e.getIntersectPos = function(e, t) {
if (2 == e.length && 2 == t.length && cc.Intersection.lineLine(e[0], e[1], t[0], t[1])) {
var o = cc.v2(), n = e[0], i = e[1], r = t[0], a = t[1];
if (n.x == i.x) {
if (r.x == a.x) return;
o.x = n.x;
o.y = r.y + (n.x - r.x) / (a.x - r.x) * (a.y - r.y);
} else if (r.x == a.x) {
o.x = r.x;
o.y = n.y + (r.x - n.x) / (i.x - n.x) * (i.y - n.y);
} else {
var c = (n.y - i.y) / (n.x - i.x), s = (r.y - a.y) / (r.x - a.x);
if (c == s) return;
var l = (n.x * i.y - n.y * i.x) / (n.x - i.x), u = (r.x * a.y - r.y * a.x) / (r.x - a.x);
o.x = (u - l) / (c - s);
o.y = c * o.x + l;
}
return o;
}
};
return e;
}();
o.TG_LMSJ_Util = n;
cc._RF.pop();
}, {} ],
TG_LMSJ_WallBuild: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "30874DKWUJCXZXgXmB6YnXQ", "TG_LMSJ_WallBuild");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.showSprite = !0;
return t;
}
t.prototype.buildByNode = function(e) {
if (e) {
this.node.x = e.x;
this.node.y = e.y;
this.node.angle = e.angle;
this.node.width = e.width;
this.node.height = e.height;
this.node.scaleX = e.scaleX;
this.node.scaleY = e.scaleY;
this.node.getComponent(cc.Sprite).enabled = e.showSprite;
var t = this.node.getComponent(cc.BoxCollider);
if (t) {
t.size.width = e.width - 4;
t.size.height = e.height - 4;
}
var o = this.node.getComponent(cc.PhysicsBoxCollider);
if (o) {
o.size.width = e.width;
o.size.height = e.height;
}
}
};
t.prototype.exportData = function() {
return {
x: this.node.x,
y: this.node.y,
scaleX: this.node.scaleX,
scaleY: this.node.scaleY,
angle: this.node.angle,
width: this.node.width,
height: this.node.height,
name: this.node.name,
showSprite: this.showSprite
};
};
r([ s({
tooltip: "是否显示sprite"
}) ], t.prototype, "showSprite", void 0);
return r([ c ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
TG_LMSJ_Wall: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fbe67FfopZBtb0oOPkFRapW", "TG_LMSJ_Wall");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return r([ c ], t);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
oppoAd: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8874a3QMXhN1IXSjY4I3+6N", "oppoAd");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.OppoAd_Ctr = void 0;
var a = cc._decorator, c = a.ccclass, s = (a.property, function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
l.ins.init();
};
return r([ c ], t);
}(cc.Component));
o.default = s;
var l = function() {
function e() {
this.adConfig = [ "video", "video", "video", "video" ];
this.currentAdIndex = 0;
this.videoAd = null;
this.customAd = null;
this.videoAdCallBack = null;
this.autoVideoAdNum = 0;
}
Object.defineProperty(e, "ins", {
get: function() {
e._ins || (e._ins = new e());
return e._ins;
},
enumerable: !1,
configurable: !0
});
e.prototype.init = function() {
if (!e.isOver) {
e.isOver = !0;
if (cc.sys.platform == cc.sys.OPPO_GAME) {
var t = window.isADUser, o = qg.getEnterOptionsSync();
if (o.query && o.query.isAduser) {
t = 1;
Userdefault.setDataForKey("lyOPPO_isAduser", 1);
}
1 == Userdefault.getIntForKey("lyOPPO_isAduser", 0) && (t = 1);
if (t) {
console.log("开始播放广告序列", window.oppoAdConfig);
window.oppoAdConfig && window.oppoAdConfig.length > 0 && this.setAdConfig(window.oppoAdConfig);
this.createCustomAd();
this.playAdSequence();
}
}
}
};
e.prototype.setAdConfig = function(e) {
this.adConfig = e;
this.currentAdIndex = 0;
this.autoVideoAdNum = 0;
};
e.prototype.playAdSequence = function() {
var e = this;
if (this.currentAdIndex >= this.adConfig.length) console.log("广告序列播放完成"); else {
var t = this.adConfig[this.currentAdIndex];
console.log("播放第" + (this.currentAdIndex + 1) + "个广告，类型: " + t);
switch (t) {
case "video":
this.showVideoAd(function() {
e.onAdComplete();
});
break;

case "spot":
this.showCustomAd();
break;

default:
console.log("未知广告类型: " + t + "，跳过");
this.onAdComplete();
}
}
};
e.prototype.onAdComplete = function() {
this.currentAdIndex++;
this.playAdSequence();
};
e.prototype.restartAdSequence = function() {
this.currentAdIndex = 0;
this.autoVideoAdNum = 0;
this.playAdSequence();
};
e.prototype.createVideoAd = function() {
var e = this;
console.log("createVideoAd------", window.oppoVideoId[0]);
if (window.oppoVideoId[0]) try {
console.log("创建OPPO激励视频广告");
this.videoAd = window.qg.createRewardedVideoAd({
adUnitId: window.oppoVideoId[0]
});
this.videoAd.load();
this.videoAd.onLoad(function() {
e.videoAd.show();
});
this.videoAd.onError(function(t) {
console.log("onError:" + JSON.stringify(t));
e.videoAdCallBack && e.videoAdCallBack(1);
});
this.videoAd.onClose(function() {
console.log("视频广告关闭");
e.autoVideoAdNum++;
e.videoAdCallBack && e.videoAdCallBack(0);
});
} catch (e) {
this.videoAdCallBack && this.videoAdCallBack(1);
console.log("oppoRewardVideoAd error", e);
} else console.log("视频广告参数没有配置");
};
e.prototype.showVideoAd = function(e) {
console.log("showVideoAd------");
this.videoAdCallBack = e;
if (null != this.videoAd) {
console.log("oppoRewardVideoAd show");
this.videoAd.load();
} else {
console.log("创建新的视频广告");
this.createVideoAd();
}
};
e.prototype.createCustomAd = function(e) {
var t = this;
void 0 === e && (e = !1);
console.log("createCustomAd------666", window.lieyou_oppotemplate[0]);
if (window.lieyou_oppotemplate[0]) {
var o = qg.getSystemInfoSync(), n = 1 * o.screenWidth, i = n / 256 * 218;
o.screenWidth > o.screenHeight && (i = (n = 1 * o.screenHeight) / 256 * 218);
n *= .8;
i *= .8;
var r = {
top: .5 * (o.screenHeight - i),
left: .5 * (o.screenWidth - n),
width: n
};
this.customAd = window.qg.createCustomAd({
adUnitId: window.lieyou_oppotemplate[0],
style: r
});
console.log("createCustomAd------7777");
this.customAd.onLoad(function() {
console.log("原生模板广告加载成功");
});
this.customAd.onError(function(e) {
console.log("原生广告错误：", JSON.stringify(e));
});
this.customAd.onHide(function() {
console.log("原生模板广告关闭");
t.onAdComplete();
});
} else console.log("原生模板广告参数没有配置");
};
e.prototype.showCustomAd = function() {
var e = this;
if (this.customAd) {
console.log("showCustomAd------");
this.customAd.show().then(function() {
console.log("原生广告展示成功");
}).catch(function(t) {
console.log("原生广告展示失败 " + JSON.stringify(t));
e.onAdComplete();
});
} else this.createCustomAd(!0);
};
e.prototype.hideCustomAd = function() {
this.customAd && this.customAd.hide();
};
e.prototype.destroyCustomAd = function() {
if (this.customAd) {
this.customAd.destroy();
this.customAd = null;
}
};
e.isOver = !1;
return e;
}();
o.OppoAd_Ctr = l;
cc._RF.pop();
}, {} ]
}, {}, [ "G1_BP_AniTween", "G1_BP_ButtonScale", "G1_BP_Common", "G1_BP_GameConst", "G1_BP_ServerTime", "G1_BP_BasePlatform", "G1_BP_PlatformButton", "G1_BP_PlatformCommon", "G1_BP_TTPlatform", "G1_BP_SideBar", "TG_DWLYF_CommonFunc", "TG_DWLYF_InitRemoteData", "TG_DWLYF_UIVideoTagOnline", "G1_BP_FitScale", "G1_BP_Ks_AD", "G1_BP_Swcy", "G1_BP_commonFun", "TG_LMSJ_CateLevelBuilder", "TG_LMSJ_CateLevelConfig", "TG_LMSJ_CcConvert", "TG_LMSJ_GameMap", "TG_LMSJ_ArrowGuide", "TG_LMSJ_ArrowGuideBuild", "TG_LMSJ_Bubble", "TG_LMSJ_Coin", "TG_LMSJ_CoinBuild", "TG_LMSJ_FireBuild", "TG_LMSJ_Hole", "TG_LMSJ_HoleBuild", "TG_LMSJ_Mount", "TG_LMSJ_MountBuild", "TG_LMSJ_PropGuideBuild", "TG_LMSJ_Role", "TG_LMSJ_RoleBuild", "TG_LMSJ_Stone", "TG_LMSJ_StoneBuild", "TG_LMSJ_Switch", "TG_LMSJ_SwitchBuild", "TG_LMSJ_SwitchWall", "TG_LMSJ_SwitchWallBuild", "TG_LMSJ_Thorn", "TG_LMSJ_ThornBuild", "TG_LMSJ_Toilet", "TG_LMSJ_ToiletBuild", "TG_LMSJ_Transfer", "TG_LMSJ_TransferBuild", "TG_LMSJ_Wall", "TG_LMSJ_WallBuild", "TG_LMSJ_Arrow", "TG_LMSJ_Enum", "TG_LMSJ_Game", "TG_LMSJ_GameConfig", "TG_LMSJ_GameSub", "TG_LMSJ_GameUI", "TG_LMSJ_GuideManager", "TG_LMSJ_MapTouchDraw", "TG_LMSJ_PencilLine", "TG_LMSJ_PropMask", "TG_LMSJ_PropText", "TG_LMSJ_Util", "TG_LMSJ_GameFailPop", "TG_LMSJ_GameWinPop", "TG_LMSJ_CoinAniNodes", "TG_LMSJ_Hall", "TG_LMSJ_HallSetPop", "TG_LMSJ_MyPool", "TG_LMSJ_PopBase", "TG_LMSJ_RewardPop", "TG_LMSJ_ShopItem", "TG_LMSJ_ShopUI", "TG_LMSJ_AdvertisingManager", "TG_LMSJ_Common", "TG_LMSJ_Config", "TG_LMSJ_Control", "TG_LMSJ_Loading", "TG_LMSJ_LocalData", "TG_LMSJ_SpriteLanguageMgr", "TG_LMSJ_Sub", "oppoAd" ]);