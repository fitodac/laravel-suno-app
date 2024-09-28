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
import { Divider, Textarea, Button } from "@nextui-org/react";
import { toast } from "react-toastify";
import "react";
const FormProfessionalInformation = () => {
  const user = usePage().props.auth.user;
  const { data, setData, patch, processing, errors, clearErrors, isDirty } = useForm({
    id: user.id,
    job_title: user.job_title,
    company: user.company,
    bio: user.bio
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
      t("Professional information"),
      /* @__PURE__ */ jsx(Divider, { className: "flex-1" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-x-6 gap-y-5", children: [
      /* @__PURE__ */ jsx("fieldset", { children: /* @__PURE__ */ jsx(
        ClassicInput,
        {
          label: t("Job title"),
          variant: "faded",
          value: data.job_title,
          isInvalid: errors.job_title ? true : false,
          errorMessage: errors.job_title,
          onKeyUp: () => clearErrors("job_title"),
          isDisabled: processing,
          onValueChange: (e) => setData("job_title", e)
        }
      ) }),
      /* @__PURE__ */ jsx("fieldset", { children: /* @__PURE__ */ jsx(
        ClassicInput,
        {
          label: t("Company"),
          variant: "faded",
          value: data.company,
          isInvalid: errors.company ? true : false,
          errorMessage: errors.company,
          onKeyUp: () => clearErrors("company"),
          isDisabled: processing,
          onValueChange: (e) => setData("company", e)
        }
      ) }),
      /* @__PURE__ */ jsx("fieldset", { className: "col-span-2", children: /* @__PURE__ */ jsx(
        Textarea,
        {
          label: t("Biography"),
          variant: "faded",
          value: data.bio,
          isInvalid: errors.bio ? true : false,
          errorMessage: errors.bio,
          onKeyUp: () => clearErrors("bio"),
          isDisabled: processing,
          onValueChange: (e) => setData("bio", e)
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
  FormProfessionalInformation
};
