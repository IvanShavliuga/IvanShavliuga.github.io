(function(t){function s(s){for(var e,i,n=s[0],o=s[1],c=s[2],_=0,u=[];_<n.length;_++)i=n[_],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&u.push(l[i][0]),l[i]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);f&&f(s);while(u.length)u.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,s=0;s<r.length;s++){for(var a=r[s],e=!0,i=1;i<a.length;i++){var n=a[i];0!==l[n]&&(e=!1)}e&&(r.splice(s--,1),t=o(o.s=a[0]))}return t}var e={},i={app:0},l={app:0},r=[];function n(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"53c48fb3"}[t]+".js"}function o(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var s=[],a={about:1};i[t]?s.push(i[t]):0!==i[t]&&a[t]&&s.push(i[t]=new Promise((function(s,a){for(var e="css/"+({about:"about"}[t]||t)+"."+{about:"b169fa2b"}[t]+".css",l=o.p+e,r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var c=r[n],_=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(_===e||_===l))return s()}var u=document.getElementsByTagName("style");for(n=0;n<u.length;n++){c=u[n],_=c.getAttribute("data-href");if(_===e||_===l)return s()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=s,f.onerror=function(s){var e=s&&s.target&&s.target.src||l,r=new Error("Loading CSS chunk "+t+" failed.\n("+e+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=e,delete i[t],f.parentNode.removeChild(f),a(r)},f.href=l;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){i[t]=0})));var e=l[t];if(0!==e)if(e)s.push(e[2]);else{var r=new Promise((function(s,a){e=l[t]=[s,a]}));s.push(e[2]=r);var c,_=document.createElement("script");_.charset="utf-8",_.timeout=120,o.nc&&_.setAttribute("nonce",o.nc),_.src=n(t);var u=new Error;c=function(s){_.onerror=_.onload=null,clearTimeout(f);var a=l[t];if(0!==a){if(a){var e=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.src;u.message="Loading chunk "+t+" failed.\n("+e+": "+i+")",u.name="ChunkLoadError",u.type=e,u.request=i,a[1](u)}l[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:_})}),12e4);_.onerror=_.onload=c,document.head.appendChild(_)}return Promise.all(s)},o.m=t,o.c=e,o.d=function(t,s,a){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)o.d(a,e,function(s){return t[s]}.bind(null,e));return a},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],_=c.push.bind(c);c.push=s,c=c.slice();for(var u=0;u<c.length;u++)s(c[u]);var f=_;r.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"012d":function(t,s,a){},"0395":function(t,s,a){"use strict";var e=a("7c5d"),i=a.n(e);i.a},"0418":function(t,s,a){"use strict";var e=a("9846"),i=a("ad21"),l=(a("0395"),a("2877")),r=Object(l["a"])(i["default"],e["a"],e["b"],!1,null,"754a0bc1",null);s["default"]=r.exports},"0bc9":function(t,s,a){},"0ca6":function(t,s,a){},"0ca8":function(t,s,a){},"11d7":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"promo"},[a("div",{staticClass:"promo__header"},[a("h2",{staticClass:"promo__header-title"},[t._v("Deal of the Month")]),a("h3",{staticClass:"promo__header-subtitle"},[t._v(t._s(t.book.title))])]),a("div",{staticClass:"promo__image"},[a("img",{staticClass:"promo__image-book",attrs:{src:t.book.img}}),a("img",{staticClass:"promo__image-panel",attrs:{src:"/img/panel.png"}})]),a("div",{staticClass:"promo__desc"},[a("p",{staticClass:"promo__desc-sale"},[t._v("Save "+t._s(t.book.sale)+" Today")]),a("p",{staticClass:"promo__desc-price"},[t._v("$"+t._s(t.book.price))]),a("button",{staticClass:"promo__desc-button"},[t._v("Buy now")])])])},i=[],l={props:{book:{type:Object,required:!0}}},r=l,n=(a("34b6"),a("2877")),o=Object(n["a"])(r,e,i,!1,null,null,null);s["a"]=o.exports},"14b9":function(t,s,a){"use strict";var e=a("85ec"),i=a.n(e);i.a},2313:function(t,s,a){"use strict";var e=a("5667"),i=a.n(e);i.a},2395:function(t,s,a){},2693:function(t,s,a){},"34b6":function(t,s,a){"use strict";var e=a("0ca6"),i=a.n(e);i.a},"423a":function(t,s,a){"use strict";var e=a("0bc9"),i=a.n(e);i.a},5667:function(t,s,a){},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},l=[],r=(a("7c55"),a("2877")),n={},o=Object(r["a"])(n,i,l,!1,null,null,null),c=o.exports,_=(a("d3b7"),a("8c4f")),u=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("main",{staticClass:"home"},[a("Hello"),a("Header"),a("div",{staticClass:"home__wrapper home__flex"},[a("Banner"),a("Promo",{attrs:{book:t.promo}})],1),a("div",{staticClass:"home__wrapper home__flex"},[a("Catlist"),a("div",{staticClass:"home__block"},[a("Tabspanel"),a("Booklist")],1)],1),a("Footer")],1)},f=[],h=a("0418"),d=a("fdab"),v=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("aside",{staticClass:"aside"},[a("h2",{staticClass:"aside__header"},[t._v("Categories")]),a("nav",{staticClass:"aside__nav"},[a("ul",[a("li",{staticClass:"aside__nav-item itemactive"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" All")])]),a("li",{staticClass:"aside__nav-item"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Fiction & Literature")])]),a("ul",{staticClass:"aside__nav-list"},[a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Children")])]),a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Science")])]),a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Fantasy")])]),a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Mystery")])]),a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Romance")])]),a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Horror")])]),a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Poetry")])]),a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Literature")])]),a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Crime")])])]),a("li",{staticClass:"aside__nav-item"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Non - Fiction")])]),a("ul",{staticClass:"aside__nav-list"},[a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Comic")])]),a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Cook")])]),a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Psychology")])]),a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Medical")])]),a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Art")])]),a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Photography")])]),a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Law")])]),a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" History")])]),a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Business")])]),a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Computers")])])]),a("li",{staticClass:"aside__nav-item"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Other")])]),a("ul",{staticClass:"aside__nav-list"},[a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Baby")])]),a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Sex")])]),a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Travel")])]),a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Science")])]),a("li",{staticClass:"aside__nav-cat"},[a("a",{staticClass:"aside__nav-link",attrs:{href:"#cat"}},[t._v(" Sport`s")])])])])])])}],m={name:"Hello"},k=m,p=(a("af20"),Object(r["a"])(k,v,C,!1,null,"5bebe44e",null)),b=p.exports,g=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"banner"},[a("div",{staticClass:"banner__item"},[a("img",{staticClass:"banner__item-background",attrs:{src:t.selbg}}),a("img",{staticClass:"banner__item-bookmax",attrs:{src:t.selbook}}),a("div",{staticClass:"banner__item-bookmini"},[a("img",{staticClass:"banner__item-photomini",attrs:{src:t.selbook}}),a("img",{staticClass:"banner__item-disk",attrs:{src:"/img/disk.png"}})]),a("div",{staticClass:"banner__item-text",style:t.seltitle.length>13?"top: 120px":""},[a("h1",{staticClass:"banner__item-title",style:t.seltitle.length>13?"font-size: 33px":""},[t._v(t._s(t.seltitle))]),a("p",{staticClass:"banner__item-subtitle"},[t._v(t._s(t.selsubtitle))]),a("p",{staticClass:"banner__item-author"},[t._v("By "+t._s(t.selauthor))])]),a("button",{staticClass:"banner__item-arrow left",on:{click:t.prev}}),a("button",{staticClass:"banner__item-arrow right",on:{click:t.next}})])])},y=[],E={data:function(){return{selid:0,selbg:"/img/banner1.jpg",selbook:"/img/book_1.jpg",selauthor:"Lee Child",seltitle:"A Wanted men",selsubtitle:"(Jack Reacher #17)",list:[{bg:"/img/banner_1.jpg",book:"/img/book_1.jpg",author:"Lee Child",title:"A Wanted men",subtitle:"(Jack Reacher #17)"},{bg:"/img/banner_2.jpg",book:"/img/book_2.jpg",author:"Havinder Singh",title:"Can Love You Happy Twice",subtitle:"(The Hare Amber Eyes)"},{bg:"/img/banner_3.jpg",book:"/img/book_3.jpg",author:"Girichi Kundli",title:"Marathon Baba",subtitle:"(The Hare Amber Eyes)"}]}},methods:{next:function(){this.selid<2?this.selid++:this.selid=0,this.selbg=this.list[this.selid].bg,this.selbook=this.list[this.selid].book,this.selauthor=this.list[this.selid].author,this.seltitle=this.list[this.selid].title,this.selsubtitle=this.list[this.selid].subtitle},prev:function(){this.selid>0?this.selid--:this.selid=2,this.selbg=this.list[this.selid].bg,this.selbook=this.list[this.selid].book,this.selauthor=this.list[this.selid].author,this.seltitle=this.list[this.selid].title,this.selsubtitle=this.list[this.selid].subtitle},autoplay:function(){var t=this;setTimeout((function(){t.next()}),4e3)}},created:function(){this.selid=0,this.selbg="/img/banner_1.jpg",this.selbook="/img/book_1.jpg"},mounted:function(){this.autoplay()},updated:function(){this.autoplay()}},j=E,w=(a("6582"),Object(r["a"])(j,g,y,!1,null,"54e8dcf3",null)),S=w.exports,x=a("11d7"),O=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",{staticClass:"tabnav"},[a("ul",{staticClass:"tabnav__list"},[a("li",{staticClass:"tabnav__list-item tabnav__select"},[a("a",{staticClass:"tabnav__list-link"},[t._v("Best Sellers")])]),a("li",{staticClass:"tabnav__list-item"},[a("a",{staticClass:"tabnav__list-link"},[t._v("New Arrivals")])]),a("li",{staticClass:"tabnav__list-item"},[a("a",{staticClass:"tabnav__list-link"},[t._v("Used Books")])]),a("li",{staticClass:"tabnav__list-item"},[a("a",{staticClass:"tabnav__list-link"},[t._v("Special Offers")])]),a("li",{staticClass:"tabnav__list-empty"},[t._v(" text ")])])])}],A=(a("84d6"),{}),P=Object(r["a"])(A,O,T,!1,null,"3f6c22e6",null),B=P.exports,$=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"list"},t._l([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9],(function(t,s){return a("Book",{key:t+s})})),1)},H=[],M=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("article",{staticClass:"book"},[a("img",{staticClass:"book__image",attrs:{src:t.img}}),a("h3",{staticClass:"book__title"},[t._v(t._s(t.title))]),a("p",{staticClass:"book__price"},[t._v("$"+t._s(t.price))]),a("p",{staticClass:"book__sale"},[t._v(t._s(t.sale)+"%")])])},L=[],F={data:function(){return{img:"/img/telepat.jpg",title:"Телепатия. Проклятие языка",author:"Иван Шавлюга",price:10,sale:45}}},N=F,R=(a("79b4"),Object(r["a"])(N,M,L,!1,null,"6a865d6b",null)),D=R.exports,G={components:{Book:D}},I=G,J=(a("423a"),Object(r["a"])(I,$,H,!1,null,null,null)),q=J.exports,K=a("fd2d"),U={name:"Home",components:{Header:h["default"],Hello:d["a"],Catlist:b,Banner:S,Promo:x["a"],Tabspanel:B,Booklist:q,Footer:K["a"]},data:function(){return{promo:{author:"Rick Smolan, Jennifer Erwitt",title:"The Human Face of Big Data",sale:45,price:27.51,img:"/img/book_4.jpg"}}}},W=U,Y=(a("602f"),Object(r["a"])(W,u,f,!1,null,"40f0d1fc",null)),z=Y.exports;e["a"].use(_["a"]);var Q=[{path:"/",name:"Home",component:z},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/product",name:"Product",component:function(){return a.e("about").then(a.bind(null,"d2f1"))}}],V=new _["a"]({mode:"history",base:"/",routes:Q}),X=V,Z=a("2f62");e["a"].use(Z["a"]);var tt=new Z["a"].Store({state:{user:{Name:"Alex",Coutry:"UK",price:45,Purchase:[1],MyLike:[1]},books:[{id:1,author:"Братья Стругацкие",title:"Обитаемый остров",price:10,likes:25,desc:"Главный герой попадает на планету и совершает революцию."},{id:2,author:"Михаил Лермонтов",title:"Герой нашего времени",price:15,likes:13,desc:"Главный герой рушит все вокруг себя и погибает сам"},{id:3,author:"Федор Достовевский",title:"Преступление и наказание",price:13,likes:65,desc:"Герой из принципа идет на убийство"},{id:4,author:"Андрей Цифровой",title:"Алгоритм как он есть",price:10,likes:25,desc:"Основый программирования -- алгоритмы"},{id:5,author:"Виктор Коневский",title:"За доброй надеждой",price:10,likes:25,desc:"Роман странствие"},{id:6,author:"Михаил Жванецкий",title:"Избранное",price:15,likes:13,desc:"Самые лучшие шутки самого известного сатирика"},{id:7,author:"Алексей Толстой",title:"Гиперболоид инженера Гарина",price:32,likes:65,desc:"Роман о попытке осчастливить человечество"},{id:8,author:"Алексей Толстой",title:"Петр Первый",price:10,likes:25,desc:"О жизни императора России Петра Первого"},{id:9,author:"Лев Толстой",title:"Война и мир",price:9,likes:54,desc:"События 1812 года"},{id:10,author:"Александр Пушкин",title:"Стихи и поэмы",price:32,likes:13,desc:"Избранные стихи и поэмы великого поэта"},{id:11,author:"Станислав Лем",title:"Солярис",price:17,likes:65,desc:"Роман о разумном океане"},{id:12,author:"Михаил Лермонтов",title:"Стихи",price:16,likes:44,desc:"Избранные стихи поэта"},{id:13,author:"Артур Конан Дойл",title:"Рассказы о Шерлоке Холмса",price:32,likes:65,desc:"Рассказы о великом сыщике"},{id:14,author:"Юлиан Семенов",title:"Семнадцать мгновений весны",price:89,likes:25,desc:"Как наша развездка боролось с фашизмом"},{id:15,author:"Евгений Лукин",title:"С нами бот",price:13,likes:67,desc:"Современный роман о боте "},{id:16,author:"Михаил Задорнов",title:"Избранное",price:12,likes:13,desc:"Самые лучшие шутки самого известного сатирика"},{id:17,author:"Владмимир Даль",title:"Словарь русского языка",price:7,likes:10,desc:"Словарь русского языка"},{id:18,author:"Андрей Цифровой",title:"Компьютер как он есть",price:7,likes:12,desc:"Устройство персонального компьютера для чайников"},{id:19,author:"Андрей Цифровой",title:"Сервер как он есть",price:7,likes:21,desc:"Принципы работы сервера"},{id:20,author:"Александр Пушкин",title:"Капитанская дочка",price:7,likes:23,desc:"Роман о Пугачевском бунте"}]},mutations:{},actions:{},modules:{}});e["a"].config.productionTip=!1,new e["a"]({router:X,store:tt,created:function(){this.$router.push("/")},render:function(t){return t(c)}}).$mount("#app")},"602f":function(t,s,a){"use strict";var e=a("012d"),i=a.n(e);i.a},6582:function(t,s,a){"use strict";var e=a("0ca8"),i=a.n(e);i.a},"79b4":function(t,s,a){"use strict";var e=a("e8ce"),i=a.n(e);i.a},"7c55":function(t,s,a){"use strict";var e=a("2395"),i=a.n(e);i.a},"7c5d":function(t,s,a){},"84d6":function(t,s,a){"use strict";var e=a("9355"),i=a.n(e);i.a},"85ec":function(t,s,a){},9355:function(t,s,a){},9846:function(t,s,a){"use strict";a.d(s,"a",(function(){return e})),a.d(s,"b",(function(){return i}));var e=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("header",{staticClass:"header"},[a("div",{staticClass:"header__topline"},[a("div",{staticClass:"header__wrapper"},[a("div",{staticClass:"header__userpanel"},[a("ul",{staticClass:"header__userpanel-list"},[a("li",{staticClass:"header__userpanel-item"},[a("a",{staticClass:"header__userpanel-link",attrs:{href:"#"}},[t._v("Sign in")])]),a("li",{staticClass:"header__userpanel-item"},[a("a",{staticClass:"header__userpanel-link",attrs:{href:"#"}},[t._v("My account")])]),a("li",{staticClass:"header__userpanel-item"},[a("a",{staticClass:"header__userpanel-link",attrs:{href:"#"}},[t._v("Order status")])]),a("li",{staticClass:"header__userpanel-item"},[a("a",{staticClass:"header__userpanel-link",attrs:{href:"#"}},[t._v("Help")])])])])])]),a("div",{staticClass:"header__baseblock"},[a("div",{staticClass:"header__wrapper"},[a("div",{staticClass:"header__searchpanel"},[a("div",{staticClass:"header__searchpanel-logo"}),a("form",{staticClass:"header__searchpanel-form"},[a("input",{staticClass:"header__searchpanel-input",attrs:{type:"text"}}),a("button",{staticClass:"header__searchpanel-button"},[a("i",{staticClass:"header__searchpanel-icon"}),t._v(" Search ")])]),a("div",{staticClass:"header__cart"},[a("i",{staticClass:"header__cart-icon"}),a("span",{staticClass:"header__cart-title"},[t._v(" Your cart "),a("button",{staticClass:"header__cart-counter"},[t._v(" (2 items) ")])]),a("span",{staticClass:"header__cart-total"},[t._v(" $125.0 ")]),a("button",{staticClass:"header__cart-check"},[t._v(" Checkout ")])]),a("div",{staticClass:"header__wishlist"},[a("i",{staticClass:"header__wishlist-icon"}),a("span",{staticClass:"header__wishlist-counter"},[t._v("20")]),a("span",{staticClass:"header__wishlist-title"},[t._v("Wish list")])])])])]),a("nav",{staticClass:"header__menu"},[a("div",{staticClass:"header__wrapper"},[a("ul",{staticClass:"header__menu-list"},[a("li",{staticClass:"header__menu-item itemactive"},[a("a",{staticClass:"header__menu-link",attrs:{href:"cm"}},[t._v("Computers")])]),a("li",{staticClass:"header__menu-item"},[a("a",{staticClass:"header__menu-link",attrs:{href:"c"}},[t._v("Cooking")])]),a("li",{staticClass:"header__menu-item"},[a("a",{staticClass:"header__menu-link",attrs:{href:"e"}},[t._v("Education")])]),a("li",{staticClass:"header__menu-item"},[a("a",{staticClass:"header__menu-link",attrs:{href:"f"}},[t._v("Fiction")])]),a("li",{staticClass:"header__menu-item"},[a("a",{staticClass:"header__menu-link",attrs:{href:"h"}},[t._v("Health")])]),a("li",{staticClass:"header__menu-item"},[a("a",{staticClass:"header__menu-link",attrs:{href:"mt"}},[t._v("Mathematics")])]),a("li",{staticClass:"header__menu-item"},[a("a",{staticClass:"header__menu-link",attrs:{href:"md"}},[t._v("Medical")])]),a("li",{staticClass:"header__menu-item"},[a("a",{staticClass:"header__menu-link",attrs:{href:"r"}},[t._v("Reference")])]),a("li",{staticClass:"header__menu-item itemactive"},[a("a",{staticClass:"header__menu-link",attrs:{href:"s"}},[t._v("Science")])])])])])])}]},ad21:function(t,s,a){"use strict";var e=a("e504"),i=a.n(e);s["default"]=i.a},af20:function(t,s,a){"use strict";var e=a("2693"),i=a.n(e);i.a},e504:function(t,s){},e8ce:function(t,s,a){},fd2d:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"footer__topblock"},[a("div",{staticClass:"footer__wrapper"},[a("section",{staticClass:"footer__links"},[a("article",{staticClass:"footer__links-block"},[a("h2",{staticClass:"footer__links-header"},[t._v("Biography & True Stories")]),a("ul",{staticClass:"footer__links-list"},[a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" General ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Diaries, Letters & Journals ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Memoirs ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" True Stories ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Generic Exams ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" GK Titles ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Medical Entrance ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Other Entrance Exams ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" PG Entrance Examinations ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Self-help Titles ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Sociology ")])])])]),a("article",{staticClass:"footer__links-block"},[a("h2",{staticClass:"footer__links-header"},[t._v("Professional & Reference ")]),a("ul",{staticClass:"footer__links-list"},[a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Academic and Reference ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Business Trade ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Engineering and Computer Science ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Humanities, Social Sciences and Languages ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Introduction to Computers ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Science and Maths ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Trade Business ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" English Language & Literature ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" English Language Teaching ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Environment Awareness ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Environment Protection ")])])])]),a("article",{staticClass:"footer__links-block"},[a("h2",{staticClass:"footer__links-header"},[t._v("Earth Sciences")]),a("ul",{staticClass:"footer__links-list"},[a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Earth Sciences ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Geography ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" The Environment ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Regional & Area Planning ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Fantasy ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Gay ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Humorous ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Interactive ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Legal ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Lesbian ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Men'S Adventure ")])])])]),a("article",{staticClass:"footer__links-block"},[a("h2",{staticClass:"footer__links-header"},[t._v("Mathematics")]),a("ul",{staticClass:"footer__links-list"},[a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Algebra ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Differential Equations ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Discrete Mathematics ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Fourier Analysis ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Numerical Analysis ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Probability ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Statistical Methods/data Analysis ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Stochastic And Random Processes ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Topology ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Statistics ")])]),a("li",{staticClass:"footer__links-item"},[a("a",{staticClass:"footer__links-href"},[t._v(" Mathematics ")])])])])])])]),a("div",{staticClass:"footer__cards"},[a("div",{staticClass:"footer__wrapper"},[a("h4",{staticClass:"footer__cards-header"},[t._v(" We accept all major Credit Card/Debit Card/Internet Banking ")]),a("p",{staticClass:"footer__cards-images"},[a("button",{staticClass:"footer__cards-button"},[a("img",{staticClass:"footer__cards-img",attrs:{src:"/img/card1.png",alt:"card"}})]),a("button",{staticClass:"footer__cards-button"},[a("img",{staticClass:"footer__cards-img",attrs:{src:"/img/card2.png",alt:"card"}})]),a("button",{staticClass:"footer__cards-button"},[a("img",{staticClass:"footer__cards-img",attrs:{src:"/img/card3.png",alt:"card"}})])])])]),a("div",{staticClass:"footer__copyright"},[t._v(" Conditions of Use Privacy Notice © 2012-2013, Booksonline, Inc. or its affiliates ")])])}],l=(a("14b9"),a("2877")),r={},n=Object(l["a"])(r,e,i,!1,null,"29ef8e9f",null);s["a"]=n.exports},fdab:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hello"},[a("span",{staticClass:"hello__text"},[t._v("This is portfolio of "),a("a",{staticClass:"hello__text-link",attrs:{href:"https://ivanshavliuga.github.io",rel:"noopener",target:"__blank"}},[t._v(" Ivan Shavliuga (Ivanov) junior vue.js developer ")])])])}],l={name:"Hello"},r=l,n=(a("2313"),a("2877")),o=Object(n["a"])(r,e,i,!1,null,"e64c3064",null);s["a"]=o.exports}});
//# sourceMappingURL=app.8da19a44.js.map