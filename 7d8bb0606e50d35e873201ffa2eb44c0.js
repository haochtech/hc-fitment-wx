var r = require("50e3aa130a4f97a42ee2cf111c7b1d9d.js"), e = require("05bb1be19e494870932877fad1b09e20.js"), t = {
    clickCopyright: function(r, e) {
        wx.makePhoneCall({
            phoneNumber: e.sys.cpright.tel
        });
    },
    actionMap: function(t) {
        var a = {
            pic: "@pic",
            site: "@district?name=" + (0, e.getLanguage)().xiaoqu + "&cid=",
            shop: "@shop",
            tel: ":callPresetPhone",
            location: ":openLocation",
            default: "@index",
            panorama: "@panorama",
            products: "@product",
            ucenter: "@me"
        }, n = (0, r.urlParser)(t), o = n.pureUrl, i = n.options;
        return "article" === o && ("product" === i.type ? t = (0, r.urlParser)(">product-article", i).url : "panorama" === i.type && (t = (0, 
        r.urlParser)(">panorama-detail", {
            id: i.id
        }).url)), "wxapp" === o && (t = ":toPresetWxapp(" + i.id + ")"), t = a[t] || t.replace(/^\/pages\/(\w+)\/(\w+)(\?.*)?$/, ">$1$3").replace(/^(?!http)(\w+)(\??.*)$/, ">$1$2");
    },
    clickObjectLink: function(r, e) {
        var t = r.currentTarget.dataset.ctype, a = r.currentTarget.dataset.url, n = r.currentTarget.dataset.index;
        "footerNav" == t ? e.info.footerNavHover = n : "adsp" === t && (e.info.footerNavHover = -1), 
        e.actionRun(a);
    },
    getCurrentPageUrl: function() {
        var r = getCurrentPages();
        return r[r.length - 1].route;
    },
    getCurrentPageUrlWithArgs: function() {
        var r = getCurrentPages(), e = r[r.length - 1], t = e.route, a = e.options, n = t + "?";
        for (var o in a) n += o + "=" + a[o] + "&";
        return n = n.substring(0, n.length - 1);
    }
};

module.exports = t;