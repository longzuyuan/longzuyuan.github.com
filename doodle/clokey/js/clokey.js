(function() {
    var boolYes = !0, boolNo = !1;
    window.google = window.google || {};
    window.google.ml = function() {};
    //������ a ָ�� #
    for (var allTagA = document.getElementsByTagName("A"), i = 0; i < allTagA.length; ++i)
       allTagA[i].href = "#";
    google.nav || (google.nav = {});
    google.nav.go = function() {};
    
    var j;
    try {
        google.doodle || (google.doodle = {});
        var k, l, isIE = 0 <= navigator.userAgent.indexOf("MSIE"),
        allIMG = { //����ͼƬ����
            "logo-blockheads": {
                picture: "blockheads.jpg",
                left: 31,
                top: 35,
                width: 135,
                height: 156,
                frames: 89,
                positionX: 0,
                positionY: 0,
                stopMouseEvent: boolNo,
                click: function() {
                    clickEvent("logo-blockheads")
                },
                over: function() {
                    mouseOverOrOut("logo-blockheads", boolYes)
                },
                out: function() {
                    mouseOverOrOut("logo-blockheads", boolNo)
                }
            },
            "logo-blockheads-hold": {
                left: 31,
                top: 35,
                width: 135,
                height: 156,
                frames: 89,
                positionX: 0,
                positionY: 0,
                stopMouseEvent: boolNo,
                click: function() {
                    clickHoldEvent("logo-blockheads", "logo-blockheads-hold", boolYes)
                },
                over: function() {
                    mouseOverOrOut("logo-blockheads-hold", boolYes)
                },
                out: function() {
                    mouseOverOrOut("logo-blockheads-hold", boolNo)
                }
            },
            "logo-goo": {
                picture: "goo.png",
                left: 227,
                top: 49,
                width: 67,
                height: 144,
                frames: 105,
                positionX: 400,
                positionY: 0,
                stopMouseEvent: boolNo,
                click: function() {
                    clickEvent("logo-goo")
                },
                over: function() {
                    mouseOverOrOut("logo-goo", boolYes)
                },
                out: function() {
                    mouseOverOrOut("logo-goo", boolNo)
                }
            },
            "logo-goo-hold": {
                left: 227,
                top: 49,
                width: 67,
                height: 144,
                frames: 105,
                positionX: 400,
                positionY: 0,
                stopMouseEvent: boolNo,
                click: function() {
                    clickHoldEvent("logo-goo", "logo-goo-hold", boolYes)
                },
                over: function() {
                    mouseOverOrOut("logo-goo-hold", boolYes)
                },
                out: function() {
                    mouseOverOrOut("logo-goo-hold", boolNo)
                }
            },
            "logo-gumby-loop": {
                picture: "gumby.jpg",
                left: 277,
                top: 29,
                width: 98,
                height: 156,
                positionX: 682,
                positionY: 0,
                stopMouseEvent: boolNo,
                click: function() {
                    if (!google.doodle.isInit) {
                        google.doodle.isInit = boolYes;
                        allIMG["logo-gumby-loop"].stopMouseEvent = boolYes;
                        k = 0;
                        playAnimate()
                    }
                    s = boolYes
                }
            },
            "logo-gumby": {
                picture: "gumby.jpg",
                left: 277,
                top: 29,
                width: 98,
                height: 156,
                positionX: 682,
                positionY: 0,
                stopMouseEvent: boolNo,
                click: function() {
                    clickEvent("logo-gumby")
                },
                over: function() {
                    mouseOverOrOut("logo-gumby", boolYes)
                },
                out: function() {
                    mouseOverOrOut("logo-gumby", boolNo)
                }
            },
            "logo-prickle": {
                picture: "prickle.jpg",
                left: 169,
                top: 75,
                width: 65,
                height: 102,
                positionX: 270,
                positionY: 0,
                stopMouseEvent: boolNo,
                click: function() {
                    clickEvent("logo-prickle")
                },
                over: function() {
                    mouseOverOrOut("logo-prickle", boolYes)
                },
                out: function() {
                    mouseOverOrOut("logo-prickle", boolNo)
                }
            },
            "logo-prickle-hold": {
                left: 169,
                top: 75,
                width: 65,
                height: 102,
                positionX: 270,
                positionY: 0,
                stopMouseEvent: boolNo,
                click: function() {
                    clickHoldEvent("logo-prickle", "logo-prickle-hold", boolYes)
                },
                over: function() {
                    mouseOverOrOut("logo-prickle-hold", boolYes)
                },
                out: function() {
                    mouseOverOrOut("logo-prickle-hold", boolNo)
                }
            },
            "logo-pokey": {
                picture: "pokey.png",
                left: 354,
                top: 85,
                width: 75,
                height: 108,
                frames: 101,
                positionX: 534,
                positionY: 0,
                stopMouseEvent: boolNo,
                click: function() {
                    clickEvent("logo-pokey")
                },
                over: function() {
                    mouseOverOrOut("logo-pokey", boolYes)
                },
                out: function() {
                    mouseOverOrOut("logo-pokey", boolNo)
                }
            },
            "logo-pokey-hold": {
                left: 354,
                top: 85,
                width: 75,
                height: 108,
                frames: 101,
                positionX: 534,
                positionY: 0,
                stopMouseEvent: boolNo,
                click: function() {
                    clickHoldEvent("logo-pokey", "logo-pokey-hold", boolYes)
                },
                over: function() {
                    mouseOverOrOut("logo-pokey-hold", boolYes)
                },
                out: function() {
                    mouseOverOrOut("logo-pokey-hold", boolNo)
                }
            }
        },
        s = boolNo,
        model = function(imgName, f) {
            var b = allIMG[imgName];
            this.id = imgName;
            this.element = document.getElementById(this.id);
            this.g = b.positionX || 0;
            this.frame = 0;
            this.frames = b.frames;
            this.playing = boolNo;
            this.width = b.width;
            this.s = f || {}
        };
        model.prototype.start = function(a) {
            if (!a && !this.playing) {
                this.playing = boolYes;
                allIMG[this.id].stopMouseEvent = boolYes;
                this.frame = 0
            }
        };
        //�Ƿ����ڲ���
        model.prototype.isPlaying = function() {
            return this.playing
        };
        model.prototype.w = function() {
            if (this.s) {
                var a = this.s[this.frame];
                a && a()
            }
        };
        model.prototype.animate = function() {
            this.frame++;
            if (this.frame == this.frames) {
                this.playing = d;
                allIMG[this.id].stopMouseEvent = boolNo
            } else {
                setBackgroundPosttion(this.element, this.g + this.frame * this.width, this.h);
                this.w()
            }
        };
        //�����¼�
        var clickEvent = function(divName) {
            if (!allIMG[divName].stopMouseEvent) {
                k = 0; (divName = l[divName]) && divName.start(void 0);
                if (!google.doodle.isInit) {
                    google.doodle.isInit = boolYes;
                    playAnimate()
                }
            }
        },
        //������������¼�����
        openMouseEvent = function() {
            for (var a in allIMG) allIMG[a].stopMouseEvent = boolNo
        },
        //���Ŷ���
        playAnimate = function() {
            if (google.doodle.isInit) {
                for (var a in l) {
                    var f = l[a];
                    f && f.isPlaying() && f.animate()
                }
                if (++k < 370) google.doodle.timeout = window.setTimeout(playAnimate, 84);
                else {
                    google.doodle.isInit = boolNo;
                    openMouseEvent()
                }
            }
        },
        //
        frame = function(name, arr, b, e, i) {
            model.call(this, name);
            this.v = arr;
            this.frames = this.v.length; //֡
            this.s = b || {}; //
            this.C = e || -1;
            this.z = i || -1
        },
        x = function() {};
        x.prototype = model.prototype;
        frame.F = model.prototype;
        frame.prototype = new x;
        frame.prototype.start = function(a) {
            if (!a) {
                if (!this.playing) {
                    this.playing = boolYes;
                    allIMG[this.id].stopMouseEvent = boolYes;
                    this.frame = 0;
                    if (this.id != "logo-gumby-loop") this.element.style.cursor = "default"
                }
                this.x = this.element.offsetLeft;
                this.h = 0
            }
        };
        frame.prototype.animate = function() {
            this.frame++;
            if (this.frame == this.frames) { //�ѵ����һ֡
                this.playing = boolNo;
                allIMG[this.id].stopMouseEvent = boolNo;
                this.element.style.cursor = "pointer"
            } else {
                if (!s && this.frame == this.z) this.frame = this.C;
                if (this.id == "logo-gumby-loop" && s && this.frame == 85) this.frame = 90;
                setBackgroundPosttion(this.element, this.g + this.v[this.frame] * this.width, this.h);
                this.w()
            }
        };
        //����Ԫ�صı���ͼƬλ��backgroundPosition
        var setBackgroundPosttion = function(elem, x, y) {
            elem.style.backgroundPosition = -x + "px -" + y + "px"
        },
        //����Ƿ���
        isDefined = function(obj) {
            return typeof obj != "undefined";
        },
        doNothing = function() {},
        //����ƽ��Ƴ��¼�
        mouseOverOrOut = function(eleName, isOver) {
            var oneImg = allIMG[eleName];
            oneImg.stopMouseEvent || setBackgroundPosttion(document.getElementById(eleName), oneImg.positionX + (isOver ? oneImg.width: 0), oneImg.positionY)
        },
        //�����¼�
        clickHoldEvent = function(divName, holdDivName, callClick) {
            divName != "logo-gumby-loop" && (s = boolYes);
            var e = allIMG[divName],
            newImg = document.createElement("img");
            //ͼƬ������ɺ���ʾdiv������hold div������div click�¼�
            newImg.onload = function() {
                var e = allIMG[divName],
                div = document.getElementById(divName),
                holdDiv = document.getElementById(holdDivName);
                div.style.background = "url(./images/gumby11-" + e.picture + ") -" + e.positionX + "px -" + e.positionY + "px";
                div.style.display = "block";
                holdDiv.style.display = "none";
                callClick && clickEvent(divName);
            };
            newImg.src = "./images/gumby11-" + e.picture
        },
        //ΪobjElement���¼����¼���:eventName����������callFunction
        bindEvent = function(objElement, eventName, callFunction) {
            if (objElement) {
                if (!google.doodle.p) google.doodle.p = [];
                google.doodle.p.push(arguments);
                objElement.addEventListener ? objElement.addEventListener(eventName, callFunction, boolNo)
                		 : objElement.attachEvent("on" + eventName, callFunction);
            }
        },
        //ΪobjElementע���¼����¼���:eventName
        cancelEvent = function(objElement, eventName, b) {
            objElement && (objElement.removeEventListener ? objElement.removeEventListener(eventName, b, boolNo) : objElement.detachEvent("on" + eventName, b))
        },
        //���
        startClokey = function() {
            if (google.rein && google.dstr && !google.doodle.B) {
                google.doodle.B = boolYes;
                google.rein.push(D);
                google.dstr.push(F)
            }
            //hplogo���� ���� doodleû��ʼ��
            if (document.getElementById("hplogo") && !google.doodle.isInit) {
                google.doodle.isInit = boolYes;
                //��IE
                if (isIE) try {
                    document.execCommand("BackgroundImageCache", boolNo, boolYes)
                } catch(a) {}
                k = 0;
                google.doodle.isInit = boolNo;
                google.doodle.timeout = null;
                l = {};
                bindEvent(document, "mousemove", doNothing);
                for (var imgDivId in allIMG) {
                    var arrOneImg = allIMG[imgDivId],
                    imgDiv = document.getElementById(imgDivId);
                    if (!imgDiv) throw "Invalid ID: " + imgDivId;
                    arrOneImg.picture && setBackgroundPosttion(imgDiv, arrOneImg.positionX || 0, arrOneImg.positionY || 0); //��picture
                    if (isDefined(arrOneImg.left)) imgDiv.style.left = (arrOneImg.left || 0) + "px";
                    if (isDefined(arrOneImg.top)) imgDiv.style.top = (arrOneImg.top || 0) + "px";
                    if (arrOneImg.width) imgDiv.style.width = (arrOneImg.D || arrOneImg.width || 0) + "px";
                    if (arrOneImg.height) imgDiv.style.height = (arrOneImg.height || 0) + "px";
                    if (isDefined(arrOneImg.display)) imgDiv.style.display = arrOneImg.display;
                    if (arrOneImg.click) {
                        bindEvent(imgDiv, "click", arrOneImg.click);
                        imgDiv.style.cursor = "pointer"
                    }
                    arrOneImg.over && bindEvent(imgDiv, "mouseover", arrOneImg.over);
                    arrOneImg.out && bindEvent(imgDiv, "mouseout", arrOneImg.out)
                }
                allFrames = [new frame("logo-gumby-loop", [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 12, 12, 12, 30, 11, 31, 32, 33, 34, 35, 36, 36, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50, 51, 51, 52, 52, 52, 52, 34, 33, 32, 31, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 84, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 84, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 0]
                	, {
                    191 : function() {
                        clickHoldEvent("logo-gumby", "logo-gumby-loop", boolNo)
                    } }, 14, 89), 
                	new frame("logo-gumby", [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 12, 12, 12, 30, 11, 31, 32, 33, 34, 35, 36, 36, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50, 51, 51, 52, 52, 52, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 84, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 84, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 0]), 
                	new frame("logo-blockheads", [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 52, 53, 54, 55, 56, 57, 58, 56, 0]), 
               		new frame("logo-goo", [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 52, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 73, 73, 73, 73, 73, 73, 74, 75, 76, 77, 0]), 
                	new frame("logo-pokey", [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50, 51, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 56, 63, 64, 65, 63, 64, 65, 63, 66, 67, 0]), 
                	new frame("logo-prickle", [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11, 12, 13, 13, 13, 13, 13, 13, 12, 13, 13, 12, 13, 13, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 24, 24, 24, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 36, 37, 38, 39, 39, 39, 39, 39, 40, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 0])];
                for (b = 0; oneFrame = allFrames[b++];) {
                    if (l[oneFrame.id]) break;
                    l[oneFrame.id] = oneFrame
                }
                playAnimate();
                clickHoldEvent("logo-gumby-loop", "logo-gumby-hold", boolYes)
            }
        };
        //��ʼ
        startClokey();
    } catch(G) {
        google.ml(G, boolNo, {
            cause: "DOODLE"
        })
    };
})();