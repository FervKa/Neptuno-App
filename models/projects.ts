import {Schema, model} from 'mongoose';
import {UserModel} from './users'
import {Enum_FaseProyecto, Enum_EstadoProyecto} from './enums'
import { ObjectiveModel } from './objective';


interface Project{
    codigo:string;
    nombre:string;
    /* objetivos:Schema.Types.ObjectId; */
    // objetivos:String;
    presupuesto:number;
    fechaInicio:Date;
    fechaTerminacion:Date;
    lider:Schema.Types.ObjectId;
    estado: Enum_EstadoProyecto;
    fase:Enum_FaseProyecto;
}


const projectSchema = new Schema<Project>({
    nombre:{
        type:String,
        required:true,
    },
    /* objetivos:[{
        type:Schema.Types.ObjectId,
        ref: ObjectiveModel}
    ], */
    /* objetivos:[{
        type:String,
        ref: ObjectiveModel}
    ], */
    presupuesto:{
        type:Number,
        required:true
    },
    fechaInicio:{
        type: Date,
        required: true
    },
    fechaTerminacion:{
        type: Date,
        required: true
    },
    lider:{
        type:Schema.Types.ObjectId,//relacion fuerte y directa papar tener en cuenta con la tabla de usuario
        require: true,
        ref:UserModel
    },
    estado:{
        type:String,
        enum: Enum_EstadoProyecto,
        required:true,
        default:Enum_EstadoProyecto.activo
    },
    fase:{
        type:String,
        enum: Enum_FaseProyecto,
        required:true,
        default: Enum_FaseProyecto.nulo
    }



})


//objeto el cual es la entidad que se comunica con mongoose
const ProjectModel = model('Project', projectSchema, 'proyectos') //El tercer parametro es el nombre que se le da a la coleccion en mongodb

export {ProjectModel} //exportarlo así restringe que al importarlo en otro archivo se pueda cambiar el nombre, obligando a usar uno solo
// export default UserModel;