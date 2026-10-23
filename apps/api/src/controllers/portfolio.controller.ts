
import type { Request, Response, NextFunction } from "express";

import {
    getPortfolioService,
    getProjectsService,
    getSkillsService,
    getEducationService,
} from "../services/portfolio.service";

export const getPortfolioController = async (
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const data = await getPortfolioService();
        res.status(200).json({ success: true, data });
    } catch (error) {
        next(error);
    }
};

export const getProjectsController = async (
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const data = await getProjectsService();
        res.status(200).json({ success: true, data });
    } catch (error) {
        next(error);
    }
};

export const getSkillsController = async (
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const data = await getSkillsService();
        res.status(200).json({ success: true, data });
    } catch (error) {
        next(error);
    }
};

export const getEducationController = async (
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const data = await getEducationService();
        res.status(200).json({ success: true, data });
    } catch (error) {
        next(error);
    }
};
