import React from 'react'
import ImgProject1 from '../../assets/project1.png'
import ImgProject2 from '../../assets/project2.jpg'
export const ProjectsSection = () => {
  return (
    <>
  <section className="recent-projects" id='recent-projects-ancla'>
    <h2 className=" title-section text-center ">Projectos recientes</h2>
    <div className="container text-center contain-projects">
      <div className="row">
        <div className=" columne col-12 col-lg-4 ">
          <div className="project">
            <img src={ImgProject1} alt="Project number one"/>
            <div className="overlay">
              <p>Portfolio</p>
              <div className="icons-contain">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-laptop"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" columne col-12 col-lg-4">
          <div className="project">
            <img src={ImgProject2} alt="Project number one"/>
            <div className="overlay">
              <p>E-commerce</p>
              <div className="icons-contain">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-laptop"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" columne col-12 col-lg-4">
          <div className="project">
            <img src={ImgProject1} alt="Project number one"/>
            <div className="overlay">
              <p>System-Magement</p>
              <div className="icons-contain">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-laptop"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" columne col-12  col-lg-4">
          <div className="project">
            <img src={ImgProject2} alt="Project number one"/>
            <div className="overlay">
              <p>UX Project</p>
              <div className="icons-contain">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-laptop"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" columne col-12 col-lg-4">
          <div className="project">
            <img src={ImgProject1} alt="Project number one"/>
            <div className="overlay">
              <p>Get data from API</p>
              <div className="icons-contain">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-laptop"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
