import { useEffect } from "react";
import { u as useMainStore } from "./useMainStore-BNNQMtH2.js";
const useColorMode = () => {
  const { colorMode, setColorMode } = useMainStore();
  useEffect(() => {
    var _a, _b;
    if (colorMode === "dark") {
      (_a = document.querySelector("html")) == null ? void 0 : _a.classList.add("dark");
    } else {
      (_b = document.querySelector("html")) == null ? void 0 : _b.classList.remove("dark");
    }
  }, [colorMode]);
  const changeColorMode = () => {
    if (setColorMode) {
      colorMode === "light" ? setColorMode("dark") : setColorMode("light");
    }
  };
  return { colorMode, changeColorMode };
};
export {
  useColorMode as u
};
