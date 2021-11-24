import { Schema, model } from 'mongoose';
import { UserModel } from '../usuarios/users';
import { ProjectModel } from '../proyectos/projects';
// import { LeaderObservationModel } from './leaderObservation';

interface Progress {
    fechaAvance: Date;
    descripcion: string;
    estudiante: Schema.Types.ObjectId;
    proyecto: Schema.Types.ObjectId;
    // observacionLider: Schema.Types.ObjectId;
}

const progressSchema = new Schema<Progress>({
    descripcion: {
        type: String,
        require: true,
    },
    estudiante: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        require: true,
    },
    fechaAvance: {
        type: Date,
        require: true,
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: ProjectModel,
    },
    /* observacionLider: {
        type: Schema.Types.ObjectId,
        default: null,
        ref: LeaderObservationModel,
    }, */

})

const ProgressModel = model('Progress', progressSchema, 'avances')

export { ProgressModel }