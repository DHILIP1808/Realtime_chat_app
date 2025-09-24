// src/components/Sidebar.tsx
import ChatList from "./ChatList";

export default function Sidebar() {
  return (
    <div className="hidden md:flex flex-col w-80 h-screen bg-gray-100 border-r border-gray-300">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-300">
        <h1 className="text-xl font-bold text-gray-800">Chats</h1>
        <button className="text-green-500 hover:text-green-600">+</button>
      </div>
      {/* Search */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        <ChatList />
      </div>
    </div>
  );
}
