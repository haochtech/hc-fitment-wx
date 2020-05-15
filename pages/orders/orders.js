function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../090627b750e3f7661b2722641b584ddf.js")), a = require("../../f5b982310b35490b3be56a448dd2faf8.js"), i = t(require("../../13be7b381bebed53fea2a3c4b7a234be.js")), s = require("../../05bb1be19e494870932877fad1b09e20.js");

Page((0, e.default)({
    title: "我的订单",
    data: {
        type: -1,
        statusMap: i.default,
        tabItems: [ {
            id: -1,
            label: "全部"
        }, {
            id: 1,
            label: "待付款"
        }, {
            id: 2,
            label: "待发货"
        }, {
            id: 3,
            label: "待收货"
        }, {
            id: 4,
            label: "已完成"
        }, {
            id: 5,
            label: "已退款"
        } ],
        list: [],
        pagers: {},
        statusViewConfig: {
            empty: {
                icon: "",
                text: "还没有此类订单哦~"
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
        this.setDataByOptions([ "status" ], t), this.reLoad();
        var e = [ {
            id: -1,
            label: (0, s.setI8n)("quanbu")
        }, {
            id: 1,
            label: (0, s.setI8n)("daifukuan")
        }, {
            id: 2,
            label: (0, s.setI8n)("daifahuo")
        }, {
            id: 3,
            label: (0, s.setI8n)("daishouhuo")
        }, {
            id: 4,
            label: (0, s.setI8n)("yiwancheng")
        }, {
            id: 5,
            label: (0, s.setI8n)("yituikuan")
        } ];
        this.title = (0, s.setI8n)("wodedingdan"), this.setData({
            tabItems: e,
            "statusViewConfig.empty.text": (0, s.setI8n)("myclddo"),
            "statusViewConfig.error.btnText": (0, s.setI8n)("chongshi"),
            "pagerLoadingConfig.completed.text": (0, s.setI8n)("mygdl")
        });
    },
    onShow: function() {
        this._showAgain && (this.data.pagers = {}, this.reLoad(!0));
    },
    reLoad: function(t) {
        var e = this, i = this.data, s = i.type, n = i.pagers, o = n[s] = n[s] || (0, a.getOrdersListPager)(s);
        this.autoSetPagerStatusView(o.load(t)).then(function(t) {
            e.setData({
                list: t
            });
        });
    },
    tabChange: function(t) {
        var e = t.detail.value;
        this.setData({
            type: e
        }), this.reLoad();
    },
    nextPage: function() {
        var t = this, e = this.data, a = e.type, i = e.pagers[a];
        i && !i.completed && this.autoSetPagerLoading(i.next()).then(function(e) {
            var a = e.list;
            t.setData({
                list: a
            });
        });
    }
}));