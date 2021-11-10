import React, { useState, useEffect } from 'react'
import '../css/menuLateral.css'
import logo from '../images/favicon.png'
import user from '../images/mia.png'


export const MenuLateral = () => {

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

    return (
        <>
            <div className="sidebar">
                <div className="logo-details">
                    <img src={logo} alt="icono-logo" className="imagen-ico" />
                    <span className="logo_name">Neptuno</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="/">
                            <i className='bx bx-grid-alt' ></i>
                            <span className="link_name">Dashboard</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="/">Categoria</a></li>
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
                    <li>
                        <div className="icon-links">
                            <a href="/">
                                <i className='bx bx-book-bookmark'></i>
                                <span className="link_name">Posteos</span>
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
                    <li>
                        <a href="/">
                            <i className='bx bx-pie-chart-alt-2' ></i>
                            <span className="link_name">Analítica</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="/">Analítica</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">
                            <i className='bx bx-line-chart-down'></i>
                            <span className="link_name">Gráficos</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="/">Gráficos</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="icon-links">
                            <a href="/">
                                <i className='bx bx-plug' ></i>
                                <span className="link_name">Comple</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow'></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name" href="/">Categoria</a></li>
                            <li><a href="/">PRUEBA 1</a></li>
                            <li><a href="/">PRUEBA 2</a></li>
                            <li><a href="/">PRUEBA 3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">
                            <i className='bx bx-compass' ></i>
                            <span className="link_name">Explora</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="/">Explora</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">
                            <i className='bx bx-history' ></i>
                            <span className="link_name">Historia</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="/">Historia</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">
                            <i className='bx bx-cog' ></i>
                            <span className="link_name">Configuración</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="/">Configuración</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="profile-details">
                            <div className="profile-content">
                                <img src={user} alt="user" className="user-logo" />
                            </div>
                            <div className="name-job">
                                <div className="profile_name">Stiven Suárez M</div>
                                <div className="job">Full Stack</div>
                            </div>
                            <i className='bx bx-log-in' ></i>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
