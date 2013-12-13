(function() {
    var g, l = this,
    p = function() {},
    aa = function(a) {
        a.N = function() {
            return a.ec ? a.ec: a.ec = new a
        }
    },
    ba = function(a) {
        var b = typeof a;
        if ("object" == b) if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    },
    q = function(a) {
        return void 0 !== a
    },
    ca = function(a) {
        var b = ba(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    },
    da = function(a) {
        return "string" == typeof a
    },
    ea = function(a) {
        return "function" == ba(a)
    },
    fa = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    },
    ga = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    },
    s = function(a, b, c) {
        s = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? fa: ga;
        return s.apply(null, arguments)
    },
    ha = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    },
    ia = Date.now ||
    function() {
        return + new Date
    },
    ja = function(a) {
        a = a.split(".");
        var b = l;
        a[0] in b || !b.execScript || b.execScript("var " + a[0]);
        for (var c; a.length && (c = a.shift());) a.length ? b = b[c] ? b[c] : b[c] = {}: b[c] = !0
    },
    t = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.D = b.prototype;
        a.prototype = new c;
        a.Dc = function(a, c, f) {
            var h = Array.prototype.slice.call(arguments, 2);
            return b.prototype[c].apply(a, h)
        }
    };
    Function.prototype.bind = Function.prototype.bind ||
    function(a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return s.apply(null, c)
        }
        return s(this, a)
    };
    var ka = function(a) {
        this.A = a;
        this.g = !1;
        this.s = [];
        this.a = new Image
    },
    la = function(a) {
        if (!a.a.src) {
            var b = function() {
                if (!a.g) {
                    a.g = !0;
                    for (var b = 0,
                    d; d = a.s[b]; b++) d()
                }
            };
            a.a.onload = b;
            a.a.src = a.A; (a.a.complete || "complete" == a.a.readyState) && b()
        }
    },
    ma = function(a, b) {
        a.g ? b() : a.s.push(b)
    };
    var oa = function(a, b) {
        for (var c = 0,
        d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(d.length, e.length), h = 0; 0 == c && h < f; h++) {
            var k = d[h] || "",
            m = e[h] || "",
            n = RegExp("(\\d*)(\\D*)", "g"),
            r = RegExp("(\\d*)(\\D*)", "g");
            do {
                var u = n.exec(k) || ["", "", ""], N = r.exec(m) || ["", "", ""];
                if (0 == u[0].length && 0 == N[0].length) break;
                c = na(0 == u[1].length ? 0 : parseInt(u[1], 10), 0 == N[1].length ? 0 : parseInt(N[1], 10)) || na(0 == u[2].length, 0 == N[2].length) || na(u[2], N[2])
            } while ( 0 == c )
        }
        return c
    },
    na = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var pa = Array.prototype,
    qa = pa.indexOf ?
    function(a, b, c) {
        return pa.indexOf.call(a, b, c)
    }: function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (da(a)) return da(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++) if (c in a && a[c] === b) return c;
        return - 1
    },
    ra = pa.forEach ?
    function(a, b, c) {
        pa.forEach.call(a, b, c)
    }: function(a, b, c) {
        for (var d = a.length,
        e = da(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    sa = pa.map ?
    function(a, b, c) {
        return pa.map.call(a, b, c)
    }: function(a, b, c) {
        for (var d = a.length,
        e = Array(d), f = da(a) ? a.split("") : a, h = 0; h < d; h++) h in f && (e[h] = b.call(c, f[h], h, a));
        return e
    },
    ta = function(a, b) {
        var c;
        i: {
            c = a.length;
            for (var d = da(a) ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) {
                c = e;
                break i
            }
            c = -1
        }
        return 0 > c ? null: da(a) ? a.charAt(c) : a[c]
    },
    ua = function(a, b) {
        var c = qa(a, b),
        d; (d = 0 <= c) && pa.splice.call(a, c, 1);
        return d
    },
    va = function(a) {
        return pa.concat.apply(pa, arguments)
    },
    wa = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    },
    xa = function(a, b, c) {
        return 2 >= arguments.length ? pa.slice.call(a, b) : pa.slice.call(a, b, c)
    };
    var ya = function(a) {
        return function() {
            return a
        }
    },
    Aa = ya(!1),
    Ba = ya(!0);
    var Da = "StopIteration" in l ? l.StopIteration: Error("StopIteration"),
    Ea = function() {};
    Ea.prototype.next = function() {
        throw Da;
    };
    Ea.prototype.B = function() {
        return this
    };
    var Fa = function(a) {
        var b = [],
        c = 0,
        d;
        for (d in a) b[c++] = a[d];
        return b
    },
    Ga = function(a) {
        var b = [],
        c = 0,
        d;
        for (d in a) b[c++] = d;
        return b
    },
    Ha = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
    Ia = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Ha.length; f++) c = Ha[f],
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Ja = function(a, b) {
        this.g = {};
        this.a = [];
        this.A = this.s = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof Ja ? (c = a.Qa(), d = a.Ca()) : (c = Ga(a), d = Fa(a));
            for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
        }
    };
    Ja.prototype.Ca = function() {
        Ka(this);
        for (var a = [], b = 0; b < this.a.length; b++) a.push(this.g[this.a[b]]);
        return a
    };
    Ja.prototype.Qa = function() {
        Ka(this);
        return this.a.concat()
    };
    var Ka = function(a) {
        if (a.s != a.a.length) {
            for (var b = 0,
            c = 0; b < a.a.length;) {
                var d = a.a[b];
                La(a.g, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.s != a.a.length) {
            for (var e = {},
            c = b = 0; b < a.a.length;) d = a.a[b],
            La(e, d) || (a.a[c++] = d, e[d] = 1),
            b++;
            a.a.length = c
        }
    },
    Na = function(a, b) {
        return La(a.g, b) ? a.g[b] : void 0
    };
    Ja.prototype.set = function(a, b) {
        La(this.g, a) || (this.s++, this.a.push(a), this.A++);
        this.g[a] = b
    };
    Ja.prototype.Oa = function() {
        return new Ja(this)
    };
    Ja.prototype.B = function(a) {
        Ka(this);
        var b = 0,
        c = this.a,
        d = this.g,
        e = this.A,
        f = this,
        h = new Ea;
        h.next = function() {
            for (;;) {
                if (e != f.A) throw Error("The map has changed since the iterator was created");
                if (b >= c.length) throw Da;
                var h = c[b++];
                return a ? h: d[h]
            }
        };
        return h
    };
    var La = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var Oa = function(a) {
        if ("function" == typeof a.Ca) return a.Ca();
        if (da(a)) return a.split("");
        if (ca(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return Fa(a)
    },
    Pa = function(a, b, c) {
        if ("function" == typeof a.forEach) a.forEach(b, c);
        else if (ca(a) || da(a)) ra(a, b, c);
        else {
            var d;
            if ("function" == typeof a.Qa) d = a.Qa();
            else if ("function" != typeof a.Ca) if (ca(a) || da(a)) {
                d = [];
                for (var e = a.length,
                f = 0; f < e; f++) d.push(f)
            } else d = Ga(a);
            else d = void 0;
            for (var e = Oa(a), f = e.length, h = 0; h < f; h++) b.call(c, e[h], d && d[h], a)
        }
    };
    var Qa, Ra, Sa, Ta, Ua = function() {
        return l.navigator ? l.navigator.userAgent: null
    };
    Ta = Sa = Ra = Qa = !1;
    var Va;
    if (Va = Ua()) {
        var Wa = l.navigator;
        Qa = 0 == Va.lastIndexOf("Opera", 0);
        Ra = !Qa && ( - 1 != Va.indexOf("MSIE") || -1 != Va.indexOf("Trident"));
        Sa = !Qa && -1 != Va.indexOf("WebKit");
        Ta = !Qa && !Sa && !Ra && "Gecko" == Wa.product
    }
    var Xa = Qa,
    Ya = Ra,
    Za = Ta,
    $a = Sa,
    ab = l.navigator,
    bb = -1 != (ab && ab.platform || "").indexOf("Win"),
    cb = function() {
        var a = l.document;
        return a ? a.documentMode: void 0
    },
    db;
    i: {
        var eb = "",
        fb;
        if (Xa && l.opera) var gb = l.opera.version,
        eb = "function" == typeof gb ? gb() : gb;
        else if (Za ? fb = /rv\:([^\);]+)(\)|;)/: Ya ? fb = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/: $a && (fb = /WebKit\/(\S+)/), fb) var hb = fb.exec(Ua()),
        eb = hb ? hb[1] : "";
        if (Ya) {
            var ib = cb();
            if (ib > parseFloat(eb)) {
                db = String(ib);
                break i
            }
        }
        db = eb
    }
    var jb = db,
    kb = {},
    lb = function(a) {
        return kb[a] || (kb[a] = 0 <= oa(jb, a))
    },
    mb = l.document,
    nb = mb && Ya ? cb() || ("CSS1Compat" == mb.compatMode ? parseInt(jb, 10) : 5) : void 0;
    var ob = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
    qb = function(a) {
        if (pb) {
            pb = !1;
            var b = l.location;
            if (b) {
                var c = b.href;
                if (c && (c = (c = qb(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname) throw pb = !0,
                Error();
            }
        }
        return a.match(ob)
    },
    pb = $a;
    var rb = function(a, b) {
        var c;
        a instanceof rb ? (this.Ua = q(b) ? b: a.Ua, tb(this, a.ab), this.xb = a.xb, this.kb = a.kb, ub(this, a.wb), this.jb = a.jb, vb(this, a.Ta.Oa()), this.vb = a.vb) : a && (c = qb(String(a))) ? (this.Ua = !!b, tb(this, c[1] || "", !0), this.xb = wb(c[2] || ""), this.kb = wb(c[3] || ""), ub(this, c[4]), this.jb = wb(c[5] || ""), vb(this, c[6] || "", !0), this.vb = wb(c[7] || "")) : (this.Ua = !!b, this.Ta = new xb(null, 0, this.Ua))
    };
    g = rb.prototype;
    g.ab = "";
    g.xb = "";
    g.kb = "";
    g.wb = null;
    g.jb = "";
    g.vb = "";
    g.Ua = !1;
    g.toString = function() {
        var a = [],
        b = this.ab;
        b && a.push(yb(b, zb), ":");
        if (b = this.kb) {
            a.push("//");
            var c = this.xb;
            c && a.push(yb(c, zb), "@");
            a.push(encodeURIComponent(String(b)));
            b = this.wb;
            null != b && a.push(":", String(b))
        }
        if (b = this.jb) this.kb && "/" != b.charAt(0) && a.push("/"),
        a.push(yb(b, "/" == b.charAt(0) ? Ab: Bb)); (b = this.Ta.toString()) && a.push("?", b); (b = this.vb) && a.push("#", yb(b, Cb));
        return a.join("")
    };
    g.Oa = function() {
        return new rb(this)
    };
    var tb = function(a, b, c) {
        a.ab = c ? wb(b) : b;
        a.ab && (a.ab = a.ab.replace(/:$/, ""))
    },
    ub = function(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.wb = b
        } else a.wb = null
    },
    vb = function(a, b, c) {
        b instanceof xb ? (a.Ta = b, Db(a.Ta, a.Ua)) : (c || (b = yb(b, Eb)), a.Ta = new xb(b, 0, a.Ua))
    },
    wb = function(a) {
        return a ? decodeURIComponent(a) : ""
    },
    yb = function(a, b) {
        return da(a) ? encodeURI(a).replace(b, Fb) : null
    },
    Fb = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    },
    zb = /[#\/\?@]/g,
    Bb = /[\#\?:]/g,
    Ab = /[\#\?]/g,
    Eb = /[\#\?@]/g,
    Cb = /#/g,
    xb = function(a, b, c) {
        this.g = a || null;
        this.A = !!c
    },
    Ib = function(a) {
        if (!a.a && (a.a = new Ja, a.s = 0, a.g)) for (var b = a.g.split("&"), c = 0; c < b.length; c++) {
            var d = b[c].indexOf("="),
            e = null,
            f = null;
            0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
            e = decodeURIComponent(e.replace(/\+/g, " "));
            e = Gb(a, e);
            Hb(a, e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
        }
    };
    xb.prototype.a = null;
    xb.prototype.s = null;
    var Hb = function(a, b, c) {
        Ib(a);
        a.g = null;
        b = Gb(a, b);
        var d = Na(a.a, b);
        d || a.a.set(b, d = []);
        d.push(c);
        a.s++
    },
    Jb = function(a, b) {
        Ib(a);
        b = Gb(a, b);
        if (La(a.a.g, b)) {
            a.g = null;
            a.s -= Na(a.a, b).length;
            var c = a.a;
            La(c.g, b) && (delete c.g[b], c.s--, c.A++, c.a.length > 2 * c.s && Ka(c))
        }
    },
    Kb = function(a, b) {
        Ib(a);
        b = Gb(a, b);
        return La(a.a.g, b)
    };
    g = xb.prototype;
    g.Qa = function() {
        Ib(this);
        for (var a = this.a.Ca(), b = this.a.Qa(), c = [], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    g.Ca = function(a) {
        Ib(this);
        var b = [];
        if (da(a)) Kb(this, a) && (b = va(b, Na(this.a, Gb(this, a))));
        else {
            a = this.a.Ca();
            for (var c = 0; c < a.length; c++) b = va(b, a[c])
        }
        return b
    };
    g.set = function(a, b) {
        Ib(this);
        this.g = null;
        a = Gb(this, a);
        Kb(this, a) && (this.s -= Na(this.a, a).length);
        this.a.set(a, [b]);
        this.s++;
        return this
    };
    g.toString = function() {
        if (this.g) return this.g;
        if (!this.a) return "";
        for (var a = [], b = this.a.Qa(), c = 0; c < b.length; c++) for (var d = b[c], e = encodeURIComponent(String(d)), d = this.Ca(d), f = 0; f < d.length; f++) {
            var h = e;
            "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
            a.push(h)
        }
        return this.g = a.join("&")
    };
    g.Oa = function() {
        var a = new xb;
        a.g = this.g;
        this.a && (a.a = this.a.Oa(), a.s = this.s);
        return a
    };
    var Gb = function(a, b) {
        var c = String(b);
        a.A && (c = c.toLowerCase());
        return c
    },
    Db = function(a, b) {
        b && !a.A && (Ib(a), a.g = null, Pa(a.a,
        function(a, b) {
            var e = b.toLowerCase();
            b != e && (Jb(this, b), Jb(this, e), 0 < a.length && (this.g = null, this.a.set(Gb(this, e), wa(a)), this.s += a.length))
        },
        a));
        a.A = b
    };
    var Lb = navigator.userAgent,
    Mb = 0 <= Lb.indexOf("MSIE"),
    Nb = Mb && 0 <= Lb.indexOf("MSIE 8."),
    Ob = function() {
        var a = document.createElement("div");
        v(a, "position", "absolute");
        Mb && !Nb && v(a, "background", "rgba(255,255,255,.01)");
        return a
    },
    Pb = function() {
        var a = Ob();
        v(a, "userSelect", "none");
        v(a, "MozUserSelect", "none", "webkitUserSelect", "none", "webkitTapHighlightColor", "rgba(0,0,0,0)");
        a.unselectable = "on";
        return a
    },
    v = function(a, b) {
        for (var c = 1; c < arguments.length; c += 2) {
            var d = arguments[c],
            e = arguments[c + 1],
            f = a.style;
            f && d in f ? f[d] = e: d in a ? a[d] = e: Mb && f && "opacity" == d && (a.zoom = 1, d = (f.filter || "").replace(/alpha\([^)]*\)/, ""), isNaN(parseFloat(e)) || (d += "alpha(opacity=" + 100 * e + ")"), f.filter = d)
        }
    },
    Qb = function(a, b) {
        var c;
        if (c = a || window.event) {
            var d = c.targetTouches && c.targetTouches[0];
            c = d && void 0 !== d.pageX ? [d.pageX, d.pageY] : void 0 !== c.clientX ? [c.clientX + ("rtl" == document.dir ? -1 : 1) * (document.body.scrollLeft || document.documentElement.scrollLeft || 0), c.clientY + (document.body.scrollTop || document.documentElement.scrollTop || 0)] : void 0 !== c.pageX ? [c.pageX, c.pageY] : [0, 0]
        } else c = [0, 0];
        var d = b,
        e = 0,
        f = 0;
        if (d) {
            do e += d.offsetLeft,
            f += d.offsetTop;
            while (d = d.offsetParent)
        }
        d = [e, f];
        return [c[0] - d[0], c[1] - d[1]]
    },
    Rb = ["", "moz", "ms", "o", "webkit"],
    Sb = function(a) {
        var b = document;
        if (!b) return null;
        for (var c = 0; c < Rb.length; c++) {
            var d = Rb[c],
            e = a;
            0 < d.length && (e = a.charAt(0).toUpperCase() + a.substr(1));
            d += e;
            if ("undefined" != typeof b[d]) return d
        }
        return null
    },
    Tb = function() {
        var a = google.doodle;
        if (a && a.url) {
            var b = a.url;
            if (google.nav && google.nav.go) {
                a = b;
                if (0 == b.indexOf("/search")) {
                    a = new rb(window.location);
                    a.jb = "/search";
                    for (var b = (b instanceof rb ? b.Oa() : new rb(b, void 0)).Ta, c = b.Qa(), d = 0; d < c.length; d++) {
                        var e = c[d],
                        f = a,
                        h = e,
                        e = e ? b.Ca(e) : [];
                        f.Ta.set(h, 0 < e.length ? String(e[0]) : void 0)
                    }
                    a = a.toString()
                }
                google.nav.go(a)
            } else window.parent ? window.parent.location.replace(b) : window.location.replace(b)
        }
    },
    Ub = function() {
        for (var a = ["requestAnimationFrame", "mozRequestAnimationFrame", "msRequestAnimationFrame", "oRequestAnimationFrame", "webkitRequestAnimationFrame"], b = 0; b < a.length; b++) {
            var c = window[a[b]];
            if (c) return function(a, b, d) {
                return c(function(b) {
                    return a.call(d, b)
                },
                b)
            }
        }
        var d = 0,
        e = 33,
        f = 50;
        return function(a, b, c) {
            b && 0 > --f && (1.25 < b / e ? (d = 0, e = Math.min(66, ++e)) : 10 < ++d && (d = 0, e = Math.max(17, --e)));
            window.setTimeout(function(b) {
                a.call(c, b)
            },
            e)
        }
    },
    Vb = function(a, b, c) {
        Vb = Ub();
        return Vb(a, b, c)
    },
    Wb = function(a) {
        window.google && window.google.log && window.google.log("doodle", a)
    };
    var Xb = function(a, b) {
        this.A = a;
        this.a = b;
        this.g = new ka(a);
        this.s = !1;
        var c = this;
        ma(this.g,
        function() {
            c.s = !0
        })
    };
    Xb.prototype.getWidth = function(a) {
        return this.a[a][2]
    };
    var Yb = function(a) {
        a = w.a[a];
        return {
            width: a[2],
            height: a[3]
        }
    },
    Zb = function(a, b) {
        b && ma(a.g, b);
        la(a.g)
    },
    x = function(a, b, c, d, e, f, h) {
        var k = a.a[b];
        $b(a, b, c, 0, 0, k[2], k[3], d, e, f, h)
    },
    ac = function(a, b, c, d, e, f, h, k) {
        $b(a, b, c, d * e, 0, e, a.a[b][3], f, h, k, void 0)
    },
    $b = function(a, b, c, d, e, f, h, k, m, n, r) {
        if (a.s) {
            var u = a.a[b],
            N = n || 1,
            sb = f * N,
            N = h * N,
            Ma = r || !1;
            c.drawImage(a.g.a, u[0] + d, u[1] + e, f, h, k - (Ma ? sb / 2 : 0), m - (Ma ? N / 2 : 0), sb, N)
        } else Zb(a,
        function() {
            $b(a, b, c, d, e, f, h, k, m, n, r)
        })
    },
    bc = function(a, b) {
        var c = a.a[b];
        return "url(" + a.A + ") " + -(c[0] + 0) + "px " + -(c[1] + 0) + "px no-repeat"
    },
    cc = function(a, b) {
        var c;
        c = Pb();
        var d = a.a[b];
        c.style.width = d[2] + "px";
        c.style.height = d[3] + "px";
        c = [c, bc(a, b)];
        d = c[0];
        d.style.background = c[1];
        return d
    };
    var y = function(a, b) {
        this.x = q(a) ? a: 0;
        this.y = q(b) ? b: 0
    };
    y.prototype.Oa = function() {
        return new y(this.x, this.y)
    };
    y.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    y.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    var dc = function(a, b, c) {
        this.x = q(a) ? a: 0;
        this.y = q(b) ? b: 0;
        this.z = q(c) ? c: 0
    };
    dc.prototype.Oa = function() {
        return new dc(this.x, this.y, this.z)
    };
    var ec, fc = 1 / 46;
    var ic = function(a, b, c) {
        dc.call(this, a, b, 0);
        this.a = new dc;
        this.g = new y;
        c && (gc(this), hc(this))
    };
    t(ic, dc);
    var jc = function(a, b, c) {
        var d = new ic;
        z(d, a, b, c, void 0);
        return d
    };
    ic.prototype.Oa = function() {
        return new ic(this.x, this.y, !0)
    };
    var A = function(a, b, c) {
        c = c ? b.a.z: 0;
        return a.a.x == b.a.x - c && a.a.y == b.a.y - c
    },
    kc = function(a, b) {
        return a.a.x == b.a.x && a.a.y == b.a.y && a.a.z == b.a.z
    },
    lc = function(a, b, c, d) {
        a.x += b;
        a.y += c;
        a.z += d;
        gc(a);
        hc(a)
    },
    mc = function(a, b) {
        z(a, b, a.a.y, a.a.z)
    },
    nc = function(a, b) {
        z(a, a.a.x, b, a.a.z)
    },
    oc = function(a, b) {
        z(a, a.a.x, a.a.y, b)
    },
    gc = function(a) {
        a.a.x = a.x * fc | 0;
        a.a.y = a.y * fc | 0;
        a.a.z = a.z * fc | 0
    },
    hc = function(a) {
        var b = a.x / 2,
        c = a.y / 2,
        d = a.z / 2;
        a.g.x = 340 + (b - c);
        a.g.y = -112.5 + (b + c) / 2 - d
    };
    ic.prototype.set = function(a, b, c, d) {
        this.x = a;
        this.y = b;
        q(c) && (this.z = c);
        d || (gc(this), hc(this))
    };
    var pc = function(a, b, c) {
        a.g.x = b;
        a.g.y = c;
        b -= 340;
        c += 112.5;
        a.x = 2 * c + b;
        a.y = 2 * c - b;
        gc(a)
    },
    z = function(a, b, c, d, e) {
        a.a.x = b;
        a.a.y = c;
        a.a.z = d;
        a.x = 46 * b;
        a.y = 46 * c;
        a.z = 46 * d;
        e && (a.x += 23, a.y += 23);
        hc(a)
    };
    var B = function() {};
    B.prototype.fb = !1;
    B.prototype.M = function() {
        this.fb || (this.fb = !0, this.J())
    };
    B.prototype.J = function() {
        if (this.ka) for (; this.ka.length;) this.ka.shift()()
    };
    var qc = function(a) {
        a && "function" == typeof a.M && a.M()
    };
    var rc = function() {
        this.g = [];
        this.s = {}
    };
    t(rc, B);
    rc.prototype.C = 1;
    rc.prototype.B = 0;
    var D = function(a, b, c) {
        var d = C,
        e = d.s[a];
        e || (e = d.s[a] = []);
        var f = d.C;
        d.g[f] = a;
        d.g[f + 1] = b;
        d.g[f + 2] = c;
        d.C = f + 3;
        e.push(f);
        return f
    },
    E = function(a, b, c) {
        var d = C;
        if (a = d.s[a]) {
            var e = d.g; (a = ta(a,
            function(a) {
                return e[a + 1] == b && e[a + 2] == c
            })) && sc(d, a)
        }
    },
    sc = function(a, b) {
        if (0 != a.B) a.A || (a.A = []),
        a.A.push(b);
        else {
            var c = a.g[b];
            c && ((c = a.s[c]) && ua(c, b), delete a.g[b], delete a.g[b + 1], delete a.g[b + 2])
        }
    };
    rc.prototype.a = function(a, b) {
        var c = this.s[a];
        if (c) {
            this.B++;
            for (var d = xa(arguments, 1), e = 0, f = c.length; e < f; e++) {
                var h = c[e];
                this.g[h + 1].apply(this.g[h + 2], d)
            }
            this.B--;
            if (this.A && 0 == this.B) for (; c = this.A.pop();) sc(this, c)
        }
    };
    rc.prototype.J = function() {
        rc.D.J.call(this);
        delete this.g;
        delete this.s;
        delete this.A
    };
    var C = new rc;
    var tc = function(a) {
        this.d = a
    };
    t(tc, B);
    tc.prototype.Xa = function(a, b) {
        A(this.d, a.d) && this.Ba(b)
    }; ! Za && !Ya || Ya && Ya && 9 <= nb || Za && lb("1.9.1");
    Ya && lb("9");
    var uc = function(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    var vc = function() {};
    aa(vc);
    vc.prototype.init = function(a) {
        this.a || (this.a = document.createElement("canvas"), this.a.width = this.a.style.width = a.style.width = 680, this.a.height = this.a.style.height = a.style.height = 225, a.appendChild(this.a));
        this.g = this.a.getContext("2d")
    };
    var F = function() {
        return vc.N()
    };
    var G = [[2199, 414, 680, 225], [2346, 1047, 120, 49], [2301, 1666, 120, 47], [0, 1524, 116, 49], [204, 317, 116, 47], [323, 317, 1280, 46], [0, 918, 1312, 46], [1158, 222, 1155, 46], [1539, 511, 330, 49], [2222, 969, 165, 48], [791, 1666, 330, 48], [2568, 0, 165, 48], [369, 688, 1155, 46], [333, 788, 330, 48], [1886, 968, 165, 48], [1124, 1666, 340, 48], [2555, 918, 165, 48], [1481, 366, 1155, 45], [870, 563, 330, 49], [119, 1666, 165, 49], [333, 1094, 330, 49], [723, 0, 165, 48], [1445, 1524, 1155, 45], [390, 0, 330, 49], [2217, 0, 165, 49], [873, 511, 330, 49], [36, 563, 165, 49], [119, 1524, 1155, 44], [0, 1298, 330, 48], [623, 1666, 165, 48], [1659, 1424, 330, 48], [455, 1666, 165, 48], [891, 0, 1155, 44], [0, 737, 330, 48], [666, 1298, 165, 48], [2013, 1047, 330, 48], [0, 0, 165, 48], [1606, 317, 1155, 45], [1503, 1298, 330, 48], [1009, 737, 165, 47], [1992, 1424, 330, 47], [1277, 1524, 165, 47], [1445, 1607, 1155, 45], [2113, 642, 330, 47], [705, 511, 165, 48], [0, 788, 330, 47], [222, 0, 165, 48], [0, 1172, 1155, 45], [537, 563, 330, 48], [2603, 1607, 165, 48], [2446, 642, 330, 48], [1539, 563, 165, 47], [0, 1424, 1155, 45], [1002, 1298, 330, 48], [834, 788, 165, 48], [1326, 1472, 330, 48], [537, 460, 165, 48], [0, 222, 1155, 45], [2211, 788, 330, 48], [666, 788, 165, 48], [676, 737, 330, 48], [1562, 642, 165, 48], [1041, 460, 1155, 45], [1730, 642, 330, 48], [36, 317, 165, 48], [1467, 1666, 330, 48], [36, 414, 165, 48], [333, 172, 1155, 45], [1002, 788, 330, 48], [2133, 1666, 165, 48], [36, 642, 330, 48], [2469, 1047, 170, 48], [119, 1571, 1155, 45], [2222, 918, 330, 48], [873, 460, 165, 48], [1335, 788, 330, 48], [1510, 737, 165, 48], [891, 47, 1155, 43], [1177, 737, 330, 47], [204, 464, 165, 47], [204, 414, 330, 47], [834, 1298, 165, 47], [369, 642, 1190, 43], [2544, 788, 330, 47], [2049, 0, 165, 47], [1206, 511, 330, 47], [2325, 1424, 165, 47], [573, 1047, 1155, 44], [0, 1094, 330, 47], [2346, 1099, 165, 47], [1315, 918, 330, 47], [1439, 1172, 165, 47], [323, 366, 1155, 44], [1648, 918, 330, 47], [2221, 737, 165, 47], [204, 563, 330, 47], [1203, 563, 165, 47], [168, 1472, 1155, 44], [333, 1298, 330, 48], [1335, 1298, 165, 48], [1800, 1666, 330, 48], [1271, 1172, 165, 48], [119, 1619, 1155, 44], [1940, 1172, 330, 48], [1371, 563, 165, 48], [333, 737, 340, 48], [705, 460, 165, 48], [0, 271, 1155, 43], [2273, 1172, 330, 47], [2054, 968, 165, 46], [0, 172, 330, 47], [287, 1666, 165, 46], [537, 414, 1155, 43], [2325, 1474, 330, 47], [0, 1472, 165, 47], [1607, 1172, 330, 47], [1277, 1574, 165, 47], [0, 317, 33, 39], [0, 1718, 2565, 76], [1452, 968, 431, 76], [0, 839, 2565, 76], [0, 93, 2565, 76], [0, 1223, 2891, 72], [0, 1349, 2891, 72], [168, 0, 51, 78], [2063, 642, 47, 72], [1668, 788, 540, 22], [1491, 172, 540, 22], [1158, 1172, 110, 23], [2034, 172, 570, 22], [1678, 737, 540, 22], [0, 1047, 570, 22], [1445, 1572, 952, 32], [666, 1094, 1344, 75], [0, 968, 1449, 74]],
    wc = [[4354, 346, 527, 58], [0, 56, 245, 144], [0, 27, 121, 26], [0, 208, 4320, 205], [248, 0, 4103, 205], [4354, 263, 828, 37], [4354, 35, 680, 225], [4354, 303, 300, 40], [4657, 303, 380, 39], [0, 0, 46, 24], [4354, 0, 952, 32]],
    H = [[1341, 224, 680, 225], [0, 243, 1242, 25], [0, 224, 475, 16], [63, 82, 1026, 139], [1092, 82, 1026, 139], [0, 271, 646, 75], [0, 349, 1128, 27], [2240, 82, 375, 27], [1245, 243, 23, 27], [0, 82, 21, 35], [2629, 224, 37, 28], [0, 379, 875, 43], [2024, 224, 484, 225], [2669, 224, 325, 162], [24, 82, 36, 63], [2511, 224, 115, 79], [1271, 224, 67, 37], [0, 452, 3289, 98], [0, 0, 3289, 79], [2121, 82, 116, 103], [3032, 82, 228, 138], [2618, 82, 92, 92], [878, 379, 74, 38], [2669, 389, 360, 28]],
    I = [[142, 220, 170, 54], [5544, 200, 135, 54], [5411, 200, 130, 53], [1780, 129, 190, 53], [1272, 129, 161, 103], [0, 173, 784, 44], [1973, 129, 1056, 53], [5411, 129, 119, 68], [4322, 129, 70, 101], [0, 220, 20, 15], [0, 129, 936, 41], [1973, 258, 290, 40], [4395, 129, 330, 19], [939, 129, 330, 39], [0, 0, 6528, 126], [3202, 220, 19, 33], [315, 220, 19, 29], [1973, 185, 115, 32], [3152, 220, 47, 121], [23, 220, 116, 117], [1973, 220, 1176, 22], [3619, 129, 700, 10], [1973, 245, 700, 10], [4728, 129, 680, 225], [1436, 129, 341, 225], [3224, 129, 392, 209]],
    J = [[5858, 278, 160, 50], [90, 278, 140, 48], [5695, 278, 160, 50], [90, 430, 140, 48], [2531, 228, 1216, 47], [513, 228, 1184, 47], [90, 0, 681, 225], [6115, 0, 92, 63], [0, 82, 60, 11], [843, 36, 480, 87], [774, 36, 66, 75], [774, 126, 566, 75], [0, 96, 39, 41], [90, 329, 159, 98], [6115, 113, 73, 47], [6115, 66, 45, 44], [0, 43, 28, 36], [6115, 163, 72, 49], [5695, 331, 546, 111], [0, 140, 29, 40], [0, 0, 29, 40], [774, 0, 575, 33], [1700, 228, 828, 37], [5695, 445, 460, 51], [252, 278, 5440, 225], [1352, 0, 4760, 225], [0, 183, 87, 101], [1326, 36, 7, 46], [0, 287, 7, 46], [90, 228, 420, 33]],
    K = [[4083, 42, 680, 225], [0, 393, 47, 24], [5449, 0, 70, 35], [2030, 431, 47, 24], [2030, 393, 70, 35], [4766, 0, 680, 131], [0, 420, 551, 23], [6561, 0, 55, 80], [1385, 393, 70, 71], [0, 314, 5810, 76], [5687, 0, 680, 210], [1720, 393, 307, 143], [0, 0, 3091, 140], [0, 143, 4080, 124], [554, 467, 580, 27], [1137, 467, 580, 27], [5687, 213, 828, 37], [554, 393, 828, 29], [4083, 0, 300, 39], [4006, 393, 2660, 143], [2103, 393, 1900, 139], [6370, 0, 188, 93], [5522, 0, 162, 83], [0, 270, 6900, 41]];
    var w = new Xb("./sprite-calltoaction.png", [[3083, 0, 11, 35], [329, 78, 660, 63], [2804, 78, 30, 30], [1183, 78, 86, 75], [2804, 111, 99, 89], [1673, 78, 86, 75], [1067, 78, 30, 30], [1272, 78, 30, 30], [2088, 78, 72, 101], [86, 78, 72, 101], [1598, 78, 72, 101], [2481, 78, 72, 101], [2163, 78, 72, 101], [1762, 78, 72, 101], [992, 78, 72, 101], [2238, 78, 72, 101], [1439, 78, 72, 101], [2556, 78, 161, 162], [2720, 78, 81, 140], [1100, 78, 80, 135], [1356, 78, 80, 130], [1272, 111, 81, 131], [2396, 78, 82, 131], [2003, 78, 82, 130], [1514, 78, 81, 131], [0, 78, 83, 121], [2313, 78, 80, 127], [1920, 78, 80, 129], [1837, 78, 80, 121], [0, 0, 3080, 75], [161, 78, 165, 166]]),
    xc = new Xb("./sprite-crush.png", [[0, 0, 553, 4330]]),
    L = new Xb("./sprite-initial-2.png", G),
    M = new Xb("./sprite-level1.png", wc),
    O = new Xb("./sprite-level2.png", H),
    P = new Xb("./sprite-level3.png", I),
    Q = new Xb("./sprite-level4.png", J),
    R = new Xb("./sprite-level5.png", K),
    yc = new Xb("./sprite-finalscreen.png", [[6823, 65, 31, 29], [0, 0, 6820, 225], [6823, 0, 31, 29], [6823, 32, 30, 30], [6823, 129, 30, 30], [6823, 97, 31, 29]]),
    zc = [M, O, P, Q, R, yc];
    var Bc = function() {
        this.C = this.a = this.g = !1;
        D("g", this.ka, this);
        D("h", this.L, this);
        Ac(this)
    },
    Dc = function(a) {
        a.g ? Cc(a) : (a.B = ia(), a.s = 0, a.A = 0, a.g = !0, a.a = !0)
    };
    Bc.prototype.pause = function() {
        this.a && (this.s = ia(), this.a = !1)
    };
    var Cc = function(a) {
        a.g && !a.a ? (a.A += ia() - a.s, a.s = 0, a.a = !0) : a.g || Dc(a)
    },
    Ac = function(a) {
        a.B = 0;
        a.s = 0;
        a.A = 0;
        a.a = !1
    },
    Ec = function(a) {
        return (a.a ? ia() : a.s) - a.B - a.A
    };
    Bc.prototype.ka = function() {
        this.C = this.a;
        this.pause()
    };
    Bc.prototype.L = function() {
        this.C && (Cc(this), this.C = !1)
    };
    var Gc = function(a, b, c, d, e, f, h, k, m, n) {
        this.d = b;
        this.size = new y(1, 1);
        this.state = 0;
        this.i = a;
        this.offset = c;
        this.w = d;
        this.hidden = null != k ? !0 : !1;
        a = "f1";
        switch (e) {
        case 1:
            a = "d1";
            break;
        case 2:
            a = "e1";
            break;
        case 4:
            a = "i1"
        }
        this.opacity = f;
        this.bb = h;
        null != h && D("q", this.A, this);
        this.Wa = k;
        null != k && D("r", this.B, this);
        this.C = D(a, this.Xa, this);
        this.a = 0;
        this.s = new Bc;
        this.O = m;
        this.mb = n;
        this.g = p;
        Fc(this)
    };
    t(Gc, tc);
    var S = function(a, b) {
        for (var c = [], d = 0, e; e = a.i[d++];) {
            for (var f = e.o[2] / e.frames, h = [], k = e.o[3], m = e.o[0], n = e.o[1], r = 0; r < e.frames; ++r) h.push([r * f + m, n, f, k]);
            c.push({
                Pa: e.k,
                X: h,
                frames: e.frames
            })
        }
        d = b || jc(a.d.x, a.d.y, a.d.z || 0);
        c = new Gc(c, d, a.offset ? new y(a.offset.x, a.offset.y) : null, new y(a.w ? a.w.x: 0, a.w ? a.w.y: 0), a.K, q(a.opacity) ? a.opacity: 1, a.bb || null, a.Wa || null, 1E3 * a.O || 0, !!a.mb);
        a.size && (c.size.x = a.size.x, c.size.y = a.size.y);
        return c
    };
    Gc.prototype.J = function() {
        null != this.bb && E("q", this.A, this);
        null != this.Wa && E("r", this.B, this);
        sc(C, this.C)
    };
    Gc.prototype.A = function(a, b, c, d, e) {
        a == this.bb && (e ? z(this.d, b || 0, c || 0, d || 0) : lc(this.d, b || 0, c || 0, d || 0))
    };
    Gc.prototype.B = function(a) {
        a == this.Wa && (this.hidden = !1)
    };
    var Hc = function(a, b) {
        a.g = b
    },
    Fc = function(a, b) {
        0 < a.O && (a.hidden = !0);
        a.g = function() {
            a.hidden && 0 < a.O && 0 == a.a && Dc(a.s);
            if (a.s.a) {
                if (Ec(a.s) < a.O) return;
                a.hidden = !1;
                Ac(a.s);
                a.a = 0
            } else a.a++;
            a.a >= a.i[a.state].frames && (a.a = 0, 0 < a.O && !a.mb && (a.hidden = !0), a.mb && (a.state = (a.state + 1) % a.i.length));
            ea(b) && b()
        }
    },
    T = function(a, b, c, d) {
        var e = q(c) ? c: a.i[a.state].frames - 1;
        a.a = 0;
        a.g = function() {
            d && d(a.a + 1);
            a.a == e && ea(b) && b();
            a.a++;
            a.a >= a.i[a.state].frames && (a.a = a.i[a.state].frames - 1, a.g = p)
        }
    },
    Ic = function(a, b) {
        a.a = 0;
        a.g = function() {
            a.a++;
            a.a >= a.i[a.state].frames && (1 == a.state ? (a.a = a.i[a.state].frames - 1, a.g = p, ea(b) && b()) : (a.a = 0, a.state++))
        }
    },
    Jc = function(a, b) {
        a.a = a.i[a.state].frames - 1;
        a.g = function() {
            0 == a.a ? (a.g = p, ea(b) && b()) : a.a--
        }
    };
    Gc.prototype.Xa = function(a, b) {
        a.d.a.x >= this.d.a.x && a.d.a.x < this.d.a.x + this.size.x && a.d.a.y >= this.d.a.y && a.d.a.y < this.d.a.y + this.size.y && this.Ba(b)
    };
    Gc.prototype.Ba = function() {
        this.g();
        if (!this.hidden) {
            var a = this.i[this.state],
            b = this.a,
            c,
            d;
            this.offset ? (c = this.offset.x, d = this.offset.y) : (d = a.X[b][3], c = this.d.g.x + this.w.x - a.X[b][2] / 2, d = this.d.g.y + this.w.y + 23 - d);
            var e = a.X[b][0],
            f = a.X[b][1],
            h = a.X[b][2],
            b = a.X[b][3],
            k = F().g;
            1 > this.opacity && (k.save(), k.globalAlpha = this.opacity);
            k.drawImage(a.Pa.g.a, e, f, h, b, c, d, h, b);
            1 > this.opacity && k.restore()
        }
    };
    var Kc = function(a, b) {
        this.type = a;
        this.g = this.s = b
    };
    g = Kc.prototype;
    g.M = function() {};
    g.La = !1;
    g.Ub = !0;
    g.Hb = function() {
        this.La = !0
    };
    g.preventDefault = function() {
        this.Ub = !1
    };
    var Lc = function(a) {
        Lc[" "](a);
        return a
    };
    Lc[" "] = p;
    var Mc = !Ya || Ya && 9 <= nb,
    Nc = Ya && !lb("9"); ! $a || lb("528");
    Za && lb("1.9b") || Ya && lb("8") || Xa && lb("9.5") || $a && lb("528");
    Za && !lb("8") || Ya && lb("9");
    var Oc = function(a, b) {
        Kc.call(this, a ? a.type: "");
        this.g = this.s = null;
        this.keyCode = this.clientY = this.clientX = this.B = this.A = 0;
        this.a = this.state = null;
        a && this.init(a, b)
    };
    t(Oc, Kc);
    Oc.prototype.init = function(a, b) {
        this.type = a.type;
        this.s = a.target || a.srcElement;
        this.g = b;
        var c = a.relatedTarget;
        if (c && Za) try {
            Lc(c.nodeName)
        } catch(d) {}
        this.A = $a || void 0 !== a.offsetX ? a.offsetX: a.layerX;
        this.B = $a || void 0 !== a.offsetY ? a.offsetY: a.layerY;
        this.clientX = void 0 !== a.clientX ? a.clientX: a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY: a.pageY;
        this.keyCode = a.keyCode || 0;
        this.state = a.state;
        this.a = a;
        a.defaultPrevented && this.preventDefault();
        delete this.La
    };
    Oc.prototype.Hb = function() {
        Oc.D.Hb.call(this);
        this.a.stopPropagation ? this.a.stopPropagation() : this.a.cancelBubble = !0
    };
    Oc.prototype.preventDefault = function() {
        Oc.D.preventDefault.call(this);
        var a = this.a;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Nc) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch(b) {}
    };
    var Pc = "closure_listenable_" + (1E6 * Math.random() | 0),
    Qc = function(a) {
        try {
            return ! (!a || !a[Pc])
        } catch(b) {
            return ! 1
        }
    },
    Rc = 0;
    var Sc = function(a, b, c, d, e) {
        this.Sa = a;
        this.a = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.ub = e;
        this.Ob = ++Rc;
        this.$a = this.tb = !1
    },
    Tc = function(a) {
        a.$a = !0;
        a.Sa = null;
        a.a = null;
        a.src = null;
        a.ub = null
    };
    var Uc = function(a) {
        this.src = a;
        this.a = {};
        this.g = 0
    },
    Wc = function(a, b, c, d, e) {
        var f = a.a[b];
        f || (f = a.a[b] = [], a.g++);
        var h = Vc(f, c, d, e); - 1 < h ? (a = f[h], a.tb = !1) : (a = new Sc(c, a.src, b, !!d, e), a.tb = !1, f.push(a));
        return a
    },
    Xc = function(a, b) {
        var c = b.type;
        if (! (c in a.a)) return ! 1;
        var d = ua(a.a[c], b);
        d && (Tc(b), 0 == a.a[c].length && (delete a.a[c], a.g--));
        return d
    },
    Yc = function(a, b, c, d, e) {
        a = a.a[b];
        b = -1;
        a && (b = Vc(a, c, d, e));
        return - 1 < b ? a[b] : null
    },
    Vc = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.$a && f.Sa == b && f.capture == !!c && f.ub == d) return e
        }
        return - 1
    };
    var Zc = "closure_lm_" + (1E6 * Math.random() | 0),
    $c = {},
    ad = 0,
    bd = function(a, b, c, d, e) {
        if ("array" == ba(b)) {
            for (var f = 0; f < b.length; f++) bd(a, b[f], c, d, e);
            return null
        }
        c = cd(c);
        if (Qc(a)) a = a.listen(b, c, d, e);
        else {
            if (!b) throw Error("Invalid event type");
            var f = !!d,
            h = dd(a);
            h || (a[Zc] = h = new Uc(a));
            c = Wc(h, b, c, d, e);
            c.a || (d = ed(), c.a = d, d.src = a, d.Sa = c, a.addEventListener ? a.addEventListener(b, d, f) : a.attachEvent(b in $c ? $c[b] : $c[b] = "on" + b, d), ad++);
            a = c
        }
        return a
    },
    ed = function() {
        var a = fd,
        b = Mc ?
        function(c) {
            return a.call(b.src, b.Sa, c)
        }: function(c) {
            c = a.call(b.src, b.Sa, c);
            if (!c) return c
        };
        return b
    },
    gd = function(a, b, c, d, e) {
        if ("array" == ba(b)) for (var f = 0; f < b.length; f++) gd(a, b[f], c, d, e);
        else c = cd(c),
        Qc(a) ? a.unlisten(b, c, d, e) : a && (a = dd(a)) && (b = Yc(a, b, c, !!d, e)) && hd(b)
    },
    hd = function(a) {
        if ("number" == typeof a || !a || a.$a) return ! 1;
        var b = a.src;
        if (Qc(b)) return Xc(b.Ma, a);
        var c = a.type,
        d = a.a;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(c in $c ? $c[c] : $c[c] = "on" + c, d);
        ad--; (c = dd(b)) ? (Xc(c, a), 0 == c.g && (c.src = null, b[Zc] = null)) : Tc(a);
        return ! 0
    },
    jd = function(a, b, c, d) {
        var e = 1;
        if (a = dd(a)) if (b = a.a[b]) for (b = wa(b), a = 0; a < b.length; a++) {
            var f = b[a];
            f && f.capture == c && !f.$a && (e &= !1 !== id(f, d))
        }
        return Boolean(e)
    },
    id = function(a, b) {
        var c = a.Sa,
        d = a.ub || a.src;
        a.tb && hd(a);
        return c.call(d, b)
    },
    fd = function(a, b) {
        if (a.$a) return ! 0;
        if (!Mc) {
            var c;
            if (! (c = b)) i: {
                c = ["window", "event"];
                for (var d = l,
                e; e = c.shift();) if (null != d[e]) d = d[e];
                else {
                    c = null;
                    break i
                }
                c = d
            }
            e = c;
            c = new Oc(e, this);
            d = !0;
            if (! (0 > e.keyCode || void 0 != e.returnValue)) {
                i: {
                    var f = !1;
                    if (0 == e.keyCode) try {
                        e.keyCode = -1;
                        break i
                    } catch(h) {
                        f = !0
                    }
                    if (f || void 0 == e.returnValue) e.returnValue = !0
                }
                e = [];
                for (f = c.g; f; f = f.parentNode) e.push(f);
                for (var f = a.type,
                k = e.length - 1; ! c.La && 0 <= k; k--) c.g = e[k],
                d &= jd(e[k], f, !0, c);
                for (k = 0; ! c.La && k < e.length; k++) c.g = e[k],
                d &= jd(e[k], f, !1, c)
            }
            return d
        }
        return id(a, new Oc(b, this))
    },
    dd = function(a) {
        a = a[Zc];
        return a instanceof Uc ? a: null
    },
    kd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
    cd = function(a) {
        return ea(a) ? a: a[kd] || (a[kd] = function(b) {
            return a.handleEvent(b)
        })
    };
    var ld = function(a) {
        this.C = a;
        this.g = {}
    };
    t(ld, B);
    var md = [];
    ld.prototype.listen = function(a, b, c, d) {
        "array" != ba(b) && (md[0] = b, b = md);
        for (var e = 0; e < b.length; e++) {
            var f = bd(a, b[e], c || this.handleEvent, d || !1, this.C || this);
            if (!f) break;
            this.g[f.Ob] = f
        }
        return this
    };
    ld.prototype.unlisten = function(a, b, c, d, e) {
        if ("array" == ba(b)) for (var f = 0; f < b.length; f++) this.unlisten(a, b[f], c, d, e);
        else c = c || this.handleEvent,
        e = e || this.C || this,
        c = cd(c),
        d = !!d,
        b = Qc(a) ? Yc(a.Ma, String(b), c, d, e) : a ? (a = dd(a)) ? Yc(a, b, c, d, e) : null: null,
        b && (hd(b), delete this.g[b.Ob]);
        return this
    };
    ld.prototype.J = function() {
        ld.D.J.call(this);
        var a = this.g,
        b = hd,
        c;
        for (c in a) b.call(void 0, a[c], c, a);
        this.g = {}
    };
    ld.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var nd = function() {
        this.Ma = new Uc(this);
        this.W = this
    };
    t(nd, B);
    nd.prototype[Pc] = !0;
    nd.prototype.L = null;
    nd.prototype.removeEventListener = function(a, b, c, d) {
        gd(this, a, b, c, d)
    };
    var pd = function(a, b) {
        var c, d = a.L;
        if (d) {
            c = [];
            for (var e = 1; d; d = d.L) c.push(d),
            ++e
        }
        var d = a.W,
        e = b,
        f = e.type || e;
        if (da(e)) e = new Kc(e, d);
        else if (e instanceof Kc) e.s = e.s || d;
        else {
            var h = e,
            e = new Kc(f, d);
            Ia(e, h)
        }
        var h = !0,
        k;
        if (c) for (var m = c.length - 1; ! e.La && 0 <= m; m--) k = e.g = c[m],
        h = od(k, f, !0, e) && h;
        e.La || (k = e.g = d, h = od(k, f, !0, e) && h, e.La || (h = od(k, f, !1, e) && h));
        if (c) for (m = 0; ! e.La && m < c.length; m++) k = e.g = c[m],
        h = od(k, f, !1, e) && h;
        return h
    };
    nd.prototype.J = function() {
        nd.D.J.call(this);
        if (this.Ma) {
            var a = this.Ma,
            b = 0,
            c;
            for (c in a.a) {
                for (var d = a.a[c], e = 0; e < d.length; e++)++b,
                Tc(d[e]);
                delete a.a[c];
                a.g--
            }
        }
        this.L = null
    };
    nd.prototype.listen = function(a, b, c, d) {
        return Wc(this.Ma, String(a), b, c, d)
    };
    nd.prototype.unlisten = function(a, b, c, d) {
        var e;
        e = this.Ma;
        a = String(a);
        if (a in e.a) {
            var f = e.a[a];
            b = Vc(f, b, c, d); - 1 < b ? (Tc(f[b]), pa.splice.call(f, b, 1), 0 == f.length && (delete e.a[a], e.g--), e = !0) : e = !1
        } else e = !1;
        return e
    };
    var od = function(a, b, c, d) {
        b = a.Ma.a[String(b)];
        if (!b) return ! 0;
        b = wa(b);
        for (var e = !0,
        f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h && !h.$a && h.capture == c) {
                var k = h.Sa,
                m = h.ub || h.src;
                h.tb && Xc(a.Ma, h);
                e = !1 !== k.call(m, d) && e
            }
        }
        return e && !1 != d.Ub
    };
    var rd = function(a, b, c) {
        nd.call(this);
        this.Q = a || document;
        this.B = new ld(this);
        this.Db = b || !1;
        this.s = {};
        this.a = {};
        a = qd;
        this.a = {};
        for (b = a.length - 1; 0 <= b; b--) this.a[a[b][0]] = a[b][1];
        this.C = null;
        this.B.listen(this.Q, "keydown", this.ga, !0);
        this.B.listen(this.Q, "keyup", this.Ja, !0);
        c && !Ya && (window.addEventListener("deviceorientation", s(this.A, this), !0), window.addEventListener("MozOrientation", s(this.A, this), !0))
    };
    t(rd, nd);
    rd.prototype.g = null;
    var qd = [[32, 5], [13, 6], [38, 1], [40, 2], [37, 3], [39, 4], [87, 1], [83, 2], [65, 3], [68, 4], [90, 5]],
    ud = function(a) {
        a.g || (a.g = window.setInterval(function() {
            var b = ia(),
            c = 0,
            d;
            for (d in a.s) {
                var e = parseInt(d, 10);
                1E3 < b - a.s[e] ? (delete a.s[e], e = a.a[e], e in sd(a) || pd(a, new td(e, "b"))) : c++
            } ! c && a.g && (window.clearInterval(a.g), a.g = null)
        },
        100))
    };
    rd.prototype.A = function(a) {
        var b = a.gamma,
        c = a.beta,
        d = window.orientation || 0;
        if (q(b) && q(c)) {
            var e = a = 0;
            0 == d ? (a = b, e = c) : 90 == d ? (a = c, e = b) : -90 == d ? (a = -c, e = -b) : 180 == d && (a = -b, e = -c);
            b = null; - 30 > a ? b = 3 : 30 < a ? b = 4 : -30 > e ? b = 1 : 30 < e && (b = 2);
            a = this.C;
            this.C = b; ! a || a in sd(this) || pd(this, new td(a, "b"));
            b && pd(this, new td(b, "a"))
        }
    };
    rd.prototype.ga = function(a) {
        var b = a.keyCode,
        c = this.a[b];
        c && (pd(this, new td(c, "a")), this.Db && a.preventDefault && a.preventDefault(), this.s[b] = ia(), ud(this))
    };
    rd.prototype.Ja = function(a) {
        a = a.keyCode;
        var b = this.a[a];
        b && (delete this.s[a], b in sd(this) || pd(this, new td(b, "b")))
    };
    var sd = function(a) {
        var b = {},
        c;
        for (c in a.a) {
            var d = parseInt(c, 10);
            d in a.s && (b[a.a[d]] = !0)
        }
        a.C && (b[a.C] = !0);
        return b
    };
    rd.prototype.J = function() {
        qc(this.B);
        this.B = null;
        window.removeEventListener("deviceorientation", s(this.A, this), !0);
        window.removeEventListener("MozOrientation", s(this.A, this), !0);
        window.removeEventListener("devicemotion", s(this.A, this), !0);
        this.g && clearInterval(this.g);
        rd.D.J.call(this)
    };
    var td = function(a, b) {
        Kc.call(this, b);
        this.op = a
    };
    t(td, Kc);
    var vd = function() {
        this.s = new rd(document, !0, !1);
        this.A = new ld(this);
        this.g = new ld(this)
    };
    g = vd.prototype;
    g.Jb = function() {
        var a = F().a;
        this.A.listen(this.s, "a", this.xa);
        this.g.listen(a, "mousemove", this.Ya);
        this.g.listen(a, "mouseout", this.ob);
        this.g.listen(a, "click", this.ra)
    };
    g.Gb = function() {
        var a = F().a;
        this.A.unlisten(this.s, "a", this.xa);
        this.g.unlisten(a, "mousemove", this.Ya);
        this.g.unlisten(a, "mouseout", this.ob);
        this.g.unlisten(a, "click", this.ra)
    };
    g.xa = function() {
        C.a("a")
    };
    g.Ya = function() {
        C.a("a")
    };
    g.ob = function() {
        C.a("a")
    };
    g.ra = function() {
        C.a("a")
    };
    var wd, xd, yd = [18, 21, 22, 23, 24, 25, 26, 27, 28, 19, 20],
    zd = Yb(17),
    Ad = function(a, b, c, d, e) {
        x(w, yd[b], a, c + 40 * e, d + e * (zd.height - Yb(yd[b]).height), e);
        x(w, 30, a, c, d, e)
    };
    var U = function() {
        this.Q = null;
        this.s = new Bc;
        this.W = this.ka = this.C = this.g = 0;
        D("j1", this.Ja, this);
        D("y", this.ga, this)
    };
    aa(U);
    U.prototype.init = function(a) {
        this.Q = a;
        var b = a.i.Cb;
        this.B = [];
        for (var c = 0; c < b.index.length; ++c) {
            for (var d = b.X[b.index[c]], e = d[0], f = d[1], h = d[2] / b.frames, d = d[3], k = [], m = 0; m < b.frames; ++m) k.push([m * h + e, f, h, d]);
            this.B[c] = {
                yb: {
                    Pa: b.k,
                    X: k,
                    frames: k.length
                },
                index: b.index[c],
                Bb: !1
            }
        }
        this.L = a.i.Ac;
        Bd(this)
    };
    var Bd = function(a) {
        for (var b = 0,
        c; c = a.B[b++];) c.Bb = !1;
        a.ka = 0;
        a.fb = 0;
        a.A = 0;
        Ac(a.s)
    },
    Cd = function(a) {
        a.C = 50;
        a.fb++;
        a.a = (a.a + 1) % 11;
        var b = a.s;
        b.g && (b.B -= 1E3 * a.Q.qc)
    };
    U.prototype.ga = function() {
        this.B[this.ka].Bb = !0;
        this.ka++
    };
    U.prototype.Ja = function(a, b) {
        var c = F().g;
        c.fillStyle = "rgba(255,255,255,0.5)";
        c.fillRect(0, 0, 235, 31);
        c.fillStyle = "rgba(" + this.g + ",0,0,0.65)";
        c.font = "bold 24px Arial";
        c.textAlign = "right";
        var d = this.a,
        e = F().g;
        x(w, 17, e, 4, 3, 0.25);
        wd != d && (wd = d, xd = 0);
        40 > xd && (ac(w, 29, e, xd, 77, 4, 3, 0.5625), xd++);
        Ad(e, d, 4, 3, 0.25);
        d = 50;
        x(this.L.k, this.L.index, c, d, 4);
        for (e = 0; e < this.B.length; ++e) {
            var f = this.B[e],
            h = f.yb,
            k = f.index,
            m = b % h.frames,
            n = h.X[m][2];
            f.Bb && ac(h.Pa, k, c, m, n, d, 4);
            d += n
        }
        c.fillText(Dd(this), 229, 24);
        255 <= this.g ? (this.g = 255, this.C = -8) : -8 == this.C && 0 > this.g && (this.C = this.g = 0);
        this.g += this.C
    };
    var Dd = function(a) {
        var b = Ec(a.s) / 1E3 | 0;
        a = b % 60;
        b = b / 60 | 0;
        99 < b && (b = 99, a = 59);
        return b + ":" + (10 > a ? "0" + a: a)
    };
    var Ed = 0,
    Fd = 0,
    Gd = function(a) {
        var b = U.N(),
        c = b.A,
        d = Math.floor(Ec(b.s) / 1E3),
        e = d - Ed;
        0 > e && (e = 0);
        Ed = d;
        var f = b.fb,
        h = f - Fd;
        0 > h && (h = 0);
        Fd = f;
        Wb(["who", "a:" + a, "l:" + c, "t:" + d, "dt:" + e, "r:" + f, "dr:" + h, "d:" + (q(b.a) ? b.a: -1), "n:" + b.ka, "p:" + b.W].join())
    };
    var Kd = function(a) {
        var b = Hd,
        c = xc.g.a,
        d, e = xc.a[0];
        d = {
            x: e[0],
            y: e[1]
        };
        var f = b.frames;
        this.s = f.length;
        this.a = 0;
        d || (d = {
            x: 0,
            y: 0
        });
        e = document.createElement("canvas");
        e.getContext ? (c = new Id(e, f, c, d), e.width = b.width, e.height = b.height, a.appendChild(e)) : c = new Jd(a, f, c.src, d);
        this.g = c
    },
    Jd = function(a, b, c, d) {
        this.g = {};
        if (Mb) try {
            document.execCommand("BackgroundImageCache", !1, !0)
        } catch(e) {}
        for (var f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h.length) {
                var k = document.createElement("div");
                k.style.visibility = "hidden";
                for (var m = 0; m < h.length; m++) {
                    var n = h[m],
                    r = n[0],
                    u = n[1],
                    N = n[2],
                    sb = n[3],
                    Ma = n[4],
                    n = n[5],
                    Ca = document.createElement("div"),
                    Y = Ca.style;
                    Y.position = "absolute";
                    Y.left = r + "px";
                    Y.top = u + "px";
                    Y.width = Ma + "px";
                    Y.height = n + "px";
                    Y.background = "url(" + c + ") no-repeat " + ( - N - d.x) + "px " + ( - sb - d.y) + "px";
                    k.appendChild(Ca)
                }
                a.appendChild(k);
                this.g[f] = k
            }
        }
    };
    Jd.prototype.a = function(a) {
        if (0 == a) for (var b = 0,
        c; c = this.g[b]; b++) c.style.visibility = "hidden";
        if (a = this.g[a]) a.style.visibility = ""
    };
    var Id = function(a, b, c, d) {
        this.s = a.getContext("2d");
        this.A = b;
        this.B = c;
        this.g = d
    };
    Id.prototype.a = function(a) {
        a = this.A[a];
        for (var b = 0; b < a.length; b++) {
            var c = a[b],
            d = c[4],
            e = c[5];
            this.s.drawImage(this.B, c[2] + this.g.x, c[3] + this.g.y, d, e, c[0], c[1], d, e)
        }
    };
    var Hd = {
        width: 680,
        height: 130,
        frames: [[[33, 0, 357, 3532, 88, 120], [141, 0, 0, 3484, 89, 120], [248, 22, 182, 3411, 89, 77], [353, 0, 89, 3605, 88, 119], [457, 0, 179, 3489, 88, 119], [561, 0, 272, 3382, 89, 120]], [[248, 22, 92, 3411, 89, 77]], [[257, 22, 69, 3846, 67, 77]], [[265, 22, 348, 3908, 46, 77]], [[274, 22, 356, 4206, 24, 77]], [[280, 0, 304, 4210, 25, 120]], [[269, 0, 348, 3986, 46, 120]], [[258, 0, 0, 3793, 68, 120]], [[247, 0, 362, 3411, 89, 120]], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [[212, 50, 438, 4246, 16, 13]], [[212, 46, 475, 4213, 21, 17]], [[212, 41, 330, 4206, 25, 22]], [[212, 37, 276, 4183, 30, 26]], [[212, 32, 112, 4185, 34, 31]], [[33, 0, 446, 3532, 88, 120], [141, 0, 0, 1277, 195, 120], [353, 0, 0, 3605, 88, 119], [457, 0, 268, 3503, 88, 119], [561, 0, 452, 3411, 89, 120]], [[33, 0, 93, 3250, 92, 121], [141, 0, 0, 1037, 199, 121], [353, 0, 372, 3290, 92, 120], [457, 0, 279, 3261, 92, 120], [561, 0, 0, 3239, 92, 121]], [[35, 0, 94, 3005, 93, 122], [143, 0, 200, 916, 199, 122], [354, 0, 94, 3128, 93, 121], [458, 0, 186, 3250, 92, 121], [563, 0, 0, 3361, 91, 122]], [[37, 1, 388, 2588, 95, 122], [145, 1, 0, 793, 200, 122], [356, 0, 94, 2882, 93, 122], [459, 0, 0, 2876, 93, 122], [563, 1, 281, 3138, 92, 122]], [[39, 3, 405, 2356, 97, 120], [147, 3, 201, 794, 200, 121], [356, 2, 0, 2754, 94, 121], [460, 2, 376, 3057, 93, 121], [562, 3, 282, 3017, 93, 120]], [[43, 4, 194, 2420, 96, 120], [149, 4, 0, 916, 199, 120], [357, 3, 288, 2656, 94, 120], [460, 3, 282, 2896, 93, 120], [562, 4, 0, 2999, 93, 120]], [[47, 6, 97, 2526, 96, 118], [152, 5, 200, 1039, 198, 119], [358, 5, 285, 2777, 94, 118], [459, 5, 0, 3120, 93, 118], [559, 6, 96, 2645, 95, 118]], [[50, 7, 307, 2356, 97, 117], [154, 7, 0, 1159, 197, 117], [358, 6, 95, 2764, 94, 117], [458, 6, 190, 2774, 94, 117], [558, 7, 192, 2656, 95, 117]], [[54, 8, 209, 2303, 97, 116], [158, 8, 198, 1238, 195, 116], [359, 7, 188, 3121, 92, 116], [457, 7, 376, 2940, 93, 116], [555, 8, 0, 2637, 95, 116]], [[59, 10, 0, 2522, 96, 114], [160, 10, 196, 1355, 194, 114], [358, 9, 188, 3006, 93, 114], [455, 9, 380, 2825, 94, 114], [551, 10, 194, 2541, 96, 114]], [[63, 11, 97, 2412, 96, 113], [163, 11, 194, 1470, 192, 113], [358, 10, 188, 2892, 93, 113], [453, 10, 383, 2711, 94, 113], [548, 11, 291, 2474, 96, 113]], [[68, 13, 388, 2477, 96, 110], [166, 13, 0, 1478, 189, 110], [358, 12, 374, 3179, 92, 110], [451, 12, 190, 1584, 189, 111]], [[72, 14, 0, 2412, 96, 109], [169, 14, 0, 1589, 187, 109], [357, 13, 0, 319, 278, 110]], [[77, 15, 0, 0, 553, 107]], [[82, 16, 0, 108, 543, 106]], [[89, 18, 0, 215, 529, 103]], [[95, 20, 90, 3489, 88, 100], [184, 20, 375, 1768, 171, 100], [356, 19, 279, 319, 255, 101]], [[102, 21, 279, 421, 252, 98], [355, 21, 0, 430, 249, 98]], [[108, 23, 178, 3609, 83, 95], [192, 23, 0, 1699, 162, 95], [355, 22, 250, 520, 241, 96]], [[115, 25, 262, 3623, 80, 92], [196, 24, 0, 1795, 156, 93], [354, 24, 0, 529, 234, 93]], [[122, 26, 421, 3653, 77, 89], [201, 26, 157, 1795, 150, 89], [353, 25, 235, 617, 226, 90]], [[128, 28, 77, 3759, 75, 86], [205, 27, 308, 1869, 145, 87], [353, 27, 0, 623, 218, 87]], [[136, 29, 305, 3750, 71, 84], [209, 29, 0, 1889, 140, 84], [352, 28, 219, 708, 209, 85]], [[143, 31, 449, 3811, 68, 80], [212, 30, 141, 1889, 136, 81], [350, 30, 0, 711, 202, 81]], [[150, 32, 198, 1159, 196, 78], [350, 31, 0, 1398, 193, 79]], [[158, 33, 188, 1696, 186, 75], [349, 33, 260, 3835, 58, 74], [408, 33, 411, 1957, 124, 75]], [[165, 35, 375, 1696, 177, 71], [348, 34, 319, 3835, 55, 72], [405, 34, 240, 2230, 117, 72]], [[173, 37, 375, 3835, 55, 68], [232, 37, 0, 3983, 52, 68], [290, 36, 53, 3924, 50, 69], [346, 36, 0, 3914, 52, 68], [400, 36, 358, 2286, 111, 69]], [[180, 38, 487, 3926, 52, 65], [236, 38, 104, 3986, 49, 65], [291, 38, 204, 3926, 48, 65], [344, 38, 154, 3986, 49, 64], [395, 38, 0, 2346, 106, 65]], [[187, 40, 104, 3924, 50, 61], [240, 40, 253, 3989, 47, 61], [292, 39, 301, 3910, 46, 62], [342, 39, 253, 3926, 47, 62], [390, 39, 107, 2346, 101, 62]], [[194, 41, 204, 3992, 48, 58], [244, 41, 395, 3984, 44, 58], [293, 41, 440, 3987, 43, 58], [340, 41, 440, 3928, 44, 58], [385, 41, 291, 2588, 96, 58]], [[202, 42, 395, 3928, 44, 55], [248, 42, 484, 3992, 42, 55], [294, 42, 172, 4084, 41, 55], [338, 42, 278, 1957, 132, 55]], [[209, 44, 395, 4043, 42, 51], [252, 44, 424, 4112, 40, 51], [295, 44, 40, 4151, 38, 51], [336, 44, 0, 1974, 123, 51]], [[216, 45, 343, 3653, 77, 48], [296, 45, 76, 4203, 35, 48], [333, 45, 358, 2237, 116, 48]], [[223, 47, 377, 3777, 71, 44], [297, 47, 147, 4206, 33, 44], [331, 46, 0, 2300, 107, 45]], [[230, 48, 137, 3846, 66, 41], [298, 48, 245, 4183, 30, 41], [329, 48, 108, 2300, 98, 41]], [[237, 50, 199, 3888, 60, 37], [299, 50, 276, 4210, 27, 37], [327, 49, 92, 3372, 90, 38]], [[243, 51, 431, 3892, 55, 35], [299, 51, 0, 2264, 108, 35]], [], [[247, 52, 214, 4084, 41, 32], [290, 51, 229, 3759, 75, 33], [371, 52, 381, 4239, 20, 32], [396, 52, 492, 4249, 11, 8], [392, 64, 481, 4240, 11, 8], [396, 76, 475, 4231, 11, 8]], [[254, 51, 242, 2094, 120, 33], [378, 52, 313, 4140, 38, 32]], [[263, 51, 365, 2033, 120, 33], [387, 52, 118, 4151, 38, 32]], [[273, 51, 121, 2094, 120, 33], [396, 52, 505, 4114, 39, 32]], [[282, 51, 122, 2026, 121, 33], [406, 52, 80, 4118, 38, 32]], [[292, 51, 121, 2060, 120, 33], [416, 52, 235, 4117, 38, 32]], [[302, 51, 121, 2128, 120, 33], [425, 52, 465, 4147, 39, 32]], [[311, 51, 244, 2013, 120, 33], [435, 52, 157, 4140, 38, 32]], [[321, 51, 363, 2101, 120, 33], [444, 52, 465, 4114, 39, 32]], [[330, 51, 0, 2026, 121, 33], [454, 52, 0, 4151, 39, 32]], [[340, 51, 0, 2094, 120, 33], [464, 52, 235, 4150, 38, 32]], [[350, 51, 0, 2162, 120, 33], [473, 52, 40, 4118, 39, 32]], [[359, 51, 363, 2067, 120, 33], [483, 52, 274, 4117, 38, 32]], [[368, 51, 0, 2060, 120, 33], [492, 52, 157, 4140, 38, 32]], [[378, 51, 0, 2128, 120, 33], [501, 52, 505, 4147, 39, 32]], [[387, 51, 242, 2060, 120, 33], [511, 52, 274, 4150, 38, 32]], [[397, 51, 360, 2203, 119, 33], [520, 52, 196, 4140, 38, 32]], [[406, 51, 240, 2196, 119, 33], [529, 52, 157, 4173, 38, 32]], [[415, 51, 242, 2128, 120, 33], [538, 52, 0, 4118, 39, 32]], [[424, 51, 121, 2162, 120, 33], [548, 52, 352, 4140, 38, 32]], [[433, 51, 363, 2135, 120, 33], [557, 52, 313, 4173, 38, 32]], [[442, 51, 242, 2162, 120, 33], [566, 52, 391, 4164, 37, 32]], [[451, 51, 0, 2196, 119, 33], [575, 52, 467, 4180, 37, 32]], [[460, 52, 438, 4046, 42, 32], [503, 51, 0, 3725, 76, 33], [583, 52, 196, 4173, 38, 32]], [[469, 51, 0, 2230, 119, 33], [592, 52, 431, 4213, 21, 32], [618, 52, 468, 4246, 12, 8], [614, 64, 455, 4255, 12, 8], [617, 76, 539, 4213, 13, 8]], [[477, 51, 363, 2169, 120, 33], [601, 52, 429, 4180, 37, 32]], [[486, 52, 481, 4048, 42, 32], [529, 51, 154, 3725, 76, 33], [610, 52, 0, 4184, 37, 32]], [[495, 51, 120, 2230, 119, 33], [618, 52, 352, 4140, 38, 32]], [[503, 52, 438, 4079, 42, 32], [546, 51, 385, 3743, 76, 33], [627, 52, 38, 4203, 37, 32]], [[511, 51, 120, 2196, 119, 33], [635, 52, 505, 4180, 37, 32]], [[520, 52, 86, 4085, 42, 32], [563, 51, 153, 3759, 75, 33], [643, 52, 453, 4213, 21, 32], [669, 52, 504, 4246, 11, 8], [665, 64, 455, 4246, 12, 8], [669, 76, 480, 4255, 11, 8]], [[528, 52, 43, 4052, 42, 32], [571, 51, 462, 3743, 76, 33], [652, 52, 518, 4213, 20, 32], [677, 52, 532, 4255, 3, 8], [673, 64, 514, 4255, 7, 8], [677, 76, 528, 4255, 3, 8]], [[536, 52, 0, 4085, 42, 32], [579, 51, 231, 3716, 76, 33], [660, 52, 497, 4213, 20, 32]], [[544, 52, 481, 4081, 42, 32], [587, 51, 77, 3725, 76, 33], [668, 52, 539, 4222, 12, 32]], [[552, 52, 0, 4052, 42, 32], [595, 51, 308, 3716, 76, 33], [676, 76, 528, 4246, 4, 8]], [[560, 52, 43, 4085, 42, 32], [603, 51, 0, 3759, 76, 33]], [[568, 52, 86, 4052, 42, 32], [611, 51, 449, 3777, 69, 33]], [[576, 52, 129, 4085, 42, 32], [619, 51, 137, 3888, 61, 33]], [[584, 52, 256, 4084, 41, 32], [627, 51, 487, 3892, 53, 33]], [[591, 52, 129, 4052, 42, 32], [634, 51, 301, 3973, 46, 33]], [[599, 52, 215, 4051, 41, 32], [642, 51, 79, 4151, 38, 33]], [[606, 52, 172, 4051, 42, 32], [649, 52, 213, 4206, 31, 32]], [[614, 52, 382, 4107, 41, 32], [656, 52, 406, 4213, 24, 32]], [[621, 52, 340, 4107, 41, 32], [664, 52, 421, 4246, 16, 32]], [[628, 52, 298, 4084, 41, 32], [671, 52, 504, 4255, 9, 32]], [[635, 52, 257, 4051, 41, 32], [678, 56, 536, 4246, 2, 24]], [[642, 52, 352, 4173, 38, 32]], [[649, 52, 181, 4206, 31, 32]], [[656, 52, 381, 4206, 24, 32]], [[662, 52, 402, 4246, 18, 32]], [[669, 52, 468, 4255, 11, 32]], [[675, 52, 522, 4246, 5, 32]], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
    };
    var Od = function(a, b) {
        this.W = !1;
        this.C = 0;
        this.a = -68;
        this.s = 0;
        this.B = Pb();
        this.g = document.createElement("canvas");
        this.Q = this.g.getContext("2d");
        this.g.width = Hd.width;
        this.g.height = Hd.height;
        var c = this;
        this.g.onclick = function() {
            c.g.onclick = p;
            C.a("a");
            b();
            Ld(c)
        };
        this.g.onmousemove = function(a) {
            C.a("a");
            a = Qb(a, c.B);
            var b = Math.abs(a[1] - 60);
            c.W = Math.abs(a[0] - 295) <= Md && b <= Nd
        };
        this.L = new Kd(this.B);
        this.A = this.L.g.s;
        v(this.B, "background-color", "#fff", "bottom", 0, "left", "-11px");
        v(this.g, "bottom", 0, "cursor", "pointer", "left", "-11px", "position", "absolute");
        a.appendChild(this.B);
        a.appendChild(this.g)
    };
    t(Od, B);
    Od.prototype.J = function() {
        uc(this.B);
        uc(this.g)
    };
    var Md = w.getWidth(3) / 2,
    Nd = w.a[3][3] / 2,
    Pd = [8, 9, 10, 11, 12, 13, 14, 15, 16],
    Qd = 49 + Pd.length,
    Rd = 90 + Pd.length,
    Ld = function(a) {
        a.A.clearRect(0, 0, Hd.width, Hd.height);
        a = a.L;
        a.g.a(a.a)
    };
    var V = function(a) {
        this.Ja = a;
        this.Ha = !1;
        this.W = []
    };
    t(V, B);
    V.prototype.J = function() {
        this.g()
    };
    V.prototype.B = function() {
        this.Ja.Jb();
        this.Ha = !0
    };
    V.prototype.g = function() {
        this.Ja.Gb();
        this.Ha = !1
    };
    var Sd = function(a, b, c) {
        a.W.push(D(b, c, a))
    },
    Td = function(a) {
        for (var b = 0; b < a.W.length; b++) sc(C, a.W[b]);
        a.W = []
    };
    var Ud;
    Ud = !1;
    var Vd = Ua();
    Vd && ( - 1 != Vd.indexOf("Firefox") || -1 != Vd.indexOf("Camino") || -1 != Vd.indexOf("iPhone") || -1 != Vd.indexOf("iPod") || -1 != Vd.indexOf("iPad") || -1 != Vd.indexOf("Chrome") || -1 != Vd.indexOf("Android") || -1 != Vd.indexOf("Safari") && (Ud = !0));
    var Wd = Ud;
    var Xd = bb && Wd && !lb(536.25),
    Yd = function(a, b, c) {
        var d = document.createElement("source");
        d.src = b;
        d.type = c;
        a.appendChild(d)
    },
    Zd = function(a) {
        if (Xd) return null;
        var b = document.createElement("audio");
        b && b.canPlayType && (b.canPlayType("audio/mpeg") || b.canPlayType("audio/ogg")) ? (b.controls = !1, b.hidden = !0, b.loaded = !1, bd(b, "loadedmetadata",
        function() {
            b.loaded = !0;
            b.a && b.a()
        }), Yd(b, a + ".ogg", "audio/ogg"), Yd(b, a + ".mp3", "audio/mpeg")) : b = null;
        return b
    };
    var ae = function(a, b, c) {
        this.a = {};
        this.g = b || "";
        this.s = c || document.body;
        a && $d(this, a)
    };
    t(ae, B);
    ae.prototype.J = function() {
        for (var a in this.a) {
            be(this, a);
            var b = this.a[a];
            b.parent && b.parent.removeChild(b)
        }
        this.a = {};
        ae.D.J.call(this)
    };
    ae.prototype.load = function(a) {
        var b;
        a && (b = this.a[a], !b && (b = Zd(this.g + "/" + a))) && (this.s.appendChild(b), this.a[a] = b);
        return b
    };
    var $d = function(a, b) {
        for (var c in b) a.load(b[c])
    };
    ae.prototype.loop = function(a) {
        if (a = ce(this, a)) a.loop = !0;
        return a
    };
    var ce = function(a, b, c) {
        var d = a.load(b);
        d && d.play && (d.autoplay = !0, d.loop = !1, d.loaded ? d.currentTime = c || 0 : c && d.addEventListener("loadedmetadata",
        function() {
            d.currentTime = c || 0
        },
        !1), d.play());
        return d
    };
    ae.prototype.pause = function(a) {
        if (a) {
            var b = this.a[a];
            b && b.loaded && b.pause && (b.pause(), b.autoplay = !1, b.loop = !1)
        }
        return b
    };
    var ee = function(a) {
        var b = de;
        if (a) {
            var c = b.a[a];
            c && c.loaded && ce(b, a, c.currentTime)
        }
        return c
    },
    be = function(a, b) {
        var c = a.pause(b);
        c && c.loaded && (c.currentTime = 0)
    };
    var fe = function(a, b, c) {
        this.a = [];
        this.s = !0;
        this.C = c || 0;
        this.g = [];
        this.A = [];
        this.L = b || document.body;
        this.Q = a;
        this.B = []
    };
    t(fe, B);
    fe.prototype.J = function() {
        if (!Xd) {
            Xd || (ge(this), this.s = !1);
            for (var a = 0,
            b; b = this.a[a++];) this.L.removeChild(b);
            this.a = []
        }
        fe.D.J.call(this)
    };
    var ie = function() {
        var a = he;
        if (Xd) return ! 1;
        for (var b = 0,
        c; c = a.a[b++];) if (c.loaded) return ! 0;
        return ! 1
    };
    fe.prototype.load = function() {
        Xd || ke(this)
    };
    var me = function(a, b) {
        var c = he;
        if (!Xd) {
            var d = ke(c, b),
            e = c.a[d];
            e && e.play && c.s && (c.g[d] = a, e.loaded ? le(c, d, a) : e.a = function() {
                le(c, d, a)
            })
        }
    },
    le = function(a, b, c) {
        var d = a.a[b];
        d.currentTime = c[0];
        d.play();
        c[1] && (a.B[b] = window.setTimeout(function() {
            ne(a, b)
        },
        1E3 * (c[1] - c[0])));
        a.C && (a.A[b] = ia())
    },
    ge = function(a) {
        if (!Xd) for (var b = 0; b < a.g.length; b++) a.g[b] && ne(a, b)
    },
    ke = function(a, b) {
        for (var c = 0,
        d = 0; d < a.a.length; d++) if (a.g[d]) a.A[d] < a.A[c] && (c = d);
        else return d;
        if (a.C && a.a.length >= a.C) {
            if (b) return - 1;
            ne(a, c);
            return c
        }
        c = Zd(a.Q);
        c.autoplay = !1;
        c.loop = !1;
        a.a.push(c);
        a.A.push(0);
        a.L.appendChild(c);
        return a.a.length - 1
    },
    ne = function(a, b) {
        var c = a.a[b];
        c && c.loaded && c.pause && (c.pause(), c.currentTime = 0);
        a.g[b] = null;
        a.B[b] && (window.clearTimeout(a.B[b]), a.B[b] = 0);
        c.a = null
    };
    var oe = l.navigator ? l.navigator.userAgent: "",
    pe = function(a) {
        return - 1 != oe.indexOf(a)
    };
    var qe = function() {
        return pe("iPhone") && !pe("iPod") || pe("iPad") || pe("iPod")
    },
    re = function() {
        var a = "";
        pe("Windows") ? (a = /Windows NT ([0-9.]+)/, a = (a = a.exec(oe)) ? a[1] : "0.0") : qe() ? (a = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, a = (a = a.exec(oe)) && a[1].replace(/_/g, ".")) : pe("Macintosh") ? (a = /Mac OS X ([0-9_.]+)/, a = (a = a.exec(oe)) ? a[1].replace(/_/g, ".") : "10") : pe("Android") ? (a = /Android\s+([^\);]+)(\)|;)/, a = (a = a.exec(oe)) && a[1]) : pe("CrOS") && (a = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, a = (a = a.exec(oe)) && a[1]);
        return 0 <= oa(a || "", 7)
    };
    var de, he, se, te = !qe(),
    ue = pe("Android"),
    ve = [0, 5.3],
    we = [5.4, 6],
    xe = [6, 7.2],
    ye = [8, 10.5],
    ze = [11, 11.8],
    Ae = [12, 14.3],
    Be = [19, 19.7],
    Ce = [20, 20.5],
    De = [21, 22.5],
    Ee = [23, 23.5],
    Fe = [24.5, 26.8],
    Ge = [27, 31.8],
    He = [32, 34.8],
    Ie = [35, 35.5],
    Je = [36, 36.8],
    Ke = [37, 37.5],
    Le = !1,
    Me = !1,
    Ne = 10,
    Se = function(a) {
        de = new ae([], "/logos/2013/drwho", a);
        he = new fe("./sprite", void 0, 4);
        Ne = 10;
        var b = document.getElementsByClassName("mute");
        b[0] ? se = b[0] : (se = Ob(), se.className = "mute");
        b = Yb(2);
        //v(se, "background", bc(w, 7), "bottom", "4px", "cursor", "pointer", "height", b.height + "px", "right", "4px", "width", b.width + "px", "zIndex", "1");
        //te && a.appendChild(se);
        Qe();
        Pe();
        D("h",
        function() {
            Oe();
            Me || C.a("k1")
        });
        D("g", Qe);
        D("a", Re)
    },
    Re = function() {
        if (ue && Le && 0 < Ne) {
            Ne--;
            for (var a = 0; 4 > a; a++) W(we);
            C.a("k1")
        }
    },
    Te = function(a) {
        Le && (2 == a ? de.load("cyberman") : 3 == a ? $d(de, ["angel", "rain-loop"]) : 4 == a && de.load("end-loop"))
    },
    Ue = function(a) {
        Le && !Me && ee(a)
    },
    W = function(a, b) {
        Le && !Me && ie() && me(a, b)
    },
    Ve = function(a) {
        Le && !Me && (a = ee(a)) && (a.loop = !0)
    },
    Pe = function() {
        if (se) {
            var a = w.a[Me ? 2 : 7];
            v(se, "backgroundPosition", a ? -(a[0] + 0) + "px " + -(a[1] + 0) + "px": "")
        }
    },
    Qe = function() {
        Le = !1;
        var a = de,
        b;
        for (b in a.a) a.pause(b);
        a = he;
        Xd || (ge(a), a.s = !1);
        Pe()
    },
    Oe = function() {
        if (te) {
            Le = !0;
            var a = he;
            Xd || (a.s = !0);
            Pe()
        }
    };
    var Ye = function() {
        V.call(this, new We);
        Sd(this, "b", this.ga);
        Sd(this, "f", this.vc);
        Sd(this, "c", this.wc);
        Sd(this, "d", this.tc);
        Sd(this, "e", this.uc);
        this.s = this.a = 0;
        this.A = [];
        for (var a = 0; 11 > a; a++) this.A.push({
            x: 7 + 60 * a,
            y: 2,
            width: 56,
            height: 90
        });
        var a = Xe(),
        b = this;
        this.L = new Od(a,
        function() {
            b.ga()
        });
        this.Q = cc(w, 6);
        v(this.Q, "bottom", "39px", "right", "4px");
        this.Q.onclick = function() {
            Gd(9);
            Tb()
        };
        a.appendChild(this.Q);
        v(a, "cursor", "pointer");
        this.C = 0
    };
    t(Ye, V);
    Ye.prototype.J = function() {
        Ye.D.J.call(this);
        this.L.M();
        uc(this.Q)
    };
    var Ze = Math.ceil(5.5);
    g = Ye.prototype;
    g.hb = function(a) {
        var b = F().g;
        b.save();
        if (0 == this.a) {
            var c = this.L;
            Ld(c);
            x(w, 3, c.A, 295, 60, 1, !0);
            c.A.globalAlpha = Math.abs(a % 30 - 15) / 15;
            x(w, 5, c.A, 294, 60, 1, !0);
            c.A.globalAlpha = 1;
            0 < c.C && (c.A.globalAlpha = c.C / 4, x(w, 4, c.A, 296, 60, 1, !0), c.A.globalAlpha = 1);
            c.C = Math.min(4, Math.max(0, c.C + (c.W ? 1 : -1)))
        } else {
            if (c = 1 == this.a) {
                var c = this.L,
                d;
                d = c.L;
                d.g.a(d.a);
                d.a++;
                var e = d.a < d.s;
                d.a = e ? d.a: 0;
                d = e || !1;
                16 < c.s && (c.Q.clearRect(0, 0, Hd.width, Hd.height), e = c.s, x(w, Pd[49 > e ? 0 : e < Qd ? e - 49 : 90 >= e ? Pd.length - 1 : e <= Rd ? Rd - e: 1], c.Q, c.a, 25), 47 > c.s ? c.a += 8 : 140 < c.s ? c.a += 7 : 130 < c.s ? c.a += 8 : 101 < c.s ? c.a += 9 : 100 < c.s && (c.a += 3));
                c.s++;
                c = !d
            }
            c && (this.L.M(), this.a = 2)
        }
        b.fillStyle = "#fff";
        b.fillRect(0, 85 + this.C, 680, 225);
        b.fillStyle = "#71698e";
        b.fillRect(0, 0, 680, 85 + this.C);
        for (c = 0; d = this.A[c]; c++) e = Math.abs((a + c) % 12 - 6) / 6 * 3,
        x(w, 0, b, d.x + 35, d.y + 48),
        ac(w, 1, b, c, 60, d.x + 4, d.y + e);
        3 == this.a && (d = this.A[this.s], b.strokeStyle = "#edd06b", b.lineWidth = 4, b.strokeRect(d.x, d.y - 2, d.width + 6, d.height + 2), a = this.s, c = F().g, x(w, 17, c, 450, 30), Ad(c, a, 450, 30, 1));
        b.restore()
    };
    g.ib = function() {
        var a;
        if (a = 2 == this.a) {
            a = this.A[0];
            for (var b = 0; b < Ze; b++) this.A[b].y = Math.min(this.A[b].y + 6, 25);
            for (var b = Ze,
            c; c = this.A[b]; b++) c.y < a.y + a.height ? c.y += 6 : c.x -= 10;
            this.C += 6;
            a = !(this.A[Ze].x > a.x)
        }
        a && (this.a = 3)
    };
    g.vc = function(a) {
        if (0 != this.a) {
            var b;
            i: {
                b = a[0];
                a = a[1];
                for (var c = 0,
                d; d = this.A[c]; c++) if (b > d.x && b < d.x + d.width && a > d.y && a < d.y + d.height) {
                    b = c;
                    break i
                }
                b = -1
            }
            $e(this, b)
        }
    };
    g.wc = function() {
        this.s < Ze ? $e(this, this.s + Ze) : $e(this, this.s - Ze)
    };
    g.tc = function() {
        var a = this.s - 1;
        0 > a && (a = 10);
        $e(this, a)
    };
    g.uc = function() {
        $e(this, (this.s + 1) % 11)
    };
    var $e = function(a, b) {
        0 <= b && 11 > b && a.s != b && (a.s = b, 3 == a.a && W(Ee))
    };
    Ye.prototype.ga = function() {
        if (0 == this.a) this.a = 1,
        Zb(L),
        Zb(M),
        Le && ($d(de, ["exterminate-short", "bass-loop", "waiting-loop", "walking"]), he.load()),
        Gd(0);
        else if (3 == this.a) {
            U.N().a = this.s;
            var a = Xe();
            a && a.removeAttribute("title");
            this.Ha = !1;
            Td(this);
            Gd(1)
        }
    };
    var We = function() {
        vd.call(this)
    };
    t(We, vd);
    We.prototype.xa = function(a) {
        We.D.xa.call(this, a);
        switch (a.op) {
        case 1:
        case 2:
            C.a("c");
            break;
        case 3:
            C.a("d");
            break;
        case 4:
            C.a("e");
            break;
        case 5:
        case 6:
            C.a("b")
        }
    };
    We.prototype.Ya = function(a) {
        We.D.Ya.call(this, a);
        a = Qb(a.a, F().a);
        C.a("f", a)
    };
    We.prototype.ra = function(a) {
        We.D.ra.call(this, a);
        C.a("b")
    };
    var af = function(a) {
        this.a = [];
        this.index = 0;
        this.g = !!a
    };
    t(af, B);
    var bf = function(a) {
        a.g ? a.index = 0 : a.a = []
    },
    cf = function(a, b) {
        a.set(sa(b,
        function(a) {
            return new y(a.x, a.y)
        }))
    };
    af.prototype.set = function(a) {
        this.a = a;
        this.index = 0
    };
    var df = function(a) {
        return ! a.g && a.index == a.a.length
    },
    ef = function(a) {
        return a.a[a.index]
    };
    af.prototype.shift = function() {
        this.g ? this.index = (this.index + 1) % this.a.length: this.a.shift()
    };
    var gf = function(a, b) {
        return Math.abs(a.x - b.x) + Math.abs(a.y - b.y)
    },
    hf = function(a) {
        return a.x + "," + a.y
    };
    var jf = function(a, b, c, d, e, f) {
        this.d = jc(b, c, d);
        this.a = jc(b, c, d);
        this.type = a;
        this.speed = e;
        this.direction = f;
        this.hidden = !1;
        this.path = new af;
        this.i = [];
        this.s = {
            x: b,
            y: c,
            z: d,
            direction: f
        }
    };
    t(jf, tc);
    jf.prototype.J = function() {
        jf.D.J.call(this);
        E("w", this.rb, this);
        E("x", this.$b, this);
        E("h1", this.Xa, this)
    };
    jf.prototype.set = function(a, b, c, d) {
        z(this.d, a, b, c);
        z(this.a, a, b, c);
        this.direction = d;
        bf(this.path)
    };
    jf.prototype.init = function(a) {
        D("w", this.rb, this);
        D("x", this.$b, this);
        D("h1", this.Xa, this);
        this.fc(a)
    };
    var kf = function(a, b) {
        for (var c = [b.up, b.right, b.U, b.left], d = 0; d < c.length; d++) {
            for (var e = [], f = c[d][2] / b.count, h = c[d][3], k = c[d][0], m = c[d][1], n = 0; n < b.count; ++n) e.push([n * f + k, m, f, h]);
            a.i.push({
                Pa: b.k || L,
                X: e,
                frames: b.count
            })
        }
    };
    g = jf.prototype;
    g.Fb = ya(0);
    g.Yb = function() {
        this.hidden || (this.direction = 0, this.path.set([new y(this.d.a.x, this.d.a.y - 1)]))
    };
    g.Vb = function() {
        this.hidden || (this.direction = 2, this.path.set([new y(this.d.a.x, this.d.a.y + 1)]))
    };
    g.Wb = function() {
        this.hidden || (this.direction = 3, this.path.set([new y(this.d.a.x - 1, this.d.a.y)]))
    };
    g.Xb = function() {
        this.hidden || (this.direction = 1, this.path.set([new y(this.d.a.x + 1, this.d.a.y)]))
    };
    var mf = function(a, b) {
        var c;
        if (! (c = A(a.d, b.d))) {
            c = lf(a);
            var d = b.d.a;
            c = c == d ? !0 : c && d ? c.x == d.x && c.y == d.y && c.z == d.z: !1
        }
        return c
    },
    nf = function(a, b) {
        return Math.abs(a) > Math.abs(b) ? 0 < a ? 1 : 3 : 0 < b ? 2 : 0
    };
    jf.prototype.ga = function(a, b) {
        if (! (this.hidden || 0 > this.d.a.x || 0 > this.d.a.y || this.d.a.z != a.z)) {
            var c = new y(this.d.a.x, this.d.a.y),
            d = new y(a.x, a.y),
            e = [],
            f = {},
            h = {},
            k = {},
            m = [];
            e.push(c);
            var n = hf(c);
            f[n] = 0;
            var r = X(b, c.x, c.y);
            for (k[n] = r.a; 0 < e.length;) {
                var u = e.pop(),
                n = hf(u),
                N = f[n],
                sb = k[n];
                m.push(u);
                for (var Ma = [[1, 0], [ - 1, 0], [0, 1], [0, -1]], n = 0; n < Ma.length; n++) {
                    var Ca = Ma[n][0],
                    Y = Ma[n][1],
                    za = X(b, u.x + Ca, u.y + Y);
                    if (za && za.d.a.z == r.d.a.z) {
                        za.a && (k[hf(za.d.a)] = !0);
                        var ff = za.G;
                        if (za.a && (0 != Ca || -1 != Y) || sb && (0 != Ca || 1 != Y)) ff = !1;
                        ff && (Ca = za.d.a, Y = hf(Ca), za = N + 1, !(Y in f) || za < f[Y]) && (f[Y] = za, h[Y] = u, e.push(Ca))
                    }
                }
            }
            e = c;
            f = gf(c, d);
            for (n = 0; n < m.length; n++) k = gf(m[n], d),
            k < f && (e = m[n], f = k);
            d = [];
            for (u = e; u != c;) d.splice(0, 0, new y(u.x, u.y)),
            u = h[hf(u)];
            this.path.set(d);
            0 < d.length && (this.direction = nf(d[0].x - this.d.a.x, d[0].y - this.d.a.y))
        }
    };
    var lf = function(a) {
        var b = new dc;
        switch (a.direction) {
        case 0:
            b.y = -1;
            break;
        case 1:
            b.x = 1;
            break;
        case 2:
            b.y = 1;
            break;
        case 3:
            b.x = -1
        }
        b.x += a.d.a.x;
        b.y += a.d.a.y;
        b.z = a.d.a.z;
        return b
    },
    of = function(a, b) {
        var c = lf(a);
        return (c = X(b, c.x, c.y)) && a.d.z == c.d.z ? c: null
    };
    g = jf.prototype;
    g.$b = function(a) {
        A(this.d, a.d) && this.d.z != a.d.z && this.d.set(a.d.x, a.d.y, a.d.z)
    };
    g.rb = function(a) {
        C.a("o", this, a);
        var b = this.d.x - this.a.x,
        c = this.d.y - this.a.y,
        d = Math.sqrt(b * b + c * c);
        d > this.speed ? this.a.set(this.a.x + b * this.speed / d, this.a.y + c * this.speed / d, this.d.z) : (this.a.set(this.d.x, this.d.y, this.d.z), df(this.path) || (b = null, df(this.path) ? c = !0 : (c = ef(this.path), c = jc(c.x, c.y, this.d.a.z), d = this.speed, c = Math.abs(c.x - this.d.x) <= d && Math.abs(c.y - this.d.y) <= d ? !0 : c.a.x == this.d.a.x && c.a.y == this.d.a.y), c ? (this.path.shift(), df(this.path) || (b = ef(this.path), this.direction = nf(b.x - this.d.a.x, b.y - this.d.a.y), b = of(this, a))) : b = of(this, a), null !== b && b.G ? (a = b.d.a, z(this.d, a.x, a.y, a.z), this.Nb(this.direction)) : (C.a("p", this, a), bf(this.path))))
    };
    g.Nb = p;
    g.qb = function(a) {
        return a % this.Eb().frames
    };
    g.Xa = function(a, b) {
        var c = 0 == this.direction && this.d.a.x == a.d.a.x && this.d.a.y + 1 == a.d.a.y,
        d = 3 == this.direction && this.d.a.x + 1 == a.d.a.x && this.d.a.y == a.d.a.y,
        c = !df(this.path) && (c || d); (A(this.d, a.d) || c) && this.Ba(b)
    };
    g.Ba = function(a) {
        if (!this.hidden) {
            var b = this.Eb(),
            c = F().g;
            a = this.qb(a);
            var d = b.X[a][2],
            e = b.X[a][3];
            c.drawImage(b.Pa.g.a, b.X[a][0], b.X[a][1], d, e, this.a.g.x + 23 - d + this.Sb(), this.a.g.y + 11.5 - e + this.Fb(), d, e)
        }
    };
    var pf = {
        qc: 60,
        i: {
            Cb: {
                k: L,
                X: G,
                frames: 30,
                index: [127, 130, 131, 127, 129, 126]
            },
            Ac: {
                k: L,
                index: 128
            }
        }
    },
    qf = {
        i: {
            mc: {
                k: L,
                index: 117
            },
            nc: {
                k: L,
                index: 119
            },
            Cb: {
                k: L,
                X: G,
                frames: 45,
                index: [118, 120, 121, 118]
            }
        }
    },
    rf = {
        i: [{
            k: L,
            o: G[134],
            frames: 21
        }],
        w: {
            x: 13,
            y: -7
        }
    },
    sf = {
        i: [{
            k: L,
            o: G[133],
            frames: 21
        }],
        w: {
            x: 16,
            y: -6
        },
        bb: "bmt",
        K: 4
    },
    tf = {
        sc: {
            i: [{
                k: Q,
                o: J[29],
                frames: 10
            }],
            w: {
                x: 3,
                y: -35
            }
        },
        handle: {
            i: [{
                k: Q,
                o: J[28],
                frames: 1
            },
            {
                k: Q,
                o: J[27],
                frames: 1
            }],
            w: {
                x: 3,
                y: -28
            }
        }
    },
    uf = [{
        aa: {
            up: G[15],
            right: G[13],
            U: G[8],
            left: G[10],
            count: 10
        },
        ja: {
            up: G[16],
            right: G[14],
            U: G[9],
            left: G[11],
            count: 5
        },
        $: rf,
        Z: sf,
        S: tf,
        ea: {
            i: [{
                k: L,
                o: G[7],
                frames: 35
            }],
            w: {
                x: -1,
                y: -10
            }
        },
        fa: {
            i: [{
                k: L,
                o: G[12],
                frames: 35
            }],
            w: {
                x: 12,
                y: -11
            }
        }
    },
    {
        aa: {
            up: G[45],
            right: G[43],
            U: G[38],
            left: G[40],
            count: 10
        },
        ja: {
            up: G[46],
            right: G[44],
            U: G[39],
            left: G[41],
            count: 5
        },
        $: rf,
        Z: sf,
        S: tf,
        ea: {
            i: [{
                k: L,
                o: G[37],
                frames: 35
            }],
            w: {
                x: -1,
                y: -10
            }
        },
        fa: {
            i: [{
                k: L,
                o: G[42],
                frames: 35
            }],
            w: {
                x: 12,
                y: -11
            }
        }
    },
    {
        aa: {
            up: G[55],
            right: G[53],
            U: G[48],
            left: G[50],
            count: 10
        },
        ja: {
            up: G[56],
            right: G[54],
            U: G[49],
            left: G[51],
            count: 5
        },
        $: rf,
        Z: sf,
        S: tf,
        ea: {
            i: [{
                k: L,
                o: G[47],
                frames: 35
            }],
            w: {
                x: -1,
                y: -10
            }
        },
        fa: {
            i: [{
                k: L,
                o: G[52],
                frames: 35
            }],
            w: {
                x: 12,
                y: -11
            }
        }
    },
    {
        aa: {
            up: G[65],
            right: G[63],
            U: G[58],
            left: G[60],
            count: 10
        },
        ja: {
            up: G[66],
            right: G[64],
            U: G[59],
            left: G[61],
            count: 5
        },
        $: rf,
        Z: sf,
        S: tf,
        ea: {
            i: [{
                k: L,
                o: G[57],
                frames: 35
            }],
            w: {
                x: -1,
                y: -10
            }
        },
        fa: {
            i: [{
                k: L,
                o: G[62],
                frames: 35
            }],
            w: {
                x: 12,
                y: -11
            }
        }
    },
    {
        aa: {
            up: G[75],
            right: G[73],
            U: G[68],
            left: G[70],
            count: 10
        },
        ja: {
            up: G[76],
            right: G[74],
            U: G[69],
            left: G[71],
            count: 5
        },
        $: rf,
        Z: sf,
        S: tf,
        ea: {
            i: [{
                k: L,
                o: G[67],
                frames: 35
            }],
            w: {
                x: -1,
                y: -10
            }
        },
        fa: {
            i: [{
                k: L,
                o: G[72],
                frames: 35
            }],
            w: {
                x: 12,
                y: -11
            }
        }
    },
    {
        aa: {
            up: G[85],
            right: G[83],
            U: G[78],
            left: G[80],
            count: 10
        },
        ja: {
            up: G[86],
            right: G[84],
            U: G[79],
            left: G[81],
            count: 5
        },
        $: rf,
        Z: sf,
        S: tf,
        ea: {
            i: [{
                k: L,
                o: G[77],
                frames: 35
            }],
            w: {
                x: -1,
                y: -10
            }
        },
        fa: {
            i: [{
                k: L,
                o: G[82],
                frames: 35
            }],
            w: {
                x: 12,
                y: -11
            }
        }
    },
    {
        aa: {
            up: G[95],
            right: G[93],
            U: G[88],
            left: G[90],
            count: 10
        },
        ja: {
            up: G[96],
            right: G[94],
            U: G[89],
            left: G[91],
            count: 5
        },
        $: rf,
        Z: sf,
        S: tf,
        ea: {
            i: [{
                k: L,
                o: G[87],
                frames: 35
            }],
            w: {
                x: -1,
                y: -10
            }
        },
        fa: {
            i: [{
                k: L,
                o: G[92],
                frames: 35
            }],
            w: {
                x: 12,
                y: -11
            }
        }
    },
    {
        aa: {
            up: G[105],
            right: G[103],
            U: G[98],
            left: G[100],
            count: 10
        },
        ja: {
            up: G[106],
            right: G[104],
            U: G[99],
            left: G[101],
            count: 5
        },
        $: rf,
        Z: sf,
        S: tf,
        ea: {
            i: [{
                k: L,
                o: G[97],
                frames: 35
            }],
            w: {
                x: -1,
                y: -10
            }
        },
        fa: {
            i: [{
                k: L,
                o: G[102],
                frames: 35
            }],
            w: {
                x: 12,
                y: -11
            }
        }
    },
    {
        aa: {
            up: G[115],
            right: G[113],
            U: G[108],
            left: G[110],
            count: 10
        },
        ja: {
            up: G[116],
            right: G[114],
            U: G[109],
            left: G[111],
            count: 5
        },
        $: rf,
        Z: sf,
        S: tf,
        ea: {
            i: [{
                k: L,
                o: G[107],
                frames: 35
            }],
            w: {
                x: -1,
                y: -10
            }
        },
        fa: {
            i: [{
                k: L,
                o: G[112],
                frames: 35
            }],
            w: {
                x: 12,
                y: -11
            }
        }
    },
    {
        aa: {
            up: G[25],
            right: G[23],
            U: G[18],
            left: G[20],
            count: 10
        },
        ja: {
            up: G[26],
            right: G[24],
            U: G[19],
            left: G[21],
            count: 5
        },
        $: rf,
        Z: sf,
        S: tf,
        ea: {
            i: [{
                k: L,
                o: G[17],
                frames: 35
            }],
            w: {
                x: -1,
                y: -10
            }
        },
        fa: {
            i: [{
                k: L,
                o: G[22],
                frames: 35
            }],
            w: {
                x: 12,
                y: -11
            }
        }
    },
    {
        aa: {
            up: G[35],
            right: G[33],
            U: G[28],
            left: G[30],
            count: 10
        },
        ja: {
            up: G[36],
            right: G[34],
            U: G[29],
            left: G[31],
            count: 5
        },
        $: rf,
        Z: sf,
        S: tf,
        ea: {
            i: [{
                k: L,
                o: G[27],
                frames: 35
            }],
            w: {
                x: -1,
                y: -10
            }
        },
        fa: {
            i: [{
                k: L,
                o: G[32],
                frames: 35
            }],
            w: {
                x: 12,
                y: -11
            }
        }
    }],
    vf = [{
        ja: {
            up: G[4],
            right: G[3],
            U: G[1],
            left: G[2],
            count: 4,
            k: L
        }
    },
    {
        ja: {
            up: I[3],
            right: I[2],
            U: I[0],
            left: I[1],
            count: 5,
            k: P
        }
    },
    {
        ja: {
            up: J[3],
            right: J[2],
            U: J[0],
            left: J[1],
            count: 4,
            k: Q
        }
    }],
    wf = {
        left: {
            i: [{
                k: L,
                o: G[5],
                frames: 32
            }],
            w: {
                x: -7,
                y: -13
            },
            K: 4
        },
        right: {
            i: [{
                k: L,
                o: G[6],
                frames: 32
            }],
            w: {
                x: 7,
                y: -13
            },
            K: 4
        },
        kc: {
            i: [{
                k: Q,
                o: J[4],
                frames: 32
            }],
            w: {
                x: -7,
                y: -13
            },
            K: 4
        },
        lc: {
            i: [{
                k: Q,
                o: J[5],
                frames: 32
            }],
            w: {
                x: 7,
                y: -13
            },
            K: 4
        }
    },
    xf = [{
        k: L,
        o: G[122],
        frames: 59
    },
    {
        k: L,
        o: G[125],
        frames: 1
    },
    {
        k: L,
        o: G[124],
        frames: 1
    },
    {
        k: L,
        o: G[123],
        frames: 59
    }],
    yf = [{
        F: {
            x: 16,
            y: 4,
            z: 2,
            dir: 2
        },
        Aa: [{
            x: 7,
            y: 10,
            dir: 0,
            path: [{
                x: 7,
                y: 8
            },
            {
                x: 11,
                y: 8
            },
            {
                x: 11,
                y: 15
            },
            {
                x: 7,
                y: 15
            }]
        }],
        ha: [{
            x: 16,
            y: 9,
            dir: 3
        },
        {
            x: 9,
            y: 7,
            dir: 2
        },
        {
            x: 4,
            y: 14,
            dir: 1
        }],
        map: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        eb: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 2, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 2, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        Ea: [{
            i: [{
                k: M,
                o: wc[6],
                frames: 1
            }],
            d: {
                x: 0,
                y: 0
            },
            offset: {
                x: 0,
                y: 0
            },
            K: 1
        },
        {
            i: [{
                k: M,
                o: wc[10],
                frames: 28
            }],
            O: 3,
            d: {
                x: 0,
                y: 0
            },
            offset: {
                x: 61,
                y: 154
            },
            K: 4
        },
        {
            i: [{
                k: M,
                o: wc[10],
                frames: 28
            }],
            O: 1.8,
            d: {
                x: 0,
                y: 0
            },
            offset: {
                x: 599,
                y: 152
            },
            K: 4
        }],
        V: {
            i: xf,
            d: {
                x: 16,
                y: 3,
                z: 2
            }
        },
        oa: {
            i: [{
                k: M,
                o: wc[5],
                frames: 36
            }],
            d: {
                x: 3,
                y: 14
            },
            w: {
                y: -6
            }
        },
        Fa: [{
            v: {
                i: [{
                    k: M,
                    o: wc[9],
                    frames: 1
                }],
                d: {
                    x: 17,
                    y: 9,
                    z: 0
                },
                K: 2
            },
            R: {
                i: [{
                    k: M,
                    o: wc[7],
                    frames: 10
                }],
                d: {
                    x: 13,
                    y: 3,
                    z: 2
                },
                H: {
                    x: 13,
                    y: 4
                },
                w: {
                    x: 3,
                    y: -5
                }
            },
            P: {
                type: 2,
                I: 0,
                end: 2,
                state: 0,
                speed: 5,
                pause: 2
            }
        },
        {
            v: {
                i: [{
                    k: M,
                    o: wc[9],
                    frames: 1
                }],
                d: {
                    x: 6,
                    y: 14,
                    z: 0
                },
                K: 2
            },
            R: {
                i: [{
                    k: M,
                    o: wc[8],
                    frames: 10
                }],
                d: {
                    x: 7,
                    y: 6,
                    z: 0
                },
                H: {
                    x: 8,
                    y: 6
                },
                w: {
                    x: 3,
                    y: -6
                }
            },
            P: {
                type: 0,
                I: 6,
                end: 5,
                state: 0,
                speed: 3,
                pause: 2
            }
        },
        {
            v: {
                i: [{
                    k: M,
                    o: wc[0],
                    frames: 17
                }],
                H: {
                    x: 3,
                    y: 14
                },
                d: {
                    x: 19,
                    y: 20
                },
                offset: {
                    x: 624,
                    y: 80
                },
                K: 4
            },
            P: {
                type: 17,
                I: 0,
                end: 0,
                state: 0,
                speed: 0,
                pause: 0
            }
        }],
        qa: !1,
        cb: "bass-loop"
    },
    {
        F: {
            x: 4,
            y: 15,
            z: 0,
            dir: 2
        },
        Aa: [{
            x: 15,
            y: 8,
            dir: 1,
            speed: 7,
            path: [{
                x: 15,
                y: 8
            },
            {
                x: 18,
                y: 8
            },
            {
                x: 18,
                y: 4
            },
            {
                x: 15,
                y: 4
            }]
        },
        {
            x: 9,
            y: 2,
            dir: 2,
            speed: 5,
            path: [{
                x: 9,
                y: 2
            },
            {
                x: 9,
                y: 5
            },
            {
                x: 11,
                y: 5
            },
            {
                x: 11,
                y: 2
            }]
        }],
        ha: [{
            x: 13,
            y: 11,
            dir: 1
        },
        {
            x: 17,
            y: 6,
            dir: 1
        }],
        map: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0], [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        eb: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        background: {
            k: O,
            pb: 0
        },
        Ea: [{
            i: [{
                k: O,
                o: H[12],
                frames: 1
            }],
            d: {
                x: 6,
                y: 0
            },
            offset: {
                x: 0,
                y: 0
            },
            K: 1
        },
        {
            i: [{
                k: O,
                o: H[13],
                frames: 1
            }],
            d: {
                x: 13,
                y: 11
            },
            offset: {
                x: 355,
                y: 63
            },
            K: 1
        },
        {
            i: [{
                k: O,
                o: H[22],
                frames: 1
            }],
            d: {
                x: 19,
                y: 20
            },
            offset: {
                x: 600,
                y: 168
            }
        },
        {
            i: [{
                k: O,
                o: H[10],
                frames: 1
            }],
            d: {
                x: 4,
                y: 7
            },
            K: 4
        },
        {
            i: [{
                k: O,
                o: H[16],
                frames: 1
            }],
            d: {
                x: 19,
                y: 20
            },
            offset: {
                x: 470,
                y: 188
            }
        },
        {
            i: [{
                k: O,
                o: H[14],
                frames: 1
            }],
            d: {
                x: 17,
                y: 6
            },
            w: {
                x: -2,
                y: -12
            },
            K: 2
        },
        {
            i: [{
                k: O,
                o: H[15],
                frames: 1
            }],
            d: {
                x: 16,
                y: 5,
                z: 4
            },
            w: {
                x: -2,
                y: 50
            },
            K: 2
        },
        {
            i: [{
                k: O,
                o: H[9],
                frames: 1
            }],
            d: {
                x: 15,
                y: 12
            },
            w: {
                x: 7,
                y: -7
            }
        },
        {
            i: [{
                k: O,
                o: H[9],
                frames: 1
            }],
            d: {
                x: 16,
                y: 7
            }
        },
        {
            i: [{
                k: O,
                o: H[2],
                frames: 19
            }],
            O: 3,
            d: {
                x: 0,
                y: 0
            },
            offset: {
                x: 400,
                y: 152
            },
            K: 1
        },
        {
            i: [{
                k: O,
                o: H[2],
                frames: 19
            }],
            O: 1.9,
            d: {
                x: 0,
                y: 0
            },
            offset: {
                x: 200,
                y: 152
            },
            K: 1
        },
        {
            i: [{
                k: O,
                o: H[1],
                frames: 27
            }],
            O: 3,
            d: {
                x: 0,
                y: 0
            },
            offset: {
                x: 250,
                y: 200
            },
            K: 1
        },
        {
            i: [{
                k: O,
                o: H[1],
                frames: 27
            }],
            O: 4.5,
            d: {
                x: 0,
                y: 0
            },
            offset: {
                x: 500,
                y: 10
            },
            K: 1
        }],
        V: {
            i: xf,
            d: {
                x: 4,
                y: 14
            }
        },
        oa: {
            i: [{
                k: O,
                o: H[11],
                frames: 35
            }],
            d: {
                x: 16,
                y: 5,
                z: 4
            },
            w: {
                y: -1
            }
        },
        nb: [{
            T: {
                i: [{
                    k: O,
                    o: H[4],
                    frames: 27
                }],
                d: {
                    x: 17,
                    y: 6
                },
                w: {
                    x: -1,
                    y: -5
                }
            },
            ya: {
                x: 17,
                y: 6,
                z: 0,
                dir: 3
            },
            ma: {
                x: 16,
                y: 5,
                z: 4,
                dir: 1
            },
            wa: {
                x: 17,
                y: 6,
                z: 4
            }
        },
        {
            T: {
                i: [{
                    k: O,
                    o: H[3],
                    frames: 27
                }],
                d: {
                    x: 17,
                    y: 6
                },
                w: {
                    x: -1,
                    y: -5
                }
            },
            ya: {
                x: 17,
                y: 6,
                z: 4,
                dir: 2
            },
            ma: {
                x: 17,
                y: 6,
                z: 0,
                dir: 1
            },
            wa: {
                x: 17,
                y: 6,
                z: 0
            }
        },
        {
            T: {
                i: [{
                    k: O,
                    o: H[18],
                    frames: 23
                },
                {
                    k: O,
                    o: H[17],
                    frames: 23
                }],
                d: {
                    x: 19,
                    y: 20
                },
                offset: {
                    x: 680,
                    y: -40
                },
                K: 4
            },
            Ia: {
                i: [{
                    k: O,
                    o: H[5],
                    frames: 19
                }],
                d: {
                    x: 19,
                    y: 20
                },
                offset: {
                    x: 39,
                    y: 57
                },
                K: 4
            },
            type: 2,
            ya: {
                x: 17,
                y: 5,
                z: 4,
                dir: 1
            },
            ma: {
                x: 4,
                y: 16,
                z: 0,
                dir: 3
            }
        },
        {
            ya: {
                x: 13,
                y: 10,
                z: 0,
                dir: 1
            },
            ma: {
                x: 13,
                y: 11,
                z: 0,
                dir: 1
            }
        }],
        Fa: [{
            v: {
                i: [{
                    k: O,
                    o: H[7],
                    frames: 15
                }],
                d: {
                    x: 4,
                    y: 7
                },
                w: {
                    y: -7
                },
                G: [],
                H: {
                    x: 4,
                    y: 7
                }
            },
            P: {
                type: 16,
                I: 0,
                end: 0,
                state: 0,
                speed: 0,
                pause: 0
            }
        },
        {
            v: {
                i: [{
                    k: O,
                    o: H[6],
                    frames: 47
                }],
                d: {
                    x: 17,
                    y: 5,
                    z: 4
                },
                w: {
                    x: 12,
                    y: -2
                },
                G: [],
                H: {
                    x: 4,
                    y: 7
                }
            },
            label: "PE1",
            P: {
                type: 5,
                I: 0,
                end: 0,
                state: 0,
                speed: 0,
                pause: 0
            }
        },
        {
            v: {
                i: [{
                    k: O,
                    o: H[19],
                    frames: 1
                }],
                d: {
                    x: 7,
                    y: 12,
                    z: 0
                },
                size: {
                    x: 2,
                    y: 3
                },
                w: {
                    x: 35,
                    y: 58
                },
                K: 1
            },
            label: "LR1",
            P: {
                type: 3,
                I: 19,
                end: 10,
                state: 3,
                speed: 7,
                pause: 2
            }
        },
        {
            v: {
                i: [{
                    k: O,
                    o: H[20],
                    frames: 1
                }],
                d: {
                    x: 9,
                    y: 8,
                    z: 0
                },
                size: {
                    x: 2,
                    y: 7
                },
                w: {
                    x: 92,
                    y: 46
                },
                K: 1
            },
            P: {
                type: 3,
                I: 15,
                end: 2,
                state: 2,
                speed: 0,
                pause: 0
            }
        },
        {
            v: {
                i: [{
                    k: O,
                    o: H[21],
                    frames: 1
                }],
                d: {
                    x: 11,
                    y: 10,
                    z: 0
                },
                size: {
                    x: 2,
                    y: 2
                },
                w: {
                    x: 22,
                    y: 57
                },
                K: 1
            },
            label: "LR2",
            P: {
                type: 3,
                I: 12,
                end: 7,
                state: 2,
                speed: 5,
                pause: 2
            }
        }],
        qa: !1,
        cb: "bass-loop"
    },
    {
        F: {
            x: 19,
            y: 8,
            z: 0,
            dir: 2
        },
        Aa: [{
            x: 6,
            y: 3,
            dir: 1,
            path: [{
                x: 10,
                y: 3
            },
            {
                x: 10,
                y: 7
            },
            {
                x: 10,
                y: 3
            },
            {
                x: 7,
                y: 3
            }]
        },
        {
            x: 15,
            y: 1,
            dir: 2,
            path: [{
                x: 15,
                y: 3
            },
            {
                x: 12,
                y: 3
            },
            {
                x: 12,
                y: 1
            },
            {
                x: 15,
                y: 1
            }]
        },
        {
            x: 5,
            y: 16,
            dir: 2,
            speed: 7,
            path: [{
                x: 5,
                y: 19
            },
            {
                x: 8,
                y: 19
            },
            {
                x: 8,
                y: 16
            },
            {
                x: 5,
                y: 16
            }]
        }],
        gc: 1,
        ha: [{
            x: 16,
            y: 8,
            dir: 3
        },
        {
            x: 10,
            y: 15,
            dir: 2
        },
        {
            x: 1,
            y: 14,
            dir: 1
        }],
        map: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        eb: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        background: {
            k: P,
            pb: 23
        },
        Ea: [{
            i: [{
                k: P,
                o: I[24],
                frames: 1
            }],
            d: {
                x: 19,
                y: 19
            },
            offset: {
                x: 0,
                y: 0
            },
            K: 1
        },
        {
            i: [{
                k: P,
                o: I[25],
                frames: 1
            }],
            d: {
                x: 6,
                y: 0
            },
            offset: {
                x: 288,
                y: 0
            },
            K: 1
        },
        {
            i: [{
                k: P,
                o: I[18],
                frames: 1
            }],
            d: {
                x: 10,
                y: 13
            }
        },
        {
            i: [{
                k: P,
                o: I[8],
                frames: 1
            }],
            d: {
                x: 10,
                y: 15
            },
            w: {
                x: 10,
                y: 12
            }
        },
        {
            i: [{
                k: P,
                o: I[19],
                frames: 1
            }],
            d: {
                x: 10,
                y: 8
            },
            w: {
                x: 34
            }
        },
        {
            i: [{
                k: P,
                o: I[7],
                frames: 1
            }],
            d: {
                x: 10,
                y: 12,
                z: 3
            },
            w: {
                x: 33,
                y: 10
            }
        },
        {
            i: [{
                k: P,
                o: I[15],
                frames: 1
            }],
            d: {
                x: 8,
                y: 4
            },
            w: {
                y: -10
            }
        },
        {
            i: [{
                k: P,
                o: I[16],
                frames: 1
            }],
            d: {
                x: 9,
                y: 4
            },
            w: {
                y: -10
            }
        },
        {
            i: [{
                k: P,
                o: I[9],
                frames: 1
            }],
            d: {
                x: 11,
                y: 4
            },
            w: {
                y: -5
            }
        },
        {
            i: [{
                k: P,
                o: I[15],
                frames: 1
            }],
            d: {
                x: 12,
                y: 4
            },
            w: {
                y: -10
            }
        },
        {
            i: [{
                k: P,
                o: I[9],
                frames: 1
            }],
            d: {
                x: 11,
                y: 2
            },
            w: {
                y: -5
            }
        },
        {
            i: [{
                k: P,
                o: I[15],
                frames: 1
            }],
            d: {
                x: 16,
                y: 4
            },
            w: {
                y: -10
            }
        },
        {
            i: [{
                k: P,
                o: I[9],
                frames: 1
            }],
            d: {
                x: 16,
                y: 2
            },
            w: {
                y: -5
            }
        },
        {
            i: [{
                k: P,
                o: I[9],
                frames: 1
            }],
            d: {
                x: 13,
                y: 4
            },
            w: {
                y: -5
            }
        },
        {
            i: [{
                k: P,
                o: I[17],
                frames: 1
            }],
            d: {
                x: 9,
                y: 1
            },
            w: {
                x: 5,
                y: 3
            },
            K: 1
        },
        {
            i: [{
                k: P,
                o: I[15],
                frames: 1
            }],
            d: {
                x: 6,
                y: 18
            },
            w: {
                y: -10
            }
        },
        {
            i: [{
                k: P,
                o: I[16],
                frames: 1
            }],
            d: {
                x: 6,
                y: 17
            },
            w: {
                y: -10
            }
        },
        {
            i: [{
                k: P,
                o: I[16],
                frames: 1
            }],
            d: {
                x: 6,
                y: 20
            },
            w: {
                y: -10
            }
        },
        {
            i: [{
                k: P,
                o: I[9],
                frames: 1
            }],
            d: {
                x: 7,
                y: 17
            },
            w: {
                y: -5
            }
        },
        {
            i: [{
                k: P,
                o: I[9],
                frames: 1
            }],
            d: {
                x: 9,
                y: 18
            },
            w: {
                y: -5
            }
        },
        {
            i: [{
                k: P,
                o: I[20],
                frames: 21
            }],
            O: 3.3,
            d: {
                x: 0,
                y: 0
            },
            offset: {
                x: 290,
                y: 20
            },
            K: 1
        },
        {
            i: [{
                k: P,
                o: I[21],
                frames: 28
            }],
            O: 4.7,
            d: {
                x: 0,
                y: 0
            },
            offset: {
                x: 250,
                y: 15
            },
            K: 1
        },
        {
            i: [{
                k: P,
                o: I[22],
                frames: 28
            }],
            O: 2.1,
            d: {
                x: 0,
                y: 0
            },
            offset: {
                x: 220,
                y: 45
            },
            K: 1
        },
        {
            i: [{
                k: P,
                o: I[21],
                frames: 28
            }],
            O: 7.7,
            d: {
                x: 0,
                y: 0
            },
            offset: {
                x: 170,
                y: 120
            },
            K: 1
        },
        {
            i: [{
                k: P,
                o: I[22],
                frames: 28
            }],
            O: 6.1,
            d: {
                x: 0,
                y: 0
            },
            offset: {
                x: 290,
                y: 120
            },
            K: 1
        },
        {
            i: [{
                k: P,
                o: I[20],
                frames: 21
            }],
            O: 5.35,
            d: {
                x: 0,
                y: 0
            },
            offset: {
                x: 330,
                y: 160
            },
            K: 1
        },
        {
            i: [{
                k: P,
                o: I[21],
                frames: 28
            }],
            O: 2.6,
            d: {
                x: 0,
                y: 0
            },
            offset: {
                x: 360,
                y: 190
            },
            K: 1
        }],
        V: {
            i: xf,
            size: {
                x: 2,
                y: 1
            },
            d: {
                x: 19,
                y: 7
            },
            bb: "bm"
        },
        oa: {
            i: [{
                k: P,
                o: I[10],
                frames: 36
            }],
            d: {
                x: 1,
                y: 14
            },
            w: {
                y: -6
            }
        },
        Fa: [{
            v: {
                i: [{
                    k: P,
                    o: I[5],
                    frames: 16
                }],
                d: {
                    x: 10,
                    y: 11
                },
                w: {
                    x: -2,
                    y: 4
                },
                G: [{
                    x: 10,
                    y: 12
                },
                {
                    x: 10,
                    y: 11
                }]
            },
            R: {
                i: [{
                    k: P,
                    o: I[12],
                    frames: 10
                }],
                d: {
                    x: 12,
                    y: 0
                },
                H: {
                    x: 12,
                    y: 0
                },
                w: {
                    x: 6,
                    y: -17
                }
            },
            P: {
                type: 6,
                I: 0,
                end: 0,
                state: 0,
                speed: 0,
                pause: 0
            }
        },
        {
            v: {
                i: [{
                    k: P,
                    o: I[6],
                    frames: 16
                }],
                d: {
                    x: 10,
                    y: 10
                },
                w: {
                    x: 9,
                    y: 0
                },
                G: [{
                    x: 10,
                    y: 9
                },
                {
                    x: 10,
                    y: 10
                }]
            },
            P: {
                type: 6,
                I: 0,
                end: 0,
                state: 0,
                speed: 0,
                pause: 0
            }
        },
        {
            v: {
                i: [{
                    k: P,
                    o: I[14],
                    frames: 48
                }],
                d: {
                    x: 5,
                    y: 14
                },
                w: {
                    x: -66,
                    y: 43
                },
                G: [{
                    x: 4,
                    y: 16
                }]
            },
            R: {
                i: [{
                    k: P,
                    o: I[11],
                    frames: 10
                }],
                d: {
                    x: 14,
                    y: 8
                },
                H: {
                    x: 15,
                    y: 8
                },
                w: {
                    x: 15,
                    y: -6
                }
            },
            P: {
                type: 5,
                I: 0,
                end: 0,
                state: 0,
                speed: 0,
                pause: 0
            }
        },
        {
            v: {
                i: [{
                    k: P,
                    o: I[4],
                    frames: 1
                }],
                size: {
                    x: 5,
                    y: 1
                },
                d: {
                    x: 17,
                    y: 8
                },
                w: {
                    x: 58,
                    y: 61
                },
                K: 1,
                G: [{
                    x: 4,
                    y: 10
                },
                {
                    x: 3,
                    y: 11
                },
                {
                    x: 4,
                    y: 11
                },
                {
                    x: 5,
                    y: 11
                }]
            },
            R: {
                i: [{
                    k: P,
                    o: I[13],
                    frames: 10
                }],
                d: {
                    x: 7,
                    y: 20
                },
                H: {
                    x: 7,
                    y: 20
                },
                w: {
                    x: -12,
                    y: 4
                },
                K: 4
            },
            P: {
                type: 4,
                I: 0,
                end: 0,
                state: 0,
                speed: 7,
                pause: 0
            }
        }],
        qa: !1,
        cb: "bass-loop"
    },
    {
        F: {
            x: 13,
            y: 3,
            z: 0,
            dir: 2
        },
        Aa: [{
            x: 9,
            y: 5,
            dir: 1,
            speed: 6,
            path: [{
                x: 18,
                y: 5
            },
            {
                x: 9,
                y: 5
            }]
        },
        {
            x: 9,
            y: 7,
            dir: 1,
            speed: 7,
            path: [{
                x: 18,
                y: 7
            },
            {
                x: 5,
                y: 7
            }]
        },
        {
            x: 9,
            y: 9,
            dir: 1,
            speed: 10,
            path: [{
                x: 18,
                y: 9
            },
            {
                x: 5,
                y: 9
            }]
        },
        {
            x: 7,
            y: 20,
            dir: 0,
            speed: 5,
            hidden: !0,
            Ga: 2,
            path: [{
                x: 7,
                y: 12
            },
            {
                x: 11,
                y: 12
            },
            {
                x: 7,
                y: 12
            },
            {
                x: 7,
                y: 16
            }]
        }],
        ha: [{
            x: 15,
            y: 10,
            z: 0,
            dir: 3
        },
        {
            x: 4,
            y: 13,
            z: 0,
            dir: 1
        }],
        map: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        eb: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        background: {
            k: Q,
            pb: 6
        },
        Ea: [{
            i: [{
                k: Q,
                o: J[9],
                frames: 1
            }],
            d: {
                x: 10,
                y: 6
            },
            w: {
                x: -8,
                y: -6
            },
            K: 1
        },
        {
            i: [{
                k: Q,
                o: J[10],
                frames: 1
            }],
            d: {
                x: 18,
                y: 4
            },
            w: {
                x: -13,
                y: -17
            },
            K: 1
        },
        {
            i: [{
                k: Q,
                o: J[11],
                frames: 1
            }],
            d: {
                x: 19,
                y: 20
            },
            offset: {
                x: 118,
                y: 156
            }
        },
        {
            i: [{
                k: Q,
                o: J[12],
                frames: 1
            }],
            d: {
                x: 5,
                y: 19
            },
            w: {
                x: 5,
                y: -12
            }
        },
        {
            i: [{
                k: Q,
                o: J[13],
                frames: 1
            }],
            d: {
                x: 3,
                y: 17
            },
            w: {
                x: 62,
                y: 6
            }
        },
        {
            i: [{
                k: Q,
                o: J[14],
                frames: 1
            }],
            d: {
                x: 5,
                y: 16
            },
            w: {
                x: 9,
                y: -7
            }
        },
        {
            i: [{
                k: Q,
                o: J[15],
                frames: 1
            }],
            d: {
                x: 6,
                y: 15
            },
            w: {
                x: 22
            }
        },
        {
            i: [{
                k: Q,
                o: J[16],
                frames: 1
            }],
            d: {
                x: 6,
                y: 12
            },
            w: {
                x: 16,
                y: -2
            }
        },
        {
            i: [{
                k: Q,
                o: J[17],
                frames: 1
            }],
            d: {
                x: 5,
                y: 11
            },
            w: {
                x: -9,
                y: 4
            }
        },
        {
            i: [{
                k: Q,
                o: J[7],
                frames: 1
            }],
            d: {
                x: 10,
                y: 10
            },
            w: {
                y: 23
            }
        },
        {
            i: [{
                k: Q,
                o: J[26],
                frames: 1
            }],
            d: {
                x: 6,
                y: 11
            },
            w: {
                y: -6
            }
        },
        {
            i: [{
                k: Q,
                o: J[19],
                frames: 1
            }],
            d: {
                x: 10,
                y: 4
            },
            w: {
                x: -7,
                y: -7
            }
        },
        {
            i: [{
                k: Q,
                o: J[19],
                frames: 1
            }],
            d: {
                x: 10,
                y: 6
            },
            w: {
                x: -7,
                y: -7
            }
        },
        {
            i: [{
                k: Q,
                o: J[19],
                frames: 1
            }],
            d: {
                x: 7,
                y: 8
            },
            w: {
                x: -7,
                y: -7
            }
        },
        {
            i: [{
                k: Q,
                o: J[19],
                frames: 1
            }],
            d: {
                x: 7,
                y: 10
            },
            w: {
                x: -7,
                y: -7
            }
        },
        {
            i: [{
                k: Q,
                o: J[19],
                frames: 1
            }],
            d: {
                x: 14,
                y: 6
            },
            w: {
                x: 10,
                y: 1
            }
        },
        {
            i: [{
                k: Q,
                o: J[19],
                frames: 1
            }],
            d: {
                x: 17,
                y: 6
            },
            w: {
                x: 10,
                y: 1
            }
        },
        {
            i: [{
                k: Q,
                o: J[19],
                frames: 1
            }],
            d: {
                x: 14,
                y: 8
            },
            w: {
                x: 10,
                y: 1
            }
        },
        {
            i: [{
                k: Q,
                o: J[19],
                frames: 1
            }],
            d: {
                x: 17,
                y: 8
            },
            w: {
                x: 10,
                y: 1
            }
        },
        {
            i: [{
                k: Q,
                o: J[20],
                frames: 1
            }],
            d: {
                x: 8,
                y: 14
            },
            w: {
                x: 11,
                y: -8
            }
        },
        {
            i: [{
                k: Q,
                o: J[20],
                frames: 1
            }],
            d: {
                x: 10,
                y: 14
            },
            w: {
                x: 11,
                y: -8
            }
        },
        {
            i: [{
                k: Q,
                o: J[8],
                frames: 3
            }],
            O: 6,
            d: {
                x: 12,
                y: 3
            }
        },
        {
            i: [{
                k: Q,
                o: J[8],
                frames: 3
            }],
            O: 8.5,
            d: {
                x: 10,
                y: 5
            }
        },
        {
            i: [{
                k: Q,
                o: J[8],
                frames: 3
            }],
            O: 4.3,
            d: {
                x: 17,
                y: 4
            }
        },
        {
            i: [{
                k: Q,
                o: J[8],
                frames: 3
            }],
            O: 2.3,
            d: {
                x: 10,
                y: 2
            }
        },
        {
            i: [{
                k: Q,
                o: J[8],
                frames: 3
            }],
            O: 3.35,
            d: {
                x: 11,
                y: 6
            }
        },
        {
            i: [{
                k: Q,
                o: J[8],
                frames: 3
            }],
            O: 2.3,
            d: {
                x: 10,
                y: 2
            }
        },
        {
            i: [{
                k: Q,
                o: J[8],
                frames: 3
            }],
            O: 9.3,
            d: {
                x: 9,
                y: 8
            }
        },
        {
            i: [{
                k: Q,
                o: J[8],
                frames: 3
            }],
            O: 1.3,
            d: {
                x: 15,
                y: 8
            }
        },
        {
            i: [{
                k: Q,
                o: J[8],
                frames: 3
            }],
            O: 8.38,
            d: {
                x: 6,
                y: 11
            }
        },
        {
            i: [{
                k: Q,
                o: J[8],
                frames: 3
            }],
            O: 4.13,
            d: {
                x: 11,
                y: 12
            }
        },
        {
            i: [{
                k: Q,
                o: J[8],
                frames: 3
            }],
            O: 2.47,
            d: {
                x: 13,
                y: 14
            }
        },
        {
            i: [{
                k: Q,
                o: J[8],
                frames: 3
            }],
            O: 5.17,
            d: {
                x: 9,
                y: 12
            }
        },
        {
            i: [{
                k: Q,
                o: J[8],
                frames: 3
            }],
            O: Math.PI,
            d: {
                x: 3,
                y: 14
            }
        },
        {
            i: [{
                k: Q,
                o: J[8],
                frames: 3
            }],
            O: 9.2,
            d: {
                x: 3,
                y: 11
            }
        },
        {
            i: [{
                k: Q,
                o: J[8],
                frames: 3
            }],
            O: 5.55,
            d: {
                x: 5,
                y: 15
            }
        },
        {
            i: [{
                k: Q,
                o: J[8],
                frames: 3
            }],
            O: 9.87,
            d: {
                x: 8,
                y: 17
            }
        },
        {
            i: [{
                k: Q,
                o: J[24],
                frames: 8
            },
            {
                k: Q,
                o: J[25],
                frames: 7
            }],
            d: {
                x: 19,
                y: 20
            },
            offset: {
                x: 0,
                y: 0
            },
            mb: !0
        }],
        V: {
            i: xf,
            d: {
                x: 13,
                y: 2
            }
        },
        oa: {
            i: [{
                k: Q,
                o: J[22],
                frames: 36
            }],
            d: {
                x: 4,
                y: 13
            },
            w: {
                y: -6
            }
        },
        Fa: [{
            v: {
                i: [{
                    k: Q,
                    o: J[21],
                    frames: 23
                }],
                d: {
                    x: 6,
                    y: 13
                },
                w: {
                    x: 10,
                    y: -2
                },
                G: [{
                    x: 6,
                    y: 13
                }]
            },
            R: {
                i: [{
                    k: Q,
                    o: J[23],
                    frames: 10
                }],
                d: {
                    x: 14,
                    y: 10
                },
                H: {
                    x: 15,
                    y: 10
                },
                w: {
                    y: -6
                }
            },
            P: {
                type: 5,
                I: 0,
                end: 0,
                state: 0,
                speed: 0,
                pause: 0
            }
        },
        {
            v: {
                i: [{
                    k: Q,
                    o: J[18],
                    frames: 6
                }],
                d: {
                    x: 9,
                    y: 19
                },
                w: {
                    x: -26,
                    y: -17
                },
                G: [{
                    x: 6,
                    y: 18
                },
                {
                    x: 8,
                    y: 18
                }],
                H: {
                    x: 4,
                    y: 13
                }
            },
            P: {
                type: 7,
                I: 0,
                end: 0,
                state: 0,
                speed: 0,
                pause: 0
            }
        }],
        qa: !0,
        cb: "rain-loop"
    },
    {
        F: {
            x: 8,
            y: 19,
            z: 0,
            dir: 2
        },
        Aa: [],
        ha: [{
            x: 6,
            y: 10,
            z: 0,
            dir: 2
        },
        {
            x: 11,
            y: 10,
            z: 0,
            dir: 2
        },
        {
            x: 13,
            y: 4,
            z: 0,
            dir: 2
        }],
        map: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        eb: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        background: {
            k: R,
            pb: 0
        },
        Ea: [{
            i: [{
                k: R,
                o: K[5],
                frames: 1
            }],
            d: {
                x: 2,
                y: 0
            },
            offset: {
                x: 0,
                y: 0
            },
            K: 2
        },
        {
            i: [{
                k: R,
                o: K[10],
                frames: 1
            }],
            d: {
                x: 0,
                y: 0
            },
            offset: {
                x: 0,
                y: 15
            },
            opacity: 0.2,
            K: 1
        },
        {
            i: [{
                k: R,
                o: K[22],
                frames: 1
            }],
            d: {
                x: 0,
                y: 0
            },
            offset: {
                x: 518,
                y: 0
            },
            K: 1
        },
        {
            i: [{
                k: R,
                o: K[23],
                frames: 50
            }],
            d: {
                x: 1,
                y: 0
            },
            offset: {
                x: 565,
                y: 5
            },
            K: 1
        },
        {
            i: [{
                k: R,
                o: K[21],
                frames: 1
            }],
            d: {
                x: 0,
                y: 0
            },
            offset: {
                x: 0,
                y: 179
            },
            K: 1
        },
        {
            i: [{
                k: R,
                o: K[14],
                frames: 20
            }],
            d: {
                x: 7,
                y: 7
            },
            w: {
                x: 2,
                y: -9
            }
        },
        {
            i: [{
                k: R,
                o: K[14],
                frames: 20
            }],
            d: {
                x: 7,
                y: 9
            },
            w: {
                x: 2,
                y: -9
            }
        },
        {
            i: [{
                k: R,
                o: K[14],
                frames: 20
            }],
            d: {
                x: 3,
                y: 12
            },
            w: {
                x: 2,
                y: -9
            }
        },
        {
            i: [{
                k: R,
                o: K[14],
                frames: 20
            }],
            d: {
                x: 3,
                y: 14
            },
            w: {
                x: 2,
                y: -9
            }
        },
        {
            i: [{
                k: R,
                o: K[14],
                frames: 20
            }],
            d: {
                x: 3,
                y: 16
            },
            w: {
                x: 2,
                y: -9
            }
        },
        {
            i: [{
                k: R,
                o: K[15],
                frames: 20
            }],
            d: {
                x: 10,
                y: 1
            },
            w: {
                x: -1,
                y: -9
            }
        },
        {
            i: [{
                k: R,
                o: K[15],
                frames: 20
            }],
            d: {
                x: 12,
                y: 1
            },
            w: {
                x: -1,
                y: -9
            }
        },
        {
            i: [{
                k: R,
                o: K[15],
                frames: 20
            }],
            d: {
                x: 14,
                y: 1
            },
            w: {
                x: -1,
                y: -9
            }
        },
        {
            i: [{
                k: R,
                o: K[8],
                frames: 1
            }],
            d: {
                x: 13,
                y: 4
            },
            w: {
                x: 1,
                y: 7
            },
            Wa: "E"
        },
        {
            i: [{
                k: R,
                o: K[7],
                frames: 1
            }],
            d: {
                x: 13,
                y: 3
            },
            w: {
                y: -14
            }
        },
        {
            i: [{
                k: R,
                o: K[6],
                frames: 19
            }],
            d: {
                x: 13,
                y: 1
            },
            w: {
                x: -3,
                y: -10
            }
        }],
        V: {
            i: xf,
            d: {
                x: 8,
                y: 18
            }
        },
        oa: {
            i: [{
                k: R,
                o: K[16],
                frames: 36
            }],
            d: {
                x: 11,
                y: 10
            },
            w: {
                y: -8
            },
            Wa: "L"
        },
        Da: {
            i: [{
                k: R,
                o: K[17],
                frames: 36
            }],
            d: {
                x: 13,
                y: 4
            },
            w: {
                x: -4,
                y: -9
            },
            Wa: "E"
        },
        Fa: [{
            v: {
                i: [{
                    k: R,
                    o: K[20],
                    frames: 25
                }],
                d: {
                    x: 11,
                    y: 10
                },
                w: {
                    x: 3,
                    y: -12
                },
                G: []
            },
            R: {
                i: [{
                    k: P,
                    o: I[12],
                    frames: 10
                }],
                d: {
                    x: 6,
                    y: 9
                },
                H: {
                    x: 6,
                    y: 10
                },
                w: {
                    x: -20,
                    y: -10
                }
            },
            P: {
                type: 8,
                I: 0,
                end: 0,
                state: 0,
                speed: 0,
                pause: 0
            }
        },
        {
            v: {
                i: [{
                    k: R,
                    o: K[19],
                    frames: 35
                }],
                d: {
                    x: 11,
                    y: 10
                },
                w: {
                    x: 3,
                    y: -12
                },
                H: {
                    x: 6,
                    y: 10
                },
                G: [{
                    x: 11,
                    y: 10
                }]
            },
            P: {
                type: 9,
                I: 0,
                end: 0,
                state: 0,
                speed: 0,
                pause: 0
            }
        },
        {
            v: {
                i: [{
                    k: R,
                    o: K[9],
                    frames: 83
                }],
                d: {
                    x: 13,
                    y: 4
                },
                w: {
                    x: 1,
                    y: 7
                },
                G: []
            },
            R: {
                i: [{
                    k: R,
                    o: K[18],
                    frames: 10
                }],
                d: {
                    x: 17,
                    y: 4
                },
                H: {
                    x: 17,
                    y: 5
                }
            },
            P: {
                type: 15,
                I: 0,
                end: 0,
                state: 0,
                speed: 0,
                pause: 0
            }
        },
        {
            v: {
                i: [{
                    k: R,
                    o: K[1],
                    frames: 1
                }],
                d: {
                    x: 4,
                    y: 12
                },
                G: []
            },
            Va: "L1",
            P: {
                type: 10,
                I: 4,
                end: 17,
                state: 0,
                speed: 20,
                pause: 0
            }
        },
        {
            v: {
                i: [{
                    k: R,
                    o: K[1],
                    frames: 1
                }],
                d: {
                    x: 4,
                    y: 14
                },
                G: []
            },
            Va: "L1",
            P: {
                type: 10,
                I: 4,
                end: 15,
                state: 0,
                speed: 20,
                pause: 0
            }
        },
        {
            v: {
                i: [{
                    k: R,
                    o: K[1],
                    frames: 1
                }],
                d: {
                    x: 4,
                    y: 16
                },
                G: []
            },
            Va: "L1",
            P: {
                type: 10,
                I: 4,
                end: 13,
                state: 0,
                speed: 20,
                pause: 0
            }
        },
        {
            v: {
                i: [{
                    k: R,
                    o: K[12],
                    frames: 11
                },
                {
                    k: R,
                    o: K[13],
                    frames: 15
                }],
                K: 1,
                d: {
                    x: 0,
                    y: 16
                },
                H: {
                    x: 6,
                    y: 10
                },
                w: {
                    x: 200,
                    y: 147
                },
                G: []
            },
            P: {
                type: 12,
                I: 4,
                end: 13,
                state: 0,
                speed: 0,
                pause: 0
            }
        },
        {
            v: {
                i: [{
                    k: R,
                    o: K[11],
                    frames: 1
                }],
                K: 1,
                d: {
                    x: 8,
                    y: 9
                },
                H: {
                    x: 8,
                    y: 19
                },
                w: {
                    x: 130,
                    y: 118
                },
                G: []
            },
            P: {
                type: 13,
                I: 8,
                end: 0,
                state: 0,
                speed: 0,
                pause: 0
            }
        },
        {
            v: {
                i: [{
                    k: R,
                    o: K[1],
                    frames: 1
                }],
                d: {
                    x: 8,
                    y: 7
                },
                G: []
            },
            P: {
                type: 14,
                I: 8,
                end: 19,
                state: 0,
                speed: 21,
                pause: 0
            }
        },
        {
            v: {
                i: [{
                    k: R,
                    o: K[1],
                    frames: 1
                }],
                d: {
                    x: 8,
                    y: 9
                },
                G: []
            },
            P: {
                type: 14,
                I: 8,
                end: 19,
                state: 0,
                speed: 23,
                pause: 0
            }
        },
        {
            v: {
                i: [{
                    k: R,
                    o: K[3],
                    frames: 1
                }],
                d: {
                    x: 10,
                    y: 2
                },
                G: []
            },
            P: {
                type: 11,
                I: 2,
                end: 17,
                state: 0,
                speed: 20,
                pause: 0
            }
        },
        {
            v: {
                i: [{
                    k: R,
                    o: K[3],
                    frames: 1
                }],
                d: {
                    x: 12,
                    y: 2
                },
                G: []
            },
            P: {
                type: 11,
                I: 2,
                end: 15,
                state: 0,
                speed: 22,
                pause: 0
            }
        },
        {
            v: {
                i: [{
                    k: R,
                    o: K[3],
                    frames: 1
                }],
                d: {
                    x: 14,
                    y: 2
                },
                G: []
            },
            P: {
                type: 11,
                I: 2,
                end: 14,
                state: 0,
                speed: 20,
                pause: 0
            }
        }],
        qa: !1,
        cb: "bass-loop"
    }];
    var zf = function(a, b, c, d, e, f) {
        jf.call(this, 3, a, b, c, e, d);
        this.Ga = f;
        this.g = 0;
        this.C = !1
    };
    t(zf, jf);
    var Bf = function(a, b, c) {
        c = 2 == c ? new Af(a.x, a.y, a.z || 0, a.dir, a.speed || 4, a.path) : new zf(a.x, a.y, a.z || 0, a.dir, a.speed || 4, c);
        c.init(b);
        c.hidden = !!a.hidden;
        cf(c.path, a.path);
        c.path.g = !0;
        return c
    };
    g = zf.prototype;
    g.init = function(a) {
        zf.D.init.call(this, a);
        D("o", this.Ib, this);
        D("b1", this.bc, this)
    };
    g.J = function() {
        zf.D.J.call(this);
        E("o", this.Ib, this);
        E("b1", this.bc, this)
    };
    g.fc = function(a) {
        kf(this, a.ja)
    };
    g.Eb = function() {
        return this.i[this.direction]
    };
    g.qb = function(a) {
        return this.C ? 2 == this.Ga ? (a = this.g, 3 > this.g && this.g++, a) : zf.D.qb.call(this, a) : 0
    };
    g.Sb = function() {
        return 2 == this.direction || 3 == this.direction ? -2 : 1 == this.direction ? -1 : 0
    };
    g.Fb = function() {
        return 3 == this.direction || 1 == this.direction ? 8 : 3
    };
    g.Ib = function(a) {
        1 == a.type && A(this.d, a.d) && (Cf(this), C.a("v"))
    };
    g.bc = function(a) {
        this.Ga == a && this.hidden && (this.hidden = !1)
    };
    var Cf = function(a) {
        0 == a.Ga ? Ue("exterminate-short") : 1 == a.Ga ? Ue("cyberman") : 2 == a.Ga && Ue("angel")
    },
    Af = function(a, b, c, d, e, f) {
        zf.call(this, a, b, c, d, e, 2);
        this.A = 0;
        this.B = !1;
        this.L = f
    };
    t(Af, zf);
    Af.prototype.qb = function() {
        var a = Math.min(3, this.g);
        0 < this.g && this.g--;
        return a
    };
    Af.prototype.rb = function(a, b) {
        this.A || this.B || !this.path.a.length || Af.D.rb.call(this, a, b)
    };
    var Df = function(a, b) {
        X(b, a.d.a.x, a.d.a.y).G = !0;
        z(a.d, 7, 18, 0);
        z(a.a, 7, 18, 0);
        a.direction = 0;
        cf(a.path, a.L);
        a.path.g = !0;
        a.B = !1
    };
    Af.prototype.Ib = function(a, b) {
        if (!this.hidden && 1 == a.type) {
            var c = this.d.a.x,
            d = this.d.a.y; ! this.A && mf(this, a) && mf(a, this) && (Cf(this), C.a("v", !0), this.g = 12, this.A = 50, Df(this, b));
            if (this.A) this.A--;
            else {
                var e = d == a.d.a.y;
                if (c == a.d.a.x || e || this.B) e = lf(a),
                c = X(b, c, d),
                d = X(b, e.x, e.y),
                11 > e.y && this.B ? (c.G = !0, Df(this, b)) : d.G && 11 <= e.y && (c.G = !0, d.G = !1, this.g = 12, this.A = 50, z(this.d, e.x, e.y, e.z), z(this.a, e.x, e.y, e.z), this.direction = (a.direction + 2) % 4, this.path.g = !1, this.B = !0)
            }
        }
    };
    var Ef = function(a, b) {
        this.a = [];
        this.state = b;
        this.g = !0;
        this.A = a
    };
    Ef.prototype.s = function(a) {
        var b = this.a[this.state].apply(this.A, wa(arguments));
        q(b) ? this.set(b) : this.g = !1
    };
    Ef.prototype.set = function(a) {
        this.state = a;
        this.g = !0
    };
    var Z = function(a, b, c, d, e, f, h, k, m, n, r) {
        this.v = a;
        this.R = b;
        this.C = this.speed = d;
        this.pause = e;
        this.I = f;
        this.end = h;
        this.label = null;
        this.g = 0 < h - f ? 1 : -1;
        this.size = k;
        this.H = m;
        this.G = n;
        this.Va = r;
        this.B = new Bc;
        this.A = this.a = !1;
        this.s = new Ef(this, c);
        D("o", this.ia, this);
        D("x", this.Za, this);
        D("s", this.Lb, this)
    };
    t(Z, B);
    g = Z.prototype;
    g.J = function() {
        this.v.M();
        this.R && this.R.M();
        E("o", this.ia, this);
        E("x", this.Za, this);
        E("s", this.Lb, this)
    };
    g.Za = function(a, b) {
        A(a.d, this.v.d) && this.a && (this.s.s(a, b), a.d.set(a.d.x, a.d.y, this.v.d.z))
    };
    g.ia = function(a) {
        1 == a.type && ((this.A = this.ta(a.d) && !!df(a.path)) && a.d.set(this.v.d.x, this.v.d.y, this.v.d.z), this.a || null == this.H || a.d.a.x != this.H.x || a.d.a.y != this.H.y || (this.a = !0, W(Ke), T(this.R)))
    };
    g.Lb = function(a) {
        null != this.Va && this.Va == a && (this.v.hidden = !0)
    };
    g.init = function() {
        this.R || (this.a = !0);
        this.s.a[0] = this.za;
        this.s.a[1] = this.Na;
        this.s.a[2] = this.la;
        this.s.a[3] = this.va
    };
    g.zb = function(a) {
        C.a("u", a)
    };
    g.Ab = function(a) {
        a.G = !0
    };
    g.za = function(a) {
        this.s.g && this.A && this.zb(this.v.d);
        if (!this.B.a) Dc(this.B),
        this.Ab(a);
        else if (Ec(this.B) >= this.pause) return Ac(this.B),
        a.G = !1,
        this.Y(),
        2
    };
    g.Na = function(a) {
        this.s.g && this.A && this.zb(this.v.d);
        if (!this.B.a) Dc(this.B),
        this.Ab(a);
        else if (Ec(this.B) >= this.pause) return Ac(this.B),
        a.G = !1,
        this.Y(),
        3
    };
    g.ba = p;
    g.Y = p;
    var Ff = function(a, b, c, d, e, f, h, k, m, n, r) {
        Z.call(this, a, b, c, d, e, f, h, k, m, n, r)
    };
    t(Ff, Z);
    g = Ff.prototype;
    g.init = function() {
        Ff.D.init.call(this);
        this.v.g = p
    };
    g.ia = function(a) {
        if (1 == a.type && !this.a && null != this.H && a.d.a.x == this.H.x && a.d.a.y == this.H.y) {
            this.a = !0;
            C.a("t", !1);
            this.ba();
            var b = this;
            T(this.R,
            function() {
                b.s.set(2)
            })
        }
    };
    g.Za = function(a, b) {
        A(a.d, this.v.d) && this.a && this.s.s(a, b)
    };
    g.la = function(a) {
        if (A(a.d, this.v.d) && this.a) if (this.s.g && (this.Y(), C.a("i", [new y(18, 7), new y(17, 8), new y(18, 8), new y(19, 8)], !1)), 11 > this.v.d.a.y) lc(this.v.d, 0, this.speed, 0),
        C.a("q", "bm", 0, this.speed, 0);
        else if (3 < this.v.d.a.x) lc(this.v.d, -this.speed, 0, 0),
        C.a("q", "bm", -this.speed, 0, 0);
        else return z(this.v.d, 3, 11, 0),
        C.a("q", "bm", 5, 10, 0, !0),
        C.a("q", "bmt", 5, 11, 0, !0),
        C.a("i", this.G, !0),
        1
    };
    g.va = p;
    g.za = p;
    g.Na = p;
    g.ta = Aa;
    g.ba = function() {
        W(Ke)
    };
    g.Y = function() {
        W(ve)
    };
    var Gf = function(a, b, c, d, e, f, h, k, m, n, r) {
        Z.call(this, a, b, c, d, e, f, h, k, m, n, r);
        D("t", this.cc, this)
    };
    t(Gf, Z);
    g = Gf.prototype;
    g.init = function() {
        this.v.g = p
    };
    g.J = function() {
        Gf.D.J.call(this);
        E("t", this.cc, this)
    };
    g.Za = p;
    g.cc = function(a) {
        var b = this;
        a ? T(this.v,
        function() {
            C.a("i", b.G, !0)
        }) : Jc(this.v,
        function() {
            C.a("i", b.G, !1)
        })
    };
    g.ia = function(a) {
        1 != a.type || this.a || null == this.H || a.d.a.x != this.H.x || a.d.a.y != this.H.y || (this.a = !0, this.ba(), this.Y(), T(this.R), C.a("t", !0))
    };
    g.la = p;
    g.va = p;
    g.za = p;
    g.Na = p;
    g.ta = Aa;
    g.ba = function() {
        W(Ke)
    };
    g.Y = function() {
        W(ye)
    };
    var Hf = function(a, b, c, d, e, f, h, k, m, n, r) {
        Z.call(this, a, b, c, d, e, f, h, k, m, n, r)
    };
    t(Hf, Z);
    g = Hf.prototype;
    g.init = function() {
        this.v.g = p
    };
    g.Za = p;
    g.Ka = function() {
        C.a("i", this.G, this.Ra())
    };
    g.ia = function(a) {
        if (1 == a.type && !this.a && null != this.H && a.d.a.x == this.H.x && a.d.a.y == this.H.y) {
            this.a = !0;
            this.R && (this.ba(), T(this.R));
            this.Y();
            var b = this;
            T(this.v,
            function() {
                b.Ka()
            })
        }
    };
    g.Ra = Ba;
    g.la = p;
    g.va = p;
    g.za = p;
    g.Na = p;
    g.ta = Aa;
    g.ba = function() {
        W(Ke)
    };
    g.Y = function() {
        "PE1" == this.label ? W(Ee) : W(xe)
    };
    var If = function(a, b, c, d, e, f, h, k, m, n, r) {
        Z.call(this, a, b, c, d, e, f, h, k, m, n, r)
    };
    t(If, Hf);
    If.prototype.Ka = function() {
        If.D.Ka.call(this);
        C.a("b1", 2);
        C.a("i", [new y(7, 19)], !0)
    };
    If.prototype.Ra = Aa;
    var Jf = function(a, b, c, d, e, f, h, k, m, n, r) {
        Z.call(this, a, b, c, d, e, f, h, k, m, n, r)
    };
    t(Jf, Hf);
    Jf.prototype.init = function() {
        Fc(this.v)
    };
    Jf.prototype.ia = function(a) {
        1 != a.type || this.a || null == this.H || a.d.a.x != this.H.x || a.d.a.y != this.H.y || (this.a = !0, this.R && T(this.R), this.v.hidden = !0)
    };
    Jf.prototype.Ra = Aa;
    var Kf = function(a, b, c, d, e, f, h, k, m, n, r) {
        Z.call(this, a, b, c, d, e, f, h, k, m, n, r)
    };
    t(Kf, Hf);
    g = Kf.prototype;
    g.init = function() {
        this.v.g = p;
        this.v.hidden = !0
    };
    g.ia = function(a) {
        if (1 == a.type && !this.a && null != this.H && a.d.a.x == this.H.x && a.d.a.y == this.H.y) {
            this.a = !0;
            this.v.hidden = !1;
            this.Y();
            var b = this;
            T(this.v,
            function() {
                C.a("r", "L");
                b.Ka()
            },
            12)
        }
    };
    g.Ra = Ba;
    g.ba = p;
    g.Y = function() {
        W(De)
    };
    var Lf = function(a, b, c, d, e, f, h, k, m, n, r) {
        Z.call(this, a, b, c, d, e, f, h, k, m, n, r)
    };
    t(Lf, Z);
    g = Lf.prototype;
    g.la = function() {
        if (1 == this.g && this.v.d.x >= 46 * this.end || -1 == this.g && this.v.d.x <= 46 * this.end) return mc(this.v.d, this.end),
        1;
        lc(this.v.d, this.g * this.speed, 0, 0)
    };
    g.va = function() {
        if (1 == this.g && this.v.d.x <= 46 * this.I || -1 == this.g && this.v.d.x >= 46 * this.I) return mc(this.v.d, this.I),
        0;
        lc(this.v.d, this.g * -this.speed, 0, 0)
    };
    g.ta = function(a) {
        return 1 == this.g ? a.a.x >= this.I && a.a.x <= this.end && a.a.y == this.v.d.a.y && a.a.z == this.v.d.a.z: a.a.x <= this.I && a.a.x >= this.end && a.a.y == this.v.d.a.y && a.a.z == this.v.d.a.z
    };
    g.ba = function() {
        W(Ke)
    };
    g.Y = function() {
        W(Be)
    };
    var Mf = function(a, b, c, d, e, f, h, k, m, n, r) {
        Z.call(this, a, b, c, d, e, f, h, k, m, n, r)
    };
    t(Mf, Z);
    g = Mf.prototype;
    g.la = function() {
        if (1 == this.g && this.v.d.y >= 46 * this.end || -1 == this.g && this.v.d.y <= 46 * this.end) return nc(this.v.d, this.end),
        1;
        lc(this.v.d, 0, this.g * this.speed, 0)
    };
    g.va = function() {
        if (1 == this.g && this.v.d.y <= 46 * this.I || -1 == this.g && this.v.d.y >= 46 * this.I) return nc(this.v.d, this.I),
        0;
        lc(this.v.d, 0, this.g * -this.speed, 0)
    };
    g.ta = function(a) {
        return 1 == this.g ? a.a.y >= this.I && a.a.y <= this.end && a.a.x == this.v.d.a.x && a.a.z == this.v.d.a.z: a.a.y <= this.I && a.a.y >= this.end && a.a.x == this.v.d.a.x && a.a.z == this.v.d.a.z
    };
    g.ba = function() {
        W(Ke)
    };
    g.Y = function() {
        W(Be)
    };
    var Nf = function(a, b, c, d, e, f, h, k, m, n, r) {
        Z.call(this, a, b, c, d, e, f, h, k, m, n, r);
        this.F = null
    };
    t(Nf, Mf);
    Nf.prototype.ia = function(a) {
        1 == a.type && (this.F = a, this.A = this.ta(a.a))
    };
    Nf.prototype.ta = function(a) {
        return this.v.d.y >= a.y && this.v.d.y - 46 * this.size.y <= a.y && this.v.d.a.x <= a.a.x && this.v.d.a.x + this.size.x > a.a.x && this.v.d.a.z == a.a.z
    };
    Nf.prototype.Za = function(a, b, c) {
        A(a.d, this.v.d) && this.s.s(a, b, c)
    };
    var Of = function(a, b, c, d) {
        if (a.label) if (c) {
            var e = a.v.d.a.y - a.size.y + 1,
            f = a.v.d.a.y - 1;
            c = a.v.d.a.x;
            for (a = c + a.size.x - 1; c <= a; ++c) for (d = e; d <= f; ++d) X(b, c, d).G = !0
        } else for (e = q(d) ? d: a.v.d.a.y, c = 0; c < a.size.x; ++c) for (d = 0; d < a.size.y; ++d) if (f = X(b, c + a.v.d.a.x, d + e)) f.G = !1
    },
    Pf = function(a, b) {
        a.label && ("LR1" == a.label ? (Of(a, b, !1, 8), Of(a, b, !1, 17)) : "LR2" == a.label && (Of(a, b, !1, 6), Of(a, b, !1, 11)))
    },
    Qf = function(a) {
        if (a.F) {
            var b = a.F.d.a.y;
            "LR1" == a.label ? b = Math.max(b, 8) : "LR2" == a.label && (b = Math.max(b, 6));
            z(a.F.d, a.F.d.a.x, b, a.F.d.a.z);
            bf(a.F.path)
        }
    };
    g = Nf.prototype;
    g.la = function(a, b, c) {
        this.speed < this.C && (this.speed = Math.min(this.speed + 0.2, this.C));
        a = Nf.D.la.call(this, a, b, c);
        Pf(this, c);
        this.A && (q(a) ? Qf(this) : C.a("q", "rm", 0, this.g * this.speed, 0));
        return a
    };
    g.va = function(a, b, c) {
        this.speed < this.C && (this.speed = Math.min(this.speed + 0.2, this.C));
        a = Nf.D.va.call(this, a, b, c);
        Pf(this, c);
        this.A && (q(a) ? Qf(this) : C.a("q", "rm", 0, this.g * -this.speed, 0));
        return a
    };
    g.zb = p;
    g.Ab = p;
    g.za = function(a, b, c) {
        this.speed = 0;
        Of(this, c, !0);
        if (!this.F || df(this.F.path) || !this.A) return Nf.D.za.call(this, a, b, c)
    };
    g.Na = function(a, b, c) {
        this.speed = 0;
        Of(this, c, !0);
        if (!this.F || df(this.F.path) || !this.A) return Nf.D.Na.call(this, a, b, c)
    };
    g.ba = p;
    g.Y = p;
    var Rf = function(a, b, c, d, e, f, h, k, m, n, r) {
        Z.call(this, a, b, c, d, e, f, h, k, m, n, r)
    };
    t(Rf, Z);
    g = Rf.prototype;
    g.la = function() {
        if (this.v.d.z >= 46 * this.end) return oc(this.v.d, this.end),
        1;
        lc(this.v.d, 0, 0, this.g * this.speed)
    };
    g.va = function() {
        if (this.v.d.z <= 23 * this.I) return oc(this.v.d, this.I),
        0;
        lc(this.v.d, 0, 0, this.g * -this.speed)
    };
    g.ta = function(a) {
        return 1 == this.g ? a.a.z >= this.I && a.a.z <= this.end && a.a.x == this.v.d.a.x && a.a.y == this.v.d.a.y: a.a.z <= this.I && a.a.z >= this.end && a.a.x == this.v.d.a.x && a.a.y == this.v.d.a.y
    };
    g.ba = function() {
        W(Ke)
    };
    g.Y = function() {
        W(Be)
    };
    var Sf = function(a, b, c, d, e, f, h, k, m, n, r) {
        Z.call(this, a, b, c, d, e, f, h, k, m, n, r)
    };
    t(Sf, Lf);
    g = Sf.prototype;
    g.za = function(a, b, c) {
        this.speed = 0;
        b = Sf.D.za.call(this, a, b, c);
        a.G = !0;
        return b
    };
    g.la = function(a, b, c) {
        this.speed = Math.min(this.speed + 2.5, this.C);
        b = Sf.D.la.call(this, a, b, c);
        a.G = !0;
        return b
    };
    g.va = function() {
        this.speed = 0;
        mc(this.v.d, this.I);
        return 0
    };
    g.ia = function(a) {
        1 == a.type && this.v && (!this.v.hidden && A(this.v.d, a.d) ? (W(ze), C.a("v")) : 13 == a.d.a.x && 4 == a.d.a.y && (this.v.hidden = !1))
    };
    g.ta = Aa;
    g.ba = p;
    g.Y = function() {
        0.8 < Math.random() && W(Je, !0)
    };
    var Tf = function(a, b, c, d, e, f, h, k, m, n, r) {
        Z.call(this, a, b, c, d, e, f, h, k, m, n, r);
        D("a1", this.L, this)
    };
    t(Tf, Sf);
    Tf.prototype.J = function() {
        Tf.D.J.call(this);
        E("a1", this.L, this)
    };
    Tf.prototype.init = function() {
        Tf.D.init.call(this);
        this.a = !1;
        this.v.hidden = !0
    };
    Tf.prototype.L = function() {
        this.v.hidden = !1;
        this.a = !0
    };
    var Uf = function(a, b, c, d, e, f, h, k, m, n, r) {
        Z.call(this, a, b, c, d, e, f, h, k, m, n, r);
        D("a1", this.dc, this)
    };
    t(Uf, Mf);
    g = Uf.prototype;
    g.J = function() {
        Uf.D.J.call(this);
        E("a1", this.dc, this)
    };
    g.init = function() {
        Uf.D.init.call(this);
        this.a = !1;
        this.v.hidden = !0
    };
    g.dc = function() {
        this.v.hidden = !1;
        this.a = !0
    };
    g.za = function(a, b, c) {
        this.speed = 0;
        b = Uf.D.za.call(this, a, b, c);
        a.G = !0;
        return b
    };
    g.Na = function(a, b, c) {
        this.speed = 0;
        b = Uf.D.Na.call(this, a, b, c);
        a.G = !0;
        return b
    };
    g.la = function(a, b, c) {
        this.speed = Math.min(this.speed + 2.5, this.C);
        b = Uf.D.la.call(this, a, b, c);
        a.G = !0;
        return b
    };
    g.va = function() {
        this.speed = 0;
        nc(this.v.d, this.I);
        return 0
    };
    g.ia = function(a) {
        1 == a.type && this.v && !this.v.hidden && A(this.v.d, a.d) && (W(ze), C.a("v"))
    };
    g.ta = Aa;
    g.ba = p;
    g.Y = p;
    var Vf = function(a, b, c, d, e, f, h, k, m, n, r) {
        Z.call(this, a, b, c, d, e, f, h, k, m, n, r)
    };
    t(Vf, If);
    Vf.prototype.init = function() {
        this.v.g = p;
        this.v.hidden = !0
    };
    Vf.prototype.Ka = p;
    var Wf = function(a) {
        a.v.state = 1;
        T(a.v,
        function() {
            a.v.hidden = !0
        })
    };
    Vf.prototype.ia = function(a) {
        1 == a.type && (this.a || null == this.H || a.d.a.x != this.H.x || a.d.a.y != this.H.y ? !this.v.hidden && this.v.d.a.y == a.d.a.y && a.d.a.x >= this.I && a.d.a.x <= this.end ? (W(ze), C.a("v")) : 13 == a.d.a.x && 4 == a.d.a.y && 0 == this.v.state && Wf(this) : (this.v.hidden = !1, this.a = !0, C.a("s", "L1"), T(this.v)))
    };
    Vf.prototype.ba = function() {
        W(Ke)
    };
    Vf.prototype.Y = p;
    var Xf = function(a, b, c, d, e, f, h, k, m, n, r) {
        Z.call(this, a, b, c, d, e, f, h, k, m, n, r);
        this.v.g = p
    };
    t(Xf, Vf);
    Xf.prototype.ia = function(a) {
        if (1 == a.type) if (!this.a && null != this.H && a.d.a.x == this.H.x && a.d.a.y == this.H.y) this.v.hidden = !1,
        this.a = !0;
        else if (!this.v.hidden && this.v.d.a.y == a.d.a.y) W(ze),
        C.a("v");
        else if (11 == a.d.a.x && 10 == a.d.a.y) {
            C.a("a1");
            var b = this;
            Hc(this.v,
            function() {
                0 >= b.v.d.x ? b.v.hidden = !0 : lc(b.v.d, -30, 0, 0)
            })
        }
    };
    var Yf = function(a, b, c, d, e, f, h, k, m, n, r) {
        Z.call(this, a, b, c, d, e, f, h, k, m, n, r)
    };
    t(Yf, Hf);
    Yf.prototype.init = function() {
        this.v.g = p
    };
    var Zf = function(a) {
        T(a.v,
        function() {
            a.v.hidden = !0;
            C.a("r", "E")
        })
    };
    Yf.prototype.ia = function(a) {
        if (1 == a.type && !this.a && null != this.H && a.d.a.x == this.H.x && a.d.a.y == this.H.y) {
            this.a = !0;
            this.ba();
            var b = this;
            T(this.R,
            function() {
                Zf(b)
            })
        }
    };
    Yf.prototype.Ra = Aa;
    Yf.prototype.ba = function() {
        W(Ae)
    };
    Yf.prototype.Y = p;
    var $f = function(a, b, c, d, e, f, h, k, m, n, r) {
        Z.call(this, a, b, c, d, e, f, h, k, m, n, r)
    };
    t($f, Hf);
    g = $f.prototype;
    g.ia = function(a) {
        if (1 == a.type && !this.a && null != this.H && a.d.a.x == this.H.x && a.d.a.y == this.H.y) {
            this.a = !0;
            this.R && T(this.R);
            var b = this;
            T(this.v,
            function() {
                b.Ka()
            });
            C.a("Look for an egg on the 2nd level")
        }
    };
    g.Ka = p;
    g.Ra = Aa;
    g.ba = function() {
        W(Ee)
    };
    g.Y = p;
    var ag = function(a, b, c, d, e, f, h, k, m, n, r) {
        Z.call(this, a, b, c, d, e, f, h, k, m, n, r);
        this.v.hidden = !0
    };
    t(ag, Hf);
    ag.prototype.ia = function(a) {
        1 != a.type || this.a || null == this.H || a.d.a.x != this.H.x || a.d.a.y != this.H.y || (this.a = !0, this.v.hidden = !1, Fc(this.v))
    };
    ag.prototype.Ka = p;
    ag.prototype.Ra = Aa;
    var bg = function(a, b, c, d) {
        this.d = jc(a, b, c);
        this.G = d;
        this.g = this.a = !1
    };
    t(bg, B);
    var cg = function(a, b, c, d, e, f, h, k) {
        jf.call(this, 1, a, b, c, 8, d);
        this.A = !1;
        this.g = this.S = this.$ = this.Z = null;
        this.C = e;
        this.Q = f;
        this.L = h;
        this.W = k;
        this.ea = this.fa = null;
        this.B = !1;
        D("u", this.Rb, this);
        D("v", this.Pb, this);
        D("q", this.Qb, this)
    };
    t(cg, jf);
    cg.prototype.init = function(a) {
        cg.D.init.call(this, a);
        D("j", this.Yb, this);
        D("k", this.Vb, this);
        D("l", this.Wb, this);
        D("m", this.Xb, this);
        D("n", this.ga, this)
    };
    cg.prototype.J = function() {
        cg.D.J.call(this);
        dg(this);
        this.C && this.C.M();
        this.Q && this.Q.M();
        this.L && this.L.M();
        this.W && this.W.M();
        E("u", this.Rb, this);
        E("v", this.Pb, this);
        E("q", this.Qb, this);
        E("j", this.Yb, this);
        E("k", this.Vb, this);
        E("l", this.Wb, this);
        E("m", this.Xb, this);
        E("n", this.ga, this)
    };
    var dg = function(a) {
        a.Z && a.Z.M();
        a.$ && a.$.M();
        a.S && a.S.M();
        a.g && a.g.M();
        a.fa && a.fa.M();
        a.ea && a.ea.M()
    },
    eg = function(a, b) {
        a.i = [];
        kf(a, b.aa);
        kf(a, b.ja);
        a.fa = S(b.fa, a.d);
        a.fa.hidden = !0;
        a.ea = S(b.ea, a.d);
        a.ea.hidden = !0
    };
    g = cg.prototype;
    g.fc = function(a) {
        eg(this, a);
        dg(this);
        var b = jc(this.s.x, this.s.y, this.s.z);
        this.Z = S(a.Z, b);
        this.Z.hidden = !0;
        this.$ = S(a.$, b);
        this.$.hidden = !0;
        a.S && (this.S = S(a.S.sc, this.a), this.S.hidden = !0, this.g = S(a.S.handle, this.a), this.g.hidden = !0)
    };
    g.Eb = function() {
        var a = this.direction; ! df(this.path) && (a += 4);
        return this.i[a]
    };
    g.Rb = function(a) {
        this.d.set(a.x, a.y, a.z)
    };
    g.Qb = function(a, b, c, d, e) {
        "rm" == a && (e ? z(this.d, b || 0, c || 0, d || 0) : lc(this.d, b || 0, c || 0, d || 0))
    };
    g.Pb = function(a) {
        this.A = !0;
        this.B = !!a
    };
    g.Sb = function() {
        return 2 == this.direction || 3 == this.direction ? -14 : -4
    };
    g.Fb = ya(3);
    var fg = function(a) {
        return 3 == a.direction || 2 == a.direction ? a.B ? a.L: a.C: a.B ? a.W: a.Q
    },
    gg = function(a) {
        return 1 == a.direction || 0 == a.direction ? a.fa: a.ea
    };
    cg.prototype.Nb = function() {
        Ue("walking")
    };
    cg.prototype.Xa = function(a, b) {
        A(this.a, a.d) && this.Ba(b)
    };
    cg.prototype.Ba = function(a) {
        cg.D.Ba.call(this, a);
        this.hidden || 3 != U.N().A || (this.g.hidden = !1, 1 == this.direction || 2 == this.direction ? (this.g.state = 0, this.S.w.x = 3, this.g.w.x = 3) : (this.g.state = 1, this.S.w.x = -3, this.g.w.x = -3), this.S.Ba(a), this.g.Ba(a), this.g.hidden = !0)
    };
    var hg = function(a, b) {
        google && google.doodle && (b && (google.doodle.cpDestroy = b), google.doodle.cpInit = function() {
            b && b();
            a()
        })
    },
    ig = function(a, b, c) {
        if (google) {
            var d = function() {
                var a = google.msg && google.msg.unlisten;
                a && (a(67, d), c && a(94, c));
                b();
                return ! 0
            },
            e = function() {
                var a = document.getElementById("hplogo");
                a && "hidden" != a.style.visibility && (a = google.msg && google.msg.listen, google.psy && google.psy.q && a && (a(67, d), c && a(94, c)))
            };
            e();
            google.doodle && google.doodle.jesr || (ja("google.doodle.jesr"), google.raas && google.raas("doodle", {
                init: function() {
                    e();
                    google.doodle.jesrd && (a(), google.doodle.jesrd = !1)
                },
                dispose: function() {
                    d();
                    google.doodle.jesrd = !0
                }
            }))
        }
    };
    var kg = function() {
        this.L = !0;
        this.Q = !1;
        this.B = [];
        this.C = !1;
        this.a = this.s = this.g = 0;
        this.A = jg
    };
    t(kg, B);
    aa(kg);
    var jg = 1E3 / 60,
    lg = function(a, b) {
        this.A = a;
        this.a = kg.N().g;
        this.s = 0;
        this.g = b || null
    },
    mg = function(a) {
        var b = a.A(a.s);
        a.s++;
        a.a = kg.N().g + 33 / kg.N().A; ! b && a.g && a.g();
        return b
    },
    pg = function(a, b, c) {
        b = new lg(b, c);
        ng(a, b)
    },
    ng = function(a, b) {
        a.B.push(b);
        a.C = !0
    },
    rg = function(a) {
        if (a.L) a.Q = !1;
        else {
            a.Q = !0;
            qg(a);
            a.C && (a.B.sort(function(a, b) {
                return a.a == b.a ? 0 : a.a - b.a
            }), a.C = !1);
            for (var b = 0,
            c = 0,
            d; d = a.B[c]; c++) if (d.a <= a.g) mg(d) && ng(a, d),
            b++;
            else break;
            a.B.splice(0, b);
            a.g++;
            Vb(function() {
                rg(a)
            })
        }
    },
    qg = function(a) {
        var b = (new Date).getTime();
        30 < a.g && a.s && (b - a.s >= 1.05 * a.A ? a.a++:a.a >>= 1, 20 < a.a && (a.A = Math.min(50, 1.2 * a.A), a.a = 0));
        a.s = b
    },
    sg = function() {
        var a = kg.N();
        a.L = !1;
        a.Q || rg(a)
    };
    kg.prototype.J = function() {
        tg(this);
        kg.D.J.call(this)
    };
    var tg = function(a) {
        a.L = !0;
        a.a = 0;
        a.s = 0;
        a.B = [];
        a.g = 0;
        a.C = !1;
        a.A = jg;
        a.a = 0;
        a.s = 0
    };
    var wg = function(a, b, c) {
        this.Q = a;
        this.Ja = b;
        this.oc = c;
        this.g = this.a = this.B = !1;
        this.L = ia();
        this.Db = Sb("hidden");
        if ((this.A = (this.C = Sb("visibilityState")) ? this.C.replace(/state$/i, "change").toLowerCase() : null) && document.addEventListener) {
            var d = this;
            this.ga = function() {
                var a = document[d.C];
                d.B = document[d.Db] || "hidden" == a;
                d.B ? ug(d) : d.W()
            };
            document.addEventListener(this.A, this.ga, !1)
        }
        vg(this)
    };
    t(wg, B);
    wg.prototype.J = function() {
        window.clearTimeout(this.s);
        this.A && document.removeEventListener && document.removeEventListener(this.A, this.ga, !1);
        wg.D.J.call(this)
    };
    var ug = function(a) {
        var b = a.B || a.a;
        a.g && !b ? (a.g = !1, a.oc(), vg(a)) : !a.g && b && (a.g = !0, a.Ja())
    },
    vg = function(a) {
        a.s && window.clearTimeout(a.s);
        var b = Math.max(100, a.Q - xg(a));
        a.s = window.setTimeout(function() {
            a.s = null;
            a.a = xg(a) >= a.Q;
            a.a || vg(a);
            ug(a)
        },
        b)
    },
    xg = function(a) {
        return ia() - a.L
    };
    wg.prototype.W = function() {
        this.L = ia();
        this.a = !1;
        ug(this)
    };
    var zg = function(a) {
        nd.call(this);
        this.a = a;
        bd(a, yg, this.g, !1, this);
        bd(a, "click", this.s, !1, this)
    };
    t(zg, nd);
    var yg = Za ? "keypress": "keydown";
    zg.prototype.g = function(a) { (13 == a.keyCode || $a && 3 == a.keyCode) && Ag(this, a)
    };
    zg.prototype.s = function(a) {
        Ag(this, a)
    };
    var Ag = function(a, b) {
        var c = new Bg(b);
        if (pd(a, c)) {
            c = new Cg(b);
            try {
                pd(a, c)
            } finally {
                b.Hb()
            }
        }
    };
    zg.prototype.J = function() {
        zg.D.J.call(this);
        gd(this.a, yg, this.g, !1, this);
        gd(this.a, "click", this.s, !1, this);
        delete this.a
    };
    var Cg = function(a) {
        Oc.call(this, a.a);
        this.type = "action"
    };
    t(Cg, Oc);
    var Bg = function(a) {
        Oc.call(this, a.a);
        this.type = "beforeaction"
    };
    t(Bg, Oc);
    var Dg = function(a, b, c, d, e) {
        ld.call(this);
        this.L = a;
        this.ga = b;
        this.W = c;
        this.Q = d;
        e && (this.a && this.unlisten(this.a, "action", this.s), e && (this.a = new zg(e), a = ha(qc, this.a), this.ka || (this.ka = []), this.ka.push(s(a, void 0)), this.s = s(this.A, this), this.listen(this.a, "action", this.s)))
    };
    t(Dg, ld);
    Dg.prototype.A = function() {
        if (Eg()) window.gapi && window.gapi.load && window.gapi.load("share", s(this.B, this)),
        Wb("gplus,li");
        else {
            var a = window.open("about:blank");
            a && (a.location = "https://plus.google.com");
            Wb("gplus,lo")
        }
    };
    var Eg = function() {
        if (!window.gbar) return ! 1;
        var a = !!(window.gbar.sos && 0 < window.gbar.sos().length),
        b = !(!window.gbar.so || !window.gbar.so());
        return a || b
    };
    Dg.prototype.B = function() {
        if (window.gapi && window.gapi.share) {
            var a = {
                items: [{
                    type: "http://schema.org/WebPage",
                    id: location.protocol + "//" + location.host,
                    properties: {
                        url: [this.L],
                        name: [this.ga],
                        image: [this.Q]
                    }
                }]
            },
            b = window.location.toString().match(/[?&]authuser=(\d+)/),
            b = b && b[1],
            c = Eg() || !!window.google.doodle.sf;
            window.gapi.share.lightbox(a, {
                isLoggedInForGooglePlus: c,
                onLoginPopupBlocked: function() {
                    Wb("gplus,popupblocked")
                },
                onLoginStateChanged: s(function() {
                    ja("google.doodle.sf");
                    this.B()
                },
                this),
                editorText: this.W,
                sessionIndex: b || "",
                sourceForLogging: "doodle"
            })
        }
    };
    var Fg = {
        en: "See if you can beat my time of:",
        ar: "\u0647\u0644 \u062a\u0633\u062a\u0637\u064a\u0639 \u0627\u0644\u062a\u063a\u0644\u0628 \u0639\u0644\u0649 \u0627\u0644\u0632\u0645\u0646 \u0627\u0644\u0630\u064a \u062d\u0642\u0642\u062a\u0647:",
        bg: "\u041f\u0440\u043e\u0431\u0432\u0430\u0439 \u0434\u0430 \u043f\u043e\u0434\u043e\u0431\u0440\u0438\u0448 \u043c\u043e\u0435\u0442\u043e \u0432\u0440\u0435\u043c\u0435:",
        ca: "Intenta millorar el meu temps:",
        da: "Kan du sl\u00e5 min tid?",
        el: "\u0394\u03b5\u03af\u03c4\u03b5 \u03b1\u03bd \u03bc\u03c0\u03bf\u03c1\u03b5\u03af\u03c4\u03b5 \u03bd\u03b1 \u03ba\u03b5\u03c1\u03b4\u03af\u03c3\u03b5\u03c4\u03b5 \u03c4\u03bf \u03c7\u03c1\u03cc\u03bd\u03bf \u03bc\u03bf\u03c5:",
        "en-GB": "See if you can beat my time:",
        es: "Intenta mejorar mi tiempo: ",
        "es-419": "Intenta mejorar mi tiempo:",
        eu: "Saiatu nire denbora hobetzen",
        fr: "Essayez de battre mon temps :",
        gl: "Tenta mellorar o meu tempo",
        hr: "Poku\u0161ajte pobijediti moje vrijeme od:",
        id: "Apakah anda bisa mengalahkan waktu saya:",
        it: "Prova a battere il mio tempo:",
        mk: "\u041f\u0440\u043e\u0431\u0430\u0458 \u0434\u0430 \u043c\u0435 \u043f\u043e\u0431\u0435\u0434\u0438\u0448:",
        pl: "Sprawd\u017a, czy pobijesz m\u00f3j czas:",
        "pt-BR": "Veja se voc\u00ea consegue superar meu tempo de:",
        "pt-PT": "Tente superar o meu tempo de:",
        ro: "Vezi dac\u0103 po\u0163i scoate un timp mai bun dec\u00e2t al meu:",
        ru: "\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0431\u0438\u0442\u044c \u043c\u043e\u0439 \u0440\u0435\u043a\u043e\u0440\u0434:",
        sv: "Kan du sl\u00e5 min tid?",
        tr: "Benim zaman\u0131m\u0131 ge\u00e7ebilecek misin: ",
        uk: "\u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u043f\u043e\u0431\u0438\u0442\u0438 \u043c\u0456\u0439 \u0440\u0435\u043a\u043e\u0440\u0434:",
        "zh-CN": "\u8bd5\u8bd5\u770b\uff0c\u80fd\u5426\u6bd4\u6211\u8fd8\u5feb\uff1a",
        "zh-TW": "\u8a66\u8a66\u770b\uff0c\u80fd\u5426\u6bd4\u6211\u9084\u5feb\uff1a"
    };
    var Ig = function() {
        V.call(this, new Gg);
        var a = Xe();
        if (a) {
            v(a, "cursor", "default");
            this.a = Ob();
            v(this.a, "bottom", "40px", "height", "102px", "right", "4px", "width", "30px");
            var b = cc(yc, 3);
            b.onclick = function() {
                C.a("l1");
                Gd(8);
                U.N().W++
            };
            v(b, "bottom", "72px", "cursor", "pointer");
            this.a.appendChild(b);
            this.A = window.location.protocol + (window.google.doodle.shortlink || "//www.google.com");
            var c = Ob();
            v(c, "backgroundColor", "#04213E", "cursor", "pointer", "top", "117px", "height", "34px", "right", "-134px", "width", "134px");
            this.s = c;
            var d = this,
            b = cc(yc, 2);
            v(b, "cursor", "pointer", "left", "2px", "top", "2px");
            b.onclick = function() { (new Dg(d.A, window.google.doodle.alt || "", Hg(), "http://www.google.com./share.gif")).A()
            };
            this.s.appendChild(b);
            b = cc(yc, 0);
            v(b, "cursor", "pointer", "left", "34px", "top", "2px");
            b.onclick = function() {
                var a = new rb("http://www.facebook.com/sharer.php"),
                b = new xb;
                Hb(b, "s", 100);
                Hb(b, "p[title]", Hg());
                Hb(b, "p[url]", d.A);
                Hb(b, "p[images][0]", "http://www.google.com./share.gif");
                vb(a, b);
                window.open(a.toString());
                Gd(11)
            };
            this.s.appendChild(b);
            b = cc(yc, 5);
            v(b, "cursor", "pointer", "left", "66px", "top", "2px");
            b.onclick = function() {
                var a = Hg() + "\n" + d.A;
                window.open("http://twitter.com/intent/tweet?status=" + encodeURIComponent(String(a)));
                Gd(12)
            };
            this.s.appendChild(b);
            b = cc(yc, 4);
            b.onclick = function() {
                var a = "0" == c.style.right[0];
                v(c, "right", a ? "-134px": "0");
                a || Gd(10)
            };
            v(b, "bottom", "36px", "cursor", "pointer");
            this.a.appendChild(b);
            b = cc(w, 6);
            b.onclick = function() {
                Gd(9);
                Tb()
            };
            v(b, "bottom", "0", "cursor", "pointer");
            this.a.appendChild(b);
            a.appendChild(this.s);
            a.appendChild(this.a)
        }
        Sd(this, "k1",
        function() {
            this.Ha && Ve("end-loop")
        });
        Ve("end-loop")
    };
    t(Ig, V);
    Ig.prototype.J = function() {
        uc(this.a);
        uc(this.s);
        be(de, "end-loop");
        this.g()
    };
    Ig.prototype.ib = p;
    Ig.prototype.hb = function(a) {
        var b = F().g;
        ac(yc, 1, b, a % 10, 682, 0, 0);
        x(L, 117, b, 32, 142);
        b.fillStyle = "#000";
        b.font = "bold 20px Arial";
        b.textAlign = "center";
        b.fillText(Dd(U.N()), 50, 205)
    };
    var Hg = function() {
        var a = window.google.kHL;
        return (a in Fg && Fg[a] ? Fg[a] : Fg.en) + " " + Dd(U.N()) + " #DrWhoDoodle"
    },
    Gg = function() {
        vd.call(this)
    };
    t(Gg, vd);
    var Kg = function() {
        V.call(this, new Jg);
        this.a = new Bc
    };
    t(Kg, V);
    aa(Kg);
    Kg.prototype.init = function() {
        Ac(this.a)
    };
    Kg.prototype.ib = function() {
        3E3 <= Ec(this.a) && this.g()
    };
    Kg.prototype.B = function() {
        Kg.D.B.call(this);
        Dc(this.a)
    };
    Kg.prototype.g = function() {
        Kg.D.g.call(this);
        Ac(this.a)
    };
    var Lg = (680 - M.getWidth(1)) / 2,
    Mg = -64 / 3,
    Ng = 32 / 3;
    Kg.prototype.hb = function(a) {
        var b = F().g;
        b.fillStyle = "#71698e";
        b.fillRect(0, 0, 680, 225);
        x(M, 1, b, Lg, 42);
        var c, d = Math.min(3, Math.floor(3 * Math.max(a / 30)));
        30 > a ? (a = 338 + d * Mg, c = 58 + d * Ng) : (a = 274, c = 90);
        ac(M, 2, b, d + 1, 24, a + 17, c + 39, 0.7);
        ac(w, 1, b, U.N().a, 60, a, c, 0.7)
    };
    var Jg = function() {
        vd.call(this)
    };
    t(Jg, vd);
    Jg.prototype.xa = function(a) {
        Jg.D.xa.call(this, a);
        Kg.N().g()
    };
    Jg.prototype.ra = function(a) {
        Jg.D.ra.call(this, a);
        Kg.N().g()
    };
    var $ = function() {
        V.call(this, new Og);
        this.a = new Bc
    };
    t($, V);
    aa($);
    $.prototype.init = function(a) {
        this.A = a.i.mc;
        this.C = a.i.nc;
        a = a.i.Cb;
        this.s = [];
        for (var b = 0; b < a.index.length; ++b) {
            for (var c = a.X[a.index[b]], d = c[0], e = c[1], f = c[2] / a.frames, c = c[3], h = [], k = 0; k < a.frames; ++k) h.push([k * f + d, e, f, c]);
            this.s[b] = {
                yb: {
                    Pa: a.k,
                    X: h,
                    frames: h.length
                },
                index: a.index[b]
            }
        }
        Ac(this.a)
    };
    $.prototype.ib = function() {
        3E3 <= Ec(this.a) && (Pg(this), Ac(this.a))
    };
    $.prototype.B = function() {
        $.D.B.call(this);
        Ve("waiting-loop");
        Sd(this, "k1",
        function() {
            this.Ha && Ve("waiting-loop")
        });
        Dc(this.a)
    };
    var Pg = function(a) {
        var b = U.N().A + 1;
        Zb(zc[b],
        function() {
            a.g()
        })
    };
    $.prototype.g = function() {
        $.D.g.call(this);
        be(de, "waiting-loop");
        Td(this);
        var a = this.a;
        a.g = !1;
        a.pause()
    };
    $.prototype.hb = function(a) {
        var b = F().g,
        c = U.N();
        b.fillStyle = "#786c90";
        b.fillRect(0, 0, 680, 225);
        var d = a % 39,
        e, f;
        ac(M, 20 > d ? 3 : 4, b, 20 > d ? d: d - 20, 216, 454, 10);
        d = 11;
        x(this.C.k, this.C.index, b, d, 10);
        for (var h = 0; h < this.s.length; ++h) {
            e = this.s[h];
            var k = e.yb;
            e = e.index;
            f = a % k.frames;
            var m = k.X[f][2];
            h <= c.A && ac(k.Pa, e, b, f, m, d, 10);
            d += m + 18
        }
        x(this.A.k, this.A.index, b, 200, 120);
        b.fillStyle = "rgba(0,0,0,0.5)";
        b.font = "bold 30px Arial";
        b.textAlign = "center";
        b.fillText(Dd(U.N()), 217, 195)
    };
    var Og = function() {
        vd.call(this)
    };
    t(Og, vd);
    Og.prototype.xa = function(a) {
        Og.D.xa.call(this, a);
        Pg($.N())
    };
    Og.prototype.ra = function(a) {
        Og.D.ra.call(this, a);
        Pg($.N())
    };
    var Qg = function(a) {
        vd.call(this);
        this.map = a;
        this.d = new ic;
        this.a = !1
    };
    t(Qg, vd);
    g = Qg.prototype;
    g.Jb = function() {
        Qg.D.Jb.call(this);
        D("g1", this.Tb, this)
    };
    g.Gb = function() {
        Qg.D.Gb.call(this);
        E("g1", this.Tb, this);
        this.a = !1
    };
    g.xa = function(a) {
        Qg.D.xa.call(this, a);
        switch (a.op) {
        case 1:
            C.a("j");
            break;
        case 3:
            C.a("l");
            break;
        case 4:
            C.a("m");
            break;
        case 2:
            C.a("k")
        }
        this.a = !1
    };
    g.Ya = function(a) {
        Qg.D.Ya.call(this, a);
        this.a = !0;
        pc(this.d, a.A, a.B);
        C.a("c1", null)
    };
    g.ob = function(a) {
        Qg.D.ob.call(this, a);
        this.a = !1;
        C.a("c1", null)
    };
    g.ra = function(a) {
        Qg.D.ra.call(this, a);
        this.a = !1;
        pc(this.d, a.A, a.B);
        var b, c = this;
        Rg(this.map,
        function(a) { (a.G || a.g) && A(c.d, a.d, !0) && (b = a.d.a)
        });
        b && C.a("n", b, this.map)
    };
    g.Tb = function(a) {
        if (this.a && (a.G || a.g) && A(this.d, a.d, !0)) {
            var b = a.d.g,
            c = F().g,
            d = b.x,
            b = b.y - 0;
            c.beginPath();
            c.moveTo(d, b);
            c.lineTo(d - 23, b + 11.5);
            c.lineTo(d, b + 23);
            c.lineTo(d + 23, b + 11.5);
            c.closePath();
            c.fillStyle = "rgba(255,255,192,0.35)";
            c.fill();
            c.strokeStyle = "#ff0";
            c.stroke();
            C.a("c1", a.d)
        }
    };
    var Sg = function() {
        this.a = [];
        D("i", this.g, this)
    };
    t(Sg, B);
    Sg.prototype.J = function() {
        E("i", this.g, this);
        Rg(this,
        function(a) {
            a.M()
        })
    };
    var Rg = function(a, b) {
        for (var c = 0; 20 > c; c++) for (var d = 0; 21 > d; d++) b(a.a[d][c])
    },
    X = function(a, b, c) {
        return 0 <= b && 0 <= c && c < a.a.length && b < a.a[c].length ? a.a[c][b] : null
    };
    Sg.prototype.g = function(a, b) {
        for (var c = 0,
        d; d = a[c++];) if (d = X(this, d.x, d.y)) d.G = b
    };
    var Tg = function(a, b, c, d) {
        this.x = a;
        this.y = b;
        this.z = c;
        this.dir = d;
        this.a = !1;
        D("o", this.g, this)
    };
    t(Tg, B);
    Tg.prototype.J = function() {
        E("o", this.g, this)
    };
    Tg.prototype.g = function(a) {
        1 == a.type && a.d.a.x == this.x && a.d.a.y == this.y && a.d.a.z == this.z && (this.a = !0)
    };
    var Ug = function() {
        this.ha = []
    };
    t(Ug, B);
    Ug.prototype.J = function() {
        for (var a = 0,
        b; b = this.ha[a++];) b.M()
    };
    var Vg = function(a, b, c, d, e, f, h) {
        this.T = a;
        this.Ia = b;
        this.ya = c;
        this.s = d;
        this.ma = e;
        this.B = f;
        this.wa = h;
        D("p", this.aa, this)
    };
    t(Vg, B);
    var Xg = function(a) {
        var b = null;
        a.T && (b = S(a.T), b.hidden = !0);
        var c = null;
        a.Ia && (c = S(a.Ia), c.hidden = !0);
        var d = jc(a.ya.x, a.ya.y, a.ya.z),
        e = a.ya.dir,
        f = jc(a.ma.x, a.ma.y, a.ma.z),
        h = a.ma.dir,
        k = null;
        a.wa && (k = jc(a.wa.x, a.wa.y, a.wa.z));
        var m = Vg;
        switch (a.type) {
        case 2:
            m = Wg
        }
        return new m(b, c, d, e, f, h, k)
    };
    Vg.prototype.J = function() {
        this.T && this.T.M();
        this.Ia && this.Ia.M();
        E("p", this.aa, this)
    };
    Vg.prototype.gb = function(a, b) {
        a.set(this.ma.a.x, this.ma.a.y, this.ma.a.z, this.B);
        if (null !== this.wa) {
            var c = X(b, this.wa.a.x, this.wa.a.y);
            null === c || oc(c.d, this.wa.a.z)
        }
        a.hidden = !1
    };
    Vg.prototype.aa = function(a, b) {
        if (1 == a.type && kc(a.d, this.ya) && a.direction == this.s) if (a.hidden = !0, null === this.T) this.gb(a, b);
        else {
            this.T.hidden = !1;
            var c = this;
            T(this.T,
            function() {
                c.gb(a, b);
                c.T.hidden = !0
            })
        }
    };
    var Wg = function(a, b, c, d, e, f, h) {
        Vg.call(this, a, b, c, d, e, f, h);
        this.g = this.A = !1;
        this.a = 0;
        D("Look for an egg on the 2nd level", this.Mb, this);
        D("o", this.aa, this)
    };
    t(Wg, Vg);
    g = Wg.prototype;
    g.J = function() {
        Wg.D.J.call(this);
        E("Look for an egg on the 2nd level", this.Mb, this);
        E("o", this.aa, this)
    };
    g.Mb = function() {
        this.A = !0;
        Gd(4)
    };
    g.yc = function(a, b) {
        this.T.offset.x -= 7;
        680 > this.T.offset.x && 480 < this.T.offset.x && 0 == this.T.offset.x % 2 && this.T.offset.y++;
        530 > this.T.offset.x && 0 == this.a ? (this.a = this.T.state = 1, a()) : -20 > this.T.offset.x && 1 == this.a ? (this.T.state = 0, this.a = 2, this.Ia.hidden = !1, T(this.Ia, b)) : -143 > this.T.offset.x && (this.T.g = p, this.T.hidden = !0)
    };
    g.gb = function(a, b) {
        Wg.D.gb.call(this, a, b);
        this.Ia.hidden = !0;
        var c = X(b, 17, 6);
        c.G = !0;
        oc(c.d, 0);
        X(b, 16, 5).G = !0
    };
    g.xc = function(a) {
        a.hidden = !0
    };
    g.aa = function(a, b) {
        if (1 == a.type && this.A && kc(a.d, this.ya) && a.direction == this.s && !this.g) {
            this.g = !0;
            this.T.hidden = !1;
            Gd(5);
            W(Fe);
            X(b, 17, 6).G = !1;
            X(b, 16, 5).G = !1;
            var c = s(this.xc, this, a),
            d = s(this.gb, this, a, b),
            c = s(this.yc, this, c, d);
            Fc(this.T, c)
        }
    };
    var Yg = function() {
        var a = new Sg;
        V.call(this, new Qg(a));
        this.a = new Ef(this, 0);
        this.map = a;
        this.Ea = [];
        this.Da = this.oa = this.V = this.L = this.F = null;
        this.C = 1;
        this.Fa = [];
        this.nb = [];
        this.Aa = [];
        this.qa = !1;
        this.lb = "bass-loop";
        this.ha = null;
        this.A = !1;
        Sd(this, "k1",
        function() {
            this.Ha && Ve(this.lb)
        })
    };
    t(Yg, V);
    Yg.prototype.J = function() {
        Yg.D.J.call(this);
        this.map && this.map.M();
        for (var a = 0,
        b; b = this.Ea[a++];) b.M();
        this.F && this.F.M();
        this.V && this.V.M();
        this.oa && this.oa.M();
        this.Da && this.Da.M();
        for (a = 0; b = this.Fa[a++];) b.M();
        for (a = 0; b = this.nb[a++];) b.M();
        for (a = 0; b = this.Aa[a++];) b.M();
        this.ha && this.ha.M();
        E("c1", this.Kb, this)
    };
    Yg.prototype.init = function(a, b, c, d) {
        var e = U.N(),
        f = this.map,
        h = a.map,
        k = a.eb;
        f.a = [];
        for (var m = 0,
        n; n = h[m]; ++m) {
            for (var r = [], u = 0; u < n.length; ++u) r.push(new bg(u, m, k[m][u], Boolean(n[u])));
            f.a.push(r)
        }
        this.background = a.background || null;
        f = a.Ea;
        h = [];
        for (k = 0; m = f[k++];) h.push(S(m));
        this.Ea = h;
        this.qa = a.qa;
        this.L = c;
        f = a.F;
        c = c[e.a];
        m = jc(f.x, f.y, f.z || 0);
        e = S(d.left, m);
        e.hidden = !0;
        h = S(d.right, m);
        h.hidden = !0;
        k = S(d.kc, m);
        k.hidden = !0;
        d = S(d.lc, m);
        d.hidden = !0;
        d = new cg(f.x, f.y, f.z || 0, f.dir, e, h, k, d);
        d.init(c);
        this.F = d;
        this.V = S(a.V);
        this.V.w.y = 2;
        this.oa = S(a.oa);
        a.Da && (this.Da = S(a.Da), this.C = 2);
        d = a.Fa || [];
        c = [];
        for (e = 0; f = d[e++];) {
            h = S(f.v);
            m = k = null;
            f.R ? (k = S(f.R), k.g = p, m = new y(f.R.H.x, f.R.H.y)) : f.v.H && (m = new y(f.v.H.x, f.v.H.y));
            n = new y(1, 1);
            f.v.size && (n.x = f.v.size.x, n.y = f.v.size.y);
            r = [];
            if (f.v && f.v.G) for (var u = 0,
            N = void 0; N = f.v.G[u++];) r.push(new y(N.x, N.y));
            u = void 0;
            switch (f.P.type) {
            case 0:
                u = Lf;
                break;
            case 1:
                u = Mf;
                break;
            case 2:
                u = Rf;
                break;
            case 3:
                u = Nf;
                break;
            case 4:
                u = Ff;
                break;
            case 5:
                u = Hf;
                break;
            case 6:
                u = Gf;
                break;
            case 7:
                u = If;
                break;
            case 8:
                u = Jf;
                break;
            case 9:
                u = Kf;
                break;
            case 10:
                u = Sf;
                break;
            case 14:
                u = Tf;
                break;
            case 11:
                u = Uf;
                break;
            case 12:
                u = Vf;
                break;
            case 13:
                u = Xf;
                break;
            case 15:
                u = Yf;
                break;
            case 16:
                u = $f;
                break;
            case 17:
                u = ag
            }
            h = new u(h, k, f.P.state || 0, f.P.speed || 0, 1E3 * f.P.pause || 0, f.P.I || 0, f.P.end || 0, n, m, r, f.Va || null);
            h.label = f.label || null;
            h.init();
            f = h;
            f.R && (X(this.map, f.R.d.a.x, f.R.d.a.y).g = !0);
            c.push(f)
        }
        this.Fa = c;
        d = a.nb || [];
        c = [];
        for (e = 0; f = d[e++];) c.push(Xg(f));
        this.nb = c;
        d = a.Aa;
        c = a.gc || 0;
        e = [];
        for (f = 0; h = d[f++];) k = q(h.Ga) ? h.Ga: c,
        e.push(Bf(h, b[k], k));
        this.Aa = e;
        b = a.ha;
        d = new Ug;
        for (c = 0; e = b[c++];) e = new Tg(e.x, e.y, e.z || 0, e.dir),
        d.ha.push(e);
        this.ha = d;
        this.lb = a.cb || "bass-loop";
        this.a.a[0] = this.ga;
        this.a.a[1] = this.Q;
        this.a.a[2] = this.hc;
        this.a.a[4] = this.ic;
        this.a.a[3] = this.jc;
        D("c1", this.Kb, this)
    };
    Yg.prototype.s = function(a) {
        for (var b = 0,
        c; c = this.Aa[b++];) c.C = a
    };
    Yg.prototype.ga = function() {
        var a = this;
        this.F.hidden = !0;
        this.a.g && (W(Ge), Ve(this.lb), Ic(this.V,
        function() {
            a.F.$.hidden = !1;
            T(a.F.$,
            function() {
                a.F.$.hidden = !0;
                a.qa && (a.F.S.hidden = !1, T(a.F.S));
                a.s.call(a, !0);
                a.a.set(1)
            },
            void 0,
            function(b) {
                15 < b && (a.F.hidden = !1)
            })
        }))
    };
    var Zg = function(a, b) {
        A(a.F.d, b.d) && !b.hidden && (b.hidden = !0, C.a("y"), W(Ce), a.C--, Gd(3))
    };
    Yg.prototype.Q = function(a) {
        this.a.g && Cc(U.N().s);
        var b = this.map;
        Rg(b,
        function(c) {
            C.a("x", c, a, b)
        });
        C.a("w", b, a);
        Zg(this, this.oa);
        this.Da && Zg(this, this.Da);
        0 == this.C && (this.A = !0);
        if (this.A) {
            var c = X(b, this.V.d.a.x, this.V.d.a.y);
            c.G = !0;
            c.a = !0
        }
        if (this.F.A) return this.s(!1),
        2;
        if (this.A && mf(this.F, this.V)) return W(He),
        this.s(!1),
        4
    };
    var $g = function(a) {
        if (a.qa) {
            a.F.S.hidden = !1;
            var b = a.F.S,
            c = a.F.g;
            Jc(a.F.S,
            function() {
                b.hidden = !0;
                c.hidden = !0
            })
        }
    };
    g = Yg.prototype;
    g.ic = function() {
        var a = this;
        this.a.g && (be(de, this.lb), U.N().s.pause(), $g(this), this.F.Z.hidden = !1, T(this.F.Z,
        function() {
            a.F.Z.hidden = !0;
            a.V.state = 3;
            T(a.V,
            function() {
                a.V.hidden = !0;
                a.Ha = !1
            })
        },
        void 0,
        function(b) {
            3 < b && (a.F.hidden = !0)
        }), C.a("z"), Gd(6))
    };
    g.hc = function() {
        if (this.a.g) {
            this.F.hidden = !0;
            $g(this);
            var a = fg(this.F);
            z(a.d, this.F.d.a.x, this.F.d.a.y, this.F.d.a.z);
            a.hidden = !1;
            var b = this;
            T(a,
            function() {
                a.hidden = !0;
                b.F.hidden = !1;
                var c;
                i: {
                    var d = b.ha;
                    c = d.ha.length - 1;
                    for (var e; e = d.ha[c--];) if (e.a) {
                        c = e;
                        break i
                    }
                    c = null
                }
                d = b.F;
                null === c ? d.set(d.s.x, d.s.y, d.s.z, d.s.direction) : d.set(c.x, c.y, c.z, c.dir);
                b.a.set(3)
            })
        }
    };
    g.jc = function() {
        var a = U.N();
        if (this.a.g) {
            this.F.hidden = !0;
            this.F.A = !1;
            W(Ie);
            Cd(a);
            eg(this.F, this.L[a.a]);
            var b = gg(this.F);
            z(b.d, this.F.d.a.x, this.F.d.a.y, this.F.d.a.z);
            b.hidden = !1;
            var c = this;
            T(b,
            function() {
                b.hidden = !0;
                c.F.hidden = !1;
                c.s(!0);
                c.qa && (c.F.S.hidden = !1, T(c.F.S));
                c.a.set(1)
            })
        }
    };
    g.ib = function(a) {
        this.a.s(a)
    };
    g.Kb = function(a) {
        if (1 == this.V.state || 2 == this.V.state) null != a && A(a, this.V.d) ? (this.V.state = 2, this.V.w.y = 5) : (this.V.state = 1, this.V.w.y = 2)
    };
    g.hb = function(a) {
        F().g.clearRect(0, 0, 680, 225);
        this.background && x(this.background.k, this.background.pb, F().g, 0, 0);
        Rg(this.map,
        function(b) {
            C.a("d1", b, a)
        });
        Rg(this.map,
        function(b) {
            C.a("e1", b, a);
            C.a("g1", b, a);
            C.a("f1", b, a);
            C.a("h1", b, a);
            C.a("i1", b, a)
        });
        C.a("j1", this, a)
    };
    var ah = function() {
        this.s = new wg(18E4, this.Bc, this.Cc);
        this.g = []
    };
    t(ah, B);
    g = ah.prototype;
    g.init = function(a) {
        vc.N().init(a);
        U.N().init(pf);
        $.N().init(qf);
        D("a", this.s.W, this.s);
        D("l1", this.Zb, this);
        this.Zb();
        Se(a);
        sg()
    };
    g.Zb = function() {
        Bd(U.N());
        var a = this;
        bh(this, new Ye,
        function() {
            Zb(M,
            function() {
                bh(a, Kg.N(),
                function() {
                    Zb(L,
                    function() {
                        ch(a, 0)
                    })
                })
            })
        });
        this.g = [];
        for (var b = 0; 5 > b; ++b) this.g.push(new Yg)
    };
    g.Bc = function() {
        var a = kg.N();
        a.L = !0;
        a.a = 0;
        a.s = 0;
        C.a("g")
    };
    g.Cc = function() {
        sg();
        C.a("h")
    };
    g.J = function() {
        this.a && this.a.M();
        tg(kg.N());
        Bd(U.N());
        var a = vc.N();
        a.a && (uc(a.a), a.a = null);
        a = $.N();
        a.g();
        Ac(a.a);
        if (de) {
            var a = de,
            b;
            for (b in a.a) be(a, b);
            ge(he);
            de.M();
            he.M()
        }
        se && se.parentNode && se.parentNode.removeChild(se);
        E("h", Oe);
        E("g", Qe);
        this.s.M()
    };
    var bh = function(a, b, c) {
        a.a && a.a.M();
        a.a = b;
        a.a.B();
        pg(kg.N(),
        function(a) {
            b.ib(a);
            b.hb(a);
            return b.Ha
        },
        c)
    },
    ch = function(a, b) {
        5 <= b ? bh(a, new Ig, p) : (a.g[b].init(yf[b], vf, uf, wf), 4 == b ? bh(a, a.g[b],
        function() {
            ch(a, b + 1)
        }) : bh(a, a.g[b],
        function() {
            bh(a, $.N(),
            function() {
                ch(a, b + 1)
            })
        }), Zb(zc[b + 1]), Te(b + 1));
        U.N().A = b;
        Gd(2)
    };
    var Xe = function() {
        return document.getElementById("hplogo")
    };
    var dh = null; (function(a, b, c) {
        var d = function() {
            a();
            window.lol && window.lol()
        },
        e = function() {
            ig(d, b, c);
            hg(d, b);
            d()
        };
        google && google.x ? google.x({
            id: "DOODLE"
        },
        e) : e()
    })(function() {
        if (dh = Xe()) qe() && !re() ? (dh.onclick = Tb, v(dh, "cursor", "pointer", "background", "url(/logos/doodles/2013/doctor-whos-50th-anniversary-6317003539218432-hp.gif)")) : (ec = new ah, Zb(w,
        function() {
            Zb(xc,
            function() {
                dh && ec.init(dh)
            })
        }))
    },
    function() {
        ec && ec.M();
        dh = null
    });
})();