(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(2),s=a(6),c=a(7),l=(a(14),a(1)),o=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=a(9),u=a.n(d),m=a(0),j=function(e){var t=e.user,a=t.name,n=t.email;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},b=function(e){var t=e.todo,a=t.user,n=t.title,i=t.completed,r=t.userId;return Object(m.jsxs)("article",{"data-id":r,className:u()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:n}),a&&Object(m.jsx)(j,{user:a})]},r)},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})};function O(e){return o.find((function(t){return t.id===e}))||null}var p=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:5,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:O(e.userId)})})),f=function(){var e=Object(l.useState)(p),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(""),c=Object(r.a)(i,2),d=c[0],u=c[1],j=Object(l.useState)(null),b=Object(r.a)(j,2),f=b[0],x=b[1],v=Object(l.useState)(!1),y=Object(r.a)(v,2),S=y[0],N=y[1],I=Object(l.useState)(!1),_=Object(r.a)(I,2),g=_[0],C=_[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),f||C(!0),d.trim()||N(!0),d.trim()&&f){var t=function(e){return Math.max.apply(Math,Object(s.a)(e.map((function(e){return e.id}))))+1}(a),i={id:t,userId:f?f.id:-1,title:d,completed:!1,user:f};n([].concat(Object(s.a)(a),[i])),x(null),u("")}},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{children:["Title:",Object(m.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:d,onChange:function(e){u(e.target.value.replace(/[^a-zA-Z\u0430-\u044f\u0410-\u042f0-9\s]/g,"")),N(!1)}})]}),S&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{children:["User:",Object(m.jsxs)("select",{"data-cy":"userSelect",value:(null===f||void 0===f?void 0:f.id)||0,onChange:function(e){x(O(+e.target.value)),C(!1)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),o.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),g&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)("h1",{className:"App__title",children:"Static list of todos"}),Object(m.jsx)(h,{todos:a})]})};i.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4cb918f9.chunk.js.map