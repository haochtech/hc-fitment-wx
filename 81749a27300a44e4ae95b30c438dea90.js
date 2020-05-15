var t = require("8ad6060fc8343954a87212ef83583213.js"), e = require("05bb1be19e494870932877fad1b09e20.js"), a = getApp();

module.exports = Behavior({
    data: {
        commonStyles: a.commonStyles,
        i8n: (0, e.getLanguage)()
    },
    attached: function() {
        this.setData({
            commonStyles: a.commonStyles,
            i8n: (0, e.getLanguage)()
        });
    },
    methods: {
        targetDataSet: t.targetDataSet,
        targetActionRun: t.targetActionRun,
        stopPropagation: t.stopPropagation
    }
});