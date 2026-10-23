
import { eq } from "drizzle-orm";
import { db } from "../config/db";
import { projects } from "../db/schema";

export const getAllProjects = async () => {
    return await db.select().from(projects);
};

export const getFeaturedProjects = async () => {
    return await db
        .select()
        .from(projects)
        .where(eq(projects.featured, true));
};
