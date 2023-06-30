import express from 'express';
import { 
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleViaje 
} from '../controller/paginasController.js';

import { guardarTestimonial } from '../controller/testimonialController.js';

const router = express.Router()

router.get('/',paginaInicio);

router.get('/nosotros',paginaNosotros);

router.get('/viajes',paginaViajes);

router.get('/viajes/:slug',paginaDetalleViaje);

router.get('/testimoniales',paginaTestimoniales);
router.post('/testimoniales',guardarTestimonial);

export default router;
/*
router.get('/', (req,res) => {//oficialmente mi primer Request ...  a la pagina principal   (RESUMEN: req - lo que enviamos : res - lo que express nos responde)
   
   res.render('inicio',{
      pagina: 'Inicio'//parece que tambien puedo enviar variables de esta forma 
   })//si te das cuenta puedo literalmente decir que va devolver la respuesta
 })*/
 
 //router.get('/nosotros', (req,res) => {

    // const viajes = 'Viaje a Alemania'
/*
     res.render('nosotros', {
        //textoViajes : viajes    forma larga
       // viajes   //forma corta
       pagina: 'Nosotros'
     })*/
     
  //})
/*
  router.get('/viajes', (req,res) => {
    res.render('viajes', {
      pagina: 'Viajes'
     })
   })

   router.get('/testimoniales', (req,res) => {
      res.render('testimoniales', {
        pagina: 'Testimoniales'
      })
 })

  */
 


 