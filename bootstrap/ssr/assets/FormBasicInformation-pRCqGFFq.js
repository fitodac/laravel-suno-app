import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { t } from "./translations-CCbcAZo6.js";
import { usePage, useForm } from "@inertiajs/react";
import { C as ClassicInput } from "./ClassicInput-ByqbGa8A.js";
import "@tiptap/starter-kit";
import "@tiptap/extension-character-count";
import "@tiptap-pro/extension-drag-handle-react";
import "@tiptap/extension-color";
import "@tiptap/extension-text-style";
import "@tiptap/extension-placeholder";
import { Divider, ButtonGroup, Button, Switch } from "@nextui-org/react";
import { toast } from "react-toastify";
import "react";
const FormBasicInformation = () => {
  const { user, permission } = usePage().props;
  const { data, setData, patch, processing, errors, clearErrors, isDirty } = useForm({
    id: user.id,
    name: user.name,
    lastname: user.lastname,
    username: user.username,
    email: user.email,
    role: user.roles ? user.roles[0].id : null,
    status: user.status ?? "disabled",
    basic_information: true
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("dashboard.user.update", { user }), {
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
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("section", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "font-medium flex gap-5 items-center", children: [
      t("Basic information"),
      /* @__PURE__ */ jsx(Divider, { className: "flex-1" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-x-6 gap-y-5", children: [
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
      "Super Admin Access" === permission && /* @__PURE__ */ jsxs("fieldset", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx("label", { className: "text-small text-foreground select-none", children: t("Role") }),
        /* @__PURE__ */ jsxs(ButtonGroup, { fullWidth: true, size: "sm", isDisabled: processing, children: [
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
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-1", children: [
        /* @__PURE__ */ jsx("label", { className: "text-small text-foreground select-none", children: t("User status") }),
        /* @__PURE__ */ jsx(
          Switch,
          {
            size: "sm",
            "aria-label": "Remember me",
            value: "1",
            isDisabled: processing,
            isSelected: data.status === "enabled",
            onValueChange: (val) => {
              setData("status", val ? "enabled" : "disabled");
              clearErrors("status");
            },
            className: "mx-2",
            children: t("Is the user enabled?")
          }
        ),
        errors.status && /* @__PURE__ */ jsx("span", { className: "text-tiny text-danger", children: errors.status })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "pt-5 flex justify-end", children: /* @__PURE__ */ jsx(
      Button,
      {
        type: "submit",
        color: "primary",
        className: "w-40",
        isLoading: processing,
        isDisabled: !isDirty,
        children: t("Save")
      }
    ) })
  ] }) }) });
};
export {
  FormBasicInformation
};
