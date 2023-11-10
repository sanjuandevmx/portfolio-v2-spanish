import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const Form = () => {
  { 
    // emailjs configuration 
    }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    { 
      // get keys to emailjs 
      }
    emailjs
      .sendForm(
        "service_h3q1klo",
        "template_x4588bc",
        form.current,
        "G5u1F42QNyQz7Ke-I"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    
    <form ref={form} onSubmit={sendEmail}>
{ 
 // Form title 
 }
<div className="row g-3">
    <div className="form-title white-text text-center">
    <h3>Solo completa el formulario y en breve nos pondremos en contacto contigo !.</h3>
    </div>
    { 
 // Input group 
 }
  <div className="col-sm-5">
    <input type="text" className="form-control" placeholder="Nombre completo" name="user_name" required />
  </div>
  <div className="col-sm-5">
    <input type="email" className="form-control" placeholder="Correo electronico" name="user_email" required />
  </div>
  { 
 // Submit   emailjs needs to use a INPUT label 
 }
  <div className="col-sm-2">
    <input type="submit" className="btn btn-primary" value="Enviar"/>
  </div>
  
</div>

    </form>
  );
};
