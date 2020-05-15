function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t) {
    if (Array.isArray(t)) {
        for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
        return r;
    }
    return Array.from(t);
}

function r(t) {
    return {
        id: u(t.id),
        time: i(t.addtime).split(" ")[0],
        title: i(t.title),
        subTitle: i(t.subtitle),
        typeText: i(t.term_cn),
        image: i(t.thumb_url),
        fav_count: a(t.fav_count),
        view_count: a(t.view_count),
        fav: a(t.fav)
    };
}

function o(t) {
    return {
        id: u(t.id),
        title: i(t.title),
        subTitle: i(t.subtitle),
        image: i(t.thumb_url),
        author: "",
        time: i(t.addtime),
        content: i(t.detail),
        actionImage: i(t.out_thumb_url),
        action: i(t.out_link),
        byUser: n(t.dy_type),
        fav_count: a(t.fav_count),
        view_count: a(t.view_count),
        fav: a(t.fav)
    };
}

function n(t) {
    return 0 != t && !!t;
}

function a(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return "" === t ? e : (t = Number(t), Number.isFinite(t) && !Number.isNaN(t) ? t : e);
}

function i(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    return t ? String(t) : e;
}

function s(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(t) {
        return t;
    };
    return Array.isArray(t) ? t.map(e) : [];
}

function u(t, e) {
    return void 0 === t ? e : String(t);
}

function d(t) {
    return "number" == typeof t ? t : "string" != typeof t ? NaN : Number(t.replace(/[^0-9\.]|/g, ""));
}

function c(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, r = d(t);
    return String(r).replace(/(\d+)\.?(\d+)?/, function(t, r, o) {
        return o = (o || "").padEnd(e, "0"), r + "." + o;
    });
}

function p(t) {
    for (var e in t) void 0 === t[e] && delete t[e];
    return t;
}

function m(t) {
    return {
        id: u(t.id),
        image: i(t.thumb_url),
        title: i(t.title),
        description: i(t.intro),
        price: d(t.price_format),
        priceStr: c(t.price_format)
    };
}

function l(t) {
    return function(e) {
        var r = a(e.enough), o = 1 == e.backtype, s = o ? a(e.discount) : d(e.backmoney_format), c = o ? (0 === r ? "" : "满" + r) + "以原价的" + 10 * s + "%支付" : (0 === r ? "立" : "满" + r) + "减" + s + "元", p = i(e.title), m = t ? e.use_end_time : 0 == e.timelimit ? "0" === i(e.timedays1) ? "无使用期限制" : "获得后" + e.timedays1 + "天内有效" : e.timestart + " - " + e.timeend;
        return {
            id: u(e.id),
            isDiscount: o,
            flag: p,
            title: c,
            faceValue: s,
            faceUnit: o ? "折" : "元",
            minConsumption: r,
            multiplication: o ? s / 10 : 1,
            addition: o ? 0 : -s,
            detail: i(e.intro),
            deadline: m,
            fullName: "[" + p + "] " + c,
            over: a(e.total),
            received: n(e.isreceive),
            available: n(e.usable)
        };
    };
}

function f(t) {
    var e = i(t.thumb_url), r = [], o = [], n = -1;
    return t.option && (n = u(t.option.id), s(t.option.assemble_array).forEach(function(t) {
        var n = i(t.thumb_url);
        n && (e = n), r.push(i(t.title)), o.push(u(t.id));
    })), {
        id: u(t.id),
        image: e,
        title: i(t.title),
        description: i(t.intro),
        price: d(t.price_format),
        priceStr: c(t.price_format),
        number: a(t.number),
        selectedOptionsLabel: r,
        selectedOptions: o,
        selectedOptionsID: n
    };
}

function g(t) {
    return {
        id: u(t.id),
        status: a(t.status),
        orderSN: i(t.ordersn),
        buyList: s(t.goods, f),
        buyItemsLength: a(t.total),
        totalPrice: c(t.originalprice_format),
        offer: d(t.discount_money_format),
        offerStr: c(t.discount_money_format),
        finalPrice: c(t.price_format),
        createTime: i(t.addtime),
        address: t.address ? _(t.address) : {},
        coupon: t.coupon ? l()(t.coupon) : null
    };
}

function _(t) {
    return {
        id: u(t.id),
        name: i(t.realname),
        phone: i(t.mobile),
        region: [ i(t.province), i(t.city), i(t.area) ],
        detail: i(t.address),
        isDefault: n(t.isdefault)
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.updateOrderStatus = exports.getOrderDetail = exports.getOrdersListPager = exports.commitFormID = exports.createOrder = exports.getCouponsListPager = exports.receiveCounpon = exports.getCouponsSupplyListPager = exports.removeAddress = exports.commitAddress = exports.getAddressList = exports.getCartItems = exports.setCartItemsSelected = exports.removeCartItem = exports.updateCartItem = exports.addToCart = exports.getFavoritesListPager = exports.setCommodityFavorite = exports.getCommodityData = exports.getCommoditiesListPager = exports.getCategoryDataByID = exports.getCategoriesList = exports.getHomeData = exports.getProductArticleByID = exports.getPanoramasListByKeywordPager = exports.getPanoramasListPager = exports.getPanoramasFavPager = exports.getPanoramasListConfig = exports.getProductsListPager = exports.getProductsFavPager = exports.getProductsListConfig = exports.reportUserBehavior = void 0, 
exports.injectConfig = function(t) {
    Object.assign(h, t);
}, exports.formatPanorama = function(t) {
    return s(t, r);
};

var v = t(require("df4643c87186b5560520fd284304e4b6.js")), y = t(require("14512fa7102fdcc7fa95bdf4f6b9292a.js")), x = require("d1a7c028313deb5944bc534167fbcdc2.js"), h = {}, b = new v.default(h, {
    request: function(t) {
        t.needTrack && (t.params = Object.assign({}, {
            uid: x.userData.id
        }, t.params)), t.data instanceof Function && (t.data = t.data()), "POST" === t.method && "application/json" === (t.header["content-type"] = t.header["content-type"] || "application/x-www-form-urlencoded") && t.injectData && (t.data = t.params);
    },
    response: function(t) {
        var e = t.data, r = t.statusCode;
        if (200 !== r) throw "statusCode: " + r;
        if (!(e instanceof Object)) throw e;
        if (0 != e.errno) throw e.message;
        return e.data;
    }
}), T = new y.default({
    requestCreater: function(t) {
        return b.request(t.url, t);
    },
    cfgCreater: function(t, e) {
        return t.params = t.params || {}, t.params.page = e, t;
    },
    per: 10,
    firstPage: 1
});

exports.reportUserBehavior = function(t, e) {
    return b.post("?do=SL_send_operation", {
        needTrack: !0,
        header: {
            "content-type": "application/json"
        },
        data: {
            code: t,
            id: e
        }
    });
}, exports.getProductsListConfig = function() {
    return b.get("?do=SL_pro_list_config", {
        needTrack: !0,
        transform: function(t) {
            return {
                listMode: i(t.config.list_style)
            };
        }
    });
}, exports.getProductsFavPager = function() {
    return T.create({
        url: "?do=SL_pro_collect",
        needTrack: !0,
        transform: function(t) {
            return s(t.list_pro, r);
        }
    });
}, exports.getProductsListPager = function() {
    return T.create({
        url: "?do=SL_pro_list",
        method: "GET",
        needTrack: !0,
        transform: function(t) {
            return s(t.topic.items, r);
        }
    });
}, exports.getPanoramasListConfig = function() {
    return b.get("?do=SL_panorama_config", {
        needTrack: !0,
        transform: function(t) {
            return {
                listMode: i(t.config.list_style)
            };
        }
    });
}, exports.getPanoramasFavPager = function() {
    return T.create({
        url: "?do=SL_panorama_collect",
        method: "POST",
        header: {
            "content-type": "application/json"
        },
        needTrack: !0,
        transform: function(t) {
            return s(t.list_pro, r);
        }
    });
}, exports.getPanoramasListPager = function() {
    return T.create({
        url: "?do=SL_panorama",
        method: "GET",
        needTrack: !0,
        transform: function(t) {
            return s(t.panorama.items, r);
        }
    });
}, exports.getPanoramasListByKeywordPager = function(t) {
    return T.create({
        url: "?do=SL_pic_search",
        method: "GET",
        needTrack: !0,
        params: {
            type: 4,
            key: t
        },
        transform: function(t) {
            return s(t.panorama, r);
        }
    });
}, exports.getProductArticleByID = function(t) {
    return b.get("?do=SL_pro_one", {
        needTrack: !0,
        params: {
            aid: t
        },
        transform: function(t) {
            return o(t.one);
        }
    });
}, exports.getHomeData = function() {
    return b.get("?do=store_index_data", {
        needTrack: !0,
        transform: function(t) {
            var e = t.banner, r = t.guide, o = t.hotgoods, u = t.newgoods, d = t.adsp, c = t.adgroup, p = t.default;
            return {
                adOne: {
                    enabled: n(p.adsp_show),
                    items: s(d, function(t) {
                        return {
                            image: i(t.thumb_url),
                            action: i(t.page_url)
                        };
                    })
                },
                adGroup: {
                    enabled: n(p.adgroup_show),
                    items: s(c, function(t) {
                        return {
                            image: i(t.attrurl),
                            action: i(t.page_url)
                        };
                    })
                },
                banner: {
                    enabled: n(e.enabled),
                    height: a(e.banner_height, 310),
                    items: s(e.items, function(t) {
                        return {
                            image: i(t.thumb_url),
                            action: i(t.page_url)
                        };
                    })
                },
                guide: {
                    column: a(r.rownum),
                    items: s(r.items, function(t) {
                        return {
                            label: i(t.title),
                            image: i(t.thumb_url),
                            action: i(t.page_url)
                        };
                    })
                },
                popular: {
                    enabled: n(o.enabled),
                    title: i(o.title),
                    items: s(o.items, m)
                },
                new: {
                    enabled: n(u.enabled),
                    title: i(u.title),
                    items: s(u.items, m)
                }
            };
        }
    });
}, exports.getCategoriesList = function() {
    return b.get("?do=store_category_top", {
        needTrack: !0,
        transform: function(t) {
            return t ? s(t.category, function(t) {
                return {
                    id: u(t.id),
                    label: i(t.title)
                };
            }) : [];
        }
    });
}, exports.getCategoryDataByID = function(t) {
    return b.get("?do=store_category_sub", {
        needTrack: !0,
        params: {
            id: t
        },
        transform: function(t) {
            var e = t.category, r = t.child_cate;
            return {
                id: u(e.id),
                label: i(e.title),
                topic: {
                    image: i(e.adthumb_url),
                    action: ""
                },
                slogan: i(e.intro),
                items: s(r, function(t) {
                    return {
                        id: u(t.id),
                        label: i(t.title),
                        image: i(t.thumb_url)
                    };
                })
            };
        }
    });
}, exports.getCommoditiesListPager = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return T.create({
        url: "?do=store_search",
        method: "GET",
        needTrack: !0,
        params: {
            key: t.keyword,
            type: t.tag,
            id: t.subID
        },
        transform: function(t) {
            return s(t.list, m);
        }
    });
}, exports.getCommodityData = function(t) {
    return b.get("?do=store_good_detail", {
        needTrack: !0,
        params: {
            id: t
        },
        transform: function(t) {
            var r = t.goods, o = n(r.spec_status);
            return {
                commodityData: {
                    id: u(r.id),
                    images: [ r.thumb_url ].concat(e(r.thumbs_url || [])),
                    title: i(r.title),
                    description: i(r.intro),
                    stock: a(r.inventory),
                    price: d(r.price_format),
                    priceStr: c(r.price_format),
                    unit: i(r.unit),
                    optionsData: o ? s(r.goods_options, function(t) {
                        return {
                            id: u(t.id),
                            assemble: i(t.assemble),
                            stock: a(t.inventory),
                            price: d(t.price_format),
                            priceStr: c(t.price_format)
                        };
                    }) : [],
                    options: o ? s(r.spec_format, function(t) {
                        return {
                            label: i(t.title),
                            items: s(t.items, function(t) {
                                return {
                                    id: u(t.id),
                                    label: i(t.title),
                                    image: i(t.thumb_url)
                                };
                            })
                        };
                    }) : []
                },
                commodityDetails: i(r.content),
                commodityParameters: s(r.param_format, function(t) {
                    return {
                        label: i(t.title),
                        value: i(t.value)
                    };
                }),
                isFavorite: n(r.iscollect)
            };
        }
    });
}, exports.setCommodityFavorite = function(t, e) {
    return b.get("?do=store_collect", {
        needTrack: !0,
        params: {
            op: "post",
            id: t,
            iscollect: n(e)
        }
    });
}, exports.getFavoritesListPager = function() {
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return T.create({
        url: "?do=store_collect",
        method: "GET",
        needTrack: !0,
        transform: function(t) {
            return s(t.list, m);
        }
    });
}, exports.addToCart = function(t, e, r) {
    return b.get("?do=store_cart", {
        needTrack: !0,
        params: {
            op: "add",
            id: t,
            count: e,
            optionsID: r
        },
        transform: function(t) {
            return t.id;
        }
    });
}, exports.updateCartItem = function(t, e) {
    var r = e.number, o = e.selected;
    return b.get("?do=store_cart", {
        needTrack: !0,
        params: {
            op: "update",
            id: t,
            count: r,
            checked: o
        }
    });
}, exports.removeCartItem = function(t) {
    return b.get("?do=store_cart", {
        needTrack: !0,
        params: {
            op: "delete",
            id: t
        }
    });
}, exports.setCartItemsSelected = function(t) {
    return b.get("?do=store_cart", {
        needTrack: !0,
        params: {
            op: "check",
            type: t ? "all" : "clean"
        }
    });
}, exports.getCartItems = function() {
    return b.get("?do=store_cart", {
        needTrack: !0,
        transform: function(t) {
            return s(t.list, function(t) {
                var e = d(t.goods.price_format), r = i(t.goods.thumb_url), o = [], p = [], m = -1;
                return t.good_option && (m = u(t.good_option.id), e = d(t.good_option.price_format), 
                s(t.good_option.assemble_format).forEach(function(t) {
                    var e = i(t.thumb_url);
                    e && (r = e), o.push(i(t.title)), p.push(u(t.id));
                })), {
                    id: u(t.id),
                    selected: n(t.checked),
                    commodityID: u(t.goods.id),
                    image: r,
                    title: i(t.goods.title),
                    description: i(t.goods.intro),
                    price: e,
                    priceStr: c(e),
                    number: a(t.count),
                    stock: a(t.goods.inventory),
                    selectedOptionsLabel: o,
                    selectedOptions: p,
                    selectedOptionsID: m
                };
            });
        }
    });
}, exports.getAddressList = function() {
    return b.get("?do=store_address", {
        needTrack: !0,
        transform: function(t) {
            return s(t.list, _);
        }
    });
}, exports.commitAddress = function(t) {
    return b.post("?do=store_address", {
        needTrack: !0,
        data: function() {
            var e = t.region || [];
            return p({
                op: "post",
                id: t.id,
                name: t.name,
                mobile: t.phone,
                province: e[0],
                city: e[1],
                area: e[2],
                address: t.detail,
                isdefault: t.isDefault
            });
        }
    });
}, exports.removeAddress = function(t) {
    return b.post("?do=store_address", {
        needTrack: !0,
        data: {
            op: "delete",
            id: t
        }
    });
}, exports.getCouponsSupplyListPager = function() {
    return T.create({
        url: "?do=store_coupon",
        method: "GET",
        needTrack: !0,
        transform: function(t) {
            return s(t, l());
        }
    });
}, exports.receiveCounpon = function(t) {
    return b.get("?do=store_coupon_my", {
        needTrack: !0,
        params: {
            op: "add",
            id: t
        }
    });
}, exports.getCouponsListPager = function(t) {
    return T.create({
        url: "?do=store_coupon_my",
        method: "GET",
        needTrack: !0,
        params: {
            type: t
        },
        transform: function(t) {
            return s(t, l(!0));
        }
    });
}, exports.createOrder = function(t, e) {
    return b.post("?do=store_order", {
        needTrack: !0,
        header: {
            "content-type": "application/json"
        },
        params: {
            op: "add"
        },
        data: function() {
            return p({
                address: t.addressID,
                coupon: t.couponID,
                cart: e ? 0 : 1,
                items: t.items
            });
        },
        transform: function(t) {
            return t.order_id;
        }
    });
}, exports.commitFormID = function(t) {
    return b.post("?do=SL_save_form_id", {
        needTrack: !0,
        header: {
            "content-type": "application/json"
        },
        data: function() {
            return {
                formIDs: t
            };
        }
    });
}, exports.getOrdersListPager = function(t) {
    return T.create({
        url: "?do=store_order",
        method: "GET",
        needTrack: !0,
        params: {
            type: -1 === t ? void 0 : t
        },
        transform: function(t) {
            return s(t.order, g);
        }
    });
}, exports.getOrderDetail = function(t) {
    return b.get("?do=store_order", {
        needTrack: !0,
        params: {
            op: "detail",
            id: t
        },
        transform: function(t) {
            var e = t.order, r = t.pay;
            return {
                order: g(e),
                pay: {
                    isFail: n(r.code),
                    info: r.info
                }
            };
        }
    });
}, exports.updateOrderStatus = function(t) {
    return b.get("?do=store_order", {
        needTrack: !0,
        params: {
            op: "update",
            id: t
        },
        transform: function(t) {
            return a(t.status);
        }
    });
};