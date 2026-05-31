import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("tokenMentorIA");

    navigate("/login");
  };

  return (
    <header className="header-container">
      <button className="btn-sair" onClick={handleLogout}>
        Sair
      </button>
    </header>
  );
}
