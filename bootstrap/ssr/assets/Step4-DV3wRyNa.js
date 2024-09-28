import { jsxs, jsx } from "react/jsx-runtime";
import { Input, Textarea, Divider, Button } from "@nextui-org/react";
import { usePage, useForm } from "@inertiajs/react";
import { useState } from "react";
import { object, string } from "yup";
const Step4 = () => {
  const { props } = usePage();
  const { song } = props;
  const [errors, setErrors] = useState({ title: null });
  const { data, setData, patch, processing } = useForm({
    title: song.title ?? "",
    details: song.details ?? "",
    step: 5
  });
  const submit = (e) => {
    e.preventDefault();
    schema.validate(data, { abortEarly: false }).then(() => {
      patch(route("song.update", { song }), {
        onSuccess: () => {
          console.log("success");
        },
        onError: (errors2) => console.log(errors2)
      });
    }).catch((err) => {
      setErrors({
        title: err.toString().replace("ValidationError: ", "")
      });
    });
  };
  const { patch: back } = useForm({ step: 3 });
  return /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "w-1/2 space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Detalles personales" }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground-700 text-sm", children: "¿Qué detalles o características se deberían resaltar en la canción?" })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      Input,
      {
        isRequired: true,
        label: "Título",
        isDisabled: processing,
        defaultValue: data.title,
        errorMessage: errors.title ?? "",
        isInvalid: errors.title ? true : false,
        onValueChange: (val) => setData("title", val)
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        Textarea,
        {
          maxLength: 125,
          isDisabled: processing,
          defaultValue: data.details,
          label: "¿Para quién es la canción?",
          onValueChange: (val) => setData("details", val)
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "text-xs pt-1 flex justify-end", children: [
        data.details.length,
        "/125"
      ] })
    ] }),
    /* @__PURE__ */ jsx(Divider, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "flat",
          isDisabled: processing,
          onPress: () => {
            back(route("song.update", { song }));
          },
          children: "Atrás"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Button, { color: "primary", type: "submit", isDisabled: processing, children: "Siguiente" }) })
    ] })
  ] });
};
const schema = object({
  title: string().required("Por favor, agrega un título a la canción")
});
export {
  Step4
};
