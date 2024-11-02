//vamos a configurar el sevidor con express

import express from "express";
import dotenv from "dotenv"; //dependencia para manejar variables de entorno we
import { connectionMongo } from "./src/Config/dataBase.js";
import { ProductsModel } from "./src/models/Products.model.js" //importamos las rutas e indica que se deben usar we

const app = express();
dotenv.config(); //se configura para poder usar variables we
const port = process.env.PORT;
connectionMongo();

//indica las rutas que se usan we
app.use(express.json()) //usa para usar formato json
app.use("/productos", productRouter);

app.listen(port, () => {
  console.log("aca esta bien el mugre servidor we", port);
});