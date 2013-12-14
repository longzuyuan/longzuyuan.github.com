(function() {
    function g(a) {
        throw a;
    }
    var i = void 0,
    j = !0,
    k = null,
    o = !1,
    p, r = this,
    aa = function() {},
    ba = function(a) {
        a.ta = function() {
            return a.Oc || (a.Oc = new a)
        }
    },
    ca = function(a) {
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
    t = function(a) {
        return "array" == ca(a)
    },
    da = function(a) {
        var b = ca(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    },
    u = function(a) {
        return "string" == typeof a
    },
    ea = function(a) {
        return "function" == ca(a)
    },
    fa = function(a) {
        a = ca(a);
        return "object" == a || "array" == a || "function" == a
    },
    ia = function(a) {
        return a[ga] || (a[ga] = ++ha)
    },
    ga = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
    ha = 0,
    ja = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    },
    ka = function(a, b, c) {
        a || g(Error());
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
    v = function(a, b, c) {
        v = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja: ka;
        return v.apply(k, arguments)
    },
    la = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = Array.prototype.slice.call(arguments);
            b.unshift.apply(b, c);
            return a.apply(this, b)
        }
    },
    ma = Date.now ||
    function() {
        return + new Date
    },
    w = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.g = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    Function.prototype.bind = Function.prototype.bind ||
    function(a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return v.apply(k, c)
        }
        return v(this, a)
    };
    var na = function(a) {
        this.stack = Error().stack || "";
        if (a) this.message = "" + a
    };
    w(na, Error);
    na.prototype.name = "CustomError";
    var oa = function(a, b) {
        for (var c = 1; c < arguments.length; c++) var d = ("" + arguments[c]).replace(/\$/g, "$$$$"),
        a = a.replace(/\%s/, d);
        return a
    },
    ua = function(a) {
        if (!pa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(qa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(ra, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(sa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ta, "&quot;"));
        return a
    },
    qa = /&/g,
    ra = /</g,
    sa = />/g,
    ta = /\"/g,
    pa = /[&<>\"]/,
    va = {},
    wa = function(a) {
        return va[a] || (va[a] = ("" + a).replace(/\-([a-z])/g,
        function(a, c) {
            return c.toUpperCase()
        }))
    };
    var za = function(a, b) {
        b.unshift(a);
        na.call(this, oa.apply(k, b));
        b.shift();
        this.$c = a
    };
    w(za, na);
    za.prototype.name = "AssertionError";
    var x = function(a, b, c) {
        if (!a) {
            var d = Array.prototype.slice.call(arguments, 2),
            e = "Assertion failed";
            if (b) var e = e + (": " + b),
            f = d;
            g(new za("" + e, f || []))
        }
    };
    var y = Array.prototype,
    Aa = y.indexOf ?
    function(a, b, c) {
        x(a.length != k);
        return y.indexOf.call(a, b, c)
    }: function(a, b, c) {
        c = c == k ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (u(a)) return ! u(b) || 1 != b.length ? -1 : a.indexOf(b, c);
        for (; c < a.length; c++) if (c in a && a[c] === b) return c;
        return - 1
    },
    z = y.forEach ?
    function(a, b, c) {
        x(a.length != k);
        y.forEach.call(a, b, c)
    }: function(a, b, c) {
        for (var d = a.length,
        e = u(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    Ba = y.map ?
    function(a, b, c) {
        x(a.length != k);
        return y.map.call(a, b, c)
    }: function(a, b, c) {
        for (var d = a.length,
        e = Array(d), f = u(a) ? a.split("") : a, h = 0; h < d; h++) h in f && (e[h] = b.call(c, f[h], h, a));
        return e
    },
    Ca = y.every ?
    function(a, b, c) {
        x(a.length != k);
        return y.every.call(a, b, c)
    }: function(a, b, c) {
        for (var d = a.length,
        e = u(a) ? a.split("") : a, f = 0; f < d; f++) if (f in e && !b.call(c, e[f], f, a)) return o;
        return j
    },
    Da = function(a, b) {
        return 0 <= Aa(a, b)
    },
    Ea = function(a, b) {
        var c = Aa(a, b);
        0 <= c && (x(a.length != k), y.splice.call(a, c, 1))
    },
    Fa = function(a) {
        return y.concat.apply(y, arguments)
    },
    Ga = function(a) {
        if (t(a)) return Fa(a);
        for (var b = [], c = 0, d = a.length; c < d; c++) b[c] = a[c];
        return b
    },
    Ia = function(a, b, c, d) {
        x(a.length != k);
        y.splice.apply(a, Ha(arguments, 1))
    },
    Ha = function(a, b, c) {
        x(a.length != k);
        return 2 >= arguments.length ? y.slice.call(a, b) : y.slice.call(a, b, c)
    },
    Ja = function() {
        var a = [0, 1, 2, 1, 0, 3, 4, 5, 4],
        b = -2;
        x(a.length != k);
        a.length && (b %= a.length, 0 < b ? y.unshift.apply(a, a.splice( - b, b)) : 0 > b && y.push.apply(a, a.splice(0, -b)));
        return a
    };
    var Ka, La = function(a) {
        return (a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
    },
    Ma = function(a, b) {
        var c = La(a),
        d = Ha(arguments, 1),
        e;
        e = c;
        for (var f = 0,
        h = 0; h < d.length; h++) Da(e, d[h]) || (e.push(d[h]), f++);
        e = f == d.length;
        a.className = c.join(" ");
        return e
    },
    Na = function(a, b) {
        var c = La(a),
        d = Ha(arguments, 1),
        e;
        e = c;
        for (var f = 0,
        h = 0; h < e.length; h++) Da(d, e[h]) && (Ia(e, h--, 1), f++);
        e = f == d.length;
        a.className = c.join(" ");
        return e
    };
    var Oa = function(a, b) {
        this.x = a !== i ? a: 0;
        this.y = b !== i ? b: 0
    };
    Oa.prototype.Tb = function() {
        return new Oa(this.x, this.y)
    };
    Oa.prototype.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    };
    var A = function(a, b) {
        this.width = a;
        this.height = b
    };
    A.prototype.Tb = function() {
        return new A(this.width, this.height)
    };
    A.prototype.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    A.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    A.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Pa = function(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    },
    Qa = function(a) {
        for (var b in a) return o;
        return j
    },
    Ra = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
    Sa = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Ra.length; f++) c = Ra[f],
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Ta, Ua, Va, Wa, Xa, Ya, Za, $a = function() {
        return r.navigator ? r.navigator.userAgent: k
    },
    ab = function() {
        return r.navigator
    };
    Xa = Wa = Va = Ua = Ta = o;
    var bb;
    if (bb = $a()) {
        var cb = ab();
        Ta = 0 == bb.indexOf("Opera");
        Ua = !Ta && -1 != bb.indexOf("MSIE");
        Wa = (Va = !Ta && -1 != bb.indexOf("WebKit")) && -1 != bb.indexOf("Mobile");
        Xa = !Ta && !Va && "Gecko" == cb.product
    }
    var db = Ta,
    B = Ua,
    eb = Xa,
    C = Va,
    fb = Wa,
    gb = ab(),
    hb = gb && gb.platform || "";
    Ya = -1 != hb.indexOf("Mac");
    Za = -1 != hb.indexOf("Win");
    var ib = !!ab() && -1 != (ab().appVersion || "").indexOf("X11"),
    jb;
    a: {
        var kb = "",
        lb;
        if (db && r.opera) var mb = r.opera.version,
        kb = "function" == typeof mb ? mb() : mb;
        else if (eb ? lb = /rv\:([^\);]+)(\)|;)/: B ? lb = /MSIE\s+([^\);]+)(\)|;)/: C && (lb = /WebKit\/(\S+)/), lb) var nb = lb.exec($a()),
        kb = nb ? nb[1] : "";
        if (B) {
            var ob, pb = r.document;
            ob = pb ? pb.documentMode: i;
            if (ob > parseFloat(kb)) {
                jb = "" + ob;
                break a
            }
        }
        jb = kb
    }
    var qb = jb,
    rb = {},
    D = function(a) {
        var b;
        if (! (b = rb[a])) {
            b = 0;
            for (var c = ("" + qb).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var h = c[f] || "",
                l = d[f] || "",
                m = RegExp("(\\d*)(\\D*)", "g"),
                n = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var s = m.exec(h) || ["", "", ""], q = n.exec(l) || ["", "", ""];
                    if (0 == s[0].length && 0 == q[0].length) break;
                    b = ((0 == s[1].length ? 0 : parseInt(s[1], 10)) < (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? -1 : (0 == s[1].length ? 0 : parseInt(s[1], 10)) > (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? 1 : 0) || ((0 == s[2].length) < (0 == q[2].length) ? -1 : (0 == s[2].length) > (0 == q[2].length) ? 1 : 0) || (s[2] < q[2] ? -1 : s[2] > q[2] ? 1 : 0)
                } while ( 0 == b )
            }
            b = rb[a] = 0 <= b
        }
        return b
    },
    sb = {},
    tb = function() {
        return sb[9] || (sb[9] = B && document.documentMode && 9 <= document.documentMode)
    };
    var ub = !B || tb(); ! eb && !B || B && tb() || eb && D("1.9.1");
    var vb = B && !D("9");
    var xb = function(a) {
        return a ? new wb(9 == a.nodeType ? a: a.ownerDocument || a.document) : Ka || (Ka = new wb)
    },
    yb = function(a, b) {
        var c = b && "*" != b ? b.toUpperCase() : "";
        return a.querySelectorAll && a.querySelector && (!C || "CSS1Compat" == document.compatMode || D("528")) && c ? a.querySelectorAll(c + "") : a.getElementsByTagName(c || "*")
    },
    Ab = function(a, b) {
        Pa(b,
        function(b, d) {
            "style" == d ? a.style.cssText = b: "class" == d ? a.className = b: "for" == d ? a.htmlFor = b: d in zb ? a.setAttribute(zb[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    },
    zb = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        height: "height",
        width: "width",
        usemap: "useMap",
        frameborder: "frameBorder",
        maxlength: "maxLength",
        type: "type"
    },
    Bb = function(a) {
        var b = a.document;
        if (C && !D("500") && !fb) {
            "undefined" == typeof a.innerHeight && (a = window);
            var b = a.innerHeight,
            c = a.document.documentElement.scrollHeight;
            a == a.top && c < b && (b -= 15);
            return new A(a.innerWidth, b)
        }
        a = "CSS1Compat" == b.compatMode ? b.documentElement: b.body;
        return new A(a.clientWidth, a.clientHeight)
    },
    E = function(a, b, c) {
        return Cb(document, arguments)
    },
    Cb = function(a, b) {
        var c = b[0],
        d = b[1];
        if (!ub && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', ua(d.name), '"');
            if (d.type) {
                c.push(' type="', ua(d.type), '"');
                var e = {};
                Sa(e, d);
                d = e;
                delete d.type
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        if (d) u(d) ? c.className = d: t(d) ? Ma.apply(k, [c].concat(d)) : Ab(c, d);
        2 < b.length && Db(a, c, b);
        return c
    },
    Db = function(a, b, c) {
        function d(c) {
            c && b.appendChild(u(c) ? a.createTextNode(c) : c)
        }
        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            if (da(f) && !(fa(f) && 0 < f.nodeType)) {
                var h;
                a: {
                    if (f && "number" == typeof f.length) {
                        if (fa(f)) {
                            h = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if (ea(f)) {
                            h = "function" == typeof f.item;
                            break a
                        }
                    }
                    h = o
                }
                z(h ? Ga(f) : f, d)
            } else d(f)
        }
    },
    Eb = function(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    },
    Fb = function(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    },
    Gb = function(a, b) {
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    },
    Hb = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    },
    Ib = {
        IMG: " ",
        BR: "\n"
    },
    Jb = function(a) {
        var b = a.getAttributeNode("tabindex");
        return b && b.specified ? (a = a.tabIndex, "number" == typeof a && 0 <= a && 32768 > a) : o
    },
    Lb = function(a) {
        var b = [];
        Kb(a, b, o);
        return b.join("")
    },
    Kb = function(a, b, c) {
        if (! (a.nodeName in Hb)) if (3 == a.nodeType) c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in Ib) b.push(Ib[a.nodeName]);
        else for (a = a.firstChild; a;) Kb(a, b, c),
        a = a.nextSibling
    },
    wb = function(a) {
        this.z = a || r.document || document
    };
    p = wb.prototype;
    p.ra = xb;
    p.i = function(a) {
        return u(a) ? this.z.getElementById(a) : a
    };
    p.m = function(a, b, c) {
        return Cb(this.z, arguments)
    };
    p.createElement = function(a) {
        return this.z.createElement(a)
    };
    p.createTextNode = function(a) {
        return this.z.createTextNode(a)
    };
    p.appendChild = function(a, b) {
        a.appendChild(b)
    };
    p.contains = Gb;
    var Mb = function(a) {
        Mb[" "](a);
        return a
    };
    Mb[" "] = aa;
    var Nb = !B || tb(),
    Ob = !B || tb(),
    Pb = B && !D("8"); ! C || D("528");
    eb && D("1.9b") || B && D("8") || db && D("9.5") || C && D("528"); ! eb || D("8");
    var Qb = function() {};
    Qb.prototype.Oa = o;
    Qb.prototype.L = function() {
        if (!this.Oa) this.Oa = j,
        this.h()
    };
    Qb.prototype.h = function() {
        this.Rc && Rb.apply(k, this.Rc)
    };
    var G = function(a) {
        a && "function" == typeof a.L && a.L()
    },
    Rb = function(a) {
        for (var b = 0,
        c = arguments.length; b < c; ++b) {
            var d = arguments[b];
            da(d) ? Rb.apply(k, d) : G(d)
        }
    };
    var H = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b
    };
    w(H, Qb);
    p = H.prototype;
    p.h = function() {
        delete this.type;
        delete this.target;
        delete this.currentTarget
    };
    p.Y = o;
    p.ua = j;
    p.stopPropagation = function() {
        this.Y = j
    };
    p.preventDefault = function() {
        this.ua = o
    };
    var I = function(a, b) {
        a && this.init(a, b)
    };
    w(I, H);
    var Sb = [1, 4, 2];
    p = I.prototype;
    p.target = k;
    p.relatedTarget = k;
    p.offsetX = 0;
    p.offsetY = 0;
    p.clientX = 0;
    p.clientY = 0;
    p.screenX = 0;
    p.screenY = 0;
    p.button = 0;
    p.keyCode = 0;
    p.charCode = 0;
    p.ctrlKey = o;
    p.altKey = o;
    p.shiftKey = o;
    p.metaKey = o;
    p.hb = o;
    p.N = k;
    p.init = function(a, b) {
        var c = this.type = a.type;
        H.call(this, c);
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (eb) {
                var e;
                a: {
                    try {
                        Mb(d.nodeName);
                        e = j;
                        break a
                    } catch(f) {}
                    e = o
                }
                e || (d = k)
            }
        } else if ("mouseover" == c) d = a.fromElement;
        else if ("mouseout" == c) d = a.toElement;
        this.relatedTarget = d;
        this.offsetX = C || a.offsetX !== i ? a.offsetX: a.layerX;
        this.offsetY = C || a.offsetY !== i ? a.offsetY: a.layerY;
        this.clientX = a.clientX !== i ? a.clientX: a.pageX;
        this.clientY = a.clientY !== i ? a.clientY: a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode: 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.hb = Ya ? a.metaKey: a.ctrlKey;
        this.state = a.state;
        this.N = a;
        delete this.ua;
        delete this.Y
    };
    var Tb = function(a) {
        return Nb ? 0 == a.N.button: "click" == a.type ? j: !!(a.N.button & Sb[0])
    };
    I.prototype.stopPropagation = function() {
        I.g.stopPropagation.call(this);
        this.N.stopPropagation ? this.N.stopPropagation() : this.N.cancelBubble = j
    };
    I.prototype.preventDefault = function() {
        I.g.preventDefault.call(this);
        var a = this.N;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = o, Pb) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch(b) {}
    };
    I.prototype.h = function() {
        I.g.h.call(this);
        this.relatedTarget = this.currentTarget = this.target = this.N = k
    };
    var Ub = function() {},
    Vb = 0;
    p = Ub.prototype;
    p.key = 0;
    p.X = o;
    p.kb = o;
    p.init = function(a, b, c, d, e, f) {
        ea(a) ? this.Ob = j: a && a.handleEvent && ea(a.handleEvent) ? this.Ob = o: g(Error("Invalid listener argument"));
        this.fa = a;
        this.zb = b;
        this.src = c;
        this.type = d;
        this.capture = !!e;
        this.La = f;
        this.kb = o;
        this.key = ++Vb;
        this.X = o
    };
    p.handleEvent = function(a) {
        return this.Ob ? this.fa.call(this.La || this.src, a) : this.fa.handleEvent.call(this.fa, a)
    };
    var Wb = {},
    K = {},
    $b = {},
    ac = {},
    bc = function(a, b, c, d, e) {
        if (b) {
            if (t(b)) {
                for (var f = 0; f < b.length; f++) bc(a, b[f], c, d, e);
                return k
            }
            var d = !!d,
            h = K;
            b in h || (h[b] = {
                I: 0,
                G: 0
            });
            h = h[b];
            d in h || (h[d] = {
                I: 0,
                G: 0
            },
            h.I++);
            var h = h[d],
            l = ia(a),
            m;
            h.G++;
            if (h[l]) {
                m = h[l];
                for (f = 0; f < m.length; f++) if (h = m[f], h.fa == c && h.La == e) {
                    if (h.X) break;
                    return m[f].key
                }
            } else m = h[l] = [],
            h.I++;
            f = cc();
            f.src = a;
            h = new Ub;
            h.init(c, f, a, b, d, e);
            c = h.key;
            f.key = c;
            m.push(h);
            Wb[c] = h;
            $b[l] || ($b[l] = []);
            $b[l].push(h);
            a.addEventListener ? (a == r || !a.Ab) && a.addEventListener(b, f, d) : a.attachEvent(b in ac ? ac[b] : ac[b] = "on" + b, f);
            return c
        }
        g(Error("Invalid event type"))
    },
    cc = function() {
        var a = dc,
        b = Ob ?
        function(c) {
            return a.call(b.src, b.key, c)
        }: function(c) {
            c = a.call(b.src, b.key, c);
            if (!c) return c
        };
        return b
    },
    ec = function(a, b, c, d, e) {
        if (t(b)) {
            for (var f = 0; f < b.length; f++) ec(a, b[f], c, d, e);
            return k
        }
        a = bc(a, b, c, d, e);
        Wb[a].kb = j;
        return a
    },
    fc = function(a, b, c, d, e) {
        if (t(b)) for (var f = 0; f < b.length; f++) fc(a, b[f], c, d, e);
        else if (d = !!d, a = gc(a, b, d)) for (f = 0; f < a.length; f++) if (a[f].fa == c && a[f].capture == d && a[f].La == e) {
            L(a[f].key);
            break
        }
    },
    L = function(a) {
        if (!Wb[a]) return o;
        var b = Wb[a];
        if (b.X) return o;
        var c = b.src,
        d = b.type,
        e = b.zb,
        f = b.capture;
        c.removeEventListener ? (c == r || !c.Ab) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in ac ? ac[d] : ac[d] = "on" + d, e);
        c = ia(c);
        e = K[d][f][c];
        if ($b[c]) {
            var h = $b[c];
            Ea(h, b);
            0 == h.length && delete $b[c]
        }
        b.X = j;
        e.Kb = j;
        hc(d, f, c, e);
        delete Wb[a];
        return j
    },
    hc = function(a, b, c, d) {
        if (!d.Qa && d.Kb) {
            for (var e = 0,
            f = 0; e < d.length; e++) d[e].X ? d[e].zb.src = k: (e != f && (d[f] = d[e]), f++);
            d.length = f;
            d.Kb = o;
            0 == f && (delete K[a][b][c], K[a][b].I--, 0 == K[a][b].I && (delete K[a][b], K[a].I--), 0 == K[a].I && delete K[a])
        }
    },
    ic = function(a) {
        var b, c = 0,
        d = b == k;
        b = !!b;
        if (a == k) Pa($b,
        function(a) {
            for (var e = a.length - 1; 0 <= e; e--) {
                var f = a[e];
                if (d || b == f.capture) L(f.key),
                c++
            }
        });
        else if (a = ia(a), $b[a]) for (var a = $b[a], e = a.length - 1; 0 <= e; e--) {
            var f = a[e];
            if (d || b == f.capture) L(f.key),
            c++
        }
    },
    gc = function(a, b, c) {
        var d = K;
        return b in d && (d = d[b], c in d && (d = d[c], a = ia(a), d[a])) ? d[a] : k
    },
    kc = function(a, b, c, d, e) {
        var f = 1,
        b = ia(b);
        if (a[b]) {
            a.G--;
            a = a[b];
            a.Qa ? a.Qa++:a.Qa = 1;
            try {
                for (var h = a.length,
                l = 0; l < h; l++) {
                    var m = a[l];
                    m && !m.X && (f &= jc(m, e) !== o)
                }
            } finally {
                a.Qa--,
                hc(c, d, b, a)
            }
        }
        return Boolean(f)
    },
    jc = function(a, b) {
        var c = a.handleEvent(b);
        a.kb && L(a.key);
        return c
    },
    dc = function(a, b) {
        if (!Wb[a]) return j;
        var c = Wb[a],
        d = c.type,
        e = K;
        if (! (d in e)) return j;
        var e = e[d],
        f,
        h;
        if (!Ob) {
            var l;
            if (! (l = b)) a: {
                l = "window.event".split(".");
                for (var m = r; f = l.shift();) if (m[f] != k) m = m[f];
                else {
                    l = k;
                    break a
                }
                l = m
            }
            f = l;
            l = j in e;
            m = o in e;
            if (l) {
                if (0 > f.keyCode || f.returnValue != i) return j;
                a: {
                    var n = o;
                    if (0 == f.keyCode) try {
                        f.keyCode = -1;
                        break a
                    } catch(s) {
                        n = j
                    }
                    if (n || f.returnValue == i) f.returnValue = j
                }
            }
            n = new I;
            n.init(f, this);
            f = j;
            try {
                if (l) {
                    for (var q = [], F = n.currentTarget; F; F = F.parentNode) q.push(F);
                    h = e[j];
                    h.G = h.I;
                    for (var J = q.length - 1; ! n.Y && 0 <= J && h.G; J--) n.currentTarget = q[J],
                    f &= kc(h, q[J], d, j, n);
                    if (m) {
                        h = e[o];
                        h.G = h.I;
                        for (J = 0; ! n.Y && J < q.length && h.G; J++) n.currentTarget = q[J],
                        f &= kc(h, q[J], d, o, n)
                    }
                } else f = jc(c, n)
            } finally {
                if (q) q.length = 0;
                n.L()
            }
            return f
        }
        d = new I(b, this);
        try {
            f = jc(c, d)
        } finally {
            d.L()
        }
        return f
    };
    var M = function() {};
    w(M, Qb);
    p = M.prototype;
    p.Ab = j;
    p.Ga = k;
    p.cb = function(a) {
        this.Ga = a
    };
    p.addEventListener = function(a, b, c, d) {
        bc(this, a, b, c, d)
    };
    p.removeEventListener = function(a, b, c, d) {
        fc(this, a, b, c, d)
    };
    p.dispatchEvent = function(a) {
        var b = a.type || a,
        c = K;
        if (b in c) {
            if (u(a)) a = new H(a, this);
            else if (a instanceof H) a.target = a.target || this;
            else {
                var d = a,
                a = new H(b, this);
                Sa(a, d)
            }
            var d = 1,
            e, c = c[b],
            b = j in c,
            f;
            if (b) {
                e = [];
                for (f = this; f; f = f.Ga) e.push(f);
                f = c[j];
                f.G = f.I;
                for (var h = e.length - 1; ! a.Y && 0 <= h && f.G; h--) a.currentTarget = e[h],
                d &= kc(f, e[h], a.type, j, a) && a.ua != o
            }
            if (o in c) if (f = c[o], f.G = f.I, b) for (h = 0; ! a.Y && h < e.length && f.G; h++) a.currentTarget = e[h],
            d &= kc(f, e[h], a.type, o, a) && a.ua != o;
            else for (e = this; ! a.Y && e && f.G; e = e.Ga) a.currentTarget = e,
            d &= kc(f, e, a.type, o, a) && a.ua != o;
            a = Boolean(d)
        } else a = j;
        return a
    };
    p.h = function() {
        M.g.h.call(this);
        ic(this);
        this.Ga = k
    };
    var lc = function(a) {
        this.W = a || window;
        this.Ia = bc(this.W, "resize", this.Ac, o, this);
        this.O = Bb(this.W || window);
        if (C && Za || db && this.W.self != this.W.top) this.Ja = window.setInterval(v(this.Nb, this), 500)
    };
    w(lc, M);
    p = lc.prototype;
    p.Ia = k;
    p.W = k;
    p.O = k;
    p.Ja = k;
    p.h = function() {
        lc.g.h.call(this);
        if (this.Ia) L(this.Ia),
        this.Ia = k;
        if (this.Ja) window.clearInterval(this.Ja),
        this.Ja = k;
        this.O = this.W = k
    };
    p.Ac = function() {
        this.Nb()
    };
    p.Nb = function() {
        var a = Bb(this.W || window);
        if (! (a == this.O || (!a || !this.O ? 0 : a.width == this.O.width && a.height == this.O.height))) this.O = a,
        this.dispatchEvent("resize")
    };
    var N = function(a) {
        this.D = a;
        this.va = []
    };
    w(N, Qb);
    var mc = [];
    N.prototype.listen = function(a, b, c, d, e) {
        t(b) || (mc[0] = b, b = mc);
        for (var f = 0; f < b.length; f++) this.va.push(bc(a, b[f], c || this, d || o, e || this.D || this));
        return this
    };
    var nc = function(a, b, c, d, e, f) {
        if (t(c)) for (var h = 0; h < c.length; h++) nc(a, b, c[h], d, e, f);
        else a.va.push(ec(b, c, d || a, e, f || a.D || a))
    };
    N.prototype.unlisten = function(a, b, c, d, e) {
        if (t(b)) for (var f = 0; f < b.length; f++) this.unlisten(a, b[f], c, d, e);
        else {
            a: {
                c = c || this;
                e = e || this.D || this;
                d = !!d;
                if (a = gc(a, b, d)) for (b = 0; b < a.length; b++) if (!a[b].X && a[b].fa == c && a[b].capture == d && a[b].La == e) {
                    a = a[b];
                    break a
                }
                a = k
            }
            if (a) a = a.key,
            L(a),
            Ea(this.va, a)
        }
        return this
    };
    var oc = function(a) {
        z(a.va, L);
        a.va.length = 0
    };
    N.prototype.h = function() {
        N.g.h.call(this);
        oc(this)
    };
    N.prototype.handleEvent = function() {
        g(Error("EventHandler.handleEvent not implemented"))
    };
    var pc = function(a) {
        this.ea = {};
        this.D = new N(this);
        this.s = a
    };
    w(pc, M);
    var qc = function(a, b) {
        var c = u("holiday11-animation-sprite.png") ? "holiday11-animation-sprite.png": "holiday11-animation-sprite.png".src;
        c && (a.ea[b] = c)
    };
    pc.prototype.start = function() {
        Pa(this.ea, this.Nc, this)
    };
    pc.prototype.Nc = function(a, b) {
        var c;
        c = this.s ? xb(this.s).m("img") : new Image;
        this.D.listen(c, [B ? "readystatechange": "load", "abort", "error"], this.uc);
        c.id = b;
        c.src = a
    };
    pc.prototype.uc = function(a) {
        var b = a.currentTarget;
        if (b) {
            if ("readystatechange" == a.type) if ("complete" == b.readyState) a.type = "load";
            else return;
            if ("undefined" == typeof b.naturalWidth)"load" == a.type ? (b.naturalWidth = b.width, b.naturalHeight = b.height) : (b.naturalWidth = 0, b.naturalHeight = 0);
            this.dispatchEvent({
                type: a.type,
                target: b
            });
            if (!this.Oa) a = this.ea,
            b = b.id,
            b in a && delete a[b],
            Qa(this.ea) && (this.dispatchEvent("complete"), this.D && oc(this.D))
        }
    };
    pc.prototype.h = function() {
        this.ea && delete this.ea;
        if (this.D) this.D.L(),
        this.D = k;
        pc.g.h.call(this)
    };
    var O = function(a, b, c) {
        u(b) ? rc(a, c, b) : Pa(b, la(rc, a))
    },
    rc = function(a, b, c) {
        a.style[wa(c)] = b
    },
    tc = function(a, b, c) {
        var d, e = eb && (Ya || ib) && D("1.9");
        b instanceof Oa ? (d = b.x, b = b.y) : (d = b, b = c);
        a.style.left = sc(d, e);
        a.style.top = sc(b, e)
    },
    uc = function(a, b, c) {
        b instanceof A ? (c = b.height, b = b.width) : c == i && g(Error("missing height argument"));
        a.style.width = sc(b, j);
        a.style.height = sc(c, j)
    },
    sc = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    },
    vc = function(a, b) {
        var c = a.style;
        if ("opacity" in c) c.opacity = b;
        else if ("MozOpacity" in c) c.MozOpacity = b;
        else if ("filter" in c) c.filter = "" === b ? "": "alpha(opacity=" + 100 * b + ")"
    },
    P = function(a, b) {
        a.style.display = b ? "": "none"
    },
    xc = function(a) {
        var b = xb(i),
        c = k;
        if (B) c = b.z.createStyleSheet(),
        wc(c, a);
        else {
            var d = yb(b.z, "head")[0];
            d || (c = yb(b.z, "body")[0], d = b.m("head"), c.parentNode.insertBefore(d, c));
            c = b.m("style");
            wc(c, a);
            b.appendChild(d, c)
        }
        return c
    },
    wc = function(a, b) {
        B ? a.cssText = b: a[C ? "innerText": "innerHTML"] = b
    },
    yc = eb ? "MozUserSelect": C ? "WebkitUserSelect": k;
    var zc = r.window,
    Q = function(a, b, c) {
        ea(a) ? c && (a = v(a, c)) : a && "function" == typeof a.handleEvent ? a = v(a.handleEvent, a) : g(Error("Invalid listener argument"));
        return 2147483647 < b ? -1 : zc.setTimeout(a, b || 0)
    };
    var Ac = function() {};
    ba(Ac);
    Ac.prototype.Kc = 0;
    Ac.ta();
    var R = function(a) {
        this.Q = a || xb();
        this.la = Bc
    };
    w(R, M);
    R.prototype.Jc = Ac.ta();
    var Bc = k,
    Cc = function(a, b) {
        switch (a) {
        case 1:
            return b ? "disable": "enable";
        case 2:
            return b ? "highlight": "unhighlight";
        case 4:
            return b ? "activate": "deactivate";
        case 8:
            return b ? "select": "unselect";
        case 16:
            return b ? "check": "uncheck";
        case 32:
            return b ? "focus": "blur";
        case 64:
            return b ? "open": "close"
        }
        g(Error("Invalid component state"))
    };
    p = R.prototype;
    p.ga = k;
    p.n = o;
    p.a = k;
    p.la = k;
    p.Ub = k;
    p.s = k;
    p.w = k;
    p.C = k;
    p.Vb = o;
    var Dc = function(a) {
        return a.ga || (a.ga = ":" + (a.Jc.Kc++).toString(36))
    };
    R.prototype.i = function() {
        return this.a
    };
    var Ec = function(a) {
        return a.ba || (a.ba = new N(a))
    },
    Fc = function(a, b) {
        a == b && g(Error("Unable to set parent component"));
        b && a.s && a.ga && a.s.C && a.ga && a.ga in a.s.C && a.s.C[a.ga] && a.s != b && g(Error("Unable to set parent component"));
        a.s = b;
        R.g.cb.call(a, b)
    };
    p = R.prototype;
    p.getParent = function() {
        return this.s
    };
    p.cb = function(a) {
        this.s && this.s != a && g(Error("Method not supported"));
        R.g.cb.call(this, a)
    };
    p.ra = function() {
        return this.Q
    };
    p.m = function() {
        this.a = this.Q.createElement("div")
    };
    p.Za = function(a) {
        Gc(this, a)
    };
    var Gc = function(a, b, c) {
        a.n && g(Error("Component already rendered"));
        a.a || a.m();
        b ? b.insertBefore(a.a, c || k) : a.Q.z.body.appendChild(a.a); (!a.s || a.s.n) && a.$()
    };
    p = R.prototype;
    p.$ = function() {
        this.n = j;
        Hc(this,
        function(a) { ! a.n && a.i() && a.$()
        })
    };
    p.ja = function() {
        Hc(this,
        function(a) {
            a.n && a.ja()
        });
        this.ba && oc(this.ba);
        this.n = o
    };
    p.h = function() {
        R.g.h.call(this);
        this.n && this.ja();
        this.ba && (this.ba.L(), delete this.ba);
        Hc(this,
        function(a) {
            a.L()
        }); ! this.Vb && this.a && Fb(this.a);
        this.s = this.Ub = this.a = this.C = this.w = k
    };
    p.da = function() {
        return this.a
    };
    p.ca = function(a) {
        this.n && g(Error("Component already rendered"));
        this.la = a
    };
    var Hc = function(a, b) {
        a.w && z(a.w, b, i)
    };
    R.prototype.removeChild = function(a, b) {
        if (a) {
            var c = u(a) ? a: Dc(a),
            a = this.C && c ? (c in this.C ? this.C[c] : i) || k: k;
            if (c && a) {
                var d = this.C;
                c in d && delete d[c];
                Ea(this.w, a);
                b && (a.ja(), a.a && Fb(a.a));
                Fc(a, k)
            }
        }
        a || g(Error("Child is not in parent component"));
        return a
    };
    var Ic = function(a, b, c, d) {
        this.yc = a;
        this.Mb = b;
        this.Lb = c;
        this.jb = this.Xc = 0;
        this.db = d;
        this.ib = o
    };
    w(Ic, Qb);
    Ic.prototype.start = function() {
        this.ib = o;
        this.Pb()
    };
    Ic.prototype.stop = function() {
        this.ib = j
    };
    Ic.prototype.h = function() {
        this.stop();
        zc.clearTimeout(this.cc);
        Ic.g.h.call(this)
    };
    Ic.prototype.Pb = function() {
        if (!this.ib) {
            var a = this.Mb + this.Lb * this.jb,
            b = this.yc();
            b > a && this.db(this.jb++);
            a = Math.max(this.Mb + this.Lb * this.jb - b, 0);
            this.cc = Q(this.Pb, a, this)
        }
    };
    var Jc = function(a, b, c, d, e, f) {
        this.Z = a;
        this.sb = b;
        this.tb = c;
        this.qc = d;
        this.tc = e;
        this.xc = f
    };
    w(Jc, M);
    Jc.prototype.start = function() {
        this.tb.play();
        Q(this.Qc, 2100, this)
    };
    Jc.prototype.Qc = function() {
        var a = this.sb,
        b = v(a.Lc, a),
        b = new Ic(b, 49, 132, v(this.Mc, this));
        b.start();
        a.play();
        this.lc = b
    };
    Jc.prototype.Mc = function(a) {
        if (130 < a) this.dispatchEvent("end");
        else {
            var b = a % 8,
            c = this.Z[1],
            d = this.Z[2],
            e = this.Z[3],
            f = this.Z[4],
            h = this.Z[5];
            Kc(this.Z[0], [4, 0, 1, 2, 3, 2, 1, 0][b]);
            var l = [2, 1, 0, 3, 4, 3, 0, 1];
            Kc(c, l[b]);
            Kc(d, l[b]);
            Kc(e, l[b]);
            Kc(h, l[b]);
            c = Ja();
            Kc(f, c[b]);
            z(this.Z,
            function(a) {
                a.o(j)
            });
            b = Math.floor(a / 4) % 6;
            for (f = 0; 6 > f; f++) this.qc[f].R(b == f);
            6 == a % 8 && this.tc[Math.round(a / 8) % 8].play();
            0 < a && 0 == a % 60 && Lc(this)
        }
    };
    var Lc = function(a) {
        function b(a, b, e) {
            z(a,
            function(a) {
                x(e > b);
                Q(v(a.o, a, j), b);
                Q(v(a.o, a, o), e)
            })
        }
        a = a.xc;
        b([a[4], a[5]], 0, 500);
        b([a[2], a[3]], 50, 400);
        b([a[0], a[1]], 100, 300)
    };
    Jc.prototype.h = function() {
        G(this.lc);
        G(this.sb);
        G(this.tb);
        Jc.g.h.call(this)
    };
    var S, Mc, Nc, Oc, T, Pc, Qc, Rc = {},
    Sc = function(a, b, c) {
        var d;
        if (S) try {
            Rc[b] = {
                volume: c,
                Yc: 0,
                Zc: a,
                nb: 0
            },
            Mc && window.setTimeout(function() {
                Nc.playTrack(a, b, c, 0, 0, o)
            },
            d || 0)
        } catch(e) {
            S = o
        }
    },
    Uc = function() {
        Pc && (Tc("hplogo-sound-player") || Tc("hplogo-sound-player-2"))
    },
    Tc = function(a) {
        return (a = Pc.getElementById(a)) && a.playTrack ? (Nc = a, S = j) : o
    },
    Vc = function(a) {
        a = a.match(/[\d]+/g);
        a.length = 3;
        return a.join(".")
    },
    Wc = function() {
        var a = o,
        b = "";
        if (navigator.plugins && navigator.plugins.length) {
            var c = navigator.plugins["Shockwave Flash"];
            c && (a = j, c.description && (b = Vc(c.description)));
            navigator.plugins["Shockwave Flash 2.0"] && (a = j, b = "2.0.0.11")
        } else if (navigator.mimeTypes && navigator.mimeTypes.length)(a = (c = navigator.mimeTypes["application/x-shockwave-flash"]) && c.enabledPlugin) && (b = Vc(c.enabledPlugin.description));
        else try {
            c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
            a = j,
            b = Vc(c.GetVariable("$version"))
        } catch(d) {
            try {
                c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
                a = j,
                b = "6.0.21"
            } catch(e) {
                try {
                    c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                    a = j,
                    b = Vc(c.GetVariable("$version"))
                } catch(f) {}
            }
        }
        Oc = a;
        Qc = b
    },
    Xc = function() {
        for (var a = 0,
        b = ("" + Qc).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), c = "9.0.0.0".replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = Math.max(b.length, c.length), e = 0; 0 == a && e < d; e++) {
            var f = b[e] || "",
            h = c[e] || "",
            l = RegExp("(\\d*)(\\D*)", "g"),
            m = RegExp("(\\d*)(\\D*)", "g");
            do {
                var n = l.exec(f) || ["", "", ""], s = m.exec(h) || ["", "", ""];
                if (0 == n[0].length && 0 == s[0].length) break;
                a = ((0 == n[1].length ? 0 : parseInt(n[1], 10)) < (0 == s[1].length ? 0 : parseInt(s[1], 10)) ? -1 : (0 == n[1].length ? 0 : parseInt(n[1], 10)) > (0 == s[1].length ? 0 : parseInt(s[1], 10)) ? 1 : 0) || ((0 == n[2].length) < (0 == s[2].length) ? -1 : (0 == n[2].length) > (0 == s[2].length) ? 1 : 0) || (n[2] < s[2] ? -1 : n[2] > s[2] ? 1 : 0)
            } while ( 0 == a )
        }
        return 0 <= a
    };
    var Yc = {},
    Zc = k,
    $c = function(a) {
        a = ia(a);
        delete Yc[a];
        Qa(Yc) && Zc && (zc.clearTimeout(Zc), Zc = k)
    },
    bd = function() {
        Zc || (Zc = Q(function() {
            Zc = k;
            ad()
        },
        20))
    },
    ad = function() {
        var a = ma();
        Pa(Yc,
        function(b) {
            cd(b, a)
        });
        Qa(Yc) || bd()
    };
    var dd = function() {
        this.p = 0;
        this.ub = this.startTime = k
    };
    w(dd, M);
    dd.prototype.Ka = function() {
        this.K("begin")
    };
    dd.prototype.pa = function() {
        this.K("end")
    };
    dd.prototype.K = function(a) {
        this.dispatchEvent(a)
    };
    var ed = function(a, b, c, d) {
        dd.call(this); (!t(a) || !t(b)) && g(Error("Start and end parameters must be arrays"));
        a.length != b.length && g(Error("Start and end points must be the same length"));
        this.sa = a;
        this.Ic = b;
        this.duration = c;
        this.Rb = d;
        this.coords = []
    };
    w(ed, dd);
    p = ed.prototype;
    p.xb = 0;
    p.F = 0;
    p.Xa = k;
    p.play = function(a) {
        if (a || 0 == this.p) this.F = 0,
        this.coords = this.sa;
        else if (1 == this.p) return o;
        $c(this);
        this.startTime = a = ma(); - 1 == this.p && (this.startTime -= this.duration * this.F);
        this.ub = this.startTime + this.duration;
        this.Xa = this.startTime;
        this.F || this.Ka();
        this.K("play"); - 1 == this.p && this.K("resume");
        this.p = 1;
        var b = ia(this);
        b in Yc || (Yc[b] = this);
        bd();
        cd(this, a);
        return j
    };
    p.stop = function(a) {
        $c(this);
        this.p = 0;
        if (a) this.F = 1;
        fd(this, this.F);
        this.K("stop");
        this.pa()
    };
    p.pause = function() {
        if (1 == this.p) $c(this),
        this.p = -1,
        this.K("pause")
    };
    p.h = function() {
        0 == this.p || this.stop(o);
        this.K("destroy");
        ed.g.h.call(this)
    };
    var cd = function(a, b) {
        a.F = (b - a.startTime) / (a.ub - a.startTime);
        if (1 <= a.F) a.F = 1;
        a.xb = 1E3 / (b - a.Xa);
        a.Xa = b;
        fd(a, a.F);
        1 == a.F ? (a.p = 0, $c(a), a.K("finish"), a.pa()) : 1 == a.p && a.Ha()
    },
    fd = function(a, b) {
        ea(a.Rb) && (b = a.Rb(b));
        a.coords = Array(a.sa.length);
        for (var c = 0; c < a.sa.length; c++) a.coords[c] = (a.Ic[c] - a.sa[c]) * b + a.sa[c]
    };
    ed.prototype.Ha = function() {
        this.K("animate")
    };
    ed.prototype.K = function(a) {
        this.dispatchEvent(new gd(a, this))
    };
    var gd = function(a, b) {
        H.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.Wc = b.coords[2];
        this.duration = b.duration;
        this.F = b.F;
        this.Vc = b.xb;
        this.state = b.p;
        this.Uc = b
    };
    w(gd, H);
    var hd = function(a, b, c) {
        this.a = a;
        this.eb = b;
        this.Bb = a = "number" == typeof c ? c: 1;
        ed.call(this, [b ? 0 : a], [b ? a: 0], 200)
    };
    w(hd, ed);
    hd.prototype.Ka = function() {
        P(this.a, j);
        vc(this.a, this.eb ? 0 : this.Bb)
    };
    hd.prototype.Ha = function() {
        vc(this.a, this.coords[0])
    };
    hd.prototype.pa = function() {
        P(this.a, this.eb);
        vc(this.a, this.eb ? this.Bb: 0)
    };
    var id = function(a, b, c, d, e) {
        this.ma = a;
        this.Ea = b;
        this.oa = c;
        this.nc = d;
        this.vb = e;
        this.wb = new N(this);
        x(document.body);
        this.yb = 0;
        z(this.oa,
        function(a) {
            this.wb.listen(a, "action", this.rc)
        },
        this);
        z(this.ma,
        function(a) {
            a.o(j)
        });
        z(this.Ea,
        function(a) {
            a.o(o)
        })
    };
    w(id, M);
    id.prototype.rc = function() {
        if (!this.vc) {
            var a = jd(this),
            b = a > this.yb;
            this.yb = a;
            window.google && window.google.log && window.google.log("holiday11-hp", "c" + a);
            0 < a ? this.dispatchEvent("interaction") : this.dispatchEvent("interactionend");
            b && this.dispatchEvent({
                type: "button",
                Wb: a
            });
            b = this.oa;
            x(this.ma.length == this.Ea.length);
            for (var c = 0; c < this.ma.length; c++) {
                var d = U(b[c], 16);
                this.ma[c].o(!d, j);
                this.Ea[c].o(d, j)
            }
            if (! (a < this.oa.length)) this.vc = j,
            Q(this.wc, 900, this)
        }
    };
    var jd = function(a) {
        var b = 0;
        z(a.oa,
        function(a) {
            U(a, 16) && (kd(a), ++b)
        });
        return b
    };
    id.prototype.wc = function() {
        this.dispatchEvent("start");
        Q(this.Sc, 500, this)
    };
    id.prototype.Sc = function() {
        z(this.oa,
        function(a) {
            kd(a)
        });
        z(this.ma,
        function(a) {
            a.o(o)
        });
        z(this.Ea,
        function(a) {
            P(a.a, j);
            P(a.ac, j);
            vc(a.Fa, 1); ! B || D("9") ? (P(a.V, j), vc(a.V, 1), (new hd(a.V, o)).play()) : P(a.V, o)
        });
        Q(this.dc, 300, this)
    };
    id.prototype.dc = function() {
        var a = this.nc.i();
        x(a); (new hd(a, j, 0.5)).play();
        this.vb.start();
        this.wb.listen(this.vb, "end",
        function() {
            this.dispatchEvent("end")
        })
    };
    var V = function(a, b, c) {
        this.Cc = a;
        this.Bc = b;
        this.D = c;
        this.db = v(this.Fc, this)
    };
    w(V, Qb);
    V.prototype.Ra = o;
    V.prototype.lb = 0;
    V.prototype.ha = k;
    var md = function(a) { ! a.ha && !a.lb ? ld(a) : a.Ra = j
    };
    V.prototype.stop = function() {
        if (this.ha) zc.clearTimeout(this.ha),
        this.ha = k,
        this.Ra = o
    };
    V.prototype.pause = function() {
        this.lb++
    };
    V.prototype.h = function() {
        V.g.h.call(this);
        this.stop()
    };
    V.prototype.Fc = function() {
        this.ha = k;
        if (this.Ra && !this.lb) this.Ra = o,
        ld(this)
    };
    var ld = function(a) {
        a.ha = Q(a.db, a.Bc);
        a.Cc.call(a.D)
    };
    var qd = function(a) {
        var a = 1E3 / (a || 30),
        b = v(this.Hc, this);
        this.$a = new V(b, a);
        this.fb = ma();
        this.Qb = 0
    };
    w(qd, M);
    qd.prototype.start = function() {
        md(this.$a)
    };
    qd.prototype.Hc = function() {
        this.Qb++;
        this.dispatchEvent("pulse");
        md(this.$a)
    };
    qd.prototype.h = function() {
        qd.g.h.call(this);
        G(this.$a)
    };
    var rd = function(a) {
        this.Jb = a;
        this.Ib = 0;
        Kc(this, 0)
    };
    rd.prototype.o = function(a) {
        this.H = a;
        sd(this)
    };
    var Kc = function(a, b) {
        a.Ib = b;
        sd(a)
    },
    sd = function(a) {
        for (var b = 0; b < a.Jb.length; b++) {
            var c = a.Jb[b];
            a.Ib == b ? c.o(a.H) : c.o(o)
        }
    };
    var td = function(a) {
        return function() {
            return a
        }
    };
    var vd = function(a, b, c, d, e) {
        if (!B && (!C || !D("525"))) return j;
        if (Ya && e) return ud(a);
        if (e && !d) return o;
        if (!c && (17 == b || 18 == b)) return o;
        if (B && d && b == a) return o;
        switch (a) {
        case 13:
            return ! (B && tb());
        case 27:
            return ! C
        }
        return ud(a)
    },
    ud = function(a) {
        if (48 <= a && 57 >= a) return j;
        if (96 <= a && 106 >= a) return j;
        if (65 <= a && 90 >= a) return j;
        if (C && 0 == a) return j;
        switch (a) {
        case 32:
        case 63:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return j;
        default:
            return o
        }
    };
    var wd = function() {},
    xd;
    ba(wd);
    p = wd.prototype;
    p.Da = function() {};
    p.m = function(a) {
        var b = a.ra().m("div", yd(this, a).join(" "), a.ka);
        this.gb(a, b);
        return b
    };
    p.da = function(a) {
        return a
    };
    p.qa = function(a, b, c) {
        if (a = a.i ? a.i() : a) if (B && !D("7")) {
            var d = zd(La(a), b);
            d.push(b);
            la(c ? Ma: Na, a).apply(k, d)
        } else c ? Ma(a, b) : Na(a, b)
    };
    p.rb = function(a) {
        if (a.la == k) {
            var b;
            a: {
                b = a.n ? a.a: a.Q.z.body;
                var c = 9 == b.nodeType ? b: b.ownerDocument || b.document;
                if (c.defaultView && c.defaultView.getComputedStyle && (b = c.defaultView.getComputedStyle(b, k))) {
                    b = b.direction || b.getPropertyValue("direction");
                    break a
                }
                b = ""
            }
            a.la = "rtl" == (b || ((a.n ? a.a: a.Q.z.body).currentStyle ? (a.n ? a.a: a.Q.z.body).currentStyle.direction: k) || (a.n ? a.a: a.Q.z.body).style && (a.n ? a.a: a.Q.z.body).style.direction)
        }
        a.la && this.ca(a.i(), j);
        a.isEnabled() && this.ia(a, a.H)
    };
    p.gb = function(a, b) {
        x(a);
        x(b);
        a.isEnabled() || this.B(b, 1, j);
        U(a, 8) && this.B(b, 8, j);
        a.v & 16 && this.B(b, 16, U(a, 16));
        a.v & 64 && this.B(b, 64, U(a, 64))
    };
    p.za = function(a, b) {
        var c = !b,
        d = B || db ? a.getElementsByTagName("*") : k;
        if (yc) {
            if (c = c ? "none": "", a.style[yc] = c, d) for (var e = 0,
            f; f = d[e]; e++) f.style[yc] = c
        } else if (B || db) if (c = c ? "on": "", a.setAttribute("unselectable", c), d) for (e = 0; f = d[e]; e++) f.setAttribute("unselectable", c)
    };
    p.ca = function(a, b) {
        this.qa(a, this.P() + "-rtl", b)
    };
    p.Cb = function(a) {
        var b;
        return a.v & 32 && (b = a.U()) ? Jb(b) : o
    };
    p.ia = function(a, b) {
        var c;
        if (a.v & 32 && (c = a.U())) {
            if (!b && U(a, 32)) {
                try {
                    c.blur()
                } catch(d) {}
                U(a, 32) && a.qb()
            }
            if (Jb(c) != b) b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex"))
        }
    };
    p.o = function(a, b) {
        P(a, b)
    };
    p.A = function(a, b, c) {
        var d = a.i();
        if (d) {
            var e = Ad(this, b);
            e && this.qa(a, e, c);
            this.B(d, b, c)
        }
    };
    p.B = function(a, b, c) {
        xd || (xd = {
            1 : "disabled",
            8 : "selected",
            16 : "checked",
            64 : "expanded"
        }); (b = xd[b]) && a.setAttribute("aria-" + b, c)
    };
    p.U = function(a) {
        return a.i()
    };
    p.P = function() {
        return "goog-control"
    };
    var yd = function(a, b) {
        var c = a.P(),
        d = [c],
        e = a.P();
        e != c && d.push(e);
        c = b.p;
        for (e = []; c;) {
            var f = c & -c;
            e.push(Ad(a, f));
            c &= ~f
        }
        d.push.apply(d, e); (c = b.J) && d.push.apply(d, c);
        B && !D("7") && d.push.apply(d, zd(d));
        return d
    },
    zd = function(a, b) {
        var c = [];
        b && (a = a.concat([b]));
        z([],
        function(d) {
            Ca(d, la(Da, a)) && (!b || Da(d, b)) && c.push(d.join("_"))
        });
        return c
    },
    Ad = function(a, b) {
        if (!a.Sb) {
            var c = a.P();
            a.Sb = {
                1 : c + "-disabled",
                2 : c + "-hover",
                4 : c + "-active",
                8 : c + "-selected",
                16 : c + "-checked",
                32 : c + "-focused",
                64 : c + "-open"
            }
        }
        return a.Sb[b]
    };
    var Bd = function() {};
    w(Bd, wd);
    ba(Bd);
    p = Bd.prototype;
    p.Da = function() {
        return "button"
    };
    p.B = function(a, b, c) {
        16 == b ? a.setAttribute("aria-pressed", c) : Bd.g.B.call(this, a, b, c)
    };
    p.m = function(a) {
        var b = Bd.g.m.call(this, a),
        c = a.Aa();
        c && this.Va(b, c); (c = a.Ca()) && this.Ba(b, c);
        a.v & 16 && this.B(b, 16, U(a, 16));
        return b
    };
    p.Ca = aa;
    p.Ba = aa;
    p.Aa = function(a) {
        return a.title
    };
    p.Va = function(a, b) {
        if (a) a.title = b || ""
    };
    p.P = function() {
        return "goog-button"
    };
    var W = function(a, b) {
        a && Cd(this, a, b)
    };
    w(W, M);
    p = W.prototype;
    p.a = k;
    p.Ma = k;
    p.bb = k;
    p.Na = k;
    p.T = -1;
    p.S = -1;
    var Dd = {
        3 : 13,
        12 : 144,
        63232 : 38,
        63233 : 40,
        63234 : 37,
        63235 : 39,
        63236 : 112,
        63237 : 113,
        63238 : 114,
        63239 : 115,
        63240 : 116,
        63241 : 117,
        63242 : 118,
        63243 : 119,
        63244 : 120,
        63245 : 121,
        63246 : 122,
        63247 : 123,
        63248 : 44,
        63272 : 46,
        63273 : 36,
        63275 : 35,
        63276 : 33,
        63277 : 34,
        63289 : 144,
        63302 : 45
    },
    Ed = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    },
    Fd = {
        61 : 187,
        59 : 186
    },
    Gd = B || C && D("525");
    W.prototype.oc = function(a) {
        if (C && (17 == this.T && !a.ctrlKey || 18 == this.T && !a.altKey)) this.S = this.T = -1;
        Gd && !vd(a.keyCode, this.T, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.S = eb && a.keyCode in Fd ? Fd[a.keyCode] : a.keyCode
    };
    W.prototype.pc = function() {
        this.S = this.T = -1
    };
    W.prototype.handleEvent = function(a) {
        var b = a.N,
        c, d;
        B && "keypress" == a.type ? (c = this.S, d = 13 != c && 27 != c ? b.keyCode: 0) : C && "keypress" == a.type ? (c = this.S, d = 0 <= b.charCode && 63232 > b.charCode && ud(c) ? b.charCode: 0) : db ? (c = this.S, d = ud(c) ? b.keyCode: 0) : (c = b.keyCode || this.S, d = b.charCode || 0, Ya && 63 == d && !c && (c = 191));
        var e = c,
        f = b.keyIdentifier;
        c ? 63232 <= c && c in Dd ? e = Dd[c] : 25 == c && a.shiftKey && (e = 9) : f && f in Ed && (e = Ed[f]);
        a = e == this.T;
        this.T = e;
        b = new Hd(e, d, a, b);
        try {
            this.dispatchEvent(b)
        } finally {
            b.L()
        }
    };
    W.prototype.i = function() {
        return this.a
    };
    var Cd = function(a, b, c) {
        a.Na && a.detach();
        a.a = b;
        a.Ma = bc(a.a, "keypress", a, c);
        a.bb = bc(a.a, "keydown", a.oc, c, a);
        a.Na = bc(a.a, "keyup", a.pc, c, a)
    };
    W.prototype.detach = function() {
        if (this.Ma) L(this.Ma),
        L(this.bb),
        L(this.Na),
        this.Na = this.bb = this.Ma = k;
        this.a = k;
        this.S = this.T = -1
    };
    W.prototype.h = function() {
        W.g.h.call(this);
        this.detach()
    };
    var Hd = function(a, b, c, d) {
        d && this.init(d, i);
        this.type = "key";
        this.keyCode = a;
        this.charCode = b;
        this.repeat = c
    };
    w(Hd, I);
    var Id = function(a, b) {
        a || g(Error("Invalid class name " + a));
        ea(b) || g(Error("Invalid decorator function " + b))
    },
    Jd = {};
    var X = function(a, b, c) {
        R.call(this, c);
        if (!b) {
            for (var b = this.constructor,
            d; b;) {
                d = ia(b);
                if (d = Jd[d]) break;
                b = b.g ? b.g.constructor: k
            }
            b = d ? ea(d.ta) ? d.ta() : new d: k
        }
        this.k = b;
        this.ka = a
    };
    w(X, R);
    p = X.prototype;
    p.ka = k;
    p.p = 0;
    p.v = 39;
    p.Ya = 255;
    p.Gc = 0;
    p.H = j;
    p.J = k;
    p.Ua = j;
    p.Ta = o;
    p.Xb = k;
    p.U = function() {
        return this.k.U(this)
    };
    p.qa = function(a, b) {
        if (b) {
            if (a) this.J ? Da(this.J, a) || this.J.push(a) : this.J = [a],
            this.k.qa(this, a, j)
        } else if (a && this.J) {
            Ea(this.J, a);
            if (0 == this.J.length) this.J = k;
            this.k.qa(this, a, o)
        }
    };
    p.m = function() {
        var a = this.k.m(this);
        this.a = a;
        var b = this.Xb || this.k.Da();
        if (b) a.setAttribute("role", b),
        a.Tc = b;
        this.Ta || this.k.za(a, o);
        this.H || this.k.o(a, o)
    };
    p.da = function() {
        return this.k.da(this.i())
    };
    p.$ = function() {
        X.g.$.call(this);
        this.k.rb(this);
        if (this.v & -2 && (this.Ua && Kd(this, j), this.v & 32)) {
            var a = this.U();
            if (a) {
                var b = this.aa || (this.aa = new W);
                Cd(b, a);
                Ec(this).listen(b, "key", this.Zb).listen(a, "focus", this.Yb).listen(a, "blur", this.qb)
            }
        }
    };
    var Kd = function(a, b) {
        var c = Ec(a),
        d = a.i();
        b ? (c.listen(d, "mouseover", a.Gb).listen(d, "mousedown", a.Eb).listen(d, "mouseup", a.Hb).listen(d, "mouseout", a.Fb), B && c.listen(d, "dblclick", a.Db)) : (c.unlisten(d, "mouseover", a.Gb).unlisten(d, "mousedown", a.Eb).unlisten(d, "mouseup", a.Hb).unlisten(d, "mouseout", a.Fb), B && c.unlisten(d, "dblclick", a.Db))
    };
    X.prototype.ja = function() {
        X.g.ja.call(this);
        this.aa && this.aa.detach();
        this.H && this.isEnabled() && this.k.ia(this, o)
    };
    X.prototype.h = function() {
        X.g.h.call(this);
        this.aa && (this.aa.L(), delete this.aa);
        delete this.k;
        this.J = this.ka = k
    };
    var Ld = function(a) {
        a = a.ka;
        if (!a) return "";
        if (!u(a)) if (t(a)) a = Ba(a, Lb).join("");
        else {
            if (vb && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
            else {
                var b = [];
                Kb(a, b, j);
                a = b.join("")
            }
            a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
            a = a.replace(/\u200B/g, "");
            vb || (a = a.replace(/ +/g, " "));
            " " != a && (a = a.replace(/^\s*/, ""))
        }
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    };
    X.prototype.ca = function(a) {
        X.g.ca.call(this, a);
        var b = this.i();
        b && this.k.ca(b, a)
    };
    X.prototype.za = function(a) {
        this.Ta = a;
        var b = this.i();
        b && this.k.za(b, a)
    };
    X.prototype.o = function(a, b) {
        if (b || this.H != a && this.dispatchEvent(a ? "show": "hide")) {
            var c = this.i();
            c && this.k.o(c, a);
            this.isEnabled() && this.k.ia(this, a);
            this.H = a;
            return j
        }
        return o
    };
    X.prototype.isEnabled = function() {
        return ! U(this, 1)
    };
    var kd = function(a) {
        var b = a.getParent();
        if ((!b || "function" != typeof b.isEnabled || b.isEnabled()) && Md(a, 1, j)) a.setActive(o),
        a.R(o),
        a.H && a.k.ia(a, o),
        a.A(1, j)
    };
    X.prototype.R = function(a) {
        Md(this, 2, a) && this.A(2, a)
    };
    X.prototype.setActive = function(a) {
        Md(this, 4, a) && this.A(4, a)
    };
    var U = function(a, b) {
        return !! (a.p & b)
    };
    X.prototype.A = function(a, b) {
        if (this.v & a && b != U(this, a)) this.k.A(this, a, b),
        this.p = b ? this.p | a: this.p & ~a
    };
    var Nd = function(a, b, c) {
        a.n && U(a, b) && !c && g(Error("Component already rendered")); ! c && U(a, b) && a.A(b, o);
        a.v = c ? a.v | b: a.v & ~b
    },
    Y = function(a, b) {
        return !! (a.Ya & b) && !!(a.v & b)
    },
    Md = function(a, b, c) {
        return !! (a.v & b) && U(a, b) != c && (!(a.Gc & b) || a.dispatchEvent(Cc(b, c))) && !a.Oa
    };
    p = X.prototype;
    p.Gb = function(a) { (!a.relatedTarget || !Gb(this.i(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && Y(this, 2) && this.R(j)
    };
    p.Fb = function(a) {
        if ((!a.relatedTarget || !Gb(this.i(), a.relatedTarget)) && this.dispatchEvent("leave")) Y(this, 4) && this.setActive(o),
        Y(this, 2) && this.R(o)
    };
    p.Eb = function(a) {
        if (this.isEnabled() && (Y(this, 2) && this.R(j), Tb(a) && (!C || !Ya || !a.ctrlKey))) Y(this, 4) && this.setActive(j),
        this.k.Cb(this) && this.U().focus(); ! this.Ta && Tb(a) && (!C || !Ya || !a.ctrlKey) && a.preventDefault()
    };
    p.Hb = function(a) {
        this.isEnabled() && (Y(this, 2) && this.R(j), U(this, 4) && this.wa(a) && Y(this, 4) && this.setActive(o))
    };
    p.Db = function(a) {
        this.isEnabled() && this.wa(a)
    };
    p.wa = function(a) {
        if (Y(this, 16)) {
            var b = !U(this, 16);
            Md(this, 16, b) && this.A(16, b)
        }
        Y(this, 8) && Md(this, 8, j) && this.A(8, j);
        Y(this, 64) && (b = !U(this, 64), Md(this, 64, b) && this.A(64, b));
        b = new H("action", this);
        if (a) b.altKey = a.altKey,
        b.ctrlKey = a.ctrlKey,
        b.metaKey = a.metaKey,
        b.shiftKey = a.shiftKey,
        b.hb = a.hb;
        return this.dispatchEvent(b)
    };
    p.Yb = function() {
        Y(this, 32) && Md(this, 32, j) && this.A(32, j)
    };
    p.qb = function() {
        Y(this, 4) && this.setActive(o);
        Y(this, 32) && Md(this, 32, o) && this.A(32, o)
    };
    p.Zb = function(a) {
        return this.H && this.isEnabled() && this.ab(a) ? (a.preventDefault(), a.stopPropagation(), j) : o
    };
    p.ab = function(a) {
        return 13 == a.keyCode && this.wa(a)
    };
    ea(X) || g(Error("Invalid component class " + X));
    ea(wd) || g(Error("Invalid renderer class " + wd));
    var Od = ia(X);
    Jd[Od] = wd;
    Id("goog-control",
    function() {
        return new X(k)
    });
    var Pd = function() {};
    w(Pd, Bd);
    ba(Pd);
    p = Pd.prototype;
    p.Da = function() {};
    p.m = function(a) {
        a.n && o != a.Ua && Kd(a, o);
        a.Ua = o;
        a.Ya &= -256;
        Nd(a, 32, o);
        return a.ra().m("button", {
            "class": yd(this, a).join(" "),
            disabled: !a.isEnabled(),
            title: a.Aa() || "",
            value: a.Ca() || ""
        },
        Ld(a) || "")
    };
    p.rb = function(a) {
        Ec(a).listen(a.i(), "click", a.wa)
    };
    p.za = aa;
    p.ca = aa;
    p.Cb = function(a) {
        return a.isEnabled()
    };
    p.ia = aa;
    p.A = function(a, b, c) {
        Pd.g.A.call(this, a, b, c);
        if ((a = a.i()) && 1 == b) a.disabled = c
    };
    p.Ca = function(a) {
        return a.value
    };
    p.Ba = function(a, b) {
        if (a) a.value = b
    };
    p.B = aa;
    var Qd = function(a, b, c) {
        X.call(this, a, b || Pd.ta(), c)
    };
    w(Qd, X);
    p = Qd.prototype;
    p.Ca = function() {
        return this.ob
    };
    p.Ba = function(a) {
        this.ob = a;
        this.k.Ba(this.i(), a)
    };
    p.Aa = function() {
        return this.pb
    };
    p.Va = function(a) {
        this.pb = a;
        this.k.Va(this.i(), a)
    };
    p.h = function() {
        Qd.g.h.call(this);
        delete this.ob;
        delete this.pb
    };
    p.$ = function() {
        Qd.g.$.call(this);
        if (this.v & 32) {
            var a = this.U();
            a && Ec(this).listen(a, "keyup", this.ab)
        }
    };
    p.ab = function(a) {
        return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.wa(a) : 32 == a.keyCode
    };
    Id("goog-button",
    function() {
        return new Qd(k)
    });
    var Rd = function() {};
    w(Rd, Bd);
    ba(Rd);
    Rd.prototype.m = function(a) {
        var b = {
            "class": "goog-inline-block " + yd(this, a).join(" "),
            title: a.Aa() || ""
        },
        b = a.ra().m("div", b, Sd(this, a.ka, a.ra()));
        this.gb(a, b);
        return b
    };
    Rd.prototype.Da = function() {
        return "button"
    };
    Rd.prototype.gb = function(a, b) {
        x(a);
        x(b);
        a.isEnabled() || this.B(b, 1, j);
        U(a, 8) && this.B(b, 8, j);
        a.v & 16 && this.B(b, 16, j);
        U(a, 64) && this.B(b, 64, j)
    };
    Rd.prototype.da = function(a) {
        return a && a.firstChild.firstChild
    };
    var Sd = function(a, b, c) {
        return c.m("div", "goog-inline-block " + (a.P() + "-outer-box"), c.m("div", "goog-inline-block " + (a.P() + "-inner-box"), b))
    };
    Rd.prototype.P = function() {
        return "goog-custom-button"
    };
    var Td = function(a) {
        var b = new Rd;
        b.P = td(a);
        Qd.call(this, k, b);
        Nd(this, 16, j)
    };
    w(Td, Qd);
    Td.prototype.m = function() {
        Td.g.m.call(this);
        Ma(this.i(), "holiday-button")
    };
    var Ud = function(a, b, c) {
        this.a = a;
        this.name = b;
        b = E("div", b);
        O(b, "position", "absolute");
        tc(b, c);
        a.appendChild(b);
        this.o(o)
    };
    Ud.prototype.o = function(a) {
        P(this.a, a)
    };
    var Vd = function(a, b, c, d, e) {
        this.a = a;
        this.ac = b;
        c = E("div", c);
        O(c, "position", "absolute");
        a.appendChild(c);
        this.V = c;
        a = E("div", d);
        O(a, "position", "absolute");
        b.appendChild(a);
        this.Fa = a;
        e && (tc(c, e), tc(a, e));
        this.o(o)
    };
    Vd.prototype.o = function(a, b) {
        P(this.V, a);
        P(this.Fa, !a);
        if (this.H != a && (this.H = a, b && (!B || D("9")))) {
            G(this.Dc);
            G(this.Ec);
            var c = a ? 1 : 0;
            vc(this.V, a ? 0 : 1);
            vc(this.Fa, c);
            c = new hd(this.V, a);
            c.play();
            this.Dc = c;
            c = new hd(this.Fa, !a);
            c.play();
            this.Ec = c
        }
    };
    var Wd = function(a) {
        this.Pc = a
    };
    Wd.prototype.Za = function(a) {
        var b = E("div", "goog-inline-block"),
        c = new A(110, 32);
        uc(b, c);
        O(b, "position", "relative");
        a.appendChild(b);
        this.mb = E("div", "holiday-rope-rope_shadow");
        uc(this.mb, c);
        O(this.mb, {
            position: "absolute"
        });
        b.appendChild(this.mb);
        this.Sa = E("div");
        uc(this.Sa, c);
        O(this.Sa, {
            position: "absolute"
        });
        b.appendChild(this.Sa)
    };
    Wd.prototype.play = function() {
        function a(a, c) {
            Q(function() {
                b.className = c
            },
            a)
        }
        for (var b = this.Sa,
        c = this.Pc,
        d = 1; 11 >= d; d++) a(100 * d, "holiday-rope-rope_" + c + d);
        a(1200, "")
    };
    var Z = function(a, b, c, d, e) {
        ed.call(this, b, c, d, e);
        this.element = a
    };
    w(Z, ed);
    Z.prototype.Pa = aa;
    Z.prototype.Ha = function() {
        this.Pa();
        Z.g.Ha.call(this)
    };
    Z.prototype.pa = function() {
        this.Pa();
        Z.g.pa.call(this)
    };
    Z.prototype.Ka = function() {
        this.Pa();
        Z.g.Ka.call(this)
    };
    var Xd = function(a, b, c, d, e) { (3 != b.length || 3 != c.length) && g(Error("Start and end points must be 3D"));
        Z.apply(this, arguments)
    };
    w(Xd, Z);
    Xd.prototype.Pa = function() {
        for (var a = [], b = 0; b < this.coords.length; b++) a[b] = Math.round(this.coords[b]);
        this.element.style.backgroundColor = "rgb(" + a.join(",") + ")"
    };
    var Yd = function(a) {
        return 1 - Math.pow(1 - a, 3)
    };
    var Zd, $d, ae, be = function() {
        G(ae);
        Zd = o;
        O(document.body, "backgroundColor", "");
        $d && Fb($d.ownerNode || $d.owningElement || $d)
    };
    var ce, de;
    de = ce = o;
    var ee = $a();
    ee && ( - 1 != ee.indexOf("Firefox") || -1 != ee.indexOf("Camino") || ( - 1 != ee.indexOf("iPhone") || -1 != ee.indexOf("iPod") ? ce = j: -1 != ee.indexOf("iPad") && (de = j)));
    var fe = ce,
    ge = de;
    var he = function(a) {
        "5" == a && (a = "1");
        this.zc = a;
        this.xa = {
            sleighbells: 6,
            song: 7
        } [a] || parseInt(a, 10) || 0;
        this.Wa = o;
        if (!ge && !fe) if (B && D("9") ? 0 : Oc && Xc()) this.ya = j;
        else {
            var b = window.Audio;
            if (b) b = new b,
            b.src = "holiday11_" + a + (b.canPlayType("audio/mp3") ? ".mp3": ".ogg"),
            b.load(),
            this.M = b
        }
    };
    w(he, Qb);
    he.prototype.play = function() {
        this.fb = ma();
        this.M ? this.M.play() : this.ya && Sc(this.zc, this.xa, this.Wa ? 0 : 1)
    };
    he.prototype.Lc = function() {
        var a;
        if (this.M) a = this.M.currentTime;
        else if (this.ya) {
            a = this.xa;
            var b = 0;
            if (S && Rc[a]) try {
                b = Nc.getPosition(a)
            } catch(c) {
                S = o
            }
            a = b / 1E3
        } else a = i;
        return a ? Math.floor(1E3 * a) : this.fb !== i ? ma() - this.fb: 0
    };
    he.prototype.h = function() {
        he.g.h.call(this);
        if (this.M) this.M.pause(),
        delete this.M;
        else if (this.ya) {
            var a = this.xa;
            if (S) {
                var b = Rc[a];
                b && (b.bc && window.clearInterval(b.bc), b.$b && window.clearInterval(b.$b));
                try {
                    Nc.stopChannel(a),
                    Rc[a].nb && Nc.stopChannel(a + 1)
                } catch(c) {
                    S = o
                }
            }
        }
        he.g.h.call(this)
    };
    var $ = function() {
        function a(a) {
            return new he(a)
        }
        var b = u("hplogo") ? document.getElementById("hplogo") : "hplogo";
        if (b) {
            Eb(b);
            var c = new N,
            d = E("div");
            O(d, {
                height: "10px",
                position: "absolute",
                width: "100%",
                minWidth: "833px"
            });
            var e = $.hc(d),
            f = e[0],
            e = e[1],
            h = new lc,
            e = la($.jc, e);
            c.listen(h, "resize", e);
            e();
            var l = E("div");
            O(l, {
                "float": "left",
                position: "absolute",
                textAlign: "center",
                whiteSpace: "nowrap",
                width: "100%",
                minWidth: "833px"
            });
            if (e = u("body") ? document.getElementById("body") : "body") e.insertBefore(d, e.childNodes[0] || k),
            e.insertBefore(l, e.childNodes[0] || k);
            for (var d = [], e = ["red", "yellow", "blue", "green"], m = 0; 8 > m; m++) {
                var n = new Wd(e[m % e.length]);
                d.push(n);
                n.Za(l)
            }
            var s = u("pmocntr2") ? document.getElementById("pmocntr2") : "pmocntr2",
            q = E("div", {
                style: "color:#555;cursor:pointer;float:right;font-size:22px;font-weight:bold;margin:25px"
            });
            q.innerHTML = "&times;";
            b.appendChild(q);
            P(q, o);
            e = E("div");
            b.appendChild(e);
            var F = new R;
            F.Za(b);
            m = F.i();
            Ma(m, "holiday-buttons");
            O(m, "white-space", "nowrap");
            m.dir = "ltr";
            var m = $.ic(F),
            n = Ha(m, 0, 6),
            J = m[6];
            vc(J.i(), 0);
            J.isEnabled();
            var Xb = $.gc(c, n),
            xa = F.i();
            P(xa, o);
            F = new pc;
            qc(F, "button");
            nc(c, F, "complete",
            function() {
                P(xa, j);
                Xb.start()
            });
            F.start();
            if (!B || !D("9")) if (Wc(), B && D("9") ? 0 : Oc && Xc()) if (S = o, Mc = j, Wc(), Oc && Xc()) {
                google.doodle.flashLoaded = Uc;
                T = document.createElement("iframe");
                T.name = "doodle-sound";
                T.style.position = "absolute";
                T.style.top = "-150px";
                T.style.border = 0;
                T.style.width = "10px";
                T.style.height = "10px";
                document.getElementById("hplogo").appendChild(T);
                Pc = T.contentDocument;
                if (Pc == i || Pc == k) Pc = T.contentWindow.document;
                Pc.open();
                Pc.write('<html><head></head><body><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="0" height="0" id="hplogo-sound-player" type="application/x-shockwave-flash"><param name="movie" value="holiday11.swf"><param name="allowScriptAccess" value="always"><object id="hplogo-sound-player-2" type="application/x-shockwave-flash" data="holiday11.swf" width="0" height="0"><param name="allowScriptAccess" value="always"></object></object></body></html>');
                Pc.close()
            }
            var nd = Ba(["1", "2", "3", "4", "5"], a),
            F = a("song"),
            od = a("sleighbells"),
            ie = Fa(nd, F, od),
            pd = $.ec(e, F, od, m, d, f),
            ya = $.fc(e, n, J, pd);
            nc(c, ya, "interaction", $.kc);
            nc(c, ya, "start", la(G, Xb));
            c.listen(ya, "interaction",
            function() {
                Zd || (Zd = j, $d || ($d = xc("body {color: #666;}#footer > div {border-color: #333}")), G(ae), ae = new Xd(document.body, [255, 255, 255], [34, 34, 34], 500, Yd), ae.play());
                P(q, j);
                s && P(s, o)
            });
            c.listen(ya, "interactionend",
            function() {
                be();
                P(q, o);
                s && P(s, j)
            });
            c.listen(ya, "button",
            function(a) { (a = nd[a.Wb - 1]) && a.play()
            });
            c.listen(J, "action",
            function(a) {
                z(ie,
                function(b) {
                    b.Wa = U(a.target, 16);
                    var c = b.Wa ? 0 : 1;
                    if (b.M) b.M.volume = c;
                    else if (b.ya && (b = b.xa, S && Mc)) {
                        var d = Rc[b];
                        if (d) {
                            d.volume = c;
                            try {
                                Nc.setVolume(b, c),
                                Rc[b].nb && Nc.setVolume(b + 1, c)
                            } catch(e) {
                                S = o
                            }
                        }
                    }
                })
            });
            var Yb = xc("\n.goog-inline-block {\n  position: relative;\n  display: -moz-inline-box;\n  display: inline-block;\n}\n\n* html .goog-inline-block {\n  display: inline;\n}\n\n*:first-child+html .goog-inline-block {\n  display: inline;\n}\n\n\n.holiday-buttons {\n  padding-left: 60px;\n}\n\n.holiday-button {\n  cursor: pointer;\n  margin: 0 .6em;\n  outline: none;\n}\n\n\n.holiday-letters-bell{background:no-repeat url(holiday11-letters-sprite.png) -136px 0;width:96px;height:79px}\n.holiday-letters-bell_off{background:no-repeat url(holiday11-letters-sprite.png) -232px 0;width:96px;height:79px}\n.holiday-letters-candle{background:no-repeat url(holiday11-letters-sprite.png) -75px -70px;width:51px;height:137px}\n.holiday-letters-candle_off{background:no-repeat url(holiday11-letters-sprite.png) -277px -79px;width:51px;height:137px}\n.holiday-letters-present{background:no-repeat url(holiday11-letters-sprite.png) -525px 0;width:97px;height:86px}\n.holiday-letters-present_off{background:no-repeat url(holiday11-letters-sprite.png) -328px 0;width:97px;height:86px}\n.holiday-letters-santa{background:no-repeat url(holiday11-letters-sprite.png) -136px -79px;width:66px;height:110px}\n.holiday-letters-santa_off{background:no-repeat url(holiday11-letters-sprite.png) -840px -100px;width:66px;height:110px}\n.holiday-letters-snowflake{background:no-repeat url(holiday11-letters-sprite.png) -645px -100px;width:120px;height:120px}\n.holiday-letters-snowflake_off{background:no-repeat url(holiday11-letters-sprite.png) -525px -100px;width:120px;height:120px}\n.holiday-letters-snowman{background:no-repeat url(holiday11-letters-sprite.png) -202px -79px;width:75px;height:123px}\n.holiday-letters-snowman_off{background:no-repeat url(holiday11-letters-sprite.png) -328px -86px;width:75px;height:123px}\n.holiday-letters-letter_e{background:no-repeat url(holiday11-letters-sprite.png) 0 -148px;width:61px;height:70px}\n.holiday-letters-letter_e_off{background:no-repeat url(holiday11-letters-sprite.png) -75px 0;width:61px;height:70px}\n.holiday-letters-letter_g1{background:no-repeat url(holiday11-letters-sprite.png) -425px 0;width:100px;height:103px}\n.holiday-letters-letter_g1_off{background:no-repeat url(holiday11-letters-sprite.png) -425px -103px;width:100px;height:103px}\n.holiday-letters-letter_g2{background:no-repeat url(holiday11-letters-sprite.png) -765px 0;width:75px;height:106px}\n.holiday-letters-letter_g2_off{background:no-repeat url(holiday11-letters-sprite.png) -765px -106px;width:75px;height:106px}\n.holiday-letters-letter_l{background:no-repeat url(holiday11-letters-sprite.png) -840px 0;width:50px;height:100px}\n.holiday-letters-letter_l_off{background:no-repeat url(holiday11-letters-sprite.png) -697px 0;width:50px;height:100px}\n.holiday-letters-letter_o1{background:no-repeat url(holiday11-letters-sprite.png) -622px 0;width:75px;height:74px}\n.holiday-letters-letter_o2{background:no-repeat url(holiday11-letters-sprite.png) 0 -74px;width:75px;height:74px}\n.holiday-letters-letter_o_off{background:no-repeat url(holiday11-letters-sprite.png) 0 0;width:75px;height:74px}\n\n.holiday-animation-bell_01{background:no-repeat url(holiday11-animation-sprite.png) 0 -2499px;width:96px;height:79px}\n.holiday-animation-bell_02{background:no-repeat url(holiday11-animation-sprite.png) 0 -2297px;width:96px;height:79px}\n.holiday-animation-bell_03{background:no-repeat url(holiday11-animation-sprite.png) 0 -1460px;width:96px;height:79px}\n.holiday-animation-bell_04{background:no-repeat url(holiday11-animation-sprite.png) 0 -1042px;width:96px;height:79px}\n.holiday-animation-bell_05{background:no-repeat url(holiday11-animation-sprite.png) 0 -1121px;width:96px;height:79px}\n.holiday-animation-candle_01{background:no-repeat url(holiday11-animation-sprite.png) -51px -2040px;width:51px;height:137px}\n.holiday-animation-candle_02{background:no-repeat url(holiday11-animation-sprite.png) -51px -1200px;width:51px;height:137px}\n.holiday-animation-candle_03{background:no-repeat url(holiday11-animation-sprite.png) 0 -905px;width:51px;height:137px}\n.holiday-animation-candle_04{background:no-repeat url(holiday11-animation-sprite.png) 0 -1200px;width:51px;height:137px}\n.holiday-animation-candle_05{background:no-repeat url(holiday11-animation-sprite.png) 0 -2040px;width:51px;height:137px}\n.holiday-animation-candle_06{background:no-repeat url(holiday11-animation-sprite.png) -66px -648px;width:51px;height:137px}\n.holiday-animation-present_01{background:no-repeat url(holiday11-animation-sprite.png) 0 -1539px;width:97px;height:86px}\n.holiday-animation-present_02{background:no-repeat url(holiday11-animation-sprite.png) 0 -1834px;width:97px;height:86px}\n.holiday-animation-present_03{background:no-repeat url(holiday11-animation-sprite.png) 0 -206px;width:97px;height:86px}\n.holiday-animation-present_04{background:no-repeat url(holiday11-animation-sprite.png) 0 -1625px;width:97px;height:86px}\n.holiday-animation-present_05{background:no-repeat url(holiday11-animation-sprite.png) 0 -120px;width:97px;height:86px}\n.holiday-animation-santa_01{background:no-repeat url(holiday11-animation-sprite.png) -51px -905px;width:66px;height:110px}\n.holiday-animation-santa_02{background:no-repeat url(holiday11-animation-sprite.png) 0 -648px;width:66px;height:110px}\n.holiday-animation-santa_03{background:no-repeat url(holiday11-animation-sprite.png) 0 -292px;width:66px;height:110px}\n.holiday-animation-santa_04{background:no-repeat url(holiday11-animation-sprite.png) 0 -2688px;width:66px;height:110px}\n.holiday-animation-santa_05{background:no-repeat url(holiday11-animation-sprite.png) 0 -2578px;width:66px;height:110px}\n.holiday-animation-snowflake_01{background:no-repeat url(holiday11-animation-sprite.png) 0 0;width:120px;height:120px}\n.holiday-animation-snowflake_02{background:no-repeat url(holiday11-animation-sprite.png) 0 -785px;width:120px;height:120px}\n.holiday-animation-snowflake_03{background:no-repeat url(holiday11-animation-sprite.png) 0 -2177px;width:120px;height:120px}\n.holiday-animation-snowflake_04{background:no-repeat url(holiday11-animation-sprite.png) 0 -1920px;width:120px;height:120px}\n.holiday-animation-snowflake_05{background:no-repeat url(holiday11-animation-sprite.png) 0 -2798px;width:120px;height:120px}\n.holiday-animation-snowman_01{background:no-repeat url(holiday11-animation-sprite.png) 0 -525px;width:75px;height:123px}\n.holiday-animation-snowman_02{background:no-repeat url(holiday11-animation-sprite.png) 0 -1337px;width:75px;height:123px}\n.holiday-animation-snowman_03{background:no-repeat url(holiday11-animation-sprite.png) 0 -2376px;width:75px;height:123px}\n.holiday-animation-snowman_04{background:no-repeat url(holiday11-animation-sprite.png) 0 -402px;width:75px;height:123px}\n.holiday-animation-snowman_05{background:no-repeat url(holiday11-animation-sprite.png) 0 -1711px;width:75px;height:123px}\n\n.holiday-rope-rope_blue1{background:no-repeat url(holiday11-rope-sprite.png) 0 -480px;width:110px;height:32px}\n.holiday-rope-rope_blue10{background:no-repeat url(holiday11-rope-sprite.png) 0 -960px;width:110px;height:32px}\n.holiday-rope-rope_blue11{background:no-repeat url(holiday11-rope-sprite.png) 0 -928px;width:110px;height:32px}\n.holiday-rope-rope_blue2{background:no-repeat url(holiday11-rope-sprite.png) 0 -352px;width:110px;height:32px}\n.holiday-rope-rope_blue3{background:no-repeat url(holiday11-rope-sprite.png) 0 -544px;width:110px;height:32px}\n.holiday-rope-rope_blue4{background:no-repeat url(holiday11-rope-sprite.png) 0 -800px;width:110px;height:32px}\n.holiday-rope-rope_blue5{background:no-repeat url(holiday11-rope-sprite.png) 0 -576px;width:110px;height:32px}\n.holiday-rope-rope_blue6{background:no-repeat url(holiday11-rope-sprite.png) 0 -1120px;width:110px;height:32px}\n.holiday-rope-rope_blue7{background:no-repeat url(holiday11-rope-sprite.png) 0 -1024px;width:110px;height:32px}\n.holiday-rope-rope_blue8{background:no-repeat url(holiday11-rope-sprite.png) 0 -608px;width:110px;height:32px}\n.holiday-rope-rope_blue9{background:no-repeat url(holiday11-rope-sprite.png) 0 -256px;width:110px;height:32px}\n.holiday-rope-rope_green1{background:no-repeat url(holiday11-rope-sprite.png) 0 -1216px;width:110px;height:32px}\n.holiday-rope-rope_green10{background:no-repeat url(holiday11-rope-sprite.png) 0 -1248px;width:110px;height:32px}\n.holiday-rope-rope_green11{background:no-repeat url(holiday11-rope-sprite.png) 0 -1152px;width:110px;height:32px}\n.holiday-rope-rope_green2{background:no-repeat url(holiday11-rope-sprite.png) 0 -320px;width:110px;height:32px}\n.holiday-rope-rope_green3{background:no-repeat url(holiday11-rope-sprite.png) 0 -1408px;width:110px;height:32px}\n.holiday-rope-rope_green4{background:no-repeat url(holiday11-rope-sprite.png) 0 -704px;width:110px;height:32px}\n.holiday-rope-rope_green5{background:no-repeat url(holiday11-rope-sprite.png) 0 -896px;width:110px;height:32px}\n.holiday-rope-rope_green6{background:no-repeat url(holiday11-rope-sprite.png) 0 -96px;width:110px;height:32px}\n.holiday-rope-rope_green7{background:no-repeat url(holiday11-rope-sprite.png) 0 -1088px;width:110px;height:32px}\n.holiday-rope-rope_green8{background:no-repeat url(holiday11-rope-sprite.png) 0 -992px;width:110px;height:32px}\n.holiday-rope-rope_green9{background:no-repeat url(holiday11-rope-sprite.png) 0 -768px;width:110px;height:32px}\n.holiday-rope-rope_red1{background:no-repeat url(holiday11-rope-sprite.png) 0 -416px;width:110px;height:32px}\n.holiday-rope-rope_red10{background:no-repeat url(holiday11-rope-sprite.png) 0 0;width:110px;height:32px}\n.holiday-rope-rope_red11{background:no-repeat url(holiday11-rope-sprite.png) 0 -1376px;width:110px;height:32px}\n.holiday-rope-rope_red2{background:no-repeat url(holiday11-rope-sprite.png) 0 -192px;width:110px;height:32px}\n.holiday-rope-rope_red3{background:no-repeat url(holiday11-rope-sprite.png) 0 -384px;width:110px;height:32px}\n.holiday-rope-rope_red4{background:no-repeat url(holiday11-rope-sprite.png) 0 -864px;width:110px;height:32px}\n.holiday-rope-rope_red5{background:no-repeat url(holiday11-rope-sprite.png) 0 -832px;width:110px;height:32px}\n.holiday-rope-rope_red6{background:no-repeat url(holiday11-rope-sprite.png) 0 -1280px;width:110px;height:32px}\n.holiday-rope-rope_red7{background:no-repeat url(holiday11-rope-sprite.png) 0 -160px;width:110px;height:32px}\n.holiday-rope-rope_red8{background:no-repeat url(holiday11-rope-sprite.png) 0 -448px;width:110px;height:32px}\n.holiday-rope-rope_red9{background:no-repeat url(holiday11-rope-sprite.png) 0 -736px;width:110px;height:32px}\n.holiday-rope-rope_shadow{background:no-repeat url(holiday11-rope-sprite.png) 0 -224px;width:110px;height:32px}\n.holiday-rope-rope_yellow1{background:no-repeat url(holiday11-rope-sprite.png) 0 -1056px;width:110px;height:32px}\n.holiday-rope-rope_yellow10{background:no-repeat url(holiday11-rope-sprite.png) 0 -1344px;width:110px;height:32px}\n.holiday-rope-rope_yellow11{background:no-repeat url(holiday11-rope-sprite.png) 0 -512px;width:110px;height:32px}\n.holiday-rope-rope_yellow2{background:no-repeat url(holiday11-rope-sprite.png) 0 -672px;width:110px;height:32px}\n.holiday-rope-rope_yellow3{background:no-repeat url(holiday11-rope-sprite.png) 0 -288px;width:110px;height:32px}\n.holiday-rope-rope_yellow4{background:no-repeat url(holiday11-rope-sprite.png) 0 -32px;width:110px;height:32px}\n.holiday-rope-rope_yellow5{background:no-repeat url(holiday11-rope-sprite.png) 0 -640px;width:110px;height:32px}\n.holiday-rope-rope_yellow6{background:no-repeat url(holiday11-rope-sprite.png) 0 -128px;width:110px;height:32px}\n.holiday-rope-rope_yellow7{background:no-repeat url(holiday11-rope-sprite.png) 0 -1312px;width:110px;height:32px}\n.holiday-rope-rope_yellow8{background:no-repeat url(holiday11-rope-sprite.png) 0 -1184px;width:110px;height:32px}\n.holiday-rope-rope_yellow9{background:no-repeat url(holiday11-rope-sprite.png) 0 -64px;width:110px;height:32px}\n\n.holiday-stars-star_lg{background:no-repeat url(holiday11-stars-sprite.png) -66px -78px;width:99px;height:95px}\n.holiday-stars-star_lg_off{background:no-repeat url(holiday11-stars-sprite.png) -66px -173px;width:99px;height:95px}\n.holiday-stars-star_med{background:no-repeat url(holiday11-stars-sprite.png) -81px 0;width:81px;height:78px}\n.holiday-stars-star_med_off{background:no-repeat url(holiday11-stars-sprite.png) 0 0;width:81px;height:78px}\n.holiday-stars-star_sm{background:no-repeat url(holiday11-stars-sprite.png) 0 -78px;width:66px;height:64px}\n.holiday-stars-star_sm_off{background:no-repeat url(holiday11-stars-sprite.png) 0 -173px;width:66px;height:64px}\n\n.holiday-button-yellow{background:no-repeat url(holiday11-button-sprite.png) 0 -564px;width:47px;height:47px}\n.holiday-button-sound{background:no-repeat url(holiday11-button-sprite.png) 0 -376px;width:47px;height:47px}\n.holiday-button-red{background:no-repeat url(holiday11-button-sprite.png) 0 -658px;width:47px;height:47px}\n.holiday-button-green{background:no-repeat url(holiday11-button-sprite.png) 0 -188px;width:47px;height:47px}\n.holiday-button-blue{background:no-repeat url(holiday11-button-sprite.png) 0 -329px;width:47px;height:47px}\n.holiday-button-yellow-checked{background:no-repeat url(holiday11-button-sprite.png) 0 -423px;width:47px;height:47px}\n.holiday-button-sound-checked{background:no-repeat url(holiday11-button-sprite.png) 0 -846px;width:47px;height:47px}\n.holiday-button-red-checked{background:no-repeat url(holiday11-button-sprite.png) 0 -470px;width:47px;height:47px}\n.holiday-button-green-checked{background:no-repeat url(holiday11-button-sprite.png) 0 -282px;width:47px;height:47px}\n.holiday-button-blue-checked{background:no-repeat url(holiday11-button-sprite.png) 0 -235px;width:47px;height:47px}\n.holiday-button-yellow-hover{background:no-repeat url(holiday11-button-sprite.png) 0 -47px;width:47px;height:47px}\n.holiday-button-sound-hover{background:no-repeat url(holiday11-button-sprite.png) 0 -705px;width:47px;height:47px}\n.holiday-button-red-hover{background:no-repeat url(holiday11-button-sprite.png) 0 -893px;width:47px;height:47px}\n.holiday-button-green-hover{background:no-repeat url(holiday11-button-sprite.png) 0 -94px;width:47px;height:47px}\n.holiday-button-blue-hover{background:no-repeat url(holiday11-button-sprite.png) 0 0;width:47px;height:47px}\n.holiday-button-yellow-active{background:no-repeat url(holiday11-button-sprite.png) 0 -799px;width:47px;height:47px}\n.holiday-button-sound-active{background:no-repeat url(holiday11-button-sprite.png) 0 -141px;width:47px;height:47px}\n.holiday-button-red-active{background:no-repeat url(holiday11-button-sprite.png) 0 -611px;width:47px;height:47px}\n.holiday-button-green-active{background:no-repeat url(holiday11-button-sprite.png) 0 -752px;width:47px;height:47px}\n.holiday-button-blue-active{background:no-repeat url(holiday11-button-sprite.png) 0 -517px;width:47px;height:47px}\n.holiday-button-red-disabled,.holiday-button-yellow-disabled,.holiday-button-blue-disabled,.holiday-button-green-disabled,.holiday-button-sound-disabled{ cursor: default; }"),
            Zb = function() {
                Fb(l);
                Eb(b);
                G(pd);
                G(Xb);
                G(h);
                G(c);
                G(ya);
                be();
                Fb(Yb.ownerNode || Yb.owningElement || Yb)
            };
            nc(c, ya, "end",
            function() {
                Zb();
                Q(la(google.nav.go, google.doodle.url))
            });
            nc(c, q, "click",
            function() {
                Zb();
                Q($, 10)
            });
            google.msg && google.msg.listen(67, Zb)
        }
    };
    $.fc = function(a, b, c, d) {
        function e(a, b, c, d) {
            var a = "holiday-letters-" + a,
            d = (d !== i ? "holiday-letters-" + d: k) || a + "_off",
            e = E("div");
            O(e, "position", "absolute");
            tc(e, 0, 0);
            f.appendChild(e);
            var l = E("div");
            O(l, "position", "absolute");
            tc(l, 0, 0);
            h.appendChild(l);
            return new Vd(e, l, a, d, new Oa(b, c))
        }
        var f = E("div");
        a.appendChild(f);
        var h = E("div");
        a.appendChild(h);
        O(a, "position", "relative");
        uc(a, 400, 165);
        var a = [e("letter_g1", 10, 44, i), e("letter_o1", 102, 69, "letter_o_off"), e("letter_o2", 169, 69, "letter_o_off"), e("letter_g2", 227, 70, i), e("letter_l", 284, 42, i), e("letter_e", 328, 71, i)],
        l = [e("snowflake", -3, 37), e("santa", 110, 35), e("bell", 162, 63), e("snowman", 227, 42), e("candle", 289, 3), e("present", 314, 52)];
        return new id(a, l, b, c, d)
    };
    $.ec = function(a, b, c, d, e, f) {
        function h(b, c, d, e) {
            for (var f = [], h = 0; h < c; h++) {
                var l = "holiday-animation-" + b + "_0" + (h + 1),
                xa = E("div");
                O(xa, "position", "absolute");
                tc(xa, 0, 0);
                a.appendChild(xa);
                f.push(new Ud(xa, l, new Oa(d + 0, e + 0)))
            }
            return new rd(f)
        }
        var l = [h("snowflake", 5, -12, 37), h("santa", 5, 100, 35), h("bell", 5, 157, 63), h("snowman", 5, 232, 42), h("candle", 6, 294, 3), h("present", 5, 325, 52)];
        return new Jc(l, b, c, d, e, f)
    };
    $.ic = function(a) {
        function b(b) {
            b = new Td(b);
            c.push(b);
            var e = a,
            f = a.w ? a.w.length: 0;
            b.n && g(Error("Component already rendered")); (0 > f || f > (e.w ? e.w.length: 0)) && g(Error("Child component index out of bounds"));
            if (!e.C || !e.w) e.C = {},
            e.w = [];
            if (b.getParent() == e) {
                var h = Dc(b);
                e.C[h] = b;
                Ea(e.w, b)
            } else {
                var h = e.C,
                l = Dc(b);
                l in h && g(Error('The object already contains the key "' + l + '"'));
                h[l] = b
            }
            Fc(b, e);
            Ia(e.w, f, 0, b);
            b.n && e.n && b.getParent() == e ? (e = e.da(), e.insertBefore(b.i(), e.childNodes[f] || k)) : (e.a || e.m(), f = e.w ? e.w[f + 1] || k: k, Gc(b, e.da(), f ? f.a: k))
        }
        var c = [];
        b("holiday-button-blue");
        b("holiday-button-red");
        b("holiday-button-yellow");
        b("holiday-button-blue");
        b("holiday-button-green");
        b("holiday-button-red");
        b("holiday-button-sound");
        return c
    };
    $.kc = function() {
        var a = new pc;
        qc(a, "animation");
        a.start()
    };
    $.hc = function(a) {
        function b(b, c, l) {
            var b = "holiday-stars-" + b,
            c = c + "px",
            m = E("div");
            O(m, "position", "absolute");
            O(m, "top", c);
            uc(m, l);
            var n = E("div");
            O(n, "position", "absolute");
            O(n, "top", c);
            uc(n, l);
            a.appendChild(m);
            a.appendChild(n);
            b = new Vd(m, n, b, b + "_off");
            d.push(b);
            e.push(m);
            e.push(n)
        }
        function c(a, c, d) {
            b(a, c, d);
            b(a, c, d)
        }
        var d = [],
        e = [];
        c("star_lg", 40, new A(99, 95));
        c("star_med", 118, new A(81, 78));
        c("star_sm", 182, new A(66, 64));
        return [d, e]
    };
    $.jc = function(a, b) {
        function c(a, b, c) {
            z(a,
            function(a) {
                O(a, b, c + "px")
            })
        }
        function d(a, b, d) {
            c(a, "left", d);
            c(b, "right", d)
        }
        var e;
        e = b ? b.target.O ? b.target.O.Tb() : k: Bb(window);
        e = Math.floor(Math.max(0, e.width - 833) / 2);
        d([a[0], a[1]], [a[2], a[3]], 10 + e);
        d([a[4], a[5]], [a[6], a[7]], 68 + e);
        d([a[8], a[9]], [a[10], a[11]], 118 + e)
    };
    $.gc = function(a, b) {
        var c = new qd(8);
        a.listen(c, "pulse",
        function() {
            var a = b[(c.Qb + 6) % 20];
            a && a.isEnabled() && !U(a, 2) && (Q(v(a.R, a, j), 0), Q(v(a.R, a, o), 200))
        });
        return c
    };
    google.ad ? $() : google.x && google.x({
        id: "DOODLE"
    },
    $);
})();