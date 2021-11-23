import { UserModel } from "../models/users"

const resolvers = {

    Query: {
        Usuarios: async (parent, args) => {
            const usuarios = await UserModel.find()
            return usuarios
        },
    },

    Mutation: {
        crearUsuario: async (paren, args) => {
            const usuarioCreado = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
            })

            if (Object.keys(args).includes("estado")) {//Esta validacion es necesaria pues de lo contrario solo tomaria el dato por defecto
                usuarioCreado.estado = args.estado;
            }
            return usuarioCreado
        },
        eliminarUsuario: async (parent, args) => {

            //Buscar alternativa al codigo. P. ej, implementar un foreach para que recorra cada opcion: _id,correo,identificacion
            if (Object.keys(args).includes("_id")) {
                const usuarioEliminado = await UserModel.findOneAndDelete({ _id: args._id })
                return usuarioEliminado
            } else if (Object.keys(args).includes("correo")) {
                const usuarioEliminado = await UserModel.findOneAndDelete({ correo: args.correo })
                return usuarioEliminado

            } else if (Object.keys(args).includes("identificacion")) {
                const usuarioEliminado = await UserModel.findOneAndDelete({ identificacion: args.identificacion })
                return usuarioEliminado
            }
        }
    }

}

export { resolvers }