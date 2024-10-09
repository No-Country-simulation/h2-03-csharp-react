import { FcGoogle } from "react-icons/fc";
import style from "./google-button.module.css";

const GoogleButton = () => {
  return (
    <div className={style.button}>
      <FcGoogle />
      <p>Continuar con Google</p>
    </div>
  );
};

export default GoogleButton;
