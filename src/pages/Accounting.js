import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SumProfit from "../components/SumProfit";
import UserStock from "../components/UserStock";
import Line from "../components/Line";

export default function Accounting() {
  return (
    <>
      <Header />
      <SumProfit />
      <Line />
      <UserStock />
      <Footer />
    </>
  );
}
