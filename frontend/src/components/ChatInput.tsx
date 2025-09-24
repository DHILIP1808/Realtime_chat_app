// src/components/ChatInput.tsx
import { useState } from "react";
import { useChat } from "../context/ChatContext";

export default function ChatInput() {
  const { sendMessage } = useChat();
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    sendMessage(message);
    setMessage("");
  };

  return (
    <div className="flex items-center gap-2 p-4 border-t border-gray-300 bg-white">
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 p-3 border rounded-full outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        onClick={handleSend}
        className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
      >
        Send
      </button>
    </div>
  );
}
