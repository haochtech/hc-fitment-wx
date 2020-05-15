var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../090627b750e3f7661b2722641b584ddf.js")), a = require("../../f5b982310b35490b3be56a448dd2faf8.js"), e = require("../../05bb1be19e494870932877fad1b09e20.js"), i = getApp();

Page((0, t.default)({
    title: "优惠券",
    data: {
        callback: null,
        type: 0,
        tabItems: [ {
            id: 0,
            label: "未使用"
        }, {
            id: 1,
            label: "已失效"
        } ],
        list: [],
        pagers: {},
        statusViewConfig: {
            empty: {
                icon: "coupon",
                text: "您还没有此类优惠券"
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
        },
        consumption: 0
    },
    onLoad: function(t) {
        this.setDataByOptions([ "callback", "consumption", "type" ], t), t.title && (this.title = t.title), 
        this.data.callback && this.setData({
            type: 0,
            "statusViewConfig.empty.text": (0, e.setI8n)("mykydyhq"),
            "statusViewConfig.empty.btnText": ""
        });
        var a = [ {
            id: 0,
            label: (0, e.setI8n)("weishiyong")
        }, {
            id: 1,
            label: (0, e.setI8n)("yishixiao")
        } ];
        this.setData({
            tabItems: a,
            "statusViewConfig.empty.text": (0, e.setI8n)("nhmyclyhq"),
            "statusViewConfig.error.btnText": (0, e.setI8n)("chongshi"),
            "pagerLoadingConfig.completed.text": (0, e.setI8n)("mygdl")
        }), this.title = (0, e.setI8n)("youhuiquan"), this.reLoad();
    },
    onShow: function() {
        this._showAgain && (this.data.pagers = {}, this.reLoad());
    },
    reLoad: function(t) {
        var i = this, n = this.data, l = n.type, s = n.pagers, o = s[l] = s[l] || (0, a.getCouponsListPager)(l);
        this.autoSetPagerStatusView(o.load(t)).then(function(t) {
            if (i.data.callback) {
                var a = !0, n = !1, s = void 0;
                try {
                    for (var o, r = t[Symbol.iterator](); !(a = (o = r.next()).done); a = !0) {
                        var c = o.value;
                        c.available || (c.failed = (0, e.setI8n)("weishengxiao")), i.data.consumption < c.minConsumption && (c.failed = (0, 
                        e.setI8n)("tjbf"));
                    }
                } catch (t) {
                    n = !0, s = t;
                } finally {
                    try {
                        !a && r.return && r.return();
                    } finally {
                        if (n) throw s;
                    }
                }
            } else if (1 === l) {
                var d = !0, u = !1, h = void 0;
                try {
                    for (var f, g = t[Symbol.iterator](); !(d = (f = g.next()).done); d = !0) {
                        var p = f.value;
                        p.failed = p.available ? (0, e.setI8n)("yishiyong") : (0, e.setI8n)("yiguoqi");
                    }
                } catch (t) {
                    u = !0, h = t;
                } finally {
                    try {
                        !d && g.return && g.return();
                    } finally {
                        if (u) throw h;
                    }
                }
            }
            i.setData({
                list: t
            });
        });
    },
    nextPage: function() {
        var t = this, a = this.data, e = a.type, i = a.pagers[e];
        i && !i.completed && this.autoSetPagerLoading(i.next()).then(function(a) {
            var e = a.list;
            t.setData({
                list: e
            });
        });
    },
    tabChange: function(t) {
        var a = t.detail;
        this.setData({
            type: a.value
        }), this.reLoad();
    },
    itemTap: function(t) {
        var a = t.detail;
        this.data.callback && !a.data.failed && i.pageCallBack(this.data.callback, a.data);
    },
    itemBtnTap: function(t) {
        var a = t.detail;
        this.data.callback || !a.data.available || a.data.failed || i.actionRun("@shop");
    },
    callBackNull: function() {
        this.data.callback && i.pageCallBack(this.data.callback, null);
    }
}));