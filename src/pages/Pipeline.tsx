import React from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Pipeline() {
  return (
    <>
      <div className="header-pages" style={{ background: "#614CAA" }}>
        <Navbar />
      </div>

      <PageHeader title="The Pipeline" subtitle="Our Process" />

      <div
        id="how-we-do"
        className="features section"
        style={{ paddingTop: 0 }}
      >
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

      <CTA />
      <Footer />
    </>
  );
}
