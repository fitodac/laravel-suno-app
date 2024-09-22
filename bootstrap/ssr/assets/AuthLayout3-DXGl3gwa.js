import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { usePage, Head } from "@inertiajs/react";
import { u as useColorMode } from "./useColorMode-DIaHfFiE.js";
import "react";
import { T as Toastify } from "./Toastify-C9zJy1p3.js";
import { t as theme } from "./useMediaManager-B4H2TCSK.js";
import "react-toastify";
import "@tackboon/react-grid-rearrange";
import "dayjs";
import { I as Image } from "./pexels-pramodtiwari-14127564-DCXoSYO9.js";
import "./useMainStore-BNNQMtH2.js";
import "zustand";
import "zustand/middleware";
import "@nextui-org/react";
import "axios";
import "numeral";
const AuthLayout3 = ({ children, pageTitle }) => {
  const { colorMode, changeColorMode } = useColorMode();
  usePage();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: pageTitle }),
    /* @__PURE__ */ jsx("main", { className: "bg-background w-full h-full min-h-screen grid place-content-center px-6 2xl:px-0", children: /* @__PURE__ */ jsxs("div", { className: "w-full flex overflow-hidden md:border md:border-default md:rounded-2xl", children: [
      /* @__PURE__ */ jsx("section", { className: "h-full hidden w-1/2 md:flex", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: Image,
          alt: "Background image",
          loading: "lazy",
          className: "w-full h-full object-cover"
        }
      ) }),
      /* @__PURE__ */ jsx("section", { className: "flex-1 flex justify-center p-14", children: /* @__PURE__ */ jsxs("div", { className: "max-w-lg", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: theme[colorMode].logo,
            alt: "Logo",
            className: "w-14 mx-auto"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 mt-10", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-bold", children: pageTitle }),
          children
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(Toastify, {})
  ] });
};
export {
  AuthLayout3
};
