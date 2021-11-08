import logo from '../images/logo-neptuno-bordeado.png';



import React from 'react'



//Navbar
export const Navbar = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"></img>
            Neptuno
          </a>
        </div>
      </nav>

    </div>
  )
}



