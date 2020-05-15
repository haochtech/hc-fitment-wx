var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../d60a1235283664dfe97c5c6418868a10.js")), e = require("../../f5b982310b35490b3be56a448dd2faf8.js");

getApp();

Component({
    behaviors: [ t.default ],
    options: {
        addGlobalClass: !0
    },
    data: {
        hotItems: []
    },
    created: function() {
        this.shortcutGroup = "shop", this.allowShare = !0;
    },
    attached: function() {
        var t = this;
        (0, e.getCommoditiesListPager)({
            tag: "hot"
        }).load().then(function(e) {
            var o = e.list;
            t.setData({
                hotItems: o
            });
        });
    },
    methods: {
        onShow: function() {
            this._showAgain && this.selectComponent("#shopcart").reLoad(!0);
        }
    }
});