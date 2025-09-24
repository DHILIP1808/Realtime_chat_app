// src/types/chat.ts

export type Message = {
  id?: string;             // optional for new messages
  conversationId: string;  // link to conversation
  senderId: string;        // sender user ID
  text?: string;           // message text
  media?: string;          // optional media URL
  createdAt: string;       // timestamp
};

export type ChatUser = {
  id: string;             // user ID
  name: string;           // display name
  avatar?: string;        // optional avatar URL
  active?: boolean;       // online status
};

export type Conversation = {
  id: string;             // conversation ID
  participants: ChatUser[]; // users in conversation
  messages: Message[];      // messages in this conversation
};
