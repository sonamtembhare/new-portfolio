
import type { Request, Response, NextFunction } from "express";
import {
    createContact,
    getContactInfo,
} from "../models/contact.model";

export const getContact = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const data = await getContactInfo();
        res.json({ success: true, data });
    } catch (error) {
        next(error);
    }
};

export const postContact = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { name, email, message } = req.body;

        if (
            typeof name !== "string" ||
            !name.trim() ||
            typeof email !== "string" ||
            !email.trim() ||
            typeof message !== "string" ||
            !message.trim()
        ) {
            return res.status(400).json({
                success: false,
                message: "Name, email and message are required",
            });
        }

        const data = await createContact({
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
        });

        return res.status(201).json({
            success: true,
            message: "Contact message submitted successfully",
            data,
        });
    } catch (error) {
        next(error);
    }
};
