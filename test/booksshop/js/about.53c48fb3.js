(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"032a":function(t,e,a){},"0d15":function(t,e,a){},"0d17":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"path"},[a("div",{staticClass:"path__wrapper"},[a("div",{staticClass:"path__line"},t._l(t.arr,(function(e,s){return a("span",{key:s},[a("a",{staticClass:"path__line-link",attrs:{href:"/"+e}},[t._v(t._s(""==e?"home":e))]),t._v(" » ")])})),0)])])},i=[],n=(a("ac1f"),a("1276"),{data:function(){return{arr:[]}},mounted:function(){this.arr=this.$route.fullPath.split("/")}}),r=n,c=(a("3eaf"),a("2877")),o=Object(c["a"])(r,s,i,!1,null,null,null);e["a"]=o.exports},"0eb1":function(t,e,a){"use strict";var s=a("3fc3"),i=a.n(s);i.a},"0f78":function(t,e,a){"use strict";var s=a("31f3"),i=a.n(s);i.a},1276:function(t,e,a){"use strict";var s=a("d784"),i=a("44e7"),n=a("825a"),r=a("1d80"),c=a("4840"),o=a("8aa5"),l=a("50c4"),u=a("14c3"),_=a("9263"),d=a("d039"),p=[].push,m=Math.min,h=4294967295,f=!d((function(){return!RegExp(h,"y")}));s("split",2,(function(t,e,a){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var s=String(r(this)),n=void 0===a?h:a>>>0;if(0===n)return[];if(void 0===t)return[s];if(!i(t))return e.call(s,t,n);var c,o,l,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,f=new RegExp(t.source,d+"g");while(c=_.call(f,s)){if(o=f.lastIndex,o>m&&(u.push(s.slice(m,c.index)),c.length>1&&c.index<s.length&&p.apply(u,c.slice(1)),l=c[0].length,m=o,u.length>=n))break;f.lastIndex===c.index&&f.lastIndex++}return m===s.length?!l&&f.test("")||u.push(""):u.push(s.slice(m)),u.length>n?u.slice(0,n):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var i=r(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,i,a):s.call(String(i),e,a)},function(t,i){var r=a(s,t,this,i,s!==e);if(r.done)return r.value;var _=n(t),d=String(this),p=c(_,RegExp),b=_.unicode,v=(_.ignoreCase?"i":"")+(_.multiline?"m":"")+(_.unicode?"u":"")+(f?"y":"g"),g=new p(f?_:"^(?:"+_.source+")",v),C=void 0===i?h:i>>>0;if(0===C)return[];if(0===d.length)return null===u(g,d)?[d]:[];var x=0,k=0,y=[];while(k<d.length){g.lastIndex=f?k:0;var w,E=u(g,f?d:d.slice(k));if(null===E||(w=m(l(g.lastIndex+(f?0:k)),d.length))===x)k=o(d,k,b);else{if(y.push(d.slice(x,k)),y.length===C)return y;for(var I=1;I<=E.length-1;I++)if(y.push(E[I]),y.length===C)return y;k=x=w}}return y.push(d.slice(x)),y}]}),!f)},"14c3":function(t,e,a){var s=a("c6b6"),i=a("9263");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var n=a.call(t,e);if("object"!==typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==s(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"1aeb":function(t,e,a){"use strict";var s=a("032a"),i=a.n(s);i.a},"31f3":function(t,e,a){},"3eaf":function(t,e,a){"use strict";var s=a("0d15"),i=a.n(s);i.a},"3fc3":function(t,e,a){},"44e7":function(t,e,a){var s=a("861d"),i=a("c6b6"),n=a("b622"),r=n("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==i(t))}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var s=a("1d80"),i=a("5899"),n="["+i+"]",r=RegExp("^"+n+n+"*"),c=RegExp(n+n+"*$"),o=function(t){return function(e){var a=String(s(e));return 1&t&&(a=a.replace(r,"")),2&t&&(a=a.replace(c,"")),a}};t.exports={start:o(1),end:o(2),trim:o(3)}},6547:function(t,e,a){var s=a("a691"),i=a("1d80"),n=function(t){return function(e,a){var n,r,c=String(i(e)),o=s(a),l=c.length;return o<0||o>=l?t?"":void 0:(n=c.charCodeAt(o),n<55296||n>56319||o+1===l||(r=c.charCodeAt(o+1))<56320||r>57343?t?c.charAt(o):n:t?c.slice(o,o+2):r-56320+(n-55296<<10)+65536)}};t.exports={codeAt:n(!1),charAt:n(!0)}},7156:function(t,e,a){var s=a("861d"),i=a("d2bb");t.exports=function(t,e,a){var n,r;return i&&"function"==typeof(n=e.constructor)&&n!==a&&s(r=n.prototype)&&r!==a.prototype&&i(t,r),t}},"8aa5":function(t,e,a){"use strict";var s=a("6547").charAt;t.exports=function(t,e,a){return e+(a?s(t,e).length:1)}},"8bb5":function(t,e,a){"use strict";var s=a("d285"),i=a.n(s);i.a},9263:function(t,e,a){"use strict";var s=a("ad6d"),i=a("9f7f"),n=RegExp.prototype.exec,r=String.prototype.replace,c=n,o=function(){var t=/a/,e=/b*/g;return n.call(t,"a"),n.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],_=o||u||l;_&&(c=function(t){var e,a,i,c,_=this,d=l&&_.sticky,p=s.call(_),m=_.source,h=0,f=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),f=String(t).slice(_.lastIndex),_.lastIndex>0&&(!_.multiline||_.multiline&&"\n"!==t[_.lastIndex-1])&&(m="(?: "+m+")",f=" "+f,h++),a=new RegExp("^(?:"+m+")",p)),u&&(a=new RegExp("^"+m+"$(?!\\s)",p)),o&&(e=_.lastIndex),i=n.call(d?a:_,f),d?i?(i.input=i.input.slice(h),i[0]=i[0].slice(h),i.index=_.lastIndex,_.lastIndex+=i[0].length):_.lastIndex=0:o&&i&&(_.lastIndex=_.global?i.index+i[0].length:e),u&&i&&i.length>1&&r.call(i[0],a,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=c},"9f7f":function(t,e,a){"use strict";var s=a("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=s((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=s((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a0e3:function(t,e,a){},a9c1:function(t,e,a){"use strict";var s=a("b000"),i=a.n(s);i.a},a9e3:function(t,e,a){"use strict";var s=a("83ab"),i=a("da84"),n=a("94ca"),r=a("6eeb"),c=a("5135"),o=a("c6b6"),l=a("7156"),u=a("c04e"),_=a("d039"),d=a("7c73"),p=a("241c").f,m=a("06cf").f,h=a("9bf2").f,f=a("58a8").trim,b="Number",v=i[b],g=v.prototype,C=o(d(g))==b,x=function(t){var e,a,s,i,n,r,c,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=f(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:s=2,i=49;break;case 79:case 111:s=8,i=55;break;default:return+l}for(n=l.slice(2),r=n.length,c=0;c<r;c++)if(o=n.charCodeAt(c),o<48||o>i)return NaN;return parseInt(n,s)}return+l};if(n(b,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var k,y=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof y&&(C?_((function(){g.valueOf.call(a)})):o(a)!=b)?l(new v(x(e)),a,y):x(e)},w=s?p(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;w.length>E;E++)c(v,k=w[E])&&!c(y,k)&&h(y,k,m(v,k));y.prototype=g,g.constructor=y,r(i,b,y)}},ac1f:function(t,e,a){"use strict";var s=a("23e7"),i=a("9263");s({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,a){"use strict";var s=a("825a");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b000:function(t,e,a){},d285:function(t,e,a){},d2f1:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"product"},[a("Hello"),a("Header"),a("Pathcomp"),a("div",{staticClass:"product__wrapper"},[a("section",{staticClass:"product__section product__border product__flex"},[a("img",{staticClass:"product__image",attrs:{src:t.book.img,alt:t.book.author+"-"+t.book.title}}),a("article",{staticClass:"product__block"},[a("h3",{staticClass:"product__block-title"},[t._v(t._s(t.book.title))]),a("p",{staticClass:"product__block-text"},[t._v(t._s(t.book.desc))]),a("div",{staticClass:"product__pay"},[a("div",{staticClass:"product__pay-topblock"},[a("div",{staticClass:"product__pay-headblock"},[a("h4",{staticClass:"product__pay-header"},[a("span",{staticClass:"product__pay-title"},[t._v("Our price:")]),a("span",{staticClass:"product__pay-price"},[t._v("$"+t._s(t.book.price))])]),a("h5",{staticClass:"product__pay-sale"},[t._v("Was $"+t._s(t.total)+" Save "+t._s(t.book.sale)+"% ")])]),a("button",{staticClass:"product__pay-button"},[t._v("Add to cart")])]),a("hr"),t._m(0)])])]),a("section",{staticClass:"product__section product__flex"},[a("div",{staticClass:"product__section-box"},[t._m(1),a("Commentbox")],1),a("Bookbanner")],1)]),a("Footer")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product__pay-bottomblock"},[a("p",{staticClass:"product__pay-status"},[a("i",{staticClass:"product__pay-icon"}),t._v(" Safe, Secure Shopping ")]),a("p",{staticClass:"product__pay-cards"},[a("button",{staticClass:"product__pay-card"}),a("button",{staticClass:"product__pay-card"}),a("button",{staticClass:"product__pay-card"}),a("button",{staticClass:"product__pay-card"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"product__pannels"},[a("div",{staticClass:"product__pannels-tabs"},[a("button",{staticClass:"product__pannels-button product__pannels-buttonactive"},[t._v("Product information")]),a("button",{staticClass:"product__pannels-button product__pannels-buttonnoactive"},[t._v("Other details")])]),a("div",{staticClass:"product__pannels-block"},[a("p",{staticClass:"product__pannels-text"},[t._v(" The Star Wars Episode I: The Phantom Menace novelization was written by Terry Brooks and published on April 21, 1999 by Del Rey. It is based on the script of the movie of the same name. Narration for the abridged audio version was performed by Michael Cumpsty. The unabridged version was performed by Alexander Adams. On January 31, 2012, a new paperback edition was ")])])])}],n=a("0418"),r=a("fdab"),c=a("fd2d"),o=a("0d17"),l=a("fea6"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"commbox"},[a("h3",{staticClass:"commbox__title"},[t._v("Product review")]),t._l(t.comments,(function(e,s){return a("div",{key:s,staticClass:"commbox__comment"},[a("div",{staticClass:"commbox__comment-block"},[a("div",{staticClass:"commbox__comment-avatar"},[a("img",{staticClass:"commbox__comment-image",attrs:{src:"none"==e.img?"/img/user.png":"c.img",alt:e.name,id:e.id}}),a("p",{staticClass:"commbox__comment-name"},[t._v(t._s(e.name))])]),a("p",{staticClass:"commbox__comment-text"},[t._v(t._s(e.text))])]),a("hr",{directives:[{name:"show",rawName:"v-show",value:s<t.comments.length-1,expression:"k<comments.length-1"}]})])})),a("h3",{staticClass:"commbox__title"},[t._v("Write a comment")]),t._m(0)],2)},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"commbox__form"},[a("div",{staticClass:"commbox__form-box"},[a("div",{staticClass:"commbox__form-info"},[a("label",{staticClass:"commbox__form-label"},[t._v("Your name")]),a("label",{staticClass:"commbox__form-label"},[t._v("Email")]),a("label",{staticClass:"commbox__form-label"},[t._v("Message")])]),a("div",{staticClass:"commbox__form-enters"},[a("input",{staticClass:"commbox__form-input"}),a("input",{staticClass:"commbox__form-input"}),a("textarea",{staticClass:"commbox__form-area"})])]),a("div",{staticClass:"commbox__form-control"},[a("button",{staticClass:"commbox__form-button"},[t._v(" Submit ")])])])}],d={data:function(){return{comments:[{id:0,img:"none",name:"Name 1",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially"},{id:1,img:"none",name:"Name 2",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially"}]}}},p=d,m=(a("0eb1"),a("2877")),h=Object(m["a"])(p,u,_,!1,null,"102a24b7",null),f=h.exports,b={name:"Home",components:{Header:n["default"],Hello:r["a"],Footer:c["a"],Pathcomp:o["a"],Bookbanner:l["a"],Commentbox:f},data:function(){return{book:{img:"/img/book_6.png",title:"Star Wars Episode I",author:"Terry Brooks",price:150,sale:25,desc:"The Star Wars Episode I: The Phantom Menace novelization was written by Terry Brooks and published on April 21, 1999 by Del Rey. It is based on the script of the movie of the same name. Narration for the abridged audio version was performed by Michael Cumpsty. The unabridged version was performed by Alexander Adams. On January 31, 2012, a new paperback edition "}}},computed:{total:function(){var t=this.book.sale/100;return this.book.price/(1-t)}}},v=b,g=(a("1aeb"),Object(m["a"])(v,s,i,!1,null,"223984c0",null));e["default"]=g.exports},d784:function(t,e,a){"use strict";a("ac1f");var s=a("6eeb"),i=a("d039"),n=a("b622"),r=a("9263"),c=a("9112"),o=n("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),_=n("replace"),d=function(){return!!/./[_]&&""===/./[_]("a","$0")}(),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,_){var m=n(t),h=!i((function(){var e={};return e[m]=function(){return 7},7!=""[t](e)})),f=h&&!i((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[o]=function(){return a},a.flags="",a[m]=/./[m]),a.exec=function(){return e=!0,null},a[m](""),!e}));if(!h||!f||"replace"===t&&(!l||!u||d)||"split"===t&&!p){var b=/./[m],v=a(m,""[t],(function(t,e,a,s,i){return e.exec===r?h&&!i?{done:!0,value:b.call(e,a,s)}:{done:!0,value:t.call(a,e,s)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),g=v[0],C=v[1];s(String.prototype,t,g),s(RegExp.prototype,m,2==e?function(t,e){return C.call(t,this,e)}:function(t){return C.call(t,this)})}_&&c(RegExp.prototype[m],"sham",!0)}},f820:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"about"},[a("Hello"),a("Header"),a("Pathcomp"),a("div",{staticClass:"about__wrapper about__flex"},[a("div",{staticClass:"about__promo"},[a("Promo",{attrs:{book:t.promo}})],1),a("div",{staticClass:"about__info"},[a("h1",{staticClass:"about__title"},[t._v("Ivan Shavliuga (Ivanov)")]),a("h2",{staticClass:"about__prof"},[t._v("junior vue.js developer")]),t._m(0),a("Iconlist")],1)]),a("div",{staticClass:"about__wrapper about__flex"},[t._m(1),t._m(2),a("Bookbanner")],1),a("Footer")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"about__desc"},[t._v("Created this page. Used by: "),a("ul",{staticClass:"about__skills"},[a("li",{staticClass:"about__skills-item"},[t._v("HTML5")]),a("li",{staticClass:"about__skills-item"},[t._v("CSS3")]),a("li",{staticClass:"about__skills-item"},[t._v("Vue.js")]),a("li",{staticClass:"about__skills-item"},[t._v("Vuex")]),a("li",{staticClass:"about__skills-item"},[t._v("Vue-router")]),a("li",{staticClass:"about__skills-item"},[t._v("Less")]),a("li",{staticClass:"about__skills-item"},[t._v("Webpack")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"about__links"},[a("h3",{staticClass:"about__links-title"},[t._v("Literature")]),a("ul",{staticClass:"about__links-list"},[a("li",{staticClass:"about__links-item"},[a("a",{staticClass:"about__links-href",attrs:{href:"https://author.today/u/ischavliuga/works"}},[t._v(" Author Today ")])]),a("li",{staticClass:"about__links-item"},[a("a",{staticClass:"about__links-href",attrs:{href:"https://samlib.ru/i/iwan_sergeewich_shawljuga/"}},[t._v(" SamLib.ru ")])]),a("li",{staticClass:"about__links-item"},[a("a",{staticClass:"about__links-href",attrs:{href:"https://isschavliuga.ucoz.net"}},[t._v(" Personal web-site ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"about__links"},[a("h3",{staticClass:"about__links-title"},[t._v("Science")]),a("ul",{staticClass:"about__links-list"},[a("li",{staticClass:"about__links-item"},[a("a",{staticClass:"about__links-href",attrs:{href:"https://mendel-info.usite.pro"}},[t._v(" Table of Mendeleev ")])]),a("li",{staticClass:"about__links-item"},[a("a",{staticClass:"about__links-href",attrs:{href:"https://t.me/mendelinfo"}},[t._v(" Telegram channel of science ")])]),a("li",{staticClass:"about__links-item"},[a("a",{staticClass:"about__links-href",attrs:{href:"https://www.t.me/vuejscodesru"}},[t._v(" Telegram channel of framework vue.js ")])])])])}],n=a("0418"),r=a("fdab"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"icons"},[a("li",{staticClass:"icons__item"},[a("a",{staticClass:"icons__link",attrs:{href:"https://www.codepen.io/ivanshavliuga"}},[a("ib",{staticClass:"icons__image",attrs:{"icon-name":"codepen",width:"64",height:"64","icon-color":"#1223cb"}},[a("codepen")],1)],1)]),a("li",{staticClass:"icons__item"},[a("a",{staticClass:"icons__link",attrs:{href:"https://t.me/ivanshavliuga"}},[a("ib",{staticClass:"icons__image",attrs:{"icon-name":"telegram",width:"64",height:"64","icon-color":"#1223cb"}},[a("telegram")],1)],1)]),a("li",{staticClass:"icons__item"},[a("a",{staticClass:"icons__link",attrs:{href:"https://www.github.com/IvanShavliuga"}},[a("ib",{staticClass:"icons__image",attrs:{"icon-name":"github",width:"64",height:"64","icon-color":"#1223cb"}},[a("github")],1)],1)]),a("li",{staticClass:"icons__item"},[a("a",{staticClass:"icons__link",attrs:{href:"https://www.linkedin.com/in/%D0%B8%D0%B2%D0%B0%D0%BD-%D0%B8%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2-%D1%88%D0%B0%D0%B2%D0%BB%D1%8E%D0%B3%D0%B0-778540153/"}},[a("ib",{staticClass:"icons__image",attrs:{"icon-name":"linkedin",width:"64",height:"64","icon-color":"#1223cb"}},[a("linkedin")],1)],1)]),a("li",{staticClass:"icons__item"},[a("a",{staticClass:"icons__link",attrs:{href:"https://www.vk.com/isshavluga"}},[a("ib",{staticClass:"icons__image",attrs:{"icon-name":"vk",width:"64",height:"64","icon-color":"#1223cb"}},[a("vk")],1)],1)]),a("li",{staticClass:"icons__item"},[a("a",{staticClass:"icons__link",attrs:{href:"https://ivanshavliuga.github.io"}},[a("ib",{staticClass:"icons__image",attrs:{"icon-name":"portfolio",width:"64",height:"64","icon-color":"#1223cb"}},[a("portfolio")],1)],1)])])},o=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,viewBox:"0 0 "+t.width+" "+t.height,"aria-labelledby":t.iconName,role:"presentation"}},[a("title",{attrs:{id:t.iconName,lang:"en"}},[t._v(t._s(t.iconName)+" icon")]),a("g",{attrs:{fill:t.iconColor}},[t._t("default")],2)])},u=[],_=(a("a9e3"),{props:{iconName:{type:String,default:"box"},width:{type:[Number,String],default:18},height:{type:[Number,String],default:18},iconColor:{type:String,default:"currentColor"}}}),d=_,p=(a("0f78"),a("2877")),m=Object(p["a"])(d,l,u,!1,null,"1f525fd0",null),h=m.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("path",{attrs:{d:"M34.1,0.8c-1.7-1.1-4-1.1-5.7,0.1L3,18.6c-1.4,0.9-2.2,2.5-2.2,4.1v19.1c0,1.7,0.9,3.3,2.3,4.2L29,63.2\r\nc1.7,1.1,3.9,1.1,5.6,0l26.4-17.4c1.4-0.9,2.3-2.5,2.3-4.2V22.8c0-1.7-0.9-3.3-2.3-4.2L34.1,0.8z M53.8,21.5l-9.7,6.5l-9.2-6.6V8.3\r\nL53.8,21.5z M28.3,8.4v12.8l-9.4,6.5l-9.3-6.3L28.3,8.4z M7,27.7l6,4.1L7,36V27.7z M28.4,55L9.6,42.4l9.4-6.6l9.4,6.3V55z\r\nM24.8,31.7l6.1-4.3l7.1,4.7l-6.3,4.2L24.8,31.7z M35.1,55V42.1l9-6l9.7,6.4L35.1,55z M56.5,36.2L50.1,32l6.4-4.3V36.2z"}})},b=[],v={},g=Object(p["a"])(v,f,b,!1,null,null,null),C=g.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("path",{staticClass:"shp0",attrs:{id:"telegram-1","fill-rule":"evenodd",d:"M49.02 52.74C43.62 48.9 34.1 41.91 34.1 41.91C34.1 41.91 29.08 46.65 25.84 49.71C25.27 50.25 24.45 50.46 23.68 50.26C22.91 50.06 22.32 49.47 22.07 48.72C20.05 42.78 16.18 31.08 16.18 31.08C16.18 31.08 7.89 28.46 1.58 26.57C0.67 26.29 0.03 25.47 0 24.53C-0.03 23.59 0.55 22.73 1.45 22.4C15.52 17.19 49.95 4.27 61.14 0.13C61.86 -0.14 62.67 0.01 63.26 0.51C63.85 1.01 64.11 1.78 63.95 2.53C61.85 12.43 56.22 40 53.91 50.89C53.69 51.91 52.96 52.75 51.98 53.13C50.99 53.5 49.88 53.35 49.02 52.74ZM19.66 29.61L24.14 44.37L25.14 35.02C25.14 35.02 42.43 19.42 52.3 10.53C52.58 10.26 52.62 9.83 52.38 9.52C52.15 9.21 51.71 9.14 51.38 9.35C39.95 16.65 19.66 29.61 19.66 29.61Z"}})},k=[],y={},w=Object(p["a"])(y,x,k,!1,null,null,null),E=w.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("g",[a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M32,0.8c-17.7,0-32,14.3-32,32c0,14.1,9.2,26.1,21.9,30.4\r\nc1.6,0.3,2.2-0.7,2.2-1.5c0-0.8,0-3.3,0-6c-8.9,1.9-10.8-3.8-10.8-3.8c-1.5-3.7-3.6-4.7-3.6-4.7c-2.9-2,0.2-1.9,0.2-1.9\r\nc3.2,0.2,4.9,3.3,4.9,3.3c2.9,4.9,7.5,3.5,9.3,2.7c0.3-2.1,1.1-3.5,2-4.3c-7.1-0.8-14.6-3.6-14.6-15.8c0-3.5,1.2-6.3,3.3-8.6\r\nc-0.3-0.8-1.4-4.1,0.3-8.5c0,0,2.7-0.9,8.8,3.3c2.6-0.7,5.3-1.1,8-1.1c2.7,0,5.5,0.4,8,1.1c6.1-4.1,8.8-3.3,8.8-3.3\r\nc1.7,4.4,0.6,7.7,0.3,8.5c2.1,2.2,3.3,5.1,3.3,8.6c0,12.3-7.5,15-14.6,15.8c1.1,1,2.2,2.9,2.2,5.9c0,4.3,0,7.7,0,8.8\r\nc0,0.9,0.6,1.8,2.2,1.5C54.8,58.9,64,46.9,64,32.8C64,15.1,49.7,0.8,32,0.8z"}}),a("path",{attrs:{d:"M12.1,46.7c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-0.4-0.3-0.3-0.5c0.1-0.2,0.3-0.2,0.6-0.1C12.1,46.4,12.2,46.6,12.1,46.7\r\nL12.1,46.7z M11.7,46.4"}}),a("path",{attrs:{d:"M13.4,48.2c-0.2,0.1-0.5,0.1-0.7-0.1c-0.2-0.2-0.2-0.5-0.1-0.7c0.2-0.1,0.4-0.1,0.7,0.1C13.5,47.7,13.6,48,13.4,48.2\r\nL13.4,48.2z M13.1,47.9"}}),a("path",{attrs:{d:"M14.7,50c-0.2,0.1-0.5,0-0.7-0.3c-0.2-0.3-0.2-0.6,0-0.8c0.2-0.1,0.5,0,0.7,0.3C14.9,49.5,14.9,49.9,14.7,50L14.7,50z\r\nM14.7,50"}}),a("path",{attrs:{d:"M16.4,51.8c-0.2,0.2-0.5,0.1-0.8-0.1c-0.3-0.3-0.4-0.6-0.2-0.8c0.2-0.2,0.6-0.1,0.8,0.1C16.5,51.2,16.6,51.6,16.4,51.8\r\nL16.4,51.8z M16.4,51.8"}}),a("path",{attrs:{d:"M18.8,52.8c-0.1,0.3-0.4,0.4-0.8,0.3c-0.4-0.1-0.6-0.4-0.5-0.7c0.1-0.3,0.4-0.4,0.8-0.3C18.6,52.3,18.9,52.6,18.8,52.8\r\nL18.8,52.8z M18.8,52.8"}}),a("path",{attrs:{d:"M21.4,53c0,0.3-0.3,0.5-0.7,0.5c-0.4,0-0.7-0.2-0.7-0.5c0-0.3,0.3-0.5,0.7-0.5C21.1,52.6,21.4,52.8,21.4,53L21.4,53z\r\nM21.4,53"}}),a("path",{attrs:{d:"M23.8,52.6c0,0.3-0.2,0.5-0.6,0.6c-0.4,0.1-0.7-0.1-0.8-0.3c0-0.3,0.2-0.5,0.6-0.6C23.5,52.2,23.8,52.4,23.8,52.6\r\nL23.8,52.6z M23.8,52.6"}})])},M=[],A={},S=Object(p["a"])(A,I,M,!1,null,null,null),T=S.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.1,61.2h13.1V21.9H1.1V61.2z M47.7,20.6c-5.7,0-9.1,2.1-12.7,6.7v-5.4H22v39.3\r\nh13.1V39.9c0-4.5,2.3-8.9,7.5-8.9c5.2,0,8.3,4.4,8.3,8.8v21.4H64V38.9C64,23.4,53.5,20.6,47.7,20.6z M7.7,2.8C3.4,2.8,0,5.9,0,9.7\r\nc0,3.8,3.4,6.9,7.7,6.9c4.3,0,7.7-3.1,7.7-6.9C15.4,5.9,12,2.8,7.7,2.8z"}})},L=[],D={},R=Object(p["a"])(D,N,L,!1,null,null,null),$=R.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M31.3,50.1h3.8c0,0,1.1,0,1.7-0.8c0.5-0.6,0.5-1.7,0.5-1.7s-0.1-5.1,2.3-5.9\r\nc2.3-0.7,5.3,5,8.6,7.2c2.1,1.4,4.3,1.2,4.3,1.2s7.9,0,8.5,0c0.6,0,4.3-0.5,2.4-3.9c-0.2-0.3-1.2-2.6-6.4-7.4\r\nc-5.4-5-4.6-4.2,1.8-12.8c3.9-5.2,5.4-8.4,5-9.8c-0.3-1.1-3.4-0.9-3.4-0.9h-9.6c0,0-0.7-0.1-1.2,0.2c-0.5,0.3-0.8,1-0.8,1\r\ns-1.5,4.1-3.6,7.5c-4.3,7.3-6,7.7-6.7,7.2c-1.6-1.1-1.2-4.2-1.2-6.5c0-7.1,1.1-10-2.1-10.8c-1-0.3-1.8-0.4-4.5-0.4\r\nc-3.4,0-6.3,0-8,0.8c-1.1,0.5-1.9,1.7-1.4,1.8c0.6,0.1,2.1,0.4,2.8,1.4c1,1.3,1,4.4,1,4.4s0.6,8.3-1.3,9.3c-1.3,0.7-3.1-0.7-6.9-7.3\r\nc-2-3.4-3.4-7.1-3.4-7.1s-0.3-0.7-0.8-1.1c-0.8-0.6-1.5-0.6-1.5-0.6H2.1c0,0-1.4-0.1-1.9,0.7c-0.4,0.7,0,1.6,0,1.6\r\ns7.2,16.8,15.3,25.2C22.9,50.7,31.3,50.1,31.3,50.1L31.3,50.1z"}})},B=[],O={},z=Object(p["a"])(O,j,B,!1,null,null,null),P=z.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("g",[a("rect",{attrs:{x:"15",y:"2",width:"45",height:"8"}}),a("rect",{attrs:{x:"15",y:"2",width:"4",height:"18"}}),a("rect",{attrs:{x:"54",y:"2",width:"4",height:"18"}}),a("rect",{attrs:{x:"10",y:"18",width:"60",height:"54",rx:"7",ry:"7"}}),a("line",{attrs:{x1:"20",y1:"18",x2:"20",y2:"60",stroke:"#fff","stroke-width":"2"}}),a("line",{attrs:{x1:"55",y1:"18",x2:"55",y2:"60",stroke:"#fff","stroke-width":"2"}}),a("circle",{attrs:{cx:"37",cy:"34",r:"7",fill:"#fff"}}),a("rect",{attrs:{x:"25",y:"45",width:"24",height:"8",fill:"#fff"}})])},W=[],V={},F=Object(p["a"])(V,H,W,!1,null,null,null),U=F.exports,Y={components:{ib:h,codepen:C,vk:P,github:T,telegram:E,linkedin:$,portfolio:U}},G=Y,J=(a("fe9e"),Object(p["a"])(G,c,o,!1,null,"5da71af4",null)),K=J.exports,X=a("11d7"),Z=a("fd2d"),q=a("fea6"),Q=a("0d17"),tt={name:"Home",components:{Header:n["default"],Hello:r["a"],Iconlist:K,Promo:X["a"],Bookbanner:q["a"],Footer:Z["a"],Pathcomp:Q["a"]},data:function(){return{promo:{img:"/img/telepat.jpg",title:"Телепатия. Проклятие языка",author:"Иван Шавлюга",price:10,sale:45}}}},et=tt,at=(a("8bb5"),Object(p["a"])(et,s,i,!1,null,"54ab9304",null));e["default"]=at.exports},fe9e:function(t,e,a){"use strict";var s=a("a0e3"),i=a.n(s);i.a},fea6:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"bookbanner"},[a("h3",{staticClass:"bookbanner__header"},[t._v("You may also like")]),t._l(t.books,(function(e,s){return a("div",{key:s,staticClass:"bookbanner__block"},[a("img",{staticClass:"bookbanner__block-image",attrs:{src:e.img,alt:e.title+" - "+e.author}}),a("div",{staticClass:"bookbanner__block-text"},[a("h4",{staticClass:"bookbanner__block-title"},[t._v(t._s(e.title))]),a("p",{staticClass:"bookbanner__block-price"},[t._v("$"+t._s(e.price))]),a("button",{staticClass:"bookbanner__block-button"},[t._v("Read more")])])])}))],2)},i=[],n={data:function(){return{books:[{id:0,img:"/img/book_5.jpg",title:"The Hare With Amber",author:"Edmund De Waal",price:50,sale:30},{id:1,img:"/img/book_5.jpg",title:"The Hare With Amber",author:"Edmund De Waal",price:50,sale:30},{id:2,img:"/img/book_5.jpg",title:"The Hare With Amber",author:"Edmund De Waal",price:50,sale:30},{id:3,img:"/img/book_5.jpg",title:"The Hare With Amber",author:"Edmund De Waal",price:50,sale:30},{id:4,img:"/img/book_5.jpg",title:"The Hare With Amber",author:"Edmund De Waal",price:50,sale:30},{id:5,img:"/img/book_5.jpg",title:"The Hare With Amber",author:"Edmund De Waal",price:50,sale:30},{id:6,img:"/img/book_5.jpg",title:"The Hare With Amber",author:"Edmund De Waal",price:50,sale:30}]}}},r=n,c=(a("a9c1"),a("2877")),o=Object(c["a"])(r,s,i,!1,null,"1b24d2fe",null);e["a"]=o.exports}}]);
//# sourceMappingURL=about.53c48fb3.js.map