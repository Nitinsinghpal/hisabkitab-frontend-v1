import React from "react";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/onlineInvestment">onlineInvestment</Link>
          </li>
          <li>
            <Link to="/webpage">webpage</Link>
          </li>
          <li>
            <Link to="/dairy">dairy</Link>
          </li>
          <li>
            <Link to="/homeExpenses">homeExpenses</Link>
          </li>
          <li>
            <Link to="/vermicompost">vermicompost</Link>
          </li>
          <li>
            <Link to="/payments">payments</Link>
          </li>
          <li>
            <Link to="/vitaPayments">vitaPayments</Link>
          </li>
          <li>
            <Link to="/onlineSelling">onlineSelling</Link>
          </li>
          <li>
            <Link to="/amazonHome">amazonHome</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
