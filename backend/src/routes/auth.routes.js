import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller";
import {isDeveloper, verifyToken} from "../middlewares/auth"
import { rolesExists, userNotExists } from "../middlewares/verifyUsers";

const router = Router()

// [POST] Url -> /signip->
router.post("/signin", signIn)

// [POST] Url -> /signun ->
router.post("/signup", [verifyToken, isDeveloper, userNotExists, rolesExists], signUp)

export default router;