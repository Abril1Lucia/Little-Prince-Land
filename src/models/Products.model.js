//c importa la dependencia

import mongoose from "mongoose";

//plantilla de los datos para solicitar guardar la base de datos we


const productSchema = new mongoose.Schema({
    Image:{type: String, required: true},
    name: {type: String, required: true},
    category: {type: String},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    isAvailable: {type: Boolean} //o verdadero o falso we
}); 

//decirle a la base de datos q creee una coleccion en esquema anterior
//el primer parametro es el name de la coleccion
//el segundo parametro es la estructura de datos we

export const productModel = mongoose.model ('product', productSchema);