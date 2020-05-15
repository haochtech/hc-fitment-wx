var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../ea0481588cf938a76655373abf7c162d.js")), a = getApp();

Page((0, t.default)({
    allowShare: !0,
    data: {
        mynav: {},
        navCurrId: 0,
        list: [],
        nextPage: 2,
        isBottom: !1,
        loadingShow: !0,
        topHeight: a.getSizeData().height,
        isone: !0
    },
    onLoad: function(t) {
        this.setData({
            navCurrId: t.id
        }), this.setNav();
    },
    setNav: function() {
        var t = this;
        a.http({
            url: a.apis.list_nav,
            data: {
                id: this.data.navCurrId
            }
        }).then(function(a) {
            t.setData({
                mynav: a.nav,
                list: a.list
            }), 0 === parseInt(t.data.navCurrId) && t.setData({
                navCurrId: a.nav[0].id
            }), t.setData({
                loadingShow: !1
            }), setTimeout(function() {
                t.setData({
                    isone: !1
                });
            }, 100);
        }, function(a) {
            t.setData({
                loadingShow: !1
            });
        });
    },
    navClick: function(t) {
        var i = this, e = t.detail;
        this.setData({
            navCurrId: e.value,
            nextPage: 2,
            isBottom: !1
        }), a.http({
            url: a.apis.list_list,
            data: {
                tid: this.data.navCurrId
            }
        }).then(function(t) {
            i.setData({
                list: t
            });
        }, function(t) {
            wx.showToast({
                title: t,
                image: "/public/images/icon_error.png"
            });
        });
    },
    getMore: function() {
        var t = this;
        this.data.isBottom || a.http({
            url: a.apis.list_list,
            data: {
                tid: this.data.navCurrId,
                page: this.data.nextPage
            }
        }).then(function(a) {
            for (var i = 0; i < a.length; i++) t.data.list.push(a[i]);
            0 == a.length && t.setData({
                isBottom: !0
            }), t.setData({
                list: t.data.list,
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
        this.getMore();
    }
}));