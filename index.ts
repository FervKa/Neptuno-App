import conectarBD from './db/db';
import { UserModel } from './models/users';
import { ProjectModel } from './models/projects';
import { ObjectiveModel } from './models/objectives';
import { Enum_RolUsario, Enum_EstadoUsuario, Enum_TipoObjetivo } from './models/enums';
import CRUDusuarios from './cruds/CRUDusuarios';
import CRUDproyectos from './cruds/CRUDproyectos';


const main = async () => {
  await conectarBD();

  await CRUDusuarios.createUser();
  await CRUDusuarios.readUsers();
  await CRUDusuarios.readOneUser();
  await CRUDusuarios.updateUser();
  await CRUDusuarios.deleteUser();

  await CRUDproyectos.createProject();
  /* ------------------------------------------- CRUD Usuarios ----------------------------------*/
  //---------------------------------------------CREATE usuario
  /* await UserModel.create({
     nombre:"Lider_Nombre",
     apellido:"Lider_Apellido",
     correo:"lider@lider.com",
     identificacion:"12345",
     estado: Enum_EstadoUsuario.pendiente,
     rol: Enum_RolUsario.administrador, 
   }).then(u=>{
     console.log("Usuario creado",u)
   }).catch((e)=>{
     console.log("Error al crear el usuario",e);
     
   }) */

   /* await UserModel.create({
    nombre:"Estudiante_Nombre",
    apellido:"Estudiante_Apellido",
    correo:"lider@lider.com",
    identificacion:"12345",
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
  /* await ProjectModel.create({
    nombre: 'Proyecto prueba wstavera',
    //objetivos:Schema.Types.ObjectId;
    presupuesto: 1000,
    fechaInicio: Date.now(),
    fechaTerminacion: new Date('2022/11/10'),
    lider: '619430ef8bdfd8f1d87925e2',//colocar el id del usuario

  }).then((p) => {
    console.log("Proyecto creado", p)
  }).catch((e) => {
    console.log("Error al crear el Proyecto", e);
  }) */

  //-----CREACION DE OBJETIVOS DE PRUEBA

  /* await ObjectiveModel.create({
    tipo: Enum_TipoObjetivo.general,
    descripcion: "Este es el objetivo general",
    proyecto: '61948b680b42b0a964268d9b'    
  })

  await ObjectiveModel.create({
    tipo: Enum_TipoObjetivo.especifico,
    descripcion: "Este es el PRIMER objetivo específico",
    proyecto: '61948b680b42b0a964268d9b'    
  })
  await ObjectiveModel.create({
    tipo: Enum_TipoObjetivo.especifico,
    descripcion: "Este es el SEGUNDO objetivo específico",
    proyecto: '61948b680b42b0a964268d9b'    
  }) */

  
  //-----------------------------------------------READ Proyectos
  
  /* La siguiente busqueda se realiza teniendo en cuenta que en la relacion Proyecto-Objetivos, los objetivos son los que tienen relacionado el proyecto
  Son dos pasos pasos para hacerlo:
    1. Se busca el proyecto deseado
    2. Se buscan todos los objetivos del proyecto deseado mediante el campo 'proyecto' del ObjectiveModel
    3. Se unifican los dos documentos en una nueva variable */

  //findOne() busca un solo documento <DocumentModel.findOne({campo:'valor});>

  const proyectoBuscado = await ProjectModel.findOne({__id: '61946d1e74ca6af5f19b0cac'});
  // console.log('El proyecto buscado es: ', proyectoBuscado);

  // const objetivosProyectoBuscado = await ObjectiveModel.find({proyecto: proyectoBuscado._id});
  // console.log('Los objetivos del proyecto son: ', objetivosProyectoBuscado);

  // const proyectoBuscadoMasObjetivos = {...proyectoBuscado, objetivos: objetivosProyectoBuscado}
  
  // const objetivosEspecificos = await ObjectiveModel.find({tipo: Enum_TipoObjetivo.especifico});
  // console.log("El objetivo especifico es", objetivosEspecificos);
  
  // console.log('El proyecto completo es: ', proyectoBuscadoMasObjetivos);
  
  
  
  //Buscar y lee todos los Proyectos
  // await ProjectModel.find().then((u) => {
  //   console.log("Proyectos", u);
  // }).catch((e) => {
  //   console.error('Error obteniendo los Proyectos', e)
  // });


  //------------------------------------------------UPDATE Proyectos
  // finOneAndUpdate() devuelve el primer documeno que coincida con el filtro de busqueda
  //  await ProjectModel.findOneAndUpdate(
     
  //       ).then((p)=>{
  //    console.log("Proyecto actualizado", p);    
  //  }).catch((e)=>{
  //    console.log("Error actualizando Proyect",e);
     
  //  })

  //---------------------------------------------------DELETE Proyecto
  /*  await ProjectModel.findOneAndDelete(
     {correo: 'correo@c.com'}
   ).then((p)=>{
     console.log("Proyecto eliminado", p);    
   }).catch((e)=>{
     console.log("Error eliminando el Proyecto",e);
     
   })*/
};

main();