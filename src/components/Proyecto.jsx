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
    let objetivosProyecto = []
    
    const cargarProyecto = () => { 
        loading ? console.log("prueba"): objetivosProyecto= data.leerProyecto.objetivos
        console.log(objetivosProyecto);
    }

    useEffect(() => {
        cargarProyecto()
    }, [data])

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

                    <br />

                    <div className="row">

                        <div className="col">
                        
                            {
                                objetivosProyecto.map((o) => (
                                <div className="col" key={o._id}>
                                    <div className="card">
                                    <div className="card-body">

                                    <h4 className="card-title">
                                        Objetivos
                                        tipo: {o.tipo}
                                        </h4>
                                        {/* <h6>Inicio: {p.fechaInicio}</h6>
                                        <p className="card-text">Lider: {p.lider.nombres} {p.lider.apellidos}</p>
                                        <p className="card-text">Estado: {p.estado}</p> */}
                                    </div>
                                    <div className="card-footer">
                                       {/*  <small className="text-muted">${p.presupuesto}</small> */}
                                    </div>
                                    </div>
                                </div>
                                )) }
                        </div>

                        <div className="col">
                        <div className="card">
                                <div className="card-body">

                                    <h4 className="card-title">
                                        Avances
                                        </h4>
                                        <h6>tipo: {data.leerProyecto.avances.fechaAvance}</h6>
                                       {/*  <p className="card-text">Descripcion: {data.leerProyecto.avance.descripcion} </p> */}
                                        
                                </div>
                                <div className="card-footer">
                                    {/* <small className="text-muted">{data.leerProyecto.avance._id}</small> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link to="/proyectos" className="btn btn-primary" >regresar</Link>
                </div>
          </>}
    </>
  )
}

