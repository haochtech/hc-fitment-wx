!function() {
    function t(t, r) {
        var n, e, i, o;
        try {
            n = t.toString().split(".")[1].length;
        } catch (t) {
            n = 0;
        }
        try {
            e = r.toString().split(".")[1].length;
        } catch (t) {
            e = 0;
        }
        if (o = Math.abs(n - e), i = Math.pow(10, Math.max(n, e)), o > 0) {
            var h = Math.pow(10, o);
            n > e ? (t = Number(t.toString().replace(".", "")), r = Number(r.toString().replace(".", "")) * h) : (t = Number(t.toString().replace(".", "")) * h, 
            r = Number(r.toString().replace(".", "")));
        } else t = Number(t.toString().replace(".", "")), r = Number(r.toString().replace(".", ""));
        return (t + r) / i;
    }
    function r(t, r) {
        var n, e, i, o;
        try {
            n = t.toString().split(".")[1].length;
        } catch (t) {
            n = 0;
        }
        try {
            e = r.toString().split(".")[1].length;
        } catch (t) {
            e = 0;
        }
        return i = Math.pow(10, Math.max(n, e)), o = n >= e ? n : e, ((t * i - r * i) / i).toFixed(o);
    }
    function n(t, r) {
        var n = 0, e = t.toString(), i = r.toString();
        try {
            n += e.split(".")[1].length;
        } catch (t) {}
        try {
            n += i.split(".")[1].length;
        } catch (t) {}
        return Number(e.replace(".", "")) * Number(i.replace(".", "")) / Math.pow(10, n);
    }
    function e(t, r) {
        var n, e, i = 0, o = 0;
        try {
            i = t.toString().split(".")[1].length;
        } catch (t) {}
        try {
            o = r.toString().split(".")[1].length;
        } catch (t) {}
        return n = Math.Number(t.toString().replace(".", "")), e = Math.Number(r.toString().replace(".", "")), 
        n / e * Math.pow(10, o - i);
    }
    Promise.prototype.finally || (Promise.prototype.finally = function(t) {
        var r = this.constructor;
        return this.then(function(n) {
            return r.resolve(t()).then(function() {
                return n;
            });
        }, function(n) {
            return r.resolve(t()).then(function() {
                throw n;
            });
        });
    }), String.prototype.padStart || (String.prototype.padStart = function(t, r) {
        return t >>= 0, r = String(void 0 !== r ? r : " "), this.length >= t ? String(this) : ((t -= this.length) > r.length && (r += r.repeat(t / r.length)), 
        r.slice(0, t) + String(this));
    }), String.prototype.padEnd || (String.prototype.padEnd = function(t, r) {
        return t >>= 0, r = String(void 0 !== r ? r : " "), this.length > t ? String(this) : ((t -= this.length) > r.length && (r += r.repeat(t / r.length)), 
        String(this) + r.slice(0, t));
    }), Number.prototype.add = function(r) {
        return t(r, this);
    }, Number.prototype.sub = function(t) {
        return r(this, t);
    }, Number.prototype.mul = function(t) {
        return n(t, this);
    }, Number.prototype.div = function(t) {
        return e(this, t);
    };
}();