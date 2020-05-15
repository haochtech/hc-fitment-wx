var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../ea0481588cf938a76655373abf7c162d.js")), a = getApp();

Page((0, t.default)({
    allowShare: !0,
    data: {
        id: "",
        srcUrl: "",
        fav: 0
    },
    onLoad: function(t) {
        var e = this;
        this.setData({
            id: t.id
        }), a._getConfigPromise.then(function(t) {
          console.log(a.apis.SL_panorama_one + "&uid=" + a.globalData.userInfo.id + "&id=" + e.data.id + "&ver=" + a.info.version);
            e.setData({
                srcUrl: a.apis.SL_panorama_one + "&uid=" + a.globalData.userInfo.id + "&id=" + e.data.id + "&ver=" + a.info.version
            });
        }), this.title = t.title;
    },
    onShow: function() {},
    success: function() {}
}));