import React from 'react'
import { Navbar } from './Navbar';
import '../css/usuarios.css'


export const User = () => {
    return (
        <>
            <Navbar titulo='Perfil de Usuario'/>

            <div className="container pt-4">
                <div className="row">
                    <div className="col-sm-4">
                        
                        <div className="profile-card-4 text-center">
                            <img src="https://cdn.pixabay.com/photo/2017/06/26/13/03/webdesigner-2443766_960_720.jpg" className="img img-responsive"/>
                                <div className="profile-content">
                                    <div className="profile-name">Steven Tavera
                                        <p>ws.tavera@gmail.com</p>
                                    </div>

                                    <h6>Experiencia Laboral</h6>
                                    
                                    <div className="row text-start pt-2">    
                                        <p className="profile-description mb-0 pb-0"><strong>MisionTIC</strong></p>
                                        <p className="profile-description pt-1 pb-0">Trabajador Independiente Tripulante MisionTIC 2022</p>  
                                    </div>

                                    <div className="row text-start pt-2">    
                                        <p className="profile-description mb-0 pb-0"><strong>Indep</strong></p>
                                        <p className="profile-description pt-1">Programador, analista de datos, Inteligencia de negocios</p>  
                                    </div>

                                    <hr style={{color: "#f27127"},{height:"3px"}} />
                                    
                                    <h6>Estudiante</h6>
                                    
                                    <div class="contenedor">
                                        <a href="#" class="icono-social sombra redondo" id="facebook"><i class="fab fa-2x fa-facebook-f" aria-hidden="true"></i></a>
                                        <a href="#" class="icono-social sombra redondo" id="linkedin"><i class="fab fa-2x fa-linkedin-in" aria-hidden="true"></i></a> 
                                        <a href="#" class="icono-social sombra redondo" id="twitter"><i class="fab fa-2x fa-twitter" aria-hidden="true"></i></a> 
                                        <a href="#" class="icono-social sombra redondo" id="instagram"><i class="fab fa-2x fa-instagram" aria-hidden="true"></i></a>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>

                    

                    <div className="col-sm-8">
                        Prueba
                    </div>

                </div>
            </div>
            
        </>
    )
}
