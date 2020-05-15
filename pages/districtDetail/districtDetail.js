function t(t) {
    if (Array.isArray(t)) {
        for (var a = 0, e = Array(t.length); a < t.length; a++) e[a] = t[a];
        return e;
    }
    return Array.from(t);
}

var a = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../ea0481588cf938a76655373abf7c162d.js")), e = getApp();

Page((0, a.default)({
    allowShare: !0,
    data: {
        gid: "",
        progress_check: 0,
        list_progress: [],
        districtData: {},
        marginLeft: 0,
        marginRight: 0,
        listStyle: [],
        activeIndex: null,
        loadingShow: !0,
        fans: []
    },
    addressMap: function(t) {
        var a = t.currentTarget.dataset, e = a.name, i = a.address, s = a.latitude, r = a.longitude;
        s = parseFloat(s), r = parseFloat(r), wx.openLocation({
            name: e,
            address: i,
            latitude: s,
            longitude: r,
            scale: 14
        });
    },
    mavClick: function(t) {
        this.setData({
            activeIndex: t.currentTarget.dataset.id
        });
    },
    shoucang: function() {
        var t = this, a = "1" === this.data.districtData.isfav ? "0" : "1";
        e.http({
            url: e.apis.site_collect + "&op=post",
            data: {
                id: this.data.districtData.id,
                ver: e.info.version,
                uid: e.globalData.userInfo.id,
                isfav: a
            },
            method: "POST"
        }).then(function(e) {
            t.setData({
                "districtData.isfav": a
            }), wx.showToast({
                title: "操作成功",
                icon: "succes",
                duration: 1500
            });
        });
    },
    onLoad: function(t) {
        this.setData({
            gid: t.id
        }), this.getInfoData();
    },
    setSiteFans: function(t) {
        var a = this, i = t ? e.apis.SL_save_site_fans : e.apis.SL_find_site_fans;
        e.http({
            url: i,
            data: {
                id: this.data.gid,
                uid: e.globalData.userInfo.id,
                ver: e.info.version
            }
        }).then(function(e) {
            t ? a.setSiteFans() : a.setData({
                fans: e
            });
        });
    },
    previewImage: function(t) {
        wx.previewImage({
            current: t.currentTarget.dataset.src,
            urls: t.currentTarget.dataset.imgs
        });
    },
    getInfoData: function() {
        var a = this;
        e.http({
            url: e.apis.site_one,
            data: {
                id: this.data.gid,
                uid: e.globalData.userInfo.id
            },
            method: "POST"
        }).then(function(e) {
            e.one.budget_format = (e.one.budget_format / 1e4).toFixed(2), a.setData({
                list_progress: e.list_progress,
                districtData: e.one,
                listStyle: e.style_show
            });
            for (var i = [].concat(t(e.list_progress)), s = 0; s < i.length; s++) if ("1" === i[s].checked) {
                a.setData({
                    progress_check: s
                });
                break;
            }
            var r = wx.createSelectorQuery();
            setTimeout(function() {
                r.select(".text-f").boundingClientRect(function(t) {
                    var e = t.width;
                    a.setData({
                        marginLeft: e / 2
                    });
                }).exec(), r.select(".text-l").boundingClientRect(function(t) {
                    var e = t.width;
                    a.setData({
                        marginRight: e / 2,
                        loadingShow: !1
                    });
                }).exec();
            }, 200);
        });
    }
}));