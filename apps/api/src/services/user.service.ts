
import { getUsers } from "../models/user.model";

export const getUsersService = async () => {
    return await getUsers();
};
