
import { Router } from "express";
import { getEducation } from "../controllers/education.controller";

const router = Router();

router.get("/", getEducation);

export default router;
