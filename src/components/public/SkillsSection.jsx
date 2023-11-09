import React from 'react'

export const SkillsSection = () => {
  return (
    <>
  <section className="experience-section " id='experience-section-ancla'>
    <div className='container text-center'>
    <h2 className=" title-section  ">Stack tecnologico</h2>
    </div>
    <div className="container text-center">
      <div className="row">


        <div className="columne col-12 col-md-4">
        <i className="bi bi-display"></i>
          <p className="experience-title"> Front-end</p>
          <div className="badges-contain">
            <span className="badge ">HTML</span>
            <span className="badge ">CSS</span>
            <span className="badge ">JAVASCRIPT</span>
            <span className="badge ">REACT-JS</span>
            <span className="badge ">BOOTSTRAPT</span>
          </div>

        </div>


        <div className="columne col-12 col-md-4">
        <i className="bi bi-database"></i>
          <p className="experience-title">Back-End</p>
          <div className="badges-contain">
            <span className="badge ">JAVA</span>
            <span className="badge ">MYSQL</span>
            <span className="badge ">SPRING</span>
          </div>

        </div>


        <div className="columne col-12 col-md-4">
        <i className="bi bi-person-plus-fill"></i>
          <p className="experience-title">Otras habilidades</p>
          <div className="badges-contain">
            <span className="badge ">GIT-HUB</span>
            <span className="badge ">WORDPRESS</span>
            <span className="badge ">CHATGTP</span>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
