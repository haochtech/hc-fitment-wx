var s = getApp();

Component({
    options: {
        addGlobalClass: !0
    },
    properties: {
        hasAuth: {
            type: Boolean,
            value: !0
        },
        backgroundColor: {
            type: String,
            value: ""
        },
        copyShow: {
            type: Boolean,
            value: !0
        },
        contactShow: {
            type: Boolean,
            value: !0
        },
        copyRightShow: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        syscfg: {},
        user: {},
        myadpop: {},
        stsModel: !1
    },
    methods: {
        checkPop: function() {},
        adpopClose: function() {
            0 == this.data.myadpop.adpop_show ? this.setData({
                "myadpop.adpop_show": "1"
            }) : this.setData({
                "myadpop.adpop_show": "0"
            });
        },
        notTouch: function() {},
        bindCancelGetUserInfoClick: function() {
            wx.reLaunch({
                url: "/pages/index/index"
            });
        },
        bindLinkClick: function(o) {
            s.sitefun.clickObjectLink(o, s);
        },
        bindCopyrightClick: function(o) {
            s.sitefun.clickCopyright(o, s);
        },
        suspendCloseClick: function() {
            "0" == s.sys.suspend.suspend_show ? this.setData({
                "syscfg.suspend.suspend_show": "1"
            }) : this.setData({
                "syscfg.suspend.suspend_show": "0"
            });
        }
    },
    attached: function() {
        var o = this;
        s.getConfig().then(function() {
            o.setData({
                syscfg: s.sys,
                user: s.globalData.userInfo
            }), o.checkPop();
        });
    }
});