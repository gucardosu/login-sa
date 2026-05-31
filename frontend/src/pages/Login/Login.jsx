import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./Login.css";
import Logo from "../../assets/sketch.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [erroApi, setErroApi] = useState("");

  const navigate = useNavigate();

  const formInvalido = email === "" || senha === "";

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErroApi("");

    const payload = { email, senha };

    try {
      const resposta = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        localStorage.setItem("tokenMentorIA", "usuario_autenticado");

        await new Promise((resolve) => setTimeout(resolve, 1500));

        navigate("/home");
      } else {
        setErroApi(`Erro: ${dados.message || "E-mail ou senha incorretos."}`);
      }
      
    } catch (erro) {
      console.error("Erro na conexão:", erro);
      setErroApi("Servidor offline. Verifique se o Node está rodando.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <img src={Logo} alt="login-logo" />
        <h2 className="login-title">
          Faça seu login para entrar na plataforma
        </h2>

        {erroApi && <div className="mensagem-erro">{erroApi}</div>}

        <form onSubmit={handleLogin}>
          <Input
            label="E-mail:"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Senha:"
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <div style={{ marginTop: "24px" }}>
            <Button
              type="submit"
              disabled={formInvalido}
              isLoading={isLoading}
              variant="primary"
            >
              Entrar
            </Button>
          </div>
        </form>

        <div style={{ marginTop: "24px", textAlign: "center" }}>
          <button
            type="button"
            onClick={() => navigate("/cadastro")}
            style={{
              background: "none",
              border: "none",
              color: "#F2994A",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Não tem conta? Criar conta
          </button>
        </div>
      </div>
    </div>
  );
}
