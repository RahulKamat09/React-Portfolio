import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <div>
                {/* Hero-Section */}
                <section className="hero d-flex align-items-center text-center">
                    <div className="container" data-aos="fade-up" data-aos-duration={2000}>
                        <div className="emoji">👋</div>
                        <h1 className="fw-bold hero-title">
                            Hi, I'm <span className="highlight">Rahul Kamat</span>
                        </h1>
                        <h5 className=" hero-subtitle text-light opacity-75 mt-3">
                            MERN Stack Developer | Full-Stack Engineer | UI Enthusiast
                        </h5>
                        <p className="hero-desc mt-4">
                            I build fast, scalable, and user-friendly web applications using modern JavaScript technologies.
                            My focus is on crafting clean UI, smooth animations, and high-performance backend systems.
                        </p>
                        <p className="tagline mt-3">
                            <i className="bi bi-stars text-warning" />
                            Turning ideas into fully functional digital experiences.
                        </p>
                        <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap" data-aos="fade-up" data-aos-duration={2500}>
                            <Link to="/portfolio" className="btn btn-primary text-black fw-bold btn-lg px-4">View My Work →</Link>
                            <a href="/assets/Rahul_Kamat_(CV).pdf" download className="btn btn-outline-light btn-lg px-4">
                                <i className="bi bi-download me-2" />Download Resume
                            </a>
                            <Link to="/contact" className="btn btn-outline-light btn-lg px-4">
                                <i className="bi bi-envelope me-2" />Contact Me
                            </Link>
                        </div>
                    </div>
                </section>
                {/* Stats Section */}
                <section className="stats-section py-5">
                    <div className="container p-4">
                        <div className="row g-5">
                            <div className="col-md-6" data-aos="fade-right" data-aos-duration={1500}>
                                <div className="stat-card active-card">
                                    <i className="bi bi-award" />
                                    <h2>5+</h2>
                                    <p>Projects Completed</p>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-left" data-aos-duration={1500}>
                                <div className="stat-card">
                                    <i className="bi bi-star" />
                                    <h2>30+</h2>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-right" data-aos-duration={1500}>
                                <div className="stat-card">
                                    <i className="bi bi-graph-up" />
                                    <h2>2+</h2>
                                    <p>Years Experience</p>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-left" data-aos-duration={1500}>
                                <div className="stat-card">
                                    <i className="bi bi-code-slash" />
                                    <h2>10+</h2>
                                    <p>Technologies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Skills Section */}
                <section className="skills-section py-5 my-5">
                    <div className="container text-center p-4">
                        <div className="titles" data-aos="fade-up" data-aos-duration={1000}>
                            <h2 className="section-title">Skill Highlights</h2>
                            <p className="section-subtitle">
                                Technologies I work with to build amazing products
                            </p>
                        </div>
                        <div className="row g-5 mt-5" data-aos="fade-up" data-aos-duration={2000}>
                            <div className="col-lg-3 col-md-6">
                                <div className="skill-card active-skill">
                                    <div className="skill-icon"><i className="bi bi-code-slash" /></div>
                                    <h4>Frontend Development</h4>
                                    <p>
                                        React.js, Next.js, Redux, Tailwind CSS, Bootstrap, Figma → UI to Pixel Perfect Pages
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="skill-card">
                                    <div className="skill-icon"><i className="bi bi-database" /></div>
                                    <h4>Backend Development</h4>
                                    <p>
                                        Node.js, Express.js, REST APIs, Authentication, Authorization, JWT
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="skill-card">
                                    <div className="skill-icon"><i className="bi bi-cloud" /></div>
                                    <h4>Database &amp; Cloud</h4>
                                    <p>
                                        MongoDB, Mongoose, Firebase, Git, GitHub, Render, Vercel
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="skill-card">
                                    <div className="skill-icon"><i className="bi bi-wrench" /></div>
                                    <h4>Tools &amp; Technologies</h4>
                                    <p>
                                        Postman, VS Code, Linux, GitHub Actions, Thunder Client
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Offer Section */}
                <section className="container py-5 p-4">
                    <div className="text-center mb-5">
                        <h1 className="fw-bold display-6" data-aos="fade-up" data-aos-duration={1500}>
                            What I <span className="text-warning">Offer</span>
                        </h1>
                        <p className="text-light display-9" data-aos="fade-up" data-aos-duration={1500}>
                            Comprehensive web development services tailored to your business needs
                        </p>
                    </div>
                    <div className="row g-5 ">
                        {/* Web App Development */}
                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={1500}>
                            <div className="skill-card">
                                <h4 className="text-info fw-bold">Web Application Development</h4>
                                <p className="text-light mt-2 fw-bold">
                                    Full-stack web applications built with modern technologies like
                                    React, Node.js, and MongoDB. Scalable, secure, and optimized
                                    for performance.
                                </p>
                                <div className="mt-3 d-flex flex-wrap gap-2">
                                    <span className="tag">Custom Solutions</span>
                                    <span className="tag">Responsive Design</span>
                                    <span className="tag">API Integration</span>
                                </div>
                            </div>
                        </div>
                        {/* UI/UX Development */}
                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={1500}>
                            <div className="skill-card">
                                <h4 className="text-info fw-bold">UI/UX Development</h4>
                                <p className="text-light mt-2 fw-bold">
                                    Converting designs from Figma or Adobe XD into pixel-perfect,
                                    interactive web pages with smooth animations and transitions.
                                </p>
                                <div className="mt-3 d-flex flex-wrap gap-2">
                                    <span className="tag">Pixel Perfect</span>
                                    <span className="tag">Animations</span>
                                    <span className="tag">Cross-browser Compatible</span>
                                </div>
                            </div>
                        </div>
                        {/* API Development */}
                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={2500}>
                            <div className="skill-card">
                                <h4 className="text-info fw-bold">API Development</h4>
                                <p className="text-light mt-2 fw-bold">
                                    RESTful APIs with robust authentication, data validation, and
                                    comprehensive documentation. Built for scalability and security.
                                </p>
                                <div className="mt-3 d-flex flex-wrap gap-2">
                                    <span className="tag">REST APIs</span>
                                    <span className="tag">Authentication</span>
                                    <span className="tag">Documentation</span>
                                </div>
                            </div>
                        </div>
                        {/* Performance Optimization */}
                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={2500}>
                            <div className="skill-card">
                                <h4 className="text-info fw-bolder">Performance Optimization</h4>
                                <p className="text-light mt-2 fw-bold">
                                    Optimizing web applications for speed, SEO, and user experience.
                                    Code splitting, lazy loading, and efficient state management.
                                </p>
                                <div className="mt-3 d-flex flex-wrap gap-2">
                                    <span className="tag">SEO Ready</span>
                                    <span className="tag">Fast Loading</span>
                                    <span className="tag">Optimized Code</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ready-project py-5">
                    <div className="container text-center">
                        <h2 className="fw-bold display-6 title-text" data-aos="fade-up" data-aos-duration={1000}>
                            Ready to start your project?
                        </h2>
                        <p className="text-light subtitle-text mt-3" data-aos="fade-up" data-aos-duration={1000}>
                            Let's collaborate to bring your ideas to life with clean, efficient code and stunning UI.
                        </p>
                        <div className="btns mt-4 d-flex justify-content-center gap-3 flex-wrap">
                            <Link to="/contact" className="btn custom-btn btn-lg px-4 mt-4 fw-bold" data-aos="fade-right" data-aos-duration={2000}>Get in Touch →</Link>
                            <Link to="/portfolio" className="btn custom-btn-outline btn-lg px-4 mt-4 fw-bold" data-aos="fade-left" data-aos-duration={2000}>View Portfolio →</Link>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Home