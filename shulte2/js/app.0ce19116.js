(function(e){function t(t){for(var r,i,a=t[0],c=t[1],l=t[2],u=0,f=[];u<a.length;u++)i=a[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);h&&h(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},s=[];function i(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ccbf5d00"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=i(e);var l=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",l.name="ChunkLoadError",l.type=r,l.request=s,n[1](l)}o[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var h=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"2c4a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"board"},[n("board")],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{style:"width: "+(260+40*e.level)+"px;height: "+(280+40*e.level)+"px"},[e._l(e.rows,(function(t,r){return n("div",{key:r,staticClass:"row",style:"width: "+45*e.rows.length+"px"},e._l(e.columns,(function(r,o){return n("div",{key:o},[n("div",{staticClass:"ball",style:e.draw(r+Math.floor(Math.random()%10),(r*t+Math.floor(Math.random()%10))%10,t+Math.floor(Math.random()%10)),attrs:{id:r-1+8*(t-1),"data-check":e.printnum(r-1,t-1)},on:{click:function(n){return e.checkball(r-1,t-1)}}},[e._v(" "+e._s(e.printnum(r-1,t-1))+" ")])])})),0)})),n("barprogress",{attrs:{barlength:e.board.length,barpos:e.count}}),n("infopanel",{attrs:{scores:e.scores,count:e.count,winner:e.winner,level:e.level},on:{next:e.nextlevel}})],2)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select"},[n("div",{staticClass:"count"},[e._v(" Count: "+e._s(e.count)+" ")]),n("div",{staticClass:"scores"},[e._v(" Scores: "+e._s(e.scores)+" ")]),n("div",{staticClass:"level"},[e._v(" Level: "+e._s(e.level)+" ")]),e.winner?n("div",{staticClass:"winner"},[n("span",[e._v("You winner")]),n("br"),n("button",{on:{click:e.nextlevel}},[e._v(" Next ")])]):e._e()])},l=[],u=(n("a9e3"),{props:{winner:{type:Boolean,default:!1},level:{type:Number,default:0},scores:{type:Number,default:0},count:{type:Number,default:0}},methods:{nextlevel:function(){this.$emit("next")}}}),h=u,f=(n("ec60"),n("2877")),d=Object(f["a"])(h,c,l,!1,null,"a2dd5d54",null),p=d.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bar",style:"width:"+5.5*e.barlength+"px"},[n("div",{staticClass:"pos",style:"width:"+2*e.barpos+"px"})])},v=[],m={props:{barlength:{type:Number,default:0},barpos:{type:Number,default:0}}},g=m,w=(n("a589"),Object(f["a"])(g,b,v,!1,null,"6d9924de",null)),y=w.exports,_={components:{infopanel:p,barprogress:y},data:function(){return{rows:[1,2,3,4,5],columns:[1,2,3,4,5],board:[],checked:[],scores:0,count:0,selnum:0,winner:!1,clickok:!1,level:1}},created:function(){this.generatenumbers()},methods:{draw:function(e,t,n){return{animationDelay:e<5&&t<5?"0."+n+e+t+"s":"1."+e+n+t+"s",background:"#"+e+"5"+n+"2"+t+"2"}},generatenumbers:function(){for(var e=0,t=this.rows.length*this.columns.length,n=0;n<this.rows.length;n++)for(var r=0;r<this.columns.length;r++)e++,this.board.push(e);for(e=0;e<t;e++){var o=this.board[e],s=Math.floor(Math.random()*t);this.board[e]=this.board[s],this.board[s]=o}},printnum:function(e,t){var n=this.columns.length;return this.board[e+t*n]},checkball:function(e,t){var n=this.columns.length,r=this.rows.length*this.columns.length;this.selnum=this.board[e+t*n],this.checked.push(this.selnum),this.count<r&&(this.selnum-this.count!==1?(this.scores-=5,this.clickok=!1):(this.count++,this.scores+=5,this.board[e+t*n]="OK",this.clickok=!0),this.count===r&&(this.winner=!0))},nextlevel:function(){this.rows.push(this.rows.length+1),this.columns.push(this.columns.length+1),this.board=[],this.generatenumbers(),this.level++,this.count=0,this.winner=!1}}},k=_,x=(n("77ff"),Object(f["a"])(k,i,a,!1,null,"159c039c",null)),j=x.exports,O={components:{board:j}},C=O,M=(n("034f"),Object(f["a"])(C,o,s,!1,null,null,null)),E=M.exports,P=(n("d3b7"),n("8c4f")),N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("board")},S=[],$={components:{board:j}},A=$,T=Object(f["a"])(A,N,S,!1,null,null,null),L=T.exports;r["a"].use(P["a"]);var q=[{path:"/",name:"Home",component:L},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],B=new P["a"]({mode:"history",base:"/",routes:q}),F=B,J=n("2f62");r["a"].use(J["a"]);var D=new J["a"].Store({state:{},mutations:{},actions:{},modules:{}}),H=n("9483");Object(H["a"])("https://ivanshavliuga.github.io/shulte2/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:F,store:D,render:function(e){return e(E)}}).$mount("#app")},"77ff":function(e,t,n){"use strict";n("2c4a")},"85ec":function(e,t,n){},a589:function(e,t,n){"use strict";n("ea2c")},d028:function(e,t,n){},ea2c:function(e,t,n){},ec60:function(e,t,n){"use strict";n("d028")}});
//# sourceMappingURL=app.0ce19116.js.map