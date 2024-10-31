import { StateCreator } from "zustand";

export interface MainState {
  websocket: string | null | WebSocket;
}

export const MainState: StateCreator<MainState> = (set, get) => ({
  websocket: null,
});
