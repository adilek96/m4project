import React from "react";
import SearchInput from "./SearchInput";

export default function Stock() {
  return (
    <section className="min-w-full flex flex-col items-center gap-8 ">
      <SearchInput />
      <div>
        <table className="table-fixed w-[760px]  ">
          <tr className="h-[65px]">
            <td className="w-[80px] pl-4 font-mono text-[12px]">NKE</td>
            <td className="w-[600px]">Артист</td>
            <td>Год</td>
          </tr>
          <tr className="h-[65px] border-separate border-spacing-2 border border-slate-500">
            <td className="w-[80px] pl-4">Песня</td>
            <td>Артист</td>
            <td>Год</td>
          </tr>
          <tr className="h-[65px] border-separate border-spacing-2 border border-slate-500">
            <td className="w-[80px] pl-4">Песня</td>
            <td>Артист</td>
            <td>Год</td>
          </tr>
          <tr className="h-[65px]">
            <td className="w-[80px] pl-4">Песня</td>
            <td>Артист</td>
            <td>Год</td>
          </tr>
        </table>
      </div>
    </section>
  );
}
