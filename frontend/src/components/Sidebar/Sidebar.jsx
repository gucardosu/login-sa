import logoProjeto from "../../assets/sketch.png"; 
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar-container">
      <div className="sidebar-logo">
        <img src={logoProjeto} alt="Logo Mentor IA+" />
      </div>
      
      <ul className="sidebar-menu">
        <li className="active">Início</li>
        <li>Minhas trilhas</li>
        <li>Mentor IA</li>
        <li>Perfil</li>
      </ul>
    </aside>
  );
}