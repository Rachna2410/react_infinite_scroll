(this["webpackJsonpreact-infinite-scroll"]=this["webpackJsonpreact-infinite-scroll"]||[]).push([[0],{51:function(n,e,t){"use strict";t.r(e);var i,s,a,c,r,l,d=t(0),o=t.n(d),b=t(21),j=t.n(b),p=t(10),h=t(27),f=t(4),x=t(3),m=t(1),u=x.b.header(i||(i=Object(f.a)(["\n  max-width: 70rem;\n  margin: 2rem auto;\n  text-align: center;\n"]))),O=x.b.h1(s||(s=Object(f.a)(["\n  font-family: 'Oswald', sans-serif;\n  margin-bottom: 1em;\n"]))),g=function(){return Object(m.jsxs)(u,{children:[Object(m.jsx)(O,{children:"Unsplash"}),Object(m.jsx)("p",{children:"The internet\u2019s source of freely usable images."}),Object(m.jsx)("p",{children:"Powered by creators everywhere."})]})},v=x.b.img(a||(a=Object(f.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),y=function(n){var e=n.url,t=n.key;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(v,{src:e,alt:""},t)})},w=x.b.div(c||(c=Object(f.a)(["\ntext-align: center;\n.lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-ellipsis div {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #222;\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.lds-ellipsis div:nth-child(1) {\n  left: 8px;\n  animation: lds-ellipsis1 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(2) {\n  left: 8px;\n  animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(3) {\n  left: 32px;\n  animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(4) {\n  left: 56px;\n  animation: lds-ellipsis3 0.6s infinite;\n}\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n"]))),k=function(){return Object(m.jsx)(w,{children:Object(m.jsxs)("div",{class:"lds-ellipsis",children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{})]})})},F=t(25),I=t.n(F),L=t(26),C=Object(x.a)(r||(r=Object(f.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  body {\n    font-family: sans-serif;\n  }\n"]))),P=x.b.section(l||(l=Object(f.a)(["\n  max-width: 70rem;\n  margin: 4rem auto;\n  display: grid;\n  grid-gap: 1em;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-auto-rows: 300px;\n"])));var S=function(){var n=Object(d.useState)([]),e=Object(h.a)(n,2),t=e[0],i=e[1];Object(d.useEffect)((function(){s()}),[]);var s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e="https://api.unsplash.com",s="rHjpUIcel-iFy8VKLpvIIHGNxqp1x97G-rQdFXqKvx4";I.a.get("".concat(e,"/photos/random?client_id=").concat(s,"&count=").concat(n)).then((function(n){i([].concat(Object(p.a)(t),Object(p.a)(n.data)))}))};return Object(m.jsxs)("div",{children:[Object(m.jsx)(g,{}),Object(m.jsx)(C,{}),Object(m.jsx)(L.a,{dataLength:t.length,next:s,hasMore:!0,loader:Object(m.jsx)(k,{}),children:Object(m.jsx)(P,{children:t.map((function(n){return Object(m.jsx)(y,{url:n.urls.thumb},n.id)}))})})]})},T=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,52)).then((function(e){var t=e.getCLS,i=e.getFID,s=e.getFCP,a=e.getLCP,c=e.getTTFB;t(n),i(n),s(n),a(n),c(n)}))};j.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root")),T()}},[[51,1,2]]]);
//# sourceMappingURL=main.798c9283.chunk.js.map