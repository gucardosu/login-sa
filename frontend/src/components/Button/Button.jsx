import "./Button.css";

export default function Button({
  children,
  onClick,
  isLoading,
  disabled,
  variant = "primary",
  type = "button",
}) {
  const estaDesabilitado = disabled || isLoading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={estaDesabilitado}
      className={`btn btn-${variant}`}
    >
      {isLoading ? "Carregando..." : children}
    </button>
  );
}
