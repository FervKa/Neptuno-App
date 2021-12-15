import { gql } from '@apollo/client'

const EDITAR_PROYECTO_ESTADO = gql`

mutation AprobarProyecto($_id: ID!, $estado: Enum_EstadoProyecto!) {
 aprobarProyecto(_id: $_id, estado: $estado) {
   nombre
   estado
  _id
}}

`;

const EDITAR_PROYECTO_FASE = gql`

mutation ActualizarFaseProyecto($_id: ID!, $fase: Enum_FaseProyecto!) {
  actualizarFaseProyecto(_id: $_id, fase: $fase) {
    nombre
    fase
    _id
}}

`;

const EDITAR_PROYECTO = gql`

mutation EditarProyecto($_id: ID!, $nombre: String, $presupuesto: Float) {
  editarProyecto(_id: $_id, nombre: $nombre, presupuesto: $presupuesto) {
    _id
    nombre
    presupuesto
  }
}

`;

const CREAR_PROYECTO = gql`

mutation CrearProyecto($nombre: String!, $presupuesto: Float!, $fechaInicio: Date!, $fechaTerminacion: Date!, $lider: ID!) {
  crearProyecto(nombre: $nombre, presupuesto: $presupuesto, fechaInicio: $fechaInicio, fechaTerminacion: $fechaTerminacion, lider: $lider) {
    _id
    nombre
    presupuesto
    fechaInicio
    fechaTerminacion
    fase
    estado
}}
 
`;

const CREAR_OBJETIVO = gql`

mutation CrearObjetivo($proyecto: ID!, $tipo: Enum_TipoObjetivo!, $descripcion: String!) {
  crearObjetivo(proyecto: $proyecto, tipo: $tipo, descripcion: $descripcion) {
    _id
    nombre
    objetivos {
      tipo
      descripcion
    }
    fase
    estado
  }}
 
`;

const CREAR_AVANCE = gql`

mutation CrearAvance($descripcion: String!, $estudiante: ID!, $proyecto: ID!) {
  crearAvance(
    descripcion: $descripcion, 
    estudiante: $estudiante, 
    proyecto: $proyecto) 
    {
      _id
  }
}

 
`;

const EDITAR_INSCRIPCION = gql`

mutation EditarInscripcion($_id: ID!, $estado: Enum_EstadoInscripcion) {
  editarInscripcion(_id: $_id, estado: $estado) {
    _id
    estado
  }
}

 
`;

const CREAR_INSCRIPCION = gql`

mutation CrearInscripcion($proyecto: ID!, $estudiante: ID!) {
  crearInscripcion(proyecto: $proyecto, estudiante: $estudiante) {
    _id
  }
}
 
`;

const ELIMINAR_INSCRIPCION = gql`

mutation EliminarInscripcion($proyecto: ID!, $id: String) {
  eliminarInscripcion(proyecto: $proyecto, _id: $id) {
    _id
  }
}
 
`;

const CREAR_OBSERVACION = gql`

mutation CrearObservacion($avance: ID!, $observacion: String!, $lider: ID!) {
  crearObservacion(avance: $avance, observacion: $observacion, lider: $lider) {
    _id
    descripcion
  }
}
 
`;

const MODIFICAR_AVANCE = gql`

mutation Mutation($_id: ID!, $descripcion: String!) {
  editarAvance(_id: $_id, descripcion: $descripcion) {
    _id
    descripcion
  }
}

 
`;








export {EDITAR_PROYECTO_ESTADO, EDITAR_PROYECTO_FASE, CREAR_PROYECTO, CREAR_OBJETIVO, CREAR_AVANCE, EDITAR_INSCRIPCION, CREAR_INSCRIPCION, ELIMINAR_INSCRIPCION, CREAR_OBSERVACION, MODIFICAR_AVANCE, EDITAR_PROYECTO};