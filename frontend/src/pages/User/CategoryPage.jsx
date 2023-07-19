import React, { useState, useEffect } from "react";
import connexion from "../../services/connexion";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import CategorieCard from "../../components/CategorieCard";

function CategoryPage({ title, id }) {
  const [categoriesList, setCategoriesList] = useState([]);

  const getCategories = async () => {
    try {
      const categories = await connexion.get(`/familles/${id}/categories`);
      setCategoriesList(categories);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <Header />
      <Navbar />
      <div className=" flex flex-row justify-between items-center my-28 ">
        {title === "epicerie" ? (
          <div className="w-full flex justify-center font-amatic text-3xl">
            Les produits de l'{title}
          </div>
        ) : (
          <div className="w-full flex justify-center font-amatic text-3xl">
            Les produits de la {title}
          </div>
        )}
        <div className="w-full flex justify-center">{id}</div>
      </div>
      <div className="grid grid-cols-4">
        {categoriesList.map((cat) => (
          <CategorieCard categorie={cat} />
        ))}
      </div>
    </>
  );
}

export default CategoryPage;
