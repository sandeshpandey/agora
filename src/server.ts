import express, { Application } from "express";
import profileRoutes from "./routes/Profile";
const swaggerJsdoc: any = require("swagger-jsdoc");
import swaggerUi from "swagger-ui-express";

const app: Application = express();
app.use(express.json());

// Swagger setup
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Agora API",
            version: "1.0.0",
            description: "API documentation for Agora project",
        },
    },
    apis: ["./src/routes/*.ts", "./src/server.ts"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
/**
 * @swagger
 * /:
 *   get:
 *     summary: Get welcome message
 *     responses:
 *       200:
 *         description: Welcome message
 */
app.get("/", (req, res) => res.json({ status: "ok", message: "Hello Welcome to Agora World" }));
app.use("/profile", profileRoutes);

export default app;
