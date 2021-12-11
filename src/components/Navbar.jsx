import React from 'react'
import '../css/navbar.css'


export const Navbar = ({titulo}) => {

    if(titulo==="Perfil de Usuario"){
        var classes = "bx bx-user-circle tamano_icono"
    }else if(titulo === "Usuarios"){
        var classes = 'bx bx-group font-size-50px'
    }

    return (
        <>
        
            <nav className="navbar navbar-light fixed-top bgNP">
                <div className="container-fluid navbarNP" >
                    <span className="navbar-brand h1 ">{titulo}&nbsp;&nbsp;<i className={classes}></i></span>
                </div>
                div
            </nav>
        </>
    )
}
