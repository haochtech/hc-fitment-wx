Component({
    properties: {
        styleType: {
            type: Number,
            value: 0
        },
        listData: {
            type: Array,
            value: []
        },
        initUrl: {
            type: String,
            value: "/pages/article/article?type=actnews&id="
        },
        imgUrlKey: {
            type: String,
            value: "thumb_url"
        },
        createTimeKey: {
            type: String,
            value: "createtime_cn"
        },
        titleKey: {
            type: String,
            value: "name"
        }
    },
    data: {},
    methods: {
        goToDetail: function(e) {
            var t = e.currentTarget.dataset.url;
            wx.navigateTo({
                url: t
            });
        }
    },
    ready: function() {}
});