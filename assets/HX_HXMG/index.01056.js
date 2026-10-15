window.__require = function t(e, n, o) {
function i(c, r) {
if (!n[c]) {
if (!e[c]) {
var s = c.split("/");
s = s[s.length - 1];
if (!e[s]) {
var l = "function" == typeof __require && __require;
if (!r && l) return l(s, !0);
if (a) return a(s, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = s;
}
var u = n[c] = {
exports: {}
};
e[c][0].call(u.exports, function(t) {
return i(e[c][1][t] || t);
}, u, u.exports, t, e, n, o);
}
return n[c].exports;
}
for (var a = "function" == typeof __require && __require, c = 0; c < o.length; c++) i(o[c]);
return i;
}({
AudioManager2: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ec837HPHdhNmbkWqoAlSNAg", "AudioManager2");
var o = this && this.__awaiter || function(t, e, n, o) {
return new (n || (n = Promise))(function(i, a) {
function c(t) {
try {
s(o.next(t));
} catch (t) {
a(t);
}
}
function r(t) {
try {
s(o.throw(t));
} catch (t) {
a(t);
}
}
function s(t) {
t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
t(e);
})).then(c, r);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, i = this && this.__generator || function(t, e) {
var n, o, i, a, c = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
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
function r(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(a) {
if (n) throw new TypeError("Generator is already executing.");
for (;c; ) try {
if (n = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
c.label++;
return {
value: a[1],
done: !1
};

case 5:
c.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = c.ops.pop();
c.trys.pop();
continue;

default:
if (!(i = c.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
c = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
c.label = a[1];
break;
}
if (6 === a[0] && c.label < i[1]) {
c.label = i[1];
i = a;
break;
}
if (i && c.label < i[2]) {
c.label = i[2];
c.ops.push(a);
break;
}
i[2] && c.ops.pop();
c.trys.pop();
continue;
}
a = e.call(t, c);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
n = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./../Enum"), c = t("./DataManager"), r = t("./ResourceManager"), s = function() {
function t() {
this.audioSource = null;
this.soundList = [];
}
t.getInstance = function() {
if (null === this._instance) {
this._instance = new this();
this._instance.init();
}
return this._instance;
};
Object.defineProperty(t, "instance", {
get: function() {
return this.getInstance();
},
enumerable: !1,
configurable: !0
});
t.prototype.init = function() {
this.audioSource = new cc.AudioSource();
this.audioSource.loop = !0;
this.audioSource.volume = .3;
};
t.prototype.playMusic = function() {
return o(this, void 0, void 0, function() {
var t;
return i(this, function(e) {
switch (e.label) {
case 0:
if (this.audioSource.clip) {
this.audioSource.play();
return [ 2 ];
}
return [ 4, r.default.instance.getClip(a.ENUM_AUDIO_CLIP.BGM) ];

case 1:
t = e.sent();
this.audioSource.clip = t;
this.audioSource.play();
return [ 2 ];
}
});
});
};
t.prototype.stopMusic = function() {
this.audioSource.stop();
};
t.prototype.playSound = function(t, e) {
void 0 === e && (e = !1);
if (c.default.instance.isSoundOn && PPSDK.sfxState) {
var n = r.default.instance.getClip(t);
return cc.audioEngine.playEffect(n, e);
}
};
t.prototype.stopSound = function(t) {
cc.audioEngine.stopEffect(t);
};
t._instance = null;
return t;
}();
n.default = s;
cc._RF.pop();
}, {
"./../Enum": "Enum",
"./DataManager": "DataManager",
"./ResourceManager": "ResourceManager"
} ],
Baselayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "85f2bS+gIxJj5wlc4XZ3Qd4", "Baselayer");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, r = c.ccclass, s = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.show = function() {
this.node.active = !0;
};
e.prototype.hide = function() {
this.node.active = !1;
};
e.prototype.fadeIn = function(t, e, n) {
void 0 === e && (e = 1.5);
void 0 === n && (n = .3);
t.setScale(e);
t.opacity = 0;
var o = cc.callFunc(function() {}, this), i = cc.sequence(cc.spawn(cc.fadeTo(n, 255), cc.scaleTo(n, 1)), o);
cc.tween(t).then(i).start();
};
e.prototype.fadeOut = function(t, e, n) {
void 0 === e && (e = .5);
void 0 === n && (n = .3);
t.setScale(e);
t.opacity = 0;
var o = cc.callFunc(function() {}, this), i = cc.sequence(cc.spawn(cc.fadeTo(n, 255), cc.scaleTo(n, 1)), o);
cc.tween(t).then(i).start();
};
e.prototype.zoomIn = function(t, e, n) {
void 0 === e && (e = 1.5);
void 0 === n && (n = .3);
t.setScale(e);
var o = cc.scaleTo(n, 1);
cc.tween(t).then(o).start();
};
e.prototype.zoomOut = function(t, e, n) {
void 0 === e && (e = .5);
void 0 === n && (n = .3);
t.setScale(e);
var o = cc.scaleTo(n, 1);
cc.tween(t).then(o).start();
};
return a([ r ], e);
}(cc.Component));
n.default = s;
cc._RF.pop();
}, {} ],
DailyLayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "633602vNatMf60yl2+/SFbc", "DailyLayer");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../Enum"), r = t("./../StaticInstance"), s = t("../manager/AudioManager2"), l = t("./Baselayer"), u = t("../manager/DataManager"), h = t("../Utils2"), f = cc._decorator, p = f.ccclass, d = (f.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodePanel = null;
e.btnClose = null;
e.buttons = null;
e.tip = null;
e.timestamp = 0;
return e;
}
e.prototype.onLoad = function() {
this.nodePanel = cc.find("style/panel", this.node);
this.buttons = cc.find("main/buttons", this.nodePanel);
this.tip = cc.find("main/tip", this.nodePanel);
this.btnClose = cc.find("btn_close", this.nodePanel);
this.btnClose.on("click", this.onCloseClick, this);
this.buttons.getChildByName("btn_submit").on("click", this.onSubmitClick, this);
this.buttons.getChildByName("btn_submit_double").on("click", this.onSubmitDoubleClick, this);
};
e.prototype.onDestroy = function() {
this.btnClose.off("click", this.onCloseClick, this);
};
e.prototype.onEnable = function() {
hxblSdk.showCustomFast(0, 0);
this.zoomOut(this.nodePanel);
this.rendorButton();
};
e.prototype.onDisable = function() {
hxblSdk.showCustomFast(0, 0);
};
e.prototype.rendorButton = function() {
this.timestamp = h.getZeroTimestamp();
if (this.timestamp > u.default.instance.lastDailyRefreshTime) {
this.tip.active = !1;
this.buttons.active = !0;
} else {
this.tip.active = !0;
this.buttons.active = !1;
}
};
e.prototype.onCloseClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.DAILY, !1);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.MENU);
};
e.prototype.onSubmitClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
u.default.instance.coins += u.default.instance.coinCollectByVideo;
u.default.instance.power += u.default.instance.powerCollectByVideo;
u.default.instance.lastDailyRefreshTime = this.timestamp;
u.default.instance.save();
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.DAILY, !1);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.MENU);
};
e.prototype.onSubmitDoubleClick = function() {
var t = this;
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
hxblSdk.showVideo(function(e) {
if (0 == e) {
hxblSdk.showToast("领取成功");
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.COLLECT_COIN);
u.default.instance.coins += 2 * u.default.instance.coinCollectByVideo;
u.default.instance.power += 2 * u.default.instance.powerCollectByVideo;
u.default.instance.lastDailyRefreshTime = t.timestamp;
u.default.instance.save();
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.DAILY, !1);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.MENU);
} else 1 == e ? hxblSdk.showToast("视频未播放失败") : hxblSdk.showToast("无可展示视频广告");
});
};
return a([ p ], e);
}(l.default));
n.default = d;
cc._RF.pop();
}, {
"../Enum": "Enum",
"../Utils2": "Utils2",
"../manager/AudioManager2": "AudioManager2",
"../manager/DataManager": "DataManager",
"./../StaticInstance": "StaticInstance",
"./Baselayer": "Baselayer"
} ],
DataManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "730a3DszhpGB4lxakYD51PT", "DataManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.HOUSE_DATA = void 0;
var o = t("../Enum"), i = 110;
n.HOUSE_DATA = [ {
title: "破草屋",
icon: "house1",
coins: 0
}, {
title: "茅草屋",
icon: "house2",
coins: 5
}, {
title: "青砖瓦房",
icon: "house3",
coins: 10
}, {
title: "小脊瓦房",
icon: "house4",
coins: 20
}, {
title: "大脊瓦房",
icon: "house5",
coins: 40
}, {
title: "双脊瓦房",
icon: "house6",
coins: 60
}, {
title: "琉璃瓦房",
icon: "house7",
coins: 80
}, {
title: "双层瓦房",
icon: "house8",
coins: 100
}, {
title: "雕梁瓦房",
icon: "house9",
coins: 120
}, {
title: "檀木瓦房",
icon: "house10",
coins: 130
}, {
title: "鎏金瓦房",
icon: "house11",
coins: 140
}, {
title: "太学府",
icon: "house12",
coins: 200
}, {
title: "应天府",
icon: "house13",
coins: 250
}, {
title: "顺天府",
icon: "house14",
coins: 300
}, {
title: "内务府",
icon: "house15",
coins: 400
}, {
title: "宗人府",
icon: "house16",
coins: 500
}, {
title: "侯爵府",
icon: "house17",
coins: 600
}, {
title: "公爵府",
icon: "house18",
coins: 700
}, {
title: "相府",
icon: "house19",
coins: 800
}, {
title: "咸阳宫",
icon: "house20",
coins: 900
}, {
title: "长乐宫",
icon: "house21",
coins: 1e3
}, {
title: "紫禁城",
icon: "house22",
coins: 1100
}, {
title: "凌霄宝殿",
icon: "house23",
coins: 1200
}, {
title: "紫微宫",
icon: "house24",
coins: 1500
}, {
title: "星耀宫",
icon: "house25",
coins: 1600
}, {
title: "璇玑宫",
icon: "house26",
coins: 1700
}, {
title: "东华紫府",
icon: "house27",
coins: 1800
}, {
title: "玉清宫",
icon: "house28",
coins: 1900
}, {
title: "三清镜",
icon: "house29",
coins: 5e3
} ];
var a = function() {
function t() {
this.status = o.ENUM_GAME_STATUS.UNRUNING;
this.loadingRate = 0;
this._isMusicOn = !0;
this._isSoundOn = !0;
this.games = [];
this.levels = 197;
this.level = 1;
this.levelMax = 1;
this.coins = 5;
this.coinCollectByVideo = 50;
this.power = 999999;
this.powerCollectByVideo = 1;
this.houseUnlock = [ 0 ];
this.houseCurrentItem = {
title: "破草屋",
icon: "house1",
coins: 0
};
this.houseTempItem = null;
this.lastDailyRefreshTime = 0;
this.timer = i;
this.playerIsMoving = !1;
this.playerGuide = !1;
}
t.getInstance = function() {
null === this._instance && (this._instance = new this());
return this._instance;
};
Object.defineProperty(t, "instance", {
get: function() {
return this.getInstance();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isMusicOn", {
get: function() {
return this._isMusicOn;
},
set: function(t) {
this._isMusicOn = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isSoundOn", {
get: function() {
return this._isSoundOn;
},
set: function(t) {
this._isSoundOn = t;
},
enumerable: !1,
configurable: !0
});
t.prototype.reset = function() {
this.status = o.ENUM_GAME_STATUS.UNRUNING;
this.timer = i;
this.playerIsMoving = !1;
};
t.prototype.save = function() {
cc.sys.localStorage.setItem("CC_MAZE_DRAW", JSON.stringify({
isSoundOn: this.isSoundOn,
isMusicOn: this.isMusicOn,
level: this.level,
levelMax: this.levelMax,
coins: this.coins,
power: this.power,
houseUnlock: this.houseUnlock,
houseCurrentItem: this.houseCurrentItem,
lastDailyRefreshTime: this.lastDailyRefreshTime
}));
cc.sys.localStorage.setItem(lieyou.Key_Gold, JSON.stringify(this.coins));
};
t.prototype.restore = function() {
var t = cc.sys.localStorage.getItem("CC_MAZE_DRAW"), e = 0, n = cc.sys.localStorage.getItem(lieyou.Key_Gold);
n && "" != n && (e = JSON.parse(n));
try {
var o = JSON.parse(t);
this.isMusicOn = PPSDK.musicState;
this.isSoundOn = PPSDK.sfxState;
this.level = "number" == typeof o.level ? o.level : 1;
this.levelMax = "number" == typeof o.levelMax ? o.levelMax : 1;
this.coins = "number" == typeof e ? e : 0;
this.power = "number" == typeof o.power ? o.power : 5;
this.houseUnlock = (null == o ? void 0 : o.houseUnlock) || [ 0 ];
this.houseCurrentItem = (null == o ? void 0 : o.houseCurrentItem) || {
title: "破草屋",
icon: "house1",
coins: 0
};
this.lastDailyRefreshTime = "number" == typeof o.lastDailyRefreshTime ? o.lastDailyRefreshTime : 0;
} catch (t) {
this.isMusicOn = PPSDK.musicState;
this.isSoundOn = PPSDK.sfxState;
this.level = 1;
this.levelMax = 1;
this.coins = "number" == typeof e ? e : 0;
this.power = 5;
this.houseUnlock = [ 0 ];
this.houseCurrentItem = {
title: "破草屋",
icon: "house1",
coins: 0
};
this.lastDailyRefreshTime = 0;
}
};
t._instance = null;
return t;
}();
n.default = a;
cc._RF.pop();
}, {
"../Enum": "Enum"
} ],
DrawLine: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9eb8frx8slNcYoQtCn+I6UV", "DrawLine");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../Enum"), r = t("../StaticInstance"), s = t("../manager/AudioManager2"), l = t("../manager/DataManager"), u = t("../manager/EffectManager"), h = cc._decorator, f = h.ccclass, p = (h.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lineNode = null;
e.pos = null;
e.colliders = [];
e.canDraw = !1;
e.player = null;
e.playerMoving = !1;
e.linePos = [];
e.speed = 500;
e.endpoint = null;
e.coin = null;
e.coinCollected = 0;
e.beeAudio = 0;
return e;
}
n = e;
Object.defineProperty(e, "ins", {
get: function() {
return n._ins;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
n._ins = this;
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchOver, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchOver, this);
this.colliders = this.node.getComponentsInChildren(cc.PolygonCollider);
this.player = this.node.getChildByName("player");
this.endpoint = this.node.getChildByName("endpoint");
this.coin = this.node.getChildByName("coin");
};
e.prototype.onDestroy = function() {
this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchOver, this);
this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchOver, this);
};
e.prototype.lineDraw = function(t, e) {
if (!this.playerMoving && l.default.instance.status != c.ENUM_GAME_STATUS.UNRUNING) {
var n = new cc.Node("Line2");
n.parent = this.node;
var o = n.addComponent(cc.Graphics);
o.lineWidth = 10;
o.lineJoin = cc.Graphics.LineJoin.ROUND;
o.lineCap = cc.Graphics.LineCap.ROUND;
o.strokeColor.set(new cc.Color(255, 0, 0, 255));
o.fillColor.set(new cc.Color(0, 255, 0, 255));
o.moveTo(e.x, e.y);
t.forEach(function(t) {
o.lineTo(t.x, t.y);
o.stroke();
});
}
};
e.prototype.onTouchStart = function(t) {
if (!this.playerMoving && l.default.instance.status != c.ENUM_GAME_STATUS.UNRUNING) {
hxblSdk.vibrateShort();
var e = new cc.Node("Line");
e.parent = this.node;
var n = e.addComponent(cc.Graphics);
n.lineWidth = 10;
n.lineJoin = cc.Graphics.LineJoin.ROUND;
n.lineCap = cc.Graphics.LineCap.ROUND;
n.strokeColor.set(new cc.Color(255, 0, 0, 255));
n.fillColor.set(new cc.Color(0, 255, 0, 255));
this.lineNode = e;
var o = t.getLocation(), i = this.node.convertToNodeSpaceAR(o);
if (this.player.getBoundingBox().contains(i)) {
this.canDraw = !0;
cc.find("Line2", this.node) && cc.find("Line2", this.node).destroy();
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK_ITEM);
} else {
u.default.instance.playInParent("Touch", this.node, {
pos: i
});
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK_EMPTY);
}
if (this.canDraw) {
this.pos = i;
this.linePos.push(i);
}
}
};
e.prototype.onTouchMove = function(t) {
if (this.pos && !this.playerMoving && l.default.instance.status != c.ENUM_GAME_STATUS.UNRUNING) {
l.default.instance.playerGuide = !1;
var e = this.lineNode.getComponent(cc.Graphics);
e.moveTo(this.pos.x, this.pos.y);
var n = t.getLocation(), o = this.node.convertToNodeSpaceAR(n);
if (this.colliderByPos(o)) this.canDraw && (this.canDraw = !1); else if (this.canDraw) if (this.collideByLine(this.pos, o)) this.canDraw && (this.canDraw = !1); else {
this.pos = o;
this.linePos.push(o);
e.lineTo(this.pos.x, this.pos.y);
e.stroke();
} else this.collideByLine(this.pos, o) || (this.canDraw = !0);
}
};
e.prototype.onTouchOver = function() {
if (!this.playerMoving && l.default.instance.status != c.ENUM_GAME_STATUS.UNRUNING) if (this.linePos.length > 1) {
l.default.instance.playerIsMoving = !0;
this.player.zIndex = 999;
this.onPlayerMove();
} else this.resetDraw();
};
e.prototype.colliderByPos = function(t) {
for (var e = 0, n = 0; n < this.colliders.length; n++) {
var o = this.colliders[n];
if (cc.Intersection.pointInPolygon(t, o.points)) {
e += 1;
console.log(e);
}
}
return e > 0;
};
e.prototype.collideByLine = function(t, e) {
for (var n = 0, o = 0; o < this.colliders.length; o++) {
var i = this.colliders[o];
cc.Intersection.linePolygon(t, e, i.points) && (n += 1);
}
return n > 0;
};
e.prototype.onPlayerMove = function() {
var t = this;
this.playerMoving = !0;
this.beeAudio = s.default.instance.playSound(c.ENUM_AUDIO_CLIP.BEE, !0);
for (var e = [], n = 0; n < this.linePos.length; n++) {
var o = this.linePos[n];
this.linePos[n + 1] && e.push(this.linePos[n + 1].sub(o).mag());
}
for (var i = [], a = 1; a < this.linePos.length; a++) {
var r = this.linePos[a], l = Math.floor(e[a - 1] / this.speed * 1e4) / 1e4, u = cc.moveTo(l, r);
i.push(u);
var h = cc.callFunc(function() {
t.onPlayerMoving();
}, this);
i.push(h);
}
var f = i[0];
i.length > 1 && (f = cc.sequence(i));
cc.tween(this.player).then(f).call(function() {
t.onPlayerMoved();
}).start();
};
e.prototype.onPlayerMoving = function() {
var t = this;
if (l.default.instance.status != c.ENUM_GAME_STATUS.UNRUNING) {
var e = this.player.getBoundingBox(), n = this.endpoint.getBoundingBox();
if (this.coin) {
var o = this.coin.getBoundingBox();
if (e.intersects(o) && -1 == this.coin.name.indexOf("_touched")) {
this.coin.name = "coin_touched";
this.coinCollected += 10;
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.COLLECT);
this.coin.removeFromParent();
}
}
if (e.intersects(n) && -1 == this.endpoint.name.indexOf("_touched")) {
l.default.instance.status = c.ENUM_GAME_STATUS.UNRUNING;
this.resetDraw();
this.endpoint.name = "endpoint_touched";
this.endpoint.getChildByName("anim").getComponent(sp.Skeleton).animation = "fail";
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.DOG, !1);
this.scheduleOnce(function() {
t.endpoint.removeFromParent();
}, 1);
l.default.instance.coins += this.coinCollected;
var i = l.default.instance.level + 1;
i = Math.min(i, l.default.instance.levels);
l.default.instance.level = i;
i > l.default.instance.levelMax && (l.default.instance.levelMax = i);
l.default.instance.save();
s.default.instance.stopSound(this.beeAudio);
r.StaticInstance.gameManager.onGameOver(c.ENUM_UI_TYPE.WIN);
}
}
};
e.prototype.onPlayerMoved = function() {
s.default.instance.stopSound(this.beeAudio);
if (l.default.instance.status != c.ENUM_GAME_STATUS.UNRUNING) {
l.default.instance.status = c.ENUM_GAME_STATUS.UNRUNING;
this.resetDraw();
var t = this.player.getBoundingBox(), e = this.endpoint.getBoundingBox();
if (t.intersects(e)) {
this.endpoint.removeFromParent();
l.default.instance.coins += this.coinCollected;
var n = l.default.instance.level + 1;
n = Math.min(n, l.default.instance.levels);
l.default.instance.level = n;
n > l.default.instance.levelMax && (l.default.instance.levelMax = n);
l.default.instance.save();
r.StaticInstance.gameManager.onGameOver(c.ENUM_UI_TYPE.WIN);
} else r.StaticInstance.gameManager.onGameOver(c.ENUM_UI_TYPE.LOSE);
}
};
e.prototype.resetDraw = function() {
var t;
this.player.stopAllActions();
null === (t = this.lineNode) || void 0 === t || t.removeFromParent();
this.lineNode = null;
this.pos = null;
this.playerMoving = !1;
this.canDraw = !1;
this.linePos = [];
};
var n;
e._ins = null;
return n = a([ f ], e);
}(cc.Component));
n.default = p;
cc._RF.pop();
}, {
"../Enum": "Enum",
"../StaticInstance": "StaticInstance",
"../manager/AudioManager2": "AudioManager2",
"../manager/DataManager": "DataManager",
"../manager/EffectManager": "EffectManager"
} ],
EffectManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "def54s79C1DBq7aJq3x4CWS", "EffectManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = t("./PoolManager"), i = function() {
function t() {}
Object.defineProperty(t, "instance", {
get: function() {
null == this._instance && (this._instance = new t());
return this._instance;
},
enumerable: !1,
configurable: !0
});
t.prototype.playInParent = function(t, e, n) {
var i = o.default.instance.getNode("" + t, e);
n && n.pos && i.setPosition(n.pos);
if (i.getComponent(cc.Animation)) {
var a = i.getComponent(cc.Animation);
a.on("finished", function() {
i.removeFromParent();
});
a.play();
} else i.getComponent(cc.ParticleSystem) && i.getComponent(cc.ParticleSystem).resetSystem();
};
t._instance = null;
return t;
}();
n.default = i;
cc._RF.pop();
}, {
"./PoolManager": "PoolManager"
} ],
Enum: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "50f2e0oDptJt4SjWGm8di2L", "Enum");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ENUM_RESOURCE_TYPE = n.ENUM_UI_TYPE = n.ENUM_AUDIO_CLIP = n.ENUM_GAME_STATUS = void 0;
(function(t) {
t.UNRUNING = "UNRUNING";
t.RUNING = "RUNING";
})(n.ENUM_GAME_STATUS || (n.ENUM_GAME_STATUS = {}));
(function(t) {
t.BGM = "bgm2";
t.CLICK = "click";
t.LOSE = "lose";
t.WIN = "success";
t.COLLECT = "collect";
t.TIMER = "timer";
t.COLLECT_COIN = "collect_coin";
t.COLLECT_POWER = "collect_power";
t.CLICK_ITEM = "click_item";
t.CLICK_EMPTY = "click_empty";
t.MOVE = "move";
t.DOG = "dog";
t.BEE = "bee";
})(n.ENUM_AUDIO_CLIP || (n.ENUM_AUDIO_CLIP = {}));
(function(t) {
t.MENU = "MenuLayer";
t.MAIN = "MainLayer";
t.SETTING = "SettingLayer";
t.LOSE = "LoseLayer";
t.WIN = "WinLayer";
t.MORE = "MoreLayer";
t.LEVEL = "LevelLayer";
t.EXIT = "ExitLayer";
t.HOUSE = "HouseLayer";
t.HOUSE_SUBMIT = "HouseSubmitLayer";
t.REWARD = "RewardLayer";
t.DAILY = "DailyLayer";
t.RANK = "RankLayer";
t.PASS = "PassLayer";
})(n.ENUM_UI_TYPE || (n.ENUM_UI_TYPE = {}));
n.ENUM_RESOURCE_TYPE = [ {
content: cc.AudioClip,
path: "resources/audio",
type: "audio",
ratio: .4
}, {
content: cc.Prefab,
path: "resources/prefab",
type: "prefab",
ratio: .3
}, {
content: cc.SpriteFrame,
path: "resources/sprite",
type: "sprite",
ratio: .3
}, {
content: sp.SkeletonData,
path: "resources/spine",
type: "spine",
ratio: .3
}, {
content: cc.SpriteAtlas,
path: "resources/atlas",
type: "spriteAtlas",
ratio: .3
} ];
cc._RF.pop();
}, {} ],
ExitLayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "de4c5jB0dFGfKHRmFhO/fMs", "ExitLayer");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../Enum"), r = t("./../StaticInstance"), s = t("../manager/AudioManager2"), l = t("../manager/DataManager"), u = t("./SettingLayer"), h = cc._decorator, f = h.ccclass, p = (h.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodePanel = null;
e.btnSubmit = null;
e.btnClose = null;
e.btnContinue = null;
return e;
}
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
this.nodePanel = cc.find("style/panel", this.node);
this.btnSubmit = cc.find("btn_submit", this.nodePanel);
this.btnClose = cc.find("btn_close", this.nodePanel);
this.btnContinue = cc.find("btn_continue", this.nodePanel);
this.btnSubmit.on("click", this.onSubmitClick, this);
this.btnClose.on("click", this.onCloseClick, this);
this.btnContinue.on("click", this.onCloseClick, this);
};
e.prototype.onDestroy = function() {
t.prototype.onDestroy.call(this);
this.btnSubmit.off("click", this.onSubmitClick, this);
this.btnClose.off("click", this.onCloseClick, this);
this.btnContinue.off("click", this.onCloseClick, this);
};
e.prototype.onEnable = function() {
t.prototype.onEnable.call(this);
hxblSdk.showCustomFast(2, 1);
this.zoomOut(this.nodePanel);
};
e.prototype.onDisable = function() {};
e.prototype.onCloseClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
r.StaticInstance.uiManager.setMainTimer(!0);
r.StaticInstance.uiManager.setMainTimerSound(!0);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.EXIT, !1);
};
e.prototype.onSubmitClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
l.default.instance.status = c.ENUM_GAME_STATUS.UNRUNING;
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.MAIN, !1);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.EXIT, !1);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.MENU);
};
return a([ f ], e);
}(u.default));
n.default = p;
cc._RF.pop();
}, {
"../Enum": "Enum",
"../manager/AudioManager2": "AudioManager2",
"../manager/DataManager": "DataManager",
"./../StaticInstance": "StaticInstance",
"./SettingLayer": "SettingLayer"
} ],
GameManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "8d970VZoPFL/L9/Lg/KHxlp", "GameManager");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./../Enum"), r = cc._decorator, s = r.ccclass, l = (r.property, t("../Enum")), u = t("../StaticInstance"), h = t("./DataManager"), f = t("./PoolManager"), p = t("./AudioManager2"), d = t("./ResourceManager"), y = t("../game/DrawLine"), g = t("../layer/MainLayer"), _ = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.stage = null;
e.correct = null;
e.isTip = !1;
e.tips = null;
return e;
}
e.prototype.onLoad = function() {
u.StaticInstance.setGameManager(this);
this.stage = cc.find("Stage", this.node);
this.correct = cc.find("correct", this.node);
};
e.prototype.onDestroy = function() {};
e.prototype.onGameStart = function() {
h.default.instance.reset();
lieyou_SdkManager.onGameStart("HX_HXMG_1", h.default.instance.level);
this.initGame();
};
e.prototype.onGameRestart = function() {
h.default.instance.reset();
this.initGame();
};
e.prototype.onGameOver = function(t) {
var e = this;
u.StaticInstance.uiManager.setMainTimer(!1);
u.StaticInstance.uiManager.setMainTimerSound(!1);
if (t == c.ENUM_UI_TYPE.WIN) {
p.default.instance.playSound(c.ENUM_AUDIO_CLIP.WIN);
lieyou_SdkManager.onGameSuccess("HX_HXMG_1", h.default.instance.level);
this.scheduleOnce(function() {
e.correct.active = !0;
cc.tween(e.correct).to(.5, {
opacity: 255,
scale: 2.5
}).to(.2, {
scale: 2
}, {
easing: "sineInOut"
}).delay(.7).to(.2, {
opacity: 0
}).call(function() {
e.correct.active = !1;
u.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.WIN);
}).start();
}, .3);
} else {
p.default.instance.playSound(c.ENUM_AUDIO_CLIP.LOSE);
lieyou_SdkManager.onGameFail("HX_HXMG_1", h.default.instance.level);
this.scheduleOnce(function() {
u.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.LOSE);
}, .3);
}
};
e.prototype.initGame = function() {
h.default.instance.status = l.ENUM_GAME_STATUS.UNRUNING;
this.stage.removeAllChildren();
this.initNode(f.default.instance.getNode("Level" + h.default.instance.level, this.stage));
this.tips = cc.find("tips", this.stage.children[0]);
cc.find("UI/MainLayer", this.node.parent).getComponent(g.default).btnTips.active = null != this.tips && 1 != h.default.instance.level;
u.StaticInstance.uiManager.rendorMainLevel();
u.StaticInstance.uiManager.setMainTimer(!0);
if (1 == h.default.instance.level) {
h.default.instance.playerGuide = !0;
this.playHandGuide();
}
this.isTip = !1;
h.default.instance.status = l.ENUM_GAME_STATUS.RUNING;
};
e.prototype.playHandGuide = function() {
var t = cc.find("handNode", this.stage.children[0]);
t.active = !1;
this.scheduleOnce(function() {
t.active = !0;
var e = t.getComponent(cc.Animation);
e.play();
e.getAnimationState("guide").speed = .8;
}, 1);
};
e.prototype.initNode = function(t) {
var e = t.getChildByName("player"), n = new cc.Node("anim");
e.destroyAllChildren();
n.addComponent(sp.Skeleton).skeletonData = d.default.instance.spineMap.bee;
n.getComponent(sp.Skeleton).animation = "start";
n.setScale(.9);
e.width = 60;
e.height = 50;
e.addChild(n);
var o = t.getChildByName("endpoint"), i = new cc.Node("anim");
o.destroyAllChildren();
i.addComponent(sp.Skeleton).skeletonData = d.default.instance.spineMap.dog;
i.getComponent(sp.Skeleton).animation = "start";
i.setScale(.6);
o.addChild(i);
};
e.prototype.update = function() {
if (h.default.instance.status == l.ENUM_GAME_STATUS.RUNING && !h.default.instance.playerGuide && 1 == h.default.instance.level) {
var t = cc.find("handNode", this.stage.children[0]);
cc.find("GuideLine", this.stage.children[0]).active = !1;
t.getComponent(cc.Animation).stop();
t.active = !1;
}
};
e.prototype.gameTips = function() {
this.isTip = !0;
var t = this.stage.children[0].getChildByName("player"), e = this.tips.children, n = [];
e.forEach(function(t) {
n.push(t.getPosition());
});
y.default.ins.lineDraw(n, t.getPosition());
};
return a([ s ], e);
}(cc.Component);
n.default = _;
cc._RF.pop();
}, {
"../Enum": "Enum",
"../StaticInstance": "StaticInstance",
"../game/DrawLine": "DrawLine",
"../layer/MainLayer": "MainLayer",
"./../Enum": "Enum",
"./AudioManager2": "AudioManager2",
"./DataManager": "DataManager",
"./PoolManager": "PoolManager",
"./ResourceManager": "ResourceManager"
} ],
HX_HXMG_SUB: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "09482ABMIBMB5UU/nNche6H", "HX_HXMG_SUB");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = t("./hx_adapter/hxbl2pp");
PPSDK.subGame.addSub({
name: "HX_HXMG",
group: {
"group-list": [ "default", "ui" ],
"collision-matrix": [ [ !0 ], [ !1, !1 ] ],
"excluded-modules": [ "Dynamic Atlas", "DragonBones", "EditBox", "MotionStreak", "Native Socket", "PageView", "PageViewIndicator", "ProgressBar", "RichText", "Spine Skeleton", "StudioComponent", "Toggle", "TiledMap", "VideoPlayer", "3D", "3D Primitive", "3D Physics/cannon.js", "3D Physics/Builtin", "3D Particle", "SafeArea" ],
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
"last-module-event-record-time": 1687854093135
},
goGame: function() {
return new Promise(function(t) {
window.hxblSdk = o.SdkManager;
cc.director.loadScene("HX_HXMG", function() {
t();
});
});
}
});
cc._RF.pop();
}, {
"./hx_adapter/hxbl2pp": "hxbl2pp"
} ],
HeaderLayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7eec4/VEBpOsIHwei4VeDcj", "HeaderLayer");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../Enum"), r = t("../manager/AudioManager2"), s = t("../manager/DataManager"), l = t("./Baselayer"), u = cc._decorator, h = u.ccclass, f = (u.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.barPower = null;
e.barCoin = null;
e.content = null;
return e;
}
e.prototype.onLoad = function() {
this.barPower = cc.find("bar_power", this.node);
this.barCoin = cc.find("bar_coin", this.node);
this.barPower && this.rendorPower();
this.barCoin && this.rendorCoin();
};
e.prototype.rendorPower = function() {
var t = this, e = this.barPower.getChildByName("num"), n = this.barPower.getChildByName("btn_plus");
e && (e.getComponent(cc.Label).string = "" + s.default.instance.power);
n && !n.hasEventListener("click") && n.on("click", function() {
t.getRewardByVideo("power");
});
};
e.prototype.rendorCoin = function() {
var t = this, e = this.barCoin.getChildByName("num"), n = this.barCoin.getChildByName("btn_plus");
e && (e.getComponent(cc.Label).string = "" + s.default.instance.coins);
n && !n.hasEventListener("click") && n.on("click", function() {
t.getRewardByVideo("coin");
});
};
e.prototype.getRewardByVideo = function(t) {
var e = this;
void 0 === t && (t = "coin");
r.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
hxblSdk.showVideo(function(n) {
if (0 == n) {
hxblSdk.showToast("领取成功");
if ("coin" == t) {
r.default.instance.playSound(c.ENUM_AUDIO_CLIP.COLLECT_COIN);
s.default.instance.coins += s.default.instance.coinCollectByVideo;
s.default.instance.save();
e.rendorCoin();
} else {
r.default.instance.playSound(c.ENUM_AUDIO_CLIP.COLLECT_POWER);
s.default.instance.power += s.default.instance.powerCollectByVideo;
s.default.instance.save();
e.rendorPower();
}
} else 1 == n ? hxblSdk.showToast("视频播放失败") : hxblSdk.showToast("无可展示视频广告");
});
};
return a([ h ], e);
}(l.default));
n.default = f;
cc._RF.pop();
}, {
"../Enum": "Enum",
"../manager/AudioManager2": "AudioManager2",
"../manager/DataManager": "DataManager",
"./Baselayer": "Baselayer"
} ],
HouseLayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "264dbUYQBlENpVzzOilvDY5", "HouseLayer");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../Enum"), r = t("./../StaticInstance"), s = t("../manager/AudioManager2"), l = t("../manager/DataManager"), u = t("../manager/PoolManager"), h = t("../plugins/UIScrollControl"), f = t("../manager/ResourceManager"), p = t("./HeaderLayer"), d = t("./MenuLayer"), y = cc._decorator, g = y.ccclass, _ = (y.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodePanel = null;
e.btnClose = null;
e.scrollNode = null;
e.scrollItem = null;
return e;
}
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
this.nodePanel = cc.find("style/panel", this.node);
this.btnClose = cc.find("btn_close", this.nodePanel);
this.scrollNode = cc.find("scroll", this.nodePanel);
this.scrollItem = u.default.instance.getNode("HouseItem");
this.btnClose.on("click", this.onCloseClick, this);
};
e.prototype.onDestroy = function() {
this.btnClose.off("click", this.onCloseClick, this);
};
e.prototype.onEnable = function() {
this.zoomOut(this.nodePanel);
};
e.prototype.popupAnim = function() {
this.nodePanel.stopAllActions();
this.nodePanel.setScale(0, 0);
this.nodePanel.runAction(cc.scaleTo(.5, 1, 1).easing(cc.easeSineInOut()));
};
e.prototype.rendor = function() {
var t = this, e = l.HOUSE_DATA, n = !1;
this.scrollNode.getComponent(h.default).init(this.scrollItem, e.length, cc.size(540, 110), 0, function(o, i) {
if (!n) {
n = !0;
t.scrollNode.getComponent(cc.ScrollView).scrollToTop();
}
var a = e[i];
o.getChildByName("title").getComponent(cc.Label).string = "" + a.title;
var c = o.getChildByName("lock"), r = o.getChildByName("unlock"), s = c.getChildByName("coins");
if (a.coins <= 0 || l.default.instance.houseUnlock.indexOf(i) >= 0) {
c.active = !1;
r.active = !0;
r.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = f.default.instance.getSprite("" + a.icon);
var u = r.getChildByName("tip");
if (a.title == l.default.instance.houseCurrentItem.title) {
u.getChildByName("choose").active = !0;
u.getChildByName("unlock").active = !1;
} else {
u.getChildByName("choose").active = !1;
u.getChildByName("unlock").active = !0;
}
} else {
c.active = !0;
r.active = !1;
s.getChildByName("num").getComponent(cc.Label).string = "" + a.coins;
}
if (o.hasEventListener("click")) {
o.off("click");
o.on("click", function() {
t.onItemClick(a);
}, t);
} else o.on("click", function() {
t.onItemClick(a);
}, t);
}, function() {});
};
e.prototype.onDisable = function() {};
e.prototype.onItemClick = function(t) {
l.default.instance.houseTempItem = t;
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.HOUSE_SUBMIT);
};
e.prototype.onCloseClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.HOUSE, !1);
cc.find("MenuLayer", this.node.parent).getComponent(d.default).upgradeHouse();
};
e.prototype.show = function() {
t.prototype.show.call(this);
this.rendor();
cc.find("MenuLayer", this.node.parent).getComponent(d.default).refresh();
};
return a([ g ], e);
}(p.default));
n.default = _;
cc._RF.pop();
}, {
"../Enum": "Enum",
"../manager/AudioManager2": "AudioManager2",
"../manager/DataManager": "DataManager",
"../manager/PoolManager": "PoolManager",
"../manager/ResourceManager": "ResourceManager",
"../plugins/UIScrollControl": "UIScrollControl",
"./../StaticInstance": "StaticInstance",
"./HeaderLayer": "HeaderLayer",
"./MenuLayer": "MenuLayer"
} ],
HouseSubmitLayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "26a670bjPlNsble59/v3NL2", "HouseSubmitLayer");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../Enum"), r = t("./../StaticInstance"), s = t("../manager/AudioManager2"), l = t("./Baselayer"), u = t("../manager/DataManager"), h = t("../manager/ResourceManager"), f = cc._decorator, p = f.ccclass, d = (f.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodePanel = null;
e.btnClose = null;
return e;
}
e.prototype.onLoad = function() {
this.nodePanel = cc.find("style/panel", this.node);
this.btnClose = cc.find("btn_close", this.nodePanel);
this.btnClose.on("click", this.onCloseClick, this);
};
e.prototype.onDestroy = function() {
this.btnClose.off("click", this.onCloseClick, this);
};
e.prototype.onEnable = function() {
hxblSdk.showCustomFast(0, 0);
this.zoomOut(this.nodePanel);
this.rendor();
};
e.prototype.onDisable = function() {
hxblSdk.showCustomFast(0, 0);
};
e.prototype.rendor = function() {
if (u.default.instance.houseTempItem) {
var t = u.default.instance.houseTempItem.coins, e = this.nodePanel.getChildByName("yes"), n = this.nodePanel.getChildByName("no"), o = this.nodePanel.getChildByName("choose"), i = u.HOUSE_DATA.findIndex(function(t) {
return t == u.default.instance.houseTempItem;
});
if (u.default.instance.houseUnlock.indexOf(i) < 0) if (t > u.default.instance.coins) {
e.active = !1;
n.active = !0;
o.active = !1;
(a = n.getChildByName("btn_submit")).off("click");
a.on("click", function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
hxblSdk.showVideo(function(t) {
if (0 == t) {
hxblSdk.showToast("领取成功");
u.default.instance.coins += u.default.instance.coinCollectByVideo;
u.default.instance.save();
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.HOUSE_SUBMIT, !1);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.HOUSE);
} else 1 == t ? hxblSdk.showToast("视频播放失败") : hxblSdk.showToast("无可展示视频广告");
});
});
} else {
e.active = !0;
n.active = !1;
o.active = !1;
(a = e.getChildByName("btn_submit")).off("click");
a.on("click", function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
u.default.instance.coins -= t;
u.default.instance.houseUnlock.push(i);
u.default.instance.houseCurrentItem = u.default.instance.houseTempItem;
u.default.instance.save();
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.HOUSE_SUBMIT, !1);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.HOUSE);
});
} else {
e.active = !1;
n.active = !1;
o.active = !0;
o.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = h.default.instance.getSprite("" + u.default.instance.houseTempItem.icon);
var a;
(a = o.getChildByName("btn_submit")).off("click");
a.on("click", function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
u.default.instance.houseCurrentItem = u.default.instance.houseTempItem;
u.default.instance.save();
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.HOUSE_SUBMIT, !1);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.HOUSE);
});
}
}
};
e.prototype.onCloseClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.HOUSE_SUBMIT, !1);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.HOUSE);
};
return a([ p ], e);
}(l.default));
n.default = d;
cc._RF.pop();
}, {
"../Enum": "Enum",
"../manager/AudioManager2": "AudioManager2",
"../manager/DataManager": "DataManager",
"../manager/ResourceManager": "ResourceManager",
"./../StaticInstance": "StaticInstance",
"./Baselayer": "Baselayer"
} ],
Index: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "bd1a12oV81Cu7bBxEAPpr3S", "Index");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
}, c = this && this.__awaiter || function(t, e, n, o) {
return new (n || (n = Promise))(function(i, a) {
function c(t) {
try {
s(o.next(t));
} catch (t) {
a(t);
}
}
function r(t) {
try {
s(o.throw(t));
} catch (t) {
a(t);
}
}
function s(t) {
t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
t(e);
})).then(c, r);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, r = this && this.__generator || function(t, e) {
var n, o, i, a, c = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
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
function r(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(a) {
if (n) throw new TypeError("Generator is already executing.");
for (;c; ) try {
if (n = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
c.label++;
return {
value: a[1],
done: !1
};

case 5:
c.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = c.ops.pop();
c.trys.pop();
continue;

default:
if (!(i = c.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
c = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
c.label = a[1];
break;
}
if (6 === a[0] && c.label < i[1]) {
c.label = i[1];
i = a;
break;
}
if (i && c.label < i[2]) {
c.label = i[2];
c.ops.push(a);
break;
}
i[2] && c.ops.pop();
c.trys.pop();
continue;
}
a = e.call(t, c);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
n = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("./StaticInstance"), l = t("./Enum"), u = t("./manager/AudioManager2"), h = t("./manager/DataManager"), f = t("./manager/ResourceManager"), p = cc._decorator, d = p.ccclass, y = (p.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
var t = this;
this.node.getChildByName("UI").opacity = 255;
cc.view.setResizeCallback(function() {
return t.responsive();
});
this.responsive();
h.default.instance.loadingRate = 0;
};
e.prototype.start = function() {
return c(this, void 0, void 0, function() {
var t, e, n, o, i;
return r(this, function(a) {
switch (a.label) {
case 0:
t = [];
for (e in l.ENUM_RESOURCE_TYPE) t.push(e);
n = 0;
a.label = 1;

case 1:
if (!(n < t.length)) return [ 3, 4 ];
o = t[n];
i = l.ENUM_RESOURCE_TYPE[o];
return [ 4, f.default.instance.loadRes(i) ];

case 2:
a.sent();
a.label = 3;

case 3:
n++;
return [ 3, 1 ];

case 4:
s.StaticInstance.uiManager.init();
h.default.instance.restore();
PPSDK.musicState && u.default.instance.playMusic();
s.StaticInstance.uiManager.toggle(l.ENUM_UI_TYPE.MENU, !0, function() {
h.default.instance.loadingRate = 1;
});
return [ 2 ];
}
});
});
};
e.prototype.responsive = function() {
var t = cc.view.getDesignResolutionSize(), e = cc.view.getFrameSize(), n = function() {
cc.Canvas.instance.fitHeight = !0;
cc.Canvas.instance.fitWidth = !0;
}, o = t.width / t.height, i = e.width / e.height;
o < 1 ? i < 1 ? i > o ? n() : function() {
cc.Canvas.instance.fitHeight = !1;
cc.Canvas.instance.fitWidth = !0;
}() : n() : i > 1 ? i < o ? n() : function() {
cc.Canvas.instance.fitHeight = !0;
cc.Canvas.instance.fitWidth = !1;
}() : n();
};
return a([ d ], e);
}(cc.Component));
n.default = y;
cc._RF.pop();
}, {
"./Enum": "Enum",
"./StaticInstance": "StaticInstance",
"./manager/AudioManager2": "AudioManager2",
"./manager/DataManager": "DataManager",
"./manager/ResourceManager": "ResourceManager"
} ],
LevelLayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d20fdxF6s1NlLrLpxxXXB45", "LevelLayer");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../Enum"), r = t("./../StaticInstance"), s = t("../manager/AudioManager2"), l = t("../manager/DataManager"), u = t("../manager/PoolManager"), h = t("../plugins/UIScrollControl"), f = t("./HeaderLayer"), p = (t("../manager/ToastManager"), 
cc._decorator), d = p.ccclass, y = (p.property, function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodePanel = null;
e.btnClose = null;
e.scrollNode = null;
e.scrollItem = null;
e.newLevel = null;
return e;
}
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
this.nodePanel = cc.find("style/panel", this.node);
this.btnClose = cc.find("btn_close", this.nodePanel);
this.scrollNode = cc.find("scroll", this.nodePanel);
this.scrollItem = u.default.instance.getNode("LevelItem");
this.btnClose.on("click", this.onCloseClick, this);
};
e.prototype.onDestroy = function() {
this.btnClose.off("click", this.onCloseClick, this);
};
e.prototype.onEnable = function() {
this.zoomOut(this.nodePanel);
this.rendor();
this.rendorCoin();
this.rendorPower();
hxblSdk.showCustomFast(0, 0);
};
e.prototype.onDisable = function() {};
e.prototype.rendor = function() {
var t = this, e = l.default.instance.levels, n = !1;
this.scrollNode.getComponent(h.default).init(this.scrollItem, e, cc.size(540, 110), 0, function(e, o) {
if (!n) {
n = !0;
t.scrollNode.getComponent(cc.ScrollView).scrollToTop();
}
var i = e.getChildByName("unlock"), a = e.getChildByName("locked");
if (o + 1 > l.default.instance.levelMax) {
i.active = !1;
a.active = !0;
a.getChildByName("title").getComponent(cc.Label).string = "第" + (o + 1) + "关";
} else {
i.active = !0;
a.active = !1;
i.getChildByName("title").getComponent(cc.Label).string = "第" + (o + 1) + "关";
o + 1 == l.default.instance.levelMax ? i.getChildByName("new").active = !0 : i.getChildByName("new").active = !1;
if (i.hasEventListener("click")) {
i.off("click");
i.on("click", function() {
t.onItemClick(o + 1);
}, t);
} else i.on("click", function() {
t.onItemClick(o + 1);
}, t);
}
}, function(e) {
t.scheduleOnce(function() {
e.scrollToOffset(cc.v2(0, 110 * l.default.instance.levelMax - e.node.height / 2), .01);
});
});
};
e.prototype.onItemClick = function(t) {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
l.default.instance.power;
l.default.instance.power -= 1;
l.default.instance.save();
l.default.instance.level = t;
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.MENU, !1);
r.StaticInstance.transitionsManager.play(c.ENUM_UI_TYPE.LEVEL, c.ENUM_UI_TYPE.MAIN, function() {
r.StaticInstance.gameManager.onGameStart();
});
};
e.prototype.onCloseClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.LEVEL, !1);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.MENU);
};
return a([ d ], e);
}(f.default));
n.default = y;
cc._RF.pop();
}, {
"../Enum": "Enum",
"../manager/AudioManager2": "AudioManager2",
"../manager/DataManager": "DataManager",
"../manager/PoolManager": "PoolManager",
"../manager/ToastManager": "ToastManager",
"../plugins/UIScrollControl": "UIScrollControl",
"./../StaticInstance": "StaticInstance",
"./HeaderLayer": "HeaderLayer"
} ],
LoadingLayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0d076ynxVpJ6Ys/SGfhiZtJ", "LoadingLayer");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../Enum"), r = t("../manager/DataManager"), s = t("./Baselayer"), l = t("../StaticInstance"), u = cc._decorator, h = u.ccclass, f = u.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.loadfill = null;
return e;
}
e.prototype.onEnable = function() {};
e.prototype.onDisable = function() {};
e.prototype.update = function() {
if (this.loadfill && this.node.active) {
this.loadfill.fillRange = r.default.instance.loadingRate;
r.default.instance.loadingRate >= 1 && l.StaticInstance.uiManager.isActive(c.ENUM_UI_TYPE.MENU) && this.hide();
}
};
a([ f(cc.Sprite) ], e.prototype, "loadfill", void 0);
return a([ h ], e);
}(s.default);
n.default = p;
cc._RF.pop();
}, {
"../Enum": "Enum",
"../StaticInstance": "StaticInstance",
"../manager/DataManager": "DataManager",
"./Baselayer": "Baselayer"
} ],
LoseLayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b601bhCGWNK+ZoaczgoGYv3", "LoseLayer");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../Enum"), r = t("./../StaticInstance"), s = t("../manager/AudioManager2"), l = (t("../manager/ToastManager"), 
t("../manager/DataManager")), u = t("./HeaderLayer"), h = cc._decorator, f = h.ccclass, p = (h.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodePanel = null;
e.btnRestart = null;
e.btnHome = null;
e.btnNextReward = null;
return e;
}
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
this.nodePanel = cc.find("style/panel", this.node);
this.btnRestart = cc.find("buttons/btn_restart", this.nodePanel);
this.btnHome = cc.find("buttons/btn_home", this.nodePanel);
this.btnNextReward = cc.find("buttons/btn_next_reward", this.nodePanel);
this.btnRestart.on("click", this.onRestartClick, this);
this.btnHome.on("click", this.onHomeClick, this);
this.btnNextReward.on("click", this.onNextReward, this);
};
e.prototype.onDestroy = function() {
this.btnRestart.off("click", this.onRestartClick, this);
this.btnHome.off("click", this.onHomeClick, this);
this.btnNextReward.off("click", this.onNextReward, this);
};
e.prototype.onEnable = function() {
this.zoomIn(this.nodePanel);
this.rendorPower();
this.rendorCoin();
hxblSdk.showCustomFast(3, 1);
};
e.prototype.onDisable = function() {};
e.prototype.onRestartClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
l.default.instance.power;
l.default.instance.power -= 1;
l.default.instance.save();
r.StaticInstance.transitionsManager.play(c.ENUM_UI_TYPE.LOSE, null, function() {
r.StaticInstance.gameManager.onGameRestart();
});
};
e.prototype.onHomeClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.MAIN, !1);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.LOSE, !1);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.MENU);
};
e.prototype.onNextReward = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
hxblSdk.showVideo(function(t) {
if (0 == t) {
hxblSdk.showToast("领取成功");
var e = l.default.instance.level + 1;
e = Math.min(e, l.default.instance.levels);
l.default.instance.level = e;
e > l.default.instance.levelMax && (l.default.instance.levelMax = e);
l.default.instance.save();
r.StaticInstance.transitionsManager.play(c.ENUM_UI_TYPE.LOSE, null, function() {
r.StaticInstance.gameManager.onGameStart();
});
} else 1 == t ? hxblSdk.showToast("视频播放失败") : hxblSdk.showToast("无可展示视频广告");
});
};
return a([ f ], e);
}(u.default));
n.default = p;
cc._RF.pop();
}, {
"../Enum": "Enum",
"../manager/AudioManager2": "AudioManager2",
"../manager/DataManager": "DataManager",
"../manager/ToastManager": "ToastManager",
"./../StaticInstance": "StaticInstance",
"./HeaderLayer": "HeaderLayer"
} ],
MainLayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "995d75Ra29EXY7A+cLQ/Mrd", "MainLayer");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
}, c = this && this.__awaiter || function(t, e, n, o) {
return new (n || (n = Promise))(function(i, a) {
function c(t) {
try {
s(o.next(t));
} catch (t) {
a(t);
}
}
function r(t) {
try {
s(o.throw(t));
} catch (t) {
a(t);
}
}
function s(t) {
t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
t(e);
})).then(c, r);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, r = this && this.__generator || function(t, e) {
var n, o, i, a, c = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
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
function r(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(a) {
if (n) throw new TypeError("Generator is already executing.");
for (;c; ) try {
if (n = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
c.label++;
return {
value: a[1],
done: !1
};

case 5:
c.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = c.ops.pop();
c.trys.pop();
continue;

default:
if (!(i = c.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
c = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
c.label = a[1];
break;
}
if (6 === a[0] && c.label < i[1]) {
c.label = i[1];
i = a;
break;
}
if (i && c.label < i[2]) {
c.label = i[2];
c.ops.push(a);
break;
}
i[2] && c.ops.pop();
c.trys.pop();
continue;
}
a = e.call(t, c);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
n = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("../Enum"), l = t("../manager/AudioManager2"), u = t("../manager/DataManager"), h = t("../manager/ToastManager"), f = t("../StaticInstance"), p = t("../Utils2"), d = t("./Baselayer"), y = cc._decorator, g = y.ccclass, _ = (y.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.btnPause = null;
e.levelLabel = null;
e.timerNum = null;
e.timerIndex = -1;
e.btnPass = null;
e.btnAddTime = null;
e.btnTips = null;
return e;
}
e.prototype.onLoad = function() {
this.btnPause = cc.find("btn_pause", this.node);
this.levelLabel = cc.find("level/label", this.node);
this.timerNum = cc.find("timer/num", this.node);
this.btnPass = cc.find("btns/btn_pass", this.node);
this.btnAddTime = cc.find("btns/btn_addTime", this.node);
this.btnTips = cc.find("btns/btn_tips", this.node);
this.btnPass.on("click", this.onPassClick, this);
this.btnPause.on("click", this.onPauseClick, this);
this.btnAddTime.on("click", this.onAddTimeClick, this);
this.btnTips.on("click", this.onTipsClik, this);
};
e.prototype.onDestroy = function() {
this.btnPause.off("click", this.onPauseClick, this);
this.btnPass.off("click", this.onPassClick, this);
};
e.prototype.onEnable = function() {
hxblSdk.showCustomFast(0, 0);
};
e.prototype.onDisable = function() {
hxblSdk.showCustomFast(0, 0);
};
e.prototype.onTipsClik = function() {
var t = this;
f.StaticInstance.gameManager.isTip || hxblSdk.showVideo(function(e) {
if (0 == e) {
hxblSdk.showToast("领取成功");
f.StaticInstance.gameManager.gameTips();
t.btnTips.active = !1;
} else 1 == e ? hxblSdk.showToast("视频播放失败") : hxblSdk.showToast("无可展示视频广告");
});
};
e.prototype.onAddTimeClick = function() {
var t = this;
this.onTimerStop();
hxblSdk.showVideo(function(e) {
if (0 == e) {
hxblSdk.showToast("领取成功");
u.default.instance.timer += 30;
t.timerNum.getComponent(cc.Label).string = p.formatSeconds("" + u.default.instance.timer, "i:s");
} else 1 == e ? hxblSdk.showToast("视频播放失败") : hxblSdk.showToast("无可展示视频广告");
});
this.onTimerStart();
};
e.prototype.onPauseClick = function() {
l.default.instance.playSound(s.ENUM_AUDIO_CLIP.CLICK);
if (u.default.instance.playerIsMoving) h.default.instance.show("请稍后，小狗正在寻找蜜蜂~", {
gravity: "BOTTOM",
bg_color: cc.color(226, 69, 109, 255)
}); else {
f.StaticInstance.uiManager.setMainTimer(!1);
f.StaticInstance.uiManager.setMainTimerSound(!1);
f.StaticInstance.uiManager.toggle(s.ENUM_UI_TYPE.EXIT);
}
};
e.prototype.onPassClick = function() {
var t = this;
l.default.instance.playSound(s.ENUM_AUDIO_CLIP.CLICK);
u.default.instance.playerIsMoving ? h.default.instance.show("请稍后，小狗正在寻找蜜蜂~", {
gravity: "BOTTOM",
bg_color: cc.color(226, 69, 109, 255)
}) : hxblSdk.showVideo(function(e) {
if (0 == e) {
hxblSdk.showToast("领取成功");
f.StaticInstance.uiManager.setMainTimer(!1);
f.StaticInstance.uiManager.setMainTimerSound(!1);
t.passLevel();
} else 1 == e ? hxblSdk.showToast("视频播放失败") : hxblSdk.showToast("无可展示视频广告");
});
};
e.prototype.passLevel = function() {
u.default.instance.status = s.ENUM_GAME_STATUS.UNRUNING;
var t = u.default.instance.level + 1;
t = Math.min(t, u.default.instance.levels);
u.default.instance.level = t;
t > u.default.instance.levelMax && (u.default.instance.levelMax = t);
u.default.instance.save();
f.StaticInstance.transitionsManager.play(s.ENUM_UI_TYPE.PASS, null, function() {
f.StaticInstance.gameManager.onGameStart();
});
};
e.prototype.rendorLevel = function() {
this.levelLabel.getComponent(cc.Label).string = "第" + u.default.instance.level + "关";
};
e.prototype.onTimerStart = function() {
var t = this, e = this.timerNum.getComponent(cc.Label);
e.string = p.formatSeconds("" + u.default.instance.timer, "i:s");
this.unscheduleAllCallbacks();
this.schedule(function() {
if (!u.default.instance.playerGuide) {
u.default.instance.timer <= 1 && t.unscheduleAllCallbacks();
u.default.instance.timer--;
u.default.instance.timer < 0 && (u.default.instance.timer = 0);
e.string = p.formatSeconds("" + u.default.instance.timer, "i:s");
t.onTimerSoundStart();
if (u.default.instance.timer <= 0) {
u.default.instance.status = s.ENUM_GAME_STATUS.UNRUNING;
f.StaticInstance.gameManager.onGameOver(s.ENUM_UI_TYPE.LOSE);
}
}
}, 1);
};
e.prototype.onTimerStop = function() {
this.unscheduleAllCallbacks();
};
e.prototype.onTimerSoundStart = function() {
return c(this, void 0, void 0, function() {
var t;
return r(this, function(e) {
switch (e.label) {
case 0:
if (!(u.default.instance.timer <= 5 && u.default.instance.timer > 0 && this.timerIndex < 0)) return [ 3, 2 ];
t = this;
return [ 4, l.default.instance.playSound(s.ENUM_AUDIO_CLIP.TIMER, !0) ];

case 1:
t.timerIndex = e.sent();
e.label = 2;

case 2:
return [ 2 ];
}
});
});
};
e.prototype.onTimerSoundStop = function() {
l.default.instance.stopSound(this.timerIndex);
this.timerIndex = -1;
};
return a([ g ], e);
}(d.default));
n.default = _;
cc._RF.pop();
}, {
"../Enum": "Enum",
"../StaticInstance": "StaticInstance",
"../Utils2": "Utils2",
"../manager/AudioManager2": "AudioManager2",
"../manager/DataManager": "DataManager",
"../manager/ToastManager": "ToastManager",
"./Baselayer": "Baselayer"
} ],
MenuLayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "94d9eW2z5xN9KXMq6SiqvtZ", "MenuLayer");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../Enum"), r = t("./../StaticInstance"), s = t("../manager/AudioManager2"), l = t("./HeaderLayer"), u = t("../manager/DataManager"), h = t("../manager/ResourceManager"), f = (t("../manager/ToastManager"), 
cc._decorator), p = f.ccclass, d = (f.property, function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.btnStart = null;
e.btnLevel = null;
e.btnSetting = null;
e.btnGames = null;
e.btnDaily = null;
e.btnGift = null;
e.btnHouse = null;
e.btnRank = null;
e.effectNode = null;
e.hammerNode = null;
e.gohome = null;
e.handNode = null;
return e;
}
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
this.btnStart = cc.find("center/btn_start", this.node);
this.btnLevel = cc.find("center/btn_level", this.node);
this.btnSetting = cc.find("btn_setting", this.node);
this.btnGames = cc.find("left/btn_games", this.node);
this.btnRank = cc.find("left/btn_rank", this.node);
this.btnDaily = cc.find("right/btn_daily", this.node);
this.btnGift = cc.find("left/btn_gift", this.node);
this.btnHouse = cc.find("house", this.node);
this.gohome = cc.find("btn_gohome", this.node);
this.effectNode = cc.find("house/effect", this.node);
this.hammerNode = cc.find("house/hammer", this.node);
this.handNode = cc.find("start_hand", this.node);
this.btnStart.on("click", this.onStartClick, this);
this.btnLevel.on("click", this.onLevelClick, this);
this.btnSetting.on("click", this.onSettingClick, this);
this.btnGames.on("click", this.onGamesClick, this);
this.btnRank.on("click", this.onRankClick, this);
this.btnDaily.on("click", this.onDailyClick, this);
this.btnGift.on("click", this.onGiftClick, this);
this.btnHouse.on("click", this.onHouseClick, this);
this.gohome.on("click", this.onGoHomeClick, this);
};
e.prototype.onDestroy = function() {
this.btnStart.off("click", this.onStartClick, this);
this.btnLevel.off("click", this.onLevelClick, this);
this.btnSetting.off("click", this.onSettingClick, this);
this.btnGames.off("click", this.onGamesClick, this);
this.btnRank.off("click", this.onRankClick, this);
this.btnDaily.off("click", this.onDailyClick, this);
this.btnGift.off("click", this.onGiftClick, this);
this.btnHouse.off("click", this.onHouseClick, this);
this.gohome.off("click", this.onGoHomeClick, this);
};
e.prototype.onEnable = function() {
this.rendorHouse();
this.rendorCoin();
this.rendorPower();
hxblSdk.showCustomFast(1, 0);
this.handAnim();
};
e.prototype.onDisable = function() {};
e.prototype.handAnim = function() {
var t = this.handNode.getPosition(), e = cc.v3(t.x + 35, t.y - 30);
cc.tween(this.handNode).repeatForever(cc.tween(this.handNode).to(.5, {
position: cc.v3(e)
}).to(.5, {
position: cc.v3(t)
})).start();
};
e.prototype.rendorHouse = function() {
var t = this.btnHouse.getChildByName("levelup");
t.active = !1;
for (var e = 0, n = 0; n < 29; n++) if (u.default.instance.houseUnlock.indexOf(n) < 0) {
e = n;
break;
}
var o = u.HOUSE_DATA[e];
u.default.instance.coins >= o.coins && (t.active = !0);
this.btnHouse.getComponent(cc.Sprite).spriteFrame = h.default.instance.getSprite("" + u.default.instance.houseCurrentItem.icon);
};
e.prototype.onStartClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
u.default.instance.power;
u.default.instance.power -= 1;
u.default.instance.save();
r.StaticInstance.transitionsManager.play(c.ENUM_UI_TYPE.MENU, c.ENUM_UI_TYPE.MAIN, function() {
r.StaticInstance.gameManager.onGameStart();
});
};
e.prototype.onLevelClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.LEVEL);
};
e.prototype.onGoHomeClick = function() {
s.default.instance.stopMusic();
PPSDK.subGame.goHome();
};
e.prototype.onSettingClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.SETTING);
};
e.prototype.onGamesClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.MENU, !1);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.MORE);
};
e.prototype.onRankClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.MENU, !1);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.RANK);
};
e.prototype.onDailyClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.DAILY);
};
e.prototype.onGiftClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.REWARD);
};
e.prototype.onHouseClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.HOUSE);
};
e.prototype.show = function() {
t.prototype.show.call(this);
this.refresh();
};
e.prototype.refresh = function() {
this.rendorCoin();
this.rendorPower();
};
e.prototype.upgradeHouse = function() {
var t = this;
console.log("房子改造中......");
if (this.btnHouse.getComponent(cc.Sprite).spriteFrame != h.default.instance.getSprite("" + u.default.instance.houseCurrentItem.icon)) {
this.hammerNode.active = !0;
this.effectNode.active = !0;
s.default.instance.playSound("house", !1);
this.hammerNode.runAction(cc.repeatForever(cc.sequence(cc.rotateTo(.1, 25), cc.rotateTo(.1, 0), cc.rotateTo(.1, -25), cc.rotateTo(.1, 0))));
}
this.scheduleOnce(function() {
t.hammerNode.active = !1;
t.effectNode.active = !1;
t.rendorHouse();
}, 1);
};
return a([ p ], e);
}(l.default));
n.default = d;
cc._RF.pop();
}, {
"../Enum": "Enum",
"../manager/AudioManager2": "AudioManager2",
"../manager/DataManager": "DataManager",
"../manager/ResourceManager": "ResourceManager",
"../manager/ToastManager": "ToastManager",
"./../StaticInstance": "StaticInstance",
"./HeaderLayer": "HeaderLayer"
} ],
MoreLayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9152a3E4wFB0JCSs+5/fMuT", "MoreLayer");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../Enum"), r = t("./../StaticInstance"), s = t("../manager/AudioManager2"), l = t("./Baselayer"), u = t("../manager/DataManager"), h = t("../manager/PoolManager"), f = t("../plugins/UIScrollControl"), p = t("../manager/ResourceManager"), d = cc._decorator, y = d.ccclass, g = (d.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodePanel = null;
e.btnClose = null;
e.scrollNode = null;
e.scrollItem = null;
return e;
}
e.prototype.onLoad = function() {
this.nodePanel = cc.find("style/panel", this.node);
this.btnClose = cc.find("btn_close", this.nodePanel);
this.scrollNode = cc.find("scroll", this.nodePanel);
this.scrollItem = h.default.instance.getNode("MoreItem");
this.btnClose.on("click", this.onCloseClick, this);
};
e.prototype.onDestroy = function() {
this.btnClose.off("click", this.onCloseClick, this);
};
e.prototype.onEnable = function() {
this.zoomIn(this.nodePanel);
this.rendor();
};
e.prototype.rendor = function() {
var t = this, e = u.default.instance.games, n = !1;
this.scrollNode.getComponent(f.default).init(this.scrollItem, e.length, cc.size(540, 110), 0, function(o, i) {
if (!n) {
n = !0;
t.scrollNode.getComponent(cc.ScrollView).scrollToTop();
}
var a = e[i];
o.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = p.default.instance.getSprite("" + a.icon);
o.getChildByName("title").getComponent(cc.Label).string = "" + a.title;
if (o.hasEventListener("click")) {
o.off("click");
o.on("click", function() {
t.onItemClick(a);
}, t);
} else o.on("click", function() {
t.onItemClick(a);
}, t);
}, function(t) {
t.scrollToTop();
});
};
e.prototype.onDisable = function() {};
e.prototype.onItemClick = function(t) {
if ("undefined" == typeof window.wx) t.url; else {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
t.appid;
}
};
e.prototype.onCloseClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.MORE, !1);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.MENU);
};
return a([ y ], e);
}(l.default));
n.default = g;
cc._RF.pop();
}, {
"../Enum": "Enum",
"../manager/AudioManager2": "AudioManager2",
"../manager/DataManager": "DataManager",
"../manager/PoolManager": "PoolManager",
"../manager/ResourceManager": "ResourceManager",
"../plugins/UIScrollControl": "UIScrollControl",
"./../StaticInstance": "StaticInstance",
"./Baselayer": "Baselayer"
} ],
PassLayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "4dd7cWuNzxBs5CiIFlcQXkB", "PassLayer");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../Enum"), r = t("./../StaticInstance"), s = t("../manager/AudioManager2"), l = t("./HeaderLayer"), u = t("../manager/DataManager"), h = cc._decorator, f = h.ccclass, p = (h.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodePanel = null;
e.btnSubmit = null;
e.btnCancel = null;
return e;
}
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
this.nodePanel = cc.find("style/panel", this.node);
this.btnSubmit = cc.find("buttons/btn_submit", this.nodePanel);
this.btnCancel = cc.find("buttons/btn_cancel", this.nodePanel);
};
e.prototype.onDestroy = function() {
this.btnSubmit.off("click", this.onSubmitClick, this);
this.btnCancel.off("click", this.onCancelClick, this);
};
e.prototype.onEnable = function() {
this.zoomOut(this.nodePanel);
this.rendorPower();
this.rendorCoin();
};
e.prototype.onDisable = function() {};
e.prototype.onSubmitClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
u.default.instance.status = c.ENUM_GAME_STATUS.UNRUNING;
var t = u.default.instance.level + 1;
t = Math.min(t, u.default.instance.levels);
u.default.instance.level = t;
t > u.default.instance.levelMax && (u.default.instance.levelMax = t);
u.default.instance.save();
r.StaticInstance.transitionsManager.play(c.ENUM_UI_TYPE.PASS, null, function() {
r.StaticInstance.gameManager.onGameStart();
});
};
e.prototype.onCancelClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
r.StaticInstance.uiManager.setMainTimer(!0);
r.StaticInstance.uiManager.setMainTimerSound(!0);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.PASS, !1);
};
return a([ f ], e);
}(l.default));
n.default = p;
cc._RF.pop();
}, {
"../Enum": "Enum",
"../manager/AudioManager2": "AudioManager2",
"../manager/DataManager": "DataManager",
"./../StaticInstance": "StaticInstance",
"./HeaderLayer": "HeaderLayer"
} ],
PoolManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a46f4A6CpBE04BZI8Amk1vE", "PoolManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = function() {
function t() {
this._dictPool = {};
this._dictPrefab = {};
}
t.getInstance = function() {
null === this._instance && (this._instance = new this());
return this._instance;
};
Object.defineProperty(t, "instance", {
get: function() {
return this.getInstance();
},
enumerable: !1,
configurable: !0
});
t.prototype.copyNode = function(t, e) {
var n = t.name;
this._dictPrefab[n] = t;
var o = null;
if (this._dictPool.hasOwnProperty(n)) o = (i = this._dictPool[n]).size() > 0 ? i.get() : cc.instantiate(t); else {
var i = new cc.NodePool();
this._dictPool[n] = i;
o = cc.instantiate(t);
}
if (e) {
o.parent = e;
o.active = !0;
}
return o;
};
t.prototype.getNode = function(t, e, n) {
var o, i;
if ("string" == typeof t) {
i = t;
if (!(o = this._dictPrefab[t])) {
console.log("Pool invalid prefab name = ", i);
return null;
}
} else {
o = t;
i = t.data.name;
}
var a = null;
if (this._dictPool.hasOwnProperty(i)) a = (c = this._dictPool[i]).size() > 0 ? c.get() : cc.instantiate(o); else {
var c = new cc.NodePool();
this._dictPool[i] = c;
a = cc.instantiate(o);
}
if (e) {
a.parent = e;
a.active = !0;
n && (a.position = n);
}
return a;
};
t.prototype.putNode = function(t, e) {
void 0 === e && (e = !1);
if (t) {
var n = t.name, o = null;
if (this._dictPool.hasOwnProperty(n)) o = this._dictPool[n]; else {
o = new cc.NodePool();
this._dictPool[n] = o;
}
o.put(t);
}
};
t.prototype.clearPool = function(t) {
this._dictPool.hasOwnProperty(t) && this._dictPool[t].clear();
};
t.prototype.setPrefab = function(t, e) {
this._dictPrefab[t] = e;
};
t.prototype.getPrefab = function(t) {
return this._dictPrefab[t];
};
t._instance = null;
return t;
}();
n.default = o;
cc._RF.pop();
}, {} ],
RankLayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3cbf0IiYYFLobHdOpllWRzw", "RankLayer");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../Enum"), r = t("./Baselayer"), s = t("../manager/AudioManager2"), l = t("./../StaticInstance"), u = cc._decorator, h = u.ccclass, f = (u.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.panel = null;
e.btnClose = null;
e.btnShare = null;
return e;
}
e.prototype.onLoad = function() {
this.panel = cc.find("style/panel", this.node);
this.btnClose = cc.find("btn_close", this.panel);
this.btnShare = cc.find("btn_share", this.panel);
this.btnClose.on("click", this.onCloseClick, this);
this.btnShare.on("click", this.onShareClick, this);
};
e.prototype.onDestroy = function() {
this.btnClose.off("click", this.onCloseClick, this);
this.btnShare.off("click", this.onShareClick, this);
};
e.prototype.onEnable = function() {
this.zoomIn(this.panel);
};
e.prototype.onDisable = function() {};
e.prototype.onCloseClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
l.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.RANK, !1);
l.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.MENU);
};
e.prototype.onShareClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
};
return a([ h ], e);
}(r.default));
n.default = f;
cc._RF.pop();
}, {
"../Enum": "Enum",
"../manager/AudioManager2": "AudioManager2",
"./../StaticInstance": "StaticInstance",
"./Baselayer": "Baselayer"
} ],
ResourceManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ab2a6CEvxhMQ77c3CMn4zMe", "ResourceManager");
var o = this && this.__awaiter || function(t, e, n, o) {
return new (n || (n = Promise))(function(i, a) {
function c(t) {
try {
s(o.next(t));
} catch (t) {
a(t);
}
}
function r(t) {
try {
s(o.throw(t));
} catch (t) {
a(t);
}
}
function s(t) {
t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
t(e);
})).then(c, r);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, i = this && this.__generator || function(t, e) {
var n, o, i, a, c = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
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
function r(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(a) {
if (n) throw new TypeError("Generator is already executing.");
for (;c; ) try {
if (n = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
c.label++;
return {
value: a[1],
done: !1
};

case 5:
c.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = c.ops.pop();
c.trys.pop();
continue;

default:
if (!(i = c.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
c = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
c.label = a[1];
break;
}
if (6 === a[0] && c.label < i[1]) {
c.label = i[1];
i = a;
break;
}
if (i && c.label < i[2]) {
c.label = i[2];
c.ops.push(a);
break;
}
i[2] && c.ops.pop();
c.trys.pop();
continue;
}
a = e.call(t, c);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
n = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./DataManager"), c = t("./PoolManager"), r = function() {
function t() {
this.clipMap = {};
this.spriteMap = {};
this.spineMap = {};
this.atlasMap = {};
}
t.getInstance = function() {
null === this._instance && (this._instance = new this());
return this._instance;
};
Object.defineProperty(t, "instance", {
get: function() {
return this.getInstance();
},
enumerable: !1,
configurable: !0
});
t.prototype.loadRes = function(t, e) {
void 0 === e && (e = 0);
return o(this, void 0, void 0, function() {
var e = this;
return i(this, function() {
return [ 2, new Promise(function(n, o) {
var i = a.default.instance.loadingRate;
cc.assetManager.loadBundle("HX_HXMG", null, function(r, s) {
s.loadDir(t.path, t.content, function(e, n) {
if (t.ratio > 0) {
var o = Math.floor(100 * (i + t.ratio * e / n)) / 100;
a.default.instance.loadingRate = Math.max(o, a.default.instance.loadingRate);
}
}, function(i, a) {
if (i) {
console.log(i);
o && o();
}
var r;
if ("audio" == t.type) for (var s = 0; s < a.length; s++) {
r = a[s];
e.clipMap[r.name] || (e.clipMap[r.name] = r);
}
if ("prefab" == t.type) for (s = 0; s < a.length; s++) {
r = a[s];
c.default.instance.setPrefab(r.data.name, r);
}
if ("sprite" == t.type) for (s = 0; s < a.length; s++) {
r = a[s];
e.spriteMap[r.name] || (e.spriteMap[r.name] = r);
}
if ("spine" == t.type) for (s = 0; s < a.length; s++) {
r = a[s];
e.spineMap[r.name] || (e.spineMap[r.name] = r);
}
if ("spriteAtlas" == t.type) for (s = 0; s < a.length; s++) {
r = a[s];
if (!e.atlasMap[r.name]) {
var l = r.name.split(".", 1);
e.atlasMap[l] = r;
}
}
n && n();
});
});
}) ];
});
});
};
t.prototype.getClip = function(t) {
return this.clipMap[t];
};
t.prototype.getSprite = function(t) {
return this.spriteMap[t];
};
t._instance = null;
return t;
}();
n.default = r;
cc._RF.pop();
}, {
"./DataManager": "DataManager",
"./PoolManager": "PoolManager"
} ],
RewardLayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ff73eG4zd9PtJcj7BMxfb+Y", "RewardLayer");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../Enum"), r = t("./../StaticInstance"), s = t("../manager/AudioManager2"), l = t("./Baselayer"), u = t("../manager/DataManager"), h = cc._decorator, f = h.ccclass, p = (h.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodePanel = null;
e.btnSubmit = null;
e.btnClose = null;
return e;
}
e.prototype.onLoad = function() {
this.nodePanel = cc.find("style/panel", this.node);
this.btnSubmit = cc.find("main/btn_submit", this.nodePanel);
this.btnClose = cc.find("btn_close", this.nodePanel);
this.btnSubmit.on("click", this.onSubmitClick, this);
this.btnClose.on("click", this.onCloseClick, this);
};
e.prototype.onDestroy = function() {
this.btnSubmit.off("click", this.onSubmitClick, this);
this.btnClose.off("click", this.onCloseClick, this);
};
e.prototype.onEnable = function() {
hxblSdk.showCustomFast(0, 0);
this.zoomOut(this.nodePanel);
};
e.prototype.onDisable = function() {
hxblSdk.showCustomFast(0, 0);
};
e.prototype.onCloseClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.REWARD, !1);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.MENU);
};
e.prototype.onSubmitClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
hxblSdk.showVideo(function(t) {
if (0 == t) {
hxblSdk.showToast("领取成功");
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.COLLECT_COIN);
u.default.instance.coins += 30;
u.default.instance.power += 1;
u.default.instance.save();
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.REWARD, !1);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.MENU);
} else 1 == t ? hxblSdk.showToast("视频播放失败") : hxblSdk.showToast("无可展示视频广告");
});
};
return a([ f ], e);
}(l.default));
n.default = p;
cc._RF.pop();
}, {
"../Enum": "Enum",
"../manager/AudioManager2": "AudioManager2",
"../manager/DataManager": "DataManager",
"./../StaticInstance": "StaticInstance",
"./Baselayer": "Baselayer"
} ],
SdkManager2: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "63001T9hINHxKQXF9QDpdaI", "SdkManager2");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = t("./AudioManager"), i = function() {
function t() {
this.shareTitle = "好玩上头的游戏，你敢接受挑战吗？";
this.shareImg = "";
this.videoId = "";
this.videoAd = null;
this.interstitialId = "";
this.interstitialAd = null;
this.bannerId = "";
this.bannerAd = null;
this.custom5Id = "";
this.custom5Ad = null;
}
Object.defineProperty(t, "instance", {
get: function() {
null == this._instance && (this._instance = new t());
return this._instance;
},
enumerable: !1,
configurable: !0
});
t.prototype.getPlatform = function() {
var t = null;
cc.sys.platform == cc.sys.WECHAT_GAME ? t = window.wx : cc.sys.platform == cc.sys.BYTEDANCE_GAME && (t = window.tt);
return t;
};
t.prototype.activeShare = function(t) {
void 0 === t && (t = {
title: "",
imageUrl: "",
query: ""
});
var e = this.getPlatform();
if (e) {
t.title = t.title || this.shareTitle;
t.imageUrl = t.imageUrl || this.shareImg;
e.shareAppMessage(t);
} else console.log("【主动分享】仅支持小游戏平台!");
};
t.prototype.passiveShare = function(t) {
void 0 === t && (t = {
title: "",
imageUrl: "",
query: ""
});
var e = this.getPlatform();
if (e) {
e.showShareMenu({
success: function() {},
fail: function() {}
});
t.title = t.title || this.shareTitle;
t.imageUrl = t.imageUrl || this.shareImg;
e.onShareAppMessage(function() {
return t;
});
} else console.log("【被动分享】仅支持小游戏平台!");
};
t.prototype.getShareQuery = function(t) {
var e = this.getPlatform();
if (e) {
var n = e.getLaunchOptionsSync().query, o = null;
n && n[t] && (o = n[t]);
return o;
}
console.log("【分享参数获取】仅支持小游戏平台!");
};
t.prototype.turnToApp = function(t) {
if ("" != t) {
var e = this.getPlatform();
e ? e.navigateToMiniProgram({
appId: t
}) : this.turnToBrowser(t);
}
};
t.prototype.turnToBrowser = function(t) {
window.open(t);
};
t.prototype.initAudioEndListener = function() {
"undefined" != typeof window.wx ? window.wx.onAudioInterruptionEnd(function() {
console.log("音频中断，恢复播放");
o.default.instance.playMusic();
}) : console.log("【音频中断监听】仅支持微信平台!");
};
t.prototype.initBannerAd = function() {
var t = this, e = this.getPlatform();
if (e) if ("" != this.bannerId) {
var n = e.getSystemInfoSync();
if (null == this.bannerAd) {
this.bannerAd = e.createBannerAd({
adUnitId: this.bannerId,
adIntervals: 30,
style: {
height: n.windowHeight - 80,
left: 0,
top: 500,
width: n.windowWidth
}
});
this.bannerAd.onResize(function() {
t.bannerAd.style.top = n.windowHeight - t.bannerAd.style.realHeight;
t.bannerAd.style.left = n.windowWidth / 2 - t.bannerAd.style.realWidth / 2;
});
this.bannerAd.onError(function() {
console.error("【流量主横幅】初始化有误");
});
}
} else console.log("【流量主】请配置横幅广告ID"); else console.log("【流量主横幅初始化】仅支持小游戏平台!");
};
t.prototype.toggleBannerAd = function(t) {
this.getPlatform() ? this.bannerAd && (t ? this.bannerAd.show() : this.bannerAd.hide()) : console.log("【流量主横幅】仅支持小游戏平台!");
};
t.prototype.initInterstitialAd = function() {
var t = this.getPlatform();
if (t) if ("" != this.interstitialId) {
if (null == this.interstitialAd) {
this.interstitialAd = t.createInterstitialAd({
adUnitId: this.interstitialId
});
this.interstitialAd.onError(function() {
console.error("【流量主插屏】初始化有误");
});
}
} else console.log("【流量主】请配置插屏广告ID"); else console.log("【流量主插屏初始化】仅支持小游戏平台!");
};
t.prototype.showInterstitialAd = function() {
this.getPlatform() ? this.interstitialAd && this.interstitialAd.show().catch(function() {
console.error("【流量主插屏】加载失败");
}) : console.log("【流量主插屏】仅支持小游戏平台!");
};
t.prototype.initVideoAd = function() {
var t = this.getPlatform();
if (t) if ("" != this.videoId) {
if (null == this.videoAd) {
this.videoAd = t.createRewardedVideoAd({
adUnitId: this.videoId
});
this.videoAd.onError(function() {
console.error("【流量主激励】初始化有误");
});
}
} else console.log("【流量主】请配置激励视频广告ID"); else console.log("【流量主激励初始化】仅支持小游戏平台!");
};
t.prototype.showVideoAd = function(t, e) {
var n = this;
if (!this.getPlatform()) return t && t("模拟成功，激励奖励已发放");
if (!this.videoAd) return e && e("该功能尚未开放");
this.videoAd.offClose();
this.videoAd.onClose(function(o) {
n.videoAd.offClose();
return o && o.isEnded || void 0 === o ? t && t("激励奖励已发放") : e && e("视频播放中断");
});
this.videoAd.show().catch(function() {
n.videoAd.load().then(function() {
return n.videoAd.show();
}).catch(function() {
console.log("广告展示失败");
});
});
};
t.prototype.initCustom5Ad = function() {
var t = this.getPlatform();
if (t) if ("" != this.custom5Id) {
var e = t.getSystemInfoSync();
if (null == this.custom5Ad) {
this.custom5Ad = t.createCustomAd({
adUnitId: this.custom5Id,
style: {
width: e.screenWidth / 1.2,
left: (e.screenWidth - e.screenWidth / 1.2) / 2,
top: e.windowHeight / 10,
fixed: 0
}
});
this.custom5Ad.onError(function() {
console.error("【流量主格子5】初始化有误");
});
}
} else console.log("【流量主】请配置格子5广告ID"); else console.log("【格子5初始化】仅支持小游戏平台!");
};
t.prototype.showCustomAd = function(t) {
void 0 === t && (t = 5);
this.getPlatform() ? 5 == t && this.custom5Ad && this.custom5Ad.show() : console.log("【流量主格子】仅支持小游戏平台!");
};
t.prototype.getRank = function() {
"undefined" != typeof window.wx ? window.wx.postMessage({
event: "getRank"
}) : console.log("【获取排名】仅支持微信平台!");
};
t.prototype.setRank = function(t) {
"undefined" != typeof window.wx ? window.wx.postMessage({
event: "setScore",
score: t
}) : console.log("【设置排名】仅支持微信平台!", t);
};
t._instance = null;
return t;
}();
n.default = i;
cc._RF.pop();
}, {
"./AudioManager": void 0
} ],
SettingLayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1a0aacxZX5NJqNTuBy0vbq5", "SettingLayer");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../Enum"), r = t("./../StaticInstance"), s = t("../manager/AudioManager2"), l = t("./Baselayer"), u = t("../manager/DataManager"), h = cc._decorator, f = h.ccclass, p = (h.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodePanel = null;
e.btnMusic = null;
e.btnSound = null;
e.btnVibrate = null;
e.btnClose = null;
return e;
}
e.prototype.onLoad = function() {
this.nodePanel = cc.find("style/panel", this.node);
this.btnMusic = cc.find("buttons/btn_music/btn", this.nodePanel);
this.btnSound = cc.find("buttons/btn_sound/btn", this.nodePanel);
this.btnVibrate = cc.find("buttons/btn_vibrate/btn", this.nodePanel);
this.btnClose = cc.find("btn_close", this.nodePanel);
this.btnMusic.on("click", this.onMusicClick, this);
this.btnSound.on("click", this.onSoundClick, this);
this.btnClose.on("click", this.onCloseClick, this);
this.btnVibrate.on("click", this.onVibrateClick, this);
};
e.prototype.onDestroy = function() {
this.btnMusic.off("click", this.onMusicClick, this);
this.btnSound.off("click", this.onSoundClick, this);
this.btnClose.off("click", this.onCloseClick, this);
this.btnVibrate.off("click", this.onVibrateClick, this);
};
e.prototype.onEnable = function() {
hxblSdk.showCustomFast(2, 1);
this.zoomOut(this.nodePanel);
this.rendorMusic();
this.rendorSound();
this.rendorVibrate();
};
e.prototype.onDisable = function() {};
e.prototype.onCloseClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.SETTING, !1);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.MENU);
};
e.prototype.onSoundClick = function() {
PPSDK.sfxState = !PPSDK.sfxState;
u.default.instance.isSoundOn = PPSDK.sfxState;
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
this.rendorSound();
};
e.prototype.onMusicClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
PPSDK.musicState = !PPSDK.musicState;
PPSDK.musicState ? s.default.instance.playMusic() : s.default.instance.stopMusic();
this.rendorMusic();
};
e.prototype.onVibrateClick = function() {
PPSDK.vibrateState = !PPSDK.vibrateState;
PPSDK.vibrate();
this.rendorVibrate();
};
e.prototype.rendorMusic = function() {
this.btnMusic.getChildByName("on").active = PPSDK.musicState;
this.btnMusic.getChildByName("off").active = !PPSDK.musicState;
};
e.prototype.rendorSound = function() {
this.btnSound.getChildByName("on").active = PPSDK.sfxState;
this.btnSound.getChildByName("off").active = !PPSDK.sfxState;
};
e.prototype.rendorVibrate = function() {
this.btnVibrate.getChildByName("on").active = PPSDK.vibrateState;
this.btnVibrate.getChildByName("off").active = !PPSDK.vibrateState;
};
return a([ f ], e);
}(l.default));
n.default = p;
cc._RF.pop();
}, {
"../Enum": "Enum",
"../manager/AudioManager2": "AudioManager2",
"../manager/DataManager": "DataManager",
"./../StaticInstance": "StaticInstance",
"./Baselayer": "Baselayer"
} ],
StaticInstance: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "93f9fIyowFCpoTxHvXyssyM", "StaticInstance");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.StaticInstance = void 0;
var o = function() {
function t() {}
t.setUIManager = function(e) {
t.uiManager = e;
};
t.setGameManager = function(e) {
t.gameManager = e;
};
t.setTransitionManager = function(e) {
t.transitionsManager = e;
};
t.uiManager = void 0;
t.gameManager = void 0;
t.transitionsManager = void 0;
return t;
}();
n.StaticInstance = o;
cc._RF.pop();
}, {} ],
ToastManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "65526wGEY1OtL0HXs6ylAE2", "ToastManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = function() {
function t() {}
t.getInstance = function() {
null === this._instance && (this._instance = new this());
return this._instance;
};
Object.defineProperty(t, "instance", {
get: function() {
return this.getInstance();
},
enumerable: !1,
configurable: !0
});
t.prototype.show = function(t, e) {
void 0 === t && (t = "");
var n = void 0 === e ? {} : e, o = n.gravity, i = void 0 === o ? "CENTER" : o, a = n.duration, c = void 0 === a ? 1 : a, r = n.bg_color, s = void 0 === r ? cc.color(102, 102, 102, 200) : r, l = cc.director.getScene().getComponentInChildren(cc.Canvas), u = l.node.width, h = l.node.height, f = new cc.Node();
f.group = "ui";
var p = new cc.Node(), d = p.addComponent(cc.Label);
d.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
d.verticalAlign = cc.Label.VerticalAlign.CENTER;
d.fontSize = 30;
d.string = t;
if (t.length * d.fontSize > 3 * u / 5) {
p.width = 3 * u / 5;
d.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
} else p.width = t.length * d.fontSize;
var y = 1 + ~~(t.length * d.fontSize / (3 * u / 5));
p.height = d.fontSize * y;
var g = f.addComponent(cc.Graphics);
g.arc(-p.width / 2, 0, p.height / 2 + 20, .5 * Math.PI, 1.5 * Math.PI, !0);
g.lineTo(p.width / 2, -(p.height / 2 + 20));
g.arc(p.width / 2, 0, p.height / 2 + 20, 1.5 * Math.PI, .5 * Math.PI, !0);
g.lineTo(-p.width / 2, p.height / 2 + 20);
g.fillColor = s;
g.fill();
f.addChild(p);
if ("CENTER" === i) {
f.y = 0;
f.x = 0;
} else "TOP" === i ? f.y = f.y + h / 5 * 2 : "BOTTOM" === i && (f.y = f.y - h / 5 * 2);
l.node.addChild(f);
var _ = cc.callFunc(function() {
f.destroy();
}), m = cc.sequence(cc.moveBy(c, cc.v2(0, 0)), cc.fadeOut(.3), _);
cc.tween(f).then(m).start();
};
t._instance = null;
return t;
}();
n.default = o;
cc._RF.pop();
}, {} ],
UIManager2: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d8b44067ShG7IzfSj2CqGMD", "UIManager2");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./../Enum"), r = t("./../StaticInstance"), s = t("./PoolManager"), l = cc._decorator, u = l.ccclass, h = (l.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.uiMap = new Map();
return e;
}
e.prototype.onLoad = function() {
r.StaticInstance.setUIManager(this);
};
e.prototype.init = function() {
for (var t in c.ENUM_UI_TYPE) {
var e = s.default.instance.getNode(c.ENUM_UI_TYPE[t], this.node);
if (e && !this.uiMap.has(c.ENUM_UI_TYPE[t])) {
e.active = !1;
e.addComponent(c.ENUM_UI_TYPE[t]);
this.uiMap.set(c.ENUM_UI_TYPE[t], e.getComponent(c.ENUM_UI_TYPE[t]));
}
}
};
e.prototype.toggle = function(t, e, n) {
void 0 === e && (e = !0);
if (this.uiMap.has(t)) {
var o = this.uiMap.get(t);
e ? o.show() : o.hide();
n && n();
}
};
e.prototype.isActive = function(t) {
return !!this.uiMap.has(t) && this.uiMap.get(t).node.active;
};
e.prototype.getActiveTypes = function() {
var t = this, e = [];
this.uiMap.forEach(function(n, o) {
t.isActive(o) && e.push(o);
});
return e;
};
e.prototype.rendorMainLevel = function() {
var t = this.uiMap.get(c.ENUM_UI_TYPE.MAIN);
null == t || t.rendorLevel();
};
e.prototype.setMainTimer = function(t) {
void 0 === t && (t = !0);
var e = this.uiMap.get(c.ENUM_UI_TYPE.MAIN);
t ? null == e || e.onTimerStart() : null == e || e.onTimerStop();
};
e.prototype.setMainTimerSound = function(t) {
void 0 === t && (t = !0);
var e = this.uiMap.get(c.ENUM_UI_TYPE.MAIN);
t ? null == e || e.onTimerSoundStart() : null == e || e.onTimerSoundStop();
};
return a([ u ], e);
}(cc.Component));
n.default = h;
cc._RF.pop();
}, {
"./../Enum": "Enum",
"./../StaticInstance": "StaticInstance",
"./PoolManager": "PoolManager"
} ],
UIScrollControl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e6235MOwRpI+bzS2hVblkfN", "UIScrollControl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ENUM_SCROLL_DIR = void 0;
var c, r = cc._decorator, s = r.ccclass;
r.property;
(function(t) {
t[t.V = 0] = "V";
t[t.H = 1] = "H";
})(c = n.ENUM_SCROLL_DIR || (n.ENUM_SCROLL_DIR = {}));
var l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scrollView = null;
e.contentSize = null;
e.scrollDirection = c.V;
e.totalCount = 0;
e.itemCount = 0;
e.childrenList = [];
e.itemDistance = 0;
e.contentSizeStart = null;
e.isStartFlag = !1;
e.theMaxID = 0;
e.refreshCB = null;
return e;
}
e.prototype.init = function(t, e, n, o, i, a) {
i && (this.refreshCB = i);
if (0 == this.isStartFlag) {
this.scrollView = this.node.getComponent(cc.ScrollView);
if (null == this.scrollView || null == this.scrollView.content) return;
this.scrollView.content.parent.setAnchorPoint(cc.v2(.5, .5));
var r = this.scrollView.content.parent.getComponent(cc.Widget);
null == r && (r = this.scrollView.content.parent.addComponent(cc.Widget));
r.isAlignLeft = !0;
r.left = 0;
r.isAlignRight = !0;
r.right = 0;
r.isAlignTop = !0;
r.top = 0;
r.isAlignBottom = !0;
r.bottom = 0;
this.contentSize = new cc.Size(this.scrollView.node.getContentSize());
this.scrollView.content.setContentSize(this.contentSize);
this.contentSizeStart = this.scrollView.content.getContentSize();
}
if (null != t) {
this.scrollView.content.setContentSize(this.contentSizeStart);
this.clear();
this.totalCount = e;
this.scrollDirection = o;
if (o == c.V) {
this.scrollView.content.setAnchorPoint(cc.v2(.5, 1));
this.scrollView.content.setContentSize(cc.size(this.contentSizeStart.width, this.totalCount * n.height));
this.scrollView.content.setPosition(cc.v2(0, -this.totalCount * n.height / 2));
var s = Math.floor(this.contentSizeStart.height / n.height);
this.itemCount = s + 2;
this.totalCount <= this.itemCount && (this.itemCount = this.totalCount);
this.itemDistance = n.height;
} else if (o == c.H) {
this.scrollView.content.setAnchorPoint(cc.v2(0, .5));
this.scrollView.content.setContentSize(cc.size(this.totalCount * n.width, this.contentSizeStart.height));
this.scrollView.content.setPosition(cc.v2(this.totalCount * n.width / 2, 0));
s = Math.floor(this.contentSizeStart.width / n.width);
this.itemCount = s + 2;
this.totalCount <= this.itemCount && (this.itemCount = this.totalCount);
this.itemDistance = n.width;
}
if (this.scrollView.scrollEvents.length <= 0) {
var l = new cc.Component.EventHandler();
l.target = this.node;
l.component = "UIScrollControl";
l.handler = "OnScroll";
this.scrollView.scrollEvents.push(l);
}
this.isStartFlag;
this.theMaxID = 0;
this.initShowAreaItems(t, a);
}
};
e.prototype.clear = function() {
this.scrollView.content.removeAllChildren();
this.childrenList = [];
};
e.prototype.initShowAreaItems = function(t, e) {
for (var n = 0; n < this.itemCount; n++) {
var o = cc.v2(0, 0), i = cc.instantiate(t);
this.scrollView.content.addChild(i);
i.active = !0;
i.opacity = 255;
this.scrollDirection == c.V ? o.y = -this.itemDistance / 2 - this.itemDistance * n : this.scrollDirection == c.H && (o.x = this.itemDistance / 2 + this.itemDistance * n);
i.name = "cell_" + n;
i.setAnchorPoint(cc.v2(.5, .5));
i.setPosition(o);
this.onRefresh(i, n, n);
this.childrenList.push(i);
}
e && e(this.scrollView);
};
e.prototype.OnScroll = function() {
var t = this.scrollView.getScrollOffset(), e = 0;
this.scrollDirection == c.V ? e = t.y : this.scrollDirection == c.H && (e = -t.x);
this.refreshLayout(e);
};
e.prototype.refreshLayout = function(t) {
var e = t, n = this.totalCount * this.itemDistance;
if (!(e < 0 || e + this.contentSize.height >= n)) {
for (var o = 0, i = Math.floor(e / this.itemDistance), a = 0; a < this.itemCount; a++) {
var c = this.childrenList[a];
o = i + a;
this.refreshItem(o, a, c);
}
this.theMaxID = i + this.itemCount;
}
};
e.prototype.refreshItem = function(t, e, n) {
if (!(t < 0 || t >= this.totalCount) && null != n) {
var o = cc.Vec2.ZERO;
this.scrollDirection == c.H ? o.x = this.itemDistance / 2 + this.itemDistance * t : this.scrollDirection == c.V && (o.y = -this.itemDistance / 2 - this.itemDistance * t);
n.setPosition(o);
this.onRefresh(n, t, e);
}
};
e.prototype.onRefresh = function(t, e, n) {
null != this.refreshCB && this.refreshCB(t, e, n);
};
return a([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
UITransitionControl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9cf23gaAJRJjq5LNOVK5EiX", "UITransitionControl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../StaticInstance"), r = cc._decorator, s = r.ccclass, l = r.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.transitionTime = .3;
e.mask = null;
e.img = null;
e.scale = 0;
return e;
}
e.prototype.onLoad = function() {
c.StaticInstance.setTransitionManager(this);
var t = cc.winSize;
this.mask = this.node.getComponent(cc.Mask);
this.img = this.node.getChildByName("img");
this.img.width = t.width;
this.img.height = t.height;
var e = Math.max(t.width, t.height);
this.scale = e / this.node.width;
this.node.scale = this.scale;
};
e.prototype.play = function(t, e, n, o) {
var i = this;
void 0 === t && (t = null);
void 0 === e && (e = null);
this.img.opacity = 255;
var a = cc.scaleTo(this.transitionTime, 1), r = cc.callFunc(function() {
t && c.StaticInstance.uiManager.toggle(t, !1);
e && c.StaticInstance.uiManager.toggle(e);
n && n();
}), s = cc.scaleTo(this.transitionTime, this.scale), l = cc.callFunc(function() {
i.img.opacity = 0;
o && o();
}), u = cc.sequence(a, r, s, l);
cc.tween(this.node).then(u).start();
};
e.prototype.onStart = function(t, e, n) {
var o = this;
void 0 === t && (t = null);
void 0 === e && (e = null);
this.img.opacity = 255;
var i = cc.scaleTo(this.transitionTime, 1), a = cc.callFunc(function() {
o.mask.enabled = !1;
if (t && e) {
c.StaticInstance.uiManager.toggle(t, !1);
c.StaticInstance.uiManager.toggle(e, !0);
}
n && n();
}), r = cc.sequence(i, a);
cc.tween(this.node).then(r).start();
};
e.prototype.onEnd = function() {
var t = this;
this.scheduleOnce(function() {
t.mask.enabled = !0;
var e = cc.scaleTo(t.transitionTime, t.scale), n = cc.callFunc(function() {
t.img.opacity = 0;
}), o = cc.sequence(e, n);
cc.tween(t.node).then(o).start();
});
};
a([ l ], e.prototype, "transitionTime", void 0);
return a([ s ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../StaticInstance": "StaticInstance"
} ],
Utils2: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1ccc3Pa3fdGUJUnDiya6JDg", "Utils2");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.getZeroTimestamp = n.formatSeconds = void 0;
n.formatSeconds = function(t, e) {
void 0 === e && (e = "h:i:s");
t = Number(t);
var n = {};
n.h = Number.parseInt(String(t / 3600));
n.i = Number.parseInt(String((t - 3600 * n.h) / 60));
n.s = Number.parseInt(String(t - 3600 * n.h - 60 * n.i));
n.h < 10 && (n.h = "0" + n.h);
n.i < 10 && (n.i = "0" + n.i);
n.s < 10 && (n.s = "0" + n.s);
return e.replace("h", n.h).replace("i", n.i).replace("s", n.s);
};
n.getZeroTimestamp = function() {
return new Date(new Date().toLocaleDateString()).getTime();
};
cc._RF.pop();
}, {} ],
WinLayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "38aca0oW05L14APgJWH0shJ", "WinLayer");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../Enum"), r = t("./../StaticInstance"), s = t("../manager/AudioManager2"), l = (t("../manager/ToastManager"), 
t("./HeaderLayer")), u = t("../manager/DataManager"), h = t("../manager/EffectManager"), f = cc._decorator, p = f.ccclass, d = (f.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodePanel = null;
e.btnNext = null;
e.btnHome = null;
e.btnNextReward = null;
return e;
}
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
this.nodePanel = cc.find("style/panel", this.node);
this.btnNext = cc.find("buttons/btn_next", this.nodePanel);
this.btnHome = cc.find("buttons/btn_home", this.nodePanel);
this.btnNextReward = cc.find("buttons/btn_next_reward", this.nodePanel);
this.btnNext.on("click", this.onNextClick, this);
this.btnHome.on("click", this.onHomeClick, this);
this.btnNextReward.on("click", this.onNextReward, this);
};
e.prototype.onDestroy = function() {
this.btnNext.off("click", this.onNextClick, this);
this.btnHome.off("click", this.onHomeClick, this);
this.btnNextReward.off("click", this.onNextReward, this);
};
e.prototype.onEnable = function() {
this.zoomIn(this.nodePanel);
this.rendorPower();
this.rendorCoin();
h.default.instance.playInParent("EndFireLeft", this.node, {
pos: cc.v2(-cc.winSize.width / 2, 0)
});
h.default.instance.playInParent("EndFireRight", this.node, {
pos: cc.v2(cc.winSize.width / 2, 0)
});
hxblSdk.showCustomFast(3, 1);
};
e.prototype.onDisable = function() {};
e.prototype.onNextClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
u.default.instance.power;
u.default.instance.power -= 1;
u.default.instance.save();
r.StaticInstance.transitionsManager.play(c.ENUM_UI_TYPE.WIN, null, function() {
r.StaticInstance.gameManager.onGameStart();
});
};
e.prototype.onHomeClick = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.MAIN, !1);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.WIN, !1);
r.StaticInstance.uiManager.toggle(c.ENUM_UI_TYPE.MENU);
};
e.prototype.onNextReward = function() {
s.default.instance.playSound(c.ENUM_AUDIO_CLIP.CLICK);
hxblSdk.showVideo(function(t) {
if (0 == t) {
hxblSdk.showToast("领取成功");
r.StaticInstance.transitionsManager.play(c.ENUM_UI_TYPE.WIN, null, function() {
r.StaticInstance.gameManager.onGameStart();
});
} else 1 == t ? hxblSdk.showToast("视频播放失败") : hxblSdk.showToast("无可展示视频广告");
});
};
return a([ p ], e);
}(l.default));
n.default = d;
cc._RF.pop();
}, {
"../Enum": "Enum",
"../manager/AudioManager2": "AudioManager2",
"../manager/DataManager": "DataManager",
"../manager/EffectManager": "EffectManager",
"../manager/ToastManager": "ToastManager",
"./../StaticInstance": "StaticInstance",
"./HeaderLayer": "HeaderLayer"
} ],
fastNativeBox: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d17cdgq2X9Nm5HsSKHeMocU", "fastNativeBox");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, r = c.ccclass, s = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onEnable = function() {};
return a([ r ], e);
}(cc.Component));
n.default = s;
cc._RF.pop();
}, {} ],
guide: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e139fYFdxJFZ7rmduNhFi+R", "guide");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, n, c) : i(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, r = c.ccclass, s = (c.property, function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.graphics = null;
e.lineNode = null;
return e;
}
e.prototype.onLoad = function() {
var t = new cc.Node("GuideLine");
t.parent = this.node.parent;
this.graphics = t.addComponent(cc.Graphics);
this.graphics.lineWidth = 10;
this.graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
this.graphics.lineCap = cc.Graphics.LineCap.ROUND;
this.graphics.strokeColor.set(new cc.Color(255, 0, 0, 255));
this.graphics.fillColor.set(new cc.Color(0, 255, 0, 255));
this.lineNode = this.node.getChildByName("line");
this.resetLine();
};
e.prototype.clearLine = function() {
this.graphics.clear();
};
e.prototype.resetLine = function() {
var t = this.lineNode.getPosition();
t = this.node.convertToWorldSpaceAR(t);
t = this.node.parent.convertToNodeSpaceAR(t);
this.graphics.moveTo(t.x, t.y);
};
e.prototype.update = function() {
var t = this.lineNode.getPosition();
t = this.node.convertToWorldSpaceAR(t);
t = this.node.parent.convertToNodeSpaceAR(t);
this.graphics.lineTo(t.x, t.y);
this.graphics.stroke();
};
return a([ r ], e);
}(cc.Component));
n.default = s;
cc._RF.pop();
}, {} ],
hxbl2pp: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "646ccsrNM5BB653CmC1xc7n", "hxbl2pp");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SdkManager = void 0;
var o = function() {
function t() {}
t.isShenhe = function() {
return lieyou_SdkManager.isShenhe();
};
t.showToast = function(t) {
PPSDK.showToast(t);
};
t.vibrateShort = function() {
PPSDK.vibrate(!1);
};
t.vibrateLong = function() {
PPSDK.vibrate(!0);
};
t.hasVideo = function() {
return lieyou_SdkManager.getHaveVideo();
};
t.showVideo = function(t) {
lieyou_SdkManager.showRewardedVideoAd(function(e) {
t(e ? 0 : 1);
});
};
t.showBanner = function() {
lieyou_SdkManager.showBannerByBottom();
};
t.hideBanner = function() {
lieyou_SdkManager.hideBanner();
};
t.showSpot = function(t) {
void 0 === t && (t = 0);
1 == t && lieyou_SdkManager.showSpotByBegin();
2 == t && lieyou_SdkManager.showSpotByPause();
3 != t && t || lieyou_SdkManager.showSpotByFinish();
};
t.showCustomFast = function(t, e) {
void 0 === t && (t = 0);
void 0 === e && (e = 0);
e > 0 ? this.showSpot(t) : this.showBanner();
};
t.showNativeBox = function(t) {
lieyou_SdkManager.addNativeAd(t.node);
};
t.isPlatform = function() {};
return t;
}();
n.SdkManager = o;
cc._RF.pop();
}, {} ]
}, {}, [ "HX_HXMG_SUB", "fastNativeBox", "hxbl2pp", "Enum", "Index", "StaticInstance", "Utils2", "DrawLine", "guide", "Baselayer", "DailyLayer", "ExitLayer", "HeaderLayer", "HouseLayer", "HouseSubmitLayer", "LevelLayer", "LoadingLayer", "LoseLayer", "MainLayer", "MenuLayer", "MoreLayer", "PassLayer", "RankLayer", "RewardLayer", "SettingLayer", "WinLayer", "AudioManager2", "DataManager", "EffectManager", "GameManager", "PoolManager", "ResourceManager", "SdkManager2", "ToastManager", "UIManager2", "UIScrollControl", "UITransitionControl" ]);