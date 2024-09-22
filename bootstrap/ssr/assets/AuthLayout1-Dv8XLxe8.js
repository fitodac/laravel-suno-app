import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { usePage, Head } from "@inertiajs/react";
import { u as useColorMode } from "./useColorMode-DIaHfFiE.js";
import "react";
import { T as Toastify } from "./Toastify-C9zJy1p3.js";
import { t as theme } from "./useMediaManager-B4H2TCSK.js";
import "react-toastify";
import "@tackboon/react-grid-rearrange";
import "dayjs";
import "./useMainStore-BNNQMtH2.js";
import "zustand";
import "zustand/middleware";
import "@nextui-org/react";
import "axios";
import "numeral";
const AuthLayout1 = ({ children, pageTitle }) => {
  const { colorMode, changeColorMode } = useColorMode();
  usePage();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: pageTitle }),
    /* @__PURE__ */ jsx("main", { className: "bg-background w-full min-h-screen flex justify-center items-center", children: /* @__PURE__ */ jsxs("section", { className: "max-w-lg", children: [
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
    ] }) }),
    /* @__PURE__ */ jsx(Toastify, {})
  ] });
};
export {
  AuthLayout1
};
