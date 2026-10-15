(function () {
    'use strict';
    var offline = window.GameOffline = {}, noop = function () {}, currentBundle = '', menuRoot = null;
    offline.exitHandlers = {};
    var games = [
        { bundle: 'TG_LMSJ', title: '完美逃脱', subtitle: '画出路线，帮助角色逃脱' },
        { bundle: 'DaZhen_NZBTG', title: '帮她生存', subtitle: '观察机关，找到安全路线' },
        { bundle: 'HX_HXMG', title: '画线迷宫', subtitle: '连接路线，挑战迷宫关卡' },
        { bundle: 'HX_GKTGDYJ', title: '关卡通关大赢家', subtitle: '点击箭头，逐步解开关卡' },
        { bundle: 'HX_WDMGSJ', title: '我的迷宫世界', subtitle: '迷宫闯关、无尽与挑战模式' }
    ];
    var lastHonorGameState = '', honorReportTimer = null;
    function existingModule(name) {
        // Bundle scripts have already registered these modules. Never construct
        // a new manager, mutate a save, or create a synthetic level for reporting.
        try { return window.__require ? window.__require(name) : null; }
        catch (error) { return null; }
    }
    function jsonSave(key) {
        try { var value = cc.sys.localStorage.getItem(key); return value ? JSON.parse(value) : null; }
        catch (error) { return null; }
    }
    function validLevel(value, zeroBased) {
        if (typeof value !== 'number' || !isFinite(value) || Math.floor(value) !== value || value < (zeroBased ? 0 : 1)) return 0;
        return zeroBased ? value + 1 : value;
    }
    offline.getHonorGameState = function () {
        var title = '玩法菜单', level = 0, data = null, exported = null;
        games.some(function (game) { if (game.bundle === currentBundle) { title = game.title; return true; } return false; });
        if (currentBundle === 'TG_LMSJ') {
            // StorageClass localData.selectPart maps to the encrypted physical
            // key TG_LMSJ_localData_selectPart. Read the already-created handler
            // so the original StorageObj performs its own decoding.
            var manager = window.PPSDK && PPSDK.localManager;
            var handlers = manager && manager.classManager && manager.classManager.handlerMap;
            data = handlers && handlers.get('TG_LMSJ_localData');
            level = data ? validLevel(data.selectPart, false) : 0;
        } else if (currentBundle === 'DaZhen_NZBTG') {
            // DaZhen_NZBTG_Level is unlocked progress, not a selected replay.
            // GameData.Level is the actual level assigned by original Init().
            exported = existingModule('DaZhen_NZBTG_GameData');
            data = exported && exported.DaZhen_NZBTG_GameData;
            level = data ? validLevel(data.Level, false) : 0;
        } else if (currentBundle === 'HX_HXMG') {
            exported = existingModule('DataManager');
            data = exported && exported.default && exported.default._instance;
            // The JSON save contains the same level, but the live manager also
            // handles transitions where the old scene saved before assignment.
            if (!data) data = jsonSave('CC_MAZE_DRAW');
            level = data ? validLevel(data.level, false) : 0;
        } else if (currentBundle === 'HX_GKTGDYJ') {
            exported = existingModule('HX_GKTGDYJ_DataManager');
            data = exported && exported.default && exported.default._instance;
            if (data && (data.mode === 0 || data.mode === 1)) {
                var index = cc.sys.localStorage.getItem('HX_GKTGDYJlevel_index' + data.mode);
                if (index !== null && index !== '' && /^\d+$/.test(String(index))) level = validLevel(Number(index), true);
            }
        } else if (currentBundle === 'HX_WDMGSJ') {
            exported = existingModule('HX_WDMGSJ_DataManager');
            data = exported && exported.DataManager;
            if (data && data.state === 1) {
                if (Number(data.mode) === 0) { title += ' · 闯关'; level = validLevel(data.nowStage, true); }
                else if (Number(data.mode) === 1) { title += ' · 无尽'; level = validLevel(data.endlessStage, true); }
                else if (Number(data.mode) === -1) { title += ' · 挑战'; level = validLevel(data.challengeStage, true); }
                else if (Number(data.mode) === 2) { title += ' · 画线'; level = validLevel(data.nowPaintStage, true); }
            }
            // maxStage/maxPaintStage are persisted unlock bounds. They cannot
            // replace nowStage/nowPaintStage or volatile endlessStage.
        }
        return { mode: title, level: level };
    };
    offline.reportHonorGameState = function () {
        if (!window.jsb || !jsb.reflection || cc.sys.os !== cc.sys.OS_ANDROID) return;
        var state = offline.getHonorGameState(), key = state.mode + '\n' + state.level;
        if (key === lastHonorGameState) return;
        try {
            jsb.reflection.callStaticMethod('com/maze/gdmx/honor/shell/NativeBridge', 'reportGameMode', '(Ljava/lang/String;I)V', state.mode, state.level);
            lastHonorGameState = key;
        } catch (error) { cc.log('Honor game state bridge: ' + error.message); }
    };
    function queueHonorGameState() {
        if (honorReportTimer !== null) clearTimeout(honorReportTimer);
        honorReportTimer = setTimeout(function () { honorReportTimer = null; offline.reportHonorGameState(); }, 100);
    }
    // Only independent video badges. Reward button artwork remains intact.
    var adFrameIds = {};
    [
        '2eBRl0T3NJYL4AdwCHZcxe', '2e051974-4f73-4960-be00-77008765cc5e',
        '32Fy59RhxKKKEgcx1+jmBV', '32172e7d-461c-4a28-a120-731d7e8e6055',
        'e9s5bjlbtK/785L7FI8QXo', 'e9b396e3-95bb-4aff-bf39-2fb148f105e8',
        'e8YieYvEdDg7O1knbXbI32', 'e8622798-bc47-4383-b3b5-9276d76c8df6',
        '98GVbz3BRA2bcjqQqTX35x', '981956f3-dc14-40d9-b723-a90a935f7e71',
        '08jN7tHoBJXLe3agHdIoAx', '088cdeed-1e80-495c-b7b7-6a01dd228031',
        '61JvTO+jlJspPp7mkKuRbP', '6126f4ce-fa39-49b2-93e9-ee690ab916cf',
        '8czWrydWBMH6vY3G14JF/H', '8ccd6af2-7560-4c1f-abd8-dc6d78245fc7',
        '552VvHntxFA4XWPcJmut72', '55d95bc7-9edc-4503-85d6-3dc266badef6'
    ].forEach(function (id) { adFrameIds[id] = true; });
    // These five original button textures include a baked-in video badge.
    // Keep their Button components and callbacks, and draw clean action faces.
    var actionFrames = {
        '038fb726-8641-4045-84fd-64e1f953bfdd': { text: '提示', color: [232, 153, 24] },
        '8a6d2222-6c46-4756-aec1-abc1ea5c7940': { text: '加时', color: [0, 179, 219] },
        'fa181a05-390e-4bbc-a0d9-91b0d62f0359': { text: '跳关', color: [0, 179, 219] },
        '5ad20294-f48e-4f6c-9077-cb4d8fca9afc': { text: '提示', color: [0, 166, 220] },
        '8fd4b468-ddbb-4088-b103-6e6446e6132e': { text: '跳关', color: [0, 166, 220] }
    };
    function actionFor(frame) { return frame && (actionFrames[frame._uuid] || actionFrames[frame.uuid]); }
    function drawAction(sprite, action) {
        if (!sprite.node || (sprite._offlineActionNode && cc.isValid(sprite._offlineActionNode))) return;
        var node = new cc.Node('OfflineFreeActionFace'), radius = Math.min(sprite.node.width, sprite.node.height) / 2 - 4;
        radius = Math.max(radius, 30); node.parent = sprite.node; node.groupIndex = sprite.node.groupIndex;
        node.setContentSize(radius * 2, radius * 2); sprite._offlineActionNode = node;
        var graphics = node.addComponent(cc.Graphics);
        graphics.fillColor = cc.color(28, 80, 105); graphics.circle(0, 0, radius); graphics.fill();
        graphics.fillColor = cc.color.apply(null, action.color); graphics.circle(0, 0, radius - 3); graphics.fill();
        graphics.lineWidth = 2; graphics.strokeColor = cc.color(255, 255, 255);
        graphics.circle(0, 0, radius - 6); graphics.stroke();
        var text = label(node, action.text, 0, 0, Math.min(28, radius * 0.55), [255, 255, 255]);
        text.groupIndex = sprite.node.groupIndex; text.getComponent(cc.Label).isBold = true;
    }
    function isAdFrame(frame) {
        return !!(frame && (adFrameIds[frame._uuid] || adFrameIds[frame.uuid] || /^(iconAd[0-9]*|icon_video|video_icon|videoIcon|icon_vedio|video[0-9]*|vedio)$/i.test(frame.name || '')));
    }
    function hideAdSprite(sprite) {
        if (!sprite) return;
        var action = actionFor(sprite.spriteFrame);
        if (action) drawAction(sprite, action);
        if (action || isAdFrame(sprite.spriteFrame)) sprite.enabled = false;
    }
    function later(fn, value) { if (typeof fn === 'function') setTimeout(function () { fn(value); }, 0); }
    function reward(value) {
        if (typeof value === 'function') later(value, true);
        else if (value) setTimeout(function () {
            if (typeof value.success === 'function') value.success({ type: 2 });
            if (typeof value.complete === 'function') value.complete();
            if (typeof value.completed === 'function') value.completed();
            if (typeof value.callBack === 'function') value.callBack(true);
            if (typeof value.callfun === 'function') value.callfun();
        }, 0);
        return 2;
    }
    function portrait(value) {
        if (window.jsb && jsb.reflection && cc.sys.os === cc.sys.OS_ANDROID) {
            try { jsb.reflection.callStaticMethod('org/cocos2dx/javascript/AppActivity', 'setPortrait', '(Z)V', value); }
            catch (e) { cc.log('Orientation: ' + e.message); }
        }
    }
    var sdk = offline.sdk = { instance: {}, _SceneScale: 1, initOver: true, serverClose: false, _isCloseAD: true, native_trigger_mode: 0,
        init: function (options) { later(options && options.initDataComplete); },
        getSysPlatformName: function () { return 'offline'; }, getSysPlatform: function () { return -1; }, getNativeSys: function () { return 'android'; },
        getHaveVideo: function () { return true; }, getShareOrViedo: function () { return 2; },
        showRewardedVideoAd: reward, showVideoWithoutAdIcon: reward, doShareOrVideo: reward, shareTo: reward,
        share: function (value) { if (typeof value === 'function') later(value, 1); else if (value) { later(value.success, 1); later(value.complete, 1); } },
        shareVd: function (fn) { later(fn, 1); }, showShareVideoDialog: function (fn) { later(fn, 1); },
        beginLuPing: function (time, fn) { later(fn, 1); },
        isShenhe: function () { return false; }, isInitOver: function () { return true; }, isPayBuy: function () { return false; },
        getGameCustomParams: function () { return {}; }, getParamByKey: function (options) { return options ? options.defaultValue : null; },
        onShow: function (fn) { cc.game.on(cc.game.EVENT_SHOW, fn); }, onHide: function (fn) { cc.game.on(cc.game.EVENT_HIDE, fn); },
        getTime: function () { return Date.now(); }, setOrientation: portrait,
        initPhysics: function (config) {
            if (!config) return;
            cc.game.config.groupList = config['group-list'] || ['default'];
            cc.game.config.collisionMatrix = config['collision-matrix'] || [[true]];
            cc.game._initConfig(cc.game.config);
        },
        showToast: function (message) { if (window.PPSDK) PPSDK.showToast(message); },
        showToast2: function (message) { if (window.PPSDK) PPSDK.showToast(message); },
        addListenerBackKey: noop,
        showGameOverPanl: function (options) { later(options && options.callfun); },
        showGameOverPanl2: function (options) { later(options && options.callfun); },
        showGameOverPanl3: function (options) { later(options && options.callfun); },
        uncompileStr: function (s) { return s; }
    };
    var methods = 'addNativeAd showNativeAd_small showNativeAd_big showNativeAd_2 showNativeAd_4 showNativeBanner hideNativeBanner showBanner showBannerCustom showBannerByTop showBannerByBottom hideBanner showSpotByBegin showSpotByPause showSpotByFinish showSpotByOther showSpotByBegin showMoreGameByIcon showMoreGameMiddle_one showMoreGameSide hideMoreGameSide showMoreGame showGameRecommend showGameRecommendDialog showAge showISBN hideISBN showUserAgreementSp showSideBar setSpotReward removeSpotReward addCommonUse hasInstalled installShortcut addLogOff beginLuPing stopLuPing pauseLuPing resumeLuPing vibrateShort vibrateLong gameBeginLevel gameFailLevel gameFinishLevel onGameStart onGameFail onGameSuccess gameEvent gameCustomEvents gameMain newJumpApp showAppBox createGameDrawerl hideGameDrawerl closeBoxBanner closeBoxPortalAd showGameOverPanl showGamePortalAd adTrackPust addBossTitle setSceneName getBaseData getUserOrderList loginEvent showBackHome'.split(' ');
    methods.forEach(function (name) { if (!sdk[name]) sdk[name] = noop; });
    // Existing game callbacks already contain real play transitions. Defer the
    // read until the core has finished assigning its new state.
    sdk.gameBeginLevel = queueHonorGameState;
    sdk.instance = { onlineData: {}, qGMoreGameData: [], getVersion: function () { return '1.0.3'; },
        isOpenInt: function () { return 0; }, isOpenBool: function () { return false; }, isOpenString: function () { return ''; },
        getHttpUrl: function () { return ''; }, setDataForHttpPust: noop, setDataForHttpGet: function (url, fn) { later(fn, '{}'); }, callAndroid: noop };
    window.lieyou_SdkManager = sdk;
    window.releasePlatform = 'offline'; window.language = 'zh'; window.isSkipCheckUpdate = true;
    window.oppoGetOnlineDataId = ''; window.miniMainGame = ''; window.videoTagOnlineFlag = 0; window.rateOnlineVideo = 0;
    window._SDKVersion = 'offline'; window._SDKVersionCode = 0;
    window.lieyou = { Props_Base_Gold: 800, Key_Gold: 'Key_Gold', Key_Diamond: 'Key_Diamond', Key_Music: 'Key_BgMusic', Key_Sound: 'Key_Sound', Key_Vibrate: 'Key_Vibrate', Language_ch: true, _SceneScale: 1 };
    function getValue(key, fallback) { var v = cc.sys.localStorage.getItem(key); return v === null || v === '' ? fallback : v; }
    window.Userdefault = { getStringForKey: function (k, v) { return getValue(k, v === undefined ? '' : v); },
        getIntForKey: function (k, v) { return parseInt(getValue(k, v || 0), 10); }, getFloatForKey: function (k, v) { return parseFloat(getValue(k, v || 0)); },
        getBoolForKey: function (k, v) { return String(getValue(k, !!v)) === 'true'; },
        setDataForKey: function (k, v) { cc.sys.localStorage.setItem(k, v); }, setBoolForKey: function (k, v) { cc.sys.localStorage.setItem(k, String(!!v)); } };
    window.lieyou_Userdefault = window.Userdefault;
    window.lieyou_interface = { showBodyYS: noop };
    window.getTime = window.lieyou_getTime = function () { return Date.now(); };
    window.getTimeDay = function () { var d = new Date(); d.setHours(0, 0, 0, 0); return d.getTime(); };
    window.getTimeDayStr = function (value) { var d = new Date(value || Date.now()); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); };
    window.getRandom = function (min, max) { return Math.floor(Math.random() * (max - min)) + min; };
    window.lieyou_showLog = noop;
    window.onGameStart = window.onGameSuccess = window.onGameFail = window.onGameEnd = window.onGameCustomEvent = noop;
    window.onGameStart = queueHonorGameState;
    offline.install = function () {
        var sub = PPSDK.subGame;
        sub.setCommon({ disableLoading: true, goHome: offline.showMenu });
        // Native deserialization and pooled prefabs can set parent directly.
        // Sprite hooks cover these paths even before the node reaches a scene.
        var originalApplyFrame = cc.Sprite.prototype._applySpriteFrame;
        cc.Sprite.prototype._applySpriteFrame = function () {
            var result = originalApplyFrame.apply(this, arguments);
            hideAdSprite(this);
            return result;
        };
        var originalSpriteEnable = cc.Sprite.prototype.onEnable;
        cc.Sprite.prototype.onEnable = function () {
            var result = originalSpriteEnable.apply(this, arguments), sprite = this;
            var action = actionFor(sprite.spriteFrame);
            if (action || isAdFrame(sprite.spriteFrame)) {
                if (action) drawAction(sprite, action);
                sprite.disableRender();
                // Let the component scheduler finish enabling before disabling.
                setTimeout(function () { if (cc.isValid(sprite)) hideAdSprite(sprite); }, 0);
            }
            return result;
        };
        cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
            if (currentBundle) {
                var scene = cc.director.getScene();
                offline.addMenuButton(); offline.clearAdUI(scene);
                setTimeout(function () {
                    if (currentBundle && cc.isValid(scene) && cc.director.getScene() === scene) offline.clearAdUI(scene);
                }, 300);
            }
        });
        var originalAddChild = cc.Node.prototype.addChild;
        cc.Node.prototype.addChild = function () {
            var result = originalAddChild.apply(this, arguments), child = arguments[0];
            if (currentBundle && child && child.name !== 'OfflineMenuButton') setTimeout(function () { if (cc.isValid(child)) offline.clearAdUI(child); }, 100);
            return result;
        };
        // A game can replace its Canvas or HUD without launching a new scene.
        // Recreate only the small return button; do not rescan the scene here.
        setInterval(function () { if (currentBundle) offline.addMenuButton(); }, 250);
        setInterval(function () { if (currentBundle) offline.reportHonorGameState(); }, 1000);
    };
    function label(parent, text, x, y, size, color) {
        var node = new cc.Node('Text'); node.parent = parent; node.setPosition(x, y);
        var l = node.addComponent(cc.Label); l.string = text; l.fontSize = size; l.lineHeight = size + 7;
        node.color = cc.color.apply(null, color || [241, 245, 255]); return node;
    }
    function rectangle(parent, name, x, y, w, h, color, radius) {
        var node = new cc.Node(name); node.parent = parent; node.setPosition(x, y); node.setContentSize(w, h);
        var g = node.addComponent(cc.Graphics); g.fillColor = cc.color.apply(null, color);
        g.roundRect(-w / 2, -h / 2, w, h, radius || 0); g.fill(); return node;
    }
    function canvasFor(scene) { var c = cc.find('Canvas', scene); if (c) return c;
        c = new cc.Node('Canvas'); c.parent = scene; c.addComponent(cc.Canvas).designResolution = cc.size(720, 1280); return c; }
    offline.showMenu = function () {
        var exiting = currentBundle;
        currentBundle = '';
        if (offline.exitHandlers[exiting]) offline.exitHandlers[exiting]();
        window.miniMainGame = ''; portrait(true);
        if (cc.audioEngine) cc.audioEngine.stopAll();
        if (window.PPSDK) { PPSDK.stopMusic(); PPSDK.audioManager.stopAllEffects && PPSDK.audioManager.stopAllEffects(); }
        var scene = new cc.Scene(); cc.director.runScene(scene);
        var canvas = canvasFor(scene); canvas.getComponent(cc.Canvas).designResolution = cc.size(720, 1280);
        cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.FIXED_WIDTH);
        menuRoot = new cc.Node('OfflineGameMenu'); menuRoot.parent = canvas;
        rectangle(menuRoot, 'Background', 0, 0, 4000, 4000, [17, 25, 43]);
        label(menuRoot, '迷宫闯关大冒险', 0, 480, 48);
        label(menuRoot, '选择玩法', 0, 415, 24, [157, 175, 202]);
        games.forEach(function (game, index) {
            var y = 290 - index * 134, button = rectangle(menuRoot, 'Play_' + game.bundle, 0, y, 620, 112, [34, 48, 72], 18);
            label(button, game.title, 0, 19, 31); label(button, game.subtitle, 0, -24, 20, [162, 181, 209]);
            button.addComponent(cc.Button).transition = cc.Button.Transition.SCALE;
            button.on('click', function () { offline.openGame(game); });
        });
        var privacy = rectangle(menuRoot, 'PrivacyAndSettings', 0, -442, 620, 52, [34, 48, 72], 12);
        label(privacy, '隐私政策 · 用户协议 · 设置', 0, 0, 21);
        privacy.addComponent(cc.Button);
        privacy.on('click', offline.openSettings);
        label(menuRoot, '适龄提示：建议 8 周岁及以上（开发者建议）', 0, -513, 18, [162, 181, 209]);
        label(menuRoot, '著作权人：兰溪市叙禾网络科技有限公司', 0, -566, 16, [162, 181, 209]);
        cc.director.once(cc.Director.EVENT_AFTER_DRAW, function () {
            window.dispatchEvent(new Event('game-ready'));
            offline.reportHonorGameState();
        });
        return Promise.resolve();
    };
    offline.openGame = function (game) {
        if (offline.busy) return; offline.busy = true;
        var status = label(menuRoot, '正在加载…', 0, -470, 22, [157, 175, 202]);
        cc.assetManager.loadBundle(game.bundle, function (error) {
            if (error) { status.getComponent(cc.Label).string = '加载失败，请重试'; offline.busy = false; return; }
            function launch(tries) {
                var sub = PPSDK.subGame.getSub(game.bundle);
                if (!sub && tries < 30) { setTimeout(function () { launch(tries + 1); }, 50); return; }
                if (!sub) { status.getComponent(cc.Label).string = '玩法初始化失败'; offline.busy = false; return; }
                currentBundle = game.bundle; window.miniMainGame = game.bundle;
                // All five shipped modes declare portrait orientation in the original game catalog.
                portrait(true); offline.resetButtonHandlers();
                var config = sub.group || {}; sdk.initPhysics(config);
                var canvas = cc.Canvas.instance;
                if (canvas) canvas.designResolution = cc.size(config['design-resolution-width'] || 960, config['design-resolution-height'] || 640);
                PPSDK.subGame.setCommon({ disableLoading: true, goHome: offline.showMenu });
                try { PPSDK.subGame.goGame(game.bundle); offline.busy = false; queueHonorGameState(); }
                catch (e) { cc.error(e); offline.busy = false; currentBundle = ''; offline.showMenu(); }
            }
            launch(0);
        });
    };
    offline.resetButtonHandlers = function () {
        if (!offline.originalButtonBegin) { offline.originalButtonBegin = cc.Button.prototype._onTouchBegan; offline.originalButtonEnd = cc.Button.prototype._onTouchEnded; }
        cc.Button.prototype._onTouchBegan = offline.originalButtonBegin; cc.Button.prototype._onTouchEnded = offline.originalButtonEnd;
    };
    offline.addMenuButton = function () {
        var canvas = cc.find('Canvas'); if (!canvas) return;
        if (!canvas.getChildByName('OfflinePrivacyButton')) {
            var privacy = rectangle(canvas, 'OfflinePrivacyButton', -cc.winSize.width / 2 + 72, cc.winSize.height / 2 - 23, 132, 36, [36, 48, 65, 218], 8);
            var caption = label(privacy, '隐私与设置', 0, 0, 18);
            var privacyGroups = cc.game.groupList || [], privacyIndex = privacyGroups.indexOf('UI');
            if (privacyIndex < 0) privacyIndex = privacyGroups.indexOf('ui');
            if (privacyIndex >= 0) { privacy.groupIndex = privacyIndex; caption.groupIndex = privacyIndex; }
            privacy.zIndex = 32767; privacy.addComponent(cc.Button); privacy.on('click', offline.openSettings);
            var age = rectangle(canvas, 'OfflineAgeAdvice', 0, cc.winSize.height / 2 - 23, 108, 32, [36, 48, 65, 218], 8);
            var advice = label(age, '建议 8+', 0, 0, 16);
            if (privacyIndex >= 0) { age.groupIndex = privacyIndex; advice.groupIndex = privacyIndex; }
            age.zIndex = 32767; age.addComponent(cc.Button); age.on('click', offline.openSettings);
        }
        var existing = canvas.getChildByName('OfflineMenuButton');
        if (existing) { existing.active = true; existing.zIndex = 32767; return; }
        var width = cc.winSize.width, height = cc.winSize.height;
        var button = rectangle(canvas, 'OfflineMenuButton', width / 2 - 42, height / 2 - 23, 74, 36, [36, 48, 65, 218], 8);
        var text = label(button, '菜单', 0, 0, 18);
        var groups = cc.game.groupList || [], uiIndex = groups.indexOf('UI');
        if (uiIndex < 0) uiIndex = groups.indexOf('ui');
        if (uiIndex >= 0) { button.groupIndex = uiIndex; text.groupIndex = uiIndex; }
        button.zIndex = 32767; button.addComponent(cc.Button);
        button.on('click', function () { offline.showMenu(); });
    };
    offline.clearAdUI = function (root) {
        if (!root || !cc.isValid(root)) return; if (root instanceof cc.Scene) { root.children.forEach(offline.clearAdUI); return; }
        var name = root.name || '';
        if (/^(videoIcon|video_icon|icon_video|adIcon|iconAd[0-9]*|ad_icon|nativeAd|native_ad|adNode|ad_node|moreGame|more_game|moreGameNode|shareBtn|shareButton|rankBtn|rankButton|huawei_logooff|isbn|ageNode|yinsi|privacy|btn_more|btn_rank|btn_share|YHXY|YSZC|btnYHXY|btnYSZC)$/i.test(name)) root.active = false;
        var sprite = root.getComponent(cc.Sprite);
        hideAdSprite(sprite);
        var text = root.getComponent(cc.Label);
        if (text) text.string = String(text.string).replace(/观看(?:广告|视频)|看(?:广告|视频)/g, '免费').replace(/激励视频|视频广告/g, '免费领取');
        (root.children || []).forEach(offline.clearAdUI);
    };
    offline.openSettings = function () {
        window.dispatchEvent(new Event('game-settings'));
    };
    offline.start = function () { PPSDK.init({ onCompleted: function () { offline.showMenu(); } }); };
})();
