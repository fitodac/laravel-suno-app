import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { usePage, Link, Head } from "@inertiajs/react";
import { u as useMainStore } from "./useMainStore-BNNQMtH2.js";
import { u as useColorMode } from "./useColorMode-DIaHfFiE.js";
import { u as useWindowWidth, t as templates, a as ProfileDropdown } from "./PageContent-BjQSMN_k.js";
import { Sidebar as Sidebar$1, Menu, SubMenu, MenuItem } from "react-pro-sidebar";
import { motion } from "framer-motion";
import { cn, Navbar, Button, Divider, NavbarContent, Dropdown, NavbarItem, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import "react-toastify";
import { t as theme } from "./useMediaManager-B4H2TCSK.js";
import "@tackboon/react-grid-rearrange";
import "dayjs";
const { executive: template$1 } = templates;
const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useMainStore();
  const { windowWidth } = useWindowWidth();
  const {
    props: { demoExecutiveAdminNavbar }
  } = usePage();
  const adminNavbar = demoExecutiveAdminNavbar;
  useEffect(() => {
    setSidebarOpen(false);
  }, [demoExecutiveAdminNavbar]);
  if (windowWidth >= template$1.sidebar.breakpoint) {
    return /* @__PURE__ */ jsx(Fragment, {});
  }
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
const { executive: template } = templates;
const Header = () => {
  const { sidebarOpen, setSidebarOpen, colorMode } = useMainStore();
  const {
    props: { adminNavbar }
  } = usePage();
  return /* @__PURE__ */ jsxs(
    Navbar,
    {
      isMenuOpen: true,
      shouldHideOnScroll: true,
      maxWidth: "xl",
      height: "auto",
      classNames: {
        base: template.topbar.cn.base,
        wrapper: "gap-0 md:flex-col",
        content: "w-full"
      },
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "w-full py-2 flex justify-between items-center",
            style: { height: template.topbar.height },
            children: [
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: theme[colorMode].logo, alt: "Logo", className: "w-10" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-3 h-full", children: [
                /* @__PURE__ */ jsx(ProfileDropdown, { ...{ showOnlyName: true } }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    isIconOnly: true,
                    size: "sm",
                    radius: "lg",
                    variant: "light",
                    className: template.topbar.navbar.cn.toggler,
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
            ]
          }
        ),
        /* @__PURE__ */ jsx(Divider, { className: "opacity-30 hidden md:flex dark:opacity-100" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              template.topbar.navbar.cn.navbar,
              "w-full scrollbar-thumb-transparent scrollbar-track-transparent"
            ),
            children: /* @__PURE__ */ jsx("div", { className: "scrollbar-thin overflow-x-scroll", children: /* @__PURE__ */ jsx(NavbarContent, { children: adminNavbar && adminNavbar.map((nav) => /* @__PURE__ */ jsx(Fragment, { children: nav.menu.length > 0 && nav.menu.map(
              ({ label, route: path, submenu }) => submenu && submenu.length > 0 ? /* @__PURE__ */ jsxs(Dropdown, { children: [
                /* @__PURE__ */ jsx(NavbarItem, { children: /* @__PURE__ */ jsx(DropdownTrigger, { children: /* @__PURE__ */ jsx(
                  Button,
                  {
                    disableRipple: true,
                    className: cn(
                      template.topbar.navbar.cn.navbarItem
                    ),
                    endContent: /* @__PURE__ */ jsx("i", { className: "ri-arrow-down-s-line" }),
                    radius: "none",
                    variant: "light",
                    children: label
                  }
                ) }) }),
                /* @__PURE__ */ jsx(
                  DropdownMenu,
                  {
                    items: submenu,
                    hideEmptyContent: true,
                    "aria-label": "Sub menu",
                    className: template.topbar.navbar.cn.subMenu,
                    style: {
                      width: `${template.topbar.subMenuWidth}px`,
                      maxHeight: `${template.topbar.subMenuMaxHeight}px`
                    },
                    itemClasses: {
                      base: "gap-4"
                    },
                    children: (item) => /* @__PURE__ */ jsx(
                      DropdownItem,
                      {
                        textValue: item.label,
                        className: template.topbar.navbar.cn.subMenuItem,
                        children: /* @__PURE__ */ jsx(
                          Link,
                          {
                            href: route(item.route || ""),
                            className: "p-2 flex",
                            children: item.label
                          }
                        )
                      },
                      item.label
                    )
                  }
                )
              ] }, label + path) : /* @__PURE__ */ jsx(
                NavbarItem,
                {
                  className: template.topbar.navbar.cn.navbarItem,
                  children: /* @__PURE__ */ jsx(Link, { href: route(path || ""), className: "flex", children: label })
                },
                label + path
              )
            ) }, nav.key)) }) })
          }
        )
      ]
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
    }
  }, [windowWidth]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: pageTitle }),
    /* @__PURE__ */ jsxs("main", { className: "bg-background min-h-screen", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center __min-h-svh", children: [
        /* @__PURE__ */ jsx(Sidebar, {}),
        /* @__PURE__ */ jsx("div", { className: "flex-1", children })
      ] })
    ] })
  ] });
};
export {
  Layout as L
};
