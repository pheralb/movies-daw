import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller";

const router = Router()

// [POST] Url -> /signip->
router.post("/signin", signIn)

// [POST] Url -> /signun ->
router.post("/signup", signUp)

export default router;