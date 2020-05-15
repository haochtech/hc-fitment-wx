var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../090627b750e3f7661b2722641b584ddf.js")), e = require("../../d1a7c028313deb5944bc534167fbcdc2.js"), r = require("../../f5b982310b35490b3be56a448dd2faf8.js"), i = require("../../3f2ca8efd1a82bd646cc65d968b15bae.js"), o = getApp();

Page((0, t.default)({
    title: "填写订单",
    data: {
        address: null,
        coupon: null,
        list: [],
        totalPrice: 0,
        finalPrice: 0,
        offer: 0,
        buynow: !1
    },
    onSmartToHere: function(t) {
        var r = this, i = (t.options, t.data);
        i ? (this.setData({
            list: i.list.filter(function(t) {
                return t.number > 0;
            }),
            buynow: !!i.buynow
        }), this.reCalc()) : o.smartTo({
            url: "@shop"
        }), (0, e.getDefaultAddress)().then(function(t) {
            r.setData({
                address: t
            });
        }, function(t) {});
    },
    addressChange: function(t) {
        this.setData({
            address: t
        });
    },
    couponChange: function(t) {
        this.setData({
            coupon: t
        }), this.reCalc();
    },
    commit: function() {
        var t = this.data, e = t.address, a = t.coupon, n = t.list, s = t.buynow;
        if (!e) return o.textToast("请选择地址");
        (0, r.createOrder)({
            addressID: e.id,
            couponID: a ? a.id : void 0,
            items: n.map(function(t) {
                return {
                    id: s ? t.commodityID : t.id,
                    number: t.number,
                    optionsID: t.selectedOptionsID
                };
            })
        }, s).then(function(t) {
            (0, i.removeCartItemsLocal)(n.map(function(t) {
                return t.id;
            })), o.smartTo({
                method: "redirectTo",
                url: ">order-detail",
                options: {
                    id: t,
                    paynow: !0
                }
            });
        }, function(t) {
            o.textToast(t.toString());
        });
    },
    reCalc: function() {
        var t = this.data, e = t.list, r = t.coupon, i = 0, o = void 0, a = void 0, n = !0, s = !1, u = void 0;
        try {
            for (var d, c = e[Symbol.iterator](); !(n = (d = c.next()).done); n = !0) {
                var l = d.value;
                i = i.add(l.price.mul(l.number));
            }
        } catch (t) {
            s = !0, u = t;
        } finally {
            try {
                !n && c.return && c.return();
            } finally {
                if (s) throw u;
            }
        }
        o = i, r && (o = o.mul(r.multiplication).add(r.addition), o = Math.max(o, 0).toFixed(2)), 
        a = i.sub(o), this.setData({
            totalPrice: i,
            finalPrice: o,
            offer: a
        });
    }
}));