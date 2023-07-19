import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/User/Home";
import UserLayout from "./pages/Layout/UserLayout";
import AdminLayout from "./pages/Layout/AdminLayout";
import AdminLogin from "./pages/Admin/AdminLogin";
import CategoryPage from "./pages/User/CategoryPage";
import "./App.css";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route path="" element={<Home />} />
            <Route
              path="epicerie"
              element={<CategoryPage title="epicerie" id={1} />}
            />
            <Route
              path="droguerie"
              element={<CategoryPage title="droguerie" id={2} />}
            />
          </Route>
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
