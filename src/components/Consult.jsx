import React from 'react';
import { MenuLateral } from './MenuLateral';
import '../css/tabla_usuarios.scss';

const Consult = () => {
    return (
        <>
            <div>

                <div className='tabla_usuarios'>
                    TODOS LOS USUARIOS
                </div>
                <div>
                    <MenuLateral />
                </div>
            </div>
        </>
    )
}

export default Consult
