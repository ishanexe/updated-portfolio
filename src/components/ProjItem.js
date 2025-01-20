import React from "react";
// import { Link } from "react-router-dom"; 


// project card 
const ProjItem = (props) => {
  
  return (
    <div className="card h-100 shadow-sm mb-4 font-monospace " style={{backgroundColor:'#0E273C',color:'white'}}>
      <div className="card-header text-white fs-5" style={{backgroundColor:'#0E273C'}}>
      {props.title}
      </div>
      <div className="card-body">
        {/* <h5 className="card-title ">{props.title}</h5> */}
        <p className="card-text">
          {props.desc}
        </p>
        <div className="d-flex" style={{marginTop:"25px"}}>
        <p style={{color:'#ffaa1d', marginRight:"5px"}}>Technologies Used:</p> 
        {props.tech.map((tech, index) => (
            <span key={index} className="tech-item" style={{marginRight: "10px"}}>
              {tech}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProjItem;
