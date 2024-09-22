import { cn } from "@nextui-org/react";
import { createContext } from "react";
import axios from "axios";
import "react-toastify";
import "react/jsx-runtime";
import "numeral";
const theme = {
  /**
   *
   *
   * Light mode
   * ........................................................................
   */
  light: {
    logo: "/img/brand.svg"
  },
  /**
   *
   *
   * Dark mode
   * ........................................................................
   */
  dark: {
    logo: "/img/brand.svg"
  },
  /**
   *
   *
   * Fonts
   * ........................................................................
   */
  fontSize: {
    tiny: "0.75rem",
    // text-tiny
    small: "0.875rem",
    // text-small
    medium: "1rem",
    // text-medium
    large: "1.125rem"
    // text-large
  },
  lineHeight: {
    tiny: "1rem",
    // text-tiny
    small: "1.25rem",
    // text-small
    medium: "1.5rem",
    // text-medium
    large: "1.75rem"
    // text-large
  },
  /**
   *
   *
   * Border radius
   * ........................................................................
   */
  radius: {
    small: "4px",
    // rounded-small
    medium: "6px",
    // rounded-medium
    large: "8px"
    // rounded-large
  },
  /**
   *
   *
   * Border width
   * ........................................................................
   */
  borderWidth: {
    small: "0.7px",
    // border-small
    medium: "1.5px",
    // border-medium (default)
    large: "3px"
    // border-large
  },
  /**
   *
   *
   * Form components
   * ........................................................................
   */
  form: {
    field: {
      variant: "flat",
      classicStyle: true
    }
  },
  topbar: {
    height: "56px",
    // Class names used for coloring
    cn: {
      base: "bg-default-50 border-divider"
    }
  }
};
const template$1 = {
  /**
   *
   *
   * Sidebar settings
   * ........................................................................
   */
  sidebar: {
    width: "230px",
    collapsedWidth: "0px",
    breakpoint: 820,
    item: {
      hover: {
        backgroundColor: "#374151",
        color: "white"
      }
    },
    cn: {
      base: cn("bg-default-50 !border-divider", "[&>div]:bg-transparent"),
      menuTitle: "text-foreground-600",
      menuItem: cn(
        "font-medium select-none",
        "has-[.ps-menu-button]:text-sm",
        "[&>*]:transition-colors",
        "[&>*>li>.ps-menu-button]:h-9",
        "[&>ul>li>.ps-submenu-content>ul>li>.ps-menu-button]:h-9",
        // Default color
        "text-foreground-800",
        // Active item color:
        "[&>ul>li>.ps-active]:text-primary",
        "[&>ul>li>.ps-submenu-content>ul>.ps-active]:text-primary",
        // Hover colors
        "[&>*>li>.ps-menu-button:hover]:bg-content3",
        "[&>ul>li>.ps-submenu-content>ul>li>.ps-menu-button:hover]:bg-content3"
      ),
      menuIcon: "text-base",
      subMenu: "bg-content2",
      topSpacer: "h-4"
    }
  },
  /**
   *
   *
   * Application topbar
   * ........................................................................
   */
  topbar: {
    height: "56px",
    // Class names used for coloring
    cn: {
      base: "bg-default-50"
    }
  }
};
const template = {
  /**
   *
   *
   * Sidebar settings
   * ........................................................................
   */
  sidebar: {
    width: "230px",
    collapsedWidth: "0px",
    breakpoint: 768,
    item: {
      hover: {
        backgroundColor: "#374151",
        color: "white"
      }
    },
    cn: {
      base: cn("bg-default-50 !border-divider", "[&>div]:bg-transparent"),
      menuTitle: "text-foreground-600",
      menuItem: cn(
        "font-medium select-none",
        "has-[.ps-menu-button]:text-sm",
        "[&>*]:transition-colors",
        "[&>*>li>.ps-menu-button]:h-9",
        "[&>ul>li>.ps-submenu-content>ul>li>.ps-menu-button]:h-9",
        // Default color
        "text-foreground-800",
        // Active item color:
        "[&>ul>li>.ps-active]:text-primary",
        "[&>ul>li>.ps-submenu-content>ul>.ps-active]:text-primary",
        // Hover colors
        "[&>*>li>.ps-menu-button:hover]:bg-content3",
        "[&>ul>li>.ps-submenu-content>ul>li>.ps-menu-button:hover]:bg-content3"
      ),
      menuIcon: "text-base",
      subMenu: "bg-content2",
      topSpacer: "h-4"
    }
  },
  /**
   *
   *
   * Application topbar
   * ........................................................................
   */
  topbar: {
    height: "70px",
    subMenuWidth: 280,
    subMenuMaxHeight: 330,
    // Class names used for coloring
    cn: {
      base: "bg-stone-800 dark:bg-default-100"
    },
    navbar: {
      cn: {
        // This class sets the navbar to be hidden in mobile view:
        navbar: "hidden md:flex",
        toggler: "md:hidden",
        navbarItem: cn(
          "bg-transparent text-default-200 text-sm",
          "pt-5 pb-3 px-2",
          "select-none cursor-pointer",
          "dark:text-foreground",
          "data-[hover=true]:bg-transparent"
        ),
        subMenuItem: "min-h-8 p-0 rounded-lg select-none",
        subMenu: "overflow-y-auto rounded-lg"
      }
    }
  }
};
const tabsMapper = (key) => {
  switch (key) {
    case "TAB_UPLOAD":
      return "uploadFiles";
    case "TAB_LIBRARY":
      return "mediaLibrary";
  }
  return key;
};
const initialState = {
  files: null,
  filesTotal: 0,
  filesSelected: [],
  tabsDisabled: [],
  selectedTab: tabsMapper("TAB_LIBRARY"),
  collection: null,
  order: null
};
createContext({
  ...initialState
});
axios.interceptors.request.use(
  function(config) {
    var _a;
    config.headers["X-CSRF-TOKEN"] = (_a = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : _a.getAttribute("content");
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
export {
  template$1 as a,
  template as b,
  theme as t
};
