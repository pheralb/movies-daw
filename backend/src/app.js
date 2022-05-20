import express from "express";
import morgan from "morgan";
import cors from "cors";
import omdbapiRoutes from "./routes/omdbapi.routes";
import productsRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";
import { createRoles } from "./libs/initialSetup";

const app = express();
createRoles();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/omdbapi", omdbapiRoutes);
app.use("/productos", productsRoutes);
app.use("/auth", authRoutes)

export default app;
