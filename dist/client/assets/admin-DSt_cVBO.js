import{r as i,j as e,d as S}from"./client-BM5fYXQq.js";const P="_editor_input_upzeh_1",y={editor_input:P};function V(){const[t,d]=i.useState([]),[s,a]=i.useState(null),[n,l]=i.useState({name:"",price:"",priceGT:!1}),[c,u]=i.useState(null),[f,v]=i.useState(!1);i.useEffect(()=>{j()},[]),i.useEffect(()=>{w(n)},[n]);async function j(){let p=await(await fetch("/api/products")).json();d(p)}function m(o){l(o)}function w(o){let p=t.filter(r=>o.name==""||r.name.includes(o.name)).filter(r=>o.price==""||isNaN(Number(o.price))||o.priceGT&&r.price>=Number(o.price)||!o.priceGT&&r.price<=Number(o.price));if(t.length==p.length){a(null);return}a(p)}function h(o){if(o===""){v(!0),u(null);return}o==null&&(v(!1),u(null),j());let p=t.find(r=>r._id==o);p&&u({...p})}return e.jsxs("div",{className:"flex h-full relative pl-10 w-full",children:[e.jsx(_,{create:f,product:c,close:h}),e.jsxs("div",{className:"grid grid-cols-4 py-6 overflow-y-auto gap-14",children:[!s&&t.map((o,p)=>e.jsx(N,{data:o,change:h},p)),s&&s.map((o,p)=>e.jsx(N,{data:o,change:h},p))]}),e.jsxs("div",{className:"border-l-[1px] ml-auto gap-8 flex w-[30%] flex-col p-4 pt-8 text-lg border-gray-100",children:["Изменить или добавить продукт.",e.jsx("button",{onClick:()=>h(""),className:"rounded-md px-4 shadow-sm hover:shadow-md hover:bg-gray-50 bg-white py-2 border border-black",children:"Добавить"}),e.jsx(E,{count:s==null?void 0:s.length,setter:m})]})]})}function N({data:t,change:d,edit:s=!1}){var l;const[a,n]=i.useState(t);return i.useEffect(()=>{n(t)},[t]),e.jsxs("div",{className:"flex flex-col items-center gap-2 leading-4",children:[e.jsx("div",{style:{height:s?"305px":"230px"},className:"w-fit flex items-center overflow-hidden",children:e.jsx("img",{src:t.image,style:{width:s?"242px":"180px"},className:"",alt:""})}),e.jsx("span",{className:"font-bold text-[16px]",children:a.name}),e.jsx("span",{className:"text-[14px] whitespace-pre text-center",children:a.description.split("").reduce((c,u,f)=>f>0&&f%37==0?c+u+`
`:c+u,"")}),e.jsx("span",{className:"text-[14px] font-bold",children:((l=a.price.toString().match(/\d{1,3}(?=(\d{3})*$)/g))==null?void 0:l.join(" "))+" р."}),s?e.jsx(e.Fragment,{}):e.jsx("button",{onClick:()=>d(a._id),className:"rounded-md px-4 shadow-sm hover:shadow-md hover:bg-gray-50 bg-white py-2 border border-black",children:"Изменить"})]})}function _({product:t,close:d,create:s}){let a={name:"",category:"",price:0,description:"",image:"",_id:""};const[n,l]=i.useState(t||a),[c,u]=i.useState(null),[f,v]=i.useState(!1),[j,m]=i.useState("");if(i.useEffect(()=>{s&&l(a),!s&&t&&l(t)},[t]),t==null&&!s)return e.jsx(e.Fragment,{});function w(r,g){l(x=>(x[g]=r,x)),v(x=>!x)}async function h(r){r.preventDefault(),s?p():o()}async function o(){let r=new FormData;Object.keys(n).forEach(b=>r.append(b,String(n[b]))),r.append("files",c);let g=await fetch("/api/putProduct",{method:"POST",body:r}),x=await g.json();if(g.status!==200){m(JSON.stringify(x.message));return}m(x.message)}async function p(){let r=new FormData;Object.keys(n).forEach(b=>r.append(b,String(n[b]))),r.append("files",c);let g=await fetch("/api/postProduct",{method:"POST",body:r}),x=await g.json();if(g.status!==200){m(JSON.stringify(x.message));return}m(x.message)}return e.jsx("div",{onClick:()=>{d(null),m("")},className:"absolute shadow-2xl bg-black bg-opacity-20 left-0 right-0 top-0 bottom-0 flex justify-center items-center",children:e.jsxs("div",{onClick:r=>r.stopPropagation(),className:"bg-white flex flex-row rounded-3xl p-10 gap-12",children:[e.jsx(N,{edit:!0,data:n,change:d}),e.jsxs("form",{onSubmit:r=>h(r),className:"flex flex-col",children:[e.jsx("span",{children:"Название"}),e.jsx(C,{className:y.editor_input,value:n.name,setter:w,property:"name"}),e.jsx("span",{children:"Описание"}),e.jsx(C,{className:y.editor_input,value:n.description,setter:w,property:"description"}),e.jsx("span",{children:"Цена"}),e.jsx(C,{className:y.editor_input,value:n.price,setter:w,property:"price",num:!0}),e.jsx("span",{children:"Фото"}),e.jsx("input",{className:"mb-[14px]",accept:"image/png, image/jpeg",onChange:r=>u(r.target.files&&r.target.files[0]),type:"file"}),e.jsx("span",{children:"Категория"}),e.jsx("select",{className:y.editor_input,children:e.jsx("option",{value:n.category,children:n.category})}),j?e.jsx("span",{className:"mx-auto my-3 text-lg underline",children:j}):e.jsx(e.Fragment,{}),e.jsx("button",{className:"px-4 py-2 border-black shadow-sm hover:shadow-md hover:bg-gray-50 border w-fit h-fit mx-auto mt-[14px]",type:"submit",children:"Изменить"})]})]})})}function E({setter:t,count:d}){let s={name:"",price:"",priceGT:!1};const[a,n]=i.useState(s);return i.useEffect(()=>{t(a)},[a]),e.jsxs("div",{className:"flex flex-col gap-2 border-t-[1px] border-gray-200 pt-4",children:[e.jsx("span",{children:"Фильтр по названию"}),e.jsx("input",{value:a.name,onChange:l=>n(c=>({...c,name:l.target.value})),className:"border-[1px] pl-2 border-black",type:"text"}),e.jsxs("div",{className:"flex flex-row justify-between",children:[e.jsx("span",{children:"Фильтр по цене"}),e.jsxs("select",{value:Number(a.priceGT),onChange:l=>n(c=>({...c,priceGT:!!Number(l.target.value)})),children:[e.jsx("option",{value:0,children:"Меньше"}),e.jsx("option",{value:1,children:"Больше"})]})]}),e.jsx("input",{value:a.price,onChange:l=>n(c=>({...c,price:l.target.value})),className:"border-[1px] pl-2 border-black",type:"number"}),d?e.jsxs("span",{children:["Найдено по фильтру: ",d]}):e.jsx(e.Fragment,{}),e.jsx("button",{className:"rounded-md px-6 mt-4 w-fit mx-auto shadow-sm hover:shadow-md hover:bg-gray-50 bg-white py-1 border border-black",onClick:()=>n(s),children:"Сброс фильтра"})]})}function C({value:t,property:d,setter:s,num:a=!1,className:n=""}){const[l,c]=i.useState(t);return i.useEffect(()=>{c(t)},[t]),i.useEffect(()=>{s(l,d)},[l]),e.jsx("input",{className:n,value:l,onChange:u=>c(u.target.value),type:a?"number":"text"})}const G="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20id='meteor-icon-kit__regular-products'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%209C9.44771%209%209%209.44771%209%2010V21C9%2021.5523%209.44771%2022%2010%2022H21C21.5523%2022%2022%2021.5523%2022%2021V10C22%209.44771%2021.5523%209%2021%209H10ZM15%207V3C15%202.44772%2014.5523%202%2014%202H3C2.44772%202%202%202.44772%202%203V14C2%2014.5523%202.44772%2015%203%2015H7V10C7%208.34315%208.34315%207%2010%207H15ZM17%207H21C22.6569%207%2024%208.34315%2024%2010V21C24%2022.6569%2022.6569%2024%2021%2024H10C8.34315%2024%207%2022.6569%207%2021V17H3C1.34315%2017%200%2015.6569%200%2014V3C0%201.34315%201.34315%200%203%200H14C15.6569%200%2017%201.34315%2017%203V7Z'%20fill='%23000000'/%3e%3c/g%3e%3c/svg%3e",F="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.1992%2012C12.9606%2012%2015.1992%209.76142%2015.1992%207C15.1992%204.23858%2012.9606%202%2010.1992%202C7.43779%202%205.19922%204.23858%205.19922%207C5.19922%209.76142%207.43779%2012%2010.1992%2012Z'%20stroke='%23000000'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M1%2022C1.57038%2020.0332%202.74795%2018.2971%204.36438%2017.0399C5.98081%2015.7827%207.95335%2015.0687%2010%2015C14.12%2015%2017.63%2017.91%2019%2022'%20stroke='%23000000'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.8205%204.44006C18.5822%204.83059%2019.1986%205.45518%2019.579%206.22205C19.9594%206.98891%2020.0838%207.85753%2019.9338%208.70032C19.7838%209.5431%2019.3674%2010.3155%2018.7458%2010.9041C18.1243%2011.4926%2017.3302%2011.8662%2016.4805%2011.97'%20stroke='%23000000'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.3203%2014.5701C18.6543%2014.91%2019.8779%2015.5883%2020.8729%2016.5396C21.868%2017.4908%2022.6007%2018.6827%2023.0003%2020'%20stroke='%23000000'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";function T(){return e.jsx("div",{children:"123"})}function D(){const[t,d]=i.useState(0);function s(a){d(a)}return e.jsx("div",{className:"h-full w-full px-4",children:e.jsxs("div",{className:"h-full overflow-hidden flex",children:[e.jsxs("div",{className:"flex flex-col pl-4 py-8 gap-4 text-2xl",children:[e.jsx(k,{choosen:t,svg:G,setter:s,page:0,children:"Каталог"}),e.jsx(k,{choosen:t,svg:F,setter:s,page:1,children:"Пользователи"})]}),e.jsxs("div",{className:"border-l-[1px] border-gray-100 w-full flex",children:[t==0?e.jsx(V,{}):e.jsx(e.Fragment,{}),t==1?e.jsx(T,{}):e.jsx(e.Fragment,{})]})]})})}function k({svg:t,setter:d,page:s,choosen:a,children:n}){return e.jsx("div",{className:"flex mr-4",children:e.jsxs("div",{style:{background:a==s?"rgb(243 244 246)":""},onClick:()=>d(s),className:"flex w-full select-none cursor-pointer shadow-md hover:shadow-lg hover:bg-gray-50 flex-row px-6 py-2 gap-3 border-[1px] border-gray-100 rounded-lg",children:[e.jsx("span",{style:{textDecoration:a===s?"underline1":""},children:n}),e.jsx("img",{className:"max-w-[35px] aspect-square",src:t,alt:"0"})]})})}function M(){return e.jsx(D,{})}const H=S(document.getElementById("root"));H.render(e.jsx(M,{}));
