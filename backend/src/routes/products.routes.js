import { Router } from "express";
import { getById, getList, save } from "../controllers/products.controller"
const router = Router()

// [GET] Url -> /lista ->
router.get("/lista", getList)

// [GET] Url -> /obtener ->
router.get("/obtener", getById)

//[POST] Url -> /guardar ->
router.post("/guardar", save)

export default router;