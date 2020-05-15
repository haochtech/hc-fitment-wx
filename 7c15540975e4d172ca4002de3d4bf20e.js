function n(n) {
    if (Array.isArray(n)) {
        for (var r = 0, t = Array(n.length); r < n.length; r++) t[r] = n[r];
        return t;
    }
    return Array.from(n);
}

function r() {
    for (var n = arguments.length, r = Array(n), t = 0; t < n; t++) r[t] = arguments[t];
    if (0 === r.length) return function(n) {
        return n;
    };
    if (1 === r.length) return r[0];
    var e = r[r.length - 1], o = r.slice(0, -1);
    return function() {
        return o.reduceRight(function(n, r) {
            return r(n);
        }, e.apply(void 0, arguments));
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function(n) {
    return "function" == typeof n;
}, e = [ "onLoad", "onReady", "onShow", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onSmartToHere" ], o = function(n) {
    var r = {};
    return n.forEach(function(n) {
        var t = n.data, e = void 0 === t ? {} : t;
        Object.keys(e).forEach(function(n) {
            r[n] = e[n];
        });
    }), r;
}, u = function(n) {
    var r = {};
    return n.forEach(function(n) {
        var o = n.methods, u = void 0 === o ? {} : o;
        Object.keys(u).forEach(function(n) {
            t(u[n]) && (r[n] = u[n]);
        }), e.forEach(function(e) {
            t(n[e]) && (r[e] ? r[e] = r[e].concat(n[e]) : r[e] = [ n[e] ]);
        });
    }), r;
}, a = function(n, r) {
    return Object.keys(n).forEach(function(t) {
        void 0 === r[t] && (r[t] = n[t]);
    }), r;
}, i = function(o, u) {
    return Object.keys(o).forEach(function(a) {
        if (e.includes(a)) {
            var i = o[a];
            t(u[a]) && i.push(u[a]), u[a] = function() {
                var t = this;
                return r.apply(void 0, n(i.reverse().map(function(n) {
                    return n.bind(t);
                }))).apply(void 0, arguments);
            };
        } else null == u[a] && (u[a] = o[a]);
    }), u;
};

exports.default = function(r) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], e = r.mixins, c = void 0 === e ? [] : e;
    c.unshift.apply(c, n(t));
    var f = r.data || {}, s = o(c), h = u(c);
    return Object.assign(r, {
        data: a(s, f)
    }), r = i(h, r);
};