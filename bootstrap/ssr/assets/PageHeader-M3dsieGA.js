import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "@nextui-org/react";
const PageHeader = ({ title, children, classNames }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "bg-white w-full py-7",
        "flex justify-center",
        "md:px-10 md:py-12 xl:gap-20",
        "dark:bg-black",
        classNames && classNames.base
      ),
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "w-full grid gap-3 md:gap-6",
            children && "sm:grid-cols-2",
            classNames && classNames.wrapper
          ),
          children: [
            title && /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold select-none md:text-2xl", children: title }),
            children && /* @__PURE__ */ jsx("div", { children })
          ]
        }
      )
    }
  );
};
export {
  PageHeader as P
};
