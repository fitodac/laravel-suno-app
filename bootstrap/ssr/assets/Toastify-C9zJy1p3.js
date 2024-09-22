import { jsx } from "react/jsx-runtime";
import { ToastContainer, Slide } from "react-toastify";
import { u as useMainStore } from "./useMainStore-BNNQMtH2.js";
const Toastify = () => {
  const { colorMode } = useMainStore();
  return /* @__PURE__ */ jsx(
    ToastContainer,
    {
      position: "bottom-right",
      autoClose: 4e3,
      hideProgressBar: false,
      newestOnTop: true,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      theme: colorMode,
      transition: Slide
    }
  );
};
export {
  Toastify as T
};
