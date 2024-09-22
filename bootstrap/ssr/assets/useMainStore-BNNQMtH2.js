import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
const useMainStore = create()(
  persist(
    (set, get) => ({
      colorMode: localStorage.getItem("colorMode") || "dark",
      setColorMode: (colorMode) => {
        set({ colorMode });
      },
      auth: { user: null },
      setAuth: (auth) => set({ auth }),
      profileTab: "profile",
      setProfileTab: (profileTab) => set({ profileTab }),
      sidebarOpen: false,
      setSidebarOpen: (sidebarOpen) => set({ sidebarOpen })
    }),
    {
      name: "store",
      storage: createJSONStorage(() => localStorage)
    }
  )
);
export {
  useMainStore as u
};
