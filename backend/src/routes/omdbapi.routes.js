import { Router } from "express";
import { getById, getList } from "../controllers/omdbapi.controller"
const router = Router()

// [GET] Url -> /lista ->
router.get("/lista", getList)

// [GET] Url -> /obtener ->
router.post("/obtener", getById)

export default router;