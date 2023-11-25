"use strict";(self.webpackChunk_=self.webpackChunk_||[]).push([[415],{18:function(n,t,e){e.d(t,{Df:function(){return o},TP:function(){return s},XT:function(){return p}});var r=e(5861),a=e(7757),c=e.n(a),i=e(5294),u=e(3708);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/all/day?language=en-US",u.J);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:"",n.next=3,i.Z.get("movie/".concat(t).concat(e,"?language=en-US"),u.J);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,i.Z.get("/search/movie?query=".concat(t,"&page=").concat(e),u.J);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},115:function(n,t,e){e.d(t,{Z:function(){return f}});e(2791);var r,a,c=e(1087),i=e(3708),u=e(168),o=e(5867),s=o.ZP.h2(r||(r=(0,u.Z)(["\n  color: #eb4034;\n  text-align: center;\n  font-size: 16px;\n  margin: 10px;\n  text-decoration: none;\n"]))),p=o.ZP.li(a||(a=(0,u.Z)(["\n  background-color: #212121;\n  border-radius: 8px;\n\n  &:hover ",",\n  &:focus "," {\n    color: #eb0034;\n  }\n"])),s,s),l=e(184),f=function(n){var t=n.id,e=n.title,r=n.posterPath,a=n.location;return(0,l.jsx)(p,{children:(0,l.jsxs)(c.rU,{to:"/movies/".concat(t),style:{textDecoration:"none"},state:{from:a},children:[(0,l.jsx)("img",{src:"".concat(i.w).concat(r),alt:"".concat(e," poster"),width:280,height:420}),(0,l.jsx)(s,{children:e})]})})}},3708:function(n,t,e){e.d(t,{J:function(){return a},w:function(){return r}});var r="https://image.tmdb.org/t/p/w500/",a={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2NjM2Q5NTBjYTgwZWQ1NDg2ZjRiMjQ4ZGQ3NjdlYyIsInN1YiI6IjY1NWY0NjI5MWQzNTYzMDEzODg5M2EyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kyVRCg0kFAql5qlwEryhn6DzGBM7D-KJwK25MHgGciE"}}},5415:function(n,t,e){e.r(t);var r=e(5861),a=e(9439),c=e(7757),i=e.n(c),u=e(2791),o=e(18),s=e(8174),p=e(4065),l=e(115),f=e(7689),d=e(3478),h=e(184);t.default=function(){var n=(0,u.useState)(!1),t=(0,a.Z)(n,2),e=t[0],c=t[1],x=(0,u.useState)([]),g=(0,a.Z)(x,2),m=g[0],v=g[1],Z=(0,f.TH)();return(0,u.useEffect)((function(){var n=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),n.prev=1,n.next=4,(0,o.Df)();case 4:t=n.sent,v(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),s.Am.error("Error fetching data:",n.t0);case 11:return n.prev=11,c(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,h.jsxs)(h.Fragment,{children:[e&&(0,h.jsx)(d.Z,{}),(0,h.jsx)(p.D,{children:"Trending today"}),(0,h.jsx)(p.e,{children:m.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return e?(0,h.jsx)(l.Z,{location:Z,id:t,title:e,posterPath:r},t):null}))})]})}},4065:function(n,t,e){e.d(t,{D:function(){return u},e:function(){return o}});var r,a,c=e(168),i=e(5867),u=i.ZP.h1(r||(r=(0,c.Z)(["\n  margin: 20px auto;\n  display: block;\n  text-align: center;\n  text-transform: capitalize;\n"]))),o=i.ZP.ul(a||(a=(0,c.Z)(["\n  display: grid;\n  grid-template-columns: 280px;\n  gap: 20px;\n  justify-content: center;\n\n  @media (min-width: 768px) {\n    grid-template-columns: 280px 280px;\n  }\n\n  @media (min-width: 920px) {\n    grid-template-columns: 280px 280px 280px;\n  }\n\n  @media (min-width: 1240px) {\n    grid-template-columns: 280px 280px 280px 280px;\n  }\n"])))}}]);
//# sourceMappingURL=415.45514d3d.chunk.js.map