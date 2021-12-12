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
            <Navbar />
            {<div className='container cont_propio'>
                <div>

                    USUARIO {_id}

                    <h1>
                        {data && data.leerUsuario.nombres}
                    </h1>
                    <h1>
                        {data && data.leerUsuario._id}
                    </h1>
                    <h1>
                        {data && data.leerUsuario.apellidos}
                    </h1>
                </div>
            </div>}

            <MenuLateral />
        </>
    )
}

export default Editar_usuario;
