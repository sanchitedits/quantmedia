import React from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <div className="header-pages" style={{ background: "#614CAA" }}>
        <Navbar />
      </div>

      <PageHeader title="Contact Us" subtitle="Get in touch" />

      <div
        id="contact"
        className="contact-us section"
        style={{ paddingTop: "80px" }}
      >
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
                      rows={4}
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

      <CTA />
      <Footer />
    </>
  );
}
