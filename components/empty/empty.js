var t = getApp();

Component({
    properties: {
        msg: {
            type: String,
            value: ""
        },
        icon: {
            type: String,
            value: "warn"
        },
        backUrl: {
            type: String,
            value: ""
        },
        backText: {
            type: String,
            value: ""
        }
    },
    data: {
        color: "#6d9eeb"
    },
    attached: function() {
        t.sys.color.btncolor && this.setData({
            color: t.sys.color.btncolor
        });
    },
    methods: {
        goToRoute: function() {
            t.actionRun(this.data.backUrl);
        }
    }
});