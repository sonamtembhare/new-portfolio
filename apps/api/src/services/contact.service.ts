
import { getContactInfo } from "../models/contact.model";

export const getContactService = async () => {
    return await getContactInfo();
};
