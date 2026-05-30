import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Register/Register";
import Home from "../pages/Home/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
