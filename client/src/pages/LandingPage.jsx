import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Civic Intelligence</h1>
        <div className="nav-buttons">
          <button className="btn signin" onClick={() => navigate("/signin")}>
            Sign In
          </button>
          <button className="btn signup" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h2>Smart Civic Intelligence System</h2>
        <p>
          Enhancing public safety through intelligent monitoring of
          infrastructure, transport, and real-time risk alerts.
        </p>
      </section>

      {/* Modules Section */}
      <section className="modules">
        <div className="module-card">
          <h3>Vital Infrastructure</h3>
          <p>
            Monitor roads, bridges, water, and power systems to ensure safety
            and sustainability.
          </p>
        </div>

        <div className="module-card">
          <h3>Transport Intelligence</h3>
          <p>
            Track traffic congestion, accident-prone zones, and improve
            transportation efficiency.
          </p>
        </div>

        <div className="module-card">
          <h3>Risk Alerts</h3>
          <p>
            Receive real-time alerts for floods, accidents, and emergencies
            based on location.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Civic Intelligence System | MERN Stack Project</p>
      </footer>
    </div>
  );
};

export default LandingPage;
