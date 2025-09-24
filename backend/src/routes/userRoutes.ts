import { Router } from "express";
import { getUsers, updateUser } from "../controllers/userController";
import { protect } from "../middleware/authMiddleware";

const router = Router();

// All routes protected
router.use(protect);

router.get("/", getUsers);
router.put("/update", updateUser);

export default router;
