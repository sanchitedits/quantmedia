import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <h2>Quant Media</h2>
        <p>
          Quant Media is an elite retention engineering agency scaling
          high-ticket founders through data-driven video and backend automation.
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
  );
}
