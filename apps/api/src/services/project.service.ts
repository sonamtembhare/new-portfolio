
import {
    getAllProjects,
    getFeaturedProjects,
} from "../models/project.model";

export const getProjectsService = async () => {
    return await getAllProjects();
};

export const getFeaturedProjectsService = async () => {
    return await getFeaturedProjects();
};
