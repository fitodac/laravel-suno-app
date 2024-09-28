import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { t } from "./translations-CCbcAZo6.js";
import { usePage, useForm } from "@inertiajs/react";
import dayjs from "dayjs";
import { Card, CardHeader, CardBody, Button, CardFooter } from "@nextui-org/react";
import { toast } from "react-toastify";
const SessionsManager = () => {
  const { sessions, user } = usePage().props;
  const { delete: destroy } = useForm();
  const invalidateSession = (id) => {
    destroy(route("dashboard.session.invalidate", { id }), {
      only: ["sessions"],
      preserveScroll: true,
      // @ts-ignore
      onSuccess: (resp) => {
        if (resp.props.flash && resp.props.flash.success) {
          toast.success(t(resp.props.flash.success));
        }
      },
      onError: (error) => console.log("error", error)
    });
  };
  if (!sessions.length) return /* @__PURE__ */ jsx(Fragment, {});
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Card, { shadow: "none", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "px-8 pt-5", children: t("Sessions") }),
    /* @__PURE__ */ jsx(CardBody, { className: "space-y-3 py-1 pl-8 pr-6", children: sessions.map(({ id, ip_address, last_activity }) => /* @__PURE__ */ jsxs("div", { className: "flex gap-5 justify-between items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-sm font-light space-x-3", children: [
        /* @__PURE__ */ jsx("i", { className: "ri-mac-line ri-xl" }),
        /* @__PURE__ */ jsx("span", { children: ip_address })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-x-4", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground-500", children: dayjs(last_activity).format("YYYY-MM-DD") }),
        /* @__PURE__ */ jsx(
          Button,
          {
            isIconOnly: true,
            color: "danger",
            size: "sm",
            radius: "lg",
            variant: "light",
            onPress: () => invalidateSession(id),
            children: /* @__PURE__ */ jsx("i", { className: "ri-delete-bin-2-line ri-xl" })
          }
        )
      ] })
    ] }, id)) }),
    /* @__PURE__ */ jsx(CardFooter, {})
  ] }) });
};
export {
  SessionsManager
};
