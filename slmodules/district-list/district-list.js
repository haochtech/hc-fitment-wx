var t = getApp();

Component({
    properties: {
        districtList: {
            type: Array,
            value: []
        }
    },
    data: {
        setShow: !1,
        selectIndex: 0,
        jieduan: [],
        jieduanData: [],
        title: "",
        id: "",
        lS: !1,
        isOk: !1,
        color: "#000"
    },
    attached: function() {
        t.sys.color && this.setData({
            color: t.sys.color.maincolor
        });
    },
    methods: {
        updata: function(t) {
            this.data.jieduan.length ? this.getSiteDy(t) : this.getJieDuan(t);
        },
        getJieDuan: function(i) {
            var e = this;
            t.http({
                url: t.apis.SL_site_progress,
                data: {
                    uid: t.globalData.userInfo.id,
                    ver: t.info.version
                }
            }).then(function(t) {
                if (t && t.length) {
                    for (var a = [], s = 0; s < t.length; s++) a.push(t[s].title);
                    e.setData({
                        jieduan: a,
                        jieduanData: t
                    }), e.getSiteDy(i);
                }
            });
        },
        zhiding: function() {
            var i = this;
            this.selectComponent("#district-set").hide(), this.setData({
                lS: !0
            }), t.http({
                url: t.apis.SL_site_zhiding,
                data: {
                    uid: t.globalData.userInfo.id,
                    ver: t.info.version,
                    id: this.data.id
                }
            }).then(function(t) {
                i.triggerEvent("updata"), i.setData({
                    lS: !1
                });
            });
        },
        getSiteDy: function(i) {
            var e = this;
            t.http({
                url: t.apis.SL_get_site_dy,
                data: {
                    ver: t.info.version,
                    uid: t.globalData.userInfo.id,
                    id: i
                }
            }).then(function(t) {
                var i = 0, a = !1;
                t.id_progress && (i = e.data.jieduanData.findIndex(function(i) {
                    return i.id == t.id_progress;
                }), a = e.data.jieduanData[e.data.jieduanData.length - 1].title === t.id_title), 
                e.setData({
                    selectIndex: i,
                    isOk: a
                });
            });
        },
        goToDetail: function(i) {
            t.actionRun("/pages/districtDetail/districtDetail?id=" + i.currentTarget.dataset.id);
        },
        upData: function(i) {
            t.actionRun("/pages/district-up/district-up?id=" + i.currentTarget.dataset.id);
        },
        setInfo: function(t) {
            this.setData({
                id: t.currentTarget.dataset.id,
                title: t.currentTarget.dataset.title
            }), this.updata(t.currentTarget.dataset.id), this.selectComponent("#district-set").show();
        },
        upDataFn: function(i) {
            return {
                uid: t.globalData.userInfo.id,
                ver: t.info.version,
                id_progress: this.data.jieduanData[i].id,
                id_title: this.data.jieduanData[i].title,
                id: this.data.id
            };
        },
        upSiteList: function(i) {
            var e = this;
            this.setData({
                lS: !0
            });
            var a = this.upDataFn(i);
            t.http({
                url: t.apis.SL_up_site_list,
                data: a
            }).then(function(t) {
                e.triggerEvent("updata"), e.setData({
                    lS: !1
                });
            });
        },
        upSiteProgress: function(i) {
            this.setData({
                selectIndex: i
            });
            var e = this.upDataFn(i);
            t.http({
                url: t.apis.SL_up_site_progress,
                data: e
            });
        },
        selectChange: function(t) {
            var i = parseInt(t.detail.value);
            this.upSiteProgress(i), this.upSiteList(i), this.selectComponent("#district-set").hide();
        },
        wangong: function() {
            var t = this.data.jieduan.length - 1;
            this.upSiteProgress(t), this.upSiteList(t), this.selectComponent("#district-set").hide();
        },
        hideSet: function() {
            this.selectComponent("#district-set").hide();
        },
        notTouch: function() {}
    }
});