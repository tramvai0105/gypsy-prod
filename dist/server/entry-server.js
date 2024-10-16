var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from "react-router-dom/server.mjs";
import { Link, useNavigate, useLoaderData, useParams, useLocation, Outlet } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { makeAutoObservable } from "mobx";
import clsx from "clsx";
import { observer } from "mobx-react-lite";
function ErrorPage() {
  return /* @__PURE__ */ jsx("div", { className: "w-full h-[100vh] flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "w-fit gap-6 h-full flex flex-col items-center justify-center text-6xl", children: [
    "Not Found 404",
    /* @__PURE__ */ jsx(
      Link,
      {
        className: "text-4xl ml-auto border-[1px] bg-white border-black hover:bg-gray-100 shadow-md hover:shadow-lg hover:underline rounded-lg px-6 text-blue-400 py-2",
        to: "",
        children: "To main page"
      }
    )
  ] }) });
}
class Store {
  constructor() {
    __publicField(this, "id", "");
    __publicField(this, "username", "");
    __publicField(this, "token", false);
    __publicField(this, "favorites", []);
    makeAutoObservable(this);
    this.checkToken();
  }
  async checkToken() {
    console.log("http://89.223.122.165:5173");
    let res = await fetch(`${"http://89.223.122.165:5173"}/auth/checktoken`);
    let data = (await res.json()).message;
    if (!data) {
      this.username = "";
      this.id = "";
      return;
    }
    console.log(data);
    this.id = data.id;
    this.username = data.username;
    this.token = data;
  }
  // async checkFavorites() {
  //     let res = await fetch(`http://localhost:5173/api/favorites`);
  //     let data = await res.json();
  //     this.favorites = data;
  // }
  // saveToLocalStorage(){
  //     let products = [...this.products.entries()]
  //     window.localStorage.setItem("cart", JSON.stringify(products))
  // }
  // getFromLocalStorage(){
  //     let products = window.localStorage.getItem("cart");
  //     if(products){
  //         console.log(JSON.parse(products))
  //         this.products = new Map(JSON.parse(products))
  //     }
  // }
  // getProducts(){
  //     let arr : [string, CartProduct][] = []
  //     this.products.forEach((v, k)=>{
  //         arr.push([k, v])
  //     })
  //     return arr
  // }
  // addToCart(p: ProductInterface, hideAlert = false){
  //     let prodInCart = this.products.get(p._id);
  //     if(!hideAlert){
  //         this.cartAlert = `Товар ${p.name} добавлен в корзину`
  //     }
  //     if(prodInCart){
  //         prodInCart.count += 1;
  //         this.products.set(p._id, prodInCart)
  //     }else{
  //         this.products.set(p._id, {product : p, count: 1});
  //     }
  // }
  // setQuantity(p: ProductInterface, q: number){
  //     let prodInCart = this.products.get(p._id);
  //     if(prodInCart){
  //         if(q === 0){
  //             this.products.delete(p._id);
  //         }
  //         prodInCart.count = q;
  //         this.products.set(p._id, prodInCart)
  //     }else{
  //         this.products.set(p._id, {product : p, count: q});
  //     }
  // }
  // removeFromCart(p: ProductInterface){
  //     let prodInCart = this.products.get(p._id);
  //     if(prodInCart && prodInCart.count > 1){
  //         prodInCart.count -= 1;
  //         this.products.set(p._id, prodInCart)
  //     }else if(prodInCart){
  //         this.products.delete(p._id);
  //     }
  // }
}
const store = new Store();
const bodysvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20width='800px'%20height='800px'%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eionicons-v5-h%3c/title%3e%3ccircle%20cx='256'%20cy='56'%20r='56'/%3e%3cpath%20d='M437,128H75a27,27,0,0,0,0,54H176.88c6.91,0,15,3.09,19.58,15,5.35,13.83,2.73,40.54-.57,61.23l-4.32,24.45a.42.42,0,0,1-.12.35l-34.6,196.81A27.43,27.43,0,0,0,179,511.58a27.06,27.06,0,0,0,31.42-22.29l23.91-136.8S242,320,256,320c14.23,0,21.74,32.49,21.74,32.49l23.91,136.92a27.24,27.24,0,1,0,53.62-9.6L320.66,283a.45.45,0,0,0-.11-.35l-4.33-24.45c-3.3-20.69-5.92-47.4-.57-61.23,4.56-11.88,12.91-15,19.28-15H437a27,27,0,0,0,0-54Z'/%3e%3c/svg%3e";
const fistsvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;stroke:%23020202;stroke-miterlimit:10;stroke-width:1.91px;}%3c/style%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='M6.17,10.86h0A8.16,8.16,0,0,1,14.33,19h0'/%3e%3crect%20class='cls-1'%20x='17.73'%20y='2.48'%20width='4.77'%20height='7.64'%20rx='2.39'/%3e%3crect%20class='cls-1'%20x='12.95'%20y='1.52'%20width='4.77'%20height='8.59'%20rx='2.39'/%3e%3cpath%20class='cls-1'%20d='M11.56,9.89A2.37,2.37,0,0,0,13,7.73V3.91a2.39,2.39,0,1,0-4.77,0V6.19'/%3e%3cpath%20class='cls-1'%20d='M3.41,7.79V3.91a2.39,2.39,0,1,1,4.77,0V6.19'/%3e%3cpath%20class='cls-1'%20d='M6.27,23.48V21.57l-.75-.64c-2.57-2.58-4-5.12-4-8.77h0A6,6,0,0,1,3.25,7.94h0A6,6,0,0,1,7.47,6.19h2.2A2.33,2.33,0,0,1,12,8.52h0a2.33,2.33,0,0,1-2.33,2.34H6.17'/%3e%3cpath%20class='cls-1'%20d='M17.73,23.48V21.57l.75-.64c2.57-2.58,4-5.12,4-8.77h0V7.36'/%3e%3c/svg%3e";
const lipssvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ff00cd'%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20512.001%20512.001'%20xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath%20d='M427.888,138.647C381.67,90.118,304.993,87.861,256,133.587c-48.993-45.726-125.67-43.469-171.888,5.06L6.408,220.237%20h111.151c31.278,0,45.882-5.842,62.793-12.606c17.673-7.069,37.704-15.082,75.648-15.082s57.975,8.013,75.648,15.082%20c16.912,6.764,31.516,12.606,62.793,12.606h111.151L427.888,138.647z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20d='M318.796,239.765c-16.914-6.764-31.518-12.606-62.796-12.606s-45.882,5.842-62.793,12.606%20c-6.023,2.409-12.32,4.927-19.506,7.2c18.542,14.009,42.354,28.648,82.301,28.648c39.947,0,63.757-14.639,82.301-28.648%20C331.116,244.691,324.817,242.174,318.796,239.765z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20d='M388.673,254.847v0.001c-4.21,0-12.821,6.746-21.15,13.27c-21.405,16.767-53.755,42.106-111.522,42.106%20s-90.118-25.34-111.524-42.108c-8.329-6.523-16.94-13.27-21.15-13.27H0l0.478,0.923c107.251,207.351,403.795,207.351,511.046,0%20l0.477-0.923H388.673z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const arrow$1 = "/assets/arrowzhest-CKVR-Zus.gif";
function Navigator({ pagename, trail = [], nextpage }) {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row text-lg items-center gap-2 mb-2 select-none h-fit", children: [
    /* @__PURE__ */ jsx("button", { onClick: () => navigate("../" + "../".repeat(trail.length)), className: "hover:underline bg-gradient-to-t border-[#00CDFF] border-[2px] from-[#00a6cc] to-[#32d9ff] text-white to-90% rounded-full  px-4 py-2", children: "Главная" }),
    /* @__PURE__ */ jsx("img", { className: "w-[50px] rotate-180", src: arrow$1 }),
    trail.map(
      (t, i, l) => /* @__PURE__ */ jsxs("div", { className: "flex items-center flex-row gap-2", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => navigate("../" + "../".repeat(trail.length - i - 1), { relative: "path" }), className: "hover:underline text-white bg-white bg-gradient-to-t border-[#00CDFF] border-[2px] from-[#00a6cc] to-[#32d9ff] to-90% rounded-full px-4 py-2", children: t }),
        /* @__PURE__ */ jsx("img", { className: "w-[50px] rotate-180", src: arrow$1 })
      ] }, i)
    ),
    /* @__PURE__ */ jsx("span", { className: "underline bg-gradient-to-t border-[#00CDFF] border-[2px] from-[#00a6cc] to-[#32d9ff] text-white to-90% rounded-full  px-4 py-2", children: pagename }),
    nextpage ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("img", { className: "w-[50px] rotate-180", src: arrow$1 }),
      /* @__PURE__ */ jsx(Link, { className: "hover:underline text-white bg-white bg-gradient-to-t border-[#00CDFF] border-[2px] from-[#00a6cc] to-[#32d9ff] to-90% rounded-full px-4 py-2", to: nextpage.to, children: nextpage.name })
    ] }) : /* @__PURE__ */ jsx(Fragment, {})
  ] });
}
function _FavoritesPage() {
  const [persons, setPersons] = useState([]);
  useState(store.favorites);
  useNavigate();
  useEffect(() => {
    getPersons();
  }, [store.username]);
  async function getPersons() {
    if (!store.username) {
      return;
    }
    let res = await fetch(`../api/favoritesPersons/`);
    let body = await res.json();
    console.log(body);
    setPersons(body);
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex p-10 flex-col w-full h-[100vh]", children: [
    /* @__PURE__ */ jsx(Navigator, { pagename: "Избраное" }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col min-h-[100vh] bg-white bg-opacity-85 p-6 rounded-xl", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 rounded-xl w-full mt-2 ml-4", children: store.id ? persons.map((person) => /* @__PURE__ */ jsx(Advert$2, { check: getPersons, to: person._id, id: person._id, rating: person.rating, reviews: 0, lips: person.lips, fist: person.fist, body: person.body, name: person.name, priceSmall: person.smallPrice, priceBig: person.bigPrice, img: person.image }, person.name)) : /* @__PURE__ */ jsxs("span", { className: "bg-white text-center text-xl py-10 px-6 rounded-xl", children: [
      /* @__PURE__ */ jsx(Link, { className: "text-[#00CDFF] hover:underline", to: "/login", children: "Войдите" }),
      " чтобы увидеть избраное"
    ] }) }) })
  ] });
}
const FavoritesPage = observer(_FavoritesPage);
function Advert$2({ check, lips = 3, to = "", fist = 4, body = 2, name = "Андрей Семёнович", img, priceSmall = 350, priceBig = 1500, rating = 4.7, reviews = 15, id }) {
  const navigate = useNavigate();
  async function removeFavorite() {
    let res = await fetch(
      "/api/removeFavorite",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ person: id })
      }
    );
    let body2 = await res.json();
    console.log(body2);
    check();
  }
  return /* @__PURE__ */ jsxs("div", { onClick: () => navigate(`/person/${to}`), className: "px-6 group hover:bg-gradient-to-t hover:from-[#80e6ff] hover:to-white hover:to-80%  py-4 transition-shadow hover:shadow-lg shadow-black cursor-pointer advert-border-grad border-[3px] border-white rounded-sm flex h-fit flex-col text-lg text-[#261f1b] bg-white w-fit", children: [
    /* @__PURE__ */ jsx("div", { className: "w-[220px] h-[190px] overflow-hidden rounded-sm", children: /* @__PURE__ */ jsx("img", { className: "relative group-hover:scale-[1.15] transition-transform duration-500 object-cover rounded-sm", src: img }) }),
    /* @__PURE__ */ jsx("span", { className: "font-bold group-hover:underline text-[#00CDFF] my-1", children: name }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row-reverse justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center text-base text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsx("span", { children: "Рейтинг" }),
          /* @__PURE__ */ jsxs("span", { className: "text-[#ff00cd]", children: [
            rating,
            " *"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-[1px] bg-black opacity-30" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsx("span", { children: "Отзывов" }),
          /* @__PURE__ */ jsx("span", { children: reviews })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-[1px] bg-black opacity-30" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 text-base", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-1 items-center", children: [
          /* @__PURE__ */ jsx("img", { src: lipssvg, className: "w-[25px] mr-2" }),
          [...Array(5).fill(1).map((l, i) => i < lips ? 1 : 0).map(
            (l, i) => l ? /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#cdff00]" }, i) : /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#d3c4bd]" }, i)
          )]
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-1 items-center", children: [
          /* @__PURE__ */ jsx("img", { src: fistsvg, className: "w-[25px] mr-2" }),
          [...Array(5).fill(1).map((l, i) => i < fist ? 1 : 0).map(
            (l, i) => l ? /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#cdff00]" }, i) : /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#d3c4bd]" }, i)
          )]
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-1 items-center", children: [
          /* @__PURE__ */ jsx("img", { src: bodysvg, className: "w-[25px] mr-2" }),
          [...Array(5).fill(1).map((l, i) => i < body ? 1 : 0).map(
            (l, i) => l ? /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#cdff00]" }, i) : /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#d3c4bd]" }, i)
          )]
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center gap-3 font-bold mt-1 w-full relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-1 text-base w-full", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          "Час: ",
          /* @__PURE__ */ jsx("span", { className: "text-[#00CDFF] underline", children: priceSmall }),
          " р."
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          "8 часов: ",
          /* @__PURE__ */ jsx("span", { className: "text-[#00CDFF] underline", children: priceBig }),
          " р."
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: store.username ? (e) => {
            e.stopPropagation();
            removeFavorite();
          } : void 0,
          className: clsx({ "bg-white border-gray-300 text-gray-300": !store.username }, "bg-[#ff00cd] text-white px-8 py-2 border-[#ff00cd] border-[2px] hover:bg-[#ff00cd] hover:text-white hover:border-white rounded-lg w-fit"),
          children: "Убрать из ❤"
        }
      )
    ] })
  ] });
}
const login_bg = "_login_bg_1yf98_1";
const styles = {
  login_bg
};
function LoginPage() {
  const [authData, setAuthData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [tokenData, setTokenData] = useState(false);
  const inputClass = "border shadow-md border-black px-2 bg-white text-lg py-1";
  const [mode, setMode] = useState(
    0
    /* Login */
  );
  const [master, setMaster] = useState("");
  useEffect(() => {
    checkToken();
  }, []);
  async function checkToken() {
    let res = await fetch("/auth/checktoken");
    let data = await res.json();
    setTokenData(data.message);
  }
  function setModeLogin() {
    setMode(
      0
      /* Login */
    );
  }
  async function auth() {
    let res = await fetch(
      "/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authData)
      }
    );
    let data = await res.json();
    setMessage(data.message);
    checkToken();
  }
  async function getRights() {
    let res = await fetch(
      "/auth/getPriviliges",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: master })
      }
    );
    let data = await res.json();
    setMessage(data.message);
    checkToken();
  }
  async function cancel() {
    let res = await fetch(
      "/auth/cancel",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      }
    );
    let data = await res.json();
    setMessage(data.message);
    setTokenData(false);
  }
  return /* @__PURE__ */ jsx("div", { className: `${styles.login_bg} w-full h-[100vh] flex items-center justify-center`, children: mode == 0 ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col shadow-xl overflow-hidden rounded-2xl w-fit border-[1px] border-black justify-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex drop-shadow-lg items-center flex-row p-2 bg-gray-800 text-white", children: [
      /* @__PURE__ */ jsx("a", { className: "font-bold text-xl select-none px-2 rounded-md hover:bg-white hover:text-gray-800", href: "/", children: "< На главную" }),
      tokenData ? /* @__PURE__ */ jsxs("div", { className: "ml-auto flex flex-col rounded-tr-lg font-bold border-[1px] border-white p-2", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          "Имя: ",
          tokenData.username
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          "Права: ",
          tokenData.privileges ? "Привилегия" : "Обычные"
        ] })
      ] }) : /* @__PURE__ */ jsx("button", { onClick: () => setMode(
        1
        /* Registration */
      ), className: "ml-auto mr-4 text-xl font-bold px-2 rounded-md hover:bg-white hover:text-gray-800", children: "Регистрация" })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "flex text-lg flex-col bg-gray-50 px-20 pt-12 pb-10 gap-6", children: [
      /* @__PURE__ */ jsx("span", { className: "font-bold text-xl mx-auto px-10 select-none", children: "Авторизация" }),
      tokenData ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 items-center", children: [
        /* @__PURE__ */ jsx("span", { title: "тыгей но подругому", children: "Мастер пароль" }),
        /* @__PURE__ */ jsx("input", { value: master, onChange: (e) => setMaster(e.target.value), type: "password", className: "w-[100px] pl-2 border-black border-[1px]" }),
        /* @__PURE__ */ jsx("button", { onClick: () => getRights(), className: "border shadow-md hover:shadow-lg hover:bg-gray-50 border-black bg-white w-fit mt-4 px-3 py-2 mx-auto text-base", children: "Получить права" })
      ] }) : /* @__PURE__ */ jsx(Fragment, {}),
      tokenData ? /* @__PURE__ */ jsx(Fragment, {}) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("input", { value: authData.username, onChange: (e) => setAuthData((prev) => {
          return { ...prev, username: e.target.value };
        }), className: inputClass, type: "text", name: "username", placeholder: "Имя пользователя" }),
        /* @__PURE__ */ jsx("input", { value: authData.password, onChange: (e) => setAuthData((prev) => {
          return { ...prev, password: e.target.value };
        }), className: inputClass, type: "password", name: "password", placeholder: "Пароль" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row", children: [
        tokenData ? /* @__PURE__ */ jsx(Fragment, {}) : /* @__PURE__ */ jsx("button", { onClick: auth, className: "border shadow-md hover:shadow-lg hover:bg-gray-50 border-black bg-white w-fit mt-4 px-3 py-2 mx-auto", children: "Войти" }),
        tokenData ? /* @__PURE__ */ jsx("button", { onClick: cancel, className: "border shadow-md hover:shadow-lg hover:bg-gray-50 border-black bg-white w-fit mt-4 px-3 py-2 mx-auto", children: "Выйти" }) : /* @__PURE__ */ jsx(Fragment, {})
      ] }),
      message ? /* @__PURE__ */ jsx("span", { className: "mx-auto underline", children: message }) : /* @__PURE__ */ jsx(Fragment, {})
    ] })
  ] }) : /* @__PURE__ */ jsx(RegistrationMenu, { set: setModeLogin }) });
}
function RegistrationMenu({ set }) {
  const [authData, setAuthData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [checkPass, setCheckPass] = useState("");
  const [tokenData, setTokenData] = useState(false);
  const inputClass = "border shadow-md border-black px-2 bg-white text-lg py-1";
  useEffect(() => {
    checkToken();
  }, []);
  async function register() {
    if (authData.password !== checkPass) {
      setMessage("Пароли не совпадают");
    }
    let res = await fetch(
      "/auth/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authData)
      }
    );
    let data = await res.json();
    setMessage(data.message);
    checkToken();
  }
  async function checkToken() {
    let res = await fetch("/auth/checktoken");
    let data = await res.json();
    setTokenData(data.message);
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col shadow-xl overflow-hidden rounded-2xl w-fit border-[1px] border-black justify-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex drop-shadow-lg items-center flex-row p-2 bg-gray-800 text-white", children: [
      /* @__PURE__ */ jsx("a", { className: "font-bold text-xl select-none px-2 rounded-md hover:bg-white hover:text-gray-800", href: "/", children: "< На главную" }),
      /* @__PURE__ */ jsx("button", { onClick: () => set(), className: "ml-auto mr-14 text-xl font-bold px-2 rounded-md hover:bg-white hover:text-gray-800", children: "Вход" })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "flex text-lg flex-col bg-gray-50 px-20 pt-12 pb-10 gap-6", children: [
      /* @__PURE__ */ jsx("span", { className: "font-bold text-xl mx-auto select-none", children: "Регистрация" }),
      /* @__PURE__ */ jsx("input", { value: authData.username, onChange: (e) => setAuthData((prev) => {
        return { ...prev, username: e.target.value };
      }), className: inputClass, type: "text", name: "username", placeholder: "Имя пользователя" }),
      /* @__PURE__ */ jsx("input", { value: authData.password, onChange: (e) => setAuthData((prev) => {
        return { ...prev, password: e.target.value };
      }), className: inputClass, type: "password", name: "password", placeholder: "Пароль" }),
      /* @__PURE__ */ jsx("input", { value: checkPass, onChange: (e) => setCheckPass(e.target.value), className: inputClass }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-row", children: /* @__PURE__ */ jsx("button", { onClick: () => register(), className: "border shadow-md hover:shadow-lg hover:bg-gray-50 border-black bg-white w-fit mt-4 px-3 py-2 mx-auto", children: "Зарегистрироваться" }) }),
      message ? /* @__PURE__ */ jsx("span", { className: "mx-auto underline", children: message }) : /* @__PURE__ */ jsx(Fragment, {})
    ] })
  ] });
}
const ded$2 = "/assets/dedtest-CPxRoqZQ.jpg";
function Advert$1({ lips = 3, to = "", fist = 4, body = 2, name = "Андрей Семёнович", img = ded$2, priceSmall = 350, priceBig = 1500, rating = 4.7, reviews = 15, id = 0 }) {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs("div", { onClick: () => navigate(`/person/${to}`), className: "px-6 group py-4 transition-shadow hover:shadow-lg shadow-black hover:bg-gradient-to-t hover:from-[#80e6ff] hover:to-white hover:to-70% cursor-pointer advert-border-grad border-[3px] border-white rounded-sm flex h-fit flex-col text-lg text-[#261f1b] bg-white w-fit", children: [
    /* @__PURE__ */ jsx("div", { className: "w-[220px] h-[190px] overflow-hidden rounded-sm", children: /* @__PURE__ */ jsx("img", { className: "w-[220px] relative group-hover:scale-[1.15] transition-transform duration-500 h-[190px] object-cover rounded-sm", src: img }) }),
    /* @__PURE__ */ jsx("span", { className: "font-bold group-hover:underline text-[#00CDFF] my-1", children: name }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row-reverse justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center text-base text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsx("span", { children: "Рейтинг" }),
          /* @__PURE__ */ jsxs("span", { className: "text-[#ff00cd]", children: [
            rating,
            " *"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-[1px] bg-black opacity-30" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsx("span", { children: "Отзывов" }),
          /* @__PURE__ */ jsx("span", { children: reviews })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-[1px] bg-black opacity-30" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 text-base", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-1 items-center", children: [
          /* @__PURE__ */ jsx("img", { src: lipssvg, className: "w-[25px] mr-2" }),
          [...Array(5).fill(1).map((l, i) => i < lips ? 1 : 0).map(
            (l, i) => l ? /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#cdff00]" }, i) : /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#d3c4bd]" }, i)
          )]
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-1 items-center", children: [
          /* @__PURE__ */ jsx("img", { src: fistsvg, className: "w-[25px] mr-2" }),
          [...Array(5).fill(1).map((l, i) => i < fist ? 1 : 0).map(
            (l, i) => l ? /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#cdff00]" }, i) : /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#d3c4bd]" }, i)
          )]
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-1 items-center", children: [
          /* @__PURE__ */ jsx("img", { src: bodysvg, className: "w-[25px] mr-2" }),
          [...Array(5).fill(1).map((l, i) => i < body ? 1 : 0).map(
            (l, i) => l ? /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#cdff00]" }, i) : /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#d3c4bd]" }, i)
          )]
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center font-bold mt-1 w-full relative", children: [
      /* @__PURE__ */ jsx("button", { className: "group-hover:block hidden absolute bg-white w-full border-[1px] border-black py-[2px] hover:bg-[#80e6ff] hover:border-white hover:text-white", children: "В профиль" }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-1 text-base w-full", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          "Час: ",
          /* @__PURE__ */ jsx("span", { className: "text-[#00CDFF] underline", children: priceSmall }),
          " р."
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          "8 часов: ",
          /* @__PURE__ */ jsx("span", { className: "text-[#00CDFF] underline", children: priceBig }),
          " р."
        ] })
      ] })
    ] })
  ] });
}
const urod = "/assets/urod-CdIGfFJP.gif";
const cat = "/assets/cat-lol-D5V0roHk.gif";
const ded$1 = "/assets/dedbeg-C1MVBDeE.gif";
const info1 = "/assets/fblock1-Coy0TzgB.png";
const info2 = "/assets/fblock2-DjJJn5Jq.png";
const info3 = "/assets/fblock3-CtcCVJEj.png";
const arrow = "/assets/arrowpizdez-CVCel2FI.gif";
function MainBlock() {
  const maxFrames = 5;
  const [frame, setFrame] = useState(0);
  function set(id) {
    setFrame(id);
  }
  return /* @__PURE__ */ jsxs("div", { className: "bg-white flex min-h-[450px] max-h-[450px] flex-col gap-4 opacity-90 w-full py-14 px-6 rounded-xl", children: [
    frame == 0 ? /* @__PURE__ */ jsx("div", { className: "flex-row flex", children: /* @__PURE__ */ jsxs("div", { className: "flex text-[#4cdeff] relative gap-6 text-6xl font-semibold text flex-col", children: [
      /* @__PURE__ */ jsx("span", { children: "Новый" }),
      /* @__PURE__ */ jsx("span", { children: "Иновационный" }),
      /* @__PURE__ */ jsx("span", { children: "Подход к интернет знакомствам" }),
      /* @__PURE__ */ jsx("img", { className: "w-[170px] h-[150px] object-cover absolute right-8", src: urod })
    ] }) }) : /* @__PURE__ */ jsx(Fragment, {}),
    frame == 1 ? /* @__PURE__ */ jsx("div", { className: "flex-row flex w-full", children: /* @__PURE__ */ jsxs("div", { className: "flex text-[#4cdeff] relative gap-6 text-6xl w-full font-semibold text flex-col", children: [
      /* @__PURE__ */ jsx("span", { children: "Надоел Дв и Тиндер?" }),
      /* @__PURE__ */ jsx("span", { className: "text-4xl ml-2", children: "Очередной мэтч " }),
      /* @__PURE__ */ jsx("span", { className: "text-4xl ml-2", children: "приносит лишь головную боль?" }),
      /* @__PURE__ */ jsx("span", { className: "text-5xl mx-auto", children: "тогда...." }),
      /* @__PURE__ */ jsx("img", { className: "w-[250px] h-[250px] object-cover absolute right-14", src: cat })
    ] }) }) : /* @__PURE__ */ jsx(Fragment, {}),
    frame == 2 ? /* @__PURE__ */ jsx("div", { className: "flex-row flex", children: /* @__PURE__ */ jsxs("div", { className: "flex text-[#4cdeff] relative text-5xl font-semibold text flex-col", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-14 items-center", children: [
        /* @__PURE__ */ jsx("span", { children: "К вам уже спешат!" }),
        /* @__PURE__ */ jsx("img", { className: "w-[170px] h-[150px] object-cover", src: ded$1 })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-3xl mt-6 leading-10", children: "Специалисты нашего сервиса специально подготовлены для Вашего наилучшего времяпрепровождения. Каждый из них гарантировано принесёт вам наибольшее удовольствие и оставит наилучшие впечатления." })
    ] }) }) : /* @__PURE__ */ jsx(Fragment, {}),
    frame == 3 ? /* @__PURE__ */ jsx("div", { className: "flex-row flex", children: /* @__PURE__ */ jsxs("div", { className: "flex text-[#4cdeff] items-center relative gap-4 text-4xl font-semibold text flex-row justify-center w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center px-6 gap-4", children: [
        /* @__PURE__ */ jsx("span", { children: "Выбирай" }),
        /* @__PURE__ */ jsx("img", { className: "w-[180px] h-[260px] object-cover", src: info1 })
      ] }),
      /* @__PURE__ */ jsx("img", { className: "w-[70px] h-[150px]", src: arrow }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center px-6 gap-4", children: [
        /* @__PURE__ */ jsx("span", { children: "Заказывай" }),
        /* @__PURE__ */ jsx("img", { className: "w-[180px] h-[260px] object-cover", src: info2 })
      ] }),
      /* @__PURE__ */ jsx("img", { className: "w-[70px] h-[150px]", src: arrow }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center w-[200px] px-6 gap-4", children: [
        /* @__PURE__ */ jsx("span", { children: "Наслаждайся!" }),
        /* @__PURE__ */ jsx("img", { className: "w-[180px] h-[260px] object-cover", src: info3 })
      ] })
    ] }) }) : /* @__PURE__ */ jsx(Fragment, {}),
    frame == 4 ? /* @__PURE__ */ jsx("div", { className: "flex-row flex w-full", children: /* @__PURE__ */ jsxs("div", { className: "flex text-[#4cdeff] relative gap-6 w-full text-6xl font-semibold text flex-col", children: [
      /* @__PURE__ */ jsx("span", { children: "Остались вопросы?" }),
      /* @__PURE__ */ jsx("span", { children: "Есть предложения?" }),
      /* @__PURE__ */ jsx("span", { className: "italic mx-auto mt-2 underline", children: "Сосите" }),
      /* @__PURE__ */ jsx("img", { className: "w-[170px] h-[150px] object-cover absolute right-36 top-12", src: urod }),
      /* @__PURE__ */ jsx(Link, { to: "/about", className: "text-lg absolute right-0 -bottom-14 bg-[#4cdeff] text-white hover:text-[#4cdeff] hover:bg-white", children: "чуть больше о нас" })
    ] }) }) : /* @__PURE__ */ jsx(Fragment, {}),
    /* @__PURE__ */ jsx(Slider, { max: maxFrames, frame, set })
  ] });
}
function Slider({ max, frame, set }) {
  const interval = useRef(null);
  useState(false);
  const stop = useRef(false);
  function localSetter(id, click = false) {
    if (click && interval.current) {
      clearInterval(interval.current);
      stop.current = true;
    }
    set(id);
  }
  useEffect(() => {
    clearInterval(interval.current);
    interval.current = setInterval(() => {
      if (stop.current) {
        return;
      }
      if (frame == max - 1) {
        localSetter(0);
        return;
      }
      localSetter(frame + 1);
    }, 6e3);
  }, [frame]);
  return /* @__PURE__ */ jsx("div", { className: "ml-4 mt-auto flex flex-row gap-2", children: new Array(max).fill(0).map((v, i) => {
    if (frame != i)
      return /* @__PURE__ */ jsx("div", { onClick: () => localSetter(i, true), className: "py-3 cursor-pointer", children: /* @__PURE__ */ jsx("div", { className: "bg-purple-100 w-[30px] h-[4px] rounded-full" }) }, i);
    else
      return /* @__PURE__ */ jsx("div", { onClick: () => localSetter(i, true), className: "py-3 cursor-pointer", children: /* @__PURE__ */ jsx("div", { className: "bg-purple-300 w-[80px] cursor-pointer h-[4px] rounded-full" }) }, i);
  }) });
}
function MainPage() {
  const data = useLoaderData();
  const [persons, setPersons] = useState(data);
  const [fPersons, setFPersons] = useState([]);
  const [filter, setFilter] = useState("date");
  const [type, setType] = useState("");
  const [sortDir, setSortDir] = useState(false);
  const [textFilter, setTextFilter] = useState("");
  useEffect(() => {
    sort(filter);
  }, [persons, filter, type, sortDir, textFilter]);
  function sort(filter2) {
    let arr = [...persons];
    if (filter2 == "type") {
      arr = arr.filter((p) => p.category == type);
    }
    if (filter2 == "") {
      setFPersons(persons);
    }
    if (textFilter !== "") {
      arr = arr.filter((p) => p.name.toLowerCase().includes(textFilter.toLowerCase()));
    }
    setFPersons(arr);
  }
  useEffect(() => {
    getPersons();
  }, []);
  function clear() {
    setFilter("");
    setType("");
  }
  async function getPersons() {
    let data2 = await fetch(`${"http://89.223.122.165:5173"}/api/persons`);
    let products = await data2.json();
    setPersons(products);
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex p-5 flex-col gap-3 w-full h-fit min-h-[100vh]", children: [
    /* @__PURE__ */ jsx(MainBlock, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center flex-row gap-3 rounded-xl w-full bg-white bg-opacity-85 p-6", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => clear(), className: "p-2 border-[#4CD1F0] border-[1px] rounded-lg hover:bg-white bg-opacity-85", children: "Сброс" }),
      /* @__PURE__ */ jsx("button", { className: clsx({ "bg-yellow-300 text-white hover:text-yellow-400": type == "grand" }, "p-2 border-[#4CD1F0] border-[1px] rounded-xl hover:bg-white bg-opacity-85"), onClick: () => {
        setType("grand");
        setFilter("type");
      }, children: "Только деды" }),
      /* @__PURE__ */ jsx("button", { className: clsx({ "bg-yellow-300 text-white hover:text-yellow-400": type == "gypsy" }, "p-2 border-[#4CD1F0] border-[1px] rounded-xl hover:bg-white bg-opacity-85"), onClick: () => {
        setType("gypsy");
        setFilter("type");
      }, children: "Только цыгане" }),
      /* @__PURE__ */ jsx("button", { className: clsx({ "bg-yellow-300 text-white hover:text-yellow-400": type == "tadj" }, "p-2 border-[#4CD1F0] border-[1px] rounded-xl hover:bg-white bg-opacity-85"), onClick: () => {
        setType("tadj");
        setFilter("type");
      }, children: "Только таджички" }),
      /* @__PURE__ */ jsx("span", { className: "ml-4", children: "Поиск" }),
      /* @__PURE__ */ jsx("input", { value: textFilter, onChange: (e) => setTextFilter(e.target.value), className: "rounded-xl h-[40px]" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid min-h-[440px] gap-y-10 grid-cols-3 rounded-xl w-full bg-white bg-opacity-85 p-6", children: fPersons.map((person) => /* @__PURE__ */ jsx(Advert$1, { to: person._id, id: 0, rating: person.rating, reviews: person.reviews.length, lips: person.lips, fist: person.fist, body: person.body, name: person.name, priceSmall: person.smallPrice, priceBig: person.bigPrice, img: person.image }, person.name)) })
  ] });
}
const stvol = "/assets/chlen-D4aUYlDE.png";
const stvolmid = "/assets/chlenmid-BgEstgva.png";
const balls = "/assets/balls-Cj8V_QMm.png";
const head = "/assets/head-BOVRWGqG.png";
const ruka = "/assets/ruka-CbW6AJau.png";
let pronouns$2 = {
  grand: "Дедушка",
  tadj: "Таджичка",
  gypsy: "Цыган"
};
function _OrderPage() {
  let months = [
    { name: "Январь", days: 31 },
    { name: "Февраль", days: 28 },
    { name: "Март", days: 31 },
    { name: "Апрель", days: 30 },
    { name: "Май", days: 31 },
    { name: "Июнь", days: 30 },
    { name: "Июль", days: 31 },
    { name: "Август", days: 31 },
    { name: "Сентябрь", days: 30 },
    { name: "Октябрь", days: 31 },
    { name: "Ноябрь", days: 30 },
    { name: "Декабрь", days: 31 }
  ];
  const _blankData = {
    hours: 1,
    details: "",
    address: "",
    orderDate: 0,
    person: ""
  };
  const params = useParams();
  const [person, setPerson] = useState({});
  const [data, setData] = useState(_blankData);
  const [showCalendar, setShowCalender] = useState(false);
  const [orderTime, setOrderTime] = useState(0);
  const [time, setTime] = useState({ y: 0, m: 0, d: 0 });
  const [message, setMessage] = useState("");
  const localData = useRef(true);
  useEffect(() => {
    getPerson();
  }, []);
  useEffect(() => {
    let d = window.localStorage.getItem(`order/${person._id}`, JSON.stringify(data));
    if (d) {
      setData(JSON.parse(d));
      localData.current = false;
    }
  }, [person]);
  useEffect(() => {
    if (!localData.current) {
      window.localStorage.setItem(`order/${person._id}`, JSON.stringify(data));
    }
  }, [data]);
  function showDateChooser() {
    setShowCalender((prev) => !prev);
  }
  function setOrderDate(y, m, d) {
    let date = new Date(y, m, d);
    setTime({ y: 2024, m, d });
    setOrderTime(date.getTime());
  }
  async function getPerson() {
    let res = await fetch(`../../api/person/${params.id}`);
    let body = await res.json();
    setPerson(body);
  }
  async function makeOrder() {
    data.orderDate = orderTime;
    data.person = person._id;
    data.hours = Math.floor(data.hours);
    console.log(data.hours);
    let res = await fetch(
      "/api/makeOrder",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }
    );
    let resData = await res.json();
    setMessage(resData.message);
    store.checkToken();
  }
  function setHours(h) {
    setData((prev) => {
      return { ...prev, hours: h };
    });
  }
  return /* @__PURE__ */ jsx("div", { onClick: () => {
    setShowCalender(false);
  }, className: "min-h-[155vh] w-full h-fit flex pt-10 px-10", children: /* @__PURE__ */ jsx("div", { className: "order-bg w-full", children: /* @__PURE__ */ jsxs("div", { className: "flex rounded-t-xl backdrop-blur-sm flex-col w-full px-6 pt-6 pb-20 h-full min-h-[155vh]", children: [
    /* @__PURE__ */ jsx(Navigator, { pagename: "Оформление заказа", trail: person ? [person.name] : ["назад"] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-row pr-14 mt-2 gap-4 w-full", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "items-center bg-white bg-opacity-85 flex flex-row rounded-lg border-[1px] w-full gap-10 py-2 px-6 border-[#00CDFF]", children: [
        /* @__PURE__ */ jsx("img", { src: `/${person.image}`, className: "w-[200px] max-h-[150px] object-cover rounded-md" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 bg-gradient-to-t from-[#00a6cc] to-[#32d9ff] to-90% rounded-md h-full justify-center", children: [
          /* @__PURE__ */ jsx("span", { className: "px-4 py-2 text-white text-center text-xl font-bold", children: person.name }),
          /* @__PURE__ */ jsxs("span", { className: "px-4 py-2 text-white text-center text-lg font-medium", children: [
            pronouns$2[person.category],
            " - возраст: ",
            person.age
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col pl-2 gap-2 text-base", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-1 items-center", children: [
            /* @__PURE__ */ jsx("img", { src: lipssvg, className: "w-[25px] mr-2" }),
            [...Array(5).fill(1).map((l, i) => i < person.lips ? 1 : 0).map(
              (l, i) => l ? /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#cdff00]" }, i) : /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#d3c4bd]" }, i)
            )]
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-1 items-center", children: [
            /* @__PURE__ */ jsx("img", { src: fistsvg, className: "w-[25px] mr-2" }),
            [...Array(5).fill(1).map((l, i) => i < person.fist ? 1 : 0).map(
              (l, i) => l ? /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#cdff00]" }, i) : /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#d3c4bd]" }, i)
            )]
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-1 items-center", children: [
            /* @__PURE__ */ jsx("img", { src: bodysvg, className: "w-[25px] mr-2" }),
            [...Array(5).fill(1).map((l, i) => i < person.body ? 1 : 0).map(
              (l, i) => l ? /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#cdff00]" }, i) : /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#d3c4bd]" }, i)
            )]
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-4 bg-white bg-opacity-85 pb-8 px-6 border-black border-opacity-50 rounded-lg border-[1px] flex flex-col", children: [
        /* @__PURE__ */ jsx("h1", { className: "mb-4 text-xl from-gray-200 to-white bg-gradient-to-t px-4 py-2 rounded-full text-center border-t-[2px] border-gray-300", children: "Подробности заказа" }),
        /* @__PURE__ */ jsx("span", { className: "border-t-1[1px] border-[#00CDFF] text-lg mt-1 from-gray-200 to-white bg-gradient-to-t px-4 py-1 rounded-full w-fit", children: "Количество часов:" }),
        /* @__PURE__ */ jsx(HourPicker, { _hour: data.hours, set: setHours }),
        /* @__PURE__ */ jsx("span", { className: "border-t-1[1px] border-[#00CDFF] text-lg my-2 from-gray-200 to-white bg-gradient-to-t px-4 py-1 rounded-full w-fit", children: "Адресс:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            placeholder: "Именно тут всё и произойдет...",
            className: "border-[1px] border-black py-1 border-opacity-50 pl-2 w-[90%]",
            value: data.address,
            onChange: (e) => setData((prev) => {
              return { ...prev, address: e.target.value };
            })
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "border-t-1[1px] border-[#00CDFF] text-lg my-2 from-gray-200 to-white bg-gradient-to-t px-4 py-1 rounded-full w-fit", children: "Дата:" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-6 text-lg", children: [
          /* @__PURE__ */ jsx(Calendar, { setDate: setOrderDate, show: showCalendar, setShow: showDateChooser }),
          /* @__PURE__ */ jsxs("span", { className: "border-yellow-400 border-b-[2px] px-2", children: [
            "День: ",
            time.d,
            ", Месяц: ",
            months[time.m].name,
            ", Год: ",
            time.y,
            " "
          ] })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "border-t-1[1px] border-[#00CDFF] text-lg my-2 from-gray-200 to-white bg-gradient-to-t px-4 py-1 rounded-full w-fit", children: "Детали:" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            placeholder: "Всё о чём вы только мечтаете...",
            className: "border-[1px] border-black border-opacity-50 pl-2 w-[90%] h-28 resize-none pt-1",
            value: data.details,
            onChange: (e) => setData((prev) => {
              return { ...prev, details: e.target.value };
            })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full bg-white px-8 bg-opacity-85 flex flex-row py-8 text-xl justify-end gap-6 rounded-lg items-center border-[1px] border-[#ff00cd]", children: [
        /* @__PURE__ */ jsx("span", { className: "mr-auto", children: message }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 border-b-[1px] border-black px-6 py-2", children: [
          /* @__PURE__ */ jsx("span", { children: "Сумма" }),
          /* @__PURE__ */ jsx("span", { children: person.smallPrice ? Math.floor(data.hours) === 8 ? !person.bigPrice ? person.smallPrice * 8 * 0.9 : person.bigPrice : Math.floor(data.hours) * person.smallPrice : 0 })
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: makeOrder, className: "px-6 py-2 rounded-xl bg-gradient-to-t text-white from-[#e500b7] to-[#ff56dd]", children: "Заказать" }),
        /* @__PURE__ */ jsx("span", {})
      ] })
    ] }) })
  ] }) }) });
}
function HourPicker({ set: set2, _hour }) {
  const hours = 7;
  const [hour, setHour] = useState(_hour);
  const canMove = useRef(false);
  const hourSetted = useRef(false);
  useEffect(() => {
    if (hourSetted.current) {
      set2(hour + 1);
    }
  }, [hour]);
  useEffect(() => {
    setHour(_hour - 1);
    hourSetted.current = true;
  }, [_hour]);
  function placeHand(e) {
    let div = e.currentTarget;
    let rect = div.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let hours2 = x / 400 * 7;
    if (hours2 > 7) {
      setHour(7);
      return;
    }
    if (hours2 < 0) {
      setHour(0);
      return;
    }
    setHour(hours2);
  }
  function startDrag() {
    canMove.current = true;
  }
  function stopDrag() {
    canMove.current = false;
  }
  function moveHand(e) {
    if (canMove.current) {
      let div = e.currentTarget;
      let rect = div.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let hours2 = x / 400 * 7;
      if (hours2 > 7) {
        setHour(7);
        return;
      }
      if (hours2 < 0) {
        setHour(0);
        return;
      }
      setHour(hours2);
    }
  }
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex select-none flex-col relative h-[50px] mb-20 mt-3", children: [
    /* @__PURE__ */ jsxs("span", { className: "mb-2 mx-auto text-xl py-2 px-4 bg-gradient-to-t rounded-3xl text-white from-[#e500b7] to-[#ff56dd] to-90%", children: [
      "Выбрано ",
      Math.floor(hour + 1),
      " часов"
    ] }),
    /* @__PURE__ */ jsxs("div", { onMouseMove: (e) => moveHand(e), onMouseDown: () => startDrag(), onMouseUp: () => stopDrag(), onClick: (e) => placeHand(e), className: "flex flex-row", children: [
      /* @__PURE__ */ jsx("img", { src: head, draggable: "false", className: "h-[30px] w-[25px] relative -translate-y-[2px]" }),
      /* @__PURE__ */ jsx("img", { src: stvol, draggable: "false", className: "h-[30px] w-[100px] relative" }),
      /* @__PURE__ */ jsx("img", { src: stvolmid, draggable: "false", className: "h-[30px] w-[100px] relative" }),
      /* @__PURE__ */ jsx("img", { src: stvolmid, draggable: "false", className: "h-[30px] w-[100px] relative" }),
      /* @__PURE__ */ jsx("img", { src: stvolmid, draggable: "false", className: "h-[30px] w-[100px] relative" }),
      /* @__PURE__ */ jsx("img", { src: balls, draggable: "false", className: "h-[52px] w-[50px] relative -translate-y-[2px]" }),
      /* @__PURE__ */ jsx("div", { style: { left: hour / hours * 400 - 33.5 }, className: "absolute", children: /* @__PURE__ */ jsx("img", { draggable: "false", width: 65, height: 65, className: "min-w-[65px] select-none pointer-events-none min-h-[65px] -translate-y-2", src: ruka }) })
    ] })
  ] }) });
}
function Calendar({ show, setShow, setDate }) {
  let months = [
    { name: "Январь", days: 31 },
    { name: "Февраль", days: 28 },
    { name: "Март", days: 31 },
    { name: "Апрель", days: 30 },
    { name: "Май", days: 31 },
    { name: "Июнь", days: 30 },
    { name: "Июль", days: 31 },
    { name: "Август", days: 31 },
    { name: "Сентябрь", days: 30 },
    { name: "Октябрь", days: 31 },
    { name: "Ноябрь", days: 30 },
    { name: "Декабрь", days: 31 }
  ];
  const currentDate = useRef(/* @__PURE__ */ new Date());
  const [year, setYear] = useState(currentDate.current.getFullYear());
  const [month, setMonth] = useState(currentDate.current.getMonth());
  const [day, setDay] = useState(currentDate.current.getDate() + 1);
  const [showMoutns, setShowMonts] = useState(false);
  useEffect(() => {
    setDate(year, month, day);
  }, [day, year, month]);
  useEffect(() => {
    if (day == 29 && year % 4 != 0) {
      setDay(1);
    }
  }, [month, year]);
  return /* @__PURE__ */ jsxs("div", { onClick: (e) => e.stopPropagation(), className: "relative", children: [
    /* @__PURE__ */ jsx("button", { onClick: () => setShow(), className: "text-lg px-4 py-1 my-2 hover:bg-yellow-400 hover:text-white border-yellow-300 border-[1px] bg-white rounded-md", children: "Выбрать дату..." }),
    show ? /* @__PURE__ */ jsx("div", { className: "absolute flex flex-col -top-0 ml-44 bg-yellow-400 bg-opacity-50 w-fit h-fit", children: /* @__PURE__ */ jsxs("div", { onClick: () => {
      setShowMonts(false);
    }, className: "w-[310px] border-yellow-400 border-[2px] select-none h-[310px] flex flex-col items-center gap-3 p-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { onClick: () => setYear((prev) => prev - 1), className: "py-1 bg-white cursor-pointer text-xl px-2 rounded-l-full", children: "<" }),
        /* @__PURE__ */ jsx("span", { className: "bg-white relative text-xl h-fit px-6 py-1", children: year }),
        /* @__PURE__ */ jsx("span", { onClick: () => setYear((prev) => prev + 1), className: "py-1 bg-white text-xl px-2 rounded-r-full cursor-pointer", children: ">" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row relative cursor-pointer", children: [
        /* @__PURE__ */ jsx("div", { onClick: (e) => {
          e.stopPropagation();
          setShowMonts(true);
        }, className: "bg-white relative text-xl h-[40px] px-6 py-1", children: months[month].name }),
        /* @__PURE__ */ jsx("div", { onClick: (e) => {
          e.stopPropagation();
          setShowMonts(true);
        }, className: "bg-white w-[40px] text-3xl flex justify-center items-center relative rotate-90", children: "..." }),
        showMoutns ? /* @__PURE__ */ jsx("div", { className: "absolute right-0 rounded-t-lg border-yellow-500 border-[2px] \r\n                        pb-1 w-full h-fit pt-4 px-2 gap-1 cursor-default -top-24 flex flex-col bg-white", children: months.map((m, i) => {
          return /* @__PURE__ */ jsx("div", { onClick: (e) => {
            e.stopPropagation();
            if (i < currentDate.current.getMonth()) {
              return;
            }
            setMonth(i);
            setShowMonts(false);
          }, className: clsx(
            "hover:bg-yellow-400 px-2",
            { "from-gray-300 to-gray-200 to-60% bg-gradient-to-r": i < currentDate.current.getMonth() },
            { "cursor-pointer hover:underline hover:text-white ": i >= currentDate.current.getMonth() }
          ), children: m.name }, i);
        }) }) : /* @__PURE__ */ jsx(Fragment, {})
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-1 text-lg border-[1px] border-white pt-2 pb-1 px-3 rounded-xl", children: [
        new Array(months[month].days).fill(1).map(
          (d, i) => /* @__PURE__ */ jsx("div", { onClick: () => {
            if (i + 1 <= currentDate.current.getDate() && !(currentDate.current.getMonth() < month)) {
              return;
            }
            setDay(i + 1);
          }, className: clsx(
            { "from-gray-300 to-gray-200 to-20% bg-gradient-to-t": i + 1 <= currentDate.current.getDate() && !(currentDate.current.getMonth() < month) },
            { "bg-white cursor-pointer hover:from-[#00CDFF] hover:to-white to-60% bg-gradient-to-t": (i + 1 > currentDate.current.getDate() || currentDate.current.getMonth() < month) && i + 1 != day },
            { "rounded-bl-md": i + 1 == 29 },
            { "rounded-tl-md": i + 1 == 1 },
            { "rounded-tr-md": i + 1 == 7 },
            { "bg-yellow-400 text-white": i + 1 == day },
            { "cursor-pointer": i + 1 > currentDate.current.getDate() },
            "w-[32px] h-[32px] flex items-center justify-center"
          ), children: i + 1 }, i)
        ),
        year % 4 == 0 && month == 1 ? /* @__PURE__ */ jsx("div", { onClick: () => setDay(29), className: clsx({ "bg-yellow-400 text-white": 29 == day }, "w-[32px] h-[32px] cursor-pointer bg-white rounded-full flex items-center justify-center"), children: "29" }) : /* @__PURE__ */ jsx(Fragment, {})
      ] })
    ] }) }) : /* @__PURE__ */ jsx(Fragment, {})
  ] });
}
const OrderPage = observer(_OrderPage);
const status$1 = {
  "new": "Заявка создана",
  "current": "В процессе",
  "finished": "Завершен",
  "declined": "Отменён"
};
function _Orders() {
  const [orders, setOrders] = useState([]);
  const [persons, setPersons] = useState([]);
  const [token, setToken] = useState({ id: "" });
  const [personOrders, setPersonOrders] = useState([]);
  useEffect(() => {
    getOrders();
  }, [store.id]);
  async function getOrders() {
    if (!store.id) {
      let res = await fetch("auth/checktoken");
      let data = (await res.json()).message;
      if (!data) {
        setToken(data);
      }
      data.id;
    }
    let ordersRes = await fetch(`api/ordersByUser/${store.id || token.id}`);
    let ordersData = await ordersRes.json();
    let persons2 = ordersData.map((o) => o.person);
    console.log(ordersData);
    let body = { persons: [] };
    body.persons = persons2;
    let personsRes = await fetch(`api/persons`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    let personsData = await personsRes.json();
    let personOrders2 = ordersData.map((o) => {
      return { ...o, person: personsData.filter((p) => p._id == o.person)[0] ? personsData.filter((p) => p._id == o.person)[0] : null };
    });
    setOrders(ordersData);
    setPersons(personsData);
    personOrders2 = personOrders2.sort((a, b) => -a.creatDate + b.creatDate);
    setPersonOrders(personOrders2);
  }
  return /* @__PURE__ */ jsx("div", { className: "w-full min-h-[100vh] h-fit pt-4 px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex rounded-t-xl flex-col px-6 pt-6 pb-20 gap-4 w-full h-fit min-h-full", children: [
    /* @__PURE__ */ jsx(Navigator, { pagename: "Заказы" }),
    token && personOrders.length == 0 ? /* @__PURE__ */ jsxs("span", { className: "bg-white text-center text-xl py-10 px-6 rounded-xl", children: [
      /* @__PURE__ */ jsx(Link, { className: "text-[#00CDFF] hover:underline", to: "/", children: "Выбирайте" }),
      " скорее"
    ] }) : /* @__PURE__ */ jsx(Fragment, {}),
    token ? personOrders.map((o) => /* @__PURE__ */ jsx(PersonOrder, { get: getOrders, order: o })) : /* @__PURE__ */ jsxs("span", { className: "bg-white text-center text-xl py-10 px-6 rounded-xl", children: [
      /* @__PURE__ */ jsx(Link, { className: "text-[#00CDFF] hover:underline", to: "/login", children: "Войдите" }),
      " чтобы увидеть заказы"
    ] })
  ] }) });
}
const Orders = observer(_Orders);
function PersonOrder({ order, get }) {
  let person = order.person;
  const [reviewForm, setReviewForm] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(3);
  const [msg, setMsg] = useState("");
  async function sendReview() {
    let body = {
      person: person._id,
      order: order._id,
      text: reviewText,
      rating: Number(rating)
    };
    let res = await fetch(
      "/api/makeReview",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    );
    let { message } = await res.json();
    setMsg(message);
    get();
  }
  return /* @__PURE__ */ jsx(Fragment, { children: order.person ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col bg-opacity-85 bg-white rounded-xl items-center pb-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full flex items-center flex-row h-fit px-3 pb-4 py-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-14 items-center", children: [
          /* @__PURE__ */ jsx(Link, { to: `/person/${person._id}`, className: "text-lg bg-gradient-to-t from-[#00a6cc] to-[#32d9ff] to-90% w-fit px-6 py-1 rounded-full text-white", children: person.name }),
          /* @__PURE__ */ jsxs("span", { className: "text-lg px-6 py-2 bg-white border-[#ff00cd] border-[2px] ml-auto rounded-full", children: [
            "Статус ",
            /* @__PURE__ */ jsx("span", { className: "underline text-[#ff00cd]", children: status$1[order.status] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between gap-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col ml-10", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[#ff00cd] ml-1 text-lg", children: "Рейтинг" }),
            /* @__PURE__ */ jsxs("div", { className: "text-[#ff00cd] ml-2 border-[#ff00cd] border-[1px] overflow-hidden rounded-xl text-2xl w-[60px] h-[60px] relative items-center justify-center flex", children: [
              /* @__PURE__ */ jsx("div", { style: { height: 12 * person.rating - 1 }, className: "to-[#80e6ff] from-[#00CDFF] to-60% bg-gradient-to-t bottom-0 w-[60px] absolute" }),
              /* @__PURE__ */ jsxs("span", { className: "absolute z-10", children: [
                Math.ceil(person.rating),
                "☆"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-x-10 gap-y-4 w-full mt-4 justify-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex gap-4 ml-8 border-b-[1px] border-[#00CDFF] flex-row px-4 h-fit text-lg", children: [
                /* @__PURE__ */ jsx("span", { children: "Дата" }),
                /* @__PURE__ */ jsx("span", { children: new Date(order.orderDate).toLocaleDateString() })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-4 ml-8 border-b-[1px] border-[#00CDFF] flex-row px-4 h-fit text-lg", children: [
                /* @__PURE__ */ jsx("span", { children: "Часы" }),
                /* @__PURE__ */ jsx("span", { children: order.hours })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex w-fit gap-4 ml-8 border-b-[1px] border-[#00CDFF] flex-row px-4 h-fit text-lg", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xl", children: "Адресс" }),
              /* @__PURE__ */ jsxs("span", { title: order.address, children: [
                order.address.substring(0, 30),
                order.address.length > 30 ? "..." : ""
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex w-fit gap-4 ml-8 border-b-[1px] border-[#00CDFF] flex-row px-4 h-fit text-lg", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xl", children: "Номер" }),
              /* @__PURE__ */ jsx("span", { title: order._id, children: order._id })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center", children: [
              order.status == "finished" && !order.review ? /* @__PURE__ */ jsx("button", { onClick: () => setReviewForm((p) => !p), className: "bg-[#67e680] px-6 py-1 rounded-full text-white border-green-200 border-[2px] hover:text-green-700 hover:bg-green-200 hover:border-green-700", children: "Оставить отзыв" }) : /* @__PURE__ */ jsx(Fragment, {}),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-4 ml-auto px-6 rounded-full py-2 mr-8 w-fit border-[2px] border-[#00CDFF] bg-white flex-row h-fit text-lg", children: [
                /* @__PURE__ */ jsx("span", { children: "Сумма" }),
                /* @__PURE__ */ jsx("span", { className: "underline text-[#00CDFF]", children: order.total })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("img", { className: "h-[150px] w-[150px] object-cover rounded-full ml-auto pl-2 mr-24", src: person.image })
    ] }),
    reviewForm && order.status == "finished" && !order.review ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2 mt-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-5", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-green-700 text-lg", children: "Отзыв" }),
        /* @__PURE__ */ jsx("button", { onClick: () => sendReview(), className: "bg-[#67e680] px-4 py-1 rounded-full text-white border-green-200 border-[2px] hover:text-green-700 hover:bg-green-200 hover:border-green-700", children: "Отправить" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-lg text-green-800 mr-4", children: "Рейтинг" }),
        new Array(5).fill(0).map((t, i) => /* @__PURE__ */ jsx("span", { onClick: () => setRating(i + 1), className: "text-xl text-[#ff00cd] cursor-pointer select-none", children: i + 1 <= rating ? "★" : "☆" }))
      ] }),
      msg ? /* @__PURE__ */ jsxs("span", { children: [
        msg,
        /* @__PURE__ */ jsx("button", { onClick: () => setMsg(""), className: "ml-4 text-xl text-red-500", children: "x" })
      ] }) : /* @__PURE__ */ jsx(Fragment, {}),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          value: reviewText,
          onChange: (e) => setReviewText(e.target.value),
          className: "h-[170px] p-1 w-[400px] border-green-700 bg-white resize-none border-[2px] rounded-md"
        }
      )
    ] }) : /* @__PURE__ */ jsx(Fragment, {})
  ] }) : /* @__PURE__ */ jsx(Fragment, {}) });
}
const status = {
  "new": "Ожидает подтверждения",
  "current": "В процессе",
  "finished": "Завершен",
  "declined": "Отменён"
};
function _RequestOrders() {
  const [token, setToken] = useState({ id: "" });
  const [requests, setRequests] = useState([]);
  const [fRequests, setFRequests] = useState([]);
  const [filter, setFilter] = useState("status");
  const [sortDir, setSortDir] = useState(true);
  const [textFilter, setTextFilter] = useState("");
  useEffect(() => {
    getOrders();
  }, [store.id]);
  useEffect(() => {
    sort(filter);
  }, [requests, filter, sortDir, textFilter]);
  let sts = {
    "new": 1,
    "current": 2,
    "declined": 3,
    "finished": 4
  };
  function sort(filter2) {
    let char = sortDir ? 1 : -1;
    let arr = [...requests];
    if (filter2 == "date") {
      arr = arr.sort((a, b) => a.orderDate * char - b.orderDate * char);
    }
    if (filter2 == "status") {
      arr = arr.sort((a, b) => sts[a.status] * char - sts[b.status] * char);
    }
    if (filter2 == "") {
      setFRequests(requests);
    }
    if (textFilter !== "") {
      arr = arr.filter((r) => {
        var _a, _b;
        return ((_a = r.user) == null ? void 0 : _a.username.toLowerCase().includes(textFilter.toLowerCase())) || ((_b = r.person) == null ? void 0 : _b.name.toLowerCase().includes(textFilter.toLowerCase()));
      });
    }
    setFRequests(arr);
  }
  async function getOrders() {
    if (!store.id) {
      let res = await fetch("auth/checktoken");
      let data2 = (await res.json()).message;
      if (!data2) {
        setToken(data2);
      }
      data2.id;
    }
    let orders = await fetch(`api/requests/${store.id || token.id}`);
    let data = await orders.json();
    setRequests(data);
    console.log(data);
  }
  return /* @__PURE__ */ jsx("div", { className: "w-full min-h-[100vh] h-fit pt-10 px-10", children: /* @__PURE__ */ jsxs("div", { className: "flex rounded-t-xl flex-col px-6 pt-6 pb-20 gap-2 w-full h-fit min-h-full", children: [
    /* @__PURE__ */ jsx(Navigator, { pagename: "Заказы" }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white flex bg-opacity-85 items-center gap-6 flex-row text-xl py-3 px-6 rounded-xl", children: [
      /* @__PURE__ */ jsx("span", { children: "Фильтр" }),
      /* @__PURE__ */ jsxs("select", { value: filter, onChange: (e) => setFilter(e.target.value), className: "rounded-lg border-[1px] border-gray-500 py-1", children: [
        /* @__PURE__ */ jsx("option", { value: "", children: "Без фильтра" }),
        /* @__PURE__ */ jsx("option", { value: "date", children: "По дате" }),
        /* @__PURE__ */ jsx("option", { value: "status", children: "По статусу" })
      ] }),
      /* @__PURE__ */ jsx("span", { onClick: () => setSortDir((prev) => !prev), className: clsx({ "rotate-90": sortDir }, { "-rotate-90": !sortDir }, "text-2xl text-[#00CDFF] transition-transform font-bold cursor-pointer select-none"), children: ">" }),
      /* @__PURE__ */ jsx("input", { className: "px-2 border-[1px] border-gray-500 rounded-xl", placeholder: "Поиск по имени...", value: textFilter, onChange: (e) => setTextFilter(e.target.value) })
    ] }),
    token ? fRequests.map((o, i) => /* @__PURE__ */ jsx(Request$1, { get: getOrders, order: o }, i)) : /* @__PURE__ */ jsxs("span", { className: "bg-white text-center text-xl py-10 px-6 rounded-xl", children: [
      /* @__PURE__ */ jsx(Link, { className: "text-[#00CDFF] hover:underline", to: "/login", children: "Войдите" }),
      " чтобы увидеть заказы"
    ] })
  ] }) });
}
const RequestOrders = observer(_RequestOrders);
function Request$1({ order, get }) {
  let user = order.user;
  const [message, setMessage] = useState("");
  const [showFull, setShowFull] = useState(false);
  async function acceptOrder(id) {
    let res = await fetch(`api/acceptOrder/${id}`, { method: "POST" });
    let { message: message2 } = await res.json();
    setMessage(message2);
    get();
    store.checkToken();
  }
  async function declineOrder(id) {
    let res = await fetch(`api/declineOrder/${id}`, { method: "POST" });
    let { message: message2 } = await res.json();
    setMessage(message2);
    get();
    store.checkToken();
  }
  async function finishOrder(id) {
    let res = await fetch(`api/finishOrder/${id}`, { method: "POST" });
    let { message: message2 } = await res.json();
    setMessage(message2);
    get();
    store.checkToken();
  }
  return /* @__PURE__ */ jsx(Fragment, { children: order.person ? /* @__PURE__ */ jsx("div", { className: "w-full bg-white bg-opacity-85 rounded-xl flex items-center flex-row h-fit px-6 pb-12 py-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between px-2 items-center gap-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex text-lg flex-col gap-2 items-center", children: [
        /* @__PURE__ */ jsx("span", { children: "Имя клиента" }),
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-t from-[#00a6cc] to-[#32d9ff] to-90% w-fit px-6 py-1 rounded-full text-white", children: user.username })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex text-lg flex-col gap-2 items-center", children: [
        /* @__PURE__ */ jsx("span", { children: "Оказыващий услугу" }),
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-t from-[#00a6cc] to-[#32d9ff] to-90% w-fit px-6 py-1 rounded-full text-white", children: order.person.name })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex text-lg gap-2 items-center", children: /* @__PURE__ */ jsxs("span", { className: "text-lg px-6 py-2 bg-white border-[#ff00cd] border-[2px] ml-auto rounded-full", children: [
        "Статус ",
        /* @__PURE__ */ jsx("span", { className: "underline text-[#ff00cd]", children: status[order.status] })
      ] }) }),
      /* @__PURE__ */ jsx("button", { onClick: () => setShowFull((prev) => !prev), className: "bg-white text-sm h-fit py-2 px-4 hover:border-black border-[2px] border-white rounded-full", children: showFull ? "Свернуть" : "Раскрыть" })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { display: showFull ? "block" : "none" }, className: "flex flex-row justify-between gap-10", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-x-10 gap-y-4 w-full mt-4 justify-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 text-lg", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex bg-white py-1 bg-opacity-85 gap-4 ml-8 border-b-[1px] border-[#00CDFF] flex-row px-4 h-fit", children: [
          /* @__PURE__ */ jsx("span", { children: "Дата" }),
          /* @__PURE__ */ jsx("span", { children: new Date(order.orderDate).toLocaleDateString() })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex bg-white py-1 bg-opacity-85 gap-4 ml-8 border-b-[1px] border-[#00CDFF] flex-row px-4 h-fit", children: [
          /* @__PURE__ */ jsx("span", { children: "Часы" }),
          /* @__PURE__ */ jsx("span", { children: order.hours })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex bg-white py-1 bg-opacity-85 gap-4 ml-8 border-b-[1px] border-[#00CDFF] flex-row px-4 h-fit text-lg", children: [
          /* @__PURE__ */ jsx("span", { className: "text-lg", children: "Адресс" }),
          /* @__PURE__ */ jsxs("span", { title: order.address, children: [
            order.address.substring(0, 50),
            order.address.length > 50 ? "..." : ""
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row px-10 items-center gap-5 justify-between", children: [
        order.status == "current" ? /* @__PURE__ */ jsx("button", { onClick: () => finishOrder(order._id), className: "border-gray-400 hover:bg-gray-400 hover:text-white text-gray-600 border-[2px] bg-white bg-opacity-85 px-4 py-2 rounded-full border-", children: "Завершить" }) : /* @__PURE__ */ jsx(Fragment, {}),
        order.status == "new" ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("button", { onClick: () => acceptOrder(order._id), className: "border-green-400 hover:bg-green-400 hover:text-white text-green-600 border-[2px] bg-white bg-opacity-85 px-4 py-2 rounded-full border-", children: "Принять заказ" }),
          /* @__PURE__ */ jsx("button", { onClick: () => declineOrder(order._id), className: "border-red-400 hover:bg-red-400 hover:text-white text-red-600 border-[2px] bg-white bg-opacity-85 px-4 py-2 rounded-full border-", children: "Отклонить" })
        ] }) : /* @__PURE__ */ jsx(Fragment, {}),
        /* @__PURE__ */ jsx("span", { className: "text-lg underline ml-auto", children: message }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 ml-auto px-6 rounded-full py-2 w-fit border-[2px] border-[#00CDFF] bg-white flex-row h-fit text-xl", children: [
          /* @__PURE__ */ jsx("span", { children: "Сумма" }),
          /* @__PURE__ */ jsxs("span", { className: "underline text-[#00CDFF]", children: [
            order.total,
            " р."
          ] })
        ] })
      ] })
    ] }) })
  ] }) }) : /* @__PURE__ */ jsx(Fragment, {}) });
}
let pronouns$1 = {
  grand: "дедушки",
  tadj: "таджички",
  gypsy: "цыгана"
};
function _PersonPage() {
  const params = useParams();
  const [person, setPerson] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [favorites, setFavorites] = useState(store.favorites);
  const [nextpage, setNextpage] = useState(null);
  const navigate = useNavigate();
  const text2 = [
    ``,
    `Привет, я нестерпимое уёбище! 
        Твой гид по этому сайту!`,
    `Это страница профиля ${pronouns$1[person == null ? void 0 : person.category]}`,
    `Характеристики по причине цензуры 
        подлежат вольной трактовке`,
    `За представленную информацию 
        мы ответственности не несём`,
    ``,
    `Думаю дальше стоит объяснять
        только если ты совсем еблан`,
    ``,
    `Не я серьёзно просто читай`,
    `И если понравилось жми заказать`,
    `Можешь ещё добавить в избранное`,
    `Его можно посмотреть на отдельной вкладке
        сверху`,
    `Все отзывы от реально 
        заказавших людей`,
    `Но на их правдивость мы клали`
  ].concat((person == null ? void 0 : person.category) == "grand" ? [
    `Ладно`,
    `Почему только деды, но нет бабок?`,
    `Деды как-то попизже будут`,
    `От них пахнет сигаретами и смазкой`,
    `От бабок говном пасёт`,
    `Я серьёзно мы пробовали ввести эту категорию`,
    `Ты бы не заебался читать 100 отзывов`,
    `О говновони бабок?`,
    `Почему цена за 8 часов не сходится с почасовкой?`,
    `Деды привыкли пахать на заводе ровно столько`,
    `И лишних вопросов по этому поводу не задают`,
    `А нам выгода, ведь мы берём %`
  ] : (person == null ? void 0 : person.category) == "gypsy" ? [
    `Ладно`,
    `Почему только деды, но нет бабок?`,
    `Деды как-то попизже будут`,
    `От них пахнет сигаретами и смазкой`,
    `От бабок говном пасёт`,
    `Я серьёзно мы пробовали ввести эту категорию`,
    `Ты бы не заебался читать 100 отзывов`,
    `О говновони бабок?`,
    `Почему цена за 8 часов не сходится с почасовкой?`,
    `Деды привыкли пахать на заводе ровно столько`,
    `И лишних вопросов по этому поводу не задают`,
    `А нам выгода, ведь мы берём %`
  ] : [
    `Ладно`,
    `Почему только деды, но нет бабок?`,
    `Деды как-то попизже будут`,
    `От них пахнет сигаретами и смазкой`,
    `От бабок говном пасёт`,
    `Я серьёзно мы пробовали ввести эту категорию`,
    `Ты бы не заебался читать 100 отзывов`,
    `О говновони бабок?`,
    `Почему цена за 8 часов не сходится с почасовкой?`,
    `Деды привыкли пахать на заводе ровно столько`,
    `И лишних вопросов по этому поводу не задают`,
    `А нам выгода, ведь мы берём %`
  ]);
  const [phrase, setPhrase] = useState(text2[0]);
  const lastPhrase = useRef(0);
  function getPhrase() {
    let int = lastPhrase.current == text2.length - 1 ? 0 : lastPhrase.current + 1;
    lastPhrase.current = int;
    return text2[int];
  }
  useEffect(() => {
    getPerson();
    getReviews();
    checkFavorites();
  }, [store.username]);
  useEffect(() => {
    if (person) {
      let d = window.localStorage.getItem(`order/${person._id}`);
      if (d) {
        setNextpage({ name: "Оформление заказа", to: "order" });
      }
    }
  }, [person]);
  async function getPerson() {
    let res = await fetch(`/api/person/${params.id}`);
    let body = await res.json();
    setPerson(body);
  }
  async function getReviews() {
    let res = await fetch(`/api/reviews/${params.id}`);
    let body = await res.json();
    setReviews(body);
  }
  async function checkFavorites() {
    if (!store.username) {
      return;
    }
    let res = await fetch(`/api/favorites`);
    let data = await res.json();
    setFavorites(data);
  }
  async function addFavorite() {
    await fetch(
      "/api/addFavorite",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ person: params.id })
      }
    );
    checkFavorites();
  }
  async function removeFavorite() {
    await fetch(
      "/api/removeFavorite",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ person: params.id })
      }
    );
    checkFavorites();
  }
  if (person == null) {
    return /* @__PURE__ */ jsx("div", { className: "flex pt-10 px-10 justify-center w-full h-fit", children: /* @__PURE__ */ jsx("div", { className: "bg-white flex rounded-t-xl flex-col px-6 pt-6 pb-20 w-full h-[100vh]" }) });
  }
  return /* @__PURE__ */ jsx("div", { className: "flex pt-10 px-10 justify-center w-full h-fit min-h-full", children: /* @__PURE__ */ jsx("div", { className: "person-bg rounded-t-xl", children: /* @__PURE__ */ jsxs("div", { className: "flex rounded-t-xl backdrop-blur-sm flex-col px-6 relative pt-6 pb-20 w-full h-fit min-h-full", children: [
    /* @__PURE__ */ jsx(Navigator, { nextpage, pagename: person.name }),
    /* @__PURE__ */ jsxs("div", { onClick: () => setPhrase(getPhrase()), className: "absolute cursor-pointer select-none right-4 top-1 flex flex-row", children: [
      phrase ? /* @__PURE__ */ jsx("div", { className: "bg-white flex items-center justify-center text-sm w-fit border-[1px] border-gray-400 rounded-2xl p-2", children: /* @__PURE__ */ jsx("span", { className: "whitespace-pre-line", children: phrase }) }) : /* @__PURE__ */ jsx(Fragment, {}),
      /* @__PURE__ */ jsx("img", { className: "w-[75px]", src: urod })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row h-fit w-full", children: [
      /* @__PURE__ */ jsx("img", { className: "rounded-xl min-w-[450px] min-h-[350px] object-cover", width: 450, height: 350, src: `/${person.image}` }),
      /* @__PURE__ */ jsxs("div", { className: "pl-12 bg-white bg-opacity-85 ml-2 pb-4 pt-6 pr-4 rounded-2xl text-xl flex w-full flex-col justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-6 flex-row items-center", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "Имя ",
            pronouns$1[person.category],
            " :"
          ] }),
          /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-t from-[#00a6cc] to-[#32d9ff] to-90% px-4 py-2 text-white rounded-md text-center", children: person.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 w-fit rounded-md", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-10 justify-between", children: [
            "Цена в час: ",
            /* @__PURE__ */ jsxs("span", { className: "bg-gradient-to-t from-[#e500b7] to-[#ff56dd] to-90% text-white px-4 py-2 rounded-md", children: [
              person.smallPrice,
              " р."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-10 justify-between", children: [
            "Цена за 8 часов: ",
            /* @__PURE__ */ jsxs("span", { className: "bg-gradient-to-t from-[#e500b7] to-[#ff56dd] to-90% text-white px-4 py-2 rounded-md", children: [
              person.bigPrice,
              " р."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-row gap-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxs("span", { children: [
              "Рейтинг ",
              pronouns$1[person.category],
              " :"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "(на основании " + person.reviews.length + " отзывов)" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-[#ff00cd] border-[#ff00cd] border-[1px] rounded-xl text-2xl overflow-hidden w-[100px] h-[100px] relative items-center justify-center flex ml-5", children: [
            /* @__PURE__ */ jsx("div", { style: { height: 20 * person.rating - 1 }, className: "to-[#80e6ff] rounded-b-xl from-[#00CDFF] to-60% bg-gradient-to-t bottom-0 w-[100px] absolute" }),
            /* @__PURE__ */ jsxs("span", { className: "absolute z-10", children: [
              Math.ceil(person.rating),
              "☆"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-4", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => navigate("./order"), className: "px-8 py-3 border-[#32d9ff] hover:border-gray-200 border-[2px] hover:bg-gradient-to-t hover:from-[#00a6cc] hover:to-[#32d9ff] to-90% hover:text-white rounded-lg w-fit", children: "Заказать" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: store.username ? favorites.includes(person._id) ? removeFavorite : addFavorite : void 0,
              className: clsx({ "bg-white border-gray-300 text-gray-300": !store.username }, { "bg-gradient-to-t from-[#e500b7] to-[#ff56dd] to-90% text-white": favorites.includes(person._id) }, { "hover:bg-gradient-to-t hover:from-[#e500b7] hover:to-[#ff56dd] hover:to-90% hover:text-white hover:border-gray-200": store.username }, "px-4 py-3 border-[#ff56dd] border-[2px] w-[230px] rounded-lg"),
              children: favorites.includes(person._id) ? "В избранном ❤" : "В избраное ❤"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 h-full bg-white p-4 bg-opacity-85 mt-4 rounded-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full gap-4", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-xl px-4 py-2 bg-gradient-to-t border-[#00CDFF] border-[2px] from-[#00a6cc] to-[#32d9ff] to-90% rounded-full text-white w-fit", children: [
          "Возраст: ",
          person.age
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xl border-[#00CDFF] border-b-[2px] w-fit", children: "Описание" }),
        /* @__PURE__ */ jsx("span", { className: "py-1 pl-2 w-full whitespace-pre", children: person.description }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-xl border-[#00CDFF] border-b-[2px] w-fit flex flex-row gap-2", children: [
            "Показатели ",
            /* @__PURE__ */ jsx(InfoIcon, { text: "Подтверждено проверкой сервиса" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col pl-2 gap-2 text-base", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-1 items-center", children: [
              /* @__PURE__ */ jsx("img", { src: lipssvg, className: "w-[25px] mr-2" }),
              [...Array(5).fill(1).map((l, i) => i < person.lips ? 1 : 0).map(
                (l, i) => l ? /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#cdff00]" }, i) : /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#d3c4bd]" }, i)
              )]
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-1 items-center", children: [
              /* @__PURE__ */ jsx("img", { src: fistsvg, className: "w-[25px] mr-2" }),
              [...Array(5).fill(1).map((l, i) => i < person.fist ? 1 : 0).map(
                (l, i) => l ? /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#cdff00]" }, i) : /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#d3c4bd]" }, i)
              )]
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-1 items-center", children: [
              /* @__PURE__ */ jsx("img", { src: bodysvg, className: "w-[25px] mr-2" }),
              [...Array(5).fill(1).map((l, i) => i < person.body ? 1 : 0).map(
                (l, i) => l ? /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#cdff00]" }, i) : /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#d3c4bd]" }, i)
              )]
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full max-h-[340px] overflow-y-auto", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xl border-[#00CDFF] w-fit border-b-[2px] mb-4", children: "Отзывы:" }),
        reviews.map((r, i) => /* @__PURE__ */ jsx(Review, { review: r }, i))
      ] })
    ] })
  ] }) }) });
}
function Review({ review }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "px-4 flex items-center mb-1", children: [
      /* @__PURE__ */ jsx("span", { className: "text-lg mr-2", children: "Оценка:" }),
      new Array(5).fill(0).map((t, i) => /* @__PURE__ */ jsx("span", { className: "text-xl text-[#ff00cd] cursor-pointer select-none", children: i + 1 <= review.rating ? "★" : "☆" }, i)),
      /* @__PURE__ */ jsx("span", { className: "text-lg ml-4 mr-2", children: "Дата:" }),
      /* @__PURE__ */ jsx("span", { children: new Date(review.date).toLocaleString() })
    ] }),
    /* @__PURE__ */ jsx("span", { className: "h-fit bg-white bg-opacity-60 p-4 w-[80%] border-[1px] border-gray-400 rounded-lg", children: review.text })
  ] });
}
function InfoIcon({ text: text2, dcn }) {
  return /* @__PURE__ */ jsxs("div", { className: dcn ? dcn : "relative group", children: [
    /* @__PURE__ */ jsx("button", { className: `bg-gray-200 w-[25px] h-[25px] 
                        text-center rounded-full`, children: "i" }),
    /* @__PURE__ */ jsx("div", { className: "top-0 absolute bg-gray-300 hidden group-hover:block\r\n                        ml-10 -mt-2 text-base px-4 py-2", children: text2 }),
    /* @__PURE__ */ jsx("div", { className: "text-gray-300 top-0 ml-6 absolute hidden group-hover:block", children: "◀" })
  ] });
}
const PersonPage = observer(_PersonPage);
const dedi = "/assets/dedi-BYccCK4A.png";
const gyps = "/assets/gyps-Bq1Vl_da.png";
const tadj = "/assets/tadj-w_NrzjJ2.png";
const bstar = "/assets/bstar-u1tJqe3A.gif";
const eye = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='%23fff'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.4955%207.44088C3.54724%208.11787%202.77843%208.84176%202.1893%209.47978C0.857392%2010.9222%200.857393%2013.0778%202.1893%2014.5202C3.9167%2016.391%207.18879%2019%2012%2019C13.2958%2019%2014.4799%2018.8108%2015.5523%2018.4977L13.8895%2016.8349C13.2936%2016.9409%2012.6638%2017%2012%2017C7.9669%2017%205.18832%2014.82%203.65868%2013.1634C3.03426%2012.4872%203.03426%2011.5128%203.65868%2010.8366C4.23754%2010.2097%204.99526%209.50784%205.93214%208.87753L4.4955%207.44088Z'%20fill='%23fff'/%3e%3cpath%20d='M8.53299%2011.4784C8.50756%2011.6486%208.49439%2011.8227%208.49439%2012C8.49439%2013.933%2010.0614%2015.5%2011.9944%2015.5C12.1716%2015.5%2012.3458%2015.4868%2012.516%2015.4614L8.53299%2011.4784Z'%20fill='%23fff'/%3e%3cpath%20d='M15.4661%2012.4471L11.5473%208.52829C11.6937%208.50962%2011.8429%208.5%2011.9944%208.5C13.9274%208.5%2015.4944%2010.067%2015.4944%2012C15.4944%2012.1515%2015.4848%2012.3007%2015.4661%2012.4471Z'%20fill='%23fff'/%3e%3cpath%20d='M18.1118%2015.0928C19.0284%2014.4702%2019.7715%2013.7805%2020.3413%2013.1634C20.9657%2012.4872%2020.9657%2011.5128%2020.3413%2010.8366C18.8117%209.18002%2016.0331%207%2012%207C11.3594%207%2010.7505%207.05499%2010.1732%207.15415L8.50483%205.48582C9.5621%205.1826%2010.7272%205%2012%205C16.8112%205%2020.0833%207.60905%2021.8107%209.47978C23.1426%2010.9222%2023.1426%2013.0778%2021.8107%2014.5202C21.2305%2015.1486%2020.476%2015.8603%2019.5474%2016.5284L18.1118%2015.0928Z'%20fill='%23fff'/%3e%3cpath%20d='M2.00789%203.42207C1.61736%203.03155%201.61736%202.39838%202.00789%202.00786C2.39841%201.61733%203.03158%201.61733%203.4221%202.00786L22.0004%2020.5862C22.391%2020.9767%2022.391%2021.6099%2022.0004%2022.0004C21.6099%2022.3909%2020.9767%2022.3909%2020.5862%2022.0004L2.00789%203.42207Z'%20fill='%23fff'/%3e%3c/svg%3e";
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname != "/") {
      window.scrollTo(0, 200);
    }
  }, [pathname]);
  return null;
}
function Footer() {
  let places = [
    {
      p: "/api",
      n: "Описание апи"
    },
    {
      p: "/about",
      n: "О сайте"
    },
    {
      p: "/admin",
      n: "Админка(нужны права)"
    }
  ];
  const text2 = [
    "Заходи ещё!",
    "Я за русский мир.",
    "Мой создатель гораздо больший псих, чем вы привыкли думать",
    "Не задавайте вопросов о 4 категории на сайте",
    "Под видом рофл-эскорта мы нанимаем наркокурьеров",
    "console.log(`Пришлите помощь`)",
    "Вовочка сдергивая штаны: КРЫМ РОССИЙСКАЯ ТЕРРИТОРИЯ"
  ];
  const [phrase, setPhrase] = useState(text2[0]);
  const lastPhrase = useRef(0);
  function getPhrase() {
    let int = lastPhrase.current == text2.length - 1 ? 0 : lastPhrase.current + 1;
    lastPhrase.current = int;
    return text2[int];
  }
  return /* @__PURE__ */ jsxs("div", { className: "relative h-fit z-20 rounded-t-[72px] w-full", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute backdrop-blur-md rounded-t-[72px] border-t-[2px] border-x-[2px] border-[#78ceeb] w-full h-full" }),
    /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col mt-8 z-10 rounded-t-[60px] bg-white bg-opacity-85 w-full h-full", children: [
      /* @__PURE__ */ jsxs("div", { onClick: () => setPhrase(getPhrase()), className: "absolute cursor-pointer select-none right-4 bottom-14 flex flex-row", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-white flex items-center justify-center text-sm w-fit border-[1px] border-gray-400 rounded-2xl p-2", children: /* @__PURE__ */ jsx("span", { children: phrase }) }),
        /* @__PURE__ */ jsx("img", { className: "w-[75px]", src: urod })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "my-14 flex justify-center flex-col rounded-2xl gap-4 py-2 px-10 w-fit text-xl", children: [
          /* @__PURE__ */ jsx("span", { className: "bg-white px-4 py-2 w-fit", children: "Места которые можно было упустить" }),
          places.map((place, i) => /* @__PURE__ */ jsx("a", { className: "bg-white px-4 w-fit py-2 hover:border-[#00CDFF] border-b-[2px] border-white", href: place.p, children: place.n }, i))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "my-14 ml-14 flex flex-col rounded-2xl gap-4 py-2 px-10 w-fit text-xl", children: [
          /* @__PURE__ */ jsx("span", { className: "bg-[#cdff00] px-4 py-2 w-fit", children: "Титры" }),
          /* @__PURE__ */ jsx("span", { className: "bg-[#cdff00] px-4 py-2 w-fit", children: "Идея - NT&S" }),
          /* @__PURE__ */ jsx("span", { className: "bg-[#cdff00] px-4 py-2 w-fit", children: "Backend - NT&S" }),
          /* @__PURE__ */ jsx("span", { className: "bg-[#cdff00] px-4 py-2 w-fit", children: "Дизайн - NT&S" }),
          /* @__PURE__ */ jsx("span", { className: "bg-[#cdff00] px-4 py-2 w-fit", children: "Frontend - NT&S" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full bg-[#80e6ff] rounded-t-[60px] min-h-10 flex items-center px-14 mt-auto", children: /* @__PURE__ */ jsx(Link, { to: "https://github.com/tramvai0105", className: "text-[#1d4b54] hover:underline text-xl font-bold ml-auto", children: "Сделано by NT&S" }) })
    ] })
  ] });
}
function _Auth({ tokenData }) {
  const roles = {
    "user": "Пользователь",
    "person": "Участник",
    "admin": "Админ"
  };
  const [token, setToken] = useState(store.token || tokenData);
  useEffect(() => {
    setToken(store.token);
  }, [store.token]);
  const imageRef = useRef(null);
  const [file, setFile] = useState(null);
  useEffect(() => {
    let fr = new FileReader();
    if (file) {
      fr.onload = function() {
        if (imageRef.current) {
          imageRef.current.src = fr.result;
        }
        putPhoto();
      };
      fr.readAsDataURL(file);
    } else {
      if (imageRef.current && token && token.image) {
        imageRef.current.src = token.image;
      }
    }
  }, [file]);
  async function putPhoto() {
    let body = new FormData();
    body.append("files", file);
    let res = await fetch(
      "/api/putUserImage",
      {
        method: "PUT",
        body
      }
    );
    await res.json();
    if (res.status !== 200) {
      return;
    }
  }
  return /* @__PURE__ */ jsx("div", { className: "w-fit backdrop-blur-lg fixed border-opacity-25 border-[2px] border-white pt-10 flex justify-center items-center rounded-xl", children: token ? /* @__PURE__ */ jsxs("div", { className: "flex relative flex-col items-center gap-5 w-full px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute group top-0 right-5 flex flex-row", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-gray-100 bg-opacity-35 cursor-pointer rounded-full w-[24px] \r\n                        h-[24px] flex items-center justify-center", children: "i" }),
      /* @__PURE__ */ jsx("div", { className: "absolute z-30 bg-gray-100 right-8 hidden group-hover:block bg-opacity-85 rounded-md p-2", children: "Нажмите на фото, чтобы сменить" })
    ] }),
    /* @__PURE__ */ jsxs("label", { htmlFor: "photo", className: "min-w-[140px] max-w-[140px] overflow-hidden cursor-pointer max-h-[140px] min-h-[140px] border-[#00CDFF] rounded-full border-[2px]", children: [
      /* @__PURE__ */ jsx("img", { src: `/${token.image}`, className: "w-[140px] h-[140px] rounded-full object-cover", ref: imageRef }),
      /* @__PURE__ */ jsx("input", { id: "photo", className: "hidden", accept: "image/png, image/jpeg", onChange: (e) => setFile(e.target.files && e.target.files[0]), type: "file" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full gap-2 items-center", children: [
      /* @__PURE__ */ jsx("span", { className: "text-lg text-center px-4 py-1 bg-gradient-to-t border-[#00CDFF] border-[2px] from-[#00a6cc] to-[#32d9ff] text-white to-90% rounded-full w-fit h-fit", children: token.username }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", { className: "border-[#ff00cd] border-[2px] text-center px-4 py-1  bg-gradient-to-t from-[#e500b7] to-[#ff56dd] text-white to-90% rounded-full w-fit h-fit", children: roles[token.role] }) }),
      /* @__PURE__ */ jsxs("div", { className: "border-[#00CDFF] border-[2px] text-center px-2 py-1  bg-gradient-to-t bg-white text-[#00CDFF] flex flex-col to-90% rounded-full w-full h-fit", children: [
        token.balance,
        " р.",
        /* @__PURE__ */ jsx(Link, { to: "/addBalance", className: "px-2 text-sm border-[#00CDFF] border-t-[1px]", children: "пополнить" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/balance",
            className: "hover:from-gray-100 mr-auto mt-4 hover:to-gray-300 bg-gray-600\r\n                         hover:text-black bg-opacity-25 bg-gradient-to-t  \r\n                         hover:border-gray-500 text-white text-nowrap rounded-t-md px-4",
            children: "Баланс"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/login",
            className: "hover:from-gray-100 ml-auto mt-4 hover:to-gray-300 bg-gray-600\r\n                         hover:text-black bg-opacity-25 bg-gradient-to-t  \r\n                         hover:border-gray-500 text-white text-nowrap rounded-t-md px-4",
            children: "Авторизация"
          }
        )
      ] })
    ] })
  ] }) : /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 p-10 items-center", children: [
    /* @__PURE__ */ jsx("span", { className: "text-xl text-white", children: "Вы не вошли" }),
    /* @__PURE__ */ jsx(Link, { className: "border-[#00CDFF] border-[2px] px-4 py-2 mb-10 rounded-full text-lg text-[#00CDFF] bg-white hover:bg-[#00CDFF] hover:text-white", to: "/login", children: "Войти" })
  ] }) });
}
const Auth = observer(_Auth);
const Layout = observer(function Layout2() {
  const [showBg, setShowBg] = useState(false);
  function changeShowBg() {
    setShowBg((prev) => !prev);
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex relative flex-row w-[100%] h-full", children: [
      /* @__PURE__ */ jsx(ScrollToTop, {}),
      /* @__PURE__ */ jsx(SideMenu, { show: showBg }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-[80%] h-full", children: [
        /* @__PURE__ */ jsx(Header, { change: changeShowBg }),
        /* @__PURE__ */ jsx(SideLinks, { token: store.token, links }),
        /* @__PURE__ */ jsx("div", { className: "h-fit overflow-hidden w-[1150px] flex flex-col items-center backdrop-blur-md content-border-grad border-t-[2px] border-x-[2px]", children: !showBg ? /* @__PURE__ */ jsx(Outlet, {}) : /* @__PURE__ */ jsx(Fragment, {}) })
      ] })
    ] }),
    !showBg ? /* @__PURE__ */ jsx(Footer, {}) : /* @__PURE__ */ jsx(Fragment, {})
  ] });
});
function Header({ change }) {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs("div", { title: "Показать фон", onClick: () => navigate("/"), className: `flex relative cursor-pointer mt-24 hover:backdrop-blur-sm rounded-t-xl flex-row text-7xl w-[1150px] items-center text-white justify-between px-2`, children: [
    /* @__PURE__ */ jsx("img", { src: dedi, width: 250 }),
    /* @__PURE__ */ jsx("img", { src: bstar, width: 45 }),
    /* @__PURE__ */ jsx("img", { src: gyps, width: 300 }),
    /* @__PURE__ */ jsx("img", { src: bstar, width: 45 }),
    /* @__PURE__ */ jsx("img", { className: "relative -translate-x-4", src: tadj, width: 480 }),
    /* @__PURE__ */ jsx("img", { src: eye, width: 32, className: "absolute right-0 top-0", onClick: (e) => {
      e.stopPropagation();
      change();
    } })
  ] });
}
function _SideMenu({ show }) {
  const [tokenData, setTokenData] = useState(false);
  useEffect(() => {
    checkToken();
  }, []);
  async function checkToken() {
    let res = await fetch("/auth/checktoken");
    let data = await res.json();
    setTokenData(data.message);
  }
  return /* @__PURE__ */ jsx("header", { className: "w-[300px] z-10 mt-24 flex flex-col items-center gap-2 h-fit", children: !show ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Auth, { tokenData }) }) : /* @__PURE__ */ jsx(Fragment, {}) });
}
let links = [
  {
    name: "Главная",
    addres: "",
    role: ""
  },
  {
    name: "Избранное ❤",
    addres: "favorites",
    role: ""
  },
  {
    name: "Заказы",
    addres: "orders",
    role: ""
  },
  {
    name: "Заявки",
    addres: "requests",
    role: "person"
  },
  {
    name: "Профили",
    addres: "profiles",
    role: "person"
  },
  {
    name: "Стать участником",
    addres: "become",
    role: "user"
  }
  // {participate
  //     name: "Авторизация",
  //     addres: "login",
  // },
];
function SideLinks({ links: links2, token }) {
  const navigate = useNavigate();
  const hiddenRouts = ["person", "adm"];
  const usersRouts = ["user"];
  return /* @__PURE__ */ jsxs("div", { className: "rounded-t-lg backdrop-blur-lg border-opacity-25 border-t-[2px] border-x-[2px] border-white gap-1 text-xl bg-opacity-85 w-[1150px] flex flex-row", children: [
    links2.map((l, i, a) => {
      if (l.role == "") {
        return /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => navigate(l.addres),
            className: "hover:from-gray-100 hover:to-gray-300 bg-gray-600\r\n                         hover:text-black bg-opacity-25 bg-gradient-to-t  \r\n                         hover:border-gray-500 text-white text-nowrap rounded-t-md px-4",
            children: l.name
          }
        ) }, i);
      }
    }),
    /* @__PURE__ */ jsxs("div", { className: "ml-auto flex-row flex gap-1", children: [
      links2.map((l, i, a) => {
        if (l.role != "" && token && hiddenRouts.includes(token.role) && token.role == l.role) {
          return /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => navigate(l.addres),
              className: "hover:from-gray-100 hover:to-gray-300 bg-gray-600\r\n                         hover:text-black bg-opacity-25 bg-gradient-to-t  \r\n                         hover:border-gray-500 text-white text-nowrap rounded-t-md px-4",
              children: l.name
            }
          ) }, i);
        }
      }),
      links2.map((l, i, a) => {
        if (l.role != "" && token && usersRouts.includes(token.role) && token.role == l.role) {
          return /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => navigate(l.addres),
              className: "hover:from-gray-100 hover:to-gray-300 bg-gray-600\r\n                         hover:text-black bg-opacity-25 bg-gradient-to-t  \r\n                         hover:border-gray-500 text-white text-nowrap rounded-t-md px-4",
              children: l.name
            }
          ) }, i);
        }
      })
    ] })
  ] });
}
const SideMenu = observer(_SideMenu);
function AddBalance() {
  const [money, setMoney] = useState(0);
  const [message, setMessage] = useState("");
  async function getMoney() {
    if (money > 500) {
      setMessage("НЕ ДОХУЯ ЛИ ТЕБЕ? 500 КРАЙ БРАТ!!!!");
      return;
    }
    let res = await fetch("/api/addBalance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ total: money })
    });
    let data = await res.json();
    console.log(data);
    setMessage("ЛОВИ СВОЁ БАБЛО");
    setTimeout(() => {
      window.location.reload();
    }, 1e3);
    setMoney(0);
  }
  return /* @__PURE__ */ jsx("div", { className: "flex p-10 flex-col w-full h-[100vh]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 items-center justify-center balance-bg rounded-xl w-full h-full p-6", children: [
    /* @__PURE__ */ jsx("span", { className: "text-yellow-700 text-3xl mt-40 bg-white", children: message }),
    /* @__PURE__ */ jsx("span", { className: "bg-white text-3xl py-6", children: "Сколько надо денег? введите:" }),
    /* @__PURE__ */ jsx("input", { className: "h-fit p-2 w-[350px]", onChange: (e) => setMoney(Math.abs(Math.floor(Number(e.target.value)))), type: "number", placeholder: "БАНКОМАТ", value: money }),
    /* @__PURE__ */ jsx("button", { onClick: () => getMoney(), className: "text-white bg-purple-900 w-full py-2", children: "БАНКОМАТ" })
  ] }) });
}
function Profiles() {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    getPersons();
  }, []);
  async function getPersons() {
    let res = await fetch(`/api/personsByUser/`);
    let data = await res.json();
    console.log(data);
    setPersons(data);
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex p-10 flex-col w-full h-fit min-h-[100vh]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row h-fit items-center", children: [
      /* @__PURE__ */ jsx(Navigator, { pagename: "Профили" }),
      /* @__PURE__ */ jsx(Link, { to: "/profiles/create", className: "bg-yellow-400 hover:underline mb-2 hover:border-white box-border border-yellow-400 border-[2px] text-lg text-white to-90% rounded-full px-6 py-4 ml-auto mr-12", children: "Создать" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col min-h-[100vh] bg-white bg-opacity-85 p-6 rounded-xl", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-y-8 rounded-xl w-full mt-2 ml-4", children: persons.map((person) => /* @__PURE__ */ jsx(Advert, { check: getPersons, to: person._id, id: person._id, rating: person.rating, reviews: 0, lips: person.lips, fist: person.fist, body: person.body, name: person.name, priceSmall: person.smallPrice, priceBig: person.bigPrice, img: person.image }, person.name)) }) })
  ] });
}
function Advert({ check, lips = 3, to = "", fist = 4, body = 2, name = "Андрей Семёнович", img, priceSmall = 350, priceBig = 1500, rating = 4.7, reviews = 15, id }) {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs("div", { onClick: () => navigate(`${to}/edit`), className: "px-6 group hover:bg-gradient-to-t hover:from-[#80e6ff] hover:to-white hover:to-80%  py-4 transition-shadow hover:shadow-lg shadow-black cursor-pointer advert-border-grad border-[3px] border-white rounded-sm flex h-fit flex-col text-lg text-[#261f1b] bg-white w-fit", children: [
    /* @__PURE__ */ jsx("div", { className: "w-[220px] h-[190px] overflow-hidden rounded-sm", children: /* @__PURE__ */ jsx("img", { className: "relative group-hover:scale-[1.15] transition-transform duration-500 object-cover rounded-sm", src: img }) }),
    /* @__PURE__ */ jsx("span", { className: "font-bold group-hover:underline text-[#00CDFF] my-1", children: name }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row-reverse justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center text-base text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsx("span", { children: "Рейтинг" }),
          /* @__PURE__ */ jsxs("span", { className: "text-[#ff00cd]", children: [
            rating,
            " *"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-[1px] bg-black opacity-30" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsx("span", { children: "Отзывов" }),
          /* @__PURE__ */ jsx("span", { children: reviews })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-[1px] bg-black opacity-30" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 text-base", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-1 items-center", children: [
          /* @__PURE__ */ jsx("img", { src: lipssvg, className: "w-[25px] mr-2" }),
          [...Array(5).fill(1).map((l, i) => i < lips ? 1 : 0).map(
            (l, i) => l ? /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#cdff00]" }, i) : /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#d3c4bd]" }, i)
          )]
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-1 items-center", children: [
          /* @__PURE__ */ jsx("img", { src: fistsvg, className: "w-[25px] mr-2" }),
          [...Array(5).fill(1).map((l, i) => i < fist ? 1 : 0).map(
            (l, i) => l ? /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#cdff00]" }, i) : /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#d3c4bd]" }, i)
          )]
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-1 items-center", children: [
          /* @__PURE__ */ jsx("img", { src: bodysvg, className: "w-[25px] mr-2" }),
          [...Array(5).fill(1).map((l, i) => i < body ? 1 : 0).map(
            (l, i) => l ? /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#cdff00]" }, i) : /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#d3c4bd]" }, i)
          )]
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-center items-center gap-3 font-bold mt-1 w-full relative", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-1 text-base w-full", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "Час: ",
        /* @__PURE__ */ jsx("span", { className: "text-[#00CDFF] underline", children: priceSmall }),
        " р."
      ] }),
      /* @__PURE__ */ jsxs("span", { children: [
        "8 часов: ",
        /* @__PURE__ */ jsx("span", { className: "text-[#00CDFF] underline", children: priceBig }),
        " р."
      ] })
    ] }) })
  ] });
}
let pronouns = {
  grand: "дедушки",
  tadj: "таджички",
  gypsy: "цыгана"
};
function ProfileEdit() {
  const [person, setPerson] = useState(null);
  const savePerson = useRef(null);
  const [editing, setEditing] = useState(false);
  const params = useParams();
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const imageRef = useRef(null);
  useEffect(() => {
    getPerson();
  }, []);
  useEffect(() => {
    let fr = new FileReader();
    if (file) {
      fr.onload = function() {
        if (imageRef.current) {
          imageRef.current.src = fr.result;
        }
      };
      fr.readAsDataURL(file);
    } else {
      if (imageRef.current) {
        imageRef.current.src = person.image;
      }
    }
  }, [file]);
  async function getPerson() {
    let res = await fetch(`/api/person/${params.id}`);
    let body = await res.json();
    setPerson(body);
    savePerson.current = { ...body };
  }
  function toSavedPerson() {
    if (savePerson.current) {
      setPerson({ ...savePerson.current });
    }
  }
  async function save() {
    if (!person) {
      return;
    }
    let body = new FormData();
    Object.keys(person).forEach((key) => body.append(key, String(person[key])));
    body.append("files", file);
    let res = await fetch(
      "/api/putPersonByUser",
      {
        method: "PUT",
        body
      }
    );
    let resBody = await res.json();
    if (res.status !== 200) {
      setMessage(JSON.stringify(resBody.message));
      return;
    }
    setMessage(resBody.message);
  }
  function formDataSetter(value, key) {
    setPerson((prev) => {
      prev[key] = value;
      return prev;
    });
  }
  let menu = () => {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-3", children: [
      /* @__PURE__ */ jsx(Link, { className: "px-6 py-2 border-[2px] border-yellow-500 bg-white bg-opacity-85 rounded-md hover:bg-yellow-500 hover:text-white w-fit", to: "/profiles", children: "К профилям" }),
      /* @__PURE__ */ jsx("span", { children: message }),
      /* @__PURE__ */ jsx("button", { onClick: () => setEditing((prev) => !prev), className: "px-6 ml-auto py-2 border-[2px] border-yellow-500 bg-white bg-opacity-85 rounded-md hover:bg-yellow-500 hover:text-white w-fit", children: "Редактировать" }),
      /* @__PURE__ */ jsx("button", { onClick: () => save(), className: "px-6 py-2 border-[2px] border-green-500 bg-white bg-opacity-85 rounded-md hover:bg-green-500 hover:text-white w-fit", children: "Сохранить" }),
      /* @__PURE__ */ jsx("button", { onClick: () => {
        setEditing(false);
        toSavedPerson();
      }, className: "px-6 py-2 border-[2px] border-red-500 bg-white bg-opacity-85 rounded-md hover:bg-red-500 hover:text-white w-fit", children: "Сброс" })
    ] });
  };
  if (person == null) {
    return /* @__PURE__ */ jsx("div", { className: "flex pt-10 px-10 justify-center w-full h-fit", children: /* @__PURE__ */ jsx("div", { className: "bg-white flex rounded-t-xl flex-col px-6 pt-6 pb-20 w-full h-[100vh]" }) });
  }
  if (!editing)
    return /* @__PURE__ */ jsxs("div", { className: "flex pt-10 px-10 flex-col w-full h-fit min-h-[100vh] gap-2", children: [
      menu(),
      /* @__PURE__ */ jsx("div", { className: "person-bg rounded-t-xl", children: /* @__PURE__ */ jsxs("div", { className: "flex rounded-t-xl backdrop-blur-sm flex-col px-6 pt-6 pb-20 w-full h-fit min-h-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row h-fit", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "photo", children: /* @__PURE__ */ jsx("img", { ref: imageRef, className: "rounded-xl cursor-pointer min-w-[500px] min-h-[400px] object-cover", width: 500, height: 400, src: `/${person.image}` }) }),
          /* @__PURE__ */ jsx("input", { id: "photo", className: "hidden", accept: "image/png, image/jpeg", onChange: (e) => setFile(e.target.files && e.target.files[0]), type: "file" }),
          /* @__PURE__ */ jsxs("div", { className: "pl-12 bg-white bg-opacity-85 ml-2 pb-4 pt-6 pr-4 rounded-2xl text-xl flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-6 flex-row items-center", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "Имя ",
                pronouns[person.category],
                " :"
              ] }),
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-t from-[#00a6cc] to-[#32d9ff] to-90% px-4 py-2 text-white rounded-md text-center", children: person.name })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 w-fit rounded-md", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-10 justify-between", children: [
                "Цена в час: ",
                /* @__PURE__ */ jsxs("span", { className: "bg-gradient-to-t from-[#e500b7] to-[#ff56dd] to-90% text-white px-4 py-2 rounded-md", children: [
                  person.smallPrice,
                  " р."
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-10 justify-between", children: [
                "Цена за 8 часов: ",
                /* @__PURE__ */ jsxs("span", { className: "bg-gradient-to-t from-[#e500b7] to-[#ff56dd] to-90% text-white px-4 py-2 rounded-md", children: [
                  person.bigPrice,
                  " р."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-row gap-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsxs("span", { children: [
                  "Рейтинг ",
                  pronouns[person.category],
                  " :"
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: "(на основании " + person.reviews.length + " отзывов)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-[#ff00cd] border-[#ff00cd] border-[1px] rounded-sm text-2xl w-[100px] h-[100px] relative items-center justify-center flex ml-5", children: [
                /* @__PURE__ */ jsx("div", { style: { height: 20 * person.rating - 1 }, className: "to-[#80e6ff] from-[#00CDFF] to-60% bg-gradient-to-t bottom-0 w-[99px] absolute" }),
                /* @__PURE__ */ jsxs("span", { className: "absolute z-10", children: [
                  person.rating,
                  "☆"
                ] })
              ] })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-col w-full gap-4 bg-white bg-opacity-85 p-4 rounded-xl", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xl px-4 py-2 bg-gradient-to-t border-[#00CDFF] from-[#00a6cc] to-[#32d9ff] to-90% rounded-full text-white border-[2px] w-fit", children: [
            "Возраст: ",
            person.age
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-xl border-[#00CDFF] border-b-[2px] w-fit", children: "Описание" }),
          /* @__PURE__ */ jsx("span", { className: "py-1 pl-2 w-full whitespace-pre", children: person.description }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-xl border-[#00CDFF] border-b-[2px] w-fit flex flex-row gap-2", children: [
              "Показатели ",
              /* @__PURE__ */ jsx(InfoIcon, { text: "Подтверждено проверкой сервиса" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col pl-2 gap-2 text-base", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-1 items-center", children: [
                /* @__PURE__ */ jsx("img", { src: lipssvg, className: "w-[25px] mr-2" }),
                [...Array(5).fill(1).map((l, i) => i < person.lips ? 1 : 0).map(
                  (l, i) => l ? /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#cdff00]" }, i) : /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#d3c4bd]" }, i)
                )]
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-1 items-center", children: [
                /* @__PURE__ */ jsx("img", { src: fistsvg, className: "w-[25px] mr-2" }),
                [...Array(5).fill(1).map((l, i) => i < person.fist ? 1 : 0).map(
                  (l, i) => l ? /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#cdff00]" }, i) : /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#d3c4bd]" }, i)
                )]
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-1 items-center", children: [
                /* @__PURE__ */ jsx("img", { src: bodysvg, className: "w-[25px] mr-2" }),
                [...Array(5).fill(1).map((l, i) => i < person.body ? 1 : 0).map(
                  (l, i) => l ? /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#cdff00]" }, i) : /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#d3c4bd]" }, i)
                )]
              ] })
            ] })
          ] })
        ] })
      ] }) })
    ] });
  if (editing)
    return /* @__PURE__ */ jsxs("div", { className: "flex pt-10 px-10 flex-col w-full h-fit min-h-[100vh] gap-2", children: [
      menu(),
      /* @__PURE__ */ jsx("div", { className: "person-bg rounded-t-xl", children: /* @__PURE__ */ jsxs("div", { className: "flex rounded-t-xl backdrop-blur-sm flex-col px-6 pt-6 pb-20 w-full h-fit min-h-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row h-fit", children: [
          /* @__PURE__ */ jsx("img", { className: "rounded-xl min-w-[350px] min-h-[250px] object-cover", width: 250, height: 150, src: `/${person.image}` }),
          /* @__PURE__ */ jsxs("div", { className: "pl-12 bg-white w-full bg-opacity-85 gap-4 ml-2 pb-4 pt-6 pr-4 rounded-2xl text-xl flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-10 flex-row items-center", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "Имя ",
                pronouns[person.category],
                " :"
              ] }),
              /* @__PURE__ */ jsx(TextInput$1, { value: person.name, setter: formDataSetter, property: "name" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-10 w-fit rounded-md", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-10 justify-between", children: [
                "Цена в час: ",
                /* @__PURE__ */ jsx(TextInput$1, { value: person.smallPrice, setter: formDataSetter, property: "smallPrice" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-10 justify-between", children: [
                "Цена за 8 часов: ",
                /* @__PURE__ */ jsx(TextInput$1, { value: person.bigPrice, setter: formDataSetter, property: "bigPrice" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-col w-full gap-4 bg-white bg-opacity-85 p-4 rounded-xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-xl px-4 py-2 bg-gradient-to-t border-[#00CDFF] from-[#00a6cc] to-[#32d9ff] to-90% rounded-full border-[2px] w-fit", children: [
            "Возраст: ",
            /* @__PURE__ */ jsx(TextInput$1, { value: person.age, setter: formDataSetter, property: "age" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-xl border-[#00CDFF] border-b-[2px] w-fit", children: "Описание" }),
          /* @__PURE__ */ jsx(TextInput$1, { area: true, className: "p-1 resize-none h-[200px] border-[1px] border-yellow-500", value: person.description, setter: formDataSetter, property: "description" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-xl border-[#00CDFF] border-b-[2px] w-fit flex flex-row gap-2", children: [
              "Показатели ",
              /* @__PURE__ */ jsx(InfoIcon, { text: "Подтверждено проверкой сервиса" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col pl-2 gap-2 text-base", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-1 items-center", children: [
                /* @__PURE__ */ jsx("img", { src: lipssvg, className: "w-[25px] mr-2" }),
                [...Array(5).fill(1).map((l, i) => i < person.lips ? 1 : 0).map(
                  (l, i) => l ? /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#cdff00]" }, i) : /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#d3c4bd]" }, i)
                )]
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-1 items-center", children: [
                /* @__PURE__ */ jsx("img", { src: fistsvg, className: "w-[25px] mr-2" }),
                [...Array(5).fill(1).map((l, i) => i < person.fist ? 1 : 0).map(
                  (l, i) => l ? /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#cdff00]" }, i) : /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#d3c4bd]" }, i)
                )]
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-1 items-center", children: [
                /* @__PURE__ */ jsx("img", { src: bodysvg, className: "w-[25px] mr-2" }),
                [...Array(5).fill(1).map((l, i) => i < person.body ? 1 : 0).map(
                  (l, i) => l ? /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#cdff00]" }, i) : /* @__PURE__ */ jsx("div", { className: "h-[8px] w-[16px] bg-[#d3c4bd]" }, i)
                )]
              ] })
            ] })
          ] })
        ] })
      ] }) })
    ] });
}
function TextInput$1({ value, property, setter, num = false, className = "p-1 border-[1px] border-yellow-500", area }) {
  const [inputValue, setInputValue] = useState(value);
  useEffect(() => {
    setInputValue(value);
  }, [value]);
  useEffect(() => {
    setter(inputValue, property);
  }, [inputValue]);
  if (area)
    return /* @__PURE__ */ jsx("textarea", { className, value: inputValue, onChange: (e) => setInputValue(e.target.value) });
  return /* @__PURE__ */ jsx("input", { className, value: inputValue, onChange: (e) => setInputValue(e.target.value), type: num ? "number" : "text" });
}
const ded = "/assets/kir-D6N8AwxP.png";
const text = [
  "Привет. Меня зовут Кирилл Игоревич. Мне 61 год.",
  "Я единоличный создатель сайта *Деды Цыгане Таджички*®",
  "Спросите как я пришёл к этому? Хороший вопрос.",
  "Однажды я лежал в ванне и смотрел на дырку в потолке",
  "На узкую и влажную от пара дырочку",
  "И тут до меня дошло что в каждом есть такая дырочка",
  "Узкая, влажная, но что самое главное",
  "Эта дыра - оставленный некогда след одиночества",
  "Столь печального чувства известного каждому",
  "И тогда я решил во что бы то ни стало",
  "Создать такой сервис, который сможет объеденить множество людей",
  "Множество одиноких, старых, слабых или просто безпаспортовых граждан",
  "Ведь лично я считаю, что не быть одинокими имеют право все",
  "Вне зависимости от наличия других прав",
  "На подобных началах удалось разработать уникальную концепцию",
  "Human sharing'а",
  "Ведь поделиться собой и сделать первый шаг так просто",
  "Особенно теперь, когда для этого требуется лишь пара пунктов после регистрации",
  "И вот те, кто ещё недавно были выкинуты на обочину общества",
  "Имеют реальную возможность преуспеть, предоставляя себя для общения",
  "Открываясь. Общаясь.",
  "И даже зарабатывая на этом",
  "Приглашаю всех пользоваться моим сервисом",
  "И находить что-то необычное в себе и других"
];
function About() {
  const [phrase, setPhrase] = useState(text[0]);
  const [newPhrase, setNewPhrase] = useState("");
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const one = useRef(null);
  const two = useRef(null);
  const move = useRef(null);
  useRef(0);
  useEffect(() => {
    let t = text[count];
    if (t) {
      setNewPhrase(t);
    } else {
      navigate("/");
    }
  }, [count]);
  function onClick() {
    animate();
    setCount((p) => p + 1);
  }
  function animate() {
    if (one.current && two.current && move.current) {
      one.current.classList.add("transition-all", "duration-700");
      one.current.classList.add("disapear");
      setTimeout(() => {
        setPhrase(text[count + 1]);
      }, 600);
      setTimeout(() => {
        if (one.current && two.current && move.current) {
          one.current.classList.remove("transition-all", "duration-700");
          one.current.classList.remove("disapear");
        }
      }, 700);
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: "bg-about relative flex justify-center items-center w-full h-[100vh]", children: [
    /* @__PURE__ */ jsx(Link, { to: "/", className: "absolute left-0 top-0 p-10 text-xl text-white hover:underline", children: "Назад" }),
    /* @__PURE__ */ jsxs("div", { className: "flex relative w-fit h-fit", children: [
      /* @__PURE__ */ jsxs("div", { ref: one, onClick: () => onClick(), className: "bg-[#00CDFF] flex items-center \r\n        h-[80vh] w-[600px] p-10 cursor-pointer z-20 relative select-none text-5xl rounded-[46px] text-white", children: [
        /* @__PURE__ */ jsx("span", { className: "l leading-normal font-extrabold", children: phrase }),
        /* @__PURE__ */ jsx("span", { className: "absolute right-4", children: "→" })
      ] }),
      /* @__PURE__ */ jsxs("div", { ref: two, onClick: () => onClick(), className: "bg-[#00CDFF] flex items-center shadow-[#13768d] shadow-2xl \r\n        h-[80vh] w-[600px] p-10 absolute cursor-pointer z-10 select-none text-5xl rounded-[46px] text-white", children: [
        /* @__PURE__ */ jsx("span", { className: "l leading-normal font-extrabold", children: newPhrase }),
        /* @__PURE__ */ jsx("span", { className: "absolute right-4", children: "→" })
      ] }),
      /* @__PURE__ */ jsx("div", { ref: move, onClick: () => onClick(), className: "bg-[#00CDFF] absolute -left-4 top-4 flex items-center shadow-[#13768d] shadow-2xl \r\n        h-[80vh] w-[600px] p-10 cursor-pointer select-none text-5xl rounded-[46px] text-white" }),
      /* @__PURE__ */ jsx("img", { className: "h-[600px] shadow-[#cdff00] shadow-xl bg-white ml-14 border-[#cdff00] border-[2px]", src: ded })
    ] })
  ] });
}
function BecomePerson() {
  const [message, setMessage] = useState("");
  async function become() {
    let res = await fetch("/api/becomePerson", { method: "PUT" });
    let { message: message2 } = await res.json();
    setMessage(message2);
    store.checkToken();
  }
  return /* @__PURE__ */ jsx("div", { className: "w-full min-h-[100vh] h-fit pt-4 px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col px-6 pt-6 gap-4 w-full h-fit", children: [
    /* @__PURE__ */ jsx(Navigator, { pagename: "Стать участником" }),
    /* @__PURE__ */ jsx("div", { className: "bg-white text-xl bg-opacity-85 px-6 pt-6 w-full min-h-[100vh] h-fit rounded-t-xl", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-8", children: [
      /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "Станьте участником и получите возможность." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-4 items-end", children: [
        /* @__PURE__ */ jsx("div", { className: "w-[35px] rounded-full  h-[35px] bg-[#00CDFF] \r\n                            flex flex-row items-center gap-1 justify-center text-white", children: "1" }),
        /* @__PURE__ */ jsx("span", { children: "Создавать и редактировать профили." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-4 items-end", children: [
        /* @__PURE__ */ jsx("div", { className: "w-[35px] rounded-full  h-[35px] bg-[#00CDFF] \r\n                            flex flex-row items-center gap-1 justify-center text-white", children: "2" }),
        /* @__PURE__ */ jsx("span", { children: "Принимать и исполнять заявки" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-4 items-end", children: [
        /* @__PURE__ */ jsx("div", { className: "w-[35px] rounded-full  h-[35px] bg-[#00CDFF] \r\n                            flex flex-row items-center gap-1 justify-center text-white", children: "3" }),
        /* @__PURE__ */ jsx("span", { children: "Улучшать рейтинг и зарабатывать отзывы." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-4 items-end", children: [
        /* @__PURE__ */ jsx("div", { className: "w-[35px] rounded-full  h-[35px] bg-[#00CDFF] \r\n                            flex flex-row items-center gap-1 justify-center text-white", children: "4" }),
        /* @__PURE__ */ jsx("span", { children: "Общаться с заказчиками." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-6 px-14 items-center py-2 rounded-full bg-white w-fit", children: [
        /* @__PURE__ */ jsx("span", { children: "Торговать *******?" }),
        /* @__PURE__ */ jsx("button", { onClick: () => become(), className: "bg-[#00CDFF] px-4 py-1 rounded-full hover:text-white", children: "Да!" })
      ] }),
      /* @__PURE__ */ jsx("span", { children: message })
    ] }) })
  ] }) });
}
function ProfileCreate() {
  let blankPerson = {
    name: "",
    smallPrice: 0,
    bigPrice: 0,
    description: "",
    _id: "",
    category: "grand",
    image: "",
    gender: "",
    age: 0
  };
  const [person, setPerson] = useState(blankPerson);
  useRef(null);
  const [editing, setEditing] = useState(true);
  useParams();
  const [message, setMessage] = useState("");
  const imageRef = useRef(null);
  const [file, setFile] = useState(null);
  useEffect(() => {
    let fr = new FileReader();
    if (file) {
      fr.onload = function() {
        if (imageRef.current) {
          imageRef.current.src = fr.result;
        }
      };
      fr.readAsDataURL(file);
    } else {
      if (imageRef.current) {
        imageRef.current.src = person.image;
      }
    }
  }, [file]);
  async function create() {
    if (!person) {
      return;
    }
    let body = new FormData();
    Object.keys(person).forEach((key) => body.append(key, String(person[key])));
    body.append("files", file);
    let res = await fetch(
      "/api/postPersonByUser",
      {
        method: "POST",
        body
      }
    );
    let resBody = await res.json();
    if (res.status !== 200) {
      setMessage(JSON.stringify(resBody.message));
      return;
    }
    setMessage(resBody.message);
  }
  function formDataSetter(value, key) {
    setPerson((prev) => {
      prev[key] = value;
      return prev;
    });
  }
  let menu = () => {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-3", children: [
      /* @__PURE__ */ jsx(Link, { className: "px-6 py-2 border-[2px] border-yellow-500 bg-white bg-opacity-85 rounded-md hover:bg-yellow-500 hover:text-white w-fit", to: "/profiles", children: "К профилям" }),
      /* @__PURE__ */ jsx("span", { children: message }),
      /* @__PURE__ */ jsx("button", { onClick: () => create(), className: "px-6 py-2 border-[2px] border-green-500 bg-white bg-opacity-85 rounded-md hover:bg-green-500 hover:text-white w-fit ml-auto", children: "Создать" })
    ] });
  };
  if (person == null) {
    return /* @__PURE__ */ jsx("div", { className: "flex pt-10 px-10 justify-center w-full h-fit", children: /* @__PURE__ */ jsx("div", { className: "bg-white flex rounded-t-xl flex-col px-6 pt-6 pb-20 w-full h-[100vh]" }) });
  }
  if (editing)
    return /* @__PURE__ */ jsxs("div", { className: "flex pt-10 px-10 flex-col w-full h-fit min-h-[100vh] gap-2", children: [
      menu(),
      /* @__PURE__ */ jsx("div", { className: "person-bg rounded-t-xl", children: /* @__PURE__ */ jsxs("div", { className: "flex rounded-t-xl backdrop-blur-sm flex-col px-6 pt-6 pb-20 w-full h-fit min-h-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row h-fit", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "photoProfiles", children: !file ? /* @__PURE__ */ jsx("div", { className: "min-w-[500px] text-6xl flex cursor-pointer items-center justify-center bg-white rounded-xl bg-opacity-85 min-h-[400px]", children: /* @__PURE__ */ jsx("span", { children: "Вставить фото" }) }) : /* @__PURE__ */ jsx("img", { ref: imageRef, className: "rounded-xl cursor-pointer min-w-[500px] max-h-[400px] min-h-[400px] object-cover", width: 500, height: 400, src: `/${person.image}` }) }),
          /* @__PURE__ */ jsx("input", { id: "photoProfiles", className: "hidden", accept: "image/png, image/jpeg", onChange: (e) => setFile(e.target.files && e.target.files[0]), type: "file" }),
          /* @__PURE__ */ jsxs("div", { className: "pl-12 bg-white w-full bg-opacity-85 gap-4 ml-2 pb-4 pt-6 pr-4 rounded-2xl text-xl flex flex-col", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-10 flex-row items-center", children: [
              /* @__PURE__ */ jsx("span", { children: "Имя :" }),
              /* @__PURE__ */ jsx(TextInput, { value: person.name, setter: formDataSetter, property: "name" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 w-fit rounded-md", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-10 justify-between", children: [
                "Цена в час: ",
                /* @__PURE__ */ jsx(TextInput, { value: person.smallPrice, setter: formDataSetter, property: "smallPrice" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-10 justify-between", children: [
                "Цена за 8 часов: ",
                /* @__PURE__ */ jsx(TextInput, { value: person.bigPrice, setter: formDataSetter, property: "bigPrice" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-10", children: [
              /* @__PURE__ */ jsx("span", { children: "Категория:" }),
              /* @__PURE__ */ jsxs("select", { onChange: (e) => setPerson((prev) => {
                prev.category = e.target.value;
                return prev;
              }), className: "flex flex-row items-center gap-10 justify-between", children: [
                /* @__PURE__ */ jsx("option", { value: "grand", children: "grand" }),
                /* @__PURE__ */ jsx("option", { value: "gypsy", children: "gypsy" }),
                /* @__PURE__ */ jsx("option", { value: "tadj", children: "tadj" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-10", children: [
              /* @__PURE__ */ jsx("span", { children: "Пол:" }),
              /* @__PURE__ */ jsxs("select", { onChange: (e) => setPerson((prev) => {
                prev.gender = e.target.value;
                return prev;
              }), className: "flex flex-row items-center gap-10 justify-between", children: [
                /* @__PURE__ */ jsx("option", { value: "grand", children: "man" }),
                /* @__PURE__ */ jsx("option", { value: "gypsy", children: "woman" }),
                /* @__PURE__ */ jsx("option", { value: "tadj", children: "trans" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-col w-full gap-4 bg-white bg-opacity-85 p-4 rounded-xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-xl px-4 py-2 bg-gradient-to-t border-[#00CDFF] from-[#00a6cc] to-[#32d9ff] to-90% rounded-full border-[2px] w-fit", children: [
            "Возраст: ",
            /* @__PURE__ */ jsx(TextInput, { value: person.age, setter: formDataSetter, property: "age" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-xl border-[#00CDFF] border-b-[2px] w-fit", children: "Описание" }),
          /* @__PURE__ */ jsx(TextInput, { area: true, className: "p-1 resize-none h-[200px] border-[1px] border-yellow-500", value: person.description, setter: formDataSetter, property: "description" })
        ] })
      ] }) })
    ] });
}
function TextInput({ value, property, setter, num = false, className = "p-1 border-[1px] border-yellow-500", area }) {
  const [inputValue, setInputValue] = useState(value);
  useEffect(() => {
    setInputValue(value);
  }, [value]);
  useEffect(() => {
    setter(inputValue, property);
  }, [inputValue]);
  if (area)
    return /* @__PURE__ */ jsx("textarea", { className, value: inputValue, onChange: (e) => setInputValue(e.target.value) });
  return /* @__PURE__ */ jsx("input", { className, value: inputValue, onChange: (e) => setInputValue(e.target.value), type: num ? "number" : "text" });
}
function Balance() {
  const [tokenData, setTokenData] = useState(false);
  const [paymentsTo, setPaymentsTo] = useState([]);
  const [paymentsFrom, setPaymentsFrom] = useState([]);
  useEffect(() => {
    checkToken();
  }, []);
  useEffect(() => {
    getPayments();
  }, [tokenData]);
  async function checkToken() {
    let res = await fetch("/auth/checktoken");
    let data = await res.json();
    setTokenData(data.message);
  }
  async function getPayments() {
    if (!tokenData) {
      return;
    }
    let res = await fetch(`api/paymentsByUser/${tokenData.id}`);
    let body = await res.json();
    setPaymentsFrom(body.from);
    setPaymentsTo(body.to);
    console.log(body);
  }
  return /* @__PURE__ */ jsx("div", { className: "flex p-10 flex-col w-full h-fit min-h-[100vh]", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4 rounded-xl w-full h-full p-6", children: tokenData ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "px-6 py-4 bg-white text-lg w-fit rounded-2xl bg-opacity-85", children: [
      /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Текущий баланс: " }),
      /* @__PURE__ */ jsx("span", { className: "border-b-[2px] border-black", children: tokenData.balance })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "px-6 py-4 w-full h-fit bg-white text-lg rounded-2xl bg-opacity-85", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xl font-bold pb-2 border-b-[2px] w-full border-black", children: "Операции: " }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 mt-2", children: [
        /* @__PURE__ */ jsx("span", { className: "border-black border-b-[2px] w-fit px-6 py-2 font-bold", children: "Кредит" }),
        /* @__PURE__ */ jsx("span", { className: "border-black border-b-[2px] w-fit px-6 py-2 font-bold", children: "Дебет" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: paymentsFrom.map((p, i) => /* @__PURE__ */ jsx(Payment, { id: tokenData.id, payment: p }, i)) }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: paymentsTo.map((p, i) => /* @__PURE__ */ jsx(Payment, { id: tokenData.id, payment: p }, i)) })
      ] })
    ] })
  ] }) : /* @__PURE__ */ jsx(Fragment, {}) }) });
}
function Payment({ payment, id }) {
  const infos = {
    "order_from": "Платеж за услугу",
    "order_accept": "Платеж за принятый заказ",
    "order_decline": "Возврат за отклоненный заказ"
  };
  return /* @__PURE__ */ jsxs("div", { className: "px-6 py-4 h-[305px] gap-1 border-black border-[1px] flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Источник:" }),
      /* @__PURE__ */ jsx("span", { className: "ml-3", children: payment.source == id ? "Вы" : payment.source })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Получатель:" }),
      /* @__PURE__ */ jsx("span", { className: "ml-3", children: payment.to == id ? "Вы" : payment.to })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Дата:" }),
      /* @__PURE__ */ jsx("span", { className: "ml-3", children: new Date(payment.date).toLocaleDateString() })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Информация:" }),
      /* @__PURE__ */ jsx("span", { className: "ml-3", children: infos[payment.info] ? infos[payment.info] : payment.info })
    ] }),
    /* @__PURE__ */ jsxs("span", { className: "mt-auto font-bold border-b-[2px] border-black", children: [
      "Всего: ",
      payment.total
    ] })
  ] });
}
const url = "http://89.223.122.165:5173";
const routes = [
  {
    path: "",
    element: /* @__PURE__ */ jsx(Layout, {}),
    errorElement: /* @__PURE__ */ jsx(ErrorPage, {}),
    children: [
      {
        path: "/",
        loader: mainPageLoader,
        element: /* @__PURE__ */ jsx(MainPage, {})
      },
      {
        path: "/person/:id",
        element: /* @__PURE__ */ jsx(PersonPage, {})
      },
      {
        path: "/orders",
        element: /* @__PURE__ */ jsx(Orders, {})
      },
      {
        path: "/addBalance",
        element: /* @__PURE__ */ jsx(AddBalance, {})
      },
      {
        path: "/requests",
        element: /* @__PURE__ */ jsx(RequestOrders, {})
      },
      {
        path: "/person/:id/order",
        element: /* @__PURE__ */ jsx(OrderPage, {})
      },
      {
        path: "/favorites",
        element: /* @__PURE__ */ jsx(FavoritesPage, {})
      },
      {
        path: "/profiles",
        element: /* @__PURE__ */ jsx(Profiles, {})
      },
      {
        path: "/profiles/:id/edit",
        element: /* @__PURE__ */ jsx(ProfileEdit, {})
      },
      {
        path: "/profiles/create",
        element: /* @__PURE__ */ jsx(ProfileCreate, {})
      },
      {
        path: "/become",
        element: /* @__PURE__ */ jsx(BecomePerson, {})
      },
      {
        path: "/balance",
        element: /* @__PURE__ */ jsx(Balance, {})
      }
    ]
  },
  {
    path: "/login",
    element: /* @__PURE__ */ jsx(LoginPage, {})
  },
  {
    path: "/about",
    element: /* @__PURE__ */ jsx(About, {})
  }
];
async function mainPageLoader() {
  let data = await fetch(`${url}/api/persons`);
  let persons = await data.json();
  return persons;
}
async function render(req) {
  let origin = `${req.protocol}://${req.get("host")}`;
  let url2 = new URL(req.originalUrl || req.url, origin);
  let handler = createStaticHandler(routes);
  req = new Request(url2);
  let context = await handler.query(req);
  let router = createStaticRouter(
    handler.dataRoutes,
    context
  );
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(
      StaticRouterProvider,
      {
        router,
        context
      }
    )
  );
  return { html };
}
export {
  render
};
