function _(_, s, e) {
    return s in _ ? Object.defineProperty(_, s, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : _[s] = e, _;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var s;

exports.uidVersion = function(_, s) {
    Object.assign(a, {
        uid: _,
        ver: s
    }), console.log(a);
};

var e = require("siteinfo.js"), t = "&m=slwl_fitment", i = e.siteroot + "?i=" + e.uniacid + "&c=entry&a=wxapp&do=", a = {};

exports.apis = (s = {
    act_one: "smk_act_one",
    get_adpop: "smk_get_adpop",
    act_news: "smk_act_news",
    act_news2: "act_news",
    act_list_nav: "smk_act_list_nav",
    act_list_list: i + "smk_act_list_list" + t,
    smk_act_list_list: "smk_act_list_list",
    actnews_one: "smk_actnews_one",
    adact_one: "smk_adact_one",
    create_user: "smk_create_user",
    calc_config: "smk_calc_config",
    booking_step1: "smk_booking_step1",
    indexdata: "smk_indexdata",
    default_pcl_child: "smk_default_pcl_child",
    term_child: i + "smk_term_child" + t,
    guestbook_config: "smk_guestbook_config",
    guestbook: "smk_guestbook",
    list_nav: "smk_list_nav",
    list_list: "smk_list_list",
    stylist_config: "smk_stylist_config",
    designer_one: "smk_designer_one",
    opus_list: "smk_opus_list",
    pic_tag: "smk_pic_tag",
    pic_list: "smk_pic_list",
    pic_list_single_more: "smk_pic_list_single_more",
    pic_list_Multi_more: "smk_pic_list_Multi_more",
    pic_play_multi: "smk_pic_play_multi",
    smk_pic_play_single: "smk_pic_play_single",
    set_fav: "smk_set_fav",
    reserve_config: "smk_reserve_config",
    reserve_one: "smk_reserve_one",
    reserve_pay: "smk_reserve_pay",
    style_config: "smk_style_config",
    style_post: i + "smk_style_post" + t
}, _(s, "stylist_config", "smk_stylist_config"), _(s, "designer_list", "smk_designer_list"), 
_(s, "tt", "smk_tt"), _(s, "pic_list_fav", "smk_pic_list_fav"), _(s, "pic_list_fav_single_more", "smk_pic_list_fav_single_more"), 
_(s, "pic_list_fav_multi_more", "smk_pic_list_fav_multi_more"), _(s, "relist", "smk_relist"), 
_(s, "booking_step1_get", "smk_booking_step1_get"), _(s, "booking_step2", "smk_booking_step2"), 
_(s, "Smk_pic_build_qrcode", "Smk_pic_build_qrcode"), _(s, "Smk_pic_play_picsn", "Smk_pic_play_picsn"), 
_(s, "SL_pic_search", "SL_pic_search"), _(s, "smk_config", "smk_config"), _(s, "site_index_data", "site_index_data"), 
_(s, "site_search", "site_search"), _(s, "site_one", "site_one"), _(s, "site_collect", "site_collect"), 
_(s, "smk_get_wx_phone", "smk_get_wx_phone"), _(s, "SL_save_form_id", "SL_save_form_id"), 
_(s, "SL_panorama", "SL_panorama"), _(s, "SL_panorama_config", "SL_panorama_config"), 
_(s, "SL_panorama_one", i + "SL_panorama_one" + t), _(s, "SL_pro_list", "SL_pro_list"), 
_(s, "SL_pro_one", "SL_pro_one"), _(s, "SL_pro_collect", "SL_pro_collect"), _(s, "SL_panorama_collect", "SL_panorama_collect"), 
_(s, "SL_save_site_fans", "SL_save_site_fans"), _(s, "SL_find_site_fans", "SL_find_site_fans"), 
_(s, "SL_update_user", "SL_update_user"), _(s, "SL_get_form_data", "SL_get_form_data"), 
_(s, "SL_save_form_data", "SL_save_form_data"), _(s, "SL_site_progress", "SL_site_progress"), 
_(s, "SL_up_site", "SL_up_site"), _(s, "SL_up_img", i + "SL_up_img" + t), _(s, "SL_get_site_dy", "SL_get_site_dy"), 
_(s, "SL_up_site_progress", "SL_up_site_progress"), _(s, "SL_up_site_list", "SL_up_site_list"), 
_(s, "SL_site_zhiding", "SL_site_zhiding"), s), exports.http = function(_) {
    var s = _.url, e = _.data, o = void 0 === e ? {} : e, n = _.method, c = void 0 === n ? "GET" : n, r = _.contentType, l = void 0 === r ? 0 : r, p = Object.assign(a, o);
    return new Promise(function(_, e) {
      console.log("" + i + s + t);
        wx.request({
            url: "" + i + s + t,
            method: c,
            data: p,
            header: {
                "content-type": 0 === l ? "application/json" : "application/x-www-form-urlencoded"
            },
            success: function(s) {
              console.log(s);
                200 != s.statusCode ? e({
                    error: "服务器忙，请稍后重试",
                    code: 500
                }) : _("string" == typeof s.data ? s.data : s.data.data ? s.data.data : s.data);
            },
            fail: function(_) {
                e(_.errMsg);
            }
        });
    }).catch(function(_) {
        var s = "request:fail " == _ ? "网络异常" : _;
        wx.showModal({
            title: "出错啦！",
            content: s,
            confirmColor: "#44B549",
            cancelColor: "#999",
            confirmText: "复制信息",
            success: function(s) {
                s.confirm && wx.setClipboardData({
                    data: _
                });
            }
        });
    });
};