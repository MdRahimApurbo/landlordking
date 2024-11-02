"use client";
import { socketUrl } from "@/setupEnv";
import { io } from "socket.io-client";

export const socket = io(socketUrl);