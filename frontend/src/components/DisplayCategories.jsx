import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import connexion from "../services/connexion";

function DisplayCategories({ title, id }) {
  const [open, setOpen] = useState(false);

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
    <div className={open ? "open" : null}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="bg-beige text-center"
      >
        <div className="text-2xl">{title}</div>
      </button>
      {open && (
        <>
          <Link to="/epicerie">
            <div>Toutes les catégories</div>
          </Link>
          <div>
            {categoriesList.map((cat) => (
              <Link to={`/epicerie/${cat.name}`}>
                <div key={cat.id}>{cat.name}</div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default DisplayCategories;
