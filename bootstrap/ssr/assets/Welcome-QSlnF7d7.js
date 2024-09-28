import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head, router } from "@inertiajs/react";
import { t } from "./translations-CCbcAZo6.js";
import { Button } from "@nextui-org/react";
import { u as useColorMode } from "./useColorMode-DIaHfFiE.js";
import "react";
import "./useMainStore-BNNQMtH2.js";
import "zustand";
import "zustand/middleware";
const GuestLayout = ({ children, pageTitle }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: pageTitle }),
    /* @__PURE__ */ jsx("main", { className: "bg-background w-full", children })
  ] });
};
const Welcome = ({
  auth
}) => {
  useColorMode();
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center min-h-screen", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md space-y-20", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-primary text-3xl font-semibold text-center", children: "Suno App" }),
    auth.user ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
      Button,
      {
        color: "primary",
        variant: "flat",
        onPress: () => router.visit(route("login")),
        children: t("Enter")
      }
    ) }) }) : /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-x-5", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          fullWidth: true,
          color: "primary",
          variant: "flat",
          onPress: () => router.visit(route("login")),
          children: t("Log in")
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          fullWidth: true,
          color: "primary",
          variant: "flat",
          onPress: () => router.visit(route("register")),
          children: t("Register")
        }
      )
    ] })
  ] }) }) });
};
Welcome.layout = (page) => /* @__PURE__ */ jsx(GuestLayout, { ...{ children: page, pageTitle: String(t("Welcome")) } });
export {
  Welcome as default
};
