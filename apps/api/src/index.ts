import { errorMiddleware } from "./middleware/error.middleware";
import { notFoundMiddleware } from "./middleware/notfound.middleware";
import express from "express";
import cors from "cors";

import portfolioRoutes from "./routes/portfolio.routes";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import educationRoutes from "./routes/education.routes";
import projectRoutes from "./routes/project.routes";
import skillRoutes from "./routes/skill.routes";
import contactRoutes from "./routes/contact.routes";

const app = express();

app.use(
    cors({
        origin: process.env.CLIENT_URL ?? "http://localhost:3000",
    })
);
app.use(express.json());

app.get("/", (_req, res) => {
    res.json({
        success: true,
        message: "Sonam Portfolio API is running",
    });
});

app.use("/api/portfolio", portfolioRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/contact", contactRoutes);

// Handle unknown routes
app.use(notFoundMiddleware);

// Handle application errors
app.use(errorMiddleware);
export default app;
const PORT = Number(process.env.PORT ?? 5000);

if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}
