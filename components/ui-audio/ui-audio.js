function t(t) {
    var a = String(parseInt(t / 60));
    return a + ":" + String(parseInt(t - 60 * a)).padStart(2, "0");
}

var a = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../81749a27300a44e4ae95b30c438dea90.js"));

getApp();

Component({
    behaviors: [ a.default ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        title: {
            type: String
        },
        src: {
            type: String,
            observer: "update"
        },
        color: {
            type: String,
            value: "rgba(0,0,0,.5)"
        }
    },
    data: {
        duration: 0,
        durationStr: "0:00",
        currentTime: 0,
        currentTimeStr: "0:00",
        loading: !1,
        paused: !0,
        canPlay: !1,
        error: ""
    },
    created: function() {
        this._audio = wx.createInnerAudioContext(), this._audio.obeyMuteSwitch = !1;
    },
    attached: function() {
        var a = this;
        this.setData({
            duration: this._audio.duration,
            durationStr: t(this._audio.duration)
        });
        var i = {
            10001: "系统错误",
            10002: "网络错误",
            10003: "文件错误",
            10004: "格式错误",
            "-1": "未知错误"
        };
        this._audio.onCanplay(function() {
            setTimeout(function() {
                a.setData({
                    canPlay: !0,
                    duration: a._audio.duration,
                    durationStr: t(a._audio.duration),
                    paused: a._audio.paused,
                    loading: !1
                });
            }, 100);
        });
        var o = function() {
            return a.setData({
                paused: a._audio.paused
            });
        };
        this._audio.onPlay(o), this._audio.onPause(o), this._audio.onEnded(o), this._audio.onTimeUpdate(function() {
            a.setData({
                loading: !1,
                currentTime: a._audio.currentTime,
                currentTimeStr: t(a._audio.currentTime)
            });
        }), this._audio.onWaiting(function() {
            a.setData({
                canPlay: !1,
                loading: !0,
                paused: a._audio.paused
            });
        }), this._audio.onError(function(t) {
            a.setData({
                canPlay: !1,
                loading: !1,
                paused: !1,
                error: i[t.errCode]
            });
        });
    },
    detached: function() {
        this._audio.destroy();
    },
    methods: {
        update: function(t) {
            t && (this._audio.src = t);
        },
        play: function() {
            this._audio.play();
        },
        pause: function() {
            this._audio.pause();
        },
        toggle: function() {
            this.data.paused ? this._audio.play() : this._audio.pause();
        }
    }
});