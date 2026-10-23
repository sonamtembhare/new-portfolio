
import { db } from "../config/db";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";

export const getUsers = async () => {
    return await db.select({
        id: users.id,
        name: users.name,
        email: users.email,
        createdAt: users.createdAt,
    }).from(users);
};

export const findUserByEmail = async (email: string) => {
    const result = await db
        .select()
        .from(users)
        .where(eq(users.email, email))
        .limit(1);

    return result[0] ?? null;
};

export const createUser = async (data: {
    name: string;
    email: string;
    password: string;
}) => {
    const result = await db
        .insert(users)
        .values({
            name: data.name,
            email: data.email,
            password: data.password,
        })
        .returning({
            id: users.id,
            name: users.name,
            email: users.email,
            createdAt: users.createdAt,
        });

    return result[0];
};
