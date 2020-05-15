var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../ea0481588cf938a76655373abf7c162d.js")), t = require("../../../d1a7c028313deb5944bc534167fbcdc2.js"), a = getApp();

Page((0, e.default)({
    data: {
        type: "",
        phone: "",
        hasPhone: !1,
        nickname: "",
        topH: a.getSizeData().height,
        ipx: a.stsModel,
        phoneDisable: !1
    },
    back: function() {
        wx.navigateBack();
    },
    submit: function(e) {
        var t = e.detail.value.phone, n = e.detail.value.pwd, o = e.detail.value.npwd, i = {
            uid: a.globalData.userInfo.id,
            ver: a.info.version
        };
        if ("设置手机号" === this.data.type) {
            if (!t) return wx.showModal({
                content: "请输获取手机号码",
                showCancel: !1
            });
            i.mobile = t;
        } else if ("设置/重设密码" === this.data.type) {
            if (!n) return wx.showModal({
                content: "请输入密码",
                showCancel: !1
            });
            if (!o) return wx.showModal({
                content: "请再次输入密码",
                showCancel: !1
            });
            if (n.length < 6 || n.length > 12) return wx.showModal({
                content: "密码在6到12位之间",
                showCancel: !1
            });
            if (n !== o) return wx.showModal({
                content: "两次输入密码不一致",
                showCancel: !1
            }), this.setData({
                pwd: "",
                npwd: ""
            });
            i.password = n;
        }
        a.http({
            url: a.apis.SL_update_user,
            data: i,
            method: "POST"
        }).then(function(e) {
            a.globalData.userInfo = e, wx.setStorageSync("appUserInfo", e), wx.navigateBack();
        });
    },
    getPhoneNumber: function(e) {
        var n = this;
        this.setData({
            phone: ""
        });
        var o = e.detail.iv, i = e.detail.encryptedData;
        (0, t.getLoginCode)().then(function(e) {
            var t = e.code, s = e.isNew ? t : "";
            a.http({
                url: a.apis.smk_get_wx_phone,
                method: "POST",
                contentType: 1,
                data: {
                    code: s,
                    iv: o,
                    ed: i
                }
            }).then(function(e) {
                11 === String(e).length ? n.setData({
                    phone: e
                }) : wx.showModal({
                    content: "请求失败！",
                    showCancel: !1
                });
            }, function(e) {
                wx.showModal({
                    content: "请求失败！",
                    showCancel: !1
                });
            });
        });
    },
    onLoad: function(e) {
        a.sys.config.mobile_edit_status && 1 == parseInt(a.sys.config.mobile_edit_status) ? this.setData({
            phoneDisable: !1
        }) : this.setData({
            phoneDisable: !0
        }), this.setData({
            type: e.type
        }), void 0 !== e.phone && this.setData({
            phone: e.phone
        }), void 0 !== e.nickname && this.setData({
            nickname: e.nickname
        });
    }
}));