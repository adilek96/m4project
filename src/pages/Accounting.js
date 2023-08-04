import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SumProfit from "../components/SumProfit";
import UserStock from "../components/UserStock";

export default function Accounting() {
  return (
    <>
      <Header />
      <SumProfit />
      <UserStock />
      <Footer />
    </>
  );
}
