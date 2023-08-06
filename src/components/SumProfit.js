import React from "react";

export default function SumProfit() {
  return (
    <section className="min-w-full h-[125px]  grid grid-cols-12">
      <p className=" h-[78px] text-[4rem] col-start-6 col-span-3 place-self-start  ">
        24 250.<span className="text-[2rem]">00 $</span>
      </p>
      <p className=" h-[33px] text-[1rem] col-start-6 col-span-2  text-red-600 place-self-center">
        -23.84$ (-0.78%)
      </p>
    </section>
  );
}
