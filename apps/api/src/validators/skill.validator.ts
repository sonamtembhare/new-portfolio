
import { z } from "zod";

export const skillSchema = z.object({
    name: z.string().trim().min(2, "Skill name is required"),
    category: z.string().trim().min(2, "Skill category is required"),
    proficiency: z
        .number()
        .min(0, "Proficiency cannot be less than 0")
        .max(100, "Proficiency cannot exceed 100")
        .optional(),
});

export type SkillInput = z.infer<typeof skillSchema>;
