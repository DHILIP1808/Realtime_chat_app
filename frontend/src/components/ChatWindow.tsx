// src/components/ChatWindow.tsx
import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import { useChat } from "../context/ChatContext";

export default function ChatWindow() {
  const { messages } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  return (
    <div
      className="flex-1 flex flex-col p-4 overflow-y-auto bg-gray-50"
      ref={scrollRef}
    >
      {messages.map((msg) => (
        <MessageBubble
          key={msg.id}
          text={msg.text}
          sender={msg.sender}
          timestamp={new Date(msg.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        />
      ))}
    </div>
  );
}
