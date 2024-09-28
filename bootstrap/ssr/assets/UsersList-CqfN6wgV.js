import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { Avatar, Chip, cn, Button, Table, Pagination, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { t } from "./translations-CCbcAZo6.js";
import { usePage, Link, router } from "@inertiajs/react";
const columns = [
  { key: "id", label: "#" },
  { key: "username", label: t("Username") },
  { key: "name", label: t("Name") },
  { key: "company", label: t("Company") },
  { key: "status", label: t("Status") },
  { key: "sessions", label: t("Sessions") },
  { key: "actions", label: "" }
];
const UsersList = () => {
  const { users, total } = usePage().props;
  const { links, current_page } = users;
  const renderCell = useCallback((user, columnKey) => {
    var _a, _b, _c, _d, _e;
    return {
      id: /* @__PURE__ */ jsx(Fragment, { children: user.id }),
      username: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex gap-x-3 items-center", children: [
        /* @__PURE__ */ jsx(
          Avatar,
          {
            src: `/storage/img/users/avatars/${user.profile_picture}`,
            name: user.name[0] + user.lastname[0],
            radius: "full",
            isBordered: ((_a = user.sessions) == null ? void 0 : _a.length) ? true : false,
            color: ((_b = user.sessions) == null ? void 0 : _b.length) ? "success" : "default"
          }
        ),
        user.username
      ] }) }),
      name: /* @__PURE__ */ jsx("span", { className: "font-medium", children: `${user.name} ${user.lastname}` }),
      company: user.company,
      status: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
        Chip,
        {
          size: "sm",
          color: user.status === "enabled" ? "success" : "danger",
          variant: "dot",
          children: user.status
        }
      ) }),
      sessions: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
        Chip,
        {
          size: "sm",
          color: ((_c = user.sessions) == null ? void 0 : _c.length) ? "success" : "default",
          variant: "flat",
          className: cn(!((_d = user.sessions) == null ? void 0 : _d.length) && "text-opacity-60"),
          children: ((_e = user.sessions) == null ? void 0 : _e.length) ? "Active" : "Inactive"
        }
      ) }),
      actions: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx("div", { className: "space-x-2", children: /* @__PURE__ */ jsx(
        Button,
        {
          size: "sm",
          color: "primary",
          variant: "flat",
          as: Link,
          href: route("dashboard.user.edit", { user }),
          children: t("Edit")
        }
      ) }) })
    }[columnKey];
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: users && /* @__PURE__ */ jsxs(
    Table,
    {
      removeWrapper: true,
      "aria-label": "Table",
      classNames: {
        th: "[&]:first:rounded-none [&]:last:rounded-none",
        td: "border-t border-content3"
      },
      bottomContent: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm flex-1", children: /* @__PURE__ */ jsx("span", { className: "whitespace-nowrap", children: t("Total users: %", { total }) }) }),
        links && /* @__PURE__ */ jsx("div", { className: "flex w-full justify-end", children: /* @__PURE__ */ jsx(
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
        ) })
      ] }),
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
            items: users.data,
            children: (item) => /* @__PURE__ */ jsx(TableRow, { children: (key) => /* @__PURE__ */ jsx(TableCell, { children: renderCell(item, String(key)) }) }, item.id)
          }
        )
      ]
    }
  ) });
};
export {
  UsersList
};
