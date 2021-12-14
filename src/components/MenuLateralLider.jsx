import React, { useState, useEffect } from 'react'
import '../css/menuLateral.scss'
import logo from '../images/favicon.png'
import user from '../images/lider.png'
import logoNightmare from '../images/icono_nightmare.png'
import logoNightmare_Letra from '../images/letra_logo_nightmare.png'
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/authContext';
import { useUser } from '../context/userContext'

export const MenuLateralLider = () => {

    const { userData } = useUser()

    /* Código para eliminar y agregar clase showMenu a las etiquetas arrow */

    const [arrow, setArrow] = useState([]);

    //let arrow = []

    useEffect(() => {
        //arrow = document.querySelectorAll('.arrow');
        setArrow(document.querySelectorAll('.arrow'))
        for (var i = 0; i < arrow.length; i++) {
            arrow[i].addEventListener("click", (e) => {
                let tarE = e.target.parentElement.parentElement;
                //console.log(tarE);
                tarE.classList.toggle("showMenu");
            })
        }
    }, []);
    /* Finaliza código de etiquetas */


    /* Código para eliminar y agregar clase "X" al sidebar */
    useEffect(() => {
        setTimeout(() => {
            sideBar.classList.toggle("close");
        }, 1000);
        let sideBar = document.querySelector('.sidebar');
        let sideBarBtn = document.querySelector('.bx-menu-alt-left');
        //console.log(sideBarBtn);
        sideBarBtn.addEventListener("click", () => {
            sideBar.classList.toggle("close");
        })
    }, [])


    /* Finaliza código de sidebar */

    /* ROUTES */
    const navigate = useNavigate();

    const handleUsuarios = () => { navigate('/usuarios') };
    const handlePerfil = () => { navigate('/perfil') };


    /* Finaliza ROUTES */

    const { setToken } = useAuth()

    const borrarToken = () => {
        setToken(null)
        // navigate('/auth/login')
    }

 

    return (
        <>
            {/* <button onClick="scroll(110, 0);">Clic para desplazarse hacia abajo 100 pixeles</button> */}
            <div className="sidebar" id="contenedorMaestro">
                <div className="logo-details">
                    <img src={logo} alt="icono-logo" className="imagen-ico bx-menu-alt-left" />
                    <span className="logo_name">Neptuno</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <div className="profile-details mt-3 text-center border-top border-3 border-light pt-3 border-bottom">
                            <div className="profile-content">
                                <img src={user} alt="user" className="user-logo" />
                            </div>
                            <div className="name-job">
                                <div className="profile_name">{userData.nombres}</div>
                                <div className="profile_surname">{userData.apellidos}</div>
                                <div className="profile_role">{userData.rol}</div>
                                {/* <div className="job">Full Stack</div> */}
                            </div>
                        </div>
                    </li>
                    <li>
                        <NavLink to="/perfil" >
                            <i className='bx bx-user-circle'></i>
                            <span className="link_name">Perfil</span>
                        </NavLink>
                        <ul className="sub-menu blank">
                            <li><a className="link_name">Perfil</a></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/proyectos">
                            <i className='bx bx-brain'></i>
                            <span className="link_name">Gestión de Proyectos</span>
                        </NavLink>
                        <ul className="sub-menu blank">
                            <li><a className="link_name">Proyectos</a></li>
                        </ul>
                    </li>
                  
                    <li>
                        <NavLink to="/misproyectos">
                            <i className='bx bx-bookmark'></i>
                            <span className="link_name">Mis Proyectos</span>
                        </NavLink>
                        <ul className="sub-menu blank">
                            <li><a className="link_name">Mis Proyectos</a></li>
                        </ul>
                    </li>

                    <li className='cursor_here'>
                        <a onClick={handleUsuarios}>
                            <i className='bx bx-group'></i>
                            <span className="link_User">Usuarios</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_User">Usuarios</a></li>
                        </ul>

                    </li>

                    <div className="contenido-propio border-top border-3 border-light">
                        <a>
                            <img className="im-logo" src={logoNightmare} alt="logonightmaer" />
                            <img className="im-propia" src={logoNightmare_Letra} alt="logoletra" />
                        </a>
                    </div>
                    <div className="contenido-log border-top border-3 border-light propiaxd" >
                        <NavLink to="/auth/login" className="logout" >
                            <i className='bx bx-log-in alineado_xd' onClick={() => borrarToken()}></i>
                            <a>Cerrar Sesión</a>
                        </NavLink>
                    </div>
                </ul>
            </div>
        </>
    )
}

