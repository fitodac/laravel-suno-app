import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { Card, CardHeader, Image, cn, Chip, CardBody } from "@nextui-org/react";
import "./useMainStore-BNNQMtH2.js";
import { usePage, router } from "@inertiajs/react";
import { u as useUser, a as userBlank } from "./blank-462x265-CaLUIvp7.js";
import { t } from "./translations-CCbcAZo6.js";
import { toast } from "react-toastify";
import "zustand";
import "zustand/middleware";
const ProfileCard = () => {
  const user = usePage().props.auth.user;
  const { fullName } = useUser(user);
  const imgField = useRef(null);
  const removeImage = () => {
    router.delete(route("profile.remove_image"), {
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
        route("profile.update_image"),
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
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Card, { shadow: "none", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "pb-4 flex-col p-0 relative group", children: [
      /* @__PURE__ */ jsx(
        Image,
        {
          width: "100%",
          height: 350,
          removeWrapper: true,
          classNames: {
            img: cn(
              "w-full h-full rounded-b-none rounded-t-lg object-cover object-top"
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
      user.roles && /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-foreground-500", children: t("Role") }),
        /* @__PURE__ */ jsx(
          Chip,
          {
            size: "sm",
            color: "primary",
            variant: "flat",
            className: "h-5 px-1.5",
            children: user.roles[0].name
          }
        )
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
  ] }) });
};
export {
  ProfileCard
};
