// RRD:
import { Link } from "react-router-dom";

// Context:
import { useShowMenu } from "../../context/ShowMenuContext";

// React Icons:
import { PiX } from "react-icons/pi";

// I18n:
import { useTranslation } from "react-i18next";

// CSS:
import "./styles.css";

const Menu = () => {
  const { t } = useTranslation();

  const { menuIsActive, setMenuIsActive } = useShowMenu();

  return (
    <aside className={`aside ${menuIsActive ? "asideIsActive" : ""}`}>
      <div className="asideMenu">
        <div className="asideMenuClose">
          <button onClick={() => setMenuIsActive(!menuIsActive)}>
            <PiX />
          </button>
        </div>
        <nav className="asideMenuNavigation">
          <ul className="asideMenuLinks">
            <li>
              <Link to="/" onClick={() => setMenuIsActive(!menuIsActive)}>
                {t("header.home")}
              </Link>
            </li>
            <li onClick={() => setMenuIsActive(!menuIsActive)}>
              <Link to="/about">{t("header.about")}</Link>
            </li>
            <li onClick={() => setMenuIsActive(!menuIsActive)}>
              <Link to="/skills">{t("header.skills")}</Link>
            </li>
            <li onClick={() => setMenuIsActive(!menuIsActive)}>
              <Link to="/projects">{t("header.projects")}</Link>
            </li>
            <li onClick={() => setMenuIsActive(!menuIsActive)}>
              <Link to="/contact">{t("header.contactMe")}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Menu;
