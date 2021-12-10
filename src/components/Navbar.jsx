import React from 'react'
import '../estilos/navbar.css'


export const Navbar = ({titulo}) => {

    if(titulo==="Perfil de Usuario"){
        var classes = 'fas fa-users font-size-50px'
    }

    return (
        <>
        
            <nav className="navbar navbar-light fixed-top bgNP">
                <div className="container-fluid navbarNP" >
                    <span className="navbar-brand mb-0 h1 ">{titulo}&nbsp;&nbsp;<i className={classes}></i></span>
                </div>
            </nav>
        </>
    )
}
