import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Carousel from "./components/Carousel";
import essentielLogoMarron from "./assets/images/LOGOessentielmarron.png";
import UserLayout from "./pages/Layout/UserLayout";
import AdminLayout from "./pages/Layout/AdminLayout";
import "./App.css";

function App() {
  return (
    <div className="HeaderContainer">
      <BrowserRouter>
        <img src={essentielLogoMarron} alt="Logo marron Essentiel" />
        <p className="App">Epicerie vrac zero déchet</p>
        <Carousel />
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
