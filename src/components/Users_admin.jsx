import React, { useEffect } from 'react';
import { MenuLateral } from './MenuLateral';
import '../css/tabla_usuarios.scss';
import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from './graphql/usuarios/querys';


const User_admin = () => {
    const { data, loading, error } = useQuery(GET_USUARIOS);

    useEffect(() => {
        console.log("data servidor", data)
    }, [data])

    return (
        <>
            <div>

                <div className='tabla_usuarios estilo_propioxd'>
                    TODOS LOS USUARIOS

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Identificación</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Rol</th>
                            </tr>
                        </thead>
                        {<tbody>
                            {data && data.leerUsuarios.map((u)=>{
                                return (
                                    <tr key={u._id}>
                                        <td>{u._id}</td>
                                        <td>{u.nombres}</td>
                                        <td>{u.apellidos}</td>
                                        <td>{u.identificacion}</td>
                                        <td>{u.correo}</td>
                                        <td>{u.estado}</td>
                                        <td>{u.rol}</td>
                                    </tr>
                                )
                            })}
                        </tbody>}
                    </table>
                </div>
                <div>
                    <MenuLateral />
                </div>
            </div>
        </>
    )
}

export default User_admin
