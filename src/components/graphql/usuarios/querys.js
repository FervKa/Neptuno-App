import { gql } from "@apollo/client";


const GET_USUARIOS = gql`
query LeerUsuarios {
  leerUsuarios {
    _id
    identificacion
    nombres
    apellidos
    correo
    estado
    rol
  }
}
`;

const GET_USUARIO = gql`
query LeerUsuario($_id: ID) {
  leerUsuario(_id: $_id) {
    _id
    identificacion
    nombres
    apellidos
    correo
    rol
    estado
  }
}
`;


export { GET_USUARIO, GET_USUARIOS };
