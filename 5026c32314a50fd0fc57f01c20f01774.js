function e(e) {
    for (var t = {}, r = e.split(","), n = 0; n < r.length; n++) t[r[n]] = !0;
    return t;
}

function t(e) {
    return e.replace(/<\?xml.*\?>\n/, "").replace(/<!doctype.*>\n/, "").replace(/<!DOCTYPE.*>\n/, "");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/, n = /^<\/([-A-Za-z0-9_]+)[^>]*>/, a = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g, i = e("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), s = e("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"), l = e("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), o = e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"), d = e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"), c = e("script,style"), h = function(e, t) {
    function h(e, r) {
        if (r) for (n = m.length - 1; n >= 0 && m[n] != r; n--) ; else var n = 0;
        if (n >= 0) {
            for (var a = m.length - 1; a >= n; a--) t.end && t.end(m[a]);
            m.length = n;
        }
    }
    var u, p, f, m = [], g = e;
    for (m.last = function() {
        return this[this.length - 1];
    }; e; ) {
        if (p = !0, m.last() && c[m.last()]) e = e.replace(new RegExp("([\\s\\S]*?)</" + m.last() + "[^>]*>"), function(e, r) {
            return r = r.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, "$1$2"), t.chars && t.chars(r), 
            "";
        }), h(0, m.last()); else if (0 == e.indexOf("\x3c!--") ? (u = e.indexOf("--\x3e")) >= 0 && (t.comment && t.comment(e.substring(4, u)), 
        e = e.substring(u + 3), p = !1) : 0 == e.indexOf("</") ? (f = e.match(n)) && (e = e.substring(f[0].length), 
        f[0].replace(n, h), p = !1) : 0 == e.indexOf("<") && (f = e.match(r)) && (e = e.substring(f[0].length), 
        f[0].replace(r, function(e, r, n, c) {
            if (r = r.toLowerCase(), s[r]) for (;m.last() && l[m.last()]; ) h(0, m.last());
            if (o[r] && m.last() == r && h(0, r), (c = i[r] || !!c) || m.push(r), t.start) {
                var u = [];
                n.replace(a, function(e, t) {
                    var r = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : d[t] ? t : "";
                    u.push({
                        name: t,
                        value: r,
                        escaped: r.replace(/(^|[^\\])"/g, '$1\\"')
                    });
                }), t.start && t.start(r, u, c);
            }
        }), p = !1), p) {
            var b = (u = e.indexOf("<")) < 0 ? e : e.substring(0, u);
            e = u < 0 ? "" : e.substring(u), t.chars && t.chars(b);
        }
        if (e == g) throw "Parse Error: " + e;
        g = e;
    }
    h();
}, u = {
    "*": [ "style", "class" ],
    a: [],
    abbr: [],
    b: [],
    blockquote: [],
    br: [],
    code: [],
    col: [ "span", "width" ],
    colgroup: [ "span", "width" ],
    dd: [],
    del: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    fieldset: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    hr: [],
    i: [],
    img: [ "alt", "src", "height", "width" ],
    ins: [],
    label: [],
    legend: [],
    li: [],
    ol: [ "start", "type" ],
    p: [],
    q: [],
    span: [],
    strong: [],
    sub: [],
    sup: [],
    table: [ "width" ],
    tbody: [],
    td: [ "colspan", "height", "rowspan", "width" ],
    tfoot: [],
    th: [ "colspan", "height", "rowspan", "width" ],
    thead: [],
    tr: [],
    ul: [],
    video: [ "src", "poster" ],
    audio: [ "src" ]
}, p = {
    p: "font-size: inherit;",
    img: "max-width: 100%;",
    table: "border-collapse: collapse; text-align:center; font-size: inherit;",
    td: "border: 1pt solid #eee;",
    th: "border: 1pt solid #eee;"
};

exports.default = function(e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e = t(e);
    var n = [], a = {
        node: "root",
        children: []
    };
    return h(e, {
        start: function(e, t, i) {
            var s = {
                name: e
            }, l = (u[e] || []).concat(u["*"]);
            if (l) {
                var o = !1;
                t = t.filter(function(e) {
                    return "style" === e.name && (o = !0), l.includes(e.name);
                }), o || t.push({
                    name: "style",
                    value: ""
                });
            } else t = [];
            if (0 !== t.length && (s.attrs = t.reduce(function(t, n) {
                var a = n.name, i = n.value;
                if ("style" === a) {
                    var s = p[e], l = r[e], o = "";
                    s && (o = s), l && (o += l), i = o + i;
                } else i.match(/ /) && (i = i.split(" "));
                return t[a] ? Array.isArray(t[a]) ? t[a].push(i) : t[a] = [ t[a], i ] : t[a] = i, 
                t;
            }, {})), "img" === e && s.attrs.width && "100%" === s.attrs.width) s.name = "image", 
            a.children.push(s); else if (i) {
                var d = n[0] || a;
                void 0 === d.children && (d.children = []), d.children.push(s);
            } else n.unshift(s);
        },
        end: function(e) {
            var t = n.shift();
            if (u[e] && (t.name !== e && console.error("invalid state: mismatch end tag"), "p" !== e || t.children && 0 !== t.children.length)) if (0 === n.length || [ "video", "audio" ].includes(e)) a.children.push(t); else {
                var r = n[0];
                void 0 === r.children && (r.children = []), r.children.push(t);
            }
        },
        chars: function(e) {
            var t = {
                type: "text",
                text: e
            };
            if (0 === n.length) a.children.push(t); else {
                var r = n[0];
                void 0 === r.children && (r.children = []), r.children.push(t);
            }
        },
        comment: function(e) {
            var t = {
                node: "comment",
                text: e
            }, r = n[0];
            void 0 === r.children && (r.children = []), r.children.push(t);
        }
    }), a.children.reduce(function(e, t) {
        if ([ "video", "audio", "image" ].includes(t.name)) e.push(t); else {
            var r = e[e.length - 1];
            Array.isArray(r) ? r.push(t) : e.push([ t ]);
        }
        return e;
    }, []);
};