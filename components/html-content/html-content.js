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
    properties: {
        nodes: {
            type: Array,
            value: [],
            observer: "reCalc"
        }
    },
    methods: {
        reCalc: function(e) {
            Array.isArray(e) && (this._images = e.reduce(function(e, r) {
                return "image" === r.name && e.push(r.attrs.src), e;
            }, []));
        },
        previewImages: function(e) {
            var r = e.currentTarget;
            wx.previewImage({
                current: r.dataset.src,
                urls: this._images
            });
        }
    }
});