(function() {
    var c = !0,
    d = !1;
    window.google = window.google || {};
    window.google.ml = function() {};
    for (var g = document.getElementsByTagName("A"), h = 0; h < g.length; ++h) g[h].href = "#";
    google.nav || (google.nav = {});
    google.nav.go = function() {};
    var j;
    try {
        google.doodle || (google.doodle = {});
        var k, l, m = 0 <= navigator.userAgent.indexOf("MSIE"),
        q = {
            "logo-blockheads": {
                o: "blockheads.jpg",
                left: 31,
                top: 35,
                width: 135,
                height: 156,
                frames: 89,
                g: 0,
                h: 0,
                a: d,
                click: function() {
                    n("logo-blockheads")
                },
                k: function() {
                    o("logo-blockheads", c)
                },
                i: function() {
                    o("logo-blockheads", d)
                }
            },
            "logo-blockheads-hold": {
                left: 31,
                top: 35,
                width: 135,
                height: 156,
                frames: 89,
                g: 0,
                h: 0,
                a: d,
                click: function() {
                    p("logo-blockheads", "logo-blockheads-hold", c)
                },
                k: function() {
                    o("logo-blockheads-hold", c)
                },
                i: function() {
                    o("logo-blockheads-hold", d)
                }
            },
            "logo-goo": {
                o: "goo.png",
                left: 227,
                top: 49,
                width: 67,
                height: 144,
                frames: 105,
                g: 400,
                h: 0,
                a: d,
                click: function() {
                    n("logo-goo")
                },
                k: function() {
                    o("logo-goo", c)
                },
                i: function() {
                    o("logo-goo", d)
                }
            },
            "logo-goo-hold": {
                left: 227,
                top: 49,
                width: 67,
                height: 144,
                frames: 105,
                g: 400,
                h: 0,
                a: d,
                click: function() {
                    p("logo-goo", "logo-goo-hold", c)
                },
                k: function() {
                    o("logo-goo-hold", c)
                },
                i: function() {
                    o("logo-goo-hold", d)
                }
            },
            "logo-gumby-loop": {
                o: "gumby.jpg",
                left: 277,
                top: 29,
                width: 98,
                height: 156,
                g: 682,
                h: 0,
                a: d,
                click: function() {
                    if (!google.doodle.d) {
                        google.doodle.d = c;
                        q["logo-gumby-loop"].a = c;
                        k = 0;
                        r()
                    }
                    s = c
                }
            },
            "logo-gumby": {
                o: "gumby.jpg",
                left: 277,
                top: 29,
                width: 98,
                height: 156,
                g: 682,
                h: 0,
                a: d,
                click: function() {
                    n("logo-gumby")
                },
                k: function() {
                    o("logo-gumby", c)
                },
                i: function() {
                    o("logo-gumby", d)
                }
            },
            "logo-prickle": {
                o: "prickle.jpg",
                left: 169,
                top: 75,
                width: 65,
                height: 102,
                g: 270,
                h: 0,
                a: d,
                click: function() {
                    n("logo-prickle")
                },
                k: function() {
                    o("logo-prickle", c)
                },
                i: function() {
                    o("logo-prickle", d)
                }
            },
            "logo-prickle-hold": {
                left: 169,
                top: 75,
                width: 65,
                height: 102,
                g: 270,
                h: 0,
                a: d,
                click: function() {
                    p("logo-prickle", "logo-prickle-hold", c)
                },
                k: function() {
                    o("logo-prickle-hold", c)
                },
                i: function() {
                    o("logo-prickle-hold", d)
                }
            },
            "logo-pokey": {
                o: "pokey.png",
                left: 354,
                top: 85,
                width: 75,
                height: 108,
                frames: 101,
                g: 534,
                h: 0,
                a: d,
                click: function() {
                    n("logo-pokey")
                },
                k: function() {
                    o("logo-pokey", c)
                },
                i: function() {
                    o("logo-pokey", d)
                }
            },
            "logo-pokey-hold": {
                left: 354,
                top: 85,
                width: 75,
                height: 108,
                frames: 101,
                g: 534,
                h: 0,
                a: d,
                click: function() {
                    p("logo-pokey", "logo-pokey-hold", c)
                },
                k: function() {
                    o("logo-pokey-hold", c)
                },
                i: function() {
                    o("logo-pokey-hold", d)
                }
            }
        },
        s = d,
        t = function(a, f) {
            var b = q[a];
            this.id = a;
            this.element = document.getElementById(this.id);
            this.g = b.g || 0;
            this.frame = 0;
            this.frames = b.frames;
            this.d = d;
            this.width = b.width;
            this.s = f || {}
        };
        t.prototype.start = function(a) {
            if (!a && !this.d) {
                this.d = c;
                q[this.id].a = c;
                this.frame = 0
            }
        };
        t.prototype.a = function() {
            return this.d
        };
        t.prototype.w = function() {
            if (this.s) {
                var a = this.s[this.frame];
                a && a()
            }
        };
        t.prototype.animate = function() {
            this.frame++;
            if (this.frame == this.frames) {
                this.d = d;
                q[this.id].a = d
            } else {
                u(this.element, this.g + this.frame * this.width, this.h);
                this.w()
            }
        };
        var n = function(a) {
            if (!q[a].a) {
                k = 0; (a = l[a]) && a.start(void 0);
                if (!google.doodle.d) {
                    google.doodle.d = c;
                    r()
                }
            }
        },
        v = function() {
            for (var a in q) q[a].a = d
        },
        r = function() {
            if (google.doodle.d) {
                for (var a in l) {
                    var f = l[a];
                    f && f.a() && f.animate()
                }
                if (++k < 370) google.doodle.timeout = window.setTimeout(r, 84);
                else {
                    google.doodle.d = d;
                    v()
                }
            }
        },
        w = function(a, f, b, e, i) {
            t.call(this, a);
            this.v = f;
            this.frames = this.v.length;
            this.s = b || {};
            this.C = e || -1;
            this.z = i || -1
        },
        x = function() {};
        x.prototype = t.prototype;
        w.F = t.prototype;
        w.prototype = new x;
        w.prototype.start = function(a) {
            if (!a) {
                if (!this.d) {
                    this.d = c;
                    q[this.id].a = c;
                    this.frame = 0;
                    if (this.id != "logo-gumby-loop") this.element.style.cursor = "default"
                }
                this.x = this.element.offsetLeft;
                this.h = 0
            }
        };
        w.prototype.animate = function() {
            this.frame++;
            if (this.frame == this.frames) {
                this.d = d;
                q[this.id].a = d;
                this.element.style.cursor = "pointer"
            } else {
                if (!s && this.frame == this.z) this.frame = this.C;
                if (this.id == "logo-gumby-loop" && s && this.frame == 85) this.frame = 90;
                u(this.element, this.g + this.v[this.frame] * this.width, this.h);
                this.w()
            }
        };
        var u = function(a, f, b) {
            a.style.backgroundPosition = -f + "px -" + b + "px"
        },
        y = function(a) {
            return typeof a != "undefined"
        },
        z = function() {},
        o = function(a, f) {
            var b = q[a];
            b.a || u(document.getElementById(a), b.g + (f ? b.width: 0), b.h)
        },
        p = function(a, f, b) {
            a != "logo-gumby-loop" && (s = c);
            var e = q[a],
            i = document.createElement("img");
            i.onload = function() {
                var e = q[a],
                i = document.getElementById(a),
                E = document.getElementById(f);
                i.style.background = "url(./images/gumby11-" + e.o + ") -" + e.g + "px -" + e.h + "px";
                i.style.display = "block";
                E.style.display = "none";
                b && n(a)
            };
            i.src = "./images/gumby11-" + e.o
        },
        A = function(a, f, b) {
            if (a) {
                if (!google.doodle.p) google.doodle.p = [];
                google.doodle.p.push(arguments);
                var e = a,
                i = f,
                B = b;
                e.addEventListener ? e.addEventListener(i, B, d) : e.attachEvent("on" + i, B)
            }
        },
        C = function(a, f, b) {
            a && (a.removeEventListener ? a.removeEventListener(f, b, d) : a.detachEvent("on" + f, b))
        },
        D = function() {
            if (google.rein && google.dstr && !google.doodle.B) {
                google.doodle.B = c;
                google.rein.push(D);
                google.dstr.push(F)
            }
            if (document.getElementById("hplogo") && !google.doodle.d) {
                google.doodle.d = c;
                google.A && (google.A.q && google.msg) && google.msg.listen(22,
                function() {
                    F();
                    return c
                });
                if (m) try {
                    document.execCommand("BackgroundImageCache", d, c)
                } catch(a) {}
                k = 0;
                google.doodle.d = d;
                google.doodle.timeout = null;
                l = {};
                A(document, "mousemove", z);
                for (var f in q) {
                    var b = q[f],
                    e = document.getElementById(f);
                    if (!e) throw "Invalid ID: " + f;
                    b.o && u(e, b.g || 0, b.h || 0);
                    if (y(b.left)) e.style.left = (b.left || 0) + "px";
                    if (y(b.top)) e.style.top = (b.top || 0) + "px";
                    if (b.width) e.style.width = (b.D || b.width || 0) + "px";
                    if (b.height) e.style.height = (b.height || 0) + "px";
                    if (y(b.display)) e.style.display = b.display;
                    if (b.click) {
                        A(e, "click", b.click);
                        e.style.cursor = "pointer"
                    }
                    b.k && A(e, "mouseover", b.k);
                    b.i && A(e, "mouseout", b.i)
                }
                f = [new w("logo-gumby-loop", [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 12, 12, 12, 30, 11, 31, 32, 33, 34, 35, 36, 36, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50, 51, 51, 52, 52, 52, 52, 34, 33, 32, 31, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 84, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 84, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 0], {
                    191 : function() {
                        p("logo-gumby", "logo-gumby-loop", d)
                    }
                },
                14, 89), new w("logo-gumby", [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 12, 12, 12, 30, 11, 31, 32, 33, 34, 35, 36, 36, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50, 51, 51, 52, 52, 52, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 84, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 84, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 0]), new w("logo-blockheads", [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 52, 53, 54, 55, 56, 57, 58, 56, 0]), new w("logo-goo", [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 52, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 73, 73, 73, 73, 73, 73, 74, 75, 76, 77, 0]), new w("logo-pokey", [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50, 51, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 56, 63, 64, 65, 63, 64, 65, 63, 66, 67, 0]), new w("logo-prickle", [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11, 12, 13, 13, 13, 13, 13, 13, 12, 13, 13, 12, 13, 13, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 24, 24, 24, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 36, 37, 38, 39, 39, 39, 39, 39, 40, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 0])];
                for (b = 0; e = f[b++];) {
                    if (l[e.id]) break;
                    l[e.id] = e
                }
                r();
                p("logo-gumby-loop", "logo-gumby-hold", c)
            }
        },
        F = function() {
            google.doodle.d = d;
            v();
            if (google.doodle.timeout) {
                window.clearTimeout(google.doodle.timeout);
                google.doodle.timeout = null
            }
            if (j) {
                window.clearTimeout(j);
                j = null
            }
            if (google.doodle.p) for (var a; a = google.doodle.p.pop();) C.apply(null, a)
        };
        google.doodle.cpDestroy = F;
        google.x ? google.x({
            id: "DOODLE"
        },
        D) : D()
    } catch(G) {
        google.ml(G, d, {
            cause: "DOODLE"
        })
    };
})();