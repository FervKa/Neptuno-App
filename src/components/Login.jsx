import React from 'react';
import "../css/estilos.scss";
import logoNeptunoBordeado from '../images/logo-neptuno-bordeado.png';
import { User } from './User';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


export const Login = () => {

    const navigate = useNavigate();

    const handleUser = () => {
        navigate('/perfil')
    }

    const submitForm =()=>{
        console.log("Carga del ingreso");
    }


    return <>
        <div className="contenedor-login abs-center" >
            <div align="center">
                <img className="img-fluid" src={logoNeptunoBordeado} alt="Logo Neptuno" width="100px" />
            </div>
            <p className="logotipo-naranja mb-3 fs-1">NEPTUNO</p>
            <p className="text-wrap texto-naranja">Sistema de Gestión de Proyectos de Investigación</p>
            <form onSubmit={submitForm} action="POST" className="display-flex" >
                <input required placeholder="Correo electronico" className="w-75 form-control mb-3" type="text" />
                <input required placeholder="Contraseña" className="w-75 form-control mb-3" type="password" />
                <button type ='submit' onClick={handleUser} className="botonNaranja btn mb-3 w-75">Ingresar</button>
            </form>
            <div className="row w-75 mx-auto">
                <p className="texto-naranja">¿No tienes cuenta? <Link to="/registro"> Regístrate</Link></p>
                
            </div>
        </div>
    </>
}
