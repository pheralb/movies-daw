import { Router } from "express";
import { getById, getLista } from "../controllers/lista.controller"
const router = Router()

// [GET] Url -> /lista ->
router.get("/lista", getLista)

// [GET] Url -> /obtener ->
router.get("/obtener", getById)

export default router;