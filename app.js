function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

function t(e) {
    if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
        return a;
    }
    return Array.from(e);
}

var a, o = require("/05bb1be19e494870932877fad1b09e20.js"), n = require("/9f739f6a607655dc1aeb9f686820bbaa.js"), i = require("/d1a7c028313deb5944bc534167fbcdc2.js");

require("/e7aef9b7e191dfdcbd9798d2c4ec1836.js");

var r = require("/50e3aa130a4f97a42ee2cf111c7b1d9d.js"), s = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    return t.default = e, t;
}(require("/f5b982310b35490b3be56a448dd2faf8.js")), c = wx.getSystemInfoSync().model, g = /iPhone( X| XR| XS|10,3|10,6|11)/.test(c), l = wx.getStorageSync("appUserInfo");

(l = l || null) && (0, i.saveData)(l), App({
    apis: n.apis,
    http: n.http,
    uidVersion: n.uidVersion,
    cacheData: n.cacheData,
    info: {
        version: "2.9.0",
        footerNavHover: 0,
        isLoadInterval: "",
        auth: 0
    },
    stsModel: g,
    globalData: {
        userInfo: l
    },
    config: {
        logo: "",
        defaultPage: "@shop",
        defaultTitle: "装修小程序",
        enableMessagesService: !1,
        imageHolder: {
            empty: "/images/image-empty.svg",
            error: "/images/image-error.svg"
        }
    },
    sys: null,
    singleList: [],
    maincolor: "",
    moduleName: "slwl_fitment",
    sitefun: require("/7d8bb0606e50d35e873201ffa2eb44c0.js"),
    siteInfo: require("/siteinfo.js"),
    presetWxapp: [],
    systemInfo: {},
    adapt: {},
    copyright: {},
    onLaunch: function(e) {
        console.log("onLaunch"), this.getConfig(), l && (0, n.uidVersion)(l.id, this.info.version);
        try {
            this.adapt.iPhoneX = g;
            var t = wx.getStorageSync("launch-count") || 0;
            wx.setStorageSync("launch-count", t + 1);
        } catch (e) {}
        s.injectConfig({
            baseURL: this.siteInfo.siteroot,
            params: {
                i: this.siteInfo.uniacid,
                m: this.moduleName,
                c: "entry",
                a: "wxapp",
                ver: this.info.version
            }
        });
        var a = e.path, o = e.query;
        this.pageRedirect({
            path: a,
            query: o
        });
    },
    onPageNotFound: function(e) {
        this.pageRedirect(e);
    },
    pageRedirect: function(e) {
        var t = e.path, a = e.query;
        t && (t.match(/^(>|\^|\/|@)/) || (t = "/" + t), this.smartTo({
            url: t,
            options: a,
            method: "reLaunch"
        }));
    },
    getSizeData: function() {
        var e = wx.getSystemInfoSync(), t = e.statusBarHeight, a = e.windowWidth, o = wx.getMenuButtonBoundingClientRect(), n = o.height, i = o.width, r = o.top - t, s = n + 2 * r;
        return {
            btnWidth: i,
            btnHeight: n,
            paddingT: r,
            paddingR: a - o.left,
            statusBarHeight: t,
            titleBarHeight: s,
            height: t + s + .008 * a
        };
    },
    reloadConfig: function() {
        return this._getConfigPromise = null, this.getConfig();
    },
    getConfig: function() {
        var e = this;
        return this._getConfigPromise || (this._getConfigPromise = this.http({
            url: this.apis.smk_config
        }).then(function(a) {
            var n;
            if ("string" != typeof a) {
                (0, o.setLang)(a.lang_name);
                var i = a.color, s = i.topcolor, c = i.maincolor, g = i.bottomfonthovercolor, l = i.subcolor, u = i.bottomcolor, h = a.menus, p = h.items;
                if ("1" === h.enabled) {
                    var f, d = {
                        pic: "@pic",
                        site: "@district?name=" + (0, o.getLanguage)().xiaoqu + "&cid=",
                        shop: "@shop",
                        tel: ":callPresetPhone",
                        location: ":openLocation",
                        default: "@index",
                        panorama: "@panorama",
                        products: "@product",
                        ucenter: "@me"
                    };
                    e.customNav.items = [], e.navPages = [], e.customNav.bgColor = u, (f = e.customNav.items).push.apply(f, t(p.map(function(t) {
                        var a = d[t.page_url] ? d[t.page_url] : t.page_url, n = {
                            label: t.title,
                            icon: t.icon.slice(5),
                            action: a
                        };
                        return "shop" === t.page_url && (n.items = [ {
                            label: (0, o.getLanguage)().shouye,
                            icon: "home",
                            action: "@shop"
                        }, {
                            label: (0, o.getLanguage)().fenlei,
                            icon: "category",
                            action: "@categories"
                        }, {
                            label: (0, o.getLanguage)().gouwuche,
                            icon: "shopcart",
                            action: "@shopcart"
                        } ], e.navPages.push("@shop", "@categories", "@shopcart")), n.action.startsWith("@") && e.navPages.push(n.action), 
                        n;
                    })));
                }
                e.sys = a, e.maincolor = c, e.sys.info = e.info, e.config.defaultTitle = a.config.appname, 
                e.commonStyles.themeColor = c, e.commonStyles.secondaryColor = l, e.commonStyles.activeColor = c, 
                e.commonStyles.nav.activeColor = g, e.commonStyles.titlebar.backgroundColor = s, 
                e.commonStyles.titlebar.frontColor = (0, r.getLightness)(s) > .7 ? "#000000" : "#ffffff", 
                e.commonStyles.themeColorFront = (0, r.getLightness)(c) > .7 ? "#000000" : "#ffffff", 
                Object.assign(e.shortcutMenu, {
                    enabled: !0,
                    helperSay: (0, o.getLanguage)().nhdwsskb,
                    items: [ {
                        group: "shop",
                        label: (0, o.getLanguage)().shouye,
                        action: "@shop",
                        icon: "home"
                    }, {
                        group: "shop",
                        label: (0, o.getLanguage)().fenlei,
                        action: "@categories",
                        icon: "category"
                    }, {
                        group: "shop",
                        label: (0, o.getLanguage)().gouwuche,
                        action: "@shopcart",
                        icon: "shopcart"
                    }, {
                        group: "shop",
                        label: (0, o.getLanguage)().lianxikefu,
                        action: ":callPresetPhone",
                        icon: "service"
                    } ]
                });
                var m = a.cpright;
                Object.assign(e.copyright, {
                    enabled: m.enabled_wxapp,
                    image: a.config.logo_url,
                    owner: m.copyright_wxapp_l1,
                    more: m.copyright_wxapp_l2,
                    action: m.tel ? ':callPhone("' + m.tel + '")' : ""
                }), (n = e.presetWxapp).push.apply(n, t((a.wxapp || []).map(function(e) {
                    return {
                        id: e.id,
                        appID: e.appid,
                        path: e.page_page
                    };
                })));
                e._getCurrentPage();
            } else e.sys = a;
        }, function(t) {
            e.sys = t;
        }).catch(function(t) {
            e.sys = err;
        }));
    },
    setUserData: function() {
        i.saveData.apply(void 0, arguments);
    },
    organization: {},
    commonStyles: {
        themeColor: "#333",
        secondaryColor: "#525762",
        themeColorFront: "#fff",
        activeColor: "#5c5c5e",
        page: {
            backgroundTopColor: "#f3f3f3",
            backgroundColor: "#f3f3f3",
            backgroundBottomColor: "#f3f3f3",
            backgroundTextStyle: "dark"
        },
        titlebar: {
            frontColor: "#ffffff",
            backgroundColor: "#1d1d21"
        },
        nav: {
            bgColor: "#fff",
            color: "#909090",
            activeColor: "#1d1d21"
        }
    },
    shortcutMenu: {
        enabled: !0,
        helperSay: (0, o.getLanguage)().nhdwsskb,
        items: [ {
            group: "shop",
            label: (0, o.getLanguage)().shouye,
            action: "@shop",
            icon: "home"
        }, {
            group: "shop",
            label: (0, o.getLanguage)().fenlei,
            action: "@categories",
            icon: "category"
        }, {
            group: "shop",
            label: (0, o.getLanguage)().gouwuche,
            action: "@shopcart",
            icon: "shopcart"
        }, {
            group: "shop",
            label: (0, o.getLanguage)().lianxikefu,
            action: ":callPresetPhone",
            icon: "service"
        } ]
    },
    navPages: [],
    customNav: {
        items: []
    },
    actionMethods: (a = {
        openLocation: function(e) {
            e instanceof Object && wx.openLocation(e);
        },
        copyText: function(e) {
            wx.setClipboardData({
                data: String(e),
                success: function() {
                    wx.showToast({
                        title: (0, o.getLanguage)().yifuzhi,
                        icon: "none",
                        duration: 1e3
                    });
                }
            });
        },
        callPhone: function(e) {
            wx.makePhoneCall({
                phoneNumber: String(e)
            });
        }
    }, e(a, "openLocation", function() {
        wx.openLocation({
            name: this.sys.config.name,
            address: this.sys.config.address,
            latitude: parseFloat(this.sys.config.coordinate.qq.lat),
            longitude: parseFloat(this.sys.config.coordinate.qq.lng),
            scale: 14
        });
    }), e(a, "callPresetPhone", function() {
        wx.makePhoneCall({
            phoneNumber: this.sys.config.tel
        });
    }), e(a, "navigateBack", function() {
        getCurrentPages().length > 1 ? wx.navigateBack() : this.actionRun(app.config.defaultPage);
    }), e(a, "toPresetWxapp", function(e) {
        var t = this, a = this.presetWxapp.find(function(t) {
            return t.id == e;
        });
        if (!a) return this.textToast((0, o.getLanguage)().zhaobudaoidw + " " + e + " " + (0, 
        o.getLanguage)().dyzxcx);
        wx.navigateToMiniProgram({
            appId: a.appID,
            path: a.path,
            fail: function(a) {
                var n = a.errMsg;
                "navigateToMiniProgram:fail invalid appid" === n ? t.textToast((0, o.getLanguage)().yzxcx + " [" + e + "] " + (0, 
                o.getLanguage)().dappidwx) : n.endsWith("is not in navigateToMiniProgramAppIdList") && t.textToast((0, 
                o.getLanguage)().yzxcx + " [" + e + "] " + (0, o.getLanguage)().dappidbz);
            }
        });
    }), a),
    _getCurrentPage: function() {
        var e = getCurrentPages();
        return e[e.length - 1];
    },
    getCurrentPageUrl: function(e, t, a) {
        if (!(e = e || this._getCurrentPage())) return "";
        if (!a && e.rewritePageUrl) return e.rewritePageUrl(t);
        var o = "/" + e.route;
        return t && (o += (0, r.optionsToQueryString)(e.options)), o;
    },
    pageCallBack: function(e, t) {
        var a = getCurrentPages(), o = a[a.length - 2];
        o && (o[e](t), wx.navigateBack());
    },
    tabs: [ ">index", ">pic", ">panorama", ">product", "/pages/ucenter/index/index", ">district", "@shop" ],
    smartToData: {},
    smartTo: function(e) {
        var t = this, a = arguments, n = this._getCurrentPage(), s = this.getCurrentPageUrl(null, !1, !0), c = e.data, g = (0, 
        r.urlParser)(e.url, e.options), l = g.url, u = g.pureUrl, h = g.options, p = !!this.navPages.find(function(e) {
            return (0, r.matchUrl)(e, u);
        }), f = !p && (0, r.matchUrl)(s, u), d = !!this.tabs.find(function(e) {
            return (0, r.matchUrl)(e, u);
        }), m = e.method || (p ? "switchTab" : f || d ? "redirectTo" : "navigateTo");
        if (p && "redirectTo" === m && (m = "switchTab"), [ "@index" ].includes(u) || i.userData.id) {
            if (u.startsWith("@")) {
                var y = p ? "/custom-pages/main/main" : "/custom-pages/sub/sub", b = (0, r.urlParser)(y, Object.assign({}, h, {
                    page: u.substring(1)
                }));
                l = b.url, u = b.pureUrl, h = b.options, f = (0, r.matchUrl)(s, u);
            }
        } else {
            var v = encodeURIComponent(l), x = (0, r.urlParser)("/pages/index/index", {
                url: v
            });
            l = x.url, u = x.pureUrl, h = x.options, m = "navigateTo";
        }
        e.url = "switchTab" === m ? u : l, "switchTab" === m && f ? n.onSmartToHere && n.onSmartToHere({
            options: h,
            data: c,
            method: m
        }) : this.smartToData[u] = {
            options: h,
            data: c,
            method: m
        };
        var w = e.fail;
        e.fail = function(n) {
            n.errMsg.endsWith("is not found") && t.textToast((0, o.getLanguage)().zbdym + ": " + u), 
            e.failToDefaultPage && t.smartTo({
                method: "reLaunch" === m ? "reLaunch" : void 0,
                url: t.config.defaultPage
            }), w && w.apply(void 0, a);
        }, wx[m](e);
    },
    actionRun: function(e) {
        for (var t = this, a = arguments.length, n = Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++) n[i - 1] = arguments[i];
        if (!(!e instanceof String) && "" !== e) switch ((e = this.sitefun.actionMap(e)).slice(0, 1)) {
          case "/":
          case ">":
          case "^":
          case "@":
            e = -1 !== e.indexOf("default") ? ">index" : e, this.smartTo({
                url: e
            });
            break;

          case ":":
            e.substring(1).replace(/^(\w+)(?:\((.*)\))?$/, function(e, a, o) {
                var i = a ? t.actionMethods[a] : null;
                i && (o = o ? JSON.parse("[" + o + "]") : n, i.apply(t, o));
            });
            break;

          default:
            e.match(/^https?:/) ? this.smartTo({
                url: ">web?url=" + e
            }) : this.textToast((0, o.getLanguage)().wzdz + ": " + e);
        }
    },
    onPageShow: function(e) {
        if (wx.hideTabBar(), e.title) e.setData({
            pageTitle: e.title
        }); else {
            var t = this.sys ? this.sys.config.appname : this.config.defaultTitle;
            e.setData({
                pageTitle: t
            });
        }
        this.setPageStyles(e.pageStyles), this.setTitlebarStyles(e.titlebarStyles), e.allowShare ? wx.showShareMenu() : wx.hideShareMenu();
        var a = this.smartToData["/" + e.route];
        this.smartToData = {}, a && e.onSmartToHere && e.onSmartToHere(a);
    },
    setTitlebarStyles: function(e) {
        e = Object.assign({}, this.commonStyles.titlebar, e), wx.setNavigationBarColor(e);
    },
    setPageStyles: function(e, a) {
        e = Object.assign.apply(Object, t(a ? [] : [ {} ]).concat([ this.commonStyles.page, e ])), 
        clearTimeout(this._setPageStylesTimeout);
    },
    successToast: function(e) {
        wx.showToast({
            title: e,
            icon: "success",
            duration: 1500
        });
    },
    textToast: function(e, t) {
        e && (t && e.endsWith("cancel") || wx.showToast({
            title: e.toString(),
            icon: "none",
            duration: 2e3
        }));
    }
});