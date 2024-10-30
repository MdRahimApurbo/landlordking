"use client";
import { NextUIProvider } from "@nextui-org/react";
import React, { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Provider;
