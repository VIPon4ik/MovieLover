"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{18:function(e,n,r){r.d(n,{Df:function(){return i},TP:function(){return o},XT:function(){return f}});var t=r(5861),a=r(7757),u=r.n(a),c=r(5294),s=r(3708);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var e=(0,t.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/all/day?language=en-US",s.JY);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:"",e.next=3,c.Z.get("movie/".concat(n).concat(r,"?language=en-US"),s.JY);case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,c.Z.get("/search/movie?query=".concat(n,"&page=").concat(r),s.JY);case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},186:function(e,n,r){r.r(n);var t=r(5861),a=r(9439),u=r(7757),c=r.n(u),s=r(2791),i=r(18),o=r(7689),f=r(8174),p=r(3478),v=r(184);n.default=function(){var e=(0,s.useState)(!1),n=(0,a.Z)(e,2),r=n[0],u=n[1],h=(0,o.UO)().movieId,l=(0,s.useState)([]),d=(0,a.Z)(l,2),g=d[0],x=d[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.prev=1,e.next=4,(0,i.TP)(h,"/reviews");case 4:n=e.sent,x(n.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),f.Am.error("Problem with API: ",e.t0);case 11:return e.prev=11,u(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,v.jsxs)(v.Fragment,{children:[r&&(0,v.jsx)(p.Z,{}),(0,v.jsx)("ul",{children:0===g.length&&!1===r?(0,v.jsx)("p",{children:"We don't have any reviews for this movie"}):g.map((function(e){var n=e.author,r=e.content,t=e.id;return(0,v.jsxs)("li",{children:[(0,v.jsx)("h3",{children:n}),(0,v.jsx)("p",{children:r})]},t)}))})]})}}}]);
//# sourceMappingURL=186.4d7e9536.chunk.js.map