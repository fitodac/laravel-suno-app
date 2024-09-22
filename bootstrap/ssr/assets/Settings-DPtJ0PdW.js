import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { Tabs, Tab, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Head } from "@inertiajs/react";
const SettingsPage = ({ settings }) => {
  const general = useRef(Object.entries(settings.general));
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Settings" }),
    /* @__PURE__ */ jsx("section", { className: " mx-6 mt-10 md:max-w-2xl md:mx-auto lg:max-w-4xl", children: /* @__PURE__ */ jsxs(Tabs, { "aria-label": "Options", children: [
      /* @__PURE__ */ jsx(Tab, { title: "General", children: /* @__PURE__ */ jsxs(
        Table,
        {
          "aria-label": "General settings",
          radius: "none",
          removeWrapper: true,
          isStriped: true,
          children: [
            /* @__PURE__ */ jsxs(TableHeader, { children: [
              /* @__PURE__ */ jsx(TableColumn, { children: "Key" }),
              /* @__PURE__ */ jsx(TableColumn, { children: "Value" })
            ] }),
            /* @__PURE__ */ jsx(TableBody, { children: general.current.map((row) => /* @__PURE__ */ jsxs(TableRow, { children: [
              /* @__PURE__ */ jsx(TableCell, { className: "font-semibold capitalize", children: row[0] }),
              /* @__PURE__ */ jsx(TableCell, { children: row[1] })
            ] }, row[0])) })
          ]
        }
      ) }, "general"),
      /* @__PURE__ */ jsx(Tab, { title: "Other" }, "other")
    ] }) })
  ] });
};
export {
  SettingsPage as default
};
