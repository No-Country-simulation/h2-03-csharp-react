import style from "./form-error-modal.module.css";

const FormErrorModal = ({ error }: { error: string }) => {
  const translateError = (error: string) => {
    switch (error) {
      case "Invalid login attempt":
        return "Usuario o contraseña incorrecta.";
      case "User not found.":
        return "Usuario no encontrado.";
      default:
        return error;
    }
  };
  return <div className={style.modalContainer}>{translateError(error)}</div>;
};

export default FormErrorModal;
