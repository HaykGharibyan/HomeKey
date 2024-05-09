import React from "react";
import Logo from "../../img/home.png";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-emerald-600">
      <div className="container p-4 mx-auto w-full h-full flex flex-row items-center justify-between">
        <div className="mx-5 flex items-center">
          <img src={Logo} alt="logo" />
          <strong className="mx-3 text-neutral-100 text-3xl whitespace-nowrap">
            <Link to="/">Homekey</Link>
          </strong>
          <div className="flex mx-10 gap-5">
            <button className="text-white transition duration-300 hover:text-neutral-200 hover:scale-105">
              <Link to="/arqVacharq">Առք/Վաճառք</Link>
            </button>
            <button className="text-white transition duration-300 hover:text-neutral-200 hover:scale-105">
              <Link to="/varcakalutyun">Վարձակալություն</Link>
            </button>
          </div>
        </div>
        <div className="ml-auto">
          <button className="ml-2 hover:scale-105 font-semibold px-4 py-2 bg-yellow-400 text-white rounded transition duration-300 transform hover:bg-yellow-500 hover:shadow-lg hover:text-gray-100">
            Տեղադրել հայտարարություն
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
