(this["webpackJsonp8ight6ix.github.io"]=this["webpackJsonp8ight6ix.github.io"]||[]).push([[0],{10:function(t,e,n){t.exports={list:"card-list_list__rv1U6",card:"card-list_card__2sDqc",content:"card-list_content__bOM2M",thumbnail:"card-list_thumbnail__3bwO4",keywords:"card-list_keywords__3bqL0"}},24:function(t,e,n){t.exports={"headline-3":"typography_headline-3__2mH8o","headline-4":"typography_headline-4__2c03k","headline-5":"typography_headline-5__2Flpq","headline-6":"typography_headline-6__2clj6","subtitle-1":"typography_subtitle-1__3lYD6","subtitle-2":"typography_subtitle-2__3jTD2","body-1":"typography_body-1__3R42o","body-2":"typography_body-2__1QjLB",button:"typography_button__NOuYA",caption:"typography_caption__UXXWJ"}},37:function(t,e,n){t.exports={App:"base_App__30SEj"}},38:function(t,e,n){t.exports={body:"body_body__3uDPg"}},75:function(t,e,n){"use strict";n.r(e);var i=n(1),r=n.n(i),a=n(19),c=n.n(a),o=n(17),u=n(5),s=n.n(u),d=n(7),l="artwork/INITIALIZE",h="artwork/INITIALIZE_SUCCESS",b="artwork/INITIALIZE_FAILURE",f="artwork/INSERT",m="artwork/DELETE",j={initialize:Object(d.createAction)(l)(),initializeSuccess:Object(d.createAction)(h)(),initializeFailure:Object(d.createAction)(b)(),insert:Object(d.createAction)(f)(),delete:Object(d.createAction)(m)()};var p=function(){var t=Object(o.c)((function(t){return t.artkworkReducer})),e=Object(o.b)(),n=Object(i.useMemo)((function(){return t.get("items")}),[t]);return{getItems:Object(i.useCallback)((function(){return n.toJS()}),[n]),getItemFromIndex:Object(i.useCallback)((function(t){var e;return null===(e=n.get(t))||void 0===e?void 0:e.toJS()}),[n]),initialize:Object(i.useCallback)((function(){e(j.initialize())}),[])}},O=n(37),_=n.n(O),v=n(15),g=n(11),w={artworks:"/artworks"},y={getWorkList:{id:10,title:"\ub124\ud2b8\uc6cc\ud2b8 \uc624\ub958",message:"\ub124\ud2b8\uc6cc\ud06c \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694."}},k={getWorkList:{id:10,message:"\uc791\ud488 \ubaa9\ub85d\uc744 \uac00\uc838\uc624\uace0 \uc788\uc2b5\ub2c8\ub2e4."}},x=function t(e){if(e&&"object"===typeof e){var n={};return Object.entries(e).forEach((function(e){var i=Object(v.a)(e,2),r=i[0],a=i[1];n[r]=t(a)})),n}return e},M=x({mode:"production",artworkImprotDateTimezone:"Asia/Seoul",artworkImportDateFromat:"YYYY.M.D",artworkViewDateFormat:"YYYY. MM. DD",artworkDefaultType:"\ubbf8\uc815",artworkDefaultTitle:"\ubb34\uc81c",artworkDefaultDate:"0000.0.0",artworkDefaultCreator:"\uc791\uac00 \ubbf8\uc0c1",artworkDefaultDescription:"\uc124\uba85 \uc5c6\uc74c",artworkDefaultPath:"/src/artworks/404.html",cardListGap:20,thumbnailRate:1.6,windowLarge:1440,windowMedium:1240,windowRegular:905,windowSmall:600,girdCntLarge:4,gridCntMedium:3,gridCntRegular:2,gridCntSmall:2,gridCntDefault:1}),C=x(w),D=x(y),I=x(k);var L=function(t){var e=t.girdWidth,n=Object(i.useState)(document.body.clientWidth),r=Object(v.a)(n,2),a=r[0],c=r[1],o=Object(i.useMemo)((function(){return 0===e?0:a>=M.windowLarge?M.girdCntLarge:a>=M.windowMedium?M.gridCntMedium:a>=M.windowRegular?M.gridCntRegular:a>=M.windowSmall?M.gridCntSmall:M.gridCntDefault}),[a,e]),u=Object(i.useMemo)((function(){return 0===o?0:(e-M.cardListGap*(o+1))/o}),[o,e]),s=Object(i.useMemo)((function(){for(var t=Array(o),e=M.cardListGap,n=0;n<o;n+=1)t[n]=e,e+=u+M.cardListGap;return Object(g.a)(t)}),[o,u]);return Object(i.useEffect)((function(){var t=function(){c(document.body.clientWidth)};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),{stageWidth:a,columnCnt:o,columnSize:u,layout:s}},A=n(38),E=n.n(A),S=n(18),z=n(22),R=n(23),N=function(){function t(e){Object(z.a)(this,t),this._items=[],this._comp=void 0,this._comp=e}return Object(R.a)(t,[{key:"size",get:function(){return this._items.length}},{key:"claer",value:function(){this._items=[]}},{key:"swap",value:function(t,e){var n=this._items[t];this._items[t]=this._items[e],this._items[e]=n}},{key:"peak",value:function(){return this._items[0]}},{key:"add",value:function(e){for(var n=this._items.push(e)-1,i=t.getParentIndex(n);i>=0&&this._comp(this._items[n],this._items[i]);)this.swap(n,i),n=i,i=t.getParentIndex(n)}},{key:"poll",value:function(){if(this.size<2)return this._items.pop();var e=this.peak();this._items[0]=this._items.pop();for(var n=0,i=t.getLeftChildIndex(n),r=t.getRightChildIndex(n);i<this.size;){var a=r<this.size&&this._comp(this._items[r],this._items[i])?r:i;if(this._comp(this._items[n],this._items[a]))break;this.swap(n,a),n=a,i=t.getLeftChildIndex(n),r=t.getRightChildIndex(n)}return e}}],[{key:"getParentIndex",value:function(t){return Math.floor((t-1)/2)}},{key:"getLeftChildIndex",value:function(t){return 2*t+1}},{key:"getRightChildIndex",value:function(t){return 2*t+2}}]),t}(),T=n(10),F=n.n(T),W=n(3),P=s.a.bind(F.a);var Y=function(t){var e=t.title,n=t.width,r=t.src,a=Object(i.useMemo)((function(){return"".concat(e," thumbnail image")}),[]),c=Object(i.useMemo)((function(){return n/M.thumbnailRate}),[n]),o=Object(i.useMemo)((function(){return{width:n,height:c}}),[c]),u=Object(i.useMemo)((function(){return P("thumbnail")}),[]);return Object(W.jsx)("div",{className:u,style:o,children:Object(W.jsx)("img",{src:r,alt:a})})},U=n(24),G=n.n(U),J=n(39),X=n.n(J),q=function(t){return X.a.tz(t,M.artworkImportDateFromat,M.artworkImprotDateTimezone)},B=s.a.bind(F.a),V=s.a.bind(G.a);var Z=function(t){var e=t.title,n=t.date,r=t.creator,a=t.description,c=Object(i.useMemo)((function(){return B("content")}),[]),o=Object(i.useMemo)((function(){return V("headline-6")}),[]),u=Object(i.useMemo)((function(){return V("cpation")}),[]),s=Object(i.useMemo)((function(){return V("body-1")}),[]),d=Object(i.useMemo)((function(){return function(t){return t.local().format(M.artworkViewDateFormat)}(n)}),[]);return Object(W.jsxs)("div",{className:c,children:[Object(W.jsx)("p",{id:"title",className:o,children:e}),Object(W.jsxs)("p",{id:"sub",className:u,children:[d,Object(W.jsx)("br",{}),r]}),Object(W.jsx)("p",{id:"desc",className:s,children:a})]})},H=s.a.bind(F.a),K=s.a.bind(G.a);var Q=function(t){var e=t.words,n=Object(i.useMemo)((function(){return H("keywords")}),[]),r=Object(i.useMemo)((function(){return K("button")}),[]),a=Object(i.useMemo)((function(){return e.map((function(t){return Object(W.jsx)("span",{className:r,children:t},t)}))}),[e,r]);return Object(W.jsxs)("div",{className:n,children:[Object(W.jsx)("hr",{}),a]})},$=s.a.bind(F.a);var tt=function(t){var e=t.draw,n=t.item,r=t.width,a=t.x,c=t.y,o=Object(i.useMemo)((function(){return $("card")}),[]),u=Object(i.useRef)(null),s=Object(i.useMemo)((function(){return{width:r,transform:"translate(".concat(a,"px, ").concat(c,"px)")}}),[r,a,c]);Object(i.useEffect)((function(){var t,i;e&&e(n,null!==(t=null===(i=u.current)||void 0===i?void 0:i.clientHeight)&&void 0!==t?t:0)}),[s]);var d=Object(i.useCallback)((function(){var t;null===(t=window.open(n.path,"_blank"))||void 0===t||t.focus()}),[]);return Object(W.jsxs)("div",{ref:u,className:o,style:s,role:"button",tabIndex:0,onClick:d,onKeyPress:d,children:[Object(W.jsx)(Y,{title:n.title,width:r,src:n.thumbnail}),Object(W.jsx)(Z,{title:n.title,date:n.date,creator:n.creator,description:n.description}),Object(W.jsx)(Q,{words:n.keyword})]})},et=s.a.bind(F.a),nt=-99999,it=-99999;var rt=function(t){var e=t.grid,n=t.columnSize,r=t.columnCnt,a=Object(i.useMemo)((function(){return et("list")}),[]),c=p(),o=Object(i.useMemo)((function(){return c.getItems()}),[c.getItems]),u=Object(i.useMemo)((function(){return[]}),[e,n,r,o]),s=Object(i.useMemo)((function(){return Array(r)}),[r]),d=Object(i.useMemo)((function(){return new N(function(t){return function(e,n){return t[e]===t[n]?e<n:t[e]<t[n]}}(s))}),[s]),l=Object(i.useState)([]),h=Object(v.a)(l,2),b=h[0],f=h[1],m=Object(i.useState)({height:0}),j=Object(v.a)(m,2),O=j[0],_=j[1],g=Object(i.useCallback)((function(){d.claer(),s.fill(0).forEach((function(t,e){return d.add(e)}));var t=u.map((function(t){var i,r,a=t.item,c=t.height,o=d.poll(),u=null!==(i=e.get(o))&&void 0!==i?i:nt,l=null!==(r=s[o])&&void 0!==r?r:it;return s[o]+=c+M.cardListGap,d.add(o),Object(W.jsx)(tt,{item:a,width:n,x:u,y:l},"visible-".concat(a.id))})),i=Math.max.apply(Math,Object(S.a)(s))-M.cardListGap;f(t),_({height:Number.isFinite(i)?i:0})}),[u,s,d]),w=Object(i.useCallback)((function(t,e){u.push({item:t,height:e}),u.length===o.length&&g()}),[u,o,g]),y=Object(i.useMemo)((function(){return o.map((function(t){return Object(W.jsx)(tt,{draw:w,item:t,width:n,x:nt,y:it},"hidden-".concat(t.id))}))}),[w,n]);return Object(i.useEffect)((function(){window.dispatchEvent(new Event("resize"))}),[O]),Object(W.jsxs)("div",{className:a,style:O,children:[y,b]})},at=s.a.bind(E.a);var ct=function(){var t,e,n=Object(i.useMemo)((function(){return at("body")}),[]),r=Object(i.useRef)(null),a=L({girdWidth:null!==(t=null===(e=r.current)||void 0===e?void 0:e.clientWidth)&&void 0!==t?t:0});return Object(W.jsx)("div",{ref:r,className:n,children:Object(W.jsx)(rt,{grid:a.layout,columnSize:a.columnSize,columnCnt:a.columnCnt})})},ot=s.a.bind(_.a);var ut=function(){var t=p(),e=Object(i.useMemo)((function(){return ot("App")}),[]);return Object(i.useEffect)((function(){t.initialize()}),[]),Object(W.jsx)("div",{className:e,children:Object(W.jsx)(ct,{})})},st=n(13),dt=n(41),lt="ABCDEFGHIJKLMNOPQRSTUVWXYZ",ht="abcdefghijklmnopqrstuvwxyz",bt="0123456789",ft=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=bt;e&&(i+=lt),n&&(i+=ht);for(var r=Array(t),a=i.length,c=0;c<t;c+=1)r[c]=i.charAt(Math.floor(Math.random()*a));return r.join("")},mt=Object(g.b)({id:ft(12),type:M.artworkDefaultType,title:M.artworkDefaultTitle,date:q(M.artworkDefaultDate),creator:M.artworkDefaultDescription,description:M.artworkDefaultDescription,keyword:Object(g.a)(),path:M.artworkDefaultPath,thumbnail:""}),jt=Object(g.b)({isLoaded:!1,items:Object(g.a)()}),pt=function(t){return mt({id:t.id||ft(12),type:t.type,title:t.title,date:t.date?q(t.date):void 0,creator:t.creator,description:t.description,keyword:Array.isArray(t.keyword)?Object(g.a)(t.keyword):void 0,path:t.path,thumbnail:t.thumbnail})},Ot=Object(d.createReducer)(jt()).handleAction(j.initializeSuccess,(function(t,e){var n=e.payload,i=Object(g.a)(n.map(pt));return jt({isLoaded:!0,items:i})})).handleAction(j.initializeFailure,(function(){return jt()})).handleAction(j.insert,(function(t,e){var n=e.payload,i=pt(n),r=t.get("items").push(i);return t.set("items",r)})).handleAction(j.delete,(function(t,e){var n=e.payload,i=t.get("items").splice(n,1);return t.set("items",i)})),_t=Object(st.b)({artkworkReducer:Ot}),vt=n(14),gt=n.n(vt),wt=n(9),yt=n(40),kt=n.n(yt),xt=function(){function t(e){Object(z.a)(this,t),this._id=void 0,this._type=void 0,this._title=void 0,this._date=void 0,this._creator=void 0,this._description=void 0,this._keyword=void 0,this._path=void 0,this._thumbnail=void 0,this._id=e.id,this._type=e.type,this._title=e.title,this._date=e.date,this._creator=e.creator,this._description=e.description,this._keyword=Array.isArray(e.keyword)?Object(S.a)(e.keyword):[],this._path=e.path,this._thumbnail=e.thumbnail}return Object(R.a)(t,[{key:"id",get:function(){return this._id}},{key:"type",get:function(){return this._type}},{key:"title",get:function(){return this._title}},{key:"date",get:function(){return this._date}},{key:"creator",get:function(){return this._creator}},{key:"description",get:function(){return this._description}},{key:"keyword",get:function(){return Object(S.a)(this._keyword)}},{key:"path",get:function(){return this._path}},{key:"thumbnail",get:function(){return this._thumbnail}}]),t}(),Mt=function(){return kt.a.get("".concat(C.artworks,"/index.json")).then((function(t){return t.data.map((function(t){return new xt(t)}))}))},Ct="loading/OCCUR",Dt="loading/RELEASE",It={occur:Object(d.createAction)(Ct)(),release:Object(d.createAction)(Dt)()},Lt="error/OCCUR",At="error/release",Et={occur:Object(d.createAction)(Lt)(),release:Object(d.createAction)(At)()},St=gt.a.mark(Rt),zt=gt.a.mark(Nt);function Rt(){var t;return gt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(wt.d)(It.occur(I.getWorkList));case 2:return e.prev=2,e.next=5,Object(wt.b)(Mt);case 5:return t=e.sent,e.next=8,Object(wt.d)(j.initializeSuccess(t));case 8:e.next=17;break;case 10:return e.prev=10,e.t0=e.catch(2),"development"===M.mode&&console.error(e.t0),e.next=15,Object(wt.d)(Et.occur(D.getWorkList));case 15:return e.next=17,Object(wt.d)(j.initializeFailure(null));case 17:return e.next=19,Object(wt.d)(It.release());case 19:case"end":return e.stop()}}),St,null,[[2,10]])}function Nt(){return gt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(wt.a)([Object(wt.e)(l,Rt)]);case 2:case"end":return t.stop()}}),zt)}var Tt=Nt,Ft=gt.a.mark(Wt);function Wt(){return gt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(wt.a)([Object(wt.c)(Tt)]);case 2:case"end":return t.stop()}}),Ft)}var Pt=Wt,Yt="development"===M.mode&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||st.c;var Ut=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),i(t),r(t),a(t),c(t)}))},Gt=function(){var t=Object(dt.a)(),e=Object(st.d)(_t,Yt(Object(st.a)(t)));return t.run(Pt),e}();c.a.render(Object(W.jsx)(r.a.StrictMode,{children:Object(W.jsx)(o.a,{store:Gt,children:Object(W.jsx)(ut,{})})}),document.getElementById("root")),Ut()}},[[75,1,2]]]);
//# sourceMappingURL=main.98e3b7f8.chunk.js.map