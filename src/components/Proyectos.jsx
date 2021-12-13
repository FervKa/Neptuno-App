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


    const cargarProyectos = () => {
        console.log('Lista de proyectos',data)
    }
  
    useEffect(() => {
        cargarProyectos()
    }, [])

    
    useEffect(() => {
        if (error){
            console.error('Error consultando los proyectos')
        }
    }, [error])


    return (
        <>
            <Navbar titulo='Proyectos' />
            {/* <MenuLateral /> */}
            {
            loading ?
            <Loader />
            :
            <div className='container'>
                <div className="row" style={{marginTop: "100px"}}>
                    <div className="col">
                        <h1 >Lista de Proyectos</h1>
                    </div>
                    <div className="col">
                        <Link to="/proyectoNuevo" className="btn btn-primary mb-3 d-flex ml-auto"> nuevo proyecto</Link>
                    </div>
                </div>
                 
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
                            <h6 className='mb-3'>Inicio: {p.fechaInicio}</h6>
                            <p className="card-text">Lider: {p.lider.nombres} {p.lider.apellidos}</p>
                            <p className="card-text">Estado: {p.estado}</p>
                            <p className="card-text">Fase: {p.fase}</p>
                            {/* <p className="card-text">Objetivos: {p.objetivos.length}</p>
                            <p className="card-text">Avances: {p.avances.length}</p> */}
                            <Link to={`/proyecto/${p._id}`} className="btn btn-primary me-2 mb-2">
                                Ver mas...
                            </Link>
                        </div>
                        <div className="card-footer d-flex justify-content-end">
                            <small className="text-muted">Presupuesto: ${p.presupuesto}</small>
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
