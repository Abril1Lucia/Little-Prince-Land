//vamos a configurar el sevidor con express

import express from "express";
import dotenv from "dotenv"; //dependencia para manejar variables de entorno we
import { connectionMongo } from "./src/Config/dataBase.js";

const app = express();
dotenv.config(); //se configura para poder usar variables we
const port = process.env.PORT;
connectionMongo();



app.listen(port, () => {
  console.log("aca esta bien el mugre servidor we", port);
});