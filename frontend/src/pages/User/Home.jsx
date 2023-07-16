import React from "react";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";
import "../../App.css";

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        Produits issus de l'agriculture biologique vendus en vrac ou sans
        emballage jetable
      </div>
      <Carousel />
    </>
  );
}

export default Home;
