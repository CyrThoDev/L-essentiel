import React, { useState, useEffect } from "react";
import connexion from "../../services/connexion";

function AdminFamilles() {
  const familleModel = { id: null, name: "" };
  const [familles, setFamilles] = useState([]);
  const [famille, setFamille] = useState({ familleModel });

  const handleFamille = (id) => {
    if (id === "") {
      setFamille(familleModel);
    } else {
      setFamille(familles.find((fam) => fam.id === +id));
    }
  };
  const getFamilles = async () => {
    try {
      const famillesList = await connexion.get(`/familles`);
      setFamilles(famillesList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFamilles();
  }, []);

  return (
    <div className="w-full flex flex-col">
      <div className=" w-full text-center font-amatic text-3xl my-10 underline">
        Administration des familles
      </div>
      <div className="flex flex-col py-20 ml-10">
        <select
          value={famille.id}
          className="w-96 text-center mb-10 font-amatic text-2xl "
          onChange={(e) => handleFamille(e.target.value)}
        >
          <option className="mb-4" value="">
            Selectionnez la famille à modifier
          </option>
          {familles.map((fam) => (
            <option key={fam.id} value={fam.id}>
              {fam.name}
            </option>
          ))}
        </select>
        <label htmlFor="famille" className="ml-2 font-amatic text-2xl">
          Famille
        </label>
        <input
          value={famille.name}
          type="text"
          name="Famille"
          id="famille"
          className="mt-2 border-2 rounded-xl text-center border-beige h-14 w-96"
          placeholder="Nom de la famille (ex: Epicerie, droguerie)"
          required
        />
        {!famille.id && (
          <button
            type="button"
            className="border-2 bg-green border-green rounded-xl w-28 h-10 text-white mt-6"
          >
            AJOUTER
          </button>
        )}
        {famille.id && (
          <div className="flex w-96 flex-row justify-around">
            <button
              type="button"
              className="border-2 bg-green border-green rounded-xl w-28 h-10 text-white mt-6"
            >
              MODIFIER
            </button>
            <button
              type="button"
              className="border-2 bg-green border-green rounded-xl w-28 h-10 text-white mt-6"
            >
              SUPPRIMER
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminFamilles;
