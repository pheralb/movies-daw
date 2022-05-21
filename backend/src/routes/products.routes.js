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
import {isAdmin, isDeveloper, isSuperAdmin, verifyToken} from "../middlewares/auth"
const router = Router();

// [GET] Url -> /lista ->
router.get("/lista", getList);

// [GET] Url -> /obtener/:id ->
router.get("/obtener/:id", getById);

//[POST] Url -> /guardar ->
router.post("/guardar", [ verifyToken,  isDeveloper], save);

//[PUT] Url -> /actualizar/:id ->
router.put("/actualizar/:id", [ verifyToken,  isDeveloper], update);

//[DELETE] Url -> /borrar/:id->
router.delete("/borrar/:id", [ verifyToken,  isAdmin], del);

//[DELETE] Url -> /borrar/ ->
router.delete("/borrarTodos", [ verifyToken,  isSuperAdmin], deleteAll);

//[POST] Url -> /cargarDatos ->
router.post("/cargarDatos", [ verifyToken,  isDeveloper], fillDb);

//[GET] Url -> /categorias ->
router.get("/categorias", getCategories);

//[GET] Url -> /categorias/:name ->
router.get("/categorias/:name", getListByCategorie);

//[GET] Url -> /lista/:name ->
router.get("/lista/:name", getListByName);

export default router;
