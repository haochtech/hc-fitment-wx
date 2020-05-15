var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../090627b750e3f7661b2722641b584ddf.js")), e = require("../../3f2ca8efd1a82bd646cc65d968b15bae.js"), i = require("../../f5b982310b35490b3be56a448dd2faf8.js");

getApp();

Page((0, t.default)({
    allowShare: !0,
    data: {
        hideSearch: !1,
        categoryID: null,
        subID: null,
        keyword: "",
        tabItems: [],
        commoditiesItems: [],
        statusViewConfig: {
            empty: {
                icon: "warn",
                text: "当前条件下没有商品哦",
                btnAction: ":navigateBack",
                btnText: "返回"
            },
            error: {
                icon: "error",
                btnText: "重试"
            }
        },
        pagerLoadingConfig: {
            completed: {
                text: "没有更多了"
            }
        }
    },
    condition: {
        keyword: null,
        tag: null,
        subID: null
    },
    onLoad: function(t) {
        this.setDataByOptions([ "categoryID", "subID", "keyword", "hideSearch" ], t);
        var e = this.data, i = e.keyword, a = e.categoryID, s = e.subID;
        this.setCondition({
            keyword: i,
            subID: s,
            tag: t.tag
        }), this.updateList(), t.title && this.setData({
            pageTitle: this.title = t.title
        }), a && this.toggle(a, s);
    },
    searchBlur: function() {
        var t = this.data.keyword;
        this.setData({
            keyword: ""
        }), this.setData({
            keyword: t
        });
    },
    searchConfirm: function(t) {
        var e = t.detail;
        this.search(e.value);
    },
    setCondition: function(t) {
        for (var e in t) this.options[e] = this.condition[e] = t[e];
    },
    search: function(t) {
        this.setCondition({
            keyword: t
        }), this.setData({
            keyword: t
        }), this.updateList();
    },
    updateList: function() {
        var t = this;
        this._pager = (0, i.getCommoditiesListPager)(this.condition), this.autoSetPagerStatusView(this._pager.load(!0), !0).then(function(e) {
            t.setData({
                commoditiesItems: e
            });
        });
    },
    toggle: function(t, i) {
        var a = this;
        this.setData({
            categoryID: t,
            subID: i
        }), this.setCondition({
            categoryID: t,
            subID: i
        }), this.autoSetStatusView((0, e.getCategoryDataByID)(t), !0).then(function(t) {
            i = void 0 === i ? t.items[0].id : i, a.setData({
                tabItems: t.items,
                subID: i,
                pageTitle: a.title = t.label
            }), a.setCondition({
                subID: i
            }), a.updateList();
        });
    },
    tabChange: function(t) {
        var e = t.detail.newID;
        e !== this.data.subID && this.toggle(this.data.categoryID, e);
    },
    nextPage: function() {
        var t = this;
        this._pager && !this._pager.completed && this.autoSetPagerLoading(this._pager.next()).then(function(e) {
            var i = e.list;
            t.setData({
                commoditiesItems: i
            });
        });
    }
}));