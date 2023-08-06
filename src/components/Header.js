import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="min-w-full h-[67px] grid grid-cols-12 ">
      <nav className="col-start-2 col-span-4 self-center">
        <ul className="flex">
          <li className="text-xl w-[143px] h-[44px] text-black flex flex-col justify-center items-center hover:text-yellow-400 hover:border-b-2 border-black active:text-purple-600">
            <NavLink to="/">Account</NavLink>
          </li>
          <li className="text-xl w-[143px] h-[44px] text-black flex flex-col justify-center items-center hover:text-yellow-400 hover:border-b-2 border-black active:text-purple-600">
            <NavLink to="/stocks">Stock</NavLink>
          </li>
        </ul>
      </nav>
      <div className="col-start-11 col-span-1  w-[97px] place-self-center">
        <NavLink to="/">
          <img src="../img/logo.svg" alt="logo" />{" "}
        </NavLink>
      </div>
    </header>
  );
}
