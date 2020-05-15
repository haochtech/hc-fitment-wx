var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../090627b750e3f7661b2722641b584ddf.js")), e = require("../../d1a7c028313deb5944bc534167fbcdc2.js"), i = require("../../3d561031ad5d7f73f3b271d03cf5d003.js"), a = getApp();

Page((0, t.default)({
    title: "我的地址",
    data: {
        callback: !1,
        list: [],
        editData: {
            id: void 0,
            name: "",
            phone: "",
            region: [],
            detail: "",
            isDefault: !1
        },
        statusViewConfig: {
            empty: {
                icon: "marker",
                text: "暂无地址，快去添加吧"
            },
            error: {
                icon: "error",
                btnText: "重试"
            }
        }
    },
    onLoad: function(t) {
        this.setDataByOptions([ "callback" ], t), t.title && (this.title = t.title), this.reLoad();
    },
    reLoad: function() {
        var t = this;
        this.autoSetStatusView((0, e.getAddressList)(!0), !0).then(function(e) {
            t.setData({
                list: e
            });
        });
    },
    selectItem: function(t) {
        var e = t.currentTarget;
        if (this.data.callback) {
            var i = e.dataset.index;
            a.pageCallBack(this.data.callback, this.data.list[i]);
        }
    },
    setItemDefault: function(t) {
        var i = this, a = t.currentTarget.dataset, s = a.id, n = a.index;
        (0, e.commitAddress)({
            id: s,
            isDefault: !this.data.list[n].isDefault
        }).then(function(t) {
            i.setData({
                list: t
            });
        });
    },
    editItem: function(t) {
        var e = t.currentTarget;
        this._editChange = !1;
        var i = e.dataset.index;
        this.setData({
            editData: Object.assign({
                id: void 0,
                name: "",
                phone: "",
                region: [],
                detail: "",
                isDefault: !1
            }, this.data.list[i])
        }), this.selectComponent("#edit-view").show();
    },
    editChange: function() {
        this._editChange = !0;
    },
    editSubmit: function(t) {
        var a = this, s = t.detail, n = s.formId, o = s.value;
        (0, i.reportFormID)(n), o.id = this.data.editData.id, (0, e.commitAddress)(o).then(function(t) {
            a.setData({
                list: t
            }), a.autoSetStatusView(t), a.selectComponent("#edit-view").hide();
        });
    },
    tapMask: function() {
        var t = this.selectComponent("#edit-view");
        if (!this._editChange) return t.hide();
        wx.showModal({
            title: "地址编辑",
            content: "您的改动未提交，确定放弃编辑？",
            confirmColor: "#cc353c",
            success: function(e) {
                e.confirm && t.hide();
            }
        });
    },
    removeItem: function(t) {
        var i = this, a = t.currentTarget.dataset.id;
        wx.showModal({
            title: "地址管理",
            content: "确定删除此地址？",
            confirmColor: "#cc353c",
            success: function(t) {
                t.confirm && (0, e.removeAddress)(a).then(function(t) {
                    i.setData({
                        list: t
                    }), i.autoSetStatusView(t);
                });
            }
        });
    },
    chooseAddressByWechat: function() {
        var t = this;
        wx.chooseAddress({
            success: function(i) {
                var a = i.userName, s = i.telNumber, n = i.provinceName, o = i.cityName, r = i.countyName, c = i.detailInfo;
                (0, e.commitAddress)({
                    name: a,
                    phone: s,
                    region: [ n, o, r ],
                    detail: c
                }).then(function(e) {
                    t.setData({
                        list: e
                    }), t.autoSetStatusView(e);
                });
            },
            fail: function(e) {
                var i = e.errMsg;
                "chooseAddress:fail auth deny" === i ? t.selectComponent("#auth-setting-pop").show("通讯地址") : a.textToast(i, !0);
            }
        });
    },
    pickerChange: function(t) {
        var e = t.detail;
        this.setData({
            "editData.region": e.value
        }), this.editChange();
    }
}));