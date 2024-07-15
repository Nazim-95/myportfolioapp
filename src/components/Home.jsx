// Home.js
import React, { useRef } from 'react';
import homeimg from "../assets/img.jpg";
import Technologies from './Technologies';
import About from './About';
import Contact from './Contact';
import '../Css/home.css';

const Home = () => {
  const technologiesRef = useRef(null);

  const scrollToTechnologies = () => {
    technologiesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container text-center">
      {/* Home */}
      <div className="jumbotron-container my-5 p-5 bg-body-tertiary rounded-3">
        <img 
          src={homeimg} 
          alt="" 
          style={{ borderRadius: "50%", height: "250px", width: "250px", marginLeft: "85px", objectFit: "cover" }} 
        />
        <svg className="bi mt-4 mb-3" style={{ color: 'var(--bs-indigo)', width: 100, height: 100 }} />
        <h1 className="text-body-emphasis">Hello I'm a Mern Stack Developer</h1>
        <p className="col-lg-8 mx-auto fs-5 text-muted">
          Welcome to My Portfolio
        </p>
        <div className="d-inline-flex gap-2 mb-5">
          <button 
            className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" 
            type="button"
          >
            My Resume
            <svg className="bi ms-2" width="24" height="24" />
          </button>
          <button 
            className="btn btn-outline-secondary btn-lg px-4 rounded-pill" 
            type="button" 
            onClick={scrollToTechnologies}
          >
            Technologies
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="section-container my-5">
        <About />
      </div>

      {/* Technologies Section */}
      <div className="section-container my-5" ref={technologiesRef}>
        <Technologies />
      </div>

      {/* Contact Section */}
      <div className="section-container my-5">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
