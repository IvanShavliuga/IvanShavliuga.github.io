if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const t=e=>i(e,o),l={module:{uri:o},exports:c,require:t};s[o]=Promise.all(r.map((e=>l[e]||t(e)))).then((e=>(n(...e),c)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"ivshulte"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.c496087e.css",revision:null},{url:"/index.html",revision:"09f5d1cfdb8e3a62e5c26d44d1077d3d"},{url:"/iv2.ico",revision:"333fe3e10f3cab8768e778d581c4b3c3"},{url:"/js/app.b4cc76fa.js",revision:null},{url:"/js/chunk-vendors.36f5fbe6.js",revision:null},{url:"/manifest.json",revision:"c659d9f4f281a3197ba45c99bc5fa464"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
