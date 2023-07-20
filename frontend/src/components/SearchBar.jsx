import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import connexion from "../services/connexion";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const getProducts = async () => {
    try {
      const ProductSelection = await connexion.get(`/products?name=${search}`);
      setProducts(ProductSelection);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (value) => {
    setSearch(value);
  };

  const UpdateParams = () => {
    setSearchParams({ name: search });
    getProducts();
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center">
        <input
          placeholder="Recherchez un produit"
          value={search}
          onChange={(e) => handleChange(e.target.value)}
          className="py-2 text-center bg-beige border-2 rounded-3xl border-white w-40"
        />
        <button type="submit" onClick={UpdateParams} className="p-4">
          <FaSearch id="search-icon" />
        </button>
      </div>
      <ul className="">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/${product.name}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
