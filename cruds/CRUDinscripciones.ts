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

const createApplication = async () => {

    await ApplicationModel.create({
        fechaIngreso: Date.now(),
        proyecto: '61948b680b42b0a964268d9b',
        estudiante: '619564b3f49fbe19bc79f65c',

    })
}

//READ
const readApplications = async () => {

    await ApplicationModel.find({ project: '61948b680b42b0a964268d9b' }).then((a) => {
        console.log('Las inscripciones al proyecto son ', a);

    }).catch((e) => {
        console.log('Error. No se pudieron consultar las inscripciones al proyecto. ', e);

    })
}

//UPDATE

const updateAplication = async () => {
    await ApplicationModel.findOneAndUpdate(
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
const deleteApplication = async () => {
    await ApplicationModel.findOneAndDelete({project: '61948b680b42b0a964268d9b' }
    ).then((a)=>{
        console.log('La inscripcion fue borrada. ', a);
        
    }).catch((e)=>{
        console.log('Error. La inscripcion no pudo borrarse',e);
        
    })
}

export default {createApplication, readApplications, updateAplication, deleteApplication}
