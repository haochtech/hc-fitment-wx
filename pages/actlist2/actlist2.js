function t(t, a, i) {
    return a in t ? Object.defineProperty(t, a, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = i, t;
}

var a = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../ea0481588cf938a76655373abf7c162d.js")), i = getApp();

Page((0, a.default)({
    allowShare: !0,
    data: {
        mynav: [],
        navCurrId: 0,
        list: [],
        nextPages: {},
        isBottoms: {},
        navIndex: 0,
        banner: [],
        swiperHeight: 0
    },
    onLoad: function(t) {
        this.setNav();
    },
    bindLinkClick: function(t) {
        i.sitefun.clickObjectLink(t, i);
    },
    setNav: function() {
        var t = this;
        i.http({
            url: i.apis.act_list_nav,
            data: {
                id: this.data.navCurrId
            }
        }).then(function(a) {
            t.setData({
                mynav: a.nav,
                banner: a.banner,
                navCurrId: a.nav[0].id
            }), t.initListData(), void 0 != a.nav && (t.data.navCurrId = a.nav[0].id);
        }, function(t) {
            wx.showToast({
                title: t,
                image: "/public/images/icon_error.png"
            });
        });
    },
    setSwithHeight: function() {
        var t = this, a = wx.createSelectorQuery();
        setTimeout(function() {
            a.select(".list-data-" + t.data.navCurrId).boundingClientRect(function(a) {
                var i = a.height;
                t.setData({
                    swiperHeight: i
                });
            }).exec();
        }, 200);
    },
    initListData: function() {
        for (var t = this, a = [], e = {}, n = {}, s = 0; s < this.data.mynav.length; s++) e[this.data.mynav[s].id] = !1, 
        n[this.data.mynav[s].id] = 2, i.actlist2_list_list || (a[s] = new Promise(function(a, e) {
            wx.request({
                url: i.apis.act_list_list,
                data: {
                    tid: t.data.mynav[s].id
                },
                success: function(t) {
                    a("" != t.data && t.data.data.length > 0 ? t.data.data : {});
                },
                error: function(t) {
                    e("erreo");
                }
            });
        }));
        this.setData({
            isBottoms: e,
            nextPages: n
        }), i.actlist2_list_list ? (this.setData({
            list: i.actlist2_list_list
        }), this.setSwithHeight()) : Promise.all(a).then(function(a) {
            t.setData({
                list: a
            }), i.actlist2_list_list = a, t.setSwithHeight();
        }).catch(function(t) {
            console.log(t);
        });
    },
    bindChange: function(t) {
        console.log(t);
    },
    navClick: function(t) {
        var a = t.detail;
        this.setData({
            navCurrId: a.value
        }), this.setSwithHeight();
    },
    listChange: function(t) {
        this.setData({
            navCurrId: this.data.list[t.detail.current][0].termid
        }), this.setSwithHeight();
    },
    getMore: function() {
        var a = this;
        this.data.isBottoms[this.data.navCurrId] || i.http({
            url: i.apis.smk_act_list_list,
            data: {
                tid: this.data.navCurrId,
                page: this.data.nextPages[this.data.navCurrId]
            }
        }).then(function(i) {
            var e = a.data.list;
            if (0 == i.length) a.setData(t({}, "isBottoms." + a.data.navCurrId, !0)); else for (var n = 0; n < e.length; n++) if (e[n][0].termid == a.data.navCurrId) {
                e[n] = e[n].concat(i);
                break;
            }
            a.setData(t({
                list: e
            }, "nextPages." + a.data.navCurrId, a.data.nextPages[a.data.navCurrId] + 1)), a.setSwithHeight();
        }, function(t) {
            wx.showToast({
                title: t,
                image: "/public/images/icon_error.png"
            });
        });
    },
    onReachBottom: function() {
        this.getMore();
    }
}));