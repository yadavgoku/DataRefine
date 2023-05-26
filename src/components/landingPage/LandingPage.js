import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="overlay">
        <img
          src="https://t3.ftcdn.net/jpg/04/03/00/50/360_F_403005063_p9kaumfmAkv1n1xiHydCwj0ZUyOwhC1M.jpg"
          alt="Fork Finder Logo"
        />
        <h1>Data Filter</h1>
        <p className="landing-p">Discover the best</p>
        <Link to="/data-view">
          <div id="first" className="buttonBox">
            <button className="lets_go_button">Let's Go</button>
            <div className="border"></div>
            <div className="border"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
