function a(a) {
    if (Array.isArray(a)) {
        for (var t = 0, r = Array(a.length); t < a.length; t++) r[t] = a[t];
        return r;
    }
    return Array.from(a);
}

var t = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("../../ea0481588cf938a76655373abf7c162d.js")), r = getApp(), e = require("../../public/wxParse/wxParse.js"), o = null;

Page((0, t.default)({
    data: {
        pageConfig: {},
        loadingShow: !0,
        formData: [],
        labelShow: 0,
        caseId: "",
        caseName: "",
        formBanner: [],
        hasArticle: !1,
        hasFormData: !1,
        bg: ""
    },
    onLoad: function(a) {
        this.getFormData(a.id);
    },
    reload: function(t) {
        var r = [].concat(a(this.data.formData));
        this.setData({
            formData: []
        }), this.setData({
            formData: r
        });
    },
    getFormData: function(a) {
        var t = this;
        r.http({
            url: r.apis.SL_get_form_data,
            data: {
                uid: r.globalData.userInfo.id,
                ver: r.info.version,
                id: a
            }
        }).then(function(a) {
            for (var r = 0; r < a.list.length; r++) a.list[r].options && (a.list[r].options = JSON.parse(a.list[r].options));
            if (a.form_data.detail && (o = a.form_data.detail, e.wxParse("article", "html", o, t), 
            t.setData({
                hasArticle: !0
            })), a.form_banner && a.form_banner.length && t.setData({
                formBanner: a.form_banner
            }), a.list && a.list.length && t.setData({
                formData: a.list
            }), a.form_data && Object.keys(a.form_data).length) {
                var n = a.form_data.imbg.replace(/^\s+|\s+$/g, ""), s = [ "blue-bg.jpg", "ghost-bg.jpg", "guofeng-bg.jpg" ], i = n || s[parseInt(a.form_data.bg)];
                i = a.form_data.base_url + i, t.setData({
                    labelShow: parseInt(a.form_data.label_show),
                    hasFormData: !0,
                    bg: i,
                    caseId: a.form_data.id,
                    caseName: a.form_data.name
                });
            }
            t.setData({
                loadingShow: !1
            });
        });
    },
    bindLinkClick: function(a) {
        r.actionRun(a.currentTarget.dataset.url);
    }
}));