import { UserModel } from '../models/users';
import { ProjectModel } from '../models/projects';
import { ObjectiveModel } from '../models/objectives';
import { ApplicationModel } from '../models/applications';
import { LeaderObservationModel } from '../models/leaderObservation';
import { ProgressModel } from '../models/progress';

import { Enum_RolUsario, Enum_EstadoUsuario } from '../models/enums';
import { Enum_EstadoProyecto, Enum_FaseProyecto } from '../models/enums';
import { Enum_TipoObjetivo } from '../models/enums';
import { Enum_EstadoInscripcion } from '../models/enums';

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
            fechaIngreso: new Date('2023/01/01')
        }
    ).then((a) => {
        console.log('La inscripcion fue actualizada. ', a);
        
    }). catch((e)=>{
        console.log('Error. La inscripcion no pudo ser actualizada.', e);
        
    })
}

//DELETE
const deleteProgress = async () => {
    await ProgressModel.findOneAndDelete({project: '61948b680b42b0a964268d9b' }
    ).then((a)=>{
        console.log('La inscripcion fue borrada. ', a);
        
    }).catch((e)=>{
        console.log('Error. La inscripcion no pudo borrarse',e);
        
    })
}

export default {createProgress, readProgresss, updateProgress, deleteProgress}