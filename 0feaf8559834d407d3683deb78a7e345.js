var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

!function(e, o) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = o(e) : "function" == typeof define && define.amd ? define(o) : o(e);
}("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : void 0, function(global) {
    var _Base64 = global.Base64, version = "2.4.9", buffer;
    if ("undefined" != typeof module && module.exports) try {
        buffer = eval("require('buffer').Buffer");
    } catch (e) {
        buffer = void 0;
    }
    var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b64tab = function(e) {
        for (var o = {}, r = 0, t = e.length; r < t; r++) o[e.charAt(r)] = r;
        return o;
    }(b64chars), fromCharCode = String.fromCharCode, cb_utob = function(e) {
        if (e.length < 2) return (o = e.charCodeAt(0)) < 128 ? e : o < 2048 ? fromCharCode(192 | o >>> 6) + fromCharCode(128 | 63 & o) : fromCharCode(224 | o >>> 12 & 15) + fromCharCode(128 | o >>> 6 & 63) + fromCharCode(128 | 63 & o);
        var o = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
        return fromCharCode(240 | o >>> 18 & 7) + fromCharCode(128 | o >>> 12 & 63) + fromCharCode(128 | o >>> 6 & 63) + fromCharCode(128 | 63 & o);
    }, re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, utob = function(e) {
        return e.replace(re_utob, cb_utob);
    }, cb_encode = function(e) {
        var o = [ 0, 2, 1 ][e.length % 3], r = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
        return [ b64chars.charAt(r >>> 18), b64chars.charAt(r >>> 12 & 63), o >= 2 ? "=" : b64chars.charAt(r >>> 6 & 63), o >= 1 ? "=" : b64chars.charAt(63 & r) ].join("");
    }, btoa = global.btoa ? function(e) {
        return global.btoa(e);
    } : function(e) {
        return e.replace(/[\s\S]{1,3}/g, cb_encode);
    }, _encode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(e) {
        return (e.constructor === buffer.constructor ? e : buffer.from(e)).toString("base64");
    } : function(e) {
        return (e.constructor === buffer.constructor ? e : new buffer(e)).toString("base64");
    } : function(e) {
        return btoa(utob(e));
    }, encode = function(e, o) {
        return o ? _encode(String(e)).replace(/[+\/]/g, function(e) {
            return "+" == e ? "-" : "_";
        }).replace(/=/g, "") : _encode(String(e));
    }, encodeURI = function(e) {
        return encode(e, !0);
    }, re_btou = new RegExp([ "[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}" ].join("|"), "g"), cb_btou = function(e) {
        switch (e.length) {
          case 4:
            var o = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
            return fromCharCode(55296 + (o >>> 10)) + fromCharCode(56320 + (1023 & o));

          case 3:
            return fromCharCode((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));

          default:
            return fromCharCode((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
        }
    }, btou = function(e) {
        return e.replace(re_btou, cb_btou);
    }, cb_decode = function(e) {
        var o = e.length, r = o % 4, t = (o > 0 ? b64tab[e.charAt(0)] << 18 : 0) | (o > 1 ? b64tab[e.charAt(1)] << 12 : 0) | (o > 2 ? b64tab[e.charAt(2)] << 6 : 0) | (o > 3 ? b64tab[e.charAt(3)] : 0), n = [ fromCharCode(t >>> 16), fromCharCode(t >>> 8 & 255), fromCharCode(255 & t) ];
        return n.length -= [ 0, 0, 2, 1 ][r], n.join("");
    }, atob = global.atob ? function(e) {
        return global.atob(e);
    } : function(e) {
        return e.replace(/[\s\S]{1,4}/g, cb_decode);
    }, _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(e) {
        return (e.constructor === buffer.constructor ? e : buffer.from(e, "base64")).toString();
    } : function(e) {
        return (e.constructor === buffer.constructor ? e : new buffer(e, "base64")).toString();
    } : function(e) {
        return btou(atob(e));
    }, decode = function(e) {
        return _decode(String(e).replace(/[-_]/g, function(e) {
            return "-" == e ? "+" : "/";
        }).replace(/[^A-Za-z0-9\+\/]/g, ""));
    }, noConflict = function() {
        var e = global.Base64;
        return global.Base64 = _Base64, e;
    };
    if (global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict,
        __buffer__: buffer
    }, "function" == typeof Object.defineProperty) {
        var noEnum = function(e) {
            return {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            };
        };
        global.Base64.extendString = function() {
            Object.defineProperty(String.prototype, "fromBase64", noEnum(function() {
                return decode(this);
            })), Object.defineProperty(String.prototype, "toBase64", noEnum(function(e) {
                return encode(this, e);
            })), Object.defineProperty(String.prototype, "toBase64URI", noEnum(function() {
                return encode(this, !0);
            }));
        };
    }
    return global.Meteor && (Base64 = global.Base64), "undefined" != typeof module && module.exports ? module.exports.Base64 = global.Base64 : "function" == typeof define && define.amd && define([], function() {
        return global.Base64;
    }), {
        Base64: global.Base64
    };
});