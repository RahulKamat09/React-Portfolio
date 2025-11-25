import React from "react";
import "aos/dist/aos.css";
import {NavLink, Link} from "react-router-dom";

function Header() {
    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-lg py-3 sticky-top">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center gap-2" to="/"
                        data-aos="fade-right">
                        
                        <span className="logo-icon">
                            <i className="bi bi-lightning-charge-fill"></i>
                        </span>

                        <span className="logo-text">RK</span>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navMenu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-2"><NavLink className="nav-link fw-bold" to="/">Home</NavLink></li>
                            <li className="nav-item mx-2"><NavLink className="nav-link fw-bold" to="/about">About</NavLink></li>
                            <li className="nav-item mx-2"><NavLink className="nav-link fw-bold" to="/resume">Resume</NavLink></li>
                            <li className="nav-item mx-2"><NavLink className="nav-link fw-bold" to="/portfolio">Portfolio</NavLink></li>
                            <li className="nav-item mx-2"><NavLink className="nav-link fw-bold" to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
