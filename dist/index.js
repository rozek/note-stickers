var q0=Object.defineProperty;var J0=(t,e,i)=>e in t?q0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var se=(t,e,i)=>(J0(t,typeof e!="symbol"?e+"":e,i),i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();function Sl(t){var e=/^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(t);if(e==null)throw new Error(t);var i=new Error(e[2]);throw i.name=e[1],i}var ya=Array.isArray;function K0(t,e,i,r){if(ya(t))try{for(var o=0,n=t.length;o<n;o++)if(e(t[o])==!1)return!1;return!(i!=null&&t.length<i||r!=null&&t.length>r)}catch{}return!1}function Q0(t,e,i,r,o,n){if(e==null&&Sl("MissingArgument: no ".concat(Zo(t)," given")),K0(e,i,o,n))return e;Sl("InvalidArgument: the given ".concat(Zo(t)," is ")+(r==null?"either not a list or contains invalid elements":"no "+Zo(r)))}function Zo(t){var e=/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g,i=/[\x00-\x1f\x7f-\x9f]/g;return t.replace(e,function(r){return r==="\\"?"\\\\":r}).replace(i,function(r){switch(r){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v";default:{var o=r.charCodeAt(0).toString(16);return"\\x"+"00".slice(o.length)+o}}})}function em(t,e){e===void 0&&(e='"');var i=/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|'/g,r=/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|"/g,o=/[\x00-\x1f\x7f-\x9f]/g;return t.replace(e==="'"?i:r,function(n){switch(n){case"'":return"\\'";case'"':return'\\"';case"\\":return"\\\\";default:return n}}).replace(o,function(n){switch(n){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v";default:{var s=n.charCodeAt(0).toString(16);return"\\x"+"00".slice(s.length)+s}}})}function gt(t,e){return e===void 0&&(e='"'),e+em(t,e)+e}function An(t,e,i){if(t===e)return!1;var r=typeof t;if(r!==typeof e)return!0;function o(s,l,u){if(!Array.isArray(l)||s.length!==l.length)return!0;for(var a=0,c=s.length;a<c;a++)if(An(s[a],l[a]))return!0;return!1}function n(s,l,u){if(Object.getPrototypeOf(s)!==Object.getPrototypeOf(l))return!0;for(var a in s)if(!(a in l))return!0;for(var a in l)if(!(a in s)||An(s[a],l[a]))return!0;return!1}switch(r){case"undefined":case"boolean":case"string":case"function":return!0;case"number":return isNaN(t)!==isNaN(e)||Math.abs(t-e)>Number.EPSILON;case"object":return t==null||e==null?!0:Array.isArray(t)?o(t,e):n(t,e);default:return!0}return!0}function ur(t,e,i){return!An(t,e)}var Jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Kr(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var qp={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(t,e){(function(i){t.exports=i()})(function(){return function i(r,o,n){function s(a,c){if(!o[a]){if(!r[a]){var d=typeof Kr=="function"&&Kr;if(!c&&d)return d(a,!0);if(l)return l(a,!0);var g=new Error("Cannot find module '"+a+"'");throw g.code="MODULE_NOT_FOUND",g}var p=o[a]={exports:{}};r[a][0].call(p.exports,function(f){var m=r[a][1][f];return s(m||f)},p,p.exports,i,r,o,n)}return o[a].exports}for(var l=typeof Kr=="function"&&Kr,u=0;u<n.length;u++)s(n[u]);return s}({1:[function(i,r,o){(function(n){var s=n.MutationObserver||n.WebKitMutationObserver,l;if(s){var u=0,a=new s(f),c=n.document.createTextNode("");a.observe(c,{characterData:!0}),l=function(){c.data=u=++u%2}}else if(!n.setImmediate&&typeof n.MessageChannel<"u"){var d=new n.MessageChannel;d.port1.onmessage=f,l=function(){d.port2.postMessage(0)}}else"document"in n&&"onreadystatechange"in n.document.createElement("script")?l=function(){var x=n.document.createElement("script");x.onreadystatechange=function(){f(),x.onreadystatechange=null,x.parentNode.removeChild(x),x=null},n.document.documentElement.appendChild(x)}:l=function(){setTimeout(f,0)};var g,p=[];function f(){g=!0;for(var x,b,P=p.length;P;){for(b=p,p=[],x=-1;++x<P;)b[x]();P=p.length}g=!1}r.exports=m;function m(x){p.push(x)===1&&!g&&l()}}).call(this,typeof Jr<"u"?Jr:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(i,r,o){var n=i(1);function s(){}var l={},u=["REJECTED"],a=["FULFILLED"],c=["PENDING"];r.exports=d;function d(y){if(typeof y!="function")throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,y!==s&&m(this,y)}d.prototype.catch=function(y){return this.then(null,y)},d.prototype.then=function(y,N){if(typeof y!="function"&&this.state===a||typeof N!="function"&&this.state===u)return this;var B=new this.constructor(s);if(this.state!==c){var F=this.state===a?y:N;p(B,F,this.outcome)}else this.queue.push(new g(B,y,N));return B};function g(y,N,B){this.promise=y,typeof N=="function"&&(this.onFulfilled=N,this.callFulfilled=this.otherCallFulfilled),typeof B=="function"&&(this.onRejected=B,this.callRejected=this.otherCallRejected)}g.prototype.callFulfilled=function(y){l.resolve(this.promise,y)},g.prototype.otherCallFulfilled=function(y){p(this.promise,this.onFulfilled,y)},g.prototype.callRejected=function(y){l.reject(this.promise,y)},g.prototype.otherCallRejected=function(y){p(this.promise,this.onRejected,y)};function p(y,N,B){n(function(){var F;try{F=N(B)}catch($){return l.reject(y,$)}F===y?l.reject(y,new TypeError("Cannot resolve promise with itself")):l.resolve(y,F)})}l.resolve=function(y,N){var B=x(f,N);if(B.status==="error")return l.reject(y,B.value);var F=B.value;if(F)m(y,F);else{y.state=a,y.outcome=N;for(var $=-1,T=y.queue.length;++$<T;)y.queue[$].callFulfilled(N)}return y},l.reject=function(y,N){y.state=u,y.outcome=N;for(var B=-1,F=y.queue.length;++B<F;)y.queue[B].callRejected(N);return y};function f(y){var N=y&&y.then;if(y&&(typeof y=="object"||typeof y=="function")&&typeof N=="function")return function(){N.apply(y,arguments)}}function m(y,N){var B=!1;function F(ee){B||(B=!0,l.reject(y,ee))}function $(ee){B||(B=!0,l.resolve(y,ee))}function T(){N($,F)}var H=x(T);H.status==="error"&&F(H.value)}function x(y,N){var B={};try{B.value=y(N),B.status="success"}catch(F){B.status="error",B.value=F}return B}d.resolve=b;function b(y){return y instanceof this?y:l.resolve(new this(s),y)}d.reject=P;function P(y){var N=new this(s);return l.reject(N,y)}d.all=C;function C(y){var N=this;if(Object.prototype.toString.call(y)!=="[object Array]")return this.reject(new TypeError("must be an array"));var B=y.length,F=!1;if(!B)return this.resolve([]);for(var $=new Array(B),T=0,H=-1,ee=new this(s);++H<B;)te(y[H],H);return ee;function te(Ne,Vt){N.resolve(Ne).then(Me,function(He){F||(F=!0,l.reject(ee,He))});function Me(He){$[Vt]=He,++T===B&&!F&&(F=!0,l.resolve(ee,$))}}}d.race=w;function w(y){var N=this;if(Object.prototype.toString.call(y)!=="[object Array]")return this.reject(new TypeError("must be an array"));var B=y.length,F=!1;if(!B)return this.resolve([]);for(var $=-1,T=new this(s);++$<B;)H(y[$]);return T;function H(ee){N.resolve(ee).then(function(te){F||(F=!0,l.resolve(T,te))},function(te){F||(F=!0,l.reject(T,te))})}}},{1:1}],3:[function(i,r,o){(function(n){typeof n.Promise!="function"&&(n.Promise=i(2))}).call(this,typeof Jr<"u"?Jr:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(i,r,o){var n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _};function s(_,v){if(!(_ instanceof v))throw new TypeError("Cannot call a class as a function")}function l(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var u=l();function a(){try{if(!u||!u.open)return!1;var _=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),v=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!_||v)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function c(_,v){_=_||[],v=v||{};try{return new Blob(_,v)}catch(I){if(I.name!=="TypeError")throw I;for(var S=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,V=new S,W=0;W<_.length;W+=1)V.append(_[W]);return V.getBlob(v.type)}}typeof Promise>"u"&&i(3);var d=Promise;function g(_,v){v&&_.then(function(S){v(null,S)},function(S){v(S)})}function p(_,v,S){typeof v=="function"&&_.then(v),typeof S=="function"&&_.catch(S)}function f(_){return typeof _!="string"&&(console.warn(_+" used as a key, but it is not a string."),_=String(_)),_}function m(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var x="local-forage-detect-blob-support",b=void 0,P={},C=Object.prototype.toString,w="readonly",y="readwrite";function N(_){for(var v=_.length,S=new ArrayBuffer(v),V=new Uint8Array(S),W=0;W<v;W++)V[W]=_.charCodeAt(W);return S}function B(_){return new d(function(v){var S=_.transaction(x,y),V=c([""]);S.objectStore(x).put(V,"key"),S.onabort=function(W){W.preventDefault(),W.stopPropagation(),v(!1)},S.oncomplete=function(){var W=navigator.userAgent.match(/Chrome\/(\d+)/),I=navigator.userAgent.match(/Edge\//);v(I||!W||parseInt(W[1],10)>=43)}}).catch(function(){return!1})}function F(_){return typeof b=="boolean"?d.resolve(b):B(_).then(function(v){return b=v,b})}function $(_){var v=P[_.name],S={};S.promise=new d(function(V,W){S.resolve=V,S.reject=W}),v.deferredOperations.push(S),v.dbReady?v.dbReady=v.dbReady.then(function(){return S.promise}):v.dbReady=S.promise}function T(_){var v=P[_.name],S=v.deferredOperations.pop();if(S)return S.resolve(),S.promise}function H(_,v){var S=P[_.name],V=S.deferredOperations.pop();if(V)return V.reject(v),V.promise}function ee(_,v){return new d(function(S,V){if(P[_.name]=P[_.name]||q(),_.db)if(v)$(_),_.db.close();else return S(_.db);var W=[_.name];v&&W.push(_.version);var I=u.open.apply(u,W);v&&(I.onupgradeneeded=function(U){var O=I.result;try{O.createObjectStore(_.storeName),U.oldVersion<=1&&O.createObjectStore(x)}catch(Y){if(Y.name==="ConstraintError")console.warn('The database "'+_.name+'" has been upgraded from version '+U.oldVersion+" to version "+U.newVersion+', but the storage "'+_.storeName+'" already exists.');else throw Y}}),I.onerror=function(U){U.preventDefault(),V(I.error)},I.onsuccess=function(){var U=I.result;U.onversionchange=function(O){O.target.close()},S(U),T(_)}})}function te(_){return ee(_,!1)}function Ne(_){return ee(_,!0)}function Vt(_,v){if(!_.db)return!0;var S=!_.db.objectStoreNames.contains(_.storeName),V=_.version<_.db.version,W=_.version>_.db.version;if(V&&(_.version!==v&&console.warn('The database "'+_.name+`" can't be downgraded from version `+_.db.version+" to version "+_.version+"."),_.version=_.db.version),W||S){if(S){var I=_.db.version+1;I>_.version&&(_.version=I)}return!0}return!1}function Me(_){return new d(function(v,S){var V=new FileReader;V.onerror=S,V.onloadend=function(W){var I=btoa(W.target.result||"");v({__local_forage_encoded_blob:!0,data:I,type:_.type})},V.readAsBinaryString(_)})}function He(_){var v=N(atob(_.data));return c([v],{type:_.type})}function Ze(_){return _&&_.__local_forage_encoded_blob}function jt(_){var v=this,S=v._initReady().then(function(){var V=P[v._dbInfo.name];if(V&&V.dbReady)return V.dbReady});return p(S,_,_),S}function oi(_){$(_);for(var v=P[_.name],S=v.forages,V=0;V<S.length;V++){var W=S[V];W._dbInfo.db&&(W._dbInfo.db.close(),W._dbInfo.db=null)}return _.db=null,te(_).then(function(I){return _.db=I,Vt(_)?Ne(_):I}).then(function(I){_.db=v.db=I;for(var U=0;U<S.length;U++)S[U]._dbInfo.db=I}).catch(function(I){throw H(_,I),I})}function j(_,v,S,V){V===void 0&&(V=1);try{var W=_.db.transaction(_.storeName,v);S(null,W)}catch(I){if(V>0&&(!_.db||I.name==="InvalidStateError"||I.name==="NotFoundError"))return d.resolve().then(function(){if(!_.db||I.name==="NotFoundError"&&!_.db.objectStoreNames.contains(_.storeName)&&_.version<=_.db.version)return _.db&&(_.version=_.db.version+1),Ne(_)}).then(function(){return oi(_).then(function(){j(_,v,S,V-1)})}).catch(S);S(I)}}function q(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function ye(_){var v=this,S={db:null};if(_)for(var V in _)S[V]=_[V];var W=P[S.name];W||(W=q(),P[S.name]=W),W.forages.push(v),v._initReady||(v._initReady=v.ready,v.ready=jt);var I=[];function U(){return d.resolve()}for(var O=0;O<W.forages.length;O++){var Y=W.forages[O];Y!==v&&I.push(Y._initReady().catch(U))}var Z=W.forages.slice(0);return d.all(I).then(function(){return S.db=W.db,te(S)}).then(function(J){return S.db=J,Vt(S,v._defaultConfig.version)?Ne(S):J}).then(function(J){S.db=W.db=J,v._dbInfo=S;for(var re=0;re<Z.length;re++){var ve=Z[re];ve!==v&&(ve._dbInfo.db=S.db,ve._dbInfo.version=S.version)}})}function Qe(_,v){var S=this;_=f(_);var V=new d(function(W,I){S.ready().then(function(){j(S._dbInfo,w,function(U,O){if(U)return I(U);try{var Y=O.objectStore(S._dbInfo.storeName),Z=Y.get(_);Z.onsuccess=function(){var J=Z.result;J===void 0&&(J=null),Ze(J)&&(J=He(J)),W(J)},Z.onerror=function(){I(Z.error)}}catch(J){I(J)}})}).catch(I)});return g(V,v),V}function lt(_,v){var S=this,V=new d(function(W,I){S.ready().then(function(){j(S._dbInfo,w,function(U,O){if(U)return I(U);try{var Y=O.objectStore(S._dbInfo.storeName),Z=Y.openCursor(),J=1;Z.onsuccess=function(){var re=Z.result;if(re){var ve=re.value;Ze(ve)&&(ve=He(ve));var Ce=_(ve,re.key,J++);Ce!==void 0?W(Ce):re.continue()}else W()},Z.onerror=function(){I(Z.error)}}catch(re){I(re)}})}).catch(I)});return g(V,v),V}function Oe(_,v,S){var V=this;_=f(_);var W=new d(function(I,U){var O;V.ready().then(function(){return O=V._dbInfo,C.call(v)==="[object Blob]"?F(O.db).then(function(Y){return Y?v:Me(v)}):v}).then(function(Y){j(V._dbInfo,y,function(Z,J){if(Z)return U(Z);try{var re=J.objectStore(V._dbInfo.storeName);Y===null&&(Y=void 0);var ve=re.put(Y,_);J.oncomplete=function(){Y===void 0&&(Y=null),I(Y)},J.onabort=J.onerror=function(){var Ce=ve.error?ve.error:ve.transaction.error;U(Ce)}}catch(Ce){U(Ce)}})}).catch(U)});return g(W,S),W}function ai(_,v){var S=this;_=f(_);var V=new d(function(W,I){S.ready().then(function(){j(S._dbInfo,y,function(U,O){if(U)return I(U);try{var Y=O.objectStore(S._dbInfo.storeName),Z=Y.delete(_);O.oncomplete=function(){W()},O.onerror=function(){I(Z.error)},O.onabort=function(){var J=Z.error?Z.error:Z.transaction.error;I(J)}}catch(J){I(J)}})}).catch(I)});return g(V,v),V}function Ee(_){var v=this,S=new d(function(V,W){v.ready().then(function(){j(v._dbInfo,y,function(I,U){if(I)return W(I);try{var O=U.objectStore(v._dbInfo.storeName),Y=O.clear();U.oncomplete=function(){V()},U.onabort=U.onerror=function(){var Z=Y.error?Y.error:Y.transaction.error;W(Z)}}catch(Z){W(Z)}})}).catch(W)});return g(S,_),S}function Pe(_){var v=this,S=new d(function(V,W){v.ready().then(function(){j(v._dbInfo,w,function(I,U){if(I)return W(I);try{var O=U.objectStore(v._dbInfo.storeName),Y=O.count();Y.onsuccess=function(){V(Y.result)},Y.onerror=function(){W(Y.error)}}catch(Z){W(Z)}})}).catch(W)});return g(S,_),S}function dt(_,v){var S=this,V=new d(function(W,I){if(_<0){W(null);return}S.ready().then(function(){j(S._dbInfo,w,function(U,O){if(U)return I(U);try{var Y=O.objectStore(S._dbInfo.storeName),Z=!1,J=Y.openKeyCursor();J.onsuccess=function(){var re=J.result;if(!re){W(null);return}_===0||Z?W(re.key):(Z=!0,re.advance(_))},J.onerror=function(){I(J.error)}}catch(re){I(re)}})}).catch(I)});return g(V,v),V}function D(_){var v=this,S=new d(function(V,W){v.ready().then(function(){j(v._dbInfo,w,function(I,U){if(I)return W(I);try{var O=U.objectStore(v._dbInfo.storeName),Y=O.openKeyCursor(),Z=[];Y.onsuccess=function(){var J=Y.result;if(!J){V(Z);return}Z.push(J.key),J.continue()},Y.onerror=function(){W(Y.error)}}catch(J){W(J)}})}).catch(W)});return g(S,_),S}function R(_,v){v=m.apply(this,arguments);var S=this.config();_=typeof _!="function"&&_||{},_.name||(_.name=_.name||S.name,_.storeName=_.storeName||S.storeName);var V=this,W;if(!_.name)W=d.reject("Invalid arguments");else{var I=_.name===S.name&&V._dbInfo.db,U=I?d.resolve(V._dbInfo.db):te(_).then(function(O){var Y=P[_.name],Z=Y.forages;Y.db=O;for(var J=0;J<Z.length;J++)Z[J]._dbInfo.db=O;return O});_.storeName?W=U.then(function(O){if(O.objectStoreNames.contains(_.storeName)){var Y=O.version+1;$(_);var Z=P[_.name],J=Z.forages;O.close();for(var re=0;re<J.length;re++){var ve=J[re];ve._dbInfo.db=null,ve._dbInfo.version=Y}var Ce=new d(function(Be,qe){var Re=u.open(_.name,Y);Re.onerror=function(Nt){var yr=Re.result;yr.close(),qe(Nt)},Re.onupgradeneeded=function(){var Nt=Re.result;Nt.deleteObjectStore(_.storeName)},Re.onsuccess=function(){var Nt=Re.result;Nt.close(),Be(Nt)}});return Ce.then(function(Be){Z.db=Be;for(var qe=0;qe<J.length;qe++){var Re=J[qe];Re._dbInfo.db=Be,T(Re._dbInfo)}}).catch(function(Be){throw(H(_,Be)||d.resolve()).catch(function(){}),Be})}}):W=U.then(function(O){$(_);var Y=P[_.name],Z=Y.forages;O.close();for(var J=0;J<Z.length;J++){var re=Z[J];re._dbInfo.db=null}var ve=new d(function(Ce,Be){var qe=u.deleteDatabase(_.name);qe.onerror=function(){var Re=qe.result;Re&&Re.close(),Be(qe.error)},qe.onblocked=function(){console.warn('dropInstance blocked for database "'+_.name+'" until all open connections are closed')},qe.onsuccess=function(){var Re=qe.result;Re&&Re.close(),Ce(Re)}});return ve.then(function(Ce){Y.db=Ce;for(var Be=0;Be<Z.length;Be++){var qe=Z[Be];T(qe._dbInfo)}}).catch(function(Ce){throw(H(_,Ce)||d.resolve()).catch(function(){}),Ce})})}return g(W,v),W}var M={_driver:"asyncStorage",_initStorage:ye,_support:a(),iterate:lt,getItem:Qe,setItem:Oe,removeItem:ai,clear:Ee,length:Pe,key:dt,keys:D,dropInstance:R};function z(){return typeof openDatabase=="function"}var G="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ie="~~local_forage_type~",$e=/^~~local_forage_type~([^~]+)~/,he="__lfsc__:",Ie=he.length,Fe="arbf",Ct="blob",_r="si08",Sr="ui08",ct="uic8",Bt="si16",ht="si32",Wt="ur16",Bi="ui32",Qi="fl32",Wi="fl64",er=Ie+Fe.length,cl=Object.prototype.toString;function hl(_){var v=_.length*.75,S=_.length,V,W=0,I,U,O,Y;_[_.length-1]==="="&&(v--,_[_.length-2]==="="&&v--);var Z=new ArrayBuffer(v),J=new Uint8Array(Z);for(V=0;V<S;V+=4)I=G.indexOf(_[V]),U=G.indexOf(_[V+1]),O=G.indexOf(_[V+2]),Y=G.indexOf(_[V+3]),J[W++]=I<<2|U>>4,J[W++]=(U&15)<<4|O>>2,J[W++]=(O&3)<<6|Y&63;return Z}function Oo(_){var v=new Uint8Array(_),S="",V;for(V=0;V<v.length;V+=3)S+=G[v[V]>>2],S+=G[(v[V]&3)<<4|v[V+1]>>4],S+=G[(v[V+1]&15)<<2|v[V+2]>>6],S+=G[v[V+2]&63];return v.length%3===2?S=S.substring(0,S.length-1)+"=":v.length%3===1&&(S=S.substring(0,S.length-2)+"=="),S}function h0(_,v){var S="";if(_&&(S=cl.call(_)),_&&(S==="[object ArrayBuffer]"||_.buffer&&cl.call(_.buffer)==="[object ArrayBuffer]")){var V,W=he;_ instanceof ArrayBuffer?(V=_,W+=Fe):(V=_.buffer,S==="[object Int8Array]"?W+=_r:S==="[object Uint8Array]"?W+=Sr:S==="[object Uint8ClampedArray]"?W+=ct:S==="[object Int16Array]"?W+=Bt:S==="[object Uint16Array]"?W+=Wt:S==="[object Int32Array]"?W+=ht:S==="[object Uint32Array]"?W+=Bi:S==="[object Float32Array]"?W+=Qi:S==="[object Float64Array]"?W+=Wi:v(new Error("Failed to get type for BinaryArray"))),v(W+Oo(V))}else if(S==="[object Blob]"){var I=new FileReader;I.onload=function(){var U=ie+_.type+"~"+Oo(this.result);v(he+Ct+U)},I.readAsArrayBuffer(_)}else try{v(JSON.stringify(_))}catch(U){console.error("Couldn't convert value into a JSON string: ",_),v(null,U)}}function p0(_){if(_.substring(0,Ie)!==he)return JSON.parse(_);var v=_.substring(er),S=_.substring(Ie,er),V;if(S===Ct&&$e.test(v)){var W=v.match($e);V=W[1],v=v.substring(W[0].length)}var I=hl(v);switch(S){case Fe:return I;case Ct:return c([I],{type:V});case _r:return new Int8Array(I);case Sr:return new Uint8Array(I);case ct:return new Uint8ClampedArray(I);case Bt:return new Int16Array(I);case Wt:return new Uint16Array(I);case ht:return new Int32Array(I);case Bi:return new Uint32Array(I);case Qi:return new Float32Array(I);case Wi:return new Float64Array(I);default:throw new Error("Unkown type: "+S)}}var zo={serialize:h0,deserialize:p0,stringToBuffer:hl,bufferToString:Oo};function pl(_,v,S,V){_.executeSql("CREATE TABLE IF NOT EXISTS "+v.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],S,V)}function g0(_){var v=this,S={db:null};if(_)for(var V in _)S[V]=typeof _[V]!="string"?_[V].toString():_[V];var W=new d(function(I,U){try{S.db=openDatabase(S.name,String(S.version),S.description,S.size)}catch(O){return U(O)}S.db.transaction(function(O){pl(O,S,function(){v._dbInfo=S,I()},function(Y,Z){U(Z)})},U)});return S.serializer=zo,W}function mi(_,v,S,V,W,I){_.executeSql(S,V,W,function(U,O){O.code===O.SYNTAX_ERR?U.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[v.storeName],function(Y,Z){Z.rows.length?I(Y,O):pl(Y,v,function(){Y.executeSql(S,V,W,I)},I)},I):I(U,O)},I)}function f0(_,v){var S=this;_=f(_);var V=new d(function(W,I){S.ready().then(function(){var U=S._dbInfo;U.db.transaction(function(O){mi(O,U,"SELECT * FROM "+U.storeName+" WHERE key = ? LIMIT 1",[_],function(Y,Z){var J=Z.rows.length?Z.rows.item(0).value:null;J&&(J=U.serializer.deserialize(J)),W(J)},function(Y,Z){I(Z)})})}).catch(I)});return g(V,v),V}function m0(_,v){var S=this,V=new d(function(W,I){S.ready().then(function(){var U=S._dbInfo;U.db.transaction(function(O){mi(O,U,"SELECT * FROM "+U.storeName,[],function(Y,Z){for(var J=Z.rows,re=J.length,ve=0;ve<re;ve++){var Ce=J.item(ve),Be=Ce.value;if(Be&&(Be=U.serializer.deserialize(Be)),Be=_(Be,Ce.key,ve+1),Be!==void 0){W(Be);return}}W()},function(Y,Z){I(Z)})})}).catch(I)});return g(V,v),V}function gl(_,v,S,V){var W=this;_=f(_);var I=new d(function(U,O){W.ready().then(function(){v===void 0&&(v=null);var Y=v,Z=W._dbInfo;Z.serializer.serialize(v,function(J,re){re?O(re):Z.db.transaction(function(ve){mi(ve,Z,"INSERT OR REPLACE INTO "+Z.storeName+" (key, value) VALUES (?, ?)",[_,J],function(){U(Y)},function(Ce,Be){O(Be)})},function(ve){if(ve.code===ve.QUOTA_ERR){if(V>0){U(gl.apply(W,[_,Y,S,V-1]));return}O(ve)}})})}).catch(O)});return g(I,S),I}function x0(_,v,S){return gl.apply(this,[_,v,S,1])}function _0(_,v){var S=this;_=f(_);var V=new d(function(W,I){S.ready().then(function(){var U=S._dbInfo;U.db.transaction(function(O){mi(O,U,"DELETE FROM "+U.storeName+" WHERE key = ?",[_],function(){W()},function(Y,Z){I(Z)})})}).catch(I)});return g(V,v),V}function S0(_){var v=this,S=new d(function(V,W){v.ready().then(function(){var I=v._dbInfo;I.db.transaction(function(U){mi(U,I,"DELETE FROM "+I.storeName,[],function(){V()},function(O,Y){W(Y)})})}).catch(W)});return g(S,_),S}function b0(_){var v=this,S=new d(function(V,W){v.ready().then(function(){var I=v._dbInfo;I.db.transaction(function(U){mi(U,I,"SELECT COUNT(key) as c FROM "+I.storeName,[],function(O,Y){var Z=Y.rows.item(0).c;V(Z)},function(O,Y){W(Y)})})}).catch(W)});return g(S,_),S}function y0(_,v){var S=this,V=new d(function(W,I){S.ready().then(function(){var U=S._dbInfo;U.db.transaction(function(O){mi(O,U,"SELECT key FROM "+U.storeName+" WHERE id = ? LIMIT 1",[_+1],function(Y,Z){var J=Z.rows.length?Z.rows.item(0).key:null;W(J)},function(Y,Z){I(Z)})})}).catch(I)});return g(V,v),V}function v0(_){var v=this,S=new d(function(V,W){v.ready().then(function(){var I=v._dbInfo;I.db.transaction(function(U){mi(U,I,"SELECT key FROM "+I.storeName,[],function(O,Y){for(var Z=[],J=0;J<Y.rows.length;J++)Z.push(Y.rows.item(J).key);V(Z)},function(O,Y){W(Y)})})}).catch(W)});return g(S,_),S}function w0(_){return new d(function(v,S){_.transaction(function(V){V.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(W,I){for(var U=[],O=0;O<I.rows.length;O++)U.push(I.rows.item(O).name);v({db:_,storeNames:U})},function(W,I){S(I)})},function(V){S(V)})})}function $0(_,v){v=m.apply(this,arguments);var S=this.config();_=typeof _!="function"&&_||{},_.name||(_.name=_.name||S.name,_.storeName=_.storeName||S.storeName);var V=this,W;return _.name?W=new d(function(I){var U;_.name===S.name?U=V._dbInfo.db:U=openDatabase(_.name,"","",0),_.storeName?I({db:U,storeNames:[_.storeName]}):I(w0(U))}).then(function(I){return new d(function(U,O){I.db.transaction(function(Y){function Z(Ce){return new d(function(Be,qe){Y.executeSql("DROP TABLE IF EXISTS "+Ce,[],function(){Be()},function(Re,Nt){qe(Nt)})})}for(var J=[],re=0,ve=I.storeNames.length;re<ve;re++)J.push(Z(I.storeNames[re]));d.all(J).then(function(){U()}).catch(function(Ce){O(Ce)})},function(Y){O(Y)})})}):W=d.reject("Invalid arguments"),g(W,v),W}var k0={_driver:"webSQLStorage",_initStorage:g0,_support:z(),iterate:m0,getItem:f0,setItem:x0,removeItem:_0,clear:S0,length:b0,key:y0,keys:v0,dropInstance:$0};function I0(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function fl(_,v){var S=_.name+"/";return _.storeName!==v.storeName&&(S+=_.storeName+"/"),S}function P0(){var _="_localforage_support_test";try{return localStorage.setItem(_,!0),localStorage.removeItem(_),!1}catch{return!0}}function V0(){return!P0()||localStorage.length>0}function C0(_){var v=this,S={};if(_)for(var V in _)S[V]=_[V];return S.keyPrefix=fl(_,v._defaultConfig),V0()?(v._dbInfo=S,S.serializer=zo,d.resolve()):d.reject()}function B0(_){var v=this,S=v.ready().then(function(){for(var V=v._dbInfo.keyPrefix,W=localStorage.length-1;W>=0;W--){var I=localStorage.key(W);I.indexOf(V)===0&&localStorage.removeItem(I)}});return g(S,_),S}function W0(_,v){var S=this;_=f(_);var V=S.ready().then(function(){var W=S._dbInfo,I=localStorage.getItem(W.keyPrefix+_);return I&&(I=W.serializer.deserialize(I)),I});return g(V,v),V}function N0(_,v){var S=this,V=S.ready().then(function(){for(var W=S._dbInfo,I=W.keyPrefix,U=I.length,O=localStorage.length,Y=1,Z=0;Z<O;Z++){var J=localStorage.key(Z);if(J.indexOf(I)===0){var re=localStorage.getItem(J);if(re&&(re=W.serializer.deserialize(re)),re=_(re,J.substring(U),Y++),re!==void 0)return re}}});return g(V,v),V}function T0(_,v){var S=this,V=S.ready().then(function(){var W=S._dbInfo,I;try{I=localStorage.key(_)}catch{I=null}return I&&(I=I.substring(W.keyPrefix.length)),I});return g(V,v),V}function D0(_){var v=this,S=v.ready().then(function(){for(var V=v._dbInfo,W=localStorage.length,I=[],U=0;U<W;U++){var O=localStorage.key(U);O.indexOf(V.keyPrefix)===0&&I.push(O.substring(V.keyPrefix.length))}return I});return g(S,_),S}function F0(_){var v=this,S=v.keys().then(function(V){return V.length});return g(S,_),S}function U0(_,v){var S=this;_=f(_);var V=S.ready().then(function(){var W=S._dbInfo;localStorage.removeItem(W.keyPrefix+_)});return g(V,v),V}function A0(_,v,S){var V=this;_=f(_);var W=V.ready().then(function(){v===void 0&&(v=null);var I=v;return new d(function(U,O){var Y=V._dbInfo;Y.serializer.serialize(v,function(Z,J){if(J)O(J);else try{localStorage.setItem(Y.keyPrefix+_,Z),U(I)}catch(re){(re.name==="QuotaExceededError"||re.name==="NS_ERROR_DOM_QUOTA_REACHED")&&O(re),O(re)}})})});return g(W,S),W}function L0(_,v){if(v=m.apply(this,arguments),_=typeof _!="function"&&_||{},!_.name){var S=this.config();_.name=_.name||S.name,_.storeName=_.storeName||S.storeName}var V=this,W;return _.name?W=new d(function(I){_.storeName?I(fl(_,V._defaultConfig)):I(_.name+"/")}).then(function(I){for(var U=localStorage.length-1;U>=0;U--){var O=localStorage.key(U);O.indexOf(I)===0&&localStorage.removeItem(O)}}):W=d.reject("Invalid arguments"),g(W,v),W}var E0={_driver:"localStorageWrapper",_initStorage:C0,_support:I0(),iterate:N0,getItem:W0,setItem:A0,removeItem:U0,clear:B0,length:F0,key:T0,keys:D0,dropInstance:L0},X0=function(v,S){return v===S||typeof v=="number"&&typeof S=="number"&&isNaN(v)&&isNaN(S)},M0=function(v,S){for(var V=v.length,W=0;W<V;){if(X0(v[W],S))return!0;W++}return!1},ml=Array.isArray||function(_){return Object.prototype.toString.call(_)==="[object Array]"},br={},xl={},tr={INDEXEDDB:M,WEBSQL:k0,LOCALSTORAGE:E0},H0=[tr.INDEXEDDB._driver,tr.WEBSQL._driver,tr.LOCALSTORAGE._driver],qr=["dropInstance"],jo=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(qr),O0={description:"",driver:H0.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function z0(_,v){_[v]=function(){var S=arguments;return _.ready().then(function(){return _[v].apply(_,S)})}}function Ro(){for(var _=1;_<arguments.length;_++){var v=arguments[_];if(v)for(var S in v)v.hasOwnProperty(S)&&(ml(v[S])?arguments[0][S]=v[S].slice():arguments[0][S]=v[S])}return arguments[0]}var j0=function(){function _(v){s(this,_);for(var S in tr)if(tr.hasOwnProperty(S)){var V=tr[S],W=V._driver;this[S]=W,br[W]||this.defineDriver(V)}this._defaultConfig=Ro({},O0),this._config=Ro({},this._defaultConfig,v),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return _.prototype.config=function(S){if((typeof S>"u"?"undefined":n(S))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var V in S){if(V==="storeName"&&(S[V]=S[V].replace(/\W/g,"_")),V==="version"&&typeof S[V]!="number")return new Error("Database version must be a number.");this._config[V]=S[V]}return"driver"in S&&S.driver?this.setDriver(this._config.driver):!0}else return typeof S=="string"?this._config[S]:this._config},_.prototype.defineDriver=function(S,V,W){var I=new d(function(U,O){try{var Y=S._driver,Z=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!S._driver){O(Z);return}for(var J=jo.concat("_initStorage"),re=0,ve=J.length;re<ve;re++){var Ce=J[re],Be=!M0(qr,Ce);if((Be||S[Ce])&&typeof S[Ce]!="function"){O(Z);return}}var qe=function(){for(var yr=function(Y0){return function(){var Z0=new Error("Method "+Y0+" is not implemented by the current driver"),_l=d.reject(Z0);return g(_l,arguments[arguments.length-1]),_l}},Go=0,G0=qr.length;Go<G0;Go++){var Yo=qr[Go];S[Yo]||(S[Yo]=yr(Yo))}};qe();var Re=function(yr){br[Y]&&console.info("Redefining LocalForage driver: "+Y),br[Y]=S,xl[Y]=yr,U()};"_support"in S?S._support&&typeof S._support=="function"?S._support().then(Re,O):Re(!!S._support):Re(!0)}catch(Nt){O(Nt)}});return p(I,V,W),I},_.prototype.driver=function(){return this._driver||null},_.prototype.getDriver=function(S,V,W){var I=br[S]?d.resolve(br[S]):d.reject(new Error("Driver not found."));return p(I,V,W),I},_.prototype.getSerializer=function(S){var V=d.resolve(zo);return p(V,S),V},_.prototype.ready=function(S){var V=this,W=V._driverSet.then(function(){return V._ready===null&&(V._ready=V._initDriver()),V._ready});return p(W,S,S),W},_.prototype.setDriver=function(S,V,W){var I=this;ml(S)||(S=[S]);var U=this._getSupportedDrivers(S);function O(){I._config.driver=I.driver()}function Y(re){return I._extend(re),O(),I._ready=I._initStorage(I._config),I._ready}function Z(re){return function(){var ve=0;function Ce(){for(;ve<re.length;){var Be=re[ve];return ve++,I._dbInfo=null,I._ready=null,I.getDriver(Be).then(Y).catch(Ce)}O();var qe=new Error("No available storage method found.");return I._driverSet=d.reject(qe),I._driverSet}return Ce()}}var J=this._driverSet!==null?this._driverSet.catch(function(){return d.resolve()}):d.resolve();return this._driverSet=J.then(function(){var re=U[0];return I._dbInfo=null,I._ready=null,I.getDriver(re).then(function(ve){I._driver=ve._driver,O(),I._wrapLibraryMethodsWithReady(),I._initDriver=Z(U)})}).catch(function(){O();var re=new Error("No available storage method found.");return I._driverSet=d.reject(re),I._driverSet}),p(this._driverSet,V,W),this._driverSet},_.prototype.supports=function(S){return!!xl[S]},_.prototype._extend=function(S){Ro(this,S)},_.prototype._getSupportedDrivers=function(S){for(var V=[],W=0,I=S.length;W<I;W++){var U=S[W];this.supports(U)&&V.push(U)}return V},_.prototype._wrapLibraryMethodsWithReady=function(){for(var S=0,V=jo.length;S<V;S++)z0(this,jo[S])},_.prototype.createInstance=function(S){return new _(S)},_}(),R0=new j0;r.exports=R0},{3:3}]},{},[4])(4)})})(qp);var im=qp.exports;const wr=tm(im);var Jp,va,Kp,rm=[];function nm(t,e,i){var r,o,n,s={};for(n in e)n=="key"?r=e[n]:n=="ref"?o=e[n]:s[n]=e[n];if(arguments.length>2&&(s.children=arguments.length>3?Jp.call(arguments,2):i),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)s[n]===void 0&&(s[n]=t.defaultProps[n]);return om(t,s,r,o,null)}function om(t,e,i,r,o){var n={type:t,props:e,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Kp,__i:-1,__u:0};return o==null&&va.vnode!=null&&va.vnode(n),n}Jp=rm.slice,va={__e:function(t,e,i,r){for(var o,n,s;e=e.__;)if((o=e.__c)&&!o.__)try{if((n=o.constructor)&&n.getDerivedStateFromError!=null&&(o.setState(n.getDerivedStateFromError(t)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,r||{}),s=o.__d),s)return o.__E=o}catch(l){t=l}throw t}},Kp=0,typeof Promise=="function"&&Promise.prototype.then.bind(Promise.resolve());var Qp=function(t,e,i,r){var o;e[0]=0;for(var n=1;n<e.length;n++){var s=e[n++],l=e[n]?(e[0]|=s?1:2,i[e[n++]]):e[++n];s===3?r[0]=l:s===4?r[1]=Object.assign(r[1]||{},l):s===5?(r[1]=r[1]||{})[e[++n]]=l:s===6?r[1][e[++n]]+=l+"":s?(o=t.apply(l,Qp(t,l,i,["",null])),r.push(o),l[0]?e[0]|=2:(e[n-2]=0,e[n]=o)):r.push(l)}return r},bl=new Map;function am(t){var e=bl.get(this);return e||(e=new Map,bl.set(this,e)),(e=Qp(this,e.get(t)||(e.set(t,e=function(i){for(var r,o,n=1,s="",l="",u=[0],a=function(g){n===1&&(g||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,g,s):n===3&&(g||s)?(u.push(3,g,s),n=2):n===2&&s==="..."&&g?u.push(4,g,0):n===2&&s&&!g?u.push(5,0,!0,s):n>=5&&((s||!g&&n===5)&&(u.push(n,0,s,o),n=6),g&&(u.push(n,g,0,o),n=6)),s=""},c=0;c<i.length;c++){c&&(n===1&&a(),a(c));for(var d=0;d<i[c].length;d++)r=i[c][d],n===1?r==="<"?(a(),u=[u],n=3):s+=r:n===4?s==="--"&&r===">"?(n=1,s=""):s=r+s[0]:l?r===l?l="":s+=r:r==='"'||r==="'"?l=r:r===">"?(a(),n=1):n&&(r==="="?(n=5,o=s,s=""):r==="/"&&(n<5||i[c][d+1]===">")?(a(),n===3&&(u=u[0]),n=u,(u=u[0]).push(2,0,n),n=0):r===" "||r==="	"||r===`
`||r==="\r"?(a(),n=2):s+=r),n===3&&s==="!--"&&(n=4,u=u[0])}return a(),u}(t)),e),arguments,[])).length>1?e:e[0]}var wi=am.bind(nm),sm=Object.defineProperty,lm=(t,e,i)=>e in t?sm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Se=(t,e,i)=>(lm(t,typeof e!="symbol"?e+"":e,i),i);function At(t){var e=/^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(t);if(e==null)throw new Error(t);var i=new Error(e[2]);throw i.name=e[1],i}function go(t){return typeof t=="boolean"||t instanceof Boolean}function cr(t){return typeof t=="number"||t instanceof Number}function $r(t){return(typeof t=="number"||t instanceof Number)&&isFinite(t.valueOf())}function um(t,e,i,r,o){if(r===void 0&&(r=!0),o===void 0&&(o=!0),!cr(t)||isNaN(t))return!1;if($r(e)){if($r(i)){if(t<e||!r&&t===e||t>i||!o&&t===i)return!1}else if(t<e||!r&&t===e)return!1}else if($r(i)&&(t>i||!o&&t===i))return!1;return!0}function fo(t){return typeof t!="number"&&!(t instanceof Number)?!1:(t=t.valueOf(),isFinite(t)&&Math.round(t)===t)}function us(t){return typeof t!="number"&&!(t instanceof Number)?!1:(t=t.valueOf(),isFinite(t)&&Math.round(t)===t&&t>=0)}function dm(t){return typeof t!="number"&&!(t instanceof Number)?!1:(t=t.valueOf(),isFinite(t)&&Math.round(t)===t&&t>=1)}function Lr(t){return typeof t=="string"||t instanceof String}function Ot(t,e){return(typeof t=="string"||t instanceof String)&&e.test(t.valueOf())}var cm=/^[^\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function ds(t){return Ot(t,cm)}var hm=/^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function Yt(t){return Ot(t,hm)}function eg(t){return typeof t=="function"}function cs(t){return t!=null&&typeof t=="object"}function Er(t){return t!=null&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype}var tg=Array.isArray;function yl(t,e,i){if(tg(t)){for(var r=0,o=t.length;r<o;r++)if(t[r]===void 0)return!1;return!0}return!1}function Xr(t,e,i,r){if(tg(t))try{for(var o=0,n=t.length;o<n;o++)if(e(t[o])==!1)return!1;return!(i!=null&&t.length<i||r!=null&&t.length>r)}catch{}return!1}function ig(t,e){return e.indexOf(t)>=0}function mo(t){return Lr(t)&&(Pm.hasOwnProperty(t)||/^#[a-fA-F0-9]{6}$/.test(t)||/^#[a-fA-F0-9]{8}$/.test(t)||/^rgb\([0-9]+,\s*[0-9]+,\s*[0-9]+\)$/.test(t)||/^rgba\([0-9]+,\s*[0-9]+,\s*[0-9]+,([01]|[0]?[.][0-9]+)\)$/.test(t))}var pm=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;function rg(t){return Ot(t,pm)}var gm=/^[^\s\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function hs(t){if(!Ot(t,gm)||t==="")return!1;try{return new URL(t,"file://"),!0}catch{return!1}}var it=!1,Ae=!0;function fm(t,e,i,r,o){if(e==null){if(r)return e;At("MissingArgument: no ".concat(Lt(t)," given"))}else if(i(e))switch(!0){case e instanceof Boolean:case e instanceof Number:case e instanceof String:return e.valueOf();default:return e}else At("InvalidArgument: the given ".concat(Lt(t)," is no valid ").concat(Lt(o)))}function fe(t,e,i){var r=function(s,l){return fm(s,l,t,e,i)},o=t.name;if(o!=null&&/^ValueIs/.test(o)){var n=o.replace(/^ValueIs/,e?"allow":"expect");return mm(r,n)}else return r}function mm(t,e){if(t==null&&At("MissingArgument: no function given"),typeof t!="function"&&At("InvalidArgument: the given 1st Argument is not a JavaScript function"),e==null&&At("MissingArgument: no desired name given"),typeof e!="string"&&!(e instanceof String)&&At("InvalidArgument: the given desired name is not a string"),t.name===e)return t;try{if(Object.defineProperty(t,"name",{value:e}),t.name===e)return t}catch{}var i=new Function("originalFunction","return function "+e+" () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}");return i(t)}function ng(t,e){if(e==null)At("MissingArgument: no ".concat(Lt(t)," given"));else return e.valueOf()}var xm=fe(go,Ae,"boolean value"),qo=fe(go,it,"boolean value"),fn=fe(fo,Ae,"integral numeric value"),Li=fe(fo,it,"integral numeric value");function _m(t,e,i,r){return e==null?e:Sm(t,e,i,r)}function Br(t,e,i,r){if(Li(t,e),isNaN(e)&&At("InvalidArgument: the given ".concat(Lt(t)," is not-a-number")),i!=null&&isFinite(i)){if(r!=null&&isFinite(r)){if(e<i||e>r)throw new RangeError("the given ".concat(Lt(t)," (").concat(e,") is outside ")+"the allowed range (".concat(i,"...").concat(r,")"))}else if(e<i)throw new RangeError("the given ".concat(Lt(t)," is below the allowed ")+"minimum (".concat(e," < ").concat(i,")"))}else if(r!=null&&isFinite(r)&&e>r)throw new RangeError("the given ".concat(Lt(t)," exceeds the allowed ")+"maximum (".concat(e," > ").concat(r,")"));return e.valueOf()}var Sm=Br,vl=fe(us,Ae,"ordinal number"),wl=fe(dm,Ae,"cardinal number"),$l=fe(ds,Ae,"literal text"),bm=fe(Yt,Ae,"single line of text"),wa=fe(Yt,it,"single line of text"),mn=fe(eg,Ae,"JavaScript function"),kr=fe(eg,it,"JavaScript function"),ym=fe(Er,Ae,'"plain" JavaScript object');function vm(t,e,i,r,o,n){if(e==null&&At("MissingArgument: no ".concat(Lt(t)," given")),Xr(e,i,o,n))return e;At("InvalidArgument: the given ".concat(Lt(t)," is ")+"either not a list or contains invalid elements")}function wm(t,e,i){return e==null?e:km(t,e,i)}function $m(t,e,i){if(e==null&&At("MissingArgument: no ".concat(Lt(t)," given")),ig(e,i))return e==null||typeof e.valueOf!="function"?e:e.valueOf();At("InvalidArgument: the given ".concat(Lt(t)," is not among the supported values"))}var km=$m,kl=fe(mo,Ae,"CSS color specification"),og=fe(hs,Ae,"URL");function Lt(t){var e=/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g,i=/[\x00-\x1f\x7f-\x9f]/g;return t.replace(e,function(r){return r==="\\"?"\\\\":r}).replace(i,function(r){switch(r){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v";default:{var o=r.charCodeAt(0).toString(16);return"\\x"+"00".slice(o.length)+o}}})}function Im(t,e){e===void 0&&(e='"');var i=/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|'/g,r=/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|"/g,o=/[\x00-\x1f\x7f-\x9f]/g;return t.replace(e==="'"?i:r,function(n){switch(n){case"'":return"\\'";case'"':return'\\"';case"\\":return"\\\\";default:return n}}).replace(o,function(n){switch(n){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v";default:{var s=n.charCodeAt(0).toString(16);return"\\x"+"00".slice(s.length)+s}}})}function Ci(t,e){return e===void 0&&(e='"'),e+Im(t,e)+e}function Ir(t,e,i){if(t===e)return!1;var r=typeof t;if(r!==typeof e)return!0;function o(s,l,u){if(!Array.isArray(l)||s.length!==l.length)return!0;for(var a=0,c=s.length;a<c;a++)if(Ir(s[a],l[a]))return!0;return!1}function n(s,l,u){if(Object.getPrototypeOf(s)!==Object.getPrototypeOf(l))return!0;for(var a in s)if(!(a in l))return!0;for(var a in l)if(!(a in s)||Ir(s[a],l[a]))return!0;return!1}switch(r){case"undefined":case"boolean":case"string":case"function":return!0;case"number":return isNaN(t)!==isNaN(e)||Math.abs(t-e)>Number.EPSILON;case"object":return t==null||e==null?!0:Array.isArray(t)?o(t,e):n(t,e);default:return!0}return!0}var Pm={transparent:"rgba(0,0,0,0,0.0)",aliceblue:"rgba(240,248,255,1.0)",lightpink:"rgba(255,182,193,1.0)",antiquewhite:"rgba(250,235,215,1.0)",lightsalmon:"rgba(255,160,122,1.0)",aqua:"rgba(0,255,255,1.0)",lightseagreen:"rgba(32,178,170,1.0)",aquamarine:"rgba(127,255,212,1.0)",lightskyblue:"rgba(135,206,250,1.0)",azure:"rgba(240,255,255,1.0)",lightslategray:"rgba(119,136,153,1.0)",beige:"rgba(245,245,220,1.0)",lightslategrey:"rgba(119,136,153,1.0)",bisque:"rgba(255,228,196,1.0)",lightsteelblue:"rgba(176,196,222,1.0)",black:"rgba(0,0,0,1.0)",lightyellow:"rgba(255,255,224,1.0)",blanchedalmond:"rgba(255,235,205,1.0)",lime:"rgba(0,255,0,1.0)",blue:"rgba(0,0,255,1.0)",limegreen:"rgba(50,205,50,1.0)",blueviolet:"rgba(138,43,226,1.0)",linen:"rgba(250,240,230,1.0)",brown:"rgba(165,42,42,1.0)",magenta:"rgba(255,0,255,1.0)",burlywood:"rgba(222,184,135,1.0)",maroon:"rgba(128,0,0,1.0)",cadetblue:"rgba(95,158,160,1.0)",mediumaquamarine:"rgba(102,205,170,1.0)",chartreuse:"rgba(127,255,0,1.0)",mediumblue:"rgba(0,0,205,1.0)",chocolate:"rgba(210,105,30,1.0)",mediumorchid:"rgba(186,85,211,1.0)",coral:"rgba(255,127,80,1.0)",mediumpurple:"rgba(147,112,219,1.0)",cornflowerblue:"rgba(100,149,237,1.0)",mediumseagreen:"rgba(60,179,113,1.0)",cornsilk:"rgba(255,248,220,1.0)",mediumslateblue:"rgba(123,104,238,1.0)",crimson:"rgba(220,20,60,1.0)",mediumspringgreen:"rgba(0,250,154,1.0)",cyan:"rgba(0,255,255,1.0)",mediumturquoise:"rgba(72,209,204,1.0)",darkblue:"rgba(0,0,139,1.0)",mediumvioletred:"rgba(199,21,133,1.0)",darkcyan:"rgba(0,139,139,1.0)",midnightblue:"rgba(25,25,112,1.0)",darkgoldenrod:"rgba(184,134,11,1.0)",mintcream:"rgba(245,255,250,1.0)",darkgray:"rgba(169,169,169,1.0)",mistyrose:"rgba(255,228,225,1.0)",darkgreen:"rgba(0,100,0,1.0)",moccasin:"rgba(255,228,181,1.0)",darkgrey:"rgba(169,169,169,1.0)",navajowhite:"rgba(255,222,173,1.0)",darkkhaki:"rgba(189,183,107,1.0)",navy:"rgba(0,0,128,1.0)",darkmagenta:"rgba(139,0,139,1.0)",oldlace:"rgba(253,245,230,1.0)",darkolivegreen:"rgba(85,107,47,1.0)",olive:"rgba(128,128,0,1.0)",darkorange:"rgba(255,140,0,1.0)",olivedrab:"rgba(107,142,35,1.0)",darkorchid:"rgba(153,50,204,1.0)",orange:"rgba(255,165,0,1.0)",darkred:"rgba(139,0,0,1.0)",orangered:"rgba(255,69,0,1.0)",darksalmon:"rgba(233,150,122,1.0)",orchid:"rgba(218,112,214,1.0)",darkseagreen:"rgba(143,188,143,1.0)",palegoldenrod:"rgba(238,232,170,1.0)",darkslateblue:"rgba(72,61,139,1.0)",palegreen:"rgba(152,251,152,1.0)",darkslategray:"rgba(47,79,79,1.0)",paleturquoise:"rgba(175,238,238,1.0)",darkslategrey:"rgba(47,79,79,1.0)",palevioletred:"rgba(219,112,147,1.0)",darkturquoise:"rgba(0,206,209,1.0)",papayawhip:"rgba(255,239,213,1.0)",darkviolet:"rgba(148,0,211,1.0)",peachpuff:"rgba(255,218,185,1.0)",deeppink:"rgba(255,20,147,1.0)",peru:"rgba(205,133,63,1.0)",deepskyblue:"rgba(0,191,255,1.0)",pink:"rgba(255,192,203,1.0)",dimgray:"rgba(105,105,105,1.0)",plum:"rgba(221,160,221,1.0)",dimgrey:"rgba(105,105,105,1.0)",powderblue:"rgba(176,224,230,1.0)",dodgerblue:"rgba(30,144,255,1.0)",purple:"rgba(128,0,128,1.0)",firebrick:"rgba(178,34,34,1.0)",red:"rgba(255,0,0,1.0)",floralwhite:"rgba(255,250,240,1.0)",rosybrown:"rgba(188,143,143,1.0)",forestgreen:"rgba(34,139,34,1.0)",royalblue:"rgba(65,105,225,1.0)",fuchsia:"rgba(255,0,255,1.0)",saddlebrown:"rgba(139,69,19,1.0)",gainsboro:"rgba(220,220,220,1.0)",salmon:"rgba(250,128,114,1.0)",ghostwhite:"rgba(248,248,255,1.0)",sandybrown:"rgba(244,164,96,1.0)",gold:"rgba(255,215,0,1.0)",seagreen:"rgba(46,139,87,1.0)",goldenrod:"rgba(218,165,32,1.0)",seashell:"rgba(255,245,238,1.0)",gray:"rgba(128,128,128,1.0)",sienna:"rgba(160,82,45,1.0)",green:"rgba(0,128,0,1.0)",silver:"rgba(192,192,192,1.0)",greenyellow:"rgba(173,255,47,1.0)",skyblue:"rgba(135,206,235,1.0)",grey:"rgba(128,128,128,1.0)",slateblue:"rgba(106,90,205,1.0)",honeydew:"rgba(240,255,240,1.0)",slategray:"rgba(112,128,144,1.0)",hotpink:"rgba(255,105,180,1.0)",slategrey:"rgba(112,128,144,1.0)",indianred:"rgba(205,92,92,1.0)",snow:"rgba(255,250,250,1.0)",indigo:"rgba(75,0,130,1.0)",springgreen:"rgba(0,255,127,1.0)",ivory:"rgba(255,255,240,1.0)",steelblue:"rgba(70,130,180,1.0)",khaki:"rgba(240,230,140,1.0)",tan:"rgba(210,180,140,1.0)",lavender:"rgba(230,230,250,1.0)",teal:"rgba(0,128,128,1.0)",lavenderblush:"rgba(255,240,245,1.0)",thistle:"rgba(216,191,216,1.0)",lawngreen:"rgba(124,252,0,1.0)",tomato:"rgba(255,99,71,1.0)",lemonchiffon:"rgba(255,250,205,1.0)",turquoise:"rgba(64,224,208,1.0)",lightblue:"rgba(173,216,230,1.0)",violet:"rgba(238,130,238,1.0)",lightcoral:"rgba(240,128,128,1.0)",wheat:"rgba(245,222,179,1.0)",lightcyan:"rgba(224,255,255,1.0)",white:"rgba(255,255,255,1.0)",lightgoldenrodyellow:"rgba(250,250,210,1.0)",whitesmoke:"rgba(245,245,245,1.0)",lightgray:"rgba(211,211,211,1.0)",yellow:"rgba(255,255,0,1.0)",lightgreen:"rgba(144,238,144,1.0)",yellowgreen:"rgba(154,205,50,1.0)",lightgrey:"rgba(211,211,211,1.0)"},ag,$a,sg,Vm=[];function Cm(t,e,i){var r,o,n,s={};for(n in e)n=="key"?r=e[n]:n=="ref"?o=e[n]:s[n]=e[n];if(arguments.length>2&&(s.children=arguments.length>3?ag.call(arguments,2):i),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)s[n]===void 0&&(s[n]=t.defaultProps[n]);return Bm(t,s,r,o)}function Bm(t,e,i,r,o){var n={type:t,props:e,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:++sg,__i:-1,__u:0};return $a.vnode!=null&&$a.vnode(n),n}ag=Vm.slice,$a={__e:function(t,e,i,r){for(var o,n,s;e=e.__;)if((o=e.__c)&&!o.__)try{if((n=o.constructor)&&n.getDerivedStateFromError!=null&&(o.setState(n.getDerivedStateFromError(t)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,r||{}),s=o.__d),s)return o.__E=o}catch(l){t=l}throw t}},sg=0,typeof Promise=="function"&&Promise.prototype.then.bind(Promise.resolve());var lg=function(t,e,i,r){var o;e[0]=0;for(var n=1;n<e.length;n++){var s=e[n++],l=e[n]?(e[0]|=s?1:2,i[e[n++]]):e[++n];s===3?r[0]=l:s===4?r[1]=Object.assign(r[1]||{},l):s===5?(r[1]=r[1]||{})[e[++n]]=l:s===6?r[1][e[++n]]+=l+"":s?(o=t.apply(l,lg(t,l,i,["",null])),r.push(o),l[0]?e[0]|=2:(e[n-2]=0,e[n]=o)):r.push(l)}return r},Il=new Map;function Wm(t){var e=Il.get(this);return e||(e=new Map,Il.set(this,e)),(e=lg(this,e.get(t)||(e.set(t,e=function(i){for(var r,o,n=1,s="",l="",u=[0],a=function(g){n===1&&(g||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,g,s):n===3&&(g||s)?(u.push(3,g,s),n=2):n===2&&s==="..."&&g?u.push(4,g,0):n===2&&s&&!g?u.push(5,0,!0,s):n>=5&&((s||!g&&n===5)&&(u.push(n,0,s,o),n=6),g&&(u.push(n,g,0,o),n=6)),s=""},c=0;c<i.length;c++){c&&(n===1&&a(),a(c));for(var d=0;d<i[c].length;d++)r=i[c][d],n===1?r==="<"?(a(),u=[u],n=3):s+=r:n===4?s==="--"&&r===">"?(n=1,s=""):s=r+s[0]:l?r===l?l="":s+=r:r==='"'||r==="'"?l=r:r===">"?(a(),n=1):n&&(r==="="?(n=5,o=s,s=""):r==="/"&&(n<5||i[c][d+1]===">")?(a(),n===3&&(u=u[0]),n=u,(u=u[0]).push(2,0,n),n=0):r===" "||r==="	"||r===`
`||r==="\r"?(a(),n=2):s+=r),n===3&&s==="!--"&&(n=4,u=u[0])}return a(),u}(t)),e),arguments,[])).length>1?e:e[0]}var xo=Wm.bind(Cm);let Nm=t=>crypto.getRandomValues(new Uint8Array(t)),Tm=(t,e,i)=>{let r=(2<<Math.log(t.length-1)/Math.LN2)-1,o=-~(1.6*r*e/t.length);return(n=e)=>{let s="";for(;;){let l=i(o),u=o;for(;u--;)if(s+=t[l[u]&r]||"",s.length===n)return s}}},Dm=(t,e=21)=>Tm(t,e,Nm);var ug="abcdefghijklmnopqrstuvwxyz",dg="ABCDEFGHIJKLMNOPQRSTUVWXYZ",cg="0123456789",Fm="346789ABCDEFGHJKLMNPQRTUVWXYabcdefghijkmnpqrtwxyz",Um="6789BCDFGHJKLMNPQRTWbcdfghjkmnpqrtwz";const Am=cg,Lm=ug,Em=dg;var Xm=Am+Lm+Em,Mm={lowercase:ug,uppercase:dg,numbers:cg,nolookalikes:Fm,nolookalikesSafe:Um,alphanumeric:Xm};const Hm=["String","Number","Object","Array","Boolean","Date"];function Jo(t){return t&&typeof t=="object"}function ka(t,e,i){Object.defineProperty(t,e,{value:i,enumerable:!1,configurable:!0})}function Pl(t,e,i){ka(t,"__key",e),ka(t,"__parent",i)}function Om(t){return Object.getOwnPropertyNames(t).concat(Object.getPrototypeOf(t)&&Hm.indexOf(Object.getPrototypeOf(t).constructor.name)<0?Object.getOwnPropertyNames(Object.getPrototypeOf(t)):[]).filter(e=>e!=="constructor"&&typeof t[e]=="function")}const ps={computedStack:[],trackerSymbol:Symbol("tracker")};let nr=null;const Ln=Symbol();function Ia(){if(nr){for(const t of nr)t(),t[Ln]=!1;nr=null}}function Vl(t,e){t[Ln]||(nr===null&&(nr=[],e===!0?queueMicrotask(Ia):setTimeout(Ia,e)),nr.push(t))}const{computedStack:Qr,trackerSymbol:Ko}=ps,Qo=Symbol("__observed"),ui=Symbol("modifiedProperty");function xn(t,e={}){const{props:i,ignore:r,batch:o,deep:n=!0,bubble:s,bind:l}=e;if(t[Qo])return t;const u=g=>g!==Qo&&(i==null||i instanceof Array&&i.includes(g))&&(r==null||r instanceof Array&&!r.includes(g));n&&Object.entries(t).forEach(function([g,p]){Jo(p)&&u(g)&&(t[g]=xn(p,e),s&&Pl(t[g],g,t))});function a(g,p,f){if(p==="__handler")ka(g,"__handler",f);else if(!u(p))g[p]=f;else if(Array.isArray(g)&&p==="length"||zm(g[p],f)){const m=p!==ui&&n&&Jo(f),x=g[p];g[p]=m?xn(f,e):f,m&&s&&Pl(g[p],p,g);const b=[p];let P=g;for(;P&&!(P.__handler&&P.__handler(b,f,x,d)===!1);)P.__key&&P.__parent?(b.unshift(P.__key),P=P.__parent):P=null;const C=c.get(p);if(C)for(const w of C){const y=w[Ko],N=y&&y.get(g),B=N&&N.has(p);w.__disposed||y&&!B?C.delete(w):w!==Qr[0]&&(typeof o<"u"&&o!==!1?(Vl(w,o),w[Ln]=!0):w())}if(p!==ui){g[ui]=p;const w=c.get(ui);if(w)for(const y of w){const N=y[Ko],B=N&&N.get(g),F=B&&B.has(ui);y.__disposed||N&&!F?w.delete(y):y!==Qr[0]&&(typeof o<"u"&&o!==!1?(Vl(y,o),y[Ln]=!0):y())}}}}const c=new Map,d=new Proxy(t,{get(g,p){if(p===Qo)return!0;if(u(p)&&Qr.length){const f=Qr[0],m=f[Ko];if(m){let b=m.get(t);b||(b=new Set,m.set(t,b)),b.add(p)}let x=c.get(p);x||(x=new Set,c.set(p,x)),x.add(f)}return t[p]},set(g,p,f){return a(t,p,f),!0},defineProperty(g,p,f){if(p==="__handler")throw new Error("Don't track bubble handlers");if(u(p)){if(!Array.isArray(t)||p==="length"){"value"in f&&n&&Jo(f.value)&&(f={...f},f.value=xn(f.value,e));const m=Reflect.defineProperty(t,p,f);return p!==ui&&(t[ui]=p),m}}else return Reflect.defineProperty(t,p,f);return!1},deleteProperty(g,p){if(p===ui)throw new Error('internal property Symbol("modifiedProperty") must not be deleted');return p in t&&a(t,p,void 0),Reflect.deleteProperty(g,p)}});return l&&Om(t).forEach(g=>t[g]=t[g].bind(d)),d}function zm(t,e,i){const r=new Map;function o(n,s,l){if(n===s)return!1;let u=typeof n;if(u!==typeof s)return!0;function a(d,g,p){if(!Array.isArray(g)||d.length!==g.length)return!0;if(r.has(d)||r.has(g)){if(r.has(d)&&r.get(d).has(g)||r.has(g)&&r.get(g).has(d))return!1;r.has(d)||r.set(d,new Set),r.get(d).add(g)}for(let f=0,m=d.length;f<m;f++)if(o(d[f],g[f],p))return!0;return!1}function c(d,g,p="by-value"){if(Object.getPrototypeOf(d)!==Object.getPrototypeOf(g))return!0;for(let f in d)if(!(f in g))return!0;for(let f in g)if(!(f in d))return!0;if(r.has(d)||r.has(g)){if(r.has(d)&&r.get(d).has(g)||r.has(g)&&r.get(g).has(d))return!1;r.has(d)||r.set(d,new Set),r.get(d).add(g)}for(let f in d)if(o(d[f],g[f],p))return!0;return!1}switch(u){case"undefined":case"boolean":case"string":case"function":return!0;case"number":return isNaN(n)!==isNaN(s)||Math.abs(n-s)>Number.EPSILON;case"object":return n==null||s==null?!0:l==="by-value"&&(n instanceof Boolean||n instanceof Number||n instanceof String)?n.valueOf()!==s.valueOf():Array.isArray(n)?a(n,s,l):l==="by-reference"?!0:c(n,s,l);default:return!0}return!0}return o(t,e,i)}const{computedStack:Cl,trackerSymbol:jm}=ps;function Rm(t,{autoRun:e=!0,callback:i,bind:r,disableTracking:o=!1}={}){function n(u,a=[]){const c=i||l;o||(c[jm]=new WeakMap),Cl.unshift(c),a.length>0?a=[...a,s]:a=[s];const d=u?u():r?t.apply(r,a):t(...a);return Cl.shift(),d}const s={computeAsync:n},l=(...u)=>n(null,u);return e&&l(),l}function Gm(t){return t[ps.trackerSymbol]=null,t.__disposed=!0}const Ym={observe:xn,modifiedProperty:ui,computed:Rm,dispose:Gm,batch:Ia},hg=Yt,{observe:Zm,computed:pg,dispose:qm}=Ym,En=document.createElement("style");En.innerHTML=`
/**** DefaultSticker ****/

  .SNS.DefaultSticker {
    left:0px; top:0px; right:0px; bottom:0px;
  }
`;document.head.appendChild(En);const Jm=["normal","italic"],Km=["missing Behaviour","Behaviour Execution Failure","Script Compilation Failure","Script Execution Failure","Rendering Failure","Event Handling Failure",'"onMount" Callback Failure','"onUnmount" Callback Failure'];function oe(t){let e=/^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(t);if(e==null)throw new Error(t);{let i=new Error(e[2]);throw i.name=e[1],i}}function _e(t){oe("ReadOnlyProperty: property "+Ci(t)+" must not be set")}function gg(t){return t instanceof bs}fe(gg,Ae,"SNS visual");const Qm=fe(gg,it,"SNS visual");function Wr(t){return t instanceof ys}fe(Wr,Ae,"SNS folder");const ex=fe(Wr,it,"SNS folder");function _o(t){return t instanceof vs}fe(_o,Ae,"SNS project");fe(_o,it,"SNS project");function Nr(t){return t instanceof Bg}fe(Nr,Ae,"SNS board");fe(Nr,it,"SNS board");function Xn(t){return t instanceof Wg}fe(Xn,Ae,"SNS sticker");const fg=fe(Xn,it,"SNS sticker");function mg(t){return Yt(t)}const tx=fe(mg,Ae,"unique SNS id"),xg=tx,Bl=fe(mg,it,"unique SNS id"),ix=/^[a-z$_][a-z$_0-9]*$/i;function _g(t){return Ot(t,ix)}fe(_g,Ae,"note stickers identifier");const gs=fe(_g,it,"note stickers identifier");function Mr(t){return Yt(t)}const rx=fe(Mr,Ae,"SNS name"),Mn=fe(Mr,it,"SNS name");function $i(t){return $r(t)}fe($i,Ae,"sticker coordinate");const Wl=fe($i,it,"sticker coordinate");function ki(t){return $r(t)&&t>=0}const en=fe(ki,Ae,"sticker dimension"),Nl=fe(ki,it,"sticker dimension");function Sg(t){return cs(t)&&$i(t.x)&&$i(t.y)}fe(Sg,Ae,"sticker position");const nx=fe(Sg,it,"sticker position");function bg(t){return cs(t)&&ki(t.Width)&&ki(t.Height)}fe(bg,Ae,"sticker size");const ox=fe(bg,it,"sticker size");function yg(t){return cs(t)&&$i(t.x)&&ki(t.Width)&&$i(t.y)&&ki(t.Height)}fe(yg,Ae,"sticker geometry");const ax=fe(yg,it,"sticker geometry");function fs(t){return Er(t)&&ig(t.Type,Km)&&ds(t.Message)}const Tl=fe(fs,Ae,"error descriptor");fe(fs,it,"error descriptor");function vg(t){return Er(t)}fe(vg,Ae,"serializable object");const ms=fe(vg,it,"serializable object"),ir={x:20,y:20,Width:80,Height:60},sx=10,lx=void 0,ux=10,dx=void 0,cx=10,hx=10;function px(t,e){return go(t)?t:e}function Ge(t,e){return t==null?void 0:go(t)?t:e}function So(t,e){return cr(t)?t:e}function ti(t,e){return cr(t)?t:e}function Ri(t,e,i=-1/0,r=1/0,o=!1,n=!1){return um(t,i,r,o,n)?t:e}function yt(t,e){return us(t)?t:e}function ft(t,e,i){return Ot(t,i)?t:e}function Hr(t,e){return ds(t)?t:e}function xt(t,e){return(Yt(t)?t:e).replace(/[\f\r\n\v\u0085\u2028\u2029].*$/,"...")}function at(t,e){const i=Yt(t)?t:e;return i==null?void 0:i.replace(/[\f\r\n\v\u0085\u2028\u2029].*$/,"...")}function wg(t,e,i){return Xr(t,i)?t:e}function It(t,e,i){return Xr(t,i)?t:e}function xs(t,e){return mo(t)?t:e}function gx(t,e){return mo(t)?t:e}function fx(t,e){return rg(t)?t:e}function mx(t,e){return hg(t)?t:e}function hr(t,e){return hs(t)?t:e}function $g(){return xo`<div class="SNS DefaultSticker" style=${Pg(this)}/>`}function Hn(){const t=this.Error;return t==null?$g.call(this):xo`<div class="SNS DefaultSticker">
      <div class="SNS ErrorIndicator" onClick=${()=>this.Project.showError(this,t)}/>
    </div>`}const Pa=Dm(Mm.nolookalikesSafe,21),On=new WeakMap;function xx(t,e){let i=On.get(t);i==null&&On.set(t,i=Object.create(null));const r=e.Id;r in i&&oe("NonUniqueId: the id of the given folder ("+Ci(r)+") has already been registered"),i[r]=e}function _x(t){const e=t.Project;let i=On.get(e);i!=null&&delete i[t.Id]}function Dl(t,e){let i=On.get(t);if(i!=null)return i[e]}const zn=new WeakMap;function Sx(t,e){let i=zn.get(t);i==null&&zn.set(t,i=Object.create(null));const r=e.Id;r in i&&oe("NonUniqueId: the id of the given sticker ("+Ci(r)+") has already been registered"),i[r]=e}function bx(t){const e=t.Project;let i=zn.get(e);i!=null&&delete i[t.Id]}function yx(t,e){let i=zn.get(t);if(i!=null)return i[e]}function fi(t){ms("serialization",t),delete t.Id,yl(t.BoardList)&&t.BoardList.forEach(e=>fi(e)),yl(t.StickerList)&&t.StickerList.forEach(e=>fi(e))}const Va=new WeakMap;function kg(t,e){let i=Va.get(t);i==null&&Va.set(t,i=[]),i.push(e)}function _s(t){let e=Va.get(t);e!=null&&e.forEach(i=>{qm(i)})}const jn=Object.create(null),Tr=Object.create(null),Ig=Object.create(null);function K(t,e,i,r,o,n){wa("behavior group label",t),wa("behavior label",e),gs("behavior name",i),ym("sticker template",r),mn("behavior function",o);const s=t.toLowerCase().replace(/\s/g,""),l=i.toLowerCase(),u={...r};u.activeScript==null?u.activeScript=`useBehavior('${i}')
`:u.activeScript=u.activeScript.replace(/^\s*\n/,"").replace(/\n\s*$/,`
`),l in Tr&&oe("BehaviorExists: behavior "+Ci(i)+" was already registered");let a=jn[s];a==null&&(jn[s]=a={GroupLabel:t,BehaviorSet:Object.create(null)}),a.BehaviorSet[i]={Label:e,Executable:o,Template:u},o!=null&&(Ig[l]=u,Tr[l]=o),n!=null&&En.innerHTML.indexOf(n.trim())<0&&(En.innerHTML+=n)}function vx(){const t=[];function e(i){const r=[],o=i.BehaviorSet;for(let n in o)r.push({Label:o[n].Label,Name:n,disabled:!(n.toLowerCase()in Tr)});return{GroupLabel:i.GroupLabel,BehaviorEntryList:r}}for(let i in jn)t.push(e(jn[i]));return t}function wx(t){fg("visual",this),gs("behavior name",t);const e=Tr[t.toLowerCase()];e==null&&oe("NoSuchBehavior: no behavior called "+Ci(t)+" found");const i=s=>{kr("reactive function",s),kg(this,pg(s))},r=this.onRender.bind(this),o=this.onMount.bind(this),n=this.onUnmount.bind(this);e.call(this,this,this,xo,i,r,o,n)}function $x(t){gs("behavior name",t);const e=t.toLowerCase();return Tr[e]==null&&oe("NoSuchBehavior: no behavior called "+Ci(t)+" found"),Ig[e]}K("basic Views","plain Sticker","plainSticker",{Geometry:{x:20,y:20,Width:100,Height:80},activeScript:'onRender(() => html`<div class="SNS Placeholder"></div>`)'},(t,e,i,r,o,n,s)=>{o(()=>i`<div class="SNS plainSticker"></div>`)},`
/**** plain Stickers ****/

  .SNS.plainSticker {
    border:dotted 1px gray;
  }
  `);K("basic Views","sticky Note","stickyNote",{Geometry:{x:20,y:20,Width:100,Height:80},minWidth:20,minHeight:10},(t,e,i,r,o,n,s)=>{e.Renderer=function(l){const{builtinSelection:u,builtinDragging:a}=l,c=Hr(e.Value,""),d=p=>{if(p.key==="Tab"){p.stopPropagation(),p.preventDefault();const f=p.target,{value:m,selectionStart:x,selectionEnd:b}=f;return f.value=m.slice(0,x)+"	"+m.slice(b),f.selectionStart=f.selectionEnd=x+1,!1}},g=p=>{e.Value=p.target.value};return i`<div class="SNS NoteSticker" style=${Pg(t)}
        onPointerDown=${u}
      >
        <div class="Header builtinDraggable"
          onPointerDown=${a} onPointerMove=${a}
          onPointerUp=${a} onPointerCancel=${a}
        />
        <textarea class="Editor" value=${c} tabindex=-1
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
  `);K("basic Views","Placeholder","Placeholder",{Geometry:{x:20,y:20,Width:100,Height:80}},(t,e,i,r,o,n,s)=>{e.Renderer=function(l){const{builtinDragging:u}=l,{Width:a,Height:c}=e.Geometry;return i`<div class="SNS Placeholder builtinDraggable" style="
        line-height:${c}px;
      "
        onPointerDown=${u} onPointerMove=${u}
        onPointerUp=${u} onPointerCancel=${u}
      >${a}x${c}</div>`}},`
/**** simple Placeholders ****/

  .SNS.Placeholder {
    border:dotted 1px gray;
    text-align:center;
  }
  `);K("basic Views","Title","Title",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"Title"},(t,e,i,r,o,n,s)=>{o(()=>{const l=xt(e.Value,"");return i`<div class="SNS Title">${l}</div>`})},`
/**** Title Views ****/

  .SNS.Sticker > .SNS.Title {
    font-size:22px; font-weight:bold; line-height:32px;
  }
  `);K("basic Views","Subtitle","Subtitle",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"Subtitle"},(t,e,i,r,o,n,s)=>{o(()=>{const l=xt(e.Value,"");return i`<div class="SNS Subtitle">${l}</div>`})},`
/**** Subtitle Views ****/

  .SNS.Sticker > .SNS.Subtitle {
    font-size:18px; font-weight:bold; line-height:27px;
  }
  `);K("basic Views","Label","Label",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"Label"},(t,e,i,r,o,n,s)=>{o(()=>{const l=xt(e.Value,"");return i`<div class="SNS Label">${l}</div>`})},`
/**** Label Views ****/

  .SNS.Sticker > .SNS.Label {
    font-size:14px; font-weight:bold; line-height:21px;
  }
  `);K("basic Views","Text","Text",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"Text"},(t,e,i,r,o,n,s)=>{o(()=>{const l=Hr(e.Value,"");return i`<div class="SNS Text">${l}</div>`})},`
/**** Text Views ****/

  .SNS.Sticker > .SNS.Text {
    font-size:14px; font-weight:normal; line-height:21px;
  }
  `);K("basic Views","FinePrint","FinePrint",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"FinePrint"},(t,e,i,r,o,n,s)=>{o(()=>{const l=Hr(e.Value,"");return i`<div class="SNS FinePrint">${l}</div>`})},`
/**** FinePrint Views ****/

  .SNS.Sticker > .SNS.FinePrint {
    font-size:12px; font-weight:normal; line-height:18px;
  }
  `);K("basic Views","HTML View","HTMLView",{Geometry:{x:20,y:20,Width:100,Height:80},Value:"<b><u>HTML View</u></b>",activeScript:`
  useBehavior('HTMLView')
//my.Value = 'HTML Markup'
`},(t,e,i,r,o,n,s)=>{e.Renderer=()=>i`<div class="SNS HTMLView"
      dangerouslySetInnerHTML=${{__html:Hr(e.Value,"")}}
    />`});K("basic Views","Image View","ImageView",{Geometry:{x:20,y:20,Width:90,Height:90},Value:"https://www.rozek.de/Bangle.js/Mandelbrot_240x240.png",activeScript:`
  useBehavior('ImageView')
//my.Value = 'Image URL'
`},(t,e,i,r,o,n,s)=>{e.Renderer=()=>i`<img class="SNS ImageView" src=${hr(e.Value,"")}/>`},`
/**** Image View ****/

  .SNS.Sticker > .SNS.ImageView {
    object-fit:contain; object-position:center;
  }
  `);K("basic Views","SVG View","SVGView",{Geometry:{x:20,y:20,Width:90,Height:90},activeScript:`
  useBehavior('SVGView')
//my.Value = 'SVG Document'
`},(t,e,i,r,o,n,s)=>{e.Renderer=()=>{const l="data:image/svg+xml;base64,"+btoa(Hr(e.Value,""));return i`<div class="SNS SVGView" src=${l}/>`}},`
/**** SVG View ****/

  .SNS.Sticker > .SNS.SVGView {
    object-fit:contain; object-position:center;
  }
  `);K("basic Views","2D Canvas View","Canvas2DView");K("basic Views","Web View","WebView",{Geometry:{x:20,y:20,Width:640,Height:480},minWidth:120,minHeight:80,Value:"https://www.rozek.de",activeScript:`
  useBehavior('WebView')
//my.Value = 'Document URL'
`},(t,e,i,r,o,n,s)=>{e.Renderer=()=>i`<iframe class="SNS WebView"
      src=${hr(e.Value,"")}
    />`});K("basic Views","Badge","Badge",{Geometry:{x:20,y:20,Width:30,Height:30},Value:1,ForegroundColor:"red",BackgroundColor:"white"},(t,e,i,r,o,n,s)=>{e.Renderer=()=>{const l=cr(e.Value)?""+e.Value:xt(e.Value,""),u=Math.round(Math.min(e.Width,e.Height/2));return i`<div class="SNS Badge" style="
        border-color:${e.ForegroundColor}; border-radius:${u}px;
        line-height:${e.Height-4}px;
      ">${xt(l,"")}</>`}},`
/**** Badge ****/

  .SNS.Sticker > .SNS.Badge {
    font-size:18px; font-weight:bold; text-align:center;
    border:solid 2px black;
  }
  `);K("basic Views","Icon","Icon",{Geometry:{x:20,y:20,Width:24,Height:24},Value:null,activeScript:`
  useBehavior('Icon')
//my.Value = 'icon image url'
//onClick(() => ...)
`},(t,e,i,r,o,n,s)=>{function l(u){e.Enabling!=!1&&(e.Value=u.target.value,typeof e._onClick=="function"&&e._onClick(u))}e.Renderer=()=>{const u=hr(e.Value,"/img/pencil.png"),a=xs(e.Color,"black");return i`<div class="SNS Icon" style="
        -webkit-mask-image:url(${u}); mask-image:url(${u});
        background-color:${a};
      " disabled=${e.Enabling==!1} onClick=${l}
      />`}},`
/**** Icon ****/

  .SNS.Sticker > .SNS.Icon {
    -webkit-mask-size:contain;           mask-size:contain;
    -webkit-mask-position:center center; mask-position:center center;
  }
  `);K("basic Views","horizontal Separator","horizontalSeparator",{Geometry:{x:20,y:20,Width:80,Height:10},minWidth:10},(t,e,i,r,o,n,s)=>{o(()=>i`<div class="SNS horizontalSeparator"></div>`)},`
/**** horizontal Separator ****/

  .SNS.horizontalSeparator {
    border:none; border-top:solid 1px black;
  }
  `);K("basic Views","vertical Separator","verticalSeparator",{Geometry:{x:20,y:20,Width:10,Height:40},minHeight:10},(t,e,i,r,o,n,s)=>{o(()=>i`<div class="SNS verticalSeparator"></div>`)},`
/**** vertical Separator ****/

  .SNS.verticalSeparator {
    border:none; border-left:solid 1px black;
  }
  `);K("basic Views","Tab","Tab");K("basic Views","Icon Tab","IconTab");K("native Controls","Button","Button",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"Button",activeScript:`
  useBehavior('Button')
//my.Value = 'Label'
//onClick(() => ...)
`},(t,e,i,r,o,n,s)=>{function l(u){if(e.Enabling==!1)return Te(u);typeof e._onClick=="function"&&e._onClick(u)}e.Renderer=()=>{const u=xt(e.Label||e.Value,"");return i`<button class="SNS Button" style="
        line-height:${e.LineHeight||e.Height}px;
      " disabled=${e.Enabling==!1} onClick=${l}
      >${u}</>`}},`
/**** Button ****/

  .SNS.Sticker > .SNS.Button {
    border:solid 1px black; border-radius:4px;
    background:white;
    font-weight:bold; color:black;
    text-align.center;
  }
  `);K("native Controls","Checkbox","Checkbox",{Geometry:{x:20,y:20,Width:20,Height:20},Value:null,activeScript:`
  useBehavior('Checkbox')
//my.Value = null/true/false
//onClick(() => ...)
`},(t,e,i,r,o,n,s)=>{function l(u){if(e.Enabling==!1)return Te(u);e.Value=u.target.checked,typeof e._onClick=="function"&&e._onClick(u)}e.Renderer=()=>{const u=Ge(e.Value),a=u==!0,c=u==null;return i`<input type="checkbox" class="SNS Checkbox"
        checked=${a} indeterminate=${c}
        disabled=${e.Enabling==!1} onClick=${l}
      />`}});K("native Controls","Radiobutton","Radiobutton",{Geometry:{x:20,y:20,Width:20,Height:20},Value:null,activeScript:`
  useBehavior('Radiobutton')
//my.Value = true/false
//onClick(() => ...)
`},(t,e,i,r,o,n,s)=>{function l(u){if(e.Enabling==!1)return Te(u);e.Value=u.target.checked,typeof e._onClick=="function"&&e._onClick(u)}e.Renderer=()=>{const u=px(e.Value,!1);return i`<input type="radio" class="SNS Radiobutton"
        checked=${u==!0}
        disabled=${e.Enabling==!1} onClick=${l}
      />`}});K("native Controls","Gauge","Gauge",{Geometry:{x:20,y:20,Width:100,Height:20},Value:0,activeScript:`
  useBehavior('Gauge')
//my.Value      = 0
//my.Minimum    = 0
//my.lowerBound = 0
//my.Optimum    = undefined
//my.upperBound = 1
//my.Maximum    = 1
`},(t,e,i,r,o,n,s)=>{e.Renderer=()=>{const l=So(Lr(e.Value)?parseFloat(e.Value):e.Value,0),u=ti(e.Minimum),a=ti(e.lowerBound),c=ti(e.Optimum),d=ti(e.upperBound),g=ti(e.Maximum);return i`<meter class="SNS Gauge" value=${l}
        min=${u} low=${a} opt=${c}
        high=${d} max=${g}
      />`}});K("native Controls","Progressbar","Progressbar",{Geometry:{x:20,y:20,Width:100,Height:10},Value:0,activeScript:`
  useBehavior('Progressbar')
//my.Value   = 0
//my.Maximum = 1
`},(t,e,i,r,o,n,s)=>{e.Renderer=()=>{const l=So(Lr(e.Value)?parseFloat(e.Value):e.Value,0),u=ti(e.Maximum);return i`<progress class="SNS Progressbar" value=${l} max=${u}/>`}});const kx=/^\s*([+-]?(\d+([.]\d+)?|[.]\d+)([eE][+-]?\d+)?|\d*[.](?:\d*))(?:\s*:\s*([^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]+))?$/;K("native Controls","Slider","Slider",{Geometry:{x:20,y:20,Width:100,Height:20},Value:null,activeScript:`
  useBehavior('Slider')
//my.Value     = 0
//my.Minimum   = undefined
//my.Stepping  = undefined
//my.Maximum   = undefined
//my.Hashmarks = [0:'zero',1,2]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow=0;function l(c){return Ot(c,kx)||cr(c)}function u(c){if(e.Enabling==!1)return Te(c);e.Value=parseFloat(c.target.value),typeof e._onInput=="function"&&e._onInput(c)}function a(){t.rerender()}e.Renderer=()=>{let c=So(Lr(e.Value)?parseFloat(e.Value):e.Value,0);const d=ti(e.Minimum),g=Ri(e.Stepping,void 0,0),p=ti(e.Maximum),f=It(e.Hashmarks,void 0,l);document.activeElement===e.View?c=e.ValueToShow:e.ValueToShow=c;let m="",x;return f!=null&&f.length>0&&(x=e.Id+"-Hashmarks",m=i`\n<datalist id=${x}>
          ${f.map(b=>{b=""+b;const P=b.replace(/:.*$/,"").trim(),C=b.replace(/^[^:]+:/,"").trim();return i`<option value=${P}>${C}</option>`})}
        </datalist>`),i`<input type="range" class="SNS Slider"
        value=${c} min=${d} max=${p} step=${g}
        disabled=${e.Enabling==!1} onInput=${u} onBlur=${a}
        list=${x}
      />${m}`}});K("native Controls","Textline Input","TextlineInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
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
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return Te(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=xt(e.Value,"");const c=at(e.Placeholder),d=Ge(e.readonly),g=yt(e.minLength),p=yt(e.maxLength),f=at(e.Pattern),m=Ge(e.SpellChecking),x=It(e.Suggestions,void 0,Yt);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let b="",P;return x!=null&&x.length>0&&(P=e.Id+"-Suggestions",b=i`<datalist id=${P}>
          ${x.map(C=>i`<option value=${C}></option>`)}
        </datalist>`),i`<input type="text" class="SNS TextlineInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${c}
        pattern=${f} spellcheck=${m}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${P}
      />${b}`}},`
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
  `);K("native Controls","Password Input","PasswordInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('PasswordInput')
//my.Value       = ''
//my.Placeholder = undefined
//my.readonly    = false
//my.minLength   = 0
//my.maxLength   = undefined
//my.Pattern     = '.*'
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return Te(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=xt(e.Value,"");const c=at(e.Placeholder),d=Ge(e.readonly),g=yt(e.minLength),p=yt(e.maxLength),f=at(e.Pattern);return document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a,i`<input type="password" class="SNS PasswordInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${c}
        pattern=${f}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
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
  `);K("native Controls","Number Input","NumberInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('NumberInput')
//my.Value       = 0
//my.Placeholder = undefined
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = [0,...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow=0;function l(a){if(e.Enabling==!1)return Te(a);e.Value=parseFloat(a.target.value),typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=So(Lr(e.Value)?parseFloat(e.Value):e.Value,0);const c=at(e.Placeholder),d=Ge(e.readonly),g=ti(e.Minimum),p=Ri(e.Stepping,void 0,0),f=ti(e.Maximum),m=It(e.Suggestions,void 0,cr);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let x="",b;return m!=null&&m.length>0&&(b=e.Id+"-Suggestions",x=i`<datalist id=${b}>
          ${m.map(P=>i`<option value=${P}></option>`)}
        </datalist>`),i`<input type="number" class="SNS NumberInput"
        value=${a} min=${g} max=${f} step=${p}
        readonly=${d} placeholder=${c}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${b}
      />${x}`}},`
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
  `);K("native Controls","Phone Number Input","PhoneNumberInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('PhoneNumberInput')
//my.Value         = ''
//my.Placeholder   = undefined
//my.readonly      = false
//my.minLength     = 0
//my.maxLength     = undefined
//my.Pattern       = '.*'
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return Te(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=mx(e.Value,"");const c=at(e.Placeholder),d=Ge(e.readonly),g=yt(e.minLength),p=yt(e.maxLength),f=at(e.Pattern),m=It(e.Suggestions,void 0,hg);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let x="",b;return m!=null&&m.length>0&&(b=e.Id+"-Suggestions",x=i`<datalist id=${b}>
          ${m.map(P=>i`<option value=${P}></option>`)}
        </datalist>`),i`<input type="tel" class="SNS PhoneNumberInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${c}
        pattern=${f}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${b}
      />${x}`}},`
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
  `);K("native Controls","EMail Address Input","EMailAddressInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('EMailAddressInput')
//my.Value       = ''
//my.Placeholder = undefined
//my.readonly    = false
//my.minLength   = 0
//my.maxLength   = undefined
//my.Pattern     = '.*'
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return Te(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=fx(e.Value,"");const c=at(e.Placeholder),d=Ge(e.readonly),g=yt(e.minLength),p=yt(e.maxLength),f=at(e.Pattern),m=It(e.Suggestions,void 0,rg);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let x="",b;return m!=null&&m.length>0&&(b=e.Id+"-Suggestions",x=i`<datalist id=${b}>
          ${m.map(P=>i`<option value=${P}></option>`)}
        </datalist>`),i`<input type="email" class="SNS EMailAddressInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${c}
        pattern=${f}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${b}
      />${x}`}},`
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
  `);K("native Controls","URL Input","URLInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('URLInput')
//my.Value       = ''
//my.Placeholder = undefined
//my.readonly    = false
//my.minLength   = 0
//my.maxLength   = undefined
//my.Pattern     = '.*'
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return Te(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=hr(e.Value,"");const c=at(e.Placeholder),d=Ge(e.readonly),g=yt(e.minLength),p=yt(e.maxLength),f=at(e.Pattern),m=It(e.Suggestions,void 0,hs);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let x="",b;return m!=null&&m.length>0&&(b=e.Id+"-Suggestions",x=i`<datalist id=${b}>
          ${m.map(P=>i`<option value=${P}></option>`)}
        </datalist>`),i`<input type="url" class="SNS URLInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${c}
        pattern=${f}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${b}
      />${x}`}},`
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
  `);const Ix="\\d{2}:\\d{2}",_n=/\d{2}:\d{2}/;function Px(t){return Ot(t,_n)}K("native Controls","Time Input","TimeInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('TimeInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return Te(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=ft(e.Value,void 0,_n);const c=Ge(e.readonly),d=ft(e.Minimum,void 0,_n),g=Ri(e.Stepping,void 0,0),p=ft(e.Maximum,void 0,_n),f=It(e.Suggestions,void 0,Px);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let m="",x;return f!=null&&f.length>0&&(x=e.Id+"-Suggestions",m=i`<datalist id=${x}>
          ${f.map(b=>i`<option value=${b}></option>`)}
        </datalist>`),i`<input type="time" class="SNS TimeInput"
        value=${a} min=${d} max=${p} step=${g}
        readonly=${c} pattern=${Ix}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${x}
      />${m}`}},`
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
  `);const Vx="\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}",Sn=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/;function Cx(t){return Ot(t,Sn)}K("native Controls","Date and Time Input","DateTimeInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('DateTimeInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return Te(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=ft(e.Value,void 0,Sn);const c=Ge(e.readonly),d=ft(e.Minimum,void 0,Sn),g=Ri(e.Stepping,void 0,0),p=ft(e.Maximum,void 0,Sn),f=It(e.Suggestions,void 0,Cx);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let m="",x;return f!=null&&f.length>0&&(x=e.Id+"-Suggestions",m=i`<datalist id=${x}>
          ${f.map(b=>i`<option value=${b}></option>`)}
        </datalist>`),i`<input type="datetime-local" class="SNS DateTimeInput"
        value=${a} min=${d} max=${p} step=${g}
        readonly=${c} pattern=${Vx}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${x}
      />${m}`}},`
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
  `);const Bx="\\d{4}-\\d{2}-\\d{2}",bn=/\d{4}-\d{2}-\d{2}/;function Wx(t){return Ot(t,bn)}K("native Controls","Date Input","DateInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('DateInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return Te(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=ft(e.Value,void 0,bn);const c=Ge(e.readonly),d=ft(e.Minimum,void 0,bn),g=Ri(e.Stepping,void 0,0),p=ft(e.Maximum,void 0,bn),f=It(e.Suggestions,void 0,Wx);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let m="",x;return f!=null&&f.length>0&&(x=e.Id+"-Suggestions",m=i`<datalist id=${x}>
          ${f.map(b=>i`<option value=${b}></option>`)}
        </datalist>`),i`<input type="date" class="SNS DateInput"
        value=${a} min=${d} max=${p} step=${g}
        readonly=${c} pattern=${Bx}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${x}
      />${m}`}},`
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
  `);const Nx="\\d{4}-W\\d{2}",yn=/\d{4}-W\d{2}/;function Tx(t){return Ot(t,yn)}K("native Controls","Week Input","WeekInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('WeekInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return Te(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=ft(e.Value,void 0,yn);const c=Ge(e.readonly),d=ft(e.Minimum,void 0,yn),g=Ri(e.Stepping,void 0,0),p=ft(e.Maximum,void 0,yn),f=It(e.Suggestions,void 0,Tx);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let m="",x;return f!=null&&f.length>0&&(x=e.Id+"-Suggestions",m=i`<datalist id=${x}>
          ${f.map(b=>i`<option value=${b}></option>`)}
        </datalist>`),i`<input type="week" class="SNS WeekInput"
        value=${a} min=${d} max=${p} step=${g}
        readonly=${c} pattern=${Nx}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${x}
      />${m}`}},`
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
  `);const Dx="\\d{4}-\\d{2}",vn=/\d{4}-\d{2}/;function Fx(t){return Ot(t,vn)}K("native Controls","Month Input","MonthInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('MonthInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return Te(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=ft(e.Value,void 0,vn);const c=Ge(e.readonly),d=ft(e.Minimum,void 0,vn),g=Ri(e.Stepping,void 0,0),p=ft(e.Maximum,void 0,vn),f=It(e.Suggestions,void 0,Fx);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let m="",x;return f!=null&&f.length>0&&(x=e.Id+"-Suggestions",m=i`<datalist id=${x}>
          ${f.map(b=>i`<option value=${b}></option>`)}
        </datalist>`),i`<input type="month" class="SNS MonthInput"
        value=${a} min=${d} max=${p} step=${g}
        readonly=${c} pattern=${Dx}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${x}
      />${m}`}},`
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
  `);K("native Controls","File Input","FileInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('FileInput')
//my.Value           = ''
//my.Placeholder     = undefined
//my.acceptableTypes = undefined
//my.multiple        = false
//onInput(() => ...)
//onDrop(() => ...)
`},(t,e,i,r,o,n,s)=>{function l(d){if(e.Enabling==!1)return Te(d);e.Value=d.target.value,typeof e._onInput=="function"&&e._onInput(d,d.files)}function u(d){return Te(d)}function a(d){return Te(d)}function c(d){Ss(d),e.Enabling!=!1&&(e.Value=d.target.value,typeof e._onDrop=="function"&&e._onDrop(d,d.dataTransfer.files))}e.Renderer=()=>{let d=xt(e.Value,"").trim();d=d.replace("C:\\fakepath\\","");const g=xt(e.Placeholder,"").trim(),p=at(e.acceptableTypes),f=Ge(e.multiple);return i`<label class="SNS FileInput"
        onDragEnter=${u} onDragOver=${a} onDrop=${c}
      >
        <input type="file" style="display:none"
          multiple=${f} accept=${p}
          onInput=${l}
        />
        ${d===""?g===""?"":i`<span style="line-height:${e.Height}px">${g}</span>`:i`<span style="line-height:${e.Height}px">${d}</span>`}
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
  `);K("native Controls","Pseudo File Input","PseudoFileInput",{Geometry:{x:20,y:20,Width:24,Height:24},Value:null,activeScript:`
  useBehavior('PseudoFileInput')
//my.Value           = ''
//my.Icon            = 'icon image url'
//my.acceptableTypes = undefined
//my.multiple        = false
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{function l(u){if(e.Enabling==!1)return Te(u);e.Value=u.target.value,typeof e._onInput=="function"&&e._onInput(u,u.files)}e.Renderer=()=>{const u=hr(e.Icon,"/img/arrow-up-from-bracket.png"),a=xs(e.Color,"black"),c=at(e.acceptableTypes),d=Ge(e.multiple);return i`<label class="SNS PseudoFileInput">
        <div style="
          -webkit-mask-image:url(${u}); mask-image:url(${u});
          background-color:${a};
        "></div>
        <input type="file" style="display:none"
          multiple=${d} accept=${c}
          onInput=${l}
        />
      </label>`}},`
/**** PseudoFileInput ****/

  .SNS.Sticker > .SNS.PseudoFileInput > div {
    display:block; position:absolute;
    left:0px; top:0px; right:0px; bottom:0px;
    -webkit-mask-size:contain;           mask-size:contain;
    -webkit-mask-position:center center; mask-position:center center;
  }
  `);K("native Controls","File Drop Area","FileDropArea",{Geometry:{x:20,y:20,Width:100,Height:80},Value:null,activeScript:`
  useBehavior('FileDropArea')
//my.Value           = ''
//my.Placeholder     = undefined
//my.acceptableTypes = undefined
//my.multiple        = false
//onInput(() => ...)
//onDrop(() => ...)
`},(t,e,i,r,o,n,s)=>{function l(d){if(e.Enabling==!1)return Te(d);e.Value=d.target.value,typeof e._onInput=="function"&&e._onInput(d,d.files)}function u(d){return Te(d)}function a(d){return Te(d)}function c(d){Ss(d),e.Enabling!=!1&&(e.Value=d.target.value,typeof e._onDrop=="function"&&e._onDrop(d,d.dataTransfer.files))}e.Renderer=()=>{const d=xt(e.Placeholder,"").trim(),g=at(e.acceptableTypes),p=Ge(e.multiple);return i`<label class="SNS FileDropArea"
        onDragEnter=${u} onDragOver=${a} onDrop=${c}>
        <input type="file"
          multiple=${p} accept=${g}
          onInput=${l}
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
  `);K("native Controls","Search Input","SearchInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
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
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return Te(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=xt(e.Value,"");const c=at(e.Placeholder),d=Ge(e.readonly),g=yt(e.minLength),p=yt(e.maxLength),f=at(e.Pattern),m=Ge(e.SpellChecking),x=It(e.Suggestions,void 0,Yt);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let b="",P;return x!=null&&x.length>0&&(P=e.Id+"-Suggestions",b=i`<datalist id=${P}>
          ${x.map(C=>i`<option value=${C}></option>`)}
        </datalist>`),i`<input type="search" class="SNS SearchInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${c}
        pattern=${f} spellcheck=${m}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${P}
      />${b}`}},`
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
  `);K("native Controls","Color Input","ColorInput",{Geometry:{x:20,y:20,Width:40,Height:30},Value:null,activeScript:`
  useBehavior('ColorInput')
//my.Value       = ''
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return Te(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=gx(e.Value);const c=It(e.Suggestions,void 0,mo);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let d="",g;return c!=null&&c.length>0&&(g=e.Id+"-Suggestions",d=i`<datalist id=${g}>
          ${c.map(p=>i`<option value=${p}></option>`)}
        </datalist>`),i`<input type="color" class="SNS ColorInput"
        value=${a}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${g}
      />${d}`}},`
/**** ColorInput ****/

  .SNS.Sticker > .SNS.ColorInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }
  `);K("native Controls","DropDown","DropDown",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('DropDown')
//my.Value   = '...'
//my.Options = ['...',...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return Te(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=xt(e.Value,"");const c=wg(e.Options,[],Yt);return document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a,i`<select class="SNS DropDown"
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
      >${c.map(d=>{const g=d.replace(/:.*$/,"").trim(),p=d.replace(/^[^:]+:/,"").trim();return i`<option value=${g} selected=${g===a}>
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
  `);K("native Controls","Pseudo DropDown","PseudoDropDown",{Geometry:{x:20,y:20,Width:24,Height:24},Value:null,activeScript:`
  useBehavior('PseudoDropDown')
//my.Value   = '...'
//my.Icon    = 'icon image url'
//my.Options = ['...',...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return Te(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=xt(e.Value,"");const c=hr(e.Icon,"/img/menu.png"),d=xs(e.Color,"black"),g=wg(e.Options,[],Yt);return document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a,i`<div class="SNS PseudoDropDown">
        <div style="
          -webkit-mask-image:url(${c}); mask-image:url(${c});
          background-color:${d};
        "></div>
        <select disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}>
          ${g.map(p=>{const f=p.replace(/:.*\$/,"").trim(),m=p.replace(/^[^:]+:/,"").trim();return i`<option value=${f} selected=${f===a}>
              ${m}
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
  `);K("native Controls","Text Input","TextInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('TextInput')
//my.Value         = ''
//my.Placeholder   = undefined
//my.readonly      = false
//my.minLength     = 0
//my.maxLength     = undefined
//my.LineWrapping  = false
//my.SpellChecking = undefined
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return Te(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=xt(e.Value,"");const c=at(e.Placeholder),d=Ge(e.readonly),g=yt(e.minLength),p=yt(e.maxLength),f=Ge(e.LineWrapping),m=Ge(e.SpellChecking);return document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a,i`<textarea class="SNS TextInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${c}
        spellcheck=${m} style="resize:none; ${f==!0?"white-space:pre; overflow-wrap:break-word; hyphens:auto":void 0}"
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
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
  `);K("basic Shapes","Line","Line");K("basic Shapes","Polyline","Polyline");K("basic Shapes","Arc","Arc");K("basic Shapes","quadratic Bezier","quadraticBezier");K("basic Shapes","cubic Bezier","cubicBezier");K("basic Shapes","Box","Box");K("basic Shapes","rounded Box","roundedBox");K("basic Shapes","Oval","Oval");K("basic Shapes","Chord","Chord");K("basic Shapes","Pie","Pie");K("basic Shapes","Polygon","Polygon");K("basic Shapes","regular Polygon","regularPolygon");K("straight Arrows","nw","straightArrow_nw",{Geometry:{x:20,y:20,Width:40,Height:40}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M ${l},${u}, L 0,0"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);K("straight Arrows","n","straightArrow_n",{Geometry:{x:20,y:20,Width:40,Height:40}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M ${l/2},${u}, L ${l/2},0"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);K("straight Arrows","ne","straightArrow_ne",{Geometry:{x:20,y:20,Width:40,Height:40}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M 0,${u}, L ${l},0"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);K("straight Arrows","e","straightArrow_e",{Geometry:{x:20,y:20,Width:40,Height:40}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M 0,${u/2}, L ${l},${u/2}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);K("straight Arrows","se","straightArrow_se",{Geometry:{x:20,y:20,Width:40,Height:40}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M 0,0, L ${l},${u}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);K("straight Arrows","s","straightArrow_s",{Geometry:{x:20,y:20,Width:40,Height:40}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M ${l/2},0, L ${l/2},${u}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);K("straight Arrows","sw","straightArrow_sw",{Geometry:{x:20,y:20,Width:40,Height:40}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M ${l},0, L 0,${u}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);K("straight Arrows","w","straightArrow_w",{Geometry:{x:20,y:20,Width:40,Height:40}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M ${l},${u/2}, L 0,${u/2}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);K("curved Arrows","cw n","curvedArrow_cw_n",{Geometry:{x:20,y:20,Width:50,Height:60}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M ${l},${u-6}, A ${l-6} ${u-18} 0 0 1 6 12"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);K("curved Arrows","cw e","curvedArrow_cw_e",{Geometry:{x:20,y:20,Width:60,Height:50}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M 6,${u}, A ${l-18} ${u-6} 0 0 1 ${l-12} 6"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);K("curved Arrows","cw s","curvedArrow_cw_s",{Geometry:{x:20,y:20,Width:50,Height:60}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M 0,6, A ${l-6} ${u-18} 0 0 1 ${l-6} ${u-12}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);K("curved Arrows","cw w","curvedArrow_cw_w",{Geometry:{x:20,y:20,Width:60,Height:50}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M ${l-6},0, A ${l-18} ${u-6} 0 0 1 12 ${u-6}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);K("curved Arrows","ccw n","curvedArrow_ccw_n",{Geometry:{x:20,y:20,Width:50,Height:60}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M 0,${u-6}, A ${l-6} ${u-18} 0 0 0 ${l-6} 12"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);K("curved Arrows","ccw e","curvedArrow_ccw_e",{Geometry:{x:20,y:20,Width:60,Height:50}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M 6,0, A ${l-18} ${u-6} 0 0 0 ${l-12} ${u-6}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);K("curved Arrows","ccw s","curvedArrow_ccw_s",{Geometry:{x:20,y:20,Width:50,Height:60}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M ${l},6, A ${l-6} ${u-18} 0 0 0 6 ${u-12}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);K("curved Arrows","ccw w","curvedArrow_ccw_w",{Geometry:{x:20,y:20,Width:60,Height:50}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M ${l-6},${u}, A ${l-18} ${u-8} 0 0 0 12 6"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);K("complex Controls","flat List View","FlatListView");K("complex Controls","nested List View","NestedListView");K("complex Controls","QR-Code View","QRCodeView");function Pg(t){Qm("visual",t);let e=[];const{BackgroundColor:i,BackgroundTexture:r,ForegroundColor:o,FontFamily:n,FontSize:s,FontWeight:l,FontStyle:u,LineHeight:a}=t;return i!=null&&e.push(`background-color:${i}`),r!=null&&e.push(`background-image:${r}; background-repeat:repeat`),o!=null&&e.push(`color:${o}`),n!=null&&e.push(`font-family:${n}`),s!=null&&e.push(`font-size:${s}px`),l!=null&&e.push(`font-weight:${l}`),u!=null&&e.push(`font-style:${u}`),a!=null&&e.push(`line-height:${a}px`),e.join(";")}function Ss(t){t.stopPropagation(),t.preventDefault()}const Te=Ss;let bs=class{constructor(e,i){Se(this,"_Id"),Se(this,"_Name"),Se(this,"_Project"),Se(this,"_Folder"),Se(this,"_BackgroundColor"),Se(this,"_BackgroundTexture"),Se(this,"_FontFamily"),Se(this,"_FontSize"),Se(this,"_FontWeight"),Se(this,"_FontStyle"),Se(this,"_LineHeight"),Se(this,"_ForegroundColor"),Se(this,"_Value",null),Se(this,"_observed"),Se(this,"_unobserved"),Se(this,"_activeScript"),Se(this,"_pendingScript"),Se(this,"_ScriptError"),Se(this,"_Renderer"),Se(this,"_View"),Se(this,"_onMount"),Se(this,"_onUnmount"),Se(this,"_Error"),this._Project=e,this._Id=i||Pa()}get Id(){return this._Id}set Id(e){_e("Id")}get Name(){return this._Name}set Name(e){rx("visual name",e),e!=null&&(e=e.trim(),e===""&&(e=void 0)),this._Name!==e&&(this._Name=e,this._reportChange("configure",this,"Name",e),this.rerender())}get Project(){return this._Project}set Project(e){_e("Project")}get Folder(){return this._Folder}set Folder(e){_e("Folder")}get isAttached(){return this._Folder==null?_o(this):this._Folder.isAttached}set isAttached(e){_e("isAttached")}get BackgroundColor(){return this._BackgroundColor==null?this._Folder==null?void 0:this._Folder.BackgroundColor:this._BackgroundColor}set BackgroundColor(e){kl("visual background color",e),this._BackgroundColor!==e&&(this._BackgroundColor=e,this._reportChange("configure",this,"BackgroundColor",e),this.rerender())}get BackgroundTexture(){return this._BackgroundTexture==null?this._Folder==null?void 0:this._Folder.BackgroundTexture:this._BackgroundTexture}set BackgroundTexture(e){og("visual background texture",e),this._BackgroundTexture!==e&&(this._BackgroundTexture=e,this._reportChange("configure",this,"BackgroundTexture",e),this.rerender())}get FontFamily(){return this._FontFamily==null?this._Folder==null?void 0:this._Folder.FontFamily:this._FontFamily}set FontFamily(e){bm("visual font family",e),this._FontFamily!==e&&(this._FontFamily=e,this._reportChange("configure",this,"FontFamily",e),this.rerender())}get FontSize(){return this._FontSize==null?this._Folder==null?void 0:this._Folder.FontSize:this._FontSize}set FontSize(e){vl("visual font size",e),this._FontSize!==e&&(this._FontSize=e,this._reportChange("configure",this,"FontSize",e),this.rerender())}get FontWeight(){return this._FontWeight==null?this._Folder==null?void 0:this._Folder.FontWeight:this._FontWeight}set FontWeight(e){_m("visual font weight",e,1,1e3),this._FontWeight!==e&&(this._FontWeight=e,this._reportChange("configure",this,"FontWeight",e),this.rerender())}get FontStyle(){return this._FontStyle==null?this._Folder==null?void 0:this._Folder.FontStyle:this._FontStyle}set FontStyle(e){wm("visual font style",e,Jm),this._FontStyle!==e&&(this._FontStyle=e,this._reportChange("configure",this,"FontStyle",e),this.rerender())}get LineHeight(){return this._LineHeight==null?this._Folder==null?void 0:this._Folder.LineHeight:this._LineHeight}set LineHeight(e){vl("visual line height",e),this._LineHeight!==e&&(this._LineHeight=e,this._reportChange("configure",this,"LineHeight",e),this.rerender())}get ForegroundColor(){return this._ForegroundColor==null?this._Folder==null?void 0:this._Folder.ForegroundColor:this._ForegroundColor}set ForegroundColor(e){kl("visual foreground color",e),this._ForegroundColor!==e&&(this._ForegroundColor=e,this._reportChange("configure",this,"ForegroundColor",e),this.rerender())}get Color(){return this.ForegroundColor}set Color(e){this.ForegroundColor=e}get Value(){return this._Value}set Value(e){Ir(this._Value,e)&&(this._Value=e,this._reportChange("configure",this,"Value",e),this.rerender())}get editableValue(){return this._Value==null?"":""+this._Value}set editableValue(e){this.Value=e}get observed(){return this._observed==null&&(this._observed=Zm({})),this._observed}set observed(e){_e("observed")}get unobserved(){return this._unobserved==null&&(this._unobserved={}),this._unobserved}set unobserved(e){_e("unobserved")}get Script(){return this._pendingScript==null?this._activeScript:this._pendingScript}set Script(e){_e("Script")}get activeScript(){return this._activeScript}set activeScript(e){$l("visual script",e),e===""&&(e=void 0),this._activeScript!==e&&(this._activeScript=e,this._reportChange("configure",this,"activeScript",e),this.rerender())}get pendingScript(){return this._pendingScript}set pendingScript(e){$l("visual script",e),this._pendingScript!==e&&(this._pendingScript=e,this._reportChange("configure",this,"pendingScript",e),this.rerender())}activateScript(){let e=(this._activeScript||"").trim();if(this.Error=void 0,this._Renderer=void 0,_s(this),e!=null){let i;try{i=new Function("me,my, html,reactively, onRender,onMount,onUnmount, useBehavior",e)}catch(l){console.error("visual script compilation failure",l),this.Error={Type:"Script Compilation Failure",Message:""+l,Cause:l};return}const r=l=>{kr("reactive function",l),kg(this,pg(l))},o=this.onRender.bind(this),n=this.onMount.bind(this),s=this.onUnmount.bind(this);try{i.call(this,this,this,xo,r,o,n,s,wx.bind(this))}catch(l){console.error("visual script execution failure",l),this.Error={Type:"Script Execution Failure",Message:""+l,Cause:l};return}}this.rerender()}get ScriptError(){return this._ScriptError==null?void 0:{...this._ScriptError}}set ScriptError(e){Tl("script error setting",e),Ir(this._ScriptError,e)&&(this._ScriptError=e,this._reportChange("configure",this,"ScriptError",e),this.rerender())}get Renderer(){return this._Renderer}set Renderer(e){mn("visual renderer",e),this._Renderer!==e&&(this._Renderer=e,this.rerender())}onRender(e){this.Renderer=e}Rendering(e){return""}rerender(e,i){}get View(){return this._View}set View(e){_e("View")}get isMounted(){return this._View!=null}set isMounted(e){_e("isMounted")}onMount(e){mn('"onMount" callback',e),e==null?this._onMount=void 0:this._onMount=()=>{try{e.call(this)}catch(i){this.Error={Type:'"onMount" Callback Failure',Message:""+i,Cause:i},this.rerender()}}}onUnmount(e){mn('"onUnmount" callback',e),e==null?this._onUnmount=void 0:this._onUnmount=()=>{try{e.call(this)}catch(i){this.Error={Type:'"onUnmount" Callback Failure',Message:""+i,Cause:i}}}}get Error(){return this._Error==null?void 0:{...this._Error}}set Error(e){Tl("error setting",e),Ir(this._Error,e)&&(this._Error=e,this._reportChange("configure",this,"Error",e),this.rerender())}get hasError(){return this._Error!=null}set hasError(e){_e("hasError")}_reportChange(e,...i){this._Project._reportChange(e,...i)}_serializeConfigurationInto(e){e.Id=this.Id;const i=r=>{this["_"+r]!=null&&(e[r]=this[r])};["Name","BackgroundColor","BackgroundTexture","FontFamily","FontSize","FontWeight","FontStyle","LineHeight","ForegroundColor","Value","activeScript","pendingScript"].forEach(r=>i(r))}_deserializeConfigurationFrom(e){const i=r=>{if(e[r]!=null)try{this[r]=e[r]}catch{console.warn("DeserializationError:invalid value for property "+Ci(r))}};i("activeScript"),["Name","BackgroundColor","BackgroundTexture","FontFamily","FontSize","FontWeight","FontStyle","LineHeight","ForegroundColor","Value","pendingScript"].forEach(r=>i(r))}},ys=class extends bs{constructor(e,i){super(e,i),Se(this,"_SnapToGrid"),Se(this,"_GridWidth"),Se(this,"_GridHeight"),Se(this,"_BoardList",[])}get Path(){const e=this._Folder;if(e==null)return"|";{const i=this.Name||"#"+this.Index,r=e.Path;return(r==="|"?"":r)+"|"+i}}set Path(e){_e("Path")}BoardAtPath(e){if(wa("board path",e),e=e.trim(),e==="")return this._Folder==null?void 0:this;if(e.startsWith("|"))return this._Project.BoardAtPath(e.replace(/^(\s*\|)*/,""));e=e.replace(/\|+/g,"|");const i=e.split("|").map(o=>o.trim()).map(o=>/^#\d+$/.test(o)?parseInt(o.slice(1),10):o);let r;for(let o=0,n=i.length;o<n;o++){const s=i[o];if(typeof s=="number"?r=(r||this).BoardAt(s):r=(r||this).BoardNamed(s),r==null)return}return r}get IndexPath(){const e=this._Folder;return e==null?[]:e.IndexPath.concat(this.Index)}set IndexPath(e){_e("IndexPath")}get SnapToGrid(){return this._SnapToGrid?this._SnapToGrid==!0:this._Folder==null?!1:this._Folder.SnapToGrid}set SnapToGrid(e){xm("snap-to-grid setting",e),this._SnapToGrid!==e&&(this._SnapToGrid=e,this._reportChange("configure",this,"SnapToGrid",e),this.rerender())}get GridWidth(){return this._GridWidth==null?this._Folder==null?cx:this._Folder.GridWidth:this._GridWidth}set GridWidth(e){wl("snap-to-grid width",e),this._GridWidth!==e&&(this._GridWidth=e,this._reportChange("configure",this,"GridWidth",e),this.rerender())}get GridHeight(){return this._GridHeight==null?this._Folder==null?hx:this._Folder.GridHeight:this._GridHeight}set GridHeight(e){wl("snap-to-grid height",e),this._GridHeight!==e&&(this._GridHeight=e,this._reportChange("configure",this,"GridHeight",e),this.rerender())}get Index(){return this._Folder==null?-1:this._Folder.IndexOfBoard(this)}set Index(e){_e("Index")}get mayBeShiftedUp(){return this._Folder==null?!1:this._Folder.mayShiftBoardUp(this)}set mayBeShiftedUp(e){_e("mayBeShiftedUp")}get mayBeShiftedDown(){return this._Folder==null?!1:this._Folder.mayShiftBoardDown(this)}set mayBeShiftedDown(e){_e("mayBeShiftedDown")}get mayBeShiftedIn(){return this._Folder==null?!1:this._Folder.mayShiftBoardIn(this)}set mayBeShiftedIn(e){_e("mayBeShiftedIn")}get mayBeShiftedOut(){return this._Folder==null?!1:this._Folder.mayShiftBoardOut(this)}set mayBeShiftedOut(e){_e("mayBeShiftedOut")}containsFolder(e){for(ex("folder",e),e=e.Folder;e!=null;){if(e===this)return!0;e=e.Folder}return!1}get BoardList(){return this._BoardList.slice()}set BoardList(e){_e("BoardList")}get BoardCount(){return this._BoardList.length}set BoardCount(e){_e("BoardCount")}IndexOfBoard(e){const i=this.Board(e);return i==null?-1:this._BoardList.indexOf(i)}Board(e){switch(ng("board, name or index",e),!0){case Nr(e):const i=e;return i._Folder===this?i:void 0;case fo(e):let r=e;return r<0&&(r+=this._BoardList.length),this._BoardList[r];case Mr(e):return this.BoardNamed(e)}oe("InvalidArgument: no valid board, board name or board index given")}existingBoard(e){let i=this.Board(e);return i==null&&oe("BoardNotFound: the desired board could not be found"),i}BoardNamed(e){Mn("SNS board name",e),e=e.trim().toLowerCase();let i;return this._BoardList.forEach(r=>{i==null&&r.Name!=null&&r.Name.toLowerCase()===e&&(i=r)}),i}BoardAt(e){return Li("SNS board index",e),e<0&&(e+=this._BoardList.length),this._BoardList[e]}hasBoard(e){return this.Board(e)!=null}newBoardAt(e,i){return i==null?this.BoardDeserializedAt({},e):this.BoardDeserializedAt({Id:i},e)}BoardDeserializedAt(e,i){ms("board serialization",e),fn("board insertionindex",i),i==null?i=this._BoardList.length:(i<0&&(i+=this._BoardList.length),i=Math.max(0,Math.min(i,this._BoardList.length)));const r=xg("board id",e.Id);let o=new Bg(this._Project,r);return this._attachBoardAt(o,i),o._deserializeConfigurationFrom(e),o._deserializeStickersFrom(e),o._deserializeBoardsFrom(e),this.rerender(),o}DuplicateOfBoardAt(e){Li("board index",e);const i=this.existingBoard(e).Serialization;return fi(i),this.BoardDeserializedAt(i,e+1)}mayShiftBoardUp(e){const i=this.existingBoard(e);return this._BoardList.indexOf(i)>0}mayShiftBoardDown(e){const i=this.existingBoard(e),r=this._BoardList,o=r.indexOf(i);return o>=0&&o<r.length-1}shiftBoardToTop(e){const i=this.existingBoard(e);if(this.mayShiftBoardUp(i)){const r=this._BoardList.indexOf(i);this._detachBoardAt(r),this._attachBoardAt(i,0),this.rerender()}}shiftBoardUp(e){const i=this.existingBoard(e);if(this.mayShiftBoardUp(i)){const r=this._BoardList.indexOf(i);this._detachBoardAt(r),this._attachBoardAt(i,r-1),this.rerender()}}shiftBoardDown(e){const i=this.existingBoard(e);if(this.mayShiftBoardDown(i)){const r=this._BoardList.indexOf(i);this._detachBoardAt(r),this._attachBoardAt(i,r+1),this.rerender()}}shiftBoardToBottom(e){const i=this.existingBoard(e);if(this.mayShiftBoardDown(i)){const r=this._BoardList.indexOf(i);this._detachBoardAt(r),this._attachBoardAt(i,this._BoardList.length),this.rerender()}}shiftBoardTo(e,i){const r=this.existingBoard(e);Li("SNS board index",i),i<0&&(i+=this._BoardList.length),i=Math.max(0,Math.min(i,this._BoardList.length));const o=this._BoardList.indexOf(r);o!==i&&(this._detachBoardAt(o),this._attachBoardAt(r,i),this.rerender())}shiftBoardsByIndex(e,i,r){const o=this._BoardList.length;Br("old index",e,0,o),Br("new index",i,0,o);const n=this._BoardList.slice(e,e+r);n.forEach(s=>this._detachBoardAt(e)),i>e&&(i-=r),n.forEach((s,l)=>this._attachBoardAt(s,i+l)),this.rerender()}mayShiftBoardIn(e){const i=this.existingBoard(e);return this.mayShiftBoardDown(i)}mayShiftBoardOut(e){return this._Folder!=null}shiftBoardIn(e){const i=this.existingBoard(e);if(this.mayShiftBoardIn(i)){const r=this._BoardList.indexOf(i),o=this._BoardList[r+1];this._detachBoardAt(r),o._attachBoardAt(i,0),this.rerender(),o.rerender()}}shiftBoardOut(e){const i=this.existingBoard(e);if(this.mayShiftBoardOut(i)){const r=this._BoardList.indexOf(i),o=this._Folder;this._detachBoardAt(r),o._attachBoardAt(i,o.Index),this.rerender(),o.rerender()}}mayMoveBoardTo(e,i,r){const o=this.existingBoard(e),n=Wr(i)?i:this.existingBoard(i);return fn("insertion index",r),n.isAttached&&n!==o&&!o.containsFolder(n)}moveBoardTo(e,i,r){const o=this.existingBoard(e),n=Wr(i)?i:this.existingBoard(i);if(fn("insertion index",r),n.isAttached&&n!==o&&!o.containsFolder(n)){const s=this._BoardList.indexOf(o);let l=r??n.BoardCount;l<0&&(l+=n.BoardCount),l=Math.max(0,Math.min(l,n.BoardCount)),this._detachBoardAt(s),n._attachBoardAt(o,l),this.rerender(),n.rerender()}}destroyBoard(e){const i=this.Board(e);if(i==null){Nr(e)&&oe("NoSuchBoard: the given board could not be found");return}i.clear(),_s(i);const r=this._BoardList.indexOf(i);this._detachBoardAt(r),_x(i),i._Project=void 0,this._reportChange("destroyBoard",i),this.rerender()}clear(){for(let e=0,i=this._BoardList.length;e<i;e++)this.destroyBoard(this._BoardList[0])}Rendering(e){if(this.hasError)return Hn.call(this);let i=this._Renderer;if(i==null)return"";try{return i.call(this,e)}catch(r){return this.Error={Type:"Rendering Failure",Message:""+r,Cause:r},Hn.call(this)}}_attachBoardAt(e,i){e._Folder=this,this._BoardList.splice(i,0,e),this._reportChange("attachBoard",e,this,i)}_detachBoardAt(e){const i=this._BoardList.splice(e,1)[0];i._Folder=void 0,this._reportChange("detachBoard",i,this,e)}_serializeConfigurationInto(e){super._serializeConfigurationInto(e);const i=r=>{this["_"+r]!=null&&(e[r]=this[r])};["SnapToGrid","GridWidth","GridHeight"].forEach(r=>i(r))}_deserializeConfigurationFrom(e){super._deserializeConfigurationFrom(e);const i=r=>{if(e[r]!=null)try{this[r]=e[r]}catch{console.warn("DeserializationError:invalid value for property "+Ci(r))}};["SnapToGrid","GridWidth","GridHeight"].forEach(r=>i(r))}_serializeBoardsInto(e){const i=this._BoardList.slice();i.length>0&&(e.BoardList=i.map(r=>r.Serialization))}_deserializeBoardsFrom(e){this._BoardList.length>0&&this.clear(),Xr(e.BoardList,Er)&&e.BoardList.length>0&&e.BoardList.forEach((i,r)=>{this.BoardDeserializedAt(i,r)})}};const Ux=Object.create(null);["Name","BackgroundColor","BackgroundTexture","FontFamily","FontSize","FontWeight","FontStyle","LineHeight","ForegroundColor","Value","activeScript","pendingScript","SnapToGrid","GridWidth","GridHeight"].forEach(t=>Ux[t]=!0);let vs=class Vg extends ys{constructor(e){super(void 0,void 0),Se(this,"_onChange",[]),Se(this,"_onRender",[]),Se(this,"_onError",[]),this._Project=this,Mn("project name",e),this._Name=e}get Name(){return this._Name}set Name(e){_e("Name")}get IndexPath(){return[]}set IndexPath(e){_e("IndexPath")}BoardAtIndexPath(e){if(vm("board index path",e,us),e.length!==0){let i;for(let r=0,o=e.length;r<o;r++)if(i=(i||this).BoardAt(e[r]),i==null)return;return i}}FolderWithId(e){return Bl("folder id",e),Dl(this,e)}BoardWithId(e){const i=Dl(this,e);return _o(i)&&oe("NotABoard: the folder with the given id is not a board, but the project"),i}StickerWithId(e){return Bl("sticker id",e),yx(this,e)}recursivelyActivateAllScripts(){this.activateScript(),this._BoardList.forEach(e=>e.recursivelyActivateAllScripts())}onChange(e){kr('"onChange" callback',e),this._onChange.push(e)}_reportChange(e,i,...r){e==="configure"&&(e=Wr(i)?"configureFolder":"configureSticker"),r.unshift(this,e,i),this._onChange.forEach(o=>o.apply(this,r))}onRender(e){kr('"onRender" callback',e),this._onRender.push(e)}rerender(e,i){this._onRender.forEach(r=>r(this,e,i))}onError(e){kr('"onError" callback',e),this._onError.push(e)}showError(e,i){this._onError.forEach(r=>r(this,e,i))}get Serialization(){const e={};return this._serializeConfigurationInto(e),this._serializeBoardsInto(e),delete e.Id,e}set Serialization(e){_e("Serialization")}static deserializedFrom(e,i){Mn("project name",e);const r=new Vg(e);return delete i.Name,r._Name=e,r._deserializeConfigurationFrom(i),r._deserializeBoardsFrom(i),r}};const Cg=Object.create(null);["Name","BackgroundColor","BackgroundTexture","FontFamily","FontSize","FontWeight","FontStyle","LineHeight","ForegroundColor","Value","activeScript","pendingScript","SnapToGrid","GridWidth","GridHeight"].forEach(t=>Cg[t]=!0);let Bg=class extends ys{constructor(e,i){super(e,i),Se(this,"_StickerList",[]),xx(e,this),e._reportChange("createBoard",this)}get StickerList(){return this._StickerList.slice()}set StickerList(e){_e("StickerList")}get StickerCount(){return this._StickerList.length}set StickerCount(e){_e("StickerCount")}IndexOfSticker(e){return fg("SNS sticker to search for",e),this._StickerList.indexOf(e)}Sticker(e){switch(ng("sticker, name or index",e),!0){case Xn(e):const i=e;return i.Board===this?i:void 0;case fo(e):const r=e;return this._StickerList[r];case Mr(e):return this.StickerNamed(e)}oe("InvalidArgument: no valid sticker, sticker name or sticker index given")}existingSticker(e){let i=this.Sticker(e);return i==null&&oe("StickerNotFound: the desired sticker could not be found"),i}StickerNamed(e){Mn("SNS sticker name",e),e=e.trim().toLowerCase();let i;return this._StickerList.forEach(r=>{i==null&&r.Name!=null&&r.Name.toLowerCase()===e&&(i=r)}),i}StickerAt(e){return Li("SNS sticker index",e),e<0&&(e+=this._StickerList.length),this._StickerList[e]}hasSticker(e){return this.Sticker(e)!=null}newStickerAt(e,i){return i==null?this.StickerDeserializedAt({},e):this.StickerDeserializedAt({Id:i},e)}StickerDeserializedAt(e,i){ms("sticker serialization",e),fn("SNS sticker index",i),i==null?i=this._StickerList.length:(i<0&&(i+=this._StickerList.length),i=Math.max(0,Math.min(i,this._StickerList.length)));const r=xg("sticker id",e.Id);let o=new Wg(this.Project,r);return this._attachStickerAt(o,i),o._deserializeConfigurationFrom(e),this.rerender(),o}DuplicateOfStickerAt(e){Li("SNS sticker index",e);const i=this.existingSticker(e).Serialization;return fi(i),this.StickerDeserializedAt(i,e+1)}mayShiftStickerUp(e){const i=this.existingSticker(e);return this._StickerList.indexOf(i)>0}mayShiftStickerDown(e){const i=this.existingSticker(e),r=this._StickerList,o=r.indexOf(i);return o>=0&&o<r.length-1}shiftStickerToTop(e){const i=this.existingSticker(e);if(this.mayShiftStickerUp(i)){const r=this._StickerList.indexOf(i);this._detachStickerAt(r),this._attachStickerAt(i,0),this.rerender()}}shiftStickerUp(e){const i=this.existingSticker(e);if(this.mayShiftStickerUp(i)){const r=this._StickerList.indexOf(i);this._detachStickerAt(r),this._attachStickerAt(i,r-1),this.rerender()}}shiftStickerDown(e){const i=this.existingSticker(e);if(this.mayShiftStickerDown(i)){const r=this._StickerList.indexOf(i);this._detachStickerAt(r),this._attachStickerAt(i,r+1),this.rerender()}}shiftStickerToBottom(e){const i=this.existingSticker(e);if(this.mayShiftStickerDown(i)){const r=this._StickerList.indexOf(i);this._detachStickerAt(r),this._attachStickerAt(i,this._StickerList.length),this.rerender()}}shiftStickerTo(e,i){const r=this.existingSticker(e);Li("SNS sticker index",i),i<0&&(i+=this._StickerList.length),i=Math.max(0,Math.min(i,this._StickerList.length-1));const o=this._StickerList.indexOf(r);o!==i&&(this._detachStickerAt(o),this._attachStickerAt(r,i),this.rerender())}shiftStickersByIndex(e,i,r){const o=this._StickerList.length;Br("old index",e,0,o),Br("new index",i,0,o);const n=this._StickerList.slice(e,e+r);n.forEach(s=>this._detachStickerAt(e)),i>e&&(i-=r),n.forEach((s,l)=>this._attachStickerAt(s,i+l)),this.rerender()}destroySticker(e){const i=this.Sticker(e);if(i==null){Xn(e)&&oe("NoSuchSticker: the given sticker could not be found");return}_s(i);const r=this._StickerList.indexOf(i);this._detachStickerAt(r),bx(i),i._Project=void 0,this._reportChange("destroySticker",i),this.rerender()}clear(){super.clear();for(let e=0,i=this._StickerList.length;e<i;e++)this.destroySticker(this._StickerList[0])}recursivelyActivateAllScripts(){this.activateScript(),this._BoardList.forEach(e=>e.recursivelyActivateAllScripts()),this._StickerList.forEach(e=>e.activateScript())}rerender(){this.Project.rerender(this)}_attachStickerAt(e,i){e._Folder=this,this._StickerList.splice(i,0,e),this._reportChange("attachSticker",e,this,i)}_detachStickerAt(e){const i=this._StickerList.splice(e,1)[0];i._Folder=void 0,this._reportChange("detachSticker",i,this,e)}get Serialization(){const e={};return this._serializeConfigurationInto(e),this._serializeBoardsInto(e),this._serializeStickersInto(e),e}set Serialization(e){_e("Serialization")}_serializeStickersInto(e){const i=this._StickerList.slice();i.length>0&&(e.StickerList=i.map(r=>r.Serialization))}_deserializeStickersFrom(e){this._StickerList.length>0&&this.clear(),Xr(e.StickerList,Er)&&e.StickerList.length>0&&e.StickerList.forEach((i,r)=>{this.StickerDeserializedAt(i,r)})}};["Name","BackgroundColor","BackgroundTexture","FontFamily","FontSize","FontWeight","FontStyle","LineHeight","ForegroundColor","Value","activeScript","pendingScript","SnapToGrid","GridWidth","GridHeight"].forEach(t=>Cg[t]=!0);let Wg=class extends bs{constructor(e,i){super(e,i),Se(this,"_minWidth"),Se(this,"_maxWidth",lx),Se(this,"_minHeight"),Se(this,"_maxHeight",dx),Se(this,"_Geometry",{...ir}),Se(this,"_Lock",!1),Se(this,"_Visibility",!0),Se(this,"_Enabling",!0),Sx(e,this),e._reportChange("createSticker",this)}get Board(){return this._Folder}set Board(e){_e("Board")}get BackgroundTexture(){return this._BackgroundTexture}set BackgroundTexture(e){og("visual background texture",e),this._BackgroundTexture!==e&&(this._BackgroundTexture=e,this._reportChange("configure",this,"BackgroundTexture",e),this.rerender())}get Index(){return this._Folder.IndexOfSticker(this)}set Index(e){_e("Index")}get mayBeShiftedUp(){return this._Folder.mayShiftStickerUp(this)}set mayBeShiftedUp(e){_e("mayBeShiftedUp")}get mayBeShiftedDown(){return this._Folder.mayShiftStickerDown(this)}set mayBeShiftedDown(e){_e("mayBeShiftedDown")}get minWidth(){return this._minWidth==null?sx:this._minWidth}set minWidth(e){en("minimal sticker width",e),this._minWidth!==e&&(this._minWidth=e,this._reportChange("configure",this,"minWidth",e),this._minWidth!=null&&this._maxWidth!=null&&this._maxWidth<this._minWidth&&(this._maxWidth=e,this._reportChange("configure",this,"maxWidth",this._minWidth)),this._minWidth!=null&&this._Geometry.Width<this._minWidth&&(this.Width=this._minWidth),this.rerender())}get maxWidth(){return this._maxWidth}set maxWidth(e){en("maximal sticker width",e),e!=null&&this._minWidth!=null&&(e=Math.max(this._minWidth,e)),this._maxWidth!==e&&(this._maxWidth=e,this._reportChange("configure",this,"maxWidth",this._maxWidth),this._maxWidth!=null&&this._Geometry.Width>this._maxWidth&&(this.Width=this._maxWidth),this.rerender())}get minHeight(){return this._minHeight==null?ux:this._minHeight}set minHeight(e){en("minimal sticker height",e),this._minHeight!==e&&(this._minHeight=e,this._reportChange("configure",this,"minHeight",e),this._minHeight!=null&&this._maxHeight!=null&&this._maxHeight<this._minHeight&&(this._maxHeight=e,this._reportChange("configure",this,"maxHeight",this._minHeight)),this._minHeight!=null&&this._Geometry.Height<this._minHeight&&(this.Height=this._minHeight),this.rerender())}get maxHeight(){return this._maxHeight}set maxHeight(e){en("maximal sticker height",e),e!=null&&this._minHeight!=null&&(e=Math.max(this._minHeight,e)),this._maxHeight!==e&&(this._maxHeight=e,this._reportChange("configure",this,"maxHeight",this._maxHeight),this._maxHeight!=null&&this._Geometry.Height>this._maxHeight&&(this.Height=this._maxHeight),this.rerender())}get x(){return this._Geometry.x}set x(e){Wl("sticker x coordinate",e),this.Geometry={...this.Geometry,x:e}}get y(){return this._Geometry.y}set y(e){Wl("sticker y coordinate",e),this.Geometry={...this.Geometry,y:e}}get Width(){return this._Geometry.Width}set Width(e){Nl("sticker width",e),this.Geometry={...this.Geometry,Width:e}}get Height(){return this._Geometry.Height}set Height(e){Nl("sticker height",e),this.Geometry={...this.Geometry,Height:e}}get Position(){return{x:this._Geometry.x,y:this._Geometry.y}}set Position(e){nx("visual position",e),this.Geometry={...this.Geometry,x:e.x,y:e.y}}get Size(){return{Width:this._Geometry.Width,Height:this._Geometry.Height}}set Size(e){ox("visual size",e),this.Geometry={...this.Geometry,Width:e.Width,Height:e.Height}}get Geometry(){let{x:e,y:i,Width:r,Height:o}=this._Geometry;return this._minWidth!=null&&(r=Math.max(this._minWidth,r)),this._maxWidth!=null&&(r=Math.min(r,this._maxWidth)),this._minHeight!=null&&(o=Math.max(this._minHeight,o)),this._maxHeight!=null&&(o=Math.min(o,this._maxHeight)),{x:e,y:i,Width:r,Height:o}}set Geometry(e){ax("visual geometry",e);let{x:i,y:r,Width:o,Height:n}=this._Geometry;(i!==e.x||o!==e.Width||r!==e.y||n!==e.Height)&&(this._Geometry={...e},this._reportChange("configure",this,"Geometry",{...e}),this.rerender())}get Lock(){return this._Lock}set Lock(e){qo("sticker lock",e),this._Lock!==e&&(this._Lock=e,this._reportChange("configure",this,"Lock",e),this.rerender())}lock(){this.Lock=!0}unlock(){this.Lock=!1}get isLocked(){return this._Lock}set isLocked(e){this.Lock=e}get Visibility(){return this._Visibility}set Visibility(e){qo("sticker visibility",e),this._Visibility!==e&&(this._Visibility=e,this._reportChange("configure",this,"Visibility",e),this.rerender())}show(){this.Visibility=!0}hide(){this.Visibility=!1}get isVisible(){return this._Visibility}set isVisible(e){this.Visibility=e}get Enabling(){return this._Enabling}set Enabling(e){qo("sticker enabling",e),this._Enabling!==e&&(this._Enabling=e,this._reportChange("configure",this,"Enabling",e),this.rerender())}enable(){this.Enabling=!0}disable(){this.Enabling=!1}get isEnabled(){return this._Enabling}set isEnabled(e){this.Enabling=e}Rendering(e){if(this.hasError)return Hn.call(this);let i=this._Renderer||$g;try{return i.call(this,e)}catch(r){return this.Error={Type:"Rendering Failure",Message:""+r,Cause:r},Hn.call(this)}}rerender(){this._Project.rerender(this._Folder,this)}get Serialization(){const e={};return this._serializeConfigurationInto(e),e}set Serialization(e){_e("Serialization")}_serializeConfigurationInto(e){super._serializeConfigurationInto(e),e.Geometry={...this._Geometry},this._minWidth!=null&&(e.minWidth=this._minWidth),this._maxWidth!=null&&(e.maxWidth=this._maxWidth),this._minHeight!=null&&(e.minHeight=this._minHeight),this._maxHeight!=null&&(e.maxHeight=this._maxHeight),this.isLocked&&(e.Lock=!0),this.isVisible||(e.Visibility=!1),this.isEnabled||(e.Enabling=!1)}_deserializeConfigurationFrom(e){super._deserializeConfigurationFrom(e);let{x:i,y:r,Width:o,Height:n}=e.Geometry||ir;$i(i)||(i=ir.x),$i(r)||(r=ir.y),ki(o)||(o=ir.Width),ki(n)||(n=ir.Height),this.Geometry={x:i,y:r,Width:o,Height:n},e.Lock!=null&&(this.Lock=e.Lock),e.Visibility!=null&&(this.Visibility=e.Visibility),e.Enabling!=null&&(this.Enabling=e.Enabling)}};window.SNS={throwError:oe,throwReadOnlyError:_e,SNS_Project:vs};console.log("SNS is globally available now");document.dispatchEvent(new CustomEvent("SNS",{detail:window.SNS}));var Ax=Object.defineProperty,Lx=(t,e,i)=>e in t?Ax(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,et=(t,e,i)=>(Lx(t,typeof e!="symbol"?e+"":e,i),i);function ci(t){var e=/^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(t);if(e==null)throw new Error(t);var i=new Error(e[2]);throw i.name=e[1],i}function Ex(t){return typeof t=="boolean"||t instanceof Boolean}function Xx(t){return typeof t!="number"&&!(t instanceof Number)?!1:(t=t.valueOf(),isFinite(t)&&Math.round(t)===t)}function Mx(t){return typeof t!="number"&&!(t instanceof Number)?!1:(t=t.valueOf(),isFinite(t)&&Math.round(t)===t&&t>=0)}function Hx(t){return typeof t!="number"&&!(t instanceof Number)?!1:(t=t.valueOf(),isFinite(t)&&Math.round(t)===t&&t>=1)}function Ng(t,e){return(typeof t=="string"||t instanceof String)&&e.test(t.valueOf())}var Ox=/^[^\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function zx(t){return Ng(t,Ox)}var jx=/^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function Rx(t){return Ng(t,jx)}function Gx(t){return typeof t=="function"}var Yx=Array.isArray;function Zx(t,e,i,r){if(Yx(t))try{for(var o=0,n=t.length;o<n;o++)if(e(t[o])==!1)return!1;return!(i!=null&&t.length<i||r!=null&&t.length>r)}catch{}return!1}function qx(t,e){return e.indexOf(t)>=0}var Gi=!0;function Jx(t,e,i,r,o){if(e==null)return e;if(i(e))switch(!0){case e instanceof Boolean:case e instanceof Number:case e instanceof String:return e.valueOf();default:return e}else ci("InvalidArgument: the given ".concat(Ei(t)," is no valid ").concat(Ei(o)))}function Yi(t,e,i){var r=function(s,l){return Jx(s,l,t,e,i)},o=t.name;if(o!=null&&/^ValueIs/.test(o)){var n=o.replace(/^ValueIs/,"allow");return Kx(r,n)}else return r}function Kx(t,e){if(t==null&&ci("MissingArgument: no function given"),typeof t!="function"&&ci("InvalidArgument: the given 1st Argument is not a JavaScript function"),e==null&&ci("MissingArgument: no desired name given"),typeof e!="string"&&!(e instanceof String)&&ci("InvalidArgument: the given desired name is not a string"),t.name===e)return t;try{if(Object.defineProperty(t,"name",{value:e}),t.name===e)return t}catch{}var i=new Function("originalFunction","return function "+e+" () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}");return i(t)}var Qx=Yi(Ex,Gi,"boolean value"),Fl=Yi(Xx,Gi,"integral numeric value"),Ca=Yi(Mx,Gi,"ordinal number"),Ul=Yi(Hx,Gi,"cardinal number"),e_=Yi(zx,Gi,"literal text"),ea=Yi(Rx,Gi,"single line of text"),tn=Yi(Gx,Gi,"JavaScript function");function Al(t,e,i,r,o,n){return e==null?e:i_(t,e,i,r,o,n)}function t_(t,e,i,r,o,n){if(e==null&&ci("MissingArgument: no ".concat(Ei(t)," given")),Zx(e,i,o,n))return e;ci("InvalidArgument: the given ".concat(Ei(t)," is ")+(r==null?"either not a list or contains invalid elements":"no "+Ei(r)))}var i_=t_;function Ll(t,e,i){return e==null?e:n_(t,e,i)}function r_(t,e,i){if(e==null&&ci("MissingArgument: no ".concat(Ei(t)," given")),qx(e,i))return e==null||typeof e.valueOf!="function"?e:e.valueOf();ci("InvalidArgument: the given ".concat(Ei(t)," is not among the supported values"))}var n_=r_;function Ei(t){var e=/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g,i=/[\x00-\x1f\x7f-\x9f]/g;return t.replace(e,function(r){return r==="\\"?"\\\\":r}).replace(i,function(r){switch(r){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v";default:{var o=r.charCodeAt(0).toString(16);return"\\x"+"00".slice(o.length)+o}}})}var o_=Object.defineProperty,a_=(t,e,i)=>e in t?o_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,be=(t,e,i)=>(a_(t,typeof e!="symbol"?e+"":e,i),i);function Et(t){var e=/^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(t);if(e==null)throw new Error(t);var i=new Error(e[2]);throw i.name=e[1],i}function bo(t){return typeof t=="boolean"||t instanceof Boolean}function pr(t){return typeof t=="number"||t instanceof Number}function Pr(t){return(typeof t=="number"||t instanceof Number)&&isFinite(t.valueOf())}function s_(t,e,i,r,o){if(r===void 0&&(r=!0),o===void 0&&(o=!0),!pr(t)||isNaN(t))return!1;if(Pr(e)){if(Pr(i)){if(t<e||!r&&t===e||t>i||!o&&t===i)return!1}else if(t<e||!r&&t===e)return!1}else if(Pr(i)&&(t>i||!o&&t===i))return!1;return!0}function yo(t){return typeof t!="number"&&!(t instanceof Number)?!1:(t=t.valueOf(),isFinite(t)&&Math.round(t)===t)}function ws(t){return typeof t!="number"&&!(t instanceof Number)?!1:(t=t.valueOf(),isFinite(t)&&Math.round(t)===t&&t>=0)}function l_(t){return typeof t!="number"&&!(t instanceof Number)?!1:(t=t.valueOf(),isFinite(t)&&Math.round(t)===t&&t>=1)}function Or(t){return typeof t=="string"||t instanceof String}function zt(t,e){return(typeof t=="string"||t instanceof String)&&e.test(t.valueOf())}var u_=/^[^\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function $s(t){return zt(t,u_)}var d_=/^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function Zt(t){return zt(t,d_)}function Tg(t){return typeof t=="function"}function ks(t){return t!=null&&typeof t=="object"}function zr(t){return t!=null&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype}var Dg=Array.isArray;function El(t,e,i){if(Dg(t)){for(var r=0,o=t.length;r<o;r++)if(t[r]===void 0)return!1;return!0}return!1}function jr(t,e,i,r){if(Dg(t))try{for(var o=0,n=t.length;o<n;o++)if(e(t[o])==!1)return!1;return!(i!=null&&t.length<i||r!=null&&t.length>r)}catch{}return!1}function Fg(t,e){return e.indexOf(t)>=0}function vo(t){return Or(t)&&(k_.hasOwnProperty(t)||/^#[a-fA-F0-9]{6}$/.test(t)||/^#[a-fA-F0-9]{8}$/.test(t)||/^rgb\([0-9]+,\s*[0-9]+,\s*[0-9]+\)$/.test(t)||/^rgba\([0-9]+,\s*[0-9]+,\s*[0-9]+,([01]|[0]?[.][0-9]+)\)$/.test(t))}var c_=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;function Ug(t){return zt(t,c_)}var h_=/^[^\s\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function Is(t){if(!zt(t,h_)||t==="")return!1;try{return new URL(t,"file://"),!0}catch{return!1}}var rt=!1,Le=!0;function p_(t,e,i,r,o){if(e==null){if(r)return e;Et("MissingArgument: no ".concat(Xt(t)," given"))}else if(i(e))switch(!0){case e instanceof Boolean:case e instanceof Number:case e instanceof String:return e.valueOf();default:return e}else Et("InvalidArgument: the given ".concat(Xt(t)," is no valid ").concat(Xt(o)))}function me(t,e,i){var r=function(s,l){return p_(s,l,t,e,i)},o=t.name;if(o!=null&&/^ValueIs/.test(o)){var n=o.replace(/^ValueIs/,e?"allow":"expect");return g_(r,n)}else return r}function g_(t,e){if(t==null&&Et("MissingArgument: no function given"),typeof t!="function"&&Et("InvalidArgument: the given 1st Argument is not a JavaScript function"),e==null&&Et("MissingArgument: no desired name given"),typeof e!="string"&&!(e instanceof String)&&Et("InvalidArgument: the given desired name is not a string"),t.name===e)return t;try{if(Object.defineProperty(t,"name",{value:e}),t.name===e)return t}catch{}var i=new Function("originalFunction","return function "+e+" () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}");return i(t)}function Ag(t,e){if(e==null)Et("MissingArgument: no ".concat(Xt(t)," given"));else return e.valueOf()}var f_=me(bo,Le,"boolean value"),ta=me(bo,rt,"boolean value"),wn=me(yo,Le,"integral numeric value"),Xi=me(yo,rt,"integral numeric value");function m_(t,e,i,r){return e==null?e:x_(t,e,i,r)}function Dr(t,e,i,r){if(Xi(t,e),isNaN(e)&&Et("InvalidArgument: the given ".concat(Xt(t)," is not-a-number")),i!=null&&isFinite(i)){if(r!=null&&isFinite(r)){if(e<i||e>r)throw new RangeError("the given ".concat(Xt(t)," (").concat(e,") is outside ")+"the allowed range (".concat(i,"...").concat(r,")"))}else if(e<i)throw new RangeError("the given ".concat(Xt(t)," is below the allowed ")+"minimum (".concat(e," < ").concat(i,")"))}else if(r!=null&&isFinite(r)&&e>r)throw new RangeError("the given ".concat(Xt(t)," exceeds the allowed ")+"maximum (".concat(e," > ").concat(r,")"));return e.valueOf()}var x_=Dr,Xl=me(ws,Le,"ordinal number"),Ml=me(l_,Le,"cardinal number"),Hl=me($s,Le,"literal text"),__=me(Zt,Le,"single line of text"),Ba=me(Zt,rt,"single line of text"),$n=me(Tg,Le,"JavaScript function"),Vr=me(Tg,rt,"JavaScript function"),S_=me(zr,Le,'"plain" JavaScript object');function b_(t,e,i,r,o,n){if(e==null&&Et("MissingArgument: no ".concat(Xt(t)," given")),jr(e,i,o,n))return e;Et("InvalidArgument: the given ".concat(Xt(t)," is ")+"either not a list or contains invalid elements")}function y_(t,e,i){return e==null?e:w_(t,e,i)}function v_(t,e,i){if(e==null&&Et("MissingArgument: no ".concat(Xt(t)," given")),Fg(e,i))return e==null||typeof e.valueOf!="function"?e:e.valueOf();Et("InvalidArgument: the given ".concat(Xt(t)," is not among the supported values"))}var w_=v_,Ol=me(vo,Le,"CSS color specification"),Lg=me(Is,Le,"URL");function Xt(t){var e=/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g,i=/[\x00-\x1f\x7f-\x9f]/g;return t.replace(e,function(r){return r==="\\"?"\\\\":r}).replace(i,function(r){switch(r){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v";default:{var o=r.charCodeAt(0).toString(16);return"\\x"+"00".slice(o.length)+o}}})}function $_(t,e){e===void 0&&(e='"');var i=/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|'/g,r=/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|"/g,o=/[\x00-\x1f\x7f-\x9f]/g;return t.replace(e==="'"?i:r,function(n){switch(n){case"'":return"\\'";case'"':return'\\"';case"\\":return"\\\\";default:return n}}).replace(o,function(n){switch(n){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v";default:{var s=n.charCodeAt(0).toString(16);return"\\x"+"00".slice(s.length)+s}}})}function Zi(t,e){return e===void 0&&(e='"'),e+$_(t,e)+e}function Cr(t,e,i){if(t===e)return!1;var r=typeof t;if(r!==typeof e)return!0;function o(s,l,u){if(!Array.isArray(l)||s.length!==l.length)return!0;for(var a=0,c=s.length;a<c;a++)if(Cr(s[a],l[a]))return!0;return!1}function n(s,l,u){if(Object.getPrototypeOf(s)!==Object.getPrototypeOf(l))return!0;for(var a in s)if(!(a in l))return!0;for(var a in l)if(!(a in s)||Cr(s[a],l[a]))return!0;return!1}switch(r){case"undefined":case"boolean":case"string":case"function":return!0;case"number":return isNaN(t)!==isNaN(e)||Math.abs(t-e)>Number.EPSILON;case"object":return t==null||e==null?!0:Array.isArray(t)?o(t,e):n(t,e);default:return!0}return!0}var k_={transparent:"rgba(0,0,0,0,0.0)",aliceblue:"rgba(240,248,255,1.0)",lightpink:"rgba(255,182,193,1.0)",antiquewhite:"rgba(250,235,215,1.0)",lightsalmon:"rgba(255,160,122,1.0)",aqua:"rgba(0,255,255,1.0)",lightseagreen:"rgba(32,178,170,1.0)",aquamarine:"rgba(127,255,212,1.0)",lightskyblue:"rgba(135,206,250,1.0)",azure:"rgba(240,255,255,1.0)",lightslategray:"rgba(119,136,153,1.0)",beige:"rgba(245,245,220,1.0)",lightslategrey:"rgba(119,136,153,1.0)",bisque:"rgba(255,228,196,1.0)",lightsteelblue:"rgba(176,196,222,1.0)",black:"rgba(0,0,0,1.0)",lightyellow:"rgba(255,255,224,1.0)",blanchedalmond:"rgba(255,235,205,1.0)",lime:"rgba(0,255,0,1.0)",blue:"rgba(0,0,255,1.0)",limegreen:"rgba(50,205,50,1.0)",blueviolet:"rgba(138,43,226,1.0)",linen:"rgba(250,240,230,1.0)",brown:"rgba(165,42,42,1.0)",magenta:"rgba(255,0,255,1.0)",burlywood:"rgba(222,184,135,1.0)",maroon:"rgba(128,0,0,1.0)",cadetblue:"rgba(95,158,160,1.0)",mediumaquamarine:"rgba(102,205,170,1.0)",chartreuse:"rgba(127,255,0,1.0)",mediumblue:"rgba(0,0,205,1.0)",chocolate:"rgba(210,105,30,1.0)",mediumorchid:"rgba(186,85,211,1.0)",coral:"rgba(255,127,80,1.0)",mediumpurple:"rgba(147,112,219,1.0)",cornflowerblue:"rgba(100,149,237,1.0)",mediumseagreen:"rgba(60,179,113,1.0)",cornsilk:"rgba(255,248,220,1.0)",mediumslateblue:"rgba(123,104,238,1.0)",crimson:"rgba(220,20,60,1.0)",mediumspringgreen:"rgba(0,250,154,1.0)",cyan:"rgba(0,255,255,1.0)",mediumturquoise:"rgba(72,209,204,1.0)",darkblue:"rgba(0,0,139,1.0)",mediumvioletred:"rgba(199,21,133,1.0)",darkcyan:"rgba(0,139,139,1.0)",midnightblue:"rgba(25,25,112,1.0)",darkgoldenrod:"rgba(184,134,11,1.0)",mintcream:"rgba(245,255,250,1.0)",darkgray:"rgba(169,169,169,1.0)",mistyrose:"rgba(255,228,225,1.0)",darkgreen:"rgba(0,100,0,1.0)",moccasin:"rgba(255,228,181,1.0)",darkgrey:"rgba(169,169,169,1.0)",navajowhite:"rgba(255,222,173,1.0)",darkkhaki:"rgba(189,183,107,1.0)",navy:"rgba(0,0,128,1.0)",darkmagenta:"rgba(139,0,139,1.0)",oldlace:"rgba(253,245,230,1.0)",darkolivegreen:"rgba(85,107,47,1.0)",olive:"rgba(128,128,0,1.0)",darkorange:"rgba(255,140,0,1.0)",olivedrab:"rgba(107,142,35,1.0)",darkorchid:"rgba(153,50,204,1.0)",orange:"rgba(255,165,0,1.0)",darkred:"rgba(139,0,0,1.0)",orangered:"rgba(255,69,0,1.0)",darksalmon:"rgba(233,150,122,1.0)",orchid:"rgba(218,112,214,1.0)",darkseagreen:"rgba(143,188,143,1.0)",palegoldenrod:"rgba(238,232,170,1.0)",darkslateblue:"rgba(72,61,139,1.0)",palegreen:"rgba(152,251,152,1.0)",darkslategray:"rgba(47,79,79,1.0)",paleturquoise:"rgba(175,238,238,1.0)",darkslategrey:"rgba(47,79,79,1.0)",palevioletred:"rgba(219,112,147,1.0)",darkturquoise:"rgba(0,206,209,1.0)",papayawhip:"rgba(255,239,213,1.0)",darkviolet:"rgba(148,0,211,1.0)",peachpuff:"rgba(255,218,185,1.0)",deeppink:"rgba(255,20,147,1.0)",peru:"rgba(205,133,63,1.0)",deepskyblue:"rgba(0,191,255,1.0)",pink:"rgba(255,192,203,1.0)",dimgray:"rgba(105,105,105,1.0)",plum:"rgba(221,160,221,1.0)",dimgrey:"rgba(105,105,105,1.0)",powderblue:"rgba(176,224,230,1.0)",dodgerblue:"rgba(30,144,255,1.0)",purple:"rgba(128,0,128,1.0)",firebrick:"rgba(178,34,34,1.0)",red:"rgba(255,0,0,1.0)",floralwhite:"rgba(255,250,240,1.0)",rosybrown:"rgba(188,143,143,1.0)",forestgreen:"rgba(34,139,34,1.0)",royalblue:"rgba(65,105,225,1.0)",fuchsia:"rgba(255,0,255,1.0)",saddlebrown:"rgba(139,69,19,1.0)",gainsboro:"rgba(220,220,220,1.0)",salmon:"rgba(250,128,114,1.0)",ghostwhite:"rgba(248,248,255,1.0)",sandybrown:"rgba(244,164,96,1.0)",gold:"rgba(255,215,0,1.0)",seagreen:"rgba(46,139,87,1.0)",goldenrod:"rgba(218,165,32,1.0)",seashell:"rgba(255,245,238,1.0)",gray:"rgba(128,128,128,1.0)",sienna:"rgba(160,82,45,1.0)",green:"rgba(0,128,0,1.0)",silver:"rgba(192,192,192,1.0)",greenyellow:"rgba(173,255,47,1.0)",skyblue:"rgba(135,206,235,1.0)",grey:"rgba(128,128,128,1.0)",slateblue:"rgba(106,90,205,1.0)",honeydew:"rgba(240,255,240,1.0)",slategray:"rgba(112,128,144,1.0)",hotpink:"rgba(255,105,180,1.0)",slategrey:"rgba(112,128,144,1.0)",indianred:"rgba(205,92,92,1.0)",snow:"rgba(255,250,250,1.0)",indigo:"rgba(75,0,130,1.0)",springgreen:"rgba(0,255,127,1.0)",ivory:"rgba(255,255,240,1.0)",steelblue:"rgba(70,130,180,1.0)",khaki:"rgba(240,230,140,1.0)",tan:"rgba(210,180,140,1.0)",lavender:"rgba(230,230,250,1.0)",teal:"rgba(0,128,128,1.0)",lavenderblush:"rgba(255,240,245,1.0)",thistle:"rgba(216,191,216,1.0)",lawngreen:"rgba(124,252,0,1.0)",tomato:"rgba(255,99,71,1.0)",lemonchiffon:"rgba(255,250,205,1.0)",turquoise:"rgba(64,224,208,1.0)",lightblue:"rgba(173,216,230,1.0)",violet:"rgba(238,130,238,1.0)",lightcoral:"rgba(240,128,128,1.0)",wheat:"rgba(245,222,179,1.0)",lightcyan:"rgba(224,255,255,1.0)",white:"rgba(255,255,255,1.0)",lightgoldenrodyellow:"rgba(250,250,210,1.0)",whitesmoke:"rgba(245,245,245,1.0)",lightgray:"rgba(211,211,211,1.0)",yellow:"rgba(255,255,0,1.0)",lightgreen:"rgba(144,238,144,1.0)",yellowgreen:"rgba(154,205,50,1.0)",lightgrey:"rgba(211,211,211,1.0)"},Eg,Wa,Xg,I_=[];function P_(t,e,i){var r,o,n,s={};for(n in e)n=="key"?r=e[n]:n=="ref"?o=e[n]:s[n]=e[n];if(arguments.length>2&&(s.children=arguments.length>3?Eg.call(arguments,2):i),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)s[n]===void 0&&(s[n]=t.defaultProps[n]);return V_(t,s,r,o)}function V_(t,e,i,r,o){var n={type:t,props:e,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:++Xg,__i:-1,__u:0};return Wa.vnode!=null&&Wa.vnode(n),n}Eg=I_.slice,Wa={__e:function(t,e,i,r){for(var o,n,s;e=e.__;)if((o=e.__c)&&!o.__)try{if((n=o.constructor)&&n.getDerivedStateFromError!=null&&(o.setState(n.getDerivedStateFromError(t)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,r||{}),s=o.__d),s)return o.__E=o}catch(l){t=l}throw t}},Xg=0,typeof Promise=="function"&&Promise.prototype.then.bind(Promise.resolve());var Mg=function(t,e,i,r){var o;e[0]=0;for(var n=1;n<e.length;n++){var s=e[n++],l=e[n]?(e[0]|=s?1:2,i[e[n++]]):e[++n];s===3?r[0]=l:s===4?r[1]=Object.assign(r[1]||{},l):s===5?(r[1]=r[1]||{})[e[++n]]=l:s===6?r[1][e[++n]]+=l+"":s?(o=t.apply(l,Mg(t,l,i,["",null])),r.push(o),l[0]?e[0]|=2:(e[n-2]=0,e[n]=o)):r.push(l)}return r},zl=new Map;function C_(t){var e=zl.get(this);return e||(e=new Map,zl.set(this,e)),(e=Mg(this,e.get(t)||(e.set(t,e=function(i){for(var r,o,n=1,s="",l="",u=[0],a=function(g){n===1&&(g||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,g,s):n===3&&(g||s)?(u.push(3,g,s),n=2):n===2&&s==="..."&&g?u.push(4,g,0):n===2&&s&&!g?u.push(5,0,!0,s):n>=5&&((s||!g&&n===5)&&(u.push(n,0,s,o),n=6),g&&(u.push(n,g,0,o),n=6)),s=""},c=0;c<i.length;c++){c&&(n===1&&a(),a(c));for(var d=0;d<i[c].length;d++)r=i[c][d],n===1?r==="<"?(a(),u=[u],n=3):s+=r:n===4?s==="--"&&r===">"?(n=1,s=""):s=r+s[0]:l?r===l?l="":s+=r:r==='"'||r==="'"?l=r:r===">"?(a(),n=1):n&&(r==="="?(n=5,o=s,s=""):r==="/"&&(n<5||i[c][d+1]===">")?(a(),n===3&&(u=u[0]),n=u,(u=u[0]).push(2,0,n),n=0):r===" "||r==="	"||r===`
`||r==="\r"?(a(),n=2):s+=r),n===3&&s==="!--"&&(n=4,u=u[0])}return a(),u}(t)),e),arguments,[])).length>1?e:e[0]}var wo=C_.bind(P_);let B_=t=>crypto.getRandomValues(new Uint8Array(t)),W_=(t,e,i)=>{let r=(2<<Math.log(t.length-1)/Math.LN2)-1,o=-~(1.6*r*e/t.length);return(n=e)=>{let s="";for(;;){let l=i(o),u=o;for(;u--;)if(s+=t[l[u]&r]||"",s.length===n)return s}}},N_=(t,e=21)=>W_(t,e,B_);var Hg="abcdefghijklmnopqrstuvwxyz",Og="ABCDEFGHIJKLMNOPQRSTUVWXYZ",zg="0123456789",T_="346789ABCDEFGHJKLMNPQRTUVWXYabcdefghijkmnpqrtwxyz",D_="6789BCDFGHJKLMNPQRTWbcdfghjkmnpqrtwz";const F_=zg,U_=Hg,A_=Og;var L_=F_+U_+A_,E_={lowercase:Hg,uppercase:Og,numbers:zg,nolookalikes:T_,nolookalikesSafe:D_,alphanumeric:L_};const X_=["String","Number","Object","Array","Boolean","Date"];function ia(t){return t&&typeof t=="object"}function Na(t,e,i){Object.defineProperty(t,e,{value:i,enumerable:!1,configurable:!0})}function jl(t,e,i){Na(t,"__key",e),Na(t,"__parent",i)}function M_(t){return Object.getOwnPropertyNames(t).concat(Object.getPrototypeOf(t)&&X_.indexOf(Object.getPrototypeOf(t).constructor.name)<0?Object.getOwnPropertyNames(Object.getPrototypeOf(t)):[]).filter(e=>e!=="constructor"&&typeof t[e]=="function")}const Ps={computedStack:[],trackerSymbol:Symbol("tracker")};let or=null;const Rn=Symbol();function Ta(){if(or){for(const t of or)t(),t[Rn]=!1;or=null}}function Rl(t,e){t[Rn]||(or===null&&(or=[],e===!0?queueMicrotask(Ta):setTimeout(Ta,e)),or.push(t))}const{computedStack:rn,trackerSymbol:ra}=Ps,na=Symbol("__observed"),di=Symbol("modifiedProperty");function kn(t,e={}){const{props:i,ignore:r,batch:o,deep:n=!0,bubble:s,bind:l}=e;if(t[na])return t;const u=g=>g!==na&&(i==null||i instanceof Array&&i.includes(g))&&(r==null||r instanceof Array&&!r.includes(g));n&&Object.entries(t).forEach(function([g,p]){ia(p)&&u(g)&&(t[g]=kn(p,e),s&&jl(t[g],g,t))});function a(g,p,f){if(p==="__handler")Na(g,"__handler",f);else if(!u(p))g[p]=f;else if(Array.isArray(g)&&p==="length"||H_(g[p],f)){const m=p!==di&&n&&ia(f),x=g[p];g[p]=m?kn(f,e):f,m&&s&&jl(g[p],p,g);const b=[p];let P=g;for(;P&&!(P.__handler&&P.__handler(b,f,x,d)===!1);)P.__key&&P.__parent?(b.unshift(P.__key),P=P.__parent):P=null;const C=c.get(p);if(C)for(const w of C){const y=w[ra],N=y&&y.get(g),B=N&&N.has(p);w.__disposed||y&&!B?C.delete(w):w!==rn[0]&&(typeof o<"u"&&o!==!1?(Rl(w,o),w[Rn]=!0):w())}if(p!==di){g[di]=p;const w=c.get(di);if(w)for(const y of w){const N=y[ra],B=N&&N.get(g),F=B&&B.has(di);y.__disposed||N&&!F?w.delete(y):y!==rn[0]&&(typeof o<"u"&&o!==!1?(Rl(y,o),y[Rn]=!0):y())}}}}const c=new Map,d=new Proxy(t,{get(g,p){if(p===na)return!0;if(u(p)&&rn.length){const f=rn[0],m=f[ra];if(m){let b=m.get(t);b||(b=new Set,m.set(t,b)),b.add(p)}let x=c.get(p);x||(x=new Set,c.set(p,x)),x.add(f)}return t[p]},set(g,p,f){return a(t,p,f),!0},defineProperty(g,p,f){if(p==="__handler")throw new Error("Don't track bubble handlers");if(u(p)){if(!Array.isArray(t)||p==="length"){"value"in f&&n&&ia(f.value)&&(f={...f},f.value=kn(f.value,e));const m=Reflect.defineProperty(t,p,f);return p!==di&&(t[di]=p),m}}else return Reflect.defineProperty(t,p,f);return!1},deleteProperty(g,p){if(p===di)throw new Error('internal property Symbol("modifiedProperty") must not be deleted');return p in t&&a(t,p,void 0),Reflect.deleteProperty(g,p)}});return l&&M_(t).forEach(g=>t[g]=t[g].bind(d)),d}function H_(t,e,i){const r=new Map;function o(n,s,l){if(n===s)return!1;let u=typeof n;if(u!==typeof s)return!0;function a(d,g,p){if(!Array.isArray(g)||d.length!==g.length)return!0;if(r.has(d)||r.has(g)){if(r.has(d)&&r.get(d).has(g)||r.has(g)&&r.get(g).has(d))return!1;r.has(d)||r.set(d,new Set),r.get(d).add(g)}for(let f=0,m=d.length;f<m;f++)if(o(d[f],g[f],p))return!0;return!1}function c(d,g,p="by-value"){if(Object.getPrototypeOf(d)!==Object.getPrototypeOf(g))return!0;for(let f in d)if(!(f in g))return!0;for(let f in g)if(!(f in d))return!0;if(r.has(d)||r.has(g)){if(r.has(d)&&r.get(d).has(g)||r.has(g)&&r.get(g).has(d))return!1;r.has(d)||r.set(d,new Set),r.get(d).add(g)}for(let f in d)if(o(d[f],g[f],p))return!0;return!1}switch(u){case"undefined":case"boolean":case"string":case"function":return!0;case"number":return isNaN(n)!==isNaN(s)||Math.abs(n-s)>Number.EPSILON;case"object":return n==null||s==null?!0:l==="by-value"&&(n instanceof Boolean||n instanceof Number||n instanceof String)?n.valueOf()!==s.valueOf():Array.isArray(n)?a(n,s,l):l==="by-reference"?!0:c(n,s,l);default:return!0}return!0}return o(t,e,i)}const{computedStack:Gl,trackerSymbol:O_}=Ps;function z_(t,{autoRun:e=!0,callback:i,bind:r,disableTracking:o=!1}={}){function n(u,a=[]){const c=i||l;o||(c[O_]=new WeakMap),Gl.unshift(c),a.length>0?a=[...a,s]:a=[s];const d=u?u():r?t.apply(r,a):t(...a);return Gl.shift(),d}const s={computeAsync:n},l=(...u)=>n(null,u);return e&&l(),l}function j_(t){return t[Ps.trackerSymbol]=null,t.__disposed=!0}const R_={observe:kn,modifiedProperty:di,computed:z_,dispose:j_,batch:Ta},jg=Zt,{observe:G_,computed:Rg,dispose:Y_}=R_,Gn=document.createElement("style");Gn.innerHTML=`
/**** DefaultSticker ****/

  .SNS.DefaultSticker {
    left:0px; top:0px; right:0px; bottom:0px;
  }
`;document.head.appendChild(Gn);const Z_=["normal","italic"],q_=["missing Behaviour","Behaviour Execution Failure","Script Compilation Failure","Script Execution Failure","Rendering Failure","Event Handling Failure",'"onMount" Callback Failure','"onUnmount" Callback Failure'];function kt(t){let e=/^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(t);if(e==null)throw new Error(t);{let i=new Error(e[2]);throw i.name=e[1],i}}function Ve(t){kt("ReadOnlyProperty: property "+Zi(t)+" must not be set")}function Gg(t){return t instanceof Ns}me(Gg,Le,"SNS visual");const J_=me(Gg,rt,"SNS visual");function Fr(t){return t instanceof Ts}me(Fr,Le,"SNS folder");const K_=me(Fr,rt,"SNS folder");function $o(t){return t instanceof lf}me($o,Le,"SNS project");me($o,rt,"SNS project");function Yn(t){return t instanceof cf}const Q_=me(Yn,Le,"SNS board");me(Yn,rt,"SNS board");function Mi(t){return t instanceof hf}me(Mi,Le,"SNS sticker");const Yg=me(Mi,rt,"SNS sticker");function Zg(t){return Zt(t)}const eS=me(Zg,Le,"unique SNS id"),qg=eS,Yl=me(Zg,rt,"unique SNS id"),tS=/^[a-z$_][a-z$_0-9]*$/i;function Jg(t){return zt(t,tS)}me(Jg,Le,"note stickers identifier");const Kg=me(Jg,rt,"note stickers identifier");function ko(t){return Zt(t)}const iS=me(ko,Le,"SNS name"),Zn=me(ko,rt,"SNS name");function Ii(t){return Pr(t)}me(Ii,Le,"sticker coordinate");const Zl=me(Ii,rt,"sticker coordinate");function Pi(t){return Pr(t)&&t>=0}const nn=me(Pi,Le,"sticker dimension"),ql=me(Pi,rt,"sticker dimension");function Qg(t){return ks(t)&&Ii(t.x)&&Ii(t.y)}me(Qg,Le,"sticker position");const rS=me(Qg,rt,"sticker position");function ef(t){return ks(t)&&Pi(t.Width)&&Pi(t.Height)}me(ef,Le,"sticker size");const nS=me(ef,rt,"sticker size");function tf(t){return ks(t)&&Ii(t.x)&&Pi(t.Width)&&Ii(t.y)&&Pi(t.Height)}me(tf,Le,"sticker geometry");const oS=me(tf,rt,"sticker geometry");function rf(t){return zr(t)&&Fg(t.Type,q_)&&$s(t.Message)}const Jl=me(rf,Le,"error descriptor");me(rf,rt,"error descriptor");function nf(t){return zr(t)}me(nf,Le,"serializable object");const Vs=me(nf,rt,"serializable object"),rr={x:20,y:20,Width:80,Height:60},aS=10,sS=void 0,lS=10,uS=void 0,dS=10,cS=10;function hS(t,e){return bo(t)?t:e}function Ye(t,e){return t==null?void 0:bo(t)?t:e}function Io(t,e){return pr(t)?t:e}function ii(t,e){return pr(t)?t:e}function qi(t,e,i=-1/0,r=1/0,o=!1,n=!1){return s_(t,i,r,o,n)?t:e}function vt(t,e){return ws(t)?t:e}function mt(t,e,i){return zt(t,i)?t:e}function Rr(t,e){return $s(t)?t:e}function _t(t,e){return(Zt(t)?t:e).replace(/[\f\r\n\v\u0085\u2028\u2029].*$/,"...")}function st(t,e){const i=Zt(t)?t:e;return i==null?void 0:i.replace(/[\f\r\n\v\u0085\u2028\u2029].*$/,"...")}function of(t,e,i){return jr(t,i)?t:e}function Pt(t,e,i){return jr(t,i)?t:e}function Cs(t,e){return vo(t)?t:e}function pS(t,e){return vo(t)?t:e}function gS(t,e){return Ug(t)?t:e}function fS(t,e){return jg(t)?t:e}function gr(t,e){return Is(t)?t:e}function af(){return wo`<div class="SNS DefaultSticker" style=${Po(this)}/>`}function qn(){const t=this.Error;return t==null?af.call(this):wo`<div class="SNS DefaultSticker">
      <div class="SNS ErrorIndicator" onClick=${()=>this.Project.showError(this,t)}/>
    </div>`}const mS=N_(E_.nolookalikesSafe,21),Jn=new WeakMap;function xS(t,e){let i=Jn.get(t);i==null&&Jn.set(t,i=Object.create(null));const r=e.Id;r in i&&kt("NonUniqueId: the id of the given folder ("+Zi(r)+") has already been registered"),i[r]=e}function _S(t){const e=t.Project;let i=Jn.get(e);i!=null&&delete i[t.Id]}function Kl(t,e){let i=Jn.get(t);if(i!=null)return i[e]}const Kn=new WeakMap;function SS(t,e){let i=Kn.get(t);i==null&&Kn.set(t,i=Object.create(null));const r=e.Id;r in i&&kt("NonUniqueId: the id of the given sticker ("+Zi(r)+") has already been registered"),i[r]=e}function bS(t){const e=t.Project;let i=Kn.get(e);i!=null&&delete i[t.Id]}function yS(t,e){let i=Kn.get(t);if(i!=null)return i[e]}function Qn(t){Vs("serialization",t),delete t.Id,El(t.BoardList)&&t.BoardList.forEach(e=>Qn(e)),El(t.StickerList)&&t.StickerList.forEach(e=>Qn(e))}const Da=new WeakMap;function sf(t,e){let i=Da.get(t);i==null&&Da.set(t,i=[]),i.push(e)}function Bs(t){let e=Da.get(t);e!=null&&e.forEach(i=>{Y_(i)})}const Ql=Object.create(null),Fa=Object.create(null),vS=Object.create(null);function Q(t,e,i,r,o,n){Ba("behavior group label",t),Ba("behavior label",e),Kg("behavior name",i),S_("sticker template",r),$n("behavior function",o);const s=t.toLowerCase().replace(/\s/g,""),l=i.toLowerCase(),u={...r};u.activeScript==null?u.activeScript=`useBehavior('${i}')
`:u.activeScript=u.activeScript.replace(/^\s*\n/,"").replace(/\n\s*$/,`
`),l in Fa&&kt("BehaviorExists: behavior "+Zi(i)+" was already registered");let a=Ql[s];a==null&&(Ql[s]=a={GroupLabel:t,BehaviorSet:Object.create(null)}),a.BehaviorSet[i]={Label:e,Executable:o,Template:u},o!=null&&(vS[l]=u,Fa[l]=o),n!=null&&Gn.innerHTML.indexOf(n.trim())<0&&(Gn.innerHTML+=n)}function wS(t){Yg("visual",this),Kg("behavior name",t);const e=Fa[t.toLowerCase()];e==null&&kt("NoSuchBehavior: no behavior called "+Zi(t)+" found");const i=s=>{Vr("reactive function",s),sf(this,Rg(s))},r=this.onRender.bind(this),o=this.onMount.bind(this),n=this.onUnmount.bind(this);e.call(this,this,this,wo,i,r,o,n)}Q("basic Views","plain Sticker","plainSticker",{Geometry:{x:20,y:20,Width:100,Height:80},activeScript:'onRender(() => html`<div class="SNS Placeholder"></div>`)'},(t,e,i,r,o,n,s)=>{o(()=>i`<div class="SNS plainSticker"></div>`)},`
/**** plain Stickers ****/

  .SNS.plainSticker {
    border:dotted 1px gray;
  }
  `);Q("basic Views","sticky Note","stickyNote",{Geometry:{x:20,y:20,Width:100,Height:80},minWidth:20,minHeight:10},(t,e,i,r,o,n,s)=>{e.Renderer=function(l){const{builtinSelection:u,builtinDragging:a}=l,c=Rr(e.Value,""),d=p=>{if(p.key==="Tab"){p.stopPropagation(),p.preventDefault();const f=p.target,{value:m,selectionStart:x,selectionEnd:b}=f;return f.value=m.slice(0,x)+"	"+m.slice(b),f.selectionStart=f.selectionEnd=x+1,!1}},g=p=>{e.Value=p.target.value};return i`<div class="SNS NoteSticker" style=${Po(t)}
        onPointerDown=${u}
      >
        <div class="Header builtinDraggable"
          onPointerDown=${a} onPointerMove=${a}
          onPointerUp=${a} onPointerCancel=${a}
        />
        <textarea class="Editor" value=${c} tabindex=-1
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
  `);Q("basic Views","Placeholder","Placeholder",{Geometry:{x:20,y:20,Width:100,Height:80}},(t,e,i,r,o,n,s)=>{e.Renderer=function(l){const{builtinDragging:u}=l,{Width:a,Height:c}=e.Geometry;return i`<div class="SNS Placeholder builtinDraggable" style="
        line-height:${c}px;
      "
        onPointerDown=${u} onPointerMove=${u}
        onPointerUp=${u} onPointerCancel=${u}
      >${a}x${c}</div>`}},`
/**** simple Placeholders ****/

  .SNS.Placeholder {
    border:dotted 1px gray;
    text-align:center;
  }
  `);Q("basic Views","Title","Title",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"Title"},(t,e,i,r,o,n,s)=>{o(()=>{const l=_t(e.Value,"");return i`<div class="SNS Title">${l}</div>`})},`
/**** Title Views ****/

  .SNS.Sticker > .SNS.Title {
    font-size:22px; font-weight:bold; line-height:32px;
  }
  `);Q("basic Views","Subtitle","Subtitle",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"Subtitle"},(t,e,i,r,o,n,s)=>{o(()=>{const l=_t(e.Value,"");return i`<div class="SNS Subtitle">${l}</div>`})},`
/**** Subtitle Views ****/

  .SNS.Sticker > .SNS.Subtitle {
    font-size:18px; font-weight:bold; line-height:27px;
  }
  `);Q("basic Views","Label","Label",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"Label"},(t,e,i,r,o,n,s)=>{o(()=>{const l=_t(e.Value,"");return i`<div class="SNS Label">${l}</div>`})},`
/**** Label Views ****/

  .SNS.Sticker > .SNS.Label {
    font-size:14px; font-weight:bold; line-height:21px;
  }
  `);Q("basic Views","Text","Text",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"Text"},(t,e,i,r,o,n,s)=>{o(()=>{const l=Rr(e.Value,"");return i`<div class="SNS Text">${l}</div>`})},`
/**** Text Views ****/

  .SNS.Sticker > .SNS.Text {
    font-size:14px; font-weight:normal; line-height:21px;
  }
  `);Q("basic Views","FinePrint","FinePrint",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"FinePrint"},(t,e,i,r,o,n,s)=>{o(()=>{const l=Rr(e.Value,"");return i`<div class="SNS FinePrint">${l}</div>`})},`
/**** FinePrint Views ****/

  .SNS.Sticker > .SNS.FinePrint {
    font-size:12px; font-weight:normal; line-height:18px;
  }
  `);Q("basic Views","HTML View","HTMLView",{Geometry:{x:20,y:20,Width:100,Height:80},Value:"<b><u>HTML View</u></b>",activeScript:`
  useBehavior('HTMLView')
//my.Value = 'HTML Markup'
`},(t,e,i,r,o,n,s)=>{e.Renderer=()=>i`<div class="SNS HTMLView"
      dangerouslySetInnerHTML=${{__html:Rr(e.Value,"")}}
    />`});Q("basic Views","Image View","ImageView",{Geometry:{x:20,y:20,Width:90,Height:90},Value:"https://www.rozek.de/Bangle.js/Mandelbrot_240x240.png",activeScript:`
  useBehavior('ImageView')
//my.Value = 'Image URL'
`},(t,e,i,r,o,n,s)=>{e.Renderer=()=>i`<img class="SNS ImageView" src=${gr(e.Value,"")}/>`},`
/**** Image View ****/

  .SNS.Sticker > .SNS.ImageView {
    object-fit:contain; object-position:center;
  }
  `);Q("basic Views","SVG View","SVGView",{Geometry:{x:20,y:20,Width:90,Height:90},activeScript:`
  useBehavior('SVGView')
//my.Value = 'SVG Document'
`},(t,e,i,r,o,n,s)=>{e.Renderer=()=>{const l="data:image/svg+xml;base64,"+btoa(Rr(e.Value,""));return i`<div class="SNS SVGView" src=${l}/>`}},`
/**** SVG View ****/

  .SNS.Sticker > .SNS.SVGView {
    object-fit:contain; object-position:center;
  }
  `);Q("basic Views","2D Canvas View","Canvas2DView");Q("basic Views","Web View","WebView",{Geometry:{x:20,y:20,Width:640,Height:480},minWidth:120,minHeight:80,Value:"https://www.rozek.de",activeScript:`
  useBehavior('WebView')
//my.Value = 'Document URL'
`},(t,e,i,r,o,n,s)=>{e.Renderer=()=>i`<iframe class="SNS WebView"
      src=${gr(e.Value,"")}
    />`});Q("basic Views","Badge","Badge",{Geometry:{x:20,y:20,Width:30,Height:30},Value:1,ForegroundColor:"red",BackgroundColor:"white"},(t,e,i,r,o,n,s)=>{e.Renderer=()=>{const l=pr(e.Value)?""+e.Value:_t(e.Value,""),u=Math.round(Math.min(e.Width,e.Height/2));return i`<div class="SNS Badge" style="
        border-color:${e.ForegroundColor}; border-radius:${u}px;
        line-height:${e.Height-4}px;
      ">${_t(l,"")}</>`}},`
/**** Badge ****/

  .SNS.Sticker > .SNS.Badge {
    font-size:18px; font-weight:bold; text-align:center;
    border:solid 2px black;
  }
  `);Q("basic Views","Icon","Icon",{Geometry:{x:20,y:20,Width:24,Height:24},Value:null,activeScript:`
  useBehavior('Icon')
//my.Value = 'icon image url'
//onClick(() => ...)
`},(t,e,i,r,o,n,s)=>{function l(u){e.Enabling!=!1&&(e.Value=u.target.value,typeof e._onClick=="function"&&e._onClick(u))}e.Renderer=()=>{const u=gr(e.Value,"/img/pencil.png"),a=Cs(e.Color,"black");return i`<div class="SNS Icon" style="
        -webkit-mask-image:url(${u}); mask-image:url(${u});
        background-color:${a};
      " disabled=${e.Enabling==!1} onClick=${l}
      />`}},`
/**** Icon ****/

  .SNS.Sticker > .SNS.Icon {
    -webkit-mask-size:contain;           mask-size:contain;
    -webkit-mask-position:center center; mask-position:center center;
  }
  `);Q("basic Views","horizontal Separator","horizontalSeparator",{Geometry:{x:20,y:20,Width:80,Height:10},minWidth:10},(t,e,i,r,o,n,s)=>{o(()=>i`<div class="SNS horizontalSeparator"></div>`)},`
/**** horizontal Separator ****/

  .SNS.horizontalSeparator {
    border:none; border-top:solid 1px black;
  }
  `);Q("basic Views","vertical Separator","verticalSeparator",{Geometry:{x:20,y:20,Width:10,Height:40},minHeight:10},(t,e,i,r,o,n,s)=>{o(()=>i`<div class="SNS verticalSeparator"></div>`)},`
/**** vertical Separator ****/

  .SNS.verticalSeparator {
    border:none; border-left:solid 1px black;
  }
  `);Q("basic Views","Tab","Tab");Q("basic Views","Icon Tab","IconTab");Q("native Controls","Button","Button",{Geometry:{x:20,y:20,Width:80,Height:30},Value:"Button",activeScript:`
  useBehavior('Button')
//my.Value = 'Label'
//onClick(() => ...)
`},(t,e,i,r,o,n,s)=>{function l(u){if(e.Enabling==!1)return De(u);typeof e._onClick=="function"&&e._onClick(u)}e.Renderer=()=>{const u=_t(e.Label||e.Value,"");return i`<button class="SNS Button" style="
        line-height:${e.LineHeight||e.Height}px;
      " disabled=${e.Enabling==!1} onClick=${l}
      >${u}</>`}},`
/**** Button ****/

  .SNS.Sticker > .SNS.Button {
    border:solid 1px black; border-radius:4px;
    background:white;
    font-weight:bold; color:black;
    text-align.center;
  }
  `);Q("native Controls","Checkbox","Checkbox",{Geometry:{x:20,y:20,Width:20,Height:20},Value:null,activeScript:`
  useBehavior('Checkbox')
//my.Value = null/true/false
//onClick(() => ...)
`},(t,e,i,r,o,n,s)=>{function l(u){if(e.Enabling==!1)return De(u);e.Value=u.target.checked,typeof e._onClick=="function"&&e._onClick(u)}e.Renderer=()=>{const u=Ye(e.Value),a=u==!0,c=u==null;return i`<input type="checkbox" class="SNS Checkbox"
        checked=${a} indeterminate=${c}
        disabled=${e.Enabling==!1} onClick=${l}
      />`}});Q("native Controls","Radiobutton","Radiobutton",{Geometry:{x:20,y:20,Width:20,Height:20},Value:null,activeScript:`
  useBehavior('Radiobutton')
//my.Value = true/false
//onClick(() => ...)
`},(t,e,i,r,o,n,s)=>{function l(u){if(e.Enabling==!1)return De(u);e.Value=u.target.checked,typeof e._onClick=="function"&&e._onClick(u)}e.Renderer=()=>{const u=hS(e.Value,!1);return i`<input type="radio" class="SNS Radiobutton"
        checked=${u==!0}
        disabled=${e.Enabling==!1} onClick=${l}
      />`}});Q("native Controls","Gauge","Gauge",{Geometry:{x:20,y:20,Width:100,Height:20},Value:0,activeScript:`
  useBehavior('Gauge')
//my.Value      = 0
//my.Minimum    = 0
//my.lowerBound = 0
//my.Optimum    = undefined
//my.upperBound = 1
//my.Maximum    = 1
`},(t,e,i,r,o,n,s)=>{e.Renderer=()=>{const l=Io(Or(e.Value)?parseFloat(e.Value):e.Value,0),u=ii(e.Minimum),a=ii(e.lowerBound),c=ii(e.Optimum),d=ii(e.upperBound),g=ii(e.Maximum);return i`<meter class="SNS Gauge" value=${l}
        min=${u} low=${a} opt=${c}
        high=${d} max=${g}
      />`}});Q("native Controls","Progressbar","Progressbar",{Geometry:{x:20,y:20,Width:100,Height:10},Value:0,activeScript:`
  useBehavior('Progressbar')
//my.Value   = 0
//my.Maximum = 1
`},(t,e,i,r,o,n,s)=>{e.Renderer=()=>{const l=Io(Or(e.Value)?parseFloat(e.Value):e.Value,0),u=ii(e.Maximum);return i`<progress class="SNS Progressbar" value=${l} max=${u}/>`}});const $S=/^\s*([+-]?(\d+([.]\d+)?|[.]\d+)([eE][+-]?\d+)?|\d*[.](?:\d*))(?:\s*:\s*([^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]+))?$/;Q("native Controls","Slider","Slider",{Geometry:{x:20,y:20,Width:100,Height:20},Value:null,activeScript:`
  useBehavior('Slider')
//my.Value     = 0
//my.Minimum   = undefined
//my.Stepping  = undefined
//my.Maximum   = undefined
//my.Hashmarks = [0:'zero',1,2]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow=0;function l(c){return zt(c,$S)||pr(c)}function u(c){if(e.Enabling==!1)return De(c);e.Value=parseFloat(c.target.value),typeof e._onInput=="function"&&e._onInput(c)}function a(){t.rerender()}e.Renderer=()=>{let c=Io(Or(e.Value)?parseFloat(e.Value):e.Value,0);const d=ii(e.Minimum),g=qi(e.Stepping,void 0,0),p=ii(e.Maximum),f=Pt(e.Hashmarks,void 0,l);document.activeElement===e.View?c=e.ValueToShow:e.ValueToShow=c;let m="",x;return f!=null&&f.length>0&&(x=e.Id+"-Hashmarks",m=i`\n<datalist id=${x}>
          ${f.map(b=>{b=""+b;const P=b.replace(/:.*$/,"").trim(),C=b.replace(/^[^:]+:/,"").trim();return i`<option value=${P}>${C}</option>`})}
        </datalist>`),i`<input type="range" class="SNS Slider"
        value=${c} min=${d} max=${p} step=${g}
        disabled=${e.Enabling==!1} onInput=${u} onBlur=${a}
        list=${x}
      />${m}`}});Q("native Controls","Textline Input","TextlineInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
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
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return De(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=_t(e.Value,"");const c=st(e.Placeholder),d=Ye(e.readonly),g=vt(e.minLength),p=vt(e.maxLength),f=st(e.Pattern),m=Ye(e.SpellChecking),x=Pt(e.Suggestions,void 0,Zt);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let b="",P;return x!=null&&x.length>0&&(P=e.Id+"-Suggestions",b=i`<datalist id=${P}>
          ${x.map(C=>i`<option value=${C}></option>`)}
        </datalist>`),i`<input type="text" class="SNS TextlineInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${c}
        pattern=${f} spellcheck=${m}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${P}
      />${b}`}},`
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
  `);Q("native Controls","Password Input","PasswordInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('PasswordInput')
//my.Value       = ''
//my.Placeholder = undefined
//my.readonly    = false
//my.minLength   = 0
//my.maxLength   = undefined
//my.Pattern     = '.*'
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return De(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=_t(e.Value,"");const c=st(e.Placeholder),d=Ye(e.readonly),g=vt(e.minLength),p=vt(e.maxLength),f=st(e.Pattern);return document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a,i`<input type="password" class="SNS PasswordInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${c}
        pattern=${f}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
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
  `);Q("native Controls","Number Input","NumberInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('NumberInput')
//my.Value       = 0
//my.Placeholder = undefined
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = [0,...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow=0;function l(a){if(e.Enabling==!1)return De(a);e.Value=parseFloat(a.target.value),typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=Io(Or(e.Value)?parseFloat(e.Value):e.Value,0);const c=st(e.Placeholder),d=Ye(e.readonly),g=ii(e.Minimum),p=qi(e.Stepping,void 0,0),f=ii(e.Maximum),m=Pt(e.Suggestions,void 0,pr);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let x="",b;return m!=null&&m.length>0&&(b=e.Id+"-Suggestions",x=i`<datalist id=${b}>
          ${m.map(P=>i`<option value=${P}></option>`)}
        </datalist>`),i`<input type="number" class="SNS NumberInput"
        value=${a} min=${g} max=${f} step=${p}
        readonly=${d} placeholder=${c}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${b}
      />${x}`}},`
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
  `);Q("native Controls","Phone Number Input","PhoneNumberInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('PhoneNumberInput')
//my.Value         = ''
//my.Placeholder   = undefined
//my.readonly      = false
//my.minLength     = 0
//my.maxLength     = undefined
//my.Pattern       = '.*'
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return De(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=fS(e.Value,"");const c=st(e.Placeholder),d=Ye(e.readonly),g=vt(e.minLength),p=vt(e.maxLength),f=st(e.Pattern),m=Pt(e.Suggestions,void 0,jg);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let x="",b;return m!=null&&m.length>0&&(b=e.Id+"-Suggestions",x=i`<datalist id=${b}>
          ${m.map(P=>i`<option value=${P}></option>`)}
        </datalist>`),i`<input type="tel" class="SNS PhoneNumberInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${c}
        pattern=${f}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${b}
      />${x}`}},`
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
  `);Q("native Controls","EMail Address Input","EMailAddressInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('EMailAddressInput')
//my.Value       = ''
//my.Placeholder = undefined
//my.readonly    = false
//my.minLength   = 0
//my.maxLength   = undefined
//my.Pattern     = '.*'
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return De(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=gS(e.Value,"");const c=st(e.Placeholder),d=Ye(e.readonly),g=vt(e.minLength),p=vt(e.maxLength),f=st(e.Pattern),m=Pt(e.Suggestions,void 0,Ug);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let x="",b;return m!=null&&m.length>0&&(b=e.Id+"-Suggestions",x=i`<datalist id=${b}>
          ${m.map(P=>i`<option value=${P}></option>`)}
        </datalist>`),i`<input type="email" class="SNS EMailAddressInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${c}
        pattern=${f}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${b}
      />${x}`}},`
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
  `);Q("native Controls","URL Input","URLInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('URLInput')
//my.Value       = ''
//my.Placeholder = undefined
//my.readonly    = false
//my.minLength   = 0
//my.maxLength   = undefined
//my.Pattern     = '.*'
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return De(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=gr(e.Value,"");const c=st(e.Placeholder),d=Ye(e.readonly),g=vt(e.minLength),p=vt(e.maxLength),f=st(e.Pattern),m=Pt(e.Suggestions,void 0,Is);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let x="",b;return m!=null&&m.length>0&&(b=e.Id+"-Suggestions",x=i`<datalist id=${b}>
          ${m.map(P=>i`<option value=${P}></option>`)}
        </datalist>`),i`<input type="url" class="SNS URLInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${c}
        pattern=${f}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${b}
      />${x}`}},`
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
  `);const kS="\\d{2}:\\d{2}",In=/\d{2}:\d{2}/;function IS(t){return zt(t,In)}Q("native Controls","Time Input","TimeInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('TimeInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return De(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=mt(e.Value,void 0,In);const c=Ye(e.readonly),d=mt(e.Minimum,void 0,In),g=qi(e.Stepping,void 0,0),p=mt(e.Maximum,void 0,In),f=Pt(e.Suggestions,void 0,IS);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let m="",x;return f!=null&&f.length>0&&(x=e.Id+"-Suggestions",m=i`<datalist id=${x}>
          ${f.map(b=>i`<option value=${b}></option>`)}
        </datalist>`),i`<input type="time" class="SNS TimeInput"
        value=${a} min=${d} max=${p} step=${g}
        readonly=${c} pattern=${kS}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${x}
      />${m}`}},`
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
  `);const PS="\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}",Pn=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/;function VS(t){return zt(t,Pn)}Q("native Controls","Date and Time Input","DateTimeInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('DateTimeInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return De(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=mt(e.Value,void 0,Pn);const c=Ye(e.readonly),d=mt(e.Minimum,void 0,Pn),g=qi(e.Stepping,void 0,0),p=mt(e.Maximum,void 0,Pn),f=Pt(e.Suggestions,void 0,VS);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let m="",x;return f!=null&&f.length>0&&(x=e.Id+"-Suggestions",m=i`<datalist id=${x}>
          ${f.map(b=>i`<option value=${b}></option>`)}
        </datalist>`),i`<input type="datetime-local" class="SNS DateTimeInput"
        value=${a} min=${d} max=${p} step=${g}
        readonly=${c} pattern=${PS}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${x}
      />${m}`}},`
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
  `);const CS="\\d{4}-\\d{2}-\\d{2}",Vn=/\d{4}-\d{2}-\d{2}/;function BS(t){return zt(t,Vn)}Q("native Controls","Date Input","DateInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('DateInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return De(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=mt(e.Value,void 0,Vn);const c=Ye(e.readonly),d=mt(e.Minimum,void 0,Vn),g=qi(e.Stepping,void 0,0),p=mt(e.Maximum,void 0,Vn),f=Pt(e.Suggestions,void 0,BS);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let m="",x;return f!=null&&f.length>0&&(x=e.Id+"-Suggestions",m=i`<datalist id=${x}>
          ${f.map(b=>i`<option value=${b}></option>`)}
        </datalist>`),i`<input type="date" class="SNS DateInput"
        value=${a} min=${d} max=${p} step=${g}
        readonly=${c} pattern=${CS}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${x}
      />${m}`}},`
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
  `);const WS="\\d{4}-W\\d{2}",Cn=/\d{4}-W\d{2}/;function NS(t){return zt(t,Cn)}Q("native Controls","Week Input","WeekInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('WeekInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return De(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=mt(e.Value,void 0,Cn);const c=Ye(e.readonly),d=mt(e.Minimum,void 0,Cn),g=qi(e.Stepping,void 0,0),p=mt(e.Maximum,void 0,Cn),f=Pt(e.Suggestions,void 0,NS);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let m="",x;return f!=null&&f.length>0&&(x=e.Id+"-Suggestions",m=i`<datalist id=${x}>
          ${f.map(b=>i`<option value=${b}></option>`)}
        </datalist>`),i`<input type="week" class="SNS WeekInput"
        value=${a} min=${d} max=${p} step=${g}
        readonly=${c} pattern=${WS}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${x}
      />${m}`}},`
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
  `);const TS="\\d{4}-\\d{2}",Bn=/\d{4}-\d{2}/;function DS(t){return zt(t,Bn)}Q("native Controls","Month Input","MonthInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('MonthInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return De(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=mt(e.Value,void 0,Bn);const c=Ye(e.readonly),d=mt(e.Minimum,void 0,Bn),g=qi(e.Stepping,void 0,0),p=mt(e.Maximum,void 0,Bn),f=Pt(e.Suggestions,void 0,DS);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let m="",x;return f!=null&&f.length>0&&(x=e.Id+"-Suggestions",m=i`<datalist id=${x}>
          ${f.map(b=>i`<option value=${b}></option>`)}
        </datalist>`),i`<input type="month" class="SNS MonthInput"
        value=${a} min=${d} max=${p} step=${g}
        readonly=${c} pattern=${TS}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${x}
      />${m}`}},`
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
  `);Q("native Controls","File Input","FileInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('FileInput')
//my.Value           = ''
//my.Placeholder     = undefined
//my.acceptableTypes = undefined
//my.multiple        = false
//onInput(() => ...)
//onDrop(() => ...)
`},(t,e,i,r,o,n,s)=>{function l(d){if(e.Enabling==!1)return De(d);e.Value=d.target.value,typeof e._onInput=="function"&&e._onInput(d,d.files)}function u(d){return De(d)}function a(d){return De(d)}function c(d){Ws(d),e.Enabling!=!1&&(e.Value=d.target.value,typeof e._onDrop=="function"&&e._onDrop(d,d.dataTransfer.files))}e.Renderer=()=>{let d=_t(e.Value,"").trim();d=d.replace("C:\\fakepath\\","");const g=_t(e.Placeholder,"").trim(),p=st(e.acceptableTypes),f=Ye(e.multiple);return i`<label class="SNS FileInput"
        onDragEnter=${u} onDragOver=${a} onDrop=${c}
      >
        <input type="file" style="display:none"
          multiple=${f} accept=${p}
          onInput=${l}
        />
        ${d===""?g===""?"":i`<span style="line-height:${e.Height}px">${g}</span>`:i`<span style="line-height:${e.Height}px">${d}</span>`}
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
  `);Q("native Controls","Pseudo File Input","PseudoFileInput",{Geometry:{x:20,y:20,Width:24,Height:24},Value:null,activeScript:`
  useBehavior('PseudoFileInput')
//my.Value           = ''
//my.Icon            = 'icon image url'
//my.acceptableTypes = undefined
//my.multiple        = false
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{function l(u){if(e.Enabling==!1)return De(u);e.Value=u.target.value,typeof e._onInput=="function"&&e._onInput(u,u.files)}e.Renderer=()=>{const u=gr(e.Icon,"/img/arrow-up-from-bracket.png"),a=Cs(e.Color,"black"),c=st(e.acceptableTypes),d=Ye(e.multiple);return i`<label class="SNS PseudoFileInput">
        <div style="
          -webkit-mask-image:url(${u}); mask-image:url(${u});
          background-color:${a};
        "></div>
        <input type="file" style="display:none"
          multiple=${d} accept=${c}
          onInput=${l}
        />
      </label>`}},`
/**** PseudoFileInput ****/

  .SNS.Sticker > .SNS.PseudoFileInput > div {
    display:block; position:absolute;
    left:0px; top:0px; right:0px; bottom:0px;
    -webkit-mask-size:contain;           mask-size:contain;
    -webkit-mask-position:center center; mask-position:center center;
  }
  `);Q("native Controls","File Drop Area","FileDropArea",{Geometry:{x:20,y:20,Width:100,Height:80},Value:null,activeScript:`
  useBehavior('FileDropArea')
//my.Value           = ''
//my.Placeholder     = undefined
//my.acceptableTypes = undefined
//my.multiple        = false
//onInput(() => ...)
//onDrop(() => ...)
`},(t,e,i,r,o,n,s)=>{function l(d){if(e.Enabling==!1)return De(d);e.Value=d.target.value,typeof e._onInput=="function"&&e._onInput(d,d.files)}function u(d){return De(d)}function a(d){return De(d)}function c(d){Ws(d),e.Enabling!=!1&&(e.Value=d.target.value,typeof e._onDrop=="function"&&e._onDrop(d,d.dataTransfer.files))}e.Renderer=()=>{const d=_t(e.Placeholder,"").trim(),g=st(e.acceptableTypes),p=Ye(e.multiple);return i`<label class="SNS FileDropArea"
        onDragEnter=${u} onDragOver=${a} onDrop=${c}>
        <input type="file"
          multiple=${p} accept=${g}
          onInput=${l}
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
  `);Q("native Controls","Search Input","SearchInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
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
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return De(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=_t(e.Value,"");const c=st(e.Placeholder),d=Ye(e.readonly),g=vt(e.minLength),p=vt(e.maxLength),f=st(e.Pattern),m=Ye(e.SpellChecking),x=Pt(e.Suggestions,void 0,Zt);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let b="",P;return x!=null&&x.length>0&&(P=e.Id+"-Suggestions",b=i`<datalist id=${P}>
          ${x.map(C=>i`<option value=${C}></option>`)}
        </datalist>`),i`<input type="search" class="SNS SearchInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${c}
        pattern=${f} spellcheck=${m}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${P}
      />${b}`}},`
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
  `);Q("native Controls","Color Input","ColorInput",{Geometry:{x:20,y:20,Width:40,Height:30},Value:null,activeScript:`
  useBehavior('ColorInput')
//my.Value       = ''
//my.Suggestions = ['...',...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return De(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=pS(e.Value);const c=Pt(e.Suggestions,void 0,vo);document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a;let d="",g;return c!=null&&c.length>0&&(g=e.Id+"-Suggestions",d=i`<datalist id=${g}>
          ${c.map(p=>i`<option value=${p}></option>`)}
        </datalist>`),i`<input type="color" class="SNS ColorInput"
        value=${a}
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
        list=${g}
      />${d}`}},`
/**** ColorInput ****/

  .SNS.Sticker > .SNS.ColorInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }
  `);Q("native Controls","DropDown","DropDown",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('DropDown')
//my.Value   = '...'
//my.Options = ['...',...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return De(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=_t(e.Value,"");const c=of(e.Options,[],Zt);return document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a,i`<select class="SNS DropDown"
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
      >${c.map(d=>{const g=d.replace(/:.*$/,"").trim(),p=d.replace(/^[^:]+:/,"").trim();return i`<option value=${g} selected=${g===a}>
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
  `);Q("native Controls","Pseudo DropDown","PseudoDropDown",{Geometry:{x:20,y:20,Width:24,Height:24},Value:null,activeScript:`
  useBehavior('PseudoDropDown')
//my.Value   = '...'
//my.Icon    = 'icon image url'
//my.Options = ['...',...]
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return De(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=_t(e.Value,"");const c=gr(e.Icon,"/img/menu.png"),d=Cs(e.Color,"black"),g=of(e.Options,[],Zt);return document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a,i`<div class="SNS PseudoDropDown">
        <div style="
          -webkit-mask-image:url(${c}); mask-image:url(${c});
          background-color:${d};
        "></div>
        <select disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}>
          ${g.map(p=>{const f=p.replace(/:.*\$/,"").trim(),m=p.replace(/^[^:]+:/,"").trim();return i`<option value=${f} selected=${f===a}>
              ${m}
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
  `);Q("native Controls","Text Input","TextInput",{Geometry:{x:20,y:20,Width:100,Height:30},Value:null,activeScript:`
  useBehavior('TextInput')
//my.Value         = ''
//my.Placeholder   = undefined
//my.readonly      = false
//my.minLength     = 0
//my.maxLength     = undefined
//my.LineWrapping  = false
//my.SpellChecking = undefined
//onInput(() => ...)
`},(t,e,i,r,o,n,s)=>{e.ValueToShow="";function l(a){if(e.Enabling==!1)return De(a);e.Value=a.target.value,typeof e._onInput=="function"&&e._onInput(a)}function u(){t.rerender()}e.Renderer=()=>{let a=_t(e.Value,"");const c=st(e.Placeholder),d=Ye(e.readonly),g=vt(e.minLength),p=vt(e.maxLength),f=Ye(e.LineWrapping),m=Ye(e.SpellChecking);return document.activeElement===e.View?a=e.ValueToShow:e.ValueToShow=a,i`<textarea class="SNS TextInput"
        value=${a} minlength=${g} maxlength=${p}
        readonly=${d} placeholder=${c}
        spellcheck=${m} style="resize:none; ${f==!0?"white-space:pre; overflow-wrap:break-word; hyphens:auto":void 0}"
        disabled=${e.Enabling==!1} onInput=${l} onBlur=${u}
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
  `);Q("basic Shapes","Line","Line");Q("basic Shapes","Polyline","Polyline");Q("basic Shapes","Arc","Arc");Q("basic Shapes","quadratic Bezier","quadraticBezier");Q("basic Shapes","cubic Bezier","cubicBezier");Q("basic Shapes","Box","Box");Q("basic Shapes","rounded Box","roundedBox");Q("basic Shapes","Oval","Oval");Q("basic Shapes","Chord","Chord");Q("basic Shapes","Pie","Pie");Q("basic Shapes","Polygon","Polygon");Q("basic Shapes","regular Polygon","regularPolygon");Q("straight Arrows","nw","straightArrow_nw",{Geometry:{x:20,y:20,Width:40,Height:40}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M ${l},${u}, L 0,0"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);Q("straight Arrows","n","straightArrow_n",{Geometry:{x:20,y:20,Width:40,Height:40}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M ${l/2},${u}, L ${l/2},0"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);Q("straight Arrows","ne","straightArrow_ne",{Geometry:{x:20,y:20,Width:40,Height:40}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M 0,${u}, L ${l},0"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);Q("straight Arrows","e","straightArrow_e",{Geometry:{x:20,y:20,Width:40,Height:40}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M 0,${u/2}, L ${l},${u/2}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);Q("straight Arrows","se","straightArrow_se",{Geometry:{x:20,y:20,Width:40,Height:40}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M 0,0, L ${l},${u}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);Q("straight Arrows","s","straightArrow_s",{Geometry:{x:20,y:20,Width:40,Height:40}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M ${l/2},0, L ${l/2},${u}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);Q("straight Arrows","sw","straightArrow_sw",{Geometry:{x:20,y:20,Width:40,Height:40}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M ${l},0, L 0,${u}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);Q("straight Arrows","w","straightArrow_w",{Geometry:{x:20,y:20,Width:40,Height:40}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M ${l},${u/2}, L 0,${u/2}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);Q("curved Arrows","cw n","curvedArrow_cw_n",{Geometry:{x:20,y:20,Width:50,Height:60}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M ${l},${u-6}, A ${l-6} ${u-18} 0 0 1 6 12"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);Q("curved Arrows","cw e","curvedArrow_cw_e",{Geometry:{x:20,y:20,Width:60,Height:50}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M 6,${u}, A ${l-18} ${u-6} 0 0 1 ${l-12} 6"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);Q("curved Arrows","cw s","curvedArrow_cw_s",{Geometry:{x:20,y:20,Width:50,Height:60}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M 0,6, A ${l-6} ${u-18} 0 0 1 ${l-6} ${u-12}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);Q("curved Arrows","cw w","curvedArrow_cw_w",{Geometry:{x:20,y:20,Width:60,Height:50}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M ${l-6},0, A ${l-18} ${u-6} 0 0 1 12 ${u-6}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);Q("curved Arrows","ccw n","curvedArrow_ccw_n",{Geometry:{x:20,y:20,Width:50,Height:60}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M 0,${u-6}, A ${l-6} ${u-18} 0 0 0 ${l-6} 12"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);Q("curved Arrows","ccw e","curvedArrow_ccw_e",{Geometry:{x:20,y:20,Width:60,Height:50}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M 6,0, A ${l-18} ${u-6} 0 0 0 ${l-12} ${u-6}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);Q("curved Arrows","ccw s","curvedArrow_ccw_s",{Geometry:{x:20,y:20,Width:50,Height:60}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M ${l},6, A ${l-6} ${u-18} 0 0 0 6 ${u-12}"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);Q("curved Arrows","ccw w","curvedArrow_ccw_w",{Geometry:{x:20,y:20,Width:60,Height:50}},(t,e,i,r,o,n,s)=>{e.Renderer=function(){const{Width:l,Height:u}=e.Geometry,a=e.ForegroundColor||"black",c=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${l}" height="${u}"
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
            d="M ${l-6},${u}, A ${l-18} ${u-8} 0 0 0 12 6"
          />
        </svg>
      `,d="data:image/svg+xml;base64,"+btoa(c);return i`<img class="SNS straightArrow" src=${d}/>`}},`
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);Q("complex Controls","flat List View","FlatListView");Q("complex Controls","nested List View","NestedListView");Q("complex Controls","QR-Code View","QRCodeView");function Po(t){J_("visual",t);let e=[];const{BackgroundColor:i,BackgroundTexture:r,ForegroundColor:o,FontFamily:n,FontSize:s,FontWeight:l,FontStyle:u,LineHeight:a}=t;return i!=null&&e.push(`background-color:${i}`),r!=null&&e.push(`background-image:${r}; background-repeat:repeat`),o!=null&&e.push(`color:${o}`),n!=null&&e.push(`font-family:${n}`),s!=null&&e.push(`font-size:${s}px`),l!=null&&e.push(`font-weight:${l}`),u!=null&&e.push(`font-style:${u}`),a!=null&&e.push(`line-height:${a}px`),e.join(";")}function Ws(t){t.stopPropagation(),t.preventDefault()}const De=Ws;let Ns=class{constructor(e,i){be(this,"_Id"),be(this,"_Name"),be(this,"_Project"),be(this,"_Folder"),be(this,"_BackgroundColor"),be(this,"_BackgroundTexture"),be(this,"_FontFamily"),be(this,"_FontSize"),be(this,"_FontWeight"),be(this,"_FontStyle"),be(this,"_LineHeight"),be(this,"_ForegroundColor"),be(this,"_Value",null),be(this,"_observed"),be(this,"_unobserved"),be(this,"_activeScript"),be(this,"_pendingScript"),be(this,"_ScriptError"),be(this,"_Renderer"),be(this,"_View"),be(this,"_onMount"),be(this,"_onUnmount"),be(this,"_Error"),this._Project=e,this._Id=i||mS()}get Id(){return this._Id}set Id(e){Ve("Id")}get Name(){return this._Name}set Name(e){iS("visual name",e),e!=null&&(e=e.trim(),e===""&&(e=void 0)),this._Name!==e&&(this._Name=e,this._reportChange("configure",this,"Name",e),this.rerender())}get Project(){return this._Project}set Project(e){Ve("Project")}get Folder(){return this._Folder}set Folder(e){Ve("Folder")}get isAttached(){return this._Folder==null?$o(this):this._Folder.isAttached}set isAttached(e){Ve("isAttached")}get BackgroundColor(){return this._BackgroundColor==null?this._Folder==null?void 0:this._Folder.BackgroundColor:this._BackgroundColor}set BackgroundColor(e){Ol("visual background color",e),this._BackgroundColor!==e&&(this._BackgroundColor=e,this._reportChange("configure",this,"BackgroundColor",e),this.rerender())}get BackgroundTexture(){return this._BackgroundTexture==null?this._Folder==null?void 0:this._Folder.BackgroundTexture:this._BackgroundTexture}set BackgroundTexture(e){Lg("visual background texture",e),this._BackgroundTexture!==e&&(this._BackgroundTexture=e,this._reportChange("configure",this,"BackgroundTexture",e),this.rerender())}get FontFamily(){return this._FontFamily==null?this._Folder==null?void 0:this._Folder.FontFamily:this._FontFamily}set FontFamily(e){__("visual font family",e),this._FontFamily!==e&&(this._FontFamily=e,this._reportChange("configure",this,"FontFamily",e),this.rerender())}get FontSize(){return this._FontSize==null?this._Folder==null?void 0:this._Folder.FontSize:this._FontSize}set FontSize(e){Xl("visual font size",e),this._FontSize!==e&&(this._FontSize=e,this._reportChange("configure",this,"FontSize",e),this.rerender())}get FontWeight(){return this._FontWeight==null?this._Folder==null?void 0:this._Folder.FontWeight:this._FontWeight}set FontWeight(e){m_("visual font weight",e,1,1e3),this._FontWeight!==e&&(this._FontWeight=e,this._reportChange("configure",this,"FontWeight",e),this.rerender())}get FontStyle(){return this._FontStyle==null?this._Folder==null?void 0:this._Folder.FontStyle:this._FontStyle}set FontStyle(e){y_("visual font style",e,Z_),this._FontStyle!==e&&(this._FontStyle=e,this._reportChange("configure",this,"FontStyle",e),this.rerender())}get LineHeight(){return this._LineHeight==null?this._Folder==null?void 0:this._Folder.LineHeight:this._LineHeight}set LineHeight(e){Xl("visual line height",e),this._LineHeight!==e&&(this._LineHeight=e,this._reportChange("configure",this,"LineHeight",e),this.rerender())}get ForegroundColor(){return this._ForegroundColor==null?this._Folder==null?void 0:this._Folder.ForegroundColor:this._ForegroundColor}set ForegroundColor(e){Ol("visual foreground color",e),this._ForegroundColor!==e&&(this._ForegroundColor=e,this._reportChange("configure",this,"ForegroundColor",e),this.rerender())}get Color(){return this.ForegroundColor}set Color(e){this.ForegroundColor=e}get Value(){return this._Value}set Value(e){Cr(this._Value,e)&&(this._Value=e,this._reportChange("configure",this,"Value",e),this.rerender())}get editableValue(){return this._Value==null?"":""+this._Value}set editableValue(e){this.Value=e}get observed(){return this._observed==null&&(this._observed=G_({})),this._observed}set observed(e){Ve("observed")}get unobserved(){return this._unobserved==null&&(this._unobserved={}),this._unobserved}set unobserved(e){Ve("unobserved")}get Script(){return this._pendingScript==null?this._activeScript:this._pendingScript}set Script(e){Ve("Script")}get activeScript(){return this._activeScript}set activeScript(e){Hl("visual script",e),e===""&&(e=void 0),this._activeScript!==e&&(this._activeScript=e,this._reportChange("configure",this,"activeScript",e),this.rerender())}get pendingScript(){return this._pendingScript}set pendingScript(e){Hl("visual script",e),this._pendingScript!==e&&(this._pendingScript=e,this._reportChange("configure",this,"pendingScript",e),this.rerender())}activateScript(){let e=(this._activeScript||"").trim();if(this.Error=void 0,this._Renderer=void 0,Bs(this),e!=null){let i;try{i=new Function("me,my, html,reactively, onRender,onMount,onUnmount, useBehavior",e)}catch(l){console.error("visual script compilation failure",l),this.Error={Type:"Script Compilation Failure",Message:""+l,Cause:l};return}const r=l=>{Vr("reactive function",l),sf(this,Rg(l))},o=this.onRender.bind(this),n=this.onMount.bind(this),s=this.onUnmount.bind(this);try{i.call(this,this,this,wo,r,o,n,s,wS.bind(this))}catch(l){console.error("visual script execution failure",l),this.Error={Type:"Script Execution Failure",Message:""+l,Cause:l};return}}this.rerender()}get ScriptError(){return this._ScriptError==null?void 0:{...this._ScriptError}}set ScriptError(e){Jl("script error setting",e),Cr(this._ScriptError,e)&&(this._ScriptError=e,this._reportChange("configure",this,"ScriptError",e),this.rerender())}get Renderer(){return this._Renderer}set Renderer(e){$n("visual renderer",e),this._Renderer!==e&&(this._Renderer=e,this.rerender())}onRender(e){this.Renderer=e}Rendering(e){return""}rerender(e,i){}get View(){return this._View}set View(e){Ve("View")}get isMounted(){return this._View!=null}set isMounted(e){Ve("isMounted")}onMount(e){$n('"onMount" callback',e),e==null?this._onMount=void 0:this._onMount=()=>{try{e.call(this)}catch(i){this.Error={Type:'"onMount" Callback Failure',Message:""+i,Cause:i},this.rerender()}}}onUnmount(e){$n('"onUnmount" callback',e),e==null?this._onUnmount=void 0:this._onUnmount=()=>{try{e.call(this)}catch(i){this.Error={Type:'"onUnmount" Callback Failure',Message:""+i,Cause:i}}}}get Error(){return this._Error==null?void 0:{...this._Error}}set Error(e){Jl("error setting",e),Cr(this._Error,e)&&(this._Error=e,this._reportChange("configure",this,"Error",e),this.rerender())}get hasError(){return this._Error!=null}set hasError(e){Ve("hasError")}_reportChange(e,...i){this._Project._reportChange(e,...i)}_serializeConfigurationInto(e){e.Id=this.Id;const i=r=>{this["_"+r]!=null&&(e[r]=this[r])};["Name","BackgroundColor","BackgroundTexture","FontFamily","FontSize","FontWeight","FontStyle","LineHeight","ForegroundColor","Value","activeScript","pendingScript"].forEach(r=>i(r))}_deserializeConfigurationFrom(e){const i=r=>{if(e[r]!=null)try{this[r]=e[r]}catch{console.warn("DeserializationError:invalid value for property "+Zi(r))}};i("activeScript"),["Name","BackgroundColor","BackgroundTexture","FontFamily","FontSize","FontWeight","FontStyle","LineHeight","ForegroundColor","Value","pendingScript"].forEach(r=>i(r))}},Ts=class extends Ns{constructor(e,i){super(e,i),be(this,"_SnapToGrid"),be(this,"_GridWidth"),be(this,"_GridHeight"),be(this,"_BoardList",[])}get Path(){const e=this._Folder;if(e==null)return"|";{const i=this.Name||"#"+this.Index,r=e.Path;return(r==="|"?"":r)+"|"+i}}set Path(e){Ve("Path")}BoardAtPath(e){if(Ba("board path",e),e=e.trim(),e==="")return this._Folder==null?void 0:this;if(e.startsWith("|"))return this._Project.BoardAtPath(e.replace(/^(\s*\|)*/,""));e=e.replace(/\|+/g,"|");const i=e.split("|").map(o=>o.trim()).map(o=>/^#\d+$/.test(o)?parseInt(o.slice(1),10):o);let r;for(let o=0,n=i.length;o<n;o++){const s=i[o];if(typeof s=="number"?r=(r||this).BoardAt(s):r=(r||this).BoardNamed(s),r==null)return}return r}get IndexPath(){const e=this._Folder;return e==null?[]:e.IndexPath.concat(this.Index)}set IndexPath(e){Ve("IndexPath")}get SnapToGrid(){return this._SnapToGrid?this._SnapToGrid==!0:this._Folder==null?!1:this._Folder.SnapToGrid}set SnapToGrid(e){f_("snap-to-grid setting",e),this._SnapToGrid!==e&&(this._SnapToGrid=e,this._reportChange("configure",this,"SnapToGrid",e),this.rerender())}get GridWidth(){return this._GridWidth==null?this._Folder==null?dS:this._Folder.GridWidth:this._GridWidth}set GridWidth(e){Ml("snap-to-grid width",e),this._GridWidth!==e&&(this._GridWidth=e,this._reportChange("configure",this,"GridWidth",e),this.rerender())}get GridHeight(){return this._GridHeight==null?this._Folder==null?cS:this._Folder.GridHeight:this._GridHeight}set GridHeight(e){Ml("snap-to-grid height",e),this._GridHeight!==e&&(this._GridHeight=e,this._reportChange("configure",this,"GridHeight",e),this.rerender())}get Index(){return this._Folder==null?-1:this._Folder.IndexOfBoard(this)}set Index(e){Ve("Index")}get mayBeShiftedUp(){return this._Folder==null?!1:this._Folder.mayShiftBoardUp(this)}set mayBeShiftedUp(e){Ve("mayBeShiftedUp")}get mayBeShiftedDown(){return this._Folder==null?!1:this._Folder.mayShiftBoardDown(this)}set mayBeShiftedDown(e){Ve("mayBeShiftedDown")}get mayBeShiftedIn(){return this._Folder==null?!1:this._Folder.mayShiftBoardIn(this)}set mayBeShiftedIn(e){Ve("mayBeShiftedIn")}get mayBeShiftedOut(){return this._Folder==null?!1:this._Folder.mayShiftBoardOut(this)}set mayBeShiftedOut(e){Ve("mayBeShiftedOut")}containsFolder(e){for(K_("folder",e),e=e.Folder;e!=null;){if(e===this)return!0;e=e.Folder}return!1}get BoardList(){return this._BoardList.slice()}set BoardList(e){Ve("BoardList")}get BoardCount(){return this._BoardList.length}set BoardCount(e){Ve("BoardCount")}IndexOfBoard(e){const i=this.Board(e);return i==null?-1:this._BoardList.indexOf(i)}Board(e){switch(Ag("board, name or index",e),!0){case Yn(e):const i=e;return i._Folder===this?i:void 0;case yo(e):let r=e;return r<0&&(r+=this._BoardList.length),this._BoardList[r];case ko(e):return this.BoardNamed(e)}kt("InvalidArgument: no valid board, board name or board index given")}existingBoard(e){let i=this.Board(e);return i==null&&kt("BoardNotFound: the desired board could not be found"),i}BoardNamed(e){Zn("SNS board name",e),e=e.trim().toLowerCase();let i;return this._BoardList.forEach(r=>{i==null&&r.Name!=null&&r.Name.toLowerCase()===e&&(i=r)}),i}BoardAt(e){return Xi("SNS board index",e),e<0&&(e+=this._BoardList.length),this._BoardList[e]}hasBoard(e){return this.Board(e)!=null}newBoardAt(e,i){return i==null?this.BoardDeserializedAt({},e):this.BoardDeserializedAt({Id:i},e)}BoardDeserializedAt(e,i){Vs("board serialization",e),wn("board insertionindex",i),i==null?i=this._BoardList.length:(i<0&&(i+=this._BoardList.length),i=Math.max(0,Math.min(i,this._BoardList.length)));const r=qg("board id",e.Id);let o=new cf(this._Project,r);return this._attachBoardAt(o,i),o._deserializeConfigurationFrom(e),o._deserializeStickersFrom(e),o._deserializeBoardsFrom(e),this.rerender(),o}DuplicateOfBoardAt(e){Xi("board index",e);const i=this.existingBoard(e).Serialization;return Qn(i),this.BoardDeserializedAt(i,e+1)}mayShiftBoardUp(e){const i=this.existingBoard(e);return this._BoardList.indexOf(i)>0}mayShiftBoardDown(e){const i=this.existingBoard(e),r=this._BoardList,o=r.indexOf(i);return o>=0&&o<r.length-1}shiftBoardToTop(e){const i=this.existingBoard(e);if(this.mayShiftBoardUp(i)){const r=this._BoardList.indexOf(i);this._detachBoardAt(r),this._attachBoardAt(i,0),this.rerender()}}shiftBoardUp(e){const i=this.existingBoard(e);if(this.mayShiftBoardUp(i)){const r=this._BoardList.indexOf(i);this._detachBoardAt(r),this._attachBoardAt(i,r-1),this.rerender()}}shiftBoardDown(e){const i=this.existingBoard(e);if(this.mayShiftBoardDown(i)){const r=this._BoardList.indexOf(i);this._detachBoardAt(r),this._attachBoardAt(i,r+1),this.rerender()}}shiftBoardToBottom(e){const i=this.existingBoard(e);if(this.mayShiftBoardDown(i)){const r=this._BoardList.indexOf(i);this._detachBoardAt(r),this._attachBoardAt(i,this._BoardList.length),this.rerender()}}shiftBoardTo(e,i){const r=this.existingBoard(e);Xi("SNS board index",i),i<0&&(i+=this._BoardList.length),i=Math.max(0,Math.min(i,this._BoardList.length));const o=this._BoardList.indexOf(r);o!==i&&(this._detachBoardAt(o),this._attachBoardAt(r,i),this.rerender())}shiftBoardsByIndex(e,i,r){const o=this._BoardList.length;Dr("old index",e,0,o),Dr("new index",i,0,o);const n=this._BoardList.slice(e,e+r);n.forEach(s=>this._detachBoardAt(e)),i>e&&(i-=r),n.forEach((s,l)=>this._attachBoardAt(s,i+l)),this.rerender()}mayShiftBoardIn(e){const i=this.existingBoard(e);return this.mayShiftBoardDown(i)}mayShiftBoardOut(e){return this._Folder!=null}shiftBoardIn(e){const i=this.existingBoard(e);if(this.mayShiftBoardIn(i)){const r=this._BoardList.indexOf(i),o=this._BoardList[r+1];this._detachBoardAt(r),o._attachBoardAt(i,0),this.rerender(),o.rerender()}}shiftBoardOut(e){const i=this.existingBoard(e);if(this.mayShiftBoardOut(i)){const r=this._BoardList.indexOf(i),o=this._Folder;this._detachBoardAt(r),o._attachBoardAt(i,o.Index),this.rerender(),o.rerender()}}mayMoveBoardTo(e,i,r){const o=this.existingBoard(e),n=Fr(i)?i:this.existingBoard(i);return wn("insertion index",r),n.isAttached&&n!==o&&!o.containsFolder(n)}moveBoardTo(e,i,r){const o=this.existingBoard(e),n=Fr(i)?i:this.existingBoard(i);if(wn("insertion index",r),n.isAttached&&n!==o&&!o.containsFolder(n)){const s=this._BoardList.indexOf(o);let l=r??n.BoardCount;l<0&&(l+=n.BoardCount),l=Math.max(0,Math.min(l,n.BoardCount)),this._detachBoardAt(s),n._attachBoardAt(o,l),this.rerender(),n.rerender()}}destroyBoard(e){const i=this.Board(e);if(i==null){Yn(e)&&kt("NoSuchBoard: the given board could not be found");return}i.clear(),Bs(i);const r=this._BoardList.indexOf(i);this._detachBoardAt(r),_S(i),i._Project=void 0,this._reportChange("destroyBoard",i),this.rerender()}clear(){for(let e=0,i=this._BoardList.length;e<i;e++)this.destroyBoard(this._BoardList[0])}Rendering(e){if(this.hasError)return qn.call(this);let i=this._Renderer;if(i==null)return"";try{return i.call(this,e)}catch(r){return this.Error={Type:"Rendering Failure",Message:""+r,Cause:r},qn.call(this)}}_attachBoardAt(e,i){e._Folder=this,this._BoardList.splice(i,0,e),this._reportChange("attachBoard",e,this,i)}_detachBoardAt(e){const i=this._BoardList.splice(e,1)[0];i._Folder=void 0,this._reportChange("detachBoard",i,this,e)}_serializeConfigurationInto(e){super._serializeConfigurationInto(e);const i=r=>{this["_"+r]!=null&&(e[r]=this[r])};["SnapToGrid","GridWidth","GridHeight"].forEach(r=>i(r))}_deserializeConfigurationFrom(e){super._deserializeConfigurationFrom(e);const i=r=>{if(e[r]!=null)try{this[r]=e[r]}catch{console.warn("DeserializationError:invalid value for property "+Zi(r))}};["SnapToGrid","GridWidth","GridHeight"].forEach(r=>i(r))}_serializeBoardsInto(e){const i=this._BoardList.slice();i.length>0&&(e.BoardList=i.map(r=>r.Serialization))}_deserializeBoardsFrom(e){this._BoardList.length>0&&this.clear(),jr(e.BoardList,zr)&&e.BoardList.length>0&&e.BoardList.forEach((i,r)=>{this.BoardDeserializedAt(i,r)})}};const FS=Object.create(null);["Name","BackgroundColor","BackgroundTexture","FontFamily","FontSize","FontWeight","FontStyle","LineHeight","ForegroundColor","Value","activeScript","pendingScript","SnapToGrid","GridWidth","GridHeight"].forEach(t=>FS[t]=!0);let lf=class uf extends Ts{constructor(e){super(void 0,void 0),be(this,"_onChange",[]),be(this,"_onRender",[]),be(this,"_onError",[]),this._Project=this,Zn("project name",e),this._Name=e}get Name(){return this._Name}set Name(e){Ve("Name")}get IndexPath(){return[]}set IndexPath(e){Ve("IndexPath")}BoardAtIndexPath(e){if(b_("board index path",e,ws),e.length!==0){let i;for(let r=0,o=e.length;r<o;r++)if(i=(i||this).BoardAt(e[r]),i==null)return;return i}}FolderWithId(e){return Yl("folder id",e),Kl(this,e)}BoardWithId(e){const i=Kl(this,e);return $o(i)&&kt("NotABoard: the folder with the given id is not a board, but the project"),i}StickerWithId(e){return Yl("sticker id",e),yS(this,e)}recursivelyActivateAllScripts(){this.activateScript(),this._BoardList.forEach(e=>e.recursivelyActivateAllScripts())}onChange(e){Vr('"onChange" callback',e),this._onChange.push(e)}_reportChange(e,i,...r){e==="configure"&&(e=Fr(i)?"configureFolder":"configureSticker"),r.unshift(this,e,i),this._onChange.forEach(o=>o.apply(this,r))}onRender(e){Vr('"onRender" callback',e),this._onRender.push(e)}rerender(e,i){this._onRender.forEach(r=>r(this,e,i))}onError(e){Vr('"onError" callback',e),this._onError.push(e)}showError(e,i){this._onError.forEach(r=>r(this,e,i))}get Serialization(){const e={};return this._serializeConfigurationInto(e),this._serializeBoardsInto(e),delete e.Id,e}set Serialization(e){Ve("Serialization")}static deserializedFrom(e,i){Zn("project name",e);const r=new uf(e);return delete i.Name,r._Name=e,r._deserializeConfigurationFrom(i),r._deserializeBoardsFrom(i),r}};const df=Object.create(null);["Name","BackgroundColor","BackgroundTexture","FontFamily","FontSize","FontWeight","FontStyle","LineHeight","ForegroundColor","Value","activeScript","pendingScript","SnapToGrid","GridWidth","GridHeight"].forEach(t=>df[t]=!0);let cf=class extends Ts{constructor(t,e){super(t,e),be(this,"_StickerList",[]),xS(t,this),t._reportChange("createBoard",this)}get StickerList(){return this._StickerList.slice()}set StickerList(t){Ve("StickerList")}get StickerCount(){return this._StickerList.length}set StickerCount(t){Ve("StickerCount")}IndexOfSticker(t){return Yg("SNS sticker to search for",t),this._StickerList.indexOf(t)}Sticker(t){switch(Ag("sticker, name or index",t),!0){case Mi(t):const e=t;return e.Board===this?e:void 0;case yo(t):const i=t;return this._StickerList[i];case ko(t):return this.StickerNamed(t)}kt("InvalidArgument: no valid sticker, sticker name or sticker index given")}existingSticker(t){let e=this.Sticker(t);return e==null&&kt("StickerNotFound: the desired sticker could not be found"),e}StickerNamed(t){Zn("SNS sticker name",t),t=t.trim().toLowerCase();let e;return this._StickerList.forEach(i=>{e==null&&i.Name!=null&&i.Name.toLowerCase()===t&&(e=i)}),e}StickerAt(t){return Xi("SNS sticker index",t),t<0&&(t+=this._StickerList.length),this._StickerList[t]}hasSticker(t){return this.Sticker(t)!=null}newStickerAt(t,e){return e==null?this.StickerDeserializedAt({},t):this.StickerDeserializedAt({Id:e},t)}StickerDeserializedAt(t,e){Vs("sticker serialization",t),wn("SNS sticker index",e),e==null?e=this._StickerList.length:(e<0&&(e+=this._StickerList.length),e=Math.max(0,Math.min(e,this._StickerList.length)));const i=qg("sticker id",t.Id);let r=new hf(this.Project,i);return this._attachStickerAt(r,e),r._deserializeConfigurationFrom(t),this.rerender(),r}DuplicateOfStickerAt(t){Xi("SNS sticker index",t);const e=this.existingSticker(t).Serialization;return Qn(e),this.StickerDeserializedAt(e,t+1)}mayShiftStickerUp(t){const e=this.existingSticker(t);return this._StickerList.indexOf(e)>0}mayShiftStickerDown(t){const e=this.existingSticker(t),i=this._StickerList,r=i.indexOf(e);return r>=0&&r<i.length-1}shiftStickerToTop(t){const e=this.existingSticker(t);if(this.mayShiftStickerUp(e)){const i=this._StickerList.indexOf(e);this._detachStickerAt(i),this._attachStickerAt(e,0),this.rerender()}}shiftStickerUp(t){const e=this.existingSticker(t);if(this.mayShiftStickerUp(e)){const i=this._StickerList.indexOf(e);this._detachStickerAt(i),this._attachStickerAt(e,i-1),this.rerender()}}shiftStickerDown(t){const e=this.existingSticker(t);if(this.mayShiftStickerDown(e)){const i=this._StickerList.indexOf(e);this._detachStickerAt(i),this._attachStickerAt(e,i+1),this.rerender()}}shiftStickerToBottom(t){const e=this.existingSticker(t);if(this.mayShiftStickerDown(e)){const i=this._StickerList.indexOf(e);this._detachStickerAt(i),this._attachStickerAt(e,this._StickerList.length),this.rerender()}}shiftStickerTo(t,e){const i=this.existingSticker(t);Xi("SNS sticker index",e),e<0&&(e+=this._StickerList.length),e=Math.max(0,Math.min(e,this._StickerList.length-1));const r=this._StickerList.indexOf(i);r!==e&&(this._detachStickerAt(r),this._attachStickerAt(i,e),this.rerender())}shiftStickersByIndex(t,e,i){const r=this._StickerList.length;Dr("old index",t,0,r),Dr("new index",e,0,r);const o=this._StickerList.slice(t,t+i);o.forEach(n=>this._detachStickerAt(t)),e>t&&(e-=i),o.forEach((n,s)=>this._attachStickerAt(n,e+s)),this.rerender()}destroySticker(t){const e=this.Sticker(t);if(e==null){Mi(t)&&kt("NoSuchSticker: the given sticker could not be found");return}Bs(e);const i=this._StickerList.indexOf(e);this._detachStickerAt(i),bS(e),e._Project=void 0,this._reportChange("destroySticker",e),this.rerender()}clear(){super.clear();for(let t=0,e=this._StickerList.length;t<e;t++)this.destroySticker(this._StickerList[0])}recursivelyActivateAllScripts(){this.activateScript(),this._BoardList.forEach(t=>t.recursivelyActivateAllScripts()),this._StickerList.forEach(t=>t.activateScript())}rerender(){this.Project.rerender(this)}_attachStickerAt(t,e){t._Folder=this,this._StickerList.splice(e,0,t),this._reportChange("attachSticker",t,this,e)}_detachStickerAt(t){const e=this._StickerList.splice(t,1)[0];e._Folder=void 0,this._reportChange("detachSticker",e,this,t)}get Serialization(){const t={};return this._serializeConfigurationInto(t),this._serializeBoardsInto(t),this._serializeStickersInto(t),t}set Serialization(t){Ve("Serialization")}_serializeStickersInto(t){const e=this._StickerList.slice();e.length>0&&(t.StickerList=e.map(i=>i.Serialization))}_deserializeStickersFrom(t){this._StickerList.length>0&&this.clear(),jr(t.StickerList,zr)&&t.StickerList.length>0&&t.StickerList.forEach((e,i)=>{this.StickerDeserializedAt(e,i)})}};["Name","BackgroundColor","BackgroundTexture","FontFamily","FontSize","FontWeight","FontStyle","LineHeight","ForegroundColor","Value","activeScript","pendingScript","SnapToGrid","GridWidth","GridHeight"].forEach(t=>df[t]=!0);let hf=class extends Ns{constructor(t,e){super(t,e),be(this,"_minWidth"),be(this,"_maxWidth",sS),be(this,"_minHeight"),be(this,"_maxHeight",uS),be(this,"_Geometry",{...rr}),be(this,"_Lock",!1),be(this,"_Visibility",!0),be(this,"_Enabling",!0),SS(t,this),t._reportChange("createSticker",this)}get Board(){return this._Folder}set Board(t){Ve("Board")}get BackgroundTexture(){return this._BackgroundTexture}set BackgroundTexture(t){Lg("visual background texture",t),this._BackgroundTexture!==t&&(this._BackgroundTexture=t,this._reportChange("configure",this,"BackgroundTexture",t),this.rerender())}get Index(){return this._Folder.IndexOfSticker(this)}set Index(t){Ve("Index")}get mayBeShiftedUp(){return this._Folder.mayShiftStickerUp(this)}set mayBeShiftedUp(t){Ve("mayBeShiftedUp")}get mayBeShiftedDown(){return this._Folder.mayShiftStickerDown(this)}set mayBeShiftedDown(t){Ve("mayBeShiftedDown")}get minWidth(){return this._minWidth==null?aS:this._minWidth}set minWidth(t){nn("minimal sticker width",t),this._minWidth!==t&&(this._minWidth=t,this._reportChange("configure",this,"minWidth",t),this._minWidth!=null&&this._maxWidth!=null&&this._maxWidth<this._minWidth&&(this._maxWidth=t,this._reportChange("configure",this,"maxWidth",this._minWidth)),this._minWidth!=null&&this._Geometry.Width<this._minWidth&&(this.Width=this._minWidth),this.rerender())}get maxWidth(){return this._maxWidth}set maxWidth(t){nn("maximal sticker width",t),t!=null&&this._minWidth!=null&&(t=Math.max(this._minWidth,t)),this._maxWidth!==t&&(this._maxWidth=t,this._reportChange("configure",this,"maxWidth",this._maxWidth),this._maxWidth!=null&&this._Geometry.Width>this._maxWidth&&(this.Width=this._maxWidth),this.rerender())}get minHeight(){return this._minHeight==null?lS:this._minHeight}set minHeight(t){nn("minimal sticker height",t),this._minHeight!==t&&(this._minHeight=t,this._reportChange("configure",this,"minHeight",t),this._minHeight!=null&&this._maxHeight!=null&&this._maxHeight<this._minHeight&&(this._maxHeight=t,this._reportChange("configure",this,"maxHeight",this._minHeight)),this._minHeight!=null&&this._Geometry.Height<this._minHeight&&(this.Height=this._minHeight),this.rerender())}get maxHeight(){return this._maxHeight}set maxHeight(t){nn("maximal sticker height",t),t!=null&&this._minHeight!=null&&(t=Math.max(this._minHeight,t)),this._maxHeight!==t&&(this._maxHeight=t,this._reportChange("configure",this,"maxHeight",this._maxHeight),this._maxHeight!=null&&this._Geometry.Height>this._maxHeight&&(this.Height=this._maxHeight),this.rerender())}get x(){return this._Geometry.x}set x(t){Zl("sticker x coordinate",t),this.Geometry={...this.Geometry,x:t}}get y(){return this._Geometry.y}set y(t){Zl("sticker y coordinate",t),this.Geometry={...this.Geometry,y:t}}get Width(){return this._Geometry.Width}set Width(t){ql("sticker width",t),this.Geometry={...this.Geometry,Width:t}}get Height(){return this._Geometry.Height}set Height(t){ql("sticker height",t),this.Geometry={...this.Geometry,Height:t}}get Position(){return{x:this._Geometry.x,y:this._Geometry.y}}set Position(t){rS("visual position",t),this.Geometry={...this.Geometry,x:t.x,y:t.y}}get Size(){return{Width:this._Geometry.Width,Height:this._Geometry.Height}}set Size(t){nS("visual size",t),this.Geometry={...this.Geometry,Width:t.Width,Height:t.Height}}get Geometry(){let{x:t,y:e,Width:i,Height:r}=this._Geometry;return this._minWidth!=null&&(i=Math.max(this._minWidth,i)),this._maxWidth!=null&&(i=Math.min(i,this._maxWidth)),this._minHeight!=null&&(r=Math.max(this._minHeight,r)),this._maxHeight!=null&&(r=Math.min(r,this._maxHeight)),{x:t,y:e,Width:i,Height:r}}set Geometry(t){oS("visual geometry",t);let{x:e,y:i,Width:r,Height:o}=this._Geometry;(e!==t.x||r!==t.Width||i!==t.y||o!==t.Height)&&(this._Geometry={...t},this._reportChange("configure",this,"Geometry",{...t}),this.rerender())}get Lock(){return this._Lock}set Lock(t){ta("sticker lock",t),this._Lock!==t&&(this._Lock=t,this._reportChange("configure",this,"Lock",t),this.rerender())}lock(){this.Lock=!0}unlock(){this.Lock=!1}get isLocked(){return this._Lock}set isLocked(t){this.Lock=t}get Visibility(){return this._Visibility}set Visibility(t){ta("sticker visibility",t),this._Visibility!==t&&(this._Visibility=t,this._reportChange("configure",this,"Visibility",t),this.rerender())}show(){this.Visibility=!0}hide(){this.Visibility=!1}get isVisible(){return this._Visibility}set isVisible(t){this.Visibility=t}get Enabling(){return this._Enabling}set Enabling(t){ta("sticker enabling",t),this._Enabling!==t&&(this._Enabling=t,this._reportChange("configure",this,"Enabling",t),this.rerender())}enable(){this.Enabling=!0}disable(){this.Enabling=!1}get isEnabled(){return this._Enabling}set isEnabled(t){this.Enabling=t}Rendering(t){if(this.hasError)return qn.call(this);let e=this._Renderer||af;try{return e.call(this,t)}catch(i){return this.Error={Type:"Rendering Failure",Message:""+i,Cause:i},qn.call(this)}}rerender(){this._Project.rerender(this._Folder,this)}get Serialization(){const t={};return this._serializeConfigurationInto(t),t}set Serialization(t){Ve("Serialization")}_serializeConfigurationInto(t){super._serializeConfigurationInto(t),t.Geometry={...this._Geometry},this._minWidth!=null&&(t.minWidth=this._minWidth),this._maxWidth!=null&&(t.maxWidth=this._maxWidth),this._minHeight!=null&&(t.minHeight=this._minHeight),this._maxHeight!=null&&(t.maxHeight=this._maxHeight),this.isLocked&&(t.Lock=!0),this.isVisible||(t.Visibility=!1),this.isEnabled||(t.Enabling=!1)}_deserializeConfigurationFrom(t){super._deserializeConfigurationFrom(t);let{x:e,y:i,Width:r,Height:o}=t.Geometry||rr;Ii(e)||(e=rr.x),Ii(i)||(i=rr.y),Pi(r)||(r=rr.Width),Pi(o)||(o=rr.Height),this.Geometry={x:e,y:i,Width:r,Height:o},t.Lock!=null&&(this.Lock=t.Lock),t.Visibility!=null&&(this.Visibility=t.Visibility),t.Enabling!=null&&(this.Enabling=t.Enabling)}};window.SNS={throwError:kt,throwReadOnlyError:Ve,SNS_Project:lf};console.log("SNS is globally available now");document.dispatchEvent(new CustomEvent("SNS",{detail:window.SNS}));function US(t,e,i){switch(!0){case e==null:throw new Error('no "Position" given');case(typeof e.left!="number"&&!(e.left instanceof Number)):case(typeof e.top!="number"&&!(e.top instanceof Number)):throw new Error('invalid "Position" given')}switch(t){case null:case void 0:throw new Error("no coordinate system given");case"viewport":return{left:e.left,top:e.top};case"document":return{left:e.left+window.scrollX,top:e.top+window.scrollY};case"local":switch(!0){case i==null:throw new Error("no target element given");case i instanceof Element:var r=window.getComputedStyle(i),o=parseFloat(r.borderLeftWidth),n=parseFloat(r.borderTopWidth),s=i.getBoundingClientRect();return{left:e.left-s.left-o,top:e.top-s.top-n};default:throw new Error("invalid target element given")}default:throw new Error("invalid coordinate system given")}}function AS(t,e,i){switch(!0){case e==null:throw new Error('no "Position" given');case(typeof e.left!="number"&&!(e.left instanceof Number)):case(typeof e.top!="number"&&!(e.top instanceof Number)):throw new Error('invalid "Position" given')}switch(t){case null:case void 0:throw new Error("no coordinate system given");case"viewport":return{left:e.left-window.scrollX,top:e.top-window.scrollY};case"document":return{left:e.left,top:e.top};case"local":switch(!0){case i==null:throw new Error("no target element given");case i instanceof Element:var r=window.getComputedStyle(i),o=parseFloat(r.borderLeftWidth),n=parseFloat(r.borderTopWidth),s=i.getBoundingClientRect();return{left:e.left+window.scrollX-s.left-o,top:e.top+window.scrollY-s.top-n};default:throw new Error("invalid target element given")}default:throw new Error("invalid coordinate system given")}}function LS(t,e,i){switch(!0){case e==null:throw new Error('no "Position" given');case(typeof e.left!="number"&&!(e.left instanceof Number)):case(typeof e.top!="number"&&!(e.top instanceof Number)):throw new Error('invalid "Position" given')}var r,o,n;switch(!0){case i==null:throw new Error("no source element given");case i instanceof Element:var s=window.getComputedStyle(i),l=parseFloat(s.borderLeftWidth),u=parseFloat(s.borderTopWidth);r=i.getBoundingClientRect(),o=r.left+l,n=r.top+u;break;default:throw new Error("invalid source element given")}switch(t){case null:case void 0:throw new Error("no coordinate system given");case"viewport":return{left:e.left+o,top:e.top+n};case"document":return{left:e.left+o+window.scrollX,top:e.top+n+window.scrollY};case"local":return{left:e.left,top:e.top};default:throw new Error("invalid coordinate system given")}}var ES={fromViewportTo:US,fromDocumentTo:AS,fromLocalTo:LS},Ds,Ke,pf,Ni,eu,gf,Ua,Fs,Aa,La,Ea={},ff=[],XS=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Us=Array.isArray;function _i(t,e){for(var i in e)t[i]=e[i];return t}function mf(t){var e=t.parentNode;e&&e.removeChild(t)}function MS(t,e,i){var r,o,n,s={};for(n in e)n=="key"?r=e[n]:n=="ref"?o=e[n]:s[n]=e[n];if(arguments.length>2&&(s.children=arguments.length>3?Ds.call(arguments,2):i),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)s[n]===void 0&&(s[n]=t.defaultProps[n]);return Wn(t,s,r,o,null)}function Wn(t,e,i,r,o){var n={type:t,props:e,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++pf,__i:-1,__u:0};return o==null&&Ke.vnode!=null&&Ke.vnode(n),n}function As(t){return t.children}function yi(t,e){this.props=t,this.context=e}function Hi(t,e){if(e==null)return t.__?Hi(t.__,t.__i+1):null;for(var i;e<t.__k.length;e++)if((i=t.__k[e])!=null&&i.__e!=null)return i.__e;return typeof t.type=="function"?Hi(t):null}function xf(t){var e,i;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((i=t.__k[e])!=null&&i.__e!=null){t.__e=t.__c.base=i.__e;break}return xf(t)}}function tu(t){(!t.__d&&(t.__d=!0)&&Ni.push(t)&&!eo.__r++||eu!==Ke.debounceRendering)&&((eu=Ke.debounceRendering)||gf)(eo)}function eo(){var t,e,i,r,o,n,s,l;for(Ni.sort(Ua);t=Ni.shift();)t.__d&&(e=Ni.length,r=void 0,n=(o=(i=t).__v).__e,s=[],l=[],i.__P&&((r=_i({},o)).__v=o.__v+1,Ke.vnode&&Ke.vnode(r),bf(i.__P,r,o,i.__n,i.__P.namespaceURI,32&o.__u?[n]:null,s,n??Hi(o),!!(32&o.__u),l),r.__v=o.__v,r.__.__k[r.__i]=r,zS(s,r,l),r.__e!=n&&xf(r)),Ni.length>e&&Ni.sort(Ua));eo.__r=0}function _f(t,e,i,r,o,n,s,l,u,a,c){var d,g,p,f,m,x=r&&r.__k||ff,b=e.length;for(i.__d=u,HS(i,e,x),u=i.__d,d=0;d<b;d++)(p=i.__k[d])!=null&&typeof p!="boolean"&&typeof p!="function"&&(g=p.__i===-1?Ea:x[p.__i]||Ea,p.__i=d,bf(t,p,g,o,n,s,l,u,a,c),f=p.__e,p.ref&&g.ref!=p.ref&&(g.ref&&Ls(g.ref,null,p),c.push(p.ref,p.__c||f,p)),m==null&&f!=null&&(m=f),65536&p.__u||g.__k===p.__k?(u&&!u.isConnected&&(u=Hi(g)),u=Sf(p,u,t)):typeof p.type=="function"&&p.__d!==void 0?u=p.__d:f&&(u=f.nextSibling),p.__d=void 0,p.__u&=-196609);i.__d=u,i.__e=m}function HS(t,e,i){var r,o,n,s,l,u=e.length,a=i.length,c=a,d=0;for(t.__k=[],r=0;r<u;r++)s=r+d,(o=t.__k[r]=(o=e[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?Wn(null,o,null,null,null):Us(o)?Wn(As,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?Wn(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=t,o.__b=t.__b+1,l=OS(o,i,s,c),o.__i=l,n=null,l!==-1&&(c--,(n=i[l])&&(n.__u|=131072)),n==null||n.__v===null?(l==-1&&d--,typeof o.type!="function"&&(o.__u|=65536)):l!==s&&(l===s+1?d++:l>s?c>u-s?d+=l-s:d--:l<s?l==s-1&&(d=l-s):d=0,l!==r+d&&(o.__u|=65536))):(n=i[s])&&n.key==null&&n.__e&&!(131072&n.__u)&&(n.__e==t.__d&&(t.__d=Hi(n)),Xa(n,n,!1),i[s]=null,c--);if(c)for(r=0;r<a;r++)(n=i[r])!=null&&!(131072&n.__u)&&(n.__e==t.__d&&(t.__d=Hi(n)),Xa(n,n))}function Sf(t,e,i){var r,o;if(typeof t.type=="function"){for(r=t.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=t,e=Sf(r[o],e,i));return e}t.__e!=e&&(i.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function OS(t,e,i,r){var o=t.key,n=t.type,s=i-1,l=i+1,u=e[i];if(u===null||u&&o==u.key&&n===u.type&&!(131072&u.__u))return i;if(r>(u!=null&&!(131072&u.__u)?1:0))for(;s>=0||l<e.length;){if(s>=0){if((u=e[s])&&!(131072&u.__u)&&o==u.key&&n===u.type)return s;s--}if(l<e.length){if((u=e[l])&&!(131072&u.__u)&&o==u.key&&n===u.type)return l;l++}}return-1}function iu(t,e,i){e[0]==="-"?t.setProperty(e,i??""):t[e]=i==null?"":typeof i!="number"||XS.test(e)?i:i+"px"}function on(t,e,i,r,o){var n;e:if(e==="style")if(typeof i=="string")t.style.cssText=i;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)i&&e in i||iu(t.style,e,"");if(i)for(e in i)r&&i[e]===r[e]||iu(t.style,e,i[e])}else if(e[0]==="o"&&e[1]==="n")n=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+n]=i,i?r?i.u=r.u:(i.u=Fs,t.addEventListener(e,n?La:Aa,n)):t.removeEventListener(e,n?La:Aa,n);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e in t)try{t[e]=i??"";break e}catch{}typeof i=="function"||(i==null||i===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,i))}}function ru(t){return function(e){if(this.l){var i=this.l[e.type+t];if(e.t==null)e.t=Fs++;else if(e.t<i.u)return;return i(Ke.event?Ke.event(e):e)}}}function bf(t,e,i,r,o,n,s,l,u,a){var c,d,g,p,f,m,x,b,P,C,w,y,N,B,F,$=e.type;if(e.constructor!==void 0)return null;128&i.__u&&(u=!!(32&i.__u),n=[l=e.__e=i.__e]),(c=Ke.__b)&&c(e);e:if(typeof $=="function")try{if(b=e.props,P=(c=$.contextType)&&r[c.__c],C=c?P?P.props.value:c.__:r,i.__c?x=(d=e.__c=i.__c).__=d.__E:("prototype"in $&&$.prototype.render?e.__c=d=new $(b,C):(e.__c=d=new yi(b,C),d.constructor=$,d.render=RS),P&&P.sub(d),d.props=b,d.state||(d.state={}),d.context=C,d.__n=r,g=d.__d=!0,d.__h=[],d._sb=[]),d.__s==null&&(d.__s=d.state),$.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=_i({},d.__s)),_i(d.__s,$.getDerivedStateFromProps(b,d.__s))),p=d.props,f=d.state,d.__v=e,g)$.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if($.getDerivedStateFromProps==null&&b!==p&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(b,C),!d.__e&&(d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(b,d.__s,C)===!1||e.__v===i.__v)){for(e.__v!==i.__v&&(d.props=b,d.state=d.__s,d.__d=!1),e.__e=i.__e,e.__k=i.__k,e.__k.forEach(function(T){T&&(T.__=e)}),w=0;w<d._sb.length;w++)d.__h.push(d._sb[w]);d._sb=[],d.__h.length&&s.push(d);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(b,d.__s,C),d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(p,f,m)})}if(d.context=C,d.props=b,d.__P=t,d.__e=!1,y=Ke.__r,N=0,"prototype"in $&&$.prototype.render){for(d.state=d.__s,d.__d=!1,y&&y(e),c=d.render(d.props,d.state,d.context),B=0;B<d._sb.length;B++)d.__h.push(d._sb[B]);d._sb=[]}else do d.__d=!1,y&&y(e),c=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++N<25);d.state=d.__s,d.getChildContext!=null&&(r=_i(_i({},r),d.getChildContext())),g||d.getSnapshotBeforeUpdate==null||(m=d.getSnapshotBeforeUpdate(p,f)),_f(t,Us(F=c!=null&&c.type===As&&c.key==null?c.props.children:c)?F:[F],e,i,r,o,n,s,l,u,a),d.base=e.__e,e.__u&=-161,d.__h.length&&s.push(d),x&&(d.__E=d.__=null)}catch(T){e.__v=null,u||n!=null?(e.__e=l,e.__u|=u?160:32,n[n.indexOf(l)]=null):(e.__e=i.__e,e.__k=i.__k),Ke.__e(T,e,i)}else n==null&&e.__v===i.__v?(e.__k=i.__k,e.__e=i.__e):e.__e=jS(i.__e,e,i,r,o,n,s,u,a);(c=Ke.diffed)&&c(e)}function zS(t,e,i){e.__d=void 0;for(var r=0;r<i.length;r++)Ls(i[r],i[++r],i[++r]);Ke.__c&&Ke.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(n){n.call(o)})}catch(n){Ke.__e(n,o.__v)}})}function jS(t,e,i,r,o,n,s,l,u){var a,c,d,g,p,f,m,x=i.props,b=e.props,P=e.type;if(P==="svg"?o="http://www.w3.org/2000/svg":P==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),n!=null){for(a=0;a<n.length;a++)if((p=n[a])&&"setAttribute"in p==!!P&&(P?p.localName===P:p.nodeType===3)){t=p,n[a]=null;break}}if(t==null){if(P===null)return document.createTextNode(b);t=document.createElementNS(o,P,b.is&&b),n=null,l=!1}if(P===null)x===b||l&&t.data===b||(t.data=b);else{if(n=n&&Ds.call(t.childNodes),x=i.props||Ea,!l&&n!=null)for(x={},a=0;a<t.attributes.length;a++)x[(p=t.attributes[a]).name]=p.value;for(a in x)if(p=x[a],a!="children"){if(a=="dangerouslySetInnerHTML")d=p;else if(a!=="key"&&!(a in b)){if(a=="value"&&"defaultValue"in b||a=="checked"&&"defaultChecked"in b)continue;on(t,a,null,p,o)}}for(a in b)p=b[a],a=="children"?g=p:a=="dangerouslySetInnerHTML"?c=p:a=="value"?f=p:a=="checked"?m=p:a==="key"||l&&typeof p!="function"||x[a]===p||on(t,a,p,x[a],o);if(c)l||d&&(c.__html===d.__html||c.__html===t.innerHTML)||(t.innerHTML=c.__html),e.__k=[];else if(d&&(t.innerHTML=""),_f(t,Us(g)?g:[g],e,i,r,P==="foreignObject"?"http://www.w3.org/1999/xhtml":o,n,s,n?n[0]:i.__k&&Hi(i,0),l,u),n!=null)for(a=n.length;a--;)n[a]!=null&&mf(n[a]);l||(a="value",f!==void 0&&(f!==t[a]||P==="progress"&&!f||P==="option"&&f!==x[a])&&on(t,a,f,x[a],o),a="checked",m!==void 0&&m!==t[a]&&on(t,a,m,x[a],o))}return t}function Ls(t,e,i){try{typeof t=="function"?t(e):t.current=e}catch(r){Ke.__e(r,i)}}function Xa(t,e,i){var r,o;if(Ke.unmount&&Ke.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||Ls(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){Ke.__e(n,e)}r.base=r.__P=null}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&Xa(r[o],e,i||typeof t.type!="function");i||t.__e==null||mf(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function RS(t,e,i){return this.constructor(t,i)}Ds=ff.slice,Ke={__e:function(t,e,i,r){for(var o,n,s;e=e.__;)if((o=e.__c)&&!o.__)try{if((n=o.constructor)&&n.getDerivedStateFromError!=null&&(o.setState(n.getDerivedStateFromError(t)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,r||{}),s=o.__d),s)return o.__E=o}catch(l){t=l}throw t}},pf=0,yi.prototype.setState=function(t,e){var i;i=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=_i({},this.state),typeof t=="function"&&(t=t(_i({},i),this.props)),t&&_i(i,t),t!=null&&this.__v&&(e&&this._sb.push(e),tu(this))},yi.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),tu(this))},yi.prototype.render=As,Ni=[],gf=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ua=function(t,e){return t.__v.__b-e.__v.__b},eo.__r=0,Fs=0,Aa=ru(!1),La=ru(!0);var yf=function(t,e,i,r){var o;e[0]=0;for(var n=1;n<e.length;n++){var s=e[n++],l=e[n]?(e[0]|=s?1:2,i[e[n++]]):e[++n];s===3?r[0]=l:s===4?r[1]=Object.assign(r[1]||{},l):s===5?(r[1]=r[1]||{})[e[++n]]=l:s===6?r[1][e[++n]]+=l+"":s?(o=t.apply(l,yf(t,l,i,["",null])),r.push(o),l[0]?e[0]|=2:(e[n-2]=0,e[n]=o)):r.push(l)}return r},nu=new Map;function GS(t){var e=nu.get(this);return e||(e=new Map,nu.set(this,e)),(e=yf(this,e.get(t)||(e.set(t,e=function(i){for(var r,o,n=1,s="",l="",u=[0],a=function(g){n===1&&(g||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,g,s):n===3&&(g||s)?(u.push(3,g,s),n=2):n===2&&s==="..."&&g?u.push(4,g,0):n===2&&s&&!g?u.push(5,0,!0,s):n>=5&&((s||!g&&n===5)&&(u.push(n,0,s,o),n=6),g&&(u.push(n,g,0,o),n=6)),s=""},c=0;c<i.length;c++){c&&(n===1&&a(),a(c));for(var d=0;d<i[c].length;d++)r=i[c][d],n===1?r==="<"?(a(),u=[u],n=3):s+=r:n===4?s==="--"&&r===">"?(n=1,s=""):s=r+s[0]:l?r===l?l="":s+=r:r==='"'||r==="'"?l=r:r===">"?(a(),n=1):n&&(r==="="?(n=5,o=s,s=""):r==="/"&&(n<5||i[c][d+1]===">")?(a(),n===3&&(u=u[0]),n=u,(u=u[0]).push(2,0,n),n=0):r===" "||r==="	"||r===`
`||r==="\r"?(a(),n=2):s+=r),n===3&&s==="!--"&&(n=4,u=u[0])}return a(),u}(t)),e),arguments,[])).length>1?e:e[0]}var pt=GS.bind(MS);function de(t,e){if(t==null)return{};var i={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;i[r]=t[r]}return i}function Ft(t){var e=/^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(t);if(e==null)throw new Error(t);var i=new Error(e[2]);throw i.name=e[1],i}function Nn(t){return(typeof t=="number"||t instanceof Number)&&(t=t.valueOf(),isFinite(t)&&Math.round(t)===t&&t>=0)}function Ma(t){return typeof t=="string"||t instanceof String}var YS=/^\s*$/,ZS=/^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function qS(t){return function(e,i){return(typeof e=="string"||e instanceof String)&&ZS.test(e.valueOf())}(t)}function Es(t){return typeof t=="function"}function oa(t){return t!=null&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype}var to=Array.isArray;function Vo(t,e,i,r){if(to(t))try{for(var o=0,n=t.length;o<n;o++)if(e(t[o])==0)return!1;return!(i!=null&&t.length<i||r!=null&&t.length>r)}catch{}return!1}var Xs=!0;function Co(t,e,i){var r=function(n,s){return function(l,u,a,c,d){if(u==null){if(c)return u;Ft("MissingArgument: no ".concat(hi(l)," given"))}else if(a(u))switch(!0){case u instanceof Boolean:case u instanceof Number:case u instanceof String:return u.valueOf();default:return u}else Ft("InvalidArgument: the given ".concat(hi(l)," is no valid ").concat(hi(d)))}(n,s,t,e,i)},o=t.name;return o!=null&&/^ValueIs/.test(o)?function(n,s){if(n==null&&Ft("MissingArgument: no function given"),typeof n!="function"&&Ft("InvalidArgument: the given 1st Argument is not a JavaScript function"),s==null&&Ft("MissingArgument: no desired name given"),typeof s=="string"||s instanceof String||Ft("InvalidArgument: the given desired name is not a string"),n.name===s)return n;try{if(Object.defineProperty(n,"name",{value:s}),n.name===s)return n}catch{}return new Function("originalFunction","return function "+s+" () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}")(n)}(r,o.replace(/^ValueIs/,e?"allow":"expect")):r}var Fi=Co(Nn,Xs,"ordinal number"),aa=Co(qS,Xs,"single line of text"),wt=Co(Es,Xs,"JavaScript function"),ou=Co(Es,!1,"JavaScript function");function au(t,e){if(e==null&&Ft("MissingArgument: no ".concat(hi(t)," given")),to(e))return e;Ft("InvalidArgument: the given ".concat(hi(t)," is no JavaScript array"))}function sa(t,e,i,r,o,n){return e==null?e:JS(t,e,i,r,o,n)}var JS=function(t,e,i,r,o,n){if(e==null&&Ft("MissingArgument: no ".concat(hi(t)," given")),Vo(e,i,o,n))return e;Ft("InvalidArgument: the given ".concat(hi(t)," is ")+"either not a list or contains invalid elements")};function hi(t){return t.replace(/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g,function(e){return e==="\\"?"\\\\":e}).replace(/[\x00-\x1f\x7f-\x9f]/g,function(e){switch(e){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v";default:var i=e.charCodeAt(0).toString(16);return"\\x"+"00".slice(i.length)+i}})}function Tt(t,e){return e===void 0&&(e='"'),e+function(i,r){return r===void 0&&(r='"'),i.replace(r==="'"?/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|'/g:/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|"/g,function(o){switch(o){case"'":return"\\'";case'"':return'\\"';case"\\":return"\\\\";default:return o}}).replace(/[\x00-\x1f\x7f-\x9f]/g,function(o){switch(o){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v";default:var n=o.charCodeAt(0).toString(16);return"\\x"+"00".slice(n.length)+n}})}(t,e)+e}var Bo,ze,vf,Ti,su,wf,Ha,Ms,Oa,za,Ur={},$f=[],KS=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Hs=Array.isArray;function Si(t,e){for(var i in e)t[i]=e[i];return t}function kf(t){var e=t.parentNode;e&&e.removeChild(t)}function If(t,e,i){var r,o,n,s={};for(n in e)n=="key"?r=e[n]:n=="ref"?o=e[n]:s[n]=e[n];if(arguments.length>2&&(s.children=arguments.length>3?Bo.call(arguments,2):i),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)s[n]===void 0&&(s[n]=t.defaultProps[n]);return Tn(t,s,r,o,null)}function Tn(t,e,i,r,o){var n={type:t,props:e,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++vf,__i:-1,__u:0};return o==null&&ze.vnode!=null&&ze.vnode(n),n}function Wo(t){return t.children}function Mt(t,e){this.props=t,this.context=e}function Oi(t,e){if(e==null)return t.__?Oi(t.__,t.__i+1):null;for(var i;e<t.__k.length;e++)if((i=t.__k[e])!=null&&i.__e!=null)return i.__e;return typeof t.type=="function"?Oi(t):null}function Pf(t){var e,i;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((i=t.__k[e])!=null&&i.__e!=null){t.__e=t.__c.base=i.__e;break}return Pf(t)}}function lu(t){(!t.__d&&(t.__d=!0)&&Ti.push(t)&&!io.__r++||su!==ze.debounceRendering)&&((su=ze.debounceRendering)||wf)(io)}function io(){var t,e,i,r,o,n,s,l;for(Ti.sort(Ha);t=Ti.shift();)t.__d&&(e=Ti.length,r=void 0,n=(o=(i=t).__v).__e,s=[],l=[],i.__P&&((r=Si({},o)).__v=o.__v+1,ze.vnode&&ze.vnode(r),Os(i.__P,r,o,i.__n,i.__P.namespaceURI,32&o.__u?[n]:null,s,n??Oi(o),!!(32&o.__u),l),r.__v=o.__v,r.__.__k[r.__i]=r,Bf(s,r,l),r.__e!=n&&Pf(r)),Ti.length>e&&Ti.sort(Ha));io.__r=0}function Vf(t,e,i,r,o,n,s,l,u,a,c){var d,g,p,f,m,x=r&&r.__k||$f,b=e.length;for(i.__d=u,QS(i,e,x),u=i.__d,d=0;d<b;d++)(p=i.__k[d])!=null&&typeof p!="boolean"&&typeof p!="function"&&(g=p.__i===-1?Ur:x[p.__i]||Ur,p.__i=d,Os(t,p,g,o,n,s,l,u,a,c),f=p.__e,p.ref&&g.ref!=p.ref&&(g.ref&&zs(g.ref,null,p),c.push(p.ref,p.__c||f,p)),m==null&&f!=null&&(m=f),65536&p.__u||g.__k===p.__k?(u&&!u.isConnected&&(u=Oi(g)),u=Cf(p,u,t)):typeof p.type=="function"&&p.__d!==void 0?u=p.__d:f&&(u=f.nextSibling),p.__d=void 0,p.__u&=-196609);i.__d=u,i.__e=m}function QS(t,e,i){var r,o,n,s,l,u=e.length,a=i.length,c=a,d=0;for(t.__k=[],r=0;r<u;r++)s=r+d,(o=t.__k[r]=(o=e[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?Tn(null,o,null,null,null):Hs(o)?Tn(Wo,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?Tn(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=t,o.__b=t.__b+1,l=eb(o,i,s,c),o.__i=l,n=null,l!==-1&&(c--,(n=i[l])&&(n.__u|=131072)),n==null||n.__v===null?(l==-1&&d--,typeof o.type!="function"&&(o.__u|=65536)):l!==s&&(l===s+1?d++:l>s?c>u-s?d+=l-s:d--:l<s?l==s-1&&(d=l-s):d=0,l!==r+d&&(o.__u|=65536))):(n=i[s])&&n.key==null&&n.__e&&!(131072&n.__u)&&(n.__e==t.__d&&(t.__d=Oi(n)),ja(n,n,!1),i[s]=null,c--);if(c)for(r=0;r<a;r++)(n=i[r])!=null&&!(131072&n.__u)&&(n.__e==t.__d&&(t.__d=Oi(n)),ja(n,n))}function Cf(t,e,i){var r,o;if(typeof t.type=="function"){for(r=t.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=t,e=Cf(r[o],e,i));return e}t.__e!=e&&(i.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function eb(t,e,i,r){var o=t.key,n=t.type,s=i-1,l=i+1,u=e[i];if(u===null||u&&o==u.key&&n===u.type&&!(131072&u.__u))return i;if(r>(u==null||131072&u.__u?0:1))for(;s>=0||l<e.length;){if(s>=0){if((u=e[s])&&!(131072&u.__u)&&o==u.key&&n===u.type)return s;s--}if(l<e.length){if((u=e[l])&&!(131072&u.__u)&&o==u.key&&n===u.type)return l;l++}}return-1}function uu(t,e,i){e[0]==="-"?t.setProperty(e,i??""):t[e]=i==null?"":typeof i!="number"||KS.test(e)?i:i+"px"}function an(t,e,i,r,o){var n;e:if(e==="style")if(typeof i=="string")t.style.cssText=i;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)i&&e in i||uu(t.style,e,"");if(i)for(e in i)r&&i[e]===r[e]||uu(t.style,e,i[e])}else if(e[0]==="o"&&e[1]==="n")n=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+n]=i,i?r?i.u=r.u:(i.u=Ms,t.addEventListener(e,n?za:Oa,n)):t.removeEventListener(e,n?za:Oa,n);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e in t)try{t[e]=i??"";break e}catch{}typeof i=="function"||(i==null||i===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,i))}}function du(t){return function(e){if(this.l){var i=this.l[e.type+t];if(e.t==null)e.t=Ms++;else if(e.t<i.u)return;return i(ze.event?ze.event(e):e)}}}function Os(t,e,i,r,o,n,s,l,u,a){var c,d,g,p,f,m,x,b,P,C,w,y,N,B,F,$=e.type;if(e.constructor!==void 0)return null;128&i.__u&&(u=!!(32&i.__u),n=[l=e.__e=i.__e]),(c=ze.__b)&&c(e);e:if(typeof $=="function")try{if(b=e.props,P=(c=$.contextType)&&r[c.__c],C=c?P?P.props.value:c.__:r,i.__c?x=(d=e.__c=i.__c).__=d.__E:("prototype"in $&&$.prototype.render?e.__c=d=new $(b,C):(e.__c=d=new Mt(b,C),d.constructor=$,d.render=ib),P&&P.sub(d),d.props=b,d.state||(d.state={}),d.context=C,d.__n=r,g=d.__d=!0,d.__h=[],d._sb=[]),d.__s==null&&(d.__s=d.state),$.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=Si({},d.__s)),Si(d.__s,$.getDerivedStateFromProps(b,d.__s))),p=d.props,f=d.state,d.__v=e,g)$.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if($.getDerivedStateFromProps==null&&b!==p&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(b,C),!d.__e&&(d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(b,d.__s,C)===!1||e.__v===i.__v)){for(e.__v!==i.__v&&(d.props=b,d.state=d.__s,d.__d=!1),e.__e=i.__e,e.__k=i.__k,e.__k.forEach(function(T){T&&(T.__=e)}),w=0;w<d._sb.length;w++)d.__h.push(d._sb[w]);d._sb=[],d.__h.length&&s.push(d);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(b,d.__s,C),d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(p,f,m)})}if(d.context=C,d.props=b,d.__P=t,d.__e=!1,y=ze.__r,N=0,"prototype"in $&&$.prototype.render){for(d.state=d.__s,d.__d=!1,y&&y(e),c=d.render(d.props,d.state,d.context),B=0;B<d._sb.length;B++)d.__h.push(d._sb[B]);d._sb=[]}else do d.__d=!1,y&&y(e),c=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++N<25);d.state=d.__s,d.getChildContext!=null&&(r=Si(Si({},r),d.getChildContext())),g||d.getSnapshotBeforeUpdate==null||(m=d.getSnapshotBeforeUpdate(p,f)),Vf(t,Hs(F=c!=null&&c.type===Wo&&c.key==null?c.props.children:c)?F:[F],e,i,r,o,n,s,l,u,a),d.base=e.__e,e.__u&=-161,d.__h.length&&s.push(d),x&&(d.__E=d.__=null)}catch(T){e.__v=null,u||n!=null?(e.__e=l,e.__u|=u?160:32,n[n.indexOf(l)]=null):(e.__e=i.__e,e.__k=i.__k),ze.__e(T,e,i)}else n==null&&e.__v===i.__v?(e.__k=i.__k,e.__e=i.__e):e.__e=tb(i.__e,e,i,r,o,n,s,u,a);(c=ze.diffed)&&c(e)}function Bf(t,e,i){e.__d=void 0;for(var r=0;r<i.length;r++)zs(i[r],i[++r],i[++r]);ze.__c&&ze.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(n){n.call(o)})}catch(n){ze.__e(n,o.__v)}})}function tb(t,e,i,r,o,n,s,l,u){var a,c,d,g,p,f,m,x=i.props,b=e.props,P=e.type;if(P==="svg"?o="http://www.w3.org/2000/svg":P==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),n!=null){for(a=0;a<n.length;a++)if((p=n[a])&&"setAttribute"in p==!!P&&(P?p.localName===P:p.nodeType===3)){t=p,n[a]=null;break}}if(t==null){if(P===null)return document.createTextNode(b);t=document.createElementNS(o,P,b.is&&b),n=null,l=!1}if(P===null)x===b||l&&t.data===b||(t.data=b);else{if(n=n&&Bo.call(t.childNodes),x=i.props||Ur,!l&&n!=null)for(x={},a=0;a<t.attributes.length;a++)x[(p=t.attributes[a]).name]=p.value;for(a in x)if(p=x[a],a!="children"){if(a=="dangerouslySetInnerHTML")d=p;else if(a!=="key"&&!(a in b)){if(a=="value"&&"defaultValue"in b||a=="checked"&&"defaultChecked"in b)continue;an(t,a,null,p,o)}}for(a in b)p=b[a],a=="children"?g=p:a=="dangerouslySetInnerHTML"?c=p:a=="value"?f=p:a=="checked"?m=p:a==="key"||l&&typeof p!="function"||x[a]===p||an(t,a,p,x[a],o);if(c)l||d&&(c.__html===d.__html||c.__html===t.innerHTML)||(t.innerHTML=c.__html),e.__k=[];else if(d&&(t.innerHTML=""),Vf(t,Hs(g)?g:[g],e,i,r,P==="foreignObject"?"http://www.w3.org/1999/xhtml":o,n,s,n?n[0]:i.__k&&Oi(i,0),l,u),n!=null)for(a=n.length;a--;)n[a]!=null&&kf(n[a]);l||(a="value",f!==void 0&&(f!==t[a]||P==="progress"&&!f||P==="option"&&f!==x[a])&&an(t,a,f,x[a],o),a="checked",m!==void 0&&m!==t[a]&&an(t,a,m,x[a],o))}return t}function zs(t,e,i){try{typeof t=="function"?t(e):t.current=e}catch(r){ze.__e(r,i)}}function ja(t,e,i){var r,o;if(ze.unmount&&ze.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||zs(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){ze.__e(n,e)}r.base=r.__P=null}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&ja(r[o],e,i||typeof t.type!="function");i||t.__e==null||kf(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function ib(t,e,i){return this.constructor(t,i)}Bo=$f.slice,ze={__e:function(t,e,i,r){for(var o,n,s;e=e.__;)if((o=e.__c)&&!o.__)try{if((n=o.constructor)&&n.getDerivedStateFromError!=null&&(o.setState(n.getDerivedStateFromError(t)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,r||{}),s=o.__d),s)return o.__E=o}catch(l){t=l}throw t}},vf=0,Mt.prototype.setState=function(t,e){var i;i=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Si({},this.state),typeof t=="function"&&(t=t(Si({},i),this.props)),t&&Si(i,t),t!=null&&this.__v&&(e&&this._sb.push(e),lu(this))},Mt.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),lu(this))},Mt.prototype.render=Wo,Ti=[],wf=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ha=function(t,e){return t.__v.__b-e.__v.__b},io.__r=0,Ms=0,Oa=du(!1),za=du(!0);var Wf=function(t,e,i,r){var o;e[0]=0;for(var n=1;n<e.length;n++){var s=e[n++],l=e[n]?(e[0]|=s?1:2,i[e[n++]]):e[++n];s===3?r[0]=l:s===4?r[1]=Object.assign(r[1]||{},l):s===5?(r[1]=r[1]||{})[e[++n]]=l:s===6?r[1][e[++n]]+=l+"":s?(o=t.apply(l,Wf(t,l,i,["",null])),r.push(o),l[0]?e[0]|=2:(e[n-2]=0,e[n]=o)):r.push(l)}return r},cu=new Map,E=(function(t){var e=cu.get(this);return e||(e=new Map,cu.set(this,e)),(e=Wf(this,e.get(t)||(e.set(t,e=function(i){for(var r,o,n=1,s="",l="",u=[0],a=function(g){n===1&&(g||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,g,s):n===3&&(g||s)?(u.push(3,g,s),n=2):n===2&&s==="..."&&g?u.push(4,g,0):n===2&&s&&!g?u.push(5,0,!0,s):n>=5&&((s||!g&&n===5)&&(u.push(n,0,s,o),n=6),g&&(u.push(n,g,0,o),n=6)),s=""},c=0;c<i.length;c++){c&&(n===1&&a(),a(c));for(var d=0;d<i[c].length;d++)r=i[c][d],n===1?r==="<"?(a(),u=[u],n=3):s+=r:n===4?s==="--"&&r===">"?(n=1,s=""):s=r+s[0]:l?r===l?l="":s+=r:r==='"'||r==="'"?l=r:r===">"?(a(),n=1):n&&(r==="="?(n=5,o=s,s=""):r==="/"&&(n<5||i[c][d+1]===">")?(a(),n===3&&(u=u[0]),n=u,(u=u[0]).push(2,0,n),n=0):r===" "||r==="	"||r===`
`||r==="\r"?(a(),n=2):s+=r),n===3&&s==="!--"&&(n=4,u=u[0])}return a(),u}(t)),e),arguments,[])).length>1?e:e[0]}).bind(If);const rb=["String","Number","Object","Array","Boolean","Date"];function la(t){return t&&typeof t=="object"}function Ra(t,e,i){Object.defineProperty(t,e,{value:i,enumerable:!1,configurable:!0})}function hu(t,e,i){Ra(t,"__key",e),Ra(t,"__parent",i)}const js={computedStack:[],trackerSymbol:Symbol("tracker")};let ar=null;const ro=Symbol();function Ga(){if(ar){for(const t of ar)t(),t[ro]=!1;ar=null}}function pu(t,e){t[ro]||(ar===null&&(ar=[],e===!0?queueMicrotask(Ga):setTimeout(Ga,e)),ar.push(t))}const{computedStack:sn,trackerSymbol:ua}=js,da=Symbol("__observed"),si=Symbol("modifiedProperty"),{computedStack:gu,trackerSymbol:nb}=js;var ob={observe:function t(e,i={}){const{props:r,ignore:o,batch:n,deep:s=!0,bubble:l,bind:u}=i;if(e[da])return e;const a=f=>f!==da&&(r==null||r instanceof Array&&r.includes(f))&&(o==null||o instanceof Array&&!o.includes(f));function c(f,m,x){if(m==="__handler")Ra(f,"__handler",x);else if(a(m)){if(Array.isArray(f)&&m==="length"||function(b,P,C){const w=new Map;return function y(N,B,F){if(N===B)return!1;let $=typeof N;if($!==typeof B)return!0;switch($){case"undefined":case"boolean":case"string":case"function":default:return!0;case"number":return isNaN(N)!==isNaN(B)||Math.abs(N-B)>Number.EPSILON;case"object":return N==null||B==null||(F==="by-value"&&(N instanceof Boolean||N instanceof Number||N instanceof String)?N.valueOf()!==B.valueOf():Array.isArray(N)?function(T,H,ee){if(!Array.isArray(H)||T.length!==H.length)return!0;if(w.has(T)||w.has(H)){if(w.has(T)&&w.get(T).has(H)||w.has(H)&&w.get(H).has(T))return!1;w.has(T)||w.set(T,new Set),w.get(T).add(H)}for(let te=0,Ne=T.length;te<Ne;te++)if(y(T[te],H[te],ee))return!0;return!1}(N,B,F):F==="by-reference"||function(T,H,ee="by-value"){if(Object.getPrototypeOf(T)!==Object.getPrototypeOf(H))return!0;for(let te in T)if(!(te in H))return!0;for(let te in H)if(!(te in T))return!0;if(w.has(T)||w.has(H)){if(w.has(T)&&w.get(T).has(H)||w.has(H)&&w.get(H).has(T))return!1;w.has(T)||w.set(T,new Set),w.get(T).add(H)}for(let te in T)if(y(T[te],H[te],ee))return!0;return!1}(N,B,F))}return!0}(b,P,void 0)}(f[m],x)){const b=m!==si&&s&&la(x),P=f[m];f[m]=b?t(x,i):x,b&&l&&hu(f[m],m,f);const C=[m];let w=f;for(;w&&(!w.__handler||w.__handler(C,x,P,g)!==!1);)w.__key&&w.__parent?(C.unshift(w.__key),w=w.__parent):w=null;const y=d.get(m);if(y)for(const N of y){const B=N[ua],F=B&&B.get(f),$=F&&F.has(m);N.__disposed||B&&!$?y.delete(N):N!==sn[0]&&(n!==void 0&&n!==!1?(pu(N,n),N[ro]=!0):N())}if(m!==si){f[si]=m;const N=d.get(si);if(N)for(const B of N){const F=B[ua],$=F&&F.get(f),T=$&&$.has(si);B.__disposed||F&&!T?N.delete(B):B!==sn[0]&&(n!==void 0&&n!==!1?(pu(B,n),B[ro]=!0):B())}}}}else f[m]=x}s&&Object.entries(e).forEach(function([f,m]){la(m)&&a(f)&&(e[f]=t(m,i),l&&hu(e[f],f,e))});const d=new Map,g=new Proxy(e,{get(f,m){if(m===da)return!0;if(a(m)&&sn.length){const x=sn[0],b=x[ua];if(b){let C=b.get(e);C||(C=new Set,b.set(e,C)),C.add(m)}let P=d.get(m);P||(P=new Set,d.set(m,P)),P.add(x)}return e[m]},set:(f,m,x)=>(c(e,m,x),!0),defineProperty(f,m,x){if(m==="__handler")throw new Error("Don't track bubble handlers");if(!a(m))return Reflect.defineProperty(e,m,x);if(!Array.isArray(e)||m==="length"){"value"in x&&s&&la(x.value)&&((x={...x}).value=t(x.value,i));const b=Reflect.defineProperty(e,m,x);return m!==si&&(e[si]=m),b}return!1},deleteProperty(f,m){if(m===si)throw new Error('internal property Symbol("modifiedProperty") must not be deleted');return m in e&&c(e,m,void 0),Reflect.deleteProperty(f,m)}});var p;return u&&(p=e,Object.getOwnPropertyNames(p).concat(Object.getPrototypeOf(p)&&rb.indexOf(Object.getPrototypeOf(p).constructor.name)<0?Object.getOwnPropertyNames(Object.getPrototypeOf(p)):[]).filter(f=>f!=="constructor"&&typeof p[f]=="function")).forEach(f=>e[f]=e[f].bind(g)),g},modifiedProperty:si,computed:function(t,{autoRun:e=!0,callback:i,bind:r,disableTracking:o=!1}={}){function n(u,a=[]){const c=i||l;o||(c[nb]=new WeakMap),gu.unshift(c),a=a.length>0?[...a,s]:[s];const d=u?u():r?t.apply(r,a):t(...a);return gu.shift(),d}const s={computeAsync:n},l=(...u)=>n(null,u);return e&&l(),l},dispose:function(t){return t[js.trackerSymbol]=null,t.__disposed=!0},batch:Ga};const ab=["Id","Classes","Style","x","y","z","Width","Height","Title","closeable","View","WidgetList"],sb=["Id","Classes","Style","x","y","z","Width","Height","Title","closeable","minWidth","minHeight","maxWidth","maxHeight","View","WidgetList"],lb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","hidden","View","WidgetList"],ub=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","hidden","View","WidgetList"],db=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],cb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],hb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],pb=["Id","Type","Classes","Style","x","y","Width","Height","Value","View","WidgetList"],gb=["Id","Type","Classes","Style","x","y","Width","Height","Value","View","WidgetList"],fb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","ImageScaling","ImageAlignment","WidgetList","View"],mb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","PermissionsPolicy","allowsFullscreen","SandboxPermissions","ReferrerPolicy","WidgetList","View"],xb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Color","disabled","onClick","View"],_b=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Color","Options","disabled","onInput","View"],Sb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],bb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],yb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],vb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],wb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],$b=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Hashmarks","View"],kb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Ib=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],Pb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Vb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Cb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Bb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Wb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Nb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Tb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Db=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Fb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Ub=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Ab=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View","Placeholder","onDrop"],Lb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Eb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Options","Placeholder","View"],Xb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],Mb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","onDrop","View","WidgetList"],Hb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","View","WidgetList"],Ob=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Expansion","View","WidgetList"],zb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View","WidgetList"],jb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View","WidgetList"],Rb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View","WidgetList"],Gb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View","WidgetList"],Yb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","List","ItemRenderer","Placeholder","selectedIndices","SelectionLimit","onSelectionChange","onItemSelected","onItemDeselected","View","WidgetList"],Zb=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","List","ItemRenderer","Placeholder","LabelOfItem","ContentListOfItem","selectedPaths","SelectionLimit","SelectionMode","onSelectionChange","onItemSelected","onItemDeselected","onItemDoubleClicked","expandedPaths","Indentation","onExpansionChange","onItemExpanded","onItemCollapsed","View","WidgetList"],qb=["Id","Type","Classes","Style","x","y","Width","Height","Substitute","Placeholder","View","WidgetList"];let fu,mu,xu,_u,Su,bu,yu,vu,wu,$u,ku,Iu,Pu,Vu,Cu,Bu,Wu,Nu,Tu,Du,Fu,Uu,Au,Lu,Eu,Xu,Mu,Hu,Ou,zu,ju,Ru,Gu,Yu,Zu,qu,Ju,Ku,Qu,ed,td,id,rd,nd,od,ad,sd,ld,ud,dd,cd,hd,pd,gd,fd,md,xd,_d,Sd,bd,yd,vd,wd,$d,kd,Id,Pd,Vd,Cd,Bd,Wd,Nd,Td,Dd,Fd,Ud,Ad,Ld,Ed,Xd,Md,Hd,Od,zd,jd,Rd,Gd,Yd,Zd,qd,Jd,Kd,Qd,ec,tc,ic,rc,nc,oc,ac,sc,lc,uc,dc,cc,hc,pc,gc,fc,mc,xc,_c,Sc,bc,A=t=>t;const{observe:Jb,computed:Kb,dispose:zw}=ob,ca=document.createElement("style");function Kt(t){let e=/^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(t);if(e==null)throw new Error(t);{let i=new Error(e[2]);throw i.name=e[1],i}}function ln(t){Kt("ReadOnlyProperty: property "+Tt(t)+" must not be set")}ca.setAttribute("id","ProtoUX"),ca.innerHTML=`/*******************************************************************************
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

`,document.head.appendChild(ca);const yc=new WeakMap;function no(t,e){let i,r=yc.get(t);if(r!=null)return r;function o(){}function n(C){C.stopImmediatePropagation(),C.preventDefault()}let s,l,{onlyFrom:u,neverFrom:a,Threshold:c=0,consumingEvent:d=!0,onDragStarted:g=o,onDragContinued:p=o,onDragFinished:f=o,onDragCancelled:m=o}=e,x="idle";function b(C){d&&n(C),x="busy";let{pageX:w,pageY:y}=C;g(Math.round(w),Math.round(y),Math.round(w-s),Math.round(y-l),C)}function P(C){if(d&&n(C),x!=="idle"){const w=x==="busy";x="idle",C.target.releasePointerCapture(C.pointerId),w&&m(Math.round(s),Math.round(l),0,0,C)}i=void 0}return r=function(C){switch(C.type){case"pointerdown":return function(w){w.isPrimary&&(u!=null&&(u instanceof HTMLElement&&u!==w.target||typeof u=="string"&&!w.target.matches(u))||a!=null&&(a instanceof HTMLElement&&a===w.target||typeof a=="string"&&w.target.matches(a))||(w.button===0?(w.target.setPointerCapture(w.pointerId),i=w.target,x==="idle"&&({pageX:s,pageY:l}=w,c>0?x="observing":b(w))):P(w)))}(C);case"pointermove":return function(w){if(x!=="idle"&&w.target!==i&&(w.target.setPointerCapture(w.pointerId),i=w.target,console.log("PointerTarget changed")),x==="observing"){let{pageX:y,pageY:N}=w;(s-y)**2+(l-N)**2>=c**2&&b(w)}else x==="busy"&&function(y){d&&n(y);let{pageX:N,pageY:B}=y;p(Math.round(N),Math.round(B),Math.round(N-s),Math.round(B-l),y)}(w)}(C);case"pointerup":return function(w){x==="busy"?function(y){d&&n(y),x="idle";let{pageX:N,pageY:B}=y;f(Math.round(N),Math.round(B),Math.round(N-s),Math.round(B-l),y),i=void 0}(w):P(w)}(C);case"pointercancel":return function(w){P(w)}(C)}},r.abortDragging=P,yc.set(t,r),r}const vc=new WeakMap;function wc(t,e){let i,r=vc.get(t);if(r!=null)return r;function o(){}function n(F){F.stopImmediatePropagation(),F.preventDefault()}let s,l,{onlyFrom:u,neverFrom:a,Threshold:c=0,consumingEvent:d=!0,onDragStarted:g=o,onDragContinued:p=o,onDragFinished:f=o,onDragCancelled:m=o,onClicked:x=o,MultiClickTimeSpan:b=300,onMultiClick:P=o}=e,C="idle",w=0,y=0;function N(F){d&&n(F),C="busy";let{pageX:$,pageY:T}=F;g(Math.round($),Math.round(T),Math.round($-s),Math.round(T-l),F)}function B(F){if(d&&n(F),C!=="idle"){const $=C==="busy";C="idle",F.target.releasePointerCapture(F.pointerId),$&&m(Math.round(s),Math.round(l),0,0,F)}i=void 0}return r=function(F){switch(F.type){case"pointerdown":return function($){$.isPrimary&&(u!=null&&(u instanceof HTMLElement&&u!==$.target||typeof u=="string"&&!$.target.matches(u))||a!=null&&(a instanceof HTMLElement&&a===$.target||typeof a=="string"&&$.target.matches(a))||($.button===0?($.target.setPointerCapture($.pointerId),i=$.target,C==="idle"&&({pageX:s,pageY:l}=$,c>0?C="observing":N($))):B($)))}(F);case"pointermove":return function($){if(C!=="idle"&&$.target!==i&&($.target.setPointerCapture($.pointerId),i=$.target,console.log("PointerTarget changed")),C==="busy"&&function(T){d&&n(T);let{pageX:H,pageY:ee}=T;p(Math.round(H),Math.round(ee),Math.round(H-s),Math.round(ee-l),T)}($),C==="observing"){let{pageX:T,pageY:H}=$;(s-T)**2+(l-H)**2>=c**2&&N($)}}(F);case"pointerup":return function($){if(C==="busy"&&function(T){d&&n(T),C="idle";let{pageX:H,pageY:ee}=T;f(Math.round(H),Math.round(ee),Math.round(H-s),Math.round(ee-l),T),i=void 0}($),C==="observing"){C="idle",x(s,l,$);let T=Date.now();T-w<b?(y+=1,y>1&&P(y,s,l,$)):y=1,w=T}}(F);case"pointercancel":return function($){B($)}(F)}},r.abortDragging=B,vc.set(t,r),r}let xe=class Ya{constructor(e="PUX"){this._IdPrefix=void 0,this._ImageFolder="",this._ScreenSet={},this._DialogSet={},this._observed=Jb({},{deep:!1}),this._UpdaterList=[],this._StartScreen={},this._openScreen={},this._openDialogs=[],this._View=void 0,this._IdPrefix=e}get ImageFolder(){return this._ImageFolder}set ImageFolder(e){(e=e.trim())===""||e.endsWith("/")||(e+="/"),this._ImageFolder=e}get Style(){const e=document.getElementById(this._IdPrefix+"-Style");return e==null?"":e.innerHTML}set Style(e){const i=this._IdPrefix+"-Style";let r=this._ImageFolder;r!==""&&(e=e.replace(/url\("\/images\//g,'url("'+r));let o=document.getElementById(i);o==null&&(o=document.createElement("style"),o.setAttribute("id",i),document.head.appendChild(o)),o.innerHTML=e}get ScreenSet(){return this._ScreenSet}set ScreenSet(e){this._ScreenSet=e;for(let i in e){this._StartScreen=e[i];break}for(let i in e)Object.assign(e[i],{dX:0,dY:0,dW:0,dH:0})}get observed(){return this._observed}set observed(e){ln("observed")}ScreenNamed(e){return this._ScreenSet[e]}existingScreenNamed(e){const i=this._ScreenSet[e];return i==null&&Kt("NoSuchScreen: a screen named "+Tt(e)+" does not exist"),i}packScreen(e,i=10,r){r==null&&(r=i);const o=this.existingScreenNamed(e);if(o.packedGeometry==null)return;let{x:n,y:s,Width:l,Height:u}=o.packedGeometry;n-=i,l+=2*i,s-=r,u+=2*r,o.Width=l,o.Height=u,o.WidgetList.forEach(a=>{a.hidden||(a.x-=n,a.y-=s)})}openScreen(e){const i=this.existingScreenNamed(e);this._openScreen!==i&&(this._openScreen=i,this.rerender())}closeScreen(e){const i=this.ScreenNamed(e);i!=null&&this._openScreen===i&&(this._openScreen=this._StartScreen,this.rerender())}ScreenIsOpen(e){const i=this.existingScreenNamed(e);return this._openScreen===i}startWithScreen(e){this._StartScreen=this.existingScreenNamed(e),this.openScreen(e)}get StartScreen(){return this._StartScreen}set StartScreen(e){ln("StartScreen")}extractAllDialogs(){for(let i in this._ScreenSet){const r=this._ScreenSet[i].WidgetList;for(let o=r.length-1;o>=0;o--){const n=r[o];if(n.Type==="Dialog"||n.Type==="ResizableDialog"){if(!(typeof(e=n.Name)=="string"||e instanceof String)||YS.test(e.valueOf())){console.error('Dialog without name in screen "'+i+'"');continue}if(n.Name in this._DialogSet){console.error('a dialog with name "'+n.Name+'" has already been registered');continue}this._DialogSet[n.Name]=n,r.splice(o,1)}}}var e}DialogNamed(e){return this._DialogSet[e]}existingDialogNamed(e){const i=this._DialogSet[e];return i==null&&Kt("NoSuchDialog: a dialog named "+Tt(e)+" does not exist"),i}openDialog(e){const i=this.existingDialogNamed(e),r=this._openDialogs.indexOf(i);if(r>=0){if(r===this._openDialogs.length-1)return;this._openDialogs.splice(r,1)}this._openDialogs.push(i),this.rerender(),typeof i.onOpen=="function"&&i.onOpen(i)}closeDialog(e){let i=this.DialogNamed(e);if(i==null)return;const r=this._openDialogs.indexOf(i);r<0||(this._openDialogs.splice(r,1),this.rerender(),typeof i.onClose=="function"&&i.onClose(i))}DialogIsOpen(e){let i=this.existingDialogNamed(e);return this._openDialogs.indexOf(i)>=0}get openDialogs(){return this._openDialogs.slice()}set openDialogs(e){ln("openDialogs")}closeAllDialogs(){this._openDialogs.length=0,this.rerender()}DialogIsFrontMost(e){let i=this.existingDialogNamed(e);return this._openDialogs.indexOf(i)===this._openDialogs.length-1}bringDialogToFront(e){this.openDialog(e)}WidgetNamed(e){const i=this._ScreenSet;for(let r in i){const o=i[r].WidgetList;for(let n=0,s=o.length;n<s;n++)if(o[n].Name===e)return o[n]}}existingWidgetNamed(e){const i=this.WidgetNamed(e);return i==null&&Kt("NoSuchWidget: a widget named "+Tt(e)+" does not exist"),i}WidgetOnScreen(e,i){const r=i.WidgetList||[];for(let o=0,n=r.length;o<n;o++)if(r[o].Name===e)return r[o]}WidgetOnDialog(e,i){return this.WidgetOnScreen(e,i)}existingWidgetOnScreen(e,i){const r=this.WidgetOnScreen(e,i);return r==null&&Kt("NoSuchWidget: screen "+Tt(i.Name)+" does not contain a widget named "+Tt(e)),r}existingWidgetOnDialog(e,i){const r=this.WidgetOnDialog(e,i);return r==null&&Kt("NoSuchWidget: dialog "+Tt(i.Name)+" does not contain a widget named "+Tt(e)),r}WidgetInContainer(e,i){const r=i.WidgetList||[];for(let o=0,n=r.length;o<n;o++)if(r[o].Name===e)return r[o]}existingWidgetInContainer(e,i){const r=this.WidgetInContainer(e,i);return r==null&&Kt("NoSuchWidget: could not find widget named "+Tt(e)),r}stuff(e){for(let i in e){const r=this.ScreenNamed(i);if(r!=null){this.stuffScreen(r,e[i]);continue}const o=this.DialogNamed(i);o==null?Kt("NoSuchScreenOrDialog: no screen or dialog named "+Tt(i)+" found"):this.stuffDialog(o,e[i])}}stuffScreen(e,i){for(let r in i){let o=this.existingWidgetOnScreen(r,e);this.stuffWidget(o,i[r])}}stuffDialog(e,i){for(let r in i){let o=this.existingWidgetOnDialog(r,e);this.stuffWidget(o,i[r])}}stuffWidget(e,i){if(this.ValueIsStuff(i)){const r=this.existingScreenNamed(i.from);e.WidgetList=(e.WidgetList||[]).concat(i.with.map(o=>this.existingWidgetOnScreen(o,r)))}else for(let r in i){const o=this.existingWidgetInContainer(r,e);this.stuffWidget(o,i[r])}}ValueIsStuff(e){return oa(e)&&Ma(e.from)&&Vo(e.with,Ma)}configure(e){for(let i in e){const r=this.ScreenNamed(i);if(r!=null){this.configureScreen(r,e[i]);continue}const o=this.DialogNamed(i);o==null?Kt("NoSuchScreenOrDialog: no screen or dialog named "+Tt(i)+" found"):this.configureDialog(o,e[i])}}configureScreen(e,i){for(let r in i)if(r==="self")this.configureWidget(e,i.self);else{const o=this.existingWidgetOnScreen(r,e);this.configureWidget(o,i[r])}}configureDialog(e,i){for(let r in i)if(r==="self")this.configureWidget(e,i.self);else{const o=this.existingWidgetOnDialog(r,e);this.configureWidget(o,i[r])}}configureWidget(e,i){for(let r in i){let o=i[r];if(oa(o)&&Es(o.Updater))this._UpdaterList.push(Kb(()=>{this.updateWidget(e,{[r]:o.Updater()})}));else{if(oa(o)&&e.WidgetList!=null){const n=this.WidgetInContainer(r,e);if(n!=null){this.configureWidget(n,o);continue}}e[r]=o}}}update(e){for(let i in e){const r=this.ScreenNamed(i);if(r!=null){this.updateScreen(r,e[i]);continue}const o=this.DialogNamed(i);o==null?Kt("NoSuchScreenOrDialog: no screen or dialog named "+Tt(i)+" found"):this.updateDialog(o,e[i])}}updateScreen(e,i){for(let r in i)if(r==="self")this.updateWidget(e,i.self);else{const o=this.existingWidgetOnScreen(r,e);this.updateWidget(o,i[r])}}updateDialog(e,i){for(let r in i)if(r==="self")this.updateWidget(e,i.self);else{const o=this.existingWidgetOnDialog(r,e);this.updateWidget(o,i[r])}}updateWidget(e,i){for(let o in i)e[o]=i[o];const r=e.View;r!=null&&r.rerender()}updatedFrom(e){return{Updater:e}}get View(){return this._View}set View(e){ln("View")}renderInto(e){(function(i,r,o){var n,s,l;ze.__&&ze.__(i,r),n=r.__k,s=[],l=[],Os(r,i=r.__k=If(Wo,null,[i]),n||Ur,Ur,r.namespaceURI,n?null:r.firstChild?Bo.call(r.childNodes):null,s,n?n.__e:r.firstChild,!1,l),Bf(s,i,l)})(E(fu||(fu=A`<${0} ProtoUX=${0}/>`),Qb,this),e)}rerender(){this._View!=null&&this._View.rerender()}static registerWidgetView(e,i){Ya._WidgetViewRegistry[e]=i}static WidgetViewForType(e){return Ya._WidgetViewRegistry[e]}};xe._WidgetViewRegistry=Object.create(null);class Qb extends Mt{constructor(...e){super(...e),this.state={Value:0}}rerender(){this.setState({Value:this.state.Value+1})}render(e){let i=e.ProtoUX;i._View=this;const r=i._openScreen,o=i._openDialogs.slice(),n=o.pop(),s=(n==null?void 0:n.isModal)==1;return E(mu||(mu=A`<div style="
        display:block; position:absolute;
        left:0px; top:0px; right:0px; bottom:0px;
      ">
        <${0} ProtoUX=${0} Screen=${0}/>
        ${0}
        ${0}
        ${0}
      </div>`),ey,i,r,o.map(l=>E(xu||(xu=A`<${0} ProtoUX=${0} Dialog=${0} key=${0}/>`),$c,i,l,l.Name)),s?E(_u||(_u=A`<${0}/>`),ty):"",n==null?"":E(Su||(Su=A`<${0} ProtoUX=${0} Dialog=${0} key=${0}/>`),$c,i,n,n.Name))}}class ey extends Mt{render(e){const i=e.Screen;i.View=this;const{Id:r,Classes:o,Style:n,Width:s,Height:l,WidgetList:u}=i;return E(bu||(bu=A`<div class=${0} id=${0} style="
        width:${0}px; height:${0}px; ${0}
      ">
        ${0}
      </div>`),pe("PUX Screen",o),r,s,l,n||"",u.map(a=>E(yu||(yu=A`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`),le,a,e.ProtoUX,a.Name)))}}class ty extends Mt{render(e){const{Style:i}=e;return E(vu||(vu=A`<div class="PUX ModalLayer" style="
        ${0};
        display:block; position:absolute;
        left:0px; top:0px; right:0px; bottom:0px;
      " onClick=${0}/>`),i||"",function(r){r.stopImmediatePropagation(),r.preventDefault()})}}class $c extends Mt{render(e){const i=e.Dialog;return i.Type==="ResizableDialog"?E(wu||(wu=A`<${0} Dialog=${0} ProtoUX=${0}/>`),ry,i,e.ProtoUX):E($u||($u=A`<${0}  Dialog=${0} ProtoUX=${0}/>`),iy,i,e.ProtoUX)}}class iy extends Mt{constructor(...e){super(...e),this.state={Value:0}}rerender(){this.setState({Value:this.state.Value+1})}render(e){const i=e.Dialog;i.View=this;const r=(C,w,y,N)=>{i.x=i._DragOffset.x+y,i.y=i._DragOffset.y+N,i.z=20001e3,e.ProtoUX.View.rerender()},o=(C,w,y,N)=>{r(0,0,y,N),i.z=2e6,e.ProtoUX.bringDialogToFront(i.Name)},n=no(i,{neverFrom:".CloseButton",Threshold:4,onDragStarted:(C,w,y,N)=>{i._DragOffset={x:i.x,y:i.y},r(0,0,y,N)},onDragContinued:r,onDragFinished:o,onDragCancelled:o}),{Id:s,Classes:l,Style:u,x:a,y:c,z:d,Width:g,Height:p,Title:f,closeable:m,WidgetList:x}=i,b=de(i,ab),P=`left:${a}px; top:${c}px; width:${g}px; height:${p}px; right:auto; bottom:auto;`;return E(ku||(ku=A`<div class=${0} id=${0} style="
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
      </>`),pe("PUX Dialog",l),s,u||"",P,d||2e6,b,n,n,n,n,f,e.ProtoUX._ImageFolder,m===!1?"hidden":"visible",function(C){C.stopImmediatePropagation(),C.preventDefault(),m!==!1&&e.ProtoUX.closeDialog(i.Name)},(x||[]).map(C=>E(Iu||(Iu=A`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`),le,C,e.ProtoUX,C.Name)))}}class ry extends Mt{constructor(...e){super(...e),this.state={Value:0}}rerender(){this.setState({Value:this.state.Value+1})}render(e){const i=e.Dialog;i.View=this;let{Id:r,Classes:o,Style:n,x:s,y:l,z:u,Width:a,Height:c,Title:d,closeable:g,minWidth:p,minHeight:f,maxWidth:m,maxHeight:x,WidgetList:b}=i,P=de(i,sb);Fi("minimal width",p),Fi("maximal width",m),Fi("minimal height",f),Fi("maximal height",x),p==null&&(p=120),m==null&&(m=1/0),f==null&&(f=80),x==null&&(x=1/0),p=Math.max(0,p),m=Math.max(p,m),f=Math.max(0,f),x=Math.max(f,x);const C=($,T,H,ee)=>{i._DragMode==="drag"?y(H,ee):N(H,ee),i.z=20001e3,e.ProtoUX.View.rerender()},w=($,T,H,ee)=>{C(0,0,H,ee),i.z=2e6,e.ProtoUX.bringDialogToFront(i.Name)},y=($,T)=>{i.x=i._DragOffset.x+$,i.y=i._DragOffset.y+T},N=($,T)=>{switch(i._DragMode){case"resize-sw":let H=Math.max(p,Math.min(i._DragOffset.Width-$,m));i.x=i._DragOffset.x-($=H-i._DragOffset.Width),i.Width=i._DragOffset.Width+$;break;case"resize-se":i.Width=Math.max(p,Math.min(i._DragOffset.Width+$,m))}i.Height=Math.max(f,Math.min(i._DragOffset.Height+T,x))},B=no(i,{onlyFrom:".Titlebar,.leftResizer,.middleResizer,.rightResizer",neverFrom:".CloseButton",Threshold:4,onDragStarted:($,T,H,ee,te)=>{let Ne=te.target.classList;switch(i._DragMode=void 0,!0){case Ne.contains("leftResizer"):i._DragMode="resize-sw";break;case Ne.contains("middleResizer"):i._DragMode="resize-s";break;case Ne.contains("rightResizer"):i._DragMode="resize-se";break;default:i._DragMode="drag"}i._DragOffset={x:i.x,Width:i.Width,y:i.y,Height:i.Height},C(0,0,H,ee)},onDragContinued:C,onDragFinished:w,onDragCancelled:w}),F=`left:${s}px; top:${l}px; width:${a}px; height:${c}px; right:auto; bottom:auto;`;return E(Pu||(Pu=A`<div class=${0} id=${0} style="
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
      </>`),pe("PUX ResizableDialog",o),r,n||"",F,u||2e6,P,(b||[]).map($=>E(Vu||(Vu=A`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`),le,$,e.ProtoUX,$.Name)),B,B,B,B,d,e.ProtoUX._ImageFolder,g===!1?"hidden":"visible",function($){$.stopImmediatePropagation(),$.preventDefault(),g!==!1&&e.ProtoUX.closeDialog(i.Name)},B,B,B,B,B,B,B,B,B,B,B,B)}}let le=class Za extends Mt{constructor(...e){super(...e),this.state={Value:0}}rerender(){this.setState({Value:this.state.Value+1})}render(e){const i=e.Widget;if(i.View=this,e.hidden==1||i.hidden==1)return"";const{Id:r,Classes:o,Style:n,x:s,y:l,Width:u,Height:a,WidgetList:c}=i,d=de(i,lb),g=s!=null&&u!=null&&l!=null&&a!=null?`left:${s}px; top:${l}px; width:${u}px; height:${a}px; right:auto; bottom:auto;`:"";switch(i.Type){case"Group":return E(Cu||(Cu=A`<div class="PUX Widget ${0}" id=${0} style="${0} ${0}" ...${0}>
            ${0}
          </div>`),o,r,g,n||"",d,(c||[]).map(f=>E(Bu||(Bu=A`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`),Za,f,e.ProtoUX,f.Name)));case"Box":return E(Wu||(Wu=A`<div class="PUX Widget ${0}" id=${0} style="
            ${0} ${0}
          " ...${0} key=${0}/>`),o,r,g,n||"",d,i.Name);default:const p=xe.WidgetViewForType(i.Type);if(p==null){const{Id:f,Classes:m,Style:x,Value:b,WidgetList:P}=i,C=de(i,ub);return E(Nu||(Nu=A`<div class="PUX Widget ${0}" id=${0} style="
              ${0} ${0}
            " ...${0}>
              ${0}
              ${0}
            </div>`),m,f,g,x||"",C,b||"",(P||[]).map(w=>E(Tu||(Tu=A`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`),Za,w,e.ProtoUX,w.Name)))}return E(Du||(Du=A`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`),p,i,e.ProtoUX,i.Name)}}};xe.registerWidgetView("horizontalSeparator",class extends le{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u}=e,a=de(e,db),c=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return E(Fu||(Fu=A`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}/>`),pe("PUX horizontalSeparator Widget",r),i,c,o||"",a)}}),xe.registerWidgetView("verticalSeparator",class extends le{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u}=e,a=de(e,cb),c=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return E(Uu||(Uu=A`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}/>`),pe("PUX verticalSeparator Widget",r),i,c,o||"",a)}}),xe.registerWidgetView("Badge",class extends le{render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a}=e,c=de(e,hb);const d=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";switch(a=(""+(a||"")).trim(),!0){case a==="":return"";case a.length>1:a="#";default:return E(Au||(Au=A`<div class=${0} id=${0} style="
          ${0} ${0}
        " ...${0}>${0}</div>`),pe("PUX Badge Widget",r),i,d,o||"",c,a)}}}),xe.registerWidgetView("HTMLView",class extends le{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a}=e,c=de(e,pb),d=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return E(Lu||(Lu=A`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}
        dangerouslySetInnerHTML=${0}
      />`),pe("PUX HTMLView Widget",r),i,d,o||"",c,{__html:a})}}),xe.registerWidgetView("TextView",class extends le{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a}=e,c=de(e,gb),d=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return E(Eu||(Eu=A`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>${0}</>`),pe("PUX TextView Widget",r),i,d,o||"",c,a)}}),xe.registerWidgetView("ImageView",class extends le{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,ImageScaling:c,ImageAlignment:d}=e,g=de(e,fb),p=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return E(Xu||(Xu=A`<img class=${0} id=${0} style="
        ${0} ${0};
        object-fit:${0};
        object-position:${0};
      " ...${0} src=${0}/>`),pe("PUX ImageView Widget",r),i,p,o||"",c==="stretch"?"fill ":c,d,g,a)}}),xe.registerWidgetView("WebView",class extends le{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,PermissionsPolicy:c,allowsFullscreen:d,SandboxPermissions:g,ReferrerPolicy:p}=e,f=de(e,mb),m=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return E(Mu||(Mu=A`<iframe class=${0} id=${0} style="
        ${0} ${0}
      " ...${0} src=${0}
        allow=${0} allowfullscreen=${0}
        sandbox=${0}
        referrerpolicy=${0}
      />`),pe("PUX WebView Widget",r),i,m,o||"",f,a,c,d,g||"allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-same-origin allow-scripts",p)}}),xe.registerWidgetView("Icon",class extends le{render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Color:c,disabled:d,onClick:g}=e,p=de(e,xb);const f=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let m=t.ProtoUX.ImageFolder;return a!=null&&a.trim()!==""&&(a=a.trim().replace(/url\("\/images\//g,'url("'+m)),E(Hu||(Hu=A`<div class=${0} id=${0} style="
        ${0} ${0}
      " disabled=${0}><div style="
        display:block; position:absolute;
        left:0px; top:0px; width:100%; height:100%;
        -webkit-mask-image:${0};         mask-image:${0};
        -webkit-mask-size:contain;           mask-size:contain;
        -webkit-mask-position:center center; mask-position:center center;
        background-color:${0};
      " onClick=${0} ...${0}/></>`),pe("PUX Icon Widget",r),i,f,o||"",d,a,a,c||"black",function(x){d==1?(x.stopPropagation(),x.preventDefault()):typeof g=="function"&&g(x)},p)}}),xe.registerWidgetView("PseudoDropDown",class extends le{render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Color:c,Options:d,disabled:g,onInput:p}=e,f=de(e,_b);const m=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let x=t.ProtoUX.ImageFolder;return a!=null&&a.trim()!==""&&(a=a.trim().replace(/url\("\/images\//g,'url("'+x)),E(Ou||(Ou=A`<div class=${0} id=${0} style="
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
      </div>`),pe("PUX PseudoDropDown Widget",r),i,m,o||"",a,a,c||"black",f,function(b){g==1?(b.stopPropagation(),b.preventDefault()):typeof p=="function"&&p(b)},Vo(d,Ma)?E(zu||(zu=A`
                <option value="" disabled selected>please select</option>
                ${0}
              `),(d||[]).map(b=>E(ju||(ju=A`<option>${0}</>`),b))):d)}}),xe.registerWidgetView("Button",class extends le{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a}=e,c=de(e,Sb),d=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return E(Ru||(Ru=A`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <button ...${0}>${0}</button>
      </div>`),pe("PUX Button Widget",r),i,d,o||"",c,a||"")}}),xe.registerWidgetView("Checkbox",class extends le{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a}=e,c=de(e,bb),d=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let{checked:g,indeterminate:p}=t;return g==null&&(g=a==1),p==null&&(p=a==null),E(Gu||(Gu=A`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <input type="checkbox" checked=${0} indeterminate=${0} ...${0}/>
      </div>`),pe("PUX Checkbox Widget",r),i,d,o||"",g,p,c)}}),xe.registerWidgetView("Radiobutton",class extends le{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a}=e,c=de(e,yb),d=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let{checked:g}=t;return g==null&&(g=a==1),E(Yu||(Yu=A`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <input type="radio" checked=${0} ...${0}/>
      </div>`),pe("PUX Radiobutton Widget",r),i,d,o||"",g,c)}}),xe.registerWidgetView("Gauge",class extends le{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a}=e,c=de(e,vb),d=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return E(Zu||(Zu=A`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <meter value=${0} ...${0}/>
      </div>`),pe("PUX Gauge Widget",r),i,d,o||"",a||"",c)}}),xe.registerWidgetView("Progressbar",class extends le{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a}=e,c=de(e,wb),d=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return E(qu||(qu=A`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <progress value=${0} ...${0}/>
      </div>`),pe("PUX Progressbar Widget",r),i,d,o||"",a||"",c)}}),xe.registerWidgetView("Slider",class extends le{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Hashmarks:c}=e,d=de(e,$b);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Hashmarks",f=E(Ju||(Ju=A`\n<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>{const x=m.replace(/:.*$/,"").trim(),b=m.replace(/^[^:]+:/,"").trim();return E(Ku||(Ku=A`<option label=${0} value=${0}></option>`),x,b)}))),E(Qu||(Qu=A`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <input type="range" value=${0} ...${0}
          onBlur=${0} list=${0}
        />
      </div>${0}`),pe("PUX Slider Widget",r),i,g,o||"",a||"",d,this.rerender.bind(this),p,f)}}),xe.registerWidgetView("TextlineInput",class extends le{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=de(e,kb);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=E(ed||(ed=A`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>E(td||(td=A`<option value=${0}></option>`),m)))),E(id||(id=A`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="text" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),pe("PUX TextlineInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),xe.registerWidgetView("PasswordInput",class extends le{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a}=e,c=de(e,Ib);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const d=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return E(rd||(rd=A`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <input type="password" value=${0} ...${0}
          onBlur=${0}
        />
      </div>`),pe("PUX PasswordInput Widget",r),i,d,o||"",a||"",c,this.rerender.bind(this))}}),xe.registerWidgetView("NumberInput",class extends le{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=de(e,Pb);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=E(nd||(nd=A`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>E(od||(od=A`<option value=${0}></option>`),m)))),E(ad||(ad=A`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="number" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),pe("PUX NumberInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),xe.registerWidgetView("PhoneNumberInput",class extends le{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=de(e,Vb);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=E(sd||(sd=A`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>E(ld||(ld=A`<option value=${0}></option>`),m)))),E(ud||(ud=A`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="tel" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),pe("PUX PhoneNumberInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),xe.registerWidgetView("EMailAddressInput",class extends le{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=de(e,Cb);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=E(dd||(dd=A`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>E(cd||(cd=A`<option value=${0}></option>`),m)))),E(hd||(hd=A`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="email" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),pe("PUX EMailAddressInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),xe.registerWidgetView("URLInput",class extends le{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=de(e,Bb);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=E(pd||(pd=A`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>E(gd||(gd=A`<option value=${0}></option>`),m)))),E(fd||(fd=A`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="url" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),pe("PUX URLInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),xe.registerWidgetView("TimeInput",class extends le{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=de(e,Wb);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=E(md||(md=A`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>E(xd||(xd=A`<option value=${0}></option>`),m)))),E(_d||(_d=A`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="time" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),pe("PUX TimeInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),xe.registerWidgetView("DateTimeInput",class extends le{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=de(e,Nb);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=E(Sd||(Sd=A`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>E(bd||(bd=A`<option value=${0}></option>`),m)))),E(yd||(yd=A`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="datetime-local" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),pe("PUX DateTimeInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),xe.registerWidgetView("DateInput",class extends le{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=de(e,Tb);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=E(vd||(vd=A`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>E(wd||(wd=A`<option value=${0}></option>`),m)))),E($d||($d=A`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="date" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),pe("PUX DateInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),xe.registerWidgetView("WeekInput",class extends le{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=de(e,Db);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=E(kd||(kd=A`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>E(Id||(Id=A`<option value=${0}></option>`),m)))),E(Pd||(Pd=A`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="week" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),pe("PUX WeekInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),xe.registerWidgetView("MonthInput",class extends le{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=de(e,Fb);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=E(Vd||(Vd=A`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>E(Cd||(Cd=A`<option value=${0}></option>`),m)))),E(Bd||(Bd=A`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="month" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),pe("PUX MonthInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),xe.registerWidgetView("SearchInput",class extends le{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=de(e,Ub);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=E(Wd||(Wd=A`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>E(Nd||(Nd=A`<option value=${0}></option>`),m)))),E(Td||(Td=A`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="search" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),pe("PUX SearchInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),xe.registerWidgetView("FileInput",class extends le{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Placeholder:c,onDrop:d}=e,g=de(e,Ab);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const p=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return E(Dd||(Dd=A`<label class=${0} id=${0} style="
        ${0} ${0}
      " onDragEnter=${0} onDragOver=${0} onDrop=${0}>
        <input type="file" style="display:none" ...${0}
          onBlur=${0}
        />
        ${0}
        ${0}
      </label>`),pe("PUX FileInput Widget",r),i,p,o||"",function(f){f.stopPropagation(),f.preventDefault()},function(f){f.stopPropagation(),f.preventDefault()},function(f){f.stopPropagation(),f.preventDefault(),typeof d=="function"&&d(f)},g,this.rerender.bind(this),(a||"")===""?"":E(Fd||(Fd=A`<span>${0}</span>`),a),(a||"")===""?(c||"")===""?"":E(Ud||(Ud=A`<span>${0}</span>`),c):"")}}),xe.registerWidgetView("ColorInput",class extends le{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=de(e,Lb);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=E(Ad||(Ad=A`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>E(Ld||(Ld=A`<option value=${0}></option>`),m)))),E(Ed||(Ed=A`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="color" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),pe("PUX ColorInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),xe.registerWidgetView("DropDown",class extends le{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Options:c,Placeholder:d}=e,g=de(e,Eb);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const p=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return E(Xd||(Xd=A`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <select ...${0} onBlur=${0}>
          ${0}
          ${0}
        </select>
      </div>`),pe("PUX DropDown Widget",r),i,p,o||"",g,this.rerender.bind(this),d==null?"":E(Md||(Md=A`<option value="" disabled>${0}</option>`),d),(c||[]).map(f=>E(Hd||(Hd=A`<option selected=${0}>${0}</>`),f===a,f)))}}),xe.registerWidgetView("TextInput",class extends le{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a}=e,c=de(e,Xb);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const d=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return E(Od||(Od=A`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <textarea ...${0} value=${0}
          onBlur=${0}
        ></textarea>
      </div>`),pe("PUX TextInput Widget",r),i,d,o||"",c,a||"",this.rerender.bind(this))}}),xe.registerWidgetView("FileDropArea",class extends le{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,onDrop:a,WidgetList:c}=e,d=de(e,Mb),g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return E(zd||(zd=A`<label class=${0} id=${0} style="
        ${0} ${0}
      " onDragEnter=${0} onDragOver=${0} onDrop=${0}>
        <input type="file" ...${0}/>
        ${0}
      </label>`),pe("PUX FileDropArea Widget",r),i,g,o||"",function(p){p.stopPropagation(),p.preventDefault()},function(p){p.stopPropagation(),p.preventDefault()},function(p){p.stopPropagation(),p.preventDefault(),typeof a=="function"&&a(p)},d,(c||[]).map(p=>E(jd||(jd=A`<${0} Widget=${0} ProtoUX=${0}/>`),le,p,t.ProtoUX)))}}),xe.registerWidgetView("Accordion",class extends le{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,WidgetList:a}=e,c=de(e,Hb),d=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return E(Rd||(Rd=A`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>
        ${0}
      </>`),pe("PUX Accordion Widget",r),i,d,o||"",c,(a||[]).map(g=>E(Gd||(Gd=A`<${0} Widget=${0} ProtoUX=${0}/>`),Nf,g,t.ProtoUX)))}});class Nf extends le{render(e){const i=e.Widget;i.View=this;const{Id:r,Classes:o,Style:n,Height:s,Value:l,Expansion:u,WidgetList:a}=i,c=de(i,Ob),d=this;return E(Yd||(Yd=A`<div class=${0} id=${0} style="
        ${0}; left:0px; top:0px; width:100%; height:auto;
      " ...${0}>
        <div class="PUX Fold-Header">
          <img class="PUX Fold-Expander" src=${0} onClick=${0}
          />
          <div class="PUX Fold-Title">${0}</>
        </div>

        ${0}
      </>`),pe("PUX Fold Widget",o),r,n||"",c,u?`${e.ProtoUX._ImageFolder}caret-down.png`:`${e.ProtoUX._ImageFolder}caret-right.png`,function(){i.Expansion=!i.Expansion,d.rerender()},l,u?E(Zd||(Zd=A`<div class="PUX Fold-Content" style="
              height:${0}px; border:none;
            ">
              ${0}
            </>`),s,(a||[]).map(g=>E(qd||(qd=A`<${0} Widget=${0} ProtoUX=${0}/>`),le,g,e.ProtoUX))):"")}}xe.registerWidgetView("Fold",Nf),xe.registerWidgetView("Deck",class extends le{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,WidgetList:c}=e,d=de(e,zb),g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"",p=(c||[])[a==null?0:a<0?c.length+a:a]||(c||[])[0];return E(Jd||(Jd=A`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>
        ${0}
      </>`),pe("PUX Deck Widget",r),i,g,o||"",d,p==null?E(Kd||(Kd=A`<${0}><span>(no card)</span></>`),ny):E(Qd||(Qd=A`<${0} Widget=${0} ProtoUX=${0}/>`),Tf,p,t.ProtoUX))}});class Tf extends le{render(e){const i=e.Widget;i.View=this;const{Id:r,Classes:o,Style:n,WidgetList:s}=i,l=de(i,jb);return E(ec||(ec=A`<div class=${0} id=${0} style="
        border:none; ${0};
        left:0px; top:0px; right:0px; bottom:0px; width:auto; height:auto
      " ...${0}>
        ${0}
      </>`),pe("PUX Card Widget",o),r,n||"",l,(s||[]).map(u=>E(tc||(tc=A`<${0} Widget=${0} ProtoUX=${0}/>`),le,u,e.ProtoUX)))}}xe.registerWidgetView("Card",Tf),xe.registerWidgetView("TabStrip",class extends le{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,WidgetList:c}=e,d=de(e,Rb),g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"",p=(c||[])[a==null?0:a<0?c.length+a:a]||(c||[])[0],f=this;return E(ic||(ic=A`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>
        ${0}
      </>`),pe("PUX TabStrip Widget",r),i,g,o||"",d,(c||[]).map((m,x)=>E(rc||(rc=A`
          <${0} Widget=${0} ProtoUX=${0}
            active=${0}
            onClick=${0}
          />
        `),Df,m,t.ProtoUX,m===p,()=>function(b){f.base.dispatchEvent(new CustomEvent("ValueChange",{detail:b}))}(x))))}});class Df extends le{render(e){const i=e.Widget;i.View=this;const{Id:r,Classes:o,Style:n,Width:s,WidgetList:l}=i,u=de(i,Gb),{active:a,onClick:c}=e;return E(nc||(nc=A`<div class=${0} id=${0} style="
        ${0}; width:${0}px; border:none; border-width:0px 0px 4px 0px;
        border-style:solid; border-bottom-color:${0}
      " ...${0} onClick=${0}>
        ${0}
      </div>`),pe('PUX ${active ? "active" : ""} Tab Widget',o),r,n||"",s,a?"black":"transparent",u,c,(l||[]).map(d=>E(oc||(oc=A`<${0} Widget=${0} ProtoUX=${0}/>`),le,d,e.ProtoUX)))}}function pe(t,e){const i=Object.create(null);return(t+" "+(e||"")).trim().replace(/\s+/g," ").split(" ").filter(r=>!(r in i)&&(i[r]=!0,!0)).join(" ")}xe.registerWidgetView("Tab",Df),xe.registerWidgetView("FlatListView",class extends le{render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,List:a,ItemRenderer:c,Placeholder:d,selectedIndices:g,SelectionLimit:p,onSelectionChange:f,onItemSelected:m,onItemDeselected:x}=e,b=de(e,Yb);const P=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";au("item list",a),wt("list item renderer",c),aa("list placeholder",d),sa("list of selected indices",g,Nn),Fi("selection limit",p),wt("selection change callback",f),wt("item selection callback",m),wt("item deselection callback",x),c==null&&(c=y=>E(ac||(ac=A`${0}`),y+"")),d==null&&(d="(empty)"),g==null&&(g=[]),p==null&&(p=1);const C=Object.create(null);if(g=g.filter(y=>!(!(Nn(y)&&y>=0&&y<a.length)||y in C||(C[y]=!0,0))),g.length>p){const y=g.slice(p);g.length=p,f!=null&&f(g),x!=null&&y.forEach(N=>{x(a[N],N)})}function w(y){return y in C}return E(sc||(sc=A`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>
        ${0}
      </>`),pe("PUX FlatListView Widget",r),i,P,o||"",b,a.length===0?E(lc||(lc=A`<div class="centered"><span>${0}</></>`),d):a.map((y,N)=>E(uc||(uc=A`<div
              class=${0}
              dangerouslySetInnerHTML=${0}
              onClick=${0}
            />`),w(N)?"selected":void 0,{__html:c(y,N,w(N))},B=>function(F,$){if(F.stopImmediatePropagation(),F.preventDefault(),p===0)return;let T,H,ee=!1;F.shiftKey||F.metaKey?(ee=!0,w($)?(H=[$],g=g.filter(te=>te!==$)):(g.length===p&&(H=[g.shift()]),T=[$],g.push($))):(H=g.filter(te=>te!==$),ee=!w($),T=ee?[$]:[],g=[$]),ee&&f!=null&&f(g),H!=null&&x!=null&&H.forEach(te=>{x(a[te],te)}),T!=null&&m!=null&&T.forEach(te=>{m(a[te],te)})}(B,N))))}}),xe.registerWidgetView("NestedListView",class extends le{render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,List:a,ItemRenderer:c,Placeholder:d,LabelOfItem:g,ContentListOfItem:p,selectedPaths:f,SelectionLimit:m,SelectionMode:x,onSelectionChange:b,onItemSelected:P,onItemDeselected:C,onItemDoubleClicked:w,expandedPaths:y,Indentation:N,onExpansionChange:B,onItemExpanded:F,onItemCollapsed:$}=e,T=de(e,Zb);const H=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";function ee(j){return Vo(j,Nn)}var te;function Ne(j){let q=a[j[0]];for(let ye=1,Qe=j.length;ye<Qe;ye++){if(q==null)return;const lt=p(q);if(!to(lt))return;q=lt[j[ye]]}return q}function Vt(j){return Ne(j)!=null}function Me(j,q){return j.length===q.length&&j.every((ye,Qe)=>ye===q[Qe])}function He(j,q){for(let ye=0,Qe=q.length;ye<Qe;ye++)if(Me(j,q[ye]))return ye;return-1}function Ze(j,q){return j.length===q.length+1&&Me(j.slice(0,q.length),q)}function jt(j){return He(j,f)>=0}if(au("item list",a),wt("list item renderer",c),aa("list placeholder",d),ou("label extraction function",g),ou("content extraction function",p),sa("list of selected paths",f,ee),Fi("selection limit",m),(te=x)==null||function(j,q,ye){if(q==null&&Ft("MissingArgument: no ".concat(hi(j)," given")),["same-container","any-container"].indexOf(q)>=0)return q==null||typeof q.valueOf!="function"?q:q.valueOf();Ft("InvalidArgument: the given ".concat(hi(j)," is not among the supported values"))}("selection mode",te),wt("selection change callback",b),wt("item selection callback",P),wt("item deselection callback",C),wt("item double-click callback",w),sa("list of expanded paths",y,ee),Fi("indentation",N),wt("expansion change callback",B),wt("item expansion callback",F),wt("item collapse callback",$),c==null&&(c=function(j,q){return E(dc||(dc=A`<div class="ItemLabel">${0}</div>`),g(j))}),d==null&&(d="(empty)"),f==null&&(f=[]),m==null&&(m=1),x==null&&(x="same-container"),y==null&&(y=[]),N==null&&(N=10),f=f.filter(j=>Vt(j)),f=f.filter((j,q)=>He(j,f)===q),f.length>1&&x==="same-container"){const j=f[0].slice(0,f[0].length-1);f=f.filter(q=>Ze(q,j))}function oi(j,q){const ye=(q.length-1)*N,Qe=jt(q),lt=function(Ee){return He(Ee,y)>=0}(q);let Oe=p(j);to(Oe)||(Oe=[]);const ai=Oe.length>0;return E(cc||(cc=A`<div class="ItemView" style="padding-left:${0}px">
          <div class="ItemLine ${0}"
            onClick=${0} onDblClick=${0}
          >
            ${0} ${0}
          </div>
          ${0}
        </div>`),ye,Qe?"selected":"",function(Ee){(function(Pe,dt,D){if(Pe.stopImmediatePropagation(),Pe.preventDefault(),m===0)return;let R,M,z=!1;if(Pe.shiftKey||Pe.metaKey)if(z=!0,jt(D))M=[D],f=f.filter(G=>!Me(D,G));else{const G=D.slice(0,D.length-1);M=f.filter(ie=>!Ze(ie,G)),f=f.filter(ie=>Ze(ie,G)),f.length===m&&M.push([f.shift()]),R=[D],f.push(D)}else M=f.filter(G=>!Me(D,G)),z=!jt(D),R=z?[D]:[],f=[D];z&&b!=null&&b(f),M!=null&&C!=null&&M.forEach(G=>{C(Ne(G),G)}),R!=null&&P!=null&&R.forEach(G=>{P(Ne(G),G)})})(Ee,0,q)},function(Ee){(function(Pe,dt,D){w!=null&&(Pe.stopImmediatePropagation(),Pe.preventDefault(),w(dt,D,Pe))})(Ee,j,q)},ai?E(lt?hc||(hc=A`<img class="ItemExpander" src="/svg/icons/caret-down.svg"  onClick=${0}/>`):pc||(pc=A`<img class="ItemExpander" src="/svg/icons/caret-right.svg" onClick=${0}/>`),function(Ee){(function(Pe,dt,D){Pe.stopImmediatePropagation(),Pe.preventDefault();let R=He(D,y);R<0?y.push(D):y.splice(R,1),B!=null&&B(y),R<0?F!=null&&F(dt,D):$!=null&&$(dt,D)})(Ee,j,q)}):E(gc||(gc=A`<img class="ItemIcon" src="/svg/icons/circle.svg"/>`)),c(j,q),ai&&lt?Oe.map((Ee,Pe)=>oi(Ee,q.concat(Pe))):"")}return y=y.filter(j=>Vt(j)),y=y.filter((j,q)=>He(j,y)===q),E(fc||(fc=A`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>
        ${0}
      </>`),pe("PUX NestedListView Widget",r),i,H,o||"",T,a.length===0?E(mc||(mc=A`<div class="centered"><span>${0}</></>`),d):a.map((j,q)=>oi(j,[q])))}}),xe.registerWidgetView("Placeholder",class extends le{render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Substitute:a,Placeholder:c}=e,d=de(e,qb);wt("Substitute",a),aa("placeholder text",c),c==null&&(c="(empty)");const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return E(xc||(xc=A`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        ${0}
      </div>`),pe("PUX Placeholder Widget",r),i,g,o||"",a==null?E(_c||(_c=A`<div class="centered"><span>${0}</></>`),c):E(Sc||(Sc=A`<${0} ...${0}/>`),a,d))}});class ny extends Mt{render(e){return E(bc||(bc=A`<div class="centered">
        ${0}
      </div>`),e.children)}}const{fromDocumentTo:oy}=ES,Rs=document.createElement("style");Rs.setAttribute("id","SNS Stylesheet");Rs.innerHTML=`/*******************************************************************************
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

`;document.head.appendChild(Rs);class Ff extends yi{constructor(){super(...arguments),et(this,"_Board"),et(this,"_StickerList",[]),et(this,"_pointedSticker"),et(this,"_selectedStickers",[]),et(this,"_SelectionLimit",1/0),et(this,"_LassoStart"),et(this,"_LassoEnd"),et(this,"_SelectionBeforeLasso",[]),et(this,"_ShapeMode"),et(this,"_shapedStickers"),et(this,"_initialGeometries"),et(this,"_SnapToGrid",!1),et(this,"_GridWidth",1),et(this,"_GridHeight",1),et(this,"_StickerRecognizerSlot",{}),et(this,"_ShapeHandleRecognizerSlot",{}),et(this,"_LassoRecognizerSlot",{}),et(this,"state",{Value:0})}_mountBoard(e){e!=null&&this.base!=null&&(e._View=this.base,e._onMount!=null&&e._onMount()),this._Board=e}_unmountBoard(){const e=this._Board;e!=null&&(e._View=void 0,e._onUnmount!=null&&e._onUnmount())}componentDidMount(){this._mountBoard(this._Board)}componentWillUnmount(){this._unmountBoard()}rerender(){this.setState({Value:this.state.Value+1})}render(e){const i=this;let{Classes:r,Board:o,StickerList:n,Placeholder:s,Mode:l,SelectionLimit:u,selectedStickers:a,onSelectionChange:c,onStickerSelected:d,onStickerDeselected:g,SelectionFrameStyle:p,SelectionHandleStyle:f,LassoMode:m,onGeometryChange:x,SnapToGrid:b,GridWidth:P,GridHeight:C}=e;this._Board!==o&&(this._unmountBoard(),this._mountBoard(o));function w(){i._pointedSticker=void 0,i._shapedStickers=void 0,i._initialGeometries=void 0}function y(){i._shapedStickers!=null&&He(i._shapedStickers,i._initialGeometries),w()}ea("board CSS class names",r),Q_("board",o),Al("sticker list",n,Mi),ea("placeholder text",s),Ll("board mode",l,["edit","run"]),Ca("selection limit",u),Al("list of selected stickers",a,Mi),tn("selection change callback",c),tn("selection callback",d),tn("deselection callback",g),ea("selection frame CSS style",p),e_("selection handle CSS style",f),Ll("lasso selection mode",m,["touch","contain"]),tn("geometry change callback",x),Qx('"SnapToGrid" mode',b),Ul("grid width",P),Ul("grid height",C),r==null&&(r=""),s==null&&(s="(empty)"),l==null&&(l="run"),u==null&&(u=1/0),a==null&&(a=[]),f==null&&(f="background:orangered; border:solid 1px darkgray"),m==null&&(m="contain"),b==null&&(b=!1),P==null&&(P=10),C==null&&(C=10);const N=new Set;a=a.filter(D=>Mi(D)&&!N.has(D)?(N.add(D),!0):(y(),!1)),a.length>u&&B(a.slice(0,u)),i._StickerList=n,i._selectedStickers=a,i._SelectionLimit=u,i._SnapToGrid=b,i._GridWidth=P,i._GridHeight=C;function B(D,R=[]){const M=D.slice();R.forEach(ie=>{M.indexOf(ie)<0&&M.push(ie)}),a.length>i._SelectionLimit&&(M.length=i._SelectionLimit);const z=[],G=[];M.forEach(ie=>{i._selectedStickers.indexOf(ie)<0&&z.push(ie)}),i._selectedStickers.forEach(ie=>{M.indexOf(ie)<0&&G.push(ie)}),a=i._selectedStickers=M,(z.length>0||G.length>0)&&(y(),c!=null&&c(a)),G.length>0&&g!=null&&G.forEach(ie=>{g(ie)}),z.length>0&&d!=null&&z.forEach(ie=>{d(ie)})}function F(D){return a.indexOf(D)>=0}function $(){const{x:D,y:R}=i._LassoStart,{x:M,y:z}=i._LassoEnd||i._LassoStart;let G=D<=M?D:M,ie=D<=M?M-D:D-M,$e=R<=z?R:z,he=R<=z?z-R:R-z;return{x:G,y:$e,Width:ie,Height:he}}function T(){const{x:D,y:R,Width:M,Height:z}=$();return`left:${D}px; top:${R}px; width:${M}px; height:${z}px`}function H(){let{x:D,y:R,Width:M,Height:z}=$(),G=D+M,ie=R+z;return m==="touch"?i._StickerList.filter($e=>{if(!$e.isVisible||$e.isLocked)return!1;const{x:he,y:Ie,Width:Fe,Height:Ct}=$e.Geometry;return D<=he+Fe&&he<=G&&R<=Ie+Ct&&Ie<=ie}):i._StickerList.filter($e=>{if(!$e.isVisible||$e.isLocked)return!1;const{x:he,y:Ie,Width:Fe,Height:Ct}=$e.Geometry;return D<=he&&he<=G+Fe&&R<=Ie&&Ie<=ie+Ct})}function ee(D,R){i._LassoEnd={x:D,y:R},B(i._SelectionBeforeLasso,H())}function te(){i._LassoStart=i._LassoEnd=void 0,i._SelectionBeforeLasso=[]}function Ne(){i._LassoStart=i._LassoEnd=void 0,B(i._SelectionBeforeLasso),i._SelectionBeforeLasso=[]}function Vt(){B([])}const Me=wc(i._LassoRecognizerSlot,{onlyFrom:".SNS.BoardView",Threshold:4,onDragStarted:(D,R,M,z)=>{i._SelectionBeforeLasso=a.slice(),{left:D,top:R}=oy("local",{left:D,top:R},i.base),i._LassoStart={x:D,y:R},ee(D,R),i.rerender()},onDragContinued:(D,R,M,z)=>{ee(i._LassoStart.x+M,i._LassoStart.y+z),i.rerender()},onDragFinished:(D,R,M,z)=>{ee(i._LassoStart.x+M,i._LassoStart.y+z),te(),i.rerender()},onDragCancelled:(D,R,M,z)=>{Ne(),i.rerender()},onClicked:Vt});function He(D,R){x!=null&&(x(D,R),i.rerender())}function Ze(D,R,M,z,G){if(x==null)return;let ie=0,$e=0,he=0,Ie=0;switch(R){case"nw":ie=M,he=-M,$e=z,Ie=-z;break;case"n":$e=z,Ie=-z;break;case"ne":he=M,$e=z,Ie=-z;break;case"e":he=M;break;case"se":he=M,Ie=z;break;case"s":Ie=z;break;case"sw":ie=M,he=-M,Ie=z;break;case"w":ie=M,he=-M;break;case"c":ie=M,$e=z}G==null&&(G=i._initialGeometries);const Fe=G.map(Ct=>{let _r=Math.max(0,Ct.Width+he),Sr=Math.max(0,Ct.Height+Ie),ct=Ct.x+ie,Bt=ct+_r,ht=Ct.y+$e,Wt=ht+Sr;if(i._SnapToGrid){let Bi=i._GridWidth*Math.round(ct/i._GridWidth),Qi=i._GridWidth*Math.round(Bt/i._GridWidth),Wi=i._GridHeight*Math.round(ht/i._GridHeight),er=i._GridHeight*Math.round(Wt/i._GridHeight);switch(R){case"nw":ct=Math.min(Bi,Bt),ht=Math.min(Wi,Wt);break;case"n":ht=Math.min(Wi,Wt);break;case"ne":Bt=Math.max(ct,Qi),ht=Math.min(Wi,Wt);break;case"e":Bt=Math.max(ct,Qi);break;case"se":Bt=Math.max(ct,Qi),Wt=Math.max(ht,er);break;case"s":Wt=Math.max(ht,er);break;case"sw":ct=Math.min(Bi,Bt),Wt=Math.max(ht,er);break;case"w":ct=Math.min(Bi,Bt);break;case"c":ct=Bi,Bt=ct+_r,ht=Wi,Wt=ht+Sr}}return{x:ct,y:ht,Width:Bt-ct,Height:Wt-ht}});He(D,Fe)}const jt=(D,R,M)=>{if(u===0)return;const z=i._pointedSticker;let G=!1,ie,$e;M.shiftKey||M.metaKey?(G=!0,F(z)?($e=[z],a=a.filter(he=>he!==z)):(a.length===u&&($e=[a.shift()]),ie=[z],a.push(z))):($e=a.filter(he=>he!==z),G=!F(z),ie=G?[z]:[],a=[z]),G&&c!=null&&c(a),$e!=null&&g!=null&&$e.forEach(he=>{g(he)}),ie!=null&&d!=null&&ie.forEach(he=>{d(he)}),G&&i.rerender()},oi=wc(i._StickerRecognizerSlot,{onlyFrom:".SNS.Cover",Threshold:4,onDragStarted:(D,R,M,z,G)=>{F(i._pointedSticker)||(G.shiftKey||G.metaKey?B([i._pointedSticker],i._selectedStickers):B([i._pointedSticker])),i._shapedStickers=i._selectedStickers,i._initialGeometries=i._selectedStickers.map(ie=>ie.Geometry),Ze(i._shapedStickers,"c",M,z)},onDragContinued:(D,R,M,z)=>{i._shapedStickers!=null&&Ze(i._shapedStickers,"c",M,z)},onDragFinished:(D,R,M,z)=>{i._shapedStickers!=null&&(Ze(i._shapedStickers,"c",M,z),w())},onDragCancelled:(D,R,M,z)=>{y()},onClicked:jt}),j=(D,R)=>{i._ShapeMode="c",i._pointedSticker=R,oi(D)},q=no(i._ShapeHandleRecognizerSlot,{onlyFrom:".SNS.ShapeHandle",Threshold:0,onDragStarted:(D,R,M,z)=>{i._shapedStickers=i._selectedStickers,i._initialGeometries=i._selectedStickers.map(G=>G.Geometry),Ze(i._shapedStickers,i._ShapeMode,M,z)},onDragContinued:(D,R,M,z)=>{i._shapedStickers!=null&&Ze(i._shapedStickers,i._ShapeMode,M,z)},onDragFinished:(D,R,M,z)=>{i._shapedStickers!=null&&(Ze(i._shapedStickers,i._ShapeMode,M,z),w())},onDragCancelled:(D,R,M,z)=>{y()}}),ye=(D,R)=>{i._ShapeMode=R,q(D)};function Qe(D){return function(R){R.button===0&&B([D])}}const lt=new WeakMap,Oe=new WeakMap;function ai(D){let R=lt.get(D);return R==null&&lt.set(D,R=no(D,{onlyFrom:".builtinDraggable",neverFrom:".notBuiltinDraggable",Threshold:4,onDragStarted:(M,z,G,ie,$e)=>{Oe.set(D,D.Geometry),Ze([D],"c",G,ie,[Oe.get(D)])},onDragContinued:(M,z,G,ie)=>{Oe.has(D)&&Ze([D],"c",G,ie,[Oe.get(D)])},onDragFinished:(M,z,G,ie)=>{Oe.has(D)&&(Ze([D],"c",G,ie,[Oe.get(D)]),Oe.delete(D))},onDragCancelled:(M,z,G,ie)=>{Oe.has(D)&&He([D],[Oe.get(D)]),Oe.delete(D)}})),R}function Ee(){if(i._shapedStickers==null)return"";const D={},R={};i._StickerList.filter(G=>!F(G)).forEach(G=>{const{y:ie,Height:$e}=G.Geometry,he=Math.round(ie),Ie=Math.round(ie+$e/2),Fe=Math.round(ie+$e);D[he]=D[Fe]=!0,R[Ie]=!0});const M={};i._shapedStickers.forEach(G=>{const{y:ie,Height:$e}=G.Geometry,he=Math.round(ie),Ie=Math.round(ie+$e/2),Fe=Math.round(ie+$e);D[he]&&(M[he]="Edge"),D[Ie]&&M[Ie]!=="Edge"&&(M[Ie]="Center"),D[Fe]&&(M[Fe]="Edge"),R[he]&&M[he]!=="Edge"&&(M[he]="Center"),R[Ie]&&M[Ie]!=="Edge"&&(M[Ie]="Center"),R[Fe]&&M[Fe]!=="Edge"&&(M[Fe]="Center")});const z=[];for(let G in M)M[G]!=null&&z.push(G);return pt`${z.map(G=>pt`
          <div class="SNS horizontalGuide ${M[G]}" style="top:${G}px"/>
        `)}`}function Pe(){if(i._shapedStickers==null)return"";const D={},R={};i._StickerList.filter(G=>!F(G)).forEach(G=>{const{x:ie,Width:$e}=G.Geometry,he=Math.round(ie),Ie=Math.round(ie+$e/2),Fe=Math.round(ie+$e);D[he]=D[Fe]=!0,R[Ie]=!0});const M={};i._shapedStickers.forEach(G=>{const{x:ie,Width:$e}=G.Geometry,he=Math.round(ie),Ie=Math.round(ie+$e/2),Fe=Math.round(ie+$e);D[he]&&(M[he]="Edge"),D[Ie]&&M[Ie]!=="Edge"&&(M[Ie]="Center"),D[Fe]&&(M[Fe]="Edge"),R[he]&&M[he]!=="Edge"&&(M[he]="Center"),R[Ie]&&M[Ie]!=="Edge"&&(M[Ie]="Center"),R[Fe]&&M[Fe]!=="Edge"&&(M[Fe]="Center")});const z=[];for(let G in M)M[G]!=null&&z.push(G);return pt`${z.map(G=>pt`
          <div class="SNS verticalGuide ${M[G]}" style="left:${G}px"/>
        `)}`}const dt=o==null?void 0:Po(o);return pt`<div class="SNS BoardView ${r}" style=${dt}
        onPointerDown=${Me} onPointerMove=${Me}
        onPointerUp=${Me} onPointerCancel=${Me}
      >
        ${o==null?pt`<div class="SNS Placeholder"><div>(no Board to show)</div></div>`:n==null?pt`<div class="SNS Placeholder"><div>(no Stickers to show)</div></div>`:n.map(D=>{if(!D.isVisible)return"";const R=D.Geometry,M=F(D);return pt`<${ay} Sticker=${D} key=${D.Id}
                  selected=${M&&l==="run"}
                  SelectionFrameStyle=${p}
                  Geometry=${R}
                  builtinDragging=${ai(D)}
                  builtinSelection=${Qe(D)}
                />`})}

        ${n!=null&&l==="edit"?n.map(D=>{if(!D.isVisible)return"";if(D.isLocked)return pt`
                  <${kc} Sticker=${D} key=${D.Id+"c"}
                    onPointerDown=${Me} onPointerMove=${Me}
                    onPointerUp=${Me} onPointerCancel=${Me}
                  />
                `;{const R=F(D);return pt`
                  <${kc} Sticker=${D} key=${D.Id+"c"}
                    selected=${R}
                    onPointerEvent=${M=>j(M,D)}
                  />
                `}}):""}

        ${a.length>0?a.filter(D=>D.isVisible&&!D.isLocked).map(D=>{const R=D.Id,M=D.Geometry;return pt`
                <${xi} key=${R+"nw"} Mode="nw" Geometry=${M}
                  onPointerEvent=${z=>ye(z,"nw")}/>
                <${xi} key=${R+"n"}  Mode="n"  Geometry=${M}
                  onPointerEvent=${z=>ye(z,"n")}/>
                <${xi} key=${R+"ne"} Mode="ne" Geometry=${M}
                  onPointerEvent=${z=>ye(z,"ne")}/>
                <${xi} key=${R+"e"}  Mode="e"  Geometry=${M}
                  onPointerEvent=${z=>ye(z,"e")}/>
                <${xi} key=${R+"se"} Mode="se" Geometry=${M}
                  onPointerEvent=${z=>ye(z,"se")}/>
                <${xi} key=${R+"s"}  Mode="s"  Geometry=${M}
                  onPointerEvent=${z=>ye(z,"s")}/>
                <${xi} key=${R+"sw"} Mode="sw" Geometry=${M}
                  onPointerEvent=${z=>ye(z,"sw")}/>
                <${xi} key=${R+"w"}  Mode="w"  Geometry=${M}
                  onPointerEvent=${z=>ye(z,"w")}/>
              `}):""}
        ${this._LassoStart==null?"":pt`<div class="SNS Lasso" style=${T()}></>`}
        ${Ee()}
        ${Pe()}
      </div>`}}class ay extends yi{constructor(){super(...arguments),et(this,"_Sticker")}componentDidMount(){const e=this._Sticker;e._View=this.base,e._onMount!=null&&e._onMount()}componentWillUnmount(){const e=this._Sticker;e._View=void 0,e._onUnmount!=null&&e._onUnmount()}render(e){let{Sticker:i,selected:r,SelectionFrameStyle:o,Geometry:n,builtinSelection:s,builtinDragging:l}=e;this._Sticker=i;let{x:u,y:a,Width:c,Height:d}=n;Fl("sticker x position",u),Fl("sticker y position",a),Ca("sticker width",c),Ca("sticker height",d);const g=u!=null&&c!=null&&a!=null&&d!=null?`left:${u}px; top:${a}px; width:${c}px; height:${d}px; right:auto; bottom:auto;`:"";return pt`<div class="SNS Sticker ${r?"selected":""}" style="
        ${g};
        ${r&&o!=null?`outline:${o};`:""}
        ${Po(i)||""}
      ">
        ${i.Rendering({builtinSelection:s,builtinDragging:l})}
      </div>`}}class kc extends yi{render(e){let{Sticker:i,onPointerEvent:r,...o}=e,{x:n,y:s,Width:l,Height:u}=i.Geometry;const a=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return pt`<div class="SNS Cover" style="${a}" ...${o}
        onPointerDown=${r} onPointerMove=${r}
        onPointerUp=${r} onPointerCancel=${r}
      />`}}let xi=class extends yi{render(e){let{Mode:i,Geometry:r,onPointerEvent:o,...n}=e,{x:s,y:l,Width:u,Height:a}=r;const c=s-8,d=Math.round(s+u/2)-4,g=s+u,p=l-8,f=Math.round(l+a/2)-4,m=l+a;let x,b;switch(i){case"nw":x=`left:${c}px; top:${p}px;`,b="nwse";break;case"n":x=`left:${d}px; top:${p}px;`,b="ns";break;case"ne":x=`left:${g}px; top:${p}px;`,b="nesw";break;case"e":x=`left:${g}px; top:${f}px;`,b="ew";break;case"se":x=`left:${g}px; top:${m}px;`,b="nwse";break;case"s":x=`left:${d}px; top:${m}px;`,b="ns";break;case"sw":x=`left:${c}px; top:${m}px;`,b="nesw";break;case"w":x=`left:${c}px; top:${f}px;`,b="ew";break}return b="cursor:"+b+"-resize",pt`<div class="SNS ShapeHandle" style="${x} ${b}" ...${n}
        onPointerDown=${o} onPointerMove=${o}
        onPointerUp=${o} onPointerCancel=${o}
      />`}};window.SNS_BoardView=Ff;document.dispatchEvent(new CustomEvent("SNS_BoardView",{detail:window.SNS_BoardView}));function ce(t,e){if(t==null)return{};var i={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;i[r]=t[r]}return i}function Ut(t){var e=/^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(t);if(e==null)throw new Error(t);var i=new Error(e[2]);throw i.name=e[1],i}function Dn(t){return(typeof t=="number"||t instanceof Number)&&(t=t.valueOf(),isFinite(t)&&Math.round(t)===t&&t>=0)}function qa(t){return typeof t=="string"||t instanceof String}var sy=/^\s*$/,ly=/^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function uy(t){return function(e,i){return(typeof e=="string"||e instanceof String)&&ly.test(e.valueOf())}(t)}function Gs(t){return typeof t=="function"}function ha(t){return t!=null&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype}var oo=Array.isArray;function No(t,e,i,r){if(oo(t))try{for(var o=0,n=t.length;o<n;o++)if(e(t[o])==0)return!1;return!(i!=null&&t.length<i||r!=null&&t.length>r)}catch{}return!1}var Ys=!0;function To(t,e,i){var r=function(n,s){return function(l,u,a,c,d){if(u==null){if(c)return u;Ut("MissingArgument: no ".concat(pi(l)," given"))}else if(a(u))switch(!0){case u instanceof Boolean:case u instanceof Number:case u instanceof String:return u.valueOf();default:return u}else Ut("InvalidArgument: the given ".concat(pi(l)," is no valid ").concat(pi(d)))}(n,s,t,e,i)},o=t.name;return o!=null&&/^ValueIs/.test(o)?function(n,s){if(n==null&&Ut("MissingArgument: no function given"),typeof n!="function"&&Ut("InvalidArgument: the given 1st Argument is not a JavaScript function"),s==null&&Ut("MissingArgument: no desired name given"),typeof s=="string"||s instanceof String||Ut("InvalidArgument: the given desired name is not a string"),n.name===s)return n;try{if(Object.defineProperty(n,"name",{value:s}),n.name===s)return n}catch{}return new Function("originalFunction","return function "+s+" () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}")(n)}(r,o.replace(/^ValueIs/,e?"allow":"expect")):r}var Ui=To(Dn,Ys,"ordinal number"),pa=To(uy,Ys,"single line of text"),$t=To(Gs,Ys,"JavaScript function"),Ic=To(Gs,!1,"JavaScript function");function Pc(t,e){if(e==null&&Ut("MissingArgument: no ".concat(pi(t)," given")),oo(e))return e;Ut("InvalidArgument: the given ".concat(pi(t)," is no JavaScript array"))}function ga(t,e,i,r,o,n){return e==null?e:dy(t,e,i,r,o,n)}var dy=function(t,e,i,r,o,n){if(e==null&&Ut("MissingArgument: no ".concat(pi(t)," given")),No(e,i,o,n))return e;Ut("InvalidArgument: the given ".concat(pi(t)," is ")+"either not a list or contains invalid elements")};function pi(t){return t.replace(/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g,function(e){return e==="\\"?"\\\\":e}).replace(/[\x00-\x1f\x7f-\x9f]/g,function(e){switch(e){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v";default:var i=e.charCodeAt(0).toString(16);return"\\x"+"00".slice(i.length)+i}})}function Dt(t,e){return e===void 0&&(e='"'),e+function(i,r){return r===void 0&&(r='"'),i.replace(r==="'"?/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|'/g:/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|"/g,function(o){switch(o){case"'":return"\\'";case'"':return'\\"';case"\\":return"\\\\";default:return o}}).replace(/[\x00-\x1f\x7f-\x9f]/g,function(o){switch(o){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\v":return"\\v";default:var n=o.charCodeAt(0).toString(16);return"\\x"+"00".slice(n.length)+n}})}(t,e)+e}var Do,je,Uf,Di,Vc,Af,Ja,Zs,Ka,Qa,Ar={},Lf=[],cy=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,qs=Array.isArray;function bi(t,e){for(var i in e)t[i]=e[i];return t}function Ef(t){var e=t.parentNode;e&&e.removeChild(t)}function Xf(t,e,i){var r,o,n,s={};for(n in e)n=="key"?r=e[n]:n=="ref"?o=e[n]:s[n]=e[n];if(arguments.length>2&&(s.children=arguments.length>3?Do.call(arguments,2):i),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)s[n]===void 0&&(s[n]=t.defaultProps[n]);return Fn(t,s,r,o,null)}function Fn(t,e,i,r,o){var n={type:t,props:e,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Uf,__i:-1,__u:0};return o==null&&je.vnode!=null&&je.vnode(n),n}function Fo(t){return t.children}function Ht(t,e){this.props=t,this.context=e}function zi(t,e){if(e==null)return t.__?zi(t.__,t.__i+1):null;for(var i;e<t.__k.length;e++)if((i=t.__k[e])!=null&&i.__e!=null)return i.__e;return typeof t.type=="function"?zi(t):null}function Mf(t){var e,i;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((i=t.__k[e])!=null&&i.__e!=null){t.__e=t.__c.base=i.__e;break}return Mf(t)}}function Cc(t){(!t.__d&&(t.__d=!0)&&Di.push(t)&&!ao.__r++||Vc!==je.debounceRendering)&&((Vc=je.debounceRendering)||Af)(ao)}function ao(){var t,e,i,r,o,n,s,l;for(Di.sort(Ja);t=Di.shift();)t.__d&&(e=Di.length,r=void 0,n=(o=(i=t).__v).__e,s=[],l=[],i.__P&&((r=bi({},o)).__v=o.__v+1,je.vnode&&je.vnode(r),Js(i.__P,r,o,i.__n,i.__P.namespaceURI,32&o.__u?[n]:null,s,n??zi(o),!!(32&o.__u),l),r.__v=o.__v,r.__.__k[r.__i]=r,zf(s,r,l),r.__e!=n&&Mf(r)),Di.length>e&&Di.sort(Ja));ao.__r=0}function Hf(t,e,i,r,o,n,s,l,u,a,c){var d,g,p,f,m,x=r&&r.__k||Lf,b=e.length;for(i.__d=u,hy(i,e,x),u=i.__d,d=0;d<b;d++)(p=i.__k[d])!=null&&typeof p!="boolean"&&typeof p!="function"&&(g=p.__i===-1?Ar:x[p.__i]||Ar,p.__i=d,Js(t,p,g,o,n,s,l,u,a,c),f=p.__e,p.ref&&g.ref!=p.ref&&(g.ref&&Ks(g.ref,null,p),c.push(p.ref,p.__c||f,p)),m==null&&f!=null&&(m=f),65536&p.__u||g.__k===p.__k?(u&&!u.isConnected&&(u=zi(g)),u=Of(p,u,t)):typeof p.type=="function"&&p.__d!==void 0?u=p.__d:f&&(u=f.nextSibling),p.__d=void 0,p.__u&=-196609);i.__d=u,i.__e=m}function hy(t,e,i){var r,o,n,s,l,u=e.length,a=i.length,c=a,d=0;for(t.__k=[],r=0;r<u;r++)s=r+d,(o=t.__k[r]=(o=e[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?Fn(null,o,null,null,null):qs(o)?Fn(Fo,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?Fn(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=t,o.__b=t.__b+1,l=py(o,i,s,c),o.__i=l,n=null,l!==-1&&(c--,(n=i[l])&&(n.__u|=131072)),n==null||n.__v===null?(l==-1&&d--,typeof o.type!="function"&&(o.__u|=65536)):l!==s&&(l===s+1?d++:l>s?c>u-s?d+=l-s:d--:l<s?l==s-1&&(d=l-s):d=0,l!==r+d&&(o.__u|=65536))):(n=i[s])&&n.key==null&&n.__e&&!(131072&n.__u)&&(n.__e==t.__d&&(t.__d=zi(n)),es(n,n,!1),i[s]=null,c--);if(c)for(r=0;r<a;r++)(n=i[r])!=null&&!(131072&n.__u)&&(n.__e==t.__d&&(t.__d=zi(n)),es(n,n))}function Of(t,e,i){var r,o;if(typeof t.type=="function"){for(r=t.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=t,e=Of(r[o],e,i));return e}t.__e!=e&&(i.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function py(t,e,i,r){var o=t.key,n=t.type,s=i-1,l=i+1,u=e[i];if(u===null||u&&o==u.key&&n===u.type&&!(131072&u.__u))return i;if(r>(u==null||131072&u.__u?0:1))for(;s>=0||l<e.length;){if(s>=0){if((u=e[s])&&!(131072&u.__u)&&o==u.key&&n===u.type)return s;s--}if(l<e.length){if((u=e[l])&&!(131072&u.__u)&&o==u.key&&n===u.type)return l;l++}}return-1}function Bc(t,e,i){e[0]==="-"?t.setProperty(e,i??""):t[e]=i==null?"":typeof i!="number"||cy.test(e)?i:i+"px"}function un(t,e,i,r,o){var n;e:if(e==="style")if(typeof i=="string")t.style.cssText=i;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)i&&e in i||Bc(t.style,e,"");if(i)for(e in i)r&&i[e]===r[e]||Bc(t.style,e,i[e])}else if(e[0]==="o"&&e[1]==="n")n=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+n]=i,i?r?i.u=r.u:(i.u=Zs,t.addEventListener(e,n?Qa:Ka,n)):t.removeEventListener(e,n?Qa:Ka,n);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e in t)try{t[e]=i??"";break e}catch{}typeof i=="function"||(i==null||i===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,i))}}function Wc(t){return function(e){if(this.l){var i=this.l[e.type+t];if(e.t==null)e.t=Zs++;else if(e.t<i.u)return;return i(je.event?je.event(e):e)}}}function Js(t,e,i,r,o,n,s,l,u,a){var c,d,g,p,f,m,x,b,P,C,w,y,N,B,F,$=e.type;if(e.constructor!==void 0)return null;128&i.__u&&(u=!!(32&i.__u),n=[l=e.__e=i.__e]),(c=je.__b)&&c(e);e:if(typeof $=="function")try{if(b=e.props,P=(c=$.contextType)&&r[c.__c],C=c?P?P.props.value:c.__:r,i.__c?x=(d=e.__c=i.__c).__=d.__E:("prototype"in $&&$.prototype.render?e.__c=d=new $(b,C):(e.__c=d=new Ht(b,C),d.constructor=$,d.render=fy),P&&P.sub(d),d.props=b,d.state||(d.state={}),d.context=C,d.__n=r,g=d.__d=!0,d.__h=[],d._sb=[]),d.__s==null&&(d.__s=d.state),$.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=bi({},d.__s)),bi(d.__s,$.getDerivedStateFromProps(b,d.__s))),p=d.props,f=d.state,d.__v=e,g)$.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if($.getDerivedStateFromProps==null&&b!==p&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(b,C),!d.__e&&(d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(b,d.__s,C)===!1||e.__v===i.__v)){for(e.__v!==i.__v&&(d.props=b,d.state=d.__s,d.__d=!1),e.__e=i.__e,e.__k=i.__k,e.__k.forEach(function(T){T&&(T.__=e)}),w=0;w<d._sb.length;w++)d.__h.push(d._sb[w]);d._sb=[],d.__h.length&&s.push(d);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(b,d.__s,C),d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(p,f,m)})}if(d.context=C,d.props=b,d.__P=t,d.__e=!1,y=je.__r,N=0,"prototype"in $&&$.prototype.render){for(d.state=d.__s,d.__d=!1,y&&y(e),c=d.render(d.props,d.state,d.context),B=0;B<d._sb.length;B++)d.__h.push(d._sb[B]);d._sb=[]}else do d.__d=!1,y&&y(e),c=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++N<25);d.state=d.__s,d.getChildContext!=null&&(r=bi(bi({},r),d.getChildContext())),g||d.getSnapshotBeforeUpdate==null||(m=d.getSnapshotBeforeUpdate(p,f)),Hf(t,qs(F=c!=null&&c.type===Fo&&c.key==null?c.props.children:c)?F:[F],e,i,r,o,n,s,l,u,a),d.base=e.__e,e.__u&=-161,d.__h.length&&s.push(d),x&&(d.__E=d.__=null)}catch(T){e.__v=null,u||n!=null?(e.__e=l,e.__u|=u?160:32,n[n.indexOf(l)]=null):(e.__e=i.__e,e.__k=i.__k),je.__e(T,e,i)}else n==null&&e.__v===i.__v?(e.__k=i.__k,e.__e=i.__e):e.__e=gy(i.__e,e,i,r,o,n,s,u,a);(c=je.diffed)&&c(e)}function zf(t,e,i){e.__d=void 0;for(var r=0;r<i.length;r++)Ks(i[r],i[++r],i[++r]);je.__c&&je.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(n){n.call(o)})}catch(n){je.__e(n,o.__v)}})}function gy(t,e,i,r,o,n,s,l,u){var a,c,d,g,p,f,m,x=i.props,b=e.props,P=e.type;if(P==="svg"?o="http://www.w3.org/2000/svg":P==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),n!=null){for(a=0;a<n.length;a++)if((p=n[a])&&"setAttribute"in p==!!P&&(P?p.localName===P:p.nodeType===3)){t=p,n[a]=null;break}}if(t==null){if(P===null)return document.createTextNode(b);t=document.createElementNS(o,P,b.is&&b),n=null,l=!1}if(P===null)x===b||l&&t.data===b||(t.data=b);else{if(n=n&&Do.call(t.childNodes),x=i.props||Ar,!l&&n!=null)for(x={},a=0;a<t.attributes.length;a++)x[(p=t.attributes[a]).name]=p.value;for(a in x)if(p=x[a],a!="children"){if(a=="dangerouslySetInnerHTML")d=p;else if(a!=="key"&&!(a in b)){if(a=="value"&&"defaultValue"in b||a=="checked"&&"defaultChecked"in b)continue;un(t,a,null,p,o)}}for(a in b)p=b[a],a=="children"?g=p:a=="dangerouslySetInnerHTML"?c=p:a=="value"?f=p:a=="checked"?m=p:a==="key"||l&&typeof p!="function"||x[a]===p||un(t,a,p,x[a],o);if(c)l||d&&(c.__html===d.__html||c.__html===t.innerHTML)||(t.innerHTML=c.__html),e.__k=[];else if(d&&(t.innerHTML=""),Hf(t,qs(g)?g:[g],e,i,r,P==="foreignObject"?"http://www.w3.org/1999/xhtml":o,n,s,n?n[0]:i.__k&&zi(i,0),l,u),n!=null)for(a=n.length;a--;)n[a]!=null&&Ef(n[a]);l||(a="value",f!==void 0&&(f!==t[a]||P==="progress"&&!f||P==="option"&&f!==x[a])&&un(t,a,f,x[a],o),a="checked",m!==void 0&&m!==t[a]&&un(t,a,m,x[a],o))}return t}function Ks(t,e,i){try{typeof t=="function"?t(e):t.current=e}catch(r){je.__e(r,i)}}function es(t,e,i){var r,o;if(je.unmount&&je.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||Ks(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){je.__e(n,e)}r.base=r.__P=null}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&es(r[o],e,i||typeof t.type!="function");i||t.__e==null||Ef(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function fy(t,e,i){return this.constructor(t,i)}Do=Lf.slice,je={__e:function(t,e,i,r){for(var o,n,s;e=e.__;)if((o=e.__c)&&!o.__)try{if((n=o.constructor)&&n.getDerivedStateFromError!=null&&(o.setState(n.getDerivedStateFromError(t)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,r||{}),s=o.__d),s)return o.__E=o}catch(l){t=l}throw t}},Uf=0,Ht.prototype.setState=function(t,e){var i;i=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=bi({},this.state),typeof t=="function"&&(t=t(bi({},i),this.props)),t&&bi(i,t),t!=null&&this.__v&&(e&&this._sb.push(e),Cc(this))},Ht.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Cc(this))},Ht.prototype.render=Fo,Di=[],Af=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ja=function(t,e){return t.__v.__b-e.__v.__b},ao.__r=0,Zs=0,Ka=Wc(!1),Qa=Wc(!0);var jf=function(t,e,i,r){var o;e[0]=0;for(var n=1;n<e.length;n++){var s=e[n++],l=e[n]?(e[0]|=s?1:2,i[e[n++]]):e[++n];s===3?r[0]=l:s===4?r[1]=Object.assign(r[1]||{},l):s===5?(r[1]=r[1]||{})[e[++n]]=l:s===6?r[1][e[++n]]+=l+"":s?(o=t.apply(l,jf(t,l,i,["",null])),r.push(o),l[0]?e[0]|=2:(e[n-2]=0,e[n]=o)):r.push(l)}return r},Nc=new Map,X=(function(t){var e=Nc.get(this);return e||(e=new Map,Nc.set(this,e)),(e=jf(this,e.get(t)||(e.set(t,e=function(i){for(var r,o,n=1,s="",l="",u=[0],a=function(g){n===1&&(g||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,g,s):n===3&&(g||s)?(u.push(3,g,s),n=2):n===2&&s==="..."&&g?u.push(4,g,0):n===2&&s&&!g?u.push(5,0,!0,s):n>=5&&((s||!g&&n===5)&&(u.push(n,0,s,o),n=6),g&&(u.push(n,g,0,o),n=6)),s=""},c=0;c<i.length;c++){c&&(n===1&&a(),a(c));for(var d=0;d<i[c].length;d++)r=i[c][d],n===1?r==="<"?(a(),u=[u],n=3):s+=r:n===4?s==="--"&&r===">"?(n=1,s=""):s=r+s[0]:l?r===l?l="":s+=r:r==='"'||r==="'"?l=r:r===">"?(a(),n=1):n&&(r==="="?(n=5,o=s,s=""):r==="/"&&(n<5||i[c][d+1]===">")?(a(),n===3&&(u=u[0]),n=u,(u=u[0]).push(2,0,n),n=0):r===" "||r==="	"||r===`
`||r==="\r"?(a(),n=2):s+=r),n===3&&s==="!--"&&(n=4,u=u[0])}return a(),u}(t)),e),arguments,[])).length>1?e:e[0]}).bind(Xf);const my=["String","Number","Object","Array","Boolean","Date"];function fa(t){return t&&typeof t=="object"}function ts(t,e,i){Object.defineProperty(t,e,{value:i,enumerable:!1,configurable:!0})}function Tc(t,e,i){ts(t,"__key",e),ts(t,"__parent",i)}const Qs={computedStack:[],trackerSymbol:Symbol("tracker")};let sr=null;const so=Symbol();function is(){if(sr){for(const t of sr)t(),t[so]=!1;sr=null}}function Dc(t,e){t[so]||(sr===null&&(sr=[],e===!0?queueMicrotask(is):setTimeout(is,e)),sr.push(t))}const{computedStack:dn,trackerSymbol:ma}=Qs,xa=Symbol("__observed"),li=Symbol("modifiedProperty"),{computedStack:Fc,trackerSymbol:xy}=Qs;var _y={observe:function t(e,i={}){const{props:r,ignore:o,batch:n,deep:s=!0,bubble:l,bind:u}=i;if(e[xa])return e;const a=f=>f!==xa&&(r==null||r instanceof Array&&r.includes(f))&&(o==null||o instanceof Array&&!o.includes(f));function c(f,m,x){if(m==="__handler")ts(f,"__handler",x);else if(a(m)){if(Array.isArray(f)&&m==="length"||function(b,P,C){const w=new Map;return function y(N,B,F){if(N===B)return!1;let $=typeof N;if($!==typeof B)return!0;switch($){case"undefined":case"boolean":case"string":case"function":default:return!0;case"number":return isNaN(N)!==isNaN(B)||Math.abs(N-B)>Number.EPSILON;case"object":return N==null||B==null||(F==="by-value"&&(N instanceof Boolean||N instanceof Number||N instanceof String)?N.valueOf()!==B.valueOf():Array.isArray(N)?function(T,H,ee){if(!Array.isArray(H)||T.length!==H.length)return!0;if(w.has(T)||w.has(H)){if(w.has(T)&&w.get(T).has(H)||w.has(H)&&w.get(H).has(T))return!1;w.has(T)||w.set(T,new Set),w.get(T).add(H)}for(let te=0,Ne=T.length;te<Ne;te++)if(y(T[te],H[te],ee))return!0;return!1}(N,B,F):F==="by-reference"||function(T,H,ee="by-value"){if(Object.getPrototypeOf(T)!==Object.getPrototypeOf(H))return!0;for(let te in T)if(!(te in H))return!0;for(let te in H)if(!(te in T))return!0;if(w.has(T)||w.has(H)){if(w.has(T)&&w.get(T).has(H)||w.has(H)&&w.get(H).has(T))return!1;w.has(T)||w.set(T,new Set),w.get(T).add(H)}for(let te in T)if(y(T[te],H[te],ee))return!0;return!1}(N,B,F))}return!0}(b,P,void 0)}(f[m],x)){const b=m!==li&&s&&fa(x),P=f[m];f[m]=b?t(x,i):x,b&&l&&Tc(f[m],m,f);const C=[m];let w=f;for(;w&&(!w.__handler||w.__handler(C,x,P,g)!==!1);)w.__key&&w.__parent?(C.unshift(w.__key),w=w.__parent):w=null;const y=d.get(m);if(y)for(const N of y){const B=N[ma],F=B&&B.get(f),$=F&&F.has(m);N.__disposed||B&&!$?y.delete(N):N!==dn[0]&&(n!==void 0&&n!==!1?(Dc(N,n),N[so]=!0):N())}if(m!==li){f[li]=m;const N=d.get(li);if(N)for(const B of N){const F=B[ma],$=F&&F.get(f),T=$&&$.has(li);B.__disposed||F&&!T?N.delete(B):B!==dn[0]&&(n!==void 0&&n!==!1?(Dc(B,n),B[so]=!0):B())}}}}else f[m]=x}s&&Object.entries(e).forEach(function([f,m]){fa(m)&&a(f)&&(e[f]=t(m,i),l&&Tc(e[f],f,e))});const d=new Map,g=new Proxy(e,{get(f,m){if(m===xa)return!0;if(a(m)&&dn.length){const x=dn[0],b=x[ma];if(b){let C=b.get(e);C||(C=new Set,b.set(e,C)),C.add(m)}let P=d.get(m);P||(P=new Set,d.set(m,P)),P.add(x)}return e[m]},set:(f,m,x)=>(c(e,m,x),!0),defineProperty(f,m,x){if(m==="__handler")throw new Error("Don't track bubble handlers");if(!a(m))return Reflect.defineProperty(e,m,x);if(!Array.isArray(e)||m==="length"){"value"in x&&s&&fa(x.value)&&((x={...x}).value=t(x.value,i));const b=Reflect.defineProperty(e,m,x);return m!==li&&(e[li]=m),b}return!1},deleteProperty(f,m){if(m===li)throw new Error('internal property Symbol("modifiedProperty") must not be deleted');return m in e&&c(e,m,void 0),Reflect.deleteProperty(f,m)}});var p;return u&&(p=e,Object.getOwnPropertyNames(p).concat(Object.getPrototypeOf(p)&&my.indexOf(Object.getPrototypeOf(p).constructor.name)<0?Object.getOwnPropertyNames(Object.getPrototypeOf(p)):[]).filter(f=>f!=="constructor"&&typeof p[f]=="function")).forEach(f=>e[f]=e[f].bind(g)),g},modifiedProperty:li,computed:function(t,{autoRun:e=!0,callback:i,bind:r,disableTracking:o=!1}={}){function n(u,a=[]){const c=i||l;o||(c[xy]=new WeakMap),Fc.unshift(c),a=a.length>0?[...a,s]:[s];const d=u?u():r?t.apply(r,a):t(...a);return Fc.shift(),d}const s={computeAsync:n},l=(...u)=>n(null,u);return e&&l(),l},dispose:function(t){return t[Qs.trackerSymbol]=null,t.__disposed=!0},batch:is};const Sy=["Id","Classes","Style","x","y","z","Width","Height","Title","closeable","View","WidgetList"],by=["Id","Classes","Style","x","y","z","Width","Height","Title","closeable","minWidth","minHeight","maxWidth","maxHeight","View","WidgetList"],yy=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","hidden","View","WidgetList"],vy=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","hidden","View","WidgetList"],wy=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],$y=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],ky=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],Iy=["Id","Type","Classes","Style","x","y","Width","Height","Value","View","WidgetList"],Py=["Id","Type","Classes","Style","x","y","Width","Height","Value","View","WidgetList"],Vy=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","ImageScaling","ImageAlignment","WidgetList","View"],Cy=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","PermissionsPolicy","allowsFullscreen","SandboxPermissions","ReferrerPolicy","WidgetList","View"],By=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Color","disabled","onClick","View"],Wy=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Color","Options","disabled","onInput","View"],Ny=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],Ty=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],Dy=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],Fy=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],Uy=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],Ay=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Hashmarks","View"],Ly=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Ey=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],Xy=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],My=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Hy=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Oy=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],zy=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],jy=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Ry=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Gy=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Yy=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Zy=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],qy=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View","Placeholder","onDrop"],Jy=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Suggestions","View"],Ky=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Options","Placeholder","View"],Qy=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View"],ev=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","onDrop","View","WidgetList"],tv=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","View","WidgetList"],iv=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","Expansion","View","WidgetList"],rv=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View","WidgetList"],nv=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View","WidgetList"],ov=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View","WidgetList"],av=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","Value","View","WidgetList"],sv=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","List","ItemRenderer","Placeholder","selectedIndices","SelectionLimit","onSelectionChange","onItemSelected","onItemDeselected","View","WidgetList"],lv=["Id","Type","Classes","Style","Anchoring","x","y","Width","Height","List","ItemRenderer","Placeholder","LabelOfItem","ContentListOfItem","selectedPaths","SelectionLimit","SelectionMode","onSelectionChange","onItemSelected","onItemDeselected","onItemDoubleClicked","expandedPaths","Indentation","onExpansionChange","onItemExpanded","onItemCollapsed","View","WidgetList"],uv=["Id","Type","Classes","Style","x","y","Width","Height","Substitute","Placeholder","View","WidgetList"];let Uc,Ac,Lc,Ec,Xc,Mc,Hc,Oc,zc,jc,Rc,Gc,Yc,Zc,qc,Jc,Kc,Qc,eh,th,ih,rh,nh,oh,ah,sh,lh,uh,dh,ch,hh,ph,gh,fh,mh,xh,_h,Sh,bh,yh,vh,wh,$h,kh,Ih,Ph,Vh,Ch,Bh,Wh,Nh,Th,Dh,Fh,Uh,Ah,Lh,Eh,Xh,Mh,Hh,Oh,zh,jh,Rh,Gh,Yh,Zh,qh,Jh,Kh,Qh,ep,tp,ip,rp,np,op,ap,sp,lp,up,dp,cp,hp,pp,gp,fp,mp,xp,_p,Sp,bp,yp,vp,wp,$p,kp,Ip,Pp,Vp,Cp,Bp,Wp,Np,Tp,Dp,Fp,Up,Ap,Lp,Ep,Xp,Mp,L=t=>t;const{observe:dv,computed:qt,dispose:Rw}=_y,_a=document.createElement("style");function Qt(t){let e=/^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(t);if(e==null)throw new Error(t);{let i=new Error(e[2]);throw i.name=e[1],i}}function cn(t){Qt("ReadOnlyProperty: property "+Dt(t)+" must not be set")}_a.setAttribute("id","ProtoUX"),_a.innerHTML=`/*******************************************************************************
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

`,document.head.appendChild(_a);const Hp=new WeakMap;function Rf(t,e){let i,r=Hp.get(t);if(r!=null)return r;function o(){}function n(C){C.stopImmediatePropagation(),C.preventDefault()}let s,l,{onlyFrom:u,neverFrom:a,Threshold:c=0,consumingEvent:d=!0,onDragStarted:g=o,onDragContinued:p=o,onDragFinished:f=o,onDragCancelled:m=o}=e,x="idle";function b(C){d&&n(C),x="busy";let{pageX:w,pageY:y}=C;g(Math.round(w),Math.round(y),Math.round(w-s),Math.round(y-l),C)}function P(C){if(d&&n(C),x!=="idle"){const w=x==="busy";x="idle",C.target.releasePointerCapture(C.pointerId),w&&m(Math.round(s),Math.round(l),0,0,C)}i=void 0}return r=function(C){switch(C.type){case"pointerdown":return function(w){w.isPrimary&&(u!=null&&(u instanceof HTMLElement&&u!==w.target||typeof u=="string"&&!w.target.matches(u))||a!=null&&(a instanceof HTMLElement&&a===w.target||typeof a=="string"&&w.target.matches(a))||(w.button===0?(w.target.setPointerCapture(w.pointerId),i=w.target,x==="idle"&&({pageX:s,pageY:l}=w,c>0?x="observing":b(w))):P(w)))}(C);case"pointermove":return function(w){if(x!=="idle"&&w.target!==i&&(w.target.setPointerCapture(w.pointerId),i=w.target,console.log("PointerTarget changed")),x==="observing"){let{pageX:y,pageY:N}=w;(s-y)**2+(l-N)**2>=c**2&&b(w)}else x==="busy"&&function(y){d&&n(y);let{pageX:N,pageY:B}=y;p(Math.round(N),Math.round(B),Math.round(N-s),Math.round(B-l),y)}(w)}(C);case"pointerup":return function(w){x==="busy"?function(y){d&&n(y),x="idle";let{pageX:N,pageY:B}=y;f(Math.round(N),Math.round(B),Math.round(N-s),Math.round(B-l),y),i=void 0}(w):P(w)}(C);case"pointercancel":return function(w){P(w)}(C)}},r.abortDragging=P,Hp.set(t,r),r}const Op=new WeakMap;function cv(t,e){let i,r=Op.get(t);if(r!=null)return r;function o(){}function n(F){F.stopImmediatePropagation(),F.preventDefault()}let s,l,{onlyFrom:u,neverFrom:a,Threshold:c=0,consumingEvent:d=!0,onDragStarted:g=o,onDragContinued:p=o,onDragFinished:f=o,onDragCancelled:m=o,onClicked:x=o,MultiClickTimeSpan:b=300,onMultiClick:P=o}=e,C="idle",w=0,y=0;function N(F){d&&n(F),C="busy";let{pageX:$,pageY:T}=F;g(Math.round($),Math.round(T),Math.round($-s),Math.round(T-l),F)}function B(F){if(d&&n(F),C!=="idle"){const $=C==="busy";C="idle",F.target.releasePointerCapture(F.pointerId),$&&m(Math.round(s),Math.round(l),0,0,F)}i=void 0}return r=function(F){switch(F.type){case"pointerdown":return function($){$.isPrimary&&(u!=null&&(u instanceof HTMLElement&&u!==$.target||typeof u=="string"&&!$.target.matches(u))||a!=null&&(a instanceof HTMLElement&&a===$.target||typeof a=="string"&&$.target.matches(a))||($.button===0?($.target.setPointerCapture($.pointerId),i=$.target,C==="idle"&&({pageX:s,pageY:l}=$,c>0?C="observing":N($))):B($)))}(F);case"pointermove":return function($){if(C!=="idle"&&$.target!==i&&($.target.setPointerCapture($.pointerId),i=$.target,console.log("PointerTarget changed")),C==="busy"&&function(T){d&&n(T);let{pageX:H,pageY:ee}=T;p(Math.round(H),Math.round(ee),Math.round(H-s),Math.round(ee-l),T)}($),C==="observing"){let{pageX:T,pageY:H}=$;(s-T)**2+(l-H)**2>=c**2&&N($)}}(F);case"pointerup":return function($){if(C==="busy"&&function(T){d&&n(T),C="idle";let{pageX:H,pageY:ee}=T;f(Math.round(H),Math.round(ee),Math.round(H-s),Math.round(ee-l),T),i=void 0}($),C==="observing"){C="idle",x(s,l,$);let T=Date.now();T-w<b?(y+=1,y>1&&P(y,s,l,$)):y=1,w=T}}(F);case"pointercancel":return function($){B($)}(F)}},r.abortDragging=B,Op.set(t,r),r}class ue{constructor(e="PUX"){this._IdPrefix=void 0,this._ImageFolder="",this._ScreenSet={},this._DialogSet={},this._observed=dv({},{deep:!1}),this._UpdaterList=[],this._StartScreen={},this._openScreen={},this._openDialogs=[],this._View=void 0,this._IdPrefix=e}get ImageFolder(){return this._ImageFolder}set ImageFolder(e){(e=e.trim())===""||e.endsWith("/")||(e+="/"),this._ImageFolder=e}get Style(){const e=document.getElementById(this._IdPrefix+"-Style");return e==null?"":e.innerHTML}set Style(e){const i=this._IdPrefix+"-Style";let r=this._ImageFolder;r!==""&&(e=e.replace(/url\("\/images\//g,'url("'+r));let o=document.getElementById(i);o==null&&(o=document.createElement("style"),o.setAttribute("id",i),document.head.appendChild(o)),o.innerHTML=e}get ScreenSet(){return this._ScreenSet}set ScreenSet(e){this._ScreenSet=e;for(let i in e){this._StartScreen=e[i];break}for(let i in e)Object.assign(e[i],{dX:0,dY:0,dW:0,dH:0})}get observed(){return this._observed}set observed(e){cn("observed")}ScreenNamed(e){return this._ScreenSet[e]}existingScreenNamed(e){const i=this._ScreenSet[e];return i==null&&Qt("NoSuchScreen: a screen named "+Dt(e)+" does not exist"),i}packScreen(e,i=10,r){r==null&&(r=i);const o=this.existingScreenNamed(e);if(o.packedGeometry==null)return;let{x:n,y:s,Width:l,Height:u}=o.packedGeometry;n-=i,l+=2*i,s-=r,u+=2*r,o.Width=l,o.Height=u,o.WidgetList.forEach(a=>{a.hidden||(a.x-=n,a.y-=s)})}openScreen(e){const i=this.existingScreenNamed(e);this._openScreen!==i&&(this._openScreen=i,this.rerender())}closeScreen(e){const i=this.ScreenNamed(e);i!=null&&this._openScreen===i&&(this._openScreen=this._StartScreen,this.rerender())}ScreenIsOpen(e){const i=this.existingScreenNamed(e);return this._openScreen===i}startWithScreen(e){this._StartScreen=this.existingScreenNamed(e),this.openScreen(e)}get StartScreen(){return this._StartScreen}set StartScreen(e){cn("StartScreen")}extractAllDialogs(){for(let i in this._ScreenSet){const r=this._ScreenSet[i].WidgetList;for(let o=r.length-1;o>=0;o--){const n=r[o];if(n.Type==="Dialog"||n.Type==="ResizableDialog"){if(!(typeof(e=n.Name)=="string"||e instanceof String)||sy.test(e.valueOf())){console.error('Dialog without name in screen "'+i+'"');continue}if(n.Name in this._DialogSet){console.error('a dialog with name "'+n.Name+'" has already been registered');continue}this._DialogSet[n.Name]=n,r.splice(o,1)}}}var e}DialogNamed(e){return this._DialogSet[e]}existingDialogNamed(e){const i=this._DialogSet[e];return i==null&&Qt("NoSuchDialog: a dialog named "+Dt(e)+" does not exist"),i}openDialog(e){const i=this.existingDialogNamed(e),r=this._openDialogs.indexOf(i);if(r>=0){if(r===this._openDialogs.length-1)return;this._openDialogs.splice(r,1)}this._openDialogs.push(i),this.rerender(),typeof i.onOpen=="function"&&i.onOpen(i)}closeDialog(e){let i=this.DialogNamed(e);if(i==null)return;const r=this._openDialogs.indexOf(i);r<0||(this._openDialogs.splice(r,1),this.rerender(),typeof i.onClose=="function"&&i.onClose(i))}DialogIsOpen(e){let i=this.existingDialogNamed(e);return this._openDialogs.indexOf(i)>=0}get openDialogs(){return this._openDialogs.slice()}set openDialogs(e){cn("openDialogs")}closeAllDialogs(){this._openDialogs.length=0,this.rerender()}DialogIsFrontMost(e){let i=this.existingDialogNamed(e);return this._openDialogs.indexOf(i)===this._openDialogs.length-1}bringDialogToFront(e){this.openDialog(e)}WidgetNamed(e){const i=this._ScreenSet;for(let r in i){const o=i[r].WidgetList;for(let n=0,s=o.length;n<s;n++)if(o[n].Name===e)return o[n]}}existingWidgetNamed(e){const i=this.WidgetNamed(e);return i==null&&Qt("NoSuchWidget: a widget named "+Dt(e)+" does not exist"),i}WidgetOnScreen(e,i){const r=i.WidgetList||[];for(let o=0,n=r.length;o<n;o++)if(r[o].Name===e)return r[o]}WidgetOnDialog(e,i){return this.WidgetOnScreen(e,i)}existingWidgetOnScreen(e,i){const r=this.WidgetOnScreen(e,i);return r==null&&Qt("NoSuchWidget: screen "+Dt(i.Name)+" does not contain a widget named "+Dt(e)),r}existingWidgetOnDialog(e,i){const r=this.WidgetOnDialog(e,i);return r==null&&Qt("NoSuchWidget: dialog "+Dt(i.Name)+" does not contain a widget named "+Dt(e)),r}WidgetInContainer(e,i){const r=i.WidgetList||[];for(let o=0,n=r.length;o<n;o++)if(r[o].Name===e)return r[o]}existingWidgetInContainer(e,i){const r=this.WidgetInContainer(e,i);return r==null&&Qt("NoSuchWidget: could not find widget named "+Dt(e)),r}stuff(e){for(let i in e){const r=this.ScreenNamed(i);if(r!=null){this.stuffScreen(r,e[i]);continue}const o=this.DialogNamed(i);o==null?Qt("NoSuchScreenOrDialog: no screen or dialog named "+Dt(i)+" found"):this.stuffDialog(o,e[i])}}stuffScreen(e,i){for(let r in i){let o=this.existingWidgetOnScreen(r,e);this.stuffWidget(o,i[r])}}stuffDialog(e,i){for(let r in i){let o=this.existingWidgetOnDialog(r,e);this.stuffWidget(o,i[r])}}stuffWidget(e,i){if(this.ValueIsStuff(i)){const r=this.existingScreenNamed(i.from);e.WidgetList=(e.WidgetList||[]).concat(i.with.map(o=>this.existingWidgetOnScreen(o,r)))}else for(let r in i){const o=this.existingWidgetInContainer(r,e);this.stuffWidget(o,i[r])}}ValueIsStuff(e){return ha(e)&&qa(e.from)&&No(e.with,qa)}configure(e){for(let i in e){const r=this.ScreenNamed(i);if(r!=null){this.configureScreen(r,e[i]);continue}const o=this.DialogNamed(i);o==null?Qt("NoSuchScreenOrDialog: no screen or dialog named "+Dt(i)+" found"):this.configureDialog(o,e[i])}}configureScreen(e,i){for(let r in i)if(r==="self")this.configureWidget(e,i.self);else{const o=this.existingWidgetOnScreen(r,e);this.configureWidget(o,i[r])}}configureDialog(e,i){for(let r in i)if(r==="self")this.configureWidget(e,i.self);else{const o=this.existingWidgetOnDialog(r,e);this.configureWidget(o,i[r])}}configureWidget(e,i){for(let r in i){let o=i[r];if(ha(o)&&Gs(o.Updater))this._UpdaterList.push(qt(()=>{this.updateWidget(e,{[r]:o.Updater()})}));else{if(ha(o)&&e.WidgetList!=null){const n=this.WidgetInContainer(r,e);if(n!=null){this.configureWidget(n,o);continue}}e[r]=o}}}update(e){for(let i in e){const r=this.ScreenNamed(i);if(r!=null){this.updateScreen(r,e[i]);continue}const o=this.DialogNamed(i);o==null?Qt("NoSuchScreenOrDialog: no screen or dialog named "+Dt(i)+" found"):this.updateDialog(o,e[i])}}updateScreen(e,i){for(let r in i)if(r==="self")this.updateWidget(e,i.self);else{const o=this.existingWidgetOnScreen(r,e);this.updateWidget(o,i[r])}}updateDialog(e,i){for(let r in i)if(r==="self")this.updateWidget(e,i.self);else{const o=this.existingWidgetOnDialog(r,e);this.updateWidget(o,i[r])}}updateWidget(e,i){for(let o in i)e[o]=i[o];const r=e.View;r!=null&&r.rerender()}updatedFrom(e){return{Updater:e}}get View(){return this._View}set View(e){cn("View")}renderInto(e){(function(i,r,o){var n,s,l;je.__&&je.__(i,r),n=r.__k,s=[],l=[],Js(r,i=r.__k=Xf(Fo,null,[i]),n||Ar,Ar,r.namespaceURI,n?null:r.firstChild?Do.call(r.childNodes):null,s,n?n.__e:r.firstChild,!1,l),zf(s,i,l)})(X(Uc||(Uc=L`<${0} ProtoUX=${0}/>`),hv,this),e)}rerender(){this._View!=null&&this._View.rerender()}static registerWidgetView(e,i){ue._WidgetViewRegistry[e]=i}static WidgetViewForType(e){return ue._WidgetViewRegistry[e]}}ue._WidgetViewRegistry=Object.create(null);class hv extends Ht{constructor(...e){super(...e),this.state={Value:0}}rerender(){this.setState({Value:this.state.Value+1})}render(e){let i=e.ProtoUX;i._View=this;const r=i._openScreen,o=i._openDialogs.slice(),n=o.pop(),s=(n==null?void 0:n.isModal)==1;return X(Ac||(Ac=L`<div style="
        display:block; position:absolute;
        left:0px; top:0px; right:0px; bottom:0px;
      ">
        <${0} ProtoUX=${0} Screen=${0}/>
        ${0}
        ${0}
        ${0}
      </div>`),pv,i,r,o.map(l=>X(Lc||(Lc=L`<${0} ProtoUX=${0} Dialog=${0} key=${0}/>`),zp,i,l,l.Name)),s?X(Ec||(Ec=L`<${0}/>`),gv):"",n==null?"":X(Xc||(Xc=L`<${0} ProtoUX=${0} Dialog=${0} key=${0}/>`),zp,i,n,n.Name))}}class pv extends Ht{render(e){const i=e.Screen;i.View=this;const{Id:r,Classes:o,Style:n,Width:s,Height:l,WidgetList:u}=i;return X(Mc||(Mc=L`<div class=${0} id=${0} style="
        width:${0}px; height:${0}px; ${0}
      ">
        ${0}
      </div>`),ge("PUX Screen",o),r,s,l,n||"",u.map(a=>X(Hc||(Hc=L`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`),ae,a,e.ProtoUX,a.Name)))}}class gv extends Ht{render(e){const{Style:i}=e;return X(Oc||(Oc=L`<div class="PUX ModalLayer" style="
        ${0};
        display:block; position:absolute;
        left:0px; top:0px; right:0px; bottom:0px;
      " onClick=${0}/>`),i||"",function(r){r.stopImmediatePropagation(),r.preventDefault()})}}class zp extends Ht{render(e){const i=e.Dialog;return i.Type==="ResizableDialog"?X(zc||(zc=L`<${0} Dialog=${0} ProtoUX=${0}/>`),mv,i,e.ProtoUX):X(jc||(jc=L`<${0}  Dialog=${0} ProtoUX=${0}/>`),fv,i,e.ProtoUX)}}class fv extends Ht{constructor(...e){super(...e),this.state={Value:0}}rerender(){this.setState({Value:this.state.Value+1})}render(e){const i=e.Dialog;i.View=this;const r=(C,w,y,N)=>{i.x=i._DragOffset.x+y,i.y=i._DragOffset.y+N,i.z=20001e3,e.ProtoUX.View.rerender()},o=(C,w,y,N)=>{r(0,0,y,N),i.z=2e6,e.ProtoUX.bringDialogToFront(i.Name)},n=Rf(i,{neverFrom:".CloseButton",Threshold:4,onDragStarted:(C,w,y,N)=>{i._DragOffset={x:i.x,y:i.y},r(0,0,y,N)},onDragContinued:r,onDragFinished:o,onDragCancelled:o}),{Id:s,Classes:l,Style:u,x:a,y:c,z:d,Width:g,Height:p,Title:f,closeable:m,WidgetList:x}=i,b=ce(i,Sy),P=`left:${a}px; top:${c}px; width:${g}px; height:${p}px; right:auto; bottom:auto;`;return X(Rc||(Rc=L`<div class=${0} id=${0} style="
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
      </>`),ge("PUX Dialog",l),s,u||"",P,d||2e6,b,n,n,n,n,f,e.ProtoUX._ImageFolder,m===!1?"hidden":"visible",function(C){C.stopImmediatePropagation(),C.preventDefault(),m!==!1&&e.ProtoUX.closeDialog(i.Name)},(x||[]).map(C=>X(Gc||(Gc=L`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`),ae,C,e.ProtoUX,C.Name)))}}class mv extends Ht{constructor(...e){super(...e),this.state={Value:0}}rerender(){this.setState({Value:this.state.Value+1})}render(e){const i=e.Dialog;i.View=this;let{Id:r,Classes:o,Style:n,x:s,y:l,z:u,Width:a,Height:c,Title:d,closeable:g,minWidth:p,minHeight:f,maxWidth:m,maxHeight:x,WidgetList:b}=i,P=ce(i,by);Ui("minimal width",p),Ui("maximal width",m),Ui("minimal height",f),Ui("maximal height",x),p==null&&(p=120),m==null&&(m=1/0),f==null&&(f=80),x==null&&(x=1/0),p=Math.max(0,p),m=Math.max(p,m),f=Math.max(0,f),x=Math.max(f,x);const C=($,T,H,ee)=>{i._DragMode==="drag"?y(H,ee):N(H,ee),i.z=20001e3,e.ProtoUX.View.rerender()},w=($,T,H,ee)=>{C(0,0,H,ee),i.z=2e6,e.ProtoUX.bringDialogToFront(i.Name)},y=($,T)=>{i.x=i._DragOffset.x+$,i.y=i._DragOffset.y+T},N=($,T)=>{switch(i._DragMode){case"resize-sw":let H=Math.max(p,Math.min(i._DragOffset.Width-$,m));i.x=i._DragOffset.x-($=H-i._DragOffset.Width),i.Width=i._DragOffset.Width+$;break;case"resize-se":i.Width=Math.max(p,Math.min(i._DragOffset.Width+$,m))}i.Height=Math.max(f,Math.min(i._DragOffset.Height+T,x))},B=Rf(i,{onlyFrom:".Titlebar,.leftResizer,.middleResizer,.rightResizer",neverFrom:".CloseButton",Threshold:4,onDragStarted:($,T,H,ee,te)=>{let Ne=te.target.classList;switch(i._DragMode=void 0,!0){case Ne.contains("leftResizer"):i._DragMode="resize-sw";break;case Ne.contains("middleResizer"):i._DragMode="resize-s";break;case Ne.contains("rightResizer"):i._DragMode="resize-se";break;default:i._DragMode="drag"}i._DragOffset={x:i.x,Width:i.Width,y:i.y,Height:i.Height},C(0,0,H,ee)},onDragContinued:C,onDragFinished:w,onDragCancelled:w}),F=`left:${s}px; top:${l}px; width:${a}px; height:${c}px; right:auto; bottom:auto;`;return X(Yc||(Yc=L`<div class=${0} id=${0} style="
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
      </>`),ge("PUX ResizableDialog",o),r,n||"",F,u||2e6,P,(b||[]).map($=>X(Zc||(Zc=L`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`),ae,$,e.ProtoUX,$.Name)),B,B,B,B,d,e.ProtoUX._ImageFolder,g===!1?"hidden":"visible",function($){$.stopImmediatePropagation(),$.preventDefault(),g!==!1&&e.ProtoUX.closeDialog(i.Name)},B,B,B,B,B,B,B,B,B,B,B,B)}}class ae extends Ht{constructor(...e){super(...e),this.state={Value:0}}rerender(){this.setState({Value:this.state.Value+1})}render(e){const i=e.Widget;if(i.View=this,e.hidden==1||i.hidden==1)return"";const{Id:r,Classes:o,Style:n,x:s,y:l,Width:u,Height:a,WidgetList:c}=i,d=ce(i,yy),g=s!=null&&u!=null&&l!=null&&a!=null?`left:${s}px; top:${l}px; width:${u}px; height:${a}px; right:auto; bottom:auto;`:"";switch(i.Type){case"Group":return X(qc||(qc=L`<div class="PUX Widget ${0}" id=${0} style="${0} ${0}" ...${0}>
            ${0}
          </div>`),o,r,g,n||"",d,(c||[]).map(f=>X(Jc||(Jc=L`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`),ae,f,e.ProtoUX,f.Name)));case"Box":return X(Kc||(Kc=L`<div class="PUX Widget ${0}" id=${0} style="
            ${0} ${0}
          " ...${0} key=${0}/>`),o,r,g,n||"",d,i.Name);default:const p=ue.WidgetViewForType(i.Type);if(p==null){const{Id:f,Classes:m,Style:x,Value:b,WidgetList:P}=i,C=ce(i,vy);return X(Qc||(Qc=L`<div class="PUX Widget ${0}" id=${0} style="
              ${0} ${0}
            " ...${0}>
              ${0}
              ${0}
            </div>`),m,f,g,x||"",C,b||"",(P||[]).map(w=>X(eh||(eh=L`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`),ae,w,e.ProtoUX,w.Name)))}return X(th||(th=L`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`),p,i,e.ProtoUX,i.Name)}}}ue.registerWidgetView("horizontalSeparator",class extends ae{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u}=e,a=ce(e,wy),c=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return X(ih||(ih=L`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}/>`),ge("PUX horizontalSeparator Widget",r),i,c,o||"",a)}}),ue.registerWidgetView("verticalSeparator",class extends ae{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u}=e,a=ce(e,$y),c=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return X(rh||(rh=L`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}/>`),ge("PUX verticalSeparator Widget",r),i,c,o||"",a)}}),ue.registerWidgetView("Badge",class extends ae{render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a}=e,c=ce(e,ky);const d=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";switch(a=(""+(a||"")).trim(),!0){case a==="":return"";case a.length>1:a="#";default:return X(nh||(nh=L`<div class=${0} id=${0} style="
          ${0} ${0}
        " ...${0}>${0}</div>`),ge("PUX Badge Widget",r),i,d,o||"",c,a)}}}),ue.registerWidgetView("HTMLView",class extends ae{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a}=e,c=ce(e,Iy),d=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return X(oh||(oh=L`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}
        dangerouslySetInnerHTML=${0}
      />`),ge("PUX HTMLView Widget",r),i,d,o||"",c,{__html:a})}}),ue.registerWidgetView("TextView",class extends ae{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a}=e,c=ce(e,Py),d=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return X(ah||(ah=L`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>${0}</>`),ge("PUX TextView Widget",r),i,d,o||"",c,a)}}),ue.registerWidgetView("ImageView",class extends ae{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,ImageScaling:c,ImageAlignment:d}=e,g=ce(e,Vy),p=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return X(sh||(sh=L`<img class=${0} id=${0} style="
        ${0} ${0};
        object-fit:${0};
        object-position:${0};
      " ...${0} src=${0}/>`),ge("PUX ImageView Widget",r),i,p,o||"",c==="stretch"?"fill ":c,d,g,a)}}),ue.registerWidgetView("WebView",class extends ae{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,PermissionsPolicy:c,allowsFullscreen:d,SandboxPermissions:g,ReferrerPolicy:p}=e,f=ce(e,Cy),m=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return X(lh||(lh=L`<iframe class=${0} id=${0} style="
        ${0} ${0}
      " ...${0} src=${0}
        allow=${0} allowfullscreen=${0}
        sandbox=${0}
        referrerpolicy=${0}
      />`),ge("PUX WebView Widget",r),i,m,o||"",f,a,c,d,g||"allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-same-origin allow-scripts",p)}}),ue.registerWidgetView("Icon",class extends ae{render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Color:c,disabled:d,onClick:g}=e,p=ce(e,By);const f=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let m=t.ProtoUX.ImageFolder;return a!=null&&a.trim()!==""&&(a=a.trim().replace(/url\("\/images\//g,'url("'+m)),X(uh||(uh=L`<div class=${0} id=${0} style="
        ${0} ${0}
      " disabled=${0}><div style="
        display:block; position:absolute;
        left:0px; top:0px; width:100%; height:100%;
        -webkit-mask-image:${0};         mask-image:${0};
        -webkit-mask-size:contain;           mask-size:contain;
        -webkit-mask-position:center center; mask-position:center center;
        background-color:${0};
      " onClick=${0} ...${0}/></>`),ge("PUX Icon Widget",r),i,f,o||"",d,a,a,c||"black",function(x){d==1?(x.stopPropagation(),x.preventDefault()):typeof g=="function"&&g(x)},p)}}),ue.registerWidgetView("PseudoDropDown",class extends ae{render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Color:c,Options:d,disabled:g,onInput:p}=e,f=ce(e,Wy);const m=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let x=t.ProtoUX.ImageFolder;return a!=null&&a.trim()!==""&&(a=a.trim().replace(/url\("\/images\//g,'url("'+x)),X(dh||(dh=L`<div class=${0} id=${0} style="
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
      </div>`),ge("PUX PseudoDropDown Widget",r),i,m,o||"",a,a,c||"black",f,function(b){g==1?(b.stopPropagation(),b.preventDefault()):typeof p=="function"&&p(b)},No(d,qa)?X(ch||(ch=L`
                <option value="" disabled selected>please select</option>
                ${0}
              `),(d||[]).map(b=>X(hh||(hh=L`<option>${0}</>`),b))):d)}}),ue.registerWidgetView("Button",class extends ae{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a}=e,c=ce(e,Ny),d=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return X(ph||(ph=L`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <button ...${0}>${0}</button>
      </div>`),ge("PUX Button Widget",r),i,d,o||"",c,a||"")}}),ue.registerWidgetView("Checkbox",class extends ae{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a}=e,c=ce(e,Ty),d=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let{checked:g,indeterminate:p}=t;return g==null&&(g=a==1),p==null&&(p=a==null),X(gh||(gh=L`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <input type="checkbox" checked=${0} indeterminate=${0} ...${0}/>
      </div>`),ge("PUX Checkbox Widget",r),i,d,o||"",g,p,c)}}),ue.registerWidgetView("Radiobutton",class extends ae{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a}=e,c=ce(e,Dy),d=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let{checked:g}=t;return g==null&&(g=a==1),X(fh||(fh=L`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <input type="radio" checked=${0} ...${0}/>
      </div>`),ge("PUX Radiobutton Widget",r),i,d,o||"",g,c)}}),ue.registerWidgetView("Gauge",class extends ae{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a}=e,c=ce(e,Fy),d=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return X(mh||(mh=L`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <meter value=${0} ...${0}/>
      </div>`),ge("PUX Gauge Widget",r),i,d,o||"",a||"",c)}}),ue.registerWidgetView("Progressbar",class extends ae{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a}=e,c=ce(e,Uy),d=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return X(xh||(xh=L`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <progress value=${0} ...${0}/>
      </div>`),ge("PUX Progressbar Widget",r),i,d,o||"",a||"",c)}}),ue.registerWidgetView("Slider",class extends ae{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Hashmarks:c}=e,d=ce(e,Ay);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Hashmarks",f=X(_h||(_h=L`\n<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>{const x=m.replace(/:.*$/,"").trim(),b=m.replace(/^[^:]+:/,"").trim();return X(Sh||(Sh=L`<option label=${0} value=${0}></option>`),x,b)}))),X(bh||(bh=L`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <input type="range" value=${0} ...${0}
          onBlur=${0} list=${0}
        />
      </div>${0}`),ge("PUX Slider Widget",r),i,g,o||"",a||"",d,this.rerender.bind(this),p,f)}}),ue.registerWidgetView("TextlineInput",class extends ae{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=ce(e,Ly);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=X(yh||(yh=L`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>X(vh||(vh=L`<option value=${0}></option>`),m)))),X(wh||(wh=L`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="text" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),ge("PUX TextlineInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),ue.registerWidgetView("PasswordInput",class extends ae{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a}=e,c=ce(e,Ey);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const d=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return X($h||($h=L`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <input type="password" value=${0} ...${0}
          onBlur=${0}
        />
      </div>`),ge("PUX PasswordInput Widget",r),i,d,o||"",a||"",c,this.rerender.bind(this))}}),ue.registerWidgetView("NumberInput",class extends ae{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=ce(e,Xy);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=X(kh||(kh=L`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>X(Ih||(Ih=L`<option value=${0}></option>`),m)))),X(Ph||(Ph=L`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="number" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),ge("PUX NumberInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),ue.registerWidgetView("PhoneNumberInput",class extends ae{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=ce(e,My);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=X(Vh||(Vh=L`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>X(Ch||(Ch=L`<option value=${0}></option>`),m)))),X(Bh||(Bh=L`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="tel" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),ge("PUX PhoneNumberInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),ue.registerWidgetView("EMailAddressInput",class extends ae{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=ce(e,Hy);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=X(Wh||(Wh=L`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>X(Nh||(Nh=L`<option value=${0}></option>`),m)))),X(Th||(Th=L`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="email" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),ge("PUX EMailAddressInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),ue.registerWidgetView("URLInput",class extends ae{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=ce(e,Oy);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=X(Dh||(Dh=L`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>X(Fh||(Fh=L`<option value=${0}></option>`),m)))),X(Uh||(Uh=L`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="url" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),ge("PUX URLInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),ue.registerWidgetView("TimeInput",class extends ae{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=ce(e,zy);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=X(Ah||(Ah=L`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>X(Lh||(Lh=L`<option value=${0}></option>`),m)))),X(Eh||(Eh=L`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="time" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),ge("PUX TimeInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),ue.registerWidgetView("DateTimeInput",class extends ae{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=ce(e,jy);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=X(Xh||(Xh=L`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>X(Mh||(Mh=L`<option value=${0}></option>`),m)))),X(Hh||(Hh=L`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="datetime-local" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),ge("PUX DateTimeInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),ue.registerWidgetView("DateInput",class extends ae{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=ce(e,Ry);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=X(Oh||(Oh=L`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>X(zh||(zh=L`<option value=${0}></option>`),m)))),X(jh||(jh=L`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="date" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),ge("PUX DateInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),ue.registerWidgetView("WeekInput",class extends ae{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=ce(e,Gy);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=X(Rh||(Rh=L`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>X(Gh||(Gh=L`<option value=${0}></option>`),m)))),X(Yh||(Yh=L`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="week" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),ge("PUX WeekInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),ue.registerWidgetView("MonthInput",class extends ae{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=ce(e,Yy);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=X(Zh||(Zh=L`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>X(qh||(qh=L`<option value=${0}></option>`),m)))),X(Jh||(Jh=L`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="month" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),ge("PUX MonthInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),ue.registerWidgetView("SearchInput",class extends ae{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=ce(e,Zy);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=X(Kh||(Kh=L`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>X(Qh||(Qh=L`<option value=${0}></option>`),m)))),X(ep||(ep=L`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="search" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),ge("PUX SearchInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),ue.registerWidgetView("FileInput",class extends ae{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Placeholder:c,onDrop:d}=e,g=ce(e,qy);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const p=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return X(tp||(tp=L`<label class=${0} id=${0} style="
        ${0} ${0}
      " onDragEnter=${0} onDragOver=${0} onDrop=${0}>
        <input type="file" style="display:none" ...${0}
          onBlur=${0}
        />
        ${0}
        ${0}
      </label>`),ge("PUX FileInput Widget",r),i,p,o||"",function(f){f.stopPropagation(),f.preventDefault()},function(f){f.stopPropagation(),f.preventDefault()},function(f){f.stopPropagation(),f.preventDefault(),typeof d=="function"&&d(f)},g,this.rerender.bind(this),(a||"")===""?"":X(ip||(ip=L`<span>${0}</span>`),a),(a||"")===""?(c||"")===""?"":X(rp||(rp=L`<span>${0}</span>`),c):"")}}),ue.registerWidgetView("ColorInput",class extends ae{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Suggestions:c}=e,d=ce(e,Jy);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";let p,f="";return Array.isArray(c)&&c.length>0&&(p=i+"-Suggestions",f=X(np||(np=L`<datalist id=${0}>
          ${0}
        </datalist>`),p,c.map(m=>X(op||(op=L`<option value=${0}></option>`),m)))),X(ap||(ap=L`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="color" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`),ge("PUX ColorInput Widget",r),i,g,o||"",p,a||"",d,this.rerender.bind(this),f)}}),ue.registerWidgetView("DropDown",class extends ae{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,Options:c,Placeholder:d}=e,g=ce(e,Ky);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const p=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return X(sp||(sp=L`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <select ...${0} onBlur=${0}>
          ${0}
          ${0}
        </select>
      </div>`),ge("PUX DropDown Widget",r),i,p,o||"",g,this.rerender.bind(this),d==null?"":X(lp||(lp=L`<option value="" disabled>${0}</option>`),d),(c||[]).map(f=>X(up||(up=L`<option selected=${0}>${0}</>`),f===a,f)))}}),ue.registerWidgetView("TextInput",class extends ae{constructor(...t){super(...t),this._ValueToShow=void 0}render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a}=e,c=ce(e,Qy);document.activeElement===this.base?a=this._ValueToShow:this._ValueToShow=a;const d=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return X(dp||(dp=L`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <textarea ...${0} value=${0}
          onBlur=${0}
        ></textarea>
      </div>`),ge("PUX TextInput Widget",r),i,d,o||"",c,a||"",this.rerender.bind(this))}}),ue.registerWidgetView("FileDropArea",class extends ae{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,onDrop:a,WidgetList:c}=e,d=ce(e,ev),g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return X(cp||(cp=L`<label class=${0} id=${0} style="
        ${0} ${0}
      " onDragEnter=${0} onDragOver=${0} onDrop=${0}>
        <input type="file" ...${0}/>
        ${0}
      </label>`),ge("PUX FileDropArea Widget",r),i,g,o||"",function(p){p.stopPropagation(),p.preventDefault()},function(p){p.stopPropagation(),p.preventDefault()},function(p){p.stopPropagation(),p.preventDefault(),typeof a=="function"&&a(p)},d,(c||[]).map(p=>X(hp||(hp=L`<${0} Widget=${0} ProtoUX=${0}/>`),ae,p,t.ProtoUX)))}}),ue.registerWidgetView("Accordion",class extends ae{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,WidgetList:a}=e,c=ce(e,tv),d=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return X(pp||(pp=L`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>
        ${0}
      </>`),ge("PUX Accordion Widget",r),i,d,o||"",c,(a||[]).map(g=>X(gp||(gp=L`<${0} Widget=${0} ProtoUX=${0}/>`),Gf,g,t.ProtoUX)))}});class Gf extends ae{render(e){const i=e.Widget;i.View=this;const{Id:r,Classes:o,Style:n,Height:s,Value:l,Expansion:u,WidgetList:a}=i,c=ce(i,iv),d=this;return X(fp||(fp=L`<div class=${0} id=${0} style="
        ${0}; left:0px; top:0px; width:100%; height:auto;
      " ...${0}>
        <div class="PUX Fold-Header">
          <img class="PUX Fold-Expander" src=${0} onClick=${0}
          />
          <div class="PUX Fold-Title">${0}</>
        </div>

        ${0}
      </>`),ge("PUX Fold Widget",o),r,n||"",c,u?`${e.ProtoUX._ImageFolder}caret-down.png`:`${e.ProtoUX._ImageFolder}caret-right.png`,function(){i.Expansion=!i.Expansion,d.rerender()},l,u?X(mp||(mp=L`<div class="PUX Fold-Content" style="
              height:${0}px; border:none;
            ">
              ${0}
            </>`),s,(a||[]).map(g=>X(xp||(xp=L`<${0} Widget=${0} ProtoUX=${0}/>`),ae,g,e.ProtoUX))):"")}}ue.registerWidgetView("Fold",Gf),ue.registerWidgetView("Deck",class extends ae{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,WidgetList:c}=e,d=ce(e,rv),g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"",p=(c||[])[a==null?0:a<0?c.length+a:a]||(c||[])[0];return X(_p||(_p=L`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>
        ${0}
      </>`),ge("PUX Deck Widget",r),i,g,o||"",d,p==null?X(Sp||(Sp=L`<${0}><span>(no card)</span></>`),xv):X(bp||(bp=L`<${0} Widget=${0} ProtoUX=${0}/>`),Yf,p,t.ProtoUX))}});class Yf extends ae{render(e){const i=e.Widget;i.View=this;const{Id:r,Classes:o,Style:n,WidgetList:s}=i,l=ce(i,nv);return X(yp||(yp=L`<div class=${0} id=${0} style="
        border:none; ${0};
        left:0px; top:0px; right:0px; bottom:0px; width:auto; height:auto
      " ...${0}>
        ${0}
      </>`),ge("PUX Card Widget",o),r,n||"",l,(s||[]).map(u=>X(vp||(vp=L`<${0} Widget=${0} ProtoUX=${0}/>`),ae,u,e.ProtoUX)))}}ue.registerWidgetView("Card",Yf),ue.registerWidgetView("TabStrip",class extends ae{render(t){const e=t.Widget;e.View=this;const{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Value:a,WidgetList:c}=e,d=ce(e,ov),g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"",p=(c||[])[a==null?0:a<0?c.length+a:a]||(c||[])[0],f=this;return X(wp||(wp=L`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>
        ${0}
      </>`),ge("PUX TabStrip Widget",r),i,g,o||"",d,(c||[]).map((m,x)=>X($p||($p=L`
          <${0} Widget=${0} ProtoUX=${0}
            active=${0}
            onClick=${0}
          />
        `),Zf,m,t.ProtoUX,m===p,()=>function(b){f.base.dispatchEvent(new CustomEvent("ValueChange",{detail:b}))}(x))))}});class Zf extends ae{render(e){const i=e.Widget;i.View=this;const{Id:r,Classes:o,Style:n,Width:s,WidgetList:l}=i,u=ce(i,av),{active:a,onClick:c}=e;return X(kp||(kp=L`<div class=${0} id=${0} style="
        ${0}; width:${0}px; border:none; border-width:0px 0px 4px 0px;
        border-style:solid; border-bottom-color:${0}
      " ...${0} onClick=${0}>
        ${0}
      </div>`),ge('PUX ${active ? "active" : ""} Tab Widget',o),r,n||"",s,a?"black":"transparent",u,c,(l||[]).map(d=>X(Ip||(Ip=L`<${0} Widget=${0} ProtoUX=${0}/>`),ae,d,e.ProtoUX)))}}function ge(t,e){const i=Object.create(null);return(t+" "+(e||"")).trim().replace(/\s+/g," ").split(" ").filter(r=>!(r in i)&&(i[r]=!0,!0)).join(" ")}ue.registerWidgetView("Tab",Zf),ue.registerWidgetView("FlatListView",class extends ae{render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,List:a,ItemRenderer:c,Placeholder:d,selectedIndices:g,SelectionLimit:p,onSelectionChange:f,onItemSelected:m,onItemDeselected:x}=e,b=ce(e,sv);const P=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";Pc("item list",a),$t("list item renderer",c),pa("list placeholder",d),ga("list of selected indices",g,Dn),Ui("selection limit",p),$t("selection change callback",f),$t("item selection callback",m),$t("item deselection callback",x),c==null&&(c=y=>X(Pp||(Pp=L`${0}`),y+"")),d==null&&(d="(empty)"),g==null&&(g=[]),p==null&&(p=1);const C=Object.create(null);if(g=g.filter(y=>!(!(Dn(y)&&y>=0&&y<a.length)||y in C||(C[y]=!0,0))),g.length>p){const y=g.slice(p);g.length=p,f!=null&&f(g),x!=null&&y.forEach(N=>{x(a[N],N)})}function w(y){return y in C}return X(Vp||(Vp=L`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>
        ${0}
      </>`),ge("PUX FlatListView Widget",r),i,P,o||"",b,a.length===0?X(Cp||(Cp=L`<div class="centered"><span>${0}</></>`),d):a.map((y,N)=>X(Bp||(Bp=L`<div
              class=${0}
              dangerouslySetInnerHTML=${0}
              onClick=${0}
            />`),w(N)?"selected":void 0,{__html:c(y,N,w(N))},B=>function(F,$){if(F.stopImmediatePropagation(),F.preventDefault(),p===0)return;let T,H,ee=!1;F.shiftKey||F.metaKey?(ee=!0,w($)?(H=[$],g=g.filter(te=>te!==$)):(g.length===p&&(H=[g.shift()]),T=[$],g.push($))):(H=g.filter(te=>te!==$),ee=!w($),T=ee?[$]:[],g=[$]),ee&&f!=null&&f(g),H!=null&&x!=null&&H.forEach(te=>{x(a[te],te)}),T!=null&&m!=null&&T.forEach(te=>{m(a[te],te)})}(B,N))))}}),ue.registerWidgetView("NestedListView",class extends ae{render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,List:a,ItemRenderer:c,Placeholder:d,LabelOfItem:g,ContentListOfItem:p,selectedPaths:f,SelectionLimit:m,SelectionMode:x,onSelectionChange:b,onItemSelected:P,onItemDeselected:C,onItemDoubleClicked:w,expandedPaths:y,Indentation:N,onExpansionChange:B,onItemExpanded:F,onItemCollapsed:$}=e,T=ce(e,lv);const H=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";function ee(j){return No(j,Dn)}var te;function Ne(j){let q=a[j[0]];for(let ye=1,Qe=j.length;ye<Qe;ye++){if(q==null)return;const lt=p(q);if(!oo(lt))return;q=lt[j[ye]]}return q}function Vt(j){return Ne(j)!=null}function Me(j,q){return j.length===q.length&&j.every((ye,Qe)=>ye===q[Qe])}function He(j,q){for(let ye=0,Qe=q.length;ye<Qe;ye++)if(Me(j,q[ye]))return ye;return-1}function Ze(j,q){return j.length===q.length+1&&Me(j.slice(0,q.length),q)}function jt(j){return He(j,f)>=0}if(Pc("item list",a),$t("list item renderer",c),pa("list placeholder",d),Ic("label extraction function",g),Ic("content extraction function",p),ga("list of selected paths",f,ee),Ui("selection limit",m),(te=x)==null||function(j,q,ye){if(q==null&&Ut("MissingArgument: no ".concat(pi(j)," given")),["same-container","any-container"].indexOf(q)>=0)return q==null||typeof q.valueOf!="function"?q:q.valueOf();Ut("InvalidArgument: the given ".concat(pi(j)," is not among the supported values"))}("selection mode",te),$t("selection change callback",b),$t("item selection callback",P),$t("item deselection callback",C),$t("item double-click callback",w),ga("list of expanded paths",y,ee),Ui("indentation",N),$t("expansion change callback",B),$t("item expansion callback",F),$t("item collapse callback",$),c==null&&(c=function(j,q){return X(Wp||(Wp=L`<div class="ItemLabel">${0}</div>`),g(j))}),d==null&&(d="(empty)"),f==null&&(f=[]),m==null&&(m=1),x==null&&(x="same-container"),y==null&&(y=[]),N==null&&(N=10),f=f.filter(j=>Vt(j)),f=f.filter((j,q)=>He(j,f)===q),f.length>1&&x==="same-container"){const j=f[0].slice(0,f[0].length-1);f=f.filter(q=>Ze(q,j))}function oi(j,q){const ye=(q.length-1)*N,Qe=jt(q),lt=function(Ee){return He(Ee,y)>=0}(q);let Oe=p(j);oo(Oe)||(Oe=[]);const ai=Oe.length>0;return X(Np||(Np=L`<div class="ItemView" style="padding-left:${0}px">
          <div class="ItemLine ${0}"
            onClick=${0} onDblClick=${0}
          >
            ${0} ${0}
          </div>
          ${0}
        </div>`),ye,Qe?"selected":"",function(Ee){(function(Pe,dt,D){if(Pe.stopImmediatePropagation(),Pe.preventDefault(),m===0)return;let R,M,z=!1;if(Pe.shiftKey||Pe.metaKey)if(z=!0,jt(D))M=[D],f=f.filter(G=>!Me(D,G));else{const G=D.slice(0,D.length-1);M=f.filter(ie=>!Ze(ie,G)),f=f.filter(ie=>Ze(ie,G)),f.length===m&&M.push([f.shift()]),R=[D],f.push(D)}else M=f.filter(G=>!Me(D,G)),z=!jt(D),R=z?[D]:[],f=[D];z&&b!=null&&b(f),M!=null&&C!=null&&M.forEach(G=>{C(Ne(G),G)}),R!=null&&P!=null&&R.forEach(G=>{P(Ne(G),G)})})(Ee,0,q)},function(Ee){(function(Pe,dt,D){w!=null&&(Pe.stopImmediatePropagation(),Pe.preventDefault(),w(dt,D,Pe))})(Ee,j,q)},ai?X(lt?Tp||(Tp=L`<img class="ItemExpander" src="/svg/icons/caret-down.svg"  onClick=${0}/>`):Dp||(Dp=L`<img class="ItemExpander" src="/svg/icons/caret-right.svg" onClick=${0}/>`),function(Ee){(function(Pe,dt,D){Pe.stopImmediatePropagation(),Pe.preventDefault();let R=He(D,y);R<0?y.push(D):y.splice(R,1),B!=null&&B(y),R<0?F!=null&&F(dt,D):$!=null&&$(dt,D)})(Ee,j,q)}):X(Fp||(Fp=L`<img class="ItemIcon" src="/svg/icons/circle.svg"/>`)),c(j,q),ai&&lt?Oe.map((Ee,Pe)=>oi(Ee,q.concat(Pe))):"")}return y=y.filter(j=>Vt(j)),y=y.filter((j,q)=>He(j,y)===q),X(Up||(Up=L`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>
        ${0}
      </>`),ge("PUX NestedListView Widget",r),i,H,o||"",T,a.length===0?X(Ap||(Ap=L`<div class="centered"><span>${0}</></>`),d):a.map((j,q)=>oi(j,[q])))}}),ue.registerWidgetView("Placeholder",class extends ae{render(t){const e=t.Widget;e.View=this;let{Id:i,Classes:r,Style:o,x:n,y:s,Width:l,Height:u,Substitute:a,Placeholder:c}=e,d=ce(e,uv);$t("Substitute",a),pa("placeholder text",c),c==null&&(c="(empty)");const g=n!=null&&l!=null&&s!=null&&u!=null?`left:${n}px; top:${s}px; width:${l}px; height:${u}px; right:auto; bottom:auto;`:"";return X(Lp||(Lp=L`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        ${0}
      </div>`),ge("PUX Placeholder Widget",r),i,g,o||"",a==null?X(Ep||(Ep=L`<div class="centered"><span>${0}</></>`),c):X(Xp||(Xp=L`<${0} ...${0}/>`),a,d))}});class xv extends Ht{render(e){return X(Mp||(Mp=L`<div class="centered">
        ${0}
      </div>`),e.children)}}const ke={},fr={},qf={Id:ke,Name:ke,ForegroundColor:ke,BackgroundColor:ke,BackgroundTexture:ke,FontFamily:ke,FontSize:ke,FontWeight:ke,FontStyle:ke,LineHeight:ke,activeScript:ke,pendingScript:ke,Script:ke,editableValue:ke,Error:ke,ScriptError:ke},Gr=Object.assign({SnapToGrid:ke,GridWidth:ke,GridHeight:ke},qf),rs=Object.assign({Index:ke},Gr),lo=Object.assign({Lock:ke,Visibility:ke,Geometry:ke,Index:ke,Enabling:ke},qf);let we=new ue;const h=we.observed,_v={persistedProjectList:[],normalizedProjectList:[],selectedProjectName:void 0,selectedProjectIndex:void 0,Project:void 0,ProjectProperties:Gr,ProjectToPersist:void 0,DelayTimer:void 0,DelayLimitTimer:void 0,PersistenceRequested:!1,PersistenceState:"idle",Mode:"run",ViewState:0,BoardTree:[],BoardTreeState:0,selectedBoards:[],expandedBoards:[],BoardSelectionMayBeShiftedUp:!1,BoardSelectionMayBeShiftedDown:!1,BoardSelectionMayBeShiftedIn:!1,BoardSelectionMayBeShiftedOut:!1,chosenBoard:void 0,BoardProperties:rs,StickerList:[],StickerGeometries:[],selectedStickers:[],StickerSelectionMayBeShiftedUp:!1,StickerSelectionMayBeShiftedDown:!1,StickerSelectionProperties:lo,StickerSelectionGeometries:[],OperationHistoryState:0,mayUndoOperation:!1,mayRedoOperation:!1,ShelfIsFilled:!1,VisitHistoryState:0,mayVisitPrevBoard:!1,mayVisitNextBoard:!1,InspectorIsOpen:!1,InspectorPaneGroup:"Project",InspectorPaneChoice:"Browser",InspectorPaneIndex:0,InspectorMessage:"(no project)",ValueEditorIsOpen:!1,ValueEditorMode:"Project",ScriptEditorIsOpen:!1,ScriptEditorMode:"Project",ScriptEditorMessage:"",ConsoleIsOpen:!1,ConsoleValue:""};Object.assign(h,_v);let Sv={},ns={};function hn(t,e,i,r){const o=we.existingWidgetNamed("DesignerButton");t=ns.x+i,e=ns.y+r;const n=we.existingScreenNamed("MainScreen"),{width:s,height:l}=n.View.base.getBoundingClientRect();t=Math.max(0,Math.min(t,s-32)),e=Math.max(0,Math.min(e,l-32)),we.updateWidget(o,{Style:`left:${t}px; top:${e}px`})}const pn=cv(Sv,{Threshold:1,onDragStarted:(t,e,i,r)=>{const o=we.existingWidgetNamed("DesignerButton"),{left:n,top:s}=o.View.base.getBoundingClientRect();ns={x:n,y:s},hn(t,e,i,r)},onDragContinued:hn,onDragFinished:hn,onDragCancelled:hn,onClicked:bv});function bv(t,e){const i=we.existingWidgetNamed("DesignerButton");i.View.base.style.visibility="hidden",ei("Toolbox",t,e),h.InspectorIsOpen&&we.openDialog("Inspector"),h.ValueEditorIsOpen&&we.openDialog("ValueEditor"),h.ScriptEditorIsOpen&&we.openDialog("ScriptEditor")}function Jf(){const t=we.existingWidgetNamed("DesignerButton");t.View.base.style.visibility=h.Project==null?"hidden":"visible",we.closeDialog("Toolbox"),we.closeDialog("Inspector"),we.closeDialog("ValueEditor"),we.closeDialog("ScriptEditor")}function yv(){var t,e,i;return wi`<${Ff}
      Mode=${h.Mode}
      Board=${h.chosenBoard} StickerList=${h.StickerList}
      selectedStickers=${h.selectedStickers}
      onSelectionChange=${r=>{h.selectedStickers=r.slice()}}
      LassoMode="contain"
      onGeometryChange=${(r,o)=>{el(r,o)}}
      SnapToGrid=${((t=h.BoardProperties)==null?void 0:t.SnapToGrid)===!0}
       GridWidth=${ot((e=h.BoardProperties)==null?void 0:e.GridWidth)||10}
      GridHeight=${ot((i=h.BoardProperties)==null?void 0:i.GridHeight)||10}
    />`}const Kf=wi`
    <option value="" disabled selected>please select</option>
    ${vx().map(t=>wi`
        <optgroup label="${t.GroupLabel}">
          ${vv(t.BehaviorEntryList)}
        </optgroup>
      `)}
  `;function vv(t){return wi`${t.map(e=>wv(e))}`}function wv(t){const{Name:e,Label:i,disabled:r}=t;return wi`<option value=${e} disabled=${r}>${i}</>`}function $v(t){const e=t.length===0;return wi`
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
    `}window.PUX=we;we.ImageFolder="/icons/";we.Style=`  #PUX_0 { background-image:url("/images/BinaryTexture_white.jpg") }
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

`;we.ScreenSet={MainScreen:{Name:"MainScreen",Id:"PUX_0",Width:768,Height:1024,packedGeometry:{x:31,y:30,Width:669,Height:749},WidgetList:[{Type:"Placeholder",Name:"BoardView",Classes:"Placeholder empty Container",x:31,Width:161,y:30,Height:90,Id:"PUX_1"},{Type:"Container",Name:"DesignerButton",Classes:"Container",x:210,Width:32,y:30,Height:32,Id:"PUX_52",WidgetList:[{Type:"Icon",Classes:"Icon",Value:'url("/images/pen.png")',Color:"black",Id:"PUX_68"}]},{Type:"ResizableDialog",Name:"Console",Classes:"ResizableDialog Container",x:421,Width:280,y:629,Height:151,Id:"PUX_79",WidgetList:[{Type:"TextInput",Name:"ConsoleView",Classes:"TextInput no-resize",Anchoring:"c",Value:"(ready for operation)",Id:"PUX_80"},{Type:"Icon",Name:"ConsoleClearButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/trash.png")',Color:"black",Id:"PUX_81"}]},{Type:"Dialog",Name:"Toolbox",Classes:"Dialog Container ",x:31,Width:130,y:130,Height:251,Id:"PUX_29",WidgetList:[{Type:"Icon",Name:"UndoButton",Classes:"Icon",Value:'url("/images/rotate-ccw.png")',Color:"black",Id:"PUX_3"},{Type:"Icon",Name:"RedoButton",Classes:"Icon",Value:'url("/images/rotate-cw.png")',Color:"black",Id:"PUX_4"},{Type:"PseudoDropDown",Name:"StickerCreateButton",Classes:"PseudoDropDown",Value:'url("/images/plus.png")',Color:"black",Id:"PUX_5"},{Type:"Icon",Name:"StickerDuplicateButton",Classes:"Icon",Value:'url("/images/clone.png")',Color:"black",Id:"PUX_6"},{Type:"Icon",Name:"StickerCutButton",Classes:"Icon",Value:'url("/images/scissors.png")',Color:"black",Id:"PUX_7"},{Type:"PseudoDropDown",Name:"StickerPasteButton",Classes:"PseudoDropDown",Value:'url("/images/clipboard-arrow-down.png")',Color:"black",Id:"PUX_8"},{Type:"Icon",Name:"StickerCopyButton",Classes:"Icon",Value:'url("/images/image133.png")',Color:"black",Id:"PUX_9"},{Type:"Icon",Name:"StickerDeleteButton",Classes:"Icon",Value:'url("/images/minus.png")',Color:"black",Id:"PUX_34"},{Type:"Icon",Name:"StickerConfigureButton",Classes:"Icon",Value:'url("/images/image95.png")',Color:"black",Id:"PUX_10"},{Type:"Icon",Name:"StickerShiftDownButton",Classes:"Icon",Value:'url("/images/arrow-sm-down.png")',Color:"black",Id:"PUX_11"},{Type:"Icon",Name:"StickerShiftUpButton",Classes:"Icon",Value:'url("/images/arrow-sm-up.png")',Color:"black",Id:"PUX_12"},{Type:"Icon",Name:"StickerShiftToTopButton",Classes:"Icon",Value:'url("/images/arrow-sm-up.png")',Color:"black",Id:"PUX_22"},{Type:"Icon",Name:"StickerShiftToBottomButton",Classes:"Icon",Value:'url("/images/arrow-sm-down.png")',Color:"black",Id:"PUX_25"},{Type:"Icon",Name:"ModeButton",Classes:"Icon",Value:'url("/images/draw-square.png")',Color:"black",Id:"PUX_13"},{Type:"PseudoDropDown",Name:"ExportButton",Classes:"PseudoDropDown",Value:'url("/images/arrow-down-to-bracket.png")',Color:"black",Id:"PUX_14"},{Type:"Icon",Name:"ImportButton",Classes:"Icon",Value:'url("/images/arrow-up-from-bracket.png")',Color:"black",Id:"PUX_15"},{Type:"FileInput",Name:"FileInput",Classes:"FileInput",Placeholder:"",Id:"PUX_105"},{Type:"Icon",Name:"InspectorButton",Classes:"Icon",Value:'url("/images/pen-ruler.png")',Color:"black",Id:"PUX_16"},{Type:"Icon",Name:"VisitNextButton",Classes:"Icon",Value:'url("/images/chevron-right.png")',Color:"black",Id:"PUX_17"},{Type:"Icon",Name:"VisitPrevButton",Classes:"Icon",Value:'url("/images/chevron-left.png")',Color:"black",Id:"PUX_18"},{Type:"Icon",Name:"SearchButton",Classes:"Icon",Value:'url("/images/search.png")',Color:"black",Id:"PUX_19"},{Type:"Icon",Name:"ChatButton",Classes:"Icon",Value:'url("/images/message-square-chat.png")',Color:"black",Id:"PUX_20"},{Type:"Icon",Name:"VisitHomeButton",Classes:"Icon",Value:'url("/images/house-line.png")',Color:"black",Id:"PUX_21"},{Type:"Icon",Name:"BoardPrintButton",Classes:"Icon",Value:'url("/images/printer.png")',Color:"black",Id:"PUX_30"},{Type:"Icon",Name:"ProjectBrowserButton",Classes:"Icon",Value:'url("/images/cloud-wired.png")',Color:"black",Id:"PUX_33"},{Type:"Icon",Name:"ConsoleButton",Classes:"Icon",Value:'url("/images/terminal.png")',Color:"black",Id:"PUX_32"},{Type:"PseudoDropDown",Name:"AppletGeneratorButton",Classes:"PseudoDropDown",Value:'url("/images/clapperboard-play.png")',Color:"black",Id:"PUX_31"},{Type:"Icon",Name:"StickerScriptButton",Classes:"Icon",Value:'url("/images/square-code.png")',Color:"black",Id:"PUX_35"}]},{Type:"ResizableDialog",Name:"ScriptEditor",Classes:"ResizableDialog Container",x:421,Width:280,y:130,Height:220,Id:"PUX_57",WidgetList:[{Type:"Icon",Name:"WithdrawButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/xmark.png")',Color:"black",Id:"PUX_53"},{Type:"Icon",Name:"ApplyButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/check.png")',Color:"black",Id:"PUX_54"},{Type:"TextInput",Name:"ScriptInput",Classes:"TextInput no-resize",Anchoring:"c",Placeholder:"Enter Script",Value:"",Id:"PUX_55"},{Type:"TextView",Name:"MessageView",Classes:"TextView",Anchoring:"s",Value:"",Id:"PUX_56"},{Type:"Icon",Name:"MessageViewButton",Classes:"Icon",Anchoring:"se",Value:'url("/images/triangle-exclamation.png")',Color:"black",Id:"PUX_58"},{Type:"Icon",Name:"ProjectModeButton",Classes:"Icon",Value:'url("/images/book-open.png")',Color:"black",Id:"PUX_59"},{Type:"Icon",Name:"StickerModeButton",Classes:"Icon",Value:'url("/images/square.png")',Color:"black",Id:"PUX_60"},{Type:"Icon",Name:"BoardModeButton",Classes:"Icon",Value:'url("/images/file.png")',Color:"black",Id:"PUX_61"}]},{Type:"ResizableDialog",Name:"Inspector",Classes:"ResizableDialog Container",x:181,Width:221,y:130,Height:251,Id:"PUX_43",WidgetList:[{Type:"Icon",Name:"ProjectModeButton",Classes:"Icon",Value:'url("/images/book-open.png")',Color:"black",Id:"PUX_36"},{Type:"Icon",Name:"StickerModeButton",Classes:"Icon",Value:'url("/images/square.png")',Color:"black",Id:"PUX_37"},{Type:"Icon",Name:"BoardModeButton",Classes:"Icon",Value:'url("/images/file.png")',Color:"black",Id:"PUX_38"},{Type:"Icon",Name:"ConfigurationPaneButton",Classes:"Icon",Value:'url("/images/sliders.png")',Color:"black",Id:"PUX_39"},{Type:"Icon",Name:"BrowserPaneButton",Classes:"Icon",Value:'url("/images/list.png")',Color:"black",Id:"PUX_40"},{Type:"horizontalSeparator",Classes:"horizontalSeparator",Anchoring:"n",Id:"PUX_41"},{Type:"Icon",Name:"ScriptEditorButton",Classes:"Icon",Value:'url("/images/square-code.png")',Color:"black",Id:"PUX_42"},{Type:"Text",Name:"MessageView",Classes:"Text",Anchoring:"s",Value:"(no error found)",Id:"PUX_92"},{Type:"Deck",Name:"Deck",Classes:"Deck empty Container",Anchoring:"c",Id:"PUX_50"}]},{Type:"ResizableDialog",Name:"ValueEditor",Classes:"ResizableDialog Container",x:421,Width:280,y:380,Height:220,Id:"PUX_69",WidgetList:[{Type:"TextInput",Name:"ValueInput",Classes:"TextInput no-resize",Anchoring:"c",Placeholder:"Enter Value",Value:"",Id:"PUX_88"},{Type:"Icon",Name:"ProjectModeButton",Classes:"Icon",Value:'url("/images/book-open.png")',Color:"black",Id:"PUX_70"},{Type:"Icon",Name:"StickerModeButton",Classes:"Icon",Value:'url("/images/square.png")',Color:"black",Id:"PUX_71"},{Type:"Icon",Name:"BoardModeButton",Classes:"Icon",Value:'url("/images/file.png")',Color:"black",Id:"PUX_72"}]},{Type:"ResizableDialog",Name:"ProjectBrowser",Classes:"ResizableDialog Container",x:31,Width:280,y:420,Height:336,Id:"PUX_104",WidgetList:[{Type:"Label",Classes:"Label",Value:"Recent Projects:",Id:"PUX_96"},{Type:"FlatListView",Name:"ProjectListView",Classes:"FlatListView",Anchoring:"c",Id:"PUX_97"},{Type:"Button",Name:"ProjectOpenButton",Classes:"vertically-centered Button",Anchoring:"sw",Value:"Open",Id:"PUX_93"},{Type:"Button",Name:"ProjectPurgeButton",Classes:"vertically-centered Button",Anchoring:"se",Value:"Purge",Id:"PUX_98"},{Type:"TextlineInput",Name:"ProjectNameInput",Classes:"TextlineInput",Anchoring:"s",Placeholder:"Enter unique Project Name",Value:"",Id:"PUX_100"},{Type:"Label",Classes:"Label",Anchoring:"sw",Value:"Project Name:",Id:"PUX_94"},{Type:"Button",Name:"ProjectCreateButton",Classes:"vertically-centered Button",Anchoring:"sw",Value:"New",Id:"PUX_95"},{Type:"Button",Name:"ProjectRenameButton",Classes:"vertically-centered Button",Anchoring:"se",Value:"Rename",Id:"PUX_99"}]}]},"Stuff Screen":{Name:"Stuff Screen",Id:"PUX_106",Width:768,Height:1024,packedGeometry:{x:20,y:19,Width:741,Height:950},WidgetList:[{Type:"Card",Name:"ProjectConfigurationPane",Classes:"Card Container",x:20,Width:242,y:19,Height:610,Id:"PUX_109",WidgetList:[{Type:"Label",Classes:"Label",Value:"Project Configuration",Id:"PUX_134"},{Type:"Label",Classes:"Label",Value:"Id",Id:"PUX_135"},{Type:"Label",Classes:"Label",Value:"Name",Id:"PUX_136"},{Type:"TextlineInput",Name:"IdView",Classes:"TextlineInput readonly",Anchoring:"n",Placeholder:"",Value:"",Id:"PUX_227"},{Type:"TextlineInput",Name:"NameView",Classes:"TextlineInput readonly",Anchoring:"n",Placeholder:"",Value:"",Id:"PUX_228"},{Type:"Checkbox",Name:"SnapToGridCheck",Classes:"Checkbox",Anchoring:"ne",Value:!0,Id:"PUX_229"},{Type:"Label",Classes:"Label",Value:"Typography",Id:"PUX_137"},{Type:"Label",Classes:"Label",Value:"Font",Id:"PUX_138"},{Type:"TextlineInput",Name:"FontFamilyInput",Classes:"TextlineInput",Anchoring:"n",Placeholder:"Enter Font Family",Value:"",Id:"PUX_230"},{Type:"Label",Classes:"Label",Value:"Font Size [px]",Id:"PUX_139"},{Type:"NumberInput",Name:"FontSizeInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"",Value:"",Id:"PUX_231"},{Type:"Label",Classes:"Label",Value:"Bold",Id:"PUX_140"},{Type:"Checkbox",Name:"BoldCheck",Classes:"Checkbox",Anchoring:"ne",Value:!0,Id:"PUX_232"},{Type:"Label",Classes:"Label",Value:"Italic",Id:"PUX_141"},{Type:"Checkbox",Name:"ItalicCheck",Classes:"Checkbox",Anchoring:"ne",Value:!0,Id:"PUX_233"},{Type:"Label",Classes:"Label",Value:"Text Color",Id:"PUX_142"},{Type:"ColorInput",Name:"TextColorInput",Classes:"ColorInput",Anchoring:"ne",Id:"PUX_234"},{Type:"Label",Classes:"Label",Value:"Line Height [px]",Id:"PUX_143"},{Type:"NumberInput",Name:"LineHeightInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"",Value:"",Id:"PUX_235"},{Type:"Label",Classes:"Label",Value:"Background",Id:"PUX_144"},{Type:"Label",Classes:"Label",Value:"Color",Id:"PUX_145"},{Type:"ColorInput",Name:"BackgroundColorInput",Classes:"ColorInput",Anchoring:"ne",Id:"PUX_236"},{Type:"Label",Classes:"Label",Value:"Texture",Id:"PUX_146"},{Type:"Label",Classes:"Label",Value:"Grid Size [px]",Id:"PUX_148"},{Type:"NumberInput",Name:"GridWidthInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"W",Value:"",Id:"PUX_243"},{Type:"NumberInput",Name:"GridHeightInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"H",Value:"",Id:"PUX_241"},{Type:"Label",Classes:"Label",Anchoring:"ne",Value:"x",Id:"PUX_242"},{Type:"Label",Classes:"Label",Value:"Snap-to-Grid",Id:"PUX_147"},{Type:"URLInput",Name:"TextureInput",Classes:"URLInput",Anchoring:"n",Placeholder:"Enter URL",Value:"",Id:"PUX_237"},{Type:"Label",Classes:"Label",Value:"Value",Id:"PUX_149"},{Type:"Icon",Name:"ValueEditorButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/image146.png")',Color:"black",Id:"PUX_240"},{Type:"TextInput",Name:"ValueInput",Classes:"TextInput no-resize",Anchoring:"c",Placeholder:"Enter Value",Value:"",Id:"PUX_150"}]},{Type:"Card",Name:"BoardConfigurationPane",Classes:"Card Container",x:271,Width:242,y:19,Height:610,Id:"PUX_110",WidgetList:[{Type:"Label",Classes:"Label",Value:"Board Configuration",Id:"PUX_151"},{Type:"Label",Classes:"Label",Value:"Id",Id:"PUX_152"},{Type:"Label",Classes:"Label",Value:"Name",Id:"PUX_153"},{Type:"TextlineInput",Name:"IdView",Classes:"TextlineInput readonly",Anchoring:"n",Placeholder:"",Value:"",Id:"PUX_216"},{Type:"TextlineInput",Name:"NameInput",Classes:"TextlineInput",Anchoring:"n",Placeholder:"Enter Name",Value:"",Id:"PUX_217"},{Type:"Checkbox",Name:"SnapToGridCheck",Classes:"Checkbox",Anchoring:"ne",Value:!0,Id:"PUX_218"},{Type:"Label",Classes:"Label",Value:"Typography",Id:"PUX_154"},{Type:"Label",Classes:"Label",Value:"Font",Id:"PUX_155"},{Type:"TextlineInput",Name:"FontFamilyInput",Classes:"TextlineInput",Anchoring:"n",Placeholder:"Enter Font Family",Value:"",Id:"PUX_219"},{Type:"Label",Classes:"Label",Value:"Font Size [px]",Id:"PUX_156"},{Type:"NumberInput",Name:"FontSizeInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"",Value:"",Id:"PUX_220"},{Type:"Label",Classes:"Label",Value:"Bold",Id:"PUX_157"},{Type:"Checkbox",Name:"BoldCheck",Classes:"Checkbox",Anchoring:"ne",Value:!0,Id:"PUX_221"},{Type:"Label",Classes:"Label",Value:"Italic",Id:"PUX_158"},{Type:"Checkbox",Name:"ItalicCheck",Classes:"Checkbox",Anchoring:"ne",Value:!0,Id:"PUX_222"},{Type:"Label",Classes:"Label",Value:"Text Color",Id:"PUX_159"},{Type:"ColorInput",Name:"TextColorInput",Classes:"ColorInput",Anchoring:"ne",Id:"PUX_223"},{Type:"Label",Classes:"Label",Value:"Line Height [px]",Id:"PUX_160"},{Type:"NumberInput",Name:"LineHeightInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"",Value:"",Id:"PUX_224"},{Type:"Label",Classes:"Label",Value:"Background",Id:"PUX_161"},{Type:"Label",Classes:"Label",Value:"Color",Id:"PUX_162"},{Type:"ColorInput",Name:"BackgroundColorInput",Classes:"ColorInput",Anchoring:"ne",Id:"PUX_225"},{Type:"Label",Classes:"Label",Value:"Texture",Id:"PUX_163"},{Type:"Label",Classes:"Label",Value:"Grid Size [px]",Id:"PUX_164"},{Type:"NumberInput",Name:"GridWidthInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"W",Value:"",Id:"PUX_244"},{Type:"NumberInput",Name:"GridHeightInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"H",Value:"",Id:"PUX_245"},{Type:"Label",Classes:"Label",Anchoring:"ne",Value:"x",Id:"PUX_246"},{Type:"Label",Classes:"Label",Value:"Snap-to-Grid",Id:"PUX_165"},{Type:"URLInput",Name:"TextureInput",Classes:"URLInput",Anchoring:"n",Placeholder:"Enter URL",Value:"",Id:"PUX_226"},{Type:"Label",Classes:"Label",Value:"Value",Id:"PUX_166"},{Type:"Icon",Name:"ValueEditorButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/image146.png")',Color:"black",Id:"PUX_239"},{Type:"TextInput",Name:"ValueInput",Classes:"TextInput no-resize",Anchoring:"c",Placeholder:"Enter Value",Value:"",Id:"PUX_167"}]},{Type:"Card",Name:"StickerConfigurationPane",Classes:"Card Container",x:520,Width:242,y:19,Height:791,Id:"PUX_111",WidgetList:[{Type:"Label",Classes:"Label",Value:"Sticker Configuration",Id:"PUX_168"},{Type:"Label",Classes:"Label",Value:"Id",Id:"PUX_169"},{Type:"Label",Classes:"Label",Value:"Name",Id:"PUX_170"},{Type:"TextlineInput",Name:"IdView",Classes:"TextlineInput readonly",Anchoring:"n",Placeholder:"",Value:"",Id:"PUX_190"},{Type:"TextlineInput",Name:"NameInput",Classes:"TextlineInput",Anchoring:"n",Placeholder:"Enter Name",Value:"",Id:"PUX_191"},{Type:"Label",Classes:"Label",Value:"Position",Id:"PUX_171"},{Type:"Label",Classes:"Label",Value:"Size",Id:"PUX_172"},{Type:"NumberInput",Name:"WidthInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"W",Value:"",Id:"PUX_192"},{Type:"NumberInput",Name:"HeightInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"H",Value:"",Id:"PUX_193"},{Type:"Label",Classes:"Label",Anchoring:"ne",Value:"x",Id:"PUX_194"},{Type:"NumberInput",Name:"xInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"x",Value:"",Id:"PUX_195"},{Type:"NumberInput",Name:"yInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"y",Value:"",Id:"PUX_196"},{Type:"Label",Classes:"Label",Anchoring:"ne",Value:",",Id:"PUX_197"},{Type:"Label",Classes:"Label",Value:"Layer",Id:"PUX_173"},{Type:"Icon",Name:"ShiftDownButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/arrow-sm-down.png")',Color:"black",Id:"PUX_198"},{Type:"Icon",Name:"ShiftUpButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/arrow-sm-up.png")',Color:"black",Id:"PUX_199"},{Type:"Box",Classes:"",Anchoring:"ne",Id:"PUX_200"},{Type:"Icon",Name:"ShiftToTopButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/arrow-sm-up.png")',Color:"black",Id:"PUX_201"},{Type:"Box",Classes:"",Anchoring:"ne",Id:"PUX_202"},{Type:"Icon",Name:"ShiftToBottomButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/arrow-sm-down.png")',Color:"black",Id:"PUX_203"},{Type:"NumberInput",Name:"IndexView",Classes:"NumberInput",Anchoring:"ne",Placeholder:"Layer",Value:"",Id:"PUX_204"},{Type:"Label",Classes:"Label",Value:"Lock",Id:"PUX_174"},{Type:"Checkbox",Name:"LockCheck",Classes:"Checkbox",Anchoring:"ne",Value:!0,Id:"PUX_205"},{Type:"Label",Classes:"Label",Value:"Layout and Visibility",Id:"PUX_175"},{Type:"Label",Classes:"Label",Value:"Typography",Id:"PUX_176"},{Type:"Label",Classes:"Label",Value:"Font",Id:"PUX_177"},{Type:"TextlineInput",Name:"FontFamilyInput",Classes:"TextlineInput",Anchoring:"n",Placeholder:"Enter Font Family",Value:"",Id:"PUX_206"},{Type:"Label",Classes:"Label",Value:"Font Size [px]",Id:"PUX_178"},{Type:"NumberInput",Name:"FontSizeInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"",Value:"",Id:"PUX_207"},{Type:"Label",Classes:"Label",Value:"Bold",Id:"PUX_179"},{Type:"Checkbox",Name:"BoldCheck",Classes:"Checkbox",Anchoring:"ne",Value:!0,Id:"PUX_208"},{Type:"Label",Classes:"Label",Value:"Italic",Id:"PUX_180"},{Type:"Checkbox",Name:"ItalicCheck",Classes:"Checkbox",Anchoring:"ne",Value:!0,Id:"PUX_209"},{Type:"Label",Classes:"Label",Value:"Text Color",Id:"PUX_181"},{Type:"ColorInput",Name:"TextColorInput",Classes:"ColorInput",Anchoring:"ne",Id:"PUX_210"},{Type:"Label",Classes:"Label",Value:"Line Height [px]",Id:"PUX_182"},{Type:"NumberInput",Name:"LineHeightInput",Classes:"NumberInput",Anchoring:"ne",Placeholder:"",Value:"",Id:"PUX_211"},{Type:"Label",Classes:"Label",Value:"Background",Id:"PUX_183"},{Type:"Label",Classes:"Label",Value:"Color",Id:"PUX_184"},{Type:"ColorInput",Name:"BackgroundColorInput",Classes:"ColorInput",Anchoring:"ne",Id:"PUX_212"},{Type:"Label",Classes:"Label",Value:"Texture",Id:"PUX_185"},{Type:"URLInput",Name:"TextureInput",Classes:"URLInput",Anchoring:"n",Placeholder:"Enter URL",Value:"",Id:"PUX_213"},{Type:"Label",Classes:"Label",Value:"Visibility",Id:"PUX_186"},{Type:"Checkbox",Name:"VisibilityCheck",Classes:"Checkbox",Anchoring:"ne",Value:!0,Id:"PUX_214"},{Type:"Label",Classes:"Label",Value:"Enabling",Id:"PUX_187"},{Type:"Checkbox",Name:"EnablingCheck",Classes:"Checkbox",Anchoring:"ne",Value:!0,Id:"PUX_215"},{Type:"Label",Classes:"Label",Value:"Value",Id:"PUX_188"},{Type:"Icon",Name:"ValueEditorButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/image146.png")',Color:"black",Id:"PUX_238"},{Type:"TextInput",Name:"ValueInput",Classes:"TextInput no-resize",Anchoring:"c",Placeholder:"Enter Value",Value:"",Id:"PUX_189"}]},{Type:"Card",Name:"BoardBrowserPane",Classes:"Card Container",x:20,Width:242,y:700,Height:270,Id:"PUX_107",WidgetList:[{Type:"Label",Classes:"Label",Value:"Board Browser",Id:"PUX_112"},{Type:"NestedListView",Name:"BoardTreeView",Classes:"NestedListView",Anchoring:"c",Id:"PUX_120"},{Type:"TextlineInput",Name:"BoardNameInput",Classes:"TextlineInput",Anchoring:"s",Placeholder:"Name",Value:"",Id:"PUX_121"},{Type:"Icon",Name:"BoardDeleteButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/minus.png")',Color:"black",Id:"PUX_119"},{Type:"Icon",Name:"BoardCreateButton",Classes:"Icon",Value:'url("/images/plus.png")',Color:"black",Id:"PUX_113"},{Type:"Icon",Name:"BoardDuplicateButton",Classes:"Icon",Value:'url("/images/clone.png")',Color:"black",Id:"PUX_114"},{Type:"Icon",Name:"BoardShiftDownButton",Classes:"Icon",Value:'url("/images/arrow-sm-down.png")',Color:"black",Id:"PUX_115"},{Type:"Icon",Name:"BoardShiftUpButton",Classes:"Icon",Value:'url("/images/arrow-sm-up.png")',Color:"black",Id:"PUX_116"},{Type:"Icon",Name:"BoardShiftOutButton",Classes:"Icon",Value:'url("/images/image21.png")',Color:"black",Id:"PUX_117"},{Type:"Icon",Name:"BoardShiftInButton",Classes:"Icon",Value:'url("/images/image23.png")',Color:"black",Id:"PUX_118"}]},{Type:"Card",Name:"StickerBrowserPane",Classes:"Card Container",x:271,Width:242,y:700,Height:270,Id:"PUX_108",WidgetList:[{Type:"Label",Classes:"Label",Value:"Sticker Browser",Id:"PUX_122"},{Type:"FlatListView",Name:"StickerListView",Classes:"FlatListView",Anchoring:"c",Id:"PUX_132"},{Type:"TextlineInput",Name:"StickerNameInput",Classes:"TextlineInput",Anchoring:"s",Placeholder:"Name",Value:"",Id:"PUX_133"},{Type:"Icon",Name:"StickerDeleteButton",Classes:"Icon",Anchoring:"ne",Value:'url("/images/minus.png")',Color:"black",Id:"PUX_131"},{Type:"PseudoDropDown",Name:"StickerCreateButton",Classes:"PseudoDropDown",Value:'url("/images/plus.png")',Color:"black",Id:"PUX_123"},{Type:"Icon",Name:"StickerDuplicateButton",Classes:"Icon",Value:'url("/images/clone.png")',Color:"black",Id:"PUX_124"},{Type:"Icon",Name:"StickerShiftDownButton",Classes:"Icon",Value:'url("/images/arrow-sm-down.png")',Color:"black",Id:"PUX_125"},{Type:"Icon",Name:"StickerShiftUpButton",Classes:"Icon",Value:'url("/images/arrow-sm-up.png")',Color:"black",Id:"PUX_126"},{Type:"Box",Classes:"",Id:"PUX_127"},{Type:"Icon",Name:"StickerShiftToTopButton",Classes:"Icon",Value:'url("/images/arrow-sm-up.png")',Color:"black",Id:"PUX_128"},{Type:"Box",Classes:"",Id:"PUX_129"},{Type:"Icon",Name:"StickerShiftToBottomButton",Classes:"Icon",Value:'url("/images/arrow-sm-down.png")',Color:"black",Id:"PUX_130"}]}]}};we.extractAllDialogs();we.stuff({Inspector:{Deck:{from:"Stuff Screen",with:["BoardBrowserPane","StickerBrowserPane","ProjectConfigurationPane","BoardConfigurationPane","StickerConfigurationPane"]}}});const k=we.updatedFrom;we.configure({MainScreen:{self:{Style:"left:0px; top:0px; right:0px; bottom:0px; width:auto; height:auto"},BoardView:{Style:"left:0px; top:0px; right:0px; bottom:0px; width:auto; height:auto",Substitute:yv,Rendering:k(()=>{})},DesignerButton:{Style:"left:auto; top:10px; right:10px; bottom:auto; background:white; visibility:hidden",onPointerDown:pn,onPointerMove:pn,onPointerUp:pn,onPointerCancel:pn}},ProjectBrowser:{self:{Title:"Project Browser",x:-1,y:-1,Style:"z-index:2000000",closeable:k(()=>h.Project!=null)},ProjectListView:{List:k(()=>h.persistedProjectList),Placeholder:"(no projects found)",selectedIndices:k(()=>h.selectedProjectIndex==null?[]:[h.selectedProjectIndex]),SelectionLimit:1,onSelectionChange:t=>{if(t.length===0)h.selectedProjectName=void 0,h.selectedProjectIndex=void 0,h.ProjectName=void 0;else{const e=t[0];h.selectedProjectName=h.persistedProjectList[e],h.selectedProjectIndex=e,h.ProjectName=h.selectedProjectName}}},ProjectOpenButton:{disabled:k(()=>h.selectedProjectIndex==null||ba(h.selectedProjectName)),onClick:()=>Vv(h.selectedProjectName)},ProjectPurgeButton:{disabled:k(()=>h.selectedProjectIndex==null||ba(h.selectedProjectName)),onClick:()=>Bv(h.selectedProjectName)},ProjectNameInput:{Value:k(()=>h.ProjectName),onInput:t=>h.ProjectName=t.target.value},ProjectCreateButton:{disabled:k(()=>!Rp(h.ProjectName)),onClick:()=>Pv(h.ProjectName)},ProjectRenameButton:{disabled:k(()=>h.selectedProjectIndex==null||ba(h.selectedProjectName)||!Rp(h.ProjectName)),onClick:()=>Cv(h.selectedProjectName,h.ProjectName)}},Toolbox:{self:{Title:"Toolbox",x:-1,y:-1,Style:"z-index:2000000",onClose:Jf},ModeButton:{disabled:k(()=>h.chosenBoard==null),Style:k(()=>h.Mode==="edit"?"background:#e8f0ff; outline:solid 2px #e8f0ff":""),onClick:()=>Wv()},InspectorButton:{disabled:k(()=>h.Project==null),Style:k(()=>h.InspectorIsOpen?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:t=>ei("Inspector",t.clientX,t.clientY)},ChatButton:{disabled:!0},ProjectBrowserButton:{Style:k(()=>h.ProjectBrowserIsOpen?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:t=>ei("ProjectBrowser",t.clientX,t.clientY)},StickerCreateButton:{disabled:k(()=>h.chosenBoard==null),Options:Kf,onInput:t=>{e0(t.target.value),t.target.value=""}},StickerDuplicateButton:{disabled:k(()=>!(h.chosenBoard!=null&&h.selectedStickers.length>0)),onClick:()=>t0(h.selectedStickers)},StickerConfigureButton:{disabled:k(()=>!(h.chosenBoard!=null&&h.selectedStickers.length>0)),onClick:t=>{ei("Inspector",t.clientX,t.clientY),gn("Stickers"),Sa("Configuration")}},StickerScriptButton:{disabled:k(()=>h.Project==null),Style:k(()=>h.ScriptEditorIsOpen?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:t=>ei("ScriptEditor",t.clientX,t.clientY)},StickerShiftToTopButton:{Style:"border-top:solid 2px black",disabled:k(()=>!(h.chosenBoard!=null&&h.selectedStickers.length>0&&h.StickerSelectionMayBeShiftedDown)),onClick:()=>ls(h.selectedStickers)},StickerShiftUpButton:{disabled:k(()=>!(h.chosenBoard!=null&&h.selectedStickers.length>0&&h.StickerSelectionMayBeShiftedDown)),onClick:()=>ss(h.selectedStickers)},StickerShiftDownButton:{disabled:k(()=>!(h.chosenBoard!=null&&h.selectedStickers.length>0&&h.StickerSelectionMayBeShiftedUp)),onClick:()=>as(h.selectedStickers)},StickerShiftToBottomButton:{Style:"border-bottom:solid 2px black",disabled:k(()=>!(h.chosenBoard!=null&&h.selectedStickers.length>0&&h.StickerSelectionMayBeShiftedUp)),onClick:()=>os(h.selectedStickers)},StickerCutButton:{disabled:k(()=>!(h.chosenBoard!=null&&h.selectedStickers.length>0)),onClick:()=>jv(h.selectedStickers)},StickerCopyButton:{disabled:k(()=>!(h.chosenBoard!=null&&h.selectedStickers.length>0)),onClick:()=>Rv(h.selectedStickers)},StickerPasteButton:{disabled:k(()=>!(h.chosenBoard!=null&&h.ShelfIsFilled)),Options:["close to current selection","at original place"],onInput:t=>{if(t.target.value==="close to current selection"){const{minX:e,minY:i}=c0(h.selectedStickers);Yv(e,i)}else Gv();t.target.value=""}},StickerDeleteButton:{disabled:k(()=>!(h.chosenBoard!=null&&h.selectedStickers.length>0)),onClick:()=>tl(h.selectedStickers)},UndoButton:{disabled:k(()=>!h.mayUndoOperation),onClick:()=>Zv()},RedoButton:{disabled:k(()=>!h.mayRedoOperation),onClick:()=>qv()},ImportButton:{disabled:k(()=>h.Project==null)},FileInput:{Style:"border:none",disabled:k(()=>h.Project==null),Value:"",Placeholder:"",accept:".json,application/json",onChange:t=>jp(t.target.files[0]),onDrop:t=>jp(t.dataTransfer.files[0])},ExportButton:{disabled:k(()=>h.Project==null),Options:["whole Project","active Board","selected Stickers"],onInput:t=>{Qv(t.target.value),t.target.value=""}},VisitPrevButton:{disabled:k(()=>!h.mayVisitPrevBoard),onClick:()=>Jv()},VisitNextButton:{disabled:k(()=>!h.mayVisitNextBoard),onClick:()=>Kv()},VisitHomeButton:{disabled:k(()=>h.BoardTree.length===0||h.chosenBoard===h.BoardTree[0]),onClick:()=>{var t;return i0((t=h.Project)==null?void 0:t.Board(0))}},SearchButton:{disabled:!0},ConsoleButton:{Style:k(()=>h.ConsoleIsOpen?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:t=>ei("Console",t.clientX,t.clientY)},AppletGeneratorButton:{disabled:k(()=>h.chosenBoard==null),Options:k(()=>$v(h.selectedStickers)),onInput:t=>{const e=h.chosenBoard;if(e==null)return;const[i,r]=t.target.value.split(":");switch(t.target.value="",i){case"Board":return ew(e,r);case"Boards":return tw(e,r);case"Stickers":default:return iw(h.selectedStickers,r)}}},BoardPrintButton:{disabled:k(()=>h.chosenBoard==null),onClick:()=>rw()}},Inspector:{self:{Title:"Inspector",x:-1,y:-1,minWidth:300,minHeight:460,Width:300,Height:460,Style:"z-index:2000000",onOpen:()=>h.InspectorIsOpen=!0,onClose:()=>h.InspectorIsOpen=!1},ProjectModeButton:{disabled:k(()=>h.Project==null),Style:k(()=>h.InspectorPaneGroup==="Project"?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:()=>gn("Project")},BoardModeButton:{disabled:k(()=>h.Project==null),Style:k(()=>h.InspectorPaneGroup==="Board"?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:()=>gn("Board")},StickerModeButton:{disabled:k(()=>h.Project==null),Style:k(()=>h.InspectorPaneGroup==="Stickers"?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:()=>gn("Stickers")},BrowserPaneButton:{disabled:k(()=>h.Project==null||h.InspectorPaneGroup==="Stickers"),Style:k(()=>h.InspectorPaneChoice==="Browser"?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:()=>Sa("Browser")},ConfigurationPaneButton:{disabled:k(()=>h.Project==null),Style:k(()=>h.InspectorPaneChoice==="Configuration"?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:()=>Sa("Configuration")},ScriptEditorButton:{disabled:k(()=>h.Project==null),onClick:t=>{ei("ScriptEditor",t.clientX,t.clientY),h.ScriptEditorMode=h.InspectorPaneGroup}},Deck:{Style:"overflow-x:hidden; overflow-y:scroll; overflow:hidden scroll",Value:k(()=>h.InspectorPaneIndex)},MessageView:{Value:k(()=>h.InspectorMessage)}},ValueEditor:{self:{Title:"Value Editor",x:-1,y:-1,Style:"z-index:2000000",onOpen:()=>h.ValueEditorIsOpen=!0,onClose:()=>h.ValueEditorIsOpen=!1},ProjectModeButton:{disabled:k(()=>h.Project==null),Style:k(()=>h.ValueEditorMode==="Project"?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:()=>h.ValueEditorMode="Project"},BoardModeButton:{disabled:k(()=>h.Project==null),Style:k(()=>h.ValueEditorMode==="Board"?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:()=>h.ValueEditorMode="Board"},StickerModeButton:{disabled:k(()=>h.Project==null),Style:k(()=>h.ValueEditorMode==="Stickers"?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:()=>h.ValueEditorMode="Stickers"},ValueInput:{disabled:k(()=>h.ValueEditorMode==="Project"?h.Project==null:h.ValueEditorMode==="Board"?h.chosenBoard==null:h.selectedStickers.length===0),Value:k(()=>h.ValueEditorMode==="Project"?We(h.ProjectProperties.editableValue):h.ValueEditorMode==="Board"?We(h.BoardProperties.editableValue):We(h.StickerSelectionProperties.editableValue)),Placeholder:k(()=>h.ValueEditorMode==="Project"?"(enter project value)":h.ValueEditorMode==="Board"?"(enter a value for the currently active board)":"(enter a common value for all currently selected stickers)"),onInput:t=>{switch(h.ValueEditorMode){case"Project":return h.Project==null?void 0:St(h.Project,"editableValue",t.target.value);case"Board":return h.chosenBoard==null?void 0:ut(h.chosenBoard,"editableValue",t.target.value);case"Stickers":default:return Je(h.selectedStickers,"editableValue",t.target.value)}}}},ScriptEditor:{self:{Title:"Script Editor",x:-1,y:-1,Style:"z-index:2000000",onOpen:()=>h.ScriptEditorIsOpen=!0,onClose:()=>h.ScriptEditorIsOpen=!1},ProjectModeButton:{disabled:k(()=>h.Project==null),Style:k(()=>h.ScriptEditorMode==="Project"?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:()=>h.ScriptEditorMode="Project"},BoardModeButton:{disabled:k(()=>h.Project==null),Style:k(()=>h.ScriptEditorMode==="Board"?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:()=>h.ScriptEditorMode="Board"},StickerModeButton:{disabled:k(()=>h.Project==null),Style:k(()=>h.ScriptEditorMode==="Stickers"?"background:#e8f0ff; outline:solid 2px lightgray; border-radius:4px":""),onClick:()=>h.ScriptEditorMode="Stickers"},ScriptInput:{Style:"white-space:pre",disabled:k(()=>h.ScriptEditorMode==="Project"?h.Project==null:h.ScriptEditorMode==="Board"?h.chosenBoard==null:h.selectedStickers.length===0),Value:k(()=>h.ScriptEditorMode==="Project"?We(h.ProjectProperties.Script):h.ScriptEditorMode==="Board"?We(h.BoardProperties.Script):We(h.StickerSelectionProperties.Script)),Placeholder:k(()=>h.ScriptEditorMode==="Project"?"(enter project script)":h.ScriptEditorMode==="Board"?"(enter script for the currently active board)":"(enter common script for all currently selected stickers)"),onInput:t=>{switch(h.ScriptEditorMode){case"Project":return h.Project==null?void 0:St(h.Project,"pendingScript",t.target.value);case"Board":return h.chosenBoard==null?void 0:ut(h.chosenBoard,"pendingScript",t.target.value);case"Stickers":default:return Je(h.selectedStickers,"pendingScript",t.target.value)}}},ApplyButton:{disabled:k(()=>h.ScriptEditorMode==="Project"||h.ScriptEditorMode==="Board"?h.ProjectProperties.Script===h.ProjectProperties.activeScript:h.StickerSelectionProperties.Script===h.StickerSelectionProperties.activeScript),onClick:()=>{switch(h.ScriptEditorMode){case"Project":return h.Project==null?void 0:Nv(h.Project);case"Board":return h.chosenBoard==null?void 0:Uv(h.chosenBoard);case"Stickers":default:return Ov(h.selectedStickers)}}},WithdrawButton:{disabled:!0,onClick:()=>{switch(h.ScriptEditorMode){case"Project":return h.Project==null?void 0:Tv(h.Project);case"Board":return h.chosenBoard==null?void 0:Av(h.chosenBoard);case"Stickers":default:return zv(h.selectedStickers)}}},MessageView:{Style:"bottom:0px; font-size:13px; padding-top:3px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis",Value:k(()=>Dw(h.ScriptEditorMode==="Project"||h.ScriptEditorMode==="Board"?h.ProjectProperties.ScriptError:h.StickerSelectionProperties.ScriptError))},MessageViewButton:{Style:"bottom:3px",disabled:k(()=>!fs(h.ScriptEditorMode==="Project"||h.ScriptEditorMode==="Board"?h.ProjectProperties.ScriptError:h.StickerSelectionProperties.ScriptError)),onClick:()=>Fw(h.ScriptEditorMode==="Project"||h.ScriptEditorMode==="Board"?h.ProjectProperties.ScriptError:h.StickerSelectionProperties.ScriptError)}},Console:{self:{Title:"Console",x:-1,y:-1,Style:"z-index:2000000",onOpen:()=>h.ConsoleIsOpen=!0,onClose:()=>h.ConsoleIsOpen=!1},ConsoleClearButton:{Style:"top:2px; z-index:1",disabled:k(()=>h.ConsoleValue===""),onClick:()=>Uo()},ConsoleView:{Style:"bottom:0px; border:solid 4px transparent; color:green",readonly:!0,Value:k(()=>h.ConsoleValue)}}});we.configure({"Stuff Screen":{BoardBrowserPane:{BoardTreeView:{List:k(()=>(h.BoardTreeState,h.chosenBoard,h.BoardTree)),LabelOfItem:t=>t.Name,ContentListOfItem:t=>t.BoardList,ItemRenderer:(t,e)=>{const i=h.chosenBoard===t?"font-weight:bold; text-decoration:underline":void 0;return t.Name==null?wi`<div class="ItemLabel" style=${i}><i>(unnamed)</i></div>`:wi`<div class="ItemLabel" style=${i}>${t.Name}</div>`},SelectionMode:"same-container",SelectionLimit:Number.MAX_SAFE_INTEGER,selectedPaths:k(()=>(h.BoardTreeState,Yp(h.selectedBoards))),onSelectionChange:t=>h.selectedBoards=Zp(t),onItemDoubleClicked:t=>i0(t),expandedPaths:k(()=>(h.BoardTreeState,Yp(h.expandedBoards))),onExpansionChange:t=>h.expandedBoards=Zp(t)},BoardCreateButton:{disabled:k(()=>h.Project==null),onClick:()=>Dv(h.selectedBoards)},BoardDuplicateButton:{disabled:k(()=>h.selectedBoards.length===0),onClick:()=>Fv(h.selectedBoards)},BoardShiftOutButton:{disabled:k(()=>!h.BoardSelectionMayBeShiftedOut),onClick:()=>Ev(h.selectedBoards)},BoardShiftInButton:{disabled:k(()=>!h.BoardSelectionMayBeShiftedIn),onClick:()=>Lv(h.selectedBoards)},BoardShiftUpButton:{disabled:k(()=>!h.BoardSelectionMayBeShiftedUp),onClick:()=>Xv(h.selectedBoards)},BoardShiftDownButton:{disabled:k(()=>!h.BoardSelectionMayBeShiftedDown),onClick:()=>Mv(h.selectedBoards)},BoardDeleteButton:{disabled:k(()=>h.selectedBoards.length===0),onClick:()=>Hv(h.selectedBoards)},BoardNameInput:{disabled:k(()=>h.selectedBoards.length!==1),Value:k(()=>h.BoardTreeState&&We(h.selectedBoards.length===0?ke:h.selectedBoards.length===1?h.selectedBoards[0].Name:fr)),onInput:t=>{h.selectedBoards.length===1&&ut(h.selectedBoards[0],"Name",t.target.value)}}},StickerBrowserPane:{StickerListView:{List:k(()=>(h.ViewState,h.StickerList)),ItemRenderer:t=>t.Name==null?'<div class="ItemLabel"><i>(unnamed)</i></div>':`<div class="ItemLabel">${t.Name}</div>`,Placeholder:"(board is empty)",selectedIndices:k(()=>(h.ViewState,h.selectedStickers.map(t=>t.Index))),SelectionLimit:Number.MAX_SAFE_INTEGER,onSelectionChange:t=>{const e=h.chosenBoard;e!=null&&(h.selectedStickers=t.map(i=>e.Sticker(i)))}},StickerCreateButton:{disabled:k(()=>h.chosenBoard==null),Options:Kf,onInput:t=>{e0(t.target.value),t.target.value=""}},StickerDuplicateButton:{disabled:k(()=>h.selectedStickers.length==0),onClick:()=>t0(h.selectedStickers)},StickerShiftToTopButton:{disabled:k(()=>!h.StickerSelectionMayBeShiftedUp),onClick:()=>os(h.selectedStickers)},StickerShiftUpButton:{disabled:k(()=>!h.StickerSelectionMayBeShiftedUp),onClick:()=>as(h.selectedStickers)},StickerShiftDownButton:{disabled:k(()=>!h.StickerSelectionMayBeShiftedDown),onClick:()=>ss(h.selectedStickers)},StickerShiftToBottomButton:{disabled:k(()=>!h.StickerSelectionMayBeShiftedDown),onClick:()=>ls(h.selectedStickers)},StickerDeleteButton:{disabled:k(()=>h.selectedStickers.length===0),onClick:()=>tl(h.selectedStickers)},StickerNameInput:{disabled:k(()=>h.selectedStickers.length===0),Value:k(()=>We(h.StickerSelectionProperties.Name)),onInput:t=>Je(h.selectedStickers,"Name",t.target.value)}},ProjectConfigurationPane:{IdView:{readonly:!0,Value:k(()=>We(h.ProjectProperties.Id))},NameInput:{readonly:!0,Value:k(()=>We(h.ProjectProperties.Name))},SnapToGridCheck:{disabled:k(()=>h.Project==null),Value:k(()=>Rt(h.ProjectProperties.SnapToGrid)),onInput:t=>{h.Project!=null&&St(h.Project,"SnapToGrid",t.target.checked)}},GridWidthInput:{min:0,step:1,disabled:k(()=>h.Project==null),Value:k(()=>ot(h.ProjectProperties.GridWidth)),onInput:t=>{h.Project!=null&&St(h.Project,"GridWidth",parseInt(t.target.value,10))}},GridHeightInput:{min:0,step:1,disabled:k(()=>h.Project==null),Value:k(()=>ot(h.ProjectProperties.GridHeight)),onInput:t=>{h.Project!=null&&St(h.Project,"GridHeight",parseInt(t.target.value,10))}},FontFamilyInput:{disabled:k(()=>h.Project==null),Value:k(()=>We(h.ProjectProperties.FontFamily)),onInput:t=>{h.Project!=null&&St(h.Project,"FontFamily",t.target.value)}},FontSizeInput:{min:0,step:1,disabled:k(()=>h.Project==null),Value:k(()=>ot(h.ProjectProperties.FontSize)),onInput:t=>{h.Project!=null&&St(h.Project,"FontSize",parseInt(t.target.value,10))}},BoldCheck:{disabled:k(()=>h.Project==null),Value:k(()=>Rt(h.ProjectProperties.FontWeight,700)),onInput:t=>{h.Project!=null&&St(h.Project,"FontWeight",t.target.checked?700:400)}},ItalicCheck:{disabled:k(()=>h.Project==null),Value:k(()=>Rt(h.ProjectProperties.FontStyle,"italic")),onInput:t=>{h.Project!=null&&St(h.Project,"FontStyle",t.target.checked?"italic":"normal")}},TextColorInput:{disabled:k(()=>h.Project==null),Value:k(()=>We(h.ProjectProperties.ForegroundColor)),onInput:t=>{h.Project!=null&&St(h.Project,"ForegroundColor",t.target.value)}},LineHeightInput:{min:0,step:1,disabled:k(()=>h.Project==null),Value:k(()=>ot(h.ProjectProperties.LineHeight)),onInput:t=>{h.Project!=null&&St(h.Project,"LineHeight",parseInt(t.target.value,10))}},BackgroundColorInput:{disabled:k(()=>h.Project==null),Value:k(()=>We(h.ProjectProperties.BackgroundColor)),onInput:t=>{h.Project!=null&&St(h.Project,"BackgroundColor",t.target.value)}},TextureInput:{disabled:k(()=>h.Project==null),Value:k(()=>We(h.ProjectProperties.BackgroundTexture)),onInput:t=>{h.Project!=null&&St(h.Project,"BackgroundTexture",t.target.value)}},ValueInput:{Style:"min-height:100px",disabled:k(()=>h.Project==null),Value:k(()=>We(h.ProjectProperties.editableValue)),Placeholder:k(()=>"(enter a value for the currently active board)"),onInput:t=>{h.Project!=null&&St(h.Project,"editableValue",t.target.value)}},ValueEditorButton:{onClick:t=>{ei("ValueEditor",t.clientX,t.clientY),h.ValueEditorMode="Project"}}},BoardConfigurationPane:{IdView:{readonly:!0,Value:k(()=>We(h.BoardProperties.Id))},NameInput:{disabled:k(()=>h.chosenBoard==null),Value:k(()=>We(h.BoardProperties.Name)),onInput:t=>{h.chosenBoard!=null&&ut(h.chosenBoard,"Name",t.target.value)}},SnapToGridCheck:{disabled:k(()=>h.chosenBoard==null),Value:k(()=>Rt(h.BoardProperties.SnapToGrid)),onInput:t=>{h.chosenBoard!=null&&ut(h.chosenBoard,"SnapToGrid",t.target.checked)}},GridWidthInput:{min:0,step:1,disabled:k(()=>h.chosenBoard==null),Value:k(()=>ot(h.BoardProperties.GridWidth)),onInput:t=>{h.chosenBoard!=null&&ut(h.chosenBoard,"GridWidth",parseInt(t.target.value,10))}},GridHeightInput:{min:0,step:1,disabled:k(()=>h.chosenBoard==null),Value:k(()=>ot(h.BoardProperties.GridHeight)),onInput:t=>{h.chosenBoard!=null&&ut(h.chosenBoard,"GridHeight",parseInt(t.target.value,10))}},FontFamilyInput:{disabled:k(()=>h.chosenBoard==null),Value:k(()=>We(h.BoardProperties.FontFamily)),onInput:t=>{h.chosenBoard!=null&&ut(h.chosenBoard,"FontFamily",t.target.value)}},FontSizeInput:{min:0,step:1,disabled:k(()=>h.chosenBoard==null),Value:k(()=>ot(h.BoardProperties.FontSize)),onInput:t=>{h.chosenBoard!=null&&ut(h.chosenBoard,"FontSize",parseInt(t.target.value,10))}},BoldCheck:{disabled:k(()=>h.chosenBoard==null),Value:k(()=>Rt(h.BoardProperties.FontWeight,700)),onInput:t=>{h.chosenBoard!=null&&ut(h.chosenBoard,"FontWeight",t.target.checked?700:400)}},ItalicCheck:{disabled:k(()=>h.chosenBoard==null),Value:k(()=>Rt(h.BoardProperties.FontStyle,"italic")),onInput:t=>{h.chosenBoard!=null&&ut(h.chosenBoard,"FontStyle",t.target.checked?"italic":"normal")}},TextColorInput:{disabled:k(()=>h.chosenBoard==null),Value:k(()=>We(h.BoardProperties.ForegroundColor)),onInput:t=>{h.chosenBoard!=null&&ut(h.chosenBoard,"ForegroundColor",t.target.value)}},LineHeightInput:{min:0,step:1,disabled:k(()=>h.chosenBoard==null),Value:k(()=>ot(h.BoardProperties.LineHeight)),onInput:t=>{h.chosenBoard!=null&&ut(h.chosenBoard,"LineHeight",parseInt(t.target.value,10))}},BackgroundColorInput:{disabled:k(()=>h.chosenBoard==null),Value:k(()=>We(h.BoardProperties.BackgroundColor)),onInput:t=>{h.chosenBoard!=null&&ut(h.chosenBoard,"BackgroundColor",t.target.value)}},TextureInput:{disabled:k(()=>h.chosenBoard==null),Value:k(()=>We(h.BoardProperties.BackgroundTexture)),onInput:t=>{h.chosenBoard!=null&&ut(h.chosenBoard,"BackgroundTexture",t.target.value)}},ValueInput:{Style:"min-height:100px",disabled:k(()=>h.chosenBoard==null),Value:k(()=>We(h.BoardProperties.editableValue)),Placeholder:k(()=>"(enter a value for the currently active board)"),onInput:t=>{h.chosenBoard!=null&&ut(h.chosenBoard,"editableValue",t.target.value)}},ValueEditorButton:{onClick:t=>{ei("ValueEditor",t.clientX,t.clientY),h.ValueEditorMode="Board"}}},StickerConfigurationPane:{IdView:{readonly:!0,Value:k(()=>We(h.StickerSelectionProperties.Id))},NameInput:{disabled:k(()=>h.selectedStickers.length===0),Value:k(()=>We(h.StickerSelectionProperties.Name)),onInput:t=>Je(h.selectedStickers,"Name",t.target.value)},LockCheck:{disabled:k(()=>h.selectedStickers.length===0),Value:k(()=>Rt(h.StickerSelectionProperties.Lock)),onInput:t=>Je(h.selectedStickers,"Lock",t.target.checked)},VisibilityCheck:{disabled:k(()=>h.selectedStickers.length===0),Value:k(()=>Rt(h.StickerSelectionProperties.Visibility)),onInput:t=>Je(h.selectedStickers,"Visibility",t.target.checked)},xInput:{step:1,disabled:k(()=>h.selectedStickers.length===0),Value:k(()=>ot(h.StickerSelectionProperties.Geometry.x)),onInput:t=>Je(h.selectedStickers,"x",parseInt(t.target.value,10))},yInput:{step:1,disabled:k(()=>h.selectedStickers.length===0),Value:k(()=>ot(h.StickerSelectionProperties.Geometry.y)),onInput:t=>Je(h.selectedStickers,"y",parseInt(t.target.value,10))},WidthInput:{min:0,step:1,disabled:k(()=>h.selectedStickers.length===0),Value:k(()=>ot(h.StickerSelectionProperties.Geometry.Width)),onInput:t=>Je(h.selectedStickers,"Width",parseInt(t.target.value,10))},HeightInput:{min:0,step:1,disabled:k(()=>h.selectedStickers.length===0),Value:k(()=>ot(h.StickerSelectionProperties.Geometry.Height)),onInput:t=>Je(h.selectedStickers,"Height",parseInt(t.target.value,10))},IndexView:{readonly:!0,Value:k(()=>ot(h.StickerSelectionProperties.Index))},ShiftToTopButton:{disabled:k(()=>!h.StickerSelectionMayBeShiftedDown),onClick:()=>ls(h.selectedStickers)},ShiftUpButton:{disabled:k(()=>!h.StickerSelectionMayBeShiftedDown),onClick:()=>ss(h.selectedStickers)},ShiftDownButton:{disabled:k(()=>!h.StickerSelectionMayBeShiftedUp),onClick:()=>as(h.selectedStickers)},ShiftToBottomButton:{disabled:k(()=>!h.StickerSelectionMayBeShiftedUp),onClick:()=>os(h.selectedStickers)},FontFamilyInput:{disabled:k(()=>h.selectedStickers.length===0),Value:k(()=>We(h.StickerSelectionProperties.FontFamily)),onInput:t=>Je(h.selectedStickers,"FontFamily",t.target.value)},FontSizeInput:{min:0,step:1,disabled:k(()=>h.selectedStickers.length===0),Value:k(()=>ot(h.StickerSelectionProperties.FontSize)),onInput:t=>Je(h.selectedStickers,"FontSize",parseInt(t.target.value,10))},BoldCheck:{disabled:k(()=>h.selectedStickers.length===0),Value:k(()=>Rt(h.StickerSelectionProperties.FontWeight,700)),onInput:t=>Je(h.selectedStickers,"FontWeight",t.target.checked?700:400)},ItalicCheck:{disabled:k(()=>h.selectedStickers.length===0),Value:k(()=>Rt(h.StickerSelectionProperties.FontStyle,"italic")),onInput:t=>Je(h.selectedStickers,"FontStyle",t.target.checked?"italic":"normal")},TextColorInput:{disabled:k(()=>h.selectedStickers.length===0),Value:k(()=>We(h.StickerSelectionProperties.ForegroundColor)),onInput:t=>Je(h.selectedStickers,"ForegroundColor",t.target.value)},LineHeightInput:{min:0,step:1,disabled:k(()=>h.selectedStickers.length===0),Value:k(()=>ot(h.StickerSelectionProperties.LineHeight)),onInput:t=>Je(h.selectedStickers,"LineHeight",parseInt(t.target.value,10))},BackgroundColorInput:{disabled:k(()=>h.selectedStickers.length===0),Value:k(()=>We(h.StickerSelectionProperties.BackgroundColor)),onInput:t=>Je(h.selectedStickers,"BackgroundColor",t.target.value)},TextureInput:{disabled:k(()=>h.selectedStickers.length===0),Value:k(()=>We(h.StickerSelectionProperties.BackgroundTexture)),onInput:t=>Je(h.selectedStickers,"BackgroundTexture",t.target.value)},EnablingCheck:{disabled:k(()=>h.selectedStickers.length===0),Value:k(()=>Rt(h.StickerSelectionProperties.Enabling)),onInput:t=>Je(h.selectedStickers,"Enabling",t.target.checked)},ValueInput:{Style:"min-height:100px",disabled:k(()=>h.selectedStickers.length===0),Value:k(()=>We(h.StickerSelectionProperties.editableValue)),Placeholder:k(()=>"(enter a common value for all currently selected stickers)"),onInput:t=>Je(h.selectedStickers,"editableValue",t.target.value)},ValueEditorButton:{onClick:t=>{ei("ValueEditor",t.clientX,t.clientY),h.ValueEditorMode="Stickers"}}}}});we.startWithScreen("MainScreen");we.renderInto(document.body);const kv=we.existingWidgetNamed("BoardView").View;function gn(t){t==="Stickers"&&h.InspectorPaneChoice==="Browser"&&(h.InspectorPaneChoice="Configuration"),h.InspectorPaneGroup=t,Qf()}function Sa(t){h.InspectorPaneGroup==="Stickers"&&t==="Browser"&&(t="Configuration"),h.InspectorPaneChoice=t,Qf()}function Qf(){const t={Project:{Browser:0,Configuration:2},Board:{Browser:1,Configuration:3},Stickers:{Browser:1,Configuration:4}},e=h.InspectorPaneGroup,i=h.InspectorPaneChoice;h.InspectorPaneIndex=t[e][i]}function ei(t,e,i){let r=we.existingDialogNamed(t);if(r.x===-1&&r.y===-1){const{Width:o,Height:n}=r,s=we.existingScreenNamed("MainScreen"),{width:l,height:u}=s.View.base.getBoundingClientRect();r.x=Math.max(0,Math.min(e,l-o)),r.y=Math.max(0,Math.min(i,u-n))}we.openDialog(t)}function Iv(t){let e=we.existingDialogNamed(t);if(e.x===-1&&e.y===-1){const{Width:i,Height:r}=e,o=we.existingScreenNamed("MainScreen"),{width:n,height:s}=o.View.base.getBoundingClientRect();e.x=Math.max(0,Math.round((n-i)/2)),e.y=Math.max(0,Math.round((s-r)/2))}we.openDialog(t)}async function Pv(t){n0()&&lr(),await ow(t),await r0(t),we.closeDialog("ProjectBrowser")}async function Vv(t){n0()&&lr(),await r0(t),we.closeDialog("ProjectBrowser")}function Cv(t,e){il("Do you really want to rename project "+gt(t)+" to "+gt(e)+"?")&&aw(t,e)}function Bv(t){il("Do you really want to delete project "+gt(t)+"?")&&sw(t)}function Wv(){const t=h.Mode;h.Mode=t==="edit"?"run":"edit"}function St(t,e,i){Xe(new Ao(t,e,i))}function Nv(t){dl(t)}function Tv(t){Xe(new Ao(t,"pendingScript",void 0)),t.ScriptError=void 0}function Dv(t){let e,i;if(t.length>0)e=t[0].Folder,i=Yr(t)+1;else{const r=h.chosenBoard;r==null?(e=h.Project,i=0):(e=r.Folder,i=r.Index+1)}Xe(new l0(e,[{}],i))}function Fv(t){const e=Ki(t),i=Ji(t),r=e.map(n=>n.Serialization),o=t[t.length-1].Index+1;Xe(new l0(i,r,o))}function ut(t,e,i){Xe(new Lo(t,e,i))}function Uv(t){dl(t)}function Av(t){Xe(new Lo(t,"pendingScript",void 0)),t.ScriptError=void 0}function Lv(t){const e=Ji(t),i=Ki(t),r=e.Board(Yr(t)+1);r!=null&&(Xe(new Eo(e,i,r,0)),h.expandedBoards.indexOf(r)<0&&(h.expandedBoards=h.expandedBoards.concat(r)))}function Ev(t){const e=Ji(t),i=Ki(t),r=e.Folder;r!=null&&Xe(new Eo(e,i,r,e.Index))}function Xv(t){const e=Ki(t),i=Ji(t),r=Math.max(0,ll(t)-1),o=e.map((n,s)=>r+s);Xe(new Xo(i,e,o))}function Mv(t){const e=Ki(t),i=Ji(t),r=Math.min(Yr(t)+1,i.BoardCount-1)+1-t.length,o=e.map((n,s)=>r+s);Xe(new Xo(i,e,o))}function Hv(t){Xe(new Iw(Ki(t)))}function e0(t){const e=h.chosenBoard;if(e==null)return;const i=h.selectedStickers,r=i.length===0?e.StickerCount:Zr(i)+1;Xe(new Mo(e,[$x(t)],r))}function t0(t){const e=h.chosenBoard;if(e==null)return;const i=ni(t).map(n=>n.Serialization),r=Zr(t)+1;Xe(new Mo(e,i,r));const o=h.selectedStickers;if(o.length>0){const n=o.map(s=>{const l=s.Geometry;return l.x+=20,l.y+=20,l});el(o,n)}}function Je(t,e,i){Xe(new Ho(t,e,i))}function Ov(t){t.forEach(e=>dl(e))}function zv(t){Xe(new Ho(t,"pendingScript",void 0)),t.forEach(e=>{e.ScriptError=void 0})}function el(t,e){Xe(new sl(t,e))}function os(t){Xe(new mr(ni(t),t.map((e,i)=>i)))}function as(t){const e=ni(t),i=Math.max(0,ul(t)-1),r=e.map((o,n)=>i+n);Xe(new mr(e,r))}function ss(t){const e=ni(t),i=xr(t);if(i==null)return;const r=Math.min(Zr(t)+1,i.StickerCount-1)+1-t.length,o=e.map((n,s)=>r+s);Xe(new mr(e,o))}function ls(t){const e=ni(t),i=xr(t);if(i==null)return;const r=i.StickerCount-t.length,o=e.map((n,s)=>r+s);Xe(new mr(e,o))}function tl(t){Xe(new Pw(ni(t)))}function jv(t){ri.splice(0,ri.length),t=ni(t),t.forEach(e=>{const i=e.Serialization;ri.push(i)}),tl(t),h.ShelfIsFilled=ri.length>0}function Rv(t){ri.splice(0,ri.length),t=ni(t),t.forEach(e=>{const i=e.Serialization;fi(i),ri.push(i)}),h.ShelfIsFilled=ri.length>0}function Gv(){if(!h.ShelfIsFilled)return;const t=h.chosenBoard;t!=null&&Xe(new Mo(t,ri.slice(),t.StickerCount))}function Yv(t,e){if(!h.ShelfIsFilled)return;const i=h.chosenBoard;if(i==null)return;Xe(new Mo(i,ri.slice(),i.StickerCount));const r=h.selectedStickers,{minX:o,minY:n}=c0(r),s=t-o,l=e-n,u=r.map(a=>{const c=a.Geometry;return c.x+=s,c.y+=l,c});el(r,u)}function Zv(){pw()}function qv(){gw()}function Jv(){fw()}function Kv(){mw()}function i0(t){tt(t)}function jp(t){let e=new FileReader;e.onabort=function(){alert("import was aborted")},e.onerror=function(){alert("import failed")},e.onload=function(r){let o=new TextDecoder().decode(e.result);console.log("Reader.onload");const n=h.Project;if(n==null)return;const s=h.chosenBoard;try{let l=JSON.parse(o);if(ya(l)){if(s==null){window.alert("please prepare a board to import stickers into");return}l.forEach(a=>fi(a));const u=l.map(a=>s.StickerDeserializedAt(a));u.forEach(a=>a.activateScript()),ji(u);return}if(l.StickerList!=null){if(n==null){window.alert("please prepare a project to import this board into");return}const u=s==null?n:s.Folder,a=s==null?0:s.Index+1;fi(l);const c=u.BoardDeserializedAt(l,a);c.recursivelyActivateAllScripts(),tt(c);return}(s==null||il())&&(n.clear(),Object.keys(Gr).forEach(u=>{u!=="Id"&&u!=="Name"&&l[u]!=null&&(n[u]=l[u])}),ya(l.BoardList)&&l.BoardList.forEach(u=>n.BoardDeserializedAt(u)),n.recursivelyActivateAllScripts())}catch(l){console.error(l),alert("import failed")}},e.readAsArrayBuffer(t)}function Qv(t){let e,i;switch(t){case"whole Project":const s=h.Project;if(s==null)return;i=s.Name||"SNS-Project",e=s.Serialization;break;case"active Board":const l=h.chosenBoard;if(l==null){window.alert("no active board");return}i=l.Name||"SNS-Board",e=l.Serialization;break;case"selected Stickers":default:const u=h.selectedStickers;if(u.length===0){window.alert("no stickers selected");return}i="SNS-Stickers",e=u.map(a=>a.Serialization)}const r=JSON.stringify(e),o=new TextEncoder().encode(r),n=new TextDecoder().decode(o);r===n?download(o,i+".json","application/json;charset=utf-8"):window.alert("this export is not safe")}function ew(t,e){ww(t,e)}function tw(t,e){$w(t,e)}function iw(t,e){kw(t,e)}function rw(){window.print()}function il(t){let e=Math.round(Math.random()*1e4).toString();return e+="0000".slice(e.length),t=(t||"This operation can not be undone.")+`

Please, enter the following number if you want to proceed:

   `+e+`

Otherwise, the operation will be cancelled`,window.prompt(t,"")===e?!0:(window.alert("Operation will be cancelled"),!1)}let gi;function nw(t){return{Id:Pa(),Name:t,SnapToGrid:!1,GridWidth:10,GridHeight:10,BoardList:[{Id:Pa()}]}}async function dr(){let t;try{t=(await gi.keys()).sort()}catch(i){console.warn("could not fetch names of persisted projects",i)}h.persistedProjectList=t;let e=h.persistedProjectList.map(i=>i.toLowerCase());if(h.normalizedProjectList=e,h.selectedProjectName!=null){let i=e.indexOf(h.selectedProjectName.toLowerCase());i<0?(h.selectedProjectName=void 0,h.selectedProjectIndex=void 0):(h.selectedProjectName=t[i],h.selectedProjectIndex=i)}}async function ow(t){let e=t.toLowerCase();h.normalizedProjectList.indexOf(e)>=0&&oe("ProjectExists: a project named "+gt(t)+" exists already");const i=nw(t);try{await gi.setItem(t,JSON.stringify(i))}catch(r){oe("PersistenceWriteError: could not write project "+gt(t)+", reason: "+r)}await dr(),h.selectedProjectName=t,h.selectedProjectIndex=h.normalizedProjectList.indexOf(e)}async function aw(t,e){await dr();let i=h.normalizedProjectList;i.indexOf(t.toLowerCase())<0&&oe("NoSuchProject: a project named "+gt(t)+" does not exist"),i.indexOf(e.toLowerCase())>=0&&oe("ProjectExists: a project named "+gt(e)+" exists already");let r={};try{r=JSON.parse(await gi.getItem(t))}catch(o){oe("PersistenceReadError: could not read project "+gt(t)+", reason: "+o)}r.Name=e;try{await gi.setItem(e,JSON.stringify(r))}catch(o){oe("PersistenceWriteError: could not write project "+gt(e)+", reason: "+o)}try{await gi.removeItem(t)}catch(o){oe("PersistenceWriteError: could not delete project "+gt(t)+", reason: "+o)}h.selectedProjectName!=null&&h.selectedProjectName.toLowerCase()===t.toLowerCase()&&(h.selectedProjectName=e),await dr()}async function r0(t){await dr(),h.normalizedProjectList.indexOf(t.toLowerCase())<0&&oe("NoSuchProject: a project named "+gt(t)+" does not exist");let i={};try{i=JSON.parse(await gi.getItem(t))}catch(r){oe("PersistenceReadError: could not read project "+gt(t)+", reason: "+r)}try{h.Project=vs.deserializedFrom(t,i),h.Project.onChange(dw),h.Project.onRender(cw),h.Project.onError(hw),h.Project.recursivelyActivateAllScripts(),window.Project=h.Project,Jf()}catch(r){oe("DeserializationError: could not deserialize project "+gt(t)+", reason: "+r)}}async function sw(t){try{await gi.removeItem(t)}catch(e){oe("PersistenceWriteError: could not delete project "+gt(t)+", reason: "+e)}h.selectedProjectName!=null&&h.selectedProjectName.toLowerCase()===t.toLowerCase()&&(h.selectedProjectName=t),await dr()}function lw(t){h.ProjectToPersist=t,h.DelayTimer==null?(h.DelayTimer=setTimeout(lr,1*1e3),h.DelayLimitTimer=setTimeout(lr,60*1e3)):(clearTimeout(h.DelayTimer),h.DelayTimer=setTimeout(lr,1*1e3))}function uw(){h.ProjectToPersist=void 0,h.DelayTimer!=null&&(clearTimeout(h.DelayTimer),h.DelayTimer=void 0),h.DelayLimitTimer!=null&&(clearTimeout(h.DelayLimitTimer),h.DelayLimitTimer=void 0)}function n0(){return h.ProjectToPersist!=null}async function lr(){const t=h.ProjectToPersist;uw(),h.PersistenceState==="running"&&(h.PersistenceRequested=!0),h.PersistenceRequested=!1,h.PersistenceState="running";try{await gi.setItem(t.Name,JSON.stringify(t.Serialization)),h.PersistenceState="idle"}catch{oe("PersistenceFailure: could not persist project "+gt(t.Name)),h.PersistenceState="failed"}h.PersistenceRequested&&lr()}function Rp(t){return Mr(h.ProjectName)&&h.normalizedProjectList.indexOf(t.toLowerCase())<0}function ba(t){return h.Project!=null&&h.Project.Name.toLowerCase()!==t.toLowerCase()}function dw(t,e,...i){switch(lw(t),e){case"attachBoard":case"detachBoard":h.BoardTree=t.BoardList,h.BoardTreeState++;return;case"configureFolder":switch(i[1]==="Name"&&h.BoardTreeState++,i[0]){case h.Project:h.ProjectProperties=u0(t),h.BoardProperties=Un(h.chosenBoard),h.StickerSelectionProperties=vr(h.selectedStickers),h.ViewState++;return;case h.chosenBoard:h.BoardProperties=Un(h.chosenBoard),h.StickerSelectionProperties=vr(h.selectedStickers),h.ViewState++;return;default:i[0].containsFolder(h.chosenBoard)&&(h.BoardProperties=Un(h.chosenBoard),h.StickerSelectionProperties=vr(h.selectedStickers),h.ViewState++)}return;case"attachSticker":case"detachSticker":i[1]===h.chosenBoard&&(h.StickerList=h.chosenBoard.StickerList,h.ViewState++);return;case"configureSticker":if(i[0].Board===h.chosenBoard){const r=h.selectedStickers;i[1]==="Geometry"&&(h.StickerSelectionGeometries=r.map(o=>o.Geometry)),h.StickerSelectionProperties=vr(r),h.ViewState++}return}}function cw(t,e,i){(e===h.chosenBoard||h.chosenBoard==null)&&kv.rerender()}function hw(t,e,i){window.alert(i.Type+`
`+i.Message+`
`+i.Cause)}function Vi(t){if(Q0("list of boards to be selected",t,Nr),t.length===0){h.selectedBoards=[];return}try{const e=Ji(t),i=new Set;t.forEach(r=>i.add(r)),h.selectedBoards=Ki(Array.from(i.values()))}catch{h.selectedBoards=[],console.error("InternalError:selected boards do not share the same folder")}}function uo(t){h.chosenBoard=t!=null&&t.isAttached?t:void 0}function ji(t){if(t.length===0){h.selectedStickers=[];return}const e=new Set,i=h.chosenBoard;t.forEach(r=>{r.isAttached&&r.Board===i&&e.add(r)}),h.selectedStickers=ni(Array.from(e.values()))}const Ai=[];let Gt=0;function Xe(t){Ue(),Gt<Ai.length&&(Ai.length=Gt);let e;const i=Ai[Gt-1];return i!=null&&t.canExtend(i)?(e=t.extend(i),i.isIrrelevant&&(Gt-=1)):(e=t.doNow(),Ai.push(t),Gt+=1),h.OperationHistoryState++,e}function pw(){Ue();let t=Ai[Gt-1];if(t!=null){const e=t.undo();return Gt-=1,h.OperationHistoryState++,e}}function gw(){Ue();let t=Ai[Gt];if(t!=null){const e=t.redo();return Gt+=1,h.OperationHistoryState++,e}}const ri=[];let bt=[],nt=-1;function fw(){h.mayVisitPrevBoard&&(nt-=1,uo(bt[nt]),h.VisitHistoryState++)}function mw(){h.mayVisitNextBoard&&(nt+=1,uo(bt[nt]),h.VisitHistoryState++)}function tt(t){if(t==null)uo(void 0),bt.length=0,nt=-1;else{if(bt[nt]===t)return;h.mayVisitNextBoard?(nt+=1,bt[nt]!==t&&(bt[nt]=t,bt.length=nt+1)):(bt.push(t),nt+=1),uo(t)}h.VisitHistoryState++}function xw(){var t;for(let e=bt.length-1;e>=0;e--)(bt[e]==null||!bt[e].isAttached)&&nt>=e&&(nt-=1);nt<0&&bt.length>0&&(nt=0),tt(bt[nt]||((t=h.Project)==null?void 0:t.BoardList[0]))}const rl=105e4,nl=2e4;let co=0,ho=0;function _w(){we.openDialog("Console")}function Sw(){we.closeDialog("Console")}function Uo(){h.ConsoleValue="",co=0,ho=0}function o0(...t){a0(s0(t))}function bw(...t){a0(s0(t.concat(`
`)))}function a0(t){if(t==="")return;let e=Gp(t),i=t.length;e>nl||i>rl?(Uo(),t=yw(t,e,i),co=Gp(t)+1,ho=t.length,h.ConsoleValue=t):(vw(e,i),co+=e,ho+=i,h.ConsoleValue+=t)}function yw(t,e,i){let r=e-nl,o=i-rl;for(let n=0,s=-1;;)if(s=t.indexOf(`
`,s+1),n+=1,n>=r&&s>=o)return t.slice(s+1)}function vw(t,e){let i=co+t-nl,r=ho+e-rl;if(i<=0&&r<=0)return;let o=h.Console.Value;for(let n=0,s=-1;;){if(s=o.indexOf(`
`,s+1),s<0){Uo();return}if(n+=1,n>=i&&s-n*28>=r){h.Console.Value=o.slice(s+1);return}}}function Gp(t){let e=t.match(/\n/g);return e===null?0:e.length}function s0(t){let e="";for(let i=0;i<t.length;i++){let r=t[i];switch(typeof r){case"undefined":e+="(undefined)";break;case"boolean":e+=r.toString();break;case"number":e+=r.toString();break;case"string":e+=r;break;case"function":e+="(function)";break;case"object":e+=r===null?"(null)":r.toString();break;default:e+="(unknown)";break}}return e}Object.assign(window,{Console:{show:_w,hide:Sw,clear:Uo,print:o0,println:bw}});function ww(t,e){const i=t.Name||t.Project.Name||"Note-Stickers Applet";let r=0,o=0;t.StickerList.forEach(s=>{const{Width:l,Height:u}=s;r<l&&(r=l),o<u&&(o=u)});const n={x:0,y:0,Width:r,Height:o,BoardList:[t.Serialization]};e==="standalone"?ol(i,n):al(i,n)}function $w(t,e){const i=t.Name||t.Project.Name||"Note-Stickers Applet",r=t.Folder.BoardList.slice(t.Index);let o=0,n=0;r.forEach(l=>{l.StickerList.forEach(u=>{const{Width:a,Height:c}=u;o<a&&(o=a),n<c&&(n=c)})});const s={x:0,y:0,Width:o,Height:n,BoardList:r.map(l=>l.Serialization)};e==="standalone"?ol(i,s):al(i,s)}function kw(t,e){const i=xr(t);if(i==null)return;const r=ni(t),o=r[0].Name||i.Name||i.Project.Name||"Note-Stickers Applet",n=r.map(p=>p.Serialization);let[s,l,u,a]=[1/0,1/0,0,0];n.forEach(p=>{const{x:f,y:m,Width:x,Height:b}=p.Geometry;s=Math.min(s,f),u=Math.max(u,f+x),l=Math.min(l,m),a=Math.max(a,m+b)}),n.forEach(p=>{p.Geometry.x-=s,p.Geometry.y-=l});const c=u-s,d=a-l,g={x:0,y:0,Width:c,Height:d,BoardList:[{StickerList:n,activeScript:i.activeScript}]};e==="standalone"?ol(o,g):al(o,g)}function ol(t,e){const i=`
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
  <script type="Note-Stickers" name="${t}">
${JSON.stringify(e)}
  <\/script>
 </head>
 <body type="Note-Stickers" name="${t}">
 </body>
</html>
    `.trim(),r=new TextEncoder().encode(i),o=new TextDecoder().decode(r);i===o?download(r,t+".html","text/html;charset=utf-8"):window.alert("this applet generation is not stable")}function al(t,e){const i=`
  <script type="Note-Stickers" name="${t}">
${JSON.stringify(e)}
  <\/script>
  <div type="Note-Stickers" name="${t}">
  </div>
    `.trim(),r=new TextEncoder().encode(i),o=new TextDecoder().decode(r);i===o?download(r,t+".html","text/html;charset=utf-8"):window.alert("this applet generation is not stable")}function Ue(){h.InspectorMessage=""}function ne(t){h.InspectorMessage=t.trim()}qt(()=>{console.log("was changed: Application.Project");const t=h.Project;t==null?(h.BoardTree=[],h.BoardTreeState=0,h.ProjectProperties=Gr):(h.BoardTree=t.BoardList,h.BoardTreeState++,h.ProjectProperties=u0(t))});qt(()=>{console.log("was changed: Application.BoardTreeState"),h.BoardTreeState,xw()});qt(()=>{console.log("was changed: Application.BoardTreeState/selectedBoards/expandedBoards"),h.BoardTreeState,h.selectedBoards=h.BoardTree.length===0?[]:h.selectedBoards.filter(e=>e!=null&&e.isAttached),h.expandedBoards=h.BoardTree.length===0?[]:h.expandedBoards.filter(e=>e!=null&&e.isAttached);const t=h.selectedBoards;h.BoardSelectionMayBeShiftedUp=Vw(t),h.BoardSelectionMayBeShiftedDown=d0(t),h.BoardSelectionMayBeShiftedIn=Cw(t),h.BoardSelectionMayBeShiftedOut=Bw(t)});qt(()=>{console.log("was changed: Application.chosenBoard");const t=h.chosenBoard;h.BoardProperties=Un(t),h.StickerList=t==null?[]:t.StickerList,h.ViewState++});qt(()=>{console.log("was changed: Application.StickerList"),h.StickerGeometries=h.StickerList.map(t=>t.Geometry)});qt(()=>{console.log("was changed: Application.chosenBoard/StickerList/selectedStickers");const t=h.chosenBoard;h.StickerList,h.selectedStickers=h.selectedStickers.filter(i=>i.isAttached&&i.Board===t);const e=h.selectedStickers;h.StickerSelectionGeometries=e.map(i=>i.Geometry),h.StickerSelectionProperties=vr(e),h.StickerSelectionMayBeShiftedUp=Nw(e),h.StickerSelectionMayBeShiftedDown=Tw(e)});qt(()=>{switch(console.log("was changed: Application.ScriptEditorMode/Project/Board/StickerSelectionProperties"),h.ScriptEditorMode){case"Project":h.ScriptEditorValue=h.Project==null?ke:h.ProjectProperties.Script||"";break;case"Board":h.ScriptEditorValue=h.chosenBoard==null?ke:h.BoardProperties.Script||"";break;case"Stickers":h.ScriptEditorValue=h.selectedStickers.length===0?ke:h.StickerSelectionProperties.Script||"";break}});qt(()=>{switch(console.log("was changed: Application.ValueEditorMode/Project/Board/StickerSelectionProperties"),h.ValueEditorMode){case"Project":h.ScriptEditorValue=h.Project==null?ke:h.ProjectProperties.editableValue||"";break;case"Board":h.ScriptEditorValue=h.chosenBoard==null?ke:h.BoardProperties.editableValue||"";break;case"Stickers":h.ScriptEditorValue=h.selectedStickers.length===0?ke:h.StickerSelectionProperties.editableValue||"";break}});qt(()=>{console.log("was changed: Application.OperationHistoryState"),h.OperationHistoryState,h.mayUndoOperation=Gt>0,h.mayRedoOperation=Gt<Ai.length});qt(()=>{console.log("was changed: Application.VisitHistoryState"),h.VisitHistoryState,h.mayVisitPrevBoard=nt>0,h.mayVisitNextBoard=nt<bt.length-1});class Jt{get isIrrelevant(){return!1}set isIrrelevant(e){_e("isIrrelevant")}}class Ao extends Jt{constructor(i,r,o){super();se(this,"_Project");se(this,"_PropertyName");se(this,"_oldValue");se(this,"_newValue");this._Project=i,this._PropertyName=r,this._oldValue=i[r],this._newValue=o}canExtend(i){return i instanceof Ao&&i._Project===this._Project&&i._PropertyName===this._PropertyName&&ur(i._newValue,this._oldValue)}get isIrrelevant(){return this._newValue===this._oldValue}set isIrrelevant(i){_e("isIrrelevant")}doNow(){Ue();try{this._Project[this._PropertyName]=this._newValue}catch{ne("operation failed"),oe("OperationFailure: could not change the given property")}}extend(i){this.doNow(),i._newValue=this._newValue}redo(){this.doNow()}undo(){Ue();try{this._Project[this._PropertyName]=this._oldValue}catch{ne("operation failed"),oe("OperationFailure: could not restore the given property")}}}class l0 extends Jt{constructor(i,r,o,n=!1){super();se(this,"_Folder");se(this,"_Serializations");se(this,"_Index");se(this,"_newBoards",[]);this._Folder=i,this._Serializations=r.slice(),this._Index=o,n||this._Serializations.forEach(s=>fi(s))}canExtend(i){return!1}get isIrrelevant(){return!1}set isIrrelevant(i){_e("isIrrelevant")}doNow(){if(Ue(),!this._Folder.isAttached){ne("board no longer exists");return}const i=this._newBoards=[];this._Serializations.forEach((r,o)=>{try{const n=this._Folder.BoardDeserializedAt(r,this._Index+o);i.push(n),n.recursivelyActivateAllScripts()}catch{debugger}}),i.length!==this._Serializations.length&&ne("operation did not fully succeed"),i.length===0&&(ne("operation failed"),oe("OperationFailure: could not create any new boards")),Vi(i)}extend(i){oe("NotExtensible: this operation can not be extended")}redo(){this.doNow()}undo(){if(Ue(),!this._Folder.isAttached){ne("board no longer exists");return}const i=[];this._newBoards.forEach(r=>{try{this._Folder.hasBoard(r)&&this._Folder.destroyBoard(r),i.push(r)}catch{}}),i.length!==this._newBoards.length&&ne("operation did not fully succeed"),i.length===0&&(ne("operation failed"),oe("OperationFailure: could not delete the previously created boards")),Vi([])}}class Lo extends Jt{constructor(i,r,o){super();se(this,"_Board");se(this,"_PropertyName");se(this,"_oldValue");se(this,"_newValue");this._Board=i,this._PropertyName=r,this._oldValue=i[r],this._newValue=o}canExtend(i){return i instanceof Lo&&i._Board===this._Board&&i._PropertyName===this._PropertyName&&ur(i._newValue,this._oldValue)}get isIrrelevant(){return this._newValue===this._oldValue}set isIrrelevant(i){_e("isIrrelevant")}doNow(){if(Ue(),!this._Board.isAttached){ne("board no longer exists");return}try{this._Board[this._PropertyName]=this._newValue}catch{ne("operation failed"),oe("OperationFailure: could not change the given property")}}extend(i){this._Board.isAttached&&tt(this._Board),this.doNow(),i._newValue=this._newValue}redo(){this._Board.isAttached&&tt(this._Board),this.doNow()}undo(){if(Ue(),this._Board.isAttached)tt(this._Board);else{ne("board no longer exists");return}try{this._Board[this._PropertyName]=this._oldValue}catch{ne("operation failed"),oe("OperationFailure: could not restore the given property")}}}class Eo extends Jt{constructor(i,r,o,n){super();se(this,"_oldFolder");se(this,"_oldIndices");se(this,"_newFolder");se(this,"_newIndex");this._oldFolder=i,this._oldIndices=r.map(s=>s.Index),this._newFolder=o,this._newIndex=n}canExtend(i){if(i instanceof Eo&&i._newFolder===this._oldFolder){const r=i._newIndex;return this._oldIndices.every((o,n)=>o===r+n)}else return!1}get isIrrelevant(){if(this._newFolder===this._oldFolder){const i=this._newIndex;return this._oldIndices.every((r,o)=>r===i+o)}else return!1}set isIrrelevant(i){_e("isIrrelevant")}doNow(){if(Ue(),!this._oldFolder.isAttached){ne("original folder no longer exists");return}if(!this._newFolder.isAttached){ne("target folder no longer exists");return}const i=this._oldFolder,r=this._oldIndices,o=this._newFolder,n=this._newIndex;let s=[];for(let l=r.length-1;l>=0;l--)try{i.moveBoardTo(r[l],o,n),s.push(o.Board(n))}catch{debugger}s.length!==r.length&&ne("operation did not fully succeed"),s.length===0&&(ne("operation failed"),oe("OperationFailure: could not move the given boards")),Vi(s)}extend(i){this.doNow(),i._newFolder=this._newFolder,i._newIndex=this._newIndex}redo(){this.doNow()}undo(){if(Ue(),!this._oldFolder.isAttached){ne("original folder no longer exists");return}if(!this._newFolder.isAttached){ne("target folder no longer exists");return}const i=this._oldFolder,r=this._oldIndices,o=this._newFolder,n=this._newIndex;let s=[];for(let l=0,u=r.length;l<u;l++)try{o.moveBoardTo(n,i,r[l]),s.push(i.Board(r[l]))}catch{debugger}s.length!==r.length&&ne("operation did not fully succeed"),s.length===0&&(ne("operation failed"),oe("OperationFailure: could not move the given boards")),Vi(s)}}class Xo extends Jt{constructor(i,r,o){super();se(this,"_Folder");se(this,"_Boards");se(this,"_oldIndices");se(this,"_newIndices");se(this,"_forwardMoves");se(this,"_backwardMoves");this._Folder=i,this._Boards=r,this._oldIndices=r.map(s=>s.Index),this._newIndices=o.slice();let n=this._Folder.BoardCount;this._forwardMoves=po(this._oldIndices,this._newIndices,n),this._backwardMoves=po(this._newIndices,this._oldIndices,n)}canExtend(i){return i instanceof Xo&&vi(i._Boards,this._Boards)&&vi(i._newIndices,this._oldIndices)}get isIrrelevant(){return vi(this._oldIndices,this._newIndices)}set isIrrelevant(i){_e("isIrrelevant")}doNow(){if(Ue(),!this._Folder.isAttached){ne("folder no longer exists");return}this._shiftBoards(this._forwardMoves),Vi(this._Boards)}extend(i){this.doNow(),i._newIndices=this._newIndices,i._forwardMoves=this._forwardMoves,i._backwardMoves=this._backwardMoves}redo(){this.doNow()}undo(){if(Ue(),!this._Folder.isAttached){ne("folder no longer exists");return}this._shiftBoards(this._backwardMoves),Vi(this._Boards)}_shiftBoards(i){if(i.length===0)return;const r=[];i.forEach((o,n)=>{try{this._Folder.shiftBoardsByIndex(o.oldIndex,o.newIndex,o.Count),r.push(o)}catch{debugger}}),r.length!==i.length&&ne("operation did not fully succeed"),r.length===0&&(ne("operation failed"),oe("OperationFailure: could not shift the given boards"))}}class Iw extends Jt{constructor(i){super();se(this,"_Folder");se(this,"_Boards");se(this,"_Indices");se(this,"_Serializations");this._Folder=Ji(i),this._Boards=i.slice(),this._Indices=i.map(r=>r.Index),this._Serializations=i.map(r=>r.Serialization)}canExtend(i){return!1}get isIrrelevant(){return!1}set isIrrelevant(i){_e("isIrrelevant")}doNow(){if(Ue(),Vi([]),!this._Folder.isAttached)return;const i=this._Boards.filter(o=>this._Folder.hasBoard(o));if(i.length===0)return;const r=[];i.forEach(o=>{try{this._Folder.destroyBoard(o),r.push(o)}catch{debugger}}),r.length!==i.length&&ne("operation did not fully succeed"),r.length===0&&(ne("operation failed"),oe("OperationFailure: could not delete any boards"))}extend(i){oe("NotExtensible: this operation can not be extended")}redo(){this.doNow()}undo(){if(Ue(),!this._Folder.isAttached){ne("folder no longer exists");return}const i=this._Boards=[];this._Serializations.forEach((r,o)=>{try{const n=this._Folder.BoardDeserializedAt(r,this._Indices[o]);i.push(n),n.recursivelyActivateAllScripts()}catch{debugger}}),i.length!==this._Serializations.length&&ne("operation did not fully succeed"),i.length===0&&(ne("operation failed"),oe("OperationFailure: could not restore any previously deleted boards")),Vi(i)}}class Mo extends Jt{constructor(i,r,o,n=!1){super();se(this,"_Board");se(this,"_Serializations");se(this,"_Index");se(this,"_newStickers",[]);this._Board=i,this._Serializations=r.slice(),this._Index=o,n||this._Serializations.forEach(s=>fi(s))}canExtend(i){return!1}get isIrrelevant(){return!1}set isIrrelevant(i){_e("isIrrelevant")}doNow(){if(Ue(),!this._Board.isAttached){ne("board no longer exists");return}const i=this._newStickers=[];this._Serializations.forEach((r,o)=>{try{const n=this._Board.StickerDeserializedAt(r,this._Index+o);i.push(n),n.activateScript()}catch{debugger}}),i.length!==this._Serializations.length&&ne("operation did not fully succeed"),i.length===0&&(ne("operation failed"),oe("OperationFailure: could not create any new stickers")),ji(i)}extend(i){oe("NotExtensible: this operation can not be extended")}redo(){this._Board.isAttached&&tt(this._Board),this.doNow()}undo(){if(Ue(),this._Board.isAttached)tt(this._Board);else{ne("board no longer exists");return}const i=[];this._newStickers.forEach(r=>{try{this._Board.hasSticker(r)&&this._Board.destroySticker(r),i.push(r)}catch{debugger}}),i.length!==this._newStickers.length&&ne("operation did not fully succeed"),i.length===0&&(ne("operation failed"),oe("OperationFailure: could not delete the previously created stickers")),ji([])}}class Ho extends Jt{constructor(i,r,o){super();se(this,"_Board");se(this,"_Stickers");se(this,"_PropertyName");se(this,"_oldValues");se(this,"_newValue");this._Board=xr(i),this._Stickers=i.slice(),this._PropertyName=r,this._oldValues=i.map(n=>n[r]),this._newValue=o}canExtend(i){return i instanceof Ho&&vi(i._Stickers,this._Stickers)&&i._PropertyName===this._PropertyName&&this._oldValues.every(r=>ur(i._newValue,r))}get isIrrelevant(){return this._oldValues.every(i=>ur(this._newValue,i))}set isIrrelevant(i){_e("isIrrelevant")}doNow(){Ue();const i=this._Stickers.filter(o=>o.isAttached);if(i.length===0){ne("stickers no longer exist");return}const r=[];i.forEach(o=>{try{o[this._PropertyName]=this._newValue,r.push(o)}catch{debugger}}),r.length!==i.length&&ne("operation did not fully succeed"),r.length===0&&(ne("operation failed"),oe("OperationFailure: could not change the given property"))}extend(i){this._Board.isAttached&&tt(this._Board),this.doNow(),i._newValue=this._newValue}redo(){this._Board.isAttached&&tt(this._Board),this.doNow()}undo(){Ue();const i=this._Stickers.filter(o=>o.isAttached);if(i.length===0){ne("stickers no longer exist");return}this._Board.isAttached&&tt(this._Board);const r=[];i.forEach(o=>{let n=this._Stickers.indexOf(o);try{o[this._PropertyName]=this._oldValues[n],r.push(o)}catch{debugger}}),r.length!==i.length&&ne("operation did not fully succeed"),r.length===0&&(ne("operation failed"),oe("OperationFailure: could not restore the given property"))}}class sl extends Jt{constructor(i,r){super();se(this,"_Board");se(this,"_Stickers");se(this,"_oldGeometries");se(this,"_newGeometries");this._Board=i[0].Board,this._Stickers=i.slice(),this._oldGeometries=i.map(o=>o.Geometry),this._newGeometries=r.slice()}canExtend(i){return i instanceof sl&&vi(i._Stickers,this._Stickers)&&this._oldGeometries.every((r,o)=>ur(i._newGeometries[o],r))}get isIrrelevant(){return this._oldGeometries.every((i,r)=>ur(this._newGeometries[r],i))}set isIrrelevant(i){_e("isIrrelevant")}doNow(){Ue();const i=this._Stickers.filter(o=>o.isAttached);if(i.length===0){ne("stickers no longer exist");return}const r=[];i.forEach((o,n)=>{try{o.Geometry=this._newGeometries[n],r.push(o)}catch{debugger}}),r.length!==i.length&&ne("operation did not fully succeed"),r.length===0&&(ne("operation failed"),oe("OperationFailure: could not change the given property"))}extend(i){this._Board.isAttached&&tt(this._Board),this.doNow(),i._newGeometries=this._newGeometries}redo(){this._Board.isAttached&&tt(this._Board),this.doNow()}undo(){Ue();const i=this._Stickers.filter(o=>o.isAttached);if(i.length===0){ne("stickers no longer exist");return}this._Board.isAttached&&tt(this._Board);const r=[];i.forEach(o=>{let n=this._Stickers.indexOf(o);try{o.Geometry=this._oldGeometries[n],r.push(o)}catch{debugger}}),r.length!==i.length&&ne("operation did not fully succeed"),r.length===0&&(ne("operation failed"),oe("OperationFailure: could not restore the given property"))}}class mr extends Jt{constructor(i,r){super();se(this,"_Board");se(this,"_Stickers");se(this,"_oldIndices");se(this,"_newIndices");se(this,"_forwardMoves");se(this,"_backwardMoves");this._Board=xr(i),this._Stickers=i,this._oldIndices=i.map(n=>n.Index),this._newIndices=r.slice();let o=this._Board.StickerCount;this._forwardMoves=po(this._oldIndices,this._newIndices,o),this._backwardMoves=po(this._newIndices,this._oldIndices,o)}canExtend(i){return i instanceof mr&&vi(i._Stickers,this._Stickers)&&vi(this._oldIndices,i._newIndices)}get isIrrelevant(){return vi(this._oldIndices,this._newIndices)}set isIrrelevant(i){_e("isIrrelevant")}doNow(){if(Ue(),!this._Board.isAttached){ne("board no longer exists");return}this._shiftStickers(this._forwardMoves),ji(this._Stickers)}extend(i){tt(this._Board),this.doNow(),i._newIndices=this._newIndices,i._forwardMoves=this._forwardMoves,i._backwardMoves=this._backwardMoves}redo(){tt(this._Board),this.doNow()}undo(){if(Ue(),this._Board.isAttached)tt(this._Board);else{ne("board no longer exists");return}this._shiftStickers(this._backwardMoves),ji(this._Stickers)}_shiftStickers(i){if(i.length===0)return;const r=[];i.forEach((o,n)=>{try{this._Board.shiftStickersByIndex(o.oldIndex,o.newIndex,o.Count),r.push(o)}catch{debugger}}),r.length!==i.length&&ne("operation did not fully succeed"),r.length===0&&(ne("operation failed"),oe("OperationFailure: could not shift the given stickers"))}}class Pw extends Jt{constructor(i){super();se(this,"_Board");se(this,"_Stickers");se(this,"_Indices");se(this,"_Serializations");this._Board=xr(i),this._Stickers=i.slice(),this._Indices=i.map(r=>r.Index),this._Serializations=i.map(r=>r.Serialization)}canExtend(i){return!1}get isIrrelevant(){return!1}set isIrrelevant(i){_e("isIrrelevant")}doNow(){if(Ue(),!this._Board.isAttached)return;const i=this._Stickers.filter(o=>this._Board.hasSticker(o));if(i.length===0)return;const r=[];i.forEach(o=>{try{this._Board.destroySticker(o),r.push(o)}catch{debugger}}),r.length!==i.length&&ne("operation did not fully succeed"),r.length===0&&(ne("operation failed"),oe("OperationFailure: could not delete any stickers"))}extend(i){oe("NotExtensible: this operation can not be extended")}redo(){this._Board.isAttached&&tt(this._Board),this.doNow()}undo(){if(Ue(),ji([]),this._Board.isAttached)tt(this._Board);else{ne("board no longer exists");return}const i=this._Stickers=[];this._Serializations.forEach((r,o)=>{try{const n=this._Board.StickerDeserializedAt(r,this._Indices[o]);i.push(n),n.activateScript()}catch{debugger}}),i.length!==this._Serializations.length&&ne("operation did not fully succeed"),i.length===0&&(ne("operation failed"),oe("OperationFailure: could not restore any previously deleted stickers")),ji(i)}}function u0(t){const e={};return Object.keys(Gr).forEach(i=>e[i]=t[i]),e}function Ji(t){if(t.length===0)return h.Project;let e=t[0].Folder;return t.some(i=>i.Folder!==e)&&oe("InvalidArgument: the given boards do not all belong to the same folder"),e}function Ki(t){if(t.length===0)return[];const e=t.map(i=>({Board:i,Index:i.Index}));return e.sort((i,r)=>i.Index-r.Index),e.map(i=>i.Board)}function Yp(t){return t.map(e=>e.IndexPath)}function Zp(t){const e=h.Project;return t.map(i=>e.BoardAtIndexPath(i)).filter(i=>i!=null)}function Vw(t){return t.length===0?!1:ll(t)>0?!0:Yr(t)>t.length}function d0(t){if(t.length===0)return!1;const e=t[0].Folder.BoardCount;return Yr(t)<e-1?!0:ll(t)<e-t.length}function Cw(t){return t.length===0?!1:d0(t)}function Bw(t){var e,i;return t.length===0?!1:((i=(e=t[0])==null?void 0:e.Folder)==null?void 0:i.Folder)!=null}function ll(t){if(t.length===0)return-1;let e=1/0;return t.forEach(i=>e=Math.min(e,i.Index)),e}function Yr(t){if(t.length===0)return-1;let e=0;return t.forEach(i=>e=Math.max(e,i.Index)),e}function Un(t){if(t==null)return rs;const e={};return Object.keys(rs).forEach(i=>e[i]=t[i]),e}function xr(t){if(t.length===0)return;let e=t[0].Board;return t.some(i=>i.Board!==e)&&oe("InvalidArgument: the given stickers do not all belong to the same board"),e}function ni(t){if(t.length===0)return[];const e=t.map(i=>({Sticker:i,Index:i.Index}));return e.sort((i,r)=>i.Index-r.Index),e.map(i=>i.Sticker)}function Ww(t){const e={};return Object.keys(lo).forEach(i=>e[i]=t[i]),e}function vr(t){if(t.length===0)return{...lo};const e=Ww(t[0]);return t.slice(1).forEach(i=>{Object.keys(lo).forEach(r=>{const o=i[r];An(o,e)&&(e[r]=fr)})}),e}function Nw(t){return t.length===0?!1:ul(t)>0?!0:Zr(t)>t.length}function Tw(t){if(t.length===0)return!1;const e=t[0].Folder.StickerCount;return Zr(t)<e-1?!0:ul(t)<e-t.length}function ul(t){if(t.length===0)return-1;let e=1/0;return t.forEach(i=>e=Math.min(e,i.Index)),e}function Zr(t){if(t.length===0)return-1;let e=0;return t.forEach(i=>e=Math.max(e,i.Index)),e}function c0(t){return t.length===0?{minX:0,minY:0}:{minX:Math.min(...t.map(e=>e.x)),minY:Math.min(...t.map(e=>e.y))}}function We(t){return t===ke||t===fr?null:t}function ot(t){return t===ke||t===fr?null:Math.round(t)}function Rt(t,e=!0){return t===ke||t===fr?null:t===e}function Dw(t){switch(!0){case t==null:return"(no error found)";case t===ke:return"(no selection)";case t===fr:return"(various errors)";default:return t.Type+": "+t.Message}}function Fw(t){window.alert(t.Type+`

`+t.Message)}function dl(t){let e=(t.pendingScript||"").trim(),i=(t.activeScript||"").trim();if(i===""&&(i=void 0),i!==e){if(e==null||e==="")t.activeScript=void 0,t.pendingScript=void 0,t.activateScript(),t.ScriptError=void 0,t.Error=void 0;else{const{activeScript:r,pendingScript:o}=t;t.activeScript=o,t.activateScript(),t.Error==null?(t.pendingScript=void 0,t.ScriptError=void 0):(t.ScriptError=t.Error,t.activeScript=r,t.activateScript())}t.rerender()}}function vi(t,e){return t.length===e.length&&t.every((i,r)=>i===e[r])}function po(t,e,i){let r=Array(i).fill(NaN).map((l,u)=>u);t.forEach(l=>r[l]=-1),r=r.filter(l=>l!==-1);let o=Array(i).fill(-1);e.forEach((l,u)=>o[l]=t[u]);for(let l=0,u=i;l<u;l++)o[l]===-1&&(o[l]=r.shift());const n=[];function s(l,u){const a=r[l];r.splice(l,1),r.splice(u,0,a),n.push({oldIndex:l,newIndex:u,Count:1})}r=Array(i).fill(NaN).map((l,u)=>u);for(let l=0,u=i;l<u;l++)r[l]!==o[l]&&s(r.indexOf(o[l]),l);for(let l=n.length-1;l>=1;l--){const u=n[l],a=n[l-1];a[0]===u[0]-1&&a[1]===u[1]-1&&(n.splice(l,1),a[2]+=u[2])}return n}wr.config({driver:[wr.INDEXEDDB,wr.WEBSQL]});wr.ready(function(){gi=wr.createInstance({name:"NoteStickers"}),dr(),Iv("ProjectBrowser"),o0("ready for operation"),Object.assign(window,{Application:h,MainScreen:we.ScreenNamed("MainScreen"),Inspector:we.DialogNamed("Inspector")})});
//# sourceMappingURL=index.js.map
