import React from "react";
import { Link } from "react-router-dom";
import essentielLogoMarron from "../assets/images/LOGOessentielmarron.png";

function Sidebar() {
  return (
    <div className=" bg-beige h-screen ">
      <div className="font-amatic text-center text-2xl m-4 py-10">
        <Link to="/">
          <img
            className="object-cover h-20 w-64"
            src={essentielLogoMarron}
            alt="Logo marron Essentiel"
          />
        </Link>
        ADMINISTRATION
      </div>
      <Link to="familles">
        <div className="w-3/4 p-4 font-amatic text-3xl font-bold">Familles</div>
      </Link>
      <Link to="categories">
        <div className="w-3/4 p-4 font-amatic text-3xl font-bold">
          Categories
        </div>
      </Link>
      <Link to="produits">
        <div className="w-3/4 p-4 font-amatic text-3xl font-bold">Produits</div>
      </Link>
    </div>
  );
}

export default Sidebar;
