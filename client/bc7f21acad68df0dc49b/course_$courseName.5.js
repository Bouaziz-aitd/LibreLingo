(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{253:function(e,t,c){"use strict";(function(e){var s=c(45);t.a=t=>{if(t(s.a),void 0===e.env.JEST_WORKER_ID){c(19).default.subscribe(()=>t(s.a))}}}).call(this,c(20))},254:function(e,t,c){e.exports=function(){"use strict";var e="millisecond",t="second",c="minute",s="hour",n="day",r="week",a="month",l="quarter",o="year",b="date",i=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,j=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,O=function(e,t,c){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(c)+e},u={s:O,z:function(e){var t=-e.utcOffset(),c=Math.abs(t),s=Math.floor(c/60),n=c%60;return(t<=0?"+":"-")+O(s,2,"0")+":"+O(n,2,"0")},m:function e(t,c){if(t.date()<c.date())return-e(c,t);var s=12*(c.year()-t.year())+(c.month()-t.month()),n=t.clone().add(s,a),r=c-n<0,l=t.clone().add(s+(r?-1:1),a);return+(-(s+(c-n)/(r?n-l:l-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(i){return{M:a,y:o,w:r,d:n,D:b,h:s,m:c,s:t,ms:e,Q:l}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},d="en",m={};m[d]=f;var h=function(e){return e instanceof v},$=function(e,t,c){var s;if(!e)return d;if("string"==typeof e)m[e]&&(s=e),t&&(m[e]=t,s=e);else{var n=e.name;m[n]=e,s=n}return!c&&s&&(d=s),s||!c&&d},p=function(e,t){if(h(e))return e.clone();var c="object"==typeof t?t:{};return c.date=e,c.args=arguments,new v(c)},g=u;g.l=$,g.i=h,g.w=function(e,t){return p(e,{locale:t.$L,utc:t.$u,$offset:t.$offset})};var v=function(){function O(e){this.$L=this.$L||$(e.locale,null,!0),this.parse(e)}var u=O.prototype;return u.parse=function(e){this.$d=function(e){var t=e.date,c=e.utc;if(null===t)return new Date(NaN);if(g.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(i);if(s){var n=s[2]-1||0,r=(s[7]||"0").substring(0,3);return c?new Date(Date.UTC(s[1],n,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],n,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(t)}(e),this.init()},u.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},u.$utils=function(){return g},u.isValid=function(){return!("Invalid Date"===this.$d.toString())},u.isSame=function(e,t){var c=p(e);return this.startOf(t)<=c&&c<=this.endOf(t)},u.isAfter=function(e,t){return p(e)<this.startOf(t)},u.isBefore=function(e,t){return this.endOf(t)<p(e)},u.$g=function(e,t,c){return g.u(e)?this[t]:this.set(c,e)},u.unix=function(){return Math.floor(this.valueOf()/1e3)},u.valueOf=function(){return this.$d.getTime()},u.startOf=function(e,l){var i=this,j=!!g.u(l)||l,O=g.p(e),u=function(e,t){var c=g.w(i.$u?Date.UTC(i.$y,t,e):new Date(i.$y,t,e),i);return j?c:c.endOf(n)},f=function(e,t){return g.w(i.toDate()[e].apply(i.toDate("s"),(j?[0,0,0,0]:[23,59,59,999]).slice(t)),i)},d=this.$W,m=this.$M,h=this.$D,$="set"+(this.$u?"UTC":"");switch(O){case o:return j?u(1,0):u(31,11);case a:return j?u(1,m):u(0,m+1);case r:var p=this.$locale().weekStart||0,v=(d<p?d+7:d)-p;return u(j?h-v:h+(6-v),m);case n:case b:return f($+"Hours",0);case s:return f($+"Minutes",1);case c:return f($+"Seconds",2);case t:return f($+"Milliseconds",3);default:return this.clone()}},u.endOf=function(e){return this.startOf(e,!1)},u.$set=function(r,l){var i,j=g.p(r),O="set"+(this.$u?"UTC":""),u=(i={},i[n]=O+"Date",i[b]=O+"Date",i[a]=O+"Month",i[o]=O+"FullYear",i[s]=O+"Hours",i[c]=O+"Minutes",i[t]=O+"Seconds",i[e]=O+"Milliseconds",i)[j],f=j===n?this.$D+(l-this.$W):l;if(j===a||j===o){var d=this.clone().set(b,1);d.$d[u](f),d.init(),this.$d=d.set(b,Math.min(this.$D,d.daysInMonth())).$d}else u&&this.$d[u](f);return this.init(),this},u.set=function(e,t){return this.clone().$set(e,t)},u.get=function(e){return this[g.p(e)]()},u.add=function(e,l){var b,i=this;e=Number(e);var j=g.p(l),O=function(t){var c=p(i);return g.w(c.date(c.date()+Math.round(t*e)),i)};if(j===a)return this.set(a,this.$M+e);if(j===o)return this.set(o,this.$y+e);if(j===n)return O(1);if(j===r)return O(7);var u=(b={},b[c]=6e4,b[s]=36e5,b[t]=1e3,b)[j]||1,f=this.$d.getTime()+e*u;return g.w(f,this)},u.subtract=function(e,t){return this.add(-1*e,t)},u.format=function(e){var t=this;if(!this.isValid())return"Invalid Date";var c=e||"YYYY-MM-DDTHH:mm:ssZ",s=g.z(this),n=this.$locale(),r=this.$H,a=this.$m,l=this.$M,o=n.weekdays,b=n.months,i=function(e,s,n,r){return e&&(e[s]||e(t,c))||n[s].substr(0,r)},O=function(e){return g.s(r%12||12,e,"0")},u=n.meridiem||function(e,t,c){var s=e<12?"AM":"PM";return c?s.toLowerCase():s},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:g.s(l+1,2,"0"),MMM:i(n.monthsShort,l,b,3),MMMM:i(b,l),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:i(n.weekdaysMin,this.$W,o,2),ddd:i(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(r),HH:g.s(r,2,"0"),h:O(1),hh:O(2),a:u(r,a,!0),A:u(r,a,!1),m:String(a),mm:g.s(a,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:s};return c.replace(j,(function(e,t){return t||f[e]||s.replace(":","")}))},u.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},u.diff=function(e,b,i){var j,O=g.p(b),u=p(e),f=6e4*(u.utcOffset()-this.utcOffset()),d=this-u,m=g.m(this,u);return m=(j={},j[o]=m/12,j[a]=m,j[l]=m/3,j[r]=(d-f)/6048e5,j[n]=(d-f)/864e5,j[s]=d/36e5,j[c]=d/6e4,j[t]=d/1e3,j)[O]||d,i?m:g.a(m)},u.daysInMonth=function(){return this.endOf(a).$D},u.$locale=function(){return m[this.$L]},u.locale=function(e,t){if(!e)return this.$L;var c=this.clone(),s=$(e,t,!0);return s&&(c.$L=s),c},u.clone=function(){return g.w(this.$d,this)},u.toDate=function(){return new Date(this.valueOf())},u.toJSON=function(){return this.isValid()?this.toISOString():null},u.toISOString=function(){return this.$d.toISOString()},u.toString=function(){return this.$d.toUTCString()},O}(),y=v.prototype;return p.prototype=y,[["$ms",e],["$s",t],["$m",c],["$H",s],["$W",n],["$M",a],["$y",o],["$D",b]].forEach((function(e){y[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),p.extend=function(e,t){return e(t,v,p),p},p.locale=$,p.isDayjs=h,p.unix=function(e){return p(1e3*e)},p.en=m[d],p.Ls=m,p}()},39:function(e,t,c){"use strict";var s=c(0);function n(e){let t,c;const n=e[4].default,r=Object(s.v)(n,e,e[3],null);return{c(){t=Object(s.z)("div"),r&&r.c(),this.h()},l(e){t=Object(s.n)(e,"DIV",{"data-size":!0,"data-size-desktop":!0,"data-size-tablet":!0,class:!0});var c=Object(s.l)(t);r&&r.l(c),c.forEach(s.y),this.h()},h(){Object(s.h)(t,"data-size",e[0]),Object(s.h)(t,"data-size-desktop",e[1]),Object(s.h)(t,"data-size-tablet",e[2]),Object(s.h)(t,"class","column"),Object(s.db)(t,"is-one-third-desktop","1/3"===e[1]),Object(s.db)(t,"is-half-tablet","1/2"===e[2]),Object(s.db)(t,"is-one-third-tablet","1/3"===e[2]),Object(s.db)(t,"is-one-quarter","1/4"===e[0]),Object(s.db)(t,"is-one-third","1/3"===e[0]),Object(s.db)(t,"is-three-fifths","3/5"===e[0]),Object(s.db)(t,"is-1","1"===e[0])},m(e,n){Object(s.J)(e,t,n),r&&r.m(t,null),c=!0},p(e,[a]){r&&r.p&&8&a&&Object(s.hb)(r,n,e,e[3],a,null,null),(!c||1&a)&&Object(s.h)(t,"data-size",e[0]),(!c||2&a)&&Object(s.h)(t,"data-size-desktop",e[1]),(!c||4&a)&&Object(s.h)(t,"data-size-tablet",e[2]),2&a&&Object(s.db)(t,"is-one-third-desktop","1/3"===e[1]),4&a&&Object(s.db)(t,"is-half-tablet","1/2"===e[2]),4&a&&Object(s.db)(t,"is-one-third-tablet","1/3"===e[2]),1&a&&Object(s.db)(t,"is-one-quarter","1/4"===e[0]),1&a&&Object(s.db)(t,"is-one-third","1/3"===e[0]),1&a&&Object(s.db)(t,"is-three-fifths","3/5"===e[0]),1&a&&Object(s.db)(t,"is-1","1"===e[0])},i(e){c||(Object(s.eb)(r,e),c=!0)},o(e){Object(s.fb)(r,e),c=!1},d(e){e&&Object(s.y)(t),r&&r.d(e)}}}function r(e,t,c){let{$$slots:s={},$$scope:n}=t,{size:r=null}=t,{sizeDesktop:a=null}=t,{sizeTablet:l=null}=t;return e.$$set=e=>{"size"in e&&c(0,r=e.size),"sizeDesktop"in e&&c(1,a=e.sizeDesktop),"sizeTablet"in e&&c(2,l=e.sizeTablet),"$$scope"in e&&c(3,n=e.$$scope)},[r,a,l,n,s]}class a extends s.a{constructor(e){super(),Object(s.I)(this,e,r,n,s.V,{size:0,sizeDesktop:1,sizeTablet:2})}}t.a=a},396:function(e,t,c){"use strict";c.r(t),c.d(t,"preload",(function(){return be}));var s=c(0),n=c(4),r=c(253),a=c(254),l=c.n(a);const o=e=>e>1?o(e-1)+o(e-2):1,b=e=>[...e].sort((e,t)=>l()(e.at).isAfter(l()(t.at))?-1:1)[0].at,i=({lastPractice:e,practicesSoFar:t})=>{const c=l()(e).add((({practicesSoFar:e})=>o(e))({practicesSoFar:t}),"day");return l()().isAfter(l()(l()(c).subtract(1,"second")))},j=({practices:e})=>i({practicesSoFar:e.length,lastPractice:b(e)});var O=c(47),u=c(32);function f(e){let t,c,n,r,a,l,o,b,i;return{c(){t=Object(s.z)("figure"),c=Object(s.z)("img"),r=Object(s.ab)(),a=Object(s.z)("img"),o=Object(s.ab)(),b=Object(s.z)("img"),this.h()},l(e){t=Object(s.n)(e,"FIGURE",{class:!0});var n=Object(s.l)(t);c=Object(s.n)(n,"IMG",{src:!0,alt:!0,class:!0}),r=Object(s.o)(n),a=Object(s.n)(n,"IMG",{src:!0,alt:!0,class:!0}),o=Object(s.o)(n),b=Object(s.n)(n,"IMG",{src:!0,alt:!0,class:!0}),n.forEach(s.y),this.h()},h(){c.src!==(n=`images/${e[0][0]}_tinier.jpg`)&&Object(s.h)(c,"src",n),Object(s.h)(c,"alt",""),Object(s.h)(c,"class","svelte-o1l3f3"),a.src!==(l=`images/${e[0][1]}_tinier.jpg`)&&Object(s.h)(a,"src",l),Object(s.h)(a,"alt",""),Object(s.h)(a,"class","svelte-o1l3f3"),b.src!==(i=`images/${e[0][2]}_tiny.jpg`)&&Object(s.h)(b,"src",i),Object(s.h)(b,"alt",""),Object(s.h)(b,"class","svelte-o1l3f3"),Object(s.h)(t,"class","image image-set is-96x96 svelte-o1l3f3"),Object(s.db)(t,"completed",e[1]),Object(s.db)(t,"stale",e[2])},m(e,n){Object(s.J)(e,t,n),Object(s.f)(t,c),Object(s.f)(t,r),Object(s.f)(t,a),Object(s.f)(t,o),Object(s.f)(t,b)},p(e,[r]){1&r&&c.src!==(n=`images/${e[0][0]}_tinier.jpg`)&&Object(s.h)(c,"src",n),1&r&&a.src!==(l=`images/${e[0][1]}_tinier.jpg`)&&Object(s.h)(a,"src",l),1&r&&b.src!==(i=`images/${e[0][2]}_tiny.jpg`)&&Object(s.h)(b,"src",i),2&r&&Object(s.db)(t,"completed",e[1]),4&r&&Object(s.db)(t,"stale",e[2])},i:s.O,o:s.O,d(e){e&&Object(s.y)(t)}}}function d(e,t,c){let{imageSet:s}=t,{completed:n}=t,{stale:r}=t;return e.$$set=e=>{"imageSet"in e&&c(0,s=e.imageSet),"completed"in e&&c(1,n=e.completed),"stale"in e&&c(2,r=e.stale)},[s,n,r]}class m extends s.a{constructor(e){var t;super(),document.getElementById("svelte-o1l3f3-style")||((t=Object(s.z)("style")).id="svelte-o1l3f3-style",t.textContent="@keyframes svelte-o1l3f3-spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}.image-set.svelte-o1l3f3.svelte-o1l3f3{position:relative;overflow:hidden}.image-set.svelte-o1l3f3 img.svelte-o1l3f3{left:15%;top:15%;width:70%;position:absolute}.image-set.svelte-o1l3f3 img.svelte-o1l3f3:first-child{position:absolute;left:0;top:0}.image-set.svelte-o1l3f3 img.svelte-o1l3f3:last-child{position:absolute;left:30%;top:30%}.stale.svelte-o1l3f3 img.svelte-o1l3f3,.completed.svelte-o1l3f3 img.svelte-o1l3f3{box-sizing:border-box;border:1px solid rgba(255, 255, 255, 0.3)}",Object(s.f)(document.head,t)),Object(s.I)(this,e,d,f,s.V,{imageSet:0,completed:1,stale:2})}}var h=m;function $(e){let t,c,n,r;return n=new h({props:{imageSet:e[0],stale:e[1],completed:e[2]}}),{c(){t=Object(s.z)("div"),c=Object(s.z)("div"),Object(s.s)(n.$$.fragment),this.h()},l(e){t=Object(s.n)(e,"DIV",{class:!0});var r=Object(s.l)(t);c=Object(s.n)(r,"DIV",{class:!0});var a=Object(s.l)(c);Object(s.m)(n.$$.fragment,a),a.forEach(s.y),r.forEach(s.y),this.h()},h(){Object(s.h)(c,"class","image-set svelte-11jax29"),Object(s.h)(t,"class","media-left svelte-11jax29"),Object(s.db)(t,"stale",e[1]),Object(s.db)(t,"completed",e[2])},m(e,a){Object(s.J)(e,t,a),Object(s.f)(t,c),Object(s.N)(n,c,null),r=!0},p(e,c){const r={};1&c&&(r.imageSet=e[0]),2&c&&(r.stale=e[1]),4&c&&(r.completed=e[2]),n.$set(r),2&c&&Object(s.db)(t,"stale",e[1]),4&c&&Object(s.db)(t,"completed",e[2])},i(e){r||(Object(s.eb)(n.$$.fragment,e),r=!0)},o(e){Object(s.fb)(n.$$.fragment,e),r=!1},d(e){e&&Object(s.y)(t),Object(s.w)(n)}}}function p(e){let t,c,n=e[0]&&e[0].length&&$(e);return{c(){n&&n.c(),t=Object(s.A)()},l(e){n&&n.l(e),t=Object(s.A)()},m(e,r){n&&n.m(e,r),Object(s.J)(e,t,r),c=!0},p(e,[c]){e[0]&&e[0].length?n?(n.p(e,c),1&c&&Object(s.eb)(n,1)):(n=$(e),n.c(),Object(s.eb)(n,1),n.m(t.parentNode,t)):n&&(Object(s.G)(),Object(s.fb)(n,1,1,()=>{n=null}),Object(s.k)())},i(e){c||(Object(s.eb)(n),c=!0)},o(e){Object(s.fb)(n),c=!1},d(e){n&&n.d(e),e&&Object(s.y)(t)}}}function g(e,t,c){let{imageSet:s}=t,{stale:n}=t,{completed:r}=t;return e.$$set=e=>{"imageSet"in e&&c(0,s=e.imageSet),"stale"in e&&c(1,n=e.stale),"completed"in e&&c(2,r=e.completed)},[s,n,r]}class v extends s.a{constructor(e){var t;super(),document.getElementById("svelte-11jax29-style")||((t=Object(s.z)("style")).id="svelte-11jax29-style",t.textContent="@keyframes svelte-11jax29-spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}.stale.svelte-11jax29.svelte-11jax29,.completed.svelte-11jax29.svelte-11jax29{mix-blend-mode:screen}.stale.svelte-11jax29 .image-set.svelte-11jax29,.completed.svelte-11jax29 .image-set.svelte-11jax29{filter:saturate(0)}",Object(s.f)(document.head,t)),Object(s.I)(this,e,g,p,s.V,{imageSet:0,stale:1,completed:2})}}var y=v;function w(e){let t,c;return{c(){t=Object(s.z)("p"),c=Object(s.cb)(e[0]),this.h()},l(n){t=Object(s.n)(n,"P",{class:!0});var r=Object(s.l)(t);c=Object(s.p)(r,e[0]),r.forEach(s.y),this.h()},h(){Object(s.h)(t,"class","is-6 clamp svelte-tslct2")},m(e,n){Object(s.J)(e,t,n),Object(s.f)(t,c)},p(e,[t]){1&t&&Object(s.X)(c,e[0])},i:s.O,o:s.O,d(e){e&&Object(s.y)(t)}}}function x(e,t,c){let{text:s}=t;return e.$$set=e=>{"text"in e&&c(0,s=e.text)},[s]}class D extends s.a{constructor(e){var t;super(),document.getElementById("svelte-tslct2-style")||((t=Object(s.z)("style")).id="svelte-tslct2-style",t.textContent=".clamp.svelte-tslct2{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}",Object(s.f)(document.head,t)),Object(s.I)(this,e,x,w,s.V,{text:0})}}var z=D;function k(e){let t,c,n;return c=new z({props:{text:`Learn: ${e[0].join(", ")}`}}),{c(){t=Object(s.z)("div"),Object(s.s)(c.$$.fragment),this.h()},l(e){t=Object(s.n)(e,"DIV",{class:!0});var n=Object(s.l)(t);Object(s.m)(c.$$.fragment,n),n.forEach(s.y),this.h()},h(){Object(s.h)(t,"class","svelte-pmybbu"),Object(s.db)(t,"completed",e[2]),Object(s.db)(t,"stale",e[1])},m(e,r){Object(s.J)(e,t,r),Object(s.N)(c,t,null),n=!0},p(e,[n]){const r={};1&n&&(r.text=`Learn: ${e[0].join(", ")}`),c.$set(r),4&n&&Object(s.db)(t,"completed",e[2]),2&n&&Object(s.db)(t,"stale",e[1])},i(e){n||(Object(s.eb)(c.$$.fragment,e),n=!0)},o(e){Object(s.fb)(c.$$.fragment,e),n=!1},d(e){e&&Object(s.y)(t),Object(s.w)(c)}}}function S(e,t,c){let{summary:s}=t,{stale:n}=t,{completed:r}=t;return e.$$set=e=>{"summary"in e&&c(0,s=e.summary),"stale"in e&&c(1,n=e.stale),"completed"in e&&c(2,r=e.completed)},[s,n,r]}class E extends s.a{constructor(e){var t;super(),document.getElementById("svelte-pmybbu-style")||((t=Object(s.z)("style")).id="svelte-pmybbu-style",t.textContent="@keyframes svelte-pmybbu-spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}.completed.svelte-pmybbu,.stale.svelte-pmybbu{color:white}",Object(s.f)(document.head,t)),Object(s.I)(this,e,S,k,s.V,{summary:0,stale:1,completed:2})}}var _=E;function J(e){let t,c;return t=new _({props:{summary:e[3],stale:e[6],completed:e[1]}}),{c(){Object(s.s)(t.$$.fragment)},l(e){Object(s.m)(t.$$.fragment,e)},m(e,n){Object(s.N)(t,e,n),c=!0},p(e,c){const s={};8&c&&(s.summary=e[3]),64&c&&(s.stale=e[6]),2&c&&(s.completed=e[1]),t.$set(s)},i(e){c||(Object(s.eb)(t.$$.fragment,e),c=!0)},o(e){Object(s.fb)(t.$$.fragment,e),c=!1},d(e){Object(s.w)(t,e)}}}function M(e){let t;return{c(){t=Object(s.z)("progress"),this.h()},l(e){t=Object(s.n)(e,"PROGRESS",{class:!0,value:!0,max:!0}),Object(s.l)(t).forEach(s.y),this.h()},h(){Object(s.h)(t,"class","progress svelte-1k0o602"),t.value=e[4],Object(s.h)(t,"max",e[5])},m(e,c){Object(s.J)(e,t,c)},p(e,c){16&c&&(t.value=e[4]),32&c&&Object(s.h)(t,"max",e[5])},d(e){e&&Object(s.y)(t)}}}function I(e){let t,c,n,r,a,l,o=(e[1]||!e[2])&&J(e),b=!e[1]&&e[2]&&M(e);return{c(){t=Object(s.z)("div"),c=Object(s.z)("p"),n=Object(s.cb)(e[0]),r=Object(s.ab)(),o&&o.c(),a=Object(s.ab)(),b&&b.c(),this.h()},l(l){t=Object(s.n)(l,"DIV",{class:!0});var i=Object(s.l)(t);c=Object(s.n)(i,"P",{class:!0});var j=Object(s.l)(c);n=Object(s.p)(j,e[0]),j.forEach(s.y),r=Object(s.o)(i),o&&o.l(i),a=Object(s.o)(i),b&&b.l(i),i.forEach(s.y),this.h()},h(){Object(s.h)(c,"class","title is-4 svelte-1k0o602"),Object(s.h)(t,"class","media-content svelte-1k0o602"),Object(s.db)(t,"completed",e[1]),Object(s.db)(t,"stale",e[6])},m(e,i){Object(s.J)(e,t,i),Object(s.f)(t,c),Object(s.f)(c,n),Object(s.f)(t,r),o&&o.m(t,null),Object(s.f)(t,a),b&&b.m(t,null),l=!0},p(e,[c]){(!l||1&c)&&Object(s.X)(n,e[0]),e[1]||!e[2]?o?(o.p(e,c),6&c&&Object(s.eb)(o,1)):(o=J(e),o.c(),Object(s.eb)(o,1),o.m(t,a)):o&&(Object(s.G)(),Object(s.fb)(o,1,1,()=>{o=null}),Object(s.k)()),!e[1]&&e[2]?b?b.p(e,c):(b=M(e),b.c(),b.m(t,null)):b&&(b.d(1),b=null),2&c&&Object(s.db)(t,"completed",e[1]),64&c&&Object(s.db)(t,"stale",e[6])},i(e){l||(Object(s.eb)(o),l=!0)},o(e){Object(s.fb)(o),l=!1},d(e){e&&Object(s.y)(t),o&&o.d(),b&&b.d()}}}function N(e,t,c){let{title:s}=t,{completed:n}=t,{started:r}=t,{summary:a}=t,{progress:l}=t,{levels:o}=t,{stale:b}=t;return e.$$set=e=>{"title"in e&&c(0,s=e.title),"completed"in e&&c(1,n=e.completed),"started"in e&&c(2,r=e.started),"summary"in e&&c(3,a=e.summary),"progress"in e&&c(4,l=e.progress),"levels"in e&&c(5,o=e.levels),"stale"in e&&c(6,b=e.stale)},[s,n,r,a,l,o,b]}class L extends s.a{constructor(e){var t;super(),document.getElementById("svelte-1k0o602-style")||((t=Object(s.z)("style")).id="svelte-1k0o602-style",t.textContent="@keyframes svelte-1k0o602-spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}.completed.svelte-1k0o602 .svelte-1k0o602,.stale.svelte-1k0o602 .svelte-1k0o602{color:white}",Object(s.f)(document.head,t)),Object(s.I)(this,e,N,I,s.V,{title:0,completed:1,started:2,summary:3,progress:4,levels:5,stale:6})}}var A=L;function T(e){let t,c,n,r;const a=[C,V],l=[];function o(e,t){return e[7]?0:1}return t=o(e),c=l[t]=a[t](e),{c(){c.c(),n=Object(s.A)()},l(e){c.l(e),n=Object(s.A)()},m(e,c){l[t].m(e,c),Object(s.J)(e,n,c),r=!0},p(e,r){let b=t;t=o(e),t!==b&&(Object(s.G)(),Object(s.fb)(l[b],1,1,()=>{l[b]=null}),Object(s.k)(),c=l[t],c||(c=l[t]=a[t](e),c.c()),Object(s.eb)(c,1),c.m(n.parentNode,n))},i(e){r||(Object(s.eb)(c),r=!0)},o(e){Object(s.fb)(c),r=!1},d(e){l[t].d(e),e&&Object(s.y)(n)}}}function V(e){let t,c,n;return c=new O.a({props:{icon:"check-square",size:"large"}}),{c(){t=Object(s.z)("span"),Object(s.s)(c.$$.fragment),this.h()},l(e){t=Object(s.n)(e,"SPAN",{class:!0});var n=Object(s.l)(t);Object(s.m)(c.$$.fragment,n),n.forEach(s.y),this.h()},h(){Object(s.h)(t,"class","icon svelte-15lafwj")},m(e,r){Object(s.J)(e,t,r),Object(s.N)(c,t,null),n=!0},i(e){n||(Object(s.eb)(c.$$.fragment,e),n=!0)},o(e){Object(s.fb)(c.$$.fragment,e),n=!1},d(e){e&&Object(s.y)(t),Object(s.w)(c)}}}function C(e){let t,c,n;return c=new O.a({props:{icon:"dumbbell",size:"large"}}),{c(){t=Object(s.z)("span"),Object(s.s)(c.$$.fragment),this.h()},l(e){t=Object(s.n)(e,"SPAN",{class:!0});var n=Object(s.l)(t);Object(s.m)(c.$$.fragment,n),n.forEach(s.y),this.h()},h(){Object(s.h)(t,"class","icon svelte-15lafwj")},m(e,r){Object(s.J)(e,t,r),Object(s.N)(c,t,null),n=!0},i(e){n||(Object(s.eb)(c.$$.fragment,e),n=!0)},o(e){Object(s.fb)(c.$$.fragment,e),n=!1},d(e){e&&Object(s.y)(t),Object(s.w)(c)}}}function H(e){let t,c;return t=new u.a({props:{primary:!0,href:e[2],$$slots:{default:[R]},$$scope:{ctx:e}}}),{c(){Object(s.s)(t.$$.fragment)},l(e){Object(s.m)(t.$$.fragment,e)},m(e,n){Object(s.N)(t,e,n),c=!0},p(e,c){const s={};4&c&&(s.href=e[2]),1025&c&&(s.$$scope={dirty:c,ctx:e}),t.$set(s)},i(e){c||(Object(s.eb)(t.$$.fragment,e),c=!0)},o(e){Object(s.fb)(t.$$.fragment,e),c=!1},d(e){Object(s.w)(t,e)}}}function G(e){let t,c;return t=new u.a({props:{primary:!0,href:e[2],$$slots:{default:[B]},$$scope:{ctx:e}}}),{c(){Object(s.s)(t.$$.fragment)},l(e){Object(s.m)(t.$$.fragment,e)},m(e,n){Object(s.N)(t,e,n),c=!0},p(e,c){const s={};4&c&&(s.href=e[2]),1025&c&&(s.$$scope={dirty:c,ctx:e}),t.$set(s)},i(e){c||(Object(s.eb)(t.$$.fragment,e),c=!0)},o(e){Object(s.fb)(t.$$.fragment,e),c=!1},d(e){Object(s.w)(t,e)}}}function P(e){let t,c;return t=new u.a({props:{primary:!0,href:e[2],$$slots:{default:[U]},$$scope:{ctx:e}}}),{c(){Object(s.s)(t.$$.fragment)},l(e){Object(s.m)(t.$$.fragment,e)},m(e,n){Object(s.N)(t,e,n),c=!0},p(e,c){const s={};4&c&&(s.href=e[2]),1025&c&&(s.$$scope={dirty:c,ctx:e}),t.$set(s)},i(e){c||(Object(s.eb)(t.$$.fragment,e),c=!0)},o(e){Object(s.fb)(t.$$.fragment,e),c=!1},d(e){Object(s.w)(t,e)}}}function R(e){let t,c;return{c(){t=Object(s.cb)("Learn "),c=Object(s.cb)(e[0])},l(n){t=Object(s.p)(n,"Learn "),c=Object(s.p)(n,e[0])},m(e,n){Object(s.J)(e,t,n),Object(s.J)(e,c,n)},p(e,t){1&t&&Object(s.X)(c,e[0])},d(e){e&&Object(s.y)(t),e&&Object(s.y)(c)}}}function B(e){let t,c;return{c(){t=Object(s.cb)("Continue "),c=Object(s.cb)(e[0])},l(n){t=Object(s.p)(n,"Continue "),c=Object(s.p)(n,e[0])},m(e,n){Object(s.J)(e,t,n),Object(s.J)(e,c,n)},p(e,t){1&t&&Object(s.X)(c,e[0])},d(e){e&&Object(s.y)(t),e&&Object(s.y)(c)}}}function U(e){let t,c;return{c(){t=Object(s.cb)("Practice "),c=Object(s.cb)(e[0])},l(n){t=Object(s.p)(n,"Practice "),c=Object(s.p)(n,e[0])},m(e,n){Object(s.J)(e,t,n),Object(s.J)(e,c,n)},p(e,t){1&t&&Object(s.X)(c,e[0])},d(e){e&&Object(s.y)(t),e&&Object(s.y)(c)}}}function W(e){let t,c,n,r,a,l,o,b,i,j,O,u,f,d,m=e[5]&&T(e);a=new y({props:{imageSet:e[3],stale:e[7],completed:e[5]}}),o=new A({props:{progress:e[8],stale:e[7],levels:e[1],title:e[0],completed:e[5],started:e[6],summary:e[4]}});const h=[P,G,H],$=[];function p(e,t){return e[5]?0:e[6]?1:2}return u=p(e),f=$[u]=h[u](e),{c(){t=Object(s.z)("div"),m&&m.c(),c=Object(s.ab)(),n=Object(s.z)("div"),r=Object(s.z)("div"),Object(s.s)(a.$$.fragment),l=Object(s.ab)(),Object(s.s)(o.$$.fragment),b=Object(s.ab)(),i=Object(s.z)("footer"),j=Object(s.z)("div"),O=Object(s.z)("div"),f.c(),this.h()},l(e){t=Object(s.n)(e,"DIV",{class:!0,"data-test":!0,"data-started":!0,"data-completed":!0,"data-stale":!0});var u=Object(s.l)(t);m&&m.l(u),c=Object(s.o)(u),n=Object(s.n)(u,"DIV",{class:!0});var d=Object(s.l)(n);r=Object(s.n)(d,"DIV",{class:!0});var h=Object(s.l)(r);Object(s.m)(a.$$.fragment,h),l=Object(s.o)(h),Object(s.m)(o.$$.fragment,h),h.forEach(s.y),d.forEach(s.y),b=Object(s.o)(u),i=Object(s.n)(u,"FOOTER",{class:!0});var $=Object(s.l)(i);j=Object(s.n)($,"DIV",{href:!0,class:!0});var p=Object(s.l)(j);O=Object(s.n)(p,"DIV",{class:!0});var g=Object(s.l)(O);f.l(g),g.forEach(s.y),p.forEach(s.y),$.forEach(s.y),u.forEach(s.y),this.h()},h(){Object(s.h)(r,"class","media"),Object(s.h)(n,"class","card-content svelte-15lafwj"),Object(s.h)(O,"class","button-container"),Object(s.h)(j,"href",e[2]),Object(s.h)(j,"class","card-footer-item"),Object(s.h)(i,"class","card-footer"),Object(s.h)(t,"class","card svelte-15lafwj"),Object(s.h)(t,"data-test","skill card"),Object(s.h)(t,"data-started",e[6]),Object(s.h)(t,"data-completed",e[5]),Object(s.h)(t,"data-stale",e[7])},m(e,f){Object(s.J)(e,t,f),m&&m.m(t,null),Object(s.f)(t,c),Object(s.f)(t,n),Object(s.f)(n,r),Object(s.N)(a,r,null),Object(s.f)(r,l),Object(s.N)(o,r,null),Object(s.f)(t,b),Object(s.f)(t,i),Object(s.f)(i,j),Object(s.f)(j,O),$[u].m(O,null),d=!0},p(e,[n]){e[5]?m?(m.p(e,n),32&n&&Object(s.eb)(m,1)):(m=T(e),m.c(),Object(s.eb)(m,1),m.m(t,c)):m&&(Object(s.G)(),Object(s.fb)(m,1,1,()=>{m=null}),Object(s.k)());const r={};8&n&&(r.imageSet=e[3]),128&n&&(r.stale=e[7]),32&n&&(r.completed=e[5]),a.$set(r);const l={};256&n&&(l.progress=e[8]),128&n&&(l.stale=e[7]),2&n&&(l.levels=e[1]),1&n&&(l.title=e[0]),32&n&&(l.completed=e[5]),64&n&&(l.started=e[6]),16&n&&(l.summary=e[4]),o.$set(l);let b=u;u=p(e),u===b?$[u].p(e,n):(Object(s.G)(),Object(s.fb)($[b],1,1,()=>{$[b]=null}),Object(s.k)(),f=$[u],f||(f=$[u]=h[u](e),f.c()),Object(s.eb)(f,1),f.m(O,null)),(!d||4&n)&&Object(s.h)(j,"href",e[2]),(!d||64&n)&&Object(s.h)(t,"data-started",e[6]),(!d||32&n)&&Object(s.h)(t,"data-completed",e[5]),(!d||128&n)&&Object(s.h)(t,"data-stale",e[7])},i(e){d||(Object(s.eb)(m),Object(s.eb)(a.$$.fragment,e),Object(s.eb)(o.$$.fragment,e),Object(s.eb)(f),d=!0)},o(e){Object(s.fb)(m),Object(s.fb)(a.$$.fragment,e),Object(s.fb)(o.$$.fragment,e),Object(s.fb)(f),d=!1},d(e){e&&Object(s.y)(t),m&&m.d(),Object(s.w)(a),Object(s.w)(o),$[u].d()}}}function Y(e,t,c){let{title:s}=t,{levels:a}=t,{practiceHref:l}=t,{id:o}=t,{imageSet:b=[]}=t,{summary:i}=t,O=null,u=null,f=null,d=null;return Object(n.d)(()=>{Object(r.a)(e=>(async(e,{id:t})=>{if(!e)return null;try{const{practiced:c}=await e.get(`skills/${t}`),s=c.filter(({correct:e})=>void 0===e||e>0);if(0===s.length)return{started:!1,stale:null,progress:0};const n=s.reduce((e,{correct:t,skipped:c})=>e+(t||1)/((t||1)+(c||0)),0);return{started:s.length>=1,stale:j({practices:c}),progress:n}}catch{return{started:!1,stale:null,progress:0}}})(e,{id:o}).then(e=>{c(5,O=e.progress>=a),c(8,d=e.progress),c(6,u=e.started),c(7,f=e.stale)}).catch(()=>{}))}),e.$$set=e=>{"title"in e&&c(0,s=e.title),"levels"in e&&c(1,a=e.levels),"practiceHref"in e&&c(2,l=e.practiceHref),"id"in e&&c(9,o=e.id),"imageSet"in e&&c(3,b=e.imageSet),"summary"in e&&c(4,i=e.summary)},[s,a,l,b,i,O,u,f,d,o]}class F extends s.a{constructor(e){var t;super(),document.getElementById("svelte-15lafwj-style")||((t=Object(s.z)("style")).id="svelte-15lafwj-style",t.textContent='@keyframes svelte-15lafwj-spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}.card-content.svelte-15lafwj.svelte-15lafwj{height:147px}.card.svelte-15lafwj.svelte-15lafwj{background:white}.card[data-completed="true"].svelte-15lafwj.svelte-15lafwj{background-color:#b2ca93}.card[data-completed="true"][data-stale="true"].svelte-15lafwj.svelte-15lafwj{background-color:#afb2ab}.card[data-completed="true"][data-stale="true"].svelte-15lafwj>.icon.svelte-15lafwj{position:absolute;right:1em;top:0.5em}.card[data-completed="true"].svelte-15lafwj .icon.svelte-15lafwj{color:white}.card.svelte-15lafwj>.icon.svelte-15lafwj{position:absolute;right:0.5em;top:0.5em}',Object(s.f)(document.head,t)),Object(s.I)(this,e,Y,W,s.V,{title:0,levels:1,practiceHref:2,id:9,imageSet:3,summary:4})}}var K=F,X=c(43),q=c(39),Z=c(40);function Q(e,t,c){const s=e.slice();return s[7]=t[c],s}function ee(e,t,c){const s=e.slice();return s[3]=t[c].title,s[4]=t[c].skills,s}function te(e){let t,c;const n=[{...e[7]},{practiceHref:`/course/${e[0]}/skill/${e[7].practiceHref}`}];let r={};for(let e=0;e<n.length;e+=1)r=Object(s.g)(r,n[e]);return t=new K({props:r}),{c(){Object(s.s)(t.$$.fragment)},l(e){Object(s.m)(t.$$.fragment,e)},m(e,n){Object(s.N)(t,e,n),c=!0},p(e,c){const r=3&c?Object(s.D)(n,[2&c&&{...e[7]},{practiceHref:`/course/${e[0]}/skill/${e[7].practiceHref}`}]):{};t.$set(r)},i(e){c||(Object(s.eb)(t.$$.fragment,e),c=!0)},o(e){Object(s.fb)(t.$$.fragment,e),c=!1},d(e){Object(s.w)(t,e)}}}function ce(e){let t,c;return t=new q.a({props:{sizeDesktop:"1/3",sizeTablet:"1/2",$$slots:{default:[te]},$$scope:{ctx:e}}}),{c(){Object(s.s)(t.$$.fragment)},l(e){Object(s.m)(t.$$.fragment,e)},m(e,n){Object(s.N)(t,e,n),c=!0},p(e,c){const s={};1027&c&&(s.$$scope={dirty:c,ctx:e}),t.$set(s)},i(e){c||(Object(s.eb)(t.$$.fragment,e),c=!0)},o(e){Object(s.fb)(t.$$.fragment,e),c=!1},d(e){Object(s.w)(t,e)}}}function se(e){let t,c,n=e[4],r=[];for(let t=0;t<n.length;t+=1)r[t]=ce(Q(e,n,t));const a=e=>Object(s.fb)(r[e],1,1,()=>{r[e]=null});return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=Object(s.A)()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=Object(s.A)()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);Object(s.J)(e,t,n),c=!0},p(e,c){if(3&c){let l;for(n=e[4],l=0;l<n.length;l+=1){const a=Q(e,n,l);r[l]?(r[l].p(a,c),Object(s.eb)(r[l],1)):(r[l]=ce(a),r[l].c(),Object(s.eb)(r[l],1),r[l].m(t.parentNode,t))}for(Object(s.G)(),l=n.length;l<r.length;l+=1)a(l);Object(s.k)()}},i(e){if(!c){for(let e=0;e<n.length;e+=1)Object(s.eb)(r[e]);c=!0}},o(e){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)Object(s.fb)(r[e]);c=!1},d(e){Object(s.x)(r,e),e&&Object(s.y)(t)}}}function ne(e){let t,c,n,r,a,l,o,b=e[3]+"";return l=new Z.a({props:{multiline:!0,$$slots:{default:[se]},$$scope:{ctx:e}}}),{c(){t=Object(s.z)("section"),c=Object(s.z)("div"),n=Object(s.z)("h2"),r=Object(s.cb)(b),a=Object(s.ab)(),Object(s.s)(l.$$.fragment),this.h()},l(e){t=Object(s.n)(e,"SECTION",{class:!0});var o=Object(s.l)(t);c=Object(s.n)(o,"DIV",{class:!0});var i=Object(s.l)(c);n=Object(s.n)(i,"H2",{class:!0});var j=Object(s.l)(n);r=Object(s.p)(j,b),j.forEach(s.y),a=Object(s.o)(i),Object(s.m)(l.$$.fragment,i),i.forEach(s.y),o.forEach(s.y),this.h()},h(){Object(s.h)(n,"class","is-size-2"),Object(s.h)(c,"class","container svelte-1rsvn2t"),Object(s.h)(t,"class","section")},m(e,b){Object(s.J)(e,t,b),Object(s.f)(t,c),Object(s.f)(c,n),Object(s.f)(n,r),Object(s.f)(c,a),Object(s.N)(l,c,null),o=!0},p(e,t){(!o||2&t)&&b!==(b=e[3]+"")&&Object(s.X)(r,b);const c={};1027&t&&(c.$$scope={dirty:t,ctx:e}),l.$set(c)},i(e){o||(Object(s.eb)(l.$$.fragment,e),o=!0)},o(e){Object(s.fb)(l.$$.fragment,e),o=!1},d(e){e&&Object(s.y)(t),Object(s.w)(l)}}}function re(e){let t,c,n,r,a,l,o,b,i;return{c(){t=Object(s.z)("strong"),c=Object(s.cb)("LibreLingo"),n=Object(s.cb)("\n        by\n        "),r=Object(s.z)("a"),a=Object(s.cb)("Dániel Kántor"),l=Object(s.cb)("\n        and\n        "),o=Object(s.z)("a"),b=Object(s.cb)("various contributors"),i=Object(s.cb)("\n        ."),this.h()},l(e){t=Object(s.n)(e,"STRONG",{});var j=Object(s.l)(t);c=Object(s.p)(j,"LibreLingo"),j.forEach(s.y),n=Object(s.p)(e,"\n        by\n        "),r=Object(s.n)(e,"A",{href:!0});var O=Object(s.l)(r);a=Object(s.p)(O,"Dániel Kántor"),O.forEach(s.y),l=Object(s.p)(e,"\n        and\n        "),o=Object(s.n)(e,"A",{href:!0});var u=Object(s.l)(o);b=Object(s.p)(u,"various contributors"),u.forEach(s.y),i=Object(s.p)(e,"\n        ."),this.h()},h(){Object(s.h)(r,"href","https://github.com/kantord"),Object(s.h)(o,"href","https://github.com/kantord/LibreLingo#contributors-")},m(e,j){Object(s.J)(e,t,j),Object(s.f)(t,c),Object(s.J)(e,n,j),Object(s.J)(e,r,j),Object(s.f)(r,a),Object(s.J)(e,l,j),Object(s.J)(e,o,j),Object(s.f)(o,b),Object(s.J)(e,i,j)},d(e){e&&Object(s.y)(t),e&&Object(s.y)(n),e&&Object(s.y)(r),e&&Object(s.y)(l),e&&Object(s.y)(o),e&&Object(s.y)(i)}}}function ae(e){let t,c,n,r,a,l,o,b;return{c(){t=Object(s.cb)("The source code is licensed\n        "),c=Object(s.z)("a"),n=Object(s.cb)("AGPL-3.0."),r=Object(s.ab)(),a=Object(s.z)("br"),l=Object(s.ab)(),o=Object(s.z)("a"),b=Object(s.cb)("Source code available on GitHub."),this.h()},l(e){t=Object(s.p)(e,"The source code is licensed\n        "),c=Object(s.n)(e,"A",{href:!0});var i=Object(s.l)(c);n=Object(s.p)(i,"AGPL-3.0."),i.forEach(s.y),r=Object(s.o)(e),a=Object(s.n)(e,"BR",{}),l=Object(s.o)(e),o=Object(s.n)(e,"A",{href:!0});var j=Object(s.l)(o);b=Object(s.p)(j,"Source code available on GitHub."),j.forEach(s.y),this.h()},h(){Object(s.h)(c,"href","https://opensource.org/licenses/AGPL-3.0"),Object(s.h)(o,"href","https://github.com/kantord/LibreLingo")},m(e,i){Object(s.J)(e,t,i),Object(s.J)(e,c,i),Object(s.f)(c,n),Object(s.J)(e,r,i),Object(s.J)(e,a,i),Object(s.J)(e,l,i),Object(s.J)(e,o,i),Object(s.f)(o,b)},d(e){e&&Object(s.y)(t),e&&Object(s.y)(c),e&&Object(s.y)(r),e&&Object(s.y)(a),e&&Object(s.y)(l),e&&Object(s.y)(o)}}}function le(e){let t,c,n,r,a,l;return t=new q.a({props:{$$slots:{default:[re]},$$scope:{ctx:e}}}),n=new q.a({props:{$$slots:{default:[ae]},$$scope:{ctx:e}}}),a=new q.a({}),{c(){Object(s.s)(t.$$.fragment),c=Object(s.ab)(),Object(s.s)(n.$$.fragment),r=Object(s.ab)(),Object(s.s)(a.$$.fragment)},l(e){Object(s.m)(t.$$.fragment,e),c=Object(s.o)(e),Object(s.m)(n.$$.fragment,e),r=Object(s.o)(e),Object(s.m)(a.$$.fragment,e)},m(e,o){Object(s.N)(t,e,o),Object(s.J)(e,c,o),Object(s.N)(n,e,o),Object(s.J)(e,r,o),Object(s.N)(a,e,o),l=!0},p(e,c){const s={};1024&c&&(s.$$scope={dirty:c,ctx:e}),t.$set(s);const r={};1024&c&&(r.$$scope={dirty:c,ctx:e}),n.$set(r)},i(e){l||(Object(s.eb)(t.$$.fragment,e),Object(s.eb)(n.$$.fragment,e),Object(s.eb)(a.$$.fragment,e),l=!0)},o(e){Object(s.fb)(t.$$.fragment,e),Object(s.fb)(n.$$.fragment,e),Object(s.fb)(a.$$.fragment,e),l=!1},d(e){Object(s.w)(t,e),e&&Object(s.y)(c),Object(s.w)(n,e),e&&Object(s.y)(r),Object(s.w)(a,e)}}}function oe(e){let t,c,n,r,a,l,o,b,i,j,O;document.title=t="LibreLingo - learn "+e[2]+" for free",n=new X.a({props:{dark:!0,hasAuth:!0}});let u=e[1],f=[];for(let t=0;t<u.length;t+=1)f[t]=ne(ee(e,u,t));const d=e=>Object(s.fb)(f[e],1,1,()=>{f[e]=null});return b=new Z.a({props:{$$slots:{default:[le]},$$scope:{ctx:e}}}),{c(){c=Object(s.ab)(),Object(s.s)(n.$$.fragment),r=Object(s.ab)();for(let e=0;e<f.length;e+=1)f[e].c();a=Object(s.ab)(),l=Object(s.z)("footer"),o=Object(s.z)("div"),Object(s.s)(b.$$.fragment),i=Object(s.ab)(),j=Object(s.z)("p"),this.h()},l(e){Object(s.T)('[data-svelte="svelte-1xdlk4p"]',document.head).forEach(s.y),c=Object(s.o)(e),Object(s.m)(n.$$.fragment,e),r=Object(s.o)(e);for(let t=0;t<f.length;t+=1)f[t].l(e);a=Object(s.o)(e),l=Object(s.n)(e,"FOOTER",{class:!0});var t=Object(s.l)(l);o=Object(s.n)(t,"DIV",{class:!0});var O=Object(s.l)(o);Object(s.m)(b.$$.fragment,O),i=Object(s.o)(O),j=Object(s.n)(O,"P",{}),Object(s.l)(j).forEach(s.y),O.forEach(s.y),t.forEach(s.y),this.h()},h(){Object(s.h)(o,"class","content"),Object(s.h)(l,"class","footer")},m(e,t){Object(s.J)(e,c,t),Object(s.N)(n,e,t),Object(s.J)(e,r,t);for(let c=0;c<f.length;c+=1)f[c].m(e,t);Object(s.J)(e,a,t),Object(s.J)(e,l,t),Object(s.f)(l,o),Object(s.N)(b,o,null),Object(s.f)(o,i),Object(s.f)(o,j),O=!0},p(e,[c]){if((!O||4&c)&&t!==(t="LibreLingo - learn "+e[2]+" for free")&&(document.title=t),3&c){let t;for(u=e[1],t=0;t<u.length;t+=1){const n=ee(e,u,t);f[t]?(f[t].p(n,c),Object(s.eb)(f[t],1)):(f[t]=ne(n),f[t].c(),Object(s.eb)(f[t],1),f[t].m(a.parentNode,a))}for(Object(s.G)(),t=u.length;t<f.length;t+=1)d(t);Object(s.k)()}const n={};1024&c&&(n.$$scope={dirty:c,ctx:e}),b.$set(n)},i(e){if(!O){Object(s.eb)(n.$$.fragment,e);for(let e=0;e<u.length;e+=1)Object(s.eb)(f[e]);Object(s.eb)(b.$$.fragment,e),O=!0}},o(e){Object(s.fb)(n.$$.fragment,e),f=f.filter(Boolean);for(let e=0;e<f.length;e+=1)Object(s.fb)(f[e]);Object(s.fb)(b.$$.fragment,e),O=!1},d(e){e&&Object(s.y)(c),Object(s.w)(n,e),e&&Object(s.y)(r),Object(s.x)(f,e),e&&Object(s.y)(a),e&&Object(s.y)(l),Object(s.w)(b)}}}async function be(e,t){const{courseName:s}=e.params,{modules:n,languageName:r}=await c(84)(`./${s}/courseData.json`);return{courseName:s,modules:n,languageName:r}}function ie(e,t,c){let{courseName:s=null}=t,{modules:n=null}=t,{languageName:r=null}=t;return e.$$set=e=>{"courseName"in e&&c(0,s=e.courseName),"modules"in e&&c(1,n=e.modules),"languageName"in e&&c(2,r=e.languageName)},[s,n,r]}class je extends s.a{constructor(e){var t;super(),document.getElementById("svelte-1rsvn2t-style")||((t=Object(s.z)("style")).id="svelte-1rsvn2t-style",t.textContent="@keyframes svelte-1rsvn2t-spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}.container.svelte-1rsvn2t{padding-right:20px;padding-left:20px}",Object(s.f)(document.head,t)),Object(s.I)(this,e,ie,oe,s.V,{courseName:0,modules:1,languageName:2})}}t.default=je},40:function(e,t,c){"use strict";var s=c(0);function n(e){let t,c;const n=e[3].default,r=Object(s.v)(n,e,e[2],null);return{c(){t=Object(s.z)("div"),r&&r.c(),this.h()},l(e){t=Object(s.n)(e,"DIV",{class:!0});var c=Object(s.l)(t);r&&r.l(c),c.forEach(s.y),this.h()},h(){Object(s.h)(t,"class","columns svelte-15b2wn7"),Object(s.db)(t,"is-multiline",e[0]),Object(s.db)(t,"is-reversed",e[1])},m(e,n){Object(s.J)(e,t,n),r&&r.m(t,null),c=!0},p(e,[c]){r&&r.p&&4&c&&Object(s.hb)(r,n,e,e[2],c,null,null),1&c&&Object(s.db)(t,"is-multiline",e[0]),2&c&&Object(s.db)(t,"is-reversed",e[1])},i(e){c||(Object(s.eb)(r,e),c=!0)},o(e){Object(s.fb)(r,e),c=!1},d(e){e&&Object(s.y)(t),r&&r.d(e)}}}function r(e,t,c){let{$$slots:s={},$$scope:n}=t,{multiline:r=!1}=t,{reversed:a=!1}=t;return e.$$set=e=>{"multiline"in e&&c(0,r=e.multiline),"reversed"in e&&c(1,a=e.reversed),"$$scope"in e&&c(2,n=e.$$scope)},[r,a,n,s]}class a extends s.a{constructor(e){var t;super(),document.getElementById("svelte-15b2wn7-style")||((t=Object(s.z)("style")).id="svelte-15b2wn7-style",t.textContent="@keyframes svelte-15b2wn7-spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}@media screen and (max-width: 768px){.is-reversed.svelte-15b2wn7{flex-direction:column-reverse;display:flex}}",Object(s.f)(document.head,t)),Object(s.I)(this,e,r,n,s.V,{multiline:0,reversed:1})}}t.a=a},45:function(e,t,c){"use strict";(function(e){var s=c(21),n=c(46),r=c(8),a=c.n(r);let l,o,b;const i=t=>{const n=new(void 0!==e.env.JEST_WORKER_ID?c(34):c(34).default)(t).setMaxListeners(s.a.database.maxNumberOfListeners);return n.changes({since:"now",live:!0,include_docs:!0}).on("change",()=>{if(void 0!==e.env.JEST_WORKER_ID)return;c(19).default.update(e=>({...e,dbUpdatedAt:Date.now()}))}),n};{const e=c(19).default,t=c(34).default;o=new t(`${s.a.database.remote}/${a.a.get("loginDb")}`,{skip_setup:!0,live:!0}),l=i(s.a.database.local),window._DB=l,a.a.get("loginDb")===Object(n.a)("---fakeUser")&&e.update(e=>({...e,user:{name:"---fakeUser"},online:!0})),a.a.get("loginDb")&&s.a.features.authEnabled?fetch(`${s.a.database.remote}/_session`,{credentials:"include"}).then(e=>e.json()).then(t=>{null!==t.userCtx.name&&(e.update(e=>({...e,user:{name:t.userCtx.name}})),r())}):e.update(e=>({...e,online:!1})),window._fakeLogin=()=>{a.a.set("loginDb",Object(n.a)("---fakeUser"),{expires:s.a.database.auth.expireDays}),window.location.href="/course/spanish-from-english/"},window._Login=async(t,c)=>{if(!1===window._test_credentials_correct)throw new Error("Incorrect username or password");if(!0===window._test_credentials_correct)return window._fakeLogin();const r=await(await fetch(`${s.a.database.remote}/_session`,{method:"post",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:c})})).json();if(r.error){if("unauthorized"===r.error)throw new Error("Username or password is incorrect");throw new Error("Couldn't log in. Please try again later")}e.update(e=>({...e,online:null})),a.a.set("loginDb",Object(n.a)(t),{expires:s.a.database.auth.expireDays}),window.location.reload(!1),window.location.href="/course/spanish-from-english/"},window._Logout=async()=>{try{b&&(await b.cancel(),await fetch(`${s.a.database.remote}/_session`,{method:"delete"}))}finally{a.a.remove("loginDb"),e.update(e=>({...e,user:null,online:null})),await l.destroy(),window.location.reload(!1)}};const r=()=>{b=l.sync(o).on("complete",(function(){e.update(e=>({...e,online:!0}))})).on("error",(function(){e.update(e=>({...e,online:!1}))}))}}void 0!==e.env.JEST_WORKER_ID&&(l=i(s.a.database.local),l.__reset=async()=>{const e=await l.allDocs();await Promise.all(e.rows.map((function(e){return l.remove(e.id,e.value.rev)})))}),t.a=l}).call(this,c(20))},46:function(e,t,c){"use strict";t.a=e=>`userdb-${(e=>e.split("").map(e=>e.charCodeAt(0).toString(16)).join(""))(e)}`},58:function(e,t){},84:function(e,t,c){var s={"./german-from-english/courseData.json":[144,28],"./spanish-from-english/courseData.json":[145,44],"./test/courseData.json":[146,56]};function n(e){if(!c.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],n=t[0];return c.e(t[1]).then((function(){return c.t(n,3)}))}n.keys=function(){return Object.keys(s)},n.id=84,e.exports=n}}]);