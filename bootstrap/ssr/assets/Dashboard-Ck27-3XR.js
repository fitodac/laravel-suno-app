import { jsx, jsxs } from "react/jsx-runtime";
import { L as Layout } from "./Layout-CWRRA9fY.js";
import "react";
import "./useMainStore-BNNQMtH2.js";
import { Link } from "@inertiajs/react";
import { t } from "./translations-CCbcAZo6.js";
import { P as PageContent } from "./PageContent-BjQSMN_k.js";
import "react-toastify";
import "./useMediaManager-B4H2TCSK.js";
import "@tackboon/react-grid-rearrange";
import "dayjs";
import "./useColorMode-DIaHfFiE.js";
import "react-pro-sidebar";
import "framer-motion";
import "@nextui-org/react";
import "zustand";
import "zustand/middleware";
import "axios";
import "numeral";
const Page = ({ songs, available_slots }) => {
  return /* @__PURE__ */ jsx(PageContent, { className: "max-w-screen-xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "", children: [
    /* @__PURE__ */ jsx("h3", { className: "", children: "Mis canciones" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3 mt-5", children: [
      songs && songs.map((song) => /* @__PURE__ */ jsxs(
        Link,
        {
          href: route("song.edit", { song }),
          className: "border border-default-500 h-24 grid place-content-center aspect-video rounded-xl",
          children: [
            "Song ",
            song.id
          ]
        },
        `song-slot-${song.id}`
      )),
      available_slots > 0 && Array.from({ length: available_slots }).map((_, idx) => /* @__PURE__ */ jsx(
        Link,
        {
          href: route("song.create"),
          className: "text-foreground-500 border border-dashed border-default-500 h-24 grid place-content-center aspect-video rounded-xl",
          children: /* @__PURE__ */ jsx("span", { className: "", children: "New song" })
        },
        `slot-${idx}`
      ))
    ] })
  ] }) });
};
Page.layout = (page) => /* @__PURE__ */ jsx(Layout, { ...{ children: page, pageTitle: String(t("Dashboard")) } });
export {
  Page as default
};
