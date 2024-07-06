// RRD:
import { Link } from "react-router-dom";

// I18n:
import { useTranslation } from "react-i18next";

// CSS:
import "./styles.css";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <section className="notFound">
      <div className="notFoundContent">
        <strong>404</strong>
        <strong>{t("pageNotFount")}</strong>
        <p>{t("infosNotFound")}</p>
        <Link to="/">{t("buttonGoToHome")}</Link>
      </div>
    </section>
  );
};

export default NotFound;
