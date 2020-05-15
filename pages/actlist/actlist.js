var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../ea0481588cf938a76655373abf7c162d.js")), a = getApp();

Page((0, t.default)({
    allowShare: !0,
    data: {
        news: [],
        tid: 0,
        page: 2,
        setcont: "0",
        barTitle: "",
        loadingShow: !0
    },
    bindLinkClick: function(t) {
        a.sitefun.clickObjectLink(t, a);
    },
    onLoad: function(t) {
        this.setData({
            tid: t.tid
        }), this.setNews();
    },
    setNews: function() {
        var t = this;
        a.http({
            url: a.apis.act_news2,
            data: {
                tid: this.data.tid
            }
        }).then(function(a) {
            t.setData({
                news: a
            }), t.setData({
                loadingShow: !1
            });
        }, function(t) {
            console.log(t);
        });
    },
    getMore: function() {
        var t = this;
        this.data.isBottom || a.http({
            url: a.apis.act_news2,
            data: {
                tid: this.data.tid,
                page: this.data.page
            }
        }).then(function(a) {
            for (var e = 0; e < a.list.length; e++) t.data.news.list.push(a.list[e]);
            0 == a.list.length && t.setData({
                isBottom: !0
            }), t.setData({
                "news.list": t.data.news.list,
                page: t.data.page + 1
            });
        }, function(t) {
            console.log(t);
        });
    },
    onReachBottom: function() {
        this.getMore();
    }
}));