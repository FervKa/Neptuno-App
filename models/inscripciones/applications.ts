import { Schema, model } from 'mongoose';
import { UserModel } from '../users';
import { ProjectModel } from '../proyectos/projects';
import { Enum_EstadoInscripcion } from '../enums';

interface Applications {
    estado: Enum_EstadoInscripcion;
    fechaIngreso: Date;
    fechaEgreso: Date;
    proyecto: Schema.Types.ObjectId;
    estudiante: Schema.Types.ObjectId;
}

const applicationSchema = new Schema<Applications>({
    estado: {
        type: String,
        enum: Enum_EstadoInscripcion,
        default: Enum_EstadoInscripcion.nulo,
    },
    fechaIngreso: {
        type: Date,
        required: true,
    },
    fechaEgreso: {
        type: Date,
        default: null
    },
    estudiante: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        required: true,
    },

})

const ApplicationModel = model('Application', applicationSchema, 'inscripciones')

export { ApplicationModel }