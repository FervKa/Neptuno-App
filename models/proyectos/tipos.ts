import { gql } from "apollo-server-express";

const tiposProyecto = gql`
    type Objetivo {
        _id: ID!
        descripcion: String!
        tipo: Enum_TipoObjetivo!
        proyecto: Proyecto!
    }

    type Proyecto {
        _id: ID!
        nombre: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaTerminacion: Date!
        lider: Usuario!
        estado: Enum_EstadoProyecto!
        fase: Enum_FaseProyecto!
        objetivos: [Objetivo]!
    }
    type Query {
        leerProyectos: [Proyecto]
        leerProyecto(_id: ID, nombre: String): Proyecto
    }
    type Mutation {
        crearProyecto(
            nombre: String!
            presupuesto: Float!
            fechaInicio: Date!
            fechaTerminacion: Date!
            lider: ID!            
        ): Proyecto

        crearObjetivo(
            descripcion: String!
            tipo: Enum_TipoObjetivo!
            proyecto: ID!
        ): Objetivo
    }
`;

export { tiposProyecto };
