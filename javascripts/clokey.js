(function() {
    var boolYes = !0, boolNo = !1;
    window.long = window.long || {};
				var counter, isIE = 0 <= navigator.userAgent.indexOf("MSIE"), allModel = {},
        allButton = { //所有图片数组
            "button1": {
                picture: "toolbar.png",
                text: "A",
                left: 31,
                top: 35,
                width: 51,
                height: 37,
                frames: 5,
                positionX: 0,
                positionY: 0,
                stopMouseEvent: boolNo,
                click: function() {
                    clickEvent("button1")
                },
                over: function() {
                    mouseOverOrOut("button1", boolYes)
                },
                out: function() {
                    mouseOverOrOut("button1", boolNo)
                }
            },
            "button2": {
                picture: "toolbar.png",
                text: "B",
                left: 31,
                top: 35,
                width: 51,
                height: 37,
                frames: 5,
                positionX: 0,
                positionY: 37,
                stopMouseEvent: boolNo,
                click: function() {
                    clickEvent("button2")
                },
                over: function() {
                    mouseOverOrOut("button2", boolYes)
                },
                out: function() {
                    mouseOverOrOut("button2", boolNo)
                }
            },
            "button3": {
                picture: "toolbar.png",
                text: "C",
                left: 131,
                top: 35,
                width: 51,
                height: 37,
                frames: 5,
                positionX: 0,
                positionY: 74,
                stopMouseEvent: boolNo,
                click: function() {
                    clickEvent("button3")
                },
                over: function() {
                    mouseOverOrOut("button3", boolYes)
                },
                out: function() {
                    mouseOverOrOut("button3", boolNo)
                }
            },
            "button4": {
                picture: "toolbar.png",
                text: "D",
                left: 131,
                top: 35,
                width: 51,
                height: 37,
                frames: 5,
                positionX: 0,
                positionY: 111,
                stopMouseEvent: boolNo,
                click: function() {
                    clickEvent("button4")
                },
                over: function() {
                    mouseOverOrOut("button4", boolYes)
                },
                out: function() {
                    mouseOverOrOut("button4", boolNo)
                }
            },
            "button5": {
                picture: "toolbar.png",
                text: "E",
                left: 131,
                top: 35,
                width: 51,
                height: 37,
                frames: 5,
                positionX: 0,
                positionY: 148,
                stopMouseEvent: boolNo,
                click: function() {
                    clickEvent("button5")
                },
                over: function() {
                    mouseOverOrOut("button5", boolYes)
                },
                out: function() {
                    mouseOverOrOut("button5", boolNo)
                }
            },
            "button6": {
                picture: "toolbar.png",
                text: "F",
                left: 131,
                top: 35,
                width: 51,
                height: 37,
                frames: 5,
                positionX: 0,
                positionY: 185,
                stopMouseEvent: boolNo,
                click: function() {
                    clickEvent("button6")
                },
                over: function() {
                    mouseOverOrOut("button6", boolYes)
                },
                out: function() {
                    mouseOverOrOut("button6", boolNo)
                }
            },
            "button7": {
                picture: "toolbar.png",
                text: "G",
                left: 131,
                top: 35,
                width: 51,
                height: 37,
                frames: 5,
                positionX: 0,
                positionY: 222,
                stopMouseEvent: boolNo,
                click: function() {
                    clickEvent("button7")
                },
                over: function() {
                    mouseOverOrOut("button7", boolYes)
                },
                out: function() {
                    mouseOverOrOut("button7", boolNo)
                }
            }
        };
        var model = function(imgName, f) {
            var b = allButton[imgName];
            this.id = imgName;
            this.element = document.getElementById(this.id);
            this.frame = 0;
            this.frames = b.frames;
            this.playing = boolNo;
            this.width = b.width;
            this.text = b.text;
            this.startX = b.positionX || 0;
            this.startY = b.positionY || 0;
            this.over = 1;
        };
        model.prototype.start = function(a) {
            if (!a && !this.playing) {
                this.playing = boolYes;
                allButton[this.id].stopMouseEvent = boolYes;
                //this.frame = 0
                this.over ? this.frame = 0 : this.frame = 5;
            }
        };
        //是否正在播放
        model.prototype.isPlaying = function() {
            return this.playing
        };
        model.prototype.animate = function() {
            this.over ? this.frame++ : this.frame--;
            if (this.frame == this.frames || this.frame == -1) {
                this.playing = boolNo;
                allButton[this.id].stopMouseEvent = boolNo
            } else {
                setBackgroundPosttion(this.element, this.startX + this.frame * this.width, this.startY);
                //this.w()
            }
        };
        //设置元素的背景图片位置backgroundPosition
        var setBackgroundPosttion = function(elem, x, y) {
            elem.style.backgroundPosition = -x + "px -" + y + "px"
        },
        //检查是否定义
        isDefined = function(obj) {
            return typeof obj != "undefined";
        },
        doNothing = function() {},
        //鼠标移进移出事件
        mouseOverOrOut = function(divName, isOver) {
        		counter = 0;
            var model = allModel[divName];
            model.over = isOver; 
            if(isOver) model.element.innerHTML = "<span>" + model.text + "</span>";
            else model.element.innerHTML = "";
            if (!model.stopMouseEvent) { //动画还没启动，则启动
                model.start(void 0);
                if (!long.isInit) {
                    long.isInit = boolYes;
                		playAnimate();
                }
            }
        },
        //单击事件
        clickEvent = function(divName) { 
            
        },
        playAnimate = function() {
            if (long.isInit) {
                for (var a in allModel) {
                    var f = allModel[a];
                    f && f.isPlaying() && f.animate()
                }
              long.timeout = window.setTimeout(playAnimate, 84);
              if(counter++ > 5) {
              	long.isInit = boolNo;
              	openMouseEvent()
            	}
            }
        },
        //开启所有鼠标事件开关
        openMouseEvent = function() {
            for (var a in allButton) allButton[a].stopMouseEvent = boolNo;
        },
        //为objElement绑定事件，事件名:eventName，触发函数callFunction
        bindEvent = function(objElement, eventName, callFunction) {
            if (objElement) {
                objElement.addEventListener ? objElement.addEventListener(eventName, callFunction, boolNo)
                		 : objElement.attachEvent("on" + eventName, callFunction);
            }
        },
        //为objElement注销事件，事件名:eventName
        cancelEvent = function(objElement, eventName, b) {
            objElement && (objElement.removeEventListener ? objElement.removeEventListener(eventName, b, boolNo) : objElement.detachEvent("on" + eventName, b))
        },
        start = function() {
            //hplogo存在 并且 doodle没初始化
            if (document.getElementById("button_bar") && !long.isInit) {
              long.isInit = boolNo;
        			bindEvent(document, "mousemove", doNothing);
              for (var btn in allButton) {
                  var arrOneImg = allButton[btn],
                  imgDiv = document.getElementById(btn);
                  if (!imgDiv) throw "Invalid ID: " + btn;
                  arrOneImg.picture && setBackgroundPosttion(imgDiv, arrOneImg.positionX || 0, arrOneImg.positionY || 0); //有picture
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
              		allModel[btn] = new model(btn);
              }
            }
        };
        start();
})();
(function() {
    var boolYes = !0, boolNo = !1;
    window.google = window.google || {};
    window.google.ml = function() {};
    //把所有 a 指向 #
    for (var allTagA = document.getElementsByTagName("A"), i = 0; i < allTagA.length; ++i)
       allTagA[i].href = "#";
    google.nav || (google.nav = {});
    google.nav.go = function() {};
    
    var j;
    //try {
        google.doodle || (google.doodle = {});
        var k, l, isIE = 0 <= navigator.userAgent.indexOf("MSIE"),
        allIMG = { //所有图片数组
            "logo-gumby-loop": {
                picture: "gumby.jpg",
                left: 0,
                top: 0,
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
                left: 0,
                top: 0,
                width: 98,
                height: 156,
                positionX: 682,
                positionY: 0,
                stopMouseEvent: boolNo,
                click: function() {
                    clickEvent("logo-gumby"); 
                },
                over: function() {
                    mouseOverOrOut("logo-gumby", boolYes)
                },
                out: function() {
                    mouseOverOrOut("logo-gumby", boolNo)
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
        //是否正在播放
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
        //单击事件
        var clickEvent = function(divName) {
            if (!allIMG[divName].stopMouseEvent) {
                k = 0; (divName = l[divName]) && divName.start(void 0);
                if (!google.doodle.isInit) {
                    google.doodle.isInit = boolYes;
                    playAnimate()
                }
            }
        },
        //开启所有鼠标事件开关
        openMouseEvent = function() {
            for (var a in allIMG) allIMG[a].stopMouseEvent = boolNo
        },
        //播放动画
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
            this.frames = this.v.length; //帧
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
            if (this.frame == this.frames) { //已到最后一帧
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
        //设置元素的背景图片位置backgroundPosition
        var setBackgroundPosttion = function(elem, x, y) {
            elem.style.backgroundPosition = -x + "px -" + y + "px"
        },
        //检查是否定义
        isDefined = function(obj) {
            return typeof obj != "undefined";
        },
        doNothing = function() {},
        //鼠标移进移出事件
        mouseOverOrOut = function(eleName, isOver) {
            var oneImg = allIMG[eleName];
            oneImg.stopMouseEvent || setBackgroundPosttion(document.getElementById(eleName), oneImg.positionX + (isOver ? oneImg.width: 0), oneImg.positionY)
        },
        //单击事件
        clickHoldEvent = function(divName, holdDivName, callClick) {
            divName != "logo-gumby-loop" && (s = boolYes);
            var e = allIMG[divName],
            newImg = document.createElement("img");
            //图片加载完成后显示div，隐藏hold div，调用div click事件
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
        //为objElement绑定事件，事件名:eventName，触发函数callFunction
        bindEvent = function(objElement, eventName, callFunction) {
            if (objElement) {
                if (!google.doodle.p) google.doodle.p = [];
                google.doodle.p.push(arguments);
                objElement.addEventListener ? objElement.addEventListener(eventName, callFunction, boolNo)
                		 : objElement.attachEvent("on" + eventName, callFunction);
            }
        },
        //为objElement注销事件，事件名:eventName
        cancelEvent = function(objElement, eventName, b) {
            objElement && (objElement.removeEventListener ? objElement.removeEventListener(eventName, b, boolNo) : objElement.detachEvent("on" + eventName, b))
        },
        //入口
        startClokey = function() {
            if (google.rein && google.dstr && !google.doodle.B) {
                google.doodle.B = boolYes;
                google.rein.push(D);
                google.dstr.push(F)
            }
            //hplogo存在 并且 doodle没初始化
            if (document.getElementById("hplogo") && !google.doodle.isInit) {
                google.doodle.isInit = boolYes;
                //是IE
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
                    arrOneImg.picture && setBackgroundPosttion(imgDiv, arrOneImg.positionX || 0, arrOneImg.positionY || 0); //有picture
                    if (isDefined(arrOneImg.left)) imgDiv.style.left = (arrOneImg.left || 0) + "px";
                    if (isDefined(arrOneImg.top)) imgDiv.style.top = (arrOneImg.top || 0) + "px";
                    if (arrOneImg.width) imgDiv.style.width = (arrOneImg.D || arrOneImg.width || 0) + "px";
                    if (arrOneImg.height) imgDiv.style.height = (arrOneImg.height || 0) + "px";
                    if (isDefined(arrOneImg.display)) imgDiv.style.display = arrOneImg.display;
                    if (arrOneImg.click) {
                        bindEvent(imgDiv, "click", arrOneImg.click);
                        imgDiv.style.cursor = "pointer";
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
                ];
                for (b = 0; oneFrame = allFrames[b++];) {
                    if (l[oneFrame.id]) break;
                    l[oneFrame.id] = oneFrame
                }
                playAnimate();
                clickHoldEvent("logo-gumby-loop", "logo-gumby-hold", boolYes)
            }
        };
        //开始
        startClokey();
    //} catch(G) {
    //    google.ml(G, boolNo, {
    //        cause: "DOODLE"
    //    })
    //};
})();