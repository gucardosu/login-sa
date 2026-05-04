import { useState } from "react";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Register/Register";

export default function App() {
  const [telaAtual, setTelaAtual] = useState("login");

  const irParaCadastro = () => setTelaAtual("cadastro");
  const irParaLogin = () => setTelaAtual("login");

  return (
    <>
      {telaAtual === "login" ? (
        <div style={{ position: "relative" }}>
          <Login />
          <button
            onClick={irParaCadastro}
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "none",
              border: "none",
              color: "#F2994A",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Não tem conta? Criar conta
          </button>
        </div>
      ) : (
        <div style={{ position: "relative" }}>
          <Cadastro aoClicarVoltar={irParaLogin} />
          <button
            onClick={irParaLogin}
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "none",
              border: "none",
              color: "#F2994A",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Já tem conta? Fazer Login
          </button>
        </div>
      )}
    </>
  );
}
