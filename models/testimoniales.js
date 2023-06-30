import Sequelize from "sequelize";
import db from "../config/db.js";


export const Testimonial = db.define('testimoniales', {//Aqui jalo directamente los datos de la base de datos y creo sus campos
    nombre: {
        type: Sequelize.STRING 
    },
    correo: {
        type: Sequelize.STRING 
    },
    mensaje: {
        type: Sequelize.STRING 
    }
})