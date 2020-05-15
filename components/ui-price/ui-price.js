Component({
    options: {
        addGlobalClass: !0
    },
    properties: {
        value: {
            type: Number,
            value: 0,
            observer: "update"
        },
        fixed: {
            type: Number,
            value: 2
        }
    },
    data: {
        int: "0",
        dec: "0"
    },
    methods: {
        update: function(e) {
            var t = this;
            return String(e).replace(/(-?\d+)\.?(\d+)?/, function(e, a, d) {
                d = (d || "").padEnd(t.data.fixed, "0"), t.setData({
                    int: a,
                    dec: d
                });
            });
        }
    }
});