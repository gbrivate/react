(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(44)},21:function(e,t,n){},24:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),i=(n(21),n(14)),u=n(4),l=n.n(u),s=n(12),m=n(2),f=(n(24),n(13)),p=n.n(f),d=function(e){return r.a.createElement("div",null," ",e.profiles.map(function(e){return r.a.createElement(v,{key:e.id,profile:e})}))},v=function(e){var t=e.profile;return r.a.createElement("div",{className:"github-profile"},r.a.createElement("img",{src:t.avatar_url}),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"name"},t.name),r.a.createElement("div",{className:"company"},t.company)))},b=function(e){var t=Object(a.useState)(""),n=Object(m.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)(function(){e.reset?(o(""),e.onChange("")):e.onChange(c)}),r.a.createElement("input",{type:"text",value:c,onChange:function(e){return o(e.target.value)},placeholder:"GitHub username",autoFocus:!0,required:!0})},h=function(e){var t=Object(a.useState)(""),n=Object(m.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(!1),u=Object(m.a)(i,2),f=u[0],d=u[1],v=function(){var t=Object(s.a)(l.a.mark(function t(n){var a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,r="https://api.github.com/users/".concat(c),p.a.get(r);case 3:a=t.sent,d(!0),e.onSubmit(a.data),d(!1);case 7:case"end":return t.stop()}var r},t)}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:v},r.a.createElement(b,{onChange:o,reset:f}),r.a.createElement("button",null,"Add card"),r.a.createElement("button",{onClick:e.cleanList,type:"button"},"Reset"))},E=function(e){var t=Object(a.useState)([]),n=Object(m.a)(t,2),c=n[0],o=n[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},e.title),r.a.createElement(h,{onSubmit:function(e){o([].concat(Object(i.a)(c),[e]))},cleanList:function(){o([])}}),r.a.createElement(d,{profiles:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,{title:"The GitHub Cards App"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.49fc2426.chunk.js.map