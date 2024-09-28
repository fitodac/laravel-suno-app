import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { L as Layout } from "./Layout-B-4lKQH7.js";
import { t } from "./translations-CCbcAZo6.js";
import { Button, Divider, ButtonGroup, Switch, Checkbox } from "@nextui-org/react";
import "./useMainStore-BNNQMtH2.js";
import { u as useGeneratePassword } from "./useGeneratePassword-C0QxrA1n.js";
import { useForm } from "@inertiajs/react";
import { P as PageHeader } from "./PageHeader-M3dsieGA.js";
import { P as PageContent } from "./PageContent-BjQSMN_k.js";
import { toast } from "react-toastify";
import "./useMediaManager-B4H2TCSK.js";
import "@tackboon/react-grid-rearrange";
import "dayjs";
import { C as ClassicInput } from "./ClassicInput-ByqbGa8A.js";
import "@tiptap/starter-kit";
import "@tiptap/extension-character-count";
import "@tiptap-pro/extension-drag-handle-react";
import "@tiptap/extension-color";
import "@tiptap/extension-text-style";
import "@tiptap/extension-placeholder";
import "./useColorMode-DIaHfFiE.js";
import "react-pro-sidebar";
import "framer-motion";
import "zustand";
import "zustand/middleware";
import "axios";
import "numeral";
const Page = ({ user }) => {
  const [pwdVisibility, setPwdVisibility] = useState(false);
  const { generatePassword } = useGeneratePassword(16);
  const fillPassword = () => {
    const val = generatePassword();
    setData("password", val);
  };
  const { data, setData, post, processing, errors, clearErrors } = useForm({
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    role: 3,
    status: "enabled",
    send_details: true,
    basic_information: true
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("dashboard.user.store", { user }), {
      preserveScroll: true,
      // @ts-ignore
      onSuccess: (resp) => {
        if (resp.props.flash && resp.props.flash.success) {
          toast.success(t(resp.props.flash.success));
        }
      },
      onError: (errors2) => console.log(errors2)
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHeader, { title: user ? t("Edit user") : t("Create user"), children: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
      Button,
      {
        size: "sm",
        color: "primary",
        variant: "flat",
        startContent: /* @__PURE__ */ jsx("i", { className: "ri-arrow-left-line" }),
        onPress: () => window.history.back(),
        children: t("Back")
      }
    ) }) }),
    /* @__PURE__ */ jsx(PageContent, { children: /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "max-w-md space-y-10 lg:max-w-3xl", children: [
      /* @__PURE__ */ jsxs("section", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "font-medium flex gap-5 items-center", children: [
          t("Basic information"),
          /* @__PURE__ */ jsx(Divider, { className: "flex-1" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-x-6 gap-y-5 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsx("fieldset", { children: /* @__PURE__ */ jsx(
            ClassicInput,
            {
              isRequired: true,
              label: t("Username"),
              variant: "faded",
              value: data.username,
              isInvalid: errors.username ? true : false,
              errorMessage: errors.username,
              onKeyUp: () => clearErrors("username"),
              isDisabled: processing,
              onValueChange: (e) => setData("username", e)
            }
          ) }),
          /* @__PURE__ */ jsx("fieldset", {}),
          /* @__PURE__ */ jsx("fieldset", { children: /* @__PURE__ */ jsx(
            ClassicInput,
            {
              isRequired: true,
              label: t("Name"),
              variant: "faded",
              value: data.name,
              isInvalid: errors.name ? true : false,
              errorMessage: errors.name,
              onKeyUp: () => clearErrors("name"),
              isDisabled: processing,
              onValueChange: (e) => setData("name", e)
            }
          ) }),
          /* @__PURE__ */ jsx("fieldset", { children: /* @__PURE__ */ jsx(
            ClassicInput,
            {
              isRequired: true,
              label: t("Lastname"),
              variant: "faded",
              value: data.lastname,
              isInvalid: errors.lastname ? true : false,
              errorMessage: errors.lastname,
              onKeyUp: () => clearErrors("lastname"),
              isDisabled: processing,
              onValueChange: (e) => setData("lastname", e)
            }
          ) }),
          /* @__PURE__ */ jsx("fieldset", { children: /* @__PURE__ */ jsx(
            ClassicInput,
            {
              isRequired: true,
              label: t("Email"),
              variant: "faded",
              value: data.email,
              isInvalid: errors.email ? true : false,
              errorMessage: errors.email,
              onKeyUp: () => clearErrors("email"),
              isDisabled: processing,
              onValueChange: (e) => setData("email", e)
            }
          ) }),
          /* @__PURE__ */ jsxs("fieldset", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-small text-foreground-500 select-none", children: t("Role") }),
            /* @__PURE__ */ jsxs(ButtonGroup, { fullWidth: true, isDisabled: processing, children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  color: "primary",
                  className: "text-xs",
                  onPress: () => setData("role", 3),
                  variant: data.role === 3 ? "solid" : "flat",
                  children: "User"
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  color: "primary",
                  className: "text-xs",
                  onPress: () => setData("role", 2),
                  variant: data.role === 2 ? "solid" : "flat",
                  children: "Admin"
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  color: "primary",
                  className: "text-xs",
                  onPress: () => setData("role", 1),
                  variant: data.role === 1 ? "solid" : "flat",
                  children: "Super Admin"
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "font-medium flex gap-5 items-center", children: [
          t(`Security & status`),
          /* @__PURE__ */ jsx(Divider, { className: "flex-1" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-x-6 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsx("fieldset", { children: /* @__PURE__ */ jsx(
            ClassicInput,
            {
              isRequired: true,
              label: t("Password"),
              variant: "faded",
              value: data.password,
              errorMessage: errors.password,
              type: pwdVisibility ? "text" : "password",
              isInvalid: errors.password ? true : false,
              onKeyUp: () => clearErrors("password"),
              description: t(
                "The password must be at least 8 characters long"
              ),
              endContent: /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  tabIndex: -1,
                  onClick: () => setPwdVisibility(!pwdVisibility),
                  children: pwdVisibility ? /* @__PURE__ */ jsx("i", { className: "ri-eye-fill ri-lg text-primary" }) : /* @__PURE__ */ jsx("i", { className: "ri-eye-off-fill ri-lg text-zinc-400 dark:text-zinc-600" })
                }
              ),
              isDisabled: processing,
              onValueChange: (e) => setData("password", e)
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "pt-2 lg:pt-6", children: /* @__PURE__ */ jsx(
            Button,
            {
              size: "sm",
              color: "primary",
              variant: "ghost",
              className: "h-10 px-5",
              radius: "md",
              onPress: fillPassword,
              isDisabled: processing,
              children: "Generate password"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-1 pt-6", children: [
            /* @__PURE__ */ jsx("label", { className: "text-small text-foreground-500 select-none", children: t("User status") }),
            /* @__PURE__ */ jsx(
              Switch,
              {
                size: "sm",
                "aria-label": "Remember me",
                value: "1",
                isDisabled: processing,
                isSelected: data.status === "enabled",
                onValueChange: (val) => setData("status", val ? "enabled" : "disabled"),
                className: "mx-2",
                children: t("Is the user enabled?")
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-4 pt-5 md:flex-row lg:gap-10", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            size: "sm",
            isSelected: data.send_details,
            onValueChange: (val) => setData("send_details", val),
            classNames: {
              base: "items-start",
              label: "-top-1 relative lg:-top-0.5"
            },
            isDisabled: processing,
            children: /* @__PURE__ */ jsx("div", { className: "text-sm text-ellipsis", children: t(
              "Would you like to send the new user their account details via email?"
            ) })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "submit",
            color: "primary",
            className: "w-40",
            isLoading: processing,
            children: t("Save")
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "h-20" })
  ] });
};
Page.layout = (page) => /* @__PURE__ */ jsx(
  Layout,
  {
    ...{
      children: page,
      pageTitle: `${t("User")} ${page.props.user && page.props.user.username}`
    }
  }
);
export {
  Page,
  Page as default
};
