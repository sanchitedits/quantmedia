import React from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <>
      <div className="header-pages" style={{ background: "#614CAA" }}>
        <Navbar />
      </div>

      <PageHeader title="Portfolio" subtitle="Our Work" />

      <div
        id="portfolio"
        className="our-work section"
        style={{ paddingTop: "80px" }}
      >
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

      <CTA />
      <Footer />
    </>
  );
}
