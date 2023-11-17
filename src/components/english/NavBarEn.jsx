import React from 'react'
import SpainFlag from '../../assets/spain_flag.png'
import UsaFlag from '../../assets/usa_flag.jpg'
import { Link } from 'react-router-dom'

export const NavBarEn = () => {
  return (
    <>
<nav className="navbar-section navbar-expand-md  ">
  <div className="container-fluid">
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler"
      aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><i className="bi bi-list"></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbar-toggler">
      <a className="navbar-brand"><p className='brand-text'>San Juan </p>
      </a>
      
      <ul className="navbar-nav d-flex justify-content-center align-items-center ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#about-me-ancla">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#experience-section-ancla">Stack</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#recent-projects-ancla">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contacto">Contact</a>
        </li>
      </ul>
      <div class="text-end">
        <Link to={"/english"} class="btn btn-primary " id='usa_flag'><img src={UsaFlag} alt="cambiar_idioma"    /></Link>
        <Link to={"/"} class="btn btn-primary" id='spain_flag'><img src={SpainFlag} alt="cambiar_idioma_spañol"    /></Link>
          
        </div>

    </div>
  </div>
</nav>
    </>
  )
}
