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

            if (Object.keys(args).includes("estado")){//Esta validacion es necesaria pues de lo contrario solo tomaria el dato por defecto
                usuarioCreado.estado=args.estado;
            }
            return usuarioCreado
        }
    }
}

export { resolvers }