
import type { Request, Response, NextFunction } from "express";
import { getAllSkills } from "../models/skill.model";

export const getSkills = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const data = await getAllSkills();
        res.json({ success: true, data });
    } catch (error) {
        next(error);
    }
};
