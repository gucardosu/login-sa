import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import logoProjeto from "../../assets/logo-web.png";
import "../Login/Login.css";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  const [erroSenha, setErroSenha] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [erroApi, setErroApi] = useState("");

  const navigate = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();
    setErroApi("");

    if (senha !== confirmaSenha) {
      setErroSenha(true);
      setErroApi("As senhas não coincidem!");
      return;
    }

    setErroSenha(false);
    setIsLoading(true);

    const payload = { nome, email, senha };

    try {
      const resposta = await fetch("http://localhost:3000/auth/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        navigate("/login");
      } else {
        setErroApi(`Erro ao cadastrar: ${dados.message || "Tente novamente"}`);
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
        <img src={logoProjeto} alt="Logo Mentor IA+" className="login-logo" />
        <h2 className="login-title">
          Faça seu cadastro para utilizar a plataforma
        </h2>

        {erroApi && <div className="mensagem-erro">{erroApi}</div>}

        <form onSubmit={handleCadastro}>
          <Input
            label="Nome"
            type="text"
            placeholder="Digite seu nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <Input
            label="E-mail:"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            hasError={erroSenha}
          />

          <Input
            label="Confirmar senha"
            type="password"
            placeholder="Confirme a senha"
            value={confirmaSenha}
            onChange={(e) => {
              setConfirmaSenha(e.target.value);
              setErroSenha(false);
              setErroApi("");
            }}
            hasError={erroSenha}
          />

          <div style={{ display: "flex", gap: "16px", marginTop: "32px" }}>
            <Button
              type="button"
              variant="secondary"
              onClick={() => navigate("/login")}
            >
              Voltar
            </Button>

            <Button type="submit" variant="primary" isLoading={isLoading}>
              Cadastrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
