import React, { useState, useEffect } from 'react'
import '../css/menuLateral.scss'

import { useUser } from '../context/userContext';
import { MenuLateralAdmin } from './MenuLateralAdmin';
import { MenuLateralEstudiante } from './MenuLateralEstudiante'


export const MenuLateral = () => {

    const { userData } = useUser()

    const data = userData.rol;
    if (data === "ADMINISTRADOR") {
        return <MenuLateralAdmin />
    } else {
        return <MenuLateralEstudiante />
    }

    return (<>

    </>
    )
}

