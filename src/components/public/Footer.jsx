import React from 'react'
import ImgProject1 from '../../assets/project1.png'

export const Footer = () => {

  let company = "San Juan";
  const anio = new Date().getFullYear();
  return (
    <>
<footer className=" d-flex flex-column align-items-center justify-content-center">
    <p className="footer-text text-center white-text">¡Inventemos juntos el mañana!</p>
    <div className="social-icons d-flex flex-wrap align-items-center justify-content-center">
      <a href="https://twitter.com/freecodecampES" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-twitter"></i>
      </a>
      <a href="https://github.com/freeCodeCamp/freeCodeCamp" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-github"></i>
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-linkedin"></i>
      </a>
      <a href="https://www.instagram.com/freecodecamp/" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-instagram"></i>
      </a>
      <a href="mailto:janedoe@micorreo.com" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-envelope"></i>
      </a>
    </div>
    <div className="copyright">Construido por {company}  {anio} &#169;</div>
  </footer>
    </>
  )
}
