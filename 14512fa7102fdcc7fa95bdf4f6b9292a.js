function e(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
    return Array.from(e);
}

function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var i = t[r];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(t, r, i) {
        return r && e(t.prototype, r), i && e(t, i), t;
    };
}(), i = exports.Pager = function() {
    function i(e, r, n) {
        var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
        t(this, i), Object.assign(this, {
            requestCreater: e,
            cfgCreater: r,
            requestConfig: n,
            per: s,
            firstPage: a
        }), this.pageList = null, this.nextPending = !1, this.completed = !1, this.lastUpdateTime = {}, 
        this.pendingPromise = {};
    }
    return r(i, [ {
        key: "getAllItems",
        value: function() {
            var t = [], r = !0, i = !1, n = void 0;
            try {
                for (var s, a = this.pageList[Symbol.iterator](); !(r = (s = a.next()).done); r = !0) {
                    var o = s.value;
                    Array.isArray(o) && t.push.apply(t, e(o));
                }
            } catch (e) {
                i = !0, n = e;
            } finally {
                try {
                    !r && a.return && a.return();
                } finally {
                    if (i) throw n;
                }
            }
            return t;
        }
    }, {
        key: "load",
        value: function(e, t) {
            if (e || !this.pageList) return this.returnPage(this.firstPage, t);
            var r = this.getAllItems();
            return Promise.resolve(t ? r : {
                list: r,
                addList: [],
                completed: this.completed
            });
        }
    }, {
        key: "next",
        value: function() {
            var e = this;
            return this.nextPending ? Promise.reject({
                state: "loading"
            }) : this.completed ? Promise.reject({
                state: "completed"
            }) : (this.nextPending = !0, this.returnPage(this.pageList.length).finally(function() {
                e.nextPending = !1;
            }));
        }
    }, {
        key: "returnPage",
        value: function(e, t) {
            var r = this;
            return this.request(e).then(function(i) {
                var n = i.length < r.per;
                r.completed = n, r.pageList.length = e + r.firstPage;
                var s = r.getAllItems();
                return t ? s : {
                    list: s,
                    addList: i,
                    completed: r.completed
                };
            }, function(e) {
                return Promise.reject(t ? e : {
                    state: "error",
                    errMsg: e
                });
            });
        }
    }, {
        key: "request",
        value: function(e) {
            var t = this, r = this.cfgCreater(this.requestConfig, e) || this.requestConfig, i = this.requestCreater(r);
            return this.pendingPromise[e] = i, i.then(function(r) {
                return t.lastUpdateTime[e] = new Date().getTime(), t.pageList || (t.pageList = []), 
                t.pageList[e] = r, r;
            }).finally(function() {
                t.pendingPromise[e] = null;
            });
        }
    }, {
        key: "silentUpdate",
        value: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12e4;
            if (this.pageList) {
                var i = !1, n = function() {
                    i && t(e.getAllItems());
                };
                !function t(s) {
                    if (s > e.pageList.length - 1) return n();
                    var a = !e.lastUpdateTime[s] || new Date().getTime() - e.lastUpdateTime[s] > r, o = a ? e.request(s) : e.pendingPromise[s] || Promise.resolve(e.pageList[s]);
                    a && (i = !0), o.then(function(r) {
                        r.length >= e.per ? t(++s) : (e.completed = !0, e.pageList.length = s + e.firstPage, 
                        n());
                    }, function() {
                        t(++s);
                    });
                }(this.firstPage);
            }
        }
    } ]), i;
}(), n = function() {
    function e(r) {
        var i = r.requestCreater, n = r.cfgCreater, s = r.per, a = void 0 === s ? 10 : s, o = r.firstPage, u = void 0 === o ? 1 : o;
        t(this, e), Object.assign(this, {
            requestCreater: i,
            cfgCreater: n,
            per: a,
            firstPage: u
        });
    }
    return r(e, [ {
        key: "create",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = t.per, n = void 0 === r ? this.per : r, s = t.firstPage, a = void 0 === s ? this.firstPage : s;
            return new i(this.requestCreater, this.cfgCreater, e, n, a);
        }
    } ]), e;
}();

exports.default = n;