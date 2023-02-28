"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[728],{8728:function(n,e,r){r.r(e),r.d(e,{default:function(){return O}});var t,a,o,s,i,p,c=r(5861),u=r(9439),l=r(7757),x=r.n(l),d=r(2791),g=r(7689),f=r(8820),h=r(168),v=r(6444),b=v.ZP.div(t||(t=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-top: 10px;\n  margin-bottom: 30px;\n  background-image: url(./img/pngegg2.png);\n  > img {\n    width: 320px;\n    border-radius: 8px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),\n    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n    transition: transform 250ms linear;\n    &:hover,\n    &:focus {\n    transform: scale(1.03);\n  }\n  }\n"]))),m=v.ZP.div(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 600px;\n"]))),w=r(184),k=function(n){var e=n.poster,r=n.title,t=n.year,a=n.vote,o=n.overview,s=n.genres;return(0,w.jsxs)(b,{children:[(0,w.jsx)("img",{src:e,alt:r}),(0,w.jsxs)(m,{children:[(0,w.jsxs)("h2",{children:[r," (",t,")"]}),(0,w.jsxs)("p",{children:["User Score: ",a,"%"]}),(0,w.jsx)("h3",{children:"Overview"}),(0,w.jsx)("p",{children:o}),(0,w.jsx)("h3",{children:"Genres"}),(0,w.jsx)("p",{children:s})]})]})},y=r(6101),j=r(1087),Z=(0,v.ZP)(j.rU)(o||(o=(0,h.Z)(['\n  position: relative;\n  width: 90px;\n  display: flex;\n  gap: 2px;\n  justify-content: center;\n  align-items: center;\n  padding: 8px;\n  font-size: 18px;\n  font-weight: 600;\n  border: 1px solid black;\n  border-radius: 18px;\n  background: none;\n  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);\n  text-decoration: none;\n  cursor: pointer;\n  color: rgb(200, 10, 10);\n  transition: box-shadow 150ms linear, transform 250ms ease-in-out;\n  &:before {\n    content: "";\n    background: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .5));\n    height: 50px;\n    width: 50px;\n    position: absolute;\n    top: -8px;\n    left: -75px;\n    transform: skewX(-45deg);\n    }\n  \n  &:hover {\n    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.6);\n    background: rgb(200, 10, 10);\n    border: 1px solid rgb(200, 10, 10);\n    color: #fff;\n  }\n  &:hover:before {\n    left: 150px;\n    transition: .5s ease-in-out;\n    }\n']))),_=v.ZP.h3(s||(s=(0,h.Z)(["\n  margin-bottom: 20px;\n"]))),P=v.ZP.div(i||(i=(0,h.Z)(["\n  display: flex;\n  gap: 75px;\n  margin-bottom: 20px;\n  padding: 10px 0;\n  margin-right: 14px;\n  border-bottom: 1px rgb(200, 10, 10) solid;\n  border-top: 1px rgb(200, 10, 10) solid;\n"]))),E=(0,v.ZP)(j.OL)(p||(p=(0,h.Z)(['\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px;\n  min-width: 80px;\n  max-height: 50px;\n  border: 1px solid black;\n  border-radius: 22px;\n  text-decoration: none;\n  font-size: 18px;\n  font-weight: 500;\n  color: black;\n  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);\n  transition: box-shadow 150ms linear, color 250ms linear, \n  border 250ms linear, transform 250ms ease-in-out;\n  &:before {\n    content: "";\n    background: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .5));\n    height: 50px;\n    width: 50px;\n    position: absolute;\n    top: -8px;\n    left: -65px;\n    transform: skewX(-45deg);\n    }\n    &:hover:before {\n    left: 150px;\n    transition: .5s ease-in-out;\n    }\n  &.active {\n    background-color: rgb(200, 10, 10);\n    color: white;\n    border: 1px solid rgb(200, 10, 10);    \n    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.6);  \n  }\n  :hover:not(.active) {\n    color: rgb(200, 10, 10);\n    border: 1px solid rgb(200, 10, 10);\n  }\n']))),S=r(3243),z=r(8174);function O(){var n,e,r=(0,d.useState)({backdrop_path:"",genres:[],overview:"",poster_path:"",release_date:"",title:"",vote_average:""}),t=(0,u.Z)(r,2),a=t[0],o=t[1],s=(0,d.useState)(!0),i=(0,u.Z)(s,2),p=i[0],l=i[1],h=(0,g.UO)().movieId,v="custom-id-yes";(0,d.useEffect)((function(){function n(){return(n=(0,c.Z)(x().mark((function n(){var e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,S.TP)(h);case 3:if(e=n.sent,0!==Object.keys(e).length){n.next=6;break}return n.abrupt("return");case 6:o(e),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0),z.Am.info("Oops no results found \ud83d\ude25, please try again later!",{toastId:v});case 13:return n.prev=13,l(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,9,13,16]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[h]);var b=null!==(n=null===(e=(0,g.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies",m=a.poster_path,j=a.title,O=a.release_date,C=a.vote_average,U=a.overview,I=a.genres,T=m?"https://image.tmdb.org/t/p/w500".concat(m):"https://via.placeholder.com/200x300?text=Poster+Not+Found",A=O.slice(0,4),B=Math.floor(10*C),F=I.map((function(n){return n.name})).join(", ");return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("main",{style:{backgroundColor:"#fff",paddingLeft:"14px"},children:[(0,w.jsxs)(Z,{to:b,children:[(0,w.jsx)(f.IaS,{size:18,style:{marginBottom:"-2px"}}),"Go Back"]}),a&&(0,w.jsx)(k,{title:j,year:A,poster:T,vote:B,overview:U,genres:F}),(0,w.jsx)(_,{children:"Additional information"}),(0,w.jsxs)(P,{children:[(0,w.jsx)(E,{to:"cast",state:{from:b},children:"Cast"}),(0,w.jsx)(E,{to:"reviews",state:{from:b},children:"Reviews"})]}),(0,w.jsx)(d.Suspense,{fallback:(0,w.jsx)(y.default,{}),children:(0,w.jsx)(g.j3,{})})]}),p&&(0,w.jsx)(y.default,{})]})}},3243:function(n,e,r){r.d(e,{TP:function(){return l},gH:function(){return g},tx:function(){return d},z5:function(){return u},zv:function(){return x}});var t=r(5861),a=r(7757),o=r.n(a),s=r(1243),i="https://api.themoviedb.org/3/",p="f87210516a7f6fda7a5c975f08793382",c="en-US",u=function(){var n=(0,t.Z)(o().mark((function n(){var e,r,t=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.length>0&&void 0!==t[0]?t[0]:1,n.prev=1,n.next=4,s.Z.get("".concat(i,"trending/movie/day"),{params:{api_key:p,language:c,page:e}});case 4:return r=n.sent,console.log(r),n.abrupt("return",r.data);case 9:throw n.prev=9,n.t0=n.catch(1),new Error(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("".concat(i,"movie/").concat(e),{params:{api_key:p,language:c}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:throw n.prev=7,n.t0=n.catch(0),new Error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("".concat(i,"movie/").concat(e,"/credits"),{params:{api_key:p,language:c}});case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 7:throw n.prev=7,n.t0=n.catch(0),new Error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("".concat(i,"movie/").concat(e,"/reviews"),{params:{api_key:p,language:c}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 7:throw n.prev=7,n.t0=n.catch(0),new Error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,n.prev=1,n.next=4,s.Z.get("".concat(i,"search/movie"),{params:{api_key:p,language:c,query:e,page:r}});case 4:return t=n.sent,console.log(t.data),n.abrupt("return",t.data);case 9:throw n.prev=9,n.t0=n.catch(1),new Error(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=728.a51b2bea.chunk.js.map