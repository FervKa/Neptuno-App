import React, {useEffect} from 'react';
import "../css/estilos.scss";
import logoNeptunoBordeado from '../images/logo-neptuno-bordeado.png';
import { User } from './User';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import useFormData from "../hooks/useFormData";
import { useMutation } from '@apollo/client'
import { LOGIN } from './graphql/auth/mutations'
import { useAuth } from '../context/authContext';

export const Login = () => {
    const {setToken} = useAuth()

    const { form, formData, updateFormData } = useFormData(null)

    const navigate = useNavigate();

    const [Ingreso, {data: mutationData, loading: mutationLoading, error: mutationError}]=useMutation(LOGIN)

    const submitForm =(e)=>{
        e.preventDefault();
        console.log("Formulario login ", formData);
        Ingreso({
            variables:{formData}
        })
    }

    useEffect(() => {
        console.log('mutacion de ingreso', mutationData);
        if(mutationData){
            if(mutationData.Ingreso.token){
                setToken(mutationData.Ingreso.token)
                navigate("/perfil")
            }
        }
    }, [mutationData, setToken, navigate])


    return <>
        <div className="contenedor-login abs-center" >
            <div align="center">
                <img className="img-fluid" src={logoNeptunoBordeado} alt="Logo Neptuno" width="100px" />
            </div>
            <p className="logotipo-naranja mb-3 fs-1">NEPTUNO</p>
            <p className="text-wrap texto-naranja">Sistema de Gestión de Proyectos de Investigación</p>
            <form ref={form} onSubmit={submitForm} onChange={updateFormData} className="display-flex" >
                <input required name='correo' placeholder="Correo electronico" className="w-75 form-control mb-3" type="text" />
                <input required name='password' placeholder="Contraseña" className="w-75 form-control mb-3" type="password" />
                <button disabled={Object.keys(formData).length === 0} type ='submit' className="botonNaranja btn mb-3 w-75">Ingresar</button>
            </form>
            <div className="row w-75 mx-auto">
                <p className="texto-naranja">¿No tienes cuenta? <Link to="/auth/registro"> Regístrate</Link></p>
                
            </div>
        </div>
    </>
}
