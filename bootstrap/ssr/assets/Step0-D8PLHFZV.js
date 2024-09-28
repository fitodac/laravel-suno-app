import { jsxs, jsx } from "react/jsx-runtime";
import { Select, SelectItem, Divider, Button } from "@nextui-org/react";
import { usePage, useForm } from "@inertiajs/react";
import { useState } from "react";
import { object, string } from "yup";
const Step0 = () => {
  const { props } = usePage();
  const { song } = props;
  const [errors, setErrors] = useState({ music_style: null });
  const { data, setData, patch, processing } = useForm({
    music_style: song.music_style ?? "",
    step: 1
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
        music_style: err.toString().replace("ValidationError: ", "")
      });
    });
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "w-1/2 space-y-6 relative", children: [
    /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Elige el género" }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
      Select,
      {
        disallowEmptySelection: true,
        isDisabled: processing,
        label: "Elige el género",
        value: data.music_style,
        onSelectionChange: (e) => {
          setErrors({ music_style: null });
          setData("music_style", e.anchorKey);
        },
        errorMessage: errors.music_style ?? "",
        defaultSelectedKeys: [data.music_style],
        isInvalid: errors.music_style ? true : false,
        children: [
          /* @__PURE__ */ jsx(SelectItem, { children: "Pop" }, "Pop"),
          /* @__PURE__ */ jsx(SelectItem, { children: "Hip Hop" }, "Hip Hop"),
          /* @__PURE__ */ jsx(SelectItem, { children: "Jazz" }, "Jazz"),
          /* @__PURE__ */ jsx(SelectItem, { children: "Rhythm and Blues" }, "Rhythm and Blues"),
          /* @__PURE__ */ jsx(SelectItem, { children: "Música clásica" }, "Música clásica"),
          /* @__PURE__ */ jsx(SelectItem, { children: "Rock and Roll" }, "Rock and Roll"),
          /* @__PURE__ */ jsx(SelectItem, { children: "Reggae" }, "Reggae")
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Divider, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsx("div", {}),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Button, { color: "primary", type: "submit", isDisabled: processing, children: "Siguiente" }) })
    ] })
  ] });
};
const schema = object({
  music_style: string().required("Debes seleccionar un género")
});
export {
  Step0
};
