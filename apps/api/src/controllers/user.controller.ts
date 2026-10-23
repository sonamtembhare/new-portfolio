
import type { Request, Response, NextFunction } from "express";
import { getUsers as getUsersFromDB } from "../models/user.model";

export const getUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const data = await getUsersFromDB();

        return res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data,
        });
    } catch (error) {
        next(error);
    }
};
