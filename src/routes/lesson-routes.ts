import { Router } from "express";
import { getLessons } from "../controllers/lesson-controller";

const router = Router();

router.get("/lessons", getLessons);

export default router;
