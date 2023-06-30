import { Testimonial } from "../models/testimoniales.js";

const guardarTestimonial = async (req,res) => {
    //validar...

    const {nombre, correo, mensaje} = req.body

    const errores = [];

    if(nombre.trim() === '' ){
        errores.push({mensaje: 'El nombre esta vacio'});
    }

    if(correo.trim() === '' ){
        errores.push({mensaje: 'El correo esta vacio'});    
    }
    
    if(mensaje.trim() === '' ){
        errores.push({mensaje: 'El mensaje esta vacio'});    
    }
    if(errores.length > 0){
        //Consultar testimoniales Existentes
        const testimoniales = await Testimonial.findAll();//ojo, esto primeramente se hizo en paginasController por lo que es necesario traer estos datos aqui tambien, ya que aqui se hace una validacion de un error y no va tronar si no lo hace asi   
        //Mostrar la vista de errores
        res.render('testimoniales',{//render toma 2 parametros, acordate
                pagina: 'Testimoniales',
                errores,
                nombre,
                correo,
                mensaje,
                testimoniales
        });
    }else{
        //Almacenarlo en la base de datos
        try {
           await Testimonial.create({
            nombre,
            correo,
            mensaje
           })
           res.redirect('/testimoniales')// lo envias de regreso
        } catch (error) {
            console.log(error);
        }

    }
}

export {
    guardarTestimonial
}