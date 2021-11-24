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
    nulo=''
}

enum Enum_TipoObjetivo{
    general='General',
    especifico='Específico',
}

enum Enum_EstadoInscripcion{
    aceptada='Aceptada',
    rechazada='Rechazada',
    nulo='',
}

export {Enum_RolUsario,Enum_EstadoUsuario, Enum_FaseProyecto, Enum_EstadoProyecto, Enum_TipoObjetivo, Enum_EstadoInscripcion}