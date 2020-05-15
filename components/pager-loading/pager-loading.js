var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../81749a27300a44e4ae95b30c438dea90.js"));

getApp();

Component({
    behaviors: [ e.default ],
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
    }
});