
import { Router } from "express";
import { getProjects } from "../controllers/project.controller";
import { validate } from "../middleware/validate.middleware";
import { projectSchema } from "../validators/project.validator";

const router = Router();

// Public route: Fetch all projects
router.get("/", getProjects);

// Validation example for creating a project:
// router.post("/", validate(projectSchema), createProject);

export default router;
