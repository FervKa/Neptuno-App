import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Loader } from './Loader';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PROYECTO } from './graphql/proyectos/querys';
import { Navbar } from './Navbar';
import { MenuLateral } from './MenuLateral';

export const Proyecto = () => {
    const { _id  } = useParams()

    const { data, error, loading } = useQuery(GET_PROYECTO, {variables: { _id },
    });

    /* const cargarProyecto = () => {
        console.log(data)
    } */

    /* useEffect(() => {
        cargarProyecto()
    }, [data]) */

  return (
    <>    
            {
                loading ?
                <Loader />
                :
                <>
                <div className="container" style={{marginTop: "100px"}}>
                    <MenuLateral />
                    <Navbar titulo={data.leerProyecto.nombre} />
                    <div className="row">
                        {<div className="col">
                            <div className="card">
                                <div className="card-body">

                                    <h4 className="card-title">
                                        {data.leerProyecto.nombre}
                                        </h4>
                                        <h6>Inicio: {data.leerProyecto.fechaInicio}</h6>
                                        <p className="card-text">Lider: {data.leerProyecto.lider.nombres} {data.leerProyecto.lider.apellidos}</p>
                                        <p className="card-text">Estado: {data.leerProyecto.estado}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">${data.leerProyecto.presupuesto}</small>
                                </div>
                            </div>
                        </div>}
                    </div>

                    <Link to="/proyectos" className="btn btn-primary" >regresar</Link>
                </div>
          </>}
    </>
  )
}

