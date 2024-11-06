import { StateCreator } from "zustand";

export interface BoardState {
  site: string;
  defaultModal: boolean;
  setDefaultModal: (value: boolean) => void;
}

export const BoardState: StateCreator<BoardState> = (set, get) => ({
  site: "",
  defaultModal: true,
  setDefaultModal: (value: boolean) => {
    set({ defaultModal: value });
  },
});
