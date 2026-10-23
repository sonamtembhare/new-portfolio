
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { env } from "../config/env";

export const hashPassword = async (password: string) => {
    return bcrypt.hash(password, 10);
};

export const comparePassword = async (
    password: string,
    hashedPassword: string
) => {
    return bcrypt.compare(password, hashedPassword);
};

export const generateToken = (userId: string) => {
    return jwt.sign({ userId }, env.JWT_SECRET, {
        expiresIn: "1d",
    });
};
