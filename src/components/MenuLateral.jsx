import React, { useState, useEffect } from 'react'
import '../css/menuLateral.scss'

import { useUser } from '../context/userContext';
import { MenuLateralAdmin } from './MenuLateralAdmin';
import { MenuLateralEstudiante } from './MenuLateralEstudiante'
import { MenuLateralLider } from './MenuLateralLider'

export const MenuLateral = () => {

    const { userData } = useUser()

    const data = userData.rol;
    if (data === "ADMINISTRADOR") {
        return <MenuLateralAdmin />
    } else if (data === "ESTUDIANTE") {
        return <MenuLateralEstudiante />
    }
    else {
        return <MenuLateralLider/>
    }

    return (<>

    </>
    )
}

