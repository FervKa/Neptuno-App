import React from 'react';
import "../css/estilos.scss";
import logoNeptunoBordeado from '../images/logo-neptuno-bordeado.png';

export const Login = () => {
    return (
        
            <div className="contenedor-login abs-center" >
                <div align="center">
                    <img className="img-fluid" src={logoNeptunoBordeado} alt="Logo Neptuno" width="100px" />
                </div>
                <p className="logotipo-neptuno">NEPTUNO</p>
                <form action="POST" className="display-flex" >
                    <input placeholder="Correo electronico" className="form-control" type="text" />
                    <input placeholder="Contraseña" className="form-control" type="text" />
                    <button className="botonNaranja btn">Ingresar</button>
                </form>

            </div>

        
    )
}
