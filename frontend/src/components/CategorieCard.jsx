import React from "react";

function CategorieCard({ categorie }) {
  return (
    <div className="w-40 bg-beige m-4 flex flex-col items-center font-amatic border-2 rounded-10">
      <h1>{categorie.name}</h1>
      <h3 className="font-striverx">{categorie.description}</h3>
    </div>
  );
}

export default CategorieCard;
