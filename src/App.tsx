import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // @ts-ignore
    if (window.AOS) {
      // @ts-ignore
      window.AOS.init({
        once: false,
        duration: 1200,
        easing: "ease-out-quart",
        offset: 50,
      });
      setTimeout(() => {
        // @ts-ignore
        window.AOS.refresh();
      }, 500);
    }
  }, []);

  return (
    <>
      <div id="hero" className="header-intro">
        <div className="navbar navbar-expand-lg">
          <div className="container">
            <a href="/" className="navbar-brand">
              <h2>Quant Media</h2>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-align-justify"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#hero">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about-us">
                    Mechanism
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#how-we-do">
                    Pipeline
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#what-we-do">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#why-us">
                    Advantage
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="container"
          style={{ paddingBottom: "40px", paddingTop: "20px" }}
        >
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-4">
              <div
                className="entry"
                style={{ paddingTop: "0px" }}
                data-aos="fade-up"
              >
                <span>MARKETING AGENCY</span>
                <h2>
                  We Don't Just Edit. <br /> We Engineer Attention.
                </h2>
                <p>
                  We partner exclusively with Elite Founders and Serious
                  Operators. When a $250M marketer like Jason Fladlien or a
                  high-level founder like Mike Claudio needs a backend solution,
                  they look for us.
                </p>
                <a
                  href="https://cal.com/quantmedia/15min?overlayCalendar=true"
                  className="button btn"
                >
                  Book a Growth Audit
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="entry entry-img" data-aos="fade-up">
                <div
                  className="video-container rounded shadow-sm overflow-hidden"
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "56.25%",
                    height: 0,
                    backgroundColor: "#000",
                  }}
                >
                  <video
                    id="quant-promo-video"
                    className="responsive-video"
                    controls
                    playsInline
                    preload="metadata"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <source
                      src="https://res.cloudinary.com/dyjqyuzmu/video/upload/v1/lv_0_20260309233147_azv3nj.mp4"
                      type="video/mp4"
                    />
                    <source
                      src="https://res.cloudinary.com/dyjqyuzmu/video/upload/v1/lv_0_20260309233147_azv3nj.webm"
                      type="video/webm"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="who-we-help" className="about-us section our-mission bg-grey">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="entry" data-aos="fade-up">
                <span>The Quant Advantage</span>
                <h2>Standard Editing vs. Retention Engineering</h2>
                <p>
                  We build the backend systems that turn viewers into paying
                  clients.
                </p>
                <ul className="list-unstyled mt-4">
                  <li className="mb-2">
                    <i className="fas fa-check text-theme mr-2"></i> 0% Fluff
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check text-theme mr-2"></i> Proprietary
                    Portal
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check text-theme mr-2"></i> Predictable
                    ROI
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check text-theme mr-2"></i> Full
                    Automation
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="entry" data-aos="fade-up">
                <img
                  src="/img/our-work2.png"
                  alt=""
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="what-we-do" className="services section bg-grey">
        <div className="container">
          <div className="title-section">
            <span>The Mechanism</span>
            <h2>
              Choose our
              <br />
              creative services
            </h2>
          </div>
          <div className="row first-row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div
                className="entry bg-white p-4 rounded shadow-sm h-100 border"
                data-aos="fade-up"
              >
                <i
                  className="fas fa-couch text-theme mb-3"
                  style={{ fontSize: "50px" }}
                ></i>
                <h5 className="font-weight-bold">Elite Comfort</h5>
                <p className="text-muted mb-0">
                  Instead of scripting, shooting, and editing—just tap 'Approve'
                  from your couch and watch highly qualified leads flow into
                  your pipeline effortlessly.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div
                className="entry bg-white p-4 rounded shadow-sm h-100 border"
                data-aos="fade-up"
              >
                <i
                  className="fas fa-chart-pie text-theme mb-3"
                  style={{ fontSize: "50px" }}
                ></i>
                <h5 className="font-weight-bold">The 50-30-20 Framework</h5>
                <p className="text-muted mb-0">
                  Our proprietary hook structure locks in attention in the first
                  3 seconds, sustains it through the argument, and converts
                  viewers at the CTA.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div
                className="entry bg-white p-4 rounded shadow-sm h-100 border"
                data-aos="fade-up"
              >
                <i
                  className="fas fa-robot text-theme mb-3"
                  style={{ fontSize: "50px" }}
                ></i>
                <h5 className="font-weight-bold">Bespoke Automation</h5>
                <p className="text-muted mb-0">
                  We integrate custom workflows using n8n and AI chatbots,
                  turning your high-retention views into a frictionless, 24/7
                  lead generation machine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio" className="our-work section">
        <div className="container">
          <div className="title-section">
            <span>Portfolio</span>
            <h2>Discover our recent projects</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="entry" data-aos="fade-up" data-aos-delay="0">
                <div
                  className="youtube-shorts-container rounded shadow-sm overflow-hidden"
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "177.77%",
                    height: 0,
                    backgroundColor: "#000",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/OKW_krXnzZ4?controls=0&rel=0&modestbranding=1&iv_load_policy=3"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="entry" data-aos="fade-up" data-aos-delay="100">
                <div
                  className="youtube-shorts-container rounded shadow-sm overflow-hidden"
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "177.77%",
                    height: 0,
                    backgroundColor: "#000",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/OX23CtXx6Kg?controls=0&rel=0&modestbranding=1&iv_load_policy=3"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="entry" data-aos="fade-up" data-aos-delay="200">
                <div
                  className="youtube-shorts-container rounded shadow-sm overflow-hidden"
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "177.77%",
                    height: 0,
                    backgroundColor: "#000",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/s9bMwJi4Q40?controls=0&rel=0&modestbranding=1&iv_load_policy=3"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="how-we-do" className="features section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="entry" data-aos="fade-up">
                <img src="/img/about-us.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="entry" data-aos="fade-up">
                <span>The Pipeline</span>
                <h2>How We Scale Your Brand, Step-by-Step</h2>
                <p>
                  We don't just guess what works. We use a data-driven approach
                  to ensure every piece of content performs.
                </p>
                <div className="accordion" id="accordionExample">
                  <div className="card border-0 mb-2">
                    <div
                      className="card-header bg-white border-0 p-0"
                      id="headingOne"
                    >
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link text-dark font-weight-bold p-0 text-left w-100"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                          style={{ textDecoration: "none" }}
                        >
                          <i className="fas fa-plus mr-2 text-theme"></i> Step
                          01 - Deep Analytics
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body text-muted px-4 py-3">
                        We audit your channel data to find exactly where your
                        current content is bleeding viewers.
                      </div>
                    </div>
                  </div>
                  <div className="card border-0 mb-2">
                    <div
                      className="card-header bg-white border-0 p-0"
                      id="headingTwo"
                    >
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed text-dark font-weight-bold p-0 text-left w-100"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                          style={{ textDecoration: "none" }}
                        >
                          <i className="fas fa-plus mr-2 text-theme"></i> Step
                          02 - Hook Architecture
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body text-muted px-4 py-3">
                        We script and storyboard custom retention mechanisms
                        designed specifically for your high-ticket demographic.
                      </div>
                    </div>
                  </div>
                  <div className="card border-0 mb-2">
                    <div
                      className="card-header bg-white border-0 p-0"
                      id="headingThree"
                    >
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed text-dark font-weight-bold p-0 text-left w-100"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                          style={{ textDecoration: "none" }}
                        >
                          <i className="fas fa-plus mr-2 text-theme"></i> Step
                          03 - Precision Editing
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body text-muted px-4 py-3">
                        Our editors apply psychological pacing, dynamic B-roll,
                        and premium motion graphics to lock in attention.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="why-us" className="why-us section bg-grey">
        <div className="container">
          <div className="title-section">
            <span>The Quant Advantage</span>
            <h2>Standard Editing vs. Retention Engineering</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4">
              <div
                className="entry d-flex align-items-start bg-white p-4 rounded shadow-sm h-100 text-left"
                data-aos="fade-up"
                data-aos-delay="0"
                style={{ margin: 0 }}
              >
                <div className="mr-4 flex-shrink-0">
                  <i
                    className="fas fa-filter text-theme"
                    style={{ fontSize: "50px" }}
                  ></i>
                </div>
                <div>
                  <h5
                    className="mb-2 mt-0 font-weight-bold"
                    style={{ marginTop: 0 }}
                  >
                    0% Fluff
                  </h5>
                  <p className="text-muted mb-0">
                    No useless transitions. Every single cut serves a
                    psychological purpose to keep the viewer engaged.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-4">
              <div
                className="entry d-flex align-items-start bg-white p-4 rounded shadow-sm h-100 text-left"
                data-aos="fade-up"
                data-aos-delay="100"
                style={{ margin: 0 }}
              >
                <div className="mr-4 flex-shrink-0">
                  <i
                    className="fas fa-laptop-code text-theme"
                    style={{ fontSize: "50px" }}
                  ></i>
                </div>
                <div>
                  <h5
                    className="mb-2 mt-0 font-weight-bold"
                    style={{ marginTop: 0 }}
                  >
                    Proprietary Portal
                  </h5>
                  <p className="text-muted mb-0">
                    Track assets, approve videos, and monitor your pipeline
                    directly in your custom-built client dashboard.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-4">
              <div
                className="entry d-flex align-items-start bg-white p-4 rounded shadow-sm h-100 text-left"
                data-aos="fade-up"
                data-aos-delay="200"
                style={{ margin: 0 }}
              >
                <div className="mr-4 flex-shrink-0">
                  <i
                    className="fas fa-chart-line text-theme"
                    style={{ fontSize: "50px" }}
                  ></i>
                </div>
                <div>
                  <h5
                    className="mb-2 mt-0 font-weight-bold"
                    style={{ marginTop: 0 }}
                  >
                    Predictable ROI
                  </h5>
                  <p className="text-muted mb-0">
                    By fixing your retention rate, we drastically lower your CAC
                    and amplify your organic reach.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-4">
              <div
                className="entry d-flex align-items-start bg-white p-4 rounded shadow-sm h-100 text-left"
                data-aos="fade-up"
                data-aos-delay="300"
                style={{ margin: 0 }}
              >
                <div className="mr-4 flex-shrink-0">
                  <i
                    className="fas fa-cogs text-theme"
                    style={{ fontSize: "50px" }}
                  ></i>
                </div>
                <div>
                  <h5
                    className="mb-2 mt-0 font-weight-bold"
                    style={{ marginTop: 0 }}
                  >
                    Full Automation
                  </h5>
                  <p className="text-muted mb-0">
                    We don't just deliver MP4s. We build the backend systems
                    that turn viewers into paying clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="testimonials" className="testimonial-work section bg-grey">
        <div className="container">
          <div className="title-section">
            <span>The Proof</span>
            <h2>Numbers Don't Lie.</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4">
              <div
                className="entry bg-white p-4 rounded shadow-sm"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <p className="text-muted font-italic mb-4">
                  "We went from a 20% retention rate to holding 65% of our
                  audience to the end of the video. The inbound leads have also
                  increased."
                </p>
                <ul
                  className="d-flex justify-content-center p-0 mb-3"
                  style={{ listStyle: "none" }}
                >
                  <li>
                    <i className="fa fa-star text-warning px-1"></i>
                  </li>
                  <li>
                    <i className="fa fa-star text-warning px-1"></i>
                  </li>
                  <li>
                    <i className="fa fa-star text-warning px-1"></i>
                  </li>
                  <li>
                    <i className="fa fa-star text-warning px-1"></i>
                  </li>
                  <li>
                    <i className="fa fa-star text-warning px-1"></i>
                  </li>
                </ul>
                <h5 className="text-center font-weight-bold m-0">
                  CEO, Founder WinRate Consulting
                </h5>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-4">
              <div
                className="entry bg-white p-4 rounded shadow-sm"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p className="text-muted font-italic mb-4">
                  "our organic reach tripled in 30 days. Recommonded if you are
                  tired of freelancers and want free time to close more leads."
                </p>
                <ul
                  className="d-flex justify-content-center p-0 mb-3"
                  style={{ listStyle: "none" }}
                >
                  <li>
                    <i className="fa fa-star text-warning px-1"></i>
                  </li>
                  <li>
                    <i className="fa fa-star text-warning px-1"></i>
                  </li>
                  <li>
                    <i className="fa fa-star text-warning px-1"></i>
                  </li>
                  <li>
                    <i className="fa fa-star text-warning px-1"></i>
                  </li>
                  <li>
                    <i className="fa fa-star text-warning px-1"></i>
                  </li>
                </ul>
                <h5 className="text-center font-weight-bold m-0">
                  Founder, Enterprise Consultant
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="pricing" className="pricing section">
        <div className="container">
          <div className="title-section">
            <span>The Investment</span>
            <h2>Elite Infrastructure for High-Ticket Brands</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="entry" data-aos="fade-up" data-aos-delay="0">
                <h5>Growth</h5>
                <h3>
                  $1499<span>/mo</span>
                </h3>
                <ul>
                  <li>
                    <span>15 Retention-Engineered Assets</span>
                  </li>
                  <li>
                    <span>Custom Hook Strategy</span>
                  </li>
                  <li>
                    <span>Monthly Analytics Audit</span>
                  </li>
                  <li>
                    <span>Client Portal Access</span>
                  </li>
                  <li>
                    <span>Standard Turnaround</span>
                  </li>
                </ul>
                <a
                  href="https://cal.com/quantmedia/15min?overlayCalendar=true"
                  className="button pricing-button btn"
                >
                  Buy Now
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div
                className="entry entry-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h5>Scale</h5>
                <h3>
                  $2499<span>/mo</span>
                </h3>
                <ul>
                  <li>
                    <span>30 Retention-Engineered Assets</span>
                  </li>
                  <li>
                    <span>Long-Form Repurposing</span>
                  </li>
                  <li>
                    <span>Weekly Strategy Sync</span>
                  </li>
                  <li>
                    <span>Dedicated Account Editor</span>
                  </li>
                  <li>
                    <span>Priority Turnaround</span>
                  </li>
                </ul>
                <a
                  href="https://cal.com/quantmedia/15min?overlayCalendar=true"
                  className="button btn"
                >
                  Buy Now
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="entry" data-aos="fade-up" data-aos-delay="200">
                <h5>Partner</h5>
                <h3>
                  $4500<span>/mo</span>
                </h3>
                <ul>
                  <li>
                    <span>60+ High-Retention Assets</span>
                  </li>
                  <li>
                    <span>Full Channel Management</span>
                  </li>
                  <li>
                    <span>n8n Lead Gen Automation</span>
                  </li>
                  <li>
                    <span>Custom AI Chatbot Integration</span>
                  </li>
                  <li>
                    <span>VIP Slack Channel</span>
                  </li>
                </ul>
                <a
                  href="https://cal.com/quantmedia/15min?overlayCalendar=true"
                  className="button pricing-button btn"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about-us" className="about-us section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="entry" data-aos="fade-up">
                <img src="/img/about-us.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="entry" data-aos="fade-up">
                <span>The Mechanism</span>
                <h2>We Don't Just Edit. We Engineer Attention.</h2>
                <p>
                  Most agencies splice clips together and slap on captions. We
                  analyze drop-off graphs and build psychological frameworks
                  that force your audience to keep watching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="contact-us section">
        <div className="container">
          <div className="title-section">
            <span>Contact us</span>
            <h2>Get in touch with us</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div
                className="entry h-100 mb-0 bg-white p-4 rounded shadow-sm"
                data-aos="fade-up"
              >
                <h5 className="font-weight-bold mb-4 text-center">
                  Send us a message
                </h5>
                <form action="https://formspree.io/f/xaqgqejp" method="POST">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control bg-light border-0 py-4"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control bg-light border-0 py-4"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      name="subject"
                      className="form-control bg-light border-0 py-4"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <textarea
                      name="message"
                      className="form-control bg-light border-0 py-3"
                      rows="4"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="button btn border-0 w-100 py-3"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section section pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                className="entry bg-white p-5 rounded shadow-sm text-center border"
                data-aos="fade-up"
              >
                <h2 className="font-weight-bold mb-3">
                  Ready to Scale Your Reach?
                </h2>
                <p
                  className="text-muted mb-4 mx-auto"
                  style={{ maxWidth: "600px", fontSize: "16px" }}
                >
                  Stop burning money on standard editors. Let us engineer your
                  retention and build backend systems that turn viewers into
                  paying clients.
                </p>
                <a
                  href="https://cal.com/quantmedia/15min?overlayCalendar=true"
                  className="button btn px-5 py-3 mt-2"
                  style={{ fontSize: "18px", borderRadius: "8px" }}
                >
                  Book a Growth Audit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <h2>Quant Media</h2>
          <p>
            Quant Media is an elite retention engineering agency scaling
            high-ticket founders through data-driven video and backend
            automation.
          </p>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/quantmedia.co?igsh=dzV3c2Z5d2hiOXBr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/@therealsanchitpatel?si=ZttIp7XRYq5Er_ec"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
          <h6>Copyright © All Right Reserved</h6>
        </div>
      </footer>
    </>
  );
}
