import { gql } from 'apollo-server-express';

const tiposEnums = gql`
    scalar Date

    enum Enum_RolUsario{# GraphQL recomienda que los enumeradores se escriban en mayusculas. Estos tambien se cambiaron en los enumeradores de mongoose (archivo enums.ts)
        ESTUDIANTE
        LIDER
        ADMINISTRADOR
    }

    enum Enum_EstadoUsuario{
        PENDIENTE
        AUTORIZADO
        NO_AUTORIZADO
    }   
    
    enum Enum_EstadoProyecto{
        ACTIVO
        INACTIVO
    }

    enum Enum_FaseProyecto{
        INICIADO
        EN_DESARROLLO
        TERMINADO
        POR_DEFINIR
    }

    enum Enum_TipoObjetivo{
        GENERAL
        ESPECIFICO
    }

    enum Enum_EstadoInscripcion{
        ACEPTADA
        RECHAZADA
        PENDIENTE
    }
    
`;

export { tiposEnums }