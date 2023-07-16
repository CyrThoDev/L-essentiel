import React from "react";
import essentielLogoMarron from "../assets/images/LOGOessentielmarron.png";

function Header() {
  return (
    <div className="HeaderContainer">
      <img src={essentielLogoMarron} alt="Logo marron Essentiel" />
      <p className="App">Epicerie vrac zero déchet</p>
    </div>
  );
}

export default Header;
