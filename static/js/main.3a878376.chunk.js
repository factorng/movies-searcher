(this["webpackJsonpmovies-searcher"]=this["webpackJsonpmovies-searcher"]||[]).push([[0],{13:function(e,t,a){e.exports={menu:"Menu_menu__22vzR",menu__items:"Menu_menu__items__3_MQL",menu__item:"Menu_menu__item__37s1N",menu__item_active:"Menu_menu__item_active__5R7eb"}},14:function(e,t,a){e.exports={button:"Header_button__3Lscu",buttonText:"Header_buttonText__1D5uK",burgerMenu:"Header_burgerMenu__teuo1"}},15:function(e,t,a){e.exports={card:"Card_card__3F8np",title:"Card_title__1yJ7t",image:"Card_image__mj-K7",description:"Card_description__1R2Bi",more:"Card_more__3Jl07",starButton:"Card_starButton__3w2cz"}},19:function(e,t,a){e.exports={cards:"Cards_cards__3vslv",notFound:"Cards_notFound__H6qhA"}},20:function(e,t,a){e.exports={popup:"PopupInfo_popup__1oGag",popupOpen:"PopupInfo_popupOpen__DdKKg",popupButtonClose:"PopupInfo_popupButtonClose__2buw3",popupBody:"PopupInfo_popupBody__2x6PG"}},24:function(e,t,a){e.exports={history:"History_history___VaPc",historyList:"History_historyList__3vow8",historyListItem:"History_historyListItem__3y5pb",historyListLink:"History_historyListLink__ndjEy"}},30:function(e,t,a){e.exports={preloader:"Preloader_preloader__2kdtb",circlePreloader:"Preloader_circlePreloader__1J9mO",spin:"Preloader_spin__22UEl",preloaderText:"Preloader_preloaderText__1NIMu"}},34:function(e,t,a){e.exports={logo:"Footer_logo__3I7YG",footerBottom:"Footer_footerBottom__26QfR"}},35:function(e,t,a){e.exports={searchForm:"Search_searchForm__1WIrD",searchInput:"Search_searchInput__2uLKN"}},36:function(e,t,a){e.exports={card:"CardInDetails_card__3N5Wj",poster:"CardInDetails_poster__NoHow"}},39:function(e,t,a){e.exports={main:"Main_main__d0wD2"}},50:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(25),s=a.n(r),i=a(3),o=a(5),u=a(29),A=a(37),p=a(38),O=a(16),l=a(2);var d=function(e,t){switch(t.type){case"INPUT_SEARCH":return Object(l.a)(Object(l.a)({},e),{},{inputSearch:t.payload,history:t.payload&&e.user.name?[].concat(Object(O.a)(e.history),[t.payload]):Object(O.a)(e.history)});case"SET_MOVIES":return Object(l.a)(Object(l.a)({},e),{},{movies:t.payload});case"ADD_TO_FAVOURITES":return Object(l.a)(Object(l.a)({},e),{},{favourites:[].concat(Object(O.a)(e.favourites),[t.payload&&t.payload])});case"SET_FAVOURITES":return Object(l.a)(Object(l.a)({},e),{},{favourites:Object(O.a)(t.payload)});case"TOGGLE_AUTH_POPUP":return Object(l.a)(Object(l.a)({},e),{},{popupsIsOpen:Object(l.a)(Object(l.a)({},e.popupsIsOpen),{},{auth:!e.popupsIsOpen.auth})});case"TOGGLE_LOGIN_POPUP":return Object(l.a)(Object(l.a)({},e),{},{popupsIsOpen:Object(l.a)(Object(l.a)({},e.popupsIsOpen),{},{login:!e.popupsIsOpen.login})});case"CREATE_USER":case"LOGIN":return Object(l.a)(Object(l.a)({},e),{},{user:{name:t.payload.name,email:t.payload.email,password:t.payload.password}});case"LOGOUT":return Object(l.a)(Object(l.a)({},e),{},{user:{name:"",email:"",password:""},favourites:[]});case"DELETE_HISTORY":return Object(l.a)(Object(l.a)({},e),{},{history:[]});case"SHOW_PRELOADER":return Object(l.a)(Object(l.a)({},e),{},{preloader:t.payload});default:return e}},j=Object(p.composeWithDevTools)(Object(u.applyMiddleware)(A.a)),g=Object(u.createStore)(d,{inputSearch:"",movies:[],favourites:[],user:{name:"",email:"",password:""},popupsIsOpen:{login:!1,auth:!1},history:[],preloader:!1},j),b=(a(49),a(50),a(6)),m=a(18),h=a.n(m),x=a(28),v="5e5a3994082d5957cb6a987f74121734";function f(e){return{type:"INPUT_SEARCH",payload:e}}function D(e){var t={user:e,favourites:[]};if(localStorage.getItem(e.email)){var a=JSON.parse(localStorage.getItem(e.email)).favourites;t.favourites=Object(O.a)(a)}return localStorage.setItem(e.email,JSON.stringify(t)),{type:"CREATE_USER",payload:e}}function I(e){return{type:"SHOW_PRELOADER",payload:e}}var N=a(39),E=a.n(N),y=a(0);function B(e){var t=e.children;return Object(y.jsx)("div",{className:E.a.main,children:t})}var H=a(8);var w=a(13),L=a.n(w);function M(e){var t=e.login,a=e.showMobileMenu,r=e.setShowMobileMenu,s=function(){var e=c.a.useState(window.innerWidth),t=Object(H.a)(e,2),a=t[0],n=t[1],r=c.a.useState(window.innerHeight),s=Object(H.a)(r,2),i=s[0],o=s[1],u=function(){n(window.innerWidth),o(window.innerHeight)};return c.a.useEffect((function(){return window.addEventListener("resize",u),function(){return window.removeEventListener("resize",u)}}),[]),{width:a,height:i}}(),i=s.width,u=Object(n.useRef)("");return Object(n.useEffect)((function(){var e=function(e){e.target.className.toString().includes("Menu")||r(!1)};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}),[]),Object(y.jsx)(y.Fragment,{children:!a&&i<980?"":Object(y.jsxs)("menu",{className:L.a.menu,ref:u,children:[Object(y.jsxs)("ul",{className:L.a.menu__items,children:[Object(y.jsx)("li",{children:Object(y.jsx)(o.b,{exact:!0,to:"/",className:L.a.menu__item,activeClassName:L.a.menu__item_active,children:"Main"})}),Object(y.jsx)("li",{children:Object(y.jsx)(o.b,{exact:!0,to:"/favourites",className:L.a.menu__item,activeClassName:L.a.menu__item_active,children:"Favourites"})}),Object(y.jsx)("li",{children:Object(y.jsx)(o.b,{exact:!0,to:"/history",className:L.a.menu__item,activeClassName:L.a.menu__item_active,children:"History"})})]}),t()]})})}var Q=a(14),S=a.n(Q),C="data:image/png;base64,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";function P(){var e=Object(i.b)(),t=Object(b.h)(),a=Object(n.useState)(!1),c=Object(H.a)(a,2),r=c[0],s=c[1],u=Object(i.c)((function(e){return e.user})),A=function(){e({type:"LOGOUT"}),s(!1)};Object(n.useEffect)((function(){return s(!1)}),[t]);return Object(y.jsxs)("header",{children:[Object(y.jsx)(o.b,{exact:!0,to:"/",children:Object(y.jsx)("img",{src:C,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0424\u043e\u0442\u043e \u0434\u043d\u044f",className:S.a.logo})}),Object(y.jsx)(M,{login:function(){return u.name?Object(y.jsxs)("button",{onClick:A,type:"button",className:S.a.button,children:[Object(y.jsx)("span",{className:S.a.buttonText,children:u.name}),Object(y.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABiklEQVRIie2WuzJDURiF19G5dRJBE2QmKs+gN3qSJ3DpeJhQGKX7bXgAozAMjcygokDFmEgnEZ8if0bEJNnOOVJZ5Tlr/9/+99l7nyX9q0XyXI1An6SUpDFJo5J6JCHpXtKdpENJe57nPYQyMyAGrAAFmqsILAH9QaFx4MWKFoA1YNKetwOdQBKYAlaBN/PmgYmg4CdgF4g7+IeATYOXgDnfcD8C5oF3g/vvPAAc4NU2ZkvhWwZfdB0QBS6Ao4DgYdtwRWDABZq1mZ4GAVu9das14wrNAtEQwGmrd1DPEAEuzXQNxIJCrW7Sat7UM5w3upIa6LgJuNt8+ernbWE0FWz0z6UO5ewBI1bzqpGp9ZurDvwsBHDlOE27mKO22U4CQhO4XiBhCti2bjOthC4YNBfWneAKrfwWx/0UiAPPwA4w6OBPVC1vCZj1O/Pa6LMBpCgnjQ6gy85p2t5VclnOV6c18F5gma881UhFIOPyTX8Tb2P6Hm8jkj5Ujre3Ksfbfc/zHn11+K+/0if+Pp0toR6y4gAAAABJRU5ErkJggg==",alt:"Logout"})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(o.b,{exact:!0,to:"/sign-in",className:S.a.button,activeClassName:S.a.menu__item_active,children:"Log In"}),Object(y.jsx)(o.b,{exact:!0,to:"/sign-up",className:S.a.button,activeClassName:S.a.menu__item_active,children:"Register"})]})},showMobileMenu:r,setShowMobileMenu:s}),Object(y.jsx)("button",{className:S.a.burgerMenu,type:"button",onClick:function(){return s((function(e){return!e}))},children:"MENU"})]})}var F=a(34),U=a.n(F);function X(){return Object(y.jsxs)("footer",{children:[Object(y.jsx)("div",{className:U.a.logo,children:Object(y.jsx)("img",{src:C,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0424\u043e\u0442\u043e \u0434\u043d\u044f"})}),Object(y.jsx)("div",{className:U.a.footerBottom,children:Object(y.jsx)("p",{children:"Copyright \xa9 2021. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b."})})]})}var R=a(19),z=a.n(R),V=a(15),W=a.n(V);function T(e){var t=e.movie,a=e.inFavourites,n=Object(i.b)(),c=Object(i.c)((function(e){return e.user})),r=t.poster_path,s=t.title,u=t.vote_average,A=t.id,p=function(e){n(a?function(e){var t=g.getState().user,a=g.getState().favourites.filter((function(t){return t.id!==e}));return localStorage.setItem(t.email,JSON.stringify({user:t,favourites:a})),{type:"SET_FAVOURITES",payload:a}}(e.id):function(e){var t=g.getState().user,a=localStorage.getItem(t.email);if(a){var n=JSON.parse(a);n.favourites.push(e),localStorage.setItem(t.email,JSON.stringify(n))}return{type:"ADD_TO_FAVOURITES",payload:e}}(e))};return Object(y.jsxs)("div",{className:W.a.card,children:[Object(y.jsx)("img",{className:W.a.image,alt:"poster to ".concat(s," movie"),src:"https://image.tmdb.org/t/p/w300".concat(r),onError:function(e){e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAALuCAIAAADXEXO9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjA2MTY5NzAzNjI3MTFFNkEzOTlFMTY2REYyOTg1Q0MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjA2MTY5NkYzNjI3MTFFNkEzOTlFMTY2REYyOTg1Q0MiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MUQyQjNDQzJEMzIxMUU2QkEwRUZBMkQyMjM0MDNBMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MUQyQjNDRDJEMzIxMUU2QkEwRUZBMkQyMjM0MDNBMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmOEnbQAABl6SURBVHja7N17b9po2sDhcgg5HybNTLXq9/9ilUaaTpl2kpAQjtlb8b5RXkjgMdhg8HX9sZpVE8cH/OOxsU3j27dvnwDYL02rAEDcARB3AMQdAHEHQNwBxB0AcQdA3AEQdwDEHUDcARB3AMQdAHEHQNwBEHcAcQdA3AEQdwDEHQBxBxB3AMQdAHEHQNwBEHcAxB1A3AEQdwDEHQBxB0DcAcQdAHEHQNwBEHcAxB0AcQcQdwDEHQBxB0DcARB3AHEHQNwBEHcAxB0AcQdA3AHEHQBxB0DcARB3AMQdQNwBEHcAxB0AcQdA3AEQdwBxB0DcARB3AMQdAHEHEHcAxB0AcQdA3AEQdwDEHUDcARB3AMQdAHEHQNwBxB0AcQdA3AEQdwDEHQBxBxB3AMQdAHEHQNwBEHcAcQdA3AEQdwDEHQBxB0DcAcQdAHEHQNwBEHcAxB1A3AEQdwDEHQBxB0DcARB3AHEHQNwBEHcAxB0AcQcQdwDEHQBxB0DcARB3AMQdQNwBEHcAxB0AcQdA3AHEHQBxB0DcARB3AMQdAHEHEHcAxB0AcQdA3AEQdwBxB0DcARB3AMQdAHEHQNwBxB0AcQdA3AEQdwDEHUDcARB3AMQdAHEHQNwBEHcAcQdA3AEQdwDEHQBxBxB3AMQdAHEHQNwBEHcAxB1A3AEQdwDEHQBxB0DcAcQdAHEHQNwBEHcAxB0AcQcQdwDEHQBxB0DcARB3AHEHQNwBEHcAxB2AlbStgoqbTqeDwWA4HMZ/PD8/v/szBwcH5+fnBf7Rx8fHp6cnK7/6jo6OTk5OCpzg/f39aDR6958ajUaz2ex0OoeHh/EfVr64s6JIea/Xe3h4mEwmi38yfqDYuMd7Sb/ftwl24NC72Sw27vGmHlt/8c+0Wq3T09Ozs7PIvU0g7uQTvf7161eM2VN+uPB9zE67K7ay6ePFeXd3Fy/O3377LUJvK1T0jd8qqKDpdPrz58/EssNWxOszXqXxWrUqxJ1UMSxaemgMWxev0nitWg/iTpLRaPT4+Gg9sBPitfrRB7CIO7N7y0dXxUDVxGvVWETcST3UtRLwikXc983SCx/BKxZx38njXCsBr1jEHQBxBxB3AMQdAHEHQNwBEHeA+vLI3z1R7LXGrlzeoe1uYyHue2s4HH7//r3ACXqO664o/DuzbHpxp1rDN7eA2/TwlnPuAOIOgLgDIO4AiDsA4g4g7gCIOwDiDoC4AyDuAOJuFQCIOwDiDoC4AyDuAIg7gLgDIO4AiDsA4g6AuAOIOwDiDkD1ta2CfXiLbjYPDg4KnOB4PJ5MJlZs9bVarXa7yL14NBpNp1MrVtyphCj7zc1NgRO8vb3t9XpWbPUdHx9fXl4WOMFutzsYDKzYfRjzWQUA4g6AuAMg7gCIOwDiDiDuAIg7AOIOgLgDIO4A4g6AuAMg7gCIOwDiDoC4A4g7AOIOgLgDIO4AiDuAuAMg7gCIOxvQaDSsBLyWeKttFeyB0Wh0e3tb4AQHg4G1uhNiSxW76eO1ZK2KO1UxmUx6vZ71UM/3dTnmXU7LAIg7AOIOgLgDIO4AiDuAuAMg7gCIOwDiDoC4A4i7VQAg7gCIOwDiDoC4AyDuAOIOgLgDIO4AiDsA4g4g7gCIOwDV17YK9kOj0Shwas/Pz1apTY+4s2WdTue3334rcIL39/ePj49WbPWdnJycn58XOMFfv34Nh0MrVtypytit3S5yUzabztfththSxW76Yo8D2OZrwyoAEHcAxB0AcQdA3AEQdwBxB0DcARB3AMQdAHEHEHcAxB0AcQdA3AEQdwDEHUDcARB3AMQdAHEHQNwBxB0AcQeg8tpWwR6YTqeDwaDACU4mE2t1J8SWKnbTx2vJWhV3qmI0GnW7XeuhhvovrAfmOS0DIO4AiDsA4g6AuAMg7gDiDoC4AyDuAIg7AOIOIO5WAYC4AyDuAIg7AOIOgLgDiDsA4g6AuAMg7gCIO4C4AyDuAIg7AFvQtgr2YSu226enpwVOsN/vD4dDK7b6Op3O8fFxgRN8eHgYj8dWrLhTCa1W6+zsrMAJTiYTcd+VuBe76Z+ensR9PzgtAyDuAIg7AOIOgLgDIO4A4g6AuAMg7gCIOwDiDiDuVgGAuAMg7gCIOwDiDoC4A4g7AOIOgLgDIO4AiDuAuAMg7gBUX9sq2A/Pz8+VnRqlbncbC3HfW8Ph8MePHwVOcDKZWKs7od/vx9YvcILj8dhaFXcqNHwbjUbWQw1NX1gPzHPOHUDcARB3AMQdAHEHQNwBxB0AcQdA3AEQdwDEHUDcrQIAcQdA3AEQdwDEHQBxBxB3AMQdAHEHQNwBEHcAcQdA3AGovrZVsA9v0c1mu13kppy8sGKrr/WiwAmOx+PpdGrFijvFazQaeX/l4ODg5uamwHm4vb3t9Xq2RfUdHx9fXl4WOMFutzsYDMp+xbKJMZ9VUMGxmJWAVyzivm86nY6VgFcs4r5vTk5OHOeyK+K1Gq9Y60HcWe7g4MDewg6NReIVaz2IO0kuLi4c6lJ98SqN16r1IO4kb5Vm8/r6+vDw0KqgsuL1Ga/SeK1aFdXkUsiKarVanz9/7vV6Dw8PSy85f35+LvavFz5BSrKVTR8vztPT07OzMx8OiTuriD3n/Pw89qLBYDAcDqfT6Uc7XuEnPeNw250sO6Hw03dHR0cfXdoYL8gYp8dfjDG7AfsOBOTbt2/WAsCe8fYLIO4AiDsA4g6AuAMg7gDiDoC4AyDuAIg7AOIOIO5WAYC4AyDuAIg7AOIOgLgDiDsA4g6AuAMg7gCIO4C4AyDuAIg7AOIOgLgDIO4A4g6AuAMg7gCIOwDiDiDuAIg7AOIOgLgDIO4AiDuAuAMg7gCIOwDiDoC4A4g7AOIOgLgDIO4AiDsA4g4g7gCIOwDiDoC4AyDuALXWtgrqaTKZjMfj1/97eHho2Ys1Go2m0+n/xlDN5sHBgVcd4r4nBoPBgn9d3JTFv7taLyI3/X5/OBy+O/F2ux0TjLk6Pj6OiW9yVczPSavVKjy1G1j2wf+JP/TuD3Q6nUajEX/l9PQ01zpZ6vXltP5kV55UrMPCXzmIexV1u90F/3p1dRV7+Gq/m+2BNzc3KbMR48fHx8eHh4e3w9V54xdRwH///Tdm7Pz8vMDCLl2cdzsYyxi9iBSu/Hc3tuzRwfv7+6U1fI1+/JUV1skCX79+XXlVFzipiPvhizKGCIj7bri7uzs6Oip8iDojutbr9Ran7d3fChGgi4uLbe2iwxdZL2JOzs7O8s7JxpY9NmWU3Us6ezftvyhjiIC478xu8PPnz99//73U6a9zkB6Ni700jjDWGTsXsiCRzpiZKEUkvmrLHhWLH/Z6/uht8vLyMnGrUSzHTdsUI9MYWpYx5dFo9OPHj/VPv2aVLGkm887J7e1tt9t9/ZSyCsse/6rsi8VWi82xdKsh7nv40i/2g7WsbhHBvKcjFs9kjE+rsLpiXf3zzz8LSrHJZc8OKbyGUwYxi7ca4r6foh0Fvu6zuhW+I2Xnryt+uLPhZX98fBSsXH23HsS9XmKYWdS4OFpT7FvFzBi23+9XYY29e13K5pe9Imtjh/pekfGBuLM5kYlCTt3GzvPRFdYVPMhYs+9bX/ZS/9xeiq3mWEfca+fu7m4ymawzhexS61JnMvbMmM8qrK5Y2NFotMVlX3Nj1VN224H1sBkuhazQ637NKyM38+FeHGEcHx+Xcct+Ns30j5fjJ1/v0d38suf6zPbde24vLy/nf/L29nbp1E5PT2OC6yzIu396M1st1qErI8W9drKTkqu99LO73tN/Prv/M7tJ5+npKdfv9vv9MuKe3XCbDZBTTlLFbGfraivLnp7Xj+4lfndDp8R9/TfXAvP6umiJt4zFD8RBjzubxL12Yt/OHnKS9xfTP9yLiZ+fn7/9E7GrZ8fLiadEs/uJSto/o7lXV1eRgKXNfT0xspVlT1/8mpzAieOJeNf5/v370tUYG1fcN8A598pZ7UPLxM9j43g8hlrzbx6R1Mhc/FPiDfdlXyiy4Kk7bxux3WWPI4CUn4/5LOMCzSrW5OVBEUt/7O2HJRi518gKV0Ympnbp7ftx0BCNSylR2ReKpD9GZovLHgPVxPWQ3XsVRyQVefDvgksSG41GSqDX33CIex3lHRenHPi32+2Li4ulPxb1iQ4uPfNb+F21K9visp+cnKRf2xdvA/HOEe8fVej7gmWMI5t14k6FDqSsgj2QMn5M/wwtmrV0/BVFK/VUcvq1KFtc9vjJeDNIX6j4xb///nu/n0VT4IMfEHc+pQwej46O0o+sUz7RLW83jsVJuZUxO+W93WWPt428n37v8VMkR6NRyqI1Gg37rLiT5Pn5eenP5Lo+IfGjwjL0+/1//vkn5Z0jW6KtL/v19XXeX4m+79mjCwaDQSxUHJdU/NVVK865UxV//vlnrp+vSCNisP/58+d4Q8r1IXOkMOZ/D64IzLvVfJ2skTs51PM4N/sajSose9b3XG820+n0169fNdxquT6lQNxZLtfFxU9PTxVfnNPT0/Rh7waWPfr++++/57rOJO+NtfuQm2bz5OTEzijupEq5FT79JO9kMkmJzhYPrt9eplKpZb96kX6td92+6yO2mgvhxZ2C4/7w8JB48WLK403iL25xL724uHgdtldt2WPwnn6za7yR1Ofpkp1OxyPDNpoFq2CL8j5Rb/F0FsueOvn58+fF3cm+GLqQv1iS0xdVXvYY1//xxx9///13ymWaT09Pm79p6OvXr5sve6x/u7yRe41cX1+vPwSOmqQMYJd+lWWv10t88sG2zslcXl5eXV1Vf9njwCLxk8OUSzn3YBCz9J0Vcd+7DfDyEMT1p5NdOpLSuO/fv0fIZs4GxIi12+2mnJT4lPx8qMIDEcPhd4/rt7XsMakFH9Um3uRVh1s6PSlsK5yW2b5oU4zy1vxsLYqTOIUYvd6+yK44jpFj3qeAbfhqtlg/sXQLToZsa9lf3w9i3jqdTjYyjclGrxPv1fyUdoftrssequyEu7jXUbzuB4PBOo9abLVa0bhc97XHLrfC6f4NXM2WfW9R5DJ7tP3Sw/mtL/s6FzVu5VasOFJZ8K+Xl5eFn3aLN8J4k/YYd3GvnezkTOLd2x+5uLjo9/tljwTLu5ptnU/5dn3ZN2zxW1Gu1RjvBIlntOLoqpAzkKRWxSqoiBgrrfnNlnkfUrjaMLOaB9e7u+y7fi9+ynM0M3FoVbebtsSd/1nhEYPzUyjvo86iPvstb+3t3LInPoSy4gedKc/Kfx28283FvabWvzIy9rSSTuPGvFV8mLlzy74fD1pZ/HH3WzFy3+/H2Ys7JY4QV3iIVYqYq+qPMXdr2ffpQSvpZxR7vV4dLhASd96RXRm5fuOKOkcRU/vjjz925avXdmjZcz2FpuKybyhM+cnxePz4+Gg3F/eaOjs7W3P4mR0BxHhqzXzEiPXLly+79aHfTix7zGHivVc79KJNXOH39/f1eaKOuPNOngrZ31YeeLbb7evr6/RnYFWwNdVc9phmTHz/voQ6/ZPV6XTqk9UNcJ17dY9z068gXqDVasX7RBwyP7xIOd0ZI9bsptBdX4dlL3v8cK5r++I9I6acfu3gzomle3x8TLkXLzZHrOddv1Ko4hrfvn2zFuojYjQajbLvo3gN0+sdofG/R0dH+3obYUnLHpMaj8fPz8/ZlCeTydvHxWT9iilnd9t6BSLuAKzOOXcAcQdA3AEQdwDEHQBxBxB3AMQdAHEHQNwBEHcAcbcKAPaPR/5WzoKnyM4/VjDxkbMpzyOceZzhh6+Yl8corjzDqy34u389789veNOsuaSzo7BmM/FrQwpcLSvM5zqrBXHfZ/1+/+fPnx/969XV1cyjxu/u7lIen31zc7N0N7u9vY2/vnRSM/OQd4YX6Ha7S3/m8vLy7OxstZ/f8KZZc0k/auXR0dHx8fGCNBe4Wlaez1dfv361U2+L0zI7M2x/918Tv2F5abVj2J5S9hg/ziQs7wzXZ9OUNA/xHvzXX3/Fm7qvmUbcd0bsrg8PD4sbPfPlkzGIS/lan6XfQ5RS9k8vX7Wz5gzXZ9OU6v7+/sePH6PRyF6DuO+AlMLO/EyUPfF7lhd/5fzicr19L1lzhuuzaco2Ho+73a5vmkbcd8Di/n5U4cS4L0hP9kVxS6fQ6XRmPtNbbYbrs2k2cDzx69cvOw7iXmlxiJ3y0WhUeOZg/PDwsN1e/sF4TPyjo/jEIefM+f2VZ7g+m2YD4o15P94+Efe9lX5QP78zJ16n8W4Flp5N/t8LZe78zzozXJ9Ns5m+230Q9+pK70K0ZubT0fRrZuY/Vk054fDpvU9u15nh+myaSr33IO5sYWyYHoX4yfmPVVMG7/O/+GmNj1LXmeH6bJrVHB4eXr5IvAnIx6rMcxPTjh34v/78TM2jAimZnvnFxI9S2+32TGXWn+H6bJoVHB0dZTcZxf92u92lJ15iIxZ4I24u8Q5k/xV3Chvuxd4eg7W3+3OMrCPBS0s984srX96+/gzXZ9OsH/oqn1Uv6gZgCue0zPYlnvVeOqLM+7FqerlmzukXNcP12TTraDQaS3/GI1wQ9ypa7RKLlS94f/3FxLPJ63yUuv5v7cemWcfSt4pOp2MnYp7TMls2Go1SznrPi9+Ko/W3Q7ZWqxUhXtqC7NrHGOanXydT0gzXZ9Pk9fT09PofS8/JJL6pl6TX6y045tjRD1rEna2NDV/HdDMFif+bck4gehHDvZQbc9rt9kw7ip3h+myaXAYvkg69m83EC2FLcnt7+9E/xRoQ9y1yWmbL1jk/O/84sNiXUp4jFn90wT45M8FSZ7g+m6YkV1dXKVsccWfTY8M1E7Dyx6qJA8P5YXvhM1yfTVO42NbbPSeDuLNWYReYP29e4IFwHFanf+nSyjNcn01TxjvQv//+az9C3Ksl8fsxFhsOhzN3J0aOi7p8YmZUWNIM12fTlNT3u7s7exPiXiEp+Ui5/W/+c79CPmGbf6RBeTNcn01Thvv7e88OQ9wrZOme3263z87Olj7Od75EiV/PtNj86Z3yZrg+m6a8vtuhEPdKSHmoS5bXpefQYzorfz1TetxLneH6bJpE2cN8Ep/U/ynPpZOIO9s/8M8CnXKOZeVrZj7S6XRmPkote4brs2kS31lvXnz58iX+N+VDFHFndohgFWxeykNdXq9UyYbhi38+e5DA21MxBwcHibcpvWsmWxuY4fpsmrziz11cXHS73cU/tvK2XtPXr1/t0Ubu/L8dPmVsOP/fH5m/8G7lMzPvfunSBma4Pptmhb7bazBy3424L/2Z5+fnBU/teHeaMw9fjdF34m2o8/GaGWluZobrs2lA3PfQZDJJOT2at8vZ918fHBy8HYCfnp6ucDXezPn6jc1wfTZNXs6nI+47oLxrn2OEOFOQGIPn/XPtdntmIpuc4TLW9usTFud1Op2Li4uKL2mU/efPn0t/LNdp/VyrZbHFHwZcXl5W6v1b3Nnygf/KIZvZJ7Nr6XI9t7bYJ4XlneHCjV9UcNMkxjd9zJ7rtuRcq2Wdo4qd/mL0XecD1U2Xvaid6t0daX7smfeayJnrZDY/w/XZNIvjm/fSdU8QQ9y3qeyTp/PTz7XPzz8xePMzXJ9NU6D5R7yBuG/OBgaqMfycf45Yet9nLrnbygzXZ9MUKOVBN4g7Je7eW/kriXGf/9Klbc1wfTZNUWX3oSXv7NFWwcYsvZml2Wwu3UtHo9HiD6liBDpzVXUkO+Vj1fmz89ua4fpsmvXFVnMRPeK+TbHnL71BPHbUpddU9Hq9xddZR8Tnr6qOvi99cOD8F2FvcYbrs2lWP+huNmOWfEkpH75CrILqHPinnD9J+ZkVrpmJya78pLAyZrg+m2a1rJ+fn3/58kXZEfftW7pXdzqdlDFdyhctzT8gJX5r8fNJ5sO03Rmuz6ZJPcR+eQhwNP36+vo///lPjNl9LzaLNb59+2YtABi5AyDuAIg7AOIOgLgDiDsA4g6AuAMg7gCIO4C4AyDuAIg7AOIOgLgDIO4A4g6AuAMg7gCIOwDiDiDuAIg7AOIOgLgDIO4AiDuAuAMg7gCIOwDiDoC4A4g7AOIOgLgDIO4AiDsA4g4g7gCIOwDiDoC4AyDuAOIOgLgDIO4AiDsA4g6AuAOIOwDiDoC4AyDuAIg7gLgDIO4AiDsA4g6AuAMg7gDiDoC4AyDuAIg7AOIOIO4AiDsA4g6AuAMg7gCIO4C4AyDuAIg7AOIOgLgDiDsA4g6AuAMg7gCIOwDiDiDuAIg7AOIOgLgDIO4A4g6AuAMg7gCIOwDiDoC4A4g7AOIOgLgDIO4AiDuAuAMg7gCIOwDiDoC4AyDuAOIOgLgDIO4AiDsA4g4g7gCIOwDiDoC4AyDuAIg7gLgDIO4AiDsA4g6AuAOIOwDiDoC4AyDuAIg7AOIOIO4AiDsA4g6AuAMg7gDiDoC4AyDuAIg7AOIOgLgDiDsA4g6AuAMg7gCIO4C4AyDuAIg7AOIOgLgDIO4A4g6AuAMg7gCIOwDiDiDuAIg7AOIOgLgDIO4AiDuAuAMg7gCIOwDiDoC4A4g7AOIOgLgDIO4AiDsA4g4g7gCIOwDiDoC4AyDuAOIOgLgDIO4AiDsA4g6AuAOIOwDiDoC4AyDuAIg7gLgDIO4AiDsA4g6AuAMg7gDiDoC4AyDuAIg7AOIOIO4AiDsA4g6AuAMg7gCIO4C4AyDuAIg7AOIOwEf+K8AAJFKZFQllBmsAAAAASUVORK5CYII="}}),Object(y.jsxs)("div",{className:W.a.description,children:[Object(y.jsx)("p",{className:W.a.title,children:s}),Object(y.jsxs)("p",{className:W.a.raiting,children:["Film raiting:"," ",u]})]}),Object(y.jsx)(o.b,{exact:!0,to:"/film/".concat(A),className:W.a.more,children:"More..."}),c.name&&Object(y.jsx)("button",{onClick:function(){return p(t)},type:"button",className:W.a.starButton,"data-button-tooltip":a?"remove from favouretes":"add to favouretes",children:Object(y.jsx)("img",{alt:"star",src:a?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIDSURBVHgBpZQ/ctNQEMZ3VzbMUIkToJwgOoLMBQhlKkcNQwom8QlkTuAqQ6mEGSigSEnrI3ADfIRHQ2Frd9n3JEtOEOM3k53RaJ/0vt/79v0DiIz7WtPYvhTT6Uet2XOGe4iMKCgLVIxaxLo9CjVQxiBnitZZ5Boi4ihUgAslTMXnCFcxbo9CUalitSkABUVMG5GLJ0G/11oIamaPdwmsCkj4Bo4Z+VZvcwbKUSRFSl6ZNjWpLzFD0MxMhnLtuyH9K7R+WuKs7SzfCDS/Ucgh0eYPwHrCMHUIcqWU5FZgkCO0WZB3tJD2uebY+2o1Sn7+d4uyfOb6f1/r5tYczoeOnT/LPS3YHEjW1v6/hSPQt+fldL1X9fHljitRWIaOCh1sT9NhrH0FAUC/EsXX5yVu4MDKg7ird0tTVAeVHdqzhaIwUFfDRpRm5QFwFOqjrrfXpl61jjq3j1Vqi6TJiQHdY/1kDKpA2bDcfn8+dNtWgCkpjMboPhXS0/YE2f6EltE/5tzvWbFWA00eDWWAwosGcMgdh3c7Gf6bHd+zKOinelf4ctmX7x0prO2Wmr2bT14a+KO5RA6DoR/8NAqqieZBZM6EefF+Pp1ddvvvcj5dKjcnNp+3wSnqaPn/rP7N551dxuhecLIYW9mh3/bCPFXCWn7oBv1v3NhdAJGxsmtwNXIV/gVRHgAGMIEvbAAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI9SURBVHgBpVRLbhNBEK3qaVuR2PgGjE8Q+wQ4N7B3IILxsAGRhZ0TODlB7EU2yaLtAALBwiDEGucENhcgcwMisQA801W8CQk4/ku0NJoe16tXr151m2iD9elESx9PtbIJ1m4CUisto0axHa7D8jrAwGloRS/AdukNF2sRX67Cm3WEJFL1pKRMBexb6+BrCZW5qYZjYR6CtPlfhG9d2hDWUEQOheQDyAvvXFJZlXPLQ+e0sEVojdLQkC0Y0jYAhe/EZfxIKQm85BgPCqTw0sY/4W005Su/hgombqO5cHZG2ReG0bsfBVH2/cb5Dl7NBZhsF7PygX0Q2d4rl4RMpn0d6gI0zqaqJPGEcvFN8g8yB1uUvr+mCqG0xPBVFUMj6T98kuv/lfTSTVrE5ghq44maHbQR04oFe8I8y2eQhTgK+7tRvnOjeAqUVgMml+29Ckjz48VkSSVgHlwRqNYeRbnhtAVzlRmVM09VpTxL+ifuL4gxHPG1ZUVvrd5ZOnD9VJfFEfvmet4tii08h165pFP39hQtnrhJ41+cxp6luih3rmUklsjwCKGul6RjTQ5K8E+DcWZHKOeDw8R4XEFt5sQWZ4c3p9AHpiR4C9NdNnaEm1IRNh2o6opqYxKkX4V0Gw8lga/QBi3fw50lJFShdJz6X+Wn9WD/2WPbUkmLIP6CGIowidHttS0fv0hGOKehMdx6vmv7CwrS8dmVn+1Mz17dFpcqPMJdRvXzO94Wl5Fla6+e70283xGW8yxnOvYbpGIW2m9kdXMAAAAASUVORK5CYII=",className:W.a.starImage})})]})}function _(){var e=Object(i.c)((function(e){return e.movies})),t=Object(i.c)((function(e){return e.favourites})).map((function(e){return e.id}));return Object(y.jsx)(y.Fragment,{children:e.length>0?Object(y.jsx)("section",{className:z.a.cards,children:e.map((function(e){return Object(y.jsx)(T,{movie:e,inFavourites:t.includes(e.id)},e.id)}))}):Object(y.jsx)("section",{className:z.a.notFound,children:"Movies not found..."})})}var Z=a(35),Y=a.n(Z);function G(){var e=Object(b.h)(),t=Object(n.useState)(""),a=Object(H.a)(t,2),c=a[0],r=a[1],s=Object(i.c)((function(e){return e.inputSearch})),o=Object(i.b)(),u=function(e,t){var a=Object(n.useState)(e),c=Object(H.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){var a=setTimeout((function(){s(e)}),t);return function(){clearTimeout(a)}}),[e,t]),r}(c,1e3);Object(n.useEffect)((function(){o(f(u))}),[u]),Object(n.useEffect)((function(){return r(s)}),[s]);return Object(y.jsx)("form",{className:Y.a.searchForm,onSubmit:function(e){e.preventDefault(),o(f(c))},children:Object(y.jsx)("input",{value:c,onChange:function(e){r(e.target.value),console.log(e)},className:Y.a.searchInput,type:"search",placeholder:"Popular movies",disabled:"/"!==e.pathname})})}var k=a(36),J=a.n(k);function K(){var e=Object(b.i)().id,t=Object(n.useState)({}),a=Object(H.a)(t,2),c=a[0],r=a[1],s=function(){var e=Object(x.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("5e5a3994082d5957cb6a987f74121734","&language=en-US"));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s(e)}),[e]),Object(y.jsxs)("div",{className:J.a.card,children:[Object(y.jsx)("h3",{children:c.title}),Object(y.jsx)("p",{children:"Tagline: ".concat(c.tagline)}),Object(y.jsx)("p",{children:"Average vote: ".concat(c.vote_average)}),Object(y.jsx)("p",{children:"Release date: ".concat(c.release_date)}),Object(y.jsxs)("p",{children:["Home page:",Object(y.jsx)("a",{href:c.homepage,alt:"".concat(c.title," homepage"),children:c.homepage})]}),Object(y.jsx)("p",{children:c.overview}),Object(y.jsx)("img",{alt:"poster to ".concat(c.title," movie"),src:"https://image.tmdb.org/t/p/w500".concat(c.poster_path),className:J.a.poster})]})}var q=a(7),$=a.n(q);var ee=function(e){var t=e.isOpen,a=e.onSubmit,n=e.submitEnable,c=e.onClose,r=e.title,s=e.children,i=e.buttonText;return Object(y.jsx)("div",{className:t?"".concat($.a.popup," ").concat($.a.popupOpen):"".concat($.a.popup),children:Object(y.jsxs)("form",{className:$.a.popupForm,onSubmit:a,noValidate:!0,children:[Object(y.jsx)("button",{className:$.a.popupButtonClose,type:"button","aria-label":"close",onClick:c,children:"X"}),Object(y.jsx)("h3",{className:"popupTitle",children:r}),s,Object(y.jsx)("button",{className:n?$.a.popupButtonSubmit:"".concat($.a.popupButtonSubmit," ").concat($.a.popupButtonSubmitDisabled),disabled:!n,type:"submit",children:i})]})})},te=a(23);function ae(){var e=c.a.useState({}),t=Object(H.a)(e,2),a=t[0],r=t[1],s=c.a.useState({}),i=Object(H.a)(s,2),o=i[0],u=i[1],A=c.a.useState(!1),p=Object(H.a)(A,2),O=p[0],d=p[1],j=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];r(e),u(t),d(a)}),[r,u,d]);return{values:a,handleChange:function(e){var t=e.target,n=t.name,c=t.value;r(Object(l.a)(Object(l.a)({},a),{},Object(te.a)({},n,c))),u(Object(l.a)(Object(l.a)({},o),{},Object(te.a)({},n,t.validationMessage))),d(t.closest("form").checkValidity())},errors:o,isValid:O,resetForm:j}}var ne=function(e){var t=e.isOpen,a=ae(),n=a.values,c=a.handleChange,r=a.errors,s=a.isValid,o=a.resetForm,u=Object(i.b)(),A=Object(b.g)();function p(){A.push("/"),o({email:"",password:""})}return Object(y.jsx)(ee,{isOpen:t,onClose:p,title:"Log In",onSubmit:function(e){e.preventDefault();var t=n.email,a=n.password;if(t&&a){var c=JSON.parse(localStorage.getItem(t));c?c.user.password===a?(u(D(c.user)),u({type:"SET_FAVOURITES",payload:c.favourites}),u({type:"DELETE_HISTORY"}),p()):A.push("/sign-in/info?data=Wrong password"):A.push("/sign-in/info?data=User not found")}},buttonText:"Log in",submitEnable:s,children:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:$.a.popupInputField,children:[Object(y.jsx)("label",{htmlFor:"email",children:"Email"}),Object(y.jsx)("input",{id:"email",className:"popupInput",type:"email",value:n.email||"",onChange:c,name:"email",minLength:"5",maxLength:"40",placeholder:"Enter email",pattern:"^[^@]+@[^@.]+\\.[^@]+$",required:!0}),Object(y.jsx)("span",{className:$.a.popupInputError,children:r.email||""})]}),Object(y.jsxs)("div",{className:$.a.popupInputField,children:[Object(y.jsx)("label",{htmlFor:"password",children:"Password"}),Object(y.jsx)("input",{id:"password",className:"popupInput",type:"password",value:n.password||"",onChange:c,name:"password",minLength:"5",maxLength:"40",placeholder:"Enter password",required:!0}),Object(y.jsx)("span",{className:$.a.popupInputError,children:r.password||""})]})]})})},ce=a(20),re=a.n(ce);function se(e){var t=e.isOpen,a=Object(b.h)().search,n=new URLSearchParams(a),c=Object(b.g)();return Object(y.jsx)("div",{className:t?"".concat(re.a.popup," ").concat(re.a.popupOpen):"".concat(re.a.popup),children:Object(y.jsxs)("div",{className:re.a.popupBody,children:[Object(y.jsx)("button",{className:re.a.popupButtonClose,type:"button","aria-label":"close",onClick:function(){return c.goBack()},children:"X"}),n.get("data")]})})}var ie=function(e){var t=e.isOpen,a=ae(),n=a.values,c=a.handleChange,r=a.errors,s=a.isValid,o=a.resetForm,u=Object(i.b)(),A=Object(b.g)();function p(){A.push("/"),o({email:"",password:""})}return Object(y.jsx)(ee,{isOpen:t,onClose:p,title:"Log In",onSubmit:function(e){e.preventDefault();var t=n.email,a=n.password,c=n.name;t&&a&&c&&(localStorage.getItem(t)?A.push("/sign-up/info?data=User already exists"):(u(D({email:t,password:a,name:c})),u({type:"DELETE_HISTORY"}),p()))},buttonText:"Register",submitEnable:s,children:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:$.a.popupInputField,children:[Object(y.jsx)("label",{htmlFor:"email",children:"Email"}),Object(y.jsx)("input",{id:"email",className:"popupInput",type:"email",value:n.email||"",onChange:c,name:"email",minLength:"5",maxLength:"40",placeholder:"Enter email",pattern:"^[^@]+@[^@.]+\\.[^@]+$",required:!0}),Object(y.jsx)("span",{className:$.a.popupInputError,children:r.email||""})]}),Object(y.jsxs)("div",{className:$.a.popupInputField,children:[Object(y.jsx)("label",{htmlFor:"password",children:"Password"}),Object(y.jsx)("input",{id:"password",className:"popupInput",type:"password",value:n.password||"",onChange:c,name:"password",minLength:"5",maxLength:"40",placeholder:"Enter password",required:!0}),Object(y.jsx)("span",{className:$.a.popupInputError,children:r.password||""})]}),Object(y.jsxs)("div",{className:$.a.popupInputField,children:[Object(y.jsx)("label",{htmlFor:"name",children:"Name"}),Object(y.jsx)("input",{id:"name",className:"popupInput",type:"text",value:n.name||"",onChange:c,name:"name",minLength:"2",maxLength:"40",placeholder:"Enter name",required:!0}),Object(y.jsx)("span",{className:$.a.popupInputError,children:r.name||""})]})]})})};function oe(){var e=Object(b.j)().url;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(b.b,{path:"/sign-in",children:function(e){var t=e.match;return Object(y.jsx)(ne,{isOpen:Boolean(t)})}}),Object(y.jsx)(b.b,{path:"/sign-up",children:function(e){var t=e.match;return Object(y.jsx)(ie,{isOpen:Boolean(t)})}}),Object(y.jsx)(b.b,{path:"".concat(e,"/info"),children:function(e){var t=e.match;return Object(y.jsx)(se,{isOpen:Boolean(t)})}})]})}var ue=a(41),Ae=["component","path"],pe=function(e){var t=e.component,a=e.path,n=Object(ue.a)(e,Ae),c=Object(i.c)((function(e){return e.user}));return Object(y.jsx)(b.b,{path:a,children:function(){return c.name?Object(y.jsx)(t,Object(l.a)({},n)):Object(y.jsx)(b.a,{to:"/sign-in"})}})},Oe=a(24),le=a.n(Oe);function de(){var e=Object(i.c)((function(e){return e.history})),t=Object(i.b)();return e=e.filter((function(e,t,a){return a.indexOf(e)===t})),Object(y.jsxs)("section",{className:le.a.history,children:[Object(y.jsx)("h3",{children:"History"}),Object(y.jsx)("ul",{className:le.a.historyList,children:e.map((function(e,a){return Object(y.jsx)("li",{className:le.a.historyListItem,children:Object(y.jsx)(o.b,{exact:!0,to:"/",onClick:function(){return t(f(e))},className:le.a.historyListLink,children:e},a)},a)}))})]})}function je(){var e=Object(i.c)((function(e){return e.favourites}));return Object(y.jsx)(y.Fragment,{children:e.length>0?Object(y.jsx)("section",{className:z.a.cards,children:e.map((function(e){return Object(y.jsx)(T,{movie:e,inFavourites:!0},e.id)}))}):Object(y.jsx)("section",{className:z.a.notFound,children:"Nothing added to favourites..."})})}var ge=a(30),be=a.n(ge);var me=function(){return Object(y.jsxs)("section",{className:be.a.preloader,children:[Object(y.jsx)("i",{className:be.a.circlePreloader}),Object(y.jsx)("p",{className:be.a.preloaderText,children:"Searching movies in progress..."})]})};var he=function(){var e=Object(i.c)((function(e){return e.inputSearch})),t=Object(i.c)((function(e){return e.preloader})),a=Object(i.b)();return Object(n.useEffect)((function(){return a(function(){var e=Object(x.a)(h.a.mark((function e(t,a){var n,c,r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a(),c=n.inputSearch,e.prev=1,t(I(!0)),0!==c.length){e.next=9;break}return e.next=6,fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(v,"&language=en-US&page=1"));case 6:r=e.sent,e.next=12;break;case 9:return e.next=11,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(v,"&language=en-US&query=").concat(c,"&page=1&include_adult=false"));case 11:r=e.sent;case 12:return e.next=14,r.json();case 14:s=e.sent,t({type:"SET_MOVIES",payload:s.results}),t(I(!1)),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(1),console.log(e.t0),t(I(!1));case 23:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(t,a){return e.apply(this,arguments)}}())}),[e]),Object(y.jsxs)(B,{children:[Object(y.jsx)(P,{}),Object(y.jsx)(G,{}),Object(y.jsxs)(b.d,{children:[Object(y.jsx)(b.b,{exact:!0,path:"/",children:t?Object(y.jsx)(me,{}):Object(y.jsx)(_,{})}),Object(y.jsx)(b.b,{exact:!0,path:"/film/:id",children:Object(y.jsx)(K,{})}),Object(y.jsxs)(b.b,{path:["/sign-in","/sign-up"],children:[Object(y.jsx)(oe,{}),t?Object(y.jsx)(me,{}):Object(y.jsx)(_,{})]}),Object(y.jsx)(pe,{component:je,path:"/favourites"}),Object(y.jsx)(pe,{component:de,path:"/history"})]}),Object(y.jsx)(X,{})]})};s.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(o.a,{children:Object(y.jsx)(i.a,{store:g,children:Object(y.jsx)(he,{})})})}),document.getElementById("root"))},7:function(e,t,a){e.exports={popup:"PopupWithForm_popup__1arVG",popupOpen:"PopupWithForm_popupOpen__3goEW",popupForm:"PopupWithForm_popupForm__18-kS",popupButtonClose:"PopupWithForm_popupButtonClose__X3rJx",popupInputField:"PopupWithForm_popupInputField__1jd4S",popupInputError:"PopupWithForm_popupInputError__5_mnU",popupButtonSubmit:"PopupWithForm_popupButtonSubmit__3Qk_I",popupButtonSubmitDisabled:"PopupWithForm_popupButtonSubmitDisabled__jRVwD"}}},[[55,1,2]]]);
//# sourceMappingURL=main.3a878376.chunk.js.map