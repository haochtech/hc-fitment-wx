var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../ea0481588cf938a76655373abf7c162d.js")), a = getApp();

Page((0, t.default)({
    data: {
        districtList: [],
        loadingShow: !0,
        nextPage: 2,
        isBoottom: !1
    },
    getDistrictData: function(t) {
        var i = this, e = t ? this.data.nextPage : 1;
        a.http({
            url: a.apis.site_collect,
            data: {
                uid: a.globalData.userInfo.id,
                page: e
            },
            method: "POST"
        }).then(function(a) {
            a.list_site.length ? t ? i.setData({
                districtList: i.data.districtList.concat(a.list_site),
                nextPage: i.data.nextPage + 1
            }) : i.setData({
                districtList: a.list_site,
                nextPage: 2,
                isBoottom: !1
            }) : t ? i.setData({
                isBoottom: !0
            }) : i.setData({
                districtList: [],
                nextPage: 2,
                isBoottom: !1
            }), i.setData({
                loadingShow: !1
            });
        }, function(t) {
            wx.showModal({
                content: t,
                showCancel: !1
            }), i.setData({
                loadingShow: !1
            });
        });
    },
    onLoad: function(t) {
        this.title = "工地收藏", this.getDistrictData(!1);
    },
    onShow: function() {
        this.setData({
            isBoottom: !1,
            nextPage: 2
        }), this.getDistrictData(!1);
    },
    onReachBottom: function() {
        this.data.isBoottom || this.getDistrictData(!0);
    }
}));