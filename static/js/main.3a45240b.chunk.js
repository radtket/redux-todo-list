(this["webpackJsonpredux-todo-list"]=this["webpackJsonpredux-todo-list"]||[]).push([[0],{26:function(e,t,a){e.exports=a(40)},33:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(14),l=a.n(c),r=a(5),d=a(11),s=(a(33),a(13)),m=a.n(s);var i=()=>{const e=Object(r.d)(),[t,a]=Object(o.useState)("");return n.a.createElement("form",{onSubmit:o=>{o.preventDefault();var n;""===t.trim()||(n={id:m()(),name:t,complete:!1},e((e=>({type:"ADD_TODO",payload:e}))(n)),a(""))}},n.a.createElement("div",{className:"form-div"},n.a.createElement("input",{name:"todo",onChange:e=>{let{target:t}=e;a(t.value)},placeholder:"Add a todo",type:"text",value:t}),n.a.createElement("button",{type:"submit"},"Add")))};var u=()=>{const{todos:e}=Object(r.e)(e=>e.todos),t=Object(r.d)();return n.a.createElement("ul",{className:"todo-list"},e.map(e=>{let{id:a,complete:o,name:c}=e;return n.a.createElement("li",{key:a},n.a.createElement("input",{checked:o,onChange:()=>{t((e=>({type:"TOGGLE_TODO",payload:e}))(a))},type:"checkbox"}),n.a.createElement("span",{className:o?"complete":null},c),n.a.createElement("button",{className:"delete-button",onClick:()=>{t((e=>({type:"DELETE_TODO",payload:e}))(a))},type:"button"},"X"))}))};var p=()=>n.a.createElement("div",{className:"main"},n.a.createElement(i,null),n.a.createElement(u,null)),O=a(10),b=a(22),E=a.n(b),v=a(7),j=a(20),y=a(24),h=a(8);const D={todos:[{id:m()(),name:"Read a bit",complete:!0},{id:m()(),name:"Do laundry",complete:!1}]};var T=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return Object(h.a)(Object(h.a)({},e),{},{todos:[...e.todos,t.payload]});case"TOGGLE_TODO":return Object(h.a)(Object(h.a)({},e),{},{todos:e.todos.map(e=>e.id===t.payload?Object(h.a)(Object(h.a)({},e),{},{complete:!e.complete}):e)});case"DELETE_TODO":return Object(h.a)(Object(h.a)({},e),{},{todos:e.todos.filter(e=>e.id!==t.payload)});default:return e}};var f=e=>Object(O.b)({router:Object(d.b)(e),todos:T});const g=Object(v.a)(),w=[E.a,y.a,Object(j.a)(g)];const k=Object(O.c)(Object(O.a)(...w));var _=Object(O.d)(f(g),{},k);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(r.a,{store:_},n.a.createElement(d.a,{history:g},n.a.createElement(p,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.3a45240b.chunk.js.map