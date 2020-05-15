var o = getApp();

Component({
    properties: {},
    data: {
        loadingColor: o.maincolor ? o.maincolor : "#2fbd80"
    },
    methods: {
        notTouch: function() {}
    },
    attached: function() {
        this.setData({
            loadingColor: o.maincolor
        });
    }
});