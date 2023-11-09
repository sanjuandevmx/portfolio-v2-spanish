import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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

<div className="row g-3">
    <div className="form-title white-text text-center">
    <h3>Solo completa el formulario y en breve nos pondremos en contacto contigo !.</h3>
    </div>
  <div className="col-sm-5">
    <input type="text" className="form-control" placeholder="Full name" name="user_name" required />
  </div>
  <div className="col-sm-5">
    <input type="email" className="form-control" placeholder="Email" name="user_email" required />
  </div>
  <div className="col-sm-2">
    <input type="submit" className="btn btn-primary" value="Send"/>
  </div>
</div>
    </form>
  );
};
