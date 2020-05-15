var t = function() {
    function t(t, i) {
        var e = [], a = !0, o = !1, r = void 0;
        try {
            for (var n, s = t[Symbol.iterator](); !(a = (n = s.next()).done) && (e.push(n.value), 
            !i || e.length !== i); a = !0) ;
        } catch (t) {
            o = !0, r = t;
        } finally {
            try {
                !a && s.return && s.return();
            } finally {
                if (o) throw r;
            }
        }
        return e;
    }
    return function(i, e) {
        if (Array.isArray(i)) return i;
        if (Symbol.iterator in Object(i)) return t(i, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), i = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("81749a27300a44e4ae95b30c438dea90.js")), e = require("50e3aa130a4f97a42ee2cf111c7b1d9d.js"), a = getApp();

module.exports = Behavior({
    behaviors: [ i.default ],
    properties: {
        adhesion: {
            type: String,
            value: "x"
        },
        margins: {
            type: Object,
            value: {
                left: 20,
                right: 20,
                top: 90,
                bottom: 110
            }
        }
    },
    data: {
        x: 1e3,
        y: 500,
        transition: !1,
        nearTop: !1,
        nearBottom: !1,
        enabled: !1
    },
    pageLifetimes: {
        show: function() {
            this.data.enabled && this.getPosition();
        }
    },
    attached: function() {
        a.adapt.iPhoneX && this.setData({
            "margins.bottom": this.data.margins.bottom + 68
        }), this.getPosition();
    },
    ready: function() {
        this.data.enabled && (this.limit(), this.setData({
            isReady: !0
        }));
    },
    methods: {
        getPositionFail: function() {},
        tap: function() {},
        getPosition: function() {
            var t = this, i = this.data.bubbleName;
            i && wx.getStorage({
                key: i + "-position",
                success: function(i) {
                    var e = i.data;
                    e && t.setData({
                        x: e.x,
                        y: e.y,
                        transition: !1
                    }), wx.nextTick(function() {
                        return t.limit();
                    });
                },
                fail: function() {
                    t.getPositionFail();
                }
            });
        },
        savePosition: function() {
            var t = this.data, i = t.bubbleName, e = t.x, a = t.y;
            i && wx.setStorage({
                key: i + "-position",
                data: {
                    x: e,
                    y: a
                }
            });
        },
        touchStart: function(t) {
            var i = t.timeStamp, e = t.touches;
            this._startTime = i, this._isDrag = !0;
            var a = e[0], o = a.clientX, r = a.clientY;
            this._startX = o, this._startY = r, this._oriX = this.data.x, this._oriY = this.data.y, 
            this.setData({
                transition: !1
            });
        },
        touchMove: function(t) {
            var i = t.touches;
            if (this._isDrag) {
                var e = i[0], a = e.clientX, o = e.clientY, r = a - this._startX, n = o - this._startY;
                (this._isMove || (this._isMove = Math.abs(r) > 5 || Math.abs(n) > 5)) && this.setData({
                    x: this._oriX + r,
                    y: this._oriY + n,
                    expand: !1
                });
            }
        },
        touchEnd: function(t) {
            var i = t.timeStamp;
            t.touches;
            !this._isMove && i - this._startTime < 300 && this.tap(), this._isMove = this._isDrag = !1, 
            this.limit(!0);
        },
        limit: function() {
            var i = this, a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], o = wx.createSelectorQuery().in(this);
            o.selectViewport().boundingClientRect(), o.select("._shortcut-bubble-wrap").boundingClientRect(), 
            o.exec(function(o) {
                var r = t(o, 2), n = r[0], s = r[1];
                try {
                    var h = n.height, u = n.width, c = s.top, l = s.bottom, d = s.left, f = s.right, p = s.width, m = s.height, b = i.data, g = b.margins, v = b.x, x = b.y, y = {
                        top: (0, e.rpx2px)(g.top),
                        bottom: h - (0, e.rpx2px)(g.bottom),
                        left: (0, e.rpx2px)(g.left),
                        right: u - (0, e.rpx2px)(g.right)
                    };
                    y.top > c && (x += y.top - c), y.bottom < l && (x -= l - y.bottom), y.left > d && (v += y.left - d), 
                    y.right < f && (v -= f - y.right);
                    var _ = x - y.top < y.bottom - x, w = v - y.left < y.right - v;
                    i.data.adhesion.indexOf("x") > -1 && (v = w ? y.left : y.right - p), i.data.adhesion.indexOf("y") > -1 && (x = _ ? y.top : y.bottom - m), 
                    i.setData({
                        x: v,
                        y: x,
                        transition: a,
                        nearTop: _,
                        nearLeft: w
                    }), i.savePosition();
                } catch (t) {}
            });
        }
    }
});