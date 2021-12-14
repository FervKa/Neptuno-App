import { gql } from '@apollo/client'


const EDITAR_USUARIO = gql`

mutation EditarUsuario($_id: ID!, 
$identificacion: String, 
$nombres: String, 
$apellidos: String, 
$correo: String, 
$rol: Enum_RolUsario, 
$estado: Enum_EstadoUsuario) {
  editarUsuario(_id: $_id, 
  identificacion: $identificacion, 
  nombres: $nombres, 
  apellidos: $apellidos, 
  correo: $correo,
  rol: $rol,
  estado:$estado) {

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


export { EDITAR_USUARIO };