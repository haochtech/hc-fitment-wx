function t(t, e) {
    return t.map(function(t) {
        -1 !== t.action.indexOf("default") && (t.action = "/pages/index/index");
        var i = (0, n.matchUrl)(e, t.action), u = t.label, a = Array.isArray(t.items) ? t.items.map(function(t) {
            var a = (0, n.matchUrl)(e, t.action);
            return a && (i = !0, u += "·" + t.label), Object.assign({}, t, {
                isActive: a
            });
        }) : [];
        return Object.assign({}, t, {
            label: u,
            isActive: i,
            items: a
        });
    });
}

var e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../81749a27300a44e4ae95b30c438dea90.js")), n = require("../../50e3aa130a4f97a42ee2cf111c7b1d9d.js"), i = getApp(), u = i.customNav;

Component({
    behaviors: [ e.default ],
    properties: {
        update: {
            type: null,
            observer: "update"
        }
    },
    data: {
        customNav: u,
        items: [],
        menuItems: [],
        menuHoverItemIndex: -1,
        menuShow: !1
    },
    methods: {
        update: function() {
            var e = i.getCurrentPageUrl();
            this.setData({
                customNav: u,
                items: t(u.items, e)
            });
        },
        openMenu: function(t) {
            var e = this, n = this.data.items[t].items;
            n && n.length && (this._menuOpened = !0, this.setData({
                menuShow: !0,
                menuItems: n,
                menuHoverItemIndex: ""
            }), clearTimeout(this._menuQueryTimeout), this._menuQueryTimeout = setTimeout(function() {
                for (var t = wx.createSelectorQuery().in(e), i = 0; i < n.length; i++) t.select("#_custom-nav-menu-item_" + i).boundingClientRect();
                t.exec(function(t) {
                    try {
                        e.menuItemsX = t.map(function(t) {
                            return t.left;
                        });
                    } catch (t) {}
                });
            }, 100));
        },
        closeMenu: function() {
            this._menuOpened = !1, this.setData({
                menuShow: !1,
                menuHoverItemIndex: -1
            });
        },
        onTouchStart: function(t) {
            var e = this, n = t.currentTarget;
            this._touchStartTimeout = setTimeout(function() {
                e.openMenu(n.dataset.index);
            }, 300);
        },
        onTouchEnd: function(t) {
            if (clearTimeout(this._touchStartTimeout), this._menuOpened) {
                var e = this.data.menuItems[this.data.menuHoverItemIndex];
                e && i.actionRun(e.action), this.closeMenu();
            }
        },
        onTouchMove: function(t) {
            var e = t.touches;
            if (this.menuItemsX && this._menuOpened) {
                var n = e[0].pageX, i = -1;
                this.menuItemsX.forEach(function(t, e) {
                    n > t && (i = e);
                }), this.setData({
                    menuHoverItemIndex: i
                });
            }
        },
        click: function(t) {
            var e = this, n = t.currentTarget.dataset.index, u = this.data.items[n];
            u.isActive ? (this._navClickTimeout = setTimeout(function() {
                e.openMenu(n);
            }, 100), u.lastClickTime && t.timeStamp - u.lastClickTime < 300 && (clearInterval(this._navClickTimeout), 
            this.triggerEvent("doubletaptab")), u.lastClickTime = t.timeStamp) : i.actionRun(u.action);
        }
    },
    attached: function() {
        this.update();
    }
});