import React, { useState, useEffect } from 'react'
import '../css/menuLateral.css'
import logo from '../images/favicon.png'
import user from '../images/mia.png'
import logoNightmare from '../images/Logo_Nightmare.png'
import logoNightmare_Letra from '../images/Logo_nightmare_letra.png'


export const MenuLateral = () => {

    /* Código para eliminar y agregar clase showMenu a las etiquetas arrow */



    let arrow = []

    useEffect(() => {
        arrow = document.querySelectorAll('.arrow');
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
        console.log(sideBarBtn);
        sideBarBtn.addEventListener("click", () => {
            sideBar.classList.toggle("close");
        })
    }, [])


    /* Finaliza código de sidebar */

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
                                <div className="profile_name">Stiven Suárez M</div>
                                <div className="job">Full Stack</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/">
                            <i className='bx bx-user-circle'></i>
                            <span className="link_name">Perfil</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="/">Perfil</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">
                            <i className='bx bx-brain'></i>
                            <span className="link_name">Gestión de Proyectos</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="/">Proyectos</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">
                            <i className='bx bx-brain'></i>
                            <span className="link_name">Gestión de Avances</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="/">Avances</a></li>
                        </ul>
                    </li>
                    {/* <button >Holi</button> */}
                    <li>
                        <div className="icon-links">
                            <a href="#">
                                <i className='bx bx-collection' ></i>
                                <span className="link_name">Categoria</span>
                            </a>
                            <i className="bx bxs-chevron-down arrow" ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name" href="/">Categoria</a></li>
                            <li><a href="/">PRUEBA 1</a></li>
                            <li><a href="/">PRUEBA 2</a></li>
                            <li><a href="/">PRUEBA 3</a></li>
                        </ul>
                    </li>
                    <div className="contenido-propio border-top border-3 border-light">
                        <a className="">
                            <img className="im-logo" src={logoNightmare} alt="logonightmaer" />
                            <img className="im-propia" src={logoNightmare_Letra} alt="logoletra" />
                        </a>
                    </div>
                    <div className="contenido-log border-top border-3 border-light propiaxd">
                        <a className="logout">
                            <i className='bx bx-log-in alineado_xd'></i>
                            <a href="/">Cerrar Sesión</a>
                        </a>
                    </div>
                </ul>
            </div>

            {/* <section className="home-section">
                <div className="home-content">
                    <i className='bx bx-menu-alt-left'></i>
                    <span className="text">Drop Down Sidebar</span>
                </div>
            </section> */}




        </>
    )
}
