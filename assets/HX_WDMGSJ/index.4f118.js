window.__require = function e(t, a, n) {
function i(o, r) {
if (!a[o]) {
if (!t[o]) {
var c = o.split("/");
c = c[c.length - 1];
if (!t[c]) {
var l = "function" == typeof __require && __require;
if (!r && l) return l(c, !0);
if (s) return s(c, !0);
throw new Error("Cannot find module '" + o + "'");
}
o = c;
}
var g = a[o] = {
exports: {}
};
t[o][0].call(g.exports, function(e) {
return i(t[o][1][e] || e);
}, g, g.exports, e, t, a, n);
}
return a[o].exports;
}
for (var s = "function" == typeof __require && __require, o = 0; o < n.length; o++) i(n[o]);
return i;
}({
HX_WDMGSJ_AchievementUISc: [ function(e, t) {
"use strict";
cc._RF.push(t, "27bb7aEXTJKKbgRioZHdFcS", "HX_WDMGSJ_AchievementUISc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_UIManager").UIManager;
cc.Class({
extends: cc.Component,
properties: {
bestLabel: cc.Label,
btn: cc.Node
},
start: function() {},
init: function() {
this.btn.scale = 0;
var e = 0;
hxblSdk.isShenhe() || (e = 1.5);
cc.tween(this.btn).delay(e).to(.1, {
scale: 1
}).start();
this.bestLabel.string = a.bestScroe;
hxblSdk.showCustomFast(2, 1);
},
closeBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
n.closeUI("AchievementUI", function() {
a.hasEvent = !1;
});
}
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_UIManager": "HX_WDMGSJ_UIManager"
} ],
HX_WDMGSJ_ArrowSc: [ function(e, t) {
"use strict";
cc._RF.push(t, "7ec0c9/SjNLB7O2c6+OkgXg", "HX_WDMGSJ_ArrowSc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_PoolManager").PoolManager;
cc.Class({
extends: cc.Component,
properties: {
dir: 0,
bulletPos: cc.Node,
image: cc.Sprite,
arrowAtlas: cc.SpriteAtlas
},
start: function() {},
init: function() {
this.node.getComponent(cc.Animation).play();
},
changeImage: function(e) {
this.image.spriteFrame = this.arrowAtlas.getSpriteFrame(e + this.dir);
},
shootBullet: function() {
if (0 != a.state) {
var e = n.getNode("bullet");
e.parent = this.node.parent;
e.x = this.node.x;
e.y = this.node.y;
var t = e.getComponent("HX_WDMGSJ_BulletSc");
t._dir = this.dir;
t.stage = this.stage;
t.init();
}
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_PoolManager": "HX_WDMGSJ_PoolManager"
} ],
HX_WDMGSJ_AudioManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "accb0fYRJVIhoXsTtUNU7bo", "HX_WDMGSJ_AudioManager");
var a = e("./HX_WDMGSJ_DataManager").DataManager;
cc.Class({
extends: cc.Component,
properties: {
mainBGM: {
type: cc.AudioClip,
default: null
},
gameBGM: {
type: cc.AudioClip,
default: null
},
click: {
type: cc.AudioClip,
default: null
},
success: {
type: cc.AudioClip,
default: null
},
fail: {
type: cc.AudioClip,
default: null
},
collision: {
type: cc.AudioClip,
default: null
},
move: {
type: cc.AudioClip,
default: null
},
coin: {
type: cc.AudioClip,
default: null
},
star: {
type: cc.AudioClip,
default: null
},
poin: {
type: cc.AudioClip,
default: null
},
lavaStep: {
type: cc.AudioClip,
default: null
},
spring: {
type: cc.AudioClip,
default: null
},
shield: {
type: cc.AudioClip,
default: null
},
superMode: {
type: cc.AudioClip,
default: null
},
paint: {
type: cc.AudioClip,
default: null
}
},
onLoad: function() {
window.AudioManager = this;
},
start: function() {},
playEffect: function(e) {
if (a.vibration && "collision" == e) try {
hxblSdk.vibrateShort();
hxblSdk.vibrateShort();
hxblSdk.vibrateShort();
hxblSdk.vibrateShort();
hxblSdk.vibrateShort();
hxblSdk.vibrateShort();
} catch (e) {}
a.voice && cc.audioEngine.playEffect(AudioManager[e]);
}
});
cc._RF.pop();
}, {
"./HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager"
} ],
HX_WDMGSJ_BoxSc: [ function(e, t) {
"use strict";
cc._RF.push(t, "fddb5JHrxJMsY+VFX0mvD2+", "HX_WDMGSJ_BoxSc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager;
cc.Class({
extends: cc.Component,
properties: {
vecDir: new cc.Vec2(),
_rpos: [ 0, 0 ],
_dir: -1,
stage: 0,
isLive: !0
},
start: function() {},
init: function() {
this.isLive = !0;
this._rpos[0] = this.node.x;
this._rpos[1] = this.node.y;
this.initDir();
},
initDir: function() {
switch (this._dir) {
case 0:
this.vecDir.x = 0;
this.vecDir.y = 1;
break;

case 1:
this.vecDir.x = 0;
this.vecDir.y = -1;
break;

case 2:
this.vecDir.x = -1;
this.vecDir.y = 0;
break;

case 3:
this.vecDir.x = 1;
this.vecDir.y = 0;
}
},
update: function() {
if (0 != a.state) {
if (Math.abs(this.node.x - this._rpos[0]) + Math.abs(this.node.y - this._rpos[1]) >= 75) {
this._rpos[0] += 75 * this.vecDir.x;
this._rpos[1] += 75 * this.vecDir.y;
this.node.x = this._rpos[0];
this.node.y = this._rpos[1];
var e;
e = 1 != a.mode ? a.nowMapData[this._rpos[0] + 75 * this.vecDir.x][this._rpos[1] + 75 * this.vecDir.y] : a.nowEndlessData[this.stage][this._rpos[0] + 75 * this.vecDir.x][this._rpos[1] + 75 * this.vecDir.y];
if (!this.judgeType(e)) {
this.vecDir.x *= -1;
this.vecDir.y *= -1;
0 == this._dir ? this._dir = 1 : 1 == this._dir ? this._dir = 0 : 2 == this._dir ? this._dir = 3 : 3 == this._dir && (this._dir = 2);
}
}
this.node.x += 2 * this.vecDir.x;
this.node.y += 2 * this.vecDir.y;
}
},
judgeType: function(e) {
var t = !0;
if (null == e) return !0;
e.isLive && ("wall" != e.type && "arrow" != e.type && "angreMonster" != e.type && "stab" != e.type || (t = !1));
return t;
},
onCollisionEnter: function(e) {
if (a.endlessStage == this.stage && "role" == e.node.group) {
var t = e.node.getComponent("HX_WDMGSJ_RoleSc");
if (t._rpos[1] == this.node.y) {
if (2 == this._dir && e.node.x < this.node.x) {
this._rpos[0] -= 75;
this._dir = 3;
this.initDir();
} else if (3 == this._dir && e.node.x > this.node.x) {
this._rpos[0] += 75;
this._dir = 2;
this.initDir();
}
} else if (t._rpos[0] == this.node.x) if (0 == this._dir && e.node.y > this.node.y) {
this._rpos[1] += 75;
this._dir = 1;
this.initDir();
} else if (1 == this._dir && e.node.y < this.node.y) {
this._rpos[1] -= 75;
this._dir = 0;
this.initDir();
}
}
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager"
} ],
HX_WDMGSJ_BulletSc: [ function(e, t) {
"use strict";
cc._RF.push(t, "2d136snvA1FEI6+hu3seAlu", "HX_WDMGSJ_BulletSc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_PoolManager").PoolManager;
cc.Class({
extends: cc.Component,
properties: {
vecDir: new cc.Vec2(),
_rpos: [ 0, 0 ],
_dir: -1,
stage: 0,
image: cc.Node,
isLive: !0
},
init: function() {
this.isLive = !0;
this._rpos[0] = this.node.x;
this._rpos[1] = this.node.y;
switch (this._dir) {
case 0:
this.vecDir.x = 0;
this.vecDir.y = 1;
this.image.angle = 0;
break;

case 1:
this.vecDir.x = 0;
this.vecDir.y = -1;
this.image.angle = 180;
break;

case 2:
this.vecDir.x = -1;
this.vecDir.y = 0;
this.image.angle = 90;
break;

case 3:
this.vecDir.x = 1;
this.vecDir.y = 0;
this.image.angle = 270;
}
},
start: function() {},
update: function() {
if (this.isLive && 0 != a.state) {
if (Math.abs(this.node.x - this._rpos[0]) + Math.abs(this.node.y - this._rpos[1]) >= 75) {
this._rpos[0] += 75 * this.vecDir.x;
this._rpos[1] += 75 * this.vecDir.y;
this.node.x = this._rpos[0];
this.node.y = this._rpos[1];
var e;
e = 1 != a.mode ? a.nowMapData[this._rpos[0] + 75 * this.vecDir.x][this._rpos[1] + 75 * this.vecDir.y] : a.nowEndlessData[this.stage][this._rpos[0] + 75 * this.vecDir.x][this._rpos[1] + 75 * this.vecDir.y];
this.judgeType(e);
}
this.node.x += 15 * this.vecDir.x;
this.node.y += 15 * this.vecDir.y;
}
},
judgeType: function(e) {
var t = this;
if (null == e) return !0;
if (e.isLive && ("wall" == e.type || "stab" == e.type)) {
var a = this;
setTimeout(function() {
a.isLive = !1;
var e = n.getNode("BulletParticle");
e.parent = GameManager.particleParent;
e.x = a.node.x;
e.y = a.node.y + 1875 * t.stage;
n.addNode("bullet", a.node);
}, 30);
}
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_PoolManager": "HX_WDMGSJ_PoolManager"
} ],
HX_WDMGSJ_CameraManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "896051LKrRPC79bSny5nfHr", "HX_WDMGSJ_CameraManager");
var a = e("./HX_WDMGSJ_DataManager").DataManager, n = e("./HX_WDMGSJ_EventManager").EventManager;
cc.Class({
extends: cc.Component,
properties: {
camera: cc.Camera
},
onLoad: function() {
window.CameraManager = this;
n.addEvent("StartGameEvent", this.startGameEvent, this);
},
start: function() {},
startGameEvent: function(e, t) {
if (1 == a.mode) {
t.camera.zoomRatio = .72;
t.node.x = 450;
} else t.camera.zoomRatio = .9;
},
upDataCameraPos: function() {
var e = cc.v2(GameManager.role.x, GameManager.role.y), t = cc.v2(this.node.x, this.node.y);
t = t.lerp(e, .1);
this.node.y = t.y;
1 != a.mode && (this.node.x = t.x);
}
});
cc._RF.pop();
}, {
"./HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"./HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager"
} ],
HX_WDMGSJ_ChallengeUISc: [ function(e, t) {
"use strict";
cc._RF.push(t, "76e71XFcI1AX4j65ojCqrKI", "HX_WDMGSJ_ChallengeUISc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_EventManager").EventManager, i = e("../manager/HX_WDMGSJ_UIManager").UIManager;
cc.Class({
extends: cc.Component,
properties: {
stars: [ cc.Node ],
goldLabel: cc.Label,
lotteryLabel: cc.Label,
toggle: cc.Toggle,
isVideo: !0,
btn: cc.Node,
btn1: cc.Node
},
start: function() {
lieyou_SdkManager.addListenerBackKey({
node: this.node,
callBack: this.closeBtnClick.bind(this)
});
},
init: function() {
this.btn1.scale = 0;
var e = 0;
hxblSdk.isShenhe() || (e = 1.5);
hxblSdk.showCustomFast(2, 1);
cc.tween(this.btn1).delay(e).to(.1, {
scale: 1
}).start();
this.btn.scale = 0;
e = 0;
hxblSdk.isShenhe() || (e = 1);
cc.tween(this.btn).delay(e).to(.1, {
scale: 1
}).start();
for (var t = 0; t < a.challengeState[0]; t++) this.stars[t].getComponent(cc.Animation).play();
this.goldLabel.string = 300 - 100 * a.challengeState[0];
this.lotteryLabel.string = 0 == a.challengeState[1] ? 1 : 0;
},
startBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
a.mode = -1;
i.closeUI("MainUI");
i.closeUI("ChallengeUI", function() {
n.excuteEvent("StartGameEvent");
a.hasEvent = !1;
});
}
},
videoBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
a.music && cc.audioEngine.stopMusic();
hxblSdk.showVideo(function(e) {
a.hasEvent = !1;
if (0 === e) {
a.hasShield = !0;
a.mode = -1;
i.closeUI("MainUI");
i.closeUI("ChallengeUI", function() {
n.excuteEvent("StartGameEvent");
a.hasEvent = !1;
});
} else a.showMessage("视频获取失败");
a.music && cc.audioEngine.playMusic(AudioManager.gameBGM);
});
}
},
closeBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
i.closeUI("ChallengeUI", function() {
i.uiDic.MainUI.initBtn();
a.hasEvent = !1;
});
}
},
videoToggleClick: function(e) {
AudioManager.playEffect("click");
this.isVideo = e.isChecked;
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager",
"../manager/HX_WDMGSJ_UIManager": "HX_WDMGSJ_UIManager"
} ],
HX_WDMGSJ_DataManager: [ function(e, t, a) {
"use strict";
cc._RF.push(t, "4c4a7mnsutKGo1A6pSZVwUr", "HX_WDMGSJ_DataManager");
a.__esModule = !0;
a.DataManager = void 0;
var n, i = ((n = {
musicAudio: !0,
effectAudio: !0,
vibrate: !0,
state: 0,
nowMapData: [],
nowEndlessData: [],
nowDir: -1,
hasShield: !1,
endlessStage: 0,
endWayList: [],
wayList: [],
shield: 0,
canGenarateShield: !1,
get gold() {
return Number(cc.sys.localStorage.getItem(lieyou.Key_Gold));
},
set gold(e) {
cc.sys.localStorage.setItem(lieyou.Key_Gold, String(e));
},
starCount: 0,
allPoint: 0,
point: 0,
superCharge: 0,
bestScroe: 0,
collitionGold: 0,
superMode: !1,
achievementScore: [ 0, 1e4, 5e4, 1e5, 2e5, 5e5, 1e6 ],
nowStage: 0,
skinColor: [ new cc.Color(220, 100, 255) ],
get music() {
return PPSDK.musicState;
},
set music(e) {
PPSDK.musicState = e;
},
get voice() {
return PPSDK.sfxState;
},
set voice(e) {
return PPSDK.sfxState = e;
},
get vibration() {
return PPSDK.vibrateState;
},
set vibration(e) {
PPSDK.vibrateState = e;
},
userStageData: [ 0 ],
skinData: {
as: [ 1.1, 26, 162, 0 ]
},
skinConfig: {
owl: [ 1, 255, 153, 0 ],
as: [ 1.1, 26, 162, 0 ],
ch: [ 1.15, 92, 216, 255 ],
bx: [ 1.2, 231, 120, 222 ],
mt: [ 1.2, 255, 255, 255 ],
qw: [ 1.25, 255, 235, 0 ]
},
allSkin: [ "owl", "as", "ch", "bx", "mt", "qw" ],
useSkin: "as",
maxStage: 0
}).nowStage = 0, n.mode = 1, n.reviveCount = 3, n.trialSkinName = null, n.readData = function(e, t) {
var a = e;
e = "HX_WDMGSJ_" + a;
if (null == cc.sys.localStorage.getItem(e) || 0 == cc.sys.localStorage.getItem(e)) {
cc.sys.localStorage.setItem(e, JSON.stringify(t));
i[a] = t;
} else i[a] = JSON.parse(cc.sys.localStorage.getItem(e));
}, n.saveData = function(e, t) {
e = "HX_WDMGSJ_" + e;
cc.sys.localStorage.setItem(e, JSON.stringify(t));
}, n.showMessage = function(e) {
var t = cc.find("Canvas/Tip");
t.active = !0;
t.getChildByName("TipLabel").getComponent(cc.Label).string = e;
t.getComponent(cc.Animation).play("TipAni");
}, n);
a.DataManager = i;
cc._RF.pop();
}, {} ],
HX_WDMGSJ_DragonSc: [ function(e, t) {
"use strict";
cc._RF.push(t, "1b6f9C4G8NOspkMd5ciftaN", "HX_WDMGSJ_DragonSc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_EventManager").EventManager;
cc.Class({
extends: cc.Component,
properties: {
startRun: !1,
stage: 0
},
start: function() {},
init: function() {
this.startRun = !1;
this.stage = this.node.getComponent("HX_WDMGSJ_ItemSc").stage;
n.addEvent("CheckPosEvent", this.checkPosEvent, this);
},
update: function() {
this.startRun && (this.node.x += 10);
},
checkPosEvent: function(e, t) {
if (!t.startRun && (1 != a.mode || t.stage == a.endlessStage)) {
var n = GameManager.role.getComponent("HX_WDMGSJ_RoleSc"), i = n._rpos[1], s = n._rpos[0];
i == t.node.y && Math.abs(t.node.x - s) <= 750 && (t.startRun = !0);
}
},
onCollisionEnter: function(e) {
if ("role" == e.node.group) {
if (a.superMode) return;
a.hasShield ? n.excuteEvent("CloseShieldEvent") : n.excuteEvent("GameOverEvent");
}
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager"
} ],
HX_WDMGSJ_EditorSc: [ function(e, t) {
"use strict";
cc._RF.push(t, "3c6491jbE9HOJQp1FHeEATC", "HX_WDMGSJ_EditorSc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager;
cc.Class({
extends: cc.Component,
properties: {},
start: function() {},
itemBtnClick: function(e, t) {
a.editorDir = -1;
a.editorID = t;
},
dirBtnClick: function(e, t) {
a.editorDir = t;
},
outPutBtnClick: function() {
GameManager.mapManager.getComponent("HX_WDMGSJ_MapSc").printData();
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager"
} ],
HX_WDMGSJ_EventManager: [ function(e, t, a) {
"use strict";
cc._RF.push(t, "13e89Pp2wVKUKCa0nOcfv+W", "HX_WDMGSJ_EventManager");
a.__esModule = !0;
a.EventManager = void 0;
a.EventManager = {
event: {},
addEvent: function(e, t, a) {
null == this.event[e] ? this.event[e] = [ [ t, a ] ] : this.event[e][this.event[e].length] = [ t, a ];
},
excuteEvent: function(e, t) {
if (null != this.event[e]) for (var a = 0; a < this.event[e].length; a++) this.event[e][a][0](t, this.event[e][a][1]);
},
clearEvent: function(e) {
null != this.event[e] && (this.event[e].length = 0);
},
clear: function() {
this.event = {};
}
};
cc._RF.pop();
}, {} ],
HX_WDMGSJ_FailUISc: [ function(e, t) {
"use strict";
cc._RF.push(t, "1ec2dkX0oBHYrgOvy+O3Lp0", "HX_WDMGSJ_FailUISc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_EventManager").EventManager, i = e("../manager/HX_WDMGSJ_UIManager").UIManager;
cc.Class({
extends: cc.Component,
properties: {
goldLabel: cc.Label,
skinSprite: cc.Sprite,
skinAtlas: cc.SpriteAtlas,
btn: cc.Node,
adControl: 0
},
start: function() {},
init: function() {
this.btn.x = 0;
a.trialSkinName = null;
this.btn.scale = 0;
var e = 0;
hxblSdk.isShenhe() || (e = 1);
cc.tween(this.btn).delay(e).to(.1, {
scale: 1
}).start();
window.onGameFail && onGameFail();
a.gold += 5;
this.skinSprite.spriteFrame = this.skinAtlas.getSpriteFrame(a.useSkin + "03");
n.excuteEvent("ChangeGoldEvent");
hxblSdk.showSpot(3);
},
videoBtnClick: function() {
if (!a.hasEvent) {
AudioManager.playEffect("click");
a.music && cc.audioEngine.stopMusic();
hxblSdk.showVideo(function(e) {
a.hasEvent = !1;
if (0 === e) {
a.hasShield = !0;
i.closeUI("FailUI", function() {
a.hasEvent = !1;
});
n.excuteEvent("StartGameEvent");
} else a.showMessage("视频获取失败");
a.music && cc.audioEngine.playMusic(AudioManager.gameBGM);
});
}
},
replayBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
a.nowStage;
AudioManager.playEffect("click");
i.closeUI("FailUI", function() {
a.hasEvent = !1;
});
n.excuteEvent("StartGameEvent");
}
},
homeBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
setTimeout(function() {
i.openUI("MainUI", function() {
a.hasEvent = !1;
});
}, 250);
i.closeUI("FailUI");
n.excuteEvent("ClearMapEvent");
}
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager",
"../manager/HX_WDMGSJ_UIManager": "HX_WDMGSJ_UIManager"
} ],
HX_WDMGSJ_FloorSc: [ function(e, t) {
"use strict";
cc._RF.push(t, "4a0551fJW9Bqq/JHIQhNslu", "HX_WDMGSJ_FloorSc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager;
cc.Class({
extends: cc.Component,
properties: {
item: cc.Node,
type: "",
dir: 0,
isMove: !1
},
start: function() {
var e = this;
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
e.isMove = !0;
var a = t.getDelta();
GameManager.mapManager.x += a.x;
GameManager.mapManager.y += a.y;
});
this.node.on("click", function() {
if (!e.isMove) {
var t;
t = -1 == a.editorDir ? GameManager.gameAtlas.getSpriteFrame(a.editorID) : GameManager.gameAtlas.getSpriteFrame(a.editorID + a.editorDir);
console.log(a.editorID);
if (null == t && null != a.editorID) return;
e.item.getComponent(cc.Sprite).spriteFrame = t;
e.type = a.editorID;
e.dir = a.editorDir;
}
});
this.node.on(cc.Node.EventType.TOUCH_END, function() {
e.isMove = !1;
});
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager"
} ],
HX_WDMGSJ_GameManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "e3827qsVyJIhI7kna3jF6VP", "HX_WDMGSJ_GameManager");
var a = e("./HX_WDMGSJ_DataManager").DataManager, n = e("./HX_WDMGSJ_EventManager").EventManager, i = e("./HX_WDMGSJ_PoolManager").PoolManager, s = e("./HX_WDMGSJ_UIManager").UIManager;
cc.Class({
extends: cc.Component,
properties: {
mapData: cc.JsonAsset,
endlessData: cc.JsonAsset,
challengeData: cc.JsonAsset,
gameCamera: cc.Node,
mapParent: cc.Node,
particleParent: cc.Node,
role: cc.Node,
laser: cc.Node,
roleCamera: cc.Node,
touchUI: cc.Node,
ui: cc.Node,
gameAtlas: cc.SpriteAtlas,
isUp: !0,
touchPos: cc.v2(0, 0),
canMove: !1
},
onEnable: function() {
cc.director.getCollisionManager().enabled = !0;
window.GameManager = this;
this.init();
},
init: function() {
a.mapData = this.mapData.json;
a.endlessData = this.endlessData.json;
a.challengeData = this.challengeData.json;
this.touchUI.on(cc.Node.EventType.TOUCH_START, function(e) {
if (!a.superMode) {
GameManager.canMove = !0;
GameManager.touchPos = e.getLocation();
}
});
this.touchUI.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
if (GameManager.canMove) {
var t = e.getLocation(), n = cc.v2(t.x - GameManager.touchPos.x, t.y - GameManager.touchPos.y);
if (n.mag() > 20) {
Math.abs(n.x) > Math.abs(n.y) ? n.x > 0 ? a.nowDir = 3 : a.nowDir = 2 : n.y > 0 ? a.nowDir = 0 : a.nowDir = 1;
GameManager.canMove = !1;
}
}
});
n.addEvent("StartGameEvent", this.startGameEvent);
n.addEvent("GameOverEvent", this.gameOverEvent);
n.addEvent("ChangeEndlessStageEvent", this.changeEndlessStageEvent);
this.loadConfig();
s.openUI("MainUI");
},
loadPrefabs: function() {
cc.assetManager.loadBundle("HX_WDMGSJ", function(e, t) {
!e && t ? t.loadDir("resources/prefab", cc.Prefab, function(e, t) {
if (!e && t) for (var a = 0; a < t.length; a++) i.prefabList[t[a].name] = t[a]; else console.error(e, t);
}) : console.error(e, t);
});
},
startGameEvent: function() {
a.music && cc.audioEngine.playMusic(AudioManager.gameBGM, !0);
GameManager.role.active = !0;
a.superMode = !1;
a.canGenarateShield = !1;
a.superCharge = 0;
a.allPoint = 0;
a.point = 0;
a.starCount = 0;
a.endlessStage = 0;
a.endlessIndex = 0;
a.collitionGold = 0;
a.reviveCount = 3;
n.excuteEvent("ClearMapEvent");
var e = i.getNode("Map");
GameManager.mapParent.addChild(e, 1, "Map");
var t = e.getComponent("HX_WDMGSJ_MapSc");
t.stage = 0;
t.init();
if (1 == a.mode) {
n.excuteEvent("ChangeEndlessStageEvent");
var o = GameManager.role;
o.x = 450;
o.y = 0;
o.getComponent("HX_WDMGSJ_RoleSc").init();
} else {
var r;
r = 0 == +a.mode ? "GQMS" : "TSMS";
window.onGameStart && onGameStart(r, a.nowStage + 1);
}
a.state = 1, s.openUI("GameUI", function() {
a.hasEvent = !1;
});
},
gameOverEvent: function() {
n.excuteEvent("CloseShieldEvent");
n.clearEvent("CheckPosEvent");
AudioManager.playEffect("fail");
a.hasEvent = !0;
a.state = 0;
if (a.vibration) try {
hxblSdk.vibrateLong();
} catch (e) {}
if (a.reviveCount > 0) {
a.reviveCount--;
setTimeout(function() {
s.openUI("ReviveUI");
a.hasEvent = !1;
}, 500);
} else {
s.closeUI("GameUI");
setTimeout(function() {
var e;
e = 1 != a.mode ? "FailUI" : "OverUI";
s.openUI(e, function() {
a.hasEvent = !1;
});
}, 500);
}
},
loadConfig: function() {
var e = new Date();
a.readData("loginDate", [ e.getDate() - 1, e.getMonth(), e.getFullYear() ]);
a.readData("lotteryCount", 0);
a.readData("lotteryDate", [ e.getDate() - 1, e.getMonth(), e.getFullYear() ]);
a.readData("signData", 0);
a.readData("challengeStage", 0);
a.readData("challengeState", [ 0, 0 ]);
a.readData("shield", 0);
a.readData("bestScroe", 0);
a.readData("userStageData", []);
a.readData("userPaintStageData", []);
a.readData("useSkin", "as");
a.readData("skinData", {
as: [ 1.1, 26, 162, 0 ]
});
a.readData("maxStage", 0);
a.readData("maxPaintStage", 0);
a.readData("signSkin", !1);
a.nowStage = a.maxStage;
a.nowPaintStage = a.maxPaintStage;
},
update: function() {},
changeEndlessStageEvent: function() {
window.onGameStart && onGameStart("WJMS", a.endlessStage + 1, "无尽");
n.excuteEvent("ClearMapEvent", a.endlessStage - 2);
if (null == a.nowEndlessData[a.endlessStage + 1]) {
for (var e = 0; e < GameManager.mapParent.children.length; e++) GameManager.mapParent.children[e].zIndex = 1;
var t = i.getNode("Map");
t.parent = GameManager.mapParent;
t.zIndex = 0;
var s = t.getComponent("HX_WDMGSJ_MapSc");
s.stage = a.endlessStage + 1;
s.stage % 5 == 0 && (a.canGenarateShield = !0);
s.init();
}
}
});
cc._RF.pop();
}, {
"./HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"./HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager",
"./HX_WDMGSJ_PoolManager": "HX_WDMGSJ_PoolManager",
"./HX_WDMGSJ_UIManager": "HX_WDMGSJ_UIManager"
} ],
HX_WDMGSJ_GameUISc: [ function(e, t) {
"use strict";
cc._RF.push(t, "787bfXpOZZO8a11zCzf1wYf", "HX_WDMGSJ_GameUISc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_EventManager").EventManager, i = e("../manager/HX_WDMGSJ_PoolManager").PoolManager, s = e("../manager/HX_WDMGSJ_UIManager").UIManager;
cc.Class({
extends: cc.Component,
properties: {
point: cc.Node,
star: [ cc.Sprite ],
progress: cc.Sprite,
shieldLabel: cc.Label,
goldLabel: cc.Label,
atlas: cc.SpriteAtlas,
stageLabel: cc.Label,
endlessLabel: cc.Label,
progressBorder: cc.Node,
scaleContent: cc.Node,
laserProgress: cc.Node,
warningNode: cc.Node,
skinSprite: cc.Sprite,
skinAtlas: cc.SpriteAtlas,
superProgress: cc.Node,
superBar: cc.Node,
recPos: cc.Node,
_nowPoint: 0,
_nowScalePos: 0,
_scaleList: []
},
onLoad: function() {},
start: function() {
n.addEvent("AddPointEvent", this.refrash, this);
n.addEvent("ChangeGoldEvent", this.changeGoldEvent, this);
n.addEvent("GetStarEvent", this.addStar, this);
this.changeGoldEvent(null, this);
lieyou_SdkManager.addListenerBackKey({
node: this.node,
callBack: this.stopBtnClick.bind(this)
});
},
init: function() {
this.superBar.stopAllActions();
this.superBar.x = 0;
var e;
if (-1 == a.mode) {
this.stageLabel.node.active = !1;
this.endlessLabel.node.active = !1;
this.progressBorder.active = !0;
this.star[0].node.parent.active = !0;
this.scaleContent.parent.active = !1;
this.superProgress.active = !1;
} else if (1 == a.mode) {
this.scaleContent.parent.active = !0;
this.superProgress.active = !0;
this.endlessLabel.node.active = !0;
this.progressBorder.active = !1;
this.star[0].node.parent.active = !1;
for (var t = 0; t < 4; t++) {
var n = i.getNode("ScaleItem");
n.parent = this.scaleContent;
n.y = 375 - 125 * t;
n.x = 0;
this._scaleList.push(n);
}
this.skinSprite.spriteFrame = this.skinAtlas.getSpriteFrame(a.useSkin + "01");
} else {
if (0 == a.mode) {
e = a.nowStage;
this.star[0].node.parent.active = !0;
} else {
e = a.nowPaintStage;
this.star[0].node.parent.active = !1;
}
this.stageLabel.node.active = !0;
this.endlessLabel.node.active = !1;
this.progressBorder.active = !0;
this.scaleContent.parent.active = !1;
this.superProgress.active = !1;
}
this.shieldLabel.string = a.shield;
this.stageLabel.string = "D" + (e + 1) + "G";
this._nowPoint = 0;
this.progress.fillRange = 0;
this.point.x = -120;
for (t = 0; t < this.star.length; t++) this.star[t].spriteFrame = this.atlas.getSpriteFrame("commonSmallStar02");
a.shield <= 0 ? this.shieldLabel.node.parent.active = !1 : this.shieldLabel.node.parent.active = !0;
hxblSdk.showBanner();
},
update: function() {
if (1 == a.mode) {
this.endlessLabel.string = 50 * a.point;
this.scaleContent.y = -.2 * GameManager.role.y;
this.laserProgress.y = 288 - .2 * (GameManager.role.y - (GameManager.laser.y - 1500));
this.warningNode.y = this.laserProgress.y - 288;
this.laserProgress.y > 188 ? this.warningNode.opacity = 255 : this.warningNode.opacity = 0;
if (this._nowScalePos - this.scaleContent.y > 125) {
this._nowScalePos -= 125;
(e = i.getNode("ScaleItem")).parent = this.scaleContent;
e.x = 0;
e.y = 375 - this._nowScalePos;
} else if (this._nowScalePos - this.scaleContent.y < -125) {
this._nowScalePos += 125;
var e;
(e = i.getNode("ScaleItem")).parent = this.scaleContent;
e.x = 0;
e.y = -this._nowScalePos - 375;
}
if (!a.superMode) {
var t = a.superCharge / 250;
if (t >= 1) {
cc.tween(this.superBar).to(10, {
x: 0
}).start();
a.canMove = !1;
AudioManager.playEffect("superMode");
t = 1;
a.superMode = !0;
a.superCharge = 0;
setTimeout(function() {
a.canMove = !0;
a.superMode = !1;
a.wayList.length = 0;
}, 1e4);
}
this.superBar.x = 369 * t;
}
}
},
changeGoldEvent: function(e, t) {
t.goldLabel.string = a.gold;
},
refrash: function(e, t) {
var n = a.point / a.allPoint;
t.progress.fillRange = n;
t.point.x = 240 * n - 120;
},
addStar: function(e, t) {
t.star[e - 1].spriteFrame = t.atlas.getSpriteFrame("commonSmallStar01");
},
stopBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
a.state = 0;
s.openUI("StopUI", function() {
a.hasEvent = !1;
});
}
},
shieldBtnClick: function() {
if (!a.hasEvent) {
AudioManager.playEffect("click");
if (!a.hasShield) if (a.shield > 0) {
a.shield--;
n.excuteEvent("OpenShieldEvent");
this.shieldLabel.string = a.shield;
a.saveData("shield", a.shield);
a.hasEvent = !1;
a.shield <= 0 ? this.shieldLabel.node.parent.active = !1 : this.shieldLabel.node.parent.active = !0;
} else {
a.music && cc.audioEngine.stopMusic();
a.state = 0;
hxblSdk.showVideo(function(e) {
a.state = 1;
a.music && cc.audioEngine.playMusic(AudioManager.gameBGM);
a.hasEvent = !1;
0 === e ? n.excuteEvent("OpenShieldEvent") : a.showMessage("视频获取失败");
});
}
}
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager",
"../manager/HX_WDMGSJ_PoolManager": "HX_WDMGSJ_PoolManager",
"../manager/HX_WDMGSJ_UIManager": "HX_WDMGSJ_UIManager"
} ],
HX_WDMGSJ_GetGoldUISc: [ function(e, t) {
"use strict";
cc._RF.push(t, "5b5ccjeBklH4pcIXkxcMID6", "HX_WDMGSJ_GetGoldUISc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_EventManager").EventManager, i = e("../manager/HX_WDMGSJ_PoolManager").PoolManager, s = e("../manager/HX_WDMGSJ_UIManager").UIManager;
cc.Class({
extends: cc.Component,
properties: {
videoBtn: cc.Button,
particleParent: cc.Node,
goldLabel: cc.Label,
goldCount: 0,
adControl: 0,
btn: cc.Node,
adBtn: cc.Node
},
start: function() {},
init: function() {
this.btn.scale = 0;
var e = 0;
hxblSdk.isShenhe() || (e = 1);
cc.tween(this.btn).delay(e).to(.1, {
scale: 1
}).start();
a.trialSkinName = null;
hxblSdk.showSpot(3);
cc.log("结算1");
this.videoBtn.interactable = !0;
if (-1 == a.mode) {
this.goldCount = 100 * a.starCount - 100 * a.challengeState[0];
this.goldCount < 0 && (this.goldCount = 0);
} else 0 == a.mode || 2 == a.mode ? this.goldCount = 5 * a.starCount + 5 : 1 == a.mode && (this.goldCount = a.collitionGold);
a.gold += this.goldCount;
this.goldLabel.string = "x" + this.goldCount;
n.excuteEvent("ChangeGoldEvent");
onGameSuccess();
},
receiveBtnClick: function() {
var e = this;
if (!a.hasEvent) {
AudioManager.playEffect("click");
a.hasEvent = !0;
s.closeUI("GetGoldUI", function() {
a.hasEvent = !1;
null == a.successCount && (a.successCount = 0);
a.successCount++;
if (-1 != a.mode) if (a.successCount >= 3) {
a.successCount = 0;
s.openUI("TrialSkinUI");
} else if (1 == a.mode) s.openUI("OverUI"); else {
s.openUI("SuccessUI");
s.uiDic.SuccessUI.setGoldLabel("+" + e.goldCount);
} else {
s.openUI("SuccessUI");
s.uiDic.SuccessUI.setGoldLabel("+" + e.goldCount);
}
});
}
},
videoBtnClick: function() {
if (!a.hasEvent) {
AudioManager.playEffect("click");
a.music && cc.audioEngine.stopMusic();
var e = this;
hxblSdk.showVideo(function(t) {
a.hasEvent = !1;
if (0 === t) {
a.gold += e.goldCount;
var i = 2 * e.goldCount;
cc.tween(e).to(2, {
goldCount: i
});
e.goldCount += e.goldCount;
e.videoBtn.interactable = !1;
n.excuteEvent("ChangeGoldEvent");
a.showMessage("翻倍成功!");
} else a.showMessage("视频获取失败");
a.music && cc.audioEngine.playMusic(AudioManager.gameBGM);
});
}
},
update: function() {
this.goldLabel.string = "x" + Math.ceil(this.goldCount);
},
setParticle: function() {
for (var e = 0; e < 6; e++) {
var t = i.getNode("giftParticle" + e);
t.parent = this.particleParent;
t.setPosition(0, 0, 0);
}
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager",
"../manager/HX_WDMGSJ_PoolManager": "HX_WDMGSJ_PoolManager",
"../manager/HX_WDMGSJ_UIManager": "HX_WDMGSJ_UIManager"
} ],
HX_WDMGSJ_ItemSc: [ function(e, t) {
"use strict";
cc._RF.push(t, "e0727bbBHpM8ZjovL8/HFos", "HX_WDMGSJ_ItemSc");
cc.Class({
extends: cc.Component,
properties: {
type: "",
dir: -1,
stage: 0,
isLive: !0
},
start: function() {},
init: function() {
this.node.opacity = 255;
this.isLive = !0;
if ("patrolMonster" == this.type) {
var e = this.node.getComponent("HX_WDMGSJ_PatrolMonsterSc");
e._dir = this.dir;
e.stage = this.stage;
e.init();
} else if ("arrow" == this.type) {
var t = this.node.getComponent("HX_WDMGSJ_ArrowSc");
t.dir = this.dir;
t.stage = this.stage;
t.init();
} else if ("trackMonster" == this.type) this.node.getComponent("HX_WDMGSJ_TrackMonsterSc").init(); else if ("angreMonster" == this.type) {
this.node.getComponent(cc.Animation).play();
this.node.getChildByName("Animation").getChildByName("ball").active = !0;
} else if ("box" == this.type) {
var a = this.node.getComponent("HX_WDMGSJ_BoxSc");
a._dir = this.dir;
a.stage = this.stage;
a.init();
} else "dragon" == this.type && this.node.getComponent("HX_WDMGSJ_DragonSc").init();
}
});
cc._RF.pop();
}, {} ],
HX_WDMGSJ_LaserSc: [ function(e, t) {
"use strict";
cc._RF.push(t, "b2d28JxUxFHcYlelWD+vJD3", "HX_WDMGSJ_LaserSc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_EventManager").EventManager;
cc.Class({
extends: cc.Component,
properties: {
speed: 0
},
start: function() {
n.addEvent("ClearMapEvent", this.clearMapEvent, this);
n.addEvent("StartGameEvent", this.startGameEvent, this);
n.addEvent("ReviveEvent", this.reviveEvent, this);
n.addEvent("ChangeEndlessStageEvent", this.changeEndlessStageEvent, this);
this.node.active = !1;
},
update: function() {
if (1 == a.state) {
var e = this.speed + .01 * a.endlessStage;
this.node.y += e > 3.8 ? 3.8 : e;
}
},
startGameEvent: function(e, t) {
if (1 == a.mode) {
t.node.active = !0;
t.node.y = 0;
}
},
clearMapEvent: function(e, t) {
null == e && (t.node.active = !1);
},
reviveEvent: function(e, t) {
1 == a.mode && (t.node.y -= 500);
},
changeEndlessStageEvent: function(e, t) {
1 == a.mode && GameManager.role.y - t.node.y > -500 && (t.node.y = GameManager.role.y + 500);
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager"
} ],
HX_WDMGSJ_LavaStepSc: [ function(e, t) {
"use strict";
cc._RF.push(t, "82580wdh/pB+bM03NNg/0sB", "HX_WDMGSJ_LavaStepSc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_EventManager").EventManager;
cc.Class({
extends: cc.Component,
properties: {
isActive: !1,
hasDamage: !1
},
start: function() {},
onCollisionStay: function(e) {
if ("role" == e.node.group) {
if (!this.isActive) {
this.isActive = !0;
this.node.getComponent(cc.Animation).play();
}
if (this.hasDamage) {
this.hasDamage = !1;
if (1 == a.state) {
if (a.superMode) return;
a.hasShield ? n.excuteEvent("CloseShieldEvent") : n.excuteEvent("GameOverEvent");
}
}
}
},
setDamage: function(e) {
this.hasDamage = e;
e && AudioManager.playEffect("lavaStep");
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager"
} ],
HX_WDMGSJ_LoadUISc: [ function(e, t) {
"use strict";
cc._RF.push(t, "0564cfQ0U1AgIzD4oACrwkt", "HX_WDMGSJ_LoadUISc");
e("../../hx_adapter/HX_WDMGSJ_hxbl2pp").SdkManager;
var a, n = e("../manager/HX_WDMGSJ_DataManager").DataManager, i = e("../manager/HX_WDMGSJ_PoolManager").PoolManager;
cc.Class({
extends: cc.Component,
properties: {
_progress: 0,
_isLoading: !1,
bar: cc.Node,
count: 1,
allCount: 0,
tagetPos: 0,
canEnter: !1
},
onLoad: function() {
a = this;
this.startPreloading();
},
update: function() {
if (this._isLoading) {
this.tagetPos = (this._progress + this.count - 1) / this.allCount * 345;
this.tagetPos > this.bar.x && (this.bar.x += (this.tagetPos - this.bar.x) / 4);
if (this.canEnter && this.bar.x >= 340) {
this.canEnter = !1;
console.log("func55555555555555555555555");
cc.assetManager.loadBundle("HX_WDMGSJ", function(e, t) {
!e && t ? t.loadScene("HX_WDMGSJ_GameScene", function(e, t) {
!e && t ? cc.director.runScene(t) : console.error(e, t);
}) : console.error(e, t);
});
}
}
},
startPreloading: function() {
this._isLoading = !0;
var e = this;
e.allCount = 3;
this.loadSubpackage(function(t) {
a._progress = t;
if (1 == t) {
e.count++;
e.stageDataCallBack(e);
}
});
},
stageDataCallBack: function(e) {
e.count++;
n.paintData = [];
cc.assetManager.loadBundle("HX_WDMGSJ", function(t, a) {
!t && a ? a.loadDir("resources/paintModeData", e.progressCallback, function(t, a) {
if (!t && a) {
for (var i = 0; i < a.length; i++) {
var s = a[i], o = s.name.split("_")[1], r = parseInt(o);
n.paintData[r - 1] = s.text.split(",");
}
e.resoucesCallBack(e);
} else console.error(t, a);
}) : console.error(t, a);
});
},
progressCallback: function(e, t) {
a._isLoading && (a._progress = e / t);
},
resoucesCallBack: function(e) {
e.count++;
cc.assetManager.loadBundle("HX_WDMGSJ", function(t, n) {
!t && n ? n.loadDir("resources/prefab", e.progressCallback, function(e, t) {
if (!e && t) {
for (var s = 0; s < t.length; s++) i.prefabList[t[s].name] = t[s];
a.canEnter = !0;
console.log("func3333333333333333333");
} else console.error(e, n);
}) : console.error(t, n);
});
},
loadSubpackage: function(e) {
var t = [], a = 0, n = 0, i = cc.loader.downloader._subpackages;
for (var s in i) {
var o = i[s], r = 1;
o.uuids && (r = o.uuids.length);
a += r;
t.push({
name: o.name,
file_num: r
});
}
(function i(s) {
if (t.length != s) {
console.log("加载分包", t[s].name);
cc.loader.downloader.loadSubpackage(t[s].name, function(o) {
if (o) (r = (n + o.targetProgress / 100 * t[s].file_num) / a) < 1 && e && e(r); else {
var r;
(r = (n += t[s].file_num) / a) < 1 && e && e(r);
i(s + 1);
}
}, function(o) {
if (o) {
console.log(o);
e && e(0);
} else {
var r = (n += t[s].file_num) / a;
r < 1 && e && e(r);
i(s + 1);
}
});
} else e && e(1);
})(0);
}
});
cc._RF.pop();
}, {
"../../hx_adapter/HX_WDMGSJ_hxbl2pp": "HX_WDMGSJ_hxbl2pp",
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_PoolManager": "HX_WDMGSJ_PoolManager"
} ],
HX_WDMGSJ_LotteryUISc: [ function(e, t) {
"use strict";
cc._RF.push(t, "4d68b8rGGtCp4veP1DwD9Wu", "HX_WDMGSJ_LotteryUISc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_EventManager").EventManager, i = e("../manager/HX_WDMGSJ_PoolManager").PoolManager, s = e("../manager/HX_WDMGSJ_UIManager").UIManager;
cc.Class({
extends: cc.Component,
properties: {
itemType: 0,
itemCount: 0,
_targetAngle: 0,
_nowAngle: 0,
_centerAngle: 0,
_speed: 0,
videoSprite: cc.SpriteFrame,
lotterySprite: cc.SpriteFrame,
lotteryBtn: cc.Node,
countLabel: cc.Label,
table: cc.Node,
particleParent: cc.Node,
startLottery: !1,
btn: cc.Node
},
start: function() {
lieyou_SdkManager.addListenerBackKey({
node: this.node,
callBack: this.closeBtnClick.bind(this)
});
},
init: function() {
this.btn.scale = 0;
var e = 0;
hxblSdk.isShenhe() || (e = 1.5);
hxblSdk.showSpot(2);
cc.tween(this.btn).delay(e).to(.1, {
scale: 1
}).start();
this.countLabel.string = "x" + a.lotteryCount;
a.lotteryCount > 0 ? this.lotteryBtn.getComponent(cc.Sprite).spriteFrame = this.lotterySprite : this.lotteryBtn.getComponent(cc.Sprite).spriteFrame = this.videoSprite;
},
update: function() {
if (this.startLottery) if (this.table.angle > this._centerAngle) {
this._speed += .1;
this.table.angle -= this._speed;
} else if (this.table.angle > this._targetAngle + 5) this.table.angle -= (this.table.angle - this._targetAngle) / 50; else {
cc.tween(this.table.parent).to(.2, {
scale: 1.1
}).to(.2, {
scale: 1
}).start();
for (var e = 0; e < 6; e++) {
var t = i.getNode("giftParticle" + e);
t.parent = this.particleParent;
t.setPosition(0, 0, 0);
}
this.startLottery = !1;
a.hasEvent = !1;
this._speed = 0;
if (1 == this.itemType) {
a.showMessage("恭喜获得1个护盾!");
a.shield++;
a.saveData("shield", a.shield);
n.excuteEvent("ChangeShieldEvent");
} else {
a.showMessage("恭喜获得" + this.itemCount + "个金币!");
a.gold += this.itemCount;
n.excuteEvent("ChangeGoldEvent");
}
}
},
lotteryBtnClick: function() {
if (!a.hasEvent) {
AudioManager.playEffect("click");
if (a.lotteryCount > 0) {
a.lotteryCount--;
this.countLabel.string = "x" + a.lotteryCount;
a.saveData("lotteryCount", a.lotteryCount);
this.lottery();
a.lotteryCount > 0 ? this.lotteryBtn.getComponent(cc.Sprite).spriteFrame = this.lotterySprite : this.lotteryBtn.getComponent(cc.Sprite).spriteFrame = this.videoSprite;
} else {
a.music && cc.audioEngine.stopMusic();
var e = this;
a.hasEvent = !1;
hxblSdk.showVideo(function(t) {
if (0 === t) e.lottery(); else {
a.showMessage("视频获取失败");
a.hasEvent = !1;
}
a.music && cc.audioEngine.playMusic(AudioManager.mainBGM);
});
}
}
},
lottery: function() {
a.hasEvent = !0;
this.startLottery = !0;
var e = 0, t = 0, n = Math.random();
if (0 <= n && n < .1) {
this._targetAngle = 0;
e = 100;
} else if (.1 <= n && n < .2) {
this._targetAngle = 60;
e = 200;
} else if (.2 <= n && n < .3) {
this._targetAngle = 120;
e = 1;
t = 1;
} else if (.3 <= n && n < .8) {
this._targetAngle = 240;
e = 50;
} else if (.8 <= n && n <= 1) {
this._targetAngle = 300;
e = 80;
}
this.table.angle += 360 * (Math.floor(2 * Math.random()) + 5);
this._centerAngle = (this.table.angle + this._targetAngle) / 2;
this.itemType = t;
this.itemCount = e;
},
closeBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
s.closeUI("LotteryUI", function() {
s.uiDic.MainUI.initBtn();
a.hasEvent = !1;
});
}
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager",
"../manager/HX_WDMGSJ_PoolManager": "HX_WDMGSJ_PoolManager",
"../manager/HX_WDMGSJ_UIManager": "HX_WDMGSJ_UIManager"
} ],
HX_WDMGSJ_MainUISc: [ function(e, t) {
"use strict";
cc._RF.push(t, "377e1otwiNNObcLiskOW0Zm", "HX_WDMGSJ_MainUISc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_EventManager").EventManager, i = e("../manager/HX_WDMGSJ_PoolManager").PoolManager, s = e("../manager/HX_WDMGSJ_UIManager").UIManager;
GameOffline.exitHandlers.HX_WDMGSJ = function() {
s.clear(); n.clear(); i.clear(); a.hasEvent = false;
};
cc.Class({
extends: cc.Component,
properties: {
goldLabel: cc.Label,
shieldLabel: cc.Label,
signBtn: cc.Node,
stageBtn: cc.Node,
giftBtn: cc.Node,
shopBtn: cc.Node,
trophySprite: [ cc.SpriteFrame ],
trophy: cc.Sprite,
logo: cc.Node
},
start: function() {
n.addEvent("ChangeGoldEvent", this.changeGoldEvent, this);
n.addEvent("ChangeShieldEvent", this.changeShieldEvent, this);
var e = a.loginDate, t = new Date();
if ((e = a.lotteryDate)[0] != t.getDate() || e[1] != t.getMonth() || e[2] != t.getFullYear()) {
a.lotteryCount += 1;
a.challengeStage++;
a.challengeStage >= a.challengeData.length && (a.challengeStage = 0);
a.challengeState = [ 0, 0 ];
a.saveData("challengeStage", a.challengeStage);
a.saveData("challengeState", a.challengeState);
a.saveData("lotteryCount", a.lotteryCount);
a.lotteryDate = [ t.getDate(), t.getMonth(), t.getFullYear() ];
a.saveData("lotteryDate", a.lotteryDate);
}
this.changeGoldEvent(null, this);
this.changeShieldEvent(null, this);
lieyou_SdkManager.addListenerBackKey({
node: this.node,
callBack: this.goHome.bind(this)
});
"xiaomi" === lieyou_SdkManager.getNativeSys() && (this.logo.active = !1);
},
init: function() {
hxblSdk.showBanner();
var e = new Date(), t = a.loginDate;
this.canSign ? t[0] == e.getDate() && t[1] == e.getMonth() && t[2] == e.getFullYear() || s.openUI("SignUI") : this.canSign = !0;
n.excuteEvent("CloseShieldEvent");
this.initBtn();
this.shieldLabel.string = a.shield;
GameManager.role.active = !1;
if (a.music) {
cc.audioEngine.stopMusic();
cc.audioEngine.playMusic(AudioManager.mainBGM, !0);
}
for (var i = 0; i < a.achievementScore.length; i++) a.bestScroe >= a.achievementScore[i] && (this.trophy.spriteFrame = this.trophySprite[i]);
},
initBtn: function() {
this.signBtn.getChildByName("CheckBox").active = !1;
this.signBtn.y = 0;
this.stageBtn.getChildByName("CheckBox").active = !1;
this.stageBtn.y = 0;
this.giftBtn.getChildByName("CheckBox").active = !1;
this.giftBtn.y = 0;
this.shopBtn.getChildByName("CheckBox").active = !1;
this.shopBtn.y = 0;
},
changeGoldEvent: function(e, t) {
t.goldLabel.string = a.gold;
},
changeShieldEvent: function(e, t) {
t.shieldLabel.string = a.shield;
},
setupBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
s.openUI("SetupUI", function() {
a.hasEvent = !1;
});
}
},
signBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
this.initBtn();
this.signBtn.getChildByName("CheckBox").active = !0;
this.signBtn.y = 10;
a.hasEvent = !1;
s.openUI("SignUI", function() {
a.hasEvent = !1;
});
}
},
stageBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
this.initBtn();
this.stageBtn.getChildByName("CheckBox").active = !0;
this.stageBtn.y = 10;
s.openUI("StageUI", function() {
a.hasEvent = !1;
});
}
},
giftBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
this.initBtn();
this.giftBtn.getChildByName("CheckBox").active = !0;
this.giftBtn.y = 10;
s.openUI("LotteryUI", function() {
a.hasEvent = !1;
});
}
},
shopBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
this.initBtn();
this.shopBtn.getChildByName("CheckBox").active = !0;
this.shopBtn.y = 10;
s.openUI("ShopUI", function() {
a.hasEvent = !1;
});
}
},
startBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
s.openUI("ModeUI", function() {
a.hasEvent = !1;
});
}
},
achievementBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
s.openUI("AchievementUI", function() {
a.hasEvent = !1;
});
}
},
challengeBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
this.initBtn();
this.stageBtn.getChildByName("CheckBox").active = !0;
this.stageBtn.y = 10;
s.openUI("ChallengeUI", function() {
a.hasEvent = !1;
});
}
},
goHome: function() {
AudioManager.playEffect("click");
s.clear();
n.clear();
i.clear();
a.hasEvent = !1;
PPSDK.subGame.goHome();
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager",
"../manager/HX_WDMGSJ_PoolManager": "HX_WDMGSJ_PoolManager",
"../manager/HX_WDMGSJ_UIManager": "HX_WDMGSJ_UIManager"
} ],
HX_WDMGSJ_MapSc: [ function(e, t) {
"use strict";
cc._RF.push(t, "021322/et5L9qqETWMpOAO2", "HX_WDMGSJ_MapSc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_EventManager").EventManager, i = e("../manager/HX_WDMGSJ_PoolManager").PoolManager;
cc.Class({
extends: cc.Component,
properties: {
floors: cc.Node,
floorPrefab: cc.Prefab,
gameAtlas: cc.SpriteAtlas,
items: cc.Node,
monsters: cc.Node,
itemPrefab: cc.Prefab,
itemList: new Array(),
stage: 0,
isLive: !1,
wall0: cc.SpriteFrame,
wall1: cc.SpriteFrame
},
onLoad: function() {
n.addEvent("ClearMapEvent", this.clearMapEvent, this);
},
start: function() {},
printData: function() {
for (var e = "", t = 0; t < this.itemList.length; t++) {
var a = this.itemList[t];
"" != a.type && (e += "{x:" + a.node.x + ",y:" + a.node.y + ',type:"' + a.type + '",dir:' + a.dir + "},");
}
console.log(e);
},
init: function() {
this.isLive = !0;
this.generateMap(null, this);
},
generateMap: function(e, t) {
if (t.isLive) {
var n = [];
if (0 == a.mode) {
n = a.mapData[a.nowStage].itemData;
t.node.x = 0;
t.node.y = 0;
} else if (1 == a.mode) {
a.endlessIndex++;
a.endlessIndex >= a.endlessData.length && (a.endlessIndex = 0);
n = a.endlessData[a.endlessIndex].itemData;
t.node.x = 0;
t.node.y = 1875 * t.stage;
} else if (-1 == a.mode) {
n = a.challengeData[a.challengeStage].itemData;
t.node.x = 0;
t.node.y = 0;
} else if (2 == a.mode) {
t.node.x = 0;
t.node.y = 0;
for (var s = a.paintData[a.nowPaintStage], o = s[s.length - 2], r = s[s.length - 1], c = 0, l = 1, g = o; g > 0; g--) for (var h = 0; h < r; h++) {
var d = s[c];
if (0 == d) d = "wall"; else if (1 == l) {
l = 0;
d = "role";
} else d = "floor";
n[c] = {
x: 75 * h,
y: 75 * g,
type: d,
dir: -1
};
c++;
}
}
var u = Math.floor(2 * Math.random());
for (g = 0; g < n.length; g++) {
var p = n[g];
p.isLavaStep ? f = i.getNode("lavaStep") : (f = i.getNode("floor")).getChildByName("paint").scale = 0;
f.parent = t.floors;
f.x = p.x;
f.y = p.y;
f.state = 0;
2 == a.mode && "wall" != p.type && a.allPoint++;
if ("role" == p.type) {
if (2 == a.mode) {
(M = f.getComponent("HX_WDMGSJ_ItemSc")).type = "floor";
M.dir = p.dir;
null == a.nowMapData[f.x] && (a.nowMapData[f.x] = []);
a.nowMapData[f.x][f.y] = M;
}
var _ = GameManager.role;
_.x = p.x;
_.y = p.y;
_.getComponent("HX_WDMGSJ_RoleSc").init();
} else {
var S;
if ("floor" == p.type) S = f; else {
if ("poin" == p.type) if (a.canGenarateShield) {
if (a.hasShield) {
a.allPoint += 1;
a.canGenarateShield = !1;
} else if (Math.random() < .1) {
p.type = "shield";
a.canGenarateShield = !1;
}
} else a.allPoint += 1;
null == (S = i.getNode(p.type)) && (S = i.getNode(p.type + p.dir));
if (null == S) continue;
S.active = !0;
"angreMonster" == p.type ? S.parent = t.monsters : S.parent = t.items;
"wall" == p.type && (S.getChildByName("Image").getComponent(cc.Sprite).spriteFrame = t.gameAtlas.getSpriteFrame("wall" + u) || t["wall" + u]);
S.x = p.x;
S.y = p.y;
}
null == S && (S = i.getNode(p.type + p.dir));
if (null == S) continue;
if (null == (M = S.getComponent("HX_WDMGSJ_ItemSc"))) continue;
M.type = p.type;
M.dir = p.dir;
if (1 != a.mode) {
null == a.nowMapData[S.x] && (a.nowMapData[S.x] = []);
a.nowMapData[S.x][S.y] = M;
} else {
null == a.nowEndlessData[t.stage] && (a.nowEndlessData[t.stage] = []);
null == a.nowEndlessData[t.stage][S.x] && (a.nowEndlessData[t.stage][S.x] = []);
a.nowEndlessData[t.stage][S.x][S.y] = M;
}
M.stage = t.stage;
M.init();
}
if (null != p.monsterType) {
var M, v = i.getNode(p.monsterType);
v.parent = t.monsters;
v.x = p.x;
v.y = p.y;
(M = v.getComponent("HX_WDMGSJ_ItemSc")).type = p.monsterType;
M.dir = p.dir;
M.stage = t.stage;
M.init();
}
}
if (1 == a.mode && 0 == t.stage) for (g = 0; g < 13; g++) {
var f;
(f = i.getNode("floor")).parent = t.floors;
f.x = 75 * g;
f.y = -75;
var D = i.getNode("wall");
D.getChildByName("Image").getComponent(cc.Sprite).spriteFrame = t["wall" + u];
D.parent = t.items;
D.x = 75 * g;
D.y = -75;
}
}
},
clearMapEvent: function(e, t) {
if (t.isLive) {
if (1 == a.mode) {
if (null != e && e != t.stage) return;
a.nowEndlessData[t.stage] = null;
}
for (var n = t.floors.children, s = n.length, o = 0; o < s; o++) {
var r = n[0];
i.addNode(r.name, r);
}
var c = t.items.children;
for (s = c.length, o = 0; o < s; o++) {
r = c[0];
i.addNode(r.name, r);
}
var l = t.monsters.children;
for (s = l.length, o = 0; o < s; o++) {
r = l[0];
i.addNode(r.name, r);
}
i.addNode(t.node.name, t.node);
a.nowMapData.length = 0;
t.isLive = !1;
}
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager",
"../manager/HX_WDMGSJ_PoolManager": "HX_WDMGSJ_PoolManager"
} ],
HX_WDMGSJ_ModeUISc: [ function(e, t) {
"use strict";
cc._RF.push(t, "493d1jHXm9KTLK/EpqNFw0x", "HX_WDMGSJ_ModeUISc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_EventManager").EventManager, i = e("../manager/HX_WDMGSJ_UIManager").UIManager;
cc.Class({
extends: cc.Component,
properties: {
isVideo: !0
},
start: function() {
lieyou_SdkManager.addListenerBackKey({
node: this.node,
callBack: this.closeBtnClick.bind(this)
});
},
init: function() {
hxblSdk.showCustomFast(2, 1);
},
modeBtnClick: function(e, t) {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
a.mode = t;
a.nowStage > a.mapData.length - 1 && (a.nowStage = a.mapData.length - 1);
i.openUI("StageUI");
i.closeUI("ModeUI", function() {
a.hasEvent = !1;
});
}
},
endlessBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
a.mode = 1;
i.closeUI("MainUI");
i.closeUI("ModeUI", function() {
n.excuteEvent("StartGameEvent");
a.hasEvent = !1;
});
}
},
closeBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
i.closeUI("ModeUI", function() {
i.uiDic.MainUI.initBtn();
a.hasEvent = !1;
});
}
},
videoToggleClick: function(e) {
AudioManager.playEffect("click");
this.isVideo = e.isChecked;
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager",
"../manager/HX_WDMGSJ_UIManager": "HX_WDMGSJ_UIManager"
} ],
HX_WDMGSJ_OverUISc: [ function(e, t) {
"use strict";
cc._RF.push(t, "01160cWtlNJzpPuEqeOKadU", "HX_WDMGSJ_OverUISc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_EventManager").EventManager, i = e("../manager/HX_WDMGSJ_UIManager").UIManager;
cc.Class({
extends: cc.Component,
properties: {
videoBtn: cc.Button,
bestLabel: cc.Label,
pointLabel: cc.Label,
goldLabel: cc.Label,
toggle: cc.Toggle,
isVideo: !0,
btn: cc.Node,
adControl: 0
},
start: function() {},
init: function() {
n.excuteEvent("CloseShieldEvent");
this.node.getComponent(cc.Animation).once("finished", function() {});
onGameSuccess();
hxblSdk.showSpot(3);
this.btn.scale = 0;
var e = 0;
hxblSdk.isShenhe() || (e = 1);
cc.tween(this.btn).delay(e).to(.1, {
scale: 1
}).start();
var t = 50 * a.point;
if (t > a.bestScroe) {
a.bestScroe = t;
a.saveData("bestScroe", a.bestScroe);
}
this.bestLabel.string = a.bestScroe;
this.pointLabel.string = t;
this.goldLabel.string = a.collitionGold;
this.videoBtn.interactable = !0;
},
videoBtnClick: function() {
if (!a.hasEvent) {
AudioManager.playEffect("click");
var e = this;
a.music && cc.audioEngine.stopMusic();
hxblSdk.showVideo(function(t) {
a.hasEvent = !1;
if (0 === t) {
a.gold += a.collitionGold;
a.showMessage("恭喜获得" + a.collitionGold + "金币!");
e.videoBtn.interactable = !1;
} else a.showMessage("视频获取失败");
a.music && cc.audioEngine.playMusic(AudioManager.gameBGM);
});
}
},
replayBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
if (this.toggle.isChecked) {
a.music && cc.audioEngine.stopMusic();
hxblSdk.showVideo(function(e) {
a.hasEvent = !1;
if (0 === e) {
a.hasShield = !0;
i.closeUI("OverUI", function() {
a.hasEvent = !1;
});
n.excuteEvent("StartGameEvent");
} else a.showMessage("视频获取失败");
a.music && cc.audioEngine.playMusic(AudioManager.gameBGM);
});
} else {
i.closeUI("OverUI", function() {
a.hasEvent = !1;
});
n.excuteEvent("StartGameEvent");
}
}
},
nextVideoBtnClick: function() {
if (!a.hasEvent) {
AudioManager.playEffect("click");
a.music && cc.audioEngine.stopMusic();
hxblSdk.showVideo(function(e) {
a.hasEvent = !1;
if (0 === e) {
a.hasShield = !0;
i.closeUI("OverUI", function() {
a.hasEvent = !1;
});
n.excuteEvent("StartGameEvent");
} else a.showMessage("视频获取失败");
a.music && cc.audioEngine.playMusic(AudioManager.gameBGM);
});
}
},
homeBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
setTimeout(function() {
i.openUI("MainUI", function() {
a.hasEvent = !1;
});
}, 250);
i.closeUI("OverUI");
n.excuteEvent("ClearMapEvent");
}
},
videoToggleClick: function(e) {
AudioManager.playEffect("click");
this.isVideo = e.isChecked;
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager",
"../manager/HX_WDMGSJ_UIManager": "HX_WDMGSJ_UIManager"
} ],
HX_WDMGSJ_PatrolMonsterSc: [ function(e, t) {
"use strict";
cc._RF.push(t, "3d105sTwK5CorlUWR4JCBLs", "HX_WDMGSJ_PatrolMonsterSc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_EventManager").EventManager;
cc.Class({
extends: cc.Component,
properties: {
vecDir: new cc.Vec2(),
_rpos: [ 0, 0 ],
_dir: -1,
stage: 0,
isLive: !0,
isFreeze: !1
},
start: function() {},
init: function() {
this.isLive = !0;
this.isFreeze = !1;
this._rpos[0] = this.node.x;
this._rpos[1] = this.node.y;
switch (this._dir) {
case 0:
this.vecDir.x = 0;
this.vecDir.y = 1;
break;

case 1:
this.vecDir.x = 0;
this.vecDir.y = -1;
break;

case 2:
this.vecDir.x = -1;
this.vecDir.y = 0;
break;

case 3:
this.vecDir.x = 1;
this.vecDir.y = 0;
}
},
update: function() {
if (0 != a.state && !this.isFreeze) {
if (Math.abs(this.node.x - this._rpos[0]) + Math.abs(this.node.y - this._rpos[1]) >= 75) {
this._rpos[0] += 75 * this.vecDir.x;
this._rpos[1] += 75 * this.vecDir.y;
this.node.x = this._rpos[0];
this.node.y = this._rpos[1];
var e;
e = 1 != a.mode ? a.nowMapData[this._rpos[0] + 75 * this.vecDir.x][this._rpos[1] + 75 * this.vecDir.y] : a.nowEndlessData[this.stage][this._rpos[0] + 75 * this.vecDir.x][this._rpos[1] + 75 * this.vecDir.y];
if (!this.judgeType(e)) {
this.vecDir.x *= -1;
this.vecDir.y *= -1;
}
}
this.node.x += 3 * this.vecDir.x;
this.node.y += 3 * this.vecDir.y;
}
},
judgeType: function(e) {
var t = !0;
if (null == e) return !0;
e.isLive && ("wall" != e.type && "arrow" != e.type && "angreMonster" != e.type && "stab" != e.type || (t = !1));
return t;
},
onCollisionEnter: function(e) {
if ("role" == e.node.group) {
if (a.superMode) return;
if (this.isFreeze) return;
a.hasShield ? n.excuteEvent("CloseShieldEvent") : n.excuteEvent("GameOverEvent");
}
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager"
} ],
HX_WDMGSJ_PoolManager: [ function(e, t, a) {
"use strict";
cc._RF.push(t, "c1abeii1wtM5LzShDFSdrH8", "HX_WDMGSJ_PoolManager");
a.__esModule = !0;
a.PoolManager = void 0;
var n = {
pool: {},
prefabList: {},
addNode: function(e, t) {
if (null == this.pool[e]) {
this.pool[e] = new cc.NodePool();
this.pool[e].put(t);
} else this.pool[e].put(t);
},
getNode: function(e) {
if (!(null == this.pool[e] || this.pool[e].size() <= 0)) return this.pool[e].get();
if (null != this.prefabList[e]) return cc.instantiate(this.prefabList[e]);
console.log("node is not exist--" + e);
},
clear: function() {
this.pool = {};
this.prefabList = {};
}
};
a.PoolManager = n;
cc._RF.pop();
}, {} ],
HX_WDMGSJ_ReviveUISc: [ function(e, t) {
"use strict";
cc._RF.push(t, "1d1baX4lZ5Ig5CY1U9g9Hdw", "HX_WDMGSJ_ReviveUISc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_EventManager").EventManager, i = e("../manager/HX_WDMGSJ_UIManager").UIManager;
cc.Class({
extends: cc.Component,
properties: {
skinSprite: cc.Sprite,
skinAtlas: cc.SpriteAtlas,
btn: cc.Node,
adControl: 0
},
start: function() {},
init: function() {
this.btn.scale = 0;
var e = 0;
hxblSdk.isShenhe() || (e = 1);
cc.tween(this.btn).delay(e).to(.1, {
scale: 1
}).start();
this.skinSprite.spriteFrame = this.skinAtlas.getSpriteFrame(a.useSkin + "03");
hxblSdk.showCustomFast(3, 1);
},
reviveBtnClick: function() {
if (!a.hasEvent) {
a.music && cc.audioEngine.stopMusic();
hxblSdk.showVideo(function(e) {
if (0 === e) {
n.excuteEvent("ReviveEvent");
i.closeUI("ReviveUI");
} else a.showMessage("视频获取失败");
a.music && cc.audioEngine.playMusic(AudioManager.gameBGM);
a.hasEvent = !1;
});
}
},
jumpOverBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
i.closeUI("ReviveUI");
i.closeUI("GameUI");
setTimeout(function() {
var e;
e = 1 != a.mode ? "FailUI" : "OverUI";
i.openUI(e, function() {
a.hasEvent = !1;
});
}, 700);
}
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager",
"../manager/HX_WDMGSJ_UIManager": "HX_WDMGSJ_UIManager"
} ],
HX_WDMGSJ_RoleSc: [ function(e, t) {
"use strict";
cc._RF.push(t, "c41c68AiypKzIGZ/BqfM+hR", "HX_WDMGSJ_RoleSc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_EventManager").EventManager, i = e("../manager/HX_WDMGSJ_PoolManager").PoolManager, s = e("../manager/HX_WDMGSJ_UIManager").UIManager;
cc.Class({
extends: cc.Component,
properties: {
skin: cc.Node,
shield: cc.Node,
particle: cc.Prefab,
pointParticle: cc.Prefab,
vecDir: new cc.Vec2(),
_dir: -1,
_rpos: [ 0, 0 ],
isMove: !1,
isLive: !0,
_springDir: new cc.Vec2(),
_isSpring: !1,
_lastDir: 0
},
onLoad: function() {
n.addEvent("GameOverEvent", this.gameOverEvent, this);
n.addEvent("OpenShieldEvent", this.openShieldEvent, this);
n.addEvent("CloseShieldEvent", this.closeShieldEvent, this);
n.addEvent("ReviveEvent", this.reviveEvent, this);
},
start: function() {
this.skinSc = this.skin.getComponent("HX_WDMGSJ_SkinSc");
this.skinAni = this.skin.getComponent(cc.Animation);
},
update: function() {
if (this.isLive && 0 != a.state) {
CameraManager.upDataCameraPos();
if (this.isMove) {
var e, t = this.node.y - 1875 * a.endlessStage;
if (Math.abs(this.node.x - this._rpos[0]) + Math.abs(t - this._rpos[1]) >= 75) {
this._rpos[0] += 75 * this.vecDir.x;
this._rpos[1] += 75 * this.vecDir.y;
if (this._isSpring) {
this.node.x = this._rpos[0];
this.node.y = this._rpos[1] + 1875 * a.endlessStage;
a.nowDir = this._dir;
this.vecDir = this._springDir;
this._isSpring = !1;
}
var i;
if (1 != a.mode) i = a.nowMapData[this._rpos[0] + 75 * this.vecDir.x][this._rpos[1] + 75 * this.vecDir.y]; else {
if (this._rpos[1] + 75 * this.vecDir.y < 0) {
if (!(a.endlessStage > 0)) {
this.stopMove();
return;
}
a.endlessStage--;
this._rpos[1] += 1875;
n.excuteEvent("ChangeEndlessStageEvent");
}
if (this._rpos[1] + 75 * this.vecDir.y >= 1875) {
a.endlessStage++;
this._rpos[1] -= 1875;
n.excuteEvent("ChangeEndlessStageEvent");
}
i = a.nowEndlessData[a.endlessStage][this._rpos[0] + 75 * this.vecDir.x][this._rpos[1] + 75 * this.vecDir.y];
}
n.excuteEvent("CheckPosEvent");
if (!this.judgeType(i)) {
this.stopMove();
return;
}
}
e = null != a.trialSkinName ? a.trialSkinName : a.useSkin;
this.node.x += 20 * this.vecDir.x * a.skinConfig[e][0];
this.node.y += 20 * this.vecDir.y * a.skinConfig[e][0];
} else if (this._dir != a.nowDir && -1 != a.nowDir || a.superMode) {
this._dir = a.nowDir;
this.isMove = !0;
switch (this._dir) {
case 0:
this.vecDir.x = 0;
this.vecDir.y = 1;
this.skinAni.play("VerticalMoveAni");
break;

case 1:
this.vecDir.x = 0;
this.vecDir.y = -1;
this.skinAni.play("VerticalMoveAni");
break;

case 2:
this.vecDir.x = -1;
this.vecDir.y = 0;
this.skinAni.play("HorizontalMoveAni");
break;

case 3:
this.vecDir.x = 1;
this.vecDir.y = 0;
this.skinAni.play("HorizontalMoveAni");
}
if (1 != a.mode) i = a.nowMapData[this._rpos[0] + 75 * this.vecDir.x][this._rpos[1] + 75 * this.vecDir.y]; else {
if (this._rpos[1] + 75 * this.vecDir.y < 0) {
if (!(a.endlessStage > 0)) {
this.stopMove();
return;
}
a.endlessStage--;
this._rpos[1] += 1875;
n.excuteEvent("ChangeEndlessStageEvent");
}
if (this._rpos[1] + 75 * this.vecDir.y >= 1875) {
a.endlessStage++;
this._rpos[1] -= 1875;
n.excuteEvent("ChangeEndlessStageEvent");
}
i = a.nowEndlessData[a.endlessStage][this._rpos[0] + 75 * this.vecDir.x][this._rpos[1] + 75 * this.vecDir.y];
}
this.judgeType(i) || this.stopMove();
}
}
},
stopMove: function() {
this.node.x = this._rpos[0];
this.node.y = this._rpos[1] + 1875 * a.endlessStage;
this.isMove = !1;
var e = this, t = cc.instantiate(this.particle);
t.parent = GameManager.particleParent;
var n = t.getComponent(cc.ParticleSystem), i = a.skinConfig[a.useSkin], s = cc.color(i[1], i[2], i[3]);
n.startColor = s;
n.endColor = s;
t.x = this.node.x;
t.y = this.node.y;
this.skinAni.once("finished", function() {
e.isMove || e.skinAni.play("NormalAni");
});
0 == this.vecDir.x ? this.skinAni.play("VerticalStopAni") : this.skinAni.play("HorizontalStopAni");
},
judgeType: function(e) {
var t = !0;
if (null == e) return !0;
if (e.isLive) if ("floor" == e.type) {
if (2 == a.mode && 1 != e.node.state) {
AudioManager.playEffect("paint");
e.node.state = 1;
a.point++;
e.node.getComponent(cc.Animation).play();
n.excuteEvent("AddPointEvent");
if (a.point >= a.allPoint) {
a.starCount = 3;
a.hasEvent = !0;
GameManager.roleCamera.getComponent(cc.Animation).play();
AudioManager.playEffect("success");
setTimeout(function() {
a.hasEvent = !1;
a.state = 0;
s.openUI("GetGoldUI");
s.closeUI("GameUI");
}, 1e3);
}
}
} else if ("poin" == e.type) {
a.point++;
n.excuteEvent("AddPointEvent");
e.isLive = !1;
(o = cc.instantiate(this.pointParticle)).parent = GameManager.particleParent;
o.x = e.node.x;
o.y = e.node.y + 1875 * a.endlessStage;
AudioManager.playEffect("poin");
1 == a.mode && (a.superMode || a.superCharge++);
e.node.opacity = 0;
} else if ("shield" == e.type) {
e.isLive = !1;
(o = cc.instantiate(this.pointParticle)).parent = GameManager.particleParent;
o.x = e.node.x;
o.y = e.node.y + 1875 * a.endlessStage;
n.excuteEvent("OpenShieldEvent");
e.node.opacity = 0;
} else if ("gold" == e.type) {
a.gold++;
a.collitionGold++;
n.excuteEvent("ChangeGoldEvent");
e.isLive = !1;
(o = i.getNode("GoldParticle")).parent = GameManager.particleParent;
o.x = e.node.x;
o.y = e.node.y + 1875 * a.endlessStage;
AudioManager.playEffect("coin");
e.node.opacity = 0;
} else if ("star" == e.type) {
a.starCount++;
n.excuteEvent("GetStarEvent", a.starCount);
e.isLive = !1;
var o;
(o = i.getNode("StarParticle")).parent = GameManager.particleParent;
o.x = e.node.x;
o.y = e.node.y + 1875 * a.endlessStage;
AudioManager.playEffect("star");
e.node.opacity = 0;
} else if ("spring" == e.type) {
a.superMode && a.wayList.pop();
this._isSpring = !0;
if (0 == e.dir) if (3 == this._dir) {
this._dir = 0;
this._springDir = cc.v2(0, 1);
this.skinAni.play("VerticalMoveAni");
} else if (1 == this._dir) {
this._dir = 2;
this._springDir = cc.v2(-1, 0);
this.skinAni.play("HorizontalMoveAni");
} else {
this._isSpring = !1;
t = !1;
} else if (1 == e.dir) if (0 == this._dir) {
this._dir = 3;
this._springDir = cc.v2(1, 0);
this.skinAni.play("HorizontalMoveAni");
} else if (2 == this._dir) {
this._dir = 1;
this._springDir = cc.v2(0, -1);
this.skinAni.play("VerticalMoveAni");
} else {
this._isSpring = !1;
t = !1;
} else if (2 == e.dir) if (0 == this._dir) {
this._dir = 2;
this._springDir = cc.v2(-1, 0);
this.skinAni.play("HorizontalMoveAni");
} else if (3 == this._dir) {
this._dir = 1;
this._springDir = cc.v2(0, -1);
this.skinAni.play("VerticalMoveAni");
} else {
this._isSpring = !1;
t = !1;
} else if (3 == e.dir) if (1 == this._dir) {
this._dir = 3;
this._springDir = cc.v2(1, 0);
this.skinAni.play("HorizontalMoveAni");
} else if (2 == this._dir) {
this._dir = 0;
this._springDir = cc.v2(0, 1);
this.skinAni.play("VerticalMoveAni");
} else {
this._isSpring = !1;
t = !1;
}
if (this._isSpring) {
AudioManager.playEffect("spring");
e.node.getComponent(cc.Animation).play();
}
} else if ("portal" == e.type) {
a.hasEvent = !0;
this.node.getComponent(cc.Animation).play("SuccessAni");
GameManager.roleCamera.getComponent(cc.Animation).play();
AudioManager.playEffect("success");
setTimeout(function() {
a.hasEvent = !1;
a.state = 0;
s.openUI("GetGoldUI");
s.closeUI("GameUI");
}, 1e3);
} else if (a.superMode) {
if ("box" == e.type) return !0;
if ("trackEnd" == e.type) return !0;
if (0 == a.wayList.length) {
this.findWay();
for (var r, c = 0, l = 0; l < a.endWayList.length; l++) {
var g = a.endWayList[l];
if (g.pos.y > c) {
c = g.pos.y;
r = g;
}
}
a.endWayList.length = 0;
for (;null != r; ) {
a.wayList.push(r.dir);
if (null == (r = r.beforeItem).beforeItem) break;
}
}
a.nowDir = a.wayList.pop();
AudioManager.playEffect("collision");
t = !1;
} else if ("wall" == e.type || "arrow" == e.type || "angreMonster" == e.type) {
AudioManager.playEffect("collision");
t = !1;
} else if ("stab" == e.type) if (0 == e.dir && 1 == this._dir || 1 == e.dir && 0 == this._dir || 2 == e.dir && 3 == this._dir || 3 == e.dir && 2 == this._dir) if (a.hasShield) {
n.excuteEvent("CloseShieldEvent");
t = !1;
} else n.excuteEvent("GameOverEvent"); else t = !1;
return t;
},
init: function() {
this.isLive = !0;
this.isMove = !1;
this._dir = a.nowDir = -1;
this._rpos[0] = this.node.x;
this._rpos[1] = this.node.y;
this.skin.scale = 1;
this.skin.angle = 0;
this.skin.getComponent(cc.Animation).play("NormalAni");
this.skin.getComponent("HX_WDMGSJ_SkinSc").init();
a.hasShield && this.openShieldEvent(null, this);
if (2 == a.mode) {
AudioManager.playEffect("paint");
var e = a.nowMapData[this._rpos[0]][this._rpos[1]];
e.node.state = 1;
a.point++;
e.node.getComponent(cc.Animation).play();
}
},
onCollisionEnter: function(e) {
if (0 != a.state) if (a.superMode) {
if ("lavaStep" != e.node.name && "laser" != e.node.name) {
(t = i.getNode("SmokeParticle")).parent = GameManager.particleParent;
t.x = e.node.x;
t.y = e.node.y + 1875 * a.endlessStage;
e.node.active = !1;
}
} else {
if ("bullet" == e.node.name) {
var t;
(t = i.getNode("BulletParticle")).parent = GameManager.particleParent;
t.x = this.node.x;
t.y = this.node.y;
i.addNode("bullet", e.node.parent);
a.hasShield ? n.excuteEvent("CloseShieldEvent") : n.excuteEvent("GameOverEvent");
}
"ball" == e.node.name && (a.hasShield ? n.excuteEvent("CloseShieldEvent") : n.excuteEvent("GameOverEvent"));
if ("box" == e.node.name) {
AudioManager.playEffect("collision");
this.stopMove();
this.node.x = this._rpos[0];
this.node.y = this._rpos[1] + 1875 * a.endlessStage;
this._dir = -1;
a.nowDir = -1;
}
if ("laser" == e.node.name) if (a.hasShield) {
n.excuteEvent("CloseShieldEvent");
e.node.parent.y -= 500;
} else n.excuteEvent("GameOverEvent");
}
},
openShieldEvent: function(e, t) {
a.hasShield = !0;
t.shield.active = !0;
},
closeShieldEvent: function(e, t) {
if (a.hasShield && t.shield.active) {
AudioManager.playEffect("shield");
t.shield.active = !1;
a.hasShield = !1;
}
},
gameOverEvent: function(e, t) {
t.isLive = !1;
t.skinAni.stop();
},
reviveEvent: function(e, t) {
t.isLive = !0;
t.isMove = !1;
t._dir = a.nowDir = -1;
t.node.x = t._rpos[0];
t.node.y = t._rpos[1] + 1875 * a.endlessStage;
t.skin.getComponent(cc.Animation).play("NormalAni");
t.openShieldEvent(null, t);
a.state = 1;
},
superMode: function() {},
findWay: function() {
var e = {
pos: cc.v2(this._rpos[0], this._rpos[1]),
dir: this._dir,
beforeItem: null,
count: 0
};
this.findPoint(e, this);
},
findPoint: function(e, t) {
for (var n = 0; n < 5; n++) {
var i, s = e.dir;
4 == n ? 0 == s ? i = 1 : 1 == s ? i = 0 : 2 == s ? i = 3 : 3 == s && (i = 2) : i = n;
if (i != s) {
if (0 == i && 1 == s || 1 == i && 0 == s || 2 == i && 3 == s || 3 == i && 2 == s) continue;
var o = new cc.Vec2();
switch (i) {
case 0:
o.x = 0;
o.y = 1;
break;

case 1:
o.x = 0;
o.y = -1;
break;

case 2:
o.x = -1;
o.y = 0;
break;

case 3:
o.x = 1;
o.y = 0;
}
for (var r = 0; r < 100; ) {
r++;
if (null != a.nowEndlessData[a.endlessStage][e.pos.x + 75 * o.x * r]) {
var c = a.nowEndlessData[a.endlessStage][e.pos.x + 75 * o.x * r][e.pos.y + 75 * o.y * r];
if (null == c) if (e.pos.y + 75 * o.y * r > 1800) c = a.nowEndlessData[a.endlessStage + 1][e.pos.x + 75 * o.x * r][e.pos.y + 75 * o.y * r - 1875]; else if (e.pos.y + 75 * o.y * r < 0) {
if (null == a.nowEndlessData[a.endlessStage - 1]) break;
c = a.nowEndlessData[a.endlessStage - 1][e.pos.x + 75 * o.x * r][e.pos.y + 75 * o.y * r + 1875];
}
if (null != c) if (1 == r) {
if ("wall" == c.type || "arrow" == c.type || "angreMonster" == c.type || "stab" == c.type) break;
} else if ("wall" == c.type || "arrow" == c.type || "angreMonster" == c.type || "stab" == c.type) {
var l = {
pos: cc.v2(e.pos.x + 75 * o.x * (r - 1), e.pos.y + 75 * o.y * (r - 1)),
dir: i,
beforeItem: e,
count: e.count + 1
};
if (l.count >= 9) {
a.endWayList.push(l);
return;
}
t.findPoint(l, t);
break;
}
}
}
}
}
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager",
"../manager/HX_WDMGSJ_PoolManager": "HX_WDMGSJ_PoolManager",
"../manager/HX_WDMGSJ_UIManager": "HX_WDMGSJ_UIManager"
} ],
HX_WDMGSJ_ScaleItemSc: [ function(e, t) {
"use strict";
cc._RF.push(t, "64002wWe4ZBqL1vxAcyKR5X", "HX_WDMGSJ_ScaleItemSc");
cc.Class({
extends: cc.Component,
properties: {
label: cc.Label
},
start: function() {
this.node.opacity = 0;
this.label.string = this.node.y;
},
update: function() {
var e = Math.abs(this.node.y + this.node.parent.y);
this.node.opacity = e > 250 ? 255 - 2.04 * (e - 250) : 255;
if (e > 600) {
this.node.active = !1;
this.node.destroy();
}
}
});
cc._RF.pop();
}, {} ],
HX_WDMGSJ_SetupUISc: [ function(e, t) {
"use strict";
cc._RF.push(t, "6f96bo2kG9DAKFaPBC/n0vZ", "HX_WDMGSJ_SetupUISc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_UIManager").UIManager;
cc.Class({
extends: cc.Component,
properties: {
musicBtnAni: cc.Animation,
voiceBtnAni: cc.Animation,
vibrationBtnAni: cc.Animation,
btn: cc.Node
},
start: function() {
lieyou_SdkManager.addListenerBackKey({
node: this.node,
callBack: this.closeBtnClick.bind(this)
});
},
init: function() {
this.btn.scale = 0;
var e = 0;
hxblSdk.isShenhe() || (e = 1.5);
cc.tween(this.btn).delay(e).to(.1, {
scale: 1
}).start();
hxblSdk.showCustomFast(2, 1);
a.music ? this.musicBtnAni.play("SetupOpenAni") : this.musicBtnAni.play("SetupCloseAni");
a.voice ? this.voiceBtnAni.play("SetupOpenAni") : this.voiceBtnAni.play("SetupCloseAni");
a.vibration ? this.vibrationBtnAni.play("SetupOpenAni") : this.vibrationBtnAni.play("SetupCloseAni");
},
musicBtnClick: function() {
if (a.music) {
a.music = !1;
this.musicBtnAni.play("SetupCloseAni");
cc.audioEngine.stopMusic();
} else {
a.music = !0;
this.musicBtnAni.play("SetupOpenAni");
cc.audioEngine.playMusic(AudioManager.mainBGM, !0);
}
},
voiceBtnClick: function() {
if (a.voice) {
a.voice = !1;
this.voiceBtnAni.play("SetupCloseAni");
} else {
a.voice = !0;
this.voiceBtnAni.play("SetupOpenAni");
}
},
vibrationBtnClick: function() {
if (a.vibration) {
a.vibration = !1;
this.vibrationBtnAni.play("SetupCloseAni");
} else {
a.vibration = !0;
this.vibrationBtnAni.play("SetupOpenAni");
}
},
closeBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
n.closeUI("SetupUI", function() {
a.hasEvent = !1;
});
}
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_UIManager": "HX_WDMGSJ_UIManager"
} ],
HX_WDMGSJ_ShopUISc: [ function(e, t) {
"use strict";
cc._RF.push(t, "943d9jUeSZKFozAIoKEN94/", "HX_WDMGSJ_ShopUISc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_UIManager").UIManager;
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
lieyou_SdkManager.addListenerBackKey({
node: this.node,
callBack: this.closeBtnClick.bind(this)
});
},
init: function() {
hxblSdk.showCustomFast(2, 1);
},
closeBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
n.closeUI("ShopUI", function() {
n.uiDic.MainUI.initBtn();
a.hasEvent = !1;
});
}
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_UIManager": "HX_WDMGSJ_UIManager"
} ],
HX_WDMGSJ_SignUISc: [ function(e, t) {
"use strict";
cc._RF.push(t, "83570LYQRZHP4fOq3VvuMND", "HX_WDMGSJ_SignUISc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_EventManager").EventManager, i = e("../manager/HX_WDMGSJ_UIManager").UIManager;
cc.Class({
extends: cc.Component,
properties: {
signItem: [ cc.Node ],
signBtn: cc.Button,
skinIcon: cc.Node,
skinLabel: cc.Node,
skinLabel1: cc.Node,
btn: cc.Node
},
start: function() {
lieyou_SdkManager.addListenerBackKey({
node: this.node,
callBack: this.closeBtnClick.bind(this)
});
},
init: function() {
this.btn.scale = 0;
var e = 0;
hxblSdk.isShenhe() || (e = 1.5);
hxblSdk.showCustomFast(2, 1);
cc.tween(this.btn).delay(e).to(.1, {
scale: 1
}).start();
var t = a.loginDate, n = new Date(), i = a.signData;
if (a.signSkin) {
this.skinIcon.getChildByName("Gold").active = !0;
this.skinIcon.getChildByName("Skin").active = !1;
this.skinLabel.getChildByName("Skin").active = !1;
this.skinLabel.getChildByName("Number").active = !0;
this.skinLabel1.getChildByName("Skin").active = !1;
this.skinLabel1.getChildByName("Number").active = !0;
} else {
1 == i && (this.signBtn.getComponent(cc.Button).interactable = !1);
this.skinIcon.getChildByName("Gold").active = !1;
this.skinIcon.getChildByName("Skin").active = !0;
this.skinLabel.getChildByName("Number").active = !1;
this.skinLabel.getChildByName("Skin").active = !0;
this.skinLabel1.getChildByName("Number").active = !1;
this.skinLabel1.getChildByName("Skin").active = !0;
}
if (t[0] != n.getDate() || t[1] != n.getMonth() || t[2] != n.getFullYear()) for (s = 0; s < 7; s++) if (s < i) {
this.signItem[s].getChildByName("Signed").active = !0;
this.signItem[s].getComponent(cc.Button).enabled = !1;
this.signAni(this.signItem[s].getChildByName("Signed").getChildByName("Signed"));
} else {
if (s == i) {
this.signItem[s].getComponent(cc.Button).enabled = !0;
this.signItem[s].getChildByName("Sign").active = !0;
this.signItem[s].getChildByName("UnSign").active = !1;
} else {
this.signItem[s].getComponent(cc.Button).enabled = !1;
this.signItem[s].getChildByName("Sign").active = !1;
this.signItem[s].getChildByName("UnSign").active = !0;
}
this.signItem[s].getChildByName("Signed").active = !1;
} else {
this.signBtn.getComponent(cc.Button).interactable = !1;
0 == i && (i = 7);
for (var s = 0; s < 7; s++) {
this.signItem[s].getComponent(cc.Button).enabled = !1;
if (s < i - 1) {
this.signItem[s].getChildByName("Signed").active = !0;
this.signAni(this.signItem[s].getChildByName("Signed").getChildByName("Signed"));
} else if (s == i - 1) {
this.signItem[s].getChildByName("Signed").active = !0;
this.signAni(this.signItem[s].getChildByName("Signed").getChildByName("Signed"));
this.signItem[s].getChildByName("UnSign").active = !1;
this.signItem[s].getChildByName("Sign").active = !0;
} else {
this.signItem[s].getChildByName("Signed").active = !1;
this.signItem[s].getChildByName("UnSign").active = !0;
this.signItem[s].getChildByName("Sign").active = !1;
}
}
}
},
signAni: function(e) {
e.scale = 5;
e.opacity = 0;
cc.tween(e).to(.2, {
scale: 1,
opacity: 255
}).start();
},
signBtnClick: function() {
AudioManager.playEffect("click");
var e = new Date(), t = a.signData;
this.signItem[t].getChildByName("Signed").active = !0;
this.signAni(this.signItem[t].getChildByName("Signed").getChildByName("Signed"));
this.signItem[t].getComponent(cc.Button).enabled = !1;
a.loginDate = [ e.getDate(), e.getMonth(), e.getFullYear() ];
a.saveData("loginDate", a.loginDate);
if (6 == a.signData) a.gold += 80; else if (5 == a.signData) a.gold += 60; else if (4 == a.signData) a.gold += 50; else if (3 == a.signData) a.gold += 40; else if (2 == a.signData) a.gold += 30; else if (1 == a.signData) if (a.signSkin) a.gold += 20; else {
a.signSkin = !0;
a.skinData.ch = [ 1.15, 255, 242, 68 ];
a.saveData("skinData", a.skinData);
a.saveData("signSkin", a.signSkin);
a.showMessage("恭喜获得新皮肤！");
} else 0 == a.signData && (a.gold += 10);
a.signData++;
7 == a.signData && (a.signData = 0);
this.signBtn.getComponent(cc.Button).interactable = !1;
a.saveData("signData", a.signData);
n.excuteEvent("ChangeGoldEvent");
},
closeBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
i.closeUI(this.node.name, function() {
i.uiDic.MainUI.initBtn();
a.hasEvent = !1;
});
}
},
videoBtnClick: function() {
if (!a.hasEvent) {
var e = this;
AudioManager.playEffect("click");
a.music && cc.audioEngine.stopMusic();
hxblSdk.showVideo(function(t) {
a.hasEvent = !1;
if (0 === t) {
var i, s = new Date(), o = a.signData;
e.signItem[o].getChildByName("Signed").active = !0;
e.signAni(e.signItem[o].getChildByName("Signed").getChildByName("Signed"));
e.signItem[o].getComponent(cc.Button).enabled = !1;
a.loginDate = [ s.getDate(), s.getMonth(), s.getFullYear() ];
a.saveData("loginDate", a.loginDate);
6 == a.signData ? i = 160 : 5 == a.signData ? i = 120 : 4 == a.signData ? i = 100 : 3 == a.signData ? i = 80 : 2 == a.signData ? i = 60 : 1 == a.signData ? i = 40 : 0 == a.signData && (i = 20);
a.gold += i;
a.signData++;
7 == a.signData && (a.signData = 0);
e.signBtn.getComponent(cc.Button).interactable = !1;
a.saveData("signData", a.signData);
n.excuteEvent("ChangeGoldEvent");
a.showMessage("恭喜获得" + i + "金币");
} else a.showMessage("视频获取失败");
a.music && cc.audioEngine.playMusic(AudioManager.gameBGM);
});
}
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager",
"../manager/HX_WDMGSJ_UIManager": "HX_WDMGSJ_UIManager"
} ],
HX_WDMGSJ_SkinItemSc: [ function(e, t) {
"use strict";
cc._RF.push(t, "f0367Y6QFZLU6rRSgDZttH4", "HX_WDMGSJ_SkinItemSc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_EventManager").EventManager;
cc.Class({
extends: cc.Component,
properties: {
skinName: "",
price: 0,
speed: 0,
byeBtn: cc.Node,
useBtn: cc.Node,
usingBtn: cc.Node,
goldLabel: cc.Label,
skinColor: new cc.Color()
},
start: function() {
n.addEvent("RefrashSkinItemEvent", this.refrashSkinItemEvent, this);
this.refrashSkinItemEvent(null, this);
},
refrashSkinItemEvent: function(e, t) {
t.goldLabel.string = t.price;
if (null == a.skinData[t.skinName]) {
t.byeBtn.active = !0;
t.useBtn.active = !1;
t.usingBtn.active = !1;
} else if (a.useSkin == t.skinName) {
t.byeBtn.active = !1;
t.useBtn.active = !1;
t.usingBtn.active = !0;
} else {
t.byeBtn.active = !1;
t.useBtn.active = !0;
t.usingBtn.active = !1;
}
},
btnClick: function() {
AudioManager.playEffect("click");
if (a.useSkin != this.skinName) {
if (null != a.skinData[this.skinName]) a.useSkin = this.skinName; else if (a.gold >= this.price) {
a.gold -= this.price;
a.skinData[this.skinName] = [ this.speed, this.skinColor.r, this.skinColor.g, this.skinColor.b ];
} else a.showMessage("金币不足");
a.saveData("useSkin", a.useSkin);
a.saveData("skinData", a.skinData);
n.excuteEvent("RefrashSkinItemEvent");
n.excuteEvent("ChangeGoldEvent");
}
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager"
} ],
HX_WDMGSJ_SkinSc: [ function(e, t) {
"use strict";
cc._RF.push(t, "c7ae7R8ZMxDlLl2KpSRKnfb", "HX_WDMGSJ_SkinSc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_PoolManager").PoolManager;
cc.Class({
extends: cc.Component,
properties: {
image: cc.Node,
skinAtlas: cc.SpriteAtlas,
skinName: "",
trail: cc.MotionStreak
},
start: function() {},
changeImage: function() {
this.image.removeAllChildren();
var skin = n.getNode(this.skinName);
skin.parent = this.image;
var art = skin.getChildByName("Skin") || skin.getChildByName("Image");
if (art) skin.children.forEach(function(child) { child.active = child === art; });
},
init: function() {
null != a.trialSkinName ? this.skinName = a.trialSkinName : this.skinName = a.useSkin;
this.changeImage();
var e = a.skinConfig[this.skinName];
this.trail.color = cc.color(e[1], e[2], e[3]);
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_PoolManager": "HX_WDMGSJ_PoolManager"
} ],
HX_WDMGSJ_StageItemSc: [ function(e, t) {
"use strict";
cc._RF.push(t, "98912w2WWJKxZVKhLVk8yCa", "HX_WDMGSJ_StageItemSc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_EventManager").EventManager, i = e("../manager/HX_WDMGSJ_UIManager").UIManager;
cc.Class({
extends: cc.Component,
properties: {
stage: 0,
stageLabel: cc.Label,
stars: [ cc.Node ],
lock: cc.Node,
atlas: cc.SpriteAtlas,
pinkFont: cc.Font,
blueFont: cc.Font
},
start: function() {},
init: function() {
var e, t, n;
if (0 == a.mode) {
e = a.maxStage;
t = a.nowStage;
n = a.userStageData;
} else if (2 == a.mode) {
e = a.maxPaintStage;
t = a.nowPaintStage;
n = a.userPaintStageData;
}
if (e >= this.stage) {
this.node.getComponent(cc.Button).interactable = !0;
this.stageLabel.node.active = !0;
this.lock.active = !1;
this.stageLabel.string = this.stage + 1;
for (var s = 0; s < this.stars.length; s++) {
this.stars[s].active = !0;
s < n[this.stage] ? this.stars[s].getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame("commonSmallStar01") : this.stars[s].getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame("commonSmallStar02");
}
if (t == this.stage) {
this.node.getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame("stageBorder02");
this.stageLabel.font = this.pinkFont;
i.uiDic.StageUI._selectStage = this;
} else {
this.node.getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame("stageBorder01");
this.stageLabel.font = this.blueFont;
}
} else {
this.node.getComponent(cc.Button).interactable = !1;
this.node.getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame("stageNotunLocked");
this.stars[0].active = !1;
this.stars[1].active = !1;
this.stars[2].active = !1;
this.stageLabel.node.active = !1;
this.lock.active = !0;
}
},
stageBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
var e = i.uiDic.StageUI;
if (null != e._selectStage) {
e._selectStage.node.getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame("stageBorder01");
e._selectStage.stageLabel.font = this.blueFont;
}
this.node.getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame("stageBorder02");
this.stageLabel.font = this.pinkFont;
e._selectStage = this;
0 == a.mode ? a.nowStage = this.stage : 2 == a.mode && (a.nowPaintStage = this.stage);
i.closeUI("StageUI");
i.closeUI("MainUI", function() {
n.excuteEvent("StartGameEvent");
});
}
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager",
"../manager/HX_WDMGSJ_UIManager": "HX_WDMGSJ_UIManager"
} ],
HX_WDMGSJ_StageUISc: [ function(e, t) {
"use strict";
cc._RF.push(t, "a6002GlIANICo2jfM+Mg7Dn", "HX_WDMGSJ_StageUISc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_PoolManager").PoolManager, i = e("../manager/HX_WDMGSJ_UIManager").UIManager;
cc.Class({
extends: cc.Component,
properties: {
_selectStage: null,
stageList: [],
content: cc.Node
},
start: function() {
lieyou_SdkManager.addListenerBackKey({
node: this.node,
callBack: this.closeBtnClick.bind(this)
});
},
init: function() {
hxblSdk.showCustomFast(2, 1);
var e, t;
if (0 == a.mode) {
e = a.mapData;
t = a.nowStage;
} else if (2 == a.mode) {
e = a.paintData;
t = a.nowPaintStage;
}
for (var i = this.stageList.length, s = 0; s < i; s++) {
var o = this.stageList.pop().node;
n.addNode(o.name, o);
}
var r = 141 * Math.ceil(e.length / 3), c = 141 * Math.floor(t / 3);
this.content.height = r;
this.content.y = c;
for (s = 0; s < e.length; s++) {
var l = (o = n.getNode("StageItem")).getComponent("HX_WDMGSJ_StageItemSc");
o.parent = this.content;
l.stage = s;
l.init();
this.stageList.push(l);
}
},
closeBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
i.closeUI("StageUI", function() {
a.hasEvent = !1;
i.uiDic.MainUI.initBtn();
});
}
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_PoolManager": "HX_WDMGSJ_PoolManager",
"../manager/HX_WDMGSJ_UIManager": "HX_WDMGSJ_UIManager"
} ],
HX_WDMGSJ_StopUISc: [ function(e, t) {
"use strict";
cc._RF.push(t, "a61b8qEHE9GJKpitmqxIidV", "HX_WDMGSJ_StopUISc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_EventManager").EventManager, i = e("../manager/HX_WDMGSJ_UIManager").UIManager;
cc.Class({
extends: cc.Component,
properties: {
musicBtnAni: cc.Animation,
voiceBtnAni: cc.Animation,
vibrationBtnAni: cc.Animation
},
start: function() {
lieyou_SdkManager.addListenerBackKey({
node: this.node,
callBack: this.continueBtnClick.bind(this)
});
},
init: function() {
hxblSdk.showCustomFast(2, 1);
a.music ? this.musicBtnAni.play("SetupOpenAni") : this.musicBtnAni.play("SetupCloseAni");
a.voice ? this.voiceBtnAni.play("SetupOpenAni") : this.voiceBtnAni.play("SetupCloseAni");
a.vibration ? this.vibrationBtnAni.play("SetupOpenAni") : this.vibrationBtnAni.play("SetupCloseAni");
},
musicBtnClick: function() {
if (a.music) {
a.music = !1;
this.musicBtnAni.play("SetupCloseAni");
cc.audioEngine.stopMusic();
} else {
a.music = !0;
this.musicBtnAni.play("SetupOpenAni");
cc.audioEngine.playMusic(AudioManager.gameBGM, !0);
}
},
voiceBtnClick: function() {
if (a.voice) {
a.voice = !1;
this.voiceBtnAni.play("SetupCloseAni");
} else {
a.voice = !0;
this.voiceBtnAni.play("SetupOpenAni");
}
},
vibrationBtnClick: function() {
if (a.vibration) {
a.vibration = !1;
this.vibrationBtnAni.play("SetupCloseAni");
} else {
a.vibration = !0;
this.vibrationBtnAni.play("SetupOpenAni");
}
},
continueBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
a.state = 1;
i.closeUI("StopUI", function() {
a.hasEvent = !1;
});
}
},
replayBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
i.closeUI("StopUI", function() {
a.hasEvent = !1;
});
n.excuteEvent("StartGameEvent");
}
},
homeBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
setTimeout(function() {
i.openUI("MainUI", function() {
a.hasEvent = !1;
});
}, 250);
i.closeUI("StopUI");
i.closeUI("GameUI");
n.excuteEvent("ClearMapEvent");
}
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager",
"../manager/HX_WDMGSJ_UIManager": "HX_WDMGSJ_UIManager"
} ],
HX_WDMGSJ_SuccessUISc: [ function(e, t) {
"use strict";
cc._RF.push(t, "a62c7qsd61Cqam4Z0X6ZUsK", "HX_WDMGSJ_SuccessUISc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_EventManager").EventManager, i = e("../manager/HX_WDMGSJ_UIManager").UIManager;
cc.Class({
extends: cc.Component,
properties: {
btn: cc.Node,
startBtn: cc.Button,
progressBar: cc.Node,
shield: cc.Node,
videoBtn: cc.Button,
goldLabel: cc.Label,
stars: [ cc.Node ],
_target: 0,
stageLabel: cc.Label,
blackStar: cc.SpriteFrame,
toggle: cc.Toggle,
text: cc.Node,
successCount: 0
},
start: function() {},
init: function() {
if (hxblSdk.isShenhe()) {
if (0 == a.mode) {
this.stageLabel.node.active = !0;
this.stageLabel.string = "D" + (a.nowStage + 1) + "G";
this.shield.active = !1;
this.progressBar.x = 0;
this._target = a.point / a.allPoint * 300;
if (null == a.userStageData[a.nowStage] || a.userStageData[a.nowStage] < a.starCount) {
a.userStageData[a.nowStage] = a.starCount;
a.saveData("userStageData", a.userStageData);
}
if (a.nowStage == a.maxStage) {
if (a.point == a.allPoint) {
a.shield++;
a.saveData("shield", a.shield);
n.excuteEvent("ChangeShieldEvent");
this.shield.active = !0;
this.shield.scale = 0;
}
a.maxStage++;
a.saveData("maxStage", a.maxStage);
}
a.nowStage++;
} else if (-1 == a.mode) {
this.btn.active = !1;
this.text.active = !0;
this.stageLabel.node.active = !1;
this._target = a.point / a.allPoint * 300;
if (a.point == a.allPoint && 0 == a.challengeState[1]) {
a.shield++;
a.saveData("shield", a.shield);
n.excuteEvent("ChangeShieldEvent");
this.shield.active = !0;
this.shield.scale = 0;
}
a.starCount > a.challengeState[0] && (a.challengeState[0] = a.starCount);
if (0 == a.challengeState[1]) {
a.challengeState[1] = 1;
a.lotteryCount++;
a.saveData("lotteryCount", a.lotteryCount);
setTimeout(function() {
i.openUI("LotteryUI");
}, 500);
}
a.saveData("challengeState", a.challengeState);
} else if (2 == a.mode) {
this.stageLabel.node.active = !0;
this.stageLabel.string = "D" + (a.nowPaintStage + 1) + "G";
this.shield.active = !1;
this.progressBar.x = 0;
this._target = a.point / a.allPoint * 300;
if (null == a.userPaintStageData[a.nowPaintStage] || a.userPaintStageData[a.nowPaintStage] < a.starCount) {
a.userPaintStageData[a.nowPaintStage] = a.starCount;
a.saveData("userPaintStageData", a.userPaintStageData);
}
if (a.nowPaintStage == a.maxPaintStage) {
a.point, a.allPoint;
a.maxPaintStage++;
a.saveData("maxPaintStage", a.maxPaintStage);
}
a.nowPaintStage++;
}
a.hasEvent = !1;
this.nextLevelBtnClick();
this.node.active = !1;
a.hasEvent = !1;
} else {
n.excuteEvent("CloseShieldEvent");
onGameSuccess();
hxblSdk.showCustomFast(3, 1);
console.log("结算2");
this.btn.scale = 0;
var e = 0;
hxblSdk.isShenhe() || (e = 1);
cc.tween(this.btn).delay(e).to(.1, {
scale: 1
}).start();
this.btn.active = !0;
this.text.active = !1;
for (var t = 0; t < this.stars.length; t++) {
this.stars[t].getComponent(cc.Sprite).spriteFrame = this.blackStar;
this.stars[t].getComponent(cc.Animation).stop();
}
this.videoBtn.interactable = !0;
var s = this;
setTimeout(function() {
s.playStarAni(s, 0);
}, 300);
this.startBtn.interactable = !0;
if (0 == a.mode) {
this.stageLabel.node.active = !0;
this.stageLabel.string = "D" + (a.nowStage + 1) + "G";
this.shield.active = !1;
this.progressBar.x = 0;
this._target = a.point / a.allPoint * 300;
if (null == a.userStageData[a.nowStage] || a.userStageData[a.nowStage] < a.starCount) {
a.userStageData[a.nowStage] = a.starCount;
a.saveData("userStageData", a.userStageData);
}
if (a.nowStage == a.maxStage) {
if (a.point == a.allPoint) {
a.shield++;
a.saveData("shield", a.shield);
n.excuteEvent("ChangeShieldEvent");
this.shield.active = !0;
this.shield.scale = 0;
}
a.maxStage++;
a.saveData("maxStage", a.maxStage);
}
a.nowStage++;
} else if (-1 == a.mode) {
this.btn.active = !1;
this.text.active = !0;
this.stageLabel.node.active = !1;
this._target = a.point / a.allPoint * 300;
if (a.point == a.allPoint && 0 == a.challengeState[1]) {
a.shield++;
a.saveData("shield", a.shield);
n.excuteEvent("ChangeShieldEvent");
this.shield.active = !0;
this.shield.scale = 0;
}
a.starCount > a.challengeState[0] && (a.challengeState[0] = a.starCount);
if (0 == a.challengeState[1]) {
a.challengeState[1] = 1;
a.lotteryCount++;
a.saveData("lotteryCount", a.lotteryCount);
setTimeout(function() {
i.openUI("LotteryUI");
}, 500);
}
a.saveData("challengeState", a.challengeState);
} else if (2 == a.mode) {
this.stageLabel.node.active = !0;
this.stageLabel.string = "D" + (a.nowPaintStage + 1) + "G";
this.shield.active = !1;
this.progressBar.x = 0;
this._target = a.point / a.allPoint * 300;
if (null == a.userPaintStageData[a.nowPaintStage] || a.userPaintStageData[a.nowPaintStage] < a.starCount) {
a.userPaintStageData[a.nowPaintStage] = a.starCount;
a.saveData("userPaintStageData", a.userPaintStageData);
}
if (a.nowPaintStage == a.maxPaintStage) {
a.point, a.allPoint;
a.maxPaintStage++;
a.saveData("maxPaintStage", a.maxPaintStage);
}
a.nowPaintStage++;
}
}
},
update: function() {
if (0 != this._target) if (this.progressBar.x <= this._target) this.progressBar.x += 8; else {
300 == this._target && this.shield.getComponent(cc.Animation).play();
this._target = 0;
}
},
playStarAni: function(e, t) {
if (t < a.starCount) {
a.hasEvent = !0;
var n = e.stars[t].getComponent(cc.Animation);
t++;
n.play();
setTimeout(function() {
AudioManager.playEffect("star");
e.playStarAni(e, t);
}, 250);
} else a.hasEvent = !1;
},
nextLevelBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
if (0 == a.mode) {
if (a.nowStage >= a.mapData.length) {
a.showMessage("后续关卡即将更新!");
a.hasEvent = !1;
return;
}
n.excuteEvent("StartGameEvent");
} else if (2 == a.mode) {
if (a.nowPaintStage >= a.paintData.length) {
a.showMessage("后续关卡即将更新!");
a.hasEvent = !1;
return;
}
n.excuteEvent("StartGameEvent");
} else {
i.openUI("MainUI", function() {
a.hasEvent = !1;
});
n.excuteEvent("ClearMapEvent");
}
i.closeUI("SuccessUI", function() {
a.hasEvent = !1;
});
}
},
videoNextBtnClick: function() {
if (-1 == a.mode) {
a.music && cc.audioEngine.stopMusic();
hxblSdk.showVideo(function(e) {
a.hasEvent = !1;
if (0 === e) {
a.hasEvent = !0;
a.challengeStage++;
a.challengeStage >= a.challengeData.length && (a.challengeStage = 0);
a.challengeState = [ 0, 0 ];
a.saveData("challengeStage", a.challengeStage);
a.saveData("challengeState", a.challengeState);
i.closeUI("SuccessUI", function() {
a.hasEvent = !1;
});
n.excuteEvent("StartGameEvent");
} else a.showMessage("视频获取失败");
a.music && cc.audioEngine.playMusic(AudioManager.gameBGM);
});
} else {
if (0 == a.mode) {
if (a.nowStage >= a.mapData.length) {
a.showMessage("后续关卡即将更新!");
a.hasEvent = !1;
return;
}
} else if (2 == a.mode && a.nowPaintStage >= a.paintData.length) {
a.showMessage("后续关卡即将更新!");
a.hasEvent = !1;
return;
}
a.music && cc.audioEngine.stopMusic();
hxblSdk.showVideo(function(e) {
a.hasEvent = !1;
if (0 === e) {
a.hasEvent = !0;
a.hasShield = !0;
i.closeUI("SuccessUI", function() {
a.hasEvent = !1;
});
n.excuteEvent("StartGameEvent");
} else a.showMessage("视频获取失败");
a.music && cc.audioEngine.playMusic(AudioManager.gameBGM);
});
}
},
replayBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
0 == a.mode ? a.nowStage-- : 2 == a.mode && a.nowPaintStage--;
AudioManager.playEffect("click");
i.closeUI("SuccessUI", function() {
a.hasEvent = !1;
});
n.excuteEvent("StartGameEvent");
}
},
homeBtnClick: function() {
if (!a.hasEvent) {
a.hasEvent = !0;
AudioManager.playEffect("click");
setTimeout(function() {
i.openUI("MainUI", function() {
a.hasEvent = !1;
});
}, 250);
i.closeUI("SuccessUI");
n.excuteEvent("ClearMapEvent");
}
},
videoBtnClick: function() {
if (!a.hasEvent) {
AudioManager.playEffect("click");
var e = this;
a.music && cc.audioEngine.stopMusic();
hxblSdk.showVideo(function(t) {
a.hasEvent = !1;
if (0 === t) {
a.lotteryCount++;
i.openUI("LotteryUI");
e.videoBtn.interactable = !1;
} else a.showMessage("视频获取失败");
a.music && cc.audioEngine.playMusic(AudioManager.gameBGM);
});
}
},
setGoldLabel: function(e) {
this.goldLabel.string = e;
},
videoToggleClick: function(e) {
AudioManager.playEffect("click");
-1 == a.mode && (e.isChecked ? this.startBtn.interactable = !0 : this.startBtn.interactable = !1);
},
onDisable: function() {}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager",
"../manager/HX_WDMGSJ_UIManager": "HX_WDMGSJ_UIManager"
} ],
HX_WDMGSJ_TrackMonsterSc: [ function(e, t) {
"use strict";
cc._RF.push(t, "55e87f1UFVCQ6GOfCv6Uau0", "HX_WDMGSJ_TrackMonsterSc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_EventManager").EventManager, i = e("../manager/HX_WDMGSJ_PoolManager").PoolManager;
cc.Class({
extends: cc.Component,
properties: {
normal: cc.Node,
freeze: cc.Node,
vecDir: new cc.Vec2(),
_rpos: [ 0, 0 ],
_dir: -1,
isFreeze: !1,
isLive: !0,
startTrack: !1,
isEnd: !1,
stage: 0
},
init: function() {
this.isEnd = !1;
this.isLive = !0;
this.isFreeze = !1;
this.startTrack = !1;
this._rpos[0] = this.node.x;
this._rpos[1] = this.node.y;
this.stage = this.node.getComponent("HX_WDMGSJ_ItemSc").stage;
n.addEvent("CheckPosEvent", this.checkPosEvent, this);
},
start: function() {},
update: function() {
if (0 != a.state && !this.isFreeze && this.isLive && this.startTrack) {
if (Math.abs(this.node.x - this._rpos[0]) + Math.abs(this.node.y - this._rpos[1]) >= 75) {
this._rpos[0] += 75 * this.vecDir.x;
this._rpos[1] += 75 * this.vecDir.y;
this.node.x = this._rpos[0];
this.node.y = this._rpos[1];
var e;
e = 1 != a.mode ? a.nowMapData[this._rpos[0] + 75 * this.vecDir.x][this._rpos[1] + 75 * this.vecDir.y] : a.nowEndlessData[this.stage][this._rpos[0] + 75 * this.vecDir.x][this._rpos[1] + 75 * this.vecDir.y];
if (this.isEnd) {
this.isLive = !1;
i.addNode(this.node.name, this.node);
var t = i.getNode("TrackParticle");
t.parent = GameManager.particleParent;
t.x = this.node.x;
t.y = this.node.y + 1875 * this.stage;
return;
}
this.judgeType(e);
}
this.node.x += 5 * this.vecDir.x;
this.node.y += 5 * this.vecDir.y;
}
},
initDir: function() {
switch (this._dir) {
case 0:
this.vecDir.x = 0;
this.vecDir.y = 1;
break;

case 1:
this.vecDir.x = 0;
this.vecDir.y = -1;
break;

case 2:
this.vecDir.x = -1;
this.vecDir.y = 0;
break;

case 3:
this.vecDir.x = 1;
this.vecDir.y = 0;
}
},
judgeType: function(e) {
if (null == e) return !0;
var t = this;
if (e.isLive) if ("wall" == e.type || "arrow" == e.type || "angreMonster" == e.type || "stab" == e.type) {
for (var n = 0; n < 4; n++) if (!(0 == n && 1 == this._dir || 1 == n && 0 == this._dir || 2 == n && 3 == this._dir || 3 == n && 2 == this._dir || n == this._dir)) {
switch (n) {
case 0:
this.vecDir.x = 0;
this.vecDir.y = 1;
break;

case 1:
this.vecDir.x = 0;
this.vecDir.y = -1;
break;

case 2:
this.vecDir.x = -1;
this.vecDir.y = 0;
break;

case 3:
this.vecDir.x = 1;
this.vecDir.y = 0;
}
var i;
if (null == (i = 1 != a.mode ? a.nowMapData[this._rpos[0] + 75 * this.vecDir.x][this._rpos[1] + 75 * this.vecDir.y] : a.nowEndlessData[this.stage][this._rpos[0] + 75 * this.vecDir.x][this._rpos[1] + 75 * this.vecDir.y])) {
this._dir = n;
return;
}
if ("wall" != i.type && "arrow" != i.type && "angreMonster" != i.type && "stab" != i.type) {
this._dir = n;
"trackEnd" == i.type && setTimeout(function() {
t.isEnd = !0;
}, 100);
return;
}
}
0 == this._dir ? this._dir = 1 : 1 == this._dir ? this._dir = 0 : 2 == this._dir ? this._dir = 3 : 3 == this._dir && (this._dir = 2);
this.initDir();
} else "trackEnd" == e.type && setTimeout(function() {
t.isEnd = !0;
}, 100);
},
checkPosEvent: function(e, t) {
if (t.node.isValid && !t.startTrack && t.node.active && (1 != a.mode || t.stage == a.endlessStage)) {
var n = GameManager.role.getComponent("HX_WDMGSJ_RoleSc"), i = n._rpos[1], s = n._rpos[0];
if (s == t.node.x) {
var o = Math.abs(i - t.node.y) / 75;
if (i > t.node.y) {
l = 1;
t._dir = 0;
} else {
l = -1;
t._dir = 1;
}
for (var r = 0; r < o; r++) {
var c = cc.v2(s, t.node.y + 75 * r * l);
if (null != (g = 1 != a.mode ? a.nowMapData[c.x][c.y] : a.nowEndlessData[t.stage][c.x][c.y]) && "wall" == g.type) return;
}
t.startTrack = !0;
} else if (i == t.node.y) {
var l;
o = Math.abs(s - t.node.x) / 75;
if (s > t.node.x) {
l = 1;
t._dir = 3;
} else {
l = -1;
t._dir = 2;
}
for (r = 0; r < o; r++) {
var g;
c = cc.v2(t.node.x + 75 * r * l, t.node.y);
if (null != (g = 1 != a.mode ? a.nowMapData[c.x][c.y] : a.nowEndlessData[t.stage][c.x][c.y]) && "wall" == g.type) return;
}
t.startTrack = !0;
}
t.startTrack && t.initDir();
}
},
onCollisionEnter: function(e) {
if ("role" == e.node.group) {
if (a.superMode) return;
if (this.isFreeze) return;
a.hasShield ? n.excuteEvent("CloseShieldEvent") : n.excuteEvent("GameOverEvent");
}
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_EventManager": "HX_WDMGSJ_EventManager",
"../manager/HX_WDMGSJ_PoolManager": "HX_WDMGSJ_PoolManager"
} ],
HX_WDMGSJ_TrialSkinUISc: [ function(e, t) {
"use strict";
cc._RF.push(t, "1869dDKavVMMY/zMlxdxeMk", "HX_WDMGSJ_TrialSkinUISc");
var a = e("../manager/HX_WDMGSJ_DataManager").DataManager, n = e("../manager/HX_WDMGSJ_PoolManager").PoolManager, i = e("../manager/HX_WDMGSJ_UIManager").UIManager;
cc.Class({
extends: cc.Component,
properties: {
particleParent: cc.Node,
skinName: "",
image: cc.Node,
skinAtlas: cc.SpriteAtlas,
btn: cc.Node
},
start: function() {},
init: function() {
var e = this;
a.hasEvent = !1;
this.btn.scale = 0;
var t = 0;
hxblSdk.isShenhe() || (t = 1);
cc.tween(this.btn).delay(t).to(.1, {
scale: 1
}).start();
for (var n = [], i = 0; i < a.allSkin.length; i++) null == a.skinData[a.allSkin[i]] && n.push(a.allSkin[i]);
this.skinName = n[Math.floor(Math.random() * n.length)];
if (null == this.skinName) {
a.hasEvent = !1;
this.node.active = !1;
}
this.image.getComponent(cc.Sprite).spriteFrame = null;
cc.assetManager.loadBundle("HX_WDMGSJ", function(t, a) {
!t && a ? a.load("resources/texture/skin/" + e.skinName, cc.SpriteFrame, function(t, a) {
!t && a ? e.image.getComponent(cc.Sprite).spriteFrame = a : console.error(t, a);
}) : console.error(t, a);
});
hxblSdk.isVivo && hxblSdk.showSpot(2);
},
receiveBtnClick: function() {
if (!a.hasEvent) {
AudioManager.playEffect("click");
a.hasEvent = !0;
i.closeUI("TrialSkinUI");
1 == a.mode ? i.openUI("OverUI", function() {
a.hasEvent = !1;
}) : i.openUI("SuccessUI", function() {
a.hasEvent = !1;
});
}
},
videoBtnClick: function() {
var e = this;
if (!a.hasEvent) {
AudioManager.playEffect("click");
a.music && cc.audioEngine.stopMusic();
var t = this;
hxblSdk.showVideo(function(n) {
if (0 === n) {
a.trialSkinName = t.skinName;
e.receiveBtnClick();
a.showMessage("试用成功!");
} else a.showMessage("视频获取失败");
a.music && cc.audioEngine.playMusic(AudioManager.gameBGM);
});
}
},
setParticle: function() {
for (var e = 0; e < 6; e++) {
var t = n.getNode("giftParticle" + e);
t.parent = this.particleParent;
t.setPosition(0, 0, 0);
}
}
});
cc._RF.pop();
}, {
"../manager/HX_WDMGSJ_DataManager": "HX_WDMGSJ_DataManager",
"../manager/HX_WDMGSJ_PoolManager": "HX_WDMGSJ_PoolManager",
"../manager/HX_WDMGSJ_UIManager": "HX_WDMGSJ_UIManager"
} ],
HX_WDMGSJ_UIManager: [ function(e, t, a) {
"use strict";
cc._RF.push(t, "38c29Nen6tDlJV6VWkcSPVW", "HX_WDMGSJ_UIManager");
a.__esModule = !0;
a.UIManager = void 0;
var n = e("./HX_WDMGSJ_PoolManager"), i = {
uiDic: {},
openUI: function(e, t) {
var a;
if (null == this.uiDic[e]) {
a = n.PoolManager.getNode(e);
this.uiDic[e] = a.getComponent("HX_WDMGSJ_" + e + "Sc");
} else if ((a = this.uiDic[e].node).active) return;
a.active = !0;
a.parent = GameManager.ui;
a.opacity = 0;
null != this.uiDic[e].init && this.uiDic[e].init();
var i = this.uiDic[e].node.getComponent(cc.Animation);
i.play("OpenAni");
i.once("play", function() {
i.node.opacity = 255;
});
i.once("finished", function() {
null != t && t();
});
},
closeUI: function(e, t) {
if (null != this.uiDic[e]) {
var a = this.uiDic[e].node.getComponent(cc.Animation);
if (!a.node.active) return;
a.play("CloseAni");
a.once("finished", function(e, n) {
if ("CloseAni" == n.name) {
null != t && t();
a.node.active = !1;
a.node.parent = null;
}
});
}
},
getUIActive: function(e) {
return null != this.uiDic[e] && this.uiDic[e].node.active;
},
clear: function() {
this.uiDic = {};
}
};
a.UIManager = i;
cc._RF.pop();
}, {
"./HX_WDMGSJ_PoolManager": "HX_WDMGSJ_PoolManager"
} ],
HX_WDMGSJ_fastNativeBox: [ function(e, t, a) {
"use strict";
cc._RF.push(t, "1dfedI3QsVPJbGO5Kx6nqlu", "HX_WDMGSJ_fastNativeBox");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
})(e, t);
}, function(e, t) {
n(e, t);
function a() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a());
}), s = this && this.__decorate || function(e, t, a, n) {
var i, s = arguments.length, o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, a, o) : i(t, a)) || o);
return s > 3 && o && Object.defineProperty(t, a, o), o;
};
Object.defineProperty(a, "__esModule", {
value: !0
});
var o = cc._decorator, r = o.ccclass, c = (o.property, function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onEnable = function() {
var e = {
node: this.node
};
hxblSdk && hxblSdk.showNativeBox(e);
};
return s([ r ], t);
}(cc.Component));
a.default = c;
cc._RF.pop();
}, {} ],
HX_WDMGSJ_globalTrackEvent: [ function (require, module, exports) {
exports.default = function() {};
}, {} ],
HX_WDMGSJ_hxbl2pp: [ function(e, t, a) {
"use strict";
cc._RF.push(t, "1ee58CqyN1Ko4+I1Q0spQwO", "HX_WDMGSJ_hxbl2pp");
Object.defineProperty(a, "__esModule", {
value: !0
});
a.SdkManager = void 0;
var n = function() {
function e() {}
e.isShenhe = function() {
return lieyou_SdkManager.isShenhe();
};
e.showToast = function(e) {
PPSDK.showToast(e);
};
e.vibrateShort = function() {
PPSDK.vibrate(!1);
};
e.vibrateLong = function() {
PPSDK.vibrate(!0);
};
e.hasVideo = function() {
return lieyou_SdkManager.getHaveVideo();
};
e.showVideo = function(e) {
lieyou_SdkManager.showRewardedVideoAd(function(t) {
e(t ? 0 : 1);
});
};
e.showBanner = function() {
lieyou_SdkManager.showBannerByBottom();
};
e.hideBanner = function() {
lieyou_SdkManager.hideBanner();
};
e.showSpot = function(e) {
void 0 === e && (e = 0);
1 == e && lieyou_SdkManager.showSpotByBegin();
2 == e && lieyou_SdkManager.showSpotByPause();
3 != e && e || lieyou_SdkManager.showSpotByFinish();
};
e.showCustomFast = function(e, t) {
void 0 === e && (e = 0);
void 0 === t && (t = 0);
t > 0 ? this.showSpot(e) : this.showBanner();
};
e.showNativeBox = function(e) {
lieyou_SdkManager.addNativeAd(e.node);
};
e.isPlatform = function() {};
return e;
}();
a.SdkManager = n;
cc._RF.pop();
}, {} ],
HX_WDMGSJ_subGame: [ function(e, t) {
"use strict";
cc._RF.push(t, "4cbe8ZUooJHfrIAwYlhH4zQ", "HX_WDMGSJ_subGame");
var a = e("./hx_adapter/HX_WDMGSJ_globalTrackEvent").default, n = e("./hx_adapter/HX_WDMGSJ_hxbl2pp").SdkManager;
setTimeout(function() {
PPSDK && PPSDK.subGame.addSub({
name: "HX_WDMGSJ",
group: {
"group-list": [ "default", "role", "item", "ui", "bg" ],
"collision-matrix": [ [ !0 ], [ !1, !1, !0 ], [ !1, !0, !0 ], [ !1, !1, !1, !1 ], [ !1, !1, !1, !1, !1 ] ],
"excluded-modules": [ "3D", "3D Primitive", "3D Physics/cannon.js", "3D Physics/Builtin", "3D Particle" ],
"last-module-event-record-time": 1669793463227,
"design-resolution-width": 960,
"design-resolution-height": 640,
"fit-width": !1,
"fit-height": !0,
"use-project-simulator-setting": !1,
"simulator-orientation": !1,
"use-customize-simulator": !0,
"simulator-resolution": {
height: 640,
width: 960
},
"assets-sort-type": "name",
facebook: {
appID: "",
audience: {
enable: !1
},
enable: !1,
live: {
enable: !1
}
},
"start-scene": "5f5ecd79-0577-41a3-a984-a254fd45ca0a",
"migrate-history": [ "cloud-function" ],
"preview-port": 7456,
"clear-simulator-cache": !0
},
goGame: function() {
return new Promise(function(e) {
window.hxblSdk = n;
a("HX_WDMGSJ_");
cc.director.loadScene("HX_WDMGSJ_LoadScene", function() {
e();
});
});
}
});
});
cc._RF.pop();
}, {
"./hx_adapter/HX_WDMGSJ_globalTrackEvent": "HX_WDMGSJ_globalTrackEvent",
"./hx_adapter/HX_WDMGSJ_hxbl2pp": "HX_WDMGSJ_hxbl2pp"
} ]
}, {}, ["HX_WDMGSJ_subGame", "HX_WDMGSJ_fastNativeBox", "HX_WDMGSJ_globalTrackEvent", "HX_WDMGSJ_hxbl2pp", "HX_WDMGSJ_ArrowSc", "HX_WDMGSJ_BoxSc", "HX_WDMGSJ_BulletSc", "HX_WDMGSJ_DragonSc", "HX_WDMGSJ_EditorSc", "HX_WDMGSJ_FloorSc", "HX_WDMGSJ_ItemSc", "HX_WDMGSJ_LaserSc", "HX_WDMGSJ_LavaStepSc", "HX_WDMGSJ_MapSc", "HX_WDMGSJ_PatrolMonsterSc", "HX_WDMGSJ_RoleSc", "HX_WDMGSJ_SkinSc", "HX_WDMGSJ_TrackMonsterSc", "HX_WDMGSJ_AudioManager", "HX_WDMGSJ_CameraManager", "HX_WDMGSJ_DataManager", "HX_WDMGSJ_EventManager", "HX_WDMGSJ_GameManager", "HX_WDMGSJ_PoolManager", "HX_WDMGSJ_UIManager", "HX_WDMGSJ_AchievementUISc", "HX_WDMGSJ_ChallengeUISc", "HX_WDMGSJ_FailUISc", "HX_WDMGSJ_GameUISc", "HX_WDMGSJ_GetGoldUISc", "HX_WDMGSJ_LoadUISc", "HX_WDMGSJ_LotteryUISc", "HX_WDMGSJ_MainUISc", "HX_WDMGSJ_ModeUISc", "HX_WDMGSJ_OverUISc", "HX_WDMGSJ_ReviveUISc", "HX_WDMGSJ_ScaleItemSc", "HX_WDMGSJ_SetupUISc", "HX_WDMGSJ_ShopUISc", "HX_WDMGSJ_SignUISc", "HX_WDMGSJ_SkinItemSc", "HX_WDMGSJ_StageItemSc", "HX_WDMGSJ_StageUISc", "HX_WDMGSJ_StopUISc", "HX_WDMGSJ_SuccessUISc", "HX_WDMGSJ_TrialSkinUISc"]);
