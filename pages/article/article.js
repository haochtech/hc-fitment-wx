var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../ea0481588cf938a76655373abf7c162d.js")), a = getApp(), e = require("../../public/wxParse/wxParse.js"), s = null;

Page((0, t.default)({
    allowShare: !0,
    data: {
        detailId: "",
        actid: null,
        actdata: null,
        barTitle: "",
        tabShow: !0,
        btnColor: "",
        detailType: "",
        calcShow: !1,
        isBtnShow: !1,
        isOne: !1
    },
    setActContent: function() {
        var t = this, i = this.data.detailId, n = this.data.detailType + "_one";
        a.http({
            url: a.apis[n],
            data: {
                aid: i
            }
        }).then(function(a) {
            t.setData({
                actdata: a.one,
                barTitle: a.one.name,
                pageTitle: t.title = a.one.name
            }), s = a.one.detail, e.wxParse("article", "html", s, t);
        }, function(t) {
            wx.showToast({
                title: t,
                image: "/public/images/icon_error.png"
            });
        });
    },
    bindLinkClick: function(t) {
        a.sitefun.clickObjectLink(t, a);
    },
    onLoad: function(t) {
        a.sys.config.btn_act_bottom_status && 1 == parseInt(a.sys.config.btn_act_bottom_status) && this.setData({
            isBtnShow: !0
        }), a.sys.config.btn_act_bottom_calc_status && 1 == parseInt(a.sys.config.btn_act_bottom_calc_status) ? this.setData({
            calcShow: !0,
            isOne: !1
        }) : this.setData({
            isOne: !0,
            calcShow: !1
        }), this.setData({
            detailId: t.id,
            detailType: t.type
        }), this.setData({
            tabShow: "1" !== a.sys.config.act_calc_link_status,
            btnColor: a.sys.color.btncolor
        }), this.setActContent();
    }
}));