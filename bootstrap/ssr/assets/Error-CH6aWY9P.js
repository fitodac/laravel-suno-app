import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { u as useColorMode } from "./useColorMode-DIaHfFiE.js";
import "react";
import { Head, Link } from "@inertiajs/react";
import { t } from "./translations-CCbcAZo6.js";
import { Button } from "@nextui-org/react";
import "./useMainStore-BNNQMtH2.js";
import "zustand";
import "zustand/middleware";
const Page = ({ status }) => {
  useColorMode();
  const messages = {
    503: {
      pageTitle: "503: Service Unavailable",
      description: "Sorry, we are doing some maintenance. Please check back soon."
    },
    500: {
      pageTitle: "500: Server Error",
      description: "Sorry, something went wrong on our servers."
    },
    404: {
      pageTitle: "404: Page Not Found",
      description: "Sorry, the page you are looking for could not be found."
    },
    403: {
      pageTitle: "403: Forbidden",
      description: "Sorry, you are forbidden from accessing this page."
    }
  }[status];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: `${t((messages == null ? void 0 : messages.pageTitle) ?? "")}` }),
    /* @__PURE__ */ jsx("div", { className: "bg-gray-100 w-screen h-screen dark:bg-gray-900", children: /* @__PURE__ */ jsx("div", { className: "grid place-content-center w-full h-full p-10", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 text-center max-w-2xl", children: [
      /* @__PURE__ */ jsx("div", { className: "text-6xl", children: status }),
      /* @__PURE__ */ jsx("div", { className: "text-2xl tracking-tight", children: t(messages == null ? void 0 : messages.description) }),
      /* @__PURE__ */ jsx("div", { className: "tracking-tight", children: t("This page you are looking for does not exsist", {
        link: /* @__PURE__ */ jsx(
          Link,
          {
            href: route("dashboard"),
            className: "relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity",
            children: t("Report this?")
          },
          "report-link"
        )
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "pt-6 flex justify-center gap-x-5", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "sm",
            color: "primary",
            variant: "light",
            startContent: /* @__PURE__ */ jsx("i", { className: "ri-arrow-left-line" }),
            onPress: () => window.history.back(),
            children: t("Back previous page")
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "sm",
            as: Link,
            color: "primary",
            variant: "flat",
            href: route("dashboard"),
            children: t("Go home")
          }
        )
      ] })
    ] }) }) })
  ] });
};
export {
  Page as default
};
