(this.webpackJsonpprintservice=this.webpackJsonpprintservice||[]).push([[0],{11:function(A,e,n){"use strict";n.r(e);var t,d=n(0),i=(n(2),n(1)),o=n.n(i),r=(n(9),function(A){A&&A instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(e){var n=e.getCLS,t=e.getFID,d=e.getFCP,i=e.getLCP,o=e.getTTFB;n(A),t(A),d(A),i(A),o(A)}))}),c=(n(10),function(A){3==A.id?(document.getElementById("deliveryCheck").disabled=!0,document.getElementById("deliveryCheck").checked=!1,document.getElementById("deliveryText").style.color="#868686"):(document.getElementById("deliveryCheck").disabled=!1,document.getElementById("deliveryText").style.color="#000000"),o.a.findDOMNode(document.getElementById("b1")).disabled=!1;var e=document.getElementById(A.id);null==t&&(t=A.id),A.id===t&&(o.a.findDOMNode(e).style.backgroundColor="#5abdff",o.a.findDOMNode(e).style.borderColor="#5abdff",o.a.findDOMNode(e).setAttribute("name","selected")),A.id!==t&&(o.a.findDOMNode(document.getElementById(t)).style.backgroundColor="#cdecff",o.a.findDOMNode(document.getElementById(t)).style.borderColor="#cdecff",o.a.findDOMNode(document.getElementById(t)).removeAttribute("name"),o.a.findDOMNode(e).style.backgroundColor="#5abdff",o.a.findDOMNode(e).style.borderColor="#5abdff",o.a.findDOMNode(e).setAttribute("name","selected"),t=A.id)}),l=function(A){var e=A.id,n=A.name,i=A.price,o=A.img;return Object(d.jsxs)("button",{id:e,name:t,className:"tc b--lightest-blue bg-lightest-blue ba dib br3 pa3 ma2 grow shadow-5",onClick:function(A){return c({id:e})},children:[Object(d.jsx)("img",{alt:"print",src:o}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:n}),Object(d.jsx)("p",{children:i})]})]})},a=n.p+"static/media/printer200.8ba8f540.png",j=n.p+"static/media/copier200.918c6bb9.png",W=n.p+"static/media/scanner200.6acdaf47.png",m=function(A){var e=document.getElementsByName("selected"),n=document.getElementById("input1").value,t=document.getElementById("deliveryCheck").checked?30:0,d=document.getElementById("result"),i=document.getElementById("pricedesc"),o=e.length,r=n;0===o&&alert("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0441\u043b\u0443\u0433\u0443"),0!==o&&""===r&&alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u0438\u0441\u0442\u043e\u0432"),0!==o&&""!==r&&(1!=e[0].id&&2!=e[0].id||(console.log(n),n>=1&&n<=10&&(d.innerHTML="\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0438 \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u0442: "+(5*n+t)+" \u0440\u0443\u0431.",i.innerHTML="\ud83d\udcc41-10 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 5 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc411-50 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 4 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc451+ \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 3 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442."),n>=11&&n<=50&&(d.innerHTML="\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0438 \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u0442: "+(4*n+t)+" \u0440\u0443\u0431.",i.innerHTML="\ud83d\udcc41-10 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 5 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc411-50 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 4 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc451+ \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 3 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442."),n>=51&&n<=500&&(d.innerHTML="\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0438 \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u0442: "+(3*n+t)+" \u0440\u0443\u0431.",i.innerHTML="\ud83d\udcc41-10 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 5 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc411-50 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 4 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc451+ \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 3 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442."),(n<1||n>500)&&(d.innerHTML="",alert("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u043e\u0442 1 \u0434\u043e 500"),i.innerHTML="\ud83d\udcc41-20 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 12 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc421-50 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 10 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc451+ \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 8 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442.")),3==e[0].id&&(n>=1&&n<=20&&(d.innerHTML="\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0438 \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u0442: "+(12*n+t)+" \u0440\u0443\u0431.",i.innerHTML="\ud83d\udcc41-20 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 12 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc421-50 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 10 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc451+ \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 8 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442."),n>=21&&n<=50&&(d.innerHTML="\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0438 \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u0442: "+(10*n+t)+" \u0440\u0443\u0431.",i.innerHTML="\ud83d\udcc41-20 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 12 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc421-50 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 10 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc451+ \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 8 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442."),n>=51&&n<=500&&(d.innerHTML="\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0438 \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u0442: "+(8*n+t)+" \u0440\u0443\u0431.",i.innerHTML="\ud83d\udcc41-20 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 12 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc421-50 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 10 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc451+ \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 8 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442."),(n<1||n>500)&&(d.innerHTML="",alert("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u043e\u0442 1 \u0434\u043e 500"),i.innerHTML="\ud83d\udcc41-20 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 12 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc421-50 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 10 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442,\n        \ud83d\udcc451+ \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - 8 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442.")),window.scrollTo(0,document.body.scrollHeight))},T=function(A){var e=A.printServices;return Object(d.jsxs)("div",{children:[Object(d.jsx)(l,{id:e[0].id,name:e[0].name,price:e[0].price,img:a}),Object(d.jsx)(l,{id:e[1].id,name:e[1].name,price:e[1].price,img:j}),Object(d.jsx)(l,{id:e[2].id,name:e[2].name,price:e[2].price,img:W}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{id:"input1",className:"pa3 ba b--light-blue br3 ma2 bg-lightest-blue shadow-5",type:"number",max:"500",placeholder:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446"}),Object(d.jsxs)("div",{className:"form-check",children:[Object(d.jsx)("input",{type:"checkbox",className:"form-check-input pa3 ba b--light-blue br3 ma2 bg-lightest-blue shadow-5",id:"deliveryCheck"}),Object(d.jsx)("label",{className:"form-check-label",htmlFor:"deliveryCheck",id:"deliveryText",children:"\ud83d\ude9a \u041d\u0443\u0436\u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043e \u0434\u0432\u0435\u0440\u0438"})]})]}),Object(d.jsx)("button",{id:"b1",className:"tc b--light-blue bg-light-blue ba dib br3 pa3 ph4 ma3 grow shadow-5",onClick:function(A){return m(A)},children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c"}),Object(d.jsx)("p",{id:"result"}),Object(d.jsx)("p",{id:"pricedesc"})]})},b=[{id:1,name:"\u041f\u0435\u0447\u0430\u0442\u044c",price:"\u043e\u0442 3 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442",img:"./img/printer200.png"},{id:2,name:"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",price:"\u043e\u0442 3 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442",img:"./img/copier200.png"},{id:3,name:"\u0421\u043a\u0430\u043d",price:"\u043e\u0442 8 \u0440\u0443\u0431/\u043b\u0438\u0441\u0442",img:"./img/scanner200.png"}],U=function(){return Object(d.jsxs)("div",{className:"footer",children:["\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c:",Object(d.jsxs)("p",{children:[Object(d.jsx)("a",{if:"img_footer",class:"tc ma1",href:"https://vk.com/print_romantic",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{src:"data:image/png;base64,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",alt:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0412\u041a",title:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0412\u041a"})}),Object(d.jsx)("a",{if:"img_footer",class:"tc ma1",href:"https://t.me/print_romantic",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAJ17AACdewE8n3fEAAAAB3RJTUUH5AcRDBonB7mpCgAABYNJREFUWMOdl2uIVVUUx39r3zMP59GMOqOOj9EGU8eBBt9mVpaQgn4IiQg0DDIKH5WQUdDHvoQFCRUhBCk9jCIQgtJEy1AcjcKsZnwz1xkdJ8fHzNy5zr3n7NWHc+7c972Ti7tZ7HPP3uu/12Ov/xGKyJLvOlEICTIHWAE8DLQCjUBV8FoECAOngWPAEaAD8NrWNRbcX/L9sfCbywAhEVkIbBCRtSIyDQgVwewBXcD3wOfAqUJAsgDM/zaM2DggDcA2EdmEUC8I/s9fIpIXe6r8C3wG7AK6sZa2p2fkB9D69XlCalB0noi8j7BCEMllOFMXkaPA64E3SPXGyOrWr84FRnQFyIci0lLI4D0AaQe2AocFOBGAEIDWL8+jagHmi7AXpMXfTyimR7wzuvC0AxuA3zGGtqemYgA862LVNqjqTlVtUVUSwxbRI8NmzFVzAWgG3gMmY60PtmXv36hVIyHzjsBbQchJ14VPeg/h2YnKm4hao6ogLFbVFzJPkBw2qW3GPIe21uIGw/eWzfTKRkSXADie6xkTMuuBCQVTSMkq2sSjhPbUfzqu3KHpvlIG45ZL/XE0e+0EEdmoljYHQ7Oqrk3dThEkoVVRSZmnaIKZtVAWMsyuLWP55Eoem1LJAzWlXO6P8cqvPfQNWz/Z0uE/iUizo6qPK0wbOUnmsfKIpyCijC93WDSxkiemVfHQpArGliUvSqsQ84IwZvhLoVFglaOqy4BQMYOAH0+g1Bhm1Zbx+NRqVk6rZtbYMkpM9uKbd12GXA8UbPa5QsAyR622Zh87A21guKbUYcHEClbNqGH55CrqxzgjJz1zI8r4MQ6TK0tGAPQMuQy7FpNaBWlba7OjqmldIvV/DZKqobKUR6dWs6aplnn1FZQ7yYjeGfbYd+4W1yJxtrbWp3mg766LtRYxAipZ8VVodKxqVWbIE4abastZfX8ta5rGMrO2jFBGPbffvMuuP67jGOHtxQ3UBR5J7NHZH8NTxWTcSSm2qhz/Ck5394TKUp6dU8e6WeNorC7Lim3Utey/eItP/7rBg3UVvLFoEhMrStLf8SxdAzFQxSpZ1ZMQR1UHSRILrMK48hDLp1TTUFmahbyjL8ruM70c6uznmdnj2L5gElUl2RTh9rBHz1AMUHLfygoqg46qhlHmIr7bRKD9RoQXD5xncUM1j0ytYWZtOSEjnOoZZF9HHz2ROBtb6nltQQOVJSbX7lyPxLkZdUH9AswjYQc4rehcND06t6IuP1y6xcHLtxlTYjAiRF2La2Hl9JqCxgHCAzGG4l5gPO/l1m6A4/g0KkiexJ2tGL8WiMY9IjEPVUVQInGPvmicQnI9EsP1bHqnTO+YnqoeN/gE8kpWhPK0WQFOXh1gy6GLHOq8jWuzHazAxdt38VKaUI4RVtUDRpV2fAKZU5TsjgjKn70Rth++zLttXVyLxNLWDMUtnf3Dfvzzd86DIrQbESzwBdBLEUn3hDIwHGf36R62/HSRo1138IJ0vxGN0z0wHFRATjLTq6p7XNezoZo1mwCuAnX4nH/UIgE16x6IcSR8h/6YxTHC/gt9HOseyMeKAD4yxuxRVRWAxo9PAEzB5/Er/g+INDgC5Y4hZpMlncWOkF8QWQ90X9g0z2/TFgvQDewA/rk3AL57o3GLtXZknpHMHYruUGu7resC+AC6Ni9L7PIbsA2fvd6jpFePTVbRWVV91bP2lKpy6eVFSQAA4c1LA9LAYWA98DMUusSKwkhku6rqUVV9zrP2oChcemlhSuAypPGTkwSUuQHYDjwP1I/SbqYkPs0+wE90wpuXpr2QlwMFiRkCFgUgVgGj/Ti9AhwA9gAnAS/TcFEAOYDMBlbjl+psYDrJLjqI/3negf95/iNwtpDhhPwHXKSWvIa519kAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMTdUMTI6MjY6MzgrMDA6MDApvAqwAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTE3VDEyOjI2OjM4KzAwOjAwWOGyDAAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA1MTKPjVOBAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADUxMhx8A9wAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTU5NDk4ODc5ONgfa4YAAAATdEVYdFRodW1iOjpTaXplADMzMjEzQkLEKI0wAAAASXRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8uL3VwbG9hZHMvNTYvQmVpSDI2Uy8yNDI5L3RlbGVncmFtX2xvZ29faWNvbl8xNDcyMjgucG5n6mgsFAAAAABJRU5ErkJggg==",alt:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432 \u0442\u0435\u043b\u0435\u0433\u0440\u0430\u043c",title:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432 \u0442\u0435\u043b\u0435\u0433\u0440\u0430\u043c"})}),Object(d.jsx)("a",{if:"img_footer",class:"tc ma1",href:"mailto:print_romantic@mail.ru",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAt9QTFRFAAAAUXWoU3emUHWoUXWpUXamUXWnT3eqT3WqU3OmUXapUnSoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXSnUXWoUXWoUXWoUXWoUXWpUXWoUXWoUXWoUXWoUXWoUXWoUXapUXWoUXaoUXWoUnSoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUXWoUHSnTnOnT3OnT3SnUHSoY4OxhJ7CobTQt8bbuMfcp7nTiaHEZYWybIq1r8DX5ery/Pz9/P39+fr8+vv8/f3+/f7+5+zzrb7WY4SxUHWoU3aplKrK+/z90tzpn7PPgZvAd5O7eJS7hZ7C4ujw////1t7qco+4UnapnLHO9/n76O3zk6nJWnysTnKmTHGlTHGmTXKmucfc2uLtZ4az9vj64+nxWHqrepW8tsXbtcTanbHOdpO7W32tws/hrr/X3eTu+Pn7iKHETnOmfZi+y9bl9vj77fH2cI23dpK69Pb5v83fVHeqkKfI7vL37vH2xNDh4efwa4m1VXiqz9nniqLEVnmrzdfm/v7+h6DDfJe90drodJG5WXusma7Maom06+/1xtLj5uvyb423VnmqztjmuMbbe5a919/rV3qr8PP3qLrUZoaz6O30m7DNvcrelavKfJe+1N3pVHepi6PFg53BX4Cv3+Xv2ODskqjIj6bHcpC5/v7/zNfmWHusboy38PP4cY+48fT4jaXGmq/M+fv8kKfHmK7Mf5m/0dvol6zLUnWotsXaqbrUwM3g/P3+6Ozz3uXuZoayoLTQwc7ghp/CU3eppbfSnLDNbIu2XH6uydTkZISx2uLs2+Ltk6rJZISyaYi0usjc9/j76e700Nnnu8ndxtLi3OPu9vf66u/1fpm+sMDXwM3fZYSyZoWyXH2tEiG71gAAAER0Uk5TAAAAAAAAAAAAAAAAAypyrdX0864rOZjf/BqK6hk1wf6/MkbY1kIbwAICOuk4ApLea6Xy1AKTAoUCvr3TMT4zhjeUp2wJQilfAAAAAWJLR0RpvGvEtAAAAAlwSFlzAAAwngAAMJ4BrsOGwQAAArNJREFUOMtjYIACRh5ePn4BQRcXIQFhPhEeRgZUwMgjKiYu4QIFEuJioihKmBglpaRdUIC0lAwjE0yemVFWTt4FDcgrKLKwQo1nVFJ2wQJUVBnZQPLsjLJweVc3N1dXdzdXCE9AlpEDZICaOlTaw9PL28fXzz8g0AWiRF0N6FJGDSmYfFBwSGhYeERkVHRMrAdYSEqTkYFRC+L+uPiE6MSk5JTUtHT/jMysbLAKbR1GBl0xiP6c3Lz8gsKi4pLS0mKvsqjyCrAtepoMIuJgefeAyqo0N7fqmuTauvqGxqbMZrCwvggDHzj8XL1aWtvaPTs6uzKBoLunty8abISEAQM/xID6zP4JrhMnZU6eUjs1s3va9BmZM91AEoYMAmAFs2bPmVsyrztz/oJ4d9/MrIUefpmL2sFhwSAE9uHi7iUVE5ZmLlte5LJiZeYqF1dfqAIhBrABbqsT16xdvi5zvbuL64aNmZvcXDZnbgErcIEq2Bq6bfuOyMgAN5eiLZGJO0t37e5Kc4coEIIoSNwza2/mnH3FRfszMictLll04OChOJCMEcSRHoePTFp89FjmnuMnMhJP9p06PenYGYgBxlBvHjqbee78hQOZczLzLl7KvDznynFoBBlCA8p9UebVa43Xz2bduHmr4nbtnbvQGAcGFCSoPe+tzLz/oHR6dby7Z1Gpq5sH1ABgUJtAIstj+cPMR4+fTPe81bjgzC14qjI1Y2AU1YaoePrsedSLl69ev3n77i7MAFB0M2pCE4zH9Pcf1iyZ3N3yseCeJ1SBuQUoSclYQrnurgs/fQ78kuMGk7eSYQRnCkUBmJVxrq6unnAHWNswcoKSNRujKlwFMrC2ZYTmLi5GO3UMaXlLG2ZueM7EzHra9jIQ8+GZ18EUOfM6OmDJ37wGhgLAuBVScXJGyv4AnAUu7DDsn3cAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDUtMjJUMTc6NDI6MTQrMDE6MDBtDSJoAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA1LTIyVDE3OjQyOjE0KzAxOjAwHFCa1AAAAEZ0RVh0c29mdHdhcmUASW1hZ2VNYWdpY2sgNi43LjgtOSAyMDE5LTAyLTAxIFExNiBodHRwOi8vd3d3LmltYWdlbWFnaWNrLm9yZ0F74sgAAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6aGVpZ2h0ADUxMsDQUFEAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANTEyHHwD3AAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNTU4NTQzMzM02XOyuwAAABN0RVh0VGh1bWI6OlNpemUAMzAuN0tCQpgl4ykAAABPdEVYdFRodW1iOjpVUkkAZmlsZTovLy4vdXBsb2Fkcy81Ni9MRGo4aUM1LzE5NDUvaWNvbmZpbmRlci1lbWFpbC00NjYxNTk0XzEyMjQ2Ni5wbmc/OKfjAAAAAElFTkSuQmCC",alt:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430 \u043f\u043e\u0447\u0442\u0443",title:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430 \u043f\u043e\u0447\u0442\u0443"})})]})]})},H=function(){return Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"mb1",children:'\u041f\u0435\u0447\u0430\u0442\u044c \u0432 \u0416\u041a "\u042f - \u0420\u043e\u043c\u0430\u043d\u0442\u0438\u043a"'}),Object(d.jsx)(T,{printServices:b}),Object(d.jsx)(U,{})]})};o.a.render(Object(d.jsx)(H,{}),document.getElementById("root")),r()},9:function(A,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.4417d2b6.chunk.js.map