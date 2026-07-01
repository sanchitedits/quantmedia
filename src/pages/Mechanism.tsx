import React from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Mechanism() {
  return (
    <>
      <div className="header-pages" style={{ background: "#614CAA" }}>
        <Navbar />
      </div>

      <PageHeader title="The Mechanism" subtitle="How It Works" />

      <div id="about-us" className="about-us section" style={{ paddingTop: 0 }}>
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

      <CTA />
      <Footer />
    </>
  );
}
