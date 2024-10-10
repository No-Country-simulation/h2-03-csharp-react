import { FcGoogle } from "react-icons/fc";
import style from "./google-button.module.css";

const GoogleButton = () => {
  return (
    <div className={style.button}>
      <FcGoogle className={style.googleLogo} />
      <p>Continuar con Google</p>
      <div></div>
    </div>
  );
};

export default GoogleButton;
