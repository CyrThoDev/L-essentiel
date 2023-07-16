import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/User/Home";
import UserLayout from "./pages/Layout/UserLayout";
import AdminLayout from "./pages/Layout/AdminLayout";
import "./App.css";

function App() {
  return (
    <div className="">
      <BrowserRouter>
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
