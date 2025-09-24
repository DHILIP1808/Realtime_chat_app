import { Router } from "express";
import { getMessages } from "../controllers/messageController";

const router = Router();

// Get messages for a conversation
router.get("/:conversationId", getMessages);

export default router;
