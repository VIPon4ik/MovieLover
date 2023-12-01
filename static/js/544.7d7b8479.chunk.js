"use strict";(self.webpackChunkMovieLover=self.webpackChunkMovieLover||[]).push([[544],{18:function(n,t,e){e.d(t,{Df:function(){return u},TP:function(){return s},XT:function(){return p}});var r=e(5861),a=e(7757),c=e.n(a),i=e(5294),o=e(3708);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/all/day?language=en-US",o.JY);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:"",n.next=3,i.Z.get("movie/".concat(t).concat(e,"?language=en-US"),o.JY);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,i.Z.get("/search/movie?query=".concat(t,"&page=").concat(e),o.JY);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3116:function(n,t,e){e(2791);var r=e(1087),a=e(3708),c=e(1525),i=e(184);t.Z=function(n){var t=n.id,e=n.title,o=n.posterPath,u=n.location;return(0,i.jsx)(c.oA,{children:(0,i.jsxs)(r.rU,{to:"/movies/".concat(t),style:{textDecoration:"none"},state:{from:u},children:[o?(0,i.jsx)("img",{src:"".concat(a.w$).concat(o),alt:"".concat(e," poster"),width:280,height:420}):(0,i.jsx)(c.Ik,{children:"No poster"}),(0,i.jsx)(c.rS,{children:e})]})})}},1525:function(n,t,e){e.d(t,{Ik:function(){return p},oA:function(){return s},rS:function(){return u}});var r,a,c,i=e(168),o=e(5867),u=o.ZP.h2(r||(r=(0,i.Z)(["\n  color: ",";\n  text-align: center;\n  font-size: 16px;\n  margin: 10px;\n  text-decoration: none;\n"])),(function(n){return n.theme.light_red})),s=o.ZP.li(a||(a=(0,i.Z)(["\n  background-color: ",";\n  border-radius: 8px;\n\n  &:hover ",",\n  &:focus "," {\n    color: ",";\n  }\n"])),(function(n){return n.theme.second_black}),u,u,(function(n){return n.theme.dark_red})),p=o.ZP.div(c||(c=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  width: 280px;\n  height: 420px;\n"])))},9544:function(n,t,e){e.r(t);var r=e(5861),a=e(9439),c=e(7757),i=e.n(c),o=e(2791),u=e(18),s=e(8174),p=e(7398),f=e(3116),l=e(7689),d=e(3478),h=e(184);t.default=function(){var n=(0,o.useState)(!1),t=(0,a.Z)(n,2),e=t[0],c=t[1],x=(0,o.useState)([]),v=(0,a.Z)(x,2),m=v[0],g=v[1],Z=(0,l.TH)();return(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),n.prev=1,n.next=4,(0,u.Df)();case 4:t=n.sent,g(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),s.Am.error("Error fetching data:",n.t0);case 11:return n.prev=11,c(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,h.jsxs)(h.Fragment,{children:[e&&(0,h.jsx)(d.Z,{}),(0,h.jsx)(p.D,{children:"Trending today"}),(0,h.jsx)(p.e,{children:m.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return e?(0,h.jsx)(f.Z,{location:Z,id:t,title:e,posterPath:r},t):null}))})]})}},7398:function(n,t,e){e.d(t,{D:function(){return o},e:function(){return u}});var r,a,c=e(168),i=e(5867),o=i.ZP.h1(r||(r=(0,c.Z)(["\n  margin: 20px auto;\n  display: block;\n  text-align: center;\n  text-transform: capitalize;\n"]))),u=i.ZP.ul(a||(a=(0,c.Z)(["\n  display: grid;\n  grid-template-columns: 280px;\n  gap: 20px;\n  justify-content: center;\n\n  @media (min-width: 768px) {\n    grid-template-columns: 280px 280px;\n  }\n\n  @media (min-width: 920px) {\n    grid-template-columns: 280px 280px 280px;\n  }\n\n  @media (min-width: 1240px) {\n    grid-template-columns: 280px 280px 280px 280px;\n  }\n"])))}}]);
//# sourceMappingURL=544.7d7b8479.chunk.js.map