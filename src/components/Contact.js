import React, { useState } from 'react';
import Form from './Form';
import { Link } from "react-router";

const Contact = () => {
  const [click, setClick] = useState(false);

  const handleButtonClick = () => {
    setClick(true); //we clicked the chat button, now modal is opened
  };

  const handleModalClose = () => {
    setClick(false); //this fucton is ran from child component(form.js), this sets click as false and clsoe the modal
  };

  return (
    <div className="d-flex align-items-center justify-content-center ">
      <div className="container mt-5">
        {/* Header Section */}
        <div className="mb-5 text-center">
          <h2 className="fs-1 font-monospace mb-4">Let's Get In Touch</h2>
          <p className="fs-6 font-monospace mx-auto" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
            I am actively seeking job or internship opportunities as a Full-Stack Developer.
            If you have a role or project that aligns with my skills, feel free to reach out.
            Let's connect and discuss how I can add value to your team!
          </p>
        </div>

        {/* Socials Section */}
        <div className="text-center">
          <h2 className="fs-1 font-monospace mb-4">Here are my socials</h2>
          <div className="d-flex gap-4 justify-content-center align-items-center">
            {/* Social Icons */}
            <Link to="mailto:ishanlytical@gmail.com" className="text-decoration-none">
              <i className="fa-regular fa-envelope fs-3" style={{ color: '#FFD43B' }}></i>
            </Link>
            <Link to="https://in.linkedin.com/in/ishan-dutta-762481259" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin fs-3" style={{ color: '#FFD43B' }}></i>
            </Link>
            <Link to="https://github.com/ishanexe" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github fs-3" style={{ color: '#FFD43B' }}></i>
            </Link>
            <Link to="https://medium.com" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-medium fs-3" style={{ color: '#FFD43B' }}></i>
            </Link>
            <Link to="https://twitter.com/your-profile" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter fs-3" style={{ color: '#FFD43B' }}></i>
            </Link>
            {/* RocketChat Icon with Modal Trigger */}
            {/* this makes the state of click as true */}
            <Link  onClick={handleButtonClick} className="text-decoration-none" role="button">   
              <i className="fa-brands fa-rocketchat fs-3" style={{ color: '#FFD43B' }}></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {/* assing click and handlemodalclose as props, click ensure that weahter to show the modal or nt
       and handmodalclose is ran when midal is closed, and state of click is made false */}
      <Form click={click} handleModalClose={handleModalClose} />
    </div>
  );
};

export default Contact;
