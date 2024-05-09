import React from "react";
import search from "../../img/magnifier.png";

export default function () {
  return (
    <div className="conainer">
      <div className="flex flex-col w-full   items-center justify-center text-center bg-emerald-600 text-white">
        <div className="flex mt-20">
          <img src={search} alt="searchLogo" />
          <h2 className="text-3xl ml-2 font-bold ">
            Կօգնենք ձեզ գտնել ձեր երազանքների տունը
          </h2>
        </div>
        <input
          className="block bg-white my-10 w-1/2 rounded-md py-2 pl-4 pr-3 border-yellow-300 border-2
             shadow-sm focus:outline-none focus:border-yellow-300 focus:ring-yellow-300 text-black
             focus:ring-1 sm:text-md transition duration-300 ease-in-out hover:bg-yellow-100 hover:border-yellow-500
             hover:text-yellow-900 hover:shadow-md cursor-pointer"
          type="text"
          placeholder="Գրեք ձեր երազած տան հասցեն"
        />
      </div>
    </div>
  );
}
