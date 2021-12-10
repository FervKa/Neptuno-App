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

export { GET_USUARIOS };