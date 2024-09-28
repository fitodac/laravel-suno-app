import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { useForm, Link } from "@inertiajs/react";
import { t } from "./translations-CCbcAZo6.js";
import { Input, Button } from "@nextui-org/react";
import { AuthLayout1 } from "./AuthLayout1-Dv8XLxe8.js";
import { AuthLayout2 } from "./AuthLayout2-2skAmo5S.js";
import { AuthLayout3 } from "./AuthLayout3-DXGl3gwa.js";
import { StatusMessage } from "./StatusMessage-d87uA1AX.js";
import "./useColorMode-DIaHfFiE.js";
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
const pageTitle = t("Forgot your password?").toString();
const Page = ({ status, layout }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: ""
  });
  const inputEmail = useRef(null);
  useEffect(() => {
    var _a;
    (_a = inputEmail.current) == null ? void 0 : _a.focus();
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.email"), {
      onSuccess: () => reset()
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "w-72 space-y-7", children: [
    /* @__PURE__ */ jsx("div", { className: "text-sm leading-tight", children: t("forgot-password-message") }),
    status && /* @__PURE__ */ jsx(StatusMessage, { ...{ status } }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("fieldset", { className: "space-y-1", children: /* @__PURE__ */ jsx(
        Input,
        {
          id: "email",
          type: "email",
          name: "email",
          label: "Email",
          value: data.email,
          isDisabled: processing,
          ref: inputEmail,
          isInvalid: errors.email ? true : false,
          errorMessage: errors.email,
          onValueChange: (e) => setData("email", e)
        }
      ) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          color: "primary",
          fullWidth: true,
          type: "submit",
          spinner: /* @__PURE__ */ jsx("i", { className: "ri-loader-line ri-lg animate-spin" }),
          isLoading: processing,
          children: t("Email password reset link")
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
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
      ) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        Button,
        {
          as: Link,
          disableRipple: true,
          color: "primary",
          variant: "light",
          className: "p-0 h-auto hover:!bg-transparent",
          href: route("register"),
          children: t("Don't have an Account?")
        }
      ) })
    ] })
  ] }) });
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
