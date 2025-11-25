import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer className="footer-section py-5 mt-5">
                <div className="container">
                    <div className="row justify-content-between">
                        {/* Left Section */}
                        <div className="col-lg-4 mb-4">
                            <h5 className="fw-bold text-info">Rahul Kamat</h5>
                            <p className="text-secondary mt-3">
                                MERN Stack Developer passionate about creating beautiful,
                                functional web experiences.
                            </p>
                        </div>
                        {/* Quick Links */}
                        <div className="col-lg-3 mb-4">
                            <h5 className="fw-bold text-white">Quick Links</h5>
                            <ul className="list-unstyled mt-3 footer-links ">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                        </div>
                        {/* Connect Icons */}
                        <div className="col-lg-3 mb-4">
                            <h5 className="fw-bold text-white">Connect</h5>
                            <div className="d-flex gap-3 mt-3">
                                <Link to="https://github.com/RahulKamat09" target="_blank" className="icon-circle">
                                    <i className="bi bi-github" />
                                </Link>
                                <Link to="https://www.linkedin.com/in/rahul-kamat-769b01313/" target="_blank" className="icon-circle">
                                    <i className="bi bi-linkedin" />
                                </Link>
                                <Link to="mailto:kamatrahul415@gmail.com" target="_blank" className="icon-circle">
                                    <i className="bi bi-envelope" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <hr className="footer-divider my-4" />
                    <p className="text-center text-secondary small">
                        © 2025 Rahul Kamat - MERN Stack Developer. Designed &amp; Developed with
                        <span className="text-warning">🧡</span>
                    </p>
                </div>
            </footer>

        </div>
    )
}

export default Footer