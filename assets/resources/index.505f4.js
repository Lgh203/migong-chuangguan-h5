window.__require = function e(t, o, i) {
function n(s, r) {
if (!o[s]) {
if (!t[s]) {
var c = s.split("/");
c = c[c.length - 1];
if (!t[c]) {
var l = "function" == typeof __require && __require;
if (!r && l) return l(c, !0);
if (a) return a(c, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = c;
}
var d = o[s] = {
exports: {}
};
t[s][0].call(d.exports, function(e) {
return n(t[s][1][e] || e);
}, d, d.exports, e, t, o, i);
}
return o[s].exports;
}
for (var a = "function" == typeof __require && __require, s = 0; s < i.length; s++) n(i[s]);
return n;
}({
Alert: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3ebe0ldbVZLW4wVRO0iLbkr", "Alert");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), a = this && this.__decorate || function(e, t, o, i) {
var n, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, o, i); else for (var r = e.length - 1; r >= 0; r--) (n = e[r]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, o, s) : n(t, o)) || s);
return a > 3 && s && Object.defineProperty(t, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = e("../../../../config/PPSDK_Config"), r = e("../../../defines/Macros"), c = e("../fit/FitScale"), l = cc._decorator, d = l.ccclass, u = l.property, h = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bg = null;
t.window = null;
t.labelNode = null;
t.titleLabel = null;
t.contentLabel = null;
t.buttonNode = null;
t.cancelButton = null;
t.confirmButton = null;
t.confirmLabel = null;
t.cancelLabel = null;
return t;
}
t.prototype.onLoad = function() {
this.node.addComponent(c.default).setFit(!0, !1);
};
t.prototype.show = function(e) {
var t = this;
this.node.active = !0;
"" === e.title && (this.titleLabel.node.active = !1);
this.cancelButton.active = e.showCancel;
this.titleLabel.string = e.title;
this.contentLabel.string = e.content;
this.cancelLabel.string = e.cancelText;
this.confirmLabel.string = e.confirmText;
this.bg.opacity = 0;
cc.tween(this.bg).to(.2, {
opacity: 100
}).start();
this.window.opacity = 0;
this.scheduleOnce(function() {
t.buttonNode.width = Math.max(t.labelNode.width, 500);
t.window.opacity = 255;
}, .05);
this.cancelButton.on("touchend", function() {
e.cancel && e.cancel();
}, this);
this.confirmButton.on("touchend", function() {
e.confirm && e.confirm();
}, this);
};
t.prototype.close = function() {
this.node.active = !1;
return Promise.resolve();
};
a([ u(cc.Node) ], t.prototype, "bg", void 0);
a([ u(cc.Node) ], t.prototype, "window", void 0);
a([ u(cc.Node) ], t.prototype, "labelNode", void 0);
a([ u(cc.Label) ], t.prototype, "titleLabel", void 0);
a([ u(cc.Label) ], t.prototype, "contentLabel", void 0);
a([ u(cc.Node) ], t.prototype, "buttonNode", void 0);
a([ u(cc.Node) ], t.prototype, "cancelButton", void 0);
a([ u(cc.Node) ], t.prototype, "confirmButton", void 0);
a([ u(cc.Label) ], t.prototype, "confirmLabel", void 0);
a([ u(cc.Label) ], t.prototype, "cancelLabel", void 0);
return a([ d ], t);
}(cc.Component), g = function() {
function e() {
this.logTag = "[Alert]";
this._prefab = null;
this._queue = [];
this.curPanel = null;
}
e.Instance = function() {
return this._instance || (this._instance = new e());
};
e.prototype.loadPrefab = function() {
var e = this;
return new Promise(function(t, o) {
var i = "PPSDK/framework/common/components/alert/modalNode";
Manager.cacheManager.getCacheByAsync(i, cc.Prefab, r.Macro.BUNDLE_RESOURCES).then(function(n) {
if (n) {
Manager.assetManager.addPersistAsset(i, n, r.Macro.BUNDLE_RESOURCES);
e.setPrefab(n, h);
t(n);
} else {
Log.e(e.logTag, "Alert 预制体加载失败:" + i);
o();
}
});
});
};
e.prototype.setPrefab = function(e, t) {
if (this._getPrefabInfo(e).getComponent(t)) {
this._type = t;
this._prefab = e;
} else Log.e(this.logTag, "未挂载" + t.prototype.constructor.name + ",将无法使用，请排查");
};
e.prototype.init = function() {
return s.Config.USE_SYS_ALERT ? this.loadPrefab() : Promise.resolve();
};
e.prototype.show = function(e) {
if (e.tag && e.isRepeat && this.isRepeat(e.tag)) {
Log.w(this.logTag, "弹出框已经存在 config : " + e.tag);
return !1;
}
this._queue.push(e);
this._show(e);
return !0;
};
e.prototype.isCurrentShow = function(e) {
return !(!this.curPanel || this.curPanel.config.tag != e);
};
e.prototype.currentShow = function(e) {
if (this.curPanel) {
var t = this.curPanel.config;
if (!e) return t;
if (t.tag == e) return t;
}
return null;
};
e.prototype.isRepeat = function(e) {
if (this.curPanel) {
if (this.curPanel.config.config.tag == e) {
Log.w(this.logTag, "重复的弹出框 config ; " + e);
return !0;
}
} else for (var t = 0; t < this._queue.length; t++) if (this._queue[t].tag == e) {
Log.w(this.logTag, "重复的弹出框 config ; " + e);
return !0;
}
return !1;
};
e.prototype.close = function(e) {
if (e) {
for (var t = this._queue.length; t--; ) this._queue[t].tag == e && this._queue.splice(t, 1);
this.curPanel && this.curPanel.config.tag == e && this.finishAlert();
} else this.finishAlert();
};
e.prototype.closeAll = function() {
this._queue = [];
this.finishAlert();
};
e.prototype.finishAlert = function() {
if (this.curPanel) {
var e = this.curPanel.getComponent(this._type), t = e.close();
t instanceof Promise ? t.then(function() {
Manager.nodePoolManager.getPool("sys_alert").put(e.node);
}) : Manager.nodePoolManager.getPool("sys_alert").put(e.node);
this.curPanel = null;
}
var o = this._queue.shift();
if (0 != this._queue.length) {
this._show(this._queue[0]);
return this._queue[0];
}
return o;
};
e.prototype._show = function(e) {
if (this._prefab) {
if (!this.curPanel) {
var t = Manager.nodePoolManager.getPool("sys_alert", !0, this._prefab).get(), o = t.getComponent(this._type);
Manager.uiManager.addView(t, 50);
o.show(this._getConfig(e));
t.config = e;
this.curPanel = t;
}
} else Log.e(this.logTag, "未加载系统Alert组件,tag:", e.tag);
};
e.prototype._getConfig = function(e) {
var t = this, o = Manager.utils.shallowCopy(e);
"undefined" == typeof o.showCancel && (o.showCancel = !0);
o.confirmText || (o.confirmText = Manager.languageManager.getLabel("framework", "确定"));
o.cancelText || (o.cancelText = Manager.languageManager.getLabel("framework", "取消"));
"undefined" == typeof o.isRepeat && (o.isRepeat = !0);
var i = o.confirm;
o.confirm = function() {
i && i();
t.close(o.tag);
};
var n = o.cancel;
o.cancel = function() {
n && n();
t.close(o.tag);
};
return o;
};
e.prototype._getPrefabInfo = function(e) {
return e instanceof cc.Prefab ? e.data : e;
};
e._instance = null;
return e;
}();
o.default = g;
cc._RF.pop();
}, {
"../../../../config/PPSDK_Config": "PPSDK_Config",
"../../../defines/Macros": "Macros",
"../fit/FitScale": "FitScale"
} ],
Application: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "75071CKeXtNEp8Mabr2h8at", "Application");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o._Manager = void 0;
var a = e("../config/PPSDK_Config"), s = e("./common/components/alert/Alert"), r = e("./common/components/loading/Loading"), c = e("./common/components/tips/Tips"), l = e("./common/components/uiLoading/UILoading"), d = e("./common/sdkHelper/adapter/SDKAdapter"), u = e("./common/sdkHelper/SDKHelper"), h = e("./common/subGame/SubGame"), g = e("./core/Framework"), p = e("./core/storage/sys/SettingStorage"), f = e("./defines/Macros"), m = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.logTag = "[Application]: ";
t.version = "2022.5.11";
t._enterBackgroundTime = 0;
return t;
}
Object.defineProperty(t.prototype, "isLazyRelease", {
get: function() {
return !0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "tips", {
get: function() {
return y(c.default);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "loading", {
get: function() {
return y(r.default);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "alert", {
get: function() {
return y(s.default);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "uiLoading", {
get: function() {
return y(l.default);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "settingStorage", {
get: function() {
return this.localManager.getStorageClass(p.default);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "sdkHelper", {
get: function() {
return y(u.default);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "sdkAdapter", {
get: function() {
return y(d.SDKAdapter);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "subGame", {
get: function() {
return h.SubGame;
},
enumerable: !1,
configurable: !0
});
t.prototype.enter = function() {
e.prototype.enter.call(this);
this.updateManager.hotUpdateUrl = a.Config.HOT_UPDATE_URL;
this.updateManager.hotUpdateUrlVersion = a.Config.HOT_UPDATE_URL_VERSION;
this.updateManager.mainBundles = a.Config.MIAN_PACK_INCLUDE;
this.updateManager.isSkipCheckUpdate = a.Config.isSkipCheckUpdate;
this.localManager.register("framework");
this.languageManager.registerLanguage("framework", f.Macro.BUNDLE_RESOURCES, "PPSDK/framework/common");
};
t.prototype.init = function(e) {
void 0 === e && (e = {});
e.language && this.languageManager.setLanguage(e.language);
Promise.all([ this.loading.init(), this.tips.init(), this.alert.init() ]).then(function() {
e.onCompleted && e.onCompleted();
});
};
t.prototype.on = function(e, t, o, i) {
void 0 === e && (e = null);
void 0 === t && (t = null);
void 0 === o && (o = null);
void 0 === i && (i = !1);
this.eventCenter.on(e, t, o, i);
};
t.prototype.off = function() {
for (var e, t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
(e = this.eventCenter).off.apply(e, t);
};
t.prototype.emit = function(e, t, o) {
void 0 === o && (o = !1);
this.eventCenter.emit(e, t, o);
};
Object.defineProperty(t.prototype, "musicState", {
get: function() {
return this.settingStorage.musicState;
},
set: function(e) {
this.settingStorage.musicState = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "sfxState", {
get: function() {
return this.settingStorage.sfxState;
},
set: function(e) {
this.settingStorage.sfxState = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "vibrateState", {
get: function() {
return this.settingStorage.vibrateState;
},
set: function(e) {
this.settingStorage.vibrateState = e;
},
enumerable: !1,
configurable: !0
});
t.prototype.playMusic = function(e, t, o) {
void 0 === t && (t = f.Macro.BUNDLE_RESOURCES);
void 0 === o && (o = {});
return this.audioManager.playMusic(e, t, o);
};
t.prototype.playSfx = function(e, t, o) {
void 0 === o && (o = {});
return this.audioManager.playSfx(e, t, o);
};
t.prototype.stopMusic = function() {
this.audioManager.stopMusic();
};
t.prototype.vibrate = function(e) {
void 0 === e && (e = !1);
this.sdkHelper.vibrate(e);
};
t.prototype.showLoading = function(e) {
void 0 === e && (e = {});
this.loading.show(e);
};
t.prototype.hideLoading = function() {
this.loading.hide();
};
t.prototype.showToast = function(e) {
this.tips.show(e);
};
t.prototype.showAlert = function(e) {
this.alert.show(e);
};
t.prototype.onEnterBackground = function() {
this._enterBackgroundTime = Date.now();
Log.d("[MainController]", "onEnterBackground " + this._enterBackgroundTime);
this.eventCenter.emit(f.Macro.ENTER_BACKGROUND, this._enterBackgroundTime);
};
t.prototype.onEnterForgeground = function() {
var e = Date.now(), t = e - this._enterBackgroundTime;
Log.d("[MainController]", "onEnterForgeground " + e + " background total time : " + t);
this.eventCenter.emit(f.Macro.ENTER_FORGEGROUND, t);
};
return t;
}(g.Framework);
o._Manager = m;
function y(e) {
return e.Instance();
}
window.getSingleton = y;
var _ = new m();
_.logger.level = a.Config.LogLV;
window.Manager = window.PPSDK = _;
_.enter();
cc._RF.pop();
}, {
"../config/PPSDK_Config": "PPSDK_Config",
"./common/components/alert/Alert": "Alert",
"./common/components/loading/Loading": "Loading",
"./common/components/tips/Tips": "Tips",
"./common/components/uiLoading/UILoading": "UILoading",
"./common/sdkHelper/SDKHelper": "SDKHelper",
"./common/sdkHelper/adapter/SDKAdapter": "SDKAdapter",
"./common/subGame/SubGame": "SubGame",
"./core/Framework": "Framework",
"./core/storage/sys/SettingStorage": "SettingStorage",
"./defines/Macros": "Macros"
} ],
ArrayExtemtion: [ function(e, t) {
"use strict";
cc._RF.push(t, "d8beeWvHQxFvICw9KBLq39w", "ArrayExtemtion");
Object.defineProperties(Array.prototype, {
clear: {
writable: !1,
enumerable: !1,
configurable: !0,
value: function() {
this.splice(0, this.length);
}
},
clone: {
writable: !1,
enumerable: !1,
configurable: !0,
value: function() {
return this.slice();
}
},
getRandomOne: {
writable: !1,
enumerable: !1,
configurable: !0,
value: function() {
return this[Math.getRandomInt(0, this.length)];
}
},
getRandomCount: {
writable: !1,
enumerable: !1,
configurable: !0,
value: function(e) {
if (e > this.length) {
console.log("超出数组长度");
return this;
}
for (var t, o, i = this.slice(0), n = this.length, a = n - e; n-- > a; ) {
t = i[o = Math.floor((n + 1) * Math.random())];
i[o] = i[n];
i[n] = t;
}
return i.slice(a);
}
},
getRandomCountDiff: {
writable: !1,
enumerable: !1,
configurable: !0,
value: function(e) {
for (var t = this.slice(0), o = [], i = t.length, n = 0; n < i; n++) {
var a = Math.floor(Math.random() * t.length);
if (o.indexOf(t[a]) < 0) {
o.push(t[a]);
if (o.length === e) return o;
}
t.splice(a, 1);
}
console.log("未找到足够数量的元素");
return o;
}
},
getRandomExcept: {
writable: !1,
enumerable: !1,
configurable: !0,
value: function(e, t) {
void 0 === t && (t = 1);
Array.isArray(e) || (e = [ e ]);
var o = this.filter(function(t) {
return e.indexOf(t) < 0;
});
return 1 === t ? o.getRandomOne() : o.getRandomCount(t);
}
},
getRanomExceptIdx: {
writable: !1,
enumerable: !1,
configurable: !0,
value: function(e, t) {
void 0 === t && (t = 1);
Array.isArray(exceptId) || (exceptId = [ exceptId ]);
var o = this.filter(function(e, t) {
return exceptId.indexOf(t) < 0;
});
return 1 === t ? o.getRandomOne() : o.getRandomCount(t);
}
},
addRange: {
writable: !1,
enumerable: !1,
configurable: !0,
value: function() {
return this.concat.apply(this, arguments);
}
},
insert: {
writable: !1,
enumerable: !1,
configurable: !0,
value: function(e, t) {
this.splice(e, 0, t);
}
},
removeAt: {
writable: !1,
enumerable: !1,
configurable: !0,
value: function(e) {
return this.splice(e, 1);
}
},
remove: {
writable: !1,
enumerable: !1,
configurable: !0,
value: function() {
for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
for (var i = 0, n = t; i < n.length; i++) {
var a = n[i], s = this.indexOf(a);
s > -1 && this.removeAt(s);
}
}
},
removeRange: {
writable: !1,
enumerable: !1,
configurable: !0,
value: function(e, t) {
return this.splice(e, t);
}
},
removeByMatch: {
writable: !1,
enumerable: !1,
configurable: !0,
value: function() {
for (var e = this.filter(match), t = 0; t < e.length; t++) this.remove(e[t]);
return e;
}
},
contains: {
writable: !1,
enumerable: !1,
configurable: !0,
value: function(e) {
return this.indexOf(e) > -1;
}
},
distinct: {
writable: !1,
enumerable: !1,
configurable: !0,
value: function() {
return [].concat(new Set(this));
}
},
sum: {
writable: !1,
enumerable: !1,
configurable: !0,
value: function() {
for (var e = 0, t = 0; t < this.length; t++) "number" == typeof this[t] ? e += this[t] : console.log("Tips: [" + this[t] + "] isn\\'t Number!");
return e;
}
},
upset: {
writable: !1,
enumerable: !1,
configurable: !0,
value: function() {
for (var e = this.length, t = 0; t < e - 1; t++) {
var o = Math.floor(Math.random() * (e - t)), i = this[o];
this[o] = this[e - t - 1];
this[e - t - 1] = i;
}
return this;
}
},
getMax: {
writable: !1,
enumerable: !1,
configurable: !0,
value: function() {
return Math.max.apply(null, this);
}
},
getMin: {
writable: !1,
enumerable: !1,
configurable: !0,
value: function() {
return Math.min.apply(null, this);
}
}
});
Array.getUnion = function() {
for (var e = [], t = arguments.length, o = new Array(t), i = 0; i < t; i++) o[i] = arguments[i];
o.forEach(function(t) {
e = [].concat(e, t);
});
return [].concat(new Set(e));
};
Array.getIntersect = function() {
for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
return t.reduce(function(e, t) {
return e.filter(function(e) {
return t.indexOf(e) >= 0;
});
});
};
Array.shuffle = function(e) {
for (var t = e.slice(), o = t.length, i = 0; i < o - 1; i++) {
var n = Math.floor(Math.random() * (o - i)), a = t[n];
t[n] = t[o - i - 1];
t[o - i - 1] = a;
}
return t;
};
cc._RF.pop();
}, {} ],
AssetManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d0139ytj5BFm6iwmwqYK0Te", "AssetManager");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.AssetManager = void 0;
var i = e("../../defines/Macros"), n = e("./Resource"), a = function() {
function e() {
this._logTag = "[RemoteLoader] ";
}
e.Instance = function() {
return this._instance || (this._instance = new e());
};
e.prototype.loadImage = function(e, t) {
void 0 === t && (t = !1);
var o = this;
return new Promise(function(i) {
if (null == e || null == e || e.length <= 0) i(null); else {
if (t) {
var n = Manager.cacheManager.remoteCaches.getSpriteFrame(e);
if (n && n.data) {
i(n.data);
return;
}
Manager.cacheManager.remoteCaches.remove(e);
} else Manager.cacheManager.remoteCaches.remove(e);
o._loadRemoteRes(e, cc.Texture2D, t).then(function(t) {
var o = Manager.cacheManager.remoteCaches.get(e);
if (t && o) {
o.data = t;
o.data.name = e;
var n = Manager.cacheManager.remoteCaches.setSpriteFrame(e, o.data);
i(n);
} else i(null);
});
}
});
};
e.prototype.loadSkeleton = function(e, t, o) {
var a = this;
return new Promise(function(s) {
if (e && t) {
var r = e + "/" + t, c = e + "/" + t + ".atlas", l = e + "/" + t + ".png", d = e + "/" + t + ".json", u = Manager.releaseManager.getRemote(r);
if (u) {
var h = Manager.cacheManager.remoteCaches.get(r);
if (h) {
h.isLoaded = !0;
h.data = u;
h.info.data = u;
h.info.url = r;
s(h.data);
h.doFinish(h.data);
} else {
(h = new n.Resource.CacheData()).info.resourceType = n.Resource.Type.Remote;
h.info.type = sp.SkeletonData;
h.info.bundle = i.Macro.BUNDLE_REMOTE;
h.isLoaded = !0;
h.data = u;
h.info.data = u;
h.info.url = r;
Manager.cacheManager.remoteCaches.set(r, h);
s(h.data);
h.doFinish(h.data);
}
return;
}
var g = Manager.cacheManager.remoteCaches.get(r);
if (g) g.isLoaded ? s(g.data) : g.finishCb.push(s); else {
(g = new n.Resource.CacheData()).info.resourceType = n.Resource.Type.Remote;
g.info.type = sp.SkeletonData;
g.info.bundle = i.Macro.BUNDLE_REMOTE;
Manager.cacheManager.remoteCaches.set(r, g);
a._loadRemoteRes(l, cc.Texture2D, o).then(function(e) {
if (e) a._loadRemoteRes(d, cc.JsonAsset, o).then(function(i) {
if (i) a._loadRemoteRes(c, cc.JsonAsset, o).then(function(o) {
if (o) {
var n = new sp.SkeletonData();
n.skeletonJson = i.json;
n.atlasText = o.text;
n.textures = [ e ];
var a = t + ".png";
n.textureNames = [ a ];
g.info.url = r;
n.name = r;
g.data = n;
g.isLoaded = !0;
s(g.data);
g.doFinish(g.data);
} else {
s(null);
g.doFinish(null);
Manager.cacheManager.remoteCaches.remove(r);
}
}); else {
s(null);
g.doFinish(null);
Manager.cacheManager.remoteCaches.remove(r);
}
}); else {
s(null);
g.doFinish(null);
Manager.cacheManager.remoteCaches.remove(r);
}
});
}
} else s(null);
});
};
e.prototype._loadRemoteRes = function(e, t) {
return new Promise(function(o) {
var i = Manager.cacheManager.remoteCaches.get(e);
if (i) i.isLoaded ? o(i.data) : i.finishCb.push(o); else {
(i = new n.Resource.CacheData()).info.resourceType = n.Resource.Type.Remote;
i.info.type = t;
Manager.cacheManager.remoteCaches.set(e, i);
var a = Manager.releaseManager.getRemote(e);
if (a) {
i.isLoaded = !0;
i.data = a;
i.data.addRef();
i.doFinish(a);
o(i.data);
return;
}
cc.assetManager.loadRemote(e, function(e, t) {
if (i) {
i.isLoaded = !0;
if (t) {
i.data = t;
i.data.addRef();
}
i.doFinish(t);
o(i.data);
}
});
}
});
};
e.prototype.update = function() {};
e._instance = null;
return e;
}(), s = function() {
function e() {
this.logTag = "[AssetManager]: ";
this._remote = new a();
}
e.Instance = function() {
return this._instance || (this._instance = new e());
};
Object.defineProperty(e.prototype, "remote", {
get: function() {
return this._remote;
},
enumerable: !1,
configurable: !0
});
e.prototype.getBundle = function(e) {
return Manager.bundleManager.getBundle(e);
};
e.prototype.load = function(e) {
var t = e.bundle, o = e.path, i = e.type, a = e.onProgress, s = e.onComplete, r = e.isLazyRelease, c = Manager.cacheManager.get(t, o);
if (c) {
c.isLoaded ? s(c) : c.finishCb.push(s);
c.status = n.Resource.CacheStatus.NONE;
} else {
(c = new n.Resource.CacheData()).info.url = o;
c.info.type = i;
c.info.bundle = t;
c.info.isLazyRelease = r;
Manager.cacheManager.set(t, o, c);
console.time("加载资源 : " + c.info.url);
var l = Manager.releaseManager.get(t, o);
if (l) {
this._onLoadComplete(c, s, null, l);
return;
}
var d = this.getBundle(t);
if (!d) {
var u = new Error(this.logTag + " " + t + " 没有加载，请先加载");
this._onLoadComplete(c, s, u, null);
return;
}
(l = d.get(o, i)) ? this._onLoadComplete(c, s, null, l) : a ? d.load(o, i, a, this._onLoadComplete.bind(this, c, s)) : d.load(o, i, this._onLoadComplete.bind(this, c, s));
}
};
e.prototype._onLoadComplete = function(e, t, o, i) {
e.isLoaded = !0;
var a = e;
if (o) {
Log.e(this.logTag + "加载资源失败:" + e.info.url + " 原因:" + (o.message ? o.message : "未知"));
e.data = null;
a.data = null;
Manager.cacheManager.remove(e.info.bundle, e.info.url);
t(e);
} else {
e.data = i;
a.data = i;
t(e);
}
e.doFinish(a);
e.doGet(a.data);
if (e.status == n.Resource.CacheStatus.WAITTING_FOR_RELEASE && e.data) {
e.status = n.Resource.CacheStatus.NONE;
var s = new n.Resource.Info();
s.url = e.info.url;
s.type = e.info.type;
s.data = e.data;
s.bundle = e.info.bundle;
s.isLazyRelease = e.info.isLazyRelease;
this.releaseAsset(s);
}
console.timeEnd("加载资源 : " + e.info.url);
};
e.prototype.loadDir = function(e) {
var t = e.bundle, o = e.path, i = e.type, a = e.onProgress, s = e.onComplete, r = e.isLazyRelease, c = Manager.cacheManager.get(t, o);
if (c) {
c.isLoaded ? s(c) : c.finishCb.push(s);
c.status = n.Resource.CacheStatus.NONE;
} else {
(c = new n.Resource.CacheData()).info.url = o;
c.info.type = i;
c.info.bundle = t;
c.info.isLazyRelease = r;
Manager.cacheManager.set(t, o, c);
console.time("加载资源 : " + c.info.url);
var l = Manager.releaseManager.get(t, o);
if (l) {
this._onLoadComplete(c, s, null, l);
return;
}
var d = this.getBundle(t);
if (!d) {
var u = new Error(this.logTag + " " + t + " 没有加载，请先加载");
this._onLoadComplete(c, s, u, null);
return;
}
a ? d.loadDir(o, i, a, this._onLoadComplete.bind(this, c, s)) : d.loadDir(o, i, this._onLoadComplete.bind(this, c, s));
}
};
e.prototype.releaseAsset = function(e) {
if (e && e.bundle) {
var t = Manager.cacheManager.get(e.bundle, e.url, !1);
if (!t) return;
if (t.isInvalid) return;
if (t.isLoaded) {
if (t.info.retain) return;
Manager.cacheManager.removeWithInfo(e) && Manager.releaseManager.release(e);
} else t.status = n.Resource.CacheStatus.WAITTING_FOR_RELEASE;
}
};
e.prototype.retainAsset = function(e) {
if (e) {
var t = Manager.cacheManager.get(e.bundle, e.url);
if (t) {
t.info.retain || (t.info.retain = e.retain);
if (Array.isArray(t.data)) for (var o = 0; o < t.data.length; o++) t.data[o] && t.data[o].addRef(); else t.data && t.data.addRef();
}
}
};
e.prototype.addPersistAsset = function(e, t, o) {
var i = new n.Resource.Info();
i.url = e;
i.data = t;
i.bundle = o;
i.retain = !0;
this.retainAsset(i);
};
e._instance = null;
return e;
}();
o.AssetManager = s;
cc._RF.pop();
}, {
"../../defines/Macros": "Macros",
"./Resource": "Resource"
} ],
AudioManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2fabafAIqpChKBq5vkYMsID", "AudioManager");
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../../../config/PPSDK_Config"), n = e("../../defines/Macros"), a = function() {
function e() {
var e = this;
this.logTag = "[AudioManager]:";
this.musicOption = {};
Manager.eventCenter.on(n.Macro.CHANGE_MUSIC_EVENT, function(t) {
t ? e.bgmName && e.bgmBundle && e.playMusic(e.bgmName, e.bgmBundle, e.musicOption) : e.stopMusic();
}, this);
}
e.Instance = function() {
return this._instance || (this._instance = new e());
};
e.prototype.playMusic = function(e, t, o) {
var i = this;
void 0 === t && (t = n.Macro.BUNDLE_RESOURCES);
return new Promise(function(n) {
i.bgmName = e;
i.bgmBundle = t;
i.musicOption = o;
Manager.settingStorage.musicState && i.getAudio(e, t).then(function(t) {
if (t) if (o.force || t !== i.bgmClip) {
i.bgmClip = t;
var a = !0;
0 == o.loop && (a = !1);
var s = 1;
"number" == typeof o.volume && (s = o.volume);
var r = cc.audioEngine.playMusic(t, a);
i.bgmId = r;
cc.audioEngine.setMusicVolume(s);
n({
url: e,
id: r,
success: !0
});
} else n({
url: e,
id: i.bgmId,
success: !0
}); else n({
url: e,
success: !1
});
}).catch(function() {
n({
url: e,
success: !1
});
});
});
};
e.prototype.playSfx = function(e, t, o) {
var i = this;
void 0 === o && (o = {});
return new Promise(function(n) {
Manager.settingStorage.sfxState && i.getAudio(e, t).then(function(t) {
if (t) {
var i = 1;
"number" == typeof o.volume && (i = o.volume);
var a = cc.audioEngine.play(t, o.loop || !1, i);
n({
url: e,
id: a,
success: !0
});
} else n({
url: e,
success: !1
});
}).catch(function() {
n({
url: e,
success: !1
});
});
});
};
e.prototype.playSfxClip = function(e, t) {
void 0 === t && (t = {});
if (Manager.settingStorage.sfxState) {
var o = 1;
"number" == typeof t.volume && (o = t.volume);
return cc.audioEngine.play(e, t.loop || !1, o);
}
return null;
};
e.prototype.stopMusic = function() {
cc.audioEngine.isMusicPlaying && cc.audioEngine.stopMusic();
this.bgmClip = null;
};
e.prototype.stopSfx = function(e) {
cc.audioEngine.stop(e);
};
e.prototype.pauseMusic = function() {
cc.audioEngine.pauseMusic();
};
e.prototype.resumeMusic = function() {
cc.audioEngine.resumeMusic();
};
e.prototype.clearBGMData = function() {
this.bgmName = null;
this.bgmBundle = null;
this.bgmId = null;
this.musicOption = {};
};
e.prototype.setCutstomButtonSfx = function(e) {
i.Config.buttonSfx = e;
};
e.prototype.getAudio = function(e, t) {
var o = this;
return new Promise(function(i, n) {
if (!cc.assetManager.getBundle(t)) {
Log.e(o.logTag, "bundle 不存在:" + t);
return n();
}
PPSDK.cacheManager.getCacheByAsync(e, cc.AudioClip, t).then(function(e) {
e && i(e);
});
});
};
e._instance = null;
return e;
}();
o.default = a;
cc._RF.pop();
}, {
"../../../config/PPSDK_Config": "PPSDK_Config",
"../../defines/Macros": "Macros"
} ],
BaseAdapter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "65e62l/PW9NRrE8pQVeif1j", "BaseAdapter");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.BaseAdapter = void 0;
var i = e("./ListenNode"), n = function() {
function e() {}
e.prototype.getBasePath = function() {
return "";
};
e.prototype.getFileExist = function() {
return !1;
};
e.prototype.isFile = function() {
return !1;
};
e.prototype.writeFile = function(e) {
e.fail && e.fail();
e.complete && e.complete();
};
e.prototype.deleteFile = function(e) {
e.fail && e.fail();
e.complete && e.complete();
};
e.prototype.readFile = function(e) {
e.fail && e.fail();
e.complete && e.complete();
};
e.prototype.getSaveAbulmEnabled = function() {
return !1;
};
e.prototype.saveToPhotoAlbum = function(e) {
e.fail && e.fail();
e.complete && e.complete();
};
e.prototype.getShareEnabled = function() {
return !1;
};
e.prototype.share = function() {};
e.prototype.addGameClubButton = function() {
return null;
};
e.prototype.addFeedbackButton = function() {
return null;
};
e.prototype.addShortcutButton = function(e) {
e.node && (e.node.active = !1);
e.fail && e.fail({
code: -1,
errMsg: "当前平台暂不支持"
});
};
e.prototype.createAwemeButton = function(e) {
e.node && (e.node.active = !1);
};
e.prototype.addListenNode = function(e, t) {
var o = e.addComponent(i.ListenNode);
t && o.setEvent(t);
return o;
};
return e;
}();
o.BaseAdapter = n;
cc._RF.pop();
}, {
"./ListenNode": "ListenNode"
} ],
BitEncrypt: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1ba2eK9VeFJy6LkD2piLGG4", "BitEncrypt");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.BitEncrypt = void 0;
var i = function() {
function e() {
this.logTag = "[BitEncrypt]:";
this._encryptKey = "EskKbMvzZBILhcTv";
}
Object.defineProperty(e.prototype, "encryptKey", {
get: function() {
return this._encryptKey;
},
set: function(e) {
this._encryptKey = e;
},
enumerable: !1,
configurable: !0
});
e.prototype.decode = function(e, t) {
return this._code(e, t);
};
e.prototype.encode = function(e, t) {
return this._code(e, t);
};
e.prototype._code = function(e, t) {
var o = this._check(e, t);
if (o.isOK) {
for (var i = [], n = 0; n < e.length; n++) i.push(e.charCodeAt(n));
var a = 0, s = /[\w\d_-`~#!$%^&*(){}=+;:'"<,>,/?|\\\u4e00-\u9fa5]/g;
for (n = 0; n < i.length; n++) {
var r = e[n].match(s);
if (r && r.length > 0) {
i[n] ^= o.key.charCodeAt(a);
(r = String.fromCharCode(i[n]).match(s)) && r.length || (i[n] ^= o.key.charCodeAt(a));
++a >= o.key.length && (a = 0);
}
}
var c = "";
for (n = 0; n < i.length; n++) c += String.fromCharCode(i[n]);
return c;
}
return e;
};
e.prototype._check = function(e, t) {
return e && e.length > 0 ? t && t.length > 0 ? {
isOK: !0,
key: t
} : this.encryptKey && this.encryptKey.length > 0 ? {
isOK: !0,
key: this.encryptKey
} : {
isOK: !1,
key: ""
} : {
isOK: !1,
key: ""
};
};
return e;
}();
o.BitEncrypt = new i();
cc._RF.pop();
}, {} ],
BundleManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b7617b2BTREZ417kFtFHI2I", "BundleManager");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.BundleManager = void 0;
var i = e("../../defines/Macros"), n = function() {
function e() {}
e.Instance = function() {
return this._instance || (this._instance = new e());
};
e.prototype.isEngineBundle = function(e) {
return e == cc.AssetManager.BuiltinBundleName.INTERNAL || e == cc.AssetManager.BuiltinBundleName.MAIN || e == cc.AssetManager.BuiltinBundleName.RESOURCES || e == cc.AssetManager.BuiltinBundleName.START_SCENE;
};
e.prototype.removeLoadedBundle = function(e) {
var t = this, o = [];
cc.assetManager.bundles.forEach(function(e, i) {
t.isEngineBundle(i) || o.push(i);
});
for (var i = o.length; i--; ) {
var n = o[i];
if (-1 == e.indexOf(n)) {
var a = this.getBundle(n);
if (a) {
Manager.cacheManager.removeBundle(n);
Manager.releaseManager.removeBundle(a);
}
}
}
};
e.prototype.getBundle = function(e) {
return e ? "string" == typeof e ? cc.assetManager.getBundle(e) : e : null;
};
e.prototype.getBundleName = function(e) {
if (e) return "string" == typeof e ? e : e.name;
Log.e("输入参数错误 : " + e);
return i.Macro.UNKNOWN;
};
e.prototype.loadBundle = function(e) {
if (this.getBundle(e.bundle)) {
Log.d(e.bundle + "已经加载在缓存中，直接使用");
Manager.releaseManager.onLoadBundle(e.bundle);
e.completed && e.completed();
} else {
Log.d("loadBundle : " + e.bundle, "item.option: " + e.option);
cc.assetManager.loadBundle(e.url ? e.url + "/" + e.bundle : e.bundle, e.option, function(t) {
if (t) {
Log.e("load bundle : " + e.bundle + " fail !!!");
e.error && e.error(t);
} else {
Manager.releaseManager.onLoadBundle(e.bundle);
Log.d("load bundle : " + e.bundle + " success !!!");
e.completed && e.completed();
}
});
}
};
e.prototype.print = function(e) {
if (e) {
var t = [];
cc.assetManager.bundles.forEach(function(e) {
t.push(e);
});
e.print({
loaded: t
});
}
};
e._instance = null;
return e;
}();
o.BundleManager = n;
cc._RF.pop();
}, {
"../../defines/Macros": "Macros"
} ],
BundleUpdateHandlerImpl: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "aa5aek2Hb1Ne6ZDRnHkyWY2", "BundleUpdateHandlerImpl");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.BundleUpdateHandlerImpl = void 0;
var i = e("../../core/update/Update"), n = function() {
function e() {}
e.prototype.onNewVersionFund = function(e) {
e.doUpdate();
};
e.prototype.onUpdateFailed = function() {};
e.prototype.onPreVersionFailed = function(e, t) {
t && Manager.bundleManager.loadBundle(e);
};
e.prototype.onShowUpdating = function() {};
e.prototype.onOther = function() {};
e.prototype.onDownloading = function(e, t) {
if (e.node) if (-1 == t.progress) {
e.node.getChildByName("hui").active = !0;
e.node.getChildByName("donw").active = !0;
} else if (t.progress < 1) {
e.node.getChildByName("donw").active = !1;
e.node.getChildByName("jdLabel").getComponent(cc.Label).string = Math.floor(100 * t.progress) + "%";
} else {
e.node.getChildByName("hui").active = !1;
e.node.getChildByName("donw").active = !1;
e.node.getChildByName("jdLabel").getComponent(cc.Label).string = "";
}
};
e.prototype.onAreadyUpToData = function() {};
e.prototype.onTryDownloadFailedAssets = function(e) {
e.downloadFailedAssets();
};
e.prototype.onStartLoadBundle = function() {};
e.prototype.onLoadBundleError = function() {};
e.prototype.onLoadBundleComplete = function() {};
e.prototype.onLoadBundle = function(e) {
cc.find("Loding") && (cc.find("Loding").active = !0);
e.id;
Manager.bundleManager.loadBundle(e);
};
e.prototype.onDownloadComplete = function(e) {
if (e.node) {
e.node.up_status = i.Update.Status.UP_TO_DATE;
console.log("事件派发、状态修改");
e.node.getChildByName("hui").active = !1;
e.node.getChildByName("donw").active = !1;
e.node.getChildByName("jdLabel").getComponent(cc.Label).string = "";
}
};
return e;
}();
o.BundleUpdateHandlerImpl = n;
cc._RF.pop();
}, {
"../../core/update/Update": "Update"
} ],
ByteArray: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b1646n0FfRHaZ9qoG9xqEcD", "ByteArray");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.ByteArray = o.EndianConst = o.Endian = void 0;
var i, n, a = function() {
function e() {}
e.LITTLE_ENDIAN = "littleEndian";
e.BIG_ENDIAN = "bigEndian";
return e;
}();
o.Endian = a;
(function(e) {
e[e.LITTLE_ENDIAN = 0] = "LITTLE_ENDIAN";
e[e.BIG_ENDIAN = 1] = "BIG_ENDIAN";
})(i = o.EndianConst || (o.EndianConst = {}));
(function(e) {
e[e.SIZE_OF_BOOLEAN = 1] = "SIZE_OF_BOOLEAN";
e[e.SIZE_OF_INT8 = 1] = "SIZE_OF_INT8";
e[e.SIZE_OF_INT16 = 2] = "SIZE_OF_INT16";
e[e.SIZE_OF_INT32 = 4] = "SIZE_OF_INT32";
e[e.SIZE_OF_UINT8 = 1] = "SIZE_OF_UINT8";
e[e.SIZE_OF_UINT16 = 2] = "SIZE_OF_UINT16";
e[e.SIZE_OF_UINT32 = 4] = "SIZE_OF_UINT32";
e[e.SIZE_OF_FLOAT32 = 4] = "SIZE_OF_FLOAT32";
e[e.SIZE_OF_FLOAT64 = 8] = "SIZE_OF_FLOAT64";
})(n || (n = {}));
var s = function() {
function e(e, t) {
void 0 === t && (t = 0);
this.bufferExtSize = 0;
this.$endian = null;
this.EOF_byte = -1;
this.EOF_code_point = -1;
t < 0 && (t = 0);
this.bufferExtSize = t;
var o, i = 0;
if (e) {
var n = void 0;
if (e instanceof Uint8Array) {
n = e;
i = e.length;
} else {
i = e.byteLength;
n = new Uint8Array(e);
}
(o = 0 == t ? new Uint8Array(i) : new Uint8Array((1 + (i / t | 0)) * t)).set(n);
} else o = new Uint8Array(t);
this.write_position = i;
this._position = 0;
this._bytes = o;
this.data = new DataView(o.buffer);
this.endian = a.BIG_ENDIAN;
}
Object.defineProperty(e.prototype, "endian", {
get: function() {
return this.$endian == i.LITTLE_ENDIAN ? a.LITTLE_ENDIAN : a.BIG_ENDIAN;
},
set: function(e) {
this.$endian = e == a.LITTLE_ENDIAN ? i.LITTLE_ENDIAN : i.BIG_ENDIAN;
},
enumerable: !1,
configurable: !0
});
e.prototype.setArrayBuffer = function() {};
Object.defineProperty(e.prototype, "readAvailable", {
get: function() {
return this.write_position - this._position;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "buffer", {
get: function() {
return this.data.buffer.slice(0, this.write_position);
},
set: function(e) {
var t, o = e.byteLength, i = new Uint8Array(e), n = this.bufferExtSize;
(t = 0 == n ? new Uint8Array(o) : new Uint8Array((1 + (o / n | 0)) * n)).set(i);
this.write_position = o;
this._bytes = t;
this.data = new DataView(t.buffer);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "rawBuffer", {
get: function() {
return this.data.buffer;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "bytes", {
get: function() {
return this._bytes;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "dataView", {
get: function() {
return this.data;
},
set: function(e) {
this.buffer = e.buffer;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "bufferOffset", {
get: function() {
return this.data.byteOffset;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "position", {
get: function() {
return this._position;
},
set: function(e) {
this._position = e;
e > this.write_position && (this.write_position = e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "length", {
get: function() {
return this.write_position;
},
set: function(e) {
this.write_position = e;
this.data.byteLength > e && (this._position = e);
this._validateBuffer(e);
},
enumerable: !1,
configurable: !0
});
e.prototype._validateBuffer = function(e) {
if (this.data.byteLength < e) {
var t = this.bufferExtSize, o = void 0;
(o = 0 == t ? new Uint8Array(e) : new Uint8Array((1 + (e / t >> 0)) * t)).set(this._bytes);
this._bytes = o;
this.data = new DataView(o.buffer);
}
};
Object.defineProperty(e.prototype, "bytesAvailable", {
get: function() {
return this.data.byteLength - this._position;
},
enumerable: !1,
configurable: !0
});
e.prototype.clear = function() {
var e = new ArrayBuffer(this.bufferExtSize);
this.data = new DataView(e);
this._bytes = new Uint8Array(e);
this._position = 0;
this.write_position = 0;
};
e.prototype.readBoolean = function() {
return !!this.validate(n.SIZE_OF_BOOLEAN) && !!this._bytes[this.position++];
};
e.prototype.readByte = function() {
return this.validate(n.SIZE_OF_INT8) ? this.data.getInt8(this.position++) : 0;
};
e.prototype.readBytes = function(e, t, o) {
void 0 === t && (t = 0);
void 0 === o && (o = 0);
if (e) {
var i = this._position, n = this.write_position - i;
if (!(n < 0)) {
if (0 == o) o = n; else if (o > n) return;
var a = e._position;
e._position = 0;
e.validateBuffer(t + o);
e._position = a;
e._bytes.set(this._bytes.subarray(i, i + o), t);
this.position += o;
}
}
};
e.prototype.readDouble = function() {
if (this.validate(n.SIZE_OF_FLOAT64)) {
var e = this.data.getFloat64(this._position, this.$endian == i.LITTLE_ENDIAN);
this.position += n.SIZE_OF_FLOAT64;
return e;
}
return 0;
};
e.prototype.readFloat = function() {
if (this.validate(n.SIZE_OF_FLOAT32)) {
var e = this.data.getFloat32(this._position, this.$endian == i.LITTLE_ENDIAN);
this.position += n.SIZE_OF_FLOAT32;
return e;
}
return 0;
};
e.prototype.readInt = function() {
if (this.validate(n.SIZE_OF_INT32)) {
var e = this.data.getInt32(this._position, this.$endian == i.LITTLE_ENDIAN);
this.position += n.SIZE_OF_INT32;
return e;
}
return 0;
};
e.prototype.readShort = function() {
if (this.validate(n.SIZE_OF_INT16)) {
var e = this.data.getInt16(this._position, this.$endian == i.LITTLE_ENDIAN);
this.position += n.SIZE_OF_INT16;
return e;
}
return 0;
};
e.prototype.readUnsignedByte = function() {
return this.validate(n.SIZE_OF_UINT8) ? this._bytes[this.position++] : 0;
};
e.prototype.readUnsignedInt = function() {
if (this.validate(n.SIZE_OF_UINT32)) {
var e = this.data.getUint32(this._position, this.$endian == i.LITTLE_ENDIAN);
this.position += n.SIZE_OF_UINT32;
return e;
}
return 0;
};
e.prototype.readUnsignedShort = function() {
if (this.validate(n.SIZE_OF_UINT16)) {
var e = this.data.getUint16(this._position, this.$endian == i.LITTLE_ENDIAN);
this.position += n.SIZE_OF_UINT16;
return e;
}
return 0;
};
e.prototype.readUTF = function() {
var e = this.readUnsignedShort();
return e > 0 ? this.readUTFBytes(e) : "";
};
e.prototype.readUTFBytes = function(e) {
if (!this.validate(e)) return "";
var t = this.data, o = new Uint8Array(t.buffer, t.byteOffset + this._position, e);
this.position += e;
return this.decodeUTF8(o);
};
e.prototype.writeBoolean = function(e) {
this.validateBuffer(n.SIZE_OF_BOOLEAN);
this._bytes[this.position++] = +e;
};
e.prototype.writeByte = function(e) {
this.validateBuffer(n.SIZE_OF_INT8);
this._bytes[this.position++] = 255 & e;
};
e.prototype.writeBytes = function(e, t, o) {
void 0 === t && (t = 0);
void 0 === o && (o = 0);
var i;
if (!(t < 0) && !(o < 0) && (i = 0 == o ? e.length - t : Math.min(e.length - t, o)) > 0) {
this.validateBuffer(i);
this._bytes.set(e._bytes.subarray(t, t + i), this._position);
this.position = this._position + i;
}
};
e.prototype.writeDouble = function(e) {
this.validateBuffer(n.SIZE_OF_FLOAT64);
this.data.setFloat64(this._position, e, this.$endian == i.LITTLE_ENDIAN);
this.position += n.SIZE_OF_FLOAT64;
};
e.prototype.writeFloat = function(e) {
this.validateBuffer(n.SIZE_OF_FLOAT32);
this.data.setFloat32(this._position, e, this.$endian == i.LITTLE_ENDIAN);
this.position += n.SIZE_OF_FLOAT32;
};
e.prototype.writeInt = function(e) {
this.validateBuffer(n.SIZE_OF_INT32);
this.data.setInt32(this._position, e, this.$endian == i.LITTLE_ENDIAN);
this.position += n.SIZE_OF_INT32;
};
e.prototype.writeShort = function(e) {
this.validateBuffer(n.SIZE_OF_INT16);
this.data.setInt16(this._position, e, this.$endian == i.LITTLE_ENDIAN);
this.position += n.SIZE_OF_INT16;
};
e.prototype.writeUnsignedInt = function(e) {
this.validateBuffer(n.SIZE_OF_UINT32);
this.data.setUint32(this._position, e, this.$endian == i.LITTLE_ENDIAN);
this.position += n.SIZE_OF_UINT32;
};
e.prototype.writeUnsignedShort = function(e) {
this.validateBuffer(n.SIZE_OF_UINT16);
this.data.setUint16(this._position, e, this.$endian == i.LITTLE_ENDIAN);
this.position += n.SIZE_OF_UINT16;
};
e.prototype.writeUTF = function(e) {
var t = this.encodeUTF8(e), o = t.length;
this.validateBuffer(n.SIZE_OF_UINT16 + o);
this.data.setUint16(this._position, o, this.$endian == i.LITTLE_ENDIAN);
this.position += n.SIZE_OF_UINT16;
this._writeUint8Array(t, !1);
};
e.prototype.writeUTFBytes = function(e, t) {
this._writeUint8Array(this.encodeUTF8(e, t));
};
e.prototype.toString = function() {
return "[ByteArray] length:" + this.length + ", bytesAvailable:" + this.bytesAvailable;
};
e.prototype._writeUint8Array = function(e, t) {
void 0 === t && (t = !0);
var o = this._position, i = o + e.length;
t && this.validateBuffer(i);
this.bytes.set(e, o);
this.position = i;
};
e.prototype.validate = function(e) {
var t = this._bytes.length;
return t > 0 && this._position + e <= t;
};
e.prototype.validateBuffer = function(e) {
this.write_position = e > this.write_position ? e : this.write_position;
e += this._position;
this._validateBuffer(e);
};
e.prototype.encodeUTF8 = function(e, t) {
for (var o = 0, i = this.stringToCodePoints(e), n = []; i.length > o; ) {
var a = i[o++];
if (this.inRange(a, 55296, 57343)) this.encoderError(a); else if (this.inRange(a, 0, 127)) if (null == t) n.push(a); else {
if (!(n.length + 1 < t)) break;
n.push(a);
} else {
var s = 0, r = 0;
if (this.inRange(a, 128, 2047)) {
s = 1;
r = 192;
} else if (this.inRange(a, 2048, 65535)) {
s = 2;
r = 224;
} else if (this.inRange(a, 65536, 1114111)) {
s = 3;
r = 240;
}
if (null == t) {
n.push(this.div(a, Math.pow(64, s)) + r);
for (;s > 0; ) {
var c = this.div(a, Math.pow(64, s - 1));
n.push(128 + c % 64);
s -= 1;
}
} else {
var l = 0;
n.push(this.div(a, Math.pow(64, s)) + r);
l++;
for (;s > 0; ) {
c = this.div(a, Math.pow(64, s - 1));
n.push(128 + c % 64);
s -= 1;
l++;
}
if (n.length > t) {
n.splice(n.length - l, l);
break;
}
}
}
}
if (null != t && n.length < t) for (s = t - n.length; s > 0; ) {
n.push(0);
s--;
}
return new Uint8Array(n);
};
e.prototype.decodeUTF8 = function(e) {
for (var t = 0, o = "", i = null, n = 0, a = 0, s = 0, r = 0; e.length > t; ) {
var c = e[t++];
if (c == this.EOF_byte) i = 0 != a ? this.decoderError(!1) : this.EOF_code_point; else if (0 == a) if (this.inRange(c, 0, 127)) i = c; else {
if (this.inRange(c, 194, 223)) {
a = 1;
r = 128;
n = c - 192;
} else if (this.inRange(c, 224, 239)) {
a = 2;
r = 2048;
n = c - 224;
} else if (this.inRange(c, 240, 244)) {
a = 3;
r = 65536;
n = c - 240;
} else this.decoderError(!1);
n *= Math.pow(64, a);
i = null;
} else if (this.inRange(c, 128, 191)) {
s += 1;
n += (c - 128) * Math.pow(64, a - s);
if (s !== a) i = null; else {
var l = n, d = r;
n = 0;
a = 0;
s = 0;
r = 0;
i = this.inRange(l, d, 1114111) && !this.inRange(l, 55296, 57343) ? l : this.decoderError(!1, c);
}
} else {
n = 0;
a = 0;
s = 0;
r = 0;
t--;
i = this.decoderError(!1, c);
}
if (null !== i && i !== this.EOF_code_point) if (i <= 65535) i > 0 && (o += String.fromCharCode(i)); else {
i -= 65536;
o += String.fromCharCode(55296 + (i >> 10 & 1023));
o += String.fromCharCode(56320 + (1023 & i));
}
}
return o;
};
e.prototype.encoderError = function() {};
e.prototype.decoderError = function(e, t) {
return t || 65533;
};
e.prototype.inRange = function(e, t, o) {
return t <= e && e <= o;
};
e.prototype.div = function(e, t) {
return Math.floor(e / t);
};
e.prototype.stringToCodePoints = function(e) {
for (var t = [], o = 0, i = e.length; o < e.length; ) {
var n = e.charCodeAt(o);
if (this.inRange(n, 55296, 57343)) if (this.inRange(n, 56320, 57343)) t.push(65533); else if (o == i - 1) t.push(65533); else {
var a = e.charCodeAt(o + 1);
if (this.inRange(a, 56320, 57343)) {
var s = 1023 & n, r = 1023 & a;
o += 1;
t.push(65536 + (s << 10) + r);
} else t.push(65533);
} else t.push(n);
o += 1;
}
return t;
};
return e;
}();
o.ByteArray = s;
cc._RF.pop();
}, {} ],
CacheManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4ccf6wg6oJNP7IO0MIJHsIM", "CacheManager");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.CacheManager = void 0;
var i = e("./Resource"), n = e("../../defines/Macros"), a = function() {
function e(e) {
this._caches = new Map();
this.name = n.Macro.UNKNOWN;
this.name = e;
}
e.prototype.print = function(e) {
e.printLocal(this._caches, this.name);
};
e.prototype.get = function(e, t) {
if (this._caches.has(e)) {
var o = this._caches.get(e);
if (t && o && o.isInvalid) {
Log.w("资源加载完成，但已经被释放 , 重新加载资源 : " + e);
this.remove(e);
return null;
}
return this._caches.get(e);
}
return null;
};
e.prototype.set = function(e, t) {
this._caches.set(e, t);
};
e.prototype.remove = function(e) {
return this._caches.delete(e);
};
e.prototype.removeUnuseCaches = function() {
var e = this;
this._caches.forEach(function(t, o) {
if (Array.isArray(t.data)) {
for (var i = !0, n = 0; n < t.data.length; n++) t.data[n] && t.data[n].refCount > 0 && (i = !1);
i && e._caches.delete(o);
} else t.data && t.data.refCount <= 0 && e._caches.delete(o);
});
};
Object.defineProperty(e.prototype, "size", {
get: function() {
return this._caches.size;
},
enumerable: !1,
configurable: !0
});
return e;
}(), s = function() {
this.refCount = 0;
this.url = "";
this.retain = !1;
}, r = function() {
function e() {
this._caches = new Map();
this._spriteFrameCaches = new Map();
this._resMap = new Map();
}
e.prototype.get = function(e) {
return this._caches.has(e) ? this._caches.get(e) : null;
};
e.prototype.getSpriteFrame = function(e) {
if (this._spriteFrameCaches.has(e)) {
var t = this._spriteFrameCaches.get(e);
if (this.get(e)) return t;
this.remove(e);
return null;
}
return null;
};
e.prototype.setSpriteFrame = function(e, t) {
if (t && t instanceof cc.Texture2D) {
var o = this.getSpriteFrame(e);
if (o) return o.data;
var n = new i.Resource.CacheData();
n.data = new cc.SpriteFrame(t);
n.isLoaded = !0;
n.info.url = e;
this._spriteFrameCaches.set(e, n);
return n.data;
}
return null;
};
e.prototype.set = function(e, t) {
t.info.url = e;
this._caches.set(e, t);
};
e.prototype._getCacheInfo = function(e, t) {
void 0 === t && (t = !0);
if (e && e.url && e.url.length > 0) {
if (!this._resMap.has(e.url)) {
if (!t) return null;
var o = new s();
o.url = e.url;
this._resMap.set(e.url, o);
}
return this._resMap.get(e.url);
}
return null;
};
e.prototype.retainAsset = function(e) {
if (e && e.data) {
var t = this._getCacheInfo(e);
if (t) {
t.retain ? e.retain : t.retain = e.retain;
e.data.addRef();
t.refCount++;
t.retain && (t.refCount = 999999);
}
}
};
e.prototype.releaseAsset = function(e) {
if (e && e.data) {
var t = this._getCacheInfo(e, !1);
if (t) {
if (t.retain) return;
t.refCount--;
t.refCount <= 0 && this.remove(t.url);
}
}
};
e.prototype.remove = function(e) {
this._resMap.delete(e);
if (this._spriteFrameCaches.has(e)) {
this._spriteFrameCaches.get(e).data.decRef();
this._spriteFrameCaches.delete(e);
}
var t = this._caches.has(e) ? this._caches.get(e) : null;
if (t && t.data instanceof sp.SkeletonData) {
this.remove(t.info.url + ".atlas");
this.remove(t.info.url + ".png");
this.remove(t.info.url + ".json");
}
if (t && t.data instanceof cc.Asset) {
t.data.decRef();
t.info.data = t.data;
Manager.releaseManager.releaseRemote(t.info);
}
return this._caches.delete(e);
};
e.prototype.print = function(e) {
e.printRemote(this._spriteFrameCaches, this._caches, this._resMap);
};
return e;
}(), c = function() {
function e() {
this.logTag = "[CacheManager]: ";
this._bundles = new Map();
this._remoteCaches = new r();
}
e.Instance = function() {
return this._instance || (this._instance = new e());
};
Object.defineProperty(e.prototype, "remoteCaches", {
get: function() {
return this._remoteCaches;
},
enumerable: !1,
configurable: !0
});
e.prototype.getBundleName = function(e) {
return Manager.bundleManager.getBundleName(e);
};
e.prototype.get = function(e, t, o) {
void 0 === o && (o = !0);
var i = this.getBundleName(e);
return i && this._bundles.has(i) ? this._bundles.get(i).get(t, o) : null;
};
e.prototype.set = function(e, t, o) {
var i = this.getBundleName(e);
if (i) if (this._bundles.has(i)) this._bundles.get(i).set(t, o); else {
var n = new a(i);
n.set(t, o);
this._bundles.set(i, n);
}
};
e.prototype.remove = function(e, t) {
var o = this.getBundleName(e);
return !(!o || !this._bundles.has(o)) && this._bundles.get(o).remove(t);
};
e.prototype.removeWithInfo = function(e) {
if (e) if (e.data) if (Array.isArray(e.data)) {
for (var t = !0, o = 0; o < e.data.length; o++) {
e.data[o].decRef();
0 != e.data[o].refCount && (t = !1);
}
if (t) {
this.remove(e.bundle, e.url);
return !0;
}
} else {
e.data.decRef();
if (0 == e.data.refCount) {
this.remove(e.bundle, e.url);
return !0;
}
} else Log.e("info.data is null , bundle : " + e.bundle + " url : " + e.url); else Log.e("info is null");
return !1;
};
e.prototype.removeBundle = function(e) {
var t = this.getBundleName(e);
t && this._bundles.has(t) && this._bundles.delete(t);
};
e.prototype._removeUnuseCaches = function() {
this._bundles.forEach(function(e) {
e && e.removeUnuseCaches();
});
};
e.prototype._getGetCacheByAsyncArgs = function() {
return arguments.length < 3 ? null : "string" != typeof arguments[0] ? null : cc.js.isChildClassOf(arguments[1], cc.Asset) ? {
url: arguments[0],
type: arguments[1],
bundle: arguments[2],
isLazyRelease: arguments[3]
} : null;
};
e.prototype.getCache = function() {
var e = arguments, t = this;
return new Promise(function(o) {
var i = t._getGetCacheByAsyncArgs.apply(t, e);
if (i) {
var n = t.get(i.bundle, i.url);
n ? n.isLoaded ? i.type ? n.data instanceof i.type ? o(n.data) : o(null) : o(n.data) : n.getCb.push(o) : o(null);
} else o(null);
});
};
e.prototype.getCacheByAsync = function() {
var e = this, t = this, o = this._getGetCacheByAsyncArgs.apply(this, arguments);
return new Promise(function(i) {
o ? t.getCache(o.url, o.type, o.bundle, o.isLazyRelease).then(function(t) {
o = o;
t && t instanceof o.type ? i(t) : Manager.assetManager.load({
bundle: o.bundle,
path: o.url,
type: o.type,
onComplete: function(t) {
if (t && t.data && t.data instanceof o.type) i(t.data); else {
Log.e(e.logTag + "加载失败 : " + o.url);
i(null);
}
},
isLazyRelease: o.isLazyRelease
});
}) : i(null);
});
};
e.prototype.getSpriteFrameByAsync = function(e, t, o, n) {
var a = this;
return new Promise(function(s) {
var r = 0, c = function(l) {
a.getCacheByAsync(l, cc.SpriteAtlas, n).then(function(a) {
var d = new i.Resource.Info();
d.url = l;
d.type = cc.SpriteAtlas;
d.data = a;
d.bundle = n;
o(d);
if (a) {
var u = a.getSpriteFrame(t);
if (u) if (cc.isValid(u)) s({
url: l,
spriteFrame: u
}); else {
Log.e("精灵帧被释放，释放当前无法的图集资源 url ：" + l + " key : " + t);
Manager.assetManager.releaseAsset(d);
s({
url: l,
spriteFrame: null,
isTryReload: !0
});
} else ++r >= e.length ? s({
url: l,
spriteFrame: null
}) : c(e[r]);
} else s({
url: l,
spriteFrame: null
});
});
};
c(e[r]);
});
};
e.prototype.print = function(e) {
this._bundles.forEach(function(t) {
t.print(e);
});
this.remoteCaches.print(e);
};
e._instance = null;
return e;
}();
o.CacheManager = c;
cc._RF.pop();
}, {
"../../defines/Macros": "Macros",
"./Resource": "Resource"
} ],
CocosExtemtion: [ function(e, t) {
"use strict";
cc._RF.push(t, "8fe32xkSmlDuIbrfXYHX5Pg", "CocosExtemtion");
var o = e("../../config/PPSDK_Config");
cc.Button.prototype._onTouchBegan = function(e) {
if (this.interactable && this.enabledInHierarchy) {
this._pressed = !0;
this._updateState();
e.stopPropagation();
o.Config.USE_BUTTON_SFX && o.Config.buttonSfx && PPSDK.playSfx(o.Config.buttonSfx.path, o.Config.buttonSfx.bundle);
}
};
cc._RF.pop();
}, {
"../../config/PPSDK_Config": "PPSDK_Config"
} ],
DateExtemtion: [ function(e, t) {
"use strict";
cc._RF.push(t, "ee3ecOi85VH+KxjTGvqs7Oy", "DateExtemtion");
Date.timeNow = function() {
return Math.floor(Date.timeNowMillisecons() / 1e3);
};
Date.timeNowMillisecons = function() {
return new Date().getTime();
};
String.format = function() {
for (var e = [], t = 0, o = arguments.length; t < o; t++) e.push(arguments[t]);
var i = e[0];
if ("string" != typeof i) {
EDITOR || error("String.format error,first param is not a string");
return "";
}
e.shift();
Array.isArray(e[0]) && 1 == e.length && (e = e[0]);
return i.replace(/\{(\d+)\}/g, function(t, o) {
return e[o];
});
};
cc._RF.pop();
}, {} ],
DebugView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0c152rX6AJDfIsF9gbwO3bA", "DebugView");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), a = this && this.__decorate || function(e, t, o, i) {
var n, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, o, i); else for (var r = e.length - 1; r >= 0; r--) (n = e[r]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, o, s) : n(t, o)) || s);
return a > 3 && s && Object.defineProperty(t, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.DebugViewManager = o.DebugView = void 0;
var s = e("../../../core/log/Logger"), r = e("../../../defines/Macros"), c = cc._decorator, l = c.ccclass, d = (c.property, 
function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.logView = null;
t.content = null;
t.debug = null;
return t;
}
t.prototype.onLoad = function() {
this.content = cc.find("content", this.node);
this.bindEvent("showRes", this.onShowRes);
this.bindEvent("showDebugInfo", this.onShowDebugInfo);
this.bindEvent("log", this.onLog);
this.bindEvent("proto", this.onProto);
this.bindEvent("bundleMgr", this.onBundleMgr);
this.bindEvent("netHelper", this.onNetHelper);
this.bindEvent("serviceManager", this.onServiceManager);
this.bindEvent("releaseManager", this.onReleaseManager);
this.bindEvent("adaptor", this.onAdaptor);
this.doOther();
};
t.prototype.doOther = function() {
var e = this, t = cc.find("logView", this.node);
if (t) {
t.active = !1;
this.logView = t;
this.initLogView();
}
var o = cc.find("background", this.node);
o && o.on(cc.Node.EventType.TOUCH_END, function() {
e.node.active = !1;
e.debug && (e.debug.active = !0);
});
};
t.prototype.bindEvent = function(e, t) {
var o = cc.find(e, this.content);
o && o.on(cc.Node.EventType.TOUCH_END, t, this);
};
t.prototype.initLogView = function() {
var e = this, t = cc.find("background", this.logView);
t && t.on(cc.Node.EventType.TOUCH_END, function() {
e.logView.active = !1;
});
var o = cc.find("level", this.logView);
if (o) for (var i = function(t) {
var i = cc.find("type" + t, o);
if (i) {
var a = i.getComponent(cc.Toggle);
a && (a.isChecked = Manager.logger.isValid(n.getLogLevel(t)));
i.on("toggle", function(o) {
o.isChecked ? Manager.logger.attach(e.getLogLevel(t)) : Manager.logger.detach(e.getLogLevel(t));
});
}
}, n = this, a = 0; a < o.children.length - 1; a++) i(a);
};
t.prototype.getLogLevel = function(e) {
switch (e) {
case 0:
return s.LogLevel.DEBUG;

case 1:
return s.LogLevel.WARN;

case 2:
return s.LogLevel.ERROR;

case 3:
return s.LogLevel.DUMP;

default:
return s.LogLevel.DEBUG;
}
};
t.prototype.onProto = function() {};
t.prototype.onBundleMgr = function() {
Log.d("-------Bundle管理器状态信息-------");
Manager.bundleManager.print({
print: function(e) {
for (var t = [], o = 0; o < e.loaded.length; o++) t.push(e.loaded[o].name);
Log.d("当前所有加载完成的bundle : " + t.toString());
}
});
};
t.prototype.onLog = function() {
this.logView.active = !0;
};
t.prototype.onShowDebugInfo = function() {
cc.debug.setDisplayStats(!cc.debug.isDisplayStats());
};
t.prototype.onShowRes = function() {
Manager.cacheManager.print({
printLocal: function(e) {
var t = [], o = [];
e.forEach(function(e, i) {
var n = {
url: i,
data: {
url: e.info.url,
isLoaded: e.isLoaded,
retain: e.info.retain,
isValid: cc.isValid(e.data),
assetType: cc.js.getClassName(e.info.type),
data: e.data ? cc.js.getClassName(e.data) : null,
status: e.status
}
};
e.isLoaded && e.data && !cc.isValid(e.data) ? o.push(n) : t.push(n);
});
if (t.length > 0) {
Log.d("----------- 有效缓存信息 -----------");
Log.d(JSON.stringify(t));
}
if (o.length > 0) {
Log.d("----------- 无效缓存信息 -----------");
Log.d(JSON.stringify(o));
}
},
printRemote: function(e, t, o) {
Log.d("---- 远程加载资源缓存信息 ----");
var i = [], n = [];
e.forEach(function(e, t) {
var o = {
url: t,
data: {
url: e.info.url,
isLoaded: e.isLoaded,
isValid: cc.isValid(e.data),
assetType: cc.js.getClassName(e.info.type),
data: e.data ? cc.js.getClassName(e.data) : null,
status: e.status
}
};
e.isLoaded && (e.data && !cc.isValid(e.data) || !e.data) ? n.push(o) : i.push(o);
});
if (i.length > 0) {
Log.d("----------------有效 spriteFrame 缓存信息------------------");
Log.d(JSON.stringify(i));
}
if (n.length > 0) {
Log.d("----------------无效 spriteFrame 缓存信息------------------");
Log.d(JSON.stringify(n));
}
i = [];
n = [];
t.forEach(function(e, t) {
var o = {
url: t,
data: {
url: e.info.url,
isLoaded: e.isLoaded,
isValid: cc.isValid(e.data),
assetType: cc.js.getClassName(e.info.type),
data: e.data ? cc.js.getClassName(e.data) : null,
status: e.status
}
};
e.isLoaded && e.data && !cc.isValid(e.data) ? n.push(o) : i.push(o);
});
if (i.length > 0) {
Log.d("----------------有效缓存信息------------------");
Log.d(JSON.stringify(i));
}
if (n.length > 0) {
Log.d("----------------无效缓存信息------------------");
Log.d(JSON.stringify(n));
}
if (o.size > 0) {
Log.d("----------------当前资源引用计数信息------------------");
i = [];
o.forEach(function(e, t) {
var o = {
url: t,
data: {
refCount: e.refCount,
url: e.url,
retain: e.retain
}
};
i.push(o);
});
Log.d(JSON.stringify(i));
}
}
});
};
t.prototype.onNetHelper = function() {};
t.prototype.onServiceManager = function() {};
t.prototype.onReleaseManager = function() {
Manager.releaseManager.print({
print: function(e) {
if (Manager.isLazyRelease) {
e.bundles.length > 0 && Log.d("待释放Bundle : " + e.bundles.toString());
e.lazyInfo.size > 0 && e.lazyInfo.forEach(function(e, t) {
Log.d("--------------" + t + "待释放资源--------------");
e.assets.forEach(function(e) {
Log.d("" + e.url);
});
});
Log.d("远程待释放资源");
e.remote.assets.forEach(function(e) {
Log.d("" + e.url);
});
} else Log.w("未开户懒释放功能!!!!");
}
});
};
t.prototype.onAdaptor = function() {
Log.d("-----------------------------适配信息-----------------------------------------------");
Log.d("屏幕分辨率: " + cc.view.getCanvasSize().width + " x " + cc.view.getCanvasSize().height);
Log.d("视图窗口可见区域分辨率: " + cc.view.getVisibleSize().width + " x " + cc.view.getVisibleSize().height);
Log.d("视图中边框尺寸: " + cc.view.getFrameSize().width + " x " + cc.view.getFrameSize().height);
Log.d("设备或浏览器像素比例: " + cc.view.getDevicePixelRatio());
Log.d("返回视图窗口可见区域像素尺寸: " + cc.view.getVisibleSizeInPixel().width + " x " + cc.view.getVisibleSizeInPixel().height);
Log.d("当前场景设计分辨率: " + cc.view.getDesignResolutionSize().width + " x " + cc.view.getDesignResolutionSize().height);
var e = cc.view.getFrameSize().width / cc.view.getFrameSize().height, t = cc.view.getDesignResolutionSize().width / cc.view.getDesignResolutionSize().height;
Log.d("视图宽高比:" + e);
Log.d("设置分辨率宽高比:" + t);
};
return a([ l ], t);
}(cc.Component));
o.DebugView = d;
var u = function() {
function e() {
this.debugView = null;
}
e.Instance = function() {
return this._instance || (this._instance = new e());
};
e.prototype.showDebug = function() {
var e = this;
return new Promise(function(t, o) {
if (e.debugView) {
e.debugView.active = !0;
return Promise.resolve();
}
Manager.cacheManager.getCacheByAsync("PPFrameWork/framework/common/components/debug/debugView", cc.Prefab, r.Macro.BUNDLE_RESOURCES).then(function(i) {
if (i) {
var n = cc.instantiate(i);
Manager.uiManager.addView(n, 50);
e.debugView = n;
t(i);
} else o();
});
});
};
e._instance = null;
return e;
}();
o.DebugViewManager = u;
cc._RF.pop();
}, {
"../../../core/log/Logger": "Logger",
"../../../defines/Macros": "Macros"
} ],
EventCenter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9609fP3bB5KIKfWSjPQbCqb", "EventCenter");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.EventCenter = void 0;
var i = function() {
function e() {
this._postNotificationNames = [];
this._dic = new Map();
}
e.Instance = function() {
return this._instance || (this._instance = new e());
};
e.prototype.emit = function(e, t, o) {
void 0 === o && (o = !1);
if (null !== e && "" !== e) {
if (o) {
if (this._postNotificationNames.indexOf(e) >= 0) return;
this._postNotificationNames.push(e);
}
this._getDelegates(e).forEach(function(e, o) {
e.forEach(function(e) {
e.call(o, t);
});
});
}
};
e.prototype.on = function(e, t, o, i) {
void 0 === e && (e = null);
void 0 === t && (t = null);
void 0 === o && (o = null);
void 0 === i && (i = !1);
if (null == e) return Log.e("Register:name");
if (null == t) return Log.e("Register:method");
if (null == o) return Log.e("Register:target");
this._addValue(e, o, t);
i && t.call(o);
};
e.prototype.off = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
"string" == typeof e[0] ? this._off1(e[0], e[1], e[2]) : this._off2.apply(this, e);
};
e.prototype.clear = function() {
this._postNotificationNames = [];
this._dic = new Map();
};
e.prototype._getDelegates = function(e) {
var t = this._valueOrDefault(this._dic, e);
return null != t ? t : [];
};
e.prototype._valueOrDefault = function(e, t) {
return null == e ? null : e.has(t) ? e.get(t) : null;
};
e.prototype._addValue = function(e, t, o) {
var i = this._valueOrDefault(this._dic, e);
if (null == i) {
i = new Map();
this._dic.set(e, i);
}
if (null == this._valueOrDefault(i, t)) i.set(t, [ o ]); else {
var n = i.get(t);
n.push(o);
i.set(t, n);
}
};
e.prototype._off1 = function(e, t, o) {
if (null !== e) return null != o ? this._removeValue(e, t, o) : null != t ? this._removeKey(e, t) : this._removeKey(e);
};
e.prototype._off2 = function(e) {
var t = this;
void 0 === e && (e = null);
if (null == e) return !1;
this._dic.forEach(function(o) {
var i = o;
null !== t._valueOrDefault(i, e) && i.delete(e);
});
return !0;
};
e.prototype._removeValue = function(e, t, o) {
var i = this._valueOrDefault(this._dic, e);
if (null == i) return !1;
if (null == this._valueOrDefault(i, t)) return !1;
var n = i.get(t);
n.remove(o);
i.set(t, n);
return !0;
};
e.prototype._removeKey1 = function(e) {
return this._dic.delete(e);
};
e.prototype._removeKey2 = function(e, t) {
return null != this._valueOrDefault(this._dic, e) && this._dic.delete(t);
};
e.prototype._removeKey = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
1 === e.length ? this._removeKey1(e[0]) : this._removeKey2(e[0], e[1]);
};
e._instance = null;
return e;
}();
o.EventCenter = i;
cc._RF.pop();
}, {} ],
FitScale: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0324e3pC6FE6LoA+Z34oSYN", "FitScale");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.fitWidth = !1;
t.fitHeight = !1;
return t;
}
t.prototype.setFit = function(e, t) {
this.fitWidth = e;
this.fitHeight = t;
if (this.fitWidth && this.fitHeight) {
var o = cc.winSize.width / cc.view.getDesignResolutionSize().width, i = cc.winSize.height / cc.view.getDesignResolutionSize().height;
this.node.scaleX = o;
this.node.scaleY = i;
} else if (this.fitWidth) {
var n = cc.winSize.width / cc.view.getDesignResolutionSize().width;
this.node.scale = Math.min(n, 1);
} else if (this.fitHeight) {
n = cc.winSize.height / cc.view.getDesignResolutionSize().height;
this.node.scale = Math.min(n, 1);
}
};
return t;
}(cc.Component);
o.default = a;
cc._RF.pop();
}, {} ],
Framework: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1f5a14Ftn5OBY7zk95vuoQ7", "Framework");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Framework = void 0;
var i = e("./asset/AssetManager"), n = e("./asset/BundleManager"), a = e("./asset/CacheManager"), s = e("./asset/ReleaseManager"), r = e("./audio/AudioManager"), c = e("./event/EventCenter"), l = e("./language/LanguageMgr"), d = e("./log/Logger"), u = e("./net/http/HttpClient"), h = e("./nodePool/NodePoolManager"), g = e("./storage/LocalManager"), p = e("./ui/PopupManager"), f = e("./ui/UIManager"), m = e("./update/UpdateManager"), y = e("./utils/Utils"), _ = function() {
function e() {}
Object.defineProperty(e.prototype, "logger", {
get: function() {
return getSingleton(d.LoggerImpl);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "assetManager", {
get: function() {
return getSingleton(i.AssetManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "cacheManager", {
get: function() {
return getSingleton(a.CacheManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "bundleManager", {
get: function() {
return getSingleton(n.BundleManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "releaseManager", {
get: function() {
return getSingleton(s.ReleaseManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "uiManager", {
get: function() {
return getSingleton(f.UIManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "nodePoolManager", {
get: function() {
return getSingleton(h.NodePoolManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "eventCenter", {
get: function() {
return getSingleton(c.EventCenter);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "localManager", {
get: function() {
return getSingleton(g.default);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "audioManager", {
get: function() {
return getSingleton(r.default);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "languageManager", {
get: function() {
return getSingleton(l.default);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "popupManager", {
get: function() {
return getSingleton(p.default);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "updateManager", {
get: function() {
return getSingleton(m.UpdateManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "http", {
get: function() {
return getSingleton(u.HttpClient);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "utils", {
get: function() {
return y.Utils;
},
enumerable: !1,
configurable: !0
});
e.prototype.enter = function() {};
return e;
}();
o.Framework = _;
cc._RF.pop();
}, {
"./asset/AssetManager": "AssetManager",
"./asset/BundleManager": "BundleManager",
"./asset/CacheManager": "CacheManager",
"./asset/ReleaseManager": "ReleaseManager",
"./audio/AudioManager": "AudioManager",
"./event/EventCenter": "EventCenter",
"./language/LanguageMgr": "LanguageMgr",
"./log/Logger": "Logger",
"./net/http/HttpClient": "HttpClient",
"./nodePool/NodePoolManager": "NodePoolManager",
"./storage/LocalManager": "LocalManager",
"./ui/PopupManager": "PopupManager",
"./ui/UIManager": "UIManager",
"./update/UpdateManager": "UpdateManager",
"./utils/Utils": "Utils"
} ],
HallUpdateHandlerImpl: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "317cc0anDRP8rgKc0Xs4I/S", "HallUpdateHandlerImpl");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.HallUpdateHandlerImpl = void 0;
var i = function() {
function e() {}
e.Instance = function() {
return this._instance || (this._instance = new e());
};
e.prototype.onNewVersionFund = function(e) {
e.doUpdate();
};
e.prototype.onUpdateFailed = function(e) {
Manager.bundleManager.loadBundle({
bundle: e.bundle,
option: Manager.updateManager.getHash(e.bundle),
completed: function() {
cc.director.loadScene(e.starScene);
}
});
};
e.prototype.onPreVersionFailed = function(e) {
Manager.bundleManager.loadBundle({
bundle: e.bundle,
option: Manager.updateManager.getHash(e.bundle),
completed: function() {
cc.director.loadScene(e.starScene);
}
});
};
e.prototype.onShowUpdating = function() {
cc.find("Loding") && (cc.find("Loding").active = !0);
};
e.prototype.onOther = function() {};
e.prototype.onDownloading = function() {};
e.prototype.onAreadyUpToData = function(e) {
Manager.bundleManager.loadBundle({
bundle: e.bundle,
option: Manager.updateManager.getHash(e.bundle),
completed: function() {
cc.director.loadScene(e.starScene);
}
});
};
e.prototype.onTryDownloadFailedAssets = function(e) {
e.downloadFailedAssets();
};
e.prototype.onStarCheckUpdate = function() {
cc.find("Loding") && (cc.find("Loding").active = !0);
};
e.prototype.onStartLoadBundle = function() {};
e.prototype.onLoadBundleError = function() {};
e.prototype.onLoadBundleComplete = function() {};
e.prototype.onLoadBundle = function(e) {
console.log("onLoadBundle:", e.bundle, "hash", Manager.updateManager.getHash(e.bundle));
Manager.bundleManager.loadBundle({
bundle: e.bundle,
option: Manager.updateManager.getHash(e.bundle),
completed: function() {
console.log("onLoadBundle success:", e.bundle);
cc.director.loadScene(e.starScene);
}
});
};
e.prototype.onDownloadComplete = function(e) {
Manager.bundleManager.loadBundle({
bundle: e.bundle,
option: Manager.updateManager.getHash(e.bundle),
completed: function() {
cc.director.loadScene(e.starScene);
}
});
};
e._instance = null;
return e;
}();
o.HallUpdateHandlerImpl = i;
cc._RF.pop();
}, {} ],
HttpClient: [ function (require, module, exports) {
function HttpClient() {}
HttpClient.Instance = function() { return this._instance || (this._instance = new HttpClient()); };
HttpClient.prototype.request = function(data, success, error) { if (error) setTimeout(function() { error({type: 2, reason: "offline"}); }, 0); };
function HttpPackage() { this.data = {}; }
HttpPackage.prototype.send = function(success, error) { PPSDK.http.request(this, success, error); };
exports.HttpClient = HttpClient; exports.HttpPackage = HttpPackage;
}, {} ],
Http: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "684c9CBZ2NBQJyjobWDkoFY", "Http");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Http = void 0;
(function(e) {
(function(e) {
e[e.UrlError = 0] = "UrlError";
e[e.TimeOut = 1] = "TimeOut";
e[e.RequestError = 2] = "RequestError";
})(e.ErrorType || (e.ErrorType = {}));
(function(e) {
e.POST = "POST";
e.GET = "GET";
})(e.Type || (e.Type = {}));
})(o.Http || (o.Http = {}));
cc._RF.pop();
}, {} ],
HuaweiAdapter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c1e70fchDRD5Ki7JS+NUJIE", "HuaweiAdapter");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.HuaweiAdapter = void 0;
var a = function(e) {
n(t, e);
function t() {
var t = e.call(this) || this;
console.log("Huawei Adapter init!");
return t;
}
t.prototype.getBasePath = function() {
return jsb.fileUtils.getWritablePath();
};
t.prototype.getFileExist = function(e) {
try {
return window.qg.getFileSystemManager().accessSync(e);
} catch (e) {
console.error(e);
return !1;
}
};
t.prototype.isFile = function(e) {
return window.qg.getFileSystemManager().statSync(e).isFile();
};
t.prototype.writeFile = function(e) {
console.log("writeFile:", e.url);
window.qg.getFileSystemManager().writeFile({
filePath: e.url,
data: e.data,
encoding: "string" == typeof e.data ? "utf8" : "binary",
success: function() {
console.info("writeFile success");
e.success && e.success();
},
fail: function(t) {
console.info("writeFile fail " + t.errMsg), e.fail && e.fail();
},
complete: function() {
e.complete && e.complete();
}
});
};
t.prototype.deleteFile = function(e) {
console.log("deleteFile:", e.url);
window.qg.getFileSystemManager().unlink({
filePath: e.url,
success: function() {
console.log("deleteFile success!");
e.success && e.success();
},
fail: function(t) {
console.log("deleteFile fail:", t);
e.fail && e.fail();
},
complete: function() {
e.complete && e.complete();
}
});
};
t.prototype.readFile = function(e) {
console.log("readFile:", e.url);
window.qg.getFileSystemManager().readFile({
filePath: e.url,
encoding: e.isString ? "utf8" : null,
success: function(t) {
console.info("readFile success " + t.data);
e.success && e.success(t.data);
},
fail: function(t) {
console.info("readFile fail:", t);
e.fail && e.fail();
},
complete: e.complete
});
};
t.prototype.saveImageTemp = function(e) {
window.qg.saveImageTemp(e);
};
t.prototype.getSaveAbulmEnabled = function() {
return !0;
};
t.prototype.saveToPhotoAlbum = function(e) {
console.log("saveToPhotoAlbum");
window.qg.authorize && window.qg.authorize({
scope: "writePhotosAlbum",
success: function(t) {
console.log("authorize success:", t);
window.qg.saveImageToPhotosAlbum({
filePath: e.url,
success: function() {
console.log("saveToPhotoAlbum success");
e.success && e.success();
},
fail: function(t) {
console.log("saveToPhotoAlbum fail:", t);
e.fail && e.fail();
}
});
},
fail: function(e) {
console.log(" authorize fail:", e);
PPSDK.showAlert({
title: "保存失败",
content: "请打开“保存到相册”权限并重试",
confirmText: "去设置",
showCancel: !0,
confirm: function() {
window.qg.openSetting && window.qg.openSetting();
}
});
}
});
};
t.prototype.getShareEnabled = function() {
return !1;
};
return t;
}(e("./BaseAdapter").BaseAdapter);
o.HuaweiAdapter = a;
cc._RF.pop();
}, {
"./BaseAdapter": "BaseAdapter"
} ],
LanguageLabel: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0bc4d2KUgpLTrJGFJytDYVD", "LanguageLabel");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), a = this && this.__decorate || function(e, t, o, i) {
var n, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, o, i); else for (var r = e.length - 1; r >= 0; r--) (n = e[r]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, o, s) : n(t, o)) || s);
return a > 3 && s && Object.defineProperty(t, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, r = (s.ccclass, s.property), c = (s.executeInEditMode, s.disallowMultiple, 
s.requireComponent, s.menu, function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.key = "framework";
t.i18n_string = "";
t.i18n_params = [];
return t;
}
t.prototype.start = function() {
Manager.languageManager.addOrDelLabel(this.key, this, !0);
this.resetValue();
};
Object.defineProperty(t.prototype, "string", {
get: function() {
return this.i18n_string;
},
set: function(e) {
this.i18n_string = e;
this.setEndValue();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "params", {
get: function() {
return this.i18n_params;
},
set: function(e) {
this.i18n_params = e;
this.setEndValue();
},
enumerable: !1,
configurable: !0
});
t.prototype.init = function(e, t) {
this.i18n_string = e;
this.i18n_params = t;
this.setEndValue();
};
t.prototype.setEndValue = function() {
var e = this.getComponent(cc.Label);
cc.isValid(e) && (e.string = Manager.languageManager.getLabel(this.key, this.i18n_string, this.i18n_params));
};
t.prototype.resetValue = function() {
this.string = this.i18n_string;
};
t.prototype.onDestroy = function() {
Manager.languageManager.addOrDelLabel(this.key, this, !1);
};
a([ r({
visible: !1
}) ], t.prototype, "i18n_string", void 0);
a([ r({
visible: !1
}) ], t.prototype, "i18n_params", void 0);
a([ r({
type: cc.String
}) ], t.prototype, "string", null);
a([ r({
type: [ cc.String ]
}) ], t.prototype, "params", null);
return t;
}(cc.Component));
o.default = c;
cc._RF.pop();
}, {} ],
LanguageMgr: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b603aoZ0sJJGJeq/SJujA95", "LanguageMgr");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.LanguagePackage = void 0;
var i = e("../../../config/PPSDK_Config"), n = e("../asset/Resource"), a = function() {
function e(e, t, o) {
this.root = "";
this.language = null;
this.labelArr = [];
this.labelData = null;
this.spriteArr = [];
this.key = e;
this.bundle = t;
this.root = o || "";
}
e.prototype.setLanguage = function(e) {
this.language = e;
this.reloadLabel();
this.reloadSprite();
};
e.prototype.addOrDelLabel = function(e, t) {
if (t) this.labelArr.push(e); else {
var o = this.labelArr.indexOf(e);
-1 !== o && this.labelArr.splice(o, 1);
}
};
e.prototype.getLabel = function(e, t) {
if (!this.labelData) return e;
if (!t) return this.labelData[e] || e;
if (0 === t.length) return this.labelData[e] || e;
for (var o = this.labelData[e] || e, i = 0; i < t.length; i++) {
var n = new RegExp("#" + i, "g");
o = o.replace(n, t[i]);
}
return o;
};
e.prototype.addOrDelSprite = function(e, t) {
if (t) this.spriteArr.push(e); else {
var o = this.spriteArr.indexOf(e);
-1 !== o && this.spriteArr.splice(o, 1);
}
};
e.prototype.getSprite = function(e, t) {
var o = this, i = this.getSpriteURL(e), a = this.bundle;
Manager.cacheManager.getCacheByAsync(i, cc.SpriteFrame, a).then(function(e) {
if (e) {
var s = "framework" == o.bundle, r = new n.Resource.Info();
r.url = i;
r.type = cc.SpriteFrame;
r.data = e;
r.retain = s;
r.bundle = a;
t(e);
} else t(null);
});
};
e.prototype.reloadLabel = function() {
var e = this;
return new Promise(function(t, o) {
Manager.cacheManager.getCacheByAsync(e.getLabelConfigURL(), cc.JsonAsset, e.bundle).then(function(i) {
if (i) {
e.labelData = i.json;
for (var n = 0, a = e.labelArr; n < a.length; n++) a[n].resetValue();
t();
} else o();
});
});
};
e.prototype.reloadSprite = function() {
for (var e = 0, t = this.spriteArr; e < t.length; e++) t[e].resetValue();
};
e.prototype.reloadDirSprites = function() {
var e = this;
return new Promise(function(t) {
Manager.assetManager.loadDir({
bundle: e.bundle,
path: e.getSpriteURL(""),
type: cc.SpriteFrame,
onComplete: function() {
t();
}
});
});
};
e.prototype.getLabelConfigURL = function() {
return this.root + "/" + i.LanguageConfig.GENERAL_LANGUAGE_LABEL_ROOT + "/" + this.language;
};
e.prototype.getSpriteURL = function(e) {
return this.root + "/" + i.LanguageConfig.GENERAL_LANGUAGE_SPRITE_ROOT + "/" + this.language + "/" + e;
};
return e;
}();
o.LanguagePackage = a;
var s = function() {
function e() {
this.logTag = "[LanguageMgr]";
this.packageMap = {};
this.language = null;
}
e.Instance = function() {
return this._instance || (this._instance = new e());
};
e.prototype.checkInit = function() {
this.language || this.setLanguage("en", !0);
};
e.prototype.setLanguage = function(e, t) {
void 0 === t && (t = !1);
if (i.LanguageConfig.ENABLE_CHANGE_LANGUAGE || t) {
if (this.language != e) {
this.language = e;
for (var o in this.packageMap) this.packageMap[o].setLanguage(e);
}
} else Log.w(this.logTag, "配置不允许启动后切换语言");
};
e.prototype.getLanguage = function() {
return this.language;
};
e.prototype.registerLanguage = function(e, t, o) {
if (e in this.packageMap == 0) {
var i = new a(e, t, o);
this.packageMap[e] = i;
}
this.language && this.packageMap[e].setLanguage(this.language);
};
e.prototype.removeLanguage = function(e) {
delete this.packageMap[e];
};
e.prototype.addOrDelLabel = function(e, t, o) {
this.checkPackageExist(e) && this.packageMap[e].addOrDelLabel(t, o);
};
e.prototype.getLabel = function(e, t, o) {
if (this.checkPackageExist(e)) {
this.checkInit();
return this.packageMap[e].getLabel(t, o);
}
return t;
};
e.prototype.addOrDelSprite = function(e, t, o) {
this.checkPackageExist(e) && this.packageMap[e].addOrDelSprite(t, o);
};
e.prototype.getSprite = function(e, t, o) {
if (this.checkPackageExist(e)) {
this.checkInit();
this.packageMap[e].getSprite(t, o);
}
};
e.prototype.reloadLabel = function(e) {
if (this.checkPackageExist(e)) {
this.checkInit();
return this.packageMap[e].reloadLabel();
}
};
e.prototype.reloadSprite = function(e) {
if (this.checkPackageExist(e)) {
this.checkInit();
return this.packageMap[e].reloadDirSprites();
}
};
e.prototype.checkPackageExist = function(e) {
if (e in this.packageMap == 1) return !0;
Log.d(this.logTag, "语言包未注册,新注册语言包" + e);
this.registerLanguage(e, e);
return !0;
};
e._instance = null;
return e;
}();
o.default = s;
cc._RF.pop();
}, {
"../../../config/PPSDK_Config": "PPSDK_Config",
"../asset/Resource": "Resource"
} ],
LanguageSprite: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "56013L7yOdJNprG6xrYCfbC", "LanguageSprite");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), a = this && this.__decorate || function(e, t, o, i) {
var n, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, o, i); else for (var r = e.length - 1; r >= 0; r--) (n = e[r]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, o, s) : n(t, o)) || s);
return a > 3 && s && Object.defineProperty(t, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, r = (s.ccclass, s.property), c = (s.executeInEditMode, s.disallowMultiple, 
s.requireComponent, s.menu, function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.key = "framework";
t.i18n_string = "";
return t;
}
t.prototype.start = function() {
Manager.languageManager.addOrDelSprite(this.key, this, !0);
this.resetValue();
};
Object.defineProperty(t.prototype, "string", {
get: function() {
return this.i18n_string;
},
set: function(e) {
this.i18n_string = e;
var t = this.getComponent(cc.Sprite);
cc.isValid(t) && Manager.languageManager.getSprite(this.key, e, function(e) {
cc.isValid(t) && e && (t.spriteFrame = e);
});
},
enumerable: !1,
configurable: !0
});
t.prototype.resetValue = function() {
if (!this.i18n_string || "" == this.i18n_string) {
var e = this.getComponent(cc.Sprite);
e && e.spriteFrame && (this.i18n_string = e.spriteFrame.name);
}
this.string = this.i18n_string;
};
t.prototype.onDestroy = function() {
Manager.languageManager.addOrDelSprite(this.key, this, !1);
};
a([ r({
visible: !1
}) ], t.prototype, "i18n_string", void 0);
a([ r({
type: cc.String
}) ], t.prototype, "string", null);
return t;
}(cc.Component));
o.default = c;
cc._RF.pop();
}, {} ],
ListenNode: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ee32dx5WhZBgrwB7g7JJzlA", "ListenNode");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), a = this && this.__decorate || function(e, t, o, i) {
var n, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, o, i); else for (var r = e.length - 1; r >= 0; r--) (n = e[r]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, o, s) : n(t, o)) || s);
return a > 3 && s && Object.defineProperty(t, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.ListenNode = void 0;
var s = cc._decorator, r = s.ccclass, c = (s.property, function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.setEvent = function(e) {
this.events = e;
};
t.prototype.onLoad = function() {
this.events && this.events.onLoad && this.events.onLoad();
};
t.prototype.onEnable = function() {
this.events && this.events.onEnable && this.events.onEnable();
};
t.prototype.onDisable = function() {
this.events && this.events.onDisable && this.events.onDisable();
};
t.prototype.onDestroy = function() {
this.events && this.events.onDestroy && this.events.onDestroy();
};
return a([ r ], t);
}(cc.Component));
o.ListenNode = c;
cc._RF.pop();
}, {} ],
LoadTool: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "48994EHua5NAbcPZkqqs3cR", "LoadTool");
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = function() {
function e() {
this.curPercent = 0;
this.totalPercent = 0;
this.curIdx = 0;
this.loadDuration = 2;
this.loadList = [];
this.progressTween = null;
}
e.prototype.initTask = function(e) {
this.onProgressChange = e.onProgressChange;
this.onLoadOver = e.onLoadOver;
"number" == typeof e.loadDuration && (this.loadDuration = e.loadDuration);
};
e.prototype.addTask = function(e) {
this.totalPercent += e.progress;
e.curPercent = this.totalPercent;
this.loadList.push(e);
};
e.prototype.startLoad = function() {
var e = this;
this.loadList.forEach(function(t) {
t.curPercent = t.curPercent / e.totalPercent;
});
this.curIdx = 0;
this.curPercent = 0;
var t = 0, o = function() {
if (e.curIdx >= e.loadList.length) ++t >= 2 && e.onLoadOver && e.onLoadOver(); else {
var i = e.loadList[e.curIdx], n = i.curPercent;
if (n > e.curPercent) {
var a = e.loadDuration;
e.progressTween && e.progressTween.stop();
var s = Math.abs(n - e.curPercent) * a;
e.progressTween = cc.tween(e).to(s, {
curPercent: n
}, {
progress: function(t, o, i, n) {
i = (o - t) * n + t;
e.refreshProgress(i);
return i;
}
}).call(function() {
e.curPercent = n;
e.refreshProgress(e.curPercent);
e.curPercent >= 1 && ++t >= 2 && e.onLoadOver && e.onLoadOver();
e.progressTween = null;
}).start();
}
var r = i.loadAction;
Log.ts(i.desc);
r().then(function() {
Log.te(i.desc);
e.curIdx++;
o();
});
}
};
o();
};
e.prototype.refreshProgress = function(e) {
for (var t = "", o = 0; o < this.loadList.length; o++) if (e <= this.loadList[o].curPercent) {
t = this.loadList[o].desc;
break;
}
var i = {
progress: e,
desc: t
};
this.onProgressChange && this.onProgressChange(i);
};
return e;
}();
o.default = i;
cc._RF.pop();
}, {} ],
LoadingLogo: [ function (require, module, exports) {
cc._RF.push(module, "b9615ppyKBDfpPipqs3VNcF", "LoadingLogo");
exports.default = cc.Class({extends: cc.Component});
cc._RF.pop();
}, {} ],
Loading: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ad01ahQGpRJ8aQ7Bxwo0+i3", "Loading");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), a = this && this.__decorate || function(e, t, o, i) {
var n, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, o, i); else for (var r = e.length - 1; r >= 0; r--) (n = e[r]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, o, s) : n(t, o)) || s);
return a > 3 && s && Object.defineProperty(t, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = e("../../../../config/PPSDK_Config"), r = e("../../../defines/Macros"), c = cc._decorator, l = c.ccclass, d = c.property, u = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.panel = null;
t.loadingIcon = null;
t.label = null;
return t;
}
t.prototype.onLoad = function() {
this._ani();
};
t.prototype.show = function(e) {
this.node.active = !0;
this.label.string = e;
return Promise.resolve();
};
t.prototype.hide = function() {
this.node.active = !1;
return Promise.resolve();
};
t.prototype._ani = function() {
cc.tween(this.loadingIcon).by(3, {
angle: 360
}).repeatForever().start();
};
a([ d(cc.Node) ], t.prototype, "panel", void 0);
a([ d(cc.Node) ], t.prototype, "loadingIcon", void 0);
a([ d(cc.Label) ], t.prototype, "label", void 0);
return a([ l ], t);
}(cc.Component), h = function() {
function e() {
this.logTag = "[Loading]";
this._timeoutCb = null;
this._timeoutId = -1;
}
e.Instance = function() {
return this._instance || (this._instance = new e());
};
e.prototype.loadPrefab = function() {
var e = this;
return new Promise(function(t, o) {
var i = "PPSDK/framework/common/components/loading/loadingNode";
Manager.cacheManager.getCacheByAsync(i, cc.Prefab, r.Macro.BUNDLE_RESOURCES).then(function(n) {
if (n) {
Manager.assetManager.addPersistAsset(i, n, r.Macro.BUNDLE_RESOURCES);
t(n);
e.setPrefab(n, u);
} else {
Log.e(e.logTag, "Loading 预制体加载失败:" + i);
o();
}
});
});
};
e.prototype.setPrefab = function(e, t) {
if (this._getPrefabInfo(e).getComponent(t)) {
this._prefab = e;
this._type = t;
var o = cc.instantiate(this._prefab);
cc.Canvas.instance.node.parent.addChild(o);
cc.game.addPersistRootNode(o);
this._loading = o.getComponent(this._type);
o.active = !1;
} else Log.e(this.logTag, "未挂载" + t.prototype.constructor.name + ",将无法使用，请排查");
};
e.prototype.init = function() {
return s.Config.USE_SYS_LOADING ? this.loadPrefab() : Promise.resolve();
};
e.prototype.show = function(e) {
var t = this;
void 0 === e && (e = {});
if (this._prefab && this._loading) {
this._timeoutCb = e.timeoutCb;
this._showCb = e.showCb;
this._hideCb = e.hideCb;
"undefined" == typeof e.mask && (e.mask = !0);
this._showBlockInput(e.mask);
"number" != typeof e.timeout && (e.timeout = s.Config.LOADING_TIME_OUT);
"undefined" == typeof e.msg && (e.msg = Manager.languageManager.getLabel("framework", "加载中..."));
var o = this._loading.show(e.msg);
if (o instanceof Promise) o.then(function() {
t._showCb && t._showCb();
t._startTimeout(e.timeout);
}); else {
this._showCb && this._showCb();
this._startTimeout(e.timeout);
}
"number" != typeof e.delay && (e.delay = s.Config.LOADING_DELAY);
if (e.delay > 0) {
this._loading.node.opacity = 0;
this._loading.scheduleOnce(function() {
t._loading.node.opacity = 255;
}, e.delay);
}
} else Log.e(this.logTag, "未加载系统Loading组件,msg:" + e.msg);
};
e.prototype.hide = function(e) {
var t = this;
if (this._prefab && this._loading) {
e && (this._hideCb = e);
this._hide().then(function() {
t._hideCb && t._hideCb();
});
} else Log.e(this.logTag, "未加载系统Loading组件");
};
e.prototype._hide = function() {
clearTimeout(this._timeoutId);
this._timeoutId = -1;
var e = this._loading.hide();
return e instanceof Promise ? e : Promise.resolve();
};
e.prototype._startTimeout = function(e) {
var t = this;
e > 0 && (this._timeoutId = setTimeout(function() {
t._timeoutCb && t._timeoutCb();
t._hide();
}, 1e3 * e));
};
e.prototype._showBlockInput = function(e) {
if (!this._blockInput) {
var t = this._loading.getComponent(cc.BlockInputEvents);
t && (this._blockInput = t);
}
if (e) if (this._blockInput) this._blockInput.enabled = !0; else {
this._blockInput = this._loading.addComponent(cc.BlockInputEvents);
this._blockInput.enabled = !0;
} else this._blockInput && (this._blockInput.enabled = !1);
};
e.prototype._getPrefabInfo = function(e) {
return e instanceof cc.Prefab ? e.data : e;
};
e._instance = null;
return e;
}();
o.default = h;
cc._RF.pop();
}, {
"../../../../config/PPSDK_Config": "PPSDK_Config",
"../../../defines/Macros": "Macros"
} ],
LocalManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "05209qeW0NLxJnEWJr+xjD4", "LocalManager");
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("./StorageObj"), n = function() {
function e() {
this.logTag = "[LocalManager]";
this.key = "VuxiAKihQ0VR9WRe";
this.storageMap = new Map();
this.classManager = new a();
}
e.Instance = function() {
return this._instance || (this._instance = new e());
};
e.prototype.register = function(e) {
if (0 == this.storageMap.has(e)) {
var t = new i.StorageObj();
t.setHand(e);
t.setKey(this.key);
this.storageMap.set(e, t);
} else Log.w("存储器[" + e + "]已注册，请检查是否有同名bundle!");
};
e.prototype.setKey = function(e) {
this.key = e;
this.storageMap.forEach(function(t) {
t.setKey(e);
});
};
e.prototype.getStorageObj = function(e) {
if (this.storageMap.has(e)) return this.storageMap.get(e);
this.register(e);
return this.storageMap.get(e);
};
e.prototype.setItem = function(e, t, o) {
this.checkExist(e) && this.storageMap.get(e).setItem(t, o);
};
e.prototype.getItem = function(e, t, o) {
void 0 === o && (o = null);
return this.checkExist(e) ? this.storageMap.get(e).getItem(t, o) : o;
};
e.prototype.removeItem = function(e, t) {
this.checkExist(e) && this.storageMap.get(e).removeItem(t);
};
e.prototype.cleanAll = function() {
localStorage.clear();
};
e.prototype.registerClass = function(e) {
this.classManager.register(e);
};
e.prototype.getStorageClass = function() {
var e = arguments;
if ("string" == typeof e[0]) {
this.checkExist(e[0]);
return this.classManager.getHandlerByKey(e[0], e[1]);
}
this.checkExist(e[0].bundle);
return this.classManager.getHandler(e[0]);
};
e.prototype.checkExist = function(e) {
if (this.storageMap.has(e)) return !0;
this.register(e);
return !0;
};
e._instance = null;
return e;
}();
o.default = n;
var a = function() {
function e() {
this.handlerMap = new Map();
}
e.prototype.register = function(e) {
var t = e.bundle, o = e.key, i = t + "_" + o;
if (this.handlerMap.has(i)) return this.handlerMap.get(i);
var n = new e(t, o);
this.handlerMap.set(i, n);
return n;
};
e.prototype.getHandler = function(e) {
var t = e.bundle + "_" + e.key;
return this.handlerMap.has(t) ? this.handlerMap.get(t) : this.register(e);
};
e.prototype.getHandlerByKey = function(e, t) {
var o = e + "_" + t;
return this.handlerMap.has(o) ? this.handlerMap.get(o) : null;
};
return e;
}();
cc._RF.pop();
}, {
"./StorageObj": "StorageObj"
} ],
Logger: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f4e10qsdIpLs4BnALoVdkb8", "Logger");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.LoggerImpl = o.LogLevel = void 0;
var i;
(function(e) {
e[e.DEBUG = 1] = "DEBUG";
e[e.DUMP = 16] = "DUMP";
e[e.WARN = 256] = "WARN";
e[e.ERROR = 4096] = "ERROR";
e[e.TIME = 65536] = "TIME";
e[e.ALL = 69905] = "ALL";
})(i = o.LogLevel || (o.LogLevel = {}));
var n = function() {
function e() {
this.logger = console;
this._level = i.ALL;
this._timeLogMap = {};
this._timeLogMap = {};
this.update();
}
e.Instance = function() {
return this._instance || (this._instance = new e());
};
Object.defineProperty(e.prototype, "level", {
get: function() {
return this._level;
},
set: function(e) {
this._level = e;
this.update();
},
enumerable: !1,
configurable: !0
});
e.prototype.attach = function(e) {
if (!this.isValid(e)) {
this.level = this.level | e;
this.update();
}
};
e.prototype.detach = function(e) {
if (this.isValid(e)) {
this.level = this.level ^ e;
this.update();
}
};
e.prototype.isValid = function(e) {
return !!(this.level & e);
};
e.prototype.update = function() {
this.isValid(i.DUMP) ? cc.sys.isBrowser ? this.logger.dump = console.log : this.logger.dump = this.dump.bind(this) : this.logger.dump = function() {};
this.isValid(i.ERROR) ? this.logger.e = console.error : this.logger.e = function() {};
this.isValid(i.DEBUG) ? this.logger.d = console.log : this.logger.d = function() {};
this.isValid(i.WARN) ? this.logger.w = console.warn : this.logger.w = function() {};
if (this.isValid(i.TIME)) {
this.logger.ts = this._timeStart.bind(this);
this.logger.te = this._timeEnd.bind(this);
} else {
this.logger.ts = function() {};
this.logger.te = function() {};
}
};
e.prototype._timeStart = function(e) {
this._timeLogMap[e] = Date.now();
};
e.prototype._timeEnd = function(e) {
if (e in this._timeLogMap) {
var t = Date.now() - this._timeLogMap[e];
this.logger.d(e + " use: " + t + "ms");
this._timeLogMap[e] = null;
delete this._timeLogMap[e];
} else this.logger.e("log key:" + e + " is not exsist!");
};
e.prototype.dump = function() {
if (this.isValid(i.DUMP)) {
var e = this._dump(arguments[0], arguments[1], arguments[2], arguments[4]);
this.logger.d(e);
}
};
e.prototype._dump = function(e, t, o, i) {
void 0 === t && (t = "unkown");
void 0 === o && (o = 10);
void 0 === i && (i = 0);
if (o < 0) return "...";
i += 3;
var n = this;
t = "undefined" == typeof t ? "" : t;
var a = "", s = "";
switch (typeof e) {
case "boolean":
a += (s = t.length > 0 ? t + " = " : "") + "Boolean(1) " + (e ? "TRUE" : "FALSE");
break;

case "number":
a += (s = t.length > 0 ? t + " = " : "") + e;
break;

case "string":
a += (s = t.length > 0 ? t + " = " : "") + '"' + e + '"';
break;

case "object":
a += (s = t.length > 0 ? t + " => " : "") + function(e) {
if (null === e) return "NULL(0)";
var t = "", a = 0, s = "";
if (e instanceof Array) {
a = e.length;
for (var r = 0; r < i; ++r) s += " ";
t = "Array(" + a + ") " + (s.length, "") + "[";
for (var c = 0; c < a; ++c) t += "\n" + (0 === s.length ? "" : "" + s) + "   [" + c + "] = " + n._dump(e[c], "", o - 1, i);
return t + "\n" + (0 === s.length ? "" : "" + s) + "]";
}
if (e instanceof Object) {
for (r = 0; r < i; ++r) s += " ";
t = "{";
for (var l in e) t += "\n" + (0 === s.length ? "" : "" + s) + "   [" + l + "] = " + n._dump(e[l], "", o - 1, i);
return t + "\n" + (0 === s.length ? "" : "" + s) + "}";
}
return "Unknown Object Type!";
}(e);
break;

case "function":
a += (s = t.length > 0 ? t + " = " : "") + "Function";
break;

case "undefined":
a += (s = t.length > 0 ? t + " = " : "") + "Undefined";
break;

default:
a += s + " is unknown type!";
}
return a;
};
e._instance = null;
return e;
}();
o.LoggerImpl = n;
cc._RF.pop();
}, {} ],
Login: [ function (require, module, exports) {
cc._RF.push(module, "26da3aK9UNNTbRjMaaQ+pkX", "Login");
exports.default = cc.Class({extends: cc.Component, start: function () { GameOffline.start(); }});
cc._RF.pop();
}, {} ],
Macros: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "63565CnGOZKJ7Aa9AhWsfDZ", "Macros");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Define = o.Macro = void 0;
(function(e) {
e.BUNDLE_RESOURCES = "resources";
e.BUNDLE_HALL = "GameHome";
e.CHANGE_LANGUAGE = "Event_CHANGE_LANGUAGE";
e.CHANGE_MUSIC_EVENT = "CHANGE_MUSIC_EVENT";
e.CHANGE_SFX_EVENT = "CHANGE_SFX_EVENT";
e.CHANGE_VIBRATE_EVENT = "CHANGE_VIBRATE_EVENT";
e.UNKNOWN = "UNKNOWN";
e.BUNDLE_REMOTE = "__Remote__Caches__";
e.ENTER_BACKGROUND = "ENTER_BACKGROUND";
e.ENTER_FORGEGROUND = "ENTER_FORGEGROUND";
})(o.Macro || (o.Macro = {}));
(function(e) {
(function(e) {
e[e.Once = 1] = "Once";
e[e.Normal = 2] = "Normal";
e[e.Frequent = 3] = "Frequent";
})(e.CacheMode || (e.CacheMode = {}));
})(o.Define || (o.Define = {}));
cc._RF.pop();
}, {} ],
MainUpdateHandlerImpl: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5f62cCswQxE+ouDoVyx8cKC", "MainUpdateHandlerImpl");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.MainUpdateHandlerImpl = void 0;
var i = e("../../core/update/UpdateItem"), n = e("../../defines/Macros"), a = e("./HallUpdateHandlerImpl"), s = function() {
function e() {}
e.Instance = function() {
return this._instance || (this._instance = new e());
};
e.prototype.onNewVersionFund = function(e) {
e.doUpdate();
};
e.prototype.onUpdateFailed = function() {};
e.prototype.onPreVersionFailed = function(e) {
e.bundle = n.Macro.BUNDLE_HALL;
e.starScene = "GameHomeScene";
e.name = n.Macro.BUNDLE_HALL;
e.orientation = !0;
Manager.bundleManager.loadBundle(e);
};
e.prototype.onShowUpdating = function() {
cc.find("Loding") && (cc.find("Loding").active = !0);
};
e.prototype.onOther = function() {};
e.prototype.onDownloading = function() {};
e.prototype.onAreadyUpToData = function() {};
e.prototype.onTryDownloadFailedAssets = function(e) {
e.downloadFailedAssets();
};
e.prototype.onStarCheckUpdate = function() {
cc.find("Loding") && (cc.find("Loding").active = !0);
};
e.prototype.onStartLoadBundle = function() {};
e.prototype.onLoadBundleError = function() {};
e.prototype.onLoadBundleComplete = function() {};
e.prototype.onLoadBundle = function() {
Manager.updateManager.dowonLoad(new i.UpdateItem({
name: n.Macro.BUNDLE_HALL,
bundle: n.Macro.BUNDLE_HALL,
starScene: "GameHomeScene",
orientation: !0
}, getSingleton(a.HallUpdateHandlerImpl)));
};
e._instance = null;
return e;
}();
o.MainUpdateHandlerImpl = s;
cc._RF.pop();
}, {
"../../core/update/UpdateItem": "UpdateItem",
"../../defines/Macros": "Macros",
"./HallUpdateHandlerImpl": "HallUpdateHandlerImpl"
} ],
MathExtemtion: [ function(e, t) {
"use strict";
cc._RF.push(t, "e65fcUej0dLn5cFt0vaGyxk", "MathExtemtion");
Math.getRandom = function() {
for (var e = 0, t = 0, o = arguments.length, i = new Array(o), n = 0; n < o; n++) i[n] = arguments[n];
if (1 === i.length && Array.isArray(i[0])) {
e = i[0][0];
t = i[0][1];
} else if (2 === i.length) {
e = i[0];
t = i[1];
}
return Math.random() * (t - e) + e;
};
Math.getRandomInt = function() {
return Math.floor(Math.getRandom.apply(Math, arguments));
};
Math.getRandomBool = function() {
return Math.getRandom(0, 1) > .5;
};
Math.clamp = function(e, t, o) {
return e < t ? t : e > o ? o : e;
};
Math.clamp0_1 = function(e) {
return Math.clamp(e, 0, 1);
};
Math.getNormalValue = function(e) {
return e ? e / Math.abs(e) : 0;
};
Math.generateUUID = function() {
for (var e = [], t = 0; t < 256; t++) e[t] = (t < 16 ? "0" : "") + t.toString(16);
return function() {
var t = 4294967295 * Math.random() | 0, o = 4294967295 * Math.random() | 0, i = 4294967295 * Math.random() | 0, n = 4294967295 * Math.random() | 0;
return (e[255 & t] + e[t >> 8 & 255] + e[t >> 16 & 255] + e[t >> 24 & 255] + "-" + e[255 & o] + e[o >> 8 & 255] + "-" + e[o >> 16 & 15 | 64] + e[o >> 24 & 255] + "-" + e[63 & i | 128] + e[i >> 8 & 255] + "-" + e[i >> 16 & 255] + e[i >> 24 & 255] + e[255 & n] + e[n >> 8 & 255] + e[n >> 16 & 255] + e[n >> 24 & 255]).toUpperCase();
};
}();
cc._RF.pop();
}, {} ],
NativeAdapter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "424a61aJVxEFIOepzcK3T8u", "NativeAdapter");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.NativeAdapter = void 0;
var a = function(e) {
n(t, e);
function t() {
var t = e.call(this) || this;
console.log("Native Adapter init!");
return t;
}
t.prototype.getBasePath = function() {
return jsb.fileUtils.getWritablePath();
};
t.prototype.getFileExist = function(e) {
try {
return jsb.fileUtils.isFileExist(e);
} catch (e) {
console.error(e);
return !1;
}
};
t.prototype.isFile = function() {
return !1;
};
t.prototype.writeFile = function(e) {
try {
var t = e.url.replace(/\\/g, "/").split("/"), o = (t.pop(), t.join("/"));
jsb.fileUtils.isDirectoryExist(o) || jsb.fileUtils.createDirectory(o);
("string" == typeof e.data ? jsb.fileUtils.writeStringToFile(e.data, e.url) : jsb.fileUtils.writeDataToFile(new Uint8Array(e.data), e.url)) ? e.success && e.success() : e.fail && e.fail();
} catch (t) {
e.fail && e.fail();
}
e.complete();
};
t.prototype.deleteFile = function(e) {
try {
jsb.fileUtils.removeFile(e.url);
e.success && e.success();
} catch (t) {
console.log(t);
e.fail && e.fail();
}
e.complete && e.complete();
};
t.prototype.readFile = function(e) {
console.log("readFile:", e.url);
if (this.getFileExist(e.url)) if (e.isString) (t = jsb.fileUtils.getStringFromFile(e.url)) ? e.success && e.success(t) : e.fail && e.fail(); else {
var t;
(t = jsb.fileUtils.getDataFromFile(e.url)) ? e.success && e.success(t) : e.fail && e.fail();
} else {
console.log("is not fileExsit!");
e.fail && e.fail();
}
e.complete && e.complete();
};
t.prototype.getSaveAbulmEnabled = function() {
return !1;
};
t.prototype.saveToPhotoAlbum = function(e) {
e.fail && e.fail();
e.complete && e.complete();
};
t.prototype.getShareEnabled = function() {
return !1;
};
return t;
}(e("./BaseAdapter").BaseAdapter);
o.NativeAdapter = a;
cc._RF.pop();
}, {
"./BaseAdapter": "BaseAdapter"
} ],
NodePoolManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2d13f7UUIRJYJjfHlFhvW7K", "NodePoolManager");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.NodePoolManager = o.NodePool = void 0;
var i = function() {
function e(e) {
this.name = "";
this.prefab = null;
this.pool = null;
this.name = e.name;
this.prefab = e.prefab;
this.pool = new cc.NodePool();
}
e.prototype.create = function(e) {
var t, o = e.count || 0, i = e.prefab || this.prefab;
this.prefab = i;
for (var n = 0; n < o; n++) {
t = cc.instantiate(i);
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
return e;
}();
o.NodePool = i;
var n = function() {
function e() {
this.pools = new Map();
}
e.Instance = function() {
return this._instance || (this._instance = new e());
};
e.prototype.createPool = function(e) {
this.pools.has(e.name) || this.pools.set(e.name, new i(e));
return this.pools.get(e.name);
};
e.prototype.deletePool = function(e) {
if ("string" == typeof e) {
if (this.pools.has(e)) {
this.pools.get(e).clear();
this.pools.delete(e);
}
} else e && e instanceof i && this.deletePool(e.name);
};
e.prototype.getPool = function(e, t, o) {
void 0 === t && (t = !0);
return this.pools.has(e) ? this.pools.get(e) : t ? this.createPool({
name: e,
prefab: o
}) : null;
};
e._instance = null;
return e;
}();
o.NodePoolManager = n;
cc._RF.pop();
}, {} ],
OppoAdapter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "06b33Dv3WtF2oavBRNZxHEr", "OppoAdapter");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.OppoAdapter = void 0;
var a = function(e) {
n(t, e);
function t() {
var t = e.call(this) || this;
console.log("Oppo Adapter init!");
return t;
}
t.prototype.getBasePath = function() {
return jsb.fileUtils.getWritablePath();
};
t.prototype.getFileExist = function(e) {
try {
return window.qg.getFileSystemManager().accessSync(e);
} catch (e) {
console.error(e);
return !1;
}
};
t.prototype.isFile = function(e) {
return window.qg.getFileSystemManager().statSync(e).isFile();
};
t.prototype.writeFile = function(e) {
console.log("writeFile:", e.url);
window.qg.getFileSystemManager().writeFile({
filePath: e.url,
data: e.data,
encoding: "string" == typeof e.data ? "utf8" : "binary",
success: function() {
console.info("writeFile success");
e.success && e.success();
},
fail: function(t) {
console.info("writeFile fail " + t.errMsg), e.fail && e.fail();
},
complete: function() {
e.complete && e.complete();
}
});
};
t.prototype.deleteFile = function(e) {
console.log("deleteFile:", e.url);
window.qg.getFileSystemManager().unlink({
filePath: e.url,
success: function() {
console.log("deleteFile success!");
e.success && e.success();
},
fail: function(t) {
console.log("deleteFile fail:", t);
e.fail && e.fail();
},
complete: function() {
e.complete && e.complete();
}
});
};
t.prototype.readFile = function(e) {
console.log("readFile:", e.url);
window.qg.getFileSystemManager().readFile({
filePath: e.url,
encoding: e.isString ? "utf8" : null,
success: function(t) {
console.info("readFile success " + t.data);
e.success && e.success(t.data);
},
fail: function(t) {
console.info("readFile fail:", t);
e.fail && e.fail();
},
complete: e.complete
});
};
t.prototype.saveImageTemp = function(e) {
window.qg.saveImageTemp(e);
};
t.prototype.getSaveAbulmEnabled = function() {
return !0;
};
t.prototype.saveToPhotoAlbum = function(e) {
console.log("saveToPhotoAlbum");
window.qg.authorize && window.qg.authorize({
scope: "writePhotosAlbum",
success: function(t) {
console.log("authorize success:", t);
window.qg.saveImageToPhotosAlbum({
filePath: e.url,
success: function() {
console.log("saveToPhotoAlbum success");
e.success && e.success();
},
fail: function(t) {
console.log("saveToPhotoAlbum fail:", t);
e.fail && e.fail();
}
});
},
fail: function(e) {
console.log(" authorize fail:", e);
PPSDK.showAlert({
title: "保存失败",
content: "请打开“保存到相册”权限并重试",
confirmText: "去设置",
showCancel: !0,
confirm: function() {
window.qg.openSetting && window.qg.openSetting();
}
});
}
});
};
t.prototype.getShareEnabled = function() {
return !1;
};
return t;
}(e("./BaseAdapter").BaseAdapter);
o.OppoAdapter = a;
cc._RF.pop();
}, {
"./BaseAdapter": "BaseAdapter"
} ],
PPSDK_Config: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8fbedpifl5OeJEu8XwaOOxr", "PPSDK_Config");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.LanguageConfig = o.Config = void 0;
var i = e("../framework/core/log/Logger");
(function(e) {
e.isSkipCheckUpdate = !0;
e.PPSDK_version = "v1.1.5";
e.HOT_UPDATE_URL = "";
e.HOT_UPDATE_URL_VERSION = "";
e.MIAN_PACK_INCLUDE = [ "src", "jsb-adapter", "assets/resources", "assets/main", "assets/internal" ];
e.LogLV = i.LogLevel.ALL;
e.audioPath = {
button: {
path: "PPSDK/config/ButtonClick",
bundle: "resources"
}
};
e.buttonSfx = e.audioPath.button;
e.USE_BUTTON_SFX = !0;
e.LOADING_TIME_OUT = 30;
e.LOADING_DELAY = .1;
e.LOADING_CONTENT_CHANGE_INTERVAL = 3;
e.LOAD_VIEW_TIME_OUT = 20;
e.LOAD_VIEW_DELAY = .1;
e.USE_SYS_TIPS = !0;
e.USE_SYS_ALERT = !0;
e.USE_SYS_LOADING = !0;
e.USE_SYS_UILOADING = !0;
e.IS_SUB_MAIN = function() {
return lieyou_SdkManager.isShenhe();
};
})(o.Config || (o.Config = {}));
(function(e) {
e.ENABLE_CHANGE_LANGUAGE = !0;
e.GENERAL_LANGUAGE_SPRITE_ROOT = "language/sprite";
e.GENERAL_LANGUAGE_LABEL_ROOT = "language/label";
})(o.LanguageConfig || (o.LanguageConfig = {}));
cc._RF.pop();
}, {
"../framework/core/log/Logger": "Logger"
} ],
PopupBase: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a43caMvCdJDOZDBdOzg1bPw", "PopupBase");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), a = this && this.__decorate || function(e, t, o, i) {
var n, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, o, i); else for (var r = e.length - 1; r >= 0; r--) (n = e[r]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, o, s) : n(t, o)) || s);
return a > 3 && s && Object.defineProperty(t, o, s), s;
}, s = this && this.__awaiter || function(e, t, o, i) {
return new (o || (o = Promise))(function(n, a) {
function s(e) {
try {
c(i.next(e));
} catch (e) {
a(e);
}
}
function r(e) {
try {
c(i.throw(e));
} catch (e) {
a(e);
}
}
function c(e) {
e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
e(t);
})).then(s, r);
var t;
}
c((i = i.apply(e, t || [])).next());
});
}, r = this && this.__generator || function(e, t) {
var o, i, n, a, s = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return a = {
next: r(0),
throw: r(1),
return: r(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function r(e) {
return function(t) {
return c([ e, t ]);
};
}
function c(a) {
if (o) throw new TypeError("Generator is already executing.");
for (;s; ) try {
if (o = 1, i && (n = 2 & a[0] ? i.return : a[0] ? i.throw || ((n = i.return) && n.call(i), 
0) : i.next) && !(n = n.call(i, a[1])).done) return n;
(i = 0, n) && (a = [ 2 & a[0], n.value ]);
switch (a[0]) {
case 0:
case 1:
n = a;
break;

case 4:
s.label++;
return {
value: a[1],
done: !1
};

case 5:
s.label++;
i = a[1];
a = [ 0 ];
continue;

case 7:
a = s.ops.pop();
s.trys.pop();
continue;

default:
if (!(n = s.trys, n = n.length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
s = 0;
continue;
}
if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
s.label = a[1];
break;
}
if (6 === a[0] && s.label < n[1]) {
s.label = n[1];
n = a;
break;
}
if (n && s.label < n[2]) {
s.label = n[2];
s.ops.push(a);
break;
}
n[2] && s.ops.pop();
s.trys.pop();
continue;
}
a = t.call(e, s);
} catch (e) {
a = [ 6, e ];
i = 0;
} finally {
o = n = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = e("../../common/components/fit/FitScale"), l = e("./UIView"), d = cc._decorator, u = d.ccclass, h = d.property, g = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bg = null;
t.window = null;
t.autoResize = !0;
t.touchBgClose = !1;
t._blockTop = null;
t._animationDuration = .3;
t.params = {};
t.isHide = !1;
t.bgOpacity = 255;
t.finishCallback = null;
t.destroyCallback = null;
return t;
}
t.prototype.onLoad = function() {
e.prototype.onLoad.call(this);
this.bg && (this.bgOpacity = this.bg.opacity);
this.node.getComponent(cc.BlockInputEvents) || this.node.addComponent(cc.BlockInputEvents);
this.autoResize && this.node.addComponent(c.default).setFit(!0, !1);
this.getComponent(cc.Widget) && this.getComponent(cc.Widget).updateAlignment();
if (this.window && this.window.getComponent(cc.Widget)) {
this.window.getComponent(cc.Widget).updateAlignment();
this.window.getComponent(cc.Widget).enabled = !1;
}
this.touchBgClose && this._addTouchCloseEvent();
};
t.prototype.show = function(e) {
return s(this, void 0, void 0, function() {
return r(this, function(t) {
switch (t.label) {
case 0:
this.args = e;
this.isHide = !1;
this.node.active = !0;
this.init(e);
this.updateDisplay(e);
return this.params && this.params.onBeforeShow ? [ 4, this.params.onBeforeShow() ] : [ 3, 2 ];

case 1:
t.sent();
t.label = 2;

case 2:
return this.onBeforeShow ? [ 4, this.onBeforeShow() ] : [ 3, 4 ];

case 3:
t.sent();
t.label = 4;

case 4:
this.showBlockTop();
return [ 4, this.showAction() ];

case 5:
t.sent();
this.hideBlockTop();
this.params && this.params.onAfterShow && this.params.onAfterShow();
this.onAfterShow && this.onAfterShow();
this.hideBlockTop();
return [ 2 ];
}
});
});
};
t.prototype.hide = function(e, t) {
void 0 === e && (e = !1);
return s(this, void 0, void 0, function() {
var o;
return r(this, function(i) {
switch (i.label) {
case 0:
if (!cc.isValid(this.node)) return [ 2 ];
if (this.isHide) return [ 3, 7 ];
o = this.node;
this.isHide = !0;
return e ? [ 3, 5 ] : this.params && this.params.onBeforHide ? [ 4, this.params.onBeforHide() ] : [ 3, 2 ];

case 1:
i.sent();
i.label = 2;

case 2:
return this.onBeforeHide ? [ 4, this.onBeforeHide() ] : [ 3, 4 ];

case 3:
i.sent();
i.label = 4;

case 4:
i.label = 5;

case 5:
this.showBlockTop();
return [ 4, this.hideAction() ];

case 6:
i.sent();
this.hideBlockTop();
o.active = !1;
if (!e) {
this.params && this.params.onAfterHide && this.params.onAfterHide();
this.onAfterHide && this.onAfterHide();
t && t();
}
this.finishCallback && this.finishCallback(e);
i.label = 7;

case 7:
return [ 2 ];
}
});
});
};
t.prototype.close = function() {
this.hide(!1);
};
t.prototype.hideViewAtonce = function() {
var e = this.node;
this.isHide = !0;
e.active = !1;
};
t.prototype.init = function() {};
t.prototype.updateDisplay = function() {};
t.prototype.showAction = function() {
var e = this;
return new Promise(function(t) {
var o = e.bg, i = e.window;
if (o) {
e.node.active = !0;
o.active = !0;
o.opacity = 0;
cc.tween(o).to(.5 * e._animationDuration, {
opacity: e.bgOpacity
}).start();
}
if (i) {
i.active = !0;
i.scale = .5;
i.opacity = 0;
cc.tween(i).to(e._animationDuration, {
scale: 1,
opacity: 255
}, {
easing: "backOut"
}).call(function() {
t();
}).start();
} else t();
});
};
t.prototype.hideAction = function() {
var e = this;
return new Promise(function(t) {
e.bg && cc.tween(e.bg).delay(.5 * e._animationDuration).to(.5 * e._animationDuration, {
opacity: 0
}).start();
e.window ? cc.tween(e.window).to(e._animationDuration, {
scale: .5,
opacity: 0
}, {
easing: "backIn"
}).call(t).start() : t();
});
};
t.prototype.onBeforeShow = function() {
return Promise.resolve();
};
t.prototype.onAfterShow = function() {};
t.prototype.onBeforeHide = function() {
return new Promise(function(e) {
return e();
});
};
t.prototype.onAfterHide = function() {};
t.prototype.onSuspended = function() {
return new Promise(function(e) {
return e();
});
};
t.prototype.showBlockTop = function() {
if (cc.isValid(this.node)) {
if (!this._blockTop) {
var e = new cc.Node("blockTop");
e.width = cc.winSize.width;
e.height = cc.winSize.height;
this.node.addChild(e);
this._blockTop = e.addComponent(cc.BlockInputEvents);
}
this._blockTop.node.active = !0;
}
};
t.prototype.hideBlockTop = function() {
this._blockTop && (this._blockTop.node.active = !1);
};
t.prototype._addTouchCloseEvent = function() {
var e = this;
this.bg && this.bg.on("touchend", function() {
e.hide();
}, this);
this.window && this.window.on("touchend", function() {});
};
t.prototype.onDestroy = function() {
e.prototype.onDestroy.call(this);
this.destroyCallback && this.destroyCallback();
};
a([ h({
type: cc.Node,
tooltip: "弹窗背景"
}) ], t.prototype, "bg", void 0);
a([ h({
type: cc.Node,
tooltip: "弹窗窗体"
}) ], t.prototype, "window", void 0);
a([ h({
tooltip: "自适应缩放"
}) ], t.prototype, "autoResize", void 0);
a([ h({
tooltip: "点击背景关闭弹窗"
}) ], t.prototype, "touchBgClose", void 0);
return a([ u ], t);
}(l.default);
o.default = g;
cc._RF.pop();
}, {
"../../common/components/fit/FitScale": "FitScale",
"./UIView": "UIView"
} ],
PopupManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ad7f19uqJxJm4AkxaXXUc42", "PopupManager");
var i = this && this.__awaiter || function(e, t, o, i) {
return new (o || (o = Promise))(function(n, a) {
function s(e) {
try {
c(i.next(e));
} catch (e) {
a(e);
}
}
function r(e) {
try {
c(i.throw(e));
} catch (e) {
a(e);
}
}
function c(e) {
e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
e(t);
})).then(s, r);
var t;
}
c((i = i.apply(e, t || [])).next());
});
}, n = this && this.__generator || function(e, t) {
var o, i, n, a, s = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return a = {
next: r(0),
throw: r(1),
return: r(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function r(e) {
return function(t) {
return c([ e, t ]);
};
}
function c(a) {
if (o) throw new TypeError("Generator is already executing.");
for (;s; ) try {
if (o = 1, i && (n = 2 & a[0] ? i.return : a[0] ? i.throw || ((n = i.return) && n.call(i), 
0) : i.next) && !(n = n.call(i, a[1])).done) return n;
(i = 0, n) && (a = [ 2 & a[0], n.value ]);
switch (a[0]) {
case 0:
case 1:
n = a;
break;

case 4:
s.label++;
return {
value: a[1],
done: !1
};

case 5:
s.label++;
i = a[1];
a = [ 0 ];
continue;

case 7:
a = s.ops.pop();
s.trys.pop();
continue;

default:
if (!(n = s.trys, n = n.length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
s = 0;
continue;
}
if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
s.label = a[1];
break;
}
if (6 === a[0] && s.label < n[1]) {
s.label = n[1];
n = a;
break;
}
if (n && s.label < n[2]) {
s.label = n[2];
s.ops.push(a);
break;
}
n[2] && s.ops.pop();
s.trys.pop();
continue;
}
a = t.call(e, s);
} catch (e) {
a = [ 6, e ];
i = 0;
} finally {
o = n = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a, s = e("../../defines/Macros");
(function(e) {
e[e.Done = 1] = "Done";
e[e.Failed = 2] = "Failed";
e[e.Waiting = 3] = "Waiting";
})(a || (a = {}));
var r = function() {
function e() {
this.logTag = "[PopupManager]";
this._nodeCache = new Map();
this._current = null;
this._queue = [];
this._suspended = [];
this.locked = !1;
this.interval = .05;
this.loadStartCallback = function() {};
this.loadFinishCallback = function() {};
}
e.Instance = function() {
return this._instance || (this._instance = new e());
};
Object.defineProperty(e.prototype, "nodeCache", {
get: function() {
return this._nodeCache;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "current", {
get: function() {
return this._current;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "queue", {
get: function() {
return this._queue;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "suspended", {
get: function() {
return this._suspended;
},
enumerable: !1,
configurable: !0
});
e.prototype.show = function(e) {
var t = this;
return new Promise(function(o) {
return i(t, void 0, void 0, function() {
var t, s, r, c = this;
return n(this, function(l) {
switch (l.label) {
case 0:
if (!e) return [ 2, o({
state: a.Failed
}) ];
e = this.parseParams(e);
if (!this._current && !this.locked) return [ 3, 3 ];
if (!e || !e.immediately) return [ 3, 2 ];
this.locked = !1;
return [ 4, this.suspend(e.hideCurrent) ];

case 1:
l.sent();
return [ 3, 3 ];

case 2:
this.push(e);
o({
state: a.Waiting
});
return [ 2 ];

case 3:
this._current = {
params: e
};
t = this.getNodeFromCache(e);
this.loadStartCallback && this.loadStartCallback();
return [ 4, Manager.uiManager.open(e) ];

case 4:
if (!(s = l.sent())) {
Log.w(this.logTag, "未找到弹窗预制体", cc.js.getClassName(e.type));
this.loadFinishCallback && this.loadFinishCallback();
o({
state: a.Failed
});
return [ 2 ];
}
t = s.node;
this.loadFinishCallback && this.loadFinishCallback();
return [ 3, 6 ];

case 5:
t.parent || Manager.uiManager.addView(t);
this.loadFinishCallback && this.loadFinishCallback();
l.label = 6;

case 6:
if (!cc.isValid(t)) {
Log.w(this.logTag, "弹窗已被销毁", cc.js.getClassName(e.type));
this._current = null;
o({
state: a.Failed
});
return [ 2 ];
}
if (!(r = t.getComponent(e.type))) {
Log.w(this.logTag, "未找到弹窗组件", cc.js.getClassName(e.type));
this._current = null;
o({
state: a.Failed
});
return [ 2 ];
}
r.params = e;
this._current.popup = r;
this._current.node = r.node;
r.request = this._current;
t.zIndex = 10 + (e.zIndex || 0);
r.finishCallback = function(o) {
return i(c, void 0, void 0, function() {
var i = this;
return n(this, function(n) {
switch (n.label) {
case 0:
if (o) return [ 2 ];
this.locked = this._suspended.length > 0 || this._queue.length > 0;
this.recycle(e, t, e.mode);
if (this._current != r.request) return [ 3, 2 ];
this._current = null;
return [ 4, new Promise(function(e) {
cc.Canvas.instance.scheduleOnce(e, i.interval);
}) ];

case 1:
n.sent();
this.next();
n.label = 2;

case 2:
return [ 2 ];
}
});
});
};
r.destroyCallback = function() {
var e = c._suspended.indexOf(r.request);
e >= 0 && c._suspended.removeAt(e);
(e = c._queue.indexOf(r.request)) >= 0 && c._queue.removeAt(e);
c._current == r.request && (c._current = null);
};
o({
state: a.Done,
target: r
});
return [ 2 ];
}
});
});
});
};
e.prototype.hide = function(e) {
cc.isValid(this._current.popup) && this._current.popup.hide(!1, e);
};
e.prototype.hideAll = function() {
if (this._current) {
this._current.popup.hide();
this.recycle(this._current.params, this._current.node, this.current.params.mode);
}
for (var e = 0, t = this._suspended; e < t.length; e++) if ((n = t[e]) && n.popup) {
n.popup.hide();
this.recycle(n.params, n.node, n.params.mode);
}
for (var o = 0, i = this._queue; o < i.length; o++) {
var n;
if ((n = i[o]) && n.popup) {
n.popup.hide();
this.recycle(n.params, n.node, n.params.mode);
}
}
this._queue = [];
this._suspended = [];
this._current = null;
this.locked = !1;
};
e.prototype.next = function() {
if (!(this._current || 0 === this._suspended.length && 0 === this._queue.length)) {
var e = null;
e = this._suspended.length > 0 ? this._suspended.shift() : this._queue.shift();
this.locked = !1;
if (cc.isValid(e.popup)) {
this._current = e;
e.node.parent || Manager.uiManager.addView(e.node);
e.popup.isHide && e.popup.show(e.params.args);
} else this.show(e.params);
}
};
e.prototype.recycle = function(e, t, o) {
var i = cc.js.getClassName(e.type);
switch (o) {
case s.Define.CacheMode.Once:
case s.Define.CacheMode.Normal:
this._nodeCache.delete(i);
Manager.uiManager.close(e.type);
break;

case s.Define.CacheMode.Frequent:
t.removeFromParent(!1);
this._nodeCache.set(i, t);
}
};
e.prototype.getNodeFromCache = function(e) {
var t = cc.js.getClassName(e.type), o = this._nodeCache;
if (o.has(t)) {
var i = o.get(t);
if (cc.isValid(i)) return i;
o.delete(t);
}
return null;
};
e.prototype.push = function(e) {
if (this._current || this.locked) {
this._queue.push({
params: e
});
this._queue.sort(function(e, t) {
return e.params.zIndex - t.params.zIndex;
});
} else this.show(e);
};
e.prototype.suspend = function(e) {
return i(this, void 0, void 0, function() {
var t;
return n(this, function(o) {
switch (o.label) {
case 0:
if (!this._current) return [ 2 ];
if (!this._current.popup) {
this._current = null;
return [ 2 ];
}
t = this._current;
this._suspended.push(t);
return [ 4, t.popup.onSuspended() ];

case 1:
o.sent();
return e ? [ 4, t.popup.hide(!0) ] : [ 3, 3 ];

case 2:
o.sent();
o.label = 3;

case 3:
this._current = null;
return [ 2 ];
}
});
});
};
e.prototype.parseParams = function(e) {
null == e.mode && (e.mode = s.Define.CacheMode.Normal);
"undefined" == typeof e.isLazyRelease && (e.mode == s.Define.CacheMode.Once ? e.isLazyRelease = !1 : e.isLazyRelease = !0);
null == e.zIndex && (e.zIndex = 0);
null == e.immediately && (e.immediately = !1);
return e;
};
e._instance = null;
return e;
}();
o.default = r;
cc._RF.pop();
}, {
"../../defines/Macros": "Macros"
} ],
ReleaseManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2c696lUFoRNvLSCAmjqQM9l", "ReleaseManager");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.ReleaseManager = void 0;
var i = e("../../defines/Macros"), n = "[ReleaseManager] : ", a = function() {
function e(e) {
this.name = "";
this._assets = new Map();
this.name = e;
}
e.prototype.add = function(e) {
if (Array.isArray(e.data)) {
Log.d(n + "向" + this.name + "加入待释放目录:" + e.url);
for (var t = 0; t < e.data.length; t++) e.data[t] && e.data[t].addRef();
} else if (e.data) {
Log.d(n + "向" + this.name + "加入待释放资源:" + e.url);
e.data.addRef();
}
this._assets.set(e.url, e);
};
e.prototype.get = function(e) {
var t = this._assets.get(e), o = null;
if (t) if (Array.isArray(t.data)) {
for (var i = 0; i < t.data.length; i++) t.data[i] && t.data[i].decRef();
Log.d(n + "向" + this.name + "获取待释放目录:" + t.url);
o = t.data;
} else if (cc.isValid(t.data)) {
t.data.decRef();
Log.d(n + "向" + this.name + "获取待释放资源:" + t.url);
o = t.data;
}
this._assets.delete(e);
return o;
};
e.prototype.onLowMemory = function() {
var e = this;
if (this._assets.size > 0) {
Log.d(n + "bundle : " + this.name + " 释放加载的资源");
if (this.name == i.Macro.BUNDLE_REMOTE) {
this._assets.forEach(function(t) {
if (t.data instanceof cc.Asset) {
Log.d(n + "bundle : " + e.name + " 释放远程加载资源" + t.url);
cc.assetManager.releaseAsset(t.data);
}
});
this._assets.clear();
return;
}
var t = cc.assetManager.getBundle(this.name);
if (t) {
this._assets.forEach(function(o) {
if (Array.isArray(o.data)) {
Log.d(n + "bundle : " + e.name + " 释放加载目录" + o.url);
for (var i = 0; i < o.data.length; i++) if (o.data[i]) {
o.data[i].decRef();
var a = o.url + "/" + o.data[i].name;
null == t || t.release(a, o.type);
Log.d(n + "bundle : " + e.name + " 释放加载资源" + a);
}
} else if (cc.isValid(o.data)) {
o.data.decRef();
null == t || t.release(o.url, o.type);
Log.d(n + "bundle : " + e.name + " 释放加载资源" + o.url);
}
});
this._assets.clear();
} else {
Log.w(n + "释放bundle : " + this.name + " 时，Bundle已经被释放，直接清空待释放数据");
this._assets.clear();
}
}
};
e.prototype.tryRemove = function(e) {
this.name == e && this.onLowMemory();
};
Object.defineProperty(e.prototype, "assets", {
get: function() {
return this._assets;
},
enumerable: !1,
configurable: !0
});
return e;
}(), s = function() {
function e() {
this._lazyInfos = new Map();
this._bundles = new Map();
this._remote = new a(i.Macro.BUNDLE_REMOTE);
}
e.Instance = function() {
return this._instance || (this._instance = new e());
};
e.prototype.getBundle = function(e) {
return Manager.bundleManager.getBundle(e);
};
e.prototype.getBundleName = function(e) {
return Manager.bundleManager.getBundleName(e);
};
e.prototype.release = function(e) {
var t = this.getBundle(e.bundle);
if (t) if (Manager.isLazyRelease && 0 != e.isLazyRelease) {
var o = t.name, i = void 0;
if (this._lazyInfos.has(o)) i = this._lazyInfos.get(o); else {
i = new a(o);
this._lazyInfos.set(o, i);
}
i && i.add(e);
} else if (Array.isArray(e.data)) {
for (var s = 0; s < e.data.length; s++) {
var r = e.url + "/" + e.data[s].name;
t.release(r, e.type);
}
Log.d(n + "成功释放资源目录 : " + e.bundle + "." + e.url);
} else {
t.release(e.url, e.type);
Log.d(n + "成功释放资源 : " + e.bundle + "." + e.url);
} else Log.e("" + n + e.bundle + " no found");
};
e.prototype.get = function(e, t) {
var o = this.getBundle(e);
if (o) {
var i = this._lazyInfos.get(o.name);
if (i) return i.get(t);
} else {
Log.w("" + n + e + "不存在，删除释放管理器中的缓存");
var a = this.getBundleName(e);
this.onLoadBundle(a);
this._lazyInfos.delete(a);
}
return null;
};
e.prototype.removeBundle = function(e, t) {
void 0 === t && (t = !0);
var o = this.getBundle(e);
if (Manager.isLazyRelease && t) {
if (o) {
Log.d(n + "向释放管理器中添加待释放bundle : " + (null == o ? void 0 : o.name));
this._bundles.set(null == o ? void 0 : o.name, !1);
}
} else {
Log.d(n + "释放Bundle : " + (null == o ? void 0 : o.name));
o && cc.assetManager.removeBundle(o);
}
};
e.prototype.onLoadBundle = function(e) {
this._bundles.delete(e);
};
e.prototype.onLowMemory = function() {
var e = this;
Log.d(n + "------------收到内存警告，释放无用资源------------");
this._lazyInfos.forEach(function(e) {
e.onLowMemory();
});
Log.d(n + "-------------释放无用bundle-------------");
this._bundles.forEach(function(t, o) {
var i = cc.assetManager.getBundle(o);
if (i) {
Log.d("释放无用bundle : " + o);
cc.assetManager.removeBundle(i);
e._bundles.delete(o);
}
});
Log.d(n + "-------------释放无用远程资源-------------");
this._remote.onLowMemory();
};
e.prototype.tryRemoveBundle = function(e) {
Log.d(n + "--------------尝试释放" + e + "加载资源------------");
this._lazyInfos.forEach(function(t) {
t.tryRemove(e);
});
var t = this.getBundleName(e), o = cc.assetManager.getBundle(t);
if (o) {
Log.d("释放无用bundle : " + t);
cc.assetManager.removeBundle(o);
this._bundles.delete(t);
}
};
e.prototype.getRemote = function(e) {
return this._remote.get(e);
};
e.prototype.releaseRemote = function(e) {
Manager.isLazyRelease && 0 != e.isLazyRelease ? this._remote.add(e) : e.data instanceof cc.Asset && cc.assetManager.releaseAsset(e.data);
};
e.prototype.print = function(e) {
var t = [];
this._bundles.forEach(function(e, o) {
t.push(o);
});
e.print({
lazyInfo: this._lazyInfos,
bundles: t,
remote: this._remote
});
};
e._instance = null;
return e;
}();
o.ReleaseManager = s;
cc._RF.pop();
}, {
"../../defines/Macros": "Macros"
} ],
ResourcesLoader: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c4707mI8AhC/LOF8n++4CV4", "ResourcesLoader");
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("./Resource"), n = function() {
function e() {
this._resources = new Map();
this._loadedCount = 0;
this._loadedResource = new Map();
this._isLoading = !1;
this._tag = null;
}
Object.defineProperty(e.prototype, "tag", {
get: function() {
return this._tag;
},
set: function(e) {
this._tag = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "onLoadComplete", {
get: function() {
return this._onLoadComplete;
},
set: function(e) {
this._onLoadComplete = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "onLoadProgress", {
get: function() {
return this._onLoadProgress;
},
set: function(e) {
this._onLoadProgress = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "getLoadResources", {
get: function() {
return this._getLoadResource;
},
set: function(e) {
this._getLoadResource = e;
},
enumerable: !1,
configurable: !0
});
e.prototype.loadResources = function() {
var e = this;
if (this.getLoadResources) {
var t = this.getLoadResources();
if (t) if (t.length <= 0) this.onLoadComplete && this.onLoadComplete(i.Resource.LoaderError.NO_FOUND_LOAD_RESOURCE); else if (this._isLoading) this.onLoadComplete && this.onLoadComplete(i.Resource.LoaderError.LOADING); else if (this._resources.size > 0 && this.isLoadComplete()) {
this.onLoadComplete && this.onLoadComplete(i.Resource.LoaderError.SUCCESS);
this.onLoadResourceComplete();
} else {
this._isLoading = !0;
t.forEach(function(t) {
t.url ? e._resources.set(t.url, t) : t.dir && e._resources.set(t.dir, t);
});
this._loadedCount = 0;
this._resources.forEach(function(t) {
t.dir ? Manager.assetManager.loadDir({
bundle: t.bundle,
path: t.dir,
type: t.type,
onComplete: e._onLoadResourceComplete.bind(e),
isLazyRelease: t.isLazyRelease
}) : Manager.assetManager.load({
bundle: t.bundle,
path: t.url,
type: t.type,
onComplete: e._onLoadResourceComplete.bind(e),
isLazyRelease: t.isLazyRelease
});
});
} else this.onLoadComplete && this.onLoadComplete(i.Resource.LoaderError.NO_FOUND_LOAD_RESOURCE);
} else this.onLoadComplete && this.onLoadComplete(i.Resource.LoaderError.NO_FOUND_LOAD_RESOURCE);
};
e.prototype.unLoadResources = function() {
this._unLoadResources();
};
e.prototype._unLoadResources = function() {
var e = this;
if (this._isLoading || this._resources.size <= 0) this._isLoading && Log.d("resources is loading , waiting for unload!!!"); else {
this._resources.size > 0 && this._resources.forEach(function(t) {
if (t.url) {
if (e._loadedResource.has(t.url)) {
(o = e._loadedResource.get(t.url)) && Manager.assetManager.releaseAsset(o);
e._loadedResource.delete(t.url);
}
} else if (t.dir && e._loadedResource.has(t.dir)) {
var o;
(o = e._loadedResource.get(t.dir)) && Manager.assetManager.releaseAsset(o);
e._loadedResource.delete(t.dir);
}
});
this._isLoading = !1;
this._loadedCount = 0;
this._resources.clear();
}
};
e.prototype._onLoadResourceComplete = function(e) {
this._loadedCount++;
if (this._onLoadProgress) {
this._loadedCount > this._resources.size && (this._loadedCount = this._resources.size);
this._onLoadProgress(this._loadedCount, this._resources.size, e);
}
if (e && (Array.isArray(e.data) || e.data instanceof cc.Asset)) {
var t = new i.Resource.Info();
t.url = e.info.url;
t.type = e.info.type;
t.data = e.data;
t.bundle = e.info.bundle;
t.isLazyRelease = e.info.isLazyRelease;
Manager.assetManager.retainAsset(t);
this._loadedResource.set(t.url, t);
}
this.checkLoadResourceComplete();
};
e.prototype.checkLoadResourceComplete = function() {
if (this.isLoadComplete()) {
this._isLoading = !1;
this.onLoadComplete && this.onLoadComplete(i.Resource.LoaderError.SUCCESS);
this.onLoadResourceComplete();
}
};
e.prototype.onLoadResourceComplete = function() {};
e.prototype.isLoadComplete = function() {
return this._loadedCount >= this._resources.size;
};
return e;
}();
o.default = n;
cc._RF.pop();
}, {
"./Resource": "Resource"
} ],
Resource: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a61b7tuZo5Ld5qtrWlmrlbu", "Resource");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Resource = void 0;
(function(e) {
var t, o;
(function(e) {
e[e.LOADING = 0] = "LOADING";
e[e.NO_FOUND_LOAD_RESOURCE = 1] = "NO_FOUND_LOAD_RESOURCE";
e[e.SUCCESS = 2] = "SUCCESS";
})(e.LoaderError || (e.LoaderError = {}));
(function(e) {
e[e.NONE = 0] = "NONE";
e[e.WAITTING_FOR_RELEASE = 1] = "WAITTING_FOR_RELEASE";
})(t = e.CacheStatus || (e.CacheStatus = {}));
(function(e) {
e[e.Local = 0] = "Local";
e[e.Remote = 1] = "Remote";
})(o = e.Type || (e.Type = {}));
var i = function() {
this.url = "";
this.type = null;
this.data = null;
this.retain = !1;
this.bundle = null;
this.resourceType = o.Local;
};
e.Info = i;
var n = function() {
function e() {
this.isLoaded = !1;
this.data = null;
this.info = new i();
this.status = t.NONE;
this.getCb = [];
this.finishCb = [];
}
e.prototype.doGet = function(e) {
for (var t = 0; t < this.getCb.length; t++) this.getCb[t] && this.getCb[t](e);
this.getCb = [];
};
e.prototype.doFinish = function(e) {
for (var t = 0; t < this.finishCb.length; t++) this.finishCb[t] && this.finishCb[t](e);
this.finishCb = [];
};
Object.defineProperty(e.prototype, "isInvalid", {
get: function() {
return this.isLoaded && this.data && !cc.isValid(this.data);
},
enumerable: !1,
configurable: !0
});
return e;
}();
e.CacheData = n;
})(o.Resource || (o.Resource = {}));
cc._RF.pop();
}, {} ],
SDKAdapter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "04880SEVUNDEbXR2LDs+ws7", "SDKAdapter");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.SDKAdapter = void 0;
var i = e("./BaseAdapter"), n = e("./HuaweiAdapter"), a = e("./NativeAdapter"), s = e("./OppoAdapter"), r = e("./TtAdapter"), c = e("./VivoAdapter"), l = e("./WebAdapter"), d = e("./WechatAdapter"), u = function() {
function e() {
this.init(lieyou_SdkManager.getSysPlatformName());
}
e.Instance = function() {
return this._instance || (this._instance = new e());
};
e.prototype.init = function(e) {
var t = null;
switch (e) {
case "wx":
t = new d.WechatAdapter();
break;

case "oppo":
t = new s.OppoAdapter();
break;

case "vivo":
t = new c.VivoAdapter();
break;

case "native":
t = new a.NativeAdapter();
break;

case "huawei":
t = new n.HuaweiAdapter();
break;

case "tt":
t = new r.TtAdapter();
break;

case "web":
t = new l.WebAdapter();
break;

default:
t = new i.BaseAdapter();
}
t && (this.adapter = t);
};
e.prototype.getAdapter = function() {
return this.adapter;
};
e.prototype.getBasePath = function() {
return this.adapter ? this.adapter.getBasePath() : null;
};
e.prototype.getFileExist = function(e) {
return !!this.adapter && this.adapter.getFileExist(e);
};
e.prototype.isFile = function(e) {
return !!this.adapter && this.adapter.isFile(e);
};
e.prototype.writeFile = function(e) {
this.adapter && this.adapter.writeFile(e);
};
e.prototype.deleteFile = function(e) {
this.adapter && this.adapter.deleteFile(e);
};
e.prototype.readFile = function(e) {
this.adapter && this.adapter.readFile(e);
};
e.prototype.getSaveAbulmEnabled = function() {
return !!this.adapter && this.adapter.getSaveAbulmEnabled();
};
e.prototype.saveToPhotoAlbum = function(e) {
this.adapter && this.adapter.saveToPhotoAlbum(e);
};
e.prototype.getShareEnabled = function() {
return !!this.adapter && this.adapter.getShareEnabled();
};
e.prototype.share = function(e) {
this.adapter && this.adapter.share(e);
};
e.prototype.addGameClubButton = function(e) {
return this.adapter ? this.adapter.addGameClubButton(e) : null;
};
e.prototype.addFeedbackButton = function(e) {
return this.adapter ? this.adapter.addFeedbackButton(e) : null;
};
e.prototype.addShortcutButton = function(e) {
this.adapter && this.adapter.addShortcutButton(e);
};
e.prototype.createAwemeButton = function(e) {
this.adapter && this.adapter.addShortcutButton(e);
};
e._instance = null;
return e;
}();
o.SDKAdapter = u;
cc._RF.pop();
}, {
"./BaseAdapter": "BaseAdapter",
"./HuaweiAdapter": "HuaweiAdapter",
"./NativeAdapter": "NativeAdapter",
"./OppoAdapter": "OppoAdapter",
"./TtAdapter": "TtAdapter",
"./VivoAdapter": "VivoAdapter",
"./WebAdapter": "WebAdapter",
"./WechatAdapter": "WechatAdapter"
} ],
SDKHelper: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "126bbf5YfFA0Y/2oBCHG7oA", "SDKHelper");
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../../defines/Macros"), n = function() {
function e() {
this.logTag = "[SDKHelper]";
this.videoState = !1;
}
e.Instance = function() {
return this._instance || (this._instance = new e());
};
e.prototype.vibrate = function(e) {
void 0 === e && (e = !1);
Manager.settingStorage.vibrateState && (e ? lieyou_SdkManager.vibrateLong() : lieyou_SdkManager.vibrateShort());
};
e.prototype.shareOrVideoCallback = function(e) {
var t = this;
void 0 === e && (e = {});
var o = this.getShareOrViedo();
if (0 === o) e.notExistCall ? e.notExistCall() : Manager.tips.show(Manager.languageManager.getLabel("framework", "暂无视频")); else if (2 == o) {
this.videoState = !0;
window.vivoPlayVDCallBack = function() {
setTimeout(function() {
Manager.eventCenter.emit(i.Macro.CHANGE_MUSIC_EVENT, !0);
}, 100);
t.videoState = !1;
};
lieyou_SdkManager.showRewardedVideoAd(function(t) {
t ? e.success && e.success() : e.fail ? e.fail() : Manager.tips.show(Manager.languageManager.getLabel("framework", "视频播放失败"));
});
}
};
e.prototype.getShareOrViedo = function() {
return lieyou_SdkManager.getHaveVideo() ? 2 : 0;
};
e.prototype.getIsLongPhone = function() {
var e = cc.view.getVisibleSize();
return e.height / e.width > 2 || e.width / e.height > 2;
};
e.prototype.beginLupin = function(e) {
void 0 === e && (e = {});
Log.d(this.logTag, "begin lupin");
var t = e.time || 30;
lieyou_SdkManager.beginLuPing(t, function(t) {
1 === t ? e.success ? e.success() : PPSDK.tips.show(PPSDK.languageManager.getLabel("framework", "分享成功!")) : 2 === t ? e.fail ? e.fail(t) : PPSDK.tips.show(PPSDK.languageManager.getLabel("framework", "录屏时间太短!")) : 0 === t ? e.fail ? e.fail(t) : PPSDK.tips.show(PPSDK.languageManager.getLabel("framework", "分享视频失败!")) : 3 === t && (e.fail ? e.fail(t) : PPSDK.tips.show(PPSDK.languageManager.getLabel("framework", "没有录制视频哦!")));
});
lieyou_SdkManager.instance && (lieyou_SdkManager.instance.stopCanShare = !1);
};
e.prototype.stopLupin = function(e) {
void 0 === e && (e = !1);
Log.d(this.logTag, "stop lupin");
lieyou_SdkManager.stopLuPing(e);
};
e.prototype.pauseLupin = function() {
lieyou_SdkManager.pauseLuPing();
};
e.prototype.resumeLupin = function() {
lieyou_SdkManager.resumeLuPing();
};
e.prototype.shareVideo = function(e) {
var t = this;
e.eventCode && lieyou_SdkManager.gameEvent("share_video_" + e.eventCode);
lieyou_SdkManager.shareVd(function(o) {
Log.d(t.logTag, "shareVdType:", o);
if (1 === o) {
e.eventCode && lieyou_SdkManager.gameEvent("share_video_success_" + e.eventCode);
e.success && e.success();
} else if (2 === o) {
PPSDK.tips.show(PPSDK.languageManager.getLabel("framework", "录屏时间太短!"));
e.fail && e.fail(o);
} else if (0 === o) {
PPSDK.tips.show(PPSDK.languageManager.getLabel("framework", "分享视频失败!"));
e.fail && e.fail(o);
} else if (3 === o) {
PPSDK.tips.show(PPSDK.languageManager.getLabel("framework", "没有录制视频哦!"));
e.fail && e.fail(o);
} else 4 === o && e.close && e.close();
});
};
e.showShareVideoDialog = function(e) {
void 0 === e && (e = {});
lieyou_SdkManager.showShareVideoDialog(function(t) {
1 === t ? e.success ? e.success() : PPSDK.tips.show(PPSDK.languageManager.getLabel("framework", "分享成功!")) : 2 === t ? e.fail ? e.fail(t) : PPSDK.tips.show(PPSDK.languageManager.getLabel("framework", "录屏时间太短!")) : 0 === t ? e.fail ? e.fail(t) : PPSDK.tips.show(PPSDK.languageManager.getLabel("framework", "分享视频失败!")) : 3 === t && (e.fail ? e.fail(t) : PPSDK.tips.show(PPSDK.languageManager.getLabel("framework", "没有录制视频哦!")));
});
};
e._instance = null;
return e;
}();
o.default = n;
cc._RF.pop();
}, {
"../../defines/Macros": "Macros"
} ],
SdkData: [ function (require, module, exports) {
module.exports = window.Userdefault;
}, {} ],
SdkManager: [ function (require, module, exports) {
module.exports = window.lieyou_SdkManager = window.GameOffline.sdk;
}, {} ],
SettingStorage: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "79043BBOZZOqreVnzkMNLrN", "SettingStorage");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../defines/Macros"), s = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
Object.defineProperty(t.prototype, "musicState", {
get: function() {
return this._musicState;
},
set: function(e) {
this._musicState = e;
localStorage.setItem(lieyou.Key_Music, String(e));
Manager.eventCenter.emit(a.Macro.CHANGE_MUSIC_EVENT, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "sfxState", {
get: function() {
return this._sfxState;
},
set: function(e) {
this._sfxState = e;
localStorage.setItem(lieyou.Key_Sound, String(e));
Manager.eventCenter.emit(a.Macro.CHANGE_SFX_EVENT, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "vibrateState", {
get: function() {
return this._vibrateState;
},
set: function(e) {
this._vibrateState = e;
localStorage.setItem(lieyou.Key_Vibrate, String(e));
Manager.eventCenter.emit(a.Macro.CHANGE_VIBRATE_EVENT, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "language", {
get: function() {
return this._language;
},
set: function(e) {
this._language = e;
localStorage.setItem("Key_Language", e);
Manager.eventCenter.emit(a.Macro.CHANGE_LANGUAGE, e);
},
enumerable: !1,
configurable: !0
});
t.prototype.onInit = function() {
var e = localStorage.getItem(lieyou.Key_Music);
this._musicState = !e || "true" == e || "1" == e;
var t = localStorage.getItem(lieyou.Key_Sound);
this._sfxState = !t || "true" == t || "1" == t;
var o = localStorage.getItem(lieyou.Key_Vibrate);
this._vibrateState = !o || "true" == o || "1" == o;
var i = localStorage.getItem("Key_Language");
this._language = i || window.language;
};
return t;
}(e("../StorageClass").StorageClass);
o.default = s;
cc._RF.pop();
}, {
"../../../defines/Macros": "Macros",
"../StorageClass": "StorageClass"
} ],
StorageClass: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "cefa0ZrSg5LAb5Jm9Do6CxX", "StorageClass");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.StorageClass = void 0;
var i = function() {
function e(e, t) {
this._storageData = null;
this.bundle = e;
this.localSaveKey = t;
this.onInit();
}
e.prototype.initStorage = function(e) {
if (e) {
this._storageData = {};
for (var t in e) {
var o = e[t], i = this.getLocalKey(t), n = Manager.localManager.getItem(this.bundle, i, o);
this._storageData[t] = n;
this.mergeProp(t);
}
}
};
e.prototype.getStorage = function(e, t) {
void 0 === t && (t = null);
var o = this.getLocalKey(e);
return e in this._storageData && null != this._storageData[e] ? this._storageData[e] : Manager.localManager.getItem(this.bundle, o, t);
};
e.prototype.setStorage = function(e, t) {
var o = this.getLocalKey(e);
Manager.localManager.setItem(this.bundle, o, t);
this._storageData[e] = t;
};
e.prototype.mergeProp = function(e) {
if (e) if ("undefined" != typeof this._storageData[e]) {
var t = this;
Object.defineProperty(t, e, {
get: function() {
return t.getStorage(e);
},
set: function(o) {
t.setStorage(e, o);
}
});
} else Log.e("数据默认值不可为“undefined”，key:" + e);
};
e.prototype.getLocalKey = function(e) {
return this.localSaveKey + "_" + e;
};
return e;
}();
o.StorageClass = i;
cc._RF.pop();
}, {} ],
StorageObj: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bb09d/CFe1NaZ0xGbh5c8yr", "StorageObj");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.StorageObj = void 0;
var i = e("../plugin/BitEncrypt"), n = function() {
function e() {
this._hand = "";
this._key = "";
this._debugKeys = null;
}
e.prototype.setHand = function(e) {
this._hand = e;
};
e.prototype.setKey = function(e) {
e && (this._key = e);
};
e.prototype.getItem = function(e, t) {
void 0 === t && (t = null);
e = this.getStorageKey(e);
var o = localStorage.getItem(e);
if (o) try {
var i = this.decryption(o), n = JSON.parse(i);
return n.type ? n.value : o;
} catch (t) {
Log.e("StorageGetError! key:" + e, "err:" + t);
return o;
}
return t;
};
e.prototype.setItem = function(e, t) {
e = this.getStorageKey(e);
var o = typeof t;
if ("number" == o || "string" == o || "boolean" == o || "object" == o) {
var i = {
type: o,
value: t
};
try {
var n = this.encrypt(i);
localStorage.setItem(e, n);
} catch (t) {
Log.e("StorageSetError! key:" + e, "err:" + t);
}
} else Log.e("存储数据类型不支持 当前的存储类型: " + o);
};
e.prototype.removeItem = function(e) {
e = this.getStorageKey(e);
localStorage.removeItem(e);
};
e.prototype.getStorageKey = function(e) {
return this._hand ? this._hand + "_" + e : e;
};
e.prototype.encrypt = function(e) {
return this._key ? i.BitEncrypt.encode(JSON.stringify(e), this._key) : JSON.stringify(e);
};
e.prototype.decryption = function(e) {
return this._key ? i.BitEncrypt.decode(e, this._key) : e;
};
return e;
}();
o.StorageObj = n;
cc._RF.pop();
}, {
"../plugin/BitEncrypt": "BitEncrypt"
} ],
StringExtemtion: [ function(e, t) {
"use strict";
cc._RF.push(t, "d54fbXn7C9KsLCcARM0Nx2N", "StringExtemtion");
String.prototype.equals = function(e) {
return this === e;
};
String.prototype.repeatify = function(e) {
for (var t = "", o = 0; o < e; o++) t += this;
return t;
};
String.prototype.firstUpperCase = function() {
return this.substring(0, 1).toUpperCase() + this.substring(1);
};
String.prototype.getStrLength = function() {
for (var e = 0, t = 0; t < this.length; t++) {
var o = this.charCodeAt(t);
o >= 1 && o <= 126 || 65376 <= o && o <= 65439 ? e++ : e += 2;
}
return e;
};
String.format = function() {
for (var e = [], t = 0, o = arguments.length; t < o; t++) e.push(arguments[t]);
var i = e[0];
if ("string" != typeof i) {
EDITOR || error("String.format error,first param is not a string");
return "";
}
e.shift();
Array.isArray(e[0]) && 1 == e.length && (e = e[0]);
return i.replace(/\{(\d+)\}/g, function(t, o) {
return e[o];
});
};
String.hashCode = function(e) {
var t, o = 0;
if (0 === e.length) return o;
for (t = 0; t < e.length; t++) {
o = (o << 5) - o + e.charCodeAt(t);
o |= 0;
}
return o;
};
cc._RF.pop();
}, {} ],
SubGame: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "04392W4SF9J2Zz42hujpIKJ", "SubGame");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.SubGame = void 0;
var i = function() {}, n = function() {
function e() {
this.common = new i();
this.map = {};
}
e.prototype.getName = function() {
return this.curName;
};
e.prototype.setCommon = function(e) {
var t = this;
this.common = e;
var o = e.goHome;
o && (this.common.goHome = function(i, n) {
void 0 === i && (i = {});
void 0 === n && (n = "");
return (t.common.showLoading ? t.common.disableLoading ? Promise.resolve() : t.common.showLoading() : Promise.resolve()).then(function() {
t.common.gameToHomeName = n || t.curName;
i.onShowLoadingEnd && i.onShowLoadingEnd();
return o(i).then(function() {
t.common.mainGroup && lieyou_SdkManager.initPhysics(e.mainGroup);
i.onGoHomeEnd && i.onGoHomeEnd();
return (t.common.hideLoading ? t.common.disableLoading ? Promise.resolve() : t.common.hideLoading() : Promise.resolve()).then(function() {
i.onHideLoadingEnd && i.onHideLoadingEnd();
});
});
});
});
};
e.prototype.getCommon = function() {
return this.common;
};
e.prototype.addSub = function(e) {
this.map[e.name] = e;
};
e.prototype.getSub = function(e) {
return this.map[e];
};
e.prototype.goGame = function(e, t, o, i) {
var n = this;
void 0 === o && (o = {});
void 0 === i && (i = {});
this.curName = e;
var a = this.map[e];
a.group && lieyou_SdkManager.initPhysics(a.group);
var s = !this.getCommon().disableLoading;
return (n.common.showLoading && s ? n.common.showLoading() : Promise.resolve()).then(function() {
i.onShowLoadingEnd && i.onShowLoadingEnd();
return a.goGame(t, o).then(function() {
i.onGoGameEnd && i.onGoGameEnd();
return (n.common.hideLoading && s ? n.common.hideLoading() : Promise.resolve()).then(function() {
i.onHideLoadingEnd && i.onHideLoadingEnd();
});
});
});
};
e.prototype.setLanguage = function(e) {
for (var t in this.map) this.map[t].setLanguage(e);
};
e.prototype.goHome = function(e) {
void 0 === e && (e = {});
return this.getCommon().goHome(e);
};
return e;
}(), a = function() {
function e() {}
e.getSubGameObj = function(e) {
e in this.map == 0 && (this.map[e] = new n());
return this.map[e];
};
e.addSub = function(e, t) {
void 0 === t && (t = "default");
this.getSubGameObj(t).addSub(e);
};
e.getSub = function(e, t) {
void 0 === t && (t = "default");
return this.getSubGameObj(t).getSub(e);
};
e.setCommon = function(e, t) {
void 0 === t && (t = "default");
this.getSubGameObj(t).setCommon(e);
};
e.getCommon = function(e) {
void 0 === e && (e = "default");
return this.getSubGameObj(e).getCommon();
};
e.goGame = function(e, t, o, i, n) {
void 0 === o && (o = {});
void 0 === i && (i = {});
void 0 === n && (n = "default");
this.getSubGameObj(n).goGame(e, t, o, i);
};
e.goHome = function(e, t) {
void 0 === e && (e = {});
void 0 === t && (t = "default");
return this.getSubGameObj(t).goHome(e);
};
e.map = {};
return e;
}();
o.SubGame = a;
cc._RF.pop();
}, {} ],
TestUpdateItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f79c18tRcROWrfFvFeSgi4O", "TestUpdateItem");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.TestUpdateItem = void 0;
var i = e("./Update"), n = function() {
function e(e) {
this.name = "";
this.bundle = "";
this.node = null;
this.orientation = !1;
this.versionNumber = 1;
this.userData = null;
this.assetsManagers = {};
this.mainBundles = [];
this.assetsManager = null;
this.code = i.Update.Code.UNINITED;
this.state = i.Update.State.UNINITED;
this.name = e.name;
this.bundle = e.bundle;
this.versionNumber = e.versionNumber;
this.node = e.node;
this.orientation = e.orientation;
}
Object.defineProperty(e.prototype, "updateName", {
get: function() {
return this.assetsManager.name;
},
enumerable: !1,
configurable: !0
});
e.prototype.convertBundle = function(e) {
return Manager.updateManager.convertBundle(e);
};
e.prototype.getProjectString = function() {
return Manager.updateManager.getProjectString(this.bundle);
};
Object.defineProperty(e.prototype, "storagePath", {
get: function() {
return Manager.updateManager.storagePath;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "hotUpdateUrl", {
get: function() {
return "http://bundle.igame58.com/bundle/2/test/" + this.bundle + "/" + this.versionNumber;
},
enumerable: !1,
configurable: !0
});
e.prototype.getAssetsManager = function(e) {
var t = e.convertBundle(e.bundle);
console.log("Storage path for remote asset : " + this.storagePath);
console.log("hotUpdateUrl path  : " + this.hotUpdateUrl);
console.log(jsb.fileUtils.getSearchPaths());
this.assetsManagers[t] = new i.Update.AssetsManager(t);
this.assetsManagers[t].manager = new jsb.AssetsManager("type." + t, this.storagePath);
this.assetsManagers[t].manager.setPackageUrl(this.hotUpdateUrl);
this.assetsManagers[t].manager.setMainBundles(this.mainBundles);
this.assetsManagers[t].manager.setDownloadAgainZip(.8);
return this.assetsManagers[t];
};
e.prototype.checkBundleUpdate = function(e, t) {
this._callBacksOnDownloadComplete = {
callback: e,
target: t
};
this.assetsManager = this.getAssetsManager(this);
var o = this.getProjectString();
if (o) {
var i = new jsb.Manifest(o, this.storagePath, this.hotUpdateUrl);
console.log(this.bundle + " --存在本地版本控制文件checkUpdate--");
this.assetsManager.manager.loadLocalManifest(i, "");
this._checkUpdate();
} else {
var n = {
version: "0",
bundle: this.convertBundle(this.bundle),
md5: "UNKNOWN"
}, a = JSON.stringify(n);
i = new jsb.Manifest(a, this.storagePath, this.hotUpdateUrl);
console.log(this.bundle + " --checkUpdate--");
console.log(this.bundle + " mainifest content : " + a);
this.assetsManager.manager.loadLocalManifest(i, "");
this._checkUpdate();
}
};
e.prototype._checkUpdate = function() {
console.log(this.bundle + " --checkUpdate--");
if (this.assetsManager.manager.getLocalManifest() && this.assetsManager.manager.getLocalManifest().isLoaded()) if (this.isTryDownloadFailedAssets()) {
console.log(this.bundle + " 之前下载资源未完全下载完成，请尝试重新下载");
this.code = i.Update.Code.UPDATE_FAILED;
this.state = i.Update.State.TRY_DOWNLOAD_FAILED_ASSETS;
} else {
this.assetsManager.manager.setEventCallback(this.checkCb.bind(this));
this.assetsManager.manager.checkUpdate();
} else {
console.log(this.bundle + " Failed to load local manifest ....");
this.code = i.Update.Code.ERROR_DOWNLOAD_MANIFEST;
this.state = i.Update.State.FAIL_TO_UPDATE;
}
};
e.prototype.isTryDownloadFailedAssets = function() {
return this.assetsManager.manager.getState() == i.Update.State.FAIL_TO_UPDATE;
};
e.prototype.checkCb = function(e) {
this.assetsManager.code = e.getEventCode();
console.log(this.bundle + " checkCb event code : " + e.getEventCode() + " state : " + this.assetsManager.manager.getState());
var t = e.getEventCode();
switch (e.getEventCode()) {
case i.Update.Code.ERROR_NO_LOCAL_MANIFEST:
console.log(this.bundle + " No local manifest file found, hot update skipped.");
break;

case i.Update.Code.ERROR_DOWNLOAD_MANIFEST:
case i.Update.Code.ERROR_PARSE_MANIFEST:
console.log(this.bundle + " Fail to download manifest file, hot update skipped.");
break;

case i.Update.Code.ALREADY_UP_TO_DATE:
console.log(this.bundle + " Already up to date with the latest remote version.");
break;

case i.Update.Code.NEW_VERSION_FOUND:
console.log(this.bundle + " New version found, please try to update.");
break;

default:
return;
}
this.assetsManager.code = t;
t == i.Update.Code.NEW_VERSION_FOUND ? this.doUpdate() : t == i.Update.Code.ALREADY_UP_TO_DATE ? this._callBacksOnDownloadComplete && this._callBacksOnDownloadComplete.callback.call(this._callBacksOnDownloadComplete.target) : t == i.Update.Code.ERROR_DOWNLOAD_MANIFEST || t == i.Update.Code.ERROR_NO_LOCAL_MANIFEST || t == i.Update.Code.ERROR_PARSE_MANIFEST || t == i.Update.Code.MAIN_PACK_NEED_UPDATE || i.Update.Code.PRE_VERSIONS_NOT_FOUND;
};
e.prototype.downloadFailedAssets = function() {
this.assetsManager && this.assetsManager.manager.downloadFailedAssets();
};
e.prototype.doUpdate = function() {
console.log(this.bundle + " 即将热更新");
console.log(this.bundle + " 执行更新 ");
this.assetsManager.manager.setEventCallback(this.updateCb.bind(this));
this.assetsManager.manager.update();
};
e.prototype.onDownloading = function(e) {
cc.isValid(this.node) && (this.node.getChildByName("download").getComponent(cc.Sprite).fillRange = 1 - e.progress);
};
e.prototype.updateCb = function(e) {
var t = !1, o = !1;
console.log(this.bundle + " --update cb code : " + e.getEventCode() + " state : " + this.assetsManager.manager.getState());
this.assetsManager.code = e.getEventCode();
switch (this.assetsManager.code) {
case i.Update.Code.ERROR_NO_LOCAL_MANIFEST:
console.log(this.bundle + " No local manifest file found, hot update skipped.");
o = !0;
break;

case i.Update.Code.UPDATE_PROGRESSION:
console.log(this.bundle + " " + e.getDownloadedBytes() + " / " + e.getTotalBytes());
console.log(this.bundle + " " + e.getDownloadedFiles() + " / " + e.getTotalFiles());
console.log(this.bundle + " percent : " + e.getPercent());
console.log(this.bundle + " percent by file : " + e.getPercentByFile());
console.log(this.bundle + " assetId : " + e.getAssetId());
var n = e.getMessage();
n && console.log(this.bundle + " Updated file: " + n);
break;

case i.Update.Code.ERROR_DOWNLOAD_MANIFEST:
case i.Update.Code.ERROR_PARSE_MANIFEST:
console.log(this.bundle + " Fail to download manifest file, hot update skipped.");
o = !0;
break;

case i.Update.Code.ALREADY_UP_TO_DATE:
console.log(this.bundle + " Already up to date with the latest remote version");
o = !0;
break;

case i.Update.Code.UPDATE_FINISHED:
console.log(this.bundle + " Update finished. " + e.getMessage());
t = !0;
break;

case i.Update.Code.UPDATE_FAILED:
console.log(this.bundle + " Update failed. " + e.getMessage());
break;

case i.Update.Code.ERROR_UPDATING:
console.log(this.bundle + " Asset update error: " + e.getAssetId() + " , " + e.getMessage());
break;

case i.Update.Code.ERROR_DECOMPRESS:
console.log(this.bundle + " " + e.getMessage());
}
o && this.assetsManager.manager.setEventCallback(null);
if (t) {
var a = jsb.fileUtils.getSearchPaths(), s = this.assetsManager.manager.getLocalManifest().getSearchPaths();
console.log(JSON.stringify(s));
Array.prototype.unshift.apply(a, s);
for (var r = {}, c = 0; c < a.length; c++) r[a[c]] = !0;
a = Object.keys(r);
cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(a));
jsb.fileUtils.setSearchPaths(a);
}
if (t) {
console.log(this.bundle + " 下载资源数 : " + e.getDownloadedFiles());
jsb.fileUtils.purgeCachedEntries();
Manager.updateManager.restAssetsManager(this.updateName);
}
var l = {
downloadedBytes: e.getDownloadedBytes(),
totalBytes: e.getTotalBytes(),
downloadedFiles: e.getDownloadedFiles(),
totalFiles: e.getTotalFiles(),
percent: e.getPercent(),
percentByFile: e.getPercentByFile(),
code: e.getEventCode(),
state: this.assetsManager.manager.getState(),
needRestart: t,
bundle: this.bundle,
assetId: e.getAssetId(),
progress: 0
};
if (l.code == i.Update.Code.UPDATE_FINISHED) {
l.progress = 1.1;
this.onDownloading(l);
} else if (l.code == i.Update.Code.UPDATE_PROGRESSION) {
l.progress = l.percent == Number.NaN ? 0 : l.percent;
this.onDownloading(l);
} else if (l.code == i.Update.Code.ALREADY_UP_TO_DATE) {
l.progress = 1;
this.onDownloading(l);
} else if (l.code == i.Update.Code.UPDATE_FAILED || l.code == i.Update.Code.ERROR_NO_LOCAL_MANIFEST || l.code == i.Update.Code.ERROR_DOWNLOAD_MANIFEST || l.code == i.Update.Code.ERROR_PARSE_MANIFEST || l.code == i.Update.Code.ERROR_DECOMPRESS) {
l.progress = -1;
console.log("更新" + this.name + "失败");
}
if (t && this._callBacksOnDownloadComplete) {
this._callBacksOnDownloadComplete.callback.call(this._callBacksOnDownloadComplete.target);
console.log("更新" + this.name + "成功");
}
console.log(this.bundle + " update cb  failed : " + o + "  , isRestartApp: " + !1 + " isUpdateFinished : " + t);
};
return e;
}();
o.TestUpdateItem = n;
cc._RF.pop();
}, {
"./Update": "Update"
} ],
Tips: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d325aGrjqNO14F4j8L3d3mB", "Tips");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), a = this && this.__decorate || function(e, t, o, i) {
var n, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, o, i); else for (var r = e.length - 1; r >= 0; r--) (n = e[r]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, o, s) : n(t, o)) || s);
return a > 3 && s && Object.defineProperty(t, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = e("../../../../config/PPSDK_Config"), r = e("../../../defines/Macros"), c = e("../fit/FitScale"), l = cc._decorator, d = l.ccclass, u = l.property, h = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.toastLabel = null;
t.nodeScale = 1;
return t;
}
t.prototype.onLoad = function() {
this.node.addComponent(c.default).setFit(!0, !1);
this.nodeScale = this.node.scale;
};
t.prototype.show = function(e, t) {
this.toastLabel.string = e;
this.node.opacity = 255;
this.node.scale = 0;
var o = this.node.parent.convertToNodeSpaceAR(cc.v2(cc.winSize.width / 2, cc.winSize.height / 2));
this.node.y = o.y - 50;
this.toastLabel.node.color = cc.Color.WHITE;
this.node.stopAllActions();
cc.tween(this.node).to(.2, {
scale: this.nodeScale
}, {
easing: "backOut"
}).call(function() {}).delay(.6).parallel(cc.tween().by(.2, {
position: cc.v3(0, 40, 0)
}), cc.tween().to(.2, {
opacity: 0
})).call(function() {
t();
}).start();
};
a([ u(cc.Label) ], t.prototype, "toastLabel", void 0);
return a([ d ], t);
}(cc.Component), g = function() {
function e() {
this.logTag = "[Tips]";
this._prefab = null;
}
e.Instance = function() {
return this._instance || (this._instance = new e());
};
e.prototype.loadPrefab = function() {
var e = this;
return new Promise(function(t, o) {
var i = "PPSDK/framework/common/components/tips/tips";
Manager.cacheManager.getCacheByAsync(i, cc.Prefab, r.Macro.BUNDLE_RESOURCES).then(function(n) {
if (n) {
Manager.assetManager.addPersistAsset(i, n, r.Macro.BUNDLE_RESOURCES);
e.setPrefab(n, h);
t(n);
} else {
Log.e(e.logTag, "Tips 预制体加载失败:" + i);
o();
}
});
});
};
e.prototype.setPrefab = function(e, t) {
if (this._getPrefabInfo(e).getComponent(t)) {
this._type = t;
this._prefab = e;
} else Log.e(this.logTag, "未挂载" + t.prototype.constructor.name + ",将无法使用，请排查");
};
e.prototype.init = function() {
return s.Config.USE_SYS_TIPS ? this.loadPrefab() : Promise.resolve();
};
e.prototype.show = function(e) {
e && this._show(e);
};
e.prototype._show = function(e) {
if (this._prefab) {
var t = Manager.nodePoolManager.getPool("sys_tips", !0, this._prefab), o = t.get(), i = o.getComponent(this._type);
cc.director.getScene().addChild(o);
o.zIndex = 1100;
i.show(e, function() {
t.put(o);
});
} else Log.e(this.logTag, "未加载系统Tips组件,msg:" + e);
};
e.prototype._getPrefabInfo = function(e) {
return e instanceof cc.Prefab ? e.data : e;
};
e._instance = null;
return e;
}();
o.default = g;
cc._RF.pop();
}, {
"../../../../config/PPSDK_Config": "PPSDK_Config",
"../../../defines/Macros": "Macros",
"../fit/FitScale": "FitScale"
} ],
TtAdapter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "04d41bSn4ZLEadJ5r+SqJ3n", "TtAdapter");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.TtAdapter = void 0;
var a = function(e) {
n(t, e);
function t() {
var t = e.call(this) || this;
console.log("JinRiTouTiao Adapter init!");
return t;
}
t.prototype.getBasePath = function() {
return "ttfile://user/";
};
t.prototype.getFileExist = function(e) {
try {
return window.tt.getFileSystemManager().accessSync(e);
} catch (e) {
console.error(e);
return !1;
}
};
t.prototype.isFile = function(e) {
return window.tt.getFileSystemManager().statSync(e).isFile();
};
t.prototype.writeFile = function(e) {
console.log("tt writeFile:", e.url);
var t = window.tt.getFileSystemManager(), o = function() {
t.writeFile({
filePath: e.url,
data: e.data,
encoding: "string" == typeof e.data ? "utf8" : "binary",
success: function() {
console.info("writeFile success");
e.success && e.success();
},
fail: function(t) {
console.info("writeFile fail " + t.errMsg), e.fail && e.fail();
},
complete: function() {
e.complete && e.complete();
}
});
}, i = e.url.lastIndexOf("/"), n = e.url.substring(0, i);
t.access({
path: n,
success: function() {
o();
},
fail: function() {
try {
t.mkdirSync(n, !0);
o();
} catch (t) {
e.fail && e.fail();
}
}
});
};
t.prototype.deleteFile = function(e) {
console.log("deleteFile:", e.url);
window.tt.getFileSystemManager().unlink({
filePath: e.url,
success: function() {
console.log("deleteFile success!");
e.success && e.success();
},
fail: function(t) {
console.log("deleteFile fail:", t);
e.fail && e.fail();
},
complete: function() {
e.complete && e.complete();
}
});
};
t.prototype.readFile = function(e) {
console.log("readFile:", e.url);
var t = window.tt.getFileSystemManager();
e.isString ? t.readFile({
filePath: e.url,
encoding: "utf-8",
success: function(t) {
console.info("readFile success " + t.data);
e.success && e.success(t.data);
},
fail: function(t) {
console.info("readFile fail:", t);
e.fail && e.fail();
},
complete: e.complete
}) : t.readFile({
filePath: e.url,
success: function(t) {
console.info("readFile success " + t.data);
e.success && e.success(t.data);
},
fail: function(t) {
console.info("readFile fail:", t);
e.fail && e.fail();
},
complete: e.complete
});
};
t.prototype.getSaveAbulmEnabled = function() {
return !0;
};
t.prototype.saveToPhotoAlbum = function(e) {
console.log("saveToPhotoAlbum:", e);
window.tt.authorize && window.tt.authorize({
scope: "scope.album",
success: function(t) {
console.log("authorize success:", t);
window.tt.saveImageToPhotosAlbum({
filePath: e.url,
success: function() {
console.log("saveToPhotoAlbum success");
e.success && e.success();
},
fail: function(t) {
console.log("saveToPhotoAlbum fail:", t);
e.fail && e.fail();
}
});
},
fail: function(t) {
console.log(" authorize fail:", t);
PPSDK.showAlert({
title: "保存失败",
content: "请打开“保存到相册”权限并重试",
confirmText: "去设置",
showCancel: !0,
confirm: function() {
window.tt.openSetting && window.tt.openSetting();
e.fail && e.fail();
}
});
}
});
};
t.prototype.toTempFilePath = function(e) {
if (e.canvas) {
e.x = e.x || 0, e.y = e.y || 0;
e.destWidth = e.destWidth || e.width;
e.destHeight = e.destHeight || e.height;
console.log("tt.toTempFilePath:", e);
var t = e.canvas.toTempFilePathSync(e);
t ? e.success && e.success({
tempFilePath: t
}) : e.fail && e.fail();
}
};
t.prototype.getShareEnabled = function() {
return !0;
};
t.prototype.share = function(e) {
console.log("tt share");
window.tt.shareAppMessage({
title: e.msg,
imageUrl: e.imgURL
});
};
t.prototype.addShortcutButton = function(e) {
if (this.canIUse("addShortcut") && this.canIUse("checkShortcut")) window.tt.checkShortcut({
success: function(t) {
if (t.status && t.status.exsist) {
e.node.active = t.status.needUpdate;
e.node.on("touchend", function() {
window.tt.addShortcut({
success: function() {
e.node.active = !1;
e.success && e.success();
},
fail: function(t) {
e.fail && e.fail({
code: 2,
errMsg: t.errMsg
});
}
});
}, e.node);
} else {
e.node.active = !1;
e.fail && e.fail({
code: 2,
errMsg: "未返回状态"
});
}
},
fail: function(t) {
e.node.active = !1;
e.fail && e.fail({
code: 2,
errMsg: t.errMsg
});
}
}); else {
e.node.active = !1;
e.fail && e.fail({
code: 1,
errMsg: "当前版本不支持"
});
}
};
t.prototype.createAwemeButton = function(e) {
this.canIUse("openAwemeUserProfile") ? PPSDK.localManager.getItem("framework", "framework", !1) ? e.node.active = !1 : e.node.on("touchend", function() {
window.tt.openAwemeUserProfile();
}, e.node) : e.node.active = !1;
};
t.prototype.canIUse = function(e) {
return window.tt.canIUse(e);
};
return t;
}(e("./BaseAdapter").BaseAdapter);
o.TtAdapter = a;
cc._RF.pop();
}, {
"./BaseAdapter": "BaseAdapter"
} ],
UILoading: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f7d67cKD+dOgZ7u7THWLLOY", "UILoading");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), a = this && this.__decorate || function(e, t, o, i) {
var n, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, o, i); else for (var r = e.length - 1; r >= 0; r--) (n = e[r]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, o, s) : n(t, o)) || s);
return a > 3 && s && Object.defineProperty(t, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = e("../../../../config/PPSDK_Config"), r = e("../../../defines/Macros"), c = cc._decorator, l = c.ccclass, d = c.property, u = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.panel = null;
t.bar = null;
t.label = null;
return t;
}
t.prototype.onLoad = function() {
cc.tween(this.bar).by(1, {
angle: -360
}).repeatForever().start();
};
t.prototype.show = function() {
this.node.active = !0;
};
t.prototype.hide = function() {
this.node.active = !1;
};
t.prototype.updateProgress = function(e) {
this.label && (this.label.string = e + "%");
};
a([ d(cc.Node) ], t.prototype, "panel", void 0);
a([ d(cc.Node) ], t.prototype, "bar", void 0);
a([ d(cc.Node) ], t.prototype, "label", void 0);
return a([ l ], t);
}(cc.Component), h = function() {
function e() {
this.logTag = "[UILoading]";
this._timeoutCb = null;
this._timeoutId = -1;
this._uiName = "";
}
e.Instance = function() {
return this._instance || (this._instance = new e());
};
e.prototype.loadPrefab = function() {
var e = this;
return new Promise(function(t, o) {
var i = "PPSDK/framework/common/components/uiLoading/uiLoading";
Manager.cacheManager.getCacheByAsync(i, cc.Prefab, r.Macro.BUNDLE_RESOURCES).then(function(n) {
if (n) {
Manager.assetManager.addPersistAsset(i, n, r.Macro.BUNDLE_RESOURCES);
e.setPrefab(n, u);
t(n);
} else {
Log.e(e.logTag, "UILoading 预制体加载失败:" + i);
o();
}
});
});
};
e.prototype.setPrefab = function(e, t) {
if (this._getPrefabInfo(e).getComponent(t)) {
this._prefab = e;
this._type = t;
} else Log.e(this.logTag, "未挂载" + t.prototype.constructor.name + ",将无法使用，请排查");
};
e.prototype.init = function() {
return s.Config.USE_SYS_UILOADING ? this.loadPrefab() : Promise.resolve();
};
e.prototype.show = function(e) {
var t = this;
void 0 === e && (e = {});
if (this._prefab) {
this._option = e;
this._uiName = e.uiName || "";
if (!this._loading) {
var o = cc.instantiate(this._prefab);
Manager.uiManager.addView(o, 50);
this._loading = o.getComponent(this._type);
}
"number" != typeof e.timeout && (e.timeout = s.Config.LOAD_VIEW_TIME_OUT);
var i = this._loading.show();
if (i instanceof Promise) i.then(function() {
t._showCb && t._showCb();
t._startTimeout(e.timeout);
}); else {
this._showCb && this._showCb();
this._startTimeout(e.timeout);
}
"number" != typeof e.delay && (e.delay = s.Config.LOAD_VIEW_DELAY);
if (e.delay > 0) {
this._loading.node.opacity = 0;
this._loading.scheduleOnce(function() {
t._loading.node.opacity = 255;
}, e.delay);
}
} else Log.e(this.logTag, "未加载系统UILoading组件");
};
e.prototype.hide = function(e) {
var t = this;
if (this._prefab && this._loading) {
e && (this._hideCb = e);
this._hide().then(function() {
t._hideCb && t._hideCb();
});
} else Log.e(this.logTag, "未加载系统Loading组件");
};
e.prototype.close = function() {
clearTimeout(this._timeoutId);
this._timeoutId = -1;
this._loading.node.active = !1;
};
e.prototype.updateProgress = function(e) {
this._loading && this._loading.updateProgress(e);
};
e.prototype._hide = function() {
clearTimeout(this._timeoutId);
this._timeoutId = -1;
var e = this._loading.hide();
return e instanceof Promise ? e : Promise.resolve();
};
e.prototype._startTimeout = function(e) {
var t = this;
e > 0 && (this._timeoutId = setTimeout(function() {
t._timeoutCb ? t._timeoutCb() : Manager.alert.show({
tag: 1001,
title: "加载超时",
content: "加载界面" + (t._uiName ? t._uiName : "") + "超时，请重试",
confirmText: "重试",
showCancel: !0,
confirm: function() {
t.close();
t.show(t._option);
},
cancel: function() {
t.close();
}
});
}, 1e3 * e));
};
e.prototype._getPrefabInfo = function(e) {
return e instanceof cc.Prefab ? e.data : e;
};
e._instance = null;
return e;
}();
o.default = h;
cc._RF.pop();
}, {
"../../../../config/PPSDK_Config": "PPSDK_Config",
"../../../defines/Macros": "Macros"
} ],
UIManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "505819l0+lAMK2iQc9d2xZP", "UIManager");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.UIManager = o.ViewDynamicLoadData = o.ViewStatus = void 0;
var i, n = e("../../defines/Macros"), a = e("../asset/Resource");
(function(e) {
e[e.WAITTING_CLOSE = 0] = "WAITTING_CLOSE";
e[e.WATITING_HIDE = 1] = "WATITING_HIDE";
e[e.WAITTING_NONE = 2] = "WAITTING_NONE";
})(i = o.ViewStatus || (o.ViewStatus = {}));
var s = "DYNAMIC_LOAD_GARBAGE", r = "DYNAMIC_LOAD_RETAIN_MEMORY", c = function() {
function e(e) {
void 0 === e && (e = null);
this.local = new Map();
this.remote = new Map();
this.name = e;
}
e.prototype.addLocal = function(e, t) {
void 0 === t && (t = null);
if (e && e.url) {
this.name == s && Log.e("找不到资源持有者: " + e.url);
if (!this.local.has(e.url)) {
Manager.assetManager.retainAsset(e);
this.local.set(e.url, e);
}
}
};
e.prototype.addRemote = function(e, t) {
void 0 === t && (t = null);
if (e && e.data && !this.remote.has(e.url)) {
this.name == s && Log.e("找不到资源持有者 : " + e.url);
Manager.cacheManager.remoteCaches.retainAsset(e);
this.remote.set(e.url, e);
}
};
e.prototype.clear = function() {
if (this.name == s) {
(this.local.size > 0 || this.remote.size > 0) && Log.e("当前未能释放资源如下:");
if (this.local && this.local.size > 0) {
Log.e("-----------local-----------");
this.local && this.local.forEach(function(e) {
Log.e(e.url);
});
}
if (this.remote && this.remote.size > 0) {
Log.e("-----------remote-----------");
this.remote && this.remote.forEach(function(e) {
Log.e(e.url);
});
}
} else {
if (this.local) {
this.local.forEach(function(e) {
Manager.assetManager.releaseAsset(e);
});
this.local.clear();
}
if (this.remote) {
this.remote.forEach(function(e) {
Manager.cacheManager.remoteCaches.releaseAsset(e);
});
this.remote.clear();
}
}
};
return e;
}();
o.ViewDynamicLoadData = c;
var l = function() {
function e() {
this.isLoaded = !1;
this.status = i.WAITTING_NONE;
this.view = null;
this.finishCb = [];
this.getViewCb = [];
this.isPreload = !1;
this.isPrefab = !0;
this.info = null;
this.viewType = null;
this.bundle = null;
this.loadData = new c();
this.node = null;
}
e.prototype.doGet = function(e) {
for (var t = 0; t < this.getViewCb.length; t++) {
var o = this.getViewCb[t];
o && o(e);
}
this.getViewCb = [];
};
e.prototype.doFinish = function(e) {
for (var t = 0; t < this.finishCb.length; t++) {
var o = this.finishCb[t];
o && o(e);
}
this.finishCb = [];
};
e.prototype.doCallback = function(e, t, o) {
this.doFinish(e, t, o);
this.doGet(e, t, o);
};
return e;
}(), d = function() {
function e() {
this._logTag = "[UIManager]";
this._viewDatas = new Map();
this.garbage = new c(s);
this.retainMemory = new c(r);
this._canvas = null;
this._componentRoot = null;
this._mainController = null;
this._prefabs = null;
}
e.Instance = function() {
return this._instance || (this._instance = new e());
};
e.prototype.getViewData = function(e) {
var t = this.getClassName(e);
if (t) return this._viewDatas.has(t) ? this._viewDatas.get(t) : void 0;
};
e.prototype.getViewType = function(e) {
if (!cc.isValid(e)) return null;
var t = e.className;
if (!t) return null;
var o = this._viewDatas.get(t);
return o ? o.viewType : null;
};
e.prototype.getClassName = function(e) {
if (e) return "string" == typeof e ? e : cc.js.getClassName(e);
};
e.prototype.defaultOpenOption = function(e) {
var t = {
bundle: n.Macro.BUNDLE_RESOURCES,
url: e.url,
delay: e.delay,
name: e.name,
zIndex: 0,
preload: !1,
type: e.type,
args: e.args,
showLoading: e.showLoading,
showUILoading: e.showUILoading,
isLazyRelease: !0
};
null != e.bundle && (t.bundle = e.bundle);
null != e.zIndex && (t.zIndex = e.zIndex);
null != e.preload && (t.preload = e.preload);
null != e.isLazyRelease && (t.isLazyRelease = e.isLazyRelease);
return t;
};
e.prototype.preload = function(e, t, o) {
return this.open({
type: e,
preload: !0,
bundle: t,
url: o
});
};
e.prototype.parsePrefabUrl = function(e) {
return "@" == e[0] ? {
isPrefab: !1,
url: e.substr(1)
} : {
isPrefab: !0,
url: e
};
};
e.prototype.open = function(e) {
var t = this.defaultOpenOption(e);
return this._open(t);
};
e.prototype._open = function(e) {
var t = this;
return new Promise(function(o) {
if (e.type) {
var n = cc.js.getClassName(e.type);
if (t.viewRoot) {
var s = t.getViewData(e.type);
if (s) {
s.isPreload = e.preload;
s.info.isLazyRelease = e.isLazyRelease;
if (s.isLoaded) {
s.status = i.WAITTING_NONE;
if (!e.preload && s.view && cc.isValid(s.node)) {
s.node.zIndex = e.zIndex;
s.node.active = !0;
s.node.parent || t.addView(s.node, e.zIndex);
s.view.params = e;
s.view.show(e.args);
}
o(s.view);
return;
}
s.status = i.WAITTING_NONE;
e.preload || (e.showLoading ? Manager.loading.show() : e.showUILoading && Manager.uiLoading.show({
uiName: e.name,
delay: e.delay
}));
s.finishCb.push(o);
} else {
(s = new l()).loadData.name = n;
var r = e.url || e.type.getPrefabUrl();
if (r) {
var c = t.parsePrefabUrl(r);
s.isPreload = e.preload;
s.isPrefab = c.isPrefab;
s.viewType = e.type;
s.bundle = e.bundle;
t._viewDatas.set(n, s);
if (c.isPrefab) {
var d = null;
if (!e.preload) if (e.showLoading) Manager.loading.show(); else if (e.showUILoading) {
Manager.uiLoading.show({
uiName: e.name,
delay: e.delay
});
d = function(e, t) {
var o = Math.ceil(e / t * 100);
Manager.uiLoading.updateProgress(o);
};
}
t.loadPrefab(e.bundle, r, d).then(function(i) {
s.info = new a.Resource.Info();
s.info.url = r;
s.info.type = cc.Prefab;
s.info.data = i;
s.info.bundle = e.bundle;
"boolean" == typeof e.isLazyRelease && (s.info.isLazyRelease = e.isLazyRelease);
Manager.assetManager.retainAsset(s.info);
t.createNode(s, o, e);
e.showLoading && Manager.loading.hide();
e.showUILoading && Manager.uiLoading.hide();
}).catch(function(i) {
s.isLoaded = !0;
Log.e(i);
t.close(e.type);
s.doCallback(null, n, "打开界面异常");
o(null);
e.name && e.name;
e.showUILoading && Manager.uiLoading.hide();
e.showLoading && Manager.loading.hide();
});
} else {
s.info = new a.Resource.Info();
s.info.url = c.url;
s.info.type = cc.Prefab;
s.info.data = t.getScenePrefab(c.url);
s.info.bundle = e.bundle;
s.info.isLazyRelease = e.isLazyRelease;
t.createNode(s, o, e);
}
} else o(null);
}
} else o(null);
} else o(null);
});
};
e.prototype._addComponent = function(e, t, o) {
if (e) {
var i = this.getClassName(t.viewType), n = e.getComponent(t.viewType);
if (!n && !(n = e.addComponent(t.viewType))) return null;
n.className = i;
n.bundle = o.bundle;
t.view = n;
n.args = o.args;
t.isPreload || this.addView(e, o.zIndex);
return n;
}
return null;
};
e.prototype.createNode = function(e, t, o) {
e.isLoaded = !0;
var n = this.getClassName(e.viewType);
if (e.status != i.WAITTING_CLOSE) {
e.info.data instanceof cc.Node && (e.info.data.active = !1);
var a = cc.instantiate(e.info.data);
a.active = !0;
e.node = a;
var s = this._addComponent(a, e, o);
if (s) if (e.status == i.WATITING_HIDE) {
s.hide();
t(s);
e.doCallback(s, n, "加载完成，但加载过程中被隐藏");
} else {
if (!e.isPreload) {
s.params = o;
s.show(o.args);
}
t(s);
e.doCallback(s, n, "加载完成，回调之前加载中的界面");
} else t(null);
} else {
t(null);
e.doCallback(null, n, "获取界内已经关闭");
}
};
e.prototype.loadPrefab = function(e, t, o) {
return new Promise(function(i, n) {
Manager.assetManager.load({
bundle: e,
path: t,
type: cc.Prefab,
onProgress: o,
onComplete: function(e) {
e && e.data && e.data instanceof cc.Prefab ? i(e.data) : n("加载prefab : " + t + " 失败");
}
});
});
};
Object.defineProperty(e.prototype, "viewRoot", {
get: function() {
return cc.Canvas.instance.node;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "componentRoot", {
get: function() {
this._componentRoot || cc.isValid(this._componentRoot) || (this._componentRoot = cc.find("componentRoot", this.canvas));
return this._componentRoot;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "mainController", {
get: function() {
if (!this._mainController && !cc.isValid(this._mainController)) return this._mainController;
var e = this.canvas;
if (e) {
this._mainController = e.getComponent("MainController");
return this._mainController;
}
return null;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "prefabs", {
get: function() {
this._prefabs || cc.isValid(this._prefabs) || (this._prefabs = cc.find("prefabs", this.canvas));
return this._prefabs;
},
enumerable: !1,
configurable: !0
});
e.prototype.getScenePrefab = function(e) {
return cc.find(e);
};
e.prototype.onLoad = function(e) {
this._canvas = e;
};
Object.defineProperty(e.prototype, "canvas", {
get: function() {
return this._canvas;
},
enumerable: !1,
configurable: !0
});
e.prototype.addView = function(e, t) {
this.viewRoot.addChild(e);
"number" == typeof t && (e.zIndex = t);
};
e.prototype.addLocal = function(e, t) {
if (e) {
var o = this.getViewData(t);
o && o.loadData.addLocal(e, t);
}
};
e.prototype.addRemote = function(e, t) {
if (e) {
var o = this.getViewData(t);
o && o.loadData.addRemote(e, t);
}
};
e.prototype.close = function(e) {
var t = this.getViewData(e);
if (t) {
t.status = i.WAITTING_CLOSE;
if (t.view && cc.isValid(t.node)) {
t.node.removeFromParent();
t.node.destroy();
}
this.onUIDestroy(e);
}
};
e.prototype.onUIDestroy = function(e) {
var t = this.getViewData(e);
if (t) {
var o = this.getClassName(e);
t.loadData.clear();
t.isPrefab;
this._viewDatas.delete(o);
Log.d(this._logTag + " close view : " + o);
}
};
e.prototype.closeExcept = function(e) {
var t = this;
if (null != e && null != e && 0 != e.length) {
for (var o = new Set(), i = 0; i < e.length; i++) o.add(this.getClassName(e[i]));
this._viewDatas.forEach(function(e, i) {
o.has(i) || t.close(i);
});
} else this._viewDatas.forEach(function(e, o) {
t.close(o);
});
};
e.prototype.closeBundleView = function(e) {
var t = this;
this._viewDatas.forEach(function(o, i) {
o.bundle == e && t.close(i);
});
};
e.prototype.hide = function(e) {
var t = this.getViewData(e);
t && (t.isLoaded ? t.view && cc.isValid(t.view.node) && t.view.hide() : t.status = i.WATITING_HIDE);
};
e.prototype.getView = function(e) {
var t = this;
return new Promise(function(o) {
if (null != e && null != e) {
var i = t.getViewData(e);
i ? i.isPreload ? o(null) : i.isLoaded ? o(i.view) : i.getViewCb.push(o) : o(null);
} else o(null);
});
};
e.prototype.checkView = function() {};
e.prototype.isShow = function(e) {
var t = this.getViewData(e);
return !!t && !(!t.isLoaded || t.status != i.WAITTING_NONE || !t.view) && t.view.node.active;
};
e.prototype.addComponent = function(e) {
var t = this.componentRoot;
if (t) {
return t.getComponent(e) || t.addComponent(e);
}
return null;
};
e.prototype.removeComponent = function(e) {
var t = this.componentRoot;
if (t) {
var o = t.getComponent(e);
o && o.destroy();
}
};
e.prototype.print = function(e) {
if (e) {
e.printViews && this._viewDatas.forEach(function(t, o) {
e.printViews && e.printViews(t, o);
});
if (e.printChildren && (i = this.viewRoot)) for (var t = i.children, o = 0; o < t.length; o++) e.printChildren(t[o]);
if (e.printComp) {
var i;
if (i = this.componentRoot) {
var n = i._components;
for (o = 0; o < n.length; o++) e.printComp(n[o]);
}
}
}
};
e._instance = null;
return e;
}();
o.UIManager = d;
cc._RF.pop();
}, {
"../../defines/Macros": "Macros",
"../asset/Resource": "Resource"
} ],
UIView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f172fOXvsZMirG66TR8glCW", "UIView");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), a = this && this.__decorate || function(e, t, o, i) {
var n, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, o, i); else for (var r = e.length - 1; r >= 0; r--) (n = e[r]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, o, s) : n(t, o)) || s);
return a > 3 && s && Object.defineProperty(t, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, c = (s.property, function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._content = null;
t._className = "unknow";
t._bundle = null;
t.params = null;
return t;
}
t.getPrefabUrl = function() {
return "";
};
Object.defineProperty(t.prototype, "args", {
get: function() {
return this._args;
},
set: function(e) {
this._args = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "content", {
get: function() {
return this._content;
},
set: function(e) {
this._content = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "className", {
get: function() {
return this._className;
},
set: function(e) {
this._className = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "bundle", {
get: function() {
return this._bundle;
},
set: function(e) {
this._bundle = e;
},
enumerable: !1,
configurable: !0
});
t.prototype.closeAction = function() {
return Promise.resolve();
};
t.prototype.close = function() {
var e = this;
this.closeAction ? this.closeAction().then(function() {
Manager.uiManager.close(e.className);
}) : Manager.uiManager.close(this.className);
};
t.prototype.showAction = function() {
return Promise.resolve();
};
t.prototype.show = function(e) {
this._args = e;
this.node && (this.node.active = !0);
this.showAction && this.showAction();
};
t.prototype.hideAction = function() {
return Promise.resolve();
};
t.prototype.hide = function() {
var e = this;
this.hideAction ? this.hideAction().then(function() {
e.node && e.node.removeFromParent();
}) : this.node && this.node.removeFromParent();
};
t.prototype.onLoad = function() {
e.prototype.onLoad && e.prototype.onLoad.call(this);
};
t.prototype.onDestroy = function() {
Manager.uiManager.onUIDestroy(this.className);
e.prototype.onLoad && e.prototype.onDestroy.call(this);
};
t.prototype.buttonCallback = function() {};
return a([ r ], t);
}(cc.Component));
o.default = c;
window.UIView = c;
cc._RF.pop();
}, {} ],
UpdateItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7d953mhTWRDmJAA45uTe+Q+", "UpdateItem");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.UpdateItem = o.UpdateHandler = void 0;
var i = e("./Update"), n = function() {
function e() {
this.delegate = null;
}
e.prototype.onNewVersionFund = function(e) {
this.delegate && this.delegate.onNewVersionFund && this.delegate.onNewVersionFund(e);
};
e.prototype.onUpdateFailed = function(e) {
this.delegate && this.delegate.onUpdateFailed && this.delegate.onUpdateFailed(e);
};
e.prototype.onPreVersionFailed = function(e, t) {
this.delegate && this.delegate.onPreVersionFailed && this.delegate.onPreVersionFailed(e, t);
};
e.prototype.onShowUpdating = function(e) {
this.delegate && this.delegate.onShowUpdating && this.delegate.onShowUpdating(e);
};
e.prototype.onNeedUpdateMain = function(e) {
this.delegate && this.delegate.onNeedUpdateMain && this.delegate.onNeedUpdateMain(e);
};
e.prototype.onOther = function(e) {
this.delegate && this.delegate.onOther && this.delegate.onOther(e);
};
e.prototype.onDownloading = function(e, t) {
this.delegate && this.delegate.onDownloading && this.delegate.onDownloading(e, t);
};
e.prototype.onAreadyUpToData = function(e) {
this.delegate && this.delegate.onAreadyUpToData && this.delegate.onAreadyUpToData(e);
};
e.prototype.onDownloadComplete = function(e) {
this.delegate && this.delegate.onDownloadComplete && this.delegate.onDownloadComplete(e);
};
e.prototype.onTryDownloadFailedAssets = function(e) {
this.delegate && this.delegate.onTryDownloadFailedAssets && this.delegate.onTryDownloadFailedAssets(e);
};
e.prototype.onStarCheckUpdate = function(e) {
this.delegate && this.delegate.onStarCheckUpdate && this.delegate.onStarCheckUpdate(e);
};
e.prototype.onStartLoadBundle = function(e) {
this.delegate && this.delegate.onStartLoadBundle && this.delegate.onStartLoadBundle(e);
};
e.prototype.onLoadBundleError = function(e, t) {
this.delegate && this.delegate.onLoadBundleError && this.delegate.onLoadBundleError(e, t);
};
e.prototype.onLoadBundleComplete = function(e) {
this.delegate && this.delegate.onLoadBundleComplete && this.delegate.onLoadBundleComplete(e);
};
e.prototype.onLoadBundle = function(e) {
this.delegate && this.delegate.onLoadBundle && this.delegate.onLoadBundle(e);
};
return e;
}();
o.UpdateHandler = n;
var a = function() {
function e(e, t) {
this.name = "";
this.bundle = "";
this.id = "";
this.handler = new n();
this.starScene = "";
this.node = null;
this.orientation = !1;
this.userData = null;
this.assetsManager = null;
this.code = i.Update.Code.UNINITED;
this.state = i.Update.State.UNINITED;
this.isUpdating = !1;
null != t && (this.handler.delegate = t);
this.name = e.name;
this.bundle = e.bundle;
this.id = e.id;
this.starScene = e.starScene;
this.node = e.node;
this.orientation = e.orientation;
}
Object.defineProperty(e.prototype, "updateName", {
get: function() {
return this.assetsManager.name;
},
enumerable: !1,
configurable: !0
});
e.prototype.convertBundle = function(e) {
return Manager.updateManager.convertBundle(e);
};
e.prototype.getProjectString = function() {
return Manager.updateManager.getProjectString(this.bundle);
};
e.prototype.checkUpdate = function() {
this.handler.onStarCheckUpdate(this);
this.checkBundleUpdate();
};
Object.defineProperty(e.prototype, "isMain", {
get: function() {
return this.assetsManager.name == i.Update.MAIN_PACK;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isGameHome", {
get: function() {
return this.assetsManager.name.indexOf(i.Update.GAME_HOME_PACK) > -1;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "remoteMd5", {
get: function() {
return this.assetsManager.manager.getRemoteManifest().getMd5();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "storagePath", {
get: function() {
return Manager.updateManager.storagePath;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "hotUpdateUrl", {
get: function() {
return Manager.updateManager.hotUpdateUrl;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "hotUpdateUrlVersion", {
get: function() {
return Manager.updateManager.hotUpdateUrlVersion;
},
enumerable: !1,
configurable: !0
});
e.prototype.checkBundleUpdate = function() {
this.assetsManager = Manager.updateManager.getAssetsManager(this);
var e = this.getProjectString();
if (e) {
var t = new jsb.Manifest(e, this.storagePath, this.hotUpdateUrl);
console.log(this.bundle + " --存在本地版本控制文件checkUpdate--");
this.assetsManager.manager.loadLocalManifest(t, "");
this._checkUpdate();
} else {
if (this.isUpdating) {
console.log(this.bundle + " Checking or updating...");
this.handler.onShowUpdating(this);
return;
}
var o = {
version: "0",
bundle: this.convertBundle(this.bundle),
md5: "UNKNOWN"
}, i = JSON.stringify(o);
t = new jsb.Manifest(i, this.storagePath, this.hotUpdateUrl);
console.log(this.bundle + " --checkUpdate--");
console.log(this.bundle + " mainifest content : " + i);
this.assetsManager.manager.loadLocalManifest(t, "");
this._checkUpdate();
}
};
e.prototype._checkUpdate = function() {
console.log(this.bundle + " --checkUpdate--");
if (this.isUpdating) {
console.log(this.bundle + " Checking or updating...");
this.handler.onShowUpdating(this);
} else if (this.assetsManager.manager.getLocalManifest() && this.assetsManager.manager.getLocalManifest().isLoaded()) if (this.isTryDownloadFailedAssets()) {
console.log(this.bundle + " 之前下载资源未完全下载完成，请尝试重新下载");
this.code = i.Update.Code.UPDATE_FAILED;
this.state = i.Update.State.TRY_DOWNLOAD_FAILED_ASSETS;
this.handler.onTryDownloadFailedAssets(this);
} else {
this.isUpdating = !0;
this.assetsManager.manager.setEventCallback(this.checkCb.bind(this));
this.assetsManager.manager.checkUpdate();
} else {
console.log(this.bundle + " Failed to load local manifest ....");
this.code = i.Update.Code.ERROR_DOWNLOAD_MANIFEST;
this.state = i.Update.State.FAIL_TO_UPDATE;
this.handler.onUpdateFailed(this);
}
};
e.prototype.isTryDownloadFailedAssets = function() {
return this.assetsManager.manager.getState() == i.Update.State.FAIL_TO_UPDATE;
};
e.prototype.checkCb = function(e) {
this.assetsManager.code = e.getEventCode();
console.log(this.bundle + " checkCb event code : " + e.getEventCode() + " state : " + this.assetsManager.manager.getState());
var t = e.getEventCode();
switch (e.getEventCode()) {
case i.Update.Code.ERROR_NO_LOCAL_MANIFEST:
console.log(this.bundle + " No local manifest file found, hot update skipped.");
break;

case i.Update.Code.ERROR_DOWNLOAD_MANIFEST:
case i.Update.Code.ERROR_PARSE_MANIFEST:
console.log(this.bundle + " Fail to download manifest file, hot update skipped.");
break;

case i.Update.Code.ALREADY_UP_TO_DATE:
console.log(this.bundle + " Already up to date with the latest remote version.");
this.isGameHome && Manager.updateManager.savePreVersions();
break;

case i.Update.Code.NEW_VERSION_FOUND:
console.log(this.bundle + " New version found, please try to update.");
this.isGameHome || (t = Manager.updateManager.checkAllowUpdate(this, t));
break;

default:
return;
}
this.isUpdating = !1;
this.assetsManager.code = t;
t == i.Update.Code.NEW_VERSION_FOUND ? this.handler.onNewVersionFund(this) : t == i.Update.Code.ALREADY_UP_TO_DATE ? this.handler.onAreadyUpToData(this) : t == i.Update.Code.ERROR_DOWNLOAD_MANIFEST || t == i.Update.Code.ERROR_NO_LOCAL_MANIFEST || t == i.Update.Code.ERROR_PARSE_MANIFEST ? this.handler.onUpdateFailed(this) : t == i.Update.Code.MAIN_PACK_NEED_UPDATE || t == i.Update.Code.PRE_VERSIONS_NOT_FOUND ? this.handler.onNeedUpdateMain(this) : this.handler.onOther(this);
};
e.prototype.downloadFailedAssets = function() {
this.assetsManager && this.assetsManager.manager.downloadFailedAssets();
};
e.prototype.doUpdate = function() {
console.log(this.bundle + " 即将热更新, updating : " + this.isUpdating);
if (!this.isUpdating) {
console.log(this.bundle + " 执行更新 ");
this.assetsManager.manager.setEventCallback(this.updateCb.bind(this));
this.assetsManager.manager.update();
}
};
e.prototype.updateCb = function(e) {
var t = !1, o = !1;
console.log(this.bundle + " --update cb code : " + e.getEventCode() + " state : " + this.assetsManager.manager.getState());
this.assetsManager.code = e.getEventCode();
switch (this.assetsManager.code) {
case i.Update.Code.ERROR_NO_LOCAL_MANIFEST:
console.log(this.bundle + " No local manifest file found, hot update skipped.");
o = !0;
break;

case i.Update.Code.UPDATE_PROGRESSION:
console.log(this.bundle + " " + e.getDownloadedBytes() + " / " + e.getTotalBytes());
console.log(this.bundle + " " + e.getDownloadedFiles() + " / " + e.getTotalFiles());
console.log(this.bundle + " percent : " + e.getPercent());
console.log(this.bundle + " percent by file : " + e.getPercentByFile());
console.log(this.bundle + " assetId : " + e.getAssetId());
var n = e.getMessage();
n && console.log(this.bundle + " Updated file: " + n);
break;

case i.Update.Code.ERROR_DOWNLOAD_MANIFEST:
case i.Update.Code.ERROR_PARSE_MANIFEST:
console.log(this.bundle + " Fail to download manifest file, hot update skipped.");
o = !0;
break;

case i.Update.Code.ALREADY_UP_TO_DATE:
console.log(this.bundle + " Already up to date with the latest remote version");
o = !0;
this.isGameHome && Manager.updateManager.savePreVersions();
break;

case i.Update.Code.UPDATE_FINISHED:
console.log(this.bundle + " Update finished. " + e.getMessage());
t = !0;
this.isGameHome && Manager.updateManager.savePreVersions();
break;

case i.Update.Code.UPDATE_FAILED:
console.log(this.bundle + " Update failed. " + e.getMessage());
break;

case i.Update.Code.ERROR_UPDATING:
console.log(this.bundle + " Asset update error: " + e.getAssetId() + " , " + e.getMessage());
break;

case i.Update.Code.ERROR_DECOMPRESS:
console.log(this.bundle + " " + e.getMessage());
}
o && this.assetsManager.manager.setEventCallback(null);
if (t) {
var a = jsb.fileUtils.getSearchPaths(), s = this.assetsManager.manager.getLocalManifest().getSearchPaths();
console.log(JSON.stringify(s));
Array.prototype.unshift.apply(a, s);
for (var r = {}, c = 0; c < a.length; c++) r[a[c]] = !0;
a = Object.keys(r);
cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(a));
jsb.fileUtils.setSearchPaths(a);
}
var l = !1;
if (this.isMain) {
if (t) {
this.assetsManager.manager.setEventCallback(null);
if (e.getDownloadedFiles() > 0) {
console.log(this.bundle + " 主包更新完成，有下载文件，需要重启更新");
cc.game.restart();
l = !0;
} else {
console.log(this.bundle + " 主包更新完成，写入远程版本信息到本地");
jsb.fileUtils.purgeCachedEntries();
Manager.updateManager.restAssetsManager(this.updateName);
}
}
} else if (t) {
console.log(this.bundle + " 下载资源数 : " + e.getDownloadedFiles());
jsb.fileUtils.purgeCachedEntries();
Manager.updateManager.restAssetsManager(this.updateName);
}
this.assetsManager.code != i.Update.Code.UPDATE_PROGRESSION && (this.isUpdating = !1);
var d = {
downloadedBytes: e.getDownloadedBytes(),
totalBytes: e.getTotalBytes(),
downloadedFiles: e.getDownloadedFiles(),
totalFiles: e.getTotalFiles(),
percent: e.getPercent(),
percentByFile: e.getPercentByFile(),
code: e.getEventCode(),
state: this.assetsManager.manager.getState(),
needRestart: t,
bundle: this.bundle,
assetId: e.getAssetId(),
progress: 0
};
if (d.code == i.Update.Code.UPDATE_FINISHED) {
d.progress = 1.1;
this.handler.onDownloading(this, d);
} else if (d.code == i.Update.Code.UPDATE_PROGRESSION) {
d.progress = d.percent == Number.NaN ? 0 : d.percent;
this.handler.onDownloading(this, d);
} else if (d.code == i.Update.Code.ALREADY_UP_TO_DATE) {
d.progress = 1;
this.handler.onDownloading(this, d);
} else if (d.code == i.Update.Code.UPDATE_FAILED || d.code == i.Update.Code.ERROR_NO_LOCAL_MANIFEST || d.code == i.Update.Code.ERROR_DOWNLOAD_MANIFEST || d.code == i.Update.Code.ERROR_PARSE_MANIFEST || d.code == i.Update.Code.ERROR_DECOMPRESS) {
d.progress = -1;
console.log("更新" + this.name + "失败");
this.handler.onUpdateFailed(this);
}
if (t && !l) {
this.handler.onDownloadComplete(this);
console.log("更新" + this.name + "成功");
}
console.log(this.bundle + " update cb  failed : " + o + "  , isRestartApp: " + l + " isUpdateFinished : " + t + " , updating : " + this.isUpdating);
};
return e;
}();
o.UpdateItem = a;
cc._RF.pop();
}, {
"./Update": "Update"
} ],
UpdateManager: [ function (require, module, exports) {
function UpdateManager() { this.isSkipCheckUpdate = true; }
UpdateManager.Instance = function () { return this._instance || (this._instance = new UpdateManager()); };
UpdateManager.prototype.getStatus = function () { return 3; };
UpdateManager.prototype.convertBundle = function (name) { return name; };
UpdateManager.prototype.loadBundle = function (data) { return PPSDK.bundleManager.loadBundle(data); };
exports.UpdateManager = UpdateManager;
}, {} ],
Update: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "97b39HmANRGlKWepYtdAr+F", "Update");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Update = void 0;
(function(e) {
e.MAIN_PACK = "main";
e.GAME_HOME_PACK = "GameHome";
e.MANIFEST_ROOT = "manifest/";
(function(e) {
e[e.ERROR_NO_LOCAL_MANIFEST = 0] = "ERROR_NO_LOCAL_MANIFEST";
e[e.ERROR_DOWNLOAD_MANIFEST = 1] = "ERROR_DOWNLOAD_MANIFEST";
e[e.ERROR_PARSE_MANIFEST = 2] = "ERROR_PARSE_MANIFEST";
e[e.NEW_VERSION_FOUND = 3] = "NEW_VERSION_FOUND";
e[e.ALREADY_UP_TO_DATE = 4] = "ALREADY_UP_TO_DATE";
e[e.UPDATE_PROGRESSION = 5] = "UPDATE_PROGRESSION";
e[e.ASSET_UPDATED = 6] = "ASSET_UPDATED";
e[e.ERROR_UPDATING = 7] = "ERROR_UPDATING";
e[e.UPDATE_FINISHED = 8] = "UPDATE_FINISHED";
e[e.UPDATE_FAILED = 9] = "UPDATE_FAILED";
e[e.ERROR_DECOMPRESS = 10] = "ERROR_DECOMPRESS";
e[e.MAIN_PACK_NEED_UPDATE = 11] = "MAIN_PACK_NEED_UPDATE";
e[e.PRE_VERSIONS_NOT_FOUND = 12] = "PRE_VERSIONS_NOT_FOUND";
e[e.UNINITED = 13] = "UNINITED";
})(e.Code || (e.Code = {}));
(function(e) {
e[e.UNINITED = 0] = "UNINITED";
e[e.UNCHECKED = 1] = "UNCHECKED";
e[e.PREDOWNLOAD_VERSION = 2] = "PREDOWNLOAD_VERSION";
e[e.DOWNLOADING_VERSION = 3] = "DOWNLOADING_VERSION";
e[e.VERSION_LOADED = 4] = "VERSION_LOADED";
e[e.PREDOWNLOAD_MANIFEST = 5] = "PREDOWNLOAD_MANIFEST";
e[e.DOWNLOADING_MANIFEST = 6] = "DOWNLOADING_MANIFEST";
e[e.MANIFEST_LOADED = 7] = "MANIFEST_LOADED";
e[e.NEED_UPDATE = 8] = "NEED_UPDATE";
e[e.READY_TO_UPDATE = 9] = "READY_TO_UPDATE";
e[e.UPDATING = 10] = "UPDATING";
e[e.UNZIPPING = 11] = "UNZIPPING";
e[e.UP_TO_DATE = 12] = "UP_TO_DATE";
e[e.FAIL_TO_UPDATE = 13] = "FAIL_TO_UPDATE";
e[e.TRY_DOWNLOAD_FAILED_ASSETS = 14] = "TRY_DOWNLOAD_FAILED_ASSETS";
})(e.State || (e.State = {}));
(function(e) {
e[e.NEED_DOWNLOAD = 0] = "NEED_DOWNLOAD";
e[e.UP_TO_DATE = 1] = "UP_TO_DATE";
e[e.NEED_UPDATE = 2] = "NEED_UPDATE";
})(e.Status || (e.Status = {}));
var t = function() {
function e(e) {
this.code = -1;
this.name = "";
this.manager = null;
this.name = e;
}
e.prototype.reset = function() {
this.manager.reset();
};
return e;
}();
e.AssetsManager = t;
})(o.Update || (o.Update = {}));
cc._RF.pop();
}, {} ],
Utils: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "974bdDmJTZPM7I4EkRCLraR", "Utils");
var i = this && this.__spreadArrays || function() {
for (var e = 0, t = 0, o = arguments.length; t < o; t++) e += arguments[t].length;
var i = Array(e), n = 0;
for (t = 0; t < o; t++) for (var a = arguments[t], s = 0, r = a.length; s < r; s++, 
n++) i[n] = a[s];
return i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Utils = void 0;
var n = e("./LoadTool");
(function(e) {
e.creatLoadTool = function() {
return new n.default();
};
var t = [];
e.doSomeThingByInterval = function(e, o) {
if (t[o]) {
if (Date.now() - t[o] >= e) {
o();
t[o] = Date.now();
}
} else {
o();
t[o] = Date.now();
}
};
e.getNodePos = function(e, t) {
var o = e.parent.convertToWorldSpaceAR(e.position);
return t.convertToNodeSpaceAR(o);
};
e.convertNodeRect = function(e) {
var t = e.parent.convertToWorldSpaceAR(e.position), o = cc.view.getVisibleSize(), i = cc.view.getCanvasSize(), n = t.x - e.width * e.anchorX * e.scaleX, a = o.height - t.y - e.height * (1 - e.anchorY) * e.scaleY, s = i.width / o.width, r = i.height / o.height;
return {
left: n * s,
top: a * r,
width: e.width * e.scaleX * s,
height: e.height * e.scaleY * r
};
};
e.shallowCopy = function(e) {
var t = {};
for (var o in e) t[o] = e[o];
return t;
};
e.isFloatEqual = function(e, t) {
return Math.abs(e - t) < .01;
};
e.formateNum = function(e) {
return (e = String(e)).replace(/(?=(?!\b)(\d{3})+$)/g, ",");
};
e.padding = function(e, t) {
void 0 === t && (t = 2);
return (Array(t).join("0") + e).slice(-t);
};
function o(e) {
var t = [], o = Promise.resolve();
e.forEach(function(e) {
o = o.then(e).then(function(e) {
t.push(e);
return t;
});
});
return o;
}
e.queuePromise = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
return Array.isArray(e[0]) ? o(e[0]) : o(i(e));
};
e.getSimpleUrlWithoutAsp = function(e) {
var t = e.split("/").pop(), o = t.lastIndexOf(".");
return o >= 0 ? t.substring(0, o) : t;
};
e.RandomNum = function(e, t) {
var o = t - e, i = Math.random();
return e + Math.round(i * o);
};
e.getIntervalDaysDir = function(e, t) {
var o = new Date(e).toDateString(), i = new Date(t).toDateString(), n = new Date(o).getTime();
return (new Date(i).getTime() - n) / 864e5;
};
e.getCurrentTime = function() {
var e = new Date();
return e.getFullYear() + "-" + a(e.getMonth() + 1) + "-" + a(e.getDate()) + " " + a(e.getHours()) + ":" + a(e.getMinutes()) + ":" + a(e.getSeconds());
};
function a(e) {
return e >= 0 && e <= 9 ? "0" + e : e;
}
e.repair = a;
})(o.Utils || (o.Utils = {}));
cc._RF.pop();
}, {
"./LoadTool": "LoadTool"
} ],
VivoAdapter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "42516yOALRKcpDO/t41roZu", "VivoAdapter");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.VivoAdapter = void 0;
var a = function(e) {
n(t, e);
function t() {
var t = e.call(this) || this;
console.log("Vivo Adapter init!");
return t;
}
t.prototype.getBasePath = function() {
return "internal://files/";
};
t.prototype.getFileExist = function(e) {
try {
return window.qg.accessSync && window.qg.accessSync(e);
} catch (e) {
console.error(e);
return !1;
}
};
t.prototype.isFile = function(e) {
return window.qg.isFile({
uri: e
});
};
t.prototype.writeFile = function(e) {
console.log("writeFile:", e.url);
window.qg.writeFile({
uri: e.url,
text: e.data,
encoding: "string" == typeof e.data ? "utf8" : "binary",
success: function() {
console.info("writeFile success");
e.success && e.success();
},
fail: function(t) {
console.info("writeFile fail " + t.errMsg), e.fail && e.fail();
}
});
};
t.prototype.deleteFile = function(e) {
console.log("deleteFile:", e.url);
window.qg.deleteFile({
uri: e.url,
success: function() {
console.log("deleteFile success!");
e.success && e.success();
},
fail: function(t) {
console.log("deleteFile fail:", t);
e.fail && e.fail();
},
complete: function() {
e.complete && e.complete();
}
});
};
t.prototype.readFile = function(e) {
console.log("readFile:", e.url);
window.qg.readFile({
uri: e.url,
encoding: e.isString ? "utf8" : "binary",
success: function(t) {
console.info("readFile success " + t.text);
e.success && e.success(t.text);
},
fail: function(t) {
console.info("readFile fail:", t);
e.fail && e.fail();
},
complete: e.complete
});
};
t.prototype.getSaveAbulmEnabled = function() {
return !0;
};
t.prototype.saveToPhotoAlbum = function(e) {
console.log("saveToPhotoAlbum");
window.qg.saveToPhotoAlbum({
uri: e.url,
success: function() {
console.log("saveToPhotoAlbum success");
e.success && e.success();
},
fail: function(t) {
console.log("saveToPhotoAlbum fail:", t);
e.fail && e.fail();
},
complete: e.complete
});
};
t.prototype.getShareEnabled = function() {
return !0;
};
t.prototype.share = function(e) {
window.qg.share({
success: e.success,
fail: function() {
e.fail && e.fail();
},
cancel: e.cancel
});
};
return t;
}(e("./BaseAdapter").BaseAdapter);
o.VivoAdapter = a;
cc._RF.pop();
}, {
"./BaseAdapter": "BaseAdapter"
} ],
WebAdapter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fd0499m6ENKdLs8ZTHFDgzr", "WebAdapter");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.WebAdapter = void 0;
var a = function(e) {
n(t, e);
function t() {
var t = e.call(this) || this;
console.log("Web Adapter init!");
return t;
}
t.prototype.getBasePath = function() {
return "";
};
t.prototype.getFileExist = function() {
return !1;
};
t.prototype.isFile = function() {
return !1;
};
t.prototype.writeFile = function(e) {
e.fail && e.fail();
e.complete && e.complete();
};
t.prototype.deleteFile = function(e) {
e.fail && e.fail();
e.complete && e.complete();
};
t.prototype.readFile = function(e) {
try {
var t = new Image();
t.src = e.url;
var o = new cc.Texture2D();
o.initWithElement(t);
o.handleLoadedTexture();
var i = function() {
o.loaded ? e.success && e.success(o) : setTimeout(function() {
i();
});
};
i();
} catch (t) {
console.log(t);
e.fail && e.fail();
}
e.complete && e.complete();
};
t.prototype.getSaveAbulmEnabled = function() {
return !0;
};
t.prototype.getShareEnabled = function() {
return !0;
};
return t;
}(e("./BaseAdapter").BaseAdapter);
o.WebAdapter = a;
cc._RF.pop();
}, {
"./BaseAdapter": "BaseAdapter"
} ],
WechatAdapter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "63a97mNRjNGE70QUQNWO5BQ", "WechatAdapter");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.WechatAdapter = void 0;
var a = function(e) {
n(t, e);
function t() {
var t = e.call(this) || this;
console.log("Wechat Adapter init!");
return t;
}
t.prototype.getBasePath = function() {
return window.wx.env.USER_DATA_PATH + "/";
};
t.prototype.getFileExist = function(e) {
try {
return window.wx.getFileSystemManager().accessSync(e);
} catch (e) {
console.error(e);
return !1;
}
};
t.prototype.isFile = function(e) {
return window.wx.getFileSystemManager().statSync(e).isFile();
};
t.prototype.writeFile = function(e) {
console.log("wx writeFile:", e.url);
var t = window.wx.getFileSystemManager(), o = function() {
t.writeFile({
filePath: e.url,
data: e.data,
encoding: "string" == typeof e.data ? "utf8" : "binary",
success: function() {
console.info("writeFile success");
e.success && e.success();
},
fail: function(t) {
console.info("writeFile fail " + t.errMsg), e.fail && e.fail();
},
complete: function() {
e.complete && e.complete();
}
});
}, i = e.url.lastIndexOf("/"), n = e.url.substring(0, i);
t.access({
path: n,
success: function() {
o();
},
fail: function() {
try {
t.mkdirSync(n, !0);
o();
} catch (t) {
e.fail && e.fail();
}
}
});
};
t.prototype.deleteFile = function(e) {
console.log("deleteFile:", e.url);
window.wx.getFileSystemManager().unlink({
filePath: e.url,
success: function() {
console.log("deleteFile success!");
e.success && e.success();
},
fail: function(t) {
console.log("deleteFile fail:", t);
e.fail && e.fail();
},
complete: function() {
e.complete && e.complete();
}
});
};
t.prototype.readFile = function(e) {
console.log("readFile:", e.url);
var t = window.wx.getFileSystemManager();
e.isString ? t.readFile({
filePath: e.url,
encoding: "utf-8",
success: function(t) {
console.info("readFile success " + t.data);
e.success && e.success(t.data);
},
fail: function(t) {
console.info("readFile fail:", t);
e.fail && e.fail();
},
complete: e.complete
}) : t.readFile({
filePath: e.url,
success: function(t) {
console.info("readFile success " + t.data);
e.success && e.success(t.data);
},
fail: function(t) {
console.info("readFile fail:", t);
e.fail && e.fail();
},
complete: e.complete
});
};
t.prototype.getSaveAbulmEnabled = function() {
return !0;
};
t.prototype.saveToPhotoAlbum = function(e) {
console.log("saveToPhotoAlbum");
window.wx.authorize && window.wx.authorize({
scope: "scope.writePhotosAlbum",
success: function(t) {
console.log("authorize success:", t);
window.wx.saveImageToPhotosAlbum({
filePath: e.url,
success: function() {
console.log("saveToPhotoAlbum success");
e.success && e.success();
},
fail: function(t) {
console.log("saveToPhotoAlbum fail:", t);
e.fail && e.fail();
}
});
},
fail: function(t) {
console.log(" authorize fail:", t);
PPSDK.showAlert({
title: "保存失败",
content: "请打开“保存到相册”权限并重试",
confirmText: "去设置",
showCancel: !0,
confirm: function() {
window.wx.openSetting && window.wx.openSetting();
e.fail && e.fail();
}
});
}
});
};
t.prototype.toTempFilePath = function(e) {
if (e.canvas) {
e.x = e.x || 0, e.y = e.y || 0;
e.destWidth = e.destWidth || e.width;
e.destHeight = e.destHeight || e.height;
e.canvas.toTempFilePath(e);
}
};
t.prototype.getShareEnabled = function() {
return !0;
};
t.prototype.share = function(e) {
window.wx.shareAppMessage({
title: e.msg,
imageUrl: e.imgURL
});
};
t.prototype.addGameClubButton = function(e) {
e.node.getComponent(cc.Widget) && e.node.getComponent(cc.Widget).updateAlignment();
var t = e.node.getBoundingBoxToWorld(), o = cc.view.getVisibleSize(), i = cc.view.getFrameSize().height / o.height, n = t.width, a = t.height, s = t.xMin, r = t.yMax, c = s * i, l = (o.height - r) * i;
n *= i;
a *= i;
var d = window.wx.createGameClubButton({
icon: e.icon || "light",
style: {
left: c,
top: l,
width: n,
height: a
}
});
this.addListenNode(e.node, {
onDestroy: function() {
d.destroy();
},
onEnable: function() {
d.show();
},
onDisable: function() {
d.hide();
}
});
return d;
};
t.prototype.addFeedbackButton = function(e) {
e.node.getComponent(cc.Widget) && e.node.getComponent(cc.Widget).updateAlignment();
var t = e.node.getBoundingBoxToWorld(), o = cc.view.getVisibleSize(), i = cc.view.getFrameSize().height / o.height, n = t.width, a = t.height, s = t.xMin, r = t.yMax, c = s * i, l = (o.height - r) * i;
n *= i;
a *= i;
var d = "#16161630", u = "#ffffff80";
if (0 == e.visible) {
d = "#16161601";
u = "#ffffff01";
}
var h = window.wx.createFeedbackButton({
type: "text",
text: "意见反馈",
style: {
left: c,
top: l,
width: n,
height: a,
backgroundColor: d,
color: u,
textAlign: "center",
lineHeight: 28,
fontSize: 14,
borderRadius: 4
}
});
this.addListenNode(e.node, {
onDestroy: function() {
h.destroy();
},
onEnable: function() {
h.show();
},
onDisable: function() {
h.hide();
}
});
return h;
};
return t;
}(e("./BaseAdapter").BaseAdapter);
o.WechatAdapter = a;
cc._RF.pop();
}, {
"./BaseAdapter": "BaseAdapter"
} ]
}, {}, ["PPSDK_Config", "Application", "Alert", "DebugView", "FitScale", "Loading", "Tips", "UILoading", "BundleUpdateHandlerImpl", "HallUpdateHandlerImpl", "MainUpdateHandlerImpl", "SDKHelper", "BaseAdapter", "HuaweiAdapter", "ListenNode", "NativeAdapter", "OppoAdapter", "SDKAdapter", "TtAdapter", "VivoAdapter", "WebAdapter", "WechatAdapter", "SubGame", "Framework", "AssetManager", "BundleManager", "CacheManager", "ReleaseManager", "Resource", "ResourcesLoader", "AudioManager", "EventCenter", "LanguageLabel", "LanguageMgr", "LanguageSprite", "Logger", "Http", "HttpClient", "NodePoolManager", "BitEncrypt", "ByteArray", "LocalManager", "StorageClass", "StorageObj", "SettingStorage", "PopupBase", "PopupManager", "UIManager", "UIView", "TestUpdateItem", "Update", "UpdateItem", "UpdateManager", "LoadTool", "Utils", "Macros", "ArrayExtemtion", "CocosExtemtion", "DateExtemtion", "MathExtemtion", "StringExtemtion", "SdkData", "SdkManager", "LoadingLogo", "Login"]);
