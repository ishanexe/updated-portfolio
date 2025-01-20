import React from 'react';
import './home.css';
import pic1 from './pic1.png'; // Ensure pic1.png is in the same directory as this file or adjust the path accordingly.
import {Link} from "react-router";

const Home = () => {
  return (
    <div className="container d-flex align-items-center justify-content-between">
      {/* Left Section: Text */}
      <div>
        <h3 className="fs-4 font-monospace" style={{ opacity: 1, transform: 'none' }}>
          Hi there,
        </h3>
        <h1 className="display-4 font-monospace" style={{ opacity: 1, transform: 'none' }}>
          My name is <span className="text-primary">Ishan Dutta</span>
        </h1>
        <h2
          className="fs-2 font-monospace mb-4"
          style={{ opacity: 1, transform: 'none', '--bs-text-opacity': '.5' }}
        >
          I am a Full-Stack Developer
        </h2>
        <div className="d-flex gap-3 text-start">
        <Link to="/Contact">
          <button type="button" className="btn btn-warning font-monospace">
            Get in Touch
          </button>
        </Link>
        <button className="btn btn-warning font-monospace" onClick={() => { window.open('/ishan-resume.pdf', '_blank');  }}>
            Download Resume
        </button>



        </div>
      </div>

      <div className='vid'>
        <img src={pic1} alt="Ishan Dutta" className="img-fluid rounded"
         style={{  width: '500px', height: 'auto' ,  filter: 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.6))'}}
         />
      </div>
    </div>
  );
};

export default Home;
