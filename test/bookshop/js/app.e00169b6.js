(function(t){function a(a){for(var e,r,l=a[0],c=a[1],o=a[2],_=0,d=[];_<l.length;_++)r=l[_],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);u&&u(a);while(d.length)d.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,a=0;a<n.length;a++){for(var s=n[a],e=!0,r=1;r<s.length;r++){var c=s[r];0!==i[c]&&(e=!1)}e&&(n.splice(a--,1),t=l(l.s=s[0]))}return t}var e={},i={app:0},n=[];function r(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9f8a4be4"}[t]+".js"}function l(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.e=function(t){var a=[],s=i[t];if(0!==s)if(s)a.push(s[2]);else{var e=new Promise((function(a,e){s=i[t]=[a,e]}));a.push(s[2]=e);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=r(t);var o=new Error;n=function(a){c.onerror=c.onload=null,clearTimeout(_);var s=i[t];if(0!==s){if(s){var e=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+e+": "+n+")",o.name="ChunkLoadError",o.type=e,o.request=n,s[1](o)}i[t]=void 0}};var _=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(a)},l.m=t,l.c=e,l.d=function(t,a,s){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)l.d(s,e,function(a){return t[a]}.bind(null,e));return s},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=a,c=c.slice();for(var _=0;_<c.length;_++)a(c[_]);var u=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"0395":function(t,a,s){"use strict";var e=s("7c5d"),i=s.n(e);i.a},"0418":function(t,a,s){"use strict";var e=s("9846"),i=s("ad21"),n=(s("0395"),s("2877")),r=Object(n["a"])(i["default"],e["a"],e["b"],!1,null,"754a0bc1",null);a["default"]=r.exports},"0ca6":function(t,a,s){},"14f7":function(t,a,s){"use strict";var e=s("eed9"),i=s.n(e);i.a},2313:function(t,a,s){"use strict";var e=s("5667"),i=s.n(e);i.a},2395:function(t,a,s){},"34b6":function(t,a,s){"use strict";var e=s("0ca6"),i=s.n(e);i.a},5667:function(t,a,s){},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],r=(s("7c55"),s("2877")),l={},c=Object(r["a"])(l,i,n,!1,null,null,null),o=c.exports,_=(s("d3b7"),s("8c4f")),u=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home"},[s("Hello"),s("Header"),s("div",{staticClass:"home__wrapper home__flex"},[s("Banner"),s("Promo")],1),s("div",{staticClass:"home__wrapper"},[s("Catlist")],1)],1)},d=[],h=s("0418"),v=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"hello"},[s("span",{staticClass:"hello__text"},[t._v("This is portfolio of "),s("a",{staticClass:"hello__text-link",attrs:{href:"https://ivanshavliuga.github.io",rel:"noopener",target:"__blank"}},[t._v(" Ivan Shavliuga (Ivanov) junior vue.js developer ")])])])}],f={name:"Hello"},m=f,C=(s("2313"),Object(r["a"])(m,v,p,!1,null,"e64c3064",null)),b=C.exports,k=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("aside",{staticClass:"aside"},[s("h2",{staticClass:"aside__header"},[t._v("Categories")]),s("nav",{staticClass:"aside__nav"},[s("ul",[s("li",{staticClass:"aside__nav-item itemactive"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" All")])]),s("li",{staticClass:"aside__nav-item"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Fiction & Literature")])]),s("ul",{staticClass:"aside__nav-list"},[s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Children")])]),s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Science")])]),s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Fantasy")])]),s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Mystery")])]),s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Romance")])]),s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Horror")])]),s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Poetry")])]),s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Literature")])]),s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Crime")])])]),s("li",{staticClass:"aside__nav-item"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Non - Fiction")])]),s("ul",{staticClass:"aside__nav-list"},[s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Comic")])]),s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Cook")])]),s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Psychology")])]),s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Medical")])]),s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Art")])]),s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Photography")])]),s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Law")])]),s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" History")])]),s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Business")])]),s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Computers")])])]),s("li",{staticClass:"aside__nav-item"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Other")])]),s("ul",{staticClass:"aside__nav-list"},[s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Baby")])]),s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Sex")])]),s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Travel")])]),s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Science")])]),s("li",{staticClass:"aside__nav-cat"},[s("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Sport`s")])])])])])])}],y={name:"Hello"},M=y,T=(s("a01c"),Object(r["a"])(M,k,g,!1,null,"027d8e10",null)),w=T.exports,A=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"banner"},[s("div",{staticClass:"banner__item"},[s("img",{staticClass:"banner__item-background",attrs:{src:t.selbg}}),s("img",{staticClass:"banner__item-bookmax",attrs:{src:t.selbook}}),s("div",{staticClass:"banner__item-bookmini"},[s("img",{staticClass:"banner__item-photomini",attrs:{src:t.selbook}}),s("img",{staticClass:"banner__item-disk",attrs:{src:"/img/disk.png"}})]),s("div",{staticClass:"banner__item-text",style:t.seltitle.length>13?"top: 120px":""},[s("h1",{staticClass:"banner__item-title",style:t.seltitle.length>13?"font-size: 33px":""},[t._v(t._s(t.seltitle))]),s("p",{staticClass:"banner__item-subtitle"},[t._v(t._s(t.selsubtitle))]),s("p",{staticClass:"banner__item-author"},[t._v("By "+t._s(t.selauthor))])]),s("button",{staticClass:"banner__item-arrow left",on:{click:t.prev}}),s("button",{staticClass:"banner__item-arrow right",on:{click:t.next}})])])},L=[],x={data:function(){return{selid:0,selbg:"/img/banner1.png",selbook:"/img/book_1.png",selauthor:"Lee Child",seltitle:"A Wanted men",selsubtitle:"(Jack Reacher #17)",list:[{bg:"/img/banner_1.png",book:"/img/book_1.png",author:"Lee Child",title:"A Wanted men",subtitle:"(Jack Reacher #17)"},{bg:"/img/banner_2.png",book:"/img/book_2.png",author:"Havinder Singh",title:"Can Love You Happy Twice",subtitle:"(The Hare Amber Eyes)"},{bg:"/img/banner_3.png",book:"/img/book_3.png",author:"Girichi Kundli",title:"Marathon Baba",subtitle:"(The Hare Amber Eyes)"}]}},methods:{next:function(){this.selid<2?this.selid++:this.selid=0,this.selbg=this.list[this.selid].bg,this.selbook=this.list[this.selid].book,this.selauthor=this.list[this.selid].author,this.seltitle=this.list[this.selid].title,this.selsubtitle=this.list[this.selid].subtitle},prev:function(){this.selid>0?this.selid--:this.selid=2,this.selbg=this.list[this.selid].bg,this.selbook=this.list[this.selid].book,this.selauthor=this.list[this.selid].author,this.seltitle=this.list[this.selid].title,this.selsubtitle=this.list[this.selid].subtitle},autoplay:function(){var t=this;setTimeout((function(){t.next()}),4e3)}},created:function(){this.selid=0,this.selbg="/img/banner_1.png",this.selbook="/img/book_1.png"},mounted:function(){this.autoplay()},updated:function(){this.autoplay()}},D=x,I=(s("14f7"),Object(r["a"])(D,A,L,!1,null,"5c867e33",null)),j=I.exports,O=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"promo"},[s("div",{staticClass:"promo__header"},[s("h2",{staticClass:"promo__header-title"},[t._v("Deal of the Month")]),s("h3",{staticClass:"promo__header-subtitle"},[t._v(t._s(t.seltitle))])]),s("div",{staticClass:"promo__image"},[s("img",{staticClass:"promo__image-book",attrs:{src:t.selimg}}),s("img",{staticClass:"promo__image-panel",attrs:{src:"/img/panel.png"}})]),s("div",{staticClass:"promo__desc"},[s("p",{staticClass:"promo__desc-sale"},[t._v("Save "+t._s(t.selsale)+" Today")]),s("p",{staticClass:"promo__desc-price"},[t._v("$"+t._s(t.selprice))]),s("button",{staticClass:"promo__desc-button"},[t._v("Buy now")])])])},E=[],H={data:function(){return{selauthor:"Rick Smolan, Jennifer Erwitt",seltitle:"The Human Face of Big Data",selsale:45,selprice:27.51,selimg:"/img/book_4.png"}}},S=H,P=(s("34b6"),Object(r["a"])(S,O,E,!1,null,null,null)),$=P.exports,B={name:"Home",components:{Header:h["default"],Hello:b,Catlist:w,Banner:j,Promo:$}},F=B,J=(s("f783"),Object(r["a"])(F,u,d,!1,null,"a34eca64",null)),R=J.exports;e["a"].use(_["a"]);var W=[{path:"/",name:"Home",component:R},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],K=new _["a"]({mode:"history",base:"/",routes:W}),N=K,Y=s("2f62");e["a"].use(Y["a"]);var q=new Y["a"].Store({state:{user:{Name:"Alex",Coutry:"UK",Money:45,Purchase:[1],MyLike:[1]},books:[{Id:1,Author:"Братья Стругацкие",Title:"Обитаемый остров",Money:10,Likes:25,Discription:"Главный герой попадает на планету и совершает революцию."},{Id:2,Author:"Михаил Лермонтов",Title:"Герой нашего времени",Money:15,Likes:13,Discription:"Главный герой рушит все вокруг себя и погибает сам"},{Id:3,Author:"Федор Достовевский",Title:"Преступление и наказание",Money:13,Likes:65,Discription:"Герой из принципа идет на убийство"},{Id:4,Author:"Андрей Цифровой",Title:"Алгоритм как он есть",Money:10,Likes:25,Discription:"Основый программирования -- алгоритмы"},{Id:5,Author:"Виктор Коневский",Title:"За доброй надеждой",Money:10,Likes:25,Discription:"Роман странствие"},{Id:6,Author:"Михаил Жванецкий",Title:"Избранное",Money:15,Likes:13,Discription:"Самые лучшие шутки самого известного сатирика"},{Id:7,Author:"Алексей Толстой",Title:"Гиперболоид инженера Гарина",Money:32,Likes:65,Discription:"Роман о попытке осчастливить человечество"},{Id:8,Author:"Алексей Толстой",Title:"Петр Первый",Money:10,Likes:25,Discription:"О жизни императора России Петра Первого"},{Id:9,Author:"Лев Толстой",Title:"Война и мир",Money:9,Likes:54,Discription:"События 1812 года"},{Id:10,Author:"Александр Пушкин",Title:"Стихи и поэмы",Money:32,Likes:13,Discription:"Избранные стихи и поэмы великого поэта"},{Id:11,Author:"Станислав Лем",Title:"Солярис",Money:17,Likes:65,Discription:"Роман о разумном океане"},{Id:12,Author:"Михаил Лермонтов",Title:"Стихи",Money:16,Likes:44,Discription:"Избранные стихи поэта"},{Id:13,Author:"Артур Конан Дойл",Title:"Рассказы о Шерлоке Холмса",Money:32,Likes:65,Discription:"Рассказы о великом сыщике"},{Id:14,Author:"Юлиан Семенов",Title:"Семнадцать мгновений весны",Money:89,Likes:25,Discription:"Как наша развездка боролось с фашизмом"},{Id:15,Author:"Евгений Лукин",Title:"С нами бот",Money:13,Likes:67,Discription:"Современный роман о боте "},{Id:16,Author:"Михаил Задорнов",Title:"Избранное",Money:12,Likes:13,Discription:"Самые лучшие шутки самого известного сатирика"},{Id:17,Author:"Владмимир Даль",Title:"Словарь русского языка",Money:7,Likes:10,Discription:"Словарь русского языка"},{Id:18,Author:"Андрей Цифровой",Title:"Компьютер как он есть",Money:7,Likes:12,Discription:"Устройство персонального компьютера для чайников"},{Id:19,Author:"Андрей Цифровой",Title:"Сервер как он есть",Money:7,Likes:21,Discription:"Принципы работы сервера"},{Id:20,Author:"Александр Пушкин",Title:"Капитанская дочка",Money:7,Likes:23,Discription:"Роман о Пугачевском бунте"}]},mutations:{},actions:{},modules:{}});e["a"].config.productionTip=!0,new e["a"]({router:N,store:q,render:function(t){return t(o)}}).$mount("#app")},"7c55":function(t,a,s){"use strict";var e=s("2395"),i=s.n(e);i.a},"7c5d":function(t,a,s){},"89c3":function(t,a,s){},9846:function(t,a,s){"use strict";s.d(a,"a",(function(){return e})),s.d(a,"b",(function(){return i}));var e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",{staticClass:"header"},[s("div",{staticClass:"header__topline"},[s("div",{staticClass:"header__wrapper"},[s("div",{staticClass:"header__userpanel"},[s("ul",{staticClass:"header__userpanel-list"},[s("li",{staticClass:"header__userpanel-item"},[s("a",{staticClass:"header__userpanel-link",attrs:{href:"#"}},[t._v("Sign in")])]),s("li",{staticClass:"header__userpanel-item"},[s("a",{staticClass:"header__userpanel-link",attrs:{href:"#"}},[t._v("My account")])]),s("li",{staticClass:"header__userpanel-item"},[s("a",{staticClass:"header__userpanel-link",attrs:{href:"#"}},[t._v("Order status")])]),s("li",{staticClass:"header__userpanel-item"},[s("a",{staticClass:"header__userpanel-link",attrs:{href:"#"}},[t._v("Help")])])])])])]),s("div",{staticClass:"header__baseblock"},[s("div",{staticClass:"header__wrapper"},[s("div",{staticClass:"header__searchpanel"},[s("div",{staticClass:"header__searchpanel-logo"}),s("form",{staticClass:"header__searchpanel-form"},[s("input",{staticClass:"header__searchpanel-input",attrs:{type:"text"}}),s("button",{staticClass:"header__searchpanel-button"},[s("i",{staticClass:"header__searchpanel-icon"}),t._v(" Search ")])]),s("div",{staticClass:"header__cart"},[s("i",{staticClass:"header__cart-icon"}),s("span",{staticClass:"header__cart-title"},[t._v(" Your cart "),s("button",{staticClass:"header__cart-counter"},[t._v(" (2 items) ")])]),s("span",{staticClass:"header__cart-total"},[t._v(" $125.0 ")]),s("button",{staticClass:"header__cart-check"},[t._v(" Checkout ")])]),s("div",{staticClass:"header__wishlist"},[s("i",{staticClass:"header__wishlist-icon"}),s("span",{staticClass:"header__wishlist-counter"},[t._v("20")]),s("span",{staticClass:"header__wishlist-title"},[t._v("Wish list")])])])])]),s("nav",{staticClass:"header__menu"},[s("div",{staticClass:"header__wrapper"},[s("ul",{staticClass:"header__menu-list"},[s("li",{staticClass:"header__menu-item itemactive"},[s("a",{staticClass:"header__menu-link",attrs:{href:"cm"}},[t._v("Computers")])]),s("li",{staticClass:"header__menu-item"},[s("a",{staticClass:"header__menu-link",attrs:{href:"c"}},[t._v("Cooking")])]),s("li",{staticClass:"header__menu-item"},[s("a",{staticClass:"header__menu-link",attrs:{href:"e"}},[t._v("Education")])]),s("li",{staticClass:"header__menu-item"},[s("a",{staticClass:"header__menu-link",attrs:{href:"f"}},[t._v("Fiction")])]),s("li",{staticClass:"header__menu-item"},[s("a",{staticClass:"header__menu-link",attrs:{href:"h"}},[t._v("Health")])]),s("li",{staticClass:"header__menu-item"},[s("a",{staticClass:"header__menu-link",attrs:{href:"mt"}},[t._v("Mathematics")])]),s("li",{staticClass:"header__menu-item"},[s("a",{staticClass:"header__menu-link",attrs:{href:"md"}},[t._v("Medical")])]),s("li",{staticClass:"header__menu-item"},[s("a",{staticClass:"header__menu-link",attrs:{href:"r"}},[t._v("Reference")])]),s("li",{staticClass:"header__menu-item itemactive"},[s("a",{staticClass:"header__menu-link",attrs:{href:"s"}},[t._v("Science")])])])])])])}]},a01c:function(t,a,s){"use strict";var e=s("89c3"),i=s.n(e);i.a},ad21:function(t,a,s){"use strict";var e=s("e504"),i=s.n(e);a["default"]=i.a},dc05:function(t,a,s){},e504:function(t,a){},eed9:function(t,a,s){},f783:function(t,a,s){"use strict";var e=s("dc05"),i=s.n(e);i.a}});
//# sourceMappingURL=app.e00169b6.js.map