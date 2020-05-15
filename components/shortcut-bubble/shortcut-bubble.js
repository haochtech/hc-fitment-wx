var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../d3b31ef5fb85e2299c9024a013efcf24.js")), e = require("../../50e3aa130a4f97a42ee2cf111c7b1d9d.js"), a = getApp(), s = a.shortcutMenu;

Component({
    behaviors: [ t.default ],
    properties: {
        group: {
            type: String,
            observer: "update"
        },
        update: {
            type: null,
            observer: "update"
        },
        say: {
            type: String,
            observer: "sayObserver"
        },
        sayTime: {
            type: Number,
            value: 5e3
        }
    },
    data: {
        enabled: s.enabled,
        bubbleName: "shortcut-bubble",
        bgClass: (0, e.darkOrLight)(s.color || a.commonStyles.themeColor),
        hasMessageItem: !1,
        shortcutMenu: s,
        items: [],
        alone: !1,
        expand: !1,
        maskShow: !1,
        sayContent: ""
    },
    attached: function() {
        this.setData({
            enabled: s.enabled
        }), this.data.enabled && this.update();
    },
    methods: {
        getPositionFail: function() {
            this.say((this.data.alone ? this.data.items[0].helperSay : "") || s.helperSay, 5e3);
        },
        sayObserver: function(t) {
            t && this.say(t);
        },
        say: function(t) {
            var e = this, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.data.sayTime;
            clearTimeout(this._sayTimeout), this.setData({
                sayContent: t
            }), t && (this.setData({
                sayShow: !0
            }), this._sayTimeout = setTimeout(function() {
                e.setData({
                    sayShow: !1
                });
            }, a));
        },
        update: function() {
            var t = this, i = a.getCurrentPageUrl(), o = this.data.group.startsWith("*"), n = !1, r = s.items.filter(function(a) {
                var s = (o ? "*" + a.group === t.data.group : !a.group || a.group === t.data.group) && !(0, 
                e.matchUrl)(i, a.action);
                return s && a.messageItem && (n = !0), s;
            });
            this.setData({
                items: r,
                hasMessageItem: n,
                alone: 1 === r.length,
                enabled: r.length > 0,
                shortcutMenu: s,
                bgClass: (0, e.darkOrLight)(s.color || a.commonStyles.themeColor)
            });
        },
        close: function() {
            this.setData({
                expand: !1
            });
        },
        tap: function() {
            if (this.data.alone) a.actionRun(this.data.items[0].action); else {
                var t = !this.data.expand;
                t && this.setData({
                    maskShow: !0
                }), clearTimeout(this._sayTimeout), this.setData({
                    expand: t,
                    sayShow: !1
                });
            }
        },
        maskTransitionEnd: function() {
            this.data.expand || this.setData({
                maskShow: !1
            });
        }
    }
});