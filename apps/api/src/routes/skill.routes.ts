
import { Router } from "express";
import {
    getSkills,
    addSkill,
    removeSkill,
} from "../controllers/skill.controller";
import {
    authMiddleware,
    adminMiddleware,
} from "../middleware/auth.middleware";

const router = Router();

router.get("/", getSkills);

router.post("/", authMiddleware, adminMiddleware, addSkill);

router.delete("/:id", authMiddleware, adminMiddleware, removeSkill);

export default router;
