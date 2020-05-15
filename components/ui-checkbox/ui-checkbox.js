var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../81749a27300a44e4ae95b30c438dea90.js"));

getApp();

Component({
    behaviors: [ "wx://form-field", e.default ],
    properties: {
        value: {
            type: Boolean,
            observer: "update"
        }
    },
    methods: {
        update: function(e, t) {
            if (!Object.is(e, t)) {
                e = !!e, this.setData({
                    value: e
                });
                var a = this._clickChange;
                this._clickChange = !1, this.triggerEvent("change", {
                    value: e,
                    newVal: e,
                    oldVal: t,
                    byUser: a
                });
            }
        },
        click: function() {
            this._clickChange = !0, this.setData({
                value: !this.data.value
            });
        }
    }
});