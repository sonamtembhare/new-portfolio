
import { getAllSkills } from "../models/skill.model";

export const getSkillsService = async () => {
    return await getAllSkills();
};
