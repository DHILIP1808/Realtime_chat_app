import { Server, Socket } from "socket.io";
import { IMessage } from "../models/Message";

type OnlineUsers = { [userId: string]: string }; // userId -> socketId
export const onlineUsers: OnlineUsers = {};

// Add a user when they connect
export const addUser = (userId: string, socketId: string) => {
  onlineUsers[userId] = socketId;
};

// Remove user on disconnect
export const removeUser = (socketId: string) => {
  for (const userId in onlineUsers) {
    if (onlineUsers[userId] === socketId) {
      delete onlineUsers[userId];
      break;
    }
  }
};

// Send message to a specific user if online
export const sendMessageToUser = (
  io: Server,
  receiverId: string,
  message: IMessage
) => {
  const socketId = onlineUsers[receiverId];
  if (socketId) {
    io.to(socketId).emit("receive_message", message);
  }
};

// Broadcast online users
export const broadcastOnlineUsers = (io: Server) => {
  io.emit("online_users", Object.keys(onlineUsers));
};
