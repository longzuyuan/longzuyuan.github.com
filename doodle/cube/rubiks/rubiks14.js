(function(){var k,m=this,aa=function(){},n=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},p=function(a){return"string"==typeof a},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
ba:ca;return q.apply(null,arguments)},da=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},ea=Date.now||function(){return+new Date},fa=function(a){a=a.split(".");var b=m;a[0]in b||!b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length?b[c]?b=b[c]:b=b[c]={}:b[c]=!0},s=function(a,b){function c(){}c.prototype=b.prototype;a.C=b.prototype;a.prototype=new c;a.ia=function(a,c,f){return b.prototype[c].apply(a,
Array.prototype.slice.call(arguments,2))}};var t,ga,ha,u,v;var w=function(){};w.prototype.R=!1;w.prototype.Z=function(){this.R||(this.R=!0,this.i())};w.prototype.i=function(){if(this.w)for(;this.w.length;)this.w.shift()()};var x=function(a){a&&"function"==typeof a.Z&&a.Z()};var y=function(a,b){return-1!=a.indexOf(b)},ia=function(a,b){return a<b?-1:a>b?1:0};var z=Array.prototype,ja=z.indexOf?function(a,b,c){return z.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ka=function(a){return z.concat.apply(z,arguments)};var A=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};A.prototype.G=function(){return new A(this.x,this.y)};A.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};var la=function(a,b){this.width=a;this.height=b};la.prototype.G=function(){return new la(this.width,this.height)};la.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};var ma="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),na=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ma.length;f++)c=ma[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var B;i:{var oa=m.navigator;if(oa){var pa=oa.userAgent;if(pa){B=pa;break i}}B=""};var qa=y(B,"Opera")||y(B,"OPR"),C=y(B,"Trident")||y(B,"MSIE"),D=y(B,"Gecko")&&!y(B.toLowerCase(),"webkit")&&!(y(B,"Trident")||y(B,"MSIE")),E=y(B.toLowerCase(),"webkit"),ra=function(){var a=m.document;return a?a.documentMode:void 0},sa=function(){var a="",b;if(qa&&m.opera)return a=m.opera.version,"function"==n(a)?a():a;D?b=/rv\:([^\);]+)(\)|;)/:C?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:E&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(B))?a[1]:"");return C&&(b=ra(),b>parseFloat(a))?String(b):a}(),ta={},F=function(a){var b;
if(!(b=ta[a])){b=0;for(var c=String(sa).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",l=RegExp("(\\d*)(\\D*)","g"),r=RegExp("(\\d*)(\\D*)","g");do{var J=l.exec(g)||["","",""],K=r.exec(h)||["","",""];if(0==J[0].length&&0==K[0].length)break;b=ia(0==J[1].length?0:parseInt(J[1],10),0==K[1].length?0:parseInt(K[1],10))||ia(0==J[2].length,0==K[2].length)||ia(J[2],K[2])}while(0==
b)}b=ta[a]=0<=b}return b},ua=m.document,va=ua&&C?ra()||("CSS1Compat"==ua.compatMode?parseInt(sa,10):5):void 0;!D&&!C||C&&C&&9<=va||D&&F("1.9.1");C&&F("9");var wa=function(){var a,b,c,d;a=document;if(a.querySelectorAll&&a.querySelector)return a.querySelectorAll(".gbip");if(a.getElementsByClassName){var e=a.getElementsByClassName("gbip");return e}e=a.getElementsByTagName("*");d={};for(b=c=0;a=e[b];b++){var f=a.className,g;if(g="function"==typeof f.split)g=0<=ja(f.split(/\s+/),"gbip");g&&(d[c++]=a)}d.length=c;return d},G=function(a){a&&a.parentNode&&a.parentNode.removeChild(a)};var xa="StopIteration"in m?m.StopIteration:Error("a"),ya=function(){};ya.prototype.i=function(){throw xa;};ya.prototype.s=function(){return this};var H=function(a,b){this.k={};this.i=[];this.p=this.o=0;var c=arguments.length;if(1<c){if(c%2)throw Error("b");for(var d=0;d<c;d+=2)za(this,arguments[d],arguments[d+1])}else if(a){var e;if(a instanceof H)e=a.K(),d=a.J();else{var c=[],f=0;for(e in a)c[f++]=e;e=c;c=[];f=0;for(d in a)c[f++]=a[d];d=c}for(c=0;c<e.length;c++)za(this,e[c],d[c])}};H.prototype.J=function(){Aa(this);for(var a=[],b=0;b<this.i.length;b++)a.push(this.k[this.i[b]]);return a};H.prototype.K=function(){Aa(this);return this.i.concat()};
H.prototype.remove=function(a){return I(this.k,a)?(delete this.k[a],this.o--,this.p++,this.i.length>2*this.o&&Aa(this),!0):!1};var Aa=function(a){if(a.o!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];I(a.k,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.o!=a.i.length){for(var e={},c=b=0;b<a.i.length;)d=a.i[b],I(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}},Ba=function(a,b){return I(a.k,b)?a.k[b]:void 0},za=function(a,b,c){I(a.k,b)||(a.o++,a.i.push(b),a.p++);a.k[b]=c};
H.prototype.forEach=function(a,b){for(var c=this.K(),d=0;d<c.length;d++){var e=c[d];a.call(b,Ba(this,e),e,this)}};H.prototype.G=function(){return new H(this)};H.prototype.s=function(a){Aa(this);var b=0,c=this.i,d=this.k,e=this.p,f=this,g=new ya;g.i=function(){for(;;){if(e!=f.p)throw Error("c");if(b>=c.length)throw xa;var g=c[b++];return a?g:d[g]}};return g};var I=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var Ca=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),Ea=function(a){if(Da){Da=!1;var b=m.location;if(b){var c=b.href;if(c&&(c=(c=Ea(c)[3]||null)&&decodeURIComponent(c))&&c!=b.hostname)throw Da=!0,Error();}}return a.match(Ca)},Da=E;var L=function(a,b){var c;a instanceof L?(this.I=void 0!==b?b:a.I,Fa(this,a.M),this.Y=a.Y,this.S=a.S,Ga(this,a.X),this.Q=a.Q,Ha(this,a.F.G()),this.W=a.W):a&&(c=Ea(String(a)))?(this.I=!!b,Fa(this,c[1]||"",!0),this.Y=Ia(c[2]||""),this.S=Ia(c[3]||""),Ga(this,c[4]),this.Q=Ia(c[5]||""),Ha(this,c[6]||"",!0),this.W=Ia(c[7]||"")):(this.I=!!b,this.F=new M(null,0,this.I))};k=L.prototype;k.M="";k.Y="";k.S="";k.X=null;k.Q="";k.W="";k.I=!1;
k.toString=function(){var a=[],b=this.M;b&&a.push(Ja(b,Ka),":");if(b=this.S){a.push("//");var c=this.Y;c&&a.push(Ja(c,Ka),"@");a.push(encodeURIComponent(String(b)));b=this.X;null!=b&&a.push(":",String(b))}if(b=this.Q)this.S&&"/"!=b.charAt(0)&&a.push("/"),a.push(Ja(b,"/"==b.charAt(0)?La:Ma));(b=this.F.toString())&&a.push("?",b);(b=this.W)&&a.push("#",Ja(b,Na));return a.join("")};k.G=function(){return new L(this)};
var Fa=function(a,b,c){a.M=c?Ia(b):b;a.M&&(a.M=a.M.replace(/:$/,""))},Ga=function(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("d`"+b);a.X=b}else a.X=null},Ha=function(a,b,c){b instanceof M?(a.F=b,Oa(a.F,a.I)):(c||(b=Ja(b,Pa)),a.F=new M(b,0,a.I))},Ia=function(a){return a?decodeURIComponent(a):""},Ja=function(a,b){return p(a)?encodeURI(a).replace(b,Qa):null},Qa=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},Ka=/[#\/\?@]/g,Ma=/[\#\?:]/g,La=/[\#\?]/g,Pa=/[\#\?@]/g,
Na=/#/g,M=function(a,b,c){this.k=a||null;this.p=!!c},O=function(a){if(!a.i&&(a.i=new H,a.o=0,a.k))for(var b=a.k.split("&"),c=0;c<b.length;c++){var d=b[c].indexOf("="),e=null,f=null;0<=d?(e=b[c].substring(0,d),f=b[c].substring(d+1)):e=b[c];e=decodeURIComponent(e.replace(/\+/g," "));e=N(a,e);a.add(e,f?decodeURIComponent(f.replace(/\+/g," ")):"")}};M.prototype.i=null;M.prototype.o=null;
M.prototype.add=function(a,b){O(this);this.k=null;a=N(this,a);var c=Ba(this.i,a);c||za(this.i,a,c=[]);c.push(b);this.o++;return this};M.prototype.remove=function(a){O(this);a=N(this,a);return I(this.i.k,a)?(this.k=null,this.o-=Ba(this.i,a).length,this.i.remove(a)):!1};var Ra=function(a,b){O(a);b=N(a,b);return I(a.i.k,b)};M.prototype.K=function(){O(this);for(var a=this.i.J(),b=this.i.K(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
M.prototype.J=function(a){O(this);var b=[];if(p(a))Ra(this,a)&&(b=ka(b,Ba(this.i,N(this,a))));else{a=this.i.J();for(var c=0;c<a.length;c++)b=ka(b,a[c])}return b};M.prototype.toString=function(){if(this.k)return this.k;if(!this.i)return"";for(var a=[],b=this.i.K(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.J(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.k=a.join("&")};
M.prototype.G=function(){var a=new M;a.k=this.k;this.i&&(a.i=this.i.G(),a.o=this.o);return a};var N=function(a,b){var c=String(b);a.p&&(c=c.toLowerCase());return c},Oa=function(a,b){b&&!a.p&&(O(a),a.k=null,a.i.forEach(function(a,b){var e=b.toLowerCase();if(b!=e&&(this.remove(b),this.remove(e),0<a.length)){this.k=null;var f=this.i,e=N(this,e),g;g=a.length;if(0<g){for(var h=Array(g),l=0;l<g;l++)h[l]=a[l];g=h}else g=[];za(f,e,g);this.o+=a.length}},a));a.p=b};var Sa=function(a){Sa[" "](a);return a};Sa[" "]=aa;var Ta=!C||C&&9<=va,Ua=C&&!F("9");!E||F("528");D&&F("1.9b")||C&&F("8")||qa&&F("9.5")||E&&F("528");D&&!F("8")||C&&F("9");var P=function(a,b){this.type=a;this.k=this.p=b;this.o=!1;this.ba=!0};P.prototype.Z=function(){};P.prototype.v=function(){this.o=!0};P.prototype.w=function(){this.ba=!1};var R=function(a,b){P.call(this,a?a.type:"");this.k=this.p=null;this.s=this.clientY=this.clientX=0;this.i=null;if(a){this.type=a.type;this.p=a.target||a.srcElement;this.k=b;var c=a.relatedTarget;if(c&&D)try{Sa(c.nodeName)}catch(d){}this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.s=a.keyCode||0;this.i=a;a.defaultPrevented&&this.w()}};s(R,P);
R.prototype.v=function(){R.C.v.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};R.prototype.w=function(){R.C.w.call(this);var a=this.i;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ua)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Va="closure_listenable_"+(1E6*Math.random()|0),Wa=function(a){try{return!(!a||!a[Va])}catch(b){return!1}},Xa=0;var Ya=function(a,b,c,d,e){this.H=a;this.i=null;this.src=b;this.type=c;this.T=!!d;this.V=e;this.da=++Xa;this.L=this.U=!1},Za=function(a){a.L=!0;a.H=null;a.i=null;a.src=null;a.V=null};var $a=function(a){this.src=a;this.i={};this.k=0};$a.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.i[f];a||(a=this.i[f]=[],this.k++);var g=ab(a,b,d,e);-1<g?(b=a[g],c||(b.U=!1)):(b=new Ya(b,this.src,f,!!d,e),b.U=c,a.push(b));return b};$a.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.i))return!1;var e=this.i[a];b=ab(e,b,c,d);return-1<b?(Za(e[b]),z.splice.call(e,b,1),0==e.length&&(delete this.i[a],this.k--),!0):!1};
var bb=function(a,b){var c=b.type;if(!(c in a.i))return!1;var d=a.i[c],e=ja(d,b),f;(f=0<=e)&&z.splice.call(d,e,1);f&&(Za(b),0==a.i[c].length&&(delete a.i[c],a.k--));return f},cb=function(a,b,c,d,e){a=a.i[b.toString()];b=-1;a&&(b=ab(a,c,d,e));return-1<b?a[b]:null},ab=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.L&&f.H==b&&f.T==!!c&&f.V==d)return e}return-1};var db="closure_lm_"+(1E6*Math.random()|0),eb={},fb=0,S=function(a,b,c,d,e){if("array"==n(b)){for(var f=0;f<b.length;f++)S(a,b[f],c,d,e);return null}c=gb(c);if(Wa(a))a=a.listen(b,c,d,e);else{if(!b)throw Error("f");var f=!!d,g=hb(a);g||(a[db]=g=new $a(a));c=g.add(b,c,!1,d,e);c.i||(d=ib(),c.i=d,d.src=a,d.H=c,a.addEventListener?a.addEventListener(b.toString(),d,f):a.attachEvent(jb(b.toString()),d),fb++);a=c}return a},ib=function(){var a=kb,b=Ta?function(c){return a.call(b.src,b.H,c)}:function(c){c=a.call(b.src,
b.H,c);if(!c)return c};return b},lb=function(a,b,c,d,e){if("array"==n(b))for(var f=0;f<b.length;f++)lb(a,b[f],c,d,e);else c=gb(c),Wa(a)?a.unlisten(b,c,d,e):a&&(a=hb(a))&&(b=cb(a,b,c,!!d,e))&&mb(b)},mb=function(a){if("number"==typeof a||!a||a.L)return!1;var b=a.src;if(Wa(b))return bb(b.D,a);var c=a.type,d=a.i;b.removeEventListener?b.removeEventListener(c,d,a.T):b.detachEvent&&b.detachEvent(jb(c),d);fb--;(c=hb(b))?(bb(c,a),0==c.k&&(c.src=null,b[db]=null)):Za(a);return!0},jb=function(a){return a in eb?
eb[a]:eb[a]="on"+a},ob=function(a,b,c,d){var e=1;if(a=hb(a))if(b=a.i[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.T==c&&!f.L&&(e&=!1!==nb(f,d))}return Boolean(e)},nb=function(a,b){var c=a.H,d=a.V||a.src;a.U&&mb(a);return c.call(d,b)},kb=function(a,b){if(a.L)return!0;if(!Ta){var c;if(!(c=b))i:{c=["window","event"];for(var d=m,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break i}c=d}e=c;c=new R(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){i:{var f=!1;if(0==e.keyCode)try{e.keyCode=
-1;break i}catch(g){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.k;f;f=f.parentNode)e.push(f);for(var f=a.type,h=e.length-1;!c.o&&0<=h;h--)c.k=e[h],d&=ob(e[h],f,!0,c);for(h=0;!c.o&&h<e.length;h++)c.k=e[h],d&=ob(e[h],f,!1,c)}return d}return nb(a,new R(b,this))},hb=function(a){a=a[db];return a instanceof $a?a:null},pb="__closure_events_fn_"+(1E9*Math.random()>>>0),gb=function(a){return"function"==n(a)?a:a[pb]||(a[pb]=function(b){return a.handleEvent(b)})};var T=function(){this.D=new $a(this);this.v=this};s(T,w);T.prototype[Va]=!0;T.prototype.o=null;T.prototype.removeEventListener=function(a,b,c,d){lb(this,a,b,c,d)};
var rb=function(a,b){var c,d=a.o;if(d)for(c=[];d;d=d.o)c.push(d);var d=a.v,e=b,f=e.type||e;if(p(e))e=new P(e,d);else if(e instanceof P)e.p=e.p||d;else{var g=e,e=new P(f,d);na(e,g)}var g=!0,h;if(c)for(var l=c.length-1;!e.o&&0<=l;l--)h=e.k=c[l],g=qb(h,f,!0,e)&&g;e.o||(h=e.k=d,g=qb(h,f,!0,e)&&g,e.o||(g=qb(h,f,!1,e)&&g));if(c)for(l=0;!e.o&&l<c.length;l++)h=e.k=c[l],g=qb(h,f,!1,e)&&g;return g};
T.prototype.i=function(){T.C.i.call(this);if(this.D){var a=this.D,b=0,c;for(c in a.i){for(var d=a.i[c],e=0;e<d.length;e++)++b,Za(d[e]);delete a.i[c];a.k--}}this.o=null};T.prototype.listen=function(a,b,c,d){return this.D.add(String(a),b,!1,c,d)};T.prototype.unlisten=function(a,b,c,d){return this.D.remove(String(a),b,c,d)};
var qb=function(a,b,c,d){b=a.D.i[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.L&&g.T==c){var h=g.H,l=g.V||g.src;g.U&&bb(a.D,g);e=!1!==h.call(l,d)&&e}}return e&&!1!=d.ba};var U=function(a){T.call(this);this.k=a;S(a,sb,this.s,!1,this);S(a,"click",this.p,!1,this)};s(U,T);var sb=D?"keypress":"keydown";U.prototype.s=function(a){(13==a.s||E&&3==a.s)&&tb(this,a)};U.prototype.p=function(a){tb(this,a)};var tb=function(a,b){var c=new ub(b);if(rb(a,c)){c=new vb(b);try{rb(a,c)}finally{b.v()}}};U.prototype.i=function(){U.C.i.call(this);lb(this.k,sb,this.s,!1,this);lb(this.k,"click",this.p,!1,this);delete this.k};var vb=function(a){R.call(this,a.i);this.type="action"};s(vb,R);
var ub=function(a){R.call(this,a.i);this.type="beforeaction"};s(ub,R);var V=function(a){this.B=a;this.o={}};s(V,w);var wb=[];V.prototype.listen=function(a,b,c,d){"array"!=n(b)&&(b&&(wb[0]=b.toString()),b=wb);for(var e=0;e<b.length;e++){var f=S(a,b[e],c||this.handleEvent,d||!1,this.B||this);if(!f)break;this.o[f.da]=f}return this};
V.prototype.unlisten=function(a,b,c,d,e){if("array"==n(b))for(var f=0;f<b.length;f++)this.unlisten(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.B||this,c=gb(c),d=!!d,b=Wa(a)?cb(a.D,String(b),c,d,e):a?(a=hb(a))?cb(a,b,c,d,e):null:null,b&&(mb(b),delete this.o[b.da]);return this};V.prototype.i=function(){V.C.i.call(this);var a=this.o,b=mb,c;for(c in a)b.call(void 0,a[c],c,a);this.o={}};V.prototype.handleEvent=function(){throw Error("g");};var zb=function(a){var b=new Image,c=xb,d="";b.onerror=b.onload=b.onabort=function(){delete yb[c]};yb[c]=b;-1!=a.search("&ei=")||(d="&ei=");a="https://www.google.com/gen_204?atyp=i&ct=doodle&cad="+a+d+"&zx="+ea();/^http:/i.test(a)&&"https:"==window.location.protocol?delete yb[c]:(b.src=a,xb=c+1)},yb=[],xb=0;var W=navigator.userAgent,Ab=y(W,"iPad")||y(W,"iPhone")||y(W,"iPod")||y(W,"Android")||y(W,"Mobile")||y(W,"Silk"),Bb=0<=W.indexOf("MSIE"),Cb=Bb&&0<=W.indexOf("MSIE 8."),Db=function(){var a=document.createElement("div");X(a,"position","absolute");Bb&&!Cb&&X(a,"background","rgba(255,255,255,.01)");return a},Eb=function(){var a=Db();X(a,"userSelect","none","MozUserSelect","none","webkitUserSelect","none","webkitTapHighlightColor","rgba(0,0,0,0)");a.unselectable="on";return a},X=function(a,b){for(var c=
1;c<arguments.length;c+=2){var d=arguments[c],e=arguments[c+1],f=a.style;f&&d in f?f[d]=e:d in a?a[d]=e:Bb&&f&&"opacity"==d&&(a.zoom=1,d=(f.filter||"").replace(/alpha\([^)]*\)/,""),isNaN(parseFloat(e))||(d+="alpha(opacity="+100*e+")"),f.filter=d)}},Fb=["Moz","ms","O","webkit"],Gb=function(a,b,c){for(var d=0,e;e=Fb[d++];)a.style[e+b]=c;a.style[b.charAt(0).toLowerCase()+b.substr(1)]=c},Hb=function(){var a=google.doodle?google.doodle.url:"";if(a)if(google.nav&&google.nav.go){var b=a;if(0==a.indexOf("/search")){b=
new L(window.location);b.Q="/search";for(var a=(a instanceof L?a.G():new L(a,void 0)).F,c=a.K(),d=0;d<c.length;d++){var e=c[d],f=b,g=e,e=e?a.J(e):[],e=0<e.length?String(e[0]):void 0,f=f.F;O(f);f.k=null;g=N(f,g);Ra(f,g)&&(f.o-=Ba(f.i,g).length);za(f.i,g,[e]);f.o++}b=b.toString()}google.nav.go(b)}else window.parent?window.parent.location.assign(a):window.location.assign(a)},Ib=function(){return document.getElementById("searchform")||document.getElementById("gbq2")},Jb=function(a){var b=Y,c=Math.max(0,
a-230)+"px";X(b,"width","570px","height",a+"px");(a=document.getElementById("lga"))&&X(a,"marginBottom",c);document.getElementById("fkbx")||((a=Ib())&&X(a,"marginTop",c),c=document.createEvent("UIEvents"),c.initUIEvent("resize",!1,!1,window,0),window.dispatchEvent(c))},Z=function(a){window.google&&window.google.log?window.google.log("doodle",a):zb(a)};var Kb=function(a,b,c,d,e){V.call(this);this.s=a;this.P=b;this.O=c;this.N=d;e&&(this.k&&this.unlisten(this.k,"action",this.p),e&&(this.k=new U(e),a=da(x,this.k),this.w||(this.w=[]),this.w.push(a),this.p=q(this.v,this),this.listen(this.k,"action",this.p)))};s(Kb,V);
Kb.prototype.v=function(){if(Lb()&&!y(B,"Trident")&&!y(B,"MSIE")&&window.gapi&&window.gapi.load)window.gapi.load("share",q(this.A,this)),Z("gplus,li");else{var a=window.open("about:blank");a&&(a.location="https://plus.google.com/share?url="+this.s);Z("gplus,lo")}};var Lb=function(){if(!window.gbar)return!1;var a=!!(window.gbar.sos&&0<window.gbar.sos().length),b=!(!window.gbar.so||!window.gbar.so());return a||b};
Kb.prototype.A=function(){if(window.gapi&&window.gapi.share){var a={items:[{type:"http://schema.org/WebPage",id:location.protocol+"//"+location.host,properties:{url:[this.s],name:[this.P],image:[this.N]}}]},b=window.location.toString().match(/[?&]authuser=(\d+)/),b=b&&b[1],c=Lb()||!!window.google.doodle.sf;window.gapi.share.lightbox(a,{isLoggedInForGooglePlus:c,onLoginPopupBlocked:function(){Z("gplus,popupblocked")},onLoginStateChanged:q(function(){fa("google.doodle.sf");this.A()},this),editorText:this.O,
sessionIndex:b||"",sourceForLogging:"doodle"})}};var Nb=function(a,b,c,d,e,f,g,h){this.B=b;this.A=g;this.o=h||window.location.protocol+(window.google.doodle.shortlink||"//www.google.com");this.k=Db();var l=this;this.p=Mb(c,d);this.p.onclick=function(){(new Kb(l.o,window.google.doodle.alt||"",l.A(4),l.B)).v()};this.k.appendChild(this.p);this.s=Mb(c,e);this.s.onclick=function(){var a=new L("http://www.facebook.com/sharer.php"),b=new M;b.add("u",l.o);Ha(a,b);window.open(a.toString());Z("share,2,x")};this.k.appendChild(this.s);this.v=Mb(c,f);this.v.onclick=
function(){var a=l.A(3)+"\n"+l.o;window.open("http://twitter.com/intent/tweet?status="+encodeURIComponent(String(a)));Z("share,3,x")};this.k.appendChild(this.v);a.appendChild(this.k)};s(Nb,w);var Mb=function(a,b){var c=Ob(a,b);X(c,"cursor","pointer");return c};Nb.prototype.i=function(){G(this.k);Nb.C.i.call(this)};var Pb=function(a){this.p=a;this.k=!1;this.o=[];this.i=new Image},Rb=function(a){if(!a.i.src){var b=function(){if(!a.k){a.k=!0;for(var b=0,d;d=a.o[b];b++)d()}};a.i.onload=b;a.i.src=a.p;(a.i.complete||"complete"==a.i.readyState)&&b()}},Sb=function(a,b){a.k?b():a.o.push(b)};var Tb=function(a,b,c){this.s=a;this.k=b;this.o=c||null;this.i=new Pb(a);this.p=!1;var d=this;Sb(this.i,function(){d.p=!0})},Vb=function(a){var b=Ub;a&&Sb(b.i,a);Rb(b.i)},Wb=function(a,b,c,d){a=a.k[b];if(!a)return"";b=a[4]||1;return-(a[0]/b+(c||0))+"px "+-(a[1]/b+(d||0))+"px"},Xb=function(a,b){var c=a.k[b][4];return c&&1!=c&&a.o?a.o[0]/c+"px "+a.o[1]/c+"px":""},Ob=function(a,b){var c;c=Eb();var d=a.k[b],e=d[2],f=d[3];(d=d[4])&&1!=d&&a.o&&(e=Math.floor(e/d),f=Math.floor(f/d));X(c,"width",e+"px","height",
f+"px");c=[c,"url("+a.s+") "+Wb(a,b,0,0)+" no-repeat",Xb(a,b)];e=c[0];f=c[2];X(e,"background",c[1]);f&&X(e,"backgroundSize",f);return e};var Yb=/Mac OS X.+Silk\//;var Zb=/iPhone|iPod|iPad/.test(navigator.userAgent)||y(navigator.userAgent,"Android")||Yb.test(navigator.userAgent),$b=window.navigator.msPointerEnabled;var ac=function(a,b,c,d){this.v=!!c;this.B=!!d;this.v&&(this.aa=Math.max(800,this.aa));this.k=a;this.ea=b;Zb?a.ontouchstart=q(this.ga,this):a.onmousedown=q(this.fa,this);$b&&(a.style.msTouchAction="none");a.onclick=q(this.ca,this)},bc=[],cc=function(a){bc.push(a);window.setTimeout(function(){var b=bc.indexOf(a);-1!=b&&bc.splice(b,1)},2500)};k=ac.prototype;k.aa=500;k.Z=function(){Zb?this.k.ontouchstart=null:this.k.onmousedown=null;this.k.onclick=null};
k.ga=function(a){this.p&&!this.p(a)||1<(a.touches||[a]).length||(this.B||a.stopPropagation(),this.s=!0,this.v||(this.k.ontouchend=q(this.ca,this),document.body.addEventListener("touchend",dc(this),!1)),document.body.addEventListener("touchmove",ec(this),!1),document.body.addEventListener("touchcancel",dc(this),!1),fc(this),a=a.touches[0],this.i=new A(a.clientX,a.clientY),this.N=window.setTimeout(q(this.w,this,!0),100),this.v||cc(this.i))};
k.fa=function(a){if(!this.p||this.p(a))this.B||a.stopPropagation(),this.s=!0,fc(this),this.w(!0)};k.ca=function(a){if(this.p&&!this.p(a))return this.o(),!0;if(a){if("touchend"==a.type&&!this.s)return!1;a.stopPropagation()}this.w(!0);window.setTimeout(q(function(){this.o();gc(this)&&this.ea(a)},this),0);return!1};
k.ha=function(a){if(1<(a.touches||[a]).length)this.o();else{a=(a.touches||[a])[0];a=new A(a.clientX,a.clientY);var b;if(b=this.i){var c=this.i;b=c.x-a.x;a=c.y-a.y;b=12<Math.sqrt(b*b+a*a)}b&&this.o()}};var ec=function(a){a.A||(a.A=q(a.ha,a));return a.A};
ac.prototype.o=function(){window.clearTimeout(this.N);window.clearTimeout(this.O);this.w(!1);this.s=!1;document.body.removeEventListener&&(document.body.removeEventListener("touchmove",ec(this),!1),document.body.removeEventListener("touchend",dc(this),!1),document.body.removeEventListener("touchcancel",dc(this),!1))};var dc=function(a){a.R||(a.R=q(a.o,a));return a.R};
ac.prototype.w=function(a){if(this.$&&(!a||gc(this))){var b=this.k,c=this.$,d=new RegExp("(?:^| +)"+c+"(?:$| +)"),e=/(?:^| +)(?:$| +)/;a!=d.test(b.className)&&(d=b.className.replace(d," ").replace(e," "),b.className=d+" "+(a?c:""))}};var gc=function(a){if(!document.elementFromPoint||!a.i||void 0===a.i.x)return!0;for(var b=document.elementFromPoint(a.i.x,a.i.y);b;){if(b==a.k)return!0;b=b.parentNode}return!1},fc=function(a){a.P&&(a.O=window.setTimeout(q(function(){this.s=!1;this.P()},a),a.aa))};var hc=[[68,336,30,30,2],[0,944,96,96,2],[0,608,96,96,2],[0,168,96,96,2],[0,844,96,96,2],[0,0,96,96,2],[0,1280,96,96,2],[0,1180,96,96,2],[0,1112,30,30,2],[0,540,64,64,2],[0,472,64,64,2],[0,708,64,64,2],[0,336,64,64,2],[0,100,64,64,2],[0,1044,64,64,2],[34,1112,64,64,2],[0,268,64,64,2],[0,404,64,64,2],[0,776,64,64,2]],ic=[98,1376];var nc=function(a,b,c){this.A=document.createElement("div");X(this.A,"bottom","8px","height","36px","position","absolute","width","100%");a.appendChild(this.A);this.k=document.createElement("div");X(this.k,"height","36px","position","relative","textAlign","right","margin","0 auto","opacity","0","width","572px");Gb(this.k,"Transition","opacity 250ms");this.A.appendChild(this.k);this.o=Eb();X(this.o,"bottom","6px","color","#ddd","cursor","default","font","bold 16pt arial,sans-serif","left","0");this.k.appendChild(this.o);
jc(this,0);this.O=new ac(this.o,c);this.v=new Tb("./rubiks/sprite-ui.png",hc,ic);this.s=new Nb(this.k,"./rubiks/share.png",this.v,11,10,18,function(){return kc()});var d=this.s.k,e=this.s.o;X(d,"opacity","0");Gb(d,"Transition","opacity 250ms");lc(d);mc(this.s.p);mc(this.s.s);mc(this.s.v);this.p=document.createElement("input");this.p.id="hplogosl";this.p.readOnly=!0;this.p.value=e.replace(/.*\/\//,"");X(this.p,"background","#ddd","border","none","color","#fff",
"fontWeight","bold","height","32px","margin","0","outline","none","padding","0 10px","verticalAlign","top","width","125px");Gb(this.p,"BorderRadius","5px");d.insertBefore(this.p,this.s.p);var f=this;this.p.addEventListener("mouseup",function(a){a.preventDefault();f.p.select();a.target.select()});this.B=new $(d,this.v,9,9,function(){window.open("mailto:?subject="+encodeURIComponent(kc())+"&body="+encodeURIComponent(e))});this.$=new $(this.k,this.v,16,17,function(){X(d,"opacity","1"==d.style.opacity?
"0":"1")});this.N=new $(this.k,this.v,12,13,b);this.P=new $(this.k,this.v,14,15,Hb)};s(nc,w);var kc=function(){return(window.google&&window.google.doodle&&window.google.doodle.msgs||{})["Share Message"]||"The Rubik\u2019s Cube is 40! #CubeDoodle"},lc=function(a){X(a,"display","inline-block","position","relative")},mc=function(a){lc(a);X(a,"cursor","pointer","margin","0 0 4px 4px")},jc=function(a,b){a.o&&"number"==typeof b&&(a.o.textContent=a.o.innerText=b)};
nc.prototype.i=function(){this.o&&G(this.o);x(this.N);x(this.P);x(this.$);x(this.B);x(this.s);x(this.O);nc.C.i.call(this)};var $=function(a,b,c,d,e){this.k=Ob(b,c);mc(this.k);a.appendChild(this.k);var f=Wb(b,d),g=Xb(b,d),h=Wb(b,c),l=Xb(b,c),r=this;this.k.onmouseover=function(){X(r.k,"backgroundPosition",f,"backgroundSize",g)};this.k.onmouseout=function(){X(r.k,"backgroundPosition",h,"backgroundSize",l)};this.o=new ac(this.k,e)};s($,w);$.prototype.i=function(){x(this.o);G(this.k);$.C.i.call(this)};var rc=function(a,b,c){var d=oc,e=d.frames;this.p=e.length;this.k=0;c||(c={x:0,y:0});this.i=document.createElement("canvas");this.i.getContext?(b=new pc(this.i,e,b,c),this.i.width=d.width,this.i.height=d.height,a.appendChild(this.i)):b=new qc(a,e,b.src,c);this.o=b},qc=function(a,b,c,d){this.i={};if(Bb)try{document.execCommand("BackgroundImageCache",!1,!0)}catch(e){}for(var f=0;f<b.length;++f){var g=b[f];if(g.length){var h=document.createElement("div");h.style.visibility="hidden";for(var l=0;l<g.length;l++){var r=
g[l],J=r[0],K=r[1],Dc=r[2],Ec=r[3],Fc=r[4],r=r[5],Qb=document.createElement("div"),Q=Qb.style;Q.position="absolute";Q.left=J+"px";Q.top=K+"px";Q.width=Fc+"px";Q.height=r+"px";Q.background="url("+c+") no-repeat "+(-Dc-d.x)+"px "+(-Ec-d.y)+"px";Q.visibility="hidden";h.appendChild(Qb)}a.appendChild(h);this.i[f]=h}}};qc.prototype.p=function(a){if(a=this.i[a])a.style.visibility=""};qc.prototype.o=function(){for(var a=0,b;b=this.i[a];a++)b.style.visibility="hidden"};
var pc=function(a,b,c,d){this.k=a;this.i=a.getContext("2d");this.w=b;this.v=c;this.s=d};pc.prototype.p=function(a){a=this.w[a];for(var b=0;b<a.length;b++){var c=a[b],d=c[4],e=c[5];this.i.drawImage(this.v,c[2]+this.s.x,c[3]+this.s.y,d,e,c[0],c[1],d,e)}};pc.prototype.o=function(){this.i.clearRect(0,0,this.k.width,this.k.height)};var oc={width:576,height:220,frames:[[[194,1,0,610,189,215]],[[194,1,0,216,189,90],[345,108,137,5342,6,6],[340,117,173,5353,3,3],[357,149,125,5351,3,3],[319,165,163,5342,5,6],[235,172,157,5342,5,5],[240,178,153,5348,3,3],[255,191,0,5290,90,17]],[[203,2,0,3969,177,88],[347,109,88,5350,4,5],[357,149,121,5351,3,3],[261,167,137,5349,3,3],[235,172,151,5342,5,5],[332,185,56,5342,21,9],[269,198,50,5324,44,13]],[[200,2,0,4271,172,88],[345,108,123,5340,6,6],[340,117,169,5353,3,3],[235,172,181,5332,8,9],[304,
185,0,5319,49,12],[255,201,129,5349,3,3],[291,205,116,5340,6,6]],[[194,1,0,2808,185,89],[345,108,144,5342,6,6],[340,117,173,5353,3,3],[235,174,100,5340,8,7],[332,189,149,5349,3,3],[255,194,73,5311,58,12],[292,207,181,5342,4,4]],[[194,1,0,2295,187,89],[347,109,153,5352,3,5],[269,197,165,5349,3,3]],[[194,1,0,1290,189,89],[345,108,130,5342,6,6],[235,170,95,5325,43,7],[240,178,157,5348,3,3],[241,194,0,5308,72,10]],[[194,1,0,1166,189,123],[277,125,0,5340,30,7],[372,138,109,5340,6,7],[211,146,0,5101,147,
39],[228,187,0,5233,118,8],[255,196,105,5242,81,8],[297,205,145,5349,3,3],[299,212,125,5347,3,3]],[[194,1,0,826,189,123],[277,125,0,5332,30,7],[375,139,137,5353,3,5],[318,151,133,5353,3,3],[229,157,0,5182,122,28],[228,187,0,5211,120,21],[299,212,121,5347,3,3]],[[194,1,0,523,189,86],[377,90,129,5353,3,4],[345,108,123,5340,6,6],[241,115,0,5278,102,5],[319,165,175,5337,5,6],[235,172,151,5342,5,5],[240,178,157,5348,3,3],[241,191,0,5260,104,17]],[[194,2,0,1812,189,85],[347,109,88,5344,4,5],[340,117,173,
5353,3,3]],[[196,2,0,2601,186,130],[319,165,169,5342,5,6],[235,172,157,5342,5,5],[240,178,153,5348,3,3],[241,191,0,5242,104,17]],[[280,14,186,5342,4,3],[206,20,105,5348,3,3],[271,27,93,5349,3,3],[225,31,134,5337,38,4],[298,36,31,5342,24,6],[204,47,0,4360,171,84],[319,165,175,5337,5,6],[235,172,151,5342,5,5],[240,178,157,5348,3,3],[241,194,91,5296,72,14]],[[280,14,185,5350,3,3],[319,18,175,5344,3,3],[298,23,93,5353,3,3],[225,31,139,5332,41,4],[298,36,113,5348,3,3],[350,49,78,5344,4,5],[224,57,83,5344,
4,5],[200,64,0,4519,171,68]],[[281,14,97,5353,3,3],[206,20,109,5348,3,3],[298,36,117,5347,3,3],[350,52,101,5352,3,4],[224,57,83,5350,4,4],[196,62,0,3721,182,73],[357,149,125,5351,3,3],[319,165,169,5342,5,6],[235,172,157,5342,5,5],[240,178,153,5348,3,3],[241,194,105,5266,72,14]],[[281,11,132,5311,57,6],[206,20,105,5348,3,3],[298,36,113,5348,3,3],[350,54,109,5352,3,3],[195,61,0,2898,185,75],[357,149,121,5351,3,3],[269,197,161,5349,3,3]],[[281,11,132,5318,57,6],[206,20,109,5348,3,3],[350,54,105,5352,
3,4],[195,61,0,2732,186,75],[319,165,175,5337,5,6],[235,172,151,5342,5,5],[240,178,157,5348,3,3],[241,191,0,5260,104,17]],[[280,14,186,5342,4,3],[206,20,105,5348,3,3],[355,24,173,5349,3,3],[298,36,117,5347,3,3],[350,55,113,5352,3,3],[196,61,0,3046,185,74],[319,165,169,5342,5,6],[235,172,157,5342,5,5],[240,178,153,5348,3,3],[241,191,0,5242,104,17]],[[280,14,186,5346,4,3],[206,20,109,5348,3,3],[355,24,169,5349,3,3],[298,36,113,5348,3,3],[286,47,181,5347,3,3],[196,61,0,2974,185,71]],[[280,14,186,5342,
4,3],[206,20,105,5348,3,3],[225,31,165,5353,3,3],[298,36,117,5347,3,3],[286,47,177,5348,3,3],[350,55,78,5350,4,4],[196,61,0,3121,185,73],[319,165,175,5337,5,6],[235,172,151,5342,5,5],[240,178,157,5348,3,3],[241,194,91,5296,72,14]],[[195,1,0,2114,188,180],[241,194,103,5281,72,14]],[[269,5,133,5349,3,3],[353,13,101,5348,3,3],[252,18,117,5351,3,3],[224,22,0,5141,139,11],[358,69,149,5353,3,3],[223,73,31,5338,29,3],[249,78,0,5284,102,5],[199,86,0,3795,181,93],[269,197,139,5325,43,6]],[[353,13,97,5349,
3,3],[231,73,78,5340,21,3],[225,86,0,5163,127,18],[208,108,0,4799,160,73],[241,194,91,5296,72,14],[377,90,145,5353,3,4]],[[249,73,157,5352,3,3],[199,86,0,5082,155,18],[200,106,0,4445,171,73],[241,194,105,5251,72,14]],[[241,31,181,5351,3,3],[249,73,161,5353,3,3],[253,86,93,5344,4,4],[224,93,0,5153,128,9],[198,104,0,3889,178,79],[269,194,95,5333,38,6],[309,201,141,5349,3,3],[377,90,141,5353,3,4]],[[241,31,177,5352,3,3],[249,73,157,5352,3,3],[197,86,0,3195,183,95],[241,194,91,5296,72,14]],[[194,1,0,
950,189,215]],[[194,1,0,1380,189,215]],[[194,1,0,1596,189,215]],[[194,1,0,2385,187,215]],[[195,1,0,3291,182,214]],[[201,3,0,4588,168,210]],[[213,4,0,4873,158,208]],[[204,2,0,4058,176,212]],[[200,1,0,3506,182,214]],[[196,1,0,1898,188,215]],[[195,1,0,307,189,215]],[[194,1,0,0,190,215]]]};var sc=function(a,b){for(var c=0;36>c;++c)oc.frames.push([[]]);this.o=a;this.v=this.o.getContext("2d");var c=document.createElement("div"),d=b.k[0],c=this.p=new rc(c,b.i.i,{x:d[0],y:d[1]});this.A=c.i?c.i:null;this.k=0;this.s=-(oc.width-this.o.width)/2};s(sc,w);
var vc=function(){var a=ha;tc(a);uc(a);a.k=window.setInterval(function(){tc(a)},1E3/18)},uc=function(a){0!=a.k&&window.clearInterval(a.k);a.k=0},tc=function(a){var b=a.p;0==b.k&&b.o.o();b.o.p(b.k);b.k++;b.k=b.k<b.p?b.k:0;a.v.drawImage(a.A,a.s,3)};sc.prototype.i=function(){uc(this);sc.C.i.call(this)};var wc=function(a,b){google&&google.doodle&&(b&&(google.doodle.cpDestroy=b),google.doodle.cpInit=function(){b&&b();a()})},xc=function(a,b,c){if(google){var d=function(){var a=google.msg&&google.msg.unlisten;a&&(a(67,d),c&&a(94,c));b();return!0},e=function(){var a=document.getElementById("hplogo");a&&"hidden"!=a.style.visibility&&(a=google.msg&&google.msg.listen,google.psy&&google.psy.q&&a&&(a(67,d),c&&a(94,c)))};e();google.doodle&&google.doodle.jesr||(fa("google.doodle.jesr"),google.raas&&google.raas("doodle",
{init:function(){e();google.doodle.jesrd&&(a(),google.doodle.jesrd=!1)},dispose:function(){d();google.doodle.jesrd=!0}}))}};var yc=!1,zc=function(a){if(4==a){if(yc)return;yc=!0}var b;b=window.document;b="CSS1Compat"==b.compatMode?b.documentElement:b.body;b=new la(b.clientWidth,b.clientHeight);Z(["rubiks","e:"+a,"t:"+(Ab?"1":"0"),"w:"+(b.width>b.height?"1":"0"),"o:"+("orientation"in window?parseInt(window.orientation,10):"_")].join())};var Y=null,Ub=new Tb("./rubiks/sprite-initial.png",[[0,0,190,5358]]),Ac=-1!=window.location.href.indexOf("fpdoodle=1"),Bc=window.location.protocol+"//"+window.location.host,Cc=function(){(t=document.createElement("canvas"))&&t.getContext&&(t.width=200,t.height=230,t.getContext("2d"),Y.appendChild(t),ha=new sc(t,Ub),Vb(function(){vc()}))},Lc=function(){Y.onclick=aa;u=new nc(Y,Gc,aa);Hc("4s margin-top");Ic("4s margin-bottom");Y&&(Jb(508),X(Y,"width","100%"));S(window,"message",Jc);Kc("464px",
"508px");zc(1)},Kc=function(a,b){var c="en",d=window.google;d&&(c=d.kHL||c);c={dir:document.documentElement.dir,fpdoodle:Ac?"1":"0",hl:c,origin:Bc,session:ga};v=document.createElement("iframe");v.scrolling="no";v.src="./rubiks/index.html#data="+encodeURIComponent(JSON.stringify(c));X(v,"border","none","height",a,"left","0","position","absolute","top",b,"width","100%");Y.appendChild(v)},Jc=function(a){a=a.i;var b=a.data;if(b.session===ga&&"https://gstatic.com"===
a.origin)if(b.search)Hb();else if(b.controls&&u)X(u.k,"opacity","1"),zc(3);else if(b.moves&&u)jc(u,b.moves);else if(b.transition){X(v,"top","0");x(ha);b={};a={};b="";window.google&&window.google.doodle&&(b=window.google.doodle,a=b.msgs||{},b=b.shortlink||"");var c="",d;d=document;var e=null;d.querySelectorAll&&d.querySelector?e=d.querySelector(".gbip"):e=wa()[0];if(d=e||null)c=d.title;Mc({update:{msgs:a,user:c,shortlink:b}});zc(2)}else b.certificate&&zc(5)},Gc=function(){Mc({help:1});zc(4)},Mc=function(a){a.session=
ga;v&&v.contentWindow.postMessage(a,"https://gstatic.com")},Hc=function(a){var b=Ib();b&&Gb(b,"Transition",a)},Ic=function(a){var b=document.getElementById("lga");b&&Gb(b,"Transition",a)};
(function(a,b,c){var d=function(){a();window.lol&&window.lol()},e=function(){xc(d,b,c);wc(d,b);d()};google&&google.x?google.x({id:"DOODLE"},e):e()})(function(){if(Y=document.getElementById("hplogo"))if(ga=""+(new Date).getTime()+Math.random(),Ac){S(window,"message",Jc);Kc("100%","0");X(document.documentElement,"height","100%");X(document.body,"height","100%","margin","0");X(Y,"height","100%","width","100%");var a=document.getElementById("tsf");a&&X(a,"display","none")}else X(Y,"cursor","pointer"),
Y.onclick=Lc,document.getElementById("fkbx")?(a=document.getElementById("dood"))&&X(a,"display","block"):Cc()},function(){x(ha);x(u);Hc("");Ic("");Y&&Jb(231);lb(window,"message",Jc);v&&(G(v),v=null);t&&(G(t),t=null)});})();