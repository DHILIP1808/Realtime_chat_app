import mongoose, { Schema, Document } from "mongoose";

export interface IMessage extends Document {
  conversationId: string;
  senderId: string;
  text: string;
  media?: string;
}

const MessageSchema: Schema = new Schema(
  {
    conversationId: { type: mongoose.Schema.Types.ObjectId, ref: "Conversation" },
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    text: { type: String },
    media: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IMessage>("Message", MessageSchema);
