import conectarBD from './db/db';
import {UserModel} from './models/users';
import {Enum_RolUsario} from './models/enums';

const main = async ()=>{
  await conectarBD();

  //CREATE
  UserModel.create({
    nombre:"Sutano",
    apellido:"Perez",
    correo:"correo@c.com",
    identificacion:"2345",
    rol: Enum_RolUsario.administrador,

  }).then(u=>{
    console.log("Usuario creado",u)
  }).catch((e)=>{
    console.log("Error al crear el usuario",e);
    
  })
  //READ
  await UserModel.find().then((u)=>{
    console.log("Usuarios",u);    
  }).catch((e)=>{
    console.error('Error obteniendo los usuarios',e)
  });
};

main();

