Component({
    behaviors: [ "wx://form-field" ],
    properties: {
        step: {
            type: Number,
            value: 1
        },
        min: {
            type: Number,
            value: -1 / 0,
            observer: "reCalc"
        },
        max: {
            type: Number,
            value: 1 / 0,
            observer: "reCalc"
        },
        value: {
            type: Number,
            value: 0,
            observer: "update"
        }
    },
    methods: {
        update: function(a, t) {
            Object.is(a, t) || this.triggerEvent("change", {
                value: a,
                newVal: a,
                oldVal: t
            });
        },
        reCalc: function() {
            this.calc();
        },
        calc: function() {
            var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data.value, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            a = Number(a) || 0, a += t, a = Math.min(Math.max(a, this.data.min), this.data.max), 
            this.setData({
                value: a
            });
        },
        inputChange: function(a) {
            var t = a.detail;
            "" !== t.value && this.calc(t.value);
        },
        inputBlur: function(a) {
            var t = a.detail;
            this.calc(t.value);
        },
        add: function() {
            this.calc(this.data.value, this.data.step);
        },
        sub: function() {
            this.calc(this.data.value, -this.data.step);
        }
    }
});