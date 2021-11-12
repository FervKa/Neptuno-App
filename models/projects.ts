import {Schema, model} from 'mongoose';
import {UserModel} from './users'
import {Enum_FaseProyecto, Enum_EstadoProyecto} from './enums'


interface Project{
    codigo:string;
    nombre:string;
    objetivos:string;
    presupuesto:Number;
    fechaInicio:Date;
    fechaTerminacion:Date;
    lider:UserModel;
    estado: Enum_EstadoProyecto;
    fase:Enum_FaseProyecto;

}


const projectSchema = new Schema<Project>({
    nombre:{
        type:String,
        required:true,
    },
    objetivos:{
        type:Objetivo,
        required:true,        
    },
    presupuesto:{
        type:Number,

    }



})