import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { t } from "./translations-CCbcAZo6.js";
import { usePage, useForm } from "@inertiajs/react";
import { C as ClassicInput } from "./ClassicInput-ByqbGa8A.js";
import "@tiptap/starter-kit";
import "@tiptap/extension-character-count";
import "@tiptap-pro/extension-drag-handle-react";
import "@tiptap/extension-color";
import "@tiptap/extension-text-style";
import "@tiptap/extension-placeholder";
import { Divider, Button } from "@nextui-org/react";
import { toast } from "react-toastify";
import "./useMainStore-BNNQMtH2.js";
import { u as useGeneratePassword } from "./useGeneratePassword-C0QxrA1n.js";
import "zustand";
import "zustand/middleware";
const FormPassword = () => {
  const { user } = usePage().props;
  const [pwdVisibility, setPwdVisibility] = useState(false);
  const { generatePassword } = useGeneratePassword(16);
  const fillPassword = () => {
    const val = generatePassword();
    setData("password", val);
  };
  const { data, setData, put, processing, errors, clearErrors, isDirty } = useForm({
    id: user.id ?? null,
    password: "",
    security_information: true
  });
  const submit = (e) => {
    e.preventDefault();
    put(route("dashboard.user.update", { user }), {
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
      t("Security"),
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
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
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
  FormPassword
};
