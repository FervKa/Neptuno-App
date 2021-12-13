import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Loader } from './Loader';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PROYECTO } from './graphql/proyectos/querys';
import { Navbar } from './Navbar';
import { useState } from 'react';
import { CREAR_AVANCE, CREAR_OBJETIVO, EDITAR_PROYECTO_ESTADO, EDITAR_PROYECTO_FASE } from './graphql/proyectos/mutations';
import useFormData from '../hooks/useFormData';
import { useUser } from '../context/userContext';

export const Proyecto = () => {

    const { _id  } = useParams()

    const {userData} = useUser()

    const { data:queryData, error:queryError, loading:queryLoading } = useQuery(GET_PROYECTO, {variables: { _id },
    });

    const [editarProyectoEstado, { data: mutationData, error: mutationEror, loading: mutationLoading }] = useMutation(EDITAR_PROYECTO_ESTADO);
    const [editarProyectoFase, { data: mutationDataF, error: mutationErorF, loading: mutationLoadingF }] = useMutation(EDITAR_PROYECTO_FASE);
    const [crearObjetivo, { data: mutationDataO, error: mutationErorO, loading: mutationLoadingO }] = useMutation(CREAR_OBJETIVO);
    const [crearAvance, { data: mutationDataA, error: mutationErorA, loading: mutationLoadingA }] = useMutation(CREAR_AVANCE);

    const [cuentaEstado, setCuentaEstado]= useState(0)
    const [cuentaFase, setCuentaFase]= useState(0)

    const cambiarEstado=()=> {
        //console.log(cuentaEstado);
        if(cuentaEstado==0){
            console.log("es 0, no haga nada");
        }else{
            if(queryData.leerProyecto.estado=="ACTIVO"){
                console.log("inactivar proyecto: " + queryData.leerProyecto._id)
                editarProyectoEstado({
                    variables:{_id: queryData.leerProyecto._id, estado: "INACTIVO"}
                })
            }else{
                console.log("Activar proyecto: "  + queryData.leerProyecto._id)
                editarProyectoEstado({
                    variables:{_id: queryData.leerProyecto._id, estado: "ACTIVO"}
                })
            }
        
        }
    }

    const cambiarFase=()=> {

        if(cuentaFase==0){
            console.log("es 0, no haga nada");
        }else{
            console.log(document.getElementById("fase-proy").value)
            const nuevaFase = document.getElementById("fase-proy").value
            editarProyectoFase({
                variables:{_id: queryData.leerProyecto._id, fase: nuevaFase}
             })
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


    useEffect(()=>{
        cambiarEstado()
    },[cuentaEstado])

    useEffect(()=>{
        cambiarFase()
    },[cuentaFase])

    useEffect(()=>{
        if(cuentaEstado>0){
            console.log("Mutación exitosa");
        }
    },[mutationData])

    useEffect(()=>{
        queryLoading ? <Loader /> : document.getElementById("fase-proy").value = queryData.leerProyecto.fase
    },[queryData])

  return (
    <>    
            {
                queryLoading ?
                <Loader />
                :
                <>
                <div className="container" style={{marginTop: "100px"}}>
                    <Link to="/proyectos" className="btn btn-primary  mb-3" >regresar</Link>

                    <Navbar titulo={queryData.leerProyecto.nombre} />
                    <div className="row">
                        {<div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">{queryData.leerProyecto.nombre}</h4>
                                    <h6>Inicio: {queryData.leerProyecto.fechaInicio}</h6>
                                    <p className="card-text">Lider: {queryData.leerProyecto.lider.nombres} {queryData.leerProyecto.lider.apellidos}</p>
                                    <p className="card-text">Objetivos: {queryData.leerProyecto.objetivos.length}</p>
                                    <p className="card-text">Avances: {queryData.leerProyecto.avances.length}</p>
                                    <p className="card-text">Estado: {queryData.leerProyecto.estado} <button className='btn btn-sm btn-primary ms-3' onClick={() => setCuentaEstado(cuentaEstado + 1)}> Cambiar Estado</button></p>    
                                    <div className="row">
                                        <div className="col-2">
                                            <p className="card-text"> Fase: </p>
                                        </div>
                                        <div className="col-3">
                                            <select style={{maxWidth: "180px"}} className="form-select" aria-label="select-fase" required='true' name="fase" id='fase-proy'>
                                                <option> Seleccione </option>
                                                <option value="INICIADO">Iniciado</option>
                                                <option value="EN_DESARROLLO">En desarrollo</option>
                                                <option value="TERMINADO">Terminado</option>
                                                <option value="POR_DEFINIR">Por Definir</option>
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <button className='btn btn-sm btn-primary ms-3' onClick={() => setCuentaFase(cuentaFase + 1)}>Cambiar fase </button>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Presupuesto: ${queryData.leerProyecto.presupuesto}</small>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <br />

                    <div className="row">
                        <div className="col">
                            { queryData && queryData.leerProyecto.objetivos.map((o) => (     
                                <div className="card mb-2" key={o._id}>
                                    <div className="card-body">
                                        <h6>OBJETIVO {o.tipo} </h6>
                                        <p className="card-text">{o.descripcion}</p>
                                        
                                    </div>
                                   {/*  <div className="card-footer d-flex justify-content-end">
                                        <Link to="" className="btn btn-primary">Modificar</Link>
                                    </div> */}
                                </div>
                            )) }
                            <div className="card mb-2" >
                                <div className="card-body">
                                    <form 
                                        onSubmit={submitForm}
                                        onChange={updateFormData}
                                        ref={form}
                                        id='form-obj'>
                                        <div className="mb-3">
                                            <label htmlFor="tipo" className="form-label  npcolor">Tipo de Objetivo:*</label>
                                            <select className="form-select" aria-label="select-tipo" required='true' name="tipo" id='tipo-obj'>
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
                                    <button onClick={submitForm} className="btn btn-primary"> Agregar Objetivo</button>
                                </div>
                            </div>
                        
                        </div>

                        <div className="col">
                            { queryData && queryData.leerProyecto.avances.map((a) => (    
                                <div className="card mb-2" key={a._id}>
                                    <div className="card-body">
                                        <h6>Avance </h6>
                                        <p className="card-text">{a.descripcion}</p>
                                    </div>
                                    {/* <div className="card-footer d-flex justify-content-end">
                                        <Link to="" className="btn btn-primary me-3">Modificar</Link>
                                        <Link to="" className="btn btn-primary">Agregar Observación</Link>
                                    </div> */}
                                </div>
                            )) }

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
                                    <button onClick={submitFormA} className="btn btn-primary"> Agregar Avance</button>
                                </div>
                            </div>
                        
                        
                        </div>

                        
                    </div>
                    
                    <br />
                    <Link to="/proyectos" className="btn btn-primary d-flex justify-content-center mb-3" >regresar</Link>
                </div>
          </>}
    </>
  )
}

