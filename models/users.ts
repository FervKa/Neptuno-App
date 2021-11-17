import {Schema, model} from 'mongoose';
import {Enum_RolUsario, Enum_EstadoUsuario} from './enums';

//Definir un tipo nuevo de dato con TS
//Los enums se pueden definir en un arhivo enums.ts o en este archivo
interface User{
    correo:Schema.Types.String;
    identificacion:Schema.Types.String;
    nombre:Schema.Types.String;
    apellido:Schema.Types.String;
    rol: Enum_RolUsario;
    estado: Enum_EstadoUsuario;
}


//El esquema se define de acuerdo al UML. Este es el correspondiente a la entidad Usuario (faltan campos por definir)
const userSchema = new Schema<User>({
    correo:{
        type:Schema.Types.String,
        required:true,
        unique: true,
        validate:{
            validator: async (email)=>{
                //Validacion del correo que incluya '@'y '.'
                // if(!email.includes('@')&& !email.includes('.')){
                //     return false;
                // }

                //Validacion con Expresion regular: cualquiergrupodecaracteres -> @ -> cualquiergrupodecaracteres -> . -> cualquiergrupodecaracteres maximo 5 -> opcional . -> opcional cualquiergrupodecaracteres maximo 3
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message:"Formato email incorrecto",
        },
    },
    identificacion:{
        type:Schema.Types.String,
        required:true,
        unique:true,
    },
    nombre:{
        type: Schema.Types.String,
        required: true,
    },    
    apellido:{
        type: Schema.Types.String,
        required: true,
    },
    rol:{
        type:Schema.Types.String,
        required:true,
        enum:Enum_RolUsario,
    },
    estado:{
        type:Schema.Types.String,
        enum:Enum_EstadoUsuario,
        default:Enum_EstadoUsuario.pendiente,
    }
    
})

//objeto el cual es la entidad que se comunica con mongoose
const UserModel = model('User', userSchema,'usuarios') //El tercer parametro es el nombre que se le da a la coleccion en mongodb

export {UserModel} //exportarlo así restringe que al importarlo en otro archivo se pueda cambiar el nombre, obligando a usar uno solo
// export default UserModel;