(this["webpackJsonpmovies-searcher"]=this["webpackJsonpmovies-searcher"]||[]).push([[0],{14:function(e,t,a){e.exports={menu:"Menu_menu__22vzR",items:"Menu_items__solx1",item:"Menu_item__2abJn","item-active":"Menu_item-active__14opo",language:"Menu_language__3WPhg"}},15:function(e,t,a){e.exports={card:"Card_card__3F8np",title:"Card_title__1yJ7t",image:"Card_image__mj-K7",description:"Card_description__1R2Bi"}},20:function(e,t,a){e.exports={logo:"Header_logo__2ins2",button:"Header_button__3Lscu",text:"Header_text__2ZAsj",burger:"Header_burger__3fb7A"}},23:function(e,t,a){e.exports={history:"History_history___VaPc",list:"History_list__39PZ4",item:"History_item__1Ox5C",link:"History_link__3ZeYM"}},28:function(e,t,a){e.exports={search:"Search_search__kehRK",input:"Search_input__3_v_j",button:"Search_button__Dw0jb"}},29:function(e,t,a){e.exports={cards:"Cards_cards__3vslv",notFound:"Cards_notFound__H6qhA"}},30:function(e,t,a){e.exports={card:"CardInDetails_card__3N5Wj",title:"CardInDetails_title__rQV9U",poster:"CardInDetails_poster__NoHow"}},34:function(e,t,a){e.exports={button:"Button_button__2Ce79",disabled:"Button_disabled__3pwG8"}},35:function(e,t,a){e.exports={footer:"Footer_footer__2NNgL",logo:"Footer_logo__3I7YG",bottom:"Footer_bottom__3EgpM"}},36:function(e,t,a){e.exports={starButton:"AddToFavoritesButton_starButton__3BCkh"}},39:function(e,t,a){e.exports={main:"Main_main__d0wD2"}},4:function(e,t,a){e.exports={overlay:"PopupWithForm_overlay__PULWt",title:"PopupWithForm_title__3m0cL",label:"PopupWithForm_label__xUHo3",open:"PopupWithForm_open__3EqjZ",form:"PopupWithForm_form__138SB","close-button":"PopupWithForm_close-button__1tT1P",field:"PopupWithForm_field__2mUCr",input:"PopupWithForm_input__1vYsB",error:"PopupWithForm_error__24X-a"}},51:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(24),c=a.n(i),s=a(2),o=a(7),u=a(27),l=a(37),A=a(38),d=a(18),O=a(3);var p=function(e,t){switch(t.type){case"INPUT_SEARCH":return Object(O.a)(Object(O.a)({},e),{},{inputSearch:t.payload,history:t.payload?[].concat(Object(d.a)(e.history),[t.payload]):Object(d.a)(e.history)});case"SET_MOVIES":return Object(O.a)(Object(O.a)({},e),{},{movies:t.payload});case"ADD_TO_FAVOURITES":return Object(O.a)(Object(O.a)({},e),{},{favourites:[].concat(Object(d.a)(e.favourites),[t.payload&&t.payload])});case"SET_FAVOURITES":return Object(O.a)(Object(O.a)({},e),{},{favourites:Object(d.a)(t.payload)});case"TOGGLE_AUTH_POPUP":return Object(O.a)(Object(O.a)({},e),{},{popupsIsOpen:{login:!1,auth:!e.popupsIsOpen.auth}});case"TOGGLE_LOGIN_POPUP":return Object(O.a)(Object(O.a)({},e),{},{popupsIsOpen:{auth:!1,login:!e.popupsIsOpen.login}});case"CLOSE_POPUPS":return Object(O.a)(Object(O.a)({},e),{},{popupsIsOpen:{auth:!1,login:!1}});case"CREATE_USER":case"LOGIN":return Object(O.a)(Object(O.a)({},e),{},{user:{name:t.payload.name,email:t.payload.email,password:t.payload.password}});case"LOGOUT":return Object(O.a)(Object(O.a)({},e),{},{user:{name:"",email:"",password:""},favourites:[]});case"LANGUAGE":return Object(O.a)(Object(O.a)({},e),{},{lang:"ru"===e.lang?"eng":"ru"});default:return e}},g=Object(A.composeWithDevTools)(Object(u.applyMiddleware)(l.a)),b=Object(u.createStore)(p,{inputSearch:"",movies:[],favourites:[],user:{name:"",email:"",password:""},popupsIsOpen:{login:!1,auth:!1},history:[],lang:"eng"},g),j=(a(50),a(51),a(6)),m=a(13),v=a.n(m),h=a(17),f=function(){var e=Object(h.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.kinopoisk.dev/v1.3/movie/".concat(t),{headers:{"Content-Type":"application/json","X-API-KEY":"".concat("WXDWKVC-JYG46VR-QKGSN3M-YZPJ050")}});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(h.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,0!==t.length){e.next=7;break}return e.next=4,fetch("https://api.kinopoisk.dev/v1.2/movie/search?page=1&limit=20&query=",{headers:{"Content-Type":"application/json","X-API-KEY":"".concat("WXDWKVC-JYG46VR-QKGSN3M-YZPJ050")}});case 4:a=e.sent,e.next=10;break;case 7:return e.next=9,fetch("https://api.kinopoisk.dev/v1.2/movie/search?page=1&limit=10&query=".concat(t),{headers:{"Content-Type":"application/json","X-API-KEY":"".concat("WXDWKVC-JYG46VR-QKGSN3M-YZPJ050")}});case 9:a=e.sent;case 10:return e.next=12,a.json();case 12:return n=e.sent,e.abrupt("return",n.docs);case 16:return e.prev=16,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{docs:null});case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}();function D(e){return{type:"INPUT_SEARCH",payload:e}}function I(e){var t={user:e,favourites:[]};if(localStorage.getItem(e.email)){var a=JSON.parse(localStorage.getItem(e.email)).favourites;t.favourites=Object(d.a)(a)}return localStorage.setItem(e.email,JSON.stringify(t)),{type:"CREATE_USER",payload:e}}var w=a(39),y=a.n(w),N=a(0);function P(e){var t=e.children;return Object(N.jsx)("div",{className:y.a.main,children:t})}var E=a(8),H={ru:{Search:{input:{placeholder:"\u041f\u043e\u0438\u0441\u043a \u0444\u0438\u043b\u044c\u043c\u043e\u0432 \u0438 \u0441\u0435\u0440\u0438\u0430\u043b\u043e\u0432..."},submit:{title:"\u043d\u0430\u0439\u0442\u0438"}},PopupRegister:{userExist:"User already exists",PopupWithForm:{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",buttonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"},Fields:{labels:{email:"\u042d\u043b. \u043f\u043e\u0447\u0442\u0430",password:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"\u0418\u043c\u044f"},input:{placeholder:{email:"\u0412\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b. \u043f\u043e\u0447\u0442\u044b",password:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",name:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}}}},PopupLogin:{wrongPassword:"\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",userNotFound:"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d",PopupWithForm:{title:"\u0412\u043e\u0439\u0442\u0438",buttonText:"\u0412\u043e\u0439\u0442\u0438"},Fields:{labels:{email:"\u042d\u043b. \u043f\u043e\u0447\u0442\u0430",password:"\u041f\u0430\u0440\u043e\u043b\u044c"},input:{placeholder:{email:"\u0412\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b. \u043f\u043e\u0447\u0442\u044b",password:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}}}},Menu:{NavLink:{"/":"\u0413\u043b\u0430\u0432\u043d\u0430\u044f","/favourites":"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435","/history":"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"}},History:{title:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u043e\u0438\u0441\u043a\u0430"},Header:{Button:{login:"\u0432\u043e\u0439\u0442\u0438",register:"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",logOut:"\u0432\u044b\u0439\u0442\u0438",burger:"\u043c\u0435\u043d\u044e"}},Footer:{caption:"\u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b \xa9 2021."},Cards:{notFound:"\u0424\u0438\u043b\u044c\u043c\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b.."},CardInDetails:{description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:",rating:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433:",year:"\u0414\u0430\u0442\u0430 \u0432\u044b\u0445\u043e\u0434\u0430:",country:"\u0421\u0442\u0440\u0430\u043d\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0430:"},Card:{raiting:"\u0420\u0435\u0439\u0442\u0438\u0433:"},AddToFavouritesButton:{button:{tooltip:{add:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",remove:"\u0443\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e"},img:{add:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",remove:"\u0443\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e"}}}},eng:{Search:{input:{placeholder:"Search films and tv shows..."},submit:{title:"\u043d\u0430\u0439\u0442\u0438"}},PopupRegister:{userExist:"User already exists",PopupWithForm:{title:"Registration",buttonText:"Registration"},Fields:{labels:{email:"Email",password:"Password",name:"Name"},input:{placeholder:{email:"Enter email",password:"Enter password",name:"Enter name"}}}},PopupLogin:{wrongPassword:"wrong password",userNotFound:"user not found",PopupWithForm:{title:"Log in",buttonText:"Log in"},Fields:{labels:{email:"Email",password:"Password"},input:{placeholder:{email:"Enter email",password:"Enter password"}}}},Menu:{NavLink:{"/":"Main","/favourites":"Favourites","/history":"History"}},History:{title:"Search history"},Header:{Button:{login:"login",register:"register",logOut:"log out",burger:"menu"}},Footer:{caption:"All rights reserved \xa9 2021."},Cards:{notFound:"Movies not found.."},CardInDetails:{description:"Description:",rating:"Rating:",year:"Date:",country:"Country:"},Card:{raiting:"Rating:"},AddToFavouritesButton:{button:{tooltip:{add:"add to favorites",remove:"remove from favorites"},img:{add:"add to favorites",remove:"remove from favorites"}}}}};var B=a(14),C=a.n(B);function L(e){var t=e.login,a=e.showMobileMenu,n=function(){var e=r.a.useState(window.innerWidth),t=Object(E.a)(e,2),a=t[0],n=t[1],i=r.a.useState(window.innerHeight),c=Object(E.a)(i,2),s=c[0],o=c[1],u=function(){n(window.innerWidth),o(window.innerHeight)};return r.a.useEffect((function(){return window.addEventListener("resize",u),function(){return window.removeEventListener("resize",u)}}),[]),{width:a,height:s}}(),i=n.width,c=Object(s.c)((function(e){return e.lang})),u=Object(s.b)();return Object(N.jsx)(N.Fragment,{children:!a&&i<980?"":Object(N.jsxs)("menu",{className:C.a.menu,children:[Object(N.jsxs)("ul",{className:C.a.items,children:[Object(N.jsx)("li",{children:Object(N.jsx)(o.b,{exact:!0,to:"/",className:C.a.item,activeClassName:C.a["item-active"],children:H[c].Menu.NavLink["/"]})}),Object(N.jsx)("li",{children:Object(N.jsx)(o.b,{exact:!0,to:"/favourites",className:C.a.item,activeClassName:C.a["item-active"],children:H[c].Menu.NavLink["/favourites"]})}),Object(N.jsx)("li",{children:Object(N.jsx)(o.b,{exact:!0,to:"/history",className:C.a.item,activeClassName:C.a["item-active"],children:H[c].Menu.NavLink["/history"]})}),Object(N.jsx)("li",{children:Object(N.jsx)("button",{type:"button",className:C.a.language,onClick:function(){return u({type:"LANGUAGE"})},children:"ru"===c?"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f":"\ud83c\uddf7\ud83c\uddfa"})})]}),t()]})})}var M=a(28),Q=a.n(M),F=a(16),S=a(41),X=a.n(S),U=a(34),R=a.n(U);function T(e){var t=e.type,a=e.title,n=e.handleClick,r=e.styleClass,i=e.disabled,c=e.children;return Object(N.jsxs)("button",{type:t,className:X()(R.a.button,r,Object(F.a)({},R.a.disabled,i)),onClick:n,disabled:i,children:[a,c]})}function z(){var e=Object(j.g)(),t=Object(n.useState)(""),a=Object(E.a)(t,2),r=a[0],i=a[1],c=Object(s.b)(),o=Object(s.c)((function(e){return e.lang})),u=function(e,t){var a=Object(n.useState)(e),r=Object(E.a)(a,2),i=r[0],c=r[1];return Object(n.useEffect)((function(){var a=setTimeout((function(){c(e)}),t);return function(){clearTimeout(a)}}),[e,t]),i}(r,1e3);Object(n.useEffect)((function(){c(D(u))}),[u]);return Object(N.jsxs)("form",{className:Q.a.search,onSubmit:function(e){e.preventDefault(),c(D(r))},children:[Object(N.jsx)("input",{value:r,onChange:function(e){i(e.target.value)},className:Q.a.input,type:"search",placeholder:H[o].Search.input.placeholder,disabled:"/"!==e.pathname}),Object(N.jsx)(T,{type:"submit",title:H[o].Search.submit.title,styleClass:Q.a.button})]})}T.defaultProps={handleClick:function(){return null},styleClass:null,disabled:null,children:null};var W=a(20),V=a.n(W);function Z(){var e=Object(s.b)(),t=Object(j.g)(),a=Object(n.useState)(!1),r=Object(E.a)(a,2),i=r[0],c=r[1],u=Object(s.c)((function(e){return e.user})),l=Object(s.c)((function(e){return e.lang})),A=function(){e({type:"TOGGLE_AUTH_POPUP"}),c(!1)},d=function(){e({type:"TOGGLE_LOGIN_POPUP"}),c(!1)},O=function(){e({type:"LOGOUT"}),c(!1)};Object(n.useEffect)((function(){return c(!1)}),[t]);return Object(N.jsxs)("header",{children:[Object(N.jsx)(o.b,{exact:!0,to:"/",className:V.a.logo,activeClassName:V.a["item-active"],children:"Moovies"}),Object(N.jsx)(z,{}),Object(N.jsx)(L,{login:function(){return u.name?Object(N.jsx)(T,{type:"button",title:u.name,handleClick:O,styleClass:V.a.button,children:Object(N.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABiklEQVRIie2WuzJDURiF19G5dRJBE2QmKs+gN3qSJ3DpeJhQGKX7bXgAozAMjcygokDFmEgnEZ8if0bEJNnOOVJZ5Tlr/9/+99l7nyX9q0XyXI1An6SUpDFJo5J6JCHpXtKdpENJe57nPYQyMyAGrAAFmqsILAH9QaFx4MWKFoA1YNKetwOdQBKYAlaBN/PmgYmg4CdgF4g7+IeATYOXgDnfcD8C5oF3g/vvPAAc4NU2ZkvhWwZfdB0QBS6Ao4DgYdtwRWDABZq1mZ4GAVu9das14wrNAtEQwGmrd1DPEAEuzXQNxIJCrW7Sat7UM5w3upIa6LgJuNt8+ernbWE0FWz0z6UO5ewBI1bzqpGp9ZurDvwsBHDlOE27mKO22U4CQhO4XiBhCti2bjOthC4YNBfWneAKrfwWx/0UiAPPwA4w6OBPVC1vCZj1O/Pa6LMBpCgnjQ6gy85p2t5VclnOV6c18F5gma881UhFIOPyTX8Tb2P6Hm8jkj5Ujre3Ksfbfc/zHn11+K+/0if+Pp0toR6y4gAAAABJRU5ErkJggg==",alt:H[l].Header.Button.logOut})}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(T,{type:"button",title:H[l].Header.Button.login,handleClick:d}),Object(N.jsx)(T,{type:"button",title:H[l].Header.Button.register,handleClick:A,styleClass:V.a.button})]})},showMobileMenu:i}),Object(N.jsx)("button",{className:V.a.burger,type:"button",onClick:function(){return c((function(e){return!e}))},children:H[l].Header.Button.burger})]})}var G=a(35),Y=a.n(G);function k(){var e=Object(s.c)((function(e){return e.lang}));return Object(N.jsx)("footer",{className:Y.a.footer,children:Object(N.jsx)("div",{className:Y.a.bottom,children:Object(N.jsx)("p",{children:H[e].Footer.caption})})})}var _=a(29),J=a.n(_),K=a(15),q=a.n(K),$=a(36),ee=a.n($),te=function(e){var t=e.inFavourites,a=e.handleToggleFavouritesButton,n=e.movie,r=Object(s.c)((function(e){return e.lang}));return Object(N.jsx)("button",{onClick:function(){return a(n)},type:"button",className:ee.a.starButton,"data-button-tooltip":t?H[r].AddToFavouritesButton.button.tooltip.remove:H[r].AddToFavouritesButton.button.tooltip.add,children:Object(N.jsx)("img",{alt:t?H[r].AddToFavouritesButton.button.img.remove:H[r].AddToFavouritesButton.button.img.add,src:t?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIDSURBVHgBpZQ/ctNQEMZ3VzbMUIkToJwgOoLMBQhlKkcNQwom8QlkTuAqQ6mEGSigSEnrI3ADfIRHQ2Frd9n3JEtOEOM3k53RaJ/0vt/79v0DiIz7WtPYvhTT6Uet2XOGe4iMKCgLVIxaxLo9CjVQxiBnitZZ5Boi4ihUgAslTMXnCFcxbo9CUalitSkABUVMG5GLJ0G/11oIamaPdwmsCkj4Bo4Z+VZvcwbKUSRFSl6ZNjWpLzFD0MxMhnLtuyH9K7R+WuKs7SzfCDS/Ucgh0eYPwHrCMHUIcqWU5FZgkCO0WZB3tJD2uebY+2o1Sn7+d4uyfOb6f1/r5tYczoeOnT/LPS3YHEjW1v6/hSPQt+fldL1X9fHljitRWIaOCh1sT9NhrH0FAUC/EsXX5yVu4MDKg7ird0tTVAeVHdqzhaIwUFfDRpRm5QFwFOqjrrfXpl61jjq3j1Vqi6TJiQHdY/1kDKpA2bDcfn8+dNtWgCkpjMboPhXS0/YE2f6EltE/5tzvWbFWA00eDWWAwosGcMgdh3c7Gf6bHd+zKOinelf4ctmX7x0prO2Wmr2bT14a+KO5RA6DoR/8NAqqieZBZM6EefF+Pp1ddvvvcj5dKjcnNp+3wSnqaPn/rP7N551dxuhecLIYW9mh3/bCPFXCWn7oBv1v3NhdAJGxsmtwNXIV/gVRHgAGMIEvbAAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI9SURBVHgBpVRLbhNBEK3qaVuR2PgGjE8Q+wQ4N7B3IILxsAGRhZ0TODlB7EU2yaLtAALBwiDEGucENhcgcwMisQA801W8CQk4/ku0NJoe16tXr151m2iD9elESx9PtbIJ1m4CUisto0axHa7D8jrAwGloRS/AdukNF2sRX67Cm3WEJFL1pKRMBexb6+BrCZW5qYZjYR6CtPlfhG9d2hDWUEQOheQDyAvvXFJZlXPLQ+e0sEVojdLQkC0Y0jYAhe/EZfxIKQm85BgPCqTw0sY/4W005Su/hgombqO5cHZG2ReG0bsfBVH2/cb5Dl7NBZhsF7PygX0Q2d4rl4RMpn0d6gI0zqaqJPGEcvFN8g8yB1uUvr+mCqG0xPBVFUMj6T98kuv/lfTSTVrE5ghq44maHbQR04oFe8I8y2eQhTgK+7tRvnOjeAqUVgMml+29Ckjz48VkSSVgHlwRqNYeRbnhtAVzlRmVM09VpTxL+ifuL4gxHPG1ZUVvrd5ZOnD9VJfFEfvmet4tii08h165pFP39hQtnrhJ41+cxp6luih3rmUklsjwCKGul6RjTQ5K8E+DcWZHKOeDw8R4XEFt5sQWZ4c3p9AHpiR4C9NdNnaEm1IRNh2o6opqYxKkX4V0Gw8lga/QBi3fw50lJFShdJz6X+Wn9WD/2WPbUkmLIP6CGIowidHttS0fv0hGOKehMdx6vmv7CwrS8dmVn+1Mz17dFpcqPMJdRvXzO94Wl5Fla6+e70283xGW8yxnOvYbpGIW2m9kdXMAAAAASUVORK5CYII=",className:ee.a.starImage})})},ae="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAALuCAIAAADXEXO9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjA2MTY5NzAzNjI3MTFFNkEzOTlFMTY2REYyOTg1Q0MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjA2MTY5NkYzNjI3MTFFNkEzOTlFMTY2REYyOTg1Q0MiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MUQyQjNDQzJEMzIxMUU2QkEwRUZBMkQyMjM0MDNBMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MUQyQjNDRDJEMzIxMUU2QkEwRUZBMkQyMjM0MDNBMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmOEnbQAABl6SURBVHja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";var ne=function(e){var t=e.poster,a=e.name;return Object(N.jsx)("div",{className:q.a.wrapper,children:Object(N.jsx)("img",{className:q.a.image,alt:"poster to ".concat(a," movie"),src:"".concat(t),onError:function(e){e.target.onerror=null,e.target.src=ae}})})};function re(e){var t=e.movie,a=e.inFavourites,n=Object(s.b)(),r=Object(s.c)((function(e){return e.user})),i=t.poster,c=t.name,u=t.rating,l=t.id,A=Object(s.c)((function(e){return e.lang}));return Object(N.jsxs)("div",{className:q.a.card,children:[Object(N.jsx)(o.b,{exact:!0,to:"/film/".concat(l),className:q.a.more,children:Object(N.jsx)(ne,{poster:i,name:c})}),Object(N.jsxs)("div",{className:q.a.description,children:[Object(N.jsx)("p",{className:q.a.title,children:c}),Object(N.jsx)("p",{className:q.a.raiting,children:"".concat(H[A].Card.raiting," ").concat(Number.parseFloat(u).toFixed(1))})]}),r.name&&Object(N.jsx)(te,{inFavourites:a,movie:t,handleToggleFavouritesButton:function(e){return n(a?function(e){var t=b.getState().user,a=b.getState().favourites.filter((function(t){return t.id!==e}));return localStorage.setItem(t.email,JSON.stringify({user:t,favourites:a})),{type:"SET_FAVOURITES",payload:a}}(e.id):function(e){var t=b.getState().user,a=localStorage.getItem(t.email);if(a){var n=JSON.parse(a);n.favourites.push(e),localStorage.setItem(t.email,JSON.stringify(n))}return{type:"ADD_TO_FAVOURITES",payload:e}}(e))}})]})}function ie(){var e=Object(s.c)((function(e){return e.movies})),t=Object(s.c)((function(e){return e.favourites})),a=Object(s.c)((function(e){return e.favourites})).map((function(e){return e.id})),n=Object(s.c)((function(e){return e.lang})),r=Object(j.g)();return Object(N.jsx)(N.Fragment,{children:"/"===r.pathname&&e.length>0?Object(N.jsx)("section",{className:J.a.cards,children:e.map((function(e){return Object(N.jsx)(re,{movie:e,inFavourites:a.includes(e.id)},e.id)}))}):"/favourites"===r.pathname&&t.length>0?Object(N.jsx)("section",{className:J.a.cards,children:t.map((function(e){return Object(N.jsx)(re,{movie:e,inFavourites:a.includes(e.id)},e.id)}))}):Object(N.jsx)("section",{className:J.a.notFound,children:H[n].Cards.notFound})})}var ce=a(30),se=a.n(ce);function oe(){var e,t=Object(j.h)().id,a=Object(n.useState)({}),r=Object(E.a)(a,2),i=r[0],c=r[1],o=Object(s.c)((function(e){return e.lang}));return Object(n.useEffect)((function(){Object(h.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.t0=c,e.next=4,f(t);case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})))()}),[t]),i.rating?Object(N.jsxs)("div",{className:se.a.card,children:[Object(N.jsx)("h3",{className:se.a.title,children:i.name}),Object(N.jsx)("img",{alt:"\u043f\u043e\u0441\u0442\u0435\u0440 \u043a \u0444\u0438\u043b\u044c\u043c\u0443 ".concat(i.name),src:"".concat(null===i||void 0===i||null===(e=i.poster)||void 0===e?void 0:e.url),className:se.a.poster,onError:function(e){e.target.onerror=null,e.target.src=ae}}),Object(N.jsx)("p",{children:"".concat(H[o].CardInDetails.description," ").concat(i.description)}),Object(N.jsx)("p",{children:"".concat(H[o].CardInDetails.rating," ").concat(Number.parseFloat(i.rating.kp).toFixed(1))}),Object(N.jsx)("p",{children:"".concat(H[o].CardInDetails.year," ").concat((null===i||void 0===i?void 0:i.year)?"".concat(i.year," \u0433\u043e\u0434"):"\u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e")}),Object(N.jsx)("p",{children:"".concat(H[o].CardInDetails.country," ").concat(i.countries.map((function(e){return e.name})).join(", "))})]}):""}var ue=a(4),le=a.n(ue);var Ae=function(e){var t=e.isOpen,a=e.onSubmit,r=e.submitEnable,i=e.onClose,c=e.title,o=e.children,u=e.buttonText,l=Object(s.b)();return Object(n.useEffect)((function(){var e=function(e){e.target.className.includes("overlay")&&l({type:"CLOSE_POPUPS"})};return t&&document.body.addEventListener("click",e),function(){document.body.removeEventListener("click",e)}}),[t]),Object(N.jsx)("div",{className:t?"".concat(le.a.overlay," ").concat(le.a.open):"".concat(le.a.overlay),children:Object(N.jsxs)("form",{className:le.a.form,onSubmit:a,noValidate:!0,children:[Object(N.jsx)("button",{className:le.a["close-button"],type:"button","aria-label":"close",onClick:i,children:"X"}),Object(N.jsx)("h3",{className:le.a.title,children:c}),o,Object(N.jsx)(T,{type:"submit",title:u,disabled:!r})]})})};function de(){var e=r.a.useState({}),t=Object(E.a)(e,2),a=t[0],i=t[1],c=r.a.useState({}),s=Object(E.a)(c,2),o=s[0],u=s[1],l=r.a.useState(!1),A=Object(E.a)(l,2),d=A[0],p=A[1],g=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];i(e),u(t),p(a)}),[i,u,p]);return{values:a,handleChange:function(e){var t=e.target,n=t.name,r=t.value;i(Object(O.a)(Object(O.a)({},a),{},Object(F.a)({},n,r))),u(Object(O.a)(Object(O.a)({},o),{},Object(F.a)({},n,t.validationMessage))),p(t.closest("form").checkValidity())},errors:o,isValid:d,resetForm:g}}var Oe=function(){var e=de(),t=e.values,a=e.handleChange,n=e.errors,r=e.isValid,i=e.resetForm,c=Object(s.b)(),o=Object(s.c)((function(e){return e.popupsIsOpen.auth})),u=Object(s.c)((function(e){return e.lang}));function l(){c({type:"TOGGLE_AUTH_POPUP"}),i({email:"",password:""})}return Object(N.jsx)(Ae,{isOpen:o,onClose:l,title:H[u].PopupRegister.PopupWithForm.title,onSubmit:function(e){e.preventDefault();var a=t.email,n=t.password,r=t.name;a&&n&&r&&(localStorage.getItem(a)?alert(H[u].PopupRegister.userExist):(c(I({email:a,password:n,name:r})),l()))},buttonText:H[u].PopupRegister.PopupWithForm.buttonText,submitEnable:r,children:Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:le.a.field,children:[Object(N.jsx)("label",{className:le.a.label,htmlFor:"email",children:H[u].PopupRegister.Fields.labels.email}),Object(N.jsx)("input",{id:"email",className:le.a.input,type:"email",value:t.email||"",onChange:a,name:"email",minLength:"5",maxLength:"40",placeholder:H[u].PopupRegister.Fields.input.placeholder.email,pattern:"^[^@]+@[^@.]+\\.[^@]+$",required:!0}),Object(N.jsx)("span",{className:le.a.error,children:n.email||""})]}),Object(N.jsxs)("div",{className:le.a.field,children:[Object(N.jsx)("label",{className:le.a.label,htmlFor:"password",children:H[u].PopupRegister.Fields.labels.password}),Object(N.jsx)("input",{id:"password",className:le.a.input,type:"password",value:t.password||"",onChange:a,name:"password",minLength:"5",maxLength:"40",placeholder:H[u].PopupRegister.Fields.input.placeholder.password,required:!0}),Object(N.jsx)("span",{className:le.a.error,children:n.password||""})]}),Object(N.jsxs)("div",{className:le.a.field,children:[Object(N.jsx)("label",{className:le.a.label,htmlFor:"name",children:H[u].PopupRegister.Fields.labels.name}),Object(N.jsx)("input",{id:"name",className:le.a.input,type:"text",value:t.name||"",onChange:a,name:"name",minLength:"2",maxLength:"40",placeholder:H[u].PopupRegister.Fields.input.placeholder.name,required:!0}),Object(N.jsx)("span",{className:le.a.error,children:n.name||""})]})]})})};var pe=function(){var e=de(),t=e.values,a=e.handleChange,n=e.errors,r=e.isValid,i=e.resetForm,c=Object(s.b)(),o=Object(s.c)((function(e){return e.popupsIsOpen.login})),u=Object(s.c)((function(e){return e.lang}));function l(){c({type:"TOGGLE_LOGIN_POPUP"}),i({email:"",password:""})}return Object(N.jsx)(Ae,{isOpen:o,onClose:l,title:H[u].PopupLogin.PopupWithForm.title,onSubmit:function(e){e.preventDefault();var a=t.email,n=t.password;if(a&&n){var r=JSON.parse(localStorage.getItem(a));r?r.user.password===n?(c(I(r.user)),c({type:"SET_FAVOURITES",payload:r.favourites}),l()):alert(H[u].PopupLogin.wrongPassword):alert(H[u].PopupLogin.userNotFound)}},buttonText:H[u].PopupLogin.PopupWithForm.buttonText,submitEnable:r,children:Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:le.a.field,children:[Object(N.jsx)("label",{className:le.a.label,htmlFor:"email",children:H[u].PopupLogin.Fields.labels.email}),Object(N.jsx)("input",{id:"email",className:le.a.input,type:"email",value:t.email||"",onChange:a,name:"email",minLength:"5",maxLength:"40",placeholder:H[u].PopupLogin.Fields.input.placeholder.email,pattern:"^[^@]+@[^@.]+\\.[^@]+$",required:!0}),Object(N.jsx)("span",{className:le.a.error,children:n.email||""})]}),Object(N.jsxs)("div",{className:le.a.field,children:[Object(N.jsx)("label",{className:le.a.label,htmlFor:"password",children:H[u].PopupLogin.Fields.labels.password}),Object(N.jsx)("input",{id:"password",className:le.a.input,type:"password",value:t.password||"",onChange:a,name:"password",minLength:"5",maxLength:"40",placeholder:H[u].PopupLogin.Fields.input.placeholder.password,required:!0}),Object(N.jsx)("span",{className:le.a.error,children:n.password||""})]})]})})},ge=a(42),be=["component","path"],je=function(e){var t=e.component,a=e.path,n=Object(ge.a)(e,be),r=Object(s.c)((function(e){return e.user}));return Object(N.jsx)(j.b,{path:a,children:function(){return r.name?Object(N.jsx)(t,Object(O.a)({},n)):Object(N.jsx)(j.a,{to:"/sign-in"})}})},me=a(23),ve=a.n(me);function he(){var e=Object(s.c)((function(e){return e.history})),t=Object(s.c)((function(e){return e.lang})),a=Object(s.b)();return Object(N.jsxs)("section",{className:ve.a.history,children:[Object(N.jsx)("h3",{children:H[t].History.title}),Object(N.jsx)("ul",{className:ve.a.list,children:e.map((function(e){return Object(N.jsx)("li",{className:ve.a.item,children:Object(N.jsx)(o.b,{exact:!0,to:"/",onClick:function(){return a(D(e))},className:ve.a.link,children:e},e)},e)}))})]})}var fe=function(){var e=Object(s.c)((function(e){return e.inputSearch})),t=Object(s.b)();return Object(n.useEffect)((function(){return t(function(){var e=Object(h.a)(v.a.mark((function e(t,a){var n,r,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(),r=n.inputSearch,e.next=3,x(r);case 3:i=e.sent,t({type:"SET_MOVIES",payload:i});case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}),[e]),Object(N.jsxs)(P,{children:[Object(N.jsx)(Z,{}),Object(N.jsx)(Oe,{}),Object(N.jsx)(pe,{}),Object(N.jsxs)(j.d,{children:[Object(N.jsx)(j.b,{exact:!0,path:"/film/:id",children:Object(N.jsx)(oe,{})}),Object(N.jsx)(j.b,{exact:!0,path:"/",children:Object(N.jsx)(ie,{})}),Object(N.jsx)(je,{component:ie,path:"/favourites"}),Object(N.jsx)(je,{component:he,path:"/history"})]}),Object(N.jsx)(k,{})]})};c.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(o.a,{children:Object(N.jsx)(s.a,{store:b,children:Object(N.jsx)(fe,{})})})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.c6eb70b4.chunk.js.map