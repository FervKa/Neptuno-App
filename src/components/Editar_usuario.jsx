import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { MenuLateral } from './MenuLateral';
import { Navbar } from './Navbar';
import '../css/editar_usuario.scss'
import { GET_USUARIO } from './graphql/usuarios/querys';
import { useQuery } from '@apollo/client';
import Input from './Input';
import { useEffect } from 'react/cjs/react.development';


const Editar_usuario = () => {

    const { _id } = useParams();


    const { data, error, loading } = useQuery(GET_USUARIO, {
        variables: { _id },
    });

    useEffect(() => {
        console.log("dt", data);
    }, [data])


    return (
        <>
            <Navbar titulo={"Estás editando a: "} />
            {<div className='container cont_propio'>
                <form>
                    <div className="form-group row">
                        <label for="" className="col-5 col-form-label">Nombre:</label>
                        <div className="col-7">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="fa fa-male"></i>
                                    </div>
                                </div>
                                <input id="" name="" placeholder={data && data && data.leerUsuario.nombres} type="text" className="form-control" aria-describedby="HelpBlock"></input>
                            </div>
                            <span id="HelpBlock" className="form-text text-muted">Ingresa el nuevo nombre</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-5 col-form-label" for="">Apellidos:</label>
                        <div className="col-7">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="fa fa-angle-double-right"></i>
                                    </div>
                                </div>
                                <input id="" name="" placeholder={data && data.leerUsuario.apellidos} type="text" className="form-control" aria-describedby="HelpBlock"></input>
                            </div>
                            <span id="HelpBlock" className="form-text text-muted">Ingresa los nuevos apellidos</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="" className="col-5 col-form-label">Identificación:</label>
                        <div className="col-7">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="fa fa-address-card"></i>
                                    </div>
                                </div>
                                <input id="" name="" placeholder={data && data.leerUsuario.identificacion} type="number" className="form-control"></input>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="" className="col-5 col-form-label">Correo</label>
                        <div className="col-7">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="fa fa-internet-explorer"></i>
                                    </div>
                                </div>
                                <input id="" name="" placeholder={data && data.leerUsuario.correo} type="text" className="form-control"></input>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="offset-5 col-7">
                            <button name="submit" type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>}

            <MenuLateral />
        </>
    )
}

export default Editar_usuario;
