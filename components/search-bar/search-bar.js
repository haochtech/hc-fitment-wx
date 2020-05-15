function t(t) {
    if (Array.isArray(t)) {
        for (var a = 0, e = Array(t.length); a < t.length; a++) e[a] = t[a];
        return e;
    }
    return Array.from(t);
}

var a = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../81749a27300a44e4ae95b30c438dea90.js")), e = require("../../50e3aa130a4f97a42ee2cf111c7b1d9d.js"), i = getApp(), r = function() {
    return (0, e.darkOrLight)(i.commonStyles.titlebar.backgroundColor);
};

Component({
    behaviors: [ a.default ],
    properties: {
        confirmAction: String,
        value: {
            type: String,
            observer: "update"
        },
        placeholder: {
            type: String,
            value: "搜索你要找的商品"
        }
    },
    data: {
        bgClass: r(),
        expand: !1,
        isFocus: !1,
        history: []
    },
    methods: {
        update: function(t) {
            this.setData({
                expand: !!this.data.value
            });
        },
        focus: function() {
            this.setData({
                expand: !0,
                isFocus: !0
            });
        },
        blur: function(t) {
            var a = !1 !== this._confirmValue ? this._confirmValue : t.detail.value;
            this.setData({
                expand: !!a,
                isFocus: !1
            }), this.triggerEvent("blur", {
                value: a
            }), this._confirmValue = !1;
        },
        inputConfirm: function(t) {
            var a = t.detail.value.trim();
            a && this.confirm(a);
        },
        confirm: function(t) {
            this._confirmValue = t;
            var a = this.data.confirmAction;
            a ? (i.actionRun(a.replace("{value}", t)), this.setData({
                expand: !1,
                isFocus: !1,
                value: ""
            }), this._confirmValue = "") : this.setData({
                value: t
            }), this.triggerEvent("confirm", {
                value: t
            }), this.addHistory(t);
        },
        addHistory: function(a) {
            var e = this.data.history;
            e.unshift(a), (e = [].concat(t(new Set(e)))).length > 5 && (e.length = 5), this.setData({
                history: e
            }), wx.setStorage({
                key: "search-history",
                data: e
            });
        },
        clearHistory: function() {
            var t = this.data.history;
            t.length = 0, this.setData({
                history: t
            }), wx.setStorage({
                key: "search-history",
                data: t
            });
        },
        historyClick: function(t) {
            var a = t.currentTarget.dataset.value;
            this.confirm(a);
        },
        updateStyle: function() {
            var t = this, a = r();
            this.setData({
                bgClass: a
            }), i.setPageStyles({
                backgroundColorTop: i.commonStyles.titlebar.backgroundColor,
                backgroundTextStyle: a
            }, !0), wx.getStorage({
                key: "search-history",
                success: function(a) {
                    var e = a.data;
                    e && t.setData({
                        history: e
                    });
                }
            });
        }
    },
    attached: function() {
        this.updateStyle();
    },
    pageLifetimes: {
        show: function() {
            this.updateStyle();
        }
    }
});