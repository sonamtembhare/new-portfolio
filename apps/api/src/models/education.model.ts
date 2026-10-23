
import { db } from "../config/db";
import { education } from "../db/schema";

export const getAllEducation = async () => {
    return await db.select().from(education);
};
