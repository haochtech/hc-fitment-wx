var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../ea0481588cf938a76655373abf7c162d.js")), a = require("../../f5b982310b35490b3be56a448dd2faf8.js"), e = getApp();

Page((0, t.default)({
    data: {
        topHeight: e.getSizeData().height,
        picType: 0,
        tabAttr: {
            curHdIndex: -1,
            curBdIndex: -1
        },
        picTagMulti: {},
        bakPTM: {},
        picTagSingle: {},
        bakPTS: {},
        picListMulti: [],
        picListSingle: [],
        nextPageMulti: 2,
        nextPageSingle: 2,
        nextPagePanoram: 2,
        isBottomMulti: !1,
        isBottomSingle: !1,
        isBottomPanoram: !1,
        list: [],
        notEmpty: !0,
        keyword: "",
        ismore: !1,
        offset: 0,
        listMode: "immersive-dark"
    },
    goToSearch: function(t) {
        var a = t.detail.value.replace(/(^\s*)|(\s*$)/g, "");
        a && (this.setData({
            keyword: a,
            ismore: !1
        }), this.setData({
            nextPageMulti: 2,
            nextPageSingle: 2,
            nextPagePanoram: 2,
            isBottomMulti: !1,
            isBottomSingle: !1,
            isBottomPanoram: !1
        }), this.search());
    },
    quxiao: function() {
        wx.navigateBack();
    },
    search: function() {
        var t = this, i = this, n = 0, o = "";
        i.data.ismore ? 0 === (o = i.data.picType) ? n = i.data.nextPageMulti : 1 === o ? n = i.data.nextPageSingle : 4 === o && (n = i.data.nextPagePanoram) : (n = 1, 
        o = ""), e.http({
            url: e.apis.SL_pic_search,
            data: {
                page: n,
                type: o,
                key: i.data.keyword,
                uid: i.data.user.id
            }
        }).then(function(e) {
            e.panorama && e.panorama.length && (e.panorama = (0, a.formatPanorama)(e.panorama)), 
            i.data.ismore ? 0 === i.data.picType ? e.multi && e.multi.length ? t.setData({
                picListMulti: e.multi,
                nextPageMulti: t.data.nextPageMulti + 1
            }) : t.setData({
                isBottomMulti: !0
            }) : 1 === i.data.picType ? e.single && e.single.length ? t.setData({
                picListSingle: e.single,
                nextPageSingle: t.data.nextPageSingle + 1
            }) : t.setData({
                isBottomSingle: !0
            }) : 4 === i.data.picType && (e.panorama && e.panorama.length ? t.setData({
                list: e.panorama,
                nextPagePanoram: t.data.nextPagePanoram + 1
            }) : t.setData({
                isBottomPanoram: !0
            })) : i.setData({
                picListMulti: e.multi,
                picListSingle: e.single,
                nextPagePanoram: 2,
                isBottomPanoram: !1,
                isBottomMulti: !1,
                isBottomSingle: !1,
                nextPageMulti: 2,
                nextPageSingle: 2,
                list: e.panorama
            });
        }, function(t) {
            console.log(t);
        });
    },
    hideBoxShadow: function() {
        this.setData({
            "tabAttr.curBdIndex": -1
        });
    },
    goToPlay: function(t) {
        var a = t.detail;
        e.singleList = this.data.picListSingle, wx.navigateTo({
            url: a
        });
    },
    onLoad: function(t) {
        var e = this;
        (0, a.getPanoramasListConfig)().then(function(t) {
            var a = t.listMode;
            e.setData({
                listMode: a
            });
        });
    },
    clickPicType: function(t) {
        this.setData({
            picType: parseInt(t.currentTarget.dataset.pictype)
        });
    },
    onReachBottom: function() {
        var t = this;
        this.setData({
            ismore: !0
        }), 0 == t.data.picType ? t.data.isBottomMulti || (t.setData({
            ismore: !0
        }), t.search()) : 1 == t.data.picType ? t.data.isBottomSingle || (t.setData({
            ismore: !0
        }), t.search()) : 4 == this.data.picType && (t.data.isBottomPanoram || (t.setData({
            ismore: !0
        }), t.search()));
    }
}));