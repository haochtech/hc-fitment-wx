function e(e) {
    for (var t = {}, r = e.split(","), s = 0; s < r.length; s++) t[r[s]] = !0;
    return t;
}

function t(e) {
    return e.replace(/<\?xml.*\?>\n/, "").replace(/<.*!doctype.*\>\n/, "").replace(/<.*!DOCTYPE.*\>\n/, "");
}

function r(e) {
    return e.replace(/\r?\n+/g, "").replace(/<!--.*?-->/gi, "").replace(/\/\*.*?\*\//gi, "").replace(/[ ]+</gi, "<");
}

function s(e) {
    var t = [];
    if (0 == o.length || !i) return (d = {}).node = "text", d.text = e, s = [ d ];
    e = e.replace(/\[([^\[\]]+)\]/g, ":$1:");
    for (var r = new RegExp("[:]"), s = e.split(r), n = 0; n < s.length; n++) {
        var l = s[n], d = {};
        i[l] ? (d.node = "element", d.tag = "emoji", d.text = i[l], d.baseSrc = a) : (d.node = "text", 
        d.text = l), t.push(d);
    }
    return t;
}

var n = "https", o = "", a = "", i = {}, l = require("af2debcf18dd2aa1d4a6a137866ba696.js"), d = require("bd8d42d8057892cbc1836ad4b7e5944f.js"), c = (e("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), 
e("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video")), u = e("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), p = e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"), 
e("wxxxcode-style,script,style,view,scroll-view,block");

module.exports = {
    html2json: function(e, o) {
        e = r(e = t(e)), e = l.strDiscode(e);
        var a = [], i = {
            node: o,
            nodes: [],
            images: [],
            thumb_urls: []
        }, g = 0;
        return d(e, {
            start: function(e, t, r) {
                var s = {
                    node: "element",
                    tag: e
                };
                if (0 === a.length ? (s.index = g.toString(), g += 1) : (void 0 === (x = a[0]).nodes && (x.nodes = []), 
                s.index = x.index + "." + x.nodes.length), c[e] ? s.tagType = "block" : u[e] ? s.tagType = "inline" : p[e] && (s.tagType = "closeSelf"), 
                0 !== t.length && (s.attr = t.reduce(function(e, t) {
                    var r = t.name, n = t.value;
                    return "class" == r && (console.log(n), s.classStr = n), "style" == r && (console.log(n), 
                    s.styleStr = n), n.match(/ /) && (n = n.split(" ")), e[r] ? Array.isArray(e[r]) ? e[r].push(n) : e[r] = [ e[r], n ] : e[r] = n, 
                    e;
                }, {})), "img" === s.tag) {
                    s.imgIndex = i.images.length;
                    var d = s.attr.src;
                    "" == d[0] && d.splice(0, 1), d = l.urlToHttpUrl(d, n), s.attr.src = d, s.from = o, 
                    i.images.push(s), i.thumb_urls.push(d);
                }
                if ("font" === s.tag) {
                    var m = [ "x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large" ], h = {
                        color: "color",
                        face: "font-family",
                        size: "font-size"
                    };
                    s.attr.style || (s.attr.style = []), s.styleStr || (s.styleStr = "");
                    for (var f in h) if (s.attr[f]) {
                        var v = "size" === f ? m[s.attr[f] - 1] : s.attr[f];
                        s.attr.style.push(h[f]), s.attr.style.push(v), s.styleStr += h[f] + ": " + v + ";";
                    }
                }
                if ("source" === s.tag && (i.source = s.attr.src), r) {
                    var x = a[0] || i;
                    void 0 === x.nodes && (x.nodes = []), x.nodes.push(s);
                } else a.unshift(s);
            },
            end: function(e) {
                var t = a.shift();
                if (t.tag !== e && console.error("invalid state: mismatch end tag"), "video" === t.tag && i.source && (t.attr.src = i.source, 
                delete i.source), 0 === a.length) i.nodes.push(t); else {
                    var r = a[0];
                    void 0 === r.nodes && (r.nodes = []), r.nodes.push(t);
                }
            },
            chars: function(e) {
                var t = {
                    node: "text",
                    text: e,
                    textArray: s(e)
                };
                if (0 === a.length) t.index = g.toString(), g += 1, i.nodes.push(t); else {
                    var r = a[0];
                    void 0 === r.nodes && (r.nodes = []), t.index = r.index + "." + r.nodes.length, 
                    r.nodes.push(t);
                }
            },
            comment: function(e) {}
        }), i;
    },
    emojisInit: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", r = arguments[2];
        o = e, a = t, i = r;
    }
};