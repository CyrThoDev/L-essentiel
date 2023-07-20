import React, { useState, useEffect } from "react";

function AdminFamilles() {
  return (
    <div className="w-full flex flex-col">
      <div className=" w-full text-center font-amatic text-3xl my-10 underline">
        Administration des familles
      </div>
      <div className="flex flex-col py-20 ml-10">
        <select className="w-1/4 text-center mb-10">
          Selectionnez la famille
          <option>Option1</option>
        </select>
        <label htmlFor="famille" className="ml-2 font-amatic text-2xl">
          Famille
        </label>
        <input
          value=""
          type="text"
          name="Famille"
          id="famille"
          className="mt-2 border-2 rounded-xl text-center border-beige h-14 w-96"
          placeholder="Nom de la famille (ex: Epicerie, droguerie)"
          required
        />
        <button
          type="button"
          className="border-2 bg-green border-green rounded-xl w-28 h-10 text-white mt-6"
        >
          AJOUTER
        </button>
      </div>
    </div>
  );
}

export default AdminFamilles;
