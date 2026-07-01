import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Layout
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import Mechanism from "./pages/Mechanism";
import Pipeline from "./pages/Pipeline";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Advantage from "./pages/Advantage";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mechanism" element={<Mechanism />} />
          <Route path="/pipeline" element={<Pipeline />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/advantage" element={<Advantage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
