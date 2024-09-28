import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { L as Layout } from "./Layout-B-4lKQH7.js";
import { t } from "./translations-CCbcAZo6.js";
import { Button, Card, CardHeader, Image, cn, Chip, CardBody } from "@nextui-org/react";
import "./useMainStore-BNNQMtH2.js";
import { Link, router } from "@inertiajs/react";
import { u as useUser, a as userBlank } from "./blank-462x265-CaLUIvp7.js";
import { P as PageHeader } from "./PageHeader-M3dsieGA.js";
import { P as PageContent } from "./PageContent-BjQSMN_k.js";
import { toast } from "react-toastify";
import "./useMediaManager-B4H2TCSK.js";
import "@tackboon/react-grid-rearrange";
import "dayjs";
import { FormBasicInformation } from "./FormBasicInformation-pRCqGFFq.js";
import { FormPersonalInformation } from "./FormPersonalInformation-kKELjIRY.js";
import { FormProfessionalInformation } from "./FormProfessionalInformation-DM8OrYnd.js";
import { FormPassword } from "./FormPassword-DedMApz4.js";
import { SessionsManager } from "./SessionsManager-Cp_7q5ul.js";
import { DeleteAccount } from "./DeleteAccount-Dx-gB1o6.js";
import "./useColorMode-DIaHfFiE.js";
import "react-pro-sidebar";
import "framer-motion";
import "zustand";
import "zustand/middleware";
import "axios";
import "numeral";
import "./ClassicInput-ByqbGa8A.js";
import "@tiptap/starter-kit";
import "@tiptap/extension-character-count";
import "@tiptap-pro/extension-drag-handle-react";
import "@tiptap/extension-color";
import "@tiptap/extension-text-style";
import "@tiptap/extension-placeholder";
import "./useGeneratePassword-C0QxrA1n.js";
const Page = ({ user }) => {
  const { fullName } = useUser(user);
  const imgField = useRef(null);
  const removeImage = () => {
    router.delete(route("dashboard.user.remove_image_profile", { user }), {
      // @ts-ignore
      onSuccess: (resp) => {
        if (resp.props.flash && resp.props.flash.success) {
          toast.success(t(resp.props.flash.success));
        }
      },
      onError: (errors) => console.log(errors)
    });
  };
  const uploadNewProfilePicture = () => {
    imgField.current && imgField.current.click();
  };
  const updateImage = (file) => {
    if (file) {
      router.post(
        route("dashboard.user.update_image_profile", { user }),
        { profile_picture: file },
        {
          forceFormData: true,
          // @ts-ignore
          onSuccess: (resp) => {
            if (resp.props.flash && resp.props.flash.success) {
              toast.success(t(resp.props.flash.success));
            }
          },
          onError: (errors) => console.log(errors)
        }
      );
    } else {
      console.error("Attempted to update image with null file");
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHeader, { title: t("Edit user"), children: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
      Button,
      {
        size: "sm",
        color: "primary",
        variant: "flat",
        startContent: /* @__PURE__ */ jsx("i", { className: "ri-arrow-left-line" }),
        as: Link,
        href: route("dashboard.users.list"),
        children: t("Back to users list")
      }
    ) }) }),
    /* @__PURE__ */ jsx(PageContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-6 lg:gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 space-y-8", children: [
        /* @__PURE__ */ jsxs(Card, { shadow: "none", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "pb-4 flex-col p-0 relative group", children: [
            /* @__PURE__ */ jsx(
              Image,
              {
                width: "100%",
                height: 350,
                removeWrapper: true,
                classNames: {
                  img: cn(
                    "w-full rounded-b-none rounded-t-lg object-cover object-top"
                  )
                },
                src: user.profile_picture ? `/storage/img/users/avatars/${user.profile_picture}` : userBlank
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: imgField,
                type: "file",
                style: { height: 0, visibility: "hidden" },
                onChange: (e) => {
                  const target = e.target;
                  if (target.files) {
                    updateImage(target.files[0]);
                  }
                }
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "bg-gradient-to-t from-black/60 to-transparent",
                  "flex-1 space-y-4 p-5 pt-20 inset-x-0 bottom-0 absolute z-10",
                  "transition-opacity group-hover:opacity-100",
                  user.profile_picture && "opacity-0"
                ),
                children: /* @__PURE__ */ jsxs("div", { className: "flex gap-x-3 justify-between", children: [
                  /* @__PURE__ */ jsx(
                    Chip,
                    {
                      size: "sm",
                      color: "primary",
                      avatar: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("i", { className: "ri-image-line ri-lg ml-1 -top-px relative" }) }),
                      className: cn(
                        "cursor-pointer select-none md:order-2",
                        "hover:opacity-90 focus:opacity-50 active:opacity-disabled"
                      ),
                      onClick: uploadNewProfilePicture,
                      children: user.profile_picture ? t("Change picture") : t("Add profile image")
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { children: user.profile_picture && /* @__PURE__ */ jsx(
                    Chip,
                    {
                      size: "sm",
                      color: "danger",
                      avatar: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("i", { className: "ri-delete-bin-2-line ri-lg ml-1 -top-px relative" }) }),
                      className: "cursor-pointer select-none hover:opacity-90 focus:opacity-50 active:opacity-disabled",
                      onClick: removeImage,
                      children: t("Remove picture")
                    }
                  ) })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsx(CardBody, { children: /* @__PURE__ */ jsxs("ul", { className: "text-sm px-5 pt-6 pb-10 space-y-5 [&>li]:flex [&>li]:justify-between", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-foreground-500", children: t("Username") }),
              /* @__PURE__ */ jsxs("span", { className: "font-light", children: [
                "@",
                user.username
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-foreground-500", children: t("Role") }),
              /* @__PURE__ */ jsx(
                Chip,
                {
                  size: "sm",
                  color: "primary",
                  variant: "flat",
                  className: "h-5 px-1.5",
                  children: user.role
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-foreground-500", children: t("Status") }),
              /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(
                Chip,
                {
                  size: "sm",
                  variant: "dot",
                  color: user.status === "enabled" ? "success" : "danger",
                  children: user.status
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-foreground-500", children: t("Name") }),
              /* @__PURE__ */ jsx("span", { className: "font-light", children: fullName })
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-foreground-500", children: t("Email") }),
              /* @__PURE__ */ jsx("span", { className: "font-light", children: user.email })
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-foreground-500", children: t("Phone") }),
              /* @__PURE__ */ jsx("span", { className: "font-light", children: user.phone })
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-foreground-500", children: t("Company") }),
              /* @__PURE__ */ jsx("span", { className: "font-light", children: user.company })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(SessionsManager, {})
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-2 space-y-12", children: [
        /* @__PURE__ */ jsx(FormBasicInformation, {}),
        /* @__PURE__ */ jsx(FormPersonalInformation, {}),
        /* @__PURE__ */ jsx(FormProfessionalInformation, {}),
        /* @__PURE__ */ jsx(FormPassword, {}),
        /* @__PURE__ */ jsx(DeleteAccount, {})
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "h-20" })
  ] });
};
Page.layout = (page) => /* @__PURE__ */ jsx(
  Layout,
  {
    ...{
      children: page,
      pageTitle: `${t("User")} ${page.props.user && page.props.user.username}`
    }
  }
);
export {
  Page,
  Page as default
};
