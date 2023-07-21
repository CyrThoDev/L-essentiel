import React from "react";
import { Link } from "react-router-dom";
import epicerie from "../assets/images/epicerie.png";
import droguerie from "../assets/images/droguerie.png";

function FamiliesHomePage() {
  return (
    <>
      <div className="flex flex-row justify-around">
        <Link
          to="/epicerie"
          className=" flex items-center justify-center border-2 bg-green border-green rounded-xl w-1/4 h-48 text-white mt-24"
        >
          <div className="flex flex-col items-center gap-4">
            <img src={epicerie} alt="epicerie" className="w-10" />
            <p className="font-amatic text-2xl"> Les produits de l'épicerie</p>
          </div>
        </Link>
        <Link
          to="/epicerie"
          className=" flex items-center justify-center border-2 bg-green border-green rounded-xl w-1/4 h-48 text-white mt-24"
        >
          <div className="flex flex-col items-center gap-4">
            <img src={droguerie} alt="droguerie" className="w-10" />
            <p className="font-amatic text-2xl">
              {" "}
              Les produits de la droguerie
            </p>
          </div>
        </Link>
      </div>
      <div className=" bg-green h-px w-3/4 m-24 " />
    </>
  );
}

export default FamiliesHomePage;
