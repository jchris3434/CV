import * as React from 'react'
// import { Link } from 'gatsby'
import {
    container,
    heading,
    navopacity,
    customToggler,
    navbarTogglerIcon,
    walakIcon,
    bgDark,
    camion,
    navMarge
  } from './layout.module.css'
  import { StaticImage } from "gatsby-plugin-image"

  const Navbar = ({ pageTitle, children }) => {
    return (
      <div className={`${container} ${navopacity}`}>
        <nav className={`navbar navbar-expand-md navbar-dark bg-dark ${camion} ${bgDark}`}>
          <div className="container-fluid">
            <StaticImage
              className={`${walakIcon} d-none d-lg-block`}
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
  
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className={`navbar-nav mx-auto text-center ${navMarge}`}>
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
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Contact
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
  }
  
  export default Navbar;