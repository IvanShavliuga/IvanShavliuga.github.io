(function(e){function t(t){for(var o,l,i=t[0],c=t[1],a=t[2],h=0,f=[];h<i.length;h++)l=i[h],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,a||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},s=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"board"},[n("board")],1)},s=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{style:"width: "+(260+40*e.level)+"px;height: "+(280+40*e.level)+"px"},[e._l(e.rows,(function(t,o){return n("div",{key:o,staticClass:"row",style:"width: "+45*e.rows.length+"px"},e._l(e.columns,(function(o,r){return n("div",{key:r},[n("div",{staticClass:"ball",style:e.draw(o+Math.floor(Math.random()%10),(o*t+Math.floor(Math.random()%10))%10,t+Math.floor(Math.random()%10)),attrs:{id:o-1+8*(t-1),"data-check":e.printnum(o-1,t-1)},on:{click:function(n){return e.checkball(o-1,t-1)}}},[e._v(" "+e._s(e.printnum(o-1,t-1))+" ")])])})),0)})),n("infopanel",{attrs:{scores:e.scores,count:e.count,winner:e.winner,level:e.level},on:{next:e.nextlevel}})],2)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select"},[n("div",{staticClass:"count"},[e._v(" Count: "+e._s(e.count)+" ")]),n("div",{staticClass:"scores"},[e._v(" Scores: "+e._s(e.scores)+" ")]),n("div",{staticClass:"level"},[e._v(" Level: "+e._s(e.level)+" ")]),e.winner?n("div",{staticClass:"winner"},[n("span",[e._v("You winner")]),n("br"),n("button",{on:{click:e.nextlevel}},[e._v(" Next ")])]):e._e()])},a=[],u=(n("a9e3"),{props:{winner:{type:Boolean,default:!1},level:{type:Number,default:0},scores:{type:Number,default:0},count:{type:Number,default:0}},methods:{nextlevel:function(){this.$emit("next")}}}),h=u,f=(n("ec60"),n("2877")),d=Object(f["a"])(h,c,a,!1,null,"a2dd5d54",null),p=d.exports,v={components:{infopanel:p},data:function(){return{rows:[],columns:[],board:[],checked:[],scores:0,count:0,selnum:0,winner:!1,clickok:!1,level:1}},created:function(){if(console.log(localStorage.shultebrlength),localStorage.shultebrlength)for(var e=0;e<localStorage.shultebrlength;e++)this.rows.push(e+1),this.columns.push(e+1);else for(var t=0;t<5;t++)this.rows.push(t+1),this.columns.push(t+1);console.log(this.rows),this.scores=localStorage.shultescores?+localStorage.shultescores:0,this.level=localStorage.shultelevel?+localStorage.shultelevel:1,this.generatenumbers()},methods:{draw:function(e,t,n){return{animationDelay:e<5&&t<5?"0."+n+e+t+"s":"1."+e+n+t+"s",background:"#"+e+"5"+n+"2"+t+"2"}},generatenumbers:function(){for(var e=0,t=this.rows.length*this.columns.length,n=0;n<this.rows.length;n++)for(var o=0;o<this.columns.length;o++)e++,this.board.push(e);for(e=0;e<t;e++){var r=this.board[e],s=Math.floor(Math.random()*t);this.board[e]=this.board[s],this.board[s]=r}},printnum:function(e,t){var n=this.columns.length;return this.board[e+t*n]},checkball:function(e,t){var n=this.columns.length,o=this.rows.length*this.columns.length;this.selnum=this.board[e+t*n],this.checked.push(this.selnum),this.count<o&&(this.selnum-this.count!==1?(this.scores-=5,this.clickok=!1):(this.count++,this.scores+=5,this.board[e+t*n]="OK",this.clickok=!0),this.count===o&&(this.winner=!0))},nextlevel:function(){this.rows.push(this.rows.length+1),this.columns.push(this.columns.length+1),this.board=[],this.generatenumbers(),this.level++,this.count=0,this.winner=!1,localStorage.shultebrlength=this.columns.length,localStorage.shultescores=this.scores,localStorage.shultelevel=this.level},setnull:function(){localStorage.shultescores=0,localStorage.shultelevel=1,localStorage.shultebrlength=5}}},g=v,b=(n("fab6"),Object(f["a"])(g,l,i,!1,null,"34688020",null)),m=b.exports,w={components:{board:m}},y=w,_=(n("034f"),Object(f["a"])(y,r,s,!1,null,null,null)),k=_.exports,S=n("2f62");o["a"].use(S["a"]);var x=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}}),O=n("9483");Object(O["a"])("https://ivanshavliuga.github.io/shulte2/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({store:x,render:function(e){return e(k)}}).$mount("#app")},"769a":function(e,t,n){},"85ec":function(e,t,n){},d028:function(e,t,n){},ec60:function(e,t,n){"use strict";n("d028")},fab6:function(e,t,n){"use strict";n("769a")}});
//# sourceMappingURL=app.9c8dc9a4.js.map