Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.onShareAppMessage = function() {
    var a = this.allowShare instanceof Object ? this.allowShare : {}, r = a.title || this.title || e.config.defaultTitle, i = a.url || e.getCurrentPageUrl(this, !0), o = {
        title: r,
        path: (0, t.urlParser)(">index", {
            url: encodeURIComponent(i)
        }).url,
        success: a.success,
        fail: a.fail,
        complete: a.shareConfig
    };
    return console.log(o), o;
}, exports.targetDataSet = function(t) {
    var e = t.currentTarget;
    this.setData(e.dataset);
}, exports.targetActionRun = function(t) {
    var a = t.currentTarget.dataset, r = a.action, i = a.actionValue;
    console.log(a);console.log(r);console.log(i);
    return e.actionRun(r, i), {
        action: r,
        value: i
    };
}, exports.setDataByOptions = function(t, e) {
    if (e) {
        var a = {}, r = {}, i = t.map(function(t) {
            var e = t;
            if (t instanceof Object) {
                var a = Object.keys(t)[0];
                e = t[a], r[e] = a;
            }
            return e;
        });
        Object.keys(e).forEach(function(t) {
            i.includes(t) && void 0 !== e[t] && (a[r[t] || t] = e[t]);
        }), this.setData(a);
    }
}, exports.autoSetPagerStatusView = function(t, e) {
    if (t instanceof Promise) return this.autoSetStatusView(this.autoSetPagerLoading(t).then(function(t) {
        return t.list;
    }, function(t) {
        return Promise.reject(t.errMsg);
    }), e);
}, exports.autoSetStatusView = function(t, e) {
    var a = this;
    return t instanceof Promise || (t = Promise.resolve(t)), e && wx.showNavigationBarLoading(), 
    this.setData({
        statusViewState: "loading"
    }), this._autoSetStatusViewPromise = t, t.then(function(e) {
        a._autoSetStatusViewPromise === t && a.setData({
            statusViewState: Array.isArray(e) && !e.length ? "empty" : ""
        });
    }, function(e) {
        a._autoSetStatusViewPromise === t && a.setData({
            "statusViewConfig.error.text": e.toString(),
            statusViewState: "error"
        });
    }).finally(function() {
        e && wx.hideNavigationBarLoading();
    }), t;
}, exports.autoSetPagerLoading = function(t) {
    var e = this;
    return t instanceof Promise || (t = Promise.resolve(t)), this.setData({
        pagerLoadingState: "loading"
    }), this._autoSetPagerLoadingPromise = t, t.then(function(a) {
        var r = a.completed;
        e._autoSetPagerLoadingPromise === t && e.setData({
            pagerLoadingState: r ? "completed" : ""
        });
    }, function(a) {
        var r = a.state, i = a.errMsg;
        e._autoSetPagerLoadingPromise === t && e.setData({
            "pagerLoadingConfig.error.text": i || "",
            pagerLoadingState: r
        });
    }), t;
}, exports.stopPropagation = function() {
    return !1;
};

var t = require("50e3aa130a4f97a42ee2cf111c7b1d9d.js"), e = getApp();