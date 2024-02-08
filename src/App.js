import "./App.css";
import DairyHome from "./Dairy/DairyHome";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeExpensesHome from "./HomeExpenses/HomeExpensesHome";
import VermicompostHome from "./vermicompost/VermicompostHome";
import Payments from "./Dairy/Payments";
import VitaPayments from "./Dairy/VitaPayments";
import OnlineSellingHome from "./OnlineSelling/OnlineSellingHome";
import AmazonHome from "./OnlineSelling/Amazon/AmazonHome";
import FlipkartHome from "./OnlineSelling/Flipkart/FlipkartHome";
import MeeshoHome from "./OnlineSelling/Meesho/MeeshoHome";
import SnapDealHome from "./OnlineSelling/Snapdeal/SnapDealHome";
import OnlineInvestment from "./OnlineSelling/OnlineInvestment/OnlineInvestment";
import Webpage from "./Css-Practice-Website/Webpage";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/dairy" element={<DairyHome />} />
          <Route path="/homeExpenses" element={<HomeExpensesHome />} />
          <Route path="/vermicompost" element={<VermicompostHome />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/vitaPayments" element={<VitaPayments />} />
          <Route path="/onlineSelling" element={<OnlineSellingHome />} />
          <Route path="/amazonHome" element={<AmazonHome />} />
          <Route path="/flipkartHome" element={<FlipkartHome />} />
          <Route path="/meeshoHome" element={<MeeshoHome />} />
          <Route path="/snapDealHome" element={<SnapDealHome />} />
          <Route path="/onlineInvestment" element={<OnlineInvestment />} />
          <Route path="/webpage" element={<Webpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
