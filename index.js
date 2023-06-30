//const express = require('express');//jalas expres del package.json(VERSION ANTIGUA)
import express from 'express';
import router from "./routes/index.js";
import db from './config/db.js';
//import dotenv from 'dotenv/config'//funciona para importar la dependencia en donde va estar instaldo el proyecto

//dotenv.config()//Aqui es donde va jalar directamente del archivo la variable de entorno (LINE OPCIONAL)

//console.log(process.env.DB_HOST);//Explicacion de porque se hizo: De esta manera se hace mas segura el deployment cuando se hace la instalacion 

const app = express();// le asignas la funcion de express a una variable

//conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos Conectada'))
    .catch(error => console.log(error))

//Definir puerto

const port = process.env.PORT || 4000;// process.env.PORT esto es el puerto de las variables de entorno que sale cuando estoy en modo local, y el 4000 si ya seria cuando este en el server

//Habilitar PUG
app.set('view engine', 'pug');

//Obtener el año actual
app.use((req,res, next) => {//request: lo que envio al servidor, response: lo que el servidor te manda a ti, Next: Ya termine, por lo que vamonos al siguiente midelware, en este caso este: app.use(express.static('public'));
    const year = new Date()
    res.locals.ActualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes'
    /*return*/ next();//manda al siguiente, nota: el return hace que lo ejecute de forma forzosa
})

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

//Definir la carpeta publica
app.use(express.static('public'));

//Agregar router:
app.use('/',router)//el "use" soporta: get,post,put,patch,delete 

app.listen(port, () => {//arranca el servidor con la funcion de .lisent
    console.log(`El Servidor esta funcionando en el puerto ${port}`);
} )