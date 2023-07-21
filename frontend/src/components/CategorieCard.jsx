import React from "react";

function CategorieCard({ categorie }) {
  return (
    <div className="w-full bg-white m-4 p-4 flex flex-col items-center font-amatic border-2  border-beige rounded-3xl">
      <h1>{categorie.name}</h1>
      <h3 className="font-roboto">{categorie.description}</h3>
    </div>
  );
}

export default CategorieCard;
