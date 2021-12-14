import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Loader } from './Loader';
import { useMutation, useQuery } from '@apollo/client';
import { GET_INCRIPCIONES, GET_PROYECTO } from './graphql/proyectos/querys';
import { CREAR_AVANCE, CREAR_OBJETIVO, EDITAR_INSCRIPCION, EDITAR_PROYECTO_ESTADO, EDITAR_PROYECTO_FASE, ELIMINAR_INSCRIPCION } from './graphql/proyectos/mutations';
import { Navbar } from './Navbar';
import useFormData from '../hooks/useFormData';
import { useUser } from '../context/userContext';


export const Proyecto = () => {

    const navigate = useNavigate()
    const { _id } = useParams()

    const { userData } = useUser()

    const { data: queryData, error: queryError, loading: queryLoading } = useQuery(GET_PROYECTO, {
        variables: { _id },
    });

    const { data: queryDataI, error: queryErrorI, loading: queryLoadingI } = useQuery(GET_INCRIPCIONES, {
        variables: { proyecto: _id },
    });



    const [editarProyectoEstado, { data: mutationData, error: mutationEror, loading: mutationLoading }] = useMutation(EDITAR_PROYECTO_ESTADO);
    const [editarProyectoFase, { data: mutationDataF, error: mutationErorF, loading: mutationLoadingF }] = useMutation(EDITAR_PROYECTO_FASE);
    const [crearObjetivo, { data: mutationDataO, error: mutationErorO, loading: mutationLoadingO }] = useMutation(CREAR_OBJETIVO);
    const [crearAvance, { data: mutationDataA, error: mutationErorA, loading: mutationLoadingA }] = useMutation(CREAR_AVANCE);
    const [editarInscripcion, { data: mutationDataI, error: mutationErorI, loading: mutationLoadingI }] = useMutation(EDITAR_INSCRIPCION);
    const [eliminarInscripcionP, { data: mutationDataEI, error: mutationErorEI, loading: mutationLoadingEI }] = useMutation(ELIMINAR_INSCRIPCION);

    const [cuentaEstado, setCuentaEstado] = useState(0)
    const [cuentaFase, setCuentaFase] = useState(0)

    const cambiarEstado = () => {
        //console.log(cuentaEstado);
        if (cuentaEstado == 0) {
            console.log("es 0, no haga nada");
        } else {
            if (queryData.leerProyecto.estado == "ACTIVO") {
                console.log("inactivar proyecto: " + queryData.leerProyecto._id)
                editarProyectoEstado({
                    variables: { _id: queryData.leerProyecto._id, estado: "INACTIVO" }
                })
                console.log("inactivar proyecto: ", mutationData)
            } else {
                console.log("Activar proyecto: " + queryData.leerProyecto._id)
                editarProyectoEstado({
                    variables: { _id: queryData.leerProyecto._id, estado: "ACTIVO" }
                })
                console.log("Activar proyecto: " + mutationData)
            }

        }
    }

    const cambiarFase = () => {

        if (cuentaFase == 0) {
            console.log("es 0, no haga nada");
        } else {
            const nuevaFase = document.getElementById("fase-proy").value
            console.log(document.getElementById("fase-proy").value)
            editarProyectoFase({
                variables: { _id: queryData.leerProyecto._id, fase: nuevaFase }
            })
            console.log('mutacion fase', mutationDataF);
        }
    }

    const { form, formData, updateFormData } = useFormData(null);

    const submitForm = (e) => {
        e.preventDefault();
        //console.log('fd', formData);
        crearObjetivo({
            variables: {
                proyecto: queryData.leerProyecto._id,
                ...formData
            }

        })
        document.getElementById("form-obj").reset()
    }

    const submitFormA = (e) => {
        e.preventDefault();
        crearAvance({
            variables: {
                proyecto: queryData.leerProyecto._id,
                estudiante: userData._id,
                descripcion: document.getElementById("descripcionAvance").value
            }

        })
        document.getElementById("form-avc").reset()
    }

    const [idInscripcion, setIdIncripcion]=useState()

    const cambiarEstadoIncripcion= (id) =>{
        /* console.log(idInscripcion); */
        const estadoInscripcion = document.getElementById("estado_insc").value

        editarInscripcion({
            variables: { _id: idInscripcion, estado: estadoInscripcion }
        }) 
        //console.log("Cambio de estado correcto: ", mutationDataI)
    }

    const eliminarIncripcion = () => {
        console.log("prueba eliminar Inscripcion: " + idInscripcion);
        console.log("proyecto: "+ _id);

        eliminarInscripcionP({
            variables: { proyecto: _id, id: idInscripcion  }
        }) 
        
        setTimeout(() => {
            window.location.reload()
        }, 300);
        
    }

    useEffect(() => {
        cambiarEstado()
    }, [cuentaEstado])

    useEffect(() => {
        cambiarFase()
    }, [cuentaFase])

    useEffect(() => {
        if (cuentaEstado > 0) {
            console.log("Mutación exitosa");
        }
    }, [mutationData])

    useEffect(() => {
        queryLoading ? <Loader /> : document.getElementById("fase-proy").value = queryData.leerProyecto.fase
    }, [queryData])
    
    useEffect(() => {
        queryLoadingI ? <Loader /> : console.log(queryDataI);
    }, [queryDataI])

    return (
        <>
            {
                queryLoading ?
                    <Loader /> 
                    : 
                    <>
                        <div className="container" style={{ marginTop: "100px" }}>

                            <Link to={"/proyectos"} className="btn btn-warning  isI  mb-3" >regresar</Link>

                            <Navbar titulo={queryData.leerProyecto.nombre} />


                            <div className="row">
                                {<div className="col-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title text-center">{queryData.leerProyecto.nombre}</h4>
                                            <h6>Inicio: {queryData.leerProyecto.fechaInicio}</h6>
                                            <p className="card-text">Lider: {queryData.leerProyecto.lider.nombres} {queryData.leerProyecto.lider.apellidos}</p>
                                            <p className="card-text">Objetivos: {queryData.leerProyecto.objetivos.length}</p>
                                            <p className="card-text">Avances: {queryData.leerProyecto.avances.length}</p>
                                            <p className="card-text">Estado: {queryData.leerProyecto.estado} 
                                                <button className='btn btn-warning  isI btn-sm  ms-3' onClick={() => setCuentaEstado(cuentaEstado + 1)}> Cambiar Estado</button>
                                            </p>
                                            <div className="row">
                                                <div className="col-4">
                                                    <p className="card-text"> Fase: </p>
                                                </div>
                                                <div className="col-4">
                                                    <select style={{ maxWidth: "180px" }} className="form-select" aria-label="select-fase" required="true" name="fase" id='fase-proy'>
                                                        <option> Seleccione </option>
                                                        <option value="INICIADO">Iniciado</option>
                                                        <option value="EN_DESARROLLO">En desarrollo</option>
                                                        <option value="TERMINADO">Terminado</option>
                                                        <option value="POR_DEFINIR">Por Definir</option>
                                                    </select>
                                                </div>
                                                <div className="col-4">
                                                    <button className='btn btn-warning  sI btn-sm ms-3' onClick={() => setCuentaFase(cuentaFase + 1)}>Cambiar fase </button>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Presupuesto: ${queryData.leerProyecto.presupuesto}</small>
                                        </div>
                                    </div>
                                </div>}
                                <div className="col-6">
                                    <div className="card">
                                        <div className="container">
                                            <h4 className="card-title mt-3 text-center">Incripciones</h4>
                                            <div className="table-responsive">
                                                <table className="table table-hover table-striped ">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col"></th>
                                                            <th scope="col">Nombres</th>
                                                            <th scope="col">Apellidos</th>
                                                            {/* <th scope="col">Correo</th> */}
                                                            <th scope="col">Estado Inscipción</th>
                                                            <th scope="col">Fecha de solicitud</th>
                                                            <th scope="col"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {queryDataI && queryDataI.leerInscripciones.map((i) => (
                                                            <tr key={i._id} >
                                                                <td className='text-center'></td>
                                                                <td>{i.estudiante.nombres}</td>
                                                                <td>{i.estudiante.apellidos}</td>
                                                                {/* <td>{i.estudiante.correo}</td> */}
                                                                <td><button 
                                                                        className='border-0' 
                                                                        style={{background: "transparent"}}
                                                                        data-bs-toggle="modal" 
                                                                        data-bs-target="#modalInsc"
                                                                        onClick={()=>setIdIncripcion(i._id)}
                                                                        >
                                                                        <i className='bx bx-edit-alt'></i>
                                                                    </button>  {i.estado} </td>
                                                                <td>{i.fechaIngreso}</td>
                                                                <td><button 
                                                                        className='border-0' 
                                                                        style={{backgroundColor: "transparent"}}
                                                                        data-bs-toggle="modal" 
                                                                        data-bs-target="#modalInscEliminar"
                                                                        onClick={()=>setIdIncripcion(i._id)}
                                                                        >
                                                                        <i className='bx bx-x-circle'></i>
                                                                    </button> 
                                                                </td>
                                                               

                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>        
                                </div>
                            </div>
                            <br />

                            <div className="row">
                                <div className="col">
                                    <div className="card mb-3">
                                        <h4 className="card-title mt-3 text-center">Objetivos</h4>
                                    </div>

                                    {queryData && queryData.leerProyecto.objetivos.map((o) => (
                                        <div className="card mb-2" key={o._id}>
                                            <div className="card-body">
                                                <h6>OBJETIVO {o.tipo} </h6>
                                                <p className="card-text">{o.descripcion}</p>

                                            </div>
                                            {/*  <div className="card-footer d-flex justify-content-end">
                                        <Link to="" className="btn btn-primary">Modificar</Link>
                                    </div> */}
                                        </div>
                                    ))}
                                    <div className="card mb-2" >
                                        <div className="card-body">
                                            <form
                                                onSubmit={submitForm}
                                                onChange={updateFormData}
                                                ref={form}
                                                id='form-obj'>
                                                <div className="mb-3">
                                                    <label htmlFor="tipo" className="form-label  npcolor">Tipo de Objetivo:*</label>
                                                    <select className="form-select" aria-label="select-tipo" required="true" name="tipo" id='tipo-obj'>
                                                        <option> Seleccione </option>
                                                        <option value="GENERAL">General</option>
                                                        <option value="ESPECIFICO">Específico</option>
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="descripcion" className="form-label  npcolor">Descripción:*</label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" name='descripcion'></textarea>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer d-flex justify-content-end">
                                            <button onClick={submitForm} className="btn btn-warning isI"> Agregar Objetivo</button>
                                        </div>
                                    </div>

                                </div>

                                <div className="col">
                                    <div className="card mb-3">
                                        <h4 className="card-title mt-3 text-center">Avances</h4>
                                    </div>
                                    {queryData && queryData.leerProyecto.avances.map((a) => (
                                        <div className="card mb-2" key={a._id}>
                                            <div className="card-body">
                                                <h6>Avance </h6>
                                                <p className="card-text">{a.descripcion}</p>
                                            </div>
                                            <div className="card-footer d-flex justify-content-end">
                                        {/* <Link to="" className="btn btn-primary me-3">Modificar</Link> */}
                                        <Link to="" className="btn btn-warning isI btn-sm">Agregar Observación</Link>
                                    </div>
                                        </div>
                                    ))}

                                    <div className="card mb-2" >
                                        <div className="card-body">
                                            <form
                                                onSubmit={submitFormA}
                                                id='form-avc'>
                                                <div>
                                                    <label className="form-label npcolor">Avance</label>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="descripcion" className="form-label  npcolor" >Descripción:*</label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" name='descripcion' id='descripcionAvance'></textarea>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer d-flex justify-content-end">
                                            <button onClick={submitFormA} className="btn btn-warning isI"> Agregar Avance</button>
                                        </div>
                                    </div>


                                </div>


                            </div>

                            <br />

                            <Link to="/proyectos" className="btn btn-warning isI d-flex justify-content-center mb-3" >regresar</Link>

                        </div>
                    </>}

                    {/* Modal estado inscripción */}

                    <div className="modal fade" id="modalInsc" tabindex="-1" aria-labelledby="modalInscLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalInscLabel">Actualizar estado de inscripción</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="tipo" className="form-label  npcolor">Estado de la incripción:*</label>
                                    <select className="form-select" aria-label="select-tipo" required="true" name="tipo" id='estado_insc'>
                                        <option> Seleccione </option>
                                        <option value="ACEPTADA">Aceptada</option>
                                        <option value="RECHAZADA">Rechazada</option>
                                        <option value="PENDIENTE">Pendiente</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button onClick={cambiarEstadoIncripcion} type="button" className="btn btn-primary" data-bs-dismiss="modal">Actualizar estado</button>
                            </div>
                            </div>
                        </div>
                    </div>



                    {/* Modal Eliminar inscripción */}

                    <div className="modal fade" id="modalInscEliminar" tabindex="-1" aria-labelledby="modalInscEliminarLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalInscEliminarLabel">Eliminar inscripción</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Esta seguro de eliminar esta inscripción?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button onClick={eliminarIncripcion} type="button" className="btn btn-primary" data-bs-dismiss="modal">Eliminar</button>
                            </div>
                            </div>
                        </div>
                    </div>

                    

        </>
    )
}

