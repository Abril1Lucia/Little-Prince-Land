import { adminModel } from "../models/admin.models.js";

import { generatetoken } from "../lib/jwt.js";

import bcrypt from "bcryptjs";


const loginAdmins = async (request, response) =>{

    try {
        const { emailLoginAdmins, passwordLoginAdmins } = request.body;
  
        const adminsFound = await adminModel.findOne({
          email: emailLoginAdmins,
        });

        if (!adminsFound) {
            return response
              .status(404)
              .json({
                mensaje:
                  "no c encuentra el usuario, se fue a tomar tinto, vaya, registrese y vuelva a ver si volvio :)",
              });
          }

          const isValidPassword = await bcrypt.compare( passwordLoginAdmins, adminsFound.password); 
  
  
          if(!isValidPassword){
              return response.status(401).json({mensaje:'no me jodas.. se mas creativo, pon otra contraseña hasta que lo hagas bien >:('})
          }

          const payload ={
            id:adminsFound._id,
            name:adminsFound.fullName,
            isAdmin:true 
        }

        const tokenAdmin = await generatetoken(payload)
  
        return response.status(200).json({
            mensaje:'ya se logro crear tu usuario :)... quieres empanada 🥟? es q estas muy desnutrido',
            tokenGenerado: token //NO SE HACE!!!!! ESTO ES MALA PRACTICA 7-7
        })
  
          
    } catch (error) {

        return response.status(400).json({
            mensaje:'hubo un error al iniciar la sesion',
            error: error.message || error
        })
        
    }
}

export default loginAdmins;