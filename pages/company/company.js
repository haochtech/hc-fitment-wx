getApp();

Page({
    data: {
        syscfg: {},
        current: 0,
        imgUrls: [ "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg", "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg", "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg" ],
        indicatorDots: !1,
        autoplay: !0,
        interval: 4e3,
        duration: 500,
        companyInfo: {
            logo: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
            name: "上海宏斌装饰",
            isrz: 1,
            al: 5,
            gd: 3,
            add: "上海市奉贤区大叶公路5225号",
            phone: 12345645641,
            tsfw: [ "免费报价", "免费出图", "新老客户优惠" ],
            allist: [ {
                img: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
                name: "办公室",
                size: 1e3,
                type: "办公空间",
                qb: "全包"
            }, {
                img: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
                name: "办公室",
                size: 1e3,
                type: "办公空间",
                qb: "全包"
            }, {
                img: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
                name: "办公室",
                size: 1e3,
                type: "办公空间",
                qb: "全包"
            }, {
                img: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
                name: "办公室",
                size: 1e3,
                type: "办公空间",
                qb: "全包"
            } ],
            sjtd: [ {
                img: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
                zw: "设计师",
                jy: 2
            }, {
                img: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
                zw: "设计师",
                jy: 2
            }, {
                img: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
                zw: "设计师",
                jy: 2
            } ],
            gyzs: [ {
                img: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
                name: "会议接待室",
                jj: "改工艺展示为某办公大楼的接待大厅"
            } ],
            zxgd: [ {
                name: "嘉之宝",
                add: "上海上海市嘉定区嘉之宝",
                count: 1
            }, {
                name: "国和",
                add: "上海上海市杨浦区国和",
                count: 1
            }, {
                name: "嘉之宝",
                add: "上海上海市嘉定区嘉之宝",
                count: 1
            } ],
            sgtd: [ {
                img: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
                zw: "项目经理",
                jy: 2
            }, {
                img: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
                zw: "项目经理",
                jy: 2
            }, {
                img: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
                zw: "项目经理",
                jy: 2
            } ],
            sjxx: {
                cjlx: "",
                cjjw: "10万",
                fwqy: "上海"
            }
        }
    },
    swiperChange: function(o) {
        this.setData({
            current: o.detail.current
        });
    },
    calling: function(o) {
        wx.makePhoneCall({
            phoneNumber: o.currentTarget.dataset.phone + "",
            success: function() {
                console.log("拨打电话成功！");
            },
            fail: function() {
                console.log("拨打电话失败！");
            }
        });
    },
    setSysInfo: function(o) {
        this.setData({
            syscfg: o.detail
        });
    },
    onLoad: function(o) {},
    onShareAppMessage: function() {}
});