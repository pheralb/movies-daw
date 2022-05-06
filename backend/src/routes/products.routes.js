import { Router } from "express";
import {
  getById,
  getList,
  save,
  update,
  del,
  fillDb,
  getCategories,
  deleteAll,
  getListByCategorie,
  getListByName
} from "../controllers/products.controller";
const router = Router();

// [GET] Url -> /lista ->
router.get("/lista", getList);

// [GET] Url -> /obtener/:id ->
router.get("/obtener/:id", getById);

//[POST] Url -> /guardar ->
router.post("/guardar", save);

//[PUT] Url -> /actualizar/:id ->
router.put("/actualizar/:id", update);

//[DELETE] Url -> /borrar/:id->
router.delete("/borrar/:id", del);

//[DELETE] Url -> /borrar/ ->
router.delete("/borrarTodos", deleteAll);

//[POST] Url -> /cargarDatos ->
router.post("/cargarDatos", fillDb);

//[GET] Url -> /categorias ->
router.get("/categorias", getCategories);

//[GET] Url -> /categorias/:name ->
router.get("/categorias/:name", getListByCategorie);

//[GET] Url -> /lista/:name ->
router.get("/lista/:name", getListByName);

export default router;
