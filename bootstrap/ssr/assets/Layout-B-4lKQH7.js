import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { usePage, Link, Head } from "@inertiajs/react";
import { u as useMainStore } from "./useMainStore-BNNQMtH2.js";
import { u as useColorMode } from "./useColorMode-DIaHfFiE.js";
import { u as useWindowWidth, t as templates, a as ProfileDropdown } from "./PageContent-BjQSMN_k.js";
import { Sidebar as Sidebar$1, Menu, SubMenu, MenuItem } from "react-pro-sidebar";
import { motion } from "framer-motion";
import { Switch, cn, Navbar, Divider, Button } from "@nextui-org/react";
import "react-toastify";
import { t as theme } from "./useMediaManager-B4H2TCSK.js";
import "@tackboon/react-grid-rearrange";
import "dayjs";
const ColorModeToggler = ({}) => {
  const { colorMode, changeColorMode } = useColorMode();
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Switch,
    {
      color: "default",
      isSelected: colorMode === "dark",
      size: "sm",
      thumbIcon: ({ isSelected }) => isSelected ? /* @__PURE__ */ jsx("i", { className: "ri-moon-fill text-zinc-800" }) : /* @__PURE__ */ jsx("i", { className: "ri-sun-fill text-yellow-500" }),
      onChange: changeColorMode,
      classNames: {
        wrapper: "mr-0"
      }
    }
  ) });
};
const { corporate: template$1 } = templates;
const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useMainStore();
  const { windowWidth } = useWindowWidth();
  const { adminNavbar, auth } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "left-0 inset-y-0 mt-px fixed overflow-hidden z-30", children: [
      /* @__PURE__ */ jsxs(
        Sidebar$1,
        {
          transitionDuration: 400,
          id: "navbar",
          width: template$1.sidebar.width,
          collapsedWidth: template$1.sidebar.collapsedWidth,
          collapsed: windowWidth <= template$1.sidebar.breakpoint && !sidebarOpen,
          rootStyles: { height: "100%" },
          className: cn(
            template$1.sidebar.cn.base,
            "[&.ps-collapsed_.ps-submenu-content]:!hidden"
          ),
          style: { paddingTop: template$1.topbar.height },
          children: [
            /* @__PURE__ */ jsx("div", { className: template$1.sidebar.cn.topSpacer }),
            adminNavbar && adminNavbar.map((nav) => /* @__PURE__ */ jsxs(Fragment, { children: [
              nav.title && nav.menu.length > 0 && /* @__PURE__ */ jsx(
                "div",
                {
                  className: cn(
                    "text-xs font-medium px-7 mb-1 mt-2 whitespace-nowrap",
                    template$1.sidebar.cn.menuTitle
                  ),
                  children: nav.title
                }
              ),
              /* @__PURE__ */ jsx(Menu, { closeOnClick: true, className: template$1.sidebar.cn.menuItem, children: nav.menu.map(({ label, route: path, icon, submenu }) => {
                if (submenu) {
                  return /* @__PURE__ */ jsx(
                    SubMenu,
                    {
                      label,
                      icon: /* @__PURE__ */ jsx(
                        "i",
                        {
                          className: cn(icon, template$1.sidebar.cn.menuIcon)
                        }
                      ),
                      children: submenu.map(({ label: label2, route: path2 }) => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
                        MenuItem,
                        {
                          component: /* @__PURE__ */ jsx(Link, { href: route(path2 || "") }),
                          active: location.href === route(path2 || ""),
                          className: template$1.sidebar.cn.subMenu,
                          children: label2
                        }
                      ) }, path2))
                    },
                    label + path
                  );
                }
                return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
                  MenuItem,
                  {
                    component: /* @__PURE__ */ jsx(Link, { href: route(path || "") }),
                    icon: /* @__PURE__ */ jsx(
                      "i",
                      {
                        className: cn(icon, template$1.sidebar.cn.menuIcon)
                      }
                    ),
                    active: location.href === route(path || ""),
                    children: label
                  }
                ) }, path);
              }) })
            ] }, nav.key))
          ]
        }
      ),
      sidebarOpen && windowWidth <= 768 && /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "bg-black/10 inset-0 fixed",
          animate: { opacity: sidebarOpen ? 1 : 0 },
          onClick: () => setSidebarOpen(false)
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "hidden flex-[0_0_auto] md:block",
        style: { width: template$1.sidebar.width }
      }
    )
  ] });
};
const { corporate: template } = templates;
const Header = () => {
  const { sidebarOpen, setSidebarOpen, colorMode } = useMainStore();
  return /* @__PURE__ */ jsx(
    Navbar,
    {
      isBordered: true,
      maxWidth: "full",
      height: template.topbar.height,
      classNames: {
        base: template.topbar.cn.base
      },
      children: /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: cn("flex justify-between items-center"), children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: theme[colorMode].logo,
            alt: "Logo",
            className: "w-20 md:w-24"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-3 h-full", children: [
          /* @__PURE__ */ jsx(ColorModeToggler, {}),
          /* @__PURE__ */ jsx(Divider, { orientation: "vertical", className: "h-5" }),
          /* @__PURE__ */ jsx(ProfileDropdown, {}),
          /* @__PURE__ */ jsx(
            Button,
            {
              isIconOnly: true,
              size: "sm",
              radius: "lg",
              variant: "light",
              className: "md:hidden",
              onPress: () => setSidebarOpen(!sidebarOpen),
              children: /* @__PURE__ */ jsx(
                "i",
                {
                  className: cn(
                    "ri-xl",
                    sidebarOpen ? "ri-close-large-line" : "ri-menu-line"
                  )
                }
              )
            }
          )
        ] })
      ] }) })
    }
  );
};
const Layout = ({ children, pageTitle }) => {
  const { sidebarOpen, setSidebarOpen } = useMainStore();
  const { windowWidth } = useWindowWidth();
  useColorMode();
  useEffect(() => {
    if (windowWidth > 768 && !sidebarOpen) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  }, [windowWidth]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: pageTitle }),
    /* @__PURE__ */ jsxs("main", { className: "bg-background min-h-screen", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs("div", { className: "flex ", children: [
        /* @__PURE__ */ jsx(Sidebar, {}),
        /* @__PURE__ */ jsx("div", { className: "flex-1", children })
      ] })
    ] })
  ] });
};
export {
  Layout as L
};
