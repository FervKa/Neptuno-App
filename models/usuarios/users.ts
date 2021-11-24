import { Schema, model } from 'mongoose';
import { Enum_RolUsario, Enum_EstadoUsuario } from '../enums/enums';

//Definir un tipo nuevo de dato con TS
//Los enums se pueden definir en un arhivo enums.ts o en este archivo
interface User {
    correo: string;
    identificacion: string;
    nombre: string;
    apellido: string;
    rol: Enum_RolUsario;
    estado: Enum_EstadoUsuario;
}


//El esquema se define de acuerdo al UML. Este es el correspondiente a la entidad Usuario (faltan campos por definir)
const userSchema = new Schema<User>({
    correo: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: async (email) => {
                //Validacion del correo que incluya '@'y '.'
                // if(!email.includes('@')&& !email.includes('.')){
                //     return false;
                // }

                //Validacion con Expresion regular: cualquiergrupodecaracteres -> @ -> cualquiergrupodecaracteres -> . -> cualquiergrupodecaracteres maximo 5 -> opcional . -> opcional cualquiergrupodecaracteres maximo 3
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: "Formato email incorrecto",
        },
    },
    identificacion: {
        type: String,
        required: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    rol: {
        type: String,
        required: true,
        enum: Enum_RolUsario,
    },
    estado: {
        type: String,
        enum: Enum_EstadoUsuario,
        default: Enum_EstadoUsuario.pendiente,
    }

})

//objeto el cual es la entidad que se comunica con mongoose
const UserModel = model('User', userSchema, 'usuarios') //El tercer parametro es el nombre que se le da a la coleccion en mongodb
 
export { UserModel } //exportarlo así restringe que al importarlo en otro archivo se pueda cambiar el nombre, obligando a usar uno solo
// export default UserModel;