import React from 'react'
import ImgProject1 from '../../assets/project_one_portfolio.jpg'
export const ProjectsSection = () => {
  return (
    <>
  <section className="recent-projects" id='recent-projects-ancla'>
    <h2 className=" title-section ">Projectos recientes</h2>
    <div className="container text-center contain-projects">
      <div className="row">
        <div className=" columne col-12 col-lg-4 ">
          <div className="project">
            <img src={ImgProject1} alt="Project number one"/>
            <div className="overlay">
              <p>Portfolio</p>
              <div className="icons-contain">
                <a href="https://github.com/sanjuandevmx/portfolio-v2-spanish" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://sanjuan-dev.netlify.app" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-globe2"></i>
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
