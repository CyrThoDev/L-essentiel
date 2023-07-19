import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
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
  );
}

export default SearchBar;
