var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../d60a1235283664dfe97c5c6418868a10.js")), a = getApp();

Component({
    behaviors: [ t.default ],
    options: {
        addGlobalClass: !0
    },
    data: {
        syscfg: null,
        myadpop: {},
        authShow: !1,
        siteVersion: "",
        stsModel: !1,
        menusEnabled: "0",
        logo_url: "",
        hasAuth: !0,
        tabShow: !0,
        user: null,
        sysauth: {},
        ver: a.info.version,
        loadingShow: !0,
        listData: []
    },
    created: function() {
        this.shortcutGroup = "", this.allowShare = !1;
    },
    attached: function() {
        var t = this;
        a.getConfig().then(function() {
            t.setData({
                syscfg: a.sys,
                user: a.globalData.userInfo,
                listData: a.sys.ucenter,
                loadingShow: !1
            });
        });
    },
    methods: {
        clearStorage: function() {
            wx.clearStorageSync(), a.globalData.userInfo = void 0, a.actionRun(">index?url=@me");
        }
    }
});