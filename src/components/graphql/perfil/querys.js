import { gql } from "@apollo/client";



const GET_PERFIL = gql`
query LeerUsuario($correo: String) {
  leerUsuario(correo: $correo) {
    _id
    identificacion
    nombres
    apellidos
    correo
    rol
    estado
  }
}
`

const EDITAR_PERFIL = gql`

mutation editarPerfil($identificacion: String, 
$nombres: String, 
$apellidos: String, 
$correo: String) {
  editarPerfil(identificacion: $identificacion, 
  nombres: $nombres, 
  apellidos: $apellidos, 
  correo: $correo) {
    identificacion
    nombres
    apellidos
    correo
    rol
    estado
  }
}



`;

export  {GET_PERFIL, EDITAR_PERFIL}