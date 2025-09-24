// src/components/ChatList.tsx

type ChatItem = {
  id: number;
  name: string;
  lastMessage: string;
  avatar: string;
  active?: boolean;
};

const chats: ChatItem[] = [
  {
    id: 1,
    name: "John Doe",
    lastMessage: "Hey! How are you?",
    avatar: "https://i.pravatar.cc/150?img=1",
    active: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    lastMessage: "Let's meet tomorrow.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
];

export default function ChatList() {
  return (
    <div>
      {chats.map((chat) => (
        <div
          key={chat.id}
          className={`flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-200 ${
            chat.active ? "bg-gray-200" : ""
          }`}
        >
          <img
            src={chat.avatar}
            alt={chat.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <h2 className="text-sm font-semibold text-gray-800">{chat.name}</h2>
            <p className="text-xs text-gray-500 truncate">{chat.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
