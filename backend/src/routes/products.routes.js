import { Router } from "express";
import { getByName, getList, save, update, del, fillDb, getCategories, deleteAll} from "../controllers/products.controller"
const router = Router()

// [GET] Url -> /lista ->
router.get("/lista", getList)

// [GET] Url -> /obtener/:name ->
router.get("/obtener/:name", getByName)

//[POST] Url -> /guardar ->
router.post("/guardar", save)

//[PUT] Url -> /actualizar/:name ->
router.put("/actualizar/:name", update)

//[DELETE] Url -> /borrar/:name ->
router.delete("/borrar/:name", del)

//[DELETE] Url -> /borrar/ ->
router.delete("/borrarTodos", deleteAll)

//[POST] Url -> /cargarDatos ->
router.post("/cargarDatos", fillDb)

//[GET] Url -> /categorias ->
router.get("/categorias", getCategories)

export default router;