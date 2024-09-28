import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useForm } from "@inertiajs/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { t } from "./translations-CCbcAZo6.js";
import { toast } from "react-toastify";
const DeletePermission = ({
  isOpen,
  onOpen,
  onOpenChange,
  selectedPermission
}) => {
  const { delete: destroy } = useForm();
  return /* @__PURE__ */ jsx(
    Modal,
    {
      isOpen,
      onOpenChange,
      isDismissable: false,
      isKeyboardDismissDisabled: true,
      children: /* @__PURE__ */ jsx(ModalContent, { children: (onClose) => /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(ModalHeader, { className: "flex flex-col gap-1 select-none", children: t("Confirm permission deletion") }),
        /* @__PURE__ */ jsx(ModalBody, { className: "pt-0", children: /* @__PURE__ */ jsx("p", { className: "text-sm", children: t("This action may not be undone.") }) }),
        /* @__PURE__ */ jsxs(ModalFooter, { className: "gap-x-4", children: [
          /* @__PURE__ */ jsx(Button, { fullWidth: true, variant: "ghost", onPress: onClose, children: t("Cancel") }),
          /* @__PURE__ */ jsx(
            Button,
            {
              fullWidth: true,
              color: "danger",
              onPress: () => {
                destroy(
                  route("dashboard.permissions.destroy", {
                    permission: selectedPermission
                  }),
                  {
                    preserveScroll: true,
                    // @ts-ignore
                    onSuccess: (resp) => {
                      if (resp.props.flash && resp.props.flash.success) {
                        toast.success(t(resp.props.flash.success));
                      }
                      onClose();
                    }
                  }
                );
              },
              children: t("Confirm")
            }
          )
        ] })
      ] }) })
    }
  );
};
export {
  DeletePermission
};
