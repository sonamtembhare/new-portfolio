
import { db } from "../config/db";
import { contacts, portfolio } from "../db/schema";

export const getContactInfo = async () => {
    const result = await db.select({
        email: portfolio.email,
        phone: portfolio.phone,
        linkedin: portfolio.linkedin,
        github: portfolio.github,
    }).from(portfolio);

    return result[0] ?? null;
};

export const createContact = async (data: {
    name: string;
    email: string;
    message: string;
}) => {
    const result = await db
        .insert(contacts)
        .values({
            name: data.name,
            email: data.email,
            message: data.message,
        })
        .returning();

    return result[0];
};
