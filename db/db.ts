import {connect} from 'mongoose';
// import { MongoClient } from 'mongodb';
// const {connect} = require('mongoose');
import dotenv = require("dotenv");
dotenv.config()

const conectarBD = async ()=>{
    return await connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@neptunoapp.0fonl.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
        //se cambió <Password> por contraseña 'NeptunoAPP'. Se cambió 'myFirstDatabase' por 'GestionProyectos'
        ).then(()=>{
            console.log("Conexion exitosa");
        }).catch(e=>{
            console.log("Error. No se puede conectar a la BD",e)
        });
}

export default conectarBD;
