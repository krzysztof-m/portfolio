!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([,,,function(e,t,n){"use strict";n(4),n(5),n(6),n(7)},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t,n){function i(e,t){return(void 0===e?"undefined":r(e))===t}function s(e){var t=w.className,n=v._config.classPrefix||"";if(z&&(t=t.baseVal),v._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}v._config.enableClasses&&(t+=" "+n+e.join(" "+n),z?w.className.baseVal=t:w.className=t)}function o(e,t){return!!~(""+e).indexOf(t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):z?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function c(e,n,r,i){var s,o,c,u,l=a("div"),f=function(){var e=t.body;return e||((e=a(z?"svg":"body")).fake=!0),e}();if(parseInt(r,10))for(;r--;)(c=a("div")).id=i?i[r]:"modernizr"+(r+1),l.appendChild(c);return s=a("style"),s.type="text/css",s.id="smodernizr",(f.fake?f:l).appendChild(s),f.appendChild(l),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),l.id="modernizr",f.fake&&(f.style.background="",f.style.overflow="hidden",u=w.style.overflow,w.style.overflow="hidden",w.appendChild(f)),o=n(l,e),f.fake?(f.parentNode.removeChild(f),w.style.overflow=u,w.offsetHeight):l.parentNode.removeChild(l),!!o}function u(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function l(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(u(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];i--;)s.push("("+u(t[i])+":"+r+")");return s=s.join(" or "),c("@supports ("+s+") { #modernizr { position: absolute; } }",function(t){return"absolute"==function(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var s=e.console;null!==i?r&&(i=i.getPropertyValue(r)):s&&s[s.error?"error":"log"].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else i=!n&&t.currentStyle&&t.currentStyle[r];return i}(t,null,"position")})}return n}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function d(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,r,s,c){var u=e.charAt(0).toUpperCase()+e.slice(1),p=(e+" "+C.join(u+" ")+u).split(" ");return i(t,"string")||i(t,"undefined")?function(e,t,r,s){function c(){d&&(delete S.style,delete S.modElem)}if(s=!i(s,"undefined")&&s,!i(r,"undefined")){var u=l(e,r);if(!i(u,"undefined"))return u}for(var d,p,m,h,A,g=["modernizr","tspan","samp"];!S.style&&g.length;)d=!0,S.modElem=a(g.shift()),S.style=S.modElem.style;for(m=e.length,p=0;p<m;p++)if(h=e[p],A=S.style[h],o(h,"-")&&(h=f(h)),S.style[h]!==n){if(s||i(r,"undefined"))return c(),"pfx"!=t||h;try{S.style[h]=r}catch(e){}if(S.style[h]!=A)return c(),"pfx"!=t||h}return c(),!1}(p,t,s,c):(p=(e+" "+x.join(u+" ")+u).split(" "),function(e,t,n){var r;for(var s in e)if(e[s]in t)return!1===n?e[s]:(r=t[e[s]],i(r,"function")?d(r,n||t):r);return!1}(p,t,r))}function m(e,t,r){return p(e,n,n,t,r)}function h(e,t){if("object"==(void 0===e?"undefined":r(e)))for(var n in e)_(e,n)&&h(n,e[n]);else{var i=(e=e.toLowerCase()).split("."),o=v[i[0]];if(2==i.length&&(o=o[i[1]]),void 0!==o)return v;t="function"==typeof t?t():t,1==i.length?v[i[0]]=t:(!v[i[0]]||v[i[0]]instanceof Boolean||(v[i[0]]=new Boolean(v[i[0]])),v[i[0]][i[1]]=t),s([(t&&0!=t?"":"no-")+i.join("-")]),v._trigger(e,t)}return v}var A=[],g={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){A.push({name:e,fn:t,options:n})},addAsyncTest:function(e){A.push({name:null,fn:e})}},v=function(){};v.prototype=g,v=new v;var y=[],w=t.documentElement,z="svg"===w.nodeName.toLowerCase();v.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var C=g._config.usePrefixes?"Moz O ms Webkit".split(" "):[];g._cssomPrefixes=C;var b={elem:a("modernizr")};v._q.push(function(){delete b.elem});var S={style:b.elem.style};v._q.unshift(function(){delete S.style});var x=g._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];g._domPrefixes=x,g.testAllProps=p,g.testAllProps=m,v.addTest("cssanimations",m("animationName","a",!0)),v.addTest("flexbox",m("flexBasis","1px",!0)),v.addTest("history",function(){var t=navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")||"file:"===location.protocol)&&(e.history&&"pushState"in e.history)});var E="CSS"in e&&"supports"in e.CSS,T="supportsCSS"in e;v.addTest("supports",E||T),v.addTest("srcset","srcset"in a("img")),v.addTest("target",function(){var t=e.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}catch(e){return!1}}),v.addTest("hidden","hidden"in a("a"));var _;!function(){var e={}.hasOwnProperty;_=i(e,"undefined")||i(e.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),g._l={},g.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),v.hasOwnProperty(e)&&setTimeout(function(){v._trigger(e,v[e])},0)},g._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},v._q.push(function(){g.addTest=h}),v.addAsyncTest(function(){var e,t,n,r=a("img"),i="sizes"in r;!i&&"srcset"in r?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=function(){h("sizes",2==r.width)},r.onload=n,r.onerror=n,r.setAttribute("sizes","9px"),r.srcset=e+" 1w,"+t+" 8w",r.src=e):h("sizes",i)}),function(){var e,t,n,r,s,o;for(var a in A)if(A.hasOwnProperty(a)){if(e=[],(t=A[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=i(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)1===(o=e[s].split(".")).length?v[o[0]]=r:(!v[o[0]]||v[o[0]]instanceof Boolean||(v[o[0]]=new Boolean(v[o[0]])),v[o[0]][o[1]]=r),y.push((r?"":"no-")+o.join("-"))}}(),s(y),delete g.addTest,delete g.addAsyncTest;for(var M=0;M<v._q.length;M++)v._q[M]();e.Modernizr=v}(window,document)},function(e,t,n){var r,i;!function(s,o){"use strict";void 0===(i="function"==typeof(r=o)?r.call(t,n,t,e):r)||(e.exports=i)}(0,function(){"use strict";if("object"==typeof window&&void 0!==document.querySelectorAll&&void 0!==window.pageYOffset&&void 0!==history.pushState){var e=function(e,t,n,r){return n>r?t:e+(t-e)*function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1}(n/r)},t=function(t,n,r,i){n=n||500;var s=(i=i||window).scrollTop||window.pageYOffset;if("number"==typeof t)var o=parseInt(t);else o=function(e,t){return"HTML"===e.nodeName?-t:e.getBoundingClientRect().top+t}(t,s);var a=Date.now(),c=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){window.setTimeout(e,15)},u=function(){var l=Date.now()-a;i!==window?i.scrollTop=e(s,o,l,n):window.scroll(0,e(s,o,l,n)),l>n?"function"==typeof r&&r(t):c(u)};u()},n=function(e){if(!e.defaultPrevented){e.preventDefault(),location.hash!==this.hash&&window.history.pushState(null,null,this.hash);var n=document.getElementById(this.hash.substring(1));if(!n)return;t(n,500,function(e){location.replace("#"+e.id)})}};return document.addEventListener("DOMContentLoaded",function(){for(var e,t=document.querySelectorAll('a[href^="#"]:not([href="#"])'),r=t.length;e=t[--r];)e.addEventListener("click",n,!1)}),t}})},function(e,t){!function(t,n){var r=function(e,t){"use strict";if(!t.getElementsByClassName)return;var n,r,i=t.documentElement,s=e.Date,o=e.HTMLPictureElement,a="addEventListener",c="getAttribute",u=e[a],l=e.setTimeout,f=e.requestAnimationFrame||l,d=e.requestIdleCallback,p=/^picture$/i,m=["load","error","lazyincluded","_lazyloaded"],h={},A=Array.prototype.forEach,g=function(e,t){return h[t]||(h[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),h[t].test(e[c]("class")||"")&&h[t]},v=function(e,t){g(e,t)||e.setAttribute("class",(e[c]("class")||"").trim()+" "+t)},y=function(e,t){var n;(n=g(e,t))&&e.setAttribute("class",(e[c]("class")||"").replace(n," "))},w=function(e,t,n){var r=n?a:"removeEventListener";n&&w(e,t),m.forEach(function(n){e[r](n,t)})},z=function(e,r,i,s,o){var a=t.createEvent("CustomEvent");return i||(i={}),i.instance=n,a.initCustomEvent(r,!s,!o,i),e.dispatchEvent(a),a},C=function(t,n){var i;!o&&(i=e.picturefill||r.pf)?i({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},b=function(e,t){return(getComputedStyle(e,null)||{})[t]},S=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},x=function(){var e,n,r=[],i=[],s=r,o=function(){var t=s;for(s=r.length?i:r,e=!0,n=!1;t.length;)t.shift()();e=!1},a=function(r,i){e&&!i?r.apply(this,arguments):(s.push(r),n||(n=!0,(t.hidden?l:f)(o)))};return a._lsFlush=o,a}(),E=function(e,t){return t?function(){x(e)}:function(){var t=this,n=arguments;x(function(){e.apply(t,n)})}},T=function(e){var t,n,r=function(){t=null,e()},i=function(){var e=s.now()-n;e<99?l(i,99-e):(d||r)(r)};return function(){n=s.now(),t||(t=l(i,99))}};!function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};r=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in r||(r[t]=n[t]);e.lazySizesConfig=r,l(function(){r.init&&P()})}();var _=function(){var o,f,m,h,S,_,P,L,R,B,N,O,k,D,W=/^img$/i,I=/^iframe$/i,$="onscroll"in e&&!/glebot/.test(navigator.userAgent),q=0,F=0,H=-1,j=function(e){F--,e&&e.target&&w(e.target,j),(!e||F<0||!e.target)&&(F=0)},U=function(e,n){var r,s=e,o="hidden"==b(t.body,"visibility")||"hidden"!=b(e,"visibility");for(L-=n,N+=n,R-=n,B+=n;o&&(s=s.offsetParent)&&s!=t.body&&s!=i;)(o=(b(s,"opacity")||1)>0)&&"visible"!=b(s,"overflow")&&(r=s.getBoundingClientRect(),o=B>r.left&&R<r.right&&N>r.top-1&&L<r.bottom+1);return o},G=function(){var e,s,a,u,l,d,p,m,A,g=n.elements;if((h=r.loadMode)&&F<8&&(e=g.length)){s=0,H++,null==k&&("expand"in r||(r.expand=i.clientHeight>500&&i.clientWidth>500?500:370),O=r.expand,k=O*r.expFactor),q<k&&F<1&&H>2&&h>2&&!t.hidden?(q=k,H=0):q=h>1&&H>1&&F<6?O:0;for(;s<e;s++)if(g[s]&&!g[s]._lazyRace)if($)if((m=g[s][c]("data-expand"))&&(d=1*m)||(d=q),A!==d&&(_=innerWidth+d*D,P=innerHeight+d,p=-1*d,A=d),a=g[s].getBoundingClientRect(),(N=a.bottom)>=p&&(L=a.top)<=P&&(B=a.right)>=p*D&&(R=a.left)<=_&&(N||B||R||L)&&(r.loadHidden||"hidden"!=b(g[s],"visibility"))&&(f&&F<3&&!m&&(h<3||H<4)||U(g[s],d))){if(Z(g[s]),l=!0,F>9)break}else!l&&f&&!u&&F<4&&H<4&&h>2&&(o[0]||r.preloadAfterLoad)&&(o[0]||!m&&(N||B||R||L||"auto"!=g[s][c](r.sizesAttr)))&&(u=o[0]||g[s]);else Z(g[s]);u&&!l&&Z(u)}},Q=function(e){var t,n=0,i=r.ricTimeout,o=function(){t=!1,n=s.now(),e()},a=d&&r.ricTimeout?function(){d(o,{timeout:i}),i!==r.ricTimeout&&(i=r.ricTimeout)}:E(function(){l(o)},!0);return function(e){var r;(e=!0===e)&&(i=33),t||(t=!0,(r=125-(s.now()-n))<0&&(r=0),e||r<9&&d?a():l(a,r))}}(G),V=function(e){v(e.target,r.loadedClass),y(e.target,r.loadingClass),w(e.target,K),z(e.target,"lazyloaded")},J=E(V),K=function(e){J({target:e.target})},Y=function(e){var t,n=e[c](r.srcsetAttr);(t=r.customMedia[e[c]("data-media")||e[c]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},X=E(function(e,t,n,i,s){var o,a,u,f,d,h;(d=z(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?v(e,r.autosizesClass):e.setAttribute("sizes",i)),a=e[c](r.srcsetAttr),o=e[c](r.srcAttr),s&&(u=e.parentNode,f=u&&p.test(u.nodeName||"")),h=t.firesLoad||"src"in e&&(a||o||f),d={target:e},h&&(w(e,j,!0),clearTimeout(m),m=l(j,2500),v(e,r.loadingClass),w(e,K,!0)),f&&A.call(u.getElementsByTagName("source"),Y),a?e.setAttribute("srcset",a):o&&!f&&(I.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}}(e,o):e.src=o),s&&(a||f)&&C(e,{src:o})),e._lazyRace&&delete e._lazyRace,y(e,r.lazyClass),x(function(){(!h||e.complete&&e.naturalWidth>1)&&(h?j(d):F--,V(d))},!0)}),Z=function(e){var t,n=W.test(e.nodeName),i=n&&(e[c](r.sizesAttr)||e[c]("sizes")),s="auto"==i;(!s&&f||!n||!e[c]("src")&&!e.srcset||e.complete||g(e,r.errorClass)||!g(e,r.lazyClass))&&(t=z(e,"lazyunveilread").detail,s&&M.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,F++,X(e,t,s,i,n))},ee=function(){if(!f)if(s.now()-S<999)l(ee,999);else{var e=T(function(){r.loadMode=3,Q()});f=!0,r.loadMode=3,Q(),u("scroll",function(){3==r.loadMode&&(r.loadMode=2),e()},!0)}};return{_:function(){S=s.now(),n.elements=t.getElementsByClassName(r.lazyClass),o=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),D=r.hFac,u("scroll",Q,!0),u("resize",Q,!0),e.MutationObserver?new MutationObserver(Q).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i[a]("DOMNodeInserted",Q,!0),i[a]("DOMAttrModified",Q,!0),setInterval(Q,999)),u("hashchange",Q,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t[a](e,Q,!0)}),/d$|^c/.test(t.readyState)?ee():(u("load",ee),t[a]("DOMContentLoaded",Q),l(ee,2e4)),n.elements.length?(G(),x._lsFlush()):Q()},checkElems:Q,unveil:Z}}(),M=function(){var e,n=E(function(e,t,n,r){var i,s,o;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),p.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),s=0,o=i.length;s<o;s++)i[s].setAttribute("sizes",r);n.detail.dataAttr||C(e,n.detail)}),i=function(e,t,r){var i,s=e.parentNode;s&&(r=S(e,s,r),(i=z(e,"lazybeforesizes",{width:r,dataAttr:!!t})).defaultPrevented||(r=i.detail.width)&&r!==e._lazysizesWidth&&n(e,s,i,r))},s=T(function(){var t,n=e.length;if(n)for(t=0;t<n;t++)i(e[t])});return{_:function(){e=t.getElementsByClassName(r.autosizesClass),u("resize",s)},checkElems:s,updateElem:i}}(),P=function(){P.i||(P.i=!0,M._(),_._())};return n={cfg:r,autoSizer:M,loader:_,init:P,uP:C,aC:v,rC:y,hC:g,fire:z,gW:S,rAF:x}}(t,t.document);t.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}(window)},function(e,t,n){var r;!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=n.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},i=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},s=function(){clearTimeout(t),t=setTimeout(i,99)},o=e.matchMedia&&matchMedia("(orientation: landscape)"),a=function(){s(),o&&o.addListener&&o.addListener(s)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?a():document.addEventListener("DOMContentLoaded",a),s}())}(window),function(i,s,o){"use strict";function a(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function c(e,t,n,r){var i,s,o;return"saveData"===b.algorithm?e>2.7?o=n+1:(s=(t-n)*(i=Math.pow(e-.6,1.5)),r&&(s+=.1*i),o=e+s):o=n>1?Math.sqrt(e*t):e,o>n}function u(e,t){return e.res-t.res}function l(e,t){var n,r,i;if(e&&t)for(i=m.parseSet(t),e=m.makeUrl(e),n=0;n<i.length;n++)if(e===m.makeUrl(i[n].url)){r=i[n];break}return r}s.createElement("picture");var f,d,p,m={},h=!1,A=function(){},g=s.createElement("img"),v=g.getAttribute,y=g.setAttribute,w=g.removeAttribute,z=s.documentElement,C={},b={algorithm:""},S="data-pfsrc",x=navigator.userAgent,E=/rident/.test(x)||/ecko/.test(x)&&x.match(/rv\:(\d+)/)&&RegExp.$1>35,T="currentSrc",_=/\s+\+?\d+(e\d+)?w/,M=/(\([^)]+\))?\s*(.+)/,P=i.picturefillCFG,L="font-size:100%!important;",R=!0,B={},N={},O=i.devicePixelRatio,k={px:1,in:96},D=s.createElement("a"),W=!1,I=/^[ \t\n\r\u000c]+/,$=/^[, \t\n\r\u000c]+/,q=/^[^ \t\n\r\u000c]+/,F=/[,]+$/,H=/^\d+$/,j=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,U=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},G=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},Q=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=G(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(n,r){var i;if(!(n in B))if(B[n]=!1,r&&(i=n.match(e)))B[n]=i[1]*k[i[2]];else try{B[n]=new Function("e",t(n))(k)}catch(e){}return B[n]}}(),V=function(e,t){return e.w?(e.cWidth=m.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},J=function(e){if(h){var t,n,r,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),t=i.elements||m.qsa(i.context||s,i.reevaluate||i.reselect?m.sel:m.selShort),r=t.length){for(m.setupRun(i),W=!0,n=0;n<r;n++)m.fillImg(t[n],i);m.teardownRun(i)}}};i.console&&console.warn,T in g||(T="src"),C["image/jpeg"]=!0,C["image/gif"]=!0,C["image/png"]=!0,C["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),m.ns=("pf"+(new Date).getTime()).substr(0,9),m.supSrcset="srcset"in g,m.supSizes="sizes"in g,m.supPicture=!!i.HTMLPictureElement,m.supSrcset&&m.supPicture&&!m.supSizes&&function(e){g.srcset="data:,a",e.src="data:,a",m.supSrcset=g.complete===e.complete,m.supPicture=m.supSrcset&&m.supPicture}(s.createElement("img")),m.supSrcset&&!m.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=s.createElement("img"),n=function(){2===t.width&&(m.supSizes=!0),d=m.supSrcset&&!m.supSizes,h=!0,setTimeout(J)};t.onload=n,t.onerror=n,t.setAttribute("sizes","9px"),t.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",t.src=e}():h=!0,m.selShort="picture>img,img[srcset]",m.sel=m.selShort,m.cfg=b,m.DPR=O||1,m.u=k,m.types=C,m.setSize=A,m.makeUrl=G(function(e){return D.href=e,D.href}),m.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},m.matchesMedia=function(){return i.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?m.matchesMedia=function(e){return!e||matchMedia(e).matches}:m.matchesMedia=m.mMQ,m.matchesMedia.apply(this,arguments)},m.mMQ=function(e){return!e||Q(e)},m.calcLength=function(e){var t=Q(e,!0)||!1;return t<0&&(t=!1),t},m.supportsType=function(e){return!e||C[e]},m.parseSize=G(function(e){var t=(e||"").match(M);return{media:t&&t[1],length:t&&t[2]}}),m.parseSet=function(e){return e.cands||(e.cands=function(e,t){function n(t){var n,r=t.exec(e.substring(d));if(r)return n=r[0],d+=n.length,n}function r(){var e,n,r,i,a,c,u,l,f,d=!1,m={};for(i=0;i<o.length;i++)c=(a=o[i])[a.length-1],u=a.substring(0,a.length-1),l=parseInt(u,10),f=parseFloat(u),H.test(u)&&"w"===c?((e||n)&&(d=!0),0===l?d=!0:e=l):j.test(u)&&"x"===c?((e||n||r)&&(d=!0),f<0?d=!0:n=f):H.test(u)&&"h"===c?((r||n)&&(d=!0),0===l?d=!0:r=l):d=!0;d||(m.url=s,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,p.push(m))}function i(){for(n(I),c="",u="in descriptor";;){if(l=e.charAt(d),"in descriptor"===u)if(a(l))c&&(o.push(c),c="",u="after descriptor");else{if(","===l)return d+=1,c&&o.push(c),void r();if("("===l)c+=l,u="in parens";else{if(""===l)return c&&o.push(c),void r();c+=l}}else if("in parens"===u)if(")"===l)c+=l,u="in descriptor";else{if(""===l)return o.push(c),void r();c+=l}else if("after descriptor"===u)if(a(l));else{if(""===l)return void r();u="in descriptor",d-=1}d+=1}}for(var s,o,c,u,l,f=e.length,d=0,p=[];;){if(n($),d>=f)return p;s=n(q),o=[],","===s.slice(-1)?(s=s.replace(F,""),r()):i()}}(e.srcset,e)),e.cands},m.getEmValue=function(){var e;if(!f&&(e=s.body)){var t=s.createElement("div"),n=z.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",z.style.cssText=L,e.style.cssText=L,e.appendChild(t),f=t.offsetWidth,e.removeChild(t),f=parseFloat(f,10),z.style.cssText=n,e.style.cssText=r}return f||16},m.calcListLength=function(e){if(!(e in N)||b.uT){var t=m.calcLength(function(e){function t(e){return!!(u.test(e)&&parseFloat(e)>=0)||!!l.test(e)||"0"===e||"-0"===e||"+0"===e}var n,r,i,s,o,c,u=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(i=(r=function(e){function t(){i&&(s.push(i),i="")}function n(){s[0]&&(o.push(s),s=[])}for(var r,i="",s=[],o=[],c=0,u=0,l=!1;;){if(""===(r=e.charAt(u)))return t(),n(),o;if(l){if("*"===r&&"/"===e[u+1]){l=!1,u+=2,t();continue}u+=1}else{if(a(r)){if(e.charAt(u-1)&&a(e.charAt(u-1))||!i){u+=1;continue}if(0===c){t(),u+=1;continue}r=" "}else if("("===r)c+=1;else if(")"===r)c-=1;else{if(","===r){t(),n(),u+=1;continue}if("/"===r&&"*"===e.charAt(u+1)){l=!0,u+=2;continue}}i+=r,u+=1}}}(e)).length,n=0;n<i;n++)if(s=r[n],o=s[s.length-1],t(o)){if(c=o,s.pop(),0===s.length)return c;if(s=s.join(" "),m.matchesMedia(s))return c}return"100vw"}(e));N[e]=t||k.width}return N[e]},m.setRes=function(e){var t;if(e)for(var n=0,r=(t=m.parseSet(e)).length;n<r;n++)V(t[n],e.sizes);return t},m.setRes.res=V,m.applySetCandidate=function(e,t){if(e.length){var n,r,i,s,o,a,f,d,p,h=t[m.ns],A=m.DPR;if(a=h.curSrc||t[T],(f=h.curCan||function(e,t,n){var r;return!n&&t&&(n=(n=e[m.ns].sets)&&n[n.length-1]),(r=l(t,n))&&(t=m.makeUrl(t),e[m.ns].curSrc=t,e[m.ns].curCan=r,r.res||V(r,r.set.sizes)),r}(t,a,e[0].set))&&f.set===e[0].set&&((p=E&&!t.complete&&f.res-.1>A)||(f.cached=!0,f.res>=A&&(o=f))),!o)for(e.sort(u),o=e[(s=e.length)-1],r=0;r<s;r++)if((n=e[r]).res>=A){o=e[i=r-1]&&(p||a!==m.makeUrl(n.url))&&c(e[i].res,n.res,A,e[i].cached)?e[i]:n;break}o&&(d=m.makeUrl(o.url),h.curSrc=d,h.curCan=o,d!==a&&m.setSrc(t,o),m.setSize(t))}},m.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},m.getSet=function(e){var t,n,r,i=!1,s=e[m.ns].sets;for(t=0;t<s.length&&!i;t++)if((n=s[t]).srcset&&m.matchesMedia(n.media)&&(r=m.supportsType(n.type))){"pending"===r&&(n=r),i=n;break}return i},m.parseSets=function(e,t,n){var r,i,s,o,a=t&&"PICTURE"===t.nodeName.toUpperCase(),c=e[m.ns];(void 0===c.src||n.src)&&(c.src=v.call(e,"src"),c.src?y.call(e,S,c.src):w.call(e,S)),(void 0===c.srcset||n.srcset||!m.supSrcset||e.srcset)&&(r=v.call(e,"srcset"),c.srcset=r,o=!0),c.sets=[],a&&(c.pic=!0,function(e,t){var n,r,i,s,o=e.getElementsByTagName("source");for(n=0,r=o.length;n<r;n++)(i=o[n])[m.ns]=!0,(s=i.getAttribute("srcset"))&&t.push({srcset:s,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}(t,c.sets)),c.srcset?(i={srcset:c.srcset,sizes:v.call(e,"sizes")},c.sets.push(i),(s=(d||c.src)&&_.test(c.srcset||""))||!c.src||l(c.src,i)||i.has1x||(i.srcset+=", "+c.src,i.cands.push({url:c.src,d:1,set:i}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=void 0,c.supported=!(a||i&&!m.supSrcset||s&&!m.supSizes),o&&m.supSrcset&&!c.supported&&(r?(y.call(e,"data-pfsrcset",r),e.srcset=""):w.call(e,"data-pfsrcset")),c.supported&&!c.srcset&&(!c.src&&e.src||e.src!==m.makeUrl(c.src))&&(null===c.src?e.removeAttribute("src"):e.src=c.src),c.parsed=!0},m.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[m.ns]||(e[m.ns]={}),n=e[m.ns],(r||n.evaled!==p)&&(n.parsed&&!t.reevaluate||m.parseSets(e,e.parentNode,t),n.supported?n.evaled=p:function(e){var t,n=m.getSet(e),r=!1;"pending"!==n&&(r=p,n&&(t=m.setRes(n),m.applySetCandidate(t,e))),e[m.ns].evaled=r}(e))},m.setupRun=function(){W&&!R&&O===i.devicePixelRatio||(R=!1,O=i.devicePixelRatio,B={},N={},m.DPR=O||1,k.width=Math.max(i.innerWidth||0,z.clientWidth),k.height=Math.max(i.innerHeight||0,z.clientHeight),k.vw=k.width/100,k.vh=k.height/100,p=[k.height,k.width,O].join("-"),k.em=m.getEmValue(),k.rem=k.em)},m.supPicture?(J=A,m.fillImg=A):function(){var e,t=i.attachEvent?/d$|^c/:/d$|^c|^i/,n=function(){var i=s.readyState||"";r=setTimeout(n,"loading"===i?200:999),s.body&&(m.fillImgs(),(e=e||t.test(i))&&clearTimeout(r))},r=setTimeout(n,s.body?9:99),o=z.clientHeight;U(i,"resize",function(e,t){var n,r,i=function(){var s=new Date-r;s<t?n=setTimeout(i,t-s):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(i,t))}}(function(){R=Math.max(i.innerWidth||0,z.clientWidth)!==k.width||z.clientHeight!==o,o=z.clientHeight,R&&m.fillImgs()},99)),U(s,"readystatechange",n)}(),m.picturefill=J,m.fillImgs=J,m.teardownRun=A,J._=m,i.picturefillCFG={pf:m,push:function(e){var t=e.shift();"function"==typeof m[t]?m[t].apply(m,e):(b[t]=e[0],W&&m.fillImgs({reselect:!0}))}};for(;P&&P.length;)i.picturefillCFG.push(P.shift());i.picturefill=J,"object"==typeof e&&"object"==typeof e.exports?e.exports=J:void 0===(r=function(){return J}.call(t,n,t,e))||(e.exports=r),m.supPicture||(C["image/webp"]=function(e,t){var n=new i.Image;return n.onerror=function(){C[e]=!1,J()},n.onload=function(){C[e]=1===n.width,J()},n.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)}]);