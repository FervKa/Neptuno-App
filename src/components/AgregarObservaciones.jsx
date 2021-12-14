import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { MenuLateral } from './MenuLateral';
import { Navbar } from './Navbar';
import '../css/editar_usuario.scss'
import { GET_USUARIO } from './graphql/usuarios/querys';
import { useQuery, useMutation } from '@apollo/client';
import Input from './Input';
import { useEffect } from 'react/cjs/react.development';
import ButtonLoading from './ButtonLoading';
import useFormData from '../hooks/useFormData';
import { EDITAR_USUARIO } from './graphql/usuarios/mutations';



const AgregarObservaciones = () => {

    const { _id } = useParams();
console.log("Id", _id)
    const { form, formData, updateFormData } = useFormData(null);

  


    return (
        <>
        
            <Navbar titulo={"Estás editando a: "} />
            <div className="container pt-1 cont_propio">


                <div className="col">
                    <form
                        // onSubmit={submitForm}
                        // onChange={updateFormData}
                        // ref={form}
                    >
                        <div className="mb-3">
                            <label htmlFor="id" className="form-label  npcolor">Id:*</label>
                            <input
                                required={false}
                                type='text'
                                name="nombre"
                                className='form-control'
                                disabled
                                // defaultValue={querdyData && querdyData.leerObservacion.nombres}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Avance" className="form-label  npcolor" >Avance</label>
                            <input
                                required={false}
                                type='text'
                                name="Avance"
                                className='form-control'
                                disabled
                                // defaultValue={querdyData && querdyData.leerObservacion.apellidos}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Lider" className="form-label  npcolor" >Lider</label>
                            <input
                                required={false}
                                type='text'
                                name="Lider"
                                className='form-control'
                                disabled
                                // defaultValue={querdyData && querdyData.leerObservacion.apellidos}
                            ></input>
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="Observacion" className="form-label  npcolor">Observacion:*</label>
                            <input
                                required={false}
                                type='text'
                                name="Observacion"
                                className='form-control'
                                
                                // defaultValue={querdyData && querdyData.leerObservacion.apellidos}
                            ></input>
                        </div>
                       
                       
                        <div className="row tamano_row">
                            <div className="d-grid gap-2 col-6 mx-auto pb-3 botun">
                                {/* <ButtonLoading
                                    disabled={null}
                                    loading={null}
                                    text='Actualizar Observacion'
                                    onSubmit={submitForm}
                                /> */}
                                <div className="d-grid gap-2 col-6 mx-auto pb-3">
                                    <button  className="btn btn-warning  isI" type="button">Agregar Observación</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <MenuLateral />
        </>
    )
}

export default AgregarObservaciones;
