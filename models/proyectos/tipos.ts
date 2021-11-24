import { gql } from "apollo-server-express";

const tiposProyectos = gql`

    type Proyecto{
        _id:ID!
        nombre:String!
        presupuesto:Float!
        fechaInicio:Date!
        fechaTerminacion:Date!
        lider:Schema.Types.ObjectId!
        estado: Enum_EstadoProyecto
        fase:Enum_FaseProyecto
    }
    type Query{
        leerProyectos:Proyecto
        leerProyecto(_id:ID!, nombre: String)

    }


`