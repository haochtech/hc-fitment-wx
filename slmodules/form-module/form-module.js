var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, t = getApp(), a = require("../../5956ad5a3b848569cfa827d2073979fc.js");

Component({
    properties: {
        formData: {
            type: Array,
            value: []
        },
        labelShow: {
            type: Number,
            value: 0
        },
        caseId: {
            type: Number,
            value: 1
        },
        caseName: {
            type: String,
            value: ""
        }
    },
    attached: function() {
        this.getCity();
    },
    data: {
        regionSelectCity: [ "请选择所在城市" ],
        selectIndex: 0,
        color: t.sys ? t.sys.color : {},
        dataVal: ""
    },
    methods: {
        formSubmit: function(a) {
            var i = this;
            for (var o in a.detail.value) {
                if (!a.detail.value[o].length) return wx.showModal({
                    content: "请输入" + o,
                    showCancel: !1
                }), !1;
                "object" === e(a.detail.value[o]) && (a.detail.value[o] = JSON.stringify(a.detail.value[o]));
            }
            var n = JSON.stringify(a.detail.value);
            t.http({
                url: t.apis.SL_save_form_data,
                method: "POST",
                data: {
                    ver: t.info.version,
                    uid: t.globalData.userInfo.id,
                    case_id: this.data.caseId,
                    case_name: this.data.caseName,
                    options: n
                }
            }).then(function(e) {
                e && 0 == e.data ? (wx.showToast({
                    title: "提交成功",
                    duration: 2e3
                }), i.triggerEvent("reload", "reload")) : wx.showToast({
                    title: "提交失败，请检查您的网络连接",
                    image: "/public/images/icon_err.png",
                    duration: 2e3
                });
            });
        },
        getCity: function() {
            var e = this, i = this.data.formData.findIndex(function(e) {
                return "region" == e.type;
            });
            if (t.sys.config.mapkey && i > -1) {
                var o = new a({
                    key: t.sys.config.mapkey
                });
                wx.getLocation({
                    type: "gcj02",
                    success: function(t) {
                        o.reverseGeocoder({
                            location: {
                                latitude: t.latitude,
                                longitude: t.longitude
                            },
                            success: function(t) {
                                var a = t.result.address_component;
                                e.setData({
                                    "regionSelectCity[0]": a.province,
                                    "regionSelectCity[1]": a.city,
                                    "regionSelectCity[2]": a.district
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
        bindRegionChange: function(e) {
            this.setData({
                regionSelectCity: e.detail.value
            });
        },
        selectChange: function(e) {
            this.setData({
                selectIndex: e.detail.value
            });
        },
        dateChange: function(e) {
            this.setData({
                dataVal: e.detail.value
            });
        }
    }
});