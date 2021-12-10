import { gql } from "@apollo/client";


const GET_PROYECTOS = gql`

query LeerUsuarios {
  leerProyectos {
    _id
    nombre
    presupuesto
    fechaInicio
    fechaTerminacion
  }
}

`;

export {GET_PROYECTOS};