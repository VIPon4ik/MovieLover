"use strict";(self.webpackChunk_=self.webpackChunk_||[]).push([[186],{18:function(n,t,e){e.d(t,{Df:function(){return s},TP:function(){return o},XT:function(){return f}});var r=e(5861),a=e(7757),u=e.n(a),c=e(5294),i=e(3708);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?language=en-US",i.J);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r,a=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:"",n.next=3,c.Z.get("movie/".concat(t).concat(e,"?language=en-US"),i.J);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r,a=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,c.Z.get("/search/movie?query=".concat(t,"&page=").concat(e),i.J);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},186:function(n,t,e){e.r(t);var r=e(5861),a=e(9439),u=e(7757),c=e.n(u),i=e(2791),s=e(18),o=e(7689),f=e(8174),p=e(184);t.default=function(){var n=(0,o.UO)().movieId,t=(0,i.useState)([]),e=(0,a.Z)(t,2),u=e[0],h=e[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.TP)(n,"/reviews");case 3:e=t.sent,h(e.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),f.Am.error("Problem with API: ",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,p.jsx)("ul",{children:0===u.length?(0,p.jsx)("p",{children:"We don't have any reviews for this movie"}):u.map((function(n){var t=n.author,e=n.content,r=n.id;return(0,p.jsxs)("li",{children:[(0,p.jsx)("h3",{children:t}),(0,p.jsx)("p",{children:e})]},r)}))})}},3708:function(n,t,e){e.d(t,{J:function(){return a},w:function(){return r}});var r="https://image.tmdb.org/t/p/w500/",a={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2NjM2Q5NTBjYTgwZWQ1NDg2ZjRiMjQ4ZGQ3NjdlYyIsInN1YiI6IjY1NWY0NjI5MWQzNTYzMDEzODg5M2EyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kyVRCg0kFAql5qlwEryhn6DzGBM7D-KJwK25MHgGciE"}}}}]);
//# sourceMappingURL=186.b05903c5.chunk.js.map