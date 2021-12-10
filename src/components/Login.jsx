import React from 'react';
import "../estilos/estilos.scss";
import logoNeptunoBordeado from '../images/logo-neptuno-bordeado.png';

export const Login = () => {
    return (
        
            <div className="contenedor-login abs-center" >
                <div align="center">
                    <img className="img-fluid" src={logoNeptunoBordeado} alt="Logo Neptuno" width="100px" />
                </div>
                <p className="logotipo-naranja mb-3 fs-1">NEPTUNO</p>
                <p className="text-wrap texto-naranja">Sistema de Gestión de Proyectos de Investigación</p>
                <form action="POST" className="display-flex" >
                    <input placeholder="Correo electrónico" className="w-75 form-control mb-3" type="text" />
                    <input placeholder="Contraseña" className="w-75 form-control mb-3" type="password" />
                    <button className="botonNaranja btn mb-3 w-75">Ingresar</button>
                </form>
                <div className="row w-75 mx-auto">
                    <p className="col texto-naranja">¿No tienes cuenta?   <a className="col" href="#">  Regístrate</a></p>                    

                </div>

            </div>

        
    )
}
