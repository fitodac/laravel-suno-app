import { useState, useEffect } from "react";
import { a as template, b as template$1 } from "./useMediaManager-B4H2TCSK.js";
import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { Dropdown, DropdownTrigger, User, Avatar, DropdownMenu, DropdownSection, DropdownItem, cn } from "@nextui-org/react";
import { t } from "./translations-CCbcAZo6.js";
import { usePage, router } from "@inertiajs/react";
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { windowWidth };
};
const templates = {
  corporate: template,
  executive: template$1
};
const ProfileDropdown = ({
  showName,
  showOnlyName,
  showNameInDropdown = true
}) => {
  const user = usePage().props.auth.user;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Dropdown, { radius: "none", placement: "bottom-end", children: [
    /* @__PURE__ */ jsx(DropdownTrigger, { className: "cursor-pointer select-none", children: showOnlyName ? /* @__PURE__ */ jsxs("div", { className: "text-sm font-light", children: [
      t("Hello"),
      ", ",
      `${user.username}`
    ] }) : showName ? /* @__PURE__ */ jsx(
      User,
      {
        isFocusable: true,
        name: user.username,
        description: user.company,
        avatarProps: {
          size: "sm",
          color: "primary",
          name: user.username[0] + user.username[1],
          src: `/storage/img/users/avatars/${user.profile_picture}`
        },
        classNames: {
          base: "rounded-none flex-row-reverse",
          name: "text-foreground-600 leading-tight truncate w-24",
          description: "text-foreground-400 leading-tight truncate w-24"
        }
      }
    ) : /* @__PURE__ */ jsx(
      Avatar,
      {
        ...{
          size: "sm",
          color: "primary",
          name: user.username[0] + user.username[1],
          src: `/storage/img/users/avatars/${user.profile_picture}`
        }
      }
    ) }),
    /* @__PURE__ */ jsxs(
      DropdownMenu,
      {
        "aria-label": "Profile dropdown",
        color: "primary",
        variant: "light",
        children: [
          /* @__PURE__ */ jsxs(DropdownSection, { showDivider: true, children: [
            showNameInDropdown ? /* @__PURE__ */ jsx(
              DropdownItem,
              {
                textValue: String(t("My account")),
                isReadOnly: true,
                className: "select-none cursor-default",
                children: /* @__PURE__ */ jsx("span", { className: "text-xs text-foreground-500 font-medium", children: user.name && user.lastname ? `${user.name} ${user.lastname}` : user.username })
              }
            ) : /* @__PURE__ */ jsx(Fragment, {}),
            /* @__PURE__ */ jsx(
              DropdownItem,
              {
                textValue: String(t("My account")),
                onClick: () => router.visit(route("profile.edit")),
                startContent: /* @__PURE__ */ jsx("i", { className: "ri-profile-line ri-lg" }),
                children: t("My account")
              }
            )
          ] }),
          /* @__PURE__ */ jsx(DropdownSection, { children: /* @__PURE__ */ jsx(
            DropdownItem,
            {
              textValue: String(t("Log out")),
              onClick: () => router.post(route("logout")),
              startContent: /* @__PURE__ */ jsx("i", { className: "ri-logout-circle-r-line ri-lg text-danger" }),
              children: t("Log out")
            }
          ) })
        ]
      }
    )
  ] }) });
};
const PageContent = ({ children, className, aside }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("section", { className: cn("px-5 py-7 md:px-6 md:py-8", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-20", children: [
      children,
      aside && /* @__PURE__ */ jsx("aside", { className: "hidden sticky top-20 h-32 xl:flex", children: aside })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "h-20" })
  ] }) });
};
export {
  PageContent as P,
  ProfileDropdown as a,
  templates as t,
  useWindowWidth as u
};
