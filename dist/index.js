var qh=Object.defineProperty;var Zh=(r,e,t)=>e in r?qh(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var re=(r,e,t)=>(Zh(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function kt(r){var e=/^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(r);if(e==null)throw new Error(r);var t=new Error(e[2]);throw t.name=e[1],t}function Li(r){return typeof r=="boolean"||r instanceof Boolean}function jr(r){return typeof r=="number"||r instanceof Number}function rn(r){return(typeof r=="number"||r instanceof Number)&&isFinite(r.valueOf())}function Jh(r,e,t,n,i){if(n===void 0&&(n=!0),i===void 0&&(i=!0),!jr(r)||isNaN(r))return!1;if(rn(e)){if(rn(t)){if(r<e||!n&&r===e||r>t||!i&&r===t)return!1}else if(r<e||!n&&r===e)return!1}else if(rn(t)&&(r>t||!i&&r===t))return!1;return!0}function Ei(r){return typeof r!="number"&&!(r instanceof Number)?!1:(r=r.valueOf(),isFinite(r)&&Math.round(r)===r)}function da(r){return typeof r!="number"&&!(r instanceof Number)?!1:(r=r.valueOf(),isFinite(r)&&Math.round(r)===r&&r>=0)}function Kh(r){return typeof r!="number"&&!(r instanceof Number)?!1:(r=r.valueOf(),isFinite(r)&&Math.round(r)===r&&r>=1)}function Sn(r){return typeof r=="string"||r instanceof String}function Bt(r,e){return(typeof r=="string"||r instanceof String)&&e.test(r.valueOf())}var Qh=/^[^\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function ua(r){return Bt(r,Qh)}var ep=/^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function Ft(r){return Bt(r,ep)}function Su(r){return typeof r=="function"}function ca(r){return r!=null&&typeof r=="object"}function xn(r){return r!=null&&typeof r=="object"&&Object.getPrototypeOf(r)===Object.prototype}var li=Array.isArray;function fs(r,e,t){if(li(r)){for(var n=0,i=r.length;n<i;n++)if(r[n]===void 0)return!1;return!0}return!1}function bn(r,e,t,n){if(li(r))try{for(var i=0,o=r.length;i<o;i++)if(e(r[i])==!1)return!1;return!(t!=null&&r.length<t||n!=null&&r.length>n)}catch{}return!1}function xu(r,e){return e.indexOf(r)>=0}function Ai(r){return Sn(r)&&(hp.hasOwnProperty(r)||/^#[a-fA-F0-9]{6}$/.test(r)||/^#[a-fA-F0-9]{8}$/.test(r)||/^rgb\([0-9]+,\s*[0-9]+,\s*[0-9]+\)$/.test(r)||/^rgba\([0-9]+,\s*[0-9]+,\s*[0-9]+,([01]|[0]?[.][0-9]+)\)$/.test(r))}var tp=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;function bu(r){return Bt(r,tp)}var rp=/^[^\s\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function ha(r){if(!Bt(r,rp)||r==="")return!1;try{return new URL(r,"file://"),!0}catch{return!1}}var He=!1,Be=!0;function np(r,e,t,n,i){if(e==null){if(n)return e;kt("MissingArgument: no ".concat(gt(r)," given"))}else if(t(e))switch(!0){case e instanceof Boolean:case e instanceof Number:case e instanceof String:return e.valueOf();default:return e}else kt("InvalidArgument: the given ".concat(gt(r)," is no valid ").concat(gt(i)))}function le(r,e,t){var n=function(u,s){return np(u,s,r,e,t)},i=r.name;if(i!=null&&/^ValueIs/.test(i)){var o=i.replace(/^ValueIs/,e?"allow":"expect");return ip(n,o)}else return n}function ip(r,e){if(r==null&&kt("MissingArgument: no function given"),typeof r!="function"&&kt("InvalidArgument: the given 1st Argument is not a JavaScript function"),e==null&&kt("MissingArgument: no desired name given"),typeof e!="string"&&!(e instanceof String)&&kt("InvalidArgument: the given desired name is not a string"),r.name===e)return r;try{if(Object.defineProperty(r,"name",{value:e}),r.name===e)return r}catch{}var t=new Function("originalFunction","return function "+e+" () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}");return t(r)}function _u(r,e){if(e==null)kt("MissingArgument: no ".concat(gt(r)," given"));else return e.valueOf()}var yu=le(Li,Be,"boolean value"),go=le(Li,He,"boolean value"),Er=le(Ei,Be,"integral numeric value"),xr=le(Ei,He,"integral numeric value");function op(r,e,t,n){return e==null?e:ap(r,e,t,n)}function dn(r,e,t,n){if(xr(r,e),isNaN(e)&&kt("InvalidArgument: the given ".concat(gt(r)," is not-a-number")),t!=null&&isFinite(t)){if(n!=null&&isFinite(n)){if(e<t||e>n)throw new RangeError("the given ".concat(gt(r)," (").concat(e,") is outside ")+"the allowed range (".concat(t,"...").concat(n,")"))}else if(e<t)throw new RangeError("the given ".concat(gt(r)," is below the allowed ")+"minimum (".concat(e," < ").concat(t,")"))}else if(n!=null&&isFinite(n)&&e>n)throw new RangeError("the given ".concat(gt(r)," exceeds the allowed ")+"maximum (".concat(e," > ").concat(n,")"));return e.valueOf()}var ap=dn,un=le(da,Be,"ordinal number"),di=le(Kh,Be,"cardinal number"),No=le(ua,Be,"literal text"),On=le(Ft,Be,"single line of text"),To=le(Ft,He,"single line of text"),er=le(Su,Be,"JavaScript function"),nn=le(Su,He,"JavaScript function"),sp=le(xn,Be,'"plain" JavaScript object');function ms(r,e,t,n,i,o){return e==null?e:lp(r,e,t,n,i,o)}function pa(r,e,t,n,i,o){if(e==null&&kt("MissingArgument: no ".concat(gt(r)," given")),bn(e,t,i,o))return e;kt("InvalidArgument: the given ".concat(gt(r)," is ")+(n==null?"either not a list or contains invalid elements":"no "+gt(n)))}var lp=pa;function Fo(r,e,t){return e==null?e:up(r,e,t)}function dp(r,e,t){if(e==null&&kt("MissingArgument: no ".concat(gt(r)," given")),xu(e,t))return e==null||typeof e.valueOf!="function"?e:e.valueOf();kt("InvalidArgument: the given ".concat(gt(r)," is not among the supported values"))}var up=dp,Ss=le(Ai,Be,"CSS color specification"),vu=le(ha,Be,"URL");function gt(r){var e=/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g,t=/[\x00-\x1f\x7f-\x9f]/g;return r.replace(e,function(n){return n==="\\"?"\\\\":n}).replace(t,function(n){switch(n){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v";default:{var i=n.charCodeAt(0).toString(16);return"\\x"+"00".slice(i.length)+i}}})}function cp(r,e){e===void 0&&(e='"');var t=/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|'/g,n=/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|"/g,i=/[\x00-\x1f\x7f-\x9f]/g;return r.replace(e==="'"?t:n,function(o){switch(o){case"'":return"\\'";case'"':return'\\"';case"\\":return"\\\\";default:return o}}).replace(i,function(o){switch(o){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v";default:{var u=o.charCodeAt(0).toString(16);return"\\x"+"00".slice(u.length)+u}}})}function Ne(r,e){return e===void 0&&(e='"'),e+cp(r,e)+e}function br(r,e,t){if(r===e)return!1;var n=typeof r;if(n!==typeof e)return!0;function i(u,s,l){if(!Array.isArray(s)||u.length!==s.length)return!0;for(var a=0,h=u.length;a<h;a++)if(br(u[a],s[a]))return!0;return!1}function o(u,s,l){if(Object.getPrototypeOf(u)!==Object.getPrototypeOf(s))return!0;for(var a in u)if(!(a in s))return!0;for(var a in s)if(!(a in u)||br(u[a],s[a]))return!0;return!1}switch(n){case"undefined":case"boolean":case"string":case"function":return!0;case"number":return isNaN(r)!==isNaN(e)||Math.abs(r-e)>Number.EPSILON;case"object":return r==null||e==null?!0:Array.isArray(r)?i(r,e):o(r,e);default:return!0}return!0}function Hr(r,e,t){return!br(r,e)}var hp={transparent:"rgba(0,0,0,0,0.0)",aliceblue:"rgba(240,248,255,1.0)",lightpink:"rgba(255,182,193,1.0)",antiquewhite:"rgba(250,235,215,1.0)",lightsalmon:"rgba(255,160,122,1.0)",aqua:"rgba(0,255,255,1.0)",lightseagreen:"rgba(32,178,170,1.0)",aquamarine:"rgba(127,255,212,1.0)",lightskyblue:"rgba(135,206,250,1.0)",azure:"rgba(240,255,255,1.0)",lightslategray:"rgba(119,136,153,1.0)",beige:"rgba(245,245,220,1.0)",lightslategrey:"rgba(119,136,153,1.0)",bisque:"rgba(255,228,196,1.0)",lightsteelblue:"rgba(176,196,222,1.0)",black:"rgba(0,0,0,1.0)",lightyellow:"rgba(255,255,224,1.0)",blanchedalmond:"rgba(255,235,205,1.0)",lime:"rgba(0,255,0,1.0)",blue:"rgba(0,0,255,1.0)",limegreen:"rgba(50,205,50,1.0)",blueviolet:"rgba(138,43,226,1.0)",linen:"rgba(250,240,230,1.0)",brown:"rgba(165,42,42,1.0)",magenta:"rgba(255,0,255,1.0)",burlywood:"rgba(222,184,135,1.0)",maroon:"rgba(128,0,0,1.0)",cadetblue:"rgba(95,158,160,1.0)",mediumaquamarine:"rgba(102,205,170,1.0)",chartreuse:"rgba(127,255,0,1.0)",mediumblue:"rgba(0,0,205,1.0)",chocolate:"rgba(210,105,30,1.0)",mediumorchid:"rgba(186,85,211,1.0)",coral:"rgba(255,127,80,1.0)",mediumpurple:"rgba(147,112,219,1.0)",cornflowerblue:"rgba(100,149,237,1.0)",mediumseagreen:"rgba(60,179,113,1.0)",cornsilk:"rgba(255,248,220,1.0)",mediumslateblue:"rgba(123,104,238,1.0)",crimson:"rgba(220,20,60,1.0)",mediumspringgreen:"rgba(0,250,154,1.0)",cyan:"rgba(0,255,255,1.0)",mediumturquoise:"rgba(72,209,204,1.0)",darkblue:"rgba(0,0,139,1.0)",mediumvioletred:"rgba(199,21,133,1.0)",darkcyan:"rgba(0,139,139,1.0)",midnightblue:"rgba(25,25,112,1.0)",darkgoldenrod:"rgba(184,134,11,1.0)",mintcream:"rgba(245,255,250,1.0)",darkgray:"rgba(169,169,169,1.0)",mistyrose:"rgba(255,228,225,1.0)",darkgreen:"rgba(0,100,0,1.0)",moccasin:"rgba(255,228,181,1.0)",darkgrey:"rgba(169,169,169,1.0)",navajowhite:"rgba(255,222,173,1.0)",darkkhaki:"rgba(189,183,107,1.0)",navy:"rgba(0,0,128,1.0)",darkmagenta:"rgba(139,0,139,1.0)",oldlace:"rgba(253,245,230,1.0)",darkolivegreen:"rgba(85,107,47,1.0)",olive:"rgba(128,128,0,1.0)",darkorange:"rgba(255,140,0,1.0)",olivedrab:"rgba(107,142,35,1.0)",darkorchid:"rgba(153,50,204,1.0)",orange:"rgba(255,165,0,1.0)",darkred:"rgba(139,0,0,1.0)",orangered:"rgba(255,69,0,1.0)",darksalmon:"rgba(233,150,122,1.0)",orchid:"rgba(218,112,214,1.0)",darkseagreen:"rgba(143,188,143,1.0)",palegoldenrod:"rgba(238,232,170,1.0)",darkslateblue:"rgba(72,61,139,1.0)",palegreen:"rgba(152,251,152,1.0)",darkslategray:"rgba(47,79,79,1.0)",paleturquoise:"rgba(175,238,238,1.0)",darkslategrey:"rgba(47,79,79,1.0)",palevioletred:"rgba(219,112,147,1.0)",darkturquoise:"rgba(0,206,209,1.0)",papayawhip:"rgba(255,239,213,1.0)",darkviolet:"rgba(148,0,211,1.0)",peachpuff:"rgba(255,218,185,1.0)",deeppink:"rgba(255,20,147,1.0)",peru:"rgba(205,133,63,1.0)",deepskyblue:"rgba(0,191,255,1.0)",pink:"rgba(255,192,203,1.0)",dimgray:"rgba(105,105,105,1.0)",plum:"rgba(221,160,221,1.0)",dimgrey:"rgba(105,105,105,1.0)",powderblue:"rgba(176,224,230,1.0)",dodgerblue:"rgba(30,144,255,1.0)",purple:"rgba(128,0,128,1.0)",firebrick:"rgba(178,34,34,1.0)",red:"rgba(255,0,0,1.0)",floralwhite:"rgba(255,250,240,1.0)",rosybrown:"rgba(188,143,143,1.0)",forestgreen:"rgba(34,139,34,1.0)",royalblue:"rgba(65,105,225,1.0)",fuchsia:"rgba(255,0,255,1.0)",saddlebrown:"rgba(139,69,19,1.0)",gainsboro:"rgba(220,220,220,1.0)",salmon:"rgba(250,128,114,1.0)",ghostwhite:"rgba(248,248,255,1.0)",sandybrown:"rgba(244,164,96,1.0)",gold:"rgba(255,215,0,1.0)",seagreen:"rgba(46,139,87,1.0)",goldenrod:"rgba(218,165,32,1.0)",seashell:"rgba(255,245,238,1.0)",gray:"rgba(128,128,128,1.0)",sienna:"rgba(160,82,45,1.0)",green:"rgba(0,128,0,1.0)",silver:"rgba(192,192,192,1.0)",greenyellow:"rgba(173,255,47,1.0)",skyblue:"rgba(135,206,235,1.0)",grey:"rgba(128,128,128,1.0)",slateblue:"rgba(106,90,205,1.0)",honeydew:"rgba(240,255,240,1.0)",slategray:"rgba(112,128,144,1.0)",hotpink:"rgba(255,105,180,1.0)",slategrey:"rgba(112,128,144,1.0)",indianred:"rgba(205,92,92,1.0)",snow:"rgba(255,250,250,1.0)",indigo:"rgba(75,0,130,1.0)",springgreen:"rgba(0,255,127,1.0)",ivory:"rgba(255,255,240,1.0)",steelblue:"rgba(70,130,180,1.0)",khaki:"rgba(240,230,140,1.0)",tan:"rgba(210,180,140,1.0)",lavender:"rgba(230,230,250,1.0)",teal:"rgba(0,128,128,1.0)",lavenderblush:"rgba(255,240,245,1.0)",thistle:"rgba(216,191,216,1.0)",lawngreen:"rgba(124,252,0,1.0)",tomato:"rgba(255,99,71,1.0)",lemonchiffon:"rgba(255,250,205,1.0)",turquoise:"rgba(64,224,208,1.0)",lightblue:"rgba(173,216,230,1.0)",violet:"rgba(238,130,238,1.0)",lightcoral:"rgba(240,128,128,1.0)",wheat:"rgba(245,222,179,1.0)",lightcyan:"rgba(224,255,255,1.0)",white:"rgba(255,255,255,1.0)",lightgoldenrodyellow:"rgba(250,250,210,1.0)",whitesmoke:"rgba(245,245,245,1.0)",lightgray:"rgba(211,211,211,1.0)",yellow:"rgba(255,255,0,1.0)",lightgreen:"rgba(144,238,144,1.0)",yellowgreen:"rgba(154,205,50,1.0)",lightgrey:"rgba(211,211,211,1.0)"},Vn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pp(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function Nn(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var wu={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(r,e){(function(t){r.exports=t()})(function(){return function t(n,i,o){function u(a,h){if(!i[a]){if(!n[a]){var d=typeof Nn=="function"&&Nn;if(!h&&d)return d(a,!0);if(s)return s(a,!0);var g=new Error("Cannot find module '"+a+"'");throw g.code="MODULE_NOT_FOUND",g}var p=i[a]={exports:{}};n[a][0].call(p.exports,function(f){var x=n[a][1][f];return u(x||f)},p,p.exports,t,n,i,o)}return i[a].exports}for(var s=typeof Nn=="function"&&Nn,l=0;l<o.length;l++)u(o[l]);return u}({1:[function(t,n,i){(function(o){var u=o.MutationObserver||o.WebKitMutationObserver,s;if(u){var l=0,a=new u(f),h=o.document.createTextNode("");a.observe(h,{characterData:!0}),s=function(){h.data=l=++l%2}}else if(!o.setImmediate&&typeof o.MessageChannel<"u"){var d=new o.MessageChannel;d.port1.onmessage=f,s=function(){d.port2.postMessage(0)}}else"document"in o&&"onreadystatechange"in o.document.createElement("script")?s=function(){var b=o.document.createElement("script");b.onreadystatechange=function(){f(),b.onreadystatechange=null,b.parentNode.removeChild(b),b=null},o.document.documentElement.appendChild(b)}:s=function(){setTimeout(f,0)};var g,p=[];function f(){g=!0;for(var b,y,P=p.length;P;){for(y=p,p=[],b=-1;++b<P;)y[b]();P=p.length}g=!1}n.exports=x;function x(b){p.push(b)===1&&!g&&s()}}).call(this,typeof Vn<"u"?Vn:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(t,n,i){var o=t(1);function u(){}var s={},l=["REJECTED"],a=["FULFILLED"],h=["PENDING"];n.exports=d;function d(I){if(typeof I!="function")throw new TypeError("resolver must be a function");this.state=h,this.queue=[],this.outcome=void 0,I!==u&&x(this,I)}d.prototype.catch=function(I){return this.then(null,I)},d.prototype.then=function(I,L){if(typeof I!="function"&&this.state===a||typeof L!="function"&&this.state===l)return this;var V=new this.constructor(u);if(this.state!==h){var X=this.state===a?I:L;p(V,X,this.outcome)}else this.queue.push(new g(V,I,L));return V};function g(I,L,V){this.promise=I,typeof L=="function"&&(this.onFulfilled=L,this.callFulfilled=this.otherCallFulfilled),typeof V=="function"&&(this.onRejected=V,this.callRejected=this.otherCallRejected)}g.prototype.callFulfilled=function(I){s.resolve(this.promise,I)},g.prototype.otherCallFulfilled=function(I){p(this.promise,this.onFulfilled,I)},g.prototype.callRejected=function(I){s.reject(this.promise,I)},g.prototype.otherCallRejected=function(I){p(this.promise,this.onRejected,I)};function p(I,L,V){o(function(){var X;try{X=L(V)}catch(N){return s.reject(I,N)}X===I?s.reject(I,new TypeError("Cannot resolve promise with itself")):s.resolve(I,X)})}s.resolve=function(I,L){var V=b(f,L);if(V.status==="error")return s.reject(I,V.value);var X=V.value;if(X)x(I,X);else{I.state=a,I.outcome=L;for(var N=-1,j=I.queue.length;++N<j;)I.queue[N].callFulfilled(L)}return I},s.reject=function(I,L){I.state=l,I.outcome=L;for(var V=-1,X=I.queue.length;++V<X;)I.queue[V].callRejected(L);return I};function f(I){var L=I&&I.then;if(I&&(typeof I=="object"||typeof I=="function")&&typeof L=="function")return function(){L.apply(I,arguments)}}function x(I,L){var V=!1;function X(ce){V||(V=!0,s.reject(I,ce))}function N(ce){V||(V=!0,s.resolve(I,ce))}function j(){L(N,X)}var J=b(j);J.status==="error"&&X(J.value)}function b(I,L){var V={};try{V.value=I(L),V.status="success"}catch(X){V.status="error",V.value=X}return V}d.resolve=y;function y(I){return I instanceof this?I:s.resolve(new this(u),I)}d.reject=P;function P(I){var L=new this(u);return s.reject(L,I)}d.all=W;function W(I){var L=this;if(Object.prototype.toString.call(I)!=="[object Array]")return this.reject(new TypeError("must be an array"));var V=I.length,X=!1;if(!V)return this.resolve([]);for(var N=new Array(V),j=0,J=-1,ce=new this(u);++J<V;)ge(I[J],J);return ce;function ge(Ge,jt){L.resolve(Ge).then(ze,function(Ke){X||(X=!0,s.reject(ce,Ke))});function ze(Ke){N[jt]=Ke,++j===V&&!X&&(X=!0,s.resolve(ce,N))}}}d.race=B;function B(I){var L=this;if(Object.prototype.toString.call(I)!=="[object Array]")return this.reject(new TypeError("must be an array"));var V=I.length,X=!1;if(!V)return this.resolve([]);for(var N=-1,j=new this(u);++N<V;)J(I[N]);return j;function J(ce){L.resolve(ce).then(function(ge){X||(X=!0,s.resolve(j,ge))},function(ge){X||(X=!0,s.reject(j,ge))})}}},{1:1}],3:[function(t,n,i){(function(o){typeof o.Promise!="function"&&(o.Promise=t(2))}).call(this,typeof Vn<"u"?Vn:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(t,n,i){var o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m};function u(m,_){if(!(m instanceof _))throw new TypeError("Cannot call a class as a function")}function s(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var l=s();function a(){try{if(!l||!l.open)return!1;var m=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),_=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!m||_)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function h(m,_){m=m||[],_=_||{};try{return new Blob(m,_)}catch(w){if(w.name!=="TypeError")throw w;for(var S=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,k=new S,$=0;$<m.length;$+=1)k.append(m[$]);return k.getBlob(_.type)}}typeof Promise>"u"&&t(3);var d=Promise;function g(m,_){_&&m.then(function(S){_(null,S)},function(S){_(S)})}function p(m,_,S){typeof _=="function"&&m.then(_),typeof S=="function"&&m.catch(S)}function f(m){return typeof m!="string"&&(console.warn(m+" used as a key, but it is not a string."),m=String(m)),m}function x(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var b="local-forage-detect-blob-support",y=void 0,P={},W=Object.prototype.toString,B="readonly",I="readwrite";function L(m){for(var _=m.length,S=new ArrayBuffer(_),k=new Uint8Array(S),$=0;$<_;$++)k[$]=m.charCodeAt($);return S}function V(m){return new d(function(_){var S=m.transaction(b,I),k=h([""]);S.objectStore(b).put(k,"key"),S.onabort=function($){$.preventDefault(),$.stopPropagation(),_(!1)},S.oncomplete=function(){var $=navigator.userAgent.match(/Chrome\/(\d+)/),w=navigator.userAgent.match(/Edge\//);_(w||!$||parseInt($[1],10)>=43)}}).catch(function(){return!1})}function X(m){return typeof y=="boolean"?d.resolve(y):V(m).then(function(_){return y=_,y})}function N(m){var _=P[m.name],S={};S.promise=new d(function(k,$){S.resolve=k,S.reject=$}),_.deferredOperations.push(S),_.dbReady?_.dbReady=_.dbReady.then(function(){return S.promise}):_.dbReady=S.promise}function j(m){var _=P[m.name],S=_.deferredOperations.pop();if(S)return S.resolve(),S.promise}function J(m,_){var S=P[m.name],k=S.deferredOperations.pop();if(k)return k.reject(_),k.promise}function ce(m,_){return new d(function(S,k){if(P[m.name]=P[m.name]||oe(),m.db)if(_)N(m),m.db.close();else return S(m.db);var $=[m.name];_&&$.push(m.version);var w=l.open.apply(l,$);_&&(w.onupgradeneeded=function(T){var A=w.result;try{A.createObjectStore(m.storeName),T.oldVersion<=1&&A.createObjectStore(b)}catch(U){if(U.name==="ConstraintError")console.warn('The database "'+m.name+'" has been upgraded from version '+T.oldVersion+" to version "+T.newVersion+', but the storage "'+m.storeName+'" already exists.');else throw U}}),w.onerror=function(T){T.preventDefault(),k(w.error)},w.onsuccess=function(){var T=w.result;T.onversionchange=function(A){A.target.close()},S(T),j(m)}})}function ge(m){return ce(m,!1)}function Ge(m){return ce(m,!0)}function jt(m,_){if(!m.db)return!0;var S=!m.db.objectStoreNames.contains(m.storeName),k=m.version<m.db.version,$=m.version>m.db.version;if(k&&(m.version!==_&&console.warn('The database "'+m.name+`" can't be downgraded from version `+m.db.version+" to version "+m.version+"."),m.version=m.db.version),$||S){if(S){var w=m.db.version+1;w>m.version&&(m.version=w)}return!0}return!1}function ze(m){return new d(function(_,S){var k=new FileReader;k.onerror=S,k.onloadend=function($){var w=btoa($.target.result||"");_({__local_forage_encoded_blob:!0,data:w,type:m.type})},k.readAsBinaryString(m)})}function Ke(m){var _=L(atob(m.data));return h([_],{type:m.type})}function Qe(m){return m&&m.__local_forage_encoded_blob}function cr(m){var _=this,S=_._initReady().then(function(){var k=P[_._dbInfo.name];if(k&&k.dbReady)return k.dbReady});return p(S,m,m),S}function Vr(m){N(m);for(var _=P[m.name],S=_.forages,k=0;k<S.length;k++){var $=S[k];$._dbInfo.db&&($._dbInfo.db.close(),$._dbInfo.db=null)}return m.db=null,ge(m).then(function(w){return m.db=w,jt(m)?Ge(m):w}).then(function(w){m.db=_.db=w;for(var T=0;T<S.length;T++)S[T]._dbInfo.db=w}).catch(function(w){throw J(m,w),w})}function ee(m,_,S,k){k===void 0&&(k=1);try{var $=m.db.transaction(m.storeName,_);S(null,$)}catch(w){if(k>0&&(!m.db||w.name==="InvalidStateError"||w.name==="NotFoundError"))return d.resolve().then(function(){if(!m.db||w.name==="NotFoundError"&&!m.db.objectStoreNames.contains(m.storeName)&&m.version<=m.db.version)return m.db&&(m.version=m.db.version+1),Ge(m)}).then(function(){return Vr(m).then(function(){ee(m,_,S,k-1)})}).catch(S);S(w)}}function oe(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Ve(m){var _=this,S={db:null};if(m)for(var k in m)S[k]=m[k];var $=P[S.name];$||($=oe(),P[S.name]=$),$.forages.push(_),_._initReady||(_._initReady=_.ready,_.ready=cr);var w=[];function T(){return d.resolve()}for(var A=0;A<$.forages.length;A++){var U=$.forages[A];U!==_&&w.push(U._initReady().catch(T))}var M=$.forages.slice(0);return d.all(w).then(function(){return S.db=$.db,ge(S)}).then(function(O){return S.db=O,jt(S,_._defaultConfig.version)?Ge(S):O}).then(function(O){S.db=$.db=O,_._dbInfo=S;for(var q=0;q<M.length;q++){var fe=M[q];fe!==_&&(fe._dbInfo.db=S.db,fe._dbInfo.version=S.version)}})}function Vt(m,_){var S=this;m=f(m);var k=new d(function($,w){S.ready().then(function(){ee(S._dbInfo,B,function(T,A){if(T)return w(T);try{var U=A.objectStore(S._dbInfo.storeName),M=U.get(m);M.onsuccess=function(){var O=M.result;O===void 0&&(O=null),Qe(O)&&(O=Ke(O)),$(O)},M.onerror=function(){w(M.error)}}catch(O){w(O)}})}).catch(w)});return g(k,_),k}function Et(m,_){var S=this,k=new d(function($,w){S.ready().then(function(){ee(S._dbInfo,B,function(T,A){if(T)return w(T);try{var U=A.objectStore(S._dbInfo.storeName),M=U.openCursor(),O=1;M.onsuccess=function(){var q=M.result;if(q){var fe=q.value;Qe(fe)&&(fe=Ke(fe));var ye=m(fe,q.key,O++);ye!==void 0?$(ye):q.continue()}else $()},M.onerror=function(){w(M.error)}}catch(q){w(q)}})}).catch(w)});return g(k,_),k}function Re(m,_,S){var k=this;m=f(m);var $=new d(function(w,T){var A;k.ready().then(function(){return A=k._dbInfo,W.call(_)==="[object Blob]"?X(A.db).then(function(U){return U?_:ze(_)}):_}).then(function(U){ee(k._dbInfo,I,function(M,O){if(M)return T(M);try{var q=O.objectStore(k._dbInfo.storeName);U===null&&(U=void 0);var fe=q.put(U,m);O.oncomplete=function(){U===void 0&&(U=null),w(U)},O.onabort=O.onerror=function(){var ye=fe.error?fe.error:fe.transaction.error;T(ye)}}catch(ye){T(ye)}})}).catch(T)});return g($,S),$}function Nr(m,_){var S=this;m=f(m);var k=new d(function($,w){S.ready().then(function(){ee(S._dbInfo,I,function(T,A){if(T)return w(T);try{var U=A.objectStore(S._dbInfo.storeName),M=U.delete(m);A.oncomplete=function(){$()},A.onerror=function(){w(M.error)},A.onabort=function(){var O=M.error?M.error:M.transaction.error;w(O)}}catch(O){w(O)}})}).catch(w)});return g(k,_),k}function ht(m){var _=this,S=new d(function(k,$){_.ready().then(function(){ee(_._dbInfo,I,function(w,T){if(w)return $(w);try{var A=T.objectStore(_._dbInfo.storeName),U=A.clear();T.oncomplete=function(){k()},T.onabort=T.onerror=function(){var M=U.error?U.error:U.transaction.error;$(M)}}catch(M){$(M)}})}).catch($)});return g(S,m),S}function Ye(m){var _=this,S=new d(function(k,$){_.ready().then(function(){ee(_._dbInfo,B,function(w,T){if(w)return $(w);try{var A=T.objectStore(_._dbInfo.storeName),U=A.count();U.onsuccess=function(){k(U.result)},U.onerror=function(){$(U.error)}}catch(M){$(M)}})}).catch($)});return g(S,m),S}function Gt(m,_){var S=this,k=new d(function($,w){if(m<0){$(null);return}S.ready().then(function(){ee(S._dbInfo,B,function(T,A){if(T)return w(T);try{var U=A.objectStore(S._dbInfo.storeName),M=!1,O=U.openKeyCursor();O.onsuccess=function(){var q=O.result;if(!q){$(null);return}m===0||M?$(q.key):(M=!0,q.advance(m))},O.onerror=function(){w(O.error)}}catch(q){w(q)}})}).catch(w)});return g(k,_),k}function C(m){var _=this,S=new d(function(k,$){_.ready().then(function(){ee(_._dbInfo,B,function(w,T){if(w)return $(w);try{var A=T.objectStore(_._dbInfo.storeName),U=A.openKeyCursor(),M=[];U.onsuccess=function(){var O=U.result;if(!O){k(M);return}M.push(O.key),O.continue()},U.onerror=function(){$(U.error)}}catch(O){$(O)}})}).catch($)});return g(S,m),S}function G(m,_){_=x.apply(this,arguments);var S=this.config();m=typeof m!="function"&&m||{},m.name||(m.name=m.name||S.name,m.storeName=m.storeName||S.storeName);var k=this,$;if(!m.name)$=d.reject("Invalid arguments");else{var w=m.name===S.name&&k._dbInfo.db,T=w?d.resolve(k._dbInfo.db):ge(m).then(function(A){var U=P[m.name],M=U.forages;U.db=A;for(var O=0;O<M.length;O++)M[O]._dbInfo.db=A;return A});m.storeName?$=T.then(function(A){if(A.objectStoreNames.contains(m.storeName)){var U=A.version+1;N(m);var M=P[m.name],O=M.forages;A.close();for(var q=0;q<O.length;q++){var fe=O[q];fe._dbInfo.db=null,fe._dbInfo.version=U}var ye=new d(function(ve,Ee){var De=l.open(m.name,U);De.onerror=function(yt){var en=De.result;en.close(),Ee(yt)},De.onupgradeneeded=function(){var yt=De.result;yt.deleteObjectStore(m.storeName)},De.onsuccess=function(){var yt=De.result;yt.close(),ve(yt)}});return ye.then(function(ve){M.db=ve;for(var Ee=0;Ee<O.length;Ee++){var De=O[Ee];De._dbInfo.db=ve,j(De._dbInfo)}}).catch(function(ve){throw(J(m,ve)||d.resolve()).catch(function(){}),ve})}}):$=T.then(function(A){N(m);var U=P[m.name],M=U.forages;A.close();for(var O=0;O<M.length;O++){var q=M[O];q._dbInfo.db=null}var fe=new d(function(ye,ve){var Ee=l.deleteDatabase(m.name);Ee.onerror=function(){var De=Ee.result;De&&De.close(),ve(Ee.error)},Ee.onblocked=function(){console.warn('dropInstance blocked for database "'+m.name+'" until all open connections are closed')},Ee.onsuccess=function(){var De=Ee.result;De&&De.close(),ye(De)}});return fe.then(function(ye){U.db=ye;for(var ve=0;ve<M.length;ve++){var Ee=M[ve];j(Ee._dbInfo)}}).catch(function(ye){throw(J(m,ye)||d.resolve()).catch(function(){}),ye})})}return g($,_),$}var E={_driver:"asyncStorage",_initStorage:Ve,_support:a(),iterate:Et,getItem:Vt,setItem:Re,removeItem:Nr,clear:ht,length:Ye,key:Gt,keys:C,dropInstance:G};function H(){return typeof openDatabase=="function"}var z="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Z="~~local_forage_type~",Se=/^~~local_forage_type~([^~]+)~/,ae="__lfsc__:",be=ae.length,Ie="arbf",xt="blob",Jr="si08",Kr="ui08",tt="uic8",bt="si16",rt="si32",_t="ur16",hr="ui32",Tr="fl32",pr="fl64",Fr=be+Ie.length,ss=Object.prototype.toString;function ls(m){var _=m.length*.75,S=m.length,k,$=0,w,T,A,U;m[m.length-1]==="="&&(_--,m[m.length-2]==="="&&_--);var M=new ArrayBuffer(_),O=new Uint8Array(M);for(k=0;k<S;k+=4)w=z.indexOf(m[k]),T=z.indexOf(m[k+1]),A=z.indexOf(m[k+2]),U=z.indexOf(m[k+3]),O[$++]=w<<2|T>>4,O[$++]=(T&15)<<4|A>>2,O[$++]=(A&3)<<6|U&63;return M}function so(m){var _=new Uint8Array(m),S="",k;for(k=0;k<_.length;k+=3)S+=z[_[k]>>2],S+=z[(_[k]&3)<<4|_[k+1]>>4],S+=z[(_[k+1]&15)<<2|_[k+2]>>6],S+=z[_[k+2]&63];return _.length%3===2?S=S.substring(0,S.length-1)+"=":_.length%3===1&&(S=S.substring(0,S.length-2)+"=="),S}function ch(m,_){var S="";if(m&&(S=ss.call(m)),m&&(S==="[object ArrayBuffer]"||m.buffer&&ss.call(m.buffer)==="[object ArrayBuffer]")){var k,$=ae;m instanceof ArrayBuffer?(k=m,$+=Ie):(k=m.buffer,S==="[object Int8Array]"?$+=Jr:S==="[object Uint8Array]"?$+=Kr:S==="[object Uint8ClampedArray]"?$+=tt:S==="[object Int16Array]"?$+=bt:S==="[object Uint16Array]"?$+=_t:S==="[object Int32Array]"?$+=rt:S==="[object Uint32Array]"?$+=hr:S==="[object Float32Array]"?$+=Tr:S==="[object Float64Array]"?$+=pr:_(new Error("Failed to get type for BinaryArray"))),_($+so(k))}else if(S==="[object Blob]"){var w=new FileReader;w.onload=function(){var T=Z+m.type+"~"+so(this.result);_(ae+xt+T)},w.readAsArrayBuffer(m)}else try{_(JSON.stringify(m))}catch(T){console.error("Couldn't convert value into a JSON string: ",m),_(null,T)}}function hh(m){if(m.substring(0,be)!==ae)return JSON.parse(m);var _=m.substring(Fr),S=m.substring(be,Fr),k;if(S===xt&&Se.test(_)){var $=_.match(Se);k=$[1],_=_.substring($[0].length)}var w=ls(_);switch(S){case Ie:return w;case xt:return h([w],{type:k});case Jr:return new Int8Array(w);case Kr:return new Uint8Array(w);case tt:return new Uint8ClampedArray(w);case bt:return new Int16Array(w);case _t:return new Uint16Array(w);case rt:return new Int32Array(w);case hr:return new Uint32Array(w);case Tr:return new Float32Array(w);case pr:return new Float64Array(w);default:throw new Error("Unkown type: "+S)}}var lo={serialize:ch,deserialize:hh,stringToBuffer:ls,bufferToString:so};function ds(m,_,S,k){m.executeSql("CREATE TABLE IF NOT EXISTS "+_.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],S,k)}function ph(m){var _=this,S={db:null};if(m)for(var k in m)S[k]=typeof m[k]!="string"?m[k].toString():m[k];var $=new d(function(w,T){try{S.db=openDatabase(S.name,String(S.version),S.description,S.size)}catch(A){return T(A)}S.db.transaction(function(A){ds(A,S,function(){_._dbInfo=S,w()},function(U,M){T(M)})},T)});return S.serializer=lo,$}function Kt(m,_,S,k,$,w){m.executeSql(S,k,$,function(T,A){A.code===A.SYNTAX_ERR?T.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[_.storeName],function(U,M){M.rows.length?w(U,A):ds(U,_,function(){U.executeSql(S,k,$,w)},w)},w):w(T,A)},w)}function gh(m,_){var S=this;m=f(m);var k=new d(function($,w){S.ready().then(function(){var T=S._dbInfo;T.db.transaction(function(A){Kt(A,T,"SELECT * FROM "+T.storeName+" WHERE key = ? LIMIT 1",[m],function(U,M){var O=M.rows.length?M.rows.item(0).value:null;O&&(O=T.serializer.deserialize(O)),$(O)},function(U,M){w(M)})})}).catch(w)});return g(k,_),k}function fh(m,_){var S=this,k=new d(function($,w){S.ready().then(function(){var T=S._dbInfo;T.db.transaction(function(A){Kt(A,T,"SELECT * FROM "+T.storeName,[],function(U,M){for(var O=M.rows,q=O.length,fe=0;fe<q;fe++){var ye=O.item(fe),ve=ye.value;if(ve&&(ve=T.serializer.deserialize(ve)),ve=m(ve,ye.key,fe+1),ve!==void 0){$(ve);return}}$()},function(U,M){w(M)})})}).catch(w)});return g(k,_),k}function us(m,_,S,k){var $=this;m=f(m);var w=new d(function(T,A){$.ready().then(function(){_===void 0&&(_=null);var U=_,M=$._dbInfo;M.serializer.serialize(_,function(O,q){q?A(q):M.db.transaction(function(fe){Kt(fe,M,"INSERT OR REPLACE INTO "+M.storeName+" (key, value) VALUES (?, ?)",[m,O],function(){T(U)},function(ye,ve){A(ve)})},function(fe){if(fe.code===fe.QUOTA_ERR){if(k>0){T(us.apply($,[m,U,S,k-1]));return}A(fe)}})})}).catch(A)});return g(w,S),w}function mh(m,_,S){return us.apply(this,[m,_,S,1])}function Sh(m,_){var S=this;m=f(m);var k=new d(function($,w){S.ready().then(function(){var T=S._dbInfo;T.db.transaction(function(A){Kt(A,T,"DELETE FROM "+T.storeName+" WHERE key = ?",[m],function(){$()},function(U,M){w(M)})})}).catch(w)});return g(k,_),k}function xh(m){var _=this,S=new d(function(k,$){_.ready().then(function(){var w=_._dbInfo;w.db.transaction(function(T){Kt(T,w,"DELETE FROM "+w.storeName,[],function(){k()},function(A,U){$(U)})})}).catch($)});return g(S,m),S}function bh(m){var _=this,S=new d(function(k,$){_.ready().then(function(){var w=_._dbInfo;w.db.transaction(function(T){Kt(T,w,"SELECT COUNT(key) as c FROM "+w.storeName,[],function(A,U){var M=U.rows.item(0).c;k(M)},function(A,U){$(U)})})}).catch($)});return g(S,m),S}function _h(m,_){var S=this,k=new d(function($,w){S.ready().then(function(){var T=S._dbInfo;T.db.transaction(function(A){Kt(A,T,"SELECT key FROM "+T.storeName+" WHERE id = ? LIMIT 1",[m+1],function(U,M){var O=M.rows.length?M.rows.item(0).key:null;$(O)},function(U,M){w(M)})})}).catch(w)});return g(k,_),k}function yh(m){var _=this,S=new d(function(k,$){_.ready().then(function(){var w=_._dbInfo;w.db.transaction(function(T){Kt(T,w,"SELECT key FROM "+w.storeName,[],function(A,U){for(var M=[],O=0;O<U.rows.length;O++)M.push(U.rows.item(O).key);k(M)},function(A,U){$(U)})})}).catch($)});return g(S,m),S}function vh(m){return new d(function(_,S){m.transaction(function(k){k.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function($,w){for(var T=[],A=0;A<w.rows.length;A++)T.push(w.rows.item(A).name);_({db:m,storeNames:T})},function($,w){S(w)})},function(k){S(k)})})}function wh(m,_){_=x.apply(this,arguments);var S=this.config();m=typeof m!="function"&&m||{},m.name||(m.name=m.name||S.name,m.storeName=m.storeName||S.storeName);var k=this,$;return m.name?$=new d(function(w){var T;m.name===S.name?T=k._dbInfo.db:T=openDatabase(m.name,"","",0),m.storeName?w({db:T,storeNames:[m.storeName]}):w(vh(T))}).then(function(w){return new d(function(T,A){w.db.transaction(function(U){function M(ye){return new d(function(ve,Ee){U.executeSql("DROP TABLE IF EXISTS "+ye,[],function(){ve()},function(De,yt){Ee(yt)})})}for(var O=[],q=0,fe=w.storeNames.length;q<fe;q++)O.push(M(w.storeNames[q]));d.all(O).then(function(){T()}).catch(function(ye){A(ye)})},function(U){A(U)})})}):$=d.reject("Invalid arguments"),g($,_),$}var kh={_driver:"webSQLStorage",_initStorage:ph,_support:H(),iterate:fh,getItem:gh,setItem:mh,removeItem:Sh,clear:xh,length:bh,key:_h,keys:yh,dropInstance:wh};function $h(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function cs(m,_){var S=m.name+"/";return m.storeName!==_.storeName&&(S+=m.storeName+"/"),S}function Ih(){var m="_localforage_support_test";try{return localStorage.setItem(m,!0),localStorage.removeItem(m),!1}catch{return!0}}function Ph(){return!Ih()||localStorage.length>0}function Bh(m){var _=this,S={};if(m)for(var k in m)S[k]=m[k];return S.keyPrefix=cs(m,_._defaultConfig),Ph()?(_._dbInfo=S,S.serializer=lo,d.resolve()):d.reject()}function Ch(m){var _=this,S=_.ready().then(function(){for(var k=_._dbInfo.keyPrefix,$=localStorage.length-1;$>=0;$--){var w=localStorage.key($);w.indexOf(k)===0&&localStorage.removeItem(w)}});return g(S,m),S}function Vh(m,_){var S=this;m=f(m);var k=S.ready().then(function(){var $=S._dbInfo,w=localStorage.getItem($.keyPrefix+m);return w&&(w=$.serializer.deserialize(w)),w});return g(k,_),k}function Nh(m,_){var S=this,k=S.ready().then(function(){for(var $=S._dbInfo,w=$.keyPrefix,T=w.length,A=localStorage.length,U=1,M=0;M<A;M++){var O=localStorage.key(M);if(O.indexOf(w)===0){var q=localStorage.getItem(O);if(q&&(q=$.serializer.deserialize(q)),q=m(q,O.substring(T),U++),q!==void 0)return q}}});return g(k,_),k}function Th(m,_){var S=this,k=S.ready().then(function(){var $=S._dbInfo,w;try{w=localStorage.key(m)}catch{w=null}return w&&(w=w.substring($.keyPrefix.length)),w});return g(k,_),k}function Fh(m){var _=this,S=_.ready().then(function(){for(var k=_._dbInfo,$=localStorage.length,w=[],T=0;T<$;T++){var A=localStorage.key(T);A.indexOf(k.keyPrefix)===0&&w.push(A.substring(k.keyPrefix.length))}return w});return g(S,m),S}function Dh(m){var _=this,S=_.keys().then(function(k){return k.length});return g(S,m),S}function Wh(m,_){var S=this;m=f(m);var k=S.ready().then(function(){var $=S._dbInfo;localStorage.removeItem($.keyPrefix+m)});return g(k,_),k}function Lh(m,_,S){var k=this;m=f(m);var $=k.ready().then(function(){_===void 0&&(_=null);var w=_;return new d(function(T,A){var U=k._dbInfo;U.serializer.serialize(_,function(M,O){if(O)A(O);else try{localStorage.setItem(U.keyPrefix+m,M),T(w)}catch(q){(q.name==="QuotaExceededError"||q.name==="NS_ERROR_DOM_QUOTA_REACHED")&&A(q),A(q)}})})});return g($,S),$}function Eh(m,_){if(_=x.apply(this,arguments),m=typeof m!="function"&&m||{},!m.name){var S=this.config();m.name=m.name||S.name,m.storeName=m.storeName||S.storeName}var k=this,$;return m.name?$=new d(function(w){m.storeName?w(cs(m,k._defaultConfig)):w(m.name+"/")}).then(function(w){for(var T=localStorage.length-1;T>=0;T--){var A=localStorage.key(T);A.indexOf(w)===0&&localStorage.removeItem(A)}}):$=d.reject("Invalid arguments"),g($,_),$}var Ah={_driver:"localStorageWrapper",_initStorage:Bh,_support:$h(),iterate:Nh,getItem:Vh,setItem:Lh,removeItem:Wh,clear:Ch,length:Dh,key:Th,keys:Fh,dropInstance:Eh},Uh=function(_,S){return _===S||typeof _=="number"&&typeof S=="number"&&isNaN(_)&&isNaN(S)},Mh=function(_,S){for(var k=_.length,$=0;$<k;){if(Uh(_[$],S))return!0;$++}return!1},hs=Array.isArray||function(m){return Object.prototype.toString.call(m)==="[object Array]"},Qr={},ps={},Dr={INDEXEDDB:E,WEBSQL:kh,LOCALSTORAGE:Ah},Xh=[Dr.INDEXEDDB._driver,Dr.WEBSQL._driver,Dr.LOCALSTORAGE._driver],Cn=["dropInstance"],uo=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Cn),Hh={description:"",driver:Xh.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Oh(m,_){m[_]=function(){var S=arguments;return m.ready().then(function(){return m[_].apply(m,S)})}}function co(){for(var m=1;m<arguments.length;m++){var _=arguments[m];if(_)for(var S in _)_.hasOwnProperty(S)&&(hs(_[S])?arguments[0][S]=_[S].slice():arguments[0][S]=_[S])}return arguments[0]}var jh=function(){function m(_){u(this,m);for(var S in Dr)if(Dr.hasOwnProperty(S)){var k=Dr[S],$=k._driver;this[S]=$,Qr[$]||this.defineDriver(k)}this._defaultConfig=co({},Hh),this._config=co({},this._defaultConfig,_),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return m.prototype.config=function(S){if((typeof S>"u"?"undefined":o(S))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var k in S){if(k==="storeName"&&(S[k]=S[k].replace(/\W/g,"_")),k==="version"&&typeof S[k]!="number")return new Error("Database version must be a number.");this._config[k]=S[k]}return"driver"in S&&S.driver?this.setDriver(this._config.driver):!0}else return typeof S=="string"?this._config[S]:this._config},m.prototype.defineDriver=function(S,k,$){var w=new d(function(T,A){try{var U=S._driver,M=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!S._driver){A(M);return}for(var O=uo.concat("_initStorage"),q=0,fe=O.length;q<fe;q++){var ye=O[q],ve=!Mh(Cn,ye);if((ve||S[ye])&&typeof S[ye]!="function"){A(M);return}}var Ee=function(){for(var en=function(Rh){return function(){var Yh=new Error("Method "+Rh+" is not implemented by the current driver"),gs=d.reject(Yh);return g(gs,arguments[arguments.length-1]),gs}},ho=0,zh=Cn.length;ho<zh;ho++){var po=Cn[ho];S[po]||(S[po]=en(po))}};Ee();var De=function(en){Qr[U]&&console.info("Redefining LocalForage driver: "+U),Qr[U]=S,ps[U]=en,T()};"_support"in S?S._support&&typeof S._support=="function"?S._support().then(De,A):De(!!S._support):De(!0)}catch(yt){A(yt)}});return p(w,k,$),w},m.prototype.driver=function(){return this._driver||null},m.prototype.getDriver=function(S,k,$){var w=Qr[S]?d.resolve(Qr[S]):d.reject(new Error("Driver not found."));return p(w,k,$),w},m.prototype.getSerializer=function(S){var k=d.resolve(lo);return p(k,S),k},m.prototype.ready=function(S){var k=this,$=k._driverSet.then(function(){return k._ready===null&&(k._ready=k._initDriver()),k._ready});return p($,S,S),$},m.prototype.setDriver=function(S,k,$){var w=this;hs(S)||(S=[S]);var T=this._getSupportedDrivers(S);function A(){w._config.driver=w.driver()}function U(q){return w._extend(q),A(),w._ready=w._initStorage(w._config),w._ready}function M(q){return function(){var fe=0;function ye(){for(;fe<q.length;){var ve=q[fe];return fe++,w._dbInfo=null,w._ready=null,w.getDriver(ve).then(U).catch(ye)}A();var Ee=new Error("No available storage method found.");return w._driverSet=d.reject(Ee),w._driverSet}return ye()}}var O=this._driverSet!==null?this._driverSet.catch(function(){return d.resolve()}):d.resolve();return this._driverSet=O.then(function(){var q=T[0];return w._dbInfo=null,w._ready=null,w.getDriver(q).then(function(fe){w._driver=fe._driver,A(),w._wrapLibraryMethodsWithReady(),w._initDriver=M(T)})}).catch(function(){A();var q=new Error("No available storage method found.");return w._driverSet=d.reject(q),w._driverSet}),p(this._driverSet,k,$),this._driverSet},m.prototype.supports=function(S){return!!ps[S]},m.prototype._extend=function(S){co(this,S)},m.prototype._getSupportedDrivers=function(S){for(var k=[],$=0,w=S.length;$<w;$++){var T=S[$];this.supports(T)&&k.push(T)}return k},m.prototype._wrapLibraryMethodsWithReady=function(){for(var S=0,k=uo.length;S<k;S++)Oh(this,uo[S])},m.prototype.createInstance=function(S){return new m(S)},m}(),Gh=new jh;n.exports=Gh},{3:3}]},{},[4])(4)})})(wu);var gp=wu.exports;const on=pp(gp);var ga,Ue,ku,gr,xs,$u,Do,fa,Wo,Lo,Eo={},Iu=[],fp=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ma=Array.isArray;function tr(r,e){for(var t in e)r[t]=e[t];return r}function Pu(r){var e=r.parentNode;e&&e.removeChild(r)}function Sa(r,e,t){var n,i,o,u={};for(o in e)o=="key"?n=e[o]:o=="ref"?i=e[o]:u[o]=e[o];if(arguments.length>2&&(u.children=arguments.length>3?ga.call(arguments,2):t),typeof r=="function"&&r.defaultProps!=null)for(o in r.defaultProps)u[o]===void 0&&(u[o]=r.defaultProps[o]);return jn(r,u,n,i,null)}function jn(r,e,t,n,i){var o={type:r,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i??++ku,__i:-1,__u:0};return i==null&&Ue.vnode!=null&&Ue.vnode(o),o}function xa(r){return r.children}function nr(r,e){this.props=r,this.context=e}function vr(r,e){if(e==null)return r.__?vr(r.__,r.__i+1):null;for(var t;e<r.__k.length;e++)if((t=r.__k[e])!=null&&t.__e!=null)return t.__e;return typeof r.type=="function"?vr(r):null}function Bu(r){var e,t;if((r=r.__)!=null&&r.__c!=null){for(r.__e=r.__c.base=null,e=0;e<r.__k.length;e++)if((t=r.__k[e])!=null&&t.__e!=null){r.__e=r.__c.base=t.__e;break}return Bu(r)}}function bs(r){(!r.__d&&(r.__d=!0)&&gr.push(r)&&!ui.__r++||xs!==Ue.debounceRendering)&&((xs=Ue.debounceRendering)||$u)(ui)}function ui(){var r,e,t,n,i,o,u,s;for(gr.sort(Do);r=gr.shift();)r.__d&&(e=gr.length,n=void 0,o=(i=(t=r).__v).__e,u=[],s=[],t.__P&&((n=tr({},i)).__v=i.__v+1,Ue.vnode&&Ue.vnode(n),Nu(t.__P,n,i,t.__n,t.__P.namespaceURI,32&i.__u?[o]:null,u,o??vr(i),!!(32&i.__u),s),n.__v=i.__v,n.__.__k[n.__i]=n,xp(u,n,s),n.__e!=o&&Bu(n)),gr.length>e&&gr.sort(Do));ui.__r=0}function Cu(r,e,t,n,i,o,u,s,l,a,h){var d,g,p,f,x,b=n&&n.__k||Iu,y=e.length;for(t.__d=l,mp(t,e,b),l=t.__d,d=0;d<y;d++)(p=t.__k[d])!=null&&typeof p!="boolean"&&typeof p!="function"&&(g=p.__i===-1?Eo:b[p.__i]||Eo,p.__i=d,Nu(r,p,g,i,o,u,s,l,a,h),f=p.__e,p.ref&&g.ref!=p.ref&&(g.ref&&ba(g.ref,null,p),h.push(p.ref,p.__c||f,p)),x==null&&f!=null&&(x=f),65536&p.__u||g.__k===p.__k?(l&&!l.isConnected&&(l=vr(g)),l=Vu(p,l,r)):typeof p.type=="function"&&p.__d!==void 0?l=p.__d:f&&(l=f.nextSibling),p.__d=void 0,p.__u&=-196609);t.__d=l,t.__e=x}function mp(r,e,t){var n,i,o,u,s,l=e.length,a=t.length,h=a,d=0;for(r.__k=[],n=0;n<l;n++)u=n+d,(i=r.__k[n]=(i=e[n])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?jn(null,i,null,null,null):ma(i)?jn(xa,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?jn(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null?(i.__=r,i.__b=r.__b+1,s=Sp(i,t,u,h),i.__i=s,o=null,s!==-1&&(h--,(o=t[s])&&(o.__u|=131072)),o==null||o.__v===null?(s==-1&&d--,typeof i.type!="function"&&(i.__u|=65536)):s!==u&&(s===u+1?d++:s>u?h>l-u?d+=s-u:d--:s<u?s==u-1&&(d=s-u):d=0,s!==n+d&&(i.__u|=65536))):(o=t[u])&&o.key==null&&o.__e&&!(131072&o.__u)&&(o.__e==r.__d&&(r.__d=vr(o)),Ao(o,o,!1),t[u]=null,h--);if(h)for(n=0;n<a;n++)(o=t[n])!=null&&!(131072&o.__u)&&(o.__e==r.__d&&(r.__d=vr(o)),Ao(o,o))}function Vu(r,e,t){var n,i;if(typeof r.type=="function"){for(n=r.__k,i=0;n&&i<n.length;i++)n[i]&&(n[i].__=r,e=Vu(n[i],e,t));return e}r.__e!=e&&(t.insertBefore(r.__e,e||null),e=r.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function Sp(r,e,t,n){var i=r.key,o=r.type,u=t-1,s=t+1,l=e[t];if(l===null||l&&i==l.key&&o===l.type&&!(131072&l.__u))return t;if(n>(l!=null&&!(131072&l.__u)?1:0))for(;u>=0||s<e.length;){if(u>=0){if((l=e[u])&&!(131072&l.__u)&&i==l.key&&o===l.type)return u;u--}if(s<e.length){if((l=e[s])&&!(131072&l.__u)&&i==l.key&&o===l.type)return s;s++}}return-1}function _s(r,e,t){e[0]==="-"?r.setProperty(e,t??""):r[e]=t==null?"":typeof t!="number"||fp.test(e)?t:t+"px"}function Tn(r,e,t,n,i){var o;e:if(e==="style")if(typeof t=="string")r.style.cssText=t;else{if(typeof n=="string"&&(r.style.cssText=n=""),n)for(e in n)t&&e in t||_s(r.style,e,"");if(t)for(e in t)n&&t[e]===n[e]||_s(r.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in r||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),r.l||(r.l={}),r.l[e+o]=t,t?n?t.u=n.u:(t.u=fa,r.addEventListener(e,o?Lo:Wo,o)):r.removeEventListener(e,o?Lo:Wo,o);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e in r)try{r[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?r.removeAttribute(e):r.setAttribute(e,t))}}function ys(r){return function(e){if(this.l){var t=this.l[e.type+r];if(e.t==null)e.t=fa++;else if(e.t<t.u)return;return t(Ue.event?Ue.event(e):e)}}}function Nu(r,e,t,n,i,o,u,s,l,a){var h,d,g,p,f,x,b,y,P,W,B,I,L,V,X,N=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),o=[s=e.__e=t.__e]),(h=Ue.__b)&&h(e);e:if(typeof N=="function")try{if(y=e.props,P=(h=N.contextType)&&n[h.__c],W=h?P?P.props.value:h.__:n,t.__c?b=(d=e.__c=t.__c).__=d.__E:("prototype"in N&&N.prototype.render?e.__c=d=new N(y,W):(e.__c=d=new nr(y,W),d.constructor=N,d.render=_p),P&&P.sub(d),d.props=y,d.state||(d.state={}),d.context=W,d.__n=n,g=d.__d=!0,d.__h=[],d._sb=[]),d.__s==null&&(d.__s=d.state),N.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=tr({},d.__s)),tr(d.__s,N.getDerivedStateFromProps(y,d.__s))),p=d.props,f=d.state,d.__v=e,g)N.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(N.getDerivedStateFromProps==null&&y!==p&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(y,W),!d.__e&&(d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(y,d.__s,W)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(d.props=y,d.state=d.__s,d.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(j){j&&(j.__=e)}),B=0;B<d._sb.length;B++)d.__h.push(d._sb[B]);d._sb=[],d.__h.length&&u.push(d);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(y,d.__s,W),d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(p,f,x)})}if(d.context=W,d.props=y,d.__P=r,d.__e=!1,I=Ue.__r,L=0,"prototype"in N&&N.prototype.render){for(d.state=d.__s,d.__d=!1,I&&I(e),h=d.render(d.props,d.state,d.context),V=0;V<d._sb.length;V++)d.__h.push(d._sb[V]);d._sb=[]}else do d.__d=!1,I&&I(e),h=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++L<25);d.state=d.__s,d.getChildContext!=null&&(n=tr(tr({},n),d.getChildContext())),g||d.getSnapshotBeforeUpdate==null||(x=d.getSnapshotBeforeUpdate(p,f)),Cu(r,ma(X=h!=null&&h.type===xa&&h.key==null?h.props.children:h)?X:[X],e,t,n,i,o,u,s,l,a),d.base=e.__e,e.__u&=-161,d.__h.length&&u.push(d),b&&(d.__E=d.__=null)}catch(j){e.__v=null,l||o!=null?(e.__e=s,e.__u|=l?160:32,o[o.indexOf(s)]=null):(e.__e=t.__e,e.__k=t.__k),Ue.__e(j,e,t)}else o==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=bp(t.__e,e,t,n,i,o,u,l,a);(h=Ue.diffed)&&h(e)}function xp(r,e,t){e.__d=void 0;for(var n=0;n<t.length;n++)ba(t[n],t[++n],t[++n]);Ue.__c&&Ue.__c(e,r),r.some(function(i){try{r=i.__h,i.__h=[],r.some(function(o){o.call(i)})}catch(o){Ue.__e(o,i.__v)}})}function bp(r,e,t,n,i,o,u,s,l){var a,h,d,g,p,f,x,b=t.props,y=e.props,P=e.type;if(P==="svg"?i="http://www.w3.org/2000/svg":P==="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),o!=null){for(a=0;a<o.length;a++)if((p=o[a])&&"setAttribute"in p==!!P&&(P?p.localName===P:p.nodeType===3)){r=p,o[a]=null;break}}if(r==null){if(P===null)return document.createTextNode(y);r=document.createElementNS(i,P,y.is&&y),o=null,s=!1}if(P===null)b===y||s&&r.data===y||(r.data=y);else{if(o=o&&ga.call(r.childNodes),b=t.props||Eo,!s&&o!=null)for(b={},a=0;a<r.attributes.length;a++)b[(p=r.attributes[a]).name]=p.value;for(a in b)if(p=b[a],a!="children"){if(a=="dangerouslySetInnerHTML")d=p;else if(a!=="key"&&!(a in y)){if(a=="value"&&"defaultValue"in y||a=="checked"&&"defaultChecked"in y)continue;Tn(r,a,null,p,i)}}for(a in y)p=y[a],a=="children"?g=p:a=="dangerouslySetInnerHTML"?h=p:a=="value"?f=p:a=="checked"?x=p:a==="key"||s&&typeof p!="function"||b[a]===p||Tn(r,a,p,b[a],i);if(h)s||d&&(h.__html===d.__html||h.__html===r.innerHTML)||(r.innerHTML=h.__html),e.__k=[];else if(d&&(r.innerHTML=""),Cu(r,ma(g)?g:[g],e,t,n,P==="foreignObject"?"http://www.w3.org/1999/xhtml":i,o,u,o?o[0]:t.__k&&vr(t,0),s,l),o!=null)for(a=o.length;a--;)o[a]!=null&&Pu(o[a]);s||(a="value",f!==void 0&&(f!==r[a]||P==="progress"&&!f||P==="option"&&f!==b[a])&&Tn(r,a,f,b[a],i),a="checked",x!==void 0&&x!==r[a]&&Tn(r,a,x,b[a],i))}return r}function ba(r,e,t){try{typeof r=="function"?r(e):r.current=e}catch(n){Ue.__e(n,t)}}function Ao(r,e,t){var n,i;if(Ue.unmount&&Ue.unmount(r),(n=r.ref)&&(n.current&&n.current!==r.__e||ba(n,null,e)),(n=r.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){Ue.__e(o,e)}n.base=n.__P=null}if(n=r.__k)for(i=0;i<n.length;i++)n[i]&&Ao(n[i],e,t||typeof r.type!="function");t||r.__e==null||Pu(r.__e),r.__c=r.__=r.__e=r.__d=void 0}function _p(r,e,t){return this.constructor(r,t)}ga=Iu.slice,Ue={__e:function(r,e,t,n){for(var i,o,u;e=e.__;)if((i=e.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(r)),u=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(r,n||{}),u=i.__d),u)return i.__E=i}catch(s){r=s}throw r}},ku=0,nr.prototype.setState=function(r,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=tr({},this.state),typeof r=="function"&&(r=r(tr({},t),this.props)),r&&tr(t,r),r!=null&&this.__v&&(e&&this._sb.push(e),bs(this))},nr.prototype.forceUpdate=function(r){this.__v&&(this.__e=!0,r&&this.__h.push(r),bs(this))},nr.prototype.render=xa,gr=[],$u=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Do=function(r,e){return r.__v.__b-e.__v.__b},ui.__r=0,fa=0,Wo=ys(!1),Lo=ys(!0);var Tu=function(r,e,t,n){var i;e[0]=0;for(var o=1;o<e.length;o++){var u=e[o++],s=e[o]?(e[0]|=u?1:2,t[e[o++]]):e[++o];u===3?n[0]=s:u===4?n[1]=Object.assign(n[1]||{},s):u===5?(n[1]=n[1]||{})[e[++o]]=s:u===6?n[1][e[++o]]+=s+"":u?(i=r.apply(s,Tu(r,s,t,["",null])),n.push(i),s[0]?e[0]|=2:(e[o-2]=0,e[o]=i)):n.push(s)}return n},vs=new Map;function _a(r){var e=vs.get(this);return e||(e=new Map,vs.set(this,e)),(e=Tu(this,e.get(r)||(e.set(r,e=function(t){for(var n,i,o=1,u="",s="",l=[0],a=function(g){o===1&&(g||(u=u.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,g,u):o===3&&(g||u)?(l.push(3,g,u),o=2):o===2&&u==="..."&&g?l.push(4,g,0):o===2&&u&&!g?l.push(5,0,!0,u):o>=5&&((u||!g&&o===5)&&(l.push(o,0,u,i),o=6),g&&(l.push(o,g,0,i),o=6)),u=""},h=0;h<t.length;h++){h&&(o===1&&a(),a(h));for(var d=0;d<t[h].length;d++)n=t[h][d],o===1?n==="<"?(a(),l=[l],o=3):u+=n:o===4?u==="--"&&n===">"?(o=1,u=""):u=n+u[0]:s?n===s?s="":u+=n:n==='"'||n==="'"?s=n:n===">"?(a(),o=1):o&&(n==="="?(o=5,i=u,u=""):n==="/"&&(o<5||t[h][d+1]===">")?(a(),o===3&&(l=l[0]),o=l,(l=l[0]).push(2,0,o),o=0):n===" "||n==="	"||n===`
`||n==="\r"?(a(),o=2):u+=n),o===3&&u==="!--"&&(o=4,l=l[0])}return a(),l}(r)),e),arguments,[])).length>1?e:e[0]}var or=_a.bind(Sa);let yp=r=>crypto.getRandomValues(new Uint8Array(r)),vp=(r,e,t)=>{let n=(2<<Math.log(r.length-1)/Math.LN2)-1,i=-~(1.6*n*e/r.length);return(o=e)=>{let u="";for(;;){let s=t(i),l=i;for(;l--;)if(u+=r[s[l]&n]||"",u.length===o)return u}}},wp=(r,e=21)=>vp(r,e,yp);var Fu="abcdefghijklmnopqrstuvwxyz",Du="ABCDEFGHIJKLMNOPQRSTUVWXYZ",Wu="0123456789",kp="346789ABCDEFGHJKLMNPQRTUVWXYabcdefghijkmnpqrtwxyz",$p="6789BCDFGHJKLMNPQRTWbcdfghjkmnpqrtwz";const Ip=Wu,Pp=Fu,Bp=Du;var Cp=Ip+Pp+Bp,Vp={lowercase:Fu,uppercase:Du,numbers:Wu,nolookalikes:kp,nolookalikesSafe:$p,alphanumeric:Cp},Np=Object.defineProperty,Tp=(r,e,t)=>e in r?Np(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,he=(r,e,t)=>(Tp(r,typeof e!="symbol"?e+"":e,t),t),Ui=_a.bind(Sa);const Fp=["String","Number","Object","Array","Boolean","Date"];function fo(r){return r&&typeof r=="object"}function Uo(r,e,t){Object.defineProperty(r,e,{value:t,enumerable:!1,configurable:!0})}function ws(r,e,t){Uo(r,"__key",e),Uo(r,"__parent",t)}function Dp(r){return Object.getOwnPropertyNames(r).concat(Object.getPrototypeOf(r)&&Fp.indexOf(Object.getPrototypeOf(r).constructor.name)<0?Object.getOwnPropertyNames(Object.getPrototypeOf(r)):[]).filter(e=>e!=="constructor"&&typeof r[e]=="function")}const ya={computedStack:[],trackerSymbol:Symbol("tracker")};let Ar=null;const ci=Symbol();function Mo(){if(Ar){for(const r of Ar)r(),r[ci]=!1;Ar=null}}function ks(r,e){r[ci]||(Ar===null&&(Ar=[],e===!0?queueMicrotask(Mo):setTimeout(Mo,e)),Ar.push(r))}const{computedStack:Fn,trackerSymbol:mo}=ya,So=Symbol("__observed"),Rt=Symbol("modifiedProperty");function Gn(r,e={}){const{props:t,ignore:n,batch:i,deep:o=!0,bubble:u,bind:s}=e;if(r[So])return r;const l=g=>g!==So&&(t==null||t instanceof Array&&t.includes(g))&&(n==null||n instanceof Array&&!n.includes(g));o&&Object.entries(r).forEach(function([g,p]){fo(p)&&l(g)&&(r[g]=Gn(p,e),u&&ws(r[g],g,r))});function a(g,p,f){if(p==="__handler")Uo(g,"__handler",f);else if(!l(p))g[p]=f;else if(Array.isArray(g)&&p==="length"||Wp(g[p],f)){const x=p!==Rt&&o&&fo(f),b=g[p];g[p]=x?Gn(f,e):f,x&&u&&ws(g[p],p,g);const y=[p];let P=g;for(;P&&!(P.__handler&&P.__handler(y,f,b,d)===!1);)P.__key&&P.__parent?(y.unshift(P.__key),P=P.__parent):P=null;const W=h.get(p);if(W)for(const B of W){const I=B[mo],L=I&&I.get(g),V=L&&L.has(p);B.__disposed||I&&!V?W.delete(B):B!==Fn[0]&&(typeof i<"u"&&i!==!1?(ks(B,i),B[ci]=!0):B())}if(p!==Rt){g[Rt]=p;const B=h.get(Rt);if(B)for(const I of B){const L=I[mo],V=L&&L.get(g),X=V&&V.has(Rt);I.__disposed||L&&!X?B.delete(I):I!==Fn[0]&&(typeof i<"u"&&i!==!1?(ks(I,i),I[ci]=!0):I())}}}}const h=new Map,d=new Proxy(r,{get(g,p){if(p===So)return!0;if(l(p)&&Fn.length){const f=Fn[0],x=f[mo];if(x){let y=x.get(r);y||(y=new Set,x.set(r,y)),y.add(p)}let b=h.get(p);b||(b=new Set,h.set(p,b)),b.add(f)}return r[p]},set(g,p,f){return a(r,p,f),!0},defineProperty(g,p,f){if(p==="__handler")throw new Error("Don't track bubble handlers");if(l(p)){if(!Array.isArray(r)||p==="length"){"value"in f&&o&&fo(f.value)&&(f={...f},f.value=Gn(f.value,e));const x=Reflect.defineProperty(r,p,f);return p!==Rt&&(r[Rt]=p),x}}else return Reflect.defineProperty(r,p,f);return!1},deleteProperty(g,p){if(p===Rt)throw new Error('internal property Symbol("modifiedProperty") must not be deleted');return p in r&&a(r,p,void 0),Reflect.deleteProperty(g,p)}});return s&&Dp(r).forEach(g=>r[g]=r[g].bind(d)),d}function Wp(r,e,t){const n=new Map;function i(o,u,s){if(o===u)return!1;let l=typeof o;if(l!==typeof u)return!0;function a(d,g,p){if(!Array.isArray(g)||d.length!==g.length)return!0;if(n.has(d)||n.has(g)){if(n.has(d)&&n.get(d).has(g)||n.has(g)&&n.get(g).has(d))return!1;n.has(d)||n.set(d,new Set),n.get(d).add(g)}for(let f=0,x=d.length;f<x;f++)if(i(d[f],g[f],p))return!0;return!1}function h(d,g,p="by-value"){if(Object.getPrototypeOf(d)!==Object.getPrototypeOf(g))return!0;for(let f in d)if(!(f in g))return!0;for(let f in g)if(!(f in d))return!0;if(n.has(d)||n.has(g)){if(n.has(d)&&n.get(d).has(g)||n.has(g)&&n.get(g).has(d))return!1;n.has(d)||n.set(d,new Set),n.get(d).add(g)}for(let f in d)if(i(d[f],g[f],p))return!0;return!1}switch(l){case"undefined":case"boolean":case"string":case"function":return!0;case"number":return isNaN(o)!==isNaN(u)||Math.abs(o-u)>Number.EPSILON;case"object":return o==null||u==null?!0:s==="by-value"&&(o instanceof Boolean||o instanceof Number||o instanceof String)?o.valueOf()!==u.valueOf():Array.isArray(o)?a(o,u,s):s==="by-reference"?!0:h(o,u,s);default:return!0}return!0}return i(r,e,t)}const{computedStack:$s,trackerSymbol:Lp}=ya;function Ep(r,{autoRun:e=!0,callback:t,bind:n,disableTracking:i=!1}={}){function o(l,a=[]){const h=t||s;i||(h[Lp]=new WeakMap),$s.unshift(h),a.length>0?a=[...a,u]:a=[u];const d=l?l():n?r.apply(n,a):r(...a);return $s.shift(),d}const u={computeAsync:o},s=(...l)=>o(null,l);return e&&s(),s}function Ap(r){return r[ya.trackerSymbol]=null,r.__disposed=!0}const Up={observe:Gn,modifiedProperty:Rt,computed:Ep,dispose:Ap,batch:Mo},Lu=Ft,{observe:Mp,computed:Eu,dispose:Xp}=Up,hi=document.createElement("style");hi.innerHTML=`
/**** DefaultSticker ****/

  .SNS.DefaultSticker {
    left:0px; top:0px; right:0px; bottom:0px;
  }
`;document.head.appendChild(hi);const Hp=["normal","italic"],Op=["missing Behaviour","Behaviour Execution Failure","Script Compilation Failure","Script Execution Failure","Rendering Failure","Event Handling Failure",'"onMount" Callback Failure','"onUnmount" Callback Failure'];function Q(r){let e=/^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(r);if(e==null)throw new Error(r);{let t=new Error(e[2]);throw t.name=e[1],t}}function ue(r){Q("ReadOnlyProperty: property "+Ne(r)+" must not be set")}function Au(r){return r instanceof Ba}le(Au,Be,"SNS visual");const jp=le(Au,He,"SNS visual");function cn(r){return r instanceof Ca}le(cn,Be,"SNS folder");const Gp=le(cn,He,"SNS folder");function Mi(r){return r instanceof Va}le(Mi,Be,"SNS project");le(Mi,He,"SNS project");function hn(r){return r instanceof ec}le(hn,Be,"SNS board");le(hn,He,"SNS board");function pi(r){return r instanceof tc}le(pi,Be,"SNS sticker");const Uu=le(pi,He,"SNS sticker");function Mu(r){return Ft(r)}const zp=le(Mu,Be,"unique SNS id"),Xu=zp,Is=le(Mu,He,"unique SNS id"),Rp=/^[a-z$_][a-z$_0-9]*$/i;function Hu(r){return Bt(r,Rp)}le(Hu,Be,"note stickers identifier");const va=le(Hu,He,"note stickers identifier");function _n(r){return Ft(r)}const Yp=le(_n,Be,"SNS name"),gi=le(_n,He,"SNS name");function ar(r){return rn(r)}le(ar,Be,"sticker coordinate");const Ps=le(ar,He,"sticker coordinate");function sr(r){return rn(r)&&r>=0}const Dn=le(sr,Be,"sticker dimension"),Bs=le(sr,He,"sticker dimension");function Ou(r){return ca(r)&&ar(r.x)&&ar(r.y)}le(Ou,Be,"sticker position");const qp=le(Ou,He,"sticker position");function ju(r){return ca(r)&&sr(r.Width)&&sr(r.Height)}le(ju,Be,"sticker size");const Zp=le(ju,He,"sticker size");function Gu(r){return ca(r)&&ar(r.x)&&sr(r.Width)&&ar(r.y)&&sr(r.Height)}le(Gu,Be,"sticker geometry");const Jp=le(Gu,He,"sticker geometry");function wa(r){return xn(r)&&xu(r.Type,Op)&&ua(r.Message)}const Cs=le(wa,Be,"error descriptor");le(wa,He,"error descriptor");function zu(r){return xn(r)}le(zu,Be,"serializable object");const ka=le(zu,He,"serializable object"),Wr={x:20,y:20,Width:80,Height:60},Kp=10,Qp=void 0,eg=10,tg=void 0,rg=10,ng=10;function ig(r,e){return Li(r)?r:e}function We(r,e){return r==null?void 0:Li(r)?r:e}function Xi(r,e){return jr(r)?r:e}function Mt(r,e){return jr(r)?r:e}function $r(r,e,t=-1/0,n=1/0,i=!1,o=!1){return Jh(r,t,n,i,o)?r:e}function ut(r,e){return da(r)?r:e}function it(r,e,t){return Bt(r,t)?r:e}function yn(r,e){return ua(r)?r:e}function at(r,e){return(Ft(r)?r:e).replace(/[\f\r\n\v\u0085\u2028\u2029].*$/,"...")}function Ze(r,e){const t=Ft(r)?r:e;return t==null?void 0:t.replace(/[\f\r\n\v\u0085\u2028\u2029].*$/,"...")}function Ru(r,e,t){return bn(r,t)?r:e}function mt(r,e,t){return bn(r,t)?r:e}function $a(r,e){return Ai(r)?r:e}function og(r,e){return Ai(r)?r:e}function ag(r,e){return bu(r)?r:e}function sg(r,e){return Lu(r)?r:e}function Gr(r,e){return ha(r)?r:e}function Yu(){return Ui`<div class="SNS DefaultSticker" style=${Ju(this)}/>`}function fi(){const r=this.Error;return r==null?Yu.call(this):Ui`<div class="SNS DefaultSticker">
      <div class="SNS ErrorIndicator" onClick=${()=>this.Project.showError(this,r)}/>
    </div>`}const Xo=wp(Vp.nolookalikesSafe,21),mi=new WeakMap;function lg(r,e){let t=mi.get(r);t==null&&mi.set(r,t=Object.create(null));const n=e.Id;n in t&&Q("NonUniqueId: the id of the given folder ("+Ne(n)+") has already been registered"),t[n]=e}function dg(r){const e=r.Project;let t=mi.get(e);t!=null&&delete t[r.Id]}function Vs(r,e){let t=mi.get(r);if(t!=null)return t[e]}const Si=new WeakMap;function ug(r,e){let t=Si.get(r);t==null&&Si.set(r,t=Object.create(null));const n=e.Id;n in t&&Q("NonUniqueId: the id of the given sticker ("+Ne(n)+") has already been registered"),t[n]=e}function cg(r){const e=r.Project;let t=Si.get(e);t!=null&&delete t[r.Id]}function hg(r,e){let t=Si.get(r);if(t!=null)return t[e]}function Jt(r){ka("serialization",r),delete r.Id,fs(r.BoardList)&&r.BoardList.forEach(e=>Jt(e)),fs(r.StickerList)&&r.StickerList.forEach(e=>Jt(e))}const Ho=new WeakMap;function qu(r,e){let t=Ho.get(r);t==null&&Ho.set(r,t=[]),t.push(e)}function Ia(r){let e=Ho.get(r);e!=null&&e.forEach(t=>{Xp(t)})}const xi=Object.create(null),pn=Object.create(null),Zu=Object.create(null);function R(r,e,t,n,i,o){To("behavior group label",r),To("behavior label",e),va("behavior name",t),sp("sticker template",n),er("behavior function",i);const u=r.toLowerCase().replace(/\s/g,""),s=t.toLowerCase(),l={...n};l.activeScript==null?l.activeScript=`useBehavior('${t}')
`:l.activeScript=l.activeScript.replace(/^\s*\n/,"").replace(/\n\s*$/,`
`),s in pn&&Q("BehaviorExists: behavior "+Ne(t)+" was already registered");let a=xi[u];a==null&&(xi[u]=a={GroupLabel:r,BehaviorSet:Object.create(null)}),a.BehaviorSet[t]={Label:e,Executable:i,Template:l},i!=null&&(Zu[s]=l,pn[s]=i),o!=null&&hi.innerHTML.indexOf(o.trim())<0&&(hi.innerHTML+=o)}function pg(){const r=[];function e(t){const n=[],i=t.BehaviorSet;for(let o in i)n.push({Label:i[o].Label,Name:o,disabled:!(o.toLowerCase()in pn)});return{GroupLabel:t.GroupLabel,BehaviorEntryList:n}}for(let t in xi)r.push(e(xi[t]));return r}function gg(r){Uu("visual",this),va("behavior name",r);const e=pn[r.toLowerCase()];e==null&&Q("NoSuchBehavior: no behavior called "+Ne(r)+" found");const t=u=>{nn("reactive function",u),qu(this,Eu(u))},n=this.onRender.bind(this),i=this.onMount.bind(this),o=this.onUnmount.bind(this);e.call(this,this,this,Ui,t,n,i,o)}function fg(r){va("behavior name",r);const e=r.toLowerCase();return pn[e]==null&&Q("NoSuchBehavior: no behavior called "+Ne(r)+" found"),Zu[e]}R("basic Views","plain Sticker","plainSticker",{Geometry:{x:20,y:20,Width:100,Height:80},activeScript:'onRender(() => html`<div class="SNS Placeholder"></div>`)'},(r,e,t,n,i,o,u)=>{i(()=>t`<div class="SNS plainSticker"></div>`)},`
/**** plain Stickers ****/

  .SNS.plainSticker {
    border:dotted 1px gray;
  }
  `);R("basic Views","sticky Note","stickyNote",{Geometry:{x:20,y:20,Width:100,Height:80},minWidth:20,minHeight:10},(r,e,t,n,i,o,u)=>{e.Renderer=function(s){const{builtinSelection:l,builtinDragging:a}=s,h=yn(e.Value,""),d=p=>{if(p.key==="Tab"){p.stopPropagation(),p.preventDefault();const f=p.target,{value:x,selectionStart:b,selectionEnd:y}=f;return f.value=x.slice(0,b)+"	"+x.slice(y),f.selectionStart=f.selectionEnd=b+1,!1}},g=p=>{e.Value=p.target.value};return t`<div class="SNS NoteSticker" style=${Ju(r)}
        onPointerDown=${l}
      >
        <div class="Header builtinDraggable"
          onPointerDown=${a} onPointerMove=${a}
          onPointerUp=${a} onPointerCancel=${a}
        />
        <textarea class="Editor" value=${h} tabindex=-1
          onKeyDown=${d} onInput=${g}
        ></textarea>
      </div>`}},`
/**** "classical" Note Stickers ****/

  .SNS.NoteSticker {
    background:ivory;
    border:solid 1px darkgray;
    outline:none;
    font-family:'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size:14px; font-weight:normal; line-height:1.4; color:black;
  }

  .SNS.NoteSticker > .Header {
    display:block; position:absolute;
    left:0px; top:0px; right:0px; height:10px;
    margin:0px; padding:0px;
    background:#000000; opacity:0.3;
  }

  .SNS.NoteSticker > .Editor {
    display:block; position:absolute;
    left:0px; top:10px; right:0px; bottom:0px;
    margin:0px; padding:2px;
    background:none; border:none;

    background-color:inherit; background-image:inherit;
    font-family:inherit; font-size:inherit; font-weight:inherit;
    line-height:inherit; color:inherit;

    tab-size:10px; resize:none;
  }
  `);R("basic Views","Placeholder","Placeholder",{Geometry:{x:20,y:20,Width:100,Height:80}},(r,e,t,n,i,o,u)=>{e.Renderer=function(s){const{builtinDragging:l}=s,{Width:a,Height:h}=e.Geometry;return t`<div class="SNS Placeholder builtinDraggable" style="
        line-height:${h}px;
      "
        onPointerDown=${l} onPointerMove=${l}
        onPointerUp=${l} onPointerCancel=${l}
      >${a}x${h}</div>`}},`
/**** simple Placeholders ****/

  .SNS.Placeholder {
    border:dotted 1px gray;
    text-align:center;
  }
  `);R("basic Views","Title","Title",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"Title"},(r,e,t,n,i,o,u)=>{i(()=>{const s=at(e.Value,"");return t`<div class="SNS Title">${s}</div>`})},`
/**** Title Views ****/

  .SNS.Sticker > .SNS.Title {
    font-size:22px; font-weight:bold; line-height:32px;
  }
  `);R("basic Views","Subtitle","Subtitle",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"Subtitle"},(r,e,t,n,i,o,u)=>{i(()=>{const s=at(e.Value,"");return t`<div class="SNS Subtitle">${s}</div>`})},`
/**** Subtitle Views ****/

  .SNS.Sticker > .SNS.Subtitle {
    font-size:18px; font-weight:bold; line-height:27px;
  }
  `);R("basic Views","Label","Label",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"Label"},(r,e,t,n,i,o,u)=>{i(()=>{const s=at(e.Value,"");return t`<div class="SNS Label">${s}</div>`})},`
/**** Label Views ****/

  .SNS.Sticker > .SNS.Label {
    font-size:14px; font-weight:bold; line-height:21px;
  }
  `);R("basic Views","Text","Text",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"Text"},(r,e,t,n,i,o,u)=>{i(()=>{const s=yn(e.Value,"");return t`<div class="SNS Text">${s}</div>`})},`
/**** Text Views ****/

  .SNS.Sticker > .SNS.Text {
    font-size:14px; font-weight:normal; line-height:21px;
  }
  `);R("basic Views","FinePrint","FinePrint",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"FinePrint"},(r,e,t,n,i,o,u)=>{i(()=>{const s=yn(e.Value,"");return t`<div class="SNS FinePrint">${s}</div>`})},`
/**** FinePrint Views ****/

  .SNS.Sticker > .SNS.FinePrint {
    font-size:12px; font-weight:normal; line-height:18px;
  }
  `);R("basic Views","HTML View","HTMLView",{Geometry:{x:20,y:20,Width:100,Height:80},Value:"<b><u>HTML View</u></b>",activeScript:`
  useBehavior('HTMLView')
//my.Value = 'HTML Markup'
`},(r,e,t,n,i,o,u)=>{e.Renderer=()=>t`<div class="SNS HTMLView"
      dangerouslySetInnerHTML=${{__html:yn(e.Value,"")}}
    />`});R("basic Views","Image View","ImageView",{Geometry:{x:20,y:20,Width:90,Height:90},Value:"https://www.rozek.de/Bangle.js/Mandelbrot_240x240.png",activeScript:`
  useBehavior('ImageView')
//my.Value = 'Image URL'
`},(r,e,t,n,i,o,u)=>{e.Renderer=()=>t`<img class="SNS ImageView" src=${Gr(e.Value,"")}/>`},`
/**** Image View ****/

  .SNS.Sticker > .SNS.ImageView {
    object-fit:contain; object-position:center;
  }
  `);R("basic Views","SVG View","SVGView",{Geometry:{x:20,y:20,Width:90,Height:90},activeScript:`
  useBehavior('SVGView')
//my.Value = 'SVG Document'
`},(r,e,t,n,i,o,u)=>{e.Renderer=()=>{const s="data:image/svg+xml;base64,"+btoa(yn(e.Value,""));return t`<div class="SNS SVGView" src=${s}/>`}},`
/**** SVG View ****/

  .SNS.Sticker > .SNS.SVGView {
    object-fit:contain; object-position:center;
  }
  `);R("basic Views","2D Canvas View","Canvas2DView");R("basic Views","Web View","WebView",{Geometry:{x:20,y:20,Width:640,Height:480},minWidth:120,minHeight:80,Value:"https://www.rozek.de",activeScript:`
  useBehavior('WebView')
//my.Value = 'Document URL'
`},(r,e,t,n,i,o,u)=>{e.Renderer=()=>t`<iframe class="SNS WebView"
      src=${Gr(e.Value,"")}
    />`});R("basic Views","Badge","Badge",{Geometry:{x:20,y:20,Width:30,Height:30},Value:1,ForegroundColor:"red",BackgroundColor:"white"},(r,e,t,n,i,o,u)=>{e.Renderer=()=>{const s=jr(e.Value)?""+e.Value:at(e.Value,""),l=Math.round(Math.min(e.Width,e.Height/2));return t`<div class="SNS Badge" style="
        border-color:${e.ForegroundColor}; border-radius:${l}px;
        line-height:${e.Height-4}px;
      ">${at(s,"")}</>`}},`
/**** Badge ****/

  .SNS.Sticker > .SNS.Badge {
    font-size:18px; font-weight:bold; text-align:center;
    border:solid 2px black;
  }
  `);R("basic Views","Icon","Icon",{Geometry:{x:20,y:20,Width:24,Height:24},Value:null,activeScript:`
  useBehavior('Icon')
//my.Value = 'icon image url'
//onClick(() => ...)
`},(r,e,t,n,i,o,u)=>{function s(l){e.Enabling!=!1&&(e.Value=l.target.value,typeof e._onClick=="function"&&e._onClick(l))}e.Renderer=()=>{const l=Gr(e.Value,"/img/pencil.png"),a=$a(e.Color,"black");return t`<div class="SNS Icon" style="
        -webkit-mask-image:url(${l}); mask-image:url(${l});
        background-color:${a};
      " disabled=${e.Enabling==!1} onClick=${s}
      />`}},`
/**** Icon ****/

  .SNS.Sticker > .SNS.Icon {
    -webkit-mask-size:contain;           mask-size:contain;
    -webkit-mask-position:center center; mask-position:center center;
  }
  `);R("basic Views","horizontal Separator","horizontalSeparator",{Geometry:{x:20,y:20,Width:80,Height:10},minWidth:10},(r,e,t,n,i,o,u)=>{i(()=>t`<div class="SNS horizontalSeparator"></div>`)},`
/**** horizontal Separator ****/

  .SNS.horizontalSeparator {
    border:none; border-top:solid 1px black;
  }
  `);R("basic Views","vertical Separator","verticalSeparator",{Geometry:{x:20,y:20,Width:10,Height:40},minHeight:10},(r,e,t,n,i,o,u)=>{i(()=>t`<div class="SNS verticalSeparator"></div>`)},`
/**** vertical Separator ****/

  .SNS.verticalSeparator {
    border:none; border-left:solid 1px black;
  }
  `);R("basic Views","Tab","Tab");R("basic Views","Icon Tab","IconTab");R("native Controls","Button","Button",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"Button",activeScript:`
  useBehavior('Button')
//my.Value = 'Label'
//onClick(() => ...)
`},(r,e,t,n,i,o,u)=>{function s(l){if(e.Enabling==!1)return ke(l);typeof e._onClick=="function"&&e._onClick(l)}e.Renderer=()=>{const l=at(e.Label||e.Value,"");return t`<button class="SNS Button" style="
        line-height:${e.LineHeight||e.Height}px;
      " disabled=${e.Enabling==!1} onClick=${s}
      >${l}</>`}},`
/**** Button ****/

  .SNS.Sticker > .SNS.Button {
    border:solid 1px black; border-radius:4px;
    background:white;
    font-weight:bold; color:black;
    text-align.center;
  }
  `);R("native Controls","Checkbox","Checkbox",{Geometry:{x:20,y:20,Width:20,Height:20},Value:null,activeScript:`
  useBehavior('Checkbox')
//my.Value = null/true/false
//onClick(() => ...)
`},(r,e,t,n,i,o,u)=>{function s(l){if(e.Enabling==!1)return ke(l);e.Value=l.target.checked,typeof e._onClick=="function"&&e._onClick(l)}e.Renderer=()=>{const l=We(e.Value),a=l==!0,h=l==null;return t`<input type="checkbox" class="SNS Checkbox"
        checked=${a} indeterminate=${h}
        disabled=${e.Enabling==!1} onClick=${s}
      />`}});R("native Controls","Radiobutton","Radiobutton",{Geometry:{x:20,y:20,Width:20,Height:20},Value:null,activeScript:`
  useBehavior('Radiobutton')
//my.Value = true/false
//onClick(() => ...)
`},(r,e,t,n,i,o,u)=>{function s(l){if(e.Enabling==!1)return ke(l);e.Value=l.target.checked,typeof e._onClick=="function"&&e._onClick(l)}e.Renderer=()=>{const l=ig(e.Value,!1);return t`<input type="radio" class="SNS Radiobutton"
        checked=${l==!0}
        disabled=${e.Enabling==!1} onClick=${s}
      />`}});R("native Controls","Gauge","Gauge",{Geometry:{x:20,y:20,Width:100,Height:20},Value:0,activeScript:`
  useBehavior('Gauge')
//my.Value      = 0
//my.Minimum    = 0
//my.lowerBound = 0
//my.Optimum    = undefined
//my.upperBound = 1
//my.Maximum    = 1
`},(r,e,t,n,i,o,u)=>{e.Renderer=()=>{const s=Xi(Sn(e.Value)?parseFloat(e.Value):e.Value,0),l=Mt(e.Minimum),a=Mt(e.lowerBound),h=Mt(e.Optimum),d=Mt(e.upperBound),g=Mt(e.Maximum);return t`<meter class="SNS Gauge" value=${s}
        min=${l} low=${a} opt=${h}
        high=${d} max=${g}
      />`}});R("native Controls","Progressbar","Progressbar",{Geometry:{x:20,y:20,Width:100,Height:10},Value:0,activeScript:`
  useBehavior('Progressbar')
//my.Value   = 0
//my.Maximum = 1
`},(r,e,t,n,i,o,u)=>{e.Renderer=()=>{const s=Xi(Sn(e.Value)?parseFloat(e.Value):e.Value,0),l=Mt(e.Maximum);return t`<progress class="SNS Progressbar" value=${s} max=${l}/>`}});const mg=/^\s*([+-]?(\d+([.]\d+)?|[.]\d+)([eE][+-]?\d+)?|\d*[.](?:\d*))(?:\s*:\s*([^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]+))?$/;R("native Controls","Slider","Slider",{Geometry:{x:20,y:20,Width:100,Height:20},Value:null,activeScript:`
  useBehavior('Slider')
//my.Value     = 0
//my.Minimum   = undefined
//my.Stepping  = undefined
//my.Maximum   = undefined
//my.Hashmarks = [0:'zero',1,2]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow=0;function s(h){return Bt(h,mg)||jr(h)}function l(h){if(e.Enabling==!1)return ke(h);e.Value=parseFloat(h.target.value),typeof e._onInput=="function"&&e._onInput(h)}function a(){r.rerender()}e.Renderer=()=>{let h=Xi(Sn(e.Value)?parseFloat(e.Value):e.Value,0);const d=Mt(e.Minimum),g=$r(e.Stepping,void 0,0),p=Mt(e.Maximum),f=mt(e.Hashmarks,void 0,s);document.activeElement===e.View?h=e.ValueToShow:e.ValueToShow=h;let x="",b;return f!=null&&f.length>0&&(b=e.Id+"-Hashmarks",x=t`\n<datalist id=${b}>
          ${f.map(y=>{y=""+y;const P=y.replace(/:.*$/,"").trim(),W=y.replace(/^[^:]+:/,"").trim();return t`<option value=${P}>${W}</option>`})}
        </datalist>`),t`<input type="range" class="SNS Slider"
        value=${h} min=${d} max=${p} step=${g}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${a}
        list=${b}
      />${x}`}});R("native Controls","Textline Input","TextlineInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('TextlineInput')
//my.Value         = ''
//my.Placeholder   = undefined
//my.readonly      = false
//my.minLength     = 0
//my.maxLength     = undefined
//my.Pattern       = '.*'
//my.SpellChecking = undefined
//my.Suggestions   = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return ke(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=at(e.Value,"");const h=Ze(e.Placeholder),d=We(e.readonly),g=ut(e.minLength),p=ut(e.maxLength),f=Ze(e.Pattern),x=We(e.SpellChecking),b=mt(e.Suggestions,void 0,Ft);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let y="",P;return b!=null&&b.length>0&&(P=e.Id+"-Suggestions",y=t`<datalist id=${P}>
          ${b.map(W=>t`<option value=${W}></option>`)}
        </datalist>`),t`<input type="text" class="SNS TextlineInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${h}
        pattern=${f} spellcheck=${x}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${P}
      />${y}`}},`
/**** TextlineInput ****/

  .SNS.Sticker > .SNS.TextlineInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.TextlineInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);R("native Controls","Password Input","PasswordInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('PasswordInput')
//my.Value       = ''
//my.Placeholder = undefined
//my.readonly    = false
//my.minLength   = 0
//my.maxLength   = undefined
//my.Pattern     = '.*'
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return ke(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=at(e.Value,"");const h=Ze(e.Placeholder),d=We(e.readonly),g=ut(e.minLength),p=ut(e.maxLength),f=Ze(e.Pattern);return document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a,t`<input type="password" class="SNS PasswordInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${h}
        pattern=${f}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
      />`}},`
/**** PasswordInput ****/

  .SNS.Sticker > .SNS.PasswordInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.PasswordInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);R("native Controls","Number Input","NumberInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('NumberInput')
//my.Value       = 0
//my.Placeholder = undefined
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = [0,...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow=0;function s(a){if(e.Enabling==!1)return ke(a);e.Value=parseFloat(a.target.value),typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=Xi(Sn(e.Value)?parseFloat(e.Value):e.Value,0);const h=Ze(e.Placeholder),d=We(e.readonly),g=Mt(e.Minimum),p=$r(e.Stepping,void 0,0),f=Mt(e.Maximum),x=mt(e.Suggestions,void 0,jr);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let b="",y;return x!=null&&x.length>0&&(y=e.Id+"-Suggestions",b=t`<datalist id=${y}>
          ${x.map(P=>t`<option value=${P}></option>`)}
        </datalist>`),t`<input type="number" class="SNS NumberInput"
        value=${a} min=${g} max=${f} step=${p}
        readonly=${d} placeholder=${h}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${y}
      />${b}`}},`
/**** NumberInput ****/

  .SNS.Sticker > .SNS.NumberInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.NumberInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);R("native Controls","Phone Number Input","PhoneNumberInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('PhoneNumberInput')
//my.Value         = ''
//my.Placeholder   = undefined
//my.readonly      = false
//my.minLength     = 0
//my.maxLength     = undefined
//my.Pattern       = '.*'
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return ke(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=sg(e.Value,"");const h=Ze(e.Placeholder),d=We(e.readonly),g=ut(e.minLength),p=ut(e.maxLength),f=Ze(e.Pattern),x=mt(e.Suggestions,void 0,Lu);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let b="",y;return x!=null&&x.length>0&&(y=e.Id+"-Suggestions",b=t`<datalist id=${y}>
          ${x.map(P=>t`<option value=${P}></option>`)}
        </datalist>`),t`<input type="tel" class="SNS PhoneNumberInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${h}
        pattern=${f}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${y}
      />${b}`}},`
/**** PhoneNumberInput ****/

  .SNS.Sticker > .SNS.PhoneNumberInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.PhoneNumberInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);R("native Controls","EMail Address Input","EMailAddressInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('EMailAddressInput')
//my.Value       = ''
//my.Placeholder = undefined
//my.readonly    = false
//my.minLength   = 0
//my.maxLength   = undefined
//my.Pattern     = '.*'
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return ke(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=ag(e.Value,"");const h=Ze(e.Placeholder),d=We(e.readonly),g=ut(e.minLength),p=ut(e.maxLength),f=Ze(e.Pattern),x=mt(e.Suggestions,void 0,bu);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let b="",y;return x!=null&&x.length>0&&(y=e.Id+"-Suggestions",b=t`<datalist id=${y}>
          ${x.map(P=>t`<option value=${P}></option>`)}
        </datalist>`),t`<input type="email" class="SNS EMailAddressInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${h}
        pattern=${f}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${y}
      />${b}`}},`
/**** EMailAddressInput ****/

  .SNS.Sticker > .SNS.EMailAddressInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.EMailAddressInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);R("native Controls","URL Input","URLInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('URLInput')
//my.Value       = ''
//my.Placeholder = undefined
//my.readonly    = false
//my.minLength   = 0
//my.maxLength   = undefined
//my.Pattern     = '.*'
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return ke(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=Gr(e.Value,"");const h=Ze(e.Placeholder),d=We(e.readonly),g=ut(e.minLength),p=ut(e.maxLength),f=Ze(e.Pattern),x=mt(e.Suggestions,void 0,ha);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let b="",y;return x!=null&&x.length>0&&(y=e.Id+"-Suggestions",b=t`<datalist id=${y}>
          ${x.map(P=>t`<option value=${P}></option>`)}
        </datalist>`),t`<input type="url" class="SNS URLInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${h}
        pattern=${f}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${y}
      />${b}`}},`
/**** URLInput ****/

  .SNS.Sticker > .SNS.URLInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.URLInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);const Sg="\\d{2}:\\d{2}",zn=/\d{2}:\d{2}/;function xg(r){return Bt(r,zn)}R("native Controls","Time Input","TimeInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('TimeInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return ke(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=it(e.Value,void 0,zn);const h=We(e.readonly),d=it(e.Minimum,void 0,zn),g=$r(e.Stepping,void 0,0),p=it(e.Maximum,void 0,zn),f=mt(e.Suggestions,void 0,xg);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let x="",b;return f!=null&&f.length>0&&(b=e.Id+"-Suggestions",x=t`<datalist id=${b}>
          ${f.map(y=>t`<option value=${y}></option>`)}
        </datalist>`),t`<input type="time" class="SNS TimeInput"
        value=${a} min=${d} max=${p} step=${g}
        readonly=${h} pattern=${Sg}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${b}
      />${x}`}},`
/**** TimeInput ****/

  .SNS.Sticker > .SNS.TimeInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.TimeInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);const bg="\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}",Rn=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/;function _g(r){return Bt(r,Rn)}R("native Controls","Date and Time Input","DateTimeInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('DateTimeInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return ke(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=it(e.Value,void 0,Rn);const h=We(e.readonly),d=it(e.Minimum,void 0,Rn),g=$r(e.Stepping,void 0,0),p=it(e.Maximum,void 0,Rn),f=mt(e.Suggestions,void 0,_g);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let x="",b;return f!=null&&f.length>0&&(b=e.Id+"-Suggestions",x=t`<datalist id=${b}>
          ${f.map(y=>t`<option value=${y}></option>`)}
        </datalist>`),t`<input type="datetime-local" class="SNS DateTimeInput"
        value=${a} min=${d} max=${p} step=${g}
        readonly=${h} pattern=${bg}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${b}
      />${x}`}},`
/**** DateTimeInput ****/

  .SNS.Sticker > .SNS.DateTimeInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.DateTimeInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);const yg="\\d{4}-\\d{2}-\\d{2}",Yn=/\d{4}-\d{2}-\d{2}/;function vg(r){return Bt(r,Yn)}R("native Controls","Date Input","DateInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('DateInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return ke(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=it(e.Value,void 0,Yn);const h=We(e.readonly),d=it(e.Minimum,void 0,Yn),g=$r(e.Stepping,void 0,0),p=it(e.Maximum,void 0,Yn),f=mt(e.Suggestions,void 0,vg);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let x="",b;return f!=null&&f.length>0&&(b=e.Id+"-Suggestions",x=t`<datalist id=${b}>
          ${f.map(y=>t`<option value=${y}></option>`)}
        </datalist>`),t`<input type="date" class="SNS DateInput"
        value=${a} min=${d} max=${p} step=${g}
        readonly=${h} pattern=${yg}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${b}
      />${x}`}},`
/**** DateInput ****/

  .SNS.Sticker > .SNS.DateInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.DateInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);const wg="\\d{4}-W\\d{2}",qn=/\d{4}-W\d{2}/;function kg(r){return Bt(r,qn)}R("native Controls","Week Input","WeekInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('WeekInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return ke(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=it(e.Value,void 0,qn);const h=We(e.readonly),d=it(e.Minimum,void 0,qn),g=$r(e.Stepping,void 0,0),p=it(e.Maximum,void 0,qn),f=mt(e.Suggestions,void 0,kg);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let x="",b;return f!=null&&f.length>0&&(b=e.Id+"-Suggestions",x=t`<datalist id=${b}>
          ${f.map(y=>t`<option value=${y}></option>`)}
        </datalist>`),t`<input type="week" class="SNS WeekInput"
        value=${a} min=${d} max=${p} step=${g}
        readonly=${h} pattern=${wg}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${b}
      />${x}`}},`
/**** WeekInput ****/

  .SNS.Sticker > .SNS.WeekInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.WeekInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);const $g="\\d{4}-\\d{2}",Zn=/\d{4}-\d{2}/;function Ig(r){return Bt(r,Zn)}R("native Controls","Month Input","MonthInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('MonthInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return ke(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=it(e.Value,void 0,Zn);const h=We(e.readonly),d=it(e.Minimum,void 0,Zn),g=$r(e.Stepping,void 0,0),p=it(e.Maximum,void 0,Zn),f=mt(e.Suggestions,void 0,Ig);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let x="",b;return f!=null&&f.length>0&&(b=e.Id+"-Suggestions",x=t`<datalist id=${b}>
          ${f.map(y=>t`<option value=${y}></option>`)}
        </datalist>`),t`<input type="month" class="SNS MonthInput"
        value=${a} min=${d} max=${p} step=${g}
        readonly=${h} pattern=${$g}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${b}
      />${x}`}},`
/**** MonthInput ****/

  .SNS.Sticker > .SNS.MonthInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.MonthInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);R("native Controls","File Input","FileInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('FileInput')
//my.Value           = ''
//my.Placeholder     = undefined
//my.acceptableTypes = undefined
//my.multiple        = false
//onInput(() => ...)
//onDrop(() => ...)
`},(r,e,t,n,i,o,u)=>{function s(d){if(e.Enabling==!1)return ke(d);e.Value=d.target.value,typeof e._onInput=="function"&&e._onInput(d,d.files)}function l(d){return ke(d)}function a(d){return ke(d)}function h(d){Pa(d),e.Enabling!=!1&&(e.Value=d.target.value,typeof e._onDrop=="function"&&e._onDrop(d,d.dataTransfer.files))}e.Renderer=()=>{let d=at(e.Value,"").trim();d=d.replace("C:\\fakepath\\","");const g=at(e.Placeholder,"").trim(),p=Ze(e.acceptableTypes),f=We(e.multiple);return t`<label class="SNS FileInput"
        onDragEnter=${l} onDragOver=${a} onDrop=${h}
      >
        <input type="file" style="display:none"
          multiple=${f} accept=${p}
          onInput=${s}
        />
        ${d===""?g===""?"":t`<span style="line-height:${e.Height}px">${g}</span>`:t`<span style="line-height:${e.Height}px">${d}</span>`}
      </label>`}},`
/**** FileInput ****/

  .SNS.Sticker > .SNS.FileInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }
  .SNS.Sticker > .SNS.FileInput > span {
    display:block; position:absolute; overflow:hidden;
    left:0px; top:0px; width:100%; height:100%;
    padding:0px 2px 0px 2px; white-space:pre; text-overflow:ellipsis;
  }
  `);R("native Controls","Pseudo File Input","PseudoFileInput",{Geometry:{x:20,y:20,Width:24,Height:24},Value:null,activeScript:`
  useBehavior('PseudoFileInput')
//my.Value           = ''
//my.Icon            = 'icon image url'
//my.acceptableTypes = undefined
//my.multiple        = false
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{function s(l){if(e.Enabling==!1)return ke(l);e.Value=l.target.value,typeof e._onInput=="function"&&e._onInput(l,l.files)}e.Renderer=()=>{const l=Gr(e.Icon,"/img/arrow-up-from-bracket.png"),a=$a(e.Color,"black"),h=Ze(e.acceptableTypes),d=We(e.multiple);return t`<label class="SNS PseudoFileInput">
        <div style="
          -webkit-mask-image:url(${l}); mask-image:url(${l});
          background-color:${a};
        "></div>
        <input type="file" style="display:none"
          multiple=${d} accept=${h}
          onInput=${s}
        />
      </label>`}},`
/**** PseudoFileInput ****/

  .SNS.Sticker > .SNS.PseudoFileInput > div {
    display:block; position:absolute;
    left:0px; top:0px; right:0px; bottom:0px;
    -webkit-mask-size:contain;           mask-size:contain;
    -webkit-mask-position:center center; mask-position:center center;
  }
  `);R("native Controls","File Drop Area","FileDropArea",{Geometry:{x:20,y:20,Width:100,Height:80},Value:null,activeScript:`
  useBehavior('FileDropArea')
//my.Value           = ''
//my.Placeholder     = undefined
//my.acceptableTypes = undefined
//my.multiple        = false
//onInput(() => ...)
//onDrop(() => ...)
`},(r,e,t,n,i,o,u)=>{function s(d){if(e.Enabling==!1)return ke(d);e.Value=d.target.value,typeof e._onInput=="function"&&e._onInput(d,d.files)}function l(d){return ke(d)}function a(d){return ke(d)}function h(d){Pa(d),e.Enabling!=!1&&(e.Value=d.target.value,typeof e._onDrop=="function"&&e._onDrop(d,d.dataTransfer.files))}e.Renderer=()=>{const d=at(e.Placeholder,"").trim(),g=Ze(e.acceptableTypes),p=We(e.multiple);return t`<label class="SNS FileDropArea"
        onDragEnter=${l} onDragOver=${a} onDrop=${h}>
        <input type="file"
          multiple=${p} accept=${g}
          onInput=${s}
        />
        <span>${d}</span>
      </label>`}},`
/**** FileDropArea ****/

  .SNS.Sticker > .SNS.FileDropArea {
    display:flex; flex-flow:column nowrap;
      justify-content:center; align-items:center;
    border:dashed 4px #DDDDDD; border-radius:4px;
    color:#DDDDDD; background:white;
  }

  .SNS.Sticker > .SNS.FileDropArea * { pointer-events:none }

  .SNS.Sticker > .SNS.FileDropArea > input[type="file"] {
    display:block; position:absolute; appearance:none;
    left:0px; top:0px; right:0px; bottom:0px;
    opacity:0.01;
  }
  `);R("native Controls","Search Input","SearchInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('SearchInput')
//my.Value         = ''
//my.Placeholder   = undefined
//my.readonly      = false
//my.minLength     = 0
//my.maxLength     = undefined
//my.Pattern       = '.*'
//my.SpellChecking = undefined
//my.Suggestions   = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return ke(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=at(e.Value,"");const h=Ze(e.Placeholder),d=We(e.readonly),g=ut(e.minLength),p=ut(e.maxLength),f=Ze(e.Pattern),x=We(e.SpellChecking),b=mt(e.Suggestions,void 0,Ft);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let y="",P;return b!=null&&b.length>0&&(P=e.Id+"-Suggestions",y=t`<datalist id=${P}>
          ${b.map(W=>t`<option value=${W}></option>`)}
        </datalist>`),t`<input type="search" class="SNS SearchInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${h}
        pattern=${f} spellcheck=${x}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${P}
      />${y}`}},`
/**** SearchInput ****/

  .SNS.Sticker > .SNS.SearchInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.SearchInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);R("native Controls","Color Input","ColorInput",{Geometry:{x:20,y:20,Width:40,Height:30},Value:null,activeScript:`
  useBehavior('ColorInput')
//my.Value       = ''
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return ke(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=og(e.Value);const h=mt(e.Suggestions,void 0,Ai);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let d="",g;return h!=null&&h.length>0&&(g=e.Id+"-Suggestions",d=t`<datalist id=${g}>
          ${h.map(p=>t`<option value=${p}></option>`)}
        </datalist>`),t`<input type="color" class="SNS ColorInput"
        value=${a}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${g}
      />${d}`}},`
/**** ColorInput ****/

  .SNS.Sticker > .SNS.ColorInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }
  `);R("native Controls","DropDown","DropDown",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('DropDown')
//my.Value   = '...'
//my.Options = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return ke(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=at(e.Value,"");const h=Ru(e.Options,[],Ft);return document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a,t`<select class="SNS DropDown"
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
      >${h.map(d=>{const g=d.replace(/:.*$/,"").trim(),p=d.replace(/^[^:]+:/,"").trim();return t`<option value=${g} selected=${g===a}>
            ${p}
          </option>`})}</select>`}},`
/**** DropDown ****/

  .SNS.Sticker > .SNS.DropDown {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.SearchInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);R("native Controls","Pseudo DropDown","PseudoDropDown",{Geometry:{x:20,y:20,Width:24,Height:24},Value:null,activeScript:`
  useBehavior('PseudoDropDown')
//my.Value   = '...'
//my.Icon    = 'icon image url'
//my.Options = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return ke(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=at(e.Value,"");const h=Gr(e.Icon,"/img/menu.png"),d=$a(e.Color,"black"),g=Ru(e.Options,[],Ft);return document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a,t`<div class="SNS PseudoDropDown">
        <div style="
          -webkit-mask-image:url(${h}); mask-image:url(${h});
          background-color:${d};
        "></div>
        <select disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}>
          ${g.map(p=>{const f=p.replace(/:.*\$/,"").trim(),x=p.replace(/^[^:]+:/,"").trim();return t`<option value=${f} selected=${f===a}>
              ${x}
            </option>`})}
        </select>
      </div>`}},`
/**** PseudoDropDown ****/

  .SNS.Sticker > .SNS.PseudoDropDown > div {
    display:block; position:absolute;
    left:0px; top:0px; right:0px; bottom:0px;
    -webkit-mask-size:contain;           mask-size:contain;
    -webkit-mask-position:center center; mask-position:center center;
  }

  .SNS.Sticker > .SNS.PseudoDropDown > select {
    display:block; position:absolute;
    left:0px; top:0px; right:0px; bottom:0px;
    opacity:0.01;
  }
  `);R("native Controls","Text Input","TextInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('TextInput')
//my.Value         = ''
//my.Placeholder   = undefined
//my.readonly      = false
//my.minLength     = 0
//my.maxLength     = undefined
//my.LineWrapping  = false
//my.SpellChecking = undefined
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return ke(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=at(e.Value,"");const h=Ze(e.Placeholder),d=We(e.readonly),g=ut(e.minLength),p=ut(e.maxLength),f=We(e.LineWrapping),x=We(e.SpellChecking);return document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a,t`<textarea class="SNS TextInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${h}
        spellcheck=${x} style="resize:none; ${f==!0?"white-space:pre; overflow-wrap:break-word; hyphens:auto":void 0}"
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        value=${a}
      />`}},`
/**** TextInput ****/

  .SNS.Sticker > .SNS.TextInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.TextInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);R("basic Shapes","Line","Line");R("basic Shapes","Polyline","Polyline");R("basic Shapes","Arc","Arc");R("basic Shapes","quadratic Bezier","quadraticBezier");R("basic Shapes","cubic Bezier","cubicBezier");R("basic Shapes","Box","Box");R("basic Shapes","rounded Box","roundedBox");R("basic Shapes","Oval","Oval");R("basic Shapes","Chord","Chord");R("basic Shapes","Pie","Pie");R("basic Shapes","Polygon","Polygon");R("basic Shapes","regular Polygon","regularPolygon");R("straight Arrows","nw","straightArrow_nw",{Geometry:{x:20,y:20,Width:40,Height:40}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}"
            d="M ${s},${l}, L 0,0"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);R("straight Arrows","n","straightArrow_n",{Geometry:{x:20,y:20,Width:40,Height:40}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}"
            d="M ${s/2},${l}, L ${s/2},0"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);R("straight Arrows","ne","straightArrow_ne",{Geometry:{x:20,y:20,Width:40,Height:40}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}"
            d="M 0,${l}, L ${s},0"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);R("straight Arrows","e","straightArrow_e",{Geometry:{x:20,y:20,Width:40,Height:40}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}"
            d="M 0,${l/2}, L ${s},${l/2}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);R("straight Arrows","se","straightArrow_se",{Geometry:{x:20,y:20,Width:40,Height:40}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}"
            d="M 0,0, L ${s},${l}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);R("straight Arrows","s","straightArrow_s",{Geometry:{x:20,y:20,Width:40,Height:40}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}"
            d="M ${s/2},0, L ${s/2},${l}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);R("straight Arrows","sw","straightArrow_sw",{Geometry:{x:20,y:20,Width:40,Height:40}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}"
            d="M ${s},0, L 0,${l}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);R("straight Arrows","w","straightArrow_w",{Geometry:{x:20,y:20,Width:40,Height:40}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}"
            d="M ${s},${l/2}, L 0,${l/2}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);R("curved Arrows","cw n","curvedArrow_cw_n",{Geometry:{x:20,y:20,Width:50,Height:60}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}" fill="none"
            d="M ${s},${l-6}, A ${s-6} ${l-18} 0 0 1 6 12"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);R("curved Arrows","cw e","curvedArrow_cw_e",{Geometry:{x:20,y:20,Width:60,Height:50}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}" fill="none"
            d="M 6,${l}, A ${s-18} ${l-6} 0 0 1 ${s-12} 6"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);R("curved Arrows","cw s","curvedArrow_cw_s",{Geometry:{x:20,y:20,Width:50,Height:60}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}" fill="none"
            d="M 0,6, A ${s-6} ${l-18} 0 0 1 ${s-6} ${l-12}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);R("curved Arrows","cw w","curvedArrow_cw_w",{Geometry:{x:20,y:20,Width:60,Height:50}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}" fill="none"
            d="M ${s-6},0, A ${s-18} ${l-6} 0 0 1 12 ${l-6}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);R("curved Arrows","ccw n","curvedArrow_ccw_n",{Geometry:{x:20,y:20,Width:50,Height:60}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}" fill="none"
            d="M 0,${l-6}, A ${s-6} ${l-18} 0 0 0 ${s-6} 12"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);R("curved Arrows","ccw e","curvedArrow_ccw_e",{Geometry:{x:20,y:20,Width:60,Height:50}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}" fill="none"
            d="M 6,0, A ${s-18} ${l-6} 0 0 0 ${s-12} ${l-6}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);R("curved Arrows","ccw s","curvedArrow_ccw_s",{Geometry:{x:20,y:20,Width:50,Height:60}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}" fill="none"
            d="M ${s},6, A ${s-6} ${l-18} 0 0 0 6 ${l-12}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);R("curved Arrows","ccw w","curvedArrow_ccw_w",{Geometry:{x:20,y:20,Width:60,Height:50}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}" fill="none"
            d="M ${s-6},${l}, A ${s-18} ${l-8} 0 0 0 12 6"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);R("complex Controls","flat List View","FlatListView");R("complex Controls","nested List View","NestedListView");R("complex Controls","QR-Code View","QRCodeView");function Ju(r){jp("visual",r);let e=[];const{BackgroundColor:t,BackgroundTexture:n,ForegroundColor:i,FontFamily:o,FontSize:u,FontWeight:s,FontStyle:l,LineHeight:a}=r;return t!=null&&e.push(`background-color:${t}`),n!=null&&e.push(`background-image:${n}; background-repeat:repeat`),i!=null&&e.push(`color:${i}`),o!=null&&e.push(`font-family:${o}`),u!=null&&e.push(`font-size:${u}px`),s!=null&&e.push(`font-weight:${s}`),l!=null&&e.push(`font-style:${l}`),a!=null&&e.push(`line-height:${a}px`),e.join(";")}function Pa(r){r.stopPropagation(),r.preventDefault()}const ke=Pa;let Ba=class{constructor(e,t){he(this,"_Id"),he(this,"_Name"),he(this,"_Project"),he(this,"_Folder"),he(this,"_BackgroundColor"),he(this,"_BackgroundTexture"),he(this,"_FontFamily"),he(this,"_FontSize"),he(this,"_FontWeight"),he(this,"_FontStyle"),he(this,"_LineHeight"),he(this,"_ForegroundColor"),he(this,"_Value",null),he(this,"_observed"),he(this,"_unobserved"),he(this,"_activeScript"),he(this,"_pendingScript"),he(this,"_ScriptError"),he(this,"_Renderer"),he(this,"_View"),he(this,"_onMount"),he(this,"_onUnmount"),he(this,"_Error"),this._Project=e,this._Id=t||Xo()}get Id(){return this._Id}set Id(e){ue("Id")}get Name(){return this._Name}set Name(e){Yp("visual name",e),e!=null&&(e=e.trim(),e===""&&(e=void 0)),this._Name!==e&&(this._Name=e,this._reportChange("configure",this,"Name",e),this.rerender())}get Project(){return this._Project}set Project(e){ue("Project")}get Folder(){return this._Folder}set Folder(e){ue("Folder")}get isAttached(){return this._Folder==null?Mi(this):this._Folder.isAttached}set isAttached(e){ue("isAttached")}get BackgroundColor(){return this._BackgroundColor==null?this._Folder==null?void 0:this._Folder.BackgroundColor:this._BackgroundColor}set BackgroundColor(e){Ss("visual background color",e),this._BackgroundColor!==e&&(this._BackgroundColor=e,this._reportChange("configure",this,"BackgroundColor",e),this.rerender())}get BackgroundTexture(){return this._BackgroundTexture==null?this._Folder==null?void 0:this._Folder.BackgroundTexture:this._BackgroundTexture}set BackgroundTexture(e){vu("visual background texture",e),this._BackgroundTexture!==e&&(this._BackgroundTexture=e,this._reportChange("configure",this,"BackgroundTexture",e),this.rerender())}get FontFamily(){return this._FontFamily==null?this._Folder==null?void 0:this._Folder.FontFamily:this._FontFamily}set FontFamily(e){On("visual font family",e),this._FontFamily!==e&&(this._FontFamily=e,this._reportChange("configure",this,"FontFamily",e),this.rerender())}get FontSize(){return this._FontSize==null?this._Folder==null?void 0:this._Folder.FontSize:this._FontSize}set FontSize(e){un("visual font size",e),this._FontSize!==e&&(this._FontSize=e,this._reportChange("configure",this,"FontSize",e),this.rerender())}get FontWeight(){return this._FontWeight==null?this._Folder==null?void 0:this._Folder.FontWeight:this._FontWeight}set FontWeight(e){op("visual font weight",e,1,1e3),this._FontWeight!==e&&(this._FontWeight=e,this._reportChange("configure",this,"FontWeight",e),this.rerender())}get FontStyle(){return this._FontStyle==null?this._Folder==null?void 0:this._Folder.FontStyle:this._FontStyle}set FontStyle(e){Fo("visual font style",e,Hp),this._FontStyle!==e&&(this._FontStyle=e,this._reportChange("configure",this,"FontStyle",e),this.rerender())}get LineHeight(){return this._LineHeight==null?this._Folder==null?void 0:this._Folder.LineHeight:this._LineHeight}set LineHeight(e){un("visual line height",e),this._LineHeight!==e&&(this._LineHeight=e,this._reportChange("configure",this,"LineHeight",e),this.rerender())}get ForegroundColor(){return this._ForegroundColor==null?this._Folder==null?void 0:this._Folder.ForegroundColor:this._ForegroundColor}set ForegroundColor(e){Ss("visual foreground color",e),this._ForegroundColor!==e&&(this._ForegroundColor=e,this._reportChange("configure",this,"ForegroundColor",e),this.rerender())}get Color(){return this.ForegroundColor}set Color(e){this.ForegroundColor=e}get Value(){return this._Value}set Value(e){br(this._Value,e)&&(this._Value=e,this._reportChange("configure",this,"Value",e),this.rerender())}get editableValue(){return this._Value==null?"":""+this._Value}set editableValue(e){this.Value=e}get observed(){return this._observed==null&&(this._observed=Mp({})),this._observed}set observed(e){ue("observed")}get unobserved(){return this._unobserved==null&&(this._unobserved={}),this._unobserved}set unobserved(e){ue("unobserved")}get Script(){return this._pendingScript==null?this._activeScript:this._pendingScript}set Script(e){ue("Script")}get activeScript(){return this._activeScript}set activeScript(e){No("visual script",e),e===""&&(e=void 0),this._activeScript!==e&&(this._activeScript=e,this._reportChange("configure",this,"activeScript",e),this.rerender())}get pendingScript(){return this._pendingScript}set pendingScript(e){No("visual script",e),this._pendingScript!==e&&(this._pendingScript=e,this._reportChange("configure",this,"pendingScript",e),this.rerender())}activateScript(){let e=(this._activeScript||"").trim();if(this.Error=void 0,this._Renderer=void 0,Ia(this),e!=null){let t;try{t=new Function("me,my, html,reactively, onRender,onMount,onUnmount, useBehavior",e)}catch(s){console.error("visual script compilation failure",s),this.Error={Type:"Script Compilation Failure",Message:""+s,Cause:s};return}const n=s=>{nn("reactive function",s),qu(this,Eu(s))},i=this.onRender.bind(this),o=this.onMount.bind(this),u=this.onUnmount.bind(this);try{t.call(this,this,this,Ui,n,i,o,u,gg.bind(this))}catch(s){console.error("visual script execution failure",s),this.Error={Type:"Script Execution Failure",Message:""+s,Cause:s};return}}this.rerender()}get ScriptError(){return this._ScriptError==null?void 0:{...this._ScriptError}}set ScriptError(e){Cs("script error setting",e),br(this._ScriptError,e)&&(this._ScriptError=e,this._reportChange("configure",this,"ScriptError",e),this.rerender())}get Renderer(){return this._Renderer}set Renderer(e){er("visual renderer",e),this._Renderer!==e&&(this._Renderer=e,this.rerender())}onRender(e){this.Renderer=e}Rendering(e){return""}rerender(e,t){}get View(){return this._View}set View(e){ue("View")}get isMounted(){return this._View!=null}set isMounted(e){ue("isMounted")}onMount(e){er('"onMount" callback',e),e==null?this._onMount=void 0:this._onMount=()=>{try{e.call(this)}catch(t){this.Error={Type:'"onMount" Callback Failure',Message:""+t,Cause:t},this.rerender()}}}onUnmount(e){er('"onUnmount" callback',e),e==null?this._onUnmount=void 0:this._onUnmount=()=>{try{e.call(this)}catch(t){this.Error={Type:'"onUnmount" Callback Failure',Message:""+t,Cause:t}}}}get Error(){return this._Error==null?void 0:{...this._Error}}set Error(e){Cs("error setting",e),br(this._Error,e)&&(this._Error=e,this._reportChange("configure",this,"Error",e),this.rerender())}get hasError(){return this._Error!=null}set hasError(e){ue("hasError")}_reportChange(e,...t){this._Project._reportChange(e,...t)}_serializeConfigurationInto(e){e.Id=this.Id;const t=n=>{this["_"+n]!=null&&(e[n]=this[n])};["Name","BackgroundColor","BackgroundTexture","FontFamily","FontSize","FontWeight","FontStyle","LineHeight","ForegroundColor","Value","activeScript","pendingScript"].forEach(n=>t(n))}_deserializeConfigurationFrom(e){const t=n=>{if(e[n]!=null)try{this[n]=e[n]}catch{console.warn("DeserializationError:invalid value for property "+Ne(n))}};t("activeScript"),["Name","BackgroundColor","BackgroundTexture","FontFamily","FontSize","FontWeight","FontStyle","LineHeight","ForegroundColor","Value","pendingScript"].forEach(n=>t(n))}},Ca=class extends Ba{constructor(e,t){super(e,t),he(this,"_SnapToGrid"),he(this,"_GridWidth"),he(this,"_GridHeight"),he(this,"_BoardList",[])}get Path(){const e=this._Folder;if(e==null)return"|";{const t=this.Name||"#"+this.Index,n=e.Path;return(n==="|"?"":n)+"|"+t}}set Path(e){ue("Path")}BoardAtPath(e){if(To("board path",e),e=e.trim(),e==="")return this._Folder==null?void 0:this;if(e.startsWith("|"))return this._Project.BoardAtPath(e.replace(/^(\s*\|)*/,""));e=e.replace(/\|+/g,"|");const t=e.split("|").map(i=>i.trim()).map(i=>/^#\d+$/.test(i)?parseInt(i.slice(1),10):i);let n;for(let i=0,o=t.length;i<o;i++){const u=t[i];if(typeof u=="number"?n=(n||this).BoardAt(u):n=(n||this).BoardNamed(u),n==null)return}return n}get IndexPath(){const e=this._Folder;return e==null?[]:e.IndexPath.concat(this.Index)}set IndexPath(e){ue("IndexPath")}get SnapToGrid(){return this._SnapToGrid?this._SnapToGrid==!0:this._Folder==null?!1:this._Folder.SnapToGrid}set SnapToGrid(e){yu("snap-to-grid setting",e),this._SnapToGrid!==e&&(this._SnapToGrid=e,this._reportChange("configure",this,"SnapToGrid",e),this.rerender())}get GridWidth(){return this._GridWidth==null?this._Folder==null?rg:this._Folder.GridWidth:this._GridWidth}set GridWidth(e){di("snap-to-grid width",e),this._GridWidth!==e&&(this._GridWidth=e,this._reportChange("configure",this,"GridWidth",e),this.rerender())}get GridHeight(){return this._GridHeight==null?this._Folder==null?ng:this._Folder.GridHeight:this._GridHeight}set GridHeight(e){di("snap-to-grid height",e),this._GridHeight!==e&&(this._GridHeight=e,this._reportChange("configure",this,"GridHeight",e),this.rerender())}get Index(){return this._Folder==null?-1:this._Folder.IndexOfBoard(this)}set Index(e){ue("Index")}get mayBeShiftedUp(){return this._Folder==null?!1:this._Folder.mayShiftBoardUp(this)}set mayBeShiftedUp(e){ue("mayBeShiftedUp")}get mayBeShiftedDown(){return this._Folder==null?!1:this._Folder.mayShiftBoardDown(this)}set mayBeShiftedDown(e){ue("mayBeShiftedDown")}get mayBeShiftedIn(){return this._Folder==null?!1:this._Folder.mayShiftBoardIn(this)}set mayBeShiftedIn(e){ue("mayBeShiftedIn")}get mayBeShiftedOut(){return this._Folder==null?!1:this._Folder.mayShiftBoardOut(this)}set mayBeShiftedOut(e){ue("mayBeShiftedOut")}containsFolder(e){for(Gp("folder",e),e=e.Folder;e!=null;){if(e===this)return!0;e=e.Folder}return!1}get BoardList(){return this._BoardList.slice()}set BoardList(e){ue("BoardList")}get BoardCount(){return this._BoardList.length}set BoardCount(e){ue("BoardCount")}IndexOfBoard(e){const t=this.Board(e);return t==null?-1:this._BoardList.indexOf(t)}Board(e){switch(_u("board, name or index",e),!0){case hn(e):const t=e;return t._Folder===this?t:void 0;case Ei(e):let n=e;return n<0&&(n+=this._BoardList.length),this._BoardList[n];case _n(e):return this.BoardNamed(e)}Q("InvalidArgument: no valid board, board name or board index given")}existingBoard(e){let t=this.Board(e);return t==null&&Q("BoardNotFound: the desired board could not be found"),t}BoardNamed(e){gi("SNS board name",e),e=e.trim().toLowerCase();let t;return this._BoardList.forEach(n=>{t==null&&n.Name!=null&&n.Name.toLowerCase()===e&&(t=n)}),t}BoardAt(e){return xr("SNS board index",e),e<0&&(e+=this._BoardList.length),this._BoardList[e]}hasBoard(e){return this.Board(e)!=null}newBoardAt(e,t){return t==null?this.BoardDeserializedAt({},e):this.BoardDeserializedAt({Id:t},e)}BoardDeserializedAt(e,t){ka("board serialization",e),Er("board insertionindex",t),t==null?t=this._BoardList.length:(t<0&&(t+=this._BoardList.length),t=Math.max(0,Math.min(t,this._BoardList.length)));const n=Xu("board id",e.Id);let i=new ec(this._Project,n);return this._attachBoardAt(i,t),i._deserializeConfigurationFrom(e),i._deserializeStickersFrom(e),i._deserializeBoardsFrom(e),this.rerender(),i}DuplicateOfBoardAt(e){xr("board index",e);const t=this.existingBoard(e).Serialization;return Jt(t),this.BoardDeserializedAt(t,e+1)}mayShiftBoardUp(e){const t=this.existingBoard(e);return this._BoardList.indexOf(t)>0}mayShiftBoardDown(e){const t=this.existingBoard(e),n=this._BoardList,i=n.indexOf(t);return i>=0&&i<n.length-1}shiftBoardToTop(e){const t=this.existingBoard(e);if(this.mayShiftBoardUp(t)){const n=this._BoardList.indexOf(t);this._detachBoardAt(n),this._attachBoardAt(t,0),this.rerender()}}shiftBoardUp(e){const t=this.existingBoard(e);if(this.mayShiftBoardUp(t)){const n=this._BoardList.indexOf(t);this._detachBoardAt(n),this._attachBoardAt(t,n-1),this.rerender()}}shiftBoardDown(e){const t=this.existingBoard(e);if(this.mayShiftBoardDown(t)){const n=this._BoardList.indexOf(t);this._detachBoardAt(n),this._attachBoardAt(t,n+1),this.rerender()}}shiftBoardToBottom(e){const t=this.existingBoard(e);if(this.mayShiftBoardDown(t)){const n=this._BoardList.indexOf(t);this._detachBoardAt(n),this._attachBoardAt(t,this._BoardList.length),this.rerender()}}shiftBoardTo(e,t){const n=this.existingBoard(e);xr("SNS board index",t),t<0&&(t+=this._BoardList.length),t=Math.max(0,Math.min(t,this._BoardList.length));const i=this._BoardList.indexOf(n);i!==t&&(this._detachBoardAt(i),this._attachBoardAt(n,t),this.rerender())}shiftBoardsByIndex(e,t,n){const i=this._BoardList.length;dn("old index",e,0,i),dn("new index",t,0,i);const o=this._BoardList.slice(e,e+n);o.forEach(u=>this._detachBoardAt(e)),t>e&&(t-=n),o.forEach((u,s)=>this._attachBoardAt(u,t+s)),this.rerender()}mayShiftBoardIn(e){const t=this.existingBoard(e);return this.mayShiftBoardDown(t)}mayShiftBoardOut(e){return this._Folder!=null}shiftBoardIn(e){const t=this.existingBoard(e);if(this.mayShiftBoardIn(t)){const n=this._BoardList.indexOf(t),i=this._BoardList[n+1];this._detachBoardAt(n),i._attachBoardAt(t,0),this.rerender(),i.rerender()}}shiftBoardOut(e){const t=this.existingBoard(e);if(this.mayShiftBoardOut(t)){const n=this._BoardList.indexOf(t),i=this._Folder;this._detachBoardAt(n),i._attachBoardAt(t,i.Index),this.rerender(),i.rerender()}}mayMoveBoardTo(e,t,n){const i=this.existingBoard(e),o=cn(t)?t:this.existingBoard(t);return Er("insertion index",n),o.isAttached&&o!==i&&!i.containsFolder(o)}moveBoardTo(e,t,n){const i=this.existingBoard(e),o=cn(t)?t:this.existingBoard(t);if(Er("insertion index",n),o.isAttached&&o!==i&&!i.containsFolder(o)){const u=this._BoardList.indexOf(i);let s=n??o.BoardCount;s<0&&(s+=o.BoardCount),s=Math.max(0,Math.min(s,o.BoardCount)),this._detachBoardAt(u),o._attachBoardAt(i,s),this.rerender(),o.rerender()}}destroyBoard(e){const t=this.Board(e);if(t==null){hn(e)&&Q("NoSuchBoard: the given board could not be found");return}t.clear(),Ia(t);const n=this._BoardList.indexOf(t);this._detachBoardAt(n),dg(t),t._Project=void 0,this._reportChange("destroyBoard",t),this.rerender()}clear(){for(let e=0,t=this._BoardList.length;e<t;e++)this.destroyBoard(this._BoardList[0])}Rendering(e){if(this.hasError)return fi.call(this);let t=this._Renderer;if(t==null)return"";try{return t.call(this,e)}catch(n){return this.Error={Type:"Rendering Failure",Message:""+n,Cause:n},fi.call(this)}}_attachBoardAt(e,t){e._Folder=this,this._BoardList.splice(t,0,e),this._reportChange("attachBoard",e,this,t)}_detachBoardAt(e){const t=this._BoardList.splice(e,1)[0];t._Folder=void 0,this._reportChange("detachBoard",t,this,e)}_serializeConfigurationInto(e){super._serializeConfigurationInto(e);const t=n=>{this["_"+n]!=null&&(e[n]=this[n])};["SnapToGrid","GridWidth","GridHeight"].forEach(n=>t(n))}_deserializeConfigurationFrom(e){super._deserializeConfigurationFrom(e);const t=n=>{if(e[n]!=null)try{this[n]=e[n]}catch{console.warn("DeserializationError:invalid value for property "+Ne(n))}};["SnapToGrid","GridWidth","GridHeight"].forEach(n=>t(n))}_serializeBoardsInto(e){const t=this._BoardList.slice();t.length>0&&(e.BoardList=t.map(n=>n.Serialization))}_deserializeBoardsFrom(e){this._BoardList.length>0&&this.clear(),bn(e.BoardList,xn)&&e.BoardList.length>0&&e.BoardList.forEach((t,n)=>{this.BoardDeserializedAt(t,n)})}};const Pg=Object.create(null);["Name","BackgroundColor","BackgroundTexture","FontFamily","FontSize","FontWeight","FontStyle","LineHeight","ForegroundColor","Value","activeScript","pendingScript","SnapToGrid","GridWidth","GridHeight"].forEach(r=>Pg[r]=!0);let Va=class Ku extends Ca{constructor(e){super(void 0,void 0),he(this,"_onChange",[]),he(this,"_onRender",[]),he(this,"_onError",[]),this._Project=this,gi("project name",e),this._Name=e}get Name(){return this._Name}set Name(e){ue("Name")}get IndexPath(){return[]}set IndexPath(e){ue("IndexPath")}BoardAtIndexPath(e){if(pa("board index path",e,da),e.length!==0){let t;for(let n=0,i=e.length;n<i;n++)if(t=(t||this).BoardAt(e[n]),t==null)return;return t}}FolderWithId(e){return Is("folder id",e),Vs(this,e)}BoardWithId(e){const t=Vs(this,e);return Mi(t)&&Q("NotABoard: the folder with the given id is not a board, but the project"),t}StickerWithId(e){return Is("sticker id",e),hg(this,e)}recursivelyActivateAllScripts(){this.activateScript(),this._BoardList.forEach(e=>e.recursivelyActivateAllScripts())}onChange(e){nn('"onChange" callback',e),this._onChange.push(e)}_reportChange(e,t,...n){e==="configure"&&(e=cn(t)?"configureFolder":"configureSticker"),n.unshift(this,e,t),this._onChange.forEach(i=>i.apply(this,n))}onRender(e){nn('"onRender" callback',e),this._onRender.push(e)}rerender(e,t){this._onRender.forEach(n=>n(this,e,t))}onError(e){nn('"onError" callback',e),this._onError.push(e)}showError(e,t){this._onError.forEach(n=>n(this,e,t))}get Serialization(){const e={};return this._serializeConfigurationInto(e),this._serializeBoardsInto(e),delete e.Id,e}set Serialization(e){ue("Serialization")}static deserializedFrom(e,t){gi("project name",e);const n=new Ku(e);return delete t.Name,n._Name=e,n._deserializeConfigurationFrom(t),n._deserializeBoardsFrom(t),n}};const Qu=Object.create(null);["Name","BackgroundColor","BackgroundTexture","FontFamily","FontSize","FontWeight","FontStyle","LineHeight","ForegroundColor","Value","activeScript","pendingScript","SnapToGrid","GridWidth","GridHeight"].forEach(r=>Qu[r]=!0);let ec=class extends Ca{constructor(e,t){super(e,t),he(this,"_StickerList",[]),lg(e,this),e._reportChange("createBoard",this)}get StickerList(){return this._StickerList.slice()}set StickerList(e){ue("StickerList")}get StickerCount(){return this._StickerList.length}set StickerCount(e){ue("StickerCount")}IndexOfSticker(e){return Uu("SNS sticker to search for",e),this._StickerList.indexOf(e)}Sticker(e){switch(_u("sticker, name or index",e),!0){case pi(e):const t=e;return t.Board===this?t:void 0;case Ei(e):const n=e;return this._StickerList[n];case _n(e):return this.StickerNamed(e)}Q("InvalidArgument: no valid sticker, sticker name or sticker index given")}existingSticker(e){let t=this.Sticker(e);return t==null&&Q("StickerNotFound: the desired sticker could not be found"),t}StickerNamed(e){gi("SNS sticker name",e),e=e.trim().toLowerCase();let t;return this._StickerList.forEach(n=>{t==null&&n.Name!=null&&n.Name.toLowerCase()===e&&(t=n)}),t}StickerAt(e){return xr("SNS sticker index",e),e<0&&(e+=this._StickerList.length),this._StickerList[e]}hasSticker(e){return this.Sticker(e)!=null}newStickerAt(e,t){return t==null?this.StickerDeserializedAt({},e):this.StickerDeserializedAt({Id:t},e)}StickerDeserializedAt(e,t){ka("sticker serialization",e),Er("SNS sticker index",t),t==null?t=this._StickerList.length:(t<0&&(t+=this._StickerList.length),t=Math.max(0,Math.min(t,this._StickerList.length)));const n=Xu("sticker id",e.Id);let i=new tc(this.Project,n);return this._attachStickerAt(i,t),i._deserializeConfigurationFrom(e),this.rerender(),i}DuplicateOfStickerAt(e){xr("SNS sticker index",e);const t=this.existingSticker(e).Serialization;return Jt(t),this.StickerDeserializedAt(t,e+1)}mayShiftStickerUp(e){const t=this.existingSticker(e);return this._StickerList.indexOf(t)>0}mayShiftStickerDown(e){const t=this.existingSticker(e),n=this._StickerList,i=n.indexOf(t);return i>=0&&i<n.length-1}shiftStickerToTop(e){const t=this.existingSticker(e);if(this.mayShiftStickerUp(t)){const n=this._StickerList.indexOf(t);this._detachStickerAt(n),this._attachStickerAt(t,0),this.rerender()}}shiftStickerUp(e){const t=this.existingSticker(e);if(this.mayShiftStickerUp(t)){const n=this._StickerList.indexOf(t);this._detachStickerAt(n),this._attachStickerAt(t,n-1),this.rerender()}}shiftStickerDown(e){const t=this.existingSticker(e);if(this.mayShiftStickerDown(t)){const n=this._StickerList.indexOf(t);this._detachStickerAt(n),this._attachStickerAt(t,n+1),this.rerender()}}shiftStickerToBottom(e){const t=this.existingSticker(e);if(this.mayShiftStickerDown(t)){const n=this._StickerList.indexOf(t);this._detachStickerAt(n),this._attachStickerAt(t,this._StickerList.length),this.rerender()}}shiftStickerTo(e,t){const n=this.existingSticker(e);xr("SNS sticker index",t),t<0&&(t+=this._StickerList.length),t=Math.max(0,Math.min(t,this._StickerList.length-1));const i=this._StickerList.indexOf(n);i!==t&&(this._detachStickerAt(i),this._attachStickerAt(n,t),this.rerender())}shiftStickersByIndex(e,t,n){const i=this._StickerList.length;dn("old index",e,0,i),dn("new index",t,0,i);const o=this._StickerList.slice(e,e+n);o.forEach(u=>this._detachStickerAt(e)),t>e&&(t-=n),o.forEach((u,s)=>this._attachStickerAt(u,t+s)),this.rerender()}destroySticker(e){const t=this.Sticker(e);if(t==null){pi(e)&&Q("NoSuchSticker: the given sticker could not be found");return}Ia(t);const n=this._StickerList.indexOf(t);this._detachStickerAt(n),cg(t),t._Project=void 0,this._reportChange("destroySticker",t),this.rerender()}clear(){super.clear();for(let e=0,t=this._StickerList.length;e<t;e++)this.destroySticker(this._StickerList[0])}recursivelyActivateAllScripts(){this.activateScript(),this._BoardList.forEach(e=>e.recursivelyActivateAllScripts()),this._StickerList.forEach(e=>e.activateScript())}rerender(){this.Project.rerender(this)}_attachStickerAt(e,t){e._Folder=this,this._StickerList.splice(t,0,e),this._reportChange("attachSticker",e,this,t)}_detachStickerAt(e){const t=this._StickerList.splice(e,1)[0];t._Folder=void 0,this._reportChange("detachSticker",t,this,e)}get Serialization(){const e={};return this._serializeConfigurationInto(e),this._serializeBoardsInto(e),this._serializeStickersInto(e),e}set Serialization(e){ue("Serialization")}_serializeStickersInto(e){const t=this._StickerList.slice();t.length>0&&(e.StickerList=t.map(n=>n.Serialization))}_deserializeStickersFrom(e){this._StickerList.length>0&&this.clear(),bn(e.StickerList,xn)&&e.StickerList.length>0&&e.StickerList.forEach((t,n)=>{this.StickerDeserializedAt(t,n)})}};["Name","BackgroundColor","BackgroundTexture","FontFamily","FontSize","FontWeight","FontStyle","LineHeight","ForegroundColor","Value","activeScript","pendingScript","SnapToGrid","GridWidth","GridHeight"].forEach(r=>Qu[r]=!0);let tc=class extends Ba{constructor(e,t){super(e,t),he(this,"_minWidth"),he(this,"_maxWidth",Qp),he(this,"_minHeight"),he(this,"_maxHeight",tg),he(this,"_Geometry",{...Wr}),he(this,"_Lock",!1),he(this,"_Visibility",!0),he(this,"_Enabling",!0),ug(e,this),e._reportChange("createSticker",this)}get Board(){return this._Folder}set Board(e){ue("Board")}get BackgroundTexture(){return this._BackgroundTexture}set BackgroundTexture(e){vu("visual background texture",e),this._BackgroundTexture!==e&&(this._BackgroundTexture=e,this._reportChange("configure",this,"BackgroundTexture",e),this.rerender())}get Index(){return this._Folder.IndexOfSticker(this)}set Index(e){ue("Index")}get mayBeShiftedUp(){return this._Folder.mayShiftStickerUp(this)}set mayBeShiftedUp(e){ue("mayBeShiftedUp")}get mayBeShiftedDown(){return this._Folder.mayShiftStickerDown(this)}set mayBeShiftedDown(e){ue("mayBeShiftedDown")}get minWidth(){return this._minWidth==null?Kp:this._minWidth}set minWidth(e){Dn("minimal sticker width",e),this._minWidth!==e&&(this._minWidth=e,this._reportChange("configure",this,"minWidth",e),this._minWidth!=null&&this._maxWidth!=null&&this._maxWidth<this._minWidth&&(this._maxWidth=e,this._reportChange("configure",this,"maxWidth",this._minWidth)),this._minWidth!=null&&this._Geometry.Width<this._minWidth&&(this.Width=this._minWidth),this.rerender())}get maxWidth(){return this._maxWidth}set maxWidth(e){Dn("maximal sticker width",e),e!=null&&this._minWidth!=null&&(e=Math.max(this._minWidth,e)),this._maxWidth!==e&&(this._maxWidth=e,this._reportChange("configure",this,"maxWidth",this._maxWidth),this._maxWidth!=null&&this._Geometry.Width>this._maxWidth&&(this.Width=this._maxWidth),this.rerender())}get minHeight(){return this._minHeight==null?eg:this._minHeight}set minHeight(e){Dn("minimal sticker height",e),this._minHeight!==e&&(this._minHeight=e,this._reportChange("configure",this,"minHeight",e),this._minHeight!=null&&this._maxHeight!=null&&this._maxHeight<this._minHeight&&(this._maxHeight=e,this._reportChange("configure",this,"maxHeight",this._minHeight)),this._minHeight!=null&&this._Geometry.Height<this._minHeight&&(this.Height=this._minHeight),this.rerender())}get maxHeight(){return this._maxHeight}set maxHeight(e){Dn("maximal sticker height",e),e!=null&&this._minHeight!=null&&(e=Math.max(this._minHeight,e)),this._maxHeight!==e&&(this._maxHeight=e,this._reportChange("configure",this,"maxHeight",this._maxHeight),this._maxHeight!=null&&this._Geometry.Height>this._maxHeight&&(this.Height=this._maxHeight),this.rerender())}get x(){return this._Geometry.x}set x(e){Ps("sticker x coordinate",e),this.Geometry={...this.Geometry,x:e}}get y(){return this._Geometry.y}set y(e){Ps("sticker y coordinate",e),this.Geometry={...this.Geometry,y:e}}get Width(){return this._Geometry.Width}set Width(e){Bs("sticker width",e),this.Geometry={...this.Geometry,Width:e}}get Height(){return this._Geometry.Height}set Height(e){Bs("sticker height",e),this.Geometry={...this.Geometry,Height:e}}get Position(){return{x:this._Geometry.x,y:this._Geometry.y}}set Position(e){qp("visual position",e),this.Geometry={...this.Geometry,x:e.x,y:e.y}}get Size(){return{Width:this._Geometry.Width,Height:this._Geometry.Height}}set Size(e){Zp("visual size",e),this.Geometry={...this.Geometry,Width:e.Width,Height:e.Height}}get Geometry(){let{x:e,y:t,Width:n,Height:i}=this._Geometry;return this._minWidth!=null&&(n=Math.max(this._minWidth,n)),this._maxWidth!=null&&(n=Math.min(n,this._maxWidth)),this._minHeight!=null&&(i=Math.max(this._minHeight,i)),this._maxHeight!=null&&(i=Math.min(i,this._maxHeight)),{x:e,y:t,Width:n,Height:i}}set Geometry(e){Jp("visual geometry",e);let{x:t,y:n,Width:i,Height:o}=this._Geometry;(t!==e.x||i!==e.Width||n!==e.y||o!==e.Height)&&(this._Geometry={...e},this._reportChange("configure",this,"Geometry",{...e}),this.rerender())}get Lock(){return this._Lock}set Lock(e){go("sticker lock",e),this._Lock!==e&&(this._Lock=e,this._reportChange("configure",this,"Lock",e),this.rerender())}lock(){this.Lock=!0}unlock(){this.Lock=!1}get isLocked(){return this._Lock}set isLocked(e){this.Lock=e}get Visibility(){return this._Visibility}set Visibility(e){go("sticker visibility",e),this._Visibility!==e&&(this._Visibility=e,this._reportChange("configure",this,"Visibility",e),this.rerender())}show(){this.Visibility=!0}hide(){this.Visibility=!1}get isVisible(){return this._Visibility}set isVisible(e){this.Visibility=e}get Enabling(){return this._Enabling}set Enabling(e){go("sticker enabling",e),this._Enabling!==e&&(this._Enabling=e,this._reportChange("configure",this,"Enabling",e),this.rerender())}enable(){this.Enabling=!0}disable(){this.Enabling=!1}get isEnabled(){return this._Enabling}set isEnabled(e){this.Enabling=e}Rendering(e){if(this.hasError)return fi.call(this);let t=this._Renderer||Yu;try{return t.call(this,e)}catch(n){return this.Error={Type:"Rendering Failure",Message:""+n,Cause:n},fi.call(this)}}rerender(){this._Project.rerender(this._Folder,this)}get Serialization(){const e={};return this._serializeConfigurationInto(e),e}set Serialization(e){ue("Serialization")}_serializeConfigurationInto(e){super._serializeConfigurationInto(e),e.Geometry={...this._Geometry},this._minWidth!=null&&(e.minWidth=this._minWidth),this._maxWidth!=null&&(e.maxWidth=this._maxWidth),this._minHeight!=null&&(e.minHeight=this._minHeight),this._maxHeight!=null&&(e.maxHeight=this._maxHeight),this.isLocked&&(e.Lock=!0),this.isVisible||(e.Visibility=!1),this.isEnabled||(e.Enabling=!1)}_deserializeConfigurationFrom(e){super._deserializeConfigurationFrom(e);let{x:t,y:n,Width:i,Height:o}=e.Geometry||Wr;ar(t)||(t=Wr.x),ar(n)||(n=Wr.y),sr(i)||(i=Wr.Width),sr(o)||(o=Wr.Height),this.Geometry={x:t,y:n,Width:i,Height:o},e.Lock!=null&&(this.Lock=e.Lock),e.Visibility!=null&&(this.Visibility=e.Visibility),e.Enabling!=null&&(this.Enabling=e.Enabling)}};window.SNS={throwError:Q,throwReadOnlyError:ue,SNS_Project:Va};console.log("SNS is globally available now");document.dispatchEvent(new CustomEvent("SNS",{detail:window.SNS}));var Bg=Object.defineProperty,Cg=(r,e,t)=>e in r?Bg(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,pe=(r,e,t)=>(Cg(r,typeof e!="symbol"?e+"":e,t),t);function $t(r){var e=/^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(r);if(e==null)throw new Error(r);var t=new Error(e[2]);throw t.name=e[1],t}function Hi(r){return typeof r=="boolean"||r instanceof Boolean}function zr(r){return typeof r=="number"||r instanceof Number}function an(r){return(typeof r=="number"||r instanceof Number)&&isFinite(r.valueOf())}function Vg(r,e,t,n,i){if(n===void 0&&(n=!0),i===void 0&&(i=!0),!zr(r)||isNaN(r))return!1;if(an(e)){if(an(t)){if(r<e||!n&&r===e||r>t||!i&&r===t)return!1}else if(r<e||!n&&r===e)return!1}else if(an(t)&&(r>t||!i&&r===t))return!1;return!0}function Oi(r){return typeof r!="number"&&!(r instanceof Number)?!1:(r=r.valueOf(),isFinite(r)&&Math.round(r)===r)}function Na(r){return typeof r!="number"&&!(r instanceof Number)?!1:(r=r.valueOf(),isFinite(r)&&Math.round(r)===r&&r>=0)}function Ng(r){return typeof r!="number"&&!(r instanceof Number)?!1:(r=r.valueOf(),isFinite(r)&&Math.round(r)===r&&r>=1)}function vn(r){return typeof r=="string"||r instanceof String}function Ct(r,e){return(typeof r=="string"||r instanceof String)&&e.test(r.valueOf())}var Tg=/^[^\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function Ta(r){return Ct(r,Tg)}var Fg=/^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function Dt(r){return Ct(r,Fg)}function rc(r){return typeof r=="function"}function Fa(r){return r!=null&&typeof r=="object"}function wn(r){return r!=null&&typeof r=="object"&&Object.getPrototypeOf(r)===Object.prototype}var nc=Array.isArray;function Ns(r,e,t){if(nc(r)){for(var n=0,i=r.length;n<i;n++)if(r[n]===void 0)return!1;return!0}return!1}function kn(r,e,t,n){if(nc(r))try{for(var i=0,o=r.length;i<o;i++)if(e(r[i])==!1)return!1;return!(t!=null&&r.length<t||n!=null&&r.length>n)}catch{}return!1}function ic(r,e){return e.indexOf(r)>=0}function ji(r){return vn(r)&&(Yg.hasOwnProperty(r)||/^#[a-fA-F0-9]{6}$/.test(r)||/^#[a-fA-F0-9]{8}$/.test(r)||/^rgb\([0-9]+,\s*[0-9]+,\s*[0-9]+\)$/.test(r)||/^rgba\([0-9]+,\s*[0-9]+,\s*[0-9]+,([01]|[0]?[.][0-9]+)\)$/.test(r))}var Dg=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;function oc(r){return Ct(r,Dg)}var Wg=/^[^\s\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function Da(r){if(!Ct(r,Wg)||r==="")return!1;try{return new URL(r,"file://"),!0}catch{return!1}}var Oe=!1,Ce=!0;function Lg(r,e,t,n,i){if(e==null){if(n)return e;$t("MissingArgument: no ".concat(It(r)," given"))}else if(t(e))switch(!0){case e instanceof Boolean:case e instanceof Number:case e instanceof String:return e.valueOf();default:return e}else $t("InvalidArgument: the given ".concat(It(r)," is no valid ").concat(It(i)))}function de(r,e,t){var n=function(u,s){return Lg(u,s,r,e,t)},i=r.name;if(i!=null&&/^ValueIs/.test(i)){var o=i.replace(/^ValueIs/,e?"allow":"expect");return Eg(n,o)}else return n}function Eg(r,e){if(r==null&&$t("MissingArgument: no function given"),typeof r!="function"&&$t("InvalidArgument: the given 1st Argument is not a JavaScript function"),e==null&&$t("MissingArgument: no desired name given"),typeof e!="string"&&!(e instanceof String)&&$t("InvalidArgument: the given desired name is not a string"),r.name===e)return r;try{if(Object.defineProperty(r,"name",{value:e}),r.name===e)return r}catch{}var t=new Function("originalFunction","return function "+e+" () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}");return t(r)}function ac(r,e){if(e==null)$t("MissingArgument: no ".concat(It(r)," given"));else return e.valueOf()}var Ag=de(Hi,Ce,"boolean value"),xo=de(Hi,Oe,"boolean value"),Jn=de(Oi,Ce,"integral numeric value"),_r=de(Oi,Oe,"integral numeric value");function Ug(r,e,t,n){return e==null?e:Mg(r,e,t,n)}function gn(r,e,t,n){if(_r(r,e),isNaN(e)&&$t("InvalidArgument: the given ".concat(It(r)," is not-a-number")),t!=null&&isFinite(t)){if(n!=null&&isFinite(n)){if(e<t||e>n)throw new RangeError("the given ".concat(It(r)," (").concat(e,") is outside ")+"the allowed range (".concat(t,"...").concat(n,")"))}else if(e<t)throw new RangeError("the given ".concat(It(r)," is below the allowed ")+"minimum (".concat(e," < ").concat(t,")"))}else if(n!=null&&isFinite(n)&&e>n)throw new RangeError("the given ".concat(It(r)," exceeds the allowed ")+"maximum (".concat(e," > ").concat(n,")"));return e.valueOf()}var Mg=gn,Ts=de(Na,Ce,"ordinal number"),Fs=de(Ng,Ce,"cardinal number"),Ds=de(Ta,Ce,"literal text"),Xg=de(Dt,Ce,"single line of text"),Oo=de(Dt,Oe,"single line of text"),Kn=de(rc,Ce,"JavaScript function"),sn=de(rc,Oe,"JavaScript function"),Hg=de(wn,Ce,'"plain" JavaScript object');function Og(r,e,t,n,i,o){if(e==null&&$t("MissingArgument: no ".concat(It(r)," given")),kn(e,t,i,o))return e;$t("InvalidArgument: the given ".concat(It(r)," is ")+"either not a list or contains invalid elements")}function jg(r,e,t){return e==null?e:zg(r,e,t)}function Gg(r,e,t){if(e==null&&$t("MissingArgument: no ".concat(It(r)," given")),ic(e,t))return e==null||typeof e.valueOf!="function"?e:e.valueOf();$t("InvalidArgument: the given ".concat(It(r)," is not among the supported values"))}var zg=Gg,Ws=de(ji,Ce,"CSS color specification"),sc=de(Da,Ce,"URL");function It(r){var e=/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g,t=/[\x00-\x1f\x7f-\x9f]/g;return r.replace(e,function(n){return n==="\\"?"\\\\":n}).replace(t,function(n){switch(n){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v";default:{var i=n.charCodeAt(0).toString(16);return"\\x"+"00".slice(i.length)+i}}})}function Rg(r,e){e===void 0&&(e='"');var t=/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|'/g,n=/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|"/g,i=/[\x00-\x1f\x7f-\x9f]/g;return r.replace(e==="'"?t:n,function(o){switch(o){case"'":return"\\'";case'"':return'\\"';case"\\":return"\\\\";default:return o}}).replace(i,function(o){switch(o){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v";default:{var u=o.charCodeAt(0).toString(16);return"\\x"+"00".slice(u.length)+u}}})}function Ir(r,e){return e===void 0&&(e='"'),e+Rg(r,e)+e}function ln(r,e,t){if(r===e)return!1;var n=typeof r;if(n!==typeof e)return!0;function i(u,s,l){if(!Array.isArray(s)||u.length!==s.length)return!0;for(var a=0,h=u.length;a<h;a++)if(ln(u[a],s[a]))return!0;return!1}function o(u,s,l){if(Object.getPrototypeOf(u)!==Object.getPrototypeOf(s))return!0;for(var a in u)if(!(a in s))return!0;for(var a in s)if(!(a in u)||ln(u[a],s[a]))return!0;return!1}switch(n){case"undefined":case"boolean":case"string":case"function":return!0;case"number":return isNaN(r)!==isNaN(e)||Math.abs(r-e)>Number.EPSILON;case"object":return r==null||e==null?!0:Array.isArray(r)?i(r,e):o(r,e);default:return!0}return!0}var Yg={transparent:"rgba(0,0,0,0,0.0)",aliceblue:"rgba(240,248,255,1.0)",lightpink:"rgba(255,182,193,1.0)",antiquewhite:"rgba(250,235,215,1.0)",lightsalmon:"rgba(255,160,122,1.0)",aqua:"rgba(0,255,255,1.0)",lightseagreen:"rgba(32,178,170,1.0)",aquamarine:"rgba(127,255,212,1.0)",lightskyblue:"rgba(135,206,250,1.0)",azure:"rgba(240,255,255,1.0)",lightslategray:"rgba(119,136,153,1.0)",beige:"rgba(245,245,220,1.0)",lightslategrey:"rgba(119,136,153,1.0)",bisque:"rgba(255,228,196,1.0)",lightsteelblue:"rgba(176,196,222,1.0)",black:"rgba(0,0,0,1.0)",lightyellow:"rgba(255,255,224,1.0)",blanchedalmond:"rgba(255,235,205,1.0)",lime:"rgba(0,255,0,1.0)",blue:"rgba(0,0,255,1.0)",limegreen:"rgba(50,205,50,1.0)",blueviolet:"rgba(138,43,226,1.0)",linen:"rgba(250,240,230,1.0)",brown:"rgba(165,42,42,1.0)",magenta:"rgba(255,0,255,1.0)",burlywood:"rgba(222,184,135,1.0)",maroon:"rgba(128,0,0,1.0)",cadetblue:"rgba(95,158,160,1.0)",mediumaquamarine:"rgba(102,205,170,1.0)",chartreuse:"rgba(127,255,0,1.0)",mediumblue:"rgba(0,0,205,1.0)",chocolate:"rgba(210,105,30,1.0)",mediumorchid:"rgba(186,85,211,1.0)",coral:"rgba(255,127,80,1.0)",mediumpurple:"rgba(147,112,219,1.0)",cornflowerblue:"rgba(100,149,237,1.0)",mediumseagreen:"rgba(60,179,113,1.0)",cornsilk:"rgba(255,248,220,1.0)",mediumslateblue:"rgba(123,104,238,1.0)",crimson:"rgba(220,20,60,1.0)",mediumspringgreen:"rgba(0,250,154,1.0)",cyan:"rgba(0,255,255,1.0)",mediumturquoise:"rgba(72,209,204,1.0)",darkblue:"rgba(0,0,139,1.0)",mediumvioletred:"rgba(199,21,133,1.0)",darkcyan:"rgba(0,139,139,1.0)",midnightblue:"rgba(25,25,112,1.0)",darkgoldenrod:"rgba(184,134,11,1.0)",mintcream:"rgba(245,255,250,1.0)",darkgray:"rgba(169,169,169,1.0)",mistyrose:"rgba(255,228,225,1.0)",darkgreen:"rgba(0,100,0,1.0)",moccasin:"rgba(255,228,181,1.0)",darkgrey:"rgba(169,169,169,1.0)",navajowhite:"rgba(255,222,173,1.0)",darkkhaki:"rgba(189,183,107,1.0)",navy:"rgba(0,0,128,1.0)",darkmagenta:"rgba(139,0,139,1.0)",oldlace:"rgba(253,245,230,1.0)",darkolivegreen:"rgba(85,107,47,1.0)",olive:"rgba(128,128,0,1.0)",darkorange:"rgba(255,140,0,1.0)",olivedrab:"rgba(107,142,35,1.0)",darkorchid:"rgba(153,50,204,1.0)",orange:"rgba(255,165,0,1.0)",darkred:"rgba(139,0,0,1.0)",orangered:"rgba(255,69,0,1.0)",darksalmon:"rgba(233,150,122,1.0)",orchid:"rgba(218,112,214,1.0)",darkseagreen:"rgba(143,188,143,1.0)",palegoldenrod:"rgba(238,232,170,1.0)",darkslateblue:"rgba(72,61,139,1.0)",palegreen:"rgba(152,251,152,1.0)",darkslategray:"rgba(47,79,79,1.0)",paleturquoise:"rgba(175,238,238,1.0)",darkslategrey:"rgba(47,79,79,1.0)",palevioletred:"rgba(219,112,147,1.0)",darkturquoise:"rgba(0,206,209,1.0)",papayawhip:"rgba(255,239,213,1.0)",darkviolet:"rgba(148,0,211,1.0)",peachpuff:"rgba(255,218,185,1.0)",deeppink:"rgba(255,20,147,1.0)",peru:"rgba(205,133,63,1.0)",deepskyblue:"rgba(0,191,255,1.0)",pink:"rgba(255,192,203,1.0)",dimgray:"rgba(105,105,105,1.0)",plum:"rgba(221,160,221,1.0)",dimgrey:"rgba(105,105,105,1.0)",powderblue:"rgba(176,224,230,1.0)",dodgerblue:"rgba(30,144,255,1.0)",purple:"rgba(128,0,128,1.0)",firebrick:"rgba(178,34,34,1.0)",red:"rgba(255,0,0,1.0)",floralwhite:"rgba(255,250,240,1.0)",rosybrown:"rgba(188,143,143,1.0)",forestgreen:"rgba(34,139,34,1.0)",royalblue:"rgba(65,105,225,1.0)",fuchsia:"rgba(255,0,255,1.0)",saddlebrown:"rgba(139,69,19,1.0)",gainsboro:"rgba(220,220,220,1.0)",salmon:"rgba(250,128,114,1.0)",ghostwhite:"rgba(248,248,255,1.0)",sandybrown:"rgba(244,164,96,1.0)",gold:"rgba(255,215,0,1.0)",seagreen:"rgba(46,139,87,1.0)",goldenrod:"rgba(218,165,32,1.0)",seashell:"rgba(255,245,238,1.0)",gray:"rgba(128,128,128,1.0)",sienna:"rgba(160,82,45,1.0)",green:"rgba(0,128,0,1.0)",silver:"rgba(192,192,192,1.0)",greenyellow:"rgba(173,255,47,1.0)",skyblue:"rgba(135,206,235,1.0)",grey:"rgba(128,128,128,1.0)",slateblue:"rgba(106,90,205,1.0)",honeydew:"rgba(240,255,240,1.0)",slategray:"rgba(112,128,144,1.0)",hotpink:"rgba(255,105,180,1.0)",slategrey:"rgba(112,128,144,1.0)",indianred:"rgba(205,92,92,1.0)",snow:"rgba(255,250,250,1.0)",indigo:"rgba(75,0,130,1.0)",springgreen:"rgba(0,255,127,1.0)",ivory:"rgba(255,255,240,1.0)",steelblue:"rgba(70,130,180,1.0)",khaki:"rgba(240,230,140,1.0)",tan:"rgba(210,180,140,1.0)",lavender:"rgba(230,230,250,1.0)",teal:"rgba(0,128,128,1.0)",lavenderblush:"rgba(255,240,245,1.0)",thistle:"rgba(216,191,216,1.0)",lawngreen:"rgba(124,252,0,1.0)",tomato:"rgba(255,99,71,1.0)",lemonchiffon:"rgba(255,250,205,1.0)",turquoise:"rgba(64,224,208,1.0)",lightblue:"rgba(173,216,230,1.0)",violet:"rgba(238,130,238,1.0)",lightcoral:"rgba(240,128,128,1.0)",wheat:"rgba(245,222,179,1.0)",lightcyan:"rgba(224,255,255,1.0)",white:"rgba(255,255,255,1.0)",lightgoldenrodyellow:"rgba(250,250,210,1.0)",whitesmoke:"rgba(245,245,245,1.0)",lightgray:"rgba(211,211,211,1.0)",yellow:"rgba(255,255,0,1.0)",lightgreen:"rgba(144,238,144,1.0)",yellowgreen:"rgba(154,205,50,1.0)",lightgrey:"rgba(211,211,211,1.0)"},lc,jo,dc,qg=[];function Zg(r,e,t){var n,i,o,u={};for(o in e)o=="key"?n=e[o]:o=="ref"?i=e[o]:u[o]=e[o];if(arguments.length>2&&(u.children=arguments.length>3?lc.call(arguments,2):t),typeof r=="function"&&r.defaultProps!=null)for(o in r.defaultProps)u[o]===void 0&&(u[o]=r.defaultProps[o]);return Jg(r,u,n,i)}function Jg(r,e,t,n,i){var o={type:r,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:++dc,__i:-1,__u:0};return jo.vnode!=null&&jo.vnode(o),o}lc=qg.slice,jo={__e:function(r,e,t,n){for(var i,o,u;e=e.__;)if((i=e.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(r)),u=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(r,n||{}),u=i.__d),u)return i.__E=i}catch(s){r=s}throw r}},dc=0,typeof Promise=="function"&&Promise.prototype.then.bind(Promise.resolve());var uc=function(r,e,t,n){var i;e[0]=0;for(var o=1;o<e.length;o++){var u=e[o++],s=e[o]?(e[0]|=u?1:2,t[e[o++]]):e[++o];u===3?n[0]=s:u===4?n[1]=Object.assign(n[1]||{},s):u===5?(n[1]=n[1]||{})[e[++o]]=s:u===6?n[1][e[++o]]+=s+"":u?(i=r.apply(s,uc(r,s,t,["",null])),n.push(i),s[0]?e[0]|=2:(e[o-2]=0,e[o]=i)):n.push(s)}return n},Ls=new Map;function Kg(r){var e=Ls.get(this);return e||(e=new Map,Ls.set(this,e)),(e=uc(this,e.get(r)||(e.set(r,e=function(t){for(var n,i,o=1,u="",s="",l=[0],a=function(g){o===1&&(g||(u=u.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,g,u):o===3&&(g||u)?(l.push(3,g,u),o=2):o===2&&u==="..."&&g?l.push(4,g,0):o===2&&u&&!g?l.push(5,0,!0,u):o>=5&&((u||!g&&o===5)&&(l.push(o,0,u,i),o=6),g&&(l.push(o,g,0,i),o=6)),u=""},h=0;h<t.length;h++){h&&(o===1&&a(),a(h));for(var d=0;d<t[h].length;d++)n=t[h][d],o===1?n==="<"?(a(),l=[l],o=3):u+=n:o===4?u==="--"&&n===">"?(o=1,u=""):u=n+u[0]:s?n===s?s="":u+=n:n==='"'||n==="'"?s=n:n===">"?(a(),o=1):o&&(n==="="?(o=5,i=u,u=""):n==="/"&&(o<5||t[h][d+1]===">")?(a(),o===3&&(l=l[0]),o=l,(l=l[0]).push(2,0,o),o=0):n===" "||n==="	"||n===`
`||n==="\r"?(a(),o=2):u+=n),o===3&&u==="!--"&&(o=4,l=l[0])}return a(),l}(r)),e),arguments,[])).length>1?e:e[0]}var Gi=Kg.bind(Zg);let Qg=r=>crypto.getRandomValues(new Uint8Array(r)),ef=(r,e,t)=>{let n=(2<<Math.log(r.length-1)/Math.LN2)-1,i=-~(1.6*n*e/r.length);return(o=e)=>{let u="";for(;;){let s=t(i),l=i;for(;l--;)if(u+=r[s[l]&n]||"",u.length===o)return u}}},tf=(r,e=21)=>ef(r,e,Qg);var cc="abcdefghijklmnopqrstuvwxyz",hc="ABCDEFGHIJKLMNOPQRSTUVWXYZ",pc="0123456789",rf="346789ABCDEFGHJKLMNPQRTUVWXYabcdefghijkmnpqrtwxyz",nf="6789BCDFGHJKLMNPQRTWbcdfghjkmnpqrtwz";const of=pc,af=cc,sf=hc;var lf=of+af+sf,df={lowercase:cc,uppercase:hc,numbers:pc,nolookalikes:rf,nolookalikesSafe:nf,alphanumeric:lf};const uf=["String","Number","Object","Array","Boolean","Date"];function bo(r){return r&&typeof r=="object"}function Go(r,e,t){Object.defineProperty(r,e,{value:t,enumerable:!1,configurable:!0})}function Es(r,e,t){Go(r,"__key",e),Go(r,"__parent",t)}function cf(r){return Object.getOwnPropertyNames(r).concat(Object.getPrototypeOf(r)&&uf.indexOf(Object.getPrototypeOf(r).constructor.name)<0?Object.getOwnPropertyNames(Object.getPrototypeOf(r)):[]).filter(e=>e!=="constructor"&&typeof r[e]=="function")}const Wa={computedStack:[],trackerSymbol:Symbol("tracker")};let Ur=null;const bi=Symbol();function zo(){if(Ur){for(const r of Ur)r(),r[bi]=!1;Ur=null}}function As(r,e){r[bi]||(Ur===null&&(Ur=[],e===!0?queueMicrotask(zo):setTimeout(zo,e)),Ur.push(r))}const{computedStack:Wn,trackerSymbol:_o}=Wa,yo=Symbol("__observed"),Yt=Symbol("modifiedProperty");function Qn(r,e={}){const{props:t,ignore:n,batch:i,deep:o=!0,bubble:u,bind:s}=e;if(r[yo])return r;const l=g=>g!==yo&&(t==null||t instanceof Array&&t.includes(g))&&(n==null||n instanceof Array&&!n.includes(g));o&&Object.entries(r).forEach(function([g,p]){bo(p)&&l(g)&&(r[g]=Qn(p,e),u&&Es(r[g],g,r))});function a(g,p,f){if(p==="__handler")Go(g,"__handler",f);else if(!l(p))g[p]=f;else if(Array.isArray(g)&&p==="length"||hf(g[p],f)){const x=p!==Yt&&o&&bo(f),b=g[p];g[p]=x?Qn(f,e):f,x&&u&&Es(g[p],p,g);const y=[p];let P=g;for(;P&&!(P.__handler&&P.__handler(y,f,b,d)===!1);)P.__key&&P.__parent?(y.unshift(P.__key),P=P.__parent):P=null;const W=h.get(p);if(W)for(const B of W){const I=B[_o],L=I&&I.get(g),V=L&&L.has(p);B.__disposed||I&&!V?W.delete(B):B!==Wn[0]&&(typeof i<"u"&&i!==!1?(As(B,i),B[bi]=!0):B())}if(p!==Yt){g[Yt]=p;const B=h.get(Yt);if(B)for(const I of B){const L=I[_o],V=L&&L.get(g),X=V&&V.has(Yt);I.__disposed||L&&!X?B.delete(I):I!==Wn[0]&&(typeof i<"u"&&i!==!1?(As(I,i),I[bi]=!0):I())}}}}const h=new Map,d=new Proxy(r,{get(g,p){if(p===yo)return!0;if(l(p)&&Wn.length){const f=Wn[0],x=f[_o];if(x){let y=x.get(r);y||(y=new Set,x.set(r,y)),y.add(p)}let b=h.get(p);b||(b=new Set,h.set(p,b)),b.add(f)}return r[p]},set(g,p,f){return a(r,p,f),!0},defineProperty(g,p,f){if(p==="__handler")throw new Error("Don't track bubble handlers");if(l(p)){if(!Array.isArray(r)||p==="length"){"value"in f&&o&&bo(f.value)&&(f={...f},f.value=Qn(f.value,e));const x=Reflect.defineProperty(r,p,f);return p!==Yt&&(r[Yt]=p),x}}else return Reflect.defineProperty(r,p,f);return!1},deleteProperty(g,p){if(p===Yt)throw new Error('internal property Symbol("modifiedProperty") must not be deleted');return p in r&&a(r,p,void 0),Reflect.deleteProperty(g,p)}});return s&&cf(r).forEach(g=>r[g]=r[g].bind(d)),d}function hf(r,e,t){const n=new Map;function i(o,u,s){if(o===u)return!1;let l=typeof o;if(l!==typeof u)return!0;function a(d,g,p){if(!Array.isArray(g)||d.length!==g.length)return!0;if(n.has(d)||n.has(g)){if(n.has(d)&&n.get(d).has(g)||n.has(g)&&n.get(g).has(d))return!1;n.has(d)||n.set(d,new Set),n.get(d).add(g)}for(let f=0,x=d.length;f<x;f++)if(i(d[f],g[f],p))return!0;return!1}function h(d,g,p="by-value"){if(Object.getPrototypeOf(d)!==Object.getPrototypeOf(g))return!0;for(let f in d)if(!(f in g))return!0;for(let f in g)if(!(f in d))return!0;if(n.has(d)||n.has(g)){if(n.has(d)&&n.get(d).has(g)||n.has(g)&&n.get(g).has(d))return!1;n.has(d)||n.set(d,new Set),n.get(d).add(g)}for(let f in d)if(i(d[f],g[f],p))return!0;return!1}switch(l){case"undefined":case"boolean":case"string":case"function":return!0;case"number":return isNaN(o)!==isNaN(u)||Math.abs(o-u)>Number.EPSILON;case"object":return o==null||u==null?!0:s==="by-value"&&(o instanceof Boolean||o instanceof Number||o instanceof String)?o.valueOf()!==u.valueOf():Array.isArray(o)?a(o,u,s):s==="by-reference"?!0:h(o,u,s);default:return!0}return!0}return i(r,e,t)}const{computedStack:Us,trackerSymbol:pf}=Wa;function gf(r,{autoRun:e=!0,callback:t,bind:n,disableTracking:i=!1}={}){function o(l,a=[]){const h=t||s;i||(h[pf]=new WeakMap),Us.unshift(h),a.length>0?a=[...a,u]:a=[u];const d=l?l():n?r.apply(n,a):r(...a);return Us.shift(),d}const u={computeAsync:o},s=(...l)=>o(null,l);return e&&s(),s}function ff(r){return r[Wa.trackerSymbol]=null,r.__disposed=!0}const mf={observe:Qn,modifiedProperty:Yt,computed:gf,dispose:ff,batch:zo},gc=Dt,{observe:Sf,computed:fc,dispose:xf}=mf,_i=document.createElement("style");_i.innerHTML=`
/**** DefaultSticker ****/

  .SNS.DefaultSticker {
    left:0px; top:0px; right:0px; bottom:0px;
  }
`;document.head.appendChild(_i);const bf=["normal","italic"],_f=["missing Behaviour","Behaviour Execution Failure","Script Compilation Failure","Script Execution Failure","Rendering Failure","Event Handling Failure",'"onMount" Callback Failure','"onUnmount" Callback Failure'];function ft(r){let e=/^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(r);if(e==null)throw new Error(r);{let t=new Error(e[2]);throw t.name=e[1],t}}function _e(r){ft("ReadOnlyProperty: property "+Ir(r)+" must not be set")}function mc(r){return r instanceof Ma}de(mc,Ce,"SNS visual");const yf=de(mc,Oe,"SNS visual");function fn(r){return r instanceof Xa}de(fn,Ce,"SNS folder");const vf=de(fn,Oe,"SNS folder");function zi(r){return r instanceof Vc}de(zi,Ce,"SNS project");de(zi,Oe,"SNS project");function yi(r){return r instanceof Fc}const wf=de(yi,Ce,"SNS board");de(yi,Oe,"SNS board");function yr(r){return r instanceof Dc}de(yr,Ce,"SNS sticker");const Sc=de(yr,Oe,"SNS sticker");function xc(r){return Dt(r)}const kf=de(xc,Ce,"unique SNS id"),bc=kf,Ms=de(xc,Oe,"unique SNS id"),$f=/^[a-z$_][a-z$_0-9]*$/i;function _c(r){return Ct(r,$f)}de(_c,Ce,"note stickers identifier");const yc=de(_c,Oe,"note stickers identifier");function Ri(r){return Dt(r)}const If=de(Ri,Ce,"SNS name"),vi=de(Ri,Oe,"SNS name");function lr(r){return an(r)}de(lr,Ce,"sticker coordinate");const Xs=de(lr,Oe,"sticker coordinate");function dr(r){return an(r)&&r>=0}const Ln=de(dr,Ce,"sticker dimension"),Hs=de(dr,Oe,"sticker dimension");function vc(r){return Fa(r)&&lr(r.x)&&lr(r.y)}de(vc,Ce,"sticker position");const Pf=de(vc,Oe,"sticker position");function wc(r){return Fa(r)&&dr(r.Width)&&dr(r.Height)}de(wc,Ce,"sticker size");const Bf=de(wc,Oe,"sticker size");function kc(r){return Fa(r)&&lr(r.x)&&dr(r.Width)&&lr(r.y)&&dr(r.Height)}de(kc,Ce,"sticker geometry");const Cf=de(kc,Oe,"sticker geometry");function $c(r){return wn(r)&&ic(r.Type,_f)&&Ta(r.Message)}const Os=de($c,Ce,"error descriptor");de($c,Oe,"error descriptor");function Ic(r){return wn(r)}de(Ic,Ce,"serializable object");const La=de(Ic,Oe,"serializable object"),Lr={x:20,y:20,Width:80,Height:60},Vf=10,Nf=void 0,Tf=10,Ff=void 0,Df=10,Wf=10;function Lf(r,e){return Hi(r)?r:e}function Le(r,e){return r==null?void 0:Hi(r)?r:e}function Yi(r,e){return zr(r)?r:e}function Xt(r,e){return zr(r)?r:e}function Pr(r,e,t=-1/0,n=1/0,i=!1,o=!1){return Vg(r,t,n,i,o)?r:e}function ct(r,e){return Na(r)?r:e}function ot(r,e,t){return Ct(r,t)?r:e}function $n(r,e){return Ta(r)?r:e}function st(r,e){return(Dt(r)?r:e).replace(/[\f\r\n\v\u0085\u2028\u2029].*$/,"...")}function Je(r,e){const t=Dt(r)?r:e;return t==null?void 0:t.replace(/[\f\r\n\v\u0085\u2028\u2029].*$/,"...")}function Pc(r,e,t){return kn(r,t)?r:e}function St(r,e,t){return kn(r,t)?r:e}function Ea(r,e){return ji(r)?r:e}function Ef(r,e){return ji(r)?r:e}function Af(r,e){return oc(r)?r:e}function Uf(r,e){return gc(r)?r:e}function Rr(r,e){return Da(r)?r:e}function Bc(){return Gi`<div class="SNS DefaultSticker" style=${qi(this)}/>`}function wi(){const r=this.Error;return r==null?Bc.call(this):Gi`<div class="SNS DefaultSticker">
      <div class="SNS ErrorIndicator" onClick=${()=>this.Project.showError(this,r)}/>
    </div>`}const Mf=tf(df.nolookalikesSafe,21),ki=new WeakMap;function Xf(r,e){let t=ki.get(r);t==null&&ki.set(r,t=Object.create(null));const n=e.Id;n in t&&ft("NonUniqueId: the id of the given folder ("+Ir(n)+") has already been registered"),t[n]=e}function Hf(r){const e=r.Project;let t=ki.get(e);t!=null&&delete t[r.Id]}function js(r,e){let t=ki.get(r);if(t!=null)return t[e]}const $i=new WeakMap;function Of(r,e){let t=$i.get(r);t==null&&$i.set(r,t=Object.create(null));const n=e.Id;n in t&&ft("NonUniqueId: the id of the given sticker ("+Ir(n)+") has already been registered"),t[n]=e}function jf(r){const e=r.Project;let t=$i.get(e);t!=null&&delete t[r.Id]}function Gf(r,e){let t=$i.get(r);if(t!=null)return t[e]}function Ii(r){La("serialization",r),delete r.Id,Ns(r.BoardList)&&r.BoardList.forEach(e=>Ii(e)),Ns(r.StickerList)&&r.StickerList.forEach(e=>Ii(e))}const Ro=new WeakMap;function Cc(r,e){let t=Ro.get(r);t==null&&Ro.set(r,t=[]),t.push(e)}function Aa(r){let e=Ro.get(r);e!=null&&e.forEach(t=>{xf(t)})}const Gs=Object.create(null),Yo=Object.create(null),zf=Object.create(null);function Y(r,e,t,n,i,o){Oo("behavior group label",r),Oo("behavior label",e),yc("behavior name",t),Hg("sticker template",n),Kn("behavior function",i);const u=r.toLowerCase().replace(/\s/g,""),s=t.toLowerCase(),l={...n};l.activeScript==null?l.activeScript=`useBehavior('${t}')
`:l.activeScript=l.activeScript.replace(/^\s*\n/,"").replace(/\n\s*$/,`
`),s in Yo&&ft("BehaviorExists: behavior "+Ir(t)+" was already registered");let a=Gs[u];a==null&&(Gs[u]=a={GroupLabel:r,BehaviorSet:Object.create(null)}),a.BehaviorSet[t]={Label:e,Executable:i,Template:l},i!=null&&(zf[s]=l,Yo[s]=i),o!=null&&_i.innerHTML.indexOf(o.trim())<0&&(_i.innerHTML+=o)}function Rf(r){Sc("visual",this),yc("behavior name",r);const e=Yo[r.toLowerCase()];e==null&&ft("NoSuchBehavior: no behavior called "+Ir(r)+" found");const t=u=>{sn("reactive function",u),Cc(this,fc(u))},n=this.onRender.bind(this),i=this.onMount.bind(this),o=this.onUnmount.bind(this);e.call(this,this,this,Gi,t,n,i,o)}Y("basic Views","plain Sticker","plainSticker",{Geometry:{x:20,y:20,Width:100,Height:80},activeScript:'onRender(() => html`<div class="SNS Placeholder"></div>`)'},(r,e,t,n,i,o,u)=>{i(()=>t`<div class="SNS plainSticker"></div>`)},`
/**** plain Stickers ****/

  .SNS.plainSticker {
    border:dotted 1px gray;
  }
  `);Y("basic Views","sticky Note","stickyNote",{Geometry:{x:20,y:20,Width:100,Height:80},minWidth:20,minHeight:10},(r,e,t,n,i,o,u)=>{e.Renderer=function(s){const{builtinSelection:l,builtinDragging:a}=s,h=$n(e.Value,""),d=p=>{if(p.key==="Tab"){p.stopPropagation(),p.preventDefault();const f=p.target,{value:x,selectionStart:b,selectionEnd:y}=f;return f.value=x.slice(0,b)+"	"+x.slice(y),f.selectionStart=f.selectionEnd=b+1,!1}},g=p=>{e.Value=p.target.value};return t`<div class="SNS NoteSticker" style=${qi(r)}
        onPointerDown=${l}
      >
        <div class="Header builtinDraggable"
          onPointerDown=${a} onPointerMove=${a}
          onPointerUp=${a} onPointerCancel=${a}
        />
        <textarea class="Editor" value=${h} tabindex=-1
          onKeyDown=${d} onInput=${g}
        ></textarea>
      </div>`}},`
/**** "classical" Note Stickers ****/

  .SNS.NoteSticker {
    background:ivory;
    border:solid 1px darkgray;
    outline:none;
    font-family:'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size:14px; font-weight:normal; line-height:1.4; color:black;
  }

  .SNS.NoteSticker > .Header {
    display:block; position:absolute;
    left:0px; top:0px; right:0px; height:10px;
    margin:0px; padding:0px;
    background:#000000; opacity:0.3;
  }

  .SNS.NoteSticker > .Editor {
    display:block; position:absolute;
    left:0px; top:10px; right:0px; bottom:0px;
    margin:0px; padding:2px;
    background:none; border:none;

    background-color:inherit; background-image:inherit;
    font-family:inherit; font-size:inherit; font-weight:inherit;
    line-height:inherit; color:inherit;

    tab-size:10px; resize:none;
  }
  `);Y("basic Views","Placeholder","Placeholder",{Geometry:{x:20,y:20,Width:100,Height:80}},(r,e,t,n,i,o,u)=>{e.Renderer=function(s){const{builtinDragging:l}=s,{Width:a,Height:h}=e.Geometry;return t`<div class="SNS Placeholder builtinDraggable" style="
        line-height:${h}px;
      "
        onPointerDown=${l} onPointerMove=${l}
        onPointerUp=${l} onPointerCancel=${l}
      >${a}x${h}</div>`}},`
/**** simple Placeholders ****/

  .SNS.Placeholder {
    border:dotted 1px gray;
    text-align:center;
  }
  `);Y("basic Views","Title","Title",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"Title"},(r,e,t,n,i,o,u)=>{i(()=>{const s=st(e.Value,"");return t`<div class="SNS Title">${s}</div>`})},`
/**** Title Views ****/

  .SNS.Sticker > .SNS.Title {
    font-size:22px; font-weight:bold; line-height:32px;
  }
  `);Y("basic Views","Subtitle","Subtitle",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"Subtitle"},(r,e,t,n,i,o,u)=>{i(()=>{const s=st(e.Value,"");return t`<div class="SNS Subtitle">${s}</div>`})},`
/**** Subtitle Views ****/

  .SNS.Sticker > .SNS.Subtitle {
    font-size:18px; font-weight:bold; line-height:27px;
  }
  `);Y("basic Views","Label","Label",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"Label"},(r,e,t,n,i,o,u)=>{i(()=>{const s=st(e.Value,"");return t`<div class="SNS Label">${s}</div>`})},`
/**** Label Views ****/

  .SNS.Sticker > .SNS.Label {
    font-size:14px; font-weight:bold; line-height:21px;
  }
  `);Y("basic Views","Text","Text",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"Text"},(r,e,t,n,i,o,u)=>{i(()=>{const s=$n(e.Value,"");return t`<div class="SNS Text">${s}</div>`})},`
/**** Text Views ****/

  .SNS.Sticker > .SNS.Text {
    font-size:14px; font-weight:normal; line-height:21px;
  }
  `);Y("basic Views","FinePrint","FinePrint",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"FinePrint"},(r,e,t,n,i,o,u)=>{i(()=>{const s=$n(e.Value,"");return t`<div class="SNS FinePrint">${s}</div>`})},`
/**** FinePrint Views ****/

  .SNS.Sticker > .SNS.FinePrint {
    font-size:12px; font-weight:normal; line-height:18px;
  }
  `);Y("basic Views","HTML View","HTMLView",{Geometry:{x:20,y:20,Width:100,Height:80},Value:"<b><u>HTML View</u></b>",activeScript:`
  useBehavior('HTMLView')
//my.Value = 'HTML Markup'
`},(r,e,t,n,i,o,u)=>{e.Renderer=()=>t`<div class="SNS HTMLView"
      dangerouslySetInnerHTML=${{__html:$n(e.Value,"")}}
    />`});Y("basic Views","Image View","ImageView",{Geometry:{x:20,y:20,Width:90,Height:90},Value:"https://www.rozek.de/Bangle.js/Mandelbrot_240x240.png",activeScript:`
  useBehavior('ImageView')
//my.Value = 'Image URL'
`},(r,e,t,n,i,o,u)=>{e.Renderer=()=>t`<img class="SNS ImageView" src=${Rr(e.Value,"")}/>`},`
/**** Image View ****/

  .SNS.Sticker > .SNS.ImageView {
    object-fit:contain; object-position:center;
  }
  `);Y("basic Views","SVG View","SVGView",{Geometry:{x:20,y:20,Width:90,Height:90},activeScript:`
  useBehavior('SVGView')
//my.Value = 'SVG Document'
`},(r,e,t,n,i,o,u)=>{e.Renderer=()=>{const s="data:image/svg+xml;base64,"+btoa($n(e.Value,""));return t`<div class="SNS SVGView" src=${s}/>`}},`
/**** SVG View ****/

  .SNS.Sticker > .SNS.SVGView {
    object-fit:contain; object-position:center;
  }
  `);Y("basic Views","2D Canvas View","Canvas2DView");Y("basic Views","Web View","WebView",{Geometry:{x:20,y:20,Width:640,Height:480},minWidth:120,minHeight:80,Value:"https://www.rozek.de",activeScript:`
  useBehavior('WebView')
//my.Value = 'Document URL'
`},(r,e,t,n,i,o,u)=>{e.Renderer=()=>t`<iframe class="SNS WebView"
      src=${Rr(e.Value,"")}
    />`});Y("basic Views","Badge","Badge",{Geometry:{x:20,y:20,Width:30,Height:30},Value:1,ForegroundColor:"red",BackgroundColor:"white"},(r,e,t,n,i,o,u)=>{e.Renderer=()=>{const s=zr(e.Value)?""+e.Value:st(e.Value,""),l=Math.round(Math.min(e.Width,e.Height/2));return t`<div class="SNS Badge" style="
        border-color:${e.ForegroundColor}; border-radius:${l}px;
        line-height:${e.Height-4}px;
      ">${st(s,"")}</>`}},`
/**** Badge ****/

  .SNS.Sticker > .SNS.Badge {
    font-size:18px; font-weight:bold; text-align:center;
    border:solid 2px black;
  }
  `);Y("basic Views","Icon","Icon",{Geometry:{x:20,y:20,Width:24,Height:24},Value:null,activeScript:`
  useBehavior('Icon')
//my.Value = 'icon image url'
//onClick(() => ...)
`},(r,e,t,n,i,o,u)=>{function s(l){e.Enabling!=!1&&(e.Value=l.target.value,typeof e._onClick=="function"&&e._onClick(l))}e.Renderer=()=>{const l=Rr(e.Value,"/img/pencil.png"),a=Ea(e.Color,"black");return t`<div class="SNS Icon" style="
        -webkit-mask-image:url(${l}); mask-image:url(${l});
        background-color:${a};
      " disabled=${e.Enabling==!1} onClick=${s}
      />`}},`
/**** Icon ****/

  .SNS.Sticker > .SNS.Icon {
    -webkit-mask-size:contain;           mask-size:contain;
    -webkit-mask-position:center center; mask-position:center center;
  }
  `);Y("basic Views","horizontal Separator","horizontalSeparator",{Geometry:{x:20,y:20,Width:80,Height:10},minWidth:10},(r,e,t,n,i,o,u)=>{i(()=>t`<div class="SNS horizontalSeparator"></div>`)},`
/**** horizontal Separator ****/

  .SNS.horizontalSeparator {
    border:none; border-top:solid 1px black;
  }
  `);Y("basic Views","vertical Separator","verticalSeparator",{Geometry:{x:20,y:20,Width:10,Height:40},minHeight:10},(r,e,t,n,i,o,u)=>{i(()=>t`<div class="SNS verticalSeparator"></div>`)},`
/**** vertical Separator ****/

  .SNS.verticalSeparator {
    border:none; border-left:solid 1px black;
  }
  `);Y("basic Views","Tab","Tab");Y("basic Views","Icon Tab","IconTab");Y("native Controls","Button","Button",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"Button",activeScript:`
  useBehavior('Button')
//my.Value = 'Label'
//onClick(() => ...)
`},(r,e,t,n,i,o,u)=>{function s(l){if(e.Enabling==!1)return $e(l);typeof e._onClick=="function"&&e._onClick(l)}e.Renderer=()=>{const l=st(e.Label||e.Value,"");return t`<button class="SNS Button" style="
        line-height:${e.LineHeight||e.Height}px;
      " disabled=${e.Enabling==!1} onClick=${s}
      >${l}</>`}},`
/**** Button ****/

  .SNS.Sticker > .SNS.Button {
    border:solid 1px black; border-radius:4px;
    background:white;
    font-weight:bold; color:black;
    text-align.center;
  }
  `);Y("native Controls","Checkbox","Checkbox",{Geometry:{x:20,y:20,Width:20,Height:20},Value:null,activeScript:`
  useBehavior('Checkbox')
//my.Value = null/true/false
//onClick(() => ...)
`},(r,e,t,n,i,o,u)=>{function s(l){if(e.Enabling==!1)return $e(l);e.Value=l.target.checked,typeof e._onClick=="function"&&e._onClick(l)}e.Renderer=()=>{const l=Le(e.Value),a=l==!0,h=l==null;return t`<input type="checkbox" class="SNS Checkbox"
        checked=${a} indeterminate=${h}
        disabled=${e.Enabling==!1} onClick=${s}
      />`}});Y("native Controls","Radiobutton","Radiobutton",{Geometry:{x:20,y:20,Width:20,Height:20},Value:null,activeScript:`
  useBehavior('Radiobutton')
//my.Value = true/false
//onClick(() => ...)
`},(r,e,t,n,i,o,u)=>{function s(l){if(e.Enabling==!1)return $e(l);e.Value=l.target.checked,typeof e._onClick=="function"&&e._onClick(l)}e.Renderer=()=>{const l=Lf(e.Value,!1);return t`<input type="radio" class="SNS Radiobutton"
        checked=${l==!0}
        disabled=${e.Enabling==!1} onClick=${s}
      />`}});Y("native Controls","Gauge","Gauge",{Geometry:{x:20,y:20,Width:100,Height:20},Value:0,activeScript:`
  useBehavior('Gauge')
//my.Value      = 0
//my.Minimum    = 0
//my.lowerBound = 0
//my.Optimum    = undefined
//my.upperBound = 1
//my.Maximum    = 1
`},(r,e,t,n,i,o,u)=>{e.Renderer=()=>{const s=Yi(vn(e.Value)?parseFloat(e.Value):e.Value,0),l=Xt(e.Minimum),a=Xt(e.lowerBound),h=Xt(e.Optimum),d=Xt(e.upperBound),g=Xt(e.Maximum);return t`<meter class="SNS Gauge" value=${s}
        min=${l} low=${a} opt=${h}
        high=${d} max=${g}
      />`}});Y("native Controls","Progressbar","Progressbar",{Geometry:{x:20,y:20,Width:100,Height:10},Value:0,activeScript:`
  useBehavior('Progressbar')
//my.Value   = 0
//my.Maximum = 1
`},(r,e,t,n,i,o,u)=>{e.Renderer=()=>{const s=Yi(vn(e.Value)?parseFloat(e.Value):e.Value,0),l=Xt(e.Maximum);return t`<progress class="SNS Progressbar" value=${s} max=${l}/>`}});const Yf=/^\s*([+-]?(\d+([.]\d+)?|[.]\d+)([eE][+-]?\d+)?|\d*[.](?:\d*))(?:\s*:\s*([^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]+))?$/;Y("native Controls","Slider","Slider",{Geometry:{x:20,y:20,Width:100,Height:20},Value:null,activeScript:`
  useBehavior('Slider')
//my.Value     = 0
//my.Minimum   = undefined
//my.Stepping  = undefined
//my.Maximum   = undefined
//my.Hashmarks = [0:'zero',1,2]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow=0;function s(h){return Ct(h,Yf)||zr(h)}function l(h){if(e.Enabling==!1)return $e(h);e.Value=parseFloat(h.target.value),typeof e._onInput=="function"&&e._onInput(h)}function a(){r.rerender()}e.Renderer=()=>{let h=Yi(vn(e.Value)?parseFloat(e.Value):e.Value,0);const d=Xt(e.Minimum),g=Pr(e.Stepping,void 0,0),p=Xt(e.Maximum),f=St(e.Hashmarks,void 0,s);document.activeElement===e.View?h=e.ValueToShow:e.ValueToShow=h;let x="",b;return f!=null&&f.length>0&&(b=e.Id+"-Hashmarks",x=t`\n<datalist id=${b}>
          ${f.map(y=>{y=""+y;const P=y.replace(/:.*$/,"").trim(),W=y.replace(/^[^:]+:/,"").trim();return t`<option value=${P}>${W}</option>`})}
        </datalist>`),t`<input type="range" class="SNS Slider"
        value=${h} min=${d} max=${p} step=${g}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${a}
        list=${b}
      />${x}`}});Y("native Controls","Textline Input","TextlineInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('TextlineInput')
//my.Value         = ''
//my.Placeholder   = undefined
//my.readonly      = false
//my.minLength     = 0
//my.maxLength     = undefined
//my.Pattern       = '.*'
//my.SpellChecking = undefined
//my.Suggestions   = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return $e(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=st(e.Value,"");const h=Je(e.Placeholder),d=Le(e.readonly),g=ct(e.minLength),p=ct(e.maxLength),f=Je(e.Pattern),x=Le(e.SpellChecking),b=St(e.Suggestions,void 0,Dt);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let y="",P;return b!=null&&b.length>0&&(P=e.Id+"-Suggestions",y=t`<datalist id=${P}>
          ${b.map(W=>t`<option value=${W}></option>`)}
        </datalist>`),t`<input type="text" class="SNS TextlineInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${h}
        pattern=${f} spellcheck=${x}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${P}
      />${y}`}},`
/**** TextlineInput ****/

  .SNS.Sticker > .SNS.TextlineInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.TextlineInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);Y("native Controls","Password Input","PasswordInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('PasswordInput')
//my.Value       = ''
//my.Placeholder = undefined
//my.readonly    = false
//my.minLength   = 0
//my.maxLength   = undefined
//my.Pattern     = '.*'
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return $e(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=st(e.Value,"");const h=Je(e.Placeholder),d=Le(e.readonly),g=ct(e.minLength),p=ct(e.maxLength),f=Je(e.Pattern);return document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a,t`<input type="password" class="SNS PasswordInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${h}
        pattern=${f}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
      />`}},`
/**** PasswordInput ****/

  .SNS.Sticker > .SNS.PasswordInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.PasswordInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);Y("native Controls","Number Input","NumberInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('NumberInput')
//my.Value       = 0
//my.Placeholder = undefined
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = [0,...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow=0;function s(a){if(e.Enabling==!1)return $e(a);e.Value=parseFloat(a.target.value),typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=Yi(vn(e.Value)?parseFloat(e.Value):e.Value,0);const h=Je(e.Placeholder),d=Le(e.readonly),g=Xt(e.Minimum),p=Pr(e.Stepping,void 0,0),f=Xt(e.Maximum),x=St(e.Suggestions,void 0,zr);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let b="",y;return x!=null&&x.length>0&&(y=e.Id+"-Suggestions",b=t`<datalist id=${y}>
          ${x.map(P=>t`<option value=${P}></option>`)}
        </datalist>`),t`<input type="number" class="SNS NumberInput"
        value=${a} min=${g} max=${f} step=${p}
        readonly=${d} placeholder=${h}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${y}
      />${b}`}},`
/**** NumberInput ****/

  .SNS.Sticker > .SNS.NumberInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.NumberInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);Y("native Controls","Phone Number Input","PhoneNumberInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('PhoneNumberInput')
//my.Value         = ''
//my.Placeholder   = undefined
//my.readonly      = false
//my.minLength     = 0
//my.maxLength     = undefined
//my.Pattern       = '.*'
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return $e(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=Uf(e.Value,"");const h=Je(e.Placeholder),d=Le(e.readonly),g=ct(e.minLength),p=ct(e.maxLength),f=Je(e.Pattern),x=St(e.Suggestions,void 0,gc);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let b="",y;return x!=null&&x.length>0&&(y=e.Id+"-Suggestions",b=t`<datalist id=${y}>
          ${x.map(P=>t`<option value=${P}></option>`)}
        </datalist>`),t`<input type="tel" class="SNS PhoneNumberInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${h}
        pattern=${f}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${y}
      />${b}`}},`
/**** PhoneNumberInput ****/

  .SNS.Sticker > .SNS.PhoneNumberInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.PhoneNumberInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);Y("native Controls","EMail Address Input","EMailAddressInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('EMailAddressInput')
//my.Value       = ''
//my.Placeholder = undefined
//my.readonly    = false
//my.minLength   = 0
//my.maxLength   = undefined
//my.Pattern     = '.*'
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return $e(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=Af(e.Value,"");const h=Je(e.Placeholder),d=Le(e.readonly),g=ct(e.minLength),p=ct(e.maxLength),f=Je(e.Pattern),x=St(e.Suggestions,void 0,oc);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let b="",y;return x!=null&&x.length>0&&(y=e.Id+"-Suggestions",b=t`<datalist id=${y}>
          ${x.map(P=>t`<option value=${P}></option>`)}
        </datalist>`),t`<input type="email" class="SNS EMailAddressInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${h}
        pattern=${f}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${y}
      />${b}`}},`
/**** EMailAddressInput ****/

  .SNS.Sticker > .SNS.EMailAddressInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.EMailAddressInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);Y("native Controls","URL Input","URLInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('URLInput')
//my.Value       = ''
//my.Placeholder = undefined
//my.readonly    = false
//my.minLength   = 0
//my.maxLength   = undefined
//my.Pattern     = '.*'
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return $e(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=Rr(e.Value,"");const h=Je(e.Placeholder),d=Le(e.readonly),g=ct(e.minLength),p=ct(e.maxLength),f=Je(e.Pattern),x=St(e.Suggestions,void 0,Da);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let b="",y;return x!=null&&x.length>0&&(y=e.Id+"-Suggestions",b=t`<datalist id=${y}>
          ${x.map(P=>t`<option value=${P}></option>`)}
        </datalist>`),t`<input type="url" class="SNS URLInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${h}
        pattern=${f}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${y}
      />${b}`}},`
/**** URLInput ****/

  .SNS.Sticker > .SNS.URLInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.URLInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);const qf="\\d{2}:\\d{2}",ei=/\d{2}:\d{2}/;function Zf(r){return Ct(r,ei)}Y("native Controls","Time Input","TimeInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('TimeInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return $e(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=ot(e.Value,void 0,ei);const h=Le(e.readonly),d=ot(e.Minimum,void 0,ei),g=Pr(e.Stepping,void 0,0),p=ot(e.Maximum,void 0,ei),f=St(e.Suggestions,void 0,Zf);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let x="",b;return f!=null&&f.length>0&&(b=e.Id+"-Suggestions",x=t`<datalist id=${b}>
          ${f.map(y=>t`<option value=${y}></option>`)}
        </datalist>`),t`<input type="time" class="SNS TimeInput"
        value=${a} min=${d} max=${p} step=${g}
        readonly=${h} pattern=${qf}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${b}
      />${x}`}},`
/**** TimeInput ****/

  .SNS.Sticker > .SNS.TimeInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.TimeInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);const Jf="\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}",ti=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/;function Kf(r){return Ct(r,ti)}Y("native Controls","Date and Time Input","DateTimeInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('DateTimeInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return $e(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=ot(e.Value,void 0,ti);const h=Le(e.readonly),d=ot(e.Minimum,void 0,ti),g=Pr(e.Stepping,void 0,0),p=ot(e.Maximum,void 0,ti),f=St(e.Suggestions,void 0,Kf);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let x="",b;return f!=null&&f.length>0&&(b=e.Id+"-Suggestions",x=t`<datalist id=${b}>
          ${f.map(y=>t`<option value=${y}></option>`)}
        </datalist>`),t`<input type="datetime-local" class="SNS DateTimeInput"
        value=${a} min=${d} max=${p} step=${g}
        readonly=${h} pattern=${Jf}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${b}
      />${x}`}},`
/**** DateTimeInput ****/

  .SNS.Sticker > .SNS.DateTimeInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.DateTimeInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);const Qf="\\d{4}-\\d{2}-\\d{2}",ri=/\d{4}-\d{2}-\d{2}/;function em(r){return Ct(r,ri)}Y("native Controls","Date Input","DateInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('DateInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return $e(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=ot(e.Value,void 0,ri);const h=Le(e.readonly),d=ot(e.Minimum,void 0,ri),g=Pr(e.Stepping,void 0,0),p=ot(e.Maximum,void 0,ri),f=St(e.Suggestions,void 0,em);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let x="",b;return f!=null&&f.length>0&&(b=e.Id+"-Suggestions",x=t`<datalist id=${b}>
          ${f.map(y=>t`<option value=${y}></option>`)}
        </datalist>`),t`<input type="date" class="SNS DateInput"
        value=${a} min=${d} max=${p} step=${g}
        readonly=${h} pattern=${Qf}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${b}
      />${x}`}},`
/**** DateInput ****/

  .SNS.Sticker > .SNS.DateInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.DateInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);const tm="\\d{4}-W\\d{2}",ni=/\d{4}-W\d{2}/;function rm(r){return Ct(r,ni)}Y("native Controls","Week Input","WeekInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('WeekInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return $e(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=ot(e.Value,void 0,ni);const h=Le(e.readonly),d=ot(e.Minimum,void 0,ni),g=Pr(e.Stepping,void 0,0),p=ot(e.Maximum,void 0,ni),f=St(e.Suggestions,void 0,rm);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let x="",b;return f!=null&&f.length>0&&(b=e.Id+"-Suggestions",x=t`<datalist id=${b}>
          ${f.map(y=>t`<option value=${y}></option>`)}
        </datalist>`),t`<input type="week" class="SNS WeekInput"
        value=${a} min=${d} max=${p} step=${g}
        readonly=${h} pattern=${tm}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${b}
      />${x}`}},`
/**** WeekInput ****/

  .SNS.Sticker > .SNS.WeekInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.WeekInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);const nm="\\d{4}-\\d{2}",ii=/\d{4}-\d{2}/;function im(r){return Ct(r,ii)}Y("native Controls","Month Input","MonthInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('MonthInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return $e(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=ot(e.Value,void 0,ii);const h=Le(e.readonly),d=ot(e.Minimum,void 0,ii),g=Pr(e.Stepping,void 0,0),p=ot(e.Maximum,void 0,ii),f=St(e.Suggestions,void 0,im);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let x="",b;return f!=null&&f.length>0&&(b=e.Id+"-Suggestions",x=t`<datalist id=${b}>
          ${f.map(y=>t`<option value=${y}></option>`)}
        </datalist>`),t`<input type="month" class="SNS MonthInput"
        value=${a} min=${d} max=${p} step=${g}
        readonly=${h} pattern=${nm}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${b}
      />${x}`}},`
/**** MonthInput ****/

  .SNS.Sticker > .SNS.MonthInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.MonthInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);Y("native Controls","File Input","FileInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('FileInput')
//my.Value           = ''
//my.Placeholder     = undefined
//my.acceptableTypes = undefined
//my.multiple        = false
//onInput(() => ...)
//onDrop(() => ...)
`},(r,e,t,n,i,o,u)=>{function s(d){if(e.Enabling==!1)return $e(d);e.Value=d.target.value,typeof e._onInput=="function"&&e._onInput(d,d.files)}function l(d){return $e(d)}function a(d){return $e(d)}function h(d){Ua(d),e.Enabling!=!1&&(e.Value=d.target.value,typeof e._onDrop=="function"&&e._onDrop(d,d.dataTransfer.files))}e.Renderer=()=>{let d=st(e.Value,"").trim();d=d.replace("C:\\fakepath\\","");const g=st(e.Placeholder,"").trim(),p=Je(e.acceptableTypes),f=Le(e.multiple);return t`<label class="SNS FileInput"
        onDragEnter=${l} onDragOver=${a} onDrop=${h}
      >
        <input type="file" style="display:none"
          multiple=${f} accept=${p}
          onInput=${s}
        />
        ${d===""?g===""?"":t`<span style="line-height:${e.Height}px">${g}</span>`:t`<span style="line-height:${e.Height}px">${d}</span>`}
      </label>`}},`
/**** FileInput ****/

  .SNS.Sticker > .SNS.FileInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }
  .SNS.Sticker > .SNS.FileInput > span {
    display:block; position:absolute; overflow:hidden;
    left:0px; top:0px; width:100%; height:100%;
    padding:0px 2px 0px 2px; white-space:pre; text-overflow:ellipsis;
  }
  `);Y("native Controls","Pseudo File Input","PseudoFileInput",{Geometry:{x:20,y:20,Width:24,Height:24},Value:null,activeScript:`
  useBehavior('PseudoFileInput')
//my.Value           = ''
//my.Icon            = 'icon image url'
//my.acceptableTypes = undefined
//my.multiple        = false
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{function s(l){if(e.Enabling==!1)return $e(l);e.Value=l.target.value,typeof e._onInput=="function"&&e._onInput(l,l.files)}e.Renderer=()=>{const l=Rr(e.Icon,"/img/arrow-up-from-bracket.png"),a=Ea(e.Color,"black"),h=Je(e.acceptableTypes),d=Le(e.multiple);return t`<label class="SNS PseudoFileInput">
        <div style="
          -webkit-mask-image:url(${l}); mask-image:url(${l});
          background-color:${a};
        "></div>
        <input type="file" style="display:none"
          multiple=${d} accept=${h}
          onInput=${s}
        />
      </label>`}},`
/**** PseudoFileInput ****/

  .SNS.Sticker > .SNS.PseudoFileInput > div {
    display:block; position:absolute;
    left:0px; top:0px; right:0px; bottom:0px;
    -webkit-mask-size:contain;           mask-size:contain;
    -webkit-mask-position:center center; mask-position:center center;
  }
  `);Y("native Controls","File Drop Area","FileDropArea",{Geometry:{x:20,y:20,Width:100,Height:80},Value:null,activeScript:`
  useBehavior('FileDropArea')
//my.Value           = ''
//my.Placeholder     = undefined
//my.acceptableTypes = undefined
//my.multiple        = false
//onInput(() => ...)
//onDrop(() => ...)
`},(r,e,t,n,i,o,u)=>{function s(d){if(e.Enabling==!1)return $e(d);e.Value=d.target.value,typeof e._onInput=="function"&&e._onInput(d,d.files)}function l(d){return $e(d)}function a(d){return $e(d)}function h(d){Ua(d),e.Enabling!=!1&&(e.Value=d.target.value,typeof e._onDrop=="function"&&e._onDrop(d,d.dataTransfer.files))}e.Renderer=()=>{const d=st(e.Placeholder,"").trim(),g=Je(e.acceptableTypes),p=Le(e.multiple);return t`<label class="SNS FileDropArea"
        onDragEnter=${l} onDragOver=${a} onDrop=${h}>
        <input type="file"
          multiple=${p} accept=${g}
          onInput=${s}
        />
        <span>${d}</span>
      </label>`}},`
/**** FileDropArea ****/

  .SNS.Sticker > .SNS.FileDropArea {
    display:flex; flex-flow:column nowrap;
      justify-content:center; align-items:center;
    border:dashed 4px #DDDDDD; border-radius:4px;
    color:#DDDDDD; background:white;
  }

  .SNS.Sticker > .SNS.FileDropArea * { pointer-events:none }

  .SNS.Sticker > .SNS.FileDropArea > input[type="file"] {
    display:block; position:absolute; appearance:none;
    left:0px; top:0px; right:0px; bottom:0px;
    opacity:0.01;
  }
  `);Y("native Controls","Search Input","SearchInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('SearchInput')
//my.Value         = ''
//my.Placeholder   = undefined
//my.readonly      = false
//my.minLength     = 0
//my.maxLength     = undefined
//my.Pattern       = '.*'
//my.SpellChecking = undefined
//my.Suggestions   = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return $e(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=st(e.Value,"");const h=Je(e.Placeholder),d=Le(e.readonly),g=ct(e.minLength),p=ct(e.maxLength),f=Je(e.Pattern),x=Le(e.SpellChecking),b=St(e.Suggestions,void 0,Dt);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let y="",P;return b!=null&&b.length>0&&(P=e.Id+"-Suggestions",y=t`<datalist id=${P}>
          ${b.map(W=>t`<option value=${W}></option>`)}
        </datalist>`),t`<input type="search" class="SNS SearchInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${h}
        pattern=${f} spellcheck=${x}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${P}
      />${y}`}},`
/**** SearchInput ****/

  .SNS.Sticker > .SNS.SearchInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.SearchInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);Y("native Controls","Color Input","ColorInput",{Geometry:{x:20,y:20,Width:40,Height:30},Value:null,activeScript:`
  useBehavior('ColorInput')
//my.Value       = ''
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return $e(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=Ef(e.Value);const h=St(e.Suggestions,void 0,ji);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let d="",g;return h!=null&&h.length>0&&(g=e.Id+"-Suggestions",d=t`<datalist id=${g}>
          ${h.map(p=>t`<option value=${p}></option>`)}
        </datalist>`),t`<input type="color" class="SNS ColorInput"
        value=${a}
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        list=${g}
      />${d}`}},`
/**** ColorInput ****/

  .SNS.Sticker > .SNS.ColorInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }
  `);Y("native Controls","DropDown","DropDown",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('DropDown')
//my.Value   = '...'
//my.Options = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return $e(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=st(e.Value,"");const h=Pc(e.Options,[],Dt);return document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a,t`<select class="SNS DropDown"
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
      >${h.map(d=>{const g=d.replace(/:.*$/,"").trim(),p=d.replace(/^[^:]+:/,"").trim();return t`<option value=${g} selected=${g===a}>
            ${p}
          </option>`})}</select>`}},`
/**** DropDown ****/

  .SNS.Sticker > .SNS.DropDown {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.SearchInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);Y("native Controls","Pseudo DropDown","PseudoDropDown",{Geometry:{x:20,y:20,Width:24,Height:24},Value:null,activeScript:`
  useBehavior('PseudoDropDown')
//my.Value   = '...'
//my.Icon    = 'icon image url'
//my.Options = ['...',...]
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return $e(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=st(e.Value,"");const h=Rr(e.Icon,"/img/menu.png"),d=Ea(e.Color,"black"),g=Pc(e.Options,[],Dt);return document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a,t`<div class="SNS PseudoDropDown">
        <div style="
          -webkit-mask-image:url(${h}); mask-image:url(${h});
          background-color:${d};
        "></div>
        <select disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}>
          ${g.map(p=>{const f=p.replace(/:.*\$/,"").trim(),x=p.replace(/^[^:]+:/,"").trim();return t`<option value=${f} selected=${f===a}>
              ${x}
            </option>`})}
        </select>
      </div>`}},`
/**** PseudoDropDown ****/

  .SNS.Sticker > .SNS.PseudoDropDown > div {
    display:block; position:absolute;
    left:0px; top:0px; right:0px; bottom:0px;
    -webkit-mask-size:contain;           mask-size:contain;
    -webkit-mask-position:center center; mask-position:center center;
  }

  .SNS.Sticker > .SNS.PseudoDropDown > select {
    display:block; position:absolute;
    left:0px; top:0px; right:0px; bottom:0px;
    opacity:0.01;
  }
  `);Y("native Controls","Text Input","TextInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('TextInput')
//my.Value         = ''
//my.Placeholder   = undefined
//my.readonly      = false
//my.minLength     = 0
//my.maxLength     = undefined
//my.LineWrapping  = false
//my.SpellChecking = undefined
//onInput(() => ...)
`},(r,e,t,n,i,o,u)=>{e.ValueToShow="";function s(a){if(e.Enabling==!1)return $e(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function l(){r.rerender()}e.Renderer=()=>{let a=st(e.Value,"");const h=Je(e.Placeholder),d=Le(e.readonly),g=ct(e.minLength),p=ct(e.maxLength),f=Le(e.LineWrapping),x=Le(e.SpellChecking);return document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a,t`<textarea class="SNS TextInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${h}
        spellcheck=${x} style="resize:none; ${f==!0?"white-space:pre; overflow-wrap:break-word; hyphens:auto":void 0}"
        disabled=${e.Enabling==!1} onInput=${s} onBlur=${l}
        value=${a}
      />`}},`
/**** TextInput ****/

  .SNS.Sticker > .SNS.TextInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.TextInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);Y("basic Shapes","Line","Line");Y("basic Shapes","Polyline","Polyline");Y("basic Shapes","Arc","Arc");Y("basic Shapes","quadratic Bezier","quadraticBezier");Y("basic Shapes","cubic Bezier","cubicBezier");Y("basic Shapes","Box","Box");Y("basic Shapes","rounded Box","roundedBox");Y("basic Shapes","Oval","Oval");Y("basic Shapes","Chord","Chord");Y("basic Shapes","Pie","Pie");Y("basic Shapes","Polygon","Polygon");Y("basic Shapes","regular Polygon","regularPolygon");Y("straight Arrows","nw","straightArrow_nw",{Geometry:{x:20,y:20,Width:40,Height:40}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}"
            d="M ${s},${l}, L 0,0"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);Y("straight Arrows","n","straightArrow_n",{Geometry:{x:20,y:20,Width:40,Height:40}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}"
            d="M ${s/2},${l}, L ${s/2},0"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);Y("straight Arrows","ne","straightArrow_ne",{Geometry:{x:20,y:20,Width:40,Height:40}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}"
            d="M 0,${l}, L ${s},0"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);Y("straight Arrows","e","straightArrow_e",{Geometry:{x:20,y:20,Width:40,Height:40}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}"
            d="M 0,${l/2}, L ${s},${l/2}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);Y("straight Arrows","se","straightArrow_se",{Geometry:{x:20,y:20,Width:40,Height:40}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}"
            d="M 0,0, L ${s},${l}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);Y("straight Arrows","s","straightArrow_s",{Geometry:{x:20,y:20,Width:40,Height:40}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}"
            d="M ${s/2},0, L ${s/2},${l}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);Y("straight Arrows","sw","straightArrow_sw",{Geometry:{x:20,y:20,Width:40,Height:40}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}"
            d="M ${s},0, L 0,${l}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);Y("straight Arrows","w","straightArrow_w",{Geometry:{x:20,y:20,Width:40,Height:40}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}"
            d="M ${s},${l/2}, L 0,${l/2}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);Y("curved Arrows","cw n","curvedArrow_cw_n",{Geometry:{x:20,y:20,Width:50,Height:60}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}" fill="none"
            d="M ${s},${l-6}, A ${s-6} ${l-18} 0 0 1 6 12"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);Y("curved Arrows","cw e","curvedArrow_cw_e",{Geometry:{x:20,y:20,Width:60,Height:50}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}" fill="none"
            d="M 6,${l}, A ${s-18} ${l-6} 0 0 1 ${s-12} 6"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);Y("curved Arrows","cw s","curvedArrow_cw_s",{Geometry:{x:20,y:20,Width:50,Height:60}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}" fill="none"
            d="M 0,6, A ${s-6} ${l-18} 0 0 1 ${s-6} ${l-12}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);Y("curved Arrows","cw w","curvedArrow_cw_w",{Geometry:{x:20,y:20,Width:60,Height:50}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}" fill="none"
            d="M ${s-6},0, A ${s-18} ${l-6} 0 0 1 12 ${l-6}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);Y("curved Arrows","ccw n","curvedArrow_ccw_n",{Geometry:{x:20,y:20,Width:50,Height:60}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}" fill="none"
            d="M 0,${l-6}, A ${s-6} ${l-18} 0 0 0 ${s-6} 12"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);Y("curved Arrows","ccw e","curvedArrow_ccw_e",{Geometry:{x:20,y:20,Width:60,Height:50}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}" fill="none"
            d="M 6,0, A ${s-18} ${l-6} 0 0 0 ${s-12} ${l-6}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);Y("curved Arrows","ccw s","curvedArrow_ccw_s",{Geometry:{x:20,y:20,Width:50,Height:60}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}" fill="none"
            d="M ${s},6, A ${s-6} ${l-18} 0 0 0 6 ${l-12}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);Y("curved Arrows","ccw w","curvedArrow_ccw_w",{Geometry:{x:20,y:20,Width:60,Height:50}},(r,e,t,n,i,o,u)=>{e.Renderer=function(){const{Width:s,Height:l}=e.Geometry,a=e.ForegroundColor||"black",h=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${s}" height="${l}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${a}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${a}" fill="none"
            d="M ${s-6},${l}, A ${s-18} ${l-8} 0 0 0 12 6"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(h);return t`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);Y("complex Controls","flat List View","FlatListView");Y("complex Controls","nested List View","NestedListView");Y("complex Controls","QR-Code View","QRCodeView");function qi(r){yf("visual",r);let e=[];const{BackgroundColor:t,BackgroundTexture:n,ForegroundColor:i,FontFamily:o,FontSize:u,FontWeight:s,FontStyle:l,LineHeight:a}=r;return t!=null&&e.push(`background-color:${t}`),n!=null&&e.push(`background-image:${n}; background-repeat:repeat`),i!=null&&e.push(`color:${i}`),o!=null&&e.push(`font-family:${o}`),u!=null&&e.push(`font-size:${u}px`),s!=null&&e.push(`font-weight:${s}`),l!=null&&e.push(`font-style:${l}`),a!=null&&e.push(`line-height:${a}px`),e.join(";")}function Ua(r){r.stopPropagation(),r.preventDefault()}const $e=Ua;let Ma=class{constructor(e,t){pe(this,"_Id"),pe(this,"_Name"),pe(this,"_Project"),pe(this,"_Folder"),pe(this,"_BackgroundColor"),pe(this,"_BackgroundTexture"),pe(this,"_FontFamily"),pe(this,"_FontSize"),pe(this,"_FontWeight"),pe(this,"_FontStyle"),pe(this,"_LineHeight"),pe(this,"_ForegroundColor"),pe(this,"_Value",null),pe(this,"_observed"),pe(this,"_unobserved"),pe(this,"_activeScript"),pe(this,"_pendingScript"),pe(this,"_ScriptError"),pe(this,"_Renderer"),pe(this,"_View"),pe(this,"_onMount"),pe(this,"_onUnmount"),pe(this,"_Error"),this._Project=e,this._Id=t||Mf()}get Id(){return this._Id}set Id(e){_e("Id")}get Name(){return this._Name}set Name(e){If("visual name",e),e!=null&&(e=e.trim(),e===""&&(e=void 0)),this._Name!==e&&(this._Name=e,this._reportChange("configure",this,"Name",e),this.rerender())}get Project(){return this._Project}set Project(e){_e("Project")}get Folder(){return this._Folder}set Folder(e){_e("Folder")}get isAttached(){return this._Folder==null?zi(this):this._Folder.isAttached}set isAttached(e){_e("isAttached")}get BackgroundColor(){return this._BackgroundColor==null?this._Folder==null?void 0:this._Folder.BackgroundColor:this._BackgroundColor}set BackgroundColor(e){Ws("visual background color",e),this._BackgroundColor!==e&&(this._BackgroundColor=e,this._reportChange("configure",this,"BackgroundColor",e),this.rerender())}get BackgroundTexture(){return this._BackgroundTexture==null?this._Folder==null?void 0:this._Folder.BackgroundTexture:this._BackgroundTexture}set BackgroundTexture(e){sc("visual background texture",e),this._BackgroundTexture!==e&&(this._BackgroundTexture=e,this._reportChange("configure",this,"BackgroundTexture",e),this.rerender())}get FontFamily(){return this._FontFamily==null?this._Folder==null?void 0:this._Folder.FontFamily:this._FontFamily}set FontFamily(e){Xg("visual font family",e),this._FontFamily!==e&&(this._FontFamily=e,this._reportChange("configure",this,"FontFamily",e),this.rerender())}get FontSize(){return this._FontSize==null?this._Folder==null?void 0:this._Folder.FontSize:this._FontSize}set FontSize(e){Ts("visual font size",e),this._FontSize!==e&&(this._FontSize=e,this._reportChange("configure",this,"FontSize",e),this.rerender())}get FontWeight(){return this._FontWeight==null?this._Folder==null?void 0:this._Folder.FontWeight:this._FontWeight}set FontWeight(e){Ug("visual font weight",e,1,1e3),this._FontWeight!==e&&(this._FontWeight=e,this._reportChange("configure",this,"FontWeight",e),this.rerender())}get FontStyle(){return this._FontStyle==null?this._Folder==null?void 0:this._Folder.FontStyle:this._FontStyle}set FontStyle(e){jg("visual font style",e,bf),this._FontStyle!==e&&(this._FontStyle=e,this._reportChange("configure",this,"FontStyle",e),this.rerender())}get LineHeight(){return this._LineHeight==null?this._Folder==null?void 0:this._Folder.LineHeight:this._LineHeight}set LineHeight(e){Ts("visual line height",e),this._LineHeight!==e&&(this._LineHeight=e,this._reportChange("configure",this,"LineHeight",e),this.rerender())}get ForegroundColor(){return this._ForegroundColor==null?this._Folder==null?void 0:this._Folder.ForegroundColor:this._ForegroundColor}set ForegroundColor(e){Ws("visual foreground color",e),this._ForegroundColor!==e&&(this._ForegroundColor=e,this._reportChange("configure",this,"ForegroundColor",e),this.rerender())}get Color(){return this.ForegroundColor}set Color(e){this.ForegroundColor=e}get Value(){return this._Value}set Value(e){ln(this._Value,e)&&(this._Value=e,this._reportChange("configure",this,"Value",e),this.rerender())}get editableValue(){return this._Value==null?"":""+this._Value}set editableValue(e){this.Value=e}get observed(){return this._observed==null&&(this._observed=Sf({})),this._observed}set observed(e){_e("observed")}get unobserved(){return this._unobserved==null&&(this._unobserved={}),this._unobserved}set unobserved(e){_e("unobserved")}get Script(){return this._pendingScript==null?this._activeScript:this._pendingScript}set Script(e){_e("Script")}get activeScript(){return this._activeScript}set activeScript(e){Ds("visual script",e),e===""&&(e=void 0),this._activeScript!==e&&(this._activeScript=e,this._reportChange("configure",this,"activeScript",e),this.rerender())}get pendingScript(){return this._pendingScript}set pendingScript(e){Ds("visual script",e),this._pendingScript!==e&&(this._pendingScript=e,this._reportChange("configure",this,"pendingScript",e),this.rerender())}activateScript(){let e=(this._activeScript||"").trim();if(this.Error=void 0,this._Renderer=void 0,Aa(this),e!=null){let t;try{t=new Function("me,my, html,reactively, onRender,onMount,onUnmount, useBehavior",e)}catch(s){console.error("visual script compilation failure",s),this.Error={Type:"Script Compilation Failure",Message:""+s,Cause:s};return}const n=s=>{sn("reactive function",s),Cc(this,fc(s))},i=this.onRender.bind(this),o=this.onMount.bind(this),u=this.onUnmount.bind(this);try{t.call(this,this,this,Gi,n,i,o,u,Rf.bind(this))}catch(s){console.error("visual script execution failure",s),this.Error={Type:"Script Execution Failure",Message:""+s,Cause:s};return}}this.rerender()}get ScriptError(){return this._ScriptError==null?void 0:{...this._ScriptError}}set ScriptError(e){Os("script error setting",e),ln(this._ScriptError,e)&&(this._ScriptError=e,this._reportChange("configure",this,"ScriptError",e),this.rerender())}get Renderer(){return this._Renderer}set Renderer(e){Kn("visual renderer",e),this._Renderer!==e&&(this._Renderer=e,this.rerender())}onRender(e){this.Renderer=e}Rendering(e){return""}rerender(e,t){}get View(){return this._View}set View(e){_e("View")}get isMounted(){return this._View!=null}set isMounted(e){_e("isMounted")}onMount(e){Kn('"onMount" callback',e),e==null?this._onMount=void 0:this._onMount=()=>{try{e.call(this)}catch(t){this.Error={Type:'"onMount" Callback Failure',Message:""+t,Cause:t},this.rerender()}}}onUnmount(e){Kn('"onUnmount" callback',e),e==null?this._onUnmount=void 0:this._onUnmount=()=>{try{e.call(this)}catch(t){this.Error={Type:'"onUnmount" Callback Failure',Message:""+t,Cause:t}}}}get Error(){return this._Error==null?void 0:{...this._Error}}set Error(e){Os("error setting",e),ln(this._Error,e)&&(this._Error=e,this._reportChange("configure",this,"Error",e),this.rerender())}get hasError(){return this._Error!=null}set hasError(e){_e("hasError")}_reportChange(e,...t){this._Project._reportChange(e,...t)}_serializeConfigurationInto(e){e.Id=this.Id;const t=n=>{this["_"+n]!=null&&(e[n]=this[n])};["Name","BackgroundColor","BackgroundTexture","FontFamily","FontSize","FontWeight","FontStyle","LineHeight","ForegroundColor","Value","activeScript","pendingScript"].forEach(n=>t(n))}_deserializeConfigurationFrom(e){const t=n=>{if(e[n]!=null)try{this[n]=e[n]}catch{console.warn("DeserializationError:invalid value for property "+Ir(n))}};t("activeScript"),["Name","BackgroundColor","BackgroundTexture","FontFamily","FontSize","FontWeight","FontStyle","LineHeight","ForegroundColor","Value","pendingScript"].forEach(n=>t(n))}},Xa=class extends Ma{constructor(e,t){super(e,t),pe(this,"_SnapToGrid"),pe(this,"_GridWidth"),pe(this,"_GridHeight"),pe(this,"_BoardList",[])}get Path(){const e=this._Folder;if(e==null)return"|";{const t=this.Name||"#"+this.Index,n=e.Path;return(n==="|"?"":n)+"|"+t}}set Path(e){_e("Path")}BoardAtPath(e){if(Oo("board path",e),e=e.trim(),e==="")return this._Folder==null?void 0:this;if(e.startsWith("|"))return this._Project.BoardAtPath(e.replace(/^(\s*\|)*/,""));e=e.replace(/\|+/g,"|");const t=e.split("|").map(i=>i.trim()).map(i=>/^#\d+$/.test(i)?parseInt(i.slice(1),10):i);let n;for(let i=0,o=t.length;i<o;i++){const u=t[i];if(typeof u=="number"?n=(n||this).BoardAt(u):n=(n||this).BoardNamed(u),n==null)return}return n}get IndexPath(){const e=this._Folder;return e==null?[]:e.IndexPath.concat(this.Index)}set IndexPath(e){_e("IndexPath")}get SnapToGrid(){return this._SnapToGrid?this._SnapToGrid==!0:this._Folder==null?!1:this._Folder.SnapToGrid}set SnapToGrid(e){Ag("snap-to-grid setting",e),this._SnapToGrid!==e&&(this._SnapToGrid=e,this._reportChange("configure",this,"SnapToGrid",e),this.rerender())}get GridWidth(){return this._GridWidth==null?this._Folder==null?Df:this._Folder.GridWidth:this._GridWidth}set GridWidth(e){Fs("snap-to-grid width",e),this._GridWidth!==e&&(this._GridWidth=e,this._reportChange("configure",this,"GridWidth",e),this.rerender())}get GridHeight(){return this._GridHeight==null?this._Folder==null?Wf:this._Folder.GridHeight:this._GridHeight}set GridHeight(e){Fs("snap-to-grid height",e),this._GridHeight!==e&&(this._GridHeight=e,this._reportChange("configure",this,"GridHeight",e),this.rerender())}get Index(){return this._Folder==null?-1:this._Folder.IndexOfBoard(this)}set Index(e){_e("Index")}get mayBeShiftedUp(){return this._Folder==null?!1:this._Folder.mayShiftBoardUp(this)}set mayBeShiftedUp(e){_e("mayBeShiftedUp")}get mayBeShiftedDown(){return this._Folder==null?!1:this._Folder.mayShiftBoardDown(this)}set mayBeShiftedDown(e){_e("mayBeShiftedDown")}get mayBeShiftedIn(){return this._Folder==null?!1:this._Folder.mayShiftBoardIn(this)}set mayBeShiftedIn(e){_e("mayBeShiftedIn")}get mayBeShiftedOut(){return this._Folder==null?!1:this._Folder.mayShiftBoardOut(this)}set mayBeShiftedOut(e){_e("mayBeShiftedOut")}containsFolder(e){for(vf("folder",e),e=e.Folder;e!=null;){if(e===this)return!0;e=e.Folder}return!1}get BoardList(){return this._BoardList.slice()}set BoardList(e){_e("BoardList")}get BoardCount(){return this._BoardList.length}set BoardCount(e){_e("BoardCount")}IndexOfBoard(e){const t=this.Board(e);return t==null?-1:this._BoardList.indexOf(t)}Board(e){switch(ac("board, name or index",e),!0){case yi(e):const t=e;return t._Folder===this?t:void 0;case Oi(e):let n=e;return n<0&&(n+=this._BoardList.length),this._BoardList[n];case Ri(e):return this.BoardNamed(e)}ft("InvalidArgument: no valid board, board name or board index given")}existingBoard(e){let t=this.Board(e);return t==null&&ft("BoardNotFound: the desired board could not be found"),t}BoardNamed(e){vi("SNS board name",e),e=e.trim().toLowerCase();let t;return this._BoardList.forEach(n=>{t==null&&n.Name!=null&&n.Name.toLowerCase()===e&&(t=n)}),t}BoardAt(e){return _r("SNS board index",e),e<0&&(e+=this._BoardList.length),this._BoardList[e]}hasBoard(e){return this.Board(e)!=null}newBoardAt(e,t){return t==null?this.BoardDeserializedAt({},e):this.BoardDeserializedAt({Id:t},e)}BoardDeserializedAt(e,t){La("board serialization",e),Jn("board insertionindex",t),t==null?t=this._BoardList.length:(t<0&&(t+=this._BoardList.length),t=Math.max(0,Math.min(t,this._BoardList.length)));const n=bc("board id",e.Id);let i=new Fc(this._Project,n);return this._attachBoardAt(i,t),i._deserializeConfigurationFrom(e),i._deserializeStickersFrom(e),i._deserializeBoardsFrom(e),this.rerender(),i}DuplicateOfBoardAt(e){_r("board index",e);const t=this.existingBoard(e).Serialization;return Ii(t),this.BoardDeserializedAt(t,e+1)}mayShiftBoardUp(e){const t=this.existingBoard(e);return this._BoardList.indexOf(t)>0}mayShiftBoardDown(e){const t=this.existingBoard(e),n=this._BoardList,i=n.indexOf(t);return i>=0&&i<n.length-1}shiftBoardToTop(e){const t=this.existingBoard(e);if(this.mayShiftBoardUp(t)){const n=this._BoardList.indexOf(t);this._detachBoardAt(n),this._attachBoardAt(t,0),this.rerender()}}shiftBoardUp(e){const t=this.existingBoard(e);if(this.mayShiftBoardUp(t)){const n=this._BoardList.indexOf(t);this._detachBoardAt(n),this._attachBoardAt(t,n-1),this.rerender()}}shiftBoardDown(e){const t=this.existingBoard(e);if(this.mayShiftBoardDown(t)){const n=this._BoardList.indexOf(t);this._detachBoardAt(n),this._attachBoardAt(t,n+1),this.rerender()}}shiftBoardToBottom(e){const t=this.existingBoard(e);if(this.mayShiftBoardDown(t)){const n=this._BoardList.indexOf(t);this._detachBoardAt(n),this._attachBoardAt(t,this._BoardList.length),this.rerender()}}shiftBoardTo(e,t){const n=this.existingBoard(e);_r("SNS board index",t),t<0&&(t+=this._BoardList.length),t=Math.max(0,Math.min(t,this._BoardList.length));const i=this._BoardList.indexOf(n);i!==t&&(this._detachBoardAt(i),this._attachBoardAt(n,t),this.rerender())}shiftBoardsByIndex(e,t,n){const i=this._BoardList.length;gn("old index",e,0,i),gn("new index",t,0,i);const o=this._BoardList.slice(e,e+n);o.forEach(u=>this._detachBoardAt(e)),t>e&&(t-=n),o.forEach((u,s)=>this._attachBoardAt(u,t+s)),this.rerender()}mayShiftBoardIn(e){const t=this.existingBoard(e);return this.mayShiftBoardDown(t)}mayShiftBoardOut(e){return this._Folder!=null}shiftBoardIn(e){const t=this.existingBoard(e);if(this.mayShiftBoardIn(t)){const n=this._BoardList.indexOf(t),i=this._BoardList[n+1];this._detachBoardAt(n),i._attachBoardAt(t,0),this.rerender(),i.rerender()}}shiftBoardOut(e){const t=this.existingBoard(e);if(this.mayShiftBoardOut(t)){const n=this._BoardList.indexOf(t),i=this._Folder;this._detachBoardAt(n),i._attachBoardAt(t,i.Index),this.rerender(),i.rerender()}}mayMoveBoardTo(e,t,n){const i=this.existingBoard(e),o=fn(t)?t:this.existingBoard(t);return Jn("insertion index",n),o.isAttached&&o!==i&&!i.containsFolder(o)}moveBoardTo(e,t,n){const i=this.existingBoard(e),o=fn(t)?t:this.existingBoard(t);if(Jn("insertion index",n),o.isAttached&&o!==i&&!i.containsFolder(o)){const u=this._BoardList.indexOf(i);let s=n??o.BoardCount;s<0&&(s+=o.BoardCount),s=Math.max(0,Math.min(s,o.BoardCount)),this._detachBoardAt(u),o._attachBoardAt(i,s),this.rerender(),o.rerender()}}destroyBoard(e){const t=this.Board(e);if(t==null){yi(e)&&ft("NoSuchBoard: the given board could not be found");return}t.clear(),Aa(t);const n=this._BoardList.indexOf(t);this._detachBoardAt(n),Hf(t),t._Project=void 0,this._reportChange("destroyBoard",t),this.rerender()}clear(){for(let e=0,t=this._BoardList.length;e<t;e++)this.destroyBoard(this._BoardList[0])}Rendering(e){if(this.hasError)return wi.call(this);let t=this._Renderer;if(t==null)return"";try{return t.call(this,e)}catch(n){return this.Error={Type:"Rendering Failure",Message:""+n,Cause:n},wi.call(this)}}_attachBoardAt(e,t){e._Folder=this,this._BoardList.splice(t,0,e),this._reportChange("attachBoard",e,this,t)}_detachBoardAt(e){const t=this._BoardList.splice(e,1)[0];t._Folder=void 0,this._reportChange("detachBoard",t,this,e)}_serializeConfigurationInto(e){super._serializeConfigurationInto(e);const t=n=>{this["_"+n]!=null&&(e[n]=this[n])};["SnapToGrid","GridWidth","GridHeight"].forEach(n=>t(n))}_deserializeConfigurationFrom(e){super._deserializeConfigurationFrom(e);const t=n=>{if(e[n]!=null)try{this[n]=e[n]}catch{console.warn("DeserializationError:invalid value for property "+Ir(n))}};["SnapToGrid","GridWidth","GridHeight"].forEach(n=>t(n))}_serializeBoardsInto(e){const t=this._BoardList.slice();t.length>0&&(e.BoardList=t.map(n=>n.Serialization))}_deserializeBoardsFrom(e){this._BoardList.length>0&&this.clear(),kn(e.BoardList,wn)&&e.BoardList.length>0&&e.BoardList.forEach((t,n)=>{this.BoardDeserializedAt(t,n)})}};const om=Object.create(null);["Name","BackgroundColor","BackgroundTexture","FontFamily","FontSize","FontWeight","FontStyle","LineHeight","ForegroundColor","Value","activeScript","pendingScript","SnapToGrid","GridWidth","GridHeight"].forEach(r=>om[r]=!0);let Vc=class Nc extends Xa{constructor(e){super(void 0,void 0),pe(this,"_onChange",[]),pe(this,"_onRender",[]),pe(this,"_onError",[]),this._Project=this,vi("project name",e),this._Name=e}get Name(){return this._Name}set Name(e){_e("Name")}get IndexPath(){return[]}set IndexPath(e){_e("IndexPath")}BoardAtIndexPath(e){if(Og("board index path",e,Na),e.length!==0){let t;for(let n=0,i=e.length;n<i;n++)if(t=(t||this).BoardAt(e[n]),t==null)return;return t}}FolderWithId(e){return Ms("folder id",e),js(this,e)}BoardWithId(e){const t=js(this,e);return zi(t)&&ft("NotABoard: the folder with the given id is not a board, but the project"),t}StickerWithId(e){return Ms("sticker id",e),Gf(this,e)}recursivelyActivateAllScripts(){this.activateScript(),this._BoardList.forEach(e=>e.recursivelyActivateAllScripts())}onChange(e){sn('"onChange" callback',e),this._onChange.push(e)}_reportChange(e,t,...n){e==="configure"&&(e=fn(t)?"configureFolder":"configureSticker"),n.unshift(this,e,t),this._onChange.forEach(i=>i.apply(this,n))}onRender(e){sn('"onRender" callback',e),this._onRender.push(e)}rerender(e,t){this._onRender.forEach(n=>n(this,e,t))}onError(e){sn('"onError" callback',e),this._onError.push(e)}showError(e,t){this._onError.forEach(n=>n(this,e,t))}get Serialization(){const e={};return this._serializeConfigurationInto(e),this._serializeBoardsInto(e),delete e.Id,e}set Serialization(e){_e("Serialization")}static deserializedFrom(e,t){vi("project name",e);const n=new Nc(e);return delete t.Name,n._Name=e,n._deserializeConfigurationFrom(t),n._deserializeBoardsFrom(t),n}};const Tc=Object.create(null);["Name","BackgroundColor","BackgroundTexture","FontFamily","FontSize","FontWeight","FontStyle","LineHeight","ForegroundColor","Value","activeScript","pendingScript","SnapToGrid","GridWidth","GridHeight"].forEach(r=>Tc[r]=!0);let Fc=class extends Xa{constructor(e,t){super(e,t),pe(this,"_StickerList",[]),Xf(e,this),e._reportChange("createBoard",this)}get StickerList(){return this._StickerList.slice()}set StickerList(e){_e("StickerList")}get StickerCount(){return this._StickerList.length}set StickerCount(e){_e("StickerCount")}IndexOfSticker(e){return Sc("SNS sticker to search for",e),this._StickerList.indexOf(e)}Sticker(e){switch(ac("sticker, name or index",e),!0){case yr(e):const t=e;return t.Board===this?t:void 0;case Oi(e):const n=e;return this._StickerList[n];case Ri(e):return this.StickerNamed(e)}ft("InvalidArgument: no valid sticker, sticker name or sticker index given")}existingSticker(e){let t=this.Sticker(e);return t==null&&ft("StickerNotFound: the desired sticker could not be found"),t}StickerNamed(e){vi("SNS sticker name",e),e=e.trim().toLowerCase();let t;return this._StickerList.forEach(n=>{t==null&&n.Name!=null&&n.Name.toLowerCase()===e&&(t=n)}),t}StickerAt(e){return _r("SNS sticker index",e),e<0&&(e+=this._StickerList.length),this._StickerList[e]}hasSticker(e){return this.Sticker(e)!=null}newStickerAt(e,t){return t==null?this.StickerDeserializedAt({},e):this.StickerDeserializedAt({Id:t},e)}StickerDeserializedAt(e,t){La("sticker serialization",e),Jn("SNS sticker index",t),t==null?t=this._StickerList.length:(t<0&&(t+=this._StickerList.length),t=Math.max(0,Math.min(t,this._StickerList.length)));const n=bc("sticker id",e.Id);let i=new Dc(this.Project,n);return this._attachStickerAt(i,t),i._deserializeConfigurationFrom(e),this.rerender(),i}DuplicateOfStickerAt(e){_r("SNS sticker index",e);const t=this.existingSticker(e).Serialization;return Ii(t),this.StickerDeserializedAt(t,e+1)}mayShiftStickerUp(e){const t=this.existingSticker(e);return this._StickerList.indexOf(t)>0}mayShiftStickerDown(e){const t=this.existingSticker(e),n=this._StickerList,i=n.indexOf(t);return i>=0&&i<n.length-1}shiftStickerToTop(e){const t=this.existingSticker(e);if(this.mayShiftStickerUp(t)){const n=this._StickerList.indexOf(t);this._detachStickerAt(n),this._attachStickerAt(t,0),this.rerender()}}shiftStickerUp(e){const t=this.existingSticker(e);if(this.mayShiftStickerUp(t)){const n=this._StickerList.indexOf(t);this._detachStickerAt(n),this._attachStickerAt(t,n-1),this.rerender()}}shiftStickerDown(e){const t=this.existingSticker(e);if(this.mayShiftStickerDown(t)){const n=this._StickerList.indexOf(t);this._detachStickerAt(n),this._attachStickerAt(t,n+1),this.rerender()}}shiftStickerToBottom(e){const t=this.existingSticker(e);if(this.mayShiftStickerDown(t)){const n=this._StickerList.indexOf(t);this._detachStickerAt(n),this._attachStickerAt(t,this._StickerList.length),this.rerender()}}shiftStickerTo(e,t){const n=this.existingSticker(e);_r("SNS sticker index",t),t<0&&(t+=this._StickerList.length),t=Math.max(0,Math.min(t,this._StickerList.length-1));const i=this._StickerList.indexOf(n);i!==t&&(this._detachStickerAt(i),this._attachStickerAt(n,t),this.rerender())}shiftStickersByIndex(e,t,n){const i=this._StickerList.length;gn("old index",e,0,i),gn("new index",t,0,i);const o=this._StickerList.slice(e,e+n);o.forEach(u=>this._detachStickerAt(e)),t>e&&(t-=n),o.forEach((u,s)=>this._attachStickerAt(u,t+s)),this.rerender()}destroySticker(e){const t=this.Sticker(e);if(t==null){yr(e)&&ft("NoSuchSticker: the given sticker could not be found");return}Aa(t);const n=this._StickerList.indexOf(t);this._detachStickerAt(n),jf(t),t._Project=void 0,this._reportChange("destroySticker",t),this.rerender()}clear(){super.clear();for(let e=0,t=this._StickerList.length;e<t;e++)this.destroySticker(this._StickerList[0])}recursivelyActivateAllScripts(){this.activateScript(),this._BoardList.forEach(e=>e.recursivelyActivateAllScripts()),this._StickerList.forEach(e=>e.activateScript())}rerender(){this.Project.rerender(this)}_attachStickerAt(e,t){e._Folder=this,this._StickerList.splice(t,0,e),this._reportChange("attachSticker",e,this,t)}_detachStickerAt(e){const t=this._StickerList.splice(e,1)[0];t._Folder=void 0,this._reportChange("detachSticker",t,this,e)}get Serialization(){const e={};return this._serializeConfigurationInto(e),this._serializeBoardsInto(e),this._serializeStickersInto(e),e}set Serialization(e){_e("Serialization")}_serializeStickersInto(e){const t=this._StickerList.slice();t.length>0&&(e.StickerList=t.map(n=>n.Serialization))}_deserializeStickersFrom(e){this._StickerList.length>0&&this.clear(),kn(e.StickerList,wn)&&e.StickerList.length>0&&e.StickerList.forEach((t,n)=>{this.StickerDeserializedAt(t,n)})}};["Name","BackgroundColor","BackgroundTexture","FontFamily","FontSize","FontWeight","FontStyle","LineHeight","ForegroundColor","Value","activeScript","pendingScript","SnapToGrid","GridWidth","GridHeight"].forEach(r=>Tc[r]=!0);let Dc=class extends Ma{constructor(e,t){super(e,t),pe(this,"_minWidth"),pe(this,"_maxWidth",Nf),pe(this,"_minHeight"),pe(this,"_maxHeight",Ff),pe(this,"_Geometry",{...Lr}),pe(this,"_Lock",!1),pe(this,"_Visibility",!0),pe(this,"_Enabling",!0),Of(e,this),e._reportChange("createSticker",this)}get Board(){return this._Folder}set Board(e){_e("Board")}get BackgroundTexture(){return this._BackgroundTexture}set BackgroundTexture(e){sc("visual background texture",e),this._BackgroundTexture!==e&&(this._BackgroundTexture=e,this._reportChange("configure",this,"BackgroundTexture",e),this.rerender())}get Index(){return this._Folder.IndexOfSticker(this)}set Index(e){_e("Index")}get mayBeShiftedUp(){return this._Folder.mayShiftStickerUp(this)}set mayBeShiftedUp(e){_e("mayBeShiftedUp")}get mayBeShiftedDown(){return this._Folder.mayShiftStickerDown(this)}set mayBeShiftedDown(e){_e("mayBeShiftedDown")}get minWidth(){return this._minWidth==null?Vf:this._minWidth}set minWidth(e){Ln("minimal sticker width",e),this._minWidth!==e&&(this._minWidth=e,this._reportChange("configure",this,"minWidth",e),this._minWidth!=null&&this._maxWidth!=null&&this._maxWidth<this._minWidth&&(this._maxWidth=e,this._reportChange("configure",this,"maxWidth",this._minWidth)),this._minWidth!=null&&this._Geometry.Width<this._minWidth&&(this.Width=this._minWidth),this.rerender())}get maxWidth(){return this._maxWidth}set maxWidth(e){Ln("maximal sticker width",e),e!=null&&this._minWidth!=null&&(e=Math.max(this._minWidth,e)),this._maxWidth!==e&&(this._maxWidth=e,this._reportChange("configure",this,"maxWidth",this._maxWidth),this._maxWidth!=null&&this._Geometry.Width>this._maxWidth&&(this.Width=this._maxWidth),this.rerender())}get minHeight(){return this._minHeight==null?Tf:this._minHeight}set minHeight(e){Ln("minimal sticker height",e),this._minHeight!==e&&(this._minHeight=e,this._reportChange("configure",this,"minHeight",e),this._minHeight!=null&&this._maxHeight!=null&&this._maxHeight<this._minHeight&&(this._maxHeight=e,this._reportChange("configure",this,"maxHeight",this._minHeight)),this._minHeight!=null&&this._Geometry.Height<this._minHeight&&(this.Height=this._minHeight),this.rerender())}get maxHeight(){return this._maxHeight}set maxHeight(e){Ln("maximal sticker height",e),e!=null&&this._minHeight!=null&&(e=Math.max(this._minHeight,e)),this._maxHeight!==e&&(this._maxHeight=e,this._reportChange("configure",this,"maxHeight",this._maxHeight),this._maxHeight!=null&&this._Geometry.Height>this._maxHeight&&(this.Height=this._maxHeight),this.rerender())}get x(){return this._Geometry.x}set x(e){Xs("sticker x coordinate",e),this.Geometry={...this.Geometry,x:e}}get y(){return this._Geometry.y}set y(e){Xs("sticker y coordinate",e),this.Geometry={...this.Geometry,y:e}}get Width(){return this._Geometry.Width}set Width(e){Hs("sticker width",e),this.Geometry={...this.Geometry,Width:e}}get Height(){return this._Geometry.Height}set Height(e){Hs("sticker height",e),this.Geometry={...this.Geometry,Height:e}}get Position(){return{x:this._Geometry.x,y:this._Geometry.y}}set Position(e){Pf("visual position",e),this.Geometry={...this.Geometry,x:e.x,y:e.y}}get Size(){return{Width:this._Geometry.Width,Height:this._Geometry.Height}}set Size(e){Bf("visual size",e),this.Geometry={...this.Geometry,Width:e.Width,Height:e.Height}}get Geometry(){let{x:e,y:t,Width:n,Height:i}=this._Geometry;return this._minWidth!=null&&(n=Math.max(this._minWidth,n)),this._maxWidth!=null&&(n=Math.min(n,this._maxWidth)),this._minHeight!=null&&(i=Math.max(this._minHeight,i)),this._maxHeight!=null&&(i=Math.min(i,this._maxHeight)),{x:e,y:t,Width:n,Height:i}}set Geometry(e){Cf("visual geometry",e);let{x:t,y:n,Width:i,Height:o}=this._Geometry;(t!==e.x||i!==e.Width||n!==e.y||o!==e.Height)&&(this._Geometry={...e},this._reportChange("configure",this,"Geometry",{...e}),this.rerender())}get Lock(){return this._Lock}set Lock(e){xo("sticker lock",e),this._Lock!==e&&(this._Lock=e,this._reportChange("configure",this,"Lock",e),this.rerender())}lock(){this.Lock=!0}unlock(){this.Lock=!1}get isLocked(){return this._Lock}set isLocked(e){this.Lock=e}get Visibility(){return this._Visibility}set Visibility(e){xo("sticker visibility",e),this._Visibility!==e&&(this._Visibility=e,this._reportChange("configure",this,"Visibility",e),this.rerender())}show(){this.Visibility=!0}hide(){this.Visibility=!1}get isVisible(){return this._Visibility}set isVisible(e){this.Visibility=e}get Enabling(){return this._Enabling}set Enabling(e){xo("sticker enabling",e),this._Enabling!==e&&(this._Enabling=e,this._reportChange("configure",this,"Enabling",e),this.rerender())}enable(){this.Enabling=!0}disable(){this.Enabling=!1}get isEnabled(){return this._Enabling}set isEnabled(e){this.Enabling=e}Rendering(e){if(this.hasError)return wi.call(this);let t=this._Renderer||Bc;try{return t.call(this,e)}catch(n){return this.Error={Type:"Rendering Failure",Message:""+n,Cause:n},wi.call(this)}}rerender(){this._Project.rerender(this._Folder,this)}get Serialization(){const e={};return this._serializeConfigurationInto(e),e}set Serialization(e){_e("Serialization")}_serializeConfigurationInto(e){super._serializeConfigurationInto(e),e.Geometry={...this._Geometry},this._minWidth!=null&&(e.minWidth=this._minWidth),this._maxWidth!=null&&(e.maxWidth=this._maxWidth),this._minHeight!=null&&(e.minHeight=this._minHeight),this._maxHeight!=null&&(e.maxHeight=this._maxHeight),this.isLocked&&(e.Lock=!0),this.isVisible||(e.Visibility=!1),this.isEnabled||(e.Enabling=!1)}_deserializeConfigurationFrom(e){super._deserializeConfigurationFrom(e);let{x:t,y:n,Width:i,Height:o}=e.Geometry||Lr;lr(t)||(t=Lr.x),lr(n)||(n=Lr.y),dr(i)||(i=Lr.Width),dr(o)||(o=Lr.Height),this.Geometry={x:t,y:n,Width:i,Height:o},e.Lock!=null&&(this.Lock=e.Lock),e.Visibility!=null&&(this.Visibility=e.Visibility),e.Enabling!=null&&(this.Enabling=e.Enabling)}};window.SNS={throwError:ft,throwReadOnlyError:_e,SNS_Project:Vc};console.log("SNS is globally available now");document.dispatchEvent(new CustomEvent("SNS",{detail:window.SNS}));function am(r,e,t){switch(!0){case e==null:throw new Error('no "Position" given');case(typeof e.left!="number"&&!(e.left instanceof Number)):case(typeof e.top!="number"&&!(e.top instanceof Number)):throw new Error('invalid "Position" given')}switch(r){case null:case void 0:throw new Error("no coordinate system given");case"viewport":return{left:e.left,top:e.top};case"document":return{left:e.left+window.scrollX,top:e.top+window.scrollY};case"local":switch(!0){case t==null:throw new Error("no target element given");case t instanceof Element:var n=window.getComputedStyle(t),i=parseFloat(n.borderLeftWidth),o=parseFloat(n.borderTopWidth),u=t.getBoundingClientRect();return{left:e.left-u.left-i,top:e.top-u.top-o};default:throw new Error("invalid target element given")}default:throw new Error("invalid coordinate system given")}}function sm(r,e,t){switch(!0){case e==null:throw new Error('no "Position" given');case(typeof e.left!="number"&&!(e.left instanceof Number)):case(typeof e.top!="number"&&!(e.top instanceof Number)):throw new Error('invalid "Position" given')}switch(r){case null:case void 0:throw new Error("no coordinate system given");case"viewport":return{left:e.left-window.scrollX,top:e.top-window.scrollY};case"document":return{left:e.left,top:e.top};case"local":switch(!0){case t==null:throw new Error("no target element given");case t instanceof Element:var n=window.getComputedStyle(t),i=parseFloat(n.borderLeftWidth),o=parseFloat(n.borderTopWidth),u=t.getBoundingClientRect();return{left:e.left+window.scrollX-u.left-i,top:e.top+window.scrollY-u.top-o};default:throw new Error("invalid target element given")}default:throw new Error("invalid coordinate system given")}}function lm(r,e,t){switch(!0){case e==null:throw new Error('no "Position" given');case(typeof e.left!="number"&&!(e.left instanceof Number)):case(typeof e.top!="number"&&!(e.top instanceof Number)):throw new Error('invalid "Position" given')}var n,i,o;switch(!0){case t==null:throw new Error("no source element given");case t instanceof Element:var u=window.getComputedStyle(t),s=parseFloat(u.borderLeftWidth),l=parseFloat(u.borderTopWidth);n=t.getBoundingClientRect(),i=n.left+s,o=n.top+l;break;default:throw new Error("invalid source element given")}switch(r){case null:case void 0:throw new Error("no coordinate system given");case"viewport":return{left:e.left+i,top:e.top+o};case"document":return{left:e.left+i+window.scrollX,top:e.top+o+window.scrollY};case"local":return{left:e.left,top:e.top};default:throw new Error("invalid coordinate system given")}}var dm={fromViewportTo:am,fromDocumentTo:sm,fromLocalTo:lm};function ie(r,e){if(r==null)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)>=0)continue;t[n]=r[n]}return t}function wt(r){var e=/^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(r);if(e==null)throw new Error(r);var t=new Error(e[2]);throw t.name=e[1],t}function oi(r){return(typeof r=="number"||r instanceof Number)&&(r=r.valueOf(),isFinite(r)&&Math.round(r)===r&&r>=0)}function qo(r){return typeof r=="string"||r instanceof String}var um=/^\s*$/,cm=/^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function hm(r){return function(e,t){return(typeof e=="string"||e instanceof String)&&cm.test(e.valueOf())}(r)}function Ha(r){return typeof r=="function"}function vo(r){return r!=null&&typeof r=="object"&&Object.getPrototypeOf(r)===Object.prototype}var Pi=Array.isArray;function Zi(r,e,t,n){if(Pi(r))try{for(var i=0,o=r.length;i<o;i++)if(e(r[i])==0)return!1;return!(t!=null&&r.length<t||n!=null&&r.length>n)}catch{}return!1}var Oa=!0;function Ji(r,e,t){var n=function(o,u){return function(s,l,a,h,d){if(l==null){if(h)return l;wt("MissingArgument: no ".concat(qt(s)," given"))}else if(a(l))switch(!0){case l instanceof Boolean:case l instanceof Number:case l instanceof String:return l.valueOf();default:return l}else wt("InvalidArgument: the given ".concat(qt(s)," is no valid ").concat(qt(d)))}(o,u,r,e,t)},i=r.name;return i!=null&&/^ValueIs/.test(i)?function(o,u){if(o==null&&wt("MissingArgument: no function given"),typeof o!="function"&&wt("InvalidArgument: the given 1st Argument is not a JavaScript function"),u==null&&wt("MissingArgument: no desired name given"),typeof u=="string"||u instanceof String||wt("InvalidArgument: the given desired name is not a string"),o.name===u)return o;try{if(Object.defineProperty(o,"name",{value:u}),o.name===u)return o}catch{}return new Function("originalFunction","return function "+u+" () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}")(o)}(n,i.replace(/^ValueIs/,e?"allow":"expect")):n}var mr=Ji(oi,Oa,"ordinal number"),wo=Ji(hm,Oa,"single line of text"),pt=Ji(Ha,Oa,"JavaScript function"),zs=Ji(Ha,!1,"JavaScript function");function Rs(r,e){if(e==null&&wt("MissingArgument: no ".concat(qt(r)," given")),Pi(e))return e;wt("InvalidArgument: the given ".concat(qt(r)," is no JavaScript array"))}function ko(r,e,t,n,i,o){return e==null?e:pm(r,e,t,n,i,o)}var pm=function(r,e,t,n,i,o){if(e==null&&wt("MissingArgument: no ".concat(qt(r)," given")),Zi(e,t,i,o))return e;wt("InvalidArgument: the given ".concat(qt(r)," is ")+"either not a list or contains invalid elements")};function qt(r){return r.replace(/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g,function(e){return e==="\\"?"\\\\":e}).replace(/[\x00-\x1f\x7f-\x9f]/g,function(e){switch(e){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v";default:var t=e.charCodeAt(0).toString(16);return"\\x"+"00".slice(t.length)+t}})}function vt(r,e){return e===void 0&&(e='"'),e+function(t,n){return n===void 0&&(n='"'),t.replace(n==="'"?/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|'/g:/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|"/g,function(i){switch(i){case"'":return"\\'";case'"':return'\\"';case"\\":return"\\\\";default:return i}}).replace(/[\x00-\x1f\x7f-\x9f]/g,function(i){switch(i){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v";default:var o=i.charCodeAt(0).toString(16);return"\\x"+"00".slice(o.length)+o}})}(r,e)+e}var Ki,Fe,Wc,fr,Ys,Lc,Zo,ja,Jo,Ko,mn={},Ec=[],gm=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ga=Array.isArray;function rr(r,e){for(var t in e)r[t]=e[t];return r}function Ac(r){var e=r.parentNode;e&&e.removeChild(r)}function Uc(r,e,t){var n,i,o,u={};for(o in e)o=="key"?n=e[o]:o=="ref"?i=e[o]:u[o]=e[o];if(arguments.length>2&&(u.children=arguments.length>3?Ki.call(arguments,2):t),typeof r=="function"&&r.defaultProps!=null)for(o in r.defaultProps)u[o]===void 0&&(u[o]=r.defaultProps[o]);return ai(r,u,n,i,null)}function ai(r,e,t,n,i){var o={type:r,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i??++Wc,__i:-1,__u:0};return i==null&&Fe.vnode!=null&&Fe.vnode(o),o}function Qi(r){return r.children}function Pt(r,e){this.props=r,this.context=e}function wr(r,e){if(e==null)return r.__?wr(r.__,r.__i+1):null;for(var t;e<r.__k.length;e++)if((t=r.__k[e])!=null&&t.__e!=null)return t.__e;return typeof r.type=="function"?wr(r):null}function Mc(r){var e,t;if((r=r.__)!=null&&r.__c!=null){for(r.__e=r.__c.base=null,e=0;e<r.__k.length;e++)if((t=r.__k[e])!=null&&t.__e!=null){r.__e=r.__c.base=t.__e;break}return Mc(r)}}function qs(r){(!r.__d&&(r.__d=!0)&&fr.push(r)&&!Bi.__r++||Ys!==Fe.debounceRendering)&&((Ys=Fe.debounceRendering)||Lc)(Bi)}function Bi(){var r,e,t,n,i,o,u,s;for(fr.sort(Zo);r=fr.shift();)r.__d&&(e=fr.length,n=void 0,o=(i=(t=r).__v).__e,u=[],s=[],t.__P&&((n=rr({},i)).__v=i.__v+1,Fe.vnode&&Fe.vnode(n),za(t.__P,n,i,t.__n,t.__P.namespaceURI,32&i.__u?[o]:null,u,o??wr(i),!!(32&i.__u),s),n.__v=i.__v,n.__.__k[n.__i]=n,Oc(u,n,s),n.__e!=o&&Mc(n)),fr.length>e&&fr.sort(Zo));Bi.__r=0}function Xc(r,e,t,n,i,o,u,s,l,a,h){var d,g,p,f,x,b=n&&n.__k||Ec,y=e.length;for(t.__d=l,fm(t,e,b),l=t.__d,d=0;d<y;d++)(p=t.__k[d])!=null&&typeof p!="boolean"&&typeof p!="function"&&(g=p.__i===-1?mn:b[p.__i]||mn,p.__i=d,za(r,p,g,i,o,u,s,l,a,h),f=p.__e,p.ref&&g.ref!=p.ref&&(g.ref&&Ra(g.ref,null,p),h.push(p.ref,p.__c||f,p)),x==null&&f!=null&&(x=f),65536&p.__u||g.__k===p.__k?(l&&!l.isConnected&&(l=wr(g)),l=Hc(p,l,r)):typeof p.type=="function"&&p.__d!==void 0?l=p.__d:f&&(l=f.nextSibling),p.__d=void 0,p.__u&=-196609);t.__d=l,t.__e=x}function fm(r,e,t){var n,i,o,u,s,l=e.length,a=t.length,h=a,d=0;for(r.__k=[],n=0;n<l;n++)u=n+d,(i=r.__k[n]=(i=e[n])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?ai(null,i,null,null,null):Ga(i)?ai(Qi,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?ai(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null?(i.__=r,i.__b=r.__b+1,s=mm(i,t,u,h),i.__i=s,o=null,s!==-1&&(h--,(o=t[s])&&(o.__u|=131072)),o==null||o.__v===null?(s==-1&&d--,typeof i.type!="function"&&(i.__u|=65536)):s!==u&&(s===u+1?d++:s>u?h>l-u?d+=s-u:d--:s<u?s==u-1&&(d=s-u):d=0,s!==n+d&&(i.__u|=65536))):(o=t[u])&&o.key==null&&o.__e&&!(131072&o.__u)&&(o.__e==r.__d&&(r.__d=wr(o)),Qo(o,o,!1),t[u]=null,h--);if(h)for(n=0;n<a;n++)(o=t[n])!=null&&!(131072&o.__u)&&(o.__e==r.__d&&(r.__d=wr(o)),Qo(o,o))}function Hc(r,e,t){var n,i;if(typeof r.type=="function"){for(n=r.__k,i=0;n&&i<n.length;i++)n[i]&&(n[i].__=r,e=Hc(n[i],e,t));return e}r.__e!=e&&(t.insertBefore(r.__e,e||null),e=r.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function mm(r,e,t,n){var i=r.key,o=r.type,u=t-1,s=t+1,l=e[t];if(l===null||l&&i==l.key&&o===l.type&&!(131072&l.__u))return t;if(n>(l==null||131072&l.__u?0:1))for(;u>=0||s<e.length;){if(u>=0){if((l=e[u])&&!(131072&l.__u)&&i==l.key&&o===l.type)return u;u--}if(s<e.length){if((l=e[s])&&!(131072&l.__u)&&i==l.key&&o===l.type)return s;s++}}return-1}function Zs(r,e,t){e[0]==="-"?r.setProperty(e,t??""):r[e]=t==null?"":typeof t!="number"||gm.test(e)?t:t+"px"}function En(r,e,t,n,i){var o;e:if(e==="style")if(typeof t=="string")r.style.cssText=t;else{if(typeof n=="string"&&(r.style.cssText=n=""),n)for(e in n)t&&e in t||Zs(r.style,e,"");if(t)for(e in t)n&&t[e]===n[e]||Zs(r.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in r||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),r.l||(r.l={}),r.l[e+o]=t,t?n?t.u=n.u:(t.u=ja,r.addEventListener(e,o?Ko:Jo,o)):r.removeEventListener(e,o?Ko:Jo,o);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e in r)try{r[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?r.removeAttribute(e):r.setAttribute(e,t))}}function Js(r){return function(e){if(this.l){var t=this.l[e.type+r];if(e.t==null)e.t=ja++;else if(e.t<t.u)return;return t(Fe.event?Fe.event(e):e)}}}function za(r,e,t,n,i,o,u,s,l,a){var h,d,g,p,f,x,b,y,P,W,B,I,L,V,X,N=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),o=[s=e.__e=t.__e]),(h=Fe.__b)&&h(e);e:if(typeof N=="function")try{if(y=e.props,P=(h=N.contextType)&&n[h.__c],W=h?P?P.props.value:h.__:n,t.__c?b=(d=e.__c=t.__c).__=d.__E:("prototype"in N&&N.prototype.render?e.__c=d=new N(y,W):(e.__c=d=new Pt(y,W),d.constructor=N,d.render=xm),P&&P.sub(d),d.props=y,d.state||(d.state={}),d.context=W,d.__n=n,g=d.__d=!0,d.__h=[],d._sb=[]),d.__s==null&&(d.__s=d.state),N.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=rr({},d.__s)),rr(d.__s,N.getDerivedStateFromProps(y,d.__s))),p=d.props,f=d.state,d.__v=e,g)N.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(N.getDerivedStateFromProps==null&&y!==p&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(y,W),!d.__e&&(d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(y,d.__s,W)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(d.props=y,d.state=d.__s,d.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(j){j&&(j.__=e)}),B=0;B<d._sb.length;B++)d.__h.push(d._sb[B]);d._sb=[],d.__h.length&&u.push(d);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(y,d.__s,W),d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(p,f,x)})}if(d.context=W,d.props=y,d.__P=r,d.__e=!1,I=Fe.__r,L=0,"prototype"in N&&N.prototype.render){for(d.state=d.__s,d.__d=!1,I&&I(e),h=d.render(d.props,d.state,d.context),V=0;V<d._sb.length;V++)d.__h.push(d._sb[V]);d._sb=[]}else do d.__d=!1,I&&I(e),h=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++L<25);d.state=d.__s,d.getChildContext!=null&&(n=rr(rr({},n),d.getChildContext())),g||d.getSnapshotBeforeUpdate==null||(x=d.getSnapshotBeforeUpdate(p,f)),Xc(r,Ga(X=h!=null&&h.type===Qi&&h.key==null?h.props.children:h)?X:[X],e,t,n,i,o,u,s,l,a),d.base=e.__e,e.__u&=-161,d.__h.length&&u.push(d),b&&(d.__E=d.__=null)}catch(j){e.__v=null,l||o!=null?(e.__e=s,e.__u|=l?160:32,o[o.indexOf(s)]=null):(e.__e=t.__e,e.__k=t.__k),Fe.__e(j,e,t)}else o==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Sm(t.__e,e,t,n,i,o,u,l,a);(h=Fe.diffed)&&h(e)}function Oc(r,e,t){e.__d=void 0;for(var n=0;n<t.length;n++)Ra(t[n],t[++n],t[++n]);Fe.__c&&Fe.__c(e,r),r.some(function(i){try{r=i.__h,i.__h=[],r.some(function(o){o.call(i)})}catch(o){Fe.__e(o,i.__v)}})}function Sm(r,e,t,n,i,o,u,s,l){var a,h,d,g,p,f,x,b=t.props,y=e.props,P=e.type;if(P==="svg"?i="http://www.w3.org/2000/svg":P==="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),o!=null){for(a=0;a<o.length;a++)if((p=o[a])&&"setAttribute"in p==!!P&&(P?p.localName===P:p.nodeType===3)){r=p,o[a]=null;break}}if(r==null){if(P===null)return document.createTextNode(y);r=document.createElementNS(i,P,y.is&&y),o=null,s=!1}if(P===null)b===y||s&&r.data===y||(r.data=y);else{if(o=o&&Ki.call(r.childNodes),b=t.props||mn,!s&&o!=null)for(b={},a=0;a<r.attributes.length;a++)b[(p=r.attributes[a]).name]=p.value;for(a in b)if(p=b[a],a!="children"){if(a=="dangerouslySetInnerHTML")d=p;else if(a!=="key"&&!(a in y)){if(a=="value"&&"defaultValue"in y||a=="checked"&&"defaultChecked"in y)continue;En(r,a,null,p,i)}}for(a in y)p=y[a],a=="children"?g=p:a=="dangerouslySetInnerHTML"?h=p:a=="value"?f=p:a=="checked"?x=p:a==="key"||s&&typeof p!="function"||b[a]===p||En(r,a,p,b[a],i);if(h)s||d&&(h.__html===d.__html||h.__html===r.innerHTML)||(r.innerHTML=h.__html),e.__k=[];else if(d&&(r.innerHTML=""),Xc(r,Ga(g)?g:[g],e,t,n,P==="foreignObject"?"http://www.w3.org/1999/xhtml":i,o,u,o?o[0]:t.__k&&wr(t,0),s,l),o!=null)for(a=o.length;a--;)o[a]!=null&&Ac(o[a]);s||(a="value",f!==void 0&&(f!==r[a]||P==="progress"&&!f||P==="option"&&f!==b[a])&&En(r,a,f,b[a],i),a="checked",x!==void 0&&x!==r[a]&&En(r,a,x,b[a],i))}return r}function Ra(r,e,t){try{typeof r=="function"?r(e):r.current=e}catch(n){Fe.__e(n,t)}}function Qo(r,e,t){var n,i;if(Fe.unmount&&Fe.unmount(r),(n=r.ref)&&(n.current&&n.current!==r.__e||Ra(n,null,e)),(n=r.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){Fe.__e(o,e)}n.base=n.__P=null}if(n=r.__k)for(i=0;i<n.length;i++)n[i]&&Qo(n[i],e,t||typeof r.type!="function");t||r.__e==null||Ac(r.__e),r.__c=r.__=r.__e=r.__d=void 0}function xm(r,e,t){return this.constructor(r,t)}Ki=Ec.slice,Fe={__e:function(r,e,t,n){for(var i,o,u;e=e.__;)if((i=e.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(r)),u=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(r,n||{}),u=i.__d),u)return i.__E=i}catch(s){r=s}throw r}},Wc=0,Pt.prototype.setState=function(r,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=rr({},this.state),typeof r=="function"&&(r=r(rr({},t),this.props)),r&&rr(t,r),r!=null&&this.__v&&(e&&this._sb.push(e),qs(this))},Pt.prototype.forceUpdate=function(r){this.__v&&(this.__e=!0,r&&this.__h.push(r),qs(this))},Pt.prototype.render=Qi,fr=[],Lc=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Zo=function(r,e){return r.__v.__b-e.__v.__b},Bi.__r=0,ja=0,Jo=Js(!1),Ko=Js(!0);var jc=function(r,e,t,n){var i;e[0]=0;for(var o=1;o<e.length;o++){var u=e[o++],s=e[o]?(e[0]|=u?1:2,t[e[o++]]):e[++o];u===3?n[0]=s:u===4?n[1]=Object.assign(n[1]||{},s):u===5?(n[1]=n[1]||{})[e[++o]]=s:u===6?n[1][e[++o]]+=s+"":u?(i=r.apply(s,jc(r,s,t,["",null])),n.push(i),s[0]?e[0]|=2:(e[o-2]=0,e[o]=i)):n.push(s)}return n},Ks=new Map,D=(function(r){var e=Ks.get(this);return e||(e=new Map,Ks.set(this,e)),(e=jc(this,e.get(r)||(e.set(r,e=function(t){for(var n,i,o=1,u="",s="",l=[0],a=function(g){o===1&&(g||(u=u.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,g,u):o===3&&(g||u)?(l.push(3,g,u),o=2):o===2&&u==="..."&&g?l.push(4,g,0):o===2&&u&&!g?l.push(5,0,!0,u):o>=5&&((u||!g&&o===5)&&(l.push(o,0,u,i),o=6),g&&(l.push(o,g,0,i),o=6)),u=""},h=0;h<t.length;h++){h&&(o===1&&a(),a(h));for(var d=0;d<t[h].length;d++)n=t[h][d],o===1?n==="<"?(a(),l=[l],o=3):u+=n:o===4?u==="--"&&n===">"?(o=1,u=""):u=n+u[0]:s?n===s?s="":u+=n:n==='"'||n==="'"?s=n:n===">"?(a(),o=1):o&&(n==="="?(o=5,i=u,u=""):n==="/"&&(o<5||t[h][d+1]===">")?(a(),o===3&&(l=l[0]),o=l,(l=l[0]).push(2,0,o),o=0):n===" "||n==="	"||n===`
`||n==="\r"?(a(),o=2):u+=n),o===3&&u==="!--"&&(o=4,l=l[0])}return a(),l}(r)),e),arguments,[])).length>1?e:e[0]}).bind(Uc);const bm=["String","Number","Object","Array","Boolean","Date"];function $o(r){return r&&typeof r=="object"}function ea(r,e,t){Object.defineProperty(r,e,{value:t,enumerable:!1,configurable:!0})}function Qs(r,e,t){ea(r,"__key",e),ea(r,"__parent",t)}const Ya={computedStack:[],trackerSymbol:Symbol("tracker")};let Mr=null;const Ci=Symbol();function ta(){if(Mr){for(const r of Mr)r(),r[Ci]=!1;Mr=null}}function el(r,e){r[Ci]||(Mr===null&&(Mr=[],e===!0?queueMicrotask(ta):setTimeout(ta,e)),Mr.push(r))}const{computedStack:An,trackerSymbol:Io}=Ya,Po=Symbol("__observed"),zt=Symbol("modifiedProperty"),{computedStack:tl,trackerSymbol:_m}=Ya;var ym={observe:function r(e,t={}){const{props:n,ignore:i,batch:o,deep:u=!0,bubble:s,bind:l}=t;if(e[Po])return e;const a=f=>f!==Po&&(n==null||n instanceof Array&&n.includes(f))&&(i==null||i instanceof Array&&!i.includes(f));function h(f,x,b){if(x==="__handler")ea(f,"__handler",b);else if(a(x)){if(Array.isArray(f)&&x==="length"||function(y,P,W){const B=new Map;return function I(L,V,X){if(L===V)return!1;let N=typeof L;if(N!==typeof V)return!0;switch(N){case"undefined":case"boolean":case"string":case"function":default:return!0;case"number":return isNaN(L)!==isNaN(V)||Math.abs(L-V)>Number.EPSILON;case"object":return L==null||V==null||(X==="by-value"&&(L instanceof Boolean||L instanceof Number||L instanceof String)?L.valueOf()!==V.valueOf():Array.isArray(L)?function(j,J,ce){if(!Array.isArray(J)||j.length!==J.length)return!0;if(B.has(j)||B.has(J)){if(B.has(j)&&B.get(j).has(J)||B.has(J)&&B.get(J).has(j))return!1;B.has(j)||B.set(j,new Set),B.get(j).add(J)}for(let ge=0,Ge=j.length;ge<Ge;ge++)if(I(j[ge],J[ge],ce))return!0;return!1}(L,V,X):X==="by-reference"||function(j,J,ce="by-value"){if(Object.getPrototypeOf(j)!==Object.getPrototypeOf(J))return!0;for(let ge in j)if(!(ge in J))return!0;for(let ge in J)if(!(ge in j))return!0;if(B.has(j)||B.has(J)){if(B.has(j)&&B.get(j).has(J)||B.has(J)&&B.get(J).has(j))return!1;B.has(j)||B.set(j,new Set),B.get(j).add(J)}for(let ge in j)if(I(j[ge],J[ge],ce))return!0;return!1}(L,V,X))}return!0}(y,P,void 0)}(f[x],b)){const y=x!==zt&&u&&$o(b),P=f[x];f[x]=y?r(b,t):b,y&&s&&Qs(f[x],x,f);const W=[x];let B=f;for(;B&&(!B.__handler||B.__handler(W,b,P,g)!==!1);)B.__key&&B.__parent?(W.unshift(B.__key),B=B.__parent):B=null;const I=d.get(x);if(I)for(const L of I){const V=L[Io],X=V&&V.get(f),N=X&&X.has(x);L.__disposed||V&&!N?I.delete(L):L!==An[0]&&(o!==void 0&&o!==!1?(el(L,o),L[Ci]=!0):L())}if(x!==zt){f[zt]=x;const L=d.get(zt);if(L)for(const V of L){const X=V[Io],N=X&&X.get(f),j=N&&N.has(zt);V.__disposed||X&&!j?L.delete(V):V!==An[0]&&(o!==void 0&&o!==!1?(el(V,o),V[Ci]=!0):V())}}}}else f[x]=b}u&&Object.entries(e).forEach(function([f,x]){$o(x)&&a(f)&&(e[f]=r(x,t),s&&Qs(e[f],f,e))});const d=new Map,g=new Proxy(e,{get(f,x){if(x===Po)return!0;if(a(x)&&An.length){const b=An[0],y=b[Io];if(y){let W=y.get(e);W||(W=new Set,y.set(e,W)),W.add(x)}let P=d.get(x);P||(P=new Set,d.set(x,P)),P.add(b)}return e[x]},set:(f,x,b)=>(h(e,x,b),!0),defineProperty(f,x,b){if(x==="__handler")throw new Error("Don't track bubble handlers");if(!a(x))return Reflect.defineProperty(e,x,b);if(!Array.isArray(e)||x==="length"){"value"in b&&u&&$o(b.value)&&((b={...b}).value=r(b.value,t));const y=Reflect.defineProperty(e,x,b);return x!==zt&&(e[zt]=x),y}return!1},deleteProperty(f,x){if(x===zt)throw new Error('internal property Symbol("modifiedProperty") must not be deleted');return x in e&&h(e,x,void 0),Reflect.deleteProperty(f,x)}});var p;return l&&(p=e,Object.getOwnPropertyNames(p).concat(Object.getPrototypeOf(p)&&bm.indexOf(Object.getPrototypeOf(p).constructor.name)<0?Object.getOwnPropertyNames(Object.getPrototypeOf(p)):[]).filter(f=>f!=="constructor"&&typeof p[f]=="function")).forEach(f=>e[f]=e[f].bind(g)),g},modifiedProperty:zt,computed:function(r,{autoRun:e=!0,callback:t,bind:n,disableTracking:i=!1}={}){function o(l,a=[]){const h=t||s;i||(h[_m]=new WeakMap),tl.unshift(h),a=a.length>0?[...a,u]:[u];const d=l?l():n?r.apply(n,a):r(...a);return tl.shift(),d}const u={computeAsync:o},s=(...l)=>o(null,l);return e&&s(),s},dispose:function(r){return r[Ya.trackerSymbol]=null,r.__disposed=!0},batch:ta};const vm=["Id","Classes","Style","x","y","z","Width","Height","Title","closeable","View","WidgetList"],wm=["Id","Classes","Style","x","y","z","Width","Height","Title","closeable","minWidth","minHeight","maxWidth","maxHeight","View","WidgetList"],km=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","hidden","View","WidgetList"],$m=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","hidden","View","WidgetList"],Im=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],Pm=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],Bm=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],Cm=["Id","Type","Classes","Style","x","y","Width","Height","Value","View","WidgetList"],Vm=["Id","Type","Classes","Style","x","y","Width","Height","Value","View","WidgetList"],Nm=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","ImageScaling","ImageAlignment","WidgetList","View"],Tm=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","PermissionsPolicy","allowsFullscreen","SandboxPermissions","ReferrerPolicy","WidgetList","View"],Fm=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Color","disabled","onClick","View"],Dm=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Color","Options","disabled","onInput","View"],Wm=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],Lm=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],Em=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],Am=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],Um=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],Mm=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Hashmarks","View"],Xm=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Hm=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],Om=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],jm=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Gm=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],zm=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Rm=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Ym=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],qm=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Zm=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Jm=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Km=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Qm=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View","Placeholder","onDrop"],e0=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],t0=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Options","Placeholder","View"],r0=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],n0=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","onDrop","View","WidgetList"],i0=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","View","WidgetList"],o0=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Expansion","View","WidgetList"],a0=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View","WidgetList"],s0=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View","WidgetList"],l0=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View","WidgetList"],d0=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View","WidgetList"],u0=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","List","ItemRenderer","Placeholder","selectedIndices","SelectionLimit","onSelectionChange","onItemSelected","onItemDeselected","View","WidgetList"],c0=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","List","ItemRenderer","Placeholder","LabelOfItem","ContentListOfItem","selectedPaths","SelectionLimit","SelectionMode","onSelectionChange","onItemSelected","onItemDeselected","onItemDoubleClicked","expandedPaths","Indentation","onExpansionChange","onItemExpanded","onItemCollapsed","View","WidgetList"],h0=["Id","Type","Classes","Style","x","y","Width","Height","Substitute","Placeholder","View","WidgetList"];let rl,nl,il,ol,al,sl,ll,dl,ul,cl,hl,pl,gl,fl,ml,Sl,xl,bl,_l,yl,vl,wl,kl,$l,Il,Pl,Bl,Cl,Vl,Nl,Tl,Fl,Dl,Wl,Ll,El,Al,Ul,Ml,Xl,Hl,Ol,jl,Gl,zl,Rl,Yl,ql,Zl,Jl,Kl,Ql,ed,td,rd,nd,id,od,ad,sd,ld,dd,ud,cd,hd,pd,gd,fd,md,Sd,xd,bd,_d,yd,vd,wd,kd,$d,Id,Pd,Bd,Cd,Vd,Nd,Td,Fd,Dd,Wd,Ld,Ed,Ad,Ud,Md,Xd,Hd,Od,jd,Gd,zd,Rd,Yd,qd,Zd,Jd,Kd,Qd,eu,tu,ru,nu,iu,ou,au,su,F=r=>r;const{observe:p0,computed:Wt,dispose:KS}=ym,Bo=document.createElement("style");function At(r){let e=/^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(r);if(e==null)throw new Error(r);{let t=new Error(e[2]);throw t.name=e[1],t}}function Un(r){At("ReadOnlyProperty: property "+vt(r)+" must not be set")}Bo.setAttribute("id","ProtoUX"),Bo.innerHTML=`/*******************************************************************************
*                                                                              *
*                                ProtoUX (PUX)                                 *
*                                                                              *
*******************************************************************************/

  .PUX {
    display:block; position:absolute;
    margin:0px;
    background:none;
    border:none; border-radius:0px;
    box-shadow:none;
    padding:0px;
  }

  .PUX.Screen {
    background:white; color:black;
    font-family:'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-size:14px; font-weight:normal; line-height:1.4; color:black;
    text-align:left; text-shadow:none;
  }

  .textured { background-image:repeat }

  .vertically-centered {
    display:flex; align-items:center;
  }

  .disabled, [disabled] { opacity:0.3 }
  .readonly             { background:none }
  .no-pointer-events    { pointer-events:none }

  .scrollable   { overflow:scroll }
  .scrollable-x { overflow-x:scroll; overflow-y:hidden }
  .scrollable-y { overflow-x:hidden; overflow-y:scroll }

  .PUX.Box       { background-color:white }
  .PUX.Container {}
  .PUX.Group     {}

  .PUX.Title    { font-size:20px; font-weight:normal; padding:0px 0px 0px 0px; text-align:left }
  .PUX.Subtitle { font-size:16px; font-weight:normal; padding:0px 0px 0px 0px; text-align:left }
  .PUX.Label    { font-size:14px; font-weight:bold;   padding:4px 0px 0px 0px; text-align:left }
  .PUX.Textline { font-size:14px; font-weight:normal; padding:4px 0px 0px 0px; text-align:left }
  .PUX.Hint     { font-size:12px; font-weight:normal; padding:4px 0px 0px 0px; text-align:left }
  .PUX.Text     { font-size:14px; font-weight:normal; padding:2px 0px 0px 0px; text-align:justify }

  .PUX.HTMLView  {}
  .PUX.TextView  {}
  .PUX.ImageView { object-fit:contain; object-position:center center }
  .PUX.WebView   {}

  .PUX.Icon { width:24px; height:24px }

  .PUX.PseudoDropDown { width:24px; height:24px }
  .PUX.PseudoDropDown > select {
    display:block; position:absolute;
    left:0px; top:0px; right:0px; bottom:0px;
    opacity:0.01;
  }

  .PUX.Button > button, .PUX.Checkbox > input, .PUX.Radiobutton > input,
  .PUX.Gauge > meter, .PUX.Progressbar > progress, .PUX.Slider > input,
  .PUX.TextlineInput > input, .PUX.PasswordInput > input,
  .PUX.NumberInput > input, .PUX.PhoneNumberInput > input,
  .PUX.EMailAddressInput > input, .PUX.URLInput > input,
  .PUX.TimeInput > input, .PUX.DateTimeInput > input, .PUX.DateInput > input,
  .PUX.WeekInput > input, .PUX.MonthInput > input, .PUX.SearchInput > input,
  .PUX.ColorInput > input, .PUX.DropDown > select, .PUX.FileInput > input,
  .PUX.TextInput > textarea {
    left:0px; top:0px; width:100%; height:100%;
    margin:0px; padding:0px;
    background:transparent; color:inherit;
  }

  .PUX.TextlineInput > input, .PUX.PasswordInput > input,
  .PUX.NumberInput > input, .PUX.PhoneNumberInput > input,
  .PUX.EMailAddressInput > input, .PUX.URLInput > input,
  .PUX.TimeInput > input, .PUX.DateTimeInput > input, .PUX.DateInput > input,
  .PUX.WeekInput > input, .PUX.MonthInput > input, .PUX.SearchInput > input,
  .PUX.ColorInput > input, .PUX.DropDown > select, .PUX.FileInput > input,
  .PUX.TextInput > textarea {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff; padding:0px 2px 0px 2px;
  }

  .PUX.TextlineInput > input:read-only, .PUX.PasswordInput > input:read-only,
  .PUX.NumberInput > input:read-only, .PUX.PhoneNumberInput > input:read-only,
  .PUX.EMailAddressInput > input:read-only, .PUX.URLInput > input:read-only,
  .PUX.TimeInput > input:read-only, .PUX.DateTimeInput > input:read-only,
  .PUX.DateInput > input:read-only, .PUX.WeekInput > input:read-only,
  .PUX.MonthInput > input:read-only, .PUX.SearchInput > input:read-only,
  .PUX.ColorInput > input:read-only, .PUX.DropDown > select:read-only,
  .PUX.FileInput > input:read-only, .PUX.TextInput > textarea:read-only {
    background:transparent;
  }

  .PUX.Button > button {
    background:white;
    border:solid 1px black; border-radius:4px;
    background:transparent; color:inherit;
  }

  .PUX.FileInput {
    color:lightgray;
    border:solid 1px black; border-radius:3px;
  }
  .PUX.FileInput > span {
    display:flex; align-items:center; position:absolute; overflow:hidden;
    left:0px; top:0px; width:100%; height:100%;
    padding:0px 2px 0px 2px; text-overflow:ellipsis;
  }

  .PUX.TextInput > textarea { border:none; background:#e8f0ff; padding:2px }
  .PUX.TextInput.no-resize > textarea { resize:none }

  .PUX.horizontalSeparator {
    height:1px; margin:0px; margin-top:7px;
    border:none; border-top:solid 1px black
  }
  .PUX.verticalSeparator {
    width:1px; margin:0px; margin-left:7px;
    border:none; border-left:solid 1px black
  }

  .PUX.FileDropArea {/*
    display:flex; flex-flow:column nowrap;
      justify-content:center; align-items:center;*/
    border:dashed 4px #DDDDDD; border-radius:4px;
    color:#DDDDDD;
  }

  .PUX.FileDropArea * { pointer-events:none }

  .PUX.FileDropArea > input[type="file"] {
    display:block; position:absolute; appearance:none;
    left:0px; top:0px; right:0px; bottom:0px;
    opacity:0.01;
  }

  .PUX.Accordion {
    display:flex; flex-flow:column nowrap; align-items:stretch;
    overflow:auto;
  }

  .PUX.Fold {
    display:block; position:relative;
    left:0px; top:0px; width:100%; bottom:auto;
  }

  .PUX.Fold-Header {
    display:block; position:relative;
    width:100%; height:30px; background:#EEEEEE; border:none;
    border-top:   solid 1px #FFFFFF;
    border-bottom:solid 1px #AAAAAA;
  }

  .PUX.Fold-Expander {
    left:2px; top:2px; width:24px; height:24px;
  }

  .PUX.Fold-Title {
    left:30px; top:0px; bottom:0px; right:0px;
    font-size:14px; font-weight:bold; color:black; line-height:30px;
  }

  .PUX.Fold-Content {
    display:block; position:relative;
    left:0px; top:0px; width:100%; height:auto;
  }
  .PUX.Deck {}

  .PUX.Card {
    left:0px; top:0px; right:0px; bottom:0px; width:auto; height:auto;
    border:none;
  }
  .PUX.TabStrip {
    display:flex; flex-flow:row nowrap; align-items:stretch;
  }

  .PUX.Tab {
    display:block; position:relative;
    left:0px; top:0px; height:100%; width:auto;
    border:none; border-width:0px 0px 4px 0px;
  }
  .PUX.Tab.active { border-style:solid; border-color:black }

  .PUX.Tab > * { pointer-events:none }

  .PUX.FlatListView {
    display:flex; flex-flow:column nowrap; align-items:stretch;
    overflow:scroll; overflow-x:auto; overflow-y:scroll;
  }

  .PUX.FlatListView > div {
    display:block; position:relative; overflow:hidden; flex:0 0 auto;
    left:0px; top:0px; width:auto; height:22px; line-height:22px;
    background:none;
    border:none; border-bottom:solid 1px light-gray;
    white-space:nowrap; text-overflow:ellipsis;
    user-select:none;
  }

  .PUX.FlatListView > div:last-child {
    border:none; border-bottom:solid 1px transparent;
  }

  .PUX.FlatListView > div.selected {
    background:dodgerblue; color:white;
  }


  .PUX.NestedListView {
    display:flex; flex-flow:column nowrap; align-items:stretch;
    overflow:scroll; overflow-x:auto; overflow-y:scroll;
  }

  .PUX.NestedListView .ItemView {
    display:flex; flex-flow:column nowrap; align-items:stretch;
      position:relative; overflow:hidden; flex:0 0 auto;
    left:0px; top:0px; width:auto; height:auto;
    background:none; border:none;
    user-select:none;
  }

  .PUX.NestedListView .ItemLine {
    display:flex; flex-flow:row nowrap; align-items:stretch;
      position:relative; flex:0 0 auto;
    height:22px; line-height:22px;
    white-space:nowrap; text-overflow:ellipsis;
  }

  .PUX.NestedListView .ItemIcon {
    display:inline-block; position:relative;
    margin-top:6px; width:14px; height:10px;
    pointer-events:none;
  }

  .PUX.NestedListView .ItemExpander {
    display:inline-block; position:relative;
    margin-top:4px; width:14px; height:14px;
    pointer-events:auto;
  }

  .PUX.NestedListView .ItemLabel {
    display:inline-block; position:relative; flex:1 0 auto;
    pointer-events:none;
  }

  .PUX.NestedListView .ItemLine.selected > .ItemLabel {
    background:dodgerblue; color:white;
  }

  .PUX.ModalLayer {
    display:block; position:absolute;
    background:rgba(0,0,0,0.3); border:none;
  }


  .PUX.Dialog, .PUX.ResizableDialog {
    display:block; position:absolute;
    border:solid 1px #000000; border-radius:4px;
    background:white; color:black;
    box-shadow:0px 0px 10px 0px rgba(0,0,0,0.3);
  }

  .PUX.Dialog > .Titlebar, .PUX.ResizableDialog > .Titlebar {
    display:block; position:absolute; overflow:hidden;
    left:0px; top:0px; right:0px; height:30px;
    background:#EEEEEE; border:none; border-radius:3px 3px 0px 0px;
    user-select:none;
  }

  .PUX.Dialog > .Titlebar > .Title, .PUX.ResizableDialog > .Titlebar > .Title {
    display:block; position:absolute;
    left:6px; top:3px; right:30px; height:18px;
    border:none;
    font-weight:bold; color:black;
    user-select:none; pointer-events:none;
  }

  .PUX.Dialog > .Titlebar > .CloseButton, .PUX.ResizableDialog > .Titlebar > .CloseButton {
    display:block; position:absolute;
    top:0px; right:0px; width:30px; height:30px;
    border:none;
    user-select:none;
  }

  .PUX.ResizableDialog > .ContentPane {
    display:block; position:absolute;
    left:0px; top:0px; right:0px; bottom:9px;
    border:none;
  }

  .PUX.ResizableDialog > .leftResizer {
    display:block; position:absolute;
    left:0px; bottom:0px; width:30px; height:9px;
    border:none; border-top:solid 1px black; border-right:solid 1px black;
    border-radius:0px 0px 0px 3px;
    cursor:nesw-resize;
  }

  .PUX.ResizableDialog > .middleResizer {
    display:block; position:absolute;
    left:30px; bottom:0px; right:30px; height:9px;
    border:none; border-top:solid 1px black;
    border-radius:0px;
    cursor:ns-resize;
  }

  .PUX.ResizableDialog > .rightResizer {
    display:block; position:absolute;
    bottom:0px; right:0px; width:30px; height:9px;
    border:none; border-left:solid 1px black; border-top:solid 1px black;
    border-radius:0px 0px 3px 0px;
    cursor:nwse-resize;
  }



/**** centered ****/

  .centered {
    display:block; position:relative;
    width:100%; height:100%; max-height:240px;
  }

  .centered > * {
    display:block; position:absolute;
    left:50%; top:50%;
    transform:translate(-55%,-50%);
    white-space:nowrap;
  }

`,document.head.appendChild(Bo);const lu=new WeakMap;function Vi(r,e){let t,n=lu.get(r);if(n!=null)return n;function i(){}function o(W){W.stopImmediatePropagation(),W.preventDefault()}let u,s,{onlyFrom:l,neverFrom:a,Threshold:h=0,consumingEvent:d=!0,onDragStarted:g=i,onDragContinued:p=i,onDragFinished:f=i,onDragCancelled:x=i}=e,b="idle";function y(W){d&&o(W),b="busy";let{pageX:B,pageY:I}=W;g(Math.round(B),Math.round(I),Math.round(B-u),Math.round(I-s),W)}function P(W){if(d&&o(W),b!=="idle"){const B=b==="busy";b="idle",W.target.releasePointerCapture(W.pointerId),B&&x(Math.round(u),Math.round(s),0,0,W)}t=void 0}return n=function(W){switch(W.type){case"pointerdown":return function(B){B.isPrimary&&(l!=null&&(l instanceof HTMLElement&&l!==B.target||typeof l=="string"&&!B.target.matches(l))||a!=null&&(a instanceof HTMLElement&&a===B.target||typeof a=="string"&&B.target.matches(a))||(B.button===0?(B.target.setPointerCapture(B.pointerId),t=B.target,b==="idle"&&({pageX:u,pageY:s}=B,h>0?b="observing":y(B))):P(B)))}(W);case"pointermove":return function(B){if(b!=="idle"&&B.target!==t&&(B.target.setPointerCapture(B.pointerId),t=B.target,console.log("PointerTarget changed")),b==="observing"){let{pageX:I,pageY:L}=B;(u-I)**2+(s-L)**2>=h**2&&y(B)}else b==="busy"&&function(I){d&&o(I);let{pageX:L,pageY:V}=I;p(Math.round(L),Math.round(V),Math.round(L-u),Math.round(V-s),I)}(B)}(W);case"pointerup":return function(B){b==="busy"?function(I){d&&o(I),b="idle";let{pageX:L,pageY:V}=I;f(Math.round(L),Math.round(V),Math.round(L-u),Math.round(V-s),I),t=void 0}(B):P(B)}(W);case"pointercancel":return function(B){P(B)}(W)}},n.abortDragging=P,lu.set(r,n),n}const du=new WeakMap;function ra(r,e){let t,n=du.get(r);if(n!=null)return n;function i(){}function o(X){X.stopImmediatePropagation(),X.preventDefault()}let u,s,{onlyFrom:l,neverFrom:a,Threshold:h=0,consumingEvent:d=!0,onDragStarted:g=i,onDragContinued:p=i,onDragFinished:f=i,onDragCancelled:x=i,onClicked:b=i,MultiClickTimeSpan:y=300,onMultiClick:P=i}=e,W="idle",B=0,I=0;function L(X){d&&o(X),W="busy";let{pageX:N,pageY:j}=X;g(Math.round(N),Math.round(j),Math.round(N-u),Math.round(j-s),X)}function V(X){if(d&&o(X),W!=="idle"){const N=W==="busy";W="idle",X.target.releasePointerCapture(X.pointerId),N&&x(Math.round(u),Math.round(s),0,0,X)}t=void 0}return n=function(X){switch(X.type){case"pointerdown":return function(N){N.isPrimary&&(l!=null&&(l instanceof HTMLElement&&l!==N.target||typeof l=="string"&&!N.target.matches(l))||a!=null&&(a instanceof HTMLElement&&a===N.target||typeof a=="string"&&N.target.matches(a))||(N.button===0?(N.target.setPointerCapture(N.pointerId),t=N.target,W==="idle"&&({pageX:u,pageY:s}=N,h>0?W="observing":L(N))):V(N)))}(X);case"pointermove":return function(N){if(W!=="idle"&&N.target!==t&&(N.target.setPointerCapture(N.pointerId),t=N.target,console.log("PointerTarget changed")),W==="busy"&&function(j){d&&o(j);let{pageX:J,pageY:ce}=j;p(Math.round(J),Math.round(ce),Math.round(J-u),Math.round(ce-s),j)}(N),W==="observing"){let{pageX:j,pageY:J}=N;(u-j)**2+(s-J)**2>=h**2&&L(N)}}(X);case"pointerup":return function(N){if(W==="busy"&&function(j){d&&o(j),W="idle";let{pageX:J,pageY:ce}=j;f(Math.round(J),Math.round(ce),Math.round(J-u),Math.round(ce-s),j),t=void 0}(N),W==="observing"){W="idle",b(u,s,N);let j=Date.now();j-B<y?(I+=1,I>1&&P(I,u,s,N)):I=1,B=j}}(X);case"pointercancel":return function(N){V(N)}(X)}},n.abortDragging=V,du.set(r,n),n}class ne{constructor(e="PUX"){this._IdPrefix=void 0,this._ImageFolder="",this._ScreenSet={},this._DialogSet={},this._observed=p0({},{deep:!1}),this._UpdaterList=[],this._StartScreen={},this._openScreen={},this._openDialogs=[],this._View=void 0,this._IdPrefix=e}get ImageFolder(){return this._ImageFolder}set ImageFolder(e){(e=e.trim())===""||e.endsWith("/")||(e+="/"),this._ImageFolder=e}get Style(){const e=document.getElementById(this._IdPrefix+"-Style");return e==null?"":e.innerHTML}set Style(e){const t=this._IdPrefix+"-Style";let n=this._ImageFolder;n!==""&&(e=e.replace(/url\("\/images\//g,'url("'+n));let i=document.getElementById(t);i==null&&(i=document.createElement("style"),i.setAttribute("id",t),document.head.appendChild(i)),i.innerHTML=e}get ScreenSet(){return this._ScreenSet}set ScreenSet(e){this._ScreenSet=e;for(let t in e){this._StartScreen=e[t];break}for(let t in e)Object.assign(e[t],{dX:0,dY:0,dW:0,dH:0})}get observed(){return this._observed}set observed(e){Un("observed")}ScreenNamed(e){return this._ScreenSet[e]}existingScreenNamed(e){const t=this._ScreenSet[e];return t==null&&At("NoSuchScreen: a screen named "+vt(e)+" does not exist"),t}packScreen(e,t=10,n){n==null&&(n=t);const i=this.existingScreenNamed(e);if(i.packedGeometry==null)return;let{x:o,y:u,Width:s,Height:l}=i.packedGeometry;o-=t,s+=2*t,u-=n,l+=2*n,i.Width=s,i.Height=l,i.WidgetList.forEach(a=>{a.hidden||(a.x-=o,a.y-=u)})}openScreen(e){const t=this.existingScreenNamed(e);this._openScreen!==t&&(this._openScreen=t,this.rerender())}closeScreen(e){const t=this.ScreenNamed(e);t!=null&&this._openScreen===t&&(this._openScreen=this._StartScreen,this.rerender())}ScreenIsOpen(e){const t=this.existingScreenNamed(e);return this._openScreen===t}startWithScreen(e){this._StartScreen=this.existingScreenNamed(e),this.openScreen(e)}get StartScreen(){return this._StartScreen}set StartScreen(e){Un("StartScreen")}extractAllDialogs(){for(let t in this._ScreenSet){const n=this._ScreenSet[t].WidgetList;for(let i=n.length-1;i>=0;i--){const o=n[i];if(o.Type==="Dialog"||o.Type==="ResizableDialog"){if(!(typeof(e=o.Name)=="string"||e instanceof String)||um.test(e.valueOf())){console.error('Dialog without name in screen "'+t+'"');continue}if(o.Name in this._DialogSet){console.error('a dialog with name "'+o.Name+'" has already been registered');continue}this._DialogSet[o.Name]=o,n.splice(i,1)}}}var e}DialogNamed(e){return this._DialogSet[e]}existingDialogNamed(e){const t=this._DialogSet[e];return t==null&&At("NoSuchDialog: a dialog named "+vt(e)+" does not exist"),t}openDialog(e){const t=this.existingDialogNamed(e),n=this._openDialogs.indexOf(t);if(n>=0){if(n===this._openDialogs.length-1)return;this._openDialogs.splice(n,1)}this._openDialogs.push(t),this.rerender(),typeof t.onOpen=="function"&&t.onOpen(t)}closeDialog(e){let t=this.DialogNamed(e);if(t==null)return;const n=this._openDialogs.indexOf(t);n<0||(this._openDialogs.splice(n,1),this.rerender(),typeof t.onClose=="function"&&t.onClose(t))}DialogIsOpen(e){let t=this.existingDialogNamed(e);return this._openDialogs.indexOf(t)>=0}get openDialogs(){return this._openDialogs.slice()}set openDialogs(e){Un("openDialogs")}closeAllDialogs(){this._openDialogs.length=0,this.rerender()}DialogIsFrontMost(e){let t=this.existingDialogNamed(e);return this._openDialogs.indexOf(t)===this._openDialogs.length-1}bringDialogToFront(e){this.openDialog(e)}WidgetNamed(e){const t=this._ScreenSet;for(let n in t){const i=t[n].WidgetList;for(let o=0,u=i.length;o<u;o++)if(i[o].Name===e)return i[o]}}existingWidgetNamed(e){const t=this.WidgetNamed(e);return t==null&&At("NoSuchWidget: a widget named "+vt(e)+" does not exist"),t}WidgetOnScreen(e,t){const n=t.WidgetList||[];for(let i=0,o=n.length;i<o;i++)if(n[i].Name===e)return n[i]}WidgetOnDialog(e,t){return this.WidgetOnScreen(e,t)}existingWidgetOnScreen(e,t){const n=this.WidgetOnScreen(e,t);return n==null&&At("NoSuchWidget: screen "+vt(t.Name)+" does not contain a widget named "+vt(e)),n}existingWidgetOnDialog(e,t){const n=this.WidgetOnDialog(e,t);return n==null&&At("NoSuchWidget: dialog "+vt(t.Name)+" does not contain a widget named "+vt(e)),n}WidgetInContainer(e,t){const n=t.WidgetList||[];for(let i=0,o=n.length;i<o;i++)if(n[i].Name===e)return n[i]}existingWidgetInContainer(e,t){const n=this.WidgetInContainer(e,t);return n==null&&At("NoSuchWidget: could not find widget named "+vt(e)),n}stuff(e){for(let t in e){const n=this.ScreenNamed(t);if(n!=null){this.stuffScreen(n,e[t]);continue}const i=this.DialogNamed(t);i==null?At("NoSuchScreenOrDialog: no screen or dialog named "+vt(t)+" found"):this.stuffDialog(i,e[t])}}stuffScreen(e,t){for(let n in t){let i=this.existingWidgetOnScreen(n,e);this.stuffWidget(i,t[n])}}stuffDialog(e,t){for(let n in t){let i=this.existingWidgetOnDialog(n,e);this.stuffWidget(i,t[n])}}stuffWidget(e,t){if(this.ValueIsStuff(t)){const n=this.existingScreenNamed(t.from);e.WidgetList=(e.WidgetList||[]).concat(t.with.map(i=>this.existingWidgetOnScreen(i,n)))}else for(let n in t){const i=this.existingWidgetInContainer(n,e);this.stuffWidget(i,t[n])}}ValueIsStuff(e){return vo(e)&&qo(e.from)&&Zi(e.with,qo)}configure(e){for(let t in e){const n=this.ScreenNamed(t);if(n!=null){this.configureScreen(n,e[t]);continue}const i=this.DialogNamed(t);i==null?At("NoSuchScreenOrDialog: no screen or dialog named "+vt(t)+" found"):this.configureDialog(i,e[t])}}configureScreen(e,t){for(let n in t)if(n==="self")this.configureWidget(e,t.self);else{const i=this.existingWidgetOnScreen(n,e);this.configureWidget(i,t[n])}}configureDialog(e,t){for(let n in t)if(n==="self")this.configureWidget(e,t.self);else{const i=this.existingWidgetOnDialog(n,e);this.configureWidget(i,t[n])}}configureWidget(e,t){for(let n in t){let i=t[n];if(vo(i)&&Ha(i.Updater))this._UpdaterList.push(Wt(()=>{this.updateWidget(e,{[n]:i.Updater()})}));else{if(vo(i)&&e.WidgetList!=null){const o=this.WidgetInContainer(n,e);if(o!=null){this.configureWidget(o,i);continue}}e[n]=i}}}update(e){for(let t in e){const n=this.ScreenNamed(t);if(n!=null){this.updateScreen(n,e[t]);continue}const i=this.DialogNamed(t);i==null?At("NoSuchScreenOrDialog: no screen or dialog named "+vt(t)+" found"):this.updateDialog(i,e[t])}}updateScreen(e,t){for(let n in t)if(n==="self")this.updateWidget(e,t.self);else{const i=this.existingWidgetOnScreen(n,e);this.updateWidget(i,t[n])}}updateDialog(e,t){for(let n in t)if(n==="self")this.updateWidget(e,t.self);else{const i=this.existingWidgetOnDialog(n,e);this.updateWidget(i,t[n])}}updateWidget(e,t){for(let i in t)e[i]=t[i];const n=e.View;n!=null&&n.rerender()}updatedFrom(e){return{Updater:e}}get View(){return this._View}set View(e){Un("View")}renderInto(e){(function(t,n,i){var o,u,s;Fe.__&&Fe.__(t,n),o=n.__k,u=[],s=[],za(n,t=n.__k=Uc(Qi,null,[t]),o||mn,mn,n.namespaceURI,o?null:n.firstChild?Ki.call(n.childNodes):null,u,o?o.__e:n.firstChild,!1,s),Oc(u,t,s)})(D(rl||(rl=F`<${0} ProtoUX=${0}/>`),g0,this),e)}rerender(){this._View!=null&&this._View.rerender()}static registerWidgetView(e,t){ne._WidgetViewRegistry[e]=t}static WidgetViewForType(e){return ne._WidgetViewRegistry[e]}}ne._WidgetViewRegistry=Object.create(null);class g0 extends Pt{constructor(...e){super(...e),this.state={Value:0}}rerender(){this.setState({Value:this.state.Value+1})}render(e){let t=e.ProtoUX;t._View=this;const n=t._openScreen,i=t._openDialogs.slice(),o=i.pop(),u=(o==null?void 0:o.isModal)==1;return D(nl||(nl=F`<div style="
        display:block; position:absolute;
        left:0px; top:0px; right:0px; bottom:0px;
      ">
        <${0} ProtoUX=${0} Screen=${0}/>
        ${0}
        ${0}
        ${0}
      </div>`),f0,t,n,i.map(s=>D(il||(il=F`<${0} ProtoUX=${0} Dialog=${0} key=${0}/>`),uu,t,s,s.Name)),u?D(ol||(ol=F`<${0}/>`),m0):"",o==null?"":D(al||(al=F`<${0} ProtoUX=${0} Dialog=${0} key=${0}/>`),uu,t,o,o.Name))}}class f0 extends Pt{render(e){const t=e.Screen;t.View=this;const{Id:n,Classes:i,Style:o,Width:u,Height:s,WidgetList:l}=t;return D(sl||(sl=F`<div class=${0} id=${0} style="
        width:${0}px; height:${0}px; ${0}
      ">
        ${0}
      </div>`),se("PUX Screen",i),n,u,s,o||"",l.map(a=>D(ll||(ll=F`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`),te,a,e.ProtoUX,a.Name)))}}class m0 extends Pt{render(e){const{Style:t}=e;return D(dl||(dl=F`<div class="PUX ModalLayer" style="
        ${0};
        display:block; position:absolute;
        left:0px; top:0px; right:0px; bottom:0px;
      " onClick=${0}/>`),t||"",function(n){n.stopImmediatePropagation(),n.preventDefault()})}}class uu extends Pt{render(e){const t=e.Dialog;return t.Type==="ResizableDialog"?D(ul||(ul=F`<${0} Dialog=${0} ProtoUX=${0}/>`),x0,t,e.ProtoUX):D(cl||(cl=F`<${0}  Dialog=${0} ProtoUX=${0}/>`),S0,t,e.ProtoUX)}}class S0 extends Pt{constructor(...e){super(...e),this.state={Value:0}}rerender(){this.setState({Value:this.state.Value+1})}render(e){const t=e.Dialog;t.View=this;const n=(W,B,I,L)=>{t.x=t._DragOffset.x+I,t.y=t._DragOffset.y+L,t.z=20001e3,e.ProtoUX.View.rerender()},i=(W,B,I,L)=>{n(0,0,I,L),t.z=2e6,e.ProtoUX.bringDialogToFront(t.Name)},o=Vi(t,{neverFrom:".CloseButton",Threshold:4,onDragStarted:(W,B,I,L)=>{t._DragOffset={x:t.x,y:t.y},n(0,0,I,L)},onDragContinued:n,onDragFinished:i,onDragCancelled:i}),{Id:u,Classes:s,Style:l,x:a,y:h,z:d,Width:g,Height:p,Title:f,closeable:x,WidgetList:b}=t,y=ie(t,vm),P=`left:${a}px; top:${h}px; width:${g}px; height:${p}px; right:auto; bottom:auto;`;return D(hl||(hl=F`<div class=${0} id=${0} style="
        ${0}; ${0}; z-index:${0};
      " ...${0}>
        <div class="Titlebar"
          onPointerDown=${0} onPointerUp=${0}
          onPointerMove=${0} onPointerCancel=${0}
        >
          <div class="Title">${0}</div>
          <img class="CloseButton" src="${0}/xmark.png"
            style="visibility:${0}"
            onClick=${0}/>
        </div>

        ${0}
      </>`),se("PUX Dialog",s),u,l||"",P,d||2e6,y,o,o,o,o,f,e.ProtoUX._ImageFolder,x===!1?"hidden":"visible",function(W){W.stopImmediatePropagation(),W.preventDefault(),x!==!1&&e.ProtoUX.closeDialog(t.Name)},(b||[]).map(W=>D(pl||(pl=F`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`),te,W,e.ProtoUX,W.Name)))}}class x0 extends Pt{constructor(...e){super(...e),this.state={Value:0}}rerender(){this.setState({Value:this.state.Value+1})}render(e){const t=e.Dialog;t.View=this;let{Id:n,Classes:i,Style:o,x:u,y:s,z:l,Width:a,Height:h,Title:d,closeable:g,minWidth:p,minHeight:f,maxWidth:x,maxHeight:b,WidgetList:y}=t,P=ie(t,wm);mr("minimal width",p),mr("maximal width",x),mr("minimal height",f),mr("maximal height",b),p==null&&(p=120),x==null&&(x=1/0),f==null&&(f=80),b==null&&(b=1/0),p=Math.max(0,p),x=Math.max(p,x),f=Math.max(0,f),b=Math.max(f,b);const W=(N,j,J,ce)=>{t._DragMode==="drag"?I(J,ce):L(J,ce),t.z=20001e3,e.ProtoUX.View.rerender()},B=(N,j,J,ce)=>{W(0,0,J,ce),t.z=2e6,e.ProtoUX.bringDialogToFront(t.Name)},I=(N,j)=>{t.x=t._DragOffset.x+N,t.y=t._DragOffset.y+j},L=(N,j)=>{switch(t._DragMode){case"resize-sw":let J=Math.max(p,Math.min(t._DragOffset.Width-N,x));t.x=t._DragOffset.x-(N=J-t._DragOffset.Width),t.Width=t._DragOffset.Width+N;break;case"resize-se":t.Width=Math.max(p,Math.min(t._DragOffset.Width+N,x))}t.Height=Math.max(f,Math.min(t._DragOffset.Height+j,b))},V=Vi(t,{onlyFrom:".Titlebar,.leftResizer,.middleResizer,.rightResizer",neverFrom:".CloseButton",Threshold:4,onDragStarted:(N,j,J,ce,ge)=>{let Ge=ge.target.classList;switch(t._DragMode=void 0,!0){case Ge.contains("leftResizer"):t._DragMode="resize-sw";break;case Ge.contains("middleResizer"):t._DragMode="resize-s";break;case Ge.contains("rightResizer"):t._DragMode="resize-se";break;default:t._DragMode="drag"}t._DragOffset={x:t.x,Width:t.Width,y:t.y,Height:t.Height},W(0,0,J,ce)},onDragContinued:W,onDragFinished:B,onDragCancelled:B}),X=`left:${u}px; top:${s}px; width:${a}px; height:${h}px; right:auto; bottom:auto;`;return D(gl||(gl=F`<div class=${0} id=${0} style="
        ${0}; ${0}; z-index:${0};
      " ...${0}>
        <div class="ContentPane">
          ${0}
        </div>

        <div class="Titlebar"
          onPointerDown=${0} onPointerUp=${0}
          onPointerMove=${0} onPointerCancel=${0}
        >
          <div class="Title">${0}</div>
          <img class="CloseButton" src="${0}/xmark.png"
            style="visibility:${0}"
            onClick=${0}/>
        </div>

        <div class="leftResizer"
          onPointerDown=${0} onPointerUp=${0}
          onPointerMove=${0} onPointerCancel=${0}
        />
        <div class="middleResizer"
          onPointerDown=${0} onPointerUp=${0}
          onPointerMove=${0} onPointerCancel=${0}
        />
        <div class="rightResizer"
          onPointerDown=${0} onPointerUp=${0}
          onPointerMove=${0} onPointerCancel=${0}
        />
      </>`),se("PUX ResizableDialog",i),n,o||"",X,l||2e6,P,(y||[]).map(N=>D(fl||(fl=F`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`),te,N,e.ProtoUX,N.Name)),V,V,V,V,d,e.ProtoUX._ImageFolder,g===!1?"hidden":"visible",function(N){N.stopImmediatePropagation(),N.preventDefault(),g!==!1&&e.ProtoUX.closeDialog(t.Name)},V,V,V,V,V,V,V,V,V,V,V,V)}}class te extends Pt{constructor(...e){super(...e),this.state={Value:0}}rerender(){this.setState({Value:this.state.Value+1})}render(e){const t=e.Widget;if(t.View=this,e.hidden==1||t.hidden==1)return"";const{Id:n,Classes:i,Style:o,x:u,y:s,Width:l,Height:a,WidgetList:h}=t,d=ie(t,km),g=u!=null&&l!=null&&s!=null&&a!=null?`left:${u}px; top:${s}px; width:${l}px; height:${a}px; right:auto; bottom:auto;`:"";switch(t.Type){case"Group":return D(ml||(ml=F`<div class="PUX Widget ${0}" id=${0} style="${0} ${0}" ...${0}>
            ${0}
          </div>`),i,n,g,o||"",d,(h||[]).map(f=>D(Sl||(Sl=F`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`),te,f,e.ProtoUX,f.Name)));case"Box":return D(xl||(xl=F`<div class="PUX Widget ${0}" id=${0} style="
            ${0} ${0}
          " ...${0} key=${0}/>`),i,n,g,o||"",d,t.Name);default:const p=ne.WidgetViewForType(t.Type);if(p==null){const{Id:f,Classes:x,Style:b,Value:y,WidgetList:P}=t,W=ie(t,$m);return D(bl||(bl=F`<div class="PUX Widget ${0}" id=${0} style="
              ${0} ${0}
            " ...${0}>
              ${0}
              ${0}
            </div>`),x,f,g,b||"",W,y||"",(P||[]).map(B=>D(_l||(_l=F`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`),te,B,e.ProtoUX,B.Name)))}return D(yl||(yl=F`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`),p,t,e.ProtoUX,t.Name)}}}ne.registerWidgetView("horizontalSeparator",class extends te{render(r){const e=r.Widget;e.View=this;const{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l}=e,a=ie(e,Im),h=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";return D(vl||(vl=F`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}/>`),se("PUX horizontalSeparator Widget",n),t,h,i||"",a)}}),ne.registerWidgetView("verticalSeparator",class extends te{render(r){const e=r.Widget;e.View=this;const{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l}=e,a=ie(e,Pm),h=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";return D(wl||(wl=F`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}/>`),se("PUX verticalSeparator Widget",n),t,h,i||"",a)}}),ne.registerWidgetView("Badge",class extends te{render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a}=e,h=ie(e,Bm);const d=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";switch(a=(""+(a||"")).trim(),!0){case a==="":return"";case a.length>1:a="#";default:return D(kl||(kl=F`<div class=${0} id=${0} style="
          ${0} ${0}
        " ...${0}>${0}</div>`),se("PUX Badge Widget",n),t,d,i||"",h,a)}}}),ne.registerWidgetView("HTMLView",class extends te{render(r){const e=r.Widget;e.View=this;const{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a}=e,h=ie(e,Cm),d=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";return D($l||($l=F`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}
        dangerouslySetInnerHTML=${0}
      />`),se("PUX HTMLView Widget",n),t,d,i||"",h,{__html:a})}}),ne.registerWidgetView("TextView",class extends te{render(r){const e=r.Widget;e.View=this;const{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a}=e,h=ie(e,Vm),d=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";return D(Il||(Il=F`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>${0}</>`),se("PUX TextView Widget",n),t,d,i||"",h,a)}}),ne.registerWidgetView("ImageView",class extends te{render(r){const e=r.Widget;e.View=this;const{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a,ImageScaling:h,ImageAlignment:d}=e,g=ie(e,Nm),p=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";return D(Pl||(Pl=F`<img class=${0} id=${0} style="
        ${0} ${0};
        object-fit:${0};
        object-position:${0};
      " ...${0} src=${0}/>`),se("PUX ImageView Widget",n),t,p,i||"",h==="stretch"?"fill ":h,d,g,a)}}),ne.registerWidgetView("WebView",class extends te{render(r){const e=r.Widget;e.View=this;const{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a,PermissionsPolicy:h,allowsFullscreen:d,SandboxPermissions:g,ReferrerPolicy:p}=e,f=ie(e,Tm),x=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";return D(Bl||(Bl=F`<iframe class=${0} id=${0} style="
        ${0} ${0}
      " ...${0} src=${0}
        allow=${0} allowfullscreen=${0}
        sandbox=${0}
        referrerpolicy=${0}
      />`),se("PUX WebView Widget",n),t,x,i||"",f,a,h,d,g||"allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-same-origin allow-scripts",p)}}),ne.registerWidgetView("Icon",class extends te{render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a,Color:h,disabled:d,onClick:g}=e,p=ie(e,Fm);const f=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";let x=r.ProtoUX.ImageFolder;return a!=null&&a.trim()!==""&&(a=a.trim().replace(/url\("\/images\//g,'url("'+x)),D(Cl||(Cl=F`<div class=${0} id=${0} style="
        ${0} ${0}
      " disabled=${0}><div style="
        display:block; position:absolute;
        left:0px; top:0px; width:100%; height:100%;
        -webkit-mask-image:${0};         mask-image:${0};
        -webkit-mask-size:contain;           mask-size:contain;
        -webkit-mask-position:center center; mask-position:center center;
        background-color:${0};
      " onClick=${0} ...${0}/></>`),se("PUX Icon Widget",n),t,f,i||"",d,a,a,h||"black",function(b){d==1?(b.stopPropagation(),b.preventDefault()):typeof g=="function"&&g(b)},p)}}),ne.registerWidgetView("PseudoDropDown",class extends te{render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a,Color:h,Options:d,disabled:g,onInput:p}=e,f=ie(e,Dm);const x=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";let b=r.ProtoUX.ImageFolder;return a!=null&&a.trim()!==""&&(a=a.trim().replace(/url\("\/images\//g,'url("'+b)),D(Vl||(Vl=F`<div class=${0} id=${0} style="
        ${0} ${0}
      "><div style="
        display:block; position:absolute;
        left:0px; top:0px; width:100%; height:100%;
        -webkit-mask-image:${0};         mask-image:${0};
        -webkit-mask-size:contain;           mask-size:contain;
        -webkit-mask-position:center center; mask-position:center center;
        background-color:${0};
      " ...${0}/>
        <select onInput=${0}>
          ${0}
        </select>
      </div>`),se("PUX PseudoDropDown Widget",n),t,x,i||"",a,a,h||"black",f,function(y){g==1?(y.stopPropagation(),y.preventDefault()):typeof p=="function"&&p(y)},Zi(d,qo)?D(Nl||(Nl=F`
                <option value="" disabled selected>please select</option>
                ${0}
              `),(d||[]).map(y=>D(Tl||(Tl=F`<option>${0}</>`),y))):d)}}),ne.registerWidgetView("Button",class extends te{render(r){const e=r.Widget;e.View=this;const{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a}=e,h=ie(e,Wm),d=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";return D(Fl||(Fl=F`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <button ...${0}>${0}</button>
      </div>`),se("PUX Button Widget",n),t,d,i||"",h,a||"")}}),ne.registerWidgetView("Checkbox",class extends te{render(r){const e=r.Widget;e.View=this;const{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a}=e,h=ie(e,Lm),d=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";let{checked:g,indeterminate:p}=r;return g==null&&(g=a==1),p==null&&(p=a==null),D(Dl||(Dl=F`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <input type="checkbox" checked=${0} indeterminate=${0} ...${0}/>
      </div>`),se("PUX Checkbox Widget",n),t,d,i||"",g,p,h)}}),ne.registerWidgetView("Radiobutton",class extends te{render(r){const e=r.Widget;e.View=this;const{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a}=e,h=ie(e,Em),d=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";let{checked:g}=r;return g==null&&(g=a==1),D(Wl||(Wl=F`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <input type="radio" checked=${0} ...${0}/>
      </div>`),se("PUX Radiobutton Widget",n),t,d,i||"",g,h)}}),ne.registerWidgetView("Gauge",class extends te{render(r){const e=r.Widget;e.View=this;const{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a}=e,h=ie(e,Am),d=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";return D(Ll||(Ll=F`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <meter value=${0} ...${0}/>
      </div>`),se("PUX Gauge Widget",n),t,d,i||"",a||"",h)}}),ne.registerWidgetView("Progressbar",class extends te{render(r){const e=r.Widget;e.View=this;const{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a}=e,h=ie(e,Um),d=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";return D(El||(El=F`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <progress value=${0} ...${0}/>
      </div>`),se("PUX Progressbar Widget",n),t,d,i||"",a||"",h)}}),ne.registerWidgetView("Slider",class extends te{constructor(...r){super(...r),this._ValueToShow=void 0}render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a,Hashmarks:h}=e,d=ie(e,Mm);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(h)&&h.length>0&&(p=t+"-Hashmarks",f=D(Al||(Al=F`\n<datalist id=${0}>
          ${0}
        </datalist>`),p,h.map(x=>{const b=x.replace(/:.*$/,"").trim(),y=x.replace(/^[^:]+:/,"").trim();return D(Ul||(Ul=F`<option label=${0} value=${0}></option>`),b,y)}))),D(Ml||(Ml=F`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <input type="range" value=${0} ...${0}
          onBlur=${0} list=${0}
        />
      </div>${0}`),se("PUX Slider Widget",n),t,g,i||"",a||"",d,this.rerender.bind(this),p,f)}}),ne.registerWidgetView("TextlineInput",class extends te{constructor(...r){super(...r),this._ValueToShow=void 0}render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a,Suggestions:h}=e,d=ie(e,Xm);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(h)&&h.length>0&&(p=t+"-Suggestions",f=D(Xl||(Xl=F`<datalist id=${0}>
          ${0}
        </datalist>`),p,h.map(x=>D(Hl||(Hl=F`<option value=${0}></option>`),x)))),D(Ol||(Ol=F`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="text" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),se("PUX TextlineInput Widget",n),t,g,i||"",p,a||"",d,this.rerender.bind(this),f)}}),ne.registerWidgetView("PasswordInput",class extends te{constructor(...r){super(...r),this._ValueToShow=void 0}render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a}=e,h=ie(e,Hm);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const d=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";return D(jl||(jl=F`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <input type="password" value=${0} ...${0}
          onBlur=${0}
        />
      </div>`),se("PUX PasswordInput Widget",n),t,d,i||"",a||"",h,this.rerender.bind(this))}}),ne.registerWidgetView("NumberInput",class extends te{constructor(...r){super(...r),this._ValueToShow=void 0}render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a,Suggestions:h}=e,d=ie(e,Om);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(h)&&h.length>0&&(p=t+"-Suggestions",f=D(Gl||(Gl=F`<datalist id=${0}>
          ${0}
        </datalist>`),p,h.map(x=>D(zl||(zl=F`<option value=${0}></option>`),x)))),D(Rl||(Rl=F`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="number" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),se("PUX NumberInput Widget",n),t,g,i||"",p,a||"",d,this.rerender.bind(this),f)}}),ne.registerWidgetView("PhoneNumberInput",class extends te{constructor(...r){super(...r),this._ValueToShow=void 0}render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a,Suggestions:h}=e,d=ie(e,jm);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(h)&&h.length>0&&(p=t+"-Suggestions",f=D(Yl||(Yl=F`<datalist id=${0}>
          ${0}
        </datalist>`),p,h.map(x=>D(ql||(ql=F`<option value=${0}></option>`),x)))),D(Zl||(Zl=F`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="tel" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),se("PUX PhoneNumberInput Widget",n),t,g,i||"",p,a||"",d,this.rerender.bind(this),f)}}),ne.registerWidgetView("EMailAddressInput",class extends te{constructor(...r){super(...r),this._ValueToShow=void 0}render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a,Suggestions:h}=e,d=ie(e,Gm);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(h)&&h.length>0&&(p=t+"-Suggestions",f=D(Jl||(Jl=F`<datalist id=${0}>
          ${0}
        </datalist>`),p,h.map(x=>D(Kl||(Kl=F`<option value=${0}></option>`),x)))),D(Ql||(Ql=F`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="email" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),se("PUX EMailAddressInput Widget",n),t,g,i||"",p,a||"",d,this.rerender.bind(this),f)}}),ne.registerWidgetView("URLInput",class extends te{constructor(...r){super(...r),this._ValueToShow=void 0}render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a,Suggestions:h}=e,d=ie(e,zm);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(h)&&h.length>0&&(p=t+"-Suggestions",f=D(ed||(ed=F`<datalist id=${0}>
          ${0}
        </datalist>`),p,h.map(x=>D(td||(td=F`<option value=${0}></option>`),x)))),D(rd||(rd=F`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="url" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),se("PUX URLInput Widget",n),t,g,i||"",p,a||"",d,this.rerender.bind(this),f)}}),ne.registerWidgetView("TimeInput",class extends te{constructor(...r){super(...r),this._ValueToShow=void 0}render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a,Suggestions:h}=e,d=ie(e,Rm);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(h)&&h.length>0&&(p=t+"-Suggestions",f=D(nd||(nd=F`<datalist id=${0}>
          ${0}
        </datalist>`),p,h.map(x=>D(id||(id=F`<option value=${0}></option>`),x)))),D(od||(od=F`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="time" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),se("PUX TimeInput Widget",n),t,g,i||"",p,a||"",d,this.rerender.bind(this),f)}}),ne.registerWidgetView("DateTimeInput",class extends te{constructor(...r){super(...r),this._ValueToShow=void 0}render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a,Suggestions:h}=e,d=ie(e,Ym);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(h)&&h.length>0&&(p=t+"-Suggestions",f=D(ad||(ad=F`<datalist id=${0}>
          ${0}
        </datalist>`),p,h.map(x=>D(sd||(sd=F`<option value=${0}></option>`),x)))),D(ld||(ld=F`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="datetime-local" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),se("PUX DateTimeInput Widget",n),t,g,i||"",p,a||"",d,this.rerender.bind(this),f)}}),ne.registerWidgetView("DateInput",class extends te{constructor(...r){super(...r),this._ValueToShow=void 0}render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a,Suggestions:h}=e,d=ie(e,qm);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(h)&&h.length>0&&(p=t+"-Suggestions",f=D(dd||(dd=F`<datalist id=${0}>
          ${0}
        </datalist>`),p,h.map(x=>D(ud||(ud=F`<option value=${0}></option>`),x)))),D(cd||(cd=F`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="date" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),se("PUX DateInput Widget",n),t,g,i||"",p,a||"",d,this.rerender.bind(this),f)}}),ne.registerWidgetView("WeekInput",class extends te{constructor(...r){super(...r),this._ValueToShow=void 0}render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a,Suggestions:h}=e,d=ie(e,Zm);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(h)&&h.length>0&&(p=t+"-Suggestions",f=D(hd||(hd=F`<datalist id=${0}>
          ${0}
        </datalist>`),p,h.map(x=>D(pd||(pd=F`<option value=${0}></option>`),x)))),D(gd||(gd=F`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="week" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),se("PUX WeekInput Widget",n),t,g,i||"",p,a||"",d,this.rerender.bind(this),f)}}),ne.registerWidgetView("MonthInput",class extends te{constructor(...r){super(...r),this._ValueToShow=void 0}render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a,Suggestions:h}=e,d=ie(e,Jm);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(h)&&h.length>0&&(p=t+"-Suggestions",f=D(fd||(fd=F`<datalist id=${0}>
          ${0}
        </datalist>`),p,h.map(x=>D(md||(md=F`<option value=${0}></option>`),x)))),D(Sd||(Sd=F`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="month" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),se("PUX MonthInput Widget",n),t,g,i||"",p,a||"",d,this.rerender.bind(this),f)}}),ne.registerWidgetView("SearchInput",class extends te{constructor(...r){super(...r),this._ValueToShow=void 0}render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a,Suggestions:h}=e,d=ie(e,Km);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(h)&&h.length>0&&(p=t+"-Suggestions",f=D(xd||(xd=F`<datalist id=${0}>
          ${0}
        </datalist>`),p,h.map(x=>D(bd||(bd=F`<option value=${0}></option>`),x)))),D(_d||(_d=F`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="search" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),se("PUX SearchInput Widget",n),t,g,i||"",p,a||"",d,this.rerender.bind(this),f)}}),ne.registerWidgetView("FileInput",class extends te{constructor(...r){super(...r),this._ValueToShow=void 0}render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a,Placeholder:h,onDrop:d}=e,g=ie(e,Qm);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const p=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";return D(yd||(yd=F`<label class=${0} id=${0} style="
        ${0} ${0}
      " onDragEnter=${0} onDragOver=${0} onDrop=${0}>
        <input type="file" style="display:none" ...${0}
          onBlur=${0}
        />
        ${0}
        ${0}
      </label>`),se("PUX FileInput Widget",n),t,p,i||"",function(f){f.stopPropagation(),f.preventDefault()},function(f){f.stopPropagation(),f.preventDefault()},function(f){f.stopPropagation(),f.preventDefault(),typeof d=="function"&&d(f)},g,this.rerender.bind(this),(a||"")===""?"":D(vd||(vd=F`<span>${0}</span>`),a),(a||"")===""?(h||"")===""?"":D(wd||(wd=F`<span>${0}</span>`),h):"")}}),ne.registerWidgetView("ColorInput",class extends te{constructor(...r){super(...r),this._ValueToShow=void 0}render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a,Suggestions:h}=e,d=ie(e,e0);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(h)&&h.length>0&&(p=t+"-Suggestions",f=D(kd||(kd=F`<datalist id=${0}>
          ${0}
        </datalist>`),p,h.map(x=>D($d||($d=F`<option value=${0}></option>`),x)))),D(Id||(Id=F`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="color" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),se("PUX ColorInput Widget",n),t,g,i||"",p,a||"",d,this.rerender.bind(this),f)}}),ne.registerWidgetView("DropDown",class extends te{constructor(...r){super(...r),this._ValueToShow=void 0}render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a,Options:h,Placeholder:d}=e,g=ie(e,t0);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const p=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";return D(Pd||(Pd=F`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <select ...${0} onBlur=${0}>
          ${0}
          ${0}
        </select>
      </div>`),se("PUX DropDown Widget",n),t,p,i||"",g,this.rerender.bind(this),d==null?"":D(Bd||(Bd=F`<option value="" disabled>${0}</option>`),d),(h||[]).map(f=>D(Cd||(Cd=F`<option selected=${0}>${0}</>`),f===a,f)))}}),ne.registerWidgetView("TextInput",class extends te{constructor(...r){super(...r),this._ValueToShow=void 0}render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a}=e,h=ie(e,r0);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const d=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";return D(Vd||(Vd=F`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <textarea ...${0} value=${0}
          onBlur=${0}
        ></textarea>
      </div>`),se("PUX TextInput Widget",n),t,d,i||"",h,a||"",this.rerender.bind(this))}}),ne.registerWidgetView("FileDropArea",class extends te{render(r){const e=r.Widget;e.View=this;const{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,onDrop:a,WidgetList:h}=e,d=ie(e,n0),g=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";return D(Nd||(Nd=F`<label class=${0} id=${0} style="
        ${0} ${0}
      " onDragEnter=${0} onDragOver=${0} onDrop=${0}>
        <input type="file" ...${0}/>
        ${0}
      </label>`),se("PUX FileDropArea Widget",n),t,g,i||"",function(p){p.stopPropagation(),p.preventDefault()},function(p){p.stopPropagation(),p.preventDefault()},function(p){p.stopPropagation(),p.preventDefault(),typeof a=="function"&&a(p)},d,(h||[]).map(p=>D(Td||(Td=F`<${0} Widget=${0} ProtoUX=${0}/>`),te,p,r.ProtoUX)))}}),ne.registerWidgetView("Accordion",class extends te{render(r){const e=r.Widget;e.View=this;const{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,WidgetList:a}=e,h=ie(e,i0),d=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";return D(Fd||(Fd=F`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>
        ${0}
      </>`),se("PUX Accordion Widget",n),t,d,i||"",h,(a||[]).map(g=>D(Dd||(Dd=F`<${0} Widget=${0} ProtoUX=${0}/>`),Gc,g,r.ProtoUX)))}});class Gc extends te{render(e){const t=e.Widget;t.View=this;const{Id:n,Classes:i,Style:o,Height:u,Value:s,Expansion:l,WidgetList:a}=t,h=ie(t,o0),d=this;return D(Wd||(Wd=F`<div class=${0} id=${0} style="
        ${0}; left:0px; top:0px; width:100%; height:auto;
      " ...${0}>
        <div class="PUX Fold-Header">
          <img class="PUX Fold-Expander" src=${0} onClick=${0}
          />
          <div class="PUX Fold-Title">${0}</>
        </div>

        ${0}
      </>`),se("PUX Fold Widget",i),n,o||"",h,l?`${e.ProtoUX._ImageFolder}caret-down.png`:`${e.ProtoUX._ImageFolder}caret-right.png`,function(){t.Expansion=!t.Expansion,d.rerender()},s,l?D(Ld||(Ld=F`<div class="PUX Fold-Content" style="
              height:${0}px; border:none;
            ">
              ${0}
            </>`),u,(a||[]).map(g=>D(Ed||(Ed=F`<${0} Widget=${0} ProtoUX=${0}/>`),te,g,e.ProtoUX))):"")}}ne.registerWidgetView("Fold",Gc),ne.registerWidgetView("Deck",class extends te{render(r){const e=r.Widget;e.View=this;const{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a,WidgetList:h}=e,d=ie(e,a0),g=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"",p=(h||[])[a==null?0:a<0?h.length+a:a]||(h||[])[0];return D(Ad||(Ad=F`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>
        ${0}
      </>`),se("PUX Deck Widget",n),t,g,i||"",d,p==null?D(Ud||(Ud=F`<${0}><span>(no card)</span></>`),b0):D(Md||(Md=F`<${0} Widget=${0} ProtoUX=${0}/>`),zc,p,r.ProtoUX))}});class zc extends te{render(e){const t=e.Widget;t.View=this;const{Id:n,Classes:i,Style:o,WidgetList:u}=t,s=ie(t,s0);return D(Xd||(Xd=F`<div class=${0} id=${0} style="
        border:none; ${0};
        left:0px; top:0px; right:0px; bottom:0px; width:auto; height:auto
      " ...${0}>
        ${0}
      </>`),se("PUX Card Widget",i),n,o||"",s,(u||[]).map(l=>D(Hd||(Hd=F`<${0} Widget=${0} ProtoUX=${0}/>`),te,l,e.ProtoUX)))}}ne.registerWidgetView("Card",zc),ne.registerWidgetView("TabStrip",class extends te{render(r){const e=r.Widget;e.View=this;const{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Value:a,WidgetList:h}=e,d=ie(e,l0),g=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"",p=(h||[])[a==null?0:a<0?h.length+a:a]||(h||[])[0],f=this;return D(Od||(Od=F`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>
        ${0}
      </>`),se("PUX TabStrip Widget",n),t,g,i||"",d,(h||[]).map((x,b)=>D(jd||(jd=F`
          <${0} Widget=${0} ProtoUX=${0}
            active=${0}
            onClick=${0}
          />
        `),Rc,x,r.ProtoUX,x===p,()=>function(y){f.base.dispatchEvent(new CustomEvent("ValueChange",{detail:y}))}(b))))}});class Rc extends te{render(e){const t=e.Widget;t.View=this;const{Id:n,Classes:i,Style:o,Width:u,WidgetList:s}=t,l=ie(t,d0),{active:a,onClick:h}=e;return D(Gd||(Gd=F`<div class=${0} id=${0} style="
        ${0}; width:${0}px; border:none; border-width:0px 0px 4px 0px;
        border-style:solid; border-bottom-color:${0}
      " ...${0} onClick=${0}>
        ${0}
      </div>`),se('PUX ${active ? "active" : ""} Tab Widget',i),n,o||"",u,a?"black":"transparent",l,h,(s||[]).map(d=>D(zd||(zd=F`<${0} Widget=${0} ProtoUX=${0}/>`),te,d,e.ProtoUX)))}}function se(r,e){const t=Object.create(null);return(r+" "+(e||"")).trim().replace(/\s+/g," ").split(" ").filter(n=>!(n in t)&&(t[n]=!0,!0)).join(" ")}ne.registerWidgetView("Tab",Rc),ne.registerWidgetView("FlatListView",class extends te{render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,List:a,ItemRenderer:h,Placeholder:d,selectedIndices:g,SelectionLimit:p,onSelectionChange:f,onItemSelected:x,onItemDeselected:b}=e,y=ie(e,u0);const P=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";Rs("item list",a),pt("list item renderer",h),wo("list placeholder",d),ko("list of selected indices",g,oi),mr("selection limit",p),pt("selection change callback",f),pt("item selection callback",x),pt("item deselection callback",b),h==null&&(h=I=>D(Rd||(Rd=F`${0}`),I+"")),d==null&&(d="(empty)"),g==null&&(g=[]),p==null&&(p=1);const W=Object.create(null);if(g=g.filter(I=>!(!(oi(I)&&I>=0&&I<a.length)||I in W||(W[I]=!0,0))),g.length>p){const I=g.slice(p);g.length=p,f!=null&&f(g),b!=null&&I.forEach(L=>{b(a[L],L)})}function B(I){return I in W}return D(Yd||(Yd=F`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>
        ${0}
      </>`),se("PUX FlatListView Widget",n),t,P,i||"",y,a.length===0?D(qd||(qd=F`<div class="centered"><span>${0}</></>`),d):a.map((I,L)=>D(Zd||(Zd=F`<div
              class=${0}
              dangerouslySetInnerHTML=${0}
              onClick=${0}
            />`),B(L)?"selected":void 0,{__html:h(I,L,B(L))},V=>function(X,N){if(X.stopImmediatePropagation(),X.preventDefault(),p===0)return;let j,J,ce=!1;X.shiftKey||X.metaKey?(ce=!0,B(N)?(J=[N],g=g.filter(ge=>ge!==N)):(g.length===p&&(J=[g.shift()]),j=[N],g.push(N))):(J=g.filter(ge=>ge!==N),ce=!B(N),j=ce?[N]:[],g=[N]),ce&&f!=null&&f(g),J!=null&&b!=null&&J.forEach(ge=>{b(a[ge],ge)}),j!=null&&x!=null&&j.forEach(ge=>{x(a[ge],ge)})}(V,L))))}}),ne.registerWidgetView("NestedListView",class extends te{render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,List:a,ItemRenderer:h,Placeholder:d,LabelOfItem:g,ContentListOfItem:p,selectedPaths:f,SelectionLimit:x,SelectionMode:b,onSelectionChange:y,onItemSelected:P,onItemDeselected:W,onItemDoubleClicked:B,expandedPaths:I,Indentation:L,onExpansionChange:V,onItemExpanded:X,onItemCollapsed:N}=e,j=ie(e,c0);const J=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";function ce(ee){return Zi(ee,oi)}var ge;function Ge(ee){let oe=a[ee[0]];for(let Ve=1,Vt=ee.length;Ve<Vt;Ve++){if(oe==null)return;const Et=p(oe);if(!Pi(Et))return;oe=Et[ee[Ve]]}return oe}function jt(ee){return Ge(ee)!=null}function ze(ee,oe){return ee.length===oe.length&&ee.every((Ve,Vt)=>Ve===oe[Vt])}function Ke(ee,oe){for(let Ve=0,Vt=oe.length;Ve<Vt;Ve++)if(ze(ee,oe[Ve]))return Ve;return-1}function Qe(ee,oe){return ee.length===oe.length+1&&ze(ee.slice(0,oe.length),oe)}function cr(ee){return Ke(ee,f)>=0}if(Rs("item list",a),pt("list item renderer",h),wo("list placeholder",d),zs("label extraction function",g),zs("content extraction function",p),ko("list of selected paths",f,ce),mr("selection limit",x),(ge=b)==null||function(ee,oe,Ve){if(oe==null&&wt("MissingArgument: no ".concat(qt(ee)," given")),["same-container","any-container"].indexOf(oe)>=0)return oe==null||typeof oe.valueOf!="function"?oe:oe.valueOf();wt("InvalidArgument: the given ".concat(qt(ee)," is not among the supported values"))}("selection mode",ge),pt("selection change callback",y),pt("item selection callback",P),pt("item deselection callback",W),pt("item double-click callback",B),ko("list of expanded paths",I,ce),mr("indentation",L),pt("expansion change callback",V),pt("item expansion callback",X),pt("item collapse callback",N),h==null&&(h=function(ee,oe){return D(Jd||(Jd=F`<div class="ItemLabel">${0}</div>`),g(ee))}),d==null&&(d="(empty)"),f==null&&(f=[]),x==null&&(x=1),b==null&&(b="same-container"),I==null&&(I=[]),L==null&&(L=10),f=f.filter(ee=>jt(ee)),f=f.filter((ee,oe)=>Ke(ee,f)===oe),f.length>1&&b==="same-container"){const ee=f[0].slice(0,f[0].length-1);f=f.filter(oe=>Qe(oe,ee))}function Vr(ee,oe){const Ve=(oe.length-1)*L,Vt=cr(oe),Et=function(ht){return Ke(ht,I)>=0}(oe);let Re=p(ee);Pi(Re)||(Re=[]);const Nr=Re.length>0;return D(Kd||(Kd=F`<div class="ItemView" style="padding-left:${0}px">
          <div class="ItemLine ${0}"
            onClick=${0} onDblClick=${0}
          >
            ${0} ${0}
          </div>
          ${0}
        </div>`),Ve,Vt?"selected":"",function(ht){(function(Ye,Gt,C){if(Ye.stopImmediatePropagation(),Ye.preventDefault(),x===0)return;let G,E,H=!1;if(Ye.shiftKey||Ye.metaKey)if(H=!0,cr(C))E=[C],f=f.filter(z=>!ze(C,z));else{const z=C.slice(0,C.length-1);E=f.filter(Z=>!Qe(Z,z)),f=f.filter(Z=>Qe(Z,z)),f.length===x&&E.push([f.shift()]),G=[C],f.push(C)}else E=f.filter(z=>!ze(C,z)),H=!cr(C),G=H?[C]:[],f=[C];H&&y!=null&&y(f),E!=null&&W!=null&&E.forEach(z=>{W(Ge(z),z)}),G!=null&&P!=null&&G.forEach(z=>{P(Ge(z),z)})})(ht,0,oe)},function(ht){(function(Ye,Gt,C){B!=null&&(Ye.stopImmediatePropagation(),Ye.preventDefault(),B(Gt,C,Ye))})(ht,ee,oe)},Nr?D(Et?Qd||(Qd=F`<img class="ItemExpander" src="/svg/icons/caret-down.svg"  onClick=${0}/>`):eu||(eu=F`<img class="ItemExpander" src="/svg/icons/caret-right.svg" onClick=${0}/>`),function(ht){(function(Ye,Gt,C){Ye.stopImmediatePropagation(),Ye.preventDefault();let G=Ke(C,I);G<0?I.push(C):I.splice(G,1),V!=null&&V(I),G<0?X!=null&&X(Gt,C):N!=null&&N(Gt,C)})(ht,ee,oe)}):D(tu||(tu=F`<img class="ItemIcon" src="/svg/icons/circle.svg"/>`)),h(ee,oe),Nr&&Et?Re.map((ht,Ye)=>Vr(ht,oe.concat(Ye))):"")}return I=I.filter(ee=>jt(ee)),I=I.filter((ee,oe)=>Ke(ee,I)===oe),D(ru||(ru=F`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>
        ${0}
      </>`),se("PUX NestedListView Widget",n),t,J,i||"",j,a.length===0?D(nu||(nu=F`<div class="centered"><span>${0}</></>`),d):a.map((ee,oe)=>Vr(ee,[oe])))}}),ne.registerWidgetView("Placeholder",class extends te{render(r){const e=r.Widget;e.View=this;let{Id:t,Classes:n,Style:i,x:o,y:u,Width:s,Height:l,Substitute:a,Placeholder:h}=e,d=ie(e,h0);pt("Substitute",a),wo("placeholder text",h),h==null&&(h="(empty)");const g=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";return D(iu||(iu=F`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        ${0}
      </div>`),se("PUX Placeholder Widget",n),t,g,i||"",a==null?D(ou||(ou=F`<div class="centered"><span>${0}</></>`),h):D(au||(au=F`<${0} ...${0}/>`),a,d))}});class b0 extends Pt{render(e){return D(su||(su=F`<div class="centered">
        ${0}
      </div>`),e.children)}}var _0=Object.defineProperty,y0=(r,e,t)=>e in r?_0(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Me=(r,e,t)=>(y0(r,typeof e!="symbol"?e+"":e,t),t),nt=_a.bind(Sa);const{fromDocumentTo:v0}=dm,qa=document.createElement("style");qa.setAttribute("id","SNS Stylesheet");qa.innerHTML=`/*******************************************************************************
*                                                                              *
*                        Shareable Note Stickers (SNS)                         *
*                                                                              *
*******************************************************************************/

/**** all SNS elements are absolutely positioned ****/

  .SNS {
    display:block; position:absolute;
    margin:0px; padding:0px;
    background:none; border:none; border-radius:0px; outline:none;
  }

/**** Error Indicator ****/

  .SNS.ErrorIndicator {
    overflow:hidden;
    left:0px; top:0px; width:24px; height:24px;
    background:url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 17.0001H12.01M12 10.0001V14.0001M6.41209 21.0001H17.588C19.3696 21.0001 20.2604 21.0001 20.783 20.6254C21.2389 20.2985 21.5365 19.7951 21.6033 19.238C21.6798 18.5996 21.2505 17.819 20.3918 16.2579L14.8039 6.09805C13.8897 4.4359 13.4326 3.60482 12.8286 3.32987C12.3022 3.09024 11.6978 3.09024 11.1714 3.32987C10.5674 3.60482 10.1103 4.4359 9.19614 6.09805L3.6082 16.2579C2.74959 17.819 2.32028 18.5996 2.39677 19.238C2.46351 19.7951 2.76116 20.2985 3.21709 20.6254C3.7396 21.0001 4.63043 21.0001 6.41209 21.0001Z' stroke='orange' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='white'/%3E%3C/svg%3E");
    pointer-events:auto;
  }


/**** BoardView ****/

  .SNS.BoardView {
    left:0px; top:0px; right:0px; bottom:0px;
  }

/**** Sticker and Contents, Cover ****/

  .SNS.Sticker {}
  .SNS.Sticker > .SNS {
    display:block; position:absolute;
    left:0px; top:0px; width:100%; height:100%; right:auto; bottom:auto;
  }

  .SNS.Cover { user-select:none; z-index:1000000 }

/**** Selection Markers ****/

  .SNS.Sticker.selected, .SNS.Cover[selected] {
    outline:dotted 2px orangered;
  }

  .SNS.ShapeHandle {
    width:8px; height:8px;
    background:orangered; border:solid 1px darkgray;
    z-index:1000001; /* above .SNS.Cover */
  }

/**** Selection Lasso ****/

  .SNS.Lasso {
    background:rgba(255,69,0, 0.1); /* border:dashed 2px orangered; */
  }

/**** Dragging Guides ****/

  .SNS.horizontalGuide.Edge {
    left:0px; right:0px; height:1px;
    border-top:dashed 1px orangered;
  }
  .SNS.verticalGuide.Edge {
    top:0px; bottom:0px; width:1px;
    border-left:dashed 1px orangered;
  }

  .SNS.horizontalGuide.Center {
    left:0px; right:0px; height:1px;
    border-top:dotted 1px orangered;
  }
  .SNS.verticalGuide.Center {
    top:0px; bottom:0px; width:1px;
    border-left:dotted 1px orangered;
  }

/**** Placeholder ****/

  .SNS.Placeholder {
    display:block; position:relative;
    width:100%; height:100%;
  }

  .SNS.Placeholder > * {
    display:block; position:absolute;
    left:50%; top:50%;
    transform:translate(-55%,-50%);
    white-space:nowrap;
  }

`;document.head.appendChild(qa);class Yc extends nr{constructor(){super(...arguments),Me(this,"_Board"),Me(this,"_StickerList",[]),Me(this,"_pointedSticker"),Me(this,"_selectedStickers",[]),Me(this,"_SelectionLimit",1/0),Me(this,"_LassoStart"),Me(this,"_LassoEnd"),Me(this,"_SelectionBeforeLasso",[]),Me(this,"_ShapeMode"),Me(this,"_shapedStickers"),Me(this,"_initialGeometries"),Me(this,"_SnapToGrid",!1),Me(this,"_GridWidth",1),Me(this,"_GridHeight",1),Me(this,"_StickerRecognizerSlot",{}),Me(this,"_ShapeHandleRecognizerSlot",{}),Me(this,"_LassoRecognizerSlot",{}),Me(this,"state",{Value:0})}_mountBoard(e){e!=null&&this.base!=null&&(e._View=this.base,e._onMount!=null&&e._onMount()),this._Board=e}_unmountBoard(){const e=this._Board;e!=null&&(e._View=void 0,e._onUnmount!=null&&e._onUnmount())}componentDidMount(){this._mountBoard(this._Board)}componentWillUnmount(){this._unmountBoard()}rerender(){this.setState({Value:this.state.Value+1})}render(e){const t=this;let{Classes:n,Board:i,StickerList:o,Placeholder:u,Mode:s,SelectionLimit:l,selectedStickers:a,onSelectionChange:h,onStickerSelected:d,onStickerDeselected:g,SelectionFrameStyle:p,SelectionHandleStyle:f,LassoMode:x,onGeometryChange:b,SnapToGrid:y,GridWidth:P,GridHeight:W}=e;this._Board!==i&&(this._unmountBoard(),this._mountBoard(i));function B(){t._pointedSticker=void 0,t._shapedStickers=void 0,t._initialGeometries=void 0}function I(){t._shapedStickers!=null&&Ke(t._shapedStickers,t._initialGeometries),B()}On("board CSS class names",n),wf("board",i),ms("sticker list",o,yr),On("placeholder text",u),Fo("board mode",s,["edit","run"]),un("selection limit",l),ms("list of selected stickers",a,yr),er("selection change callback",h),er("selection callback",d),er("deselection callback",g),On("selection frame CSS style",p),No("selection handle CSS style",f),Fo("lasso selection mode",x,["touch","contain"]),er("geometry change callback",b),yu('"SnapToGrid" mode',y),di("grid width",P),di("grid height",W),n==null&&(n=""),u==null&&(u="(empty)"),s==null&&(s="run"),l==null&&(l=1/0),a==null&&(a=[]),f==null&&(f="background:orangered; border:solid 1px darkgray"),x==null&&(x="contain"),y==null&&(y=!1),P==null&&(P=10),W==null&&(W=10);const L=new Set;a=a.filter(C=>yr(C)&&!L.has(C)?(L.add(C),!0):(I(),!1)),a.length>l&&V(a.slice(0,l)),t._StickerList=o,t._selectedStickers=a,t._SelectionLimit=l,t._SnapToGrid=y,t._GridWidth=P,t._GridHeight=W;function V(C,G=[]){const E=C.slice();G.forEach(Z=>{E.indexOf(Z)<0&&E.push(Z)}),a.length>t._SelectionLimit&&(E.length=t._SelectionLimit);const H=[],z=[];E.forEach(Z=>{t._selectedStickers.indexOf(Z)<0&&H.push(Z)}),t._selectedStickers.forEach(Z=>{E.indexOf(Z)<0&&z.push(Z)}),a=t._selectedStickers=E,(H.length>0||z.length>0)&&(I(),h!=null&&h(a)),z.length>0&&g!=null&&z.forEach(Z=>{g(Z)}),H.length>0&&d!=null&&H.forEach(Z=>{d(Z)})}function X(C){return a.indexOf(C)>=0}function N(){const{x:C,y:G}=t._LassoStart,{x:E,y:H}=t._LassoEnd||t._LassoStart;let z=C<=E?C:E,Z=C<=E?E-C:C-E,Se=G<=H?G:H,ae=G<=H?H-G:G-H;return{x:z,y:Se,Width:Z,Height:ae}}function j(){const{x:C,y:G,Width:E,Height:H}=N();return`left:${C}px; top:${G}px; width:${E}px; height:${H}px`}function J(){let{x:C,y:G,Width:E,Height:H}=N(),z=C+E,Z=G+H;return x==="touch"?t._StickerList.filter(Se=>{if(!Se.isVisible||Se.isLocked)return!1;const{x:ae,y:be,Width:Ie,Height:xt}=Se.Geometry;return C<=ae+Ie&&ae<=z&&G<=be+xt&&be<=Z}):t._StickerList.filter(Se=>{if(!Se.isVisible||Se.isLocked)return!1;const{x:ae,y:be,Width:Ie,Height:xt}=Se.Geometry;return C<=ae&&ae<=z+Ie&&G<=be&&be<=Z+xt})}function ce(C,G){t._LassoEnd={x:C,y:G},V(t._SelectionBeforeLasso,J())}function ge(){t._LassoStart=t._LassoEnd=void 0,t._SelectionBeforeLasso=[]}function Ge(){t._LassoStart=t._LassoEnd=void 0,V(t._SelectionBeforeLasso),t._SelectionBeforeLasso=[]}function jt(){V([])}const ze=ra(t._LassoRecognizerSlot,{onlyFrom:".SNS.BoardView",Threshold:4,onDragStarted:(C,G,E,H)=>{t._SelectionBeforeLasso=a.slice(),{left:C,top:G}=v0("local",{left:C,top:G},t.base),t._LassoStart={x:C,y:G},ce(C,G),t.rerender()},onDragContinued:(C,G,E,H)=>{ce(t._LassoStart.x+E,t._LassoStart.y+H),t.rerender()},onDragFinished:(C,G,E,H)=>{ce(t._LassoStart.x+E,t._LassoStart.y+H),ge(),t.rerender()},onDragCancelled:(C,G,E,H)=>{Ge(),t.rerender()},onClicked:jt});function Ke(C,G){b!=null&&(b(C,G),t.rerender())}function Qe(C,G,E,H,z){if(b==null)return;let Z=0,Se=0,ae=0,be=0;switch(G){case"nw":Z=E,ae=-E,Se=H,be=-H;break;case"n":Se=H,be=-H;break;case"ne":ae=E,Se=H,be=-H;break;case"e":ae=E;break;case"se":ae=E,be=H;break;case"s":be=H;break;case"sw":Z=E,ae=-E,be=H;break;case"w":Z=E,ae=-E;break;case"c":Z=E,Se=H}z==null&&(z=t._initialGeometries);const Ie=z.map(xt=>{let Jr=Math.max(0,xt.Width+ae),Kr=Math.max(0,xt.Height+be),tt=xt.x+Z,bt=tt+Jr,rt=xt.y+Se,_t=rt+Kr;if(t._SnapToGrid){let hr=t._GridWidth*Math.round(tt/t._GridWidth),Tr=t._GridWidth*Math.round(bt/t._GridWidth),pr=t._GridHeight*Math.round(rt/t._GridHeight),Fr=t._GridHeight*Math.round(_t/t._GridHeight);switch(G){case"nw":tt=Math.min(hr,bt),rt=Math.min(pr,_t);break;case"n":rt=Math.min(pr,_t);break;case"ne":bt=Math.max(tt,Tr),rt=Math.min(pr,_t);break;case"e":bt=Math.max(tt,Tr);break;case"se":bt=Math.max(tt,Tr),_t=Math.max(rt,Fr);break;case"s":_t=Math.max(rt,Fr);break;case"sw":tt=Math.min(hr,bt),_t=Math.max(rt,Fr);break;case"w":tt=Math.min(hr,bt);break;case"c":tt=hr,bt=tt+Jr,rt=pr,_t=rt+Kr}}return{x:tt,y:rt,Width:bt-tt,Height:_t-rt}});Ke(C,Ie)}const cr=(C,G,E)=>{if(l===0)return;const H=t._pointedSticker;let z=!1,Z,Se;E.shiftKey||E.metaKey?(z=!0,X(H)?(Se=[H],a=a.filter(ae=>ae!==H)):(a.length===l&&(Se=[a.shift()]),Z=[H],a.push(H))):(Se=a.filter(ae=>ae!==H),z=!X(H),Z=z?[H]:[],a=[H]),z&&h!=null&&h(a),Se!=null&&g!=null&&Se.forEach(ae=>{g(ae)}),Z!=null&&d!=null&&Z.forEach(ae=>{d(ae)}),z&&t.rerender()},Vr=ra(t._StickerRecognizerSlot,{onlyFrom:".SNS.Cover",Threshold:4,onDragStarted:(C,G,E,H,z)=>{X(t._pointedSticker)||(z.shiftKey||z.metaKey?V([t._pointedSticker],t._selectedStickers):V([t._pointedSticker])),t._shapedStickers=t._selectedStickers,t._initialGeometries=t._selectedStickers.map(Z=>Z.Geometry),Qe(t._shapedStickers,"c",E,H)},onDragContinued:(C,G,E,H)=>{t._shapedStickers!=null&&Qe(t._shapedStickers,"c",E,H)},onDragFinished:(C,G,E,H)=>{t._shapedStickers!=null&&(Qe(t._shapedStickers,"c",E,H),B())},onDragCancelled:(C,G,E,H)=>{I()},onClicked:cr}),ee=(C,G)=>{t._ShapeMode="c",t._pointedSticker=G,Vr(C)},oe=Vi(t._ShapeHandleRecognizerSlot,{onlyFrom:".SNS.ShapeHandle",Threshold:0,onDragStarted:(C,G,E,H)=>{t._shapedStickers=t._selectedStickers,t._initialGeometries=t._selectedStickers.map(z=>z.Geometry),Qe(t._shapedStickers,t._ShapeMode,E,H)},onDragContinued:(C,G,E,H)=>{t._shapedStickers!=null&&Qe(t._shapedStickers,t._ShapeMode,E,H)},onDragFinished:(C,G,E,H)=>{t._shapedStickers!=null&&(Qe(t._shapedStickers,t._ShapeMode,E,H),B())},onDragCancelled:(C,G,E,H)=>{I()}}),Ve=(C,G)=>{t._ShapeMode=G,oe(C)};function Vt(C){return function(G){G.button===0&&V([C])}}const Et=new WeakMap,Re=new WeakMap;function Nr(C){let G=Et.get(C);return G==null&&Et.set(C,G=Vi(C,{onlyFrom:".builtinDraggable",neverFrom:".notBuiltinDraggable",Threshold:4,onDragStarted:(E,H,z,Z,Se)=>{Re.set(C,C.Geometry),Qe([C],"c",z,Z,[Re.get(C)])},onDragContinued:(E,H,z,Z)=>{Re.has(C)&&Qe([C],"c",z,Z,[Re.get(C)])},onDragFinished:(E,H,z,Z)=>{Re.has(C)&&(Qe([C],"c",z,Z,[Re.get(C)]),Re.delete(C))},onDragCancelled:(E,H,z,Z)=>{Re.has(C)&&Ke([C],[Re.get(C)]),Re.delete(C)}})),G}function ht(){if(t._shapedStickers==null)return"";const C={},G={};t._StickerList.filter(z=>!X(z)).forEach(z=>{const{y:Z,Height:Se}=z.Geometry,ae=Math.round(Z),be=Math.round(Z+Se/2),Ie=Math.round(Z+Se);C[ae]=C[Ie]=!0,G[be]=!0});const E={};t._shapedStickers.forEach(z=>{const{y:Z,Height:Se}=z.Geometry,ae=Math.round(Z),be=Math.round(Z+Se/2),Ie=Math.round(Z+Se);C[ae]&&(E[ae]="Edge"),C[be]&&E[be]!=="Edge"&&(E[be]="Center"),C[Ie]&&(E[Ie]="Edge"),G[ae]&&E[ae]!=="Edge"&&(E[ae]="Center"),G[be]&&E[be]!=="Edge"&&(E[be]="Center"),G[Ie]&&E[Ie]!=="Edge"&&(E[Ie]="Center")});const H=[];for(let z in E)E[z]!=null&&H.push(z);return nt`${H.map(z=>nt`
          <div class="SNS horizontalGuide ${E[z]}" style="top:${z}px"/>
        `)}`}function Ye(){if(t._shapedStickers==null)return"";const C={},G={};t._StickerList.filter(z=>!X(z)).forEach(z=>{const{x:Z,Width:Se}=z.Geometry,ae=Math.round(Z),be=Math.round(Z+Se/2),Ie=Math.round(Z+Se);C[ae]=C[Ie]=!0,G[be]=!0});const E={};t._shapedStickers.forEach(z=>{const{x:Z,Width:Se}=z.Geometry,ae=Math.round(Z),be=Math.round(Z+Se/2),Ie=Math.round(Z+Se);C[ae]&&(E[ae]="Edge"),C[be]&&E[be]!=="Edge"&&(E[be]="Center"),C[Ie]&&(E[Ie]="Edge"),G[ae]&&E[ae]!=="Edge"&&(E[ae]="Center"),G[be]&&E[be]!=="Edge"&&(E[be]="Center"),G[Ie]&&E[Ie]!=="Edge"&&(E[Ie]="Center")});const H=[];for(let z in E)E[z]!=null&&H.push(z);return nt`${H.map(z=>nt`
          <div class="SNS verticalGuide ${E[z]}" style="left:${z}px"/>
        `)}`}const Gt=i==null?void 0:qi(i);return nt`<div class="SNS BoardView ${n}" style=${Gt}
        onPointerDown=${ze} onPointerMove=${ze}
        onPointerUp=${ze} onPointerCancel=${ze}
      >
        ${i==null?nt`<div class="SNS Placeholder"><div>(no Board to show)</div></div>`:o==null?nt`<div class="SNS Placeholder"><div>(no Stickers to show)</div></div>`:o.map(C=>{if(!C.isVisible)return"";const G=C.Geometry,E=X(C);return nt`<${w0} Sticker=${C} key=${C.Id}
                  selected=${E&&s==="run"}
                  SelectionFrameStyle=${p}
                  Geometry=${G}
                  builtinDragging=${Nr(C)}
                  builtinSelection=${Vt(C)}
                />`})}

        ${o!=null&&s==="edit"?o.map(C=>{if(!C.isVisible)return"";if(C.isLocked)return nt`
                  <${cu} Sticker=${C} key=${C.Id+"c"}
                    onPointerDown=${ze} onPointerMove=${ze}
                    onPointerUp=${ze} onPointerCancel=${ze}
                  />
                `;{const G=X(C);return nt`
                  <${cu} Sticker=${C} key=${C.Id+"c"}
                    selected=${G}
                    onPointerEvent=${E=>ee(E,C)}
                  />
                `}}):""}

        ${a.length>0?a.filter(C=>C.isVisible&&!C.isLocked).map(C=>{const G=C.Id,E=C.Geometry;return nt`
                <${Qt} key=${G+"nw"} Mode="nw" Geometry=${E}
                  onPointerEvent=${H=>Ve(H,"nw")}/>
                <${Qt} key=${G+"n"}  Mode="n"  Geometry=${E}
                  onPointerEvent=${H=>Ve(H,"n")}/>
                <${Qt} key=${G+"ne"} Mode="ne" Geometry=${E}
                  onPointerEvent=${H=>Ve(H,"ne")}/>
                <${Qt} key=${G+"e"}  Mode="e"  Geometry=${E}
                  onPointerEvent=${H=>Ve(H,"e")}/>
                <${Qt} key=${G+"se"} Mode="se" Geometry=${E}
                  onPointerEvent=${H=>Ve(H,"se")}/>
                <${Qt} key=${G+"s"}  Mode="s"  Geometry=${E}
                  onPointerEvent=${H=>Ve(H,"s")}/>
                <${Qt} key=${G+"sw"} Mode="sw" Geometry=${E}
                  onPointerEvent=${H=>Ve(H,"sw")}/>
                <${Qt} key=${G+"w"}  Mode="w"  Geometry=${E}
                  onPointerEvent=${H=>Ve(H,"w")}/>
              `}):""}
        ${this._LassoStart==null?"":nt`<div class="SNS Lasso" style=${j()}></>`}
        ${ht()}
        ${Ye()}
      </div>`}}class w0 extends nr{constructor(){super(...arguments),Me(this,"_Sticker")}componentDidMount(){const e=this._Sticker;e._View=this.base,e._onMount!=null&&e._onMount()}componentWillUnmount(){const e=this._Sticker;e._View=void 0,e._onUnmount!=null&&e._onUnmount()}render(e){let{Sticker:t,selected:n,SelectionFrameStyle:i,Geometry:o,builtinSelection:u,builtinDragging:s}=e;this._Sticker=t;let{x:l,y:a,Width:h,Height:d}=o;Er("sticker x position",l),Er("sticker y position",a),un("sticker width",h),un("sticker height",d);const g=l!=null&&h!=null&&a!=null&&d!=null?`left:${l}px; top:${a}px; width:${h}px; height:${d}px; right:auto; bottom:auto;`:"";return nt`<div class="SNS Sticker ${n?"selected":""}" style="
        ${g};
        ${n&&i!=null?`outline:${i};`:""}
        ${qi(t)||""}
      ">
        ${t.Rendering({builtinSelection:u,builtinDragging:s})}
      </div>`}}class cu extends nr{render(e){let{Sticker:t,onPointerEvent:n,...i}=e,{x:o,y:u,Width:s,Height:l}=t.Geometry;const a=o!=null&&s!=null&&u!=null&&l!=null?`left:${o}px; top:${u}px; width:${s}px; height:${l}px; right:auto; bottom:auto;`:"";return nt`<div class="SNS Cover" style="${a}" ...${i}
        onPointerDown=${n} onPointerMove=${n}
        onPointerUp=${n} onPointerCancel=${n}
      />`}}class Qt extends nr{render(e){let{Mode:t,Geometry:n,onPointerEvent:i,...o}=e,{x:u,y:s,Width:l,Height:a}=n;const h=u-8,d=Math.round(u+l/2)-4,g=u+l,p=s-8,f=Math.round(s+a/2)-4,x=s+a;let b,y;switch(t){case"nw":b=`left:${h}px; top:${p}px;`,y="nwse";break;case"n":b=`left:${d}px; top:${p}px;`,y="ns";break;case"ne":b=`left:${g}px; top:${p}px;`,y="nesw";break;case"e":b=`left:${g}px; top:${f}px;`,y="ew";break;case"se":b=`left:${g}px; top:${x}px;`,y="nwse";break;case"s":b=`left:${d}px; top:${x}px;`,y="ns";break;case"sw":b=`left:${h}px; top:${x}px;`,y="nesw";break;case"w":b=`left:${h}px; top:${f}px;`,y="ew";break}return y="cursor:"+y+"-resize",nt`<div class="SNS ShapeHandle" style="${b} ${y}" ...${o}
        onPointerDown=${i} onPointerMove=${i}
        onPointerUp=${i} onPointerCancel=${i}
      />`}}window.SNS_BoardView=Yc;document.dispatchEvent(new CustomEvent("SNS_BoardView",{detail:window.SNS_BoardView}));const xe={},Yr={},qc={Id:xe,Name:xe,ForegroundColor:xe,BackgroundColor:xe,BackgroundTexture:xe,FontFamily:xe,FontSize:xe,FontWeight:xe,FontStyle:xe,LineHeight:xe,activeScript:xe,pendingScript:xe,Script:xe,editableValue:xe,Error:xe,ScriptError:xe},In=Object.assign({SnapToGrid:xe,GridWidth:xe,GridHeight:xe},qc),na=Object.assign({Index:xe},In),Ni=Object.assign({Lock:xe,Visibility:xe,Geometry:xe,Index:xe,Enabling:xe},qc);let me=new ne;const c=me.observed,k0={persistedProjectList:[],normalizedProjectList:[],selectedProjectName:void 0,selectedProjectIndex:void 0,Project:void 0,ProjectProperties:In,ProjectToPersist:void 0,DelayTimer:void 0,DelayLimitTimer:void 0,PersistenceRequested:!1,PersistenceState:"idle",Mode:"run",ViewState:0,BoardTree:[],BoardTreeState:0,selectedBoards:[],expandedBoards:[],BoardSelectionMayBeShiftedUp:!1,BoardSelectionMayBeShiftedDown:!1,BoardSelectionMayBeShiftedIn:!1,BoardSelectionMayBeShiftedOut:!1,chosenBoard:void 0,BoardProperties:na,StickerList:[],StickerGeometries:[],selectedStickers:[],StickerSelectionMayBeShiftedUp:!1,StickerSelectionMayBeShiftedDown:!1,StickerSelectionProperties:Ni,StickerSelectionGeometries:[],OperationHistoryState:0,mayUndoOperation:!1,mayRedoOperation:!1,ShelfIsFilled:!1,VisitHistoryState:0,mayVisitPrevBoard:!1,mayVisitNextBoard:!1,InspectorIsOpen:!1,InspectorPaneGroup:"Project",InspectorPaneChoice:"Browser",InspectorPaneIndex:0,InspectorMessage:"(no project)",ValueEditorIsOpen:!1,ValueEditorMode:"Project",ScriptEditorIsOpen:!1,ScriptEditorMode:"Project",ScriptEditorMessage:"",ConsoleIsOpen:!1,ConsoleValue:""};Object.assign(c,k0);let $0={},ia={};function Mn(r,e,t,n){const i=me.existingWidgetNamed("DesignerButton");r=ia.x+t,e=ia.y+n;const o=me.existingScreenNamed("MainScreen"),{width:u,height:s}=o.View.base.getBoundingClientRect();r=Math.max(0,Math.min(r,u-32)),e=Math.max(0,Math.min(e,s-32)),me.updateWidget(i,{Style:`left:${r}px; top:${e}px`})}const Xn=ra($0,{Threshold:1,onDragStarted:(r,e,t,n)=>{const i=me.existingWidgetNamed("DesignerButton"),{left:o,top:u}=i.View.base.getBoundingClientRect();ia={x:o,y:u},Mn(r,e,t,n)},onDragContinued:Mn,onDragFinished:Mn,onDragCancelled:Mn,onClicked:I0});function I0(r,e){const t=me.existingWidgetNamed("DesignerButton");t.View.base.style.visibility="hidden",Ut("Toolbox",r,e),c.InspectorIsOpen&&me.openDialog("Inspector"),c.ValueEditorIsOpen&&me.openDialog("ValueEditor"),c.ScriptEditorIsOpen&&me.openDialog("ScriptEditor")}function Zc(){const r=me.existingWidgetNamed("DesignerButton");r.View.base.style.visibility=c.Project==null?"hidden":"visible",me.closeDialog("Toolbox"),me.closeDialog("Inspector"),me.closeDialog("ValueEditor"),me.closeDialog("ScriptEditor")}function P0(){var r,e,t;return or`<${Yc}
      Mode=${c.Mode}
      Board=${c.chosenBoard} StickerList=${c.StickerList}
      selectedStickers=${c.selectedStickers}
      onSelectionChange=${n=>{c.selectedStickers=n.slice()}}
      LassoMode="contain"
      onGeometryChange=${(n,i)=>{Za(n,i)}}
      SnapToGrid=${((r=c.BoardProperties)==null?void 0:r.SnapToGrid)===!0}
       GridWidth=${qe((e=c.BoardProperties)==null?void 0:e.GridWidth)||10}
      GridHeight=${qe((t=c.BoardProperties)==null?void 0:t.GridHeight)||10}
    />`}const Jc=or`
    <option value="" disabled selected>please select</option>
    ${pg().map(r=>or`
        <optgroup label="${r.GroupLabel}">
          ${B0(r.BehaviorEntryList)}
        </optgroup>
      `)}
  `;function B0(r){return or`${r.map(e=>C0(e))}`}function C0(r){const{Name:e,Label:t,disabled:n}=r;return or`<option value=${e} disabled=${n}>${t}</>`}function V0(r){const e=r.length===0;return or`
      <option value="" disabled selected>please select</option>
      <optgroup label="from current Board">
        <option value="Board:standalone">as standalone WebApp</option>
        <option value="Board:embeddable">as embeddable Element</option>
      </optgroup>
      <optgroup label="from current Board and successors">
        <option value="Boards:standalone">as standalone WebApp</option>
        <option value="Boards:embeddable">as embeddable Element</option>
      </optgroup>
      <optgroup label="from selected Stickers">
        <option value="Stickers:standalone" disabled=${e}>as standalone WebApp</option>
        <option value="Stickers:embeddable" disabled=${e}>as embeddable Element</option>
      </optgroup>
    `}window.PUX=me;me.ImageFolder="./icons/";me.Style=`  #PUX_0 { background-image:url("/images/BinaryTexture_white.jpg") }
  #PUX_1 { left:31px; top:30px; width:161px; height:90px; right:auto; bottom:auto }

  #PUX_52 {
    left:210px; top:30px; width:32px; height:32px; right:auto; bottom:auto; 
    border:solid 1px #333333; border-radius:15px; 
  }

  #PUX_68 {
    left:3px; top:2px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/pen.png"); 
  }

  #PUX_79 { left:421px; top:629px; width:280px; height:151px; right:auto; bottom:auto }

  #PUX_80 {
    left:0px; top:31px; width:auto; height:auto; right:0px; bottom:-1px; 
    border:solid 1px #000000; 
  }

  #PUX_81 {
    left:auto; top:21px; width:24px; height:24px; right:47px; bottom:auto; 
    background-image:url("/images/trash.png"); 
  }

  #PUX_29 { left:31px; top:130px; width:130px; height:251px; right:auto; bottom:auto }

  #PUX_3 {
    left:8px; top:158px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/rotate-ccw.png"); 
  }

  #PUX_4 {
    left:37px; top:158px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/rotate-cw.png"); 
  }

  #PUX_5 {
    left:8px; top:68px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/plus.png"); 
  }

  #PUX_6 {
    left:37px; top:68px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/clone.png"); 
  }

  #PUX_7 {
    left:8px; top:127px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/scissors.png"); 
  }

  #PUX_8 {
    left:68px; top:127px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/clipboard-arrow-down.png"); 
  }

  #PUX_9 {
    left:37px; top:127px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/image133.png"); 
  }

  #PUX_34 {
    left:98px; top:127px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/minus.png"); 
  }

  #PUX_10 {
    left:68px; top:68px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/image95.png"); 
  }

  #PUX_11 {
    left:68px; top:98px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-down.png"); 
  }

  #PUX_12 {
    left:37px; top:98px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-up.png"); 
  }

  #PUX_22 {
    left:8px; top:98px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-up.png"); 
  }

  #PUX_25 {
    left:98px; top:98px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-down.png"); 
  }

  #PUX_13 {
    left:8px; top:37px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/draw-square.png"); 
  }

  #PUX_14 {
    left:98px; top:158px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-down-to-bracket.png"); 
  }

  #PUX_15 {
    left:68px; top:158px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-up-from-bracket.png"); 
  }

  #PUX_105 {
    left:68px; top:158px; width:24px; height:24px; right:auto; bottom:auto; 
    border-radius:0px; 
  }

  #PUX_16 {
    left:37px; top:37px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/pen-ruler.png"); 
  }

  #PUX_17 {
    left:37px; top:188px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/chevron-right.png"); 
  }

  #PUX_18 {
    left:8px; top:188px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/chevron-left.png"); 
  }

  #PUX_19 {
    left:98px; top:188px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/search.png"); 
  }

  #PUX_20 {
    left:68px; top:37px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/message-square-chat.png"); 
  }

  #PUX_21 {
    left:68px; top:188px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/house-line.png"); 
  }

  #PUX_30 {
    left:98px; top:217px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/printer.png"); 
  }

  #PUX_33 {
    left:98px; top:37px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/cloud-wired.png"); 
  }

  #PUX_32 {
    left:8px; top:217px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/terminal.png"); 
  }

  #PUX_31 {
    left:68px; top:217px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/clapperboard-play.png"); 
  }

  #PUX_35 {
    left:98px; top:68px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/square-code.png"); 
  }

  #PUX_57 { left:421px; top:130px; width:280px; height:220px; right:auto; bottom:auto }

  #PUX_53 {
    left:auto; top:34px; width:24px; height:24px; right:5px; bottom:auto; 
    background-image:url("/images/xmark.png"); 
  }

  #PUX_54 {
    left:auto; top:34px; width:24px; height:24px; right:36px; bottom:auto; 
    background-image:url("/images/check.png"); 
  }

  #PUX_55 {
    left:5px; top:60px; width:auto; height:auto; right:5px; bottom:30px; 
    border:solid 1px #000000; 
  }

  #PUX_56 { left:5px; top:auto; width:auto; height:29px; right:40px; bottom:1px }

  #PUX_58 {
    left:auto; top:auto; width:24px; height:24px; right:7px; bottom:3px; 
    background-image:url("/images/triangle-exclamation.png"); 
  }

  #PUX_59 {
    left:5px; top:34px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/book-open.png"); 
  }

  #PUX_60 {
    left:64px; top:34px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/square.png"); 
  }

  #PUX_61 {
    left:35px; top:34px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/file.png"); 
  }

  #PUX_43 { left:181px; top:130px; width:221px; height:251px; right:auto; bottom:auto }

  #PUX_36 {
    left:8px; top:37px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/book-open.png"); 
  }

  #PUX_37 {
    left:67px; top:37px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/square.png"); 
  }

  #PUX_38 {
    left:37px; top:37px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/file.png"); 
  }

  #PUX_39 {
    left:138px; top:37px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/sliders.png"); 
  }

  #PUX_40 {
    left:108px; top:37px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/list.png"); 
  }

  #PUX_41 { left:0px; top:60px; width:auto; height:16px; right:0px; bottom:auto }

  #PUX_42 {
    left:167px; top:37px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/square-code.png"); 
  }

  #PUX_92 {
    left:5px; top:auto; width:auto; height:29px; right:5px; bottom:3px; 
    padding:6px 0px 0px 0px;
  }

  #PUX_50 { left:0px; top:69px; width:auto; height:auto; right:0px; bottom:31px }
  #PUX_69 { left:421px; top:380px; width:280px; height:220px; right:auto; bottom:auto }

  #PUX_88 {
    left:5px; top:59px; width:auto; height:auto; right:5px; bottom:5px; 
    border:solid 1px #000000; 
  }

  #PUX_70 {
    left:5px; top:33px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/book-open.png"); 
  }

  #PUX_71 {
    left:64px; top:33px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/square.png"); 
  }

  #PUX_72 {
    left:35px; top:33px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/file.png"); 
  }

  #PUX_104 { left:31px; top:420px; width:280px; height:336px; right:auto; bottom:auto }
  #PUX_96 { left:5px; top:29px; width:147px; height:29px; right:auto; bottom:auto }

  #PUX_97 {
    left:5px; top:59px; width:auto; height:auto; right:5px; bottom:156px; 
    background-color:#eeeeee; 
    border:solid 1px #888888; border-radius:0px; 
  }

  #PUX_93 { left:5px; top:auto; width:90px; height:29px; right:auto; bottom:117px }
  #PUX_98 { left:auto; top:auto; width:90px; height:29px; right:5px; bottom:117px }
  #PUX_100 { left:5px; top:auto; width:auto; height:29px; right:5px; bottom:48px }
  #PUX_94 { left:5px; top:auto; width:147px; height:29px; right:auto; bottom:77px }
  #PUX_95 { left:5px; top:auto; width:90px; height:29px; right:auto; bottom:8px }
  #PUX_99 { left:auto; top:auto; width:90px; height:29px; right:5px; bottom:8px }
  #PUX_106 { background-image:url("/images/BinaryTexture_white_768x1024.jpg") }

  #PUX_109 {
    left:20px; top:19px; width:242px; height:610px; right:auto; bottom:auto; 
    border:dotted 1px #000000; 
  }

  #PUX_134 { left:6px; top:0px; width:221px; height:29px; right:auto; bottom:auto }
  #PUX_135 { left:6px; top:31px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_136 { left:6px; top:61px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_227 { left:95px; top:31px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_228 { left:95px; top:61px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_229 { left:auto; top:101px; width:21px; height:21px; right:6px; bottom:auto }
  #PUX_137 { left:6px; top:171px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_138 { left:6px; top:201px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_230 { left:95px; top:201px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_139 { left:6px; top:230px; width:101px; height:29px; right:auto; bottom:auto }
  #PUX_231 { left:auto; top:230px; width:53px; height:29px; right:7px; bottom:auto }
  #PUX_140 { left:6px; top:261px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_232 { left:auto; top:266px; width:21px; height:21px; right:6px; bottom:auto }
  #PUX_141 { left:6px; top:291px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_233 { left:auto; top:296px; width:21px; height:21px; right:6px; bottom:auto }
  #PUX_142 { left:6px; top:320px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_234 { left:auto; top:320px; width:40px; height:29px; right:6px; bottom:auto }
  #PUX_143 { left:6px; top:351px; width:121px; height:29px; right:auto; bottom:auto }
  #PUX_235 { left:auto; top:351px; width:53px; height:29px; right:7px; bottom:auto }
  #PUX_144 { left:6px; top:391px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_145 { left:6px; top:420px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_236 { left:auto; top:420px; width:40px; height:29px; right:6px; bottom:auto }
  #PUX_146 { left:6px; top:451px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_148 { left:6px; top:130px; width:101px; height:29px; right:auto; bottom:auto }
  #PUX_243 { left:auto; top:130px; width:52px; height:29px; right:78px; bottom:auto }
  #PUX_241 { left:auto; top:130px; width:53px; height:29px; right:7px; bottom:auto }

  #PUX_242 {
    left:auto; top:130px; width:21px; height:29px; right:59px; bottom:auto; 
    text-align:center; 
  }

  #PUX_147 { left:6px; top:101px; width:101px; height:29px; right:auto; bottom:auto }
  #PUX_237 { left:95px; top:451px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_149 { left:6px; top:491px; width:71px; height:29px; right:auto; bottom:auto }

  #PUX_240 {
    left:auto; top:491px; width:24px; height:24px; right:4px; bottom:auto; 
    background-image:url("/images/image146.png"); 
  }

  #PUX_150 {
    left:6px; top:520px; width:auto; height:auto; right:6px; bottom:9px; 
    border:solid 1px #000000; 
  }

  #PUX_110 {
    left:271px; top:19px; width:242px; height:610px; right:auto; bottom:auto; 
    border:dotted 1px #000000; 
  }

  #PUX_151 { left:5px; top:0px; width:221px; height:29px; right:auto; bottom:auto }
  #PUX_152 { left:5px; top:31px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_153 { left:5px; top:61px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_216 { left:95px; top:31px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_217 { left:95px; top:61px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_218 { left:auto; top:101px; width:21px; height:21px; right:7px; bottom:auto }
  #PUX_154 { left:5px; top:171px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_155 { left:5px; top:201px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_219 { left:95px; top:201px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_156 { left:5px; top:230px; width:101px; height:29px; right:auto; bottom:auto }
  #PUX_220 { left:auto; top:230px; width:53px; height:29px; right:7px; bottom:auto }
  #PUX_157 { left:5px; top:261px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_221 { left:auto; top:266px; width:21px; height:21px; right:7px; bottom:auto }
  #PUX_158 { left:5px; top:291px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_222 { left:auto; top:296px; width:21px; height:21px; right:7px; bottom:auto }
  #PUX_159 { left:5px; top:320px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_223 { left:auto; top:320px; width:40px; height:29px; right:7px; bottom:auto }
  #PUX_160 { left:5px; top:351px; width:121px; height:29px; right:auto; bottom:auto }
  #PUX_224 { left:auto; top:351px; width:53px; height:29px; right:7px; bottom:auto }
  #PUX_161 { left:5px; top:391px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_162 { left:5px; top:420px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_225 { left:auto; top:420px; width:40px; height:29px; right:7px; bottom:auto }
  #PUX_163 { left:5px; top:451px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_164 { left:5px; top:130px; width:101px; height:29px; right:auto; bottom:auto }
  #PUX_244 { left:auto; top:130px; width:52px; height:29px; right:79px; bottom:auto }
  #PUX_245 { left:auto; top:130px; width:53px; height:29px; right:7px; bottom:auto }

  #PUX_246 {
    left:auto; top:130px; width:21px; height:29px; right:60px; bottom:auto; 
    text-align:center; 
  }

  #PUX_165 { left:5px; top:101px; width:101px; height:29px; right:auto; bottom:auto }
  #PUX_226 { left:95px; top:451px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_166 { left:5px; top:491px; width:71px; height:29px; right:auto; bottom:auto }

  #PUX_239 {
    left:auto; top:491px; width:24px; height:26px; right:6px; bottom:auto; 
    background-image:url("/images/image146.png"); 
  }

  #PUX_167 {
    left:5px; top:520px; width:auto; height:auto; right:7px; bottom:9px; 
    border:solid 1px #000000; 
  }

  #PUX_111 {
    left:520px; top:19px; width:242px; height:791px; right:auto; bottom:auto; 
    border:dotted 1px #000000; 
  }

  #PUX_168 { left:5px; top:0px; width:221px; height:29px; right:auto; bottom:auto }
  #PUX_169 { left:5px; top:31px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_170 { left:5px; top:61px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_190 { left:95px; top:31px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_191 { left:95px; top:61px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_171 { left:5px; top:190px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_172 { left:5px; top:221px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_192 { left:auto; top:221px; width:52px; height:29px; right:77px; bottom:auto }
  #PUX_193 { left:auto; top:221px; width:53px; height:29px; right:7px; bottom:auto }

  #PUX_194 {
    left:auto; top:221px; width:21px; height:29px; right:58px; bottom:auto; 
    text-align:center; 
  }

  #PUX_195 { left:auto; top:190px; width:52px; height:31px; right:77px; bottom:auto }
  #PUX_196 { left:auto; top:190px; width:53px; height:29px; right:7px; bottom:auto }

  #PUX_197 {
    left:auto; top:190px; width:21px; height:29px; right:58px; bottom:auto; 
    text-align:center; 
  }

  #PUX_173 { left:5px; top:251px; width:71px; height:29px; right:auto; bottom:auto }

  #PUX_198 {
    left:auto; top:283px; width:24px; height:24px; right:32px; bottom:auto; 
    background-image:url("/images/arrow-sm-down.png"); 
  }

  #PUX_199 {
    left:auto; top:283px; width:24px; height:24px; right:58px; bottom:auto; 
    background-image:url("/images/arrow-sm-up.png"); 
  }

  #PUX_200 {
    left:auto; top:285px; width:21px; height:24px; right:84px; bottom:auto; 
    background-color:rgba(255, 255, 255, 0); 
    border-style:solid; border-width:2px 0px 0px 0px; border-color:#000000; 
  }

  #PUX_201 {
    left:auto; top:285px; width:24px; height:24px; right:82px; bottom:auto; 
    background-image:url("/images/arrow-sm-up.png"); 
  }

  #PUX_202 {
    left:auto; top:280px; width:21px; height:24px; right:8px; bottom:auto; 
    background-color:rgba(255, 255, 255, 0); 
    border-style:solid; border-width:0px 0px 2px 0px; border-color:#000000; 
  }

  #PUX_203 {
    left:auto; top:280px; width:24px; height:24px; right:8px; bottom:auto; 
    background-image:url("/images/arrow-sm-down.png"); 
  }

  #PUX_204 { left:auto; top:251px; width:53px; height:29px; right:7px; bottom:auto }
  #PUX_174 { left:5px; top:130px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_205 { left:auto; top:130px; width:21px; height:21px; right:5px; bottom:auto }
  #PUX_175 { left:5px; top:101px; width:221px; height:29px; right:auto; bottom:auto }
  #PUX_176 { left:5px; top:311px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_177 { left:5px; top:341px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_206 { left:95px; top:341px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_178 { left:5px; top:370px; width:101px; height:29px; right:auto; bottom:auto }
  #PUX_207 { left:auto; top:370px; width:53px; height:29px; right:7px; bottom:auto }
  #PUX_179 { left:5px; top:401px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_208 { left:auto; top:406px; width:21px; height:21px; right:5px; bottom:auto }
  #PUX_180 { left:5px; top:430px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_209 { left:auto; top:436px; width:21px; height:21px; right:5px; bottom:auto }
  #PUX_181 { left:5px; top:460px; width:81px; height:29px; right:auto; bottom:auto }
  #PUX_210 { left:auto; top:460px; width:40px; height:29px; right:7px; bottom:auto }
  #PUX_182 { left:5px; top:491px; width:121px; height:29px; right:auto; bottom:auto }
  #PUX_211 { left:auto; top:491px; width:53px; height:29px; right:7px; bottom:auto }
  #PUX_183 { left:5px; top:531px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_184 { left:5px; top:560px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_212 { left:auto; top:560px; width:40px; height:29px; right:7px; bottom:auto }
  #PUX_185 { left:5px; top:591px; width:71px; height:29px; right:auto; bottom:auto }
  #PUX_213 { left:95px; top:591px; width:auto; height:29px; right:7px; bottom:auto }
  #PUX_186 { left:5px; top:161px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_214 { left:auto; top:161px; width:21px; height:21px; right:5px; bottom:auto }
  #PUX_187 { left:5px; top:631px; width:90px; height:29px; right:auto; bottom:auto }
  #PUX_215 { left:auto; top:631px; width:21px; height:21px; right:5px; bottom:auto }
  #PUX_188 { left:5px; top:671px; width:71px; height:29px; right:auto; bottom:auto }

  #PUX_238 {
    left:auto; top:671px; width:24px; height:26px; right:5px; bottom:auto; 
    background-image:url("/images/image146.png"); 
  }

  #PUX_189 {
    left:5px; top:700px; width:auto; height:auto; right:7px; bottom:10px; 
    border:solid 1px #000000; 
  }

  #PUX_107 {
    left:20px; top:700px; width:242px; height:270px; right:auto; bottom:auto; 
    border:dotted 1px #000000; 
  }

  #PUX_112 { left:6px; top:0px; width:225px; height:29px; right:auto; bottom:auto }

  #PUX_120 {
    left:6px; top:56px; width:auto; height:auto; right:6px; bottom:43px; 
    background-color:#eeeeee; 
    border:solid 1px #888888; border-radius:0px; 
  }

  #PUX_121 { left:6px; top:auto; width:auto; height:29px; right:6px; bottom:6px }

  #PUX_119 {
    left:auto; top:24px; width:24px; height:24px; right:7px; bottom:auto; 
    background-image:url("/images/minus.png"); 
  }

  #PUX_113 {
    left:0px; top:27px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/plus.png"); 
  }

  #PUX_114 {
    left:30px; top:27px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/clone.png"); 
  }

  #PUX_115 {
    left:156px; top:24px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-down.png"); 
  }

  #PUX_116 {
    left:130px; top:24px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-up.png"); 
  }

  #PUX_117 {
    left:71px; top:24px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/image21.png"); 
  }

  #PUX_118 {
    left:95px; top:24px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/image23.png"); 
  }

  #PUX_108 {
    left:271px; top:700px; width:242px; height:270px; right:auto; bottom:auto; 
    border:dotted 1px #000000; 
  }

  #PUX_122 { left:5px; top:0px; width:225px; height:29px; right:auto; bottom:auto }

  #PUX_132 {
    left:5px; top:56px; width:auto; height:auto; right:7px; bottom:43px; 
    background-color:#eeeeee; 
    border:solid 1px #888888; border-radius:0px; 
  }

  #PUX_133 { left:5px; top:auto; width:auto; height:29px; right:7px; bottom:6px }

  #PUX_131 {
    left:auto; top:24px; width:24px; height:24px; right:9px; bottom:auto; 
    background-image:url("/images/minus.png"); 
  }

  #PUX_123 {
    left:0px; top:27px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/plus.png"); 
  }

  #PUX_124 {
    left:29px; top:27px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/clone.png"); 
  }

  #PUX_125 {
    left:129px; top:26px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-down.png"); 
  }

  #PUX_126 {
    left:100px; top:26px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-up.png"); 
  }

  #PUX_127 {
    left:71px; top:26px; width:21px; height:24px; right:auto; bottom:auto; 
    background-color:rgba(255, 255, 255, 0); 
    border-style:solid; border-width:2px 0px 0px 0px; border-color:#000000; 
  }

  #PUX_128 {
    left:69px; top:26px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-up.png"); 
  }

  #PUX_129 {
    left:161px; top:26px; width:21px; height:24px; right:auto; bottom:auto; 
    background-color:rgba(255, 255, 255, 0); 
    border-style:solid; border-width:0px 0px 2px 0px; border-color:#000000; 
  }

  #PUX_130 {
    left:159px; top:26px; width:24px; height:24px; right:auto; bottom:auto; 
    background-image:url("/images/arrow-sm-down.png"); 
  }

`;me.ScreenSet={MainScreen:{Name:"MainScreen",Id:"PUX_0",Width:768,Height:1024,packedGeometry:{x:31,y:30,Width:669,Height:749},WidgetList:[{Type:"Placeholder",Name:"BoardView",Classes:"Placeholder empty Container",x:31,Width:161,y:30,Height:90,Id:"PUX_1"},{Type:"Container",Name:"DesignerButton",Classes:"Container",x:210,Width:32,y:30,Height:32,Id:"PUX_52",WidgetList:[{Type:"Icon",Classes:"Icon",Value:'url("/images/pen.png")',Color:"black",Id:"PUX_68"}]},{Type:"ResizableDialog",Name:"Console",Classes:"ResizableDialog Container",x:421,Width:280,y:629,Height:151,Id:"PUX_79",WidgetList:[{Type:"TextInput",Name:"ConsoleView",Classes:"TextInput no-resize",Anchoring:"c",Value:"(ready for operation)",Id:"PUX_80"},{Type:"Icon",Name:"ConsoleClearButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/trash.png")',Color:"black",Id:"PUX_81"}]},{Type:"Dialog",Name:"Toolbox",Classes:"Dialog Container ",x:31,Width:130,y:130,Height:251,Id:"PUX_29",WidgetList:[{Type:"Icon",Name:"UndoButton",Classes:"Icon",Value:'url("/images/rotate-ccw.png")',Color:"black",Id:"PUX_3"},{Type:"Icon",Name:"RedoButton",Classes:"Icon",Value:'url("/images/rotate-cw.png")',Color:"black",Id:"PUX_4"},{Type:"PseudoDropDown",Name:"StickerCreateButton",Classes:"PseudoDropDown",Value:'url("/images/plus.png")',Color:"black",Id:"PUX_5"},{Type:"Icon",Name:"StickerDuplicateButton",Classes:"Icon",Value:'url("/images/clone.png")',Color:"black",Id:"PUX_6"},{Type:"Icon",Name:"StickerCutButton",Classes:"Icon",Value:'url("/images/scissors.png")',Color:"black",Id:"PUX_7"},{Type:"PseudoDropDown",Name:"StickerPasteButton",Classes:"PseudoDropDown",Value:'url("/images/clipboard-arrow-down.png")',Color:"black",Id:"PUX_8"},{Type:"Icon",Name:"StickerCopyButton",Classes:"Icon",Value:'url("/images/image133.png")',Color:"black",Id:"PUX_9"},{Type:"Icon",Name:"StickerDeleteButton",Classes:"Icon",Value:'url("/images/minus.png")',Color:"black",Id:"PUX_34"},{Type:"Icon",Name:"StickerConfigureButton",Classes:"Icon",Value:'url("/images/image95.png")',Color:"black",Id:"PUX_10"},{Type:"Icon",Name:"StickerShiftDownButton",Classes:"Icon",Value:'url("/images/arrow-sm-down.png")',Color:"black",Id:"PUX_11"},{Type:"Icon",Name:"StickerShiftUpButton",Classes:"Icon",Value:'url("/images/arrow-sm-up.png")',Color:"black",Id:"PUX_12"},{Type:"Icon",Name:"StickerShiftToTopButton",Classes:"Icon",Value:'url("/images/arrow-sm-up.png")',Color:"black",Id:"PUX_22"},{Type:"Icon",Name:"StickerShiftToBottomButton",Classes:"Icon",Value:'url("/images/arrow-sm-down.png")',Color:"black",Id:"PUX_25"},{Type:"Icon",Name:"ModeButton",Classes:"Icon",Value:'url("/images/draw-square.png")',Color:"black",Id:"PUX_13"},{Type:"PseudoDropDown",Name:"ExportButton",Classes:"PseudoDropDown",Value:'url("/images/arrow-down-to-bracket.png")',Color:"black",Id:"PUX_14"},{Type:"Icon",Name:"ImportButton",Classes:"Icon",Value:'url("/images/arrow-up-from-bracket.png")',Color:"black",Id:"PUX_15"},{Type:"FileInput",Name:"FileInput",Classes:"FileInput",Placeholder:"",Id:"PUX_105"},{Type:"Icon",Name:"InspectorButton",Classes:"Icon",Value:'url("/images/pen-ruler.png")',Color:"black",Id:"PUX_16"},{Type:"Icon",Name:"VisitNextButton",Classes:"Icon",Value:'url("/images/chevron-right.png")',Color:"black",Id:"PUX_17"},{Type:"Icon",Name:"VisitPrevButton",Classes:"Icon",Value:'url("/images/chevron-left.png")',Color:"black",Id:"PUX_18"},{Type:"Icon",Name:"SearchButton",Classes:"Icon",Value:'url("/images/search.png")',Color:"black",Id:"PUX_19"},{Type:"Icon",Name:"ChatButton",Classes:"Icon",Value:'url("/images/message-square-chat.png")',Color:"black",Id:"PUX_20"},{Type:"Icon",Name:"VisitHomeButton",Classes:"Icon",Value:'url("/images/house-line.png")',Color:"black",Id:"PUX_21"},{Type:"Icon",Name:"BoardPrintButton",Classes:"Icon",Value:'url("/images/printer.png")',Color:"black",Id:"PUX_30"},{Type:"Icon",Name:"ProjectBrowserButton",Classes:"Icon",Value:'url("/images/cloud-wired.png")',Color:"black",Id:"PUX_33"},{Type:"Icon",Name:"ConsoleButton",Classes:"Icon",Value:'url("/images/terminal.png")',Color:"black",Id:"PUX_32"},{Type:"PseudoDropDown",Name:"AppletGeneratorButton",Classes:"PseudoDropDown",Value:'url("/images/clapperboard-play.png")',Color:"black",Id:"PUX_31"},{Type:"Icon",Name:"StickerScriptButton",Classes:"Icon",Value:'url("/images/square-code.png")',Color:"black",Id:"PUX_35"}]},{Type:"ResizableDialog",Name:"ScriptEditor",Classes:"ResizableDialog Container",x:421,Width:280,y:130,Height:220,Id:"PUX_57",WidgetList:[{Type:"Icon",Name:"WithdrawButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/xmark.png")',Color:"black",Id:"PUX_53"},{Type:"Icon",Name:"ApplyButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/check.png")',Color:"black",Id:"PUX_54"},{Type:"TextInput",Name:"ScriptInput",Classes:"TextInput no-resize",Anchoring:"c",Placeholder:"Enter Script",Value:"",Id:"PUX_55"},{Type:"TextView",Name:"MessageView",Classes:"TextView",Anchoring:"s",Value:"",Id:"PUX_56"},{Type:"Icon",Name:"MessageViewButton",Classes:"Icon",Anchoring:"se",Value:'url("/images/triangle-exclamation.png")',Color:"black",Id:"PUX_58"},{Type:"Icon",Name:"ProjectModeButton",Classes:"Icon",Value:'url("/images/book-open.png")',Color:"black",Id:"PUX_59"},{Type:"Icon",Name:"StickerModeButton",Classes:"Icon",Value:'url("/images/square.png")',Color:"black",Id:"PUX_60"},{Type:"Icon",Name:"BoardModeButton",Classes:"Icon",Value:'url("/images/file.png")',Color:"black",Id:"PUX_61"}]},{Type:"ResizableDialog",Name:"Inspector",Classes:"ResizableDialog Container",x:181,Width:221,y:130,Height:251,Id:"PUX_43",WidgetList:[{Type:"Icon",Name:"ProjectModeButton",Classes:"Icon",Value:'url("/images/book-open.png")',Color:"black",Id:"PUX_36"},{Type:"Icon",Name:"StickerModeButton",Classes:"Icon",Value:'url("/images/square.png")',Color:"black",Id:"PUX_37"},{Type:"Icon",Name:"BoardModeButton",Classes:"Icon",Value:'url("/images/file.png")',Color:"black",Id:"PUX_38"},{Type:"Icon",Name:"ConfigurationPaneButton",Classes:"Icon",Value:'url("/images/sliders.png")',Color:"black",Id:"PUX_39"},{Type:"Icon",Name:"BrowserPaneButton",Classes:"Icon",Value:'url("/images/list.png")',Color:"black",Id:"PUX_40"},{Type:"horizontalSeparator",Classes:"horizontalSeparator",Anchoring:"n",Id:"PUX_41"},{Type:"Icon",Name:"ScriptEditorButton",Classes:"Icon",Value:'url("/images/square-code.png")',Color:"black",Id:"PUX_42"},{Type:"Text",Name:"MessageView",Classes:"Text",Anchoring:"s",Value:"(no error found)",Id:"PUX_92"},{Type:"Deck",Name:"Deck",Classes:"Deck empty Container",Anchoring:"c",Id:"PUX_50"}]},{Type:"ResizableDialog",Name:"ValueEditor",Classes:"ResizableDialog Container",x:421,Width:280,y:380,Height:220,Id:"PUX_69",WidgetList:[{Type:"TextInput",Name:"ValueInput",Classes:"TextInput no-resize",Anchoring:"c",Placeholder:"Enter Value",Value:"",Id:"PUX_88"},{Type:"Icon",Name:"ProjectModeButton",Classes:"Icon",Value:'url("/images/book-open.png")',Color:"black",Id:"PUX_70"},{Type:"Icon",Name:"StickerModeButton",Classes:"Icon",Value:'url("/images/square.png")',Color:"black",Id:"PUX_71"},{Type:"Icon",Name:"BoardModeButton",Classes:"Icon",Value:'url("/images/file.png")',Color:"black",Id:"PUX_72"}]},{Type:"ResizableDialog",Name:"ProjectBrowser",Classes:"ResizableDialog Container",x:31,Width:280,y:420,Height:336,Id:"PUX_104",WidgetList:[{Type:"Label",Classes:"Label",Value:"Recent Projects:",Id:"PUX_96"},{Type:"FlatListView",Name:"ProjectListView",Classes:"FlatListView",Anchoring:"c",Id:"PUX_97"},{Type:"Button",Name:"ProjectOpenButton",Classes:"vertically-centered Button",Anchoring:"sw",Value:"Open",Id:"PUX_93"},{Type:"Button",Name:"ProjectPurgeButton",Classes:"vertically-centered Button",Anchoring:"se",Value:"Purge",Id:"PUX_98"},{Type:"TextlineInput",Name:"ProjectNameInput",Classes:"TextlineInput",Anchoring:"s",Placeholder:"Enter unique Project Name",Value:"",Id:"PUX_100"},{Type:"Label",Classes:"Label",Anchoring:"sw",Value:"Project Name:",Id:"PUX_94"},{Type:"Button",Name:"ProjectCreateButton",Classes:"vertically-centered Button",Anchoring:"sw",Value:"New",Id:"PUX_95"},{Type:"Button",Name:"ProjectRenameButton",Classes:"vertically-centered Button",Anchoring:"se",Value:"Rename",Id:"PUX_99"}]}]},"Stuff Screen":{Name:"Stuff Screen",Id:"PUX_106",Width:768,Height:1024,packedGeometry:{x:20,y:19,Width:741,Height:950},WidgetList:[{Type:"Card",Name:"ProjectConfigurationPane",Classes:"Card Container",x:20,Width:242,y:19,Height:610,Id:"PUX_109",WidgetList:[{Type:"Label",Classes:"Label",Value:"Project Configuration",Id:"PUX_134"},{Type:"Label",Classes:"Label",Value:"Id",Id:"PUX_135"},{Type:"Label",Classes:"Label",Value:"Name",Id:"PUX_136"},{Type:"TextlineInput",Name:"IdView",Classes:"TextlineInput readonly",Anchoring:"n",Placeholder:"",Value:"",Id:"PUX_227"},{Type:"TextlineInput",Name:"NameView",Classes:"TextlineInput readonly",Anchoring:"n",Placeholder:"",Value:"",Id:"PUX_228"},{Type:"Checkbox",Name:"SnapToGridCheck",Classes:"Checkbox",Anchoring:"ne",Value:!0,Id:"PUX_229"},{Type:"Label",Classes:"Label",Value:"Typography",Id:"PUX_137"},{Type:"Label",Classes:"Label",Value:"Font",Id:"PUX_138"},{Type:"TextlineInput",Name:"FontFamilyInput",Classes:"TextlineInput",Anchoring:"n",Placeholder:"Enter Font Family",Value:"",Id:"PUX_230"},{Type:"Label",Classes:"Label",Value:"Font Size [px]",Id:"PUX_139"},{Type:"NumberInput",Name:"FontSizeInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"",Value:"",Id:"PUX_231"},{Type:"Label",Classes:"Label",Value:"Bold",Id:"PUX_140"},{Type:"Checkbox",Name:"BoldCheck",Classes:"Checkbox",Anchoring:"ne",Value:!0,Id:"PUX_232"},{Type:"Label",Classes:"Label",Value:"Italic",Id:"PUX_141"},{Type:"Checkbox",Name:"ItalicCheck",Classes:"Checkbox",Anchoring:"ne",Value:!0,Id:"PUX_233"},{Type:"Label",Classes:"Label",Value:"Text Color",Id:"PUX_142"},{Type:"ColorInput",Name:"TextColorInput",Classes:"ColorInput",Anchoring:"ne",Id:"PUX_234"},{Type:"Label",Classes:"Label",Value:"Line Height [px]",Id:"PUX_143"},{Type:"NumberInput",Name:"LineHeightInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"",Value:"",Id:"PUX_235"},{Type:"Label",Classes:"Label",Value:"Background",Id:"PUX_144"},{Type:"Label",Classes:"Label",Value:"Color",Id:"PUX_145"},{Type:"ColorInput",Name:"BackgroundColorInput",Classes:"ColorInput",Anchoring:"ne",Id:"PUX_236"},{Type:"Label",Classes:"Label",Value:"Texture",Id:"PUX_146"},{Type:"Label",Classes:"Label",Value:"Grid Size [px]",Id:"PUX_148"},{Type:"NumberInput",Name:"GridWidthInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"W",Value:"",Id:"PUX_243"},{Type:"NumberInput",Name:"GridHeightInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"H",Value:"",Id:"PUX_241"},{Type:"Label",Classes:"Label",Anchoring:"ne",Value:"x",Id:"PUX_242"},{Type:"Label",Classes:"Label",Value:"Snap-to-Grid",Id:"PUX_147"},{Type:"URLInput",Name:"TextureInput",Classes:"URLInput",Anchoring:"n",Placeholder:"Enter URL",Value:"",Id:"PUX_237"},{Type:"Label",Classes:"Label",Value:"Value",Id:"PUX_149"},{Type:"Icon",Name:"ValueEditorButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/image146.png")',Color:"black",Id:"PUX_240"},{Type:"TextInput",Name:"ValueInput",Classes:"TextInput no-resize",Anchoring:"c",Placeholder:"Enter Value",Value:"",Id:"PUX_150"}]},{Type:"Card",Name:"BoardConfigurationPane",Classes:"Card Container",x:271,Width:242,y:19,Height:610,Id:"PUX_110",WidgetList:[{Type:"Label",Classes:"Label",Value:"Board Configuration",Id:"PUX_151"},{Type:"Label",Classes:"Label",Value:"Id",Id:"PUX_152"},{Type:"Label",Classes:"Label",Value:"Name",Id:"PUX_153"},{Type:"TextlineInput",Name:"IdView",Classes:"TextlineInput readonly",Anchoring:"n",Placeholder:"",Value:"",Id:"PUX_216"},{Type:"TextlineInput",Name:"NameInput",Classes:"TextlineInput",Anchoring:"n",Placeholder:"Enter Name",Value:"",Id:"PUX_217"},{Type:"Checkbox",Name:"SnapToGridCheck",Classes:"Checkbox",Anchoring:"ne",Value:!0,Id:"PUX_218"},{Type:"Label",Classes:"Label",Value:"Typography",Id:"PUX_154"},{Type:"Label",Classes:"Label",Value:"Font",Id:"PUX_155"},{Type:"TextlineInput",Name:"FontFamilyInput",Classes:"TextlineInput",Anchoring:"n",Placeholder:"Enter Font Family",Value:"",Id:"PUX_219"},{Type:"Label",Classes:"Label",Value:"Font Size [px]",Id:"PUX_156"},{Type:"NumberInput",Name:"FontSizeInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"",Value:"",Id:"PUX_220"},{Type:"Label",Classes:"Label",Value:"Bold",Id:"PUX_157"},{Type:"Checkbox",Name:"BoldCheck",Classes:"Checkbox",Anchoring:"ne",Value:!0,Id:"PUX_221"},{Type:"Label",Classes:"Label",Value:"Italic",Id:"PUX_158"},{Type:"Checkbox",Name:"ItalicCheck",Classes:"Checkbox",Anchoring:"ne",Value:!0,Id:"PUX_222"},{Type:"Label",Classes:"Label",Value:"Text Color",Id:"PUX_159"},{Type:"ColorInput",Name:"TextColorInput",Classes:"ColorInput",Anchoring:"ne",Id:"PUX_223"},{Type:"Label",Classes:"Label",Value:"Line Height [px]",Id:"PUX_160"},{Type:"NumberInput",Name:"LineHeightInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"",Value:"",Id:"PUX_224"},{Type:"Label",Classes:"Label",Value:"Background",Id:"PUX_161"},{Type:"Label",Classes:"Label",Value:"Color",Id:"PUX_162"},{Type:"ColorInput",Name:"BackgroundColorInput",Classes:"ColorInput",Anchoring:"ne",Id:"PUX_225"},{Type:"Label",Classes:"Label",Value:"Texture",Id:"PUX_163"},{Type:"Label",Classes:"Label",Value:"Grid Size [px]",Id:"PUX_164"},{Type:"NumberInput",Name:"GridWidthInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"W",Value:"",Id:"PUX_244"},{Type:"NumberInput",Name:"GridHeightInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"H",Value:"",Id:"PUX_245"},{Type:"Label",Classes:"Label",Anchoring:"ne",Value:"x",Id:"PUX_246"},{Type:"Label",Classes:"Label",Value:"Snap-to-Grid",Id:"PUX_165"},{Type:"URLInput",Name:"TextureInput",Classes:"URLInput",Anchoring:"n",Placeholder:"Enter URL",Value:"",Id:"PUX_226"},{Type:"Label",Classes:"Label",Value:"Value",Id:"PUX_166"},{Type:"Icon",Name:"ValueEditorButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/image146.png")',Color:"black",Id:"PUX_239"},{Type:"TextInput",Name:"ValueInput",Classes:"TextInput no-resize",Anchoring:"c",Placeholder:"Enter Value",Value:"",Id:"PUX_167"}]},{Type:"Card",Name:"StickerConfigurationPane",Classes:"Card Container",x:520,Width:242,y:19,Height:791,Id:"PUX_111",WidgetList:[{Type:"Label",Classes:"Label",Value:"Sticker Configuration",Id:"PUX_168"},{Type:"Label",Classes:"Label",Value:"Id",Id:"PUX_169"},{Type:"Label",Classes:"Label",Value:"Name",Id:"PUX_170"},{Type:"TextlineInput",Name:"IdView",Classes:"TextlineInput readonly",Anchoring:"n",Placeholder:"",Value:"",Id:"PUX_190"},{Type:"TextlineInput",Name:"NameInput",Classes:"TextlineInput",Anchoring:"n",Placeholder:"Enter Name",Value:"",Id:"PUX_191"},{Type:"Label",Classes:"Label",Value:"Position",Id:"PUX_171"},{Type:"Label",Classes:"Label",Value:"Size",Id:"PUX_172"},{Type:"NumberInput",Name:"WidthInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"W",Value:"",Id:"PUX_192"},{Type:"NumberInput",Name:"HeightInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"H",Value:"",Id:"PUX_193"},{Type:"Label",Classes:"Label",Anchoring:"ne",Value:"x",Id:"PUX_194"},{Type:"NumberInput",Name:"xInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"x",Value:"",Id:"PUX_195"},{Type:"NumberInput",Name:"yInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"y",Value:"",Id:"PUX_196"},{Type:"Label",Classes:"Label",Anchoring:"ne",Value:",",Id:"PUX_197"},{Type:"Label",Classes:"Label",Value:"Layer",Id:"PUX_173"},{Type:"Icon",Name:"ShiftDownButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/arrow-sm-down.png")',Color:"black",Id:"PUX_198"},{Type:"Icon",Name:"ShiftUpButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/arrow-sm-up.png")',Color:"black",Id:"PUX_199"},{Type:"Box",Classes:"",Anchoring:"ne",Id:"PUX_200"},{Type:"Icon",Name:"ShiftToTopButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/arrow-sm-up.png")',Color:"black",Id:"PUX_201"},{Type:"Box",Classes:"",Anchoring:"ne",Id:"PUX_202"},{Type:"Icon",Name:"ShiftToBottomButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/arrow-sm-down.png")',Color:"black",Id:"PUX_203"},{Type:"NumberInput",Name:"IndexView",Classes:"NumberInput",Anchoring:"ne",Placeholder:"Layer",Value:"",Id:"PUX_204"},{Type:"Label",Classes:"Label",Value:"Lock",Id:"PUX_174"},{Type:"Checkbox",Name:"LockCheck",Classes:"Checkbox",Anchoring:"ne",Value:!0,Id:"PUX_205"},{Type:"Label",Classes:"Label",Value:"Layout and Visibility",Id:"PUX_175"},{Type:"Label",Classes:"Label",Value:"Typography",Id:"PUX_176"},{Type:"Label",Classes:"Label",Value:"Font",Id:"PUX_177"},{Type:"TextlineInput",Name:"FontFamilyInput",Classes:"TextlineInput",Anchoring:"n",Placeholder:"Enter Font Family",Value:"",Id:"PUX_206"},{Type:"Label",Classes:"Label",Value:"Font Size [px]",Id:"PUX_178"},{Type:"NumberInput",Name:"FontSizeInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"",Value:"",Id:"PUX_207"},{Type:"Label",Classes:"Label",Value:"Bold",Id:"PUX_179"},{Type:"Checkbox",Name:"BoldCheck",Classes:"Checkbox",Anchoring:"ne",Value:!0,Id:"PUX_208"},{Type:"Label",Classes:"Label",Value:"Italic",Id:"PUX_180"},{Type:"Checkbox",Name:"ItalicCheck",Classes:"Checkbox",Anchoring:"ne",Value:!0,Id:"PUX_209"},{Type:"Label",Classes:"Label",Value:"Text Color",Id:"PUX_181"},{Type:"ColorInput",Name:"TextColorInput",Classes:"ColorInput",Anchoring:"ne",Id:"PUX_210"},{Type:"Label",Classes:"Label",Value:"Line Height [px]",Id:"PUX_182"},{Type:"NumberInput",Name:"LineHeightInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"",Value:"",Id:"PUX_211"},{Type:"Label",Classes:"Label",Value:"Background",Id:"PUX_183"},{Type:"Label",Classes:"Label",Value:"Color",Id:"PUX_184"},{Type:"ColorInput",Name:"BackgroundColorInput",Classes:"ColorInput",Anchoring:"ne",Id:"PUX_212"},{Type:"Label",Classes:"Label",Value:"Texture",Id:"PUX_185"},{Type:"URLInput",Name:"TextureInput",Classes:"URLInput",Anchoring:"n",Placeholder:"Enter URL",Value:"",Id:"PUX_213"},{Type:"Label",Classes:"Label",Value:"Visibility",Id:"PUX_186"},{Type:"Checkbox",Name:"VisibilityCheck",Classes:"Checkbox",Anchoring:"ne",Value:!0,Id:"PUX_214"},{Type:"Label",Classes:"Label",Value:"Enabling",Id:"PUX_187"},{Type:"Checkbox",Name:"EnablingCheck",Classes:"Checkbox",Anchoring:"ne",Value:!0,Id:"PUX_215"},{Type:"Label",Classes:"Label",Value:"Value",Id:"PUX_188"},{Type:"Icon",Name:"ValueEditorButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/image146.png")',Color:"black",Id:"PUX_238"},{Type:"TextInput",Name:"ValueInput",Classes:"TextInput no-resize",Anchoring:"c",Placeholder:"Enter Value",Value:"",Id:"PUX_189"}]},{Type:"Card",Name:"BoardBrowserPane",Classes:"Card Container",x:20,Width:242,y:700,Height:270,Id:"PUX_107",WidgetList:[{Type:"Label",Classes:"Label",Value:"Board Browser",Id:"PUX_112"},{Type:"NestedListView",Name:"BoardTreeView",Classes:"NestedListView",Anchoring:"c",Id:"PUX_120"},{Type:"TextlineInput",Name:"BoardNameInput",Classes:"TextlineInput",Anchoring:"s",Placeholder:"Name",Value:"",Id:"PUX_121"},{Type:"Icon",Name:"BoardDeleteButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/minus.png")',Color:"black",Id:"PUX_119"},{Type:"Icon",Name:"BoardCreateButton",Classes:"Icon",Value:'url("/images/plus.png")',Color:"black",Id:"PUX_113"},{Type:"Icon",Name:"BoardDuplicateButton",Classes:"Icon",Value:'url("/images/clone.png")',Color:"black",Id:"PUX_114"},{Type:"Icon",Name:"BoardShiftDownButton",Classes:"Icon",Value:'url("/images/arrow-sm-down.png")',Color:"black",Id:"PUX_115"},{Type:"Icon",Name:"BoardShiftUpButton",Classes:"Icon",Value:'url("/images/arrow-sm-up.png")',Color:"black",Id:"PUX_116"},{Type:"Icon",Name:"BoardShiftOutButton",Classes:"Icon",Value:'url("/images/image21.png")',Color:"black",Id:"PUX_117"},{Type:"Icon",Name:"BoardShiftInButton",Classes:"Icon",Value:'url("/images/image23.png")',Color:"black",Id:"PUX_118"}]},{Type:"Card",Name:"StickerBrowserPane",Classes:"Card Container",x:271,Width:242,y:700,Height:270,Id:"PUX_108",WidgetList:[{Type:"Label",Classes:"Label",Value:"Sticker Browser",Id:"PUX_122"},{Type:"FlatListView",Name:"StickerListView",Classes:"FlatListView",Anchoring:"c",Id:"PUX_132"},{Type:"TextlineInput",Name:"StickerNameInput",Classes:"TextlineInput",Anchoring:"s",Placeholder:"Name",Value:"",Id:"PUX_133"},{Type:"Icon",Name:"StickerDeleteButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/minus.png")',Color:"black",Id:"PUX_131"},{Type:"PseudoDropDown",Name:"StickerCreateButton",Classes:"PseudoDropDown",Value:'url("/images/plus.png")',Color:"black",Id:"PUX_123"},{Type:"Icon",Name:"StickerDuplicateButton",Classes:"Icon",Value:'url("/images/clone.png")',Color:"black",Id:"PUX_124"},{Type:"Icon",Name:"StickerShiftDownButton",Classes:"Icon",Value:'url("/images/arrow-sm-down.png")',Color:"black",Id:"PUX_125"},{Type:"Icon",Name:"StickerShiftUpButton",Classes:"Icon",Value:'url("/images/arrow-sm-up.png")',Color:"black",Id:"PUX_126"},{Type:"Box",Classes:"",Id:"PUX_127"},{Type:"Icon",Name:"StickerShiftToTopButton",Classes:"Icon",Value:'url("/images/arrow-sm-up.png")',Color:"black",Id:"PUX_128"},{Type:"Box",Classes:"",Id:"PUX_129"},{Type:"Icon",Name:"StickerShiftToBottomButton",Classes:"Icon",Value:'url("/images/arrow-sm-down.png")',Color:"black",Id:"PUX_130"}]}]}};me.extractAllDialogs();me.stuff({Inspector:{Deck:{from:"Stuff Screen",with:["BoardBrowserPane","StickerBrowserPane","ProjectConfigurationPane","BoardConfigurationPane","StickerConfigurationPane"]}}});const v=me.updatedFrom;me.configure({MainScreen:{self:{Style:"left:0px; top:0px; right:0px; bottom:0px; width:auto; height:auto"},BoardView:{Style:"left:0px; top:0px; right:0px; bottom:0px; width:auto; height:auto",Substitute:P0,Rendering:v(()=>{})},DesignerButton:{Style:"left:auto; top:10px; right:10px; bottom:auto; background:white; visibility:hidden",onPointerDown:Xn,onPointerMove:Xn,onPointerUp:Xn,onPointerCancel:Xn}},ProjectBrowser:{self:{Title:"Project Browser",x:-1,y:-1,Style:"z-index:2000000",closeable:v(()=>c.Project!=null)},ProjectListView:{List:v(()=>c.persistedProjectList),Placeholder:"(no projects found)",selectedIndices:v(()=>c.selectedProjectIndex==null?[]:[c.selectedProjectIndex]),SelectionLimit:1,onSelectionChange:r=>{if(r.length===0)c.selectedProjectName=void 0,c.selectedProjectIndex=void 0,c.ProjectName=void 0;else{const e=r[0];c.selectedProjectName=c.persistedProjectList[e],c.selectedProjectIndex=e,c.ProjectName=c.selectedProjectName}}},ProjectOpenButton:{disabled:v(()=>c.selectedProjectIndex==null||Vo(c.selectedProjectName)),onClick:()=>D0(c.selectedProjectName)},ProjectPurgeButton:{disabled:v(()=>c.selectedProjectIndex==null||Vo(c.selectedProjectName)),onClick:()=>L0(c.selectedProjectName)},ProjectNameInput:{Value:v(()=>c.ProjectName),onInput:r=>c.ProjectName=r.target.value},ProjectCreateButton:{disabled:v(()=>!pu(c.ProjectName)),onClick:()=>F0(c.ProjectName)},ProjectRenameButton:{disabled:v(()=>c.selectedProjectIndex==null||Vo(c.selectedProjectName)||!pu(c.ProjectName)),onClick:()=>W0(c.selectedProjectName,c.ProjectName)}},Toolbox:{self:{Title:"Toolbox",x:-1,y:-1,Style:"z-index:2000000",onClose:Zc},ModeButton:{disabled:v(()=>c.chosenBoard==null),Style:v(()=>c.Mode==="edit"?"background:#e8f0ff; outline:solid 2px #e8f0ff":""),onClick:()=>E0()},InspectorButton:{disabled:v(()=>c.Project==null),Style:v(()=>c.InspectorIsOpen?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:r=>Ut("Inspector",r.clientX,r.clientY)},ChatButton:{disabled:!0},ProjectBrowserButton:{Style:v(()=>c.ProjectBrowserIsOpen?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:r=>Ut("ProjectBrowser",r.clientX,r.clientY)},StickerCreateButton:{disabled:v(()=>c.chosenBoard==null),Options:Jc,onInput:r=>{Qc(r.target.value),r.target.value=""}},StickerDuplicateButton:{disabled:v(()=>!(c.chosenBoard!=null&&c.selectedStickers.length>0)),onClick:()=>eh(c.selectedStickers)},StickerConfigureButton:{disabled:v(()=>!(c.chosenBoard!=null&&c.selectedStickers.length>0)),onClick:r=>{Ut("Inspector",r.clientX,r.clientY),Hn("Stickers"),Co("Configuration")}},StickerScriptButton:{disabled:v(()=>c.Project==null),Style:v(()=>c.ScriptEditorIsOpen?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:r=>Ut("ScriptEditor",r.clientX,r.clientY)},StickerShiftToTopButton:{Style:"border-top:solid 2px black",disabled:v(()=>!(c.chosenBoard!=null&&c.selectedStickers.length>0&&c.StickerSelectionMayBeShiftedDown)),onClick:()=>la(c.selectedStickers)},StickerShiftUpButton:{disabled:v(()=>!(c.chosenBoard!=null&&c.selectedStickers.length>0&&c.StickerSelectionMayBeShiftedDown)),onClick:()=>sa(c.selectedStickers)},StickerShiftDownButton:{disabled:v(()=>!(c.chosenBoard!=null&&c.selectedStickers.length>0&&c.StickerSelectionMayBeShiftedUp)),onClick:()=>aa(c.selectedStickers)},StickerShiftToBottomButton:{Style:"border-bottom:solid 2px black",disabled:v(()=>!(c.chosenBoard!=null&&c.selectedStickers.length>0&&c.StickerSelectionMayBeShiftedUp)),onClick:()=>oa(c.selectedStickers)},StickerCutButton:{disabled:v(()=>!(c.chosenBoard!=null&&c.selectedStickers.length>0)),onClick:()=>J0(c.selectedStickers)},StickerCopyButton:{disabled:v(()=>!(c.chosenBoard!=null&&c.selectedStickers.length>0)),onClick:()=>K0(c.selectedStickers)},StickerPasteButton:{disabled:v(()=>!(c.chosenBoard!=null&&c.ShelfIsFilled)),Options:["close to current selection","at original place"],onInput:r=>{if(r.target.value==="close to current selection"){const{minX:e,minY:t}=uh(c.selectedStickers);eS(e,t)}else Q0();r.target.value=""}},StickerDeleteButton:{disabled:v(()=>!(c.chosenBoard!=null&&c.selectedStickers.length>0)),onClick:()=>Ja(c.selectedStickers)},UndoButton:{disabled:v(()=>!c.mayUndoOperation),onClick:()=>tS()},RedoButton:{disabled:v(()=>!c.mayRedoOperation),onClick:()=>rS()},ImportButton:{disabled:v(()=>c.Project==null)},FileInput:{Style:"border:none",disabled:v(()=>c.Project==null),Value:"",Placeholder:"",accept:".json,application/json",onChange:r=>hu(r.target.files[0]),onDrop:r=>hu(r.dataTransfer.files[0])},ExportButton:{disabled:v(()=>c.Project==null),Options:["whole Project","active Board","selected Stickers"],onInput:r=>{oS(r.target.value),r.target.value=""}},VisitPrevButton:{disabled:v(()=>!c.mayVisitPrevBoard),onClick:()=>nS()},VisitNextButton:{disabled:v(()=>!c.mayVisitNextBoard),onClick:()=>iS()},VisitHomeButton:{disabled:v(()=>c.BoardTree.length===0||c.chosenBoard===c.BoardTree[0]),onClick:()=>{var r;return th((r=c.Project)==null?void 0:r.Board(0))}},SearchButton:{disabled:!0},ConsoleButton:{Style:v(()=>c.ConsoleIsOpen?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:r=>Ut("Console",r.clientX,r.clientY)},AppletGeneratorButton:{disabled:v(()=>c.chosenBoard==null),Options:v(()=>V0(c.selectedStickers)),onInput:r=>{const e=c.chosenBoard;if(e==null)return;const[t,n]=r.target.value.split(":");switch(r.target.value="",t){case"Board":return aS(e,n);case"Boards":return sS(e,n);case"Stickers":default:return lS(c.selectedStickers,n)}}},BoardPrintButton:{disabled:v(()=>c.chosenBoard==null),onClick:()=>dS()}},Inspector:{self:{Title:"Inspector",x:-1,y:-1,minWidth:300,minHeight:460,Width:300,Height:460,Style:"z-index:2000000",onOpen:()=>c.InspectorIsOpen=!0,onClose:()=>c.InspectorIsOpen=!1},ProjectModeButton:{disabled:v(()=>c.Project==null),Style:v(()=>c.InspectorPaneGroup==="Project"?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:()=>Hn("Project")},BoardModeButton:{disabled:v(()=>c.Project==null),Style:v(()=>c.InspectorPaneGroup==="Board"?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:()=>Hn("Board")},StickerModeButton:{disabled:v(()=>c.Project==null),Style:v(()=>c.InspectorPaneGroup==="Stickers"?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:()=>Hn("Stickers")},BrowserPaneButton:{disabled:v(()=>c.Project==null||c.InspectorPaneGroup==="Stickers"),Style:v(()=>c.InspectorPaneChoice==="Browser"?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:()=>Co("Browser")},ConfigurationPaneButton:{disabled:v(()=>c.Project==null),Style:v(()=>c.InspectorPaneChoice==="Configuration"?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:()=>Co("Configuration")},ScriptEditorButton:{disabled:v(()=>c.Project==null),onClick:r=>{Ut("ScriptEditor",r.clientX,r.clientY),c.ScriptEditorMode=c.InspectorPaneGroup}},Deck:{Style:"overflow-x:hidden; overflow-y:scroll; overflow:hidden scroll",Value:v(()=>c.InspectorPaneIndex)},MessageView:{Value:v(()=>c.InspectorMessage)}},ValueEditor:{self:{Title:"Value Editor",x:-1,y:-1,Style:"z-index:2000000",onOpen:()=>c.ValueEditorIsOpen=!0,onClose:()=>c.ValueEditorIsOpen=!1},ProjectModeButton:{disabled:v(()=>c.Project==null),Style:v(()=>c.ValueEditorMode==="Project"?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:()=>c.ValueEditorMode="Project"},BoardModeButton:{disabled:v(()=>c.Project==null),Style:v(()=>c.ValueEditorMode==="Board"?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:()=>c.ValueEditorMode="Board"},StickerModeButton:{disabled:v(()=>c.Project==null),Style:v(()=>c.ValueEditorMode==="Stickers"?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:()=>c.ValueEditorMode="Stickers"},ValueInput:{disabled:v(()=>c.ValueEditorMode==="Project"?c.Project==null:c.ValueEditorMode==="Board"?c.chosenBoard==null:c.selectedStickers.length===0),Value:v(()=>c.ValueEditorMode==="Project"?we(c.ProjectProperties.editableValue):c.ValueEditorMode==="Board"?we(c.BoardProperties.editableValue):we(c.StickerSelectionProperties.editableValue)),Placeholder:v(()=>c.ValueEditorMode==="Project"?"(enter project value)":c.ValueEditorMode==="Board"?"(enter a value for the currently active board)":"(enter a common value for all currently selected stickers)"),onInput:r=>{switch(c.ValueEditorMode){case"Project":return c.Project==null?void 0:lt(c.Project,"editableValue",r.target.value);case"Board":return c.chosenBoard==null?void 0:et(c.chosenBoard,"editableValue",r.target.value);case"Stickers":default:return Ae(c.selectedStickers,"editableValue",r.target.value)}}}},ScriptEditor:{self:{Title:"Script Editor",x:-1,y:-1,Style:"z-index:2000000",onOpen:()=>c.ScriptEditorIsOpen=!0,onClose:()=>c.ScriptEditorIsOpen=!1},ProjectModeButton:{disabled:v(()=>c.Project==null),Style:v(()=>c.ScriptEditorMode==="Project"?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:()=>c.ScriptEditorMode="Project"},BoardModeButton:{disabled:v(()=>c.Project==null),Style:v(()=>c.ScriptEditorMode==="Board"?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:()=>c.ScriptEditorMode="Board"},StickerModeButton:{disabled:v(()=>c.Project==null),Style:v(()=>c.ScriptEditorMode==="Stickers"?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:()=>c.ScriptEditorMode="Stickers"},ScriptInput:{Style:"white-space:pre",disabled:v(()=>c.ScriptEditorMode==="Project"?c.Project==null:c.ScriptEditorMode==="Board"?c.chosenBoard==null:c.selectedStickers.length===0),Value:v(()=>c.ScriptEditorMode==="Project"?we(c.ProjectProperties.Script):c.ScriptEditorMode==="Board"?we(c.BoardProperties.Script):we(c.StickerSelectionProperties.Script)),Placeholder:v(()=>c.ScriptEditorMode==="Project"?"(enter project script)":c.ScriptEditorMode==="Board"?"(enter script for the currently active board)":"(enter common script for all currently selected stickers)"),onInput:r=>{switch(c.ScriptEditorMode){case"Project":return c.Project==null?void 0:lt(c.Project,"pendingScript",r.target.value);case"Board":return c.chosenBoard==null?void 0:et(c.chosenBoard,"pendingScript",r.target.value);case"Stickers":default:return Ae(c.selectedStickers,"pendingScript",r.target.value)}}},ApplyButton:{disabled:v(()=>c.ScriptEditorMode==="Project"||c.ScriptEditorMode==="Board"?c.ProjectProperties.Script===c.ProjectProperties.activeScript:c.StickerSelectionProperties.Script===c.StickerSelectionProperties.activeScript),onClick:()=>{switch(c.ScriptEditorMode){case"Project":return c.Project==null?void 0:A0(c.Project);case"Board":return c.chosenBoard==null?void 0:H0(c.chosenBoard);case"Stickers":default:return q0(c.selectedStickers)}}},WithdrawButton:{disabled:!0,onClick:()=>{switch(c.ScriptEditorMode){case"Project":return c.Project==null?void 0:U0(c.Project);case"Board":return c.chosenBoard==null?void 0:O0(c.chosenBoard);case"Stickers":default:return Z0(c.selectedStickers)}}},MessageView:{Style:"bottom:0px; font-size:13px; padding-top:3px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis",Value:v(()=>MS(c.ScriptEditorMode==="Project"||c.ScriptEditorMode==="Board"?c.ProjectProperties.ScriptError:c.StickerSelectionProperties.ScriptError))},MessageViewButton:{Style:"bottom:3px",disabled:v(()=>!wa(c.ScriptEditorMode==="Project"||c.ScriptEditorMode==="Board"?c.ProjectProperties.ScriptError:c.StickerSelectionProperties.ScriptError)),onClick:()=>XS(c.ScriptEditorMode==="Project"||c.ScriptEditorMode==="Board"?c.ProjectProperties.ScriptError:c.StickerSelectionProperties.ScriptError)}},Console:{self:{Title:"Console",x:-1,y:-1,Style:"z-index:2000000",onOpen:()=>c.ConsoleIsOpen=!0,onClose:()=>c.ConsoleIsOpen=!1},ConsoleClearButton:{Style:"top:2px; z-index:1",disabled:v(()=>c.ConsoleValue===""),onClick:()=>eo()},ConsoleView:{Style:"bottom:0px; border:solid 4px transparent; color:green",readonly:!0,Value:v(()=>c.ConsoleValue)}}});me.configure({"Stuff Screen":{BoardBrowserPane:{BoardTreeView:{List:v(()=>(c.BoardTreeState,c.chosenBoard,c.BoardTree)),LabelOfItem:r=>r.Name,ContentListOfItem:r=>r.BoardList,ItemRenderer:(r,e)=>{const t=c.chosenBoard===r?"font-weight:bold; text-decoration:underline":void 0;return r.Name==null?or`<div class="ItemLabel" style=${t}><i>(unnamed)</i></div>`:or`<div class="ItemLabel" style=${t}>${r.Name}</div>`},SelectionMode:"same-container",SelectionLimit:Number.MAX_SAFE_INTEGER,selectedPaths:v(()=>(c.BoardTreeState,fu(c.selectedBoards))),onSelectionChange:r=>c.selectedBoards=mu(r),onItemDoubleClicked:r=>th(r),expandedPaths:v(()=>(c.BoardTreeState,fu(c.expandedBoards))),onExpansionChange:r=>c.expandedBoards=mu(r)},BoardCreateButton:{disabled:v(()=>c.Project==null),onClick:()=>M0(c.selectedBoards)},BoardDuplicateButton:{disabled:v(()=>c.selectedBoards.length===0),onClick:()=>X0(c.selectedBoards)},BoardShiftOutButton:{disabled:v(()=>!c.BoardSelectionMayBeShiftedOut),onClick:()=>G0(c.selectedBoards)},BoardShiftInButton:{disabled:v(()=>!c.BoardSelectionMayBeShiftedIn),onClick:()=>j0(c.selectedBoards)},BoardShiftUpButton:{disabled:v(()=>!c.BoardSelectionMayBeShiftedUp),onClick:()=>z0(c.selectedBoards)},BoardShiftDownButton:{disabled:v(()=>!c.BoardSelectionMayBeShiftedDown),onClick:()=>R0(c.selectedBoards)},BoardDeleteButton:{disabled:v(()=>c.selectedBoards.length===0),onClick:()=>Y0(c.selectedBoards)},BoardNameInput:{disabled:v(()=>c.selectedBoards.length!==1),Value:v(()=>c.BoardTreeState&&we(c.selectedBoards.length===0?xe:c.selectedBoards.length===1?c.selectedBoards[0].Name:Yr)),onInput:r=>{c.selectedBoards.length===1&&et(c.selectedBoards[0],"Name",r.target.value)}}},StickerBrowserPane:{StickerListView:{List:v(()=>(c.ViewState,c.StickerList)),ItemRenderer:r=>r.Name==null?'<div class="ItemLabel"><i>(unnamed)</i></div>':`<div class="ItemLabel">${r.Name}</div>`,Placeholder:"(board is empty)",selectedIndices:v(()=>(c.ViewState,c.selectedStickers.map(r=>r.Index))),SelectionLimit:Number.MAX_SAFE_INTEGER,onSelectionChange:r=>{const e=c.chosenBoard;e!=null&&(c.selectedStickers=r.map(t=>e.Sticker(t)))}},StickerCreateButton:{disabled:v(()=>c.chosenBoard==null),Options:Jc,onInput:r=>{Qc(r.target.value),r.target.value=""}},StickerDuplicateButton:{disabled:v(()=>c.selectedStickers.length==0),onClick:()=>eh(c.selectedStickers)},StickerShiftToTopButton:{disabled:v(()=>!c.StickerSelectionMayBeShiftedUp),onClick:()=>oa(c.selectedStickers)},StickerShiftUpButton:{disabled:v(()=>!c.StickerSelectionMayBeShiftedUp),onClick:()=>aa(c.selectedStickers)},StickerShiftDownButton:{disabled:v(()=>!c.StickerSelectionMayBeShiftedDown),onClick:()=>sa(c.selectedStickers)},StickerShiftToBottomButton:{disabled:v(()=>!c.StickerSelectionMayBeShiftedDown),onClick:()=>la(c.selectedStickers)},StickerDeleteButton:{disabled:v(()=>c.selectedStickers.length===0),onClick:()=>Ja(c.selectedStickers)},StickerNameInput:{disabled:v(()=>c.selectedStickers.length===0),Value:v(()=>we(c.StickerSelectionProperties.Name)),onInput:r=>Ae(c.selectedStickers,"Name",r.target.value)}},ProjectConfigurationPane:{IdView:{readonly:!0,Value:v(()=>we(c.ProjectProperties.Id))},NameInput:{readonly:!0,Value:v(()=>we(c.ProjectProperties.Name))},SnapToGridCheck:{disabled:v(()=>c.Project==null),Value:v(()=>Nt(c.ProjectProperties.SnapToGrid)),onInput:r=>{c.Project!=null&&lt(c.Project,"SnapToGrid",r.target.checked)}},GridWidthInput:{min:0,step:1,disabled:v(()=>c.Project==null),Value:v(()=>qe(c.ProjectProperties.GridWidth)),onInput:r=>{c.Project!=null&&lt(c.Project,"GridWidth",parseInt(r.target.value,10))}},GridHeightInput:{min:0,step:1,disabled:v(()=>c.Project==null),Value:v(()=>qe(c.ProjectProperties.GridHeight)),onInput:r=>{c.Project!=null&&lt(c.Project,"GridHeight",parseInt(r.target.value,10))}},FontFamilyInput:{disabled:v(()=>c.Project==null),Value:v(()=>we(c.ProjectProperties.FontFamily)),onInput:r=>{c.Project!=null&&lt(c.Project,"FontFamily",r.target.value)}},FontSizeInput:{min:0,step:1,disabled:v(()=>c.Project==null),Value:v(()=>qe(c.ProjectProperties.FontSize)),onInput:r=>{c.Project!=null&&lt(c.Project,"FontSize",parseInt(r.target.value,10))}},BoldCheck:{disabled:v(()=>c.Project==null),Value:v(()=>Nt(c.ProjectProperties.FontWeight,700)),onInput:r=>{c.Project!=null&&lt(c.Project,"FontWeight",r.target.checked?700:400)}},ItalicCheck:{disabled:v(()=>c.Project==null),Value:v(()=>Nt(c.ProjectProperties.FontStyle,"italic")),onInput:r=>{c.Project!=null&&lt(c.Project,"FontStyle",r.target.checked?"italic":"normal")}},TextColorInput:{disabled:v(()=>c.Project==null),Value:v(()=>we(c.ProjectProperties.ForegroundColor)),onInput:r=>{c.Project!=null&&lt(c.Project,"ForegroundColor",r.target.value)}},LineHeightInput:{min:0,step:1,disabled:v(()=>c.Project==null),Value:v(()=>qe(c.ProjectProperties.LineHeight)),onInput:r=>{c.Project!=null&&lt(c.Project,"LineHeight",parseInt(r.target.value,10))}},BackgroundColorInput:{disabled:v(()=>c.Project==null),Value:v(()=>we(c.ProjectProperties.BackgroundColor)),onInput:r=>{c.Project!=null&&lt(c.Project,"BackgroundColor",r.target.value)}},TextureInput:{disabled:v(()=>c.Project==null),Value:v(()=>we(c.ProjectProperties.BackgroundTexture)),onInput:r=>{c.Project!=null&&lt(c.Project,"BackgroundTexture",r.target.value)}},ValueInput:{Style:"min-height:100px",disabled:v(()=>c.Project==null),Value:v(()=>we(c.ProjectProperties.editableValue)),Placeholder:v(()=>"(enter a value for the currently active board)"),onInput:r=>{c.Project!=null&&lt(c.Project,"editableValue",r.target.value)}},ValueEditorButton:{onClick:r=>{Ut("ValueEditor",r.clientX,r.clientY),c.ValueEditorMode="Project"}}},BoardConfigurationPane:{IdView:{readonly:!0,Value:v(()=>we(c.BoardProperties.Id))},NameInput:{disabled:v(()=>c.chosenBoard==null),Value:v(()=>we(c.BoardProperties.Name)),onInput:r=>{c.chosenBoard!=null&&et(c.chosenBoard,"Name",r.target.value)}},SnapToGridCheck:{disabled:v(()=>c.chosenBoard==null),Value:v(()=>Nt(c.BoardProperties.SnapToGrid)),onInput:r=>{c.chosenBoard!=null&&et(c.chosenBoard,"SnapToGrid",r.target.checked)}},GridWidthInput:{min:0,step:1,disabled:v(()=>c.chosenBoard==null),Value:v(()=>qe(c.BoardProperties.GridWidth)),onInput:r=>{c.chosenBoard!=null&&et(c.chosenBoard,"GridWidth",parseInt(r.target.value,10))}},GridHeightInput:{min:0,step:1,disabled:v(()=>c.chosenBoard==null),Value:v(()=>qe(c.BoardProperties.GridHeight)),onInput:r=>{c.chosenBoard!=null&&et(c.chosenBoard,"GridHeight",parseInt(r.target.value,10))}},FontFamilyInput:{disabled:v(()=>c.chosenBoard==null),Value:v(()=>we(c.BoardProperties.FontFamily)),onInput:r=>{c.chosenBoard!=null&&et(c.chosenBoard,"FontFamily",r.target.value)}},FontSizeInput:{min:0,step:1,disabled:v(()=>c.chosenBoard==null),Value:v(()=>qe(c.BoardProperties.FontSize)),onInput:r=>{c.chosenBoard!=null&&et(c.chosenBoard,"FontSize",parseInt(r.target.value,10))}},BoldCheck:{disabled:v(()=>c.chosenBoard==null),Value:v(()=>Nt(c.BoardProperties.FontWeight,700)),onInput:r=>{c.chosenBoard!=null&&et(c.chosenBoard,"FontWeight",r.target.checked?700:400)}},ItalicCheck:{disabled:v(()=>c.chosenBoard==null),Value:v(()=>Nt(c.BoardProperties.FontStyle,"italic")),onInput:r=>{c.chosenBoard!=null&&et(c.chosenBoard,"FontStyle",r.target.checked?"italic":"normal")}},TextColorInput:{disabled:v(()=>c.chosenBoard==null),Value:v(()=>we(c.BoardProperties.ForegroundColor)),onInput:r=>{c.chosenBoard!=null&&et(c.chosenBoard,"ForegroundColor",r.target.value)}},LineHeightInput:{min:0,step:1,disabled:v(()=>c.chosenBoard==null),Value:v(()=>qe(c.BoardProperties.LineHeight)),onInput:r=>{c.chosenBoard!=null&&et(c.chosenBoard,"LineHeight",parseInt(r.target.value,10))}},BackgroundColorInput:{disabled:v(()=>c.chosenBoard==null),Value:v(()=>we(c.BoardProperties.BackgroundColor)),onInput:r=>{c.chosenBoard!=null&&et(c.chosenBoard,"BackgroundColor",r.target.value)}},TextureInput:{disabled:v(()=>c.chosenBoard==null),Value:v(()=>we(c.BoardProperties.BackgroundTexture)),onInput:r=>{c.chosenBoard!=null&&et(c.chosenBoard,"BackgroundTexture",r.target.value)}},ValueInput:{Style:"min-height:100px",disabled:v(()=>c.chosenBoard==null),Value:v(()=>we(c.BoardProperties.editableValue)),Placeholder:v(()=>"(enter a value for the currently active board)"),onInput:r=>{c.chosenBoard!=null&&et(c.chosenBoard,"editableValue",r.target.value)}},ValueEditorButton:{onClick:r=>{Ut("ValueEditor",r.clientX,r.clientY),c.ValueEditorMode="Board"}}},StickerConfigurationPane:{IdView:{readonly:!0,Value:v(()=>we(c.StickerSelectionProperties.Id))},NameInput:{disabled:v(()=>c.selectedStickers.length===0),Value:v(()=>we(c.StickerSelectionProperties.Name)),onInput:r=>Ae(c.selectedStickers,"Name",r.target.value)},LockCheck:{disabled:v(()=>c.selectedStickers.length===0),Value:v(()=>Nt(c.StickerSelectionProperties.Lock)),onInput:r=>Ae(c.selectedStickers,"Lock",r.target.checked)},VisibilityCheck:{disabled:v(()=>c.selectedStickers.length===0),Value:v(()=>Nt(c.StickerSelectionProperties.Visibility)),onInput:r=>Ae(c.selectedStickers,"Visibility",r.target.checked)},xInput:{step:1,disabled:v(()=>c.selectedStickers.length===0),Value:v(()=>qe(c.StickerSelectionProperties.Geometry.x)),onInput:r=>Ae(c.selectedStickers,"x",parseInt(r.target.value,10))},yInput:{step:1,disabled:v(()=>c.selectedStickers.length===0),Value:v(()=>qe(c.StickerSelectionProperties.Geometry.y)),onInput:r=>Ae(c.selectedStickers,"y",parseInt(r.target.value,10))},WidthInput:{min:0,step:1,disabled:v(()=>c.selectedStickers.length===0),Value:v(()=>qe(c.StickerSelectionProperties.Geometry.Width)),onInput:r=>Ae(c.selectedStickers,"Width",parseInt(r.target.value,10))},HeightInput:{min:0,step:1,disabled:v(()=>c.selectedStickers.length===0),Value:v(()=>qe(c.StickerSelectionProperties.Geometry.Height)),onInput:r=>Ae(c.selectedStickers,"Height",parseInt(r.target.value,10))},IndexView:{readonly:!0,Value:v(()=>qe(c.StickerSelectionProperties.Index))},ShiftToTopButton:{disabled:v(()=>!c.StickerSelectionMayBeShiftedDown),onClick:()=>la(c.selectedStickers)},ShiftUpButton:{disabled:v(()=>!c.StickerSelectionMayBeShiftedDown),onClick:()=>sa(c.selectedStickers)},ShiftDownButton:{disabled:v(()=>!c.StickerSelectionMayBeShiftedUp),onClick:()=>aa(c.selectedStickers)},ShiftToBottomButton:{disabled:v(()=>!c.StickerSelectionMayBeShiftedUp),onClick:()=>oa(c.selectedStickers)},FontFamilyInput:{disabled:v(()=>c.selectedStickers.length===0),Value:v(()=>we(c.StickerSelectionProperties.FontFamily)),onInput:r=>Ae(c.selectedStickers,"FontFamily",r.target.value)},FontSizeInput:{min:0,step:1,disabled:v(()=>c.selectedStickers.length===0),Value:v(()=>qe(c.StickerSelectionProperties.FontSize)),onInput:r=>Ae(c.selectedStickers,"FontSize",parseInt(r.target.value,10))},BoldCheck:{disabled:v(()=>c.selectedStickers.length===0),Value:v(()=>Nt(c.StickerSelectionProperties.FontWeight,700)),onInput:r=>Ae(c.selectedStickers,"FontWeight",r.target.checked?700:400)},ItalicCheck:{disabled:v(()=>c.selectedStickers.length===0),Value:v(()=>Nt(c.StickerSelectionProperties.FontStyle,"italic")),onInput:r=>Ae(c.selectedStickers,"FontStyle",r.target.checked?"italic":"normal")},TextColorInput:{disabled:v(()=>c.selectedStickers.length===0),Value:v(()=>we(c.StickerSelectionProperties.ForegroundColor)),onInput:r=>Ae(c.selectedStickers,"ForegroundColor",r.target.value)},LineHeightInput:{min:0,step:1,disabled:v(()=>c.selectedStickers.length===0),Value:v(()=>qe(c.StickerSelectionProperties.LineHeight)),onInput:r=>Ae(c.selectedStickers,"LineHeight",parseInt(r.target.value,10))},BackgroundColorInput:{disabled:v(()=>c.selectedStickers.length===0),Value:v(()=>we(c.StickerSelectionProperties.BackgroundColor)),onInput:r=>Ae(c.selectedStickers,"BackgroundColor",r.target.value)},TextureInput:{disabled:v(()=>c.selectedStickers.length===0),Value:v(()=>we(c.StickerSelectionProperties.BackgroundTexture)),onInput:r=>Ae(c.selectedStickers,"BackgroundTexture",r.target.value)},EnablingCheck:{disabled:v(()=>c.selectedStickers.length===0),Value:v(()=>Nt(c.StickerSelectionProperties.Enabling)),onInput:r=>Ae(c.selectedStickers,"Enabling",r.target.checked)},ValueInput:{Style:"min-height:100px",disabled:v(()=>c.selectedStickers.length===0),Value:v(()=>we(c.StickerSelectionProperties.editableValue)),Placeholder:v(()=>"(enter a common value for all currently selected stickers)"),onInput:r=>Ae(c.selectedStickers,"editableValue",r.target.value)},ValueEditorButton:{onClick:r=>{Ut("ValueEditor",r.clientX,r.clientY),c.ValueEditorMode="Stickers"}}}}});me.startWithScreen("MainScreen");me.renderInto(document.body);const N0=me.existingWidgetNamed("BoardView").View;function Hn(r){r==="Stickers"&&c.InspectorPaneChoice==="Browser"&&(c.InspectorPaneChoice="Configuration"),c.InspectorPaneGroup=r,Kc()}function Co(r){c.InspectorPaneGroup==="Stickers"&&r==="Browser"&&(r="Configuration"),c.InspectorPaneChoice=r,Kc()}function Kc(){const r={Project:{Browser:0,Configuration:2},Board:{Browser:1,Configuration:3},Stickers:{Browser:1,Configuration:4}},e=c.InspectorPaneGroup,t=c.InspectorPaneChoice;c.InspectorPaneIndex=r[e][t]}function Ut(r,e,t){let n=me.existingDialogNamed(r);if(n.x===-1&&n.y===-1){const{Width:i,Height:o}=n,u=me.existingScreenNamed("MainScreen"),{width:s,height:l}=u.View.base.getBoundingClientRect();n.x=Math.max(0,Math.min(e,s-i)),n.y=Math.max(0,Math.min(t,l-o))}me.openDialog(r)}function T0(r){let e=me.existingDialogNamed(r);if(e.x===-1&&e.y===-1){const{Width:t,Height:n}=e,i=me.existingScreenNamed("MainScreen"),{width:o,height:u}=i.View.base.getBoundingClientRect();e.x=Math.max(0,Math.round((o-t)/2)),e.y=Math.max(0,Math.round((u-n)/2))}me.openDialog(r)}async function F0(r){nh()&&Xr(),await cS(r),await rh(r),me.closeDialog("ProjectBrowser")}async function D0(r){nh()&&Xr(),await rh(r),me.closeDialog("ProjectBrowser")}function W0(r,e){Ka("Do you really want to rename project "+Ne(r)+" to "+Ne(e)+"?")&&hS(r,e)}function L0(r){Ka("Do you really want to delete project "+Ne(r)+"?")&&pS(r)}function E0(){const r=c.Mode;c.Mode=r==="edit"?"run":"edit"}function lt(r,e,t){Te(new to(r,e,t))}function A0(r){as(r)}function U0(r){Te(new to(r,"pendingScript",void 0)),r.ScriptError=void 0}function M0(r){let e,t;if(r.length>0)e=r[0].Folder,t=Pn(r)+1;else{const n=c.chosenBoard;n==null?(e=c.Project,t=0):(e=n.Folder,t=n.Index+1)}Te(new sh(e,[{}],t))}function X0(r){const e=Cr(r),t=Br(r),n=e.map(o=>o.Serialization),i=r[r.length-1].Index+1;Te(new sh(t,n,i))}function et(r,e,t){Te(new ro(r,e,t))}function H0(r){as(r)}function O0(r){Te(new ro(r,"pendingScript",void 0)),r.ScriptError=void 0}function j0(r){const e=Br(r),t=Cr(r),n=e.Board(Pn(r)+1);n!=null&&(Te(new no(e,t,n,0)),c.expandedBoards.indexOf(n)<0&&(c.expandedBoards=c.expandedBoards.concat(n)))}function G0(r){const e=Br(r),t=Cr(r),n=e.Folder;n!=null&&Te(new no(e,t,n,e.Index))}function z0(r){const e=Cr(r),t=Br(r),n=Math.max(0,is(r)-1),i=e.map((o,u)=>n+u);Te(new io(t,e,i))}function R0(r){const e=Cr(r),t=Br(r),n=Math.min(Pn(r)+1,t.BoardCount-1)+1-r.length,i=e.map((o,u)=>n+u);Te(new io(t,e,i))}function Y0(r){Te(new TS(Cr(r)))}function Qc(r){const e=c.chosenBoard;if(e==null)return;const t=c.selectedStickers,n=t.length===0?e.StickerCount:Bn(t)+1;Te(new oo(e,[fg(r)],n))}function eh(r){const e=c.chosenBoard;if(e==null)return;const t=Ot(r).map(o=>o.Serialization),n=Bn(r)+1;Te(new oo(e,t,n));const i=c.selectedStickers;if(i.length>0){const o=i.map(u=>{const s=u.Geometry;return s.x+=20,s.y+=20,s});Za(i,o)}}function Ae(r,e,t){Te(new ao(r,e,t))}function q0(r){r.forEach(e=>as(e))}function Z0(r){Te(new ao(r,"pendingScript",void 0)),r.forEach(e=>{e.ScriptError=void 0})}function Za(r,e){Te(new ns(r,e))}function oa(r){Te(new qr(Ot(r),r.map((e,t)=>t)))}function aa(r){const e=Ot(r),t=Math.max(0,os(r)-1),n=e.map((i,o)=>t+o);Te(new qr(e,n))}function sa(r){const e=Ot(r),t=Zr(r);if(t==null)return;const n=Math.min(Bn(r)+1,t.StickerCount-1)+1-r.length,i=e.map((o,u)=>n+u);Te(new qr(e,i))}function la(r){const e=Ot(r),t=Zr(r);if(t==null)return;const n=t.StickerCount-r.length,i=e.map((o,u)=>n+u);Te(new qr(e,i))}function Ja(r){Te(new FS(Ot(r)))}function J0(r){Ht.splice(0,Ht.length),r=Ot(r),r.forEach(e=>{const t=e.Serialization;Ht.push(t)}),Ja(r),c.ShelfIsFilled=Ht.length>0}function K0(r){Ht.splice(0,Ht.length),r=Ot(r),r.forEach(e=>{const t=e.Serialization;Jt(t),Ht.push(t)}),c.ShelfIsFilled=Ht.length>0}function Q0(){if(!c.ShelfIsFilled)return;const r=c.chosenBoard;r!=null&&Te(new oo(r,Ht.slice(),r.StickerCount))}function eS(r,e){if(!c.ShelfIsFilled)return;const t=c.chosenBoard;if(t==null)return;Te(new oo(t,Ht.slice(),t.StickerCount));const n=c.selectedStickers,{minX:i,minY:o}=uh(n),u=r-i,s=e-o,l=n.map(a=>{const h=a.Geometry;return h.x+=u,h.y+=s,h});Za(n,l)}function tS(){bS()}function rS(){_S()}function nS(){yS()}function iS(){vS()}function th(r){Xe(r)}function hu(r){let e=new FileReader;e.onabort=function(){alert("import was aborted")},e.onerror=function(){alert("import failed")},e.onload=function(n){let i=new TextDecoder().decode(e.result);console.log("Reader.onload");const o=c.Project;if(o==null)return;const u=c.chosenBoard;try{let s=JSON.parse(i);if(li(s)){if(u==null){window.alert("please prepare a board to import stickers into");return}s.forEach(a=>Jt(a));const l=s.map(a=>u.StickerDeserializedAt(a));l.forEach(a=>a.activateScript()),kr(l);return}if(s.StickerList!=null){if(o==null){window.alert("please prepare a project to import this board into");return}const l=u==null?o:u.Folder,a=u==null?0:u.Index+1;Jt(s);const h=l.BoardDeserializedAt(s,a);h.recursivelyActivateAllScripts(),Xe(h);return}(u==null||Ka())&&(o.clear(),Object.keys(In).forEach(l=>{l!=="Id"&&l!=="Name"&&s[l]!=null&&(o[l]=s[l])}),li(s.BoardList)&&s.BoardList.forEach(l=>o.BoardDeserializedAt(l)),o.recursivelyActivateAllScripts())}catch(s){console.error(s),alert("import failed")}},e.readAsArrayBuffer(r)}function oS(r){let e,t;switch(r){case"whole Project":const u=c.Project;if(u==null)return;t=u.Name||"SNS-Project",e=u.Serialization;break;case"active Board":const s=c.chosenBoard;if(s==null){window.alert("no active board");return}t=s.Name||"SNS-Board",e=s.Serialization;break;case"selected Stickers":default:const l=c.selectedStickers;if(l.length===0){window.alert("no stickers selected");return}t="SNS-Stickers",e=l.map(a=>a.Serialization)}const n=JSON.stringify(e),i=new TextEncoder().encode(n),o=new TextDecoder().decode(i);n===o?download(i,t+".json","application/json;charset=utf-8"):window.alert("this export is not safe")}function aS(r,e){CS(r,e)}function sS(r,e){VS(r,e)}function lS(r,e){NS(r,e)}function dS(){window.print()}function Ka(r){let e=Math.round(Math.random()*1e4).toString();return e+="0000".slice(e.length),r=(r||"This operation can not be undone.")+`

Please, enter the following number if you want to proceed:

   `+e+`

Otherwise, the operation will be cancelled`,window.prompt(r,"")===e?!0:(window.alert("Operation will be cancelled"),!1)}let Zt;function uS(r){return{Id:Xo(),Name:r,SnapToGrid:!1,GridWidth:10,GridHeight:10,BoardList:[{Id:Xo()}]}}async function Or(){let r;try{r=(await Zt.keys()).sort()}catch(t){console.warn("could not fetch names of persisted projects",t)}c.persistedProjectList=r;let e=c.persistedProjectList.map(t=>t.toLowerCase());if(c.normalizedProjectList=e,c.selectedProjectName!=null){let t=e.indexOf(c.selectedProjectName.toLowerCase());t<0?(c.selectedProjectName=void 0,c.selectedProjectIndex=void 0):(c.selectedProjectName=r[t],c.selectedProjectIndex=t)}}async function cS(r){let e=r.toLowerCase();c.normalizedProjectList.indexOf(e)>=0&&Q("ProjectExists: a project named "+Ne(r)+" exists already");const t=uS(r);try{await Zt.setItem(r,JSON.stringify(t))}catch(n){Q("PersistenceWriteError: could not write project "+Ne(r)+", reason: "+n)}await Or(),c.selectedProjectName=r,c.selectedProjectIndex=c.normalizedProjectList.indexOf(e)}async function hS(r,e){await Or();let t=c.normalizedProjectList;t.indexOf(r.toLowerCase())<0&&Q("NoSuchProject: a project named "+Ne(r)+" does not exist"),t.indexOf(e.toLowerCase())>=0&&Q("ProjectExists: a project named "+Ne(e)+" exists already");let n={};try{n=JSON.parse(await Zt.getItem(r))}catch(i){Q("PersistenceReadError: could not read project "+Ne(r)+", reason: "+i)}n.Name=e;try{await Zt.setItem(e,JSON.stringify(n))}catch(i){Q("PersistenceWriteError: could not write project "+Ne(e)+", reason: "+i)}try{await Zt.removeItem(r)}catch(i){Q("PersistenceWriteError: could not delete project "+Ne(r)+", reason: "+i)}c.selectedProjectName!=null&&c.selectedProjectName.toLowerCase()===r.toLowerCase()&&(c.selectedProjectName=e),await Or()}async function rh(r){await Or(),c.normalizedProjectList.indexOf(r.toLowerCase())<0&&Q("NoSuchProject: a project named "+Ne(r)+" does not exist");let t={};try{t=JSON.parse(await Zt.getItem(r))}catch(n){Q("PersistenceReadError: could not read project "+Ne(r)+", reason: "+n)}try{c.Project=Va.deserializedFrom(r,t),c.Project.onChange(mS),c.Project.onRender(SS),c.Project.onError(xS),c.Project.recursivelyActivateAllScripts(),window.Project=c.Project,Zc()}catch(n){Q("DeserializationError: could not deserialize project "+Ne(r)+", reason: "+n)}}async function pS(r){try{await Zt.removeItem(r)}catch(e){Q("PersistenceWriteError: could not delete project "+Ne(r)+", reason: "+e)}c.selectedProjectName!=null&&c.selectedProjectName.toLowerCase()===r.toLowerCase()&&(c.selectedProjectName=r),await Or()}function gS(r){c.ProjectToPersist=r,c.DelayTimer==null?(c.DelayTimer=setTimeout(Xr,1*1e3),c.DelayLimitTimer=setTimeout(Xr,60*1e3)):(clearTimeout(c.DelayTimer),c.DelayTimer=setTimeout(Xr,1*1e3))}function fS(){c.ProjectToPersist=void 0,c.DelayTimer!=null&&(clearTimeout(c.DelayTimer),c.DelayTimer=void 0),c.DelayLimitTimer!=null&&(clearTimeout(c.DelayLimitTimer),c.DelayLimitTimer=void 0)}function nh(){return c.ProjectToPersist!=null}async function Xr(){const r=c.ProjectToPersist;fS(),c.PersistenceState==="running"&&(c.PersistenceRequested=!0),c.PersistenceRequested=!1,c.PersistenceState="running";try{await Zt.setItem(r.Name,JSON.stringify(r.Serialization)),c.PersistenceState="idle"}catch{Q("PersistenceFailure: could not persist project "+Ne(r.Name)),c.PersistenceState="failed"}c.PersistenceRequested&&Xr()}function pu(r){return _n(c.ProjectName)&&c.normalizedProjectList.indexOf(r.toLowerCase())<0}function Vo(r){return c.Project!=null&&c.Project.Name.toLowerCase()!==r.toLowerCase()}function mS(r,e,...t){switch(gS(r),e){case"attachBoard":case"detachBoard":c.BoardTree=r.BoardList,c.BoardTreeState++;return;case"configureFolder":switch(t[1]==="Name"&&c.BoardTreeState++,t[0]){case c.Project:c.ProjectProperties=lh(r),c.BoardProperties=si(c.chosenBoard),c.StickerSelectionProperties=tn(c.selectedStickers),c.ViewState++;return;case c.chosenBoard:c.BoardProperties=si(c.chosenBoard),c.StickerSelectionProperties=tn(c.selectedStickers),c.ViewState++;return;default:t[0].containsFolder(c.chosenBoard)&&(c.BoardProperties=si(c.chosenBoard),c.StickerSelectionProperties=tn(c.selectedStickers),c.ViewState++)}return;case"attachSticker":case"detachSticker":t[1]===c.chosenBoard&&(c.StickerList=c.chosenBoard.StickerList,c.ViewState++);return;case"configureSticker":if(t[0].Board===c.chosenBoard){const n=c.selectedStickers;t[1]==="Geometry"&&(c.StickerSelectionGeometries=n.map(i=>i.Geometry)),c.StickerSelectionProperties=tn(n),c.ViewState++}return}}function SS(r,e,t){(e===c.chosenBoard||c.chosenBoard==null)&&N0.rerender()}function xS(r,e,t){window.alert(t.Type+`
`+t.Message+`
`+t.Cause)}function ur(r){if(pa("list of boards to be selected",r,hn),r.length===0){c.selectedBoards=[];return}try{const e=Br(r),t=new Set;r.forEach(n=>t.add(n)),c.selectedBoards=Cr(Array.from(t.values()))}catch{c.selectedBoards=[],console.error("InternalError:selected boards do not share the same folder")}}function Ti(r){c.chosenBoard=r!=null&&r.isAttached?r:void 0}function kr(r){if(r.length===0){c.selectedStickers=[];return}const e=new Set,t=c.chosenBoard;r.forEach(n=>{n.isAttached&&n.Board===t&&e.add(n)}),c.selectedStickers=Ot(Array.from(e.values()))}const Sr=[];let Tt=0;function Te(r){Pe(),Tt<Sr.length&&(Sr.length=Tt);let e;const t=Sr[Tt-1];return t!=null&&r.canExtend(t)?(e=r.extend(t),t.isIrrelevant&&(Tt-=1)):(e=r.doNow(),Sr.push(r),Tt+=1),c.OperationHistoryState++,e}function bS(){Pe();let r=Sr[Tt-1];if(r!=null){const e=r.undo();return Tt-=1,c.OperationHistoryState++,e}}function _S(){Pe();let r=Sr[Tt];if(r!=null){const e=r.redo();return Tt+=1,c.OperationHistoryState++,e}}const Ht=[];let dt=[],je=-1;function yS(){c.mayVisitPrevBoard&&(je-=1,Ti(dt[je]),c.VisitHistoryState++)}function vS(){c.mayVisitNextBoard&&(je+=1,Ti(dt[je]),c.VisitHistoryState++)}function Xe(r){if(r==null)Ti(void 0),dt.length=0,je=-1;else{if(dt[je]===r)return;c.mayVisitNextBoard?(je+=1,dt[je]!==r&&(dt[je]=r,dt.length=je+1)):(dt.push(r),je+=1),Ti(r)}c.VisitHistoryState++}function wS(){var r;for(let e=dt.length-1;e>=0;e--)(dt[e]==null||!dt[e].isAttached)&&je>=e&&(je-=1);je<0&&dt.length>0&&(je=0),Xe(dt[je]||((r=c.Project)==null?void 0:r.BoardList[0]))}const Qa=105e4,es=2e4;let Fi=0,Di=0;function kS(){me.openDialog("Console")}function $S(){me.closeDialog("Console")}function eo(){c.ConsoleValue="",Fi=0,Di=0}function ih(...r){oh(ah(r))}function IS(...r){oh(ah(r.concat(`
`)))}function oh(r){if(r==="")return;let e=gu(r),t=r.length;e>es||t>Qa?(eo(),r=PS(r,e,t),Fi=gu(r)+1,Di=r.length,c.ConsoleValue=r):(BS(e,t),Fi+=e,Di+=t,c.ConsoleValue+=r)}function PS(r,e,t){let n=e-es,i=t-Qa;for(let o=0,u=-1;;)if(u=r.indexOf(`
`,u+1),o+=1,o>=n&&u>=i)return r.slice(u+1)}function BS(r,e){let t=Fi+r-es,n=Di+e-Qa;if(t<=0&&n<=0)return;let i=c.Console.Value;for(let o=0,u=-1;;){if(u=i.indexOf(`
`,u+1),u<0){eo();return}if(o+=1,o>=t&&u-o*28>=n){c.Console.Value=i.slice(u+1);return}}}function gu(r){let e=r.match(/\n/g);return e===null?0:e.length}function ah(r){let e="";for(let t=0;t<r.length;t++){let n=r[t];switch(typeof n){case"undefined":e+="(undefined)";break;case"boolean":e+=n.toString();break;case"number":e+=n.toString();break;case"string":e+=n;break;case"function":e+="(function)";break;case"object":e+=n===null?"(null)":n.toString();break;default:e+="(unknown)";break}}return e}Object.assign(window,{Console:{show:kS,hide:$S,clear:eo,print:ih,println:IS}});function CS(r,e){const t=r.Name||r.Project.Name||"Note-Stickers Applet";let n=0,i=0;r.StickerList.forEach(u=>{const{Width:s,Height:l}=u;n<s&&(n=s),i<l&&(i=l)});const o={x:0,y:0,Width:n,Height:i,BoardList:[r.Serialization]};e==="standalone"?ts(t,o):rs(t,o)}function VS(r,e){const t=r.Name||r.Project.Name||"Note-Stickers Applet",n=r.Folder.BoardList.slice(r.Index);let i=0,o=0;n.forEach(s=>{s.StickerList.forEach(l=>{const{Width:a,Height:h}=l;i<a&&(i=a),o<h&&(o=h)})});const u={x:0,y:0,Width:i,Height:o,BoardList:n.map(s=>s.Serialization)};e==="standalone"?ts(t,u):rs(t,u)}function NS(r,e){const t=Zr(r);if(t==null)return;const n=Ot(r),i=n[0].Name||t.Name||t.Project.Name||"Note-Stickers Applet",o=n.map(p=>p.Serialization);let[u,s,l,a]=[1/0,1/0,0,0];o.forEach(p=>{const{x:f,y:x,Width:b,Height:y}=p.Geometry;u=Math.min(u,f),l=Math.max(l,f+b),s=Math.min(s,x),a=Math.max(a,x+y)}),o.forEach(p=>{p.Geometry.x-=u,p.Geometry.y-=s});const h=l-u,d=a-s,g={x:0,y:0,Width:h,Height:d,BoardList:[{StickerList:o,activeScript:t.activeScript}]};e==="standalone"?ts(i,g):rs(i,g)}function ts(r,e){const t=`
<!DOCTYPE html>
<html lang="en" charset="utf-8" style="width:100%">
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

  <meta name="viewport" content="minimal-ui, width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>

  <meta name="apple-mobile-web-app-capable"          content="yes"/>
  <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
  <meta name="format-detection"                      content="telephone=no">

  <style name="mobile-prologue">
    html {
      text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      -o-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    html, body { width:100%; height:100%; width:100vw; height:100vh; margin:0px; padding:0px }
    html       { overflow:hidden scroll }
  </style>
  <script src="https://rozek.github.io/note-stickers/dist/note-stickers-runtime.js"><\/script>
  <script type="Note-Stickers" name="${r}">
${JSON.stringify(e)}
  <\/script>
 </head>
 <body type="Note-Stickers" name="${r}">
 </body>
</html>
    `.trim(),n=new TextEncoder().encode(t),i=new TextDecoder().decode(n);t===i?download(n,r+".html","text/html;charset=utf-8"):window.alert("this applet generation is not stable")}function rs(r,e){const t=`
  <script type="Note-Stickers" name="${r}">
${JSON.stringify(e)}
  <\/script>
  <div type="Note-Stickers" name="${r}">
  </div>
    `.trim(),n=new TextEncoder().encode(t),i=new TextDecoder().decode(n);t===i?download(n,r+".html","text/html;charset=utf-8"):window.alert("this applet generation is not stable")}function Pe(){c.InspectorMessage=""}function K(r){c.InspectorMessage=r.trim()}Wt(()=>{console.log("was changed: Application.Project");const r=c.Project;r==null?(c.BoardTree=[],c.BoardTreeState=0,c.ProjectProperties=In):(c.BoardTree=r.BoardList,c.BoardTreeState++,c.ProjectProperties=lh(r))});Wt(()=>{console.log("was changed: Application.BoardTreeState"),c.BoardTreeState,wS()});Wt(()=>{console.log("was changed: Application.BoardTreeState/selectedBoards/expandedBoards"),c.BoardTreeState,c.selectedBoards=c.BoardTree.length===0?[]:c.selectedBoards.filter(e=>e!=null&&e.isAttached),c.expandedBoards=c.BoardTree.length===0?[]:c.expandedBoards.filter(e=>e!=null&&e.isAttached);const r=c.selectedBoards;c.BoardSelectionMayBeShiftedUp=DS(r),c.BoardSelectionMayBeShiftedDown=dh(r),c.BoardSelectionMayBeShiftedIn=WS(r),c.BoardSelectionMayBeShiftedOut=LS(r)});Wt(()=>{console.log("was changed: Application.chosenBoard");const r=c.chosenBoard;c.BoardProperties=si(r),c.StickerList=r==null?[]:r.StickerList,c.ViewState++});Wt(()=>{console.log("was changed: Application.StickerList"),c.StickerGeometries=c.StickerList.map(r=>r.Geometry)});Wt(()=>{console.log("was changed: Application.chosenBoard/StickerList/selectedStickers");const r=c.chosenBoard;c.StickerList,c.selectedStickers=c.selectedStickers.filter(t=>t.isAttached&&t.Board===r);const e=c.selectedStickers;c.StickerSelectionGeometries=e.map(t=>t.Geometry),c.StickerSelectionProperties=tn(e),c.StickerSelectionMayBeShiftedUp=AS(e),c.StickerSelectionMayBeShiftedDown=US(e)});Wt(()=>{switch(console.log("was changed: Application.ScriptEditorMode/Project/Board/StickerSelectionProperties"),c.ScriptEditorMode){case"Project":c.ScriptEditorValue=c.Project==null?xe:c.ProjectProperties.Script||"";break;case"Board":c.ScriptEditorValue=c.chosenBoard==null?xe:c.BoardProperties.Script||"";break;case"Stickers":c.ScriptEditorValue=c.selectedStickers.length===0?xe:c.StickerSelectionProperties.Script||"";break}});Wt(()=>{switch(console.log("was changed: Application.ValueEditorMode/Project/Board/StickerSelectionProperties"),c.ValueEditorMode){case"Project":c.ScriptEditorValue=c.Project==null?xe:c.ProjectProperties.editableValue||"";break;case"Board":c.ScriptEditorValue=c.chosenBoard==null?xe:c.BoardProperties.editableValue||"";break;case"Stickers":c.ScriptEditorValue=c.selectedStickers.length===0?xe:c.StickerSelectionProperties.editableValue||"";break}});Wt(()=>{console.log("was changed: Application.OperationHistoryState"),c.OperationHistoryState,c.mayUndoOperation=Tt>0,c.mayRedoOperation=Tt<Sr.length});Wt(()=>{console.log("was changed: Application.VisitHistoryState"),c.VisitHistoryState,c.mayVisitPrevBoard=je>0,c.mayVisitNextBoard=je<dt.length-1});class Lt{get isIrrelevant(){return!1}set isIrrelevant(e){ue("isIrrelevant")}}class to extends Lt{constructor(t,n,i){super();re(this,"_Project");re(this,"_PropertyName");re(this,"_oldValue");re(this,"_newValue");this._Project=t,this._PropertyName=n,this._oldValue=t[n],this._newValue=i}canExtend(t){return t instanceof to&&t._Project===this._Project&&t._PropertyName===this._PropertyName&&Hr(t._newValue,this._oldValue)}get isIrrelevant(){return this._newValue===this._oldValue}set isIrrelevant(t){ue("isIrrelevant")}doNow(){Pe();try{this._Project[this._PropertyName]=this._newValue}catch{K("operation failed"),Q("OperationFailure: could not change the given property")}}extend(t){this.doNow(),t._newValue=this._newValue}redo(){this.doNow()}undo(){Pe();try{this._Project[this._PropertyName]=this._oldValue}catch{K("operation failed"),Q("OperationFailure: could not restore the given property")}}}class sh extends Lt{constructor(t,n,i,o=!1){super();re(this,"_Folder");re(this,"_Serializations");re(this,"_Index");re(this,"_newBoards",[]);this._Folder=t,this._Serializations=n.slice(),this._Index=i,o||this._Serializations.forEach(u=>Jt(u))}canExtend(t){return!1}get isIrrelevant(){return!1}set isIrrelevant(t){ue("isIrrelevant")}doNow(){if(Pe(),!this._Folder.isAttached){K("board no longer exists");return}const t=this._newBoards=[];this._Serializations.forEach((n,i)=>{try{const o=this._Folder.BoardDeserializedAt(n,this._Index+i);t.push(o),o.recursivelyActivateAllScripts()}catch{debugger}}),t.length!==this._Serializations.length&&K("operation did not fully succeed"),t.length===0&&(K("operation failed"),Q("OperationFailure: could not create any new boards")),ur(t)}extend(t){Q("NotExtensible: this operation can not be extended")}redo(){this.doNow()}undo(){if(Pe(),!this._Folder.isAttached){K("board no longer exists");return}const t=[];this._newBoards.forEach(n=>{try{this._Folder.hasBoard(n)&&this._Folder.destroyBoard(n),t.push(n)}catch{}}),t.length!==this._newBoards.length&&K("operation did not fully succeed"),t.length===0&&(K("operation failed"),Q("OperationFailure: could not delete the previously created boards")),ur([])}}class ro extends Lt{constructor(t,n,i){super();re(this,"_Board");re(this,"_PropertyName");re(this,"_oldValue");re(this,"_newValue");this._Board=t,this._PropertyName=n,this._oldValue=t[n],this._newValue=i}canExtend(t){return t instanceof ro&&t._Board===this._Board&&t._PropertyName===this._PropertyName&&Hr(t._newValue,this._oldValue)}get isIrrelevant(){return this._newValue===this._oldValue}set isIrrelevant(t){ue("isIrrelevant")}doNow(){if(Pe(),!this._Board.isAttached){K("board no longer exists");return}try{this._Board[this._PropertyName]=this._newValue}catch{K("operation failed"),Q("OperationFailure: could not change the given property")}}extend(t){this._Board.isAttached&&Xe(this._Board),this.doNow(),t._newValue=this._newValue}redo(){this._Board.isAttached&&Xe(this._Board),this.doNow()}undo(){if(Pe(),this._Board.isAttached)Xe(this._Board);else{K("board no longer exists");return}try{this._Board[this._PropertyName]=this._oldValue}catch{K("operation failed"),Q("OperationFailure: could not restore the given property")}}}class no extends Lt{constructor(t,n,i,o){super();re(this,"_oldFolder");re(this,"_oldIndices");re(this,"_newFolder");re(this,"_newIndex");this._oldFolder=t,this._oldIndices=n.map(u=>u.Index),this._newFolder=i,this._newIndex=o}canExtend(t){if(t instanceof no&&t._newFolder===this._oldFolder){const n=t._newIndex;return this._oldIndices.every((i,o)=>i===n+o)}else return!1}get isIrrelevant(){if(this._newFolder===this._oldFolder){const t=this._newIndex;return this._oldIndices.every((n,i)=>n===t+i)}else return!1}set isIrrelevant(t){ue("isIrrelevant")}doNow(){if(Pe(),!this._oldFolder.isAttached){K("original folder no longer exists");return}if(!this._newFolder.isAttached){K("target folder no longer exists");return}const t=this._oldFolder,n=this._oldIndices,i=this._newFolder,o=this._newIndex;let u=[];for(let s=n.length-1;s>=0;s--)try{t.moveBoardTo(n[s],i,o),u.push(i.Board(o))}catch{debugger}u.length!==n.length&&K("operation did not fully succeed"),u.length===0&&(K("operation failed"),Q("OperationFailure: could not move the given boards")),ur(u)}extend(t){this.doNow(),t._newFolder=this._newFolder,t._newIndex=this._newIndex}redo(){this.doNow()}undo(){if(Pe(),!this._oldFolder.isAttached){K("original folder no longer exists");return}if(!this._newFolder.isAttached){K("target folder no longer exists");return}const t=this._oldFolder,n=this._oldIndices,i=this._newFolder,o=this._newIndex;let u=[];for(let s=0,l=n.length;s<l;s++)try{i.moveBoardTo(o,t,n[s]),u.push(t.Board(n[s]))}catch{debugger}u.length!==n.length&&K("operation did not fully succeed"),u.length===0&&(K("operation failed"),Q("OperationFailure: could not move the given boards")),ur(u)}}class io extends Lt{constructor(t,n,i){super();re(this,"_Folder");re(this,"_Boards");re(this,"_oldIndices");re(this,"_newIndices");re(this,"_forwardMoves");re(this,"_backwardMoves");this._Folder=t,this._Boards=n,this._oldIndices=n.map(u=>u.Index),this._newIndices=i.slice();let o=this._Folder.BoardCount;this._forwardMoves=Wi(this._oldIndices,this._newIndices,o),this._backwardMoves=Wi(this._newIndices,this._oldIndices,o)}canExtend(t){return t instanceof io&&ir(t._Boards,this._Boards)&&ir(t._newIndices,this._oldIndices)}get isIrrelevant(){return ir(this._oldIndices,this._newIndices)}set isIrrelevant(t){ue("isIrrelevant")}doNow(){if(Pe(),!this._Folder.isAttached){K("folder no longer exists");return}this._shiftBoards(this._forwardMoves),ur(this._Boards)}extend(t){this.doNow(),t._newIndices=this._newIndices,t._forwardMoves=this._forwardMoves,t._backwardMoves=this._backwardMoves}redo(){this.doNow()}undo(){if(Pe(),!this._Folder.isAttached){K("folder no longer exists");return}this._shiftBoards(this._backwardMoves),ur(this._Boards)}_shiftBoards(t){if(t.length===0)return;const n=[];t.forEach((i,o)=>{try{this._Folder.shiftBoardsByIndex(i.oldIndex,i.newIndex,i.Count),n.push(i)}catch{debugger}}),n.length!==t.length&&K("operation did not fully succeed"),n.length===0&&(K("operation failed"),Q("OperationFailure: could not shift the given boards"))}}class TS extends Lt{constructor(t){super();re(this,"_Folder");re(this,"_Boards");re(this,"_Indices");re(this,"_Serializations");this._Folder=Br(t),this._Boards=t.slice(),this._Indices=t.map(n=>n.Index),this._Serializations=t.map(n=>n.Serialization)}canExtend(t){return!1}get isIrrelevant(){return!1}set isIrrelevant(t){ue("isIrrelevant")}doNow(){if(Pe(),ur([]),!this._Folder.isAttached)return;const t=this._Boards.filter(i=>this._Folder.hasBoard(i));if(t.length===0)return;const n=[];t.forEach(i=>{try{this._Folder.destroyBoard(i),n.push(i)}catch{debugger}}),n.length!==t.length&&K("operation did not fully succeed"),n.length===0&&(K("operation failed"),Q("OperationFailure: could not delete any boards"))}extend(t){Q("NotExtensible: this operation can not be extended")}redo(){this.doNow()}undo(){if(Pe(),!this._Folder.isAttached){K("folder no longer exists");return}const t=this._Boards=[];this._Serializations.forEach((n,i)=>{try{const o=this._Folder.BoardDeserializedAt(n,this._Indices[i]);t.push(o),o.recursivelyActivateAllScripts()}catch{debugger}}),t.length!==this._Serializations.length&&K("operation did not fully succeed"),t.length===0&&(K("operation failed"),Q("OperationFailure: could not restore any previously deleted boards")),ur(t)}}class oo extends Lt{constructor(t,n,i,o=!1){super();re(this,"_Board");re(this,"_Serializations");re(this,"_Index");re(this,"_newStickers",[]);this._Board=t,this._Serializations=n.slice(),this._Index=i,o||this._Serializations.forEach(u=>Jt(u))}canExtend(t){return!1}get isIrrelevant(){return!1}set isIrrelevant(t){ue("isIrrelevant")}doNow(){if(Pe(),!this._Board.isAttached){K("board no longer exists");return}const t=this._newStickers=[];this._Serializations.forEach((n,i)=>{try{const o=this._Board.StickerDeserializedAt(n,this._Index+i);t.push(o),o.activateScript()}catch{debugger}}),t.length!==this._Serializations.length&&K("operation did not fully succeed"),t.length===0&&(K("operation failed"),Q("OperationFailure: could not create any new stickers")),kr(t)}extend(t){Q("NotExtensible: this operation can not be extended")}redo(){this._Board.isAttached&&Xe(this._Board),this.doNow()}undo(){if(Pe(),this._Board.isAttached)Xe(this._Board);else{K("board no longer exists");return}const t=[];this._newStickers.forEach(n=>{try{this._Board.hasSticker(n)&&this._Board.destroySticker(n),t.push(n)}catch{debugger}}),t.length!==this._newStickers.length&&K("operation did not fully succeed"),t.length===0&&(K("operation failed"),Q("OperationFailure: could not delete the previously created stickers")),kr([])}}class ao extends Lt{constructor(t,n,i){super();re(this,"_Board");re(this,"_Stickers");re(this,"_PropertyName");re(this,"_oldValues");re(this,"_newValue");this._Board=Zr(t),this._Stickers=t.slice(),this._PropertyName=n,this._oldValues=t.map(o=>o[n]),this._newValue=i}canExtend(t){return t instanceof ao&&ir(t._Stickers,this._Stickers)&&t._PropertyName===this._PropertyName&&this._oldValues.every(n=>Hr(t._newValue,n))}get isIrrelevant(){return this._oldValues.every(t=>Hr(this._newValue,t))}set isIrrelevant(t){ue("isIrrelevant")}doNow(){Pe();const t=this._Stickers.filter(i=>i.isAttached);if(t.length===0){K("stickers no longer exist");return}const n=[];t.forEach(i=>{try{i[this._PropertyName]=this._newValue,n.push(i)}catch{debugger}}),n.length!==t.length&&K("operation did not fully succeed"),n.length===0&&(K("operation failed"),Q("OperationFailure: could not change the given property"))}extend(t){this._Board.isAttached&&Xe(this._Board),this.doNow(),t._newValue=this._newValue}redo(){this._Board.isAttached&&Xe(this._Board),this.doNow()}undo(){Pe();const t=this._Stickers.filter(i=>i.isAttached);if(t.length===0){K("stickers no longer exist");return}this._Board.isAttached&&Xe(this._Board);const n=[];t.forEach(i=>{let o=this._Stickers.indexOf(i);try{i[this._PropertyName]=this._oldValues[o],n.push(i)}catch{debugger}}),n.length!==t.length&&K("operation did not fully succeed"),n.length===0&&(K("operation failed"),Q("OperationFailure: could not restore the given property"))}}class ns extends Lt{constructor(t,n){super();re(this,"_Board");re(this,"_Stickers");re(this,"_oldGeometries");re(this,"_newGeometries");this._Board=t[0].Board,this._Stickers=t.slice(),this._oldGeometries=t.map(i=>i.Geometry),this._newGeometries=n.slice()}canExtend(t){return t instanceof ns&&ir(t._Stickers,this._Stickers)&&this._oldGeometries.every((n,i)=>Hr(t._newGeometries[i],n))}get isIrrelevant(){return this._oldGeometries.every((t,n)=>Hr(this._newGeometries[n],t))}set isIrrelevant(t){ue("isIrrelevant")}doNow(){Pe();const t=this._Stickers.filter(i=>i.isAttached);if(t.length===0){K("stickers no longer exist");return}const n=[];t.forEach((i,o)=>{try{i.Geometry=this._newGeometries[o],n.push(i)}catch{debugger}}),n.length!==t.length&&K("operation did not fully succeed"),n.length===0&&(K("operation failed"),Q("OperationFailure: could not change the given property"))}extend(t){this._Board.isAttached&&Xe(this._Board),this.doNow(),t._newGeometries=this._newGeometries}redo(){this._Board.isAttached&&Xe(this._Board),this.doNow()}undo(){Pe();const t=this._Stickers.filter(i=>i.isAttached);if(t.length===0){K("stickers no longer exist");return}this._Board.isAttached&&Xe(this._Board);const n=[];t.forEach(i=>{let o=this._Stickers.indexOf(i);try{i.Geometry=this._oldGeometries[o],n.push(i)}catch{debugger}}),n.length!==t.length&&K("operation did not fully succeed"),n.length===0&&(K("operation failed"),Q("OperationFailure: could not restore the given property"))}}class qr extends Lt{constructor(t,n){super();re(this,"_Board");re(this,"_Stickers");re(this,"_oldIndices");re(this,"_newIndices");re(this,"_forwardMoves");re(this,"_backwardMoves");this._Board=Zr(t),this._Stickers=t,this._oldIndices=t.map(o=>o.Index),this._newIndices=n.slice();let i=this._Board.StickerCount;this._forwardMoves=Wi(this._oldIndices,this._newIndices,i),this._backwardMoves=Wi(this._newIndices,this._oldIndices,i)}canExtend(t){return t instanceof qr&&ir(t._Stickers,this._Stickers)&&ir(this._oldIndices,t._newIndices)}get isIrrelevant(){return ir(this._oldIndices,this._newIndices)}set isIrrelevant(t){ue("isIrrelevant")}doNow(){if(Pe(),!this._Board.isAttached){K("board no longer exists");return}this._shiftStickers(this._forwardMoves),kr(this._Stickers)}extend(t){Xe(this._Board),this.doNow(),t._newIndices=this._newIndices,t._forwardMoves=this._forwardMoves,t._backwardMoves=this._backwardMoves}redo(){Xe(this._Board),this.doNow()}undo(){if(Pe(),this._Board.isAttached)Xe(this._Board);else{K("board no longer exists");return}this._shiftStickers(this._backwardMoves),kr(this._Stickers)}_shiftStickers(t){if(t.length===0)return;const n=[];t.forEach((i,o)=>{try{this._Board.shiftStickersByIndex(i.oldIndex,i.newIndex,i.Count),n.push(i)}catch{debugger}}),n.length!==t.length&&K("operation did not fully succeed"),n.length===0&&(K("operation failed"),Q("OperationFailure: could not shift the given stickers"))}}class FS extends Lt{constructor(t){super();re(this,"_Board");re(this,"_Stickers");re(this,"_Indices");re(this,"_Serializations");this._Board=Zr(t),this._Stickers=t.slice(),this._Indices=t.map(n=>n.Index),this._Serializations=t.map(n=>n.Serialization)}canExtend(t){return!1}get isIrrelevant(){return!1}set isIrrelevant(t){ue("isIrrelevant")}doNow(){if(Pe(),!this._Board.isAttached)return;const t=this._Stickers.filter(i=>this._Board.hasSticker(i));if(t.length===0)return;const n=[];t.forEach(i=>{try{this._Board.destroySticker(i),n.push(i)}catch{debugger}}),n.length!==t.length&&K("operation did not fully succeed"),n.length===0&&(K("operation failed"),Q("OperationFailure: could not delete any stickers"))}extend(t){Q("NotExtensible: this operation can not be extended")}redo(){this._Board.isAttached&&Xe(this._Board),this.doNow()}undo(){if(Pe(),kr([]),this._Board.isAttached)Xe(this._Board);else{K("board no longer exists");return}const t=this._Stickers=[];this._Serializations.forEach((n,i)=>{try{const o=this._Board.StickerDeserializedAt(n,this._Indices[i]);t.push(o),o.activateScript()}catch{debugger}}),t.length!==this._Serializations.length&&K("operation did not fully succeed"),t.length===0&&(K("operation failed"),Q("OperationFailure: could not restore any previously deleted stickers")),kr(t)}}function lh(r){const e={};return Object.keys(In).forEach(t=>e[t]=r[t]),e}function Br(r){if(r.length===0)return c.Project;let e=r[0].Folder;return r.some(t=>t.Folder!==e)&&Q("InvalidArgument: the given boards do not all belong to the same folder"),e}function Cr(r){if(r.length===0)return[];const e=r.map(t=>({Board:t,Index:t.Index}));return e.sort((t,n)=>t.Index-n.Index),e.map(t=>t.Board)}function fu(r){return r.map(e=>e.IndexPath)}function mu(r){const e=c.Project;return r.map(t=>e.BoardAtIndexPath(t)).filter(t=>t!=null)}function DS(r){return r.length===0?!1:is(r)>0?!0:Pn(r)>r.length}function dh(r){if(r.length===0)return!1;const e=r[0].Folder.BoardCount;return Pn(r)<e-1?!0:is(r)<e-r.length}function WS(r){return r.length===0?!1:dh(r)}function LS(r){var e,t;return r.length===0?!1:((t=(e=r[0])==null?void 0:e.Folder)==null?void 0:t.Folder)!=null}function is(r){if(r.length===0)return-1;let e=1/0;return r.forEach(t=>e=Math.min(e,t.Index)),e}function Pn(r){if(r.length===0)return-1;let e=0;return r.forEach(t=>e=Math.max(e,t.Index)),e}function si(r){if(r==null)return na;const e={};return Object.keys(na).forEach(t=>e[t]=r[t]),e}function Zr(r){if(r.length===0)return;let e=r[0].Board;return r.some(t=>t.Board!==e)&&Q("InvalidArgument: the given stickers do not all belong to the same board"),e}function Ot(r){if(r.length===0)return[];const e=r.map(t=>({Sticker:t,Index:t.Index}));return e.sort((t,n)=>t.Index-n.Index),e.map(t=>t.Sticker)}function ES(r){const e={};return Object.keys(Ni).forEach(t=>e[t]=r[t]),e}function tn(r){if(r.length===0)return{...Ni};const e=ES(r[0]);return r.slice(1).forEach(t=>{Object.keys(Ni).forEach(n=>{const i=t[n];br(i,e)&&(e[n]=Yr)})}),e}function AS(r){return r.length===0?!1:os(r)>0?!0:Bn(r)>r.length}function US(r){if(r.length===0)return!1;const e=r[0].Folder.StickerCount;return Bn(r)<e-1?!0:os(r)<e-r.length}function os(r){if(r.length===0)return-1;let e=1/0;return r.forEach(t=>e=Math.min(e,t.Index)),e}function Bn(r){if(r.length===0)return-1;let e=0;return r.forEach(t=>e=Math.max(e,t.Index)),e}function uh(r){return r.length===0?{minX:0,minY:0}:{minX:Math.min(...r.map(e=>e.x)),minY:Math.min(...r.map(e=>e.y))}}function we(r){return r===xe||r===Yr?null:r}function qe(r){return r===xe||r===Yr?null:Math.round(r)}function Nt(r,e=!0){return r===xe||r===Yr?null:r===e}function MS(r){switch(!0){case r==null:return"(no error found)";case r===xe:return"(no selection)";case r===Yr:return"(various errors)";default:return r.Type+": "+r.Message}}function XS(r){window.alert(r.Type+`

`+r.Message)}function as(r){let e=(r.pendingScript||"").trim(),t=(r.activeScript||"").trim();if(t===""&&(t=void 0),t!==e){if(e==null||e==="")r.activeScript=void 0,r.pendingScript=void 0,r.activateScript(),r.ScriptError=void 0,r.Error=void 0;else{const{activeScript:n,pendingScript:i}=r;r.activeScript=i,r.activateScript(),r.Error==null?(r.pendingScript=void 0,r.ScriptError=void 0):(r.ScriptError=r.Error,r.activeScript=n,r.activateScript())}r.rerender()}}function ir(r,e){return r.length===e.length&&r.every((t,n)=>t===e[n])}function Wi(r,e,t){let n=Array(t).fill(NaN).map((s,l)=>l);r.forEach(s=>n[s]=-1),n=n.filter(s=>s!==-1);let i=Array(t).fill(-1);e.forEach((s,l)=>i[s]=r[l]);for(let s=0,l=t;s<l;s++)i[s]===-1&&(i[s]=n.shift());const o=[];function u(s,l){const a=n[s];n.splice(s,1),n.splice(l,0,a),o.push({oldIndex:s,newIndex:l,Count:1})}n=Array(t).fill(NaN).map((s,l)=>l);for(let s=0,l=t;s<l;s++)n[s]!==i[s]&&u(n.indexOf(i[s]),s);for(let s=o.length-1;s>=1;s--){const l=o[s],a=o[s-1];a[0]===l[0]-1&&a[1]===l[1]-1&&(o.splice(s,1),a[2]+=l[2])}return o}on.config({driver:[on.INDEXEDDB,on.WEBSQL]});on.ready(function(){Zt=on.createInstance({name:"NoteStickers"}),Or(),T0("ProjectBrowser"),ih("ready for operation"),Object.assign(window,{Application:c,MainScreen:me.ScreenNamed("MainScreen"),Inspector:me.DialogNamed("Inspector")})});
//# sourceMappingURL=index.js.map
