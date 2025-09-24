// src/pages/ChatPage.tsx
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";

export default function ChatPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header userName="John Doe" avatar="https://i.pravatar.cc/150?img=3" />
        <ChatWindow />
        <ChatInput />
      </div>
    </div>
  );
}
