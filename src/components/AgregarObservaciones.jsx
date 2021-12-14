import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { Navbar } from './Navbar';
import '../css/editar_usuario.scss'
import { useQuery, useMutation } from '@apollo/client';
import { useEffect } from 'react/cjs/react.development';
import useFormData from '../hooks/useFormData';
import { GET_AVANCE } from './graphql/proyectos/querys';
import { useUser } from '../context/userContext';
import { CREAR_OBSERVACION } from './graphql/proyectos/mutations';



const AgregarObservaciones = () => {

    const { userData } = useUser()

    const { _id } = useParams();
        //console.log("Id", _id)

    const { data: queryData, error: queryError, loading: queryLoading } = useQuery(GET_AVANCE, {
        variables: { _id },
    });

    const [crearObservacion, { data: mutationDataObs, error: mutationErorObs, loading: mutationLoadingObs }] = useMutation(CREAR_OBSERVACION);

    const agregarObservacion = () => {
        
        /* console.log("avance: " + _id);
        console.log("Observacion: " + document.getElementById("observacion").value);
        console.log("lider: "+ userData._id); */
        crearObservacion({
            variables: { avance: _id, observacion: document.getElementById("observacion").value, lider:  userData._id}
        })
        //console.log(mutationDataObs)
        document.getElementById("observacion").value = ""
    }

    useEffect(() => {
        console.log(queryData);
    }, [queryData])

  


    return (
        <>
        
            <Navbar titulo={"Observaciones"} />

            <div className="container">
                <Link to={`/proyecto/${queryData && queryData.avanceSimple.proyecto._id}`} className="btn btn-warning  isI" style={{margin: "120px 0px 0px 180px"}} >regresar</Link>
            </div>

            <div className="container pt-1 cont_propio" style={{marginTop: "20px"}}>

                
                
                <h4> Avance id: {_id}</h4>

                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="Avance" className="form-label  npcolor" >Descripción</label>
                            <input
                                required={false}
                                type='text'
                                className='form-control'
                                disabled
                                defaultValue={queryData && queryData.avanceSimple.descripcion}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Lider" className="form-label  npcolor" >Lider</label>
                            <input
                                required={false}
                                type='text'
                                className='form-control'
                                disabled
                                defaultValue={userData.nombres + " " + userData.apellidos}
                            ></input>
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="Observacion" className="form-label  npcolor">Observacion:*</label>
                            <input
                                required={true}
                                type='text'
                                className='form-control'
                                id='observacion'
                            ></input>
                        </div>
                       
                    </form>
                    <div className="container">
                        <div className="row justify-content-center">
                            <button 
                                className="btn btn-warning isI mb-3 mt-3"
                                data-bs-toggle="modal" 
                                data-bs-target="#modalAddObs" 
                                style={{maxWidth: "200px"}}
                                >
                            Agregar Observación
                            </button>

                        </div>
                    </div>
                    
                </div>
            </div>
            

            {/* Modal Agregar Observacion */}

            <div className="modal fade" id="modalAddObs" tabIndex="-1" aria-labelledby="modalAddObsLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalAddObsLabel">Crear Observación</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Esta creando una observación Nueva
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button onClick={agregarObservacion} type="button" className="btn btn-primary" data-bs-dismiss="modal">Confirmar</button>
                    </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default AgregarObservaciones;
