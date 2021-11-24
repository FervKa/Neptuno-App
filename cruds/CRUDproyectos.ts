// import { UserModel } from '../models/users';
import { ProjectModel } from '../models/proyectos/projects';
import { ObjectiveModel } from '../models/proyectos/objectives';
// import { ApplicationModel } from '../models/applications';
// import { LeaderObservationModel } from '../models/leaderObservation';
// import { ProgressModel } from '../models/progress';

// import { Enum_RolUsario, Enum_EstadoUsuario } from '../models/enums';
// import { Enum_EstadoProyecto, Enum_FaseProyecto } from '../models/enums';
import { Enum_TipoObjetivo } from '../models/enums/enums';
// import { Enum_EstadoInscripcion } from '../models/enums';




//CREATE
const createProject = async () => {

    await ProjectModel.create({
        nombre: "Proyecto_Prueba_CRUD",
        presupuesto: 850,
        lider: '6195472cb89825e34d280118',
        fechaInicio: new Date('2022/01/01'),
        fechaTerminacion: new Date('2023/01/01'),
    }).then((p) => {
        console.log("El proyecto_CRUD creado es: ", p);

    }).catch((e) => {
        console.log("Error al crear el proyecto CRUD ", e);

    })

    //-----CREACION DE OBJETIVOS DE PRUEBA
    const proyectoCRUD = await ProjectModel.findOne({ nombre: 'Proyecto_Prueba_CRUD' })

    await ObjectiveModel.create({
        tipo: Enum_TipoObjetivo.general,
        descripcion: "Este es el objetivo general del proyecto CRUD",
        proyecto: proyectoCRUD.id
    }).then((o) => {
        console.log('El objetivo general del proyecto CRUD es: ', o);

    }).catch((e) => {
        console.log('Error. No se pudo crear el objetivo general del CRUD ', e);

    })

    await ObjectiveModel.create({
        tipo: Enum_TipoObjetivo.especifico,
        descripcion: "Este es el PRIMER objetivo específico del proyecto CRUD",
        proyecto: proyectoCRUD.id
    })
    await ObjectiveModel.create({
        tipo: Enum_TipoObjetivo.especifico,
        descripcion: "Este es el SEGUNDO objetivo específico del proyecto CRUD",
        proyecto: proyectoCRUD.id
    })

}

//READ

const readOneProject = async () => {

    /* La siguiente busqueda se realiza teniendo en cuenta que en la relacion Proyecto-Objetivos, los objetivos son los que tienen relacionado el proyecto
    Son tres pasos pasos para hacerlo:
    1. Se busca el proyecto deseado
    2. Se buscan todos los objetivos del proyecto deseado mediante el campo 'proyecto' del ObjectiveModel
    3. Se unifican los dos documentos en una nueva variable */

    //findOne() busca un solo documento <DocumentModel.findOne({campo:'valor'});>

    const proyectoBuscado = await ProjectModel.findOne({ nombre: "Proyecto_Prueba_CRUD" });
    // console.log('El proyecto buscado es: ', proyectoBuscado);

    //Se buscan todos los objetivos que estén relacionados con el proyecto buscado
    const objetivosProyectoBuscado = await ObjectiveModel.find({ proyecto: proyectoBuscado.id });
    // console.log('Los objetivos del proyecto son: ', objetivosProyectoBuscado);

    //Se unifica el proyecto buscado con los objetivos del mismo en una nueva variable
    const proyectoBuscadoMasObjetivos = { ...proyectoBuscado, objetivos: objetivosProyectoBuscado }
    console.log('El proyecto completo es: ', proyectoBuscadoMasObjetivos);

    // const objetivosEspecificos = await ObjectiveModel.find({ tipo: Enum_TipoObjetivo.especifico });
    // console.log("El objetivo especifico es", objetivosEspecificos);



}

const readProjects = async () => {

    return await ProjectModel.find().then((p) => {
        console.log('Los proyectos son: ', p);

    }).catch((e) => {
        console.log('Error. No se pudieron consultar los proyectos. ', e);

    })
}

//UPDATE
const updateProject = async () => {

    await ProjectModel.findOneAndUpdate({
        nombre: "Proyecto_Prueba_CRUD"
    },
        {
            fechaInicio: new Date('2023/06/01'),
            presupuesto: 1000
        }
    ).then((p) => {
        console.log('El proyecto fue actualizado. ', p);

    }).catch((e) => {
        console.log('Error. No se pudo actualizar el proyecto. ', e);

    })
}

//DELETE
const deleteProyect = async () => {

    const proyectoCRUD = await ProjectModel.findOne({ nombre: 'Proyecto_Prueba_CRUD' })

    await ObjectiveModel.deleteMany({ proyecto: proyectoCRUD.id }).then((o) => {
        console.log('Los objetivos se borraron.', o);

    }).catch((e) => {
        console.log('No se pudieron borrar los objetivos. ', e);

    })
    await ProjectModel.findOneAndDelete({ _id: proyectoCRUD.id }).then((p) => {
        console.log('El proyecto fue borrado. ', p);

    }).catch((e) => {
        console.log('El proyecto no pudo ser borrado. ', e);

    })

}

export default { createProject, readOneProject, readProjects, updateProject, deleteProyect }