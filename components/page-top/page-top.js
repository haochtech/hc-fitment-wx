var o = getApp();

Component({
    properties: {
        pageTitle: {
            type: String,
            value: ""
        },
        tabs: {
            type: Boolean,
            value: !1
        },
        ishome: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        topHeight: o.getSizeData().height,
        btnWidth: o.getSizeData().btnWidth + 15,
        backPrev: !0,
        topcolor: "#ffffff",
        topfontcolor: "#000000",
        ipx: o.stsModel
    },
    methods: {
        goHome: function() {
            o.actionRun("@index");
        },
        back: function() {
            getCurrentPages().length > 1 ? wx.navigateBack() : o.actionRun("@index");
        }
    },
    attached: function() {
        var t = this;
        o.getConfig().then(function(e) {
            t.setData({
                topcolor: o.sys.color.topcolor ? o.sys.color.topcolor : "#ffffff",
                topfontcolor: o.sys.color.topfontcolor ? o.sys.color.topfontcolor : "#000000"
            });
        });
    },
    onReachBottom: function(o) {
        console.log(o);
    }
});