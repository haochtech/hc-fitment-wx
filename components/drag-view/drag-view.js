Component({
    options: {
        multipleSlots: !0
    },
    properties: {},
    data: {
        viewStyle: "",
        contentStyle: "",
        expandStyle: "",
        x: 0
    },
    ready: function() {
        var t = this, e = wx.createSelectorQuery().in(this);
        e.select("._drag-view-content").boundingClientRect(function(e) {
            e && (t._contentWidth = e.width, t._contentHeight = e.height);
        }), e.select("._drag-view-expand").boundingClientRect(function(e) {
            e && (t._expandWidth = e.width, t._threshold = e.width / 2);
        }), e.exec(function() {
            t.setData({
                contentStyle: "width: " + t._contentWidth + "px",
                expandStyle: "width: " + t._expandWidth + "px",
                viewStyle: "width: " + (t._contentWidth + t._expandWidth) + "px; display: flex"
            });
        });
    },
    methods: {
        onTouchStart: function(t) {
            this._startX = t.changedTouches[0].pageX;
        },
        onTouchEnd: function(t) {
            this._endX = t.changedTouches[0].pageX;
            var e = this._endX, n = this._startX, i = this._threshold;
            this.data.x = n - e >= i ? -this._expandWidth : 0, this.setData({
                x: this.data.x
            });
        }
    }
});