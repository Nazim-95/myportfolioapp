// src/Technologies.js
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import '../Css/technologies.css'; 

const Technologies = () => {
  const technologies = [
    { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
    { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'JavaScript', icon: <FaJsSquare color="#F7DF1E" /> },
    { name: 'React', icon: <FaReact color="#61DAFB" /> },
    { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
    { name: 'Express.js', icon: <SiExpress color="#000000" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
    { name: 'SQL', icon: <FaDatabase color="#336791" /> },
  ];

  return (
    <div className="technologies-container">
      <h2>Technologies</h2>
      <div className="technologies-grid">
        <div className="scroll-wrapper">
          {technologies.map((technology, index) => (
            <div key={index} className="technology-item">
              <div className="icon-name">
                {technology.icon}
                <p>{technology.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
