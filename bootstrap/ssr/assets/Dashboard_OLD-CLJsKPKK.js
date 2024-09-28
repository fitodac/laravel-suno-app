import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { L as Layout } from "./Layout-CWRRA9fY.js";
import { Textarea, Switch, Button, Spinner, cn, ScrollShadow, Image } from "@nextui-org/react";
import "./useMainStore-BNNQMtH2.js";
import "@inertiajs/react";
import { t } from "./translations-CCbcAZo6.js";
import { P as PageContent } from "./PageContent-BjQSMN_k.js";
import "react-toastify";
import "./useMediaManager-B4H2TCSK.js";
import "@tackboon/react-grid-rearrange";
import "dayjs";
import numeral from "numeral";
import "./useColorMode-DIaHfFiE.js";
import "react-pro-sidebar";
import "framer-motion";
import "zustand";
import "zustand/middleware";
import "axios";
const fetchClip = async (id) => {
  const response = await fetch(
    `https://sunoapi-fitodacs-projects.vercel.app/api/clip?id=${id}`
  );
  const data = await response.json();
  if (!["complete", "streaming"].includes(data.status)) {
    await new Promise((resolve) => setTimeout(resolve, 2e3));
    await fetchClip(id);
  }
  return data;
};
const useCreateSong = () => {
  const [creatingSong, setCreatingSong] = useState(false);
  const [errorCreatingSong, setErrorCreatingSong] = useState(false);
  const createSong = async (props, cb) => {
    setCreatingSong(true);
    try {
      const response = await fetch(
        "https://sunoapi-fitodacs-projects.vercel.app/api/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(props)
        }
      );
      const data = await response.json();
      if (data.error) {
        alert(data.error);
      } else {
        await fetchClip(data[0].id);
      }
    } catch (err) {
      console.log("useCreateSong error", err);
      setErrorCreatingSong(err.message);
    } finally {
      cb();
      setCreatingSong(false);
    }
  };
  return { createSong, creatingSong, errorCreatingSong };
};
const useGetQuota = () => {
  const [quota, setQuota] = useState(null);
  const getQuota = async () => {
    try {
      const response = await fetch(
        "https://sunoapi-fitodacs-projects.vercel.app/api/get_limit"
      );
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      const data = await response.json();
      setQuota(data);
    } catch (err) {
      console.log("useGetSongs error", err);
    } finally {
    }
  };
  useEffect(() => {
    getQuota();
  }, []);
  return { quota, getQuota };
};
const useGetSongs = () => {
  const [loadingSongs, setLoadingSongs] = useState(true);
  const [songs, setSongs] = useState([]);
  const [fetchSongsError, setError] = useState(null);
  const fetchSongs = async () => {
    setLoadingSongs(true);
    try {
      const response = await fetch(
        "https://sunoapi-fitodacs-projects.vercel.app/api/get"
      );
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      const data = await response.json();
      setSongs(data);
    } catch (err) {
      console.log("useGetSongs error", err);
      setError(err.message);
    } finally {
      setLoadingSongs(false);
    }
  };
  useEffect(() => {
    fetchSongs();
  }, []);
  return {
    songs,
    setSongs,
    loadingSongs,
    setLoadingSongs,
    fetchSongsError,
    fetchSongs
  };
};
const Page = () => {
  const { quota, getQuota } = useGetQuota();
  const [form, setForm] = useState({
    prompt: "",
    make_instrumental: false,
    model: "chirp-v3-5|chirp-v3-0"
  });
  const { createSong, creatingSong, errorCreatingSong } = useCreateSong();
  const generatePrompt = () => {
    getQuota();
    console.log("propmt generated");
    createSong(form, () => {
      setLoadingSongs(true);
      fetchSongs();
    });
  };
  const [plyrSrc, setPlyrSrc] = useState("");
  const [active, setActive] = useState("");
  const plyr = useRef(null);
  useEffect(() => {
    if (plyr.current) plyr.current.play();
  }, [plyr]);
  const { songs, fetchSongs, loadingSongs, setLoadingSongs, fetchSongsError } = useGetSongs();
  const playerStart = (src) => {
    setPlyrSrc(null);
    setTimeout(() => {
      setPlyrSrc(src);
      setTimeout(() => {
        if (plyr.current) {
          plyr.current.play();
        }
      }, 100);
    }, 100);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageContent, { className: "max-w-screen-xl mx-auto", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "w-full h-full max-w-6xl flex gap-x-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-3/5 space-y-6", children: [
        quota && /* @__PURE__ */ jsx("div", { className: "text-sm flex justify-between", children: /* @__PURE__ */ jsxs("div", { className: "", children: [
          "Créditos restantes ",
          quota.credits_left
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative space-y-6", children: [
          /* @__PURE__ */ jsxs("fieldset", { children: [
            /* @__PURE__ */ jsx(
              Textarea,
              {
                size: "lg",
                minRows: 10,
                onValueChange: (e) => {
                  if (form.prompt.length <= 3e3)
                    setForm({ ...form, prompt: e });
                },
                defaultValue: form.prompt,
                isDisabled: creatingSong,
                classNames: {
                  inputWrapper: "h-52",
                  input: "font-extralight"
                }
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "text-sm mt-2 flex justify-end", children: [
              form.prompt.length,
              "/500"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-sm flex gap-3", children: [
              /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  className: "w-5",
                  children: /* @__PURE__ */ jsx("path", { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 9.5C12.8284 9.5 13.5 8.82843 13.5 8C13.5 7.17157 12.8284 6.5 12 6.5C11.1716 6.5 10.5 7.17157 10.5 8C10.5 8.82843 11.1716 9.5 12 9.5ZM14 15H13V10.5H10V12.5H11V15H10V17H14V15Z" })
                }
              ),
              "Ten en cuenta que el límite del prompt es de 500 caracteres."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center gap-10", children: [
            /* @__PURE__ */ jsx(
              Switch,
              {
                defaultSelected: form.make_instrumental,
                onValueChange: (e) => setForm({ ...form, make_instrumental: e }),
                isDisabled: creatingSong,
                children: "Instrumental"
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                size: "lg",
                type: "submit",
                color: "primary",
                className: "px-20",
                onPress: generatePrompt,
                isDisabled: creatingSong,
                children: "Crear"
              }
            )
          ] }),
          creatingSong && /* @__PURE__ */ jsx("div", { className: "bg-black/80 text-center inset-0 -top-6 absolute grid place-content-center z-30", children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Spinner, { className: " z-30" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Creando la canción... por favor, ten paciencia" })
          ] }) })
        ] }),
        errorCreatingSong && /* @__PURE__ */ jsx("div", { className: "text-danger", children: "Error al crear la canción" }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(creatingSong && "opacity-50 pointer-events-none"),
            children: [
              /* @__PURE__ */ jsx("div", { className: "mt-10 text-sm", children: "Prompts de ejemplo" }),
              /* @__PURE__ */ jsxs("div", { className: "mt-2 space-y-3 text-sm font-extralight", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-gray-900 p-3 rounded-xl", children: "Pop, Dance Pop, Ethereal, female vocals, catchy, eletronic, 130 bpm, high quality production, perfect sounds" }),
                /* @__PURE__ */ jsx("div", { className: "bg-gray-900 p-3 rounded-xl", children: "Dance-pop, nostalgic, intimate, emotive male voice,Synth lead, bassline. high-quality production,perfect sounds, earworm" })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-2/5 relative", children: [
        loadingSongs && /* @__PURE__ */ jsx(Spinner, { className: "absolute left-1/2 top-20 z-30" }),
        fetchSongsError ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "text-danger", children: "Error al obtener canciones" }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: "Canciones generadas" }),
          /* @__PURE__ */ jsx(ScrollShadow, { className: "h-[600px] mt-6", children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: cn(
                "space-y-2 pb-20",
                loadingSongs && "opacity-30 pointer-events-none"
              ),
              children: [
                songs && !songs.length && /* @__PURE__ */ jsx("div", { className: "font-extralight", children: "No hay canciones para mostrar" }),
                songs && songs.map((e) => /* @__PURE__ */ jsxs(
                  Button,
                  {
                    fullWidth: true,
                    className: cn(
                      "bg-transparent flex gap-5 items-center h-auto justify-start p-0 group"
                    ),
                    onPress: () => {
                      playerStart(e.audio_url);
                      setActive(e.id);
                    },
                    children: [
                      /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: cn(
                            "relative overflow-hidden rounded-2xl border-2",
                            active === e.id ? "border-primary" : "border-foreground-300"
                          ),
                          children: [
                            /* @__PURE__ */ jsx(
                              "div",
                              {
                                className: cn(
                                  "bg-black/30 inset-0 absolute flex items-center justify-center z-30 group-hover:opacity-100",
                                  active !== e.id && "opacity-0"
                                ),
                                children: /* @__PURE__ */ jsx(
                                  "svg",
                                  {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    className: "w-10 fill-white",
                                    children: /* @__PURE__ */ jsx("path", { d: "M7.75194 5.43872L18.2596 11.5682C18.4981 11.7073 18.5787 12.0135 18.4396 12.252C18.3961 12.3265 18.3341 12.3885 18.2596 12.432L7.75194 18.5615C7.51341 18.7006 7.20725 18.62 7.06811 18.3815C7.0235 18.305 7 18.2181 7 18.1296V5.87061C7 5.59446 7.22386 5.37061 7.5 5.37061C7.58853 5.37061 7.67547 5.39411 7.75194 5.43872Z" })
                                  }
                                )
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              Image,
                              {
                                width: 100,
                                height: 100,
                                fallbackSrc: "https://via.placeholder.com/100x100",
                                src: e.image_url ?? "https://via.placeholder.com/100x100",
                                alt: e.title,
                                removeWrapper: true,
                                classNames: {
                                  img: "object-cover"
                                }
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-lg", children: e.title }),
                        /* @__PURE__ */ jsx("div", { className: "text-foreground-400 text-sm font-medium", children: e.duration ? numeral(e.duration).format("00:00") : "--:--" })
                      ] })
                    ]
                  },
                  e.id
                ))
              ]
            }
          ) })
        ] })
      ] })
    ] }) }) }),
    plyrSrc && /* @__PURE__ */ jsx("audio", { ref: plyr, controls: true, className: "w-full bottom-0 fixed", children: /* @__PURE__ */ jsx("source", { src: plyrSrc, type: "audio/mp3" }) })
  ] });
};
Page.layout = (page) => /* @__PURE__ */ jsx(Layout, { ...{ children: page, pageTitle: String(t("Dashboard")) } });
export {
  Page as default
};
