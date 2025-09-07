import { Request, Response } from "express";
import Profile from "../models/Profile.model";

export const createProfile = async (req: Request, res: Response) => {
    try {
        const profile = new Profile(req.body);
        await profile.save();
        res.status(201).json(profile);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

