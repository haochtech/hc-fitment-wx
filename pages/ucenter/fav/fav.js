var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../ea0481588cf938a76655373abf7c162d.js")), i = getApp();

Page((0, t.default)({
    data: {
        picType: 0,
        picListMulti: {},
        picListSingle: {},
        nextPageMulti: 2,
        nextPageSingle: 2,
        isBottomMulti: !1,
        isBottomSingle: !1,
        loadingShow: !0,
        topHeight: i.getSizeData().height,
        ismore: !1
    },
    onShow: function() {
        this.initPage(), this.setPicListFav();
    },
    initPage: function() {
        this.setData({
            isBottomMulti: !1,
            isBottomSingle: !1,
            nextPageMulti: 2,
            nextPageSingle: 2
        });
    },
    onLoad: function(t) {
        this.setPicListFav(), this.title = "图片收藏";
    },
    clickPicType: function() {
        var t = this;
        0 == t.data.picType ? t.setData({
            picType: 1
        }) : t.setData({
            picType: 0
        });
    },
    setPicListFav: function() {
        var t = this;
        i.http({
            url: i.apis.pic_list_fav,
            data: {
                uid: i.globalData.userInfo.id
            }
        }).then(function(i) {
            t.setData({
                picListMulti: i.multi,
                picListSingle: i.single,
                loadingShow: !1
            });
        }, function(t) {
            wx.showToast({
                title: t,
                image: "/public/images/icon_error.png"
            });
        });
    },
    getPicSingleMore: function() {
        var t = this;
        this.data.isBottomSingle || i.http({
            url: i.apis.pic_list_fav_single_more,
            data: {
                page: this.data.nextPageSingle,
                uid: i.globalData.userInfo.id
            }
        }).then(function(i) {
            i && 0 == i.length ? t.setData({
                isBottomSingle: !0
            }) : t.setData({
                ismore: !0,
                picListSingle: i,
                nextPageSingle: t.data.nextPageSingle + 1
            });
        }, function(t) {
            wx.showToast({
                title: t,
                image: "/public/images/icon_error.png"
            });
        });
    },
    getPicMultiMore: function() {
        var t = this;
        this.data.isBottomMulti || i.http({
            url: i.apis.pic_list_fav_multi_more,
            data: {
                page: this.data.nextPageMulti,
                uid: i.globalData.userInfo.id
            }
        }).then(function(i) {
            0 == i.length ? t.setData({
                isBottomMulti: !0
            }) : t.setData({
                ismore: !0,
                picListMulti: i,
                nextPageMulti: t.data.nextPageMulti + 1
            });
        }, function(t) {
            wx.showToast({
                title: t,
                image: "/public/images/icon_error.png"
            });
        });
    },
    onReachBottom: function() {
        0 == this.data.picType ? this.getPicMultiMore() : 1 == this.data.picType && this.getPicSingleMore();
    }
}));