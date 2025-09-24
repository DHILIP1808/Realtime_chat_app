import http from "http";
import { Server } from "socket.io";
import app from "./app";
import { chatSocket } from "./socket/chatSocket";

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

chatSocket(io);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
