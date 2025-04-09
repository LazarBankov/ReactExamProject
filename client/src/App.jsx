import { Routes, Route } from "react-router";
import "@fortawesome/fontawesome-free/css/all.min.css";

import UserProvider from "./provider/User";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Catalog from "./components/catalog/Catalog";
import DetailsProduct from "./components/details/DetailsProduct";
import About from "./components/about/About";
import ErrorComponent from "./components/error/ErrorComponent";
import Cart from "./components/cart/Cart";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import AuthGuard from "./components/guards/AuthGuard";
import GuestGuard from "./components/guards/GuestGuard";
import AdminGuard from "./components/guards/AdminGuard";
import "./App.css";
import Create from "./components/create/Create";

function App() {
  return (
    <UserProvider>
      <div className="container">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:productId" element={<DetailsProduct />} />
            <Route path="/about" element={<About />} />
            <Route element={<GuestGuard />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route element={<AuthGuard />}>
              <Route element={<AdminGuard />}>
                <Route path="/create" element={<Create />} />
              </Route>
              <Route path="/cart/:userId" element={<Cart />} />
              <Route path="/logout" element={<Logout />} />
            </Route>
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
