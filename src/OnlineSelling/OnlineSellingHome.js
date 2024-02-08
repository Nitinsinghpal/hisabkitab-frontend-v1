import React from "react";
import './OnlineSellingHome.css'
import { Link } from "react-router-dom";
function OnlineSellingHome() {
  return (
    <div className="osh-main">
      <div className="osh-heading">OnlineSellingHome</div>
      <div className="osh-link-box">
      <Link to='/flipkartHome' className="osh-link-box-links">FlipKart</Link>
      <Link to='/amazonHome' className="osh-link-box-links">Amazon</Link>
      <Link to='/meeshoHome' className="osh-link-box-links">Meesho</Link>
      <Link to='/snapDealHome' className="osh-link-box-links">SnapDeal</Link>
      <Link to='/onlineInvestment' className="osh-link-box-links">Investment</Link>
      </div>
    </div>
  );
}

export default OnlineSellingHome;
