import {Schema, model} from 'mongoose';
import {Enum_RolUsario} from './enums';

//Definir un tipo nuevo de dato con TS
//Los enums se pueden definir en un arhivo enums.ts o en este archivo
interface User{
    correo:string;
    identificacion:string;
    nombre:string;
    apellido:string;
    rol: Enum_RolUsario;
}


//El esquema se define de acuerdo al UML. Este es el correspondiente a la entidad Usuario (faltan campos por definir)
const userSchema = new Schema<User>({
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
    rol:{
        type:String,
        required:true,
        enum:Enum_RolUsario,
    }
    
})

//objeto el cual es la entidad que se comunica con mongoose
const UserModel = model('User', userSchema)

export {UserModel} //exportarlo así restringe que al importarlo en otro archivo se pueda cambiar el nombre, obligando a usar uno solo
// export default UserModel;