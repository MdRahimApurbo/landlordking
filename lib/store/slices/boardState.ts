import { StateCreator } from "zustand";

export interface BoardState {
  site: string;
}

export const BoardState: StateCreator<BoardState> = (set, get) => ({
  site: "",
});
