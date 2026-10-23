
import type { Request, Response, NextFunction } from "express";
import { getAllProjects } from "../models/project.model";

export const getProjects = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const data = await getAllProjects();
        res.json({ success: true, data });
    } catch (error) {
        next(error);
    }
};
