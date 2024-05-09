import React from "react";
import city2 from "../../img/City2.png";

export default function Footer() {
  return (
    <div className="mt-10">
      <img src={city2} className="absolute -z-10 opacity-40" alt="" />
      <div className="">
        <div class="container mx-auto py-20 ">
          <div class="flex  justify-between  ">
            <div class="flex flex-col">
              <h4 className="text-xl font-semibold">Հիմնական</h4>
              <ul className="mt-2 text-black ">
                <li className="hover:text-neutral-600">
                  <a href="/vachark">Առք/Վաճառք</a>
                </li>
                <li className="hover:text-neutral-600">
                  <a href="/vardzakalutyun">Վարձակալություն </a>
                </li>
                <li className="hover:text-neutral-600">
                  <a href="/contact-us">Կապ մեզ հետ</a>
                </li>
                <li className="hover:text-neutral-600">
                  <a href="/about-us">Մեր մասին</a>
                </li>
              </ul>
            </div>

            <div class="flex flex-col">
              <h4 className="text-xl font-semibold">Կարգավորումներ</h4>
              <ul className="mt-2 text-black">
                <li className="hover:text-neutral-600">
                  <a href="">Օգտագործման պայմաններ</a>
                </li>
                <li className="hover:text-neutral-600">
                  <a href="">Գաղտնիության քաղաքականություն</a>
                </li>
              </ul>
            </div>

            <div class="flex flex-col">
              <h4 className="text-xl font-semibold">բաժանորդագրվել</h4>
              <form action="#" class="">
                <div class="">
                  <input
                    placeholder="էլ․ փոստի հասցե"
                    className=" bg-white my-3  rounded-md py-2 pl-4 pr-3 border-yellow-300 border-2
                  shadow-sm focus:outline-none focus:border-yellow-300 focus:ring-yellow-300 text-black
                  focus:ring-1 sm:text-md transition duration-300 ease-in-out hover:bg-yellow-100 hover:border-yellow-500
                  hover:text-yellow-900 hover:shadow-md cursor-pointer"
                  />
                </div>
                <button disabled="" class="" type="submit">
                  <i class=""></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
