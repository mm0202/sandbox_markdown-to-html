(this["webpackJsonpsandbox_markdown-to-html"]=this["webpackJsonpsandbox_markdown-to-html"]||[]).push([[0],{28:function(e,a,n){e.exports=n(38)},33:function(e,a,n){},34:function(e,a,n){},38:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(4),o=n.n(l),c=(n(33),n(34),n(24)),s=n(68),i=n(65),m=n(69),u=localStorage.getItem("md"),d=Object(i.a)((function(e){return Object(m.a)({common:{marginTop:e.spacing(1),width:"50%"}})}));var p=function(){var e=d(),a=r.a.useState(u||""),n=Object(c.a)(a,2),t=n[0],l=n[1],o=function(e){return e.replace(/^### (.*)$/gm,'<h3 class="style4a">$1</h3>').replace(/^## (.*)$/gm,'<h2 class="style3a">$1</h2>').replace(/```([^\n]*)\n([^`]*)```/g,'<pre class="lang:default decode:true ">$2</pre>').replace(/`([^`]+)`/g,'<span class="lang:default decode:true  crayon-inline ">$1</span>').replace(/__((?!__).+)__/g,'<span style="background-color: #ffff99;">$1</span>').replace(/\[([^[]]*)\]\(([^()]*)\)/g,'<a href="$2">$1</a>').replace(/^\* (.*)$/gm,"\u25cf $1")}(t),i=function(e){return e.replace(/\n/g,"<br>").replace("</h3><br>","</h3>").replace("</h2><br>","</h2>").replace("</pre><br>","</pre>")}(o);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(s.a,{className:e.common,label:"Markdown",multiline:!0,rows:"10",variant:"outlined",value:t,onChange:function(e){l(e.target.value),localStorage.setItem("md",e.target.value)}}),r.a.createElement(s.a,{className:e.common,label:"Html",multiline:!0,rows:"10",variant:"outlined",value:o,disabled:!0})),r.a.createElement("div",{className:"preview p-entry__body"},r.a.createElement("h1",null,"Preview"),r.a.createElement("hr",null),r.a.createElement("span",{dangerouslySetInnerHTML:{__html:i}})))};var h=function(){return r.a.createElement("div",null,r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.25030c2c.chunk.js.map