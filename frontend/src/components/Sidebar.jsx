import React from "react";
import { Link } from "react-router-dom";
import essentielLogoMarron from "../assets/images/LOGOessentielmarron.png";

function Sidebar() {
  return (
    <div className="flex flex-col w-2/6 bg-beige h-screen ">
      <div className="flex flex-col font-amatic items-center text-center text-2xl m-4 py-10">
        <Link to="/">
          <img
            className="h-20 w-64"
            src={essentielLogoMarron}
            alt="Logo marron Essentiel"
          />
        </Link>
        ADMINISTRATION
      </div>
      <Link to="familles">
        <div className=" p-4 text-center font-amatic text-3xl font-bold">
          Familles
        </div>
      </Link>
      <Link to="categories">
        <div className="p-4 text-center font-amatic text-3xl font-bold">
          Categories
        </div>
      </Link>
      <Link to="produits">
        <div className=" p-4 text-center font-amatic text-3xl font-bold">
          Produits
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
