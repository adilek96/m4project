import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPurchaseSum } from "../redux/userStockSlice";
import { setTotalProfit } from "../redux/userStockSlice";

export default function SumProfit() {
  const { resultStock, complete, purchaseSum, totalProfit } = useSelector(
    (state) => state.userStock
  );
  const { data } = useSelector((state) => state.stocks);
  const dispatch = useDispatch();

  // получаю обьщюю стоимость акций и профит
  useEffect(() => {
    // получаю массив всех цен акций юзера
    const purchaseArr = resultStock.map((item) => {
      return item.purchasePrice;
    });
    // получаю массив  количеств акций юзера
    const amountArr = resultStock.map((item) => {
      return item.amount;
    });

    // нахожу реальные цены акций
    // сначала получаю массив символов акций пользователя
    const userTickerArr = resultStock.map((item) => {
      return item.ticker;
    });
    // создаю массив с совподающеми акциями
    const newTickerArr = data.filter((element) =>
      userTickerArr.includes(element.symbol)
    );

    // получаю массив цен
    const newPriceArr = newTickerArr.map((item) => {
      return item.price;
    });

    const newFullPrice = newPriceArr.map((item, i) => {
      return item * amountArr[i];
    });

    // обьеденяю цены на новые акции
    const priceSum = newFullPrice.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    //+++++++++++++++++++++++++++++
    // обьеденяю цены на акции пользователя
    const purchaseSum = purchaseArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    const totalSumProfit = (priceSum - purchaseSum).toFixed(2);
    dispatch(setTotalProfit(totalSumProfit));
    dispatch(setPurchaseSum(purchaseSum));
  }, [complete, resultStock]);

  //разбиваю сумму на целую и дробную часть
  const calculateIntFrac = () => {
    const integerPart = parseInt(purchaseSum);
    const fractionalPart = parseFloat((purchaseSum - integerPart).toFixed(2))
      .toString()
      .split(".")[1];
    // если целая часть больше тысячи то разделяем тысячи и сотни пробелом

    const num = () => {
      if (integerPart >= 1000) {
        let thousands = Math.floor(integerPart / 1000);
        let hundreds = integerPart % 1000;
        let formattedInteger =
          thousands + " " + hundreds.toString().padStart(3, "0");
        return formattedInteger;
      } else {
        return integerPart.toString();
      }
    };
    return {
      integer: num(),
      fractional: fractionalPart,
    };
  };

  const calculateTotalProfit = () => {
    const totalFormatted =
      (totalProfit > 0 ? "▲ +" : totalProfit < 0 ? "▼ -" : "") + totalProfit;

    const totalProfiPerc = ((totalProfit / purchaseSum) * 100).toFixed(2);

    const totalColor =
      totalProfit > 0
        ? "text-green-500"
        : totalProfit < 0
        ? "text-red-500"
        : "";
    return {
      totalColor: totalColor,
      totalSumm: totalFormatted,
      totalPerc: totalProfiPerc,
    };
  };

  return (
    <section className="min-w-full h-[125px]  grid grid-cols-12">
      <p className=" h-[78px] text-[4rem] col-start-6 col-span-3 place-self-start  ">
        {calculateIntFrac().integer}.
        <span className="text-[2rem]">{calculateIntFrac().fractional}$</span>
      </p>
      <p className=" h-[33px] text-[1rem] col-start-6 col-span-2  text-red-600 place-self-center">
        {calculateTotalProfit().totalSumm}$
        <span> ({calculateTotalProfit().totalPerc})%</span>
      </p>
    </section>
  );
}
