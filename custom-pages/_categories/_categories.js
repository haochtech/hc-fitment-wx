var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../d60a1235283664dfe97c5c6418868a10.js")), e = require("../../3f2ca8efd1a82bd646cc65d968b15bae.js"), a = getApp();

Component({
    behaviors: [ t.default ],
    options: {
        addGlobalClass: !0
    },
    data: {
        categoryItems: [],
        currentID: null,
        currentData: null,
        statusViewConfig: {
            empty: {
                icon: "warn",
                text: "还没有任何分类"
            },
            error: {
                icon: "error",
                btnText: "重试"
            }
        }
    },
    created: function() {
        this.shortcutGroup = "shop", this.allowShare = !0;
    },
    attached: function() {
        this.reLoad();
    },
    methods: {
        onSmartToHere: function(t) {
            var e = t.options;
            this.setDataByOptions([ {
                currentID: "id"
            } ], e);
        },
        reLoad: function() {
            var t = this;
            this._tabItemsLoaded ? this.toggle(this.data.currentID) : (this.setData({
                tabItems: []
            }), this.autoSetStatusView((0, e.getCategoriesList)()).then(function(e) {
                e.length && (t._tabItemsLoaded = !0, t.setData({
                    categoryItems: e,
                    "statusViewConfig.empty.text": "此分类建设中"
                }), t.toggle(t.data.currentID || e[0].id));
            }));
        },
        toggle: function(t) {
            var a = this;
            this.setData({
                currentID: t
            }), this.autoSetStatusView((0, e.getCategoryDataByID)(t)).then(function(e) {
                a.data.currentID == t && (a.setData({
                    currentData: e
                }), a.autoSetStatusView(e.items));
            });
        },
        tabChange: function(t) {
            var e = t.detail;
            this.toggle(e.value);
        },
        categoryItemClick: function(t) {
            var e = t.currentTarget;
            a.smartTo({
                url: ">commodities",
                options: {
                    categoryID: this.data.currentID,
                    subID: e.dataset.id,
                    hideSearch: !0
                }
            });
        }
    }
});