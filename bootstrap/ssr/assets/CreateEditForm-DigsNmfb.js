import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useEffect, useCallback } from "react";
import { usePage, useForm, router } from "@inertiajs/react";
import { cn, Divider, CheckboxGroup, Checkbox, Button, Spinner } from "@nextui-org/react";
import { C as ClassicInput } from "./ClassicInput-ByqbGa8A.js";
import "@tiptap/starter-kit";
import "@tiptap/extension-character-count";
import "@tiptap-pro/extension-drag-handle-react";
import "@tiptap/extension-color";
import "@tiptap/extension-text-style";
import "@tiptap/extension-placeholder";
import { t } from "./translations-CCbcAZo6.js";
import { toast } from "react-toastify";
const CreateEditForm = ({
  drawerOpen,
  setDrawerOpen,
  selectedPermission,
  setSelectedPermission
}) => {
  const {
    props: { guards }
  } = usePage();
  const inputName = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      var _a;
      (_a = inputName.current) == null ? void 0 : _a.focus();
    }, 300);
  }, [drawerOpen]);
  const { data, post, patch, errors, setData, processing, clearErrors, reset } = useForm({
    name: "",
    guard_name: ["web"]
  });
  useEffect(() => {
    if (selectedPermission !== null) {
      setData({
        name: selectedPermission.name,
        guard_name: selectedPermission.guard_name.split(",")
      });
    }
  }, [selectedPermission]);
  const successCallback = useCallback(() => {
    setDrawerOpen(false);
    reset();
    setSelectedPermission(null);
    router.reload({ only: ["permissions"] });
  }, []);
  const submit = (e) => {
    e.preventDefault();
    if (selectedPermission) {
      patch(
        route("dashboard.permissions.update", {
          permission: selectedPermission
        }),
        {
          preserveScroll: true,
          // @ts-ignore
          onSuccess: (resp) => {
            if (resp.props.flash && resp.props.flash.success) {
              toast.success(t(resp.props.flash.success));
            }
            successCallback();
          },
          onError: (errors2) => console.log(errors2)
        }
      );
    } else {
      post(route("dashboard.permissions.store"), {
        preserveScroll: true,
        // @ts-ignore
        onSuccess: (resp) => {
          if (resp.props.flash && resp.props.flash.success) {
            toast.success(t(resp.props.flash.success));
          }
          successCallback();
        },
        onError: (errors2) => console.log(errors2)
      });
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "bg-background border border-divider border-b-none mx-auto relative overflow-hidden",
        "md:w-[600px]",
        "shadow-black/20 rounded-t-xl shadow-xl"
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 lg:px-10", children: [
          /* @__PURE__ */ jsx("div", { className: "text-lg", children: selectedPermission ? t("Edit permission") : t("Create new permission") }),
          /* @__PURE__ */ jsx(Divider, { className: "my-4" }),
          /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "pb-10 space-y-5", children: [
            /* @__PURE__ */ jsx("fieldset", { children: /* @__PURE__ */ jsx(
              ClassicInput,
              {
                isRequired: true,
                variant: "faded",
                ref: inputName,
                label: t("Permission name"),
                value: data.name,
                isInvalid: errors.name ? true : false,
                errorMessage: errors.name,
                onKeyUp: () => clearErrors("name"),
                isDisabled: processing,
                onValueChange: (e) => setData("name", e)
              }
            ) }),
            /* @__PURE__ */ jsx("fieldset", { children: !selectedPermission ? /* @__PURE__ */ jsx(
              CheckboxGroup,
              {
                isRequired: true,
                label: "Guards",
                orientation: "horizontal",
                value: data.guard_name,
                isInvalid: errors.guard_name ? true : false,
                errorMessage: errors.guard_name,
                isDisabled: processing,
                onValueChange: (val) => {
                  setData("guard_name", val);
                  clearErrors("guard_name");
                },
                children: Array.isArray(guards) && guards.map((e) => /* @__PURE__ */ jsx(Checkbox, { value: e, children: e }, e))
              }
            ) : /* @__PURE__ */ jsxs("div", { className: "text-primary text-sm", children: [
              "Guard:",
              " ",
              /* @__PURE__ */ jsx("strong", { className: "uppercase", children: selectedPermission.guard_name })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-5", children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  isDisabled: processing,
                  onPress: () => {
                    setDrawerOpen(false);
                    setSelectedPermission(null);
                    reset();
                  },
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
        ] }),
        processing && /* @__PURE__ */ jsx("div", { className: "bg-white/70 inset-0 absolute grid place-content-center z-30 dark:bg-black/80", children: /* @__PURE__ */ jsx(Spinner, {}) })
      ]
    }
  );
};
export {
  CreateEditForm
};
