import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-layout">
      <Sidebar />

      <div className="home-main">
        <Header />

        <main className="home-content">
          <h1>Conteúdo dos Cards (Em breve)</h1>
        </main>
      </div>
    </div>
  );
}
