var a = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("../../0a1a8db6f2c546302a7c1cd1fe9eeb6e.js")), t = require("../../d1a7c028313deb5944bc534167fbcdc2.js"), e = getApp(), s = e.customNav;

Page((0, a.default)({
    allowShare: !1,
    data: {
        customNav: s,
        userData: t.userData,
        syscfg: void 0,
        stsModel: !1,
        ishome: !0
    },
    onLoad: function(a) {
        var t = this;
        wx.hideTabBar(), this.setData({
            customNav: s,
            stsModel: e.stsModel
        });
        var o = setInterval(function() {
            e.sys && (t.setData({
                syscfg: e.sys
            }), clearInterval(o));
        }, 100);
        this.onPageChange();
    },
    onPageScroll: function(a) {
        var t = a.scrollTop;
        this._pageScrollTop[this.data.page] = t;
    },
    onPageChange: function() {
        var a = this, t = s.items.find(function(t) {
            return t.action === a.data.pageUrl;
        });
        // t && "home" === t.icon ? this.setData({
        //     ishome: !0
        // }) : this.setData({
        //     ishome: !1
        // });
    },
    onDoubleTapTab: function() {
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 0
        }), this.currentPage && this.currentPage.onDoubleTapTab();
    }
}));