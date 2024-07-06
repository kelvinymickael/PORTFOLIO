// RRD:
import { Link } from "react-router-dom";

// Components:
import Button from "../../components/Button";
import Menu from "../../components/Menu";

// React Icons:
import { PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";

// I18n:
import { useTranslation } from "react-i18next";

// Import CV:
import myCV from "../../assets/cv/Kelviny-CV.pdf";

// Image:
import iconEmail from "../../assets/icons/icon-email.svg";

// CSS:
import "./styles.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="home">
      <div className="homeWaving">
        <span>
          {t("home.homeWaving")}
          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
            alt="Um icone de uma mão dando tchau"
          />
        </span>
      </div>
      <div className="homeContent">
        <div className="homeUtilsLinks">
          <Link
            to="https://github.com/kelvinymickael"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiGithubLogo className="homeIconGithub" />
          </Link>
          <Link to="/contact">
            {/* Levar usuário para page de contact */}
            <img
              src={iconEmail}
              alt="Icone do email"
              className="homeIconEmail"
            />
          </Link>
          <Link
            to="https://www.linkedin.com/in/kelviny-mickael-450532257/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiLinkedinLogo className="homeIconLinkedin" />
          </Link>
        </div>
        <div className="homeName">
          <h1 className="homeNameText">
            <span>{t("home.name1")}</span> <span>{t("home.name2")}</span>{" "}
            <span>{t("home.name3")}</span> <span>{t("home.name4")}</span>
          </h1>
        </div>
      </div>
      <div className="homeButtonDownloadCV">
        <a href={myCV} download="myCV">
          <Button
            btnIsFill={false}
            contentButton={t("button.buttonDownload")}
          />
        </a>
      </div>
      <Menu />
    </section>
  );
};

export default Home;
