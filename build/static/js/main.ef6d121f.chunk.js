(this["webpackJsonpstart-page"]=this["webpackJsonpstart-page"]||[]).push([[0],{128:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(14),r=n.n(c),o=n(15),i=n(92),s=n(188),l=n(189),u=n(191),j=n(190),d=function(e,t){var n=Object(a.useRef)(!1);Object(a.useEffect)((function(){n.current?e():n.current=!0}),t)},b=function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.error(a),t}})),c=Object(o.a)(n,2),r=c[0],i=c[1];return[r,function(t){try{var n=t instanceof Function?t(r):t;i(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.error(a)}}]},O=n(186),h=n(187),m=n(94),p=n(13),f=n(194),g=n(174),x=n(93),C=n(195),k=n(71),v=n(86),y=n.n(v),w=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useRef)(),i=function(){c(!0)};return Object(a.useEffect)((function(){r.current&&r.current.complete&&i()})),[r,n,i]},S=n(168),N=n(170),I=n(171),B=n(172),E=n(72),D=n(166),M=Object(D.a)({root:{textAlign:"center",width:"100%",padding:0,whiteSpace:"nowrap",overflow:"hidden"},action:{height:"100%"},title:{fontSize:"1.5vh",marginTop:5,marginBottom:0},media:{textAlign:"center",height:30,width:30,borderRadius:8,filter:"drop-shadow(0 0 5px rgba(100,0,0, .1))"},progress:{height:30,width:30},progressBg:{position:"absolute",top:0,right:0},content:{display:"flex",flexDirection:"column",alignItems:"center",padding:10}}),T=n(4),F=function(e){var t=e.id,n=e.title,c=e.url,r=e.icon,i=e.brandColor,s=e.onContextMenu,l=(e.setColorInState,e.options),u=M(),j=w(),d=Object(o.a)(j,3),b=d[0],O=d[1],h=d[2],m=Object(a.useState)(i),p=Object(o.a)(m,2),f=p[0],g=p[1],x=Object(a.useState)(i),C=Object(o.a)(x,2),k=C[0],v=C[1];return Object(a.useEffect)((function(){console.log("RENDER ITEM"),i?console.log("\u0415\u0441\u0442\u044c"):fetch("https://brand-color.herokuapp.com/api/getColor?url=".concat(c)).then((function(e){return e.json()})).then((function(e){var t=e.color1;return g(!0),t})).then((function(e){v(e)})).catch((function(e){console.log(e)}))}),[]),Object(T.jsx)(S.a,{className:u.root,style:l.brandColor?{background:k}:null,children:Object(T.jsx)(N.a,{href:c,className:u.action,onContextMenu:function(e){return s(e,t)},children:Object(T.jsxs)(I.a,{className:u.content,children:[f?null:Object(T.jsx)(B.a,{className:u.progressBg,size:15}),Object(T.jsx)("img",{style:{display:O?"block":"none"},className:u.media,ref:b,onLoad:h,src:r,alt:""}),O?null:Object(T.jsx)(B.a,{size:30}),Object(T.jsx)(E.a,{className:u.title,color:"textSecondary",gutterBottom:!0,children:n})]})})})},R=Object(a.memo)(F),W=n(173),A=n(87),L=n.n(A),P=Object(D.a)({box:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:73},addButton:{height:50,width:50}});function z(e){var t=e.handleOpenModal,n=P();return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(u.a,{className:n.box,children:Object(T.jsx)(W.a,{className:n.addButton,color:"inherit","aria-label":"Add Bookmark",onClick:t,children:Object(T.jsx)(L.a,{})})})})}var J=Object(D.a)({grid:{justifyContent:"center"},gri:{justifyContent:"flex-start",padding:"0 20px"},item:{display:"flex",justifyContent:"center"}}),q={id:"",anchorEl:null},G=Object(k.b)((function(e){var t=e.bookmark,n=e.handleClick,a=e.setColorInState,c=e.options,r=e.classes;e.onOpenModal;return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(g.a,{item:!0,xs:12,sm:3,lg:c.col,className:r.item,children:Object(T.jsx)(R,Object(p.a)(Object(p.a)({},t),{},{onContextMenu:n,setColorInState:a,options:c}),t.id)})})})),V=Object(k.a)((function(e){var t=e.bookmarks,n=e.options,a=e.handleClick,c=e.setColorInState,r=e.classes,o=e.onOpenModal;return Object(T.jsxs)(g.a,{container:!0,spacing:n.spacing,className:0===t.length?r.grid:r.gri,direction:"row",justify:"space-between",alignItems:"center",children:[t.map((function(e,t){return Object(T.jsx)(G,{index:t,bookmark:e,handleClick:a,setColorInState:c,options:n,classes:r,onOpenModal:o},e.id)})),Object(T.jsx)(g.a,{item:!0,xs:12,sm:3,lg:n.col,className:r.item,children:Object(T.jsx)(z,{handleOpenModal:o})})]})}));function H(e){var t=e.bookmarks,n=e.setBookmarks,c=e.onOpenModal,r=e.hhandleDelete,i=e.options,s=e.setColorInState,l=J(),u=Object(a.useState)(q),j=Object(o.a)(u,2),d=j[0],b=j[1],O=Object(a.useCallback)((function(e){r(e),b(q)}),[r]);Object(a.useEffect)((function(){console.log("RENDER LIST")}),[]);return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(g.a,{container:!0,spacing:i.spacing,className:0===t.length?l.grid:l.gri,direction:"row",justify:"space-between",alignItems:"center",children:[Object(T.jsx)(V,{bookmarks:t,handleClick:function(e,t){e.preventDefault(),b({id:t,anchorEl:e.currentTarget})},setColorInState:s,options:i,onSortEnd:function(e){var a=e.oldIndex,c=e.newIndex;n(y()(t,a,c))},axis:"xy",classes:l,onOpenModal:c,distance:1}),Object(T.jsx)(x.a,{id:"simple-menu",anchorEl:d.anchorEl,keepMounted:!0,open:Boolean(d.anchorEl),onClose:function(){b(q)},children:Object(T.jsx)(C.a,{onClick:function(){return O(d.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]})})}var K=n(54),U=n(176),Y=n(178),Q=n(196),X=n(182),Z=n(183),$=n(177);function _(e){var t=e.open,n=e.onClose,c=e.onSubmit,r={url:"",title:""},i=Object(a.useState)(r),s=Object(o.a)(i,2),l=s[0],u=s[1],j=function(e){var t=e.target.name;return u(Object(p.a)(Object(p.a)({},l),{},Object(K.a)({},t,e.target.value)))};return Object(a.useEffect)((function(){u(r)}),[n]),Object(T.jsxs)(U.a,{open:t,fullWidth:"fullWidth",maxWidth:"xs",onClose:n,"aria-labelledby":"form-dialog-title",children:[Object(T.jsx)($.a,{id:"form-dialog-title",children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0430\u0439\u0442\u0430"}),Object(T.jsxs)(Y.a,{children:[Object(T.jsx)(Q.a,{onChange:function(e){return j(e)},name:"url",value:l.url,autoFocus:!0,margin:"dense",id:"url",label:"\u0410\u0434\u0440\u0435\u0441",type:"text",fullWidth:!0,onBlur:function(){return u(Object(p.a)(Object(p.a)({},l),{},{title:l.url.replace(/(^\w+:|^)\/\//,"").split(".")[0]}))}}),Object(T.jsx)(Q.a,{onChange:function(e){return j(e)},name:"title",value:l.title,margin:"dense",id:"name",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text",fullWidth:!0})]}),Object(T.jsxs)(X.a,{children:[Object(T.jsx)(Z.a,{onClick:n,color:"primary",children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(T.jsx)(Z.a,{onClick:function(){return c(l)},color:"primary",children:"\u0413\u043e\u0442\u043e\u0432\u043e"})]})]})}var ee=function(e){return/^https?:\/\//i.test(e)?e:"http://".concat(e)},te=function(e){return e.replace(/(^\w+:|^)\/\//,"")};function ne(e){var t=e.options,n=Object(a.useState)(!1),c=Object(o.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)([]),l=Object(o.a)(s,2),j=l[0],d=l[1],O=b("bookmarks"),h=Object(o.a)(O,2),g=(h[0],h[1]),x=function(){return i(!1)};Object(a.useEffect)((function(){}),[j]);return Object(a.useEffect)((function(){var e=localStorage.getItem("bookmarks");e&&d(JSON.parse(e))}),[]),Object(a.useEffect)((function(){console.log("RENDERING BOOKMARKS")}),[]),Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(u.a,{children:[Object(T.jsx)(H,{bookmarks:j,setBookmarks:d,onOpenModal:function(){return i(!0)},hhandleDelete:function(e){var t=j.filter((function(t){return t.id!==e}));d(t),g(t)},options:t,setColorInState:function(e,t){var n=j.map((function(n){return n.id===e?Object(p.a)(Object(p.a)({},n),{},{brandColor:t}):n}));return g(n),d(n)}}),Object(T.jsx)(_,{open:r,onSubmit:function(e){var t=e.title,n=e.url,a=[].concat(Object(m.a)(j),[{id:Object(f.a)(),title:t.toUpperCase(),url:ee(n),icon:"https://api.faviconkit.com/".concat(te(n),"/20"),brandColor:""}]);console.log(a),d(a),g(a),x()},onClose:x,count:j.length})]})})}var ae=n(70),ce=n.n(ae),re=n(88),oe=n(184),ie=n(192),se=n(90),le=n.n(se),ue=Object(D.a)({root:{paddingBottom:32,paddingTop:32,maxWidth:500,margin:"0 auto","& .MuiAutocomplete-inputRoot":{borderRadius:28,paddingTop:0,paddingBottom:0}},input:{boxShadow:"0 5px 30px -5px rgba(0, 0, 0, 0.2)","& .MuiOutlinedInput-input":{padding:"10px 0"},"& .MuiOutlinedInput-notchedOutline":{borderColor:"#33bfff",transition:"all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"},"&:hover":{"& .MuiOutlinedInput-notchedOutline":{borderColor:"#33bfff"}},"&:focus":{"& .MuiOutlinedInput-notchedOutline":{borderColor:"#33bfff"}}}});function je(e){var t=e.type,n=ue(),c=Object(a.useState)(!1),r=Object(o.a)(c,2),i=r[0],s=r[1],l=Object(a.useState)([]),u=Object(o.a)(l,2),j=u[0],d=u[1],b=Object(a.useState)(""),O=Object(o.a)(b,2),h=O[0],m=O[1];Object(a.useEffect)((function(){Object(re.a)(ce.a.mark((function e(){var t,n;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://corsanywhere.herokuapp.com/http://suggestqueries.google.com/complete/search?client=chrome&q=".concat(h));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,d(n[1]);case 7:case"end":return e.stop()}}),e)})))()}),[h]),Object(a.useEffect)((function(){i||d([])}),[i]);return Object(T.jsx)(ie.a,{className:n.root,id:"asynchronous-demo",open:i,onChange:function(e,n){return document.location.href="https://www.".concat(t,".com/").concat("duckduckgo"===t?"":"search","?").concat("yandex"===t?"text":"q","=").concat(n)},onOpen:function(){s(!0)},onClose:function(){s(!1)},openOnFocus:!1,options:j,forcePopupIcon:!1,noOptionsText:"No results",disableClearable:!0,renderInput:function(e){return Object(T.jsx)(Q.a,Object(p.a)(Object(p.a)({className:n.input},e),{},{variant:"outlined",onChange:function(e){return m(e.target.value)},placeholder:"Search in ".concat(t.toUpperCase()),InputProps:Object(p.a)(Object(p.a)({},e.InputProps),{},{startAdornment:Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(oe.a,{position:"start",children:Object(T.jsx)(le.a,{color:"primary"})})})})}))}})}var de=n(199),be=n(200),Oe=n(185),he=n(201),me=n(181),pe=n(198),fe=n(193),ge=n(91),xe=n.n(ge),Ce=Object(D.a)({drawer:{padding:"10px 20px"},iconBtn:{position:"fixed",bottom:0,right:10},formControl:{},shapeCircle:{backgroundColor:"red",width:40,height:40,borderRadius:"50%"}});function ke(e){var t=e.options,n=e.setOptions,c=Object(a.useState)(!1),r=Object(o.a)(c,2),i=r[0],s=r[1],l=Ce();return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(W.a,{className:l.iconBtn,onClick:function(){s(!0)},children:i?null:Object(T.jsx)(xe.a,{})}),Object(T.jsxs)(de.a,{className:l.drawer,variant:"temporary",open:i,onClose:function(){s(!1)},anchor:"right",children:[Object(T.jsxs)(u.a,{className:l.drawer,children:[Object(T.jsx)(E.a,{id:"discrete-slider",gutterBottom:!0,children:"Bookmark size"}),Object(T.jsx)(be.a,{defaultValue:t.col,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,marks:!0,min:1===t.widthContainer?2:1,max:4,onChangeCommitted:function(e,a){return n(Object(p.a)(Object(p.a)({},t),{},{col:a}))}})]}),Object(T.jsxs)(u.a,{className:l.drawer,children:[Object(T.jsx)(E.a,{id:"discrete-slider",gutterBottom:!0,children:"Spacing between bookmarks"}),Object(T.jsx)(be.a,{defaultValue:t.spacing,"aria-labelledby":"discrete-slider",valueLabelDisplay:"default",step:1,marks:!0,min:1,max:4,onChangeCommitted:function(e,a){return n(Object(p.a)(Object(p.a)({},t),{},{spacing:a}))}})]}),Object(T.jsxs)(u.a,{className:l.drawer,children:[Object(T.jsx)(E.a,{id:"discrete-slider",gutterBottom:!0,children:"Size container"}),Object(T.jsx)(be.a,{defaultValue:t.widthContainer,"aria-labelledby":"discrete-slider",valueLabelDisplay:"default",step:1,marks:!0,min:1,max:3,onChangeCommitted:function(e,a){return n(Object(p.a)(Object(p.a)({},t),{},{widthContainer:a}))}})]}),Object(T.jsx)(u.a,{className:l.drawer,children:Object(T.jsx)(Oe.a,{control:Object(T.jsx)(he.a,{checked:t.isSearch,onChange:function(e){return n(Object(p.a)(Object(p.a)({},t),{},{isSearch:e.target.checked}))},color:"primary"}),label:"Search form"})}),t.isSearch?Object(T.jsx)(u.a,{className:l.drawer,children:Object(T.jsxs)(me.a,{className:l.formControl,fullWidth:!0,children:[Object(T.jsx)(pe.a,{id:"demo-simple-select-label",children:"Search system"}),Object(T.jsxs)(fe.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t.searchType,onChange:function(e){return n(Object(p.a)(Object(p.a)({},t),{},{searchType:e.target.value}))},children:[Object(T.jsx)(C.a,{value:"google",children:"Google"}),Object(T.jsx)(C.a,{value:"yandex",children:"Yandex"}),Object(T.jsx)(C.a,{value:"duckduckgo",children:"DuckDuckGo"}),Object(T.jsx)(C.a,{value:"bing",children:"Bing"})]})]})}):null,Object(T.jsx)(u.a,{className:l.drawer,children:Object(T.jsx)(Oe.a,{control:Object(T.jsx)(he.a,{checked:t.isDarkTheme,onChange:function(e){return n(Object(p.a)(Object(p.a)({},t),{},{isDarkTheme:e.target.checked}))},color:"primary"}),label:"Dark mode"})}),Object(T.jsx)(u.a,{className:l.drawer,children:Object(T.jsx)(Oe.a,{control:Object(T.jsx)(he.a,{checked:t.brandColor,onChange:function(e){return n(Object(p.a)(Object(p.a)({},t),{},{brandColor:e.target.checked}))},color:"primary"}),label:"Auto brand color"})}),Object(T.jsxs)(u.a,{className:l.drawer,children:[Object(T.jsx)(E.a,{gutterBottom:!0,children:"Background image"}),Object(T.jsx)("form",{children:Object(T.jsx)(Q.a,{fullWidth:!0,placeholder:"url image",value:t.background,onChange:function(e){return n(Object(p.a)(Object(p.a)({},t),{},{background:e.target.value}))}})})]}),Object(T.jsxs)(u.a,{className:l.drawer,children:[Object(T.jsx)(E.a,{gutterBottom:!0,children:"Background image"}),Object(T.jsxs)(g.a,{container:!0,spacing:t.spacing,direction:"row",justify:"space-between",alignItems:"center",children:[Object(T.jsx)("div",{className:l.shapeCircle,sm:3}),Object(T.jsx)("div",{className:l.shapeCircle,sm:3}),Object(T.jsx)("div",{className:l.shapeCircle,sm:3}),Object(T.jsx)("div",{className:l.shapeCircle,sm:3})]})]})]})]})}var ve=Object(D.a)({box:{display:"flex",minHeight:"100vh",flexDirection:"column",justifyContent:"center"}}),ye=(O.a,h.a,{palette:{type:"light",primary:O.a,secondary:h.a}}),we={palette:{type:"dark",primary:O.a,secondary:h.a}},Se={col:2,spacing:1,isSearch:!0,searchType:"google",widthContainer:2,isDarkTheme:!0,background:"",colorBrand:!0};var Ne=function(){var e=Object(a.useState)(!0),t=Object(o.a)(e,2),n=t[0],c=t[1],r=ve(),O=b("options"),h=Object(o.a)(O,2),m=h[0],p=h[1],f=Object(a.useState)(m||Se),g=Object(o.a)(f,2),x=g[0],C=g[1];d((function(){p(x)}),[x]),d((function(){c(x.isDarkTheme),p(x.isDarkTheme)}),[x.isDarkTheme]),Object(a.useEffect)((function(){console.log("RENDER APP")}),[]);var k=Object(i.a)(n?we:ye),v=["sm","md","lg"];return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(s.a,{theme:k,children:[Object(T.jsx)(l.a,{}),Object(T.jsx)(u.a,{className:r.box,style:{background:"url(".concat(x.background,") center center / cover no-repeat")},children:Object(T.jsxs)(j.a,{maxWidth:1===x.widthContainer?v[0]:v[x.widthContainer-1],children:[x.isSearch?Object(T.jsx)(je,{type:x.searchType}):null,Object(T.jsx)(ne,{options:x})]})}),Object(T.jsx)(ke,{options:x,setOptions:C})]})})},Ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,203)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};r.a.render(Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(Ne,{})}),document.getElementById("root")),Ie()}},[[128,1,2]]]);
//# sourceMappingURL=main.ef6d121f.chunk.js.map