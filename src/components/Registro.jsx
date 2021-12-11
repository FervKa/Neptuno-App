import React from "react";
import { useEffect } from 'react'
import { Link } from "react-router-dom";
import "../css/estilos.scss";
import logoNeptunoBordeado from '../images/logo-neptuno-bordeado.png';
import useFormData from "../hooks/useFormData";
import { useMutation } from '@apollo/client'
import { REGISTRO } from './graphql/auth/mutations'
import { toast } from "react-toastify";


export const Registro = () => {
    const { form, formData, updateFormData } = useFormData(null)

    const [Registro, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(REGISTRO);

    const submitForm = (e) => {
        e.preventDefault();
        console.log('fd', formData);
        Registro({
            variables: { ...formData }
        })
    }

    useEffect(() => {
        console.log('mutacion registro', mutationData);
        toast.success('Registro exitoso')
        if (mutationData) {
            if (mutationData.Registro.token) {
                localStorage.setItem('token', mutationData.Registro.token)
            }
        }
    }, [mutationData])

    useEffect(() => {
        if (!mutationError) {
            toast.error('Error al crear el usuario', mutationError)
        }
    }, [mutationError])


    return (
        <div className="contenedor-login abs-center">
            <div className="container">
                <div align="center">
                    <img className="img-fluid" src={logoNeptunoBordeado} alt="Logo Neptuno" width="100px" />
                </div>
                <p className="logotipo-naranja mb-3 fs-1">NEPTUNO</p>
                <p className="text-wrap texto-naranja">Sistema de Gestión de Proyectos de Investigación</p>
            </div>

            <form className='display-flex' ref={form} onSubmit={submitForm} onChange={updateFormData}>
                <input
                    required
                    placeholder="Identificación"
                    type="number"
                    min={0}
                    className="form-control w-75  mb-3"
                    id="identificacion"
                    name="identificacion"
                />
                <input
                    required
                    placeholder="Nombres"
                    type="text"
                    className="form-control w-75 mb-3"
                    id="nombres"
                    name="nombres"
                />
                <input
                    required
                    placeholder="Apellidos"
                    type="text"
                    className="form-control w-75  mb-3"
                    id="apellidos"
                    name="apellidos"
                />
                <input required
                    placeholder="Correo electrónico"
                    type="email"
                    className="mb-3 w-75 form-control"
                    id="correo"
                    name="correo"
                />
                <input
                    required
                    placeholder="Contraseña"
                    type="password"
                    className="form-control w-75 mb-3"
                    id="password"
                    name="password"
                />
                <select
                    id="rol"
                    name="rol"
                    className="form-select w-75 mb-3"
                    required
                >
                    <option value="">
                        Rol
                    </option>
                    <option value="ESTUDIANTE">Estudiante</option>
                    <option value="LIDER">Lider</option>
                    <option value="ADMINISTRADOR">Administrador</option>
                </select>
                <button disabled={Object.keys(formData).length === 0} type='submit' className="col botonNaranja btn w-75 mb-3">
                    Registrar
                </button>
            </form>
            <p className="texto-naranja" >¿Ya tienes cuenta? <Link to="/" > Ingresa</Link></p>
        </div>
    );
};
