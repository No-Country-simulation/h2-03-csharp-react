import { SlSocialFacebook } from "react-icons/sl";
import style from "./facebook-button.module.css";

const FacebookButton = () => {
  return (
    <button className={style.button}>
      Facebook <SlSocialFacebook className={style.icon} />
    </button>
  );
};

export default FacebookButton;
