
import { getAllEducation } from "../models/education.model";

export const getEducationService = async () => {
    return await getAllEducation();
};
