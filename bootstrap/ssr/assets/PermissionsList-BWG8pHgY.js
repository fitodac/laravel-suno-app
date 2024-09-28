import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback } from "react";
import { Button, Table, Pagination, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { t } from "./translations-CCbcAZo6.js";
import { usePage, router } from "@inertiajs/react";
const columns = [
  { key: "name", label: t("Name") },
  { key: "guard_name", label: t("Guard") },
  { key: "actions", label: "" }
];
const PermissionsList = ({
  setDrawerOpen,
  setSelectedPermission,
  onOpen
}) => {
  const {
    props: { permissions, protected_permissions }
  } = usePage();
  const undeletablePermissions = protected_permissions;
  const { links, current_page, data } = permissions;
  const renderCell = useCallback(
    (permission, columnKey) => {
      return {
        name: /* @__PURE__ */ jsx("span", { className: "font-medium", children: permission.name }),
        guard_name: permission.guard_name,
        actions: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx("div", { className: "space-x-2", children: !undeletablePermissions.includes(permission.name) ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "sm",
              color: "danger",
              variant: "flat",
              onPress: () => {
                onOpen();
                setSelectedPermission(permission);
              },
              children: t("Delete")
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "sm",
              color: "primary",
              variant: "flat",
              onPress: () => {
                setDrawerOpen(true);
                setSelectedPermission(permission);
              },
              children: t("Edit")
            }
          )
        ] }) : /* @__PURE__ */ jsx(Button, { size: "sm", isDisabled: true, children: t("Edit") }) }) })
      }[columnKey];
    },
    []
  );
  return /* @__PURE__ */ jsx(Fragment, { children: permissions && /* @__PURE__ */ jsxs(
    Table,
    {
      removeWrapper: true,
      "aria-label": "Table",
      classNames: {
        th: "[&]:first:rounded-none [&]:last:rounded-none",
        td: "border-t border-content3"
      },
      bottomContent: /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center", children: links && /* @__PURE__ */ jsx("div", { className: "flex w-full justify-end", children: /* @__PURE__ */ jsx(
        Pagination,
        {
          size: "sm",
          isCompact: true,
          showControls: true,
          showShadow: true,
          variant: "light",
          color: "primary",
          page: current_page,
          total: links.length - 2 || 0,
          classNames: { wrapper: "shadow-none" },
          onChange: (page) => router.reload({
            data: { page },
            only: ["users"]
          })
        }
      ) }) }),
      children: [
        /* @__PURE__ */ jsx(TableHeader, { columns, children: (column) => /* @__PURE__ */ jsx(
          TableColumn,
          {
            allowsSorting: column.allowsSorting ?? false,
            children: column.label
          },
          column.key
        ) }),
        /* @__PURE__ */ jsx(
          TableBody,
          {
            items: data,
            children: (item) => /* @__PURE__ */ jsx(TableRow, { children: (key) => /* @__PURE__ */ jsx(TableCell, { children: renderCell(item, String(key)) }) }, item.id)
          }
        )
      ]
    }
  ) });
};
export {
  PermissionsList
};
