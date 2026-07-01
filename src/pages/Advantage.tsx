import React from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Advantage() {
  return (
    <>
      <div className="header-pages" style={{ background: "#614CAA" }}>
        <Navbar />
      </div>

      <PageHeader title="The Quant Advantage" subtitle="Why Choose Us" />

      <div
        id="why-us"
        className="why-us section bg-grey"
        style={{ paddingTop: "80px" }}
      >
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

      <CTA />
      <Footer />
    </>
  );
}
