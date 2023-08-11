import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../redux/userStockSlice";

import axios from "axios";

export default function Buy() {
  const [pcs, setPcs] = useState(1);
  const { item } = useSelector((state) => state.buy);
  const { balance } = useSelector((state) => state.balance);
  const { data } = useSelector((state) => state.userStock);
  const dispatch = useDispatch();
  const [totalItemPrice, setTotalItemPrice] = useState(item.price);

  //получаю целую и дробную части из даты
  const numberAsString = item.price;
  const integerPart = parseInt(numberAsString);

  const fractionalPart = parseFloat((numberAsString - integerPart).toFixed(2))
    .toString()
    .split(".")[1];

  //получаю итогувую сумму в зависемости от количества акций
  useEffect(() => {
    setTotalItemPrice(item.price * pcs);
  });

  const numberAsStrin = totalItemPrice;
  const integerPar = parseInt(numberAsStrin);
  const fractionalPar = parseFloat((numberAsStrin - integerPar).toFixed(2))
    .toString()
    .split(".")[1];

  //функция вызова фетч запроса
  const buyHandle = () => {
    const userData = {
      id: item.id,
      userId: "1",
      code: "Credit Card Account",
      amount: pcs,
      purchasePrice: totalItemPrice,
      ticker: item.symbol,
      name: item.name,
    };
    dispatch(setData(userData));
    axios({
      method: "post",
      url: "https://5e8da89e22d8cd0016a798db.mockapi.io/users/1/stocks",
      data: userData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    axios({
      method: "put",
      url: "https://5e8da89e22d8cd0016a798db.mockapi.io/users/1",
      data: {
        currentBalance: balance.currentBalance - totalItemPrice,
      },
    });
  };

  return (
    <section className="grid grid-cols-12 place-content-center  ">
      <div className="grid col-start-6 col-span-3  place-self-start gap-[15px] mt-[20px]">
        <div className=" text-[28px] place-self-center">
          {integerPart}
          <span className="text-[14px]">.{fractionalPart}$</span>
        </div>
        <div className="flex justify-between items-center w-[200px]">
          <p
            className="text-[36px]  text-purple-600 font-[100] cursor-pointer "
            onClick={() => {
              setPcs(pcs > 1 ? pcs - 1 : pcs);
            }}
          >
            -
          </p>
          <p className="text-[64px]  text-purple-600 cursor-pointer">{pcs}</p>
          <p
            className="text-[36px]  text-purple-600 font-[100] cursor-pointer"
            onClick={() => {
              setPcs(pcs + 1);
            }}
          >
            +
          </p>
        </div>
        <p className="text-[24px] place-self-center">
          Buy for <span className="text-[28px]">{integerPar}</span>
          <span>.{fractionalPar}</span>
        </p>
        <button
          className="place-self-center w-[174px] text-[24px] text-purple-600 border-4 rounded-[49px] h-[49px] border-purple-600 hover:text-orange-300 hover:border-orange-300"
          onClick={buyHandle}
        >
          Buy
        </button>
      </div>
    </section>
  );
}
