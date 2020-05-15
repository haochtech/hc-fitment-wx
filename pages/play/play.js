var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../ea0481588cf938a76655373abf7c162d.js")), a = getApp();

Page((0, t.default)({
    allowShare: !0,
    data: {
        picn: "1",
        myadpop: {},
        siteVersion: "",
        menusEnabled: "0",
        logo_url: "",
        picType: 0,
        picId: 0,
        picMulti: {},
        picSingle: {},
        currPageNum: 1,
        favStatus: 0,
        currTitle: "",
        stsModel: !1,
        touch: !1,
        card: {},
        canvasShow: !1,
        openSettingBtnHidden: !1,
        thatImgWidth: 0,
        thatImgHeight: 0,
        fenXiangShow: !1,
        previewthumb_url: null,
        windowWidth: 0,
        windowHeight: 0,
        ratio: 0,
        canvasH: 0,
        lastX: 0,
        thatImgUrl: "",
        thatImgCode: "",
        isLeft: !1,
        isRight: !1,
        isShow: !1,
        ewm: "",
        sn: "",
        isBtnShow: !1,
        isOne: !1,
        calcShow: !1
    },
    fenXiangIsShow: function() {
        this.setData({
            fenXiangShow: !0
        });
    },
    fenXiangIsHide: function() {
        this.setData({
            fenXiangShow: !1
        });
    },
    initData: function() {
        this.data.sn ? this.setShare() : "0" == this.data.picType ? this.setPicMulti() : "1" == this.data.picType && this.setPicSingle(!1);
    },
    onLoad: function(t) {
        var i = this;
        a.sys.config.btn_act_bottom_status && 1 == parseInt(a.sys.config.btn_act_bottom_status) && this.setData({
            isBtnShow: !0
        }), a.sys.config.btn_act_bottom_calc_status && 1 == parseInt(a.sys.config.btn_act_bottom_calc_status) ? this.setData({
            calcShow: !0,
            isOne: !1
        }) : this.setData({
            isOne: !0,
            calcShow: !1
        }), t.scene ? this.setData({
            sn: t.scene
        }) : (this.setData({
            sn: ""
        }), this.setData({
            picType: t.type,
            picId: t.id
        })), a._getConfigPromise.then(function(t) {
            i.initData();
        });
    },
    setShare: function() {
        var t = this, i = this, e = {
            picsn: i.data.sn,
            uid: i.data.user.id
        };
        a.http({
            url: a.apis.Smk_pic_play_picsn,
            data: e
        }).then(function(a) {
            var i = {
                favStatus: a.fav
            };
            a.id && (i.picId = a.id), "0" === a.pic_type ? (i.picMulti = a, i.picType = 0, a.smeta && a.smeta.length && (i.currTitle = a.smeta[0].title, 
            i.thatImgUrl = a.smeta[0].attr_url)) : (i.picSingle = a, i.picType = 1), a.qrcode_url && (i.ewm = a.qrcode_url), 
            a.picsn ? i.thatImgCode = a.picsn : wx.showToast({
                title: "没有该图片编码",
                duration: 2e3
            }), t.setData(i);
        }, function(t) {
            wx.showToast({
                title: t,
                image: "/public/images/icon_error.png"
            });
        });
    },
    setPicMulti: function() {
        var t = this, i = {
            id: t.data.picId,
            uid: t.data.user.id
        };
        a.http({
            url: a.apis.pic_play_multi,
            data: i
        }).then(function(a) {
            t.setData({
                picMulti: a,
                favStatus: a.fav
            }), void 0 != a && t.setData({
                currTitle: a.smeta[0].title,
                thatImgUrl: a.smeta[0].attr_url,
                ewm: a.qrcode_url,
                thatImgCode: a.picsn
            });
        }, function(t) {
            wx.showToast({
                title: t,
                image: "/public/images/icon_error.png"
            });
        });
    },
    setPicSingle: function(t) {
        var i = this, e = {
            id: i.data.picId,
            uid: i.data.user.id
        };
        a.http({
            url: a.apis.smk_pic_play_single,
            data: e
        }).then(function(a) {
            i.setData({
                picSingle: a,
                favStatus: a.fav
            }), t && i.setData({
                isShow: !0
            });
        }, function(t) {
            wx.showToast({
                title: t,
                image: "/public/images/icon_error.png"
            });
        });
    },
    spChange: function(t) {
        var a = this;
        a.setData({
            currPageNum: t.detail.current + 1,
            currTitle: a.data.picMulti.smeta[t.detail.current].title,
            thatImgUrl: this.data.picMulti.smeta[t.detail.current].attr_url,
            ewm: this.data.picMulti.smeta[t.detail.current].qrcode_url
        });
    },
    favClick: function() {
        var t = this, i = a.globalData.userInfo.id, e = t.data.picType, s = t.data.picId;
        if ("" == i || "" === e || "" == s) return wx.showToast({
            title: "输入必需项为空",
            image: "/public/images/icon_err.png",
            duration: 2e3
        }), !1;
        a.http({
            url: a.apis.set_fav,
            data: {
                uid: i,
                typeid: e,
                picid: s
            }
        }).then(function(a) {
            wx.showToast({
                title: "操作成功",
                icon: "success",
                duration: 2e3
            }), t.setData({
                favStatus: a
            });
        }, function(t) {
            wx.showToast({
                title: t,
                image: "/public/images/icon_error.png"
            });
        });
    },
    timestart: function(t) {
        1 == this.data.picType && this.setData({
            lastX: t.touches[0].pageX
        }), this.setData({
            timestart: t.timeStamp
        });
    },
    timeend: function(t) {
        this.setData({
            timeend: t.timeStamp
        }), this._move = !1;
    },
    touchmove: function(t) {
        var i = this;
        if (!i.data.sn && !this._move) {
            var e = !0;
            t.touches[0].pageX - this.data.lastX > 0 && (e = !1), this._move = !0;
            for (var s = a.singleList, n = "", o = 0; o < s.length; o++) if (s[o].id === this.data.picId) {
                e ? 0 === o ? n = -1 : (n = s[o - 1].id, i.setData({
                    isLeft: !0,
                    isRight: !1,
                    isShow: !1
                })) : o === s.length - 1 ? n = -1 : (n = s[o + 1].id, i.setData({
                    isLeft: !1,
                    isRight: !0,
                    isShow: !1
                }));
                break;
            }
            -1 !== n && (i.setData({
                picId: n
            }), this.setPicSingle(!0));
        }
    },
    createCanvasShareImage: function(t) {
        var i = this, e = wx.createCanvasContext("firstCanvas"), s = 680 / i.data.ratio, n = s / (t[0].banner.imgW / t[0].banner.imgH);
        n = n > .6 * i.data.windowHeight ? .6 * i.data.windowHeight : n, this.setData({
            canvasH: n + 260 / i.data.ratio,
            thatImgWidth: s,
            thatImgHeight: n + 250 / i.data.ratio
        }), e.drawImage(t[0].banner.imgUrl, 0, 0, s, n), e.fillStyle = "#ffffff", e.fillRect(0, n, s, 250 / i.data.ratio), 
        e.setFontSize(34 / i.data.ratio), e.fillStyle = "#000000", e.fillText(a.sys.config.appname, 30 / i.data.ratio, n + 40 / i.data.ratio + 20), 
        e.setFontSize(30 / i.data.ratio), e.fillStyle = "#c00", e.fillText("长按图片识别二维码即可进入", 30 / i.data.ratio, n + 40 / i.data.ratio + 20 + 100 / i.data.ratio);
        var o = 180 / i.data.ratio, c = o;
        e.drawImage(t[1].ewm.imgUrl, s - o - 25 / i.data.ratio, n + 25 / i.data.ratio, o, c), 
        e.draw(), wx.hideLoading(), i.setData({
            canvasShow: !0
        });
    },
    getSharBanner: function(t, a) {
        var i = this;
        wx.showLoading({
            title: "图片生成中"
        });
        var e = new Promise(function(a, i) {
            wx.getImageInfo({
                src: t,
                success: function(t) {
                    var i = t.width, e = t.height, s = t.path;
                    a({
                        banner: {
                            imgUrl: s,
                            imgW: i,
                            imgH: e
                        }
                    });
                },
                fail: function(t) {
                    i(t);
                }
            });
        }), s = new Promise(function(t, i) {
            wx.getImageInfo({
                src: a,
                success: function(a) {
                    var i = a.width, e = a.height, s = a.path;
                    t({
                        ewm: {
                            imgUrl: s,
                            imgW: i,
                            imgH: e
                        }
                    });
                },
                fail: function(t) {
                    i(t);
                }
            });
        });
        Promise.all([ e, s ]).then(function(t) {
            i.createCanvasShareImage(t);
        }).catch(function(t) {
            console.log(t);
        });
    },
    buildPosterSaveAlbum: function() {
        var t = this, i = 0 == t.data.picType ? t.data.thatImgUrl : t.data.picSingle.thumb_url, e = 0 == t.data.picType ? t.data.thatImgCode : t.data.picSingle.picsn, s = 0 == t.data.picType ? t.data.ewm : t.data.picSingle.qrcode_url;
        s ? t.getSharBanner(i, s) : a.http({
            url: a.apis.Smk_pic_build_qrcode,
            data: {
                picsn: e
            }
        }).then(function(a) {
            s = a.qrcode_url, t.getSharBanner(i, s);
        }, function(t) {
            wx.showToast({
                title: t,
                image: "/public/images/icon_error.png"
            });
        });
    },
    SaveAlbum: function() {
        var t = this, a = t.data.thatImgWidth, i = t.data.thatImgHeight;
        wx.canvasToTempFilePath({
            canvasId: "firstCanvas",
            width: a,
            height: i,
            destWidth: 3 * a,
            destHeight: 3 * i,
            success: function(a) {
                t.setData({
                    previewthumb_url: a.tempFilePath
                }), wx.saveImageToPhotosAlbum({
                    filePath: t.data.previewthumb_url,
                    success: function(t) {
                        wx.showToast({
                            title: "已保存到相册"
                        });
                    },
                    fail: function(a) {
                        (a.errMsg = "saveImageToPhotosAlbum:fail auth deny") && t.setData({
                            openSettingBtnHidden: !0
                        });
                    }
                });
            },
            complete: function(t) {
                console.log(t.errMsg);
            }
        });
    },
    handleSetting: function(t) {
        var a = this;
        t.detail.authSetting["scope.writePhotosAlbum"] ? (wx.showModal({
            title: "提示",
            content: "授权成功！",
            showCancel: !1
        }), a.setData({
            openSettingBtnHidden: !1
        })) : (wx.showModal({
            title: "警告",
            content: "若不打开授权，则无法将图片保存在相册中！",
            showCancel: !1
        }), a.setData({
            openSettingBtnHidden: !0
        }));
    },
    saveImg: function(t) {
        var a = this, i = t.currentTarget.dataset.imgurl, e = a.data.timeend - a.data.timestart, i = t.currentTarget.dataset.imgurl;
        if (e > 300) {
            var s = i;
            wx.downloadFile({
                url: s,
                success: function(t) {
                    wx.saveImageToPhotosAlbum({
                        filePath: t.tempFilePath,
                        success: function(t) {
                            wx.showModal({
                                content: "已保存到系统相册",
                                showCancel: !1
                            });
                        }
                    });
                }
            });
        } else {
            var n = [ i ];
            wx.previewImage({
                current: i,
                urls: n
            });
        }
    },
    onReady: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    windowWidth: a.windowWidth,
                    windowHeight: a.windowHeight
                }), t.setData({
                    ratio: 750 / t.data.windowWidth
                });
            }
        });
    }
}));