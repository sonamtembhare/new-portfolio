
import type { Request } from "express";

export interface AuthenticatedUser {
    id: number;
    email: string;
    role?: string;
}

export interface AuthenticatedRequest extends Request {
    user?: AuthenticatedUser;
}

export interface ApiResponse<T> {
    success: boolean;
    message?: string;
    data?: T;
}

export interface PaginationOptions {
    page: number;
    limit: number;
}

export interface PaginationMeta {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}

export interface ContactFormInput {
    name: string;
    email: string;
    subject?: string;
    message: string;
}
