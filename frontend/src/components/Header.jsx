import React from "react";

// eslint-disable-next-line import/no-unresolved
import { PiBasketDuotone } from "react-icons/Pi";
import essentielLogoMarron from "../assets/images/LOGOessentielmarron.png";

function Header() {
  return (
    <>
      <div className="flex justify-end mr-4 mt-4">
        <PiBasketDuotone id="basket-icon" />
      </div>
      <div className="flex flex-col items-center justify-center my-10">
        <img
          className="object-cover h-32 w-30"
          src={essentielLogoMarron}
          alt="Logo marron Essentiel"
        />
        <p className="font-amatic text-3xl">Epicerie vrac zero déchet</p>
      </div>
    </>
  );
}

export default Header;
