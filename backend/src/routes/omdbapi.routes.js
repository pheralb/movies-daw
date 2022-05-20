import { Router } from "express";
import { getById, getList } from "../controllers/omdbapi.controller"
import { auth } from "../middlewares";
const router = Router()

// [GET] Url -> /lista ->
router.get("/lista", [auth.verifyToken, auth.isDeveloper], getList)

// [GET] Url -> /obtener ->
router.post("/obtener", [auth.verifyToken, auth.isDeveloper], getById)

export default router;