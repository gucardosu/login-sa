export default function Input({ label, type, value, onChange, hasError, placeholder }) {
  const estiloDoInput = {
    border: hasError ? "2px solid red" : "1px solid #ccc",
    padding: "12px 16px",
    borderRadius: "50px",
    width: "100%",
    marginTop: "8px",
    outline: "none",
    boxSizing: "border-box"
  };

  return (
    <div style={{ marginBottom: "16px", textAlign: "left" }}>
      <label style={{ color: "#1E3A5F", fontWeight: "600", fontSize: "14px", marginLeft: "10px" }}>
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        style={estiloDoInput}
        placeholder={placeholder}
      />
    </div>
  );
}