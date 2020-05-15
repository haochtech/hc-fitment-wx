function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../090627b750e3f7661b2722641b584ddf.js")), i = require("../../f5b982310b35490b3be56a448dd2faf8.js"), a = t(require("../../5026c32314a50fd0fc57f01c20f01774.js")), o = getApp(), n = o.organization, r = {
    product: i.getProductArticleByID
};

Page((0, e.default)({
    allowShare: !0,
    title: "",
    data: {
        type: "product",
        organization: n,
        article: {},
        statusViewConfig: {
            error: {
                icon: "error",
                btnText: "重试"
            }
        }
    },
    onShow: function() {
        this.setData({
            organization: n
        });
    },
    favFn: function() {
        var t = this, e = 1 === this.data.article.fav ? 0 : 1;
        o.http({
            url: o.apis.SL_pro_collect + "&op=post",
            data: {
                id: this.data.article.id,
                ver: o.info.version,
                uid: o.globalData.userInfo.id,
                isfav: e
            }
        }).then(function(i) {
            t.setData({
                "article.fav": e
            }), wx.showToast({
                title: "操作成功",
                icon: "succes",
                duration: 1500
            });
        });
    },
    onLoad: function(t) {
        this.setDataByOptions([ "id", "type" ], t), this.reLoad();
    },
    reLoad: function() {
        var t = this, e = this.data, i = e.id, n = e.type, s = r[n];
        o._getConfigPromise.then(function(e) {
            t.autoSetStatusView(s ? s(i) : Promise.reject("未知文章类型：" + n), !0).then(function(e) {
                e.content = (0, a.default)(e.content), t.setData({
                    article: e,
                    pageTitle: t.title = e.title
                });
            }, function(t) {
                console.log(t);
            });
        });
    },
    onReady: function() {
        this._isReady = !0, this._waitWxml && this.autoSetTitle();
    }
}));