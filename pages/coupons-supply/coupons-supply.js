var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../090627b750e3f7661b2722641b584ddf.js")), e = require("../../f5b982310b35490b3be56a448dd2faf8.js"), a = getApp();

Page((0, t.default)({
    title: "领券中心",
    data: {
        list: [],
        statusViewConfig: {
            empty: {
                icon: "coupon",
                text: "还没有可以领取的优惠券哦"
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
    onLoad: function(t) {
        this.reLoad();
    },
    reLoad: function(t) {
        var a = this;
        this._pager = this._pager || (0, e.getCouponsSupplyListPager)(), this.autoSetPagerStatusView(this._pager.load(t)).then(function(t) {
            a.setData({
                list: t
            });
        });
    },
    onReachBottom: function() {
        var t = this;
        this._pager && !this._pager.completed && this.autoSetPagerLoading(this._pager.next()).then(function(e) {
            var a = e.list;
            t.setData({
                list: a
            });
        });
    },
    itemTap: function(t) {
        var i = this, o = t.detail.data, r = t.currentTarget;
        o.received || o.over < 1 || (0, e.receiveCounpon)(o.id).then(function(t) {
            var e = i.data.list;
            e[r.dataset.index].received = !0, i.setData({
                list: e
            }), a.successToast("领取成功");
        }, function(t) {
            a.textToast("领取失败: " + t.toString());
        });
    }
}));