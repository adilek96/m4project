import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { NavLink } from "react-router-dom";

export default function BuySubheader() {
  const { item } = useSelector((state) => state.buy);

  return (
    <section className="min-w-full h-[125px] grid grid-cols-12 place-content-center  ">
      <NavLink
        to="/"
        className="text-[24px] text-purple-600 font-normal col-start-2 col-span-1 hover:text-yellow-400 "
      >
        {"< Back"}
      </NavLink>
      <h2 className=" h-[90px] text-[48px] text-green-500 col-start-6 col-span-4 place-self-start ">
        Buy {item.name.split(" ")[0]}
      </h2>
    </section>
  );
}
