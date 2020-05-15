!function(t) {
    t && t.__esModule;
}(require("../../81749a27300a44e4ae95b30c438dea90.js"));

var t = getApp().config.imageHolder;

Component({
    properties: {
        src: {
            type: String,
            observer: "update"
        },
        ismode: {
            type: Boolean,
            value: !1
        },
        mode: String,
        lazyLoad: Boolean,
        emptyConfig: {
            type: Object,
            value: {
                src: t.empty,
                mode: "aspectFit"
            }
        },
        errorConfig: {
            type: Object,
            value: {
                src: t.error,
                mode: "aspectFit"
            }
        }
    },
    data: {
        isError: !1,
        useConfig: {}
    },
    attached: function() {
        this.update(this.data.src);
    },
    methods: {
        update: function(t) {
            if (!t) return this.setError(this.data.emptyConfig);
            this.setData({
                isError: !1
            });
        },
        onError: function() {
            this.setError(this.data.errorConfig);
        },
        setError: function(t) {
            this.setData({
                isError: !0,
                useConfig: t
            });
        }
    }
});