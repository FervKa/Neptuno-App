import { ProjectModel } from "./projects";
import { ObjectiveModel } from "./objectives";

const resolversProyecto = {
    Query: {
        leerProyectos: async (parent, args) => {
            const proyectos = await ProjectModel.find().populate("lider");
            return proyectos;
        },

        leerProyecto: async (parent, args) => {
            if (Object.keys(args).includes("nombre")) {
                const proyectoBuscado = await ProjectModel.findOne({
                    nombre: args.nombre,
                }).populate("lider");
                const objetivosProyectoBuscado = await ObjectiveModel.find({
                    proyecto: args._id,
                });
                proyectoBuscado["objetivos"] = objetivosProyectoBuscado;
                return proyectoBuscado;
            } else if (Object.keys(args).includes("_id")) {
                const proyectoBuscado = await ProjectModel.findOne({
                    _id: args._id,
                }).populate("lider");
                const objetivosProyectoBuscado = await ObjectiveModel.find({
                    proyecto: args._id,
                });
                proyectoBuscado["objetivos"] = objetivosProyectoBuscado;
                return proyectoBuscado;
            }
        },
    },

    Mutation: {
        crearObjetivo: async (parent, args) => {
            const objetivo = await ObjectiveModel.create({
                descripcion: args.descripcion,
                tipo: args.tipo,
                proyecto: args.proyecto,
            });
            return objetivo;
        },
        crearProyecto: async (parent, args) => {
            const proyecto = await ProjectModel.create({
                nombre: args.nombre,
                presupuesto: args.presupuesto,
                fechaInicio: args.fechaInicio,
                fechaTerminacion: args.fechaTerminacion,
                lider: args.usuario,
            });
            return proyecto;
        },
    },
};

export { resolversProyecto };
