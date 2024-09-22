import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { t } from "./translations-CfzOLbPg.js";
import { useForm, Link } from "@inertiajs/react";
import { Input, Button } from "@nextui-org/react";
import { AuthLayout1 } from "./AuthLayout1-Dv8XLxe8.js";
import { AuthLayout2 } from "./AuthLayout2-2skAmo5S.js";
import { AuthLayout3 } from "./AuthLayout3-DXGl3gwa.js";
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
const pageTitle = t("Register").toString();
const Page = ({ layout }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  const [pwdVisibility, setPwdVisibility] = useState(false);
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("register"));
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "w-72 space-y-7", children: /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsx("fieldset", { className: "space-y-1", children: /* @__PURE__ */ jsx(
      Input,
      {
        id: "name",
        name: "name",
        type: "text",
        label: t("Name"),
        value: data.name,
        isDisabled: processing,
        isInvalid: errors.name ? true : false,
        errorMessage: errors.name,
        onValueChange: (e) => setData("name", e)
      }
    ) }),
    /* @__PURE__ */ jsx("fieldset", { className: "space-y-1", children: /* @__PURE__ */ jsx(
      Input,
      {
        id: "email",
        name: "email",
        type: "email",
        label: "Email",
        value: data.email,
        isDisabled: processing,
        isInvalid: errors.email ? true : false,
        errorMessage: errors.email,
        onValueChange: (e) => setData("email", e)
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
        errorMessage: errors.password,
        onValueChange: (e) => setData("password", e),
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
    /* @__PURE__ */ jsx("fieldset", { className: "space-y-1", children: /* @__PURE__ */ jsx(
      Input,
      {
        id: "password_confirmation",
        name: "password_confirmation",
        type: pwdVisibility ? "text" : "password",
        label: t("Confirm password"),
        value: data.password_confirmation,
        isDisabled: processing,
        errorMessage: errors.password_confirmation,
        isInvalid: errors.password_confirmation ? true : false,
        onValueChange: (e) => setData("password_confirmation", e),
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
    /* @__PURE__ */ jsx(
      Button,
      {
        color: "primary",
        fullWidth: true,
        type: "submit",
        spinner: /* @__PURE__ */ jsx("i", { className: "ri-loader-line ri-lg animate-spin" }),
        isLoading: processing,
        children: t("Register me")
      }
    ),
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
  ] }) }) }) });
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
