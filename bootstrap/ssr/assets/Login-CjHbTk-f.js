import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useForm, Link } from "@inertiajs/react";
import { t } from "./translations-CCbcAZo6.js";
import { Input, Switch, Button } from "@nextui-org/react";
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
const pageTitle = t("Log in").toString();
const Page = ({ status, canResetPassword, layout = "layout1" }) => {
  const { data, setData, post, processing, errors, reset } = useForm(
    {
      login: "johndoe",
      password: "password",
      remember: true
    }
  );
  const [pwdVisibility, setPwdVisibility] = useState(false);
  const inputLogin = useRef(null);
  useEffect(() => {
    var _a;
    (_a = inputLogin.current) == null ? void 0 : _a.focus();
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("login"), {
      onError: (error) => console.log(error)
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "w-72 space-y-7", children: [
    status && /* @__PURE__ */ jsx(StatusMessage, { ...{ status } }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("fieldset", { className: "space-y-1", children: /* @__PURE__ */ jsx(
        Input,
        {
          id: "login",
          type: "text",
          name: "login",
          label: t("Username or Email"),
          value: data.login,
          isDisabled: processing,
          ref: inputLogin,
          isInvalid: errors.login ? true : false,
          errorMessage: errors.login,
          onValueChange: (e) => setData("login", e)
        }
      ) }),
      /* @__PURE__ */ jsx("fieldset", { className: "space-y-1", children: /* @__PURE__ */ jsx(
        Input,
        {
          id: "password",
          type: pwdVisibility ? "text" : "password",
          name: "password",
          label: t("Password"),
          value: data.password,
          isDisabled: processing,
          isInvalid: errors.password ? true : false,
          onValueChange: (e) => setData("password", e),
          errorMessage: errors.password,
          endContent: /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              tabIndex: -1,
              onClick: () => setPwdVisibility(!pwdVisibility),
              children: pwdVisibility ? /* @__PURE__ */ jsx("i", { className: "ri-eye-fill ri-lg text-primary" }) : /* @__PURE__ */ jsx("i", { className: "ri-eye-off-fill ri-lg text-zinc-400 dark:text-zinc-600" })
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        Switch,
        {
          size: "sm",
          name: "remember",
          "aria-label": "Remember me",
          value: data.remember ? "1" : "0",
          isDisabled: processing,
          isSelected: data.remember,
          onValueChange: (e) => setData("remember", e),
          children: t("Remember me")
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
          children: t("Log in")
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        canResetPassword && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          Button,
          {
            as: Link,
            disableRipple: true,
            color: "primary",
            variant: "light",
            className: "p-0 h-auto hover:!bg-transparent",
            href: route("password.request"),
            children: t("Forgot your password?")
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
    ] }) })
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
