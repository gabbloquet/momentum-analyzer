(this["webpackJsonptkl-dma"]=this["webpackJsonptkl-dma"]||[]).push([[0],{60:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n(30),a=n.n(s),i=n(10),j=n(22),l=n(17),o=n(11),d=Object(j.b)({name:"Translations",initialState:{},reducers:{setTranslations:function(e,t){return Object(o.a)(Object(o.a)({},e),{},{messages:t.payload})}}}),u=d.actions.setTranslations,b=d.reducer,O=n(9),h="DMA",x="Papa bear",f="Mama bear",m="RP",p="COMMODIITES",S="REAL_ESTATE",v="GOLD",g="US_STOCKS",y="EX_US_STOCKS",T="DEVELOPED_MARKETS_STOCKS",E="EMERGING_MARKETS_STOCKS",A="LONG_TERM_BONDS",k="TIPS",_=new Map([[h,[g,y,A,k]],[x,[p,S,v,"LARGE_CAP_VALUES_STOCKS","LARGE_CAP_GROWTH_STOCKS","SMALL_CAP_VALUES_STOCKS","SMALL_CAP_GROWTH_STOCKS",T,E,A,"LONG_TERM_BONDS_EXTENDED","MID_TERM_BONDS","CORPORATE_BONDS"]],[f,["LARGE_CAP_STOCKS","SMALL_CAP_STOCKS",T,S,p,v,A,"SHORT_TERM_BONDS",E]],[m,[g,g,g,g,A,"HIGH_YIELD_BONDS"]]]),D={strategy:h,tickers:null,analyse:[],preconisation:void 0,status:void 0},w="STATUS/DONE",N="STATUS/ERROR",C="STATUS/LOADING",M=Object(j.b)({name:"UserStrategy",initialState:D,reducers:{changeSelectedStrategy:function(e,t){return Object(o.a)(Object(o.a)({},e),{},{strategy:t.payload})},addSelection:function(e,t){return Object(o.a)(Object(o.a)({},e),{},{tickers:Object(o.a)({},t.payload)})},addAssetAnalyse:function(e,t){return Object(o.a)(Object(o.a)({},e),{},{analyse:[].concat(Object(O.a)(e.analyse),[Object(o.a)({},t.payload)]),status:w})},setAnalyseLoading:function(e){return Object(o.a)(Object(o.a)({},e),{},{status:C})},setPreconisation:function(e,t){return Object(o.a)(Object(o.a)({},e),{},{preconisation:t.payload})}}}),R=M.actions,L=R.addSelection,P=R.changeSelectedStrategy,I=R.addAssetAnalyse,K=R.setAnalyseLoading,G=R.setPreconisation,U=M.reducer,F=Object(l.c)({userStrategy:U,translations:b}),B=(n(60),function(e){var t=e.number,n=e.children;return Object(c.jsxs)("div",{className:"numbered-card",children:[Object(c.jsx)("section",{className:"number",children:t}),Object(c.jsx)("section",{children:n})]})}),V=n(78),q=n(33),H=n(6),J=n.n(H),z=n(13),W=function(e,t){var n=t-1,c=new Date(e.getFullYear(),e.getMonth()-n,0);return c.setDate(Math.min(e.getDate(),c.getDate())),c},Q=function(e){return e.toISOString().slice(0,10)},Y=function(e){var t=e.baseUrl,n=e.apiEndpoint,c=e.queryParams;return c?"".concat(t).concat(n,"?").concat(new URLSearchParams(c)):"".concat(t).concat(n)},X=function(e){if(e.ok)return e.json();throw new Error("Something went wrong.")},Z=n(44),$=new(n.n(Z).a)({icons:{enabled:!1},position:"top-right",animationDuration:500}),ee=function(){var e=Object(z.a)(J.a.mark((function e(t,n,c){var r;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={baseUrl:"https://api.marketstack.com",apiEndpoint:"/v1/eod",queryParams:{access_key:"9764b11480123a4971883a8c88a8132f",symbols:t,date_from:Q(n),date_to:Q(c),limit:150}},e.abrupt("return",fetch(Y(r),{method:"GET"}).then(X).then((function(e){return e})).catch((function(e){$.alert(e)})));case 2:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),te=function(e){return e&&100*(e[1].close/e[e.length-1].open-1)},ne=function(){var e=Object(z.a)(J.a.mark((function e(t,n){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee(t,n,new Date);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ce=function(e,t){var n=null===e||void 0===e?void 0:e.data.filter((function(e){return new Date(e.date)>=t}));return te(n)},re=function(e,t){var n;return e.forEach((function(e){return e.asset===t?n=e:null})),n},se=(n(62),function(){var e,t=Object(V.a)(),n=Object(i.b)(),r=Object(q.a)(),s=r.register,a=r.handleSubmit,j=Object(i.c)((function(e){return e.userStrategy}));return Object(c.jsxs)("form",{className:"tickers-form",onSubmit:a((function(e){n(L(e)),n(K()),n((function(e,t){var n=W(new Date,6),c=W(new Date,3),r=W(new Date,1);_.get(t().userStrategy.strategy).forEach(function(){var s=Object(z.a)(J.a.mark((function s(a){var i,j,l,o,d;return J.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return i=t().userStrategy.tickers[a],s.next=3,ne(i,n);case 3:j=s.sent,l=te(null===j||void 0===j?void 0:j.data),o=ce(j,c),d=ce(j,r),e(I({asset:a,ticker:i,avg:(l+o+d)/3,1:d,3:o,6:l}));case 9:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}())}))})),children:[Object(c.jsx)("h3",{children:"J'ajoute mes tickers en fonction de ma strat\xe9gie"}),Object(c.jsx)("div",{className:"tickers",children:null===(e=_.get(j.strategy+""))||void 0===e?void 0:e.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:t.formatMessage({id:"ASSETS."+e})}),Object(c.jsx)("input",{type:"text",name:e+"",placeholder:"TICKER",ref:s({required:!0})})]},j.strategy+e)}))}),Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)("button",{type:"submit",children:"Valider"}),Object(c.jsxs)("details",{children:[Object(c.jsx)("summary",{children:"Je ne connais pas de ticker"}),"US Stocks : SPY | QQQ | IWM ",Object(c.jsx)("br",{}),"Ex-US Stocks : SCZ ",Object(c.jsx)("br",{}),"Long term bonds : TLT ",Object(c.jsx)("br",{}),"Tips : TIP"]})]})]})}),ae=(n(63),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.userStrategy}));return Object(c.jsxs)("div",{className:"assets-selector",children:[Object(c.jsxs)(B,{number:1,children:[Object(c.jsx)("h3",{children:"Je selectionne ma strat\xe9gie"}),Object(c.jsxs)("select",{name:"stategy",value:t.strategy+"",onChange:function(t){e(P(t.target.value))},children:[Object(c.jsx)("option",{value:h,children:h}),Object(c.jsx)("option",{value:x,children:x}),Object(c.jsx)("option",{value:f,children:f}),Object(c.jsx)("option",{value:m,children:m})]})]}),Object(c.jsx)(B,{number:2,children:Object(c.jsx)(se,{})})]})}),ie=(n(64),function(){return Object(c.jsx)("svg",{className:"styled-spinner",viewBox:"0 0 50 50",children:Object(c.jsx)("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"})})}),je=(n(65),function(){var e=Object(V.a)(),t=Object(i.b)(),n=Object(i.c)((function(e){return e.userStrategy})),s=n.analyse.length===(n.tickers&&Object.keys(n.tickers).length);return Object(r.useEffect)((function(){var e;s&&t((e=n.analyse,function(t){var n=re(e,g),c=re(e,y),r=re(e,A),s=re(e,k),a=n.avg>c.avg?n:c,i=r.avg>s.avg?r:s;a.avg>0?t(G(a)):t(G(i))}))}),[t,s,n.analyse]),s?Object(c.jsxs)("div",{className:"dma-report-viewer",children:[Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Asset"}),Object(c.jsx)("th",{children:"Ticker selectionn\xe9"}),Object(c.jsx)("th",{children:"Performance sur 1 mois"}),Object(c.jsx)("th",{children:"Performance sur 3 mois"}),Object(c.jsx)("th",{children:"Performance sur 6 mois"}),Object(c.jsx)("th",{children:"Moyenne"})]})}),Object(c.jsx)("tbody",{children:n.analyse&&n.analyse.map((function(t){var n,r,s,a;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.formatMessage({id:"ASSETS."+t.asset})}),Object(c.jsx)("td",{children:t.ticker}),Object(c.jsxs)("td",{children:[null===(n=t[1])||void 0===n?void 0:n.toFixed(2)," %"]}),Object(c.jsxs)("td",{children:[null===(r=t[3])||void 0===r?void 0:r.toFixed(2)," %"]}),Object(c.jsxs)("td",{children:[null===(s=t[6])||void 0===s?void 0:s.toFixed(2)," %"]}),Object(c.jsxs)("td",{children:[null===(a=t.avg)||void 0===a?void 0:a.toFixed(2)," %"]})]},t.asset)}))})]}),Object(c.jsxs)("h3",{children:["Pr\xe9conisation d'achat :",n.preconisation?Object(c.jsxs)("p",{children:[e.formatMessage({id:"ASSETS."+n.preconisation.asset})," (",n.preconisation.ticker,")"]}):Object(c.jsx)(ie,{})]})]}):Object(c.jsx)(c.Fragment,{})}),le=function(){switch(Object(i.c)((function(e){return e.userStrategy.strategy}))){case h:return Object(c.jsx)(je,{});default:return Object(c.jsx)("p",{children:"Stat\xe9gie inconnue"})}},oe=function(){Object(i.b)();var e,t=Object(i.c)((function(e){return e.userStrategy}));return Object(c.jsx)("div",{className:"assets-analyzer",children:(e=t.tickers,e&&0===Object.keys(e).length?Object(c.jsx)("p",{children:"Veuillez selectionner une strat\xe9gie et saisir les tickers."}):Object(c.jsx)("div",{className:"max-width-center",children:t.status===C?Object(c.jsx)(ie,{}):t.status===N?Object(c.jsx)("p",{children:"D\xe9sol\xe9 nous ne prennons pas encore en compte cette strat\xe9gie ou une erreur a \xe9t\xe9 rencontr\xe9e."}):Object(c.jsx)(le,{})}))})},de=(n(66),function(){return Object(c.jsx)("section",{className:"footer",children:Object(c.jsx)("p",{children:Object(c.jsx)("i",{children:"Attention, il ne s'agit pas de conseils d'achats. Cet outil te permet d'avoir une lecture rapide des momentums."})})})});var ue=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("section",{className:"content",children:[Object(c.jsx)("h2",{children:"Strat\xe9gie & Tickers"}),Object(c.jsx)(ae,{}),Object(c.jsx)("h2",{children:"Analyse"}),Object(c.jsx)(oe,{})]}),Object(c.jsx)(de,{})]})},be=n(27),Oe=n(7),he=n(79),xe=n(46),fe=n.n(xe),me=n(21),pe=(n(67),function(e){var t=e.setAnalyse,n=Object(q.a)(),r=n.register,s=n.handleSubmit;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:"J'ins\xe8re les informations du ticker que je veux analyser"}),Object(c.jsxs)("form",{className:"ticker-analyse-form",onSubmit:s((function(e){ee(e.ticker,new Date(e.date),new Date).then((function(e){return t({first:e.data[e.data.length-1],last:e.data[0],performance:te(e.data)})}))})),children:[Object(c.jsxs)("label",{children:["Ticker",Object(c.jsx)("input",{type:"text",name:"ticker",placeholder:"TICKER",ref:r({required:!0})})]}),Object(c.jsxs)("label",{children:["P\xe9riode de stats (Max 4ans)",Object(c.jsx)("input",{type:"date",name:"date",placeholder:"TICKER",ref:r({required:!0})})]}),Object(c.jsx)("button",{type:"submit",children:"Valider"})]})]})}),Se=(n(68),function(e){var t=e.analyse;return Object(c.jsxs)("div",{className:"ticker-analyse-visualisation",children:[Object(c.jsx)("h3",{children:"R\xe9sultats"}),Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Date"}),Object(c.jsx)("th",{children:"Ticker"}),Object(c.jsx)("th",{children:"Ouverture"}),Object(c.jsx)("th",{children:"Fermeture"}),Object(c.jsx)("th",{children:"Valeur haute"}),Object(c.jsx)("th",{children:"Valeur basse"}),Object(c.jsx)("th",{children:"Volume"})]})}),Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:new Date(t.first.date).toDateString()}),Object(c.jsx)("td",{children:t.first.symbol}),Object(c.jsx)("td",{children:t.first.open}),Object(c.jsx)("td",{children:t.first.close}),Object(c.jsx)("td",{children:t.first.high}),Object(c.jsx)("td",{children:t.first.low}),Object(c.jsx)("td",{children:t.first.volume})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:new Date(t.last.date).toDateString()}),Object(c.jsx)("td",{children:t.last.symbol}),Object(c.jsx)("td",{children:t.last.open}),Object(c.jsx)("td",{children:t.last.close}),Object(c.jsx)("td",{children:t.last.high}),Object(c.jsx)("td",{children:t.last.low}),Object(c.jsx)("td",{children:t.last.volume})]})]})]}),Object(c.jsxs)("h4",{children:["Performance : ",t.performance.toFixed(2)," %"]})]})}),ve=function(){var e=Object(r.useState)(),t=Object(me.a)(e,2),n=t[0],s=t[1];return Object(c.jsxs)("section",{className:"content",children:[Object(c.jsx)(B,{number:1,children:Object(c.jsx)(pe,{setAnalyse:s})}),n?Object(c.jsx)(Se,{analyse:n}):Object(c.jsx)(c.Fragment,{})]})};n(69);var ge=function(){return Object(c.jsxs)("header",{children:[Object(c.jsxs)("div",{className:"logo-and-title",children:[Object(c.jsx)(be.b,{to:"/",children:Object(c.jsx)("img",{alt:"Bourse Academy",src:"https://us.allianzgi.com/-/media/allianzgi/na/us/images/1920x980-momentum-driven-investing-hero.jpg?w=1152&hash=555965964A7131396E7A5885525C8D39"})}),Object(c.jsx)("h1",{children:"Momentum Analyzer"})]}),Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(be.b,{to:"/",children:Object(c.jsx)("b",{children:"Home"})})}),Object(c.jsx)("li",{children:Object(c.jsx)(be.b,{to:"/research",children:Object(c.jsx)("b",{children:"Ticker analyse"})})})]})})]})},ye=function(){var e=Object(i.c)((function(e){return e.translations.messages})),t=Object(i.b)();return Object(r.useEffect)((function(){t((function(e){return fetch("".concat(window.location.href,"/data/translations.json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(X).then((function(t){return e(u(fe()(t)))}))}))}),[t]),Object(c.jsx)(c.Fragment,{children:e?Object(c.jsx)(he.a,{messages:e,locale:"fr",defaultLocale:"fr",children:Object(c.jsx)(be.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)(ge,{}),Object(c.jsxs)(Oe.c,{children:[Object(c.jsx)(Oe.a,{path:"/research",children:Object(c.jsx)(ve,{})}),Object(c.jsx)(Oe.a,{path:"/",children:Object(c.jsx)(ue,{})})]})]})})}):Object(c.jsx)(ie,{})})},Te=(n(73),n(74),Object(j.a)({reducer:F,devTools:!0}));a.a.render(Object(c.jsx)(i.a,{store:Te,children:Object(c.jsx)(ye,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.ec98473f.chunk.js.map