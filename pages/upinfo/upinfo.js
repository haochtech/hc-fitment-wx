var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../ea0481588cf938a76655373abf7c162d.js")), o = getApp();

Page((0, t.default)({
    allowShare: !0,
    data: {
        myadpop: {},
        authShow: !1,
        siteVersion: "",
        menusEnabled: "0",
        logo_url: "",
        step1_ID: 0,
        bookOne: {},
        bacePrice: {},
        selectBook1: "",
        selectBook2: "",
        selectBook3: "",
        selectBook4: ""
    },
    onLoad: function(t) {
        void 0 != t.id && this.setData({
            step1_ID: t.id
        }), this.setStpe1Price();
    },
    setStpe1Price: function() {
        var t = this;
        o.http({
            url: o.apis.booking_step1_get,
            data: {
                id: t.data.step1_ID
            }
        }).then(function(o) {
            t.setData({
                bookOne: o.booking,
                bacePrice: o.set
            });
        }, function(t) {
            wx.showToast({
                title: t,
                image: "/public/images/icon_error.png"
            });
        });
    },
    rcbook1: function(t) {
        this.data.selectBook1 = t.detail.value;
    },
    rcbook2: function(t) {
        this.data.selectBook2 = t.detail.value;
    },
    rcbook3: function(t) {
        this.data.selectBook3 = t.detail.value;
    },
    rcbook4: function(t) {
        this.setData({
            selectBook4: t.detail.value
        });
    },
    getBookOptions: function() {
        var t = this, o = t.data.selectBook1, e = t.data.selectBook2, a = t.data.selectBook3, n = t.data.selectBook4;
        return null == o || void 0 == o || "" == o ? (wx.showModal({
            content: "请选择装修类型",
            showCancel: !1
        }), !1) : null == e || void 0 == e || "" == e ? (wx.showModal({
            content: "请选择房屋状态",
            showCancel: !1
        }), !1) : null == a || void 0 == a || "" == a ? (wx.showModal({
            content: "请选择装修时间",
            showCancel: !1
        }), !1) : null == n || void 0 == n || "" == n ? (wx.showModal({
            content: "输入楼盘或小区",
            showCancel: !1
        }), !1) : "[" + o + "]" + ("[" + e + "]") + ("[" + a + "]") + ("[" + n + "]");
    },
    formSubmit: function(t) {
        var e = this, a = e.getBookOptions();
        a && o.http({
            url: o.apis.booking_step2,
            method: "POST",
            contentType: 1,
            data: {
                id: e.data.step1_ID,
                ops: a
            }
        }).then(function(t) {
            wx.showModal({
                title: "系统提示",
                content: "提交成功！我们的专员尽快与你联系请保持手机畅通！",
                showCancel: !1,
                success: function() {
                    wx.redirectTo({
                        url: "/pages/calc/calc"
                    });
                }
            });
        }, function(t) {
            wx.showModal({
                content: t,
                showCancel: !1
            });
        });
    }
}));