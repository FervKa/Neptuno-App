import { Schema, model } from 'mongoose';
import { UserModel } from './users';
import { ProgressModel } from './progress';

interface LeaderObservation {
    lider: Schema.Types.ObjectId;
    observacion: string;
    avance: Schema.Types.ObjectId,
}

const leaderObservationSchema = new Schema<LeaderObservation>({
    lider: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        require: true,
    },
    avance: {
        type: Schema.Types.ObjectId,
        ref: ProgressModel,
        require: true,
    },
    observacion: {
        type: String,
        require: true
    },

})

const LeaderObservationModel = model('Observation', leaderObservationSchema, 'observacioneslider')

export { LeaderObservationModel }