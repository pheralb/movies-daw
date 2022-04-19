import { Router } from "express";
import {getById, getLista} from "../controllers/lista.controller"

const router = Router()

router.post("/lista", getLista)
router.post("/obtener", getById)

export default router;