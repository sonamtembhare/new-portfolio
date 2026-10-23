
import type { Request, Response, NextFunction } from "express";
import { getAllEducation } from "../models/education.model";

export const getEducation = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const data = await getAllEducation();
        res.json({ success: true, data });
    } catch (error) {
        next(error);
    }
};
