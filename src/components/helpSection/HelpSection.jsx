import React from "react";
import deal from "../../img/deal.png";
import rent from "../../img/rent.png";
import sell from "../../img/sell.png";
import fon from "../../img/fon.jpg";

export default function HelpSection() {
  return (
    <div className=" bg-neutral-200">
      <div className="container  mx-auto  ">
        <h2 className="flex   justify-center text-3xl font-bold py-5 ">
          HomeKey Ձեզ կօգնի
        </h2>
        <div className="flex gap-36 py-5 ">
          <div className="flex-1 hover:scale-105 transition duration-500 cursor-pointer">
            <img src={rent} className="mx-auto w-16 my-3" alt="" />
            <h4 className=" flex text-xl font-bold justify-center">Գնել</h4>
            <p>
              Հազարավոր վաճառքի բնակարաններ, սեփական տուն, կոմերցիոն տարածք,
              հող, «փակովի», հիփոթեքով, անմիջապես կառուցապատողից, ողջ
              Հայաստանից, առանց միջնորդավճարի
            </p>
          </div>
          <div className="flex-1  hover:scale-105 transition duration-500 cursor-pointer">
            <img src={deal} className="mx-auto w-16 my-3" alt="" />
            <h4 className=" flex text-xl font-bold justify-center">
              Վարձակալել
            </h4>
            <p>
              Հազարավոր վարձով բնակարաններ, սեփական տուն, կոմերցիոն տարածք, հող,
              մատչելի եւ պրեմիում, երկարատեւ եւ օրավարձով, ողջ Հայաստանից, առանց
              միջնորդավճարի
            </p>
          </div>
          <div className="flex-1 hover:scale-105 transition duration-500 cursor-pointer">
            <img src={sell} className="mx-auto w-16 my-3" alt="" />
            <h4 className=" flex text-xl font-bold justify-center">
              Վաճառել/Վարձով տալ
            </h4>
            <p>
              Տեղադրեք անվճար հայտարարություն, վաճառեք/վարձով տվեք արագ;
              հիփոթեք, իրավաբանական աջակցություն, կադաստր, նոտար, պայմանագրեր
            </p>
          </div>
        </div>
      </div>
      <img src={fon} className="mx-auto py-20 w-full  " alt="" />
    </div>
  );
}
