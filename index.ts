import conectarBD from './db/db';
import {UserModel} from './models/users';
import {Enum_RolUsario, Enum_EstadoUsuario} from './models/enums';
import { ProjectModel } from './models/projects';

const main = async ()=>{
  await conectarBD();


  /* ------------------------------------------- CRUD Usuarios ----------------------------------*/
  //---------------------------------------------CREATE usuario
 /*  UserModel.create({
    nombre:"Pepito",
    apellido:"Perez",
    correo:"correo@prueba.com",
    identificacion:"23456",
    estado: Enum_EstadoUsuario.pendiente,
    rol: Enum_RolUsario.administrador,

  }).then(u=>{
    console.log("Usuario creado",u)
  }).catch((e)=>{
    console.log("Error al crear el usuario",e);
    
  }) */



  //-----------------------------------------------READ usuario
  //Buscar y lee todos los usuarios
  /* await UserModel.find().then((u)=>{
    console.log("Usuarios",u);    
  }).catch((e)=>{
    console.error('Error obteniendo los usuarios',e)
  }); */


  //------------------------------------------------UPDATE Usuario
  // finOneAndUpdate() devuelve el primer documeno que coincida con el filtro de busqueda
 /*  await UserModel.findOneAndUpdate(
    {correo: 'correo@c.com'},
    {
      nombre:'Sutana',
      apellido:'Lopez'
    }
  ).then((u)=>{
    console.log("Usario actualizado", u);    
  }).catch((e)=>{
    console.log("Error actualizando usuario",e);
    
  }) */

  //---------------------------------------------------DELETE usuario
 /*  await UserModel.findOneAndDelete(
    {correo: 'correo@c.com'}
  ).then((u)=>{
    console.log("Usuario eliminado", u);    
  }).catch((e)=>{
    console.log("Error eliminando el usuario",e);
    
  })*/


/* ------------------------------------------- CRUD Proyectos ----------------------------------*/
  //---------------------------------------------CREATE Proyecto
  ProjectModel.create({
    nombre:'Proyecto prueba wstavera',
    //objetivos:Schema.Types.ObjectId;
    presupuesto:1000,
    fechaInicio:Date.now(),
    fechaTerminacion:new Date('2022/11/10'),
    lider:'id usuario',//colocar el id del usuario
    objetivos:'objetivos'


  }).then((p)=>{
    console.log("Proyecto creado",p)
  }).catch((e)=>{
    console.log("Error al crear el Proyecto",e);
  })

  

};


  //-----------------------------------------------READ Proyectos
  //Buscar y lee todos los Proyectos
  /* await UserModel.find().then((u)=>{
    console.log("Proyectos",u);    
  }).catch((e)=>{
    console.error('Error obteniendo los Proyectos',e)
  }); */


  //------------------------------------------------UPDATE Proyectos
  // finOneAndUpdate() devuelve el primer documeno que coincida con el filtro de busqueda
 /*  await ProjectModel.findOneAndUpdate(
    {correo: 'correo@c.com'},
    {
      nombre:'Sutana',
      apellido:'Lopez'
    }
  ).then((p)=>{
    console.log("Uusario actualizado", p);    
  }).catch((e)=>{
    console.log("Error actualizando Proyect",e);
    
  }) */

  //---------------------------------------------------DELETE Proyecto
 /*  await ProjectModel.findOneAndDelete(
    {correo: 'correo@c.com'}
  ).then((p)=>{
    console.log("Proyecto eliminado", p);    
  }).catch((e)=>{
    console.log("Error eliminando el Proyecto",e);
    
  })*/






main();