import logo from './images/logo-neptuno-bordeado.png';
import './App.css';

import React from 'react'




export const navbar = () => {
  return (
    <div className="App">
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top"></img>
            Neptuno
          </a>
        </div>
      </nav>

    </div>
  )
}



