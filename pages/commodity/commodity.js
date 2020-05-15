function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i]);
    }
    return t;
}, a = t(require("../../090627b750e3f7661b2722641b584ddf.js")), i = require("../../f5b982310b35490b3be56a448dd2faf8.js"), o = t(require("../../5026c32314a50fd0fc57f01c20f01774.js")), s = require("../../50e3aa130a4f97a42ee2cf111c7b1d9d.js"), n = require("../../05bb1be19e494870932877fad1b09e20.js"), r = getApp();

Page((0, a.default)({
    allowShare: !0,
    title: "商品详情",
    data: {
        commodityID: 0,
        commodityData: null,
        syscfg: void 0,
        stsModel: !1,
        commodityDetails: [],
        commodityParameters: [],
        mainHeight: "",
        buyData: {},
        shopcartData: {},
        isFavorite: !1,
        detailsTabsPosition: "static",
        detailsViewIndex: 0,
        tabItems: [ {
            id: 0,
            label: "概述"
        }, {
            id: 1,
            label: "参数"
        } ],
        statusViewConfig: {
            error: {
                icon: "error",
                btnText: "重试"
            }
        }
    },
    onLoad: function(t) {
        var e = this, a = [ {
            id: 0,
            label: (0, n.setI8n)("canshu")
        }, {
            id: 1,
            label: (0, n.setI8n)("gaishu")
        } ];
        this.setData({
            tabItems: a,
            "statusViewConfig.error.btnText": (0, n.setI8n)("chongshi")
        }), this.setDataByOptions([ {
            commodityID: "id"
        } ], t), this.setData({
            stsModel: r.stsModel
        });
        var i = setInterval(function() {
            r.sys && (e.setData({
                syscfg: r.sys
            }), clearInterval(i));
        }, 100);
        this.reLoad();
    },
    onShow: function() {
        this._showAgain && this.shopCartReload(), this._showAgain = !0;
    },
    onReady: function() {
        this._isReady = !0, this._waitWxml && this.wxmlReady();
    },
    wxmlReady: function() {
        var t = this;
        this._isReady ? (wx.createSelectorQuery().select(".main-view").boundingClientRect(function(e) {
            try {
                t.setData({
                    mainHeight: e.height + "px"
                });
            } catch (t) {}
        }).exec(), this.createIntersectionObserver({
            thresholds: [ 0, 1 ]
        }).relativeTo(".main-view").observe(".details-tabs-wrap", function(e) {
            t.setData({
                detailsTabsPosition: e.boundingClientRect.top <= 0 ? "fixed" : "static"
            });
        })) : this._waitWxml = !0;
    },
    reLoad: function() {
        var t = this;
        this.autoSetStatusView((0, i.getCommodityData)(this.data.commodityID), !0).then(function(a) {
            t.wxmlReady(), t.setData(e({}, a, {
                commodityDetails: (0, o.default)(a.commodityDetails, {
                    p: "padding: " + (0, s.rpx2px)(20) + "px;"
                }),
                commodityParameters: a.commodityParameters,
                pageTitle: t.title = a.commodityData.title
            }));
        });
    },
    previewImage: function(t) {
        var e = t.currentTarget.dataset.index, a = this.data.commodityData.images;
        wx.previewImage({
            urls: a,
            current: a[e]
        });
    },
    cartToggle: function() {
        this.selectComponent("#shopcart-view").toggle();
    },
    buyAction: function(t) {
        var e = t.currentTarget.dataset.mode;
        this.selectComponent("#commodity-buy").show({
            mode: e
        });
    },
    buyShow: function() {
        this.selectComponent("#commodity-buy").show();
    },
    shopCartReload: function() {
        this.selectComponent("#shop-cart").reLoad();
    },
    shopCartUpdate: function(t) {
        var e = t.detail;
        this.setData({
            shopcartData: e
        });
    },
    commodityBuyUpdate: function(t) {
        var e = t.detail;
        this.setData({
            buyData: e
        });
    },
    favoriteToggle: function() {
        var t = this, e = !this.data.isFavorite;
        (0, i.setCommodityFavorite)(this.data.commodityID, e).then(function(a) {
            t.setData({
                isFavorite: e
            });
        }, r.textToast);
    },
    tabChange: function(t) {
        var e = t.detail.value;
        this.setData({
            detailsViewIndex: e
        });
    }
}));