(function(e){function t(t){for(var r,i,l=t[0],s=t[1],u=t[2],c=0,f=[];c<l.length;c++)i=l[c],o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9f8037cf"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,s=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e),a=function(t){u.onerror=u.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,s.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("c21b"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i={mounted:function(){}},l=i,s=(n("034f"),n("2877")),u=Object(s["a"])(l,o,a,!1,null,null,null);u.options.__file="App.vue";var c=u.exports,p=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.files.length?n("div",{staticClass:"playlist"},[n("complayer",{attrs:{file:e.fullurl(e.id)}}),e._l(e.pagearr,function(t,r){return n("comtrack",{key:r,attrs:{index:t,pagecurr:e.pagecurr,selectid:e.id+1},on:{select:e.selectfile}})}),n("compagination",{attrs:{pagecurr:e.pagecurr,maxvalue:5},on:{update:e.updtpage}}),n("comfolder",{attrs:{folder:e.folder,maxvalue:2},on:{update:e.updtfolder}})],2):e._e()])},d=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"playlist__player"},[n("audio",{staticClass:"audio",attrs:{controls:""}},[n("source",{attrs:{src:e.file,type:"audio/mpeg"}}),e._v("\n    Тег audio не поддерживается вашим браузером.\n    "),n("a",{attrs:{href:e.file}},[e._v("Скачайте музыку")]),e._v(".\n  ")]),n("span",{staticClass:"playlist__debug"},[e._v(e._s(e.file))])])},m=[],_={props:{file:{type:String}}},h=_,g=Object(s["a"])(h,v,m,!1,null,null,null);g.options.__file="complayer.vue";var b=g.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["playlist__item",e.selectid===e.index?"itemactive":""],on:{click:function(t){e.selectfile(e.index)}}},[n("div",{staticClass:"playlist__number"},[e._v("\n    #"+e._s(e.getID(e.index))+"\n  ")]),n("div",{staticClass:"playlist__name"},[n("span",[e._v("Track: ")]),n("span",[e._v(e._s(e.getID(e.index)))])])])},x=[],k=(n("c5f6"),{props:{selectid:{type:Number,default:0},index:{type:Number,default:0},pagecurr:{type:Number,default:0}},methods:{getID:function(e){return 10*(this.pagecurr-1)+e},selectfile:function(e){this.$emit("select",e-1)}}}),w=k,j=Object(s["a"])(w,y,x,!1,null,null,null);j.options.__file="comtrack.vue";var O=j.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("span",{staticClass:"playlist__prev",on:{click:e.prev}},[e._v("prev")]),n("span",{staticClass:"playlist__counter"},[e._v(" page "+e._s(e.pagecurr)+" of "+e._s(e.maxvalue)+" ")]),n("span",{staticClass:"playlist__next",on:{click:e.next}},[e._v("next")]),n("br")])},$=[],E={props:{pagecurr:{type:Number,default:0},maxvalue:{type:Number,default:5}},methods:{next:function(){this.pagecurr<this.maxvalue&&this.$emit("update",this.pagecurr+1)},prev:function(){this.pagecurr>1&&this.$emit("update",this.pagecurr-1)}}},N=E,P=Object(s["a"])(N,C,$,!1,null,null,null);P.options.__file="compagination.vue";var S=P.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("span",{staticClass:"playlist__prev",on:{click:e.prev}},[e._v("prev")]),n("span",{staticClass:"playlist__counter"},[e._v(" folder "+e._s(e.folder)+" of 2 ")]),n("span",{staticClass:"playlist__next",on:{click:e.next}},[e._v("next")])])},M=[],A={props:{folder:{type:Number,default:0},maxvalue:{type:Number,default:5}},methods:{next:function(){this.folder<this.maxvalue&&this.$emit("update",this.folder+1)},prev:function(){this.folder>1&&this.$emit("update",this.folder-1)}}},D=A,I=Object(s["a"])(D,T,M,!1,null,null,null);I.options.__file="comfolder.vue";var q=I.exports,B={components:{complayer:b,comtrack:O,compagination:S,comfolder:q},data:function(){return{filelink:"",files:[],id:0,folder:1,pagearr:[1,2,3,4,5,6,7,8,9,10],pagecurr:1,status:"none",baseurl:"https://ivanshavliuga.github.io/simples/audio_tm/"}},created:function(){for(var e=1;e<=10;e++)this.files.push(e+"_tm.MP3")},methods:{fullurl:function(e){var t=this.folder<2?"_tm.MP3":"_tm.mp3",n=this.getID(e);return this.baseurl+this.folder+"/"+(n+1)+t},playevent:function(){this.status="play"},selectfile:function(e){var t=document.querySelector("audio");t.src=this.fullurl(e),this.id=e},getID:function(e){return 10*(this.pagecurr-1)+e},updtpage:function(e){this.pagecurr=e},updtfolder:function(e){this.folder=e}}},F=B,J=(n("cccb"),Object(s["a"])(F,f,d,!1,null,null,null));J.options.__file="Home.vue";var H=J.exports;r["a"].use(p["a"]);var L=new p["a"]({routes:[{path:"/",name:"home",component:H},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),z=n("9483");Object(z["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!0,new r["a"]({router:L,render:function(e){return e(c)}}).$mount("#app")},"8f59":function(e,t,n){},c21b:function(e,t,n){},cccb:function(e,t,n){"use strict";var r=n("8f59"),o=n.n(r);o.a}});
//# sourceMappingURL=app.a3e70824.js.map