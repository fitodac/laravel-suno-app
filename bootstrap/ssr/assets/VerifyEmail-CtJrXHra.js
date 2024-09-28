import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { t } from "./translations-CCbcAZo6.js";
import { useForm, Link } from "@inertiajs/react";
import { Button } from "@nextui-org/react";
import { AuthLayout1 } from "./AuthLayout1-Dv8XLxe8.js";
import { AuthLayout2 } from "./AuthLayout2-2skAmo5S.js";
import { AuthLayout3 } from "./AuthLayout3-DXGl3gwa.js";
import { StatusMessage } from "./StatusMessage-d87uA1AX.js";
import "./useColorMode-DIaHfFiE.js";
import "react";
import "./useMainStore-BNNQMtH2.js";
import "zustand";
import "zustand/middleware";
import "./Toastify-C9zJy1p3.js";
import "react-toastify";
import "./useMediaManager-B4H2TCSK.js";
import "axios";
import "numeral";
import "@tackboon/react-grid-rearrange";
import "dayjs";
import "./pexels-pramodtiwari-14127564-DCXoSYO9.js";
const pageTitle = t("Email Verification").toString();
const Page = ({ status, layout }) => {
  const { post, processing } = useForm({});
  const submit = (e) => {
    e.preventDefault();
    post(route("verification.send"), {
      preserveScroll: true
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "w-72 space-y-7", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: t("email-verification-message-0") }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: t("email-verification-message-1") }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: t("email-verification-message-2") })
      ] }),
      status && /* @__PURE__ */ jsx(StatusMessage, { ...{ status } }),
      /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          color: "primary",
          fullWidth: true,
          isLoading: processing,
          children: t("Resend Verification Email")
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(
      Button,
      {
        as: Link,
        disableRipple: true,
        color: "primary",
        variant: "light",
        className: "p-0 h-auto hover:!bg-transparent",
        href: route("login"),
        children: t("Already registered?")
      }
    ) })
  ] });
};
Page.layout = (page) => {
  switch (page.props.layout) {
    case "layout1":
      return /* @__PURE__ */ jsx(AuthLayout1, { ...{ children: page, pageTitle } });
    case "layout2":
      return /* @__PURE__ */ jsx(AuthLayout2, { ...{ children: page, pageTitle } });
    case "layout3":
      return /* @__PURE__ */ jsx(AuthLayout3, { ...{ children: page, pageTitle } });
    default:
      return /* @__PURE__ */ jsx(AuthLayout1, { ...{ children: page, pageTitle } });
  }
};
export {
  Page as default
};
