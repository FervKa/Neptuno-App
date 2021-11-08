import React from 'react'
import menuLateral from '../css/menuLateral.css'
import logo from '../images/favicon.png'

export const MenuLateral = () => {
    return (
        <>
            <div className="menu_lateral">
                <div className="sidebar">
                    <div className="logo-details">
                        <img src={logo}  alt="icono-logo" className ="imagen-ico" />
                        <spam className="logo_name">Neptuno</spam>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <a href="#">
                                <i className='bx bx-grid-alt' ></i>
                                <span className="link_name">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <div className="icon-links">
                                <a href="#">
                                    <i className='bx bx-collection' ></i>
                                    <span className="link_name">Categoria</span>
                                </a>
                                <i className='bx bxs-chevron-down arrow'></i>
                            </div>
                        </li>
                        <li>
                            <div className="icon-links">
                                <a href="#">
                                    <i className='bx bx-collection' ></i>
                                    <span className="link_name">Posteos</span>
                                </a>
                                <i className='bx bxs-chevron-down arrow'></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
