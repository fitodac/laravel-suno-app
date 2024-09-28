import { jsxs, jsx } from "react/jsx-runtime";
import { Select, SelectItem, Divider, Button } from "@nextui-org/react";
import { usePage, useForm } from "@inertiajs/react";
import { useState } from "react";
import { object, string } from "yup";
const Step1 = () => {
  const { props } = usePage();
  const { song } = props;
  const [errors, setErrors] = useState({ mood: null });
  const { data, setData, patch, processing } = useForm({
    mood: song.mood ?? "",
    step: 2
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
        mood: err.toString().replace("ValidationError: ", "")
      });
    });
  };
  const { patch: back } = useForm({ step: 0 });
  return /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "w-1/2 space-y-6", children: [
    /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Elige el ánimo" }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
      Select,
      {
        label: "Elige el mood",
        disallowEmptySelection: true,
        value: data.mood,
        onSelectionChange: (e) => {
          setErrors({ mood: null });
          setData("mood", e.anchorKey);
        },
        isInvalid: errors.mood ? true : false,
        errorMessage: errors.mood ?? "",
        defaultSelectedKeys: [data.mood],
        isDisabled: processing,
        children: [
          /* @__PURE__ */ jsx(SelectItem, { children: "Alegre" }, "Alegre"),
          /* @__PURE__ */ jsx(SelectItem, { children: "Triste" }, "Triste"),
          /* @__PURE__ */ jsx(SelectItem, { children: "Romántica" }, "Romántica"),
          /* @__PURE__ */ jsx(SelectItem, { children: "Graciosa" }, "Graciosa"),
          /* @__PURE__ */ jsx(SelectItem, { children: "Reflexiva" }, "Reflexiva")
        ]
      }
    ) }),
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
  mood: string().required("Debes seleccionar un género")
});
export {
  Step1
};
