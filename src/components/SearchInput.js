import React from "react";

export default function SearchInput() {
  return (
    <div className="relative mt-8">
      <input
        type="text"
        className="w-[360px] h-[45px] px-14 py-2 bg-gray-100 border border-gray-300 rounded-[94px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="enter company ticker"
      />
      <div class="absolute inset-y-0 left-4 flex items-center pr-3 pointer-events-none">
        <img src="../img/find.svg" alt="find" />
      </div>
    </div>
  );
}
