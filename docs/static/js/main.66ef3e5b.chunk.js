(this["webpackJsonpsandbox_markdown-to-html"]=this["webpackJsonpsandbox_markdown-to-html"]||[]).push([[0],{37:function(e,a,n){e.exports=n(47)},42:function(e,a,n){},43:function(e,a,n){},47:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(7),o=n.n(l),c=(n(42),n(43),n(32)),i=n(79),s=n(80),m=n(75),u=n(81),d=localStorage.getItem("md"),p=Object(m.a)((function(e){return Object(u.a)({common:{marginTop:e.spacing(1),width:"50%"}})}));var g=function(){var e=p(),a=r.a.useState(d||""),n=Object(c.a)(a,2),t=n[0],l=n[1],o=function(e){return e.replace(/^### (.*)$/gm,'<h3 class="style4a">$1</h3>').replace(/^## (.*)$/gm,'<h2 class="style3a">$1</h2>').replace(/```([^\n]*)\n([^`]*)```/g,'<pre class="lang:default decode:true ">$2</pre>').replace(/`([^`]+)`/g,'<span class="lang:default decode:true  crayon-inline ">$1</span>').replace(/__((?!__).+)__/g,'<span style="background-color: #ffff99;">$1</span>').replace(/\[([^[\]]*)]\(([^()]*)\)/g,'<a href="$2">$1</a>').replace(/^\* (.*)$/gm,"\u25cf $1").replace(/^[\s\t]+\* (.*)$/gm,"&nbsp;&nbsp;&nbsp;&nbsp;\u25cb $1")}(t),m=function(e){return e.replace(/\n/g,"<br>").replace("</h3><br>","</h3>").replace("</h2><br>","</h2>").replace("</pre><br>","</pre>")}(o);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(i.a,{id:"md-text-field",className:e.common,label:"Markdown",multiline:!0,rows:"10",variant:"outlined",value:t,onChange:function(e){l(e.target.value),localStorage.setItem("md",e.target.value)}}),r.a.createElement(i.a,{id:"html-text-field",className:e.common,label:"Html",multiline:!0,rows:"10",variant:"outlined",value:o,disabled:!0})),navigator.clipboard&&r.a.createElement(s.a,{id:"copy",onClick:function(){return e=o,void(navigator.clipboard?navigator.clipboard.writeText(e):alert("Async Clipboard API\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u305b\u3093\u3002"));var e}},"copy from html"),r.a.createElement("div",{className:"preview p-entry__body"},r.a.createElement("h1",null,"Preview"),r.a.createElement("hr",null),r.a.createElement("span",{dangerouslySetInnerHTML:{__html:m}})))};var h=function(){return r.a.createElement("div",null,r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.66ef3e5b.chunk.js.map