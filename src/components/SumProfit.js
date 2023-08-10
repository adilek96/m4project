import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { setPurchaseSum } from "../redux/userStockSlice";

export default function SumProfit() {
  const { stock, complete, purchaseSum } = useSelector(
    (state) => state.userStock
  );
  const { data } = useSelector((state) => state.stocks);

  // получаю обьщюю стоимость акций и профит

  useEffect(() => {
    const purchaseArr = stock.map((item) => {
      return item.purchasePrice;
    });
    const purchaseSum = purchaseArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    console.log(purchaseSum);
  }, [complete]);

  return (
    <section className="min-w-full h-[125px]  grid grid-cols-12">
      <p className=" h-[78px] text-[4rem] col-start-6 col-span-3 place-self-start  ">
        {purchaseSum}.<span className="text-[2rem]">00 $</span>
      </p>
      <p className=" h-[33px] text-[1rem] col-start-6 col-span-2  text-red-600 place-self-center">
        -23.84$ (-0.78%)
      </p>
    </section>
  );
}
