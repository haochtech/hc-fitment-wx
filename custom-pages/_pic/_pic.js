function t(t, i, a) {
    return i in t ? Object.defineProperty(t, i, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[i] = a, t;
}

function i(t) {
    if (Array.isArray(t)) {
        for (var i = 0, a = Array(t.length); i < t.length; i++) a[i] = t[i];
        return a;
    }
    return Array.from(t);
}

var a = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../d60a1235283664dfe97c5c6418868a10.js")), e = require("../../f5b982310b35490b3be56a448dd2faf8.js"), n = require("../../8ad6060fc8343954a87212ef83583213.js"), s = getApp(), l = 0, r = 0, g = 0, c = 0;

Component({
    behaviors: [ a.default ],
    options: {
        addGlobalClass: !0
    },
    data: {
        listMode: "immersive-dark",
        list: [],
        singlePicList: [],
        multiPicList: [ {
            id: "2",
            uniacid: "2",
            displayorder: "0",
            name: "地中海风格小户型室内设计效果图",
            thumb: "images/2/2019/04/JzE7qB0X46348tX3r7MRRvbk8i3ZA3.jpg",
            pic_width: "2304",
            pic_height: "1536",
            thumb_url: "https://fox.tailea.com/attachment/images/2/2019/04/JzE7qB0X46348tX3r7MRRvbk8i3ZA3.jpg",
            sjs: {
                name: "洋洋",
                img: "/public/images/logo.png",
                flag: "现代简约、田园、欧式、日式"
            }
        }, {
            id: "1",
            uniacid: "2",
            displayorder: "0",
            name: "地中海风格小户型室内设计效果图",
            thumb: "images/2/2019/04/JzE7qB0X46348tX3r7MRRvbk8i3ZA3.jpg",
            pic_width: "2304",
            pic_height: "1536",
            thumb_url: "https://fox.tailea.com/attachment/images/2/2019/04/JzE7qB0X46348tX3r7MRRvbk8i3ZA3.jpg",
            sjs: {
                name: "洋洋",
                img: "/public/images/logo.png",
                flag: "现代简约、田园、欧式、日式"
            }
        } ],
        picn: "1",
        topHeight: s.getSizeData().height,
        pagerLoadingState: "",
        statusViewConfig: {
            empty: {
                icon: "warn",
                text: "还没有全景图"
            },
            error: {
                icon: "error",
                btnText: "重试"
            }
        },
        pagerLoadingConfig: {
            completed: {
                text: "没有更多了"
            }
        },
        picType: 0,
        tabAttr: {
            curHdIndex: -1,
            curBdIndex: -1
        },
        picTagMulti: {},
        bakPTM: {},
        picTagSingle: {},
        bakPTS: {},
        picListMulti: {
            psLeft: [],
            psRight: []
        },
        picListSingle: {
            psLeft: [],
            psRight: []
        },
        listSingle: [],
        listMulti: [],
        tempSingle: [],
        tempMulti: [],
        nextPageMulti: 2,
        nextPageSingle: 2,
        isBottomMulti: !1,
        isBottomSingle: !1,
        picOrderMulti: 0,
        picOrderMultiTitle: "综合排序",
        picOrderSingle: 0,
        picOrderSingleTitle: "综合排序",
        optionSelectMulti: [],
        optionSelectSingle: [],
        optionSearchStrMulti: "",
        optionSearchStrSingle: "",
        getParentId: 0,
        getOptsId: 0,
        picListMultiNum: 0,
        picListSingleNum: 0,
        notEmpty: !0,
        multiHeights: [],
        singleHeights: [],
        imgWidth: 0,
        singleData: [],
        multiData: [],
        offset: 0
    },
    created: function() {
        this.shortcutGroup = "", this.allowShare = !0;
    },
    attached: function() {},
    methods: {
        swapData: function(t, i) {
            l = 0, r = 0, g = 0, c = 0, this.upDataFn();
        },
        notTouch: function() {},
        upDataFn: function() {
            var t = this;
            s.getConfig().then(function() {
                var i = t.data.options;
                void 0 != i.typeid && t.setData({
                    picType: i.typeid,
                    getParentId: i.pid,
                    getOptsId: i.optsid
                }), 0 == t.data.getParentId && 0 !== t.data.picListMulti.psLeft.length || (t.setPicTag(), 
                wx.getSystemInfo({
                    success: function(i) {
                        var a = i.windowWidth;
                        t.setData({
                            imgWidth: 345 / (750 / a),
                            offset: 100 / (750 / a)
                        }), 0 == t.data.getParentId ? t.setPicList() : t.setData({
                            notEmpty: !1
                        });
                    }
                }), void 0 != i.typeid && "0" == i.typeid && t.setData({
                    optionSearchStrMulti: i.optsid
                }), void 0 != i.typeid && "1" == i.typeid && t.setData({
                    optionSearchStrSingle: i.optsid
                }), (0, e.getPanoramasListConfig)().then(function(i) {
                    var a = i.listMode;
                    t.setData({
                        listMode: a
                    });
                }).finally(function() {
                    t.reLoad();
                }));
            });
        },
        hideBoxShadow: function() {
            this.setData({
                "tabAttr.curBdIndex": -1
            });
        },
        goToPlay: function(t) {
            var i = t.detail;
            s.singleList = this.data.picListSingle.psLeft.concat(this.data.picListSingle.psRight), 
            wx.navigateTo({
                url: i
            });
        },
        setHeightData: function(t) {
            var a, e, n, s, l = this, r = [].concat(i(this.data[t])), g = !1;
            s = [].concat("listMulti" === t ? i(l.data.multiData) : i(l.data.singleData));
            for (var c = 0; c < r.length; c++) {
                g = !1;
                for (var o = 0; o < s.length; o++) if (r[c].id === s[o].id) {
                    g = !0;
                    break;
                }
                g || (a = parseFloat(r[c].pic_width), e = parseFloat(r[c].pic_height) / (a / this.data.imgWidth), 
                n = {
                    id: r[c].id,
                    height: e + l.data.offset
                }, s.push(n), "listMulti" === t ? l.setData({
                    multiData: s
                }) : l.setData({
                    singleData: s
                }));
            }
        },
        setPicListData: function(a) {
            for (var e, n = [].concat("1" == a ? i(this.data.tempSingle) : i(this.data.tempMulti)), s = 0, o = [].concat("1" == a ? i(this.data.singleData) : i(this.data.multiData)), d = [].concat("1" == a ? i(this.data.picListSingle.psLeft) : i(this.data.picListMulti.psLeft)), p = [].concat("1" == a ? i(this.data.picListSingle.psRight) : i(this.data.picListMulti.psRight)), u = "0" == a ? "picListMulti" : "picListSingle", h = 0; h < n.length; h++) for (var f = 0; f < o.length; f++) n[h].id === o[f].id && (s = o[f].height, 
            "1" == a ? g <= c ? (g += s, d.push(n[h])) : (c += s, p.push(n[h])) : l <= r ? (l += s, 
            d.push(n[h])) : (r += s, p.push(n[h])));
            this.setData((e = {}, t(e, u + ".psLeft", d), t(e, u + ".psRight", p), e));
        },
        autoSetPagerLoading: n.autoSetPagerLoading,
        reLoad: function(t) {
            var i = this;
            this._pager = this._pager || (0, e.getPanoramasListPager)(), this._pager.load(t).then(function(t) {
                var a = t.list;
                i.setData({
                    list: a
                });
            });
        },
        clickPicType: function(t) {
            this.setData({
                picType: t.currentTarget.dataset.tp
            });
        },
        clickOrderPanel: function(t) {
            var i = this, a = t.currentTarget.dataset.index;
            i.data.tabAttr.curHdIndex == a ? i.setData({
                "tabAttr.curHdIndex": -1,
                "tabAttr.curBdIndex": -1
            }) : i.setData({
                "tabAttr.curHdIndex": a,
                "tabAttr.curBdIndex": a
            });
        },
        setPicTag: function() {
            var t = this, i = "", a = "";
            s.http({
                url: s.apis.pic_tag,
                data: {
                    ptype: t.data.picType
                }
            }).then(function(e) {
                for (var n = {}, s = {}, l = 0, r = 0; r < e.single.length; r++) if (0 == e.single[r].parentid) {
                    l = 0, e.single[r].gl = 0;
                    for (g = 0; g < e.single.length; g++) e.single[g].parentid == e.single[r].id && l++;
                    n[e.single[r].id] = 100 * Math.ceil((l + 1) / 3) + 80;
                }
                for (r = 0; r < e.multi.length; r++) if (0 == e.multi[r].parentid) {
                    e.multi[r].gl = 0, l = 0;
                    for (var g = 0; g < e.multi.length; g++) e.multi[g].parentid == e.multi[r].id && l++;
                    s[e.multi[r].id] = 100 * Math.ceil((l + 1) / 3) + 80;
                }
                var c = JSON.stringify(e.multi), o = JSON.parse(c), d = JSON.stringify(e.single), p = JSON.parse(d);
                if (t.setData({
                    picTagMulti: e.multi,
                    bakPTM: o,
                    picTagSingle: e.single,
                    bakPTS: p,
                    multiHeights: s,
                    singleHeights: n
                }), t.data.getOptsId > 0 && 0 == t.data.picType) {
                    for (r = 0; r < e.multi.length; r++) e.multi[r].id == t.data.getOptsId && (i = e.multi[r].name);
                    for (r = 0; r < e.multi.length; r++) if (e.multi[r].id == t.data.getParentId) {
                        t.data.picTagMulti[r].name = i, t.data.picTagMulti[r].gl = t.data.getOptsId, t.setData({
                            picTagMulti: t.data.picTagMulti
                        }), t.optionGetListMulti();
                        break;
                    }
                } else if (t.data.getOptsId > 0 && 1 == t.data.picType) {
                    for (r = 0; r < e.single.length; r++) e.single[r].id == t.data.getOptsId && (a = e.single[r].name);
                    for (r = 0; r < e.single.length; r++) if (e.single[r].id == t.data.getParentId) {
                        t.data.picTagSingle[r].name = a, t.data.picTagSingle[r].gl = t.data.getOptsId, t.setData({
                            picTagSingle: t.data.picTagSingle
                        }), t.optionGetListSingle();
                        break;
                    }
                }
            }, function(t) {
                wx.showToast({
                    title: t,
                    image: "/public/images/icon_error.png"
                });
            });
        },
        calcHeight: function(t) {
            for (var i, a, e, n, s = 0; s < t.length; s++) a = parseFloat(t[s].pic_width), i = parseFloat(t[s].pic_height), 
            n = a / (e = this.data.imgWidth), t[s].pic_height = (i / n).toFixed(1), t[s].pic_width = e;
            return t;
        },
        setPicList: function() {
            var t = this, i = this;
            s.http({
                url: s.apis.pic_list,
                data: {
                  uid: t.data.user ? t.data.user.id : 0
                }
            }).then(function(a) {
                if ("2" !== t.data.picn) {
                    var e = t.calcHeight(a.multi), n = t.calcHeight(a.single);
                    l = 0, r = 0, g = 0, c = 0, i.setData({
                        listMulti: e,
                        listSingle: n,
                        tempMulti: e,
                        tempSingle: n,
                        notEmpty: !1
                    }), i.setHeightData("listMulti"), i.setHeightData("listSingle"), i.setPicListData("0"), 
                    i.setPicListData("1");
                } else t.setData({
                    notEmpty: !1
                });
            });
        },
        clickOptionOrderSingle: function(t) {
            var i = this, a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.str;
            i.setData({
                picOrderSingleTitle: e,
                picOrderSingle: a
            }), i.setData({
                "tabAttr.curHdIndex": -1,
                "tabAttr.curBdIndex": -1
            }), i.optionGetListSingle();
        },
        clickOptionOtherSingle: function(t) {
            var i = this, a = [], e = t.currentTarget.dataset.id, n = t.currentTarget.dataset.str, s = t.currentTarget.dataset.parentIndex, l = i.data.bakPTS;
            0 == e ? (i.data.picTagSingle[s].name = l[s].name, i.data.picTagSingle[s].gl = 0) : (i.data.picTagSingle[s].name = n, 
            i.data.picTagSingle[s].gl = e), i.setData({
                picTagSingle: i.data.picTagSingle
            }), i.setData({
                "tabAttr.curHdIndex": -1,
                "tabAttr.curBdIndex": -1
            });
            for (var r = 0; r < i.data.picTagSingle.length; r++) 0 == i.data.picTagSingle[r].parentid && a.push(i.data.picTagSingle[r].gl);
            i.setData({
                optionSearchStrSingle: a.join(",")
            }), i.optionGetListSingle();
        },
        optionGetListSingle: function() {
            var t = this, a = this;
            s.http({
                url: s.apis.pic_list_single_more,
                data: {
                    page: 1,
                    odr: a.data.picOrderSingle,
                    ops: a.data.optionSearchStrSingle
                }
            }).then(function(e) {
                if (g = 0, c = 0, "2" !== t.data.picn) {
                    a.setData({
                        "picListSingle.psLeft": [],
                        "picListSingle.psRight": []
                    });
                    for (var n = [].concat(i(a.data.listSingle)), s = t.calcHeight(e), l = [].concat(i(a.data.singleData)), r = 0; r < s.length; r++) {
                        for (var o = !1, d = 0; d < l.length; d++) if (s[r].id === l[d].id) {
                            o = !0;
                            break;
                        }
                        o || n.push(s[r]);
                    }
                    a.setData({
                        listSingle: n,
                        tempSingle: s,
                        nextPageSingle: 2
                    }), a.setHeightData("listSingle"), a.setPicListData("1");
                }
            }, function(t) {
                wx.showToast({
                    title: t,
                    image: "/public/images/icon_error.png"
                });
            });
        },
        getPicSingleMore: function() {
            var t = this, a = this;
            a.data.isBottomSingle || s.http({
                url: s.apis.pic_list_single_more,
                data: {
                    page: a.data.nextPageSingle,
                    odr: a.data.picOrderSingle,
                    ops: a.data.optionSearchStrSingle,
                  uid: a.data.user ? a.data.user.id:0
                }
            }).then(function(e) {
                if ("2" === t.data.picn) return t.setData({
                    singlePicList: t.data.singlePicList.concat(e),
                    nextPageSingle: a.data.nextPageSingle + 1
                }), void (0 === e.length && a.setData({
                    isBottomSingle: !0
                }));
                for (var n = [].concat(i(a.data.listSingle)), s = [].concat(i(a.data.listSingle)), l = t.calcHeight(e), r = 0; r < l.length; r++) {
                    for (var g = !1, c = 0; c < s.length; c++) if (s[c].id === l[r].id) {
                        g = !0;
                        break;
                    }
                    g || n.push(l[r]);
                }
                0 == e.length && a.setData({
                    isBottomSingle: !0
                }), a.setData({
                    listSingle: n,
                    tempSingle: e,
                    nextPageSingle: a.data.nextPageSingle + 1
                }), a.setHeightData("listSingle"), a.setPicListData("1");
            }, function(t) {
                wx.showToast({
                    title: t,
                    image: "/public/images/icon_error.png"
                });
            });
        },
        clickOptionOrderMulti: function(t) {
            var i = this, a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.str;
            i.setData({
                picOrderMultiTitle: e,
                picOrderMulti: a
            }), i.setData({
                "tabAttr.curHdIndex": -1,
                "tabAttr.curBdIndex": -1
            }), i.optionGetListMulti();
        },
        clickOptionOtherMulti: function(t) {
            var i = this, a = [], e = t.currentTarget.dataset.id, n = t.currentTarget.dataset.str, s = t.currentTarget.dataset.parentIndex, l = i.data.bakPTM;
            0 == e ? (i.data.picTagMulti[s].name = l[s].name, i.data.picTagMulti[s].gl = 0) : (i.data.picTagMulti[s].name = n, 
            i.data.picTagMulti[s].gl = e), i.setData({
                picTagMulti: i.data.picTagMulti
            }), i.setData({
                "tabAttr.curHdIndex": -1,
                "tabAttr.curBdIndex": -1
            });
            for (var r = 0; r < i.data.picTagMulti.length; r++) 0 == i.data.picTagMulti[r].parentid && a.push(i.data.picTagMulti[r].gl);
            i.setData({
                optionSearchStrMulti: a.join(",")
            }), i.optionGetListMulti();
        },
        optionGetListMulti: function() {
            var t = this, a = this;
            s.http({
                url: s.apis.pic_list_Multi_more,
                data: {
                    page: 1,
                    odr: a.data.picOrderMulti,
                    ops: a.data.optionSearchStrMulti
                }
            }).then(function(e) {
                if ("2" !== t.data.picn) {
                    a.setData({
                        isBottomMulti: !1
                    }), l = 0, r = 0, a.setData({
                        "picListMulti.psLeft": [],
                        "picListMulti.psRight": []
                    });
                    for (var n = [].concat(i(a.data.listMulti)), s = t.calcHeight(e), g = [].concat(i(a.data.multiData)), c = 0; c < s.length; c++) {
                        for (var o = !1, d = 0; d < g.length; d++) if (s[c].id === g[d].id) {
                            o = !0;
                            break;
                        }
                        o || n.push(s[c]);
                    }
                    a.setData({
                        listMulti: n,
                        tempMulti: s,
                        nextPageMulti: 2
                    }), a.setHeightData("listMulti"), a.setPicListData("0");
                } else t.setData({
                    multiPicList: e,
                    nextPageMulti: 2,
                    isBottomMulti: !1
                });
            }, function(t) {
                wx.showToast({
                    title: t,
                    image: "/public/images/icon_error.png"
                });
            });
        },
        getPicMultiMore: function() {
            var t = this, a = this;
            a.data.isBottomMulti || s.http({
                url: s.apis.pic_list_Multi_more,
                data: {
                    page: a.data.nextPageMulti,
                    odr: a.data.picOrderMulti,
                    ops: a.data.optionSearchStrMulti,
                  uid: a.data.user ? a.data.user.id:0
                }
            }).then(function(e) {
                if ("2" === t.data.picn) return t.setData({
                    multiPicList: t.data.multiPicList.concat(e),
                    nextPageMulti: a.data.nextPageMulti + 1
                }), void (0 === e.length && a.setData({
                    isBottomMulti: !0
                }));
                for (var n = [].concat(i(a.data.listMulti)), s = [].concat(i(a.data.listMulti)), l = t.calcHeight(e), r = 0; r < l.length; r++) {
                    for (var g = !1, c = 0; c < s.length; c++) if (s[c].id === l[r].id) {
                        g = !0;
                        break;
                    }
                    g || n.push(l[r]);
                }
                0 == e.length && a.setData({
                    isBottomMulti: !0
                }), a.setData({
                    listMulti: n,
                    tempMulti: e,
                    nextPageMulti: a.data.nextPageMulti + 1
                }), a.setHeightData("listMulti"), a.setPicListData("0");
            }, function(t) {
                wx.showToast({
                    title: t,
                    image: "/public/images/icon_error.png"
                });
            });
        },
        nextPage: function() {
            var t = this;
            this._pager && !this._pager.completed && this.autoSetPagerLoading(this._pager.next()).then(function(i) {
                var a = i.list;
                t.setData({
                    list: a
                });
            });
        },
        ifNeedNextPage: function() {
            var t = this;
            setTimeout(function() {
                var i = t.createSelectorQuery();
                i.selectViewport().boundingClientRect(), i.select(".products-list").boundingClientRect(), 
                i.exec(function(i) {
                    try {
                        i[1].height <= i[0].height && t.nextPage();
                    } catch (t) {}
                });
            }, 100);
        },
        onShow: function() {
            var t = this;
            this._pager && this._pager.silentUpdate(function(i) {
                t.setData({
                    list: i
                });
            });
        },
        onReachBottom: function() {
            var t = this;
            0 == t.data.picType ? t.data.isBottomMulti || t.getPicMultiMore() : 1 == t.data.picType ? this.data.isBottomSingle || t.getPicSingleMore() : this.nextPage();
        }
    }
});