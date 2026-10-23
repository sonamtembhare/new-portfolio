
import jwt from "jsonwebtoken";
import { env } from "../config/env";

export interface JwtPayload {
    id: number;
    email: string;
}

export const generateToken = (payload: JwtPayload): string => {
    if (!env.JWT_SECRET) {
        throw new Error("JWT_SECRET is missing");
    }

    return jwt.sign(payload, env.JWT_SECRET, {
        expiresIn: "1d",
    });
};

export const verifyToken = (token: string): JwtPayload => {
    if (!env.JWT_SECRET) {
        throw new Error("JWT_SECRET is missing");
    }

    const decoded = jwt.verify(token, env.JWT_SECRET);

    if (
        typeof decoded === "string" ||
        typeof decoded.id !== "number" ||
        typeof decoded.email !== "string"
    ) {
        throw new Error("Invalid token payload");
    }

    return {
        id: decoded.id,
        email: decoded.email,
    };
};
