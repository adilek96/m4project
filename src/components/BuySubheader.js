import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function BuySubheader() {
  const { item } = useSelector((state) => state.buy);
  return (
    <section className="min-w-full h-[125px]  grid grid-cols-12">
      <h2 className=" h-[90px] text-[48px] col-start-6 col-span-3 place-self-start  ">
        Buy {item.name}
      </h2>
    </section>
  );
}
