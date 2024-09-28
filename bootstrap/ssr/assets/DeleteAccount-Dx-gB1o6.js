import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { usePage, useForm } from "@inertiajs/react";
import { useDisclosure, Divider, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { t } from "./translations-CCbcAZo6.js";
import { toast } from "react-toastify";
const DeleteAccount = () => {
  const { user } = usePage().props;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { delete: destroy } = useForm();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx(Divider, {}),
      /* @__PURE__ */ jsx(Button, { color: "danger", variant: "light", onPress: onOpen, children: t("Delete account") })
    ] }),
    /* @__PURE__ */ jsx(
      Modal,
      {
        isOpen,
        onOpenChange,
        isDismissable: false,
        isKeyboardDismissDisabled: true,
        children: /* @__PURE__ */ jsx(ModalContent, { children: (onClose) => /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(ModalHeader, { className: "flex flex-col gap-1 select-none", children: t("Confirm account deletion") }),
          /* @__PURE__ */ jsx(ModalBody, { className: "pt-0", children: /* @__PURE__ */ jsx("p", { className: "text-sm", children: t("This account will be permanently deleted.") }) }),
          /* @__PURE__ */ jsxs(ModalFooter, { className: "gap-x-4", children: [
            /* @__PURE__ */ jsx(Button, { fullWidth: true, variant: "ghost", onPress: onClose, children: t("Cancel") }),
            /* @__PURE__ */ jsx(
              Button,
              {
                fullWidth: true,
                color: "danger",
                onPress: () => destroy(route("dashboard.user.destroy", { user }), {
                  preserveScroll: true,
                  // @ts-ignore
                  onSuccess: (resp) => {
                    if (resp.props.flash && resp.props.flash.success) {
                      toast.success(t(resp.props.flash.success));
                    }
                  }
                }),
                children: t("Confirm")
              }
            )
          ] })
        ] }) })
      }
    )
  ] });
};
export {
  DeleteAccount
};
