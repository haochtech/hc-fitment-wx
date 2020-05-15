var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../ea0481588cf938a76655373abf7c162d.js"));

getApp();

Page((0, e.default)({
    allowShare: !0,
    data: {
        purl: ""
    },
    onLoad: function(e) {
        var a = decodeURIComponent(e.url);
        void 0 != e.url && "" != e.url && this.setData({
            purl: a
        });
    }
}));