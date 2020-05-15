var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../ea0481588cf938a76655373abf7c162d.js")), a = getApp();

Page((0, t.default)({
    allowShare: !0,
    data: {
        opusid: null,
        opusdata: null,
        listCount: 0,
        opList: [],
        nextPage: 2,
        isBottom: !1,
        loadingShow: !0
    },
    clickOpusCallMe: function(t) {
        var a = t.currentTarget.dataset.tel;
        wx.makePhoneCall({
            phoneNumber: a
        });
    },
    clickOpusGuestbook: function(t) {
        wx.redirectTo({
            url: "/pages/guestbook/guestbook"
        });
    },
    clickPic: function(t) {
        var i = t.currentTarget.dataset.ptype, e = t.currentTarget.dataset.id, o = this;
        if ("0" == i) wx.navigateTo({
            url: "/pages/play/play?type=0&id=" + e
        }); else {
            for (var s = [], n = o.data.opList.slice(), p = 0; p < n.length; p++) "1" == n[p].type && s.push(n[p]);
            a.singleList = s, wx.navigateTo({
                url: "/pages/play/play?type=1&id=" + e
            });
        }
    },
    onLoad: function(t) {
        this.setData({
            opusid: t.id
        }), this.setPageConfig(), this.setOpusContent(), this.setOpusList();
    },
    setPageConfig: function() {
        var t = this;
        a.http({
            url: a.apis.stylist_config
        }).then(function(a) {
            t.setData({
                pageConfig: a.set
            }), void 0 != t.data.pageConfig && (void 0 != t.data.pageConfig.topcolor && null != t.data.pageConfig.topcolor && "" != t.data.pageConfig.topcolor || (t.data.pageConfig.topcolor = "#2fbd80"));
        });
    },
    setOpusContent: function() {
        var t = this;
        a.http({
            url: a.apis.designer_one,
            data: {
                id: this.data.opusid
            }
        }).then(function(a) {
            t.setData({
                opusdata: a.one,
                listCount: a.count
            }), t.setData({
                loadingShow: !1
            });
        }, function(t) {
            wx.showToast({
                title: t,
                image: "/public/images/icon_error.png"
            });
        });
    },
    setOpusList: function() {
        var t = this;
        a.http({
            url: a.apis.opus_list,
            data: {
                id: this.data.opusid
            }
        }).then(function(a) {
            t.setData({
                opList: a.oplist
            });
        }, function(t) {
            wx.showToast({
                title: t,
                image: "/public/images/icon_error.png"
            });
        });
    },
    setOpusListMore: function() {
        var t = this;
        a.http({
            url: a.apis.opus_list,
            data: {
                id: this.data.opusid,
                page: this.data.nextPage
            }
        }).then(function(a) {
            for (var i = 0; i < a.oplist.length; i++) t.data.opList.push(a.oplist[i]);
            0 == a.length && t.setData({
                isBottom: !0
            }), t.setData({
                opList: t.data.opList,
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
        this.setOpusListMore();
    }
}));