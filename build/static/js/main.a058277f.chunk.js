(this.webpackJsonpmy=this.webpackJsonpmy||[]).push([[0],{76:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),r=t(15),o=t.n(r),i=t(26),s=t(6),l=t(27),d=t.n(l),j=t(39),h=t(16),b=t(40),u=t.n(b),x=t(83),f=t(79),m=t(85),O=t(80),p=t(43),v=t(84),g=t(81),w=t(82),k=t(3),y=function(){var e,n,t,a,r=Object(c.useState)([]),o=Object(h.a)(r,2),i=o[0],s=o[1],l=Object(c.useState)([]),b=Object(h.a)(l,2),y=b[0],F=b[1],S=Object(c.useState)(""),C=Object(h.a)(S,2),N=C[0],L=C[1],W=Object(c.useState)(!1),D=Object(h.a)(W,2),T=D[0],E=D[1],I=new FormData;I.append("file",y[0]);var B=function(){var e=Object(j.a)(d.a.mark((function e(){var n,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!y.length){e.next=11;break}return e.next=4,u.a.post("/api/v1/home",I);case 4:n=e.sent,t=n.data,s(t.data.rows),L(""),F([]),e.next=12;break;case 11:L("You have not choose any excel file");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),L(e.t0.response.data.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(x.a,{bg:"light",expand:"lg",children:Object(k.jsxs)(f.a,{children:[Object(k.jsx)(x.a.Brand,{href:"#home",children:"Excel File Reader"}),Object(k.jsx)(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(k.jsx)(x.a.Collapse,{id:"basic-navbar-nav",children:Object(k.jsxs)(m.a,{className:"ml-auto",children:[Object(k.jsx)(m.a.Link,{href:"#home",children:"Home"}),Object(k.jsx)(m.a.Link,{href:"#link",children:"Link"})]})})]})}),Object(k.jsx)(f.a,{children:Object(k.jsx)("section",{className:"mt-5",children:Object(k.jsxs)(O.a,{children:[Object(k.jsx)(p.a,{xs:12,md:6,children:Object(k.jsx)("div",{className:"w-100  mb-3 float-left",children:Object(k.jsxs)(v.a.File,{id:"formcheck-api-custom",custom:!0,children:[Object(k.jsx)(v.a.File.Input,{isInvalid:!!N,onChange:function(e){F(e.target.files),L("")}}),Object(k.jsx)(v.a.File.Label,{"data-browse":"Select a file",children:null!==(e=null===(n=y[0])||void 0===n?void 0:n.name)&&void 0!==e?e:"Select an Excel file"}),Object(k.jsx)(v.a.Control.Feedback,{type:"Invalid",style:{color:"red"},children:N||""})]})})}),Object(k.jsx)(p.a,{xs:12,md:2,children:Object(k.jsx)(g.a,{variant:"primary",className:"w-100 mb-3",onClick:B,children:"Upload"})}),Object(k.jsx)(p.a,{xs:12,md:2,children:Object(k.jsx)(g.a,{variant:"primary",className:"w-100 mb-3",onClick:function(){return E(!T)},children:"Change View"})}),Object(k.jsx)(p.a,{xs:12,md:2,children:Object(k.jsx)(g.a,{variant:"primary",className:"w-100 mb-3",children:Object(k.jsx)("a",{href:"".concat(window.location.href,"/uploads/document.docx"),download:!0,className:"text-white",style:{textDecoration:"none"},children:"Download as Doc"})})})]})})}),Object(k.jsxs)(f.a,{className:"text-center",children:[Object(k.jsx)("h4",{children:(null===(t=y[0])||void 0===t?void 0:t.name)?"".concat(null===(a=y[0])||void 0===a?void 0:a.name):""}),Object(k.jsx)("section",{style:{display:T?"block":"none"},children:Object(k.jsx)(w.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:Object(k.jsx)("tbody",{children:i.map((function(e,n){return Object(k.jsx)("tr",{children:e.map((function(e,n){return Object(k.jsx)("td",{children:e},"".concat(e+n+10*Math.random()))}))},"".concat(e+n+10*Math.random()))}))})})})]}),Object(k.jsx)(f.a,{style:{display:T?"none":"block"},children:i.map((function(e,n){return Object(k.jsx)(k.Fragment,{children:e.map((function(e,t){return Object(k.jsx)(k.Fragment,{children:0===t?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("br",{}),Object(k.jsx)("h4",{style:{color:"blue"},children:0!==n?"Data Row ".concat(n):"Data Title"}),Object(k.jsxs)("h5",{children:[t+1,".",e]})," "]}):Object(k.jsxs)("h5",{children:[t+1,".",e]})})}))})}))})]})},F=function(){return Object(k.jsx)(s.c,{children:Object(k.jsx)(s.a,{exact:!0,path:"/",component:y})})},S=function(){return Object(k.jsx)(i.a,{children:Object(k.jsx)(s.a,{path:"/",component:F})})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,86)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),c(e),a(e),r(e),o(e)}))},N=(t(75),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function L(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(S,{})}),document.getElementById("root")),C(),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");N?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var c=t.headers.get("content-type");404===t.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):L(n,e)}))}}()}},[[76,1,2]]]);
//# sourceMappingURL=main.a058277f.chunk.js.map