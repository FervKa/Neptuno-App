import conectarBD from './db/db';
import {UserModel} from './models/users';
import {Enum_RolUsario, Enum_EstadoUsuario} from './models/enums';

const main = async ()=>{
  await conectarBD();

  //CREATE
  UserModel.create({
    nombre:"Sutano",
    apellido:"Perez",
    correo:"correo@c.com",
    identificacion:"2345",
    estado: Enum_EstadoUsuario.pendiente,
    rol: Enum_RolUsario.administrador,

  }).then(u=>{
    console.log("Usuario creado",u)
  }).catch((e)=>{
    console.log("Error al crear el usuario",e);
    
  })
  //READ
  //Buscar y lee todos los usuarios
  await UserModel.find().then((u)=>{
    console.log("Usuarios",u);    
  }).catch((e)=>{
    console.error('Error obteniendo los usuarios',e)
  });

  //UPDATE
  // finOneAndUpdate() devuelve el primer documeno que coincida con el filtro de busqueda
  await UserModel.findOneAndUpdate(
    {correo: 'correo@c.com'},
    {
      nombre:'Sutana',
      apellido:'Lopez'
    }
  ).then((u)=>{
    console.log("Uusario actualizado", u);    
  }).catch((e)=>{
    console.log("Error actualizando usuario",e);
    
  })

  //DELETE
  await UserModel.findOneAndDelete(
    {correo: 'correo@c.com'}
  ).then((u)=>{
    console.log("Usuario eliminado", u);    
  }).catch((e)=>{
    console.log("Error eliminando el usuario",e);
    
  })

};


main();




