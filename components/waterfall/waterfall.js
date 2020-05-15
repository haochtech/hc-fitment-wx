function t(t) {
    if (Array.isArray(t)) {
        for (var a = 0, i = Array(t.length); a < t.length; a++) i[a] = t[a];
        return i;
    }
    return Array.from(t);
}

var a = 0, i = 0;

Component({
    properties: {
        listData: {
            type: Array,
            value: [],
            observer: "update"
        },
        isMore: {
            type: Boolean,
            value: !1
        },
        picType: {
            type: Number,
            value: 0
        }
    },
    data: {
        picData: {
            left: [],
            right: []
        },
        imgWidth: 0,
        offset: 0
    },
    attached: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(a) {
                var i = a.windowWidth;
                t.setData({
                    imgWidth: 345 / (750 / i),
                    offset: 100 / (750 / i)
                });
            }
        });
    },
    methods: {
        update: function() {
            var e = [].concat(t(this.data.listData)), r = void 0, o = void 0, s = void 0, h = void 0, c = void 0;
            this.data.isMore ? (r = [].concat(t(this.data.picData.left)), o = [].concat(t(this.data.picData.right))) : (a = 0, 
            i = 0, this.setData({
                "picData.left": [],
                "picData.right": []
            }), r = [], o = []);
            var p = !0, d = !1, n = void 0;
            try {
                for (var f, l = e[Symbol.iterator](); !(p = (f = l.next()).done); p = !0) {
                    var u = f.value;
                    s = parseFloat(u.pic_width), c = parseFloat(u.pic_height) / (s / (h = this.data.imgWidth)), 
                    u.pic_width = h, u.pic_height = c, a <= i ? (r.push(u), a += 0 === this.data.picType ? c + this.data.offset : c) : (o.push(u), 
                    i += 0 === this.data.picType ? c + this.data.offset : c);
                }
            } catch (t) {
                d = !0, n = t;
            } finally {
                try {
                    !p && l.return && l.return();
                } finally {
                    if (d) throw n;
                }
            }
            this.setData({
                "picData.left": r,
                "picData.right": o
            });
        }
    },
    goToPlay: function(t) {
        var a = t.detail;
        app.singleList = this.data.picData.left.concat(this.data.picData.right), wx.navigateTo({
            url: a
        });
    }
});