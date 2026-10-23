
import type { Response } from "express";

interface ApiResponseOptions<T> {
    success: boolean;
    message: string;
    data?: T;
}

export const sendSuccess = <T>(
    res: Response,
    message: string,
    data?: T,
    statusCode = 200
) => {
    const response: ApiResponseOptions<T> = {
        success: true,
        message,
        ...(data !== undefined && { data }),
    };

    return res.status(statusCode).json(response);
};

export const sendError = (
    res: Response,
    message: string,
    statusCode = 500
) => {
    return res.status(statusCode).json({
        success: false,
        message,
    });
};
