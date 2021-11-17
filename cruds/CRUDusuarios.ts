import { UserModel } from '../models/users';
// import { ProjectModel } from '../models/projects';
// import { ObjectiveModel } from '../models/objectives';
// import { ApplicationModel } from '../models/applications';
// import { LeaderObservationModel } from '../models/leaderObservation';
// import { ProgressModel } from '../models/progress';

import { Enum_RolUsario, Enum_EstadoUsuario } from '../models/enums';
// import { Enum_EstadoProyecto, Enum_FaseProyecto } from '../models/enums';
// import { Enum_TipoObjetivo } from '../models/enums';
// import { Enum_EstadoInscripcion } from '../models/enums';

//CREATE
const createUser = async () => {
    await UserModel.create({
        nombre: "Lider_Nombre",
        apellido: "Lider_Apellido",
        correo: "lider@lider.com",
        identificacion: "12345",
        estado: Enum_EstadoUsuario.autorizado,
        rol: Enum_RolUsario.lider,
    }).then(u => {
        console.log("Lider creado", u)
    }).catch((e) => {
        console.log("Error al crear el lider", e);

    })

    await UserModel.create({
        nombre: "Estudiante_Nombre",
        apellido: "Estudiante_Apellido",
        correo: "estudiante@estudiante.com",
        identificacion: "67890",
        rol: Enum_RolUsario.estudiante,
    }).then(u => {
        console.log("Estudiante creado", u)
    }).catch((e) => {
        console.log("Error al crear el estudiante", e);

    })

    await UserModel.create({
        nombre: "Pepito",
        apellido: "Perez",
        correo: "pepito.perez@estudiante.com",
        identificacion: "28645",
        rol: Enum_RolUsario.estudiante,
    }).then(u => {
        console.log("Estudiante creado", u)
    }).catch((e) => {
        console.log("Error al crear el estudiante", e);

    })

    await UserModel.create({
        nombre: "Administrador_Nombre",
        apellido: "Administrador_Apellido",
        correo: "administrador@administrador.com",
        identificacion: "54321",
        estado: Enum_EstadoUsuario.autorizado,
        rol: Enum_RolUsario.administrador,
    }).then(u => {
        console.log("Administrador creado", u)
    }).catch((e) => {
        console.log("Error al crear el administrador", e);

    })
}

//READ
const readUsers = async () => {
    const allUsers = await UserModel.find().then((u) => {
        console.log("Todos lo usuarios son: ", u);
    }).catch((e) => {
        console.error('Error obteniendo los usuarios', e)
    });
    return allUsers
}

/* const readOneUser = async (campo='identificacion', valor='67890') => {
    const user = await UserModel.findOne({campo:`${valor}`})
    .then((u)=>{
        console.log('El usuario buscado por el campo: ', campo, `= ${valor} es: `, u);        
    }).catch((e)=>{
        console.log('El usuario no pudo ser encontrado');        
    });
    return user
} */

const readOneUser = async () => {
    const user = await UserModel.findOne({ identificacion: `28645` })
        .then((u) => {
            console.log('El usuario buscado es: ', u);
        }).catch((e) => {
            console.log('El usuario no pudo ser encontrado');
        });
    return user
}

//UPDATE
const updateUser = async () => {

    return await UserModel.findOneAndUpdate(
        { identificacion: '28645' },
        {
            nombre: 'Sutano',
            apellido: 'Mengano'
        }
    ).then((u) => {
        console.log("Usuario actualizado", u);
    }).catch((e) => {
        console.log("Error actualizando el usuario", e);

    })
}

//DELETE
const deleteUser = async () => {

    await UserModel.findOneAndDelete(
        { identificacion: '28645' }
    ).then((u) => {
        console.log("Usuario eliminado", u);
    }).catch((e) => {
        console.log("Error eliminando el usuario", e);

    })
}


export default { createUser, readUsers, readOneUser, updateUser, deleteUser }