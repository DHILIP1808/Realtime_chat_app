// src/context/ChatContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { SOCKET_URL } from "../config";
import { type Message } from "../types/chat";

type ChatContextType = {
  socket: Socket | null;
  messages: Message[];
  sendMessage: (msg: Omit<Message, "createdAt">) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const newSocket = io(SOCKET_URL);
    setSocket(newSocket);

    // ✅ Receiving message from backend
    newSocket.on("receive_message", (msg: Message) => {
      setMessages((prev) => [
        ...prev,
        {
          ...msg,
          createdAt: msg.createdAt || new Date().toISOString(), // fallback
        },
      ]);
    });

    // Optional: track online users
    newSocket.on("online_users", (users: string[]) => {
      console.log("Online users:", users);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  // ✅ Sending a message
  const sendMessage = (msg: Omit<Message, "createdAt">) => {
    if (!socket) return;

    const messageWithDate: Message = {
      ...msg,
      createdAt: new Date().toISOString(), // always add timestamp
    };

    socket.emit("send_message", messageWithDate);
    setMessages((prev) => [...prev, messageWithDate]);
  };

  return (
    <ChatContext.Provider value={{ socket, messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error("useChat must be used within ChatProvider");
  return context;
};
