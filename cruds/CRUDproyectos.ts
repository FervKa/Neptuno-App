// import { UserModel } from '../models/users';
import { ProjectModel } from '../models/projects';
import { ObjectiveModel } from '../models/objectives';
// import { ApplicationModel } from '../models/applications';
// import { LeaderObservationModel } from '../models/leaderObservation';
// import { ProgressModel } from '../models/progress';

// import { Enum_RolUsario, Enum_EstadoUsuario } from '../models/enums';
// import { Enum_EstadoProyecto, Enum_FaseProyecto } from '../models/enums';
import { Enum_TipoObjetivo } from '../models/enums';
// import { Enum_EstadoInscripcion } from '../models/enums';




//CREATE
const createProject = async () => {

    await ProjectModel.create({
        nombre: "Proyecto_Prueba_CRUD",
        presupuesto: 850,
        lider: '6195472cb89825e34d280118',
        fechaInicio: '2022/01/01',
        fechaTerminacion: '2023/01/01',
    }).then((p) => {
        console.log("El proyecto_CRUD creado es: ", p);

    }).catch((e) => {
        console.log("Error al crear el proyecto CRUD ", e);

    })

    //-----CREACION DE OBJETIVOS DE PRUEBA

    await ObjectiveModel.create({
        tipo: Enum_TipoObjetivo.general,
        descripcion: "Este es el objetivo general del proyecto CRUD",
        proyecto: '61956c4a842eb94f5fc0e8bc'
    }).then((o) => {
        console.log('El objetivo general del proyecto CRUD es: ', o);

    }).catch((e) => {
        console.log('Error. No se pudo crear el objetivo general del CRUD ', e);

    })

    await ObjectiveModel.create({
        tipo: Enum_TipoObjetivo.especifico,
        descripcion: "Este es el PRIMER objetivo específico del proyecto CRUD",
        proyecto: '61956c4a842eb94f5fc0e8bc'
    })
    await ObjectiveModel.create({
        tipo: Enum_TipoObjetivo.especifico,
        descripcion: "Este es el SEGUNDO objetivo específico del proyecto CRUD",
        proyecto: '61956c4a842eb94f5fc0e8bc'
    })
}

//READ

const readOneProject = async () => {

    /* La siguiente busqueda se realiza teniendo en cuenta que en la relacion Proyecto-Objetivos, los objetivos son los que tienen relacionado el proyecto
    Son dos pasos pasos para hacerlo:
    1. Se busca el proyecto deseado
    2. Se buscan todos los objetivos del proyecto deseado mediante el campo 'proyecto' del ObjectiveModel
    3. Se unifican los dos documentos en una nueva variable */

    //findOne() busca un solo documento <DocumentModel.findOne({campo:'valor});>

    const proyectoBuscado = await ProjectModel.findOne({ _id: '61956c4a842eb94f5fc0e8bc' });
    console.log('El proyecto buscado es: ', proyectoBuscado);

    //Se buscan todos los objetivos que estén relacionados con el proyecto buscado
    const objetivosProyectoBuscado = await ObjectiveModel.find({ proyecto: proyectoBuscado.id});
    // console.log('Los objetivos del proyecto son: ', objetivosProyectoBuscado);

    const proyectoBuscadoMasObjetivos = { ...proyectoBuscado, objetivos: objetivosProyectoBuscado }

    const objetivosEspecificos = await ObjectiveModel.find({ tipo: Enum_TipoObjetivo.especifico });
    // console.log("El objetivo especifico es", objetivosEspecificos);

    console.log('El proyecto completo es: ', proyectoBuscadoMasObjetivos);

}

export default { createProject, readOneProject }