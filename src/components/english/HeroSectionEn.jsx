import React from 'react'
import ImgPerfil from '../../assets/selfie.png'

export const HeroSectionEn = () => {
  return (
    <>

<section class="hero align-items-stretch">
  <div class="hero-principal d-flex flex-column justify-content-center align-items-center">
    <img class="hero-image" src={ImgPerfil} alt=" Selfie de una persona "/>
    <h1>Hi, I am San Juan</h1>
    <h2>Web developer</h2>
  </div>
</section>
    </>
  )
}