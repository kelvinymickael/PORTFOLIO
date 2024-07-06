// Services:
import getAllCards from "../../services/fetchCards";

// Hooks:
import { useState, useEffect } from "react";

// Components:
import CardProject from "../../components/CardProject";
import Menu from "../../components/Menu";
import Loading from "../../components/Loading";

// CSS:
import "./styles.css";

const Projects = () => {
  const [dataCards, setDataCards] = useState([]);

  console.log(dataCards);

  useEffect(() => {
    const receiveData = async () => {
      const data = await getAllCards("/cards");
      setDataCards(data);
    };

    receiveData();
  }, []);

  if (dataCards.length === 0) {
    return <Loading />;
  }

  return (
    <section className="containerCards">
      {dataCards.length > 0 &&
        dataCards.map((card) => (
          <CardProject
            key={card.id}
            imageCard={card.imageLocation}
            techs={card.techs}
            viewProject={card.viewProject}
            githubLink={card.githubLink}
            cardId={card.id}
          />
        ))}
      <Menu />
    </section>
  );
};

export default Projects;
