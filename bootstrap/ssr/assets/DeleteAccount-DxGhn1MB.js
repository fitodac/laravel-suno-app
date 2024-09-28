import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { t } from "./translations-CCbcAZo6.js";
import { useForm } from "@inertiajs/react";
import { useDisclosure, Divider, Button, Modal, ModalContent, ModalHeader, ModalBody, Input, ModalFooter } from "@nextui-org/react";
const DeleteAccount = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const passwordInput = useRef(null);
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors
  } = useForm({
    password: ""
  });
  const submit = (e) => {
    e.preventDefault();
    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => onClose(),
      onError: () => {
        var _a;
        return (_a = passwordInput.current) == null ? void 0 : _a.focus();
      },
      onFinish: () => reset()
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx(Divider, {}),
      /* @__PURE__ */ jsx(Button, { color: "danger", variant: "light", onPress: onOpen, children: t("Delete account") })
    ] }),
    /* @__PURE__ */ jsx(
      Modal,
      {
        size: "sm",
        isOpen,
        onOpenChange,
        isDismissable: false,
        isKeyboardDismissDisabled: true,
        children: /* @__PURE__ */ jsx(ModalContent, { children: (onClose2) => /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(ModalHeader, { className: "pb-0", children: /* @__PURE__ */ jsx("span", { className: "leading-tight select-none", children: t("delete-account-confirmation-title") }) }),
          /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
            /* @__PURE__ */ jsxs(ModalBody, { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm leading-tight select-none", children: t("delete-account-confirmation-message") }),
              /* @__PURE__ */ jsx("div", { className: "space-y-1 mt-3", children: /* @__PURE__ */ jsx(
                Input,
                {
                  ref: passwordInput,
                  id: "password",
                  type: "password",
                  name: "password",
                  label: t("Password"),
                  value: data.password,
                  errorMessage: errors.password,
                  isInvalid: errors.password ? true : false,
                  onValueChange: (e) => setData("password", e)
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs(ModalFooter, { className: "gap-x-4", children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  fullWidth: true,
                  color: "default",
                  variant: "ghost",
                  onPress: onClose2,
                  children: t("Cancel")
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  fullWidth: true,
                  color: "danger",
                  type: "submit",
                  spinner: /* @__PURE__ */ jsx("i", { className: "ri-loader-line ri-lg animate-spin" }),
                  isLoading: processing,
                  children: t("Delete")
                }
              )
            ] })
          ] })
        ] }) })
      }
    )
  ] });
};
export {
  DeleteAccount
};
