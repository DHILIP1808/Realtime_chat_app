import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes (to implement later)
import authRoutes from "./routes/authRoutes";
import messageRoutes from "./routes/messageRoutes";

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

export default app;
