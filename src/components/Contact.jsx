import { Activity } from 'tabler-icons-react';
import { Mail } from 'tabler-icons-react';
import { PhoneCall } from 'tabler-icons-react'

function Contact() {

  return (
    <div>
      <h2 className="subtitulo">Let's Talk</h2>
<li></li>
      <p className="services-description">
Whether the objective is launching a payments operation, entering the Chilean market, expanding across Latin America, or developing a regulatory strategy, Railo provides the expertise, structure, and execution required to turn regional expansion into a competitive advantage.
      </p>
      <li> </li>
<div className="medio-contacto">
  <div className="contact-item">
    <Mail size={28} strokeWidth={1} color="white" />
    <p>diego@railo.cl</p>
  </div>

  <div className="contact-item">
    <PhoneCall size={28} strokeWidth={1} color="white" />
    <p>+56 9 8156 4333</p>
  </div>
</div>

      <li></li>
      <h1  className="logo">RAILO</h1>
     <li></li>
       <p className="services-description">
        Payments, Market Entry & Regulatory Strategy for Latin America.

      </p>
    </div>
  );
}

export default Contact;
