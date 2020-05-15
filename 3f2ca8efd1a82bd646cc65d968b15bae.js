function t(t) {
    var e = !0, n = !1, o = void 0;
    try {
        for (var i, a = t[Symbol.iterator](); !(e = (i = a.next()).done); e = !0) !function() {
            var t = i.value, e = r.cartItems.findIndex(function(e) {
                return e.id == t;
            });
            -1 !== e && r.cartItems.splice(e, 1);
        }();
    } catch (t) {
        n = !0, o = t;
    } finally {
        try {
            !e && a.return && a.return();
        } finally {
            if (n) throw o;
        }
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getCategoriesList = function() {
    return e.getCategoriesList().then(function(t) {
        return r.categories = t;
    });
}, exports.getCategoryDataByID = function(t) {
    return new Promise(function(n, o) {
        var i = r.categoryData[t];
        i ? n(i) : e.getCategoryDataByID(t).then(function(e) {
            n(r.categoryData[t] = e);
        }, o);
    });
}, exports.getCartItems = function(t) {
    return !t && r.cartItems.length ? Promise.resolve(r.cartItems) : e.getCartItems().then(function(t) {
        return r.cartItems = t;
    });
}, exports.addToCart = function(t) {
    try {
        t = JSON.parse(JSON.stringify(t));
        var n = r.cartItems.find(function(e) {
            return e.commodityID == t.commodityID && e.selectedOptionsID === t.selectedOptionsID;
        }), o = !1, i = function() {
            return wx.showToast({
                title: o ? "数量超出库存" : "已加入购物车",
                icon: o ? "none" : "success",
                duration: 1500
            }), r.cartItems;
        }, a = function(t) {
            return t = t.toString(), wx.showToast({
                title: "加入购物车失败:" + t,
                icon: "none",
                duration: 2e3
            }), Promise.reject(t);
        };
        if (n) {
            var c = n.number + t.number;
            return (o = c > n.stock) && (c = n.stock), e.updateCartItem(n.id, {
                number: c
            }).then(function(t) {
                n.number = c;
            }).then(i, a);
        }
        return e.addToCart(t.commodityID, t.number, t.selectedOptionsID).then(function(e) {
            r.cartItems.push(Object.assign({
                selected: !0,
                commodityID: void 0,
                image: "",
                title: "",
                description: "",
                price: 0,
                number: 0,
                stock: void 0,
                selectedOptionsTip: "",
                selectedOptionsLabel: [],
                selectedOptions: [],
                selectedOptionsID: -1
            }, t, {
                id: e
            }));
        }).then(i, a);
    } catch (t) {
        return Promise.reject(t.toString());
    }
}, exports.updateCartItem = function(t, n) {
    var o = n.number, i = n.selected;
    e.updateCartItem(t, {
        number: o,
        selected: i
    }).then(function(e) {
        var n = r.cartItems.find(function(e) {
            return e.id == t;
        });
        n && (void 0 !== o && (n.number = o), void 0 !== i && (n.selected = i));
    });
}, exports.removeCartItem = function(n) {
    return e.removeCartItem(n).then(function(e) {
        return t([ n ]), r.cartItems;
    });
}, exports.removeCartItemsLocal = t;

var e = function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e.default = t, e;
}(require("f5b982310b35490b3be56a448dd2faf8.js")), r = {
    categories: [],
    categoryData: {},
    cartItems: []
};