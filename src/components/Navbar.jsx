import React from 'react'
// import Navbar from '../Css/Navbar.css';
import "../Css/stylenav.css"
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <Link class="navbar-brand" href="/">WARRAICH </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div style={{marginLeft:'750px'}} class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/Technologies">Technologies</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/Contact">Contact</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
