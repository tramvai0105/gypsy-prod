import{r as E,j as o,o as oe,d as Xt}from"./client-XwROWqgd.js";const Ut="/assets/knur-B4CZ2-xK.jpg";function Zt({loaded:e}){const t=E.useRef(null),r=E.useRef(null),n=E.useRef(null),s=E.useRef(null),i=E.useRef(24),a=E.useRef(null),l=E.useRef(0),u=E.useRef(null),g=E.useRef(null),y=E.useRef(null),f=E.useRef(0);E.useEffect(()=>{t.current&&(t.current.addEventListener("wheel",d=>$(d)),t.current.addEventListener("mousedown",d=>x(d)),t.current.addEventListener("touchmove",d=>b(d)))},[]);function b(d){console.log(d)}function x(d){r.current&&(d.offsetX>d.target.clientWidth||d.offsetY>d.target.clientHeight)&&(f.current=d.offsetX/document.body.offsetWidth*r.current.clientWidth)}function $(d){f.current+=d.deltaY,f.current+=d.deltaX,f.current<0&&(f.current=0),t.current&&r.current&&f.current>r.current.clientWidth&&(f.current=r.current.clientWidth)}if(typeof window<"u"){let d=function(){if(n.current){let m=f.current/document.body.clientWidth*10;n.current.style.filter=`blur(${m<10?m:10}px)`}if(s.current&&a.current&&u.current){let m=document.body.clientWidth-(24+u.current.clientWidth+a.current.clientWidth+s.current.clientWidth),N=f.current>24?f.current:24,c=((N<m?N:m)-i.current)/20;i.current+=Math.abs(c)>1e-4?c:0,s.current.style.transform=`translateX(${i.current}px)`}if(a.current&&u.current){let m=document.body.clientWidth/2+a.current.clientWidth/2-(24+u.current.clientWidth+a.current.clientWidth),w=((f.current/2<m?f.current/2:m)-l.current)/20;l.current+=Math.abs(w)>1e-4?w:0,a.current.style.transform=`translateX(${l.current}px)`}if(t.current){let m=(t.current.scrollLeft-f.current)/20;t.current.scrollBy({left:-m,behavior:"instant"})}if(y.current){let m=f.current/(document.body.clientWidth*2);y.current.style.opacity=`${m}`}if(g.current){let m=f.current/(document.body.clientWidth*2);g.current.style.opacity=`${m}`}window.requestAnimationFrame(d)};window.requestAnimationFrame(d)}return o.jsxs("div",{ref:t,className:"h-[100vh] relative flex flex-row overflow-x-scroll overflow-y-hidden",children:[o.jsxs("div",{className:"min-w-[100vw] relative h-[100vh]",children:[o.jsx("div",{className:"absolute z-20 w-full pl-4 py-4 h-full overflow-hidden",children:o.jsx("div",{ref:n,className:"slider-bg w-full h-full"})}),o.jsxs("div",{className:"z-30 select-none justify-between text-white leading-[220px] relative flex flex-row items-center w-full h-full",children:[o.jsxs("div",{ref:s,className:"flex flex-col relative justify-between h-full",children:[o.jsx("span",{className:"text-[12rem]",children:"E"}),o.jsx("span",{className:"text-4xl text-center",children:"Elvis"}),o.jsx("span",{className:"text-[12rem]",children:"K"})]}),o.jsx("div",{ref:a,className:"flex text-4xl px-6 flex-row justify-between",children:o.jsx("span",{className:" ",children:"King"})}),o.jsxs("div",{ref:u,className:"flex flex-col pr-6 justify-between h-full",children:[o.jsx("span",{className:"text-center animate-pulse",children:"Крутить ↓"}),o.jsx("span",{className:"text-4xl",children:"Pigsley"}),o.jsx("span",{className:"text-[12rem]",children:"P"})]})]})]}),o.jsxs("a",{ref:g,href:"/",className:"fixed z-10 leading-none text-white text-[6rem] flex flex-col top-0 left-4",children:[o.jsx("span",{className:"",children:"E"}),o.jsxs("div",{className:"flex flex-row gap-3",children:[o.jsx("span",{children:"K"}),o.jsx("span",{children:"P"})]})]}),o.jsxs("div",{ref:r,className:"flex relative pl-12 flex-row w-fit items-end gap-6 bg-[#e1e4e8]",children:[o.jsx("span",{className:"absolute left-12 bottom-[75%]",children:"Текст на смартфоне при таче"}),new Array(38).fill(0).map((d,m)=>o.jsx(Jt,{text:Qt[m],id:m},m)),o.jsxs("div",{className:"w-[70vw] flex flex-col text-xl gap-6 justify-center h-full items-center",children:[o.jsx("img",{className:"w-[25vw] h-[50vh] object-cover",src:Ut}),o.jsx("a",{target:"_blank",href:"http://t.me/pigsboars",className:"border-[#646f77] border-[1px] rounded-full px-4 py-2 hover:text-[#646f77] hover:bg-white",children:"Подпишись на меня"})]})]})]})}function Jt({id:e,text:t}){const r=E.useRef(null),n=E.useRef(null),[s,i]=E.useState(null);E.useEffect(()=>{a()},[]);function a(){if(n.current&&r.current){let l=r.current.naturalHeight/r.current.naturalWidth;i(n.current.clientHeight/l)}}return o.jsxs("div",{className:"flex show-text-div text-xl group flex-col relative",children:[o.jsx("div",{className:"show-text mb-2 ml-2 relative",children:o.jsx("span",{className:"",children:t})}),o.jsx("div",{style:{width:s?`${s}px`:"300px"},ref:n,className:"h-[50vh] overflow-hidden w-[300px] flex items-end",children:o.jsx("img",{onLoad:()=>a(),style:{width:s?`${s}px`:"300px"},ref:r,className:"object-cover transition-all duration-500 group-hover:scale-110 h-[50vh] mt-auto",src:`/id${e}.jpg`})})]})}const Qt=["Не просто свинья, а идея","Удивительный хряк","Пигги","Оинк-Оинк","Микрокомпакт Носач","Предводитель скотландии","Мммм! Трюфели","Я уебался","Лежать на солнце греться для свиньи полезно","Винья","Солома Сено Грязь","Я вкушаю кровь своих врагов","Очень люблю свою mammy","Я пиво не пью - это пиздежь","Говном затопило города и сёла","Сбежал в Таганрог","В поисках компактности","Я Элвис Королевский Хрюкерс","Макаки - лохи","Я заебался это писать","Запрещаю пукать","Стуки ну и хрюкнуть на худой конец","У Элвиса фимоз","Пышные формы свиньи","Демонтажник","После вакцинации","Забор под напряжением","Привет, я хряк!","В лесу","Не морда, а крейсер","Самый умный кабанчик","Вииии!","Куча моего маринованого кала","Люблю пледики","В глазах двоится","Ступенька судьбы","После поисков","Ботинок уселся"],Vt="/assets/farma-DaZogYCL.jpeg";var k=function(){return k=Object.assign||function(t){for(var r,n=1,s=arguments.length;n<s;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},k.apply(this,arguments)};function ce(e,t,r){if(r||arguments.length===2)for(var n=0,s=t.length,i;n<s;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var R="-ms-",ae="-moz-",S="-webkit-",ht="comm",Re="rule",qe="decl",er="@import",mt="@keyframes",tr="@layer",gt=Math.abs,Xe=String.fromCharCode,We=Object.assign;function rr(e,t){return A(e,0)^45?(((t<<2^A(e,0))<<2^A(e,1))<<2^A(e,2))<<2^A(e,3):0}function yt(e){return e.trim()}function L(e,t){return(e=t.exec(e))?e[0]:e}function p(e,t,r){return e.replace(t,r)}function xe(e,t,r){return e.indexOf(t,r)}function A(e,t){return e.charCodeAt(t)|0}function X(e,t,r){return e.slice(t,r)}function D(e){return e.length}function xt(e){return e.length}function ie(e,t){return t.push(e),e}function nr(e,t){return e.map(t).join("")}function et(e,t){return e.filter(function(r){return!L(r,t)})}var Ee=1,U=1,vt=0,_=0,I=0,V="";function Ce(e,t,r,n,s,i,a,l){return{value:e,root:t,parent:r,type:n,props:s,children:i,line:Ee,column:U,length:a,return:"",siblings:l}}function F(e,t){return We(Ce("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function K(e){for(;e.root;)e=F(e.root,{children:[e]});ie(e,e.siblings)}function sr(){return I}function ir(){return I=_>0?A(V,--_):0,U--,I===10&&(U=1,Ee--),I}function O(){return I=_<vt?A(V,_++):0,U++,I===10&&(U=1,Ee++),I}function Y(){return A(V,_)}function ve(){return _}function Ie(e,t){return X(V,e,t)}function Fe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ar(e){return Ee=U=1,vt=D(V=e),_=0,[]}function or(e){return V="",e}function De(e){return yt(Ie(_-1,Be(e===91?e+2:e===40?e+1:e)))}function cr(e){for(;(I=Y())&&I<33;)O();return Fe(e)>2||Fe(I)>3?"":" "}function ur(e,t){for(;--t&&O()&&!(I<48||I>102||I>57&&I<65||I>70&&I<97););return Ie(e,ve()+(t<6&&Y()==32&&O()==32))}function Be(e){for(;O();)switch(I){case e:return _;case 34:case 39:e!==34&&e!==39&&Be(I);break;case 40:e===41&&Be(e);break;case 92:O();break}return _}function lr(e,t){for(;O()&&e+I!==57;)if(e+I===84&&Y()===47)break;return"/*"+Ie(t,_-1)+"*"+Xe(e===47?e:O())}function fr(e){for(;!Fe(Y());)O();return Ie(e,_)}function dr(e){return or(be("",null,null,null,[""],e=ar(e),0,[0],e))}function be(e,t,r,n,s,i,a,l,u){for(var g=0,y=0,f=a,b=0,x=0,$=0,d=1,m=1,N=1,w=0,c="",j=s,C=i,v=n,h=c;m;)switch($=w,w=O()){case 40:if($!=108&&A(h,f-1)==58){xe(h+=p(De(w),"&","&\f"),"&\f",gt(g?l[g-1]:0))!=-1&&(N=-1);break}case 34:case 39:case 91:h+=De(w);break;case 9:case 10:case 13:case 32:h+=cr($);break;case 92:h+=ur(ve()-1,7);continue;case 47:switch(Y()){case 42:case 47:ie(pr(lr(O(),ve()),t,r,u),u);break;default:h+="/"}break;case 123*d:l[g++]=D(h)*N;case 125*d:case 59:case 0:switch(w){case 0:case 125:m=0;case 59+y:N==-1&&(h=p(h,/\f/g,"")),x>0&&D(h)-f&&ie(x>32?rt(h+";",n,r,f-1,u):rt(p(h," ","")+";",n,r,f-2,u),u);break;case 59:h+=";";default:if(ie(v=tt(h,t,r,g,y,s,l,c,j=[],C=[],f,i),i),w===123)if(y===0)be(h,t,v,v,j,i,f,l,C);else switch(b===99&&A(h,3)===110?100:b){case 100:case 108:case 109:case 115:be(e,v,v,n&&ie(tt(e,v,v,0,0,s,l,c,s,j=[],f,C),C),s,C,f,l,n?j:C);break;default:be(h,v,v,v,[""],C,0,l,C)}}g=y=x=0,d=N=1,c=h="",f=a;break;case 58:f=1+D(h),x=$;default:if(d<1){if(w==123)--d;else if(w==125&&d++==0&&ir()==125)continue}switch(h+=Xe(w),w*d){case 38:N=y>0?1:(h+="\f",-1);break;case 44:l[g++]=(D(h)-1)*N,N=1;break;case 64:Y()===45&&(h+=De(O())),b=Y(),y=f=D(c=h+=fr(ve())),w++;break;case 45:$===45&&D(h)==2&&(d=0)}}return i}function tt(e,t,r,n,s,i,a,l,u,g,y,f){for(var b=s-1,x=s===0?i:[""],$=xt(x),d=0,m=0,N=0;d<n;++d)for(var w=0,c=X(e,b+1,b=gt(m=a[d])),j=e;w<$;++w)(j=yt(m>0?x[w]+" "+c:p(c,/&\f/g,x[w])))&&(u[N++]=j);return Ce(e,t,r,s===0?Re:l,u,g,y,f)}function pr(e,t,r,n){return Ce(e,t,r,ht,Xe(sr()),X(e,2,-2),0,n)}function rt(e,t,r,n,s){return Ce(e,t,r,qe,X(e,0,n),X(e,n+1,-1),n,s)}function bt(e,t,r){switch(rr(e,t)){case 5103:return S+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return S+e+e;case 4789:return ae+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return S+e+ae+e+R+e+e;case 5936:switch(A(e,t+11)){case 114:return S+e+R+p(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return S+e+R+p(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return S+e+R+p(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return S+e+R+e+e;case 6165:return S+e+R+"flex-"+e+e;case 5187:return S+e+p(e,/(\w+).+(:[^]+)/,S+"box-$1$2"+R+"flex-$1$2")+e;case 5443:return S+e+R+"flex-item-"+p(e,/flex-|-self/g,"")+(L(e,/flex-|baseline/)?"":R+"grid-row-"+p(e,/flex-|-self/g,""))+e;case 4675:return S+e+R+"flex-line-pack"+p(e,/align-content|flex-|-self/g,"")+e;case 5548:return S+e+R+p(e,"shrink","negative")+e;case 5292:return S+e+R+p(e,"basis","preferred-size")+e;case 6060:return S+"box-"+p(e,"-grow","")+S+e+R+p(e,"grow","positive")+e;case 4554:return S+p(e,/([^-])(transform)/g,"$1"+S+"$2")+e;case 6187:return p(p(p(e,/(zoom-|grab)/,S+"$1"),/(image-set)/,S+"$1"),e,"")+e;case 5495:case 3959:return p(e,/(image-set\([^]*)/,S+"$1$`$1");case 4968:return p(p(e,/(.+:)(flex-)?(.*)/,S+"box-pack:$3"+R+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+S+e+e;case 4200:if(!L(e,/flex-|baseline/))return R+"grid-column-align"+X(e,t)+e;break;case 2592:case 3360:return R+p(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,s){return t=s,L(n.props,/grid-\w+-end/)})?~xe(e+(r=r[t].value),"span",0)?e:R+p(e,"-start","")+e+R+"grid-row-span:"+(~xe(r,"span",0)?L(r,/\d+/):+L(r,/\d+/)-+L(e,/\d+/))+";":R+p(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return L(n.props,/grid-\w+-start/)})?e:R+p(p(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return p(e,/(.+)-inline(.+)/,S+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(D(e)-1-t>6)switch(A(e,t+1)){case 109:if(A(e,t+4)!==45)break;case 102:return p(e,/(.+:)(.+)-([^]+)/,"$1"+S+"$2-$3$1"+ae+(A(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~xe(e,"stretch",0)?bt(p(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return p(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,s,i,a,l,u,g){return R+s+":"+i+g+(a?R+s+"-span:"+(l?u:+u-+i)+g:"")+e});case 4949:if(A(e,t+6)===121)return p(e,":",":"+S)+e;break;case 6444:switch(A(e,A(e,14)===45?18:11)){case 120:return p(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+S+(A(e,14)===45?"inline-":"")+"box$3$1"+S+"$2$3$1"+R+"$2box$3")+e;case 100:return p(e,":",":"+R)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return p(e,"scroll-","scroll-snap-")+e}return e}function je(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function hr(e,t,r,n){switch(e.type){case tr:if(e.children.length)break;case er:case qe:return e.return=e.return||e.value;case ht:return"";case mt:return e.return=e.value+"{"+je(e.children,n)+"}";case Re:if(!D(e.value=e.props.join(",")))return""}return D(r=je(e.children,n))?e.return=e.value+"{"+r+"}":""}function mr(e){var t=xt(e);return function(r,n,s,i){for(var a="",l=0;l<t;l++)a+=e[l](r,n,s,i)||"";return a}}function gr(e){return function(t){t.root||(t=t.return)&&e(t)}}function yr(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case qe:e.return=bt(e.value,e.length,r);return;case mt:return je([F(e,{value:p(e.value,"@","@"+S)})],n);case Re:if(e.length)return nr(r=e.props,function(s){switch(L(s,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":K(F(e,{props:[p(s,/:(read-\w+)/,":"+ae+"$1")]})),K(F(e,{props:[s]})),We(e,{props:et(r,n)});break;case"::placeholder":K(F(e,{props:[p(s,/:(plac\w+)/,":"+S+"input-$1")]})),K(F(e,{props:[p(s,/:(plac\w+)/,":"+ae+"$1")]})),K(F(e,{props:[p(s,/:(plac\w+)/,R+"input-$1")]})),K(F(e,{props:[s]})),We(e,{props:et(r,n)});break}return""})}}var xr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},P={},Z=typeof process<"u"&&P!==void 0&&(P.REACT_APP_SC_ATTR||P.SC_ATTR)||"data-styled",wt="active",St="data-styled-version",Ae="6.1.13",Ue=`/*!sc*/
`,$e=typeof window<"u"&&"HTMLElement"in window,vr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&P!==void 0&&P.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&P.REACT_APP_SC_DISABLE_SPEEDY!==""?P.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&P.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&P!==void 0&&P.SC_DISABLE_SPEEDY!==void 0&&P.SC_DISABLE_SPEEDY!==""&&P.SC_DISABLE_SPEEDY!=="false"&&P.SC_DISABLE_SPEEDY),ke=Object.freeze([]),J=Object.freeze({});function br(e,t,r){return r===void 0&&(r=J),e.theme!==r.theme&&e.theme||t||r.theme}var jt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),wr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Sr=/(^-|-$)/g;function nt(e){return e.replace(wr,"-").replace(Sr,"")}var jr=/(a)(d)/gi,ge=52,st=function(e){return String.fromCharCode(e+(e>25?39:97))};function Me(e){var t,r="";for(t=Math.abs(e);t>ge;t=t/ge|0)r=st(t%ge)+r;return(st(t%ge)+r).replace(jr,"$1-$2")}var ze,$t=5381,q=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Nt=function(e){return q($t,e)};function Rt(e){return Me(Nt(e)>>>0)}function $r(e){return e.displayName||e.name||"Component"}function Le(e){return typeof e=="string"&&!0}var Et=typeof Symbol=="function"&&Symbol.for,Ct=Et?Symbol.for("react.memo"):60115,Nr=Et?Symbol.for("react.forward_ref"):60112,Rr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Er={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},It={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Cr=((ze={})[Nr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ze[Ct]=It,ze);function it(e){return("type"in(t=e)&&t.type.$$typeof)===Ct?It:"$$typeof"in e?Cr[e.$$typeof]:Rr;var t}var Ir=Object.defineProperty,Ar=Object.getOwnPropertyNames,at=Object.getOwnPropertySymbols,kr=Object.getOwnPropertyDescriptor,Pr=Object.getPrototypeOf,ot=Object.prototype;function At(e,t,r){if(typeof t!="string"){if(ot){var n=Pr(t);n&&n!==ot&&At(e,n,r)}var s=Ar(t);at&&(s=s.concat(at(t)));for(var i=it(e),a=it(t),l=0;l<s.length;++l){var u=s[l];if(!(u in Er||r&&r[u]||a&&u in a||i&&u in i)){var g=kr(t,u);try{Ir(e,u,g)}catch{}}}}return e}function Q(e){return typeof e=="function"}function Ze(e){return typeof e=="object"&&"styledComponentId"in e}function G(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ge(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function ue(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ye(e,t,r){if(r===void 0&&(r=!1),!r&&!ue(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Ye(e[n],t[n]);else if(ue(t))for(var n in t)e[n]=Ye(e[n],t[n]);return e}function Je(e,t){Object.defineProperty(e,"toString",{value:t})}function le(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var _r=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,s=n.length,i=s;t>=i;)if((i<<=1)<0)throw le(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=s;a<i;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),u=(a=0,r.length);a<u;a++)this.tag.insertRule(l,r[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),s=n+r;this.groupSizes[t]=0;for(var i=n;i<s;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],s=this.indexOfGroup(t),i=s+n,a=s;a<i;a++)r+="".concat(this.tag.getRule(a)).concat(Ue);return r},e}(),we=new Map,Ne=new Map,Se=1,ye=function(e){if(we.has(e))return we.get(e);for(;Ne.has(Se);)Se++;var t=Se++;return we.set(e,t),Ne.set(t,e),t},Or=function(e,t){Se=t+1,we.set(e,t),Ne.set(t,e)},Dr="style[".concat(Z,"][").concat(St,'="').concat(Ae,'"]'),zr=new RegExp("^".concat(Z,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Lr=function(e,t,r){for(var n,s=r.split(","),i=0,a=s.length;i<a;i++)(n=s[i])&&e.registerName(t,n)},Tr=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(Ue),s=[],i=0,a=n.length;i<a;i++){var l=n[i].trim();if(l){var u=l.match(zr);if(u){var g=0|parseInt(u[1],10),y=u[2];g!==0&&(Or(y,g),Lr(e,y,u[3]),e.getTag().insertRules(g,s)),s.length=0}else s.push(l)}}},ct=function(e){for(var t=document.querySelectorAll(Dr),r=0,n=t.length;r<n;r++){var s=t[r];s&&s.getAttribute(Z)!==wt&&(Tr(e,s),s.parentNode&&s.parentNode.removeChild(s))}};function Wr(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var kt=function(e){var t=document.head,r=e||t,n=document.createElement("style"),s=function(l){var u=Array.from(l.querySelectorAll("style[".concat(Z,"]")));return u[u.length-1]}(r),i=s!==void 0?s.nextSibling:null;n.setAttribute(Z,wt),n.setAttribute(St,Ae);var a=Wr();return a&&n.setAttribute("nonce",a),r.insertBefore(n,i),n},Fr=function(){function e(t){this.element=kt(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,s=0,i=n.length;s<i;s++){var a=n[s];if(a.ownerNode===r)return a}throw le(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Br=function(){function e(t){this.element=kt(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Mr=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ut=$e,Gr={isServer:!$e,useCSSOMInjection:!vr},Pt=function(){function e(t,r,n){t===void 0&&(t=J),r===void 0&&(r={});var s=this;this.options=k(k({},Gr),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&$e&&ut&&(ut=!1,ct(this)),Je(this,function(){return function(i){for(var a=i.getTag(),l=a.length,u="",g=function(f){var b=function(N){return Ne.get(N)}(f);if(b===void 0)return"continue";var x=i.names.get(b),$=a.getGroup(f);if(x===void 0||!x.size||$.length===0)return"continue";var d="".concat(Z,".g").concat(f,'[id="').concat(b,'"]'),m="";x!==void 0&&x.forEach(function(N){N.length>0&&(m+="".concat(N,","))}),u+="".concat($).concat(d,'{content:"').concat(m,'"}').concat(Ue)},y=0;y<l;y++)g(y);return u}(s)})}return e.registerId=function(t){return ye(t)},e.prototype.rehydrate=function(){!this.server&&$e&&ct(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(k(k({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,s=r.target;return r.isServer?new Mr(s):n?new Fr(s):new Br(s)}(this.options),new _r(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ye(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(ye(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ye(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Yr=/&/g,Hr=/^\s*\/\/.*$/gm;function _t(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=_t(r.children,t)),r})}function Kr(e){var t,r,n,s=e===void 0?J:e,i=s.options,a=i===void 0?J:i,l=s.plugins,u=l===void 0?ke:l,g=function(b,x,$){return $.startsWith(r)&&$.endsWith(r)&&$.replaceAll(r,"").length>0?".".concat(t):b},y=u.slice();y.push(function(b){b.type===Re&&b.value.includes("&")&&(b.props[0]=b.props[0].replace(Yr,r).replace(n,g))}),a.prefix&&y.push(yr),y.push(hr);var f=function(b,x,$,d){x===void 0&&(x=""),$===void 0&&($=""),d===void 0&&(d="&"),t=d,r=x,n=new RegExp("\\".concat(r,"\\b"),"g");var m=b.replace(Hr,""),N=dr($||x?"".concat($," ").concat(x," { ").concat(m," }"):m);a.namespace&&(N=_t(N,a.namespace));var w=[];return je(N,mr(y.concat(gr(function(c){return w.push(c)})))),w};return f.hash=u.length?u.reduce(function(b,x){return x.name||le(15),q(b,x.name)},$t).toString():"",f}var qr=new Pt,He=Kr(),Ot=oe.createContext({shouldForwardProp:void 0,styleSheet:qr,stylis:He});Ot.Consumer;oe.createContext(void 0);function lt(){return E.useContext(Ot)}var Dt=function(){function e(t,r){var n=this;this.inject=function(s,i){i===void 0&&(i=He);var a=n.name+i.hash;s.hasNameForId(n.id,a)||s.insertRules(n.id,a,i(n.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Je(this,function(){throw le(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=He),this.name+t.hash},e}(),Xr=function(e){return e>="A"&&e<="Z"};function ft(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Xr(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var zt=function(e){return e==null||e===!1||e===""},Lt=function(e){var t,r,n=[];for(var s in e){var i=e[s];e.hasOwnProperty(s)&&!zt(i)&&(Array.isArray(i)&&i.isCss||Q(i)?n.push("".concat(ft(s),":"),i,";"):ue(i)?n.push.apply(n,ce(ce(["".concat(s," {")],Lt(i),!1),["}"],!1)):n.push("".concat(ft(s),": ").concat((t=s,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in xr||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function H(e,t,r,n){if(zt(e))return[];if(Ze(e))return[".".concat(e.styledComponentId)];if(Q(e)){if(!Q(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var s=e(t);return H(s,t,r,n)}var i;return e instanceof Dt?r?(e.inject(r,n),[e.getName(n)]):[e]:ue(e)?Lt(e):Array.isArray(e)?Array.prototype.concat.apply(ke,e.map(function(a){return H(a,t,r,n)})):[e.toString()]}function Ur(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Q(r)&&!Ze(r))return!1}return!0}var Zr=Nt(Ae),Jr=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Ur(t),this.componentId=r,this.baseHash=q(Zr,r),this.baseStyle=n,Pt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))s=G(s,this.staticRulesId);else{var i=Ge(H(this.rules,t,r,n)),a=Me(q(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,a)){var l=n(i,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,l)}s=G(s,a),this.staticRulesId=a}else{for(var u=q(this.baseHash,n.hash),g="",y=0;y<this.rules.length;y++){var f=this.rules[y];if(typeof f=="string")g+=f;else if(f){var b=Ge(H(f,t,r,n));u=q(u,b+y),g+=b}}if(g){var x=Me(u>>>0);r.hasNameForId(this.componentId,x)||r.insertRules(this.componentId,x,n(g,".".concat(x),void 0,this.componentId)),s=G(s,x)}}return s},e}(),Tt=oe.createContext(void 0);Tt.Consumer;var Te={};function Qr(e,t,r){var n=Ze(e),s=e,i=!Le(e),a=t.attrs,l=a===void 0?ke:a,u=t.componentId,g=u===void 0?function(j,C){var v=typeof j!="string"?"sc":nt(j);Te[v]=(Te[v]||0)+1;var h="".concat(v,"-").concat(Rt(Ae+v+Te[v]));return C?"".concat(C,"-").concat(h):h}(t.displayName,t.parentComponentId):u,y=t.displayName,f=y===void 0?function(j){return Le(j)?"styled.".concat(j):"Styled(".concat($r(j),")")}(e):y,b=t.displayName&&t.componentId?"".concat(nt(t.displayName),"-").concat(t.componentId):t.componentId||g,x=n&&s.attrs?s.attrs.concat(l).filter(Boolean):l,$=t.shouldForwardProp;if(n&&s.shouldForwardProp){var d=s.shouldForwardProp;if(t.shouldForwardProp){var m=t.shouldForwardProp;$=function(j,C){return d(j,C)&&m(j,C)}}else $=d}var N=new Jr(r,b,n?s.componentStyle:void 0);function w(j,C){return function(v,h,ee){var fe=v.attrs,Bt=v.componentStyle,Mt=v.defaultProps,Gt=v.foldedComponentIds,Yt=v.styledComponentId,Ht=v.target,Kt=oe.useContext(Tt),qt=lt(),Pe=v.shouldForwardProp||qt.shouldForwardProp,Qe=br(h,Kt,Mt)||J,z=function(pe,re,he){for(var ne,B=k(k({},re),{className:void 0,theme:he}),Oe=0;Oe<pe.length;Oe+=1){var me=Q(ne=pe[Oe])?ne(B):ne;for(var W in me)B[W]=W==="className"?G(B[W],me[W]):W==="style"?k(k({},B[W]),me[W]):me[W]}return re.className&&(B.className=G(B.className,re.className)),B}(fe,h,Qe),de=z.as||Ht,te={};for(var T in z)z[T]===void 0||T[0]==="$"||T==="as"||T==="theme"&&z.theme===Qe||(T==="forwardedAs"?te.as=z.forwardedAs:Pe&&!Pe(T,de)||(te[T]=z[T]));var Ve=function(pe,re){var he=lt(),ne=pe.generateAndInjectStyles(re,he.styleSheet,he.stylis);return ne}(Bt,z),_e=G(Gt,Yt);return Ve&&(_e+=" "+Ve),z.className&&(_e+=" "+z.className),te[Le(de)&&!jt.has(de)?"class":"className"]=_e,te.ref=ee,E.createElement(de,te)}(c,j,C)}w.displayName=f;var c=oe.forwardRef(w);return c.attrs=x,c.componentStyle=N,c.displayName=f,c.shouldForwardProp=$,c.foldedComponentIds=n?G(s.foldedComponentIds,s.styledComponentId):"",c.styledComponentId=b,c.target=n?s.target:e,Object.defineProperty(c,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=n?function(C){for(var v=[],h=1;h<arguments.length;h++)v[h-1]=arguments[h];for(var ee=0,fe=v;ee<fe.length;ee++)Ye(C,fe[ee],!0);return C}({},s.defaultProps,j):j}}),Je(c,function(){return".".concat(c.styledComponentId)}),i&&At(c,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),c}function dt(e,t){for(var r=[e[0]],n=0,s=t.length;n<s;n+=1)r.push(t[n],e[n+1]);return r}var pt=function(e){return Object.assign(e,{isCss:!0})};function Wt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Q(e)||ue(e))return pt(H(dt(ke,ce([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?H(n):pt(H(dt(n,t)))}function Ke(e,t,r){if(r===void 0&&(r=J),!t)throw le(1,t);var n=function(s){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,r,Wt.apply(void 0,ce([s],i,!1)))};return n.attrs=function(s){return Ke(e,t,k(k({},r),{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)}))},n.withConfig=function(s){return Ke(e,t,k(k({},r),s))},n}var Ft=function(e){return Ke(Qr,e)},M=Ft;jt.forEach(function(e){M[e]=Ft(e)});function se(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Ge(Wt.apply(void 0,ce([e],t,!1))),s=Rt(n);return new Dt(s,n)}function Vr({loaded:e,setLoaded:t}){const r=E.useRef(new Array(5).fill(0).map((c,j)=>"")),[n,s]=E.useState(0);E.useEffect(()=>{i()},[]),E.useEffect(()=>{n==r.current.length&&t()},[n]);async function i(){for(let c=0;c<r.current.length;c++){let C=await(await fetch(`/id${c}.jpg`)).blob();const v=new FileReader;v.readAsDataURL(C),v.onload=()=>{typeof v.result=="string"&&(r.current[c]=v.result),s(h=>h+1)}}}const a=se`
        0% {
            transform: scale(0.85);
            opacity: 0.0;
        }
        1%{
            opacity: 1.0;
        }
        50% {
            transform: scale(1.05);
        }
        99% {
            opacity : 1.0
        }
        100% {
            transform: scale(0.85);
            opacity : 0.0;
        }
    `,l=se`
        0%{
            display: flex;
        }
        99%{
            display: flex;
        }
        100%{
            display: none;
        }
    `,u=c=>25*25-c*30-c*20,g=c=>25*25-c*30-c*20,y=M(en)`
        position: absolute;
        z-index: 10;
        // border: 1px solid black;
        width: ${c=>u(c.id)}px;
        height: ${c=>g(c.id)}px;
        animation: ${a} ${({id:c})=>2e3-c*200}ms ${({id:c})=>200*c}ms both;
        animation-play-state: ${e?"runnig":"paused"};
        `,f=M(tn)`
        width: ${c=>u(c.id)}px;
        height: ${c=>g(c.id)}px;
        animation: ${a} ${({id:c})=>2e3-c*200}ms ${({id:c})=>200*c}ms bots;
        animation-play-state: ${e?"runnig":"paused"};
        object-fit: cover;
        `,b=M.div`
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        display: flex;
        z-index: 50;
        position: absolute;
        align-items: center;
        justify-content: center;
        background-color: #e1e4e8;
        animation: ${l} 4600ms both;
        animation-play-state: ${e?"runnig":"paused"};
    `,x=se`
        0% {
            transform: scale(0);
        }
        1%{
        }
        50% {
            transform: scale(0.5);
        }
        65% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1.0);
    }
    `,$=M.div`
        height: 100%;
        width: 100%;
        background-image: url(${Vt});
        background-size: cover;
        animation: ${x} 1800ms 1000ms both;
        animation-play-state: ${e?"runnig":"paused"};
    `,d=se`
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    `,m=M.span`
        animation: ${d} 100ms 3000ms both;
        animation-play-state: ${e?"runnig":"paused"};
        animation-play-state: ${e?"runnig":"paused"};
        font-size: 12rem;
    `,N=se`
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    `,w=M.span`
        animation: ${N} 900ms ${({id:c})=>3200+c*250}ms both;
        animation-play-state: ${e?"runnig":"paused"};
        animation-play-state: ${e?"runnig":"paused"};
        font-size: 2.25rem;
        line-height: 2.5rem;
        text-align: center;
    `;return o.jsxs(b,{children:[e?o.jsx(o.Fragment,{}):o.jsxs("div",{className:"w-full absolute bg-[#e1e4e8] top-0 z-50 left-0 right-0 bottom-0 h-full flex items-center justify-center",children:[o.jsx("span",{className:"absolute text-xl",children:"Loading pigs..."}),o.jsx("div",{className:"w-[200px] h-[200px] border-[#646f77] border-dashed animate-spin rounded-full border-[2px]"})]}),e?o.jsxs("div",{className:"min-w-[100vw] z-20 relative h-[100vh]",children:[o.jsx("div",{className:"absolute z-10 w-full pl-4 py-4 h-full overflow-hidden",children:o.jsx($,{})}),o.jsxs("div",{className:"z-10 select-none justify-between text-white leading-[220px] relative flex flex-row items-center w-full h-full",children:[o.jsxs("div",{className:"flex pl-6 flex-col relative justify-between h-full",children:[o.jsx(m,{children:"E"}),o.jsx(w,{id:1,children:"Elvis"}),o.jsx(m,{children:"K"})]}),o.jsx("div",{className:"flex text-4xl px-6 flex-row justify-between",children:o.jsx(w,{id:2,className:"pr-6",children:"King"})}),o.jsxs("div",{className:"flex flex-col pr-6 justify-between h-full",children:[o.jsx("span",{className:"text-center",children:"‌"}),o.jsx(w,{id:3,children:"Pigsley"}),o.jsx(m,{children:"P"})]})]})]}):o.jsx(o.Fragment,{}),e?r.current.map((c,j)=>o.jsx(y,{id:j,children:o.jsx(f,{src:c,id:j},j)},j)):o.jsx(o.Fragment,{})]})}function en({className:e,id:t,children:r}){return o.jsx("div",{className:e,children:r})}function tn({className:e,id:t,src:r}){return o.jsx("img",{src:r,className:e})}function rn(){const[e,t]=E.useState(!1);function r(){t(!0)}return o.jsxs("div",{className:"h-full bg-[#e1e4e8] relative best-font overflow-y-hidden",children:[o.jsx(Vr,{setLoaded:r,loaded:e}),o.jsx(Zt,{loaded:e})]})}const nn=Xt(document.getElementById("root"));nn.render(o.jsx(rn,{}));
