import React from "react";
import { NavLink } from "react-router-dom";
import "../css/estilos.scss";
import logoNeptunoBordeado from '../images/logo-neptuno-bordeado.png';

export const Registro = () => {

    const submitForm = (e) => {
        e.preventDefault();
    }


    return (
        <>
            <div className="container" style={{ maxWidth: "700px" }}>
                <div className="contenedor-login abs-center">

                    <div className="container">

                        <div align="center">
                            <img className="img-fluid" src={logoNeptunoBordeado} alt="Logo Neptuno" width="100px" />
                        </div>
                        <p className="logotipo-naranja mb-3 fs-1">NEPTUNO</p>
                        <p className="text-wrap texto-naranja">Registrar Usuario</p>

                    </div>

                    <div className="container">
                        <div className="col border-3">
                            <form action="POST" onSubmit={submitForm}>
                                <input
                                    required
                                    placeholder="Nombre"
                                    type="text"
                                    className="form-control isI mb-3"
                                    id="nombres"
                                    aria-describedby="nameHelp"
                                />
                                <input
                                    required
                                    placeholder="Apellido"
                                    type="lastname"
                                    className="form-control isI mb-3"
                                    id="apellidos"
                                    aria-describedby="nameHelp"
                                    required
                                />
                                <input
                                    required
                                    placeholder="Identificación"
                                    type="number"
                                    className="form-control isI mb-3"
                                    id="identificacion"
                                    aria-describedby="nameHelp"
                                    required
                                />
                                <select
                                    id="rol"
                                    className="form-select mb-3"
                                    aria-label="Default select example"
                                    required
                                >
                                    <option disabled selected value="">
                                        Rol
                                    </option>
                                    <option value="1">Estudiante</option>
                                    <option value="2">Lider</option>
                                    <option value="3">Administrador</option>
                                </select>
                                <input required placeholder="Correo electrónico" type="email" className="mb-3 form-control" id="correo" aria-describedby="emailHelp" />
                                <input
                                    required
                                    placeholder="Contraseña"
                                    type="password"
                                    className="form-control mb-3"
                                    id="password"
                                    aria-describedby="passlHelp"
                                />
                                <div className="row text-center pb-3">
                                    <div className="col">
                                        <button type='submit' className="botonNaranja btn w-100 isI">
                                            Registrar
                                        </button>
                                    </div>
                                    <NavLink to="/" className="col">
                                        <button className="btn btn-dark w-100 isI" type="button">
                                            Cancelar
                                        </button>
                                    </NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
