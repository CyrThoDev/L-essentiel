import React from "react";
import { Link } from "react-router-dom";

function FamiliesHomePage() {
  return (
    <>
      <div className="flex flex-row justify-around">
        <Link
          to="/epicerie"
          className=" flex items-center justify-center border-2 bg-green border-green rounded-xl w-1/4 h-48 text-white mt-36"
        >
          Les produits de l'épicerie
        </Link>
        <Link
          to="/epicerie"
          className=" flex items-center justify-center border-2 bg-green border-green rounded-xl w-1/4 h-48 text-white mt-36"
        >
          Les produits de la droguerie
        </Link>
      </div>
      <div className=" bg-green h-px w-3/4 m-36" />
    </>
  );
}

export default FamiliesHomePage;
