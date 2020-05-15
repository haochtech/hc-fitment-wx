var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../ea0481588cf938a76655373abf7c162d.js")), e = getApp();

Page((0, t.default)({
    allowShare: !0,
    data: {
        myDesingerList: [],
        nextPage: 2,
        isBottom: !1,
        loadingShow: !0,
        pageConfig: null
    },
    clickRedirectToDesigner: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/opus/opus?id=" + e
        });
    },
    clickStylistCallMe: function(t) {
        var e = t.currentTarget.dataset.tel;
        wx.makePhoneCall({
            phoneNumber: e
        });
    },
    onLoad: function(t) {
        var i = this;
        e.getConfig().then(function() {
            i.setPageConfig(), i.setDesignerList();
        });
    },
    imgLoad: function() {
        this.setData({
            loadingShow: !1
        });
    },
    setPageConfig: function() {
        var t = this;
        e.http({
            url: e.apis.stylist_config
        }).then(function(e) {
            t.setData({
                pageConfig: e.set
            }), t.data.pageConfig || t.setData({
                loadingShow: !1
            });
        }, function(t) {
            wx.showToast({
                title: t,
                image: "/public/images/icon_error.png"
            });
        });
    },
    setDesignerList: function() {
        var t = this;
        e.http({
            url: e.apis.designer_list
        }).then(function(e) {
            t.setData({
                myDesingerList: e
            });
        }, function(t) {
            wx.showToast({
                title: t,
                image: "/public/images/icon_error.png"
            });
        });
    },
    setDesignerListMore: function() {
        var t = this;
        t.data.isBottom || e.http({
            url: e.apis.designer_list,
            data: {
                uid: e.globalData.userInfo.id,
                page: t.data.nextPage
            }
        }).then(function(e) {
            for (var i = 0; i < e.length; i++) t.data.myDesingerList.push(e[i]);
            0 == e.length && t.setData({
                isBottom: !0
            }), t.setData({
                myDesingerList: t.data.myDesingerList,
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
        this.setDesignerListMore();
    }
}));