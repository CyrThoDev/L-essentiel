import React, { useState, useEffect } from "react";
import connexion from "../../services/connexion";

function AdminFamilles() {
  const familleModel = { id: null, name: "", description: "", slug: "" };
  const [familles, setFamilles] = useState([]);
  const [famille, setFamille] = useState(familleModel);

  const ChooseFamille = (id) => {
    if (id === "") {
      setFamille(familleModel);
    } else {
      setFamille(familles.find((fam) => fam.id === +id));
    }
  };

  const handleFamille = (name, value) => {
    setFamille({ ...famille, [name]: value });
  };

  const getFamilles = async () => {
    try {
      const famillesList = await connexion.get(`/categories`);
      setFamilles(famillesList);
    } catch (error) {
      console.error(error);
    }
  };

  const postFamille = async (event) => {
    event.preventDefault();
    try {
      const familleData = await connexion.post("/familles", famille);
      setFamille(familleData);
      getFamilles();
    } catch (error) {
      console.error(error);
    }
  };

  const updateFamille = async (event) => {
    event.preventDefault();
    try {
      await connexion.put(`/familles/${famille.id}`, famille);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteFamille = async (event) => {
    event.preventDefault();
    try {
      await connexion.delete(`/familles/${famille.id}`);
      setFamille(familleModel);
      getFamilles();
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
        Administration des categories
      </div>
      <form
        className="flex flex-col py-20 ml-10"
        onSubmit={(e) => postFamille(e)}
      >
        <select
          value={famille.id}
          className="w-96 text-center mb-10 font-amatic text-2xl "
          onChange={(e) => ChooseFamille(e.target.value)}
        >
          <option className="mb-4" value="">
            Selectionnez la categorie à modifier
          </option>
          {familles.map((fam) => (
            <option key={fam.id} value={fam.id}>
              {fam.name}
            </option>
          ))}
        </select>
        <label htmlFor="famille" className="ml-2 font-amatic text-2xl">
          Nom de la famille
        </label>
        <input
          value={famille.name}
          type="text"
          name="name"
          className="mt-2 border-2 rounded-xl text-center border-beige h-14 w-96"
          placeholder="Nom de la famille (ex: Epicerie, droguerie)"
          required
          onChange={(event) =>
            handleFamille(event.target.name, event.target.value)
          }
        />
        <label htmlFor="famille" className="ml-2 font-amatic text-2xl">
          Description de la famille
        </label>
        <input
          value={famille.description}
          type="text"
          name="description"
          className="mt-2 border-2 rounded-xl text-center border-beige h-14 w-96"
          placeholder="Nom de la famille (ex: Epicerie, droguerie)"
          required
          onChange={(event) =>
            handleFamille(event.target.name, event.target.value)
          }
        />
        <label htmlFor="famille" className="ml-2 font-amatic text-2xl">
          slug de la famille
        </label>
        <input
          value={famille.slug}
          type="text"
          name="slug"
          className="mt-2 border-2 rounded-xl text-center border-beige h-14 w-96"
          placeholder="Nom de la famille (ex: Epicerie, droguerie)"
          required
          onChange={(event) =>
            handleFamille(event.target.name, event.target.value)
          }
        />

        {!famille.id && (
          <button
            type="submit"
            className="border-2 bg-green border-green rounded-xl w-28 h-10 text-white mt-6"
          >
            AJOUTER
          </button>
        )}
      </form>
      {famille.id && (
        <div className="flex w-96 flex-row justify-around">
          <button
            type="button"
            className="border-2 bg-green border-green rounded-xl w-28 h-10 text-white mt-6"
            onClick={(e) => updateFamille(e)}
          >
            MODIFIER
          </button>
          <button
            type="button"
            className="border-2 bg-green border-green rounded-xl w-28 h-10 text-white mt-6"
            onClick={(e) => deleteFamille(e)}
          >
            SUPPRIMER
          </button>
        </div>
      )}
    </div>
  );
}

export default AdminFamilles;
