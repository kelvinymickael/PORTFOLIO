// CSS:
import "./styles.css";

const Button = ({ typeButton, btnIsFill, contentButton, handleNotify }) => {
  return (
    <button
    type={typeButton}
      className={btnIsFill ? "btnFill" : "btnOutline"}
      onClick={handleNotify}
    >
      {contentButton}
    </button>
  );
};

export default Button;
