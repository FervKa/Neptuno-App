import React, { useState, useEffect } from 'react'
import { Navbar } from './Navbar';
import '../css/usuarios.css'
import { MenuLateral } from './MenuLateral'
import { useQuery } from '@apollo/client';
import { GET_USUARIO, GET_USUARIOS } from './graphql/usuarios/querys';
import { useUser } from '../context/userContext'

export const User = () => {

    const [email, setEmail] = useState("");

    const {userData} = useUser()

    const { data, loading, error } = useQuery(GET_USUARIOS);


    useEffect(() => {
        console.log("Recibidos con éxito:", data)
    }, [data])



    const validacion = () => {
        /* if(!email.trim()){
            let inputValido = document.querySelectorAll('.isI');
            inputValido.forEach(function(element){
                if(!element.value.trim()){
                    inputValido.classList.toggle("is-invalid");
                }
            });
            console.log(inputValido);
            return;
        } */

        console.log("Pasó esta mondá acá");
        setEmail("");
    };

    return (
        <>
            <Navbar titulo='Perfil de Usuario' />

            {/* :D */}

            <div className="container pt-5 mt-5" >
                <div className="row">
                    <div className="col-sm-5">

                        <div className="profile-card text-center border border-3 border-warning">
                            <img src="https://cdn.pixabay.com/photo/2017/06/26/13/03/webdesigner-2443766_960_720.jpg" className="img img-responsive" />
                            <div className="profile-content">
                                <div className="profile-name">{userData.nombres} {userData.apellidos}
                                    <p>{userData.correo}</p>
                                </div>

                                <h6 className="border-top border-3 border-warning pt-3 npcolorbold">Experiencia Laboral</h6>

                                <div className="row text-start pt-2">
                                    <p className="profile-description mb-0 pb-0"><strong>MisionTIC</strong></p>
                                    <p className="profile-description pt-1 pb-0">Trabajador Independiente Tripulante MisionTIC 2022</p>
                                </div>

                                <div className="row text-start pt-2">
                                    <p className="profile-description mb-0 pb-0"><strong>Indep</strong></p>
                                    <p className="profile-description pt-1">Programador, analista de datos, Inteligencia de negocios</p>
                                </div>



                                <h6 className="border-top border-3 border-warning pt-3  npcolorbold">{userData.rol}</h6>

                                <div className="contenedor" style={{ justifyContent: "center" }}>
                                    <a href="#" className="icono-social sombra redondo" id="facebook"><i className="fab fa-2x fa-facebook-f facebook" aria-hidden="true"></i></a>
                                    <a href="#" className="icono-social sombra redondo" id="linkedin"><i className="fab fa-2x fa-linkedin-in linkedin" aria-hidden="true"></i></a>
                                    <a href="#" className="icono-social sombra redondo" id="twitter"><i className="fab fa-2x fa-twitter twitter" aria-hidden="true"></i></a>
                                    <a href="#" className="icono-social sombra redondo" id="instagram"><i className="fab fa-2x fa-instagram instagram" aria-hidden="true"></i></a>
                                </div>

                            </div>
                        </div>

                    </div>



                    <div className="col-sm-7">

                        <div className="profile-card-2 border border-3 border-warning ">

                            <div className="profile-content">
                                <div className="container pb-3">
                                    <div className="row">
                                        <div className="profile-name mt-3 text-center border-bottom border-3 border-warning pb-3  npcolorbold">
                                            Actualizar Perfil
                                        </div>
                                    </div>
                                </div>


                                {/* <hr/> */}

                                <div className="container pt-1">
                                    <div className="row">
                                        <div className="col border-end border-3 border-warning">
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="nombre" className="form-label  npcolor">Nombre:*</label>
                                                    <input onChange={e => (setEmail(e.target.value))} type="text" className="form-control isI" id="nombre" aria-describedby="nameHelp" />
                                                    {/* <div id="emailHelp" className="form-text">Todos los campos con (*) son obligatorios</div> */}
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="apellido" className="form-label  npcolor">Apellido</label>
                                                    <input onChange={e => (setEmail(e.target.value))} type="lastname" className="form-control isI" id="apellido" aria-describedby="nameHelp" required />
                                                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="rol" className="form-label  npcolor">Rol</label>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option defaultValue>Seleccione</option>
                                                        <option value="1">Estudiante</option>
                                                        <option value="2">Lider</option>
                                                        <option value="3">Administrador</option>
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="Email" className="form-label  npcolor">Email</label>
                                                    <input onChange={e => (setEmail(e.target.value))} type="email" className="form-control" id="Email" aria-describedby="emailHelp" />
                                                </div>

                                            </form>
                                        </div>
                                        <div className="col">
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="facebook2" className="form-label  npcolor">Facebook </label>
                                                    <div className="container p-0">
                                                        <div className="row">
                                                            <div className="col-9 ">
                                                                <input type="text" className="form-control" id="facebook2" aria-describedby="emailHelp" />
                                                            </div>
                                                            <div className="col-3">
                                                                <i className="fab fa-2x fa-facebook-f facebooksh" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}

                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="exalinkedin2" className="form-label  npcolor">Linkedin</label>
                                                    <div className="container p-0">
                                                        <div className="row">
                                                            <div className="col-9 ">
                                                                <input type="text" className="form-control" id="linkedin2" />
                                                            </div>
                                                            <div className="col-3">
                                                                <i className="fab fa-2x fa-linkedin-in linkedinsh" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="twitter2" className="form-label  npcolor">Twitter</label>
                                                    <div className="container p-0">
                                                        <div className="row">
                                                            <div className="col-9 ">
                                                                <input type="text" className="form-control" id="twitter2" />
                                                            </div>
                                                            <div className="col-3">
                                                                <i className="fab fa-2x fa-twitter twittersh" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="instagram2" className="form-label  npcolor">Instagram</label>
                                                    <div className="container p-0">
                                                        <div className="row">
                                                            <div className="col-9 ">
                                                                <input type="text" className="form-control" id="instagram2" />
                                                            </div>
                                                            <div className="col-3">
                                                                <i className="fab fa-2x fa-instagram instagramsh" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>



                                <div className="container">
                                    <div className="profile-name mt-3 text-center border-top border-3 border-warning pt-3 pb-3  npcolorbold">
                                        Experiencia Laboral
                                    </div>
                                    <form>
                                        <div className="mb-3">
                                            {/* <label htmlFor="exampleFormControlTextarea1" className="form-label  npcolor">Experiencia Laboral</label> */}
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>

                                    </form>
                                    <div className="d-grid gap-2 col-6 mx-auto pb-3">
                                        <button onClick={validacion} className="btn btn-warning  isI" type="button">Actualizar Perfil</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                {/* <MenuLateral /> */}
            </div>

        </>
    )
}
