function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }
    return t;
}, e = t(require("../../090627b750e3f7661b2722641b584ddf.js")), r = require("../../f5b982310b35490b3be56a448dd2faf8.js"), o = t(require("../../13be7b381bebed53fea2a3c4b7a234be.js")), i = getApp();

Page((0, e.default)({
    title: "订单详情",
    data: {
        orderID: 0,
        order: {},
        pay: {},
        statusMap: o.default,
        statusViewConfig: {
            error: {
                icon: "error",
                btnText: "重试"
            }
        }
    },
    onLoad: function(t) {
        this.setDataByOptions([ {
            orderID: "id"
        }, "paynow" ], t), this.reLoad();
    },
    reLoad: function() {
        var t = this;
        this.autoSetStatusView((0, r.getOrderDetail)(this.data.orderID)).then(function(a) {
            var e = a.order, r = a.pay;
            t.setData({
                order: e,
                pay: r
            }), t.data.paynow && t.pay();
        });
    },
    pay: function() {
        var t = this, e = this.data.pay, o = e.isFail, n = e.info;
        o ? i.textToast("发起支付失败：" + n) : wx.requestPayment(a({}, n, {
            success: function() {
                (0, r.updateOrderStatus)(t.data.orderID).then(function(a) {
                    t.setData({
                        "order.status": a
                    });
                }, function(t) {
                    i.textToast(t);
                });
            },
            fail: function(t) {
                var a = t.errMsg;
                i.textToast(a, !0);
            }
        }));
    }
}));