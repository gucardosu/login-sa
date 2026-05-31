import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import MentorIaCard from "../../components/MentorIaCard/MentorIaCard";
import Button from "../../components/Button/Button";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-layout">
      <Sidebar />

      <div className="home-main">
        <Header />

        <main className="home-content">
          <div className="dashboard-grid">
            <div className="area-aulas">
              <Card title="O que estudar hoje">
                {/* Aula 1 */}
                <div className="aula-item">
                  <div className="aula-info">
                    <h4>Aula: Introdução ao HTML</h4>
                    <p>Duração: 15 min</p>
                  </div>
                  <div>
                    <Button
                      variant="primary"
                      onClick={() => alert("Carregando aula...")}
                    >
                      Assistir Aula
                    </Button>
                  </div>
                </div>

                {/* Aula 2 */}
                <div className="aula-item">
                  <div className="aula-info">
                    <h4>Aula: Tags HTML</h4>
                    <p>Duração: 26 min</p>
                  </div>
                  <div>
                    <Button
                      variant="primary"
                      onClick={() => alert("Carregando aula...")}
                    >
                      Assistir Aula
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            <div className="area-ia">
              <MentorIaCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
