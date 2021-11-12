import {connect} from 'mongoose';
// const {connect} = require('mongoose');

const conectarBD = async ()=>{
    return await connect(
        "mongodb+srv://Admin:NeptunoApp@neptunoapp.0fonl.mongodb.net/GestionProyectos?retryWrites=true&w=majority"
        //se cambió <Password> por contraseña 'NeptunoAPP'. Se cambió 'myFirstDatabase' por 'GestionProyectos'
        ).then(()=>{
            console.log("Conexion exitosa");
        }).catch(e=>{
            console.log("Error. No se puede conectar a la BD",e)
        });
}

export default conectarBD;