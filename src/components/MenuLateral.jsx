import React from 'react'
import menuLateral from '../css/menuLateral.css'
import logo from '../images/favicon.png'
import user from '../images/user_sinfondo.png'

export const MenuLateral = () => {
    return (
        <>
            <div className="menu_lateral">
                <div className="sidebar close">
                    <div className="logo-details">
                        <img src={logo} alt="icono-logo" className="imagen-ico" />
                        <span className="logo_name">Neptuno</span>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <a href="#">
                                <i className='bx bx-grid-alt' ></i>
                                <span className="link_name">Dashboard</span>
                            </a>
                            <ul className="sub-menu blank">
                                <li><a className="link_name" href="#">Categoria</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className="icon-links">
                                <a href="#">
                                    <i className='bx bx-collection' ></i>
                                    <span className="link_name">Categoria</span>
                                </a>
                                <i className='bx bxs-chevron-down arrow'></i>
                            </div>
                            <ul className="sub-menu">
                                <li><a className="link_name" href="#">Categoria</a></li>
                                <li><a href="#">PRUEBA 1</a></li>
                                <li><a href="#">PRUEBA 2</a></li>
                                <li><a href="#">PRUEBA 3</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className="icon-links">
                                <a href="#">
                                    <i className='bx bx-book-bookmark'></i>
                                    <span className="link_name">Posteos</span>
                                </a>
                                <i className='bx bxs-chevron-down arrow'></i>
                            </div>
                            <ul className="sub-menu">
                                <li><a className="link_name" href="#">Categoria</a></li>
                                <li><a href="#">PRUEBA 1</a></li>
                                <li><a href="#">PRUEBA 2</a></li>
                                <li><a href="#">PRUEBA 3</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <i className='bx bx-pie-chart-alt-2' ></i>
                                <span className="link_name">Analítica</span>
                            </a>
                            <ul className="sub-menu blank">
                                <li><a className="link_name" href="#">Analítica</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <i className='bx bx-line-chart-down'></i>
                                <span className="link_name">Gráficos</span>
                            </a>
                            <ul className="sub-menu blank">
                                <li><a className="link_name" href="#">Gráficos</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className="icon-links">
                                <a href="#">
                                    <i className='bx bx-plug' ></i>
                                    <span className="link_name">Comple</span>
                                </a>
                                <i className='bx bxs-chevron-down arrow'></i>
                            </div>
                            <ul className="sub-menu">
                                <li><a className="link_name" href="#">Categoria</a></li>
                                <li><a href="#">PRUEBA 1</a></li>
                                <li><a href="#">PRUEBA 2</a></li>
                                <li><a href="#">PRUEBA 3</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <i className='bx bx-compass' ></i>
                                <span className="link_name">Explora</span>
                            </a>
                            <ul className="sub-menu blank">
                                <li><a className="link_name" href="#">Explora</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <i className='bx bx-history' ></i>
                                <span className="link_name">Historia</span>
                            </a>
                            <ul className="sub-menu blank">
                                <li><a className="link_name" href="#">Historia</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <i className='bx bx-cog' ></i>
                                <span className="link_name">Configuración</span>
                            </a>
                            <ul className="sub-menu blank">
                                <li><a className="link_name" href="#">Configuración</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="profile-details">
                        <div className="profile-content">
                            <img src={user} alt="user" className="user-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
