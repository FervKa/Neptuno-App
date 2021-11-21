import {gql} from 'apollo-server-express';

const typeDefs = gql`
    
    enum Enum_RolUsario{
        ESTUDIANTE
        LIDER
        ADMINISTRADOR
    }

    enum Enum_EstadoUsuario{
        PENDIENTE
        AUTORIZADO
        NO_AUTORIZADO
    }
    
    type Usuario{
        _id: ID!
        nombre:String!
        apellido: String!
        correo: String!
        identificacion:String!        
        estado:Enum_EstadoUsuario!
        rol: Enum_RolUsario!

    }

    type Query{
        Usuarios:[Usuario]
    }
`;

export {typeDefs}