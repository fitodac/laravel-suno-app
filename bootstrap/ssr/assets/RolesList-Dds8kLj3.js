import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { Button, Chip, Table, Pagination, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { t } from "./translations-CCbcAZo6.js";
import { usePage, Link, router } from "@inertiajs/react";
const columns = [
  { key: "id", label: "#" },
  { key: "name", label: t("Name") },
  { key: "guard_name", label: t("Guard") },
  { key: "permissions", label: t("Permissions") },
  { key: "users_count", label: t("Associated users") },
  { key: "actions", label: "" }
];
const RolesList = () => {
  const {
    props: { roles }
  } = usePage();
  const { links, current_page, data } = roles;
  const renderCell = useCallback((role, columnKey) => {
    return {
      id: /* @__PURE__ */ jsx(Fragment, { children: role.id }),
      name: /* @__PURE__ */ jsx("span", { className: "font-medium", children: role.name }),
      guard_name: role.guard_name,
      actions: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx("div", { className: "space-x-2", children: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
        Button,
        {
          size: "sm",
          color: "primary",
          variant: "flat",
          as: Link,
          href: route("dashboard.role.edit", { role }),
          children: t("Edit")
        }
      ) }) }) }),
      permissions: /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: role.permissions.map((permission) => /* @__PURE__ */ jsx(Chip, { size: "sm", color: "primary", children: permission.name }, permission.id)) }),
      users_count: role.users_count
    }[columnKey];
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: roles && /* @__PURE__ */ jsxs(
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
            only: ["roles"]
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
  RolesList
};
