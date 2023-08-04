import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SumProfit from "../components/SumProfit";
import Stock from "../components/Stock";

export default function Stocks() {
  return (
    <>
      <Header />
      <SumProfit />
      <Stock />
      <Footer />
    </>
  );
}
