import React from 'react'

export const ContactSectionEn = () => {
  return (
    <>
  <section id="contacto">
    <div class="container">
    <div className='container text-center'>
          <h2 className='title-section '>Contact me and build yours ideas</h2>
        </div>
      <div class="container text-center rectangulo d-flex justify-content-evenly">
        <div class="row">
          <div class="col-12 col-md-4 descripcion">
          <input type="text" class="form-control" placeholder="Name" aria-label="First name"/>
          </div>
          <br />
          <div class="col-12 col-md-4 descripcion">
          <input type="email" class="form-control" placeholder="Email" aria-label="Email"/>
          </div>
          <div class="col-12 col-md-4">
            <a href="mailto:janedoe@micorreo.com">
              <button type="button">  
              
                <i class="bi bi-envelope-check-fill"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
