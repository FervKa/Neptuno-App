import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Loader } from './Loader';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PROYECTO } from './graphql/proyectos/querys';
import { Navbar } from './Navbar';
import { MenuLateral } from './MenuLateral';
import { useState } from 'react';

export const Proyecto = () => {
    const { _id  } = useParams()

    const { data, error, loading } = useQuery(GET_PROYECTO, {variables: { _id },
    });

    //const [objetivosProyecto, setObjetivosProyecto] = useState([])
    /* let objetivosProyecto = []
    let avancesProyecto = []
    
    const cargarProyecto = () => { 
        loading ? console.log("prueba"): objetivosProyecto= data.leerProyecto.objetivos
        loading ? console.log("prueba"): avancesProyecto= data.leerProyecto.avances
        console.log(objetivosProyecto.length);
        console.log(avancesProyecto);
    }

    useEffect(() => {
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
                    {/* <MenuLateral /> */}
                    <Navbar titulo={data.leerProyecto.nombre} />
                    <div className="row">
                        {<div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">{data.leerProyecto.nombre}</h4>
                                    <h6>Inicio: {data.leerProyecto.fechaInicio}</h6>
                                    <p className="card-text">Lider: {data.leerProyecto.lider.nombres} {data.leerProyecto.lider.apellidos}</p>
                                    <p className="card-text">Estado: {data.leerProyecto.estado}</p>
                                    <p className="card-text">Objetivos: {data.leerProyecto.objetivos.length}</p>
                                    <p className="card-text">Avances: {data.leerProyecto.avances.length}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">${data.leerProyecto.presupuesto}</small>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <br />

                    {/* <h4 className="card-title">Objetivos</h4> */}

                    <div className="row">
                        <div className="col">
                            { data && data.leerProyecto.objetivos.map((o) => (
                                <div className="col" key={o._id}>
                                    <div className="card">
                                    <div className="card-body">
                                        <h6>OBJETIVO {o.tipo} </h6>
                                        <p className="card-text">{o.descripcion}</p>
                                        {/* <p className="card-text">Estado: {p.estado}</p> */}
                                    </div>

                                    </div>
                                </div>
                                )) }
                        </div>

                        <div className="col">
                            { data && data.leerProyecto.avances.map((a) => (
                                <div className="col" key={a._id}>
                                    <div className="card">
                                    <div className="card-body">
                                        <h6>Avance </h6>
                                        <p className="card-text">{a.descripcion}</p>
                                        {/* <p className="card-text">Estado: {p.estado}</p> */}
                                    </div>
                                    
                                    </div>
                                </div>
                                )) }
                        </div>

                        
                    </div>
                    
                    <br />
                    <Link to="/proyectos" className="btn btn-primary" >regresar</Link>
                </div>
          </>}
    </>
  )
}

