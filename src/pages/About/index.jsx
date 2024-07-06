// Components:
import Menu from "../../components/Menu";

// I18n:
import { useTranslation } from "react-i18next";

// Image:
//import myImagePortfolio from "../../assets/images/myImagePortfolio.jpg";

// CSS:
import "./styles.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about">
      <div className="aboutContent">
        <div className="aboutMyImage">
          <img
            src="/myImagePortfolio.jpg"
            alt="Imagem de um homem olhando pra cima"
          />
        </div>
        <div className="aboutInfos">
          <p>{t("about.aboutMe")}</p>
        </div>
      </div>
      <Menu />
    </section>
  );
};

export default About;
