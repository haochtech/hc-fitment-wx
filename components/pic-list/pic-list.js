Component({
    options: {
        addGlobalClass: !0
    },
    properties: {
        picListData: {
            type: Array,
            value: []
        },
        picType: {
            type: String,
            value: "0"
        },
        type: {
            type: String,
            value: "0"
        },
        direction: {
            type: String,
            value: ""
        },
        iswh: {
            type: Boolean,
            value: !0
        }
    },
    attached: function() {},
    data: {},
    methods: {
        goToPlay: function(t) {
            this.triggerEvent("gotoplay", t.currentTarget.dataset.url);
        }
    }
});