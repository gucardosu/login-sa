import { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./Login.css";
import Logo from '../../assets/sketch.png'

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formInvalido = email === "" || senha === "";

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const payload = { email, senha };
      console.log("JSON do Login:", JSON.stringify(payload));

      setIsLoading(false);
      alert("Login simulado! Veja o console (F12).");
    }, 2000);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <img src={Logo} alt="login-logo" />
        <h2 className="login-title">
          Faça seu login para entrar na plataforma
        </h2>

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
      </div>
    </div>
  );
}
