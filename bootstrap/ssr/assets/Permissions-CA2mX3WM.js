import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { L as Layout } from "./Layout-B-4lKQH7.js";
import { useDisclosure, Button } from "@nextui-org/react";
import { useState } from "react";
import "./useMainStore-BNNQMtH2.js";
import "@inertiajs/react";
import { t } from "./translations-CCbcAZo6.js";
import { P as PageHeader } from "./PageHeader-M3dsieGA.js";
import { P as PageContent } from "./PageContent-BjQSMN_k.js";
import "react-toastify";
import "./useMediaManager-B4H2TCSK.js";
import "@tackboon/react-grid-rearrange";
import "dayjs";
import { CreateEditForm } from "./CreateEditForm-DigsNmfb.js";
import { PermissionsList } from "./PermissionsList-BWG8pHgY.js";
import { DeletePermission } from "./DeletePermission-DjCRZdw_.js";
import Drawer from "react-modern-drawer";
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
const Page = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPermission, setSelectedPermission] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHeader, { title: t("Permissions"), children: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
      Button,
      {
        size: "sm",
        color: "primary",
        className: "px-6",
        variant: "flat",
        onPress: () => {
          setDrawerOpen(true);
          setSelectedPermission(null);
        },
        children: t("Add new permission")
      }
    ) }) }),
    /* @__PURE__ */ jsx(PageContent, { children: /* @__PURE__ */ jsx(
      PermissionsList,
      {
        ...{ setDrawerOpen, setSelectedPermission, onOpen }
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "h-20" }),
    /* @__PURE__ */ jsx(
      Drawer,
      {
        ...{
          open: drawerOpen,
          direction: "bottom",
          size: 370,
          duration: 250,
          className: "!bg-transparent flex !shadow-none"
        },
        children: /* @__PURE__ */ jsx(
          CreateEditForm,
          {
            ...{
              setDrawerOpen,
              selectedPermission,
              setSelectedPermission,
              drawerOpen
            }
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      DeletePermission,
      {
        ...{
          selectedPermission,
          setSelectedPermission,
          isOpen,
          onOpen,
          onOpenChange
        }
      }
    )
  ] });
};
Page.layout = (page) => /* @__PURE__ */ jsx(Layout, { ...{ children: page, pageTitle: String(t("Permissions")) } });
export {
  Page as default
};
