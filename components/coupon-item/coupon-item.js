Component({
    properties: {
        expand: {
            type: Boolean,
            value: !1
        },
        data: {
            type: Object,
            value: {}
        },
        btnText: {
            type: String,
            value: ""
        }
    },
    methods: {
        itemBtnTap: function() {
            this.triggerEvent("itembtntap", {
                data: this.data.data
            });
        },
        itemTap: function() {
            this.triggerEvent("itemtap", {
                data: this.data.data
            });
        },
        itemToggle: function() {
            this.setData({
                expand: !this.data.expand
            });
        }
    }
});