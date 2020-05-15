var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../d60a1235283664dfe97c5c6418868a10.js")), a = getApp();

Component({
    behaviors: [ t.default ],
    options: {
        addGlobalClass: !0
    },
    data: {
        loadingShow: !0,
        markers: [],
        points: [],
        mybanner: {},
        myadsp: {},
        mylist: {},
        myListChild: [],
        mynav: {},
        adgroup: {},
        adgroupStyle: "",
        myDefaultPcl: {},
        myDefaultPclChild: {},
        titledf1: "",
        titledf2: "",
        titledf3: "",
        titlemore: "",
        titleactnews2: "",
        tabPclId: 0,
        tabId: 0,
        scrollLeft: 0,
        scrollDf2Left: 0,
        mySeekDesinger: {},
        nearbyDistrict: [],
        appurl: "",
        appurlShow: !1,
        siteCount: 0,
        lat: "",
        lng: "",
        hiddenMap: !1,
        loadmap: !1,
        styleType: "1",
        tabType: "1"
    },
    created: function() {
        this.shortcutGroup = "", this.allowShare = !0;
    },
    attached: function() {
        var t = this;
        console.log("default-onLoad"), this.setData({
            appurl: a.siteInfo.siteroot
        }), setTimeout(function() {
            a.sys || t.setData({
                appurlShow: !0
            });
        }, 5e3), a.getConfig().then(function() {
            t.setPageData();
        }), console.log(this.translate);
    },
    methods: {
        onShow: function() {
            this.setData({
                hiddenMap: !1
            });
        },
        onHide: function() {
            this.setData({
                hiddenMap: !0
            });
        },
        mapMarkerTap: function(t) {
            var a = "/pages/districtDetail/districtDetail?id=" + t.markerId;
            a && wx.navigateTo({
                url: a
            });
        },
        bindLinkClick: function(t) {
            a.sitefun.clickObjectLink(t, a);
        },
        setMap: function() {
            var t = this, a = this.data.points;
            this.mapCtx = wx.createMapContext("map");
            var e = [], i = !0, n = !1, s = void 0;
            try {
                for (var o, l = a[Symbol.iterator](); !(i = (o = l.next()).done); i = !0) {
                    var r = o.value;
                    r.coordinate_format && r.coordinate_format.qq && e.push({
                        id: r.id,
                        latitude: r.coordinate_format.qq.lat,
                        longitude: r.coordinate_format.qq.lng,
                        iconPath: "/public/images/location.png",
                        width: 46,
                        height: 46,
                        callout: {
                            display: "ALWAYS",
                            content: " " + r.title + " ",
                            borderRadius: 4,
                            padding: 4,
                            fontSize: 12,
                            borderWidth: 1,
                            borderColor: "#2fbd80",
                            color: "#ffffff",
                            bgColor: "#2fbd80",
                            textAlign: "left"
                        }
                    });
                }
            } catch (t) {
                n = !0, s = t;
            } finally {
                try {
                    !i && l.return && l.return();
                } finally {
                    if (n) throw s;
                }
            }
            wx.getLocation({
                type: "wgs84",
                success: function(a) {
                    t.setData({
                        lat: a.latitude,
                        lng: a.longitude
                    }), t.setData({
                        loadmap: !0
                    });
                }
            }), this.setData({
                markers: e
            });
        },
        setPageData: function() {
            var t = this;
            a.http({
                url: a.apis.indexdata
            }).then(function(a) {
                t.setData({
                    mybanner: a.adv,
                    mynav: a.nav,
                    adgroup: a.adgroup,
                    myadsp: a.adsp,
                    mySeekDesinger: a.seekdesinger,
                    myDefaultPcl: a.pcl,
                    mylist: a.actlist,
                    mynewslist1: a.newslist1,
                    mynewslist2: a.newslist2,
                    points: a.site.worksite,
                    siteCount: a.site.total,
                    nearbyDistrict: a.site.subdistrict
                }), (t.data.syscfg && "1" === t.data.syscfg.defaults.site_show) && t.setMap(), t.setListData(), "" != a.adgroup && 1 == a.adgroup.length && t.setData({
                    adgroupStyle: ""
                }), "" != a.adgroup && 2 == a.adgroup.length && t.setData({
                    adgroupStyle: "pic-2"
                }), "" != a.adgroup && 3 == a.adgroup.length && t.setData({
                    adgroupStyle: "pic-3"
                }), t.data.myDefaultPcl.length > 0 && t.setData({
                    myDefaultPclChild: t.data.myDefaultPcl[0].ones
                });
            }, function(t) {
                wx.showModal({
                    content: t,
                    showCancel: !1
                });
            });
        },
        clickSeekDesignerMore: function() {
            wx.navigateTo({
                url: "/pages/stylist/stylist"
            });
        },
        pclClick: function(t) {
            var e = this, i = t.currentTarget.dataset.id, n = t.currentTarget.dataset.typeId;
            this.setData({
                tabPclId: t.currentTarget.dataset.index,
                scrollLeft: 0
            }), a.http({
                url: a.apis.default_pcl_child,
                data: {
                    tid: i,
                    typeid: n
                }
            }).then(function(t) {
                "" != t && t.length > 0 ? e.setData({
                    myDefaultPclChild: t
                }) : e.setData({
                    myDefaultPclChild: []
                });
            }, function(t) {
                wx.showToast({
                    title: t,
                    image: "/public/images/icon_error.png"
                });
            });
        },
        clickPclListMore: function() {
            a.actionRun("@pic");
        },
        splitArray: function(t, a) {
            for (var e = [], i = parseInt(t.length / a), n = 0, s = 1; s <= i; s++) {
                var o = (s - 1) * a;
                e[n++] = t.slice(o, o + a);
            }
            return t.length - i * a > 0 && (e[n++] = t.slice(i * a)), e;
        },
        setListData: function() {
            for (var t = this, e = this, i = [], n = 0; n < e.data.mylist.length; n++) i[n] = new Promise(function(t, i) {
                wx.request({
                    url: a.apis.term_child,
                    data: {
                        tid: e.data.mylist[n].id
                    },
                    success: function(a) {
                        t("" != a.data && a.data.data.length > 0 ? e.splitArray(a.data.data, 8) : {});
                    },
                    error: function(t) {
                        i("erreo");
                    }
                });
            });
            Promise.all(i).then(function(a) {
                t.setData({
                    myListChild: a
                }), t.setData({
                    loadingShow: !1
                });
            }).catch(function(t) {
                console.log(t);
            });
        },
        navClick: function(t) {
            this.setData({
                tabId: parseInt(t.currentTarget.dataset.index),
                scrollDf2Left: 0
            });
        },
        listChange: function(t) {
            this.setData({
                tabId: t.detail.current
            });
        },
        clickListMore: function() {
            wx.navigateTo({
                url: "/pages/list/list?id=0"
            });
        },
        goToPic: function(t) {
            a.actionRun(t.currentTarget.dataset.url);
        },
        moreClick: function(t) {
            var a = t.currentTarget.dataset.itemid;
            wx.navigateTo({
                url: "/pages/actlist/actlist?tid=" + a
            });
        },
        moreClick2: function(t) {
            var a = t.currentTarget.dataset.itemid;
            wx.navigateTo({
                url: "/pages/actlist2/actlist2?tid=" + a
            });
        }
    }
});