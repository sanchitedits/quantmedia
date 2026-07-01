import React from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      <div className="header-pages" style={{ background: "#614CAA" }}>
        <Navbar />
      </div>

      <PageHeader title="Our Services" subtitle="What We Do" />

      <div
        id="what-we-do"
        className="services section bg-grey"
        style={{ paddingTop: "80px" }}
      >
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

      <CTA />
      <Footer />
    </>
  );
}
