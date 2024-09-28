import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { ScrollShadow, Divider } from "@nextui-org/react";
import { usePage } from "@inertiajs/react";
const SongDetails = ({}) => {
  const { props } = usePage();
  const { song } = props;
  return /* @__PURE__ */ jsx("div", { className: "space-y-1.5 select-none", children: /* @__PURE__ */ jsxs(ScrollShadow, { className: "w-full h-[400px]", children: [
    song.title && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("small", { className: "text-foreground-500 font-medium", children: "Título" }),
        /* @__PURE__ */ jsx("div", { className: "min-h-4", children: song.title })
      ] }),
      /* @__PURE__ */ jsx(Divider, { className: "mt-2" })
    ] }),
    song.music_style && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("small", { className: "text-foreground-500 font-medium", children: "Género" }),
        /* @__PURE__ */ jsx("div", { className: "min-h-4", children: song.music_style })
      ] }),
      /* @__PURE__ */ jsx(Divider, { className: "mt-2" })
    ] }),
    song.mood && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("small", { className: "text-foreground-500 font-medium", children: "Mood" }),
        /* @__PURE__ */ jsx("div", { className: "min-h-4", children: song.mood })
      ] }),
      /* @__PURE__ */ jsx(Divider, { className: "mt-2" })
    ] }),
    song.artist_gender && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("small", { className: "text-foreground-500 font-medium", children: "Artista" }),
        /* @__PURE__ */ jsx("div", { className: "min-h-4", children: song.artist_gender })
      ] }),
      /* @__PURE__ */ jsx(Divider, { className: "mt-2" })
    ] }),
    song.tone !== null && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("small", { className: "text-foreground-500 font-medium", children: "Tono" }),
        /* @__PURE__ */ jsx("div", { className: "min-h-4", children: song.tone })
      ] }),
      /* @__PURE__ */ jsx(Divider, { className: "mt-2" })
    ] }),
    song.tempo !== null && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("small", { className: "text-foreground-500 font-medium", children: "Ritmo" }),
        /* @__PURE__ */ jsx("div", { className: "min-h-4", children: song.tempo })
      ] }),
      /* @__PURE__ */ jsx(Divider, { className: "mt-2" })
    ] }),
    song.song_for && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("small", { className: "text-foreground-500 font-medium", children: "¿Para quién es la canción?" }),
        /* @__PURE__ */ jsx("div", { className: "min-h-4 text-xs italic", children: song.song_for })
      ] }),
      /* @__PURE__ */ jsx(Divider, { className: "mt-2" })
    ] }),
    song.song_from && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("small", { className: "text-foreground-500 font-medium", children: "¿De parte de quién es la canción?" }),
        /* @__PURE__ */ jsx("div", { className: "min-h-4 text-xs italic", children: song.song_from })
      ] }),
      /* @__PURE__ */ jsx(Divider, { className: "mt-2" })
    ] }),
    song.occasion && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("small", { className: "text-foreground-500 font-medium", children: "¿Cuál es la ocasión?" }),
        /* @__PURE__ */ jsx("div", { className: "min-h-4 text-xs italic", children: song.occasion })
      ] }),
      /* @__PURE__ */ jsx(Divider, { className: "mt-2" })
    ] }),
    song.details && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("small", { className: "text-foreground-500 font-medium", children: "Detalles" }),
      /* @__PURE__ */ jsx("div", { className: "min-h-4", children: song.details })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "h-10" })
  ] }) });
};
export {
  SongDetails
};
