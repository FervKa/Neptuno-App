import {Schema, model, Schema} from 'mongoose';
import { Enum_TipoObjetivo } from './enums';

interface Objective{
    descripcion: Schema.Types.String;
    tipo: Enum_TipoObjetivo;
}

//La relacion con el proyecto se deja en la parte "Muchos" para tener coherencia con las otras relaciones del proyecto
const objectiveSchema = new Schema<Objective>{
    descripcion{
         type:Schema.Types.String,
         required:true,
         

    },
}