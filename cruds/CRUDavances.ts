// import { UserModel } from '../models/users';
// import { ProjectModel } from '../models/projects';
// import { ObjectiveModel } from '../models/objectives';
// import { ApplicationModel } from '../models/applications';
import { LeaderObservationModel } from '../models/leaderObservation';
import { ProgressModel } from '../models/progress';

// import { Enum_RolUsario, Enum_EstadoUsuario } from '../models/enums';
// import { Enum_EstadoProyecto, Enum_FaseProyecto } from '../models/enums';
// import { Enum_TipoObjetivo } from '../models/enums';
// import { Enum_EstadoInscripcion } from '../models/enums';

//CREATE

const createProgress = async () => {

    await ProgressModel.create({
        descripcion:'Avance del proyecto',
        estudiante:'619564b3f49fbe19bc79f65c',
        fechaAvance: Date.now(),
        proyecto: '61948b680b42b0a964268d9b'

    })

    //CREACION DE LAS OBSERVACIONES DEL LIDER
    const avanceNuevo = await ProgressModel.findOne({descripcion:'Avance del proyecto'})
    await LeaderObservationModel.create({
        avance: avanceNuevo.id,
        lider: '619564b2f49fbe19bc79f659',
        observacion:'Esta es la observacion del lider para el avance'

    })
}

//READ
const readProgresss = async () => {


    const observacionesLider = await ProgressModel.find({project: '61948b680b42b0a964268d9b'})

    const avancesProyecto = await ProgressModel.find({ project: '61948b680b42b0a964268d9b' })

    const avancesProyectoMasObservaciones = {...avancesProyecto,observacionesLider: observacionesLider}

    console.log('Los avances del proyecto son: ', avancesProyectoMasObservaciones);
    
}

//UPDATE

const updateProgress = async () => {
    await ProgressModel.findOneAndUpdate(
        { project: '61948b680b42b0a964268d9b' },
        {
            fechaAvance: new Date('2023/01/01')
        }
    ).then((a) => {
        console.log('El avance fue actualizado. ', a);
        
    }). catch((e)=>{
        console.log('Error. El avance no pudo ser actualizado.', e);
        
    })
}

//DELETE
const deleteProgress = async () => {

    const avanceABorrar = await ProgressModel.findOne({descripcion:'Avance del proyecto'})

    await LeaderObservationModel.deleteMany({ avance: avanceABorrar.id }).then((o) => {
        console.log('Las observaciones del lider se borraron.', o);

    }).catch((e) => {
        console.log('No se pudieron borrar las observaciones del lider. ', e);

    })

    await ProgressModel.findOneAndDelete({project: '61948b680b42b0a964268d9b' }
    ).then((a)=>{
        console.log('El avance fue borrado. ', a);
        
    }).catch((e)=>{
        console.log('Error. El avance no pudo borrarse',e);
        
    })
}

export default {createProgress, readProgresss, updateProgress, deleteProgress}