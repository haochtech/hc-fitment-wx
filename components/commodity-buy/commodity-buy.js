var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../81749a27300a44e4ae95b30c438dea90.js")), e = require("../../3f2ca8efd1a82bd646cc65d968b15bae.js"), i = require("../../f5b982310b35490b3be56a448dd2faf8.js"), a = getApp();

Component({
    behaviors: [ t.default ],
    properties: {
        mode: {
            type: String,
            value: "all"
        },
        btnText: {
            type: String,
            value: "确认"
        },
        commodityID: {
            type: null,
            observer: "reLoad"
        },
        commodityData: {
            type: Object,
            observer: "dataUpdate"
        }
    },
    data: {
        buyData: {
            commodityID: void 0,
            image: "",
            title: "",
            description: "",
            price: 0,
            priceStr: "0.00",
            number: 0,
            stock: void 0,
            selectedOptionsTip: "",
            selectedOptionsLabel: [],
            selectedOptions: [],
            selectedOptionsID: -1,
            checkSelected: !1
        }
    },
    attached: function() {
        this.data.commodityData ? this.dataUpdate() : void 0 !== this.commodityID && this.reLoad();
    },
    ready: function() {},
    methods: {
        show: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.mode, i = void 0 === e ? "all" : e, a = t.btnText, o = void 0 === a ? "确认" : a;
            this.setData({
                mode: i,
                btnText: o
            }), this.selectComponent("#_commodity-buy-view").show();
        },
        hide: function() {
            this.selectComponent("#_commodity-buy-view").hide();
        },
        reLoad: function() {
            var t = this;
            (0, i.getCommodityData)(this.data.commodityID).then(function(e) {
                var i = e.commodityData;
                t.setData({
                    commodityData: i
                });
            });
        },
        checkSelected: function() {
            var t = this.data.buyData;
            return t.checkSelected && t.number > 0;
        },
        confirmByAction: function(t) {
            var e = t.currentTarget;
            this.confirm(e.dataset.action);
        },
        confirm: function(t) {
            var i = this;
            return new Promise(function(o) {
                i.checkSelected() ? ("add" === t ? (0, e.addToCart)(i.data.buyData).then(function(e) {
                    o(), i.triggerEvent("confirm", {
                        action: t
                    });
                }) : a.smartTo({
                    url: ">order-commit",
                    data: {
                        buynow: !0,
                        list: [ i.data.buyData ]
                    }
                }), i.hide()) : i.show({
                    mode: "confirm",
                    confirmAction: t
                });
            });
        },
        clickItem: function(t) {
            var e = t.currentTarget.dataset, i = e.optionIndex, a = e.itemId;
            this.data.buyData.selectedOptions[i] = a, this.dataUpdate();
        },
        numberChange: function(t) {
            var e = t.detail;
            this.data.buyData.number = e.newVal, this.dataUpdate();
        },
        dataUpdate: function() {
            var t = this.data, e = t.commodityData, i = t.buyData, a = e.images, o = e.title, n = e.description, r = e.price, c = e.priceStr, d = e.stock, s = e.unit, m = a[0], u = i.selectedOptions, p = -1, l = !0, h = e.options.map(function(t, e) {
                var i = t.items.find(function(t) {
                    return t.id == u[e];
                });
                if (i) return i.image && (m = i.image), i.label;
                l = !1;
            }), f = h.join(" ") + (s ? " 共" + i.number + s : " 数量:" + i.number);
            if (l) {
                if (u.length = e.options.length, u.length) {
                    var b = u.join("+"), y = e.optionsData.find(function(t) {
                        return t.assemble === b;
                    });
                    y && (r = y.price, c = y.priceStr, d = y.stock, p = y.id);
                }
                l = d > 0;
            }
            Object.assign(i, {
                commodityID: e.id,
                image: m,
                title: o,
                description: n,
                price: r,
                priceStr: c,
                stock: d,
                selectedOptionsLabel: h,
                checkSelected: l,
                selectedOptionsID: p,
                selectedOptionsTip: l ? f : "请选择 " + e.options.filter(function(t, e) {
                    return !u[e];
                }).map(function(t) {
                    return t.label;
                }).join(" ")
            }), this.setData({
                buyData: i
            }), this.triggerEvent("update", i);
        }
    }
});