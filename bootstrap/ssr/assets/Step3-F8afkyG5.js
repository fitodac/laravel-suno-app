import { jsxs, jsx } from "react/jsx-runtime";
import { Textarea, Divider, Button } from "@nextui-org/react";
import { usePage, useForm } from "@inertiajs/react";
const Step3 = () => {
  const { props } = usePage();
  const { song } = props;
  const { data, setData, patch, processing } = useForm({
    song_for: song.song_for ?? "",
    song_from: song.song_from ?? "",
    occasion: song.occasion ?? "",
    step: 4
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
  const { patch: back } = useForm({ step: 2 });
  return /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "w-1/2 space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Los básicos" }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground-700 text-sm", children: "Mientras más detalles incluyas, más perzonalizada será tu canción." }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground-700 text-sm", children: "Cualquier cosa que escribas aquí podría terminar en la canción. Si no quieres que algo se incluya,por favor, no lo pongas aquí." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          Textarea,
          {
            label: "¿Para quién es la canción?",
            defaultValue: data.song_for,
            maxLength: 125,
            isDisabled: processing,
            onValueChange: (val) => setData("song_for", val)
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "text-xs pt-1 flex justify-end", children: [
          data.song_for.length,
          "/125"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          Textarea,
          {
            label: "¿De parte de quién es la canción?",
            defaultValue: data.song_from,
            maxLength: 125,
            isDisabled: processing,
            onValueChange: (val) => setData("song_from", val)
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "text-xs pt-1 flex justify-end", children: [
          data.song_from.length,
          "/125"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          Textarea,
          {
            label: "¿Cuál es la ocasión?",
            value: data.occasion,
            maxLength: 125,
            isDisabled: processing,
            onValueChange: (val) => setData("occasion", val)
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "text-xs pt-1 flex justify-end", children: [
          data.occasion.length,
          "/125"
        ] })
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
export {
  Step3
};
