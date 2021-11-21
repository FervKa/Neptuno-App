import { UserModel } from "../models/users"

const resolvers ={

    Query:{
        Usuarios : async (parent, args) => {
            const usuarios = await UserModel.find()
            return usuarios            
        }
    }
}

export {resolvers}