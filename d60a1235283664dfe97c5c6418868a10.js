var t = require("8ad6060fc8343954a87212ef83583213.js"), o = require("05bb1be19e494870932877fad1b09e20.js"), a = getApp();

module.exports = Behavior({
    behaviors: [ "wx://component-export" ],
    data: {
        scrollTop: 0,
        commonStyles: a.commonStyles,
        options: {},
        statusViewState: "loading",
        pagerLoadingState: "",
        syscfg: a.sys,
        user: a.globalData.userInfo,
        i8n: (0, o.getLanguage)()
    },
    attached: function() {
        this.setData({
            commonStyles: a.commonStyles,
            syscfg: a.sys,
            user: a.globalData.userInfo,
            i8n: (0, o.getLanguage)()
        });
    },
    methods: {
        setDataByOptions: t.setDataByOptions,
        targetDataSet: t.targetDataSet,
        targetActionRun: t.targetActionRun,
        autoSetStatusView: t.autoSetStatusView,
        autoSetPagerLoading: t.autoSetPagerLoading,
        autoSetPagerStatusView: t.autoSetPagerStatusView,
        updateOptions: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data.options;
            this.setData({
                options: t
            }), this._page.options = Object.assign(t, {
                page: this._page.options.page
            });
        }
    },
    export: function() {
        var t = this, o = function(o) {
            return function() {
                if (t[o]) return t[o].apply(t, arguments);
            };
        };
        return {
            onShow: function() {
                return t.setData({
                    commonStyles: a.commonStyles,
                    syscfg: a.sys,
                    user: a.globalData.userInfo
                }), o("onShow")();
            },
            onHide: function() {
                return t._showAgain = !0, o("onHide")();
            },
            onSmartToHere: o("onSmartToHere"),
            onReachBottom: o("onReachBottom"),
            onShareAppMessage: o("onShareAppMessage"),
            onPullDownRefresh: o("onPullDownRefresh"),
            onDoubleTapTab: function() {
                return t.setData({
                    scrollTop: 0
                }), o("onDoubleTapTab")();
            },
            swapData: function(a, e) {
                return a.allowShare = t.allowShare, t._page = a, t.setData({
                    options: e || {}
                }), a.setData({
                    shortcutGroup: a.data.shortcutGroup = t.shortcutGroup || ""
                }), o("swapData")(a, e);
            }
        };
    }
});