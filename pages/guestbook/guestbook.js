var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../ea0481588cf938a76655373abf7c162d.js")), t = getApp();

Page((0, e.default)({
    allowShare: !0,
    data: {
        senduser: "",
        sendtel: "",
        sendmsg: "",
        barTitle: "",
        pageConfig: {},
        loadingShow: !0,
        formData: [],
        labelShow: 0,
        caseId: "",
        caseName: ""
    },
    onLoad: function(e) {
        this.setPageConfig();
    },
    imgLoad: function() {
        this.setData({
            loadingShow: !1
        });
    },
    setPageConfig: function() {
        var e = this;
        t.http({
            url: t.apis.guestbook_config
        }).then(function(t) {
            t.set ? (e.setData({
                pageConfig: t.set
            }), e.data.pageConfig.thumb_post_url || e.setData({
                loadingShow: !1
            })) : e.setData({
                loadingShow: !1
            });
        });
    },
    formSubmit: function(e) {
        var a = this, o = e.detail.value.user, i = e.detail.value.tel, n = e.detail.value.msg, s = e.detail.formId;
        return null == o || void 0 == o || "" == o ? (wx.showToast({
            title: "姓名不能为空",
            image: "/public/images/icon_err.png",
            duration: 2e3
        }), !1) : null == i || void 0 == i || "" == i ? (wx.showToast({
            title: "电话不能为空",
            image: "/public/images/icon_err.png",
            duration: 2e3
        }), !1) : null == n || void 0 == n || "" == n ? (wx.showToast({
            title: "请输入留言内容",
            image: "/public/images/icon_err.png",
            duration: 2e3
        }), !1) : void t.http({
            url: t.apis.guestbook,
            method: "POST",
            contentType: 1,
            data: {
                user: o,
                tel: i,
                msg: n,
                formid: s
            }
        }).then(function(e) {
            console.log(e), wx.showToast({
                title: "提交成功",
                icon: "success",
                duration: 2e3
            }), a.setData({
                senduser: "",
                sendtel: "",
                sendmsg: ""
            });
        }, function(e) {
            console.log(res), wx.showToast({
                title: "提交失败",
                icon: "fail",
                duration: 2e3
            });
        });
    }
}));