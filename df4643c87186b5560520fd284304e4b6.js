function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e) {
    return (e.indexOf("//") > -1 ? e.split("/").slice(0, 3).join("/") : e.split("/")[0]).split("?")[0];
}

function r(e) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
}

function n(e, t) {
    return t ? e.replace(/\/+$/, "") + (t.startsWith("?") ? "" : "/") + t.replace(/^\/+/, "") : e;
}

function i(e) {
    return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}

function o(e, t) {
    if (null !== e && void 0 !== e) if ("object" !== (void 0 === e ? "undefined" : u(e)) && (e = [ e ]), 
    Array.isArray(e)) for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e); else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
}

function a(e, t) {
    if (!t) return e;
    var r = void 0, n = [];
    if (o(t, function(e, t) {
        null !== e && void 0 !== e && (Array.isArray(e) ? t += "[]" : e = [ e ], o(e, function(e) {
            e instanceof Date ? e = e.toISOString() : null !== e && "object" === (void 0 === e ? "undefined" : u(e)) && (e = JSON.stringify(e)), 
            n.push(i(t) + "=" + i(e));
        }));
    }), r = n.join("&")) {
        var a = e.indexOf("#");
        -1 !== a && (e = e.slice(0, a)), e += (-1 === e.indexOf("?") ? "?" : "&") + r;
    }
    return e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, l = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), s = require("05bb1be19e494870932877fad1b09e20.js"), c = function() {
    function i() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        e(this, i), Object.assign(this, {
            defaultConfig: t,
            interceptor: r
        });
    }
    return l(i, [ {
        key: "request",
        value: function(e) {
            var i = this, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Promise(function(u, l) {
                try {
                    var c = i.interceptor.request, f = i.interceptor.response, p = Object.assign({
                        url: e,
                        header: {},
                        params: {},
                        data: {}
                    }, i.defaultConfig, o);
                    c && c(p);
                    var d = Object.assign({}, i.defaultConfig.params, p.params);
                    p.baseURL && !r(p.url) && (p.url = n(p.baseURL, p.url)), p.url = a(p.url, d);
                    for (var y = {
                        success: function(e) {
                            try {
                                var t = f ? f(e) : e;
                                if (p.transform) try {
                                    t = p.transform(t);
                                } catch (e) {
                                    throw "[Data Transform Error] " + e;
                                }
                                u(t);
                            } catch (e) {
                                l(e ? e.toString() : e);
                            }
                        },
                        fail: function(e) {
                            var r = e.errMsg;
                            "request:fail url not in domain list" === r ? r = "\n" + t(p.url) + "\n" + (0, s.setI8n)("urlNotInDomainList") : "request:fail timeout" === r && (r = (0, 
                            s.setI8n)("requestFailTimeout")), l(r);
                        }
                    }, g = [ "url", "data", "header", "method", "dataType", "responseType" ], v = 0; v < g.length; v++) {
                        var b = g[v], h = p[b];
                        h && (y[b] = h);
                    }
                    wx.request(y);
                } catch (e) {
                    l(e ? e.toString() : e);
                }
            });
        }
    }, {
        key: "get",
        value: function(e, t) {
            return this.request(e, Object.assign({}, t, {
                method: "GET"
            }));
        }
    }, {
        key: "post",
        value: function(e, t) {
            return this.request(e, Object.assign({}, t, {
                method: "POST"
            }));
        }
    } ]), i;
}();

exports.default = c;