import React from "react";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import FamiliesHomePage from "../../components/FamiliesHomePage";
import Welcome from "../../components/Welcome";
import HomeFonctionnement from "../../components/HomeFonctionnement";
import "../../App.css";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Carousel />
      <Welcome />
      <FamiliesHomePage />
      <HomeFonctionnement />
    </>
  );
}

export default Home;
