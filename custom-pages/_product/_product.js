var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../d60a1235283664dfe97c5c6418868a10.js")), e = require("../../f5b982310b35490b3be56a448dd2faf8.js"), i = getApp();

Component({
    behaviors: [ t.default ],
    options: {
        addGlobalClass: !0
    },
    data: {
        listMode: "immersive-dark",
        list: [],
        statusViewConfig: {
            empty: {
                icon: "warn",
                text: "还没有产品"
            },
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
        this.shortcutGroup = "", this.allowShare = !0, this.title = "产品";
    },
    attached: function() {
        var t = this;
        i.getConfig().then(function() {
            wx.showNavigationBarLoading(), t.setData({
                statusViewState: "loading"
            }), (0, e.getProductsListConfig)().then(function(e) {
                var i = e.listMode;
                t.setData({
                    listMode: i
                });
            }).finally(function() {
                t.reLoad();
            });
        });
    },
    methods: {
        reLoad: function(t) {
            var i = this;
            this._pager = this._pager || (0, e.getProductsListPager)(), this.autoSetPagerStatusView(this._pager.load(t), !0).then(function(t) {
                i.setData({
                    list: t
                });
            });
        },
        onPullDownRefresh: function() {
            var t = this;
            return this._pager && this._pager.silentUpdate(function(e) {
                t.setData({
                    list: e
                });
            }, 0);
        },
        onShow: function() {
            var t = this;
            this._pager && this._pager.silentUpdate(function(e) {
                t.setData({
                    list: e
                });
            });
        },
        onReachBottom: function() {
            var t = this;
            this._pager && !this._pager.completed && this.autoSetPagerLoading(this._pager.next()).then(function(e) {
                var i = e.list;
                t.setData({
                    list: i
                });
            });
        }
    }
});