(this["webpackJsonpstill-newbie.github.io"]=this["webpackJsonpstill-newbie.github.io"]||[]).push([[0],{34:function(e){e.exports=JSON.parse('{"apihost2":"http://localhost:3003/api/pf/","apihost":"http://49.247.137.199:3003/api/pf/"}')},41:function(e){e.exports=JSON.parse('{"menu1":[{"id":1,"file":"Info","name":"\uc815\ubcf4"},{"id":2,"file":"Skills","name":"\uc2a4\ud0ac"},{"id":3,"file":"Career","name":"\uacbd\ub825"},{"id":4,"file":"Projects","name":"\ud504\ub85c\uc81d\ud2b8"},{"id":5,"file":"Test","name":"\uad81\ud569\ubcf4\uae30"}],"menu2":[{"id":11,"file":"Info","name":"\uc815\ubcf4"},{"id":12,"file":"Skills2","name":"\uc2a4\ud0ac"},{"id":13,"file":"Portfolio","name":"\ud3ec\ud2b8\ud3f4\ub9ac\uc624"}]}')},63:function(e,t,n){},64:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(13),i=n.n(r),s=(n(63),n(12)),o=(n(64),n(73)),j=n(54),l=n(10),b=n(24),d=n.n(b),h=n(33),u=n(93),p=n(94),x=n(95),O=n(108),f=n(34),m=n(90),g=n(105),y=n(2);function v(){return Math.round(20*Math.random())-10}function w(){var e=50+v(),t=50+v();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var k=Object(m.a)((function(e){return{modal:{backgroundColor:"RGBA(150, 150, 150, 0.1)"},paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"none",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},title:{color:"#777"}}})),S=function(){var e=k(),t=Object(c.useState)(w),n=Object(s.a)(t,1)[0],a=Object(c.useState)(!0),r=Object(s.a)(a,2),i=r[0],o=r[1];return Object(y.jsx)(g.a,{open:i,onClose:function(e){o(!1)},className:e.modal,"aria-labelledby":"title","aria-describedby":"description",children:Object(y.jsx)("div",{style:n,className:e.paper,children:Object(y.jsx)("h3",{children:"API\uc11c\ubc84 \uc790\ub294\uc911"})})})},N=function(e){var t=e.jobtype,n=Object(c.useState)(!1),a=Object(s.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)([]),j=Object(s.a)(o,2),l=j[0],b=j[1],m=function(){var e=Object(h.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(f.apihost+"info",{method:"POST",body:JSON.stringify({type:t})});case 3:return e.next=5,e.sent.json();case 5:n=e.sent,console.log(n),!n||n.isErr?i(!0):b(n.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),i(!0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){m()}),[]),r?Object(y.jsx)("h3",{children:"API Server is sleeping..."}):Object(y.jsx)(u.a,{children:Object(y.jsx)(p.a,{children:l.map((function(e){return Object(y.jsxs)(x.a,{children:[Object(y.jsx)(O.a,{align:"center",children:e.TITLE}),Object(y.jsx)(O.a,{children:e.VALUE})]},e.SEQ)}))})})},C=function(e){return Object(y.jsx)("h1",{children:"Skills"})},T=function(e){return Object(y.jsx)("h1",{children:"Career"})},E=function(e){return Object(y.jsx)("h1",{children:"ErrorPage"})},I=function(e){return Object(y.jsx)("h1",{children:"Contact"})},P=function(e){return Object(y.jsx)("h1",{children:"Projects"})},L=function(e){return Object(y.jsx)("h1",{children:"Test"})},D=n(103),F=n(104),A=n(106),G=n(41),B=n(96),M=n(109),J=n(97),H=n(99),R=n(100),V=n(98),W=n(101),K=n(102);function Q(){return Math.round(20*Math.random())-10}function _(){var e=50+Q(),t=50+Q();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var U=Object(m.a)((function(e){return{modal:{backgroundColor:"RGBA(150, 150, 150, 0.1)"},paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"none",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},title:{color:"#777"}}})),q=function(e){var t=U(),n=Object(c.useState)(_),a=Object(s.a)(n,1)[0],r={cursor:"pointer"};return Object(y.jsx)(g.a,{open:e.open,onClose:function(t){e.setOpen(!1)},className:t.modal,"aria-labelledby":"title","aria-describedby":"description",children:Object(y.jsxs)("div",{style:a,className:t.paper,children:[Object(y.jsx)("h3",{id:"title",className:t.title,children:"\uc785\uc0ac\uc81c\uc548"}),Object(y.jsx)("div",{id:"description",children:Object(y.jsxs)(B.a,{children:[Object(y.jsxs)(M.a,{children:[Object(y.jsx)(J.a,{children:Object(y.jsx)(V.a,{})}),Object(y.jsx)(H.a,{style:r,to:"tel:",children:Object(y.jsx)(R.a,{primary:"\uc804\ud654\ubc88\ud638"})})]}),Object(y.jsxs)(M.a,{children:[Object(y.jsx)(J.a,{children:Object(y.jsx)(W.a,{})}),Object(y.jsx)(R.a,{primary:"\uba54\uc77c\uc8fc\uc18c"})]}),Object(y.jsxs)(M.a,{children:[Object(y.jsx)(J.a,{children:Object(y.jsx)(K.a,{})}),Object(y.jsx)(H.a,{style:r,to:"https://github.com/Still-Newbie",children:Object(y.jsx)(R.a,{primary:"Still-Newbie"})})]})]})})]})})},z=Object(o.a)((function(e){return{appbar:{height:"70px",background:"linear-gradient(130deg, #5B247A, 60%, #1BCEDF)",flexGrow:"0",flexShrink:"0"},icons:{color:"white"},body:{marginTop:"70px"},menubtn:{color:"white",display:"flex"},switchdiv:{display:"inline-flex",flexGrow:"0",flexShrink:"0"},emtpyflex:{display:"inline-flex",flexGrow:"1",flexShrink:"1"},jobname:{lineHeight:"2.5"}}})),X=function(e){var t=e.menuchange,n=e.isDev,a=Object(c.useState)(!1),r=Object(s.a)(a,2),i=r[0],o=r[1],j=Object(c.useState)(G.menu1),l=Object(s.a)(j,2),b=l[0],d=l[1],h=z();return Object(y.jsxs)(D.a,{className:h.appbar,children:[b.map((function(e){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(F.a,{className:h.menubtn,onClick:function(){"Contact"===e.file?o(!0):window.location.replace(e.file)},children:e.name},e.id),"Contact"===e.file&&Object(y.jsx)(q,{open:i,setOpen:o},e.id+"pop")]})})),Object(y.jsx)("div",{className:h.emtpyflex}),Object(y.jsxs)("div",{className:h.switchdiv,children:[Object(y.jsx)("span",{className:h.jobname,children:"\uac1c\ubc1c\uc790"}),Object(y.jsx)(A.a,{checked:!n,onChange:function(){d((function(){return!0!==n?G.menu1:G.menu2})),t()}}),Object(y.jsx)("span",{className:h.jobname,children:"\uc601\uc0c1\ud3b8\uc9d1\uc790"})]})]})},Y=n(110),Z=Object(m.a)((function(e){return{prifilebar:{width:"300px",height:"100%",position:"fixed",left:"0",top:"70px"},profileimg:{display:"block",width:"200px",height:"200px",borderRadius:"100px",margin:"0 auto",marginTop:"50px"},blinktext:{textAlign:"center",color:"#f35626",backgroundImage:"-webkit-linear-gradient(92deg, #f35626, #feab3a)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",WebkitAnimation:"hue 5s infinite linear"},contantLink:{cursor:"pointer",textDecoration:"none"}}})),$=function(e){switch(e){case"Phone":return Object(y.jsx)(V.a,{});case"GitHub":return Object(y.jsx)(K.a,{});case"Mail":return Object(y.jsx)(W.a,{});default:return""}},ee=function(){var e=Z(),t=Object(c.useState)(!1),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)([]),o=Object(s.a)(i,2),j=o[0],l=o[1],b=function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(f.apihost+"contact",{method:"POST"});case 3:return e.next=5,e.sent.json();case 5:!(t=e.sent)||t.isErr?r(!0):l(t.data),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),r(!0),console.log("\uc0bc\ucc9c\uc6d0\uc9dc\ub9ac \uc11c\ubc84\uac00 \ub9d0\uc37d\uc77c\uc73c\ud0a4\ub294 \uc911");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){b()}),[]),Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(Y.a,{className:e.prifilebar,children:[Object(y.jsx)("img",{src:"img/photo.png",alt:"Hi!",className:e.profileimg}),Object(y.jsx)("h1",{className:e.blinktext,children:"\uad6c\uc9c1\uc911"}),Object(y.jsx)(B.a,{children:a?function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(M.a,{children:[Object(y.jsx)(J.a,{children:$("Mail")}),Object(y.jsx)(R.a,{primary:"whane94@gmail.com"})]},1),Object(y.jsxs)(M.a,{children:[Object(y.jsx)(J.a,{children:$("GitHub")}),Object(y.jsx)(H.a,{href:"https://github.com/Still-Newbie",target:"_blank",style:{cursor:"pointer",textDecoration:"none"},children:Object(y.jsx)(R.a,{primary:"Still-Newbie"})})]},2),Object(y.jsx)(S,{})]})}:j.map((function(e){return Object(y.jsxs)(M.a,{children:[Object(y.jsx)(J.a,{children:$(e.ICON)}),e.LINK?Object(y.jsx)(H.a,{href:e.LINK,target:"_blank",style:{cursor:"pointer",textDecoration:"none"},children:Object(y.jsx)(R.a,{primary:e.TITLE})}):Object(y.jsx)(R.a,{primary:e.TITLE})]},e.SEQ)}))})]})})},te=Object(o.a)((function(e){return{root:{width:"100%",height:"100vh",display:"flex",flexDirection:"column"},body:{display:"flex",flexGrow:"1"},content:{paddingLeft:"300px",width:"100%",height:"100%"}}}));var ne=function(){var e=te(),t=Object(c.useState)(!0),n=Object(s.a)(t,2),a=n[0],r=n[1],i=function(e){return e?"DEV":"VE"};return Object(y.jsxs)("div",{className:e.root,children:[Object(y.jsx)(X,{menuchange:function(){r((function(e){return!e}))},isDev:a}),Object(y.jsxs)("div",{className:e.body,children:[Object(y.jsx)(ee,{}),Object(y.jsx)("div",{className:e.content,children:Object(y.jsx)(j.a,{children:Object(y.jsxs)(l.c,{children:[Object(y.jsx)(l.a,{exact:!0,path:"/",children:Object(y.jsx)(N,{jobtype:i(a)})}),Object(y.jsx)(l.a,{path:"/Info",children:Object(y.jsx)(N,{jobtype:i(a)})}),Object(y.jsx)(l.a,{path:"/Skills",children:Object(y.jsx)(C,{jobtype:i(a)})}),Object(y.jsx)(l.a,{path:"/Career",children:Object(y.jsx)(T,{jobtype:i(a)})}),Object(y.jsx)(l.a,{path:"/Contact",children:Object(y.jsx)(I,{jobtype:i(a)})}),Object(y.jsx)(l.a,{path:"/Projects",children:Object(y.jsx)(P,{jobtype:i(a)})}),Object(y.jsx)(l.a,{path:"/Test",children:Object(y.jsx)(L,{jobtype:i(a)})}),Object(y.jsx)(l.a,{path:"/Portfolio",children:Object(y.jsx)(L,{jobtype:i(a)})}),Object(y.jsx)(l.a,{children:Object(y.jsx)(E,{})})]})})})]})]})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,111)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(ne,{})}),document.getElementById("root")),ce()}},[[72,1,2]]]);
//# sourceMappingURL=main.71044ecb.chunk.js.map