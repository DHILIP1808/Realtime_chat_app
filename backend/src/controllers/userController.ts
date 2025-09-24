import { Request, Response } from "express";
import User from "../models/User";
import { AuthRequest } from "../middleware/authMiddleware";

// Get all users (excluding the logged-in user)
export const getUsers = async (req: AuthRequest, res: Response) => {
  try {
    const users = await User.find({ _id: { $ne: req.userId } }).select(
      "_id name email avatar"
    );
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update user profile (name or avatar)
export const updateUser = async (req: AuthRequest, res: Response) => {
  const { name, avatar } = req.body;
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (name) user.name = name;
    if (avatar) user.avatar = avatar;

    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
