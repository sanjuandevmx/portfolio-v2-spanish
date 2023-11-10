import React from "react";

export const Footer = () => {

  { 
    // Constants  
    }

  let company = "San Juan";
  const anio = new Date().getFullYear();

  
  return (
    <>
      {
        // Esto sí es un comentario JSX
      }

      {
        // Footer
      }

      <footer className=" d-flex flex-column align-items-center justify-content-center">
        {
          // Footer Quote
        }
        <p className="footer-text text-center white-text">
          ¡Inventemos juntos el mañana!
        </p>

        {
          // Social-Networks Links
        }
        <div className="social-icons d-flex flex-wrap align-items-center justify-content-center">
          <a
            href="https://github.com/sanjuandevmx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/brian-san-juan-mx1999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        {
          // Copyright
        }
        <div className="copyright">
          Construido por {company} {anio} &#169;
        </div>
      </footer>
    </>
  );
};
