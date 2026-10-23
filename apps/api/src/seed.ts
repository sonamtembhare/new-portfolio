import { eq } from "drizzle-orm";
import "dotenv/config";

import { db } from "./config/db";
import {
    projects,
    skills,
    portfolio,
    education,
} from "./db/schema";


async function seed() {
    console.log("Starting portfolio database seed...");

    // Insert projects only if they do not already exist
    const projectData = [
        {
            title: "Water Jar Management System",
            description:
                "Full Stack web and mobile application for managing water jar orders, customers, deliveries, vendor dashboards and notifications.",
            techStack:
                "Next.js, React Native, Expo, Express.js, PostgreSQL, Drizzle ORM",
            featured: true,
        },
        {
            title: "Society Management System",
            description:
                "Full Stack web and mobile application for managing residents, maintenance payments, complaints, visitors and society operations.",
            techStack:
                "Next.js, React Native, Expo, Node.js, Express.js, PostgreSQL",
            featured: true,
        },
        {
            title: "Service Booking Application",
            description:
                "Full Stack web application for booking services, managing customers, scheduling appointments and tracking booking status.",
            techStack:
                "React, Node.js, Express.js, PostgreSQL, REST API",
            featured: true,
        },
        {
            title: "Weather App",
            description:
                "React application that displays current weather conditions and forecasts using a weather API.",
            techStack: "React, JavaScript, CSS, Weather API",
            featured: true,
        },
    ];

    const existingProjects = await db.select({ title: projects.title }).from(projects);
    const existingProjectTitles = new Set(
        existingProjects.map((project) => project.title)
    );

    for (const project of projectData) {
        if (!existingProjectTitles.has(project.title)) {
            await db.insert(projects).values(project);
            console.log(`Added project: ${project.title}`);
        }
    }

    // Insert skills only if they do not already exist
    const skillData = [
        { name: "HTML", category: "Frontend" },
        { name: "CSS", category: "Frontend" },
        { name: "JavaScript", category: "Frontend" },
        { name: "React.js", category: "Frontend" },
        { name: "Next.js", category: "Frontend" },
        { name: "TypeScript", category: "Programming" },
        { name: "React Native", category: "Mobile Development" },
        { name: "Expo", category: "Mobile Development" },
        { name: "Node.js", category: "Backend" },
        { name: "Express.js", category: "Backend" },
        { name: "PostgreSQL", category: "Database" },
        { name: "Drizzle ORM", category: "Database" },
        { name: "Git", category: "Tools" },
        { name: "GitHub", category: "Tools" },
    ];

    const existingSkills = await db.select({ name: skills.name }).from(skills);
    const existingSkillNames = new Set(
        existingSkills.map((skill) => skill.name)
    );

    for (const skill of skillData) {
        if (!existingSkillNames.has(skill.name)) {
            await db.insert(skills).values(skill);
            console.log(`Added skill: ${skill.name}`);
        }
    }

    // Add portfolio profile only if the table is empty
    const existingPortfolio = await db.select().from(portfolio);

    if (existingPortfolio.length === 0) {
        await db.insert(portfolio).values({

            name: "Sonam Tembhare",
            title: "Full Stack Developer",
            about:
                "Full Stack Developer passionate about building products and scalable applications from MVP to production.",
            email: "sonamtembhare01@gmail.com",
            phone: "7020949038",
            linkedin: "https://www.linkedin.com/in/sonam-tembhare-69b28b422/",
            github: "https://github.com/sonamtembhare"
        });
        console.log("Added portfolio profile.");
    } else {
        await db
            .update(portfolio)
            .set({
                email: "sonamtembhare01@gmail.com",
                phone: "7020949038",
                linkedin: "https://www.linkedin.com/in/sonam-tembhare-69b28b422/",
                github: "https://github.com/sonamtembhare"
            })
            .where(eq(portfolio.id, existingPortfolio[0].id));
        console.log("Portfolio profile updated.");
    }

    // Add education only if the same degree and institution do not exist
    const existingEducation = await db
        .select({
            degree: education.degree,
            institution: education.institution,
        })
        .from(education);

    const educationExists = existingEducation.some(
        (item) =>
            item.degree === "B.E." &&
            item.institution === "Shreeyash College"
    );

    if (!educationExists) {
        await db.insert(education).values({
            degree: "B.E.",
            field: "Electronics & Telecommunication Engineering",
            institution: "Shreeyash College",
            university: "Dr. Babasaheb Ambedkar Marathwada University",
            startYear: 2008,
            endYear: 2012,
            description:
                "Bachelor of Engineering in Electronics & Telecommunication Engineering.",
        });
        console.log("Added education.");
    } else {
        const existingRecord = await db
            .select({ id: education.id })
            .from(education)
            .where(eq(education.institution, "Shreeyash College"))
            .limit(1);

        if (existingRecord.length > 0) {
            await db
                .update(education)
                .set({
                    startYear: 2008,
                    endYear: 2012,
                    description:
                        "Bachelor of Engineering in Electronics & Telecommunication Engineering.",
                })
                .where(eq(education.id, existingRecord[0].id));
        }

        console.log("Education profile updated.");
    }


    console.log("Portfolio seed completed successfully.");
}

seed().catch((error) => {
    console.error("Seed failed:", error);
    process.exitCode = 1;
});
