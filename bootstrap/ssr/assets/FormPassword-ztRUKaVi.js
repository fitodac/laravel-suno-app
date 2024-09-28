import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { t } from "./translations-CCbcAZo6.js";
import { useForm } from "@inertiajs/react";
import { C as ClassicInput } from "./ClassicInput-ByqbGa8A.js";
import "@tiptap/starter-kit";
import "@tiptap/extension-character-count";
import "@tiptap-pro/extension-drag-handle-react";
import "@tiptap/extension-color";
import "@tiptap/extension-text-style";
import "@tiptap/extension-placeholder";
import { Divider, Button } from "@nextui-org/react";
import { toast } from "react-toastify";
const FormPassword = () => {
  const [currentPasswordVisibility, setCurrentPasswordVisibility] = useState(false);
  const [newPasswordVisibility, setNewPasswordVisibility] = useState(false);
  const passwordInput = useRef(null);
  const currentPasswordInput = useRef(null);
  const {
    data,
    setData,
    put,
    reset,
    processing,
    errors,
    clearErrors,
    isDirty
  } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const submit = (e) => {
    e.preventDefault();
    put(route("password.update"), {
      preserveScroll: true,
      // @ts-ignore
      onSuccess: (resp) => {
        reset();
        if (resp.props.flash && resp.props.flash.success) {
          toast.success(t(resp.props.flash.success));
        }
      },
      onError: (errors2) => {
        var _a, _b;
        console.log(errors2);
        if (errors2.password) {
          reset("password", "password_confirmation");
          (_a = passwordInput.current) == null ? void 0 : _a.focus();
        }
        if (errors2.current_password) {
          reset("current_password");
          (_b = currentPasswordInput.current) == null ? void 0 : _b.focus();
        }
      }
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("section", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "font-medium flex gap-5 items-center", children: [
      t("Security"),
      /* @__PURE__ */ jsx(Divider, { className: "flex-1" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-x-6 gap-y-5 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx("fieldset", { children: /* @__PURE__ */ jsx(
        ClassicInput,
        {
          isRequired: true,
          ref: currentPasswordInput,
          label: t("Current Password"),
          variant: "faded",
          value: data.current_password,
          errorMessage: errors.current_password,
          type: currentPasswordVisibility ? "text" : "password",
          isInvalid: errors.current_password ? true : false,
          onKeyUp: () => clearErrors("current_password"),
          description: t(
            "The password must be at least 8 characters long"
          ),
          endContent: /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              tabIndex: -1,
              onClick: () => setCurrentPasswordVisibility(!currentPasswordVisibility),
              children: currentPasswordVisibility ? /* @__PURE__ */ jsx("i", { className: "ri-eye-fill ri-lg text-primary" }) : /* @__PURE__ */ jsx("i", { className: "ri-eye-off-fill ri-lg text-zinc-400 dark:text-zinc-600" })
            }
          ),
          isDisabled: processing,
          onValueChange: (e) => setData("current_password", e)
        }
      ) }),
      /* @__PURE__ */ jsx("fieldset", {}),
      /* @__PURE__ */ jsx("fieldset", { children: /* @__PURE__ */ jsx(
        ClassicInput,
        {
          isRequired: true,
          ref: passwordInput,
          label: t("New Password"),
          variant: "faded",
          value: data.password,
          errorMessage: errors.password,
          type: newPasswordVisibility ? "text" : "password",
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
              onClick: () => setNewPasswordVisibility(!newPasswordVisibility),
              children: newPasswordVisibility ? /* @__PURE__ */ jsx("i", { className: "ri-eye-fill ri-lg text-primary" }) : /* @__PURE__ */ jsx("i", { className: "ri-eye-off-fill ri-lg text-zinc-400 dark:text-zinc-600" })
            }
          ),
          isDisabled: processing,
          onValueChange: (e) => setData("password", e)
        }
      ) }),
      /* @__PURE__ */ jsx("fieldset", { children: /* @__PURE__ */ jsx(
        ClassicInput,
        {
          isRequired: true,
          label: t("Confirm Password"),
          variant: "faded",
          value: data.password_confirmation,
          errorMessage: errors.password_confirmation,
          type: newPasswordVisibility ? "text" : "password",
          isInvalid: errors.password_confirmation ? true : false,
          onKeyUp: () => clearErrors("password_confirmation"),
          isDisabled: processing,
          onValueChange: (e) => setData("password_confirmation", e)
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
