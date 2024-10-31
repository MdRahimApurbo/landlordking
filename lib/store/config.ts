import { createJSONStorage, persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";
import { BoardState } from "./slices/boardState";
import { MainState } from "./slices/mainState";

export type Store = BoardState & MainState;

export const store = (initProps?: Partial<Store>) => {
  return createStore<Store>()(
    persist(
      (...a) => ({
        ...MainState(...a),
        ...BoardState(...a),
        ...initProps,
      }),
      {
        name: "appStateStorage",
        partialize: (state) => ({}),
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
};
