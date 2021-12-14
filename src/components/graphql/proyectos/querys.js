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

const GET_INCRIPCIONES = gql`
query LeerInscripciones($proyecto: ID) {
  leerInscripciones(proyecto: $proyecto) {
    estudiante {
      nombres
      apellidos
      correo
      rol
      estado
    }
    proyecto{
      _id
    }
    fechaIngreso
    estado
    _id
  }
}
`;

const GET_AVANCE = gql`
query AvanceSimple($_id: ID) {
  avanceSimple(_id: $_id) {
    _id
    descripcion
    estudiante {
      _id
      nombres
      apellidos
      correo
    }
    fechaAvance
    proyecto {
      _id
    }
    observacionesLider {
      _id
      observacion
    }
  }
}
`;

export {GET_PROYECTOS, GET_PROYECTO, GET_INCRIPCIONES, GET_AVANCE};