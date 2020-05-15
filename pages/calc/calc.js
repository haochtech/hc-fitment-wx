var e = require("../../d1a7c028313deb5944bc534167fbcdc2.js"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../ea0481588cf938a76655373abf7c162d.js")), a = getApp(), i = require("../../5956ad5a3b848569cfa827d2073979fc.js");

Page((0, t.default)({
    allowShare: !0,
    title: "免费报价",
    data: {
        stylen: "1",
        myadpop: {},
        siteVersion: "",
        logo_url: "",
        loadingColor: a.maincolor ? a.maincolor : "#2fbd80",
        regionSelectCity: [ "请选择所在城市" ],
        houseType: [ [ "1室", "2室", "3室", "4室", "5室", "6室" ], [ "1厅", "2厅", "3厅", "4厅", "5厅", "6厅" ], [ "1厨", "2厨", "3厨", "4厨", "5厨", "6厨" ], [ "1卫", "2卫", "3卫", "4卫", "5卫", "6卫" ], [ "1阳", "2阳", "3阳", "4阳", "5阳", "6阳" ] ],
        houseTypeValue: [ 0, 0, 0, 0, 0 ],
        chars: [ "/public/calc/calc_0.png", "/public/calc/calc_1.png", "/public/calc/calc_2.png", "/public/calc/calc_3.png", "/public/calc/calc_4.png", "/public/calc/calc_5.png", "/public/calc/calc_6.png", "/public/calc/calc_7.png", "/public/calc/calc_8.png", "/public/calc/calc_9.png" ],
        calcNums: [],
        sendCity: "",
        sendArea: "",
        sendHostType: "",
        sendTel: "",
        loadingShow: !0
    },
    onLoad: function(e) {
        this.configSet(), a.globalData.userInfo.mobile && this.setData({
            sendTel: a.globalData.userInfo.mobile
        });
    },
    imgError: function() {
        this.setData({
            "pageConfig.thumb_url": "/images/image-error.svg",
            loadingShow: !1
        });
    },
    bindLinkClick: function(e) {
        a.sitefun.clickObjectLink(e, a);
    },
    imgLoad: function() {
        this.setData({
            loadingShow: !1
        });
    },
    configSet: function() {
        var e = this;
        if (this.setData({
            user: a.globalData.userInfo
        }), this.setPageConfig(), this.createNum(), this.interval = setInterval(this.createNum, 300), 
        this.setData({
            sendHostType: this.data.houseType[0][this.data.houseTypeValue[0]] + " " + this.data.houseType[1][this.data.houseTypeValue[1]] + " " + this.data.houseType[2][this.data.houseTypeValue[2]] + " " + this.data.houseType[3][this.data.houseTypeValue[3]] + " " + this.data.houseType[4][this.data.houseTypeValue[4]]
        }), void 0 != a.sys.config.mapkey && "" != a.sys.config.mapkey) {
            var t = new i({
                key: a.sys.config.mapkey
            });
            wx.getLocation({
                type: "gcj02",
                success: function(a) {
                    console.log(a), t.reverseGeocoder({
                        location: {
                            latitude: a.latitude,
                            longitude: a.longitude
                        },
                        success: function(t) {
                            var a = t.result.address_component;
                            e.setData({
                                "regionSelectCity[0]": a.province,
                                "regionSelectCity[1]": a.city,
                                "regionSelectCity[2]": a.district,
                                sendCity: a.province + " " + a.city + " " + a.district
                            });
                        }
                    });
                },
                error: function(e) {
                    console.log(e);
                }
            });
        }
    },
    setPageConfig: function() {
        var e = this;
        a.http({
            url: a.apis.calc_config
        }).then(function(t) {
            e.setData({
                pageConfig: t.set
            }), e.data.pageConfig.page_url || e.setData({
                loadingShow: !1
            });
        }, function(e) {
            wx.showToast({
                title: e,
                image: "/public/images/icon_error.png"
            });
        });
    },
    bindRegionChange: function(e) {
        var t = this;
        this.setData({
            regionSelectCity: e.detail.value
        }), t.setData({
            sendCity: t.data.regionSelectCity[0] + " " + t.data.regionSelectCity[1] + " " + t.data.regionSelectCity[2]
        });
    },
    bindAreaInput: function(e) {
        this.setData({
            sendArea: e.detail.value
        });
    },
    bindMultiPickerChange: function(e) {
        var t = this;
        this.setData({
            houseTypeValue: e.detail.value
        }), t.setData({
            sendHostType: t.data.houseType[0][t.data.houseTypeValue[0]] + " " + t.data.houseType[1][t.data.houseTypeValue[1]] + " " + t.data.houseType[2][t.data.houseTypeValue[2]] + " " + t.data.houseType[3][t.data.houseTypeValue[3]] + " " + t.data.houseType[4][t.data.houseTypeValue[4]]
        });
    },
    bindTelInput: function(e) {
        this.setData({
            sendTel: e.detail.value
        });
    },
    createNum: function() {
        for (var e = this, t = [], a = 0; a < 5; a++) {
            var i = Math.ceil(9 * Math.random());
            t.push(e.data.chars[i]);
        }
        e.setData({
            calcNums: t
        });
    },
    fomrSubmitCalc: function() {
        var e = this, t = e.data.sendCity, i = e.data.sendArea, n = e.data.sendHostType, o = e.data.sendTel;
        return null == t || void 0 == t || "" == t ? (wx.showModal({
            content: "请选择所在城市",
            showCancel: !1
        }), !1) : null == i || void 0 == i || "" == i ? (wx.showModal({
            content: "请输入房屋面积",
            showCancel: !1
        }), !1) : null == n || void 0 == n || "" == n ? (wx.showModal({
            content: "请选择户型",
            showCancel: !1
        }), !1) : null == o || void 0 == o || "" == o ? (wx.showModal({
            content: "请输入手机号码",
            showCancel: !1
        }), !1) : void a.http({
            url: a.apis.booking_step1,
            method: "POST",
            contentType: 1,
            data: {
                uid: e.data.user.id,
                name: e.data.user.nicename,
                scity: t,
                sarea: i,
                shouse: n,
                stel: o
            }
        }).then(function(e) {
            wx.redirectTo({
                url: "/pages/upinfo/upinfo?id=" + e
            });
        }, function(e) {
            wx.showModal({
                content: "提交失败",
                showCancel: !1
            });
        });
    },
    getPhoneNumber: function(t) {
        var i = this, n = t.detail.iv, o = t.detail.encryptedData;
        (0, e.getLoginCode)().then(function(e) {
            var t = e.code, s = e.isNew ? t : "";
            a.http({
                url: a.apis.smk_get_wx_phone,
                method: "POST",
                contentType: 1,
                data: {
                    code: s,
                    iv: n,
                    ed: o
                }
            }).then(function(e) {
                11 === String(e).length ? i.setData({
                    sendTel: e
                }) : wx.showModal({
                    content: "请求失败！",
                    showCancel: !1
                });
            }, function(e) {
                wx.showModal({
                    content: "请求失败！",
                    showCancel: !1
                });
            });
        });
    }
}));