Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("7c15540975e4d172ca4002de3d4bf20e.js")), s = require("8ad6060fc8343954a87212ef83583213.js"), t = require("05bb1be19e494870932877fad1b09e20.js"), a = getApp();

exports.default = function(o) {
    return (0, e.default)(o, [ {
        onShareAppMessage: s.onShareAppMessage,
        data: {
            syscfg: a.sys,
            user: a.globalData.userInfo,
            sysModel: a.stsModel,
            i8n: (0, t.getLanguage)(),
            pageTitle: ""
        },
        onShow: function() {
            this.setData({
                syscfg: a.sys,
                user: a.globalData.userInfo,
                sysModel: a.stsModel,
                i8n: (0, t.getLanguage)()
            }), a.onPageShow(this);
        }
    } ]);
};