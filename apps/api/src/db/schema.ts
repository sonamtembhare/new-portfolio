import {
    boolean,
    integer,
    pgTable,
    serial,
    text,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    password: text("password").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const portfolio = pgTable("portfolio", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    title: varchar("title", { length: 150 }).notNull(),
    about: text("about").notNull(),
    email: varchar("email", { length: 255 }),
    phone: varchar("phone", { length: 30 }),
    linkedin: text("linkedin"),
    github: text("github"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const projects = pgTable("projects", {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 150 }).notNull(),
    description: text("description").notNull(),
    techStack: text("tech_stack").notNull(),
    liveUrl: text("live_url"),
    githubUrl: text("github_url"),
    featured: boolean("featured").default(false).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const skills = pgTable("skills", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    category: varchar("category", { length: 100 }).notNull(),
});

export const education = pgTable("education", {
    id: serial("id").primaryKey(),
    degree: varchar("degree", { length: 150 }).notNull(),
    field: varchar("field", { length: 150 }),
    institution: varchar("institution", { length: 200 }).notNull(),
    university: varchar("university", { length: 200 }),
    startYear: integer("start_year"),
    endYear: integer("end_year"),
    description: text("description"),
});

export const contacts = pgTable("contacts", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    message: text("message").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});