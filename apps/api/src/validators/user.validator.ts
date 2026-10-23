
import { z } from "zod";

export const userSchema = z.object({
    name: z.string().trim().min(2, "Name must be at least 2 characters"),
    email: z.string().trim().email("Please enter a valid email"),
    role: z.enum(["admin", "user"]).default("user"),
    isActive: z.boolean().default(true),
});

export type UserInput = z.infer<typeof userSchema>;
