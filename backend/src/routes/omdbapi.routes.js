import { Router } from "express";
import { getById, getList } from "../controllers/omdbapi.controller"
import { isDeveloper, verifyToken } from "../middlewares/auth";
const router = Router()

// [GET] Url -> /lista ->
router.get("/lista", [verifyToken, isDeveloper], getList)

// [GET] Url -> /obtener ->
router.post("/obtener", [verifyToken, isDeveloper], getById)

export default router;