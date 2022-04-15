import { Router } from "express";
import {getByName, getLista} from "../controllers/lista.controller"

const router = Router()

router.post("/lista", getLista)
router.post("/obtenerPorNombre", getByName)

export default router;