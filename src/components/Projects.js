import React from "react";
import ProjItem from "./ProjItem";

const Projects = () => {
  // taking array of projects which consist of "project title" and "project description"
  // const tech;
  const projArr = [
    { 
      title: "Chat Application with Real-Time Data Translation", 
      description: "Developed a real-time chat application with text translation capabilities. This app allows users to communicate in multiple languages, with real-time translations provided instantly as messages are sent. Key features include dynamic text translation and seamless chat functionalities, making it easier for people to engage in multi-language conversations without barriers." ,
       tech: [
        "React.js", "Node.js",
      ]
    },
    { 
      title: "Agro Seva Portal - Empowering Farmers with Digital Tools", 
      description: "Developed a full-stack website, Agro Seva Portal, designed to help farmers access important services and information. The platform features user authentication, real-time weather updates, crop pricing, government scheme requests, and community interaction, aiming to empower farmers with digital tools and information to improve their productivity and knowledge." ,
      tech: [
        "React.js", "Node.js"
      ]
    },
    { 
      title: "Attendance Management System with Facial Recognition and Two-Factor Authentication", 
      description: "Created an Attendance Management System integrating facial recognition for student attendance tracking. The system also implements two-factor authentication for secure access, combining WiFi connection verification (via MAC address matching) and facial recognition with Python libraries like OpenCV and face_recognition for precise identification." ,
      tech: [
        "Python", "CNN",
      ]
    },
    { 
      title: "Game Arena with Multiple Interactive Games", 
      description: "Developed a Game Arena featuring three classic games—Snake, Pong, and Aim Trainer—using the Raylib library in C++. This project required advanced problem-solving skills to create seamless gameplay experiences. Key challenges included handling game mechanics like scoring, actions, game-over conditions, and triggers while leveraging data structures and algorithms (DSA) for optimal game performance." ,
      tech: [
        "Raylib", "C++"
      ]
    },
  ];
  
  return (
    <div className="container">
      <div className="col-lg-8 col-md-7 col-sm-12">
        <h2 className="fs-1 font-monospace mb-4">Projects</h2>
      </div>
      <div>
        {/* will pass props for each meeasge(for that make a array with "title" and "description") */}
        {/* we'll only need one of this then (we'll map it) */}
      
        {projArr.map((project, i) => {
          return <ProjItem key={i} title={project.title} desc={project.description} tech={project.tech} />;
        })}

      </div>
    </div>
  );
};

export default Projects;
