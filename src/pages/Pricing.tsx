import React from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Pricing() {
  return (
    <>
      <div className="header-pages" style={{ background: "#614CAA" }}>
        <Navbar />
      </div>

      <PageHeader title="Pricing" subtitle="The Investment" />

      <div
        id="pricing"
        className="pricing section"
        style={{ paddingTop: "80px" }}
      >
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

      <CTA />
      <Footer />
    </>
  );
}
