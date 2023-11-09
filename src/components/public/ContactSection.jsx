import React from 'react'
import { Form } from './Form';


export const ContactSection = () => {
 
  return (
<>
<section id="contacto">
    <div className="container">
    <div className='container text-center'>
          <h2 className='title-section '>¿Tienes un producto digital en mente?</h2>
        </div>
      <div className="container rectangulo d-flex align-items-center justify-content-center">

       <Form/>
      </div>
    </div>
  </section>
    </>
  );
};
