var e = getApp(), t = !0, a = setTimeout(function() {
    t = !0;
}, 500);

Component({
    properties: {
        items: {
            type: Array,
            value: []
        },
        styleNum: {
            type: Number,
            value: 0
        },
        ctype: {
            type: String,
            value: "mainnav"
        },
        picClass: {
            type: String,
            value: "pic-3"
        },
        guide: {
            type: Object,
            value: {}
        },
        colNum: {
            type: Number,
            value: 5
        }
    },
    data: {},
    methods: {
        bindFormClick: function(o) {
            var u = o.detail;
            t && "the formId is a mock one" !== u.formId && e.globalData.userInfo && (e.http({
                url: e.apis.SL_save_form_id + "&uid=" + e.globalData.userInfo.id,
                method: "POST",
                data: {
                    formIDs: [ u.formId ]
                }
            }), t = !1, clearTimeout(a), a = setTimeout(function() {
                t = !0;
            }, 500)), e.actionRun(u.value.url);
        }
    }
});