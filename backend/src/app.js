import express from "express";
import morgan from "morgan";
import cors from "cors";
import omdbapiRoutes from "./routes/omdbapi.routes";
import productsRoutes from "./routes/products.routes";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/omdbapi", omdbapiRoutes);
app.use("/productos", productsRoutes);

export default app;
