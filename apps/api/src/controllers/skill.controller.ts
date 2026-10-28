
import type { Request, Response, NextFunction } from "express";
import {
    getAllSkills,
    createSkill,
    deleteSkill,
} from "../models/skill.model";

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

export const addSkill = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { name, category } = req.body;

        if (
            typeof name !== "string" ||
            !name.trim() ||
            typeof category !== "string" ||
            !category.trim()
        ) {
            res.status(400).json({
                success: false,
                message: "Skill name and category are required",
            });
            return;
        }

        const skill = await createSkill({
            name: name.trim(),
            category: category.trim(),
        });

        res.status(201).json({
            success: true,
            message: "Skill added successfully",
            data: skill,
        });
    } catch (error) {
        next(error);
    }
};

export const removeSkill = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            res.status(400).json({
                success: false,
                message: "Invalid skill ID",
            });
            return;
        }

        const skill = await deleteSkill(id);

        if (!skill) {
            res.status(404).json({
                success: false,
                message: "Skill not found",
            });
            return;
        }

        res.json({
            success: true,
            message: "Skill deleted successfully",
            data: skill,
        });
    } catch (error) {
        next(error);
    }
};
