// Hooks:
import { useState } from "react";

// Components:
import Button from "../../components/Button";
import Menu from "../../components/Menu";

// I18n:
import { useTranslation } from "react-i18next";

// Emailjs:
import emailjs from "@emailjs/browser";

// React Toastify:
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// CSS:
import "./styles.css";

const Contact = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNotify = () => {
    if (name == "" || email == "" || message == "") {
      toast.error("Por favor, preencha os campos abaixo!");
    } else {
      toast.success("Mensagem enviada com sucesso!");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICEID,
      import.meta.env.VITE_EMAILJS_TEMPLATEID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      console.log("Ok!");
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="contact">
        <form className="contactForm" onSubmit={handleSubmitForm}>
          <label>
            <input
              autoFocus
              type="text"
              placeholder={t("contactMe.inputName")}
              onChange={({ target }) => setName(target.value)}
              value={name}
            />
          </label>
          <label>
            <input
              type="email"
              placeholder={t("contactMe.inputEmail")}
              onChange={({ target }) => setEmail(target.value)}
              value={email}
            />
          </label>
          <label>
            <textarea
              cols="60"
              placeholder={t("contactMe.inputMessage")}
              onChange={({ target }) => setMessage(target.value)}
              value={message}
            ></textarea>
          </label>
          <Button
            typeButton={"submit"}
            btnIsFill={true}
            contentButton={t("contactMe.buttonSendMessage")}
            handleNotify={handleNotify}
          />
        </form>
        <Menu />
      </section>
    </>
  );
};

export default Contact;
