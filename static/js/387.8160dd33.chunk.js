"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{4387:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n,a=r(5861),c=r(9439),u=r(7757),s=r.n(u),o=r(7689),i=r(2791),p=r(8174),f=(r(5462),r(168)),h=r(6444).ZP.ul(n||(n=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding-bottom: 40px;\n  margin-right: 10px;\n"]))),l=r(6101),v=r(3243),g=r(184),d="custom-id-yes";function m(){var e=(0,i.useState)([]),t=(0,c.Z)(e,2),r=t[0],n=t[1],u=(0,i.useState)(!0),f=(0,c.Z)(u,2),m=f[0],w=f[1],x=(0,i.useState)(!1),k=(0,c.Z)(x,2),y=k[0],Z=k[1],_=(0,o.UO)().movieId;return(0,i.useEffect)((function(){function e(){return(e=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.tx)(_);case 3:if(0!==(t=e.sent).length){e.next=8;break}return Z(!0),p.Am.warn("Sorry, there are no reviews",{toastId:d}),e.abrupt("return");case 8:n(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.prev=14,w(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))).apply(this,arguments)}w(!0),function(){e.apply(this,arguments)}()}),[_]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(h,{children:r.map((function(e){return(0,g.jsxs)("li",{children:[(0,g.jsxs)("h4",{children:["Author: ",e.author]}),(0,g.jsx)("p",{children:e.content})]},e.id)}))}),(0,g.jsx)(p.Ix,{autoClose:2e3,position:"top-center",theme:"light"}),y&&(0,g.jsx)("p",{children:"We don't have reviews for this movie"}),m&&(0,g.jsx)(l.default,{})]})}},3243:function(e,t,r){r.d(t,{TP:function(){return f},gH:function(){return v},tx:function(){return l},z5:function(){return p},zv:function(){return h}});var n=r(5861),a=r(7757),c=r.n(a),u=r(1243),s="https://api.themoviedb.org/3/",o="f87210516a7f6fda7a5c975f08793382",i="en-US",p=function(){var e=(0,n.Z)(c().mark((function e(){var t,r,n=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,e.prev=1,e.next=4,u.Z.get("".concat(s,"trending/movie/day"),{params:{api_key:o,language:i,page:t}});case 4:return r=e.sent,console.log(r),e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(1),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"movie/").concat(t),{params:{api_key:o,language:i}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"movie/").concat(t,"/credits"),{params:{api_key:o,language:i}});case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"movie/").concat(t,"/reviews"),{params:{api_key:o,language:i}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,e.prev=1,e.next=4,u.Z.get("".concat(s,"search/movie"),{params:{api_key:o,language:i,query:t,page:r}});case 4:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(1),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.8160dd33.chunk.js.map