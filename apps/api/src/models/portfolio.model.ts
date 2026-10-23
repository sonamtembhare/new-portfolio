
import { db } from "../config/db";
import { portfolio, projects, skills, education } from "../db/schema";

export const getPortfolio = async () => {
    return await db.select().from(portfolio);
};

export const getProjects = async () => {
    return await db.select().from(projects);
};

export const getSkills = async () => {
    return await db.select().from(skills);
};

export const getEducation = async () => {
    return await db.select().from(education);
};
