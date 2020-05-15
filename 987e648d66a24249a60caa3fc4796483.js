function e(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
    return Array.from(e);
}

function t() {
    (0, s.getNewMessages)().then(function(t) {
        t.length > 0 && (a.push.apply(a, e(t)), n(t.length));
    });
}

function r() {
    clearInterval(o), o = null, a.length = 0;
}

function n(e) {
    var t = {
        msgList: a,
        addNum: e
    };
    i.forEach(function(e, r) {
        r[e](t);
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.updateNewMessages = t, exports.start = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2e3;
    r(), o = setInterval(t, e);
}, exports.stop = r, exports.broadcast = n, exports.addReceiver = function(e, t) {
    i.set(e, t);
}, exports.removeReceiver = function(e) {
    i.delete(e);
}, exports.getMsgList = function() {
    return a;
};

var s = require("f5b982310b35490b3be56a448dd2faf8.js"), o = void 0, a = [], i = new Map();