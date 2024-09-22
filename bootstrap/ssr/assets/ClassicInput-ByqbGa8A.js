import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useMemo } from "react";
import { useInput, cn } from "@nextui-org/react";
const ClassicInput = forwardRef((props, ref) => {
  const {
    Component,
    label,
    domRef,
    description,
    isClearable,
    startContent,
    endContent,
    shouldLabelBeOutside,
    shouldLabelBeInside,
    errorMessage,
    getBaseProps,
    getLabelProps,
    getInputProps,
    getInnerWrapperProps,
    getInputWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getClearButtonProps
  } = useInput({
    ...props,
    ref,
    // this is just for the example, the props bellow should be passed by the parent component
    // label: 'Search',
    // type: 'search',
    // placeholder: 'Type to search...',
    labelPlacement: "outside",
    // startContent: (
    // 	<SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
    // ),
    // custom styles
    classNames: {
      label: cn(
        "absolute left-1 -translate-y-3",
        "group-data-[filled-within=true]:-translate-y-3 group-data-[filled-within=true]:left-1",
        props.size === "sm" && "-top-2",
        (props.size === void 0 || props.size === "md") && "-top-3",
        props.size === "lg" && "-top-4"
      )
    }
  });
  const labelContent = /* @__PURE__ */ jsx("label", { ...getLabelProps(), children: label });
  const end = useMemo(() => {
    if (isClearable) {
      return /* @__PURE__ */ jsx("span", { ...getClearButtonProps(), children: endContent || /* @__PURE__ */ jsx("i", { className: "ri-close-line" }) });
    }
    return endContent;
  }, [isClearable, getClearButtonProps]);
  const innerWrapper = useMemo(() => {
    if (startContent || end) {
      return /* @__PURE__ */ jsxs("div", { ...getInnerWrapperProps(), children: [
        startContent,
        /* @__PURE__ */ jsx("input", { ...getInputProps() }),
        end
      ] });
    }
    return /* @__PURE__ */ jsx("input", { ...getInputProps() });
  }, [startContent, end, getInputProps, getInnerWrapperProps]);
  return /* @__PURE__ */ jsxs(Component, { ...getBaseProps(), children: [
    shouldLabelBeOutside ? labelContent : null,
    /* @__PURE__ */ jsxs(
      "div",
      {
        ...getInputWrapperProps(),
        role: "button",
        onClick: () => {
          var _a;
          (_a = domRef.current) == null ? void 0 : _a.focus();
        },
        children: [
          shouldLabelBeInside ? labelContent : null,
          innerWrapper
        ]
      }
    ),
    description && /* @__PURE__ */ jsx("div", { ...getDescriptionProps(), children: description }),
    errorMessage && /* @__PURE__ */ jsx("div", { ...getErrorMessageProps(), children: errorMessage })
  ] });
});
export {
  ClassicInput as C
};
