enum Enum_RolUsario{
    estudiante = 'ESTUDIANTE',
    lider = 'LIDER',
    administrador = 'ADMINISTRADOR'
}

enum Enum_EstadoUsuario{
    pendiente='PENDIENTE',
    autorizado='AUTORIZADO',
    noAutorizado='NO_AUTORIZADO'
}

enum Enum_EstadoProyecto{
    activo='ACTIVO',
    inactivo = 'INACTIVO'
}

enum Enum_FaseProyecto{
    iniciado='INICIADO',
    enDesarrollo='EN_DESARROLLO',
    terminado='TERMINADO',
    porDefinir='POR_DEFINIR'
}

enum Enum_TipoObjetivo{
    general='GENERAL',
    especifico='ESPECIFICO',
}

enum Enum_EstadoInscripcion{
    aceptada='ACEPTADA',
    rechazada='RECHAZADA',
    pendiente='PENDIENTE',
}

export {Enum_RolUsario,Enum_EstadoUsuario, Enum_FaseProyecto, Enum_EstadoProyecto, Enum_TipoObjetivo, Enum_EstadoInscripcion}