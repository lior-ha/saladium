(this.webpackJsonpsaladium=this.webpackJsonpsaladium||[]).push([[0],Array(22).concat([function(e){e.exports=JSON.parse('{"items":[{"name":"cucumber","price":0.5},{"name":"tomato","price":0.6},{"name":"egg","price":3},{"name":"tuna","price":2},{"name":"potato","price":1.2},{"name":"lettuce","price":0.2},{"name":"corn","price":2},{"name":"onion","price":0.3},{"name":"mushroom","price":2.5},{"name":"pasta","price":4},{"name":"pickles","price":3.3}]}')},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(14),s=n.n(i),r=(n(28),n(29),n(30),n(11)),l=n(3),o=n(23),j=n(10),u=n(5),d=n(22),b={cucumber:"\u05de\u05dc\u05e4\u05e4\u05d5\u05df",tomato:"\u05e2\u05d2\u05d1\u05e0\u05d9\u05d4",egg:"\u05d1\u05d9\u05e6\u05d4",tuna:"\u05d8\u05d5\u05e0\u05d4",potato:"\u05ea\u05e4\u05d5\u05d7 \u05d0\u05d3\u05de\u05d4",lettuce:"\u05d7\u05e1\u05d4",corn:"\u05ea\u05d9\u05e8\u05e1",onion:"\u05d1\u05e6\u05dc",mushroom:"\u05e4\u05d8\u05e8\u05d9\u05d5\u05ea",pasta:"\u05e4\u05e1\u05d8\u05d4",pickles:"\u05d7\u05de\u05d5\u05e6\u05d9\u05dd"},m=d.items.map((function(e){var t=b[e.name];return Object(u.a)(Object(u.a)({},e),{},{amount:0,label:t})})),O={ingredients:m,totalPrice:0},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_AMOUNT":var n=e.ingredients.map((function(e){return e.name===t.payload.type&&e.amount+t.payload.amount>=0?Object(u.a)(Object(u.a)({},e),{},{amount:e.amount+t.payload.amount}):e}));return Object(u.a)(Object(u.a)({},e),{},{ingredients:n,totalPrice:e.totalPrice+m.find((function(e){return e.name===t.payload.type})).price*t.payload.amount});case"RESET":return Object(u.a)({},O);default:return e}},x=n(6),p=(n(36),n(0)),f=function(e){return Object(p.jsx)("li",{className:"navItem",children:Object(p.jsx)(r.c,{to:e.link,exact:!0,children:e.children})})},g=(n(42),function(){return Object(p.jsx)("nav",{className:"nav",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)(f,{link:"/",exact:!0,children:"\u05d3\u05e3 \u05d4\u05d1\u05d9\u05ea"}),Object(p.jsx)(f,{link:"/buildSalad",children:"\u05d1\u05e0\u05d9\u05d9\u05ea \u05e1\u05dc\u05d8"}),Object(p.jsx)(f,{link:"/about-us",children:"\u05e2\u05dc\u05d9\u05e0\u05d5"}),Object(p.jsx)(f,{link:"/contact-us",children:"\u05e6\u05d5\u05e8 \u05e7\u05e9\u05e8"})]})})}),v=n.p+"static/media/salad-logo.ca722b43.svg",N=(n(43),function(){return Object(p.jsxs)("div",{className:"logo",children:[Object(p.jsx)("img",{className:"logoImg",alt:"\u05e1\u05dc\u05d3\u05d9\u05d5\u05dd",src:v})," ",Object(p.jsx)("a",{href:"/",children:"\u05e1\u05dc\u05d3\u05d9\u05d5\u05dd"})]})}),k=(n(44),function(e){return Object(p.jsxs)("div",{className:"sideDrawerToggler",onClick:e.clicked,children:[Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{})]})}),y=(n(45),function(e){return Object(p.jsxs)("header",{className:"toolbar",children:[Object(p.jsx)(k,{clicked:e.closed}),Object(p.jsx)("div",{className:"sideBarOpener"}),Object(p.jsx)(g,{}),Object(p.jsx)(N,{})]})}),C=(n(46),function(e){return e.show?Object(p.jsx)("div",{className:"backdrop",onClick:e.clicked}):null}),S=(n(47),function(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(C,{show:e.open,clicked:e.closed}),Object(p.jsxs)("div",{className:"sideDrawer ".concat(e.open?"open":"closed"),children:[Object(p.jsx)(N,{}),Object(p.jsx)(g,{})]})]})}),w=(n(48),function(e){var t=Object(c.useState)(!1),n=Object(x.a)(t,2),a=n[0],i=n[1],s=function(){i(!a)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(S,{open:a,closed:s}),Object(p.jsx)(y,{closed:s}),Object(p.jsx)("main",{className:"content",children:e.children})]})}),I=(n(49),function(e){var t=e.title,n=e.image;return Object(p.jsx)("div",{className:"heroWrapper",style:{backgroundImage:"url(".concat(n,")")},children:Object(p.jsx)("div",{className:"hero",children:Object(p.jsxs)("div",{className:"heroBox",children:[Object(p.jsx)("h1",{children:t}),Object(p.jsx)(r.b,{to:"/buildSalad",className:"cpa",children:"\u05e9\u05e0\u05ea\u05d7\u05d9\u05dc?"})]})})})}),P=n.p+"static/media/salad-hero.ca3a2af7.jpeg",F=(n(50),function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(I,{title:"\u05dc\u05d0 \u05e1\u05ea\u05dd, \u05e1\u05dc\u05d8!",image:P}),Object(p.jsxs)("div",{className:"homepage",children:[Object(p.jsx)("p",{children:"\u05d9\u05e8\u05e7\u05d5\u05ea \u05d8\u05e8\u05d9\u05d9\u05dd \u05d9\u05e9\u05e8 \u05de\u05d2\u05d9\u05e0\u05ea \u05d4\u05d9\u05e8\u05e7 \u05e9\u05dc\u05e0\u05d5!"}),Object(p.jsx)("p",{children:"\u05d7\u05d9\u05ea\u05d5\u05da \u05d0\u05d9\u05e9\u05d9 \u05dc\u05db\u05dc \u05e1\u05dc\u05d8!"}),Object(p.jsx)("p",{children:"\u05d5\u05d9\u05d8\u05de\u05d9\u05e0\u05d9\u05dd \u05de\u05d4\u05d8\u05d1\u05e2!"})]})]})}),A=(n(51),function(e){var t=null;switch(e.type){case"cucumber":t="cucumber";break;case"tomato":t="tomato";break;case"egg":t="egg";break;case"tuna":t="tuna";break;case"potato":t="potato";break;case"lettuce":t="lettuce";break;case"corn":t="corn";break;case"onion":t="onion";break;case"mushroom":t="mushroom";break;case"pasta":t="pasta";break;case"pickles":t="pickles";break;default:t=null}var n,c;return e.index<6?(n=120,c=50*e.index+24):e.index<13?(n=70,c=50*(e.index-6)):e.index<20&&(n=20,c=50*(e.index-13)),Object(p.jsx)("div",{className:"ing ".concat(t),style:{right:c+"px",top:n+"px"}})}),E=(n(52),function(e){var t=e.currentIngredients,n=[];return t.forEach((function(e){for(var t=0;t<e.amount;t++)n.push(Object(p.jsx)(A,{index:n.length,type:e.name},e.name+t))})),0===n.length&&(n=Object(p.jsx)("div",{className:"emptyBowl",children:" \u05d0\u05d6... \u05de\u05d4 \u05dc\u05da \u05dc\u05e9\u05d9\u05dd \u05d1\u05e4\u05e0\u05d9\u05dd?"})),Object(p.jsx)("div",{className:"salad",children:Object(p.jsx)("div",{className:"bowl",children:n})})}),T=(n(53),n(54),Object(j.b)(null,(function(e){return{onChangeAmount:function(t,n){return e({type:"CHANGE_AMOUNT",payload:{type:n,amount:t}})}}}))((function(e){return Object(p.jsxs)("div",{className:"control",children:[Object(p.jsx)("span",{className:e.type}),Object(p.jsx)("button",{disabled:!e.disabledInfo,className:"less",onClick:function(){return e.onChangeAmount(-1,e.type)},children:"-"}),Object(p.jsx)("div",{className:"label",children:e.label}),Object(p.jsx)("button",{className:"more",onClick:function(){return e.onChangeAmount(1,e.type)},children:"+"})]})}))),B=function(e){return Object(p.jsxs)("div",{className:"controls",children:[Object(p.jsxs)("p",{className:"totalPrice",children:['\u05e1\u05d4"\u05db \u05dc\u05ea\u05e9\u05dc\u05d5\u05dd: ',Object(p.jsx)("i",{children:e.price.toFixed(2)}),' \u05e9"\u05d7']}),e.ingredients.map((function(e){return Object(p.jsx)(T,{disabledInfo:!!e.amount,label:e.label,type:e.name},e.name)})),Object(p.jsx)("button",{onClick:e.donePrerping,disabled:!e.orderable,className:"orderButton",children:"\u05de\u05ea\u05d0\u05d9\u05dd \u05dc\u05d9!"})]})},D=(n(55),Object(j.b)((function(e){return{ingredients:e.ingredients,currentIngredients:e.ingredients.filter((function(e){return e.amount>0})),totalPrice:e.totalPrice}}),(function(e){return{onChangeAmount:function(t){return e({type:"CHANGE_AMOUNT",payload:{type:t,amount:1}})}}}))((function(e){var t=Object(c.useState)(!1),n=Object(x.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(),r=Object(x.a)(s,2),o=r[0],j=r[1];Object(c.useEffect)((function(){e.totalPrice>0?i(!0):i(!1)}),[e.totalPrice]);return Object(p.jsxs)("div",{className:"builderWrapper",children:[o,Object(p.jsx)(B,{orderable:a,price:e.totalPrice,ingredients:e.ingredients,donePrerping:function(){j(Object(p.jsx)(l.a,{to:"/checkout"}))}}),Object(p.jsx)(E,{currentIngredients:e.currentIngredients})]})}))),H=n(15),L=(n(56),function(e){return Object(p.jsx)("button",{className:"button ".concat(e.type),onClick:e.clicked,children:e.children})}),M=(n(57),function(e){return Object(p.jsxs)("div",{className:"orderSummary",children:[Object(p.jsx)("h3",{className:"title",children:"\u05d1\u05d3\u05e8\u05da \u05d0\u05dc\u05d9\u05da!"}),Object(p.jsxs)("p",{children:["\u05d4\u05d9\u05d9 ",e.name,"!"]}),Object(p.jsx)("p",{children:"\u05ea\u05d5\u05d3\u05d4 \u05e9\u05d4\u05d6\u05de\u05e0\u05ea\u05dd \u05de\u05e1\u05dc\u05d3\u05d9\u05d5\u05dd! \u05d4\u05e1\u05dc\u05d8 \u05d4\u05de\u05e2\u05d5\u05dc\u05d4 \u05e9\u05d4\u05e8\u05db\u05d1\u05ea\u05dd \u05d1\u05d3\u05e8\u05da \u05d0\u05dc\u05d9\u05db\u05dd!"}),Object(p.jsx)("p",{children:"\u05d1\u05d9\u05e0\u05ea\u05d9\u05d9\u05dd, \u05d4\u05e0\u05d4 \u05de\u05d4 \u05e9\u05e9\u05de\u05ea\u05dd \u05d1\u05e1\u05dc\u05d8 \u05e9\u05dc\u05db\u05dd:"}),Object(p.jsx)("ul",{children:e.ingredients}),Object(p.jsxs)("p",{children:["\u05d5\u05d2\u05dd \u05d9\u05e6\u05d0 \u05dc\u05d0 \u05d9\u05e7\u05e8! \u05e8\u05e7 ",e.price.toFixed(2),' \u05e9"\u05d7']}),Object(p.jsxs)("div",{className:"btnWrapper",children:[Object(p.jsx)(L,{type:"approve",clicked:e.clicked,children:"\u05d0\u05d9\u05d6\u05d4 \u05db\u05d9\u05e3, \u05d0\u05e0\u05d9 \u05e8\u05d5\u05e6\u05d4 \u05e9\u05d5\u05d1!"}),Object(p.jsx)(L,{type:"back",clicked:e.toggleOrderSummary,children:"\u05d0\u05e0\u05d9 \u05e8\u05d5\u05e6\u05d4 \u05d7\u05d6\u05e8\u05d4 \u05dc\u05d7\u05e9\u05d1\u05d5\u05df"})]})]})}),W=(n(58),function(e){return Object(p.jsx)("form",{onSubmit:e.submit,className:e.classes,children:e.children})}),G=n(20),J=(n(59),function(e){var t=e.handleChange,n=e.label,c=Object(G.a)(e,["handleChange","label"]);return Object(p.jsxs)("div",{className:"formInputSet textArea",children:[Object(p.jsx)("textarea",Object(u.a)({className:"formInput",onChange:t},c)),n?Object(p.jsx)("label",{className:"".concat(c.value?"shrink":""," inputLabel"),children:n}):null]})}),U=function(e){var t=e.handleChange,n=e.ltr,c=e.label,a=Object(G.a)(e,["handleChange","ltr","label"]);return Object(p.jsxs)("div",{className:"formInputSet",children:[Object(p.jsx)("input",Object(u.a)({className:"formInput ".concat(n?"ltr":""),onChange:t},a)),c?Object(p.jsx)("label",{className:"".concat(a.value?"shrink":""," inputLabel"),children:c}):null]})},_=(n(60),function(e){var t=Object(c.useState)(),n=Object(x.a)(t,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){i(window.innerHeight/2-document.querySelector(".modal").offsetHeight/2)}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(C,{show:e.show,clicked:e.modalClosed}),Object(p.jsx)("div",{className:"modal ".concat(e.show?"show":""),style:{top:a},children:e.children})]})}),R=a.a.memo(_),q=n.p+"static/media/utensils-solid.df2c19c1.svg",z=(n(61),Object(j.b)((function(e){return{ingredients:e.ingredients,currentIngredients:e.ingredients.filter((function(e){return e.amount>0})),totalPrice:e.totalPrice}}),(function(e){return{resetData:function(){return e({type:"RESET"})}}}))((function(e){var t=Object(c.useState)(!1),n=Object(x.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(!1),r=Object(x.a)(s,2),o=r[0],j=r[1],d=Object(c.useState)(!1),b=Object(x.a)(d,2),m=b[0],O=b[1],h=Object(c.useState)(!1),f=Object(x.a)(h,2),g=f[0],v=f[1],N=Object(c.useState)({name:"",email:"",more:""}),k=Object(x.a)(N,2),y=k[0],C=k[1],S=function(e){var t=e.target,n=t.name,c=t.value;C((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(H.a)({},n,c))}))},w=function(){j(!o)},I=e.currentIngredients.map((function(e){var t=e.amount*e.price;return Object(p.jsxs)("li",{children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:e.label})," - (",e.amount,")"]}),Object(p.jsx)("i",{}),Object(p.jsxs)("p",{children:[t.toFixed(2)," \u20aa"]})]},e.name+"cko")}));return Object(p.jsxs)(p.Fragment,{children:[g,Object(p.jsx)(R,{show:o,modalClosed:w,children:Object(p.jsx)(M,{clicked:function(){j(!o),e.resetData(),v(Object(p.jsx)(l.a,{to:"/"}))},ingredients:I,toggleOrderSummary:w,price:e.totalPrice,name:y.name})}),Object(p.jsx)(R,{show:m,modalClosed:function(){return O(!m)},children:Object(p.jsx)("div",{children:"\u05de\u05dc\u05d0 \u05d1\u05d1\u05e7\u05e9\u05d4 \u05d2\u05dd \u05e9\u05dd \u05d5\u05d2\u05dd \u05d0\u05d9\u05de\u05d9\u05d9\u05dc!"})}),Object(p.jsx)("h1",{className:"title",children:"\u05e8\u05d5\u05e6\u05d9\u05dd \u05d7\u05e9\u05d1\u05d5\u05df?"}),Object(p.jsxs)("div",{className:"checkoutBill",children:[Object(p.jsxs)("div",{className:"innerBox",children:[Object(p.jsx)("p",{className:"billTitle",children:"\u05d0\u05d6 \u05de\u05d4 \u05d4\u05d9\u05d4 \u05dc\u05e0\u05d5?"}),Object(p.jsx)("p",{className:"billSubTitle",children:"\u05d4\u05e1\u05dc\u05d8 \u05d4\u05de\u05d5\u05e9\u05dc\u05dd \u05e9\u05dc\u05da \u05de\u05db\u05d9\u05dc:"}),Object(p.jsx)("ul",{children:I}),Object(p.jsxs)("p",{className:"total",children:['\u05e1\u05d4"\u05db \u05d9\u05e6\u05d0 \u05dc\u05db\u05dd: ',e.totalPrice.toFixed(2),' \u05e9"\u05d7']}),Object(p.jsx)("img",{src:q,className:"utensils",alt:"\u05e1\u05db\u05d5\u05dd"})]}),Object(p.jsx)("div",{className:"formBg ".concat(a&&"on"),onClick:function(){return i(!1)}})]}),Object(p.jsxs)(W,{submit:function(e){e.preventDefault(),y.name&&y.email?w():O(!m)},classes:"form ".concat(a&&"on"),children:[Object(p.jsx)("p",{className:"title",children:"\u05db\u05de\u05d4 \u05e4\u05e8\u05d8\u05d9\u05dd \u05e7\u05d8\u05e0\u05d9\u05dd \u05d5\u05e1\u05d9\u05d9\u05de\u05e0\u05d5"}),Object(p.jsx)(U,{name:"name",label:"\u05e9\u05dd",type:"text",value:y.name,handleChange:S}),Object(p.jsx)(U,{name:"email",label:"\u05d0\u05d9\u05de\u05d9\u05d9\u05dc",type:"email",value:y.email,handleChange:S,ltr:!0}),Object(p.jsx)(J,{name:"more",label:"\u05d4\u05e2\u05e8\u05d5\u05ea",value:y.more,handleChange:S}),Object(p.jsxs)("div",{className:"btnWrapper",children:[Object(p.jsx)(L,{type:"back",clicked:function(e){e.preventDefault(),v(Object(p.jsx)(l.a,{to:"/buildSalad"}))},children:"\u05e8\u05d2\u05e2, \u05dc\u05d0! \u05ea\u05e0\u05d5 \u05dc\u05d9 \u05dc\u05e9\u05e0\u05d5\u05ea \u05de\u05e9\u05d4\u05d5"}),Object(p.jsx)(L,{type:"approve",children:"\u05d9\u05d0\u05dc\u05dc\u05d4 \u05e9\u05dc\u05d7\u05d5 \u05ea'\u05e1\u05dc\u05d8!"})]})]})]})}))),K=(n(62),Object(o.a)(h));var Q=function(){return Object(p.jsx)(j.a,{store:K,children:Object(p.jsx)(r.a,{children:Object(p.jsxs)(w,{children:[Object(p.jsx)(l.b,{exact:!0,path:"/",component:F}),Object(p.jsx)(l.b,{path:"/buildSalad",component:D}),Object(p.jsx)(l.b,{path:"/checkout",component:z})]})})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(Q,{})}),document.getElementById("root")),V()}]),[[63,1,2]]]);
//# sourceMappingURL=main.86336c14.chunk.js.map