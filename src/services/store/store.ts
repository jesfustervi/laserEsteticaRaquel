import { create } from "zustand";

type State = {
  darkMode: boolean;
};
type Action = {
  setDarkMode: (darkMode: boolean) => void;
};

const useStore = create<State & Action>((set) => ({
  darkMode: false,
  setDarkMode: () => set((state) => ({ darkMode: !state.darkMode }))
}));

export default useStore;
