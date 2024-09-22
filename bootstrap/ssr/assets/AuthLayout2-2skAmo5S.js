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
const AuthLayout2 = ({ children, pageTitle }) => {
  const { colorMode, changeColorMode } = useColorMode();
  usePage();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: pageTitle }),
    /* @__PURE__ */ jsxs("main", { className: "bg-background w-full min-h-screen flex justify-center items-center", children: [
      /* @__PURE__ */ jsx("section", { className: "h-full min-h-screen hidden w-1/2 md:flex", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: Image,
          alt: "Background image",
          loading: "lazy",
          className: "w-full h-auto object-cover"
        }
      ) }),
      /* @__PURE__ */ jsx("section", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-lg", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: theme[colorMode].logo,
            alt: "Logo",
            className: "w-32 mx-auto"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 mt-10", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-bold", children: pageTitle }),
          children
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Toastify, {})
  ] });
};
export {
  AuthLayout2
};
