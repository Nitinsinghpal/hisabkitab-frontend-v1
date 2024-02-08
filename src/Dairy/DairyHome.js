import React from "react";
import Payments from "./Payments";
import { Link } from "react-router-dom";
import "./DairyHome.css";
function DairyHome() {
  return (
    <div className="mainDiv">
      <h1>Dairy Home</h1>
      <div className="paymentButtons">
        <div className="item">
          <Link to="/payments" className="paymentLink">All Payments</Link>
        </div>
        <div className="item">
          <Link to="/VitaPayments" className="paymentLink">Vita Payments</Link>
        </div>
      </div>
    </div>
  );
}

export default DairyHome;
