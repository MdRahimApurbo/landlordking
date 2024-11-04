"use client";
import { socket } from "@/app/socket";
import StoreProvider from "@/lib/store/Provider";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React, { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  if (typeof window !== "undefined") socket.connect();

  return (
    <StoreProvider>
      <NextThemesProvider
        defaultTheme="dark"
        attribute="class"
        value={{
          dark: "dark",
          light: "light",
        }}
      >
        <NextUIProvider>{children}</NextUIProvider>
      </NextThemesProvider>
    </StoreProvider>
  );
};

export default Provider;
