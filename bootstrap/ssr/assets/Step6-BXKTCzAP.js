import { jsxs, jsx } from "react/jsx-runtime";
import { Divider, Button } from "@nextui-org/react";
import { usePage, useForm } from "@inertiajs/react";
const Step6 = () => {
  const { props } = usePage();
  const { song } = props;
  const { data, setData, patch, processing } = useForm({
    step: 6
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("song.update", { song }), {
      onSuccess: () => {
        console.log("success");
      },
      onError: (errors) => console.log(errors)
    });
  };
  const { patch: back } = useForm({ step: 5 });
  return /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "w-1/2 space-y-6", children: [
    /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Música" }),
    /* @__PURE__ */ jsx(Divider, {}),
    /* @__PURE__ */ jsx("div", { className: "flex justify-between", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      Button,
      {
        variant: "flat",
        isDisabled: processing,
        onPress: () => {
          back(route("song.update", { song }));
        },
        children: "Atrás"
      }
    ) }) })
  ] });
};
export {
  Step6
};
