function e(e) {
    return !e && s.addressList.length ? Promise.resolve(s.addressList) : t.getAddressList().then(function(e) {
        return s.addressList = e;
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.userData = void 0, exports.getLoginCode = function(e) {
    return new Promise(function(t, r) {
        s.loginCode && !e ? wx.checkSession({
            success: function() {
                t({
                    code: s.loginCode,
                    isNew: !1
                });
            },
            fail: function() {
                loginCode();
            }
        }) : wx.login({
            success: function(e) {
                var r = e.code;
                t({
                    code: s.loginCode = r,
                    isNew: !0
                });
            },
            fail: function(e) {
                var t = e.errMsg;
                r(t);
            }
        });
    });
}, exports.saveData = function(e) {
    Object.assign(s.userData, e);
}, exports.getAddressList = e, exports.getDefaultAddress = function() {
    return e().then(function(e) {
        return e.find(function(e) {
            return e.isDefault;
        }) || Promise.reject();
    });
}, exports.getAddressByID = function(t) {
    return e().then(function(e) {
        return e.find(function(e) {
            return e.id == t;
        }) || Promise.reject();
    });
}, exports.removeAddress = function(e) {
    return t.removeAddress(e).then(function(t) {
        var r = s.addressList.findIndex(function(t) {
            return t.id == e;
        });
        return -1 !== r && s.addressList.splice(r, 1), s.addressList;
    }, function(e) {
        return wx.showToast({
            title: "删除失败: " + e,
            icon: "none"
        }), Promise.reject(e);
    });
}, exports.commitAddress = function(e) {
    return t.commitAddress(e).then(function(t) {
        var r = void 0, n = void 0, i = s.addressList.find(function(t) {
            return t.id == e.id;
        });
        if (i ? (n = "修改", r = Object.assign(i, e)) : (n = "添加", r = Object.assign({}, e, {
            id: t.id
        }), s.addressList.push(r)), r.isDefault) {
            var o = s.addressList.find(function(e) {
                return e !== r && e.isDefault;
            });
            o && (o.isDefault = !1), s.addressList.sort(function(e, t) {
                return e.isDefault ? -1 : t.isDefault ? 1 : 0;
            });
        }
        return wx.showToast({
            title: n + "成功",
            icon: "success",
            duration: 1e3
        }), s.addressList;
    }, function(e) {
        return wx.showToast({
            title: e,
            icon: "none"
        }), Promise.reject(e);
    });
};

var t = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    return t.default = e, t;
}(require("f5b982310b35490b3be56a448dd2faf8.js")), s = {
    userData: {},
    addressList: [],
    loginCode: ""
};

exports.userData = s.userData;