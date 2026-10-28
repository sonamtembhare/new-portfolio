
import { db } from "../config/db";
import { skills } from "../db/schema";
import { eq } from "drizzle-orm";

export const getAllSkills = async () => {
    return await db.select().from(skills);
};

export const createSkill = async (data: {
    name: string;
    category: string;
}) => {
    const [skill] = await db
        .insert(skills)
        .values(data)
        .returning();

    return skill;
};

export const deleteSkill = async (id: number) => {
    const [skill] = await db
        .delete(skills)
        .where(eq(skills.id, id))
        .returning();

    return skill;
};
