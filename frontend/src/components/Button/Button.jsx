import "./Button.css";

export default function Button({
  children,
  onClick,
  isLoading,
  disabled,
  variant = "primary",
}) {
  const estaDesabilitado = disabled || isLoading;

  return (
    <button
      onClick={onClick}
      disabled={estaDesabilitado}
      className={`btn btn-${variant}`}
    >
      {isLoading ? "Carregando..." : children}
    </button>
  );
}
