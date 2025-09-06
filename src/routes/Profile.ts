import { Router } from "express";
import { createProfile } from "../controllers/ProfileController";

const router = Router();

/**
 * @swagger
 * /profile:
 *   post:
 *     summary: Create a new profile
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - age
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *               email:
 *                 type: string
 *               bio:
 *                 type: string
 *     responses:
 *       201:
 *         description: Profile created
 */
router.post("/", createProfile);



export default router;
