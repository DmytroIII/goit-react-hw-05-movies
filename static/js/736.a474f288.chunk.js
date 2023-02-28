"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{9736:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n,a=r(5861),c=r(9439),s=r(7757),u=r.n(s),o=r(7689),i=r(2791),p=r(8174),l=(r(5462),r(168)),h=r(6444).ZP.ul(n||(n=(0,l.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 100px);\n  justify-content: center;\n  gap: 20px;\n  padding: 20px 0;\n  margin-right: 10px;\n  >li {\n    list-style: none;\n    >img {\n      width: 100px;\n      height: 150px;\n    }\n  }\n"]))),f=r(6101),g=r(3243),v=r(184),d="custom-id-yes";function m(){var e=(0,i.useState)([]),t=(0,c.Z)(e,2),r=t[0],n=t[1],s=(0,i.useState)(!1),l=(0,c.Z)(s,2),m=l[0],w=l[1],x=(0,i.useState)(!0),k=(0,c.Z)(x,2),y=k[0],Z=k[1],_=(0,o.UO)().movieId;return(0,i.useEffect)((function(){function e(){return(e=(0,a.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,g.zv)(_);case 3:if(0!==(t=e.sent).length){e.next=7;break}return w(!0),e.abrupt("return",p.Am.warn("Ooops, there are no cast! Please, try again later",{toastId:d}));case 7:n(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:return e.prev=13,Z(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[_]),(0,v.jsxs)(v.Fragment,{children:[r&&(0,v.jsx)(h,{children:r.map((function(e){return(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/w500".concat(e.profile_path):"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png",alt:e.name}),(0,v.jsx)("h4",{children:e.name}),(0,v.jsxs)("p",{children:["Character: ",e.character]})]},e.cast_id)}))}),(0,v.jsx)(p.Ix,{autoClose:2e3,position:"top-center",theme:"light"}),m&&(0,v.jsx)("p",{children:"We don't have cast for this movie "}),y&&(0,v.jsx)(f.default,{})]})}},3243:function(e,t,r){r.d(t,{TP:function(){return l},gH:function(){return g},tx:function(){return f},z5:function(){return p},zv:function(){return h}});var n=r(5861),a=r(7757),c=r.n(a),s=r(1243),u="https://api.themoviedb.org/3/",o="f87210516a7f6fda7a5c975f08793382",i="en-US",p=function(){var e=(0,n.Z)(c().mark((function e(){var t,r,n=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,e.prev=1,e.next=4,s.Z.get("".concat(u,"trending/movie/day"),{params:{api_key:o,language:i,page:t}});case 4:return r=e.sent,console.log(r),e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(1),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"movie/").concat(t),{params:{api_key:o,language:i}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"movie/").concat(t,"/credits"),{params:{api_key:o,language:i}});case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"movie/").concat(t,"/reviews"),{params:{api_key:o,language:i}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,e.prev=1,e.next=4,s.Z.get("".concat(u,"search/movie"),{params:{api_key:o,language:i,query:t,page:r}});case 4:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(1),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.a474f288.chunk.js.map