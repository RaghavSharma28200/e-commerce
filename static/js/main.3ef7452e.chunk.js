(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{41:function(e,c,s){},60:function(e,c,s){"use strict";s.r(c);var t=s(1),r=s.n(t),a=s(27),n=s.n(a),j=s(8),i=s(2),l=s(0),o=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsx)("div",{className:"footer__logo",children:Object(l.jsx)("div",{className:"logo",children:"E-commerce"})}),Object(l.jsxs)("ul",{className:"footer__nav",children:[Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"#",children:"About us"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"#"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"#",children:"Help"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"#",children:"Contact us"})})]}),Object(l.jsx)("p",{className:"footer__copyright",children:"\xa9 by Kuldeep Shobhit & Raghav. All rights reserved."})]})})},d=(s(41),s(30)),b=s(29),h=s.n(b),x=s(10),O=function(e){var c=e.name,s=e.rating,t=e.price,r=e.pic,a="".concat(c.split(" ").slice(0,5).join(" ").replace(/<.+?>/g,""),"...");return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"card-wrapper",children:[Object(l.jsx)("div",{className:"card-img-wrapper",children:Object(l.jsx)("img",{src:r,alt:"no-pic",className:"card-img"})}),Object(l.jsx)("p",{className:"product-title",children:a}),Object(l.jsxs)("p",{className:"product-price",children:["Price: \u20b9",t]}),Object(l.jsx)("p",{className:"product-rating",id:"rating",children:Object(l.jsxs)("span",{className:"product-rating-span",children:[s,Object(l.jsx)(x.a,{className:"star"})]})})]})})},m=function(e){var c=e.data;return console.log(c),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"flex",children:Array.from(c).map((function(e){return Object(l.jsx)(O,{name:e.name,pic:e.images[0].url,rating:e.ratings,price:e.price},e._id)}))})})};var u=function(){var e=Object(t.useState)(""),c=Object(d.a)(e,2),s=c[0],r=c[1];return Object(t.useEffect)((function(){console.log("button clicked "),h.a.get("https://kulshoragecommerce.herokuapp.com/allProducts").then((function(e){console.log(e.data),r(e.data)}))}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(m,{data:s})})},p=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("nav",{className:"header",children:[Object(l.jsx)("div",{className:"logo",children:"E-commerce"}),Object(l.jsxs)("div",{className:"input",children:[Object(l.jsx)("input",{className:"search",type:"text",placeholder:"Search Your Products here..."}),Object(l.jsxs)("button",{className:"search-btn",children:[" ",Object(l.jsx)(x.b,{})," "]})]}),Object(l.jsx)("div",{children:Object(l.jsxs)("ul",{className:"options",children:[Object(l.jsxs)("li",{className:"options-feature",children:[" ",Object(l.jsx)(j.c,{className:"links",to:"#",children:"Login"})," "]}),Object(l.jsxs)("li",{className:"options-feature",children:[" ",Object(l.jsx)(j.c,{className:"links",to:"#",children:"Sign up"})]}),Object(l.jsxs)("li",{className:"options-feature",children:[" ",Object(l.jsxs)(j.c,{className:"links",to:"#",children:[" ",Object(l.jsx)(x.c,{})]})]})]})})]}),Object(l.jsxs)("div",{className:"res",children:[Object(l.jsx)("input",{className:"responsive-search search",type:"text",placeholder:"Search Your Products here..."}),Object(l.jsxs)("button",{className:"search-btn",children:[" ",Object(l.jsx)(x.b,{})," "]})]})]})};var g=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)(p,{}),Object(l.jsx)(i.c,{children:Object(l.jsx)(i.a,{exact:!0,path:"/",children:Object(l.jsx)(u,{})})}),Object(l.jsx)(o,{})]})})};n.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.3ef7452e.chunk.js.map