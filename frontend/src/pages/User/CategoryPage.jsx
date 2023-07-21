import React, { useState, useEffect } from "react";
import connexion from "../../services/connexion";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import CategorieCard from "../../components/CategorieCard";

function CategoryPage({ title, id, img }) {
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
      <div className=" w-full flex flex-row justify-between items-center my-2 ">
        {title === "epicerie" ? (
          <div className="w-full h-56 flex justify-center items-center font-amatic text-5xl font-bold">
            Les produits de l'{title}
          </div>
        ) : (
          <div className="w-full  h-56 flex justify-center items-center font-amatic text-5xl font-bold">
            Les produits de la {title}
          </div>
        )}
        <div className="w-full flex justify-center">
          <img className=" w-full mr-4" src={img} alt={title} />
        </div>
      </div>
      <div className="grid grid-cols-4 justify-center gap-10 m-20">
        {categoriesList.map((cat) => (
          <CategorieCard categorie={cat} />
        ))}
      </div>
    </>
  );
}

export default CategoryPage;
