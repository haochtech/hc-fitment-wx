var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../ea0481588cf938a76655373abf7c162d.js")), t = require("../../d1a7c028313deb5944bc534167fbcdc2.js"), n = getApp();

Page((0, e.default)({
    data: {
        loading: !0,
        url: "@index",
        configError: !1,
        errMsg: "",
        errData: null
    },
    onLoad: function(e) {
        var t = this;
        wx.hideTabBar(), e.url && (this.data.url = decodeURIComponent(e.url)), n.getConfig().then(function() {
            if ("string" == typeof n.sys) {
                t.setData({
                    configError: !0
                });
                var e = -1 !== n.sys.indexOf("抱歉，您的平台账号服务已过期，请及时联系管理员") ? "抱歉，您的平台账号服务已过期，请及时联系管理员" : n.sys;
                t.setData({
                    errMsg: e,
                    errData: n.sys
                });
            } else t.setData({
                syscfg: n.sys
            }), t.setData({
                configError: !1
            }), n.globalData.userInfo ? t.enter() : t.setData({
                loading: !1
            });
        }).catch(function(e) {
            t.setData({
                configError: !0,
                loading: !1
            }), t.setData({
                errMsg: e,
                errData: e
            });
        });
    },
    reset: function() {
        var e = this;
        n.reloadConfig().then(function(t) {
            e.onLoad(e.options);
        });
    },
    notTouch: function() {},
  cancelLogin: function() {
    console.log('cancelLogin');

    var pages = getCurrentPages();
    if(pages.length==1) {
      wx.switchTab({
        url: '../../custom-pages/main/main',
      })
    } else {
      wx.navigateBack();
    }
  },
    bindGetUserInfoClick: function(e) {
      var a = this; console.log(n.apis.create_user);
        (0, t.getLoginCode)(!0).then(function(t) {
            var o = t.code;
            n.http({
                url: n.apis.create_user,
                method: "POST",
                contentType: 1,
                data: {
                    code: o,
                    nicename: e.detail.userInfo.nickName,
                    avatar: e.detail.userInfo.avatarUrl,
                    province: e.detail.userInfo.province,
                    city: e.detail.userInfo.city,
                    gender: e.detail.userInfo.gender
                }
            }).then(function(e) {
              console.log(e)
                void 0 != e ? (n.globalData.userInfo = e, a.setData({
                    user: e
                }), n.setUserData(e), n.uidVersion(e.id, n.info.version), wx.setStorageSync("appUserInfo", e), 
                void 0 != e.id && (n.globalData.userInfo.id = e.id), a.enter()) : (n.globalData.userInfo = void 0, 
                wx.showModal({
                    content: "获取用户信息失败",
                    showCancel: !1
                }));
            }, function(e) {
                wx.showModal({
                    content: "请求失败！",
                    showCancel: !1
                });
            });
        }, function(e) {
            wx.showModal({
                content: "获取用户登录态失败！",
                showCancel: !1
            });
        });
    },
    onShow: function() {
        this._isTo && n.smartTo({
            url: "@index"
        });
    },
    enter: function() {
        var e = this;
        this.setData({
            loading: !0
        }), n.getConfig().then(function() {
          console.log(e.data.url);
            n.smartTo({
                url: e.data.url
            }), e._isTo = !0;
        });
    }
}));