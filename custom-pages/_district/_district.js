var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../d60a1235283664dfe97c5c6418868a10.js")), a = require("../../05bb1be19e494870932877fad1b09e20.js"), e = getApp();

Component({
    behaviors: [ t.default ],
    options: {
        addGlobalClass: !0
    },
    data: {
        tp: "",
        syscfg: {},
        sxShow: !1,
        nextPage: 2,
        isBoottom: !1,
        sid: "",
        cid: "",
        fid: "",
        pid: "",
        xid: "",
        zxjdData: [],
        fgData: [],
        fxData: [],
        xqData: [],
        mainData: [],
        xq: (0, a.getLanguage)().xiaoqu,
        zx: (0, a.getLanguage)().jieduan,
        fg: (0, a.getLanguage)().fengge,
        px: (0, a.getLanguage)().zonghepaixu,
        fx: (0, a.getLanguage)().fangxing,
        loadShow: !0,
        heights: {}
    },
    created: function() {
        this.shortcutGroup = "district", this.allowShare = !0;
    },
    attached: function() {
        var t = this;
        e.getConfig().then(function() {
            var e = "小区" === t.data.options.name ? (0, a.getLanguage)().xiaoqu : t.data.options.name;
            t.setData({
                xq: e,
                cid: t.data.options.cid,
                zx: (0, a.getLanguage)().jieduan,
                fg: (0, a.getLanguage)().fengge,
                px: (0, a.getLanguage)().zonghepaixu,
                fx: (0, a.getLanguage)().fangxing
            }), t.getNavData(), t.setGongDiData(!1);
        });
    },
    methods: {
        onShow: function() {
            this.setData({
                isBoottom: !1,
                nextPage: 2
            }), this.setGongDiData(!1);
        },
        navHide: function() {
            this.setData({
                tp: ""
            });
        },
        updata: function() {
            this.setData({
                isBoottom: !1,
                nextPage: 2
            }), this.setGongDiData(!1);
        },
        activeNav: function(t) {
            var a = this.data.tp === t.currentTarget.dataset.tp ? "" : t.currentTarget.dataset.tp;
            this.setData({
                tp: a
            });
        },
        search: function(t, a, e, i) {
            var s = t.tp ? t.tp : a, n = {};
            n[e] = s, n.tp = "", n.page = 1, n[i] = t[i], this.setData(n), this.setGongDiData(!1);
        },
        fxTpClick: function(t) {
            this.search(t.currentTarget.dataset, (0, a.getLanguage)().fangxing, "fx", "xid");
        },
        pxTpClick: function(t) {
            this.search(t.currentTarget.dataset, (0, a.getLanguage)().zonghepaixu, "px", "pid");
        },
        xqTpClick: function(t) {
            this.search(t.currentTarget.dataset, (0, a.getLanguage)().xiaoqu, "xq", "cid");
        },
        zxTpClick: function(t) {
            this.search(t.currentTarget.dataset, (0, a.getLanguage)().jieduan, "zx", "sid");
        },
        fgTpClick: function(t) {
            this.search(t.currentTarget.dataset, (0, a.getLanguage)().fengge, "fg", "fid");
        },
        setGongDiData: function(t) {
            var a = this, i = {};
            this.data.cid && (i.subdistrict = this.data.cid), this.data.sid && (i.progress = this.data.sid), 
            this.data.xid && (i.type = this.data.xid), this.data.fid && (i.style = this.data.fid), 
            i.page = t ? this.data.nextPage : 1, this.data.pid && (i.order = this.data.pid), 
            e.http({
                url: e.apis.site_search,
                data: i,
                method: "POST"
            }).then(function(e) {
                e.list_site.length ? t ? a.setData({
                    mainData: a.data.mainData.concat(e.list_site),
                    nextPage: a.data.nextPage + 1
                }) : a.setData({
                    mainData: e.list_site,
                    nextPage: 2,
                    isBoottom: !1
                }) : t ? a.setData({
                    isBoottom: !0
                }) : a.setData({
                    mainData: [],
                    nextPage: 2,
                    isBoottom: !1
                }), a.setData({
                    loadShow: !1
                });
            });
        },
        getNavData: function() {
            var t = this;
            e.http({
                url: e.apis.site_index_data
            }).then(function(a) {
                var e = {};
                e.subdistrict = 100 * Math.ceil((a.list_subdistrict.length + 1) / 3) + 20, e.style = 100 * Math.ceil((a.list_style.length + 1) / 3) + 20, 
                e.type = 100 * Math.ceil((a.list_type.length + 1) / 3) + 20, e.progress = 100 * Math.ceil((a.list_progress.length + 1) / 3) + 20, 
                t.setData({
                    xqData: a.list_subdistrict,
                    fgData: a.list_style,
                    zxjdData: a.list_progress,
                    fxData: a.list_type,
                    heights: e
                });
            });
        },
        onReachBottom: function() {
            this.data.isBoottom || this.setGongDiData(!0);
        }
    }
});