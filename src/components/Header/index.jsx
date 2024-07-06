// Hooks:
import { useState } from "react";

// RRD:
import { Link, NavLink } from "react-router-dom";

// Context:
import { useTheme } from "../../context/ThemeContext";
import { useShowMenu } from "../../context/ShowMenuContext";
// import { useLanguageContext } from "../../context/LanguageContext";

// React Icons:
import { PiMoonFill, PiSunFill } from "react-icons/pi";
import { FiAlignRight } from "react-icons/fi";

// I18n:
import { useTranslation } from "react-i18next";

// Image:
import iconUSA from "../../assets/icons/iconUSA.svg";
import iconBrazil from "../../assets/icons/iconBrazil.svg";
// import iconMenu from "../../assets/icons/iconMenu.svg";

// CSS:
import "./styles.css";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { menuIsActive, setMenuIsActive } = useShowMenu();

  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  localStorage.setItem("lang", language);

  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("lang")
  );
  const [flagSelected, setFlagSelected] = useState(
    localStorage.getItem("flag")
  );

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);

    localStorage.setItem(
      "flag",
      flagSelected === "flagUSA" ? "flagBR" : "flagUSA"
    );

    setFlagSelected(localStorage.getItem("flag"));
  };

  return (
    <header className="header">
      <div className="headerLogo">
        <Link to="/">
          <h2>&lt;K. Mickael /&gt;</h2>
        </Link>
      </div>
      <nav className="headerNavigation">
        <ul className="headerLinkLists">
          <li>
            <NavLink to="/" rel="noopener noreferrer">
              {t("header.home")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">{t("header.about")}</NavLink>
          </li>
          <li>
            <NavLink to="/skills">{t("header.skills")}</NavLink>
          </li>
          <li>
            <NavLink to="/projects">{t("header.projects")}</NavLink>
          </li>
          <li>
            <NavLink to="/contact">{t("header.contactMe")}</NavLink>
          </li>
        </ul>
      </nav>
      <div className="headerDarkModeAndLanguageOption">
        <div className="headerDarkMode">
          {theme === "light" ? (
            <PiMoonFill className="dark" onClick={() => setTheme("dark")} />
          ) : (
            <PiSunFill className="light" onClick={() => setTheme("light")} />
          )}
        </div>
        <div className="headerLanguageOption">
          {flagSelected === "flagBR" ? (
            <img
              loading="lazy"
              className="iconBRA"
              src={iconUSA}
              alt="Icone da Bandeira dos Estados Unidos"
              onClick={handleChangeLanguage}
            />
          ) : (
            <img
              loading="lazy"
              className="iconUSA"
              src={iconBrazil}
              alt="Icone da Bandeira do Brasil"
              onClick={handleChangeLanguage}
            />
          )}
          <button type="button" onClick={() => setMenuIsActive(!menuIsActive)}>
            <FiAlignRight className="iconMenu" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
