var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../ea0481588cf938a76655373abf7c162d.js")), t = require("../../d1a7c028313deb5944bc534167fbcdc2.js"), a = getApp();

Page((0, e.default)({
    allowShare: !0,
    data: {
        mydate: "2018-01-01",
        loadingShow: !0
    },
    bindDateChange: function(e) {
        this.setData({
            mydate: e.detail.value
        });
    },
    onLoad: function(e) {
        this.setPageConfig();
        var t = new Date(), a = t.getFullYear() + "-" + (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-" + (t.getDate() < 10 ? "0" + t.getDate() : t.getDate());
        this.setData({
            mydate: a
        });
    },
    imgLoad: function() {
        this.setData({
            loadingShow: !1
        });
    },
    imgError: function() {
        this.setData({
            loadingShow: !1
        });
    },
    setPageConfig: function() {
        var e = this;
        a.http({
            url: a.apis.reserve_config
        }).then(function(t) {
          console.log(t);
            e.setData({
                pageConfig: t.set
            }), (e.data.pageConfig && e.data.pageConfig.thumb_post_url) || e.setData({
                loadingShow: !1
            });
        }, function(e) {
            wx.showToast({
                title: e,
                image: "/public/images/icon_error.png"
            });
        });
    },
    addReserveOne: function(e) {
        var t = this, i = e.detail.value.user, n = e.detail.value.tel, o = e.detail.value.msg, s = e.detail.formId;
        return null == i || void 0 == i || "" == i ? (wx.showToast({
            title: "姓名不能为空",
            image: "/public/images/icon_err.png",
            duration: 2e3
        }), !1) : null == n || void 0 == n || "" == n ? (wx.showToast({
            title: "电话不能为空",
            image: "/public/images/icon_err.png",
            duration: 2e3
        }), !1) : void a.http({
            url: a.apis.reserve_one,
            data: {
                uid: a.globalData.userInfo.id,
                user: i,
                tel: n,
                msg: o,
                mydate: t.data.mydate,
                formid: s
            }
        }).then(function(e) {
            wx.showToast({
                title: "提交成功",
                icon: "success",
                duration: 2e3
            }), t.setData({
                senduser: "",
                sendtel: "",
                sendmsg: ""
            });
        }, function(e) {
            wx.showToast({
                title: e,
                image: "/public/images/icon_error.png",
                duration: 2e3
            });
        });
    },
    reserveOne: function(e, t, i, n) {
        var o = this;
        a.http({
            url: a.apis.reserve_one,
            data: {
                uid: a.globalData.userInfo.id,
                user: e,
                tel: t,
                msg: i,
                mydate: this.data.mydate,
                formid: n
            }
        }).then(function(e) {
            wx.showToast({
                title: "提交成功",
                icon: "success",
                duration: 2e3
            }), o.setData({
                senduser: "",
                sendtel: "",
                sendmsg: ""
            });
        }, function(e) {
            wx.showToast({
                title: e,
                image: "/public/images/icon_error.png"
            });
        });
    },
    formSubmit: function(e) {
        var i = this, n = e.detail.value.user, o = e.detail.value.tel, s = e.detail.value.msg, r = e.detail.formId;
        return null == n || void 0 == n || "" == n ? (wx.showToast({
            title: "请输入姓名",
            image: "/public/images/icon_err.png",
            duration: 2e3
        }), !1) : null == o || void 0 == o || "" == o ? (wx.showToast({
            title: "请输入电话号码",
            image: "/public/images/icon_err.png",
            duration: 2e3
        }), !1) : null == s || void 0 == s || "" == s ? (wx.showToast({
            title: "请输入预约内容",
            image: "/public/images/icon_err.png",
            duration: 2e3
        }), !1) : void (i.data.pageConfig.reserve_money_format > 0 ? (0, t.getLoginCode)().then(function(e) {
            var t = e.code;
            a.http({
                url: a.apis.reserve_pay,
                method: "POST",
                contentType: 1,
                data: {
                    uid: a.globalData.userInfo.id,
                    code: t
                }
            }).then(function(e) {
                wx.requestPayment({
                    timeStamp: e.timeStamp,
                    nonceStr: e.nonceStr,
                    package: e.package,
                    signType: "MD5",
                    paySign: e.paySign,
                    success: function(e) {
                        i.reserveOne(n, o, s, r);
                    }
                });
            });
        }) : i.reserveOne(n, o, s, r));
    }
}));