import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { MenuLateral } from './MenuLateral';
import { Navbar } from './Navbar';
import '../css/editar_usuario.scss'
import { GET_USUARIO } from './graphql/usuarios/querys';
import { useQuery, useMutation } from '@apollo/client';
import Input from './Input';
import { useEffect } from 'react/cjs/react.development';
import ButtonLoading from './ButtonLoading';
import useFormData from '../hooks/useFormData';
import { EDITAR_USUARIO } from './graphql/usuarios/mutations';



const Editar_usuario = () => {

    const { _id } = useParams();

    const { form, formData, updateFormData } = useFormData(null);

    const { data: querdyData, error: queryError, loading: queryLoading } = useQuery(GET_USUARIO, {
        variables: { _id },
    });

    const [editarUsuario, { data: mutationData, error: mutationEror, loading: mutationLoading }] = useMutation(EDITAR_USUARIO);


    useEffect(() => {
        console.log("dt", querdyData);
    }, [querdyData])

    useEffect(() => {
        console.log('mutacion edicion', mutationData);
    }, [mutationData])

    const submitForm = (e) => {
        e.preventDefault();
        console.log('fd', formData);
        editarUsuario({
            variables: { _id, ...formData }
        })
    }


    return (
        <>
            <Navbar titulo={"Estás editando a: "} />
            <div className="container pt-1 cont_propio">

                <div className="col">
                    <form
                        onSubmit={submitForm}
                        onChange={updateFormData}
                        ref={form}
                    >
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label  npcolor">Nombre:*</label>
                            <input
                                required={false}
                                type='text'
                                name="nombre"
                                className='form-control'
                                defaultValue={querdyData && querdyData.leerUsuario.nombres}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="apellido" className="form-label  npcolor">Apellidos:*</label>
                            <input
                                required={false}
                                type='text'
                                name="apellidos"
                                className='form-control'
                                defaultValue={querdyData && querdyData.leerUsuario.apellidos}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rol" className="form-label  npcolor" >Rol</label>
                            <select className="form-select" aria-label="Default select example" required='true' name="rol">
                                <option >Seleccione</option>
                                <option value="ESTUDIANTE">Estudiante</option>
                                <option value="LIDER">Lider</option>
                                <option value="ADMINISTRADOR">Administrador</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label  npcolor">Email</label>
                            <input
                                required={false}
                                type='text'
                                name="email"
                                className='form-control'
                                defaultValue={querdyData && querdyData.leerUsuario.correo}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="facebook2" className="form-label  npcolor">Identificacion: </label>
                            <div className="container p-0">
                                <div className="row">
                                    <div className="col-9 ">
                                        <input
                                            required={false}
                                            type='text'
                                            name="identificacion"
                                            className='form-control'
                                            defaultValue={querdyData && querdyData.leerUsuario.identificacion}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exalinkedin2" className="form-label  npcolor">Contraseña</label>
                            <div className="container p-0">
                                <div className="row">
                                    <div className="col-9 ">
                                        <input
                                            required={false}
                                            type='password'
                                            /* name="contrasena" */
                                            className='form-control'
                                            defaultValue={null}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="instagram2" className="form-label  npcolor">Repita la contraseña:</label>
                            <div className="container p-0">
                                <div className="row">
                                    <div className="col-9 ">
                                        <input
                                            required={false}
                                            type='password'
                                            /* name="contra_repetida" */
                                            className='form-control'
                                            defaultValue={null}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rol" className="form-label  npcolor" >Estado</label>
                            <select className="form-select" aria-label="Default select example" required='true' name="estado">
                                <option value='' >Seleccione</option>
                                <option value="PENDIENTE">Pendiente</option>
                                <option value="AUTORIZADO">Autorizado</option>
                                <option value="NO_AUTORIZADO">No autorizado</option>
                            </select>
                        </div>
                        <div className="row tamano_row">
                            <div className="d-grid gap-2 col-6 mx-auto pb-3 botun">
                                {/* <ButtonLoading
                                    disabled={null}
                                    loading={null}
                                    text='Actualizar Usuario'
                                    onSubmit={submitForm}
                                /> */}
                                <div className="d-grid gap-2 col-6 mx-auto pb-3">
                                    <button onClick={submitForm} className="btn btn-warning  isI" type="button">Actualizar Perfil</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <MenuLateral />
        </>
    )
}

export default Editar_usuario;
