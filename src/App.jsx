import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NoticeList from "./components/NoticeList";

function App() {
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: "Secitex Macau 2026",
      category: "Evento",
      description: "Inscrições abertas para oficinas e palestras",
      author: "COINF/MC",
      date: "01/07/2026",
      featured: true,
      details: `As inscrições para a Secitex Macau 2026 estão abertas até o dia 20/07.
       O evento contará com oficinas, palestras, minicursos e apresentações de projetos.
        As vagas são limitadas e as inscrições devem ser realizadas pela coordenação do campus.`,
      showDetails: false
    },
    {
      id: 2,
      title: "Manutencao do  Lab. de Informatica 2",
      category: "Aviso",
      description: "Indisponível na sexta 03/07/2026",
      author: "CTI/MC",
      date: "01/07/2026",
      featured: false,
      details: `O Laboratório de Informática 2 ficará indisponível durante todo o dia 03/07 para 
      manutenção preventiva dos computadores e da rede. As aulas previstas para o laboratório
       serão remanejadas para outras salas.`,
      showDetails: false
    },
  ]);

  function handleToggleFeatured(id) {
    setNotices((notices) =>
      notices.map(
        (notice) =>
          notice.id === id ? { ...notice, featured: !notice.featured } : notice,
      ),
    );
  }

  function handleDeleteNotice(id) {
    setNotices((notices) =>
       notices.filter((notice) => notice.id !== id));
  }

  function handleToggleDetails(id){
    setNotices((notices) =>
    notices.map((notice) =>
      notice.id === id
        ? { ...notice, showDetails: !notice.showDetails }
        : notice
    )
  );
  }

  return (
    <>
      <Header
        title={"Programação para Internet"}
        subtitle={"Curso Técnico Integrado em Informática"}
      />
      <NoticeList notices={notices} onToggleFeatured={handleToggleFeatured} onDeleteNotice={handleDeleteNotice} onToggleDetails={handleToggleDetails} />
    </>
  );
}

export default App;
