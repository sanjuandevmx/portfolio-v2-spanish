import React from 'react'
import ImgPerfil from '../../assets/selfie.png'

export const HeroSection = () => {
  return (
    <>

<section className="hero align-items-stretch">
  <div className="hero-principal d-flex flex-column justify-content-center align-items-center">
    <img className="hero-image" src={ImgPerfil} alt=" Selfie de una persona "/>
    <h1>Hola, Soy San Juan</h1>
    <h2>Desarrollador web</h2>
  </div>
</section>
    </>
  )
}
