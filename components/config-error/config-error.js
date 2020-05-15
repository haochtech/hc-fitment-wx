var t = getApp();

Component({
    properties: {
        errMsg: {
            type: String,
            value: ""
        },
        errData: String
    },
    data: {
        ver: t.info.version
    },
    attached: function() {},
    methods: {
        reset: function() {
            this.triggerEvent("reset");
        },
        copy: function() {
            wx.setClipboardData({
                data: this.data.errData
            });
        }
    }
});