var t = require("../../f5b982310b35490b3be56a448dd2faf8.js"), e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../d60a1235283664dfe97c5c6418868a10.js")), a = getApp();

Component({
    behaviors: [ e.default ],
    options: {
        addGlobalClass: !0
    },
    data: {
        listMode: "immersive-dark",
        list: [],
        statusViewConfig: {
            empty: {
                icon: "warn",
                text: "还没有全景图"
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
        this.shortcutGroup = "", this.allowShare = !0;
    },
    attached: function() {
        var e = this;
        a.getConfig().then(function() {
            wx.showNavigationBarLoading(), e.setData({
                statusViewState: "loading"
            }), (0, t.getPanoramasListConfig)().then(function(t) {
                var a = t.listMode;
                e.setData({
                    listMode: a
                });
            }).finally(function() {
                e.reLoad();
            });
        });
    },
    methods: {
        reLoad: function(e) {
            var a = this;
            this._pager = this._pager || (0, t.getPanoramasListPager)(), this.autoSetPagerStatusView(this._pager.load(e), !0).then(function(t) {
                a.setData({
                    list: t
                });
            });
        },
        onReachBottom: function() {
            var t = this;
            this._pager && !this._pager.completed && this.autoSetPagerLoading(this._pager.next()).then(function(e) {
                var a = e.list;
                t.setData({
                    list: a
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
        }
    }
});