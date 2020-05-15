var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../81749a27300a44e4ae95b30c438dea90.js")), e = getApp().copyright;

Component({
    behaviors: [ t.default ],
    data: {
        copyright: e
    },
    attached: function() {
        this.setData({
            copyright: e
        });
    }
});