var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../81749a27300a44e4ae95b30c438dea90.js")), a = getApp();

Component({
    behaviors: [ t.default ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        mode: {
            type: String,
            value: ""
        },
        imgMode: {
            type: String,
            value: ""
        },
        items: {
            type: Array,
            value: []
        },
        type: {
            type: String,
            value: ""
        },
        url: {
            type: String,
            value: "product-article"
        }
    },
    data: {
        presetImgMode: {
            "immersive-light": "widthFix",
            "immersive-dark": "aspectFill",
            "column-two-inner": "aspectFill"
        }
    },
    methods: {
        favFn: function(t) {
            var e = this, i = t.currentTarget;
            if ("panorama-detail" === this.data.url) {
                var r = i.dataset, o = r.idx, s = r.aid, n = 1 === this.data.items[parseInt(o)].fav ? 0 : 1;
                a.http({
                    url: a.apis.SL_panorama_collect + "&op=post",
                    data: {
                        id: s,
                        ver: a.info.version,
                        uid: a.globalData.userInfo.id,
                        isfav: n
                    }
                }).then(function(t) {
                    var i = e.data.items;
                    i[parseInt(o)].fav = n, e.setData({
                        items: i
                    }), wx.showToast({
                        title: a.translate("controlOk"),
                        icon: "succes",
                        duration: 1500
                    });
                });
            }
        }
    }
});