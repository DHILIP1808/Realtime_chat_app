// src/components/MessageBubble.tsx

type Props = {
  text: string;
  sender: "me" | "other";
  timestamp?: string;
};

export default function MessageBubble({ text, sender, timestamp }: Props) {
  return (
    <div
      className={`flex flex-col max-w-xs my-1 p-3 rounded-2xl ${
        sender === "me"
          ? "bg-green-500 text-white self-end rounded-br-none"
          : "bg-gray-200 text-gray-800 self-start rounded-bl-none"
      }`}
    >
      <p className="break-words">{text}</p>
      {timestamp && (
        <span className="text-[10px] text-gray-400 mt-1 self-end">
          {timestamp}
        </span>
      )}
    </div>
  );
}
