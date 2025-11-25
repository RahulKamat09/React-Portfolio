import React from 'react'

function About() {
    return (
        <div>
            <div>
                {/* About Section */}
                <section className="about-section p-3">
                    <div className="container p-3">
                        <div className="text-center mb-5">
                            <h1 className="fw-bold display-5 text-white" data-aos="fade-up" data-aos-duration={1300}>
                                About <span className="text-info">Me</span>
                            </h1>
                            <div className="underline mx-auto mt-2" data-aos="fade-up" data-aos-duration={1500} />
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="about-card p-4 p-md-5" data-aos="zoom-in" data-aos-duration={1000}>
                                    <h4 className="text-info fw-bold"><i className="bi bi-person display-7" /> Who I Am</h4>
                                    <p className="text-light mt-3 fw-semibold">
                                        I'm a MERN Stack Developer passionate about building modern web applications with
                                        smooth user experiences and clean code architecture. I enjoy solving real-world
                                        problems through code and turning ideas into digital solutions.
                                    </p>
                                    <p className="para2 text-light mt-3 fw-semibold">
                                        With a strong foundation in both frontend and backend technologies, I specialize in
                                        creating seamless web experiences that combine beautiful design with robust
                                        functionality. Every project is an opportunity to learn, innovate, and deliver
                                        exceptional results.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Core Values Section */}
                <section className="container py-5">
                    <div className="text-center mb-5" data-aos="fade-up" data-aos-duration={1000}>
                        <h1 className="fw-bold text-light">
                            My <span className="text-info">Core Values</span>
                        </h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {/* Card 1 */}
                        <div className="col-lg-3 col-md-6" data-aos="fade-right" data-aos-duration={1000}>
                            <div className="value-card p-4 text-center h-100">
                                <div className="icon-wrap mx-auto mb-3">
                                    <i className="bi bi-bullseye" />
                                </div>
                                <h5 className="fw-bold">Goal-Oriented</h5>
                                <p className="text-light mt-2">
                                    I focus on delivering solutions that meet business objectives and user needs.
                                </p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="col-lg-3 col-md-6" data-aos="fade-right" data-aos-duration={1000}>
                            <div className="value-card p-4 text-center h-100">
                                <div className="icon-wrap mx-auto mb-3">
                                    <i className="bi bi-heart" />
                                </div>
                                <h5 className="fw-bold">Passionate</h5>
                                <p className="text-light mt-2">
                                    I love what I do and constantly learning new technologies to stay ahead.
                                </p>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="col-lg-3 col-md-6" data-aos="fade-left" data-aos-duration={1000}>
                            <div className="value-card p-4 text-center h-100">
                                <div className="icon-wrap mx-auto mb-3">
                                    <i className="bi bi-rocket-takeoff" />
                                </div>
                                <h5 className="fw-bold">Fast Learner</h5>
                                <p className="text-light mt-2">
                                    Quick to adapt to new tools, frameworks, and development methodologies.
                                </p>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="col-lg-3 col-md-6" data-aos="fade-left" data-aos-duration={1000}>
                            <div className="value-card p-4 text-center h-100">
                                <div className="icon-wrap mx-auto mb-3">
                                    <i className="bi bi-people" />
                                </div>
                                <h5 className="fw-bold">Team Player</h5>
                                <p className="text-light mt-2">
                                    Collaborative approach with clear communication and shared success.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Do-Cards-Section*/}
                <section className="container py-5">
                    <div className="text-center mb-5" data-aos="fade-up" data-aos-duration={1000}>
                        <h1 className="fw-bold display-6">
                            What <span className="text-warning">I Do</span>
                        </h1>
                    </div>
                    <div className="row g-4">
                        {/* Item 1 */}
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration={1200}>
                            <div className="do-card d-flex align-items-center">
                                <i className="bi bi-check-circle-fill do-icon" />
                                <p className="mb-0 ms-3">Build fully responsive &amp; animated web apps</p>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration={1400}>
                            <div className="do-card d-flex align-items-center">
                                <i className="bi bi-check-circle-fill do-icon" />
                                <p className="mb-0 ms-3">Design reusable UI components with modern frameworks</p>
                            </div>
                        </div>
                        {/* Item 3 */}
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration={1600}>
                            <div className="do-card d-flex align-items-center">
                                <i className="bi bi-check-circle-fill do-icon" />
                                <p className="mb-0 ms-3">Develop secure and optimized REST APIs</p>
                            </div>
                        </div>
                        {/* Item 4 */}
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration={1800}>
                            <div className="do-card d-flex align-items-center">
                                <i className="bi bi-check-circle-fill do-icon" />
                                <p className="mb-0 ms-3">Work with databases, authentication, and cloud deployment</p>
                            </div>
                        </div>
                        {/* Item 5 */}
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration={2000}>
                            <div className="do-card d-flex align-items-center">
                                <i className="bi bi-check-circle-fill do-icon" />
                                <p className="mb-0 ms-3">Convert Figma/Adobe XD designs into functional pages</p>
                            </div>
                        </div>
                        {/* Item 6 */}
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration={2200}>
                            <div className="do-card d-flex align-items-center">
                                <i className="bi bi-check-circle-fill do-icon" />
                                <p className="mb-0 ms-3">Implement real-time features with WebSockets</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Journey Section */}
                <section id="journey">
                    <div className="text-center mb-5" data-aos="fade-up" data-aos-duration={1000}>
                        <h1 className="fw-bold display-6">
                            My <span className="text-info">Journey</span>
                        </h1>
                    </div>
                    {/* Card 1 */}
                    <div className="journey-card mt-4" data-aos="fade-up" data-aos-duration={1300}>
                        <div className="year-badge">2022</div>
                        <div>
                            <div className="fs-5 fw-bold mb-2 text-ligt">Started Learning Coding Fundamentals</div>
                            <p className="text-light m-0 fs-6 lh-1">
                                Began my journey with C, C++, And DBMS.
                            </p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="journey-card mt-4" data-aos="fade-up" data-aos-duration={1600}>
                        <div className="year-badge">2023</div>
                        <div>
                            <div className="fs-5 fw-bold mb-2 text-ligt">Begin With Web Development</div>
                            <p className="text-light m-0 fs-6 lh-1">
                                Started My Journey in Web Development by learning HTML, CSS, and JavaScript.
                            </p>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="journey-card mt-4" data-aos="fade-up" data-aos-duration={1900}>
                        <div className="year-badge">2024</div>
                        <div>
                            <div className="fs-5 fw-bold mb-2 text-light">Freelance Projects</div>
                            <p className="text-light m-0 fs-6 lh-1">
                                Began With Building Small Projects for My Self Growth
                            </p>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="journey-card mt-4 mb-5" data-aos="fade-up" data-aos-duration={2200}>
                        <div className="year-badge">2025</div>
                        <div>
                            <div className="fs-5 fw-bold mb-2 text-light">Mern-Stack Developement</div>
                            <p className="text-light m-0 fs-6 lh-1">
                                Started Learning MERN-Stack Development to become a Full-Stack Developer.
                            </p>
                        </div>
                    </div>
                </section>
                {/* Skills Section */}
                <section className="skills-section py-5">
                    <div className="container text-center p-4">
                        <div className="titles" data-aos="fade-up" data-aos-duration={1000}>
                            <h1 className="fw-bold display-6">
                                Technical<span className="text-warning"> Skills</span>
                            </h1>
                            <p className="section-subtitle">
                                Technologies I work with to build amazing products
                            </p>
                        </div>
                        <div className="row g-5 mt-5">
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={800}>
                                <div className="skill-card active-skill">
                                    <div className="skill-icon"><i className="bi bi-code-slash" /></div>
                                    <h4>JavaScript (ES6+)</h4>
                                    <p>
                                        Strong logic, async programming, clean code, modern ES6+ features
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1000}>
                                <div className="skill-card">
                                    <div className="skill-icon"><i className="bi bi-layers" /></div>
                                    <h4>React.js</h4>
                                    <p>
                                        Components, Hooks, Router, State Management, Context API
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1200}>
                                <div className="skill-card">
                                    <div className="skill-icon"><i className="bi bi-lightning" /></div>
                                    <h4>Node.js &amp; Express.js</h4>
                                    <p>
                                        RESTful APIs, middleware, authentication, real-time features
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1400}>
                                <div className="skill-card">
                                    <div className="skill-icon"><i className="bi bi-database" /></div>
                                    <h4>MongoDB</h4>
                                    <p>
                                        Database modeling, aggregation, indexing, optimization
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1600}>
                                <div className="skill-card">
                                    <div className="skill-icon"><i className="bi bi-git" /></div>
                                    <h4>Git &amp; GitHub</h4>
                                    <p>
                                        Version control, collaboration, CI/CD workflows
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1800}>
                                <div className="skill-card">
                                    <div className="skill-icon"><i className="bi bi-palette" /></div>
                                    <h4>UI/UX Design</h4>
                                    <p>
                                        Design thinking, wireframing, prototyping, user research
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Quote Section */}
                <section id="quote" className="p-4">
                    <div className="quote-box" data-aos="flip-right" data-aos-duration={1000}>
                        <div className="quote-text">
                            "Code. Create. Improve. Repeat."
                        </div>
                        <div className="quote-sub text-light">
                            My philosophy for continuous growth and excellence in web development
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default About