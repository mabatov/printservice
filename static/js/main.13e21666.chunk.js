(this.webpackJsonpprintservice=this.webpackJsonpprintservice||[]).push([[0],{11:function(e,n,t){"use strict";t.r(n);var i,r=t(0),c=(t(2),t(1)),d=t.n(c),l=(t(9),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,12)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,c=n.getLCP,d=n.getTTFB;t(e),i(e),r(e),c(e),d(e)}))}),a=(t(10),function(e){3==e.id?(document.getElementById("deliveryCheck").disabled=!0,document.getElementById("deliveryCheck").checked=!1,document.getElementById("deliveryText").style.color="#868686"):(document.getElementById("deliveryCheck").disabled=!1,document.getElementById("deliveryText").style.color="#000000"),d.a.findDOMNode(document.getElementById("b1")).disabled=!1;var n=document.getElementById(e.id);null==i&&(i=e.id),e.id===i&&(d.a.findDOMNode(n).style.backgroundColor="#5abdff",d.a.findDOMNode(n).style.borderColor="#5abdff",d.a.findDOMNode(n).setAttribute("name","selected")),e.id!==i&&(d.a.findDOMNode(document.getElementById(i)).style.backgroundColor="#cdecff",d.a.findDOMNode(document.getElementById(i)).style.borderColor="#cdecff",d.a.findDOMNode(document.getElementById(i)).removeAttribute("name"),d.a.findDOMNode(n).style.backgroundColor="#5abdff",d.a.findDOMNode(n).style.borderColor="#5abdff",d.a.findDOMNode(n).setAttribute("name","selected"),i=e.id),null!=i&&document.getElementById("input1").focus()}),o=function(e){var n=e.id,t=e.name,c=e.price,d=e.img;return Object(r.jsxs)("button",{id:n,name:i,className:"tc b--lightest-blue bg-lightest-blue ba dib br3 pa3 ma2 grow shadow-5",onClick:function(e){return a({id:n})},children:[Object(r.jsx)("img",{alt:"print",src:d}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:c})]})]})},s=t.p+"static/media/printer200.8ba8f540.png",m=t.p+"static/media/copier200.918c6bb9.png",b=t.p+"static/media/scanner200.6acdaf47.png",u=function(e){console.log(window.innerHeight);var n=document.getElementsByName("selected"),t=document.getElementById("input1").value,i=document.getElementById("deliveryCheck").checked?30:0,r=document.getElementById("result"),c=document.getElementById("pricedesc"),d=n.length,l=t;0===d&&alert("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0441\u043b\u0443\u0433\u0443"),0!==d&&""===l&&alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u0438\u0441\u0442\u043e\u0432"),0!==d&&""!==l&&(1!=n[0].id&&2!=n[0].id||(console.log(t),t>=1&&t<=10&&(r.innerHTML="\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0438 \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u0442: "+(5*t+i)+" \u0440\u0443\u0431.",c.innerHTML="\ud83d\udcc41-10 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 5 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442\n        \ud83d\udcc411-50 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 4 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc451+ \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 3 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442."),t>=11&&t<=50&&(r.innerHTML="\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0438 \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u0442: "+(4*t+i)+" \u0440\u0443\u0431.",c.innerHTML="\ud83d\udcc41-10 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 5 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442\n        \ud83d\udcc411-50 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 4 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc451+ \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 3 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442."),t>=51&&t<=500&&(r.innerHTML="\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0438 \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u0442: "+(3*t+i)+" \u0440\u0443\u0431.",c.innerHTML="\ud83d\udcc41-10 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 5 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442\n        \ud83d\udcc411-50 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 4 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc451+ \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 3 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442."),(t<1||t>500)&&(r.innerHTML="",alert("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u043e\u0442 1 \u0434\u043e 500"),c.innerHTML="\ud83d\udcc41-20 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 12 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc421-50 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 10 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc451+ \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 8 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442.")),3==n[0].id&&(t>=1&&t<=20&&(r.innerHTML="\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0438 \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u0442: "+(12*t+i)+" \u0440\u0443\u0431.",c.innerHTML="\ud83d\udcc41-20 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 12 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc421-50 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 10 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc451+ \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 8 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442."),t>=21&&t<=50&&(r.innerHTML="\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0438 \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u0442: "+(10*t+i)+" \u0440\u0443\u0431.",c.innerHTML="\ud83d\udcc41-20 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 12 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc421-50 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 10 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc451+ \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 8 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442."),t>=51&&t<=500&&(r.innerHTML="\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0438 \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u0442: "+(8*t+i)+" \u0440\u0443\u0431.",c.innerHTML="\ud83d\udcc41-20 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 12 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc421-50 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 10 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc451+ \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 8 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442."),(t<1||t>500)&&(r.innerHTML="",alert("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u043e\u0442 1 \u0434\u043e 500"),c.innerHTML="\ud83d\udcc41-20 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 12 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc421-50 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 10 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc451+ \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 8 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442.")),window.scrollTo(0,document.body.scrollHeight))},g=function(e){var n=e.printServices;return Object(r.jsxs)("div",{children:[Object(r.jsx)(o,{id:n[0].id,name:n[0].name,price:n[0].price,img:s}),Object(r.jsx)(o,{id:n[1].id,name:n[1].name,price:n[1].price,img:m}),Object(r.jsx)(o,{id:n[2].id,name:n[2].name,price:n[2].price,img:b}),Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{id:"input1",className:"pa3 ba b--light-blue br3 ma2 bg-lightest-blue shadow-5",type:"number",max:"500",placeholder:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446"}),Object(r.jsxs)("div",{className:"form-check",children:[Object(r.jsx)("input",{type:"checkbox",className:"form-check-input pa3 ba b--light-blue br3 ma2 bg-lightest-blue shadow-5",id:"deliveryCheck"}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"deliveryCheck",id:"deliveryText",children:"\ud83d\ude9a \u041d\u0443\u0436\u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043e \u0434\u0432\u0435\u0440\u0438"})]})]}),Object(r.jsx)("button",{id:"b1",className:"tc b--light-blue bg-light-blue ba dib br3 pa3 ph4 ma3 grow shadow-5",onClick:function(e){return u(e)},children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c"}),Object(r.jsx)("p",{id:"result"}),Object(r.jsx)("p",{id:"pricedesc"})]})},h=[{id:1,name:"\u041f\u0435\u0447\u0430\u0442\u044c",price:"\u043e\u0442 3 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442",img:"./img/printer200.png"},{id:2,name:"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",price:"\u043e\u0442 3 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442",img:"./img/copier200.png"},{id:3,name:"\u0421\u043a\u0430\u043d",price:"\u043e\u0442 8 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442",img:"./img/scanner200.png"}],p=function(){return Object(r.jsxs)("div",{className:"footer",children:["\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f:",Object(r.jsx)("a",{href:"https://vk.com/print_romantic",target:"_blank",rel:"noreferrer",title:"VK",children:" VK "}),Object(r.jsx)("a",{href:"https://t.me/print_romantic",target:"_blank",rel:"noreferrer",title:"Telegram",children:"TG"}),Object(r.jsx)("a",{href:"mailto:print_romantic@mail.ru",title:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0438\u0441\u044c\u043c\u043e",children:" \u2709\ufe0f"})]})},j=function(){return Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"mb1",children:'\u041f\u0435\u0447\u0430\u0442\u044c \u0432 \u0416\u041a "\u042f - \u0420\u043e\u043c\u0430\u043d\u0442\u0438\u043a"'}),Object(r.jsx)(g,{printServices:h}),Object(r.jsx)(p,{})]})};d.a.render(Object(r.jsx)(j,{}),document.getElementById("root")),l()},9:function(e,n,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.13e21666.chunk.js.map