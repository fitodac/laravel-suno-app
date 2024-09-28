import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { L as Layout } from "./Layout-B-4lKQH7.js";
import { Card, CardBody, CheckboxGroup, Checkbox, Button } from "@nextui-org/react";
import "./useMainStore-BNNQMtH2.js";
import { useForm, Link } from "@inertiajs/react";
import { t } from "./translations-CCbcAZo6.js";
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
import "./RolesList-Dds8kLj3.js";
import { DeleteRole } from "./DeleteRole-o_8CGC05.js";
import "./useColorMode-DIaHfFiE.js";
import "react-pro-sidebar";
import "framer-motion";
import "zustand";
import "zustand/middleware";
import "axios";
import "numeral";
const Page = ({ role, permissions, protected_roles }) => {
  const isProtected = useRef(
    (role && (protected_roles == null ? void 0 : protected_roles.includes(role.name))) ?? false
  );
  const inputName = useRef(null);
  const { data, setData, post, patch, processing, errors, clearErrors } = useForm({
    name: "",
    permissions: []
  });
  useEffect(() => {
    var _a;
    (_a = inputName.current) == null ? void 0 : _a.focus();
  }, []);
  useEffect(() => {
    if (role) {
      setData({
        name: role.name,
        permissions: role.permissions.map((p) => p.name)
      });
    }
  }, [role]);
  const submit = (e) => {
    e.preventDefault();
    if (role) {
      patch(route("dashboard.role.update", { role }), {
        preserveScroll: true,
        // @ts-ignore
        onSuccess: (resp) => {
          if (resp.props.flash && resp.props.flash.success) {
            toast.success(t(resp.props.flash.success));
          }
        },
        onError: (errors2) => console.log(errors2)
      });
    } else {
      post(route("dashboard.role.store"), {
        preserveScroll: true,
        // @ts-ignore
        onSuccess: (resp) => {
          if (resp.props.flash && resp.props.flash.success) {
            toast.success(t(resp.props.flash.success));
          }
        },
        onError: (errors2) => console.log(errors2)
      });
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHeader, { title: role ? t("Role") : t("New Role") }),
    /* @__PURE__ */ jsxs(PageContent, { children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-md space-y-10 lg:max-w-3xl", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-x-6 gap-y-10 lg:grid-cols-2 lg:gap-x-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-52 space-y-6 lg:order-2", children: [
          /* @__PURE__ */ jsx(
            Card,
            {
              className: "bg-content4 mt-5 min-h-20",
              shadow: "none",
              radius: "md",
              children: /* @__PURE__ */ jsx(CardBody, { children: /* @__PURE__ */ jsx("div", { className: "text-foreground-800 space-y-2", children: role ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm text-right", children: "Total users with this role" }),
                /* @__PURE__ */ jsx("p", { className: "text-4xl font-light tracking-tighter text-right", children: role.users_count })
              ] }) : /* @__PURE__ */ jsx("p", { className: "text-sm", children: t("Dere are no users with this role") }) }) })
            }
          ),
          role && /* @__PURE__ */ jsx(DeleteRole, { ...{ role } })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-6", children: [
          /* @__PURE__ */ jsx("fieldset", { children: /* @__PURE__ */ jsx(
            ClassicInput,
            {
              isRequired: true,
              ref: inputName,
              variant: "faded",
              value: data.name,
              label: t("Role name"),
              isInvalid: errors.name ? true : false,
              errorMessage: errors.name,
              onKeyUp: () => clearErrors("name"),
              isDisabled: isProtected.current || processing,
              onValueChange: (e) => setData("name", e)
            }
          ) }),
          /* @__PURE__ */ jsx("fieldset", { className: "space-y-6", children: Object.keys(permissions).map((key) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            CheckboxGroup,
            {
              label: `${key} ${t("guards")}`,
              size: "sm",
              value: data.permissions,
              isDisabled: processing,
              onValueChange: (val) => {
                setData("permissions", val);
              },
              classNames: {
                label: "text-foreground text-sm font-medium capitalize"
              },
              children: permissions[key].map((e) => /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsx(
                Checkbox,
                {
                  value: e.name,
                  className: "py-3",
                  children: e.name
                },
                e.name
              ) }, e.name))
            }
          ) }, key)) }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-5 pt-4", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                as: Link,
                isDisabled: processing,
                href: route("dashboard.roles.list"),
                className: "w-32",
                children: t("Cancel")
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "submit",
                color: "primary",
                className: "w-32",
                isLoading: processing,
                children: t("Save")
              }
            )
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "h-10" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "h-20" })
  ] });
};
Page.layout = (page) => /* @__PURE__ */ jsx(Layout, { ...{ children: page, pageTitle: String(t("Roles")) } });
export {
  Page,
  Page as default
};
