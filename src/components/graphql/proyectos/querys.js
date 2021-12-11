import { gql } from "@apollo/client";


const GET_PROYECTOS = gql`

query LeerProyectos {
  leerProyectos {
    _id
    nombre
    presupuesto
    fechaInicio
    fechaTerminacion
    fase
    estado
  }
}

`;

export {GET_PROYECTOS};