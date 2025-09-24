import { Server, Socket } from "socket.io";
import Message from "../models/Message";

export const chatSocket = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log("User connected:", socket.id);

    socket.on("send_message", async (msg) => {
      // Save to DB
      const message = await Message.create(msg);
      socket.broadcast.emit("receive_message", message);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};
