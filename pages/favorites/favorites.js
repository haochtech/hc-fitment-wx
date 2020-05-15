var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../090627b750e3f7661b2722641b584ddf.js")), e = require("../../f5b982310b35490b3be56a448dd2faf8.js"), i = require("../../05bb1be19e494870932877fad1b09e20.js");

Page((0, t.default)({
    title: "商品收藏",
    data: {
        list: [],
        statusViewConfig: {
            empty: {
                icon: "favorite",
                text: "您还没有收藏过商品哦",
                btnAction: "@shop",
                btnText: "回首页逛逛"
            },
            error: {
                icon: "error",
                btnText: "重试"
            }
        },
        pagerLoadingConfig: {
            completed: {
                text: "没有更多了"
            }
        }
    },
    onLoad: function() {
        this.title = (0, i.setI8n)("shangpingshoucang"), this.setData({
            "statusViewConfig.empty.text": (0, i.setI8n)("nhmyscgspo"),
            "statusViewConfig.empty.btnText": (0, i.setI8n)("hsygg"),
            "statusViewConfig.error.btnText": (0, i.setI8n)("chongshi"),
            "pagerLoadingConfig.completed.text": (0, i.setI8n)("mygdl")
        }), this.reLoad();
    },
    reLoad: function(t) {
        var i = this;
        this._pager = this._pager || (0, e.getFavoritesListPager)(), this.autoSetPagerStatusView(this._pager.load(t)).then(function(t) {
            i.setData({
                list: t
            });
        });
    },
    nextPage: function() {
        var t = this;
        this._pager && !this._pager.completed && this.autoSetPagerLoading(this._pager.next()).then(function(e) {
            var i = e.list;
            t.setData({
                list: i
            });
        });
    },
    removeItem: function(t) {
        var i = this, a = t.currentTarget, s = this.data.list, n = a.dataset.index, o = this.data.list[n];
        (0, e.setCommodityFavorite)(o.id, !1).then(function(t) {
            s.splice(n, 1), i.setData({
                list: s
            }), i.autoSetStatusView(s);
        });
    }
}));