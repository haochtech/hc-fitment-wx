var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../d60a1235283664dfe97c5c6418868a10.js")), e = require("../../f5b982310b35490b3be56a448dd2faf8.js"), o = getApp();

Component({
    behaviors: [ t.default ],
    options: {
        addGlobalClass: !0
    },
    data: {
        list: [],
        statusViewConfig: {
            error: {
                icon: "error",
                btnText: "重试"
            }
        },
        pagerLoadingConfig: {
            completed: {
                text: "没有更多了"
            }
        }
    },
    created: function() {
        this.shortcutGroup = "shop", this.allowShare = !0;
    },
    attached: function() {
        this.reLoad();
    },
    methods: {
        reLoad: function() {
            var t = this;
            return this.autoSetStatusView((0, e.getHomeData)(), !0).then(function(e) {
                t.setData(e);
            });
        },
        onPullDownRefresh: function() {
            var t = this;
            (0, e.getHomeData)().then(function(e) {
                t.setData(e);
            }, o.textToast).finally(wx.stopPullDownRefresh);
        }
    }
});