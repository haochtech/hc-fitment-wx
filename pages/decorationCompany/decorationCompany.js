getApp();

Page({
    data: {
        syscfg: {},
        zhshow: !1,
        sxshow: !1,
        zhkey: "综合",
        sxkey: "",
        qyData: [ {
            name: "斗门区"
        }, {
            name: "金湾区"
        }, {
            name: "香洲区"
        }, {
            name: "坦洲镇"
        } ],
        tpData: [ {
            name: "小户型"
        }, {
            name: "ktv"
        }, {
            name: "商铺"
        }, {
            name: "别墅"
        }, {
            name: "餐厅/酒楼"
        }, {
            name: "普通住宅"
        }, {
            name: "美容/美发"
        }, {
            name: "娱乐场所"
        } ],
        styleData: [ {
            name: "简约"
        }, {
            name: "现代"
        }, {
            name: "中式"
        }, {
            name: "欧式"
        }, {
            name: "美式"
        }, {
            name: "田园"
        }, {
            name: "新古典"
        }, {
            name: "混搭"
        } ],
        ysData: [ {
            name: "3万以下"
        }, {
            name: "3-5万"
        }, {
            name: "5-8万"
        }, {
            name: "8-12万"
        }, {
            name: "12-18万"
        }, {
            name: "18-30万"
        }, {
            name: "30-100万"
        }, {
            name: "一百万以上"
        } ],
        companyList: [ {
            name: "轩怡装饰",
            logo: "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg",
            al: 1700,
            gd: 1511,
            iszx: 1,
            isyhj: 1,
            ys: "先施工后付款",
            imgs: [ "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg", "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg", "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg" ]
        }, {
            name: "轩怡装饰",
            logo: "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg",
            al: 1700,
            gd: 1511,
            iszx: 1,
            isyhj: 1,
            ys: "先施工后付款",
            imgs: [ "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg", "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg", "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg" ]
        }, {
            name: "轩怡装饰",
            logo: "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg",
            al: 1700,
            gd: 1511,
            iszx: 1,
            isyhj: 1,
            ys: "先施工后付款",
            imgs: [ "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg", "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg", "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg" ]
        }, {
            name: "轩怡装饰",
            logo: "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg",
            al: 1700,
            gd: 1511,
            iszx: 1,
            isyhj: 1,
            ys: "先施工后付款",
            imgs: [ "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg", "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg", "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg" ]
        }, {
            name: "轩怡装饰",
            logo: "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg",
            al: 1700,
            gd: 1511,
            iszx: 1,
            isyhj: 1,
            ys: "先施工后付款",
            imgs: [ "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg", "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg", "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg" ]
        }, {
            name: "轩怡装饰",
            logo: "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg",
            al: 1700,
            gd: 1511,
            iszx: 1,
            isyhj: 1,
            ys: "先施工后付款",
            imgs: [ "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg", "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg", "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg" ]
        }, {
            name: "轩怡装饰",
            logo: "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg",
            al: 1700,
            gd: 1511,
            iszx: 1,
            isyhj: 1,
            ys: "先施工后付款",
            imgs: [ "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg", "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg", "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg" ]
        }, {
            name: "轩怡装饰",
            logo: "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg",
            al: 1700,
            gd: 1511,
            iszx: 1,
            isyhj: 1,
            ys: "先施工后付款",
            imgs: [ "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg", "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg", "http://dev.tailea.com/attachment/images/23/2017/12/sz5lRRjwLL0Z0e0M7HQNWL7WRR7AQw.jpg" ]
        } ]
    },
    selectZhData: function(a) {
        this.setData({
            zhkey: a.currentTarget.dataset.key,
            zhshow: !1
        });
    },
    selectZh: function() {
        var a = !this.data.zhshow;
        this.setData({
            zhshow: a,
            sxshow: !1
        });
    },
    searchSx: function(a) {
        this.setData({
            sxshow: !1
        });
    },
    selectSx: function() {
        var a = !this.data.sxshow;
        this.setData({
            zhshow: !1,
            sxshow: a
        });
    },
    setSysInfo: function(a) {
        this.setData({
            syscfg: a.detail
        }), this.configSet();
    },
    onLoad: function(a) {},
    onShareAppMessage: function() {}
});