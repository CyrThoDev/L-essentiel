import React from "react";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center   bg-beige font-amatic font-bold text-xl">
      <ul className=" flex flex-row justify-between w-full px-20 py-4">
        <li className="bg-beige">
          <select className="bg-beige px-4">
            <option value="">EPICERIE</option>
            <option value="option">option1</option>
            <option>option2</option>
            <option>option3</option>
          </select>
        </li>
        <li>
          <select className="bg-beige px-4">
            <option value="">DROGUERIE</option>
            <option value="option">option1</option>
            <option>option2</option>
            <option>option3</option>
          </select>
        </li>
        <li>FONCTIONNEMENT</li>
        <li>HISTOIRE</li>
        <li>CONTACT</li>
      </ul>
      <div className="flex flex-row items-center">
        <input
          placeholder="Recherchez un produit"
          value=""
          //   onChange={(e) => handleChange(e.target.value)}
          className=" bg-beige border-2 rounded-3xl border-white w-40"
        />
        <button type="submit" className="p-4">
          <FaSearch id="search-icon" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
