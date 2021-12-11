import React from "react";
import { useRef } from 'react'
import { Link } from "react-router-dom";
import "../css/estilos.scss";
import logoNeptunoBordeado from '../images/logo-neptuno-bordeado.png';

export const Registro = () => {
    const form = useRef(null);
    const submitForm = (e) => {
        e.preventDefault();
        const infoFormulario = new FormData(form.current)
        infoFormulario.forEach((val, el) => {
            console.log(val, el);
        })
        console.log("Valores del formulario", infoFormulario);
        console.log("Valores del formulario", form.current);
    }


    return (
        <>

            <div className="contenedor-login abs-center">
                <div className="container">
                    <div align="center">
                        <img className="img-fluid" src={logoNeptunoBordeado} alt="Logo Neptuno" width="100px" />
                    </div>
                    <p className="logotipo-naranja mb-3 fs-1">NEPTUNO</p>
                    <p className="text-wrap texto-naranja">Sistema de Gestión de Proyectos de Investigación</p>
                </div>

                <div className="container" align='center'>
                    <div className="col border-3">
                        <form ref={form} onSubmit={submitForm}>
                            <input
                                required
                                placeholder="Nombre"
                                type="text"
                                className="form-control isI  w-75 mb-3"
                                id="nombres"
                            />
                            <input
                                required
                                placeholder="Apellido"
                                type="text"
                                className="form-control isI w-75  mb-3"
                                id="apellidos"
                            />
                            <input
                                required
                                placeholder="Identificación"
                                type="number"
                                min={0}
                                className="form-control isI w-75  mb-3"
                                id="identificacion"
                            />
                            <select
                                id="rol"
                                className="form-select w-75 mb-3"
                                required
                            >
                                <option disabled selected value="">
                                    Rol
                                </option>
                                <option value="ESTUDIANTE">Estudiante</option>
                                <option value="LIDER">Lider</option>
                                <option value="ADMINISTRADOR">Administrador</option>
                            </select>
                            <input required
                                placeholder="Correo electrónico"
                                type="email"
                                className="mb-3 w-75 form-control"
                                id="correo" />
                            <input
                                required
                                placeholder="Contraseña"
                                type="password"
                                className="form-control w-75 mb-3"
                                id="password"
                            />
                            <button type='submit' className="col botonNaranja btn w-75 isI mb-3">
                                Registrar
                            </button>
                        </form>
                        <p className="texto-naranja" >¿Ya tienes cuenta? <Link to="/" > Ingresa</Link></p>
                    </div>
                </div>
            </div>

        </>
    );
};
