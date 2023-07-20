import React from "react";
import { Link } from "react-router-dom";
import DisplayCategories from "./DisplayCategories";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center  bg-beige font-amatic font-bold ">
      <div className=" flex flex-row justify-between items-center  w-full px-36 py-4 mx-4">
        <DisplayCategories title="epicerie" id={1} />
        <DisplayCategories title="droguerie" id={2} />
        <Link to="/fonctionnement">
          <div className="text-2xl">Fonctionnement</div>
        </Link>
        <Link to="/histoire">
          <div className="text-2xl">Histoire</div>
        </Link>
        <Link to="/contact">
          <div className="text-2xl">Contact</div>
        </Link>
      </div>
      <SearchBar />
    </div>
  );
}

export default Navbar;
