function e(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("8ad6060fc8343954a87212ef83583213.js"), n = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("7c15540975e4d172ca4002de3d4bf20e.js")), o = require("50e3aa130a4f97a42ee2cf111c7b1d9d.js"), a = getApp();

exports.default = function(r) {
    return (0, n.default)(r, [ {
        data: {
            commonStyles: a.commonStyles,
            page: "index",
            pageUrl: "@index",
            shortcutGroup: "",
            pageAlive: {},
            options: {},
            pageTitle: ""
        },
        onShareAppMessage: function() {
            return this.currentPage && this.currentPage.onShareAppMessage(), t.onShareAppMessage.bind(this)();
        },
        onLoad: function(e) {
            this._pageScrollTop = {}, this.updateOptions(e);
        },
        onSmartToHere: function(e) {
            this.updateOptions(e.options), this.currentPage && this.currentPage.onSmartToHere(e), 
            a.onPageShow(this);
        },
        onShow: function() {
            this.setData({
                commonStyles: a.commonStyles
            }), a.onPageShow(this), this.currentPage && this.currentPage.onShow();
        },
        onHide: function() {
            this._showAgain = !0, this.currentPage && this.currentPage.onHide();
        },
        onReachBottom: function() {
            this.currentPage && this.currentPage.onReachBottom();
        },
        onPullDownRefresh: function() {
            if (this.currentPage && this.currentPage.onPullDownRefresh) {
                var e = this.currentPage.onPullDownRefresh();
                e instanceof Promise ? e.finally(wx.stopPullDownRefresh) : wx.stopPullDownRefresh();
            } else wx.stopPullDownRefresh();
        },
        methods: {
            stopPropagation: t.stopPropagation,
            targetDataSet: t.targetDataSet,
            targetActionRun: t.targetActionRun,
            setDataByOptions: t.setDataByOptions,
            updateOptions: function(t) {
                if (t) {
                    var n = t.page || this.data.page, o = n !== this.data.page;
                    delete t.page, delete this.options.page, this.setData(e({
                        page: n,
                        pageUrl: "@" + n
                    }, "pageAlive." + n, !0)), wx.pageScrollTo({
                        scrollTop: this._pageScrollTop[n] || 0,
                        duration: 0
                    }), o && this.currentPage && this.currentPage.onHide();
                    var r = this.currentPage = this.selectComponent("#" + n);
                    if (!r) return a.textToast("找不到页面: " + n);
                    r.swapData(this, t), this.onPageChange && this.onPageChange(), o && r.onShow();
                }
            },
            rewritePageUrl: function(e) {
                return (0, o.urlParser)(this.data.pageUrl, e ? this.options : {}).url;
            }
        }
    } ]);
};