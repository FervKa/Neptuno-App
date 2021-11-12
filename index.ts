import conectarBD from './db/db';
import {UserModel} from './models/users';

const main = async ()=>{
  await conectarBD();

  UserModel.create({
    correo:"unCorreo@c.com",
    identificacion:"12345",
    nombre:"Pepito",
    apellido:"Perez"
  }).then(u=>{
    console.log("Usuario creado",u)
  }).catch((e)=>{
    console.log("Error al crear el usuario",e);
    
  })
};

main();

