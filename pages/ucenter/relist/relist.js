var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../ea0481588cf938a76655373abf7c162d.js")), e = getApp();

Page((0, t.default)({
    data: {
        myadpop: {},
        authShow: !1,
        siteVersion: "",
        menusEnabled: "0",
        logo_url: "",
        hasAuth: !0,
        tabShow: !0,
        loadingColor: e.maincolor ? e.maincolor : "#2fbd80",
        reList: [],
        nextPage: 2,
        isBottom: !1
    },
    onLoad: function(t) {
        this.setReList(), this.title = "我的预约";
    },
    setReList: function() {
        var t = this;
        e.http({
            url: e.apis.relist,
            data: {
                uid: t.data.user.id
            }
        }).then(function(e) {
            t.setData({
                reList: e
            });
        }, function(t) {
            wx.showToast({
                title: t,
                image: "/public/images/icon_error.png"
            });
        });
    },
    setReListMore: function() {
        var t = this;
        t.data.isBottom || e.http({
            url: e.apis.relist,
            data: {
                uid: t.data.user.id,
                page: t.data.nextPage
            }
        }).then(function(e) {
            for (var a = 0; a < e.length; a++) t.data.reList.push(e[a]);
            0 == e.length && t.setData({
                isBottom: !0
            }), t.setData({
                reList: t.data.reList,
                nextPage: t.data.nextPage + 1
            });
        }, function(t) {
            wx.showToast({
                title: t,
                image: "/public/images/icon_error.png"
            });
        });
    },
    onReachBottom: function() {
        this.setReListMore();
    }
}));