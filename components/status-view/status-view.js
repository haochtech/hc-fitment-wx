var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../81749a27300a44e4ae95b30c438dea90.js")), e = getApp();

Component({
    behaviors: [ t.default ],
    options: {
        multipleSlots: !0
    },
    properties: {
        state: {
            type: String,
            value: ""
        },
        config: {
            type: Object,
            value: {}
        }
    },
    data: {
        version: e.version
    },
    methods: {
        btnTap: function(t) {
            var a = t.currentTarget, n = this.data.state, i = a.dataset.action;
            this.triggerEvent("btntap", {
                state: n,
                action: i
            }), n && this.triggerEvent(n + "btntap", {
                state: n,
                action: i
            }), i && e.actionRun(i);
        }
    }
});