function r(r) {
    if (Array.isArray(r)) {
        for (var t = 0, e = Array(r.length); t < r.length; t++) e[t] = r[t];
        return e;
    }
    return Array.from(r);
}

function t(r) {
    return r.match(/^(>|\^)/) ? r.replace(/^([^?]+)(\?.*)?$/, function(r, t, e) {
        var n = t.substring(1);
        return (t = "/pages/" + n + "/" + n) + (e || "");
    }) : r;
}

function e(r, e) {
    var i = (r = t(r)).indexOf("?"), u = r.substr(0, i), a = {};
    return i > -1 ? a = n(r.substring(i)) : u = r, e && (Object.assign(a, e), r = u + o(a)), 
    {
        url: r,
        pureUrl: u,
        options: a
    };
}

function n(r) {
    for (var t = void 0, e = /([^&=]+)=?([^&]*)/g, n = r.substring(1), o = {}; t = e.exec(n); ) o[t[1]] = t[2];
    return o;
}

function o(r) {
    var t = Object.keys(r).filter(function(t) {
        return null != r[t];
    }).map(function(t) {
        return t + "=" + r[t];
    }).join("&");
    return t ? "?" + t : "";
}

function i(r) {
    var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    r = r.replace(t, function(r, t, e, n) {
        return t + t + e + e + n + n;
    });
    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);
    return e ? [ parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16) ] : null;
}

function u(r, t, e) {
    r /= 255, t /= 255, e /= 255;
    var n, o, i = Math.max(r, t, e), u = Math.min(r, t, e), a = (i + u) / 2;
    if (i == u) n = o = 0; else {
        var s = i - u;
        switch (o = a > .5 ? s / (2 - i - u) : s / (i + u), i) {
          case r:
            n = (t - e) / s + (t < e ? 6 : 0);
            break;

          case t:
            n = (e - r) / s + 2;
            break;

          case e:
            n = (r - t) / s + 4;
        }
        n /= 6;
    }
    return [ n, o, a ];
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.throttling = function(r, t) {
    var e = void 0;
    return function() {
        clearTimeout(e), e = setTimeout(r, t);
    };
}, exports.px2rpx = function(r) {
    return r * (750 / a);
}, exports.rpx2px = function(r) {
    return r / 750 * a;
}, exports.urlNormalize = t, exports.urlParser = e, exports.matchUrl = function(r, t) {
    return e(r).pureUrl === e(t).pureUrl;
}, exports.queryStringToOptions = n, exports.optionsToQueryString = o, exports.hexToRgb = i, 
exports.rgbToHsl = u, exports.getLightness = function(t) {
    return u.apply(void 0, r(i(t)))[2];
}, exports.darkOrLight = function(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .7, n = [ "dark", "light" ];
    return arguments[2] && n.reverse(), u.apply(void 0, r(i(t)))[2] < e ? n[0] : n[1];
}, exports.getImageInfo = function(r) {
    return new Promise(function(t, e) {
        wx.getImageInfo({
            src: r,
            success: function(e) {
                var n = e.width, o = e.height, i = e.path;
                i.match(/^[aA-zZ]+:\/\//) || (i = r), t({
                    width: n,
                    height: o,
                    path: i
                });
            },
            fail: function(t) {
                var n = t.errMsg;
                e(n + " (" + r + ")");
            }
        });
    });
};

var a = wx.getSystemInfoSync().windowWidth;