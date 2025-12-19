import React from 'react'
import { Link } from 'react-router-dom'

function Portfolio() {
    return (
        <>
            <div>
                <section className="text-center container" data-aos="fade-up" data-aos-duration={1000}>
                    <div className="titles">
                        <h1 className="mt-5 display-5 fw-bold">
                            My <span className="resume-title">Portfolio</span>
                        </h1>
                        <div className="underline mx-auto mt-2" />
                    </div>
                    <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
                        <p className="fw-semibold text-secondary">Explore some of the best projects I've built using MERN Stack
                            technologies. Each project <br /> includes animations, interactivity, and a responsive design.</p>
                    </div>
                </section>
                <section className="projects-section p-2 py-5">
                    <div className="container">
                        <div className="row g-4 justify-content-center">
                            {/* CARD 1 */}
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={2000}>
                                <div className="project-card">
                                    <div className="card-top">
                                        <img src="images/Zay-Shop.png" className="project-img" />
                                    </div>
                                    <div className="card-content">
                                        <h3 className="project-title">Zay-Shop E-Commerce Store</h3>
                                        <p className="project-desc">
                                            A Simple E-Commerce Website With Simple UI/UX Design.
                                        </p>
                                        <div className="mt-3 d-flex flex-wrap gap-2">
                                            <span className="tag">HTML</span>
                                            <span className="tag">CSS</span>
                                            <span className="tag">Javascript</span>
                                        </div>
                                        <ul className="info-list">
                                            <li>Clean UI Design</li>
                                            <li>Responsive Layout</li>
                                            <li>Single Page Application</li>
                                        </ul>
                                        <div className="buttons">
                                            <Link to="https://rahulkamat09.github.io/Mock-Assessment/" target="_blank" className="demo-btn"><i className="bi bi-box-arrow-up-right" /> Live Demo</Link>
                                            <Link to="https://github.com/RahulKamat09/Mock-Assessment" target="_blank" className="code-btn"><i className="bi bi-github" /> Code</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CARD 2 */}
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={2000}>
                                <div className="project-card">
                                    <div className="card-top">
                                        <img src="images/Portfolio.png" className="project-img" />
                                    </div>
                                    <div className="card-content">
                                        <h3 className="project-title">Portfolio Website (Animated)</h3>
                                        <p className="project-desc">
                                            A modern portfolio with smooth animations and
                                            interactive elements.
                                        </p>
                                        <div className="mt-3 d-flex flex-wrap gap-2">
                                            <span className="tag">React</span>
                                            <span className="tag">CSS</span>
                                            <span className="tag">Bootstrap</span>
                                        </div>
                                        <ul className="info-list">
                                            <li>Smooth transitions</li>
                                            <li>Reusable components</li>
                                            <li>Responsive layout</li>
                                        </ul>
                                        <div className="buttons">
                                            <Link to="https://rahulkamat09.github.io/My-Portfolio/" target="_blank" className="demo-btn"><i className="bi bi-box-arrow-up-right" /> Live Demo</Link>
                                            <Link to="https://github.com/RahulKamat09/My-Portfolio" target="_blank" className="code-btn"><i className="bi bi-github" /> Code</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CARD 3 */}
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={2000}>
                                <div className="project-card">
                                    <div className="card-top">
                                        <img src="images/Chat-Bot.png" className="project-img img-fluid" />
                                    </div>
                                    <div className="card-content">
                                        <h3 className="project-title">AI CHAT BOT-2024</h3>
                                        <p className="project-desc">
                                            A Real Time Chat Bot with AI integration.Its Like ChatGPT.
                                        </p>
                                        <div className="mt-3 d-flex flex-wrap gap-2">
                                            <span className="tag">HTML</span>
                                            <span className="tag">CSS</span>
                                            <span className="tag">Javascript</span>
                                        </div>
                                        <ul className="info-list">
                                            <li>Live messaging</li>
                                            <li>Google API Integration</li>
                                            <li>Problem Solving</li>
                                        </ul>
                                        <div className="buttons">
                                            <Link to="https://rahulkamat09.github.io/Project-2-AI-CHATBOT/" target="_blank" className="demo-btn"><i className="bi bi-box-arrow-up-right" /> Live Demo</Link>
                                            <Link to="https://github.com/RahulKamat09/Project-2-AI-CHATBOT" target="_blank" className="code-btn"><i className="bi bi-github" /> Code</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Card-4 */}
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={2000}>
                                <div className="project-card">
                                    <div className="card-top">
                                        <img src="images/Medi-Nest.png" className="project-img img-fluid" />
                                    </div>
                                    <div className="card-content">
                                        <h3 className="project-title">Medi-Nest </h3>
                                        <p className="project-desc">
                                            A Responsive Medical Website Clone with modern UI/UX Design.
                                        </p>
                                        <div className="mt-3 d-flex flex-wrap gap-2">
                                            <span className="tag">HTML</span>
                                            <span className="tag">CSS</span>
                                            <span className="tag">Bootstrap</span>
                                        </div>
                                        <ul className="info-list">
                                            <li>Live messaging</li>
                                            <li>Online/offline indicators</li>
                                            <li>Notification sound</li>
                                        </ul>
                                        <div className="buttons">
                                            <Link to="https://rahulkamat09.github.io/Medi-Nest/" target="_blank" className="demo-btn"><i className="bi bi-box-arrow-up-right" /> Live Demo</Link>
                                            <Link to="https://github.com/RahulKamat09/Medi-Nest" target="_blank" className="code-btn"><i className="bi bi-github" /> Code</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Card-5 */}
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={2000}>
                                <div className="project-card">
                                    <div className="card-top">
                                        <img src="images/Nivia-Sports.png" className="project-img img-fluid" />
                                    </div>
                                    <div className="card-content">
                                        <h3 className="project-title">Nivia Sports</h3>
                                        <p className="project-desc">
                                            A Responsive Sports Website Clone with modern UI/UX Design.
                                        </p>
                                        <div className="mt-3 d-flex flex-wrap gap-2">
                                            <span className="tag">HTML</span>
                                            <span className="tag">CSS</span>
                                            <span className="tag">Javascript</span>
                                        </div>
                                        <ul className="info-list">
                                            <li>Live messaging</li>
                                            <li>Online/offline indicators</li>
                                            <li>Notification sound</li>
                                        </ul>
                                        <div className="buttons">
                                            <Link to="https://rahulkamat09.github.io/Nivia-Sports/" target="_blank" className="demo-btn"><i className="bi bi-box-arrow-up-right" /> Live Demo</Link>
                                            <Link to="https://github.com/RahulKamat09/Nivia-Sports" target="_blank" className="code-btn"><i className="bi bi-github" /> Code</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={2000}>
                                <div className="project-card">
                                    <div className="card-top">
                                        <img src="images/Dream-Pulse.png" className="project-img img-fluid" />
                                    </div>
                                    <div className="card-content">
                                        <h3 className="project-title">Dream-Pulse SPA</h3>
                                        <p className="project-desc">
                                            A Responsive Single Page Application with modern UI/UX Design.
                                        </p>
                                        <div className="mt-3 d-flex flex-wrap gap-2">
                                            <span className="tag">HTML</span>
                                            <span className="tag">CSS</span>
                                        </div>
                                        <ul className="info-list">
                                            <li>Live messaging</li>
                                            <li>Online/offline indicators</li>
                                            <li>Notification sound</li>
                                        </ul>
                                        <div className="buttons">
                                            <Link to="https://rahulkamat09.github.io/Dream-Pulse/" target="_blank" className="demo-btn"><i className="bi bi-box-arrow-up-right" /> Live Demo</Link>
                                            <Link to="https://github.com/RahulKamat09/Dream-Pulse" target="_blank" className="code-btn"><i className="bi bi-github" /> Code</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Portfolio