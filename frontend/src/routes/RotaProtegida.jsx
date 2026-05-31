import { Navigate } from "react-router-dom";

export default function RotaProtegida({ children }) {
  const temCracha = localStorage.getItem("tokenMentorIA");

  if (!temCracha) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
