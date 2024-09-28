import { jsx, jsxs } from "react/jsx-runtime";
import { L as Layout } from "./Layout-CWRRA9fY.js";
import { Progress, Chip } from "@nextui-org/react";
import "react";
import "./useMainStore-BNNQMtH2.js";
import "@inertiajs/react";
import { t } from "./translations-CCbcAZo6.js";
import { P as PageContent } from "./PageContent-BjQSMN_k.js";
import "react-toastify";
import "./useMediaManager-B4H2TCSK.js";
import "@tackboon/react-grid-rearrange";
import "dayjs";
import { Step0 } from "./Step0-D8PLHFZV.js";
import { Step1 } from "./Step1-CqRd9eMg.js";
import { Step2 } from "./Step2-ByrxwJsD.js";
import { Step3 } from "./Step3-F8afkyG5.js";
import { Step4 } from "./Step4-DV3wRyNa.js";
import { Step5 } from "./Step5-BMr9YZQL.js";
import { Step6 } from "./Step6-BXKTCzAP.js";
import { SongDetails } from "./SongDetails-BnM1FBIL.js";
import "./useColorMode-DIaHfFiE.js";
import "react-pro-sidebar";
import "framer-motion";
import "zustand";
import "zustand/middleware";
import "axios";
import "numeral";
import "yup";
const Page = ({ song }) => {
  console.log("song", song);
  const { step } = song;
  return /* @__PURE__ */ jsx(PageContent, { className: "max-w-screen-xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "w-full px-3", children: [
    /* @__PURE__ */ jsx("div", { className: "select-none pointer-events-none", children: /* @__PURE__ */ jsx(
      Progress,
      {
        value: progressPercent * step,
        color: "primary",
        label: wizzard.map((e) => /* @__PURE__ */ jsx(
          Chip,
          {
            color: "primary",
            className: "ring-4 ring-background",
            size: "sm",
            children: e
          },
          e
        )),
        classNames: {
          base: "relative",
          labelWrapper: "-inset-x-2 -top-1.5 absolute z-10",
          label: "w-full flex justify-between"
        }
      }
    ) }),
    /* @__PURE__ */ jsxs("section", { className: "mt-10 flex gap-20", children: [
      /* @__PURE__ */ jsx("div", { className: "w-60", children: /* @__PURE__ */ jsx(SongDetails, {}) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        step === 0 && /* @__PURE__ */ jsx(Step0, {}),
        step === 1 && /* @__PURE__ */ jsx(Step1, {}),
        step === 2 && /* @__PURE__ */ jsx(Step2, {}),
        step === 3 && /* @__PURE__ */ jsx(Step3, {}),
        step === 4 && /* @__PURE__ */ jsx(Step4, {}),
        step === 5 && /* @__PURE__ */ jsx(Step5, {}),
        step === 6 && /* @__PURE__ */ jsx(Step6, {})
      ] })
    ] })
  ] }) });
};
const wizzard = [
  "Género",
  "Mood",
  "Artista",
  "Básicos",
  "Detalles",
  "Letra",
  "Música"
];
const progressPercent = 100 / (wizzard.length - 1);
Page.layout = (page) => /* @__PURE__ */ jsx(Layout, { ...{ children: page, pageTitle: String(t("Song")) } });
export {
  Page as default
};
