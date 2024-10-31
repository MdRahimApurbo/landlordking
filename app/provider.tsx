"use client";
import StoreProvider from "@/lib/store/Provider";
import { NextUIProvider } from "@nextui-org/react";
import React, { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <StoreProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </StoreProvider>
  );
};

export default Provider;
