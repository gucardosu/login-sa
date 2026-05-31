import Card from "../Card/Card";
import Button from "../Button/Button";

export default function MentorIaCard() {
  return (
    <Card title="Mentoria IA" style={{ borderColor: "#EAEAEA" }}>
      <h4 style={{ color: "#15325A", fontSize: "18px", marginBottom: "20px" }}>
        Precisa de ajuda?
      </h4>
      <Button variant="secondary" onClick={() => alert("Abrindo Chat IA...")}>
        Falar com a mentoria IA
      </Button>
    </Card>
  );
}
