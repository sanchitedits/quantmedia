import React from "react";

export default function CTA() {
  return (
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
  );
}
