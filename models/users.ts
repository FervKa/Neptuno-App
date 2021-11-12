import {Schema, model} from 'mongoose';

//El esquema se define de acuerdo al UML. Este es el correspondiente a la entidad Usuario (faltan campos por definir)
const userSchema = new Schema({
    correo:{
        type:String,
        required:true,
    },
    identificacion:{
        type:String,
        required:true,
        unique:true,
    },
    nombre:{
        type: String,
        required: true,
    },    
    apellido:{
        type: String,
        required: true,
    },    
})

//objeto el cual es la entidad que se comunica con mongoose
const UserModel = model('User', userSchema)

export {UserModel} //exportarlo así restringe que al importarlo en otro archivo se pueda cambiar el nombre, obligando a usar uno solo
// export default UserModel;