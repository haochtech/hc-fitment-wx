var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../81749a27300a44e4ae95b30c438dea90.js"));

getApp();

Component({
    behaviors: [ e.default ],
    options: {
        addGlobalClass: !0
    },
    data: {
        show: !1,
        readyHide: !1,
        permissionName: ""
    },
    methods: {
        show: function(e) {
            this.setData({
                permissionName: e,
                show: !0
            });
        },
        hide: function() {
            this.setData({
                readyHide: !0
            });
        },
        onTransitionEnd: function() {
            this.data.readyHide && this.setData({
                readyHide: !1,
                show: !1
            });
        }
    }
});