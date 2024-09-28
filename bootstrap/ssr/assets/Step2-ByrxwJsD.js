import { jsxs, jsx } from "react/jsx-runtime";
import { ButtonGroup, Button, cn, Slider, Divider } from "@nextui-org/react";
import { usePage, useForm } from "@inertiajs/react";
import { useState } from "react";
const Step2 = () => {
  const { props } = usePage();
  const { song } = props;
  useState({ music_style: null });
  const { data, setData, patch, processing, progress } = useForm({
    artist_gender: song.artist_gender ?? "Mujer",
    tone: song.tone ?? 0,
    tempo: song.tempo ?? 0,
    step: 3
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("song.update", { song }), {
      onSuccess: () => {
        console.log("success");
      },
      onError: (errors2) => console.log(errors2)
    });
  };
  const { patch: back } = useForm({ step: 1 });
  return /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "w-1/2 space-y-8", children: [
    /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Elige el artista" }),
    /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs(ButtonGroup, { isDisabled: processing, children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          color: "primary",
          className: cn(data.artist_gender !== "Mujer" && "opacity-60"),
          onPress: () => setData("artist_gender", "Mujer"),
          children: "Mujer"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          color: "primary",
          className: cn(data.artist_gender !== "Hombre" && "opacity-60"),
          onPress: () => setData("artist_gender", "Hombre"),
          children: "Hombre"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: "Tono" }),
      /* @__PURE__ */ jsx(
        Slider,
        {
          size: "lg",
          step: 10,
          color: "primary",
          endContent: "Bajo",
          startContent: "Alto",
          className: "max-w-md",
          "aria-label": "Tono",
          defaultValue: data.tone,
          isDisabled: processing,
          onChange: (val) => setData("tone", Array.isArray(val) ? val[0] : val)
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: "Ritmo" }),
      /* @__PURE__ */ jsx(
        Slider,
        {
          size: "lg",
          step: 10,
          color: "primary",
          endContent: "Rápido",
          startContent: "Lento",
          className: "max-w-md",
          "aria-label": "Tempo",
          defaultValue: data.tempo,
          isDisabled: processing,
          onChange: (val) => setData("tempo", Array.isArray(val) ? val[0] : val)
        }
      )
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
  Step2
};
