import { Navbar } from './Navbar';
import { MenuLateral } from './MenuLateral';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Loader } from './Loader.jsx';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PROYECTOS } from './graphql/proyectos/querys';
import { CREAR_INSCRIPCION } from './graphql/proyectos/mutations';
import { useUser } from '../context/userContext';

const Proyectos = () => {

    const { data, loading, error } = useQuery(GET_PROYECTOS);

    const [crearInscripcion, { data: mutationDataI, error: mutationErorI, loading: mutationLoadingI }] = useMutation(CREAR_INSCRIPCION);

    const [idProyecto, setIdProyecto]=useState()

    const { userData } = useUser()

    const cargarProyectos = () => {
        console.log('Lista de proyectos',data)
    }

    const generarInscripcion = () =>{
        //console.log("proyecto: "+ idProyecto);
        //console.log("estudiante: " + userData._id)

        crearInscripcion({
            variables: { proyecto: idProyecto, estudiante: userData._id }
        }) 
        console.log("Inscripcion correcto: ", mutationDataI)

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
                        <Link to="/proyectoNuevo" className="btn btn-warning  isI mb-3 d-flex ml-auto"> nuevo proyecto</Link>
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
                            <Link to={`/proyecto/${p._id}`} className="btn btn-warning  isI me-2 mb-2">
                                Ver mas...
                            </Link>
                            <button className="btn btn-warning  isI me-2 mb-2" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#modalInsc"
                                    onClick={()=>setIdProyecto(p._id)}> 
                                Inscribirme
                            </button>
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

        {/* Modal solicitar inscripción */}

        <div className="modal fade" id="modalInsc" tabindex="-1" aria-labelledby="modalInscLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalInscLabel">Inscripción</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Esta seguro de postular la inscripción a este proyecto
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button onClick={generarInscripcion} type="button" className="btn btn-primary" data-bs-dismiss="modal">Inscribirme</button>
                    </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Proyectos
