
import { db } from "../config/db";
import { skills } from "../db/schema";

export const getAllSkills = async () => {
    return await db.select().from(skills);
};
