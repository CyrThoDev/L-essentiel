import Home from "./pages/Home";
import Carousel from "./components/Carousel";
import essentielLogoMarron from "./assets/images/LOGOessentielmarron.png";
import "./App.css";

function App() {
  return (
    <div className="HeaderContainer">
      <img src={essentielLogoMarron} alt="Logo marron Essentiel" />
      <p className="App">Epicerie vrac zero déchet</p>
      <Home />
      <Carousel />
    </div>
  );
}

export default App;
