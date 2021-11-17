enum Enum_RolUsario{
    estudiante = 'Estudiante',
    lider = 'Líder',
    administrador = 'Administrador'
}

enum Enum_EstadoUsuario{
    pendiente='Pendiente',
    autorizado='Autorizado',
    noAutorizado='No autorizado'
}

enum Enum_EstadoProyecto{
    activo='Activo',
    inactivo = 'Inactivo'
}

enum Enum_FaseProyecto{
    iniciado='Iniciado',
    enDesarrollo='En desarrollo',
    terminado='Terminado',
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