import React from 'react'

export const SkillsSectionEn = () => {
  return (
    <>
  <section class="experience-section " id='experience-section-ancla'>
    <div className='container text-center'>
    <h2 class=" title-section  ">Skills</h2>
    </div>
    <div class="container text-center">
      <div class="row">


        <div class="columne col-12 col-md-4">
        <i class="bi bi-display"></i>
          <p class="experience-title"> Front-end</p>
          <div class="badges-contain">
            <span class="badge ">HTML</span>
            <span class="badge ">CSS</span>
            <span class="badge ">JAVASCRIPT</span>
            <span class="badge ">REACT-JS</span>
            <span class="badge ">BOOTSTRAPT</span>
          </div>

        </div>


        <div class="columne col-12 col-md-4">
        <i class="bi bi-database"></i>
          <p class="experience-title">Back-End</p>
          <div class="badges-contain">
            <span class="badge ">JAVA</span>
            <span class="badge ">MYSQL</span>
            <span class="badge ">SPRING</span>
          </div>

        </div>


        <div class="columne col-12 col-md-4">
        <i class="bi bi-person-plus-fill"></i>
          <p class="experience-title">Others skills</p>
          <div class="badges-contain">
            <span class="badge ">GIT-HUB</span>
            <span class="badge ">WORDPRESS</span>
            <span class="badge ">CHATGTP</span>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
