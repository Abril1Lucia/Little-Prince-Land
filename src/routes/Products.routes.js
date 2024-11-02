// import { postproduct } from "../controllers/products.controller";

import {getProduct, postproduct, putProductById, DeleteProductById} from '../controllers/products.controller.js'

//configura el router del express
import express from 'express';


export const productRouter = express.Router();

//creame rutas para los productos
 

//ruta para el get leer obtener o mostrar we
//primero determino la ruta luego indico que debe hacer we
productRouter.get('/obtener', getProduct);

//ruta de peticion para el producto crear we
productRouter.post('/crear', postproduct);
//ruta de peticion para el producto actualizar we

productRouter.put('/actualizar/:id', putProductById);

//ruta de peticion para el producto para eliminar we
productRouter.delete('/eliminar/:id', DeleteProductById);