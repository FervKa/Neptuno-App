import { ProjectModel } from "./projects";
import { ObjectiveModel } from './objectives';


const resolversProyecto = {

    Query: {
        leerProyectos: async (parent, args) => {
            const proyectos = await ProjectModel.find().populate('lider')
            return proyectos
        },

        leerProyecto: async (parent, args) => {

            if (Object.keys(args).includes("nombre")) {
                const proyectoBuscado = await ProjectModel.findOne({ nombre: args.nombre }).populate('lider')
                const objetivosProyectoBuscado = await ObjectiveModel.find({ proyecto: proyectoBuscado.id })
                const proyectoBuscadoMasObjetivos = {proyectoBuscado, objetivos: objetivosProyectoBuscado}
                return proyectoBuscadoMasObjetivos
                console.log(proyectoBuscadoMasObjetivos)
            } else if (Object.keys(args).includes("_id")){
                const proyectoBuscado = await ProjectModel.findOne({_id:args._id}).populate('lider')
                const objetivosProyectoBuscado = await ObjectiveModel.find({ proyecto: proyectoBuscado.id })
                const proyectoBuscadoMasObjetivos = {proyectoBuscado, objetivos: objetivosProyectoBuscado}
                return proyectoBuscadoMasObjetivos
                console.log(proyectoBuscadoMasObjetivos)
            }
        }
    }
}

export {resolversProyecto}