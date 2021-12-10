import React from "react";
import { NavLink } from "react-router-dom";
import "../css/estilos.scss";
import logoNeptunoBordeado from '../images/logo-neptuno-bordeado.png';

export const Registro = () => {
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
                            <form action="POST">
                                <input
                                    required
                                    placeholder="Nombre"
                                    type="text"
                                    className="form-control isI mb-3"
                                    id="nombre"
                                    aria-describedby="nameHelp"
                                />
                                <input
                                    required
                                    placeholder="Apellido"
                                    type="lastname"
                                    className="form-control isI mb-3"
                                    id="apellido"
                                    aria-describedby="nameHelp"
                                    required
                                />
                                <input
                                    required
                                    placeholder="Identificación"
                                    type="number"
                                    className="form-control isI mb-3"
                                    id="ident"
                                    aria-describedby="nameHelp"
                                    required
                                />
                                <select
                                    className="form-select mb-3"
                                    aria-label="Default select example"
                                >
                                    <option disabled selected defaultValue>
                                        Rol
                                    </option>
                                    <option value="1">Estudiante</option>
                                    <option value="2">Lider</option>
                                    <option value="3">Administrador</option>
                                </select>
                                <input placeholder="Correo electrónico" type="email" className="mb-3 form-control" id="Email" aria-describedby="emailHelp" />
                                <input
                                    placeholder="Contraseña"
                                    type="password"
                                    className="form-control mb-3"
                                    id="Password"
                                    aria-describedby="passlHelp"
                                />
                                <div className="row text-center pb-3">
                                    <div className="col">
                                        <button className="botonNaranja btn w-100 isI" type="button">
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
