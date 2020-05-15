Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("7c15540975e4d172ca4002de3d4bf20e.js")), e = require("8ad6060fc8343954a87212ef83583213.js"), a = require("05bb1be19e494870932877fad1b09e20.js"), o = getApp();

exports.default = function(n) {
    return (0, t.default)(n, [ {
        onShareAppMessage: e.onShareAppMessage,
        data: {
            commonStyles: o.commonStyles,
            statusViewState: "loading",
            pagerLoadingState: "",
            i8n: (0, a.getLanguage)(),
            pageTitle: ""
        },
        onShow: function() {
            this.setData({
                commonStyles: o.commonStyles,
                i8n: (0, a.getLanguage)()
            }), o.onPageShow(this);
        },
        onHide: function() {
            this._showAgain = !0;
        },
        methods: {
            targetDataSet: e.targetDataSet,
            targetActionRun: e.targetActionRun,
            setDataByOptions: e.setDataByOptions,
            autoSetStatusView: e.autoSetStatusView,
            autoSetPagerLoading: e.autoSetPagerLoading,
            autoSetPagerStatusView: e.autoSetPagerStatusView
        }
    } ]);
};