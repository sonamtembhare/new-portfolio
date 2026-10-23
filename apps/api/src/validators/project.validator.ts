
import { z } from "zod";

export const projectSchema = z.object({
    title: z.string().trim().min(2, "Project title is required"),
    description: z.string().trim().min(10, "Description must be at least 10 characters"),
    technologies: z.array(z.string().trim().min(1)).min(1, "At least one technology is required"),
    liveUrl: z.string().url("Please enter a valid live URL").optional().or(z.literal("")),
    githubUrl: z.string().url("Please enter a valid GitHub URL").optional().or(z.literal("")),
    featured: z.boolean().default(false),
});

export type ProjectInput = z.infer<typeof projectSchema>;
