import { Router } from "express";
import { getByName, getList, save, update, del} from "../controllers/products.controller"
const router = Router()

// [GET] Url -> /lista ->
router.get("/lista", getList)

// [GET] Url -> /obtener ->
router.get("/obtener/:name", getByName)

//[POST] Url -> /guardar ->
router.post("/guardar", save)

//[PUT] Url -> /actualizar ->
router.put("/actualizar/:name", update)

//[DELETE] Url -> /actualizar ->
router.delete("/borrar/:name", del)
export default router;