import React from 'react'
import Favicon from '../../assets/favicon.svg'

export const NavBar = () => {
  return (
    <>

<nav className="navbar-section navbar-expand-md  ">
  <div className="container-fluid">
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler"
      aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><i className="bi bi-list"></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbar-toggler">
      <a className="navbar-brand" href=""><img src={Favicon} alt="Icono del menu" width="50"/>
      </a>
      <ul className="navbar-nav d-flex justify-content-center align-items-center ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#about-me-ancla">Acerca de mi</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#experience-section-ancla">Stack</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#recent-projects-ancla">Proyectos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contacto">Contacto</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
    </>
  )
}
