import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <>
            <div>
                <section className="text-center container" data-aos="fade-up" data-aos-duration={1000}>
                    <h1 className="mt-5 display-5 fw-bold">
                        Let's <span className="resume-title">Connect</span>
                    </h1>
                    <div className="underline mx-auto mt-2" />
                    <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
                        <p className="fw-semibold text-secondary">Feel free to reach out to me for collaborations, questions, or just to
                            say hello. I'm always <br /> open to connecting with like-minded professionals and enthusiasts.</p>
                    </div>
                </section>
                <section className="contact-section py-5">
                    <div className="container">
                        <h2 className="contact-title text-center fw-bold mb-5 display-7" data-aos="zoom-out" data-aos-duration={1500}>
                            Let’s Build Something Amazing Together 🚀
                        </h2>
                        <div className="row g-5">
                            {/* LEFT SIDE DETAILS */}
                            <div className="col-lg-5">
                                {/* Location */}
                                <div className="contact-box p-4 mb-4" data-aos="fade-right" data-aos-duration={1200}>
                                    <div className="d-flex align-items-center gap-3">
                                        <i className="bi bi-geo-alt-fill contact-icon" />
                                        <div>
                                            <h6 className="fw-semibold text-white mb-1">Location</h6>
                                            <p className="mb-0 text-secondary fw-semibold">Ahmedabad, Gujarat, India</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="contact-box p-4 mb-4" data-aos="fade-right" data-aos-duration={1400}>
                                    <div className="d-flex align-items-center gap-3">
                                        <i className="bi bi-envelope-fill contact-icon" />
                                        <div>
                                            <h6 className="fw-semibold text-white mb-1">Email</h6>
                                            <p className="mb-0 text-secondary fw-semibold">kamatrahul415@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Phone */}
                                <div className="contact-box p-4 mb-4" data-aos="fade-right" data-aos-duration={1600}>
                                    <div className="d-flex align-items-center gap-3">
                                        <i className="bi bi-telephone-fill contact-icon" />
                                        <div>
                                            <h6 className="fw-semibold text-white mb-1">Phone</h6>
                                            <p className="mb-0 text-secondary fw-semibold">+91 7203806609</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Availability */}
                                <div className="contact-box p-4 mb-4" data-aos="fade-right" data-aos-duration={1800}>
                                    <div className="d-flex align-items-center gap-3">
                                        <i className="bi bi-clock-fill contact-icon" />
                                        <div>
                                            <h6 className="fw-semibold text-white mb-1">Availability</h6>
                                            <p className="mb-0 text-secondary fw-semibold">Mon - Fri, 9AM - 6PM IST</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Social */}
                                <h5 className="fw-semibold text-white mt-4 mb-3">Connect on Social</h5>
                                <div className="contact-box p-4 mb-3" data-aos="fade-right" data-aos-duration={2000}>
                                    <div className="d-flex align-items-center gap-3">
                                        <i className="bi bi-github contact-icon" />
                                        <div>
                                            <h6 className="fw-semibold text-white mb-1">GitHub</h6>
                                            <p className="mb-0 git fw-semibold"><a href="https://github.com/RahulKamat09" target="_blank" rel="noopener noreferrer">github.com/RahulKamat09</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-box p-4" data-aos="fade-right" data-aos-duration={2000}>
                                    <div className="d-flex align-items-center gap-3">
                                        <i className="bi bi-linkedin contact-icon" />
                                        <div>
                                            <h6 className="fw-semibold text-white mb-1">LinkedIn</h6>
                                            <p className="mb-0 git fw-semibold"><a href="https://www.linkedin.com/in/rahul-kamat-769b01313/" target="_blank" rel="noopener noreferrer">linkedin.com/in/Rahul-Kamat</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* RIGHT SIDE FORM */}
                            <div className="col-lg-7" data-aos="fade-left" data-aos-duration={2000}>
                                <form className="contact-form p-4" action="https://formspree.io/f/mdkjvjeb" method="POST">
                                    <label className="form-label text-white">Your Name</label>
                                    <input type="text" className="form-control mb-3" name="Name" placeholder="John Doe" />
                                    <label className="form-label text-white">Email Address</label>
                                    <input type="email" className="form-control mb-3" name="Email" placeholder="john@example.com" />
                                    <label className="form-label text-white">Subject</label>
                                    <input type="text" className="form-control mb-3" name="Subject" placeholder="Project Discussion" />
                                    <label className="form-label text-white">Message</label>
                                    <textarea className="form-control mb-4" name="Message" rows={5} placeholder="Tell me about your project..." defaultValue={""} />
                                    <button className="btn send-btn w-100 py-3 fw-semibold">
                                        <i className="bi bi-send me-2" /> Send Message 🚀
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <section className="find-me-section py-5">
                        <div className="container">
                            <div className="text-center mb-4" data-aos="fade-up" data-aos-duration={1000}>
                                <h1 className="mt-5 fw-bold">
                                    Find Me <span className="resume-title">Here</span>
                                </h1>
                                <div className="underline mx-auto my-2" />
                            </div>
                            <div className="row justify-content-center px-5 mt-4" data-aos="zoom-in" data-aos-duration={2000}>
                                <div className="col-lg-12">
                                    <div className="map-box">
                                        {/* Google Maps Embed */}
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.15049961975!2d72.5797426!3d23.0202434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1763924013338!5m2!1sen!2sin" width="100%" height={450} style={{ border: 0 }} allowFullScreen="Yes" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="faq px-3">
                        <div className="container text-center">
                            <div className="titles mb-2" data-aos="fade-up" data-aos-duration={1000}>
                                <h1 className="mt-5 fw-bold">
                                    Frequetly Asked <span className="resume-title">Questions</span>
                                </h1>
                                <div className="underline mx-auto my-3" />
                            </div>
                            <div className="row g-4" data-aos="fade-up" data-aos-duration={2000}>
                                {/* FAQ 1 */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="contact-box p-4">
                                        <h5 className="fw-bold text-info">What's your typical response time?</h5>
                                        <p className="mt-2 text-light fw-semibold">
                                            I usually respond to all inquiries within 24 hours during business days.
                                        </p>
                                    </div>
                                </div>
                                {/* FAQ 2 */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="contact-box p-4">
                                        <h5 className="fw-bold text-info">Do you work on hourly or project basis?</h5>
                                        <p className="mt-2 text-light fw-semibold">
                                            I'm flexible and can work on both hourly rates or fixed project pricing.
                                        </p>
                                    </div>
                                </div>
                                {/* FAQ 3 */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="contact-box p-4">
                                        <h5 className="fw-bold text-info">What's your development process?</h5>
                                        <p className="mt-2 text-light fw-semibold">
                                            I follow agile methodology with regular updates and client feedback loops.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </>
    )
}

export default Contact