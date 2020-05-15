function t(t) {
    if (Array.isArray(t)) {
        for (var e = 0, a = Array(t.length); e < t.length; e++) a[e] = t[e];
        return a;
    }
    return Array.from(t);
}

var e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../ea0481588cf938a76655373abf7c162d.js")), a = getApp(), i = 0;

Page((0, e.default)({
    title: "更新工地",
    data: {
        jieduan: [],
        selectIndex: 0,
        mydate: "",
        hms: "",
        jieduanData: [],
        j_id: "",
        j_tit: "",
        upImgs: [],
        id: "",
        loadingShow: !0,
        intro: "",
        title: "",
        init: !1,
        ipx: a.stsModel
    },
    onLoad: function(t) {
        this.setData({
            id: t.id
        }), this.setDate(), this.getJieDuan();
    },
    delImg: function(e) {
        var a = this, i = parseInt(e.currentTarget.dataset.i) - 1, n = [].concat(t(this.data.upImgs));
        n.splice(i, 1), wx.showModal({
            content: "确定要删除吗？",
            success: function(t) {
                t.confirm && a.setData({
                    upImgs: n
                });
            }
        });
    },
    getSiteDy: function() {
        var t = this;
        a.http({
            url: a.apis.SL_get_site_dy,
            data: {
                ver: a.info.version,
                uid: a.globalData.userInfo.id,
                id: this.data.id
            }
        }).then(function(e) {
            if (!e.id) return t.setData({
                loadingShow: !1,
                init: !0,
                j_id: t.data.jieduanData[0].id,
                j_tit: t.data.jieduanData[0].title
            }), !1;
            var a = e.thumbs ? JSON.parse(e.thumbs) : [], i = 0;
            e.id_progress && (i = t.data.jieduanData.findIndex(function(t) {
                return t.id == e.id_progress;
            })), t.setData({
                intro: e.intro,
                title: e.title,
                j_id: e.id_progress ? e.id_progress : t.data.jieduanData[0].id,
                j_tit: e.id_title ? e.id_title : t.data.jieduanData[0].title,
                selectIndex: i,
                upImgs: a,
                loadingShow: !1,
                init: !0
            });
        });
    },
    upFileFn: function(t) {
        var e = this;
        wx.uploadFile({
            url: a.apis.SL_up_img,
            filePath: t[i],
            name: "file",
            success: function(a) {
                var n = JSON.parse(a.data);
                if (n.data) {
                    var s = e.data.upImgs.concat(n.data);
                    e.setData({
                        upImgs: s
                    }), ++i < t.length ? e.upFileFn(t) : e.setData({
                        loadingShow: !1
                    });
                }
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function(t) {}
        });
    },
    upImage: function() {
        var t = this;
        wx.chooseImage({
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                if (9 === t.data.upImgs.length) return wx.showToast({
                    title: "最多上传九张图片",
                    duration: 2e3
                }), !1;
                i = 0, t.setData({
                    loadingShow: !0
                }), t.upFileFn(e.tempFilePaths);
            }
        });
    },
    setDate: function() {
        var t = new Date(), e = t.getFullYear() + "-" + (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-" + (t.getDate() < 10 ? "0" + t.getDate() : t.getDate()), a = (t.getHours() < 10 ? "0" + t.getHours() : t.getHours()) + " : " + (t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes()) + " : " + (t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds());
        this.setData({
            mydate: e,
            hms: a
        });
    },
    selectChange: function(t) {
        var e = t.detail.value;
        this.setData({
            selectIndex: e,
            j_id: this.data.jieduanData[e].id,
            j_tit: this.data.jieduanData[e].title
        });
    },
    upSiteList: function(t) {
        a.http({
            url: a.apis.SL_up_site_list,
            data: t
        }).then(function(t) {
            a.actionRun("@district");
        });
    },
    formSubmit: function(t) {
        var e = this.data.upImgs.length ? this.data.upImgs.join(",") : "", i = {
            ver: a.info.version,
            uid: a.globalData.userInfo.id,
            id: this.data.id,
            thumbs: e
        }, n = Object.assign(t.detail.value, i);
        this.upSiteList(n), a.http({
            url: a.apis.SL_up_site,
            data: n,
            method: "POST"
        });
    },
    getJieDuan: function() {
        var t = this;
        a.http({
            url: a.apis.SL_site_progress,
            data: {
                uid: a.globalData.userInfo.id,
                ver: a.info.version
            }
        }).then(function(e) {
            if (e && e.length) {
                for (var a = [], i = 0; i < e.length; i++) a.push(e[i].title);
                t.setData({
                    jieduan: a,
                    jieduanData: e
                }), t.getSiteDy();
            }
        });
    }
}));