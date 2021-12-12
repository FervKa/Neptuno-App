import { gql } from "@apollo/client";

const GET_PROYECTOS = gql`
  query {
    leerProyectos {
      _id
      nombre
      presupuesto
      fechaInicio
      fechaTerminacion
      fase
      estado
      lider {
        nombres
        apellidos
        correo
      }
    }
  }

`;

const GET_PROYECTO = gql`
query($_id: ID!) {
  leerProyecto(_id: $_id) {
    _id
    nombre
    presupuesto
    fechaInicio
    fechaTerminacion
    lider {
      nombres
      apellidos
      correo
    }
    objetivos {
      descripcion
      tipo
      _id
    }
    fase
    avances {
      _id
      descripcion
      estudiante {
        _id
      }
      fechaAvance
    }
    estado
  }
}
`;

export {GET_PROYECTOS, GET_PROYECTO};