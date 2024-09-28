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
import { Divider, Button } from "@nextui-org/react";
import { toast } from "react-toastify";
import "react";
const FormPersonalInformation = () => {
  const user = usePage().props.auth.user;
  const { data, setData, patch, processing, errors, clearErrors, isDirty } = useForm({
    id: user.id,
    phone: user.phone,
    birth_date: user.birth_date,
    address: user.address,
    city: user.city,
    country: user.country,
    zip: user.zip,
    personal_information: true
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("profile.update"), {
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
      t("Personal information"),
      /* @__PURE__ */ jsx(Divider, { className: "flex-1" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-x-6 gap-y-5", children: [
      /* @__PURE__ */ jsx("fieldset", { children: /* @__PURE__ */ jsx(
        ClassicInput,
        {
          label: t("Phone"),
          variant: "faded",
          value: data.phone,
          isInvalid: errors.phone ? true : false,
          errorMessage: errors.phone,
          onKeyUp: () => clearErrors("phone"),
          isDisabled: processing,
          onValueChange: (e) => setData("phone", e)
        }
      ) }),
      /* @__PURE__ */ jsx("fieldset", { children: /* @__PURE__ */ jsx(
        ClassicInput,
        {
          label: t("Birth date"),
          variant: "faded",
          value: data.birth_date,
          isInvalid: errors.birth_date ? true : false,
          errorMessage: errors.birth_date,
          onKeyUp: () => clearErrors("birth_date"),
          isDisabled: processing,
          onValueChange: (e) => setData("birth_date", e)
        }
      ) }),
      /* @__PURE__ */ jsx("fieldset", { children: /* @__PURE__ */ jsx(
        ClassicInput,
        {
          label: t("Address"),
          variant: "faded",
          value: data.address,
          isInvalid: errors.address ? true : false,
          errorMessage: errors.address,
          onKeyUp: () => clearErrors("address"),
          isDisabled: processing,
          onValueChange: (e) => setData("address", e)
        }
      ) }),
      /* @__PURE__ */ jsx("fieldset", { children: /* @__PURE__ */ jsx(
        ClassicInput,
        {
          label: t("City"),
          variant: "faded",
          value: data.city,
          isInvalid: errors.city ? true : false,
          errorMessage: errors.city,
          onKeyUp: () => clearErrors("city"),
          isDisabled: processing,
          onValueChange: (e) => setData("city", e)
        }
      ) }),
      /* @__PURE__ */ jsx("fieldset", { children: /* @__PURE__ */ jsx(
        ClassicInput,
        {
          label: t("Country"),
          variant: "faded",
          value: data.country,
          isInvalid: errors.country ? true : false,
          errorMessage: errors.country,
          onKeyUp: () => clearErrors("country"),
          isDisabled: processing,
          onValueChange: (e) => setData("country", e)
        }
      ) }),
      /* @__PURE__ */ jsx("fieldset", { children: /* @__PURE__ */ jsx(
        ClassicInput,
        {
          label: t("Zip"),
          variant: "faded",
          value: data.zip,
          isInvalid: errors.zip ? true : false,
          errorMessage: errors.zip,
          onKeyUp: () => clearErrors("zip"),
          isDisabled: processing,
          onValueChange: (e) => setData("zip", e)
        }
      ) })
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
  FormPersonalInformation
};
