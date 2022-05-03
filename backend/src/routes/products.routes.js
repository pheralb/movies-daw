import { Router } from "express";
import { getById, getList, save, update, del, fillDb, getCategories, deleteAll, getListByCategorie} from "../controllers/products.controller"
const router = Router()

// [GET] Url -> /lista ->
router.get("/lista", getList)

// [GET] Url -> /obtener/:id ->
router.get("/obtener/:id", getById)

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

//[GET] Url -> /categorias/:name ->
router.get("/categorias/:name", getListByCategorie)

export default router;