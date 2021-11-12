import conectarBD from './db/db';
import {UserModel} from './models/users';

const main = async ()=>{
  await conectarBD();

  //CREATE
  UserModel.create({
    correo:"unCorreo@c.com",
    identificacion:"123456",
    nombre:"Mengana",
    apellido:"Sutana",
    rol:'Lider'
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

