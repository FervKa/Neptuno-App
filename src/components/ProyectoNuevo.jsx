import React from 'react'
import { Link } from 'react-router-dom';
import { useUser } from '../context/userContext';
import { CREAR_PROYECTO } from './graphql/proyectos/mutations';
import { Navbar } from './Navbar';
import { useMutation } from '@apollo/client';
import useFormData from '../hooks/useFormData';
import { useNavigate } from 'react-router';

export const ProyectoNuevo = () => {

    const {userData} = useUser()

    const [crearProyecto, { data: mutationData, error: mutationEror, loading: mutationLoading }] = useMutation(CREAR_PROYECTO);

    const { form, formData, updateFormData } = useFormData(null);

    const navigate = useNavigate()

    const submitForm = (e) => {
        e.preventDefault();
        //console.log('fd', formData);
        //console.log(parseInt(formData.presupuesto))
         crearProyecto({
            variables: {
                lider: userData._id, 
                presupuesto: parseInt(formData.presupuesto), 
                nombre: formData.nombre,
                fechaInicio: formData.fechaInicio,
                fechaTerminacion: formData.fechaTerminacion,
                //...formData 
            }
        
        }) 
        navigate("/proyectos")
    }

    return (
        <>
            <Navbar titulo={"Nuevo Proyecto"} />
            
            <div className="container " >

                <div className="d-grid gap-2 col-3 ml-auto ms-3 ps-3">
                    <Link to="/proyectos" className="btn btn-primary d-flex justify-content-center mb-3" style={{marginTop: "70px"}}>regresar</Link>
                </div>

                <div className="profile-card-2 border border-3 border-warning ">

                    <div className="profile-content ms-3 me-3">
                        <div className="container pb-3">
                            <div className="row">
                                <div className="profile-name mt-3 text-center border-bottom border-3 border-warning pb-3  npcolorbold">
                                    Nuevo Proyecto
                                </div>
                            </div>
                        </div>
                    
                        <form 
                            onSubmit={submitForm}
                            onChange={updateFormData}
                            ref={form}>
                            <div className="mb-3">
                                <label htmlFor="Lider" className="form-label  npcolor">Lider: {userData.nombres} {userData.apellidos}</label> <br />
                                <label htmlFor="Lider" className="form-label  npcolor">email: {userData.correo}</label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label  npcolor">Nombre:*</label>
                                <input type="text" className="form-control" name="nombre" aria-describedby="nameHelp" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="presupuesto" className="form-label  npcolor">Presupuesto</label>
                                <input type="number" className="form-control" name="presupuesto" aria-describedby="nameHelp" required />
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="fechaInicio" className="form-label  npcolor">Fecha de inicio</label>
                                <input type="date" className="form-control" name="fechaInicio" aria-describedby="nameHelp" required />
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="fechaTerminacion" className="form-label  npcolor">Fecha de Terminación</label>
                                <input type="date" className="form-control" name="fechaTerminacion" aria-describedby="nameHelp" required />
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>

                            <div className="d-grid gap-2 col-6 mx-auto pb-3">
                                <button onClick={submitForm} className="btn btn-warning" type="button">Crear Proyecto</button>
                            </div>

                        </form>
                                
                    </div>
                </div>
            </div>
        </>
    )
}
