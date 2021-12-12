import { Navbar } from './Navbar';
import { MenuLateral } from './MenuLateral';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Loader } from './Loader.jsx';
import { useQuery } from '@apollo/client';
import { GET_PROYECTOS } from './graphql/proyectos/querys';
/* import { ToastContainer } from 'react-toastify'; */
/* import 'react-toastify/dist/ReactToas' */
/* import { toast } from 'react-toastify'; */

const Proyectos = () => {

    const { data, loading, error } = useQuery(GET_PROYECTOS);
  
    /* const cargarProyectos = () => {
        console.log(data)
    } */
  
    /* useEffect(() => {
        cargarProyectos()
    }, [data]) */

    
    useEffect(() => {
        if (error){
            console.error('Error consultando los proyectos')
        }
    }, [error])


    return (
        <>
            <Navbar titulo='Proyectos' />
            <MenuLateral />
            {
            loading ?
            <Loader />
            :
            <div className='container'>
                
                <h1 style={{marginTop: "100px"}}>Lista de Proyectos</h1>
                <hr /> <br />

                <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    data && data.leerProyectos.map((p) => (
                    <div className="col" key={p._id}>
                        <div className="card">
                        <div className="card-body">

                        <h4 className="card-title">
                            {p.nombre}
                            </h4>
                            <h6>Inicio: {p.fechaInicio}</h6>
                            <p className="card-text">Lider: {p.lider.nombres} {p.lider.apellidos}</p>
                            <p className="card-text">Estado: {p.estado}</p>
                            <Link to={`/proyectos/${p._id}`} className="btn btn-primary">
                                Ver mas...
                            </Link>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">${p.presupuesto}</small>
                        </div>
                        </div>
                    </div>
                    ))                 

                }

            </div>



          </div>}

        </>
    )
}

export default Proyectos
