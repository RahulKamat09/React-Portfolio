import React from 'react'

function Resume() {
    return (
        <>
            <section className="text-center container">
                <div className="titles" data-aos="fade-up" data-aos-duration={1000}>
                    <h1 className="mt-5 display-5 fw-bold">
                        My <span className="resume-title">Resume</span>
                    </h1>
                    <div className="underline mx-auto mt-2" />
                </div>
                <div className="btns mt-4 d-flex justify-content-center gap-3 flex-wrap">
                    <a href="Rahul_Kamat_(CV).pdf" download className="btn custom-btn btn-lg px-4 mt-4 fw-bold" data-aos="zoom-out" data-aos-duration={2000}>
                        <i className="bi bi-download" /> Download Resume
                    </a>
                </div>
            </section>
            <section className="resune-section">
                <div className="container px-5">
                    <div className="row" data-aos="zoom-in-left" data-aos-duration={2000}>
                        <div className="col-lg-12">
                            <div className="resume-box p-4 mt-5" data-aos="fade-up" data-aos-duration={2000}>
                                <div className="fs-3 fw-bold">
                                    <i className="bi bi-award" />
                                    Professional Summary
                                </div>
                                <div className="mt-2 text-secondary lh-2 display-8 fw-semibold">
                                    Passionate and detail-oriented MERN Stack Developer.Experienced in
                                    building responsive, user-focused web applications and deploying projects using Git and
                                    Vercel.
                                    Currently enhancing full-stack capabilities through MERN training at TOPS Technologies.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" data-aos="zoom-in-left" data-aos-duration={2000}>
                        <div className="col-lg-12">
                            <div className="resume-box p-4 mt-5" data-aos="fade-up" data-aos-duration={2000}>
                                <div className="fs-3 fw-bold">
                                    <i className="bi bi-mortarboard" style={{ color: '#ff8c32' }} />
                                    Education
                                </div>
                                <div className="mt-4 w-100">
                                    <h4 className="info-title">Bachelor's of Computer Applications</h4>
                                    <p className="mt-1 text-light fs-6 fw-semibold">Silver Oak College Of Computer
                                        Applications(SOCCA) • 2022-2025 <br /><span className="text-warning">CGPA - 9.22</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" data-aos="zoom-in-left" data-aos-duration={2000}>
                        <div className="col-lg-12">
                            <div className="resume-box p-4 mt-5" data-aos="fade-up" data-aos-duration={2000}>
                                <div className="fs-3 fw-bold">
                                    <i className="bi bi-mortarboard" style={{ color: '#ff8c32' }} />
                                    Experience
                                </div>
                                <div className="d-flex flex-column flex-md-row justify-content-between">
                                    <h4 className="info-title mt-3 ms-2">MERN Stack Developer</h4>
                                    <span className="info-date mt-2 mt-md-0">2023 - Present</span>
                                </div>
                                <p className="fs-5 text-warning fw-bold ms-2">Freelance</p>
                                <ul className="info-list">
                                    <li>Built responsive websites and dashboards</li>
                                    <li>Developed secure REST APIs and authentication systems</li>
                                    <li>Integrated payment gateways and admin panels</li>
                                    <li>Optimized performance and SEO for client projects</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="fs-3 fw-bold my-4 ms-2" data-aos="fade-right" data-aos-duration={1000}>
                                <i className="bi bi-code-slash" style={{ color: '#ff8c32' }} />
                                Technical <span className="text-info">Skills</span>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-6" data-aos="fade-right" data-aos-duration={2000}>
                                    <div className="resume-box p-4">
                                        <h4 className="text-info fw-bold">Frontend</h4>
                                        <div className="skill-badge">
                                            <p className="badge text-light">HTML5</p>
                                            <p className="badge text-light">CSS3</p>
                                            <p className="badge text-light">JavaScript</p>
                                            <p className="badge text-light">React.js</p>
                                            <p className="badge text-light">Bootstrap</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-left" data-aos-duration={2000}>
                                    <div className="resume-box p-4">
                                        <h4 className="text-warning fw-bold">Backend</h4>
                                        <div className="skill-badge">
                                            <p className="badge text-light">Node.js</p>
                                            <p className="badge text-light">Express.js</p>
                                            <p className="badge text-light">C Language</p>
                                            <p className="badge text-light">C++</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-right" data-aos-duration={2000}>
                                    <div className="resume-box p-4">
                                        <h4 className="text-success fw-bold">Database</h4>
                                        <div className="skill-badge">
                                            <p className="badge text-light">DBMS</p>
                                            <p className="badge text-light">MongoDB</p>
                                            <p className="badge text-light">MySQL</p>
                                            <p className="badge text-light">RDBMS</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-left" data-aos-duration={2000}>
                                    <div className="resume-box p-4">
                                        <h4 className="text-danger fw-bold">Tools</h4>
                                        <div className="skill-badge">
                                            <p className="badge text-light">Git Hub</p>
                                            <p className="badge text-light">VS Code</p>
                                            <p className="badge text-light">Bolt</p>
                                            <p className="badge text-light">Replit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mx-auto" data-aos="fade-up" data-aos-duration={2000}>
                                    <div className="resume-box p-4">
                                        <h4 className="text-primary fw-bold">Deployment</h4>
                                        <div className="skill-badge">
                                            <p className="badge text-light">Vercel</p>
                                            <p className="badge text-light">Netlify</p>
                                            <p className="badge text-light">Git Hub</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="fs-3 fw-bold my-4 ms-2" data-aos="fade-right" data-aos-duration={1000}>
                                <i className="bi bi-bullseye me-2" style={{ color: '#ff8c32' }} />
                                Soft <span className="text-info">Skills</span>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 d-flex flex-wrap gap-5 justify-content-center">
                                    <div className="resume-box p-4 text-center" data-aos="flip-right" data-aos-duration={1400}>
                                        <i className="bi bi-lightbulb icon-box" />
                                        <p className="fw-semibold">Problem Solving</p>
                                    </div>
                                    <div className="resume-box p-4 text-center" data-aos="flip-right" data-aos-duration={1800}>
                                        <i className="bi bi-chat-left icon-box" />
                                        <p className="fw-semibold">Communication</p>
                                    </div>
                                    <div className="resume-box p-4 text-center" data-aos="flip-right" data-aos-duration={2200}>
                                        <i className="bi bi-clock icon-box" />
                                        <p className="fw-semibold">Time Management</p>
                                    </div>
                                    <div className="resume-box p-4 text-center" data-aos="flip-right" data-aos-duration={2600}>
                                        <i className="bi bi-people icon-box" />
                                        <p className="fw-semibold">Team Collaboration</p>
                                    </div>
                                    <div className="resume-box p-4 text-center" data-aos="flip-right" data-aos-duration={2800}>
                                        <i className="bi bi-award-fill icon-box" />
                                        <p className="fw-semibold">Adaptability</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Resume