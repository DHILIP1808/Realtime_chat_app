// src/utils/socket.ts
import { io, Socket } from "socket.io-client";
import type { Message } from "../types/chat";

let socket: Socket | null = null;

export const connectSocket = () => {
  if (!socket) {
    socket = io("http://localhost:4000"); // backend URL
  }
  return socket;
};

export const sendMessage = (msg: Message) => {
  if (socket) {
    socket.emit("send_message", msg);
  }
};

export const subscribeToMessages = (callback: (msg: Message) => void) => {
  if (!socket) return;
  socket.on("receive_message", callback);
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
