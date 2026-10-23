
import { Router } from "express";
import {
    getPortfolioController,
    getProjectsController,
    getSkillsController,
    getEducationController,
} from "../controllers/portfolio.controller";

const router = Router();

router.get("/", getPortfolioController);
router.get("/projects", getProjectsController);
router.get("/skills", getSkillsController);
router.get("/education", getEducationController);

export default router;
