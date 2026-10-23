
import {
    getPortfolio,
    getProjects,
    getSkills,
    getEducation,
} from "../models/portfolio.model";

export const getPortfolioService = async () => {
    return await getPortfolio();
};

export const getProjectsService = async () => {
    return await getProjects();
};

export const getSkillsService = async () => {
    return await getSkills();
};

export const getEducationService = async () => {
    return await getEducation();
};
