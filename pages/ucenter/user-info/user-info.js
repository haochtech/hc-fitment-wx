var a = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("../../../ea0481588cf938a76655373abf7c162d.js")), e = getApp();

Page((0, a.default)({
    title: "个人信息",
    data: {
        info: null
    },
    onLoad: function() {},
    onShow: function() {
        this.setData({
            info: e.globalData.userInfo
        });
    },
    onGotUserInfo: function(a) {
        var t = this, n = {
            nicename: a.detail.userInfo.nickName,
            avatar: a.detail.userInfo.avatarUrl,
            ver: e.info.version,
            uid: e.globalData.userInfo.id
        };
        e.http({
            url: e.apis.SL_update_user,
            method: "POST",
            data: n
        }).then(function(a) {
            a && a.id ? (e.globalData.userInfo.nicename = n.nicename, e.globalData.userInfo.avatar = n.avatar, 
            t.setData({
                info: e.globalData.userInfo
            }), e.setUserData(a), wx.setStorageSync("appUserInfo", e.globalData.userInfo), wx.showToast({
                title: "更新成功",
                icon: "success",
                duration: 1e3
            })) : wx.showModal({
                content: "获取用户信息失败",
                showCancel: !1
            });
        });
    }
}));