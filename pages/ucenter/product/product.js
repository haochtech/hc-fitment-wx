var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../090627b750e3f7661b2722641b584ddf.js")), e = require("../../../f5b982310b35490b3be56a448dd2faf8.js"), i = getApp();

Page((0, t.default)({
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
        this.allowShare = {}, this.title = "产品收藏";
    },
    onLoad: function() {
        var t = this;
        wx.showNavigationBarLoading(), this.title = "产品收藏", this.setData({
            statusViewState: "loading"
        }), (0, e.getProductsListConfig)().then(function(e) {
            var i = e.listMode;
            t.setData({
                listMode: i
            });
        }).finally(function() {
            t.reLoad();
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
    reLoad: function(t) {
        var a = this;
        this._pager = this._pager || (0, e.getProductsFavPager)({
            uid: i.globalData.userInfo.id,
            ver: i.info.version
        }), this.autoSetPagerStatusView(this._pager.load(t), !0).then(function(t) {
            a.setData({
                list: t
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
}));