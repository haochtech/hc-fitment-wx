var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../81749a27300a44e4ae95b30c438dea90.js"));

Component({
    behaviors: [ t.default ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        scroll: Boolean,
        vertical: Boolean,
        items: {
            type: Array,
            value: [],
            observer: "update"
        },
        current: {
            type: null,
            observer: function(t, e) {
                t !== e && this.triggerEvent("change", {
                    value: t,
                    newID: t,
                    oldID: e
                });
            }
        }
    },
    data: {
        indicatorGroup: {}
    },
    ready: function() {
        this._isReady = !0, this.update();
    },
    detached: function() {
        clearTimeout(this._readyTimeout);
    },
    methods: {
        update: function() {
            var t = this;
            this._readyTimeout = setTimeout(function() {
                if (!t._isReady) return !1;
                var e = wx.createSelectorQuery().in(t);
                e.select("._switch-tabs-items-box").boundingClientRect();
                var r = !0, a = !1, i = void 0;
                try {
                    for (var o, n = t.data.items[Symbol.iterator](); !(r = (o = n.next()).done); r = !0) {
                        var s = o.value;
                        e.select("#_switch-tabs-item_" + s.id).boundingClientRect();
                    }
                } catch (t) {
                    a = !0, i = t;
                } finally {
                    try {
                        !r && n.return && n.return();
                    } finally {
                        if (a) throw i;
                    }
                }
                e.exec(function(e) {
                    try {
                        var r = e.shift(), a = r.top, i = r.left, o = {}, n = t.data.vertical;
                        e.forEach(function(e, r) {
                            var s = t.data.items[r].id;
                            o[s] = n ? "height:" + e.height + "px; transform:translate3D(0," + (e.top - a) + "px,0);" : "width:" + e.width + "px; transform:translate3D(" + (e.left - i) + "px,0,0);";
                        }), t.setData({
                            indicatorGroup: o,
                            current: t.data.current
                        });
                    } catch (t) {}
                });
            }, 100);
        }
    }
});