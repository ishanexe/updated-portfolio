import React from 'react';
import pieImage from './pie.png'; // Adjust the path if the image is in a different directory

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Content Section */}
        <div className="col-lg-8 col-md-7 col-sm-12">
          <h2 className="fs-1 font-monospace mb-4">About</h2>
          <p className="font-monospace fs-6 text-justify">
          Hello, my name is <strong>Ishan Dutta</strong> from Nagpur, Maharashtra. Currently, I am in my 6th semester, pursuing my studies in computer science and engineering.
          I love working with web technologies and have a strong hold in problem-solving, which I developed through continuous practice and competitive programming.
        </p>
        <p className="font-monospace fs-6 text-justify">
          I also have a keen interest in cybersecurity and am constantly exploring ethical hacking, penetration testing, and security protocols to enhance my skills. 
          My goal is to build efficient, secure, and user-friendly applications that can tackle real-world challenges and make a positive impact.
        </p>
        </div>

        {/* Image Section */}
        <div className="col-lg-4 col-md-5 col-sm-12 text-center mt-4 mt-md-0">
          <img
            src={pieImage}
            alt="Pie Chart"
            className="img-fluid"
            style={{
              maxWidth: '100%',
              height: 'auto',
              filter: 'drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5))',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
