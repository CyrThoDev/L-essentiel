import React from "react";
import essentielLogoMarron from "../assets/images/LOGOessentielmarron.png";

function Header() {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <img
        className="object-cover h-32 w-30"
        src={essentielLogoMarron}
        alt="Logo marron Essentiel"
      />
      <p className="font-amatic text-3xl">Epicerie vrac zero déchet</p>
    </div>
  );
}

export default Header;
