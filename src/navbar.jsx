import { useState } from 'react'
import {Link} from  "react-router-dom"
import './style.css'
import NavbarBotones from './navbarBotones'


function NavBar() {

  return (
    <>
<div className="center">
<nav className= "IMFURCOLOR navbar navbar-expand-lg sticky">
  <div className="container-fluid ">
  <a className="navbar-brand" href="/" ><img src='./src/assets/Recurso 1.png' className='img-fluid' width="150"></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link colortxt space-100 bold" aria-current="page" href="/#INICIO" >INICIO</a>
        </li>
      <li className="nav-item">
      <a href="/#EVENTOS" className='nav-link colortxt bold space-100'>EVENTOS</a>
      </li>
        <li className="nav-item">
          <a className="nav-link colortxt bold space-100" aria-current="page" href='/pawercon' id='navbarPawercon'><strong>PAWERCON</strong> 2024</a>
        </li>
        </ul>
    <NavbarBotones/>
  </div>
  </div>
</nav>

</div>



    </>
  )
}

export default NavBar;