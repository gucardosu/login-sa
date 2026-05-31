import "./Card.css";

export default function Card({ title, children, style }) {
  return (
    <div className="card-container" style={style}>
      {title && <h3 className="card-title">{title}</h3>}
      {children}
    </div>
  );
}
