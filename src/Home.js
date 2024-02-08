import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "./Navbar/Navbar";

function Home() {
  return (
    <div className="main">     
      <div className="sites">
        <Link to="/dairy" className="siteLink">
          Dairy
        </Link>
        <Link to="/homeExpenses" className="siteLink">
          HomeExpenses
        </Link>
        <Link to="/vermicompost" className="siteLink">
          Vermicompost
        </Link>
        <Link to="/onlineSelling" className="siteLink">
          OnlineSelling
        </Link>
      </div>
    </div>
  );
}

export default Home;
