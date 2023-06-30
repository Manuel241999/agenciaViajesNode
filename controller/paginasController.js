import e from "express";
import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/testimoniales.js";

const paginaInicio = async (req,res) => {

    //Consultar 3 viajes del modelo Viaje

    const promiseDB = []//array que va almacenar las 2 consultas y va ayudar a que no se tarde tanto por los await

    promiseDB.push(Viaje.findAll({limit: 3}))
    promiseDB.push(Testimonial.findAll({limit: 3}))


    try {
       //const viajes = await Viaje.findAll({limit: 3})//es como hacer esto:  select * from viajes limit 3
        const resultado = await Promise.all( promiseDB );// de esta manera se van a consultar a la base de datos al mismo tiempo
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
        
    } catch (error) {
        console.log(error);
    }

       
}

const paginaNosotros = (req,res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req,res) => {
    //Consultar BD 
    const viajes = await Viaje.findAll()

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes,
    });
}

const paginaTestimoniales = async (req,res) => {

        try {
         const testimoniales = await Testimonial.findAll();   
        res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    });
        } catch (error) {
            console.log("🚀 ~ file: paginasController.js:31 ~ paginaTestimoniales ~ error:", error)  
        }

}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req,res) => {
    //console.log(req.params.viaje);//se asocia mucho a esto: /viajes/:slug
    const {slug} = req.params;

    try {
        const viaje = await Viaje.findOne({ where : {slug}})

        res.render('viaje',{
            pagina: 'Informacion Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }

}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}