if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const o={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return o;default:return e(r)}}))).then((e=>{const r=n(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"./index.html",revision:"82e996ce65b1f4705c78823c4192c612"},{url:"img/6a5d657bbe5e95b17473662152343504-eb-recipe-app.png",revision:null},{url:"img/85380bcfd72f860f527bb6ebaf72d6d4-eb-portfolio.png",revision:null},{url:"img/b4856fa9beb4f49f85c17fb702652239-eb-travel-app.png",revision:null},{url:"img/bcc03c6227f8390e4b192c195f7a7474-eb-profile-img.png",revision:null},{url:"main.css",revision:"abafb768d33934b50b1c6e262a2ded8d"},{url:"main.js",revision:"ba51e547e7cbbde4bd631e685d5fb1b8"}],{})}));
