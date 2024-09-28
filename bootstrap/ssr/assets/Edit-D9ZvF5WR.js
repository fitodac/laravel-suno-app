import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { L as Layout } from "./Layout-CWRRA9fY.js";
import { t } from "./translations-CCbcAZo6.js";
import { Card, CardBody, Button } from "@nextui-org/react";
import "react";
import "./useMainStore-BNNQMtH2.js";
import { router } from "@inertiajs/react";
import { P as PageHeader } from "./PageHeader-M3dsieGA.js";
import { P as PageContent } from "./PageContent-BjQSMN_k.js";
import "react-toastify";
import "./useMediaManager-B4H2TCSK.js";
import "@tackboon/react-grid-rearrange";
import "dayjs";
import { FormBasicInformation } from "./FormBasicInformation-BmdkrUd5.js";
import "./ClassicInput-ByqbGa8A.js";
import "@tiptap/starter-kit";
import "@tiptap/extension-character-count";
import "@tiptap-pro/extension-drag-handle-react";
import "@tiptap/extension-color";
import "@tiptap/extension-text-style";
import "@tiptap/extension-placeholder";
import { FormPassword } from "./FormPassword-ztRUKaVi.js";
import "./useColorMode-DIaHfFiE.js";
import "react-pro-sidebar";
import "framer-motion";
import "zustand";
import "zustand/middleware";
import "axios";
import "numeral";
const sendEmailAccountConfirmation = () => {
  router.post(route("verification.send"));
};
const pageTitle = t("My account");
const Page = ({ auth: { user }, mustVerifyEmail, status }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: pageTitle,
        classNames: { wrapper: "max-w-screen-xl px-6" }
      }
    ),
    /* @__PURE__ */ jsx(PageContent, { className: "max-w-screen-xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-6 lg:gap-12", children: /* @__PURE__ */ jsxs("div", { className: "col-span-2 space-y-12", children: [
      mustVerifyEmail && user.email_verified_at === null && /* @__PURE__ */ jsx(Fragment, { children: status !== "verification-link-sent" ? /* @__PURE__ */ jsxs(
        Card,
        {
          shadow: "none",
          className: "bg-danger-50 text-danger-500 pl-14 pr-6 py-6",
          children: [
            /* @__PURE__ */ jsx("i", { className: "ri-mail-unread-line ri-2x left-3 top-4 absolute" }),
            /* @__PURE__ */ jsx(CardBody, { className: "p-0", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("p", { className: "text-danger font-light", children: t("Your email address is unverified") }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                Button,
                {
                  size: "sm",
                  color: "danger",
                  onPress: sendEmailAccountConfirmation,
                  children: t("email-verify-link")
                }
              ) })
            ] }) })
          ]
        }
      ) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
        Card,
        {
          shadow: "none",
          className: "bg-success-50 text-success-500 pl-14 pr-6 py-6",
          children: [
            /* @__PURE__ */ jsx("i", { className: "ri-mail-check-line ri-2x left-3 top-3 absolute" }),
            /* @__PURE__ */ jsx(CardBody, { className: "text-sm font-light p-0", children: t("verification-link-sent-notice") })
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsx(FormBasicInformation, {}),
      /* @__PURE__ */ jsx(FormPassword, {})
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "h-20" })
  ] });
};
Page.layout = (page) => /* @__PURE__ */ jsx(Layout, { ...{ children: page, pageTitle: String(pageTitle) } });
export {
  Page as default
};
