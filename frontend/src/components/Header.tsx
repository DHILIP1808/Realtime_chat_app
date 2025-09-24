// src/components/Header.tsx

type Props = {
  userName: string;
  avatar: string;
};

export default function Header({ userName, avatar }: Props) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-white">
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={userName}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold text-gray-800">{userName}</h2>
          <p className="text-xs text-gray-500">Online</p>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="text-gray-500 hover:text-gray-700">🔍</button>
        <button className="text-gray-500 hover:text-gray-700">⋮</button>
      </div>
    </div>
  );
}
