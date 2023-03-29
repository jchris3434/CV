import * as React from 'react'
// import { Link } from 'gatsby'
import {
    container,
    heading,
    navopacity,
    customToggler,
    navbarTogglerIcon,
    walakIcon,
    navbarSupportedContent
  } from './layout.module.css'
  import { StaticImage } from "gatsby-plugin-image"

  const Navbar = ({ pageTitle, children }) => {
    return (
      <div className={`${container} ${navopacity}`}>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid d-flex align-items-center justify-content-center">
            <StaticImage
              className={`${walakIcon} d-none d-md-block`}
              src="../images/walak.png"
              alt="alien"
              width={50}
            />
            <button
              className={`navbar-toggler ${customToggler}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className={`navbar-toggler-icon ${navbarTogglerIcon}`}></span>
            </button>
  
            <div className="collapse navbar-collapse" id={navbarSupportedContent}>
  <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white mx-auto text-center">
    <li className="nav-item">
      <a className="nav-link active text-white" aria-current="page" href="#">
        Accueil
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link active text-white" aria-current="page" href="#">
        A Propos
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white" href="#">
        CV
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white" href="#">
        Dernier Projet
      </a>
    </li>
  </ul>
</div>

          </div>
        </nav>
  
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    );
  };
  ;
  
  
  
  

  
  export default Navbar