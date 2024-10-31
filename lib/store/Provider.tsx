"use client";
import { store, type Store } from "@/lib/store/config";
import { createContext, type ReactNode, useContext, useRef } from "react";
import { type StoreApi, useStore as useZusStore } from "zustand";

export const StoreContext = createContext<StoreApi<Store> | null>(null);

export interface StoreProviderProps {
  children: ReactNode;
}

const StoreProvider = ({ children }: StoreProviderProps) => {
  // const initStore = (): Partial<Store> => {
  //   try {
  //     if (webSocketUrl) {
  //       const websocket = new WebSocket(webSocketUrl);

  //       return {
  //         websocket: websocket,
  //       };
  //     } else {
  //       return {
  //         websocket: "",
  //       };
  //     }
  //   } catch (error) {
  //     console.error("Invalid WebSocket URL:", webSocketUrl);
  //     return {};
  //   }
  // };

  const storeRef = useRef<StoreApi<Store>>(store());
  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = <T,>(selector: (store: Store) => T): T => {
  const counterStoreContext = useContext(StoreContext);
  if (!counterStoreContext) {
    throw new Error(`useStore must be used within StoreProvider`);
  }
  return useZusStore(counterStoreContext, selector);
};

export default StoreProvider;
