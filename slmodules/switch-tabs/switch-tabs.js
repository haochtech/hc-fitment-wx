var t = getApp();

Component({
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
                if (t !== e) {
                    var a = this.data.items.findIndex(function(e) {
                        return e.id == t;
                    });
                    this.triggerEvent("change", {
                        value: t,
                        index: a
                    });
                }
            }
        },
        nameKey: {
            type: String,
            value: "name"
        }
    },
    data: {
        indicatorGroup: {},
        activeColor: "",
        isFirst: !0
    },
    ready: function() {
        var e = this;
        this._isReady = !0, this.update();
        var a = setInterval(function() {
            t.sys && (e.setData({
                activeColor: t.sys.color.maincolor
            }), clearInterval(a));
        }, 100);
    },
    detached: function() {
        clearTimeout(this._readyTimeout);
    },
    methods: {
        targetDataSet: function(t) {
            var e = t.currentTarget;
            this.setData(e.dataset);
        },
        update: function() {
            var t = this;
            this._readyTimeout = setTimeout(function() {
                if (!t._isReady) return !1;
                var e = wx.createSelectorQuery().in(t);
                e.select("._switch-tabs-items-box").boundingClientRect();
                var a = !0, r = !1, i = void 0;
                try {
                    for (var n, o = t.data.items[Symbol.iterator](); !(a = (n = o.next()).done); a = !0) {
                        var s = n.value;
                        e.select("#_switch-tabs-item_" + s.id).boundingClientRect();
                    }
                } catch (t) {
                    r = !0, i = t;
                } finally {
                    try {
                        !a && o.return && o.return();
                    } finally {
                        if (r) throw i;
                    }
                }
                e.exec(function(e) {
                    try {
                        var a = e.shift(), r = a.top, i = a.left, n = {}, o = t.data.vertical;
                        e.forEach(function(e, a) {
                            var s = t.data.items[a].id;
                            n[s] = o ? "height:" + e.height + "px; transform:translate3D(0," + (e.top - r) + "px,0);" : "width:" + e.width + "px; transform:translate3D(" + (e.left - i) + "px,0,0);";
                        }), t.setData({
                            indicatorGroup: n,
                            current: t.data.current
                        }), t.setData({
                            isFirst: !1
                        });
                    } catch (t) {}
                });
            }, 100);
        }
    }
});