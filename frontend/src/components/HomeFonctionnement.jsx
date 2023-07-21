import React from "react";
import image from "../assets/images/2.jpg";
import balance from "../assets/images/balance.jpeg";
import contenant from "../assets/images/contenant.jpeg";
import pot from "../assets/images/pot.jpeg";
import caisse from "../assets/images/caisse.jpeg";

function Fonctionnement() {
  return (
    <>
      <div className="w-full flex flex-row m-10">
        <img src={image} alt="boutique" className=" w-1/4" />
        <div className="w-full h-full flex flex-col items-center mt-10">
          <h2 className="font-amatic text-5xl">Comment ça marche?</h2>
          <div className="flex flex-row w-4/6 justify-center my-20 gap-10">
            <div>
              <img src={contenant} alt="contenant" />
              <p className="font-amatic text-center mt-4">
                Apportez vos contenants propres
              </p>
            </div>
            <div>
              <img src={balance} alt="balance" />
              <p className="font-amatic text-center mt-4">
                Pesez vos contenants vides
              </p>
            </div>
            <div>
              <img src={pot} alt="pot" />
              <p className="font-amatic text-center mt-4">
                Remplissez la quantité désirée
              </p>
            </div>
            <div>
              <img src={caisse} alt="caisse" />
              <p className="font-amatic text-center mt-4">
                Payez uniquement le produit
              </p>
            </div>
          </div>
          <button
            type="button"
            className="border-2 bg-green border-green rounded-xl w-1/4 h-16 text-white"
          >
            {" "}
            En savoir plus
          </button>
        </div>
      </div>
      <div className=" bg-green h-px w-3/4 mx-36" />
    </>
  );
}

export default Fonctionnement;
