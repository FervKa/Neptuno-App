import { gql } from "@apollo/client";

const LOGIN = gql`
  mutation Ingreso($correo: String!, $password: String!) {
  Ingreso(correo: $correo, password: $password) {
    error
    token
  }
}
`;

const REGISTRO = gql`
  mutation Registro(
    $identificacion: String!
    $nombres: String!
    $apellidos: String!
    $correo: String!
    $password: String!
    $rol: Enum_RolUsario!
  ) {
    Registro(
      identificacion: $identificacion
      nombres: $nombres
      apellidos: $apellidos
      correo: $correo
      password: $password
      rol: $rol
    ) {
      error
      token
    }
  }
`;

const REFRESCAR_TOKEN = gql`
  mutation RefrescarToken {
    refrescarToken {
      error
      token
    }
  }
`;

export { LOGIN, REGISTRO, REFRESCAR_TOKEN };
