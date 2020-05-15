var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../ea0481588cf938a76655373abf7c162d.js")), e = getApp(), a = require("../../public/wxParse/wxParse.js"), i = null;

Page((0, t.default)({
    allowShare: !0,
    data: {
        pageConfig: {},
        inputStatus: 0,
        loadingShow: !0,
        formData: [],
        labelShow: !1
    },
    onLoad: function(t) {
        this.setPageConfig();
    },
    imgLoadOver: function() {
        var t = this;
        wx.hideNavigationBarLoading(), t.setData({
            inputStatus: 1,
            loadingShow: !1
        });
    },
    setPageConfig: function() {
        var t = this, o = this;
        e.http({
            url: e.apis.style_config
        }).then(function(t) {
            t.set && (o.setData({
                pageConfig: t.set
            }), i = t.set.detail, a.wxParse("article", "html", i, o)), o.setData({
                loadingShow: !1
            });
        }, function(e) {
            wx.showToast({
                title: e,
                image: "/public/images/icon_error.png"
            }), t.setData({
                loadingShow: !1
            });
        });
    },
    formSubmit: function(t) {
        var a = this, i = t.detail.value.user, o = t.detail.value.tel, s = t.detail.formId;
        return null == i || void 0 == i || "" == i ? (wx.showToast({
            title: "姓名不能为空",
            image: "/public/images/icon_err.png",
            duration: 2e3
        }), !1) : null == o || void 0 == o || "" == o ? (wx.showToast({
            title: "电话不能为空",
            image: "/public/images/icon_err.png",
            duration: 2e3
        }), !1) : void wx.request({
            url: e.apis.style_post,
            data: {
                uid: e.globalData.userInfo.id,
                user: i,
                tel: o,
                formid: s
            },
            success: function(t) {
                0 == parseInt(t.data.errno) ? (wx.showToast({
                    title: "提交成功",
                    icon: "success",
                    duration: 2e3
                }), a.setData({
                    senduser: "",
                    sendtel: ""
                })) : wx.showToast({
                    title: "提交失败",
                    image: "/public/images/icon_err.png",
                    duration: 2e3
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: t,
                    image: "/public/images/icon_error.png"
                });
            }
        });
    }
}));