function e(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../81749a27300a44e4ae95b30c438dea90.js")), r = require("../../3f2ca8efd1a82bd646cc65d968b15bae.js"), i = require("../../f5b982310b35490b3be56a448dd2faf8.js"), a = require("../../8ad6060fc8343954a87212ef83583213.js"), n = getApp();

Component({
    behaviors: [ t.default ],
    options: {
        multipleSlots: !0
    },
    properties: {
        showBackHomeBtn: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        items: [],
        selectedCount: 0,
        selectedPrice: 0,
        statusViewConfig: {
            error: {
                icon: "error",
                btnText: "重试"
            }
        }
    },
    attached: function() {
        this.reLoad();
    },
    ready: function() {
        var e = this;
        setTimeout(function() {
            e.reCalcScrollHeight();
        }, 200);
    },
    methods: {
        autoSetStatusView: a.autoSetStatusView,
        errorReLoad: function() {
            this.reLoad(!0);
        },
        reLoad: function(e) {
            var t = this;
            this.autoSetStatusView((0, r.getCartItems)(e)).then(function(e) {
                t.setData({
                    items: e
                }), t.reCalc(!0);
            });
        },
        reCalcScrollHeight: function() {
            var e = this;
            this.setData({
                scrollHeight: "auto"
            }), wx.createSelectorQuery().in(this).select("._shopcart-scroll").boundingClientRect(function(t) {
                try {
                    t.height && e.setData({
                        scrollHeight: t.height + "px"
                    });
                } catch (e) {}
            }).exec();
        },
        reCalc: function(e) {
            var t = this.data.items, r = 0, i = 0;
            t.forEach(function(e) {
                e.selected && e.number > 0 ? (r++, i = i.add(e.price.mul(e.number))) : e.selected = !1;
            }), this.setData({
                items: t,
                selectedCount: r,
                selectedPrice: i
            }), this.triggerEvent("update", {
                itemsLength: t.length,
                selectedCount: r,
                selectedPrice: i
            }), e && this.reCalcScrollHeight();
        },
        targetItemChange: function(t) {
            var i = t.currentTarget.dataset.id, a = t.currentTarget.dataset.key, n = t.detail.newVal, o = this.data.items.find(function(e) {
                return e.id == i;
            });
            o && (o[a] = n, ("selected" !== a || t.detail.byUser) && (0, r.updateCartItem)(i, e({}, a, n)), 
            this.reCalc());
        },
        selectAll: function(e) {
            var t = e.detail;
            t.byUser && (this.data.items.forEach(function(e) {
                e.selected = t.newVal;
            }), (0, i.setCartItemsSelected)(t.newVal), this.reCalc());
        },
        removeItem: function(e) {
            var t = this, i = e.currentTarget.dataset.id;
            -1 !== this.data.items.findIndex(function(e) {
                return e.id == i;
            }) && wx.showModal({
                title: "购物车",
                content: "确定移除此商品？",
                confirmColor: "#cc353c",
                success: function(e) {
                    e.confirm && (0, r.removeCartItem)(i).then(function(e) {
                        t.data.items = e, t.reCalc(!0);
                    });
                }
            });
        },
        commit: function() {
            var e = this.data.items.filter(function(e) {
                return e.selected;
            });
            e.length && n.smartTo({
                url: ">order-commit",
                data: {
                    list: e
                }
            });
        }
    }
});