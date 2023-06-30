import Sequelize from 'sequelize';//nota: use esto para conectarme a mysql: npm i mysql2 sequelize

import dotenv from 'dotenv/config'//funciona para importar la dependencia en donde va estar instaldo el proyecto

//dotenv.config()//Aqui es donde va jalar directamente del archivo la variable de entorno (LINE OPCIONAL)

console.log(process.env.DB_HOST);//Explicacion de porque se hizo: De esta manera se hace mas segura el deployment cuando se hace la instalacion 

const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{//nombre de base de datos , user  y password
        host: process.env.DB_HOST,
        port: '3306',
        dialect: 'mysql',
        define: {
            timestamps : false
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        operatorAliases: false

    });
    export default db;
    //Instalacion de: npm i dotenv
    //esta es una dependencia que requerimos en produccion